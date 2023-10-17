/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function(t) {
    var e = {};

    function r(n) {
        if (e[n]) return e[n].exports;
        var i = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.m = t, r.c = e, r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) r.d(n, i, function(e) {
                return t[e]
            }.bind(null, i));
        return n
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 191)
}([function(t, e, r) {
    (function(e) {
        var r = function(t) {
            return t && t.Math == Math && t
        };
        t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof e && e) || function() {
            return this
        }() || Function("return this")()
    }).call(this, r(61))
}, function(t, e, r) {
    var n = r(0),
        i = r(96).f,
        a = r(72),
        o = r(27),
        s = r(99),
        l = r(273),
        c = r(106);
    t.exports = function(t, e) {
        var r, h, u, f, p, d = t.target,
            m = t.global,
            v = t.stat;
        if (r = m ? n : v ? n[d] || s(d, {}) : (n[d] || {}).prototype)
            for (h in e) {
                if (f = e[h], u = t.noTargetGet ? (p = i(r, h)) && p.value : r[h], !c(m ? h : d + (v ? "." : "#") + h, t.forced) && void 0 !== u) {
                    if (typeof f == typeof u) continue;
                    l(f, u)
                }(t.sham || u && u.sham) && a(f, "sham", !0), o(r, h, f, t)
            }
    }
}, function(t, e) {
    var r = Function.prototype,
        n = r.bind,
        i = r.call,
        a = n && n.bind(i);
    t.exports = n ? function(t) {
        return t && a(i, t)
    } : function(t) {
        return t && function() {
            return i.apply(t, arguments)
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}, function(t, e, r) {
    var n = r(275);
    t.exports = function(t) {
        return n(t.length)
    }
}, function(t, e) {
    t.exports = function(t) {
        return "function" == typeof t
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(149),
        a = r(17),
        o = r(100),
        s = r(148),
        l = r(147),
        c = i("wks"),
        h = n.Symbol,
        u = h && h.for,
        f = l ? h : h && h.withoutSetter || o;
    t.exports = function(t) {
        if (!a(c, t) || !s && "string" != typeof c[t]) {
            var e = "Symbol." + t;
            s && a(h, t) ? c[t] = h[t] : c[t] = l && u ? u(e) : f(e)
        }
        return c[t]
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(97),
        a = n.Object;
    t.exports = function(t) {
        return a(i(t))
    }
}, function(t, e, r) {
    var n = r(6),
        i = r(36),
        a = r(18),
        o = n("unscopables"),
        s = Array.prototype;
    null == s[o] && a.f(s, o, {
        configurable: !0,
        value: i(null)
    }), t.exports = function(t) {
        s[o][t] = !0
    }
}, function(t, e, r) {
    "use strict";
    var n = {},
        i = {},
        a = [],
        o = window.Webflow || [],
        s = window.jQuery,
        l = s(window),
        c = s(document),
        h = s.isFunction,
        u = n._ = r(193),
        f = n.tram = r(125) && s.tram,
        p = !1,
        d = !1;

    function m(t) {
        n.env() && (h(t.design) && l.on("__wf_design", t.design), h(t.preview) && l.on("__wf_preview", t.preview)), h(t.destroy) && l.on("__wf_destroy", t.destroy), t.ready && h(t.ready) && function(t) {
            if (p) return void t.ready();
            if (u.contains(a, t.ready)) return;
            a.push(t.ready)
        }(t)
    }

    function v(t) {
        h(t.design) && l.off("__wf_design", t.design), h(t.preview) && l.off("__wf_preview", t.preview), h(t.destroy) && l.off("__wf_destroy", t.destroy), t.ready && h(t.ready) && function(t) {
            a = u.filter(a, function(e) {
                return e !== t.ready
            })
        }(t)
    }
    f.config.hideBackface = !1, f.config.keepInherited = !0, n.define = function(t, e, r) {
        i[t] && v(i[t]);
        var n = i[t] = e(s, u, r) || {};
        return m(n), n
    }, n.require = function(t) {
        return i[t]
    }, n.push = function(t) {
        p ? h(t) && t() : o.push(t)
    }, n.env = function(t) {
        var e = window.__wf_design,
            r = void 0 !== e;
        return t ? "design" === t ? r && e : "preview" === t ? r && !e : "slug" === t ? r && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : r
    };
    var g, y = navigator.userAgent.toLowerCase(),
        E = n.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        b = n.env.chrome = /chrome/.test(y) && /Google/.test(navigator.vendor) && parseInt(y.match(/chrome\/(\d+)\./)[1], 10),
        _ = n.env.ios = /(ipod|iphone|ipad)/.test(y);
    n.env.safari = /safari/.test(y) && !b && !_, E && c.on("touchstart mousedown", function(t) {
        g = t.target
    }), n.validClick = E ? function(t) {
        return t === g || s.contains(t, g)
    } : function() {
        return !0
    };
    var x, w = "resize.webflow orientationchange.webflow load.webflow";

    function A(t, e) {
        var r = [],
            n = {};
        return n.up = u.throttle(function(t) {
            u.each(r, function(e) {
                e(t)
            })
        }), t && e && t.on(e, n.up), n.on = function(t) {
            "function" == typeof t && (u.contains(r, t) || r.push(t))
        }, n.off = function(t) {
            r = arguments.length ? u.filter(r, function(e) {
                return e !== t
            }) : []
        }, n
    }

    function S(t) {
        h(t) && t()
    }

    function T() {
        x && (x.reject(), l.off("load", x.resolve)), x = new s.Deferred, l.on("load", x.resolve)
    }
    n.resize = A(l, w), n.scroll = A(l, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), n.redraw = A(), n.location = function(t) {
        window.location = t
    }, n.env() && (n.location = function() {}), n.ready = function() {
        p = !0, d ? (d = !1, u.each(i, m)) : u.each(a, S), u.each(o, S), n.resize.up()
    }, n.load = function(t) {
        x.then(t)
    }, n.destroy = function(t) {
        t = t || {}, d = !0, l.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), u.each(i, v), n.resize.off(), n.scroll.off(), n.redraw.off(), a = [], o = [], "pending" === x.state() && T()
    }, s(n.ready), T(), t.exports = window.Webflow = n
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e) {
    var r = Array.isArray;
    t.exports = r
}, function(t, e, r) {
    var n = r(0),
        i = r(13),
        a = n.String,
        o = n.TypeError;
    t.exports = function(t) {
        if (i(t)) return t;
        throw o(a(t) + " is not an object")
    }
}, function(t, e, r) {
    var n = r(5);
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : n(t)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(57);
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = {
        IX2EngineActionTypes: !0,
        IX2EngineConstants: !0
    };
    e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
    var a = r(388);
    Object.keys(a).forEach(function(t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return a[t]
            }
        }))
    });
    var o = r(175);
    Object.keys(o).forEach(function(t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return o[t]
            }
        }))
    });
    var s = r(389);
    Object.keys(s).forEach(function(t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return s[t]
            }
        }))
    });
    var l = r(390);
    Object.keys(l).forEach(function(t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return l[t]
            }
        }))
    });
    var c = n(r(391));
    e.IX2EngineActionTypes = c;
    var h = n(r(392));
    e.IX2EngineConstants = h
}, function(t, e) {
    var r = Function.prototype.call;
    t.exports = r.bind ? r.bind(r) : function() {
        return r.apply(r, arguments)
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(5);
    t.exports = function(t, e) {
        return arguments.length < 2 ? (r = n[t], i(r) ? r : void 0) : n[t] && n[t][e];
        var r
    }
}, function(t, e, r) {
    var n = r(2),
        i = r(7),
        a = n({}.hasOwnProperty);
    t.exports = Object.hasOwn || function(t, e) {
        return a(i(t), e)
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(20),
        a = r(150),
        o = r(12),
        s = r(69),
        l = n.TypeError,
        c = Object.defineProperty;
    e.f = i ? c : function(t, e, r) {
        if (o(t), e = s(e), o(r), a) try {
            return c(t, e, r)
        } catch (t) {}
        if ("get" in r || "set" in r) throw l("Accessors not supported");
        return "value" in r && (t[e] = r.value), t
    }
}, function(t, e, r) {
    var n = r(130),
        i = "object" == typeof self && self && self.Object === Object && self,
        a = n || i || Function("return this")();
    t.exports = a
}, function(t, e, r) {
    var n = r(10);
    t.exports = !n(function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(5),
        a = r(70),
        o = n.TypeError;
    t.exports = function(t) {
        if (i(t)) return t;
        throw o(a(t) + " is not a function")
    }
}, function(t, e, r) {
    var n = r(2),
        i = r(21),
        a = n(n.bind);
    t.exports = function(t, e) {
        return i(t), void 0 === e ? t : a ? a(t, e) : function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}, function(t, e, r) {
    var n = r(41),
        i = r(97);
    t.exports = function(t) {
        return n(i(t))
    }
}, function(t, e, r) {
    var n = r(22),
        i = r(2),
        a = r(41),
        o = r(7),
        s = r(4),
        l = r(44),
        c = i([].push),
        h = function(t) {
            var e = 1 == t,
                r = 2 == t,
                i = 3 == t,
                h = 4 == t,
                u = 6 == t,
                f = 7 == t,
                p = 5 == t || u;
            return function(d, m, v, g) {
                for (var y, E, b = o(d), _ = a(b), x = n(m, v), w = s(_), A = 0, S = g || l, T = e ? S(d, w) : r || f ? S(d, 0) : void 0; w > A; A++)
                    if ((p || A in _) && (E = x(y = _[A], A, b), t))
                        if (e) T[A] = E;
                        else if (E) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return y;
                    case 6:
                        return A;
                    case 2:
                        c(T, y)
                } else switch (t) {
                    case 4:
                        return !1;
                    case 7:
                        c(T, y)
                }
                return u ? -1 : i || h ? h : T
            }
        };
    t.exports = {
        forEach: h(0),
        map: h(1),
        filter: h(2),
        some: h(3),
        every: h(4),
        find: h(5),
        findIndex: h(6),
        filterReject: h(7)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(10);
    t.exports = function(t, e) {
        var r = [][t];
        return !!r && n(function() {
            r.call(null, e || function() {
                throw 1
            }, 1)
        })
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(5),
        a = r(17),
        o = r(72),
        s = r(99),
        l = r(73),
        c = r(42),
        h = r(151).CONFIGURABLE,
        u = c.get,
        f = c.enforce,
        p = String(String).split("String");
    (t.exports = function(t, e, r, l) {
        var c, u = !!l && !!l.unsafe,
            d = !!l && !!l.enumerable,
            m = !!l && !!l.noTargetGet,
            v = l && void 0 !== l.name ? l.name : e;
        i(r) && ("Symbol(" === String(v).slice(0, 7) && (v = "[" + String(v).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!a(r, "name") || h && r.name !== v) && o(r, "name", v), (c = f(r)).source || (c.source = p.join("string" == typeof v ? v : ""))), t !== n ? (u ? !m && t[e] && (d = !0) : delete t[e], d ? t[e] = r : o(t, e, r)) : d ? t[e] = r : s(e, r)
    })(Function.prototype, "toString", function() {
        return i(this) && u(this).source || l(this)
    })
}, function(t, e, r) {
    var n = r(197),
        i = r(251),
        a = r(94),
        o = r(11),
        s = r(260);
    t.exports = function(t) {
        return "function" == typeof t ? t : null == t ? a : "object" == typeof t ? o(t) ? i(t[0], t[1]) : n(t) : s(t)
    }
}, function(t, e, r) {
    var n = r(209),
        i = r(214);
    t.exports = function(t, e) {
        var r = i(t, e);
        return n(r) ? r : void 0
    }
}, function(t, e) {
    t.exports = function(t) {
        return null != t && "object" == typeof t
    }
}, function(t, e, r) {
    var n, i, a = r(0),
        o = r(32),
        s = a.process,
        l = a.Deno,
        c = s && s.versions || l && l.version,
        h = c && c.v8;
    h && (i = (n = h.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !i && o && (!(n = o.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = o.match(/Chrome\/(\d+)/)) && (i = +n[1]), t.exports = i
}, function(t, e, r) {
    var n = r(16);
    t.exports = n("navigator", "userAgent") || ""
}, function(t, e, r) {
    var n = r(21);
    t.exports = function(t, e) {
        var r = t[e];
        return null == r ? void 0 : n(r)
    }
}, function(t, e) {
    var r = Math.ceil,
        n = Math.floor;
    t.exports = function(t) {
        var e = +t;
        return e != e || 0 === e ? 0 : (e > 0 ? n : r)(e)
    }
}, function(t, e, r) {
    var n = r(49);
    t.exports = Array.isArray || function(t) {
        return "Array" == n(t)
    }
}, function(t, e, r) {
    var n, i = r(12),
        a = r(281),
        o = r(105),
        s = r(74),
        l = r(156),
        c = r(101),
        h = r(102),
        u = h("IE_PROTO"),
        f = function() {},
        p = function(t) {
            return "<script>" + t + "<\/script>"
        },
        d = function(t) {
            t.write(p("")), t.close();
            var e = t.parentWindow.Object;
            return t = null, e
        },
        m = function() {
            try {
                n = new ActiveXObject("htmlfile")
            } catch (t) {}
            var t, e;
            m = "undefined" != typeof document ? document.domain && n ? d(n) : ((e = c("iframe")).style.display = "none", l.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(p("document.F=Object")), t.close(), t.F) : d(n);
            for (var r = o.length; r--;) delete m.prototype[o[r]];
            return m()
        };
    s[u] = !0, t.exports = Object.create || function(t, e) {
        var r;
        return null !== t ? (f.prototype = i(t), r = new f, f.prototype = null, r[u] = t) : r = m(), void 0 === e ? r : a(r, e)
    }
}, function(t, e) {
    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function n(e) {
        return "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? t.exports = n = function(t) {
            return r(t)
        } : t.exports = n = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : r(t)
        }, n(e)
    }
    t.exports = n
}, function(t, e) {
    t.exports = function(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
}, function(t, e, r) {
    var n = r(47),
        i = r(210),
        a = r(211),
        o = "[object Null]",
        s = "[object Undefined]",
        l = n ? n.toStringTag : void 0;
    t.exports = function(t) {
        return null == t ? void 0 === t ? s : o : l && l in Object(t) ? i(t) : a(t)
    }
}, function(t, e, r) {
    var n = r(129),
        i = r(87);
    t.exports = function(t) {
        return null != t && i(t.length) && !n(t)
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(2),
        a = r(10),
        o = r(49),
        s = n.Object,
        l = i("".split);
    t.exports = a(function() {
        return !s("z").propertyIsEnumerable(0)
    }) ? function(t) {
        return "String" == o(t) ? l(t, "") : s(t)
    } : s
}, function(t, e, r) {
    var n, i, a, o = r(272),
        s = r(0),
        l = r(2),
        c = r(13),
        h = r(72),
        u = r(17),
        f = r(71),
        p = r(102),
        d = r(74),
        m = s.TypeError,
        v = s.WeakMap;
    if (o || f.state) {
        var g = f.state || (f.state = new v),
            y = l(g.get),
            E = l(g.has),
            b = l(g.set);
        n = function(t, e) {
            if (E(g, t)) throw new m("Object already initialized");
            return e.facade = t, b(g, t, e), e
        }, i = function(t) {
            return y(g, t) || {}
        }, a = function(t) {
            return E(g, t)
        }
    } else {
        var _ = p("state");
        d[_] = !0, n = function(t, e) {
            if (u(t, _)) throw new m("Object already initialized");
            return e.facade = t, h(t, _, e), e
        }, i = function(t) {
            return u(t, _) ? t[_] : {}
        }, a = function(t) {
            return u(t, _)
        }
    }
    t.exports = {
        set: n,
        get: i,
        has: a,
        enforce: function(t) {
            return a(t) ? i(t) : n(t, {})
        },
        getterFor: function(t) {
            return function(e) {
                var r;
                if (!c(e) || (r = i(e)).type !== t) throw m("Incompatible receiver, " + t + " required");
                return r
            }
        }
    }
}, function(t, e, r) {
    var n = r(2),
        i = r(10),
        a = r(5),
        o = r(75),
        s = r(16),
        l = r(73),
        c = function() {},
        h = [],
        u = s("Reflect", "construct"),
        f = /^\s*(?:class|function)\b/,
        p = n(f.exec),
        d = !f.exec(c),
        m = function(t) {
            if (!a(t)) return !1;
            try {
                return u(c, h, t), !0
            } catch (t) {
                return !1
            }
        };
    t.exports = !u || i(function() {
        var t;
        return m(m.call) || !m(Object) || !m(function() {
            t = !0
        }) || t
    }) ? function(t) {
        if (!a(t)) return !1;
        switch (o(t)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1
        }
        return d || !!p(f, l(t))
    } : m
}, function(t, e, r) {
    var n = r(157);
    t.exports = function(t, e) {
        return new(n(t))(0 === e ? 0 : e)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(57);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2ElementsReducer = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0;
    var i = n(r(120));
    e.IX2BrowserSupport = i;
    var a = n(r(178));
    e.IX2Easings = a;
    var o = n(r(180));
    e.IX2EasingUtils = o;
    var s = n(r(398));
    e.IX2ElementsReducer = s;
    var l = n(r(182));
    e.IX2VanillaPlugins = l;
    var c = n(r(400));
    e.IX2VanillaUtils = c
}, function(t, e) {
    function r() {
        return t.exports = r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }, r.apply(this, arguments)
    }
    t.exports = r
}, function(t, e, r) {
    var n = r(19).Symbol;
    t.exports = n
}, function(t, e, r) {
    var n = r(67),
        i = 1 / 0;
    t.exports = function(t) {
        if ("string" == typeof t || n(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -i ? "-0" : e
    }
}, function(t, e, r) {
    var n = r(2),
        i = n({}.toString),
        a = n("".slice);
    t.exports = function(t) {
        return a(i(t), 8, -1)
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e, r) {
    var n = r(34),
        i = Math.max,
        a = Math.min;
    t.exports = function(t, e) {
        var r = n(t);
        return r < 0 ? i(r + e, 0) : a(r, e)
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, r) {
    "use strict";
    var n = r(69),
        i = r(18),
        a = r(68);
    t.exports = function(t, e, r) {
        var o = n(e);
        o in t ? i.f(t, o, a(0, r)) : t[o] = r
    }
}, function(t, e, r) {
    var n = r(10),
        i = r(6),
        a = r(31),
        o = i("species");
    t.exports = function(t) {
        return a >= 51 || !n(function() {
            var e = [];
            return (e.constructor = {})[o] = function() {
                return {
                    foo: 1
                }
            }, 1 !== e[t](Boolean).foo
        })
    }
}, function(t, e, r) {
    var n = r(49),
        i = r(0);
    t.exports = "process" == n(i.process)
}, function(t, e, r) {
    "use strict";
    var n = r(368);

    function i(t, e) {
        var r = document.createEvent("CustomEvent");
        r.initCustomEvent(e, !0, !0, null), t.dispatchEvent(r)
    }
    var a = window.jQuery,
        o = {},
        s = {
            reset: function(t, e) {
                n.triggers.reset(t, e)
            },
            intro: function(t, e) {
                n.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE")
            },
            outro: function(t, e) {
                n.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE")
            }
        };
    o.triggers = {}, o.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, a.extend(o.triggers, s), t.exports = o
}, function(t, e) {
    t.exports = function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var r in t)
                if (Object.prototype.hasOwnProperty.call(t, r)) {
                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
                    n.get || n.set ? Object.defineProperty(e, r, n) : e[r] = t[r]
                }
        return e.default = t, e
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.clone = l, e.addLast = u, e.addFirst = f, e.removeLast = p, e.removeFirst = d, e.insert = m, e.removeAt = v, e.replaceAt = g, e.getIn = y, e.set = E, e.setIn = b, e.update = _, e.updateIn = x, e.merge = w, e.mergeDeep = A, e.mergeIn = S, e.omit = T, e.addDefaults = I;
    /*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     */
    var i = "INVALID_ARGS";

    function a(t) {
        throw new Error(t)
    }

    function o(t) {
        var e = Object.keys(t);
        return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
    }
    var s = {}.hasOwnProperty;

    function l(t) {
        if (Array.isArray(t)) return t.slice();
        for (var e = o(t), r = {}, n = 0; n < e.length; n++) {
            var i = e[n];
            r[i] = t[i]
        }
        return r
    }

    function c(t, e, r) {
        var n = r;
        null == n && a(i);
        for (var s = !1, u = arguments.length, f = Array(u > 3 ? u - 3 : 0), p = 3; p < u; p++) f[p - 3] = arguments[p];
        for (var d = 0; d < f.length; d++) {
            var m = f[d];
            if (null != m) {
                var v = o(m);
                if (v.length)
                    for (var g = 0; g <= v.length; g++) {
                        var y = v[g];
                        if (!t || void 0 === n[y]) {
                            var E = m[y];
                            e && h(n[y]) && h(E) && (E = c(t, e, n[y], E)), void 0 !== E && E !== n[y] && (s || (s = !0, n = l(n)), n[y] = E)
                        }
                    }
            }
        }
        return n
    }

    function h(t) {
        var e = void 0 === t ? "undefined" : n(t);
        return null != t && ("object" === e || "function" === e)
    }

    function u(t, e) {
        return Array.isArray(e) ? t.concat(e) : t.concat([e])
    }

    function f(t, e) {
        return Array.isArray(e) ? e.concat(t) : [e].concat(t)
    }

    function p(t) {
        return t.length ? t.slice(0, t.length - 1) : t
    }

    function d(t) {
        return t.length ? t.slice(1) : t
    }

    function m(t, e, r) {
        return t.slice(0, e).concat(Array.isArray(r) ? r : [r]).concat(t.slice(e))
    }

    function v(t, e) {
        return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1))
    }

    function g(t, e, r) {
        if (t[e] === r) return t;
        for (var n = t.length, i = Array(n), a = 0; a < n; a++) i[a] = t[a];
        return i[e] = r, i
    }

    function y(t, e) {
        if (!Array.isArray(e) && a(i), null != t) {
            for (var r = t, n = 0; n < e.length; n++) {
                var o = e[n];
                if (void 0 === (r = null != r ? r[o] : void 0)) return r
            }
            return r
        }
    }

    function E(t, e, r) {
        var n = null == t ? "number" == typeof e ? [] : {} : t;
        if (n[e] === r) return n;
        var i = l(n);
        return i[e] = r, i
    }

    function b(t, e, r) {
        return e.length ? function t(e, r, n, i) {
            var a = void 0,
                o = r[i];
            a = i === r.length - 1 ? n : t(h(e) && h(e[o]) ? e[o] : "number" == typeof r[i + 1] ? [] : {}, r, n, i + 1);
            return E(e, o, a)
        }(t, e, r, 0) : r
    }

    function _(t, e, r) {
        return E(t, e, r(null == t ? void 0 : t[e]))
    }

    function x(t, e, r) {
        return b(t, e, r(y(t, e)))
    }

    function w(t, e, r, n, i, a) {
        for (var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), l = 6; l < o; l++) s[l - 6] = arguments[l];
        return s.length ? c.call.apply(c, [null, !1, !1, t, e, r, n, i, a].concat(s)) : c(!1, !1, t, e, r, n, i, a)
    }

    function A(t, e, r, n, i, a) {
        for (var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), l = 6; l < o; l++) s[l - 6] = arguments[l];
        return s.length ? c.call.apply(c, [null, !1, !0, t, e, r, n, i, a].concat(s)) : c(!1, !0, t, e, r, n, i, a)
    }

    function S(t, e, r, n, i, a, o) {
        var s = y(t, e);
        null == s && (s = {});
        for (var l = arguments.length, h = Array(l > 7 ? l - 7 : 0), u = 7; u < l; u++) h[u - 7] = arguments[u];
        return b(t, e, h.length ? c.call.apply(c, [null, !1, !1, s, r, n, i, a, o].concat(h)) : c(!1, !1, s, r, n, i, a, o))
    }

    function T(t, e) {
        for (var r = Array.isArray(e) ? e : [e], n = !1, i = 0; i < r.length; i++)
            if (s.call(t, r[i])) {
                n = !0;
                break
            }
        if (!n) return t;
        for (var a = {}, l = o(t), c = 0; c < l.length; c++) {
            var h = l[c];
            r.indexOf(h) >= 0 || (a[h] = t[h])
        }
        return a
    }

    function I(t, e, r, n, i, a) {
        for (var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), l = 6; l < o; l++) s[l - 6] = arguments[l];
        return s.length ? c.call.apply(c, [null, !0, !1, t, e, r, n, i, a].concat(s)) : c(!0, !1, t, e, r, n, i, a)
    }
    var P = {
        clone: l,
        addLast: u,
        addFirst: f,
        removeLast: p,
        removeFirst: d,
        insert: m,
        removeAt: v,
        replaceAt: g,
        getIn: y,
        set: E,
        setIn: b,
        update: _,
        updateIn: x,
        merge: w,
        mergeDeep: A,
        mergeIn: S,
        omit: T,
        addDefaults: I
    };
    e.default = P
}, function(t, e, r) {
    var n = r(199),
        i = r(200),
        a = r(201),
        o = r(202),
        s = r(203);

    function l(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    l.prototype.clear = n, l.prototype.delete = i, l.prototype.get = a, l.prototype.has = o, l.prototype.set = s, t.exports = l
}, function(t, e, r) {
    var n = r(80);
    t.exports = function(t, e) {
        for (var r = t.length; r--;)
            if (n(t[r][0], e)) return r;
        return -1
    }
}, function(t, e) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (r = window)
    }
    t.exports = r
}, function(t, e, r) {
    var n = r(29)(Object, "create");
    t.exports = n
}, function(t, e, r) {
    var n = r(223);
    t.exports = function(t, e) {
        var r = t.__data__;
        return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
    }
}, function(t, e, r) {
    var n = r(137),
        i = r(88),
        a = r(40);
    t.exports = function(t) {
        return a(t) ? n(t) : i(t)
    }
}, function(t, e, r) {
    var n = r(241),
        i = r(30),
        a = Object.prototype,
        o = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        l = n(function() {
            return arguments
        }()) ? n : function(t) {
            return i(t) && o.call(t, "callee") && !s.call(t, "callee")
        };
    t.exports = l
}, function(t, e, r) {
    var n = r(11),
        i = r(93),
        a = r(252),
        o = r(255);
    t.exports = function(t, e) {
        return n(t) ? t : i(t, e) ? [t] : a(o(t))
    }
}, function(t, e, r) {
    var n = r(39),
        i = r(30),
        a = "[object Symbol]";
    t.exports = function(t) {
        return "symbol" == typeof t || i(t) && n(t) == a
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e, r) {
    var n = r(270),
        i = r(146);
    t.exports = function(t) {
        var e = n(t, "string");
        return i(e) ? e : e + ""
    }
}, function(t, e, r) {
    var n = r(0).String;
    t.exports = function(t) {
        try {
            return n(t)
        } catch (t) {
            return "Object"
        }
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(99),
        a = n["__core-js_shared__"] || i("__core-js_shared__", {});
    t.exports = a
}, function(t, e, r) {
    var n = r(20),
        i = r(18),
        a = r(68);
    t.exports = n ? function(t, e, r) {
        return i.f(t, e, a(1, r))
    } : function(t, e, r) {
        return t[e] = r, t
    }
}, function(t, e, r) {
    var n = r(2),
        i = r(5),
        a = r(71),
        o = n(Function.toString);
    i(a.inspectSource) || (a.inspectSource = function(t) {
        return o(t)
    }), t.exports = a.inspectSource
}, function(t, e) {
    t.exports = {}
}, function(t, e, r) {
    var n = r(0),
        i = r(107),
        a = r(5),
        o = r(49),
        s = r(6)("toStringTag"),
        l = n.Object,
        c = "Arguments" == o(function() {
            return arguments
        }());
    t.exports = i ? o : function(t) {
        var e, r, n;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = l(t), s)) ? r : c ? o(e) : "Object" == (n = o(e)) && a(e.callee) ? "Arguments" : n
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(15),
        a = r(21),
        o = r(12),
        s = r(70),
        l = r(77),
        c = n.TypeError;
    t.exports = function(t, e) {
        var r = arguments.length < 2 ? l(t) : e;
        if (a(r)) return o(i(r, t));
        throw c(s(t) + " is not iterable")
    }
}, function(t, e, r) {
    var n = r(75),
        i = r(33),
        a = r(52),
        o = r(6)("iterator");
    t.exports = function(t) {
        if (null != t) return i(t, o) || i(t, "@@iterator") || a[n(t)]
    }
}, function(t, e, r) {
    var n = r(18).f,
        i = r(17),
        a = r(6)("toStringTag");
    t.exports = function(t, e, r) {
        t && !i(t = r ? t : t.prototype, a) && n(t, a, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, r) {
    var n = r(2);
    t.exports = n([].slice)
}, function(t, e) {
    t.exports = function(t, e) {
        return t === e || t != t && e != e
    }
}, function(t, e, r) {
    var n = r(29)(r(19), "Map");
    t.exports = n
}, function(t, e, r) {
    var n = r(215),
        i = r(222),
        a = r(224),
        o = r(225),
        s = r(226);

    function l(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    l.prototype.clear = n, l.prototype.delete = i, l.prototype.get = a, l.prototype.has = o, l.prototype.set = s, t.exports = l
}, function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = e.length, i = t.length; ++r < n;) t[i + r] = e[r];
        return t
    }
}, function(t, e, r) {
    (function(t) {
        var n = r(19),
            i = r(242),
            a = e && !e.nodeType && e,
            o = a && "object" == typeof t && t && !t.nodeType && t,
            s = o && o.exports === a ? n.Buffer : void 0,
            l = (s ? s.isBuffer : void 0) || i;
        t.exports = l
    }).call(this, r(138)(t))
}, function(t, e) {
    var r = 9007199254740991,
        n = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, e) {
        var i = typeof t;
        return !!(e = null == e ? r : e) && ("number" == i || "symbol" != i && n.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
}, function(t, e, r) {
    var n = r(243),
        i = r(244),
        a = r(245),
        o = a && a.isTypedArray,
        s = o ? i(o) : n;
    t.exports = s
}, function(t, e) {
    var r = 9007199254740991;
    t.exports = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
    }
}, function(t, e, r) {
    var n = r(89),
        i = r(246),
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!n(t)) return i(t);
        var e = [];
        for (var r in Object(t)) a.call(t, r) && "constructor" != r && e.push(r);
        return e
    }
}, function(t, e) {
    var r = Object.prototype;
    t.exports = function(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || r)
    }
}, function(t, e, r) {
    var n = r(247),
        i = r(81),
        a = r(248),
        o = r(249),
        s = r(140),
        l = r(39),
        c = r(131),
        h = c(n),
        u = c(i),
        f = c(a),
        p = c(o),
        d = c(s),
        m = l;
    (n && "[object DataView]" != m(new n(new ArrayBuffer(1))) || i && "[object Map]" != m(new i) || a && "[object Promise]" != m(a.resolve()) || o && "[object Set]" != m(new o) || s && "[object WeakMap]" != m(new s)) && (m = function(t) {
        var e = l(t),
            r = "[object Object]" == e ? t.constructor : void 0,
            n = r ? c(r) : "";
        if (n) switch (n) {
            case h:
                return "[object DataView]";
            case u:
                return "[object Map]";
            case f:
                return "[object Promise]";
            case p:
                return "[object Set]";
            case d:
                return "[object WeakMap]"
        }
        return e
    }), t.exports = m
}, function(t, e, r) {
    var n = r(92);
    t.exports = function(t, e, r) {
        var i = null == t ? void 0 : n(t, e);
        return void 0 === i ? r : i
    }
}, function(t, e, r) {
    var n = r(66),
        i = r(48);
    t.exports = function(t, e) {
        for (var r = 0, a = (e = n(e, t)).length; null != t && r < a;) t = t[i(e[r++])];
        return r && r == a ? t : void 0
    }
}, function(t, e, r) {
    var n = r(11),
        i = r(67),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        o = /^\w*$/;
    t.exports = function(t, e) {
        if (n(t)) return !1;
        var r = typeof t;
        return !("number" != r && "symbol" != r && "boolean" != r && null != t && !i(t)) || o.test(t) || !a.test(t) || null != e && t in Object(e)
    }
}, function(t, e) {
    t.exports = function(t) {
        return t
    }
}, function(t, e, r) {
    var n = r(263),
        i = r(23),
        a = r(67),
        o = NaN,
        s = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        h = parseInt;
    t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (a(t)) return o;
        if (i(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = i(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = n(t);
        var r = l.test(t);
        return r || c.test(t) ? h(t.slice(2), r ? 2 : 8) : s.test(t) ? o : +t
    }
}, function(t, e, r) {
    var n = r(20),
        i = r(15),
        a = r(269),
        o = r(68),
        s = r(24),
        l = r(69),
        c = r(17),
        h = r(150),
        u = Object.getOwnPropertyDescriptor;
    e.f = n ? u : function(t, e) {
        if (t = s(t), e = l(e), h) try {
            return u(t, e)
        } catch (t) {}
        if (c(t, e)) return o(!i(a.f, t, e), t[e])
    }
}, function(t, e, r) {
    var n = r(0).TypeError;
    t.exports = function(t) {
        if (null == t) throw n("Can't call method on " + t);
        return t
    }
}, function(t, e, r) {
    var n = r(2);
    t.exports = n({}.isPrototypeOf)
}, function(t, e, r) {
    var n = r(0),
        i = Object.defineProperty;
    t.exports = function(t, e) {
        try {
            i(n, t, {
                value: e,
                configurable: !0,
                writable: !0
            })
        } catch (r) {
            n[t] = e
        }
        return e
    }
}, function(t, e, r) {
    var n = r(2),
        i = 0,
        a = Math.random(),
        o = n(1..toString);
    t.exports = function(t) {
        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + o(++i + a, 36)
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(13),
        a = n.document,
        o = i(a) && i(a.createElement);
    t.exports = function(t) {
        return o ? a.createElement(t) : {}
    }
}, function(t, e, r) {
    var n = r(149),
        i = r(100),
        a = n("keys");
    t.exports = function(t) {
        return a[t] || (a[t] = i(t))
    }
}, function(t, e, r) {
    var n = r(152),
        i = r(105).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return n(t, i)
    }
}, function(t, e, r) {
    var n = r(24),
        i = r(51),
        a = r(4),
        o = function(t) {
            return function(e, r, o) {
                var s, l = n(e),
                    c = a(l),
                    h = i(o, c);
                if (t && r != r) {
                    for (; c > h;)
                        if ((s = l[h++]) != s) return !0
                } else
                    for (; c > h; h++)
                        if ((t || h in l) && l[h] === r) return t || h || 0;
                return !t && -1
            }
        };
    t.exports = {
        includes: o(!0),
        indexOf: o(!1)
    }
}, function(t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, e, r) {
    var n = r(10),
        i = r(5),
        a = /#|\.prototype\./,
        o = function(t, e) {
            var r = l[s(t)];
            return r == h || r != c && (i(e) ? n(e) : !!e)
        },
        s = o.normalize = function(t) {
            return String(t).replace(a, ".").toLowerCase()
        },
        l = o.data = {},
        c = o.NATIVE = "N",
        h = o.POLYFILL = "P";
    t.exports = o
}, function(t, e, r) {
    var n = {};
    n[r(6)("toStringTag")] = "z", t.exports = "[object z]" === String(n)
}, function(t, e, r) {
    var n = r(6)("iterator"),
        i = !1;
    try {
        var a = 0,
            o = {
                next: function() {
                    return {
                        done: !!a++
                    }
                },
                return: function() {
                    i = !0
                }
            };
        o[n] = function() {
            return this
        }, Array.from(o, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !i) return !1;
        var r = !1;
        try {
            var a = {};
            a[n] = function() {
                return {
                    next: function() {
                        return {
                            done: r = !0
                        }
                    }
                }
            }, t(a)
        } catch (t) {}
        return r
    }
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(15),
        a = r(50),
        o = r(151),
        s = r(5),
        l = r(298),
        c = r(110),
        h = r(111),
        u = r(78),
        f = r(72),
        p = r(27),
        d = r(6),
        m = r(52),
        v = r(160),
        g = o.PROPER,
        y = o.CONFIGURABLE,
        E = v.IteratorPrototype,
        b = v.BUGGY_SAFARI_ITERATORS,
        _ = d("iterator"),
        x = function() {
            return this
        };
    t.exports = function(t, e, r, o, d, v, w) {
        l(r, e, o);
        var A, S, T, I = function(t) {
                if (t === d && O) return O;
                if (!b && t in D) return D[t];
                switch (t) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() {
                            return new r(this, t)
                        }
                }
                return function() {
                    return new r(this)
                }
            },
            P = e + " Iterator",
            C = !1,
            D = t.prototype,
            M = D[_] || D["@@iterator"] || d && D[d],
            O = !b && M || I(d),
            k = "Array" == e && D.entries || M;
        if (k && (A = c(k.call(new t))) !== Object.prototype && A.next && (a || c(A) === E || (h ? h(A, E) : s(A[_]) || p(A, _, x)), u(A, P, !0, !0), a && (m[P] = x)), g && "values" == d && M && "values" !== M.name && (!a && y ? f(D, "name", "values") : (C = !0, O = function() {
                return i(M, this)
            })), d)
            if (S = {
                    values: I("values"),
                    keys: v ? O : I("keys"),
                    entries: I("entries")
                }, w)
                for (T in S) !b && !C && T in D || p(D, T, S[T]);
            else n({
                target: e,
                proto: !0,
                forced: b || C
            }, S);
        return a && !w || D[_] === O || p(D, _, O, {
            name: d
        }), m[e] = O, S
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(17),
        a = r(5),
        o = r(7),
        s = r(102),
        l = r(299),
        c = s("IE_PROTO"),
        h = n.Object,
        u = h.prototype;
    t.exports = l ? h.getPrototypeOf : function(t) {
        var e = o(t);
        if (i(e, c)) return e[c];
        var r = e.constructor;
        return a(r) && e instanceof r ? r.prototype : e instanceof h ? u : null
    }
}, function(t, e, r) {
    var n = r(2),
        i = r(12),
        a = r(300);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t, e = !1,
            r = {};
        try {
            (t = n(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []), e = r instanceof Array
        } catch (t) {}
        return function(r, n) {
            return i(r), a(n), e ? t(r, n) : r.__proto__ = n, r
        }
    }() : void 0)
}, function(t, e) {
    var r = Function.prototype,
        n = r.apply,
        i = r.bind,
        a = r.call;
    t.exports = "object" == typeof Reflect && Reflect.apply || (i ? a.bind(n) : function() {
        return a.apply(n, arguments)
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(75),
        a = n.String;
    t.exports = function(t) {
        if ("Symbol" === i(t)) throw TypeError("Cannot convert a Symbol value to a string");
        return a(t)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(16),
        i = r(18),
        a = r(6),
        o = r(20),
        s = a("species");
    t.exports = function(t) {
        var e = n(t),
            r = i.f;
        o && e && !e[s] && r(e, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(22),
        a = r(15),
        o = r(12),
        s = r(70),
        l = r(154),
        c = r(4),
        h = r(98),
        u = r(76),
        f = r(77),
        p = r(153),
        d = n.TypeError,
        m = function(t, e) {
            this.stopped = t, this.result = e
        },
        v = m.prototype;
    t.exports = function(t, e, r) {
        var n, g, y, E, b, _, x, w = r && r.that,
            A = !(!r || !r.AS_ENTRIES),
            S = !(!r || !r.IS_ITERATOR),
            T = !(!r || !r.INTERRUPTED),
            I = i(e, w),
            P = function(t) {
                return n && p(n, "normal", t), new m(!0, t)
            },
            C = function(t) {
                return A ? (o(t), T ? I(t[0], t[1], P) : I(t[0], t[1])) : T ? I(t, P) : I(t)
            };
        if (S) n = t;
        else {
            if (!(g = f(t))) throw d(s(t) + " is not iterable");
            if (l(g)) {
                for (y = 0, E = c(t); E > y; y++)
                    if ((b = C(t[y])) && h(v, b)) return b;
                return new m(!1)
            }
            n = u(t, g)
        }
        for (_ = n.next; !(x = a(_, n)).done;) {
            try {
                b = C(x.value)
            } catch (t) {
                p(n, "throw", t)
            }
            if ("object" == typeof b && b && h(v, b)) return b
        }
        return new m(!1)
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(98),
        a = n.TypeError;
    t.exports = function(t, e) {
        if (i(e, t)) return t;
        throw a("Incorrect invocation")
    }
}, function(t, e, r) {
    var n = r(27);
    t.exports = function(t, e, r) {
        for (var i in e) n(t, i, e[i], r);
        return t
    }
}, function(t, e, r) {
    "use strict";
    r.r(e), r.d(e, "ActionTypes", function() {
        return a
    }), r.d(e, "default", function() {
        return o
    });
    var n = r(169),
        i = r(383),
        a = {
            INIT: "@@redux/INIT"
        };

    function o(t, e, r) {
        var s;
        if ("function" == typeof e && void 0 === r && (r = e, e = void 0), void 0 !== r) {
            if ("function" != typeof r) throw new Error("Expected the enhancer to be a function.");
            return r(o)(t, e)
        }
        if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
        var l = t,
            c = e,
            h = [],
            u = h,
            f = !1;

        function p() {
            u === h && (u = h.slice())
        }

        function d() {
            return c
        }

        function m(t) {
            if ("function" != typeof t) throw new Error("Expected listener to be a function.");
            var e = !0;
            return p(), u.push(t),
                function() {
                    if (e) {
                        e = !1, p();
                        var r = u.indexOf(t);
                        u.splice(r, 1)
                    }
                }
        }

        function v(t) {
            if (!Object(n.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (f) throw new Error("Reducers may not dispatch actions.");
            try {
                f = !0, c = l(c, t)
            } finally {
                f = !1
            }
            for (var e = h = u, r = 0; r < e.length; r++) e[r]();
            return t
        }
        return v({
            type: a.INIT
        }), (s = {
            dispatch: v,
            subscribe: m,
            getState: d,
            replaceReducer: function(t) {
                if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                l = t, v({
                    type: a.INIT
                })
            }
        })[i.default] = function() {
            var t, e = m;
            return (t = {
                subscribe: function(t) {
                    if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

                    function r() {
                        t.next && t.next(d())
                    }
                    return r(), {
                        unsubscribe: e(r)
                    }
                }
            })[i.default] = function() {
                return this
            }, t
        }, s
    }
}, function(t, e, r) {
    "use strict";

    function n() {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        if (0 === e.length) return function(t) {
            return t
        };
        if (1 === e.length) return e[0];
        var n = e[e.length - 1],
            i = e.slice(0, -1);
        return function() {
            return i.reduceRight(function(t, e) {
                return e(t)
            }, n.apply(void 0, arguments))
        }
    }
    r.r(e), r.d(e, "default", function() {
        return n
    })
}, function(t, e, r) {
    "use strict";
    var n = r(3);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0;
    var i = n(r(176)),
        a = "undefined" != typeof window;
    e.IS_BROWSER_ENV = a;
    var o = function(t, e) {
        return a ? t() : e
    };
    e.withBrowser = o;
    var s = o(function() {
        return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function(t) {
            return t in Element.prototype
        })
    });
    e.ELEMENT_MATCHES = s;
    var l = o(function() {
        var t = document.createElement("i"),
            e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
        try {
            for (var r = e.length, n = 0; n < r; n++) {
                var i = e[n];
                if (t.style.display = i, t.style.display === i) return i
            }
            return ""
        } catch (t) {
            return ""
        }
    }, "flex");
    e.FLEX_PREFIXED = l;
    var c = o(function() {
        var t = document.createElement("i");
        if (null == t.style.transform)
            for (var e = ["Webkit", "Moz", "ms"], r = e.length, n = 0; n < r; n++) {
                var i = e[n] + "Transform";
                if (void 0 !== t.style[i]) return i
            }
        return "transform"
    }, "transform");
    e.TRANSFORM_PREFIXED = c;
    var h = c.split("transform")[0],
        u = h ? h + "TransformStyle" : "transformStyle";
    e.TRANSFORM_STYLE_PREFIXED = u
}, function(t, e, r) {
    "use strict";
    var n = r(3);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0;
    var i = n(r(46)),
        a = r(14),
        o = r(45),
        s = a.IX2EngineActionTypes,
        l = s.IX2_RAW_DATA_IMPORTED,
        c = s.IX2_SESSION_INITIALIZED,
        h = s.IX2_SESSION_STARTED,
        u = s.IX2_SESSION_STOPPED,
        f = s.IX2_PREVIEW_REQUESTED,
        p = s.IX2_PLAYBACK_REQUESTED,
        d = s.IX2_STOP_REQUESTED,
        m = s.IX2_CLEAR_REQUESTED,
        v = s.IX2_EVENT_LISTENER_ADDED,
        g = s.IX2_TEST_FRAME_RENDERED,
        y = s.IX2_EVENT_STATE_CHANGED,
        E = s.IX2_ANIMATION_FRAME_CHANGED,
        b = s.IX2_PARAMETER_CHANGED,
        _ = s.IX2_INSTANCE_ADDED,
        x = s.IX2_INSTANCE_STARTED,
        w = s.IX2_INSTANCE_REMOVED,
        A = s.IX2_ELEMENT_STATE_CHANGED,
        S = s.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        T = s.IX2_VIEWPORT_WIDTH_CHANGED,
        I = s.IX2_MEDIA_QUERIES_DEFINED,
        P = o.IX2VanillaUtils.reifyState;
    e.rawDataImported = function(t) {
        return {
            type: l,
            payload: (0, i.default)({}, P(t))
        }
    };
    e.sessionInitialized = function(t) {
        var e = t.hasBoundaryNodes,
            r = t.reducedMotion;
        return {
            type: c,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: r
            }
        }
    };
    e.sessionStarted = function() {
        return {
            type: h
        }
    };
    e.sessionStopped = function() {
        return {
            type: u
        }
    };
    e.previewRequested = function(t) {
        var e = t.rawData,
            r = t.defer;
        return {
            type: f,
            payload: {
                defer: r,
                rawData: e
            }
        }
    };
    e.playbackRequested = function(t) {
        var e = t.actionTypeId,
            r = void 0 === e ? a.ActionTypeConsts.GENERAL_START_ACTION : e,
            n = t.actionListId,
            i = t.actionItemId,
            o = t.eventId,
            s = t.allowEvents,
            l = t.immediate,
            c = t.testManual,
            h = t.verbose,
            u = t.rawData;
        return {
            type: p,
            payload: {
                actionTypeId: r,
                actionListId: n,
                actionItemId: i,
                testManual: c,
                eventId: o,
                allowEvents: s,
                immediate: l,
                verbose: h,
                rawData: u
            }
        }
    };
    e.stopRequested = function(t) {
        return {
            type: d,
            payload: {
                actionListId: t
            }
        }
    };
    e.clearRequested = function() {
        return {
            type: m
        }
    };
    e.eventListenerAdded = function(t, e) {
        return {
            type: v,
            payload: {
                target: t,
                listenerParams: e
            }
        }
    };
    e.testFrameRendered = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return {
            type: g,
            payload: {
                step: t
            }
        }
    };
    e.eventStateChanged = function(t, e) {
        return {
            type: y,
            payload: {
                stateKey: t,
                newState: e
            }
        }
    };
    e.animationFrameChanged = function(t, e) {
        return {
            type: E,
            payload: {
                now: t,
                parameters: e
            }
        }
    };
    e.parameterChanged = function(t, e) {
        return {
            type: b,
            payload: {
                key: t,
                value: e
            }
        }
    };
    e.instanceAdded = function(t) {
        return {
            type: _,
            payload: (0, i.default)({}, t)
        }
    };
    e.instanceStarted = function(t, e) {
        return {
            type: x,
            payload: {
                instanceId: t,
                time: e
            }
        }
    };
    e.instanceRemoved = function(t) {
        return {
            type: w,
            payload: {
                instanceId: t
            }
        }
    };
    e.elementStateChanged = function(t, e, r, n) {
        return {
            type: A,
            payload: {
                elementId: t,
                actionTypeId: e,
                current: r,
                actionItem: n
            }
        }
    };
    e.actionListPlaybackChanged = function(t) {
        var e = t.actionListId,
            r = t.isPlaying;
        return {
            type: S,
            payload: {
                actionListId: e,
                isPlaying: r
            }
        }
    };
    e.viewportWidthChanged = function(t) {
        var e = t.width,
            r = t.mediaQueries;
        return {
            type: T,
            payload: {
                width: e,
                mediaQueries: r
            }
        }
    };
    e.mediaQueriesDefined = function() {
        return {
            type: I
        }
    }
}, function(t, e, r) {
    var n = r(188),
        i = r(123);

    function a(t, e) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
    }
    a.prototype = n(i.prototype), a.prototype.constructor = a, t.exports = a
}, function(t, e) {
    t.exports = function() {}
}, function(t, e, r) {
    var n = r(188),
        i = r(123),
        a = 4294967295;

    function o(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = a, this.__views__ = []
    }
    o.prototype = n(i.prototype), o.prototype.constructor = o, t.exports = o
}, function(t, e, r) {
    "use strict";
    var n = r(3)(r(37));
    window.tram = function(t) {
        function e(t, e) {
            return (new N.Bare).init(t, e)
        }

        function r(t) {
            return t.replace(/[A-Z]/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function i(t) {
            var e = parseInt(t.slice(1), 16);
            return [e >> 16 & 255, e >> 8 & 255, 255 & e]
        }

        function a(t, e, r) {
            return "#" + (1 << 24 | t << 16 | e << 8 | r).toString(16).slice(1)
        }

        function o() {}

        function s(t, e, r) {
            c("Units do not match [" + t + "]: " + e + ", " + r)
        }

        function l(t, e, r) {
            if (void 0 !== e && (r = e), void 0 === t) return r;
            var n = r;
            return Q.test(t) || !Z.test(t) ? n = parseInt(t, 10) : Z.test(t) && (n = 1e3 * parseFloat(t)), 0 > n && (n = 0), n == n ? n : r
        }

        function c(t) {
            X.debug && window && window.console.warn(t)
        }
        var h = function(t, e, r) {
                function i(t) {
                    return "object" == (0, n.default)(t)
                }

                function a(t) {
                    return "function" == typeof t
                }

                function o() {}
                return function n(s, l) {
                    function c() {
                        var t = new h;
                        return a(t.init) && t.init.apply(t, arguments), t
                    }

                    function h() {}
                    l === r && (l = s, s = Object), c.Bare = h;
                    var u, f = o[t] = s[t],
                        p = h[t] = c[t] = new o;
                    return p.constructor = c, c.mixin = function(e) {
                        return h[t] = c[t] = n(c, e)[t], c
                    }, c.open = function(t) {
                        if (u = {}, a(t) ? u = t.call(c, p, f, c, s) : i(t) && (u = t), i(u))
                            for (var r in u) e.call(u, r) && (p[r] = u[r]);
                        return a(p.init) || (p.init = s), c
                    }, c.open(l)
                }
            }("prototype", {}.hasOwnProperty),
            u = {
                ease: ["ease", function(t, e, r, n) {
                    var i = (t /= n) * t,
                        a = i * t;
                    return e + r * (-2.75 * a * i + 11 * i * i + -15.5 * a + 8 * i + .25 * t)
                }],
                "ease-in": ["ease-in", function(t, e, r, n) {
                    var i = (t /= n) * t,
                        a = i * t;
                    return e + r * (-1 * a * i + 3 * i * i + -3 * a + 2 * i)
                }],
                "ease-out": ["ease-out", function(t, e, r, n) {
                    var i = (t /= n) * t,
                        a = i * t;
                    return e + r * (.3 * a * i + -1.6 * i * i + 2.2 * a + -1.8 * i + 1.9 * t)
                }],
                "ease-in-out": ["ease-in-out", function(t, e, r, n) {
                    var i = (t /= n) * t,
                        a = i * t;
                    return e + r * (2 * a * i + -5 * i * i + 2 * a + 2 * i)
                }],
                linear: ["linear", function(t, e, r, n) {
                    return r * t / n + e
                }],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, r, n) {
                    return r * (t /= n) * t + e
                }],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, r, n) {
                    return -r * (t /= n) * (t - 2) + e
                }],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, r, n) {
                    return (t /= n / 2) < 1 ? r / 2 * t * t + e : -r / 2 * (--t * (t - 2) - 1) + e
                }],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, r, n) {
                    return r * (t /= n) * t * t + e
                }],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, r, n) {
                    return r * ((t = t / n - 1) * t * t + 1) + e
                }],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, r, n) {
                    return (t /= n / 2) < 1 ? r / 2 * t * t * t + e : r / 2 * ((t -= 2) * t * t + 2) + e
                }],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, r, n) {
                    return r * (t /= n) * t * t * t + e
                }],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, r, n) {
                    return -r * ((t = t / n - 1) * t * t * t - 1) + e
                }],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, r, n) {
                    return (t /= n / 2) < 1 ? r / 2 * t * t * t * t + e : -r / 2 * ((t -= 2) * t * t * t - 2) + e
                }],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, r, n) {
                    return r * (t /= n) * t * t * t * t + e
                }],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, r, n) {
                    return r * ((t = t / n - 1) * t * t * t * t + 1) + e
                }],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, r, n) {
                    return (t /= n / 2) < 1 ? r / 2 * t * t * t * t * t + e : r / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, r, n) {
                    return -r * Math.cos(t / n * (Math.PI / 2)) + r + e
                }],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, r, n) {
                    return r * Math.sin(t / n * (Math.PI / 2)) + e
                }],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, r, n) {
                    return -r / 2 * (Math.cos(Math.PI * t / n) - 1) + e
                }],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, r, n) {
                    return 0 === t ? e : r * Math.pow(2, 10 * (t / n - 1)) + e
                }],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, r, n) {
                    return t === n ? e + r : r * (1 - Math.pow(2, -10 * t / n)) + e
                }],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, r, n) {
                    return 0 === t ? e : t === n ? e + r : (t /= n / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + e : r / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, r, n) {
                    return -r * (Math.sqrt(1 - (t /= n) * t) - 1) + e
                }],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, r, n) {
                    return r * Math.sqrt(1 - (t = t / n - 1) * t) + e
                }],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, r, n) {
                    return (t /= n / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + e : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, r, n, i) {
                    return void 0 === i && (i = 1.70158), r * (t /= n) * t * ((i + 1) * t - i) + e
                }],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, r, n, i) {
                    return void 0 === i && (i = 1.70158), r * ((t = t / n - 1) * t * ((i + 1) * t + i) + 1) + e
                }],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, r, n, i) {
                    return void 0 === i && (i = 1.70158), (t /= n / 2) < 1 ? r / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : r / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
                }]
            },
            f = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            },
            p = document,
            d = window,
            m = "bkwld-tram",
            v = /[\-\.0-9]/g,
            g = /[A-Z]/,
            y = "number",
            E = /^(rgb|#)/,
            b = /(em|cm|mm|in|pt|pc|px)$/,
            _ = /(em|cm|mm|in|pt|pc|px|%)$/,
            x = /(deg|rad|turn)$/,
            w = "unitless",
            A = /(all|none) 0s ease 0s/,
            S = /^(width|height)$/,
            T = " ",
            I = p.createElement("a"),
            P = ["Webkit", "Moz", "O", "ms"],
            C = ["-webkit-", "-moz-", "-o-", "-ms-"],
            D = function(t) {
                if (t in I.style) return {
                    dom: t,
                    css: t
                };
                var e, r, n = "",
                    i = t.split("-");
                for (e = 0; e < i.length; e++) n += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                for (e = 0; e < P.length; e++)
                    if ((r = P[e] + n) in I.style) return {
                        dom: r,
                        css: C[e] + t
                    }
            },
            M = e.support = {
                bind: Function.prototype.bind,
                transform: D("transform"),
                transition: D("transition"),
                backface: D("backface-visibility"),
                timing: D("transition-timing-function")
            };
        if (M.transition) {
            var O = M.timing.dom;
            if (I.style[O] = u["ease-in-back"][0], !I.style[O])
                for (var k in f) u[k][0] = f[k]
        }
        var R = e.frame = function() {
                var t = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame || d.oRequestAnimationFrame || d.msRequestAnimationFrame;
                return t && M.bind ? t.bind(d) : function(t) {
                    d.setTimeout(t, 16)
                }
            }(),
            F = e.now = function() {
                var t = d.performance,
                    e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                return e && M.bind ? e.bind(t) : Date.now || function() {
                    return +new Date
                }
            }(),
            L = h(function(e) {
                function i(t, e) {
                    var r = function(t) {
                            for (var e = -1, r = t ? t.length : 0, n = []; ++e < r;) {
                                var i = t[e];
                                i && n.push(i)
                            }
                            return n
                        }(("" + t).split(T)),
                        n = r[0];
                    e = e || {};
                    var i = K[n];
                    if (!i) return c("Unsupported property: " + n);
                    if (!e.weak || !this.props[n]) {
                        var a = i[0],
                            o = this.props[n];
                        return o || (o = this.props[n] = new a.Bare), o.init(this.$el, r, i, e), o
                    }
                }

                function a(t, e, r) {
                    if (t) {
                        var a = (0, n.default)(t);
                        if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == a && e) return this.timer = new H({
                            duration: t,
                            context: this,
                            complete: o
                        }), void(this.active = !0);
                        if ("string" == a && e) {
                            switch (t) {
                                case "hide":
                                    h.call(this);
                                    break;
                                case "stop":
                                    s.call(this);
                                    break;
                                case "redraw":
                                    u.call(this);
                                    break;
                                default:
                                    i.call(this, t, r && r[1])
                            }
                            return o.call(this)
                        }
                        if ("function" == a) return void t.call(this, this);
                        if ("object" == a) {
                            var c = 0;
                            p.call(this, t, function(t, e) {
                                t.span > c && (c = t.span), t.stop(), t.animate(e)
                            }, function(t) {
                                "wait" in t && (c = l(t.wait, 0))
                            }), f.call(this), c > 0 && (this.timer = new H({
                                duration: c,
                                context: this
                            }), this.active = !0, e && (this.timer.complete = o));
                            var d = this,
                                m = !1,
                                v = {};
                            R(function() {
                                p.call(d, t, function(t) {
                                    t.active && (m = !0, v[t.name] = t.nextStyle)
                                }), m && d.$el.css(v)
                            })
                        }
                    }
                }

                function o() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var t = this.queue.shift();
                        a.call(this, t.options, !0, t.args)
                    }
                }

                function s(t) {
                    var e;
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, n.default)(t) && null != t ? t : this.props, p.call(this, e, d), f.call(this)
                }

                function h() {
                    s.call(this), this.el.style.display = "none"
                }

                function u() {
                    this.el.offsetHeight
                }

                function f() {
                    var t, e, r = [];
                    for (t in this.upstream && r.push(this.upstream), this.props)(e = this.props[t]).active && r.push(e.string);
                    r = r.join(","), this.style !== r && (this.style = r, this.el.style[M.transition.dom] = r)
                }

                function p(t, e, n) {
                    var a, o, s, l, c = e !== d,
                        h = {};
                    for (a in t) s = t[a], a in $ ? (h.transform || (h.transform = {}), h.transform[a] = s) : (g.test(a) && (a = r(a)), a in K ? h[a] = s : (l || (l = {}), l[a] = s));
                    for (a in h) {
                        if (s = h[a], !(o = this.props[a])) {
                            if (!c) continue;
                            o = i.call(this, a)
                        }
                        e.call(this, o, s)
                    }
                    n && l && n.call(this, l)
                }

                function d(t) {
                    t.stop()
                }

                function v(t, e) {
                    t.set(e)
                }

                function y(t) {
                    this.$el.css(t)
                }

                function E(t, r) {
                    e[t] = function() {
                        return this.children ? function(t, e) {
                            var r, n = this.children.length;
                            for (r = 0; n > r; r++) t.apply(this.children[r], e);
                            return this
                        }.call(this, r, arguments) : (this.el && r.apply(this, arguments), this)
                    }
                }
                e.init = function(e) {
                    if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, X.keepInherited && !X.fallback) {
                        var r = q(this.el, "transition");
                        r && !A.test(r) && (this.upstream = r)
                    }
                    M.backface && X.hideBackface && U(this.el, M.backface.css, "hidden")
                }, E("add", i), E("start", a), E("wait", function(t) {
                    t = l(t, 0), this.active ? this.queue.push({
                        options: t
                    }) : (this.timer = new H({
                        duration: t,
                        context: this,
                        complete: o
                    }), this.active = !0)
                }), E("then", function(t) {
                    return this.active ? (this.queue.push({
                        options: t,
                        args: arguments
                    }), void(this.timer.complete = o)) : c("No active transition timer. Use start() or wait() before then().")
                }), E("next", o), E("stop", s), E("set", function(t) {
                    s.call(this, t), p.call(this, t, v, y)
                }), E("show", function(t) {
                    "string" != typeof t && (t = "block"), this.el.style.display = t
                }), E("hide", h), E("redraw", u), E("destroy", function() {
                    s.call(this), t.removeData(this.el, m), this.$el = this.el = null
                })
            }),
            N = h(L, function(e) {
                function r(e, r) {
                    var n = t.data(e, m) || t.data(e, m, new L.Bare);
                    return n.el || n.init(e), r ? n.start(r) : n
                }
                e.init = function(e, n) {
                    var i = t(e);
                    if (!i.length) return this;
                    if (1 === i.length) return r(i[0], n);
                    var a = [];
                    return i.each(function(t, e) {
                        a.push(r(e, n))
                    }), this.children = a, this
                }
            }),
            V = h(function(t) {
                function e() {
                    var t = this.get();
                    this.update("auto");
                    var e = this.get();
                    return this.update(t), e
                }

                function r(t) {
                    var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                    return (e ? a(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var i = 500,
                    o = "ease",
                    s = 0;
                t.init = function(t, e, r, n) {
                    this.$el = t, this.el = t[0];
                    var a = e[0];
                    r[2] && (a = r[2]), Y[a] && (a = Y[a]), this.name = a, this.type = r[1], this.duration = l(e[1], this.duration, i), this.ease = function(t, e, r) {
                        return void 0 !== e && (r = e), t in u ? t : r
                    }(e[2], this.ease, o), this.delay = l(e[3], this.delay, s), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = S.test(this.name), this.unit = n.unit || this.unit || X.defaultUnit, this.angle = n.angle || this.angle || X.defaultAngle, X.fallback || n.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + T + this.duration + "ms" + ("ease" != this.ease ? T + u[this.ease][0] : "") + (this.delay ? T + this.delay + "ms" : ""))
                }, t.set = function(t) {
                    t = this.convert(t, this.type), this.update(t), this.redraw()
                }, t.transition = function(t) {
                    this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
                }, t.fallback = function(t) {
                    var r = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type), this.auto && ("auto" == r && (r = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new z({
                        from: r,
                        to: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.get = function() {
                    return q(this.el, this.name)
                }, t.update = function(t) {
                    U(this.el, this.name, t)
                }, t.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, U(this.el, this.name, this.get()));
                    var t = this.tween;
                    t && t.context && t.destroy()
                }, t.convert = function(t, e) {
                    if ("auto" == t && this.auto) return t;
                    var i, a = "number" == typeof t,
                        o = "string" == typeof t;
                    switch (e) {
                        case y:
                            if (a) return t;
                            if (o && "" === t.replace(v, "")) return +t;
                            i = "number(unitless)";
                            break;
                        case E:
                            if (o) {
                                if ("" === t && this.original) return this.original;
                                if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : r(t)
                            }
                            i = "hex or rgb string";
                            break;
                        case b:
                            if (a) return t + this.unit;
                            if (o && e.test(t)) return t;
                            i = "number(px) or string(unit)";
                            break;
                        case _:
                            if (a) return t + this.unit;
                            if (o && e.test(t)) return t;
                            i = "number(px) or string(unit or %)";
                            break;
                        case x:
                            if (a) return t + this.angle;
                            if (o && e.test(t)) return t;
                            i = "number(deg) or string(angle)";
                            break;
                        case w:
                            if (a) return t;
                            if (o && _.test(t)) return t;
                            i = "number(unitless) or string(unit or %)"
                    }
                    return function(t, e) {
                        c("Type warning: Expected: [" + t + "] Got: [" + (0, n.default)(e) + "] " + e)
                    }(i, t), t
                }, t.redraw = function() {
                    this.el.offsetHeight
                }
            }),
            B = h(V, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), E))
                }
            }),
            G = h(V, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments), this.animate = this.fallback
                }, t.get = function() {
                    return this.$el[this.name]()
                }, t.update = function(t) {
                    this.$el[this.name](t)
                }
            }),
            j = h(V, function(t, e) {
                function r(t, e) {
                    var r, n, i, a, o;
                    for (r in t) i = (a = $[r])[0], n = a[1] || r, o = this.convert(t[r], i), e.call(this, n, o, i)
                }
                t.init = function() {
                    e.init.apply(this, arguments), this.current || (this.current = {}, $.perspective && X.perspective && (this.current.perspective = X.perspective, U(this.el, this.name, this.style(this.current)), this.redraw()))
                }, t.set = function(t) {
                    r.call(this, t, function(t, e) {
                        this.current[t] = e
                    }), U(this.el, this.name, this.style(this.current)), this.redraw()
                }, t.transition = function(t) {
                    var e = this.values(t);
                    this.tween = new W({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var r, n = {};
                    for (r in this.current) n[r] = r in e ? e[r] : this.current[r];
                    this.active = !0, this.nextStyle = this.style(n)
                }, t.fallback = function(t) {
                    var e = this.values(t);
                    this.tween = new W({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.update = function() {
                    U(this.el, this.name, this.style(this.current))
                }, t.style = function(t) {
                    var e, r = "";
                    for (e in t) r += e + "(" + t[e] + ") ";
                    return r
                }, t.values = function(t) {
                    var e, n = {};
                    return r.call(this, t, function(t, r, i) {
                        n[t] = r, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i))
                    }), n
                }
            }),
            z = h(function(e) {
                function r() {
                    var t, e, n, i = l.length;
                    if (i)
                        for (R(r), e = F(), t = i; t--;)(n = l[t]) && n.render(e)
                }
                var n = {
                    ease: u.ease[1],
                    from: 0,
                    to: 1
                };
                e.init = function(t) {
                    this.duration = t.duration || 0, this.delay = t.delay || 0;
                    var e = t.ease || n.ease;
                    u[e] && (e = u[e][1]), "function" != typeof e && (e = n.ease), this.ease = e, this.update = t.update || o, this.complete = t.complete || o, this.context = t.context || this, this.name = t.name;
                    var r = t.from,
                        i = t.to;
                    void 0 === r && (r = n.from), void 0 === i && (i = n.to), this.unit = t.unit || "", "number" == typeof r && "number" == typeof i ? (this.begin = r, this.change = i - r) : this.format(i, r), this.value = this.begin + this.unit, this.start = F(), !1 !== t.autoplay && this.play()
                }, e.play = function() {
                    var t;
                    this.active || (this.start || (this.start = F()), this.active = !0, t = this, 1 === l.push(t) && R(r))
                }, e.stop = function() {
                    var e, r, n;
                    this.active && (this.active = !1, e = this, (n = t.inArray(e, l)) >= 0 && (r = l.slice(n + 1), l.length = n, r.length && (l = l.concat(r))))
                }, e.render = function(t) {
                    var e, r = t - this.start;
                    if (this.delay) {
                        if (r <= this.delay) return;
                        r -= this.delay
                    }
                    if (r < this.duration) {
                        var n = this.ease(r, 0, 1, this.duration);
                        return e = this.startRGB ? function(t, e, r) {
                            return a(t[0] + r * (e[0] - t[0]), t[1] + r * (e[1] - t[1]), t[2] + r * (e[2] - t[2]))
                        }(this.startRGB, this.endRGB, n) : function(t) {
                            return Math.round(t * c) / c
                        }(this.begin + n * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
                    }
                    e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, e.format = function(t, e) {
                    if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
                    if (!this.unit) {
                        var r = e.replace(v, "");
                        r !== t.replace(v, "") && s("tween", e, t), this.unit = r
                    }
                    e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
                }, e.destroy = function() {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = o
                };
                var l = [],
                    c = 1e3
            }),
            H = h(z, function(t) {
                t.init = function(t) {
                    this.duration = t.duration || 0, this.complete = t.complete || o, this.context = t.context, this.play()
                }, t.render = function(t) {
                    t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }),
            W = h(z, function(t, e) {
                t.init = function(t) {
                    var e, r;
                    for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) r = t.values[e], this.current[e] !== r && this.tweens.push(new z({
                        name: e,
                        from: this.current[e],
                        to: r,
                        duration: t.duration,
                        delay: t.delay,
                        ease: t.ease,
                        autoplay: !1
                    }));
                    this.play()
                }, t.render = function(t) {
                    var e, r, n = !1;
                    for (e = this.tweens.length; e--;)(r = this.tweens[e]).context && (r.render(t), this.current[r.name] = r.value, n = !0);
                    return n ? void(this.update && this.update.call(this.context)) : this.destroy()
                }, t.destroy = function() {
                    if (e.destroy.call(this), this.tweens) {
                        var t;
                        for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            }),
            X = e.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !M.transition,
                agentTests: []
            };
        e.fallback = function(t) {
            if (!M.transition) return X.fallback = !0;
            X.agentTests.push("(" + t + ")");
            var e = new RegExp(X.agentTests.join("|"), "i");
            X.fallback = e.test(navigator.userAgent)
        }, e.fallback("6.0.[2-5] Safari"), e.tween = function(t) {
            return new z(t)
        }, e.delay = function(t, e, r) {
            return new H({
                complete: e,
                duration: t,
                context: r
            })
        }, t.fn.tram = function(t) {
            return e.call(null, this, t)
        };
        var U = t.style,
            q = t.css,
            Y = {
                transform: M.transform && M.transform.css
            },
            K = {
                color: [B, E],
                background: [B, E, "background-color"],
                "outline-color": [B, E],
                "border-color": [B, E],
                "border-top-color": [B, E],
                "border-right-color": [B, E],
                "border-bottom-color": [B, E],
                "border-left-color": [B, E],
                "border-width": [V, b],
                "border-top-width": [V, b],
                "border-right-width": [V, b],
                "border-bottom-width": [V, b],
                "border-left-width": [V, b],
                "border-spacing": [V, b],
                "letter-spacing": [V, b],
                margin: [V, b],
                "margin-top": [V, b],
                "margin-right": [V, b],
                "margin-bottom": [V, b],
                "margin-left": [V, b],
                padding: [V, b],
                "padding-top": [V, b],
                "padding-right": [V, b],
                "padding-bottom": [V, b],
                "padding-left": [V, b],
                "outline-width": [V, b],
                opacity: [V, y],
                top: [V, _],
                right: [V, _],
                bottom: [V, _],
                left: [V, _],
                "font-size": [V, _],
                "text-indent": [V, _],
                "word-spacing": [V, _],
                width: [V, _],
                "min-width": [V, _],
                "max-width": [V, _],
                height: [V, _],
                "min-height": [V, _],
                "max-height": [V, _],
                "line-height": [V, w],
                "scroll-top": [G, y, "scrollTop"],
                "scroll-left": [G, y, "scrollLeft"]
            },
            $ = {};
        M.transform && (K.transform = [j], $ = {
            x: [_, "translateX"],
            y: [_, "translateY"],
            rotate: [x],
            rotateX: [x],
            rotateY: [x],
            scale: [y],
            scaleX: [y],
            scaleY: [y],
            skew: [x],
            skewX: [x],
            skewY: [x]
        }), M.transform && M.backface && ($.z = [_, "translateZ"], $.rotateZ = [x], $.scaleZ = [y], $.perspective = [b]);
        var Q = /ms/,
            Z = /s|\./;
        return t.tram = e
    }(window.jQuery)
}, function(t, e, r) {
    var n = r(127),
        i = r(28),
        a = r(145),
        o = Math.max;
    t.exports = function(t, e, r) {
        var s = null == t ? 0 : t.length;
        if (!s) return -1;
        var l = null == r ? 0 : a(r);
        return l < 0 && (l = o(s + l, 0)), n(t, i(e, 3), l)
    }
}, function(t, e) {
    t.exports = function(t, e, r, n) {
        for (var i = t.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i;)
            if (e(t[a], a, t)) return a;
        return -1
    }
}, function(t, e, r) {
    var n = r(59),
        i = r(204),
        a = r(205),
        o = r(206),
        s = r(207),
        l = r(208);

    function c(t) {
        var e = this.__data__ = new n(t);
        this.size = e.size
    }
    c.prototype.clear = i, c.prototype.delete = a, c.prototype.get = o, c.prototype.has = s, c.prototype.set = l, t.exports = c
}, function(t, e, r) {
    var n = r(39),
        i = r(23),
        a = "[object AsyncFunction]",
        o = "[object Function]",
        s = "[object GeneratorFunction]",
        l = "[object Proxy]";
    t.exports = function(t) {
        if (!i(t)) return !1;
        var e = n(t);
        return e == o || e == s || e == a || e == l
    }
}, function(t, e, r) {
    (function(e) {
        var r = "object" == typeof e && e && e.Object === Object && e;
        t.exports = r
    }).call(this, r(61))
}, function(t, e) {
    var r = Function.prototype.toString;
    t.exports = function(t) {
        if (null != t) {
            try {
                return r.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }
}, function(t, e, r) {
    var n = r(227),
        i = r(30);
    t.exports = function t(e, r, a, o, s) {
        return e === r || (null == e || null == r || !i(e) && !i(r) ? e != e && r != r : n(e, r, a, o, t, s))
    }
}, function(t, e, r) {
    var n = r(228),
        i = r(231),
        a = r(232),
        o = 1,
        s = 2;
    t.exports = function(t, e, r, l, c, h) {
        var u = r & o,
            f = t.length,
            p = e.length;
        if (f != p && !(u && p > f)) return !1;
        var d = h.get(t),
            m = h.get(e);
        if (d && m) return d == e && m == t;
        var v = -1,
            g = !0,
            y = r & s ? new n : void 0;
        for (h.set(t, e), h.set(e, t); ++v < f;) {
            var E = t[v],
                b = e[v];
            if (l) var _ = u ? l(b, E, v, e, t, h) : l(E, b, v, t, e, h);
            if (void 0 !== _) {
                if (_) continue;
                g = !1;
                break
            }
            if (y) {
                if (!i(e, function(t, e) {
                        if (!a(y, e) && (E === t || c(E, t, r, l, h))) return y.push(e)
                    })) {
                    g = !1;
                    break
                }
            } else if (E !== b && !c(E, b, r, l, h)) {
                g = !1;
                break
            }
        }
        return h.delete(t), h.delete(e), g
    }
}, function(t, e, r) {
    var n = r(83),
        i = r(11);
    t.exports = function(t, e, r) {
        var a = e(t);
        return i(t) ? a : n(a, r(t))
    }
}, function(t, e, r) {
    var n = r(239),
        i = r(136),
        a = Object.prototype.propertyIsEnumerable,
        o = Object.getOwnPropertySymbols,
        s = o ? function(t) {
            return null == t ? [] : (t = Object(t), n(o(t), function(e) {
                return a.call(t, e)
            }))
        } : i;
    t.exports = s
}, function(t, e) {
    t.exports = function() {
        return []
    }
}, function(t, e, r) {
    var n = r(240),
        i = r(65),
        a = r(11),
        o = r(84),
        s = r(85),
        l = r(86),
        c = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
        var r = a(t),
            h = !r && i(t),
            u = !r && !h && o(t),
            f = !r && !h && !u && l(t),
            p = r || h || u || f,
            d = p ? n(t.length, String) : [],
            m = d.length;
        for (var v in t) !e && !c.call(t, v) || p && ("length" == v || u && ("offset" == v || "parent" == v) || f && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || s(v, m)) || d.push(v);
        return d
    }
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return function(r) {
            return t(e(r))
        }
    }
}, function(t, e, r) {
    var n = r(29)(r(19), "WeakMap");
    t.exports = n
}, function(t, e, r) {
    var n = r(23);
    t.exports = function(t) {
        return t == t && !n(t)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return function(r) {
            return null != r && r[t] === e && (void 0 !== e || t in Object(r))
        }
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n;) i[r] = e(t[r], r, t);
        return i
    }
}, function(t, e) {
    t.exports = function(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    }
}, function(t, e, r) {
    var n = r(262);
    t.exports = function(t) {
        var e = n(t),
            r = e % 1;
        return e == e ? r ? e - r : e : 0
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(16),
        a = r(5),
        o = r(98),
        s = r(147),
        l = n.Object;
    t.exports = s ? function(t) {
        return "symbol" == typeof t
    } : function(t) {
        var e = i("Symbol");
        return a(e) && o(e.prototype, l(t))
    }
}, function(t, e, r) {
    var n = r(148);
    t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function(t, e, r) {
    var n = r(31),
        i = r(10);
    t.exports = !!Object.getOwnPropertySymbols && !i(function() {
        var t = Symbol();
        return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && n && n < 41
    })
}, function(t, e, r) {
    var n = r(50),
        i = r(71);
    (t.exports = function(t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.19.0",
        mode: n ? "pure" : "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e, r) {
    var n = r(20),
        i = r(10),
        a = r(101);
    t.exports = !n && !i(function() {
        return 7 != Object.defineProperty(a("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, r) {
    var n = r(20),
        i = r(17),
        a = Function.prototype,
        o = n && Object.getOwnPropertyDescriptor,
        s = i(a, "name"),
        l = s && "something" === function() {}.name,
        c = s && (!n || n && o(a, "name").configurable);
    t.exports = {
        EXISTS: s,
        PROPER: l,
        CONFIGURABLE: c
    }
}, function(t, e, r) {
    var n = r(2),
        i = r(17),
        a = r(24),
        o = r(104).indexOf,
        s = r(74),
        l = n([].push);
    t.exports = function(t, e) {
        var r, n = a(t),
            c = 0,
            h = [];
        for (r in n) !i(s, r) && i(n, r) && l(h, r);
        for (; e.length > c;) i(n, r = e[c++]) && (~o(h, r) || l(h, r));
        return h
    }
}, function(t, e, r) {
    var n = r(15),
        i = r(12),
        a = r(33);
    t.exports = function(t, e, r) {
        var o, s;
        i(t);
        try {
            if (!(o = a(t, "return"))) {
                if ("throw" === e) throw r;
                return r
            }
            o = n(o, t)
        } catch (t) {
            s = !0, o = t
        }
        if ("throw" === e) throw r;
        if (s) throw o;
        return i(o), r
    }
}, function(t, e, r) {
    var n = r(6),
        i = r(52),
        a = n("iterator"),
        o = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (i.Array === t || o[a] === t)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(7),
        a = r(4),
        o = r(34),
        s = r(8);
    n({
        target: "Array",
        proto: !0
    }, {
        at: function(t) {
            var e = i(this),
                r = a(e),
                n = o(t),
                s = n >= 0 ? n : r + n;
            return s < 0 || s >= r ? void 0 : e[s]
        }
    }), s("at")
}, function(t, e, r) {
    var n = r(16);
    t.exports = n("document", "documentElement")
}, function(t, e, r) {
    var n = r(0),
        i = r(35),
        a = r(43),
        o = r(13),
        s = r(6)("species"),
        l = n.Array;
    t.exports = function(t) {
        var e;
        return i(t) && (e = t.constructor, a(e) && (e === l || i(e.prototype)) ? e = void 0 : o(e) && null === (e = e[s]) && (e = void 0)), void 0 === e ? l : e
    }
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(35),
        a = r(4),
        o = r(22),
        s = n.TypeError,
        l = function(t, e, r, n, c, h, u, f) {
            for (var p, d, m = c, v = 0, g = !!u && o(u, f); v < n;) {
                if (v in r) {
                    if (p = g ? g(r[v], v, e) : r[v], h > 0 && i(p)) d = a(p), m = l(t, e, p, d, m, h - 1) - 1;
                    else {
                        if (m >= 9007199254740991) throw s("Exceed the acceptable array length");
                        t[m] = p
                    }
                    m++
                }
                v++
            }
            return m
        };
    t.exports = l
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(104).includes,
        a = r(8);
    n({
        target: "Array",
        proto: !0
    }, {
        includes: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), a("includes")
}, function(t, e, r) {
    "use strict";
    var n, i, a, o = r(10),
        s = r(5),
        l = r(36),
        c = r(110),
        h = r(27),
        u = r(6),
        f = r(50),
        p = u("iterator"),
        d = !1;
    [].keys && ("next" in (a = [].keys()) ? (i = c(c(a))) !== Object.prototype && (n = i) : d = !0), null == n || o(function() {
        var t = {};
        return n[p].call(t) !== t
    }) ? n = {} : f && (n = l(n)), s(n[p]) || h(n, p, function() {
        return this
    }), t.exports = {
        IteratorPrototype: n,
        BUGGY_SAFARI_ITERATORS: d
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(21),
        a = r(7),
        o = r(41),
        s = r(4),
        l = n.TypeError,
        c = function(t) {
            return function(e, r, n, c) {
                i(r);
                var h = a(e),
                    u = o(h),
                    f = s(h),
                    p = t ? f - 1 : 0,
                    d = t ? -1 : 1;
                if (n < 2)
                    for (;;) {
                        if (p in u) {
                            c = u[p], p += d;
                            break
                        }
                        if (p += d, t ? p < 0 : f <= p) throw l("Reduce of empty array with no initial value")
                    }
                for (; t ? p >= 0 : f > p; p += d) p in u && (c = r(c, u[p], p, h));
                return c
            }
        };
    t.exports = {
        left: c(!1),
        right: c(!0)
    }
}, function(t, e, r) {
    var n = r(1),
        i = r(2),
        a = r(74),
        o = r(13),
        s = r(17),
        l = r(18).f,
        c = r(103),
        h = r(326),
        u = r(100),
        f = r(327),
        p = !1,
        d = u("meta"),
        m = 0,
        v = Object.isExtensible || function() {
            return !0
        },
        g = function(t) {
            l(t, d, {
                value: {
                    objectID: "O" + m++,
                    weakData: {}
                }
            })
        },
        y = t.exports = {
            enable: function() {
                y.enable = function() {}, p = !0;
                var t = c.f,
                    e = i([].splice),
                    r = {};
                r[d] = 1, t(r).length && (c.f = function(r) {
                    for (var n = t(r), i = 0, a = n.length; i < a; i++)
                        if (n[i] === d) {
                            e(n, i, 1);
                            break
                        }
                    return n
                }, n({
                    target: "Object",
                    stat: !0,
                    forced: !0
                }, {
                    getOwnPropertyNames: h.f
                }))
            },
            fastKey: function(t, e) {
                if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!s(t, d)) {
                    if (!v(t)) return "F";
                    if (!e) return "E";
                    g(t)
                }
                return t[d].objectID
            },
            getWeakData: function(t, e) {
                if (!s(t, d)) {
                    if (!v(t)) return !0;
                    if (!e) return !1;
                    g(t)
                }
                return t[d].weakData
            },
            onFreeze: function(t) {
                return f && p && v(t) && !s(t, d) && g(t), t
            }
        };
    a[d] = !0
}, function(t, e, r) {
    var n, i, a, o, s = r(0),
        l = r(112),
        c = r(22),
        h = r(5),
        u = r(17),
        f = r(10),
        p = r(156),
        d = r(79),
        m = r(101),
        v = r(164),
        g = r(55),
        y = s.setImmediate,
        E = s.clearImmediate,
        b = s.process,
        _ = s.Dispatch,
        x = s.Function,
        w = s.MessageChannel,
        A = s.String,
        S = 0,
        T = {};
    try {
        n = s.location
    } catch (t) {}
    var I = function(t) {
            if (u(T, t)) {
                var e = T[t];
                delete T[t], e()
            }
        },
        P = function(t) {
            return function() {
                I(t)
            }
        },
        C = function(t) {
            I(t.data)
        },
        D = function(t) {
            s.postMessage(A(t), n.protocol + "//" + n.host)
        };
    y && E || (y = function(t) {
        var e = d(arguments, 1);
        return T[++S] = function() {
            l(h(t) ? t : x(t), void 0, e)
        }, i(S), S
    }, E = function(t) {
        delete T[t]
    }, g ? i = function(t) {
        b.nextTick(P(t))
    } : _ && _.now ? i = function(t) {
        _.now(P(t))
    } : w && !v ? (o = (a = new w).port2, a.port1.onmessage = C, i = c(o.postMessage, o)) : s.addEventListener && h(s.postMessage) && !s.importScripts && n && "file:" !== n.protocol && !f(D) ? (i = D, s.addEventListener("message", C, !1)) : i = "onreadystatechange" in m("script") ? function(t) {
        p.appendChild(m("script")).onreadystatechange = function() {
            p.removeChild(this), I(t)
        }
    } : function(t) {
        setTimeout(P(t), 0)
    }), t.exports = {
        set: y,
        clear: E
    }
}, function(t, e, r) {
    var n = r(32);
    t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n)
}, function(t, e, r) {
    "use strict";
    var n = r(21),
        i = function(t) {
            var e, r;
            this.promise = new t(function(t, n) {
                if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
                e = t, r = n
            }), this.resolve = n(e), this.reject = n(r)
        };
    t.exports.f = function(t) {
        return new i(t)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(112),
        i = r(12),
        a = r(36),
        o = r(33),
        s = r(117),
        l = r(42),
        c = r(16),
        h = r(344),
        u = c("Promise"),
        f = l.set,
        p = l.get,
        d = function(t, e, r) {
            var n = t.done;
            u.resolve(t.value).then(function(t) {
                e({
                    done: n,
                    value: t
                })
            }, r)
        },
        m = function(t) {
            f(this, {
                iterator: i(t),
                next: t.next
            })
        };
    m.prototype = s(a(h), {
        next: function(t) {
            var e = p(this),
                r = !!arguments.length;
            return new u(function(a, o) {
                var s = i(n(e.next, e.iterator, r ? [t] : []));
                d(s, a, o)
            })
        },
        return: function(t) {
            var e = p(this).iterator,
                r = !!arguments.length;
            return new u(function(a, s) {
                var l = o(e, "return");
                if (void 0 === l) return a({
                    done: !0,
                    value: t
                });
                var c = i(n(l, e, r ? [t] : []));
                d(c, a, s)
            })
        },
        throw: function(t) {
            var e = p(this).iterator,
                r = !!arguments.length;
            return new u(function(a, s) {
                var l = o(e, "throw");
                if (void 0 === l) return s(t);
                var c = i(n(l, e, r ? [t] : []));
                d(c, a, s)
            })
        }
    }), t.exports = m
}, function(t, e, r) {
    var n = r(22),
        i = r(41),
        a = r(7),
        o = r(4),
        s = function(t) {
            var e = 1 == t;
            return function(r, s, l) {
                for (var c, h = a(r), u = i(h), f = n(s, l), p = o(u); p-- > 0;)
                    if (f(c = u[p], p, h)) switch (t) {
                        case 0:
                            return c;
                        case 1:
                            return p
                    }
                return e ? -1 : void 0
            }
        };
    t.exports = {
        findLast: s(0),
        findLastIndex: s(1)
    }
}, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(118);
    r.d(e, "createStore", function() {
        return n.default
    });
    var i = r(171);
    r.d(e, "combineReducers", function() {
        return i.default
    });
    var a = r(173);
    r.d(e, "bindActionCreators", function() {
        return a.default
    });
    var o = r(174);
    r.d(e, "applyMiddleware", function() {
        return o.default
    });
    var s = r(119);
    r.d(e, "compose", function() {
        return s.default
    });
    r(172)
}, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(375),
        i = r(380),
        a = r(382),
        o = "[object Object]",
        s = Function.prototype,
        l = Object.prototype,
        c = s.toString,
        h = l.hasOwnProperty,
        u = c.call(Object);
    e.default = function(t) {
        if (!Object(a.default)(t) || Object(n.default)(t) != o) return !1;
        var e = Object(i.default)(t);
        if (null === e) return !0;
        var r = h.call(e, "constructor") && e.constructor;
        return "function" == typeof r && r instanceof r && c.call(r) == u
    }
}, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(376).default.Symbol;
    e.default = n
}, function(t, e, r) {
    "use strict";
    r.r(e), r.d(e, "default", function() {
        return a
    });
    var n = r(118);
    r(169), r(172);

    function i(t, e) {
        var r = e && e.type;
        return "Given action " + (r && '"' + r.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
    }

    function a(t) {
        for (var e = Object.keys(t), r = {}, a = 0; a < e.length; a++) {
            var o = e[a];
            0, "function" == typeof t[o] && (r[o] = t[o])
        }
        var s, l = Object.keys(r);
        try {
            ! function(t) {
                Object.keys(t).forEach(function(e) {
                    var r = t[e];
                    if (void 0 === r(void 0, {
                            type: n.ActionTypes.INIT
                        })) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                    if (void 0 === r(void 0, {
                            type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                        })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + n.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
                })
            }(r)
        } catch (t) {
            s = t
        }
        return function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = arguments[1];
            if (s) throw s;
            for (var n = !1, a = {}, o = 0; o < l.length; o++) {
                var c = l[o],
                    h = r[c],
                    u = t[c],
                    f = h(u, e);
                if (void 0 === f) {
                    var p = i(c, e);
                    throw new Error(p)
                }
                a[c] = f, n = n || f !== u
            }
            return n ? a : t
        }
    }
}, function(t, e, r) {
    "use strict";

    function n(t) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(t);
        try {
            throw new Error(t)
        } catch (t) {}
    }
    r.r(e), r.d(e, "default", function() {
        return n
    })
}, function(t, e, r) {
    "use strict";

    function n(t, e) {
        return function() {
            return e(t.apply(void 0, arguments))
        }
    }

    function i(t, e) {
        if ("function" == typeof t) return n(t, e);
        if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var r = Object.keys(t), i = {}, a = 0; a < r.length; a++) {
            var o = r[a],
                s = t[o];
            "function" == typeof s && (i[o] = n(s, e))
        }
        return i
    }
    r.r(e), r.d(e, "default", function() {
        return i
    })
}, function(t, e, r) {
    "use strict";
    r.r(e), r.d(e, "default", function() {
        return a
    });
    var n = r(119),
        i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        };

    function a() {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return function(t) {
            return function(r, a, o) {
                var s, l = t(r, a, o),
                    c = l.dispatch,
                    h = {
                        getState: l.getState,
                        dispatch: function(t) {
                            return c(t)
                        }
                    };
                return s = e.map(function(t) {
                    return t(h)
                }), c = n.default.apply(void 0, s)(l.dispatch), i({}, l, {
                    dispatch: c
                })
            }
        }
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ActionAppliesTo = e.ActionTypeConsts = void 0;
    e.ActionTypeConsts = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
    };
    e.ActionAppliesTo = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
    }
}, function(t, e, r) {
    var n = r(177)(r(126));
    t.exports = n
}, function(t, e, r) {
    var n = r(28),
        i = r(40),
        a = r(64);
    t.exports = function(t) {
        return function(e, r, o) {
            var s = Object(e);
            if (!i(e)) {
                var l = n(r, 3);
                e = a(e), r = function(t) {
                    return l(s[t], t, s)
                }
            }
            var c = t(e, r, o);
            return c > -1 ? s[l ? e[c] : c] : void 0
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = r(3);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.inQuad = function(t) {
        return Math.pow(t, 2)
    }, e.outQuad = function(t) {
        return -(Math.pow(t - 1, 2) - 1)
    }, e.inOutQuad = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 2);
        return -.5 * ((t -= 2) * t - 2)
    }, e.inCubic = function(t) {
        return Math.pow(t, 3)
    }, e.outCubic = function(t) {
        return Math.pow(t - 1, 3) + 1
    }, e.inOutCubic = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 3);
        return .5 * (Math.pow(t - 2, 3) + 2)
    }, e.inQuart = function(t) {
        return Math.pow(t, 4)
    }, e.outQuart = function(t) {
        return -(Math.pow(t - 1, 4) - 1)
    }, e.inOutQuart = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 4);
        return -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
    }, e.inQuint = function(t) {
        return Math.pow(t, 5)
    }, e.outQuint = function(t) {
        return Math.pow(t - 1, 5) + 1
    }, e.inOutQuint = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 5);
        return .5 * (Math.pow(t - 2, 5) + 2)
    }, e.inSine = function(t) {
        return 1 - Math.cos(t * (Math.PI / 2))
    }, e.outSine = function(t) {
        return Math.sin(t * (Math.PI / 2))
    }, e.inOutSine = function(t) {
        return -.5 * (Math.cos(Math.PI * t) - 1)
    }, e.inExpo = function(t) {
        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
    }, e.outExpo = function(t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
    }, e.inOutExpo = function(t) {
        if (0 === t) return 0;
        if (1 === t) return 1;
        if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
        return .5 * (2 - Math.pow(2, -10 * --t))
    }, e.inCirc = function(t) {
        return -(Math.sqrt(1 - t * t) - 1)
    }, e.outCirc = function(t) {
        return Math.sqrt(1 - Math.pow(t - 1, 2))
    }, e.inOutCirc = function(t) {
        if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
        return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    }, e.outBounce = function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, e.inBack = function(t) {
        return t * t * ((a + 1) * t - a)
    }, e.outBack = function(t) {
        return (t -= 1) * t * ((a + 1) * t + a) + 1
    }, e.inOutBack = function(t) {
        var e = a;
        if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5;
        return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
    }, e.inElastic = function(t) {
        var e = a,
            r = 0,
            n = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        r || (r = .3);
        n < 1 ? (n = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / n);
        return -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r)
    }, e.outElastic = function(t) {
        var e = a,
            r = 0,
            n = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        r || (r = .3);
        n < 1 ? (n = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / n);
        return n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / r) + 1
    }, e.inOutElastic = function(t) {
        var e = a,
            r = 0,
            n = 1;
        if (0 === t) return 0;
        if (2 == (t /= .5)) return 1;
        r || (r = .3 * 1.5);
        n < 1 ? (n = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / n);
        if (t < 1) return n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r) * -.5;
        return n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r) * .5 + 1
    }, e.swingFromTo = function(t) {
        var e = a;
        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
    }, e.swingFrom = function(t) {
        return t * t * ((a + 1) * t - a)
    }, e.swingTo = function(t) {
        return (t -= 1) * t * ((a + 1) * t + a) + 1
    }, e.bounce = function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, e.bouncePast = function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
    }, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0;
    var i = n(r(179)),
        a = 1.70158,
        o = (0, i.default)(.25, .1, .25, 1);
    e.ease = o;
    var s = (0, i.default)(.42, 0, 1, 1);
    e.easeIn = s;
    var l = (0, i.default)(0, 0, .58, 1);
    e.easeOut = l;
    var c = (0, i.default)(.42, 0, .58, 1);
    e.easeInOut = c
}, function(t, e) {
    var r = 4,
        n = .001,
        i = 1e-7,
        a = 10,
        o = 11,
        s = 1 / (o - 1),
        l = "function" == typeof Float32Array;

    function c(t, e) {
        return 1 - 3 * e + 3 * t
    }

    function h(t, e) {
        return 3 * e - 6 * t
    }

    function u(t) {
        return 3 * t
    }

    function f(t, e, r) {
        return ((c(e, r) * t + h(e, r)) * t + u(e)) * t
    }

    function p(t, e, r) {
        return 3 * c(e, r) * t * t + 2 * h(e, r) * t + u(e)
    }
    t.exports = function(t, e, c, h) {
        if (!(0 <= t && t <= 1 && 0 <= c && c <= 1)) throw new Error("bezier x values must be in [0, 1] range");
        var u = l ? new Float32Array(o) : new Array(o);
        if (t !== e || c !== h)
            for (var d = 0; d < o; ++d) u[d] = f(d * s, t, c);

        function m(e) {
            for (var l = 0, h = 1, d = o - 1; h !== d && u[h] <= e; ++h) l += s;
            var m = l + (e - u[--h]) / (u[h + 1] - u[h]) * s,
                v = p(m, t, c);
            return v >= n ? function(t, e, n, i) {
                for (var a = 0; a < r; ++a) {
                    var o = p(e, n, i);
                    if (0 === o) return e;
                    e -= (f(e, n, i) - t) / o
                }
                return e
            }(e, m, t, c) : 0 === v ? m : function(t, e, r, n, o) {
                var s, l, c = 0;
                do {
                    (s = f(l = e + (r - e) / 2, n, o) - t) > 0 ? r = l : e = l
                } while (Math.abs(s) > i && ++c < a);
                return l
            }(e, l, l + s, t, c)
        }
        return function(r) {
            return t === e && c === h ? r : 0 === r ? 0 : 1 === r ? 1 : f(m(r), e, h)
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = r(3)(r(181)),
        i = r(3),
        a = r(57);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.optimizeFloat = l, e.createBezierEasing = function(t) {
        return s.default.apply(void 0, (0, n.default)(t))
    }, e.applyEasing = function(t, e, r) {
        if (0 === e) return 0;
        if (1 === e) return 1;
        if (r) return l(e > 0 ? r(e) : e);
        return l(e > 0 && t && o[t] ? o[t](e) : e)
    };
    var o = a(r(178)),
        s = i(r(179));

    function l(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            n = Math.pow(r, e),
            i = Number(Math.round(t * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }
}, function(t, e, r) {
    var n = r(395),
        i = r(396),
        a = r(397);
    t.exports = function(t) {
        return n(t) || i(t) || a()
    }
}, function(t, e, r) {
    "use strict";
    var n = r(3)(r(38));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isPluginType = function(t) {
        return t === a.ActionTypeConsts.PLUGIN_LOTTIE
    }, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0;
    var i = r(399),
        a = r(14),
        o = r(120),
        s = (0, n.default)({}, a.ActionTypeConsts.PLUGIN_LOTTIE, {
            getConfig: i.getPluginConfig,
            getOrigin: i.getPluginOrigin,
            getDuration: i.getPluginDuration,
            getDestination: i.getPluginDestination,
            createInstance: i.createPluginInstance,
            render: i.renderPlugin,
            clear: i.clearPlugin
        });
    var l = function(t) {
            return function(e) {
                if (!o.IS_BROWSER_ENV) return function() {
                    return null
                };
                var r = s[e];
                if (!r) throw new Error("IX2 no plugin configured for: ".concat(e));
                var n = r[t];
                if (!n) throw new Error("IX2 invalid plugin method: ".concat(t));
                return n
            }
        },
        c = l("getConfig");
    e.getPluginConfig = c;
    var h = l("getOrigin");
    e.getPluginOrigin = h;
    var u = l("getDuration");
    e.getPluginDuration = u;
    var f = l("getDestination");
    e.getPluginDestination = f;
    var p = l("createInstance");
    e.createPluginInstance = p;
    var d = l("render");
    e.renderPlugin = d;
    var m = l("clear");
    e.clearPlugin = m
}, function(t, e, r) {
    var n = r(184),
        i = r(406)(n);
    t.exports = i
}, function(t, e, r) {
    var n = r(404),
        i = r(64);
    t.exports = function(t, e) {
        return t && n(t, e, i)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(3)(r(181)),
        i = r(57),
        a = r(3);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.observeRequests = function(t) {
        k({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.preview
            },
            onChange: et
        }), k({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.playback
            },
            onChange: nt
        }), k({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.stop
            },
            onChange: it
        }), k({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.clear
            },
            onChange: at
        })
    }, e.startEngine = ot, e.stopEngine = st, e.stopAllActionGroups = mt, e.stopActionGroup = vt, e.startActionGroup = gt;
    var o = a(r(46)),
        s = a(r(413)),
        l = a(r(176)),
        c = a(r(91)),
        h = a(r(414)),
        u = a(r(420)),
        f = a(r(432)),
        p = a(r(433)),
        d = a(r(434)),
        m = a(r(437)),
        v = r(14),
        g = r(45),
        y = r(121),
        E = i(r(440)),
        b = a(r(441)),
        _ = Object.keys(v.QuickEffectIds),
        x = function(t) {
            return _.includes(t)
        },
        w = v.IX2EngineConstants,
        A = w.COLON_DELIMITER,
        S = w.BOUNDARY_SELECTOR,
        T = w.HTML_ELEMENT,
        I = w.RENDER_GENERAL,
        P = w.W_MOD_IX,
        C = g.IX2VanillaUtils,
        D = C.getAffectedElements,
        M = C.getElementId,
        O = C.getDestinationValues,
        k = C.observeStore,
        R = C.getInstanceId,
        F = C.renderHTMLElement,
        L = C.clearAllStyles,
        N = C.getMaxDurationItemIndex,
        V = C.getComputedStyle,
        B = C.getInstanceOrigin,
        G = C.reduceListToGroup,
        j = C.shouldNamespaceEventParameter,
        z = C.getNamespacedParameterId,
        H = C.shouldAllowMediaQuery,
        W = C.cleanupHTMLElement,
        X = C.stringifyTarget,
        U = C.mediaQueriesEqual,
        q = C.shallowEqual,
        Y = g.IX2VanillaPlugins,
        K = Y.isPluginType,
        $ = Y.createPluginInstance,
        Q = Y.getPluginDuration,
        Z = navigator.userAgent,
        J = Z.match(/iPad/i) || Z.match(/iPhone/),
        tt = 12;

    function et(t, e) {
        var r = t.rawData,
            n = function() {
                ot({
                    store: e,
                    rawData: r,
                    allowEvents: !0
                }), rt()
            };
        t.defer ? setTimeout(n, 0) : n()
    }

    function rt() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function nt(t, e) {
        var r = t.actionTypeId,
            n = t.actionListId,
            i = t.actionItemId,
            a = t.eventId,
            o = t.allowEvents,
            s = t.immediate,
            l = t.testManual,
            c = t.verbose,
            h = void 0 === c || c,
            u = t.rawData;
        if (n && i && u && s) {
            var f = u.actionLists[n];
            f && (u = G({
                actionList: f,
                actionItemId: i,
                rawData: u
            }))
        }
        if (ot({
                store: e,
                rawData: u,
                allowEvents: o,
                testManual: l
            }), n && r === v.ActionTypeConsts.GENERAL_START_ACTION || x(r)) {
            vt({
                store: e,
                actionListId: n
            }), dt({
                store: e,
                actionListId: n,
                eventId: a
            });
            var p = gt({
                store: e,
                eventId: a,
                actionListId: n,
                immediate: s,
                verbose: h
            });
            h && p && e.dispatch((0, y.actionListPlaybackChanged)({
                actionListId: n,
                isPlaying: !s
            }))
        }
    }

    function it(t, e) {
        var r = t.actionListId;
        r ? vt({
            store: e,
            actionListId: r
        }) : mt({
            store: e
        }), st(e)
    }

    function at(t, e) {
        st(e), L({
            store: e,
            elementApi: E
        })
    }

    function ot(t) {
        var e, r = t.store,
            i = t.rawData,
            a = t.allowEvents,
            o = t.testManual,
            s = r.getState().ixSession;
        i && r.dispatch((0, y.rawDataImported)(i)), s.active || (r.dispatch((0, y.sessionInitialized)({
            hasBoundaryNodes: Boolean(document.querySelector(S)),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), a && (function(t) {
            var e = t.getState().ixData.eventTypeMap;
            ht(t), (0, d.default)(e, function(e, r) {
                var i = b.default[r];
                i ? function(t) {
                    var e = t.logic,
                        r = t.store,
                        i = t.events;
                    ! function(t) {
                        if (J) {
                            var e = {},
                                r = "";
                            for (var n in t) {
                                var i = t[n],
                                    a = i.eventTypeId,
                                    o = i.target,
                                    s = E.getQuerySelector(o);
                                e[s] || a !== v.EventTypeConsts.MOUSE_CLICK && a !== v.EventTypeConsts.MOUSE_SECOND_CLICK || (e[s] = !0, r += s + "{cursor: pointer;touch-action: manipulation;}")
                            }
                            if (r) {
                                var l = document.createElement("style");
                                l.textContent = r, document.body.appendChild(l)
                            }
                        }
                    }(i);
                    var a = e.types,
                        o = e.handler,
                        s = r.getState().ixData,
                        u = s.actionLists,
                        f = ut(i, pt);
                    if ((0, h.default)(f)) {
                        (0, d.default)(f, function(t, e) {
                            var a = i[e],
                                o = a.action,
                                h = a.id,
                                f = a.mediaQueries,
                                p = void 0 === f ? s.mediaQueryKeys : f,
                                d = o.config.actionListId;
                            if (U(p, s.mediaQueryKeys) || r.dispatch((0, y.mediaQueriesDefined)()), o.actionTypeId === v.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                var m = Array.isArray(a.config) ? a.config : [a.config];
                                m.forEach(function(e) {
                                    var i = e.continuousParameterGroupId,
                                        a = (0, c.default)(u, "".concat(d, ".continuousParameterGroups"), []),
                                        o = (0, l.default)(a, function(t) {
                                            var e = t.id;
                                            return e === i
                                        }),
                                        s = (e.smoothing || 0) / 100,
                                        f = (e.restingState || 0) / 100;
                                    o && t.forEach(function(t, i) {
                                        var a = h + A + i;
                                        ! function(t) {
                                            var e = t.store,
                                                r = t.eventStateKey,
                                                i = t.eventTarget,
                                                a = t.eventId,
                                                o = t.eventConfig,
                                                s = t.actionListId,
                                                l = t.parameterGroup,
                                                h = t.smoothing,
                                                u = t.restingValue,
                                                f = e.getState(),
                                                p = f.ixData,
                                                d = f.ixSession,
                                                m = p.events[a],
                                                v = m.eventTypeId,
                                                g = {},
                                                y = {},
                                                b = [],
                                                _ = l.continuousActionGroups,
                                                x = l.id;
                                            j(v, o) && (x = z(r, x));
                                            var w = d.hasBoundaryNodes && i ? E.getClosestElement(i, S) : null;
                                            _.forEach(function(t) {
                                                var e = t.keyframe,
                                                    r = t.actionItems;
                                                r.forEach(function(t) {
                                                    var r = t.actionTypeId,
                                                        a = t.config.target;
                                                    if (a) {
                                                        var o = a.boundaryMode ? w : null,
                                                            s = X(a) + A + r;
                                                        if (y[s] = function() {
                                                                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                                                    r = arguments.length > 1 ? arguments[1] : void 0,
                                                                    i = arguments.length > 2 ? arguments[2] : void 0,
                                                                    a = (0, n.default)(e);
                                                                return a.some(function(e, n) {
                                                                    return e.keyframe === r && (t = n, !0)
                                                                }), null == t && (t = a.length, a.push({
                                                                    keyframe: r,
                                                                    actionItems: []
                                                                })), a[t].actionItems.push(i), a
                                                            }(y[s], e, t), !g[s]) {
                                                            g[s] = !0;
                                                            var l = t.config;
                                                            D({
                                                                config: l,
                                                                event: m,
                                                                eventTarget: i,
                                                                elementRoot: o,
                                                                elementApi: E
                                                            }).forEach(function(t) {
                                                                b.push({
                                                                    element: t,
                                                                    key: s
                                                                })
                                                            })
                                                        }
                                                    }
                                                })
                                            }), b.forEach(function(t) {
                                                var r = t.element,
                                                    n = t.key,
                                                    i = y[n],
                                                    o = (0, c.default)(i, "[0].actionItems[0]", {}),
                                                    l = o.actionTypeId,
                                                    f = K(l) ? $(l)(r, o) : null,
                                                    p = O({
                                                        element: r,
                                                        actionItem: o,
                                                        elementApi: E
                                                    }, f);
                                                yt({
                                                    store: e,
                                                    element: r,
                                                    eventId: a,
                                                    actionListId: s,
                                                    actionItem: o,
                                                    destination: p,
                                                    continuous: !0,
                                                    parameterId: x,
                                                    actionGroups: i,
                                                    smoothing: h,
                                                    restingValue: u,
                                                    pluginInstance: f
                                                })
                                            })
                                        }({
                                            store: r,
                                            eventStateKey: a,
                                            eventTarget: t,
                                            eventId: h,
                                            eventConfig: e,
                                            actionListId: d,
                                            parameterGroup: o,
                                            smoothing: s,
                                            restingValue: f
                                        })
                                    })
                                })
                            }(o.actionTypeId === v.ActionTypeConsts.GENERAL_START_ACTION || x(o.actionTypeId)) && dt({
                                store: r,
                                actionListId: d,
                                eventId: h
                            })
                        });
                        var p = function(t) {
                                var e = r.getState(),
                                    n = e.ixSession;
                                ft(f, function(e, a, l) {
                                    var c = i[a],
                                        h = n.eventState[l],
                                        u = c.action,
                                        f = c.mediaQueries,
                                        p = void 0 === f ? s.mediaQueryKeys : f;
                                    if (H(p, n.mediaQueryKey)) {
                                        var d = function() {
                                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                i = o({
                                                    store: r,
                                                    element: e,
                                                    event: c,
                                                    eventConfig: n,
                                                    nativeEvent: t,
                                                    eventStateKey: l
                                                }, h);
                                            q(i, h) || r.dispatch((0, y.eventStateChanged)(l, i))
                                        };
                                        if (u.actionTypeId === v.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                            var m = Array.isArray(c.config) ? c.config : [c.config];
                                            m.forEach(d)
                                        } else d()
                                    }
                                })
                            },
                            g = (0, m.default)(p, tt),
                            b = function(t) {
                                var e = t.target,
                                    n = void 0 === e ? document : e,
                                    i = t.types,
                                    a = t.throttle;
                                i.split(" ").filter(Boolean).forEach(function(t) {
                                    var e = a ? g : p;
                                    n.addEventListener(t, e), r.dispatch((0, y.eventListenerAdded)(n, [t, e]))
                                })
                            };
                        Array.isArray(a) ? a.forEach(b) : "string" == typeof a && b(e)
                    }
                }({
                    logic: i,
                    store: t,
                    events: e
                }) : console.warn("IX2 event type not configured: ".concat(r))
            }), t.getState().ixSession.eventListeners.length && function(t) {
                var e = function() {
                    ht(t)
                };
                ct.forEach(function(r) {
                    window.addEventListener(r, e), t.dispatch((0, y.eventListenerAdded)(window, [r, e]))
                }), e()
            }(t)
        }(r), -1 === (e = document.documentElement).className.indexOf(P) && (e.className += " ".concat(P)), r.getState().ixSession.hasDefinedMediaQueries && function(t) {
            k({
                store: t,
                select: function(t) {
                    return t.ixSession.mediaQueryKey
                },
                onChange: function() {
                    st(t), L({
                        store: t,
                        elementApi: E
                    }), ot({
                        store: t,
                        allowEvents: !0
                    }), rt()
                }
            })
        }(r)), r.dispatch((0, y.sessionStarted)()), function(t, e) {
            ! function r(n) {
                var i = t.getState(),
                    a = i.ixSession,
                    o = i.ixParameters;
                a.active && (t.dispatch((0, y.animationFrameChanged)(n, o)), e ? function(t, e) {
                    var r = k({
                        store: t,
                        select: function(t) {
                            return t.ixSession.tick
                        },
                        onChange: function(t) {
                            e(t), r()
                        }
                    })
                }(t, r) : requestAnimationFrame(r))
            }(window.performance.now())
        }(r, o))
    }

    function st(t) {
        var e = t.getState().ixSession;
        e.active && (e.eventListeners.forEach(lt), t.dispatch((0, y.sessionStopped)()))
    }

    function lt(t) {
        var e = t.target,
            r = t.listenerParams;
        e.removeEventListener.apply(e, r)
    }
    var ct = ["resize", "orientationchange"];

    function ht(t) {
        var e = t.getState(),
            r = e.ixSession,
            n = e.ixData,
            i = window.innerWidth;
        if (i !== r.viewportWidth) {
            var a = n.mediaQueries;
            t.dispatch((0, y.viewportWidthChanged)({
                width: i,
                mediaQueries: a
            }))
        }
    }
    var ut = function(t, e) {
            return (0, u.default)((0, p.default)(t, e), f.default)
        },
        ft = function(t, e) {
            (0, d.default)(t, function(t, r) {
                t.forEach(function(t, n) {
                    e(t, r, r + A + n)
                })
            })
        },
        pt = function(t) {
            var e = {
                target: t.target,
                targets: t.targets
            };
            return D({
                config: e,
                elementApi: E
            })
        };

    function dt(t) {
        var e = t.store,
            r = t.actionListId,
            n = t.eventId,
            i = e.getState(),
            a = i.ixData,
            o = i.ixSession,
            s = a.actionLists,
            l = a.events[n],
            h = s[r];
        if (h && h.useFirstGroupAsInitialState) {
            var u = (0, c.default)(h, "actionItemGroups[0].actionItems", []),
                f = (0, c.default)(l, "mediaQueries", a.mediaQueryKeys);
            if (!H(f, o.mediaQueryKey)) return;
            u.forEach(function(t) {
                var i, a = t.config,
                    o = t.actionTypeId,
                    s = !0 === (null == a ? void 0 : null === (i = a.target) || void 0 === i ? void 0 : i.useEventTarget) ? {
                        target: l.target,
                        targets: l.targets
                    } : a,
                    c = D({
                        config: s,
                        event: l,
                        elementApi: E
                    }),
                    h = K(o);
                c.forEach(function(i) {
                    var a = h ? $(o)(i, t) : null;
                    yt({
                        destination: O({
                            element: i,
                            actionItem: t,
                            elementApi: E
                        }, a),
                        immediate: !0,
                        store: e,
                        element: i,
                        eventId: n,
                        actionItem: t,
                        actionListId: r,
                        pluginInstance: a
                    })
                })
            })
        }
    }

    function mt(t) {
        var e = t.store,
            r = e.getState().ixInstances;
        (0, d.default)(r, function(t) {
            if (!t.continuous) {
                var r = t.actionListId,
                    n = t.verbose;
                Et(t, e), n && e.dispatch((0, y.actionListPlaybackChanged)({
                    actionListId: r,
                    isPlaying: !1
                }))
            }
        })
    }

    function vt(t) {
        var e = t.store,
            r = t.eventId,
            n = t.eventTarget,
            i = t.eventStateKey,
            a = t.actionListId,
            o = e.getState(),
            s = o.ixInstances,
            l = o.ixSession.hasBoundaryNodes && n ? E.getClosestElement(n, S) : null;
        (0, d.default)(s, function(t) {
            var n = (0, c.default)(t, "actionItem.config.target.boundaryMode"),
                o = !i || t.eventStateKey === i;
            if (t.actionListId === a && t.eventId === r && o) {
                if (l && n && !E.elementContains(l, t.element)) return;
                Et(t, e), t.verbose && e.dispatch((0, y.actionListPlaybackChanged)({
                    actionListId: a,
                    isPlaying: !1
                }))
            }
        })
    }

    function gt(t) {
        var e, r = t.store,
            n = t.eventId,
            i = t.eventTarget,
            a = t.eventStateKey,
            o = t.actionListId,
            s = t.groupIndex,
            l = void 0 === s ? 0 : s,
            h = t.immediate,
            u = t.verbose,
            f = r.getState(),
            p = f.ixData,
            d = f.ixSession,
            m = p.events[n] || {},
            v = m.mediaQueries,
            g = void 0 === v ? p.mediaQueryKeys : v,
            y = (0, c.default)(p, "actionLists.".concat(o), {}),
            b = y.actionItemGroups,
            _ = y.useFirstGroupAsInitialState;
        if (!b || !b.length) return !1;
        l >= b.length && (0, c.default)(m, "config.loop") && (l = 0), 0 === l && _ && l++;
        var w = (0 === l || 1 === l && _) && x(null === (e = m.action) || void 0 === e ? void 0 : e.actionTypeId) ? m.config.delay : void 0,
            A = (0, c.default)(b, [l, "actionItems"], []);
        if (!A.length) return !1;
        if (!H(g, d.mediaQueryKey)) return !1;
        var T = d.hasBoundaryNodes && i ? E.getClosestElement(i, S) : null,
            I = N(A),
            P = !1;
        return A.forEach(function(t, e) {
            var s = t.config,
                c = t.actionTypeId,
                f = K(c),
                p = s.target;
            if (p) {
                var d = p.boundaryMode ? T : null;
                D({
                    config: s,
                    event: m,
                    eventTarget: i,
                    elementRoot: d,
                    elementApi: E
                }).forEach(function(s, p) {
                    var d = f ? $(c)(s, t) : null,
                        m = f ? Q(c)(s, t) : null;
                    P = !0;
                    var v = I === e && 0 === p,
                        g = V({
                            element: s,
                            actionItem: t
                        }),
                        y = O({
                            element: s,
                            actionItem: t,
                            elementApi: E
                        }, d);
                    yt({
                        store: r,
                        element: s,
                        actionItem: t,
                        eventId: n,
                        eventTarget: i,
                        eventStateKey: a,
                        actionListId: o,
                        groupIndex: l,
                        isCarrier: v,
                        computedStyle: g,
                        destination: y,
                        immediate: h,
                        verbose: u,
                        pluginInstance: d,
                        pluginDuration: m,
                        instanceDelay: w
                    })
                })
            }
        }), P
    }

    function yt(t) {
        var e, r, n = t.store,
            i = t.computedStyle,
            a = (0, s.default)(t, ["store", "computedStyle"]),
            l = a.element,
            c = a.actionItem,
            h = a.immediate,
            u = a.pluginInstance,
            f = a.continuous,
            p = a.restingValue,
            d = a.eventId,
            m = !f,
            g = R(),
            b = n.getState(),
            _ = b.ixElements,
            x = b.ixSession,
            w = b.ixData,
            A = M(_, l),
            S = (_[A] || {}).refState,
            T = E.getRefType(l),
            I = x.reducedMotion && v.ReducedMotionTypes[c.actionTypeId];
        if (I && f) switch (null === (e = w.events[d]) || void 0 === e ? void 0 : e.eventTypeId) {
            case v.EventTypeConsts.MOUSE_MOVE:
            case v.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                r = p;
                break;
            default:
                r = .5
        }
        var P = B(l, S, i, c, E, u);
        n.dispatch((0, y.instanceAdded)((0, o.default)({
            instanceId: g,
            elementId: A,
            origin: P,
            refType: T,
            skipMotion: I,
            skipToValue: r
        }, a))), bt(document.body, "ix2-animation-started", g), h ? function(t, e) {
            var r = t.getState().ixParameters;
            t.dispatch((0, y.instanceStarted)(e, 0)), t.dispatch((0, y.animationFrameChanged)(performance.now(), r)), _t(t.getState().ixInstances[e], t)
        }(n, g) : (k({
            store: n,
            select: function(t) {
                return t.ixInstances[g]
            },
            onChange: _t
        }), m && n.dispatch((0, y.instanceStarted)(g, x.tick)))
    }

    function Et(t, e) {
        bt(document.body, "ix2-animation-stopping", {
            instanceId: t.id,
            state: e.getState()
        });
        var r = t.elementId,
            n = t.actionItem,
            i = e.getState().ixElements[r] || {},
            a = i.ref;
        i.refType === T && W(a, n, E), e.dispatch((0, y.instanceRemoved)(t.id))
    }

    function bt(t, e, r) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !0, !0, r), t.dispatchEvent(n)
    }

    function _t(t, e) {
        var r = t.active,
            n = t.continuous,
            i = t.complete,
            a = t.elementId,
            o = t.actionItem,
            s = t.actionTypeId,
            l = t.renderType,
            c = t.current,
            h = t.groupIndex,
            u = t.eventId,
            f = t.eventTarget,
            p = t.eventStateKey,
            d = t.actionListId,
            m = t.isCarrier,
            v = t.styleProp,
            g = t.verbose,
            b = t.pluginInstance,
            _ = e.getState(),
            x = _.ixData,
            w = _.ixSession,
            A = (x.events[u] || {}).mediaQueries,
            S = void 0 === A ? x.mediaQueryKeys : A;
        if (H(S, w.mediaQueryKey) && (n || r || i)) {
            if (c || l === I && i) {
                e.dispatch((0, y.elementStateChanged)(a, s, c, o));
                var P = e.getState().ixElements[a] || {},
                    C = P.ref,
                    D = P.refType,
                    M = P.refState,
                    O = M && M[s];
                switch (D) {
                    case T:
                        F(C, M, O, u, o, v, E, l, b)
                }
            }
            if (i) {
                if (m) {
                    var k = gt({
                        store: e,
                        eventId: u,
                        eventTarget: f,
                        eventStateKey: p,
                        actionListId: d,
                        groupIndex: h + 1,
                        verbose: g
                    });
                    g && !k && e.dispatch((0, y.actionListPlaybackChanged)({
                        actionListId: d,
                        isPlaying: !1
                    }))
                }
                Et(t, e)
            }
        }
    }
}, function(t, e, r) {
    var n = r(187);
    t.exports = function(t, e, r) {
        "__proto__" == e && n ? n(t, e, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : t[e] = r
    }
}, function(t, e, r) {
    var n = r(29),
        i = function() {
            try {
                var t = n(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {}
        }();
    t.exports = i
}, function(t, e, r) {
    var n = r(23),
        i = Object.create,
        a = function() {
            function t() {}
            return function(e) {
                if (!n(e)) return {};
                if (i) return i(e);
                t.prototype = e;
                var r = new t;
                return t.prototype = void 0, r
            }
        }();
    t.exports = a
}, function(t, e, r) {
    var n = r(454),
        i = r(455),
        a = n ? function(t) {
            return n.get(t)
        } : i;
    t.exports = a
}, function(t, e, r) {
    var n = r(456),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        for (var e = t.name + "", r = n[e], a = i.call(n, e) ? r.length : 0; a--;) {
            var o = r[a],
                s = o.func;
            if (null == s || s == t) return o.name
        }
        return e
    }
}, function(t, e, r) {
    r(192), r(361), r(362), r(363), r(364), r(365), r(366), r(367), r(56), r(369), r(463), r(464), r(465), r(466), r(467), r(472), r(473), r(474), t.exports = r(475)
}, function(t, e, r) {
    "use strict";
    var n = r(9),
        i = r(194),
        a = r(360);
    n.define("lottie", t.exports = function() {
        return {
            lottie: a,
            createInstance: i.createInstance,
            cleanupElement: i.cleanupElement,
            init: i.init,
            destroy: i.destroy,
            ready: i.ready
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = window.$,
        i = r(125) && n.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = function() {
        var t = {
                VERSION: "1.6.0-Webflow"
            },
            e = {},
            r = Array.prototype,
            n = Object.prototype,
            a = Function.prototype,
            o = (r.push, r.slice),
            s = (r.concat, n.toString, n.hasOwnProperty),
            l = r.forEach,
            c = r.map,
            h = (r.reduce, r.reduceRight, r.filter),
            u = (r.every, r.some),
            f = r.indexOf,
            p = (r.lastIndexOf, Array.isArray, Object.keys),
            d = (a.bind, t.each = t.forEach = function(r, n, i) {
                if (null == r) return r;
                if (l && r.forEach === l) r.forEach(n, i);
                else if (r.length === +r.length) {
                    for (var a = 0, o = r.length; a < o; a++)
                        if (n.call(i, r[a], a, r) === e) return
                } else {
                    var s = t.keys(r);
                    for (a = 0, o = s.length; a < o; a++)
                        if (n.call(i, r[s[a]], s[a], r) === e) return
                }
                return r
            });
        t.map = t.collect = function(t, e, r) {
            var n = [];
            return null == t ? n : c && t.map === c ? t.map(e, r) : (d(t, function(t, i, a) {
                n.push(e.call(r, t, i, a))
            }), n)
        }, t.find = t.detect = function(t, e, r) {
            var n;
            return m(t, function(t, i, a) {
                if (e.call(r, t, i, a)) return n = t, !0
            }), n
        }, t.filter = t.select = function(t, e, r) {
            var n = [];
            return null == t ? n : h && t.filter === h ? t.filter(e, r) : (d(t, function(t, i, a) {
                e.call(r, t, i, a) && n.push(t)
            }), n)
        };
        var m = t.some = t.any = function(r, n, i) {
            n || (n = t.identity);
            var a = !1;
            return null == r ? a : u && r.some === u ? r.some(n, i) : (d(r, function(t, r, o) {
                if (a || (a = n.call(i, t, r, o))) return e
            }), !!a)
        };
        t.contains = t.include = function(t, e) {
            return null != t && (f && t.indexOf === f ? -1 != t.indexOf(e) : m(t, function(t) {
                return t === e
            }))
        }, t.delay = function(t, e) {
            var r = o.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, r)
            }, e)
        }, t.defer = function(e) {
            return t.delay.apply(t, [e, 1].concat(o.call(arguments, 1)))
        }, t.throttle = function(t) {
            var e, r, n;
            return function() {
                e || (e = !0, r = arguments, n = this, i.frame(function() {
                    e = !1, t.apply(n, r)
                }))
            }
        }, t.debounce = function(e, r, n) {
            var i, a, o, s, l, c = function c() {
                var h = t.now() - s;
                h < r ? i = setTimeout(c, r - h) : (i = null, n || (l = e.apply(o, a), o = a = null))
            };
            return function() {
                o = this, a = arguments, s = t.now();
                var h = n && !i;
                return i || (i = setTimeout(c, r)), h && (l = e.apply(o, a), o = a = null), l
            }
        }, t.defaults = function(e) {
            if (!t.isObject(e)) return e;
            for (var r = 1, n = arguments.length; r < n; r++) {
                var i = arguments[r];
                for (var a in i) void 0 === e[a] && (e[a] = i[a])
            }
            return e
        }, t.keys = function(e) {
            if (!t.isObject(e)) return [];
            if (p) return p(e);
            var r = [];
            for (var n in e) t.has(e, n) && r.push(n);
            return r
        }, t.has = function(t, e) {
            return s.call(t, e)
        }, t.isObject = function(t) {
            return t === Object(t)
        }, t.now = Date.now || function() {
            return (new Date).getTime()
        }, t.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var v = /(.)^/,
            g = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            y = /\\|'|\r|\n|\u2028|\u2029/g,
            E = function(t) {
                return "\\" + g[t]
            };
        return t.template = function(e, r, n) {
            !r && n && (r = n), r = t.defaults({}, r, t.templateSettings);
            var i = RegExp([(r.escape || v).source, (r.interpolate || v).source, (r.evaluate || v).source].join("|") + "|$", "g"),
                a = 0,
                o = "__p+='";
            e.replace(i, function(t, r, n, i, s) {
                return o += e.slice(a, s).replace(y, E), a = s + t.length, r ? o += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : n ? o += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : i && (o += "';\n" + i + "\n__p+='"), t
            }), o += "';\n", r.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                var s = new Function(r.variable || "obj", "_", o)
            } catch (t) {
                throw t.source = o, t
            }
            var l = function(e) {
                    return s.call(this, e, t)
                },
                c = r.variable || "obj";
            return l.source = "function(" + c + "){\n" + o + "}", l
        }, t
    }()
}, function(t, e, r) {
    "use strict";
    var n = r(3),
        i = n(r(195)),
        a = n(r(196)),
        o = r(3);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ready = e.destroy = e.init = e.cleanupElement = e.createInstance = void 0;
    var s = o(r(46)),
        l = o(r(38)),
        c = o(r(126));
    r(265);
    var h = {
            Playing: "playing",
            Stopped: "stopped"
        },
        u = new(function() {
            function t() {
                (0, i.default)(this, t), (0, l.default)(this, "_cache", [])
            }
            return (0, a.default)(t, [{
                key: "set",
                value: function(t, e) {
                    var r = (0, c.default)(this._cache, function(e) {
                        return e.wrapper === t
                    }); - 1 !== r && this._cache.splice(r, 1), this._cache.push({
                        wrapper: t,
                        instance: e
                    })
                }
            }, {
                key: "delete",
                value: function(t) {
                    var e = (0, c.default)(this._cache, function(e) {
                        return e.wrapper === t
                    }); - 1 !== e && this._cache.splice(e, 1)
                }
            }, {
                key: "get",
                value: function(t) {
                    var e = (0, c.default)(this._cache, function(e) {
                        return e.wrapper === t
                    });
                    return -1 !== e ? this._cache[e].instance : null
                }
            }]), t
        }()),
        f = {},
        p = function() {
            function t() {
                (0, i.default)(this, t), (0, l.default)(this, "config", null), (0, l.default)(this, "currentState", h.Stopped), (0, l.default)(this, "handlers", {
                    enterFrame: [],
                    complete: [],
                    loop: [],
                    dataReady: [],
                    destroy: [],
                    error: []
                })
            }
            return (0, a.default)(t, [{
                key: "load",
                value: function(t) {
                    var e = this,
                        r = t.dataset || f,
                        n = r.src || "",
                        i = r.preserveAspectRatio || "xMidYMid meet",
                        a = r.renderer || "svg",
                        o = 1 === parseFloat(r.loop),
                        l = parseFloat(r.direction) || 1,
                        c = 1 === parseFloat(r.autoplay),
                        p = parseFloat(r.duration) || 0,
                        d = 1 === parseFloat(r.isIx2Target),
                        m = parseFloat(r.ix2InitialState);
                    isNaN(m) && (m = null);
                    var v = {
                        src: n,
                        loop: o,
                        autoplay: c,
                        renderer: a,
                        direction: l,
                        duration: p,
                        hasIx2: d,
                        ix2InitialValue: m,
                        preserveAspectRatio: i
                    };
                    if (this.animationItem && this.config && this.config.src === n && a === this.config.renderer && i === this.config.preserveAspectRatio) {
                        if (o !== this.config.loop && this.setLooping(o), d || (l !== this.config.direction && this.setDirection(l), p !== this.config.duration && (p > 0 && p !== this.duration ? this.setSpeed(this.duration / p) : this.setSpeed(1))), c && this.play(), m && m !== this.config.ix2InitialValue) {
                            var g = m / 100;
                            this.goToFrame(this.frames * g)
                        }
                        this.config = v
                    } else {
                        var y = {
                            container: t,
                            loop: o,
                            autoplay: c,
                            renderer: a,
                            rendererSettings: {
                                preserveAspectRatio: i,
                                progressiveLoad: !0,
                                hideOnTransparent: !0
                            }
                        };
                        try {
                            this.animationItem && this.destroy(), this.animationItem = window.Webflow.require("lottie").lottie.loadAnimation((0, s.default)({}, y, {
                                path: n
                            }))
                        } catch (t) {
                            return void this.handlers.error.forEach(function(e) {
                                return e(t)
                            })
                        }
                        this.animationItem && (Boolean(window.Webflow.env("design") || window.Webflow.env("preview")) && (this.animationItem.addEventListener("enterFrame", function() {
                            if (e.isPlaying) {
                                var t = e.animationItem,
                                    r = t.currentFrame,
                                    n = t.totalFrames,
                                    i = t.playDirection,
                                    a = r / n * 100,
                                    o = Math.round(1 === i ? a : 100 - a);
                                e.handlers.enterFrame.forEach(function(t) {
                                    return t(o, r)
                                })
                            }
                        }), this.animationItem.addEventListener("complete", function() {
                            e.currentState === h.Playing && e.animationItem.loop ? e.currentState = h.Stopped : e.handlers.complete.forEach(function(t) {
                                return t()
                            })
                        }), this.animationItem.addEventListener("loopComplete", function(t) {
                            e.handlers.loop.forEach(function(e) {
                                return e(t)
                            })
                        }), this.animationItem.addEventListener("data_failed", function(t) {
                            e.handlers.error.forEach(function(e) {
                                return e(t)
                            })
                        }), this.animationItem.addEventListener("error", function(t) {
                            e.handlers.error.forEach(function(e) {
                                return e(t)
                            })
                        })), this.isLoaded ? (this.handlers.dataReady.forEach(function(t) {
                            return t()
                        }), c && this.play()) : this.animationItem.addEventListener("data_ready", function() {
                            if (e.handlers.dataReady.forEach(function(t) {
                                    return t()
                                }), d || (e.setDirection(l), p > 0 && p !== e.duration && e.setSpeed(e.duration / p), c && e.play()), m) {
                                var t = m / 100;
                                e.goToFrame(e.frames * t)
                            }
                        }), u.set(t, this), this.container = t, this.config = v)
                    }
                }
            }, {
                key: "onFrameChange",
                value: function(t) {
                    -1 === this.handlers.enterFrame.indexOf(t) && this.handlers.enterFrame.push(t)
                }
            }, {
                key: "onPlaybackComplete",
                value: function(t) {
                    -1 === this.handlers.complete.indexOf(t) && this.handlers.complete.push(t)
                }
            }, {
                key: "onLoopComplete",
                value: function(t) {
                    -1 === this.handlers.loop.indexOf(t) && this.handlers.loop.push(t)
                }
            }, {
                key: "onDestroy",
                value: function(t) {
                    -1 === this.handlers.destroy.indexOf(t) && this.handlers.destroy.push(t)
                }
            }, {
                key: "onDataReady",
                value: function(t) {
                    -1 === this.handlers.dataReady.indexOf(t) && this.handlers.dataReady.push(t)
                }
            }, {
                key: "onError",
                value: function(t) {
                    -1 === this.handlers.error.indexOf(t) && this.handlers.error.push(t)
                }
            }, {
                key: "play",
                value: function() {
                    if (this.animationItem) {
                        var t = 1 === this.animationItem.playDirection ? 0 : this.frames;
                        this.animationItem.goToAndPlay(t, !0), this.currentState = h.Playing
                    }
                }
            }, {
                key: "stop",
                value: function() {
                    if (this.animationItem) {
                        if (this.isPlaying) {
                            var t = 1 === this.animationItem.playDirection ? 0 : this.frames;
                            this.animationItem.goToAndStop(t, !0)
                        }
                        this.currentState = h.Stopped
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    this.animationItem && (this.isPlaying && this.stop(), this.handlers.destroy.forEach(function(t) {
                        return t()
                    }), this.container && u.delete(this.container), this.animationItem.destroy(), Object.keys(this.handlers).forEach(function(e) {
                        return t.handlers[e].length = 0
                    }), this.animationItem = null, this.container = null, this.config = null)
                }
            }, {
                key: "goToFrame",
                value: function(t) {
                    this.animationItem && this.animationItem.setCurrentRawFrameValue(t)
                }
            }, {
                key: "setSubframe",
                value: function(t) {
                    this.animationItem && this.animationItem.setSubframe(t)
                }
            }, {
                key: "setSpeed",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setSpeed(t))
                }
            }, {
                key: "setLooping",
                value: function(t) {
                    this.animationItem && (this.isPlaying && this.stop(), this.animationItem.loop = t)
                }
            }, {
                key: "setDirection",
                value: function(t) {
                    this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setDirection(t), this.goToFrame(1 === t ? 0 : this.frames))
                }
            }, {
                key: "isPlaying",
                get: function() {
                    return !!this.animationItem && !this.animationItem.isPaused
                }
            }, {
                key: "isPaused",
                get: function() {
                    return !!this.animationItem && this.animationItem.isPaused
                }
            }, {
                key: "duration",
                get: function() {
                    return this.animationItem ? this.animationItem.getDuration() : 0
                }
            }, {
                key: "frames",
                get: function() {
                    return this.animationItem ? this.animationItem.totalFrames : 0
                }
            }, {
                key: "direction",
                get: function() {
                    return this.animationItem ? this.animationItem.playDirection : 1
                }
            }, {
                key: "isLoaded",
                get: function() {
                    return this.animationItem, this.animationItem.isLoaded
                }
            }, {
                key: "ix2InitialValue",
                get: function() {
                    return this.config ? this.config.ix2InitialValue : null
                }
            }]), t
        }(),
        d = function() {
            return Array.from(document.querySelectorAll('[data-animation-type="lottie"]'))
        },
        m = function(t) {
            var e = u.get(t);
            return null == e && (e = new p), e.load(t), e
        };
    e.createInstance = m;
    var v = function(t) {
        var e = u.get(t);
        e && e.destroy()
    };
    e.cleanupElement = v;
    var g = function() {
        d().forEach(function(t) {
            1 === parseFloat(t.getAttribute("data-is-ix2-target")) || v(t), m(t)
        })
    };
    e.init = g;
    e.destroy = function() {
        d().forEach(v)
    };
    var y = g;
    e.ready = y
}, function(t, e) {
    t.exports = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
}, function(t, e) {
    function r(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    t.exports = function(t, e, n) {
        return e && r(t.prototype, e), n && r(t, n), t
    }
}, function(t, e, r) {
    var n = r(198),
        i = r(250),
        a = r(142);
    t.exports = function(t) {
        var e = i(t);
        return 1 == e.length && e[0][2] ? a(e[0][0], e[0][1]) : function(r) {
            return r === t || n(r, t, e)
        }
    }
}, function(t, e, r) {
    var n = r(128),
        i = r(132),
        a = 1,
        o = 2;
    t.exports = function(t, e, r, s) {
        var l = r.length,
            c = l,
            h = !s;
        if (null == t) return !c;
        for (t = Object(t); l--;) {
            var u = r[l];
            if (h && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1
        }
        for (; ++l < c;) {
            var f = (u = r[l])[0],
                p = t[f],
                d = u[1];
            if (h && u[2]) {
                if (void 0 === p && !(f in t)) return !1
            } else {
                var m = new n;
                if (s) var v = s(p, d, f, t, e, m);
                if (!(void 0 === v ? i(d, p, a | o, s, m) : v)) return !1
            }
        }
        return !0
    }
}, function(t, e) {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, function(t, e, r) {
    var n = r(60),
        i = Array.prototype.splice;
    t.exports = function(t) {
        var e = this.__data__,
            r = n(e, t);
        return !(r < 0 || (r == e.length - 1 ? e.pop() : i.call(e, r, 1), --this.size, 0))
    }
}, function(t, e, r) {
    var n = r(60);
    t.exports = function(t) {
        var e = this.__data__,
            r = n(e, t);
        return r < 0 ? void 0 : e[r][1]
    }
}, function(t, e, r) {
    var n = r(60);
    t.exports = function(t) {
        return n(this.__data__, t) > -1
    }
}, function(t, e, r) {
    var n = r(60);
    t.exports = function(t, e) {
        var r = this.__data__,
            i = n(r, t);
        return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this
    }
}, function(t, e, r) {
    var n = r(59);
    t.exports = function() {
        this.__data__ = new n, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.__data__,
            r = e.delete(t);
        return this.size = e.size, r
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.get(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
}, function(t, e, r) {
    var n = r(59),
        i = r(81),
        a = r(82),
        o = 200;
    t.exports = function(t, e) {
        var r = this.__data__;
        if (r instanceof n) {
            var s = r.__data__;
            if (!i || s.length < o - 1) return s.push([t, e]), this.size = ++r.size, this;
            r = this.__data__ = new a(s)
        }
        return r.set(t, e), this.size = r.size, this
    }
}, function(t, e, r) {
    var n = r(129),
        i = r(212),
        a = r(23),
        o = r(131),
        s = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        c = Object.prototype,
        h = l.toString,
        u = c.hasOwnProperty,
        f = RegExp("^" + h.call(u).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) {
        return !(!a(t) || i(t)) && (n(t) ? f : s).test(o(t))
    }
}, function(t, e, r) {
    var n = r(47),
        i = Object.prototype,
        a = i.hasOwnProperty,
        o = i.toString,
        s = n ? n.toStringTag : void 0;
    t.exports = function(t) {
        var e = a.call(t, s),
            r = t[s];
        try {
            t[s] = void 0;
            var n = !0
        } catch (t) {}
        var i = o.call(t);
        return n && (e ? t[s] = r : delete t[s]), i
    }
}, function(t, e) {
    var r = Object.prototype.toString;
    t.exports = function(t) {
        return r.call(t)
    }
}, function(t, e, r) {
    var n, i = r(213),
        a = (n = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
    t.exports = function(t) {
        return !!a && a in t
    }
}, function(t, e, r) {
    var n = r(19)["__core-js_shared__"];
    t.exports = n
}, function(t, e) {
    t.exports = function(t, e) {
        return null == t ? void 0 : t[e]
    }
}, function(t, e, r) {
    var n = r(216),
        i = r(59),
        a = r(81);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new n,
            map: new(a || i),
            string: new n
        }
    }
}, function(t, e, r) {
    var n = r(217),
        i = r(218),
        a = r(219),
        o = r(220),
        s = r(221);

    function l(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }
    l.prototype.clear = n, l.prototype.delete = i, l.prototype.get = a, l.prototype.has = o, l.prototype.set = s, t.exports = l
}, function(t, e, r) {
    var n = r(62);
    t.exports = function() {
        this.__data__ = n ? n(null) : {}, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e, r) {
    var n = r(62),
        i = "__lodash_hash_undefined__",
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        if (n) {
            var r = e[t];
            return r === i ? void 0 : r
        }
        return a.call(e, t) ? e[t] : void 0
    }
}, function(t, e, r) {
    var n = r(62),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        return n ? void 0 !== e[t] : i.call(e, t)
    }
}, function(t, e, r) {
    var n = r(62),
        i = "__lodash_hash_undefined__";
    t.exports = function(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = n && void 0 === e ? i : e, this
    }
}, function(t, e, r) {
    var n = r(63);
    t.exports = function(t) {
        var e = n(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
}, function(t, e, r) {
    var n = r(63);
    t.exports = function(t) {
        return n(this, t).get(t)
    }
}, function(t, e, r) {
    var n = r(63);
    t.exports = function(t) {
        return n(this, t).has(t)
    }
}, function(t, e, r) {
    var n = r(63);
    t.exports = function(t, e) {
        var r = n(this, t),
            i = r.size;
        return r.set(t, e), this.size += r.size == i ? 0 : 1, this
    }
}, function(t, e, r) {
    var n = r(128),
        i = r(133),
        a = r(233),
        o = r(237),
        s = r(90),
        l = r(11),
        c = r(84),
        h = r(86),
        u = 1,
        f = "[object Arguments]",
        p = "[object Array]",
        d = "[object Object]",
        m = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, r, v, g, y) {
        var E = l(t),
            b = l(e),
            _ = E ? p : s(t),
            x = b ? p : s(e),
            w = (_ = _ == f ? d : _) == d,
            A = (x = x == f ? d : x) == d,
            S = _ == x;
        if (S && c(t)) {
            if (!c(e)) return !1;
            E = !0, w = !1
        }
        if (S && !w) return y || (y = new n), E || h(t) ? i(t, e, r, v, g, y) : a(t, e, _, r, v, g, y);
        if (!(r & u)) {
            var T = w && m.call(t, "__wrapped__"),
                I = A && m.call(e, "__wrapped__");
            if (T || I) {
                var P = T ? t.value() : t,
                    C = I ? e.value() : e;
                return y || (y = new n), g(P, C, r, v, y)
            }
        }
        return !!S && (y || (y = new n), o(t, e, r, v, g, y))
    }
}, function(t, e, r) {
    var n = r(82),
        i = r(229),
        a = r(230);

    function o(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.__data__ = new n; ++e < r;) this.add(t[e])
    }
    o.prototype.add = o.prototype.push = i, o.prototype.has = a, t.exports = o
}, function(t, e) {
    var r = "__lodash_hash_undefined__";
    t.exports = function(t) {
        return this.__data__.set(t, r), this
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
            if (e(t[r], r, t)) return !0;
        return !1
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return t.has(e)
    }
}, function(t, e, r) {
    var n = r(47),
        i = r(234),
        a = r(80),
        o = r(133),
        s = r(235),
        l = r(236),
        c = 1,
        h = 2,
        u = "[object Boolean]",
        f = "[object Date]",
        p = "[object Error]",
        d = "[object Map]",
        m = "[object Number]",
        v = "[object RegExp]",
        g = "[object Set]",
        y = "[object String]",
        E = "[object Symbol]",
        b = "[object ArrayBuffer]",
        _ = "[object DataView]",
        x = n ? n.prototype : void 0,
        w = x ? x.valueOf : void 0;
    t.exports = function(t, e, r, n, x, A, S) {
        switch (r) {
            case _:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case b:
                return !(t.byteLength != e.byteLength || !A(new i(t), new i(e)));
            case u:
            case f:
            case m:
                return a(+t, +e);
            case p:
                return t.name == e.name && t.message == e.message;
            case v:
            case y:
                return t == e + "";
            case d:
                var T = s;
            case g:
                var I = n & c;
                if (T || (T = l), t.size != e.size && !I) return !1;
                var P = S.get(t);
                if (P) return P == e;
                n |= h, S.set(t, e);
                var C = o(T(t), T(e), n, x, A, S);
                return S.delete(t), C;
            case E:
                if (w) return w.call(t) == w.call(e)
        }
        return !1
    }
}, function(t, e, r) {
    var n = r(19).Uint8Array;
    t.exports = n
}, function(t, e) {
    t.exports = function(t) {
        var e = -1,
            r = Array(t.size);
        return t.forEach(function(t, n) {
            r[++e] = [n, t]
        }), r
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = -1,
            r = Array(t.size);
        return t.forEach(function(t) {
            r[++e] = t
        }), r
    }
}, function(t, e, r) {
    var n = r(238),
        i = 1,
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, r, o, s, l) {
        var c = r & i,
            h = n(t),
            u = h.length;
        if (u != n(e).length && !c) return !1;
        for (var f = u; f--;) {
            var p = h[f];
            if (!(c ? p in e : a.call(e, p))) return !1
        }
        var d = l.get(t),
            m = l.get(e);
        if (d && m) return d == e && m == t;
        var v = !0;
        l.set(t, e), l.set(e, t);
        for (var g = c; ++f < u;) {
            var y = t[p = h[f]],
                E = e[p];
            if (o) var b = c ? o(E, y, p, e, t, l) : o(y, E, p, t, e, l);
            if (!(void 0 === b ? y === E || s(y, E, r, o, l) : b)) {
                v = !1;
                break
            }
            g || (g = "constructor" == p)
        }
        if (v && !g) {
            var _ = t.constructor,
                x = e.constructor;
            _ != x && "constructor" in t && "constructor" in e && !("function" == typeof _ && _ instanceof _ && "function" == typeof x && x instanceof x) && (v = !1)
        }
        return l.delete(t), l.delete(e), v
    }
}, function(t, e, r) {
    var n = r(134),
        i = r(135),
        a = r(64);
    t.exports = function(t) {
        return n(t, a, i)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, i = 0, a = []; ++r < n;) {
            var o = t[r];
            e(o, r, t) && (a[i++] = o)
        }
        return a
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n
    }
}, function(t, e, r) {
    var n = r(39),
        i = r(30),
        a = "[object Arguments]";
    t.exports = function(t) {
        return i(t) && n(t) == a
    }
}, function(t, e) {
    t.exports = function() {
        return !1
    }
}, function(t, e, r) {
    var n = r(39),
        i = r(87),
        a = r(30),
        o = {};
    o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1, t.exports = function(t) {
        return a(t) && i(t.length) && !!o[n(t)]
    }
}, function(t, e) {
    t.exports = function(t) {
        return function(e) {
            return t(e)
        }
    }
}, function(t, e, r) {
    (function(t) {
        var n = r(130),
            i = e && !e.nodeType && e,
            a = i && "object" == typeof t && t && !t.nodeType && t,
            o = a && a.exports === i && n.process,
            s = function() {
                try {
                    var t = a && a.require && a.require("util").types;
                    return t || o && o.binding && o.binding("util")
                } catch (t) {}
            }();
        t.exports = s
    }).call(this, r(138)(t))
}, function(t, e, r) {
    var n = r(139)(Object.keys, Object);
    t.exports = n
}, function(t, e, r) {
    var n = r(29)(r(19), "DataView");
    t.exports = n
}, function(t, e, r) {
    var n = r(29)(r(19), "Promise");
    t.exports = n
}, function(t, e, r) {
    var n = r(29)(r(19), "Set");
    t.exports = n
}, function(t, e, r) {
    var n = r(141),
        i = r(64);
    t.exports = function(t) {
        for (var e = i(t), r = e.length; r--;) {
            var a = e[r],
                o = t[a];
            e[r] = [a, o, n(o)]
        }
        return e
    }
}, function(t, e, r) {
    var n = r(132),
        i = r(91),
        a = r(257),
        o = r(93),
        s = r(141),
        l = r(142),
        c = r(48),
        h = 1,
        u = 2;
    t.exports = function(t, e) {
        return o(t) && s(e) ? l(c(t), e) : function(r) {
            var o = i(r, t);
            return void 0 === o && o === e ? a(r, t) : n(e, o, h | u)
        }
    }
}, function(t, e, r) {
    var n = r(253),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        o = n(function(t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function(t, r, n, i) {
                e.push(n ? i.replace(a, "$1") : r || t)
            }), e
        });
    t.exports = o
}, function(t, e, r) {
    var n = r(254),
        i = 500;
    t.exports = function(t) {
        var e = n(t, function(t) {
                return r.size === i && r.clear(), t
            }),
            r = e.cache;
        return e
    }
}, function(t, e, r) {
    var n = r(82),
        i = "Expected a function";

    function a(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
        var r = function() {
            var n = arguments,
                i = e ? e.apply(this, n) : n[0],
                a = r.cache;
            if (a.has(i)) return a.get(i);
            var o = t.apply(this, n);
            return r.cache = a.set(i, o) || a, o
        };
        return r.cache = new(a.Cache || n), r
    }
    a.Cache = n, t.exports = a
}, function(t, e, r) {
    var n = r(256);
    t.exports = function(t) {
        return null == t ? "" : n(t)
    }
}, function(t, e, r) {
    var n = r(47),
        i = r(143),
        a = r(11),
        o = r(67),
        s = 1 / 0,
        l = n ? n.prototype : void 0,
        c = l ? l.toString : void 0;
    t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (a(e)) return i(e, t) + "";
        if (o(e)) return c ? c.call(e) : "";
        var r = e + "";
        return "0" == r && 1 / e == -s ? "-0" : r
    }
}, function(t, e, r) {
    var n = r(258),
        i = r(259);
    t.exports = function(t, e) {
        return null != t && i(t, e, n)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return null != t && e in Object(t)
    }
}, function(t, e, r) {
    var n = r(66),
        i = r(65),
        a = r(11),
        o = r(85),
        s = r(87),
        l = r(48);
    t.exports = function(t, e, r) {
        for (var c = -1, h = (e = n(e, t)).length, u = !1; ++c < h;) {
            var f = l(e[c]);
            if (!(u = null != t && r(t, f))) break;
            t = t[f]
        }
        return u || ++c != h ? u : !!(h = null == t ? 0 : t.length) && s(h) && o(f, h) && (a(t) || i(t))
    }
}, function(t, e, r) {
    var n = r(144),
        i = r(261),
        a = r(93),
        o = r(48);
    t.exports = function(t) {
        return a(t) ? n(o(t)) : i(t)
    }
}, function(t, e, r) {
    var n = r(92);
    t.exports = function(t) {
        return function(e) {
            return n(e, t)
        }
    }
}, function(t, e, r) {
    var n = r(95),
        i = 1 / 0,
        a = 1.7976931348623157e308;
    t.exports = function(t) {
        return t ? (t = n(t)) === i || t === -i ? (t < 0 ? -1 : 1) * a : t == t ? t : 0 : 0 === t ? t : 0
    }
}, function(t, e, r) {
    var n = r(264),
        i = /^\s+/;
    t.exports = function(t) {
        return t ? t.slice(0, n(t) + 1).replace(i, "") : t
    }
}, function(t, e) {
    var r = /\s/;
    t.exports = function(t) {
        for (var e = t.length; e-- && r.test(t.charAt(e)););
        return e
    }
}, function(t, e, r) {
    var n = r(266);
    r(324), r(330), r(341), r(347), r(348), r(349), r(350), r(351), r(352), r(355), r(356), r(357), r(358), t.exports = n
}, function(t, e, r) {
    var n = r(267);
    t.exports = n
}, function(t, e, r) {
    r(268), r(279), r(280), r(155), r(283), r(284), r(286), r(287), r(289), r(290), r(291), r(292), r(293), r(294), r(159), r(296), r(297), r(301), r(302), r(304), r(305), r(306), r(307), r(308), r(309), r(310), r(315), r(316), r(317), r(318), r(319), r(321);
    var n = r(323);
    t.exports = n.Array
}, function(t, e, r) {
    var n = r(1),
        i = r(277);
    n({
        target: "Array",
        stat: !0,
        forced: !r(108)(function(t) {
            Array.from(t)
        })
    }, {
        from: i
    })
}, function(t, e, r) {
    "use strict";
    var n = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        a = i && !n.call({
            1: 2
        }, 1);
    e.f = a ? function(t) {
        var e = i(this, t);
        return !!e && e.enumerable
    } : n
}, function(t, e, r) {
    var n = r(0),
        i = r(15),
        a = r(13),
        o = r(146),
        s = r(33),
        l = r(271),
        c = r(6),
        h = n.TypeError,
        u = c("toPrimitive");
    t.exports = function(t, e) {
        if (!a(t) || o(t)) return t;
        var r, n = s(t, u);
        if (n) {
            if (void 0 === e && (e = "default"), r = i(n, t, e), !a(r) || o(r)) return r;
            throw h("Can't convert object to primitive value")
        }
        return void 0 === e && (e = "number"), l(t, e)
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(15),
        a = r(5),
        o = r(13),
        s = n.TypeError;
    t.exports = function(t, e) {
        var r, n;
        if ("string" === e && a(r = t.toString) && !o(n = i(r, t))) return n;
        if (a(r = t.valueOf) && !o(n = i(r, t))) return n;
        if ("string" !== e && a(r = t.toString) && !o(n = i(r, t))) return n;
        throw s("Can't convert object to primitive value")
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(5),
        a = r(73),
        o = n.WeakMap;
    t.exports = i(o) && /native code/.test(a(o))
}, function(t, e, r) {
    var n = r(17),
        i = r(274),
        a = r(96),
        o = r(18);
    t.exports = function(t, e) {
        for (var r = i(e), s = o.f, l = a.f, c = 0; c < r.length; c++) {
            var h = r[c];
            n(t, h) || s(t, h, l(e, h))
        }
    }
}, function(t, e, r) {
    var n = r(16),
        i = r(2),
        a = r(103),
        o = r(276),
        s = r(12),
        l = i([].concat);
    t.exports = n("Reflect", "ownKeys") || function(t) {
        var e = a.f(s(t)),
            r = o.f;
        return r ? l(e, r(t)) : e
    }
}, function(t, e, r) {
    var n = r(34),
        i = Math.min;
    t.exports = function(t) {
        return t > 0 ? i(n(t), 9007199254740991) : 0
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(22),
        a = r(15),
        o = r(7),
        s = r(278),
        l = r(154),
        c = r(43),
        h = r(4),
        u = r(53),
        f = r(76),
        p = r(77),
        d = n.Array;
    t.exports = function(t) {
        var e = o(t),
            r = c(this),
            n = arguments.length,
            m = n > 1 ? arguments[1] : void 0,
            v = void 0 !== m;
        v && (m = i(m, n > 2 ? arguments[2] : void 0));
        var g, y, E, b, _, x, w = p(e),
            A = 0;
        if (!w || this == d && l(w))
            for (g = h(e), y = r ? new this(g) : d(g); g > A; A++) x = v ? m(e[A], A) : e[A], u(y, A, x);
        else
            for (_ = (b = f(e, w)).next, y = r ? new this : []; !(E = a(_, b)).done; A++) x = v ? s(b, m, [E.value, A], !0) : E.value, u(y, A, x);
        return y.length = A, y
    }
}, function(t, e, r) {
    var n = r(12),
        i = r(153);
    t.exports = function(t, e, r, a) {
        try {
            return a ? e(n(r)[0], r[1]) : e(r)
        } catch (e) {
            i(t, "throw", e)
        }
    }
}, function(t, e, r) {
    r(1)({
        target: "Array",
        stat: !0
    }, {
        isArray: r(35)
    })
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(0),
        a = r(10),
        o = r(43),
        s = r(53),
        l = i.Array;
    n({
        target: "Array",
        stat: !0,
        forced: a(function() {
            function t() {}
            return !(l.of.call(t) instanceof t)
        })
    }, { of: function() {
            for (var t = 0, e = arguments.length, r = new(o(this) ? this : l)(e); e > t;) s(r, t, arguments[t++]);
            return r.length = e, r
        }
    })
}, function(t, e, r) {
    var n = r(20),
        i = r(18),
        a = r(12),
        o = r(24),
        s = r(282);
    t.exports = n ? Object.defineProperties : function(t, e) {
        a(t);
        for (var r, n = o(e), l = s(e), c = l.length, h = 0; c > h;) i.f(t, r = l[h++], n[r]);
        return t
    }
}, function(t, e, r) {
    var n = r(152),
        i = r(105);
    t.exports = Object.keys || function(t) {
        return n(t, i)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(0),
        a = r(10),
        o = r(35),
        s = r(13),
        l = r(7),
        c = r(4),
        h = r(53),
        u = r(44),
        f = r(54),
        p = r(6),
        d = r(31),
        m = p("isConcatSpreadable"),
        v = i.TypeError,
        g = d >= 51 || !a(function() {
            var t = [];
            return t[m] = !1, t.concat()[0] !== t
        }),
        y = f("concat"),
        E = function(t) {
            if (!s(t)) return !1;
            var e = t[m];
            return void 0 !== e ? !!e : o(t)
        };
    n({
        target: "Array",
        proto: !0,
        forced: !g || !y
    }, {
        concat: function(t) {
            var e, r, n, i, a, o = l(this),
                s = u(o, 0),
                f = 0;
            for (e = -1, n = arguments.length; e < n; e++)
                if (a = -1 === e ? o : arguments[e], E(a)) {
                    if (f + (i = c(a)) > 9007199254740991) throw v("Maximum allowed index exceeded");
                    for (r = 0; r < i; r++, f++) r in a && h(s, f, a[r])
                } else {
                    if (f >= 9007199254740991) throw v("Maximum allowed index exceeded");
                    h(s, f++, a)
                }
            return s.length = f, s
        }
    })
}, function(t, e, r) {
    var n = r(1),
        i = r(285),
        a = r(8);
    n({
        target: "Array",
        proto: !0
    }, {
        copyWithin: i
    }), a("copyWithin")
}, function(t, e, r) {
    "use strict";
    var n = r(7),
        i = r(51),
        a = r(4),
        o = Math.min;
    t.exports = [].copyWithin || function(t, e) {
        var r = n(this),
            s = a(r),
            l = i(t, s),
            c = i(e, s),
            h = arguments.length > 2 ? arguments[2] : void 0,
            u = o((void 0 === h ? s : i(h, s)) - c, s - l),
            f = 1;
        for (c < l && l < c + u && (f = -1, c += u - 1, l += u - 1); u-- > 0;) c in r ? r[l] = r[c] : delete r[l], l += f, c += f;
        return r
    }
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(25).every;
    n({
        target: "Array",
        proto: !0,
        forced: !r(26)("every")
    }, {
        every: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, r) {
    var n = r(1),
        i = r(288),
        a = r(8);
    n({
        target: "Array",
        proto: !0
    }, {
        fill: i
    }), a("fill")
}, function(t, e, r) {
    "use strict";
    var n = r(7),
        i = r(51),
        a = r(4);
    t.exports = function(t) {
        for (var e = n(this), r = a(e), o = arguments.length, s = i(o > 1 ? arguments[1] : void 0, r), l = o > 2 ? arguments[2] : void 0, c = void 0 === l ? r : i(l, r); c > s;) e[s++] = t;
        return e
    }
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(25).filter;
    n({
        target: "Array",
        proto: !0,
        forced: !r(54)("filter")
    }, {
        filter: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(25).find,
        a = r(8),
        o = !0;
    "find" in [] && Array(1).find(function() {
        o = !1
    }), n({
        target: "Array",
        proto: !0,
        forced: o
    }, {
        find: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), a("find")
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(25).findIndex,
        a = r(8),
        o = !0;
    "findIndex" in [] && Array(1).findIndex(function() {
        o = !1
    }), n({
        target: "Array",
        proto: !0,
        forced: o
    }, {
        findIndex: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), a("findIndex")
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(158),
        a = r(7),
        o = r(4),
        s = r(34),
        l = r(44);
    n({
        target: "Array",
        proto: !0
    }, {
        flat: function() {
            var t = arguments.length ? arguments[0] : void 0,
                e = a(this),
                r = o(e),
                n = l(e, 0);
            return n.length = i(n, e, e, r, 0, void 0 === t ? 1 : s(t)), n
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(158),
        a = r(21),
        o = r(7),
        s = r(4),
        l = r(44);
    n({
        target: "Array",
        proto: !0
    }, {
        flatMap: function(t) {
            var e, r = o(this),
                n = s(r);
            return a(t), (e = l(r, 0)).length = i(e, r, r, n, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), e
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(295);
    n({
        target: "Array",
        proto: !0,
        forced: [].forEach != i
    }, {
        forEach: i
    })
}, function(t, e, r) {
    "use strict";
    var n = r(25).forEach,
        i = r(26)("forEach");
    t.exports = i ? [].forEach : function(t) {
        return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(2),
        a = r(104).indexOf,
        o = r(26),
        s = i([].indexOf),
        l = !!s && 1 / s([1], 1, -0) < 0,
        c = o("indexOf");
    n({
        target: "Array",
        proto: !0,
        forced: l || !c
    }, {
        indexOf: function(t) {
            var e = arguments.length > 1 ? arguments[1] : void 0;
            return l ? s(this, t, e) || 0 : a(this, t, e)
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(24),
        i = r(8),
        a = r(52),
        o = r(42),
        s = r(109),
        l = o.set,
        c = o.getterFor("Array Iterator");
    t.exports = s(Array, "Array", function(t, e) {
        l(this, {
            type: "Array Iterator",
            target: n(t),
            index: 0,
            kind: e
        })
    }, function() {
        var t = c(this),
            e = t.target,
            r = t.kind,
            n = t.index++;
        return !e || n >= e.length ? (t.target = void 0, {
            value: void 0,
            done: !0
        }) : "keys" == r ? {
            value: n,
            done: !1
        } : "values" == r ? {
            value: e[n],
            done: !1
        } : {
            value: [n, e[n]],
            done: !1
        }
    }, "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries")
}, function(t, e, r) {
    "use strict";
    var n = r(160).IteratorPrototype,
        i = r(36),
        a = r(68),
        o = r(78),
        s = r(52),
        l = function() {
            return this
        };
    t.exports = function(t, e, r) {
        var c = e + " Iterator";
        return t.prototype = i(n, {
            next: a(1, r)
        }), o(t, c, !1, !0), s[c] = l, t
    }
}, function(t, e, r) {
    var n = r(10);
    t.exports = !n(function() {
        function t() {}
        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(5),
        a = n.String,
        o = n.TypeError;
    t.exports = function(t) {
        if ("object" == typeof t || i(t)) return t;
        throw o("Can't set " + a(t) + " as a prototype")
    }
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(2),
        a = r(41),
        o = r(24),
        s = r(26),
        l = i([].join),
        c = a != Object,
        h = s("join", ",");
    n({
        target: "Array",
        proto: !0,
        forced: c || !h
    }, {
        join: function(t) {
            return l(o(this), void 0 === t ? "," : t)
        }
    })
}, function(t, e, r) {
    var n = r(1),
        i = r(303);
    n({
        target: "Array",
        proto: !0,
        forced: i !== [].lastIndexOf
    }, {
        lastIndexOf: i
    })
}, function(t, e, r) {
    "use strict";
    var n = r(112),
        i = r(24),
        a = r(34),
        o = r(4),
        s = r(26),
        l = Math.min,
        c = [].lastIndexOf,
        h = !!c && 1 / [1].lastIndexOf(1, -0) < 0,
        u = s("lastIndexOf"),
        f = h || !u;
    t.exports = f ? function(t) {
        if (h) return n(c, this, arguments) || 0;
        var e = i(this),
            r = o(e),
            s = r - 1;
        for (arguments.length > 1 && (s = l(s, a(arguments[1]))), s < 0 && (s = r + s); s >= 0; s--)
            if (s in e && e[s] === t) return s || 0;
        return -1
    } : c
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(25).map;
    n({
        target: "Array",
        proto: !0,
        forced: !r(54)("map")
    }, {
        map: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(161).left,
        a = r(26),
        o = r(31),
        s = r(55);
    n({
        target: "Array",
        proto: !0,
        forced: !a("reduce") || !s && o > 79 && o < 83
    }, {
        reduce: function(t) {
            var e = arguments.length;
            return i(this, t, e, e > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(161).right,
        a = r(26),
        o = r(31),
        s = r(55);
    n({
        target: "Array",
        proto: !0,
        forced: !a("reduceRight") || !s && o > 79 && o < 83
    }, {
        reduceRight: function(t) {
            return i(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(2),
        a = r(35),
        o = i([].reverse),
        s = [1, 2];
    n({
        target: "Array",
        proto: !0,
        forced: String(s) === String(s.reverse())
    }, {
        reverse: function() {
            return a(this) && (this.length = this.length), o(this)
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(0),
        a = r(35),
        o = r(43),
        s = r(13),
        l = r(51),
        c = r(4),
        h = r(24),
        u = r(53),
        f = r(6),
        p = r(54),
        d = r(79),
        m = p("slice"),
        v = f("species"),
        g = i.Array,
        y = Math.max;
    n({
        target: "Array",
        proto: !0,
        forced: !m
    }, {
        slice: function(t, e) {
            var r, n, i, f = h(this),
                p = c(f),
                m = l(t, p),
                E = l(void 0 === e ? p : e, p);
            if (a(f) && (r = f.constructor, o(r) && (r === g || a(r.prototype)) ? r = void 0 : s(r) && null === (r = r[v]) && (r = void 0), r === g || void 0 === r)) return d(f, m, E);
            for (n = new(void 0 === r ? g : r)(y(E - m, 0)), i = 0; m < E; m++, i++) m in f && u(n, i, f[m]);
            return n.length = i, n
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(25).some;
    n({
        target: "Array",
        proto: !0,
        forced: !r(26)("some")
    }, {
        some: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(2),
        a = r(21),
        o = r(7),
        s = r(4),
        l = r(113),
        c = r(10),
        h = r(311),
        u = r(26),
        f = r(312),
        p = r(313),
        d = r(31),
        m = r(314),
        v = [],
        g = i(v.sort),
        y = i(v.push),
        E = c(function() {
            v.sort(void 0)
        }),
        b = c(function() {
            v.sort(null)
        }),
        _ = u("sort"),
        x = !c(function() {
            if (d) return d < 70;
            if (!(f && f > 3)) {
                if (p) return !0;
                if (m) return m < 603;
                var t, e, r, n, i = "";
                for (t = 65; t < 76; t++) {
                    switch (e = String.fromCharCode(t), t) {
                        case 66:
                        case 69:
                        case 70:
                        case 72:
                            r = 3;
                            break;
                        case 68:
                        case 71:
                            r = 4;
                            break;
                        default:
                            r = 2
                    }
                    for (n = 0; n < 47; n++) v.push({
                        k: e + n,
                        v: r
                    })
                }
                for (v.sort(function(t, e) {
                        return e.v - t.v
                    }), n = 0; n < v.length; n++) e = v[n].k.charAt(0), i.charAt(i.length - 1) !== e && (i += e);
                return "DGBEFHACIJK" !== i
            }
        });
    n({
        target: "Array",
        proto: !0,
        forced: E || !b || !_ || !x
    }, {
        sort: function(t) {
            void 0 !== t && a(t);
            var e = o(this);
            if (x) return void 0 === t ? g(e) : g(e, t);
            var r, n, i = [],
                c = s(e);
            for (n = 0; n < c; n++) n in e && y(i, e[n]);
            for (h(i, function(t) {
                    return function(e, r) {
                        return void 0 === r ? -1 : void 0 === e ? 1 : void 0 !== t ? +t(e, r) || 0 : l(e) > l(r) ? 1 : -1
                    }
                }(t)), r = i.length, n = 0; n < r;) e[n] = i[n++];
            for (; n < c;) delete e[n++];
            return e
        }
    })
}, function(t, e, r) {
    var n = r(79),
        i = Math.floor,
        a = function(t, e) {
            var r = t.length,
                l = i(r / 2);
            return r < 8 ? o(t, e) : s(t, a(n(t, 0, l), e), a(n(t, l), e), e)
        },
        o = function(t, e) {
            for (var r, n, i = t.length, a = 1; a < i;) {
                for (n = a, r = t[a]; n && e(t[n - 1], r) > 0;) t[n] = t[--n];
                n !== a++ && (t[n] = r)
            }
            return t
        },
        s = function(t, e, r, n) {
            for (var i = e.length, a = r.length, o = 0, s = 0; o < i || s < a;) t[o + s] = o < i && s < a ? n(e[o], r[s]) <= 0 ? e[o++] : r[s++] : o < i ? e[o++] : r[s++];
            return t
        };
    t.exports = a
}, function(t, e, r) {
    var n = r(32).match(/firefox\/(\d+)/i);
    t.exports = !!n && +n[1]
}, function(t, e, r) {
    var n = r(32);
    t.exports = /MSIE|Trident/.test(n)
}, function(t, e, r) {
    var n = r(32).match(/AppleWebKit\/(\d+)\./);
    t.exports = !!n && +n[1]
}, function(t, e, r) {
    r(114)("Array")
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(0),
        a = r(51),
        o = r(34),
        s = r(4),
        l = r(7),
        c = r(44),
        h = r(53),
        u = r(54)("splice"),
        f = i.TypeError,
        p = Math.max,
        d = Math.min;
    n({
        target: "Array",
        proto: !0,
        forced: !u
    }, {
        splice: function(t, e) {
            var r, n, i, u, m, v, g = l(this),
                y = s(g),
                E = a(t, y),
                b = arguments.length;
            if (0 === b ? r = n = 0 : 1 === b ? (r = 0, n = y - E) : (r = b - 2, n = d(p(o(e), 0), y - E)), y + r - n > 9007199254740991) throw f("Maximum allowed length exceeded");
            for (i = c(g, n), u = 0; u < n; u++)(m = E + u) in g && h(i, u, g[m]);
            if (i.length = n, r < n) {
                for (u = E; u < y - n; u++) v = u + r, (m = u + n) in g ? g[v] = g[m] : delete g[v];
                for (u = y; u > y - n + r; u--) delete g[u - 1]
            } else if (r > n)
                for (u = y - n; u > E; u--) v = u + r - 1, (m = u + n - 1) in g ? g[v] = g[m] : delete g[v];
            for (u = 0; u < r; u++) g[u + E] = arguments[u + 2];
            return g.length = y - n + r, i
        }
    })
}, function(t, e, r) {
    r(8)("flat")
}, function(t, e, r) {
    r(8)("flatMap")
}, function(t, e, r) {
    var n = r(107),
        i = r(27),
        a = r(320);
    n || i(Object.prototype, "toString", a, {
        unsafe: !0
    })
}, function(t, e, r) {
    "use strict";
    var n = r(107),
        i = r(75);
    t.exports = n ? {}.toString : function() {
        return "[object " + i(this) + "]"
    }
}, function(t, e, r) {
    "use strict";
    var n = r(322).charAt,
        i = r(113),
        a = r(42),
        o = r(109),
        s = a.set,
        l = a.getterFor("String Iterator");
    o(String, "String", function(t) {
        s(this, {
            type: "String Iterator",
            string: i(t),
            index: 0
        })
    }, function() {
        var t, e = l(this),
            r = e.string,
            i = e.index;
        return i >= r.length ? {
            value: void 0,
            done: !0
        } : (t = n(r, i), e.index += t.length, {
            value: t,
            done: !1
        })
    })
}, function(t, e, r) {
    var n = r(2),
        i = r(34),
        a = r(113),
        o = r(97),
        s = n("".charAt),
        l = n("".charCodeAt),
        c = n("".slice),
        h = function(t) {
            return function(e, r) {
                var n, h, u = a(o(e)),
                    f = i(r),
                    p = u.length;
                return f < 0 || f >= p ? t ? "" : void 0 : (n = l(u, f)) < 55296 || n > 56319 || f + 1 === p || (h = l(u, f + 1)) < 56320 || h > 57343 ? t ? s(u, f) : n : t ? c(u, f, f + 2) : h - 56320 + (n - 55296 << 10) + 65536
            }
        };
    t.exports = {
        codeAt: h(!1),
        charAt: h(!0)
    }
}, function(t, e, r) {
    var n = r(0);
    t.exports = n
}, function(t, e, r) {
    "use strict";
    r(325)("Map", function(t) {
        return function() {
            return t(this, arguments.length ? arguments[0] : void 0)
        }
    }, r(329))
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(0),
        a = r(2),
        o = r(106),
        s = r(27),
        l = r(162),
        c = r(115),
        h = r(116),
        u = r(5),
        f = r(13),
        p = r(10),
        d = r(108),
        m = r(78),
        v = r(328);
    t.exports = function(t, e, r) {
        var g = -1 !== t.indexOf("Map"),
            y = -1 !== t.indexOf("Weak"),
            E = g ? "set" : "add",
            b = i[t],
            _ = b && b.prototype,
            x = b,
            w = {},
            A = function(t) {
                var e = a(_[t]);
                s(_, t, "add" == t ? function(t) {
                    return e(this, 0 === t ? 0 : t), this
                } : "delete" == t ? function(t) {
                    return !(y && !f(t)) && e(this, 0 === t ? 0 : t)
                } : "get" == t ? function(t) {
                    return y && !f(t) ? void 0 : e(this, 0 === t ? 0 : t)
                } : "has" == t ? function(t) {
                    return !(y && !f(t)) && e(this, 0 === t ? 0 : t)
                } : function(t, r) {
                    return e(this, 0 === t ? 0 : t, r), this
                })
            };
        if (o(t, !u(b) || !(y || _.forEach && !p(function() {
                (new b).entries().next()
            })))) x = r.getConstructor(e, t, g, E), l.enable();
        else if (o(t, !0)) {
            var S = new x,
                T = S[E](y ? {} : -0, 1) != S,
                I = p(function() {
                    S.has(1)
                }),
                P = d(function(t) {
                    new b(t)
                }),
                C = !y && p(function() {
                    for (var t = new b, e = 5; e--;) t[E](e, e);
                    return !t.has(-0)
                });
            P || ((x = e(function(t, e) {
                h(t, _);
                var r = v(new b, t, x);
                return null != e && c(e, r[E], {
                    that: r,
                    AS_ENTRIES: g
                }), r
            })).prototype = _, _.constructor = x), (I || C) && (A("delete"), A("has"), g && A("get")), (C || T) && A(E), y && _.clear && delete _.clear
        }
        return w[t] = x, n({
            global: !0,
            forced: x != b
        }, w), m(x, t), y || r.setStrong(x, t, g), x
    }
}, function(t, e, r) {
    var n = r(49),
        i = r(24),
        a = r(103).f,
        o = r(79),
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return s && "Window" == n(t) ? function(t) {
            try {
                return a(t)
            } catch (t) {
                return o(s)
            }
        }(t) : a(i(t))
    }
}, function(t, e, r) {
    var n = r(10);
    t.exports = !n(function() {
        return Object.isExtensible(Object.preventExtensions({}))
    })
}, function(t, e, r) {
    var n = r(5),
        i = r(13),
        a = r(111);
    t.exports = function(t, e, r) {
        var o, s;
        return a && n(o = e.constructor) && o !== r && i(s = o.prototype) && s !== r.prototype && a(t, s), t
    }
}, function(t, e, r) {
    "use strict";
    var n = r(18).f,
        i = r(36),
        a = r(117),
        o = r(22),
        s = r(116),
        l = r(115),
        c = r(109),
        h = r(114),
        u = r(20),
        f = r(162).fastKey,
        p = r(42),
        d = p.set,
        m = p.getterFor;
    t.exports = {
        getConstructor: function(t, e, r, c) {
            var h = t(function(t, n) {
                    s(t, p), d(t, {
                        type: e,
                        index: i(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }), u || (t.size = 0), null != n && l(n, t[c], {
                        that: t,
                        AS_ENTRIES: r
                    })
                }),
                p = h.prototype,
                v = m(e),
                g = function(t, e, r) {
                    var n, i, a = v(t),
                        o = y(t, e);
                    return o ? o.value = r : (a.last = o = {
                        index: i = f(e, !0),
                        key: e,
                        value: r,
                        previous: n = a.last,
                        next: void 0,
                        removed: !1
                    }, a.first || (a.first = o), n && (n.next = o), u ? a.size++ : t.size++, "F" !== i && (a.index[i] = o)), t
                },
                y = function(t, e) {
                    var r, n = v(t),
                        i = f(e);
                    if ("F" !== i) return n.index[i];
                    for (r = n.first; r; r = r.next)
                        if (r.key == e) return r
                };
            return a(p, {
                clear: function() {
                    for (var t = v(this), e = t.index, r = t.first; r;) r.removed = !0, r.previous && (r.previous = r.previous.next = void 0), delete e[r.index], r = r.next;
                    t.first = t.last = void 0, u ? t.size = 0 : this.size = 0
                },
                delete: function(t) {
                    var e = v(this),
                        r = y(this, t);
                    if (r) {
                        var n = r.next,
                            i = r.previous;
                        delete e.index[r.index], r.removed = !0, i && (i.next = n), n && (n.previous = i), e.first == r && (e.first = n), e.last == r && (e.last = i), u ? e.size-- : this.size--
                    }
                    return !!r
                },
                forEach: function(t) {
                    for (var e, r = v(this), n = o(t, arguments.length > 1 ? arguments[1] : void 0); e = e ? e.next : r.first;)
                        for (n(e.value, e.key, this); e && e.removed;) e = e.previous
                },
                has: function(t) {
                    return !!y(this, t)
                }
            }), a(p, r ? {
                get: function(t) {
                    var e = y(this, t);
                    return e && e.value
                },
                set: function(t, e) {
                    return g(this, 0 === t ? 0 : t, e)
                }
            } : {
                add: function(t) {
                    return g(this, t = 0 === t ? 0 : t, t)
                }
            }), u && n(p, "size", {
                get: function() {
                    return v(this).size
                }
            }), h
        },
        setStrong: function(t, e, r) {
            var n = e + " Iterator",
                i = m(e),
                a = m(n);
            c(t, e, function(t, e) {
                d(this, {
                    type: n,
                    target: t,
                    state: i(t),
                    kind: e,
                    last: void 0
                })
            }, function() {
                for (var t = a(this), e = t.kind, r = t.last; r && r.removed;) r = r.previous;
                return t.target && (t.last = r = r ? r.next : t.state.first) ? "keys" == e ? {
                    value: r.key,
                    done: !1
                } : "values" == e ? {
                    value: r.value,
                    done: !1
                } : {
                    value: [r.key, r.value],
                    done: !1
                } : (t.target = void 0, {
                    value: void 0,
                    done: !0
                })
            }, r ? "entries" : "values", !r, !0), h(e)
        }
    }
}, function(t, e, r) {
    "use strict";
    var n, i, a, o, s = r(1),
        l = r(50),
        c = r(0),
        h = r(16),
        u = r(15),
        f = r(331),
        p = r(27),
        d = r(117),
        m = r(111),
        v = r(78),
        g = r(114),
        y = r(21),
        E = r(5),
        b = r(13),
        _ = r(116),
        x = r(73),
        w = r(115),
        A = r(108),
        S = r(332),
        T = r(163).set,
        I = r(334),
        P = r(337),
        C = r(338),
        D = r(165),
        M = r(339),
        O = r(42),
        k = r(106),
        R = r(6),
        F = r(340),
        L = r(55),
        N = r(31),
        V = R("species"),
        B = O.get,
        G = O.set,
        j = O.getterFor("Promise"),
        z = f && f.prototype,
        H = f,
        W = z,
        X = c.TypeError,
        U = c.document,
        q = c.process,
        Y = D.f,
        K = Y,
        $ = !!(U && U.createEvent && c.dispatchEvent),
        Q = E(c.PromiseRejectionEvent),
        Z = !1,
        J = k("Promise", function() {
            var t = x(H),
                e = t !== String(H);
            if (!e && 66 === N) return !0;
            if (l && !W.finally) return !0;
            if (N >= 51 && /native code/.test(t)) return !1;
            var r = new H(function(t) {
                    t(1)
                }),
                n = function(t) {
                    t(function() {}, function() {})
                };
            return (r.constructor = {})[V] = n, !(Z = r.then(function() {}) instanceof n) || !e && F && !Q
        }),
        tt = J || !A(function(t) {
            H.all(t).catch(function() {})
        }),
        et = function(t) {
            var e;
            return !(!b(t) || !E(e = t.then)) && e
        },
        rt = function(t, e) {
            if (!t.notified) {
                t.notified = !0;
                var r = t.reactions;
                I(function() {
                    for (var n = t.value, i = 1 == t.state, a = 0; r.length > a;) {
                        var o, s, l, c = r[a++],
                            h = i ? c.ok : c.fail,
                            f = c.resolve,
                            p = c.reject,
                            d = c.domain;
                        try {
                            h ? (i || (2 === t.rejection && ot(t), t.rejection = 1), !0 === h ? o = n : (d && d.enter(), o = h(n), d && (d.exit(), l = !0)), o === c.promise ? p(X("Promise-chain cycle")) : (s = et(o)) ? u(s, o, f, p) : f(o)) : p(n)
                        } catch (t) {
                            d && !l && d.exit(), p(t)
                        }
                    }
                    t.reactions = [], t.notified = !1, e && !t.rejection && it(t)
                })
            }
        },
        nt = function(t, e, r) {
            var n, i;
            $ ? ((n = U.createEvent("Event")).promise = e, n.reason = r, n.initEvent(t, !1, !0), c.dispatchEvent(n)) : n = {
                promise: e,
                reason: r
            }, !Q && (i = c["on" + t]) ? i(n) : "unhandledrejection" === t && C("Unhandled promise rejection", r)
        },
        it = function(t) {
            u(T, c, function() {
                var e, r = t.facade,
                    n = t.value;
                if (at(t) && (e = M(function() {
                        L ? q.emit("unhandledRejection", n, r) : nt("unhandledrejection", r, n)
                    }), t.rejection = L || at(t) ? 2 : 1, e.error)) throw e.value
            })
        },
        at = function(t) {
            return 1 !== t.rejection && !t.parent
        },
        ot = function(t) {
            u(T, c, function() {
                var e = t.facade;
                L ? q.emit("rejectionHandled", e) : nt("rejectionhandled", e, t.value)
            })
        },
        st = function(t, e, r) {
            return function(n) {
                t(e, n, r)
            }
        },
        lt = function(t, e, r) {
            t.done || (t.done = !0, r && (t = r), t.value = e, t.state = 2, rt(t, !0))
        },
        ct = function(t, e, r) {
            if (!t.done) {
                t.done = !0, r && (t = r);
                try {
                    if (t.facade === e) throw X("Promise can't be resolved itself");
                    var n = et(e);
                    n ? I(function() {
                        var r = {
                            done: !1
                        };
                        try {
                            u(n, e, st(ct, r, t), st(lt, r, t))
                        } catch (e) {
                            lt(r, e, t)
                        }
                    }) : (t.value = e, t.state = 1, rt(t, !1))
                } catch (e) {
                    lt({
                        done: !1
                    }, e, t)
                }
            }
        };
    if (J && (W = (H = function(t) {
            _(this, W), y(t), u(n, this);
            var e = B(this);
            try {
                t(st(ct, e), st(lt, e))
            } catch (t) {
                lt(e, t)
            }
        }).prototype, (n = function(t) {
            G(this, {
                type: "Promise",
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: void 0
            })
        }).prototype = d(W, {
            then: function(t, e) {
                var r = j(this),
                    n = r.reactions,
                    i = Y(S(this, H));
                return i.ok = !E(t) || t, i.fail = E(e) && e, i.domain = L ? q.domain : void 0, r.parent = !0, n[n.length] = i, 0 != r.state && rt(r, !1), i.promise
            },
            catch: function(t) {
                return this.then(void 0, t)
            }
        }), i = function() {
            var t = new n,
                e = B(t);
            this.promise = t, this.resolve = st(ct, e), this.reject = st(lt, e)
        }, D.f = Y = function(t) {
            return t === H || t === a ? new i(t) : K(t)
        }, !l && E(f) && z !== Object.prototype)) {
        o = z.then, Z || (p(z, "then", function(t, e) {
            var r = this;
            return new H(function(t, e) {
                u(o, r, t, e)
            }).then(t, e)
        }, {
            unsafe: !0
        }), p(z, "catch", W.catch, {
            unsafe: !0
        }));
        try {
            delete z.constructor
        } catch (t) {}
        m && m(z, W)
    }
    s({
        global: !0,
        wrap: !0,
        forced: J
    }, {
        Promise: H
    }), v(H, "Promise", !1, !0), g("Promise"), a = h("Promise"), s({
        target: "Promise",
        stat: !0,
        forced: J
    }, {
        reject: function(t) {
            var e = Y(this);
            return u(e.reject, void 0, t), e.promise
        }
    }), s({
        target: "Promise",
        stat: !0,
        forced: l || J
    }, {
        resolve: function(t) {
            return P(l && this === a ? H : this, t)
        }
    }), s({
        target: "Promise",
        stat: !0,
        forced: tt
    }, {
        all: function(t) {
            var e = this,
                r = Y(e),
                n = r.resolve,
                i = r.reject,
                a = M(function() {
                    var r = y(e.resolve),
                        a = [],
                        o = 0,
                        s = 1;
                    w(t, function(t) {
                        var l = o++,
                            c = !1;
                        s++, u(r, e, t).then(function(t) {
                            c || (c = !0, a[l] = t, --s || n(a))
                        }, i)
                    }), --s || n(a)
                });
            return a.error && i(a.value), r.promise
        },
        race: function(t) {
            var e = this,
                r = Y(e),
                n = r.reject,
                i = M(function() {
                    var i = y(e.resolve);
                    w(t, function(t) {
                        u(i, e, t).then(r.resolve, n)
                    })
                });
            return i.error && n(i.value), r.promise
        }
    })
}, function(t, e, r) {
    var n = r(0);
    t.exports = n.Promise
}, function(t, e, r) {
    var n = r(12),
        i = r(333),
        a = r(6)("species");
    t.exports = function(t, e) {
        var r, o = n(t).constructor;
        return void 0 === o || null == (r = n(o)[a]) ? e : i(r)
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(43),
        a = r(70),
        o = n.TypeError;
    t.exports = function(t) {
        if (i(t)) return t;
        throw o(a(t) + " is not a constructor")
    }
}, function(t, e, r) {
    var n, i, a, o, s, l, c, h, u = r(0),
        f = r(22),
        p = r(96).f,
        d = r(163).set,
        m = r(164),
        v = r(335),
        g = r(336),
        y = r(55),
        E = u.MutationObserver || u.WebKitMutationObserver,
        b = u.document,
        _ = u.process,
        x = u.Promise,
        w = p(u, "queueMicrotask"),
        A = w && w.value;
    A || (n = function() {
        var t, e;
        for (y && (t = _.domain) && t.exit(); i;) {
            e = i.fn, i = i.next;
            try {
                e()
            } catch (t) {
                throw i ? o() : a = void 0, t
            }
        }
        a = void 0, t && t.enter()
    }, m || y || g || !E || !b ? !v && x && x.resolve ? ((c = x.resolve(void 0)).constructor = x, h = f(c.then, c), o = function() {
        h(n)
    }) : y ? o = function() {
        _.nextTick(n)
    } : (d = f(d, u), o = function() {
        d(n)
    }) : (s = !0, l = b.createTextNode(""), new E(n).observe(l, {
        characterData: !0
    }), o = function() {
        l.data = s = !s
    })), t.exports = A || function(t) {
        var e = {
            fn: t,
            next: void 0
        };
        a && (a.next = e), i || (i = e, o()), a = e
    }
}, function(t, e, r) {
    var n = r(32),
        i = r(0);
    t.exports = /ipad|iphone|ipod/i.test(n) && void 0 !== i.Pebble
}, function(t, e, r) {
    var n = r(32);
    t.exports = /web0s(?!.*chrome)/i.test(n)
}, function(t, e, r) {
    var n = r(12),
        i = r(13),
        a = r(165);
    t.exports = function(t, e) {
        if (n(t), i(e) && e.constructor === t) return e;
        var r = a.f(t);
        return (0, r.resolve)(e), r.promise
    }
}, function(t, e, r) {
    var n = r(0);
    t.exports = function(t, e) {
        var r = n.console;
        r && r.error && (1 == arguments.length ? r.error(t) : r.error(t, e))
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return {
                error: !1,
                value: t()
            }
        } catch (t) {
            return {
                error: !0,
                value: t
            }
        }
    }
}, function(t, e) {
    t.exports = "object" == typeof window
}, function(t, e, r) {
    r(1)({
        target: "Array",
        stat: !0
    }, {
        fromAsync: r(342)
    })
}, function(t, e, r) {
    "use strict";
    var n = r(22),
        i = r(7),
        a = r(43),
        o = r(343),
        s = r(76),
        l = r(77),
        c = r(33),
        h = r(345),
        u = r(16),
        f = r(6),
        p = r(166),
        d = r(346).toArray,
        m = f("asyncIterator"),
        v = h("Array").values;
    t.exports = function(t) {
        var e = this,
            r = arguments.length,
            h = r > 1 ? arguments[1] : void 0,
            f = r > 2 ? arguments[2] : void 0;
        return new(u("Promise"))(function(r) {
            var u = i(t);
            void 0 !== h && (h = n(h, f));
            var g = c(u, m),
                y = g ? void 0 : l(u) || v,
                E = a(e) ? new e : [],
                b = g ? o(u, g) : new p(s(u, y));
            r(d(b, h, E))
        })
    }
}, function(t, e, r) {
    var n = r(15),
        i = r(166),
        a = r(12),
        o = r(76),
        s = r(33),
        l = r(6)("asyncIterator");
    t.exports = function(t, e) {
        var r = arguments.length < 2 ? s(t, l) : e;
        return r ? a(n(r, t)) : new i(o(t))
    }
}, function(t, e, r) {
    var n, i, a = r(0),
        o = r(71),
        s = r(5),
        l = r(36),
        c = r(110),
        h = r(27),
        u = r(6),
        f = r(50),
        p = u("asyncIterator"),
        d = a.AsyncIterator,
        m = o.AsyncIteratorPrototype;
    if (m) n = m;
    else if (s(d)) n = d.prototype;
    else if (o.USE_FUNCTION_CONSTRUCTOR || a.USE_FUNCTION_CONSTRUCTOR) try {
        i = c(c(c(Function("return async function*(){}()")()))), c(i) === Object.prototype && (n = i)
    } catch (t) {}
    n ? f && (n = l(n)) : n = {}, s(n[p]) || h(n, p, function() {
        return this
    }), t.exports = n
}, function(t, e, r) {
    var n = r(0);
    t.exports = function(t) {
        return n[t].prototype
    }
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(15),
        a = r(21),
        o = r(12),
        s = r(16),
        l = r(33),
        c = n.TypeError,
        h = function(t) {
            var e = 0 == t,
                r = 1 == t,
                n = 2 == t,
                h = 3 == t;
            return function(t, u, f) {
                o(t);
                var p = s("Promise"),
                    d = a(t.next),
                    m = 0,
                    v = void 0 !== u;
                return !v && e || a(u), new p(function(a, s) {
                    var g = function(e, r) {
                            try {
                                var n = l(t, "return");
                                if (n) return p.resolve(i(n, t)).then(function() {
                                    e(r)
                                }, function(t) {
                                    s(t)
                                })
                            } catch (t) {
                                return s(t)
                            }
                            e(r)
                        },
                        y = function(t) {
                            g(s, t)
                        },
                        E = function() {
                            try {
                                if (e && m > 9007199254740991 && v) throw c("The allowed number of iterations has been exceeded");
                                p.resolve(o(i(d, t))).then(function(t) {
                                    try {
                                        if (o(t).done) e ? (f.length = m, a(f)) : a(!h && (n || void 0));
                                        else {
                                            var i = t.value;
                                            v ? p.resolve(e ? u(i, m) : u(i)).then(function(t) {
                                                r ? E() : n ? t ? E() : g(a, !1) : e ? (f[m++] = t, E()) : t ? g(a, h || i) : E()
                                            }, y) : (f[m++] = i, E())
                                        }
                                    } catch (t) {
                                        y(t)
                                    }
                                }, y)
                            } catch (t) {
                                y(t)
                            }
                        };
                    E()
                })
            }
        };
    t.exports = {
        toArray: h(0),
        forEach: h(1),
        every: h(2),
        some: h(3),
        find: h(4)
    }
}, function(t, e, r) {
    r(155)
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(25).filterReject,
        a = r(8);
    n({
        target: "Array",
        proto: !0
    }, {
        filterOut: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), a("filterOut")
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(25).filterReject,
        a = r(8);
    n({
        target: "Array",
        proto: !0
    }, {
        filterReject: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), a("filterReject")
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(167).findLast,
        a = r(8);
    n({
        target: "Array",
        proto: !0
    }, {
        findLast: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), a("findLast")
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(167).findLastIndex,
        a = r(8);
    n({
        target: "Array",
        proto: !0
    }, {
        findLastIndex: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), a("findLastIndex")
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(353),
        a = r(157),
        o = r(8);
    n({
        target: "Array",
        proto: !0
    }, {
        groupBy: function(t) {
            var e = arguments.length > 1 ? arguments[1] : void 0;
            return i(this, t, e, a)
        }
    }), o("groupBy")
}, function(t, e, r) {
    var n = r(0),
        i = r(22),
        a = r(2),
        o = r(41),
        s = r(7),
        l = r(69),
        c = r(4),
        h = r(36),
        u = r(354),
        f = n.Array,
        p = a([].push);
    t.exports = function(t, e, r, n) {
        for (var a, d, m, v = s(t), g = o(v), y = i(e, r), E = h(null), b = c(g), _ = 0; b > _; _++) m = g[_], (d = l(y(m, _, v))) in E ? p(E[d], m) : E[d] = [m];
        if (n && (a = n(v)) !== f)
            for (d in E) E[d] = u(a, E[d]);
        return E
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var r = 0, n = e.length, i = new t(n); n > r;) i[r] = e[r++];
        return i
    }
}, function(t, e, r) {
    var n = r(1),
        i = r(35),
        a = Object.isFrozen,
        o = function(t, e) {
            if (!a || !i(t) || !a(t)) return !1;
            for (var r, n = 0, o = t.length; n < o;)
                if (!("string" == typeof(r = t[n++]) || e && void 0 === r)) return !1;
            return 0 !== o
        };
    n({
        target: "Array",
        stat: !0
    }, {
        isTemplateObject: function(t) {
            if (!o(t, !0)) return !1;
            var e = t.raw;
            return !(e.length !== t.length || !o(e, !1))
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(20),
        i = r(8),
        a = r(7),
        o = r(4),
        s = r(18).f;
    !n || "lastItem" in [] || (s(Array.prototype, "lastItem", {
        configurable: !0,
        get: function() {
            var t = a(this),
                e = o(t);
            return 0 == e ? void 0 : t[e - 1]
        },
        set: function(t) {
            var e = a(this),
                r = o(e);
            return e[0 == r ? 0 : r - 1] = t
        }
    }), i("lastItem"))
}, function(t, e, r) {
    "use strict";
    var n = r(20),
        i = r(8),
        a = r(7),
        o = r(4),
        s = r(18).f;
    !n || "lastIndex" in [] || (s(Array.prototype, "lastIndex", {
        configurable: !0,
        get: function() {
            var t = a(this),
                e = o(t);
            return 0 == e ? 0 : e - 1
        }
    }), i("lastIndex"))
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(8);
    n({
        target: "Array",
        proto: !0
    }, {
        uniqueBy: r(359)
    }), i("uniqueBy")
}, function(t, e, r) {
    "use strict";
    var n = r(16),
        i = r(2),
        a = r(21),
        o = r(4),
        s = r(7),
        l = r(44),
        c = n("Map"),
        h = c.prototype,
        u = i(h.forEach),
        f = i(h.has),
        p = i(h.set),
        d = i([].push);
    t.exports = function(t) {
        var e, r, n, i = s(this),
            h = o(i),
            m = l(i, 0),
            v = new c,
            g = null != t ? a(t) : function(t) {
                return t
            };
        for (e = 0; e < h; e++) n = g(r = i[e]), f(v, n) || p(v, n, r);
        return u(v, function(t) {
            d(m, t)
        }), m
    }
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__, root, factory;
    "undefined" != typeof navigator && (root = window || {}, factory = function(window) {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg",
            locationHref = "",
            initialDefaultFrame = -999999,
            subframeEnabled = !0,
            idPrefix = "",
            expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            cachedColors = {},
            bmRnd, bmPow = Math.pow,
            bmSqrt = Math.sqrt,
            bmFloor = Math.floor,
            bmMax = Math.max,
            bmMin = Math.min,
            BMMath = {};

        function ProjectInterface() {
            return {}
        }! function() {
            var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                r = e.length;
            for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]]
        }(), BMMath.random = Math.random, BMMath.abs = function(t) {
            if ("object" == typeof t && t.length) {
                var e, r = createSizedArray(t.length),
                    n = t.length;
                for (e = 0; e < n; e += 1) r[e] = Math.abs(t[e]);
                return r
            }
            return Math.abs(t)
        };
        var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = .5519;

        function roundValues(t) {
            bmRnd = t ? Math.round : function(t) {
                return t
            }
        }

        function styleDiv(t) {
            t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(t, e, r, n) {
            this.type = t, this.currentTime = e, this.totalTime = r, this.direction = n < 0 ? -1 : 1
        }

        function BMCompleteEvent(t, e) {
            this.type = t, this.direction = e < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(t, e, r, n) {
            this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = n < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(t, e, r) {
            this.type = t, this.firstFrame = e, this.totalFrames = r
        }

        function BMDestroyEvent(t, e) {
            this.type = t, this.target = e
        }

        function BMRenderFrameErrorEvent(t, e) {
            this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
        }

        function BMConfigErrorEvent(t) {
            this.type = "configError", this.nativeError = t
        }

        function BMAnimationConfigErrorEvent(t, e) {
            this.type = t, this.nativeError = e
        }
        roundValues(!1);
        var createElementID = (F = 0, function() {
                return idPrefix + "__lottie_element_" + (F += 1)
            }),
            F;

        function HSVtoRGB(t, e, r) {
            var n, i, a, o, s, l, c, h;
            switch (l = r * (1 - e), c = r * (1 - (s = 6 * t - (o = Math.floor(6 * t))) * e), h = r * (1 - (1 - s) * e), o % 6) {
                case 0:
                    n = r, i = h, a = l;
                    break;
                case 1:
                    n = c, i = r, a = l;
                    break;
                case 2:
                    n = l, i = r, a = h;
                    break;
                case 3:
                    n = l, i = c, a = r;
                    break;
                case 4:
                    n = h, i = l, a = r;
                    break;
                case 5:
                    n = r, i = l, a = c
            }
            return [n, i, a]
        }

        function RGBtoHSV(t, e, r) {
            var n, i = Math.max(t, e, r),
                a = Math.min(t, e, r),
                o = i - a,
                s = 0 === i ? 0 : o / i,
                l = i / 255;
            switch (i) {
                case a:
                    n = 0;
                    break;
                case t:
                    n = e - r + o * (e < r ? 6 : 0), n /= 6 * o;
                    break;
                case e:
                    n = r - t + 2 * o, n /= 6 * o;
                    break;
                case r:
                    n = t - e + 4 * o, n /= 6 * o
            }
            return [n, s, l]
        }

        function addSaturationToRGB(t, e) {
            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return r[1] += e, 1 < r[1] ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addBrightnessToRGB(t, e) {
            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return r[2] += e, 1 < r[2] ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addHueToRGB(t, e) {
            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return r[0] += e / 360, 1 < r[0] ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
        }
        var rgbToHex = function() {
            var t, e, r = [];
            for (t = 0; t < 256; t += 1) e = t.toString(16), r[t] = 1 === e.length ? "0" + e : e;
            return function(t, e, n) {
                return t < 0 && (t = 0), e < 0 && (e = 0), n < 0 && (n = 0), "#" + r[t] + r[e] + r[n]
            }
        }();

        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function(t, e) {
                if (this._cbs[t])
                    for (var r = this._cbs[t], n = 0; n < r.length; n += 1) r[n](e)
            },
            addEventListener: function(t, e) {
                return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                    function() {
                        this.removeEventListener(t, e)
                    }.bind(this)
            },
            removeEventListener: function(t, e) {
                if (e) {
                    if (this._cbs[t]) {
                        for (var r = 0, n = this._cbs[t].length; r < n;) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, n -= 1), r += 1;
                        this._cbs[t].length || (this._cbs[t] = null)
                    }
                } else this._cbs[t] = null
            }
        };
        var createTypedArray = function() {
            function t(t, e) {
                var r, n = 0,
                    i = [];
                switch (t) {
                    case "int16":
                    case "uint8c":
                        r = 1;
                        break;
                    default:
                        r = 1.1
                }
                for (n = 0; n < e; n += 1) i.push(r);
                return i
            }
            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, r) {
                return "float32" === e ? new Float32Array(r) : "int16" === e ? new Int16Array(r) : "uint8c" === e ? new Uint8ClampedArray(r) : t(e, r)
            } : t
        }();

        function createSizedArray(t) {
            return Array.apply(null, {
                length: t
            })
        }

        function createNS(t) {
            return document.createElementNS(svgNS, t)
        }

        function createTag(t) {
            return document.createElement(t)
        }

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
            addDynamicProperty: function(t) {
                -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
            },
            iterateDynamicProperties: function() {
                var t;
                this._mdf = !1;
                var e = this.dynamicProperties.length;
                for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
            },
            initDynamicPropertyContainer: function(t) {
                this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
            }
        };
        var getBlendMode = (Oa = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity"
            }, function(t) {
                return Oa[t] || ""
            }),
            Oa, lineCapEnum = {
                1: "butt",
                2: "round",
                3: "square"
            },
            lineJoinEnum = {
                1: "miter",
                2: "round",
                3: "bevel"
            },
            Matrix = function() {
                var t = Math.cos,
                    e = Math.sin,
                    r = Math.tan,
                    n = Math.round;

                function i() {
                    return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                }

                function a(r) {
                    if (0 === r) return this;
                    var n = t(r),
                        i = e(r);
                    return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function o(r) {
                    if (0 === r) return this;
                    var n = t(r),
                        i = e(r);
                    return this._t(1, 0, 0, 0, 0, n, -i, 0, 0, i, n, 0, 0, 0, 0, 1)
                }

                function s(r) {
                    if (0 === r) return this;
                    var n = t(r),
                        i = e(r);
                    return this._t(n, 0, i, 0, 0, 1, 0, 0, -i, 0, n, 0, 0, 0, 0, 1)
                }

                function l(r) {
                    if (0 === r) return this;
                    var n = t(r),
                        i = e(r);
                    return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function c(t, e) {
                    return this._t(1, e, t, 1, 0, 0)
                }

                function h(t, e) {
                    return this.shear(r(t), r(e))
                }

                function u(n, i) {
                    var a = t(i),
                        o = e(i);
                    return this._t(a, o, 0, 0, -o, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(n), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -o, 0, 0, o, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }

                function f(t, e, r) {
                    return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
                }

                function p(t, e, r, n, i, a, o, s, l, c, h, u, f, p, d, m) {
                    return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = n, this.props[4] = i, this.props[5] = a, this.props[6] = o, this.props[7] = s, this.props[8] = l, this.props[9] = c, this.props[10] = h, this.props[11] = u, this.props[12] = f, this.props[13] = p, this.props[14] = d, this.props[15] = m, this
                }

                function d(t, e, r) {
                    return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
                }

                function m(t, e, r, n, i, a, o, s, l, c, h, u, f, p, d, m) {
                    var v = this.props;
                    if (1 === t && 0 === e && 0 === r && 0 === n && 0 === i && 1 === a && 0 === o && 0 === s && 0 === l && 0 === c && 1 === h && 0 === u) return v[12] = v[12] * t + v[15] * f, v[13] = v[13] * a + v[15] * p, v[14] = v[14] * h + v[15] * d, v[15] *= m, this._identityCalculated = !1, this;
                    var g = v[0],
                        y = v[1],
                        E = v[2],
                        b = v[3],
                        _ = v[4],
                        x = v[5],
                        w = v[6],
                        A = v[7],
                        S = v[8],
                        T = v[9],
                        I = v[10],
                        P = v[11],
                        C = v[12],
                        D = v[13],
                        M = v[14],
                        O = v[15];
                    return v[0] = g * t + y * i + E * l + b * f, v[1] = g * e + y * a + E * c + b * p, v[2] = g * r + y * o + E * h + b * d, v[3] = g * n + y * s + E * u + b * m, v[4] = _ * t + x * i + w * l + A * f, v[5] = _ * e + x * a + w * c + A * p, v[6] = _ * r + x * o + w * h + A * d, v[7] = _ * n + x * s + w * u + A * m, v[8] = S * t + T * i + I * l + P * f, v[9] = S * e + T * a + I * c + P * p, v[10] = S * r + T * o + I * h + P * d, v[11] = S * n + T * s + I * u + P * m, v[12] = C * t + D * i + M * l + O * f, v[13] = C * e + D * a + M * c + O * p, v[14] = C * r + D * o + M * h + O * d, v[15] = C * n + D * s + M * u + O * m, this._identityCalculated = !1, this
                }

                function v() {
                    return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                }

                function g(t) {
                    for (var e = 0; e < 16;) {
                        if (t.props[e] !== this.props[e]) return !1;
                        e += 1
                    }
                    return !0
                }

                function y(t) {
                    var e;
                    for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                    return t
                }

                function E(t) {
                    var e;
                    for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                }

                function b(t, e, r) {
                    return {
                        x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                        y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                        z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                    }
                }

                function _(t, e, r) {
                    return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
                }

                function x(t, e, r) {
                    return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
                }

                function w(t, e, r) {
                    return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                }

                function A() {
                    var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                        e = this.props[5] / t,
                        r = -this.props[1] / t,
                        n = -this.props[4] / t,
                        i = this.props[0] / t,
                        a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                        o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                        s = new Matrix;
                    return s.props[0] = e, s.props[1] = r, s.props[4] = n, s.props[5] = i, s.props[12] = a, s.props[13] = o, s
                }

                function S(t) {
                    return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                }

                function T(t) {
                    var e, r = t.length,
                        n = [];
                    for (e = 0; e < r; e += 1) n[e] = S(t[e]);
                    return n
                }

                function I(t, e, r) {
                    var n = createTypedArray("float32", 6);
                    if (this.isIdentity()) n[0] = t[0], n[1] = t[1], n[2] = e[0], n[3] = e[1], n[4] = r[0], n[5] = r[1];
                    else {
                        var i = this.props[0],
                            a = this.props[1],
                            o = this.props[4],
                            s = this.props[5],
                            l = this.props[12],
                            c = this.props[13];
                        n[0] = t[0] * i + t[1] * o + l, n[1] = t[0] * a + t[1] * s + c, n[2] = e[0] * i + e[1] * o + l, n[3] = e[0] * a + e[1] * s + c, n[4] = r[0] * i + r[1] * o + l, n[5] = r[0] * a + r[1] * s + c
                    }
                    return n
                }

                function P(t, e, r) {
                    return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
                }

                function C(t, e) {
                    if (this.isIdentity()) return t + "," + e;
                    var r = this.props;
                    return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
                }

                function D() {
                    for (var t = 0, e = this.props, r = "matrix3d("; t < 16;) r += n(1e4 * e[t]) / 1e4, r += 15 === t ? ")" : ",", t += 1;
                    return r
                }

                function M(t) {
                    return t < 1e-6 && 0 < t || -1e-6 < t && t < 0 ? n(1e4 * t) / 1e4 : t
                }

                function O() {
                    var t = this.props;
                    return "matrix(" + M(t[0]) + "," + M(t[1]) + "," + M(t[4]) + "," + M(t[5]) + "," + M(t[12]) + "," + M(t[13]) + ")"
                }
                return function() {
                    this.reset = i, this.rotate = a, this.rotateX = o, this.rotateY = s, this.rotateZ = l, this.skew = h, this.skewFromAxis = u, this.shear = c, this.scale = f, this.setTransform = p, this.translate = d, this.transform = m, this.applyToPoint = b, this.applyToX = _, this.applyToY = x, this.applyToZ = w, this.applyToPointArray = P, this.applyToTriplePoints = I, this.applyToPointStringified = C, this.toCSS = D, this.to2dCSS = O, this.clone = y, this.cloneFromProps = E, this.equals = g, this.inversePoints = T, this.inversePoint = S, this.getInverseMatrix = A, this._t = this.transform, this.isIdentity = v, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                }
            }();
        ! function(t, e) {
            var r, n = this,
                i = 256,
                a = "random",
                o = e.pow(i, 6),
                s = e.pow(2, 52),
                l = 2 * s,
                c = i - 1;

            function h(t) {
                var e, r = t.length,
                    n = this,
                    a = 0,
                    o = n.i = n.j = 0,
                    s = n.S = [];
                for (r || (t = [r++]); a < i;) s[a] = a++;
                for (a = 0; a < i; a++) s[a] = s[o = c & o + t[a % r] + (e = s[a])], s[o] = e;
                n.g = function(t) {
                    for (var e, r = 0, a = n.i, o = n.j, s = n.S; t--;) e = s[a = c & a + 1], r = r * i + s[c & (s[a] = s[o = c & o + e]) + (s[o] = e)];
                    return n.i = a, n.j = o, r
                }
            }

            function u(t, e) {
                return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
            }

            function f(t, e) {
                for (var r, n = t + "", i = 0; i < n.length;) e[c & i] = c & (r ^= 19 * e[c & i]) + n.charCodeAt(i++);
                return p(e)
            }

            function p(t) {
                return String.fromCharCode.apply(0, t)
            }
            e["seed" + a] = function(c, d, m) {
                var v = [],
                    g = f(function t(e, r) {
                        var n, i = [],
                            a = typeof e;
                        if (r && "object" == a)
                            for (n in e) try {
                                i.push(t(e[n], r - 1))
                            } catch (t) {}
                        return i.length ? i : "string" == a ? e : e + "\0"
                    }((d = !0 === d ? {
                        entropy: !0
                    } : d || {}).entropy ? [c, p(t)] : null === c ? function() {
                        try {
                            r;
                            var e = new Uint8Array(i);
                            return (n.crypto || n.msCrypto).getRandomValues(e), p(e)
                        } catch (e) {
                            var a = n.navigator,
                                o = a && a.plugins;
                            return [+new Date, n, o, n.screen, p(t)]
                        }
                    }() : c, 3), v),
                    y = new h(v),
                    E = function() {
                        for (var t = y.g(6), e = o, r = 0; t < s;) t = (t + r) * i, e *= i, r = y.g(1);
                        for (; l <= t;) t /= 2, e /= 2, r >>>= 1;
                        return (t + r) / e
                    };
                return E.int32 = function() {
                    return 0 | y.g(4)
                }, E.quick = function() {
                    return y.g(4) / 4294967296
                }, E.double = E, f(p(y.S), t), (d.pass || m || function(t, r, n, i) {
                    return i && (i.S && u(i, y), t.state = function() {
                        return u(y, {})
                    }), n ? (e[a] = t, r) : t
                })(E, g, "global" in d ? d.global : this == e, d.state)
            }, f(e.random(), t)
        }([], BMMath);
        var BezierFactory = function() {
            var t = {
                    getBezierEasing: function(t, r, n, i, a) {
                        var o = a || ("bez_" + t + "_" + r + "_" + n + "_" + i).replace(/\./g, "p");
                        if (e[o]) return e[o];
                        var s = new h([t, r, n, i]);
                        return e[o] = s
                    }
                },
                e = {},
                r = 11,
                n = 1 / (r - 1),
                i = "function" == typeof Float32Array;

            function a(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function o(t, e) {
                return 3 * e - 6 * t
            }

            function s(t) {
                return 3 * t
            }

            function l(t, e, r) {
                return ((a(e, r) * t + o(e, r)) * t + s(e)) * t
            }

            function c(t, e, r) {
                return 3 * a(e, r) * t * t + 2 * o(e, r) * t + s(e)
            }

            function h(t) {
                this._p = t, this._mSampleValues = i ? new Float32Array(r) : new Array(r), this._precomputed = !1, this.get = this.get.bind(this)
            }
            return h.prototype = {
                get: function(t) {
                    var e = this._p[0],
                        r = this._p[1],
                        n = this._p[2],
                        i = this._p[3];
                    return this._precomputed || this._precompute(), e === r && n === i ? t : 0 === t ? 0 : 1 === t ? 1 : l(this._getTForX(t), r, i)
                },
                _precompute: function() {
                    var t = this._p[0],
                        e = this._p[1],
                        r = this._p[2],
                        n = this._p[3];
                    this._precomputed = !0, t === e && r === n || this._calcSampleValues()
                },
                _calcSampleValues: function() {
                    for (var t = this._p[0], e = this._p[2], i = 0; i < r; ++i) this._mSampleValues[i] = l(i * n, t, e)
                },
                _getTForX: function(t) {
                    for (var e = this._p[0], i = this._p[2], a = this._mSampleValues, o = 0, s = 1, h = r - 1; s !== h && a[s] <= t; ++s) o += n;
                    var u = o + (t - a[--s]) / (a[s + 1] - a[s]) * n,
                        f = c(u, e, i);
                    return .001 <= f ? function(t, e, r, n) {
                        for (var i = 0; i < 4; ++i) {
                            var a = c(e, r, n);
                            if (0 === a) return e;
                            e -= (l(e, r, n) - t) / a
                        }
                        return e
                    }(t, u, e, i) : 0 === f ? u : function(t, e, r, n, i) {
                        for (var a, o, s = 0; 0 < (a = l(o = e + (r - e) / 2, n, i) - t) ? r = o : e = o, 1e-7 < Math.abs(a) && ++s < 10;);
                        return o
                    }(t, o, o + n, e, i)
                }
            }, t
        }();

        function extendPrototype(t, e) {
            var r, n, i = t.length;
            for (r = 0; r < i; r += 1)
                for (var a in n = t[r].prototype) Object.prototype.hasOwnProperty.call(n, a) && (e.prototype[a] = n[a])
        }

        function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e)
        }

        function createProxyFunction(t) {
            function e() {}
            return e.prototype = t, e
        }

        function bezFunction() {
            var t = Math;

            function e(t, e, r, n, i, a) {
                var o = t * n + e * i + r * a - i * n - a * t - r * e;
                return -.001 < o && o < .001
            }
            var r = function(t, e, r, n) {
                var i, a, o, s, l, c, h = defaultCurveSegments,
                    u = 0,
                    f = [],
                    p = [],
                    d = bezierLengthPool.newElement();
                for (o = r.length, i = 0; i < h; i += 1) {
                    for (l = i / (h - 1), a = c = 0; a < o; a += 1) s = bmPow(1 - l, 3) * t[a] + 3 * bmPow(1 - l, 2) * l * r[a] + 3 * (1 - l) * bmPow(l, 2) * n[a] + bmPow(l, 3) * e[a], f[a] = s, null !== p[a] && (c += bmPow(f[a] - p[a], 2)), p[a] = f[a];
                    c && (u += c = bmSqrt(c)), d.percents[i] = l, d.lengths[i] = u
                }
                return d.addedLength = u, d
            };

            function n(t) {
                this.segmentLength = 0, this.points = new Array(t)
            }

            function i(t, e) {
                this.partialLength = t, this.point = e
            }
            var a, o = (a = {}, function(t, r, o, s) {
                var l = (t[0] + "_" + t[1] + "_" + r[0] + "_" + r[1] + "_" + o[0] + "_" + o[1] + "_" + s[0] + "_" + s[1]).replace(/\./g, "p");
                if (!a[l]) {
                    var c, h, u, f, p, d, m, v = defaultCurveSegments,
                        g = 0,
                        y = null;
                    2 === t.length && (t[0] !== r[0] || t[1] !== r[1]) && e(t[0], t[1], r[0], r[1], t[0] + o[0], t[1] + o[1]) && e(t[0], t[1], r[0], r[1], r[0] + s[0], r[1] + s[1]) && (v = 2);
                    var E = new n(v);
                    for (u = o.length, c = 0; c < v; c += 1) {
                        for (m = createSizedArray(u), p = c / (v - 1), h = d = 0; h < u; h += 1) f = bmPow(1 - p, 3) * t[h] + 3 * bmPow(1 - p, 2) * p * (t[h] + o[h]) + 3 * (1 - p) * bmPow(p, 2) * (r[h] + s[h]) + bmPow(p, 3) * r[h], m[h] = f, null !== y && (d += bmPow(m[h] - y[h], 2));
                        g += d = bmSqrt(d), E.points[c] = new i(d, m), y = m
                    }
                    E.segmentLength = g, a[l] = E
                }
                return a[l]
            });

            function s(t, e) {
                var r = e.percents,
                    n = e.lengths,
                    i = r.length,
                    a = bmFloor((i - 1) * t),
                    o = t * e.addedLength,
                    s = 0;
                if (a === i - 1 || 0 === a || o === n[a]) return r[a];
                for (var l = n[a] > o ? -1 : 1, c = !0; c;)
                    if (n[a] <= o && n[a + 1] > o ? (s = (o - n[a]) / (n[a + 1] - n[a]), c = !1) : a += l, a < 0 || i - 1 <= a) {
                        if (a === i - 1) return r[a];
                        c = !1
                    }
                return r[a] + (r[a + 1] - r[a]) * s
            }
            var l = createTypedArray("float32", 8);
            return {
                getSegmentsLength: function(t) {
                    var e, n = segmentsLengthPool.newElement(),
                        i = t.c,
                        a = t.v,
                        o = t.o,
                        s = t.i,
                        l = t._length,
                        c = n.lengths,
                        h = 0;
                    for (e = 0; e < l - 1; e += 1) c[e] = r(a[e], a[e + 1], o[e], s[e + 1]), h += c[e].addedLength;
                    return i && l && (c[e] = r(a[e], a[0], o[e], s[0]), h += c[e].addedLength), n.totalLength = h, n
                },
                getNewSegment: function(e, r, n, i, a, o, c) {
                    a < 0 ? a = 0 : 1 < a && (a = 1);
                    var h, u = s(a, c),
                        f = s(o = 1 < o ? 1 : o, c),
                        p = e.length,
                        d = 1 - u,
                        m = 1 - f,
                        v = d * d * d,
                        g = u * d * d * 3,
                        y = u * u * d * 3,
                        E = u * u * u,
                        b = d * d * m,
                        _ = u * d * m + d * u * m + d * d * f,
                        x = u * u * m + d * u * f + u * d * f,
                        w = u * u * f,
                        A = d * m * m,
                        S = u * m * m + d * f * m + d * m * f,
                        T = u * f * m + d * f * f + u * m * f,
                        I = u * f * f,
                        P = m * m * m,
                        C = f * m * m + m * f * m + m * m * f,
                        D = f * f * m + m * f * f + f * m * f,
                        M = f * f * f;
                    for (h = 0; h < p; h += 1) l[4 * h] = t.round(1e3 * (v * e[h] + g * n[h] + y * i[h] + E * r[h])) / 1e3, l[4 * h + 1] = t.round(1e3 * (b * e[h] + _ * n[h] + x * i[h] + w * r[h])) / 1e3, l[4 * h + 2] = t.round(1e3 * (A * e[h] + S * n[h] + T * i[h] + I * r[h])) / 1e3, l[4 * h + 3] = t.round(1e3 * (P * e[h] + C * n[h] + D * i[h] + M * r[h])) / 1e3;
                    return l
                },
                getPointInSegment: function(e, r, n, i, a, o) {
                    var l = s(a, o),
                        c = 1 - l;
                    return [t.round(1e3 * (c * c * c * e[0] + (l * c * c + c * l * c + c * c * l) * n[0] + (l * l * c + c * l * l + l * c * l) * i[0] + l * l * l * r[0])) / 1e3, t.round(1e3 * (c * c * c * e[1] + (l * c * c + c * l * c + c * c * l) * n[1] + (l * l * c + c * l * l + l * c * l) * i[1] + l * l * l * r[1])) / 1e3]
                },
                buildBezierData: o,
                pointOnLine2D: e,
                pointOnLine3D: function(r, n, i, a, o, s, l, c, h) {
                    if (0 === i && 0 === s && 0 === h) return e(r, n, a, o, l, c);
                    var u, f = t.sqrt(t.pow(a - r, 2) + t.pow(o - n, 2) + t.pow(s - i, 2)),
                        p = t.sqrt(t.pow(l - r, 2) + t.pow(c - n, 2) + t.pow(h - i, 2)),
                        d = t.sqrt(t.pow(l - a, 2) + t.pow(c - o, 2) + t.pow(h - s, 2));
                    return -1e-4 < (u = p < f ? d < f ? f - p - d : d - p - f : p < d ? d - p - f : p - f - d) && u < 1e-4
                }
            }
        }! function() {
            for (var t = 0, e = ["ms", "moz", "webkit", "o"], r = 0; r < e.length && !window.requestAnimationFrame; ++r) window.requestAnimationFrame = window[e[r] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[r] + "CancelAnimationFrame"] || window[e[r] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
                var r = (new Date).getTime(),
                    n = Math.max(0, 16 - (r - t)),
                    i = setTimeout(function() {
                        e(r + n)
                    }, n);
                return t = r + n, i
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            })
        }();
        var bez = bezFunction();

        function dataFunctionManager() {
            function t(i, a, o) {
                var s, l, c, u, f, p, d = i.length;
                for (l = 0; l < d; l += 1)
                    if ("ks" in (s = i[l]) && !s.completed) {
                        if (s.completed = !0, s.tt && (i[l - 1].td = s.tt), s.hasMask) {
                            var m = s.masksProperties;
                            for (u = m.length, c = 0; c < u; c += 1)
                                if (m[c].pt.k.i) n(m[c].pt.k);
                                else
                                    for (p = m[c].pt.k.length, f = 0; f < p; f += 1) m[c].pt.k[f].s && n(m[c].pt.k[f].s[0]), m[c].pt.k[f].e && n(m[c].pt.k[f].e[0])
                        }
                        0 === s.ty ? (s.layers = e(s.refId, a), t(s.layers, a, o)) : 4 === s.ty ? r(s.shapes) : 5 === s.ty && h(s)
                    }
            }

            function e(t, e) {
                for (var r = 0, n = e.length; r < n;) {
                    if (e[r].id === t) return e[r].layers.__used ? JSON.parse(JSON.stringify(e[r].layers)) : (e[r].layers.__used = !0, e[r].layers);
                    r += 1
                }
                return null
            }

            function r(t) {
                var e, i, a;
                for (e = t.length - 1; 0 <= e; e -= 1)
                    if ("sh" === t[e].ty)
                        if (t[e].ks.k.i) n(t[e].ks.k);
                        else
                            for (a = t[e].ks.k.length, i = 0; i < a; i += 1) t[e].ks.k[i].s && n(t[e].ks.k[i].s[0]), t[e].ks.k[i].e && n(t[e].ks.k[i].e[0]);
                else "gr" === t[e].ty && r(t[e].it)
            }

            function n(t) {
                var e, r = t.i.length;
                for (e = 0; e < r; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
            }

            function i(t, e) {
                var r = e ? e.split(".") : [100, 100, 100];
                return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && null))
            }
            var a, o = function() {
                    var t = [4, 4, 14];

                    function e(t) {
                        var e, r, n, i = t.length;
                        for (e = 0; e < i; e += 1) 5 === t[e].ty && (n = (r = t[e]).t.d, r.t.d = {
                            k: [{
                                s: n,
                                t: 0
                            }]
                        })
                    }
                    return function(r) {
                        if (i(t, r.v) && (e(r.layers), r.assets)) {
                            var n, a = r.assets.length;
                            for (n = 0; n < a; n += 1) r.assets[n].layers && e(r.assets[n].layers)
                        }
                    }
                }(),
                s = (a = [4, 7, 99], function(t) {
                    if (t.chars && !i(a, t.v)) {
                        var e, r, o, s, l, c = t.chars.length;
                        for (e = 0; e < c; e += 1)
                            if (t.chars[e].data && t.chars[e].data.shapes)
                                for (o = (l = t.chars[e].data.shapes[0].it).length, r = 0; r < o; r += 1)(s = l[r].ks.k).__converted || (n(l[r].ks.k), s.__converted = !0)
                    }
                }),
                l = function() {
                    var t = [4, 1, 9];

                    function e(t) {
                        var r, n, i, a = t.length;
                        for (r = 0; r < a; r += 1)
                            if ("gr" === t[r].ty) e(t[r].it);
                            else if ("fl" === t[r].ty || "st" === t[r].ty)
                            if (t[r].c.k && t[r].c.k[0].i)
                                for (i = t[r].c.k.length, n = 0; n < i; n += 1) t[r].c.k[n].s && (t[r].c.k[n].s[0] /= 255, t[r].c.k[n].s[1] /= 255, t[r].c.k[n].s[2] /= 255, t[r].c.k[n].s[3] /= 255), t[r].c.k[n].e && (t[r].c.k[n].e[0] /= 255, t[r].c.k[n].e[1] /= 255, t[r].c.k[n].e[2] /= 255, t[r].c.k[n].e[3] /= 255);
                            else t[r].c.k[0] /= 255, t[r].c.k[1] /= 255, t[r].c.k[2] /= 255, t[r].c.k[3] /= 255
                    }

                    function r(t) {
                        var r, n = t.length;
                        for (r = 0; r < n; r += 1) 4 === t[r].ty && e(t[r].shapes)
                    }
                    return function(e) {
                        if (i(t, e.v) && (r(e.layers), e.assets)) {
                            var n, a = e.assets.length;
                            for (n = 0; n < a; n += 1) e.assets[n].layers && r(e.assets[n].layers)
                        }
                    }
                }(),
                c = function() {
                    var t = [4, 4, 18];

                    function e(t) {
                        var r, n, i;
                        for (r = t.length - 1; 0 <= r; r -= 1)
                            if ("sh" === t[r].ty)
                                if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                                else
                                    for (i = t[r].ks.k.length, n = 0; n < i; n += 1) t[r].ks.k[n].s && (t[r].ks.k[n].s[0].c = t[r].closed), t[r].ks.k[n].e && (t[r].ks.k[n].e[0].c = t[r].closed);
                        else "gr" === t[r].ty && e(t[r].it)
                    }

                    function r(t) {
                        var r, n, i, a, o, s, l = t.length;
                        for (n = 0; n < l; n += 1) {
                            if ((r = t[n]).hasMask) {
                                var c = r.masksProperties;
                                for (a = c.length, i = 0; i < a; i += 1)
                                    if (c[i].pt.k.i) c[i].pt.k.c = c[i].cl;
                                    else
                                        for (s = c[i].pt.k.length, o = 0; o < s; o += 1) c[i].pt.k[o].s && (c[i].pt.k[o].s[0].c = c[i].cl), c[i].pt.k[o].e && (c[i].pt.k[o].e[0].c = c[i].cl)
                            }
                            4 === r.ty && e(r.shapes)
                        }
                    }
                    return function(e) {
                        if (i(t, e.v) && (r(e.layers), e.assets)) {
                            var n, a = e.assets.length;
                            for (n = 0; n < a; n += 1) e.assets[n].layers && r(e.assets[n].layers)
                        }
                    }
                }();

            function h(t) {
                0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0)
            }
            var u = {
                completeData: function(e, r) {
                    e.__complete || (l(e), o(e), s(e), c(e), t(e.layers, e.assets, r), e.__complete = !0)
                }
            };
            return u.checkColors = l, u.checkChars = s, u.checkShapes = c, u.completeLayers = t, u
        }
        var dataManager = dataFunctionManager();

        function getFontProperties(t) {
            for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", n = "normal", i = e.length, a = 0; a < i; a += 1) switch (e[a].toLowerCase()) {
                case "italic":
                    n = "italic";
                    break;
                case "bold":
                    r = "700";
                    break;
                case "black":
                    r = "900";
                    break;
                case "medium":
                    r = "500";
                    break;
                case "regular":
                case "normal":
                    r = "400";
                    break;
                case "light":
                case "thin":
                    r = "200"
            }
            return {
                style: n,
                weight: t.fWeight || r
            }
        }
        var FontManager = function() {
                var t = {
                        w: 0,
                        size: 0,
                        shapes: []
                    },
                    e = [];
                e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                var r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
                    n = [65039, 8205];

                function i(t, e) {
                    var r = createTag("span");
                    r.setAttribute("aria-hidden", !0), r.style.fontFamily = e;
                    var n = createTag("span");
                    n.innerText = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(n), document.body.appendChild(r);
                    var i = n.offsetWidth;
                    return n.style.fontFamily = function(t) {
                        var e, r = t.split(","),
                            n = r.length,
                            i = [];
                        for (e = 0; e < n; e += 1) "sans-serif" !== r[e] && "monospace" !== r[e] && i.push(r[e]);
                        return i.join(",")
                    }(t) + ", " + e, {
                        node: n,
                        w: i,
                        parent: r
                    }
                }

                function a(t, e) {
                    var r = createNS("text");
                    r.style.fontSize = "100px";
                    var n = getFontProperties(e);
                    return r.setAttribute("font-family", e.fFamily), r.setAttribute("font-style", n.style), r.setAttribute("font-weight", n.weight), r.textContent = "1", e.fClass ? (r.style.fontFamily = "inherit", r.setAttribute("class", e.fClass)) : r.style.fontFamily = e.fFamily, t.appendChild(r), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, r
                }
                var o = function() {
                    this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                };
                return o.isModifier = function(t, e) {
                    var n = t.toString(16) + e.toString(16);
                    return -1 !== r.indexOf(n)
                }, o.isZeroWidthJoiner = function(t, e) {
                    return e ? t === n[0] && e === n[1] : t === n[1]
                }, o.isCombinedCharacter = function(t) {
                    return -1 !== e.indexOf(t)
                }, o.prototype = {
                    addChars: function(t) {
                        if (t) {
                            var e;
                            this.chars || (this.chars = []);
                            var r, n, i = t.length,
                                a = this.chars.length;
                            for (e = 0; e < i; e += 1) {
                                for (r = 0, n = !1; r < a;) this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (n = !0), r += 1;
                                n || (this.chars.push(t[e]), a += 1)
                            }
                        }
                    },
                    addFonts: function(t, e) {
                        if (t) {
                            if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                            var r, n = t.list,
                                o = n.length,
                                s = o;
                            for (r = 0; r < o; r += 1) {
                                var l, c, h = !0;
                                if (n[r].loaded = !1, n[r].monoCase = i(n[r].fFamily, "monospace"), n[r].sansCase = i(n[r].fFamily, "sans-serif"), n[r].fPath) {
                                    if ("p" === n[r].fOrigin || 3 === n[r].origin) {
                                        if (0 < (l = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[r].fFamily + '"], style[f-origin="3"][f-family="' + n[r].fFamily + '"]')).length && (h = !1), h) {
                                            var u = createTag("style");
                                            u.setAttribute("f-forigin", n[r].fOrigin), u.setAttribute("f-origin", n[r].origin), u.setAttribute("f-family", n[r].fFamily), u.type = "text/css", u.innerText = "@font-face {font-family: " + n[r].fFamily + "; font-style: normal; src: url('" + n[r].fPath + "');}", e.appendChild(u)
                                        }
                                    } else if ("g" === n[r].fOrigin || 1 === n[r].origin) {
                                        for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), c = 0; c < l.length; c += 1) - 1 !== l[c].href.indexOf(n[r].fPath) && (h = !1);
                                        if (h) {
                                            var f = createTag("link");
                                            f.setAttribute("f-forigin", n[r].fOrigin), f.setAttribute("f-origin", n[r].origin), f.type = "text/css", f.rel = "stylesheet", f.href = n[r].fPath, document.body.appendChild(f)
                                        }
                                    } else if ("t" === n[r].fOrigin || 2 === n[r].origin) {
                                        for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), c = 0; c < l.length; c += 1) n[r].fPath === l[c].src && (h = !1);
                                        if (h) {
                                            var p = createTag("link");
                                            p.setAttribute("f-forigin", n[r].fOrigin), p.setAttribute("f-origin", n[r].origin), p.setAttribute("rel", "stylesheet"), p.setAttribute("href", n[r].fPath), e.appendChild(p)
                                        }
                                    }
                                } else n[r].loaded = !0, s -= 1;
                                n[r].helper = a(e, n[r]), n[r].cache = {}, this.fonts.push(n[r])
                            }
                            0 === s ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                        } else this.isLoaded = !0
                    },
                    getCharData: function(e, r, n) {
                        for (var i = 0, a = this.chars.length; i < a;) {
                            if (this.chars[i].ch === e && this.chars[i].style === r && this.chars[i].fFamily === n) return this.chars[i];
                            i += 1
                        }
                        return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, r, n)), t
                    },
                    getFontByName: function(t) {
                        for (var e = 0, r = this.fonts.length; e < r;) {
                            if (this.fonts[e].fName === t) return this.fonts[e];
                            e += 1
                        }
                        return this.fonts[0]
                    },
                    measureText: function(t, e, r) {
                        var n = this.getFontByName(e),
                            i = t.charCodeAt(0);
                        if (!n.cache[i + 1]) {
                            var a = n.helper;
                            if (" " === t) {
                                a.textContent = "|" + t + "|";
                                var o = a.getComputedTextLength();
                                a.textContent = "||";
                                var s = a.getComputedTextLength();
                                n.cache[i + 1] = (o - s) / 100
                            } else a.textContent = t, n.cache[i + 1] = a.getComputedTextLength() / 100
                        }
                        return n.cache[i + 1] * r
                    },
                    checkLoadedFonts: function() {
                        var t, e, r, n = this.fonts.length,
                            i = n;
                        for (t = 0; t < n; t += 1) this.fonts[t].loaded ? i -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, e.offsetWidth !== r ? (i -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, e.offsetWidth !== r && (i -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                        0 !== i && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                    },
                    setIsLoaded: function() {
                        this.isLoaded = !0
                    }
                }, o
            }(),
            PropertyFactory = function() {
                var t = initialDefaultFrame,
                    e = Math.abs;

                function r(t, e) {
                    var r, i = this.offsetTime;
                    "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
                    for (var a, o, s, l, c, h, u, f, p = e.lastIndex, d = p, m = this.keyframes.length - 1, v = !0; v;) {
                        if (a = this.keyframes[d], o = this.keyframes[d + 1], d === m - 1 && t >= o.t - i) {
                            a.h && (a = o), p = 0;
                            break
                        }
                        if (o.t - i > t) {
                            p = d;
                            break
                        }
                        d < m - 1 ? d += 1 : (p = 0, v = !1)
                    }
                    var g, y, E, b, _, x, w, A, S, T, I = o.t - i,
                        P = a.t - i;
                    if (a.to) {
                        a.bezierData || (a.bezierData = bez.buildBezierData(a.s, o.s || a.e, a.to, a.ti));
                        var C = a.bezierData;
                        if (I <= t || t < P) {
                            var D = I <= t ? C.points.length - 1 : 0;
                            for (l = C.points[D].point.length, s = 0; s < l; s += 1) r[s] = C.points[D].point[s]
                        } else {
                            a.__fnct ? f = a.__fnct : (f = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, a.__fnct = f), c = f((t - P) / (I - P));
                            var M, O = C.segmentLength * c,
                                k = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
                            for (u = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0, v = !0, h = C.points.length; v;) {
                                if (k += C.points[u].partialLength, 0 === O || 0 === c || u === C.points.length - 1) {
                                    for (l = C.points[u].point.length, s = 0; s < l; s += 1) r[s] = C.points[u].point[s];
                                    break
                                }
                                if (k <= O && O < k + C.points[u + 1].partialLength) {
                                    for (M = (O - k) / C.points[u + 1].partialLength, l = C.points[u].point.length, s = 0; s < l; s += 1) r[s] = C.points[u].point[s] + (C.points[u + 1].point[s] - C.points[u].point[s]) * M;
                                    break
                                }
                                u < h - 1 ? u += 1 : v = !1
                            }
                            e._lastPoint = u, e._lastAddedLength = k - C.points[u].partialLength, e._lastKeyframeIndex = d
                        }
                    } else {
                        var R, F, L, N, V;
                        if (m = a.s.length, g = o.s || a.e, this.sh && 1 !== a.h)
                            if (I <= t) r[0] = g[0], r[1] = g[1], r[2] = g[2];
                            else if (t <= P) r[0] = a.s[0], r[1] = a.s[1], r[2] = a.s[2];
                        else {
                            y = r, b = (E = function(t, e, r) {
                                var n, i, a, o, s, l = [],
                                    c = t[0],
                                    h = t[1],
                                    u = t[2],
                                    f = t[3],
                                    p = e[0],
                                    d = e[1],
                                    m = e[2],
                                    v = e[3];
                                return (i = c * p + h * d + u * m + f * v) < 0 && (i = -i, p = -p, d = -d, m = -m, v = -v), s = 1e-6 < 1 - i ? (n = Math.acos(i), a = Math.sin(n), o = Math.sin((1 - r) * n) / a, Math.sin(r * n) / a) : (o = 1 - r, r), l[0] = o * c + s * p, l[1] = o * h + s * d, l[2] = o * u + s * m, l[3] = o * f + s * v, l
                            }(n(a.s), n(g), (t - P) / (I - P)))[0], _ = E[1], x = E[2], w = E[3], A = Math.atan2(2 * _ * w - 2 * b * x, 1 - 2 * _ * _ - 2 * x * x), S = Math.asin(2 * b * _ + 2 * x * w), T = Math.atan2(2 * b * w - 2 * _ * x, 1 - 2 * b * b - 2 * x * x), y[0] = A / degToRads, y[1] = S / degToRads, y[2] = T / degToRads
                        } else
                            for (d = 0; d < m; d += 1) 1 !== a.h && (c = I <= t ? 1 : t < P ? 0 : (a.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[d] ? f = a.__fnct[d] : (R = void 0 === a.o.x[d] ? a.o.x[0] : a.o.x[d], F = void 0 === a.o.y[d] ? a.o.y[0] : a.o.y[d], L = void 0 === a.i.x[d] ? a.i.x[0] : a.i.x[d], N = void 0 === a.i.y[d] ? a.i.y[0] : a.i.y[d], f = BezierFactory.getBezierEasing(R, F, L, N).get, a.__fnct[d] = f)) : a.__fnct ? f = a.__fnct : (R = a.o.x, F = a.o.y, L = a.i.x, N = a.i.y, f = BezierFactory.getBezierEasing(R, F, L, N).get, a.__fnct = f), f((t - P) / (I - P)))), g = o.s || a.e, V = 1 === a.h ? a.s[d] : a.s[d] + (g[d] - a.s[d]) * c, "multidimensional" === this.propType ? r[d] = V : r = V
                    }
                    return e.lastIndex = p, r
                }

                function n(t) {
                    var e = t[0] * degToRads,
                        r = t[1] * degToRads,
                        n = t[2] * degToRads,
                        i = Math.cos(e / 2),
                        a = Math.cos(r / 2),
                        o = Math.cos(n / 2),
                        s = Math.sin(e / 2),
                        l = Math.sin(r / 2),
                        c = Math.sin(n / 2);
                    return [s * l * o + i * a * c, s * a * o + i * l * c, i * l * o - s * a * c, i * a * o - s * l * c]
                }

                function i() {
                    var e = this.comp.renderedFrame - this.offsetTime,
                        r = this.keyframes[0].t - this.offsetTime,
                        n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= n && n <= e || this._caching.lastFrame < r && e < r))) {
                        this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                        var i = this.interpolateValue(e, this._caching);
                        this.pv = i
                    }
                    return this._caching.lastFrame = e, this.pv
                }

                function a(t) {
                    var r;
                    if ("unidimensional" === this.propType) r = t * this.mult, 1e-5 < e(this.v - r) && (this.v = r, this._mdf = !0);
                    else
                        for (var n = 0, i = this.v.length; n < i;) r = t[n] * this.mult, 1e-5 < e(this.v[n] - r) && (this.v[n] = r, this._mdf = !0), n += 1
                }

                function o() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                        if (this.lock) this.setVValue(this.pv);
                        else {
                            var t;
                            this.lock = !0, this._mdf = this._isFirstFrame;
                            var e = this.effectsSequence.length,
                                r = this.kf ? this.pv : this.data.k;
                            for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                            this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                }

                function s(t) {
                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                }

                function l(t, e, r, n) {
                    this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = n, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = o, this.setVValue = a, this.addEffect = s
                }

                function c(t, e, r, n) {
                    var i;
                    this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = n, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                    var l = e.k.length;
                    for (this.v = createTypedArray("float32", l), this.pv = createTypedArray("float32", l), this.vel = createTypedArray("float32", l), i = 0; i < l; i += 1) this.v[i] = e.k[i] * this.mult, this.pv[i] = e.k[i];
                    this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = o, this.setVValue = a, this.addEffect = s
                }

                function h(e, n, l, c) {
                    this.propType = "unidimensional", this.keyframes = n.k, this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                        lastFrame: t,
                        lastIndex: 0,
                        value: 0,
                        _lastKeyframeIndex: -1
                    }, this.k = !0, this.kf = !0, this.data = n, this.mult = l || 1, this.elem = e, this.container = c, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = o, this.setVValue = a, this.interpolateValue = r, this.effectsSequence = [i.bind(this)], this.addEffect = s
                }

                function u(e, n, l, c) {
                    var h;
                    this.propType = "multidimensional";
                    var u, f, p, d, m = n.k.length;
                    for (h = 0; h < m - 1; h += 1) n.k[h].to && n.k[h].s && n.k[h + 1] && n.k[h + 1].s && (u = n.k[h].s, f = n.k[h + 1].s, p = n.k[h].to, d = n.k[h].ti, (2 === u.length && (u[0] !== f[0] || u[1] !== f[1]) && bez.pointOnLine2D(u[0], u[1], f[0], f[1], u[0] + p[0], u[1] + p[1]) && bez.pointOnLine2D(u[0], u[1], f[0], f[1], f[0] + d[0], f[1] + d[1]) || 3 === u.length && (u[0] !== f[0] || u[1] !== f[1] || u[2] !== f[2]) && bez.pointOnLine3D(u[0], u[1], u[2], f[0], f[1], f[2], u[0] + p[0], u[1] + p[1], u[2] + p[2]) && bez.pointOnLine3D(u[0], u[1], u[2], f[0], f[1], f[2], f[0] + d[0], f[1] + d[1], f[2] + d[2])) && (n.k[h].to = null, n.k[h].ti = null), u[0] === f[0] && u[1] === f[1] && 0 === p[0] && 0 === p[1] && 0 === d[0] && 0 === d[1] && (2 === u.length || u[2] === f[2] && 0 === p[2] && 0 === d[2]) && (n.k[h].to = null, n.k[h].ti = null));
                    this.effectsSequence = [i.bind(this)], this.data = n, this.keyframes = n.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = l || 1, this.elem = e, this.container = c, this.comp = e.comp, this.getValue = o, this.setVValue = a, this.interpolateValue = r, this.frameId = -1;
                    var v = n.k[0].s.length;
                    for (this.v = createTypedArray("float32", v), this.pv = createTypedArray("float32", v), h = 0; h < v; h += 1) this.v[h] = t, this.pv[h] = t;
                    this._caching = {
                        lastFrame: t,
                        lastIndex: 0,
                        value: createTypedArray("float32", v)
                    }, this.addEffect = s
                }
                return {
                    getProp: function(t, e, r, n, i) {
                        var a;
                        if (e.k.length)
                            if ("number" == typeof e.k[0]) a = new c(t, e, n, i);
                            else switch (r) {
                                case 0:
                                    a = new h(t, e, n, i);
                                    break;
                                case 1:
                                    a = new u(t, e, n, i)
                            } else a = new l(t, e, n, i);
                        return a.effectsSequence.length && i.addDynamicProperty(a), a
                    }
                }
            }(),
            TransformPropertyFactory = function() {
                var t = [0, 0];

                function e(t, e, r) {
                    if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                            k: [0, 0, 0]
                        }, 1, 0, this), e.rx) {
                        if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                            var n, i = e.or.k.length;
                            for (n = 0; n < i; n += 1) e.or.k[n].to = null, e.or.k[n].ti = null
                        }
                        this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                    } else this.r = PropertyFactory.getProp(t, e.r || {
                        k: 0
                    }, 0, degToRads, this);
                    e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
                        k: [0, 0, 0]
                    }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                        k: [100, 100, 100]
                    }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                        _mdf: !1,
                        v: 1
                    }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                }
                return e.prototype = {
                    applyToMatrix: function(t) {
                        var e = this._mdf;
                        this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    },
                    getValue: function(e) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                var r;
                                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                    var n, i;
                                    if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) i = this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (n = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (n = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (n = this.p.pv, this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        n = [], i = [];
                                        var a = this.px,
                                            o = this.py;
                                        a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (n[0] = a.getValueAtTime((a.keyframes[0].t + .01) / r, 0), n[1] = o.getValueAtTime((o.keyframes[0].t + .01) / r, 0), i[0] = a.getValueAtTime(a.keyframes[0].t / r, 0), i[1] = o.getValueAtTime(o.keyframes[0].t / r, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (n[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / r, 0), n[1] = o.getValueAtTime(o.keyframes[o.keyframes.length - 1].t / r, 0), i[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / r, 0), i[1] = o.getValueAtTime((o.keyframes[o.keyframes.length - 1].t - .01) / r, 0)) : (n = [a.pv, o.pv], i[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / r, a.offsetTime), i[1] = o.getValueAtTime((o._caching.lastFrame + o.offsetTime - .01) / r, o.offsetTime))
                                    } else n = i = t;
                                    this.v.rotate(-Math.atan2(n[1] - i[1], n[0] - i[0]))
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    },
                    precalculateMatrix: function() {
                        if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                            }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                        }
                    },
                    autoOrient: function() {}
                }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
                    this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                    getTransformProperty: function(t, r, n) {
                        return new e(t, r, n)
                    }
                }
            }();

        function ShapePath() {
            this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(t, e) {
            this.c = t, this.setLength(e);
            for (var r = 0; r < e;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
        }, ShapePath.prototype.setLength = function(t) {
            for (; this._maxLength < t;) this.doubleArrayLength();
            this._length = t
        }, ShapePath.prototype.doubleArrayLength = function() {
            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function(t, e, r, n, i) {
            var a;
            switch (this._length = Math.max(this._length, n + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
                case "v":
                    a = this.v;
                    break;
                case "i":
                    a = this.i;
                    break;
                case "o":
                    a = this.o;
                    break;
                default:
                    a = []
            }(!a[n] || a[n] && !i) && (a[n] = pointPool.newElement()), a[n][0] = t, a[n][1] = e
        }, ShapePath.prototype.setTripleAt = function(t, e, r, n, i, a, o, s) {
            this.setXYAt(t, e, "v", o, s), this.setXYAt(r, n, "o", o, s), this.setXYAt(i, a, "i", o, s)
        }, ShapePath.prototype.reverse = function() {
            var t = new ShapePath;
            t.setPathData(this.c, this._length);
            var e = this.v,
                r = this.o,
                n = this.i,
                i = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], n[0][0], n[0][1], r[0][0], r[0][1], 0, !1), i = 1);
            var a, o = this._length - 1,
                s = this._length;
            for (a = i; a < s; a += 1) t.setTripleAt(e[o][0], e[o][1], n[o][0], n[o][1], r[o][0], r[o][1], a, !1), o -= 1;
            return t
        };
        var ShapePropertyFactory = function() {
                var t = -999999;

                function e(t, e, r) {
                    var n, i, a, o, s, l, c, h, u, f = r.lastIndex,
                        p = this.keyframes;
                    if (t < p[0].t - this.offsetTime) n = p[0].s[0], a = !0, f = 0;
                    else if (t >= p[p.length - 1].t - this.offsetTime) n = p[p.length - 1].s ? p[p.length - 1].s[0] : p[p.length - 2].e[0], a = !0;
                    else {
                        for (var d, m, v = f, g = p.length - 1, y = !0; y && (d = p[v], !((m = p[v + 1]).t - this.offsetTime > t));) v < g - 1 ? v += 1 : y = !1;
                        if (f = v, !(a = 1 === d.h)) {
                            if (t >= m.t - this.offsetTime) h = 1;
                            else if (t < d.t - this.offsetTime) h = 0;
                            else {
                                var E;
                                d.__fnct ? E = d.__fnct : (E = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, d.__fnct = E), h = E((t - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                            }
                            i = m.s ? m.s[0] : d.e[0]
                        }
                        n = d.s[0]
                    }
                    for (l = e._length, c = n.i[0].length, r.lastIndex = f, o = 0; o < l; o += 1)
                        for (s = 0; s < c; s += 1) u = a ? n.i[o][s] : n.i[o][s] + (i.i[o][s] - n.i[o][s]) * h, e.i[o][s] = u, u = a ? n.o[o][s] : n.o[o][s] + (i.o[o][s] - n.o[o][s]) * h, e.o[o][s] = u, u = a ? n.v[o][s] : n.v[o][s] + (i.v[o][s] - n.v[o][s]) * h, e.v[o][s] = u
                }

                function r() {
                    this.paths = this.localShapeCollection
                }

                function n(t) {
                    (function(t, e) {
                        if (t._length !== e._length || t.c !== e.c) return !1;
                        var r, n = t._length;
                        for (r = 0; r < n; r += 1)
                            if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
                        return !0
                    })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                }

                function i() {
                    if (this.elem.globalData.frameId !== this.frameId)
                        if (this.effectsSequence.length)
                            if (this.lock) this.setVValue(this.pv);
                            else {
                                var t, e;
                                this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                var r = this.effectsSequence.length;
                                for (e = 0; e < r; e += 1) t = this.effectsSequence[e](t);
                                this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                            }
                    else this._mdf = !1
                }

                function a(t, e, n) {
                    this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                    var i = 3 === n ? e.pt.k : e.ks.k;
                    this.v = shapePool.clone(i), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = []
                }

                function o(t) {
                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                }

                function s(e, n, i) {
                    this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === i ? n.pt.k : n.ks.k, this.k = !0, this.kf = !0;
                    var a = this.keyframes[0].s[0].i.length;
                    this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, a), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = r, this._caching = {
                        lastFrame: t,
                        lastIndex: 0
                    }, this.effectsSequence = [function() {
                        var e = this.comp.renderedFrame - this.offsetTime,
                            r = this.keyframes[0].t - this.offsetTime,
                            n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                            i = this._caching.lastFrame;
                        return i !== t && (i < r && e < r || n < i && n < e) || (this._caching.lastIndex = i < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                    }.bind(this)]
                }
                a.prototype.interpolateShape = e, a.prototype.getValue = i, a.prototype.setVValue = n, a.prototype.addEffect = o, s.prototype.getValue = i, s.prototype.interpolateShape = e, s.prototype.setVValue = n, s.prototype.addEffect = o;
                var l = function() {
                        var t = roundCorner;

                        function e(t, e) {
                            this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                        }
                        return e.prototype = {
                            reset: r,
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                            },
                            convertEllToPath: function() {
                                var e = this.p.v[0],
                                    r = this.p.v[1],
                                    n = this.s.v[0] / 2,
                                    i = this.s.v[1] / 2,
                                    a = 3 !== this.d,
                                    o = this.v;
                                o.v[0][0] = e, o.v[0][1] = r - i, o.v[1][0] = a ? e + n : e - n, o.v[1][1] = r, o.v[2][0] = e, o.v[2][1] = r + i, o.v[3][0] = a ? e - n : e + n, o.v[3][1] = r, o.i[0][0] = a ? e - n * t : e + n * t, o.i[0][1] = r - i, o.i[1][0] = a ? e + n : e - n, o.i[1][1] = r - i * t, o.i[2][0] = a ? e + n * t : e - n * t, o.i[2][1] = r + i, o.i[3][0] = a ? e - n : e + n, o.i[3][1] = r + i * t, o.o[0][0] = a ? e + n * t : e - n * t, o.o[0][1] = r - i, o.o[1][0] = a ? e + n : e - n, o.o[1][1] = r + i * t, o.o[2][0] = a ? e - n * t : e + n * t, o.o[2][1] = r + i, o.o[3][0] = a ? e - n : e + n, o.o[3][1] = r - i * t
                            }
                        }, extendPrototype([DynamicPropertyContainer], e), e
                    }(),
                    c = function() {
                        function t(t, e) {
                            this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                        }
                        return t.prototype = {
                            reset: r,
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                            },
                            convertStarToPath: function() {
                                var t, e, r, n, i = 2 * Math.floor(this.pt.v),
                                    a = 2 * Math.PI / i,
                                    o = !0,
                                    s = this.or.v,
                                    l = this.ir.v,
                                    c = this.os.v,
                                    h = this.is.v,
                                    u = 2 * Math.PI * s / (2 * i),
                                    f = 2 * Math.PI * l / (2 * i),
                                    p = -Math.PI / 2;
                                p += this.r.v;
                                var d = 3 === this.data.d ? -1 : 1;
                                for (t = this.v._length = 0; t < i; t += 1) {
                                    r = o ? c : h, n = o ? u : f;
                                    var m = (e = o ? s : l) * Math.cos(p),
                                        v = e * Math.sin(p),
                                        g = 0 === m && 0 === v ? 0 : v / Math.sqrt(m * m + v * v),
                                        y = 0 === m && 0 === v ? 0 : -m / Math.sqrt(m * m + v * v);
                                    m += +this.p.v[0], v += +this.p.v[1], this.v.setTripleAt(m, v, m - g * n * r * d, v - y * n * r * d, m + g * n * r * d, v + y * n * r * d, t, !0), o = !o, p += a * d
                                }
                            },
                            convertPolygonToPath: function() {
                                var t, e = Math.floor(this.pt.v),
                                    r = 2 * Math.PI / e,
                                    n = this.or.v,
                                    i = this.os.v,
                                    a = 2 * Math.PI * n / (4 * e),
                                    o = .5 * -Math.PI,
                                    s = 3 === this.data.d ? -1 : 1;
                                for (o += this.r.v, t = this.v._length = 0; t < e; t += 1) {
                                    var l = n * Math.cos(o),
                                        c = n * Math.sin(o),
                                        h = 0 === l && 0 === c ? 0 : c / Math.sqrt(l * l + c * c),
                                        u = 0 === l && 0 === c ? 0 : -l / Math.sqrt(l * l + c * c);
                                    l += +this.p.v[0], c += +this.p.v[1], this.v.setTripleAt(l, c, l - h * a * i * s, c - u * a * i * s, l + h * a * i * s, c + u * a * i * s, t, !0), o += r * s
                                }
                                this.paths.length = 0, this.paths[0] = this.v
                            }
                        }, extendPrototype([DynamicPropertyContainer], t), t
                    }(),
                    h = function() {
                        function t(t, e) {
                            this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                        }
                        return t.prototype = {
                            convertRectToPath: function() {
                                var t = this.p.v[0],
                                    e = this.p.v[1],
                                    r = this.s.v[0] / 2,
                                    n = this.s.v[1] / 2,
                                    i = bmMin(r, n, this.r.v),
                                    a = i * (1 - roundCorner);
                                this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - n + i, t + r, e - n + i, t + r, e - n + a, 0, !0), this.v.setTripleAt(t + r, e + n - i, t + r, e + n - a, t + r, e + n - i, 1, !0), 0 !== i ? (this.v.setTripleAt(t + r - i, e + n, t + r - i, e + n, t + r - a, e + n, 2, !0), this.v.setTripleAt(t - r + i, e + n, t - r + a, e + n, t - r + i, e + n, 3, !0), this.v.setTripleAt(t - r, e + n - i, t - r, e + n - i, t - r, e + n - a, 4, !0), this.v.setTripleAt(t - r, e - n + i, t - r, e - n + a, t - r, e - n + i, 5, !0), this.v.setTripleAt(t - r + i, e - n, t - r + i, e - n, t - r + a, e - n, 6, !0), this.v.setTripleAt(t + r - i, e - n, t + r - a, e - n, t + r - i, e - n, 7, !0)) : (this.v.setTripleAt(t - r, e + n, t - r + a, e + n, t - r, e + n, 2), this.v.setTripleAt(t - r, e - n, t - r, e - n + a, t - r, e - n, 3))) : (this.v.setTripleAt(t + r, e - n + i, t + r, e - n + a, t + r, e - n + i, 0, !0), 0 !== i ? (this.v.setTripleAt(t + r - i, e - n, t + r - i, e - n, t + r - a, e - n, 1, !0), this.v.setTripleAt(t - r + i, e - n, t - r + a, e - n, t - r + i, e - n, 2, !0), this.v.setTripleAt(t - r, e - n + i, t - r, e - n + i, t - r, e - n + a, 3, !0), this.v.setTripleAt(t - r, e + n - i, t - r, e + n - a, t - r, e + n - i, 4, !0), this.v.setTripleAt(t - r + i, e + n, t - r + i, e + n, t - r + a, e + n, 5, !0), this.v.setTripleAt(t + r - i, e + n, t + r - a, e + n, t + r - i, e + n, 6, !0), this.v.setTripleAt(t + r, e + n - i, t + r, e + n - i, t + r, e + n - a, 7, !0)) : (this.v.setTripleAt(t - r, e - n, t - r + a, e - n, t - r, e - n, 1, !0), this.v.setTripleAt(t - r, e + n, t - r, e + n - a, t - r, e + n, 2, !0), this.v.setTripleAt(t + r, e + n, t + r - a, e + n, t + r, e + n, 3, !0)))
                            },
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                            },
                            reset: r
                        }, extendPrototype([DynamicPropertyContainer], t), t
                    }();
                return {
                    getShapeProp: function(t, e, r) {
                        var n;
                        return 3 === r || 4 === r ? n = (3 === r ? e.pt : e.ks).k.length ? new s(t, e, r) : new a(t, e, r) : 5 === r ? n = new h(t, e) : 6 === r ? n = new l(t, e) : 7 === r && (n = new c(t, e)), n.k && t.addDynamicProperty(n), n
                    },
                    getConstructorFunction: function() {
                        return a
                    },
                    getKeyframedConstructorFunction: function() {
                        return s
                    }
                }
            }(),
            ShapeModifiers = (gs = {}, hs = {}, gs.registerModifier = function(t, e) {
                hs[t] || (hs[t] = e)
            }, gs.getModifier = function(t, e, r) {
                return new hs[t](e, r)
            }, gs),
            gs, hs;

        function ShapeModifier() {}

        function TrimModifier() {}

        function RoundCornersModifier() {}

        function PuckerAndBloatModifier() {}

        function RepeaterModifier() {}

        function ShapeCollection() {
            this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }

        function DashProperty(t, e, r, n) {
            var i;
            this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(n);
            var a, o = e.length || 0;
            for (i = 0; i < o; i += 1) a = PropertyFactory.getProp(t, e[i].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[i] = {
                n: e[i].n,
                p: a
            };
            this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function GradientProperty(t, e, r) {
            this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
            var n = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
            this.o = createTypedArray("float32", n), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = n, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
            if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = {
                    shape: t.sh,
                    data: t,
                    localShapeCollection: shapeCollectionPool.newShapeCollection()
                };
                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
            }
        }, ShapeModifier.prototype.init = function(t, e) {
            this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
            this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function(t) {
            t.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, n, i) {
            var a = [];
            e <= 1 ? a.push({
                s: t,
                e: e
            }) : 1 <= t ? a.push({
                s: t - 1,
                e: e - 1
            }) : (a.push({
                s: t,
                e: 1
            }), a.push({
                s: 0,
                e: e - 1
            }));
            var o, s, l = [],
                c = a.length;
            for (o = 0; o < c; o += 1) {
                var h, u;
                (s = a[o]).e * i < n || s.s * i > n + r || (h = s.s * i <= n ? 0 : (s.s * i - n) / r, u = s.e * i >= n + r ? 1 : (s.e * i - n) / r, l.push([h, u]))
            }
            return l.length || l.push([0, 0]), l
        }, TrimModifier.prototype.releasePathsData = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
            return t.length = 0, t
        }, TrimModifier.prototype.processShapes = function(t) {
            var e, r, n, i;
            if (this._mdf || t) {
                var a = this.o.v % 360 / 360;
                if (a < 0 && (a += 1), e = 1 < this.s.v ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a, (r = 1 < this.e.v ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a) < e) {
                    var o = e;
                    e = r, r = o
                }
                e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r
            } else e = this.sValue, r = this.eValue;
            var s, l, c, h, u, f = this.shapes.length,
                p = 0;
            if (r === e)
                for (i = 0; i < f; i += 1) this.shapes[i].localShapeCollection.releaseShapes(), this.shapes[i].shape._mdf = !0, this.shapes[i].shape.paths = this.shapes[i].localShapeCollection, this._mdf && (this.shapes[i].pathsData.length = 0);
            else if (1 === r && 0 === e || 0 === r && 1 === e) {
                if (this._mdf)
                    for (i = 0; i < f; i += 1) this.shapes[i].pathsData.length = 0, this.shapes[i].shape._mdf = !0
            } else {
                var d, m, v = [];
                for (i = 0; i < f; i += 1)
                    if ((d = this.shapes[i]).shape._mdf || this._mdf || t || 2 === this.m) {
                        if (l = (n = d.shape.paths)._length, u = 0, !d.shape._mdf && d.pathsData.length) u = d.totalShapeLength;
                        else {
                            for (c = this.releasePathsData(d.pathsData), s = 0; s < l; s += 1) h = bez.getSegmentsLength(n.shapes[s]), c.push(h), u += h.totalLength;
                            d.totalShapeLength = u, d.pathsData = c
                        }
                        p += u, d.shape._mdf = !0
                    } else d.shape.paths = d.localShapeCollection;
                var g, y = e,
                    E = r,
                    b = 0;
                for (i = f - 1; 0 <= i; i -= 1)
                    if ((d = this.shapes[i]).shape._mdf) {
                        for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && 1 < f ? (g = this.calculateShapeEdges(e, r, d.totalShapeLength, b, p), b += d.totalShapeLength) : g = [
                                [y, E]
                            ], l = g.length, s = 0; s < l; s += 1) {
                            y = g[s][0], E = g[s][1], v.length = 0, E <= 1 ? v.push({
                                s: d.totalShapeLength * y,
                                e: d.totalShapeLength * E
                            }) : 1 <= y ? v.push({
                                s: d.totalShapeLength * (y - 1),
                                e: d.totalShapeLength * (E - 1)
                            }) : (v.push({
                                s: d.totalShapeLength * y,
                                e: d.totalShapeLength
                            }), v.push({
                                s: 0,
                                e: d.totalShapeLength * (E - 1)
                            }));
                            var _ = this.addShapes(d, v[0]);
                            if (v[0].s !== v[0].e) {
                                if (1 < v.length)
                                    if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                                        var x = _.pop();
                                        this.addPaths(_, m), _ = this.addShapes(d, v[1], x)
                                    } else this.addPaths(_, m), _ = this.addShapes(d, v[1]);
                                this.addPaths(_, m)
                            }
                        }
                        d.shape.paths = m
                    }
            }
        }, TrimModifier.prototype.addPaths = function(t, e) {
            var r, n = t.length;
            for (r = 0; r < n; r += 1) e.addShape(t[r])
        }, TrimModifier.prototype.addSegment = function(t, e, r, n, i, a, o) {
            i.setXYAt(e[0], e[1], "o", a), i.setXYAt(r[0], r[1], "i", a + 1), o && i.setXYAt(t[0], t[1], "v", a), i.setXYAt(n[0], n[1], "v", a + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, n) {
            e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), n && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
        }, TrimModifier.prototype.addShapes = function(t, e, r) {
            var n, i, a, o, s, l, c, h, u = t.pathsData,
                f = t.shape.paths.shapes,
                p = t.shape.paths._length,
                d = 0,
                m = [],
                v = !0;
            for (h = r ? (s = r._length, r._length) : (r = shapePool.newElement(), s = 0), m.push(r), n = 0; n < p; n += 1) {
                for (l = u[n].lengths, r.c = f[n].c, a = f[n].c ? l.length : l.length + 1, i = 1; i < a; i += 1)
                    if (d + (o = l[i - 1]).addedLength < e.s) d += o.addedLength, r.c = !1;
                    else {
                        if (d > e.e) {
                            r.c = !1;
                            break
                        }
                        e.s <= d && e.e >= d + o.addedLength ? (this.addSegment(f[n].v[i - 1], f[n].o[i - 1], f[n].i[i], f[n].v[i], r, s, v), v = !1) : (c = bez.getNewSegment(f[n].v[i - 1], f[n].v[i], f[n].o[i - 1], f[n].i[i], (e.s - d) / o.addedLength, (e.e - d) / o.addedLength, l[i - 1]), this.addSegmentFromArray(c, r, s, v), v = !1, r.c = !1), d += o.addedLength, s += 1
                    }
                if (f[n].c && l.length) {
                    if (o = l[i - 1], d <= e.e) {
                        var g = l[i - 1].addedLength;
                        e.s <= d && e.e >= d + g ? (this.addSegment(f[n].v[i - 1], f[n].o[i - 1], f[n].i[0], f[n].v[0], r, s, v), v = !1) : (c = bez.getNewSegment(f[n].v[i - 1], f[n].v[0], f[n].o[i - 1], f[n].i[0], (e.s - d) / g, (e.e - d) / g, l[i - 1]), this.addSegmentFromArray(c, r, s, v), v = !1, r.c = !1)
                    } else r.c = !1;
                    d += o.addedLength, s += 1
                }
                if (r._length && (r.setXYAt(r.v[h][0], r.v[h][1], "i", h), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > e.e) break;
                n < p - 1 && (r = shapePool.newElement(), v = !0, m.push(r), s = 0)
            }
            return m
        }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function(t, e) {
            var r, n = shapePool.newElement();
            n.c = t.c;
            var i, a, o, s, l, c, h, u, f, p, d, m, v = t._length,
                g = 0;
            for (r = 0; r < v; r += 1) i = t.v[r], o = t.o[r], a = t.i[r], i[0] === o[0] && i[1] === o[1] && i[0] === a[0] && i[1] === a[1] ? 0 !== r && r !== v - 1 || t.c ? (s = 0 === r ? t.v[v - 1] : t.v[r - 1], c = (l = Math.sqrt(Math.pow(i[0] - s[0], 2) + Math.pow(i[1] - s[1], 2))) ? Math.min(l / 2, e) / l : 0, h = d = i[0] + (s[0] - i[0]) * c, u = m = i[1] - (i[1] - s[1]) * c, f = h - (h - i[0]) * roundCorner, p = u - (u - i[1]) * roundCorner, n.setTripleAt(h, u, f, p, d, m, g), g += 1, s = r === v - 1 ? t.v[0] : t.v[r + 1], c = (l = Math.sqrt(Math.pow(i[0] - s[0], 2) + Math.pow(i[1] - s[1], 2))) ? Math.min(l / 2, e) / l : 0, h = f = i[0] + (s[0] - i[0]) * c, u = p = i[1] + (s[1] - i[1]) * c, d = h - (h - i[0]) * roundCorner, m = u - (u - i[1]) * roundCorner, n.setTripleAt(h, u, f, p, d, m, g)) : n.setTripleAt(i[0], i[1], o[0], o[1], a[0], a[1], g) : n.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], g), g += 1;
            return n
        }, RoundCornersModifier.prototype.processShapes = function(t) {
            var e, r, n, i, a, o, s = this.shapes.length,
                l = this.rd.v;
            if (0 !== l)
                for (r = 0; r < s; r += 1) {
                    if (o = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                        for (o.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) o.addShape(this.processPath(e[n], l));
                    a.shape.paths = a.localShapeCollection
                }
            this.dynamicProperties.length || (this._mdf = !1)
        }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
            var r = e / 100,
                n = [0, 0],
                i = t._length,
                a = 0;
            for (a = 0; a < i; a += 1) n[0] += t.v[a][0], n[1] += t.v[a][1];
            n[0] /= i, n[1] /= i;
            var o, s, l, c, h, u, f = shapePool.newElement();
            for (f.c = t.c, a = 0; a < i; a += 1) o = t.v[a][0] + (n[0] - t.v[a][0]) * r, s = t.v[a][1] + (n[1] - t.v[a][1]) * r, l = t.o[a][0] + (n[0] - t.o[a][0]) * -r, c = t.o[a][1] + (n[1] - t.o[a][1]) * -r, h = t.i[a][0] + (n[0] - t.i[a][0]) * -r, u = t.i[a][1] + (n[1] - t.i[a][1]) * -r, f.setTripleAt(o, s, l, c, h, u, a);
            return f
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
            var e, r, n, i, a, o, s = this.shapes.length,
                l = this.amount.v;
            if (0 !== l)
                for (r = 0; r < s; r += 1) {
                    if (o = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                        for (o.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) o.addShape(this.processPath(e[n], l));
                    a.shape.paths = a.localShapeCollection
                }
            this.dynamicProperties.length || (this._mdf = !1)
        }, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, n, i, a) {
            var o = a ? -1 : 1,
                s = n.s.v[0] + (1 - n.s.v[0]) * (1 - i),
                l = n.s.v[1] + (1 - n.s.v[1]) * (1 - i);
            t.translate(n.p.v[0] * o * i, n.p.v[1] * o * i, n.p.v[2]), e.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), e.rotate(-n.r.v * o * i), e.translate(n.a.v[0], n.a.v[1], n.a.v[2]), r.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), r.scale(a ? 1 / s : s, a ? 1 / l : l), r.translate(n.a.v[0], n.a.v[1], n.a.v[2])
        }, RepeaterModifier.prototype.init = function(t, e, r, n) {
            for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = n, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); 0 < r;) r -= 1, this._elements.unshift(e[r]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
        }, RepeaterModifier.prototype.cloneElements = function(t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e), e
        }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
            var r, n = t.length;
            for (r = 0; r < n; r += 1) t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e)
        }, RepeaterModifier.prototype.processShapes = function(t) {
            var e, r, n, i, a, o = !1;
            if (this._mdf || t) {
                var s, l = Math.ceil(this.c.v);
                if (this._groups.length < l) {
                    for (; this._groups.length < l;) {
                        var c = {
                            it: this.cloneElements(this._elements),
                            ty: "gr"
                        };
                        c.it.push({
                            a: {
                                a: 0,
                                ix: 1,
                                k: [0, 0]
                            },
                            nm: "Transform",
                            o: {
                                a: 0,
                                ix: 7,
                                k: 100
                            },
                            p: {
                                a: 0,
                                ix: 2,
                                k: [0, 0]
                            },
                            r: {
                                a: 1,
                                ix: 6,
                                k: [{
                                    s: 0,
                                    e: 0,
                                    t: 0
                                }, {
                                    s: 0,
                                    e: 0,
                                    t: 1
                                }]
                            },
                            s: {
                                a: 0,
                                ix: 3,
                                k: [100, 100]
                            },
                            sa: {
                                a: 0,
                                ix: 5,
                                k: 0
                            },
                            sk: {
                                a: 0,
                                ix: 4,
                                k: 0
                            },
                            ty: "tr"
                        }), this.arr.splice(0, 0, c), this._groups.splice(0, 0, c), this._currentCopies += 1
                    }
                    this.elem.reloadShapes(), o = !0
                }
                for (n = a = 0; n <= this._groups.length - 1; n += 1) {
                    if (s = a < l, this._groups[n]._render = s, this.changeGroupRender(this._groups[n].it, s), !s) {
                        var h = this.elemsData[n].it,
                            u = h[h.length - 1];
                        0 !== u.transform.op.v ? (u.transform.op._mdf = !0, u.transform.op.v = 0) : u.transform.op._mdf = !1
                    }
                    a += 1
                }
                this._currentCopies = l;
                var f = this.o.v,
                    p = f % 1,
                    d = 0 < f ? Math.floor(f) : Math.ceil(f),
                    m = this.pMatrix.props,
                    v = this.rMatrix.props,
                    g = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var y, E, b = 0;
                if (0 < f) {
                    for (; b < d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), b += 1;
                    p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1), b += p)
                } else if (f < 0) {
                    for (; d < b;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), b -= 1;
                    p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0), b -= p)
                }
                for (n = 1 === this.data.m ? 0 : this._currentCopies - 1, i = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
                    if (E = (r = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1)), 0 !== b) {
                        for ((0 !== n && 1 === i || n !== this._currentCopies - 1 && -1 === i) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), y = 0; y < E; y += 1) r[y] = this.matrix.props[y];
                        this.matrix.reset()
                    } else
                        for (this.matrix.reset(), y = 0; y < E; y += 1) r[y] = this.matrix.props[y];
                    b += 1, a -= 1, n += i
                }
            } else
                for (a = this._currentCopies, n = 0, i = 1; a;) r = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, n += i;
            return o
        }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function() {
            var t;
            for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
            this._length = 0
        }, DashProperty.prototype.getValue = function(t) {
            if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                var e = 0,
                    r = this.dataProps.length;
                for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
            }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
            for (var r = 0, n = this.o.length / 2; r < n;) {
                if (.01 < Math.abs(t[4 * r] - t[4 * e + 2 * r])) return !1;
                r += 1
            }
            return !0
        }, GradientProperty.prototype.checkCollapsable = function() {
            if (this.o.length / 2 != this.c.length / 4) return !1;
            if (this.data.k.k[0].s)
                for (var t = 0, e = this.data.k.k.length; t < e;) {
                    if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                    t += 1
                } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0
        }, GradientProperty.prototype.getValue = function(t) {
            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                var e, r, n, i = 4 * this.data.p;
                for (e = 0; e < i; e += 1) r = e % 4 == 0 ? 100 : 255, n = Math.round(this.prop.v[e] * r), this.c[e] !== n && (this.c[e] = n, this._cmdf = !t);
                if (this.o.length)
                    for (i = this.prop.v.length, e = 4 * this.data.p; e < i; e += 1) r = e % 2 == 0 ? 100 : 1, n = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== n && (this.o[e - 4 * this.data.p] = n, this._omdf = !t);
                this._mdf = !t
            }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty);
        var buildShapeString = function(t, e, r, n) {
                if (0 === e) return "";
                var i, a = t.o,
                    o = t.i,
                    s = t.v,
                    l = " M" + n.applyToPointStringified(s[0][0], s[0][1]);
                for (i = 1; i < e; i += 1) l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(o[i][0], o[i][1]) + " " + n.applyToPointStringified(s[i][0], s[i][1]);
                return r && e && (l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(o[0][0], o[0][1]) + " " + n.applyToPointStringified(s[0][0], s[0][1]), l += "z"), l
            },
            audioControllerFactory = function() {
                function t(t) {
                    this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                }
                return t.prototype = {
                        addAudio: function(t) {
                            this.audios.push(t)
                        },
                        pause: function() {
                            var t, e = this.audios.length;
                            for (t = 0; t < e; t += 1) this.audios[t].pause()
                        },
                        resume: function() {
                            var t, e = this.audios.length;
                            for (t = 0; t < e; t += 1) this.audios[t].resume()
                        },
                        setRate: function(t) {
                            var e, r = this.audios.length;
                            for (e = 0; e < r; e += 1) this.audios[e].setRate(t)
                        },
                        createAudio: function(t) {
                            return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({
                                src: [t]
                            }) : {
                                isPlaying: !1,
                                play: function() {
                                    this.isPlaying = !0
                                },
                                seek: function() {
                                    this.isPlaying = !1
                                },
                                playing: function() {},
                                rate: function() {},
                                setVolume: function() {}
                            }
                        },
                        setAudioFactory: function(t) {
                            this.audioFactory = t
                        },
                        setVolume: function(t) {
                            this._volume = t, this._updateVolume()
                        },
                        mute: function() {
                            this._isMuted = !0, this._updateVolume()
                        },
                        unmute: function() {
                            this._isMuted = !1, this._updateVolume()
                        },
                        getVolume: function() {
                            return this._volume
                        },
                        _updateVolume: function() {
                            var t, e = this.audios.length;
                            for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                        }
                    },
                    function() {
                        return new t
                    }
            }(),
            ImagePreloader = function() {
                var t = function() {
                    var t = createTag("canvas");
                    t.width = 1, t.height = 1;
                    var e = t.getContext("2d");
                    return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                }();

                function e() {
                    this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }

                function r() {
                    this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }

                function n(t, e, r) {
                    var n = "";
                    if (t.e) n = t.p;
                    else if (e) {
                        var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), n = e + i
                    } else n = r, n += t.u ? t.u : "", n += t.p;
                    return n
                }

                function i() {
                    this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = function(t) {
                        var e = 0,
                            r = setInterval(function() {
                                (t.getBBox().width || 500 < e) && (this._imageLoaded(), clearInterval(r)), e += 1
                            }.bind(this), 50)
                    }.bind(this), this.createFootageData = function(t) {
                        var e = {
                                assetData: t
                            },
                            r = n(t, this.assetsPath, this.path);
                        return assetLoader.load(r, function(t) {
                            e.img = t, this._footageLoaded()
                        }.bind(this), function() {
                            e.img = {}, this._footageLoaded()
                        }.bind(this)), e
                    }.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                }
                return i.prototype = {
                    loadAssets: function(t, e) {
                        var r;
                        this.imagesLoadedCb = e;
                        var n = t.length;
                        for (r = 0; r < n; r += 1) t[r].layers || (t[r].t && "seq" !== t[r].t ? 3 === t[r].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[r]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[r]))))
                    },
                    setAssetsPath: function(t) {
                        this.assetsPath = t || ""
                    },
                    setPath: function(t) {
                        this.path = t || ""
                    },
                    loadedImages: function() {
                        return this.totalImages === this.loadedAssets
                    },
                    loadedFootages: function() {
                        return this.totalFootages === this.loadedFootagesCount
                    },
                    destroy: function() {
                        this.imagesLoadedCb = null, this.images.length = 0
                    },
                    getAsset: function(t) {
                        for (var e = 0, r = this.images.length; e < r;) {
                            if (this.images[e].assetData === t) return this.images[e].img;
                            e += 1
                        }
                        return null
                    },
                    createImgData: function(e) {
                        var r = n(e, this.assetsPath, this.path),
                            i = createTag("img");
                        i.crossOrigin = "anonymous", i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() {
                            a.img = t, this._imageLoaded()
                        }.bind(this), !1), i.src = r;
                        var a = {
                            img: i,
                            assetData: e
                        };
                        return a
                    },
                    createImageData: function(e) {
                        var r = n(e, this.assetsPath, this.path),
                            i = createNS("image");
                        isSafari ? this.testImageLoaded(i) : i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() {
                            a.img = t, this._imageLoaded()
                        }.bind(this), !1), i.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this._elementHelper.append ? this._elementHelper.append(i) : this._elementHelper.appendChild(i);
                        var a = {
                            img: i,
                            assetData: e
                        };
                        return a
                    },
                    imageLoaded: e,
                    footageLoaded: r,
                    setCacheType: function(t, e) {
                        this._createImageData = "svg" === t ? (this._elementHelper = e, this.createImageData.bind(this)) : this.createImgData.bind(this)
                    }
                }, i
            }(),
            featureSupport = (zx = {
                maskType: !0
            }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (zx.maskType = !1), zx),
            zx, filtersFactory = (Ax = {}, Ax.createFilter = function(t, e) {
                var r = createNS("filter");
                return r.setAttribute("id", t), !0 !== e && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r
            }, Ax.createAlphaToLuminanceFilter = function() {
                var t = createNS("feColorMatrix");
                return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
            }, Ax),
            Ax, assetLoader = function() {
                function t(t) {
                    return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                }
                return {
                    load: function(e, r, n) {
                        var i, a = new XMLHttpRequest;
                        try {
                            a.responseType = "json"
                        } catch (e) {}
                        a.onreadystatechange = function() {
                            if (4 === a.readyState)
                                if (200 === a.status) i = t(a), r(i);
                                else try {
                                    i = t(a), r(i)
                                } catch (t) {
                                    n && n(t)
                                }
                        }, a.open("GET", e, !0), a.send()
                    }
                }
            }();

        function TextAnimatorProperty(t, e, r) {
            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                alignment: {}
            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
        }

        function TextAnimatorDataProperty(t, e, r) {
            var n = {
                    propType: !1
                },
                i = PropertyFactory.getProp,
                a = e.a;
            this.a = {
                r: a.r ? i(t, a.r, 0, degToRads, r) : n,
                rx: a.rx ? i(t, a.rx, 0, degToRads, r) : n,
                ry: a.ry ? i(t, a.ry, 0, degToRads, r) : n,
                sk: a.sk ? i(t, a.sk, 0, degToRads, r) : n,
                sa: a.sa ? i(t, a.sa, 0, degToRads, r) : n,
                s: a.s ? i(t, a.s, 1, .01, r) : n,
                a: a.a ? i(t, a.a, 1, 0, r) : n,
                o: a.o ? i(t, a.o, 0, .01, r) : n,
                p: a.p ? i(t, a.p, 1, 0, r) : n,
                sw: a.sw ? i(t, a.sw, 0, 0, r) : n,
                sc: a.sc ? i(t, a.sc, 1, 0, r) : n,
                fc: a.fc ? i(t, a.fc, 1, 0, r) : n,
                fh: a.fh ? i(t, a.fh, 0, 0, r) : n,
                fs: a.fs ? i(t, a.fs, 0, .01, r) : n,
                fb: a.fb ? i(t, a.fb, 0, .01, r) : n,
                t: a.t ? i(t, a.t, 0, 0, r) : n
            }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
        }

        function LetterProps(t, e, r, n, i, a) {
            this.o = t, this.sw = e, this.sc = r, this.fc = n, this.m = i, this.p = a, this._mdf = {
                o: !0,
                sw: !!e,
                sc: !!r,
                fc: !!n,
                m: !0,
                p: !0
            }
        }

        function TextProperty(t, e) {
            this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1
            }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }
        TextAnimatorProperty.prototype.searchProperties = function() {
            var t, e, r = this._textData.a.length,
                n = PropertyFactory.getProp;
            for (t = 0; t < r; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                f: n(this._elem, this._textData.p.f, 0, 0, this),
                l: n(this._elem, this._textData.p.l, 0, 0, this),
                r: this._textData.p.r,
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
            if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                this._isFirstFrame = !1;
                var r, n, i, a, o, s, l, c, h, u, f, p, d, m, v, g, y, E, b, _ = this._moreOptions.alignment.v,
                    x = this._animatorsData,
                    w = this._textData,
                    A = this.mHelper,
                    S = this._renderType,
                    T = this.renderedLetters.length,
                    I = t.l;
                if (this._hasMaskedPath) {
                    if (b = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var P, C = b.v;
                        for (this._pathData.r && (C = C.reverse()), o = {
                                tLength: 0,
                                segments: []
                            }, a = C._length - 1, i = g = 0; i < a; i += 1) P = bez.buildBezierData(C.v[i], C.v[i + 1], [C.o[i][0] - C.v[i][0], C.o[i][1] - C.v[i][1]], [C.i[i + 1][0] - C.v[i + 1][0], C.i[i + 1][1] - C.v[i + 1][1]]), o.tLength += P.segmentLength, o.segments.push(P), g += P.segmentLength;
                        i = a, b.v.c && (P = bez.buildBezierData(C.v[i], C.v[0], [C.o[i][0] - C.v[i][0], C.o[i][1] - C.v[i][1]], [C.i[0][0] - C.v[0][0], C.i[0][1] - C.v[0][1]]), o.tLength += P.segmentLength, o.segments.push(P), g += P.segmentLength), this._pathData.pi = o
                    }
                    if (o = this._pathData.pi, s = this._pathData.f.v, u = 1, h = !(c = f = 0), m = o.segments, s < 0 && b.v.c)
                        for (o.tLength < Math.abs(s) && (s = -Math.abs(s) % o.tLength), u = (d = m[f = m.length - 1].points).length - 1; s < 0;) s += d[u].partialLength, (u -= 1) < 0 && (u = (d = m[f -= 1].points).length - 1);
                    p = (d = m[f].points)[u - 1], v = (l = d[u]).partialLength
                }
                a = I.length, n = r = 0;
                var D, M, O, k, R, F = 1.2 * t.finalSize * .714,
                    L = !0;
                O = x.length;
                var N, V, B, G, j, z, H, W, X, U, q, Y, K = -1,
                    $ = s,
                    Q = f,
                    Z = u,
                    J = -1,
                    tt = "",
                    et = this.defaultPropsArray;
                if (2 === t.j || 1 === t.j) {
                    var rt = 0,
                        nt = 0,
                        it = 2 === t.j ? -.5 : -1,
                        at = 0,
                        ot = !0;
                    for (i = 0; i < a; i += 1)
                        if (I[i].n) {
                            for (rt && (rt += nt); at < i;) I[at].animatorJustifyOffset = rt, at += 1;
                            ot = !(rt = 0)
                        } else {
                            for (M = 0; M < O; M += 1)(D = x[M].a).t.propType && (ot && 2 === t.j && (nt += D.t.v * it), (R = x[M].s.getMult(I[i].anIndexes[M], w.a[M].s.totalChars)).length ? rt += D.t.v * R[0] * it : rt += D.t.v * R * it);
                            ot = !1
                        }
                    for (rt && (rt += nt); at < i;) I[at].animatorJustifyOffset = rt, at += 1
                }
                for (i = 0; i < a; i += 1) {
                    if (A.reset(), G = 1, I[i].n) r = 0, n += t.yOffset, n += L ? 1 : 0, s = $, L = !1, this._hasMaskedPath && (u = Z, p = (d = m[f = Q].points)[u - 1], v = (l = d[u]).partialLength, c = 0), Y = X = q = tt = "", et = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (J !== I[i].line) {
                                switch (t.j) {
                                    case 1:
                                        s += g - t.lineWidths[I[i].line];
                                        break;
                                    case 2:
                                        s += (g - t.lineWidths[I[i].line]) / 2
                                }
                                J = I[i].line
                            }
                            K !== I[i].ind && (I[K] && (s += I[K].extra), s += I[i].an / 2, K = I[i].ind), s += _[0] * I[i].an * .005;
                            var st = 0;
                            for (M = 0; M < O; M += 1)(D = x[M].a).p.propType && ((R = x[M].s.getMult(I[i].anIndexes[M], w.a[M].s.totalChars)).length ? st += D.p.v[0] * R[0] : st += D.p.v[0] * R), D.a.propType && ((R = x[M].s.getMult(I[i].anIndexes[M], w.a[M].s.totalChars)).length ? st += D.a.v[0] * R[0] : st += D.a.v[0] * R);
                            for (h = !0; h;) s + st <= c + v || !d ? (y = (s + st - c) / l.partialLength, V = p.point[0] + (l.point[0] - p.point[0]) * y, B = p.point[1] + (l.point[1] - p.point[1]) * y, A.translate(-_[0] * I[i].an * .005, -_[1] * F * .01), h = !1) : d && (c += l.partialLength, (u += 1) >= d.length && (u = 0, d = m[f += 1] ? m[f].points : b.v.c ? m[f = u = 0].points : (c -= l.partialLength, null)), d && (p = l, v = (l = d[u]).partialLength));
                            N = I[i].an / 2 - I[i].add, A.translate(-N, 0, 0)
                        } else N = I[i].an / 2 - I[i].add, A.translate(-N, 0, 0), A.translate(-_[0] * I[i].an * .005, -_[1] * F * .01, 0);
                        for (M = 0; M < O; M += 1)(D = x[M].a).t.propType && (R = x[M].s.getMult(I[i].anIndexes[M], w.a[M].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? R.length ? s += D.t.v * R[0] : s += D.t.v * R : R.length ? r += D.t.v * R[0] : r += D.t.v * R));
                        for (t.strokeWidthAnim && (z = t.sw || 0), t.strokeColorAnim && (j = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), M = 0; M < O; M += 1)(D = x[M].a).a.propType && ((R = x[M].s.getMult(I[i].anIndexes[M], w.a[M].s.totalChars)).length ? A.translate(-D.a.v[0] * R[0], -D.a.v[1] * R[1], D.a.v[2] * R[2]) : A.translate(-D.a.v[0] * R, -D.a.v[1] * R, D.a.v[2] * R));
                        for (M = 0; M < O; M += 1)(D = x[M].a).s.propType && ((R = x[M].s.getMult(I[i].anIndexes[M], w.a[M].s.totalChars)).length ? A.scale(1 + (D.s.v[0] - 1) * R[0], 1 + (D.s.v[1] - 1) * R[1], 1) : A.scale(1 + (D.s.v[0] - 1) * R, 1 + (D.s.v[1] - 1) * R, 1));
                        for (M = 0; M < O; M += 1) {
                            if (D = x[M].a, R = x[M].s.getMult(I[i].anIndexes[M], w.a[M].s.totalChars), D.sk.propType && (R.length ? A.skewFromAxis(-D.sk.v * R[0], D.sa.v * R[1]) : A.skewFromAxis(-D.sk.v * R, D.sa.v * R)), D.r.propType && (R.length ? A.rotateZ(-D.r.v * R[2]) : A.rotateZ(-D.r.v * R)), D.ry.propType && (R.length ? A.rotateY(D.ry.v * R[1]) : A.rotateY(D.ry.v * R)), D.rx.propType && (R.length ? A.rotateX(D.rx.v * R[0]) : A.rotateX(D.rx.v * R)), D.o.propType && (R.length ? G += (D.o.v * R[0] - G) * R[0] : G += (D.o.v * R - G) * R), t.strokeWidthAnim && D.sw.propType && (R.length ? z += D.sw.v * R[0] : z += D.sw.v * R), t.strokeColorAnim && D.sc.propType)
                                for (W = 0; W < 3; W += 1) R.length ? j[W] += (D.sc.v[W] - j[W]) * R[0] : j[W] += (D.sc.v[W] - j[W]) * R;
                            if (t.fillColorAnim && t.fc) {
                                if (D.fc.propType)
                                    for (W = 0; W < 3; W += 1) R.length ? H[W] += (D.fc.v[W] - H[W]) * R[0] : H[W] += (D.fc.v[W] - H[W]) * R;
                                D.fh.propType && (H = R.length ? addHueToRGB(H, D.fh.v * R[0]) : addHueToRGB(H, D.fh.v * R)), D.fs.propType && (H = R.length ? addSaturationToRGB(H, D.fs.v * R[0]) : addSaturationToRGB(H, D.fs.v * R)), D.fb.propType && (H = R.length ? addBrightnessToRGB(H, D.fb.v * R[0]) : addBrightnessToRGB(H, D.fb.v * R))
                            }
                        }
                        for (M = 0; M < O; M += 1)(D = x[M].a).p.propType && (R = x[M].s.getMult(I[i].anIndexes[M], w.a[M].s.totalChars), this._hasMaskedPath ? R.length ? A.translate(0, D.p.v[1] * R[0], -D.p.v[2] * R[1]) : A.translate(0, D.p.v[1] * R, -D.p.v[2] * R) : R.length ? A.translate(D.p.v[0] * R[0], D.p.v[1] * R[1], -D.p.v[2] * R[2]) : A.translate(D.p.v[0] * R, D.p.v[1] * R, -D.p.v[2] * R));
                        if (t.strokeWidthAnim && (X = z < 0 ? 0 : z), t.strokeColorAnim && (U = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), t.fillColorAnim && t.fc && (q = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                            if (A.translate(0, -t.ls), A.translate(0, _[1] * F * .01 + n, 0), w.p.p) {
                                E = (l.point[1] - p.point[1]) / (l.point[0] - p.point[0]);
                                var lt = 180 * Math.atan(E) / Math.PI;
                                l.point[0] < p.point[0] && (lt += 180), A.rotate(-lt * Math.PI / 180)
                            }
                            A.translate(V, B, 0), s -= _[0] * I[i].an * .005, I[i + 1] && K !== I[i + 1].ind && (s += I[i].an / 2, s += .001 * t.tr * t.finalSize)
                        } else {
                            switch (A.translate(r, n, 0), t.ps && A.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                case 1:
                                    A.translate(I[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[I[i].line]), 0, 0);
                                    break;
                                case 2:
                                    A.translate(I[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[I[i].line]) / 2, 0, 0)
                            }
                            A.translate(0, -t.ls), A.translate(N, 0, 0), A.translate(_[0] * I[i].an * .005, _[1] * F * .01, 0), r += I[i].l + .001 * t.tr * t.finalSize
                        }
                        "html" === S ? tt = A.toCSS() : "svg" === S ? tt = A.to2dCSS() : et = [A.props[0], A.props[1], A.props[2], A.props[3], A.props[4], A.props[5], A.props[6], A.props[7], A.props[8], A.props[9], A.props[10], A.props[11], A.props[12], A.props[13], A.props[14], A.props[15]], Y = G
                    }
                    this.lettersChangedFlag = T <= i ? (k = new LetterProps(Y, X, U, q, tt, et), this.renderedLetters.push(k), T += 1, !0) : (k = this.renderedLetters[i]).update(Y, X, U, q, tt, et) || this.lettersChangedFlag
                }
            }
        }, TextAnimatorProperty.prototype.getValue = function() {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, r, n, i, a) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1;
            var o = this._mdf.p = !1;
            return this.o !== t && (this.o = t, o = this._mdf.o = !0), this.sw !== e && (this.sw = e, o = this._mdf.sw = !0), this.sc !== r && (this.sc = r, o = this._mdf.sc = !0), this.fc !== n && (this.fc = n, o = this._mdf.fc = !0), this.m !== i && (this.m = i, o = this._mdf.m = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, o = this._mdf.p = !0), o
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }, TextProperty.prototype.setCurrentData = function(t) {
            t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function() {
            return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function() {
            return this.kf = 1 < this.data.d.k.length, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function(t) {
            this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function(t) {
            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData,
                    r = this.keysIndex;
                if (this.lock) this.setCurrentData(this.currentData);
                else {
                    var n;
                    this.lock = !0, this._mdf = !1;
                    var i = this.effectsSequence.length,
                        a = t || this.data.d.k[this.keysIndex].s;
                    for (n = 0; n < i; n += 1) a = r !== this.keysIndex ? this.effectsSequence[n](a, a.t) : this.effectsSequence[n](this.currentData, a.t);
                    e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                }
            }
        }, TextProperty.prototype.getKeyframeValue = function() {
            for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, n = t.length; r <= n - 1 && !(r === n - 1 || t[r + 1].t > e);) r += 1;
            return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function(t) {
            for (var e, r, n = [], i = 0, a = t.length, o = !1; i < a;) e = t.charCodeAt(i), FontManager.isCombinedCharacter(e) ? n[n.length - 1] += t.charAt(i) : 55296 <= e && e <= 56319 ? 56320 <= (r = t.charCodeAt(i + 1)) && r <= 57343 ? (o || FontManager.isModifier(e, r) ? (n[n.length - 1] += t.substr(i, 2), o = !1) : n.push(t.substr(i, 2)), i += 1) : n.push(t.charAt(i)) : 56319 < e ? (r = t.charCodeAt(i + 1), FontManager.isZeroWidthJoiner(e, r) ? (o = !0, n[n.length - 1] += t.substr(i, 2), i += 1) : n.push(t.charAt(i))) : FontManager.isZeroWidthJoiner(e) ? (n[n.length - 1] += t.charAt(i), o = !0) : n.push(t.charAt(i)), i += 1;
            return n
        }, TextProperty.prototype.completeTextData = function(t) {
            t.__complete = !0;
            var e, r, n, i, a, o, s, l = this.elem.globalData.fontManager,
                c = this.data,
                h = [],
                u = 0,
                f = c.m.g,
                p = 0,
                d = 0,
                m = 0,
                v = [],
                g = 0,
                y = 0,
                E = l.getFontByName(t.f),
                b = 0,
                _ = getFontProperties(E);
            t.fWeight = _.weight, t.fStyle = _.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
            var x, w = t.tr / 1e3 * t.finalSize;
            if (t.sz)
                for (var A, S, T = !0, I = t.sz[0], P = t.sz[1]; T;) {
                    g = A = 0, r = (S = this.buildFinalText(t.t)).length, w = t.tr / 1e3 * t.finalSize;
                    var C = -1;
                    for (e = 0; e < r; e += 1) x = S[e].charCodeAt(0), n = !1, " " === S[e] ? C = e : 13 !== x && 3 !== x || (n = !(g = 0), A += t.finalLineHeight || 1.2 * t.finalSize), I < g + (b = l.chars ? (s = l.getCharData(S[e], E.fStyle, E.fFamily), n ? 0 : s.w * t.finalSize / 100) : l.measureText(S[e], t.f, t.finalSize)) && " " !== S[e] ? (-1 === C ? r += 1 : e = C, A += t.finalLineHeight || 1.2 * t.finalSize, S.splice(e, C === e ? 1 : 0, "\r"), C = -1, g = 0) : (g += b, g += w);
                    A += E.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && P < A ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = S, r = t.finalText.length, T = !1)
                }
            g = -w;
            var D, M = b = 0;
            for (e = 0; e < r; e += 1)
                if (n = !1, 13 === (x = (D = t.finalText[e]).charCodeAt(0)) || 3 === x ? (M = 0, v.push(g), y = y < g ? g : y, g = -2 * w, n = !(i = ""), m += 1) : i = D, b = l.chars ? (s = l.getCharData(D, E.fStyle, l.getFontByName(t.f).fFamily), n ? 0 : s.w * t.finalSize / 100) : l.measureText(i, t.f, t.finalSize), " " === D ? M += b + w : (g += b + w + M, M = 0), h.push({
                        l: b,
                        an: b,
                        add: p,
                        n: n,
                        anIndexes: [],
                        val: i,
                        line: m,
                        animatorJustifyOffset: 0
                    }), 2 == f) {
                    if (p += b, "" === i || " " === i || e === r - 1) {
                        for ("" !== i && " " !== i || (p -= b); d <= e;) h[d].an = p, h[d].ind = u, h[d].extra = b, d += 1;
                        u += 1, p = 0
                    }
                } else if (3 == f) {
                if (p += b, "" === i || e === r - 1) {
                    for ("" === i && (p -= b); d <= e;) h[d].an = p, h[d].ind = u, h[d].extra = b, d += 1;
                    p = 0, u += 1
                }
            } else h[u].ind = u, h[u].extra = 0, u += 1;
            if (t.l = h, y = y < g ? g : y, v.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
            else switch (t.boxWidth = y, t.j) {
                case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                default:
                    t.justifyOffset = 0
            }
            t.lineWidths = v;
            var O, k, R, F, L = c.a;
            o = L.length;
            var N = [];
            for (a = 0; a < o; a += 1) {
                for ((O = L[a]).a.sc && (t.strokeColorAnim = !0), O.a.sw && (t.strokeWidthAnim = !0), (O.a.fc || O.a.fh || O.a.fs || O.a.fb) && (t.fillColorAnim = !0), F = 0, R = O.s.b, e = 0; e < r; e += 1)(k = h[e]).anIndexes[a] = F, (1 == R && "" !== k.val || 2 == R && "" !== k.val && " " !== k.val || 3 == R && (k.n || " " == k.val || e == r - 1) || 4 == R && (k.n || e == r - 1)) && (1 === O.s.rn && N.push(F), F += 1);
                c.a[a].s.totalChars = F;
                var V, B = -1;
                if (1 === O.s.rn)
                    for (e = 0; e < r; e += 1) B != (k = h[e]).anIndexes[a] && (B = k.anIndexes[a], V = N.splice(Math.floor(Math.random() * N.length), 1)[0]), k.anIndexes[a] = V
            }
            t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = E.ascent * t.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function(t, e) {
            e = void 0 === e ? this.keysIndex : e;
            var r = this.copyData({}, this.data.d.k[e].s);
            r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function(t) {
            var e = this.data.d.k[t].s;
            e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
        }, TextProperty.prototype.canResizeFont = function(t) {
            this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function(t) {
            this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function() {
                var t = Math.max,
                    e = Math.min,
                    r = Math.floor;

                function n(t, e) {
                    this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                        k: 0
                    }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                        v: 100
                    }, this.o = PropertyFactory.getProp(t, e.o || {
                        k: 0
                    }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                        k: 0
                    }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                        k: 0
                    }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                }
                return n.prototype = {
                    getMult: function(n) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var i = 0,
                            a = 0,
                            o = 1,
                            s = 1;
                        0 < this.ne.v ? i = this.ne.v / 100 : a = -this.ne.v / 100, 0 < this.xe.v ? o = 1 - this.xe.v / 100 : s = 1 + this.xe.v / 100;
                        var l = BezierFactory.getBezierEasing(i, a, o, s).get,
                            c = 0,
                            h = this.finalS,
                            u = this.finalE,
                            f = this.data.sh;
                        if (2 === f) c = l(c = u === h ? u <= n ? 1 : 0 : t(0, e(.5 / (u - h) + (n - h) / (u - h), 1)));
                        else if (3 === f) c = l(c = u === h ? u <= n ? 0 : 1 : 1 - t(0, e(.5 / (u - h) + (n - h) / (u - h), 1)));
                        else if (4 === f) u === h ? c = 0 : (c = t(0, e(.5 / (u - h) + (n - h) / (u - h), 1))) < .5 ? c *= 2 : c = 1 - 2 * (c - .5), c = l(c);
                        else if (5 === f) {
                            if (u === h) c = 0;
                            else {
                                var p = u - h,
                                    d = -p / 2 + (n = e(t(0, n + .5 - h), u - h)),
                                    m = p / 2;
                                c = Math.sqrt(1 - d * d / (m * m))
                            }
                            c = l(c)
                        } else c = 6 === f ? l(c = u === h ? 0 : (n = e(t(0, n + .5 - h), u - h), (1 + Math.cos(Math.PI + 2 * Math.PI * n / (u - h))) / 2)) : (n >= r(h) && (c = t(0, e(n - h < 0 ? e(u, 1) - (h - n) : u - n, 1))), l(c));
                        return c * this.a.v
                    },
                    getValue: function(t) {
                        this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                        var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                            r = this.o.v / e,
                            n = this.s.v / e + r,
                            i = this.e.v / e + r;
                        if (i < n) {
                            var a = n;
                            n = i, i = a
                        }
                        this.finalS = n, this.finalE = i
                    }
                }, extendPrototype([DynamicPropertyContainer], n), {
                    getTextSelectorProp: function(t, e, r) {
                        return new n(t, e, r)
                    }
                }
            }(),
            poolFactory = function(t, e, r) {
                var n = 0,
                    i = t,
                    a = createSizedArray(i);
                return {
                    newElement: function() {
                        return n ? a[n -= 1] : e()
                    },
                    release: function(t) {
                        n === i && (a = pooling.double(a), i *= 2), r && r(t), a[n] = t, n += 1
                    }
                }
            },
            pooling = {
                double: function(t) {
                    return t.concat(createSizedArray(t.length))
                }
            },
            pointPool = poolFactory(8, function() {
                return createTypedArray("float32", 2)
            }),
            shapePool = (IB = poolFactory(4, function() {
                return new ShapePath
            }, function(t) {
                var e, r = t._length;
                for (e = 0; e < r; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                t._length = 0, t.c = !1
            }), IB.clone = function(t) {
                var e, r = IB.newElement(),
                    n = void 0 === t._length ? t.v.length : t._length;
                for (r.setLength(n), r.c = t.c, e = 0; e < n; e += 1) r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                return r
            }, IB),
            IB, shapeCollectionPool = (QB = {
                newShapeCollection: function() {
                    return RB ? TB[RB -= 1] : new ShapeCollection
                },
                release: function(t) {
                    var e, r = t._length;
                    for (e = 0; e < r; e += 1) shapePool.release(t.shapes[e]);
                    t._length = 0, RB === SB && (TB = pooling.double(TB), SB *= 2), TB[RB] = t, RB += 1
                }
            }, RB = 0, SB = 4, TB = createSizedArray(SB), QB),
            QB, RB, SB, TB, segmentsLengthPool = poolFactory(8, function() {
                return {
                    lengths: [],
                    totalLength: 0
                }
            }, function(t) {
                var e, r = t.lengths.length;
                for (e = 0; e < r; e += 1) bezierLengthPool.release(t.lengths[e]);
                t.lengths.length = 0
            }),
            bezierLengthPool = poolFactory(8, function() {
                return {
                    addedLength: 0,
                    percents: createTypedArray("float32", defaultCurveSegments),
                    lengths: createTypedArray("float32", defaultCurveSegments)
                }
            }),
            markerParser = function() {
                function t(t) {
                    for (var e, r = t.split("\r\n"), n = {}, i = 0, a = 0; a < r.length; a += 1) 2 === (e = r[a].split(":")).length && (n[e[0]] = e[1].trim(), i += 1);
                    if (0 === i) throw new Error;
                    return n
                }
                return function(e) {
                    for (var r = [], n = 0; n < e.length; n += 1) {
                        var i = e[n],
                            a = {
                                time: i.tm,
                                duration: i.dr
                            };
                        try {
                            a.payload = JSON.parse(e[n].cm)
                        } catch (r) {
                            try {
                                a.payload = t(e[n].cm)
                            } catch (r) {
                                a.payload = {
                                    name: e[n]
                                }
                            }
                        }
                        r.push(a)
                    }
                    return r
                }
            }();

        function BaseRenderer() {}

        function SVGRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
            var r = "";
            if (e && e.title) {
                var n = createNS("title"),
                    i = createElementID();
                n.setAttribute("id", i), n.textContent = e.title, this.svgElement.appendChild(n), r += i
            }
            if (e && e.description) {
                var a = createNS("desc"),
                    o = createElementID();
                a.setAttribute("id", o), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + o
            }
            r && this.svgElement.setAttribute("aria-labelledby", r);
            var s = createNS("defs");
            this.svgElement.appendChild(s);
            var l = createNS("g");
            this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                progressiveLoad: e && e.progressiveLoad || !1,
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                viewBoxOnly: e && e.viewBoxOnly || !1,
                viewBoxSize: e && e.viewBoxSize || !1,
                className: e && e.className || "",
                id: e && e.id || "",
                focusable: e && e.focusable,
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "100%",
                    height: e && e.filterSize && e.filterSize.height || "100%",
                    x: e && e.filterSize && e.filterSize.x || "0%",
                    y: e && e.filterSize && e.filterSize.y || "0%"
                }
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: s,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }

        function CanvasRenderer(t, e) {
            this.animationItem = t, this.renderConfig = {
                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                context: e && e.context || null,
                progressiveLoad: e && e.progressiveLoad || !1,
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                className: e && e.className || "",
                id: e && e.id || ""
            }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
        }

        function HybridRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "400%",
                    height: e && e.filterSize && e.filterSize.height || "400%",
                    x: e && e.filterSize && e.filterSize.x || "-100%",
                    y: e && e.filterSize && e.filterSize.y || "-100%"
                }
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        function MaskElement(t, e, r) {
            this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var n, i, a = this.globalData.defs,
                o = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(o), this.solidPath = "";
            var s, l, c, h, u, f, p = this.masksProperties,
                d = 0,
                m = [],
                v = createElementID(),
                g = "clipPath",
                y = "clip-path";
            for (n = 0; n < o; n += 1)
                if (("a" !== p[n].mode && "n" !== p[n].mode || p[n].inv || 100 !== p[n].o.k || p[n].o.x) && (y = g = "mask"), "s" !== p[n].mode && "i" !== p[n].mode || 0 !== d ? c = null : ((c = createNS("rect")).setAttribute("fill", "#ffffff"), c.setAttribute("width", this.element.comp.data.w || 0), c.setAttribute("height", this.element.comp.data.h || 0), m.push(c)), i = createNS("path"), "n" === p[n].mode) this.viewData[n] = {
                    op: PropertyFactory.getProp(this.element, p[n].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, p[n], 3),
                    elem: i,
                    lastPath: ""
                }, a.appendChild(i);
                else {
                    var E;
                    if (d += 1, i.setAttribute("fill", "s" === p[n].mode ? "#000000" : "#ffffff"), i.setAttribute("clip-rule", "nonzero"), 0 !== p[n].x.k ? (y = g = "mask", f = PropertyFactory.getProp(this.element, p[n].x, 0, null, this.element), E = createElementID(), (h = createNS("filter")).setAttribute("id", E), (u = createNS("feMorphology")).setAttribute("operator", "erode"), u.setAttribute("in", "SourceGraphic"), u.setAttribute("radius", "0"), h.appendChild(u), a.appendChild(h), i.setAttribute("stroke", "s" === p[n].mode ? "#000000" : "#ffffff")) : f = u = null, this.storedData[n] = {
                            elem: i,
                            x: f,
                            expan: u,
                            lastPath: "",
                            lastOperator: "",
                            filterId: E,
                            lastRadius: 0
                        }, "i" === p[n].mode) {
                        l = m.length;
                        var b = createNS("g");
                        for (s = 0; s < l; s += 1) b.appendChild(m[s]);
                        var _ = createNS("mask");
                        _.setAttribute("mask-type", "alpha"), _.setAttribute("id", v + "_" + d), _.appendChild(i), a.appendChild(_), b.setAttribute("mask", "url(" + locationHref + "#" + v + "_" + d + ")"), m.length = 0, m.push(b)
                    } else m.push(i);
                    p[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[n] = {
                        elem: i,
                        lastPath: "",
                        op: PropertyFactory.getProp(this.element, p[n].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, p[n], 3),
                        invRect: c
                    }, this.viewData[n].prop.k || this.drawPath(p[n], this.viewData[n].prop.v, this.viewData[n])
                }
            for (this.maskElement = createNS(g), o = m.length, n = 0; n < o; n += 1) this.maskElement.appendChild(m[n]);
            0 < d && (this.maskElement.setAttribute("id", v), this.element.maskedElement.setAttribute(y, "url(" + locationHref + "#" + v + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }

        function HierarchyElement() {}

        function FrameElement() {}

        function TransformElement() {}

        function RenderableElement() {}

        function RenderableDOMElement() {}

        function ProcessedElement(t, e) {
            this.elem = t, this.pos = e
        }

        function SVGStyleData(t, e) {
            this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
        }

        function SVGShapeData(t, e, r) {
            this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
            for (var n = 0, i = t.length; n < i;) {
                if (t[n].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break
                }
                n += 1
            }
        }

        function SVGTransformData(t, e, r) {
            this.transform = {
                mProps: t,
                op: e,
                container: r
            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }

        function SVGStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
        }

        function SVGFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r
        }

        function SVGGradientFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r)
        }

        function SVGGradientStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated
        }

        function ShapeGroupData() {
            this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }
        BaseRenderer.prototype.checkLayers = function(t) {
            var e, r, n = this.layers.length;
            for (this.completeLayers = !0, e = n - 1; 0 <= e; e -= 1) this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
            this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function(t) {
            switch (t.ty) {
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 6:
                    return this.createAudio(t);
                case 13:
                    return this.createCamera(t);
                case 15:
                    return this.createFootage(t);
                default:
                    return this.createNull(t)
            }
        }, BaseRenderer.prototype.createCamera = function() {
            throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function(t) {
            return new AudioElement(t, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function(t) {
            return new FootageElement(t, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) this.buildItem(t);
            this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function(t) {
            var e;
            this.completeLayers = !1;
            var r, n = t.length,
                i = this.layers.length;
            for (e = 0; e < n; e += 1)
                for (r = 0; r < i;) {
                    if (this.layers[r].id === t[e].id) {
                        this.layers[r] = t[e];
                        break
                    }
                    r += 1
                }
        }, BaseRenderer.prototype.setProjectInterface = function(t) {
            this.globalData.projectInterface = t
        }, BaseRenderer.prototype.initItems = function() {
            this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
            for (var n = this.elements, i = this.layers, a = 0, o = i.length; a < o;) i[a].ind == e && (n[a] && !0 !== n[a] ? (r.push(n[a]), n[a].setAsParent(), void 0 !== i[a].parent ? this.buildElementParenting(t, i[a].parent, r) : t.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
        }, BaseRenderer.prototype.addPendingElement = function(t) {
            this.pendingElements.push(t)
        }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1)
                if (t[e].xt) {
                    var n = this.createComp(t[e]);
                    n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
                }
        }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
            this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                w: t.w,
                h: t.h
            }
        }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) {
            return new NullElement(t, this.globalData, this)
        }, SVGRenderer.prototype.createShape = function(t) {
            return new SVGShapeElement(t, this.globalData, this)
        }, SVGRenderer.prototype.createText = function(t) {
            return new SVGTextLottieElement(t, this.globalData, this)
        }, SVGRenderer.prototype.createImage = function(t) {
            return new IImageElement(t, this.globalData, this)
        }, SVGRenderer.prototype.createComp = function(t) {
            return new SVGCompElement(t, this.globalData, this)
        }, SVGRenderer.prototype.createSolid = function(t) {
            return new ISolidElement(t, this.globalData, this)
        }, SVGRenderer.prototype.configAnimation = function(t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
            var r = createNS("clipPath"),
                n = createNS("rect");
            n.setAttribute("width", t.w), n.setAttribute("height", t.h), n.setAttribute("x", 0), n.setAttribute("y", 0);
            var i = createElementID();
            r.setAttribute("id", i), r.appendChild(n), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + i + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
        }, SVGRenderer.prototype.destroy = function() {
            var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
                e[t] = !0;
                var r = this.createItem(this.layers[t]);
                e[t] = r, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? r.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(r)))
            }
        }, SVGRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) {
                var t = this.pendingElements.pop();
                if (t.checkParenting(), t.data.tt)
                    for (var e = 0, r = this.elements.length; e < r;) {
                        if (this.elements[e] === t) {
                            t.setMatte(this.elements[e - 1].layerId);
                            break
                        }
                        e += 1
                    }
            }
        }, SVGRenderer.prototype.renderFrame = function(t) {
            if (this.renderedFrame !== t && !this.destroyed) {
                var e;
                null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                var r = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), e = r - 1; 0 <= e; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf)
                    for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }
        }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
            var r = t.getBaseElement();
            if (r) {
                for (var n, i = 0; i < e;) this.elements[i] && !0 !== this.elements[i] && this.elements[i].getBaseElement() && (n = this.elements[i].getBaseElement()), i += 1;
                n ? this.layerElement.insertBefore(r, n) : this.layerElement.appendChild(r)
            }
        }, SVGRenderer.prototype.hide = function() {
            this.layerElement.style.display = "none"
        }, SVGRenderer.prototype.show = function() {
            this.layerElement.style.display = "block"
        }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) {
            return new CVShapeElement(t, this.globalData, this)
        }, CanvasRenderer.prototype.createText = function(t) {
            return new CVTextElement(t, this.globalData, this)
        }, CanvasRenderer.prototype.createImage = function(t) {
            return new CVImageElement(t, this.globalData, this)
        }, CanvasRenderer.prototype.createComp = function(t) {
            return new CVCompElement(t, this.globalData, this)
        }, CanvasRenderer.prototype.createSolid = function(t) {
            return new CVSolidElement(t, this.globalData, this)
        }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
            if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                if (this.renderConfig.clearCanvas) {
                    this.transformMat.cloneFromProps(t);
                    var e = this.contextData.cTr.props;
                    this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                    var r = this.contextData.cTr.props;
                    this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
                } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
        }, CanvasRenderer.prototype.ctxOpacity = function(t) {
            if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
            this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
        }, CanvasRenderer.prototype.reset = function() {
            this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
        }, CanvasRenderer.prototype.save = function(t) {
            if (this.renderConfig.clearCanvas) {
                t && this.canvasContext.save();
                var e, r = this.contextData.cTr.props;
                this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                var n = this.contextData.saved[this.contextData.cArrPos];
                for (e = 0; e < 16; e += 1) n[e] = r[e];
                this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
            } else this.canvasContext.save()
        }, CanvasRenderer.prototype.restore = function(t) {
            if (this.renderConfig.clearCanvas) {
                t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                var e, r = this.contextData.saved[this.contextData.cArrPos],
                    n = this.contextData.cTr.props;
                for (e = 0; e < 16; e += 1) n[e] = r[e];
                this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), r = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = r, this.globalData.currentGlobalAlpha !== r && (this.canvasContext.globalAlpha = r, this.globalData.currentGlobalAlpha = r)
            } else this.canvasContext.restore()
        }, CanvasRenderer.prototype.configAnimation = function(t) {
            if (this.animationItem.wrapper) {
                this.animationItem.container = createTag("canvas");
                var e = this.animationItem.container.style;
                e.width = "100%", e.height = "100%";
                var r = "0px 0px 0px";
                e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
            } else this.canvasContext = this.renderConfig.context;
            this.data = t, this.layers = t.layers, this.transformCanvas = {
                w: t.w,
                h: t.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0
            }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, (this.globalData.renderer = this).globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
        }, CanvasRenderer.prototype.updateContainerSize = function() {
            var t, e, r, n;
            if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                var i = this.renderConfig.preserveAspectRatio.split(" "),
                    a = i[1] || "meet",
                    o = i[0] || "xMidYMid",
                    s = o.substr(0, 4),
                    l = o.substr(4);
                r = t / e, n = this.transformCanvas.w / this.transformCanvas.h, this.transformCanvas.sy = r < n && "meet" === a || n < r && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === s && (n < r && "meet" === a || r < n && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === s && (n < r && "meet" === a || r < n && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === l && (r < n && "meet" === a || n < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === l && (r < n && "meet" === a || n < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
            } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0;
            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRenderer.prototype.destroy = function() {
            var t;
            for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; 0 <= t; t -= 1) this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRenderer.prototype.renderFrame = function(t, e) {
            if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                var r;
                this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                var n = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), r = 0; r < n; r += 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
                if (this.globalData._mdf) {
                    for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = n - 1; 0 <= r; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                    !0 !== this.renderConfig.clearCanvas && this.restore()
                }
            }
        }, CanvasRenderer.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
                var r = this.createItem(this.layers[t], this, this.globalData);
                (e[t] = r).initExpressions()
            }
        }, CanvasRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, CanvasRenderer.prototype.hide = function() {
            this.animationItem.container.style.display = "none"
        }, CanvasRenderer.prototype.show = function() {
            this.animationItem.container.style.display = "block"
        }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
            var r = t.getBaseElement();
            if (r) {
                var n = this.layers[e];
                if (n.ddd && this.supports3d) this.addTo3dContainer(r, e);
                else if (this.threeDElements) this.addTo3dContainer(r, e);
                else {
                    for (var i, a, o = 0; o < e;) this.elements[o] && !0 !== this.elements[o] && this.elements[o].getBaseElement && (a = this.elements[o], i = (this.layers[o].ddd ? this.getThreeDContainerByPos(o) : a.getBaseElement()) || i), o += 1;
                    i ? n.ddd && this.supports3d || this.layerElement.insertBefore(r, i) : n.ddd && this.supports3d || this.layerElement.appendChild(r)
                }
            }
        }, HybridRenderer.prototype.createShape = function(t) {
            return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
        }, HybridRenderer.prototype.createText = function(t) {
            return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
        }, HybridRenderer.prototype.createCamera = function(t) {
            return this.camera = new HCameraElement(t, this.globalData, this), this.camera
        }, HybridRenderer.prototype.createImage = function(t) {
            return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
        }, HybridRenderer.prototype.createComp = function(t) {
            return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        }, HybridRenderer.prototype.createSolid = function(t) {
            return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
        }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
            for (var e = 0, r = this.threeDElements.length; e < r;) {
                if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                e += 1
            }
            return null
        }, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
            var r, n, i = createTag("div");
            styleDiv(i);
            var a = createTag("div");
            if (styleDiv(a), "3d" === e) {
                (r = i.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
                var o = "50% 50%";
                r.webkitTransformOrigin = o, r.mozTransformOrigin = o, r.transformOrigin = o;
                var s = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                (n = a.style).transform = s, n.webkitTransform = s
            }
            i.appendChild(a);
            var l = {
                container: a,
                perspectiveElem: i,
                startPos: t,
                endPos: t,
                type: e
            };
            return this.threeDElements.push(l), l
        }, HybridRenderer.prototype.build3dContainers = function() {
            var t, e, r = this.layers.length,
                n = "";
            for (t = 0; t < r; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? "3d" !== n && (n = "3d", e = this.createThreeDContainer(t, "3d")) : "2d" !== n && (n = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t);
            for (t = (r = this.threeDElements.length) - 1; 0 <= t; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
            for (var r = 0, n = this.threeDElements.length; r < n;) {
                if (e <= this.threeDElements[r].endPos) {
                    for (var i, a = this.threeDElements[r].startPos; a < e;) this.elements[a] && this.elements[a].getBaseElement && (i = this.elements[a].getBaseElement()), a += 1;
                    i ? this.threeDElements[r].container.insertBefore(t, i) : this.threeDElements[r].container.appendChild(t);
                    break
                }
                r += 1
            }
        }, HybridRenderer.prototype.configAnimation = function(t) {
            var e = createTag("div"),
                r = this.animationItem.wrapper,
                n = e.style;
            n.width = t.w + "px", n.height = t.h + "px", styleDiv(this.resizerElem = e), n.transformStyle = "flat", n.mozTransformStyle = "flat", n.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), n.overflow = "hidden";
            var i = createNS("svg");
            i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
            var a = createNS("defs");
            i.appendChild(a), this.data = t, this.setupGlobalData(t, i), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRenderer.prototype.destroy = function() {
            var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRenderer.prototype.updateContainerSize = function() {
            var t, e, r, n, i = this.animationItem.wrapper.offsetWidth,
                a = this.animationItem.wrapper.offsetHeight;
            n = i / a < this.globalData.compSize.w / this.globalData.compSize.h ? (t = i / this.globalData.compSize.w, e = i / this.globalData.compSize.w, r = 0, (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, r = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, 0);
            var o = this.resizerElem.style;
            o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + n + ",0,1)", o.transform = o.webkitTransform
        }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
            this.resizerElem.style.display = "none"
        }, HybridRenderer.prototype.show = function() {
            this.resizerElem.style.display = "block"
        }, HybridRenderer.prototype.initItems = function() {
            if (this.buildAllItems(), this.camera) this.camera.setup();
            else {
                var t, e = this.globalData.compSize.w,
                    r = this.globalData.compSize.h,
                    n = this.threeDElements.length;
                for (t = 0; t < n; t += 1) {
                    var i = this.threeDElements[t].perspectiveElem.style;
                    i.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px", i.perspective = i.webkitPerspective
                }
            }
        }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
            var e, r = t.length,
                n = createTag("div");
            for (e = 0; e < r; e += 1)
                if (t[e].xt) {
                    var i = this.createComp(t[e], n, this.globalData.comp, null);
                    i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
                }
        }, MaskElement.prototype.getMaskProperty = function(t) {
            return this.viewData[t].prop
        }, MaskElement.prototype.renderFrame = function(t) {
            var e, r = this.element.finalTransform.mat,
                n = this.masksProperties.length;
            for (e = 0; e < n; e += 1)
                if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                    var i = this.storedData[e].expan;
                    this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), i.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                }
        }, MaskElement.prototype.getMaskelement = function() {
            return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function() {
            var t = "M0,0 ";
            return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
        }, MaskElement.prototype.drawPath = function(t, e, r) {
            var n, i, a = " M" + e.v[0][0] + "," + e.v[0][1];
            for (i = e._length, n = 1; n < i; n += 1) a += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[n][0] + "," + e.i[n][1] + " " + e.v[n][0] + "," + e.v[n][1];
            if (e.c && 1 < i && (a += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== a) {
                var o = "";
                r.elem && (e.c && (o = t.inv ? this.solidPath + a : a), r.elem.setAttribute("d", o)), r.lastPath = a
            }
        }, MaskElement.prototype.destroy = function() {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        }, HierarchyElement.prototype = {
            initHierarchy: function() {
                this.hierarchy = [], this._isParent = !1, this.checkParenting()
            },
            setHierarchy: function(t) {
                this.hierarchy = t
            },
            setAsParent: function() {
                this._isParent = !0
            },
            checkParenting: function() {
                void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
            }
        }, FrameElement.prototype = {
            initFrame: function() {
                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
            },
            prepareProperties: function(t, e) {
                var r, n = this.dynamicProperties.length;
                for (r = 0; r < n; r += 1)(e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
            },
            addDynamicProperty: function(t) {
                -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
            }
        }, TransformElement.prototype = {
            initTransform: function() {
                this.finalTransform = {
                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                        o: 0
                    },
                    _matMdf: !1,
                    _opMdf: !1,
                    mat: new Matrix
                }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
            },
            renderTransform: function() {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                    var t, e = this.finalTransform.mat,
                        r = 0,
                        n = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                        for (; r < n;) {
                            if (this.hierarchy[r].finalTransform.mProp._mdf) {
                                this.finalTransform._matMdf = !0;
                                break
                            }
                            r += 1
                        }
                    if (this.finalTransform._matMdf)
                        for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < n; r += 1) t = this.hierarchy[r].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                }
            },
            globalToLocal: function(t) {
                var e = [];
                e.push(this.finalTransform);
                for (var r, n = !0, i = this.comp; n;) i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : n = !1;
                var a, o = e.length;
                for (r = 0; r < o; r += 1) a = e[r].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
                return t
            },
            mHelper: new Matrix
        }, RenderableElement.prototype = {
            initRenderable: function() {
                this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
            },
            addRenderableComponent: function(t) {
                -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
            },
            removeRenderableComponent: function(t) {
                -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
            },
            prepareRenderableFrame: function(t) {
                this.checkLayerLimits(t)
            },
            checkTransparency: function() {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
            },
            checkLayerLimits: function(t) {
                this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
            },
            renderRenderable: function() {
                var t, e = this.renderableComponents.length;
                for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
            },
            sourceRectAtTime: function() {
                return {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                }
            },
            getLayerSize: function() {
                return 5 === this.data.ty ? {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                } : {
                    w: this.data.width,
                    h: this.data.height
                }
            }
        }, extendPrototype([RenderableElement, createProxyFunction({
            initElement: function(t, e, r) {
                this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
            },
            hide: function() {
                this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
            },
            show: function() {
                this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
            },
            renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
            },
            renderInnerContent: function() {},
            prepareFrame: function(t) {
                this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
            },
            destroy: function() {
                this.innerElem = null, this.destroyBaseElement()
            }
        })], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
            this.d = "", this._mdf = !1
        }, SVGShapeData.prototype.setAsAnimated = function() {
            this._isAnimated = !0
        }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
            this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                k: 0
            }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                k: 0
            }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
            var r = createElementID(),
                n = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            n.setAttribute("id", r), n.setAttribute("spreadMethod", "pad"), n.setAttribute("gradientUnits", "userSpaceOnUse");
            var i, a, o, s = [];
            for (o = 4 * e.g.p, a = 0; a < o; a += 4) i = createNS("stop"), n.appendChild(i), s.push(i);
            t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + r + ")"), this.gf = n, this.cst = s
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var r, n, i, a = createNS("mask"),
                    o = createNS("path");
                a.appendChild(o);
                var s = createElementID(),
                    l = createElementID();
                a.setAttribute("id", l);
                var c = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                c.setAttribute("id", s), c.setAttribute("spreadMethod", "pad"), c.setAttribute("gradientUnits", "userSpaceOnUse"), i = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var h = this.stops;
                for (n = 4 * t.g.p; n < i; n += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), c.appendChild(r), h.push(r);
                o.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + s + ")"), "gs" === t.ty && (o.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), o.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && o.setAttribute("stroke-miterlimit", t.ml)), this.of = c, this.ms = a, this.ost = h, this.maskId = l, e.msElem = o
            }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var SVGElementsRenderer = function() {
            var t = new Matrix,
                e = new Matrix;

            function r(t, e, r) {
                (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
            }

            function n(r, n, i) {
                var a, o, s, l, c, h, u, f, p, d, m, v = n.styles.length,
                    g = n.lvl;
                for (h = 0; h < v; h += 1) {
                    if (l = n.sh._mdf || i, n.styles[h].lvl < g) {
                        for (f = e.reset(), d = g - n.styles[h].lvl, m = n.transformers.length - 1; !l && 0 < d;) l = n.transformers[m].mProps._mdf || l, d -= 1, m -= 1;
                        if (l)
                            for (d = g - n.styles[h].lvl, m = n.transformers.length - 1; 0 < d;) p = n.transformers[m].mProps.v.props, f.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), d -= 1, m -= 1
                    } else f = t;
                    if (o = (u = n.sh.paths)._length, l) {
                        for (s = "", a = 0; a < o; a += 1)(c = u.shapes[a]) && c._length && (s += buildShapeString(c, c._length, c.c, f));
                        n.caches[h] = s
                    } else s = n.caches[h];
                    n.styles[h].d += !0 === r.hd ? "" : s, n.styles[h]._mdf = l || n.styles[h]._mdf
                }
            }

            function i(t, e, r) {
                var n = e.style;
                (e.c._mdf || r) && n.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && n.pElem.setAttribute("fill-opacity", e.o.v)
            }

            function a(t, e, r) {
                o(t, e, r), s(t, e, r)
            }

            function o(t, e, r) {
                var n, i, a, o, s, l = e.gf,
                    c = e.g._hasOpacity,
                    h = e.s.v,
                    u = e.e.v;
                if (e.o._mdf || r) {
                    var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                    e.style.pElem.setAttribute(f, e.o.v)
                }
                if (e.s._mdf || r) {
                    var p = 1 === t.t ? "x1" : "cx",
                        d = "x1" === p ? "y1" : "cy";
                    l.setAttribute(p, h[0]), l.setAttribute(d, h[1]), c && !e.g._collapsable && (e.of.setAttribute(p, h[0]), e.of.setAttribute(d, h[1]))
                }
                if (e.g._cmdf || r) {
                    n = e.cst;
                    var m = e.g.c;
                    for (a = n.length, i = 0; i < a; i += 1)(o = n[i]).setAttribute("offset", m[4 * i] + "%"), o.setAttribute("stop-color", "rgb(" + m[4 * i + 1] + "," + m[4 * i + 2] + "," + m[4 * i + 3] + ")")
                }
                if (c && (e.g._omdf || r)) {
                    var v = e.g.o;
                    for (a = (n = e.g._collapsable ? e.cst : e.ost).length, i = 0; i < a; i += 1) o = n[i], e.g._collapsable || o.setAttribute("offset", v[2 * i] + "%"), o.setAttribute("stop-opacity", v[2 * i + 1])
                }
                if (1 === t.t)(e.e._mdf || r) && (l.setAttribute("x2", u[0]), l.setAttribute("y2", u[1]), c && !e.g._collapsable && (e.of.setAttribute("x2", u[0]), e.of.setAttribute("y2", u[1])));
                else if ((e.s._mdf || e.e._mdf || r) && (s = Math.sqrt(Math.pow(h[0] - u[0], 2) + Math.pow(h[1] - u[1], 2)), l.setAttribute("r", s), c && !e.g._collapsable && e.of.setAttribute("r", s)), e.e._mdf || e.h._mdf || e.a._mdf || r) {
                    s || (s = Math.sqrt(Math.pow(h[0] - u[0], 2) + Math.pow(h[1] - u[1], 2)));
                    var g = Math.atan2(u[1] - h[1], u[0] - h[0]),
                        y = e.h.v;
                    1 <= y ? y = .99 : y <= -1 && (y = -.99);
                    var E = s * y,
                        b = Math.cos(g + e.a.v) * E + h[0],
                        _ = Math.sin(g + e.a.v) * E + h[1];
                    l.setAttribute("fx", b), l.setAttribute("fy", _), c && !e.g._collapsable && (e.of.setAttribute("fx", b), e.of.setAttribute("fy", _))
                }
            }

            function s(t, e, r) {
                var n = e.style,
                    i = e.d;
                i && (i._mdf || r) && i.dashStr && (n.pElem.setAttribute("stroke-dasharray", i.dashStr), n.pElem.setAttribute("stroke-dashoffset", i.dashoffset[0])), e.c && (e.c._mdf || r) && n.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && n.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (n.pElem.setAttribute("stroke-width", e.w.v), n.msElem && n.msElem.setAttribute("stroke-width", e.w.v))
            }
            return {
                createRenderFunction: function(t) {
                    switch (t.ty) {
                        case "fl":
                            return i;
                        case "gf":
                            return o;
                        case "gs":
                            return a;
                        case "st":
                            return s;
                        case "sh":
                        case "el":
                        case "rc":
                        case "sr":
                            return n;
                        case "tr":
                            return r;
                        default:
                            return null
                    }
                }
            }
        }();

        function ShapeTransformManager() {
            this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
        }

        function CVShapeData(t, e, r, n) {
            this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
            var i, a = 4;
            "rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
            var o, s = r.length;
            for (i = 0; i < s; i += 1) r[i].closed || (o = {
                transforms: n.addTransformSequence(r[i].transforms),
                trNodes: []
            }, this.styledShapes.push(o), r[i].elements.push(o))
        }

        function BaseElement() {}

        function NullElement(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy()
        }

        function SVGBaseElement() {}

        function IShapeElement() {}

        function ITextElement() {}

        function ICompElement() {}

        function IImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r), this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            }
        }

        function ISolidElement(t, e, r) {
            this.initElement(t, e, r)
        }

        function AudioElement(t, e, r) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
            var n = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(n), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }

        function FootageElement(t, e, r) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r)
        }

        function SVGCompElement(t, e, r) {
            this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }

        function SVGTextLottieElement(t, e, r) {
            this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r)
        }

        function SVGShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = []
        }

        function SVGTintFilter(t, e) {
            this.filterManager = e;
            var r = createNS("feColorMatrix");
            if (r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r), (r = createNS("feColorMatrix")).setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), r.setAttribute("result", "f2"), t.appendChild(r), this.matrixFilter = r, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                var n, i = createNS("feMerge");
                t.appendChild(i), (n = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), i.appendChild(n), (n = createNS("feMergeNode")).setAttribute("in", "f2"), i.appendChild(n)
            }
        }

        function SVGFillFilter(t, e) {
            this.filterManager = e;
            var r = createNS("feColorMatrix");
            r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(r), this.matrixFilter = r
        }

        function SVGGaussianBlurEffect(t, e) {
            t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
            var r = createNS("feGaussianBlur");
            t.appendChild(r), this.feGaussianBlur = r
        }

        function SVGStrokeEffect(t, e) {
            this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
        }

        function SVGTritoneFilter(t, e) {
            this.filterManager = e;
            var r = createNS("feColorMatrix");
            r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r);
            var n = createNS("feComponentTransfer");
            n.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(n), this.matrixFilter = n;
            var i = createNS("feFuncR");
            i.setAttribute("type", "table"), n.appendChild(i), this.feFuncR = i;
            var a = createNS("feFuncG");
            a.setAttribute("type", "table"), n.appendChild(a), this.feFuncG = a;
            var o = createNS("feFuncB");
            o.setAttribute("type", "table"), n.appendChild(o), this.feFuncB = o
        }

        function SVGProLevelsFilter(t, e) {
            this.filterManager = e;
            var r = this.filterManager.effectElements,
                n = createNS("feComponentTransfer");
            (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", n)), (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", n)), (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", n)), (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", n)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (n.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(n), n = createNS("feComponentTransfer")), (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && (n.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(n), this.feFuncRComposed = this.createFeFunc("feFuncR", n), this.feFuncGComposed = this.createFeFunc("feFuncG", n), this.feFuncBComposed = this.createFeFunc("feFuncB", n))
        }

        function SVGDropShadowEffect(t, e) {
            var r = e.container.globalData.renderConfig.filterSize;
            t.setAttribute("x", r.x), t.setAttribute("y", r.y), t.setAttribute("width", r.width), t.setAttribute("height", r.height), this.filterManager = e;
            var n = createNS("feGaussianBlur");
            n.setAttribute("in", "SourceAlpha"), n.setAttribute("result", "drop_shadow_1"), n.setAttribute("stdDeviation", "0"), this.feGaussianBlur = n, t.appendChild(n);
            var i = createNS("feOffset");
            i.setAttribute("dx", "25"), i.setAttribute("dy", "0"), i.setAttribute("in", "drop_shadow_1"), i.setAttribute("result", "drop_shadow_2"), this.feOffset = i, t.appendChild(i);
            var a = createNS("feFlood");
            a.setAttribute("flood-color", "#00ff00"), a.setAttribute("flood-opacity", "1"), a.setAttribute("result", "drop_shadow_3"), this.feFlood = a, t.appendChild(a);
            var o = createNS("feComposite");
            o.setAttribute("in", "drop_shadow_3"), o.setAttribute("in2", "drop_shadow_2"), o.setAttribute("operator", "in"), o.setAttribute("result", "drop_shadow_4"), t.appendChild(o);
            var s, l = createNS("feMerge");
            t.appendChild(l), s = createNS("feMergeNode"), l.appendChild(s), (s = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = s, this.feMerge = l, this.originalNodeAdded = !1, l.appendChild(s)
        }
        ShapeTransformManager.prototype = {
            addTransformSequence: function(t) {
                var e, r = t.length,
                    n = "_";
                for (e = 0; e < r; e += 1) n += t[e].transform.key + "_";
                var i = this.sequences[n];
                return i || (i = {
                    transforms: [].concat(t),
                    finalTransform: new Matrix,
                    _mdf: !1
                }, this.sequences[n] = i, this.sequenceList.push(i)), i
            },
            processSequence: function(t, e) {
                for (var r, n = 0, i = t.transforms.length, a = e; n < i && !e;) {
                    if (t.transforms[n].transform.mProps._mdf) {
                        a = !0;
                        break
                    }
                    n += 1
                }
                if (a)
                    for (t.finalTransform.reset(), n = i - 1; 0 <= n; n -= 1) r = t.transforms[n].transform.mProps.v.props, t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
                t._mdf = a
            },
            processSequences: function(t) {
                var e, r = this.sequenceList.length;
                for (e = 0; e < r; e += 1) this.processSequence(this.sequenceList[e], t)
            },
            getNewKey: function() {
                return this.transform_key_count += 1, "_" + this.transform_key_count
            }
        }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
            checkMasks: function() {
                if (!this.data.hasMask) return !1;
                for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                    if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                    t += 1
                }
                return !1
            },
            initExpressions: function() {
                this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
            },
            setBlendMode: function() {
                var t = getBlendMode(this.data.bm);
                (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
            },
            initBaseData: function(t, e, r) {
                this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
            },
            getType: function() {
                return this.type
            },
            sourceRectAtTime: function() {}
        }, NullElement.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0)
        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
            return null
        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
            initRendererElement: function() {
                this.layerElement = createNS("g")
            },
            createContainerElements: function() {
                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                var t, e, r, n = null;
                if (this.data.td) {
                    if (3 == this.data.td || 1 == this.data.td) {
                        var i = createNS("mask");
                        i.setAttribute("id", this.layerId), i.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), i.appendChild(this.layerElement), n = i, this.globalData.defs.appendChild(i), featureSupport.maskType || 1 != this.data.td || (i.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS("g")).appendChild(this.layerElement), n = r, i.appendChild(r), r.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
                    } else if (2 == this.data.td) {
                        var a = createNS("mask");
                        a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha");
                        var o = createNS("g");
                        a.appendChild(o), t = createElementID(), e = filtersFactory.createFilter(t);
                        var s = createNS("feComponentTransfer");
                        s.setAttribute("in", "SourceGraphic"), e.appendChild(s);
                        var l = createNS("feFuncA");
                        l.setAttribute("type", "table"), l.setAttribute("tableValues", "1.0 0.0"), s.appendChild(l), this.globalData.defs.appendChild(e);
                        var c = createNS("rect");
                        c.setAttribute("width", this.comp.data.w), c.setAttribute("height", this.comp.data.h), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("fill", "#ffffff"), c.setAttribute("opacity", "0"), o.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), o.appendChild(c), o.appendChild(this.layerElement), n = o, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r = createNS("g"), o.appendChild(c), r.appendChild(this.layerElement), n = r, o.appendChild(r)), this.globalData.defs.appendChild(a)
                    }
                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), n = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                    var h = createNS("clipPath"),
                        u = createNS("path");
                    u.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var f = createElementID();
                    if (h.setAttribute("id", f), h.appendChild(u), this.globalData.defs.appendChild(h), this.checkMasks()) {
                        var p = createNS("g");
                        p.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")"), p.appendChild(this.layerElement), this.transformedElement = p, n ? n.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                    } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")")
                }
                0 !== this.data.bm && this.setBlendMode()
            },
            renderElement: function() {
                this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
            },
            destroyBaseElement: function() {
                this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
            },
            getBaseElement: function() {
                return this.data.hd ? null : this.baseElement
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
            },
            setMatte: function(t) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
            }
        }, IShapeElement.prototype = {
            addShapeToModifiers: function(t) {
                var e, r = this.shapeModifiers.length;
                for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t)
            },
            isShapeInAnimatedModifiers: function(t) {
                for (var e = this.shapeModifiers.length; 0 < e;)
                    if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                return !1
            },
            renderModifiers: function() {
                if (this.shapeModifiers.length) {
                    var t, e = this.shapes.length;
                    for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                    for (t = (e = this.shapeModifiers.length) - 1; 0 <= t && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
                }
            },
            searchProcessedElement: function(t) {
                for (var e = this.processedElements, r = 0, n = e.length; r < n;) {
                    if (e[r].elem === t) return e[r].pos;
                    r += 1
                }
                return 0
            },
            addProcessedElement: function(t, e) {
                for (var r = this.processedElements, n = r.length; n;)
                    if (r[n -= 1].elem === t) return void(r[n].pos = e);
                r.push(new ProcessedElement(t, e))
            },
            prepareFrame: function(t) {
                this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
            }
        }, ITextElement.prototype.initElement = function(t, e, r) {
            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function(t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        }, ITextElement.prototype.createPathShape = function(t, e) {
            var r, n, i = e.length,
                a = "";
            for (r = 0; r < i; r += 1) n = e[r].ks.k, a += buildShapeString(n, n.i.length, !0, t);
            return a
        }, ITextElement.prototype.updateDocumentData = function(t, e) {
            this.textProperty.updateDocumentData(t, e)
        }, ITextElement.prototype.canResizeFont = function(t) {
            this.textProperty.canResizeFont(t)
        }, ITextElement.prototype.setMinimumFontSize = function(t) {
            this.textProperty.setMinimumFontSize(t)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, n, i) {
            switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
            }
            e.translate(n, i, 0)
        }, ITextElement.prototype.buildColor = function(t) {
            return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function(t) {
            if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                }
                var r, n = this.elements.length;
                for (this.completeLayers || this.checkLayers(this.renderedFrame), r = n - 1; 0 <= r; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
            }
        }, ICompElement.prototype.renderInnerContent = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, ICompElement.prototype.setElements = function(t) {
            this.elements = t
        }, ICompElement.prototype.getElements = function() {
            return this.elements
        }, ICompElement.prototype.destroyElements = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
        }, ICompElement.prototype.destroy = function() {
            this.destroyElements(), this.destroyBaseElement()
        }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function() {
            return this.sourceRect
        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
        }, AudioElement.prototype.prepareFrame = function(t) {
            if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
            else {
                var e = this.tm.v;
                this._currentTime = e
            }
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || .1 < Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek())) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
        }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
            this.audio.pause(), this._isPlaying = !1
        }, AudioElement.prototype.pause = function() {
            this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
        }, AudioElement.prototype.resume = function() {
            this._canPlay = !0
        }, AudioElement.prototype.setRate = function(t) {
            this.audio.rate(t)
        }, AudioElement.prototype.volume = function(t) {
            this.audio.volume(t)
        }, AudioElement.prototype.getBaseElement = function() {
            return null
        }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
            return null
        }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
            this.layerInterface = FootageInterface(this)
        }, FootageElement.prototype.getFootageData = function() {
            return this.footageData
        }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
            for (var e = 0, r = t.length, n = [], i = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (n.push(i), i = "") : i += t[e], e += 1;
            return n.push(i), n
        }, SVGTextLottieElement.prototype.buildNewText = function() {
            var t, e, r = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
            var n = this.globalData.fontManager.getFontByName(r.f);
            if (n.fClass) this.layerElement.setAttribute("class", n.fClass);
            else {
                this.layerElement.setAttribute("font-family", n.fFamily);
                var i = r.fWeight,
                    a = r.fStyle;
                this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", i)
            }
            this.layerElement.setAttribute("aria-label", r.t);
            var o, s = r.l || [],
                l = !!this.globalData.fontManager.chars;
            e = s.length;
            var c, h = this.mHelper,
                u = "",
                f = this.data.singleShape,
                p = 0,
                d = 0,
                m = !0,
                v = .001 * r.tr * r.finalSize;
            if (!f || l || r.sz) {
                var g, y, E = this.textSpans.length;
                for (t = 0; t < e; t += 1) l && f && 0 !== t || (o = t < E ? this.textSpans[t] : createNS(l ? "path" : "text"), E <= t && (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = o, this.layerElement.appendChild(o)), o.style.display = "inherit"), h.reset(), h.scale(r.finalSize / 100, r.finalSize / 100), f && (s[t].n && (p = -v, d += r.yOffset, d += m ? 1 : 0, m = !1), this.applyTextPropertiesToMatrix(r, h, s[t].line, p, d), p += s[t].l || 0, p += v), l ? (c = (g = (y = this.globalData.fontManager.getCharData(r.finalText[t], n.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)) && y.data || {}).shapes ? g.shapes[0].it : [], f ? u += this.createPathShape(h, c) : o.setAttribute("d", this.createPathShape(h, c))) : (f && o.setAttribute("transform", "translate(" + h.props[12] + "," + h.props[13] + ")"), o.textContent = s[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                f && o && o.setAttribute("d", u)
            } else {
                var b = this.textContainer,
                    _ = "start";
                switch (r.j) {
                    case 1:
                        _ = "end";
                        break;
                    case 2:
                        _ = "middle";
                        break;
                    default:
                        _ = "start"
                }
                b.setAttribute("text-anchor", _), b.setAttribute("letter-spacing", v);
                var x = this.buildTextContents(r.finalText);
                for (e = x.length, d = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(o = this.textSpans[t] || createNS("tspan")).textContent = x[t], o.setAttribute("x", 0), o.setAttribute("y", d), o.style.display = "inherit", b.appendChild(o), this.textSpans[t] = o, d += r.finalLineHeight;
                this.layerElement.appendChild(b)
            }
            for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
            this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                this._sizeChanged = !1;
                var t = this.layerElement.getBBox();
                this.bbox = {
                    top: t.y,
                    left: t.x,
                    width: t.width,
                    height: t.height
                }
            }
            return this.bbox
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
            if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                var t, e;
                this._sizeChanged = !0;
                var r, n, i = this.textAnimator.renderedLetters,
                    a = this.textProperty.currentData.l;
                for (e = a.length, t = 0; t < e; t += 1) a[t].n || (r = i[t], n = this.textSpans[t], r._mdf.m && n.setAttribute("transform", r.m), r._mdf.o && n.setAttribute("opacity", r.o), r._mdf.sw && n.setAttribute("stroke-width", r.sw), r._mdf.sc && n.setAttribute("stroke", r.sc), r._mdf.fc && n.setAttribute("fill", r.fc))
            }
        }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
            var t, e, r, n, i = this.shapes.length,
                a = this.stylesList.length,
                o = [],
                s = !1;
            for (r = 0; r < a; r += 1) {
                for (n = this.stylesList[r], s = !1, t = o.length = 0; t < i; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(n) && (o.push(e), s = e._isAnimated || s);
                1 < o.length && s && this.setShapesAsAnimated(o)
            }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) t[e].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
            var r, n = new SVGStyleData(t, e),
                i = n.pElem;
            return "st" === t.ty ? r = new SVGStrokeStyleData(this, t, n) : "fl" === t.ty ? r = new SVGFillStyleData(this, t, n) : "gf" !== t.ty && "gs" !== t.ty || (r = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, n), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), i.setAttribute("mask", "url(" + locationHref + "#" + r.maskId + ")"))), "st" !== t.ty && "gs" !== t.ty || (i.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), i.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), i.setAttribute("fill-opacity", "0"), 1 === t.lj && i.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && i.setAttribute("fill-rule", "evenodd"), t.ln && i.setAttribute("id", t.ln), t.cl && i.setAttribute("class", t.cl), t.bm && (i.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(n), this.addToAnimatedContents(t, r), r
        }, SVGShapeElement.prototype.createGroupElement = function(t) {
            var e = new ShapeGroupData;
            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
            var r = TransformPropertyFactory.getTransformProperty(this, t, this),
                n = new SVGTransformData(r, r.o, e);
            return this.addToAnimatedContents(t, n), n
        }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
            var n = 4;
            "rc" === t.ty ? n = 5 : "el" === t.ty ? n = 6 : "sr" === t.ty && (n = 7);
            var i = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, n, this));
            return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(t, i), i
        }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
            for (var r = 0, n = this.animatedContents.length; r < n;) {
                if (this.animatedContents[r].element === e) return;
                r += 1
            }
            this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(t),
                element: e,
                data: t
            })
        }, SVGShapeElement.prototype.setElementStyles = function(t) {
            var e, r = t.styles,
                n = this.stylesList.length;
            for (e = 0; e < n; e += 1) this.stylesList[e].closed || r.push(this.stylesList[e])
        }, SVGShapeElement.prototype.reloadShapes = function() {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function(t, e, r, n, i, a, o) {
            var s, l, c, h, u, f, p = [].concat(a),
                d = t.length - 1,
                m = [],
                v = [];
            for (s = d; 0 <= s; s -= 1) {
                if ((f = this.searchProcessedElement(t[s])) ? e[s] = r[f - 1] : t[s]._render = o, "fl" === t[s].ty || "st" === t[s].ty || "gf" === t[s].ty || "gs" === t[s].ty) f ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], i), t[s]._render && n.appendChild(e[s].style.pElem), m.push(e[s].style);
                else if ("gr" === t[s].ty) {
                    if (f)
                        for (c = e[s].it.length, l = 0; l < c; l += 1) e[s].prevViewData[l] = e[s].it[l];
                    else e[s] = this.createGroupElement(t[s]);
                    this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, e[s].gr, i + 1, p, o), t[s]._render && n.appendChild(e[s].gr)
                } else "tr" === t[s].ty ? (f || (e[s] = this.createTransformElement(t[s], n)), h = e[s].transform, p.push(h)) : "sh" === t[s].ty || "rc" === t[s].ty || "el" === t[s].ty || "sr" === t[s].ty ? (f || (e[s] = this.createShapeElement(t[s], p, i)), this.setElementStyles(e[s])) : "tm" === t[s].ty || "rd" === t[s].ty || "ms" === t[s].ty || "pb" === t[s].ty ? (f ? (u = e[s]).closed = !1 : ((u = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = u, this.shapeModifiers.push(u)), v.push(u)) : "rp" === t[s].ty && (f ? (u = e[s]).closed = !0 : (u = ShapeModifiers.getModifier(t[s].ty), (e[s] = u).init(this, t, s, e), this.shapeModifiers.push(u), o = !1), v.push(u));
                this.addProcessedElement(t[s], s + 1)
            }
            for (d = m.length, s = 0; s < d; s += 1) m[s].closed = !0;
            for (d = v.length, s = 0; s < d; s += 1) v[s].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function() {
            var t;
            this.renderModifiers();
            var e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].reset();
            for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function() {
            var t, e, r = this.animatedContents.length;
            for (t = 0; t < r; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function() {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        }, SVGTintFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                    r = this.filterManager.effectElements[1].p.v,
                    n = this.filterManager.effectElements[2].p.v / 100;
                this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + n + " 0")
            }
        }, SVGFillFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[2].p.v,
                    r = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
            }
        }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = .3 * this.filterManager.effectElements[0].p.v,
                    r = this.filterManager.effectElements[1].p.v,
                    n = 3 == r ? 0 : e,
                    i = 2 == r ? 0 : e;
                this.feGaussianBlur.setAttribute("stdDeviation", n + " " + i);
                var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", a)
            }
        }, SVGStrokeEffect.prototype.initialize = function() {
            var t, e, r, n, i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
            for (1 === this.filterManager.effectElements[1].p.v ? (n = this.elem.maskManager.masksProperties.length, r = 0) : n = 1 + (r = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < n; r += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
                p: t,
                m: r
            });
            if (3 === this.filterManager.effectElements[10].p.v) {
                var a = createNS("mask"),
                    o = createElementID();
                a.setAttribute("id", o), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
                var s = createNS("g");
                for (s.setAttribute("mask", "url(" + locationHref + "#" + o + ")"); i[0];) s.appendChild(i[0]);
                this.elem.layerElement.appendChild(s), this.masker = a, e.setAttribute("stroke", "#fff")
            } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                if (2 === this.filterManager.effectElements[10].p.v)
                    for (i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length;) this.elem.layerElement.removeChild(i[0]);
                this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
            }
            this.initialized = !0, this.pathMasker = e
        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
            var e;
            this.initialized || this.initialize();
            var r, n, i = this.paths.length;
            for (e = 0; e < i; e += 1)
                if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], n = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && n.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                    var a;
                    if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                        var o = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                            s = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                            l = n.getTotalLength();
                        a = "0 0 0 " + l * o + " ";
                        var c, h = l * (s - o),
                            u = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                            f = Math.floor(h / u);
                        for (c = 0; c < f; c += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                        a += "0 " + 10 * l + " 0 0"
                    } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                    n.setAttribute("stroke-dasharray", a)
                }
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                var p = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * p[0]) + "," + bmFloor(255 * p[1]) + "," + bmFloor(255 * p[2]) + ")")
            }
        }, SVGTritoneFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v,
                    r = this.filterManager.effectElements[1].p.v,
                    n = this.filterManager.effectElements[2].p.v,
                    i = n[0] + " " + r[0] + " " + e[0],
                    a = n[1] + " " + r[1] + " " + e[1],
                    o = n[2] + " " + r[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", o)
            }
        }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
            var r = createNS(t);
            return r.setAttribute("type", "table"), e.appendChild(r), r
        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, n, i) {
            for (var a, o, s = 0, l = Math.min(t, e), c = Math.max(t, e), h = Array.call(null, {
                    length: 256
                }), u = 0, f = i - n, p = e - t; s <= 256;) o = (a = s / 256) <= l ? p < 0 ? i : n : c <= a ? p < 0 ? n : i : n + f * Math.pow((a - t) / p, 1 / r), h[u] = o, u += 1, s += 256 / 255;
            return h.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e, r = this.filterManager.effectElements;
                this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e))
            }
        }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                    var e = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                }
                if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                    var r = this.filterManager.effectElements[3].p.v,
                        n = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                        i = r * Math.cos(n),
                        a = r * Math.sin(n);
                    this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", a)
                }
            }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, r) {
            this.initialized = !1, this.filterManager = e, this.filterElem = t, (this.elem = r).matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
        }

        function SVGEffects(t) {
            var e, r, n = t.data.ef ? t.data.ef.length : 0,
                i = createElementID(),
                a = filtersFactory.createFilter(i, !0),
                o = 0;
            for (this.filters = [], e = 0; e < n; e += 1) r = null, 20 === t.data.ef[e].ty ? (o += 1, r = new SVGTintFilter(a, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (o += 1, r = new SVGFillFilter(a, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? r = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (o += 1, r = new SVGTritoneFilter(a, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (o += 1, r = new SVGProLevelsFilter(a, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (o += 1, r = new SVGDropShadowEffect(a, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? r = new SVGMatte3Effect(a, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (o += 1, r = new SVGGaussianBlurEffect(a, t.effectsManager.effectElements[e])), r && this.filters.push(r);
            o && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + i + ")")), this.filters.length && t.addRenderableComponent(this)
        }

        function CVContextData() {
            var t;
            for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
            this._length = 15
        }

        function CVBaseElement() {}

        function CVImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r)
        }

        function CVCompElement(t, e, r) {
            this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }

        function CVMaskElement(t, e) {
            var r;
            this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
            var n = this.masksProperties.length,
                i = !1;
            for (r = 0; r < n; r += 1) "n" !== this.masksProperties[r].mode && (i = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
            (this.hasMasks = i) && this.element.addRenderableComponent(this)
        }

        function CVShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r)
        }

        function CVSolidElement(t, e, r) {
            this.initElement(t, e, r)
        }

        function CVTextElement(t, e, r) {
            this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                fill: "rgba(0,0,0,0)",
                stroke: "rgba(0,0,0,0)",
                sWidth: 0,
                fValue: ""
            }, this.initElement(t, e, r)
        }

        function CVEffects() {}

        function HBaseElement() {}

        function HSolidElement(t, e, r) {
            this.initElement(t, e, r)
        }

        function HCompElement(t, e, r) {
            this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }
        }

        function HShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }
        }

        function HTextElement(t, e, r) {
            this.textSpans = [], this.textPaths = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r)
        }

        function HImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r)
        }

        function HCameraElement(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
            var n = PropertyFactory.getProp;
            if (this.pe = n(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = n(this, t.ks.p.x, 1, 0, this), this.py = n(this, t.ks.p.y, 1, 0, this), this.pz = n(this, t.ks.p.z, 1, 0, this)) : this.p = n(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = n(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                var i, a = t.ks.or.k.length;
                for (i = 0; i < a; i += 1) t.ks.or.k[i].to = null, t.ks.or.k[i].ti = null
            }
            this.or = n(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = n(this, t.ks.rx, 0, degToRads, this), this.ry = n(this, t.ks.ry, 0, degToRads, this), this.rz = n(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                mProp: this
            }
        }

        function HEffects() {}
        SVGMatte3Effect.prototype.findSymbol = function(t) {
            for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
                if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                e += 1
            }
            return null
        }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
            var r = t.layerElement.parentNode;
            if (r) {
                for (var n, i = r.children, a = 0, o = i.length; a < o && i[a] !== t.layerElement;) a += 1;
                a <= o - 2 && (n = i[a + 1]);
                var s = createNS("use");
                s.setAttribute("href", "#" + e), n ? r.insertBefore(s, n) : r.appendChild(s)
            }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
            if (!this.findSymbol(e)) {
                var r = createElementID(),
                    n = createNS("mask");
                n.setAttribute("id", e.layerId), n.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                var i = t.globalData.defs;
                i.appendChild(n);
                var a = createNS("symbol");
                a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), i.appendChild(a);
                var o = createNS("use");
                o.setAttribute("href", "#" + r), n.appendChild(o), e.data.hd = !1, e.show()
            }
            t.setMatte(e.layerId)
        }, SVGMatte3Effect.prototype.initialize = function() {
            for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, n = e.length; r < n;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
            this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function() {
            this.initialized || this.initialize()
        }, SVGEffects.prototype.renderFrame = function(t) {
            var e, r = this.filters.length;
            for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
        }, CVContextData.prototype.duplicate = function() {
            var t = 2 * this._length,
                e = this.savedOp;
            this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
            var r = 0;
            for (r = this._length; r < t; r += 1) this.saved[r] = createTypedArray("float32", 16);
            this._length = t
        }, CVContextData.prototype.reset = function() {
            this.cArrPos = 0, this.cTr.reset(), this.cO = 1
        }, CVBaseElement.prototype = {
            createElements: function() {},
            initRendererElement: function() {},
            createContainerElements: function() {
                this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
            },
            createContent: function() {},
            setBlendMode: function() {
                var t = this.globalData;
                if (t.blendMode !== this.data.bm) {
                    t.blendMode = this.data.bm;
                    var e = getBlendMode(this.data.bm);
                    t.canvasContext.globalCompositeOperation = e
                }
            },
            createRenderableComponents: function() {
                this.maskManager = new CVMaskElement(this.data, this)
            },
            hideElement: function() {
                this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
            },
            showElement: function() {
                this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
            },
            renderFrame: function() {
                if (!this.hidden && !this.data.hd) {
                    this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                    var t = 0 === this.data.ty;
                    this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                }
            },
            destroy: function() {
                this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
            },
            mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                var t = createTag("canvas");
                t.width = this.assetData.w, t.height = this.assetData.h;
                var e, r, n = t.getContext("2d"),
                    i = this.img.width,
                    a = this.img.height,
                    o = i / a,
                    s = this.assetData.w / this.assetData.h,
                    l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                s < o && "xMidYMid slice" === l || o < s && "xMidYMid slice" !== l ? e = (r = a) * s : r = (e = i) / s, n.drawImage(this.img, (i - e) / 2, (a - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t
            }
        }, CVImageElement.prototype.renderInnerContent = function() {
            this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function() {
            this.img = null
        }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
            var t, e = this.canvasContext;
            for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; 0 <= t; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, CVCompElement.prototype.destroy = function() {
            var t;
            for (t = this.layers.length - 1; 0 <= t; t -= 1) this.elements[t] && this.elements[t].destroy();
            this.layers = null, this.elements = null
        }, CVMaskElement.prototype.renderFrame = function() {
            if (this.hasMasks) {
                var t, e, r, n, i = this.element.finalTransform.mat,
                    a = this.element.canvasContext,
                    o = this.masksProperties.length;
                for (a.beginPath(), t = 0; t < o; t += 1)
                    if ("n" !== this.masksProperties[t].mode) {
                        var s;
                        this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), n = this.viewData[t].v, e = i.applyToPointArray(n.v[0][0], n.v[0][1], 0), a.moveTo(e[0], e[1]);
                        var l = n._length;
                        for (s = 1; s < l; s += 1) r = i.applyToTriplePoints(n.o[s - 1], n.i[s], n.v[s]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                        r = i.applyToTriplePoints(n.o[s - 1], n.i[0], n.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
                    }
                this.element.globalData.renderer.save(!0), a.clip()
            }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
            this.element = null
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
            opacity: 1,
            _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }, CVShapeElement.prototype.createStyleElement = function(t, e) {
            var r = {
                    data: t,
                    type: t.ty,
                    preTransforms: this.transformsManager.addTransformSequence(e),
                    transforms: [],
                    elements: [],
                    closed: !0 === t.hd
                },
                n = {};
            if ("fl" === t.ty || "st" === t.ty ? (n.c = PropertyFactory.getProp(this, t.c, 1, 255, this), n.c.k || (r.co = "rgb(" + bmFloor(n.c.v[0]) + "," + bmFloor(n.c.v[1]) + "," + bmFloor(n.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (n.s = PropertyFactory.getProp(this, t.s, 1, null, this), n.e = PropertyFactory.getProp(this, t.e, 1, null, this), n.h = PropertyFactory.getProp(this, t.h || {
                    k: 0
                }, 0, .01, this), n.a = PropertyFactory.getProp(this, t.a || {
                    k: 0
                }, 0, degToRads, this), n.g = new GradientProperty(this, t.g, this)), n.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
                if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (r.ml = t.ml), n.w = PropertyFactory.getProp(this, t.w, 0, null, this), n.w.k || (r.wi = n.w.v), t.d) {
                    var i = new DashProperty(this, t.d, "canvas", this);
                    n.d = i, n.d.k || (r.da = n.d.dashArray, r.do = n.d.dashoffset[0])
                }
            } else r.r = 2 === t.r ? "evenodd" : "nonzero";
            return this.stylesList.push(r), n.style = r, n
        }, CVShapeElement.prototype.createGroupElement = function() {
            return {
                it: [],
                prevViewData: []
            }
        }, CVShapeElement.prototype.createTransformElement = function(t) {
            return {
                transform: {
                    opacity: 1,
                    _opMdf: !1,
                    key: this.transformsManager.getNewKey(),
                    op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                    mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                }
            }
        }, CVShapeElement.prototype.createShapeElement = function(t) {
            var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
            return this.shapes.push(e), this.addShapeToModifiers(e), e
        }, CVShapeElement.prototype.reloadShapes = function() {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
            var e, r = this.stylesList.length;
            for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
            var t, e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) t[e].closed = !0
        }, CVShapeElement.prototype.searchShapes = function(t, e, r, n, i) {
            var a, o, s, l, c, h, u = t.length - 1,
                f = [],
                p = [],
                d = [].concat(i);
            for (a = u; 0 <= a; a -= 1) {
                if ((l = this.searchProcessedElement(t[a])) ? e[a] = r[l - 1] : t[a]._shouldRender = n, "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty) l ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], d), f.push(e[a].style);
                else if ("gr" === t[a].ty) {
                    if (l)
                        for (s = e[a].it.length, o = 0; o < s; o += 1) e[a].prevViewData[o] = e[a].it[o];
                    else e[a] = this.createGroupElement(t[a]);
                    this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, n, d)
                } else "tr" === t[a].ty ? (l || (h = this.createTransformElement(t[a]), e[a] = h), d.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? l || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty ? (l ? (c = e[a]).closed = !1 : ((c = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = c, this.shapeModifiers.push(c)), p.push(c)) : "rp" === t[a].ty && (l ? (c = e[a]).closed = !0 : (c = ShapeModifiers.getModifier(t[a].ty), (e[a] = c).init(this, t, a, e), this.shapeModifiers.push(c), n = !1), p.push(c));
                this.addProcessedElement(t[a], a + 1)
            }
            for (this.removeTransformFromStyleList(), this.closeStyles(f), u = p.length, a = 0; a < u; a += 1) p[a].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() {
            this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
            var t, e, r, n, i, a, o, s, l, c = this.stylesList.length,
                h = this.globalData.renderer,
                u = this.globalData.canvasContext;
            for (t = 0; t < c; t += 1)
                if (("st" !== (s = (l = this.stylesList[t]).type) && "gs" !== s || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                    for (h.save(), a = l.elements, "st" === s || "gs" === s ? (u.strokeStyle = "st" === s ? l.co : l.grd, u.lineWidth = l.wi, u.lineCap = l.lc, u.lineJoin = l.lj, u.miterLimit = l.ml || 0) : u.fillStyle = "fl" === s ? l.co : l.grd, h.ctxOpacity(l.coOp), "st" !== s && "gs" !== s && u.beginPath(), h.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, e = 0; e < r; e += 1) {
                        for ("st" !== s && "gs" !== s || (u.beginPath(), l.da && (u.setLineDash(l.da), u.lineDashOffset = l.do)), i = (o = a[e].trNodes).length, n = 0; n < i; n += 1) "m" === o[n].t ? u.moveTo(o[n].p[0], o[n].p[1]) : "c" === o[n].t ? u.bezierCurveTo(o[n].pts[0], o[n].pts[1], o[n].pts[2], o[n].pts[3], o[n].pts[4], o[n].pts[5]) : u.closePath();
                        "st" !== s && "gs" !== s || (u.stroke(), l.da && u.setLineDash(this.dashResetter))
                    }
                    "st" !== s && "gs" !== s && u.fill(l.r), h.restore()
                }
        }, CVShapeElement.prototype.renderShape = function(t, e, r, n) {
            var i, a;
            for (a = t, i = e.length - 1; 0 <= i; i -= 1) "tr" === e[i].ty ? (a = r[i].transform, this.renderShapeTransform(t, a)) : "sh" === e[i].ty || "el" === e[i].ty || "rc" === e[i].ty || "sr" === e[i].ty ? this.renderPath(e[i], r[i]) : "fl" === e[i].ty ? this.renderFill(e[i], r[i], a) : "st" === e[i].ty ? this.renderStroke(e[i], r[i], a) : "gf" === e[i].ty || "gs" === e[i].ty ? this.renderGradientFill(e[i], r[i], a) : "gr" === e[i].ty ? this.renderShape(a, e[i].it, r[i].it) : e[i].ty;
            n && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var r, n, i, a = t.trNodes,
                    o = e.paths,
                    s = o._length;
                a.length = 0;
                var l = t.transforms.finalTransform;
                for (i = 0; i < s; i += 1) {
                    var c = o.shapes[i];
                    if (c && c.v) {
                        for (n = c._length, r = 1; r < n; r += 1) 1 === r && a.push({
                            t: "m",
                            p: l.applyToPointArray(c.v[0][0], c.v[0][1], 0)
                        }), a.push({
                            t: "c",
                            pts: l.applyToTriplePoints(c.o[r - 1], c.i[r], c.v[r])
                        });
                        1 === n && a.push({
                            t: "m",
                            p: l.applyToPointArray(c.v[0][0], c.v[0][1], 0)
                        }), c.c && n && (a.push({
                            t: "c",
                            pts: l.applyToTriplePoints(c.o[r - 1], c.i[0], c.v[0])
                        }), a.push({
                            t: "z"
                        }))
                    }
                }
                t.trNodes = a
            }
        }, CVShapeElement.prototype.renderPath = function(t, e) {
            if (!0 !== t.hd && t._shouldRender) {
                var r, n = e.styledShapes.length;
                for (r = 0; r < n; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh)
            }
        }, CVShapeElement.prototype.renderFill = function(t, e, r) {
            var n = e.style;
            (e.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = e.o.v * r.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
            var n, i = e.style;
            if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                var a, o = this.globalData.canvasContext,
                    s = e.s.v,
                    l = e.e.v;
                if (1 === t.t) n = o.createLinearGradient(s[0], s[1], l[0], l[1]);
                else {
                    var c = Math.sqrt(Math.pow(s[0] - l[0], 2) + Math.pow(s[1] - l[1], 2)),
                        h = Math.atan2(l[1] - s[1], l[0] - s[0]),
                        u = e.h.v;
                    1 <= u ? u = .99 : u <= -1 && (u = -.99);
                    var f = c * u,
                        p = Math.cos(h + e.a.v) * f + s[0],
                        d = Math.sin(h + e.a.v) * f + s[1];
                    n = o.createRadialGradient(p, d, 0, s[0], s[1], c)
                }
                var m = t.g.p,
                    v = e.g.c,
                    g = 1;
                for (a = 0; a < m; a += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * a + 1]), n.addColorStop(v[4 * a] / 100, "rgba(" + v[4 * a + 1] + "," + v[4 * a + 2] + "," + v[4 * a + 3] + "," + g + ")");
                i.grd = n
            }
            i.coOp = e.o.v * r.opacity
        }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
            var n = e.style,
                i = e.d;
            i && (i._mdf || this._isFirstFrame) && (n.da = i.dashArray, n.do = i.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (n.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function() {
            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
            var t = this.canvasContext;
            t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = !1;
            t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
            var r = !1;
            t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
            var n, i, a, o, s, l, c, h, u, f, p, d, m = this.globalData.fontManager.getFontByName(t.f),
                v = t.l,
                g = this.mHelper;
            this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, i = t.finalText.length;
            var y = this.data.singleShape,
                E = .001 * t.tr * t.finalSize,
                b = 0,
                _ = 0,
                x = !0,
                w = 0;
            for (n = 0; n < i; n += 1) {
                for (o = (a = this.globalData.fontManager.getCharData(t.finalText[n], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {}, g.reset(), y && v[n].n && (b = -E, _ += t.yOffset, _ += x ? 1 : 0, x = !1), u = (c = o.shapes ? o.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), y && this.applyTextPropertiesToMatrix(t, g, v[n].line, b, _), p = createSizedArray(u), h = 0; h < u; h += 1) {
                    for (l = c[h].ks.k.i.length, f = c[h].ks.k, d = [], s = 1; s < l; s += 1) 1 === s && d.push(g.applyToX(f.v[0][0], f.v[0][1], 0), g.applyToY(f.v[0][0], f.v[0][1], 0)), d.push(g.applyToX(f.o[s - 1][0], f.o[s - 1][1], 0), g.applyToY(f.o[s - 1][0], f.o[s - 1][1], 0), g.applyToX(f.i[s][0], f.i[s][1], 0), g.applyToY(f.i[s][0], f.i[s][1], 0), g.applyToX(f.v[s][0], f.v[s][1], 0), g.applyToY(f.v[s][0], f.v[s][1], 0));
                    d.push(g.applyToX(f.o[s - 1][0], f.o[s - 1][1], 0), g.applyToY(f.o[s - 1][0], f.o[s - 1][1], 0), g.applyToX(f.i[0][0], f.i[0][1], 0), g.applyToY(f.i[0][0], f.i[0][1], 0), g.applyToX(f.v[0][0], f.v[0][1], 0), g.applyToY(f.v[0][0], f.v[0][1], 0)), p[h] = d
                }
                y && (b += v[n].l, b += E), this.textSpans[w] ? this.textSpans[w].elem = p : this.textSpans[w] = {
                    elem: p
                }, w += 1
            }
        }, CVTextElement.prototype.renderInnerContent = function() {
            var t, e, r, n, i, a, o = this.canvasContext;
            o.font = this.values.fValue, o.lineCap = "butt", o.lineJoin = "miter", o.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var s, l = this.textAnimator.renderedLetters,
                c = this.textProperty.currentData.l;
            e = c.length;
            var h, u, f = null,
                p = null,
                d = null;
            for (t = 0; t < e; t += 1)
                if (!c[t].n) {
                    if ((s = l[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(s.p), this.globalData.renderer.ctxOpacity(s.o)), this.fill) {
                        for (s && s.fc ? f !== s.fc && (f = s.fc, o.fillStyle = s.fc) : f !== this.values.fill && (f = this.values.fill, o.fillStyle = this.values.fill), n = (h = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                            for (a = (u = h[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                    }
                    if (this.stroke) {
                        for (s && s.sw ? d !== s.sw && (d = s.sw, o.lineWidth = s.sw) : d !== this.values.sWidth && (d = this.values.sWidth, o.lineWidth = this.values.sWidth), s && s.sc ? p !== s.sc && (p = s.sc, o.strokeStyle = s.sc) : p !== this.values.stroke && (p = this.values.stroke, o.strokeStyle = this.values.stroke), n = (h = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                            for (a = (u = h[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                    }
                    s && this.globalData.renderer.restore()
                }
        }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = {
            checkBlendMode: function() {},
            initRendererElement: function() {
                this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
            },
            createContainerElements: function() {
                this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
            },
            renderElement: function() {
                var t = this.transformedElement ? this.transformedElement.style : {};
                if (this.finalTransform._matMdf) {
                    var e = this.finalTransform.mat.toCSS();
                    t.transform = e, t.webkitTransform = e
                }
                this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
            },
            renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
            },
            destroy: function() {
                this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data, this, this.globalData)
            },
            addEffects: function() {},
            setMatte: function() {}
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
            var t;
            this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
        }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
            this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function(t, e) {
            for (var r, n = 0; n < e;) this.elements[n] && this.elements[n].getBaseElement && (r = this.elements[n].getBaseElement()), n += 1;
            r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t)
        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
            var t;
            if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
            else {
                t = createNS("svg");
                var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
            }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
        }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
            var r, n = t.length;
            for (r = 0; r < n; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
            return e
        }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
            var r, n, i, a, o, s = t.sh.v,
                l = t.transformers,
                c = s._length;
            if (!(c <= 1)) {
                for (r = 0; r < c - 1; r += 1) n = this.getTransformedPoint(l, s.v[r]), i = this.getTransformedPoint(l, s.o[r]), a = this.getTransformedPoint(l, s.i[r + 1]), o = this.getTransformedPoint(l, s.v[r + 1]), this.checkBounds(n, i, a, o, e);
                s.c && (n = this.getTransformedPoint(l, s.v[r]), i = this.getTransformedPoint(l, s.o[r]), a = this.getTransformedPoint(l, s.i[0]), o = this.getTransformedPoint(l, s.v[0]), this.checkBounds(n, i, a, o, e))
            }
        }, HShapeElement.prototype.checkBounds = function(t, e, r, n, i) {
            this.getBoundsOfCurve(t, e, r, n);
            var a = this.shapeBoundingBox;
            i.x = bmMin(a.left, i.x), i.xMax = bmMax(a.right, i.xMax), i.y = bmMin(a.top, i.y), i.yMax = bmMax(a.bottom, i.yMax)
        }, HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, n) {
            for (var i, a, o, s, l, c, h, u = [
                    [t[0], n[0]],
                    [t[1], n[1]]
                ], f = 0; f < 2; ++f) a = 6 * t[f] - 12 * e[f] + 6 * r[f], i = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * n[f], o = 3 * e[f] - 3 * t[f], a |= 0, o |= 0, 0 == (i |= 0) && 0 === a || (0 === i ? 0 < (s = -o / a) && s < 1 && u[f].push(this.calculateF(s, t, e, r, n, f)) : 0 <= (l = a * a - 4 * o * i) && (0 < (c = (-a + bmSqrt(l)) / (2 * i)) && c < 1 && u[f].push(this.calculateF(c, t, e, r, n, f)), 0 < (h = (-a - bmSqrt(l)) / (2 * i)) && h < 1 && u[f].push(this.calculateF(h, t, e, r, n, f))));
            this.shapeBoundingBox.left = bmMin.apply(null, u[0]), this.shapeBoundingBox.top = bmMin.apply(null, u[1]), this.shapeBoundingBox.right = bmMax.apply(null, u[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, u[1])
        }, HShapeElement.prototype.calculateF = function(t, e, r, n, i, a) {
            return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bmPow(t, 2) * n[a] + bmPow(t, 3) * i[a]
        }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
            var r, n = t.length;
            for (r = 0; r < n; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e)
        }, HShapeElement.prototype.currentBoxContains = function(t) {
            return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
        }, HShapeElement.prototype.renderInnerContent = function() {
            if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                var t = this.tempBoundingBox,
                    e = 999999;
                if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                var r = !1;
                if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                    this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                    var n = this.shapeCont.style,
                        i = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                    n.transform = i, n.webkitTransform = i
                }
            }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
            if (this.isMasked = this.checkMasks(), this.isMasked) {
                this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                var t = createNS("g");
                this.maskedElement.appendChild(t), this.innerElem = t
            } else this.renderType = "html", this.innerElem = this.layerElement;
            this.checkParenting()
        }, HTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = this.innerElem.style,
                r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
            e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
            var n, i, a = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars)
                if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
                else {
                    e.fontFamily = a.fFamily;
                    var o = t.fWeight,
                        s = t.fStyle;
                    e.fontStyle = s, e.fontWeight = o
                }
            var l, c, h, u = t.l;
            i = u.length;
            var f, p = this.mHelper,
                d = "",
                m = 0;
            for (n = 0; n < i; n += 1) {
                if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? h = (c = this.textSpans[m]).children[0] : ((c = createTag("div")).style.lineHeight = 0, (h = createNS("svg")).appendChild(l), styleDiv(c)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (c = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(c = createTag("span")), styleDiv(l = createTag("span")), c.appendChild(l)), this.globalData.fontManager.chars) {
                    var v, g = this.globalData.fontManager.getCharData(t.finalText[n], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                    if (v = g ? g.data : null, p.reset(), v && v.shapes && (f = v.shapes[0].it, p.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(p, f), l.setAttribute("d", d)), this.isMasked) this.innerElem.appendChild(l);
                    else {
                        if (this.innerElem.appendChild(c), v && v.shapes) {
                            document.body.appendChild(h);
                            var y = h.getBBox();
                            h.setAttribute("width", y.width + 2), h.setAttribute("height", y.height + 2), h.setAttribute("viewBox", y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2));
                            var E = h.style,
                                b = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)";
                            E.transform = b, E.webkitTransform = b, u[n].yOffset = y.y - 1
                        } else h.setAttribute("width", 1), h.setAttribute("height", 1);
                        c.appendChild(h)
                    }
                } else if (l.textContent = u[n].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
                else {
                    this.innerElem.appendChild(c);
                    var _ = l.style,
                        x = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                    _.transform = x, _.webkitTransform = x
                }
                this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = c, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
            }
            for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
        }, HTextElement.prototype.renderInnerContent = function() {
            var t;
            if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                if (this.isMasked && this.finalTransform._matMdf) {
                    this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                    var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                    t.transform = e, t.webkitTransform = e
                }
            }
            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                var r, n, i, a, o, s = 0,
                    l = this.textAnimator.renderedLetters,
                    c = this.textProperty.currentData.l;
                for (n = c.length, r = 0; r < n; r += 1) c[r].n ? s += 1 : (a = this.textSpans[r], o = this.textPaths[r], i = l[s], s += 1, i._mdf.m && (this.isMasked ? a.setAttribute("transform", i.m) : (a.style.webkitTransform = i.m, a.style.transform = i.m)), a.style.opacity = i.o, i.sw && i._mdf.sw && o.setAttribute("stroke-width", i.sw), i.sc && i._mdf.sc && o.setAttribute("stroke", i.sc), i.fc && i._mdf.fc && (o.setAttribute("fill", i.fc), o.style.color = i.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var h = this.innerElem.getBBox();
                    if (this.currentBBox.w !== h.width && (this.currentBBox.w = h.width, this.svgElement.setAttribute("width", h.width)), this.currentBBox.h !== h.height && (this.currentBBox.h = h.height, this.svgElement.setAttribute("height", h.height)), this.currentBBox.w !== h.width + 2 || this.currentBBox.h !== h.height + 2 || this.currentBBox.x !== h.x - 1 || this.currentBBox.y !== h.y - 1) {
                        this.currentBBox.w = h.width + 2, this.currentBBox.h = h.height + 2, this.currentBBox.x = h.x - 1, this.currentBBox.y = h.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                        var u = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        t.transform = u, t.webkitTransform = u
                    }
                }
            }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData),
                e = new Image;
            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
            var t, e, r, n, i = this.comp.threeDElements.length;
            for (t = 0; t < i; t += 1)
                if ("3d" === (e = this.comp.threeDElements[t]).type) {
                    r = e.perspectiveElem.style, n = e.container.style;
                    var a = this.pe.v + "px",
                        o = "0px 0px 0px",
                        s = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    r.perspective = a, r.webkitPerspective = a, n.transformOrigin = o, n.mozTransformOrigin = o, n.webkitTransformOrigin = o, r.transform = s, r.webkitTransform = s
                }
        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
            var t, e, r = this._isFirstFrame;
            if (this.hierarchy)
                for (e = this.hierarchy.length, t = 0; t < e; t += 1) r = this.hierarchy[t].finalTransform.mProp._mdf || r;
            if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                if (this.mat.reset(), this.hierarchy)
                    for (t = e = this.hierarchy.length - 1; 0 <= t; t -= 1) {
                        var n = this.hierarchy[t].finalTransform.mProp;
                        this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]), this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]), this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v), this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]), this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2])
                    }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                    var i;
                    i = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                    var a = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
                        o = [i[0] / a, i[1] / a, i[2] / a],
                        s = Math.sqrt(o[2] * o[2] + o[0] * o[0]),
                        l = Math.atan2(o[1], s),
                        c = Math.atan2(o[0], -o[2]);
                    this.mat.rotateY(c).rotateX(-l)
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                var h = !this._prevMat.equals(this.mat);
                if ((h || this.pe._mdf) && this.comp.threeDElements) {
                    var u, f, p;
                    for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                        if ("3d" === (u = this.comp.threeDElements[t]).type) {
                            if (h) {
                                var d = this.mat.toCSS();
                                (p = u.container.style).transform = d, p.webkitTransform = d
                            }
                            this.pe._mdf && ((f = u.perspectiveElem.style).perspective = this.pe.v + "px", f.webkitPerspective = this.pe.v + "px")
                        }
                    this.mat.clone(this._prevMat)
                }
            }
            this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0)
        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
            return null
        }, HEffects.prototype.renderFrame = function() {};
        var animationManager = function() {
                var t = {},
                    e = [],
                    r = 0,
                    n = 0,
                    i = 0,
                    a = !0,
                    o = !1;

                function s(t) {
                    for (var r = 0, i = t.target; r < n;) e[r].animation === i && (e.splice(r, 1), r -= 1, n -= 1, i.isPaused || h()), r += 1
                }

                function l(t, r) {
                    if (!t) return null;
                    for (var i = 0; i < n;) {
                        if (e[i].elem === t && null !== e[i].elem) return e[i].animation;
                        i += 1
                    }
                    var a = new AnimationItem;
                    return u(a, t), a.setData(t, r), a
                }

                function c() {
                    i += 1, d()
                }

                function h() {
                    i -= 1
                }

                function u(t, r) {
                    t.addEventListener("destroy", s), t.addEventListener("_active", c), t.addEventListener("_idle", h), e.push({
                        elem: r,
                        animation: t
                    }), n += 1
                }

                function f(t) {
                    var s, l = t - r;
                    for (s = 0; s < n; s += 1) e[s].animation.advanceTime(l);
                    r = t, i && !o ? window.requestAnimationFrame(f) : a = !0
                }

                function p(t) {
                    r = t, window.requestAnimationFrame(f)
                }

                function d() {
                    !o && i && a && (window.requestAnimationFrame(p), a = !1)
                }
                return t.registerAnimation = l, t.loadAnimation = function(t) {
                    var e = new AnimationItem;
                    return u(e, null), e.setParams(t), e
                }, t.setSpeed = function(t, r) {
                    var i;
                    for (i = 0; i < n; i += 1) e[i].animation.setSpeed(t, r)
                }, t.setDirection = function(t, r) {
                    var i;
                    for (i = 0; i < n; i += 1) e[i].animation.setDirection(t, r)
                }, t.play = function(t) {
                    var r;
                    for (r = 0; r < n; r += 1) e[r].animation.play(t)
                }, t.pause = function(t) {
                    var r;
                    for (r = 0; r < n; r += 1) e[r].animation.pause(t)
                }, t.stop = function(t) {
                    var r;
                    for (r = 0; r < n; r += 1) e[r].animation.stop(t)
                }, t.togglePause = function(t) {
                    var r;
                    for (r = 0; r < n; r += 1) e[r].animation.togglePause(t)
                }, t.searchAnimations = function(t, e, r) {
                    var n, i = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                        a = i.length;
                    for (n = 0; n < a; n += 1) r && i[n].setAttribute("data-bm-type", r), l(i[n], t);
                    if (e && 0 === a) {
                        r || (r = "svg");
                        var o = document.getElementsByTagName("body")[0];
                        o.innerText = "";
                        var s = createTag("div");
                        s.style.width = "100%", s.style.height = "100%", s.setAttribute("data-bm-type", r), o.appendChild(s), l(s, t)
                    }
                }, t.resize = function() {
                    var t;
                    for (t = 0; t < n; t += 1) e[t].animation.resize()
                }, t.goToAndStop = function(t, r, i) {
                    var a;
                    for (a = 0; a < n; a += 1) e[a].animation.goToAndStop(t, r, i)
                }, t.destroy = function(t) {
                    var r;
                    for (r = n - 1; 0 <= r; r -= 1) e[r].animation.destroy(t)
                }, t.freeze = function() {
                    o = !0
                }, t.unfreeze = function() {
                    o = !1, d()
                }, t.setVolume = function(t, r) {
                    var i;
                    for (i = 0; i < n; i += 1) e[i].animation.setVolume(t, r)
                }, t.mute = function(t) {
                    var r;
                    for (r = 0; r < n; r += 1) e[r].animation.mute(t)
                }, t.unmute = function(t) {
                    var r;
                    for (r = 0; r < n; r += 1) e[r].animation.unmute(t)
                }, t.getRegisteredAnimations = function() {
                    var t, r = e.length,
                        n = [];
                    for (t = 0; t < r; t += 1) n.push(e[t].animation);
                    return n
                }, t
            }(),
            AnimationItem = function() {
                this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = []
            };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer), e) {
                case "canvas":
                    this.renderer = new CanvasRenderer(this, t.rendererSettings);
                    break;
                case "svg":
                    this.renderer = new SVGRenderer(this, t.rendererSettings);
                    break;
                default:
                    this.renderer = new HybridRenderer(this, t.rendererSettings)
            }
            this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function() {
                this.trigger("data_failed")
            }.bind(this)))
        }, AnimationItem.prototype.setData = function(t, e) {
            e && "object" != typeof e && (e = JSON.parse(e));
            var r = {
                    wrapper: t,
                    animationData: e
                },
                n = t.attributes;
            r.path = n.getNamedItem("data-animation-path") ? n.getNamedItem("data-animation-path").value : n.getNamedItem("data-bm-path") ? n.getNamedItem("data-bm-path").value : n.getNamedItem("bm-path") ? n.getNamedItem("bm-path").value : "", r.animType = n.getNamedItem("data-anim-type") ? n.getNamedItem("data-anim-type").value : n.getNamedItem("data-bm-type") ? n.getNamedItem("data-bm-type").value : n.getNamedItem("bm-type") ? n.getNamedItem("bm-type").value : n.getNamedItem("data-bm-renderer") ? n.getNamedItem("data-bm-renderer").value : n.getNamedItem("bm-renderer") ? n.getNamedItem("bm-renderer").value : "canvas";
            var i = n.getNamedItem("data-anim-loop") ? n.getNamedItem("data-anim-loop").value : n.getNamedItem("data-bm-loop") ? n.getNamedItem("data-bm-loop").value : n.getNamedItem("bm-loop") ? n.getNamedItem("bm-loop").value : "";
            "false" === i ? r.loop = !1 : "true" === i ? r.loop = !0 : "" !== i && (r.loop = parseInt(i, 10));
            var a = n.getNamedItem("data-anim-autoplay") ? n.getNamedItem("data-anim-autoplay").value : n.getNamedItem("data-bm-autoplay") ? n.getNamedItem("data-bm-autoplay").value : !n.getNamedItem("bm-autoplay") || n.getNamedItem("bm-autoplay").value;
            r.autoplay = "false" !== a, r.name = n.getNamedItem("data-name") ? n.getNamedItem("data-name").value : n.getNamedItem("data-bm-name") ? n.getNamedItem("data-bm-name").value : n.getNamedItem("bm-name") ? n.getNamedItem("bm-name").value : "", "false" === (n.getNamedItem("data-anim-prerender") ? n.getNamedItem("data-anim-prerender").value : n.getNamedItem("data-bm-prerender") ? n.getNamedItem("data-bm-prerender").value : n.getNamedItem("bm-prerender") ? n.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), this.setParams(r)
        }, AnimationItem.prototype.includeLayers = function(t) {
            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e, r, n = this.animationData.layers,
                i = n.length,
                a = t.layers,
                o = a.length;
            for (r = 0; r < o; r += 1)
                for (e = 0; e < i;) {
                    if (n[e].id === a[r].id) {
                        n[e] = a[r];
                        break
                    }
                    e += 1
                }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                for (i = t.assets.length, e = 0; e < i; e += 1) this.animationData.assets.push(t.assets[e]);
            this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function() {
            var t = this.animationData.segments;
            if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, assetLoader.load(r, this.includeLayers.bind(this), function() {
                this.trigger("data_failed")
            }.bind(this))
        }, AnimationItem.prototype.loadSegments = function() {
            this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function() {
            this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function() {
            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function(t) {
            if (this.renderer) try {
                this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
            } catch (t) {
                this.triggerConfigError(t)
            }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function() {
            !this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages() && (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                this.trigger("DOMLoaded")
            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
        }, AnimationItem.prototype.resize = function() {
            this.renderer.updateContainerSize()
        }, AnimationItem.prototype.setSubframe = function(t) {
            this.isSubframeEnabled = !!t
        }, AnimationItem.prototype.gotoFrame = function() {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
        }, AnimationItem.prototype.renderFrame = function() {
            if (!1 !== this.isLoaded && this.renderer) try {
                this.renderer.renderFrame(this.currentFrame + this.firstFrame)
            } catch (t) {
                this.triggerRenderFrameError(t)
            }
        }, AnimationItem.prototype.play = function(t) {
            t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function(t) {
            t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function(t) {
            t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function(t) {
            t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function(t) {
            for (var e, r = 0; r < this.markers.length; r += 1)
                if ((e = this.markers[r]).payload && e.payload.name === t) return e;
            return null
        }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
            if (!r || this.name === r) {
                var n = Number(t);
                if (isNaN(n)) {
                    var i = this.getMarkerData(t);
                    i && this.goToAndStop(i.time, !0)
                } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                this.pause()
            }
        }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
            if (!r || this.name === r) {
                var n = Number(t);
                if (isNaN(n)) {
                    var i = this.getMarkerData(t);
                    i && (i.duration ? this.playSegments([i.time, i.time + i.duration], !0) : this.goToAndStop(i.time, !0))
                } else this.goToAndStop(n, e, r);
                this.play()
            }
        }, AnimationItem.prototype.advanceTime = function(t) {
            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                var e = this.currentRawFrame + t * this.frameModifier,
                    r = !1;
                e >= this.totalFrames - 1 && 0 < this.frameModifier ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
            }
        }, AnimationItem.prototype.adjustSegment = function(t, e) {
            this.playCount = 0, t[1] < t[0] ? (0 < this.frameModifier && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function(t, e) {
            var r = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, !0)
        }, AnimationItem.prototype.playSegments = function(t, e) {
            if (e && (this.segments.length = 0), "object" == typeof t[0]) {
                var r, n = t.length;
                for (r = 0; r < n; r += 1) this.segments.push(t[r])
            } else this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function(t) {
            this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function(t) {
            return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
        }, AnimationItem.prototype.destroy = function(t) {
            t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
            this.currentRawFrame = t, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function(t) {
            this.playSpeed = t, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function(t) {
            this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setVolume = function(t, e) {
            e && this.name !== e || this.audioController.setVolume(t)
        }, AnimationItem.prototype.getVolume = function() {
            return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function(t) {
            t && this.name !== t || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function(t) {
            t && this.name !== t || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function() {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function() {
            return this.path
        }, AnimationItem.prototype.getAssetsPath = function(t) {
            var e = "";
            if (t.e) e = t.p;
            else if (this.assetsPath) {
                var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r
            } else e = this.path, e += t.u ? t.u : "", e += t.p;
            return e
        }, AnimationItem.prototype.getAssetData = function(t) {
            for (var e = 0, r = this.assets.length; e < r;) {
                if (t === this.assets[e].id) return this.assets[e];
                e += 1
            }
            return null
        }, AnimationItem.prototype.hide = function() {
            this.renderer.hide()
        }, AnimationItem.prototype.show = function() {
            this.renderer.show()
        }, AnimationItem.prototype.getDuration = function(t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.trigger = function(t) {
            if (this._cbs && this._cbs[t]) switch (t) {
                case "enterFrame":
                    this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case "loopComplete":
                    this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                    break;
                default:
                    this.triggerEvent(t)
            }
            "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
            var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        }, AnimationItem.prototype.triggerConfigError = function(t) {
            var e = new BMConfigErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        };
        var Expressions = (EY = {}, EY.initExpressions = function(t) {
                var e = 0,
                    r = [];
                t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                    e += 1
                }, t.renderer.globalData.popExpression = function() {
                    0 == (e -= 1) && function() {
                        var t, e = r.length;
                        for (t = 0; t < e; t += 1) r[t].release();
                        r.length = 0
                    }()
                }, t.renderer.globalData.registerExpressionProperty = function(t) {
                    -1 === r.indexOf(t) && r.push(t)
                }
            }, EY),
            EY;
        expressionsPlugin = Expressions;
        var ExpressionManager = function() {
                var ob = {},
                    Math = BMMath,
                    window = null,
                    document = null,
                    XMLHttpRequest = null,
                    fetch = null;

                function $bm_isInstanceOfArray(t) {
                    return t.constructor === Array || t.constructor === Float32Array
                }

                function isNumerable(t, e) {
                    return "number" === t || "boolean" === t || "string" === t || e instanceof Number
                }

                function $bm_neg(t) {
                    var e = typeof t;
                    if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                    if ($bm_isInstanceOfArray(t)) {
                        var r, n = t.length,
                            i = [];
                        for (r = 0; r < n; r += 1) i[r] = -t[r];
                        return i
                    }
                    return t.propType ? t.v : -t
                }
                var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                    easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                    easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                function sum(t, e) {
                    var r = typeof t,
                        n = typeof e;
                    if ("string" === r || "string" === n) return t + e;
                    if (isNumerable(r, t) && isNumerable(n, e)) return t + e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) return (t = t.slice(0))[0] += e, t;
                    if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for (var i = 0, a = t.length, o = e.length, s = []; i < a || i < o;)("number" == typeof t[i] || t[i] instanceof Number) && ("number" == typeof e[i] || e[i] instanceof Number) ? s[i] = t[i] + e[i] : s[i] = void 0 === e[i] ? t[i] : t[i] || e[i], i += 1;
                        return s
                    }
                    return 0
                }
                var add = sum;

                function sub(t, e) {
                    var r = typeof t,
                        n = typeof e;
                    if (isNumerable(r, t) && isNumerable(n, e)) return "string" === r && (t = parseInt(t, 10)), "string" === n && (e = parseInt(e, 10)), t - e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) return (t = t.slice(0))[0] -= e, t;
                    if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for (var i = 0, a = t.length, o = e.length, s = []; i < a || i < o;)("number" == typeof t[i] || t[i] instanceof Number) && ("number" == typeof e[i] || e[i] instanceof Number) ? s[i] = t[i] - e[i] : s[i] = void 0 === e[i] ? t[i] : t[i] || e[i], i += 1;
                        return s
                    }
                    return 0
                }

                function mul(t, e) {
                    var r, n, i, a = typeof t,
                        o = typeof e;
                    if (isNumerable(a, t) && isNumerable(o, e)) return t * e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(o, e)) {
                        for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t[n] * e;
                        return r
                    }
                    if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                        for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t * e[n];
                        return r
                    }
                    return 0
                }

                function div(t, e) {
                    var r, n, i, a = typeof t,
                        o = typeof e;
                    if (isNumerable(a, t) && isNumerable(o, e)) return t / e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(o, e)) {
                        for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t[n] / e;
                        return r
                    }
                    if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                        for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t / e[n];
                        return r
                    }
                    return 0
                }

                function mod(t, e) {
                    return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
                }
                var $bm_sum = sum,
                    $bm_sub = sub,
                    $bm_mul = mul,
                    $bm_div = div,
                    $bm_mod = mod;

                function clamp(t, e, r) {
                    if (r < e) {
                        var n = r;
                        r = e, e = n
                    }
                    return Math.min(Math.max(t, e), r)
                }

                function radiansToDegrees(t) {
                    return t / degToRads
                }
                var radians_to_degrees = radiansToDegrees;

                function degreesToRadians(t) {
                    return t * degToRads
                }
                var degrees_to_radians = radiansToDegrees,
                    helperLengthArray = [0, 0, 0, 0, 0, 0];

                function length(t, e) {
                    if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                    var r;
                    e || (e = helperLengthArray);
                    var n = Math.min(t.length, e.length),
                        i = 0;
                    for (r = 0; r < n; r += 1) i += Math.pow(e[r] - t[r], 2);
                    return Math.sqrt(i)
                }

                function normalize(t) {
                    return div(t, length(t))
                }

                function rgbToHsl(t) {
                    var e, r, n = t[0],
                        i = t[1],
                        a = t[2],
                        o = Math.max(n, i, a),
                        s = Math.min(n, i, a),
                        l = (o + s) / 2;
                    if (o === s) r = e = 0;
                    else {
                        var c = o - s;
                        switch (r = .5 < l ? c / (2 - o - s) : c / (o + s), o) {
                            case n:
                                e = (i - a) / c + (i < a ? 6 : 0);
                                break;
                            case i:
                                e = (a - n) / c + 2;
                                break;
                            case a:
                                e = (n - i) / c + 4
                        }
                        e /= 6
                    }
                    return [e, r, l, t[3]]
                }

                function hue2rgb(t, e, r) {
                    return r < 0 && (r += 1), 1 < r && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
                }

                function hslToRgb(t) {
                    var e, r, n, i = t[0],
                        a = t[1],
                        o = t[2];
                    if (0 === a) r = n = e = o;
                    else {
                        var s = o < .5 ? o * (1 + a) : o + a - o * a,
                            l = 2 * o - s;
                        e = hue2rgb(l, s, i + 1 / 3), r = hue2rgb(l, s, i), n = hue2rgb(l, s, i - 1 / 3)
                    }
                    return [e, r, n, t[3]]
                }

                function linear(t, e, r, n, i) {
                    if (void 0 !== n && void 0 !== i || (n = e, i = r, e = 0, r = 1), r < e) {
                        var a = r;
                        r = e, e = a
                    }
                    if (t <= e) return n;
                    if (r <= t) return i;
                    var o, s = r === e ? 0 : (t - e) / (r - e);
                    if (!n.length) return n + (i - n) * s;
                    var l = n.length,
                        c = createTypedArray("float32", l);
                    for (o = 0; o < l; o += 1) c[o] = n[o] + (i[o] - n[o]) * s;
                    return c
                }

                function random(t, e) {
                    if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                        var r, n = e.length;
                        t || (t = createTypedArray("float32", n));
                        var i = createTypedArray("float32", n),
                            a = BMMath.random();
                        for (r = 0; r < n; r += 1) i[r] = t[r] + a * (e[r] - t[r]);
                        return i
                    }
                    return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
                }

                function createPath(t, e, r, n) {
                    var i, a = t.length,
                        o = shapePool.newElement();
                    o.setPathData(!!n, a);
                    var s, l, c = [0, 0];
                    for (i = 0; i < a; i += 1) s = e && e[i] ? e[i] : c, l = r && r[i] ? r[i] : c, o.setTripleAt(t[i][0], t[i][1], l[0] + t[i][0], l[1] + t[i][1], s[0] + t[i][0], s[1] + t[i][1], i, !0);
                    return o
                }

                function initiateExpression(elem, data, property) {
                    var val = data.x,
                        needsVelocity = /velocity(?![\w\d])/.test(val),
                        _needsRandom = -1 !== val.indexOf("random"),
                        elemType = elem.data.ty,
                        transform, $bm_transform, content, effect, thisProperty = property;
                    thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                        get: function() {
                            return thisProperty.v
                        }
                    }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                    var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                        outPoint = elem.data.op / elem.comp.globalData.frameRate,
                        width = elem.data.sw ? elem.data.sw : 0,
                        height = elem.data.sh ? elem.data.sh : 0,
                        name = elem.data.nm,
                        loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                        numKeys = property.kf ? data.k.length : 0,
                        active = !this.data || !0 !== this.data.hd,
                        wiggle = function(t, e) {
                            var r, n, i = this.pv.length ? this.pv.length : 1,
                                a = createTypedArray("float32", i),
                                o = Math.floor(5 * time);
                            for (n = r = 0; r < o;) {
                                for (n = 0; n < i; n += 1) a[n] += -e + 2 * e * BMMath.random();
                                r += 1
                            }
                            var s = 5 * time,
                                l = s - Math.floor(s),
                                c = createTypedArray("float32", i);
                            if (1 < i) {
                                for (n = 0; n < i; n += 1) c[n] = this.pv[n] + a[n] + (-e + 2 * e * BMMath.random()) * l;
                                return c
                            }
                            return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * l
                        }.bind(this);

                    function loopInDuration(t, e) {
                        return loopIn(t, e, !0)
                    }

                    function loopOutDuration(t, e) {
                        return loopOut(t, e, !0)
                    }
                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                        time, velocity, value, text, textIndex, textTotal, selectorValue;

                    function lookAt(t, e) {
                        var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                            n = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                        return [-Math.atan2(r[1], r[2]) / degToRads, n, 0]
                    }

                    function easeOut(t, e, r, n, i) {
                        return applyEase(easeOutBez, t, e, r, n, i)
                    }

                    function easeIn(t, e, r, n, i) {
                        return applyEase(easeInBez, t, e, r, n, i)
                    }

                    function ease(t, e, r, n, i) {
                        return applyEase(easeInOutBez, t, e, r, n, i)
                    }

                    function applyEase(t, e, r, n, i, a) {
                        void 0 === i ? (i = r, a = n) : e = (e - r) / (n - r), 1 < e ? e = 1 : e < 0 && (e = 0);
                        var o = t(e);
                        if ($bm_isInstanceOfArray(i)) {
                            var s, l = i.length,
                                c = createTypedArray("float32", l);
                            for (s = 0; s < l; s += 1) c[s] = (a[s] - i[s]) * o + i[s];
                            return c
                        }
                        return (a - i) * o + i
                    }

                    function nearestKey(t) {
                        var e, r, n, i = data.k.length;
                        if (data.k.length && "number" != typeof data.k[0])
                            if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, n = data.k[0].t;
                            else {
                                for (e = 0; e < i - 1; e += 1) {
                                    if (t === data.k[e].t) {
                                        r = e + 1, n = data.k[e].t;
                                        break
                                    }
                                    if (t > data.k[e].t && t < data.k[e + 1].t) {
                                        n = t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, data.k[e + 1].t) : (r = e + 1, data.k[e].t);
                                        break
                                    }
                                } - 1 === r && (r = e + 1, n = data.k[e].t)
                            }
                        else n = r = 0;
                        var a = {};
                        return a.index = r, a.time = n / elem.comp.globalData.frameRate, a
                    }

                    function key(t) {
                        var e, r, n;
                        if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                        t -= 1, e = {
                            time: data.k[t].t / elem.comp.globalData.frameRate,
                            value: []
                        };
                        var i = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                        for (n = i.length, r = 0; r < n; r += 1) e[r] = i[r], e.value[r] = i[r];
                        return e
                    }

                    function framesToTime(t, e) {
                        return e || (e = elem.comp.globalData.frameRate), t / e
                    }

                    function timeToFrames(t, e) {
                        return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                    }

                    function seedRandom(t) {
                        BMMath.seedrandom(randSeed + t)
                    }

                    function sourceRectAtTime() {
                        return elem.sourceRectAtTime()
                    }

                    function substring(t, e) {
                        return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                    }

                    function substr(t, e) {
                        return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                    }

                    function posterizeTime(t) {
                        time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                    }
                    var index = elem.data.ind,
                        hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                        parent, randSeed = Math.floor(1e6 * Math.random()),
                        globalData = elem.globalData;

                    function executeExpression(t) {
                        return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), ($bm_transform = transform) && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt)
                    }
                    return executeExpression
                }
                return ob.initiateExpression = initiateExpression, ob
            }(),
            expressionHelpers = {
                searchExpressions: function(t, e, r) {
                    e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)))
                },
                getSpeedAtTime: function(t) {
                    var e = this.getValueAtTime(t),
                        r = this.getValueAtTime(t + -.01),
                        n = 0;
                    if (e.length) {
                        var i;
                        for (i = 0; i < e.length; i += 1) n += Math.pow(r[i] - e[i], 2);
                        n = 100 * Math.sqrt(n)
                    } else n = 0;
                    return n
                },
                getVelocityAtTime: function(t) {
                    if (void 0 !== this.vel) return this.vel;
                    var e, r, n = this.getValueAtTime(t),
                        i = this.getValueAtTime(t + -.001);
                    if (n.length)
                        for (e = createTypedArray("float32", n.length), r = 0; r < n.length; r += 1) e[r] = (i[r] - n[r]) / -.001;
                    else e = (i - n) / -.001;
                    return e
                },
                getValueAtTime: function(t) {
                    return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
                },
                getStaticValueAtTime: function() {
                    return this.pv
                },
                setGroupProperty: function(t) {
                    this.propertyGroup = t
                }
            };
        ! function() {
            function t(t, e, r) {
                if (!this.k || !this.keyframes) return this.pv;
                t = t ? t.toLowerCase() : "";
                var n, i, a, o, s, l = this.comp.renderedFrame,
                    c = this.keyframes,
                    h = c[c.length - 1].t;
                if (l <= h) return this.pv;
                if (r ? i = h - (n = e ? Math.abs(h - this.elem.comp.globalData.frameRate * e) : Math.max(0, h - this.elem.data.ip)) : ((!e || e > c.length - 1) && (e = c.length - 1), n = h - (i = c[c.length - 1 - e].t)), "pingpong" === t) {
                    if (Math.floor((l - i) / n) % 2 != 0) return this.getValueAtTime((n - (l - i) % n + i) / this.comp.globalData.frameRate, 0)
                } else {
                    if ("offset" === t) {
                        var u = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                            f = this.getValueAtTime(h / this.comp.globalData.frameRate, 0),
                            p = this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0),
                            d = Math.floor((l - i) / n);
                        if (this.pv.length) {
                            for (o = (s = new Array(u.length)).length, a = 0; a < o; a += 1) s[a] = (f[a] - u[a]) * d + p[a];
                            return s
                        }
                        return (f - u) * d + p
                    }
                    if ("continue" === t) {
                        var m = this.getValueAtTime(h / this.comp.globalData.frameRate, 0),
                            v = this.getValueAtTime((h - .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (o = (s = new Array(m.length)).length, a = 0; a < o; a += 1) s[a] = m[a] + (m[a] - v[a]) * ((l - h) / this.comp.globalData.frameRate) / 5e-4;
                            return s
                        }
                        return m + (l - h) / .001 * (m - v)
                    }
                }
                return this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0)
            }

            function e(t, e, r) {
                if (!this.k) return this.pv;
                t = t ? t.toLowerCase() : "";
                var n, i, a, o, s, l = this.comp.renderedFrame,
                    c = this.keyframes,
                    h = c[0].t;
                if (h <= l) return this.pv;
                if (r ? i = h + (n = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - h)) : ((!e || e > c.length - 1) && (e = c.length - 1), n = (i = c[e].t) - h), "pingpong" === t) {
                    if (Math.floor((h - l) / n) % 2 == 0) return this.getValueAtTime(((h - l) % n + h) / this.comp.globalData.frameRate, 0)
                } else {
                    if ("offset" === t) {
                        var u = this.getValueAtTime(h / this.comp.globalData.frameRate, 0),
                            f = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                            p = this.getValueAtTime((n - (h - l) % n + h) / this.comp.globalData.frameRate, 0),
                            d = Math.floor((h - l) / n) + 1;
                        if (this.pv.length) {
                            for (o = (s = new Array(u.length)).length, a = 0; a < o; a += 1) s[a] = p[a] - (f[a] - u[a]) * d;
                            return s
                        }
                        return p - (f - u) * d
                    }
                    if ("continue" === t) {
                        var m = this.getValueAtTime(h / this.comp.globalData.frameRate, 0),
                            v = this.getValueAtTime((h + .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (o = (s = new Array(m.length)).length, a = 0; a < o; a += 1) s[a] = m[a] + (m[a] - v[a]) * (h - l) / .001;
                            return s
                        }
                        return m + (m - v) * (h - l) / .001
                    }
                }
                return this.getValueAtTime((n - ((h - l) % n + h)) / this.comp.globalData.frameRate, 0)
            }

            function r(t, e) {
                if (!this.k) return this.pv;
                if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                var r, n, i = this.comp.renderedFrame / this.comp.globalData.frameRate,
                    a = i - t,
                    o = 1 < e ? (i + t - a) / (e - 1) : 1,
                    s = 0,
                    l = 0;
                for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; s < e;) {
                    if (n = this.getValueAtTime(a + s * o), this.pv.length)
                        for (l = 0; l < this.pv.length; l += 1) r[l] += n[l];
                    else r += n;
                    s += 1
                }
                if (this.pv.length)
                    for (l = 0; l < this.pv.length; l += 1) r[l] /= e;
                else r /= e;
                return r
            }
            var n = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(t, e, r) {
                var i = n(t, e, r);
                return i.dynamicProperties.length ? i.getValueAtTime = function(t) {
                    this._transformCachingAtTime || (this._transformCachingAtTime = {
                        v: new Matrix
                    });
                    var e = this._transformCachingAtTime.v;
                    if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                        var r = this.a.getValueAtTime(t);
                        e.translate(-r[0] * this.a.mult, -r[1] * this.a.mult, r[2] * this.a.mult)
                    }
                    if (this.appliedTransformations < 2) {
                        var n = this.s.getValueAtTime(t);
                        e.scale(n[0] * this.s.mult, n[1] * this.s.mult, n[2] * this.s.mult)
                    }
                    if (this.sk && this.appliedTransformations < 3) {
                        var i = this.sk.getValueAtTime(t),
                            a = this.sa.getValueAtTime(t);
                        e.skewFromAxis(-i * this.sk.mult, a * this.sa.mult)
                    }
                    if (this.r && this.appliedTransformations < 4) {
                        var o = this.r.getValueAtTime(t);
                        e.rotate(-o * this.r.mult)
                    } else if (!this.r && this.appliedTransformations < 4) {
                        var s = this.rz.getValueAtTime(t),
                            l = this.ry.getValueAtTime(t),
                            c = this.rx.getValueAtTime(t),
                            h = this.or.getValueAtTime(t);
                        e.rotateZ(-s * this.rz.mult).rotateY(l * this.ry.mult).rotateX(c * this.rx.mult).rotateZ(-h[2] * this.or.mult).rotateY(h[1] * this.or.mult).rotateX(h[0] * this.or.mult)
                    }
                    if (this.data.p && this.data.p.s) {
                        var u = this.px.getValueAtTime(t),
                            f = this.py.getValueAtTime(t);
                        if (this.data.p.z) {
                            var p = this.pz.getValueAtTime(t);
                            e.translate(u * this.px.mult, f * this.py.mult, -p * this.pz.mult)
                        } else e.translate(u * this.px.mult, f * this.py.mult, 0)
                    } else {
                        var d = this.p.getValueAtTime(t);
                        e.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult)
                    }
                    return e
                }.bind(i) : i.getValueAtTime = function() {
                    return this.v.clone(new Matrix)
                }.bind(i), i.setGroupProperty = expressionHelpers.setGroupProperty, i
            };
            var i = PropertyFactory.getProp;
            PropertyFactory.getProp = function(n, a, o, s, l) {
                var c = i(n, a, o, s, l);
                c.kf ? c.getValueAtTime = expressionHelpers.getValueAtTime.bind(c) : c.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(c), c.setGroupProperty = expressionHelpers.setGroupProperty, c.loopOut = t, c.loopIn = e, c.smooth = r, c.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(c), c.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(c), c.numKeys = 1 === a.a ? a.k.length : 0, c.propertyIndex = a.ix;
                var h = 0;
                return 0 !== o && (h = createTypedArray("float32", 1 === a.a ? a.k[0].s.length : a.k.length)), c._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: h
                }, expressionHelpers.searchExpressions(n, a, c), c.k && l.addDynamicProperty(c), c
            };
            var a = ShapePropertyFactory.getConstructorFunction(),
                o = ShapePropertyFactory.getKeyframedConstructorFunction();

            function s() {}
            s.prototype = {
                vertices: function(t, e) {
                    this.k && this.getValue();
                    var r, n = this.v;
                    void 0 !== e && (n = this.getValueAtTime(e, 0));
                    var i = n._length,
                        a = n[t],
                        o = n.v,
                        s = createSizedArray(i);
                    for (r = 0; r < i; r += 1) s[r] = "i" === t || "o" === t ? [a[r][0] - o[r][0], a[r][1] - o[r][1]] : [a[r][0], a[r][1]];
                    return s
                },
                points: function(t) {
                    return this.vertices("v", t)
                },
                inTangents: function(t) {
                    return this.vertices("i", t)
                },
                outTangents: function(t) {
                    return this.vertices("o", t)
                },
                isClosed: function() {
                    return this.v.c
                },
                pointOnPath: function(t, e) {
                    var r = this.v;
                    void 0 !== e && (r = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
                    for (var n, i = this._segmentsLength, a = i.lengths, o = i.totalLength * t, s = 0, l = a.length, c = 0; s < l;) {
                        if (c + a[s].addedLength > o) {
                            var h = s,
                                u = r.c && s === l - 1 ? 0 : s + 1,
                                f = (o - c) / a[s].addedLength;
                            n = bez.getPointInSegment(r.v[h], r.v[u], r.o[h], r.i[u], f, a[s]);
                            break
                        }
                        c += a[s].addedLength, s += 1
                    }
                    return n || (n = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), n
                },
                vectorOnPath: function(t, e, r) {
                    1 == t ? t = this.v.c : 0 == t && (t = .999);
                    var n = this.pointOnPath(t, e),
                        i = this.pointOnPath(t + .001, e),
                        a = i[0] - n[0],
                        o = i[1] - n[1],
                        s = Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2));
                    return 0 === s ? [0, 0] : "tangent" === r ? [a / s, o / s] : [-o / s, a / s]
                },
                tangentOnPath: function(t, e) {
                    return this.vectorOnPath(t, e, "tangent")
                },
                normalOnPath: function(t, e) {
                    return this.vectorOnPath(t, e, "normal")
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            }, extendPrototype([s], a), extendPrototype([s], o), o.prototype.getValueAtTime = function(t) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
            }, o.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var l = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(t, e, r, n, i) {
                var a = l(t, e, r, n, i);
                return a.propertyIndex = e.ix, a.lock = !1, 3 === r ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a
            }
        }(), TextProperty.prototype.getExpressionValue = function(t, e) {
            var r = this.calculateExpression(e);
            if (t.t === r) return t;
            var n = {};
            return this.copyData(n, t), n.t = r.toString(), n.__complete = !1, n
        }, TextProperty.prototype.searchProperty = function() {
            var t = this.searchKeyframes(),
                e = this.searchExpressions();
            return this.kf = t || e, this.kf
        }, TextProperty.prototype.searchExpressions = function() {
            return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
        };
        var ShapePathInterface = function(t, e, r) {
                var n = e.sh;

                function i(t) {
                    return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? i.path : null
                }
                var a = propertyGroupFactory(i, r);
                return n.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(i, {
                    path: {
                        get: function() {
                            return n.k && n.getValue(), n
                        }
                    },
                    shape: {
                        get: function() {
                            return n.k && n.getValue(), n
                        }
                    },
                    _name: {
                        value: t.nm
                    },
                    ix: {
                        value: t.ix
                    },
                    propertyIndex: {
                        value: t.ix
                    },
                    mn: {
                        value: t.mn
                    },
                    propertyGroup: {
                        value: r
                    }
                }), i
            },
            propertyGroupFactory = function(t, e) {
                return function(r) {
                    return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1)
                }
            },
            PropertyInterface = function(t, e) {
                var r = {
                    _name: t
                };
                return function(t) {
                    return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1)
                }
            },
            ShapeExpressionInterface = function() {
                function t(t, o, f) {
                    var p, d = [],
                        m = t ? t.length : 0;
                    for (p = 0; p < m; p += 1) "gr" === t[p].ty ? d.push(e(t[p], o[p], f)) : "fl" === t[p].ty ? d.push(r(t[p], o[p], f)) : "st" === t[p].ty ? d.push(i(t[p], o[p], f)) : "tm" === t[p].ty ? d.push(a(t[p], o[p], f)) : "tr" === t[p].ty || ("el" === t[p].ty ? d.push(s(t[p], o[p], f)) : "sr" === t[p].ty ? d.push(l(t[p], o[p], f)) : "sh" === t[p].ty ? d.push(ShapePathInterface(t[p], o[p], f)) : "rc" === t[p].ty ? d.push(c(t[p], o[p], f)) : "rd" === t[p].ty ? d.push(h(t[p], o[p], f)) : "rp" === t[p].ty ? d.push(u(t[p], o[p], f)) : "gf" === t[p].ty ? d.push(n(t[p], o[p], f)) : d.push((t[p], o[p], function() {
                        return null
                    })));
                    return d
                }

                function e(e, r, n) {
                    var i = function(t) {
                        switch (t) {
                            case "ADBE Vectors Group":
                            case "Contents":
                            case 2:
                                return i.content;
                            default:
                                return i.transform
                        }
                    };
                    i.propertyGroup = propertyGroupFactory(i, n);
                    var a = function(e, r, n) {
                            var i, a = function(t) {
                                for (var e = 0, r = i.length; e < r;) {
                                    if (i[e]._name === t || i[e].mn === t || i[e].propertyIndex === t || i[e].ix === t || i[e].ind === t) return i[e];
                                    e += 1
                                }
                                return "number" == typeof t ? i[t - 1] : null
                            };
                            a.propertyGroup = propertyGroupFactory(a, n), i = t(e.it, r.it, a.propertyGroup), a.numProperties = i.length;
                            var s = o(e.it[e.it.length - 1], r.it[r.it.length - 1], a.propertyGroup);
                            return a.transform = s, a.propertyIndex = e.cix, a._name = e.nm, a
                        }(e, r, i.propertyGroup),
                        s = o(e.it[e.it.length - 1], r.it[r.it.length - 1], i.propertyGroup);
                    return i.content = a, i.transform = s, Object.defineProperty(i, "_name", {
                        get: function() {
                            return e.nm
                        }
                    }), i.numProperties = e.np, i.propertyIndex = e.ix, i.nm = e.nm, i.mn = e.mn, i
                }

                function r(t, e, r) {
                    function n(t) {
                        return "Color" === t || "color" === t ? n.color : "Opacity" === t || "opacity" === t ? n.opacity : null
                    }
                    return Object.defineProperties(n, {
                        color: {
                            get: ExpressionPropertyInterface(e.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }), e.c.setGroupProperty(PropertyInterface("Color", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), n
                }

                function n(t, e, r) {
                    function n(t) {
                        return "Start Point" === t || "start point" === t ? n.startPoint : "End Point" === t || "end point" === t ? n.endPoint : "Opacity" === t || "opacity" === t ? n.opacity : null
                    }
                    return Object.defineProperties(n, {
                        startPoint: {
                            get: ExpressionPropertyInterface(e.s)
                        },
                        endPoint: {
                            get: ExpressionPropertyInterface(e.e)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        type: {
                            get: function() {
                                return "a"
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }), e.s.setGroupProperty(PropertyInterface("Start Point", r)), e.e.setGroupProperty(PropertyInterface("End Point", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), n
                }

                function i(t, e, r) {
                    var n, i, a = propertyGroupFactory(c, r),
                        o = propertyGroupFactory(l, a),
                        s = t.d ? t.d.length : 0,
                        l = {};
                    for (n = 0; n < s; n += 1) i = n, Object.defineProperty(l, t.d[i].nm, {
                        get: ExpressionPropertyInterface(e.d.dataProps[i].p)
                    }), e.d.dataProps[n].p.setGroupProperty(o);

                    function c(t) {
                        return "Color" === t || "color" === t ? c.color : "Opacity" === t || "opacity" === t ? c.opacity : "Stroke Width" === t || "stroke width" === t ? c.strokeWidth : null
                    }
                    return Object.defineProperties(c, {
                        color: {
                            get: ExpressionPropertyInterface(e.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        strokeWidth: {
                            get: ExpressionPropertyInterface(e.w)
                        },
                        dash: {
                            get: function() {
                                return l
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }), e.c.setGroupProperty(PropertyInterface("Color", a)), e.o.setGroupProperty(PropertyInterface("Opacity", a)), e.w.setGroupProperty(PropertyInterface("Stroke Width", a)), c
                }

                function a(t, e, r) {
                    function n(e) {
                        return e === t.e.ix || "End" === e || "end" === e ? n.end : e === t.s.ix ? n.start : e === t.o.ix ? n.offset : null
                    }
                    var i = propertyGroupFactory(n, r);
                    return n.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", i)), e.e.setGroupProperty(PropertyInterface("End", i)), e.o.setGroupProperty(PropertyInterface("Offset", i)), n.propertyIndex = t.ix, n.propertyGroup = r, Object.defineProperties(n, {
                        start: {
                            get: ExpressionPropertyInterface(e.s)
                        },
                        end: {
                            get: ExpressionPropertyInterface(e.e)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), n.mn = t.mn, n
                }

                function o(t, e, r) {
                    function n(e) {
                        return t.a.ix === e || "Anchor Point" === e ? n.anchorPoint : t.o.ix === e || "Opacity" === e ? n.opacity : t.p.ix === e || "Position" === e ? n.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? n.rotation : t.s.ix === e || "Scale" === e ? n.scale : t.sk && t.sk.ix === e || "Skew" === e ? n.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? n.skewAxis : null
                    }
                    var i = propertyGroupFactory(n, r);
                    return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", i)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", i)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", i)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", i)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", i)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", i)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", i))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", i)), Object.defineProperties(n, {
                        opacity: {
                            get: ExpressionPropertyInterface(e.transform.mProps.o)
                        },
                        position: {
                            get: ExpressionPropertyInterface(e.transform.mProps.p)
                        },
                        anchorPoint: {
                            get: ExpressionPropertyInterface(e.transform.mProps.a)
                        },
                        scale: {
                            get: ExpressionPropertyInterface(e.transform.mProps.s)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(e.transform.mProps.r)
                        },
                        skew: {
                            get: ExpressionPropertyInterface(e.transform.mProps.sk)
                        },
                        skewAxis: {
                            get: ExpressionPropertyInterface(e.transform.mProps.sa)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), n.ty = "tr", n.mn = t.mn, n.propertyGroup = r, n
                }

                function s(t, e, r) {
                    function n(e) {
                        return t.p.ix === e ? n.position : t.s.ix === e ? n.size : null
                    }
                    var i = propertyGroupFactory(n, r);
                    n.propertyIndex = t.ix;
                    var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return a.s.setGroupProperty(PropertyInterface("Size", i)), a.p.setGroupProperty(PropertyInterface("Position", i)), Object.defineProperties(n, {
                        size: {
                            get: ExpressionPropertyInterface(a.s)
                        },
                        position: {
                            get: ExpressionPropertyInterface(a.p)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), n.mn = t.mn, n
                }

                function l(t, e, r) {
                    function n(e) {
                        return t.p.ix === e ? n.position : t.r.ix === e ? n.rotation : t.pt.ix === e ? n.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? n.outerRadius : t.os.ix === e ? n.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? n.innerRoundness : null : n.innerRadius
                    }
                    var i = propertyGroupFactory(n, r),
                        a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return n.propertyIndex = t.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", i)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", i)), a.pt.setGroupProperty(PropertyInterface("Points", i)), a.p.setGroupProperty(PropertyInterface("Position", i)), a.r.setGroupProperty(PropertyInterface("Rotation", i)), t.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", i)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", i))), Object.defineProperties(n, {
                        position: {
                            get: ExpressionPropertyInterface(a.p)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(a.r)
                        },
                        points: {
                            get: ExpressionPropertyInterface(a.pt)
                        },
                        outerRadius: {
                            get: ExpressionPropertyInterface(a.or)
                        },
                        outerRoundness: {
                            get: ExpressionPropertyInterface(a.os)
                        },
                        innerRadius: {
                            get: ExpressionPropertyInterface(a.ir)
                        },
                        innerRoundness: {
                            get: ExpressionPropertyInterface(a.is)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), n.mn = t.mn, n
                }

                function c(t, e, r) {
                    function n(e) {
                        return t.p.ix === e ? n.position : t.r.ix === e ? n.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? n.size : null
                    }
                    var i = propertyGroupFactory(n, r),
                        a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return n.propertyIndex = t.ix, a.p.setGroupProperty(PropertyInterface("Position", i)), a.s.setGroupProperty(PropertyInterface("Size", i)), a.r.setGroupProperty(PropertyInterface("Rotation", i)), Object.defineProperties(n, {
                        position: {
                            get: ExpressionPropertyInterface(a.p)
                        },
                        roundness: {
                            get: ExpressionPropertyInterface(a.r)
                        },
                        size: {
                            get: ExpressionPropertyInterface(a.s)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), n.mn = t.mn, n
                }

                function h(t, e, r) {
                    function n(e) {
                        return t.r.ix === e || "Round Corners 1" === e ? n.radius : null
                    }
                    var i = propertyGroupFactory(n, r),
                        a = e;
                    return n.propertyIndex = t.ix, a.rd.setGroupProperty(PropertyInterface("Radius", i)), Object.defineProperties(n, {
                        radius: {
                            get: ExpressionPropertyInterface(a.rd)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), n.mn = t.mn, n
                }

                function u(t, e, r) {
                    function n(e) {
                        return t.c.ix === e || "Copies" === e ? n.copies : t.o.ix === e || "Offset" === e ? n.offset : null
                    }
                    var i = propertyGroupFactory(n, r),
                        a = e;
                    return n.propertyIndex = t.ix, a.c.setGroupProperty(PropertyInterface("Copies", i)), a.o.setGroupProperty(PropertyInterface("Offset", i)), Object.defineProperties(n, {
                        copies: {
                            get: ExpressionPropertyInterface(a.c)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(a.o)
                        },
                        _name: {
                            value: t.nm
                        }
                    }), n.mn = t.mn, n
                }
                return function(e, r, n) {
                    var i;

                    function a(t) {
                        if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? n : i[t - 1];
                        for (var e = 0, r = i.length; e < r;) {
                            if (i[e]._name === t) return i[e];
                            e += 1
                        }
                        return null
                    }
                    return a.propertyGroup = propertyGroupFactory(a, function() {
                        return n
                    }), i = t(e, r, a.propertyGroup), a.numProperties = i.length, a._name = "Contents", a
                }
            }(),
            TextExpressionInterface = function(t) {
                var e;

                function r(t) {
                    switch (t) {
                        case "ADBE Text Document":
                            return r.sourceText;
                        default:
                            return null
                    }
                }
                return Object.defineProperty(r, "sourceText", {
                    get: function() {
                        t.textProperty.getValue();
                        var r = t.textProperty.currentData.t;
                        return void 0 !== r && (t.textProperty.currentData.t = void 0, (e = new String(r)).value = r || new String(r)), e
                    }
                }), r
            },
            LayerExpressionInterface = function() {
                function t(t) {
                    var e = new Matrix;
                    return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e
                }

                function e(t, e) {
                    var r = this.getMatrix(e);
                    return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.applyPoint(r, t)
                }

                function r(t, e) {
                    var r = this.getMatrix(e);
                    return this.applyPoint(r, t)
                }

                function n(t, e) {
                    var r = this.getMatrix(e);
                    return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.invertPoint(r, t)
                }

                function i(t, e) {
                    var r = this.getMatrix(e);
                    return this.invertPoint(r, t)
                }

                function a(t, e) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var r, n = this._elem.hierarchy.length;
                        for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
                    }
                    return t.applyToPointArray(e[0], e[1], e[2] || 0)
                }

                function o(t, e) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var r, n = this._elem.hierarchy.length;
                        for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
                    }
                    return t.inversePoint(e)
                }

                function s(t) {
                    var e = new Matrix;
                    if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                        var r, n = this._elem.hierarchy.length;
                        for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                        return e.inversePoint(t)
                    }
                    return e.inversePoint(t)
                }

                function l() {
                    return [1, 1, 1, 1]
                }
                return function(c) {
                    var h;

                    function u(t) {
                        switch (t) {
                            case "ADBE Root Vectors Group":
                            case "Contents":
                            case 2:
                                return u.shapeInterface;
                            case 1:
                            case 6:
                            case "Transform":
                            case "transform":
                            case "ADBE Transform Group":
                                return h;
                            case 4:
                            case "ADBE Effect Parade":
                            case "effects":
                            case "Effects":
                                return u.effect;
                            case "ADBE Text Properties":
                                return u.textInterface;
                            default:
                                return null
                        }
                    }
                    u.getMatrix = t, u.invertPoint = o, u.applyPoint = a, u.toWorld = r, u.toWorldVec = e, u.fromWorld = i, u.fromWorldVec = n, u.toComp = r, u.fromComp = s, u.sampleImage = l, u.sourceRectAtTime = c.sourceRectAtTime.bind(c);
                    var f = getDescriptor(h = TransformExpressionInterface((u._elem = c).finalTransform.mProp), "anchorPoint");
                    return Object.defineProperties(u, {
                        hasParent: {
                            get: function() {
                                return c.hierarchy.length
                            }
                        },
                        parent: {
                            get: function() {
                                return c.hierarchy[0].layerInterface
                            }
                        },
                        rotation: getDescriptor(h, "rotation"),
                        scale: getDescriptor(h, "scale"),
                        position: getDescriptor(h, "position"),
                        opacity: getDescriptor(h, "opacity"),
                        anchorPoint: f,
                        anchor_point: f,
                        transform: {
                            get: function() {
                                return h
                            }
                        },
                        active: {
                            get: function() {
                                return c.isInRange
                            }
                        }
                    }), u.startTime = c.data.st, u.index = c.data.ind, u.source = c.data.refId, u.height = 0 === c.data.ty ? c.data.h : 100, u.width = 0 === c.data.ty ? c.data.w : 100, u.inPoint = c.data.ip / c.comp.globalData.frameRate, u.outPoint = c.data.op / c.comp.globalData.frameRate, u._name = c.data.nm, u.registerMaskInterface = function(t) {
                        u.mask = new MaskManagerInterface(t, c)
                    }, u.registerEffectsInterface = function(t) {
                        u.effect = t
                    }, u
                }
            }(),
            FootageInterface = (q6 = function(t) {
                function e(t) {
                    return "Outline" === t ? e.outlineInterface() : null
                }
                return e._name = "Outline", e.outlineInterface = function(t) {
                    var e = "",
                        r = t.getFootageData();

                    function n(t) {
                        if (r[t]) return "object" == typeof(r = r[e = t]) ? n : r;
                        var i = t.indexOf(e);
                        if (-1 === i) return "";
                        var a = parseInt(t.substr(i + e.length), 10);
                        return "object" == typeof(r = r[a]) ? n : r
                    }
                    return function() {
                        return e = "", r = t.getFootageData(), n
                    }
                }(t), e
            }, function(t) {
                function e(t) {
                    return "Data" === t ? e.dataInterface : null
                }
                return e._name = "Data", e.dataInterface = q6(t), e
            }),
            q6, CompExpressionInterface = function(t) {
                function e(e) {
                    for (var r = 0, n = t.layers.length; r < n;) {
                        if (t.layers[r].nm === e || t.layers[r].ind === e) return t.elements[r].layerInterface;
                        r += 1
                    }
                    return null
                }
                return Object.defineProperty(e, "_name", {
                    value: t.data.nm
                }), (e.layer = e).pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
            },
            TransformExpressionInterface = function(t) {
                function e(t) {
                    switch (t) {
                        case "scale":
                        case "Scale":
                        case "ADBE Scale":
                        case 6:
                            return e.scale;
                        case "rotation":
                        case "Rotation":
                        case "ADBE Rotation":
                        case "ADBE Rotate Z":
                        case 10:
                            return e.rotation;
                        case "ADBE Rotate X":
                            return e.xRotation;
                        case "ADBE Rotate Y":
                            return e.yRotation;
                        case "position":
                        case "Position":
                        case "ADBE Position":
                        case 2:
                            return e.position;
                        case "ADBE Position_0":
                            return e.xPosition;
                        case "ADBE Position_1":
                            return e.yPosition;
                        case "ADBE Position_2":
                            return e.zPosition;
                        case "anchorPoint":
                        case "AnchorPoint":
                        case "Anchor Point":
                        case "ADBE AnchorPoint":
                        case 1:
                            return e.anchorPoint;
                        case "opacity":
                        case "Opacity":
                        case 11:
                            return e.opacity;
                        default:
                            return null
                    }
                }
                var r, n, i, a;
                return Object.defineProperty(e, "rotation", {
                    get: ExpressionPropertyInterface(t.r || t.rz)
                }), Object.defineProperty(e, "zRotation", {
                    get: ExpressionPropertyInterface(t.rz || t.r)
                }), Object.defineProperty(e, "xRotation", {
                    get: ExpressionPropertyInterface(t.rx)
                }), Object.defineProperty(e, "yRotation", {
                    get: ExpressionPropertyInterface(t.ry)
                }), Object.defineProperty(e, "scale", {
                    get: ExpressionPropertyInterface(t.s)
                }), t.p ? a = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), n = ExpressionPropertyInterface(t.py), t.pz && (i = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                    get: function() {
                        return t.p ? a() : [r(), n(), i ? i() : 0]
                    }
                }), Object.defineProperty(e, "xPosition", {
                    get: ExpressionPropertyInterface(t.px)
                }), Object.defineProperty(e, "yPosition", {
                    get: ExpressionPropertyInterface(t.py)
                }), Object.defineProperty(e, "zPosition", {
                    get: ExpressionPropertyInterface(t.pz)
                }), Object.defineProperty(e, "anchorPoint", {
                    get: ExpressionPropertyInterface(t.a)
                }), Object.defineProperty(e, "opacity", {
                    get: ExpressionPropertyInterface(t.o)
                }), Object.defineProperty(e, "skew", {
                    get: ExpressionPropertyInterface(t.sk)
                }), Object.defineProperty(e, "skewAxis", {
                    get: ExpressionPropertyInterface(t.sa)
                }), Object.defineProperty(e, "orientation", {
                    get: ExpressionPropertyInterface(t.or)
                }), e
            },
            ProjectInterface = function() {
                function t(t) {
                    this.compositions.push(t)
                }
                return function() {
                    function e(t) {
                        for (var e = 0, r = this.compositions.length; e < r;) {
                            if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                            e += 1
                        }
                        return null
                    }
                    return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                }
            }(),
            EffectsExpressionInterface = function() {
                function t(r, n, i, a) {
                    function o(t) {
                        for (var e = r.ef, n = 0, i = e.length; n < i;) {
                            if (t === e[n].nm || t === e[n].mn || t === e[n].ix) return 5 === e[n].ty ? c[n] : c[n]();
                            n += 1
                        }
                        throw new Error
                    }
                    var s, l = propertyGroupFactory(o, i),
                        c = [],
                        h = r.ef.length;
                    for (s = 0; s < h; s += 1) 5 === r.ef[s].ty ? c.push(t(r.ef[s], n.effectElements[s], n.effectElements[s].propertyGroup, a)) : c.push(e(n.effectElements[s], r.ef[s].ty, a, l));
                    return "ADBE Color Control" === r.mn && Object.defineProperty(o, "color", {
                        get: function() {
                            return c[0]()
                        }
                    }), Object.defineProperties(o, {
                        numProperties: {
                            get: function() {
                                return r.np
                            }
                        },
                        _name: {
                            value: r.nm
                        },
                        propertyGroup: {
                            value: l
                        }
                    }), o.enabled = 0 !== r.en, o.active = o.enabled, o
                }

                function e(t, e, r, n) {
                    var i = ExpressionPropertyInterface(t.p);
                    return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", n)),
                        function() {
                            return 10 === e ? r.comp.compInterface(t.p.v) : i()
                        }
                }
                return {
                    createEffectsInterface: function(e, r) {
                        if (e.effectsManager) {
                            var n, i = [],
                                a = e.data.ef,
                                o = e.effectsManager.effectElements.length;
                            for (n = 0; n < o; n += 1) i.push(t(a[n], e.effectsManager.effectElements[n], r, e));
                            var s = e.data.ef || [],
                                l = function(t) {
                                    for (n = 0, o = s.length; n < o;) {
                                        if (t === s[n].nm || t === s[n].mn || t === s[n].ix) return i[n];
                                        n += 1
                                    }
                                    return null
                                };
                            return Object.defineProperty(l, "numProperties", {
                                get: function() {
                                    return s.length
                                }
                            }), l
                        }
                        return null
                    }
                }
            }(),
            MaskManagerInterface = function() {
                function t(t, e) {
                    this._mask = t, this._data = e
                }
                return Object.defineProperty(t.prototype, "maskPath", {
                        get: function() {
                            return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                        }
                    }), Object.defineProperty(t.prototype, "maskOpacity", {
                        get: function() {
                            return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                        }
                    }),
                    function(e) {
                        var r, n = createSizedArray(e.viewData.length),
                            i = e.viewData.length;
                        for (r = 0; r < i; r += 1) n[r] = new t(e.viewData[r], e.masksProperties[r]);
                        return function(t) {
                            for (r = 0; r < i;) {
                                if (e.masksProperties[r].nm === t) return n[r];
                                r += 1
                            }
                            return null
                        }
                    }
            }(),
            ExpressionPropertyInterface = function() {
                var t = {
                        pv: 0,
                        v: 0,
                        mult: 1
                    },
                    e = {
                        pv: [0, 0, 0],
                        v: [0, 0, 0],
                        mult: 1
                    };

                function r(t, e, r) {
                    Object.defineProperty(t, "velocity", {
                        get: function() {
                            return e.getVelocityAtTime(e.comp.currentFrame)
                        }
                    }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(n) {
                        if (!t.numKeys) return 0;
                        var i;
                        i = "s" in e.keyframes[n - 1] ? e.keyframes[n - 1].s : "e" in e.keyframes[n - 2] ? e.keyframes[n - 2].e : e.keyframes[n - 2].s;
                        var a = "unidimensional" === r ? new Number(i) : Object.assign({}, i);
                        return a.time = e.keyframes[n - 1].t / e.elem.comp.globalData.frameRate, a.value = "unidimensional" === r ? i[0] : i, a
                    }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
                }

                function n() {
                    return t
                }
                return function(i) {
                    return i ? "unidimensional" === i.propType ? function(e) {
                        e && "pv" in e || (e = t);
                        var n = 1 / e.mult,
                            i = e.pv * n,
                            a = new Number(i);
                        return a.value = i, r(a, e, "unidimensional"),
                            function() {
                                return e.k && e.getValue(), i = e.v * n, a.value !== i && ((a = new Number(i)).value = i, r(a, e, "unidimensional")), a
                            }
                    }(i) : function(t) {
                        t && "pv" in t || (t = e);
                        var n = 1 / t.mult,
                            i = t.data && t.data.l || t.pv.length,
                            a = createTypedArray("float32", i),
                            o = createTypedArray("float32", i);
                        return a.value = o, r(a, t, "multidimensional"),
                            function() {
                                t.k && t.getValue();
                                for (var e = 0; e < i; e += 1) o[e] = t.v[e] * n, a[e] = o[e];
                                return a
                            }
                    }(i) : n
                }
            }(),
            TextExpressionSelectorPropFactory = function() {
                function t(t, e) {
                    return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v
                }
                return function(e, r) {
                    this.pv = 1, this.comp = e.comp, this.elem = e, this.mult = .01, this.propType = "textSelector", this.textTotal = r.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(e, r, this), this.getMult = t, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty
                }
            }(),
            propertyGetTextProp = TextSelectorProp.getTextSelectorProp;

        function SliderEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function AngleEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function ColorEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function PointEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function LayerIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function MaskIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function CheckboxEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function NoValueEffect() {
            this.p = {}
        }

        function EffectsManager(t, e) {
            var r, n = t.ef || [];
            this.effectElements = [];
            var i, a = n.length;
            for (r = 0; r < a; r += 1) i = new GroupEffect(n[r], e), this.effectElements.push(i)
        }

        function GroupEffect(t, e) {
            this.init(t, e)
        }
        TextSelectorProp.getTextSelectorProp = function(t, e, r) {
            return 1 === e.t ? new TextExpressionSelectorPropFactory(t, e, r) : propertyGetTextProp(t, e, r)
        }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
            var r;
            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
            var n, i = this.data.ef.length,
                a = this.data.ef;
            for (r = 0; r < i; r += 1) {
                switch (n = null, a[r].ty) {
                    case 0:
                        n = new SliderEffect(a[r], e, this);
                        break;
                    case 1:
                        n = new AngleEffect(a[r], e, this);
                        break;
                    case 2:
                        n = new ColorEffect(a[r], e, this);
                        break;
                    case 3:
                        n = new PointEffect(a[r], e, this);
                        break;
                    case 4:
                    case 7:
                        n = new CheckboxEffect(a[r], e, this);
                        break;
                    case 10:
                        n = new LayerIndexEffect(a[r], e, this);
                        break;
                    case 11:
                        n = new MaskIndexEffect(a[r], e, this);
                        break;
                    case 5:
                        n = new EffectsManager(a[r], e, this);
                        break;
                    default:
                        n = new NoValueEffect(a[r], e, this)
                }
                n && this.effectElements.push(n)
            }
        };
        var lottie = {};

        function setLocationHref(t) {
            locationHref = t
        }

        function searchAnimations() {
            !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
        }

        function setSubframeRendering(t) {
            subframeEnabled = t
        }

        function setIDPrefix(t) {
            idPrefix = t
        }

        function loadAnimation(t) {
            return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
        }

        function setQuality(t) {
            if ("string" == typeof t) switch (t) {
                case "high":
                    defaultCurveSegments = 200;
                    break;
                default:
                case "medium":
                    defaultCurveSegments = 50;
                    break;
                case "low":
                    defaultCurveSegments = 10
            } else !isNaN(t) && 1 < t && (defaultCurveSegments = t);
            roundValues(!(50 <= defaultCurveSegments))
        }

        function inBrowser() {
            return "undefined" != typeof navigator
        }

        function installPlugin(t, e) {
            "expressions" === t && (expressionsPlugin = e)
        }

        function getFactory(t) {
            switch (t) {
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix;
                default:
                    return null
            }
        }

        function checkReady() {
            "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable(t) {
            for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
                var n = e[r].split("=");
                if (decodeURIComponent(n[0]) == t) return decodeURIComponent(n[1])
            }
            return null
        }
        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.setIDPrefix = setIDPrefix, lottie.__getFactory = getFactory, lottie.version = "5.7.13";
        var standalone = "__[STANDALONE]__",
            animationData = "__[ANIMATIONDATA]__",
            renderer = "",
            queryString;
        if (standalone) {
            var scripts = document.getElementsByTagName("script"),
                index = scripts.length - 1,
                myScript = scripts[index] || {
                    src: ""
                };
            queryString = myScript.src.replace(/^[^\?]+\??/, ""), renderer = getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        return lottie
    }, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return factory(root)
    }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function(t, e, r) {
    "use strict";
    var n = r(3)(r(37));
    ! function() {
        if ("undefined" != typeof window) {
            var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                e = !!t && parseInt(t[1], 10) >= 16;
            if (!("objectFit" in document.documentElement.style != !1) || e) {
                var r = function(t) {
                        var e = t.parentNode;
                        ! function(t) {
                            var e = window.getComputedStyle(t, null),
                                r = e.getPropertyValue("position"),
                                n = e.getPropertyValue("overflow"),
                                i = e.getPropertyValue("display");
                            r && "static" !== r || (t.style.position = "relative"), "hidden" !== n && (t.style.overflow = "hidden"), i && "inline" !== i || (t.style.display = "block"), 0 === t.clientHeight && (t.style.height = "100%"), -1 === t.className.indexOf("object-fit-polyfill") && (t.className += " object-fit-polyfill")
                        }(e),
                        function(t) {
                            var e = window.getComputedStyle(t, null),
                                r = {
                                    "max-width": "none",
                                    "max-height": "none",
                                    "min-width": "0px",
                                    "min-height": "0px",
                                    top: "auto",
                                    right: "auto",
                                    bottom: "auto",
                                    left: "auto",
                                    "margin-top": "0px",
                                    "margin-right": "0px",
                                    "margin-bottom": "0px",
                                    "margin-left": "0px"
                                };
                            for (var n in r) e.getPropertyValue(n) !== r[n] && (t.style[n] = r[n])
                        }(t), t.style.position = "absolute", t.style.height = "100%", t.style.width = "auto", t.clientWidth > e.clientWidth ? (t.style.top = "0", t.style.marginTop = "0", t.style.left = "50%", t.style.marginLeft = t.clientWidth / -2 + "px") : (t.style.width = "100%", t.style.height = "auto", t.style.left = "0", t.style.marginLeft = "0", t.style.top = "50%", t.style.marginTop = t.clientHeight / -2 + "px")
                    },
                    i = function(t) {
                        if (void 0 === t || t instanceof Event) t = document.querySelectorAll("[data-object-fit]");
                        else if (t && t.nodeName) t = [t];
                        else {
                            if ("object" !== (0, n.default)(t) || !t.length || !t[0].nodeName) return !1;
                            t = t
                        }
                        for (var i = 0; i < t.length; i++)
                            if (t[i].nodeName) {
                                var a = t[i].nodeName.toLowerCase();
                                if ("img" === a) {
                                    if (e) continue;
                                    t[i].complete ? r(t[i]) : t[i].addEventListener("load", function() {
                                        r(this)
                                    })
                                } else "video" === a ? t[i].readyState > 0 ? r(t[i]) : t[i].addEventListener("loadedmetadata", function() {
                                    r(this)
                                }) : r(t[i])
                            }
                        return !0
                    };
                "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i(), window.addEventListener("resize", i), window.objectFitPolyfill = i
            } else window.objectFitPolyfill = function() {
                return !1
            }
        }
    }()
}, function(t, e, r) {
    "use strict";
    ! function() {
        function t(t) {
            Webflow.env("design") || ($("video").each(function() {
                t && $(this).prop("autoplay") ? this.play() : this.pause()
            }), $(".w-background-video--control").each(function() {
                t ? r($(this)) : e($(this))
            }))
        }

        function e(t) {
            t.find("> span").each(function(t) {
                $(this).prop("hidden", function() {
                    return 0 === t
                })
            })
        }

        function r(t) {
            t.find("> span").each(function(t) {
                $(this).prop("hidden", function() {
                    return 1 === t
                })
            })
        }
        "undefined" != typeof window && $(document).ready(function() {
            var n = window.matchMedia("(prefers-reduced-motion: reduce)");
            n.addEventListener("change", function(e) {
                t(!e.matches)
            }), n.matches && t(!1), $("video:not([autoplay])").each(function() {
                $(this).parent().find(".w-background-video--control").each(function() {
                    e($(this))
                })
            }), $(document).on("click", ".w-background-video--control", function(t) {
                if (!Webflow.env("design")) {
                    var n = $(t.currentTarget),
                        i = $("video#".concat(n.attr("aria-controls"))).get(0);
                    if (i)
                        if (i.paused) {
                            var a = i.play();
                            r(n), a && "function" == typeof a.catch && a.catch(function() {
                                e(n)
                            })
                        } else i.pause(), e(n)
                }
            })
        })
    }()
}, function(t, e, r) {
    "use strict";
    var n = r(9);
    n.define("brand", t.exports = function(t) {
        var e, r = {},
            i = document,
            a = t("html"),
            o = t("body"),
            s = ".w-webflow-badge",
            l = window.location,
            c = /PhantomJS/i.test(navigator.userAgent),
            h = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

        function u() {
            var r = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
            t(e).attr("style", r ? "display: none !important;" : "")
        }

        function f() {
            var t = o.children(s),
                r = t.length && t.get(0) === e,
                i = n.env("editor");
            r ? i && t.remove() : (t.length && t.remove(), i || o.append(e))
        }
        return r.ready = function() {
            var r, n, o, s = a.attr("data-wf-status"),
                p = a.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(p) && l.hostname !== p && (s = !0), s && !c && (e = e || (r = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), n = t("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
                marginRight: "8px",
                width: "16px"
            }), o = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), r.append(n, o), r[0]), f(), setTimeout(f, 500), t(i).off(h, u).on(h, u))
        }, r
    })
}, function(t, e, r) {
    "use strict";
    var n = r(9);
    n.define("edit", t.exports = function(t, e, r) {
        if (r = r || {}, (n.env("test") || n.env("frame")) && !r.fixture && ! function() {
                try {
                    return window.top.__Cypress__
                } catch (t) {
                    return !1
                }
            }()) return {
            exit: 1
        };
        var i, a = t(window),
            o = t(document.documentElement),
            s = document.location,
            l = "hashchange",
            c = r.load || function() {
                i = !0, window.WebflowEditor = !0, a.off(l, u),
                    function(t) {
                        var e = window.document.createElement("iframe");
                        e.src = "https://webflow.com/site/third-party-cookie-check.html", e.style.display = "none", e.sandbox = "allow-scripts allow-same-origin";
                        var r = function r(n) {
                            "WF_third_party_cookies_unsupported" === n.data ? (g(e, r), t(!1)) : "WF_third_party_cookies_supported" === n.data && (g(e, r), t(!0))
                        };
                        e.onerror = function() {
                            g(e, r), t(!1)
                        }, window.addEventListener("message", r, !1), window.document.body.appendChild(e)
                    }(function(e) {
                        t.ajax({
                            url: v("https://editor-api.webflow.com/api/editor/view"),
                            data: {
                                siteId: o.attr("data-wf-site")
                            },
                            xhrFields: {
                                withCredentials: !0
                            },
                            dataType: "json",
                            crossDomain: !0,
                            success: f(e)
                        })
                    })
            },
            h = !1;
        try {
            h = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
        } catch (t) {}

        function u() {
            i || /\?edit/.test(s.hash) && c()
        }

        function f(t) {
            return function(e) {
                e ? (e.thirdPartyCookiesSupported = t, p(m(e.bugReporterScriptPath), function() {
                    p(m(e.scriptPath), function() {
                        window.WebflowEditor(e)
                    })
                })) : console.error("Could not load editor data")
            }
        }

        function p(e, r) {
            t.ajax({
                type: "GET",
                url: e,
                dataType: "script",
                cache: !0
            }).then(r, d)
        }

        function d(t, e, r) {
            throw console.error("Could not load editor script: " + e), r
        }

        function m(t) {
            return t.indexOf("//") >= 0 ? t : v("https://editor-api.webflow.com" + t)
        }

        function v(t) {
            return t.replace(/([^:])\/\//g, "$1/")
        }

        function g(t, e) {
            window.removeEventListener("message", e, !1), t.remove()
        }
        return h ? c() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && c() : a.on(l, u).triggerHandler(l), {}
    })
}, function(t, e, r) {
    "use strict";
    r(9).define("focus-visible", t.exports = function() {
        function t(t) {
            var e = !0,
                r = !1,
                n = null,
                i = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };

            function a(t) {
                return !!(t && t !== document && "HTML" !== t.nodeName && "BODY" !== t.nodeName && "classList" in t && "contains" in t.classList)
            }

            function o(t) {
                t.getAttribute("data-wf-focus-visible") || t.setAttribute("data-wf-focus-visible", "true")
            }

            function s() {
                e = !1
            }

            function l() {
                document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c)
            }

            function c(t) {
                t.target.nodeName && "html" === t.target.nodeName.toLowerCase() || (e = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c))
            }
            document.addEventListener("keydown", function(r) {
                r.metaKey || r.altKey || r.ctrlKey || (a(t.activeElement) && o(t.activeElement), e = !0)
            }, !0), document.addEventListener("mousedown", s, !0), document.addEventListener("pointerdown", s, !0), document.addEventListener("touchstart", s, !0), document.addEventListener("visibilitychange", function() {
                "hidden" === document.visibilityState && (r && (e = !0), l())
            }, !0), l(), t.addEventListener("focus", function(t) {
                var r, n, s;
                a(t.target) && (e || (r = t.target, n = r.type, "INPUT" === (s = r.tagName) && i[n] && !r.readOnly || "TEXTAREA" === s && !r.readOnly || r.isContentEditable)) && o(t.target)
            }, !0), t.addEventListener("blur", function(t) {
                var e;
                a(t.target) && t.target.hasAttribute("data-wf-focus-visible") && (r = !0, window.clearTimeout(n), n = window.setTimeout(function() {
                    r = !1
                }, 100), (e = t.target).getAttribute("data-wf-focus-visible") && e.removeAttribute("data-wf-focus-visible"))
            }, !0)
        }
        return {
            ready: function() {
                if ("undefined" != typeof document) try {
                    document.querySelector(":focus-visible")
                } catch (e) {
                    t(document)
                }
            }
        }
    })
}, function(t, e, r) {
    "use strict";
    r(9).define("focus-within", t.exports = function() {
        function t(t) {
            for (var e = [t], r = null; r = t.parentNode || t.host || t.defaultView;) e.push(r), t = r;
            return e
        }

        function e(t) {
            "function" != typeof t.getAttribute || t.getAttribute("data-wf-focus-within") || t.setAttribute("data-wf-focus-within", "true")
        }

        function r(t) {
            "function" == typeof t.getAttribute && t.getAttribute("data-wf-focus-within") && t.removeAttribute("data-wf-focus-within")
        }
        return {
            ready: function() {
                if ("undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within")) try {
                    document.querySelector(":focus-within")
                } catch (i) {
                    n = function(n) {
                        var i;
                        i || (window.requestAnimationFrame(function() {
                            i = !1, "blur" === n.type && Array.prototype.slice.call(t(n.target)).forEach(r), "focus" === n.type && Array.prototype.slice.call(t(n.target)).forEach(e)
                        }), i = !0)
                    }, document.addEventListener("focus", n, !0), document.addEventListener("blur", n, !0), e(document.body)
                }
                var n
            }
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(9);
    n.define("focus", t.exports = function() {
        var t = [],
            e = !1;

        function r(r) {
            e && (r.preventDefault(), r.stopPropagation(), r.stopImmediatePropagation(), t.unshift(r))
        }

        function i(r) {
            (function(t) {
                var e = t.target,
                    r = e.tagName;
                return /^a$/i.test(r) && null != e.href || /^(button|textarea)$/i.test(r) && !0 !== e.disabled || /^input$/i.test(r) && /^(button|reset|submit|radio|checkbox)$/i.test(e.type) && !e.disabled || !/^(button|input|textarea|select|a)$/i.test(r) && !Number.isNaN(Number.parseFloat(e.tabIndex)) || /^audio$/i.test(r) || /^video$/i.test(r) && !0 === e.controls
            })(r) && (e = !0, setTimeout(function() {
                for (e = !1, r.target.focus(); t.length > 0;) {
                    var n = t.pop();
                    n.target.dispatchEvent(new MouseEvent(n.type, n))
                }
            }, 0))
        }
        return {
            ready: function() {
                "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && n.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = window.jQuery,
        i = {},
        a = [],
        o = {
            reset: function(t, e) {
                e.__wf_intro = null
            },
            intro: function(t, e) {
                e.__wf_intro || (e.__wf_intro = !0, n(e).triggerHandler(i.types.INTRO))
            },
            outro: function(t, e) {
                e.__wf_intro && (e.__wf_intro = null, n(e).triggerHandler(i.types.OUTRO))
            }
        };
    i.triggers = {}, i.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, i.init = function() {
        for (var t = a.length, e = 0; e < t; e++) {
            var r = a[e];
            r[0](0, r[1])
        }
        a = [], n.extend(i.triggers, o)
    }, i.async = function() {
        for (var t in o) {
            var e = o[t];
            o.hasOwnProperty(t) && (i.triggers[t] = function(t, r) {
                a.push([e, r])
            })
        }
    }, i.async(), t.exports = i
}, function(t, e, r) {
    "use strict";
    var n = r(9),
        i = r(370);
    i.setEnv(n.env), n.define("ix2", t.exports = function() {
        return i
    })
}, function(t, e, r) {
    "use strict";
    var n = r(57),
        i = r(3);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setEnv = function(t) {
        t() && (0, s.observeRequests)(c)
    }, e.init = function(t) {
        h(), (0, s.startEngine)({
            store: c,
            rawData: t,
            allowEvents: !0
        })
    }, e.destroy = h, e.actions = e.store = void 0, r(371);
    var a = r(168),
        o = i(r(386)),
        s = r(185),
        l = n(r(121));
    e.actions = l;
    var c = (0, a.createStore)(o.default);

    function h() {
        (0, s.stopEngine)(c)
    }
    e.store = c
}, function(t, e, r) {
    var n = r(372);
    t.exports = n
}, function(t, e, r) {
    var n = r(373);
    t.exports = n
}, function(t, e, r) {
    r(159);
    var n = r(374);
    t.exports = n("Array", "includes")
}, function(t, e, r) {
    var n = r(0),
        i = r(2);
    t.exports = function(t, e) {
        return i(n[t].prototype[e])
    }
}, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(170),
        i = r(378),
        a = r(379),
        o = "[object Null]",
        s = "[object Undefined]",
        l = n.default ? n.default.toStringTag : void 0;
    e.default = function(t) {
        return null == t ? void 0 === t ? s : o : l && l in Object(t) ? Object(i.default)(t) : Object(a.default)(t)
    }
}, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(377),
        i = "object" == typeof self && self && self.Object === Object && self,
        a = n.default || i || Function("return this")();
    e.default = a
}, function(t, e, r) {
    "use strict";
    r.r(e),
        function(t) {
            var r = "object" == typeof t && t && t.Object === Object && t;
            e.default = r
        }.call(this, r(61))
}, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(170),
        i = Object.prototype,
        a = i.hasOwnProperty,
        o = i.toString,
        s = n.default ? n.default.toStringTag : void 0;
    e.default = function(t) {
        var e = a.call(t, s),
            r = t[s];
        try {
            t[s] = void 0;
            var n = !0
        } catch (t) {}
        var i = o.call(t);
        return n && (e ? t[s] = r : delete t[s]), i
    }
}, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = Object.prototype.toString;
    e.default = function(t) {
        return n.call(t)
    }
}, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(381),
        i = Object(n.default)(Object.getPrototypeOf, Object);
    e.default = i
}, function(t, e, r) {
    "use strict";
    r.r(e), e.default = function(t, e) {
        return function(r) {
            return t(e(r))
        }
    }
}, function(t, e, r) {
    "use strict";
    r.r(e), e.default = function(t) {
        return null != t && "object" == typeof t
    }
}, function(t, e, r) {
    "use strict";
    r.r(e),
        function(t, n) {
            var i, a = r(385);
            i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : n;
            var o = Object(a.default)(i);
            e.default = o
        }.call(this, r(61), r(384)(t))
}, function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), Object.defineProperty(e, "exports", {
                enumerable: !0
            }), e.webpackPolyfill = 1
        }
        return e
    }
}, function(t, e, r) {
    "use strict";

    function n(t) {
        var e, r = t.Symbol;
        return "function" == typeof r ? r.observable ? e = r.observable : (e = r("observable"), r.observable = e) : e = "@@observable", e
    }
    r.r(e), r.d(e, "default", function() {
        return n
    })
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var n = r(168),
        i = r(387),
        a = r(393),
        o = r(394),
        s = r(45),
        l = r(411),
        c = r(412),
        h = s.IX2ElementsReducer.ixElements,
        u = (0, n.combineReducers)({
            ixData: i.ixData,
            ixRequest: a.ixRequest,
            ixSession: o.ixSession,
            ixElements: h,
            ixInstances: l.ixInstances,
            ixParameters: c.ixParameters
        });
    e.default = u
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixData = void 0;
    var n = r(14).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    e.ixData = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case n:
                return e.payload.ixData || Object.freeze({});
            default:
                return t
        }
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.QuickEffectDirectionConsts = e.QuickEffectIds = e.EventLimitAffectedElements = e.EventContinuousMouseAxes = e.EventBasedOn = e.EventAppliesTo = e.EventTypeConsts = void 0;
    e.EventTypeConsts = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL"
    };
    e.EventAppliesTo = {
        ELEMENT: "ELEMENT",
        CLASS: "CLASS",
        PAGE: "PAGE"
    };
    e.EventBasedOn = {
        ELEMENT: "ELEMENT",
        VIEWPORT: "VIEWPORT"
    };
    e.EventContinuousMouseAxes = {
        X_AXIS: "X_AXIS",
        Y_AXIS: "Y_AXIS"
    };
    e.EventLimitAffectedElements = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
    };
    e.QuickEffectIds = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
    };
    e.QuickEffectDirectionConsts = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.InteractionTypeConsts = void 0;
    e.InteractionTypeConsts = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION"
    }
}, function(t, e, r) {
    "use strict";
    var n, i = r(3)(r(38));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ReducedMotionTypes = void 0;
    var a = r(175).ActionTypeConsts,
        o = a.TRANSFORM_MOVE,
        s = a.TRANSFORM_SCALE,
        l = a.TRANSFORM_ROTATE,
        c = a.TRANSFORM_SKEW,
        h = a.STYLE_SIZE,
        u = a.STYLE_FILTER,
        f = (n = {}, (0, i.default)(n, o, !0), (0, i.default)(n, s, !0), (0, i.default)(n, l, !0), (0, i.default)(n, c, !0), (0, i.default)(n, h, !0), (0, i.default)(n, u, !0), n);
    e.ReducedMotionTypes = f
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
    e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
    e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
    e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
    e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
    e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
    e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
    e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
    e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
    e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
    e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
    e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
    e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
    e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
    e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
    e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
    e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
    e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
    e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
    e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED"
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
    e.IX2_ID_DELIMITER = "|";
    e.WF_PAGE = "data-wf-page";
    e.W_MOD_JS = "w-mod-js";
    e.W_MOD_IX = "w-mod-ix";
    e.BOUNDARY_SELECTOR = ".w-dyn-item";
    e.CONFIG_X_VALUE = "xValue";
    e.CONFIG_Y_VALUE = "yValue";
    e.CONFIG_Z_VALUE = "zValue";
    e.CONFIG_VALUE = "value";
    e.CONFIG_X_UNIT = "xUnit";
    e.CONFIG_Y_UNIT = "yUnit";
    e.CONFIG_Z_UNIT = "zUnit";
    e.CONFIG_UNIT = "unit";
    e.TRANSFORM = "transform";
    e.TRANSLATE_X = "translateX";
    e.TRANSLATE_Y = "translateY";
    e.TRANSLATE_Z = "translateZ";
    e.TRANSLATE_3D = "translate3d";
    e.SCALE_X = "scaleX";
    e.SCALE_Y = "scaleY";
    e.SCALE_Z = "scaleZ";
    e.SCALE_3D = "scale3d";
    e.ROTATE_X = "rotateX";
    e.ROTATE_Y = "rotateY";
    e.ROTATE_Z = "rotateZ";
    e.SKEW = "skew";
    e.SKEW_X = "skewX";
    e.SKEW_Y = "skewY";
    e.OPACITY = "opacity";
    e.FILTER = "filter";
    e.WIDTH = "width";
    e.HEIGHT = "height";
    e.BACKGROUND_COLOR = "backgroundColor";
    e.BACKGROUND = "background";
    e.BORDER_COLOR = "borderColor";
    e.COLOR = "color";
    e.DISPLAY = "display";
    e.FLEX = "flex";
    e.WILL_CHANGE = "willChange";
    e.AUTO = "AUTO";
    e.COMMA_DELIMITER = ",";
    e.COLON_DELIMITER = ":";
    e.BAR_DELIMITER = "|";
    e.CHILDREN = "CHILDREN";
    e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
    e.SIBLINGS = "SIBLINGS";
    e.PARENT = "PARENT";
    e.PRESERVE_3D = "preserve-3d";
    e.HTML_ELEMENT = "HTML_ELEMENT";
    e.PLAIN_OBJECT = "PLAIN_OBJECT";
    e.ABSTRACT_NODE = "ABSTRACT_NODE";
    e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
    e.RENDER_GENERAL = "RENDER_GENERAL";
    e.RENDER_STYLE = "RENDER_STYLE";
    e.RENDER_PLUGIN = "RENDER_PLUGIN"
}, function(t, e, r) {
    "use strict";
    var n, i = r(3)(r(38)),
        a = r(3);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixRequest = void 0;
    var o = a(r(46)),
        s = r(14),
        l = r(58),
        c = s.IX2EngineActionTypes,
        h = c.IX2_PREVIEW_REQUESTED,
        u = c.IX2_PLAYBACK_REQUESTED,
        f = c.IX2_STOP_REQUESTED,
        p = c.IX2_CLEAR_REQUESTED,
        d = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        m = Object.create(null, (n = {}, (0, i.default)(n, h, {
            value: "preview"
        }), (0, i.default)(n, u, {
            value: "playback"
        }), (0, i.default)(n, f, {
            value: "stop"
        }), (0, i.default)(n, p, {
            value: "clear"
        }), n));
    e.ixRequest = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
            e = arguments.length > 1 ? arguments[1] : void 0;
        if (e.type in m) {
            var r = [m[e.type]];
            return (0, l.setIn)(t, [r], (0, o.default)({}, e.payload))
        }
        return t
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixSession = void 0;
    var n = r(14),
        i = r(58),
        a = n.IX2EngineActionTypes,
        o = a.IX2_SESSION_INITIALIZED,
        s = a.IX2_SESSION_STARTED,
        l = a.IX2_TEST_FRAME_RENDERED,
        c = a.IX2_SESSION_STOPPED,
        h = a.IX2_EVENT_LISTENER_ADDED,
        u = a.IX2_EVENT_STATE_CHANGED,
        f = a.IX2_ANIMATION_FRAME_CHANGED,
        p = a.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        d = a.IX2_VIEWPORT_WIDTH_CHANGED,
        m = a.IX2_MEDIA_QUERIES_DEFINED,
        v = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        };
    e.ixSession = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case o:
                var r = e.payload,
                    n = r.hasBoundaryNodes,
                    a = r.reducedMotion;
                return (0, i.merge)(t, {
                    hasBoundaryNodes: n,
                    reducedMotion: a
                });
            case s:
                return (0, i.set)(t, "active", !0);
            case l:
                var g = e.payload.step,
                    y = void 0 === g ? 20 : g;
                return (0, i.set)(t, "tick", t.tick + y);
            case c:
                return v;
            case f:
                var E = e.payload.now;
                return (0, i.set)(t, "tick", E);
            case h:
                var b = (0, i.addLast)(t.eventListeners, e.payload);
                return (0, i.set)(t, "eventListeners", b);
            case u:
                var _ = e.payload,
                    x = _.stateKey,
                    w = _.newState;
                return (0, i.setIn)(t, ["eventState", x], w);
            case p:
                var A = e.payload,
                    S = A.actionListId,
                    T = A.isPlaying;
                return (0, i.setIn)(t, ["playbackState", S], T);
            case d:
                for (var I = e.payload, P = I.width, C = I.mediaQueries, D = C.length, M = null, O = 0; O < D; O++) {
                    var k = C[O],
                        R = k.key,
                        F = k.min,
                        L = k.max;
                    if (P >= F && P <= L) {
                        M = R;
                        break
                    }
                }
                return (0, i.merge)(t, {
                    viewportWidth: P,
                    mediaQueryKey: M
                });
            case m:
                return (0, i.set)(t, "hasDefinedMediaQueries", !0);
            default:
                return t
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t)) {
            for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e];
            return r
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createElementState = _, e.mergeActionState = x, e.ixElements = void 0;
    var n = r(58),
        i = r(14),
        a = i.IX2EngineConstants,
        o = (a.HTML_ELEMENT, a.PLAIN_OBJECT),
        s = (a.ABSTRACT_NODE, a.CONFIG_X_VALUE),
        l = a.CONFIG_Y_VALUE,
        c = a.CONFIG_Z_VALUE,
        h = a.CONFIG_VALUE,
        u = a.CONFIG_X_UNIT,
        f = a.CONFIG_Y_UNIT,
        p = a.CONFIG_Z_UNIT,
        d = a.CONFIG_UNIT,
        m = i.IX2EngineActionTypes,
        v = m.IX2_SESSION_STOPPED,
        g = m.IX2_INSTANCE_ADDED,
        y = m.IX2_ELEMENT_STATE_CHANGED,
        E = {},
        b = "refState";

    function _(t, e, r, i, a) {
        var s = r === o ? (0, n.getIn)(a, ["config", "target", "objectId"]) : null;
        return (0, n.mergeIn)(t, [i], {
            id: i,
            ref: e,
            refId: s,
            refType: r
        })
    }

    function x(t, e, r, i, a) {
        var o = function(t) {
                var e = t.config;
                return w.reduce(function(t, r) {
                    var n = r[0],
                        i = r[1],
                        a = e[n],
                        o = e[i];
                    return null != a && null != o && (t[i] = o), t
                }, {})
            }(a),
            s = [e, b, r];
        return (0, n.mergeIn)(t, s, i, o)
    }
    e.ixElements = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (e.type) {
            case v:
                return E;
            case g:
                var r = e.payload,
                    i = r.elementId,
                    a = r.element,
                    o = r.origin,
                    s = r.actionItem,
                    l = r.refType,
                    c = s.actionTypeId,
                    h = t;
                return (0, n.getIn)(h, [i, a]) !== a && (h = _(h, a, l, i, s)), x(h, i, c, o, s);
            case y:
                var u = e.payload;
                return x(t, u.elementId, u.actionTypeId, u.current, u.actionItem);
            default:
                return t
        }
    };
    var w = [
        [s, u],
        [l, f],
        [c, p],
        [h, d]
    ]
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;
    e.getPluginConfig = function(t) {
        return t.value
    };
    e.getPluginDuration = function(t, e) {
        if ("auto" !== e.config.duration) return null;
        var r = parseFloat(t.getAttribute("data-duration"));
        return r > 0 ? 1e3 * r : 1e3 * parseFloat(t.getAttribute("data-default-duration"))
    };
    e.getPluginOrigin = function(t) {
        return t || {
            value: 0
        }
    };
    e.getPluginDestination = function(t) {
        return {
            value: t.value
        }
    };
    e.createPluginInstance = function(t) {
        var e = window.Webflow.require("lottie").createInstance(t);
        return e.stop(), e.setSubframe(!0), e
    };
    e.renderPlugin = function(t, e, r) {
        if (t) {
            var n = e[r.actionTypeId].value / 100;
            t.goToFrame(t.frames * n)
        }
    };
    e.clearPlugin = function(t) {
        window.Webflow.require("lottie").createInstance(t).stop()
    }
}, function(t, e, r) {
    "use strict";
    var n, i, a, o = r(3),
        s = o(r(37)),
        l = o(r(38)),
        c = r(3);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getInstanceId = function() {
        return "i" + dt++
    }, e.getElementId = function(t, e) {
        for (var r in t) {
            var n = t[r];
            if (n && n.ref === e) return n.id
        }
        return "e" + mt++
    }, e.reifyState = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.events,
            r = t.actionLists,
            n = t.site,
            i = (0, u.default)(e, function(t, e) {
                var r = e.eventTypeId;
                return t[r] || (t[r] = {}), t[r][e.id] = e, t
            }, {}),
            a = n && n.mediaQueries,
            o = [];
        a ? o = a.map(function(t) {
            return t.key
        }) : (a = [], console.warn("IX2 missing mediaQueries in site data"));
        return {
            ixData: {
                events: e,
                actionLists: r,
                eventTypeMap: i,
                mediaQueries: a,
                mediaQueryKeys: o
            }
        }
    }, e.observeStore = function(t) {
        var e = t.store,
            r = t.select,
            n = t.onChange,
            i = t.comparator,
            a = void 0 === i ? vt : i,
            o = e.getState,
            s = (0, e.subscribe)(function() {
                var t = r(o());
                if (null == t) return void s();
                a(t, l) || n(l = t, e)
            }),
            l = r(o());
        return s
    }, e.getAffectedElements = yt, e.getComputedStyle = function(t) {
        var e = t.element,
            r = t.actionItem;
        if (!y.IS_BROWSER_ENV) return {};
        switch (r.actionTypeId) {
            case it:
            case at:
            case ot:
            case st:
            case lt:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }, e.getInstanceOrigin = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            n = arguments.length > 3 ? arguments[3] : void 0,
            i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
            a = n.actionTypeId,
            o = n.config;
        if ((0, g.isPluginType)(a)) return (0, g.getPluginOrigin)(a)(e[a]);
        switch (a) {
            case Z:
            case J:
            case tt:
            case et:
                return e[a] || wt[a];
            case nt:
                return bt(e[a], n.config.filters);
            case rt:
                return {
                    value: (0, h.default)(parseFloat(i(t, D)), 1)
                };
            case it:
                var s, l, c = i(t, O),
                    u = i(t, k);
                return s = o.widthUnit === H ? Et.test(c) ? parseFloat(c) : parseFloat(r.width) : (0, h.default)(parseFloat(c), parseFloat(r.width)), l = o.heightUnit === H ? Et.test(u) ? parseFloat(u) : parseFloat(r.height) : (0, h.default)(parseFloat(u), parseFloat(r.height)), {
                    widthValue: s,
                    heightValue: l
                };
            case at:
            case ot:
            case st:
                return function(t) {
                    var e = t.element,
                        r = t.actionTypeId,
                        n = t.computedStyle,
                        i = t.getStyle,
                        a = ut[r],
                        o = i(e, a),
                        s = It.test(o) ? o : n[a],
                        l = function(t, e) {
                            var r = t.exec(e);
                            return r ? r[1] : ""
                        }(Pt, s).split(W);
                    return {
                        rValue: (0, h.default)(parseInt(l[0], 10), 255),
                        gValue: (0, h.default)(parseInt(l[1], 10), 255),
                        bValue: (0, h.default)(parseInt(l[2], 10), 255),
                        aValue: (0, h.default)(parseFloat(l[3]), 1)
                    }
                }({
                    element: t,
                    actionTypeId: a,
                    computedStyle: r,
                    getStyle: i
                });
            case lt:
                return {
                    value: (0, h.default)(i(t, j), r.display)
                };
            case ct:
                return e[a] || {
                    value: 0
                };
            default:
                return
        }
    }, e.getDestinationValues = function(t) {
        var e = t.element,
            r = t.actionItem,
            n = t.elementApi,
            i = r.actionTypeId;
        if ((0, g.isPluginType)(i)) return (0, g.getPluginDestination)(i)(r.config);
        switch (i) {
            case Z:
            case J:
            case tt:
            case et:
                var a = r.config,
                    o = a.xValue,
                    s = a.yValue,
                    l = a.zValue;
                return {
                    xValue: o,
                    yValue: s,
                    zValue: l
                };
            case it:
                var c = n.getStyle,
                    h = n.setStyle,
                    u = n.getProperty,
                    f = r.config,
                    p = f.widthUnit,
                    d = f.heightUnit,
                    m = r.config,
                    v = m.widthValue,
                    E = m.heightValue;
                if (!y.IS_BROWSER_ENV) return {
                    widthValue: v,
                    heightValue: E
                };
                if (p === H) {
                    var b = c(e, O);
                    h(e, O, ""), v = u(e, "offsetWidth"), h(e, O, b)
                }
                if (d === H) {
                    var _ = c(e, k);
                    h(e, k, ""), E = u(e, "offsetHeight"), h(e, k, _)
                }
                return {
                    widthValue: v,
                    heightValue: E
                };
            case at:
            case ot:
            case st:
                var x = r.config,
                    w = x.rValue,
                    A = x.gValue,
                    S = x.bValue,
                    T = x.aValue;
                return {
                    rValue: w,
                    gValue: A,
                    bValue: S,
                    aValue: T
                };
            case nt:
                return r.config.filters.reduce(_t, {});
            default:
                var I = r.config.value;
                return {
                    value: I
                }
        }
    }, e.getRenderType = xt, e.getStyleProp = function(t, e) {
        return t === K ? e.replace("STYLE_", "").toLowerCase() : null
    }, e.renderHTMLElement = function(t, e, r, n, i, a, o, s, l) {
        switch (s) {
            case q:
                return function(t, e, r, n, i) {
                    var a = Tt.map(function(t) {
                            var r = wt[t],
                                n = e[t] || {},
                                i = n.xValue,
                                a = void 0 === i ? r.xValue : i,
                                o = n.yValue,
                                s = void 0 === o ? r.yValue : o,
                                l = n.zValue,
                                c = void 0 === l ? r.zValue : l,
                                h = n.xUnit,
                                u = void 0 === h ? "" : h,
                                f = n.yUnit,
                                p = void 0 === f ? "" : f,
                                d = n.zUnit,
                                m = void 0 === d ? "" : d;
                            switch (t) {
                                case Z:
                                    return "".concat(x, "(").concat(a).concat(u, ", ").concat(s).concat(p, ", ").concat(c).concat(m, ")");
                                case J:
                                    return "".concat(w, "(").concat(a).concat(u, ", ").concat(s).concat(p, ", ").concat(c).concat(m, ")");
                                case tt:
                                    return "".concat(A, "(").concat(a).concat(u, ") ").concat(S, "(").concat(s).concat(p, ") ").concat(T, "(").concat(c).concat(m, ")");
                                case et:
                                    return "".concat(I, "(").concat(a).concat(u, ", ").concat(s).concat(p, ")");
                                default:
                                    return ""
                            }
                        }).join(" "),
                        o = i.setStyle;
                    Ct(t, y.TRANSFORM_PREFIXED, i), o(t, y.TRANSFORM_PREFIXED, a), s = n, l = r, c = s.actionTypeId, h = l.xValue, u = l.yValue, f = l.zValue, (c === Z && void 0 !== f || c === J && void 0 !== f || c === tt && (void 0 !== h || void 0 !== u)) && o(t, y.TRANSFORM_STYLE_PREFIXED, P);
                    var s, l, c, h, u, f
                }(t, e, r, i, o);
            case K:
                return function(t, e, r, n, i, a) {
                    var o = a.setStyle,
                        s = n.actionTypeId,
                        l = n.config;
                    switch (s) {
                        case it:
                            var c = n.config,
                                h = c.widthUnit,
                                f = void 0 === h ? "" : h,
                                p = c.heightUnit,
                                d = void 0 === p ? "" : p,
                                m = r.widthValue,
                                v = r.heightValue;
                            void 0 !== m && (f === H && (f = "px"), Ct(t, O, a), o(t, O, m + f)), void 0 !== v && (d === H && (d = "px"), Ct(t, k, a), o(t, k, v + d));
                            break;
                        case nt:
                            ! function(t, e, r, n) {
                                var i = (0, u.default)(e, function(t, e, n) {
                                        return "".concat(t, " ").concat(n, "(").concat(e).concat(St(n, r), ")")
                                    }, ""),
                                    a = n.setStyle;
                                Ct(t, M, n), a(t, M, i)
                            }(t, r, l, a);
                            break;
                        case at:
                        case ot:
                        case st:
                            var g = ut[s],
                                y = Math.round(r.rValue),
                                E = Math.round(r.gValue),
                                b = Math.round(r.bValue),
                                _ = r.aValue;
                            Ct(t, g, a), o(t, g, _ >= 1 ? "rgb(".concat(y, ",").concat(E, ",").concat(b, ")") : "rgba(".concat(y, ",").concat(E, ",").concat(b, ",").concat(_, ")"));
                            break;
                        default:
                            var x = l.unit,
                                w = void 0 === x ? "" : x;
                            Ct(t, i, a), o(t, i, r.value + w)
                    }
                }(t, 0, r, i, a, o);
            case Y:
                return function(t, e, r) {
                    var n = r.setStyle;
                    switch (e.actionTypeId) {
                        case lt:
                            var i = e.config.value;
                            return void(i === C && y.IS_BROWSER_ENV ? n(t, j, y.FLEX_PREFIXED) : n(t, j, i))
                    }
                }(t, i, o);
            case $:
                var c = i.actionTypeId;
                if ((0, g.isPluginType)(c)) return (0, g.renderPlugin)(c)(l, e, i)
        }
    }, e.clearAllStyles = function(t) {
        var e = t.store,
            r = t.elementApi,
            n = e.getState().ixData,
            i = n.events,
            a = void 0 === i ? {} : i,
            o = n.actionLists,
            s = void 0 === o ? {} : o;
        Object.keys(a).forEach(function(t) {
            var e = a[t],
                n = e.action.config,
                i = n.actionListId,
                o = s[i];
            o && Mt({
                actionList: o,
                event: e,
                elementApi: r
            })
        }), Object.keys(s).forEach(function(t) {
            Mt({
                actionList: s[t],
                elementApi: r
            })
        })
    }, e.cleanupHTMLElement = function(t, e, r) {
        var n = r.setStyle,
            i = r.getStyle,
            a = e.actionTypeId;
        if (a === it) {
            var o = e.config;
            o.widthUnit === H && n(t, O, ""), o.heightUnit === H && n(t, k, "")
        }
        i(t, z) && kt({
            effect: Dt,
            actionTypeId: a,
            elementApi: r
        })(t)
    }, e.getMaxDurationItemIndex = Ft, e.getActionListProgress = function(t, e) {
        var r = t.actionItemGroups,
            n = t.useFirstGroupAsInitialState,
            i = e.actionItem,
            a = e.verboseTimeElapsed,
            o = void 0 === a ? 0 : a,
            s = 0,
            l = 0;
        return r.forEach(function(t, e) {
            if (!n || 0 !== e) {
                var r = t.actionItems,
                    a = r[Ft(r)],
                    c = a.config,
                    h = a.actionTypeId;
                i.id === a.id && (l = s + o);
                var u = xt(h) === Y ? 0 : c.duration;
                s += c.delay + u
            }
        }), s > 0 ? (0, v.optimizeFloat)(l / s) : 0
    }, e.reduceListToGroup = function(t) {
        var e = t.actionList,
            r = t.actionItemId,
            n = t.rawData,
            i = e.actionItemGroups,
            a = e.continuousParameterGroups,
            o = [],
            s = function(t) {
                return o.push((0, p.mergeIn)(t, ["config"], {
                    delay: 0,
                    duration: 0
                })), t.id === r
            };
        return i && i.some(function(t) {
            return t.actionItems.some(s)
        }), a && a.some(function(t) {
            return t.continuousActionGroups.some(function(t) {
                return t.actionItems.some(s)
            })
        }), (0, p.setIn)(n, ["actionLists"], (0, l.default)({}, e.id, {
            id: e.id,
            actionItemGroups: [{
                actionItems: o
            }]
        }))
    }, e.shouldNamespaceEventParameter = function(t, e) {
        var r = e.basedOn;
        return t === d.EventTypeConsts.SCROLLING_IN_VIEW && (r === d.EventBasedOn.ELEMENT || null == r) || t === d.EventTypeConsts.MOUSE_MOVE && r === d.EventBasedOn.ELEMENT
    }, e.getNamespacedParameterId = function(t, e) {
        return t + X + e
    }, e.shouldAllowMediaQuery = function(t, e) {
        if (null == e) return !0;
        return -1 !== t.indexOf(e)
    }, e.mediaQueriesEqual = function(t, e) {
        return (0, m.default)(t && t.sort(), e && e.sort())
    }, e.stringifyTarget = function(t) {
        if ("string" == typeof t) return t;
        var e = t.id,
            r = void 0 === e ? "" : e,
            n = t.selector,
            i = void 0 === n ? "" : n,
            a = t.useEventTarget;
        return r + U + i + U + (void 0 === a ? "" : a)
    }, Object.defineProperty(e, "shallowEqual", {
        enumerable: !0,
        get: function() {
            return m.default
        }
    }), e.getItemConfigByKey = void 0;
    var h = c(r(401)),
        u = c(r(402)),
        f = c(r(408)),
        p = r(58),
        d = r(14),
        m = c(r(410)),
        v = r(180),
        g = r(182),
        y = r(120),
        E = d.IX2EngineConstants,
        b = E.BACKGROUND,
        _ = E.TRANSFORM,
        x = E.TRANSLATE_3D,
        w = E.SCALE_3D,
        A = E.ROTATE_X,
        S = E.ROTATE_Y,
        T = E.ROTATE_Z,
        I = E.SKEW,
        P = E.PRESERVE_3D,
        C = E.FLEX,
        D = E.OPACITY,
        M = E.FILTER,
        O = E.WIDTH,
        k = E.HEIGHT,
        R = E.BACKGROUND_COLOR,
        F = E.BORDER_COLOR,
        L = E.COLOR,
        N = E.CHILDREN,
        V = E.IMMEDIATE_CHILDREN,
        B = E.SIBLINGS,
        G = E.PARENT,
        j = E.DISPLAY,
        z = E.WILL_CHANGE,
        H = E.AUTO,
        W = E.COMMA_DELIMITER,
        X = E.COLON_DELIMITER,
        U = E.BAR_DELIMITER,
        q = E.RENDER_TRANSFORM,
        Y = E.RENDER_GENERAL,
        K = E.RENDER_STYLE,
        $ = E.RENDER_PLUGIN,
        Q = d.ActionTypeConsts,
        Z = Q.TRANSFORM_MOVE,
        J = Q.TRANSFORM_SCALE,
        tt = Q.TRANSFORM_ROTATE,
        et = Q.TRANSFORM_SKEW,
        rt = Q.STYLE_OPACITY,
        nt = Q.STYLE_FILTER,
        it = Q.STYLE_SIZE,
        at = Q.STYLE_BACKGROUND_COLOR,
        ot = Q.STYLE_BORDER,
        st = Q.STYLE_TEXT_COLOR,
        lt = Q.GENERAL_DISPLAY,
        ct = "OBJECT_VALUE",
        ht = function(t) {
            return t.trim()
        },
        ut = Object.freeze((n = {}, (0, l.default)(n, at, R), (0, l.default)(n, ot, F), (0, l.default)(n, st, L), n)),
        ft = Object.freeze((i = {}, (0, l.default)(i, y.TRANSFORM_PREFIXED, _), (0, l.default)(i, R, b), (0, l.default)(i, D, D), (0, l.default)(i, M, M), (0, l.default)(i, O, O), (0, l.default)(i, k, k), i)),
        pt = {},
        dt = 1;
    var mt = 1;
    var vt = function(t, e) {
        return t === e
    };

    function gt(t) {
        var e = (0, s.default)(t);
        return "string" === e ? {
            id: t
        } : null != t && "object" === e ? {
            id: t.id,
            objectId: t.objectId,
            selector: t.selector,
            selectorGuids: t.selectorGuids,
            appliesTo: t.appliesTo,
            useEventTarget: t.useEventTarget
        } : {}
    }

    function yt(t) {
        var e, r, n, i = t.config,
            a = t.event,
            o = t.eventTarget,
            s = t.elementRoot,
            l = t.elementApi;
        if (!l) throw new Error("IX2 missing elementApi");
        var c = i.targets;
        if (Array.isArray(c) && c.length > 0) return c.reduce(function(t, e) {
            return t.concat(yt({
                config: {
                    target: e
                },
                event: a,
                eventTarget: o,
                elementRoot: s,
                elementApi: l
            }))
        }, []);
        var h = l.getValidDocument,
            u = l.getQuerySelector,
            f = l.queryDocument,
            p = l.getChildElements,
            m = l.getSiblingElements,
            v = l.matchSelector,
            g = l.elementContains,
            E = l.isSiblingNode,
            b = i.target;
        if (!b) return [];
        var _ = gt(b),
            x = _.id,
            w = _.objectId,
            A = _.selector,
            S = _.selectorGuids,
            T = _.appliesTo,
            I = _.useEventTarget;
        if (w) return [pt[w] || (pt[w] = {})];
        if (T === d.EventAppliesTo.PAGE) {
            var P = h(x);
            return P ? [P] : []
        }
        var C, D, M, O = (null !== (e = null == a ? void 0 : null === (r = a.action) || void 0 === r ? void 0 : null === (n = r.config) || void 0 === n ? void 0 : n.affectedElements) && void 0 !== e ? e : {})[x || A] || {},
            k = Boolean(O.id || O.selector),
            R = a && u(gt(a.target));
        if (k ? (C = O.limitAffectedElements, D = R, M = u(O)) : D = M = u({
                id: x,
                selector: A,
                selectorGuids: S
            }), a && I) {
            var F = o && (M || !0 === I) ? [o] : f(R);
            if (M) {
                if (I === G) return f(M).filter(function(t) {
                    return F.some(function(e) {
                        return g(t, e)
                    })
                });
                if (I === N) return f(M).filter(function(t) {
                    return F.some(function(e) {
                        return g(e, t)
                    })
                });
                if (I === B) return f(M).filter(function(t) {
                    return F.some(function(e) {
                        return E(e, t)
                    })
                })
            }
            return F
        }
        return null == D || null == M ? [] : y.IS_BROWSER_ENV && s ? f(M).filter(function(t) {
            return s.contains(t)
        }) : C === N ? f(D, M) : C === V ? p(f(D)).filter(v(M)) : C === B ? m(f(D)).filter(v(M)) : f(M)
    }
    var Et = /px/,
        bt = function(t, e) {
            return e.reduce(function(t, e) {
                return null == t[e.type] && (t[e.type] = At[e.type]), t
            }, t || {})
        };
    var _t = function(t, e) {
        return e && (t[e.type] = e.value || 0), t
    };

    function xt(t) {
        return /^TRANSFORM_/.test(t) ? q : /^STYLE_/.test(t) ? K : /^GENERAL_/.test(t) ? Y : /^PLUGIN_/.test(t) ? $ : void 0
    }
    e.getItemConfigByKey = function(t, e, r) {
        if ((0, g.isPluginType)(t)) return (0, g.getPluginConfig)(t)(r, e);
        switch (t) {
            case nt:
                var n = (0, f.default)(r.filters, function(t) {
                    return t.type === e
                });
                return n ? n.value : 0;
            default:
                return r[e]
        }
    };
    var wt = (a = {}, (0, l.default)(a, Z, Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        })), (0, l.default)(a, J, Object.freeze({
            xValue: 1,
            yValue: 1,
            zValue: 1
        })), (0, l.default)(a, tt, Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        })), (0, l.default)(a, et, Object.freeze({
            xValue: 0,
            yValue: 0
        })), a),
        At = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        St = function(t, e) {
            var r = (0, f.default)(e.filters, function(e) {
                return e.type === t
            });
            if (r && r.unit) return r.unit;
            switch (t) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        },
        Tt = Object.keys(wt);
    var It = /^rgb/,
        Pt = RegExp("rgba?".concat("\\(([^)]+)\\)"));

    function Ct(t, e, r) {
        if (y.IS_BROWSER_ENV) {
            var n = ft[e];
            if (n) {
                var i = r.getStyle,
                    a = r.setStyle,
                    o = i(t, z);
                if (o) {
                    var s = o.split(W).map(ht); - 1 === s.indexOf(n) && a(t, z, s.concat(n).join(W))
                } else a(t, z, n)
            }
        }
    }

    function Dt(t, e, r) {
        if (y.IS_BROWSER_ENV) {
            var n = ft[e];
            if (n) {
                var i = r.getStyle,
                    a = r.setStyle,
                    o = i(t, z);
                o && -1 !== o.indexOf(n) && a(t, z, o.split(W).map(ht).filter(function(t) {
                    return t !== n
                }).join(W))
            }
        }
    }

    function Mt(t) {
        var e = t.actionList,
            r = void 0 === e ? {} : e,
            n = t.event,
            i = t.elementApi,
            a = r.actionItemGroups,
            o = r.continuousParameterGroups;
        a && a.forEach(function(t) {
            Ot({
                actionGroup: t,
                event: n,
                elementApi: i
            })
        }), o && o.forEach(function(t) {
            t.continuousActionGroups.forEach(function(t) {
                Ot({
                    actionGroup: t,
                    event: n,
                    elementApi: i
                })
            })
        })
    }

    function Ot(t) {
        var e = t.actionGroup,
            r = t.event,
            n = t.elementApi;
        e.actionItems.forEach(function(t) {
            var e, i = t.actionTypeId,
                a = t.config;
            e = (0, g.isPluginType)(i) ? (0, g.clearPlugin)(i) : kt({
                effect: Rt,
                actionTypeId: i,
                elementApi: n
            }), yt({
                config: a,
                event: r,
                elementApi: n
            }).forEach(e)
        })
    }
    var kt = function(t) {
        var e = t.effect,
            r = t.actionTypeId,
            n = t.elementApi;
        return function(t) {
            switch (r) {
                case Z:
                case J:
                case tt:
                case et:
                    e(t, y.TRANSFORM_PREFIXED, n);
                    break;
                case nt:
                    e(t, M, n);
                    break;
                case rt:
                    e(t, D, n);
                    break;
                case it:
                    e(t, O, n), e(t, k, n);
                    break;
                case at:
                case ot:
                case st:
                    e(t, ut[r], n);
                    break;
                case lt:
                    e(t, j, n)
            }
        }
    };

    function Rt(t, e, r) {
        var n = r.setStyle;
        Dt(t, e, r), n(t, e, ""), e === y.TRANSFORM_PREFIXED && n(t, y.TRANSFORM_STYLE_PREFIXED, "")
    }

    function Ft(t) {
        var e = 0,
            r = 0;
        return t.forEach(function(t, n) {
            var i = t.config,
                a = i.delay + i.duration;
            a >= e && (e = a, r = n)
        }), r
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return null == t || t != t ? e : t
    }
}, function(t, e, r) {
    var n = r(403),
        i = r(183),
        a = r(28),
        o = r(407),
        s = r(11);
    t.exports = function(t, e, r) {
        var l = s(t) ? n : o,
            c = arguments.length < 3;
        return l(t, a(e, 4), r, c, i)
    }
}, function(t, e) {
    t.exports = function(t, e, r, n) {
        var i = -1,
            a = null == t ? 0 : t.length;
        for (n && a && (r = t[++i]); ++i < a;) r = e(r, t[i], i, t);
        return r
    }
}, function(t, e, r) {
    var n = r(405)();
    t.exports = n
}, function(t, e) {
    t.exports = function(t) {
        return function(e, r, n) {
            for (var i = -1, a = Object(e), o = n(e), s = o.length; s--;) {
                var l = o[t ? s : ++i];
                if (!1 === r(a[l], l, a)) break
            }
            return e
        }
    }
}, function(t, e, r) {
    var n = r(40);
    t.exports = function(t, e) {
        return function(r, i) {
            if (null == r) return r;
            if (!n(r)) return t(r, i);
            for (var a = r.length, o = e ? a : -1, s = Object(r);
                (e ? o-- : ++o < a) && !1 !== i(s[o], o, s););
            return r
        }
    }
}, function(t, e) {
    t.exports = function(t, e, r, n, i) {
        return i(t, function(t, i, a) {
            r = n ? (n = !1, t) : e(r, t, i, a)
        }), r
    }
}, function(t, e, r) {
    var n = r(177)(r(409));
    t.exports = n
}, function(t, e, r) {
    var n = r(127),
        i = r(28),
        a = r(145),
        o = Math.max,
        s = Math.min;
    t.exports = function(t, e, r) {
        var l = null == t ? 0 : t.length;
        if (!l) return -1;
        var c = l - 1;
        return void 0 !== r && (c = a(r), c = r < 0 ? o(l + c, 0) : s(c, l - 1)), n(t, i(e, 3), c, !0)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(3)(r(37));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var i = Object.prototype.hasOwnProperty;

    function a(t, e) {
        return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
    }
    var o = function(t, e) {
        if (a(t, e)) return !0;
        if ("object" !== (0, n.default)(t) || null === t || "object" !== (0, n.default)(e) || null === e) return !1;
        var r = Object.keys(t),
            o = Object.keys(e);
        if (r.length !== o.length) return !1;
        for (var s = 0; s < r.length; s++)
            if (!i.call(e, r[s]) || !a(t[r[s]], e[r[s]])) return !1;
        return !0
    };
    e.default = o
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixInstances = void 0;
    var n = r(14),
        i = r(45),
        a = r(58),
        o = n.IX2EngineActionTypes,
        s = o.IX2_RAW_DATA_IMPORTED,
        l = o.IX2_SESSION_STOPPED,
        c = o.IX2_INSTANCE_ADDED,
        h = o.IX2_INSTANCE_STARTED,
        u = o.IX2_INSTANCE_REMOVED,
        f = o.IX2_ANIMATION_FRAME_CHANGED,
        p = i.IX2EasingUtils,
        d = p.optimizeFloat,
        m = p.applyEasing,
        v = p.createBezierEasing,
        g = n.IX2EngineConstants.RENDER_GENERAL,
        y = i.IX2VanillaUtils,
        E = y.getItemConfigByKey,
        b = y.getRenderType,
        _ = y.getStyleProp,
        x = function(t, e) {
            var r = t.position,
                n = t.parameterId,
                i = t.actionGroups,
                o = t.destinationKeys,
                s = t.smoothing,
                l = t.restingValue,
                c = t.actionTypeId,
                h = t.customEasingFn,
                u = t.skipMotion,
                f = t.skipToValue,
                p = e.payload.parameters,
                v = Math.max(1 - s, .01),
                g = p[n];
            null == g && (v = 1, g = l);
            var y, b, _, x, w = Math.max(g, 0) || 0,
                A = d(w - r),
                S = u ? f : d(r + A * v),
                T = 100 * S;
            if (S === r && t.current) return t;
            for (var I = 0, P = i.length; I < P; I++) {
                var C = i[I],
                    D = C.keyframe,
                    M = C.actionItems;
                if (0 === I && (y = M[0]), T >= D) {
                    y = M[0];
                    var O = i[I + 1],
                        k = O && T !== D;
                    b = k ? O.actionItems[0] : null, k && (_ = D / 100, x = (O.keyframe - D) / 100)
                }
            }
            var R = {};
            if (y && !b)
                for (var F = 0, L = o.length; F < L; F++) {
                    var N = o[F];
                    R[N] = E(c, N, y.config)
                } else if (y && b && void 0 !== _ && void 0 !== x)
                    for (var V = (S - _) / x, B = y.config.easing, G = m(B, V, h), j = 0, z = o.length; j < z; j++) {
                        var H = o[j],
                            W = E(c, H, y.config),
                            X = (E(c, H, b.config) - W) * G + W;
                        R[H] = X
                    }
            return (0, a.merge)(t, {
                position: S,
                current: R
            })
        },
        w = function(t, e) {
            var r = t,
                n = r.active,
                i = r.origin,
                o = r.start,
                s = r.immediate,
                l = r.renderType,
                c = r.verbose,
                h = r.actionItem,
                u = r.destination,
                f = r.destinationKeys,
                p = r.pluginDuration,
                v = r.instanceDelay,
                y = r.customEasingFn,
                E = r.skipMotion,
                b = h.config.easing,
                _ = h.config,
                x = _.duration,
                w = _.delay;
            null != p && (x = p), w = null != v ? v : w, l === g ? x = 0 : (s || E) && (x = w = 0);
            var A = e.payload.now;
            if (n && i) {
                var S = A - (o + w);
                if (c) {
                    var T = A - o,
                        I = x + w,
                        P = d(Math.min(Math.max(0, T / I), 1));
                    t = (0, a.set)(t, "verboseTimeElapsed", I * P)
                }
                if (S < 0) return t;
                var C = d(Math.min(Math.max(0, S / x), 1)),
                    D = m(b, C, y),
                    M = {},
                    O = null;
                return f.length && (O = f.reduce(function(t, e) {
                    var r = u[e],
                        n = parseFloat(i[e]) || 0,
                        a = (parseFloat(r) - n) * D + n;
                    return t[e] = a, t
                }, {})), M.current = O, M.position = C, 1 === C && (M.active = !1, M.complete = !0), (0, a.merge)(t, M)
            }
            return t
        };
    e.ixInstances = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case s:
                return e.payload.ixInstances || Object.freeze({});
            case l:
                return Object.freeze({});
            case c:
                var r = e.payload,
                    n = r.instanceId,
                    i = r.elementId,
                    o = r.actionItem,
                    p = r.eventId,
                    d = r.eventTarget,
                    m = r.eventStateKey,
                    g = r.actionListId,
                    y = r.groupIndex,
                    E = r.isCarrier,
                    A = r.origin,
                    S = r.destination,
                    T = r.immediate,
                    I = r.verbose,
                    P = r.continuous,
                    C = r.parameterId,
                    D = r.actionGroups,
                    M = r.smoothing,
                    O = r.restingValue,
                    k = r.pluginInstance,
                    R = r.pluginDuration,
                    F = r.instanceDelay,
                    L = r.skipMotion,
                    N = r.skipToValue,
                    V = o.actionTypeId,
                    B = b(V),
                    G = _(B, V),
                    j = Object.keys(S).filter(function(t) {
                        return null != S[t]
                    }),
                    z = o.config.easing;
                return (0, a.set)(t, n, {
                    id: n,
                    elementId: i,
                    active: !1,
                    position: 0,
                    start: 0,
                    origin: A,
                    destination: S,
                    destinationKeys: j,
                    immediate: T,
                    verbose: I,
                    current: null,
                    actionItem: o,
                    actionTypeId: V,
                    eventId: p,
                    eventTarget: d,
                    eventStateKey: m,
                    actionListId: g,
                    groupIndex: y,
                    renderType: B,
                    isCarrier: E,
                    styleProp: G,
                    continuous: P,
                    parameterId: C,
                    actionGroups: D,
                    smoothing: M,
                    restingValue: O,
                    pluginInstance: k,
                    pluginDuration: R,
                    instanceDelay: F,
                    skipMotion: L,
                    skipToValue: N,
                    customEasingFn: Array.isArray(z) && 4 === z.length ? v(z) : void 0
                });
            case h:
                var H = e.payload,
                    W = H.instanceId,
                    X = H.time;
                return (0, a.mergeIn)(t, [W], {
                    active: !0,
                    complete: !1,
                    start: X
                });
            case u:
                var U = e.payload.instanceId;
                if (!t[U]) return t;
                for (var q = {}, Y = Object.keys(t), K = Y.length, $ = 0; $ < K; $++) {
                    var Q = Y[$];
                    Q !== U && (q[Q] = t[Q])
                }
                return q;
            case f:
                for (var Z = t, J = Object.keys(t), tt = J.length, et = 0; et < tt; et++) {
                    var rt = J[et],
                        nt = t[rt],
                        it = nt.continuous ? x : w;
                    Z = (0, a.set)(Z, rt, it(nt, e))
                }
                return Z;
            default:
                return t
        }
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixParameters = void 0;
    var n = r(14).IX2EngineActionTypes,
        i = n.IX2_RAW_DATA_IMPORTED,
        a = n.IX2_SESSION_STOPPED,
        o = n.IX2_PARAMETER_CHANGED;
    e.ixParameters = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case i:
                return e.payload.ixParameters || {};
            case a:
                return {};
            case o:
                var r = e.payload,
                    n = r.key,
                    s = r.value;
                return t[n] = s, t;
            default:
                return t
        }
    }
}, function(t, e) {
    t.exports = function(t, e) {
        if (null == t) return {};
        var r, n, i = {},
            a = Object.keys(t);
        for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
        return i
    }
}, function(t, e, r) {
    var n = r(88),
        i = r(90),
        a = r(40),
        o = r(415),
        s = r(416),
        l = "[object Map]",
        c = "[object Set]";
    t.exports = function(t) {
        if (null == t) return 0;
        if (a(t)) return o(t) ? s(t) : t.length;
        var e = i(t);
        return e == l || e == c ? t.size : n(t).length
    }
}, function(t, e, r) {
    var n = r(39),
        i = r(11),
        a = r(30),
        o = "[object String]";
    t.exports = function(t) {
        return "string" == typeof t || !i(t) && a(t) && n(t) == o
    }
}, function(t, e, r) {
    var n = r(417),
        i = r(418),
        a = r(419);
    t.exports = function(t) {
        return i(t) ? a(t) : n(t)
    }
}, function(t, e, r) {
    var n = r(144)("length");
    t.exports = n
}, function(t, e) {
    var r = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    t.exports = function(t) {
        return r.test(t)
    }
}, function(t, e) {
    var r = "[\\ud800-\\udfff]",
        n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        i = "\\ud83c[\\udffb-\\udfff]",
        a = "[^\\ud800-\\udfff]",
        o = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        s = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        l = "(?:" + n + "|" + i + ")" + "?",
        c = "[\\ufe0e\\ufe0f]?" + l + ("(?:\\u200d(?:" + [a, o, s].join("|") + ")[\\ufe0e\\ufe0f]?" + l + ")*"),
        h = "(?:" + [a + n + "?", n, o, s, r].join("|") + ")",
        u = RegExp(i + "(?=" + i + ")|" + h + c, "g");
    t.exports = function(t) {
        for (var e = u.lastIndex = 0; u.test(t);) ++e;
        return e
    }
}, function(t, e, r) {
    var n = r(28),
        i = r(421),
        a = r(422);
    t.exports = function(t, e) {
        return a(t, i(n(e)))
    }
}, function(t, e) {
    var r = "Expected a function";
    t.exports = function(t) {
        if ("function" != typeof t) throw new TypeError(r);
        return function() {
            var e = arguments;
            switch (e.length) {
                case 0:
                    return !t.call(this);
                case 1:
                    return !t.call(this, e[0]);
                case 2:
                    return !t.call(this, e[0], e[1]);
                case 3:
                    return !t.call(this, e[0], e[1], e[2])
            }
            return !t.apply(this, e)
        }
    }
}, function(t, e, r) {
    var n = r(143),
        i = r(28),
        a = r(423),
        o = r(426);
    t.exports = function(t, e) {
        if (null == t) return {};
        var r = n(o(t), function(t) {
            return [t]
        });
        return e = i(e), a(t, r, function(t, r) {
            return e(t, r[0])
        })
    }
}, function(t, e, r) {
    var n = r(92),
        i = r(424),
        a = r(66);
    t.exports = function(t, e, r) {
        for (var o = -1, s = e.length, l = {}; ++o < s;) {
            var c = e[o],
                h = n(t, c);
            r(h, c) && i(l, a(c, t), h)
        }
        return l
    }
}, function(t, e, r) {
    var n = r(425),
        i = r(66),
        a = r(85),
        o = r(23),
        s = r(48);
    t.exports = function(t, e, r, l) {
        if (!o(t)) return t;
        for (var c = -1, h = (e = i(e, t)).length, u = h - 1, f = t; null != f && ++c < h;) {
            var p = s(e[c]),
                d = r;
            if ("__proto__" === p || "constructor" === p || "prototype" === p) return t;
            if (c != u) {
                var m = f[p];
                void 0 === (d = l ? l(m, p, f) : void 0) && (d = o(m) ? m : a(e[c + 1]) ? [] : {})
            }
            n(f, p, d), f = f[p]
        }
        return t
    }
}, function(t, e, r) {
    var n = r(186),
        i = r(80),
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, r) {
        var o = t[e];
        a.call(t, e) && i(o, r) && (void 0 !== r || e in t) || n(t, e, r)
    }
}, function(t, e, r) {
    var n = r(134),
        i = r(427),
        a = r(429);
    t.exports = function(t) {
        return n(t, a, i)
    }
}, function(t, e, r) {
    var n = r(83),
        i = r(428),
        a = r(135),
        o = r(136),
        s = Object.getOwnPropertySymbols ? function(t) {
            for (var e = []; t;) n(e, a(t)), t = i(t);
            return e
        } : o;
    t.exports = s
}, function(t, e, r) {
    var n = r(139)(Object.getPrototypeOf, Object);
    t.exports = n
}, function(t, e, r) {
    var n = r(137),
        i = r(430),
        a = r(40);
    t.exports = function(t) {
        return a(t) ? n(t, !0) : i(t)
    }
}, function(t, e, r) {
    var n = r(23),
        i = r(89),
        a = r(431),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!n(t)) return a(t);
        var e = i(t),
            r = [];
        for (var s in t)("constructor" != s || !e && o.call(t, s)) && r.push(s);
        return r
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = [];
        if (null != t)
            for (var r in Object(t)) e.push(r);
        return e
    }
}, function(t, e, r) {
    var n = r(88),
        i = r(90),
        a = r(65),
        o = r(11),
        s = r(40),
        l = r(84),
        c = r(89),
        h = r(86),
        u = "[object Map]",
        f = "[object Set]",
        p = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (null == t) return !0;
        if (s(t) && (o(t) || "string" == typeof t || "function" == typeof t.splice || l(t) || h(t) || a(t))) return !t.length;
        var e = i(t);
        if (e == u || e == f) return !t.size;
        if (c(t)) return !n(t).length;
        for (var r in t)
            if (p.call(t, r)) return !1;
        return !0
    }
}, function(t, e, r) {
    var n = r(186),
        i = r(184),
        a = r(28);
    t.exports = function(t, e) {
        var r = {};
        return e = a(e, 3), i(t, function(t, i, a) {
            n(r, i, e(t, i, a))
        }), r
    }
}, function(t, e, r) {
    var n = r(435),
        i = r(183),
        a = r(436),
        o = r(11);
    t.exports = function(t, e) {
        return (o(t) ? n : i)(t, a(e))
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t););
        return t
    }
}, function(t, e, r) {
    var n = r(94);
    t.exports = function(t) {
        return "function" == typeof t ? t : n
    }
}, function(t, e, r) {
    var n = r(438),
        i = r(23),
        a = "Expected a function";
    t.exports = function(t, e, r) {
        var o = !0,
            s = !0;
        if ("function" != typeof t) throw new TypeError(a);
        return i(r) && (o = "leading" in r ? !!r.leading : o, s = "trailing" in r ? !!r.trailing : s), n(t, e, {
            leading: o,
            maxWait: e,
            trailing: s
        })
    }
}, function(t, e, r) {
    var n = r(23),
        i = r(439),
        a = r(95),
        o = "Expected a function",
        s = Math.max,
        l = Math.min;
    t.exports = function(t, e, r) {
        var c, h, u, f, p, d, m = 0,
            v = !1,
            g = !1,
            y = !0;
        if ("function" != typeof t) throw new TypeError(o);

        function E(e) {
            var r = c,
                n = h;
            return c = h = void 0, m = e, f = t.apply(n, r)
        }

        function b(t) {
            var r = t - d;
            return void 0 === d || r >= e || r < 0 || g && t - m >= u
        }

        function _() {
            var t = i();
            if (b(t)) return x(t);
            p = setTimeout(_, function(t) {
                var r = e - (t - d);
                return g ? l(r, u - (t - m)) : r
            }(t))
        }

        function x(t) {
            return p = void 0, y && c ? E(t) : (c = h = void 0, f)
        }

        function w() {
            var t = i(),
                r = b(t);
            if (c = arguments, h = this, d = t, r) {
                if (void 0 === p) return function(t) {
                    return m = t, p = setTimeout(_, e), v ? E(t) : f
                }(d);
                if (g) return clearTimeout(p), p = setTimeout(_, e), E(d)
            }
            return void 0 === p && (p = setTimeout(_, e)), f
        }
        return e = a(e) || 0, n(r) && (v = !!r.leading, u = (g = "maxWait" in r) ? s(a(r.maxWait) || 0, e) : u, y = "trailing" in r ? !!r.trailing : y), w.cancel = function() {
            void 0 !== p && clearTimeout(p), m = 0, c = d = h = p = void 0
        }, w.flush = function() {
            return void 0 === p ? f : x(i())
        }, w
    }
}, function(t, e, r) {
    var n = r(19);
    t.exports = function() {
        return n.Date.now()
    }
}, function(t, e, r) {
    "use strict";
    var n = r(3)(r(37));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setStyle = function(t, e, r) {
        t.style[e] = r
    }, e.getStyle = function(t, e) {
        return t.style[e]
    }, e.getProperty = function(t, e) {
        return t[e]
    }, e.matchSelector = function(t) {
        return function(e) {
            return e[o](t)
        }
    }, e.getQuerySelector = function(t) {
        var e = t.id,
            r = t.selector;
        if (e) {
            var n = e;
            if (-1 !== e.indexOf(l)) {
                var i = e.split(l),
                    a = i[0];
                if (n = i[1], a !== document.documentElement.getAttribute(u)) return null
            }
            return '[data-w-id="'.concat(n, '"], [data-w-id^="').concat(n, '_instance"]')
        }
        return r
    }, e.getValidDocument = function(t) {
        if (null == t || t === document.documentElement.getAttribute(u)) return document;
        return null
    }, e.queryDocument = function(t, e) {
        return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
    }, e.elementContains = function(t, e) {
        return t.contains(e)
    }, e.isSiblingNode = function(t, e) {
        return t !== e && t.parentNode === e.parentNode
    }, e.getChildElements = function(t) {
        for (var e = [], r = 0, n = (t || []).length; r < n; r++) {
            var i = t[r].children,
                a = i.length;
            if (a)
                for (var o = 0; o < a; o++) e.push(i[o])
        }
        return e
    }, e.getSiblingElements = function() {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], r = [], n = 0, i = t.length; n < i; n++) {
            var a = t[n].parentNode;
            if (a && a.children && a.children.length && -1 === r.indexOf(a)) {
                r.push(a);
                for (var o = a.firstElementChild; null != o;) - 1 === t.indexOf(o) && e.push(o), o = o.nextElementSibling
            }
        }
        return e
    }, e.getRefType = function(t) {
        if (null != t && "object" == (0, n.default)(t)) return t instanceof Element ? c : h;
        return null
    }, e.getClosestElement = void 0;
    var i = r(45),
        a = r(14),
        o = i.IX2BrowserSupport.ELEMENT_MATCHES,
        s = a.IX2EngineConstants,
        l = s.IX2_ID_DELIMITER,
        c = s.HTML_ELEMENT,
        h = s.PLAIN_OBJECT,
        u = s.WF_PAGE;
    var f = Element.prototype.closest ? function(t, e) {
        return document.documentElement.contains(t) ? t.closest(e) : null
    } : function(t, e) {
        if (!document.documentElement.contains(t)) return null;
        var r = t;
        do {
            if (r[o] && r[o](e)) return r;
            r = r.parentNode
        } while (null != r);
        return null
    };
    e.getClosestElement = f
}, function(t, e, r) {
    "use strict";
    var n, i = r(3),
        a = i(r(38)),
        o = i(r(37)),
        s = r(3);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l, c, h, u = s(r(46)),
        f = s(r(442)),
        p = s(r(91)),
        d = s(r(461)),
        m = r(14),
        v = r(185),
        g = r(121),
        y = r(45),
        E = m.EventTypeConsts,
        b = E.MOUSE_CLICK,
        _ = E.MOUSE_SECOND_CLICK,
        x = E.MOUSE_DOWN,
        w = E.MOUSE_UP,
        A = E.MOUSE_OVER,
        S = E.MOUSE_OUT,
        T = E.DROPDOWN_CLOSE,
        I = E.DROPDOWN_OPEN,
        P = E.SLIDER_ACTIVE,
        C = E.SLIDER_INACTIVE,
        D = E.TAB_ACTIVE,
        M = E.TAB_INACTIVE,
        O = E.NAVBAR_CLOSE,
        k = E.NAVBAR_OPEN,
        R = E.MOUSE_MOVE,
        F = E.PAGE_SCROLL_DOWN,
        L = E.SCROLL_INTO_VIEW,
        N = E.SCROLL_OUT_OF_VIEW,
        V = E.PAGE_SCROLL_UP,
        B = E.SCROLLING_IN_VIEW,
        G = E.PAGE_FINISH,
        j = E.ECOMMERCE_CART_CLOSE,
        z = E.ECOMMERCE_CART_OPEN,
        H = E.PAGE_START,
        W = E.PAGE_SCROLL,
        X = "COMPONENT_ACTIVE",
        U = "COMPONENT_INACTIVE",
        q = m.IX2EngineConstants.COLON_DELIMITER,
        Y = y.IX2VanillaUtils.getNamespacedParameterId,
        K = function(t) {
            return function(e) {
                return !("object" !== (0, o.default)(e) || !t(e)) || e
            }
        },
        $ = K(function(t) {
            return t.element === t.nativeEvent.target
        }),
        Q = K(function(t) {
            var e = t.element,
                r = t.nativeEvent;
            return e.contains(r.target)
        }),
        Z = (0, f.default)([$, Q]),
        J = function(t, e) {
            if (e) {
                var r = t.getState().ixData.events[e];
                if (r && !ot[r.eventTypeId]) return r
            }
            return null
        },
        tt = function(t, e) {
            var r = t.store,
                n = t.event,
                i = t.element,
                a = t.eventStateKey,
                o = n.action,
                s = n.id,
                l = o.config,
                c = l.actionListId,
                h = l.autoStopEventId,
                u = J(r, h);
            return u && (0, v.stopActionGroup)({
                store: r,
                eventId: h,
                eventTarget: i,
                eventStateKey: h + q + a.split(q)[1],
                actionListId: (0, p.default)(u, "action.config.actionListId")
            }), (0, v.stopActionGroup)({
                store: r,
                eventId: s,
                eventTarget: i,
                eventStateKey: a,
                actionListId: c
            }), (0, v.startActionGroup)({
                store: r,
                eventId: s,
                eventTarget: i,
                eventStateKey: a,
                actionListId: c
            }), e
        },
        et = function(t, e) {
            return function(r, n) {
                return !0 === t(r, n) ? e(r, n) : n
            }
        },
        rt = {
            handler: et(Z, tt)
        },
        nt = (0, u.default)({}, rt, {
            types: [X, U].join(" ")
        }),
        it = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        at = {
            types: it
        },
        ot = {
            PAGE_START: H,
            PAGE_FINISH: G
        },
        st = (l = void 0 !== window.pageXOffset, c = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function() {
            return {
                scrollLeft: l ? window.pageXOffset : c.scrollLeft,
                scrollTop: l ? window.pageYOffset : c.scrollTop,
                stiffScrollTop: (0, d.default)(l ? window.pageYOffset : c.scrollTop, 0, c.scrollHeight - window.innerHeight),
                scrollWidth: c.scrollWidth,
                scrollHeight: c.scrollHeight,
                clientWidth: c.clientWidth,
                clientHeight: c.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            }
        }),
        lt = function(t) {
            var e = t.element,
                r = t.nativeEvent,
                n = r.type,
                i = r.target,
                a = r.relatedTarget,
                o = e.contains(i);
            if ("mouseover" === n && o) return !0;
            var s = e.contains(a);
            return !("mouseout" !== n || !o || !s)
        },
        ct = function(t) {
            var e, r, n = t.element,
                i = t.event.config,
                a = st(),
                o = a.clientWidth,
                s = a.clientHeight,
                l = i.scrollOffsetValue,
                c = "PX" === i.scrollOffsetUnit ? l : s * (l || 0) / 100;
            return e = n.getBoundingClientRect(), r = {
                left: 0,
                top: c,
                right: o,
                bottom: s - c
            }, !(e.left > r.right || e.right < r.left || e.top > r.bottom || e.bottom < r.top)
        },
        ht = function(t) {
            return function(e, r) {
                var n = e.nativeEvent.type,
                    i = -1 !== [X, U].indexOf(n) ? n === X : r.isActive,
                    a = (0, u.default)({}, r, {
                        isActive: i
                    });
                return r && a.isActive === r.isActive ? a : t(e, a) || a
            }
        },
        ut = function(t) {
            return function(e, r) {
                var n = {
                    elementHovered: lt(e)
                };
                return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && t(e, n) || n
            }
        },
        ft = function(t) {
            return function(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = st(),
                    i = n.stiffScrollTop,
                    a = n.scrollHeight,
                    o = n.innerHeight,
                    s = e.event,
                    l = s.config,
                    c = s.eventTypeId,
                    h = l.scrollOffsetValue,
                    f = "PX" === l.scrollOffsetUnit,
                    p = a - o,
                    d = Number((i / p).toFixed(2));
                if (r && r.percentTop === d) return r;
                var m, v, g = (f ? h : o * (h || 0) / 100) / p,
                    y = 0;
                r && (m = d > r.percentTop, y = (v = r.scrollingDown !== m) ? d : r.anchorTop);
                var E = c === F ? d >= y + g : d <= y - g,
                    b = (0, u.default)({}, r, {
                        percentTop: d,
                        inBounds: E,
                        anchorTop: y,
                        scrollingDown: m
                    });
                return r && E && (v || b.inBounds !== r.inBounds) && t(e, b) || b
            }
        },
        pt = function(t) {
            return function(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clickCount: 0
                    },
                    n = {
                        clickCount: r.clickCount % 2 + 1
                    };
                return n.clickCount !== r.clickCount && t(e, n) || n
            }
        },
        dt = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (0, u.default)({}, nt, {
                handler: et(t ? Z : $, ht(function(t, e) {
                    return e.isActive ? rt.handler(t, e) : e
                }))
            })
        },
        mt = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (0, u.default)({}, nt, {
                handler: et(t ? Z : $, ht(function(t, e) {
                    return e.isActive ? e : rt.handler(t, e)
                }))
            })
        },
        vt = (0, u.default)({}, at, {
            handler: (h = function(t, e) {
                var r = e.elementVisible,
                    n = t.event;
                return !t.store.getState().ixData.events[n.action.config.autoStopEventId] && e.triggered ? e : n.eventTypeId === L === r ? (tt(t), (0, u.default)({}, e, {
                    triggered: !0
                })) : e
            }, function(t, e) {
                var r = (0, u.default)({}, e, {
                    elementVisible: ct(t)
                });
                return (e ? r.elementVisible !== e.elementVisible : r.elementVisible) && h(t, r) || r
            })
        }),
        gt = (n = {}, (0, a.default)(n, P, dt()), (0, a.default)(n, C, mt()), (0, a.default)(n, I, dt()), (0, a.default)(n, T, mt()), (0, a.default)(n, k, dt(!1)), (0, a.default)(n, O, mt(!1)), (0, a.default)(n, D, dt()), (0, a.default)(n, M, mt()), (0, a.default)(n, z, {
            types: "ecommerce-cart-open",
            handler: et(Z, tt)
        }), (0, a.default)(n, j, {
            types: "ecommerce-cart-close",
            handler: et(Z, tt)
        }), (0, a.default)(n, b, {
            types: "click",
            handler: et(Z, pt(function(t, e) {
                var r, n, i, a = e.clickCount;
                n = (r = t).store, i = r.event.action.config.autoStopEventId, Boolean(J(n, i)) ? 1 === a && tt(t) : tt(t)
            }))
        }), (0, a.default)(n, _, {
            types: "click",
            handler: et(Z, pt(function(t, e) {
                2 === e.clickCount && tt(t)
            }))
        }), (0, a.default)(n, x, (0, u.default)({}, rt, {
            types: "mousedown"
        })), (0, a.default)(n, w, (0, u.default)({}, rt, {
            types: "mouseup"
        })), (0, a.default)(n, A, {
            types: "mouseover mouseout",
            handler: et(Z, ut(function(t, e) {
                e.elementHovered && tt(t)
            }))
        }), (0, a.default)(n, S, {
            types: "mouseover mouseout",
            handler: et(Z, ut(function(t, e) {
                e.elementHovered || tt(t)
            }))
        }), (0, a.default)(n, R, {
            types: "mousemove mouseout scroll",
            handler: function(t) {
                var e = t.store,
                    r = t.element,
                    n = t.eventConfig,
                    i = t.nativeEvent,
                    a = t.eventStateKey,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    },
                    s = n.basedOn,
                    l = n.selectedAxis,
                    c = n.continuousParameterGroupId,
                    h = n.reverse,
                    u = n.restingState,
                    f = void 0 === u ? 0 : u,
                    p = i.clientX,
                    d = void 0 === p ? o.clientX : p,
                    v = i.clientY,
                    y = void 0 === v ? o.clientY : v,
                    E = i.pageX,
                    b = void 0 === E ? o.pageX : E,
                    _ = i.pageY,
                    x = void 0 === _ ? o.pageY : _,
                    w = "X_AXIS" === l,
                    A = "mouseout" === i.type,
                    S = f / 100,
                    T = c,
                    I = !1;
                switch (s) {
                    case m.EventBasedOn.VIEWPORT:
                        S = w ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(y, window.innerHeight) / window.innerHeight;
                        break;
                    case m.EventBasedOn.PAGE:
                        var P = st(),
                            C = P.scrollLeft,
                            D = P.scrollTop,
                            M = P.scrollWidth,
                            O = P.scrollHeight;
                        S = w ? Math.min(C + b, M) / M : Math.min(D + x, O) / O;
                        break;
                    case m.EventBasedOn.ELEMENT:
                    default:
                        T = Y(a, c);
                        var k = 0 === i.type.indexOf("mouse");
                        if (k && !0 !== Z({
                                element: r,
                                nativeEvent: i
                            })) break;
                        var R = r.getBoundingClientRect(),
                            F = R.left,
                            L = R.top,
                            N = R.width,
                            V = R.height;
                        if (!k && ! function(t, e) {
                                return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom
                            }({
                                left: d,
                                top: y
                            }, R)) break;
                        I = !0, S = w ? (d - F) / N : (y - L) / V
                }
                return A && (S > .95 || S < .05) && (S = Math.round(S)), (s !== m.EventBasedOn.ELEMENT || I || I !== o.elementHovered) && (S = h ? 1 - S : S, e.dispatch((0, g.parameterChanged)(T, S))), {
                    elementHovered: I,
                    clientX: d,
                    clientY: y,
                    pageX: b,
                    pageY: x
                }
            }
        }), (0, a.default)(n, W, {
            types: it,
            handler: function(t) {
                var e = t.store,
                    r = t.eventConfig,
                    n = r.continuousParameterGroupId,
                    i = r.reverse,
                    a = st(),
                    o = a.scrollTop / (a.scrollHeight - a.clientHeight);
                o = i ? 1 - o : o, e.dispatch((0, g.parameterChanged)(n, o))
            }
        }), (0, a.default)(n, B, {
            types: it,
            handler: function(t) {
                var e = t.element,
                    r = t.store,
                    n = t.eventConfig,
                    i = t.eventStateKey,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        scrollPercent: 0
                    },
                    o = st(),
                    s = o.scrollLeft,
                    l = o.scrollTop,
                    c = o.scrollWidth,
                    h = o.scrollHeight,
                    u = o.clientHeight,
                    f = n.basedOn,
                    p = n.selectedAxis,
                    d = n.continuousParameterGroupId,
                    v = n.startsEntering,
                    y = n.startsExiting,
                    E = n.addEndOffset,
                    b = n.addStartOffset,
                    _ = n.addOffsetValue,
                    x = void 0 === _ ? 0 : _,
                    w = n.endOffsetValue,
                    A = void 0 === w ? 0 : w,
                    S = "X_AXIS" === p;
                if (f === m.EventBasedOn.VIEWPORT) {
                    var T = S ? s / c : l / h;
                    return T !== a.scrollPercent && r.dispatch((0, g.parameterChanged)(d, T)), {
                        scrollPercent: T
                    }
                }
                var I = Y(i, d),
                    P = e.getBoundingClientRect(),
                    C = (b ? x : 0) / 100,
                    D = (E ? A : 0) / 100;
                C = v ? C : 1 - C, D = y ? D : 1 - D;
                var M = P.top + Math.min(P.height * C, u),
                    O = P.top + P.height * D - M,
                    k = Math.min(u + O, h),
                    R = Math.min(Math.max(0, u - M), k) / k;
                return R !== a.scrollPercent && r.dispatch((0, g.parameterChanged)(I, R)), {
                    scrollPercent: R
                }
            }
        }), (0, a.default)(n, L, vt), (0, a.default)(n, N, vt), (0, a.default)(n, F, (0, u.default)({}, at, {
            handler: ft(function(t, e) {
                e.scrollingDown && tt(t)
            })
        })), (0, a.default)(n, V, (0, u.default)({}, at, {
            handler: ft(function(t, e) {
                e.scrollingDown || tt(t)
            })
        })), (0, a.default)(n, G, {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et($, function(t) {
                return function(e, r) {
                    var n = {
                        finished: "complete" === document.readyState
                    };
                    return !n.finished || r && r.finshed || t(e), n
                }
            }(tt))
        }), (0, a.default)(n, H, {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et($, function(t) {
                return function(e, r) {
                    return r || t(e), {
                        started: !0
                    }
                }
            }(tt))
        }), n);
    e.default = gt
}, function(t, e, r) {
    var n = r(443)();
    t.exports = n
}, function(t, e, r) {
    var n = r(122),
        i = r(444),
        a = r(189),
        o = r(190),
        s = r(11),
        l = r(457),
        c = "Expected a function",
        h = 8,
        u = 32,
        f = 128,
        p = 256;
    t.exports = function(t) {
        return i(function(e) {
            var r = e.length,
                i = r,
                d = n.prototype.thru;
            for (t && e.reverse(); i--;) {
                var m = e[i];
                if ("function" != typeof m) throw new TypeError(c);
                if (d && !v && "wrapper" == o(m)) var v = new n([], !0)
            }
            for (i = v ? i : r; ++i < r;) {
                m = e[i];
                var g = o(m),
                    y = "wrapper" == g ? a(m) : void 0;
                v = y && l(y[0]) && y[1] == (f | h | u | p) && !y[4].length && 1 == y[9] ? v[o(y[0])].apply(v, y[3]) : 1 == m.length && l(m) ? v[g]() : v.thru(m)
            }
            return function() {
                var t = arguments,
                    n = t[0];
                if (v && 1 == t.length && s(n)) return v.plant(n).value();
                for (var i = 0, a = r ? e[i].apply(this, t) : n; ++i < r;) a = e[i].call(this, a);
                return a
            }
        })
    }
}, function(t, e, r) {
    var n = r(445),
        i = r(448),
        a = r(450);
    t.exports = function(t) {
        return a(i(t, void 0, n), t + "")
    }
}, function(t, e, r) {
    var n = r(446);
    t.exports = function(t) {
        return null != t && t.length ? n(t, 1) : []
    }
}, function(t, e, r) {
    var n = r(83),
        i = r(447);
    t.exports = function t(e, r, a, o, s) {
        var l = -1,
            c = e.length;
        for (a || (a = i), s || (s = []); ++l < c;) {
            var h = e[l];
            r > 0 && a(h) ? r > 1 ? t(h, r - 1, a, o, s) : n(s, h) : o || (s[s.length] = h)
        }
        return s
    }
}, function(t, e, r) {
    var n = r(47),
        i = r(65),
        a = r(11),
        o = n ? n.isConcatSpreadable : void 0;
    t.exports = function(t) {
        return a(t) || i(t) || !!(o && t && t[o])
    }
}, function(t, e, r) {
    var n = r(449),
        i = Math.max;
    t.exports = function(t, e, r) {
        return e = i(void 0 === e ? t.length - 1 : e, 0),
            function() {
                for (var a = arguments, o = -1, s = i(a.length - e, 0), l = Array(s); ++o < s;) l[o] = a[e + o];
                o = -1;
                for (var c = Array(e + 1); ++o < e;) c[o] = a[o];
                return c[e] = r(l), n(t, this, c)
            }
    }
}, function(t, e) {
    t.exports = function(t, e, r) {
        switch (r.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, r[0]);
            case 2:
                return t.call(e, r[0], r[1]);
            case 3:
                return t.call(e, r[0], r[1], r[2])
        }
        return t.apply(e, r)
    }
}, function(t, e, r) {
    var n = r(451),
        i = r(453)(n);
    t.exports = i
}, function(t, e, r) {
    var n = r(452),
        i = r(187),
        a = r(94),
        o = i ? function(t, e) {
            return i(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: n(e),
                writable: !0
            })
        } : a;
    t.exports = o
}, function(t, e) {
    t.exports = function(t) {
        return function() {
            return t
        }
    }
}, function(t, e) {
    var r = 800,
        n = 16,
        i = Date.now;
    t.exports = function(t) {
        var e = 0,
            a = 0;
        return function() {
            var o = i(),
                s = n - (o - a);
            if (a = o, s > 0) {
                if (++e >= r) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
}, function(t, e, r) {
    var n = r(140),
        i = n && new n;
    t.exports = i
}, function(t, e) {
    t.exports = function() {}
}, function(t, e) {
    t.exports = {}
}, function(t, e, r) {
    var n = r(124),
        i = r(189),
        a = r(190),
        o = r(458);
    t.exports = function(t) {
        var e = a(t),
            r = o[e];
        if ("function" != typeof r || !(e in n.prototype)) return !1;
        if (t === r) return !0;
        var s = i(r);
        return !!s && t === s[0]
    }
}, function(t, e, r) {
    var n = r(124),
        i = r(122),
        a = r(123),
        o = r(11),
        s = r(30),
        l = r(459),
        c = Object.prototype.hasOwnProperty;

    function h(t) {
        if (s(t) && !o(t) && !(t instanceof n)) {
            if (t instanceof i) return t;
            if (c.call(t, "__wrapped__")) return l(t)
        }
        return new i(t)
    }
    h.prototype = a.prototype, h.prototype.constructor = h, t.exports = h
}, function(t, e, r) {
    var n = r(124),
        i = r(122),
        a = r(460);
    t.exports = function(t) {
        if (t instanceof n) return t.clone();
        var e = new i(t.__wrapped__, t.__chain__);
        return e.__actions__ = a(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var r = -1,
            n = t.length;
        for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
        return e
    }
}, function(t, e, r) {
    var n = r(462),
        i = r(95);
    t.exports = function(t, e, r) {
        return void 0 === r && (r = e, e = void 0), void 0 !== r && (r = (r = i(r)) == r ? r : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), n(i(t), e, r)
    }
}, function(t, e) {
    t.exports = function(t, e, r) {
        return t == t && (void 0 !== r && (t = t <= r ? t : r), void 0 !== e && (t = t >= e ? t : e)), t
    }
}, function(t, e, r) {
    "use strict";
    var n = r(9);
    n.define("links", t.exports = function(t, e) {
        var r, i, a, o = {},
            s = t(window),
            l = n.env(),
            c = window.location,
            h = document.createElement("a"),
            u = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;

        function d(e) {
            var n = r && e.getAttribute("href-disabled") || e.getAttribute("href");
            if (h.href = n, !(n.indexOf(":") >= 0)) {
                var o = t(e);
                if (h.hash.length > 1 && h.host + h.pathname === c.host + c.pathname) {
                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(h.hash)) return;
                    var s = t(h.hash);
                    s.length && i.push({
                        link: o,
                        sec: s,
                        active: !1
                    })
                } else if ("#" !== n && "" !== n) {
                    var l = h.href === c.href || n === a || f.test(n) && p.test(a);
                    v(o, u, l)
                }
            }
        }

        function m() {
            var t = s.scrollTop(),
                r = s.height();
            e.each(i, function(e) {
                var n = e.link,
                    i = e.sec,
                    a = i.offset().top,
                    o = i.outerHeight(),
                    s = .5 * r,
                    l = i.is(":visible") && a + o - s >= t && a + s <= t + r;
                e.active !== l && (e.active = l, v(n, u, l))
            })
        }

        function v(t, e, r) {
            var n = t.hasClass(e);
            r && n || (r || n) && (r ? t.addClass(e) : t.removeClass(e))
        }
        return o.ready = o.design = o.preview = function() {
            r = l && n.env("design"), a = n.env("slug") || c.pathname || "", n.scroll.off(m), i = [];
            for (var t = document.links, e = 0; e < t.length; ++e) d(t[e]);
            i.length && (n.scroll.on(m), m())
        }, o
    })
}, function(t, e, r) {
    "use strict";
    var n = r(9);
    n.define("scroll", t.exports = function(t) {
        var e = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            },
            r = window.location,
            i = function() {
                try {
                    return Boolean(window.frameElement)
                } catch (t) {
                    return !0
                }
            }() ? null : window.history,
            a = t(window),
            o = t(document),
            s = t(document.body),
            l = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
                window.setTimeout(t, 15)
            },
            c = n.env("editor") ? ".w-editor-body" : "body",
            h = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])",
            u = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
            p = document.createElement("style");
        p.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
        var d = /^#[a-zA-Z0-9][\w:.-]*$/;
        var m = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

        function v(t, e) {
            var r;
            switch (e) {
                case "add":
                    (r = t.attr("tabindex")) ? t.attr("data-wf-tabindex-swap", r): t.attr("tabindex", "-1");
                    break;
                case "remove":
                    (r = t.attr("data-wf-tabindex-swap")) ? (t.attr("tabindex", r), t.removeAttr("data-wf-tabindex-swap")) : t.removeAttr("tabindex")
            }
            t.toggleClass("wf-force-outline-none", "add" === e)
        }

        function g(e) {
            var o = e.currentTarget;
            if (!(n.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(o.className))) {
                var c, u = (c = o, d.test(c.hash) && c.host + c.pathname === r.host + r.pathname ? o.hash : "");
                if ("" !== u) {
                    var f = t(u);
                    f.length && (e && (e.preventDefault(), e.stopPropagation()), function(t) {
                        if (r.hash !== t && i && i.pushState && (!n.env.chrome || "file:" !== r.protocol)) {
                            var e = i.state && i.state.hash;
                            e !== t && i.pushState({
                                hash: t
                            }, "", t)
                        }
                    }(u), window.setTimeout(function() {
                        ! function(e, r) {
                            var n = a.scrollTop(),
                                i = function(e) {
                                    var r = t(h),
                                        n = "fixed" === r.css("position") ? r.outerHeight() : 0,
                                        i = e.offset().top - n;
                                    if ("mid" === e.data("scroll")) {
                                        var o = a.height() - n,
                                            s = e.outerHeight();
                                        s < o && (i -= Math.round((o - s) / 2))
                                    }
                                    return i
                                }(e);
                            if (n === i) return;
                            var o = function(t, e, r) {
                                    if ("none" === document.body.getAttribute("data-wf-scroll-motion") || m.matches) return 0;
                                    var n = 1;
                                    return s.add(t).each(function(t, e) {
                                        var r = parseFloat(e.getAttribute("data-scroll-time"));
                                        !isNaN(r) && r >= 0 && (n = r)
                                    }), (472.143 * Math.log(Math.abs(e - r) + 125) - 2e3) * n
                                }(e, n, i),
                                c = Date.now();
                            l(function t() {
                                var e = Date.now() - c;
                                window.scroll(0, function(t, e, r, n) {
                                    return r > n ? e : t + (e - t) * ((i = r / n) < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                                    var i
                                }(n, i, e, o)), e <= o ? l(t) : "function" == typeof r && r()
                            })
                        }(f, function() {
                            v(f, "add"), f.get(0).focus({
                                preventScroll: !0
                            }), v(f, "remove")
                        })
                    }, e ? 0 : 300))
                }
            }
        }
        return {
            ready: function() {
                var t = e.WF_CLICK_EMPTY,
                    r = e.WF_CLICK_SCROLL;
                o.on(r, f, g), o.on(t, u, function(t) {
                    t.preventDefault()
                }), document.head.insertBefore(p, document.head.firstChild)
            }
        }
    })
}, function(t, e, r) {
    "use strict";
    r(9).define("touch", t.exports = function(t) {
        var e = {},
            r = window.getSelection;

        function n(e) {
            var n, i, a = !1,
                o = !1,
                s = Math.min(Math.round(.04 * window.innerWidth), 40);

            function l(t) {
                var e = t.touches;
                e && e.length > 1 || (a = !0, e ? (o = !0, n = e[0].clientX) : n = t.clientX, i = n)
            }

            function c(e) {
                if (a) {
                    if (o && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
                    var n = e.touches,
                        l = n ? n[0].clientX : e.clientX,
                        c = l - i;
                    i = l, Math.abs(c) > s && r && "" === String(r()) && (! function(e, r, n) {
                        var i = t.Event(e, {
                            originalEvent: r
                        });
                        t(r.target).trigger(i, n)
                    }("swipe", e, {
                        direction: c > 0 ? "right" : "left"
                    }), u())
                }
            }

            function h(t) {
                if (a) return a = !1, o && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void(o = !1)) : void 0
            }

            function u() {
                a = !1
            }
            e.addEventListener("touchstart", l, !1), e.addEventListener("touchmove", c, !1), e.addEventListener("touchend", h, !1), e.addEventListener("touchcancel", u, !1), e.addEventListener("mousedown", l, !1), e.addEventListener("mousemove", c, !1), e.addEventListener("mouseup", h, !1), e.addEventListener("mouseout", u, !1), this.destroy = function() {
                e.removeEventListener("touchstart", l, !1), e.removeEventListener("touchmove", c, !1), e.removeEventListener("touchend", h, !1), e.removeEventListener("touchcancel", u, !1), e.removeEventListener("mousedown", l, !1), e.removeEventListener("mousemove", c, !1), e.removeEventListener("mouseup", h, !1), e.removeEventListener("mouseout", u, !1), e = null
            }
        }
        return t.event.special.tap = {
            bindType: "click",
            delegateType: "click"
        }, e.init = function(e) {
            return (e = "string" == typeof e ? t(e).get(0) : e) ? new n(e) : null
        }, e.instance = e.init(document), e
    })
}, function(t, e, r) {
    "use strict";
    var n = r(9),
        i = r(56),
        a = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        },
        o = !0,
        s = /^#[a-zA-Z0-9\-_]+$/;
    n.define("dropdown", t.exports = function(t, e) {
        var r, l, c = e.debounce,
            h = {},
            u = n.env(),
            f = !1,
            p = n.env.touch,
            d = ".w-dropdown",
            m = "w--open",
            v = i.triggers,
            g = 900,
            y = "focusout" + d,
            E = "keydown" + d,
            b = "mouseenter" + d,
            _ = "mousemove" + d,
            x = "mouseleave" + d,
            w = (p ? "click" : "mouseup") + d,
            A = "w-close" + d,
            S = "setting" + d,
            T = t(document);

        function I() {
            r = u && n.env("design"), (l = T.find(d)).each(P)
        }

        function P(e, i) {
            var l = t(i),
                h = t.data(i, d);
            h || (h = t.data(i, d, {
                open: !1,
                el: l,
                config: {},
                selectedIdx: -1
            })), h.toggle = h.el.children(".w-dropdown-toggle"), h.list = h.el.children(".w-dropdown-list"), h.links = h.list.find("a:not(.w-dropdown .w-dropdown a)"), h.complete = function(t) {
                return function() {
                    t.list.removeClass(m), t.toggle.removeClass(m), t.manageZ && t.el.css("z-index", "")
                }
            }(h), h.mouseLeave = function(t) {
                return function() {
                    t.hovering = !1, t.links.is(":focus") || O(t)
                }
            }(h), h.mouseUpOutside = function(e) {
                e.mouseUpOutside && T.off(w, e.mouseUpOutside);
                return c(function(r) {
                    if (e.open) {
                        var i = t(r.target);
                        if (!i.closest(".w-dropdown-toggle").length) {
                            var a = -1 === t.inArray(e.el[0], i.parents(d)),
                                o = n.env("editor");
                            if (a) {
                                if (o) {
                                    var s = 1 === i.parents().length && 1 === i.parents("svg").length,
                                        l = i.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (s || l) return
                                }
                                O(e)
                            }
                        }
                    }
                })
            }(h), h.mouseMoveOutside = function(e) {
                return c(function(r) {
                    if (e.open) {
                        var n = t(r.target),
                            i = -1 === t.inArray(e.el[0], n.parents(d));
                        if (i) {
                            var a = n.parents(".w-editor-bem-EditorHoverControls").length,
                                o = n.parents(".w-editor-bem-RTToolbar").length,
                                s = t(".w-editor-bem-EditorOverlay"),
                                l = s.find(".w-editor-edit-outline").length || s.find(".w-editor-bem-RTToolbar").length;
                            if (a || o || l) return;
                            e.hovering = !1, O(e)
                        }
                    }
                })
            }(h), C(h);
            var f = h.toggle.attr("id"),
                p = h.list.attr("id");
            f || (f = "w-dropdown-toggle-" + e), p || (p = "w-dropdown-list-" + e), h.toggle.attr("id", f), h.toggle.attr("aria-controls", p), h.toggle.attr("aria-haspopup", "menu"), h.toggle.attr("aria-expanded", "false"), h.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), "BUTTON" !== h.toggle.prop("tagName") && (h.toggle.attr("role", "button"), h.toggle.attr("tabindex") || h.toggle.attr("tabindex", "0")), h.list.attr("id", p), h.list.attr("aria-labelledby", f), h.links.each(function(t, e) {
                e.hasAttribute("tabindex") || e.setAttribute("tabindex", "0"), s.test(e.hash) && e.addEventListener("click", O.bind(null, h))
            }), h.el.off(d), h.toggle.off(d), h.nav && h.nav.off(d);
            var v = D(h, o);
            r && h.el.on(S, function(t) {
                return function(e, r) {
                    r = r || {}, C(t), !0 === r.open && M(t), !1 === r.open && O(t, {
                        immediate: !0
                    })
                }
            }(h)), r || (u && (h.hovering = !1, O(h)), h.config.hover && h.toggle.on(b, function(t) {
                return function() {
                    t.hovering = !0, M(t)
                }
            }(h)), h.el.on(A, v), h.el.on(E, function(t) {
                return function(e) {
                    if (!r && t.open) switch (t.selectedIdx = t.links.index(document.activeElement), e.keyCode) {
                        case a.HOME:
                            if (!t.open) return;
                            return t.selectedIdx = 0, k(t), e.preventDefault();
                        case a.END:
                            if (!t.open) return;
                            return t.selectedIdx = t.links.length - 1, k(t), e.preventDefault();
                        case a.ESCAPE:
                            return O(t), t.toggle.focus(), e.stopPropagation();
                        case a.ARROW_RIGHT:
                        case a.ARROW_DOWN:
                            return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1), k(t), e.preventDefault();
                        case a.ARROW_LEFT:
                        case a.ARROW_UP:
                            return t.selectedIdx = Math.max(-1, t.selectedIdx - 1), k(t), e.preventDefault()
                    }
                }
            }(h)), h.el.on(y, function(t) {
                return c(function(e) {
                    var r = e.relatedTarget,
                        n = e.target,
                        i = t.el[0],
                        a = i.contains(r) || i.contains(n);
                    return a || O(t), e.stopPropagation()
                })
            }(h)), h.toggle.on(w, v), h.toggle.on(E, function(t) {
                var e = D(t, o);
                return function(n) {
                    if (!r) {
                        if (!t.open) switch (n.keyCode) {
                            case a.ARROW_UP:
                            case a.ARROW_DOWN:
                                return n.stopPropagation()
                        }
                        switch (n.keyCode) {
                            case a.SPACE:
                            case a.ENTER:
                                return e(), n.stopPropagation(), n.preventDefault()
                        }
                    }
                }
            }(h)), h.nav = h.el.closest(".w-nav"), h.nav.on(A, v))
        }

        function C(t) {
            var e = Number(t.el.css("z-index"));
            t.manageZ = e === g || e === g + 1, t.config = {
                hover: "true" === t.el.attr("data-hover") && !p,
                delay: t.el.attr("data-delay")
            }
        }

        function D(t, e) {
            return c(function(r) {
                if (t.open || r && "w-close" === r.type) return O(t, {
                    forceClose: e
                });
                M(t)
            })
        }

        function M(e) {
            if (!e.open) {
                ! function(e) {
                    var r = e.el[0];
                    l.each(function(e, n) {
                        var i = t(n);
                        i.is(r) || i.has(r).length || i.triggerHandler(A)
                    })
                }(e), e.open = !0, e.list.addClass(m), e.toggle.addClass(m), e.toggle.attr("aria-expanded", "true"), v.intro(0, e.el[0]), n.redraw.up(), e.manageZ && e.el.css("z-index", g + 1);
                var i = n.env("editor");
                r || T.on(w, e.mouseUpOutside), e.hovering && !i && e.el.on(x, e.mouseLeave), e.hovering && i && T.on(_, e.mouseMoveOutside), window.clearTimeout(e.delayId)
            }
        }

        function O(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = e.immediate,
                n = e.forceClose;
            if (t.open && (!t.config.hover || !t.hovering || n)) {
                t.toggle.attr("aria-expanded", "false"), t.open = !1;
                var i = t.config;
                if (v.outro(0, t.el[0]), T.off(w, t.mouseUpOutside), T.off(_, t.mouseMoveOutside), t.el.off(x, t.mouseLeave), window.clearTimeout(t.delayId), !i.delay || r) return t.complete();
                t.delayId = window.setTimeout(t.complete, i.delay)
            }
        }

        function k(t) {
            t.links[t.selectedIdx] && t.links[t.selectedIdx].focus()
        }
        return h.ready = I, h.design = function() {
            f && T.find(d).each(function(e, r) {
                t(r).triggerHandler(A)
            }), f = !1, I()
        }, h.preview = function() {
            f = !0, I()
        }, h
    })
}, function(t, e, r) {
    "use strict";
    var n = r(3)(r(468)),
        i = r(9);
    i.define("forms", t.exports = function(t, e) {
        var r, a, o, s, l, c = {},
            h = t(document),
            u = window.location,
            f = window.XDomainRequest && !window.atob,
            p = ".w-form",
            d = /e(-)?mail/i,
            m = /^\S+@\S+$/,
            v = window.alert,
            g = i.env(),
            y = /list-manage[1-9]?.com/i,
            E = e.debounce(function() {
                v("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);

        function b(e, r) {
            var n = t(r),
                i = t.data(r, p);
            i || (i = t.data(r, p, {
                form: n
            })), _(i);
            var o = n.closest("div.w-form");
            i.done = o.find("> .w-form-done"), i.fail = o.find("> .w-form-fail"), i.fileUploads = o.find(".w-file-upload"), i.fileUploads.each(function(e) {
                ! function(e, r) {
                    if (!r.fileUploads || !r.fileUploads[e]) return;
                    var n, i = t(r.fileUploads[e]),
                        a = i.find("> .w-file-upload-default"),
                        o = i.find("> .w-file-upload-uploading"),
                        s = i.find("> .w-file-upload-success"),
                        c = i.find("> .w-file-upload-error"),
                        h = a.find(".w-file-upload-input"),
                        u = a.find(".w-file-upload-label"),
                        f = u.children(),
                        p = c.find(".w-file-upload-error-msg"),
                        d = s.find(".w-file-upload-file"),
                        m = s.find(".w-file-remove-link"),
                        v = d.find(".w-file-upload-file-name"),
                        y = p.attr("data-w-size-error"),
                        E = p.attr("data-w-type-error"),
                        b = p.attr("data-w-generic-error");
                    g || u.on("click keydown", function(t) {
                        "keydown" === t.type && 13 !== t.which && 32 !== t.which || (t.preventDefault(), h.click())
                    });
                    if (u.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), m.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), g) h.on("click", function(t) {
                        t.preventDefault()
                    }), u.on("click", function(t) {
                        t.preventDefault()
                    }), f.on("click", function(t) {
                        t.preventDefault()
                    });
                    else {
                        m.on("click keydown", function(t) {
                            if ("keydown" === t.type) {
                                if (13 !== t.which && 32 !== t.which) return;
                                t.preventDefault()
                            }
                            h.removeAttr("data-value"), h.val(""), v.html(""), a.toggle(!0), s.toggle(!1), u.focus()
                        }), h.on("change", function(i) {
                            (n = i.target && i.target.files && i.target.files[0]) && (a.toggle(!1), c.toggle(!1), o.toggle(!0), o.focus(), v.text(n.name), I() || x(r), r.fileUploads[e].uploading = !0, function(e, r) {
                                var n = new URLSearchParams({
                                    name: e.name,
                                    size: e.size
                                });
                                t.ajax({
                                    type: "GET",
                                    url: "".concat(l, "?").concat(n),
                                    crossDomain: !0
                                }).done(function(t) {
                                    r(null, t)
                                }).fail(function(t) {
                                    r(t)
                                })
                            }(n, S))
                        });
                        var w = u.outerHeight();
                        h.height(w), h.width(1)
                    }

                    function A(t) {
                        var n = t.responseJSON && t.responseJSON.msg,
                            i = b;
                        "string" == typeof n && 0 === n.indexOf("InvalidFileTypeError") ? i = E : "string" == typeof n && 0 === n.indexOf("MaxFileSizeError") && (i = y), p.text(i), h.removeAttr("data-value"), h.val(""), o.toggle(!1), a.toggle(!0), c.toggle(!0), c.focus(), r.fileUploads[e].uploading = !1, I() || _(r)
                    }

                    function S(e, r) {
                        if (e) return A(e);
                        var i = r.fileName,
                            a = r.postData,
                            o = r.fileId,
                            s = r.s3Url;
                        h.attr("data-value", o),
                            function(e, r, n, i, a) {
                                var o = new FormData;
                                for (var s in r) o.append(s, r[s]);
                                o.append("file", n, i), t.ajax({
                                    type: "POST",
                                    url: e,
                                    data: o,
                                    processData: !1,
                                    contentType: !1
                                }).done(function() {
                                    a(null)
                                }).fail(function(t) {
                                    a(t)
                                })
                            }(s, a, n, i, T)
                    }

                    function T(t) {
                        if (t) return A(t);
                        o.toggle(!1), s.css("display", "inline-block"), s.focus(), r.fileUploads[e].uploading = !1, I() || _(r)
                    }

                    function I() {
                        var t = r.fileUploads && r.fileUploads.toArray() || [];
                        return t.some(function(t) {
                            return t.uploading
                        })
                    }
                }(e, i)
            });
            var s = i.form.attr("aria-label") || i.form.attr("data-name") || "Form";
            i.done.attr("aria-label") || i.form.attr("aria-label", s), i.done.attr("tabindex", "-1"), i.done.attr("role", "region"), i.done.attr("aria-label") || i.done.attr("aria-label", s + " success"), i.fail.attr("tabindex", "-1"), i.fail.attr("role", "region"), i.fail.attr("aria-label") || i.fail.attr("aria-label", s + " failure");
            var c = i.action = n.attr("action");
            i.handler = null, i.redirect = n.attr("data-redirect"), y.test(c) ? i.handler = T : c || (a ? i.handler = S : E())
        }

        function _(t) {
            var e = t.btn = t.form.find(':input[type="submit"]');
            t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
        }

        function x(t) {
            var e = t.btn,
                r = t.wait;
            e.prop("disabled", !0), r && (t.label = e.val(), e.val(r))
        }

        function w(e, r) {
            var n = null;
            return r = r || {}, e.find(':input:not([type="submit"]):not([type="file"])').each(function(i, a) {
                var o = t(a),
                    s = o.attr("type"),
                    l = o.attr("data-name") || o.attr("name") || "Field " + (i + 1),
                    c = o.val();
                if ("checkbox" === s) c = o.is(":checked");
                else if ("radio" === s) {
                    if (null === r[l] || "string" == typeof r[l]) return;
                    c = e.find('input[name="' + o.attr("name") + '"]:checked').val() || null
                }
                "string" == typeof c && (c = t.trim(c)), r[l] = c, n = n || function(t, e, r, n) {
                    var i = null;
                    "password" === e ? i = "Passwords cannot be submitted." : t.attr("required") ? n ? d.test(t.attr("type")) && (m.test(n) || (i = "Please enter a valid email address for: " + r)) : i = "Please fill out the required field: " + r : "g-recaptcha-response" !== r || n || (i = "Please confirm you’re not a robot.");
                    return i
                }(o, s, l, c)
            }), n
        }
        c.ready = c.design = c.preview = function() {
            ! function() {
                a = t("html").attr("data-wf-site"), s = "https://webflow.com/api/v1/form/" + a, f && s.indexOf("https://webflow.com") >= 0 && (s = s.replace("https://webflow.com", "http://formdata.webflow.com"));
                if (l = "".concat(s, "/signFile"), !(r = t(p + " form")).length) return;
                r.each(b)
            }(), g || o || function() {
                o = !0, h.on("submit", p + " form", function(e) {
                    var r = t.data(this, p);
                    r.handler && (r.evt = e, r.handler(r))
                });
                var e = [
                    ["checkbox", ".w-checkbox-input"],
                    ["radio", ".w-radio-input"]
                ];
                h.on("change", p + ' form input[type="checkbox"]:not(.w-checkbox-input)', function(e) {
                    t(e.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked")
                }), h.on("change", p + ' form input[type="radio"]', function(e) {
                    t('input[name="'.concat(e.target.name, '"]:not(').concat(".w-checkbox-input", ")")).map(function(e, r) {
                        return t(r).siblings(".w-radio-input").removeClass("w--redirected-checked")
                    });
                    var r = t(e.target);
                    r.hasClass("w-radio-input") || r.siblings(".w-radio-input").addClass("w--redirected-checked")
                }), e.forEach(function(e) {
                    var r = (0, n.default)(e, 2),
                        i = r[0],
                        a = r[1];
                    h.on("focus", p + ' form input[type="'.concat(i, '"]:not(') + a + ")", function(e) {
                        t(e.target).siblings(a).addClass("w--redirected-focus"), t(e.target).filter(":focus-visible, [data-wf-focus-visible]").siblings(a).addClass("w--redirected-focus-visible")
                    }), h.on("blur", p + ' form input[type="'.concat(i, '"]:not(') + a + ")", function(e) {
                        t(e.target).siblings(a).removeClass("".concat("w--redirected-focus", " ").concat("w--redirected-focus-visible"))
                    })
                })
            }()
        };
        var A = {
            _mkto_trk: "marketo"
        };

        function S(e) {
            _(e);
            var r = e.form,
                n = {
                    name: r.attr("data-name") || r.attr("name") || "Untitled Form",
                    source: u.href,
                    test: i.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(r.html()),
                    trackingCookies: document.cookie.split("; ").reduce(function(t, e) {
                        var r = e.split("="),
                            n = r[0];
                        if (n in A) {
                            var i = A[n],
                                a = r.slice(1).join("=");
                            t[i] = a
                        }
                        return t
                    }, {})
                },
                o = r.attr("data-wf-flow");
            o && (n.wfFlow = o), P(e);
            var l = w(r, n.fields);
            if (l) return v(l);
            n.fileUploads = function(e) {
                var r = {};
                return e.find(':input[type="file"]').each(function(e, n) {
                    var i = t(n),
                        a = i.attr("data-name") || i.attr("name") || "File " + (e + 1),
                        o = i.attr("data-value");
                    "string" == typeof o && (o = t.trim(o)), r[a] = o
                }), r
            }(r), x(e), a ? t.ajax({
                url: s,
                type: "POST",
                data: n,
                dataType: "json",
                crossDomain: !0
            }).done(function(t) {
                t && 200 === t.code && (e.success = !0), I(e)
            }).fail(function() {
                I(e)
            }) : I(e)
        }

        function T(r) {
            _(r);
            var n = r.form,
                i = {};
            if (!/^https/.test(u.href) || /^https/.test(r.action)) {
                P(r);
                var a, o = w(n, i);
                if (o) return v(o);
                x(r), e.each(i, function(t, e) {
                    d.test(e) && (i.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (a = t), /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t)
                }), a && !i.FNAME && (a = a.split(" "), i.FNAME = a[0], i.LNAME = i.LNAME || a[1]);
                var s = r.action.replace("/post?", "/post-json?") + "&c=?",
                    l = s.indexOf("u=") + 2;
                l = s.substring(l, s.indexOf("&", l));
                var c = s.indexOf("id=") + 3;
                c = s.substring(c, s.indexOf("&", c)), i["b_" + l + "_" + c] = "", t.ajax({
                    url: s,
                    data: i,
                    dataType: "jsonp"
                }).done(function(t) {
                    r.success = "success" === t.result || /already/.test(t.msg), r.success || console.info("MailChimp error: " + t.msg), I(r)
                }).fail(function() {
                    I(r)
                })
            } else n.attr("method", "post")
        }

        function I(t) {
            var e = t.form,
                r = t.redirect,
                n = t.success;
            n && r ? i.location(r) : (t.done.toggle(n), t.fail.toggle(!n), n ? t.done.focus() : t.fail.focus(), e.toggle(!n), _(t))
        }

        function P(t) {
            t.evt && t.evt.preventDefault(), t.evt = null
        }
        return c
    })
}, function(t, e, r) {
    var n = r(469),
        i = r(470),
        a = r(471);
    t.exports = function(t, e) {
        return n(t) || i(t, e) || a()
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t)) return t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), !e || r.length !== e); n = !0);
        } catch (t) {
            i = !0, a = t
        } finally {
            try {
                n || null == s.return || s.return()
            } finally {
                if (i) throw a
            }
        }
        return r
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, function(t, e, r) {
    "use strict";
    var n = r(9),
        i = "w-condition-invisible",
        a = "." + i;

    function o(t) {
        return Boolean(t.$el && t.$el.closest(a).length)
    }

    function s(t, e) {
        for (var r = t; r >= 0; r--)
            if (!o(e[r])) return r;
        return -1
    }

    function l(t, e) {
        for (var r = t; r <= e.length - 1; r++)
            if (!o(e[r])) return r;
        return -1
    }

    function c(t, e) {
        t.attr("aria-label") || t.attr("aria-label", e)
    }

    function h(t, e, r, n) {
        var a, h, u, f = r.tram,
            p = Array.isArray,
            d = "w-lightbox-",
            m = /(^|\s+)/g,
            v = [],
            g = [];

        function y(t, e) {
            return v = p(t) ? t : [t], h || y.build(),
                function(t) {
                    return t.filter(function(t) {
                        return !o(t)
                    })
                }(v).length > 1 && (h.items = h.empty, v.forEach(function(t, e) {
                    var r = V("thumbnail"),
                        n = V("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(r);
                    c(n, "show item ".concat(e + 1, " of ").concat(v.length)), o(t) && n.addClass(i), h.items = h.items.add(n), D(t.thumbnailUrl || t.url, function(t) {
                        t.prop("width") > t.prop("height") ? R(t, "wide") : R(t, "tall"), r.append(R(t, "thumbnail-image"))
                    })
                }), h.strip.empty().append(h.items), R(h.content, "group")), f(F(h.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                    opacity: 1
                }), R(h.html, "noscroll"), y.show(e || 0)
        }

        function E(t) {
            return function(e) {
                this === e.target && (e.stopPropagation(), e.preventDefault(), t())
            }
        }
        y.build = function() {
            return y.destroy(), (h = {
                html: r(e.documentElement),
                empty: r()
            }).arrowLeft = V("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), h.arrowRight = V("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), h.close = V("control close").attr("role", "button"), c(h.arrowLeft, "previous image"), c(h.arrowRight, "next image"), c(h.close, "close lightbox"), h.spinner = V("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), h.strip = V("strip").attr("role", "tablist"), u = new M(h.spinner, O("hide")), h.content = V("content").append(h.spinner, h.arrowLeft, h.arrowRight, h.close), h.container = V("container").append(h.content, h.strip), h.lightbox = V("backdrop hide").append(h.container), h.strip.on("click", k("item"), w), h.content.on("swipe", A).on("click", k("left"), b).on("click", k("right"), _).on("click", k("close"), x).on("click", k("image, caption"), _), h.container.on("click", k("view"), x).on("dragstart", k("img"), T), h.lightbox.on("keydown", I).on("focusin", S), r(n).append(h.lightbox), y
        }, y.destroy = function() {
            h && (F(h.html, "noscroll"), h.lightbox.remove(), h = void 0)
        }, y.show = function(t) {
            if (t !== a) {
                var e = v[t];
                if (!e) return y.hide();
                if (o(e)) {
                    if (t < a) {
                        var n = s(t - 1, v);
                        t = n > -1 ? n : t
                    } else {
                        var i = l(t + 1, v);
                        t = i > -1 ? i : t
                    }
                    e = v[t]
                }
                var c, p, d = a;
                return a = t, h.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), u.show(), D(e.html && (c = e.width, p = e.height, "data:image/svg+xml;charset=utf-8," + encodeURI('<svg xmlns="http://www.w3.org/2000/svg" width="' + c + '" height="' + p + '"/>')) || e.url, function(n) {
                    if (t === a) {
                        var i, o, c = V("figure", "figure").append(R(n, "image")),
                            p = V("frame").append(c),
                            m = V("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(p);
                        e.html && ((o = (i = r(e.html)).is("iframe")) && i.on("load", g), c.append(R(i, "embed"))), e.caption && c.append(V("caption", "figcaption").text(e.caption)), h.spinner.before(m), o || g()
                    }

                    function g() {
                        if (h.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), u.hide(), t === a) {
                            var e = function(t, e) {
                                return -1 === s(t - 1, e)
                            }(t, v);
                            L(h.arrowLeft, "inactive", e), N(h.arrowLeft, e), e && h.arrowLeft.is(":focus") && h.arrowRight.focus();
                            var r, n = function(t, e) {
                                return -1 === l(t + 1, e)
                            }(t, v);
                            if (L(h.arrowRight, "inactive", n), N(h.arrowRight, n), n && h.arrowRight.is(":focus") && h.arrowLeft.focus(), h.view ? (f(h.view).add("opacity .3s").start({
                                    opacity: 0
                                }).then((r = h.view, function() {
                                    r.remove()
                                })), f(m).add("opacity .3s").add("transform .3s").set({
                                    x: t > d ? "80px" : "-80px"
                                }).start({
                                    opacity: 1,
                                    x: 0
                                })) : m.css("opacity", 1), h.view = m, h.view.prop("tabIndex", 0), h.items) {
                                F(h.items, "active"), h.items.removeAttr("aria-selected");
                                var i = h.items.eq(t);
                                R(i, "active"), i.attr("aria-selected", !0),
                                    function(t) {
                                        var e, r = t.get(0),
                                            n = h.strip.get(0),
                                            i = r.offsetLeft,
                                            a = r.clientWidth,
                                            o = n.scrollLeft,
                                            s = n.clientWidth,
                                            l = n.scrollWidth - s;
                                        i < o ? e = Math.max(0, i + a - s) : i + a > s + o && (e = Math.min(i, l));
                                        null != e && f(h.strip).add("scroll-left 500ms").start({
                                            "scroll-left": e
                                        })
                                    }(i)
                            }
                        } else m.remove()
                    }
                }), h.close.prop("tabIndex", 0), r(":focus").addClass("active-lightbox"), 0 === g.length && (r("body").children().each(function() {
                    r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (g.push({
                        node: r(this),
                        hidden: r(this).attr("aria-hidden"),
                        tabIndex: r(this).attr("tabIndex")
                    }), r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
                }), h.close.focus()), y
            }
        }, y.hide = function() {
            return f(h.lightbox).add("opacity .3s").start({
                opacity: 0
            }).then(C), y
        }, y.prev = function() {
            var t = s(a - 1, v);
            t > -1 && y.show(t)
        }, y.next = function() {
            var t = l(a + 1, v);
            t > -1 && y.show(t)
        };
        var b = E(y.prev),
            _ = E(y.next),
            x = E(y.hide),
            w = function(t) {
                var e = r(this).index();
                t.preventDefault(), y.show(e)
            },
            A = function(t, e) {
                t.preventDefault(), "left" === e.direction ? y.next() : "right" === e.direction && y.prev()
            },
            S = function() {
                this.focus()
            };

        function T(t) {
            t.preventDefault()
        }

        function I(t) {
            var e = t.keyCode;
            27 === e || P(e, "close") ? y.hide() : 37 === e || P(e, "left") ? y.prev() : 39 === e || P(e, "right") ? y.next() : P(e, "item") && r(":focus").click()
        }

        function P(t, e) {
            if (13 !== t && 32 !== t) return !1;
            var n = r(":focus").attr("class"),
                i = O(e).trim();
            return n.includes(i)
        }

        function C() {
            h && (h.strip.scrollLeft(0).empty(), F(h.html, "noscroll"), R(h.lightbox, "hide"), h.view && h.view.remove(), F(h.content, "group"), R(h.arrowLeft, "inactive"), R(h.arrowRight, "inactive"), a = h.view = void 0, g.forEach(function(t) {
                var e = t.node;
                e && (t.hidden ? e.attr("aria-hidden", t.hidden) : e.removeAttr("aria-hidden"), t.tabIndex ? e.attr("tabIndex", t.tabIndex) : e.removeAttr("tabIndex"))
            }), g = [], r(".active-lightbox").removeClass("active-lightbox").focus())
        }

        function D(t, e) {
            var r = V("img", "img");
            return r.one("load", function() {
                e(r)
            }), r.attr("src", t), r
        }

        function M(t, e, r) {
            this.$element = t, this.className = e, this.delay = r || 200, this.hide()
        }

        function O(t, e) {
            return t.replace(m, (e ? " ." : " ") + d)
        }

        function k(t) {
            return O(t, !0)
        }

        function R(t, e) {
            return t.addClass(O(e))
        }

        function F(t, e) {
            return t.removeClass(O(e))
        }

        function L(t, e, r) {
            return t.toggleClass(O(e), r)
        }

        function N(t, e) {
            return t.attr("aria-hidden", e).attr("tabIndex", e ? -1 : 0)
        }

        function V(t, n) {
            return R(r(e.createElement(n || "div")), t)
        }
        return M.prototype.show = function() {
                var t = this;
                t.timeoutId || (t.timeoutId = setTimeout(function() {
                    t.$element.removeClass(t.className), delete t.timeoutId
                }, t.delay))
            }, M.prototype.hide = function() {
                if (this.timeoutId) return clearTimeout(this.timeoutId), void delete this.timeoutId;
                this.$element.addClass(this.className)
            },
            function() {
                var r = t.navigator.userAgent,
                    n = r.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
                if (r.indexOf("Android ") > -1 && -1 === r.indexOf("Chrome") || n && !(n[2] > 7)) {
                    var i = e.createElement("style");
                    e.head.appendChild(i), t.addEventListener("resize", a, !0), a()
                }

                function a() {
                    var e = t.innerHeight,
                        r = t.innerWidth,
                        n = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + e + "px}.w-lightbox-view {width:" + r + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * e + "px}.w-lightbox-image {max-width:" + r + "px;max-height:" + e + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * e + "px}.w-lightbox-strip {padding: 0 " + .01 * e + "px}.w-lightbox-item {width:" + .1 * e + "px;padding:" + .02 * e + "px " + .01 * e + "px}.w-lightbox-thumbnail {height:" + .1 * e + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * e + "px}.w-lightbox-content {margin-top:" + .02 * e + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * e + "px}.w-lightbox-image {max-width:" + .96 * r + "px;max-height:" + .96 * e + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * r + "px;max-height:" + .84 * e + "px}}";
                    i.textContent = n
                }
            }(), y
    }
    n.define("lightbox", t.exports = function(t) {
        var e, r, i, a = {},
            o = n.env(),
            s = h(window, document, t, o ? "#lightbox-mountpoint" : "body"),
            l = t(document),
            u = ".w-lightbox";

        function f(t) {
            var e, r, n = t.el.children(".w-json").html();
            if (n) {
                try {
                    n = JSON.parse(n)
                } catch (t) {
                    console.error("Malformed lightbox JSON configuration.", t)
                }! function(t) {
                    t.images && (t.images.forEach(function(t) {
                        t.type = "image"
                    }), t.items = t.images);
                    t.embed && (t.embed.type = "video", t.items = [t.embed]);
                    t.groupId && (t.group = t.groupId)
                }(n), n.items.forEach(function(e) {
                    e.$el = t.el
                }), (e = n.group) ? ((r = i[e]) || (r = i[e] = []), t.items = r, n.items.length && (t.index = r.length, r.push.apply(r, n.items))) : (t.items = n.items, t.index = 0)
            } else t.items = []
        }
        return a.ready = a.design = a.preview = function() {
            r = o && n.env("design"), s.destroy(), i = {}, (e = l.find(u)).webflowLightBox(), e.each(function() {
                c(t(this), "open lightbox"), t(this).attr("aria-haspopup", "dialog")
            })
        }, jQuery.fn.extend({
            webflowLightBox: function() {
                t.each(this, function(e, n) {
                    var i = t.data(n, u);
                    i || (i = t.data(n, u, {
                        el: t(n),
                        mode: "images",
                        images: [],
                        embed: ""
                    })), i.el.off(u), f(i), r ? i.el.on("setting" + u, f.bind(null, i)) : i.el.on("click" + u, function(t) {
                        return function() {
                            t.items.length && s(t.items, t.index || 0)
                        }
                    }(i)).on("click" + u, function(t) {
                        t.preventDefault()
                    })
                })
            }
        }), a
    })
}, function(t, e, r) {
    "use strict";
    var n = r(9),
        i = r(56),
        a = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
    n.define("navbar", t.exports = function(t, e) {
        var r, o, s, l, c = {},
            h = t.tram,
            u = t(window),
            f = t(document),
            p = e.debounce,
            d = n.env(),
            m = '<div class="w-nav-overlay" data-wf-ignore />',
            v = ".w-nav",
            g = "w--open",
            y = "w--nav-dropdown-open",
            E = "w--nav-dropdown-toggle-open",
            b = "w--nav-dropdown-list-open",
            _ = "w--nav-link-open",
            x = i.triggers,
            w = t();

        function A() {
            n.resize.off(S)
        }

        function S() {
            o.each(F)
        }

        function T(r, n) {
            var i = t(n),
                o = t.data(n, v);
            o || (o = t.data(n, v, {
                open: !1,
                el: i,
                config: {},
                selectedIdx: -1
            })), o.menu = i.find(".w-nav-menu"), o.links = o.menu.find(".w-nav-link"), o.dropdowns = o.menu.find(".w-dropdown"), o.dropdownToggle = o.menu.find(".w-dropdown-toggle"), o.dropdownList = o.menu.find(".w-dropdown-list"), o.button = i.find(".w-nav-button"), o.container = i.find(".w-container"), o.overlayContainerId = "w-nav-overlay-" + r, o.outside = function(e) {
                e.outside && f.off("click" + v, e.outside);
                return function(r) {
                    var n = t(r.target);
                    l && n.closest(".w-editor-bem-EditorOverlay").length || R(e, n)
                }
            }(o);
            var c = i.find(".w-nav-brand");
            c && "/" === c.attr("href") && null == c.attr("aria-label") && c.attr("aria-label", "home"), o.button.attr("style", "-webkit-user-select: text;"), null == o.button.attr("aria-label") && o.button.attr("aria-label", "menu"), o.button.attr("role", "button"), o.button.attr("tabindex", "0"), o.button.attr("aria-controls", o.overlayContainerId), o.button.attr("aria-haspopup", "menu"), o.button.attr("aria-expanded", "false"), o.el.off(v), o.button.off(v), o.menu.off(v), C(o), s ? (P(o), o.el.on("setting" + v, function(t) {
                return function(r, n) {
                    n = n || {};
                    var i = u.width();
                    C(t), !0 === n.open && B(t, !0), !1 === n.open && j(t, !0), t.open && e.defer(function() {
                        i !== u.width() && M(t)
                    })
                }
            }(o))) : (! function(e) {
                if (e.overlay) return;
                e.overlay = t(m).appendTo(e.el), e.overlay.attr("id", e.overlayContainerId), e.parent = e.menu.parent(), j(e, !0)
            }(o), o.button.on("click" + v, O(o)), o.menu.on("click" + v, "a", k(o)), o.button.on("keydown" + v, function(t) {
                return function(e) {
                    switch (e.keyCode) {
                        case a.SPACE:
                        case a.ENTER:
                            return O(t)(), e.preventDefault(), e.stopPropagation();
                        case a.ESCAPE:
                            return j(t), e.preventDefault(), e.stopPropagation();
                        case a.ARROW_RIGHT:
                        case a.ARROW_DOWN:
                        case a.HOME:
                        case a.END:
                            return t.open ? (e.keyCode === a.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, D(t), e.preventDefault(), e.stopPropagation()) : (e.preventDefault(), e.stopPropagation())
                    }
                }
            }(o)), o.el.on("keydown" + v, function(t) {
                return function(e) {
                    if (t.open) switch (t.selectedIdx = t.links.index(document.activeElement), e.keyCode) {
                        case a.HOME:
                        case a.END:
                            return e.keyCode === a.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, D(t), e.preventDefault(), e.stopPropagation();
                        case a.ESCAPE:
                            return j(t), t.button.focus(), e.preventDefault(), e.stopPropagation();
                        case a.ARROW_LEFT:
                        case a.ARROW_UP:
                            return t.selectedIdx = Math.max(-1, t.selectedIdx - 1), D(t), e.preventDefault(), e.stopPropagation();
                        case a.ARROW_RIGHT:
                        case a.ARROW_DOWN:
                            return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1), D(t), e.preventDefault(), e.stopPropagation()
                    }
                }
            }(o))), F(r, n)
        }

        function I(e, r) {
            var n = t.data(r, v);
            n && (P(n), t.removeData(r, v))
        }

        function P(t) {
            t.overlay && (j(t, !0), t.overlay.remove(), t.overlay = null)
        }

        function C(t) {
            var r = {},
                n = t.config || {},
                i = r.animation = t.el.attr("data-animation") || "default";
            r.animOver = /^over/.test(i), r.animDirect = /left$/.test(i) ? -1 : 1, n.animation !== i && t.open && e.defer(M, t), r.easing = t.el.attr("data-easing") || "ease", r.easing2 = t.el.attr("data-easing2") || "ease";
            var a = t.el.attr("data-duration");
            r.duration = null != a ? Number(a) : 400, r.docHeight = t.el.attr("data-doc-height"), t.config = r
        }

        function D(t) {
            if (t.links[t.selectedIdx]) {
                var e = t.links[t.selectedIdx];
                e.focus(), k(e)
            }
        }

        function M(t) {
            t.open && (j(t, !0), B(t, !0))
        }

        function O(t) {
            return p(function() {
                t.open ? j(t) : B(t)
            })
        }

        function k(e) {
            return function(r) {
                var i = t(this).attr("href");
                n.validClick(r.currentTarget) ? i && 0 === i.indexOf("#") && e.open && j(e) : r.preventDefault()
            }
        }
        c.ready = c.design = c.preview = function() {
            if (s = d && n.env("design"), l = n.env("editor"), r = t(document.body), !(o = f.find(v)).length) return;
            o.each(T), A(), n.resize.on(S)
        }, c.destroy = function() {
            w = t(), A(), o && o.length && o.each(I)
        };
        var R = p(function(t, e) {
            if (t.open) {
                var r = e.closest(".w-nav-menu");
                t.menu.is(r) || j(t)
            }
        });

        function F(e, r) {
            var n = t.data(r, v),
                i = n.collapsed = "none" !== n.button.css("display");
            if (!n.open || i || s || j(n, !0), n.container.length) {
                var a = function(e) {
                    var r = e.container.css(L);
                    "none" === r && (r = "");
                    return function(e, n) {
                        (n = t(n)).css(L, ""), "none" === n.css(L) && n.css(L, r)
                    }
                }(n);
                n.links.each(a), n.dropdowns.each(a)
            }
            n.open && G(n)
        }
        var L = "max-width";

        function N(t, e) {
            e.setAttribute("data-nav-menu-open", "")
        }

        function V(t, e) {
            e.removeAttribute("data-nav-menu-open")
        }

        function B(t, e) {
            if (!t.open) {
                t.open = !0, t.menu.each(N), t.links.addClass(_), t.dropdowns.addClass(y), t.dropdownToggle.addClass(E), t.dropdownList.addClass(b), t.button.addClass(g);
                var r = t.config;
                ("none" === r.animation || !h.support.transform || r.duration <= 0) && (e = !0);
                var i = G(t),
                    a = t.menu.outerHeight(!0),
                    o = t.menu.outerWidth(!0),
                    l = t.el.height(),
                    c = t.el[0];
                if (F(0, c), x.intro(0, c), n.redraw.up(), s || f.on("click" + v, t.outside), e) d();
                else {
                    var u = "transform " + r.duration + "ms " + r.easing;
                    if (t.overlay && (w = t.menu.prev(), t.overlay.show().append(t.menu)), r.animOver) return h(t.menu).add(u).set({
                        x: r.animDirect * o,
                        height: i
                    }).start({
                        x: 0
                    }).then(d), void(t.overlay && t.overlay.width(o));
                    var p = l + a;
                    h(t.menu).add(u).set({
                        y: -p
                    }).start({
                        y: 0
                    }).then(d)
                }
            }

            function d() {
                t.button.attr("aria-expanded", "true")
            }
        }

        function G(t) {
            var e = t.config,
                n = e.docHeight ? f.height() : r.height();
            return e.animOver ? t.menu.height(n) : "fixed" !== t.el.css("position") && (n -= t.el.outerHeight(!0)), t.overlay && t.overlay.height(n), n
        }

        function j(t, e) {
            if (t.open) {
                t.open = !1, t.button.removeClass(g);
                var r = t.config;
                if (("none" === r.animation || !h.support.transform || r.duration <= 0) && (e = !0), x.outro(0, t.el[0]), f.off("click" + v, t.outside), e) return h(t.menu).stop(), void l();
                var n = "transform " + r.duration + "ms " + r.easing2,
                    i = t.menu.outerHeight(!0),
                    a = t.menu.outerWidth(!0),
                    o = t.el.height();
                if (r.animOver) h(t.menu).add(n).start({
                    x: a * r.animDirect
                }).then(l);
                else {
                    var s = o + i;
                    h(t.menu).add(n).start({
                        y: -s
                    }).then(l)
                }
            }

            function l() {
                t.menu.height(""), h(t.menu).set({
                    x: 0,
                    y: 0
                }), t.menu.each(V), t.links.removeClass(_), t.dropdowns.removeClass(y), t.dropdownToggle.removeClass(E), t.dropdownList.removeClass(b), t.overlay && t.overlay.children().length && (w.length ? t.menu.insertAfter(w) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close"), t.button.attr("aria-expanded", "false")
            }
        }
        return c
    })
}, function(t, e, r) {
    "use strict";
    var n = r(9),
        i = r(56),
        a = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        },
        o = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    n.define("slider", t.exports = function(t, e) {
        var r, s, l, c = {},
            h = t.tram,
            u = t(document),
            f = n.env(),
            p = ".w-slider",
            d = '<div class="w-slider-dot" data-wf-ignore />',
            m = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
            v = "w-slider-force-show",
            g = i.triggers,
            y = !1;

        function E() {
            (r = u.find(p)).length && (r.each(x), l || (b(), n.resize.on(_), n.redraw.on(c.redraw)))
        }

        function b() {
            n.resize.off(_), n.redraw.off(c.redraw)
        }

        function _() {
            r.filter(":visible").each(R)
        }

        function x(e, r) {
            var n = t(r),
                i = t.data(r, p);
            i || (i = t.data(r, p, {
                index: 0,
                depth: 1,
                hasFocus: {
                    keyboard: !1,
                    mouse: !1
                },
                el: n,
                config: {}
            })), i.mask = n.children(".w-slider-mask"), i.left = n.children(".w-slider-arrow-left"), i.right = n.children(".w-slider-arrow-right"), i.nav = n.children(".w-slider-nav"), i.slides = i.mask.children(".w-slide"), i.slides.each(g.reset), y && (i.maskWidth = 0), void 0 === n.attr("role") && n.attr("role", "region"), void 0 === n.attr("aria-label") && n.attr("aria-label", "carousel");
            var a = i.mask.attr("id");
            if (a || (a = "w-slider-mask-" + e, i.mask.attr("id", a)), s || i.ariaLiveLabel || (i.ariaLiveLabel = t(m).appendTo(i.mask)), i.left.attr("role", "button"), i.left.attr("tabindex", "0"), i.left.attr("aria-controls", a), void 0 === i.left.attr("aria-label") && i.left.attr("aria-label", "previous slide"), i.right.attr("role", "button"), i.right.attr("tabindex", "0"), i.right.attr("aria-controls", a), void 0 === i.right.attr("aria-label") && i.right.attr("aria-label", "next slide"), !h.support.transform) return i.left.hide(), i.right.hide(), i.nav.hide(), void(l = !0);
            i.el.off(p), i.left.off(p), i.right.off(p), i.nav.off(p), w(i), s ? (i.el.on("setting" + p, M(i)), D(i), i.hasTimer = !1) : (i.el.on("swipe" + p, M(i)), i.left.on("click" + p, I(i)), i.right.on("click" + p, P(i)), i.left.on("keydown" + p, T(i, I)), i.right.on("keydown" + p, T(i, P)), i.nav.on("keydown" + p, "> div", M(i)), i.config.autoplay && !i.hasTimer && (i.hasTimer = !0, i.timerCount = 1, C(i)), i.el.on("mouseenter" + p, S(i, !0, "mouse")), i.el.on("focusin" + p, S(i, !0, "keyboard")), i.el.on("mouseleave" + p, S(i, !1, "mouse")), i.el.on("focusout" + p, S(i, !1, "keyboard"))), i.nav.on("click" + p, "> div", M(i)), f || i.mask.contents().filter(function() {
                return 3 === this.nodeType
            }).remove();
            var o = n.filter(":hidden");
            o.addClass(v);
            var c = n.parents(":hidden");
            c.addClass(v), y || R(e, r), o.removeClass(v), c.removeClass(v)
        }

        function w(t) {
            var e = {
                crossOver: 0
            };
            e.animation = t.el.attr("data-animation") || "slide", "outin" === e.animation && (e.animation = "cross", e.crossOver = .5), e.easing = t.el.attr("data-easing") || "ease";
            var r = t.el.attr("data-duration");
            if (e.duration = null != r ? parseInt(r, 10) : 500, A(t.el.attr("data-infinite")) && (e.infinite = !0), A(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0), A(t.el.attr("data-hide-arrows")) ? e.hideArrows = !0 : t.config.hideArrows && (t.left.show(), t.right.show()), A(t.el.attr("data-autoplay"))) {
                e.autoplay = !0, e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3, e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10);
                var n = "mousedown" + p + " touchstart" + p;
                s || t.el.off(n).one(n, function() {
                    D(t)
                })
            }
            var i = t.right.width();
            e.edge = i ? i + 40 : 100, t.config = e
        }

        function A(t) {
            return "1" === t || "true" === t
        }

        function S(e, r, n) {
            return function(i) {
                if (r) e.hasFocus[n] = r;
                else {
                    if (t.contains(e.el.get(0), i.relatedTarget)) return;
                    if (e.hasFocus[n] = r, e.hasFocus.mouse && "keyboard" === n || e.hasFocus.keyboard && "mouse" === n) return
                }
                r ? (e.ariaLiveLabel.attr("aria-live", "polite"), e.hasTimer && D(e)) : (e.ariaLiveLabel.attr("aria-live", "off"), e.hasTimer && C(e))
            }
        }

        function T(t, e) {
            return function(r) {
                switch (r.keyCode) {
                    case a.SPACE:
                    case a.ENTER:
                        return e(t)(), r.preventDefault(), r.stopPropagation()
                }
            }
        }

        function I(t) {
            return function() {
                k(t, {
                    index: t.index - 1,
                    vector: -1
                })
            }
        }

        function P(t) {
            return function() {
                k(t, {
                    index: t.index + 1,
                    vector: 1
                })
            }
        }

        function C(t) {
            D(t);
            var e = t.config,
                r = e.timerMax;
            r && t.timerCount++ > r || (t.timerId = window.setTimeout(function() {
                null == t.timerId || s || (P(t)(), C(t))
            }, e.delay))
        }

        function D(t) {
            window.clearTimeout(t.timerId), t.timerId = null
        }

        function M(r) {
            return function(i, o) {
                o = o || {};
                var l = r.config;
                if (s && "setting" === i.type) {
                    if ("prev" === o.select) return I(r)();
                    if ("next" === o.select) return P(r)();
                    if (w(r), F(r), null == o.select) return;
                    ! function(r, n) {
                        var i = null;
                        n === r.slides.length && (E(), F(r)), e.each(r.anchors, function(e, r) {
                            t(e.els).each(function(e, a) {
                                t(a).index() === n && (i = r)
                            })
                        }), null != i && k(r, {
                            index: i,
                            immediate: !0
                        })
                    }(r, o.select)
                } else {
                    if ("swipe" === i.type) {
                        if (l.disableSwipe) return;
                        if (n.env("editor")) return;
                        return "left" === o.direction ? P(r)() : "right" === o.direction ? I(r)() : void 0
                    }
                    if (r.nav.has(i.target).length) {
                        var c = t(i.target).index();
                        if ("click" === i.type && k(r, {
                                index: c
                            }), "keydown" === i.type) switch (i.keyCode) {
                            case a.ENTER:
                            case a.SPACE:
                                k(r, {
                                    index: c
                                }), i.preventDefault();
                                break;
                            case a.ARROW_LEFT:
                            case a.ARROW_UP:
                                O(r.nav, Math.max(c - 1, 0)), i.preventDefault();
                                break;
                            case a.ARROW_RIGHT:
                            case a.ARROW_DOWN:
                                O(r.nav, Math.min(c + 1, r.pages)), i.preventDefault();
                                break;
                            case a.HOME:
                                O(r.nav, 0), i.preventDefault();
                                break;
                            case a.END:
                                O(r.nav, r.pages), i.preventDefault();
                                break;
                            default:
                                return
                        }
                    }
                }
            }
        }

        function O(t, e) {
            var r = t.children().eq(e).focus();
            t.children().not(r)
        }

        function k(e, r) {
            r = r || {};
            var n = e.config,
                i = e.anchors;
            e.previous = e.index;
            var a = r.index,
                l = {};
            a < 0 ? (a = i.length - 1, n.infinite && (l.x = -e.endX, l.from = 0, l.to = i[0].width)) : a >= i.length && (a = 0, n.infinite && (l.x = i[i.length - 1].width, l.from = -i[i.length - 1].x, l.to = l.from - l.x)), e.index = a;
            var c = e.nav.children().eq(a).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
            e.nav.children().not(c).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), n.hideArrows && (e.index === i.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
            var u = e.offsetX || 0,
                f = e.offsetX = -i[e.index].x,
                p = {
                    x: f,
                    opacity: 1,
                    visibility: ""
                },
                d = t(i[e.index].els),
                m = t(i[e.previous] && i[e.previous].els),
                v = e.slides.not(d),
                E = n.animation,
                b = n.easing,
                _ = Math.round(n.duration),
                x = r.vector || (e.index > e.previous ? 1 : -1),
                w = "opacity " + _ + "ms " + b,
                A = "transform " + _ + "ms " + b;
            if (d.find(o).removeAttr("tabindex"), d.removeAttr("aria-hidden"), d.find("*").removeAttr("aria-hidden"), v.find(o).attr("tabindex", "-1"), v.attr("aria-hidden", "true"), v.find("*").attr("aria-hidden", "true"), s || (d.each(g.intro), v.each(g.outro)), r.immediate && !y) return h(d).set(p), void I();
            if (e.index !== e.previous) {
                if (s || e.ariaLiveLabel.text("Slide ".concat(a + 1, " of ").concat(i.length, ".")), "cross" === E) {
                    var S = Math.round(_ - _ * n.crossOver),
                        T = Math.round(_ - S);
                    return w = "opacity " + S + "ms " + b, h(m).set({
                        visibility: ""
                    }).add(w).start({
                        opacity: 0
                    }), void h(d).set({
                        visibility: "",
                        x: f,
                        opacity: 0,
                        zIndex: e.depth++
                    }).add(w).wait(T).then({
                        opacity: 1
                    }).then(I)
                }
                if ("fade" === E) return h(m).set({
                    visibility: ""
                }).stop(), void h(d).set({
                    visibility: "",
                    x: f,
                    opacity: 0,
                    zIndex: e.depth++
                }).add(w).start({
                    opacity: 1
                }).then(I);
                if ("over" === E) return p = {
                    x: e.endX
                }, h(m).set({
                    visibility: ""
                }).stop(), void h(d).set({
                    visibility: "",
                    zIndex: e.depth++,
                    x: f + i[e.index].width * x
                }).add(A).start({
                    x: f
                }).then(I);
                n.infinite && l.x ? (h(e.slides.not(m)).set({
                    visibility: "",
                    x: l.x
                }).add(A).start({
                    x: f
                }), h(m).set({
                    visibility: "",
                    x: l.from
                }).add(A).start({
                    x: l.to
                }), e.shifted = m) : (n.infinite && e.shifted && (h(e.shifted).set({
                    visibility: "",
                    x: u
                }), e.shifted = null), h(e.slides).set({
                    visibility: ""
                }).add(A).start({
                    x: f
                }))
            }

            function I() {
                d = t(i[e.index].els), v = e.slides.not(d), "slide" !== E && (p.visibility = "hidden"), h(v).set(p)
            }
        }

        function R(e, r) {
            var n = t.data(r, p);
            if (n) return function(t) {
                var e = t.mask.width();
                if (t.maskWidth !== e) return t.maskWidth = e, !0;
                return !1
            }(n) ? F(n) : void(s && function(e) {
                var r = 0;
                if (e.slides.each(function(e, n) {
                        r += t(n).outerWidth(!0)
                    }), e.slidesWidth !== r) return e.slidesWidth = r, !0;
                return !1
            }(n) && F(n))
        }

        function F(e) {
            var r = 1,
                n = 0,
                i = 0,
                a = 0,
                o = e.maskWidth,
                l = o - e.config.edge;
            l < 0 && (l = 0), e.anchors = [{
                els: [],
                x: 0,
                width: 0
            }], e.slides.each(function(s, c) {
                i - n > l && (r++, n += o, e.anchors[r - 1] = {
                    els: [],
                    x: i,
                    width: 0
                }), a = t(c).outerWidth(!0), i += a, e.anchors[r - 1].width += a, e.anchors[r - 1].els.push(c);
                var h = s + 1 + " of " + e.slides.length;
                t(c).attr("aria-label", h), t(c).attr("role", "group")
            }), e.endX = i, s && (e.pages = null), e.nav.length && e.pages !== r && (e.pages = r, function(e) {
                var r, n = [],
                    i = e.el.attr("data-nav-spacing");
                i && (i = parseFloat(i) + "px");
                for (var a = 0, o = e.pages; a < o; a++)(r = t(d)).attr("aria-label", "Show slide " + (a + 1) + " of " + o).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), e.nav.hasClass("w-num") && r.text(a + 1), null != i && r.css({
                    "margin-left": i,
                    "margin-right": i
                }), n.push(r);
                e.nav.empty().append(n)
            }(e));
            var c = e.index;
            c >= r && (c = r - 1), k(e, {
                immediate: !0,
                index: c
            })
        }
        return c.ready = function() {
            s = n.env("design"), E()
        }, c.design = function() {
            s = !0, setTimeout(E, 1e3)
        }, c.preview = function() {
            s = !1, E()
        }, c.redraw = function() {
            y = !0, E(), y = !1
        }, c.destroy = b, c
    })
}, function(t, e, r) {
    "use strict";
    var n = r(9),
        i = r(56);
    n.define("tabs", t.exports = function(t) {
        var e, r, a = {},
            o = t.tram,
            s = t(document),
            l = n.env,
            c = l.safari,
            h = l(),
            u = "data-w-tab",
            f = "data-w-pane",
            p = ".w-tabs",
            d = "w--current",
            m = "w--tab-active",
            v = i.triggers,
            g = !1;

        function y() {
            r = h && n.env("design"), (e = s.find(p)).length && (e.each(_), n.env("preview") && !g && e.each(b), E(), n.redraw.on(a.redraw))
        }

        function E() {
            n.redraw.off(a.redraw)
        }

        function b(e, r) {
            var n = t.data(r, p);
            n && (n.links && n.links.each(v.reset), n.panes && n.panes.each(v.reset))
        }

        function _(e, n) {
            var i = p.substr(1) + "-" + e,
                a = t(n),
                o = t.data(n, p);
            if (o || (o = t.data(n, p, {
                    el: a,
                    config: {}
                })), o.current = null, o.tabIdentifier = i + "-" + u, o.paneIdentifier = i + "-" + f, o.menu = a.children(".w-tab-menu"), o.links = o.menu.children(".w-tab-link"), o.content = a.children(".w-tab-content"), o.panes = o.content.children(".w-tab-pane"), o.el.off(p), o.links.off(p), o.menu.attr("role", "tablist"), o.links.attr("tabindex", "-1"), function(t) {
                    var e = {};
                    e.easing = t.el.attr("data-easing") || "ease";
                    var r = parseInt(t.el.attr("data-duration-in"), 10);
                    r = e.intro = r == r ? r : 0;
                    var n = parseInt(t.el.attr("data-duration-out"), 10);
                    n = e.outro = n == n ? n : 0, e.immediate = !r && !n, t.config = e
                }(o), !r) {
                o.links.on("click" + p, function(t) {
                    return function(e) {
                        e.preventDefault();
                        var r = e.currentTarget.getAttribute(u);
                        r && x(t, {
                            tab: r
                        })
                    }
                }(o)), o.links.on("keydown" + p, function(t) {
                    return function(e) {
                        var r = function(t) {
                                var e = t.current;
                                return Array.prototype.findIndex.call(t.links, function(t) {
                                    return t.getAttribute(u) === e
                                }, null)
                            }(t),
                            n = e.key,
                            i = {
                                ArrowLeft: r - 1,
                                ArrowUp: r - 1,
                                ArrowRight: r + 1,
                                ArrowDown: r + 1,
                                End: t.links.length - 1,
                                Home: 0
                            };
                        if (n in i) {
                            e.preventDefault();
                            var a = i[n]; - 1 === a && (a = t.links.length - 1), a === t.links.length && (a = 0);
                            var o = t.links[a],
                                s = o.getAttribute(u);
                            s && x(t, {
                                tab: s
                            })
                        }
                    }
                }(o));
                var s = o.links.filter("." + d).attr(u);
                s && x(o, {
                    tab: s,
                    immediate: !0
                })
            }
        }

        function x(e, r) {
            r = r || {};
            var i = e.config,
                a = i.easing,
                s = r.tab;
            if (s !== e.current) {
                var l;
                e.current = s, e.links.each(function(n, a) {
                    var o = t(a);
                    if (r.immediate || i.immediate) {
                        var c = e.panes[n];
                        a.id || (a.id = e.tabIdentifier + "-" + n), c.id || (c.id = e.paneIdentifier + "-" + n), a.href = "#" + c.id, a.setAttribute("role", "tab"), a.setAttribute("aria-controls", c.id), a.setAttribute("aria-selected", "false"), c.setAttribute("role", "tabpanel"), c.setAttribute("aria-labelledby", a.id)
                    }
                    a.getAttribute(u) === s ? (l = a, o.addClass(d).removeAttr("tabindex").attr({
                        "aria-selected": "true"
                    }).each(v.intro)) : o.hasClass(d) && o.removeClass(d).attr({
                        tabindex: "-1",
                        "aria-selected": "false"
                    }).each(v.outro)
                });
                var h = [],
                    f = [];
                e.panes.each(function(e, r) {
                    var n = t(r);
                    r.getAttribute(u) === s ? h.push(r) : n.hasClass(m) && f.push(r)
                });
                var p = t(h),
                    y = t(f);
                if (r.immediate || i.immediate) return p.addClass(m).each(v.intro), y.removeClass(m), void(g || n.redraw.up());
                var E = window.scrollX,
                    b = window.scrollY;
                l.focus(), window.scrollTo(E, b), y.length && i.outro ? (y.each(v.outro), o(y).add("opacity " + i.outro + "ms " + a, {
                    fallback: c
                }).start({
                    opacity: 0
                }).then(function() {
                    return w(i, y, p)
                })) : w(i, y, p)
            }
        }

        function w(t, e, r) {
            if (e.removeClass(m).css({
                    opacity: "",
                    transition: "",
                    transform: "",
                    width: "",
                    height: ""
                }), r.addClass(m).each(v.intro), n.redraw.up(), !t.intro) return o(r).set({
                opacity: 1
            });
            o(r).set({
                opacity: 0
            }).redraw().add("opacity " + t.intro + "ms " + t.easing, {
                fallback: c
            }).start({
                opacity: 1
            })
        }
        return a.ready = a.design = a.preview = y, a.redraw = function() {
            g = !0, y(), g = !1
        }, a.destroy = function() {
            (e = s.find(p)).length && (e.each(b), E())
        }, a
    })
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".blog-post-link",
                "originalId": "60e46db2de143a7a6b500287|2d2c8b89-084e-fe95-3892-439f4cf5649c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".blog-post-link",
                "originalId": "60e46db2de143a7a6b500287|2d2c8b89-084e-fe95-3892-439f4cf5649c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1627736387345
        },
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".blog-post-link",
                "originalId": "60e46db2de143a7a6b500287|2d2c8b89-084e-fe95-3892-439f4cf5649c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".blog-post-link",
                "originalId": "60e46db2de143a7a6b500287|2d2c8b89-084e-fe95-3892-439f4cf5649c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1627736387346
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".header-notification-close",
                "originalId": "60e47013de143adcdb500c77|3793d60e-2cbe-6c5f-cabe-a266f3b67c28",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".header-notification-close",
                "originalId": "60e47013de143adcdb500c77|3793d60e-2cbe-6c5f-cabe-a266f3b67c28",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1647895273649
        },
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-6"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".range-slider-item",
                "originalId": "623ef9046c2cfb03027a8b38|2e6a0b89-47c4-52e3-6cf5-271b99600e66",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".range-slider-item",
                "originalId": "623ef9046c2cfb03027a8b38|2e6a0b89-47c4-52e3-6cf5-271b99600e66",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1649706105245
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-8"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".range-slider-item",
                "originalId": "623ef9046c2cfb03027a8b38|2e6a0b89-47c4-52e3-6cf5-271b99600e66",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".range-slider-item",
                "originalId": "623ef9046c2cfb03027a8b38|2e6a0b89-47c4-52e3-6cf5-271b99600e66",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1649706122432
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "60e47603c9af72eb95656146",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "60e47603c9af72eb95656146",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-6-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1652011177541
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".integration-row-item-link",
                "originalId": "623ee8c52485619f8e967f2f|45e96eb5-0cfc-7649-44d7-997756b4eb97",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".integration-row-item-link",
                "originalId": "623ee8c52485619f8e967f2f|45e96eb5-0cfc-7649-44d7-997756b4eb97",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652111149178
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".integration-row-item-link",
                "originalId": "623ee8c52485619f8e967f2f|45e96eb5-0cfc-7649-44d7-997756b4eb97",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".integration-row-item-link",
                "originalId": "623ee8c52485619f8e967f2f|45e96eb5-0cfc-7649-44d7-997756b4eb97",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652111149179
        },
        "e-12": {
            "id": "e-12",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-13"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".resources-item-link",
                "originalId": "60e46e84de143ae25550041f|6bbcb76e-c7f8-14c0-cc8d-1cfdee05c90d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".resources-item-link",
                "originalId": "60e46e84de143ae25550041f|6bbcb76e-c7f8-14c0-cc8d-1cfdee05c90d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652612525777
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-12"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".resources-item-link",
                "originalId": "60e46e84de143ae25550041f|6bbcb76e-c7f8-14c0-cc8d-1cfdee05c90d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".resources-item-link",
                "originalId": "60e46e84de143ae25550041f|6bbcb76e-c7f8-14c0-cc8d-1cfdee05c90d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1652612525778
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-15"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".customer-story-item",
                "originalId": "623e3065aa9fa1bf257f0996|d1f66e0c-e8fd-8ee9-a352-c91fb3055005",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".customer-story-item",
                "originalId": "623e3065aa9fa1bf257f0996|d1f66e0c-e8fd-8ee9-a352-c91fb3055005",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653142640466
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".customer-story-item",
                "originalId": "623e3065aa9fa1bf257f0996|d1f66e0c-e8fd-8ee9-a352-c91fb3055005",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".customer-story-item",
                "originalId": "623e3065aa9fa1bf257f0996|d1f66e0c-e8fd-8ee9-a352-c91fb3055005",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653142640466
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-17"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".blog-featured-content",
                "originalId": "60e47506f6f7364094e6f993|d356886d-a289-b570-3675-4e78a3ab6cda",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".blog-featured-content",
                "originalId": "60e47506f6f7364094e6f993|d356886d-a289-b570-3675-4e78a3ab6cda",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654778791530
        },
        "e-18": {
            "id": "e-18",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-19"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".blog-featured-content",
                "originalId": "60e47506f6f7364094e6f993|8212266b-616b-3e61-3662-07bfb29974f0",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".blog-featured-content",
                "originalId": "60e47506f6f7364094e6f993|8212266b-616b-3e61-3662-07bfb29974f0",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654780863148
        },
        "e-20": {
            "id": "e-20",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-21"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".blog-post",
                "originalId": "60e47506f6f7364094e6f993|f2e996b0-82bb-eaec-d89f-8dfe377221ad",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".blog-post",
                "originalId": "60e47506f6f7364094e6f993|f2e996b0-82bb-eaec-d89f-8dfe377221ad",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654787722078
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".blog-post",
                "originalId": "60e47506f6f7364094e6f993|f2e996b0-82bb-eaec-d89f-8dfe377221ad",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".blog-post",
                "originalId": "60e47506f6f7364094e6f993|f2e996b0-82bb-eaec-d89f-8dfe377221ad",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654787722079
        },
        "e-22": {
            "id": "e-22",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-23"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".help-center-item-link",
                "originalId": "62596b19b8f7d1cfba41c9f9|68a01bf4-4c5c-53d2-323c-b8ce6769069b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".help-center-item-link",
                "originalId": "62596b19b8f7d1cfba41c9f9|68a01bf4-4c5c-53d2-323c-b8ce6769069b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1655387244922
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".help-center-item-link",
                "originalId": "62596b19b8f7d1cfba41c9f9|68a01bf4-4c5c-53d2-323c-b8ce6769069b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".help-center-item-link",
                "originalId": "62596b19b8f7d1cfba41c9f9|68a01bf4-4c5c-53d2-323c-b8ce6769069b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1655387244923
        },
        "e-24": {
            "id": "e-24",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-25"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".banner-close",
                "originalId": "e3620b3e-062d-dbaa-1f5d-552401763b86",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".banner-close",
                "originalId": "e3620b3e-062d-dbaa-1f5d-552401763b86",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1660134429895
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Blog Post Link Hover On",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-post-link-hover",
                            "selectorGuids": ["989a83b6-8b7b-1296-88a0-3630402a7ae1"]
                        },
                        "xValue": 7,
                        "yValue": 7,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1627736392294
        },
        "a-2": {
            "id": "a-2",
            "title": "Blog Post Link Hover Off",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-post-link-hover",
                            "selectorGuids": ["989a83b6-8b7b-1296-88a0-3630402a7ae1"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1627736476374
        },
        "a-3": {
            "id": "a-3",
            "title": "Close Header Notification",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".header-notification",
                            "selectorGuids": ["704fb847-de17-198d-62b8-6d909cbc7dd4"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1647895290343
        },
        "a-5": {
            "id": "a-5",
            "title": "Range Slider Hide Old Track",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".range-slider-track.active",
                            "selectorGuids": ["b83a4148-a281-5c4c-d328-388e1ad71b6c", "656687da-16bb-a168-a608-8d9585babb87"]
                        },
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-5-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".range-slider-circle",
                            "selectorGuids": ["6a0d8dd7-483c-3762-1084-94eaad741ddb"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1649604173019
        },
        "a-4": {
            "id": "a-4",
            "title": "Range Slider Move Active Track",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".range-slider-track.active",
                            "selectorGuids": ["b83a4148-a281-5c4c-d328-388e1ad71b6c", "656687da-16bb-a168-a608-8d9585babb87"]
                        },
                        "widthValue": 9999,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".range-slider-circle",
                            "selectorGuids": ["6a0d8dd7-483c-3762-1084-94eaad741ddb"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1649603439194
        },
        "a-6": {
            "id": "a-6",
            "title": "New Scroll Animation",
            "continuousParameterGroups": [{
                "id": "a-6-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-6-n",
                        "actionTypeId": "PLUGIN_LOTTIE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "60e47603c9af72eb95656146|b556fa3a-f213-f18c-82a0-dfe9de8b7a0f"
                            },
                            "value": 0.1
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-6-n-2",
                        "actionTypeId": "PLUGIN_LOTTIE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "60e47603c9af72eb95656146|b556fa3a-f213-f18c-82a0-dfe9de8b7a0f"
                            },
                            "value": 88
                        }
                    }]
                }]
            }],
            "createdOn": 1652011233770
        },
        "a-7": {
            "id": "a-7",
            "title": "Story Hover On",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".customer-story-item-content",
                            "selectorGuids": ["a36841d1-cea6-6f35-d854-b835053c1093"]
                        },
                        "yValue": 80,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".customer-story-item-text",
                            "selectorGuids": ["1d14bfe2-1742-83f8-975e-e5b7de733051"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".customer-story-item-content",
                            "selectorGuids": ["a36841d1-cea6-6f35-d854-b835053c1093"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".customer-story-item-text",
                            "selectorGuids": ["1d14bfe2-1742-83f8-975e-e5b7de733051"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1653142652365
        },
        "a-8": {
            "id": "a-8",
            "title": "Story Hover Off",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".customer-story-item-content",
                            "selectorGuids": ["a36841d1-cea6-6f35-d854-b835053c1093"]
                        },
                        "yValue": 80,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".customer-story-item-text",
                            "selectorGuids": ["1d14bfe2-1742-83f8-975e-e5b7de733051"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1653142746934
        },
        "a-9": {
            "id": "a-9",
            "title": "Featured Blog Hide All",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".blog-featured-image-container",
                            "selectorGuids": ["ff7421b9-3498-7fd5-03d2-5938af0241a5"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".blog-featured-content-divider",
                            "selectorGuids": ["68be4bba-ce9f-4457-a1fa-bbd962bd3a2a"]
                        },
                        "globalSwatchId": "",
                        "rValue": 231,
                        "bValue": 231,
                        "gValue": 231,
                        "aValue": 1
                    }
                }, {
                    "id": "a-9-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".blog-featured-content",
                            "selectorGuids": ["3cd07e61-f1fa-3cd7-87d8-cd4bbd936b06"]
                        },
                        "value": 0.5,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".blog-featured-image-container",
                            "selectorGuids": ["ff7421b9-3498-7fd5-03d2-5938af0241a5"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1654778797749
        },
        "a-10": {
            "id": "a-10",
            "title": "Featured Blog Show Current",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 10,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".blog-featured-image-container",
                            "selectorGuids": ["ff7421b9-3498-7fd5-03d2-5938af0241a5"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "60e47506f6f7364094e6f993|8212266b-616b-3e61-3662-07bfb29974f0"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".blog-featured-image-container",
                            "selectorGuids": ["ff7421b9-3498-7fd5-03d2-5938af0241a5"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-featured-content-divider",
                            "selectorGuids": ["68be4bba-ce9f-4457-a1fa-bbd962bd3a2a"]
                        },
                        "globalSwatchId": "10ea9bf5",
                        "rValue": 18,
                        "bValue": 18,
                        "gValue": 18,
                        "aValue": 1
                    }
                }, {
                    "id": "a-10-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": "block",
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".blog-featured-image-container",
                            "selectorGuids": ["ff7421b9-3498-7fd5-03d2-5938af0241a5"]
                        }
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1654780874948
        },
        "a-11": {
            "id": "a-11",
            "title": "Blog Post Hover On",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-post-image",
                            "selectorGuids": ["1cc99f1e-8d70-9d5e-4650-23b344d63545"]
                        },
                        "xValue": 1.05,
                        "yValue": 1.05,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-post-image",
                            "selectorGuids": ["1cc99f1e-8d70-9d5e-4650-23b344d63545"]
                        },
                        "value": 0.9,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1654787731080
        },
        "a-12": {
            "id": "a-12",
            "title": "Blog Post Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-post-image",
                            "selectorGuids": ["1cc99f1e-8d70-9d5e-4650-23b344d63545"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-post-image",
                            "selectorGuids": ["1cc99f1e-8d70-9d5e-4650-23b344d63545"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1654787763853
        },
        "a-13": {
            "id": "a-13",
            "title": "Close Banner",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".banner",
                            "selectorGuids": ["ad7b2f99-275d-fc78-8c78-4d698448e642"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1660134437545
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});