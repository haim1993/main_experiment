!function (t) {
    function e(r) {
        if (n[r])return n[r].exports;
        var i = n[r] = {exports: {}, id: r, loaded: !1};
        return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function (t, e, n) {
    n(1), t.exports = n(297)
}, function (t, e, n) {
    (function (t) {
        "use strict";
        function e(t, e, n) {
            t[e] || Object[r](t, e, {writable: !0, configurable: !0, value: n})
        }

        if (n(2), n(293), n(294), t._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");
        t._babelPolyfill = !0;
        var r = "defineProperty";
        e(String.prototype, "padLeft", "".padStart), e(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (t) {
            [][t] && e(Array, t, Function.call.bind([][t]))
        })
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    n(3), n(52), n(53), n(54), n(55), n(57), n(60), n(61), n(62), n(63), n(64), n(65), n(66), n(67), n(68), n(70), n(72), n(74), n(76), n(79), n(80), n(81), n(85), n(87), n(89), n(92), n(93), n(94), n(95), n(97), n(98), n(99), n(100), n(101), n(102), n(103), n(105), n(106), n(107), n(109), n(110), n(111), n(113), n(114), n(115), n(116), n(117), n(118), n(119), n(120), n(121), n(122), n(123), n(124), n(125), n(126), n(131), n(132), n(136), n(137), n(138), n(139), n(141), n(142), n(143), n(144), n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), n(153), n(154), n(155), n(156), n(157), n(159), n(160), n(166), n(167), n(169), n(170), n(171), n(175), n(176), n(177), n(178), n(179), n(181), n(182), n(183), n(184), n(187), n(189), n(190), n(191), n(193), n(195),n(197),n(198),n(199),n(201),n(202),n(203),n(204),n(211),n(214),n(215),n(217),n(218),n(221),n(222),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(244),n(245),n(246),n(247),n(248),n(249),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(260),n(261),n(263),n(264),n(265),n(266),n(269),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(291),n(292),t.exports = n(9)
}, function (t, e, n) {
    "use strict";
    var r = n(4), i = n(5), o = n(6), a = n(8), s = n(18), l = n(22).KEY, c = n(7), u = n(23), h = n(24), f = n(19), d = n(25), p = n(26), m = n(27), v = n(29), g = n(42), y = n(45), x = n(12), _ = n(32), b = n(16), w = n(17), M = n(46), S = n(49), E = n(51), T = n(11), A = n(30), L = E.f, C = T.f, P = S.f, R = r.Symbol, I = r.JSON, F = I && I.stringify, O = "prototype", B = d("_hidden"), U = d("toPrimitive"), D = {}.propertyIsEnumerable, N = u("symbol-registry"), z = u("symbols"), G = u("op-symbols"), V = Object[O], k = "function" == typeof R, j = r.QObject, H = !j || !j[O] || !j[O].findChild, W = o && c(function () {
        return 7 != M(C({}, "a", {
              get: function () {
                  return C(this, "a", {value: 7}).a
              }
          })).a
    }) ? function (t, e, n) {
          var r = L(V, e);
          r && delete V[e], C(t, e, n), r && t !== V && C(V, e, r)
      } : C, X = function (t) {
        var e = z[t] = M(R[O]);
        return e._k = t, e
    }, q = k && "symbol" == typeof R.iterator ? function (t) {
          return "symbol" == typeof t
      } : function (t) {
          return t instanceof R
      }, Y = function (t, e, n) {
        return t === V && Y(G, e, n), x(t), e = b(e, !0), x(n), i(z, e) ? (n.enumerable ? (i(t, B) && t[B][e] && (t[B][e] = !1), n = M(n, {enumerable: w(0, !1)})) : (i(t, B) || C(t, B, w(1, {})), t[B][e] = !0), W(t, e, n)) : C(t, e, n)
    }, Z = function (t, e) {
        x(t);
        for (var n, r = g(e = _(e)), i = 0, o = r.length; o > i;)Y(t, n = r[i++], e[n]);
        return t
    }, K = function (t, e) {
        return void 0 === e ? M(t) : Z(M(t), e)
    }, Q = function (t) {
        var e = D.call(this, t = b(t, !0));
        return !(this === V && i(z, t) && !i(G, t)) && (!(e || !i(this, t) || !i(z, t) || i(this, B) && this[B][t]) || e)
    }, J = function (t, e) {
        if (t = _(t), e = b(e, !0), t !== V || !i(z, e) || i(G, e)) {
            var n = L(t, e);
            return !n || !i(z, e) || i(t, B) && t[B][e] || (n.enumerable = !0), n
        }
    }, $ = function (t) {
        for (var e, n = P(_(t)), r = [], o = 0; n.length > o;)i(z, e = n[o++]) || e == B || e == l || r.push(e);
        return r
    }, tt = function (t) {
        for (var e, n = t === V, r = P(n ? G : _(t)), o = [], a = 0; r.length > a;)!i(z, e = r[a++]) || n && !i(V, e) || o.push(z[e]);
        return o
    };
    k || (R = function () {
        if (this instanceof R)throw TypeError("Symbol is not a constructor!");
        var t = f(arguments.length > 0 ? arguments[0] : void 0), e = function (n) {
            this === V && e.call(G, n), i(this, B) && i(this[B], t) && (this[B][t] = !1), W(this, t, w(1, n))
        };
        return o && H && W(V, t, {configurable: !0, set: e}), X(t)
    }, s(R[O], "toString", function () {
        return this._k
    }), E.f = J, T.f = Y, n(50).f = S.f = $, n(44).f = Q, n(43).f = tt, o && !n(28) && s(V, "propertyIsEnumerable", Q, !0), p.f = function (t) {
        return X(d(t))
    }), a(a.G + a.W + a.F * !k, {Symbol: R});
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;)d(et[nt++]);
    for (var et = A(d.store), nt = 0; et.length > nt;)m(et[nt++]);
    a(a.S + a.F * !k, "Symbol", {
        for: function (t) {
            return i(N, t += "") ? N[t] : N[t] = R(t)
        }, keyFor: function (t) {
            if (q(t))return v(N, t);
            throw TypeError(t + " is not a symbol!")
        }, useSetter: function () {
            H = !0
        }, useSimple: function () {
            H = !1
        }
    }), a(a.S + a.F * !k, "Object", {
        create: K,
        defineProperty: Y,
        defineProperties: Z,
        getOwnPropertyDescriptor: J,
        getOwnPropertyNames: $,
        getOwnPropertySymbols: tt
    }), I && a(a.S + a.F * (!k || c(function () {
          var t = R();
          return "[null]" != F([t]) || "{}" != F({a: t}) || "{}" != F(Object(t))
      })), "JSON", {
        stringify: function (t) {
            if (void 0 !== t && !q(t)) {
                for (var e, n, r = [t], i = 1; arguments.length > i;)r.push(arguments[i++]);
                return e = r[1], "function" == typeof e && (n = e), !n && y(e) || (e = function (t, e) {
                    if (n && (e = n.call(this, t, e)), !q(e))return e
                }), r[1] = e, F.apply(I, r)
            }
        }
    }), R[O][U] || n(10)(R[O], U, R[O].valueOf), h(R, "Symbol"), h(Math, "Math", !0), h(r.JSON, "JSON", !0)
}, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return n.call(t, e)
    }
}, function (t, e, n) {
    t.exports = !n(7)(function () {
        return 7 != Object.defineProperty({}, "a", {
              get: function () {
                  return 7
              }
          }).a
    })
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, e, n) {
    var r = n(4), i = n(9), o = n(10), a = n(18), s = n(20), l = "prototype", c = function (t, e, n) {
        var u, h, f, d, p = t & c.F, m = t & c.G, v = t & c.S, g = t & c.P, y = t & c.B, x = m ? r : v ? r[e] || (r[e] = {}) : (r[e] || {})[l], _ = m ? i : i[e] || (i[e] = {}), b = _[l] || (_[l] = {});
        m && (n = e);
        for (u in n)h = !p && x && void 0 !== x[u], f = (h ? x : n)[u], d = y && h ? s(f, r) : g && "function" == typeof f ? s(Function.call, f) : f, x && a(x, u, f, t & c.U), _[u] != f && o(_, u, d), g && b[u] != f && (b[u] = f)
    };
    r.core = i, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
}, function (t, e) {
    var n = t.exports = {version: "2.4.0"};
    "number" == typeof __e && (__e = n)
}, function (t, e, n) {
    var r = n(11), i = n(17);
    t.exports = n(6) ? function (t, e, n) {
          return r.f(t, e, i(1, n))
      } : function (t, e, n) {
          return t[e] = n, t
      }
}, function (t, e, n) {
    var r = n(12), i = n(14), o = n(16), a = Object.defineProperty;
    e.f = n(6) ? Object.defineProperty : function (t, e, n) {
          if (r(t), e = o(e, !0), r(n), i)try {
              return a(t, e, n)
          } catch (t) {
          }
          if ("get" in n || "set" in n)throw TypeError("Accessors not supported!");
          return "value" in n && (t[e] = n.value), t
      }
}, function (t, e, n) {
    var r = n(13);
    t.exports = function (t) {
        if (!r(t))throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, e) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, e, n) {
    t.exports = !n(6) && !n(7)(function () {
          return 7 != Object.defineProperty(n(15)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
      })
}, function (t, e, n) {
    var r = n(13), i = n(4).document, o = r(i) && r(i.createElement);
    t.exports = function (t) {
        return o ? i.createElement(t) : {}
    }
}, function (t, e, n) {
    var r = n(13);
    t.exports = function (t, e) {
        if (!r(t))return t;
        var n, i;
        if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t)))return i;
        if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t)))return i;
        if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t)))return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
}, function (t, e, n) {
    var r = n(4), i = n(10), o = n(5), a = n(19)("src"), s = "toString", l = Function[s], c = ("" + l).split(s);
    n(9).inspectSource = function (t) {
        return l.call(t)
    }, (t.exports = function (t, e, n, s) {
        var l = "function" == typeof n;
        l && (o(n, "name") || i(n, "name", e)), t[e] !== n && (l && (o(n, a) || i(n, a, t[e] ? "" + t[e] : c.join(String(e)))), t === r ? t[e] = n : s ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)))
    })(Function.prototype, s, function () {
        return "function" == typeof this && this[a] || l.call(this)
    })
}, function (t, e) {
    var n = 0, r = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}, function (t, e, n) {
    var r = n(21);
    t.exports = function (t, e, n) {
        if (r(t), void 0 === e)return t;
        switch (n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function (n, r, i) {
                    return t.call(e, n, r, i)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t)throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, e, n) {
    var r = n(19)("meta"), i = n(13), o = n(5), a = n(11).f, s = 0, l = Object.isExtensible || function () {
          return !0
      }, c = !n(7)(function () {
        return l(Object.preventExtensions({}))
    }), u = function (t) {
        a(t, r, {value: {i: "O" + ++s, w: {}}})
    }, h = function (t, e) {
        if (!i(t))return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
        if (!o(t, r)) {
            if (!l(t))return "F";
            if (!e)return "E";
            u(t)
        }
        return t[r].i
    }, f = function (t, e) {
        if (!o(t, r)) {
            if (!l(t))return !0;
            if (!e)return !1;
            u(t)
        }
        return t[r].w
    }, d = function (t) {
        return c && p.NEED && l(t) && !o(t, r) && u(t), t
    }, p = t.exports = {KEY: r, NEED: !1, fastKey: h, getWeak: f, onFreeze: d}
}, function (t, e, n) {
    var r = n(4), i = "__core-js_shared__", o = r[i] || (r[i] = {});
    t.exports = function (t) {
        return o[t] || (o[t] = {})
    }
}, function (t, e, n) {
    var r = n(11).f, i = n(5), o = n(25)("toStringTag");
    t.exports = function (t, e, n) {
        t && !i(t = n ? t : t.prototype, o) && r(t, o, {configurable: !0, value: e})
    }
}, function (t, e, n) {
    var r = n(23)("wks"), i = n(19), o = n(4).Symbol, a = "function" == typeof o, s = t.exports = function (t) {
        return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t))
    };
    s.store = r
}, function (t, e, n) {
    e.f = n(25)
}, function (t, e, n) {
    var r = n(4), i = n(9), o = n(28), a = n(26), s = n(11).f;
    t.exports = function (t) {
        var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || s(e, t, {value: a.f(t)})
    }
}, function (t, e) {
    t.exports = !1
}, function (t, e, n) {
    var r = n(30), i = n(32);
    t.exports = function (t, e) {
        for (var n, o = i(t), a = r(o), s = a.length, l = 0; s > l;)if (o[n = a[l++]] === e)return n
    }
}, function (t, e, n) {
    var r = n(31), i = n(41);
    t.exports = Object.keys || function (t) {
          return r(t, i)
      }
}, function (t, e, n) {
    var r = n(5), i = n(32), o = n(36)(!1), a = n(40)("IE_PROTO");
    t.exports = function (t, e) {
        var n, s = i(t), l = 0, c = [];
        for (n in s)n != a && r(s, n) && c.push(n);
        for (; e.length > l;)r(s, n = e[l++]) && (~o(c, n) || c.push(n));
        return c
    }
}, function (t, e, n) {
    var r = n(33), i = n(35);
    t.exports = function (t) {
        return r(i(t))
    }
}, function (t, e, n) {
    var r = n(34);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
          return "String" == r(t) ? t.split("") : Object(t)
      }
}, function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
        return n.call(t).slice(8, -1)
    }
}, function (t, e) {
    t.exports = function (t) {
        if (void 0 == t)throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, e, n) {
    var r = n(32), i = n(37), o = n(39);
    t.exports = function (t) {
        return function (e, n, a) {
            var s, l = r(e), c = i(l.length), u = o(a, c);
            if (t && n != n) {
                for (; c > u;)if (s = l[u++], s != s)return !0
            } else for (; c > u; u++)if ((t || u in l) && l[u] === n)return t || u || 0;
            return !t && -1
        }
    }
}, function (t, e, n) {
    var r = n(38), i = Math.min;
    t.exports = function (t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
    }
}, function (t, e) {
    var n = Math.ceil, r = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function (t, e, n) {
    var r = n(38), i = Math.max, o = Math.min;
    t.exports = function (t, e) {
        return t = r(t), t < 0 ? i(t + e, 0) : o(t, e)
    }
}, function (t, e, n) {
    var r = n(23)("keys"), i = n(19);
    t.exports = function (t) {
        return r[t] || (r[t] = i(t))
    }
}, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, e, n) {
    var r = n(30), i = n(43), o = n(44);
    t.exports = function (t) {
        var e = r(t), n = i.f;
        if (n)for (var a, s = n(t), l = o.f, c = 0; s.length > c;)l.call(t, a = s[c++]) && e.push(a);
        return e
    }
}, function (t, e) {
    e.f = Object.getOwnPropertySymbols
}, function (t, e) {
    e.f = {}.propertyIsEnumerable
}, function (t, e, n) {
    var r = n(34);
    t.exports = Array.isArray || function (t) {
          return "Array" == r(t)
      }
}, function (t, e, n) {
    var r = n(12), i = n(47), o = n(41), a = n(40)("IE_PROTO"), s = function () {
    }, l = "prototype", c = function () {
        var t, e = n(15)("iframe"), r = o.length, i = "<", a = ">";
        for (e.style.display = "none", n(48).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(i + "script" + a + "document.F=Object" + i + "/script" + a), t.close(), c = t.F; r--;)delete c[l][o[r]];
        return c()
    };
    t.exports = Object.create || function (t, e) {
          var n;
          return null !== t ? (s[l] = r(t), n = new s, s[l] = null, n[a] = t) : n = c(), void 0 === e ? n : i(n, e)
      }
}, function (t, e, n) {
    var r = n(11), i = n(12), o = n(30);
    t.exports = n(6) ? Object.defineProperties : function (t, e) {
          i(t);
          for (var n, a = o(e), s = a.length, l = 0; s > l;)r.f(t, n = a[l++], e[n]);
          return t
      }
}, function (t, e, n) {
    t.exports = n(4).document && document.documentElement
}, function (t, e, n) {
    var r = n(32), i = n(50).f, o = {}.toString, a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function (t) {
        try {
            return i(t)
        } catch (t) {
            return a.slice()
        }
    };
    t.exports.f = function (t) {
        return a && "[object Window]" == o.call(t) ? s(t) : i(r(t))
    }
}, function (t, e, n) {
    var r = n(31), i = n(41).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
          return r(t, i)
      }
}, function (t, e, n) {
    var r = n(44), i = n(17), o = n(32), a = n(16), s = n(5), l = n(14), c = Object.getOwnPropertyDescriptor;
    e.f = n(6) ? c : function (t, e) {
          if (t = o(t), e = a(e, !0), l)try {
              return c(t, e)
          } catch (t) {
          }
          if (s(t, e))return i(!r.f.call(t, e), t[e])
      }
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Object", {create: n(46)})
}, function (t, e, n) {
    var r = n(8);
    r(r.S + r.F * !n(6), "Object", {defineProperty: n(11).f})
}, function (t, e, n) {
    var r = n(8);
    r(r.S + r.F * !n(6), "Object", {defineProperties: n(47)})
}, function (t, e, n) {
    var r = n(32), i = n(51).f;
    n(56)("getOwnPropertyDescriptor", function () {
        return function (t, e) {
            return i(r(t), e)
        }
    })
}, function (t, e, n) {
    var r = n(8), i = n(9), o = n(7);
    t.exports = function (t, e) {
        var n = (i.Object || {})[t] || Object[t], a = {};
        a[t] = e(n), r(r.S + r.F * o(function () {
              n(1)
          }), "Object", a)
    }
}, function (t, e, n) {
    var r = n(58), i = n(59);
    n(56)("getPrototypeOf", function () {
        return function (t) {
            return i(r(t))
        }
    })
}, function (t, e, n) {
    var r = n(35);
    t.exports = function (t) {
        return Object(r(t))
    }
}, function (t, e, n) {
    var r = n(5), i = n(58), o = n(40)("IE_PROTO"), a = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
          return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
      }
}, function (t, e, n) {
    var r = n(58), i = n(30);
    n(56)("keys", function () {
        return function (t) {
            return i(r(t))
        }
    })
}, function (t, e, n) {
    n(56)("getOwnPropertyNames", function () {
        return n(49).f
    })
}, function (t, e, n) {
    var r = n(13), i = n(22).onFreeze;
    n(56)("freeze", function (t) {
        return function (e) {
            return t && r(e) ? t(i(e)) : e
        }
    })
}, function (t, e, n) {
    var r = n(13), i = n(22).onFreeze;
    n(56)("seal", function (t) {
        return function (e) {
            return t && r(e) ? t(i(e)) : e
        }
    })
}, function (t, e, n) {
    var r = n(13), i = n(22).onFreeze;
    n(56)("preventExtensions", function (t) {
        return function (e) {
            return t && r(e) ? t(i(e)) : e
        }
    })
}, function (t, e, n) {
    var r = n(13);
    n(56)("isFrozen", function (t) {
        return function (e) {
            return !r(e) || !!t && t(e)
        }
    })
}, function (t, e, n) {
    var r = n(13);
    n(56)("isSealed", function (t) {
        return function (e) {
            return !r(e) || !!t && t(e)
        }
    })
}, function (t, e, n) {
    var r = n(13);
    n(56)("isExtensible", function (t) {
        return function (e) {
            return !!r(e) && (!t || t(e))
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.S + r.F, "Object", {assign: n(69)})
}, function (t, e, n) {
    "use strict";
    var r = n(30), i = n(43), o = n(44), a = n(58), s = n(33), l = Object.assign;
    t.exports = !l || n(7)(function () {
        var t = {}, e = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
        return t[n] = 7, r.split("").forEach(function (t) {
            e[t] = t
        }), 7 != l({}, t)[n] || Object.keys(l({}, e)).join("") != r
    }) ? function (t, e) {
          for (var n = a(t), l = arguments.length, c = 1, u = i.f, h = o.f; l > c;)for (var f, d = s(arguments[c++]), p = u ? r(d).concat(u(d)) : r(d), m = p.length, v = 0; m > v;)h.call(d, f = p[v++]) && (n[f] = d[f]);
          return n
      } : l
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Object", {is: n(71)})
}, function (t, e) {
    t.exports = Object.is || function (t, e) {
          return t === e ? 0 !== t || 1 / t === 1 / e : t != t && e != e
      }
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Object", {setPrototypeOf: n(73).set})
}, function (t, e, n) {
    var r = n(13), i = n(12), o = function (t, e) {
        if (i(t), !r(e) && null !== e)throw TypeError(e + ": can't set as prototype!")
    };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, r) {
              try {
                  r = n(20)(Function.call, n(51).f(Object.prototype, "__proto__").set, 2), r(t, []), e = !(t instanceof Array)
              } catch (t) {
                  e = !0
              }
              return function (t, n) {
                  return o(t, n), e ? t.__proto__ = n : r(t, n), t
              }
          }({}, !1) : void 0), check: o
    }
}, function (t, e, n) {
    "use strict";
    var r = n(75), i = {};
    i[n(25)("toStringTag")] = "z", i + "" != "[object z]" && n(18)(Object.prototype, "toString", function () {
        return "[object " + r(this) + "]"
    }, !0)
}, function (t, e, n) {
    var r = n(34), i = n(25)("toStringTag"), o = "Arguments" == r(function () {
          return arguments
      }()), a = function (t, e) {
        try {
            return t[e]
        } catch (t) {
        }
    };
    t.exports = function (t) {
        var e, n, s;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = a(e = Object(t), i)) ? n : o ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments" : s
    }
}, function (t, e, n) {
    var r = n(8);
    r(r.P, "Function", {bind: n(77)})
}, function (t, e, n) {
    "use strict";
    var r = n(21), i = n(13), o = n(78), a = [].slice, s = {}, l = function (t, e, n) {
        if (!(e in s)) {
            for (var r = [], i = 0; i < e; i++)r[i] = "a[" + i + "]";
            s[e] = Function("F,a", "return new F(" + r.join(",") + ")")
        }
        return s[e](t, n)
    };
    t.exports = Function.bind || function (t) {
          var e = r(this), n = a.call(arguments, 1), s = function () {
              var r = n.concat(a.call(arguments));
              return this instanceof s ? l(e, r.length, r) : o(e, r, t)
          };
          return i(e.prototype) && (s.prototype = e.prototype), s
      }
}, function (t, e) {
    t.exports = function (t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
            case 0:
                return r ? t() : t.call(n);
            case 1:
                return r ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function (t, e, n) {
    var r = n(11).f, i = n(17), o = n(5), a = Function.prototype, s = /^\s*function ([^ (]*)/, l = "name", c = Object.isExtensible || function () {
          return !0
      };
    l in a || n(6) && r(a, l, {
        configurable: !0, get: function () {
            try {
                var t = this, e = ("" + t).match(s)[1];
                return o(t, l) || !c(t) || r(t, l, i(5, e)), e
            } catch (t) {
                return ""
            }
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(13), i = n(59), o = n(25)("hasInstance"), a = Function.prototype;
    o in a || n(11).f(a, o, {
        value: function (t) {
            if ("function" != typeof this || !r(t))return !1;
            if (!r(this.prototype))return t instanceof this;
            for (; t = i(t);)if (this.prototype === t)return !0;
            return !1
        }
    })
}, function (t, e, n) {
    var r = n(8), i = n(82);
    r(r.G + r.F * (parseInt != i), {parseInt: i})
}, function (t, e, n) {
    var r = n(4).parseInt, i = n(83).trim, o = n(84), a = /^[\-+]?0[xX]/;
    t.exports = 8 !== r(o + "08") || 22 !== r(o + "0x16") ? function (t, e) {
          var n = i(String(t), 3);
          return r(n, e >>> 0 || (a.test(n) ? 16 : 10))
      } : r
}, function (t, e, n) {
    var r = n(8), i = n(35), o = n(7), a = n(84), s = "[" + a + "]", l = "​", c = RegExp("^" + s + s + "*"), u = RegExp(s + s + "*$"), h = function (t, e, n) {
        var i = {}, s = o(function () {
            return !!a[t]() || l[t]() != l
        }), c = i[t] = s ? e(f) : a[t];
        n && (i[n] = c), r(r.P + r.F * s, "String", i)
    }, f = h.trim = function (t, e) {
        return t = String(i(t)), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(u, "")), t
    };
    t.exports = h
}, function (t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function (t, e, n) {
    var r = n(8), i = n(86);
    r(r.G + r.F * (parseFloat != i), {parseFloat: i})
}, function (t, e, n) {
    var r = n(4).parseFloat, i = n(83).trim;
    t.exports = 1 / r(n(84) + "-0") !== -(1 / 0) ? function (t) {
          var e = i(String(t), 3), n = r(e);
          return 0 === n && "-" == e.charAt(0) ? -0 : n
      } : r
}, function (t, e, n) {
    "use strict";
    var r = n(4), i = n(5), o = n(34), a = n(88), s = n(16), l = n(7), c = n(50).f, u = n(51).f, h = n(11).f, f = n(83).trim, d = "Number", p = r[d], m = p, v = p.prototype, g = o(n(46)(v)) == d, y = "trim" in String.prototype, x = function (t) {
        var e = s(t, !1);
        if ("string" == typeof e && e.length > 2) {
            e = y ? e.trim() : f(e, 3);
            var n, r, i, o = e.charCodeAt(0);
            if (43 === o || 45 === o) {
                if (n = e.charCodeAt(2), 88 === n || 120 === n)return NaN
            } else if (48 === o) {
                switch (e.charCodeAt(1)) {
                    case 66:
                    case 98:
                        r = 2, i = 49;
                        break;
                    case 79:
                    case 111:
                        r = 8, i = 55;
                        break;
                    default:
                        return +e
                }
                for (var a, l = e.slice(2), c = 0, u = l.length; c < u; c++)if (a = l.charCodeAt(c), a < 48 || a > i)return NaN;
                return parseInt(l, r)
            }
        }
        return +e
    };
    if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
        p = function (t) {
            var e = arguments.length < 1 ? 0 : t, n = this;
            return n instanceof p && (g ? l(function () {
                  v.valueOf.call(n)
              }) : o(n) != d) ? a(new m(x(e)), n, p) : x(e)
        };
        for (var _, b = n(6) ? c(m) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), w = 0; b.length > w; w++)i(m, _ = b[w]) && !i(p, _) && h(p, _, u(m, _));
        p.prototype = v, v.constructor = p, n(18)(r, d, p)
    }
}, function (t, e, n) {
    var r = n(13), i = n(73).set;
    t.exports = function (t, e, n) {
        var o, a = e.constructor;
        return a !== n && "function" == typeof a && (o = a.prototype) !== n.prototype && r(o) && i && i(t, o), t
    }
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(38), o = n(90), a = n(91), s = 1..toFixed, l = Math.floor, c = [0, 0, 0, 0, 0, 0], u = "Number.toFixed: incorrect invocation!", h = "0", f = function (t, e) {
        for (var n = -1, r = e; ++n < 6;)r += t * c[n], c[n] = r % 1e7, r = l(r / 1e7)
    }, d = function (t) {
        for (var e = 6, n = 0; --e >= 0;)n += c[e], c[e] = l(n / t), n = n % t * 1e7
    }, p = function () {
        for (var t = 6, e = ""; --t >= 0;)if ("" !== e || 0 === t || 0 !== c[t]) {
            var n = String(c[t]);
            e = "" === e ? n : e + a.call(h, 7 - n.length) + n
        }
        return e
    }, m = function (t, e, n) {
        return 0 === e ? n : e % 2 === 1 ? m(t, e - 1, n * t) : m(t * t, e / 2, n)
    }, v = function (t) {
        for (var e = 0, n = t; n >= 4096;)e += 12, n /= 4096;
        for (; n >= 2;)e += 1, n /= 2;
        return e
    };
    r(r.P + r.F * (!!s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(7)(function () {
          s.call({})
      })), "Number", {
        toFixed: function (t) {
            var e, n, r, s, l = o(this, u), c = i(t), g = "", y = h;
            if (c < 0 || c > 20)throw RangeError(u);
            if (l != l)return "NaN";
            if (l <= -1e21 || l >= 1e21)return String(l);
            if (l < 0 && (g = "-", l = -l), l > 1e-21)if (e = v(l * m(2, 69, 1)) - 69, n = e < 0 ? l * m(2, -e, 1) : l / m(2, e, 1), n *= 4503599627370496, e = 52 - e, e > 0) {
                for (f(0, n), r = c; r >= 7;)f(1e7, 0), r -= 7;
                for (f(m(10, r, 1), 0), r = e - 1; r >= 23;)d(1 << 23), r -= 23;
                d(1 << r), f(1, 1), d(2), y = p()
            } else f(0, n), f(1 << -e, 0), y = p() + a.call(h, c);
            return c > 0 ? (s = y.length, y = g + (s <= c ? "0." + a.call(h, c - s) + y : y.slice(0, s - c) + "." + y.slice(s - c))) : y = g + y, y
        }
    })
}, function (t, e, n) {
    var r = n(34);
    t.exports = function (t, e) {
        if ("number" != typeof t && "Number" != r(t))throw TypeError(e);
        return +t
    }
}, function (t, e, n) {
    "use strict";
    var r = n(38), i = n(35);
    t.exports = function (t) {
        var e = String(i(this)), n = "", o = r(t);
        if (o < 0 || o == 1 / 0)throw RangeError("Count can't be negative");
        for (; o > 0; (o >>>= 1) && (e += e))1 & o && (n += e);
        return n
    }
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(7), o = n(90), a = 1..toPrecision;
    r(r.P + r.F * (i(function () {
          return "1" !== a.call(1, void 0)
      }) || !i(function () {
          a.call({})
      })), "Number", {
        toPrecision: function (t) {
            var e = o(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === t ? a.call(e) : a.call(e, t)
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Number", {EPSILON: Math.pow(2, -52)})
}, function (t, e, n) {
    var r = n(8), i = n(4).isFinite;
    r(r.S, "Number", {
        isFinite: function (t) {
            return "number" == typeof t && i(t)
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Number", {isInteger: n(96)})
}, function (t, e, n) {
    var r = n(13), i = Math.floor;
    t.exports = function (t) {
        return !r(t) && isFinite(t) && i(t) === t
    }
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Number", {
        isNaN: function (t) {
            return t != t
        }
    })
}, function (t, e, n) {
    var r = n(8), i = n(96), o = Math.abs;
    r(r.S, "Number", {
        isSafeInteger: function (t) {
            return i(t) && o(t) <= 9007199254740991
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Number", {MAX_SAFE_INTEGER: 9007199254740991})
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Number", {MIN_SAFE_INTEGER: -9007199254740991})
}, function (t, e, n) {
    var r = n(8), i = n(86);
    r(r.S + r.F * (Number.parseFloat != i), "Number", {parseFloat: i})
}, function (t, e, n) {
    var r = n(8), i = n(82);
    r(r.S + r.F * (Number.parseInt != i), "Number", {parseInt: i})
}, function (t, e, n) {
    var r = n(8), i = n(104), o = Math.sqrt, a = Math.acosh;
    r(r.S + r.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
        acosh: function (t) {
            return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + o(t - 1) * o(t + 1))
        }
    })
}, function (t, e) {
    t.exports = Math.log1p || function (t) {
          return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
      }
}, function (t, e, n) {
    function r(t) {
        return isFinite(t = +t) && 0 != t ? t < 0 ? -r(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
    }

    var i = n(8), o = Math.asinh;
    i(i.S + i.F * !(o && 1 / o(0) > 0), "Math", {asinh: r})
}, function (t, e, n) {
    var r = n(8), i = Math.atanh;
    r(r.S + r.F * !(i && 1 / i(-0) < 0), "Math", {
        atanh: function (t) {
            return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
        }
    })
}, function (t, e, n) {
    var r = n(8), i = n(108);
    r(r.S, "Math", {
        cbrt: function (t) {
            return i(t = +t) * Math.pow(Math.abs(t), 1 / 3)
        }
    })
}, function (t, e) {
    t.exports = Math.sign || function (t) {
          return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
      }
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        clz32: function (t) {
            return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
        }
    })
}, function (t, e, n) {
    var r = n(8), i = Math.exp;
    r(r.S, "Math", {
        cosh: function (t) {
            return (i(t = +t) + i(-t)) / 2
        }
    })
}, function (t, e, n) {
    var r = n(8), i = n(112);
    r(r.S + r.F * (i != Math.expm1), "Math", {expm1: i})
}, function (t, e) {
    var n = Math.expm1;
    t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || n(-2e-17) != -2e-17 ? function (t) {
          return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
      } : n
}, function (t, e, n) {
    var r = n(8), i = n(108), o = Math.pow, a = o(2, -52), s = o(2, -23), l = o(2, 127) * (2 - s), c = o(2, -126), u = function (t) {
        return t + 1 / a - 1 / a
    };
    r(r.S, "Math", {
        fround: function (t) {
            var e, n, r = Math.abs(t), o = i(t);
            return r < c ? o * u(r / c / s) * c * s : (e = (1 + s / a) * r, n = e - (e - r), n > l || n != n ? o * (1 / 0) : o * n)
        }
    })
}, function (t, e, n) {
    var r = n(8), i = Math.abs;
    r(r.S, "Math", {
        hypot: function (t, e) {
            for (var n, r, o = 0, a = 0, s = arguments.length, l = 0; a < s;)n = i(arguments[a++]), l < n ? (r = l / n, o = o * r * r + 1, l = n) : n > 0 ? (r = n / l, o += r * r) : o += n;
            return l === 1 / 0 ? 1 / 0 : l * Math.sqrt(o)
        }
    })
}, function (t, e, n) {
    var r = n(8), i = Math.imul;
    r(r.S + r.F * n(7)(function () {
          return i(4294967295, 5) != -5 || 2 != i.length
      }), "Math", {
        imul: function (t, e) {
            var n = 65535, r = +t, i = +e, o = n & r, a = n & i;
            return 0 | o * a + ((n & r >>> 16) * a + o * (n & i >>> 16) << 16 >>> 0)
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        log10: function (t) {
            return Math.log(t) / Math.LN10
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Math", {log1p: n(104)})
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        log2: function (t) {
            return Math.log(t) / Math.LN2
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Math", {sign: n(108)})
}, function (t, e, n) {
    var r = n(8), i = n(112), o = Math.exp;
    r(r.S + r.F * n(7)(function () {
          return !Math.sinh(-2e-17) != -2e-17
      }), "Math", {
        sinh: function (t) {
            return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2)
        }
    })
}, function (t, e, n) {
    var r = n(8), i = n(112), o = Math.exp;
    r(r.S, "Math", {
        tanh: function (t) {
            var e = i(t = +t), n = i(-t);
            return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (o(t) + o(-t))
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        trunc: function (t) {
            return (t > 0 ? Math.floor : Math.ceil)(t)
        }
    })
}, function (t, e, n) {
    var r = n(8), i = n(39), o = String.fromCharCode, a = String.fromCodePoint;
    r(r.S + r.F * (!!a && 1 != a.length), "String", {
        fromCodePoint: function (t) {
            for (var e, n = [], r = arguments.length, a = 0; r > a;) {
                if (e = +arguments[a++], i(e, 1114111) !== e)throw RangeError(e + " is not a valid code point");
                n.push(e < 65536 ? o(e) : o(((e -= 65536) >> 10) + 55296, e % 1024 + 56320))
            }
            return n.join("")
        }
    })
}, function (t, e, n) {
    var r = n(8), i = n(32), o = n(37);
    r(r.S, "String", {
        raw: function (t) {
            for (var e = i(t.raw), n = o(e.length), r = arguments.length, a = [], s = 0; n > s;)a.push(String(e[s++])), s < r && a.push(String(arguments[s]));
            return a.join("")
        }
    })
}, function (t, e, n) {
    "use strict";
    n(83)("trim", function (t) {
        return function () {
            return t(this, 3)
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(127)(!0);
    n(128)(String, "String", function (t) {
        this._t = String(t), this._i = 0
    }, function () {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {value: void 0, done: !0} : (t = r(e, n), this._i += t.length, {value: t, done: !1})
    })
}, function (t, e, n) {
    var r = n(38), i = n(35);
    t.exports = function (t) {
        return function (e, n) {
            var o, a, s = String(i(e)), l = r(n), c = s.length;
            return l < 0 || l >= c ? t ? "" : void 0 : (o = s.charCodeAt(l), o < 55296 || o > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? s.charAt(l) : o : t ? s.slice(l, l + 2) : (o - 55296 << 10) + (a - 56320) + 65536)
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = n(28), i = n(8), o = n(18), a = n(10), s = n(5), l = n(129), c = n(130), u = n(24), h = n(59), f = n(25)("iterator"), d = !([].keys && "next" in [].keys()), p = "@@iterator", m = "keys", v = "values", g = function () {
        return this
    };
    t.exports = function (t, e, n, y, x, _, b) {
        c(n, e, y);
        var w, M, S, E = function (t) {
            if (!d && t in C)return C[t];
            switch (t) {
                case m:
                    return function () {
                        return new n(this, t)
                    };
                case v:
                    return function () {
                        return new n(this, t)
                    }
            }
            return function () {
                return new n(this, t)
            }
        }, T = e + " Iterator", A = x == v, L = !1, C = t.prototype, P = C[f] || C[p] || x && C[x], R = P || E(x), I = x ? A ? E("entries") : R : void 0, F = "Array" == e ? C.entries || P : P;
        if (F && (S = h(F.call(new t)), S !== Object.prototype && (u(S, T, !0), r || s(S, f) || a(S, f, g))), A && P && P.name !== v && (L = !0, R = function () {
              return P.call(this)
          }), r && !b || !d && !L && C[f] || a(C, f, R), l[e] = R, l[T] = g, x)if (w = {
              values: A ? R : E(v),
              keys: _ ? R : E(m),
              entries: I
          }, b)for (M in w)M in C || o(C, M, w[M]); else i(i.P + i.F * (d || L), e, w);
        return w
    }
}, function (t, e) {
    t.exports = {}
}, function (t, e, n) {
    "use strict";
    var r = n(46), i = n(17), o = n(24), a = {};
    n(10)(a, n(25)("iterator"), function () {
        return this
    }), t.exports = function (t, e, n) {
        t.prototype = r(a, {next: i(1, n)}), o(t, e + " Iterator")
    }
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(127)(!1);
    r(r.P, "String", {
        codePointAt: function (t) {
            return i(this, t)
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(37), o = n(133), a = "endsWith", s = ""[a];
    r(r.P + r.F * n(135)(a), "String", {
        endsWith: function (t) {
            var e = o(this, t, a), n = arguments.length > 1 ? arguments[1] : void 0, r = i(e.length), l = void 0 === n ? r : Math.min(i(n), r), c = String(t);
            return s ? s.call(e, c, l) : e.slice(l - c.length, l) === c
        }
    })
}, function (t, e, n) {
    var r = n(134), i = n(35);
    t.exports = function (t, e, n) {
        if (r(e))throw TypeError("String#" + n + " doesn't accept regex!");
        return String(i(t))
    }
}, function (t, e, n) {
    var r = n(13), i = n(34), o = n(25)("match");
    t.exports = function (t) {
        var e;
        return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t))
    }
}, function (t, e, n) {
    var r = n(25)("match");
    t.exports = function (t) {
        var e = /./;
        try {
            "/./"[t](e)
        } catch (n) {
            try {
                return e[r] = !1, !"/./"[t](e)
            } catch (t) {
            }
        }
        return !0
    }
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(133), o = "includes";
    r(r.P + r.F * n(135)(o), "String", {
        includes: function (t) {
            return !!~i(this, t, o).indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.P, "String", {repeat: n(91)})
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(37), o = n(133), a = "startsWith", s = ""[a];
    r(r.P + r.F * n(135)(a), "String", {
        startsWith: function (t) {
            var e = o(this, t, a), n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)), r = String(t);
            return s ? s.call(e, r, n) : e.slice(n, n + r.length) === r
        }
    })
}, function (t, e, n) {
    "use strict";
    n(140)("anchor", function (t) {
        return function (e) {
            return t(this, "a", "name", e)
        }
    })
}, function (t, e, n) {
    var r = n(8), i = n(7), o = n(35), a = /"/g, s = function (t, e, n, r) {
        var i = String(o(t)), s = "<" + e;
        return "" !== n && (s += " " + n + '="' + String(r).replace(a, "&quot;") + '"'), s + ">" + i + "</" + e + ">"
    };
    t.exports = function (t, e) {
        var n = {};
        n[t] = e(s), r(r.P + r.F * i(function () {
              var e = ""[t]('"');
              return e !== e.toLowerCase() || e.split('"').length > 3
          }), "String", n)
    }
}, function (t, e, n) {
    "use strict";
    n(140)("big", function (t) {
        return function () {
            return t(this, "big", "", "")
        }
    })
}, function (t, e, n) {
    "use strict";
    n(140)("blink", function (t) {
        return function () {
            return t(this, "blink", "", "")
        }
    })
}, function (t, e, n) {
    "use strict";
    n(140)("bold", function (t) {
        return function () {
            return t(this, "b", "", "")
        }
    })
}, function (t, e, n) {
    "use strict";
    n(140)("fixed", function (t) {
        return function () {
            return t(this, "tt", "", "")
        }
    })
}, function (t, e, n) {
    "use strict";
    n(140)("fontcolor", function (t) {
        return function (e) {
            return t(this, "font", "color", e)
        }
    })
}, function (t, e, n) {
    "use strict";
    n(140)("fontsize", function (t) {
        return function (e) {
            return t(this, "font", "size", e)
        }
    })
}, function (t, e, n) {
    "use strict";
    n(140)("italics", function (t) {
        return function () {
            return t(this, "i", "", "")
        }
    })
}, function (t, e, n) {
    "use strict";
    n(140)("link", function (t) {
        return function (e) {
            return t(this, "a", "href", e)
        }
    })
}, function (t, e, n) {
    "use strict";
    n(140)("small", function (t) {
        return function () {
            return t(this, "small", "", "")
        }
    })
}, function (t, e, n) {
    "use strict";
    n(140)("strike", function (t) {
        return function () {
            return t(this, "strike", "", "")
        }
    })
}, function (t, e, n) {
    "use strict";
    n(140)("sub", function (t) {
        return function () {
            return t(this, "sub", "", "")
        }
    })
}, function (t, e, n) {
    "use strict";
    n(140)("sup", function (t) {
        return function () {
            return t(this, "sup", "", "")
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Date", {
        now: function () {
            return (new Date).getTime()
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(58), o = n(16);
    r(r.P + r.F * n(7)(function () {
          return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                toISOString: function () {
                    return 1
                }
            })
      }), "Date", {
        toJSON: function (t) {
            var e = i(this), n = o(e);
            return "number" != typeof n || isFinite(n) ? e.toISOString() : null
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(7), o = Date.prototype.getTime, a = function (t) {
        return t > 9 ? t : "0" + t
    };
    r(r.P + r.F * (i(function () {
          return "0385-07-25T07:06:39.999Z" != new Date(-5e13 - 1).toISOString()
      }) || !i(function () {
          new Date(NaN).toISOString()
      })), "Date", {
        toISOString: function () {
            if (!isFinite(o.call(this)))throw RangeError("Invalid time value");
            var t = this, e = t.getUTCFullYear(), n = t.getUTCMilliseconds(), r = e < 0 ? "-" : e > 9999 ? "+" : "";
            return r + ("00000" + Math.abs(e)).slice(r ? -6 : -4) + "-" + a(t.getUTCMonth() + 1) + "-" + a(t.getUTCDate()) + "T" + a(t.getUTCHours()) + ":" + a(t.getUTCMinutes()) + ":" + a(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + a(n)) + "Z";
        }
    })
}, function (t, e, n) {
    var r = Date.prototype, i = "Invalid Date", o = "toString", a = r[o], s = r.getTime;
    new Date(NaN) + "" != i && n(18)(r, o, function () {
        var t = s.call(this);
        return t === t ? a.call(this) : i
    })
}, function (t, e, n) {
    var r = n(25)("toPrimitive"), i = Date.prototype;
    r in i || n(10)(i, r, n(158))
}, function (t, e, n) {
    "use strict";
    var r = n(12), i = n(16), o = "number";
    t.exports = function (t) {
        if ("string" !== t && t !== o && "default" !== t)throw TypeError("Incorrect hint");
        return i(r(this), t != o)
    }
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Array", {isArray: n(45)})
}, function (t, e, n) {
    "use strict";
    var r = n(20), i = n(8), o = n(58), a = n(161), s = n(162), l = n(37), c = n(163), u = n(164);
    i(i.S + i.F * !n(165)(function (t) {
          Array.from(t)
      }), "Array", {
        from: function (t) {
            var e, n, i, h, f = o(t), d = "function" == typeof this ? this : Array, p = arguments.length, m = p > 1 ? arguments[1] : void 0, v = void 0 !== m, g = 0, y = u(f);
            if (v && (m = r(m, p > 2 ? arguments[2] : void 0, 2)), void 0 == y || d == Array && s(y))for (e = l(f.length), n = new d(e); e > g; g++)c(n, g, v ? m(f[g], g) : f[g]); else for (h = y.call(f), n = new d; !(i = h.next()).done; g++)c(n, g, v ? a(h, m, [i.value, g], !0) : i.value);
            return n.length = g, n
        }
    })
}, function (t, e, n) {
    var r = n(12);
    t.exports = function (t, e, n, i) {
        try {
            return i ? e(r(n)[0], n[1]) : e(n)
        } catch (e) {
            var o = t.return;
            throw void 0 !== o && r(o.call(t)), e
        }
    }
}, function (t, e, n) {
    var r = n(129), i = n(25)("iterator"), o = Array.prototype;
    t.exports = function (t) {
        return void 0 !== t && (r.Array === t || o[i] === t)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(11), i = n(17);
    t.exports = function (t, e, n) {
        e in t ? r.f(t, e, i(0, n)) : t[e] = n
    }
}, function (t, e, n) {
    var r = n(75), i = n(25)("iterator"), o = n(129);
    t.exports = n(9).getIteratorMethod = function (t) {
        if (void 0 != t)return t[i] || t["@@iterator"] || o[r(t)]
    }
}, function (t, e, n) {
    var r = n(25)("iterator"), i = !1;
    try {
        var o = [7][r]();
        o.return = function () {
            i = !0
        }, Array.from(o, function () {
            throw 2
        })
    } catch (t) {
    }
    t.exports = function (t, e) {
        if (!e && !i)return !1;
        var n = !1;
        try {
            var o = [7], a = o[r]();
            a.next = function () {
                return {done: n = !0}
            }, o[r] = function () {
                return a
            }, t(o)
        } catch (t) {
        }
        return n
    }
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(163);
    r(r.S + r.F * n(7)(function () {
          function t() {
          }

          return !(Array.of.call(t) instanceof t)
      }), "Array", {
        of: function () {
            for (var t = 0, e = arguments.length, n = new ("function" == typeof this ? this : Array)(e); e > t;)i(n, t, arguments[t++]);
            return n.length = e, n
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(32), o = [].join;
    r(r.P + r.F * (n(33) != Object || !n(168)(o)), "Array", {
        join: function (t) {
            return o.call(i(this), void 0 === t ? "," : t)
        }
    })
}, function (t, e, n) {
    var r = n(7);
    t.exports = function (t, e) {
        return !!t && r(function () {
              e ? t.call(null, function () {
                }, 1) : t.call(null)
          })
    }
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(48), o = n(34), a = n(39), s = n(37), l = [].slice;
    r(r.P + r.F * n(7)(function () {
          i && l.call(i)
      }), "Array", {
        slice: function (t, e) {
            var n = s(this.length), r = o(this);
            if (e = void 0 === e ? n : e, "Array" == r)return l.call(this, t, e);
            for (var i = a(t, n), c = a(e, n), u = s(c - i), h = Array(u), f = 0; f < u; f++)h[f] = "String" == r ? this.charAt(i + f) : this[i + f];
            return h
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(21), o = n(58), a = n(7), s = [].sort, l = [1, 2, 3];
    r(r.P + r.F * (a(function () {
          l.sort(void 0)
      }) || !a(function () {
          l.sort(null)
      }) || !n(168)(s)), "Array", {
        sort: function (t) {
            return void 0 === t ? s.call(o(this)) : s.call(o(this), i(t))
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(172)(0), o = n(168)([].forEach, !0);
    r(r.P + r.F * !o, "Array", {
        forEach: function (t) {
            return i(this, t, arguments[1])
        }
    })
}, function (t, e, n) {
    var r = n(20), i = n(33), o = n(58), a = n(37), s = n(173);
    t.exports = function (t, e) {
        var n = 1 == t, l = 2 == t, c = 3 == t, u = 4 == t, h = 6 == t, f = 5 == t || h, d = e || s;
        return function (e, s, p) {
            for (var m, v, g = o(e), y = i(g), x = r(s, p, 3), _ = a(y.length), b = 0, w = n ? d(e, _) : l ? d(e, 0) : void 0; _ > b; b++)if ((f || b in y) && (m = y[b], v = x(m, b, g), t))if (n) w[b] = v; else if (v)switch (t) {
                case 3:
                    return !0;
                case 5:
                    return m;
                case 6:
                    return b;
                case 2:
                    w.push(m)
            } else if (u)return !1;
            return h ? -1 : c || u ? u : w
        }
    }
}, function (t, e, n) {
    var r = n(174);
    t.exports = function (t, e) {
        return new (r(t))(e)
    }
}, function (t, e, n) {
    var r = n(13), i = n(45), o = n(25)("species");
    t.exports = function (t) {
        var e;
        return i(t) && (e = t.constructor, "function" != typeof e || e !== Array && !i(e.prototype) || (e = void 0), r(e) && (e = e[o], null === e && (e = void 0))), void 0 === e ? Array : e
    }
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(172)(1);
    r(r.P + r.F * !n(168)([].map, !0), "Array", {
        map: function (t) {
            return i(this, t, arguments[1])
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(172)(2);
    r(r.P + r.F * !n(168)([].filter, !0), "Array", {
        filter: function (t) {
            return i(this, t, arguments[1])
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(172)(3);
    r(r.P + r.F * !n(168)([].some, !0), "Array", {
        some: function (t) {
            return i(this, t, arguments[1])
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(172)(4);
    r(r.P + r.F * !n(168)([].every, !0), "Array", {
        every: function (t) {
            return i(this, t, arguments[1])
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(180);
    r(r.P + r.F * !n(168)([].reduce, !0), "Array", {
        reduce: function (t) {
            return i(this, t, arguments.length, arguments[1], !1)
        }
    })
}, function (t, e, n) {
    var r = n(21), i = n(58), o = n(33), a = n(37);
    t.exports = function (t, e, n, s, l) {
        r(e);
        var c = i(t), u = o(c), h = a(c.length), f = l ? h - 1 : 0, d = l ? -1 : 1;
        if (n < 2)for (; ;) {
            if (f in u) {
                s = u[f], f += d;
                break
            }
            if (f += d, l ? f < 0 : h <= f)throw TypeError("Reduce of empty array with no initial value")
        }
        for (; l ? f >= 0 : h > f; f += d)f in u && (s = e(s, u[f], f, c));
        return s
    }
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(180);
    r(r.P + r.F * !n(168)([].reduceRight, !0), "Array", {
        reduceRight: function (t) {
            return i(this, t, arguments.length, arguments[1], !0)
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(36)(!1), o = [].indexOf, a = !!o && 1 / [1].indexOf(1, -0) < 0;
    r(r.P + r.F * (a || !n(168)(o)), "Array", {
        indexOf: function (t) {
            return a ? o.apply(this, arguments) || 0 : i(this, t, arguments[1])
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(32), o = n(38), a = n(37), s = [].lastIndexOf, l = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
    r(r.P + r.F * (l || !n(168)(s)), "Array", {
        lastIndexOf: function (t) {
            if (l)return s.apply(this, arguments) || 0;
            var e = i(this), n = a(e.length), r = n - 1;
            for (arguments.length > 1 && (r = Math.min(r, o(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)if (r in e && e[r] === t)return r || 0;
            return -1
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.P, "Array", {copyWithin: n(185)}), n(186)("copyWithin")
}, function (t, e, n) {
    "use strict";
    var r = n(58), i = n(39), o = n(37);
    t.exports = [].copyWithin || function (t, e) {
          var n = r(this), a = o(n.length), s = i(t, a), l = i(e, a), c = arguments.length > 2 ? arguments[2] : void 0, u = Math.min((void 0 === c ? a : i(c, a)) - l, a - s), h = 1;
          for (l < s && s < l + u && (h = -1, l += u - 1, s += u - 1); u-- > 0;)l in n ? n[s] = n[l] : delete n[s], s += h, l += h;
          return n
      }
}, function (t, e, n) {
    var r = n(25)("unscopables"), i = Array.prototype;
    void 0 == i[r] && n(10)(i, r, {}), t.exports = function (t) {
        i[r][t] = !0
    }
}, function (t, e, n) {
    var r = n(8);
    r(r.P, "Array", {fill: n(188)}), n(186)("fill")
}, function (t, e, n) {
    "use strict";
    var r = n(58), i = n(39), o = n(37);
    t.exports = function (t) {
        for (var e = r(this), n = o(e.length), a = arguments.length, s = i(a > 1 ? arguments[1] : void 0, n), l = a > 2 ? arguments[2] : void 0, c = void 0 === l ? n : i(l, n); c > s;)e[s++] = t;
        return e
    }
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(172)(5), o = "find", a = !0;
    o in [] && Array(1)[o](function () {
        a = !1
    }), r(r.P + r.F * a, "Array", {
        find: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(186)(o)
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(172)(6), o = "findIndex", a = !0;
    o in [] && Array(1)[o](function () {
        a = !1
    }), r(r.P + r.F * a, "Array", {
        findIndex: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(186)(o)
}, function (t, e, n) {
    n(192)("Array")
}, function (t, e, n) {
    "use strict";
    var r = n(4), i = n(11), o = n(6), a = n(25)("species");
    t.exports = function (t) {
        var e = r[t];
        o && e && !e[a] && i.f(e, a, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (t, e, n) {
    "use strict";
    var r = n(186), i = n(194), o = n(129), a = n(32);
    t.exports = n(128)(Array, "Array", function (t, e) {
        this._t = a(t), this._i = 0, this._k = e
    }, function () {
        var t = this._t, e = this._k, n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]])
    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
}, function (t, e) {
    t.exports = function (t, e) {
        return {value: e, done: !!t}
    }
}, function (t, e, n) {
    var r = n(4), i = n(88), o = n(11).f, a = n(50).f, s = n(134), l = n(196), c = r.RegExp, u = c, h = c.prototype, f = /a/g, d = /a/g, p = new c(f) !== f;
    if (n(6) && (!p || n(7)(function () {
          return d[n(25)("match")] = !1, c(f) != f || c(d) == d || "/a/i" != c(f, "i")
      }))) {
        c = function (t, e) {
            var n = this instanceof c, r = s(t), o = void 0 === e;
            return !n && r && t.constructor === c && o ? t : i(p ? new u(r && !o ? t.source : t, e) : u((r = t instanceof c) ? t.source : t, r && o ? l.call(t) : e), n ? this : h, c)
        };
        for (var m = (function (t) {
            t in c || o(c, t, {
                configurable: !0, get: function () {
                    return u[t]
                }, set: function (e) {
                    u[t] = e
                }
            })
        }), v = a(u), g = 0; v.length > g;)m(v[g++]);
        h.constructor = c, c.prototype = h, n(18)(r, "RegExp", c)
    }
    n(192)("RegExp")
}, function (t, e, n) {
    "use strict";
    var r = n(12);
    t.exports = function () {
        var t = r(this), e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function (t, e, n) {
    "use strict";
    n(198);
    var r = n(12), i = n(196), o = n(6), a = "toString", s = /./[a], l = function (t) {
        n(18)(RegExp.prototype, a, t, !0)
    };
    n(7)(function () {
        return "/a/b" != s.call({source: "a", flags: "b"})
    }) ? l(function () {
          var t = r(this);
          return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0)
      }) : s.name != a && l(function () {
          return s.call(this)
      })
}, function (t, e, n) {
    n(6) && "g" != /./g.flags && n(11).f(RegExp.prototype, "flags", {configurable: !0, get: n(196)})
}, function (t, e, n) {
    n(200)("match", 1, function (t, e, n) {
        return [function (n) {
            "use strict";
            var r = t(this), i = void 0 == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
        }, n]
    })
}, function (t, e, n) {
    "use strict";
    var r = n(10), i = n(18), o = n(7), a = n(35), s = n(25);
    t.exports = function (t, e, n) {
        var l = s(t), c = n(a, l, ""[t]), u = c[0], h = c[1];
        o(function () {
            var e = {};
            return e[l] = function () {
                return 7
            }, 7 != ""[t](e)
        }) && (i(String.prototype, t, u), r(RegExp.prototype, l, 2 == e ? function (t, e) {
              return h.call(t, this, e)
          } : function (t) {
              return h.call(t, this)
          }))
    }
}, function (t, e, n) {
    n(200)("replace", 2, function (t, e, n) {
        return [function (r, i) {
            "use strict";
            var o = t(this), a = void 0 == r ? void 0 : r[e];
            return void 0 !== a ? a.call(r, o, i) : n.call(String(o), r, i)
        }, n]
    })
}, function (t, e, n) {
    n(200)("search", 1, function (t, e, n) {
        return [function (n) {
            "use strict";
            var r = t(this), i = void 0 == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
        }, n]
    })
}, function (t, e, n) {
    n(200)("split", 2, function (t, e, r) {
        "use strict";
        var i = n(134), o = r, a = [].push, s = "split", l = "length", c = "lastIndex";
        if ("c" == "abbc"[s](/(b)*/)[1] || 4 != "test"[s](/(?:)/, -1)[l] || 2 != "ab"[s](/(?:ab)*/)[l] || 4 != "."[s](/(.?)(.?)/)[l] || "."[s](/()()/)[l] > 1 || ""[s](/.?/)[l]) {
            var u = void 0 === /()??/.exec("")[1];
            r = function (t, e) {
                var n = String(this);
                if (void 0 === t && 0 === e)return [];
                if (!i(t))return o.call(n, t, e);
                var r, s, h, f, d, p = [], m = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), v = 0, g = void 0 === e ? 4294967295 : e >>> 0, y = new RegExp(t.source, m + "g");
                for (u || (r = new RegExp("^" + y.source + "$(?!\\s)", m)); (s = y.exec(n)) && (h = s.index + s[0][l], !(h > v && (p.push(n.slice(v, s.index)), !u && s[l] > 1 && s[0].replace(r, function () {
                    for (d = 1; d < arguments[l] - 2; d++)void 0 === arguments[d] && (s[d] = void 0)
                }), s[l] > 1 && s.index < n[l] && a.apply(p, s.slice(1)), f = s[0][l], v = h, p[l] >= g)));)y[c] === s.index && y[c]++;
                return v === n[l] ? !f && y.test("") || p.push("") : p.push(n.slice(v)), p[l] > g ? p.slice(0, g) : p
            }
        } else"0"[s](void 0, 0)[l] && (r = function (t, e) {
            return void 0 === t && 0 === e ? [] : o.call(this, t, e)
        });
        return [function (n, i) {
            var o = t(this), a = void 0 == n ? void 0 : n[e];
            return void 0 !== a ? a.call(n, o, i) : r.call(String(o), n, i)
        }, r]
    })
}, function (t, e, n) {
    "use strict";
    var r, i, o, a = n(28), s = n(4), l = n(20), c = n(75), u = n(8), h = n(13), f = n(21), d = n(205), p = n(206), m = n(207), v = n(208).set, g = n(209)(), y = "Promise", x = s.TypeError, _ = s.process, b = s[y], _ = s.process, w = "process" == c(_), M = function () {
    }, S = !!function () {
        try {
            var t = b.resolve(1), e = (t.constructor = {})[n(25)("species")] = function (t) {
                t(M, M)
            };
            return (w || "function" == typeof PromiseRejectionEvent) && t.then(M) instanceof e
        } catch (t) {
        }
    }(), E = function (t, e) {
        return t === e || t === b && e === o
    }, T = function (t) {
        var e;
        return !(!h(t) || "function" != typeof(e = t.then)) && e
    }, A = function (t) {
        return E(b, t) ? new L(t) : new i(t)
    }, L = i = function (t) {
        var e, n;
        this.promise = new t(function (t, r) {
            if (void 0 !== e || void 0 !== n)throw x("Bad Promise constructor");
            e = t, n = r
        }), this.resolve = f(e), this.reject = f(n)
    }, C = function (t) {
        try {
            t()
        } catch (t) {
            return {error: t}
        }
    }, P = function (t, e) {
        if (!t._n) {
            t._n = !0;
            var n = t._c;
            g(function () {
                for (var r = t._v, i = 1 == t._s, o = 0, a = function (e) {
                    var n, o, a = i ? e.ok : e.fail, s = e.resolve, l = e.reject, c = e.domain;
                    try {
                        a ? (i || (2 == t._h && F(t), t._h = 1), a === !0 ? n = r : (c && c.enter(), n = a(r), c && c.exit()), n === e.promise ? l(x("Promise-chain cycle")) : (o = T(n)) ? o.call(n, s, l) : s(n)) : l(r)
                    } catch (t) {
                        l(t)
                    }
                }; n.length > o;)a(n[o++]);
                t._c = [], t._n = !1, e && !t._h && R(t)
            })
        }
    }, R = function (t) {
        v.call(s, function () {
            var e, n, r, i = t._v;
            if (I(t) && (e = C(function () {
                  w ? _.emit("unhandledRejection", i, t) : (n = s.onunhandledrejection) ? n({
                          promise: t,
                          reason: i
                      }) : (r = s.console) && r.error && r.error("Unhandled promise rejection", i)
              }), t._h = w || I(t) ? 2 : 1), t._a = void 0, e)throw e.error
        })
    }, I = function (t) {
        if (1 == t._h)return !1;
        for (var e, n = t._a || t._c, r = 0; n.length > r;)if (e = n[r++], e.fail || !I(e.promise))return !1;
        return !0
    }, F = function (t) {
        v.call(s, function () {
            var e;
            w ? _.emit("rejectionHandled", t) : (e = s.onrejectionhandled) && e({promise: t, reason: t._v})
        })
    }, O = function (t) {
        var e = this;
        e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), P(e, !0))
    }, B = function (t) {
        var e, n = this;
        if (!n._d) {
            n._d = !0, n = n._w || n;
            try {
                if (n === t)throw x("Promise can't be resolved itself");
                (e = T(t)) ? g(function () {
                      var r = {_w: n, _d: !1};
                      try {
                          e.call(t, l(B, r, 1), l(O, r, 1))
                      } catch (t) {
                          O.call(r, t)
                      }
                  }) : (n._v = t, n._s = 1, P(n, !1))
            } catch (t) {
                O.call({_w: n, _d: !1}, t)
            }
        }
    };
    S || (b = function (t) {
        d(this, b, y, "_h"), f(t), r.call(this);
        try {
            t(l(B, this, 1), l(O, this, 1))
        } catch (t) {
            O.call(this, t)
        }
    }, r = function (t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }, r.prototype = n(210)(b.prototype, {
        then: function (t, e) {
            var n = A(m(this, b));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = w ? _.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && P(this, !1), n.promise
        }, catch: function (t) {
            return this.then(void 0, t)
        }
    }), L = function () {
        var t = new r;
        this.promise = t, this.resolve = l(B, t, 1), this.reject = l(O, t, 1)
    }), u(u.G + u.W + u.F * !S, {Promise: b}), n(24)(b, y), n(192)(y), o = n(9)[y], u(u.S + u.F * !S, y, {
        reject: function (t) {
            var e = A(this), n = e.reject;
            return n(t), e.promise
        }
    }), u(u.S + u.F * (a || !S), y, {
        resolve: function (t) {
            if (t instanceof b && E(t.constructor, this))return t;
            var e = A(this), n = e.resolve;
            return n(t), e.promise
        }
    }), u(u.S + u.F * !(S && n(165)(function (t) {
          b.all(t).catch(M)
      })), y, {
        all: function (t) {
            var e = this, n = A(e), r = n.resolve, i = n.reject, o = C(function () {
                var n = [], o = 0, a = 1;
                p(t, !1, function (t) {
                    var s = o++, l = !1;
                    n.push(void 0), a++, e.resolve(t).then(function (t) {
                        l || (l = !0, n[s] = t, --a || r(n))
                    }, i)
                }), --a || r(n)
            });
            return o && i(o.error), n.promise
        }, race: function (t) {
            var e = this, n = A(e), r = n.reject, i = C(function () {
                p(t, !1, function (t) {
                    e.resolve(t).then(n.resolve, r)
                })
            });
            return i && r(i.error), n.promise
        }
    })
}, function (t, e) {
    t.exports = function (t, e, n, r) {
        if (!(t instanceof e) || void 0 !== r && r in t)throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function (t, e, n) {
    var r = n(20), i = n(161), o = n(162), a = n(12), s = n(37), l = n(164), c = {}, u = {}, e = t.exports = function (t, e, n, h, f) {
        var d, p, m, v, g = f ? function () {
              return t
          } : l(t), y = r(n, h, e ? 2 : 1), x = 0;
        if ("function" != typeof g)throw TypeError(t + " is not iterable!");
        if (o(g)) {
            for (d = s(t.length); d > x; x++)if (v = e ? y(a(p = t[x])[0], p[1]) : y(t[x]), v === c || v === u)return v
        } else for (m = g.call(t); !(p = m.next()).done;)if (v = i(m, y, p.value, e), v === c || v === u)return v
    };
    e.BREAK = c, e.RETURN = u
}, function (t, e, n) {
    var r = n(12), i = n(21), o = n(25)("species");
    t.exports = function (t, e) {
        var n, a = r(t).constructor;
        return void 0 === a || void 0 == (n = r(a)[o]) ? e : i(n)
    }
}, function (t, e, n) {
    var r, i, o, a = n(20), s = n(78), l = n(48), c = n(15), u = n(4), h = u.process, f = u.setImmediate, d = u.clearImmediate, p = u.MessageChannel, m = 0, v = {}, g = "onreadystatechange", y = function () {
        var t = +this;
        if (v.hasOwnProperty(t)) {
            var e = v[t];
            delete v[t], e()
        }
    }, x = function (t) {
        y.call(t.data)
    };
    f && d || (f = function (t) {
        for (var e = [], n = 1; arguments.length > n;)e.push(arguments[n++]);
        return v[++m] = function () {
            s("function" == typeof t ? t : Function(t), e)
        }, r(m), m
    }, d = function (t) {
        delete v[t]
    }, "process" == n(34)(h) ? r = function (t) {
          h.nextTick(a(y, t, 1))
      } : p ? (i = new p, o = i.port2, i.port1.onmessage = x, r = a(o.postMessage, o, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (r = function (t) {
              u.postMessage(t + "", "*")
          }, u.addEventListener("message", x, !1)) : r = g in c("script") ? function (t) {
                l.appendChild(c("script"))[g] = function () {
                    l.removeChild(this), y.call(t)
                }
            } : function (t) {
                setTimeout(a(y, t, 1), 0)
            }), t.exports = {set: f, clear: d}
}, function (t, e, n) {
    var r = n(4), i = n(208).set, o = r.MutationObserver || r.WebKitMutationObserver, a = r.process, s = r.Promise, l = "process" == n(34)(a);
    t.exports = function () {
        var t, e, n, c = function () {
            var r, i;
            for (l && (r = a.domain) && r.exit(); t;) {
                i = t.fn, t = t.next;
                try {
                    i()
                } catch (r) {
                    throw t ? n() : e = void 0, r
                }
            }
            e = void 0, r && r.enter()
        };
        if (l) n = function () {
            a.nextTick(c)
        }; else if (o) {
            var u = !0, h = document.createTextNode("");
            new o(c).observe(h, {characterData: !0}), n = function () {
                h.data = u = !u
            }
        } else if (s && s.resolve) {
            var f = s.resolve();
            n = function () {
                f.then(c)
            }
        } else n = function () {
            i.call(r, c)
        };
        return function (r) {
            var i = {fn: r, next: void 0};
            e && (e.next = i), t || (t = i, n()), e = i
        }
    }
}, function (t, e, n) {
    var r = n(18);
    t.exports = function (t, e, n) {
        for (var i in e)r(t, i, e[i], n);
        return t
    }
}, function (t, e, n) {
    "use strict";
    var r = n(212);
    t.exports = n(213)("Map", function (t) {
        return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        get: function (t) {
            var e = r.getEntry(this, t);
            return e && e.v
        }, set: function (t, e) {
            return r.def(this, 0 === t ? 0 : t, e)
        }
    }, r, !0)
}, function (t, e, n) {
    "use strict";
    var r = n(11).f, i = n(46), o = n(210), a = n(20), s = n(205), l = n(35), c = n(206), u = n(128), h = n(194), f = n(192), d = n(6), p = n(22).fastKey, m = d ? "_s" : "size", v = function (t, e) {
        var n, r = p(e);
        if ("F" !== r)return t._i[r];
        for (n = t._f; n; n = n.n)if (n.k == e)return n
    };
    t.exports = {
        getConstructor: function (t, e, n, u) {
            var h = t(function (t, r) {
                s(t, h, e, "_i"), t._i = i(null), t._f = void 0, t._l = void 0, t[m] = 0, void 0 != r && c(r, n, t[u], t)
            });
            return o(h.prototype, {
                clear: function () {
                    for (var t = this, e = t._i, n = t._f; n; n = n.n)n.r = !0, n.p && (n.p = n.p.n = void 0), delete e[n.i];
                    t._f = t._l = void 0, t[m] = 0
                }, delete: function (t) {
                    var e = this, n = v(e, t);
                    if (n) {
                        var r = n.n, i = n.p;
                        delete e._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), e._f == n && (e._f = r), e._l == n && (e._l = i), e[m]--
                    }
                    return !!n
                }, forEach: function (t) {
                    s(this, h, "forEach");
                    for (var e, n = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.n : this._f;)for (n(e.v, e.k, this); e && e.r;)e = e.p
                }, has: function (t) {
                    return !!v(this, t)
                }
            }), d && r(h.prototype, "size", {
                get: function () {
                    return l(this[m])
                }
            }), h
        }, def: function (t, e, n) {
            var r, i, o = v(t, e);
            return o ? o.v = n : (t._l = o = {
                  i: i = p(e, !0),
                  k: e,
                  v: n,
                  p: r = t._l,
                  n: void 0,
                  r: !1
              }, t._f || (t._f = o), r && (r.n = o), t[m]++, "F" !== i && (t._i[i] = o)), t
        }, getEntry: v, setStrong: function (t, e, n) {
            u(t, e, function (t, e) {
                this._t = t, this._k = e, this._l = void 0
            }, function () {
                for (var t = this, e = t._k, n = t._l; n && n.r;)n = n.p;
                return t._t && (t._l = n = n ? n.n : t._t._f) ? "keys" == e ? h(0, n.k) : "values" == e ? h(0, n.v) : h(0, [n.k, n.v]) : (t._t = void 0, h(1))
            }, n ? "entries" : "values", !n, !0), f(e)
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = n(4), i = n(8), o = n(18), a = n(210), s = n(22), l = n(206), c = n(205), u = n(13), h = n(7), f = n(165), d = n(24), p = n(88);
    t.exports = function (t, e, n, m, v, g) {
        var y = r[t], x = y, _ = v ? "set" : "add", b = x && x.prototype, w = {}, M = function (t) {
            var e = b[t];
            o(b, t, "delete" == t ? function (t) {
                  return !(g && !u(t)) && e.call(this, 0 === t ? 0 : t)
              } : "has" == t ? function (t) {
                    return !(g && !u(t)) && e.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function (t) {
                      return g && !u(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                  } : "add" == t ? function (t) {
                        return e.call(this, 0 === t ? 0 : t), this
                    } : function (t, n) {
                        return e.call(this, 0 === t ? 0 : t, n), this
                    })
        };
        if ("function" == typeof x && (g || b.forEach && !h(function () {
              (new x).entries().next()
          }))) {
            var S = new x, E = S[_](g ? {} : -0, 1) != S, T = h(function () {
                S.has(1)
            }), A = f(function (t) {
                new x(t)
            }), L = !g && h(function () {
                  for (var t = new x, e = 5; e--;)t[_](e, e);
                  return !t.has(-0)
              });
            A || (x = e(function (e, n) {
                c(e, x, t);
                var r = p(new y, e, x);
                return void 0 != n && l(n, v, r[_], r), r
            }), x.prototype = b, b.constructor = x), (T || L) && (M("delete"), M("has"), v && M("get")), (L || E) && M(_), g && b.clear && delete b.clear
        } else x = m.getConstructor(e, t, v, _), a(x.prototype, n), s.NEED = !0;
        return d(x, t), w[t] = x, i(i.G + i.W + i.F * (x != y), w), g || m.setStrong(x, t, v), x
    }
}, function (t, e, n) {
    "use strict";
    var r = n(212);
    t.exports = n(213)("Set", function (t) {
        return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function (t) {
            return r.def(this, t = 0 === t ? 0 : t, t)
        }
    }, r)
}, function (t, e, n) {
    "use strict";
    var r, i = n(172)(0), o = n(18), a = n(22), s = n(69), l = n(216), c = n(13), u = a.getWeak, h = Object.isExtensible, f = l.ufstore, d = {}, p = function (t) {
        return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, m = {
        get: function (t) {
            if (c(t)) {
                var e = u(t);
                return e === !0 ? f(this).get(t) : e ? e[this._i] : void 0
            }
        }, set: function (t, e) {
            return l.def(this, t, e)
        }
    }, v = t.exports = n(213)("WeakMap", p, m, l, !0, !0);
    7 != (new v).set((Object.freeze || Object)(d), 7).get(d) && (r = l.getConstructor(p), s(r.prototype, m), a.NEED = !0, i(["delete", "has", "get", "set"], function (t) {
        var e = v.prototype, n = e[t];
        o(e, t, function (e, i) {
            if (c(e) && !h(e)) {
                this._f || (this._f = new r);
                var o = this._f[t](e, i);
                return "set" == t ? this : o
            }
            return n.call(this, e, i)
        })
    }))
}, function (t, e, n) {
    "use strict";
    var r = n(210), i = n(22).getWeak, o = n(12), a = n(13), s = n(205), l = n(206), c = n(172), u = n(5), h = c(5), f = c(6), d = 0, p = function (t) {
        return t._l || (t._l = new m)
    }, m = function () {
        this.a = []
    }, v = function (t, e) {
        return h(t.a, function (t) {
            return t[0] === e
        })
    };
    m.prototype = {
        get: function (t) {
            var e = v(this, t);
            if (e)return e[1]
        }, has: function (t) {
            return !!v(this, t)
        }, set: function (t, e) {
            var n = v(this, t);
            n ? n[1] = e : this.a.push([t, e])
        }, delete: function (t) {
            var e = f(this.a, function (e) {
                return e[0] === t
            });
            return ~e && this.a.splice(e, 1), !!~e
        }
    }, t.exports = {
        getConstructor: function (t, e, n, o) {
            var c = t(function (t, r) {
                s(t, c, e, "_i"), t._i = d++, t._l = void 0, void 0 != r && l(r, n, t[o], t)
            });
            return r(c.prototype, {
                delete: function (t) {
                    if (!a(t))return !1;
                    var e = i(t);
                    return e === !0 ? p(this).delete(t) : e && u(e, this._i) && delete e[this._i]
                }, has: function (t) {
                    if (!a(t))return !1;
                    var e = i(t);
                    return e === !0 ? p(this).has(t) : e && u(e, this._i)
                }
            }), c
        }, def: function (t, e, n) {
            var r = i(o(e), !0);
            return r === !0 ? p(t).set(e, n) : r[t._i] = n, t
        }, ufstore: p
    }
}, function (t, e, n) {
    "use strict";
    var r = n(216);
    n(213)("WeakSet", function (t) {
        return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function (t) {
            return r.def(this, t, !0)
        }
    }, r, !1, !0)
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(219), o = n(220), a = n(12), s = n(39), l = n(37), c = n(13), u = n(4).ArrayBuffer, h = n(207), f = o.ArrayBuffer, d = o.DataView, p = i.ABV && u.isView, m = f.prototype.slice, v = i.VIEW, g = "ArrayBuffer";
    r(r.G + r.W + r.F * (u !== f), {ArrayBuffer: f}), r(r.S + r.F * !i.CONSTR, g, {
        isView: function (t) {
            return p && p(t) || c(t) && v in t
        }
    }), r(r.P + r.U + r.F * n(7)(function () {
          return !new f(2).slice(1, void 0).byteLength
      }), g, {
        slice: function (t, e) {
            if (void 0 !== m && void 0 === e)return m.call(a(this), t);
            for (var n = a(this).byteLength, r = s(t, n), i = s(void 0 === e ? n : e, n), o = new (h(this, f))(l(i - r)), c = new d(this), u = new d(o), p = 0; r < i;)u.setUint8(p++, c.getUint8(r++));
            return o
        }
    }), n(192)(g)
}, function (t, e, n) {
    for (var r, i = n(4), o = n(10), a = n(19), s = a("typed_array"), l = a("view"), c = !(!i.ArrayBuffer || !i.DataView), u = c, h = 0, f = 9, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); h < f;)(r = i[d[h++]]) ? (o(r.prototype, s, !0), o(r.prototype, l, !0)) : u = !1;
    t.exports = {ABV: c, CONSTR: u, TYPED: s, VIEW: l}
}, function (t, e, n) {
    "use strict";
    var r = n(4), i = n(6), o = n(28), a = n(219), s = n(10), l = n(210), c = n(7), u = n(205), h = n(38), f = n(37), d = n(50).f, p = n(11).f, m = n(188), v = n(24), g = "ArrayBuffer", y = "DataView", x = "prototype", _ = "Wrong length!", b = "Wrong index!", w = r[g], M = r[y], S = r.Math, E = r.RangeError, T = r.Infinity, A = w, L = S.abs, C = S.pow, P = S.floor, R = S.log, I = S.LN2, F = "buffer", O = "byteLength", B = "byteOffset", U = i ? "_b" : F, D = i ? "_l" : O, N = i ? "_o" : B, z = function (t, e, n) {
        var r, i, o, a = Array(n), s = 8 * n - e - 1, l = (1 << s) - 1, c = l >> 1, u = 23 === e ? C(2, -24) - C(2, -77) : 0, h = 0, f = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = L(t), t != t || t === T ? (i = t != t ? 1 : 0, r = l) : (r = P(R(t) / I), t * (o = C(2, -r)) < 1 && (r--, o *= 2), t += r + c >= 1 ? u / o : u * C(2, 1 - c), t * o >= 2 && (r++, o /= 2), r + c >= l ? (i = 0, r = l) : r + c >= 1 ? (i = (t * o - 1) * C(2, e), r += c) : (i = t * C(2, c - 1) * C(2, e), r = 0)); e >= 8; a[h++] = 255 & i, i /= 256, e -= 8);
        for (r = r << e | i, s += e; s > 0; a[h++] = 255 & r, r /= 256, s -= 8);
        return a[--h] |= 128 * f, a
    }, G = function (t, e, n) {
        var r, i = 8 * n - e - 1, o = (1 << i) - 1, a = o >> 1, s = i - 7, l = n - 1, c = t[l--], u = 127 & c;
        for (c >>= 7; s > 0; u = 256 * u + t[l], l--, s -= 8);
        for (r = u & (1 << -s) - 1, u >>= -s, s += e; s > 0; r = 256 * r + t[l], l--, s -= 8);
        if (0 === u) u = 1 - a; else {
            if (u === o)return r ? NaN : c ? -T : T;
            r += C(2, e), u -= a
        }
        return (c ? -1 : 1) * r * C(2, u - e)
    }, V = function (t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
    }, k = function (t) {
        return [255 & t]
    }, j = function (t) {
        return [255 & t, t >> 8 & 255]
    }, H = function (t) {
        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
    }, W = function (t) {
        return z(t, 52, 8)
    }, X = function (t) {
        return z(t, 23, 4)
    }, q = function (t, e, n) {
        p(t[x], e, {
            get: function () {
                return this[n]
            }
        })
    }, Y = function (t, e, n, r) {
        var i = +n, o = h(i);
        if (i != o || o < 0 || o + e > t[D])throw E(b);
        var a = t[U]._b, s = o + t[N], l = a.slice(s, s + e);
        return r ? l : l.reverse()
    }, Z = function (t, e, n, r, i, o) {
        var a = +n, s = h(a);
        if (a != s || s < 0 || s + e > t[D])throw E(b);
        for (var l = t[U]._b, c = s + t[N], u = r(+i), f = 0; f < e; f++)l[c + f] = u[o ? f : e - f - 1]
    }, K = function (t, e) {
        u(t, w, g);
        var n = +e, r = f(n);
        if (n != r)throw E(_);
        return r
    };
    if (a.ABV) {
        if (!c(function () {
              new w
          }) || !c(function () {
              new w(.5)
          })) {
            w = function (t) {
                return new A(K(this, t))
            };
            for (var Q, J = w[x] = A[x], $ = d(A), tt = 0; $.length > tt;)(Q = $[tt++]) in w || s(w, Q, A[Q]);
            o || (J.constructor = w)
        }
        var et = new M(new w(2)), nt = M[x].setInt8;
        et.setInt8(0, 2147483648), et.setInt8(1, 2147483649), !et.getInt8(0) && et.getInt8(1) || l(M[x], {
            setInt8: function (t, e) {
                nt.call(this, t, e << 24 >> 24)
            }, setUint8: function (t, e) {
                nt.call(this, t, e << 24 >> 24)
            }
        }, !0)
    } else w = function (t) {
        var e = K(this, t);
        this._b = m.call(Array(e), 0), this[D] = e
    }, M = function (t, e, n) {
        u(this, M, y), u(t, w, y);
        var r = t[D], i = h(e);
        if (i < 0 || i > r)throw E("Wrong offset!");
        if (n = void 0 === n ? r - i : f(n), i + n > r)throw E(_);
        this[U] = t, this[N] = i, this[D] = n
    }, i && (q(w, O, "_l"), q(M, F, "_b"), q(M, O, "_l"), q(M, B, "_o")), l(M[x], {
        getInt8: function (t) {
            return Y(this, 1, t)[0] << 24 >> 24
        }, getUint8: function (t) {
            return Y(this, 1, t)[0]
        }, getInt16: function (t) {
            var e = Y(this, 2, t, arguments[1]);
            return (e[1] << 8 | e[0]) << 16 >> 16
        }, getUint16: function (t) {
            var e = Y(this, 2, t, arguments[1]);
            return e[1] << 8 | e[0]
        }, getInt32: function (t) {
            return V(Y(this, 4, t, arguments[1]))
        }, getUint32: function (t) {
            return V(Y(this, 4, t, arguments[1])) >>> 0
        }, getFloat32: function (t) {
            return G(Y(this, 4, t, arguments[1]), 23, 4)
        }, getFloat64: function (t) {
            return G(Y(this, 8, t, arguments[1]), 52, 8)
        }, setInt8: function (t, e) {
            Z(this, 1, t, k, e)
        }, setUint8: function (t, e) {
            Z(this, 1, t, k, e)
        }, setInt16: function (t, e) {
            Z(this, 2, t, j, e, arguments[2])
        }, setUint16: function (t, e) {
            Z(this, 2, t, j, e, arguments[2])
        }, setInt32: function (t, e) {
            Z(this, 4, t, H, e, arguments[2])
        }, setUint32: function (t, e) {
            Z(this, 4, t, H, e, arguments[2])
        }, setFloat32: function (t, e) {
            Z(this, 4, t, X, e, arguments[2])
        }, setFloat64: function (t, e) {
            Z(this, 8, t, W, e, arguments[2])
        }
    });
    v(w, g), v(M, y), s(M[x], a.VIEW, !0), e[g] = w, e[y] = M
}, function (t, e, n) {
    var r = n(8);
    r(r.G + r.W + r.F * !n(219).ABV, {DataView: n(220).DataView})
}, function (t, e, n) {
    n(223)("Int8", 1, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    })
}, function (t, e, n) {
    "use strict";
    if (n(6)) {
        var r = n(28), i = n(4), o = n(7), a = n(8), s = n(219), l = n(220), c = n(20), u = n(205), h = n(17), f = n(10), d = n(210), p = n(38), m = n(37), v = n(39), g = n(16), y = n(5), x = n(71), _ = n(75), b = n(13), w = n(58), M = n(162), S = n(46), E = n(59), T = n(50).f, A = n(164), L = n(19), C = n(25), P = n(172), R = n(36), I = n(207), F = n(193), O = n(129), B = n(165), U = n(192), D = n(188), N = n(185), z = n(11), G = n(51), V = z.f, k = G.f, j = i.RangeError, H = i.TypeError, W = i.Uint8Array, X = "ArrayBuffer", q = "Shared" + X, Y = "BYTES_PER_ELEMENT", Z = "prototype", K = Array[Z], Q = l.ArrayBuffer, J = l.DataView, $ = P(0), tt = P(2), et = P(3), nt = P(4), rt = P(5), it = P(6), ot = R(!0), at = R(!1), st = F.values, lt = F.keys, ct = F.entries, ut = K.lastIndexOf, ht = K.reduce, ft = K.reduceRight, dt = K.join, pt = K.sort, mt = K.slice, vt = K.toString, gt = K.toLocaleString, yt = C("iterator"), xt = C("toStringTag"), _t = L("typed_constructor"), bt = L("def_constructor"), wt = s.CONSTR, Mt = s.TYPED, St = s.VIEW, Et = "Wrong length!", Tt = P(1, function (t, e) {
            return It(I(t, t[bt]), e)
        }), At = o(function () {
            return 1 === new W(new Uint16Array([1]).buffer)[0]
        }), Lt = !!W && !!W[Z].set && o(function () {
              new W(1).set({})
          }), Ct = function (t, e) {
            if (void 0 === t)throw H(Et);
            var n = +t, r = m(t);
            if (e && !x(n, r))throw j(Et);
            return r
        }, Pt = function (t, e) {
            var n = p(t);
            if (n < 0 || n % e)throw j("Wrong offset!");
            return n
        }, Rt = function (t) {
            if (b(t) && Mt in t)return t;
            throw H(t + " is not a typed array!")
        }, It = function (t, e) {
            if (!(b(t) && _t in t))throw H("It is not a typed array constructor!");
            return new t(e)
        }, Ft = function (t, e) {
            return Ot(I(t, t[bt]), e)
        }, Ot = function (t, e) {
            for (var n = 0, r = e.length, i = It(t, r); r > n;)i[n] = e[n++];
            return i
        }, Bt = function (t, e, n) {
            V(t, e, {
                get: function () {
                    return this._d[n]
                }
            })
        }, Ut = function (t) {
            var e, n, r, i, o, a, s = w(t), l = arguments.length, u = l > 1 ? arguments[1] : void 0, h = void 0 !== u, f = A(s);
            if (void 0 != f && !M(f)) {
                for (a = f.call(s), r = [], e = 0; !(o = a.next()).done; e++)r.push(o.value);
                s = r
            }
            for (h && l > 2 && (u = c(u, arguments[2], 2)), e = 0, n = m(s.length), i = It(this, n); n > e; e++)i[e] = h ? u(s[e], e) : s[e];
            return i
        }, Dt = function () {
            for (var t = 0, e = arguments.length, n = It(this, e); e > t;)n[t] = arguments[t++];
            return n
        }, Nt = !!W && o(function () {
              gt.call(new W(1))
          }), zt = function () {
            return gt.apply(Nt ? mt.call(Rt(this)) : Rt(this), arguments)
        }, Gt = {
            copyWithin: function (t, e) {
                return N.call(Rt(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
            }, every: function (t) {
                return nt(Rt(this), t, arguments.length > 1 ? arguments[1] : void 0)
            }, fill: function (t) {
                return D.apply(Rt(this), arguments)
            }, filter: function (t) {
                return Ft(this, tt(Rt(this), t, arguments.length > 1 ? arguments[1] : void 0))
            }, find: function (t) {
                return rt(Rt(this), t, arguments.length > 1 ? arguments[1] : void 0)
            }, findIndex: function (t) {
                return it(Rt(this), t, arguments.length > 1 ? arguments[1] : void 0)
            }, forEach: function (t) {
                $(Rt(this), t, arguments.length > 1 ? arguments[1] : void 0)
            }, indexOf: function (t) {
                return at(Rt(this), t, arguments.length > 1 ? arguments[1] : void 0)
            }, includes: function (t) {
                return ot(Rt(this), t, arguments.length > 1 ? arguments[1] : void 0)
            }, join: function (t) {
                return dt.apply(Rt(this), arguments)
            }, lastIndexOf: function (t) {
                return ut.apply(Rt(this), arguments)
            }, map: function (t) {
                return Tt(Rt(this), t, arguments.length > 1 ? arguments[1] : void 0)
            }, reduce: function (t) {
                return ht.apply(Rt(this), arguments)
            }, reduceRight: function (t) {
                return ft.apply(Rt(this), arguments)
            }, reverse: function () {
                for (var t, e = this, n = Rt(e).length, r = Math.floor(n / 2), i = 0; i < r;)t = e[i], e[i++] = e[--n], e[n] = t;
                return e
            }, some: function (t) {
                return et(Rt(this), t, arguments.length > 1 ? arguments[1] : void 0)
            }, sort: function (t) {
                return pt.call(Rt(this), t)
            }, subarray: function (t, e) {
                var n = Rt(this), r = n.length, i = v(t, r);
                return new (I(n, n[bt]))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, m((void 0 === e ? r : v(e, r)) - i))
            }
        }, Vt = function (t, e) {
            return Ft(this, mt.call(Rt(this), t, e))
        }, kt = function (t) {
            Rt(this);
            var e = Pt(arguments[1], 1), n = this.length, r = w(t), i = m(r.length), o = 0;
            if (i + e > n)throw j(Et);
            for (; o < i;)this[e + o] = r[o++]
        }, jt = {
            entries: function () {
                return ct.call(Rt(this))
            }, keys: function () {
                return lt.call(Rt(this))
            }, values: function () {
                return st.call(Rt(this))
            }
        }, Ht = function (t, e) {
            return b(t) && t[Mt] && "symbol" != typeof e && e in t && String(+e) == String(e)
        }, Wt = function (t, e) {
            return Ht(t, e = g(e, !0)) ? h(2, t[e]) : k(t, e)
        }, Xt = function (t, e, n) {
            return !(Ht(t, e = g(e, !0)) && b(n) && y(n, "value")) || y(n, "get") || y(n, "set") || n.configurable || y(n, "writable") && !n.writable || y(n, "enumerable") && !n.enumerable ? V(t, e, n) : (t[e] = n.value, t)
        };
        wt || (G.f = Wt, z.f = Xt), a(a.S + a.F * !wt, "Object", {
            getOwnPropertyDescriptor: Wt,
            defineProperty: Xt
        }), o(function () {
            vt.call({})
        }) && (vt = gt = function () {
            return dt.call(this)
        });
        var qt = d({}, Gt);
        d(qt, jt), f(qt, yt, jt.values), d(qt, {
            slice: Vt, set: kt, constructor: function () {
            }, toString: vt, toLocaleString: zt
        }), Bt(qt, "buffer", "b"), Bt(qt, "byteOffset", "o"), Bt(qt, "byteLength", "l"), Bt(qt, "length", "e"), V(qt, xt, {
            get: function () {
                return this[Mt]
            }
        }), t.exports = function (t, e, n, l) {
            l = !!l;
            var c = t + (l ? "Clamped" : "") + "Array", h = "Uint8Array" != c, d = "get" + t, p = "set" + t, v = i[c], g = v || {}, y = v && E(v), x = !v || !s.ABV, w = {}, M = v && v[Z], A = function (t, n) {
                var r = t._d;
                return r.v[d](n * e + r.o, At)
            }, L = function (t, n, r) {
                var i = t._d;
                l && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.v[p](n * e + i.o, r, At)
            }, C = function (t, e) {
                V(t, e, {
                    get: function () {
                        return A(this, e)
                    }, set: function (t) {
                        return L(this, e, t)
                    }, enumerable: !0
                })
            };
            x ? (v = n(function (t, n, r, i) {
                  u(t, v, c, "_d");
                  var o, a, s, l, h = 0, d = 0;
                  if (b(n)) {
                      if (!(n instanceof Q || (l = _(n)) == X || l == q))return Mt in n ? Ot(v, n) : Ut.call(v, n);
                      o = n, d = Pt(r, e);
                      var p = n.byteLength;
                      if (void 0 === i) {
                          if (p % e)throw j(Et);
                          if (a = p - d, a < 0)throw j(Et)
                      } else if (a = m(i) * e, a + d > p)throw j(Et);
                      s = a / e
                  } else s = Ct(n, !0), a = s * e, o = new Q(a);
                  for (f(t, "_d", {b: o, o: d, l: a, e: s, v: new J(o)}); h < s;)C(t, h++)
              }), M = v[Z] = S(qt), f(M, "constructor", v)) : B(function (t) {
                  new v(null), new v(t)
              }, !0) || (v = n(function (t, n, r, i) {
                  u(t, v, c);
                  var o;
                  return b(n) ? n instanceof Q || (o = _(n)) == X || o == q ? void 0 !== i ? new g(n, Pt(r, e), i) : void 0 !== r ? new g(n, Pt(r, e)) : new g(n) : Mt in n ? Ot(v, n) : Ut.call(v, n) : new g(Ct(n, h))
              }), $(y !== Function.prototype ? T(g).concat(T(y)) : T(g), function (t) {
                  t in v || f(v, t, g[t])
              }), v[Z] = M, r || (M.constructor = v));
            var P = M[yt], R = !!P && ("values" == P.name || void 0 == P.name), I = jt.values;
            f(v, _t, !0), f(M, Mt, c), f(M, St, !0), f(M, bt, v), (l ? new v(1)[xt] == c : xt in M) || V(M, xt, {
                get: function () {
                    return c
                }
            }), w[c] = v, a(a.G + a.W + a.F * (v != g), w), a(a.S, c, {
                BYTES_PER_ELEMENT: e,
                from: Ut,
                of: Dt
            }), Y in M || f(M, Y, e), a(a.P, c, Gt), U(c), a(a.P + a.F * Lt, c, {set: kt}), a(a.P + a.F * !R, c, jt), a(a.P + a.F * (M.toString != vt), c, {toString: vt}), a(a.P + a.F * o(function () {
                  new v(1).slice()
              }), c, {slice: Vt}), a(a.P + a.F * (o(function () {
                  return [1, 2].toLocaleString() != new v([1, 2]).toLocaleString()
              }) || !o(function () {
                  M.toLocaleString.call([1, 2])
              })), c, {toLocaleString: zt}), O[c] = R ? P : I, r || R || f(M, yt, I)
        }
    } else t.exports = function () {
    }
}, function (t, e, n) {
    n(223)("Uint8", 1, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    })
}, function (t, e, n) {
    n(223)("Uint8", 1, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    }, !0)
}, function (t, e, n) {
    n(223)("Int16", 2, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    })
}, function (t, e, n) {
    n(223)("Uint16", 2, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    })
}, function (t, e, n) {
    n(223)("Int32", 4, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    })
}, function (t, e, n) {
    n(223)("Uint32", 4, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    })
}, function (t, e, n) {
    n(223)("Float32", 4, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    })
}, function (t, e, n) {
    n(223)("Float64", 8, function (t) {
        return function (e, n, r) {
            return t(this, e, n, r)
        }
    })
}, function (t, e, n) {
    var r = n(8), i = n(21), o = n(12), a = (n(4).Reflect || {}).apply, s = Function.apply;
    r(r.S + r.F * !n(7)(function () {
          a(function () {
          })
      }), "Reflect", {
        apply: function (t, e, n) {
            var r = i(t), l = o(n);
            return a ? a(r, e, l) : s.call(r, e, l)
        }
    })
}, function (t, e, n) {
    var r = n(8), i = n(46), o = n(21), a = n(12), s = n(13), l = n(7), c = n(77), u = (n(4).Reflect || {}).construct, h = l(function () {
        function t() {
        }

        return !(u(function () {
        }, [], t) instanceof t)
    }), f = !l(function () {
        u(function () {
        })
    });
    r(r.S + r.F * (h || f), "Reflect", {
        construct: function (t, e) {
            o(t), a(e);
            var n = arguments.length < 3 ? t : o(arguments[2]);
            if (f && !h)return u(t, e, n);
            if (t == n) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var r = [null];
                return r.push.apply(r, e), new (c.apply(t, r))
            }
            var l = n.prototype, d = i(s(l) ? l : Object.prototype), p = Function.apply.call(t, d, e);
            return s(p) ? p : d
        }
    })
}, function (t, e, n) {
    var r = n(11), i = n(8), o = n(12), a = n(16);
    i(i.S + i.F * n(7)(function () {
          Reflect.defineProperty(r.f({}, 1, {value: 1}), 1, {value: 2})
      }), "Reflect", {
        defineProperty: function (t, e, n) {
            o(t), e = a(e, !0), o(n);
            try {
                return r.f(t, e, n), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function (t, e, n) {
    var r = n(8), i = n(51).f, o = n(12);
    r(r.S, "Reflect", {
        deleteProperty: function (t, e) {
            var n = i(o(t), e);
            return !(n && !n.configurable) && delete t[e]
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(12), o = function (t) {
        this._t = i(t), this._i = 0;
        var e, n = this._k = [];
        for (e in t)n.push(e)
    };
    n(130)(o, "Object", function () {
        var t, e = this, n = e._k;
        do if (e._i >= n.length)return {value: void 0, done: !0}; while (!((t = n[e._i++]) in e._t));
        return {value: t, done: !1}
    }), r(r.S, "Reflect", {
        enumerate: function (t) {
            return new o(t)
        }
    })
}, function (t, e, n) {
    function r(t, e) {
        var n, s, u = arguments.length < 3 ? t : arguments[2];
        return c(t) === u ? t[e] : (n = i.f(t, e)) ? a(n, "value") ? n.value : void 0 !== n.get ? n.get.call(u) : void 0 : l(s = o(t)) ? r(s, e, u) : void 0
    }

    var i = n(51), o = n(59), a = n(5), s = n(8), l = n(13), c = n(12);
    s(s.S, "Reflect", {get: r})
}, function (t, e, n) {
    var r = n(51), i = n(8), o = n(12);
    i(i.S, "Reflect", {
        getOwnPropertyDescriptor: function (t, e) {
            return r.f(o(t), e)
        }
    })
}, function (t, e, n) {
    var r = n(8), i = n(59), o = n(12);
    r(r.S, "Reflect", {
        getPrototypeOf: function (t) {
            return i(o(t))
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Reflect", {
        has: function (t, e) {
            return e in t
        }
    })
}, function (t, e, n) {
    var r = n(8), i = n(12), o = Object.isExtensible;
    r(r.S, "Reflect", {
        isExtensible: function (t) {
            return i(t), !o || o(t)
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Reflect", {ownKeys: n(243)})
}, function (t, e, n) {
    var r = n(50), i = n(43), o = n(12), a = n(4).Reflect;
    t.exports = a && a.ownKeys || function (t) {
          var e = r.f(o(t)), n = i.f;
          return n ? e.concat(n(t)) : e
      }
}, function (t, e, n) {
    var r = n(8), i = n(12), o = Object.preventExtensions;
    r(r.S, "Reflect", {
        preventExtensions: function (t) {
            i(t);
            try {
                return o && o(t), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function (t, e, n) {
    function r(t, e, n) {
        var l, f, d = arguments.length < 4 ? t : arguments[3], p = o.f(u(t), e);
        if (!p) {
            if (h(f = a(t)))return r(f, e, n, d);
            p = c(0)
        }
        return s(p, "value") ? !(p.writable === !1 || !h(d)) && (l = o.f(d, e) || c(0), l.value = n, i.f(d, e, l), !0) : void 0 !== p.set && (p.set.call(d, n), !0)
    }

    var i = n(11), o = n(51), a = n(59), s = n(5), l = n(8), c = n(17), u = n(12), h = n(13);
    l(l.S, "Reflect", {set: r})
}, function (t, e, n) {
    var r = n(8), i = n(73);
    i && r(r.S, "Reflect", {
        setPrototypeOf: function (t, e) {
            i.check(t, e);
            try {
                return i.set(t, e), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(36)(!0);
    r(r.P, "Array", {
        includes: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(186)("includes")
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(127)(!0);
    r(r.P, "String", {
        at: function (t) {
            return i(this, t)
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(250);
    r(r.P, "String", {
        padStart: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
        }
    })
}, function (t, e, n) {
    var r = n(37), i = n(91), o = n(35);
    t.exports = function (t, e, n, a) {
        var s = String(o(t)), l = s.length, c = void 0 === n ? " " : String(n), u = r(e);
        if (u <= l || "" == c)return s;
        var h = u - l, f = i.call(c, Math.ceil(h / c.length));
        return f.length > h && (f = f.slice(0, h)), a ? f + s : s + f
    }
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(250);
    r(r.P, "String", {
        padEnd: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
        }
    })
}, function (t, e, n) {
    "use strict";
    n(83)("trimLeft", function (t) {
        return function () {
            return t(this, 1)
        }
    }, "trimStart")
}, function (t, e, n) {
    "use strict";
    n(83)("trimRight", function (t) {
        return function () {
            return t(this, 2)
        }
    }, "trimEnd")
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(35), o = n(37), a = n(134), s = n(196), l = RegExp.prototype, c = function (t, e) {
        this._r = t, this._s = e
    };
    n(130)(c, "RegExp String", function () {
        var t = this._r.exec(this._s);
        return {value: t, done: null === t}
    }), r(r.P, "String", {
        matchAll: function (t) {
            if (i(this), !a(t))throw TypeError(t + " is not a regexp!");
            var e = String(this), n = "flags" in l ? String(t.flags) : s.call(t), r = new RegExp(t.source, ~n.indexOf("g") ? n : "g" + n);
            return r.lastIndex = o(t.lastIndex), new c(r, e)
        }
    })
}, function (t, e, n) {
    n(27)("asyncIterator")
}, function (t, e, n) {
    n(27)("observable")
}, function (t, e, n) {
    var r = n(8), i = n(243), o = n(32), a = n(51), s = n(163);
    r(r.S, "Object", {
        getOwnPropertyDescriptors: function (t) {
            for (var e, n = o(t), r = a.f, l = i(n), c = {}, u = 0; l.length > u;)s(c, e = l[u++], r(n, e));
            return c
        }
    })
}, function (t, e, n) {
    var r = n(8), i = n(259)(!1);
    r(r.S, "Object", {
        values: function (t) {
            return i(t)
        }
    })
}, function (t, e, n) {
    var r = n(30), i = n(32), o = n(44).f;
    t.exports = function (t) {
        return function (e) {
            for (var n, a = i(e), s = r(a), l = s.length, c = 0, u = []; l > c;)o.call(a, n = s[c++]) && u.push(t ? [n, a[n]] : a[n]);
            return u
        }
    }
}, function (t, e, n) {
    var r = n(8), i = n(259)(!0);
    r(r.S, "Object", {
        entries: function (t) {
            return i(t)
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(58), o = n(21), a = n(11);
    n(6) && r(r.P + n(262), "Object", {
        __defineGetter__: function (t, e) {
            a.f(i(this), t, {get: o(e), enumerable: !0, configurable: !0})
        }
    })
}, function (t, e, n) {
    t.exports = n(28) || !n(7)(function () {
          var t = Math.random();
          __defineSetter__.call(null, t, function () {
          }), delete n(4)[t]
      })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(58), o = n(21), a = n(11);
    n(6) && r(r.P + n(262), "Object", {
        __defineSetter__: function (t, e) {
            a.f(i(this), t, {set: o(e), enumerable: !0, configurable: !0})
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(58), o = n(16), a = n(59), s = n(51).f;
    n(6) && r(r.P + n(262), "Object", {
        __lookupGetter__: function (t) {
            var e, n = i(this), r = o(t, !0);
            do if (e = s(n, r))return e.get; while (n = a(n))
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(58), o = n(16), a = n(59), s = n(51).f;
    n(6) && r(r.P + n(262), "Object", {
        __lookupSetter__: function (t) {
            var e, n = i(this), r = o(t, !0);
            do if (e = s(n, r))return e.set; while (n = a(n))
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.P + r.R, "Map", {toJSON: n(267)("Map")})
}, function (t, e, n) {
    var r = n(75), i = n(268);
    t.exports = function (t) {
        return function () {
            if (r(this) != t)throw TypeError(t + "#toJSON isn't generic");
            return i(this)
        }
    }
}, function (t, e, n) {
    var r = n(206);
    t.exports = function (t, e) {
        var n = [];
        return r(t, !1, n.push, n, e), n
    }
}, function (t, e, n) {
    var r = n(8);
    r(r.P + r.R, "Set", {toJSON: n(267)("Set")})
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "System", {global: n(4)})
}, function (t, e, n) {
    var r = n(8), i = n(34);
    r(r.S, "Error", {
        isError: function (t) {
            return "Error" === i(t)
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        iaddh: function (t, e, n, r) {
            var i = t >>> 0, o = e >>> 0, a = n >>> 0;
            return o + (r >>> 0) + ((i & a | (i | a) & ~(i + a >>> 0)) >>> 31) | 0
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        isubh: function (t, e, n, r) {
            var i = t >>> 0, o = e >>> 0, a = n >>> 0;
            return o - (r >>> 0) - ((~i & a | ~(i ^ a) & i - a >>> 0) >>> 31) | 0
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        imulh: function (t, e) {
            var n = 65535, r = +t, i = +e, o = r & n, a = i & n, s = r >> 16, l = i >> 16, c = (s * a >>> 0) + (o * a >>> 16);
            return s * l + (c >> 16) + ((o * l >>> 0) + (c & n) >> 16)
        }
    })
}, function (t, e, n) {
    var r = n(8);
    r(r.S, "Math", {
        umulh: function (t, e) {
            var n = 65535, r = +t, i = +e, o = r & n, a = i & n, s = r >>> 16, l = i >>> 16, c = (s * a >>> 0) + (o * a >>> 16);
            return s * l + (c >>> 16) + ((o * l >>> 0) + (c & n) >>> 16)
        }
    })
}, function (t, e, n) {
    var r = n(277), i = n(12), o = r.key, a = r.set;
    r.exp({
        defineMetadata: function (t, e, n, r) {
            a(t, e, i(n), o(r))
        }
    })
}, function (t, e, n) {
    var r = n(211), i = n(8), o = n(23)("metadata"), a = o.store || (o.store = new (n(215))), s = function (t, e, n) {
        var i = a.get(t);
        if (!i) {
            if (!n)return;
            a.set(t, i = new r)
        }
        var o = i.get(e);
        if (!o) {
            if (!n)return;
            i.set(e, o = new r)
        }
        return o
    }, l = function (t, e, n) {
        var r = s(e, n, !1);
        return void 0 !== r && r.has(t)
    }, c = function (t, e, n) {
        var r = s(e, n, !1);
        return void 0 === r ? void 0 : r.get(t)
    }, u = function (t, e, n, r) {
        s(n, r, !0).set(t, e)
    }, h = function (t, e) {
        var n = s(t, e, !1), r = [];
        return n && n.forEach(function (t, e) {
            r.push(e)
        }), r
    }, f = function (t) {
        return void 0 === t || "symbol" == typeof t ? t : String(t)
    }, d = function (t) {
        i(i.S, "Reflect", t)
    };
    t.exports = {store: a, map: s, has: l, get: c, set: u, keys: h, key: f, exp: d}
}, function (t, e, n) {
    var r = n(277), i = n(12), o = r.key, a = r.map, s = r.store;
    r.exp({
        deleteMetadata: function (t, e) {
            var n = arguments.length < 3 ? void 0 : o(arguments[2]), r = a(i(e), n, !1);
            if (void 0 === r || !r.delete(t))return !1;
            if (r.size)return !0;
            var l = s.get(e);
            return l.delete(n), !!l.size || s.delete(e)
        }
    })
}, function (t, e, n) {
    var r = n(277), i = n(12), o = n(59), a = r.has, s = r.get, l = r.key, c = function (t, e, n) {
        var r = a(t, e, n);
        if (r)return s(t, e, n);
        var i = o(e);
        return null !== i ? c(t, i, n) : void 0
    };
    r.exp({
        getMetadata: function (t, e) {
            return c(t, i(e), arguments.length < 3 ? void 0 : l(arguments[2]))
        }
    })
}, function (t, e, n) {
    var r = n(214), i = n(268), o = n(277), a = n(12), s = n(59), l = o.keys, c = o.key, u = function (t, e) {
        var n = l(t, e), o = s(t);
        if (null === o)return n;
        var a = u(o, e);
        return a.length ? n.length ? i(new r(n.concat(a))) : a : n
    };
    o.exp({
        getMetadataKeys: function (t) {
            return u(a(t), arguments.length < 2 ? void 0 : c(arguments[1]))
        }
    })
}, function (t, e, n) {
    var r = n(277), i = n(12), o = r.get, a = r.key;
    r.exp({
        getOwnMetadata: function (t, e) {
            return o(t, i(e), arguments.length < 3 ? void 0 : a(arguments[2]))
        }
    })
}, function (t, e, n) {
    var r = n(277), i = n(12), o = r.keys, a = r.key;
    r.exp({
        getOwnMetadataKeys: function (t) {
            return o(i(t), arguments.length < 2 ? void 0 : a(arguments[1]))
        }
    })
}, function (t, e, n) {
    var r = n(277), i = n(12), o = n(59), a = r.has, s = r.key, l = function (t, e, n) {
        var r = a(t, e, n);
        if (r)return !0;
        var i = o(e);
        return null !== i && l(t, i, n)
    };
    r.exp({
        hasMetadata: function (t, e) {
            return l(t, i(e), arguments.length < 3 ? void 0 : s(arguments[2]))
        }
    })
}, function (t, e, n) {
    var r = n(277), i = n(12), o = r.has, a = r.key;
    r.exp({
        hasOwnMetadata: function (t, e) {
            return o(t, i(e), arguments.length < 3 ? void 0 : a(arguments[2]))
        }
    })
}, function (t, e, n) {
    var r = n(277), i = n(12), o = n(21), a = r.key, s = r.set;
    r.exp({
        metadata: function (t, e) {
            return function (n, r) {
                s(t, e, (void 0 !== r ? i : o)(n), a(r))
            }
        }
    })
}, function (t, e, n) {
    var r = n(8), i = n(209)(), o = n(4).process, a = "process" == n(34)(o);
    r(r.G, {
        asap: function (t) {
            var e = a && o.domain;
            i(e ? e.bind(t) : t)
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(8), i = n(4), o = n(9), a = n(209)(), s = n(25)("observable"), l = n(21), c = n(12), u = n(205), h = n(210), f = n(10), d = n(206), p = d.RETURN, m = function (t) {
        return null == t ? void 0 : l(t)
    }, v = function (t) {
        var e = t._c;
        e && (t._c = void 0, e())
    }, g = function (t) {
        return void 0 === t._o
    }, y = function (t) {
        g(t) || (t._o = void 0, v(t))
    }, x = function (t, e) {
        c(t), this._c = void 0, this._o = t, t = new _(this);
        try {
            var n = e(t), r = n;
            null != n && ("function" == typeof n.unsubscribe ? n = function () {
                  r.unsubscribe()
              } : l(n), this._c = n)
        } catch (e) {
            return void t.error(e)
        }
        g(this) && v(this)
    };
    x.prototype = h({}, {
        unsubscribe: function () {
            y(this)
        }
    });
    var _ = function (t) {
        this._s = t
    };
    _.prototype = h({}, {
        next: function (t) {
            var e = this._s;
            if (!g(e)) {
                var n = e._o;
                try {
                    var r = m(n.next);
                    if (r)return r.call(n, t)
                } catch (t) {
                    try {
                        y(e)
                    } finally {
                        throw t
                    }
                }
            }
        }, error: function (t) {
            var e = this._s;
            if (g(e))throw t;
            var n = e._o;
            e._o = void 0;
            try {
                var r = m(n.error);
                if (!r)throw t;
                t = r.call(n, t)
            } catch (t) {
                try {
                    v(e)
                } finally {
                    throw t
                }
            }
            return v(e), t
        }, complete: function (t) {
            var e = this._s;
            if (!g(e)) {
                var n = e._o;
                e._o = void 0;
                try {
                    var r = m(n.complete);
                    t = r ? r.call(n, t) : void 0
                } catch (t) {
                    try {
                        v(e)
                    } finally {
                        throw t
                    }
                }
                return v(e), t
            }
        }
    });
    var b = function (t) {
        u(this, b, "Observable", "_f")._f = l(t)
    };
    h(b.prototype, {
        subscribe: function (t) {
            return new x(t, this._f)
        }, forEach: function (t) {
            var e = this;
            return new (o.Promise || i.Promise)(function (n, r) {
                l(t);
                var i = e.subscribe({
                    next: function (e) {
                        try {
                            return t(e)
                        } catch (t) {
                            r(t), i.unsubscribe()
                        }
                    }, error: r, complete: n
                })
            })
        }
    }), h(b, {
        from: function (t) {
            var e = "function" == typeof this ? this : b, n = m(c(t)[s]);
            if (n) {
                var r = c(n.call(t));
                return r.constructor === e ? r : new e(function (t) {
                      return r.subscribe(t)
                  })
            }
            return new e(function (e) {
                var n = !1;
                return a(function () {
                    if (!n) {
                        try {
                            if (d(t, !1, function (t) {
                                  if (e.next(t), n)return p
                              }) === p)return
                        } catch (t) {
                            if (n)throw t;
                            return void e.error(t)
                        }
                        e.complete()
                    }
                }), function () {
                    n = !0
                }
            })
        }, of: function () {
            for (var t = 0, e = arguments.length, n = Array(e); t < e;)n[t] = arguments[t++];
            return new ("function" == typeof this ? this : b)(function (t) {
                var e = !1;
                return a(function () {
                    if (!e) {
                        for (var r = 0; r < n.length; ++r)if (t.next(n[r]), e)return;
                        t.complete()
                    }
                }), function () {
                    e = !0
                }
            })
        }
    }), f(b.prototype, s, function () {
        return this
    }), r(r.G, {Observable: b}), n(192)("Observable")
}, function (t, e, n) {
    var r = n(4), i = n(8), o = n(78), a = n(289), s = r.navigator, l = !!s && /MSIE .\./.test(s.userAgent), c = function (t) {
        return l ? function (e, n) {
              return t(o(a, [].slice.call(arguments, 2), "function" == typeof e ? e : Function(e)), n)
          } : t
    };
    i(i.G + i.B + i.F * l, {setTimeout: c(r.setTimeout), setInterval: c(r.setInterval)})
}, function (t, e, n) {
    "use strict";
    var r = n(290), i = n(78), o = n(21);
    t.exports = function () {
        for (var t = o(this), e = arguments.length, n = Array(e), a = 0, s = r._, l = !1; e > a;)(n[a] = arguments[a++]) === s && (l = !0);
        return function () {
            var r, o = this, a = arguments.length, c = 0, u = 0;
            if (!l && !a)return i(t, n, o);
            if (r = n.slice(), l)for (; e > c; c++)r[c] === s && (r[c] = arguments[u++]);
            for (; a > u;)r.push(arguments[u++]);
            return i(t, r, o)
        }
    }
}, function (t, e, n) {
    t.exports = n(4)
}, function (t, e, n) {
    var r = n(8), i = n(208);
    r(r.G + r.B, {setImmediate: i.set, clearImmediate: i.clear})
}, function (t, e, n) {
    for (var r = n(193), i = n(18), o = n(4), a = n(10), s = n(129), l = n(25), c = l("iterator"), u = l("toStringTag"), h = s.Array, f = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], d = 0; d < 5; d++) {
        var p, m = f[d], v = o[m], g = v && v.prototype;
        if (g) {
            g[c] || a(g, c, h), g[u] || a(g, u, m), s[m] = h;
            for (p in r)g[p] || i(g, p, r[p], !0)
        }
    }
}, function (t, e) {
    (function (e) {
        !function (e) {
            "use strict";
            function n(t, e, n, r) {
                var o = e && e.prototype instanceof i ? e : i, a = Object.create(o.prototype), s = new d(r || []);
                return a._invoke = c(t, n, s), a
            }

            function r(t, e, n) {
                try {
                    return {type: "normal", arg: t.call(e, n)}
                } catch (t) {
                    return {type: "throw", arg: t}
                }
            }

            function i() {
            }

            function o() {
            }

            function a() {
            }

            function s(t) {
                ["next", "throw", "return"].forEach(function (e) {
                    t[e] = function (t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function l(t) {
                function n(e, i, o, a) {
                    var s = r(t[e], t, i);
                    if ("throw" !== s.type) {
                        var l = s.arg, c = l.value;
                        return c && "object" == typeof c && y.call(c, "__await") ? Promise.resolve(c.__await).then(function (t) {
                              n("next", t, o, a)
                          }, function (t) {
                              n("throw", t, o, a)
                          }) : Promise.resolve(c).then(function (t) {
                              l.value = t, o(l)
                          }, a)
                    }
                    a(s.arg)
                }

                function i(t, e) {
                    function r() {
                        return new Promise(function (r, i) {
                            n(t, e, r, i)
                        })
                    }

                    return o = o ? o.then(r, r) : r()
                }

                "object" == typeof e.process && e.process.domain && (n = e.process.domain.bind(n));
                var o;
                this._invoke = i
            }

            function c(t, e, n) {
                var i = E;
                return function (o, a) {
                    if (i === A)throw new Error("Generator is already running");
                    if (i === L) {
                        if ("throw" === o)throw a;
                        return m()
                    }
                    for (n.method = o, n.arg = a; ;) {
                        var s = n.delegate;
                        if (s) {
                            var l = u(s, n);
                            if (l) {
                                if (l === C)continue;
                                return l
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if (i === E)throw i = L, n.arg;
                            n.dispatchException(n.arg)
                        } else"return" === n.method && n.abrupt("return", n.arg);
                        i = A;
                        var c = r(t, e, n);
                        if ("normal" === c.type) {
                            if (i = n.done ? L : T, c.arg === C)continue;
                            return {value: c.arg, done: n.done}
                        }
                        "throw" === c.type && (i = L, n.method = "throw", n.arg = c.arg)
                    }
                }
            }

            function u(t, e) {
                var n = t.iterator[e.method];
                if (n === v) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = v, u(t, e), "throw" === e.method))return C;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return C
                }
                var i = r(n, t.iterator, e.arg);
                if ("throw" === i.type)return e.method = "throw", e.arg = i.arg, e.delegate = null, C;
                var o = i.arg;
                return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = v), e.delegate = null, C) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, C)
            }

            function h(t) {
                var e = {tryLoc: t[0]};
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function f(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function d(t) {
                this.tryEntries = [{tryLoc: "root"}], t.forEach(h, this), this.reset(!0)
            }

            function p(t) {
                if (t) {
                    var e = t[_];
                    if (e)return e.call(t);
                    if ("function" == typeof t.next)return t;
                    if (!isNaN(t.length)) {
                        var n = -1, r = function e() {
                            for (; ++n < t.length;)if (y.call(t, n))return e.value = t[n], e.done = !1, e;
                            return e.value = v, e.done = !0, e
                        };
                        return r.next = r
                    }
                }
                return {next: m}
            }

            function m() {
                return {value: v, done: !0}
            }

            var v, g = Object.prototype, y = g.hasOwnProperty, x = "function" == typeof Symbol ? Symbol : {}, _ = x.iterator || "@@iterator", b = x.asyncIterator || "@@asyncIterator", w = x.toStringTag || "@@toStringTag", M = "object" == typeof t, S = e.regeneratorRuntime;
            if (S)return void(M && (t.exports = S));
            S = e.regeneratorRuntime = M ? t.exports : {}, S.wrap = n;
            var E = "suspendedStart", T = "suspendedYield", A = "executing", L = "completed", C = {}, P = {};
            P[_] = function () {
                return this
            };
            var R = Object.getPrototypeOf, I = R && R(R(p([])));
            I && I !== g && y.call(I, _) && (P = I);
            var F = a.prototype = i.prototype = Object.create(P);
            o.prototype = F.constructor = a, a.constructor = o, a[w] = o.displayName = "GeneratorFunction", S.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === o || "GeneratorFunction" === (e.displayName || e.name))
            }, S.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, a) : (t.__proto__ = a, w in t || (t[w] = "GeneratorFunction")), t.prototype = Object.create(F), t
            }, S.awrap = function (t) {
                return {__await: t}
            }, s(l.prototype), l.prototype[b] = function () {
                return this
            }, S.AsyncIterator = l, S.async = function (t, e, r, i) {
                var o = new l(n(t, e, r, i));
                return S.isGeneratorFunction(e) ? o : o.next().then(function (t) {
                      return t.done ? t.value : o.next()
                  })
            }, s(F), F[w] = "Generator", F[_] = function () {
                return this
            }, F.toString = function () {
                return "[object Generator]"
            }, S.keys = function (t) {
                var e = [];
                for (var n in t)e.push(n);
                return e.reverse(), function n() {
                    for (; e.length;) {
                        var r = e.pop();
                        if (r in t)return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
            }, S.values = p, d.prototype = {
                constructor: d, reset: function (t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = v, this.done = !1, this.delegate = null, this.method = "next", this.arg = v, this.tryEntries.forEach(f), !t)for (var e in this)"t" === e.charAt(0) && y.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = v)
                }, stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0], e = t.completion;
                    if ("throw" === e.type)throw e.arg;
                    return this.rval
                }, dispatchException: function (t) {
                    function e(e, r) {
                        return o.type = "throw", o.arg = t, n.next = e, r && (n.method = "next", n.arg = v), !!r
                    }

                    if (this.done)throw t;
                    for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r], o = i.completion;
                        if ("root" === i.tryLoc)return e("end");
                        if (i.tryLoc <= this.prev) {
                            var a = y.call(i, "catchLoc"), s = y.call(i, "finallyLoc");
                            if (a && s) {
                                if (this.prev < i.catchLoc)return e(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)return e(i.finallyLoc)
                            } else if (a) {
                                if (this.prev < i.catchLoc)return e(i.catchLoc, !0)
                            } else {
                                if (!s)throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)return e(i.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && y.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var i = r;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var o = i ? i.completion : {};
                    return o.type = t, o.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, C) : this.complete(o)
                }, complete: function (t, e) {
                    if ("throw" === t.type)throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), C
                }, finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t)return this.complete(n.completion, n.afterLoc), f(n), C
                    }
                }, catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                f(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (t, e, n) {
                    return this.delegate = {
                        iterator: p(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = v), C
                }
            }
        }("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this)
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    n(295), t.exports = n(9).RegExp.escape
}, function (t, e, n) {
    var r = n(8), i = n(296)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
    r(r.S, "RegExp", {
        escape: function (t) {
            return i(t)
        }
    })
}, function (t, e) {
    t.exports = function (t, e) {
        var n = e === Object(e) ? function (t) {
              return e[t]
          } : e;
        return function (e) {
            return String(e).replace(t, n)
        }
    }
}, function (t, e, n) {
    "use strict";
    function r(t) {
        if (t && t.__esModule)return t;
        var e = {};
        if (null != t)for (var n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }

    function i(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function o(t) {
        return new Promise(function (e, n) {
            setTimeout(e, t)
        })
    }

    function a(t) {
        var e, n, r, i, a, s, l, c, u, h, f, d, p, m;
        return regeneratorRuntime.async(function (v) {
            for (; ;)switch (v.prev = v.next) {
                case 0:
                    return v.next = 2, regeneratorRuntime.awrap(o(500));
                case 2:
                    e = ["Initializing......", "Well, here we are.", "Welcome to HackGT: New Heights"], n = !0, r = !1, i = void 0, v.prev = 6, a = e[Symbol.iterator]();
                case 8:
                    if (n = (s = a.next()).done) {
                        v.next = 47;
                        break
                    }
                    l = s.value, t.textContent = "", c = !0, u = !1, h = void 0, v.prev = 14, f = l[Symbol.iterator]();
                case 16:
                    if (c = (d = f.next()).done) {
                        v.next = 26;
                        break
                    }
                    return p = d.value, t.textContent += p, m = 20 * Math.random() + 100, [",", ".", "!", "?", "\n"].indexOf(p) !== -1 && (m *= 3), v.next = 23, regeneratorRuntime.awrap(o(m));
                case 23:
                    c = !0, v.next = 16;
                    break;
                case 26:
                    v.next = 32;
                    break;
                case 28:
                    v.prev = 28, v.t0 = v.catch(14), u = !0, h = v.t0;
                case 32:
                    v.prev = 32, v.prev = 33, !c && f.return && f.return();
                case 35:
                    if (v.prev = 35, !u) {
                        v.next = 38;
                        break
                    }
                    throw h;
                case 38:
                    return v.finish(35);
                case 39:
                    return v.finish(32);
                case 40:
                    return t.classList.add("idle"), v.next = 43, regeneratorRuntime.awrap(o(1e3));
                case 43:
                    t.classList.remove("idle");
                case 44:
                    n = !0, v.next = 8;
                    break;
                case 47:
                    v.next = 53;
                    break;
                case 49:
                    v.prev = 49, v.t1 = v.catch(6), r = !0, i = v.t1;
                case 53:
                    v.prev = 53, v.prev = 54, !n && a.return && a.return();
                case 56:
                    if (v.prev = 56, !r) {
                        v.next = 59;
                        break
                    }
                    throw i;
                case 59:
                    return v.finish(56);
                case 60:
                    return v.finish(53);
                case 61:
                    return t.classList.add("idle"), v.next = 64, regeneratorRuntime.awrap(o(500));
                case 64:
                case"end":
                    return v.stop()
            }
        }, null, this, [[6, 49, 53, 61], [14, 28, 32, 40], [33, , 35, 39], [54, , 56, 60]])
    }

    var s = n(298), l = i(s), c = n(310), u = i(c), h = n(311), f = i(h), d = n(312), p = i(d), m = n(314), v = r(m), g = n(302), y = i(g), x = n(315), _ = i(x);
    window.onload = function () {
        var t, e, n, r, i, s, c, h, d, m, g, x, b, w, M, S, E, T, A, L, C, P;
        return regeneratorRuntime.async(function (R) {
            for (; ;)switch (R.prev = R.next) {
                case 0:
                    return t = new l.default({
                        camera: {fov: 30, near: .1, far: 1500},
                        antialias: !0
                    }), t.camera.position.set(0, 0, 1200), t.camera.lookAt(new y.default.Vector3(0, 0, 0)), t.render(), e = new u.default({
                        date: "2017/10/13",
                        font: v,
                        size: 20,
                        height: 10,
                        curveSegments: 4,
                        color: {font: 16777215, font_side: 11184810}
                    }), n = new f.default({
                        text: "HACKGT 4",
                        font: v,
                        size: 40,
                        height: 10,
                        curveSegments: 4,
                        color: {font: 16777215, font_side: 11184810}
                    }), n.mesh.position.y = 100, n.mesh.position.z = 100, n.mesh.rotation.x = -.3, n.mesh.rotation.y = 2 * Math.PI, r = new f.default({
                        text: "Oct. 13-15",
                        font: v,
                        size: 40,
                        height: 10,
                        curveSegments: 4,
                        color: {font: 16777215, font_side: 11184810}
                    }), r.mesh.position.y = 10, r.mesh.position.z = 100, r.mesh.rotation.x = 0, r.mesh.rotation.y = 2 * Math.PI, e.mesh.position.y = -50, e.mesh.position.z = 100, e.mesh.rotation.x = .3, e.mesh.rotation.y = 2 * Math.PI, i = new y.default.Texture, i.image = document.querySelector(".star-sky"), i.format = y.default.RGBFormat, i.needsUpdate = !0, s = new y.default.Mesh(new y.default.PlaneGeometry(2e3, 1e3, 0), new y.default.MeshBasicMaterial({map: i})), s.position.x = 0, s.position.y = -50, s.position.z = -200, s.rotation.x = 0, s.rotation.y = 2 * Math.PI, t.add({
                        mesh: s,
                        update: function () {
                        }
                    }), t.add(e), t.add(n), t.add(r), c = new p.default, c.renderToScreen = !0, t.composer.addPass(c), h = function (t) {
                        var e = t.getBoundingClientRect();
                        return e.top >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                    }, d = document.getElementsByClassName("hex-commands")[0], m = !1, document.querySelector("p.skip-intro").addEventListener("click", function (t) {
                        document.getElementsByClassName("cover")[0].classList.add("hidden")
                    }), g = void 0, x = function (t) {
                        document.querySelector(".hex-commands > svg." + t).classList.add("draw"), document.querySelector("input.prompt").value != t && (document.querySelector("input.prompt").value = ""), document.querySelector("input.prompt").value = t, E(t)
                    }, b = function (t) {
                        document.querySelector(".hex-commands > svg." + t).classList.remove("draw"), g && (E(g), document.querySelector("input.prompt").value = g)
                    }, w = function (t) {
                        document.querySelector("div.event-info > div.content > div." + t).classList.add("visible")
                    }, M = function (t) {
                        document.querySelector("div.event-info > div.content > div." + t).classList.remove("visible")
                    }, S = new Set(["about", "register", "sponsor", "atl", "social"]), E = function (t) {
                        S.forEach(M), t = t.toLowerCase(), S.has(t) && w(t)
                    }, T = function (t) {
                        g && (document.querySelector(".hex-commands > svg." + g).classList.remove("selected"), document.querySelector(".hex-commands > img." + g + "-on").classList.remove("selected"), document.querySelector(".hex-commands > img." + g).classList.remove("selected")), t != g ? (g = t, document.querySelector(".hex-commands > svg." + t).classList.add("selected"), document.querySelector(".hex-commands > img." + t + "-on").classList.add("selected"), document.querySelector(".hex-commands > img." + t).classList.add("selected"), document.querySelector("input.prompt").value = t, E(t)) : g = void 0
                    }, A = function () {
                        var t, e, n, r, i, a, s, l;
                        return regeneratorRuntime.async(function (c) {
                            for (; ;)switch (c.prev = c.next) {
                                case 0:
                                    if (m || !h(d)) {
                                        c.next = 31;
                                        break
                                    }
                                    return t = document.querySelector(".hex-commands > p"), e = document.querySelectorAll(".hex-commands > img.register, .hex-commands > img.about, .hex-commands > img.sponsor, .hex-commands > img.atl, .hex-commands > img.social"), m = !0, c.next = 6, regeneratorRuntime.awrap(o(500));
                                case 6:
                                    return t.classList.add("fadeout"), c.next = 9, regeneratorRuntime.awrap(o(500));
                                case 9:
                                    for (n = !0, r = !1, i = void 0, c.prev = 12, a = e[Symbol.iterator](); !(n = (s = a.next()).done); n = !0)l = s.value, l.classList.add("animate");
                                    c.next = 20;
                                    break;
                                case 16:
                                    c.prev = 16, c.t0 = c.catch(12), r = !0, i = c.t0;
                                case 20:
                                    c.prev = 20, c.prev = 21, !n && a.return && a.return();
                                case 23:
                                    if (c.prev = 23, !r) {
                                        c.next = 26;
                                        break
                                    }
                                    throw i;
                                case 26:
                                    return c.finish(23);
                                case 27:
                                    return c.finish(20);
                                case 28:
                                    return c.next = 30, regeneratorRuntime.awrap(o(1e3));
                                case 30:
                                    T("about");
                                case 31:
                                case"end":
                                    return c.stop()
                            }
                        }, null, void 0, [[12, 16, 20, 28], [21, , 23, 27]])
                    }, document.addEventListener("scroll", A, !1), document.addEventListener("touchmove", A, !1), R.next = 53, regeneratorRuntime.awrap(A());
                case 53:
                    for (document.body.addEventListener("keypress", function () {
                        h(d) || (0, _.default)(".event-info")
                    }, !1), document.querySelector("input.prompt").addEventListener("input", function (t) {
                        E(t.target.value)
                    }), L = ["about", "register", "sponsor", "atl", "social"], C = function () {
                        var t = L[P];
                        document.querySelector(".hex-commands > img." + t + "-on").addEventListener("mouseenter", function (e) {
                            x(t)
                        }), document.querySelector(".hex-commands > img." + t + "-on").addEventListener("mouseleave", function (e) {
                            b(t)
                        }), document.querySelector(".hex-commands > img." + t + "-on").addEventListener("click", function (e) {
                            T(t)
                        })
                    }, P = 0; P < L.length; P++)C();
                    return document.querySelector(".effects-toggle").addEventListener("click", function (e) {
                        var n = "turn effects off" == e.target.innerHTML;
                        t.composer.bypass(n), n ? e.target.innerHTML = "turn effects on" : e.target.innerHTML = "turn effects off"
                    }), R.next = 61, regeneratorRuntime.awrap(a(document.getElementById("intro-text")));
                case 61:
                    document.getElementsByClassName("cover")[0].classList.add("hidden");
                case 62:
                case"end":
                    return R.stop()
            }
        }, null, void 0)
    }
}, function (t, e, n) {
    (function (t) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function i(t, e) {
            if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var o = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            return function (e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(), a = n(302), s = r(a), l = n(303), c = r(l), u = n(305), h = r(u), f = function () {
            function e(t) {
                var n = this;
                i(this, e), this.scene = new s.default.Scene, this.renderer = new s.default.WebGLRenderer({antialias: !!t.antialias}), this.camera = new s.default.PerspectiveCamera(t.camera.fov || 75, window.innerWidth / window.innerHeight, t.camera.near || .1, t.camera.far || 1e3), this.renderer.setSize(window.innerWidth, window.innerHeight), this.renderer.domElement.id = "splash-canvas";
                var r = document.getElementById("splash-parent");
                r.appendChild(this.renderer.domElement), r.insertBefore(this.renderer.domElement, r.firstChild), this.renderables = {}, this.state = {ticks: 0}, this.composer = new h.default(this.renderer);
                var o = new c.default(this.scene, this.camera);
                this.composer.addPass(o), window.addEventListener("resize", function () {
                    n.camera.aspect = window.innerWidth / window.innerHeight, n.camera.updateProjectionMatrix(), n.renderer.setSize(window.innerWidth, window.innerHeight), n.controls && n.controls.handleResize()
                }, !1)
            }

            return o(e, [{
                key: "render", value: function () {
                    var e = this;
                    requestAnimationFrame(this.render.bind(this)), this.composer.render(), t(function () {
                        var t = !0, n = !1, r = void 0;
                        try {
                            for (var i, o = Object.keys(e.renderables)[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                var a = i.value;
                                e.renderables[a](e.state)
                            }
                        } catch (t) {
                            n = !0, r = t
                        } finally {
                            try {
                                !t && o.return && o.return()
                            } finally {
                                if (n)throw r
                            }
                        }
                        e.state.ticks += 1, e.controls && e.controls.update()
                    })
                }
            }, {
                key: "add", value: function (t) {
                    if (!(t.mesh && t.mesh.id && t.update))throw new Error("Object did not have a mesh id or update.");
                    this.renderables[t.mesh.id] = t.update.bind(t), this.scene.add(t.mesh)
                }
            }]), e
        }();
        e.default = f
    }).call(e, n(299).setImmediate)
}, function (t, e, n) {
    function r(t, e) {
        this._id = t, this._clearFn = e
    }

    var i = Function.prototype.apply;
    e.setTimeout = function () {
        return new r(i.call(setTimeout, window, arguments), clearTimeout)
    }, e.setInterval = function () {
        return new r(i.call(setInterval, window, arguments), clearInterval)
    }, e.clearTimeout = e.clearInterval = function (t) {
        t && t.close()
    }, r.prototype.unref = r.prototype.ref = function () {
    }, r.prototype.close = function () {
        this._clearFn.call(window, this._id)
    }, e.enroll = function (t, e) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = e
    }, e.unenroll = function (t) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
    }, e._unrefActive = e.active = function (t) {
        clearTimeout(t._idleTimeoutId);
        var e = t._idleTimeout;
        e >= 0 && (t._idleTimeoutId = setTimeout(function () {
            t._onTimeout && t._onTimeout()
        }, e))
    }, n(300), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate
}, function (t, e, n) {
    (function (t, e) {
        !function (t, n) {
            "use strict";
            function r(t) {
                "function" != typeof t && (t = new Function("" + t));
                for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++)e[n] = arguments[n + 1];
                var r = {callback: t, args: e};
                return m[p] = r, d(p), p++
            }

            function i(t) {
                delete m[t]
            }

            function o(t) {
                var e = t.callback, r = t.args;
                switch (r.length) {
                    case 0:
                        e();
                        break;
                    case 1:
                        e(r[0]);
                        break;
                    case 2:
                        e(r[0], r[1]);
                        break;
                    case 3:
                        e(r[0], r[1], r[2]);
                        break;
                    default:
                        e.apply(n, r)
                }
            }

            function a(t) {
                if (v) setTimeout(a, 0, t); else {
                    var e = m[t];
                    if (e) {
                        v = !0;
                        try {
                            o(e)
                        } finally {
                            i(t), v = !1
                        }
                    }
                }
            }

            function s() {
                d = function (t) {
                    e.nextTick(function () {
                        a(t)
                    })
                }
            }

            function l() {
                if (t.postMessage && !t.importScripts) {
                    var e = !0, n = t.onmessage;
                    return t.onmessage = function () {
                        e = !1
                    }, t.postMessage("", "*"), t.onmessage = n, e
                }
            }

            function c() {
                var e = "setImmediate$" + Math.random() + "$", n = function (n) {
                    n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && a(+n.data.slice(e.length))
                };
                t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), d = function (n) {
                    t.postMessage(e + n, "*")
                }
            }

            function u() {
                var t = new MessageChannel;
                t.port1.onmessage = function (t) {
                    var e = t.data;
                    a(e)
                }, d = function (e) {
                    t.port2.postMessage(e)
                }
            }

            function h() {
                var t = g.documentElement;
                d = function (e) {
                    var n = g.createElement("script");
                    n.onreadystatechange = function () {
                        a(e), n.onreadystatechange = null, t.removeChild(n), n = null
                    }, t.appendChild(n)
                }
            }

            function f() {
                d = function (t) {
                    setTimeout(a, 0, t)
                }
            }

            if (!t.setImmediate) {
                var d, p = 1, m = {}, v = !1, g = t.document, y = Object.getPrototypeOf && Object.getPrototypeOf(t);
                y = y && y.setTimeout ? y : t, "[object process]" === {}.toString.call(t.process) ? s() : l() ? c() : t.MessageChannel ? u() : g && "onreadystatechange" in g.createElement("script") ? h() : f(), y.setImmediate = r, y.clearImmediate = i
            }
        }("undefined" == typeof self ? "undefined" == typeof t ? this : t : self)
    }).call(e, function () {
        return this
    }(), n(301))
}, function (t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(t) {
        if (u === setTimeout)return setTimeout(t, 0);
        if ((u === n || !u) && setTimeout)return u = setTimeout, setTimeout(t, 0);
        try {
            return u(t, 0)
        } catch (e) {
            try {
                return u.call(null, t, 0)
            } catch (e) {
                return u.call(this, t, 0)
            }
        }
    }

    function o(t) {
        if (h === clearTimeout)return clearTimeout(t);
        if ((h === r || !h) && clearTimeout)return h = clearTimeout, clearTimeout(t);
        try {
            return h(t)
        } catch (e) {
            try {
                return h.call(null, t)
            } catch (e) {
                return h.call(this, t)
            }
        }
    }

    function a() {
        m && d && (m = !1, d.length ? p = d.concat(p) : v = -1, p.length && s())
    }

    function s() {
        if (!m) {
            var t = i(a);
            m = !0;
            for (var e = p.length; e;) {
                for (d = p, p = []; ++v < e;)d && d[v].run();
                v = -1, e = p.length
            }
            d = null, m = !1, o(t)
        }
    }

    function l(t, e) {
        this.fun = t, this.array = e
    }

    function c() {
    }

    var u, h, f = t.exports = {};
    !function () {
        try {
            u = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            u = n
        }
        try {
            h = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (t) {
            h = r
        }
    }();
    var d, p = [], m = !1, v = -1;
    f.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)for (var n = 1; n < arguments.length; n++)e[n - 1] = arguments[n];
        p.push(new l(t, e)), 1 !== p.length || m || i(s)
    }, l.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, f.removeAllListeners = c, f.emit = c, f.prependListener = c, f.prependOnceListener = c, f.listeners = function (t) {
        return []
    }, f.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function () {
        return "/"
    }, f.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function () {
        return 0
    }
}, function (t, e, n) {
    var r, i, o = {REVISION: "78"};
    r = o, i = "function" == typeof r ? r.call(e, n, e, t) : r, !(void 0 !== i && (t.exports = i)), void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Math.sign && (Math.sign = function (t) {
        return t < 0 ? -1 : t > 0 ? 1 : +t
    }), void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", {
        get: function () {
            return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
        }
    }), void 0 === Object.assign && !function () {
        Object.assign = function (t) {
            "use strict";
            if (void 0 === t || null === t)throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                if (void 0 !== r && null !== r)for (var i in r)Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
            }
            return e
        }
    }(), Object.assign(o, {
        MOUSE: {LEFT: 0, MIDDLE: 1, RIGHT: 2},
        CullFaceNone: 0,
        CullFaceBack: 1,
        CullFaceFront: 2,
        CullFaceFrontBack: 3,
        FrontFaceDirectionCW: 0,
        FrontFaceDirectionCCW: 1,
        BasicShadowMap: 0,
        PCFShadowMap: 1,
        PCFSoftShadowMap: 2,
        FrontSide: 0,
        BackSide: 1,
        DoubleSide: 2,
        FlatShading: 1,
        SmoothShading: 2,
        NoColors: 0,
        FaceColors: 1,
        VertexColors: 2,
        NoBlending: 0,
        NormalBlending: 1,
        AdditiveBlending: 2,
        SubtractiveBlending: 3,
        MultiplyBlending: 4,
        CustomBlending: 5,
        AddEquation: 100,
        SubtractEquation: 101,
        ReverseSubtractEquation: 102,
        MinEquation: 103,
        MaxEquation: 104,
        ZeroFactor: 200,
        OneFactor: 201,
        SrcColorFactor: 202,
        OneMinusSrcColorFactor: 203,
        SrcAlphaFactor: 204,
        OneMinusSrcAlphaFactor: 205,
        DstAlphaFactor: 206,
        OneMinusDstAlphaFactor: 207,
        DstColorFactor: 208,
        OneMinusDstColorFactor: 209,
        SrcAlphaSaturateFactor: 210,
        NeverDepth: 0,
        AlwaysDepth: 1,
        LessDepth: 2,
        LessEqualDepth: 3,
        EqualDepth: 4,
        GreaterEqualDepth: 5,
        GreaterDepth: 6,
        NotEqualDepth: 7,
        MultiplyOperation: 0,
        MixOperation: 1,
        AddOperation: 2,
        NoToneMapping: 0,
        LinearToneMapping: 1,
        ReinhardToneMapping: 2,
        Uncharted2ToneMapping: 3,
        CineonToneMapping: 4,
        UVMapping: 300,
        CubeReflectionMapping: 301,
        CubeRefractionMapping: 302,
        EquirectangularReflectionMapping: 303,
        EquirectangularRefractionMapping: 304,
        SphericalReflectionMapping: 305,
        CubeUVReflectionMapping: 306,
        CubeUVRefractionMapping: 307,
        RepeatWrapping: 1e3,
        ClampToEdgeWrapping: 1001,
        MirroredRepeatWrapping: 1002,
        NearestFilter: 1003,
        NearestMipMapNearestFilter: 1004,
        NearestMipMapLinearFilter: 1005,
        LinearFilter: 1006,
        LinearMipMapNearestFilter: 1007,
        LinearMipMapLinearFilter: 1008,
        UnsignedByteType: 1009,
        ByteType: 1010,
        ShortType: 1011,
        UnsignedShortType: 1012,
        IntType: 1013,
        UnsignedIntType: 1014,
        FloatType: 1015,
        HalfFloatType: 1025,
        UnsignedShort4444Type: 1016,
        UnsignedShort5551Type: 1017,
        UnsignedShort565Type: 1018,
        AlphaFormat: 1019,
        RGBFormat: 1020,
        RGBAFormat: 1021,
        LuminanceFormat: 1022,
        LuminanceAlphaFormat: 1023,
        RGBEFormat: o.RGBAFormat,
        DepthFormat: 1026,
        RGB_S3TC_DXT1_Format: 2001,
        RGBA_S3TC_DXT1_Format: 2002,
        RGBA_S3TC_DXT3_Format: 2003,
        RGBA_S3TC_DXT5_Format: 2004,
        RGB_PVRTC_4BPPV1_Format: 2100,
        RGB_PVRTC_2BPPV1_Format: 2101,
        RGBA_PVRTC_4BPPV1_Format: 2102,
        RGBA_PVRTC_2BPPV1_Format: 2103,
        RGB_ETC1_Format: 2151,
        LoopOnce: 2200,
        LoopRepeat: 2201,
        LoopPingPong: 2202,
        InterpolateDiscrete: 2300,
        InterpolateLinear: 2301,
        InterpolateSmooth: 2302,
        ZeroCurvatureEnding: 2400,
        ZeroSlopeEnding: 2401,
        WrapAroundEnding: 2402,
        TrianglesDrawMode: 0,
        TriangleStripDrawMode: 1,
        TriangleFanDrawMode: 2,
        LinearEncoding: 3e3,
        sRGBEncoding: 3001,
        GammaEncoding: 3007,
        RGBEEncoding: 3002,
        LogLuvEncoding: 3003,
        RGBM7Encoding: 3004,
        RGBM16Encoding: 3005,
        RGBDEncoding: 3006,
        BasicDepthPacking: 3200,
        RGBADepthPacking: 3201
    }), o.Color = function (t, e, n) {
        return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
    }, o.Color.prototype = {
        constructor: o.Color, r: 1, g: 1, b: 1, set: function (t) {
            return t instanceof o.Color ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
        }, setScalar: function (t) {
            this.r = t, this.g = t, this.b = t
        }, setHex: function (t) {
            return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
        }, setRGB: function (t, e, n) {
            return this.r = t, this.g = e, this.b = n, this
        }, setHSL: function () {
            function t(t, e, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
            }

            return function (e, n, r) {
                if (e = o.Math.euclideanModulo(e, 1), n = o.Math.clamp(n, 0, 1), r = o.Math.clamp(r, 0, 1), 0 === n) this.r = this.g = this.b = r; else {
                    var i = r <= .5 ? r * (1 + n) : r + n - r * n, a = 2 * r - i;
                    this.r = t(a, i, e + 1 / 3), this.g = t(a, i, e), this.b = t(a, i, e - 1 / 3)
                }
                return this
            }
        }(), setStyle: function (t) {
            function e(e) {
                void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
            }

            var n;
            if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
                var r, i = n[1], a = n[2];
                switch (i) {
                    case"rgb":
                    case"rgba":
                        if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, e(r[5]), this;
                        if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, e(r[5]), this;
                        break;
                    case"hsl":
                    case"hsla":
                        if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
                            var s = parseFloat(r[1]) / 360, l = parseInt(r[2], 10) / 100, c = parseInt(r[3], 10) / 100;
                            return e(r[5]), this.setHSL(s, l, c)
                        }
                }
            } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                var u = n[1], h = u.length;
                if (3 === h)return this.r = parseInt(u.charAt(0) + u.charAt(0), 16) / 255, this.g = parseInt(u.charAt(1) + u.charAt(1), 16) / 255, this.b = parseInt(u.charAt(2) + u.charAt(2), 16) / 255, this;
                if (6 === h)return this.r = parseInt(u.charAt(0) + u.charAt(1), 16) / 255, this.g = parseInt(u.charAt(2) + u.charAt(3), 16) / 255, this.b = parseInt(u.charAt(4) + u.charAt(5), 16) / 255, this
            }
            if (t && t.length > 0) {
                var u = o.ColorKeywords[t];
                void 0 !== u ? this.setHex(u) : console.warn("THREE.Color: Unknown color " + t)
            }
            return this
        }, clone: function () {
            return new this.constructor(this.r, this.g, this.b)
        }, copy: function (t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this
        }, copyGammaToLinear: function (t, e) {
            return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
        }, copyLinearToGamma: function (t, e) {
            void 0 === e && (e = 2);
            var n = e > 0 ? 1 / e : 1;
            return this.r = Math.pow(t.r, n), this.g = Math.pow(t.g, n), this.b = Math.pow(t.b, n), this
        }, convertGammaToLinear: function () {
            var t = this.r, e = this.g, n = this.b;
            return this.r = t * t, this.g = e * e, this.b = n * n, this
        }, convertLinearToGamma: function () {
            return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
        }, getHex: function () {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        }, getHexString: function () {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        }, getHSL: function (t) {
            var e, n, r = t || {
                  h: 0,
                  s: 0,
                  l: 0
              }, i = this.r, o = this.g, a = this.b, s = Math.max(i, o, a), l = Math.min(i, o, a), c = (l + s) / 2;
            if (l === s) e = 0, n = 0; else {
                var u = s - l;
                switch (n = c <= .5 ? u / (s + l) : u / (2 - s - l), s) {
                    case i:
                        e = (o - a) / u + (o < a ? 6 : 0);
                        break;
                    case o:
                        e = (a - i) / u + 2;
                        break;
                    case a:
                        e = (i - o) / u + 4
                }
                e /= 6
            }
            return r.h = e, r.s = n, r.l = c, r
        }, getStyle: function () {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        }, offsetHSL: function (t, e, n) {
            var r = this.getHSL();
            return r.h += t, r.s += e, r.l += n, this.setHSL(r.h, r.s, r.l), this
        }, add: function (t) {
            return this.r += t.r, this.g += t.g, this.b += t.b, this
        }, addColors: function (t, e) {
            return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
        }, addScalar: function (t) {
            return this.r += t, this.g += t, this.b += t, this
        }, multiply: function (t) {
            return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
        }, multiplyScalar: function (t) {
            return this.r *= t, this.g *= t, this.b *= t, this
        }, lerp: function (t, e) {
            return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
        }, equals: function (t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        }, fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
        }, toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
        }
    }, o.ColorKeywords = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }, o.Quaternion = function (t, e, n, r) {
        this._x = t || 0, this._y = e || 0, this._z = n || 0, this._w = void 0 !== r ? r : 1
    }, o.Quaternion.prototype = {
        constructor: o.Quaternion, get x() {
            return this._x
        }, set x(t) {
            this._x = t, this.onChangeCallback()
        }, get y() {
            return this._y
        }, set y(t) {
            this._y = t, this.onChangeCallback()
        }, get z() {
            return this._z
        }, set z(t) {
            this._z = t, this.onChangeCallback()
        }, get w() {
            return this._w
        }, set w(t) {
            this._w = t, this.onChangeCallback()
        }, set: function (t, e, n, r) {
            return this._x = t, this._y = e, this._z = n, this._w = r, this.onChangeCallback(), this
        }, clone: function () {
            return new this.constructor(this._x, this._y, this._z, this._w)
        }, copy: function (t) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
        }, setFromEuler: function (t, e) {
            if (t instanceof o.Euler == !1)throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var n = Math.cos(t._x / 2), r = Math.cos(t._y / 2), i = Math.cos(t._z / 2), a = Math.sin(t._x / 2), s = Math.sin(t._y / 2), l = Math.sin(t._z / 2), c = t.order;
            return "XYZ" === c ? (this._x = a * r * i + n * s * l, this._y = n * s * i - a * r * l, this._z = n * r * l + a * s * i, this._w = n * r * i - a * s * l) : "YXZ" === c ? (this._x = a * r * i + n * s * l, this._y = n * s * i - a * r * l, this._z = n * r * l - a * s * i, this._w = n * r * i + a * s * l) : "ZXY" === c ? (this._x = a * r * i - n * s * l, this._y = n * s * i + a * r * l, this._z = n * r * l + a * s * i, this._w = n * r * i - a * s * l) : "ZYX" === c ? (this._x = a * r * i - n * s * l, this._y = n * s * i + a * r * l, this._z = n * r * l - a * s * i, this._w = n * r * i + a * s * l) : "YZX" === c ? (this._x = a * r * i + n * s * l, this._y = n * s * i + a * r * l, this._z = n * r * l - a * s * i, this._w = n * r * i - a * s * l) : "XZY" === c && (this._x = a * r * i - n * s * l, this._y = n * s * i - a * r * l, this._z = n * r * l + a * s * i, this._w = n * r * i + a * s * l), e !== !1 && this.onChangeCallback(), this
        }, setFromAxisAngle: function (t, e) {
            var n = e / 2, r = Math.sin(n);
            return this._x = t.x * r, this._y = t.y * r, this._z = t.z * r, this._w = Math.cos(n), this.onChangeCallback(), this
        }, setFromRotationMatrix: function (t) {
            var e, n = t.elements, r = n[0], i = n[4], o = n[8], a = n[1], s = n[5], l = n[9], c = n[2], u = n[6], h = n[10], f = r + s + h;
            return f > 0 ? (e = .5 / Math.sqrt(f + 1), this._w = .25 / e, this._x = (u - l) * e, this._y = (o - c) * e, this._z = (a - i) * e) : r > s && r > h ? (e = 2 * Math.sqrt(1 + r - s - h), this._w = (u - l) / e, this._x = .25 * e, this._y = (i + a) / e, this._z = (o + c) / e) : s > h ? (e = 2 * Math.sqrt(1 + s - r - h), this._w = (o - c) / e, this._x = (i + a) / e, this._y = .25 * e, this._z = (l + u) / e) : (e = 2 * Math.sqrt(1 + h - r - s), this._w = (a - i) / e, this._x = (o + c) / e, this._y = (l + u) / e, this._z = .25 * e), this.onChangeCallback(), this
        }, setFromUnitVectors: function () {
            var t, e, n = 1e-6;
            return function (r, i) {
                return void 0 === t && (t = new o.Vector3), e = r.dot(i) + 1, e < n ? (e = 0, Math.abs(r.x) > Math.abs(r.z) ? t.set(-r.y, r.x, 0) : t.set(0, -r.z, r.y)) : t.crossVectors(r, i), this._x = t.x, this._y = t.y, this._z = t.z, this._w = e, this.normalize()
            }
        }(), inverse: function () {
            return this.conjugate().normalize()
        }, conjugate: function () {
            return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
        }, dot: function (t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        }, lengthSq: function () {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        }, length: function () {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        }, normalize: function () {
            var t = this.length();
            return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this.onChangeCallback(), this
        }, multiply: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
        }, premultiply: function (t) {
            return this.multiplyQuaternions(t, this)
        }, multiplyQuaternions: function (t, e) {
            var n = t._x, r = t._y, i = t._z, o = t._w, a = e._x, s = e._y, l = e._z, c = e._w;
            return this._x = n * c + o * a + r * l - i * s, this._y = r * c + o * s + i * a - n * l, this._z = i * c + o * l + n * s - r * a, this._w = o * c - n * a - r * s - i * l, this.onChangeCallback(), this
        }, slerp: function (t, e) {
            if (0 === e)return this;
            if (1 === e)return this.copy(t);
            var n = this._x, r = this._y, i = this._z, o = this._w, a = o * t._w + n * t._x + r * t._y + i * t._z;
            if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1)return this._w = o, this._x = n, this._y = r, this._z = i, this;
            var s = Math.sqrt(1 - a * a);
            if (Math.abs(s) < .001)return this._w = .5 * (o + this._w), this._x = .5 * (n + this._x), this._y = .5 * (r + this._y), this._z = .5 * (i + this._z), this;
            var l = Math.atan2(s, a), c = Math.sin((1 - e) * l) / s, u = Math.sin(e * l) / s;
            return this._w = o * c + this._w * u, this._x = n * c + this._x * u, this._y = r * c + this._y * u, this._z = i * c + this._z * u, this.onChangeCallback(), this
        }, equals: function (t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        }, fromArray: function (t, e) {
            return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
        }, toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
        }, onChange: function (t) {
            return this.onChangeCallback = t, this
        }, onChangeCallback: function () {
        }
    }, Object.assign(o.Quaternion, {
        slerp: function (t, e, n, r) {
            return n.copy(t).slerp(e, r)
        }, slerpFlat: function (t, e, n, r, i, o, a) {
            var s = n[r + 0], l = n[r + 1], c = n[r + 2], u = n[r + 3], h = i[o + 0], f = i[o + 1], d = i[o + 2], p = i[o + 3];
            if (u !== p || s !== h || l !== f || c !== d) {
                var m = 1 - a, v = s * h + l * f + c * d + u * p, g = v >= 0 ? 1 : -1, y = 1 - v * v;
                if (y > Number.EPSILON) {
                    var x = Math.sqrt(y), _ = Math.atan2(x, v * g);
                    m = Math.sin(m * _) / x, a = Math.sin(a * _) / x
                }
                var b = a * g;
                if (s = s * m + h * b, l = l * m + f * b, c = c * m + d * b, u = u * m + p * b, m === 1 - a) {
                    var w = 1 / Math.sqrt(s * s + l * l + c * c + u * u);
                    s *= w, l *= w, c *= w, u *= w
                }
            }
            t[e] = s, t[e + 1] = l, t[e + 2] = c, t[e + 3] = u
        }
    }), o.Vector2 = function (t, e) {
        this.x = t || 0, this.y = e || 0
    }, o.Vector2.prototype = {
        constructor: o.Vector2, get width() {
            return this.x
        }, set width(t) {
            this.x = t
        }, get height() {
            return this.y
        }, set height(t) {
            this.y = t
        }, set: function (t, e) {
            return this.x = t, this.y = e, this
        }, setScalar: function (t) {
            return this.x = t, this.y = t, this
        }, setX: function (t) {
            return this.x = t, this
        }, setY: function (t) {
            return this.y = t, this
        }, setComponent: function (t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
        }, getComponent: function (t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t)
            }
        }, clone: function () {
            return new this.constructor(this.x, this.y)
        }, copy: function (t) {
            return this.x = t.x, this.y = t.y, this
        }, add: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
        }, addScalar: function (t) {
            return this.x += t, this.y += t, this
        }, addVectors: function (t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this
        }, addScaledVector: function (t, e) {
            return this.x += t.x * e, this.y += t.y * e, this
        }, sub: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
        }, subScalar: function (t) {
            return this.x -= t, this.y -= t, this
        }, subVectors: function (t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this
        }, multiply: function (t) {
            return this.x *= t.x, this.y *= t.y, this
        }, multiplyScalar: function (t) {
            return isFinite(t) ? (this.x *= t, this.y *= t) : (this.x = 0, this.y = 0), this
        }, divide: function (t) {
            return this.x /= t.x, this.y /= t.y, this
        }, divideScalar: function (t) {
            return this.multiplyScalar(1 / t)
        }, min: function (t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
        }, max: function (t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
        }, clamp: function (t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
        }, clampScalar: function () {
            var t, e;
            return function (n, r) {
                return void 0 === t && (t = new o.Vector2, e = new o.Vector2), t.set(n, n), e.set(r, r), this.clamp(t, e)
            }
        }(), clampLength: function (t, e) {
            var n = this.length();
            return this.multiplyScalar(Math.max(t, Math.min(e, n)) / n)
        }, floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        }, ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        }, round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        }, roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
        }, negate: function () {
            return this.x = -this.x, this.y = -this.y, this
        }, dot: function (t) {
            return this.x * t.x + this.y * t.y
        }, lengthSq: function () {
            return this.x * this.x + this.y * this.y
        }, length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }, lengthManhattan: function () {
            return Math.abs(this.x) + Math.abs(this.y)
        }, normalize: function () {
            return this.divideScalar(this.length())
        }, angle: function () {
            var t = Math.atan2(this.y, this.x);
            return t < 0 && (t += 2 * Math.PI), t
        }, distanceTo: function (t) {
            return Math.sqrt(this.distanceToSquared(t))
        }, distanceToSquared: function (t) {
            var e = this.x - t.x, n = this.y - t.y;
            return e * e + n * n
        }, setLength: function (t) {
            return this.multiplyScalar(t / this.length())
        }, lerp: function (t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
        }, lerpVectors: function (t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        }, equals: function (t) {
            return t.x === this.x && t.y === this.y
        }, fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
        }, toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
        }, fromAttribute: function (t, e, n) {
            return void 0 === n && (n = 0), e = e * t.itemSize + n, this.x = t.array[e], this.y = t.array[e + 1], this
        }, rotateAround: function (t, e) {
            var n = Math.cos(e), r = Math.sin(e), i = this.x - t.x, o = this.y - t.y;
            return this.x = i * n - o * r + t.x, this.y = i * r + o * n + t.y, this
        }
    }, o.Vector3 = function (t, e, n) {
        this.x = t || 0, this.y = e || 0, this.z = n || 0
    }, o.Vector3.prototype = {
        constructor: o.Vector3, set: function (t, e, n) {
            return this.x = t, this.y = e, this.z = n, this
        }, setScalar: function (t) {
            return this.x = t, this.y = t, this.z = t, this
        }, setX: function (t) {
            return this.x = t, this
        }, setY: function (t) {
            return this.y = t, this
        }, setZ: function (t) {
            return this.z = t, this
        }, setComponent: function (t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
        }, getComponent: function (t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t)
            }
        }, clone: function () {
            return new this.constructor(this.x, this.y, this.z)
        }, copy: function (t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this
        }, add: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
        }, addScalar: function (t) {
            return this.x += t, this.y += t, this.z += t, this
        }, addVectors: function (t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
        }, addScaledVector: function (t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
        }, sub: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
        }, subScalar: function (t) {
            return this.x -= t, this.y -= t, this.z -= t, this
        }, subVectors: function (t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
        }, multiply: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
        }, multiplyScalar: function (t) {
            return isFinite(t) ? (this.x *= t, this.y *= t, this.z *= t) : (this.x = 0, this.y = 0, this.z = 0), this
        }, multiplyVectors: function (t, e) {
            return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
        }, applyEuler: function () {
            var t;
            return function (e) {
                return e instanceof o.Euler == !1 && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), void 0 === t && (t = new o.Quaternion), this.applyQuaternion(t.setFromEuler(e))
            }
        }(), applyAxisAngle: function () {
            var t;
            return function (e, n) {
                return void 0 === t && (t = new o.Quaternion), this.applyQuaternion(t.setFromAxisAngle(e, n))
            }
        }(), applyMatrix3: function (t) {
            var e = this.x, n = this.y, r = this.z, i = t.elements;
            return this.x = i[0] * e + i[3] * n + i[6] * r, this.y = i[1] * e + i[4] * n + i[7] * r, this.z = i[2] * e + i[5] * n + i[8] * r, this
        }, applyMatrix4: function (t) {
            var e = this.x, n = this.y, r = this.z, i = t.elements;
            return this.x = i[0] * e + i[4] * n + i[8] * r + i[12], this.y = i[1] * e + i[5] * n + i[9] * r + i[13], this.z = i[2] * e + i[6] * n + i[10] * r + i[14], this
        }, applyProjection: function (t) {
            var e = this.x, n = this.y, r = this.z, i = t.elements, o = 1 / (i[3] * e + i[7] * n + i[11] * r + i[15]);
            return this.x = (i[0] * e + i[4] * n + i[8] * r + i[12]) * o, this.y = (i[1] * e + i[5] * n + i[9] * r + i[13]) * o, this.z = (i[2] * e + i[6] * n + i[10] * r + i[14]) * o, this
        }, applyQuaternion: function (t) {
            var e = this.x, n = this.y, r = this.z, i = t.x, o = t.y, a = t.z, s = t.w, l = s * e + o * r - a * n, c = s * n + a * e - i * r, u = s * r + i * n - o * e, h = -i * e - o * n - a * r;
            return this.x = l * s + h * -i + c * -a - u * -o, this.y = c * s + h * -o + u * -i - l * -a, this.z = u * s + h * -a + l * -o - c * -i, this
        }, project: function () {
            var t;
            return function (e) {
                return void 0 === t && (t = new o.Matrix4), t.multiplyMatrices(e.projectionMatrix, t.getInverse(e.matrixWorld)), this.applyProjection(t)
            }
        }(), unproject: function () {
            var t;
            return function (e) {
                return void 0 === t && (t = new o.Matrix4), t.multiplyMatrices(e.matrixWorld, t.getInverse(e.projectionMatrix)), this.applyProjection(t)
            }
        }(), transformDirection: function (t) {
            var e = this.x, n = this.y, r = this.z, i = t.elements;
            return this.x = i[0] * e + i[4] * n + i[8] * r, this.y = i[1] * e + i[5] * n + i[9] * r, this.z = i[2] * e + i[6] * n + i[10] * r, this.normalize()
        }, divide: function (t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
        }, divideScalar: function (t) {
            return this.multiplyScalar(1 / t)
        }, min: function (t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
        }, max: function (t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
        }, clamp: function (t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
        }, clampScalar: function () {
            var t, e;
            return function (n, r) {
                return void 0 === t && (t = new o.Vector3, e = new o.Vector3), t.set(n, n, n), e.set(r, r, r), this.clamp(t, e)
            }
        }(), clampLength: function (t, e) {
            var n = this.length();
            return this.multiplyScalar(Math.max(t, Math.min(e, n)) / n)
        }, floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
        }, ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
        }, round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
        }, roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
        }, negate: function () {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        }, dot: function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }, lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }, length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        }, lengthManhattan: function () {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        }, normalize: function () {
            return this.divideScalar(this.length())
        }, setLength: function (t) {
            return this.multiplyScalar(t / this.length())
        }, lerp: function (t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
        }, lerpVectors: function (t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        }, cross: function (t, e) {
            if (void 0 !== e)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e);
            var n = this.x, r = this.y, i = this.z;
            return this.x = r * t.z - i * t.y, this.y = i * t.x - n * t.z, this.z = n * t.y - r * t.x, this
        }, crossVectors: function (t, e) {
            var n = t.x, r = t.y, i = t.z, o = e.x, a = e.y, s = e.z;
            return this.x = r * s - i * a, this.y = i * o - n * s, this.z = n * a - r * o, this
        }, projectOnVector: function (t) {
            var e = t.dot(this) / t.lengthSq();
            return this.copy(t).multiplyScalar(e)
        }, projectOnPlane: function () {
            var t;
            return function (e) {
                return void 0 === t && (t = new o.Vector3), t.copy(this).projectOnVector(e), this.sub(t)
            }
        }(), reflect: function () {
            var t;
            return function (e) {
                return void 0 === t && (t = new o.Vector3), this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
            }
        }(), angleTo: function (t) {
            var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
            return Math.acos(o.Math.clamp(e, -1, 1))
        }, distanceTo: function (t) {
            return Math.sqrt(this.distanceToSquared(t))
        }, distanceToSquared: function (t) {
            var e = this.x - t.x, n = this.y - t.y, r = this.z - t.z;
            return e * e + n * n + r * r
        }, setFromSpherical: function (t) {
            var e = Math.sin(t.phi) * t.radius;
            return this.x = e * Math.sin(t.theta), this.y = Math.cos(t.phi) * t.radius, this.z = e * Math.cos(t.theta), this
        }, setFromMatrixPosition: function (t) {
            return this.setFromMatrixColumn(t, 3)
        }, setFromMatrixScale: function (t) {
            var e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), r = this.setFromMatrixColumn(t, 2).length();
            return this.x = e, this.y = n, this.z = r, this
        }, setFromMatrixColumn: function (t, e) {
            if ("number" == typeof t) {
                console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");
                var n = t;
                t = e, e = n
            }
            return this.fromArray(t.elements, 4 * e)
        }, equals: function (t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        }, fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
        }, toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
        }, fromAttribute: function (t, e, n) {
            return void 0 === n && (n = 0), e = e * t.itemSize + n, this.x = t.array[e], this.y = t.array[e + 1], this.z = t.array[e + 2], this
        }
    }, o.Vector4 = function (t, e, n, r) {
        this.x = t || 0, this.y = e || 0, this.z = n || 0, this.w = void 0 !== r ? r : 1
    }, o.Vector4.prototype = {
        constructor: o.Vector4, set: function (t, e, n, r) {
            return this.x = t, this.y = e, this.z = n, this.w = r, this
        }, setScalar: function (t) {
            return this.x = t, this.y = t, this.z = t, this.w = t, this
        }, setX: function (t) {
            return this.x = t, this
        }, setY: function (t) {
            return this.y = t, this
        }, setZ: function (t) {
            return this.z = t, this
        }, setW: function (t) {
            return this.w = t, this
        }, setComponent: function (t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
        }, getComponent: function (t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t)
            }
        }, clone: function () {
            return new this.constructor(this.x, this.y, this.z, this.w)
        }, copy: function (t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
        }, add: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
        }, addScalar: function (t) {
            return this.x += t, this.y += t, this.z += t, this.w += t, this
        }, addVectors: function (t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
        }, addScaledVector: function (t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
        }, sub: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
        }, subScalar: function (t) {
            return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
        }, subVectors: function (t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
        }, multiplyScalar: function (t) {
            return isFinite(t) ? (this.x *= t, this.y *= t,
                this.z *= t, this.w *= t) : (this.x = 0, this.y = 0, this.z = 0, this.w = 0), this
        }, applyMatrix4: function (t) {
            var e = this.x, n = this.y, r = this.z, i = this.w, o = t.elements;
            return this.x = o[0] * e + o[4] * n + o[8] * r + o[12] * i, this.y = o[1] * e + o[5] * n + o[9] * r + o[13] * i, this.z = o[2] * e + o[6] * n + o[10] * r + o[14] * i, this.w = o[3] * e + o[7] * n + o[11] * r + o[15] * i, this
        }, divideScalar: function (t) {
            return this.multiplyScalar(1 / t)
        }, setAxisAngleFromQuaternion: function (t) {
            this.w = 2 * Math.acos(t.w);
            var e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
        }, setAxisAngleFromRotationMatrix: function (t) {
            var e, n, r, i, o = .01, a = .1, s = t.elements, l = s[0], c = s[4], u = s[8], h = s[1], f = s[5], d = s[9], p = s[2], m = s[6], v = s[10];
            if (Math.abs(c - h) < o && Math.abs(u - p) < o && Math.abs(d - m) < o) {
                if (Math.abs(c + h) < a && Math.abs(u + p) < a && Math.abs(d + m) < a && Math.abs(l + f + v - 3) < a)return this.set(1, 0, 0, 0), this;
                e = Math.PI;
                var g = (l + 1) / 2, y = (f + 1) / 2, x = (v + 1) / 2, _ = (c + h) / 4, b = (u + p) / 4, w = (d + m) / 4;
                return g > y && g > x ? g < o ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(g), r = _ / n, i = b / n) : y > x ? y < o ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(y), n = _ / r, i = w / r) : x < o ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(x), n = b / i, r = w / i), this.set(n, r, i, e), this
            }
            var M = Math.sqrt((m - d) * (m - d) + (u - p) * (u - p) + (h - c) * (h - c));
            return Math.abs(M) < .001 && (M = 1), this.x = (m - d) / M, this.y = (u - p) / M, this.z = (h - c) / M, this.w = Math.acos((l + f + v - 1) / 2), this
        }, min: function (t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
        }, max: function (t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
        }, clamp: function (t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
        }, clampScalar: function () {
            var t, e;
            return function (n, r) {
                return void 0 === t && (t = new o.Vector4, e = new o.Vector4), t.set(n, n, n, n), e.set(r, r, r, r), this.clamp(t, e)
            }
        }(), floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
        }, ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
        }, round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
        }, roundToZero: function () {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
        }, negate: function () {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        }, dot: function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        }, lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }, length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        }, lengthManhattan: function () {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        }, normalize: function () {
            return this.divideScalar(this.length())
        }, setLength: function (t) {
            return this.multiplyScalar(t / this.length())
        }, lerp: function (t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
        }, lerpVectors: function (t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        }, equals: function (t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        }, fromArray: function (t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
        }, toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
        }, fromAttribute: function (t, e, n) {
            return void 0 === n && (n = 0), e = e * t.itemSize + n, this.x = t.array[e], this.y = t.array[e + 1], this.z = t.array[e + 2], this.w = t.array[e + 3], this
        }
    }, o.Euler = function (t, e, n, r) {
        this._x = t || 0, this._y = e || 0, this._z = n || 0, this._order = r || o.Euler.DefaultOrder
    }, o.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], o.Euler.DefaultOrder = "XYZ", o.Euler.prototype = {
        constructor: o.Euler,
        get x() {
            return this._x
        },
        set x(t) {
            this._x = t, this.onChangeCallback()
        },
        get y() {
            return this._y
        },
        set y(t) {
            this._y = t, this.onChangeCallback()
        },
        get z() {
            return this._z
        },
        set z(t) {
            this._z = t, this.onChangeCallback()
        },
        get order() {
            return this._order
        },
        set order(t) {
            this._order = t, this.onChangeCallback()
        },
        set: function (t, e, n, r) {
            return this._x = t, this._y = e, this._z = n, this._order = r || this._order, this.onChangeCallback(), this
        },
        clone: function () {
            return new this.constructor(this._x, this._y, this._z, this._order)
        },
        copy: function (t) {
            return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
        },
        setFromRotationMatrix: function (t, e, n) {
            var r = o.Math.clamp, i = t.elements, a = i[0], s = i[4], l = i[8], c = i[1], u = i[5], h = i[9], f = i[2], d = i[6], p = i[10];
            return e = e || this._order, "XYZ" === e ? (this._y = Math.asin(r(l, -1, 1)), Math.abs(l) < .99999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-s, a)) : (this._x = Math.atan2(d, u), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-r(h, -1, 1)), Math.abs(h) < .99999 ? (this._y = Math.atan2(l, p), this._z = Math.atan2(c, u)) : (this._y = Math.atan2(-f, a), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(r(d, -1, 1)), Math.abs(d) < .99999 ? (this._y = Math.atan2(-f, p), this._z = Math.atan2(-s, u)) : (this._y = 0, this._z = Math.atan2(c, a))) : "ZYX" === e ? (this._y = Math.asin(-r(f, -1, 1)), Math.abs(f) < .99999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-s, u))) : "YZX" === e ? (this._z = Math.asin(r(c, -1, 1)), Math.abs(c) < .99999 ? (this._x = Math.atan2(-h, u), this._y = Math.atan2(-f, a)) : (this._x = 0, this._y = Math.atan2(l, p))) : "XZY" === e ? (this._z = Math.asin(-r(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(d, u), this._y = Math.atan2(l, a)) : (this._x = Math.atan2(-h, p), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, n !== !1 && this.onChangeCallback(), this
        },
        setFromQuaternion: function () {
            var t;
            return function (e, n, r) {
                return void 0 === t && (t = new o.Matrix4), t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, n, r)
            }
        }(),
        setFromVector3: function (t, e) {
            return this.set(t.x, t.y, t.z, e || this._order)
        },
        reorder: function () {
            var t = new o.Quaternion;
            return function (e) {
                return t.setFromEuler(this), this.setFromQuaternion(t, e)
            }
        }(),
        equals: function (t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        },
        fromArray: function (t) {
            return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this
        },
        toArray: function (t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
        },
        toVector3: function (t) {
            return t ? t.set(this._x, this._y, this._z) : new o.Vector3(this._x, this._y, this._z)
        },
        onChange: function (t) {
            return this.onChangeCallback = t, this
        },
        onChangeCallback: function () {
        }
    }, o.Line3 = function (t, e) {
        this.start = void 0 !== t ? t : new o.Vector3, this.end = void 0 !== e ? e : new o.Vector3
    }, o.Line3.prototype = {
        constructor: o.Line3, set: function (t, e) {
            return this.start.copy(t), this.end.copy(e), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.start.copy(t.start), this.end.copy(t.end), this
        }, center: function (t) {
            var e = t || new o.Vector3;
            return e.addVectors(this.start, this.end).multiplyScalar(.5)
        }, delta: function (t) {
            var e = t || new o.Vector3;
            return e.subVectors(this.end, this.start)
        }, distanceSq: function () {
            return this.start.distanceToSquared(this.end)
        }, distance: function () {
            return this.start.distanceTo(this.end)
        }, at: function (t, e) {
            var n = e || new o.Vector3;
            return this.delta(n).multiplyScalar(t).add(this.start)
        }, closestPointToPointParameter: function () {
            var t = new o.Vector3, e = new o.Vector3;
            return function (n, r) {
                t.subVectors(n, this.start), e.subVectors(this.end, this.start);
                var i = e.dot(e), a = e.dot(t), s = a / i;
                return r && (s = o.Math.clamp(s, 0, 1)), s
            }
        }(), closestPointToPoint: function (t, e, n) {
            var r = this.closestPointToPointParameter(t, e), i = n || new o.Vector3;
            return this.delta(i).multiplyScalar(r).add(this.start)
        }, applyMatrix4: function (t) {
            return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
        }, equals: function (t) {
            return t.start.equals(this.start) && t.end.equals(this.end)
        }
    }, o.Box2 = function (t, e) {
        this.min = void 0 !== t ? t : new o.Vector2(+(1 / 0), +(1 / 0)), this.max = void 0 !== e ? e : new o.Vector2(-(1 / 0), -(1 / 0))
    }, o.Box2.prototype = {
        constructor: o.Box2, set: function (t, e) {
            return this.min.copy(t), this.max.copy(e), this
        }, setFromPoints: function (t) {
            this.makeEmpty();
            for (var e = 0, n = t.length; e < n; e++)this.expandByPoint(t[e]);
            return this
        }, setFromCenterAndSize: function () {
            var t = new o.Vector2;
            return function (e, n) {
                var r = t.copy(n).multiplyScalar(.5);
                return this.min.copy(e).sub(r), this.max.copy(e).add(r), this
            }
        }(), clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
        }, makeEmpty: function () {
            return this.min.x = this.min.y = +(1 / 0), this.max.x = this.max.y = -(1 / 0), this
        }, isEmpty: function () {
            return this.max.x < this.min.x || this.max.y < this.min.y
        }, center: function (t) {
            var e = t || new o.Vector2;
            return e.addVectors(this.min, this.max).multiplyScalar(.5)
        }, size: function (t) {
            var e = t || new o.Vector2;
            return e.subVectors(this.max, this.min)
        }, expandByPoint: function (t) {
            return this.min.min(t), this.max.max(t), this
        }, expandByVector: function (t) {
            return this.min.sub(t), this.max.add(t), this
        }, expandByScalar: function (t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
        }, containsPoint: function (t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
        }, containsBox: function (t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
        }, getParameter: function (t, e) {
            var n = e || new o.Vector2;
            return n.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
        }, intersectsBox: function (t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
        }, clampPoint: function (t, e) {
            var n = e || new o.Vector2;
            return n.copy(t).clamp(this.min, this.max)
        }, distanceToPoint: function () {
            var t = new o.Vector2;
            return function (e) {
                var n = t.copy(e).clamp(this.min, this.max);
                return n.sub(e).length()
            }
        }(), intersect: function (t) {
            return this.min.max(t.min), this.max.min(t.max), this
        }, union: function (t) {
            return this.min.min(t.min), this.max.max(t.max), this
        }, translate: function (t) {
            return this.min.add(t), this.max.add(t), this
        }, equals: function (t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }, o.Box3 = function (t, e) {
        this.min = void 0 !== t ? t : new o.Vector3(+(1 / 0), +(1 / 0), +(1 / 0)), this.max = void 0 !== e ? e : new o.Vector3(-(1 / 0), -(1 / 0), -(1 / 0))
    }, o.Box3.prototype = {
        constructor: o.Box3, set: function (t, e) {
            return this.min.copy(t), this.max.copy(e), this
        }, setFromArray: function (t) {
            for (var e = +(1 / 0), n = +(1 / 0), r = +(1 / 0), i = -(1 / 0), o = -(1 / 0), a = -(1 / 0), s = 0, l = t.length; s < l; s += 3) {
                var c = t[s], u = t[s + 1], h = t[s + 2];
                c < e && (e = c), u < n && (n = u), h < r && (r = h), c > i && (i = c), u > o && (o = u), h > a && (a = h)
            }
            this.min.set(e, n, r), this.max.set(i, o, a)
        }, setFromPoints: function (t) {
            this.makeEmpty();
            for (var e = 0, n = t.length; e < n; e++)this.expandByPoint(t[e]);
            return this
        }, setFromCenterAndSize: function () {
            var t = new o.Vector3;
            return function (e, n) {
                var r = t.copy(n).multiplyScalar(.5);
                return this.min.copy(e).sub(r), this.max.copy(e).add(r), this
            }
        }(), setFromObject: function () {
            var t = new o.Vector3;
            return function (e) {
                var n = this;
                return e.updateMatrixWorld(!0), this.makeEmpty(), e.traverse(function (e) {
                    var r = e.geometry;
                    if (void 0 !== r)if (r instanceof o.Geometry)for (var i = r.vertices, a = 0, s = i.length; a < s; a++)t.copy(i[a]), t.applyMatrix4(e.matrixWorld), n.expandByPoint(t); else if (r instanceof o.BufferGeometry && void 0 !== r.attributes.position)for (var l = r.attributes.position.array, a = 0, s = l.length; a < s; a += 3)t.fromArray(l, a), t.applyMatrix4(e.matrixWorld), n.expandByPoint(t)
                }), this
            }
        }(), clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
        }, makeEmpty: function () {
            return this.min.x = this.min.y = this.min.z = +(1 / 0), this.max.x = this.max.y = this.max.z = -(1 / 0), this
        }, isEmpty: function () {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        }, center: function (t) {
            var e = t || new o.Vector3;
            return e.addVectors(this.min, this.max).multiplyScalar(.5)
        }, size: function (t) {
            var e = t || new o.Vector3;
            return e.subVectors(this.max, this.min)
        }, expandByPoint: function (t) {
            return this.min.min(t), this.max.max(t), this
        }, expandByVector: function (t) {
            return this.min.sub(t), this.max.add(t), this
        }, expandByScalar: function (t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
        }, containsPoint: function (t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        }, containsBox: function (t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        }, getParameter: function (t, e) {
            var n = e || new o.Vector3;
            return n.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        }, intersectsBox: function (t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        }, intersectsSphere: function () {
            var t;
            return function (e) {
                return void 0 === t && (t = new o.Vector3), this.clampPoint(e.center, t), t.distanceToSquared(e.center) <= e.radius * e.radius
            }
        }(), intersectsPlane: function (t) {
            var e, n;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= t.constant && n >= t.constant
        }, clampPoint: function (t, e) {
            var n = e || new o.Vector3;
            return n.copy(t).clamp(this.min, this.max)
        }, distanceToPoint: function () {
            var t = new o.Vector3;
            return function (e) {
                var n = t.copy(e).clamp(this.min, this.max);
                return n.sub(e).length()
            }
        }(), getBoundingSphere: function () {
            var t = new o.Vector3;
            return function (e) {
                var n = e || new o.Sphere;
                return n.center = this.center(), n.radius = .5 * this.size(t).length(), n
            }
        }(), intersect: function (t) {
            return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
        }, union: function (t) {
            return this.min.min(t.min), this.max.max(t.max), this
        }, applyMatrix4: function () {
            var t = [new o.Vector3, new o.Vector3, new o.Vector3, new o.Vector3, new o.Vector3, new o.Vector3, new o.Vector3, new o.Vector3];
            return function (e) {
                return this.isEmpty() ? this : (t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(t), this)
            }
        }(), translate: function (t) {
            return this.min.add(t), this.max.add(t), this
        }, equals: function (t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }, o.Matrix3 = function () {
        this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }, o.Matrix3.prototype = {
        constructor: o.Matrix3, set: function (t, e, n, r, i, o, a, s, l) {
            var c = this.elements;
            return c[0] = t, c[1] = r, c[2] = a, c[3] = e, c[4] = i, c[5] = s, c[6] = n, c[7] = o, c[8] = l, this
        }, identity: function () {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        }, clone: function () {
            return (new this.constructor).fromArray(this.elements)
        }, copy: function (t) {
            var e = t.elements;
            return this.set(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]), this
        }, setFromMatrix4: function (t) {
            var e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
        }, applyToVector3Array: function () {
            var t;
            return function (e, n, r) {
                void 0 === t && (t = new o.Vector3), void 0 === n && (n = 0), void 0 === r && (r = e.length);
                for (var i = 0, a = n; i < r; i += 3, a += 3)t.fromArray(e, a), t.applyMatrix3(this), t.toArray(e, a);
                return e
            }
        }(), applyToBuffer: function () {
            var t;
            return function (e, n, r) {
                void 0 === t && (t = new o.Vector3), void 0 === n && (n = 0), void 0 === r && (r = e.length / e.itemSize);
                for (var i = 0, a = n; i < r; i++, a++)t.x = e.getX(a), t.y = e.getY(a), t.z = e.getZ(a), t.applyMatrix3(this), e.setXYZ(t.x, t.y, t.z);
                return e
            }
        }(), multiplyScalar: function (t) {
            var e = this.elements;
            return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
        }, determinant: function () {
            var t = this.elements, e = t[0], n = t[1], r = t[2], i = t[3], o = t[4], a = t[5], s = t[6], l = t[7], c = t[8];
            return e * o * c - e * a * l - n * i * c + n * a * s + r * i * l - r * o * s
        }, getInverse: function (t, e) {
            t instanceof o.Matrix4 && console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
            var n = t.elements, r = this.elements, i = n[0], a = n[1], s = n[2], l = n[3], c = n[4], u = n[5], h = n[6], f = n[7], d = n[8], p = d * c - u * f, m = u * h - d * l, v = f * l - c * h, g = i * p + a * m + s * v;
            if (0 === g) {
                var y = "THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";
                if (e)throw new Error(y);
                return console.warn(y), this.identity()
            }
            var x = 1 / g;
            return r[0] = p * x, r[1] = (s * f - d * a) * x, r[2] = (u * a - s * c) * x, r[3] = m * x, r[4] = (d * i - s * h) * x, r[5] = (s * l - u * i) * x, r[6] = v * x, r[7] = (a * h - f * i) * x, r[8] = (c * i - a * l) * x, this
        }, transpose: function () {
            var t, e = this.elements;
            return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
        }, flattenToArrayOffset: function (t, e) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."), this.toArray(t, e)
        }, getNormalMatrix: function (t) {
            return this.setFromMatrix4(t).getInverse(this).transpose()
        }, transposeIntoArray: function (t) {
            var e = this.elements;
            return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
        }, fromArray: function (t) {
            return this.elements.set(t), this
        }, toArray: function (t, e) {
            void 0 === t && (t = []), void 0 === e && (e = 0);
            var n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t
        }
    }, o.Matrix4 = function () {
        this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }, o.Matrix4.prototype = {
        constructor: o.Matrix4, set: function (t, e, n, r, i, o, a, s, l, c, u, h, f, d, p, m) {
            var v = this.elements;
            return v[0] = t, v[4] = e, v[8] = n, v[12] = r, v[1] = i, v[5] = o, v[9] = a, v[13] = s, v[2] = l, v[6] = c, v[10] = u, v[14] = h, v[3] = f, v[7] = d, v[11] = p, v[15] = m, this
        }, identity: function () {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        }, clone: function () {
            return (new o.Matrix4).fromArray(this.elements)
        }, copy: function (t) {
            return this.elements.set(t.elements), this
        }, copyPosition: function (t) {
            var e = this.elements, n = t.elements;
            return e[12] = n[12], e[13] = n[13], e[14] = n[14], this
        }, extractBasis: function (t, e, n) {
            return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
        }, makeBasis: function (t, e, n) {
            return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this
        }, extractRotation: function () {
            var t;
            return function (e) {
                void 0 === t && (t = new o.Vector3);
                var n = this.elements, r = e.elements, i = 1 / t.setFromMatrixColumn(e, 0).length(), a = 1 / t.setFromMatrixColumn(e, 1).length(), s = 1 / t.setFromMatrixColumn(e, 2).length();
                return n[0] = r[0] * i, n[1] = r[1] * i, n[2] = r[2] * i, n[4] = r[4] * a, n[5] = r[5] * a, n[6] = r[6] * a, n[8] = r[8] * s, n[9] = r[9] * s, n[10] = r[10] * s, this
            }
        }(), makeRotationFromEuler: function (t) {
            t instanceof o.Euler == !1 && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var e = this.elements, n = t.x, r = t.y, i = t.z, a = Math.cos(n), s = Math.sin(n), l = Math.cos(r), c = Math.sin(r), u = Math.cos(i), h = Math.sin(i);
            if ("XYZ" === t.order) {
                var f = a * u, d = a * h, p = s * u, m = s * h;
                e[0] = l * u, e[4] = -l * h, e[8] = c, e[1] = d + p * c, e[5] = f - m * c, e[9] = -s * l, e[2] = m - f * c, e[6] = p + d * c, e[10] = a * l
            } else if ("YXZ" === t.order) {
                var v = l * u, g = l * h, y = c * u, x = c * h;
                e[0] = v + x * s, e[4] = y * s - g, e[8] = a * c, e[1] = a * h, e[5] = a * u, e[9] = -s, e[2] = g * s - y, e[6] = x + v * s, e[10] = a * l
            } else if ("ZXY" === t.order) {
                var v = l * u, g = l * h, y = c * u, x = c * h;
                e[0] = v - x * s, e[4] = -a * h, e[8] = y + g * s, e[1] = g + y * s, e[5] = a * u, e[9] = x - v * s, e[2] = -a * c, e[6] = s, e[10] = a * l
            } else if ("ZYX" === t.order) {
                var f = a * u, d = a * h, p = s * u, m = s * h;
                e[0] = l * u, e[4] = p * c - d, e[8] = f * c + m, e[1] = l * h, e[5] = m * c + f, e[9] = d * c - p, e[2] = -c, e[6] = s * l, e[10] = a * l
            } else if ("YZX" === t.order) {
                var _ = a * l, b = a * c, w = s * l, M = s * c;
                e[0] = l * u, e[4] = M - _ * h, e[8] = w * h + b, e[1] = h, e[5] = a * u, e[9] = -s * u, e[2] = -c * u, e[6] = b * h + w, e[10] = _ - M * h
            } else if ("XZY" === t.order) {
                var _ = a * l, b = a * c, w = s * l, M = s * c;
                e[0] = l * u, e[4] = -h, e[8] = c * u, e[1] = _ * h + M, e[5] = a * u, e[9] = b * h - w, e[2] = w * h - b, e[6] = s * u, e[10] = M * h + _
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        }, makeRotationFromQuaternion: function (t) {
            var e = this.elements, n = t.x, r = t.y, i = t.z, o = t.w, a = n + n, s = r + r, l = i + i, c = n * a, u = n * s, h = n * l, f = r * s, d = r * l, p = i * l, m = o * a, v = o * s, g = o * l;
            return e[0] = 1 - (f + p), e[4] = u - g, e[8] = h + v, e[1] = u + g, e[5] = 1 - (c + p), e[9] = d - m, e[2] = h - v, e[6] = d + m, e[10] = 1 - (c + f), e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        }, lookAt: function () {
            var t, e, n;
            return function (r, i, a) {
                void 0 === t && (t = new o.Vector3, e = new o.Vector3, n = new o.Vector3);
                var s = this.elements;
                return n.subVectors(r, i).normalize(), 0 === n.lengthSq() && (n.z = 1), t.crossVectors(a, n).normalize(), 0 === t.lengthSq() && (n.z += 1e-4, t.crossVectors(a, n).normalize()), e.crossVectors(n, t), s[0] = t.x, s[4] = e.x, s[8] = n.x, s[1] = t.y, s[5] = e.y, s[9] = n.y, s[2] = t.z, s[6] = e.z, s[10] = n.z, this
            }
        }(), multiply: function (t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
        }, premultiply: function (t) {
            return this.multiplyMatrices(t, this)
        }, multiplyMatrices: function (t, e) {
            var n = t.elements, r = e.elements, i = this.elements, o = n[0], a = n[4], s = n[8], l = n[12], c = n[1], u = n[5], h = n[9], f = n[13], d = n[2], p = n[6], m = n[10], v = n[14], g = n[3], y = n[7], x = n[11], _ = n[15], b = r[0], w = r[4], M = r[8], S = r[12], E = r[1], T = r[5], A = r[9], L = r[13], C = r[2], P = r[6], R = r[10], I = r[14], F = r[3], O = r[7], B = r[11], U = r[15];
            return i[0] = o * b + a * E + s * C + l * F, i[4] = o * w + a * T + s * P + l * O, i[8] = o * M + a * A + s * R + l * B, i[12] = o * S + a * L + s * I + l * U, i[1] = c * b + u * E + h * C + f * F, i[5] = c * w + u * T + h * P + f * O, i[9] = c * M + u * A + h * R + f * B, i[13] = c * S + u * L + h * I + f * U, i[2] = d * b + p * E + m * C + v * F, i[6] = d * w + p * T + m * P + v * O, i[10] = d * M + p * A + m * R + v * B, i[14] = d * S + p * L + m * I + v * U, i[3] = g * b + y * E + x * C + _ * F, i[7] = g * w + y * T + x * P + _ * O, i[11] = g * M + y * A + x * R + _ * B, i[15] = g * S + y * L + x * I + _ * U, this
        }, multiplyToArray: function (t, e, n) {
            var r = this.elements;
            return this.multiplyMatrices(t, e), n[0] = r[0], n[1] = r[1], n[2] = r[2], n[3] = r[3], n[4] = r[4], n[5] = r[5], n[6] = r[6], n[7] = r[7], n[8] = r[8], n[9] = r[9], n[10] = r[10], n[11] = r[11], n[12] = r[12], n[13] = r[13], n[14] = r[14], n[15] = r[15], this
        }, multiplyScalar: function (t) {
            var e = this.elements;
            return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
        }, applyToVector3Array: function () {
            var t;
            return function (e, n, r) {
                void 0 === t && (t = new o.Vector3), void 0 === n && (n = 0), void 0 === r && (r = e.length);
                for (var i = 0, a = n; i < r; i += 3, a += 3)t.fromArray(e, a), t.applyMatrix4(this), t.toArray(e, a);
                return e
            }
        }(), applyToBuffer: function () {
            var t;
            return function (e, n, r) {
                void 0 === t && (t = new o.Vector3), void 0 === n && (n = 0), void 0 === r && (r = e.length / e.itemSize);
                for (var i = 0, a = n; i < r; i++, a++)t.x = e.getX(a), t.y = e.getY(a), t.z = e.getZ(a), t.applyMatrix4(this), e.setXYZ(t.x, t.y, t.z);
                return e
            }
        }(), determinant: function () {
            var t = this.elements, e = t[0], n = t[4], r = t[8], i = t[12], o = t[1], a = t[5], s = t[9], l = t[13], c = t[2], u = t[6], h = t[10], f = t[14], d = t[3], p = t[7], m = t[11], v = t[15];
            return d * (+i * s * u - r * l * u - i * a * h + n * l * h + r * a * f - n * s * f) + p * (+e * s * f - e * l * h + i * o * h - r * o * f + r * l * c - i * s * c) + m * (+e * l * u - e * a * f - i * o * u + n * o * f + i * a * c - n * l * c) + v * (-r * a * c - e * s * u + e * a * h + r * o * u - n * o * h + n * s * c)
        }, transpose: function () {
            var t, e = this.elements;
            return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
        }, flattenToArrayOffset: function (t, e) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."), this.toArray(t, e)
        }, getPosition: function () {
            var t;
            return function () {
                return void 0 === t && (t = new o.Vector3), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), t.setFromMatrixColumn(this, 3)
            }
        }(), setPosition: function (t) {
            var e = this.elements;
            return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
        }, getInverse: function (t, e) {
            var n = this.elements, r = t.elements, i = r[0], o = r[1], a = r[2], s = r[3], l = r[4], c = r[5], u = r[6], h = r[7], f = r[8], d = r[9], p = r[10], m = r[11], v = r[12], g = r[13], y = r[14], x = r[15], _ = d * y * h - g * p * h + g * u * m - c * y * m - d * u * x + c * p * x, b = v * p * h - f * y * h - v * u * m + l * y * m + f * u * x - l * p * x, w = f * g * h - v * d * h + v * c * m - l * g * m - f * c * x + l * d * x, M = v * d * u - f * g * u - v * c * p + l * g * p + f * c * y - l * d * y, S = i * _ + o * b + a * w + s * M;
            if (0 === S) {
                var E = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";
                if (e)throw new Error(E);
                return console.warn(E), this.identity()
            }
            var T = 1 / S;
            return n[0] = _ * T, n[1] = (g * p * s - d * y * s - g * a * m + o * y * m + d * a * x - o * p * x) * T, n[2] = (c * y * s - g * u * s + g * a * h - o * y * h - c * a * x + o * u * x) * T, n[3] = (d * u * s - c * p * s - d * a * h + o * p * h + c * a * m - o * u * m) * T, n[4] = b * T, n[5] = (f * y * s - v * p * s + v * a * m - i * y * m - f * a * x + i * p * x) * T, n[6] = (v * u * s - l * y * s - v * a * h + i * y * h + l * a * x - i * u * x) * T, n[7] = (l * p * s - f * u * s + f * a * h - i * p * h - l * a * m + i * u * m) * T, n[8] = w * T, n[9] = (v * d * s - f * g * s - v * o * m + i * g * m + f * o * x - i * d * x) * T, n[10] = (l * g * s - v * c * s + v * o * h - i * g * h - l * o * x + i * c * x) * T, n[11] = (f * c * s - l * d * s - f * o * h + i * d * h + l * o * m - i * c * m) * T, n[12] = M * T, n[13] = (f * g * a - v * d * a + v * o * p - i * g * p - f * o * y + i * d * y) * T, n[14] = (v * c * a - l * g * a - v * o * u + i * g * u + l * o * y - i * c * y) * T, n[15] = (l * d * a - f * c * a + f * o * u - i * d * u - l * o * p + i * c * p) * T, this
        }, scale: function (t) {
            var e = this.elements, n = t.x, r = t.y, i = t.z;
            return e[0] *= n, e[4] *= r, e[8] *= i, e[1] *= n, e[5] *= r, e[9] *= i, e[2] *= n, e[6] *= r, e[10] *= i, e[3] *= n, e[7] *= r, e[11] *= i, this
        }, getMaxScaleOnAxis: function () {
            var t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, n, r))
        }, makeTranslation: function (t, e, n) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this
        }, makeRotationX: function (t) {
            var e = Math.cos(t), n = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
        }, makeRotationY: function (t) {
            var e = Math.cos(t), n = Math.sin(t);
            return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
        }, makeRotationZ: function (t) {
            var e = Math.cos(t), n = Math.sin(t);
            return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        }, makeRotationAxis: function (t, e) {
            var n = Math.cos(e), r = Math.sin(e), i = 1 - n, o = t.x, a = t.y, s = t.z, l = i * o, c = i * a;
            return this.set(l * o + n, l * a - r * s, l * s + r * a, 0, l * a + r * s, c * a + n, c * s - r * o, 0, l * s - r * a, c * s + r * o, i * s * s + n, 0, 0, 0, 0, 1), this
        }, makeScale: function (t, e, n) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
        }, compose: function (t, e, n) {
            return this.makeRotationFromQuaternion(e), this.scale(n), this.setPosition(t), this
        }, decompose: function () {
            var t, e;
            return function (n, r, i) {
                void 0 === t && (t = new o.Vector3, e = new o.Matrix4);
                var a = this.elements, s = t.set(a[0], a[1], a[2]).length(), l = t.set(a[4], a[5], a[6]).length(), c = t.set(a[8], a[9], a[10]).length(), u = this.determinant();
                u < 0 && (s = -s), n.x = a[12], n.y = a[13], n.z = a[14], e.elements.set(this.elements);
                var h = 1 / s, f = 1 / l, d = 1 / c;
                return e.elements[0] *= h, e.elements[1] *= h, e.elements[2] *= h, e.elements[4] *= f, e.elements[5] *= f, e.elements[6] *= f, e.elements[8] *= d, e.elements[9] *= d, e.elements[10] *= d, r.setFromRotationMatrix(e), i.x = s, i.y = l, i.z = c, this
            }
        }(), makeFrustum: function (t, e, n, r, i, o) {
            var a = this.elements, s = 2 * i / (e - t), l = 2 * i / (r - n), c = (e + t) / (e - t), u = (r + n) / (r - n), h = -(o + i) / (o - i), f = -2 * o * i / (o - i);
            return a[0] = s, a[4] = 0, a[8] = c, a[12] = 0, a[1] = 0, a[5] = l, a[9] = u, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = h, a[14] = f, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
        }, makePerspective: function (t, e, n, r) {
            var i = n * Math.tan(o.Math.DEG2RAD * t * .5), a = -i, s = a * e, l = i * e;
            return this.makeFrustum(s, l, a, i, n, r)
        }, makeOrthographic: function (t, e, n, r, i, o) {
            var a = this.elements, s = 1 / (e - t), l = 1 / (n - r), c = 1 / (o - i), u = (e + t) * s, h = (n + r) * l, f = (o + i) * c;
            return a[0] = 2 * s, a[4] = 0, a[8] = 0, a[12] = -u, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -h, a[2] = 0, a[6] = 0, a[10] = -2 * c, a[14] = -f, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
        }, equals: function (t) {
            for (var e = this.elements, n = t.elements, r = 0; r < 16; r++)if (e[r] !== n[r])return !1;
            return !0
        }, fromArray: function (t) {
            return this.elements.set(t), this
        }, toArray: function (t, e) {
            void 0 === t && (t = []), void 0 === e && (e = 0);
            var n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t
        }
    }, o.Ray = function (t, e) {
        this.origin = void 0 !== t ? t : new o.Vector3, this.direction = void 0 !== e ? e : new o.Vector3
    }, o.Ray.prototype = {
        constructor: o.Ray, set: function (t, e) {
            return this.origin.copy(t), this.direction.copy(e), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.origin.copy(t.origin), this.direction.copy(t.direction), this
        }, at: function (t, e) {
            var n = e || new o.Vector3;
            return n.copy(this.direction).multiplyScalar(t).add(this.origin)
        }, lookAt: function (t) {
            return this.direction.copy(t).sub(this.origin).normalize(), this
        }, recast: function () {
            var t = new o.Vector3;
            return function (e) {
                return this.origin.copy(this.at(e, t)), this
            }
        }(), closestPointToPoint: function (t, e) {
            var n = e || new o.Vector3;
            n.subVectors(t, this.origin);
            var r = n.dot(this.direction);
            return r < 0 ? n.copy(this.origin) : n.copy(this.direction).multiplyScalar(r).add(this.origin)
        }, distanceToPoint: function (t) {
            return Math.sqrt(this.distanceSqToPoint(t))
        }, distanceSqToPoint: function () {
            var t = new o.Vector3;
            return function (e) {
                var n = t.subVectors(e, this.origin).dot(this.direction);
                return n < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(n).add(this.origin), t.distanceToSquared(e))
            }
        }(), distanceSqToSegment: function () {
            var t = new o.Vector3, e = new o.Vector3, n = new o.Vector3;
            return function (r, i, o, a) {
                t.copy(r).add(i).multiplyScalar(.5), e.copy(i).sub(r).normalize(), n.copy(this.origin).sub(t);
                var s, l, c, u, h = .5 * r.distanceTo(i), f = -this.direction.dot(e), d = n.dot(this.direction), p = -n.dot(e), m = n.lengthSq(), v = Math.abs(1 - f * f);
                if (v > 0)if (s = f * p - d, l = f * d - p, u = h * v, s >= 0)if (l >= -u)if (l <= u) {
                    var g = 1 / v;
                    s *= g, l *= g, c = s * (s + f * l + 2 * d) + l * (f * s + l + 2 * p) + m
                } else l = h, s = Math.max(0, -(f * l + d)), c = -s * s + l * (l + 2 * p) + m; else l = -h, s = Math.max(0, -(f * l + d)), c = -s * s + l * (l + 2 * p) + m; else l <= -u ? (s = Math.max(0, -(-f * h + d)), l = s > 0 ? -h : Math.min(Math.max(-h, -p), h), c = -s * s + l * (l + 2 * p) + m) : l <= u ? (s = 0, l = Math.min(Math.max(-h, -p), h), c = l * (l + 2 * p) + m) : (s = Math.max(0, -(f * h + d)), l = s > 0 ? h : Math.min(Math.max(-h, -p), h), c = -s * s + l * (l + 2 * p) + m); else l = f > 0 ? -h : h, s = Math.max(0, -(f * l + d)), c = -s * s + l * (l + 2 * p) + m;
                return o && o.copy(this.direction).multiplyScalar(s).add(this.origin), a && a.copy(e).multiplyScalar(l).add(t), c
            }
        }(), intersectSphere: function () {
            var t = new o.Vector3;
            return function (e, n) {
                t.subVectors(e.center, this.origin);
                var r = t.dot(this.direction), i = t.dot(t) - r * r, o = e.radius * e.radius;
                if (i > o)return null;
                var a = Math.sqrt(o - i), s = r - a, l = r + a;
                return s < 0 && l < 0 ? null : s < 0 ? this.at(l, n) : this.at(s, n)
            }
        }(), intersectsSphere: function (t) {
            return this.distanceToPoint(t.center) <= t.radius
        }, distanceToPlane: function (t) {
            var e = t.normal.dot(this.direction);
            if (0 === e)return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            var n = -(this.origin.dot(t.normal) + t.constant) / e;
            return n >= 0 ? n : null
        }, intersectPlane: function (t, e) {
            var n = this.distanceToPlane(t);
            return null === n ? null : this.at(n, e)
        }, intersectsPlane: function (t) {
            var e = t.distanceToPoint(this.origin);
            if (0 === e)return !0;
            var n = t.normal.dot(this.direction);
            return n * e < 0
        }, intersectBox: function (t, e) {
            var n, r, i, o, a, s, l = 1 / this.direction.x, c = 1 / this.direction.y, u = 1 / this.direction.z, h = this.origin;
            return l >= 0 ? (n = (t.min.x - h.x) * l, r = (t.max.x - h.x) * l) : (n = (t.max.x - h.x) * l, r = (t.min.x - h.x) * l), c >= 0 ? (i = (t.min.y - h.y) * c, o = (t.max.y - h.y) * c) : (i = (t.max.y - h.y) * c, o = (t.min.y - h.y) * c), n > o || i > r ? null : ((i > n || n !== n) && (n = i), (o < r || r !== r) && (r = o), u >= 0 ? (a = (t.min.z - h.z) * u, s = (t.max.z - h.z) * u) : (a = (t.max.z - h.z) * u, s = (t.min.z - h.z) * u), n > s || a > r ? null : ((a > n || n !== n) && (n = a), (s < r || r !== r) && (r = s), r < 0 ? null : this.at(n >= 0 ? n : r, e)))
        }, intersectsBox: function () {
            var t = new o.Vector3;
            return function (e) {
                return null !== this.intersectBox(e, t)
            }
        }(), intersectTriangle: function () {
            var t = new o.Vector3, e = new o.Vector3, n = new o.Vector3, r = new o.Vector3;
            return function (i, o, a, s, l) {
                e.subVectors(o, i), n.subVectors(a, i), r.crossVectors(e, n);
                var c, u = this.direction.dot(r);
                if (u > 0) {
                    if (s)return null;
                    c = 1
                } else {
                    if (!(u < 0))return null;
                    c = -1, u = -u
                }
                t.subVectors(this.origin, i);
                var h = c * this.direction.dot(n.crossVectors(t, n));
                if (h < 0)return null;
                var f = c * this.direction.dot(e.cross(t));
                if (f < 0)return null;
                if (h + f > u)return null;
                var d = -c * t.dot(r);
                return d < 0 ? null : this.at(d / u, l)
            }
        }(), applyMatrix4: function (t) {
            return this.direction.add(this.origin).applyMatrix4(t), this.origin.applyMatrix4(t), this.direction.sub(this.origin),
              this.direction.normalize(), this
        }, equals: function (t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        }
    }, o.Sphere = function (t, e) {
        this.center = void 0 !== t ? t : new o.Vector3, this.radius = void 0 !== e ? e : 0
    }, o.Sphere.prototype = {
        constructor: o.Sphere, set: function (t, e) {
            return this.center.copy(t), this.radius = e, this
        }, setFromPoints: function () {
            var t = new o.Box3;
            return function (e, n) {
                var r = this.center;
                void 0 !== n ? r.copy(n) : t.setFromPoints(e).center(r);
                for (var i = 0, o = 0, a = e.length; o < a; o++)i = Math.max(i, r.distanceToSquared(e[o]));
                return this.radius = Math.sqrt(i), this
            }
        }(), clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.center.copy(t.center), this.radius = t.radius, this
        }, empty: function () {
            return this.radius <= 0
        }, containsPoint: function (t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
        }, distanceToPoint: function (t) {
            return t.distanceTo(this.center) - this.radius
        }, intersectsSphere: function (t) {
            var e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
        }, intersectsBox: function (t) {
            return t.intersectsSphere(this)
        }, intersectsPlane: function (t) {
            return Math.abs(this.center.dot(t.normal) - t.constant) <= this.radius
        }, clampPoint: function (t, e) {
            var n = this.center.distanceToSquared(t), r = e || new o.Vector3;
            return r.copy(t), n > this.radius * this.radius && (r.sub(this.center).normalize(), r.multiplyScalar(this.radius).add(this.center)), r
        }, getBoundingBox: function (t) {
            var e = t || new o.Box3;
            return e.set(this.center, this.center), e.expandByScalar(this.radius), e
        }, applyMatrix4: function (t) {
            return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
        }, translate: function (t) {
            return this.center.add(t), this
        }, equals: function (t) {
            return t.center.equals(this.center) && t.radius === this.radius
        }
    }, o.Frustum = function (t, e, n, r, i, a) {
        this.planes = [void 0 !== t ? t : new o.Plane, void 0 !== e ? e : new o.Plane, void 0 !== n ? n : new o.Plane, void 0 !== r ? r : new o.Plane, void 0 !== i ? i : new o.Plane, void 0 !== a ? a : new o.Plane]
    }, o.Frustum.prototype = {
        constructor: o.Frustum, set: function (t, e, n, r, i, o) {
            var a = this.planes;
            return a[0].copy(t), a[1].copy(e), a[2].copy(n), a[3].copy(r), a[4].copy(i), a[5].copy(o), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            for (var e = this.planes, n = 0; n < 6; n++)e[n].copy(t.planes[n]);
            return this
        }, setFromMatrix: function (t) {
            var e = this.planes, n = t.elements, r = n[0], i = n[1], o = n[2], a = n[3], s = n[4], l = n[5], c = n[6], u = n[7], h = n[8], f = n[9], d = n[10], p = n[11], m = n[12], v = n[13], g = n[14], y = n[15];
            return e[0].setComponents(a - r, u - s, p - h, y - m).normalize(), e[1].setComponents(a + r, u + s, p + h, y + m).normalize(), e[2].setComponents(a + i, u + l, p + f, y + v).normalize(), e[3].setComponents(a - i, u - l, p - f, y - v).normalize(), e[4].setComponents(a - o, u - c, p - d, y - g).normalize(), e[5].setComponents(a + o, u + c, p + d, y + g).normalize(), this
        }, intersectsObject: function () {
            var t = new o.Sphere;
            return function (e) {
                var n = e.geometry;
                return null === n.boundingSphere && n.computeBoundingSphere(), t.copy(n.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
            }
        }(), intersectsSprite: function () {
            var t = new o.Sphere;
            return function (e) {
                return t.center.set(0, 0, 0), t.radius = .7071067811865476, t.applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
            }
        }(), intersectsSphere: function (t) {
            for (var e = this.planes, n = t.center, r = -t.radius, i = 0; i < 6; i++) {
                var o = e[i].distanceToPoint(n);
                if (o < r)return !1
            }
            return !0
        }, intersectsBox: function () {
            var t = new o.Vector3, e = new o.Vector3;
            return function (n) {
                for (var r = this.planes, i = 0; i < 6; i++) {
                    var o = r[i];
                    t.x = o.normal.x > 0 ? n.min.x : n.max.x, e.x = o.normal.x > 0 ? n.max.x : n.min.x, t.y = o.normal.y > 0 ? n.min.y : n.max.y, e.y = o.normal.y > 0 ? n.max.y : n.min.y, t.z = o.normal.z > 0 ? n.min.z : n.max.z, e.z = o.normal.z > 0 ? n.max.z : n.min.z;
                    var a = o.distanceToPoint(t), s = o.distanceToPoint(e);
                    if (a < 0 && s < 0)return !1
                }
                return !0
            }
        }(), containsPoint: function (t) {
            for (var e = this.planes, n = 0; n < 6; n++)if (e[n].distanceToPoint(t) < 0)return !1;
            return !0
        }
    }, o.Plane = function (t, e) {
        this.normal = void 0 !== t ? t : new o.Vector3(1, 0, 0), this.constant = void 0 !== e ? e : 0
    }, o.Plane.prototype = {
        constructor: o.Plane, set: function (t, e) {
            return this.normal.copy(t), this.constant = e, this
        }, setComponents: function (t, e, n, r) {
            return this.normal.set(t, e, n), this.constant = r, this
        }, setFromNormalAndCoplanarPoint: function (t, e) {
            return this.normal.copy(t), this.constant = -e.dot(this.normal), this
        }, setFromCoplanarPoints: function () {
            var t = new o.Vector3, e = new o.Vector3;
            return function (n, r, i) {
                var o = t.subVectors(i, r).cross(e.subVectors(n, r)).normalize();
                return this.setFromNormalAndCoplanarPoint(o, n), this
            }
        }(), clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.normal.copy(t.normal), this.constant = t.constant, this
        }, normalize: function () {
            var t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t), this.constant *= t, this
        }, negate: function () {
            return this.constant *= -1, this.normal.negate(), this
        }, distanceToPoint: function (t) {
            return this.normal.dot(t) + this.constant
        }, distanceToSphere: function (t) {
            return this.distanceToPoint(t.center) - t.radius
        }, projectPoint: function (t, e) {
            return this.orthoPoint(t, e).sub(t).negate()
        }, orthoPoint: function (t, e) {
            var n = this.distanceToPoint(t), r = e || new o.Vector3;
            return r.copy(this.normal).multiplyScalar(n)
        }, intersectLine: function () {
            var t = new o.Vector3;
            return function (e, n) {
                var r = n || new o.Vector3, i = e.delta(t), a = this.normal.dot(i);
                if (0 !== a) {
                    var s = -(e.start.dot(this.normal) + this.constant) / a;
                    if (!(s < 0 || s > 1))return r.copy(i).multiplyScalar(s).add(e.start)
                } else if (0 === this.distanceToPoint(e.start))return r.copy(e.start)
            }
        }(), intersectsLine: function (t) {
            var e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
            return e < 0 && n > 0 || n < 0 && e > 0
        }, intersectsBox: function (t) {
            return t.intersectsPlane(this)
        }, intersectsSphere: function (t) {
            return t.intersectsPlane(this)
        }, coplanarPoint: function (t) {
            var e = t || new o.Vector3;
            return e.copy(this.normal).multiplyScalar(-this.constant)
        }, applyMatrix4: function () {
            var t = new o.Vector3, e = new o.Matrix3;
            return function (n, r) {
                var i = this.coplanarPoint(t).applyMatrix4(n), o = r || e.getNormalMatrix(n), a = this.normal.applyMatrix3(o).normalize();
                return this.constant = -i.dot(a), this
            }
        }(), translate: function (t) {
            return this.constant = this.constant - t.dot(this.normal), this
        }, equals: function (t) {
            return t.normal.equals(this.normal) && t.constant === this.constant
        }
    }, o.Spherical = function (t, e, n) {
        return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== n ? n : 0, this
    }, o.Spherical.prototype = {
        constructor: o.Spherical, set: function (t, e, n) {
            return this.radius = t, this.phi = e, this.theta = n, this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.radius.copy(t.radius), this.phi.copy(t.phi), this.theta.copy(t.theta), this
        }, makeSafe: function () {
            var t = 1e-6;
            return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this
        }, setFromVector3: function (t) {
            return this.radius = t.length(), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t.x, t.z), this.phi = Math.acos(o.Math.clamp(t.y / this.radius, -1, 1))), this
        }
    }, o.Math = {
        DEG2RAD: Math.PI / 180, RAD2DEG: 180 / Math.PI, generateUUID: function () {
            var t, e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), n = new Array(36), r = 0;
            return function () {
                for (var i = 0; i < 36; i++)8 === i || 13 === i || 18 === i || 23 === i ? n[i] = "-" : 14 === i ? n[i] = "4" : (r <= 2 && (r = 33554432 + 16777216 * Math.random() | 0), t = 15 & r, r >>= 4, n[i] = e[19 === i ? 3 & t | 8 : t]);
                return n.join("")
            }
        }(), clamp: function (t, e, n) {
            return Math.max(e, Math.min(n, t))
        }, euclideanModulo: function (t, e) {
            return (t % e + e) % e
        }, mapLinear: function (t, e, n, r, i) {
            return r + (t - e) * (i - r) / (n - e)
        }, smoothstep: function (t, e, n) {
            return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e), t * t * (3 - 2 * t))
        }, smootherstep: function (t, e, n) {
            return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e), t * t * t * (t * (6 * t - 15) + 10))
        }, random16: function () {
            return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."), Math.random()
        }, randInt: function (t, e) {
            return t + Math.floor(Math.random() * (e - t + 1))
        }, randFloat: function (t, e) {
            return t + Math.random() * (e - t)
        }, randFloatSpread: function (t) {
            return t * (.5 - Math.random())
        }, degToRad: function (t) {
            return t * o.Math.DEG2RAD
        }, radToDeg: function (t) {
            return t * o.Math.RAD2DEG
        }, isPowerOfTwo: function (t) {
            return 0 === (t & t - 1) && 0 !== t
        }, nearestPowerOfTwo: function (t) {
            return Math.pow(2, Math.round(Math.log(t) / Math.LN2))
        }, nextPowerOfTwo: function (t) {
            return t--, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, t |= t >> 16, t++, t
        }
    }, o.Spline = function (t) {
        function e(t, e, n, r, i, o, a) {
            var s = .5 * (n - t), l = .5 * (r - e);
            return (2 * (e - n) + s + l) * a + (-3 * (e - n) - 2 * s - l) * o + s * i + e
        }

        this.points = t;
        var n, r, i, a, s, l, c, u, h, f = [], d = {x: 0, y: 0, z: 0};
        this.initFromArray = function (t) {
            this.points = [];
            for (var e = 0; e < t.length; e++)this.points[e] = {x: t[e][0], y: t[e][1], z: t[e][2]}
        }, this.getPoint = function (t) {
            return n = (this.points.length - 1) * t, r = Math.floor(n), i = n - r, f[0] = 0 === r ? r : r - 1, f[1] = r, f[2] = r > this.points.length - 2 ? this.points.length - 1 : r + 1, f[3] = r > this.points.length - 3 ? this.points.length - 1 : r + 2, l = this.points[f[0]], c = this.points[f[1]], u = this.points[f[2]], h = this.points[f[3]], a = i * i, s = i * a, d.x = e(l.x, c.x, u.x, h.x, i, a, s), d.y = e(l.y, c.y, u.y, h.y, i, a, s), d.z = e(l.z, c.z, u.z, h.z, i, a, s), d
        }, this.getControlPointsArray = function () {
            var t, e, n = this.points.length, r = [];
            for (t = 0; t < n; t++)e = this.points[t], r[t] = [e.x, e.y, e.z];
            return r
        }, this.getLength = function (t) {
            var e, n, r, i, a = 0, s = 0, l = 0, c = new o.Vector3, u = new o.Vector3, h = [], f = 0;
            for (h[0] = 0, t || (t = 100), r = this.points.length * t, c.copy(this.points[0]), e = 1; e < r; e++)n = e / r, i = this.getPoint(n), u.copy(i), f += u.distanceTo(c), c.copy(i), a = (this.points.length - 1) * n, s = Math.floor(a), s !== l && (h[s] = f, l = s);
            return h[h.length] = f, {chunks: h, total: f}
        }, this.reparametrizeByArcLength = function (t) {
            var e, n, r, i, a, s, l, c, u = [], h = new o.Vector3, f = this.getLength();
            for (u.push(h.copy(this.points[0]).clone()), e = 1; e < this.points.length; e++) {
                for (s = f.chunks[e] - f.chunks[e - 1], l = Math.ceil(t * s / f.total), i = (e - 1) / (this.points.length - 1), a = e / (this.points.length - 1), n = 1; n < l - 1; n++)r = i + n * (1 / l) * (a - i), c = this.getPoint(r), u.push(h.copy(c).clone());
                u.push(h.copy(this.points[e]).clone())
            }
            this.points = u
        }
    }, o.Triangle = function (t, e, n) {
        this.a = void 0 !== t ? t : new o.Vector3, this.b = void 0 !== e ? e : new o.Vector3, this.c = void 0 !== n ? n : new o.Vector3
    }, o.Triangle.normal = function () {
        var t = new o.Vector3;
        return function (e, n, r, i) {
            var a = i || new o.Vector3;
            a.subVectors(r, n), t.subVectors(e, n), a.cross(t);
            var s = a.lengthSq();
            return s > 0 ? a.multiplyScalar(1 / Math.sqrt(s)) : a.set(0, 0, 0)
        }
    }(), o.Triangle.barycoordFromPoint = function () {
        var t = new o.Vector3, e = new o.Vector3, n = new o.Vector3;
        return function (r, i, a, s, l) {
            t.subVectors(s, i), e.subVectors(a, i), n.subVectors(r, i);
            var c = t.dot(t), u = t.dot(e), h = t.dot(n), f = e.dot(e), d = e.dot(n), p = c * f - u * u, m = l || new o.Vector3;
            if (0 === p)return m.set(-2, -1, -1);
            var v = 1 / p, g = (f * h - u * d) * v, y = (c * d - u * h) * v;
            return m.set(1 - g - y, y, g)
        }
    }(), o.Triangle.containsPoint = function () {
        var t = new o.Vector3;
        return function (e, n, r, i) {
            var a = o.Triangle.barycoordFromPoint(e, n, r, i, t);
            return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1
        }
    }(), o.Triangle.prototype = {
        constructor: o.Triangle, set: function (t, e, n) {
            return this.a.copy(t), this.b.copy(e), this.c.copy(n), this
        }, setFromPointsAndIndices: function (t, e, n, r) {
            return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[r]), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
        }, area: function () {
            var t = new o.Vector3, e = new o.Vector3;
            return function () {
                return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length()
            }
        }(), midpoint: function (t) {
            var e = t || new o.Vector3;
            return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        }, normal: function (t) {
            return o.Triangle.normal(this.a, this.b, this.c, t)
        }, plane: function (t) {
            var e = t || new o.Plane;
            return e.setFromCoplanarPoints(this.a, this.b, this.c)
        }, barycoordFromPoint: function (t, e) {
            return o.Triangle.barycoordFromPoint(t, this.a, this.b, this.c, e)
        }, containsPoint: function (t) {
            return o.Triangle.containsPoint(t, this.a, this.b, this.c)
        }, closestPointToPoint: function () {
            var t, e, n, r;
            return function (i, a) {
                void 0 === t && (t = new o.Plane, e = [new o.Line3, new o.Line3, new o.Line3], n = new o.Vector3, r = new o.Vector3);
                var s = a || new o.Vector3, l = 1 / 0;
                if (t.setFromCoplanarPoints(this.a, this.b, this.c), t.projectPoint(i, n), this.containsPoint(n) === !0) s.copy(n); else {
                    e[0].set(this.a, this.b), e[1].set(this.b, this.c), e[2].set(this.c, this.a);
                    for (var c = 0; c < e.length; c++) {
                        e[c].closestPointToPoint(n, !0, r);
                        var u = n.distanceToSquared(r);
                        u < l && (l = u, s.copy(r))
                    }
                }
                return s
            }
        }(), equals: function (t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
    }, o.Interpolant = function (t, e, n, r) {
        this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== r ? r : new e.constructor(n), this.sampleValues = e, this.valueSize = n
    }, o.Interpolant.prototype = {
        constructor: o.Interpolant, evaluate: function (t) {
            var e = this.parameterPositions, n = this._cachedIndex, r = e[n], i = e[n - 1];
            t:{
                e:{
                    var o;
                    n:{
                        r:if (!(t < r)) {
                            for (var a = n + 2; ;) {
                                if (void 0 === r) {
                                    if (t < i)break r;
                                    return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t, i)
                                }
                                if (n === a)break;
                                if (i = r, r = e[++n], t < r)break e
                            }
                            o = e.length;
                            break n
                        }
                        {
                            if (t >= i)break t;
                            var s = e[1];
                            t < s && (n = 2, i = s);
                            for (var a = n - 2; ;) {
                                if (void 0 === i)return this._cachedIndex = 0, this.beforeStart_(0, t, r);
                                if (n === a)break;
                                if (r = i, i = e[--n - 1], t >= i)break e
                            }
                            o = n, n = 0
                        }
                    }
                    for (; n < o;) {
                        var l = n + o >>> 1;
                        t < e[l] ? o = l : n = l + 1
                    }
                    if (r = e[n], i = e[n - 1], void 0 === i)return this._cachedIndex = 0, this.beforeStart_(0, t, r);
                    if (void 0 === r)return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, i, t)
                }
                this._cachedIndex = n, this.intervalChanged_(n, i, r)
            }
            return this.interpolate_(n, i, t, r)
        }, settings: null, DefaultSettings_: {}, getSettings_: function () {
            return this.settings || this.DefaultSettings_
        }, copySampleValue_: function (t) {
            for (var e = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = t * r, o = 0; o !== r; ++o)e[o] = n[i + o];
            return e
        }, interpolate_: function (t, e, n, r) {
            throw new Error("call to abstract method")
        }, intervalChanged_: function (t, e, n) {
        }
    }, Object.assign(o.Interpolant.prototype, {
        beforeStart_: o.Interpolant.prototype.copySampleValue_,
        afterEnd_: o.Interpolant.prototype.copySampleValue_
    }), o.CubicInterpolant = function (t, e, n, r) {
        o.Interpolant.call(this, t, e, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
    }, o.CubicInterpolant.prototype = Object.assign(Object.create(o.Interpolant.prototype), {
        constructor: o.CubicInterpolant,
        DefaultSettings_: {endingStart: o.ZeroCurvatureEnding, endingEnd: o.ZeroCurvatureEnding},
        intervalChanged_: function (t, e, n) {
            var r = this.parameterPositions, i = t - 2, a = t + 1, s = r[i], l = r[a];
            if (void 0 === s)switch (this.getSettings_().endingStart) {
                case o.ZeroSlopeEnding:
                    i = t, s = 2 * e - n;
                    break;
                case o.WrapAroundEnding:
                    i = r.length - 2, s = e + r[i] - r[i + 1];
                    break;
                default:
                    i = t, s = n
            }
            if (void 0 === l)switch (this.getSettings_().endingEnd) {
                case o.ZeroSlopeEnding:
                    a = t, l = 2 * n - e;
                    break;
                case o.WrapAroundEnding:
                    a = 1, l = n + r[1] - r[0];
                    break;
                default:
                    a = t - 1, l = e
            }
            var c = .5 * (n - e), u = this.valueSize;
            this._weightPrev = c / (e - s), this._weightNext = c / (l - n), this._offsetPrev = i * u, this._offsetNext = a * u
        },
        interpolate_: function (t, e, n, r) {
            for (var i = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = t * a, l = s - a, c = this._offsetPrev, u = this._offsetNext, h = this._weightPrev, f = this._weightNext, d = (n - e) / (r - e), p = d * d, m = p * d, v = -h * m + 2 * h * p - h * d, g = (1 + h) * m + (-1.5 - 2 * h) * p + (-.5 + h) * d + 1, y = (-1 - f) * m + (1.5 + f) * p + .5 * d, x = f * m - f * p, _ = 0; _ !== a; ++_)i[_] = v * o[c + _] + g * o[l + _] + y * o[s + _] + x * o[u + _];
            return i
        }
    }), o.DiscreteInterpolant = function (t, e, n, r) {
        o.Interpolant.call(this, t, e, n, r)
    }, o.DiscreteInterpolant.prototype = Object.assign(Object.create(o.Interpolant.prototype), {
        constructor: o.DiscreteInterpolant,
        interpolate_: function (t, e, n, r) {
            return this.copySampleValue_(t - 1)
        }
    }), o.LinearInterpolant = function (t, e, n, r) {
        o.Interpolant.call(this, t, e, n, r)
    }, o.LinearInterpolant.prototype = Object.assign(Object.create(o.Interpolant.prototype), {
        constructor: o.LinearInterpolant,
        interpolate_: function (t, e, n, r) {
            for (var i = this.resultBuffer, o = this.sampleValues, a = this.valueSize, s = t * a, l = s - a, c = (n - e) / (r - e), u = 1 - c, h = 0; h !== a; ++h)i[h] = o[l + h] * u + o[s + h] * c;
            return i
        }
    }), o.QuaternionLinearInterpolant = function (t, e, n, r) {
        o.Interpolant.call(this, t, e, n, r)
    }, o.QuaternionLinearInterpolant.prototype = Object.assign(Object.create(o.Interpolant.prototype), {
        constructor: o.QuaternionLinearInterpolant,
        interpolate_: function (t, e, n, r) {
            for (var i = this.resultBuffer, a = this.sampleValues, s = this.valueSize, l = t * s, c = (n - e) / (r - e), u = l + s; l !== u; l += 4)o.Quaternion.slerpFlat(i, 0, a, l - s, a, l, c);
            return i
        }
    }), o.Clock = function (t) {
        this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
    }, o.Clock.prototype = {
        constructor: o.Clock, start: function () {
            this.startTime = (performance || Date).now(), this.oldTime = this.startTime, this.running = !0
        }, stop: function () {
            this.getElapsedTime(), this.running = !1
        }, getElapsedTime: function () {
            return this.getDelta(), this.elapsedTime
        }, getDelta: function () {
            var t = 0;
            if (this.autoStart && !this.running && this.start(), this.running) {
                var e = (performance || Date).now();
                t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
            }
            return t
        }
    }, o.EventDispatcher = function () {
    }, Object.assign(o.EventDispatcher.prototype, {
        addEventListener: function (t, e) {
            void 0 === this._listeners && (this._listeners = {});
            var n = this._listeners;
            void 0 === n[t] && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e)
        }, hasEventListener: function (t, e) {
            if (void 0 === this._listeners)return !1;
            var n = this._listeners;
            return void 0 !== n[t] && n[t].indexOf(e) !== -1
        }, removeEventListener: function (t, e) {
            if (void 0 !== this._listeners) {
                var n = this._listeners, r = n[t];
                if (void 0 !== r) {
                    var i = r.indexOf(e);
                    i !== -1 && r.splice(i, 1)
                }
            }
        }, dispatchEvent: function (t) {
            if (void 0 !== this._listeners) {
                var e = this._listeners, n = e[t.type];
                if (void 0 !== n) {
                    t.target = this;
                    var r = [], i = 0, o = n.length;
                    for (i = 0; i < o; i++)r[i] = n[i];
                    for (i = 0; i < o; i++)r[i].call(this, t)
                }
            }
        }
    }), o.Layers = function () {
        this.mask = 1
    }, o.Layers.prototype = {
        constructor: o.Layers, set: function (t) {
            this.mask = 1 << t
        }, enable: function (t) {
            this.mask |= 1 << t
        }, toggle: function (t) {
            this.mask ^= 1 << t
        }, disable: function (t) {
            this.mask &= ~(1 << t)
        }, test: function (t) {
            return 0 !== (this.mask & t.mask)
        }
    }, function (t) {
        function e(t, e) {
            return t.distance - e.distance
        }

        function n(t, e, r, i) {
            if (t.visible !== !1 && (t.raycast(e, r), i === !0))for (var o = t.children, a = 0, s = o.length; a < s; a++)n(o[a], e, r, !0)
        }

        t.Raycaster = function (e, n, r, i) {
            this.ray = new t.Ray(e, n), this.near = r || 0, this.far = i || 1 / 0, this.params = {
                Mesh: {},
                Line: {},
                LOD: {},
                Points: {threshold: 1},
                Sprite: {}
            }, Object.defineProperties(this.params, {
                PointCloud: {
                    get: function () {
                        return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
                    }
                }
            })
        }, t.Raycaster.prototype = {
            constructor: t.Raycaster, linePrecision: 1, set: function (t, e) {
                this.ray.set(t, e)
            }, setFromCamera: function (e, n) {
                n instanceof t.PerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(n.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(n).sub(this.ray.origin).normalize()) : n instanceof t.OrthographicCamera ? (this.ray.origin.set(e.x, e.y, (n.near + n.far) / (n.near - n.far)).unproject(n), this.ray.direction.set(0, 0, -1).transformDirection(n.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
            }, intersectObject: function (t, r) {
                var i = [];
                return n(t, this, i, r), i.sort(e), i
            }, intersectObjects: function (t, r) {
                var i = [];
                if (Array.isArray(t) === !1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), i;
                for (var o = 0, a = t.length; o < a; o++)n(t[o], this, i, r);
                return i.sort(e), i
            }
        }
    }(o), o.Object3D = function () {
        function t() {
            i.setFromEuler(r, !1)
        }

        function e() {
            r.setFromQuaternion(i, void 0, !1)
        }

        Object.defineProperty(this, "id", {value: o.Object3DIdCount++}), this.uuid = o.Math.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = o.Object3D.DefaultUp.clone();
        var n = new o.Vector3, r = new o.Euler, i = new o.Quaternion, a = new o.Vector3(1, 1, 1);
        r.onChange(t), i.onChange(e), Object.defineProperties(this, {
            position: {enumerable: !0, value: n},
            rotation: {enumerable: !0, value: r},
            quaternion: {enumerable: !0, value: i},
            scale: {enumerable: !0, value: a},
            modelViewMatrix: {value: new o.Matrix4},
            normalMatrix: {value: new o.Matrix3}
        }), this.matrix = new o.Matrix4, this.matrixWorld = new o.Matrix4, this.matrixAutoUpdate = o.Object3D.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new o.Layers, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
    }, o.Object3D.DefaultUp = new o.Vector3(0, 1, 0), o.Object3D.DefaultMatrixAutoUpdate = !0, Object.assign(o.Object3D.prototype, o.EventDispatcher.prototype, {
        applyMatrix: function (t) {
            this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
        }, setRotationFromAxisAngle: function (t, e) {
            this.quaternion.setFromAxisAngle(t, e)
        }, setRotationFromEuler: function (t) {
            this.quaternion.setFromEuler(t, !0)
        }, setRotationFromMatrix: function (t) {
            this.quaternion.setFromRotationMatrix(t)
        }, setRotationFromQuaternion: function (t) {
            this.quaternion.copy(t)
        }, rotateOnAxis: function () {
            var t = new o.Quaternion;
            return function (e, n) {
                return t.setFromAxisAngle(e, n), this.quaternion.multiply(t), this
            }
        }(), rotateX: function () {
            var t = new o.Vector3(1, 0, 0);
            return function (e) {
                return this.rotateOnAxis(t, e)
            }
        }(), rotateY: function () {
            var t = new o.Vector3(0, 1, 0);
            return function (e) {
                return this.rotateOnAxis(t, e)
            }
        }(), rotateZ: function () {
            var t = new o.Vector3(0, 0, 1);
            return function (e) {
                return this.rotateOnAxis(t, e)
            }
        }(), translateOnAxis: function () {
            var t = new o.Vector3;
            return function (e, n) {
                return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(n)), this
            }
        }(), translateX: function () {
            var t = new o.Vector3(1, 0, 0);
            return function (e) {
                return this.translateOnAxis(t, e)
            }
        }(), translateY: function () {
            var t = new o.Vector3(0, 1, 0);
            return function (e) {
                return this.translateOnAxis(t, e)
            }
        }(), translateZ: function () {
            var t = new o.Vector3(0, 0, 1);
            return function (e) {
                return this.translateOnAxis(t, e)
            }
        }(), localToWorld: function (t) {
            return t.applyMatrix4(this.matrixWorld)
        }, worldToLocal: function () {
            var t = new o.Matrix4;
            return function (e) {
                return e.applyMatrix4(t.getInverse(this.matrixWorld))
            }
        }(), lookAt: function () {
            var t = new o.Matrix4;
            return function (e) {
                t.lookAt(e, this.position, this.up), this.quaternion.setFromRotationMatrix(t)
            }
        }(), add: function (t) {
            if (arguments.length > 1) {
                for (var e = 0; e < arguments.length; e++)this.add(arguments[e]);
                return this
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t instanceof o.Object3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({type: "added"}), this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
        }, remove: function (t) {
            if (arguments.length > 1)for (var e = 0; e < arguments.length; e++)this.remove(arguments[e]);
            var n = this.children.indexOf(t);
            n !== -1 && (t.parent = null, t.dispatchEvent({type: "removed"}), this.children.splice(n, 1))
        }, getObjectById: function (t) {
            return this.getObjectByProperty("id", t)
        }, getObjectByName: function (t) {
            return this.getObjectByProperty("name", t)
        }, getObjectByProperty: function (t, e) {
            if (this[t] === e)return this;
            for (var n = 0, r = this.children.length; n < r; n++) {
                var i = this.children[n], o = i.getObjectByProperty(t, e);
                if (void 0 !== o)return o
            }
        }, getWorldPosition: function (t) {
            var e = t || new o.Vector3;
            return this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
        }, getWorldQuaternion: function () {
            var t = new o.Vector3, e = new o.Vector3;
            return function (n) {
                var r = n || new o.Quaternion;
                return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, r, e), r
            }
        }(), getWorldRotation: function () {
            var t = new o.Quaternion;
            return function (e) {
                var n = e || new o.Euler;
                return this.getWorldQuaternion(t), n.setFromQuaternion(t, this.rotation.order, !1)
            }
        }(), getWorldScale: function () {
            var t = new o.Vector3, e = new o.Quaternion;
            return function (n) {
                var r = n || new o.Vector3;
                return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, r), r
            }
        }(), getWorldDirection: function () {
            var t = new o.Quaternion;
            return function (e) {
                var n = e || new o.Vector3;
                return this.getWorldQuaternion(t), n.set(0, 0, 1).applyQuaternion(t)
            }
        }(), raycast: function () {
        }, traverse: function (t) {
            t(this);
            for (var e = this.children, n = 0, r = e.length; n < r; n++)e[n].traverse(t)
        }, traverseVisible: function (t) {
            if (this.visible !== !1) {
                t(this);
                for (var e = this.children, n = 0, r = e.length; n < r; n++)e[n].traverseVisible(t)
            }
        }, traverseAncestors: function (t) {
            var e = this.parent;
            null !== e && (t(e), e.traverseAncestors(t))
        }, updateMatrix: function () {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
        }, updateMatrixWorld: function (t) {
            this.matrixAutoUpdate === !0 && this.updateMatrix(), this.matrixWorldNeedsUpdate !== !0 && t !== !0 || (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
            for (var e = 0, n = this.children.length; e < n; e++)this.children[e].updateMatrixWorld(t)
        }, toJSON: function (t) {
            function e(t) {
                var e = [];
                for (var n in t) {
                    var r = t[n];
                    delete r.metadata, e.push(r)
                }
                return e
            }

            var n = void 0 === t || "" === t, r = {};
            n && (t = {geometries: {}, materials: {}, textures: {}, images: {}}, r.metadata = {
                version: 4.4,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var i = {};
            if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), i.matrix = this.matrix.toArray(), void 0 !== this.geometry && (void 0 === t.geometries[this.geometry.uuid] && (t.geometries[this.geometry.uuid] = this.geometry.toJSON(t)), i.geometry = this.geometry.uuid), void 0 !== this.material && (void 0 === t.materials[this.material.uuid] && (t.materials[this.material.uuid] = this.material.toJSON(t)), i.material = this.material.uuid), this.children.length > 0) {
                i.children = [];
                for (var o = 0; o < this.children.length; o++)i.children.push(this.children[o].toJSON(t).object)
            }
            if (n) {
                var a = e(t.geometries), s = e(t.materials), l = e(t.textures), c = e(t.images);
                a.length > 0 && (r.geometries = a), s.length > 0 && (r.materials = s), l.length > 0 && (r.textures = l), c.length > 0 && (r.images = c)
            }
            return r.object = i, r
        }, clone: function (t) {
            return (new this.constructor).copy(this, t)
        }, copy: function (t, e) {
            if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0)for (var n = 0; n < t.children.length; n++) {
                var r = t.children[n];
                this.add(r.clone())
            }
            return this
        }
    }), o.Object3DIdCount = 0, o.Face3 = function (t, e, n, r, i, a) {
        this.a = t, this.b = e, this.c = n, this.normal = r instanceof o.Vector3 ? r : new o.Vector3, this.vertexNormals = Array.isArray(r) ? r : [], this.color = i instanceof o.Color ? i : new o.Color, this.vertexColors = Array.isArray(i) ? i : [], this.materialIndex = void 0 !== a ? a : 0
    }, o.Face3.prototype = {
        constructor: o.Face3, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
            for (var e = 0, n = t.vertexNormals.length; e < n; e++)this.vertexNormals[e] = t.vertexNormals[e].clone();
            for (var e = 0, n = t.vertexColors.length; e < n; e++)this.vertexColors[e] = t.vertexColors[e].clone();
            return this
        }
    }, o.BufferAttribute = function (t, e, n) {
        this.uuid = o.Math.generateUUID(), this.array = t, this.itemSize = e, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0, this.normalized = n === !0
    }, o.BufferAttribute.prototype = {
        constructor: o.BufferAttribute, get count() {
            return this.array.length / this.itemSize
        }, set needsUpdate(t) {
            t === !0 && this.version++
        }, setDynamic: function (t) {
            return this.dynamic = t, this
        }, copy: function (t) {
            return this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.dynamic = t.dynamic, this
        }, copyAt: function (t, e, n) {
            t *= this.itemSize, n *= e.itemSize;
            for (var r = 0, i = this.itemSize; r < i; r++)this.array[t + r] = e.array[n + r];
            return this
        }, copyArray: function (t) {
            return this.array.set(t), this
        }, copyColorsArray: function (t) {
            for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", r), a = new o.Color), e[n++] = a.r, e[n++] = a.g, e[n++] = a.b
            }
            return this
        }, copyIndicesArray: function (t) {
            for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
                var o = t[r];
                e[n++] = o.a, e[n++] = o.b, e[n++] = o.c
            }
            return this
        }, copyVector2sArray: function (t) {
            for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), a = new o.Vector2), e[n++] = a.x, e[n++] = a.y
            }
            return this
        }, copyVector3sArray: function (t) {
            for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", r), a = new o.Vector3), e[n++] = a.x, e[n++] = a.y, e[n++] = a.z
            }
            return this
        }, copyVector4sArray: function (t) {
            for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r), a = new o.Vector4), e[n++] = a.x, e[n++] = a.y, e[n++] = a.z, e[n++] = a.w
            }
            return this
        }, set: function (t, e) {
            return void 0 === e && (e = 0), this.array.set(t, e), this
        }, getX: function (t) {
            return this.array[t * this.itemSize]
        }, setX: function (t, e) {
            return this.array[t * this.itemSize] = e, this
        }, getY: function (t) {
            return this.array[t * this.itemSize + 1]
        }, setY: function (t, e) {
            return this.array[t * this.itemSize + 1] = e, this
        }, getZ: function (t) {
            return this.array[t * this.itemSize + 2]
        }, setZ: function (t, e) {
            return this.array[t * this.itemSize + 2] = e, this
        }, getW: function (t) {
            return this.array[t * this.itemSize + 3]
        }, setW: function (t, e) {
            return this.array[t * this.itemSize + 3] = e, this
        }, setXY: function (t, e, n) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this
        }, setXYZ: function (t, e, n, r) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this
        }, setXYZW: function (t, e, n, r, i) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = r, this.array[t + 3] = i, this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }
    }, o.Int8Attribute = function (t, e) {
        return new o.BufferAttribute(new Int8Array(t), e)
    }, o.Uint8Attribute = function (t, e) {
        return new o.BufferAttribute(new Uint8Array(t), e)
    }, o.Uint8ClampedAttribute = function (t, e) {
        return new o.BufferAttribute(new Uint8ClampedArray(t), e)
    }, o.Int16Attribute = function (t, e) {
        return new o.BufferAttribute(new Int16Array(t), e)
    }, o.Uint16Attribute = function (t, e) {
        return new o.BufferAttribute(new Uint16Array(t), e)
    }, o.Int32Attribute = function (t, e) {
        return new o.BufferAttribute(new Int32Array(t), e)
    }, o.Uint32Attribute = function (t, e) {
        return new o.BufferAttribute(new Uint32Array(t), e)
    }, o.Float32Attribute = function (t, e) {
        return new o.BufferAttribute(new Float32Array(t), e)
    }, o.Float64Attribute = function (t, e) {
        return new o.BufferAttribute(new Float64Array(t), e)
    }, o.DynamicBufferAttribute = function (t, e) {
        return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new o.BufferAttribute(t, e).setDynamic(!0)
    }, o.InstancedBufferAttribute = function (t, e, n) {
        o.BufferAttribute.call(this, t, e), this.meshPerAttribute = n || 1
    }, o.InstancedBufferAttribute.prototype = Object.create(o.BufferAttribute.prototype), o.InstancedBufferAttribute.prototype.constructor = o.InstancedBufferAttribute, o.InstancedBufferAttribute.prototype.copy = function (t) {
        return o.BufferAttribute.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
    }, o.InterleavedBuffer = function (t, e) {
        this.uuid = o.Math.generateUUID(), this.array = t, this.stride = e, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0
    }, o.InterleavedBuffer.prototype = {
        constructor: o.InterleavedBuffer, get length() {
            return this.array.length
        }, get count() {
            return this.array.length / this.stride
        }, set needsUpdate(t) {
            t === !0 && this.version++
        }, setDynamic: function (t) {
            return this.dynamic = t, this
        }, copy: function (t) {
            return this.array = new t.array.constructor(t.array), this.stride = t.stride, this.dynamic = t.dynamic, this
        }, copyAt: function (t, e, n) {
            t *= this.stride, n *= e.stride;
            for (var r = 0, i = this.stride; r < i; r++)this.array[t + r] = e.array[n + r];
            return this
        }, set: function (t, e) {
            return void 0 === e && (e = 0), this.array.set(t, e), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }
    }, o.InstancedInterleavedBuffer = function (t, e, n) {
        o.InterleavedBuffer.call(this, t, e), this.meshPerAttribute = n || 1
    }, o.InstancedInterleavedBuffer.prototype = Object.create(o.InterleavedBuffer.prototype), o.InstancedInterleavedBuffer.prototype.constructor = o.InstancedInterleavedBuffer, o.InstancedInterleavedBuffer.prototype.copy = function (t) {
        return o.InterleavedBuffer.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
    }, o.InterleavedBufferAttribute = function (t, e, n) {
        this.uuid = o.Math.generateUUID(), this.data = t, this.itemSize = e, this.offset = n
    }, o.InterleavedBufferAttribute.prototype = {
        constructor: o.InterleavedBufferAttribute, get length() {
            return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."), this.array.length
        }, get count() {
            return this.data.count
        }, setX: function (t, e) {
            return this.data.array[t * this.data.stride + this.offset] = e, this
        }, setY: function (t, e) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e, this
        }, setZ: function (t, e) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e, this
        }, setW: function (t, e) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e, this
        }, getX: function (t) {
            return this.data.array[t * this.data.stride + this.offset]
        }, getY: function (t) {
            return this.data.array[t * this.data.stride + this.offset + 1]
        }, getZ: function (t) {
            return this.data.array[t * this.data.stride + this.offset + 2]
        }, getW: function (t) {
            return this.data.array[t * this.data.stride + this.offset + 3]
        }, setXY: function (t, e, n) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this
        }, setXYZ: function (t, e, n, r) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = r, this
        }, setXYZW: function (t, e, n, r, i) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = r, this.data.array[t + 3] = i, this
        }
    }, o.Geometry = function () {
        Object.defineProperty(this, "id", {value: o.GeometryIdCount++}), this.uuid = o.Math.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.elementsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
    },Object.assign(o.Geometry.prototype, o.EventDispatcher.prototype, {
        applyMatrix: function (t) {
            for (var e = (new o.Matrix3).getNormalMatrix(t), n = 0, r = this.vertices.length; n < r; n++) {
                var i = this.vertices[n];
                i.applyMatrix4(t)
            }
            for (var n = 0, r = this.faces.length; n < r; n++) {
                var a = this.faces[n];
                a.normal.applyMatrix3(e).normalize();
                for (var s = 0, l = a.vertexNormals.length; s < l; s++)a.vertexNormals[s].applyMatrix3(e).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
        }, rotateX: function () {
            var t;
            return function (e) {
                return void 0 === t && (t = new o.Matrix4), t.makeRotationX(e), this.applyMatrix(t), this
            }
        }(), rotateY: function () {
            var t;
            return function (e) {
                return void 0 === t && (t = new o.Matrix4), t.makeRotationY(e), this.applyMatrix(t), this
            }
        }(), rotateZ: function () {
            var t;
            return function (e) {
                return void 0 === t && (t = new o.Matrix4), t.makeRotationZ(e), this.applyMatrix(t), this
            }
        }(), translate: function () {
            var t;
            return function (e, n, r) {
                return void 0 === t && (t = new o.Matrix4), t.makeTranslation(e, n, r), this.applyMatrix(t), this
            }
        }(), scale: function () {
            var t;
            return function (e, n, r) {
                return void 0 === t && (t = new o.Matrix4), t.makeScale(e, n, r), this.applyMatrix(t), this
            }
        }(), lookAt: function () {
            var t;
            return function (e) {
                void 0 === t && (t = new o.Object3D), t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
            }
        }(), fromBufferGeometry: function (t) {
            function e(t, e, r, i) {
                var a = void 0 !== s ? [h[t].clone(), h[e].clone(), h[r].clone()] : [], p = void 0 !== l ? [n.colors[t].clone(), n.colors[e].clone(), n.colors[r].clone()] : [], m = new o.Face3(t, e, r, a, p, i);
                n.faces.push(m), void 0 !== c && n.faceVertexUvs[0].push([f[t].clone(), f[e].clone(), f[r].clone()]), void 0 !== u && n.faceVertexUvs[1].push([d[t].clone(), d[e].clone(), d[r].clone()])
            }

            var n = this, r = null !== t.index ? t.index.array : void 0, i = t.attributes, a = i.position.array, s = void 0 !== i.normal ? i.normal.array : void 0, l = void 0 !== i.color ? i.color.array : void 0, c = void 0 !== i.uv ? i.uv.array : void 0, u = void 0 !== i.uv2 ? i.uv2.array : void 0;
            void 0 !== u && (this.faceVertexUvs[1] = []);
            for (var h = [], f = [], d = [], p = 0, m = 0; p < a.length; p += 3, m += 2)n.vertices.push(new o.Vector3(a[p], a[p + 1], a[p + 2])), void 0 !== s && h.push(new o.Vector3(s[p], s[p + 1], s[p + 2])), void 0 !== l && n.colors.push(new o.Color(l[p], l[p + 1], l[p + 2])), void 0 !== c && f.push(new o.Vector2(c[m], c[m + 1])), void 0 !== u && d.push(new o.Vector2(u[m], u[m + 1]));
            if (void 0 !== r) {
                var v = t.groups;
                if (v.length > 0)for (var p = 0; p < v.length; p++)for (var g = v[p], y = g.start, x = g.count, m = y, _ = y + x; m < _; m += 3)e(r[m], r[m + 1], r[m + 2], g.materialIndex); else for (var p = 0; p < r.length; p += 3)e(r[p], r[p + 1], r[p + 2])
            } else for (var p = 0; p < a.length / 3; p += 3)e(p, p + 1, p + 2);
            return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
        }, center: function () {
            this.computeBoundingBox();
            var t = this.boundingBox.center().negate();
            return this.translate(t.x, t.y, t.z), t
        }, normalize: function () {
            this.computeBoundingSphere();
            var t = this.boundingSphere.center, e = this.boundingSphere.radius, n = 0 === e ? 1 : 1 / e, r = new o.Matrix4;
            return r.set(n, 0, 0, -n * t.x, 0, n, 0, -n * t.y, 0, 0, n, -n * t.z, 0, 0, 0, 1), this.applyMatrix(r), this
        }, computeFaceNormals: function () {
            for (var t = new o.Vector3, e = new o.Vector3, n = 0, r = this.faces.length; n < r; n++) {
                var i = this.faces[n], a = this.vertices[i.a], s = this.vertices[i.b], l = this.vertices[i.c];
                t.subVectors(l, s), e.subVectors(a, s), t.cross(e), t.normalize(), i.normal.copy(t)
            }
        }, computeVertexNormals: function (t) {
            void 0 === t && (t = !0);
            var e, n, r, i, a, s;
            for (s = new Array(this.vertices.length), e = 0, n = this.vertices.length; e < n; e++)s[e] = new o.Vector3;
            if (t) {
                var l, c, u, h = new o.Vector3, f = new o.Vector3;
                for (r = 0, i = this.faces.length; r < i; r++)a = this.faces[r], l = this.vertices[a.a], c = this.vertices[a.b], u = this.vertices[a.c], h.subVectors(u, c), f.subVectors(l, c), h.cross(f), s[a.a].add(h), s[a.b].add(h), s[a.c].add(h)
            } else for (r = 0, i = this.faces.length; r < i; r++)a = this.faces[r], s[a.a].add(a.normal), s[a.b].add(a.normal), s[a.c].add(a.normal);
            for (e = 0, n = this.vertices.length; e < n; e++)s[e].normalize();
            for (r = 0, i = this.faces.length; r < i; r++) {
                a = this.faces[r];
                var d = a.vertexNormals;
                3 === d.length ? (d[0].copy(s[a.a]), d[1].copy(s[a.b]), d[2].copy(s[a.c])) : (d[0] = s[a.a].clone(), d[1] = s[a.b].clone(), d[2] = s[a.c].clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        }, computeMorphNormals: function () {
            var t, e, n, r, i;
            for (n = 0, r = this.faces.length; n < r; n++)for (i = this.faces[n], i.__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(), i.__originalVertexNormals || (i.__originalVertexNormals = []), t = 0, e = i.vertexNormals.length; t < e; t++)i.__originalVertexNormals[t] ? i.__originalVertexNormals[t].copy(i.vertexNormals[t]) : i.__originalVertexNormals[t] = i.vertexNormals[t].clone();
            var a = new o.Geometry;
            for (a.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
                if (!this.morphNormals[t]) {
                    this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
                    var s, l, c = this.morphNormals[t].faceNormals, u = this.morphNormals[t].vertexNormals;
                    for (n = 0, r = this.faces.length; n < r; n++)s = new o.Vector3, l = {
                        a: new o.Vector3,
                        b: new o.Vector3,
                        c: new o.Vector3
                    }, c.push(s), u.push(l)
                }
                var h = this.morphNormals[t];
                a.vertices = this.morphTargets[t].vertices, a.computeFaceNormals(), a.computeVertexNormals();
                var s, l;
                for (n = 0, r = this.faces.length; n < r; n++)i = this.faces[n], s = h.faceNormals[n], l = h.vertexNormals[n], s.copy(i.normal), l.a.copy(i.vertexNormals[0]), l.b.copy(i.vertexNormals[1]), l.c.copy(i.vertexNormals[2])
            }
            for (n = 0, r = this.faces.length; n < r; n++)i = this.faces[n], i.normal = i.__originalFaceNormal, i.vertexNormals = i.__originalVertexNormals
        }, computeTangents: function () {
            console.warn("THREE.Geometry: .computeTangents() has been removed.")
        }, computeLineDistances: function () {
            for (var t = 0, e = this.vertices, n = 0, r = e.length; n < r; n++)n > 0 && (t += e[n].distanceTo(e[n - 1])), this.lineDistances[n] = t
        }, computeBoundingBox: function () {
            null === this.boundingBox && (this.boundingBox = new o.Box3), this.boundingBox.setFromPoints(this.vertices)
        }, computeBoundingSphere: function () {
            null === this.boundingSphere && (this.boundingSphere = new o.Sphere), this.boundingSphere.setFromPoints(this.vertices)
        }, merge: function (t, e, n) {
            if (t instanceof o.Geometry == !1)return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t);
            var r, i = this.vertices.length, a = this.vertices, s = t.vertices, l = this.faces, c = t.faces, u = this.faceVertexUvs[0], h = t.faceVertexUvs[0];
            void 0 === n && (n = 0), void 0 !== e && (r = (new o.Matrix3).getNormalMatrix(e));
            for (var f = 0, d = s.length; f < d; f++) {
                var p = s[f], m = p.clone();
                void 0 !== e && m.applyMatrix4(e), a.push(m)
            }
            for (f = 0, d = c.length; f < d; f++) {
                var v, g, y, x = c[f], _ = x.vertexNormals, b = x.vertexColors;
                v = new o.Face3(x.a + i, x.b + i, x.c + i), v.normal.copy(x.normal), void 0 !== r && v.normal.applyMatrix3(r).normalize();
                for (var w = 0, M = _.length; w < M; w++)g = _[w].clone(), void 0 !== r && g.applyMatrix3(r).normalize(), v.vertexNormals.push(g);
                v.color.copy(x.color);
                for (var w = 0, M = b.length; w < M; w++)y = b[w], v.vertexColors.push(y.clone());
                v.materialIndex = x.materialIndex + n, l.push(v)
            }
            for (f = 0, d = h.length; f < d; f++) {
                var S = h[f], E = [];
                if (void 0 !== S) {
                    for (var w = 0, M = S.length; w < M; w++)E.push(S[w].clone());
                    u.push(E)
                }
            }
        }, mergeMesh: function (t) {
            return t instanceof o.Mesh == !1 ? void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t) : (t.matrixAutoUpdate && t.updateMatrix(), void this.merge(t.geometry, t.matrix))
        }, mergeVertices: function () {
            var t, e, n, r, i, o, a, s, l = {}, c = [], u = [], h = 4, f = Math.pow(10, h);
            for (n = 0, r = this.vertices.length; n < r; n++)t = this.vertices[n], e = Math.round(t.x * f) + "_" + Math.round(t.y * f) + "_" + Math.round(t.z * f), void 0 === l[e] ? (l[e] = n, c.push(this.vertices[n]), u[n] = c.length - 1) : u[n] = u[l[e]];
            var d = [];
            for (n = 0, r = this.faces.length; n < r; n++) {
                i = this.faces[n], i.a = u[i.a], i.b = u[i.b], i.c = u[i.c], o = [i.a, i.b, i.c];
                for (var p = -1, m = 0; m < 3; m++)if (o[m] === o[(m + 1) % 3]) {
                    p = m, d.push(n);
                    break
                }
            }
            for (n = d.length - 1; n >= 0; n--) {
                var v = d[n];
                for (this.faces.splice(v, 1), a = 0, s = this.faceVertexUvs.length; a < s; a++)this.faceVertexUvs[a].splice(v, 1)
            }
            var g = this.vertices.length - c.length;
            return this.vertices = c, g
        }, sortFacesByMaterialIndex: function () {
            function t(t, e) {
                return t.materialIndex - e.materialIndex
            }

            for (var e = this.faces, n = e.length, r = 0; r < n; r++)e[r]._id = r;
            e.sort(t);
            var i, o, a = this.faceVertexUvs[0], s = this.faceVertexUvs[1];
            a && a.length === n && (i = []), s && s.length === n && (o = []);
            for (var r = 0; r < n; r++) {
                var l = e[r]._id;
                i && i.push(a[l]), o && o.push(s[l])
            }
            i && (this.faceVertexUvs[0] = i), o && (this.faceVertexUvs[1] = o)
        }, toJSON: function () {
            function t(t, e, n) {
                return n ? t | 1 << e : t & ~(1 << e)
            }

            function e(t) {
                var e = t.x.toString() + t.y.toString() + t.z.toString();
                return void 0 !== f[e] ? f[e] : (f[e] = h.length / 3, h.push(t.x, t.y, t.z), f[e])
            }

            function n(t) {
                var e = t.r.toString() + t.g.toString() + t.b.toString();
                return void 0 !== p[e] ? p[e] : (p[e] = d.length, d.push(t.getHex()), p[e])
            }

            function r(t) {
                var e = t.x.toString() + t.y.toString();
                return void 0 !== v[e] ? v[e] : (v[e] = m.length / 2, m.push(t.x, t.y), v[e])
            }

            var i = {metadata: {version: 4.4, type: "Geometry", generator: "Geometry.toJSON"}};
            if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), void 0 !== this.parameters) {
                var o = this.parameters;
                for (var a in o)void 0 !== o[a] && (i[a] = o[a]);
                return i
            }
            for (var s = [], l = 0; l < this.vertices.length; l++) {
                var c = this.vertices[l];
                s.push(c.x, c.y, c.z)
            }
            for (var u = [], h = [], f = {}, d = [], p = {}, m = [], v = {}, l = 0; l < this.faces.length; l++) {
                var g = this.faces[l], y = !0, x = !1, _ = void 0 !== this.faceVertexUvs[0][l], b = g.normal.length() > 0, w = g.vertexNormals.length > 0, M = 1 !== g.color.r || 1 !== g.color.g || 1 !== g.color.b, S = g.vertexColors.length > 0, E = 0;
                if (E = t(E, 0, 0), E = t(E, 1, y), E = t(E, 2, x), E = t(E, 3, _), E = t(E, 4, b), E = t(E, 5, w), E = t(E, 6, M), E = t(E, 7, S), u.push(E), u.push(g.a, g.b, g.c), u.push(g.materialIndex), _) {
                    var T = this.faceVertexUvs[0][l];
                    u.push(r(T[0]), r(T[1]), r(T[2]))
                }
                if (b && u.push(e(g.normal)), w) {
                    var A = g.vertexNormals;
                    u.push(e(A[0]), e(A[1]), e(A[2]))
                }
                if (M && u.push(n(g.color)), S) {
                    var L = g.vertexColors;
                    u.push(n(L[0]), n(L[1]), n(L[2]))
                }
            }
            return i.data = {}, i.data.vertices = s, i.data.normals = h, d.length > 0 && (i.data.colors = d), m.length > 0 && (i.data.uvs = [m]), i.data.faces = u, i
        }, clone: function () {
            return (new o.Geometry).copy(this)
        }, copy: function (t) {
            this.vertices = [], this.faces = [], this.faceVertexUvs = [[]];
            for (var e = t.vertices, n = 0, r = e.length; n < r; n++)this.vertices.push(e[n].clone());
            for (var i = t.faces, n = 0, r = i.length; n < r; n++)this.faces.push(i[n].clone());
            for (var n = 0, r = t.faceVertexUvs.length; n < r; n++) {
                var o = t.faceVertexUvs[n];
                void 0 === this.faceVertexUvs[n] && (this.faceVertexUvs[n] = []);
                for (var a = 0, s = o.length; a < s; a++) {
                    for (var l = o[a], c = [], u = 0, h = l.length; u < h; u++) {
                        var f = l[u];
                        c.push(f.clone())
                    }
                    this.faceVertexUvs[n].push(c)
                }
            }
            return this
        }, dispose: function () {
            this.dispatchEvent({type: "dispose"})
        }
    }),o.GeometryIdCount = 0,o.DirectGeometry = function () {
        Object.defineProperty(this, "id", {value: o.GeometryIdCount++}), this.uuid = o.Math.generateUUID(), this.name = "", this.type = "DirectGeometry", this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
    },Object.assign(o.DirectGeometry.prototype, o.EventDispatcher.prototype, {
        computeBoundingBox: o.Geometry.prototype.computeBoundingBox,
        computeBoundingSphere: o.Geometry.prototype.computeBoundingSphere,
        computeFaceNormals: function () {
            console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
        },
        computeVertexNormals: function () {
            console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
        },
        computeGroups: function (t) {
            for (var e, n, r = [], i = t.faces, o = 0; o < i.length; o++) {
                var a = i[o];
                a.materialIndex !== n && (n = a.materialIndex, void 0 !== e && (e.count = 3 * o - e.start, r.push(e)), e = {
                    start: 3 * o,
                    materialIndex: n
                })
            }
            void 0 !== e && (e.count = 3 * o - e.start, r.push(e)), this.groups = r
        },
        fromGeometry: function (t) {
            var e, n = t.faces, r = t.vertices, i = t.faceVertexUvs, a = i[0] && i[0].length > 0, s = i[1] && i[1].length > 0, l = t.morphTargets, c = l.length;
            if (c > 0) {
                e = [];
                for (var u = 0; u < c; u++)e[u] = [];
                this.morphTargets.position = e
            }
            var h, f = t.morphNormals, d = f.length;
            if (d > 0) {
                h = [];
                for (var u = 0; u < d; u++)h[u] = [];
                this.morphTargets.normal = h
            }
            for (var p = t.skinIndices, m = t.skinWeights, v = p.length === r.length, g = m.length === r.length, u = 0; u < n.length; u++) {
                var y = n[u];
                this.vertices.push(r[y.a], r[y.b], r[y.c]);
                var x = y.vertexNormals;
                if (3 === x.length) this.normals.push(x[0], x[1], x[2]); else {
                    var _ = y.normal;
                    this.normals.push(_, _, _)
                }
                var b = y.vertexColors;
                if (3 === b.length) this.colors.push(b[0], b[1], b[2]); else {
                    var w = y.color;
                    this.colors.push(w, w, w)
                }
                if (a === !0) {
                    var M = i[0][u];
                    void 0 !== M ? this.uvs.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", u), this.uvs.push(new o.Vector2, new o.Vector2, new o.Vector2))
                }
                if (s === !0) {
                    var M = i[1][u];
                    void 0 !== M ? this.uvs2.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", u), this.uvs2.push(new o.Vector2, new o.Vector2, new o.Vector2))
                }
                for (var S = 0; S < c; S++) {
                    var E = l[S].vertices;
                    e[S].push(E[y.a], E[y.b], E[y.c])
                }
                for (var S = 0; S < d; S++) {
                    var T = f[S].vertexNormals[u];
                    h[S].push(T.a, T.b, T.c)
                }
                v && this.skinIndices.push(p[y.a], p[y.b], p[y.c]), g && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
            }
            return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
        },
        dispose: function () {
            this.dispatchEvent({type: "dispose"})
        }
    }),o.BufferGeometry = function () {
        Object.defineProperty(this, "id", {value: o.GeometryIdCount++}), this.uuid = o.Math.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }
    },Object.assign(o.BufferGeometry.prototype, o.EventDispatcher.prototype, {
        getIndex: function () {
            return this.index
        }, setIndex: function (t) {
            this.index = t
        }, addAttribute: function (t, e) {
            return e instanceof o.BufferAttribute == !1 && e instanceof o.InterleavedBufferAttribute == !1 ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), void this.addAttribute(t, new o.BufferAttribute(arguments[1], arguments[2]))) : "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), void this.setIndex(e)) : (this.attributes[t] = e, this)
        }, getAttribute: function (t) {
            return this.attributes[t]
        }, removeAttribute: function (t) {
            return delete this.attributes[t], this
        }, addGroup: function (t, e, n) {
            this.groups.push({start: t, count: e, materialIndex: void 0 !== n ? n : 0})
        }, clearGroups: function () {
            this.groups = []
        }, setDrawRange: function (t, e) {
            this.drawRange.start = t, this.drawRange.count = e
        }, applyMatrix: function (t) {
            var e = this.attributes.position;
            void 0 !== e && (t.applyToVector3Array(e.array), e.needsUpdate = !0);
            var n = this.attributes.normal;
            if (void 0 !== n) {
                var r = (new o.Matrix3).getNormalMatrix(t);
                r.applyToVector3Array(n.array), n.needsUpdate = !0
            }
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
        }, rotateX: function () {
            var t;
            return function (e) {
                return void 0 === t && (t = new o.Matrix4), t.makeRotationX(e), this.applyMatrix(t), this
            }
        }(), rotateY: function () {
            var t;
            return function (e) {
                return void 0 === t && (t = new o.Matrix4), t.makeRotationY(e), this.applyMatrix(t), this
            }
        }(), rotateZ: function () {
            var t;
            return function (e) {
                return void 0 === t && (t = new o.Matrix4), t.makeRotationZ(e), this.applyMatrix(t), this
            }
        }(), translate: function () {
            var t;
            return function (e, n, r) {
                return void 0 === t && (t = new o.Matrix4), t.makeTranslation(e, n, r), this.applyMatrix(t), this
            }
        }(), scale: function () {
            var t;
            return function (e, n, r) {
                return void 0 === t && (t = new o.Matrix4), t.makeScale(e, n, r), this.applyMatrix(t), this
            }
        }(), lookAt: function () {
            var t;
            return function (e) {
                void 0 === t && (t = new o.Object3D), t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
            }
        }(), center: function () {
            this.computeBoundingBox();
            var t = this.boundingBox.center().negate();
            return this.translate(t.x, t.y, t.z), t
        }, setFromObject: function (t) {
            var e = t.geometry;
            if (t instanceof o.Points || t instanceof o.Line) {
                var n = new o.Float32Attribute(3 * e.vertices.length, 3), r = new o.Float32Attribute(3 * e.colors.length, 3);
                if (this.addAttribute("position", n.copyVector3sArray(e.vertices)), this.addAttribute("color", r.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
                    var i = new o.Float32Attribute(e.lineDistances.length, 1);
                    this.addAttribute("lineDistance", i.copyArray(e.lineDistances))
                }
                null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
            } else t instanceof o.Mesh && e instanceof o.Geometry && this.fromGeometry(e);
            return this
        }, updateFromObject: function (t) {
            var e = t.geometry;
            if (t instanceof o.Mesh) {
                var n = e.__directGeometry;
                if (void 0 === n)return this.fromGeometry(e);
                n.verticesNeedUpdate = e.verticesNeedUpdate, n.normalsNeedUpdate = e.normalsNeedUpdate, n.colorsNeedUpdate = e.colorsNeedUpdate, n.uvsNeedUpdate = e.uvsNeedUpdate, n.groupsNeedUpdate = e.groupsNeedUpdate, e.verticesNeedUpdate = !1, e.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.uvsNeedUpdate = !1, e.groupsNeedUpdate = !1, e = n
            }
            if (e.verticesNeedUpdate === !0) {
                var r = this.attributes.position;
                void 0 !== r && (r.copyVector3sArray(e.vertices), r.needsUpdate = !0), e.verticesNeedUpdate = !1
            }
            if (e.normalsNeedUpdate === !0) {
                var r = this.attributes.normal;
                void 0 !== r && (r.copyVector3sArray(e.normals), r.needsUpdate = !0), e.normalsNeedUpdate = !1
            }
            if (e.colorsNeedUpdate === !0) {
                var r = this.attributes.color;
                void 0 !== r && (r.copyColorsArray(e.colors), r.needsUpdate = !0), e.colorsNeedUpdate = !1
            }
            if (e.uvsNeedUpdate) {
                var r = this.attributes.uv;
                void 0 !== r && (r.copyVector2sArray(e.uvs), r.needsUpdate = !0), e.uvsNeedUpdate = !1
            }
            if (e.lineDistancesNeedUpdate) {
                var r = this.attributes.lineDistance;
                void 0 !== r && (r.copyArray(e.lineDistances), r.needsUpdate = !0), e.lineDistancesNeedUpdate = !1
            }
            return e.groupsNeedUpdate && (e.computeGroups(t.geometry), this.groups = e.groups, e.groupsNeedUpdate = !1), this
        }, fromGeometry: function (t) {
            return t.__directGeometry = (new o.DirectGeometry).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
        }, fromDirectGeometry: function (t) {
            var e = new Float32Array(3 * t.vertices.length);
            if (this.addAttribute("position", new o.BufferAttribute(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
                var n = new Float32Array(3 * t.normals.length);
                this.addAttribute("normal", new o.BufferAttribute(n, 3).copyVector3sArray(t.normals))
            }
            if (t.colors.length > 0) {
                var r = new Float32Array(3 * t.colors.length);
                this.addAttribute("color", new o.BufferAttribute(r, 3).copyColorsArray(t.colors))
            }
            if (t.uvs.length > 0) {
                var i = new Float32Array(2 * t.uvs.length);
                this.addAttribute("uv", new o.BufferAttribute(i, 2).copyVector2sArray(t.uvs))
            }
            if (t.uvs2.length > 0) {
                var a = new Float32Array(2 * t.uvs2.length);
                this.addAttribute("uv2", new o.BufferAttribute(a, 2).copyVector2sArray(t.uvs2))
            }
            if (t.indices.length > 0) {
                var s = t.vertices.length > 65535 ? Uint32Array : Uint16Array, l = new s(3 * t.indices.length);
                this.setIndex(new o.BufferAttribute(l, 1).copyIndicesArray(t.indices))
            }
            this.groups = t.groups;
            for (var c in t.morphTargets) {
                for (var u = [], h = t.morphTargets[c], f = 0, d = h.length; f < d; f++) {
                    var p = h[f], m = new o.Float32Attribute(3 * p.length, 3);
                    u.push(m.copyVector3sArray(p))
                }
                this.morphAttributes[c] = u
            }
            if (t.skinIndices.length > 0) {
                var v = new o.Float32Attribute(4 * t.skinIndices.length, 4);
                this.addAttribute("skinIndex", v.copyVector4sArray(t.skinIndices))
            }
            if (t.skinWeights.length > 0) {
                var g = new o.Float32Attribute(4 * t.skinWeights.length, 4);
                this.addAttribute("skinWeight", g.copyVector4sArray(t.skinWeights))
            }
            return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
        }, computeBoundingBox: function () {
            null === this.boundingBox && (this.boundingBox = new o.Box3);
            var t = this.attributes.position.array;
            void 0 !== t ? this.boundingBox.setFromArray(t) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        }, computeBoundingSphere: function () {
            var t = new o.Box3, e = new o.Vector3;
            return function () {
                null === this.boundingSphere && (this.boundingSphere = new o.Sphere);
                var n = this.attributes.position;
                if (n) {
                    var r = n.array, i = this.boundingSphere.center;
                    t.setFromArray(r), t.center(i);
                    for (var a = 0, s = 0, l = r.length; s < l; s += 3)e.fromArray(r, s), a = Math.max(a, i.distanceToSquared(e));
                    this.boundingSphere.radius = Math.sqrt(a), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
        }(), computeFaceNormals: function () {
        }, computeVertexNormals: function () {
            var t = this.index, e = this.attributes, n = this.groups;
            if (e.position) {
                var r = e.position.array;
                if (void 0 === e.normal) this.addAttribute("normal", new o.BufferAttribute(new Float32Array(r.length), 3)); else for (var i = e.normal.array, a = 0, s = i.length; a < s; a++)i[a] = 0;
                var l, c, u, h = e.normal.array, f = new o.Vector3, d = new o.Vector3, p = new o.Vector3, m = new o.Vector3, v = new o.Vector3;
                if (t) {
                    var g = t.array;
                    0 === n.length && this.addGroup(0, g.length);
                    for (var y = 0, x = n.length; y < x; ++y)for (var _ = n[y], b = _.start, w = _.count, a = b, s = b + w; a < s; a += 3)l = 3 * g[a + 0], c = 3 * g[a + 1], u = 3 * g[a + 2], f.fromArray(r, l), d.fromArray(r, c), p.fromArray(r, u), m.subVectors(p, d), v.subVectors(f, d), m.cross(v), h[l] += m.x, h[l + 1] += m.y, h[l + 2] += m.z, h[c] += m.x, h[c + 1] += m.y, h[c + 2] += m.z, h[u] += m.x, h[u + 1] += m.y, h[u + 2] += m.z
                } else for (var a = 0, s = r.length; a < s; a += 9)f.fromArray(r, a), d.fromArray(r, a + 3), p.fromArray(r, a + 6), m.subVectors(p, d), v.subVectors(f, d), m.cross(v), h[a] = m.x, h[a + 1] = m.y, h[a + 2] = m.z, h[a + 3] = m.x, h[a + 4] = m.y, h[a + 5] = m.z, h[a + 6] = m.x, h[a + 7] = m.y, h[a + 8] = m.z;
                this.normalizeNormals(), e.normal.needsUpdate = !0
            }
        }, merge: function (t, e) {
            if (t instanceof o.BufferGeometry == !1)return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
            void 0 === e && (e = 0);
            var n = this.attributes;
            for (var r in n)if (void 0 !== t.attributes[r])for (var i = n[r], a = i.array, s = t.attributes[r], l = s.array, c = s.itemSize, u = 0, h = c * e; u < l.length; u++, h++)a[h] = l[u];
            return this
        }, normalizeNormals: function () {
            for (var t, e, n, r, i = this.attributes.normal.array, o = 0, a = i.length; o < a; o += 3)t = i[o], e = i[o + 1], n = i[o + 2], r = 1 / Math.sqrt(t * t + e * e + n * n), i[o] *= r, i[o + 1] *= r, i[o + 2] *= r
        }, toNonIndexed: function () {
            if (null === this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
            var t = new o.BufferGeometry, e = this.index.array, n = this.attributes;
            for (var r in n) {
                for (var i = n[r], a = i.array, s = i.itemSize, l = new a.constructor(e.length * s), c = 0, u = 0, h = 0, f = e.length; h < f; h++) {
                    c = e[h] * s;
                    for (var d = 0; d < s; d++)l[u++] = a[c++]
                }
                t.addAttribute(r, new o.BufferAttribute(l, s))
            }
            return t
        }, toJSON: function () {
            var t = {metadata: {version: 4.4, type: "BufferGeometry", generator: "BufferGeometry.toJSON"}};
            if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
                var e = this.parameters;
                for (var n in e)void 0 !== e[n] && (t[n] = e[n]);
                return t
            }
            t.data = {attributes: {}};
            var r = this.index;
            if (null !== r) {
                var i = Array.prototype.slice.call(r.array);
                t.data.index = {type: r.array.constructor.name, array: i}
            }
            var o = this.attributes;
            for (var n in o) {
                var a = o[n], i = Array.prototype.slice.call(a.array);
                t.data.attributes[n] = {
                    itemSize: a.itemSize,
                    type: a.array.constructor.name,
                    array: i,
                    normalized: a.normalized
                }
            }
            var s = this.groups;
            s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
            var l = this.boundingSphere;
            return null !== l && (t.data.boundingSphere = {center: l.center.toArray(), radius: l.radius}), t
        }, clone: function () {
            return (new o.BufferGeometry).copy(this)
        }, copy: function (t) {
            var e = t.index;
            null !== e && this.setIndex(e.clone());
            var n = t.attributes;
            for (var r in n) {
                var i = n[r];
                this.addAttribute(r, i.clone())
            }
            for (var o = t.groups, a = 0, s = o.length; a < s; a++) {
                var l = o[a];
                this.addGroup(l.start, l.count, l.materialIndex)
            }
            return this
        }, dispose: function () {
            this.dispatchEvent({type: "dispose"})
        }
    }),o.BufferGeometry.MaxIndex = 65535,o.InstancedBufferGeometry = function () {
        o.BufferGeometry.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
    },o.InstancedBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype),o.InstancedBufferGeometry.prototype.constructor = o.InstancedBufferGeometry,o.InstancedBufferGeometry.prototype.addGroup = function (t, e, n) {
        this.groups.push({start: t, count: e, instances: n})
    },o.InstancedBufferGeometry.prototype.copy = function (t) {
        var e = t.index;
        null !== e && this.setIndex(e.clone());
        var n = t.attributes;
        for (var r in n) {
            var i = n[r];
            this.addAttribute(r, i.clone())
        }
        for (var o = t.groups, a = 0, s = o.length; a < s; a++) {
            var l = o[a];
            this.addGroup(l.start, l.count, l.instances)
        }
        return this
    },o.Uniform = function (t) {
        "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t, this.dynamic = !1
    },o.Uniform.prototype = {
        constructor: o.Uniform, onUpdate: function (t) {
            return this.dynamic = !0, this.onUpdateCallback = t, this
        }
    },o.AnimationAction = function () {
        throw new Error("THREE.AnimationAction: Use mixer.clipAction for construction.")
    },o.AnimationAction._new = function (t, e, n) {
        this._mixer = t, this._clip = e, this._localRoot = n || null;
        for (var r = e.tracks, i = r.length, a = new Array(i), s = {
            endingStart: o.ZeroCurvatureEnding,
            endingEnd: o.ZeroCurvatureEnding
        }, l = 0; l !== i; ++l) {
            var c = r[l].createInterpolant(null);
            a[l] = c, c.settings = s
        }
        this._interpolantSettings = s, this._interpolants = a, this._propertyBindings = new Array(i), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = o.LoopRepeat, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
    },o.AnimationAction._new.prototype = {
        constructor: o.AnimationAction._new, play: function () {
            return this._mixer._activateAction(this), this
        }, stop: function () {
            return this._mixer._deactivateAction(this), this.reset()
        }, reset: function () {
            return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
        }, isRunning: function () {
            this._startTime;
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        }, isScheduled: function () {
            return this._mixer._isActiveAction(this)
        }, startAt: function (t) {
            return this._startTime = t, this
        }, setLoop: function (t, e) {
            return this.loop = t, this.repetitions = e, this
        }, setEffectiveWeight: function (t) {
            return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
        }, getEffectiveWeight: function () {
            return this._effectiveWeight
        }, fadeIn: function (t) {
            return this._scheduleFading(t, 0, 1)
        }, fadeOut: function (t) {
            return this._scheduleFading(t, 1, 0)
        }, crossFadeFrom: function (t, e, n) {
            this._mixer;
            if (t.fadeOut(e), this.fadeIn(e), n) {
                var r = this._clip.duration, i = t._clip.duration, o = i / r, a = r / i;
                t.warp(1, o, e), this.warp(a, 1, e)
            }
            return this
        }, crossFadeTo: function (t, e, n) {
            return t.crossFadeFrom(this, e, n)
        }, stopFading: function () {
            var t = this._weightInterpolant;
            return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
        }, setEffectiveTimeScale: function (t) {
            return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
        }, getEffectiveTimeScale: function () {
            return this._effectiveTimeScale
        }, setDuration: function (t) {
            return this.timeScale = this._clip.duration / t, this.stopWarping()
        }, syncWith: function (t) {
            return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
        }, halt: function (t) {
            return this.warp(this._effectiveTimeScale, 0, t)
        }, warp: function (t, e, n) {
            var r = this._mixer, i = r.time, o = this._timeScaleInterpolant, a = this.timeScale;
            null === o && (o = r._lendControlInterpolant(), this._timeScaleInterpolant = o);
            var s = o.parameterPositions, l = o.sampleValues;
            return s[0] = i, s[1] = i + n, l[0] = t / a, l[1] = e / a, this
        }, stopWarping: function () {
            var t = this._timeScaleInterpolant;
            return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
        }, getMixer: function () {
            return this._mixer
        }, getClip: function () {
            return this._clip
        }, getRoot: function () {
            return this._localRoot || this._mixer._root
        }, _update: function (t, e, n, r) {
            var i = this._startTime;
            if (null !== i) {
                var o = (t - i) * n;
                if (o < 0 || 0 === n)return;
                this._startTime = null, e = n * o
            }
            e *= this._updateTimeScale(t);
            var a = this._updateTime(e), s = this._updateWeight(t);
            if (s > 0)for (var l = this._interpolants, c = this._propertyBindings, u = 0, h = l.length; u !== h; ++u)l[u].evaluate(a), c[u].accumulate(r, s)
        }, _updateWeight: function (t) {
            var e = 0;
            if (this.enabled) {
                e = this.weight;
                var n = this._weightInterpolant;
                if (null !== n) {
                    var r = n.evaluate(t)[0];
                    e *= r, t > n.parameterPositions[1] && (this.stopFading(), 0 === r && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = e, e
        }, _updateTimeScale: function (t) {
            var e = 0;
            if (!this.paused) {
                e = this.timeScale;
                var n = this._timeScaleInterpolant;
                if (null !== n) {
                    var r = n.evaluate(t)[0];
                    e *= r, t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e)
                }
            }
            return this._effectiveTimeScale = e, e
        }, _updateTime: function (t) {
            var e = this.time + t;
            if (0 === t)return e;
            var n = this._clip.duration, r = this.loop, i = this._loopCount;
            if (r === o.LoopOnce) {
                i === -1 && (this.loopCount = 0, this._setEndings(!0, !0, !1));
                t:{
                    if (e >= n) e = n; else {
                        if (!(e < 0))break t;
                        e = 0
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t < 0 ? -1 : 1
                    })
                }
            } else {
                var a = r === o.LoopPingPong;
                if (i === -1 && (t >= 0 ? (i = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), e >= n || e < 0) {
                    var s = Math.floor(e / n);
                    e -= n * s, i += Math.abs(s);
                    var l = this.repetitions - i;
                    if (l < 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? n : 0, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t > 0 ? 1 : -1
                    }); else {
                        if (0 === l) {
                            var c = t < 0;
                            this._setEndings(c, !c, a)
                        } else this._setEndings(!1, !1, a);
                        this._loopCount = i, this._mixer.dispatchEvent({type: "loop", action: this, loopDelta: s})
                    }
                }
                if (a && 1 === (1 & i))return this.time = e, n - e
            }
            return this.time = e, e
        }, _setEndings: function (t, e, n) {
            var r = this._interpolantSettings;
            n ? (r.endingStart = o.ZeroSlopeEnding, r.endingEnd = o.ZeroSlopeEnding) : (t ? r.endingStart = this.zeroSlopeAtStart ? o.ZeroSlopeEnding : o.ZeroCurvatureEnding : r.endingStart = o.WrapAroundEnding,
                e ? r.endingEnd = this.zeroSlopeAtEnd ? o.ZeroSlopeEnding : o.ZeroCurvatureEnding : r.endingEnd = o.WrapAroundEnding)
        }, _scheduleFading: function (t, e, n) {
            var r = this._mixer, i = r.time, o = this._weightInterpolant;
            null === o && (o = r._lendControlInterpolant(), this._weightInterpolant = o);
            var a = o.parameterPositions, s = o.sampleValues;
            return a[0] = i, s[0] = e, a[1] = i + t, s[1] = n, this
        }
    },o.AnimationClip = function (t, e, n) {
        this.name = t, this.tracks = n, this.duration = void 0 !== e ? e : -1, this.uuid = o.Math.generateUUID(), this.duration < 0 && this.resetDuration(), this.trim(), this.optimize()
    },o.AnimationClip.prototype = {
        constructor: o.AnimationClip, resetDuration: function () {
            for (var t = this.tracks, e = 0, n = 0, r = t.length; n !== r; ++n) {
                var i = this.tracks[n];
                e = Math.max(e, i.times[i.times.length - 1])
            }
            this.duration = e
        }, trim: function () {
            for (var t = 0; t < this.tracks.length; t++)this.tracks[t].trim(0, this.duration);
            return this
        }, optimize: function () {
            for (var t = 0; t < this.tracks.length; t++)this.tracks[t].optimize();
            return this
        }
    },Object.assign(o.AnimationClip, {
        parse: function (t) {
            for (var e = [], n = t.tracks, r = 1 / (t.fps || 1), i = 0, a = n.length; i !== a; ++i)e.push(o.KeyframeTrack.parse(n[i]).scale(r));
            return new o.AnimationClip(t.name, t.duration, e)
        }, toJSON: function (t) {
            for (var e = [], n = t.tracks, r = {
                name: t.name,
                duration: t.duration,
                tracks: e
            }, i = 0, a = n.length; i !== a; ++i)e.push(o.KeyframeTrack.toJSON(n[i]));
            return r
        }, CreateFromMorphTargetSequence: function (t, e, n, r) {
            for (var i = e.length, a = [], s = 0; s < i; s++) {
                var l = [], c = [];
                l.push((s + i - 1) % i, s, (s + 1) % i), c.push(0, 1, 0);
                var u = o.AnimationUtils.getKeyframeOrder(l);
                l = o.AnimationUtils.sortedArray(l, 1, u), c = o.AnimationUtils.sortedArray(c, 1, u), r || 0 !== l[0] || (l.push(i), c.push(c[0])), a.push(new o.NumberKeyframeTrack(".morphTargetInfluences[" + e[s].name + "]", l, c).scale(1 / n))
            }
            return new o.AnimationClip(t, -1, a)
        }, findByName: function (t, e) {
            var n = t;
            if (!Array.isArray(t)) {
                var r = t;
                n = r.geometry && r.geometry.animations || r.animations
            }
            for (var i = 0; i < n.length; i++)if (n[i].name === e)return n[i];
            return null
        }, CreateClipsFromMorphTargetSequences: function (t, e, n) {
            for (var r = {}, i = /^([\w-]*?)([\d]+)$/, a = 0, s = t.length; a < s; a++) {
                var l = t[a], c = l.name.match(i);
                if (c && c.length > 1) {
                    var u = c[1], h = r[u];
                    h || (r[u] = h = []), h.push(l)
                }
            }
            var f = [];
            for (var u in r)f.push(o.AnimationClip.CreateFromMorphTargetSequence(u, r[u], e, n));
            return f
        }, parseAnimation: function (t, e, n) {
            if (!t)return console.error("  no animation in JSONLoader data"), null;
            for (var r = function (t, e, n, r, i) {
                if (0 !== n.length) {
                    var a = [], s = [];
                    o.AnimationUtils.flattenJSON(n, a, s, r), 0 !== a.length && i.push(new t(e, a, s))
                }
            }, i = [], a = t.name || "default", s = t.length || -1, l = t.fps || 30, c = t.hierarchy || [], u = 0; u < c.length; u++) {
                var h = c[u].keys;
                if (h && 0 !== h.length)if (h[0].morphTargets) {
                    for (var f = {}, d = 0; d < h.length; d++)if (h[d].morphTargets)for (var p = 0; p < h[d].morphTargets.length; p++)f[h[d].morphTargets[p]] = -1;
                    for (var m in f) {
                        for (var v = [], g = [], p = 0; p !== h[d].morphTargets.length; ++p) {
                            var y = h[d];
                            v.push(y.time), g.push(y.morphTarget === m ? 1 : 0)
                        }
                        i.push(new o.NumberKeyframeTrack(".morphTargetInfluence[" + m + "]", v, g))
                    }
                    s = f.length * (l || 1)
                } else {
                    var x = ".bones[" + e[u].name + "]";
                    r(o.VectorKeyframeTrack, x + ".position", h, "pos", i), r(o.QuaternionKeyframeTrack, x + ".quaternion", h, "rot", i), r(o.VectorKeyframeTrack, x + ".scale", h, "scl", i)
                }
            }
            if (0 === i.length)return null;
            var _ = new o.AnimationClip(a, s, i);
            return _
        }
    }),o.AnimationMixer = function (t) {
        this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
    },Object.assign(o.AnimationMixer.prototype, o.EventDispatcher.prototype, {
        clipAction: function (t, e) {
            var n = e || this._root, r = n.uuid, i = "string" == typeof t ? o.AnimationClip.findByName(n, t) : t, a = null !== i ? i.uuid : t, s = this._actionsByClip[a], l = null;
            if (void 0 !== s) {
                var c = s.actionByRoot[r];
                if (void 0 !== c)return c;
                l = s.knownActions[0], null === i && (i = l._clip)
            }
            if (null === i)return null;
            var u = new o.AnimationMixer._Action(this, i, e);
            return this._bindAction(u, l), this._addInactiveAction(u, a, r), u
        }, existingAction: function (t, e) {
            var n = e || this._root, r = n.uuid, i = "string" == typeof t ? o.AnimationClip.findByName(n, t) : t, a = i ? i.uuid : t, s = this._actionsByClip[a];
            return void 0 !== s ? s.actionByRoot[r] || null : null
        }, stopAllAction: function () {
            var t = this._actions, e = this._nActiveActions, n = this._bindings, r = this._nActiveBindings;
            this._nActiveActions = 0, this._nActiveBindings = 0;
            for (var i = 0; i !== e; ++i)t[i].reset();
            for (var i = 0; i !== r; ++i)n[i].useCount = 0;
            return this
        }, update: function (t) {
            t *= this.timeScale;
            for (var e = this._actions, n = this._nActiveActions, r = this.time += t, i = Math.sign(t), o = this._accuIndex ^= 1, a = 0; a !== n; ++a) {
                var s = e[a];
                s.enabled && s._update(r, t, i, o)
            }
            for (var l = this._bindings, c = this._nActiveBindings, a = 0; a !== c; ++a)l[a].apply(o);
            return this
        }, getRoot: function () {
            return this._root
        }, uncacheClip: function (t) {
            var e = this._actions, n = t.uuid, r = this._actionsByClip, i = r[n];
            if (void 0 !== i) {
                for (var o = i.knownActions, a = 0, s = o.length; a !== s; ++a) {
                    var l = o[a];
                    this._deactivateAction(l);
                    var c = l._cacheIndex, u = e[e.length - 1];
                    l._cacheIndex = null, l._byClipCacheIndex = null, u._cacheIndex = c, e[c] = u, e.pop(), this._removeInactiveBindingsForAction(l)
                }
                delete r[n]
            }
        }, uncacheRoot: function (t) {
            var e = t.uuid, n = this._actionsByClip;
            for (var r in n) {
                var i = n[r].actionByRoot, o = i[e];
                void 0 !== o && (this._deactivateAction(o), this._removeInactiveAction(o))
            }
            var a = this._bindingsByRootAndName, s = a[e];
            if (void 0 !== s)for (var l in s) {
                var c = s[l];
                c.restoreOriginalState(), this._removeInactiveBinding(c)
            }
        }, uncacheAction: function (t, e) {
            var n = this.existingAction(t, e);
            null !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
        }
    }),o.AnimationMixer._Action = o.AnimationAction._new,Object.assign(o.AnimationMixer.prototype, {
        _bindAction: function (t, e) {
            var n = t._localRoot || this._root, r = t._clip.tracks, i = r.length, a = t._propertyBindings, s = t._interpolants, l = n.uuid, c = this._bindingsByRootAndName, u = c[l];
            void 0 === u && (u = {}, c[l] = u);
            for (var h = 0; h !== i; ++h) {
                var f = r[h], d = f.name, p = u[d];
                if (void 0 !== p) a[h] = p; else {
                    if (p = a[h], void 0 !== p) {
                        null === p._cacheIndex && (++p.referenceCount, this._addInactiveBinding(p, l, d));
                        continue
                    }
                    var m = e && e._propertyBindings[h].binding.parsedPath;
                    p = new o.PropertyMixer(o.PropertyBinding.create(n, d, m), f.ValueTypeName, f.getValueSize()), ++p.referenceCount, this._addInactiveBinding(p, l, d), a[h] = p
                }
                s[h].resultBuffer = p.buffer
            }
        }, _activateAction: function (t) {
            if (!this._isActiveAction(t)) {
                if (null === t._cacheIndex) {
                    var e = (t._localRoot || this._root).uuid, n = t._clip.uuid, r = this._actionsByClip[n];
                    this._bindAction(t, r && r.knownActions[0]), this._addInactiveAction(t, n, e)
                }
                for (var i = t._propertyBindings, o = 0, a = i.length; o !== a; ++o) {
                    var s = i[o];
                    0 === s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
                }
                this._lendAction(t)
            }
        }, _deactivateAction: function (t) {
            if (this._isActiveAction(t)) {
                for (var e = t._propertyBindings, n = 0, r = e.length; n !== r; ++n) {
                    var i = e[n];
                    0 === --i.useCount && (i.restoreOriginalState(), this._takeBackBinding(i))
                }
                this._takeBackAction(t)
            }
        }, _initMemoryManager: function () {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            var t = this;
            this.stats = {
                actions: {
                    get total() {
                        return t._actions.length
                    }, get inUse() {
                        return t._nActiveActions
                    }
                }, bindings: {
                    get total() {
                        return t._bindings.length
                    }, get inUse() {
                        return t._nActiveBindings
                    }
                }, controlInterpolants: {
                    get total() {
                        return t._controlInterpolants.length
                    }, get inUse() {
                        return t._nActiveControlInterpolants
                    }
                }
            }
        }, _isActiveAction: function (t) {
            var e = t._cacheIndex;
            return null !== e && e < this._nActiveActions
        }, _addInactiveAction: function (t, e, n) {
            var r = this._actions, i = this._actionsByClip, o = i[e];
            if (void 0 === o) o = {knownActions: [t], actionByRoot: {}}, t._byClipCacheIndex = 0, i[e] = o; else {
                var a = o.knownActions;
                t._byClipCacheIndex = a.length, a.push(t)
            }
            t._cacheIndex = r.length, r.push(t), o.actionByRoot[n] = t
        }, _removeInactiveAction: function (t) {
            var e = this._actions, n = e[e.length - 1], r = t._cacheIndex;
            n._cacheIndex = r, e[r] = n, e.pop(), t._cacheIndex = null;
            var i = t._clip.uuid, o = this._actionsByClip, a = o[i], s = a.knownActions, l = s[s.length - 1], c = t._byClipCacheIndex;
            l._byClipCacheIndex = c, s[c] = l, s.pop(), t._byClipCacheIndex = null;
            var u = a.actionByRoot, h = (e._localRoot || this._root).uuid;
            delete u[h], 0 === s.length && delete o[i], this._removeInactiveBindingsForAction(t)
        }, _removeInactiveBindingsForAction: function (t) {
            for (var e = t._propertyBindings, n = 0, r = e.length; n !== r; ++n) {
                var i = e[n];
                0 === --i.referenceCount && this._removeInactiveBinding(i)
            }
        }, _lendAction: function (t) {
            var e = this._actions, n = t._cacheIndex, r = this._nActiveActions++, i = e[r];
            t._cacheIndex = r, e[r] = t, i._cacheIndex = n, e[n] = i
        }, _takeBackAction: function (t) {
            var e = this._actions, n = t._cacheIndex, r = --this._nActiveActions, i = e[r];
            t._cacheIndex = r, e[r] = t, i._cacheIndex = n, e[n] = i
        }, _addInactiveBinding: function (t, e, n) {
            var r = this._bindingsByRootAndName, i = r[e], o = this._bindings;
            void 0 === i && (i = {}, r[e] = i), i[n] = t, t._cacheIndex = o.length, o.push(t)
        }, _removeInactiveBinding: function (t) {
            var e = this._bindings, n = t.binding, r = n.rootNode.uuid, i = n.path, o = this._bindingsByRootAndName, a = o[r], s = e[e.length - 1], l = t._cacheIndex;
            s._cacheIndex = l, e[l] = s, e.pop(), delete a[i];
            t:{
                for (var c in a)break t;
                delete o[r]
            }
        }, _lendBinding: function (t) {
            var e = this._bindings, n = t._cacheIndex, r = this._nActiveBindings++, i = e[r];
            t._cacheIndex = r, e[r] = t, i._cacheIndex = n, e[n] = i
        }, _takeBackBinding: function (t) {
            var e = this._bindings, n = t._cacheIndex, r = --this._nActiveBindings, i = e[r];
            t._cacheIndex = r, e[r] = t, i._cacheIndex = n, e[n] = i
        }, _lendControlInterpolant: function () {
            var t = this._controlInterpolants, e = this._nActiveControlInterpolants++, n = t[e];
            return void 0 === n && (n = new o.LinearInterpolant(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = e, t[e] = n), n
        }, _takeBackControlInterpolant: function (t) {
            var e = this._controlInterpolants, n = t.__cacheIndex, r = --this._nActiveControlInterpolants, i = e[r];
            t.__cacheIndex = r, e[r] = t, i.__cacheIndex = n, e[n] = i
        }, _controlInterpolantsResultBuffer: new Float32Array(1)
    }),o.AnimationObjectGroup = function (t) {
        this.uuid = o.Math.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
        var e = {};
        this._indicesByUUID = e;
        for (var n = 0, r = arguments.length; n !== r; ++n)e[arguments[n].uuid] = n;
        this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
        var i = this;
        this.stats = {
            objects: {
                get total() {
                    return i._objects.length
                }, get inUse() {
                    return this.total - i.nCachedObjects_
                }
            }, get bindingsPerObject() {
                return i._bindings.length
            }
        }
    },o.AnimationObjectGroup.prototype = {
        constructor: o.AnimationObjectGroup, add: function (t) {
            for (var e = this._objects, n = e.length, r = this.nCachedObjects_, i = this._indicesByUUID, a = this._paths, s = this._parsedPaths, l = this._bindings, c = l.length, u = 0, h = arguments.length; u !== h; ++u) {
                var f = arguments[u], d = f.uuid, p = i[d];
                if (void 0 === p) {
                    p = n++, i[d] = p, e.push(f);
                    for (var m = 0, v = c; m !== v; ++m)l[m].push(new o.PropertyBinding(f, a[m], s[m]))
                } else if (p < r) {
                    var g = e[p], y = --r, x = e[y];
                    i[x.uuid] = p, e[p] = x, i[d] = y, e[y] = f;
                    for (var m = 0, v = c; m !== v; ++m) {
                        var _ = l[m], b = _[y], w = _[p];
                        _[p] = b, void 0 === w && (w = new o.PropertyBinding(f, a[m], s[m])), _[y] = w
                    }
                } else e[p] !== g && console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")
            }
            this.nCachedObjects_ = r
        }, remove: function (t) {
            for (var e = this._objects, n = (e.length, this.nCachedObjects_), r = this._indicesByUUID, i = this._bindings, o = i.length, a = 0, s = arguments.length; a !== s; ++a) {
                var l = arguments[a], c = l.uuid, u = r[c];
                if (void 0 !== u && u >= n) {
                    var h = n++, f = e[h];
                    r[f.uuid] = u, e[u] = f, r[c] = h, e[h] = l;
                    for (var d = 0, p = o; d !== p; ++d) {
                        var m = i[d], v = m[h], g = m[u];
                        m[u] = v, m[h] = g
                    }
                }
            }
            this.nCachedObjects_ = n
        }, uncache: function (t) {
            for (var e = this._objects, n = e.length, r = this.nCachedObjects_, i = this._indicesByUUID, o = this._bindings, a = o.length, s = 0, l = arguments.length; s !== l; ++s) {
                var c = arguments[s], u = c.uuid, h = i[u];
                if (void 0 !== h)if (delete i[u], h < r) {
                    var f = --r, d = e[f], p = --n, m = e[p];
                    i[d.uuid] = h, e[h] = d, i[m.uuid] = f, e[f] = m, e.pop();
                    for (var v = 0, g = a; v !== g; ++v) {
                        var y = o[v], x = y[f], _ = y[p];
                        y[h] = x, y[f] = _, y.pop()
                    }
                } else {
                    var p = --n, m = e[p];
                    i[m.uuid] = h, e[h] = m, e.pop();
                    for (var v = 0, g = a; v !== g; ++v) {
                        var y = o[v];
                        y[h] = y[p], y.pop()
                    }
                }
            }
            this.nCachedObjects_ = r
        }, subscribe_: function (t, e) {
            var n = this._bindingsIndicesByPath, r = n[t], i = this._bindings;
            if (void 0 !== r)return i[r];
            var a = this._paths, s = this._parsedPaths, l = this._objects, c = l.length, u = this.nCachedObjects_, h = new Array(c);
            r = i.length, n[t] = r, a.push(t), s.push(e), i.push(h);
            for (var f = u, d = l.length; f !== d; ++f) {
                var p = l[f];
                h[f] = new o.PropertyBinding(p, t, e)
            }
            return h
        }, unsubscribe_: function (t) {
            var e = this._bindingsIndicesByPath, n = e[t];
            if (void 0 !== n) {
                var r = this._paths, i = this._parsedPaths, o = this._bindings, a = o.length - 1, s = o[a], l = t[a];
                e[l] = n, o[n] = s, o.pop(), i[n] = i[a], i.pop(), r[n] = r[a], r.pop()
            }
        }
    },o.AnimationUtils = {
        arraySlice: function (t, e, n) {
            return o.AnimationUtils.isTypedArray(t) ? new t.constructor(t.subarray(e, n)) : t.slice(e, n)
        }, convertArray: function (t, e, n) {
            return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
        }, isTypedArray: function (t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        }, getKeyframeOrder: function (t) {
            function e(e, n) {
                return t[e] - t[n]
            }

            for (var n = t.length, r = new Array(n), i = 0; i !== n; ++i)r[i] = i;
            return r.sort(e), r
        }, sortedArray: function (t, e, n) {
            for (var r = t.length, i = new t.constructor(r), o = 0, a = 0; a !== r; ++o)for (var s = n[o] * e, l = 0; l !== e; ++l)i[a++] = t[s + l];
            return i
        }, flattenJSON: function (t, e, n, r) {
            for (var i = 1, o = t[0]; void 0 !== o && void 0 === o[r];)o = t[i++];
            if (void 0 !== o) {
                var a = o[r];
                if (void 0 !== a)if (Array.isArray(a)) {
                    do a = o[r], void 0 !== a && (e.push(o.time), n.push.apply(n, a)), o = t[i++]; while (void 0 !== o)
                } else if (void 0 !== a.toArray) {
                    do a = o[r], void 0 !== a && (e.push(o.time), a.toArray(n, n.length)), o = t[i++]; while (void 0 !== o)
                } else do a = o[r], void 0 !== a && (e.push(o.time), n.push(a)), o = t[i++]; while (void 0 !== o)
            }
        }
    },o.KeyframeTrack = function (t, e, n, r) {
        if (void 0 === t)throw new Error("track name is undefined");
        if (void 0 === e || 0 === e.length)throw new Error("no keyframes in track named " + t);
        this.name = t, this.times = o.AnimationUtils.convertArray(e, this.TimeBufferType), this.values = o.AnimationUtils.convertArray(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation), this.validate(), this.optimize()
    },o.KeyframeTrack.prototype = {
        constructor: o.KeyframeTrack,
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: o.InterpolateLinear,
        InterpolantFactoryMethodDiscrete: function (t) {
            return new o.DiscreteInterpolant(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodLinear: function (t) {
            return new o.LinearInterpolant(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodSmooth: function (t) {
            return new o.CubicInterpolant(this.times, this.values, this.getValueSize(), t)
        },
        setInterpolation: function (t) {
            var e;
            switch (t) {
                case o.InterpolateDiscrete:
                    e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case o.InterpolateLinear:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case o.InterpolateSmooth:
                    e = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === e) {
                var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t === this.DefaultInterpolation)throw new Error(n);
                    this.setInterpolation(this.DefaultInterpolation)
                }
                return void console.warn(n)
            }
            this.createInterpolant = e
        },
        getInterpolation: function () {
            switch (this.createInterpolant) {
                case this.InterpolantFactoryMethodDiscrete:
                    return o.InterpolateDiscrete;
                case this.InterpolantFactoryMethodLinear:
                    return o.InterpolateLinear;
                case this.InterpolantFactoryMethodSmooth:
                    return o.InterpolateSmooth
            }
        },
        getValueSize: function () {
            return this.values.length / this.times.length
        },
        shift: function (t) {
            if (0 !== t)for (var e = this.times, n = 0, r = e.length; n !== r; ++n)e[n] += t;
            return this
        },
        scale: function (t) {
            if (1 !== t)for (var e = this.times, n = 0, r = e.length; n !== r; ++n)e[n] *= t;
            return this
        },
        trim: function (t, e) {
            for (var n = this.times, r = n.length, i = 0, a = r - 1; i !== r && n[i] < t;)++i;
            for (; a !== -1 && n[a] > e;)--a;
            if (++a, 0 !== i || a !== r) {
                i >= a && (a = Math.max(a, 1), i = a - 1);
                var s = this.getValueSize();
                this.times = o.AnimationUtils.arraySlice(n, i, a), this.values = o.AnimationUtils.arraySlice(this.values, i * s, a * s)
            }
            return this
        },
        validate: function () {
            var t = !0, e = this.getValueSize();
            e - Math.floor(e) !== 0 && (console.error("invalid value size in track", this), t = !1);
            var n = this.times, r = this.values, i = n.length;
            0 === i && (console.error("track is empty", this), t = !1);
            for (var a = null, s = 0; s !== i; s++) {
                var l = n[s];
                if ("number" == typeof l && isNaN(l)) {
                    console.error("time is not a valid number", this, s, l), t = !1;
                    break
                }
                if (null !== a && a > l) {
                    console.error("out of order keys", this, s, l, a), t = !1;
                    break
                }
                a = l
            }
            if (void 0 !== r && o.AnimationUtils.isTypedArray(r))for (var s = 0, c = r.length; s !== c; ++s) {
                var u = r[s];
                if (isNaN(u)) {
                    console.error("value is not a valid number", this, s, u), t = !1;
                    break
                }
            }
            return t
        },
        optimize: function () {
            for (var t = this.times, e = this.values, n = this.getValueSize(), r = 1, i = 1, a = t.length - 1; i <= a; ++i) {
                var s = !1, l = t[i], c = t[i + 1];
                if (l !== c && (1 !== i || l !== l[0]))for (var u = i * n, h = u - n, f = u + n, d = 0; d !== n; ++d) {
                    var p = e[u + d];
                    if (p !== e[h + d] || p !== e[f + d]) {
                        s = !0;
                        break
                    }
                }
                if (s) {
                    if (i !== r) {
                        t[r] = t[i];
                        for (var m = i * n, v = r * n, d = 0; d !== n; ++d)e[v + d] = e[m + d]
                    }
                    ++r
                }
            }
            return r !== t.length && (this.times = o.AnimationUtils.arraySlice(t, 0, r), this.values = o.AnimationUtils.arraySlice(e, 0, r * n)), this
        }
    },Object.assign(o.KeyframeTrack, {
        parse: function (t) {
            if (void 0 === t.type)throw new Error("track type undefined, can not parse");
            var e = o.KeyframeTrack._getTrackTypeForValueTypeName(t.type);
            if (void 0 === t.times) {
                var n = [], r = [];
                o.AnimationUtils.flattenJSON(t.keys, n, r, "value"), t.times = n, t.values = r
            }
            return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
        }, toJSON: function (t) {
            var e, n = t.constructor;
            if (void 0 !== n.toJSON) e = n.toJSON(t); else {
                e = {
                    name: t.name,
                    times: o.AnimationUtils.convertArray(t.times, Array),
                    values: o.AnimationUtils.convertArray(t.values, Array)
                };
                var r = t.getInterpolation();
                r !== t.DefaultInterpolation && (e.interpolation = r)
            }
            return e.type = t.ValueTypeName, e
        }, _getTrackTypeForValueTypeName: function (t) {
            switch (t.toLowerCase()) {
                case"scalar":
                case"double":
                case"float":
                case"number":
                case"integer":
                    return o.NumberKeyframeTrack;
                case"vector":
                case"vector2":
                case"vector3":
                case"vector4":
                    return o.VectorKeyframeTrack;
                case"color":
                    return o.ColorKeyframeTrack;
                case"quaternion":
                    return o.QuaternionKeyframeTrack;
                case"bool":
                case"boolean":
                    return o.BooleanKeyframeTrack;
                case"string":
                    return o.StringKeyframeTrack
            }
            throw new Error("Unsupported typeName: " + t)
        }
    }),o.PropertyBinding = function (t, e, n) {
        this.path = e, this.parsedPath = n || o.PropertyBinding.parseTrackName(e), this.node = o.PropertyBinding.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
    },o.PropertyBinding.prototype = {
        constructor: o.PropertyBinding, getValue: function (t, e) {
            this.bind(), this.getValue(t, e)
        }, setValue: function (t, e) {
            this.bind(), this.setValue(t, e)
        }, bind: function () {
            var t = this.node, e = this.parsedPath, n = e.objectName, r = e.propertyName, i = e.propertyIndex;
            if (t || (t = o.PropertyBinding.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t)return void console.error("  trying to update node for track: " + this.path + " but it wasn't found.");
            if (n) {
                var a = e.objectIndex;
                switch (n) {
                    case"materials":
                        if (!t.material)return void console.error("  can not bind to material as node does not have a material", this);
                        if (!t.material.materials)return void console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                        t = t.material.materials;
                        break;
                    case"bones":
                        if (!t.skeleton)return void console.error("  can not bind to bones as node does not have a skeleton", this);
                        t = t.skeleton.bones;
                        for (var s = 0; s < t.length; s++)if (t[s].name === a) {
                            a = s;
                            break
                        }
                        break;
                    default:
                        if (void 0 === t[n])return void console.error("  can not bind to objectName of node, undefined", this);
                        t = t[n]
                }
                if (void 0 !== a) {
                    if (void 0 === t[a])return void console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, t);
                    t = t[a]
                }
            }
            var l = t[r];
            if (void 0 === l) {
                var c = e.nodeName;
                return void console.error("  trying to update property for track: " + c + "." + r + " but it wasn't found.", t)
            }
            var u = this.Versioning.None;
            void 0 !== t.needsUpdate ? (u = this.Versioning.NeedsUpdate, this.targetObject = t) : void 0 !== t.matrixWorldNeedsUpdate && (u = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = t);
            var h = this.BindingType.Direct;
            if (void 0 !== i) {
                if ("morphTargetInfluences" === r) {
                    if (!t.geometry)return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this);
                    if (!t.geometry.morphTargets)return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this);
                    for (var s = 0; s < this.node.geometry.morphTargets.length; s++)if (t.geometry.morphTargets[s].name === i) {
                        i = s;
                        break
                    }
                }
                h = this.BindingType.ArrayElement, this.resolvedProperty = l, this.propertyIndex = i
            } else void 0 !== l.fromArray && void 0 !== l.toArray ? (h = this.BindingType.HasFromToArray, this.resolvedProperty = l) : void 0 !== l.length ? (h = this.BindingType.EntireArray, this.resolvedProperty = l) : this.propertyName = r;
            this.getValue = this.GetterByBindingType[h], this.setValue = this.SetterByBindingTypeAndVersioning[h][u]
        }, unbind: function () {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
        }
    },Object.assign(o.PropertyBinding.prototype, {
        _getValue_unavailable: function () {
        },
        _setValue_unavailable: function () {
        },
        _getValue_unbound: o.PropertyBinding.prototype.getValue,
        _setValue_unbound: o.PropertyBinding.prototype.setValue,
        BindingType: {Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3},
        Versioning: {None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2},
        GetterByBindingType: [function (t, e) {
            t[e] = this.node[this.propertyName]
        }, function (t, e) {
            for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r)t[e++] = n[r]
        }, function (t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex]
        }, function (t, e) {
            this.resolvedProperty.toArray(t, e)
        }],
        SetterByBindingTypeAndVersioning: [[function (t, e) {
            this.node[this.propertyName] = t[e]
        }, function (t, e) {
            this.node[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
        }, function (t, e) {
            this.node[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
        }], [function (t, e) {
            for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r)n[r] = t[e++]
        }, function (t, e) {
            for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r)n[r] = t[e++];
            this.targetObject.needsUpdate = !0
        }, function (t, e) {
            for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r)n[r] = t[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }], [function (t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e]
        }, function (t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
        }, function (t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
        }], [function (t, e) {
            this.resolvedProperty.fromArray(t, e)
        }, function (t, e) {
            this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
        }, function (t, e) {
            this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
        }]]
    }),o.PropertyBinding.Composite = function (t, e, n) {
        var r = n || o.PropertyBinding.parseTrackName(e);
        this._targetGroup = t, this._bindings = t.subscribe_(e, r)
    },o.PropertyBinding.Composite.prototype = {
        constructor: o.PropertyBinding.Composite, getValue: function (t, e) {
            this.bind();
            var n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
            void 0 !== r && r.getValue(t, e)
        }, setValue: function (t, e) {
            for (var n = this._bindings, r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r)n[r].setValue(t, e)
        }, bind: function () {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)t[e].bind()
        }, unbind: function () {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)t[e].unbind()
        }
    },o.PropertyBinding.create = function (t, e, n) {
        return t instanceof o.AnimationObjectGroup ? new o.PropertyBinding.Composite(t, e, n) : new o.PropertyBinding(t, e, n)
    },o.PropertyBinding.parseTrackName = function (t) {
        var e = /^(([\w]+\/)*)([\w-\d]+)?(\.([\w]+)(\[([\w\d\[\]\_.:\- ]+)\])?)?(\.([\w.]+)(\[([\w\d\[\]\_. ]+)\])?)$/, n = e.exec(t);
        if (!n)throw new Error("cannot parse trackName at all: " + t);
        n.index === e.lastIndex && e.lastIndex++;
        var r = {nodeName: n[3], objectName: n[5], objectIndex: n[7], propertyName: n[9], propertyIndex: n[11]};
        if (null === r.propertyName || 0 === r.propertyName.length)throw new Error("can not parse propertyName from trackName: " + t);
        return r
    },o.PropertyBinding.findNode = function (t, e) {
        if (!e || "" === e || "root" === e || "." === e || e === -1 || e === t.name || e === t.uuid)return t;
        if (t.skeleton) {
            var n = function (t) {
                for (var n = 0; n < t.bones.length; n++) {
                    var r = t.bones[n];
                    if (r.name === e)return r
                }
                return null
            }, r = n(t.skeleton);
            if (r)return r
        }
        if (t.children) {
            var i = function (t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (r.name === e || r.uuid === e)return r;
                    var o = i(r.children);
                    if (o)return o
                }
                return null
            }, o = i(t.children);
            if (o)return o
        }
        return null
    },o.PropertyMixer = function (t, e, n) {
        this.binding = t, this.valueSize = n;
        var r, i = Float64Array;
        switch (e) {
            case"quaternion":
                r = this._slerp;
                break;
            case"string":
            case"bool":
                i = Array, r = this._select;
                break;
            default:
                r = this._lerp
        }
        this.buffer = new i(4 * n), this._mixBufferRegion = r, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
    },o.PropertyMixer.prototype = {
        constructor: o.PropertyMixer, accumulate: function (t, e) {
            var n = this.buffer, r = this.valueSize, i = t * r + r, o = this.cumulativeWeight;
            if (0 === o) {
                for (var a = 0; a !== r; ++a)n[i + a] = n[a];
                o = e
            } else {
                o += e;
                var s = e / o;
                this._mixBufferRegion(n, i, 0, s, r)
            }
            this.cumulativeWeight = o
        }, apply: function (t) {
            var e = this.valueSize, n = this.buffer, r = t * e + e, i = this.cumulativeWeight, o = this.binding;
            if (this.cumulativeWeight = 0, i < 1) {
                var a = 3 * e;
                this._mixBufferRegion(n, r, a, 1 - i, e)
            }
            for (var s = e, l = e + e; s !== l; ++s)if (n[s] !== n[s + e]) {
                o.setValue(n, r);
                break
            }
        }, saveOriginalState: function () {
            var t = this.binding, e = this.buffer, n = this.valueSize, r = 3 * n;
            t.getValue(e, r);
            for (var i = n, o = r; i !== o; ++i)e[i] = e[r + i % n];
            this.cumulativeWeight = 0
        }, restoreOriginalState: function () {
            var t = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t)
        }, _select: function (t, e, n, r, i) {
            if (r >= .5)for (var o = 0; o !== i; ++o)t[e + o] = t[n + o]
        }, _slerp: function (t, e, n, r, i) {
            o.Quaternion.slerpFlat(t, e, t, e, t, n, r)
        }, _lerp: function (t, e, n, r, i) {
            for (var o = 1 - r, a = 0; a !== i; ++a) {
                var s = e + a;
                t[s] = t[s] * o + t[n + a] * r
            }
        }
    },o.BooleanKeyframeTrack = function (t, e, n) {
        o.KeyframeTrack.call(this, t, e, n)
    },o.BooleanKeyframeTrack.prototype = Object.assign(Object.create(o.KeyframeTrack.prototype), {
        constructor: o.BooleanKeyframeTrack,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: o.InterpolateDiscrete,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }),o.ColorKeyframeTrack = function (t, e, n, r) {
        o.KeyframeTrack.call(this, t, e, n, r)
    },o.ColorKeyframeTrack.prototype = Object.assign(Object.create(o.KeyframeTrack.prototype), {
        constructor: o.ColorKeyframeTrack,
        ValueTypeName: "color"
    }),o.NumberKeyframeTrack = function (t, e, n, r) {
        o.KeyframeTrack.call(this, t, e, n, r)
    },o.NumberKeyframeTrack.prototype = Object.assign(Object.create(o.KeyframeTrack.prototype), {
        constructor: o.NumberKeyframeTrack,
        ValueTypeName: "number"
    }),o.QuaternionKeyframeTrack = function (t, e, n, r) {
        o.KeyframeTrack.call(this, t, e, n, r)
    },o.QuaternionKeyframeTrack.prototype = Object.assign(Object.create(o.KeyframeTrack.prototype), {
        constructor: o.QuaternionKeyframeTrack,
        ValueTypeName: "quaternion",
        DefaultInterpolation: o.InterpolateLinear,
        InterpolantFactoryMethodLinear: function (t) {
            return new o.QuaternionLinearInterpolant(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodSmooth: void 0
    }),o.StringKeyframeTrack = function (t, e, n, r) {
        o.KeyframeTrack.call(this, t, e, n, r)
    },o.StringKeyframeTrack.prototype = Object.assign(Object.create(o.KeyframeTrack.prototype), {
        constructor: o.StringKeyframeTrack,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: o.InterpolateDiscrete,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }),o.VectorKeyframeTrack = function (t, e, n, r) {
        o.KeyframeTrack.call(this, t, e, n, r)
    },o.VectorKeyframeTrack.prototype = Object.assign(Object.create(o.KeyframeTrack.prototype), {
        constructor: o.VectorKeyframeTrack,
        ValueTypeName: "vector"
    }),o.Audio = function (t) {
        o.Object3D.call(this), this.type = "Audio", this.context = t.context, this.source = this.context.createBufferSource(), this.source.onended = this.onEnded.bind(this), this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.startTime = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
    },o.Audio.prototype = Object.assign(Object.create(o.Object3D.prototype), {
        constructor: o.Audio,
        getOutput: function () {
            return this.gain
        },
        setNodeSource: function (t) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
        },
        setBuffer: function (t) {
            return this.source.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
        },
        play: function () {
            if (this.isPlaying === !0)return void console.warn("THREE.Audio: Audio is already playing.");
            if (this.hasPlaybackControl === !1)return void console.warn("THREE.Audio: this Audio has no playback control.");
            var t = this.context.createBufferSource();
            return t.buffer = this.source.buffer, t.loop = this.source.loop, t.onended = this.source.onended, t.start(0, this.startTime), t.playbackRate.value = this.playbackRate, this.isPlaying = !0, this.source = t, this.connect()
        },
        pause: function () {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(), this.startTime = this.context.currentTime, this.isPlaying = !1, this)
        },
        stop: function () {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(), this.startTime = 0, this.isPlaying = !1, this)
        },
        connect: function () {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++)this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else this.source.connect(this.getOutput());
            return this
        },
        disconnect: function () {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++)this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function () {
            return this.filters
        },
        setFilters: function (t) {
            return t || (t = []), this.isPlaying === !0 ? (this.disconnect(), this.filters = t, this.connect()) : this.filters = t, this
        },
        getFilter: function () {
            return this.getFilters()[0]
        },
        setFilter: function (t) {
            return this.setFilters(t ? [t] : [])
        },
        setPlaybackRate: function (t) {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.playbackRate = t, this.isPlaying === !0 && (this.source.playbackRate.value = this.playbackRate), this)
        },
        getPlaybackRate: function () {
            return this.playbackRate
        },
        onEnded: function () {
            this.isPlaying = !1
        },
        getLoop: function () {
            return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.source.loop
        },
        setLoop: function (t) {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : void(this.source.loop = t)
        },
        getVolume: function () {
            return this.gain.gain.value
        },
        setVolume: function (t) {
            return this.gain.gain.value = t, this
        }
    }),o.AudioAnalyser = function (t, e) {
        this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
    },Object.assign(o.AudioAnalyser.prototype, {
        getFrequencyData: function () {
            return this.analyser.getByteFrequencyData(this.data), this.data
        }, getAverageFrequency: function () {
            for (var t = 0, e = this.getFrequencyData(), n = 0; n < e.length; n++)t += e[n];
            return t / e.length
        }
    }),Object.defineProperty(o, "AudioContext", {
        get: function () {
            var t;
            return function () {
                return void 0 === t && (t = new (window.AudioContext || window.webkitAudioContext)), t
            }
        }()
    }),o.PositionalAudio = function (t) {
        o.Audio.call(this, t), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
    },o.PositionalAudio.prototype = Object.assign(Object.create(o.Audio.prototype), {
        constructor: o.PositionalAudio, getOutput: function () {
            return this.panner
        }, getRefDistance: function () {
            return this.panner.refDistance
        }, setRefDistance: function (t) {
            this.panner.refDistance = t
        }, getRolloffFactor: function () {
            return this.panner.rolloffFactor
        }, setRolloffFactor: function (t) {
            this.panner.rolloffFactor = t
        }, getDistanceModel: function () {
            return this.panner.distanceModel
        }, setDistanceModel: function (t) {
            this.panner.distanceModel = t
        }, getMaxDistance: function () {
            return this.panner.maxDistance
        }, setMaxDistance: function (t) {
            this.panner.maxDistance = t
        }, updateMatrixWorld: function () {
            var t = new o.Vector3;
            return function (e) {
                o.Object3D.prototype.updateMatrixWorld.call(this, e), t.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(t.x, t.y, t.z)
            }
        }()
    }),o.AudioListener = function () {
        o.Object3D.call(this), this.type = "AudioListener", this.context = o.AudioContext, this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null
    },o.AudioListener.prototype = Object.assign(Object.create(o.Object3D.prototype), {
        constructor: o.AudioListener,
        getInput: function () {
            return this.gain
        },
        removeFilter: function () {
            null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null)
        },
        getFilter: function () {
            return this.filter
        },
        setFilter: function (t) {
            null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination)
        },
        getMasterVolume: function () {
            return this.gain.gain.value
        },
        setMasterVolume: function (t) {
            this.gain.gain.value = t
        },
        updateMatrixWorld: function () {
            var t = new o.Vector3, e = new o.Quaternion, n = new o.Vector3, r = new o.Vector3;
            return function (i) {
                o.Object3D.prototype.updateMatrixWorld.call(this, i);
                var a = this.context.listener, s = this.up;
                this.matrixWorld.decompose(t, e, n), r.set(0, 0, -1).applyQuaternion(e), a.setPosition(t.x, t.y, t.z), a.setOrientation(r.x, r.y, r.z, s.x, s.y, s.z)
            }
        }()
    }),o.Camera = function () {
        o.Object3D.call(this), this.type = "Camera", this.matrixWorldInverse = new o.Matrix4, this.projectionMatrix = new o.Matrix4
    },o.Camera.prototype = Object.create(o.Object3D.prototype),o.Camera.prototype.constructor = o.Camera,o.Camera.prototype.getWorldDirection = function () {
        var t = new o.Quaternion;
        return function (e) {
            var n = e || new o.Vector3;
            return this.getWorldQuaternion(t), n.set(0, 0, -1).applyQuaternion(t)
        }
    }(),o.Camera.prototype.lookAt = function () {
        var t = new o.Matrix4;
        return function (e) {
            t.lookAt(this.position, e, this.up), this.quaternion.setFromRotationMatrix(t)
        }
    }(),o.Camera.prototype.clone = function () {
        return (new this.constructor).copy(this)
    },o.Camera.prototype.copy = function (t) {
        return o.Object3D.prototype.copy.call(this, t), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this
    },o.CubeCamera = function (t, e, n) {
        o.Object3D.call(this), this.type = "CubeCamera";
        var r = 90, i = 1, a = new o.PerspectiveCamera(r, i, t, e);
        a.up.set(0, -1, 0), a.lookAt(new o.Vector3(1, 0, 0)), this.add(a);
        var s = new o.PerspectiveCamera(r, i, t, e);
        s.up.set(0, -1, 0), s.lookAt(new o.Vector3(-1, 0, 0)), this.add(s);
        var l = new o.PerspectiveCamera(r, i, t, e);
        l.up.set(0, 0, 1), l.lookAt(new o.Vector3(0, 1, 0)), this.add(l);
        var c = new o.PerspectiveCamera(r, i, t, e);
        c.up.set(0, 0, -1), c.lookAt(new o.Vector3(0, -1, 0)), this.add(c);
        var u = new o.PerspectiveCamera(r, i, t, e);
        u.up.set(0, -1, 0), u.lookAt(new o.Vector3(0, 0, 1)), this.add(u);
        var h = new o.PerspectiveCamera(r, i, t, e);
        h.up.set(0, -1, 0), h.lookAt(new o.Vector3(0, 0, -1)), this.add(h);
        var f = {format: o.RGBFormat, magFilter: o.LinearFilter, minFilter: o.LinearFilter};
        this.renderTarget = new o.WebGLRenderTargetCube(n, n, f), this.updateCubeMap = function (t, e) {
            null === this.parent && this.updateMatrixWorld();
            var n = this.renderTarget, r = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1, n.activeCubeFace = 0, t.render(e, a, n), n.activeCubeFace = 1, t.render(e, s, n), n.activeCubeFace = 2, t.render(e, l, n), n.activeCubeFace = 3, t.render(e, c, n), n.activeCubeFace = 4, t.render(e, u, n), n.texture.generateMipmaps = r, n.activeCubeFace = 5, t.render(e, h, n), t.setRenderTarget(null)
        }
    },o.CubeCamera.prototype = Object.create(o.Object3D.prototype),o.CubeCamera.prototype.constructor = o.CubeCamera,o.OrthographicCamera = function (t, e, n, r, i, a) {
        o.Camera.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = r, this.near = void 0 !== i ? i : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
    },o.OrthographicCamera.prototype = Object.assign(Object.create(o.Camera.prototype), {
        constructor: o.OrthographicCamera,
        copy: function (t) {
            return o.Camera.prototype.copy.call(this, t), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
        },
        setViewOffset: function (t, e, n, r, i, o) {
            this.view = {
                fullWidth: t,
                fullHeight: e,
                offsetX: n,
                offsetY: r,
                width: i,
                height: o
            }, this.updateProjectionMatrix()
        },
        clearViewOffset: function () {
            this.view = null, this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function () {
            var t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - t, o = n + t, a = r + e, s = r - e;
            if (null !== this.view) {
                var l = this.zoom / (this.view.width / this.view.fullWidth), c = this.zoom / (this.view.height / this.view.fullHeight), u = (this.right - this.left) / this.view.width, h = (this.top - this.bottom) / this.view.height;
                i += u * (this.view.offsetX / l), o = i + u * (this.view.width / l), a -= h * (this.view.offsetY / c), s = a - h * (this.view.height / c)
            }
            this.projectionMatrix.makeOrthographic(i, o, a, s, this.near, this.far)
        },
        toJSON: function (t) {
            var e = o.Object3D.prototype.toJSON.call(this, t);
            return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
        }
    }),o.PerspectiveCamera = function (t, e, n, r) {
        o.Camera.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== n ? n : .1, this.far = void 0 !== r ? r : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    },o.PerspectiveCamera.prototype = Object.assign(Object.create(o.Camera.prototype), {
        constructor: o.PerspectiveCamera,
        copy: function (t) {
            return o.Camera.prototype.copy.call(this, t), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
        },
        setFocalLength: function (t) {
            var e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * o.Math.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
        },
        getFocalLength: function () {
            var t = Math.tan(.5 * o.Math.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / t
        },
        getEffectiveFOV: function () {
            return 2 * o.Math.RAD2DEG * Math.atan(Math.tan(.5 * o.Math.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function () {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function () {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function (t, e, n, r, i, o) {
            this.aspect = t / e, this.view = {
                fullWidth: t,
                fullHeight: e,
                offsetX: n,
                offsetY: r,
                width: i,
                height: o
            }, this.updateProjectionMatrix()
        },
        clearViewOffset: function () {
            this.view = null, this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function () {
            var t = this.near, e = t * Math.tan(.5 * o.Math.DEG2RAD * this.fov) / this.zoom, n = 2 * e, r = this.aspect * n, i = -.5 * r, a = this.view;
            if (null !== a) {
                var s = a.fullWidth, l = a.fullHeight;
                i += a.offsetX * r / s, e -= a.offsetY * n / l, r *= a.width / s, n *= a.height / l
            }
            var c = this.filmOffset;
            0 !== c && (i += t * c / this.getFilmWidth()), this.projectionMatrix.makeFrustum(i, i + r, e - n, e, t, this.far)
        },
        toJSON: function (t) {
            var e = o.Object3D.prototype.toJSON.call(this, t);
            return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
        }
    }),o.StereoCamera = function () {
        this.type = "StereoCamera", this.aspect = 1, this.cameraL = new o.PerspectiveCamera, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new o.PerspectiveCamera, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
    },Object.assign(o.StereoCamera.prototype, {
        update: function () {
            var t, e, n, r, i, a = new o.Matrix4, s = new o.Matrix4;
            return function (l) {
                var c = t !== l.focus || e !== l.fov || n !== l.aspect * this.aspect || r !== l.near || i !== l.far;
                if (c) {
                    t = l.focus, e = l.fov, n = l.aspect * this.aspect, r = l.near, i = l.far;
                    var u, h, f = l.projectionMatrix.clone(), d = .032, p = d * r / t, m = r * Math.tan(o.Math.DEG2RAD * e * .5);
                    s.elements[12] = -d, a.elements[12] = d, u = -m * n + p, h = m * n + p, f.elements[0] = 2 * r / (h - u), f.elements[8] = (h + u) / (h - u), this.cameraL.projectionMatrix.copy(f), u = -m * n - p, h = m * n - p, f.elements[0] = 2 * r / (h - u), f.elements[8] = (h + u) / (h - u), this.cameraR.projectionMatrix.copy(f)
                }
                this.cameraL.matrixWorld.copy(l.matrixWorld).multiply(s), this.cameraR.matrixWorld.copy(l.matrixWorld).multiply(a)
            }
        }()
    }),o.Light = function (t, e) {
        o.Object3D.call(this), this.type = "Light", this.color = new o.Color(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
    },o.Light.prototype = Object.assign(Object.create(o.Object3D.prototype), {
        constructor: o.Light, copy: function (t) {
            return o.Object3D.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
        }, toJSON: function (t) {
            var e = o.Object3D.prototype.toJSON.call(this, t);
            return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), e
        }
    }),o.LightShadow = function (t) {
        this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new o.Vector2(512, 512), this.map = null, this.matrix = new o.Matrix4
    },Object.assign(o.LightShadow.prototype, {
        copy: function (t) {
            return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
        }, clone: function () {
            return (new this.constructor).copy(this)
        }
    }),o.AmbientLight = function (t, e) {
        o.Light.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
    },o.AmbientLight.prototype = Object.assign(Object.create(o.Light.prototype), {constructor: o.AmbientLight}),o.DirectionalLight = function (t, e) {
        o.Light.call(this, t, e), this.type = "DirectionalLight", this.position.set(0, 1, 0), this.updateMatrix(), this.target = new o.Object3D, this.shadow = new o.DirectionalLightShadow
    },o.DirectionalLight.prototype = Object.assign(Object.create(o.Light.prototype), {
        constructor: o.DirectionalLight,
        copy: function (t) {
            return o.Light.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
    }),o.DirectionalLightShadow = function (t) {
        o.LightShadow.call(this, new o.OrthographicCamera(-5, 5, 5, -5, .5, 500))
    },o.DirectionalLightShadow.prototype = Object.assign(Object.create(o.LightShadow.prototype), {constructor: o.DirectionalLightShadow}),o.HemisphereLight = function (t, e, n) {
        o.Light.call(this, t, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.set(0, 1, 0), this.updateMatrix(), this.groundColor = new o.Color(e)
    },o.HemisphereLight.prototype = Object.assign(Object.create(o.Light.prototype), {
        constructor: o.HemisphereLight,
        copy: function (t) {
            return o.Light.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
        }
    }),o.PointLight = function (t, e, n, r) {
        o.Light.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
            get: function () {
                return 4 * this.intensity * Math.PI
            }, set: function (t) {
                this.intensity = t / (4 * Math.PI)
            }
        }), this.distance = void 0 !== n ? n : 0, this.decay = void 0 !== r ? r : 1, this.shadow = new o.LightShadow(new o.PerspectiveCamera(90, 1, .5, 500))
    },o.PointLight.prototype = Object.assign(Object.create(o.Light.prototype), {
        constructor: o.PointLight,
        copy: function (t) {
            return o.Light.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
        }
    }),o.SpotLight = function (t, e, n, r, i, a) {
        o.Light.call(this, t, e), this.type = "SpotLight", this.position.set(0, 1, 0), this.updateMatrix(), this.target = new o.Object3D, Object.defineProperty(this, "power", {
            get: function () {
                return this.intensity * Math.PI
            }, set: function (t) {
                this.intensity = t / Math.PI
            }
        }), this.distance = void 0 !== n ? n : 0, this.angle = void 0 !== r ? r : Math.PI / 3, this.penumbra = void 0 !== i ? i : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new o.SpotLightShadow
    },o.SpotLight.prototype = Object.assign(Object.create(o.Light.prototype), {
        constructor: o.SpotLight,
        copy: function (t) {
            return o.Light.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
    }),o.SpotLightShadow = function () {
        o.LightShadow.call(this, new o.PerspectiveCamera(50, 1, .5, 500))
    },o.SpotLightShadow.prototype = Object.assign(Object.create(o.LightShadow.prototype), {
        constructor: o.SpotLightShadow,
        update: function (t) {
            var e = 2 * o.Math.RAD2DEG * t.angle, n = this.mapSize.width / this.mapSize.height, r = t.distance || 500, i = this.camera;
            e === i.fov && n === i.aspect && r === i.far || (i.fov = e, i.aspect = n, i.far = r, i.updateProjectionMatrix())
        }
    }),o.AudioLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager
    },Object.assign(o.AudioLoader.prototype, {
        load: function (t, e, n, r) {
            var i = new o.XHRLoader(this.manager);
            i.setResponseType("arraybuffer"), i.load(t, function (t) {
                var n = o.AudioContext;
                n.decodeAudioData(t, function (t) {
                    e(t)
                })
            }, n, r)
        }
    }),o.Cache = {
        enabled: !1, files: {}, add: function (t, e) {
            this.enabled !== !1 && (this.files[t] = e)
        }, get: function (t) {
            if (this.enabled !== !1)return this.files[t]
        }, remove: function (t) {
            delete this.files[t]
        }, clear: function () {
            this.files = {}
        }
    },o.Loader = function () {
        this.onLoadStart = function () {
        }, this.onLoadProgress = function () {
        }, this.onLoadComplete = function () {
        }
    },o.Loader.prototype = {
        constructor: o.Loader, crossOrigin: void 0, extractUrlBase: function (t) {
            var e = t.split("/");
            return 1 === e.length ? "./" : (e.pop(), e.join("/") + "/")
        }, initMaterials: function (t, e, n) {
            for (var r = [], i = 0; i < t.length; ++i)r[i] = this.createMaterial(t[i], e, n);
            return r
        }, createMaterial: function () {
            var t, e, n;
            return function (r, i, a) {
                function s(t, n, r, s, c) {
                    var u, h = i + t, f = o.Loader.Handlers.get(h);
                    null !== f ? u = f.load(h) : (e.setCrossOrigin(a), u = e.load(h)), void 0 !== n && (u.repeat.fromArray(n), 1 !== n[0] && (u.wrapS = o.RepeatWrapping), 1 !== n[1] && (u.wrapT = o.RepeatWrapping)), void 0 !== r && u.offset.fromArray(r), void 0 !== s && ("repeat" === s[0] && (u.wrapS = o.RepeatWrapping), "mirror" === s[0] && (u.wrapS = o.MirroredRepeatWrapping), "repeat" === s[1] && (u.wrapT = o.RepeatWrapping), "mirror" === s[1] && (u.wrapT = o.MirroredRepeatWrapping)), void 0 !== c && (u.anisotropy = c);
                    var d = o.Math.generateUUID();
                    return l[d] = u, d
                }

                void 0 === t && (t = new o.Color), void 0 === e && (e = new o.TextureLoader), void 0 === n && (n = new o.MaterialLoader);
                var l = {}, c = {uuid: o.Math.generateUUID(), type: "MeshLambertMaterial"};
                for (var u in r) {
                    var h = r[u];
                    switch (u) {
                        case"DbgColor":
                        case"DbgIndex":
                        case"opticalDensity":
                        case"illumination":
                            break;
                        case"DbgName":
                            c.name = h;
                            break;
                        case"blending":
                            c.blending = o[h];
                            break;
                        case"colorAmbient":
                        case"mapAmbient":
                            console.warn("THREE.Loader.createMaterial:", u, "is no longer supported.");
                            break;
                        case"colorDiffuse":
                            c.color = t.fromArray(h).getHex();
                            break;
                        case"colorSpecular":
                            c.specular = t.fromArray(h).getHex();
                            break;
                        case"colorEmissive":
                            c.emissive = t.fromArray(h).getHex();
                            break;
                        case"specularCoef":
                            c.shininess = h;
                            break;
                        case"shading":
                            "basic" === h.toLowerCase() && (c.type = "MeshBasicMaterial"), "phong" === h.toLowerCase() && (c.type = "MeshPhongMaterial"), "standard" === h.toLowerCase() && (c.type = "MeshStandardMaterial");
                            break;
                        case"mapDiffuse":
                            c.map = s(h, r.mapDiffuseRepeat, r.mapDiffuseOffset, r.mapDiffuseWrap, r.mapDiffuseAnisotropy);
                            break;
                        case"mapDiffuseRepeat":
                        case"mapDiffuseOffset":
                        case"mapDiffuseWrap":
                        case"mapDiffuseAnisotropy":
                            break;
                        case"mapEmissive":
                            c.emissiveMap = s(h, r.mapEmissiveRepeat, r.mapEmissiveOffset, r.mapEmissiveWrap, r.mapEmissiveAnisotropy);
                            break;
                        case"mapEmissiveRepeat":
                        case"mapEmissiveOffset":
                        case"mapEmissiveWrap":
                        case"mapEmissiveAnisotropy":
                            break;
                        case"mapLight":
                            c.lightMap = s(h, r.mapLightRepeat, r.mapLightOffset, r.mapLightWrap, r.mapLightAnisotropy);
                            break;
                        case"mapLightRepeat":
                        case"mapLightOffset":
                        case"mapLightWrap":
                        case"mapLightAnisotropy":
                            break;
                        case"mapAO":
                            c.aoMap = s(h, r.mapAORepeat, r.mapAOOffset, r.mapAOWrap, r.mapAOAnisotropy);
                            break;
                        case"mapAORepeat":
                        case"mapAOOffset":
                        case"mapAOWrap":
                        case"mapAOAnisotropy":
                            break;
                        case"mapBump":
                            c.bumpMap = s(h, r.mapBumpRepeat, r.mapBumpOffset, r.mapBumpWrap, r.mapBumpAnisotropy);
                            break;
                        case"mapBumpScale":
                            c.bumpScale = h;
                            break;
                        case"mapBumpRepeat":
                        case"mapBumpOffset":
                        case"mapBumpWrap":
                        case"mapBumpAnisotropy":
                            break;
                        case"mapNormal":
                            c.normalMap = s(h, r.mapNormalRepeat, r.mapNormalOffset, r.mapNormalWrap, r.mapNormalAnisotropy);
                            break;
                        case"mapNormalFactor":
                            c.normalScale = [h, h];
                            break;
                        case"mapNormalRepeat":
                        case"mapNormalOffset":
                        case"mapNormalWrap":
                        case"mapNormalAnisotropy":
                            break;
                        case"mapSpecular":
                            c.specularMap = s(h, r.mapSpecularRepeat, r.mapSpecularOffset, r.mapSpecularWrap, r.mapSpecularAnisotropy);
                            break;
                        case"mapSpecularRepeat":
                        case"mapSpecularOffset":
                        case"mapSpecularWrap":
                        case"mapSpecularAnisotropy":
                            break;
                        case"mapMetalness":
                            c.metalnessMap = s(h, r.mapMetalnessRepeat, r.mapMetalnessOffset, r.mapMetalnessWrap, r.mapMetalnessAnisotropy);
                            break;
                        case"mapMetalnessRepeat":
                        case"mapMetalnessOffset":
                        case"mapMetalnessWrap":
                        case"mapMetalnessAnisotropy":
                            break;
                        case"mapRoughness":
                            c.roughnessMap = s(h, r.mapRoughnessRepeat, r.mapRoughnessOffset, r.mapRoughnessWrap, r.mapRoughnessAnisotropy);
                            break;
                        case"mapRoughnessRepeat":
                        case"mapRoughnessOffset":
                        case"mapRoughnessWrap":
                        case"mapRoughnessAnisotropy":
                            break;
                        case"mapAlpha":
                            c.alphaMap = s(h, r.mapAlphaRepeat, r.mapAlphaOffset, r.mapAlphaWrap, r.mapAlphaAnisotropy);
                            break;
                        case"mapAlphaRepeat":
                        case"mapAlphaOffset":
                        case"mapAlphaWrap":
                        case"mapAlphaAnisotropy":
                            break;
                        case"flipSided":
                            c.side = o.BackSide;
                            break;
                        case"doubleSided":
                            c.side = o.DoubleSide;
                            break;
                        case"transparency":
                            console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), c.opacity = h;
                            break;
                        case"depthTest":
                        case"depthWrite":
                        case"colorWrite":
                        case"opacity":
                        case"reflectivity":
                        case"transparent":
                        case"visible":
                        case"wireframe":
                            c[u] = h;
                            break;
                        case"vertexColors":
                            h === !0 && (c.vertexColors = o.VertexColors), "face" === h && (c.vertexColors = o.FaceColors);
                            break;
                        default:
                            console.error("THREE.Loader.createMaterial: Unsupported", u, h)
                    }
                }
                return "MeshBasicMaterial" === c.type && delete c.emissive, "MeshPhongMaterial" !== c.type && delete c.specular, c.opacity < 1 && (c.transparent = !0), n.setTextures(l), n.parse(c)
            }
        }()
    },o.Loader.Handlers = {
        handlers: [], add: function (t, e) {
            this.handlers.push(t, e)
        }, get: function (t) {
            for (var e = this.handlers, n = 0, r = e.length; n < r; n += 2) {
                var i = e[n], o = e[n + 1];
                if (i.test(t))return o
            }
            return null
        }
    },o.XHRLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager
    },Object.assign(o.XHRLoader.prototype, {
        load: function (t, e, n, r) {
            void 0 !== this.path && (t = this.path + t);
            var i = this, a = o.Cache.get(t);
            if (void 0 !== a)return e && setTimeout(function () {
                e(a)
            }, 0), a;
            var s = new XMLHttpRequest;
            return s.overrideMimeType("text/plain"), s.open("GET", t, !0), s.addEventListener("load", function (n) {
                var a = n.target.response;
                o.Cache.add(t, a), 200 === this.status ? (e && e(a), i.manager.itemEnd(t)) : 0 === this.status ? (console.warn("THREE.XHRLoader: HTTP Status 0 received."), e && e(a), i.manager.itemEnd(t)) : (r && r(n), i.manager.itemError(t))
            }, !1), void 0 !== n && s.addEventListener("progress", function (t) {
                n(t)
            }, !1), s.addEventListener("error", function (e) {
                r && r(e), i.manager.itemError(t)
            }, !1), void 0 !== this.responseType && (s.responseType = this.responseType), void 0 !== this.withCredentials && (s.withCredentials = this.withCredentials), s.send(null), i.manager.itemStart(t), s
        }, setPath: function (t) {
            return this.path = t, this
        }, setResponseType: function (t) {
            return this.responseType = t, this
        }, setWithCredentials: function (t) {
            return this.withCredentials = t, this
        }
    }),o.FontLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager
    },Object.assign(o.FontLoader.prototype, {
        load: function (t, e, n, r) {
            var i = this, a = new o.XHRLoader(this.manager);
            a.load(t, function (t) {
                var n;
                try {
                    n = JSON.parse(t)
                } catch (e) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(t.substring(65, t.length - 2))
                }
                var r = i.parse(n);
                e && e(r)
            }, n, r)
        }, parse: function (t) {
            return new o.Font(t)
        }
    }),o.ImageLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager
    },Object.assign(o.ImageLoader.prototype, {
        load: function (t, e, n, r) {
            var i = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            if (i.onload = function () {
                  URL.revokeObjectURL(i.src), e && e(i)
              }, 0 === t.indexOf("data:")) i.src = t; else {
                var a = new o.XHRLoader(this.manager);
                a.setPath(this.path), a.setResponseType("blob"), a.load(t, function (t) {
                    i.src = URL.createObjectURL(t)
                }, n, r)
            }
            return i
        }, setCrossOrigin: function (t) {
            return this.crossOrigin = t, this
        }, setPath: function (t) {
            return this.path = t, this
        }
    }),o.JSONLoader = function (t) {
        "boolean" == typeof t && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), t = void 0), this.manager = void 0 !== t ? t : o.DefaultLoadingManager, this.withCredentials = !1
    },Object.assign(o.JSONLoader.prototype, {
        load: function (t, e, n, r) {
            var i = this, a = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : o.Loader.prototype.extractUrlBase(t), s = new o.XHRLoader(this.manager);
            s.setWithCredentials(this.withCredentials), s.load(t, function (n) {
                var r = JSON.parse(n), o = r.metadata;
                if (void 0 !== o) {
                    var s = o.type;
                    if (void 0 !== s) {
                        if ("object" === s.toLowerCase())return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.ObjectLoader instead.");
                        if ("scene" === s.toLowerCase())return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.SceneLoader instead.")
                    }
                }
                var l = i.parse(r, a);
                e(l.geometry, l.materials)
            }, n, r)
        }, setTexturePath: function (t) {
            this.texturePath = t
        }, parse: function (t, e) {
            function n(e) {
                function n(t, e) {
                    return t & 1 << e
                }

                var r, i, a, l, c, u, h, f, d, p, m, v, g, y, x, _, b, w, M, S, E, T, A, L, C, P, R, I = t.faces, F = t.vertices, O = t.normals, B = t.colors, U = 0;
                if (void 0 !== t.uvs) {
                    for (r = 0; r < t.uvs.length; r++)t.uvs[r].length && U++;
                    for (r = 0; r < U; r++)s.faceVertexUvs[r] = []
                }
                for (l = 0, c = F.length; l < c;)w = new o.Vector3, w.x = F[l++] * e, w.y = F[l++] * e, w.z = F[l++] * e, s.vertices.push(w);
                for (l = 0, c = I.length; l < c;)if (p = I[l++], m = n(p, 0), v = n(p, 1), g = n(p, 3), y = n(p, 4), x = n(p, 5), _ = n(p, 6), b = n(p, 7), m) {
                    if (S = new o.Face3, S.a = I[l], S.b = I[l + 1], S.c = I[l + 3], E = new o.Face3, E.a = I[l + 1], E.b = I[l + 2], E.c = I[l + 3], l += 4, v && (d = I[l++], S.materialIndex = d, E.materialIndex = d), a = s.faces.length, g)for (r = 0; r < U; r++)for (L = t.uvs[r], s.faceVertexUvs[r][a] = [], s.faceVertexUvs[r][a + 1] = [], i = 0; i < 4; i++)f = I[l++], P = L[2 * f], R = L[2 * f + 1], C = new o.Vector2(P, R), 2 !== i && s.faceVertexUvs[r][a].push(C), 0 !== i && s.faceVertexUvs[r][a + 1].push(C);
                    if (y && (h = 3 * I[l++], S.normal.set(O[h++], O[h++], O[h]), E.normal.copy(S.normal)), x)for (r = 0; r < 4; r++)h = 3 * I[l++], A = new o.Vector3(O[h++], O[h++], O[h]), 2 !== r && S.vertexNormals.push(A), 0 !== r && E.vertexNormals.push(A);
                    if (_ && (u = I[l++], T = B[u], S.color.setHex(T), E.color.setHex(T)), b)for (r = 0; r < 4; r++)u = I[l++], T = B[u], 2 !== r && S.vertexColors.push(new o.Color(T)), 0 !== r && E.vertexColors.push(new o.Color(T));
                    s.faces.push(S), s.faces.push(E)
                } else {
                    if (M = new o.Face3, M.a = I[l++], M.b = I[l++], M.c = I[l++], v && (d = I[l++], M.materialIndex = d), a = s.faces.length, g)for (r = 0; r < U; r++)for (L = t.uvs[r], s.faceVertexUvs[r][a] = [], i = 0; i < 3; i++)f = I[l++], P = L[2 * f], R = L[2 * f + 1], C = new o.Vector2(P, R), s.faceVertexUvs[r][a].push(C);
                    if (y && (h = 3 * I[l++], M.normal.set(O[h++], O[h++], O[h])), x)for (r = 0; r < 3; r++)h = 3 * I[l++], A = new o.Vector3(O[h++], O[h++], O[h]), M.vertexNormals.push(A);
                    if (_ && (u = I[l++], M.color.setHex(B[u])), b)for (r = 0; r < 3; r++)u = I[l++], M.vertexColors.push(new o.Color(B[u]));
                    s.faces.push(M)
                }
            }

            function r() {
                var e = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
                if (t.skinWeights)for (var n = 0, r = t.skinWeights.length; n < r; n += e) {
                    var i = t.skinWeights[n], a = e > 1 ? t.skinWeights[n + 1] : 0, l = e > 2 ? t.skinWeights[n + 2] : 0, c = e > 3 ? t.skinWeights[n + 3] : 0;
                    s.skinWeights.push(new o.Vector4(i, a, l, c))
                }
                if (t.skinIndices)for (var n = 0, r = t.skinIndices.length; n < r; n += e) {
                    var u = t.skinIndices[n], h = e > 1 ? t.skinIndices[n + 1] : 0, f = e > 2 ? t.skinIndices[n + 2] : 0, d = e > 3 ? t.skinIndices[n + 3] : 0;
                    s.skinIndices.push(new o.Vector4(u, h, f, d))
                }
                s.bones = t.bones, s.bones && s.bones.length > 0 && (s.skinWeights.length !== s.skinIndices.length || s.skinIndices.length !== s.vertices.length) && console.warn("When skinning, number of vertices (" + s.vertices.length + "), skinIndices (" + s.skinIndices.length + "), and skinWeights (" + s.skinWeights.length + ") should match.")
            }

            function i(e) {
                if (void 0 !== t.morphTargets)for (var n = 0, r = t.morphTargets.length; n < r; n++) {
                    s.morphTargets[n] = {}, s.morphTargets[n].name = t.morphTargets[n].name, s.morphTargets[n].vertices = [];
                    for (var i = s.morphTargets[n].vertices, a = t.morphTargets[n].vertices, l = 0, c = a.length; l < c; l += 3) {
                        var u = new o.Vector3;
                        u.x = a[l] * e, u.y = a[l + 1] * e, u.z = a[l + 2] * e, i.push(u)
                    }
                }
                if (void 0 !== t.morphColors && t.morphColors.length > 0) {
                    console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
                    for (var h = s.faces, f = t.morphColors[0].colors, n = 0, r = h.length; n < r; n++)h[n].color.fromArray(f, 3 * n)
                }
            }

            function a() {
                var e = [], n = [];
                void 0 !== t.animation && n.push(t.animation), void 0 !== t.animations && (t.animations.length ? n = n.concat(t.animations) : n.push(t.animations));
                for (var r = 0; r < n.length; r++) {
                    var i = o.AnimationClip.parseAnimation(n[r], s.bones);
                    i && e.push(i)
                }
                if (s.morphTargets) {
                    var a = o.AnimationClip.CreateClipsFromMorphTargetSequences(s.morphTargets, 10);
                    e = e.concat(a)
                }
                e.length > 0 && (s.animations = e)
            }

            var s = new o.Geometry, l = void 0 !== t.scale ? 1 / t.scale : 1;
            if (n(l), r(), i(l), a(), s.computeFaceNormals(), s.computeBoundingSphere(), void 0 === t.materials || 0 === t.materials.length)return {geometry: s};
            var c = o.Loader.prototype.initMaterials(t.materials, e, this.crossOrigin);
            return {geometry: s, materials: c}
        }
    }),o.LoadingManager = function (t, e, n) {
        var r = this, i = !1, o = 0, a = 0;
        this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function (t) {
            a++, i === !1 && void 0 !== r.onStart && r.onStart(t, o, a), i = !0
        }, this.itemEnd = function (t) {
            o++, void 0 !== r.onProgress && r.onProgress(t, o, a), o === a && (i = !1, void 0 !== r.onLoad && r.onLoad())
        }, this.itemError = function (t) {
            void 0 !== r.onError && r.onError(t)
        }
    },o.DefaultLoadingManager = new o.LoadingManager,o.BufferGeometryLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager
    },Object.assign(o.BufferGeometryLoader.prototype, {
        load: function (t, e, n, r) {
            var i = this, a = new o.XHRLoader(i.manager);
            a.load(t, function (t) {
                e(i.parse(JSON.parse(t)))
            }, n, r)
        }, parse: function (t) {
            var e = new o.BufferGeometry, n = t.data.index, r = {
                Int8Array: Int8Array,
                Uint8Array: Uint8Array,
                Uint8ClampedArray: Uint8ClampedArray,
                Int16Array: Int16Array,
                Uint16Array: Uint16Array,
                Int32Array: Int32Array,
                Uint32Array: Uint32Array,
                Float32Array: Float32Array,
                Float64Array: Float64Array
            };
            if (void 0 !== n) {
                var i = new r[n.type](n.array);
                e.setIndex(new o.BufferAttribute(i, 1))
            }
            var a = t.data.attributes;
            for (var s in a) {
                var l = a[s], i = new r[l.type](l.array);
                e.addAttribute(s, new o.BufferAttribute(i, l.itemSize, l.normalized))
            }
            var c = t.data.groups || t.data.drawcalls || t.data.offsets;
            if (void 0 !== c)for (var u = 0, h = c.length; u !== h; ++u) {
                var f = c[u];
                e.addGroup(f.start, f.count, f.materialIndex)
            }
            var d = t.data.boundingSphere;
            if (void 0 !== d) {
                var p = new o.Vector3;
                void 0 !== d.center && p.fromArray(d.center), e.boundingSphere = new o.Sphere(p, d.radius)
            }
            return e
        }
    }),o.MaterialLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager, this.textures = {}
    },Object.assign(o.MaterialLoader.prototype, {
        load: function (t, e, n, r) {
            var i = this, a = new o.XHRLoader(i.manager);
            a.load(t, function (t) {
                e(i.parse(JSON.parse(t)))
            }, n, r)
        }, setTextures: function (t) {
            this.textures = t
        }, getTexture: function (t) {
            var e = this.textures;
            return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t]
        }, parse: function (t) {
            var e = new o[t.type];
            if (void 0 !== t.uuid && (e.uuid = t.uuid), void 0 !== t.name && (e.name = t.name), void 0 !== t.color && e.color.setHex(t.color), void 0 !== t.roughness && (e.roughness = t.roughness), void 0 !== t.metalness && (e.metalness = t.metalness), void 0 !== t.emissive && e.emissive.setHex(t.emissive), void 0 !== t.specular && e.specular.setHex(t.specular), void 0 !== t.shininess && (e.shininess = t.shininess), void 0 !== t.uniforms && (e.uniforms = t.uniforms), void 0 !== t.vertexShader && (e.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (e.fragmentShader = t.fragmentShader), void 0 !== t.vertexColors && (e.vertexColors = t.vertexColors), void 0 !== t.shading && (e.shading = t.shading), void 0 !== t.blending && (e.blending = t.blending), void 0 !== t.side && (e.side = t.side), void 0 !== t.opacity && (e.opacity = t.opacity), void 0 !== t.transparent && (e.transparent = t.transparent), void 0 !== t.alphaTest && (e.alphaTest = t.alphaTest), void 0 !== t.depthTest && (e.depthTest = t.depthTest), void 0 !== t.depthWrite && (e.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (e.colorWrite = t.colorWrite), void 0 !== t.wireframe && (e.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (e.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.size && (e.size = t.size), void 0 !== t.sizeAttenuation && (e.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (e.map = this.getTexture(t.map)), void 0 !== t.alphaMap && (e.alphaMap = this.getTexture(t.alphaMap), e.transparent = !0), void 0 !== t.bumpMap && (e.bumpMap = this.getTexture(t.bumpMap)), void 0 !== t.bumpScale && (e.bumpScale = t.bumpScale), void 0 !== t.normalMap && (e.normalMap = this.getTexture(t.normalMap)), void 0 !== t.normalScale) {
                var n = t.normalScale;
                Array.isArray(n) === !1 && (n = [n, n]), e.normalScale = (new o.Vector2).fromArray(n)
            }
            if (void 0 !== t.displacementMap && (e.displacementMap = this.getTexture(t.displacementMap)), void 0 !== t.displacementScale && (e.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (e.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (e.roughnessMap = this.getTexture(t.roughnessMap)), void 0 !== t.metalnessMap && (e.metalnessMap = this.getTexture(t.metalnessMap)), void 0 !== t.emissiveMap && (e.emissiveMap = this.getTexture(t.emissiveMap)), void 0 !== t.emissiveIntensity && (e.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (e.specularMap = this.getTexture(t.specularMap)), void 0 !== t.envMap && (e.envMap = this.getTexture(t.envMap), e.combine = o.MultiplyOperation), void 0 !== t.reflectivity && (e.reflectivity = t.reflectivity), void 0 !== t.lightMap && (e.lightMap = this.getTexture(t.lightMap)), void 0 !== t.lightMapIntensity && (e.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (e.aoMap = this.getTexture(t.aoMap)), void 0 !== t.aoMapIntensity && (e.aoMapIntensity = t.aoMapIntensity), void 0 !== t.materials)for (var r = 0, i = t.materials.length; r < i; r++)e.materials.push(this.parse(t.materials[r]));
            return e
        }
    }),o.ObjectLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager, this.texturePath = ""
    },Object.assign(o.ObjectLoader.prototype, {
        load: function (t, e, n, r) {
            "" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
            var i = this, a = new o.XHRLoader(i.manager);
            a.load(t, function (t) {
                i.parse(JSON.parse(t), e)
            }, n, r)
        }, setTexturePath: function (t) {
            this.texturePath = t
        }, setCrossOrigin: function (t) {
            this.crossOrigin = t
        }, parse: function (t, e) {
            var n = this.parseGeometries(t.geometries), r = this.parseImages(t.images, function () {
                void 0 !== e && e(a)
            }), i = this.parseTextures(t.textures, r), o = this.parseMaterials(t.materials, i), a = this.parseObject(t.object, n, o);
            return t.animations && (a.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(a), a
        }, parseGeometries: function (t) {
            var e = {};
            if (void 0 !== t)for (var n = new o.JSONLoader, r = new o.BufferGeometryLoader, i = 0, a = t.length; i < a; i++) {
                var s, l = t[i];
                switch (l.type) {
                    case"PlaneGeometry":
                    case"PlaneBufferGeometry":
                        s = new o[l.type](l.width, l.height, l.widthSegments, l.heightSegments);
                        break;
                    case"BoxGeometry":
                    case"BoxBufferGeometry":
                    case"CubeGeometry":
                        s = new o[l.type](l.width, l.height, l.depth, l.widthSegments, l.heightSegments, l.depthSegments);
                        break;
                    case"CircleGeometry":
                    case"CircleBufferGeometry":
                        s = new o[l.type](l.radius, l.segments, l.thetaStart, l.thetaLength);
                        break;
                    case"CylinderGeometry":
                    case"CylinderBufferGeometry":
                        s = new o[l.type](l.radiusTop, l.radiusBottom, l.height, l.radialSegments, l.heightSegments, l.openEnded, l.thetaStart, l.thetaLength);
                        break;
                    case"ConeGeometry":
                    case"ConeBufferGeometry":
                        s = new o[l.type](l.radius, l.height, l.radialSegments, l.heightSegments, l.openEnded, l.thetaStart, l.thetaLength);
                        break;
                    case"SphereGeometry":
                    case"SphereBufferGeometry":
                        s = new o[l.type](l.radius, l.widthSegments, l.heightSegments, l.phiStart, l.phiLength, l.thetaStart, l.thetaLength);
                        break;
                    case"DodecahedronGeometry":
                    case"IcosahedronGeometry":
                    case"OctahedronGeometry":
                    case"TetrahedronGeometry":
                        s = new o[l.type](l.radius, l.detail);
                        break;
                    case"RingGeometry":
                    case"RingBufferGeometry":
                        s = new o[l.type](l.innerRadius, l.outerRadius, l.thetaSegments, l.phiSegments, l.thetaStart, l.thetaLength);
                        break;
                    case"TorusGeometry":
                    case"TorusBufferGeometry":
                        s = new o[l.type](l.radius, l.tube, l.radialSegments, l.tubularSegments, l.arc);
                        break;
                    case"TorusKnotGeometry":
                    case"TorusKnotBufferGeometry":
                        s = new o[l.type](l.radius, l.tube, l.tubularSegments, l.radialSegments, l.p, l.q);
                        break;
                    case"LatheGeometry":
                    case"LatheBufferGeometry":
                        s = new o[l.type](l.points, l.segments, l.phiStart, l.phiLength);
                        break;
                    case"BufferGeometry":
                        s = r.parse(l);
                        break;
                    case"Geometry":
                        s = n.parse(l.data, this.texturePath).geometry;
                        break;
                    default:
                        console.warn('THREE.ObjectLoader: Unsupported geometry type "' + l.type + '"');
                        continue
                }
                s.uuid = l.uuid, void 0 !== l.name && (s.name = l.name), e[l.uuid] = s
            }
            return e
        }, parseMaterials: function (t, e) {
            var n = {};
            if (void 0 !== t) {
                var r = new o.MaterialLoader;
                r.setTextures(e);
                for (var i = 0, a = t.length; i < a; i++) {
                    var s = r.parse(t[i]);
                    n[s.uuid] = s
                }
            }
            return n
        }, parseAnimations: function (t) {
            for (var e = [], n = 0; n < t.length; n++) {
                var r = o.AnimationClip.parse(t[n]);
                e.push(r)
            }
            return e
        }, parseImages: function (t, e) {
            function n(t) {
                return r.manager.itemStart(t), s.load(t, function () {
                    r.manager.itemEnd(t)
                })
            }

            var r = this, i = {};
            if (void 0 !== t && t.length > 0) {
                var a = new o.LoadingManager(e), s = new o.ImageLoader(a);
                s.setCrossOrigin(this.crossOrigin);
                for (var l = 0, c = t.length; l < c; l++) {
                    var u = t[l], h = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(u.url) ? u.url : r.texturePath + u.url;
                    i[u.uuid] = n(h)
                }
            }
            return i
        }, parseTextures: function (t, e) {
            function n(t) {
                return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), o[t])
            }

            var r = {};
            if (void 0 !== t)for (var i = 0, a = t.length; i < a; i++) {
                var s = t[i];
                void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                var l = new o.Texture(e[s.image]);
                l.needsUpdate = !0, l.uuid = s.uuid, void 0 !== s.name && (l.name = s.name), void 0 !== s.mapping && (l.mapping = n(s.mapping)), void 0 !== s.offset && (l.offset = new o.Vector2(s.offset[0], s.offset[1])), void 0 !== s.repeat && (l.repeat = new o.Vector2(s.repeat[0], s.repeat[1])), void 0 !== s.minFilter && (l.minFilter = n(s.minFilter)), void 0 !== s.magFilter && (l.magFilter = n(s.magFilter)), void 0 !== s.anisotropy && (l.anisotropy = s.anisotropy), Array.isArray(s.wrap) && (l.wrapS = n(s.wrap[0]), l.wrapT = n(s.wrap[1])), r[s.uuid] = l
            }
            return r
        }, parseObject: function () {
            var t = new o.Matrix4;
            return function (e, n, r) {
                function i(t) {
                    return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), n[t]
                }

                function a(t) {
                    if (void 0 !== t)return void 0 === r[t] && console.warn("THREE.ObjectLoader: Undefined material", t), r[t]
                }

                var s;
                switch (e.type) {
                    case"Scene":
                        s = new o.Scene;
                        break;
                    case"PerspectiveCamera":
                        s = new o.PerspectiveCamera(e.fov, e.aspect, e.near, e.far), void 0 !== e.focus && (s.focus = e.focus), void 0 !== e.zoom && (s.zoom = e.zoom), void 0 !== e.filmGauge && (s.filmGauge = e.filmGauge), void 0 !== e.filmOffset && (s.filmOffset = e.filmOffset), void 0 !== e.view && (s.view = Object.assign({}, e.view));
                        break;
                    case"OrthographicCamera":
                        s = new o.OrthographicCamera(e.left, e.right, e.top, e.bottom, e.near, e.far);
                        break;
                    case"AmbientLight":
                        s = new o.AmbientLight(e.color, e.intensity);
                        break;
                    case"DirectionalLight":
                        s = new o.DirectionalLight(e.color, e.intensity);
                        break;
                    case"PointLight":
                        s = new o.PointLight(e.color, e.intensity, e.distance, e.decay);
                        break;
                    case"SpotLight":
                        s = new o.SpotLight(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
                        break;
                    case"HemisphereLight":
                        s = new o.HemisphereLight(e.color, e.groundColor, e.intensity);
                        break;
                    case"Mesh":
                        var l = i(e.geometry), c = a(e.material);
                        s = l.bones && l.bones.length > 0 ? new o.SkinnedMesh(l, c) : new o.Mesh(l, c);
                        break;
                    case"LOD":
                        s = new o.LOD;
                        break;
                    case"Line":
                        s = new o.Line(i(e.geometry), a(e.material), e.mode);
                        break;
                    case"PointCloud":
                    case"Points":
                        s = new o.Points(i(e.geometry), a(e.material));
                        break;
                    case"Sprite":
                        s = new o.Sprite(a(e.material));
                        break;
                    case"Group":
                        s = new o.Group;
                        break;
                    default:
                        s = new o.Object3D
                }
                if (s.uuid = e.uuid, void 0 !== e.name && (s.name = e.name), void 0 !== e.matrix ? (t.fromArray(e.matrix), t.decompose(s.position, s.quaternion, s.scale)) : (void 0 !== e.position && s.position.fromArray(e.position), void 0 !== e.rotation && s.rotation.fromArray(e.rotation), void 0 !== e.scale && s.scale.fromArray(e.scale)), void 0 !== e.castShadow && (s.castShadow = e.castShadow), void 0 !== e.receiveShadow && (s.receiveShadow = e.receiveShadow), void 0 !== e.visible && (s.visible = e.visible), void 0 !== e.userData && (s.userData = e.userData), void 0 !== e.children)for (var u in e.children)s.add(this.parseObject(e.children[u], n, r));
                if ("LOD" === e.type)for (var h = e.levels, f = 0; f < h.length; f++) {
                    var d = h[f], u = s.getObjectByProperty("uuid", d.object);
                    void 0 !== u && s.addLevel(u, d.distance)
                }
                return s
            }
        }()
    }),o.TextureLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager
    },Object.assign(o.TextureLoader.prototype, {
        load: function (t, e, n, r) {
            var i = new o.Texture, a = new o.ImageLoader(this.manager);
            return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, function (t) {
                i.image = t, i.needsUpdate = !0, void 0 !== e && e(i)
            }, n, r), i
        }, setCrossOrigin: function (t) {
            return this.crossOrigin = t, this
        }, setPath: function (t) {
            return this.path = t, this
        }
    }),o.CubeTextureLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager
    },Object.assign(o.CubeTextureLoader.prototype, {
        load: function (t, e, n, r) {
            function i(n) {
                s.load(t[n], function (t) {
                    a.images[n] = t, l++, 6 === l && (a.needsUpdate = !0, e && e(a))
                }, void 0, r)
            }

            var a = new o.CubeTexture, s = new o.ImageLoader(this.manager);
            s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
            for (var l = 0, c = 0; c < t.length; ++c)i(c);
            return a
        }, setCrossOrigin: function (t) {
            return this.crossOrigin = t, this
        }, setPath: function (t) {
            return this.path = t, this
        }
    }),o.DataTextureLoader = o.BinaryTextureLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager, this._parser = null
    },Object.assign(o.BinaryTextureLoader.prototype, {
        load: function (t, e, n, r) {
            var i = this, a = new o.DataTexture, s = new o.XHRLoader(this.manager);
            return s.setResponseType("arraybuffer"), s.load(t, function (t) {
                var n = i._parser(t);
                n && (void 0 !== n.image ? a.image = n.image : void 0 !== n.data && (a.image.width = n.width, a.image.height = n.height, a.image.data = n.data), a.wrapS = void 0 !== n.wrapS ? n.wrapS : o.ClampToEdgeWrapping, a.wrapT = void 0 !== n.wrapT ? n.wrapT : o.ClampToEdgeWrapping, a.magFilter = void 0 !== n.magFilter ? n.magFilter : o.LinearFilter, a.minFilter = void 0 !== n.minFilter ? n.minFilter : o.LinearMipMapLinearFilter, a.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.format && (a.format = n.format), void 0 !== n.type && (a.type = n.type), void 0 !== n.mipmaps && (a.mipmaps = n.mipmaps), 1 === n.mipmapCount && (a.minFilter = o.LinearFilter), a.needsUpdate = !0, e && e(a, n))
            }, n, r), a
        }
    }),o.CompressedTextureLoader = function (t) {
        this.manager = void 0 !== t ? t : o.DefaultLoadingManager, this._parser = null
    },Object.assign(o.CompressedTextureLoader.prototype, {
        load: function (t, e, n, r) {
            function i(i) {
                c.load(t[i], function (t) {
                    var n = a._parser(t, !0);
                    s[i] = {
                        width: n.width,
                        height: n.height,
                        format: n.format,
                        mipmaps: n.mipmaps
                    }, u += 1, 6 === u && (1 === n.mipmapCount && (l.minFilter = o.LinearFilter), l.format = n.format, l.needsUpdate = !0, e && e(l))
                }, n, r)
            }

            var a = this, s = [], l = new o.CompressedTexture;
            l.image = s;
            var c = new o.XHRLoader(this.manager);
            if (c.setPath(this.path), c.setResponseType("arraybuffer"), Array.isArray(t))for (var u = 0, h = 0, f = t.length; h < f; ++h)i(h); else c.load(t, function (t) {
                var n = a._parser(t, !0);
                if (n.isCubemap)for (var r = n.mipmaps.length / n.mipmapCount, i = 0; i < r; i++) {
                    s[i] = {mipmaps: []};
                    for (var c = 0; c < n.mipmapCount; c++)s[i].mipmaps.push(n.mipmaps[i * n.mipmapCount + c]), s[i].format = n.format, s[i].width = n.width, s[i].height = n.height
                } else l.image.width = n.width, l.image.height = n.height, l.mipmaps = n.mipmaps;
                1 === n.mipmapCount && (l.minFilter = o.LinearFilter), l.format = n.format, l.needsUpdate = !0, e && e(l)
            }, n, r);
            return l
        }, setPath: function (t) {
            return this.path = t, this
        }
    }),o.Material = function () {
        Object.defineProperty(this, "id", {value: o.MaterialIdCount++}), this.uuid = o.Math.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = o.NormalBlending, this.side = o.FrontSide, this.shading = o.SmoothShading, this.vertexColors = o.NoColors, this.opacity = 1, this.transparent = !1, this.blendSrc = o.SrcAlphaFactor, this.blendDst = o.OneMinusSrcAlphaFactor, this.blendEquation = o.AddEquation, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = o.LessEqualDepth, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipShadows = !1, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this._needsUpdate = !0
    },o.Material.prototype = {
        constructor: o.Material, get needsUpdate() {
            return this._needsUpdate
        }, set needsUpdate(t) {
            t === !0 && this.update(), this._needsUpdate = t
        }, setValues: function (t) {
            if (void 0 !== t)for (var e in t) {
                var n = t[e];
                if (void 0 !== n) {
                    var r = this[e];
                    void 0 !== r ? r instanceof o.Color ? r.set(n) : r instanceof o.Vector3 && n instanceof o.Vector3 ? r.copy(n) : "overdraw" === e ? this[e] = Number(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                } else console.warn("THREE.Material: '" + e + "' parameter is undefined.")
            }
        }, toJSON: function (t) {
            function e(t) {
                var e = [];
                for (var n in t) {
                    var r = t[n];
                    delete r.metadata, e.push(r)
                }
                return e
            }

            var n = void 0 === t;
            n && (t = {textures: {}, images: {}});
            var r = {metadata: {version: 4.4, type: "Material", generator: "Material.toJSON"}};
            if (r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), this.color instanceof o.Color && (r.color = this.color.getHex()), void 0 !== this.roughness && (r.roughness = this.roughness), void 0 !== this.metalness && (r.metalness = this.metalness), this.emissive instanceof o.Color && (r.emissive = this.emissive.getHex()), this.specular instanceof o.Color && (r.specular = this.specular.getHex()), void 0 !== this.shininess && (r.shininess = this.shininess), this.map instanceof o.Texture && (r.map = this.map.toJSON(t).uuid), this.alphaMap instanceof o.Texture && (r.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap instanceof o.Texture && (r.lightMap = this.lightMap.toJSON(t).uuid), this.bumpMap instanceof o.Texture && (r.bumpMap = this.bumpMap.toJSON(t).uuid, r.bumpScale = this.bumpScale), this.normalMap instanceof o.Texture && (r.normalMap = this.normalMap.toJSON(t).uuid, r.normalScale = this.normalScale.toArray()), this.displacementMap instanceof o.Texture && (r.displacementMap = this.displacementMap.toJSON(t).uuid, r.displacementScale = this.displacementScale, r.displacementBias = this.displacementBias), this.roughnessMap instanceof o.Texture && (r.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap instanceof o.Texture && (r.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap instanceof o.Texture && (r.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap instanceof o.Texture && (r.specularMap = this.specularMap.toJSON(t).uuid), this.envMap instanceof o.Texture && (r.envMap = this.envMap.toJSON(t).uuid, r.reflectivity = this.reflectivity), void 0 !== this.size && (r.size = this.size), void 0 !== this.sizeAttenuation && (r.sizeAttenuation = this.sizeAttenuation), this.blending !== o.NormalBlending && (r.blending = this.blending), this.shading !== o.SmoothShading && (r.shading = this.shading), this.side !== o.FrontSide && (r.side = this.side), this.vertexColors !== o.NoColors && (r.vertexColors = this.vertexColors), this.opacity < 1 && (r.opacity = this.opacity), this.transparent === !0 && (r.transparent = this.transparent), this.alphaTest > 0 && (r.alphaTest = this.alphaTest), this.premultipliedAlpha === !0 && (r.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (r.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (r.wireframeLinewidth = this.wireframeLinewidth), n) {
                var i = e(t.textures), a = e(t.images);
                i.length > 0 && (r.textures = i), a.length > 0 && (r.images = a)
            }
            return r
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.shading = t.shading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.overdraw = t.overdraw, this.visible = t.visible, this.clipShadows = t.clipShadows;
            var e = t.clippingPlanes, n = null;
            if (null !== e) {
                var r = e.length;
                n = new Array(r);
                for (var i = 0; i !== r; ++i)n[i] = e[i].clone()
            }
            return this.clippingPlanes = n, this
        }, update: function () {
            this.dispatchEvent({type: "update"})
        }, dispose: function () {
            this.dispatchEvent({type: "dispose"})
        }
    },Object.assign(o.Material.prototype, o.EventDispatcher.prototype),o.MaterialIdCount = 0,o.LineBasicMaterial = function (t) {
        o.Material.call(this), this.type = "LineBasicMaterial", this.color = new o.Color(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(t)
    },o.LineBasicMaterial.prototype = Object.create(o.Material.prototype),o.LineBasicMaterial.prototype.constructor = o.LineBasicMaterial,o.LineBasicMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
    },o.LineDashedMaterial = function (t) {
        o.Material.call(this), this.type = "LineDashedMaterial", this.color = new o.Color(16777215), this.linewidth = 1, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.lights = !1, this.setValues(t)
    },o.LineDashedMaterial.prototype = Object.create(o.Material.prototype),o.LineDashedMaterial.prototype.constructor = o.LineDashedMaterial,o.LineDashedMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
    },o.MeshBasicMaterial = function (t) {
        o.Material.call(this), this.type = "MeshBasicMaterial", this.color = new o.Color(16777215), this.map = null, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = o.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(t)
    },o.MeshBasicMaterial.prototype = Object.create(o.Material.prototype),o.MeshBasicMaterial.prototype.constructor = o.MeshBasicMaterial,o.MeshBasicMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
    },o.MeshDepthMaterial = function (t) {
        o.Material.call(this), this.type = "MeshDepthMaterial", this.depthPacking = o.BasicDepthPacking, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(t)
    },o.MeshDepthMaterial.prototype = Object.create(o.Material.prototype),o.MeshDepthMaterial.prototype.constructor = o.MeshDepthMaterial,o.MeshDepthMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
    },o.MeshLambertMaterial = function (t) {
        o.Material.call(this), this.type = "MeshLambertMaterial", this.color = new o.Color(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new o.Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = o.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    },o.MeshLambertMaterial.prototype = Object.create(o.Material.prototype),o.MeshLambertMaterial.prototype.constructor = o.MeshLambertMaterial,o.MeshLambertMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    },o.MeshNormalMaterial = function (t) {
        o.Material.call(this, t), this.type = "MeshNormalMaterial", this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.morphTargets = !1, this.setValues(t)
    },o.MeshNormalMaterial.prototype = Object.create(o.Material.prototype),o.MeshNormalMaterial.prototype.constructor = o.MeshNormalMaterial,o.MeshNormalMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
    },o.MeshPhongMaterial = function (t) {
        o.Material.call(this), this.type = "MeshPhongMaterial", this.color = new o.Color(16777215), this.specular = new o.Color(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new o.Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new o.Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = o.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    },o.MeshPhongMaterial.prototype = Object.create(o.Material.prototype),o.MeshPhongMaterial.prototype.constructor = o.MeshPhongMaterial,o.MeshPhongMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    },o.MeshStandardMaterial = function (t) {
        o.Material.call(this), this.defines = {STANDARD: ""}, this.type = "MeshStandardMaterial", this.color = new o.Color(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new o.Color(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new o.Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
    },o.MeshStandardMaterial.prototype = Object.create(o.Material.prototype),o.MeshStandardMaterial.prototype.constructor = o.MeshStandardMaterial,o.MeshStandardMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.defines = {STANDARD: ""}, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    },o.MeshPhysicalMaterial = function (t) {
        o.MeshStandardMaterial.call(this), this.defines = {PHYSICAL: ""}, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(t)
    },o.MeshPhysicalMaterial.prototype = Object.create(o.MeshStandardMaterial.prototype),o.MeshPhysicalMaterial.prototype.constructor = o.MeshPhysicalMaterial,o.MeshPhysicalMaterial.prototype.copy = function (t) {
        return o.MeshStandardMaterial.prototype.copy.call(this, t), this.defines = {PHYSICAL: ""}, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t.clearCoatRoughness, this
    },o.MultiMaterial = function (t) {
        this.uuid = o.Math.generateUUID(), this.type = "MultiMaterial", this.materials = t instanceof Array ? t : [], this.visible = !0
    },o.MultiMaterial.prototype = {
        constructor: o.MultiMaterial, toJSON: function (t) {
            for (var e = {
                metadata: {version: 4.2, type: "material", generator: "MaterialExporter"},
                uuid: this.uuid,
                type: this.type,
                materials: []
            }, n = this.materials, r = 0, i = n.length; r < i; r++) {
                var o = n[r].toJSON(t);
                delete o.metadata, e.materials.push(o)
            }
            return e.visible = this.visible, e
        }, clone: function () {
            for (var t = new this.constructor, e = 0; e < this.materials.length; e++)t.materials.push(this.materials[e].clone());
            return t.visible = this.visible, t
        }
    },o.PointsMaterial = function (t) {
        o.Material.call(this), this.type = "PointsMaterial", this.color = new o.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.lights = !1, this.setValues(t)
    },o.PointsMaterial.prototype = Object.create(o.Material.prototype),o.PointsMaterial.prototype.constructor = o.PointsMaterial,o.PointsMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this
    },o.ShaderMaterial = function (t) {
        o.Material.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
    },o.ShaderMaterial.prototype = Object.create(o.Material.prototype),o.ShaderMaterial.prototype.constructor = o.ShaderMaterial,o.ShaderMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = o.UniformsUtils.clone(t.uniforms), this.defines = t.defines, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
    },o.ShaderMaterial.prototype.toJSON = function (t) {
        var e = o.Material.prototype.toJSON.call(this, t);
        return e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e
    },o.RawShaderMaterial = function (t) {
        o.ShaderMaterial.call(this, t), this.type = "RawShaderMaterial"
    },o.RawShaderMaterial.prototype = Object.create(o.ShaderMaterial.prototype),o.RawShaderMaterial.prototype.constructor = o.RawShaderMaterial,o.SpriteMaterial = function (t) {
        o.Material.call(this), this.type = "SpriteMaterial", this.color = new o.Color(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.lights = !1, this.setValues(t)
    },o.SpriteMaterial.prototype = Object.create(o.Material.prototype),o.SpriteMaterial.prototype.constructor = o.SpriteMaterial,o.SpriteMaterial.prototype.copy = function (t) {
        return o.Material.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this
    },o.ShadowMaterial = function () {
        o.ShaderMaterial.call(this, {
            uniforms: o.UniformsUtils.merge([o.UniformsLib.lights, {opacity: {value: 1}}]),
            vertexShader: o.ShaderChunk.shadow_vert,
            fragmentShader: o.ShaderChunk.shadow_frag
        }), this.lights = !0, this.transparent = !0, Object.defineProperties(this, {
            opacity: {
                enumerable: !0,
                get: function () {
                    return this.uniforms.opacity.value
                },
                set: function (t) {
                    this.uniforms.opacity.value = t
                }
            }
        })
    },o.ShadowMaterial.prototype = Object.create(o.ShaderMaterial.prototype),o.ShadowMaterial.prototype.constructor = o.ShadowMaterial,o.Texture = function (t, e, n, r, i, a, s, l, c, u) {
        Object.defineProperty(this, "id", {value: o.TextureIdCount++}), this.uuid = o.Math.generateUUID(), this.name = "", this.sourceFile = "", this.image = void 0 !== t ? t : o.Texture.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : o.Texture.DEFAULT_MAPPING, this.wrapS = void 0 !== n ? n : o.ClampToEdgeWrapping, this.wrapT = void 0 !== r ? r : o.ClampToEdgeWrapping, this.magFilter = void 0 !== i ? i : o.LinearFilter, this.minFilter = void 0 !== a ? a : o.LinearMipMapLinearFilter, this.anisotropy = void 0 !== c ? c : 1, this.format = void 0 !== s ? s : o.RGBAFormat, this.type = void 0 !== l ? l : o.UnsignedByteType, this.offset = new o.Vector2(0, 0), this.repeat = new o.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== u ? u : o.LinearEncoding, this.version = 0, this.onUpdate = null
    },o.Texture.DEFAULT_IMAGE = void 0,o.Texture.DEFAULT_MAPPING = o.UVMapping,o.Texture.prototype = {
        constructor: o.Texture,
        set needsUpdate(t) {
            t === !0 && this.version++
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            return this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
        },
        toJSON: function (t) {
            function e(t) {
                var e;
                return void 0 !== t.toDataURL ? e = t : (e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0, t.width, t.height)), e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
            }

            if (void 0 !== t.textures[this.uuid])return t.textures[this.uuid];
            var n = {
                metadata: {version: 4.4, type: "Texture", generator: "Texture.toJSON"},
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                wrap: [this.wrapS, this.wrapT],
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy
            };
            if (void 0 !== this.image) {
                var r = this.image;
                void 0 === r.uuid && (r.uuid = o.Math.generateUUID()), void 0 === t.images[r.uuid] && (t.images[r.uuid] = {
                    uuid: r.uuid,
                    url: e(r)
                }), n.image = r.uuid
            }
            return t.textures[this.uuid] = n, n
        },
        dispose: function () {
            this.dispatchEvent({type: "dispose"})
        },
        transformUv: function (t) {
            if (this.mapping === o.UVMapping) {
                if (t.multiply(this.repeat), t.add(this.offset), t.x < 0 || t.x > 1)switch (this.wrapS) {
                    case o.RepeatWrapping:
                        t.x = t.x - Math.floor(t.x);
                        break;
                    case o.ClampToEdgeWrapping:
                        t.x = t.x < 0 ? 0 : 1;
                        break;
                    case o.MirroredRepeatWrapping:
                        1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                }
                if (t.y < 0 || t.y > 1)switch (this.wrapT) {
                    case o.RepeatWrapping:
                        t.y = t.y - Math.floor(t.y);
                        break;
                    case o.ClampToEdgeWrapping:
                        t.y = t.y < 0 ? 0 : 1;
                        break;
                    case o.MirroredRepeatWrapping:
                        1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                }
                this.flipY && (t.y = 1 - t.y)
            }
        }
    },Object.assign(o.Texture.prototype, o.EventDispatcher.prototype),o.TextureIdCount = 0,o.DepthTexture = function (t, e, n, r, i, a, s, l, c) {
        o.Texture.call(this, null, r, i, a, s, l, o.DepthFormat, n, c), this.image = {
            width: t,
            height: e
        }, this.type = void 0 !== n ? n : o.UnsignedShortType, this.magFilter = void 0 !== s ? s : o.NearestFilter, this.minFilter = void 0 !== l ? l : o.NearestFilter, this.flipY = !1, this.generateMipmaps = !1
    },o.DepthTexture.prototype = Object.create(o.Texture.prototype),o.DepthTexture.prototype.constructor = o.DepthTexture,o.CanvasTexture = function (t, e, n, r, i, a, s, l, c) {
        o.Texture.call(this, t, e, n, r, i, a, s, l, c), this.needsUpdate = !0
    },o.CanvasTexture.prototype = Object.create(o.Texture.prototype),o.CanvasTexture.prototype.constructor = o.CanvasTexture,o.CubeTexture = function (t, e, n, r, i, a, s, l, c, u) {
        t = void 0 !== t ? t : [], e = void 0 !== e ? e : o.CubeReflectionMapping, o.Texture.call(this, t, e, n, r, i, a, s, l, c, u), this.flipY = !1
    },o.CubeTexture.prototype = Object.create(o.Texture.prototype),o.CubeTexture.prototype.constructor = o.CubeTexture,Object.defineProperty(o.CubeTexture.prototype, "images", {
        get: function () {
            return this.image
        }, set: function (t) {
            this.image = t
        }
    }),o.CompressedTexture = function (t, e, n, r, i, a, s, l, c, u, h, f) {
        o.Texture.call(this, null, a, s, l, c, u, r, i, h, f), this.image = {
            width: e,
            height: n
        }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
    },o.CompressedTexture.prototype = Object.create(o.Texture.prototype),o.CompressedTexture.prototype.constructor = o.CompressedTexture,o.DataTexture = function (t, e, n, r, i, a, s, l, c, u, h, f) {
        o.Texture.call(this, null, a, s, l, c, u, r, i, h, f), this.image = {
            data: t,
            width: e,
            height: n
        }, this.magFilter = void 0 !== c ? c : o.NearestFilter, this.minFilter = void 0 !== u ? u : o.NearestFilter, this.flipY = !1, this.generateMipmaps = !1
    },o.DataTexture.prototype = Object.create(o.Texture.prototype),o.DataTexture.prototype.constructor = o.DataTexture,o.VideoTexture = function (t, e, n, r, i, a, s, l, c) {
        function u() {
            requestAnimationFrame(u), t.readyState >= t.HAVE_CURRENT_DATA && (h.needsUpdate = !0)
        }

        o.Texture.call(this, t, e, n, r, i, a, s, l, c), this.generateMipmaps = !1;
        var h = this;
        u()
    },o.VideoTexture.prototype = Object.create(o.Texture.prototype),o.VideoTexture.prototype.constructor = o.VideoTexture,o.Group = function () {
        o.Object3D.call(this), this.type = "Group"
    },o.Group.prototype = Object.assign(Object.create(o.Object3D.prototype), {constructor: o.Group}),o.Points = function (t, e) {
        o.Object3D.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new o.BufferGeometry, this.material = void 0 !== e ? e : new o.PointsMaterial({color: 16777215 * Math.random()})
    },o.Points.prototype = Object.assign(Object.create(o.Object3D.prototype), {
        constructor: o.Points, raycast: function () {
            var t = new o.Matrix4, e = new o.Ray, n = new o.Sphere;
            return function (r, i) {
                function a(t, n) {
                    var o = e.distanceSqToPoint(t);
                    if (o < f) {
                        var a = e.closestPointToPoint(t);
                        a.applyMatrix4(c);
                        var l = r.ray.origin.distanceTo(a);
                        if (l < r.near || l > r.far)return;
                        i.push({
                            distance: l,
                            distanceToRay: Math.sqrt(o),
                            point: a.clone(),
                            index: n,
                            face: null,
                            object: s
                        })
                    }
                }

                var s = this, l = this.geometry, c = this.matrixWorld, u = r.params.Points.threshold;
                if (null === l.boundingSphere && l.computeBoundingSphere(), n.copy(l.boundingSphere), n.applyMatrix4(c), r.ray.intersectsSphere(n) !== !1) {
                    t.getInverse(c), e.copy(r.ray).applyMatrix4(t);
                    var h = u / ((this.scale.x + this.scale.y + this.scale.z) / 3), f = h * h, d = new o.Vector3;
                    if (l instanceof o.BufferGeometry) {
                        var p = l.index, m = l.attributes, v = m.position.array;
                        if (null !== p)for (var g = p.array, y = 0, x = g.length; y < x; y++) {
                            var _ = g[y];
                            d.fromArray(v, 3 * _), a(d, _)
                        } else for (var y = 0, b = v.length / 3; y < b; y++)d.fromArray(v, 3 * y), a(d, y)
                    } else for (var w = l.vertices, y = 0, b = w.length; y < b; y++)a(w[y], y)
                }
            }
        }(), clone: function () {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }),o.Line = function (t, e, n) {
        return 1 === n ? (console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new o.LineSegments(t, e)) : (o.Object3D.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new o.BufferGeometry, void(this.material = void 0 !== e ? e : new o.LineBasicMaterial({color: 16777215 * Math.random()})))
    },o.Line.prototype = Object.assign(Object.create(o.Object3D.prototype), {
        constructor: o.Line, raycast: function () {
            var t = new o.Matrix4, e = new o.Ray, n = new o.Sphere;
            return function (r, i) {
                var a = r.linePrecision, s = a * a, l = this.geometry, c = this.matrixWorld;
                if (null === l.boundingSphere && l.computeBoundingSphere(), n.copy(l.boundingSphere), n.applyMatrix4(c), r.ray.intersectsSphere(n) !== !1) {
                    t.getInverse(c), e.copy(r.ray).applyMatrix4(t);
                    var u = new o.Vector3, h = new o.Vector3, f = new o.Vector3, d = new o.Vector3, p = this instanceof o.LineSegments ? 2 : 1;
                    if (l instanceof o.BufferGeometry) {
                        var m = l.index, v = l.attributes, g = v.position.array;
                        if (null !== m)for (var y = m.array, x = 0, _ = y.length - 1; x < _; x += p) {
                            var b = y[x], w = y[x + 1];
                            u.fromArray(g, 3 * b), h.fromArray(g, 3 * w);
                            var M = e.distanceSqToSegment(u, h, d, f);
                            if (!(M > s)) {
                                d.applyMatrix4(this.matrixWorld);
                                var S = r.ray.origin.distanceTo(d);
                                S < r.near || S > r.far || i.push({
                                    distance: S,
                                    point: f.clone().applyMatrix4(this.matrixWorld),
                                    index: x,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        } else for (var x = 0, _ = g.length / 3 - 1; x < _; x += p) {
                            u.fromArray(g, 3 * x), h.fromArray(g, 3 * x + 3);
                            var M = e.distanceSqToSegment(u, h, d, f);
                            if (!(M > s)) {
                                d.applyMatrix4(this.matrixWorld);
                                var S = r.ray.origin.distanceTo(d);
                                S < r.near || S > r.far || i.push({
                                    distance: S,
                                    point: f.clone().applyMatrix4(this.matrixWorld),
                                    index: x,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                    } else if (l instanceof o.Geometry)for (var E = l.vertices, T = E.length, x = 0; x < T - 1; x += p) {
                        var M = e.distanceSqToSegment(E[x], E[x + 1], d, f);
                        if (!(M > s)) {
                            d.applyMatrix4(this.matrixWorld);
                            var S = r.ray.origin.distanceTo(d);
                            S < r.near || S > r.far || i.push({
                                distance: S,
                                point: f.clone().applyMatrix4(this.matrixWorld),
                                index: x,
                                face: null,
                                faceIndex: null,
                                object: this
                            })
                        }
                    }
                }
            }
        }(), clone: function () {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }),o.LineSegments = function (t, e) {
        o.Line.call(this, t, e), this.type = "LineSegments"
    },o.LineSegments.prototype = Object.assign(Object.create(o.Line.prototype), {constructor: o.LineSegments}),o.Mesh = function (t, e) {
        o.Object3D.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new o.BufferGeometry, this.material = void 0 !== e ? e : new o.MeshBasicMaterial({color: 16777215 * Math.random()}), this.drawMode = o.TrianglesDrawMode, this.updateMorphTargets()
    },o.Mesh.prototype = Object.assign(Object.create(o.Object3D.prototype), {
        constructor: o.Mesh,
        setDrawMode: function (t) {
            this.drawMode = t
        },
        copy: function (t) {
            return o.Object3D.prototype.copy.call(this, t), this.drawMode = t.drawMode, this
        },
        updateMorphTargets: function () {
            if (void 0 !== this.geometry.morphTargets && this.geometry.morphTargets.length > 0) {
                this.morphTargetBase = -1, this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (var t = 0, e = this.geometry.morphTargets.length; t < e; t++)this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[t].name] = t
            }
        },
        getMorphTargetIndexByName: function (t) {
            return void 0 !== this.morphTargetDictionary[t] ? this.morphTargetDictionary[t] : (console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + t + " does not exist. Returning 0."), 0)
        },
        raycast: function () {
            function t(t, e, n, r, i, a, s) {
                return o.Triangle.barycoordFromPoint(t, e, n, r, v), i.multiplyScalar(v.x), a.multiplyScalar(v.y), s.multiplyScalar(v.z), i.add(a).add(s), i.clone()
            }

            function e(t, e, n, r, i, a, s) {
                var l, c = t.material;
                if (l = c.side === o.BackSide ? n.intersectTriangle(a, i, r, !0, s) : n.intersectTriangle(r, i, a, c.side !== o.DoubleSide, s), null === l)return null;
                y.copy(s), y.applyMatrix4(t.matrixWorld);
                var u = e.ray.origin.distanceTo(y);
                return u < e.near || u > e.far ? null : {distance: u, point: y.clone(), object: t}
            }

            function n(n, r, i, a, u, h, f, v) {
                s.fromArray(a, 3 * h), l.fromArray(a, 3 * f), c.fromArray(a, 3 * v);
                var y = e(n, r, i, s, l, c, g);
                return y && (u && (d.fromArray(u, 2 * h), p.fromArray(u, 2 * f), m.fromArray(u, 2 * v), y.uv = t(g, s, l, c, d, p, m)), y.face = new o.Face3(h, f, v, o.Triangle.normal(s, l, c)), y.faceIndex = h), y
            }

            var r = new o.Matrix4, i = new o.Ray, a = new o.Sphere, s = new o.Vector3, l = new o.Vector3, c = new o.Vector3, u = new o.Vector3, h = new o.Vector3, f = new o.Vector3, d = new o.Vector2, p = new o.Vector2, m = new o.Vector2, v = new o.Vector3, g = new o.Vector3, y = new o.Vector3;
            return function (v, y) {
                var x = this.geometry, _ = this.material, b = this.matrixWorld;
                if (void 0 !== _ && (null === x.boundingSphere && x.computeBoundingSphere(), a.copy(x.boundingSphere), a.applyMatrix4(b), v.ray.intersectsSphere(a) !== !1 && (r.getInverse(b), i.copy(v.ray).applyMatrix4(r), null === x.boundingBox || i.intersectsBox(x.boundingBox) !== !1))) {
                    var w, M;
                    if (x instanceof o.BufferGeometry) {
                        var S, E, T, A = x.index, L = x.attributes, C = L.position.array;
                        if (void 0 !== L.uv && (w = L.uv.array), null !== A)for (var P = A.array, R = 0, I = P.length; R < I; R += 3)S = P[R], E = P[R + 1], T = P[R + 2], M = n(this, v, i, C, w, S, E, T), M && (M.faceIndex = Math.floor(R / 3), y.push(M)); else for (var R = 0, I = C.length; R < I; R += 9)S = R / 3, E = S + 1, T = S + 2, M = n(this, v, i, C, w, S, E, T), M && (M.index = S, y.push(M))
                    } else if (x instanceof o.Geometry) {
                        var F, O, B, U = _ instanceof o.MultiMaterial, D = U === !0 ? _.materials : null, N = x.vertices, z = x.faces, G = x.faceVertexUvs[0];
                        G.length > 0 && (w = G);
                        for (var V = 0, k = z.length; V < k; V++) {
                            var j = z[V], H = U === !0 ? D[j.materialIndex] : _;
                            if (void 0 !== H) {
                                if (F = N[j.a], O = N[j.b], B = N[j.c], H.morphTargets === !0) {
                                    var W = x.morphTargets, X = this.morphTargetInfluences;
                                    s.set(0, 0, 0), l.set(0, 0, 0), c.set(0, 0, 0);
                                    for (var q = 0, Y = W.length; q < Y; q++) {
                                        var Z = X[q];
                                        if (0 !== Z) {
                                            var K = W[q].vertices;
                                            s.addScaledVector(u.subVectors(K[j.a], F), Z), l.addScaledVector(h.subVectors(K[j.b], O), Z), c.addScaledVector(f.subVectors(K[j.c], B), Z)
                                        }
                                    }
                                    s.add(F), l.add(O), c.add(B), F = s, O = l, B = c
                                }
                                if (M = e(this, v, i, F, O, B, g)) {
                                    if (w) {
                                        var Q = w[V];
                                        d.copy(Q[0]), p.copy(Q[1]), m.copy(Q[2]), M.uv = t(g, F, O, B, d, p, m)
                                    }
                                    M.face = j, M.faceIndex = V, y.push(M)
                                }
                            }
                        }
                    }
                }
            }
        }(),
        clone: function () {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }),o.Bone = function (t) {
        o.Object3D.call(this), this.type = "Bone", this.skin = t
    },o.Bone.prototype = Object.assign(Object.create(o.Object3D.prototype), {
        constructor: o.Bone, copy: function (t) {
            return o.Object3D.prototype.copy.call(this, t), this.skin = t.skin, this
        }
    }),o.Skeleton = function (t, e, n) {
        if (this.useVertexTexture = void 0 === n || n, this.identityMatrix = new o.Matrix4, t = t || [], this.bones = t.slice(0), this.useVertexTexture) {
            var r = Math.sqrt(4 * this.bones.length);
            r = o.Math.nextPowerOfTwo(Math.ceil(r)), r = Math.max(r, 4), this.boneTextureWidth = r, this.boneTextureHeight = r, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new o.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, o.RGBAFormat, o.FloatType)
        } else this.boneMatrices = new Float32Array(16 * this.bones.length);
        if (void 0 === e) this.calculateInverses(); else if (this.bones.length === e.length) this.boneInverses = e.slice(0); else {
            console.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [];
            for (var i = 0, a = this.bones.length; i < a; i++)this.boneInverses.push(new o.Matrix4)
        }
    },Object.assign(o.Skeleton.prototype, {
        calculateInverses: function () {
            this.boneInverses = [];
            for (var t = 0, e = this.bones.length; t < e; t++) {
                var n = new o.Matrix4;
                this.bones[t] && n.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(n)
            }
        }, pose: function () {
            for (var t, e = 0, n = this.bones.length; e < n; e++)t = this.bones[e], t && t.matrixWorld.getInverse(this.boneInverses[e]);
            for (var e = 0, n = this.bones.length; e < n; e++)t = this.bones[e], t && (t.parent instanceof o.Bone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
        }, update: function () {
            var t = new o.Matrix4;
            return function () {
                for (var e = 0, n = this.bones.length; e < n; e++) {
                    var r = this.bones[e] ? this.bones[e].matrixWorld : this.identityMatrix;
                    t.multiplyMatrices(r, this.boneInverses[e]), t.toArray(this.boneMatrices, 16 * e)
                }
                this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
            }
        }(), clone: function () {
            return new o.Skeleton(this.bones, this.boneInverses, this.useVertexTexture)
        }
    }),o.SkinnedMesh = function (t, e, n) {
        o.Mesh.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new o.Matrix4, this.bindMatrixInverse = new o.Matrix4;
        var r = [];
        if (this.geometry && void 0 !== this.geometry.bones) {
            for (var i, a, s = 0, l = this.geometry.bones.length; s < l; ++s)a = this.geometry.bones[s], i = new o.Bone(this), r.push(i), i.name = a.name, i.position.fromArray(a.pos), i.quaternion.fromArray(a.rotq), void 0 !== a.scl && i.scale.fromArray(a.scl);
            for (var s = 0, l = this.geometry.bones.length; s < l; ++s)a = this.geometry.bones[s], a.parent !== -1 && null !== a.parent && void 0 !== r[a.parent] ? r[a.parent].add(r[s]) : this.add(r[s])
        }
        this.normalizeSkinWeights(), this.updateMatrixWorld(!0), this.bind(new o.Skeleton(r, void 0, n), this.matrixWorld)
    },o.SkinnedMesh.prototype = Object.assign(Object.create(o.Mesh.prototype), {
        constructor: o.SkinnedMesh,
        bind: function (t, e) {
            this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
        },
        pose: function () {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function () {
            if (this.geometry instanceof o.Geometry)for (var t = 0; t < this.geometry.skinWeights.length; t++) {
                var e = this.geometry.skinWeights[t], n = 1 / e.lengthManhattan();
                n !== 1 / 0 ? e.multiplyScalar(n) : e.set(1, 0, 0, 0)
            } else if (this.geometry instanceof o.BufferGeometry)for (var r = new o.Vector4, i = this.geometry.attributes.skinWeight, t = 0; t < i.count; t++) {
                r.x = i.getX(t), r.y = i.getY(t), r.z = i.getZ(t), r.w = i.getW(t);
                var n = 1 / r.lengthManhattan();
                n !== 1 / 0 ? r.multiplyScalar(n) : r.set(1, 0, 0, 0), i.setXYZW(t, r.x, r.y, r.z, r.w)
            }
        },
        updateMatrixWorld: function (t) {
            o.Mesh.prototype.updateMatrixWorld.call(this, !0), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
        },
        clone: function () {
            return new this.constructor(this.geometry, this.material, this.skeleton.useVertexTexture).copy(this)
        }
    }),o.LOD = function () {
        o.Object3D.call(this), this.type = "LOD", Object.defineProperties(this, {levels: {enumerable: !0, value: []}})
    },o.LOD.prototype = Object.assign(Object.create(o.Object3D.prototype), {
        constructor: o.LOD, copy: function (t) {
            o.Object3D.prototype.copy.call(this, t, !1);
            for (var e = t.levels, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                this.addLevel(i.object.clone(), i.distance)
            }
            return this
        }, addLevel: function (t, e) {
            void 0 === e && (e = 0), e = Math.abs(e);
            for (var n = this.levels, r = 0; r < n.length && !(e < n[r].distance); r++);
            n.splice(r, 0, {distance: e, object: t}), this.add(t)
        }, getObjectForDistance: function (t) {
            for (var e = this.levels, n = 1, r = e.length; n < r && !(t < e[n].distance); n++);
            return e[n - 1].object
        }, raycast: function () {
            var t = new o.Vector3;
            return function (e, n) {
                t.setFromMatrixPosition(this.matrixWorld);
                var r = e.ray.origin.distanceTo(t);
                this.getObjectForDistance(r).raycast(e, n)
            }
        }(), update: function () {
            var t = new o.Vector3, e = new o.Vector3;
            return function (n) {
                var r = this.levels;
                if (r.length > 1) {
                    t.setFromMatrixPosition(n.matrixWorld), e.setFromMatrixPosition(this.matrixWorld);
                    var i = t.distanceTo(e);
                    r[0].object.visible = !0;
                    for (var o = 1, a = r.length; o < a && i >= r[o].distance; o++)r[o - 1].object.visible = !1, r[o].object.visible = !0;
                    for (; o < a; o++)r[o].object.visible = !1
                }
            }
        }(), toJSON: function (t) {
            var e = o.Object3D.prototype.toJSON.call(this, t);
            e.object.levels = [];
            for (var n = this.levels, r = 0, i = n.length; r < i; r++) {
                var a = n[r];
                e.object.levels.push({object: a.object.uuid, distance: a.distance})
            }
            return e
        }
    }),o.Sprite = function (t) {
        o.Object3D.call(this), this.type = "Sprite", this.material = void 0 !== t ? t : new o.SpriteMaterial
    },o.Sprite.prototype = Object.assign(Object.create(o.Object3D.prototype), {
        constructor: o.Sprite,
        raycast: function () {
            var t = new o.Vector3;
            return function (e, n) {
                t.setFromMatrixPosition(this.matrixWorld);
                var r = e.ray.distanceSqToPoint(t), i = this.scale.x * this.scale.y / 4;
                r > i || n.push({distance: Math.sqrt(r), point: this.position, face: null, object: this})
            }
        }(),
        clone: function () {
            return new this.constructor(this.material).copy(this)
        }
    }),o.LensFlare = function (t, e, n, r, i) {
        o.Object3D.call(this), this.lensFlares = [], this.positionScreen = new o.Vector3, this.customUpdateCallback = void 0, void 0 !== t && this.add(t, e, n, r, i)
    },o.LensFlare.prototype = Object.assign(Object.create(o.Object3D.prototype), {
        constructor: o.LensFlare,
        copy: function (t) {
            o.Object3D.prototype.copy.call(this, t), this.positionScreen.copy(t.positionScreen), this.customUpdateCallback = t.customUpdateCallback;
            for (var e = 0, n = t.lensFlares.length; e < n; e++)this.lensFlares.push(t.lensFlares[e]);
            return this
        },
        add: function (t, e, n, r, i, a) {
            void 0 === e && (e = -1), void 0 === n && (n = 0), void 0 === a && (a = 1), void 0 === i && (i = new o.Color(16777215)), void 0 === r && (r = o.NormalBlending), n = Math.min(n, Math.max(0, n)), this.lensFlares.push({
                texture: t,
                size: e,
                distance: n,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotation: 0,
                opacity: a,
                color: i,
                blending: r
            })
        },
        updateLensFlares: function () {
            var t, e, n = this.lensFlares.length, r = 2 * -this.positionScreen.x, i = 2 * -this.positionScreen.y;
            for (t = 0; t < n; t++)e = this.lensFlares[t], e.x = this.positionScreen.x + r * e.distance, e.y = this.positionScreen.y + i * e.distance, e.wantedRotation = e.x * Math.PI * .25, e.rotation += .25 * (e.wantedRotation - e.rotation)
        }
    }),o.Scene = function () {
        o.Object3D.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
    },o.Scene.prototype = Object.create(o.Object3D.prototype),o.Scene.prototype.constructor = o.Scene,o.Scene.prototype.copy = function (t, e) {
        return o.Object3D.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
    },o.Fog = function (t, e, n) {
        this.name = "", this.color = new o.Color(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== n ? n : 1e3
    },o.Fog.prototype.clone = function () {
        return new o.Fog(this.color.getHex(), this.near, this.far)
    },o.FogExp2 = function (t, e) {
        this.name = "", this.color = new o.Color(t), this.density = void 0 !== e ? e : 25e-5
    },o.FogExp2.prototype.clone = function () {
        return new o.FogExp2(this.color.getHex(), this.density)
    },o.ShaderChunk = {},o.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",o.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",o.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",o.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",o.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",o.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n",o.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n",o.ShaderChunk.bsdfs = "bool testLightInRange( const in float lightDistance, const in float cutoffDistance ) {\n\treturn any( bvec2( cutoffDistance == 0.0, lightDistance < cutoffDistance ) );\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t\t}\n\t\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",o.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",o.ShaderChunk.clipping_planes_fragment = "#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n#endif\n",o.ShaderChunk.clipping_planes_pars_fragment = "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",o.ShaderChunk.clipping_planes_pars_vertex = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",o.ShaderChunk.clipping_planes_vertex = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",o.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",o.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",o.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",o.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",o.ShaderChunk.common = "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\n",o.ShaderChunk.cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",o.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n",o.ShaderChunk.displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",o.ShaderChunk.displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",o.ShaderChunk.emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",o.ShaderChunk.emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",o.ShaderChunk.encodings_pars_fragment = "\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n",o.ShaderChunk.encodings_fragment = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
    o.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",o.ShaderChunk.envmap_pars_fragment = "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntenstiy;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",o.ShaderChunk.envmap_pars_vertex = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",o.ShaderChunk.envmap_vertex = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",o.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",o.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",o.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",o.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",o.ShaderChunk.lights_lambert_vertex = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",o.ShaderChunk.lights_pars = "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tif ( testLightInRange( lightDistance, pointLight.distance ) ) {\n\t\t\tdirectLight.color = pointLight.color;\n\t\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( all( bvec2( angleCos > spotLight.coneCos, testLightInRange( lightDistance, spotLight.distance ) ) ) ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\t#include <normal_flip>\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\t#include <normal_flip>\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",o.ShaderChunk.lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",o.ShaderChunk.lights_phong_pars_fragment = "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",o.ShaderChunk.lights_physical_fragment = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",o.ShaderChunk.lights_physical_pars_fragment = "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectSpecular += radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",o.ShaderChunk.lights_template = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t \tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\t\t\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",o.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",o.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",o.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",o.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n",o.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",o.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",o.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",o.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n",o.ShaderChunk.metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.r;\n#endif\n",o.ShaderChunk.metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",o.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",o.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",o.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",o.ShaderChunk.normal_flip = "#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n",o.ShaderChunk.normal_fragment = "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",o.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",o.ShaderChunk.packing = "vec3 packNormalToRGB( const in vec3 normal ) {\n  return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n  return 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n  return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n  return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n  return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n";
    o.ShaderChunk.premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n";
    o.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n", o.ShaderChunk.roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.r;\n#endif\n", o.ShaderChunk.roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif", o.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
      o.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n", o.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n", o.ShaderChunk.shadowmask_pars_fragment = "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n", o.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", o.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n", o.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n", o.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n", o.ShaderChunk.specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif", o.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif", o.ShaderChunk.tonemapping_fragment = "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n", o.ShaderChunk.tonemapping_pars_fragment = "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n  return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n", o.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif", o.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif", o.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif", o.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif", o.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n", o.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif", o.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n", o.UniformsUtils = {
        merge: function (t) {
            for (var e = {}, n = 0; n < t.length; n++) {
                var r = this.clone(t[n]);
                for (var i in r)e[i] = r[i]
            }
            return e
        }, clone: function (t) {
            var e = {};
            for (var n in t) {
                e[n] = {};
                for (var r in t[n]) {
                    var i = t[n][r];
                    i instanceof o.Color || i instanceof o.Vector2 || i instanceof o.Vector3 || i instanceof o.Vector4 || i instanceof o.Matrix3 || i instanceof o.Matrix4 || i instanceof o.Texture ? e[n][r] = i.clone() : Array.isArray(i) ? e[n][r] = i.slice() : e[n][r] = i
                }
            }
            return e
        }
    }, o.UniformsLib = {
        common: {
            diffuse: {value: new o.Color(15658734)},
            opacity: {value: 1},
            map: {value: null},
            offsetRepeat: {value: new o.Vector4(0, 0, 1, 1)},
            specularMap: {value: null},
            alphaMap: {value: null},
            envMap: {value: null},
            flipEnvMap: {value: -1},
            reflectivity: {value: 1},
            refractionRatio: {value: .98}
        },
        aomap: {aoMap: {value: null}, aoMapIntensity: {value: 1}},
        lightmap: {lightMap: {value: null}, lightMapIntensity: {value: 1}},
        emissivemap: {emissiveMap: {value: null}},
        bumpmap: {bumpMap: {value: null}, bumpScale: {value: 1}},
        normalmap: {normalMap: {value: null}, normalScale: {value: new o.Vector2(1, 1)}},
        displacementmap: {displacementMap: {value: null}, displacementScale: {value: 1}, displacementBias: {value: 0}},
        roughnessmap: {roughnessMap: {value: null}},
        metalnessmap: {metalnessMap: {value: null}},
        fog: {
            fogDensity: {value: 25e-5},
            fogNear: {value: 1},
            fogFar: {value: 2e3},
            fogColor: {value: new o.Color(16777215)}
        },
        lights: {
            ambientLightColor: {value: []},
            directionalLights: {
                value: [],
                properties: {direction: {}, color: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {}}
            },
            directionalShadowMap: {value: []},
            directionalShadowMatrix: {value: []},
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {value: []},
            spotShadowMatrix: {value: []},
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            pointShadowMap: {value: []},
            pointShadowMatrix: {value: []},
            hemisphereLights: {value: [], properties: {direction: {}, skyColor: {}, groundColor: {}}}
        },
        points: {
            diffuse: {value: new o.Color(15658734)},
            opacity: {value: 1},
            size: {value: 1},
            scale: {value: 1},
            map: {value: null},
            offsetRepeat: {value: new o.Vector4(0, 0, 1, 1)}
        }
    }, o.ShaderChunk.cube_frag = "uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\t#include <logdepthbuf_fragment>\n}\n", o.ShaderChunk.cube_vert = "varying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n", o.ShaderChunk.depth_frag = "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n", o.ShaderChunk.depth_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n", o.ShaderChunk.distanceRGBA_frag = "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n", o.ShaderChunk.distanceRGBA_vert = "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n", o.ShaderChunk.equirect_frag = "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <logdepthbuf_fragment>\n}\n", o.ShaderChunk.equirect_vert = "varying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n", o.ShaderChunk.linedashed_frag = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n", o.ShaderChunk.linedashed_vert = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n", o.ShaderChunk.meshbasic_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight;\n\treflectedLight.directDiffuse = vec3( 0.0 );\n\treflectedLight.directSpecular = vec3( 0.0 );\n\treflectedLight.indirectDiffuse = diffuseColor.rgb;\n\treflectedLight.indirectSpecular = vec3( 0.0 );\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n", o.ShaderChunk.meshbasic_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n}\n", o.ShaderChunk.meshlambert_frag = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n", o.ShaderChunk.meshlambert_vert = "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n}\n", o.ShaderChunk.meshphong_frag = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n", o.ShaderChunk.meshphong_vert = "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n}\n", o.ShaderChunk.meshphysical_frag = "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nuniform float envMapIntensity;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n", o.ShaderChunk.meshphysical_vert = "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n", o.ShaderChunk.normal_frag = "uniform float opacity;\nvarying vec3 vNormal;\n#include <common>\n#include <packing>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( vNormal ), opacity );\n\t#include <logdepthbuf_fragment>\n}\n", o.ShaderChunk.normal_vert = "varying vec3 vNormal;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvNormal = normalize( normalMatrix * normal );\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n", o.ShaderChunk.points_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n", o.ShaderChunk.points_vert = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n", o.ShaderChunk.shadow_frag = "uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0  - getShadowMask() ) );\n}\n", o.ShaderChunk.shadow_vert = "#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n", o.ShaderLib = {
        basic: {
            uniforms: o.UniformsUtils.merge([o.UniformsLib.common, o.UniformsLib.aomap, o.UniformsLib.fog]),
            vertexShader: o.ShaderChunk.meshbasic_vert,
            fragmentShader: o.ShaderChunk.meshbasic_frag
        },
        lambert: {
            uniforms: o.UniformsUtils.merge([o.UniformsLib.common, o.UniformsLib.aomap, o.UniformsLib.lightmap, o.UniformsLib.emissivemap, o.UniformsLib.fog, o.UniformsLib.lights, {emissive: {value: new o.Color(0)}}]),
            vertexShader: o.ShaderChunk.meshlambert_vert,
            fragmentShader: o.ShaderChunk.meshlambert_frag
        },
        phong: {
            uniforms: o.UniformsUtils.merge([o.UniformsLib.common, o.UniformsLib.aomap, o.UniformsLib.lightmap, o.UniformsLib.emissivemap, o.UniformsLib.bumpmap, o.UniformsLib.normalmap, o.UniformsLib.displacementmap, o.UniformsLib.fog, o.UniformsLib.lights, {
                emissive: {value: new o.Color(0)},
                specular: {value: new o.Color(1118481)},
                shininess: {value: 30}
            }]), vertexShader: o.ShaderChunk.meshphong_vert, fragmentShader: o.ShaderChunk.meshphong_frag
        },
        standard: {
            uniforms: o.UniformsUtils.merge([o.UniformsLib.common, o.UniformsLib.aomap, o.UniformsLib.lightmap, o.UniformsLib.emissivemap, o.UniformsLib.bumpmap, o.UniformsLib.normalmap, o.UniformsLib.displacementmap, o.UniformsLib.roughnessmap, o.UniformsLib.metalnessmap, o.UniformsLib.fog, o.UniformsLib.lights, {
                emissive: {value: new o.Color(0)},
                roughness: {value: .5},
                metalness: {value: 0},
                envMapIntensity: {value: 1}
            }]), vertexShader: o.ShaderChunk.meshphysical_vert, fragmentShader: o.ShaderChunk.meshphysical_frag
        },
        points: {
            uniforms: o.UniformsUtils.merge([o.UniformsLib.points, o.UniformsLib.fog]),
            vertexShader: o.ShaderChunk.points_vert,
            fragmentShader: o.ShaderChunk.points_frag
        },
        dashed: {
            uniforms: o.UniformsUtils.merge([o.UniformsLib.common, o.UniformsLib.fog, {
                scale: {value: 1},
                dashSize: {value: 1},
                totalSize: {value: 2}
            }]), vertexShader: o.ShaderChunk.linedashed_vert, fragmentShader: o.ShaderChunk.linedashed_frag
        },
        depth: {
            uniforms: o.UniformsUtils.merge([o.UniformsLib.common, o.UniformsLib.displacementmap]),
            vertexShader: o.ShaderChunk.depth_vert,
            fragmentShader: o.ShaderChunk.depth_frag
        },
        normal: {
            uniforms: {opacity: {value: 1}},
            vertexShader: o.ShaderChunk.normal_vert,
            fragmentShader: o.ShaderChunk.normal_frag
        },
        cube: {
            uniforms: {tCube: {value: null}, tFlip: {value: -1}},
            vertexShader: o.ShaderChunk.cube_vert,
            fragmentShader: o.ShaderChunk.cube_frag
        },
        equirect: {
            uniforms: {tEquirect: {value: null}, tFlip: {value: -1}},
            vertexShader: o.ShaderChunk.equirect_vert,
            fragmentShader: o.ShaderChunk.equirect_frag
        },
        distanceRGBA: {
            uniforms: {lightPos: {value: new o.Vector3}},
            vertexShader: o.ShaderChunk.distanceRGBA_vert,
            fragmentShader: o.ShaderChunk.distanceRGBA_frag
        }
    }, o.ShaderLib.physical = {
        uniforms: o.UniformsUtils.merge([o.ShaderLib.standard.uniforms, {
            clearCoat: {value: 0},
            clearCoatRoughness: {value: 0}
        }]), vertexShader: o.ShaderChunk.meshphysical_vert, fragmentShader: o.ShaderChunk.meshphysical_frag
    }, o.WebGLRenderer = function (t) {
        function e() {
            return null === et ? pt : 1
        }

        function n(t, e, n, r) {
            j === !0 && (t *= r, e *= r, n *= r), Rt.clearColor(t, e, n, r)
        }

        function r() {
            Rt.init(), Rt.scissor(at.copy(mt).multiplyScalar(pt)), Rt.viewport(lt.copy(gt).multiplyScalar(pt)), n(ut.r, ut.g, ut.b, ht)
        }

        function i() {
            tt = null, ot = null, it = "", rt = -1, Rt.reset()
        }

        function a(t) {
            t.preventDefault(), i(), r(), It.clear()
        }

        function s(t) {
            var e = t.target;
            e.removeEventListener("dispose", s), l(e)
        }

        function l(t) {
            c(t), It.delete(t)
        }

        function c(t) {
            var e = It.get(t).program;
            t.program = void 0, void 0 !== e && Bt.releaseProgram(e)
        }

        function u(t, e, n, r) {
            var i;
            if (n instanceof o.InstancedBufferGeometry && (i = Ct.get("ANGLE_instanced_arrays"), null === i))return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            void 0 === r && (r = 0), Rt.initAttributes();
            var a = n.attributes, s = e.getAttributes(), l = t.defaultAttributeValues;
            for (var c in s) {
                var u = s[c];
                if (u >= 0) {
                    var h = a[c];
                    if (void 0 !== h) {
                        var f = At.FLOAT, d = h.array, p = h.normalized;
                        d instanceof Float32Array ? f = At.FLOAT : d instanceof Float64Array ? console.warn("Unsupported data buffer format: Float64Array") : d instanceof Uint16Array ? f = At.UNSIGNED_SHORT : d instanceof Int16Array ? f = At.SHORT : d instanceof Uint32Array ? f = At.UNSIGNED_INT : d instanceof Int32Array ? f = At.INT : d instanceof Int8Array ? f = At.BYTE : d instanceof Uint8Array && (f = At.UNSIGNED_BYTE);
                        var m = h.itemSize, v = Ot.getAttributeBuffer(h);
                        if (h instanceof o.InterleavedBufferAttribute) {
                            var g = h.data, y = g.stride, x = h.offset;
                            g instanceof o.InstancedInterleavedBuffer ? (Rt.enableAttributeAndDivisor(u, g.meshPerAttribute, i), void 0 === n.maxInstancedCount && (n.maxInstancedCount = g.meshPerAttribute * g.count)) : Rt.enableAttribute(u), At.bindBuffer(At.ARRAY_BUFFER, v), At.vertexAttribPointer(u, m, f, p, y * g.array.BYTES_PER_ELEMENT, (r * y + x) * g.array.BYTES_PER_ELEMENT)
                        } else h instanceof o.InstancedBufferAttribute ? (Rt.enableAttributeAndDivisor(u, h.meshPerAttribute, i), void 0 === n.maxInstancedCount && (n.maxInstancedCount = h.meshPerAttribute * h.count)) : Rt.enableAttribute(u), At.bindBuffer(At.ARRAY_BUFFER, v), At.vertexAttribPointer(u, m, f, p, 0, r * m * h.array.BYTES_PER_ELEMENT)
                    } else if (void 0 !== l) {
                        var _ = l[c];
                        if (void 0 !== _)switch (_.length) {
                            case 2:
                                At.vertexAttrib2fv(u, _);
                                break;
                            case 3:
                                At.vertexAttrib3fv(u, _);
                                break;
                            case 4:
                                At.vertexAttrib4fv(u, _);
                                break;
                            default:
                                At.vertexAttrib1fv(u, _)
                        }
                    }
                }
            }
            Rt.disableUnusedAttributes()
        }

        function h(t, e) {
            return Math.abs(e[0]) - Math.abs(t[0])
        }

        function f(t, e) {
            return t.object.renderOrder !== e.object.renderOrder ? t.object.renderOrder - e.object.renderOrder : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
        }

        function d(t, e) {
            return t.object.renderOrder !== e.object.renderOrder ? t.object.renderOrder - e.object.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
        }

        function p(t, e, n, r, i) {
            var o, a;
            n.transparent ? (o = Y, a = ++Z) : (o = X, a = ++q);
            var s = o[a];
            void 0 !== s ? (s.id = t.id, s.object = t, s.geometry = e, s.material = n, s.z = St.z, s.group = i) : (s = {
                  id: t.id,
                  object: t,
                  geometry: e,
                  material: n,
                  z: St.z,
                  group: i
              }, o.push(s))
        }

        function m(t) {
            var e = t.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(), wt.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), g(wt)
        }

        function v(t) {
            return wt.center.set(0, 0, 0), wt.radius = .7071067811865476, wt.applyMatrix4(t.matrixWorld), g(wt)
        }

        function g(t) {
            if (!yt.intersectsSphere(t))return !1;
            var e = xt.numPlanes;
            if (0 === e)return !0;
            var n = $.clippingPlanes, r = t.center, i = -t.radius, o = 0;
            do if (n[o].distanceToPoint(r) < i)return !1; while (++o !== e);
            return !0
        }

        function y(t, e) {
            if (t.visible !== !1) {
                if (t.layers.test(e.layers))if (t instanceof o.Light) W.push(t); else if (t instanceof o.Sprite) t.frustumCulled !== !1 && v(t) !== !0 || Q.push(t); else if (t instanceof o.LensFlare) J.push(t); else if (t instanceof o.ImmediateRenderObject) $.sortObjects === !0 && (St.setFromMatrixPosition(t.matrixWorld), St.applyProjection(Mt)), p(t, null, t.material, St.z, null); else if ((t instanceof o.Mesh || t instanceof o.Line || t instanceof o.Points) && (t instanceof o.SkinnedMesh && t.skeleton.update(), t.frustumCulled === !1 || m(t) === !0)) {
                    var n = t.material;
                    if (n.visible === !0) {
                        $.sortObjects === !0 && (St.setFromMatrixPosition(t.matrixWorld), St.applyProjection(Mt));
                        var r = Ot.update(t);
                        if (n instanceof o.MultiMaterial)for (var i = r.groups, a = n.materials, s = 0, l = i.length; s < l; s++) {
                            var c = i[s], u = a[c.materialIndex];
                            u.visible === !0 && p(t, r, u, St.z, c)
                        } else p(t, r, n, St.z, null)
                    }
                }
                for (var h = t.children, s = 0, l = h.length; s < l; s++)y(h[s], e)
            }
        }

        function x(t, e, n, r) {
            for (var i = 0, a = t.length; i < a; i++) {
                var s = t[i], l = s.object, c = s.geometry, u = void 0 === r ? s.material : r, h = s.group;
                if (l.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse, l.matrixWorld), l.normalMatrix.getNormalMatrix(l.modelViewMatrix), l instanceof o.ImmediateRenderObject) {
                    b(u);
                    var f = w(e, n, u, l);
                    it = "", l.render(function (t) {
                        $.renderBufferImmediate(t, f, u)
                    })
                } else $.renderBufferDirect(e, n, c, u, l, h)
            }
        }

        function _(t, e, n) {
            var r = It.get(t), i = Bt.getParameters(t, Et, e, xt.numPlanes, n), a = Bt.getProgramCode(t, i), l = r.program, u = !0;
            if (void 0 === l) t.addEventListener("dispose", s); else if (l.code !== a) c(t); else {
                if (void 0 !== i.shaderID)return;
                u = !1
            }
            if (u) {
                if (i.shaderID) {
                    var h = o.ShaderLib[i.shaderID];
                    r.__webglShader = {
                        name: t.type,
                        uniforms: o.UniformsUtils.clone(h.uniforms),
                        vertexShader: h.vertexShader,
                        fragmentShader: h.fragmentShader
                    }
                } else r.__webglShader = {
                    name: t.type,
                    uniforms: t.uniforms,
                    vertexShader: t.vertexShader,
                    fragmentShader: t.fragmentShader
                };
                t.__webglShader = r.__webglShader, l = Bt.acquireProgram(t, i, a), r.program = l, t.program = l
            }
            var f = l.getAttributes();
            if (t.morphTargets) {
                t.numSupportedMorphTargets = 0;
                for (var d = 0; d < $.maxMorphTargets; d++)f["morphTarget" + d] >= 0 && t.numSupportedMorphTargets++
            }
            if (t.morphNormals) {
                t.numSupportedMorphNormals = 0;
                for (var d = 0; d < $.maxMorphNormals; d++)f["morphNormal" + d] >= 0 && t.numSupportedMorphNormals++
            }
            var p = r.__webglShader.uniforms;
            (t instanceof o.ShaderMaterial || t instanceof o.RawShaderMaterial) && t.clipping !== !0 || (r.numClippingPlanes = xt.numPlanes, p.clippingPlanes = xt.uniform), t.lights && (r.lightsHash = Et.hash, p.ambientLightColor.value = Et.ambient, p.directionalLights.value = Et.directional, p.spotLights.value = Et.spot, p.pointLights.value = Et.point, p.hemisphereLights.value = Et.hemi, p.directionalShadowMap.value = Et.directionalShadowMap, p.directionalShadowMatrix.value = Et.directionalShadowMatrix, p.spotShadowMap.value = Et.spotShadowMap, p.spotShadowMatrix.value = Et.spotShadowMatrix, p.pointShadowMap.value = Et.pointShadowMap, p.pointShadowMatrix.value = Et.pointShadowMatrix);
            var m = r.program.getUniforms(), v = o.WebGLUniforms.seqWithValue(m.seq, p);
            r.uniformsList = v, r.dynamicUniforms = o.WebGLUniforms.splitDynamic(v, p)
        }

        function b(t) {
            t.side !== o.DoubleSide ? Rt.enable(At.CULL_FACE) : Rt.disable(At.CULL_FACE), Rt.setFlipSided(t.side === o.BackSide), t.transparent === !0 ? Rt.setBlending(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha) : Rt.setBlending(o.NoBlending), Rt.setDepthFunc(t.depthFunc), Rt.setDepthTest(t.depthTest), Rt.setDepthWrite(t.depthWrite), Rt.setColorWrite(t.colorWrite), Rt.setPolygonOffset(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
        }

        function w(t, e, n, r) {
            ct = 0;
            var i = It.get(n);
            if (_t) {
                if (bt || t !== ot) {
                    var a = t === ot && n.id === rt;
                    xt.setState(n.clippingPlanes, n.clipShadows, t, i, a)
                }
                void 0 !== i.numClippingPlanes && i.numClippingPlanes !== xt.numPlanes && (n.needsUpdate = !0)
            }
            void 0 === i.program && (n.needsUpdate = !0), void 0 !== i.lightsHash && i.lightsHash !== Et.hash && (n.needsUpdate = !0), n.needsUpdate && (_(n, e, r), n.needsUpdate = !1);
            var s = !1, l = !1, c = !1, u = i.program, h = u.getUniforms(), f = i.__webglShader.uniforms;
            if (u.id !== tt && (At.useProgram(u.program), tt = u.id, s = !0, l = !0, c = !0), n.id !== rt && (rt = n.id, l = !0), s || t !== ot) {
                if (h.set(At, t, "projectionMatrix"), Pt.logarithmicDepthBuffer && h.setValue(At, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), t !== ot && (ot = t, l = !0, c = !0), n instanceof o.ShaderMaterial || n instanceof o.MeshPhongMaterial || n instanceof o.MeshStandardMaterial || n.envMap) {
                    var d = h.map.cameraPosition;
                    void 0 !== d && d.setValue(At, St.setFromMatrixPosition(t.matrixWorld))
                }
                (n instanceof o.MeshPhongMaterial || n instanceof o.MeshLambertMaterial || n instanceof o.MeshBasicMaterial || n instanceof o.MeshStandardMaterial || n instanceof o.ShaderMaterial || n.skinning) && h.setValue(At, "viewMatrix", t.matrixWorldInverse), h.set(At, $, "toneMappingExposure"), h.set(At, $, "toneMappingWhitePoint")
            }
            if (n.skinning) {
                h.setOptional(At, r, "bindMatrix"), h.setOptional(At, r, "bindMatrixInverse");
                var p = r.skeleton;
                p && (Pt.floatVertexTextures && p.useVertexTexture ? (h.set(At, p, "boneTexture"), h.set(At, p, "boneTextureWidth"), h.set(At, p, "boneTextureHeight")) : h.setOptional(At, p, "boneMatrices"))
            }
            l && (n.lights && I(f, c), e && n.fog && A(f, e), (n instanceof o.MeshBasicMaterial || n instanceof o.MeshLambertMaterial || n instanceof o.MeshPhongMaterial || n instanceof o.MeshStandardMaterial || n instanceof o.MeshDepthMaterial) && M(f, n), n instanceof o.LineBasicMaterial ? S(f, n) : n instanceof o.LineDashedMaterial ? (S(f, n), E(f, n)) : n instanceof o.PointsMaterial ? T(f, n) : n instanceof o.MeshLambertMaterial ? L(f, n) : n instanceof o.MeshPhongMaterial ? C(f, n) : n instanceof o.MeshPhysicalMaterial ? R(f, n) : n instanceof o.MeshStandardMaterial ? P(f, n) : n instanceof o.MeshDepthMaterial ? n.displacementMap && (f.displacementMap.value = n.displacementMap, f.displacementScale.value = n.displacementScale, f.displacementBias.value = n.displacementBias) : n instanceof o.MeshNormalMaterial && (f.opacity.value = n.opacity), o.WebGLUniforms.upload(At, i.uniformsList, f, $)), h.set(At, r, "modelViewMatrix"), h.set(At, r, "normalMatrix"), h.setValue(At, "modelMatrix", r.matrixWorld);
            var m = i.dynamicUniforms;
            return null !== m && (o.WebGLUniforms.evalDynamic(m, f, r, t), o.WebGLUniforms.upload(At, m, f, $)), u
        }

        function M(t, e) {
            t.opacity.value = e.opacity, t.diffuse.value = e.color, e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), t.map.value = e.map, t.specularMap.value = e.specularMap, t.alphaMap.value = e.alphaMap, e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity);
            var n;
            if (e.map ? n = e.map : e.specularMap ? n = e.specularMap : e.displacementMap ? n = e.displacementMap : e.normalMap ? n = e.normalMap : e.bumpMap ? n = e.bumpMap : e.roughnessMap ? n = e.roughnessMap : e.metalnessMap ? n = e.metalnessMap : e.alphaMap ? n = e.alphaMap : e.emissiveMap && (n = e.emissiveMap), void 0 !== n) {
                n instanceof o.WebGLRenderTarget && (n = n.texture);
                var r = n.offset, i = n.repeat;
                t.offsetRepeat.value.set(r.x, r.y, i.x, i.y)
            }
            t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap instanceof o.CubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio
        }

        function S(t, e) {
            t.diffuse.value = e.color, t.opacity.value = e.opacity
        }

        function E(t, e) {
            t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
        }

        function T(t, e) {
            if (t.diffuse.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size * pt, t.scale.value = .5 * D.clientHeight, t.map.value = e.map, null !== e.map) {
                var n = e.map.offset, r = e.map.repeat;
                t.offsetRepeat.value.set(n.x, n.y, r.x, r.y)
            }
        }

        function A(t, e) {
            t.fogColor.value = e.color, e instanceof o.Fog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e instanceof o.FogExp2 && (t.fogDensity.value = e.density)
        }

        function L(t, e) {
            e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
        }

        function C(t, e) {
            t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }

        function P(t, e) {
            t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
        }

        function R(t, e) {
            t.clearCoat.value = e.clearCoat, t.clearCoatRoughness.value = e.clearCoatRoughness, P(t, e)
        }

        function I(t, e) {
            t.ambientLightColor.needsUpdate = e, t.directionalLights.needsUpdate = e, t.pointLights.needsUpdate = e, t.spotLights.needsUpdate = e, t.hemisphereLights.needsUpdate = e
        }

        function F(t) {
            for (var e = 0, n = 0, r = t.length; n < r; n++) {
                var i = t[n];
                i.castShadow && (Et.shadows[e++] = i)
            }
            Et.shadows.length = e
        }

        function O(t, e) {
            var n, r, i, a, s, l, c, u = 0, h = 0, f = 0, d = e.matrixWorldInverse, p = 0, m = 0, v = 0, g = 0;
            for (n = 0, r = t.length; n < r; n++)if (i = t[n], a = i.color, s = i.intensity, l = i.distance, c = i.shadow && i.shadow.map ? i.shadow.map.texture : null, i instanceof o.AmbientLight) u += a.r * s, h += a.g * s, f += a.b * s; else if (i instanceof o.DirectionalLight) {
                var y = Ut.get(i);
                y.color.copy(i.color).multiplyScalar(i.intensity), y.direction.setFromMatrixPosition(i.matrixWorld), St.setFromMatrixPosition(i.target.matrixWorld), y.direction.sub(St), y.direction.transformDirection(d), y.shadow = i.castShadow, i.castShadow && (y.shadowBias = i.shadow.bias, y.shadowRadius = i.shadow.radius, y.shadowMapSize = i.shadow.mapSize), Et.directionalShadowMap[p] = c, Et.directionalShadowMatrix[p] = i.shadow.matrix, Et.directional[p++] = y
            } else if (i instanceof o.SpotLight) {
                var y = Ut.get(i);
                y.position.setFromMatrixPosition(i.matrixWorld), y.position.applyMatrix4(d), y.color.copy(a).multiplyScalar(s), y.distance = l, y.direction.setFromMatrixPosition(i.matrixWorld), St.setFromMatrixPosition(i.target.matrixWorld), y.direction.sub(St), y.direction.transformDirection(d), y.coneCos = Math.cos(i.angle), y.penumbraCos = Math.cos(i.angle * (1 - i.penumbra)), y.decay = 0 === i.distance ? 0 : i.decay, y.shadow = i.castShadow, i.castShadow && (y.shadowBias = i.shadow.bias, y.shadowRadius = i.shadow.radius, y.shadowMapSize = i.shadow.mapSize), Et.spotShadowMap[v] = c, Et.spotShadowMatrix[v] = i.shadow.matrix, Et.spot[v++] = y
            } else if (i instanceof o.PointLight) {
                var y = Ut.get(i);
                y.position.setFromMatrixPosition(i.matrixWorld), y.position.applyMatrix4(d), y.color.copy(i.color).multiplyScalar(i.intensity), y.distance = i.distance, y.decay = 0 === i.distance ? 0 : i.decay, y.shadow = i.castShadow, i.castShadow && (y.shadowBias = i.shadow.bias, y.shadowRadius = i.shadow.radius, y.shadowMapSize = i.shadow.mapSize), Et.pointShadowMap[m] = c, void 0 === Et.pointShadowMatrix[m] && (Et.pointShadowMatrix[m] = new o.Matrix4), St.setFromMatrixPosition(i.matrixWorld).negate(), Et.pointShadowMatrix[m].identity().setPosition(St), Et.point[m++] = y
            } else if (i instanceof o.HemisphereLight) {
                var y = Ut.get(i);
                y.direction.setFromMatrixPosition(i.matrixWorld), y.direction.transformDirection(d), y.direction.normalize(), y.skyColor.copy(i.color).multiplyScalar(s), y.groundColor.copy(i.groundColor).multiplyScalar(s), Et.hemi[g++] = y
            }
            Et.ambient[0] = u, Et.ambient[1] = h, Et.ambient[2] = f, Et.directional.length = p, Et.spot.length = v, Et.point.length = m, Et.hemi.length = g, Et.hash = p + "," + m + "," + v + "," + g + "," + Et.shadows.length
        }

        function B() {
            var t = ct;
            return t >= Pt.maxTextures && console.warn("WebGLRenderer: trying to use " + t + " texture units while this GPU supports only " + Pt.maxTextures), ct += 1, t
        }

        function U(t) {
            var e;
            if (t === o.RepeatWrapping)return At.REPEAT;
            if (t === o.ClampToEdgeWrapping)return At.CLAMP_TO_EDGE;
            if (t === o.MirroredRepeatWrapping)return At.MIRRORED_REPEAT;
            if (t === o.NearestFilter)return At.NEAREST;
            if (t === o.NearestMipMapNearestFilter)return At.NEAREST_MIPMAP_NEAREST;
            if (t === o.NearestMipMapLinearFilter)return At.NEAREST_MIPMAP_LINEAR;
            if (t === o.LinearFilter)return At.LINEAR;
            if (t === o.LinearMipMapNearestFilter)return At.LINEAR_MIPMAP_NEAREST;
            if (t === o.LinearMipMapLinearFilter)return At.LINEAR_MIPMAP_LINEAR;
            if (t === o.UnsignedByteType)return At.UNSIGNED_BYTE;
            if (t === o.UnsignedShort4444Type)return At.UNSIGNED_SHORT_4_4_4_4;
            if (t === o.UnsignedShort5551Type)return At.UNSIGNED_SHORT_5_5_5_1;
            if (t === o.UnsignedShort565Type)return At.UNSIGNED_SHORT_5_6_5;
            if (t === o.ByteType)return At.BYTE;
            if (t === o.ShortType)return At.SHORT;
            if (t === o.UnsignedShortType)return At.UNSIGNED_SHORT;
            if (t === o.IntType)return At.INT;
            if (t === o.UnsignedIntType)return At.UNSIGNED_INT;
            if (t === o.FloatType)return At.FLOAT;
            if (e = Ct.get("OES_texture_half_float"), null !== e && t === o.HalfFloatType)return e.HALF_FLOAT_OES;
            if (t === o.AlphaFormat)return At.ALPHA;
            if (t === o.RGBFormat)return At.RGB;
            if (t === o.RGBAFormat)return At.RGBA;
            if (t === o.LuminanceFormat)return At.LUMINANCE;
            if (t === o.LuminanceAlphaFormat)return At.LUMINANCE_ALPHA;
            if (t === o.DepthFormat)return At.DEPTH_COMPONENT;
            if (t === o.AddEquation)return At.FUNC_ADD;
            if (t === o.SubtractEquation)return At.FUNC_SUBTRACT;
            if (t === o.ReverseSubtractEquation)return At.FUNC_REVERSE_SUBTRACT;
            if (t === o.ZeroFactor)return At.ZERO;
            if (t === o.OneFactor)return At.ONE;
            if (t === o.SrcColorFactor)return At.SRC_COLOR;
            if (t === o.OneMinusSrcColorFactor)return At.ONE_MINUS_SRC_COLOR;
            if (t === o.SrcAlphaFactor)return At.SRC_ALPHA;
            if (t === o.OneMinusSrcAlphaFactor)return At.ONE_MINUS_SRC_ALPHA;
            if (t === o.DstAlphaFactor)return At.DST_ALPHA;
            if (t === o.OneMinusDstAlphaFactor)return At.ONE_MINUS_DST_ALPHA;
            if (t === o.DstColorFactor)return At.DST_COLOR;
            if (t === o.OneMinusDstColorFactor)return At.ONE_MINUS_DST_COLOR;
            if (t === o.SrcAlphaSaturateFactor)return At.SRC_ALPHA_SATURATE;
            if (e = Ct.get("WEBGL_compressed_texture_s3tc"), null !== e) {
                if (t === o.RGB_S3TC_DXT1_Format)return e.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (t === o.RGBA_S3TC_DXT1_Format)return e.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (t === o.RGBA_S3TC_DXT3_Format)return e.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (t === o.RGBA_S3TC_DXT5_Format)return e.COMPRESSED_RGBA_S3TC_DXT5_EXT
            }
            if (e = Ct.get("WEBGL_compressed_texture_pvrtc"), null !== e) {
                if (t === o.RGB_PVRTC_4BPPV1_Format)return e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (t === o.RGB_PVRTC_2BPPV1_Format)return e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (t === o.RGBA_PVRTC_4BPPV1_Format)return e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (t === o.RGBA_PVRTC_2BPPV1_Format)return e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (e = Ct.get("WEBGL_compressed_texture_etc1"), null !== e && t === o.RGB_ETC1_Format)return e.COMPRESSED_RGB_ETC1_WEBGL;
            if (e = Ct.get("EXT_blend_minmax"), null !== e) {
                if (t === o.MinEquation)return e.MIN_EXT;
                if (t === o.MaxEquation)return e.MAX_EXT
            }
            return 0
        }

        console.log("THREE.WebGLRenderer", o.REVISION), t = t || {};
        var D = void 0 !== t.canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), N = void 0 !== t.context ? t.context : null, z = void 0 !== t.alpha && t.alpha, G = void 0 === t.depth || t.depth, V = void 0 === t.stencil || t.stencil, k = void 0 !== t.antialias && t.antialias, j = void 0 === t.premultipliedAlpha || t.premultipliedAlpha, H = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer, W = [], X = [], q = -1, Y = [], Z = -1, K = new Float32Array(8), Q = [], J = [];
        this.domElement = D, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = o.LinearToneMapping, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
        var $ = this, tt = null, et = null, nt = null, rt = -1, it = "", ot = null, at = new o.Vector4, st = null, lt = new o.Vector4, ct = 0, ut = new o.Color(0), ht = 0, ft = D.width, dt = D.height, pt = 1, mt = new o.Vector4(0, 0, ft, dt), vt = !1, gt = new o.Vector4(0, 0, ft, dt), yt = new o.Frustum, xt = new o.WebGLClipping, _t = !1, bt = !1, wt = new o.Sphere, Mt = new o.Matrix4, St = new o.Vector3, Et = {
            hash: "",
            ambient: [0, 0, 0],
            directional: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            point: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            shadows: []
        }, Tt = {calls: 0, vertices: 0, faces: 0, points: 0};
        this.info = {render: Tt, memory: {geometries: 0, textures: 0}, programs: null};
        var At;
        try {
            var Lt = {alpha: z, depth: G, stencil: V, antialias: k, premultipliedAlpha: j, preserveDrawingBuffer: H};
            if (At = N || D.getContext("webgl", Lt) || D.getContext("experimental-webgl", Lt), null === At)throw null !== D.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
            void 0 === At.getShaderPrecisionFormat && (At.getShaderPrecisionFormat = function () {
                return {rangeMin: 1, rangeMax: 1, precision: 1}
            }), D.addEventListener("webglcontextlost", a, !1)
        } catch (t) {
            console.error("THREE.WebGLRenderer: " + t)
        }
        var Ct = new o.WebGLExtensions(At);
        Ct.get("WEBGL_depth_texture"), Ct.get("OES_texture_float"), Ct.get("OES_texture_float_linear"), Ct.get("OES_texture_half_float"), Ct.get("OES_texture_half_float_linear"), Ct.get("OES_standard_derivatives"), Ct.get("ANGLE_instanced_arrays"), Ct.get("OES_element_index_uint") && (o.BufferGeometry.MaxIndex = 4294967296);
        var Pt = new o.WebGLCapabilities(At, Ct, t), Rt = new o.WebGLState(At, Ct, U), It = new o.WebGLProperties, Ft = new o.WebGLTextures(At, Ct, Rt, It, Pt, U, this.info), Ot = new o.WebGLObjects(At, It, this.info), Bt = new o.WebGLPrograms(this, Pt), Ut = new o.WebGLLights;
        this.info.programs = Bt.programs;
        var Dt = new o.WebGLBufferRenderer(At, Ct, Tt), Nt = new o.WebGLIndexedBufferRenderer(At, Ct, Tt), zt = new o.OrthographicCamera(-1, 1, 1, -1, 0, 1), Gt = new o.PerspectiveCamera, Vt = new o.Mesh(new o.PlaneBufferGeometry(2, 2), new o.MeshBasicMaterial({
            depthTest: !1,
            depthWrite: !1
        })), kt = o.ShaderLib.cube, jt = new o.Mesh(new o.BoxBufferGeometry(5, 5, 5), new o.ShaderMaterial({
            uniforms: kt.uniforms,
            vertexShader: kt.vertexShader,
            fragmentShader: kt.fragmentShader,
            depthTest: !1,
            depthWrite: !1,
            side: o.BackSide
        }));
        Ot.update(Vt), Ot.update(jt), r(), this.context = At, this.capabilities = Pt, this.extensions = Ct, this.properties = It, this.state = Rt;
        var Ht = new o.WebGLShadowMap(this, Et, Ot);
        this.shadowMap = Ht;
        var Wt = new o.SpritePlugin(this, Q), Xt = new o.LensFlarePlugin(this, J);
        this.getContext = function () {
            return At
        }, this.getContextAttributes = function () {
            return At.getContextAttributes()
        }, this.forceContextLoss = function () {
            Ct.get("WEBGL_lose_context").loseContext()
        }, this.getMaxAnisotropy = function () {
            return Pt.getMaxAnisotropy()
        }, this.getPrecision = function () {
            return Pt.precision
        }, this.getPixelRatio = function () {
            return pt
        }, this.setPixelRatio = function (t) {
            void 0 !== t && (pt = t, this.setSize(gt.z, gt.w, !1))
        }, this.getSize = function () {
            return {width: ft, height: dt}
        }, this.setSize = function (t, e, n) {
            ft = t, dt = e, D.width = t * pt, D.height = e * pt, n !== !1 && (D.style.width = t + "px", D.style.height = e + "px"), this.setViewport(0, 0, t, e)
        }, this.setViewport = function (t, e, n, r) {
            Rt.viewport(gt.set(t, e, n, r))
        }, this.setScissor = function (t, e, n, r) {
            Rt.scissor(mt.set(t, e, n, r))
        }, this.setScissorTest = function (t) {
            Rt.setScissorTest(vt = t)
        }, this.getClearColor = function () {
            return ut
        }, this.setClearColor = function (t, e) {
            ut.set(t), ht = void 0 !== e ? e : 1, n(ut.r, ut.g, ut.b, ht)
        }, this.getClearAlpha = function () {
            return ht
        }, this.setClearAlpha = function (t) {
            ht = t, n(ut.r, ut.g, ut.b, ht)
        }, this.clear = function (t, e, n) {
            var r = 0;
            (void 0 === t || t) && (r |= At.COLOR_BUFFER_BIT), (void 0 === e || e) && (r |= At.DEPTH_BUFFER_BIT), (void 0 === n || n) && (r |= At.STENCIL_BUFFER_BIT), At.clear(r)
        }, this.clearColor = function () {
            this.clear(!0, !1, !1)
        }, this.clearDepth = function () {
            this.clear(!1, !0, !1)
        }, this.clearStencil = function () {
            this.clear(!1, !1, !0)
        }, this.clearTarget = function (t, e, n, r) {
            this.setRenderTarget(t), this.clear(e, n, r)
        }, this.resetGLState = i, this.dispose = function () {
            Y = [], Z = -1, X = [], q = -1, D.removeEventListener("webglcontextlost", a, !1)
        }, this.renderBufferImmediate = function (t, e, n) {
            Rt.initAttributes();
            var r = It.get(t);
            t.hasPositions && !r.position && (r.position = At.createBuffer()), t.hasNormals && !r.normal && (r.normal = At.createBuffer()), t.hasUvs && !r.uv && (r.uv = At.createBuffer()), t.hasColors && !r.color && (r.color = At.createBuffer());
            var i = e.getAttributes();
            if (t.hasPositions && (At.bindBuffer(At.ARRAY_BUFFER, r.position), At.bufferData(At.ARRAY_BUFFER, t.positionArray, At.DYNAMIC_DRAW), Rt.enableAttribute(i.position), At.vertexAttribPointer(i.position, 3, At.FLOAT, !1, 0, 0)), t.hasNormals) {
                if (At.bindBuffer(At.ARRAY_BUFFER, r.normal), "MeshPhongMaterial" !== n.type && "MeshStandardMaterial" !== n.type && "MeshPhysicalMaterial" !== n.type && n.shading === o.FlatShading)for (var a = 0, s = 3 * t.count; a < s; a += 9) {
                    var l = t.normalArray, c = (l[a + 0] + l[a + 3] + l[a + 6]) / 3, u = (l[a + 1] + l[a + 4] + l[a + 7]) / 3, h = (l[a + 2] + l[a + 5] + l[a + 8]) / 3;
                    l[a + 0] = c, l[a + 1] = u, l[a + 2] = h, l[a + 3] = c, l[a + 4] = u, l[a + 5] = h, l[a + 6] = c, l[a + 7] = u, l[a + 8] = h
                }
                At.bufferData(At.ARRAY_BUFFER, t.normalArray, At.DYNAMIC_DRAW), Rt.enableAttribute(i.normal), At.vertexAttribPointer(i.normal, 3, At.FLOAT, !1, 0, 0)
            }
            t.hasUvs && n.map && (At.bindBuffer(At.ARRAY_BUFFER, r.uv), At.bufferData(At.ARRAY_BUFFER, t.uvArray, At.DYNAMIC_DRAW), Rt.enableAttribute(i.uv), At.vertexAttribPointer(i.uv, 2, At.FLOAT, !1, 0, 0)), t.hasColors && n.vertexColors !== o.NoColors && (At.bindBuffer(At.ARRAY_BUFFER, r.color), At.bufferData(At.ARRAY_BUFFER, t.colorArray, At.DYNAMIC_DRAW), Rt.enableAttribute(i.color), At.vertexAttribPointer(i.color, 3, At.FLOAT, !1, 0, 0)), Rt.disableUnusedAttributes(), At.drawArrays(At.TRIANGLES, 0, t.count), t.count = 0
        }, this.renderBufferDirect = function (t, n, r, i, a, s) {
            b(i);
            var l = w(t, n, i, a), c = !1, f = r.id + "_" + l.id + "_" + i.wireframe;
            f !== it && (it = f, c = !0);
            var d = a.morphTargetInfluences;
            if (void 0 !== d) {
                for (var p = [], m = 0, v = d.length; m < v; m++) {
                    var g = d[m];
                    p.push([g, m])
                }
                p.sort(h), p.length > 8 && (p.length = 8);
                for (var y = r.morphAttributes, m = 0, v = p.length; m < v; m++) {
                    var g = p[m];
                    if (K[m] = g[0], 0 !== g[0]) {
                        var x = g[1];
                        i.morphTargets === !0 && y.position && r.addAttribute("morphTarget" + m, y.position[x]), i.morphNormals === !0 && y.normal && r.addAttribute("morphNormal" + m, y.normal[x])
                    } else i.morphTargets === !0 && r.removeAttribute("morphTarget" + m), i.morphNormals === !0 && r.removeAttribute("morphNormal" + m)
                }
                l.getUniforms().setValue(At, "morphTargetInfluences", K), c = !0
            }
            var x = r.index, _ = r.attributes.position;
            i.wireframe === !0 && (x = Ot.getWireframeAttribute(r));
            var M;
            null !== x ? (M = Nt, M.setIndex(x)) : M = Dt, c && (u(i, l, r), null !== x && At.bindBuffer(At.ELEMENT_ARRAY_BUFFER, Ot.getAttributeBuffer(x)));
            var S = 0, E = 1 / 0;
            null !== x ? E = x.count : void 0 !== _ && (E = _.count);
            var T = r.drawRange.start, A = r.drawRange.count, L = null !== s ? s.start : 0, C = null !== s ? s.count : 1 / 0, P = Math.max(S, T, L), R = Math.min(S + E, T + A, L + C) - 1, I = Math.max(0, R - P + 1);
            if (a instanceof o.Mesh)if (i.wireframe === !0) Rt.setLineWidth(i.wireframeLinewidth * e()), M.setMode(At.LINES); else switch (a.drawMode) {
                case o.TrianglesDrawMode:
                    M.setMode(At.TRIANGLES);
                    break;
                case o.TriangleStripDrawMode:
                    M.setMode(At.TRIANGLE_STRIP);
                    break;
                case o.TriangleFanDrawMode:
                    M.setMode(At.TRIANGLE_FAN)
            } else if (a instanceof o.Line) {
                var F = i.linewidth;
                void 0 === F && (F = 1), Rt.setLineWidth(F * e()), a instanceof o.LineSegments ? M.setMode(At.LINES) : M.setMode(At.LINE_STRIP)
            } else a instanceof o.Points && M.setMode(At.POINTS);
            r instanceof o.InstancedBufferGeometry ? r.maxInstancedCount > 0 && M.renderInstances(r, P, I) : M.render(P, I)
        }, this.render = function (t, e, r, i) {
            if (e instanceof o.Camera == !1)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            var a = t.fog;
            it = "", rt = -1, ot = null, t.autoUpdate === !0 && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), e.matrixWorldInverse.getInverse(e.matrixWorld), Mt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), yt.setFromMatrix(Mt), W.length = 0, q = -1, Z = -1, Q.length = 0, J.length = 0, bt = this.localClippingEnabled, _t = xt.init(this.clippingPlanes, bt, e), y(t, e), X.length = q + 1, Y.length = Z + 1, $.sortObjects === !0 && (X.sort(f), Y.sort(d)), _t && xt.beginShadows(), F(W), Ht.render(t, e), O(W, e), _t && xt.endShadows(), Tt.calls = 0, Tt.vertices = 0, Tt.faces = 0, Tt.points = 0, void 0 === r && (r = null), this.setRenderTarget(r);
            var s = t.background;
            if (null === s ? n(ut.r, ut.g, ut.b, ht) : s instanceof o.Color && n(s.r, s.g, s.b, 1), (this.autoClear || i) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), s instanceof o.CubeTexture ? (Gt.projectionMatrix.copy(e.projectionMatrix), Gt.matrixWorld.extractRotation(e.matrixWorld), Gt.matrixWorldInverse.getInverse(Gt.matrixWorld), jt.material.uniforms.tCube.value = s, jt.modelViewMatrix.multiplyMatrices(Gt.matrixWorldInverse, jt.matrixWorld), $.renderBufferDirect(Gt, null, jt.geometry, jt.material, jt, null)) : s instanceof o.Texture && (Vt.material.map = s, $.renderBufferDirect(zt, null, Vt.geometry, Vt.material, Vt, null)), t.overrideMaterial) {
                var l = t.overrideMaterial;
                x(X, e, a, l), x(Y, e, a, l)
            } else Rt.setBlending(o.NoBlending), x(X, e, a), x(Y, e, a);
            Wt.render(t, e), Xt.render(t, e, lt), r && Ft.updateRenderTargetMipmap(r), Rt.setDepthTest(!0), Rt.setDepthWrite(!0), Rt.setColorWrite(!0)
        }, this.setFaceCulling = function (t, e) {
            Rt.setCullFace(t), Rt.setFlipSided(e === o.FrontFaceDirectionCW)
        }, this.allocTextureUnit = B, this.setTexture2D = function () {
            var t = !1;
            return function (e, n) {
                e instanceof o.WebGLRenderTarget && (t || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), Ft.setTexture2D(e, n)
            }
        }(), this.setTexture = function () {
            var t = !1;
            return function (e, n) {
                t || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), t = !0), Ft.setTexture2D(e, n)
            }
        }(), this.setTextureCube = function () {
            var t = !1;
            return function (e, n) {
                e instanceof o.WebGLRenderTargetCube && (t || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), e instanceof o.CubeTexture || Array.isArray(e.image) && 6 === e.image.length ? Ft.setTextureCube(e, n) : Ft.setTextureCubeDynamic(e, n)
            }
        }(), this.getCurrentRenderTarget = function () {
            return et
        }, this.setRenderTarget = function (t) {
            et = t, t && void 0 === It.get(t).__webglFramebuffer && Ft.setupRenderTarget(t);
            var e, n = t instanceof o.WebGLRenderTargetCube;
            if (t) {
                var r = It.get(t);
                e = n ? r.__webglFramebuffer[t.activeCubeFace] : r.__webglFramebuffer, at.copy(t.scissor), st = t.scissorTest, lt.copy(t.viewport)
            } else e = null, at.copy(mt).multiplyScalar(pt), st = vt, lt.copy(gt).multiplyScalar(pt);
            if (nt !== e && (At.bindFramebuffer(At.FRAMEBUFFER, e), nt = e), Rt.scissor(at), Rt.setScissorTest(st), Rt.viewport(lt), n) {
                var i = It.get(t.texture);
                At.framebufferTexture2D(At.FRAMEBUFFER, At.COLOR_ATTACHMENT0, At.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, i.__webglTexture, t.activeMipMapLevel)
            }
        }, this.readRenderTargetPixels = function (t, e, n, r, i, a) {
            if (t instanceof o.WebGLRenderTarget == !1)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            var s = It.get(t).__webglFramebuffer;
            if (s) {
                var l = !1;
                s !== nt && (At.bindFramebuffer(At.FRAMEBUFFER, s), l = !0);
                try {
                    var c = t.texture;
                    if (c.format !== o.RGBAFormat && U(c.format) !== At.getParameter(At.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    if (!(c.type === o.UnsignedByteType || U(c.type) === At.getParameter(At.IMPLEMENTATION_COLOR_READ_TYPE) || c.type === o.FloatType && Ct.get("WEBGL_color_buffer_float") || c.type === o.HalfFloatType && Ct.get("EXT_color_buffer_half_float")))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    At.checkFramebufferStatus(At.FRAMEBUFFER) === At.FRAMEBUFFER_COMPLETE ? e >= 0 && e <= t.width - r && n >= 0 && n <= t.height - i && At.readPixels(e, n, r, i, U(c.format), U(c.type), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                } finally {
                    l && At.bindFramebuffer(At.FRAMEBUFFER, nt)
                }
            }
        }
    }, o.WebGLRenderTarget = function (t, e, n) {
        this.uuid = o.Math.generateUUID(), this.width = t, this.height = e, this.scissor = new o.Vector4(0, 0, t, e), this.scissorTest = !1, this.viewport = new o.Vector4(0, 0, t, e), n = n || {}, void 0 === n.minFilter && (n.minFilter = o.LinearFilter), this.texture = new o.Texture(void 0, void 0, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 === n.stencilBuffer || n.stencilBuffer, this.depthTexture = null
    }, Object.assign(o.WebGLRenderTarget.prototype, o.EventDispatcher.prototype, {
        setSize: function (t, e) {
            this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
        }, clone: function () {
            return (new this.constructor).copy(this)
        }, copy: function (t) {
            return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture,
              this
        }, dispose: function () {
            this.dispatchEvent({type: "dispose"})
        }
    }), o.WebGLRenderTargetCube = function (t, e, n) {
        o.WebGLRenderTarget.call(this, t, e, n), this.activeCubeFace = 0, this.activeMipMapLevel = 0
    }, o.WebGLRenderTargetCube.prototype = Object.create(o.WebGLRenderTarget.prototype), o.WebGLRenderTargetCube.prototype.constructor = o.WebGLRenderTargetCube, o.WebGLBufferRenderer = function (t, e, n) {
        function r(t) {
            s = t
        }

        function i(e, r) {
            t.drawArrays(s, e, r), n.calls++, n.vertices += r, s === t.TRIANGLES && (n.faces += r / 3)
        }

        function a(r) {
            var i = e.get("ANGLE_instanced_arrays");
            if (null === i)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            var a = r.attributes.position, l = 0;
            a instanceof o.InterleavedBufferAttribute ? (l = a.data.count, i.drawArraysInstancedANGLE(s, 0, l, r.maxInstancedCount)) : (l = a.count, i.drawArraysInstancedANGLE(s, 0, l, r.maxInstancedCount)), n.calls++, n.vertices += l * r.maxInstancedCount, s === t.TRIANGLES && (n.faces += r.maxInstancedCount * l / 3)
        }

        var s;
        this.setMode = r, this.render = i, this.renderInstances = a
    }, o.WebGLClipping = function () {
        function t() {
            u.value !== r && (u.value = r, u.needsUpdate = i > 0), n.numPlanes = i
        }

        function e(t, e, r, i) {
            var o = null !== t ? t.length : 0, a = null;
            if (0 !== o) {
                if (a = u.value, i !== !0 || null === a) {
                    var s = r + 4 * o, h = e.matrixWorldInverse;
                    c.getNormalMatrix(h), (null === a || a.length < s) && (a = new Float32Array(s));
                    for (var f = 0, d = r; f !== o; ++f, d += 4)l.copy(t[f]).applyMatrix4(h, c), l.normal.toArray(a, d), a[d + 3] = l.constant
                }
                u.value = a, u.needsUpdate = !0
            }
            return n.numPlanes = o, a
        }

        var n = this, r = null, i = 0, a = !1, s = !1, l = new o.Plane, c = new o.Matrix3, u = {
            value: null,
            needsUpdate: !1
        };
        this.uniform = u, this.numPlanes = 0, this.init = function (t, n, o) {
            var s = 0 !== t.length || n || 0 !== i || a;
            return a = n, r = e(t, o, 0), i = t.length, s
        }, this.beginShadows = function () {
            s = !0, e(null)
        }, this.endShadows = function () {
            s = !1, t()
        }, this.setState = function (n, o, l, c, h) {
            if (!a || null === n || 0 === n.length || s && !o) s ? e(null) : t(); else {
                var f = s ? 0 : i, d = 4 * f, p = c.clippingState || null;
                u.value = p, p = e(n, l, d, h);
                for (var m = 0; m !== d; ++m)p[m] = r[m];
                c.clippingState = p, this.numPlanes += f
            }
        }
    }, o.WebGLIndexedBufferRenderer = function (t, e, n) {
        function r(t) {
            s = t
        }

        function i(n) {
            n.array instanceof Uint32Array && e.get("OES_element_index_uint") ? (l = t.UNSIGNED_INT, c = 4) : (l = t.UNSIGNED_SHORT, c = 2)
        }

        function o(e, r) {
            t.drawElements(s, r, l, e * c), n.calls++, n.vertices += r, s === t.TRIANGLES && (n.faces += r / 3)
        }

        function a(r, i, o) {
            var a = e.get("ANGLE_instanced_arrays");
            return null === a ? void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : (a.drawElementsInstancedANGLE(s, o, l, i * c, r.maxInstancedCount), n.calls++, n.vertices += o * r.maxInstancedCount, void(s === t.TRIANGLES && (n.faces += r.maxInstancedCount * o / 3)))
        }

        var s, l, c;
        this.setMode = r, this.setIndex = i, this.render = o, this.renderInstances = a
    }, o.WebGLExtensions = function (t) {
        var e = {};
        this.get = function (n) {
            if (void 0 !== e[n])return e[n];
            var r;
            switch (n) {
                case"WEBGL_depth_texture":
                    r = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case"EXT_texture_filter_anisotropic":
                    r = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case"WEBGL_compressed_texture_s3tc":
                    r = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case"WEBGL_compressed_texture_pvrtc":
                    r = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                case"WEBGL_compressed_texture_etc1":
                    r = t.getExtension("WEBGL_compressed_texture_etc1");
                    break;
                default:
                    r = t.getExtension(n)
            }
            return null === r && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), e[n] = r, r
        }
    }, o.WebGLCapabilities = function (t, e, n) {
        function r() {
            if (void 0 !== o)return o;
            var n = e.get("EXT_texture_filter_anisotropic");
            return o = null !== n ? t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
        }

        function i(e) {
            if ("highp" === e) {
                if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0)return "highp";
                e = "mediump"
            }
            return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
        }

        var o;
        this.getMaxAnisotropy = r, this.getMaxPrecision = i, this.precision = void 0 !== n.precision ? n.precision : "highp", this.logarithmicDepthBuffer = void 0 !== n.logarithmicDepthBuffer && n.logarithmicDepthBuffer, this.maxTextures = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), this.maxVertexTextures = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS), this.maxTextureSize = t.getParameter(t.MAX_TEXTURE_SIZE), this.maxCubemapSize = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE), this.maxAttributes = t.getParameter(t.MAX_VERTEX_ATTRIBS), this.maxVertexUniforms = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS), this.maxVaryings = t.getParameter(t.MAX_VARYING_VECTORS), this.maxFragmentUniforms = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS), this.vertexTextures = this.maxVertexTextures > 0, this.floatFragmentTextures = !!e.get("OES_texture_float"), this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures;
        var a = i(this.precision);
        a !== this.precision && (console.warn("THREE.WebGLRenderer:", this.precision, "not supported, using", a, "instead."), this.precision = a), this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!e.get("EXT_frag_depth"))
    }, o.WebGLGeometries = function (t, e, n) {
        function r(t) {
            var e = t.geometry;
            if (void 0 !== u[e.id])return u[e.id];
            e.addEventListener("dispose", i);
            var r;
            return e instanceof o.BufferGeometry ? r = e : e instanceof o.Geometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new o.BufferGeometry).setFromObject(t)), r = e._bufferGeometry), u[e.id] = r, n.memory.geometries++, r
        }

        function i(t) {
            var r = t.target, o = u[r.id];
            null !== o.index && s(o.index), l(o.attributes), r.removeEventListener("dispose", i), delete u[r.id];
            var a = e.get(r);
            a.wireframe && s(a.wireframe), e.delete(r);
            var c = e.get(o);
            c.wireframe && s(c.wireframe), e.delete(o), n.memory.geometries--
        }

        function a(t) {
            return t instanceof o.InterleavedBufferAttribute ? e.get(t.data).__webglBuffer : e.get(t).__webglBuffer
        }

        function s(e) {
            var n = a(e);
            void 0 !== n && (t.deleteBuffer(n), c(e))
        }

        function l(t) {
            for (var e in t)s(t[e])
        }

        function c(t) {
            t instanceof o.InterleavedBufferAttribute ? e.delete(t.data) : e.delete(t)
        }

        var u = {};
        this.get = r
    }, o.WebGLLights = function () {
        var t = {};
        this.get = function (e) {
            if (void 0 !== t[e.id])return t[e.id];
            var n;
            switch (e.type) {
                case"DirectionalLight":
                    n = {
                        direction: new o.Vector3,
                        color: new o.Color,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new o.Vector2
                    };
                    break;
                case"SpotLight":
                    n = {
                        position: new o.Vector3,
                        direction: new o.Vector3,
                        color: new o.Color,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new o.Vector2
                    };
                    break;
                case"PointLight":
                    n = {
                        position: new o.Vector3,
                        color: new o.Color,
                        distance: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new o.Vector2
                    };
                    break;
                case"HemisphereLight":
                    n = {direction: new o.Vector3, skyColor: new o.Color, groundColor: new o.Color}
            }
            return t[e.id] = n, n
        }
    }, o.WebGLObjects = function (t, e, n) {
        function r(e) {
            var n = h.get(e);
            e.geometry instanceof o.Geometry && n.updateFromObject(e);
            var r = n.index, a = n.attributes;
            null !== r && i(r, t.ELEMENT_ARRAY_BUFFER);
            for (var s in a)i(a[s], t.ARRAY_BUFFER);
            var l = n.morphAttributes;
            for (var s in l)for (var c = l[s], u = 0, f = c.length; u < f; u++)i(c[u], t.ARRAY_BUFFER);
            return n
        }

        function i(t, n) {
            var r = t instanceof o.InterleavedBufferAttribute ? t.data : t, i = e.get(r);
            void 0 === i.__webglBuffer ? a(i, r, n) : i.version !== r.version && s(i, r, n)
        }

        function a(e, n, r) {
            e.__webglBuffer = t.createBuffer(), t.bindBuffer(r, e.__webglBuffer);
            var i = n.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW;
            t.bufferData(r, n.array, i), e.version = n.version
        }

        function s(e, n, r) {
            t.bindBuffer(r, e.__webglBuffer), n.dynamic === !1 || n.updateRange.count === -1 ? t.bufferSubData(r, 0, n.array) : 0 === n.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(r, n.updateRange.offset * n.array.BYTES_PER_ELEMENT, n.array.subarray(n.updateRange.offset, n.updateRange.offset + n.updateRange.count)), n.updateRange.count = 0), e.version = n.version
        }

        function l(t) {
            return t instanceof o.InterleavedBufferAttribute ? e.get(t.data).__webglBuffer : e.get(t).__webglBuffer
        }

        function c(n) {
            var r = e.get(n);
            if (void 0 !== r.wireframe)return r.wireframe;
            var a = [], s = n.index, l = n.attributes, c = l.position;
            if (null !== s)for (var h = {}, f = s.array, d = 0, p = f.length; d < p; d += 3) {
                var m = f[d + 0], v = f[d + 1], g = f[d + 2];
                u(h, m, v) && a.push(m, v), u(h, v, g) && a.push(v, g), u(h, g, m) && a.push(g, m)
            } else for (var f = l.position.array, d = 0, p = f.length / 3 - 1; d < p; d += 3) {
                var m = d + 0, v = d + 1, g = d + 2;
                a.push(m, v, v, g, g, m)
            }
            var y = c.count > 65535 ? Uint32Array : Uint16Array, x = new o.BufferAttribute(new y(a), 1);
            return i(x, t.ELEMENT_ARRAY_BUFFER), r.wireframe = x, x
        }

        function u(t, e, n) {
            if (e > n) {
                var r = e;
                e = n, n = r
            }
            var i = t[e];
            return void 0 === i ? (t[e] = [n], !0) : i.indexOf(n) === -1 && (i.push(n), !0)
        }

        var h = new o.WebGLGeometries(t, e, n);
        this.getAttributeBuffer = l, this.getWireframeAttribute = c, this.update = r
    }, o.WebGLProgram = function () {
        function t(t) {
            switch (t) {
                case o.LinearEncoding:
                    return ["Linear", "( value )"];
                case o.sRGBEncoding:
                    return ["sRGB", "( value )"];
                case o.RGBEEncoding:
                    return ["RGBE", "( value )"];
                case o.RGBM7Encoding:
                    return ["RGBM", "( value, 7.0 )"];
                case o.RGBM16Encoding:
                    return ["RGBM", "( value, 16.0 )"];
                case o.RGBDEncoding:
                    return ["RGBD", "( value, 256.0 )"];
                case o.GammaEncoding:
                    return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
                default:
                    throw new Error("unsupported encoding: " + t)
            }
        }

        function e(e, n) {
            var r = t(n);
            return "vec4 " + e + "( vec4 value ) { return " + r[0] + "ToLinear" + r[1] + "; }"
        }

        function n(e, n) {
            var r = t(n);
            return "vec4 " + e + "( vec4 value ) { return LinearTo" + r[0] + r[1] + "; }"
        }

        function r(t, e) {
            var n;
            switch (e) {
                case o.LinearToneMapping:
                    n = "Linear";
                    break;
                case o.ReinhardToneMapping:
                    n = "Reinhard";
                    break;
                case o.Uncharted2ToneMapping:
                    n = "Uncharted2";
                    break;
                case o.CineonToneMapping:
                    n = "OptimizedCineon";
                    break;
                default:
                    throw new Error("unsupported toneMapping: " + e)
            }
            return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
        }

        function i(t, e, n) {
            t = t || {};
            var r = [t.derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && n.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && n.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && n.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""];
            return r.filter(l).join("\n")
        }

        function a(t) {
            var e = [];
            for (var n in t) {
                var r = t[n];
                r !== !1 && e.push("#define " + n + " " + r)
            }
            return e.join("\n")
        }

        function s(t, e, n) {
            for (var r = {}, i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), o = 0; o < i; o++) {
                var a = t.getActiveAttrib(e, o), s = a.name;
                r[s] = t.getAttribLocation(e, s)
            }
            return r
        }

        function l(t) {
            return "" !== t
        }

        function c(t, e) {
            return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
        }

        function u(t) {
            function e(t, e) {
                var n = o.ShaderChunk[e];
                if (void 0 === n)throw new Error("Can not resolve #include <" + e + ">");
                return u(n)
            }

            var n = /#include +<([\w\d.]+)>/g;
            return t.replace(n, e)
        }

        function h(t) {
            function e(t, e, n, r) {
                for (var i = "", o = parseInt(e); o < parseInt(n); o++)i += r.replace(/\[ i \]/g, "[ " + o + " ]");
                return i
            }

            var n = /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
            return t.replace(n, e)
        }

        var f = 0;
        return function (t, d, p, m) {
            var v = t.context, g = p.extensions, y = p.defines, x = p.__webglShader.vertexShader, _ = p.__webglShader.fragmentShader, b = "SHADOWMAP_TYPE_BASIC";
            m.shadowMapType === o.PCFShadowMap ? b = "SHADOWMAP_TYPE_PCF" : m.shadowMapType === o.PCFSoftShadowMap && (b = "SHADOWMAP_TYPE_PCF_SOFT");
            var w = "ENVMAP_TYPE_CUBE", M = "ENVMAP_MODE_REFLECTION", S = "ENVMAP_BLENDING_MULTIPLY";
            if (m.envMap) {
                switch (p.envMap.mapping) {
                    case o.CubeReflectionMapping:
                    case o.CubeRefractionMapping:
                        w = "ENVMAP_TYPE_CUBE";
                        break;
                    case o.CubeUVReflectionMapping:
                    case o.CubeUVRefractionMapping:
                        w = "ENVMAP_TYPE_CUBE_UV";
                        break;
                    case o.EquirectangularReflectionMapping:
                    case o.EquirectangularRefractionMapping:
                        w = "ENVMAP_TYPE_EQUIREC";
                        break;
                    case o.SphericalReflectionMapping:
                        w = "ENVMAP_TYPE_SPHERE"
                }
                switch (p.envMap.mapping) {
                    case o.CubeRefractionMapping:
                    case o.EquirectangularRefractionMapping:
                        M = "ENVMAP_MODE_REFRACTION"
                }
                switch (p.combine) {
                    case o.MultiplyOperation:
                        S = "ENVMAP_BLENDING_MULTIPLY";
                        break;
                    case o.MixOperation:
                        S = "ENVMAP_BLENDING_MIX";
                        break;
                    case o.AddOperation:
                        S = "ENVMAP_BLENDING_ADD"
                }
            }
            var E, T, A = t.gammaFactor > 0 ? t.gammaFactor : 1, L = i(g, m, t.extensions), C = a(y), P = v.createProgram();
            p instanceof o.RawShaderMaterial ? (E = [C].filter(l).join("\n"), T = [C].filter(l).join("\n")) : (E = ["precision " + m.precision + " float;", "precision " + m.precision + " int;", "#define SHADER_NAME " + p.__webglShader.name, C, m.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + A, "#define MAX_BONES " + m.maxBones, m.map ? "#define USE_MAP" : "", m.envMap ? "#define USE_ENVMAP" : "", m.envMap ? "#define " + M : "", m.lightMap ? "#define USE_LIGHTMAP" : "", m.aoMap ? "#define USE_AOMAP" : "", m.emissiveMap ? "#define USE_EMISSIVEMAP" : "", m.bumpMap ? "#define USE_BUMPMAP" : "", m.normalMap ? "#define USE_NORMALMAP" : "", m.displacementMap && m.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", m.specularMap ? "#define USE_SPECULARMAP" : "", m.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", m.metalnessMap ? "#define USE_METALNESSMAP" : "", m.alphaMap ? "#define USE_ALPHAMAP" : "", m.vertexColors ? "#define USE_COLOR" : "", m.flatShading ? "#define FLAT_SHADED" : "", m.skinning ? "#define USE_SKINNING" : "", m.useVertexTexture ? "#define BONE_TEXTURE" : "", m.morphTargets ? "#define USE_MORPHTARGETS" : "", m.morphNormals && m.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", m.doubleSided ? "#define DOUBLE_SIDED" : "", m.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + m.numClippingPlanes, m.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", m.shadowMapEnabled ? "#define " + b : "", m.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", m.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", m.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(l).join("\n"), T = [L, "precision " + m.precision + " float;", "precision " + m.precision + " int;", "#define SHADER_NAME " + p.__webglShader.name, C, m.alphaTest ? "#define ALPHATEST " + m.alphaTest : "", "#define GAMMA_FACTOR " + A, m.useFog && m.fog ? "#define USE_FOG" : "", m.useFog && m.fogExp ? "#define FOG_EXP2" : "", m.map ? "#define USE_MAP" : "", m.envMap ? "#define USE_ENVMAP" : "", m.envMap ? "#define " + w : "", m.envMap ? "#define " + M : "", m.envMap ? "#define " + S : "", m.lightMap ? "#define USE_LIGHTMAP" : "", m.aoMap ? "#define USE_AOMAP" : "", m.emissiveMap ? "#define USE_EMISSIVEMAP" : "", m.bumpMap ? "#define USE_BUMPMAP" : "", m.normalMap ? "#define USE_NORMALMAP" : "", m.specularMap ? "#define USE_SPECULARMAP" : "", m.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", m.metalnessMap ? "#define USE_METALNESSMAP" : "", m.alphaMap ? "#define USE_ALPHAMAP" : "", m.vertexColors ? "#define USE_COLOR" : "", m.flatShading ? "#define FLAT_SHADED" : "", m.doubleSided ? "#define DOUBLE_SIDED" : "", m.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + m.numClippingPlanes, m.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", m.shadowMapEnabled ? "#define " + b : "", m.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", m.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", m.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", m.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", m.envMap && t.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", m.toneMapping !== o.NoToneMapping ? "#define TONE_MAPPING" : "", m.toneMapping !== o.NoToneMapping ? o.ShaderChunk.tonemapping_pars_fragment : "", m.toneMapping !== o.NoToneMapping ? r("toneMapping", m.toneMapping) : "", m.outputEncoding || m.mapEncoding || m.envMapEncoding || m.emissiveMapEncoding ? o.ShaderChunk.encodings_pars_fragment : "", m.mapEncoding ? e("mapTexelToLinear", m.mapEncoding) : "", m.envMapEncoding ? e("envMapTexelToLinear", m.envMapEncoding) : "", m.emissiveMapEncoding ? e("emissiveMapTexelToLinear", m.emissiveMapEncoding) : "", m.outputEncoding ? n("linearToOutputTexel", m.outputEncoding) : "", m.depthPacking ? "#define DEPTH_PACKING " + p.depthPacking : "", "\n"].filter(l).join("\n")), x = u(x, m), x = c(x, m), _ = u(_, m), _ = c(_, m), p instanceof o.ShaderMaterial == !1 && (x = h(x), _ = h(_));
            var R = E + x, I = T + _, F = o.WebGLShader(v, v.VERTEX_SHADER, R), O = o.WebGLShader(v, v.FRAGMENT_SHADER, I);
            v.attachShader(P, F), v.attachShader(P, O), void 0 !== p.index0AttributeName ? v.bindAttribLocation(P, 0, p.index0AttributeName) : m.morphTargets === !0 && v.bindAttribLocation(P, 0, "position"), v.linkProgram(P);
            var B = v.getProgramInfoLog(P), U = v.getShaderInfoLog(F), D = v.getShaderInfoLog(O), N = !0, z = !0;
            v.getProgramParameter(P, v.LINK_STATUS) === !1 ? (N = !1, console.error("THREE.WebGLProgram: shader error: ", v.getError(), "gl.VALIDATE_STATUS", v.getProgramParameter(P, v.VALIDATE_STATUS), "gl.getProgramInfoLog", B, U, D)) : "" !== B ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", B) : "" !== U && "" !== D || (z = !1), z && (this.diagnostics = {
                runnable: N,
                material: p,
                programLog: B,
                vertexShader: {log: U, prefix: E},
                fragmentShader: {log: D, prefix: T}
            }), v.deleteShader(F), v.deleteShader(O);
            var G;
            this.getUniforms = function () {
                return void 0 === G && (G = new o.WebGLUniforms(v, P, t)), G
            };
            var V;
            return this.getAttributes = function () {
                return void 0 === V && (V = s(v, P)), V
            }, this.destroy = function () {
                v.deleteProgram(P), this.program = void 0
            }, Object.defineProperties(this, {
                uniforms: {
                    get: function () {
                        return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
                    }
                }, attributes: {
                    get: function () {
                        return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
                    }
                }
            }), this.id = f++, this.code = d, this.usedTimes = 1, this.program = P, this.vertexShader = F, this.fragmentShader = O, this
        }
    }(), o.WebGLPrograms = function (t, e) {
        function n(t) {
            if (e.floatVertexTextures && t && t.skeleton && t.skeleton.useVertexTexture)return 1024;
            var n = e.maxVertexUniforms, r = Math.floor((n - 20) / 4), i = r;
            return void 0 !== t && t instanceof o.SkinnedMesh && (i = Math.min(t.skeleton.bones.length, i), i < t.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + t.skeleton.bones.length + ", this GPU supports just " + i + " (try OpenGL instead of ANGLE)")), i
        }

        function r(t, e) {
            var n;
            return t ? t instanceof o.Texture ? n = t.encoding : t instanceof o.WebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), n = t.texture.encoding) : n = o.LinearEncoding, n === o.LinearEncoding && e && (n = o.GammaEncoding), n
        }

        var i = [], a = {
            MeshDepthMaterial: "depth",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points"
        }, s = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "depthPacking"];
        this.getParameters = function (i, s, l, c, u) {
            var h = a[i.type], f = n(u), d = t.getPrecision();
            null !== i.precision && (d = e.getMaxPrecision(i.precision), d !== i.precision && console.warn("THREE.WebGLProgram.getParameters:", i.precision, "not supported, using", d, "instead."));
            var p = t.getCurrentRenderTarget(), m = {
                shaderID: h,
                precision: d,
                supportsVertexTextures: e.vertexTextures,
                outputEncoding: r(p ? p.texture : null, t.gammaOutput),
                map: !!i.map,
                mapEncoding: r(i.map, t.gammaInput),
                envMap: !!i.envMap,
                envMapMode: i.envMap && i.envMap.mapping,
                envMapEncoding: r(i.envMap, t.gammaInput),
                envMapCubeUV: !!i.envMap && (i.envMap.mapping === o.CubeUVReflectionMapping || i.envMap.mapping === o.CubeUVRefractionMapping),
                lightMap: !!i.lightMap,
                aoMap: !!i.aoMap,
                emissiveMap: !!i.emissiveMap,
                emissiveMapEncoding: r(i.emissiveMap, t.gammaInput),
                bumpMap: !!i.bumpMap,
                normalMap: !!i.normalMap,
                displacementMap: !!i.displacementMap,
                roughnessMap: !!i.roughnessMap,
                metalnessMap: !!i.metalnessMap,
                specularMap: !!i.specularMap,
                alphaMap: !!i.alphaMap,
                combine: i.combine,
                vertexColors: i.vertexColors,
                fog: l,
                useFog: i.fog,
                fogExp: l instanceof o.FogExp2,
                flatShading: i.shading === o.FlatShading,
                sizeAttenuation: i.sizeAttenuation,
                logarithmicDepthBuffer: e.logarithmicDepthBuffer,
                skinning: i.skinning,
                maxBones: f,
                useVertexTexture: e.floatVertexTextures && u && u.skeleton && u.skeleton.useVertexTexture,
                morphTargets: i.morphTargets,
                morphNormals: i.morphNormals,
                maxMorphTargets: t.maxMorphTargets,
                maxMorphNormals: t.maxMorphNormals,
                numDirLights: s.directional.length,
                numPointLights: s.point.length,
                numSpotLights: s.spot.length,
                numHemiLights: s.hemi.length,
                numClippingPlanes: c,
                shadowMapEnabled: t.shadowMap.enabled && u.receiveShadow && s.shadows.length > 0,
                shadowMapType: t.shadowMap.type,
                toneMapping: t.toneMapping,
                physicallyCorrectLights: t.physicallyCorrectLights,
                premultipliedAlpha: i.premultipliedAlpha,
                alphaTest: i.alphaTest,
                doubleSided: i.side === o.DoubleSide,
                flipSided: i.side === o.BackSide,
                depthPacking: void 0 !== i.depthPacking && i.depthPacking
            };
            return m
        }, this.getProgramCode = function (t, e) {
            var n = [];
            if (e.shaderID ? n.push(e.shaderID) : (n.push(t.fragmentShader), n.push(t.vertexShader)), void 0 !== t.defines)for (var r in t.defines)n.push(r), n.push(t.defines[r]);
            for (var i = 0; i < s.length; i++)n.push(e[s[i]]);
            return n.join()
        }, this.acquireProgram = function (e, n, r) {
            for (var a, s = 0, l = i.length; s < l; s++) {
                var c = i[s];
                if (c.code === r) {
                    a = c, ++a.usedTimes;
                    break
                }
            }
            return void 0 === a && (a = new o.WebGLProgram(t, r, e, n), i.push(a)), a
        }, this.releaseProgram = function (t) {
            if (0 === --t.usedTimes) {
                var e = i.indexOf(t);
                i[e] = i[i.length - 1], i.pop(), t.destroy()
            }
        }, this.programs = i
    }, o.WebGLProperties = function () {
        var t = {};
        this.get = function (e) {
            var n = e.uuid, r = t[n];
            return void 0 === r && (r = {}, t[n] = r), r
        }, this.delete = function (e) {
            delete t[e.uuid]
        }, this.clear = function () {
            t = {}
        }
    }, o.WebGLShader = function () {
        function t(t) {
            for (var e = t.split("\n"), n = 0; n < e.length; n++)e[n] = n + 1 + ": " + e[n];
            return e.join("\n")
        }

        return function (e, n, r) {
            var i = e.createShader(n);
            return e.shaderSource(i, r), e.compileShader(i), e.getShaderParameter(i, e.COMPILE_STATUS) === !1 && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== e.getShaderInfoLog(i) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", n === e.VERTEX_SHADER ? "vertex" : "fragment", e.getShaderInfoLog(i), t(r)), i
        }
    }(), o.WebGLShadowMap = function (t, e, n) {
        function r(e, n, r, i) {
            var a = e.geometry, s = null, l = y, c = e.customDepthMaterial;
            if (r && (l = x, c = e.customDistanceMaterial), c) s = c; else {
                var u = void 0 !== a.morphTargets && a.morphTargets.length > 0 && n.morphTargets, h = e instanceof o.SkinnedMesh && n.skinning, f = 0;
                u && (f |= m), h && (f |= v), s = l[f]
            }
            if (t.localClippingEnabled && n.clipShadows === !0 && 0 !== n.clippingPlanes.length) {
                var d = s.uuid, p = n.uuid, g = _[d];
                void 0 === g && (g = {}, _[d] = g);
                var b = g[p];
                void 0 === b && (b = s.clone(), g[p] = b), s = b
            }
            s.visible = n.visible, s.wireframe = n.wireframe;
            var w = n.side;
            return I.renderSingleSided && w == o.DoubleSide && (w = o.FrontSide), I.renderReverseSided && (w === o.FrontSide ? w = o.BackSide : w === o.BackSide && (w = o.FrontSide)), s.side = w, s.clipShadows = n.clipShadows, s.clippingPlanes = n.clippingPlanes, s.wireframeLinewidth = n.wireframeLinewidth, s.linewidth = n.linewidth, r && void 0 !== s.uniforms.lightPos && s.uniforms.lightPos.value.copy(i), s
        }

        function i(t, e, n) {
            if (t.visible !== !1) {
                if (t.layers.test(e.layers) && (t instanceof o.Mesh || t instanceof o.Line || t instanceof o.Points) && t.castShadow && (t.frustumCulled === !1 || l.intersectsObject(t) === !0)) {
                    var r = t.material;
                    r.visible === !0 && (t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), p.push(t))
                }
                for (var a = t.children, s = 0, c = a.length; s < c; s++)i(a[s], e, n)
            }
        }

        var a = t.context, s = t.state, l = new o.Frustum, c = new o.Matrix4, u = e.shadows, h = new o.Vector2, f = new o.Vector3, d = new o.Vector3, p = [], m = 1, v = 2, g = (m | v) + 1, y = new Array(g), x = new Array(g), _ = {}, b = [new o.Vector3(1, 0, 0), new o.Vector3(-1, 0, 0), new o.Vector3(0, 0, 1), new o.Vector3(0, 0, -1), new o.Vector3(0, 1, 0), new o.Vector3(0, -1, 0)], w = [new o.Vector3(0, 1, 0), new o.Vector3(0, 1, 0), new o.Vector3(0, 1, 0), new o.Vector3(0, 1, 0), new o.Vector3(0, 0, 1), new o.Vector3(0, 0, -1)], M = [new o.Vector4, new o.Vector4, new o.Vector4, new o.Vector4, new o.Vector4, new o.Vector4], S = new o.MeshDepthMaterial;
        S.depthPacking = o.RGBADepthPacking, S.clipping = !0;
        for (var E = o.ShaderLib.distanceRGBA, T = o.UniformsUtils.clone(E.uniforms), A = 0; A !== g; ++A) {
            var L = 0 !== (A & m), C = 0 !== (A & v), P = S.clone();
            P.morphTargets = L, P.skinning = C, y[A] = P;
            var R = new o.ShaderMaterial({
                defines: {USE_SHADOWMAP: ""},
                uniforms: T,
                vertexShader: E.vertexShader,
                fragmentShader: E.fragmentShader,
                morphTargets: L,
                skinning: C,
                clipping: !0
            });
            x[A] = R
        }
        var I = this;
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = o.PCFShadowMap, this.renderReverseSided = !0, this.renderSingleSided = !0, this.render = function (e, m) {
            if (I.enabled !== !1 && (I.autoUpdate !== !1 || I.needsUpdate !== !1) && 0 !== u.length) {
                s.clearColor(1, 1, 1, 1), s.disable(a.BLEND), s.setDepthTest(!0), s.setScissorTest(!1);
                for (var v, g, y = 0, x = u.length; y < x; y++) {
                    var _ = u[y], S = _.shadow;
                    if (void 0 !== S) {
                        var E = S.camera;
                        if (h.copy(S.mapSize), _ instanceof o.PointLight) {
                            v = 6, g = !0;
                            var T = h.x, A = h.y;
                            M[0].set(2 * T, A, T, A), M[1].set(0, A, T, A), M[2].set(3 * T, A, T, A), M[3].set(T, A, T, A), M[4].set(3 * T, 0, T, A), M[5].set(T, 0, T, A), h.x *= 4, h.y *= 2
                        } else v = 1, g = !1;
                        if (null === S.map) {
                            var L = {minFilter: o.NearestFilter, magFilter: o.NearestFilter, format: o.RGBAFormat};
                            S.map = new o.WebGLRenderTarget(h.x, h.y, L), E.updateProjectionMatrix()
                        }
                        S instanceof o.SpotLightShadow && S.update(_);
                        var C = S.map, P = S.matrix;
                        d.setFromMatrixPosition(_.matrixWorld), E.position.copy(d), t.setRenderTarget(C), t.clear();
                        for (var R = 0; R < v; R++) {
                            if (g) {
                                f.copy(E.position), f.add(b[R]), E.up.copy(w[R]), E.lookAt(f);
                                var F = M[R];
                                s.viewport(F)
                            } else f.setFromMatrixPosition(_.target.matrixWorld), E.lookAt(f);
                            E.updateMatrixWorld(), E.matrixWorldInverse.getInverse(E.matrixWorld), P.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), P.multiply(E.projectionMatrix), P.multiply(E.matrixWorldInverse), c.multiplyMatrices(E.projectionMatrix, E.matrixWorldInverse), l.setFromMatrix(c), p.length = 0, i(e, m, E);
                            for (var O = 0, B = p.length; O < B; O++) {
                                var U = p[O], D = n.update(U), N = U.material;
                                if (N instanceof o.MultiMaterial)for (var z = D.groups, G = N.materials, V = 0, k = z.length; V < k; V++) {
                                    var j = z[V], H = G[j.materialIndex];
                                    if (H.visible === !0) {
                                        var W = r(U, H, g, d);
                                        t.renderBufferDirect(E, null, D, W, U, j)
                                    }
                                } else {
                                    var W = r(U, N, g, d);
                                    t.renderBufferDirect(E, null, D, W, U, null)
                                }
                            }
                        }
                    } else console.warn("THREE.WebGLShadowMap:", _, "has no shadow.")
                }
                var X = t.getClearColor(), q = t.getClearAlpha();
                t.setClearColor(X, q), I.needsUpdate = !1
            }
        }
    }, o.WebGLState = function (t, e, n) {
        function r(e, n, r) {
            var i = new Uint8Array(4), o = t.createTexture();
            t.bindTexture(e, o), t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
            for (var a = 0; a < r; a++)t.texImage2D(n + a, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, i);
            return o
        }

        var i = this;
        this.buffers = {
            color: new o.WebGLColorBuffer(t, this),
            depth: new o.WebGLDepthBuffer(t, this),
            stencil: new o.WebGLStencilBuffer(t, this)
        };
        var a = t.getParameter(t.MAX_VERTEX_ATTRIBS), s = new Uint8Array(a), l = new Uint8Array(a), c = new Uint8Array(a), u = {}, h = null, f = null, d = null, p = null, m = null, v = null, g = null, y = null, x = !1, _ = null, b = null, w = null, M = null, S = null, E = null, T = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), A = null, L = {}, C = new o.Vector4, P = new o.Vector4, R = {};
        R[t.TEXTURE_2D] = r(t.TEXTURE_2D, t.TEXTURE_2D, 1), R[t.TEXTURE_CUBE_MAP] = r(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6), this.init = function () {
            this.clearColor(0, 0, 0, 1), this.clearDepth(1), this.clearStencil(0), this.enable(t.DEPTH_TEST), this.setDepthFunc(o.LessEqualDepth), this.setFlipSided(!1), this.setCullFace(o.CullFaceBack), this.enable(t.CULL_FACE), this.enable(t.BLEND), this.setBlending(o.NormalBlending)
        }, this.initAttributes = function () {
            for (var t = 0, e = s.length; t < e; t++)s[t] = 0
        }, this.enableAttribute = function (n) {
            if (s[n] = 1, 0 === l[n] && (t.enableVertexAttribArray(n), l[n] = 1), 0 !== c[n]) {
                var r = e.get("ANGLE_instanced_arrays");
                r.vertexAttribDivisorANGLE(n, 0), c[n] = 0
            }
        }, this.enableAttributeAndDivisor = function (e, n, r) {
            s[e] = 1, 0 === l[e] && (t.enableVertexAttribArray(e), l[e] = 1), c[e] !== n && (r.vertexAttribDivisorANGLE(e, n), c[e] = n)
        }, this.disableUnusedAttributes = function () {
            for (var e = 0, n = l.length; e !== n; ++e)l[e] !== s[e] && (t.disableVertexAttribArray(e), l[e] = 0)
        }, this.enable = function (e) {
            u[e] !== !0 && (t.enable(e), u[e] = !0)
        }, this.disable = function (e) {
            u[e] !== !1 && (t.disable(e), u[e] = !1)
        }, this.getCompressedTextureFormats = function () {
            if (null === h && (h = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1")))for (var n = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), r = 0; r < n.length; r++)h.push(n[r]);
            return h
        }, this.setBlending = function (e, r, i, a, s, l, c, u) {
            return e === o.NoBlending ? (this.disable(t.BLEND), void(f = e)) : (this.enable(t.BLEND), e === f && u === x || (e === o.AdditiveBlending ? u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE, t.ONE, t.ONE)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.SRC_ALPHA, t.ONE)) : e === o.SubtractiveBlending ? u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR)) : e === o.MultiplyBlending ? u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.SRC_COLOR)) : u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)), f = e, x = u), void(e === o.CustomBlending ? (s = s || r, l = l || i, c = c || a, r === d && s === v || (t.blendEquationSeparate(n(r), n(s)), d = r, v = s), i === p && a === m && l === g && c === y || (t.blendFuncSeparate(n(i), n(a), n(l), n(c)), p = i, m = a, g = l, y = c)) : (d = null, p = null, m = null, v = null, g = null, y = null)))
        }, this.setColorWrite = function (t) {
            this.buffers.color.setMask(t)
        }, this.setDepthTest = function (t) {
            this.buffers.depth.setTest(t)
        }, this.setDepthWrite = function (t) {
            this.buffers.depth.setMask(t)
        }, this.setDepthFunc = function (t) {
            this.buffers.depth.setFunc(t)
        }, this.setStencilTest = function (t) {
            this.buffers.stencil.setTest(t)
        }, this.setStencilWrite = function (t) {
            this.buffers.stencil.setMask(t)
        }, this.setStencilFunc = function (t, e, n) {
            this.buffers.stencil.setFunc(t, e, n)
        }, this.setStencilOp = function (t, e, n) {
            this.buffers.stencil.setOp(t, e, n)
        }, this.setFlipSided = function (e) {
            _ !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), _ = e)
        }, this.setCullFace = function (e) {
            e !== o.CullFaceNone ? (this.enable(t.CULL_FACE), e !== b && (e === o.CullFaceBack ? t.cullFace(t.BACK) : e === o.CullFaceFront ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : this.disable(t.CULL_FACE), b = e
        }, this.setLineWidth = function (e) {
            e !== w && (t.lineWidth(e),
              w = e)
        }, this.setPolygonOffset = function (e, n, r) {
            e ? (this.enable(t.POLYGON_OFFSET_FILL), M === n && S === r || (t.polygonOffset(n, r), M = n, S = r)) : this.disable(t.POLYGON_OFFSET_FILL)
        }, this.getScissorTest = function () {
            return E
        }, this.setScissorTest = function (e) {
            E = e, e ? this.enable(t.SCISSOR_TEST) : this.disable(t.SCISSOR_TEST)
        }, this.activeTexture = function (e) {
            void 0 === e && (e = t.TEXTURE0 + T - 1), A !== e && (t.activeTexture(e), A = e)
        }, this.bindTexture = function (e, n) {
            null === A && i.activeTexture();
            var r = L[A];
            void 0 === r && (r = {
                type: void 0,
                texture: void 0
            }, L[A] = r), r.type === e && r.texture === n || (t.bindTexture(e, n || R[e]), r.type = e, r.texture = n)
        }, this.compressedTexImage2D = function () {
            try {
                t.compressedTexImage2D.apply(t, arguments)
            } catch (t) {
                console.error(t)
            }
        }, this.texImage2D = function () {
            try {
                t.texImage2D.apply(t, arguments)
            } catch (t) {
                console.error(t)
            }
        }, this.clearColor = function (t, e, n, r) {
            this.buffers.color.setClear(t, e, n, r)
        }, this.clearDepth = function (t) {
            this.buffers.depth.setClear(t)
        }, this.clearStencil = function (t) {
            this.buffers.stencil.setClear(t)
        }, this.scissor = function (e) {
            C.equals(e) === !1 && (t.scissor(e.x, e.y, e.z, e.w), C.copy(e))
        }, this.viewport = function (e) {
            P.equals(e) === !1 && (t.viewport(e.x, e.y, e.z, e.w), P.copy(e))
        }, this.reset = function () {
            for (var e = 0; e < l.length; e++)1 === l[e] && (t.disableVertexAttribArray(e), l[e] = 0);
            u = {}, h = null, A = null, L = {}, f = null, _ = null, b = null, this.buffers.color.reset(), this.buffers.depth.reset(), this.buffers.stencil.reset()
        }
    }, o.WebGLColorBuffer = function (t, e) {
        var n = !1, r = new o.Vector4, i = null, a = new o.Vector4;
        this.setMask = function (e) {
            i === e || n || (t.colorMask(e, e, e, e), i = e)
        }, this.setLocked = function (t) {
            n = t
        }, this.setClear = function (e, n, i, o) {
            r.set(e, n, i, o), a.equals(r) === !1 && (t.clearColor(e, n, i, o), a.copy(r))
        }, this.reset = function () {
            n = !1, i = null, a = new o.Vector4
        }
    }, o.WebGLDepthBuffer = function (t, e) {
        var n = !1, r = null, i = null, a = null;
        this.setTest = function (n) {
            n ? e.enable(t.DEPTH_TEST) : e.disable(t.DEPTH_TEST)
        }, this.setMask = function (e) {
            r === e || n || (t.depthMask(e), r = e)
        }, this.setFunc = function (e) {
            if (i !== e) {
                if (e)switch (e) {
                    case o.NeverDepth:
                        t.depthFunc(t.NEVER);
                        break;
                    case o.AlwaysDepth:
                        t.depthFunc(t.ALWAYS);
                        break;
                    case o.LessDepth:
                        t.depthFunc(t.LESS);
                        break;
                    case o.LessEqualDepth:
                        t.depthFunc(t.LEQUAL);
                        break;
                    case o.EqualDepth:
                        t.depthFunc(t.EQUAL);
                        break;
                    case o.GreaterEqualDepth:
                        t.depthFunc(t.GEQUAL);
                        break;
                    case o.GreaterDepth:
                        t.depthFunc(t.GREATER);
                        break;
                    case o.NotEqualDepth:
                        t.depthFunc(t.NOTEQUAL);
                        break;
                    default:
                        t.depthFunc(t.LEQUAL)
                } else t.depthFunc(t.LEQUAL);
                i = e
            }
        }, this.setLocked = function (t) {
            n = t
        }, this.setClear = function (e) {
            a !== e && (t.clearDepth(e), a = e)
        }, this.reset = function () {
            n = !1, r = null, i = null, a = null
        }
    }, o.WebGLStencilBuffer = function (t, e) {
        var n = !1, r = null, i = null, o = null, a = null, s = null, l = null, c = null, u = null;
        this.setTest = function (n) {
            n ? e.enable(t.STENCIL_TEST) : e.disable(t.STENCIL_TEST)
        }, this.setMask = function (e) {
            r === e || n || (t.stencilMask(e), r = e)
        }, this.setFunc = function (e, n, r) {
            i === e && o === n && a === r || (t.stencilFunc(e, n, r), i = e, o = n, a = r)
        }, this.setOp = function (e, n, r) {
            s === e && l === n && c === r || (t.stencilOp(e, n, r), s = e, l = n, c = r)
        }, this.setLocked = function (t) {
            n = t
        }, this.setClear = function (e) {
            u !== e && (t.clearStencil(e), u = e)
        }, this.reset = function () {
            n = !1, r = null, i = null, o = null, a = null, s = null, l = null, c = null, u = null
        }
    }, o.WebGLTextures = function (t, e, n, r, i, a, s) {
        function l(t, e) {
            if (t.width > e || t.height > e) {
                var n = e / Math.max(t.width, t.height), r = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                r.width = Math.floor(t.width * n), r.height = Math.floor(t.height * n);
                var i = r.getContext("2d");
                return i.drawImage(t, 0, 0, t.width, t.height, 0, 0, r.width, r.height), console.warn("THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + r.width + "x" + r.height, t), r
            }
            return t
        }

        function c(t) {
            return o.Math.isPowerOfTwo(t.width) && o.Math.isPowerOfTwo(t.height)
        }

        function u(t) {
            if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) {
                var e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                e.width = o.Math.nearestPowerOfTwo(t.width), e.height = o.Math.nearestPowerOfTwo(t.height);
                var n = e.getContext("2d");
                return n.drawImage(t, 0, 0, e.width, e.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + t.width + "x" + t.height + "). Resized to " + e.width + "x" + e.height, t), e
            }
            return t
        }

        function h(t) {
            return t.wrapS !== o.ClampToEdgeWrapping || t.wrapT !== o.ClampToEdgeWrapping || t.minFilter !== o.NearestFilter && t.minFilter !== o.LinearFilter
        }

        function f(e) {
            return e === o.NearestFilter || e === o.NearestMipMapNearestFilter || e === o.NearestMipMapLinearFilter ? t.NEAREST : t.LINEAR
        }

        function d(t) {
            var e = t.target;
            e.removeEventListener("dispose", d), m(e), L.textures--
        }

        function p(t) {
            var e = t.target;
            e.removeEventListener("dispose", p), v(e), L.textures--
        }

        function m(e) {
            var n = r.get(e);
            if (e.image && n.__image__webglTextureCube) t.deleteTexture(n.__image__webglTextureCube); else {
                if (void 0 === n.__webglInit)return;
                t.deleteTexture(n.__webglTexture)
            }
            r.delete(e)
        }

        function v(e) {
            var n = r.get(e), i = r.get(e.texture);
            if (e) {
                if (void 0 !== i.__webglTexture && t.deleteTexture(i.__webglTexture), e.depthTexture && e.depthTexture.dispose(), e instanceof o.WebGLRenderTargetCube)for (var a = 0; a < 6; a++)t.deleteFramebuffer(n.__webglFramebuffer[a]), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer[a]); else t.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer);
                r.delete(e.texture), r.delete(e)
            }
        }

        function g(e, i) {
            var o = r.get(e);
            if (e.version > 0 && o.__version !== e.version) {
                var a = e.image;
                if (void 0 === a) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", e); else {
                    if (a.complete !== !1)return void b(o, e, i);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", e)
                }
            }
            n.activeTexture(t.TEXTURE0 + i), n.bindTexture(t.TEXTURE_2D, o.__webglTexture)
        }

        function y(e, s) {
            var u = r.get(e);
            if (6 === e.image.length)if (e.version > 0 && u.__version !== e.version) {
                u.__image__webglTextureCube || (e.addEventListener("dispose", d), u.__image__webglTextureCube = t.createTexture(), L.textures++), n.activeTexture(t.TEXTURE0 + s), n.bindTexture(t.TEXTURE_CUBE_MAP, u.__image__webglTextureCube), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY);
                for (var h = e instanceof o.CompressedTexture, f = e.image[0] instanceof o.DataTexture, p = [], m = 0; m < 6; m++)h || f ? p[m] = f ? e.image[m].image : e.image[m] : p[m] = l(e.image[m], i.maxCubemapSize);
                var v = p[0], g = c(v), y = a(e.format), x = a(e.type);
                _(t.TEXTURE_CUBE_MAP, e, g);
                for (var m = 0; m < 6; m++)if (h)for (var b, w = p[m].mipmaps, M = 0, S = w.length; M < S; M++)b = w[M], e.format !== o.RGBAFormat && e.format !== o.RGBFormat ? n.getCompressedTextureFormats().indexOf(y) > -1 ? n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + m, M, y, b.width, b.height, 0, b.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + m, M, y, b.width, b.height, 0, y, x, b.data); else f ? n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + m, 0, y, p[m].width, p[m].height, 0, y, x, p[m].data) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + m, 0, y, y, x, p[m]);
                e.generateMipmaps && g && t.generateMipmap(t.TEXTURE_CUBE_MAP), u.__version = e.version, e.onUpdate && e.onUpdate(e)
            } else n.activeTexture(t.TEXTURE0 + s), n.bindTexture(t.TEXTURE_CUBE_MAP, u.__image__webglTextureCube)
        }

        function x(e, i) {
            n.activeTexture(t.TEXTURE0 + i), n.bindTexture(t.TEXTURE_CUBE_MAP, r.get(e).__webglTexture)
        }

        function _(n, s, l) {
            var c;
            if (l ? (t.texParameteri(n, t.TEXTURE_WRAP_S, a(s.wrapS)), t.texParameteri(n, t.TEXTURE_WRAP_T, a(s.wrapT)), t.texParameteri(n, t.TEXTURE_MAG_FILTER, a(s.magFilter)), t.texParameteri(n, t.TEXTURE_MIN_FILTER, a(s.minFilter))) : (t.texParameteri(n, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(n, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), s.wrapS === o.ClampToEdgeWrapping && s.wrapT === o.ClampToEdgeWrapping || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", s), t.texParameteri(n, t.TEXTURE_MAG_FILTER, f(s.magFilter)), t.texParameteri(n, t.TEXTURE_MIN_FILTER, f(s.minFilter)), s.minFilter !== o.NearestFilter && s.minFilter !== o.LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", s)), c = e.get("EXT_texture_filter_anisotropic")) {
                if (s.type === o.FloatType && null === e.get("OES_texture_float_linear"))return;
                if (s.type === o.HalfFloatType && null === e.get("OES_texture_half_float_linear"))return;
                (s.anisotropy > 1 || r.get(s).__currentAnisotropy) && (t.texParameterf(n, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, i.getMaxAnisotropy())), r.get(s).__currentAnisotropy = s.anisotropy)
            }
        }

        function b(e, r, s) {
            void 0 === e.__webglInit && (e.__webglInit = !0, r.addEventListener("dispose", d), e.__webglTexture = t.createTexture(), L.textures++), n.activeTexture(t.TEXTURE0 + s), n.bindTexture(t.TEXTURE_2D, e.__webglTexture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, r.unpackAlignment);
            var f = l(r.image, i.maxTextureSize);
            h(r) && c(f) === !1 && (f = u(f));
            var p = c(f), m = a(r.format), v = a(r.type);
            _(t.TEXTURE_2D, r, p);
            var g, y = r.mipmaps;
            if (r instanceof o.DepthTexture) {
                var x = t.DEPTH_COMPONENT;
                if (r.type === o.FloatType) {
                    if (!C)throw new Error("Float Depth Texture only supported in WebGL2.0");
                    x = t.DEPTH_COMPONENT32F
                } else C && (x = t.DEPTH_COMPONENT16);
                n.texImage2D(t.TEXTURE_2D, 0, x, f.width, f.height, 0, m, v, null)
            } else if (r instanceof o.DataTexture)if (y.length > 0 && p) {
                for (var b = 0, w = y.length; b < w; b++)g = y[b], n.texImage2D(t.TEXTURE_2D, b, m, g.width, g.height, 0, m, v, g.data);
                r.generateMipmaps = !1
            } else n.texImage2D(t.TEXTURE_2D, 0, m, f.width, f.height, 0, m, v, f.data); else if (r instanceof o.CompressedTexture)for (var b = 0, w = y.length; b < w; b++)g = y[b], r.format !== o.RGBAFormat && r.format !== o.RGBFormat ? n.getCompressedTextureFormats().indexOf(m) > -1 ? n.compressedTexImage2D(t.TEXTURE_2D, b, m, g.width, g.height, 0, g.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(t.TEXTURE_2D, b, m, g.width, g.height, 0, m, v, g.data); else if (y.length > 0 && p) {
                for (var b = 0, w = y.length; b < w; b++)g = y[b], n.texImage2D(t.TEXTURE_2D, b, m, m, v, g);
                r.generateMipmaps = !1
            } else n.texImage2D(t.TEXTURE_2D, 0, m, m, v, f);
            r.generateMipmaps && p && t.generateMipmap(t.TEXTURE_2D), e.__version = r.version, r.onUpdate && r.onUpdate(r)
        }

        function w(e, i, o, s) {
            var l = a(i.texture.format), c = a(i.texture.type);
            n.texImage2D(s, 0, l, i.width, i.height, 0, l, c, null), t.bindFramebuffer(t.FRAMEBUFFER, e), t.framebufferTexture2D(t.FRAMEBUFFER, o, s, r.get(i.texture).__webglTexture, 0), t.bindFramebuffer(t.FRAMEBUFFER, null)
        }

        function M(e, n) {
            t.bindRenderbuffer(t.RENDERBUFFER, e), n.depthBuffer && !n.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, n.width, n.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)) : n.depthBuffer && n.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, n.width, n.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)) : t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, n.width, n.height), t.bindRenderbuffer(t.RENDERBUFFER, null)
        }

        function S(e, n) {
            var i = n instanceof o.WebGLRenderTargetCube;
            if (i)throw new Error("Depth Texture with cube render targets is not supported!");
            if (t.bindFramebuffer(t.FRAMEBUFFER, e), !(n.depthTexture instanceof o.DepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
            r.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), g(n.depthTexture, 0);
            var a = r.get(n.depthTexture).__webglTexture;
            t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, a, 0)
        }

        function E(e) {
            var n = r.get(e), i = e instanceof o.WebGLRenderTargetCube;
            if (e.depthTexture) {
                if (i)throw new Error("target.depthTexture not supported in Cube render targets");
                S(n.__webglFramebuffer, e)
            } else if (i) {
                n.__webglDepthbuffer = [];
                for (var a = 0; a < 6; a++)t.bindFramebuffer(t.FRAMEBUFFER, n.__webglFramebuffer[a]), n.__webglDepthbuffer[a] = t.createRenderbuffer(), M(n.__webglDepthbuffer[a], e)
            } else t.bindFramebuffer(t.FRAMEBUFFER, n.__webglFramebuffer), n.__webglDepthbuffer = t.createRenderbuffer(), M(n.__webglDepthbuffer, e);
            t.bindFramebuffer(t.FRAMEBUFFER, null)
        }

        function T(e) {
            var i = r.get(e), a = r.get(e.texture);
            e.addEventListener("dispose", p), a.__webglTexture = t.createTexture(), L.textures++;
            var s = e instanceof o.WebGLRenderTargetCube, l = c(e);
            if (s) {
                i.__webglFramebuffer = [];
                for (var u = 0; u < 6; u++)i.__webglFramebuffer[u] = t.createFramebuffer()
            } else i.__webglFramebuffer = t.createFramebuffer();
            if (s) {
                n.bindTexture(t.TEXTURE_CUBE_MAP, a.__webglTexture), _(t.TEXTURE_CUBE_MAP, e.texture, l);
                for (var u = 0; u < 6; u++)w(i.__webglFramebuffer[u], e, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + u);
                e.texture.generateMipmaps && l && t.generateMipmap(t.TEXTURE_CUBE_MAP), n.bindTexture(t.TEXTURE_CUBE_MAP, null)
            } else n.bindTexture(t.TEXTURE_2D, a.__webglTexture), _(t.TEXTURE_2D, e.texture, l), w(i.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, t.TEXTURE_2D), e.texture.generateMipmaps && l && t.generateMipmap(t.TEXTURE_2D), n.bindTexture(t.TEXTURE_2D, null);
            e.depthBuffer && E(e)
        }

        function A(e) {
            var i = e.texture;
            if (i.generateMipmaps && c(e) && i.minFilter !== o.NearestFilter && i.minFilter !== o.LinearFilter) {
                var a = e instanceof o.WebGLRenderTargetCube ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D, s = r.get(i).__webglTexture;
                n.bindTexture(a, s), t.generateMipmap(a), n.bindTexture(a, null)
            }
        }

        var L = s.memory, C = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext;
        this.setTexture2D = g, this.setTextureCube = y, this.setTextureCubeDynamic = x, this.setupRenderTarget = T, this.updateRenderTargetMipmap = A
    }, o.WebGLUniforms = function () {
        var t = new o.Texture, e = new o.CubeTexture, n = function () {
            this.seq = [], this.map = {}
        }, r = [], i = [], a = function (t, e, n) {
            var i = t[0];
            if (i <= 0 || i > 0)return t;
            var o = e * n, a = r[o];
            if (void 0 === a && (a = new Float32Array(o), r[o] = a), 0 !== e) {
                i.toArray(a, 0);
                for (var s = 1, l = 0; s !== e; ++s)l += n, t[s].toArray(a, l)
            }
            return a
        }, s = function (t, e) {
            var n = i[e];
            void 0 === n && (n = new Int32Array(e), i[e] = n);
            for (var r = 0; r !== e; ++r)n[r] = t.allocTextureUnit();
            return n
        }, l = function (t, e) {
            t.uniform1f(this.addr, e)
        }, c = function (t, e) {
            t.uniform1i(this.addr, e)
        }, u = function (t, e) {
            void 0 === e.x ? t.uniform2fv(this.addr, e) : t.uniform2f(this.addr, e.x, e.y)
        }, h = function (t, e) {
            void 0 !== e.x ? t.uniform3f(this.addr, e.x, e.y, e.z) : void 0 !== e.r ? t.uniform3f(this.addr, e.r, e.g, e.b) : t.uniform3fv(this.addr, e)
        }, f = function (t, e) {
            void 0 === e.x ? t.uniform4fv(this.addr, e) : t.uniform4f(this.addr, e.x, e.y, e.z, e.w)
        }, d = function (t, e) {
            t.uniformMatrix2fv(this.addr, !1, e.elements || e)
        }, p = function (t, e) {
            t.uniformMatrix3fv(this.addr, !1, e.elements || e)
        }, m = function (t, e) {
            t.uniformMatrix4fv(this.addr, !1, e.elements || e)
        }, v = function (e, n, r) {
            var i = r.allocTextureUnit();
            e.uniform1i(this.addr, i), r.setTexture2D(n || t, i)
        }, g = function (t, n, r) {
            var i = r.allocTextureUnit();
            t.uniform1i(this.addr, i), r.setTextureCube(n || e, i)
        }, y = function (t, e) {
            t.uniform2iv(this.addr, e)
        }, x = function (t, e) {
            t.uniform3iv(this.addr, e)
        }, _ = function (t, e) {
            t.uniform4iv(this.addr, e)
        }, b = function (t) {
            switch (t) {
                case 5126:
                    return l;
                case 35664:
                    return u;
                case 35665:
                    return h;
                case 35666:
                    return f;
                case 35674:
                    return d;
                case 35675:
                    return p;
                case 35676:
                    return m;
                case 35678:
                    return v;
                case 35680:
                    return g;
                case 5124:
                case 35670:
                    return c;
                case 35667:
                case 35671:
                    return y;
                case 35668:
                case 35672:
                    return x;
                case 35669:
                case 35673:
                    return _
            }
        }, w = function (t, e) {
            t.uniform1fv(this.addr, e)
        }, M = function (t, e) {
            t.uniform1iv(this.addr, e)
        }, S = function (t, e) {
            t.uniform2fv(this.addr, a(e, this.size, 2))
        }, E = function (t, e) {
            t.uniform3fv(this.addr, a(e, this.size, 3))
        }, T = function (t, e) {
            t.uniform4fv(this.addr, a(e, this.size, 4))
        }, A = function (t, e) {
            t.uniformMatrix2fv(this.addr, !1, a(e, this.size, 4))
        }, L = function (t, e) {
            t.uniformMatrix3fv(this.addr, !1, a(e, this.size, 9))
        }, C = function (t, e) {
            t.uniformMatrix4fv(this.addr, !1, a(e, this.size, 16))
        }, P = function (e, n, r) {
            var i = n.length, o = s(r, i);
            e.uniform1iv(this.addr, o);
            for (var a = 0; a !== i; ++a)r.setTexture2D(n[a] || t, o[a])
        }, R = function (t, n, r) {
            var i = n.length, o = s(r, i);
            t.uniform1iv(this.addr, o);
            for (var a = 0; a !== i; ++a)r.setTextureCube(n[a] || e, o[a])
        }, I = function (t) {
            switch (t) {
                case 5126:
                    return w;
                case 35664:
                    return S;
                case 35665:
                    return E;
                case 35666:
                    return T;
                case 35674:
                    return A;
                case 35675:
                    return L;
                case 35676:
                    return C;
                case 35678:
                    return P;
                case 35680:
                    return R;
                case 5124:
                case 35670:
                    return M;
                case 35667:
                case 35671:
                    return y;
                case 35668:
                case 35672:
                    return x;
                case 35669:
                case 35673:
                    return _
            }
        }, F = function (t, e, n) {
            this.id = t, this.addr = n, this.setValue = b(e.type)
        }, O = function (t, e, n) {
            this.id = t, this.addr = n, this.size = e.size, this.setValue = I(e.type)
        }, B = function (t) {
            this.id = t, n.call(this)
        };
        B.prototype.setValue = function (t, e) {
            for (var n = this.seq, r = 0, i = n.length; r !== i; ++r) {
                var o = n[r];
                o.setValue(t, e[o.id])
            }
        };
        var U = /([\w\d_]+)(\])?(\[|\.)?/g, D = function (t, e) {
            t.seq.push(e), t.map[e.id] = e
        }, N = function (t, e, n) {
            var r = t.name, i = r.length;
            for (U.lastIndex = 0; ;) {
                var o = U.exec(r), a = U.lastIndex, s = o[1], l = "]" === o[2], c = o[3];
                if (l && (s |= 0), void 0 === c || "[" === c && a + 2 === i) {
                    D(n, void 0 === c ? new F(s, t, e) : new O(s, t, e));
                    break
                }
                var u = n.map, h = u[s];
                void 0 === h && (h = new B(s), D(n, h)), n = h
            }
        }, z = function (t, e, r) {
            n.call(this), this.renderer = r;
            for (var i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), o = 0; o !== i; ++o) {
                var a = t.getActiveUniform(e, o), s = a.name, l = t.getUniformLocation(e, s);
                N(a, l, this)
            }
        };
        return z.prototype.setValue = function (t, e, n) {
            var r = this.map[e];
            void 0 !== r && r.setValue(t, n, this.renderer)
        }, z.prototype.set = function (t, e, n) {
            var r = this.map[n];
            void 0 !== r && r.setValue(t, e[n], this.renderer)
        }, z.prototype.setOptional = function (t, e, n) {
            var r = e[n];
            void 0 !== r && this.setValue(t, n, r)
        }, z.upload = function (t, e, n, r) {
            for (var i = 0, o = e.length; i !== o; ++i) {
                var a = e[i], s = n[a.id];
                s.needsUpdate !== !1 && a.setValue(t, s.value, r)
            }
        }, z.seqWithValue = function (t, e) {
            for (var n = [], r = 0, i = t.length; r !== i; ++r) {
                var o = t[r];
                o.id in e && n.push(o)
            }
            return n
        }, z.splitDynamic = function (t, e) {
            for (var n = null, r = t.length, i = 0, o = 0; o !== r; ++o) {
                var a = t[o], s = e[a.id];
                s && s.dynamic === !0 ? (null === n && (n = []), n.push(a)) : (i < o && (t[i] = a), ++i)
            }
            return i < r && (t.length = i), n
        }, z.evalDynamic = function (t, e, n, r) {
            for (var i = 0, o = t.length; i !== o; ++i) {
                var a = e[t[i].id], s = a.onUpdateCallback;
                void 0 !== s && s.call(a, n, r)
            }
        }, z
    }(), o.LensFlarePlugin = function (t, e) {
        function n() {
            var t = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]), e = new Uint16Array([0, 1, 2, 0, 2, 3]);
            i = d.createBuffer(), a = d.createBuffer(), d.bindBuffer(d.ARRAY_BUFFER, i), d.bufferData(d.ARRAY_BUFFER, t, d.STATIC_DRAW), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, a), d.bufferData(d.ELEMENT_ARRAY_BUFFER, e, d.STATIC_DRAW), h = d.createTexture(), f = d.createTexture(), p.bindTexture(d.TEXTURE_2D, h), d.texImage2D(d.TEXTURE_2D, 0, d.RGB, 16, 16, 0, d.RGB, d.UNSIGNED_BYTE, null), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.NEAREST), p.bindTexture(d.TEXTURE_2D, f), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, 16, 16, 0, d.RGBA, d.UNSIGNED_BYTE, null), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.NEAREST), s = {
                vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if ( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
            }, l = r(s), c = {
                vertex: d.getAttribLocation(l, "position"),
                uv: d.getAttribLocation(l, "uv")
            }, u = {
                renderType: d.getUniformLocation(l, "renderType"),
                map: d.getUniformLocation(l, "map"),
                occlusionMap: d.getUniformLocation(l, "occlusionMap"),
                opacity: d.getUniformLocation(l, "opacity"),
                color: d.getUniformLocation(l, "color"),
                scale: d.getUniformLocation(l, "scale"),
                rotation: d.getUniformLocation(l, "rotation"),
                screenPosition: d.getUniformLocation(l, "screenPosition")
            }
        }

        function r(e) {
            var n = d.createProgram(), r = d.createShader(d.FRAGMENT_SHADER), i = d.createShader(d.VERTEX_SHADER), o = "precision " + t.getPrecision() + " float;\n";
            return d.shaderSource(r, o + e.fragmentShader), d.shaderSource(i, o + e.vertexShader), d.compileShader(r), d.compileShader(i), d.attachShader(n, r), d.attachShader(n, i), d.linkProgram(n), n
        }

        var i, a, s, l, c, u, h, f, d = t.context, p = t.state;
        this.render = function (r, s, m) {
            if (0 !== e.length) {
                var v = new o.Vector3, g = m.w / m.z, y = .5 * m.z, x = .5 * m.w, _ = 16 / m.w, b = new o.Vector2(_ * g, _), w = new o.Vector3(1, 1, 0), M = new o.Vector2(1, 1), S = new o.Box2;
                S.min.set(0, 0), S.max.set(m.z - 16, m.w - 16), void 0 === l && n(), d.useProgram(l), p.initAttributes(), p.enableAttribute(c.vertex), p.enableAttribute(c.uv), p.disableUnusedAttributes(), d.uniform1i(u.occlusionMap, 0), d.uniform1i(u.map, 1), d.bindBuffer(d.ARRAY_BUFFER, i), d.vertexAttribPointer(c.vertex, 2, d.FLOAT, !1, 16, 0), d.vertexAttribPointer(c.uv, 2, d.FLOAT, !1, 16, 8), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, a), p.disable(d.CULL_FACE), p.setDepthWrite(!1);
                for (var E = 0, T = e.length; E < T; E++) {
                    _ = 16 / m.w, b.set(_ * g, _);
                    var A = e[E];
                    if (v.set(A.matrixWorld.elements[12], A.matrixWorld.elements[13], A.matrixWorld.elements[14]), v.applyMatrix4(s.matrixWorldInverse), v.applyProjection(s.projectionMatrix), w.copy(v), M.x = m.x + w.x * y + y - 8, M.y = m.y + w.y * x + x - 8, S.containsPoint(M) === !0) {
                        p.activeTexture(d.TEXTURE0), p.bindTexture(d.TEXTURE_2D, null), p.activeTexture(d.TEXTURE1), p.bindTexture(d.TEXTURE_2D, h), d.copyTexImage2D(d.TEXTURE_2D, 0, d.RGB, M.x, M.y, 16, 16, 0), d.uniform1i(u.renderType, 0), d.uniform2f(u.scale, b.x, b.y), d.uniform3f(u.screenPosition, w.x, w.y, w.z), p.disable(d.BLEND), p.enable(d.DEPTH_TEST), d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0), p.activeTexture(d.TEXTURE0), p.bindTexture(d.TEXTURE_2D, f), d.copyTexImage2D(d.TEXTURE_2D, 0, d.RGBA, M.x, M.y, 16, 16, 0), d.uniform1i(u.renderType, 1), p.disable(d.DEPTH_TEST), p.activeTexture(d.TEXTURE1), p.bindTexture(d.TEXTURE_2D, h), d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0), A.positionScreen.copy(w), A.customUpdateCallback ? A.customUpdateCallback(A) : A.updateLensFlares(), d.uniform1i(u.renderType, 2), p.enable(d.BLEND);
                        for (var L = 0, C = A.lensFlares.length; L < C; L++) {
                            var P = A.lensFlares[L];
                            P.opacity > .001 && P.scale > .001 && (w.x = P.x, w.y = P.y, w.z = P.z, _ = P.size * P.scale / m.w, b.x = _ * g, b.y = _, d.uniform3f(u.screenPosition, w.x, w.y, w.z), d.uniform2f(u.scale, b.x, b.y), d.uniform1f(u.rotation, P.rotation), d.uniform1f(u.opacity, P.opacity), d.uniform3f(u.color, P.color.r, P.color.g, P.color.b), p.setBlending(P.blending, P.blendEquation, P.blendSrc, P.blendDst), t.setTexture2D(P.texture, 1), d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0))
                        }
                    }
                }
                p.enable(d.CULL_FACE), p.enable(d.DEPTH_TEST), p.setDepthWrite(!0), t.resetGLState()
            }
        }
    }, o.SpritePlugin = function (t, e) {
        function n() {
            var t = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]), e = new Uint16Array([0, 1, 2, 0, 2, 3]);
            a = f.createBuffer(), s = f.createBuffer(), f.bindBuffer(f.ARRAY_BUFFER, a), f.bufferData(f.ARRAY_BUFFER, t, f.STATIC_DRAW), f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, s), f.bufferData(f.ELEMENT_ARRAY_BUFFER, e, f.STATIC_DRAW), l = r(), c = {
                position: f.getAttribLocation(l, "position"),
                uv: f.getAttribLocation(l, "uv")
            }, u = {
                uvOffset: f.getUniformLocation(l, "uvOffset"),
                uvScale: f.getUniformLocation(l, "uvScale"),
                rotation: f.getUniformLocation(l, "rotation"),
                scale: f.getUniformLocation(l, "scale"),
                color: f.getUniformLocation(l, "color"),
                map: f.getUniformLocation(l, "map"),
                opacity: f.getUniformLocation(l, "opacity"),
                modelViewMatrix: f.getUniformLocation(l, "modelViewMatrix"),
                projectionMatrix: f.getUniformLocation(l, "projectionMatrix"),
                fogType: f.getUniformLocation(l, "fogType"),
                fogDensity: f.getUniformLocation(l, "fogDensity"),
                fogNear: f.getUniformLocation(l, "fogNear"),
                fogFar: f.getUniformLocation(l, "fogFar"),
                fogColor: f.getUniformLocation(l, "fogColor"),
                alphaTest: f.getUniformLocation(l, "alphaTest")
            };
            var n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
            n.width = 8, n.height = 8;
            var i = n.getContext("2d");
            i.fillStyle = "white", i.fillRect(0, 0, 8, 8), h = new o.Texture(n), h.needsUpdate = !0
        }

        function r() {
            var e = f.createProgram(), n = f.createShader(f.VERTEX_SHADER), r = f.createShader(f.FRAGMENT_SHADER);
            return f.shaderSource(n, ["precision " + t.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")), f.shaderSource(r, ["precision " + t.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")), f.compileShader(n), f.compileShader(r), f.attachShader(e, n), f.attachShader(e, r), f.linkProgram(e), e
        }

        function i(t, e) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : e.id - t.id
        }

        var a, s, l, c, u, h, f = t.context, d = t.state, p = new o.Vector3, m = new o.Quaternion, v = new o.Vector3;
        this.render = function (r, g) {
            if (0 !== e.length) {
                void 0 === l && n(), f.useProgram(l), d.initAttributes(), d.enableAttribute(c.position), d.enableAttribute(c.uv), d.disableUnusedAttributes(), d.disable(f.CULL_FACE), d.enable(f.BLEND), f.bindBuffer(f.ARRAY_BUFFER, a), f.vertexAttribPointer(c.position, 2, f.FLOAT, !1, 16, 0), f.vertexAttribPointer(c.uv, 2, f.FLOAT, !1, 16, 8), f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, s), f.uniformMatrix4fv(u.projectionMatrix, !1, g.projectionMatrix.elements), d.activeTexture(f.TEXTURE0), f.uniform1i(u.map, 0);
                var y = 0, x = 0, _ = r.fog;
                _ ? (f.uniform3f(u.fogColor, _.color.r, _.color.g, _.color.b), _ instanceof o.Fog ? (f.uniform1f(u.fogNear, _.near), f.uniform1f(u.fogFar, _.far), f.uniform1i(u.fogType, 1), y = 1, x = 1) : _ instanceof o.FogExp2 && (f.uniform1f(u.fogDensity, _.density), f.uniform1i(u.fogType, 2), y = 2, x = 2)) : (f.uniform1i(u.fogType, 0), y = 0, x = 0);
                for (var b = 0, w = e.length; b < w; b++) {
                    var M = e[b];
                    M.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse, M.matrixWorld), M.z = -M.modelViewMatrix.elements[14]
                }
                e.sort(i);
                for (var S = [], b = 0, w = e.length; b < w; b++) {
                    var M = e[b], E = M.material;
                    f.uniform1f(u.alphaTest, E.alphaTest), f.uniformMatrix4fv(u.modelViewMatrix, !1, M.modelViewMatrix.elements), M.matrixWorld.decompose(p, m, v), S[0] = v.x, S[1] = v.y;
                    var T = 0;
                    r.fog && E.fog && (T = x), y !== T && (f.uniform1i(u.fogType, T), y = T), null !== E.map ? (f.uniform2f(u.uvOffset, E.map.offset.x, E.map.offset.y), f.uniform2f(u.uvScale, E.map.repeat.x, E.map.repeat.y)) : (f.uniform2f(u.uvOffset, 0, 0), f.uniform2f(u.uvScale, 1, 1)), f.uniform1f(u.opacity, E.opacity), f.uniform3f(u.color, E.color.r, E.color.g, E.color.b), f.uniform1f(u.rotation, E.rotation), f.uniform2fv(u.scale, S), d.setBlending(E.blending, E.blendEquation, E.blendSrc, E.blendDst), d.setDepthTest(E.depthTest), d.setDepthWrite(E.depthWrite), E.map ? t.setTexture2D(E.map, 0) : t.setTexture2D(h, 0), f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0)
                }
                d.enable(f.CULL_FACE), t.resetGLState()
            }
        }
    }, Object.assign(o, {
        Face4: function (t, e, n, r, i, a, s) {
            return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new o.Face3(t, e, n, i, a, s)
        }, LineStrip: 0, LinePieces: 1, MeshFaceMaterial: o.MultiMaterial, PointCloud: function (t, e) {
            return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new o.Points(t, e)
        }, Particle: o.Sprite, ParticleSystem: function (t, e) {
            return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new o.Points(t, e)
        }, PointCloudMaterial: function (t) {
            return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new o.PointsMaterial(t)
        }, ParticleBasicMaterial: function (t) {
            return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new o.PointsMaterial(t)
        }, ParticleSystemMaterial: function (t) {
            return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new o.PointsMaterial(t)
        }, Vertex: function (t, e, n) {
            return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new o.Vector3(t, e, n)
        }
    }), Object.assign(o.Box2.prototype, {
        empty: function () {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        }, isIntersectionBox: function (t) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        }
    }), Object.assign(o.Box3.prototype, {
        empty: function () {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        }, isIntersectionBox: function (t) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        }, isIntersectionSphere: function (t) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
        }
    }), Object.assign(o.Matrix3.prototype, {
        multiplyVector3: function (t) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
        }, multiplyVector3Array: function (t) {
            return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(t)
        }
    }), Object.assign(o.Matrix4.prototype, {
        extractPosition: function (t) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t)
        }, setRotationFromQuaternion: function (t) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t)
        }, multiplyVector3: function (t) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."), t.applyProjection(this)
        }, multiplyVector4: function (t) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
              t.applyMatrix4(this)
        }, multiplyVector3Array: function (t) {
            return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(t)
        }, rotateAxis: function (t) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this)
        }, crossVector: function (t) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        }, translate: function (t) {
            console.error("THREE.Matrix4: .translate() has been removed.")
        }, rotateX: function (t) {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        }, rotateY: function (t) {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        }, rotateZ: function (t) {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        }, rotateByAxis: function (t, e) {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        }
    }), Object.assign(o.Plane.prototype, {
        isIntersectionLine: function (t) {
            return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t)
        }
    }), Object.assign(o.Quaternion.prototype, {
        multiplyVector3: function (t) {
            return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this)
        }
    }), Object.assign(o.Ray.prototype, {
        isIntersectionBox: function (t) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        }, isIntersectionPlane: function (t) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t)
        }, isIntersectionSphere: function (t) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
        }
    }), Object.assign(o.Vector3.prototype, {
        setEulerFromRotationMatrix: function () {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        }, setEulerFromQuaternion: function () {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        }, getPositionFromMatrix: function (t) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t)
        }, getScaleFromMatrix: function (t) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t)
        }, getColumnFromMatrix: function (t, e) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
        }
    }), Object.assign(o.Object3D.prototype, {
        getChildByName: function (t) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t)
        }, renderDepth: function (t) {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        }, translate: function (t, e) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t)
        }
    }), Object.defineProperties(o.Object3D.prototype, {
        eulerOrder: {
            get: function () {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
            }, set: function (t) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t
            }
        }, useQuaternion: {
            get: function () {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }, set: function (t) {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    }), Object.defineProperties(o.LOD.prototype, {
        objects: {
            get: function () {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
            }
        }
    }), o.PerspectiveCamera.prototype.setLens = function (t, e) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
    }, Object.defineProperties(o.Light.prototype, {
        onlyShadow: {
            set: function (t) {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        }, shadowCameraFov: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t
            }
        }, shadowCameraLeft: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t
            }
        }, shadowCameraRight: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t
            }
        }, shadowCameraTop: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t
            }
        }, shadowCameraBottom: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t
            }
        }, shadowCameraNear: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t
            }
        }, shadowCameraFar: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t
            }
        }, shadowCameraVisible: {
            set: function (t) {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        }, shadowBias: {
            set: function (t) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t
            }
        }, shadowDarkness: {
            set: function (t) {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        }, shadowMapWidth: {
            set: function (t) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t
            }
        }, shadowMapHeight: {
            set: function (t) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t
            }
        }
    }), Object.defineProperties(o.BufferAttribute.prototype, {
        length: {
            get: function () {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."), this.array.length
            }
        }
    }), Object.assign(o.BufferGeometry.prototype, {
        addIndex: function (t) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t)
        }, addDrawCall: function (t, e, n) {
            void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e)
        }, clearDrawCalls: function () {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
        }, computeTangents: function () {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        }, computeOffsets: function () {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }), Object.defineProperties(o.BufferGeometry.prototype, {
        drawcalls: {
            get: function () {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
            }
        }, offsets: {
            get: function () {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
            }
        }
    }), Object.defineProperties(o.Material.prototype, {
        wrapAround: {
            get: function () {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            }, set: function (t) {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            }
        }, wrapRGB: {
            get: function () {
                return console.warn("THREE." + this.type + ": .wrapRGB has been removed."), new o.Color
            }
        }
    }), Object.defineProperties(o.MeshPhongMaterial.prototype, {
        metal: {
            get: function () {
                return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
            }, set: function (t) {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    }), Object.defineProperties(o.ShaderMaterial.prototype, {
        derivatives: {
            get: function () {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
            }, set: function (t) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t
            }
        }
    }), o.EventDispatcher.prototype = Object.assign(Object.create({
        constructor: o.EventDispatcher, apply: function (t) {
            console.warn("THREE.EventDispatcher: .apply is deprecated, just inherit or Object.assign the prototype to mix-in."), Object.assign(t, this)
        }
    }), o.EventDispatcher.prototype), Object.assign(o.WebGLRenderer.prototype, {
        supportsFloatTextures: function () {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
        }, supportsHalfFloatTextures: function () {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
        }, supportsStandardDerivatives: function () {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
        }, supportsCompressedTextureS3TC: function () {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
        }, supportsCompressedTexturePVRTC: function () {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
        }, supportsBlendMinMax: function () {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
        }, supportsVertexTextures: function () {
            return this.capabilities.vertexTextures
        }, supportsInstancedArrays: function () {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
        }, enableScissorTest: function (t) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t)
        }, initMaterial: function () {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        }, addPrePlugin: function () {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        }, addPostPlugin: function () {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        }, updateShadowMap: function () {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        }
    }), Object.defineProperties(o.WebGLRenderer.prototype, {
        shadowMapEnabled: {
            get: function () {
                return this.shadowMap.enabled
            }, set: function (t) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t
            }
        }, shadowMapType: {
            get: function () {
                return this.shadowMap.type
            }, set: function (t) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t
            }
        }, shadowMapCullFace: {
            get: function () {
                return this.shadowMap.cullFace
            }, set: function (t) {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."), this.shadowMap.cullFace = t
            }
        }
    }), Object.defineProperties(o.WebGLShadowMap.prototype, {
        cullFace: {
            get: function () {
                return this.renderReverseSided ? o.CullFaceFront : o.CullFaceBack
            }, set: function (t) {
                var e = t !== o.CullFaceBack;
                console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + e + "."), this.renderReverseSided = e
            }
        }
    }),Object.defineProperties(o.WebGLRenderTarget.prototype, {
        wrapS: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t
            }
        }, wrapT: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t
            }
        }, magFilter: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t
            }
        }, minFilter: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t
            }
        }, anisotropy: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t
            }
        }, offset: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t
            }
        }, repeat: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t
            }
        }, format: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t
            }
        }, type: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t
            }
        }, generateMipmaps: {
            get: function () {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
            }, set: function (t) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t
            }
        }
    }),Object.assign(o.Audio.prototype, {
        load: function (t) {
            console.warn("THREE.Audio: .load has been deprecated. Please use THREE.AudioLoader.");
            var e = this, n = new o.AudioLoader;
            return n.load(t, function (t) {
                e.setBuffer(t)
            }), this
        }
    }),Object.assign(o.AudioAnalyser.prototype, {
        getData: function (t) {
            return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
        }
    }),o.GeometryUtils = {
        merge: function (t, e, n) {
            console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
            var r;
            e instanceof o.Mesh && (e.matrixAutoUpdate && e.updateMatrix(), r = e.matrix, e = e.geometry), t.merge(e, r, n)
        }, center: function (t) {
            return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), t.center()
        }
    },o.ImageUtils = {
        crossOrigin: void 0, loadTexture: function (t, e, n, r) {
            console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
            var i = new o.TextureLoader;
            i.setCrossOrigin(this.crossOrigin);
            var a = i.load(t, n, void 0, r);
            return e && (a.mapping = e), a
        }, loadTextureCube: function (t, e, n, r) {
            console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
            var i = new o.CubeTextureLoader;
            i.setCrossOrigin(this.crossOrigin);
            var a = i.load(t, n, void 0, r);
            return e && (a.mapping = e), a
        }, loadCompressedTexture: function () {
            console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
        }, loadCompressedTextureCube: function () {
            console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
        }
    },o.Projector = function () {
        console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function (t, e) {
            console.warn("THREE.Projector: .projectVector() is now vector.project()."), t.project(e)
        }, this.unprojectVector = function (t, e) {
            console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), t.unproject(e)
        }, this.pickingRay = function (t, e) {
            console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
        }
    },o.CanvasRenderer = function () {
        console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), this.clear = function () {
        }, this.render = function () {
        }, this.setClearColor = function () {
        }, this.setSize = function () {
        }
    },o.CurveUtils = {
        tangentQuadraticBezier: function (t, e, n, r) {
            return 2 * (1 - t) * (n - e) + 2 * t * (r - n)
        }, tangentCubicBezier: function (t, e, n, r, i) {
            return -3 * e * (1 - t) * (1 - t) + 3 * n * (1 - t) * (1 - t) - 6 * t * n * (1 - t) + 6 * t * r * (1 - t) - 3 * t * t * r + 3 * t * t * i
        }, tangentSpline: function (t, e, n, r, i) {
            var o = 6 * t * t - 6 * t, a = 3 * t * t - 4 * t + 1, s = -6 * t * t + 6 * t, l = 3 * t * t - 2 * t;
            return o + a + s + l
        }, interpolate: function (t, e, n, r, i) {
            var o = .5 * (n - t), a = .5 * (r - e), s = i * i, l = i * s;
            return (2 * e - 2 * n + o + a) * l + (-3 * e + 3 * n - 2 * o - a) * s + o * i + e
        }
    },o.SceneUtils = {
        createMultiMaterialObject: function (t, e) {
            for (var n = new o.Group, r = 0, i = e.length; r < i; r++)n.add(new o.Mesh(t, e[r]));
            return n
        }, detach: function (t, e, n) {
            t.applyMatrix(e.matrixWorld), e.remove(t), n.add(t)
        }, attach: function (t, e, n) {
            var r = new o.Matrix4;
            r.getInverse(n.matrixWorld), t.applyMatrix(r), e.remove(t), n.add(t)
        }
    },o.ShapeUtils = {
        area: function (t) {
            for (var e = t.length, n = 0, r = e - 1, i = 0; i < e; r = i++)n += t[r].x * t[i].y - t[i].x * t[r].y;
            return .5 * n
        }, triangulate: function () {
            function t(t, e, n, r, i, o) {
                var a, s, l, c, u, h, f, d, p;
                if (s = t[o[e]].x, l = t[o[e]].y, c = t[o[n]].x, u = t[o[n]].y, h = t[o[r]].x, f = t[o[r]].y, Number.EPSILON > (c - s) * (f - l) - (u - l) * (h - s))return !1;
                var m, v, g, y, x, _, b, w, M, S, E, T, A, L, C;
                for (m = h - c, v = f - u, g = s - h, y = l - f, x = c - s, _ = u - l, a = 0; a < i; a++)if (d = t[o[a]].x, p = t[o[a]].y, !(d === s && p === l || d === c && p === u || d === h && p === f) && (b = d - s, w = p - l, M = d - c, S = p - u, E = d - h, T = p - f, C = m * S - v * M, A = x * w - _ * b, L = g * T - y * E, C >= -Number.EPSILON && L >= -Number.EPSILON && A >= -Number.EPSILON))return !1;
                return !0
            }

            return function (e, n) {
                var r = e.length;
                if (r < 3)return null;
                var i, a, s, l = [], c = [], u = [];
                if (o.ShapeUtils.area(e) > 0)for (a = 0; a < r; a++)c[a] = a; else for (a = 0; a < r; a++)c[a] = r - 1 - a;
                var h = r, f = 2 * h;
                for (a = h - 1; h > 2;) {
                    if (f-- <= 0)return console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()"), n ? u : l;
                    if (i = a, h <= i && (i = 0), a = i + 1, h <= a && (a = 0), s = a + 1, h <= s && (s = 0), t(e, i, a, s, h, c)) {
                        var d, p, m, v, g;
                        for (d = c[i], p = c[a], m = c[s], l.push([e[d], e[p], e[m]]), u.push([c[i], c[a], c[s]]), v = a, g = a + 1; g < h; v++, g++)c[v] = c[g];
                        h--, f = 2 * h
                    }
                }
                return n ? u : l
            }
        }(), triangulateShape: function (t, e) {
            function n(t, e, n) {
                return t.x !== e.x ? t.x < e.x ? t.x <= n.x && n.x <= e.x : e.x <= n.x && n.x <= t.x : t.y < e.y ? t.y <= n.y && n.y <= e.y : e.y <= n.y && n.y <= t.y
            }

            function r(t, e, r, i, o) {
                var a = e.x - t.x, s = e.y - t.y, l = i.x - r.x, c = i.y - r.y, u = t.x - r.x, h = t.y - r.y, f = s * l - a * c, d = s * u - a * h;
                if (Math.abs(f) > Number.EPSILON) {
                    var p;
                    if (f > 0) {
                        if (d < 0 || d > f)return [];
                        if (p = c * u - l * h, p < 0 || p > f)return []
                    } else {
                        if (d > 0 || d < f)return [];
                        if (p = c * u - l * h, p > 0 || p < f)return []
                    }
                    if (0 === p)return !o || 0 !== d && d !== f ? [t] : [];
                    if (p === f)return !o || 0 !== d && d !== f ? [e] : [];
                    if (0 === d)return [r];
                    if (d === f)return [i];
                    var m = p / f;
                    return [{x: t.x + m * a, y: t.y + m * s}]
                }
                if (0 !== d || c * u !== l * h)return [];
                var v = 0 === a && 0 === s, g = 0 === l && 0 === c;
                if (v && g)return t.x !== r.x || t.y !== r.y ? [] : [t];
                if (v)return n(r, i, t) ? [t] : [];
                if (g)return n(t, e, r) ? [r] : [];
                var y, x, _, b, w, M, S, E;
                return 0 !== a ? (t.x < e.x ? (y = t, _ = t.x, x = e, b = e.x) : (y = e, _ = e.x, x = t, b = t.x), r.x < i.x ? (w = r, S = r.x, M = i, E = i.x) : (w = i, S = i.x, M = r, E = r.x)) : (t.y < e.y ? (y = t, _ = t.y, x = e, b = e.y) : (y = e, _ = e.y, x = t, b = t.y), r.y < i.y ? (w = r, S = r.y, M = i, E = i.y) : (w = i, S = i.y, M = r, E = r.y)), _ <= S ? b < S ? [] : b === S ? o ? [] : [w] : b <= E ? [w, x] : [w, M] : _ > E ? [] : _ === E ? o ? [] : [y] : b <= E ? [y, x] : [y, M]
            }

            function i(t, e, n, r) {
                var i = e.x - t.x, o = e.y - t.y, a = n.x - t.x, s = n.y - t.y, l = r.x - t.x, c = r.y - t.y, u = i * s - o * a, h = i * c - o * l;
                if (Math.abs(u) > Number.EPSILON) {
                    var f = l * s - c * a;
                    return u > 0 ? h >= 0 && f >= 0 : h >= 0 || f >= 0
                }
                return h > 0
            }

            function a(t, e) {
                function n(t, e) {
                    var n = y.length - 1, r = t - 1;
                    r < 0 && (r = n);
                    var o = t + 1;
                    o > n && (o = 0);
                    var a = i(y[t], y[r], y[o], s[e]);
                    if (!a)return !1;
                    var l = s.length - 1, c = e - 1;
                    c < 0 && (c = l);
                    var u = e + 1;
                    return u > l && (u = 0), a = i(s[e], s[c], s[u], y[t]), !!a
                }

                function o(t, e) {
                    var n, i, o;
                    for (n = 0; n < y.length; n++)if (i = n + 1, i %= y.length, o = r(t, e, y[n], y[i], !0), o.length > 0)return !0;
                    return !1
                }

                function a(t, n) {
                    var i, o, a, s, l;
                    for (i = 0; i < x.length; i++)for (o = e[x[i]], a = 0; a < o.length; a++)if (s = a + 1, s %= o.length, l = r(t, n, o[a], o[s], !0), l.length > 0)return !0;
                    return !1
                }

                for (var s, l, c, u, h, f, d, p, m, v, g, y = t.concat(), x = [], _ = [], b = 0, w = e.length; b < w; b++)x.push(b);
                for (var M = 0, S = 2 * x.length; x.length > 0;) {
                    if (S--, S < 0) {
                        console.log("Infinite Loop! Holes left:" + x.length + ", Probably Hole outside Shape!");
                        break
                    }
                    for (c = M; c < y.length; c++) {
                        u = y[c], l = -1;
                        for (var b = 0; b < x.length; b++)if (f = x[b], d = u.x + ":" + u.y + ":" + f, void 0 === _[d]) {
                            s = e[f];
                            for (var E = 0; E < s.length; E++)if (h = s[E], n(c, E) && !o(u, h) && !a(u, h)) {
                                l = E, x.splice(b, 1), p = y.slice(0, c + 1), m = y.slice(c), v = s.slice(l), g = s.slice(0, l + 1), y = p.concat(v).concat(g).concat(m), M = c;
                                break
                            }
                            if (l >= 0)break;
                            _[d] = !0
                        }
                        if (l >= 0)break
                    }
                }
                return y
            }

            for (var s, l, c, u, h, f, d = {}, p = t.concat(), m = 0, v = e.length; m < v; m++)Array.prototype.push.apply(p, e[m]);
            for (s = 0, l = p.length; s < l; s++)h = p[s].x + ":" + p[s].y, void 0 !== d[h] && console.warn("THREE.Shape: Duplicate point", h), d[h] = s;
            var g = a(t, e), y = o.ShapeUtils.triangulate(g, !1);
            for (s = 0, l = y.length; s < l; s++)for (u = y[s], c = 0; c < 3; c++)h = u[c].x + ":" + u[c].y, f = d[h], void 0 !== f && (u[c] = f);
            return y.concat()
        }, isClockWise: function (t) {
            return o.ShapeUtils.area(t) < 0
        }, b2: function () {
            function t(t, e) {
                var n = 1 - t;
                return n * n * e
            }

            function e(t, e) {
                return 2 * (1 - t) * t * e
            }

            function n(t, e) {
                return t * t * e
            }

            return function (r, i, o, a) {
                return t(r, i) + e(r, o) + n(r, a)
            }
        }(), b3: function () {
            function t(t, e) {
                var n = 1 - t;
                return n * n * n * e
            }

            function e(t, e) {
                var n = 1 - t;
                return 3 * n * n * t * e
            }

            function n(t, e) {
                var n = 1 - t;
                return 3 * n * t * t * e
            }

            function r(t, e) {
                return t * t * t * e
            }

            return function (i, o, a, s, l) {
                return t(i, o) + e(i, a) + n(i, s) + r(i, l)
            }
        }()
    },o.Curve = function () {
    },o.Curve.prototype = {
        constructor: o.Curve, getPoint: function (t) {
            return console.warn("THREE.Curve: Warning, getPoint() not implemented!"), null
        }, getPointAt: function (t) {
            var e = this.getUtoTmapping(t);
            return this.getPoint(e)
        }, getPoints: function (t) {
            t || (t = 5);
            var e, n = [];
            for (e = 0; e <= t; e++)n.push(this.getPoint(e / t));
            return n
        }, getSpacedPoints: function (t) {
            t || (t = 5);
            var e, n = [];
            for (e = 0; e <= t; e++)n.push(this.getPointAt(e / t));
            return n
        }, getLength: function () {
            var t = this.getLengths();
            return t[t.length - 1]
        }, getLengths: function (t) {
            if (t || (t = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)return this.cacheArcLengths;
            this.needsUpdate = !1;
            var e, n, r = [], i = this.getPoint(0), o = 0;
            for (r.push(0), n = 1; n <= t; n++)e = this.getPoint(n / t), o += e.distanceTo(i), r.push(o), i = e;
            return this.cacheArcLengths = r, r
        }, updateArcLengths: function () {
            this.needsUpdate = !0, this.getLengths()
        }, getUtoTmapping: function (t, e) {
            var n, r = this.getLengths(), i = 0, o = r.length;
            n = e ? e : t * r[o - 1];
            for (var a, s = 0, l = o - 1; s <= l;)if (i = Math.floor(s + (l - s) / 2), a = r[i] - n, a < 0) s = i + 1; else {
                if (!(a > 0)) {
                    l = i;
                    break
                }
                l = i - 1
            }
            if (i = l, r[i] === n) {
                var c = i / (o - 1);
                return c
            }
            var u = r[i], h = r[i + 1], f = h - u, d = (n - u) / f, c = (i + d) / (o - 1);
            return c
        }, getTangent: function (t) {
            var e = 1e-4, n = t - e, r = t + e;
            n < 0 && (n = 0), r > 1 && (r = 1);
            var i = this.getPoint(n), o = this.getPoint(r), a = o.clone().sub(i);
            return a.normalize()
        }, getTangentAt: function (t) {
            var e = this.getUtoTmapping(t);
            return this.getTangent(e)
        }
    },o.Curve.create = function (t, e) {
        return t.prototype = Object.create(o.Curve.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
    },o.CurvePath = function () {
        this.curves = [], this.autoClose = !1
    },o.CurvePath.prototype = Object.assign(Object.create(o.Curve.prototype), {
        constructor: o.CurvePath,
        add: function (t) {
            this.curves.push(t)
        },
        closePath: function () {
            var t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new o.LineCurve(e, t))
        },
        getPoint: function (t) {
            for (var e = t * this.getLength(), n = this.getCurveLengths(), r = 0; r < n.length;) {
                if (n[r] >= e) {
                    var i = n[r] - e, o = this.curves[r], a = 1 - i / o.getLength();
                    return o.getPointAt(a)
                }
                r++
            }
            return null
        },
        getLength: function () {
            var t = this.getCurveLengths();
            return t[t.length - 1]
        },
        updateArcLengths: function () {
            this.needsUpdate = !0, this.cacheLengths = null, this.getLengths()
        },
        getCurveLengths: function () {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length)return this.cacheLengths;
            for (var t = [], e = 0, n = 0, r = this.curves.length; n < r; n++)e += this.curves[n].getLength(), t.push(e);
            return this.cacheLengths = t, t
        },
        createPointsGeometry: function (t) {
            var e = this.getPoints(t);
            return this.createGeometry(e)
        },
        createSpacedPointsGeometry: function (t) {
            var e = this.getSpacedPoints(t);
            return this.createGeometry(e)
        },
        createGeometry: function (t) {
            for (var e = new o.Geometry, n = 0, r = t.length; n < r; n++) {
                var i = t[n];
                e.vertices.push(new o.Vector3(i.x, i.y, i.z || 0))
            }
            return e
        }
    }),o.Font = function (t) {
        this.data = t
    },Object.assign(o.Font.prototype, {
        generateShapes: function (t, e, n) {
            function r(t) {
                for (var n = String(t).split(""), r = e / a.resolution, o = 0, s = [], l = 0; l < n.length; l++) {
                    var c = i(n[l], r, o);
                    o += c.offset, s.push(c.path)
                }
                return s
            }

            function i(t, e, r) {
                var i = a.glyphs[t] || a.glyphs["?"];
                if (i) {
                    var s, l, c, u, h, f, d, p, m, v, g, y = new o.Path, x = [], _ = o.ShapeUtils.b2, b = o.ShapeUtils.b3;
                    if (i.o)for (var w = i._cachedOutline || (i._cachedOutline = i.o.split(" ")), M = 0, S = w.length; M < S;) {
                        var E = w[M++];
                        switch (E) {
                            case"m":
                                s = w[M++] * e + r, l = w[M++] * e, y.moveTo(s, l);
                                break;
                            case"l":
                                s = w[M++] * e + r, l = w[M++] * e, y.lineTo(s, l);
                                break;
                            case"q":
                                if (c = w[M++] * e + r, u = w[M++] * e, d = w[M++] * e + r, p = w[M++] * e, y.quadraticCurveTo(d, p, c, u), g = x[x.length - 1]) {
                                    h = g.x, f = g.y;
                                    for (var T = 1; T <= n; T++) {
                                        var A = T / n;
                                        _(A, h, d, c), _(A, f, p, u)
                                    }
                                }
                                break;
                            case"b":
                                if (c = w[M++] * e + r, u = w[M++] * e, d = w[M++] * e + r, p = w[M++] * e, m = w[M++] * e + r, v = w[M++] * e, y.bezierCurveTo(d, p, m, v, c, u), g = x[x.length - 1]) {
                                    h = g.x, f = g.y;
                                    for (var T = 1; T <= n; T++) {
                                        var A = T / n;
                                        b(A, h, d, m, c), b(A, f, p, v, u)
                                    }
                                }
                        }
                    }
                    return {offset: i.ha * e, path: y}
                }
            }

            void 0 === e && (e = 100), void 0 === n && (n = 4);
            for (var a = this.data, s = r(t), l = [], c = 0, u = s.length; c < u; c++)Array.prototype.push.apply(l, s[c].toShapes());
            return l
        }
    }),o.Path = function (t) {
        o.CurvePath.call(this), this.actions = [], t && this.fromPoints(t)
    },o.Path.prototype = Object.assign(Object.create(o.CurvePath.prototype), {
        constructor: o.Path,
        fromPoints: function (t) {
            this.moveTo(t[0].x, t[0].y);
            for (var e = 1, n = t.length; e < n; e++)this.lineTo(t[e].x, t[e].y)
        },
        moveTo: function (t, e) {
            this.actions.push({action: "moveTo", args: [t, e]})
        },
        lineTo: function (t, e) {
            var n = this.actions[this.actions.length - 1].args, r = n[n.length - 2], i = n[n.length - 1], a = new o.LineCurve(new o.Vector2(r, i), new o.Vector2(t, e));
            this.curves.push(a), this.actions.push({action: "lineTo", args: [t, e]})
        },
        quadraticCurveTo: function (t, e, n, r) {
            var i = this.actions[this.actions.length - 1].args, a = i[i.length - 2], s = i[i.length - 1], l = new o.QuadraticBezierCurve(new o.Vector2(a, s), new o.Vector2(t, e), new o.Vector2(n, r));
            this.curves.push(l), this.actions.push({action: "quadraticCurveTo", args: [t, e, n, r]})
        },
        bezierCurveTo: function (t, e, n, r, i, a) {
            var s = this.actions[this.actions.length - 1].args, l = s[s.length - 2], c = s[s.length - 1], u = new o.CubicBezierCurve(new o.Vector2(l, c), new o.Vector2(t, e), new o.Vector2(n, r), new o.Vector2(i, a));
            this.curves.push(u), this.actions.push({action: "bezierCurveTo", args: [t, e, n, r, i, a]})
        },
        splineThru: function (t) {
            var e = Array.prototype.slice.call(arguments), n = this.actions[this.actions.length - 1].args, r = n[n.length - 2], i = n[n.length - 1], a = [new o.Vector2(r, i)];
            Array.prototype.push.apply(a, t);
            var s = new o.SplineCurve(a);
            this.curves.push(s);
            var l = t[t.length - 1];
            e.push(l.x), e.push(l.y), this.actions.push({action: "splineThru", args: e})
        },
        arc: function (t, e, n, r, i, o) {
            var a = this.actions[this.actions.length - 1].args, s = a[a.length - 2], l = a[a.length - 1];
            this.absarc(t + s, e + l, n, r, i, o)
        },
        absarc: function (t, e, n, r, i, o) {
            this.absellipse(t, e, n, n, r, i, o)
        },
        ellipse: function (t, e, n, r, i, o, a, s) {
            var l = this.actions[this.actions.length - 1].args, c = l[l.length - 2], u = l[l.length - 1];
            this.absellipse(t + c, e + u, n, r, i, o, a, s)
        },
        absellipse: function (t, e, n, r, i, a, s, l) {
            var c = [t, e, n, r, i, a, s, l || 0], u = new o.EllipseCurve(t, e, n, r, i, a, s, l);
            this.curves.push(u);
            var h = u.getPoint(1);
            c.push(h.x), c.push(h.y), this.actions.push({action: "ellipse", args: c})
        },
        getSpacedPoints: function (t) {
            t || (t = 40);
            for (var e = [], n = 0; n < t; n++)e.push(this.getPoint(n / t));
            return this.autoClose && e.push(e[0]), e
        },
        getPoints: function (t) {
            t = t || 12;
            for (var e, n, r, i, a, s, l, c, u, h, f, d = o.ShapeUtils.b2, p = o.ShapeUtils.b3, m = [], v = 0, g = this.actions.length; v < g; v++) {
                var y = this.actions[v], x = y.action, _ = y.args;
                switch (x) {
                    case"moveTo":
                        m.push(new o.Vector2(_[0], _[1]));
                        break;
                    case"lineTo":
                        m.push(new o.Vector2(_[0], _[1]));
                        break;
                    case"quadraticCurveTo":
                        e = _[2], n = _[3], a = _[0], s = _[1], m.length > 0 ? (u = m[m.length - 1], l = u.x, c = u.y) : (u = this.actions[v - 1].args, l = u[u.length - 2], c = u[u.length - 1]);
                        for (var b = 1; b <= t; b++) {
                            var w = b / t;
                            h = d(w, l, a, e), f = d(w, c, s, n), m.push(new o.Vector2(h, f))
                        }
                        break;
                    case"bezierCurveTo":
                        e = _[4], n = _[5], a = _[0], s = _[1], r = _[2], i = _[3], m.length > 0 ? (u = m[m.length - 1], l = u.x, c = u.y) : (u = this.actions[v - 1].args, l = u[u.length - 2], c = u[u.length - 1]);
                        for (var b = 1; b <= t; b++) {
                            var w = b / t;
                            h = p(w, l, a, r, e), f = p(w, c, s, i, n), m.push(new o.Vector2(h, f))
                        }
                        break;
                    case"splineThru":
                        u = this.actions[v - 1].args;
                        var M = new o.Vector2(u[u.length - 2], u[u.length - 1]), S = [M], E = t * _[0].length;
                        S = S.concat(_[0]);
                        for (var T = new o.SplineCurve(S), b = 1; b <= E; b++)m.push(T.getPointAt(b / E));
                        break;
                    case"arc":
                        for (var A, L = _[0], C = _[1], P = _[2], R = _[3], I = _[4], F = !!_[5], O = I - R, B = 2 * t, b = 1; b <= B; b++) {
                            var w = b / B;
                            F || (w = 1 - w), A = R + w * O, h = L + P * Math.cos(A), f = C + P * Math.sin(A), m.push(new o.Vector2(h, f))
                        }
                        break;
                    case"ellipse":
                        var A, U, D, L = _[0], C = _[1], N = _[2], z = _[3], R = _[4], I = _[5], F = !!_[6], G = _[7], O = I - R, B = 2 * t;
                        0 !== G && (U = Math.cos(G), D = Math.sin(G));
                        for (var b = 1; b <= B; b++) {
                            var w = b / B;
                            if (F || (w = 1 - w), A = R + w * O, h = L + N * Math.cos(A), f = C + z * Math.sin(A), 0 !== G) {
                                var V = h, k = f;
                                h = (V - L) * U - (k - C) * D + L, f = (V - L) * D + (k - C) * U + C
                            }
                            m.push(new o.Vector2(h, f))
                        }
                }
            }
            var j = m[m.length - 1];
            return Math.abs(j.x - m[0].x) < Number.EPSILON && Math.abs(j.y - m[0].y) < Number.EPSILON && m.splice(m.length - 1, 1), this.autoClose && m.push(m[0]), m
        },
        toShapes: function (t, e) {
            function n(t) {
                for (var e = [], n = new o.Path, r = 0, i = t.length; r < i; r++) {
                    var a = t[r], s = a.args, l = a.action;
                    "moveTo" === l && 0 !== n.actions.length && (e.push(n), n = new o.Path), n[l].apply(n, s)
                }
                return 0 !== n.actions.length && e.push(n), e
            }

            function r(t) {
                for (var e = [], n = 0, r = t.length; n < r; n++) {
                    var i = t[n], a = new o.Shape;
                    a.actions = i.actions, a.curves = i.curves, e.push(a)
                }
                return e
            }

            function i(t, e) {
                for (var n = e.length, r = !1, i = n - 1, o = 0; o < n; i = o++) {
                    var a = e[i], s = e[o], l = s.x - a.x, c = s.y - a.y;
                    if (Math.abs(c) > Number.EPSILON) {
                        if (c < 0 && (a = e[o], l = -l, s = e[i], c = -c), t.y < a.y || t.y > s.y)continue;
                        if (t.y === a.y) {
                            if (t.x === a.x)return !0
                        } else {
                            var u = c * (t.x - a.x) - l * (t.y - a.y);
                            if (0 === u)return !0;
                            if (u < 0)continue;
                            r = !r
                        }
                    } else {
                        if (t.y !== a.y)continue;
                        if (s.x <= t.x && t.x <= a.x || a.x <= t.x && t.x <= s.x)return !0
                    }
                }
                return r
            }

            var a = o.ShapeUtils.isClockWise, s = n(this.actions);
            if (0 === s.length)return [];
            if (e === !0)return r(s);
            var l, c, u, h = [];
            if (1 === s.length)return c = s[0], u = new o.Shape, u.actions = c.actions, u.curves = c.curves, h.push(u), h;
            var f = !a(s[0].getPoints());
            f = t ? !f : f;
            var d, p = [], m = [], v = [], g = 0;
            m[g] = void 0, v[g] = [];
            for (var y = 0, x = s.length; y < x; y++)c = s[y], d = c.getPoints(), l = a(d), l = t ? !l : l, l ? (!f && m[g] && g++, m[g] = {
                  s: new o.Shape,
                  p: d
              }, m[g].s.actions = c.actions, m[g].s.curves = c.curves, f && g++, v[g] = []) : v[g].push({
                  h: c,
                  p: d[0]
              });
            if (!m[0])return r(s);
            if (m.length > 1) {
                for (var _ = !1, b = [], w = 0, M = m.length; w < M; w++)p[w] = [];
                for (var w = 0, M = m.length; w < M; w++)for (var S = v[w], E = 0; E < S.length; E++) {
                    for (var T = S[E], A = !0, L = 0; L < m.length; L++)i(T.p, m[L].p) && (w !== L && b.push({
                        froms: w,
                        tos: L,
                        hole: E
                    }), A ? (A = !1, p[L].push(T)) : _ = !0);
                    A && p[w].push(T)
                }
                b.length > 0 && (_ || (v = p))
            }
            for (var C, y = 0, P = m.length; y < P; y++) {
                u = m[y].s, h.push(u), C = v[y];
                for (var R = 0, I = C.length; R < I; R++)u.holes.push(C[R].h)
            }
            return h
        }
    }),o.Shape = function () {
        o.Path.apply(this, arguments), this.holes = []
    },o.Shape.prototype = Object.assign(Object.create(o.Path.prototype), {
        constructor: o.Shape, extrude: function (t) {
            return new o.ExtrudeGeometry(this, t)
        }, makeGeometry: function (t) {
            return new o.ShapeGeometry(this, t)
        }, getPointsHoles: function (t) {
            for (var e = [], n = 0, r = this.holes.length; n < r; n++)e[n] = this.holes[n].getPoints(t);
            return e
        }, extractAllPoints: function (t) {
            return {shape: this.getPoints(t), holes: this.getPointsHoles(t)}
        }, extractPoints: function (t) {
            return this.extractAllPoints(t)
        }
    }),o.LineCurve = function (t, e) {
        this.v1 = t, this.v2 = e
    },o.LineCurve.prototype = Object.create(o.Curve.prototype),o.LineCurve.prototype.constructor = o.LineCurve,o.LineCurve.prototype.getPoint = function (t) {
        var e = this.v2.clone().sub(this.v1);
        return e.multiplyScalar(t).add(this.v1), e
    },o.LineCurve.prototype.getPointAt = function (t) {
        return this.getPoint(t)
    },o.LineCurve.prototype.getTangent = function (t) {
        var e = this.v2.clone().sub(this.v1);
        return e.normalize()
    },o.QuadraticBezierCurve = function (t, e, n) {
        this.v0 = t, this.v1 = e,
          this.v2 = n
    },o.QuadraticBezierCurve.prototype = Object.create(o.Curve.prototype),o.QuadraticBezierCurve.prototype.constructor = o.QuadraticBezierCurve,o.QuadraticBezierCurve.prototype.getPoint = function (t) {
        var e = o.ShapeUtils.b2;
        return new o.Vector2(e(t, this.v0.x, this.v1.x, this.v2.x), e(t, this.v0.y, this.v1.y, this.v2.y))
    },o.QuadraticBezierCurve.prototype.getTangent = function (t) {
        var e = o.CurveUtils.tangentQuadraticBezier;
        return new o.Vector2(e(t, this.v0.x, this.v1.x, this.v2.x), e(t, this.v0.y, this.v1.y, this.v2.y)).normalize()
    },o.CubicBezierCurve = function (t, e, n, r) {
        this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = r
    },o.CubicBezierCurve.prototype = Object.create(o.Curve.prototype),o.CubicBezierCurve.prototype.constructor = o.CubicBezierCurve,o.CubicBezierCurve.prototype.getPoint = function (t) {
        var e = o.ShapeUtils.b3;
        return new o.Vector2(e(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x), e(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y))
    },o.CubicBezierCurve.prototype.getTangent = function (t) {
        var e = o.CurveUtils.tangentCubicBezier;
        return new o.Vector2(e(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x), e(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y)).normalize()
    },o.SplineCurve = function (t) {
        this.points = void 0 == t ? [] : t
    },o.SplineCurve.prototype = Object.create(o.Curve.prototype),o.SplineCurve.prototype.constructor = o.SplineCurve,o.SplineCurve.prototype.getPoint = function (t) {
        var e = this.points, n = (e.length - 1) * t, r = Math.floor(n), i = n - r, a = e[0 === r ? r : r - 1], s = e[r], l = e[r > e.length - 2 ? e.length - 1 : r + 1], c = e[r > e.length - 3 ? e.length - 1 : r + 2], u = o.CurveUtils.interpolate;
        return new o.Vector2(u(a.x, s.x, l.x, c.x, i), u(a.y, s.y, l.y, c.y, i))
    },o.EllipseCurve = function (t, e, n, r, i, o, a, s) {
        this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = r, this.aStartAngle = i, this.aEndAngle = o, this.aClockwise = a, this.aRotation = s || 0
    },o.EllipseCurve.prototype = Object.create(o.Curve.prototype),o.EllipseCurve.prototype.constructor = o.EllipseCurve,o.EllipseCurve.prototype.getPoint = function (t) {
        var e = this.aEndAngle - this.aStartAngle;
        e < 0 && (e += 2 * Math.PI), e > 2 * Math.PI && (e -= 2 * Math.PI);
        var n;
        n = this.aClockwise === !0 ? this.aEndAngle + (1 - t) * (2 * Math.PI - e) : this.aStartAngle + t * e;
        var r = this.aX + this.xRadius * Math.cos(n), i = this.aY + this.yRadius * Math.sin(n);
        if (0 !== this.aRotation) {
            var a = Math.cos(this.aRotation), s = Math.sin(this.aRotation), l = r, c = i;
            r = (l - this.aX) * a - (c - this.aY) * s + this.aX, i = (l - this.aX) * s + (c - this.aY) * a + this.aY
        }
        return new o.Vector2(r, i)
    },o.ArcCurve = function (t, e, n, r, i, a) {
        o.EllipseCurve.call(this, t, e, n, n, r, i, a)
    },o.ArcCurve.prototype = Object.create(o.EllipseCurve.prototype),o.ArcCurve.prototype.constructor = o.ArcCurve,o.LineCurve3 = o.Curve.create(function (t, e) {
        this.v1 = t, this.v2 = e
    }, function (t) {
        var e = new o.Vector3;
        return e.subVectors(this.v2, this.v1), e.multiplyScalar(t), e.add(this.v1), e
    }),o.QuadraticBezierCurve3 = o.Curve.create(function (t, e, n) {
        this.v0 = t, this.v1 = e, this.v2 = n
    }, function (t) {
        var e = o.ShapeUtils.b2;
        return new o.Vector3(e(t, this.v0.x, this.v1.x, this.v2.x), e(t, this.v0.y, this.v1.y, this.v2.y), e(t, this.v0.z, this.v1.z, this.v2.z))
    }),o.CubicBezierCurve3 = o.Curve.create(function (t, e, n, r) {
        this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = r
    }, function (t) {
        var e = o.ShapeUtils.b3;
        return new o.Vector3(e(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x), e(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y), e(t, this.v0.z, this.v1.z, this.v2.z, this.v3.z))
    }),o.SplineCurve3 = o.Curve.create(function (t) {
        console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"), this.points = void 0 == t ? [] : t
    }, function (t) {
        var e = this.points, n = (e.length - 1) * t, r = Math.floor(n), i = n - r, a = e[0 == r ? r : r - 1], s = e[r], l = e[r > e.length - 2 ? e.length - 1 : r + 1], c = e[r > e.length - 3 ? e.length - 1 : r + 2], u = o.CurveUtils.interpolate;
        return new o.Vector3(u(a.x, s.x, l.x, c.x, i), u(a.y, s.y, l.y, c.y, i), u(a.z, s.z, l.z, c.z, i))
    }),o.CatmullRomCurve3 = function () {
        function t() {
        }

        var e = new o.Vector3, n = new t, r = new t, i = new t;
        return t.prototype.init = function (t, e, n, r) {
            this.c0 = t, this.c1 = n, this.c2 = -3 * t + 3 * e - 2 * n - r, this.c3 = 2 * t - 2 * e + n + r
        }, t.prototype.initNonuniformCatmullRom = function (t, e, n, r, i, o, a) {
            var s = (e - t) / i - (n - t) / (i + o) + (n - e) / o, l = (n - e) / o - (r - e) / (o + a) + (r - n) / a;
            s *= o, l *= o, this.init(e, n, s, l)
        }, t.prototype.initCatmullRom = function (t, e, n, r, i) {
            this.init(e, n, i * (n - t), i * (r - e))
        }, t.prototype.calc = function (t) {
            var e = t * t, n = e * t;
            return this.c0 + this.c1 * t + this.c2 * e + this.c3 * n
        }, o.Curve.create(function (t) {
            this.points = t || [], this.closed = !1
        }, function (t) {
            var a, s, l, c, u = this.points;
            c = u.length, c < 2 && console.log("duh, you need at least 2 points"), a = (c - (this.closed ? 0 : 1)) * t, s = Math.floor(a), l = a - s, this.closed ? s += s > 0 ? 0 : (Math.floor(Math.abs(s) / u.length) + 1) * u.length : 0 === l && s === c - 1 && (s = c - 2, l = 1);
            var h, f, d, p;
            if (this.closed || s > 0 ? h = u[(s - 1) % c] : (e.subVectors(u[0], u[1]).add(u[0]), h = e), f = u[s % c], d = u[(s + 1) % c], this.closed || s + 2 < c ? p = u[(s + 2) % c] : (e.subVectors(u[c - 1], u[c - 2]).add(u[c - 1]), p = e), void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
                var m = "chordal" === this.type ? .5 : .25, v = Math.pow(h.distanceToSquared(f), m), g = Math.pow(f.distanceToSquared(d), m), y = Math.pow(d.distanceToSquared(p), m);
                g < 1e-4 && (g = 1), v < 1e-4 && (v = g), y < 1e-4 && (y = g), n.initNonuniformCatmullRom(h.x, f.x, d.x, p.x, v, g, y), r.initNonuniformCatmullRom(h.y, f.y, d.y, p.y, v, g, y), i.initNonuniformCatmullRom(h.z, f.z, d.z, p.z, v, g, y)
            } else if ("catmullrom" === this.type) {
                var x = void 0 !== this.tension ? this.tension : .5;
                n.initCatmullRom(h.x, f.x, d.x, p.x, x), r.initCatmullRom(h.y, f.y, d.y, p.y, x), i.initCatmullRom(h.z, f.z, d.z, p.z, x)
            }
            var _ = new o.Vector3(n.calc(l), r.calc(l), i.calc(l));
            return _
        })
    }(),o.ClosedSplineCurve3 = function (t) {
        console.warn("THREE.ClosedSplineCurve3 has been deprecated. Please use THREE.CatmullRomCurve3."), o.CatmullRomCurve3.call(this, t), this.type = "catmullrom", this.closed = !0
    },o.ClosedSplineCurve3.prototype = Object.create(o.CatmullRomCurve3.prototype),o.BoxGeometry = function (t, e, n, r, i, a) {
        o.Geometry.call(this), this.type = "BoxGeometry", this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: r,
            heightSegments: i,
            depthSegments: a
        }, this.fromBufferGeometry(new o.BoxBufferGeometry(t, e, n, r, i, a)), this.mergeVertices()
    },o.BoxGeometry.prototype = Object.create(o.Geometry.prototype),o.BoxGeometry.prototype.constructor = o.BoxGeometry,o.CubeGeometry = o.BoxGeometry,o.BoxBufferGeometry = function (t, e, n, r, i, a) {
        function s(t, e, n) {
            var r = 0;
            return r += (t + 1) * (e + 1) * 2, r += (t + 1) * (n + 1) * 2, r += (n + 1) * (e + 1) * 2
        }

        function l(t, e, n) {
            var r = 0;
            return r += t * e * 2, r += t * n * 2, r += n * e * 2, 6 * r
        }

        function c(t, e, n, r, i, a, s, l, c, h, f) {
            for (var w = a / c, M = s / h, S = a / 2, E = s / 2, T = l / 2, A = c + 1, L = h + 1, C = 0, P = 0, R = new o.Vector3, I = 0; I < L; I++)for (var F = I * M - E, O = 0; O < A; O++) {
                var B = O * w - S;
                R[t] = B * r, R[e] = F * i, R[n] = T, p[g] = R.x, p[g + 1] = R.y, p[g + 2] = R.z, R[t] = 0, R[e] = 0, R[n] = l > 0 ? 1 : -1, m[g] = R.x, m[g + 1] = R.y, m[g + 2] = R.z, v[y] = O / c, v[y + 1] = 1 - I / h, g += 3, y += 2, C += 1
            }
            for (I = 0; I < h; I++)for (O = 0; O < c; O++) {
                var U = _ + O + A * I, D = _ + O + A * (I + 1), N = _ + (O + 1) + A * (I + 1), z = _ + (O + 1) + A * I;
                d[x] = U, d[x + 1] = D, d[x + 2] = z, d[x + 3] = D, d[x + 4] = N, d[x + 5] = z, x += 6, P += 6
            }
            u.addGroup(b, P, f), b += P, _ += C
        }

        o.BufferGeometry.call(this), this.type = "BoxBufferGeometry", this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: r,
            heightSegments: i,
            depthSegments: a
        };
        var u = this;
        r = Math.floor(r) || 1, i = Math.floor(i) || 1, a = Math.floor(a) || 1;
        var h = s(r, i, a), f = l(r, i, a), d = new (f > 65535 ? Uint32Array : Uint16Array)(f), p = new Float32Array(3 * h), m = new Float32Array(3 * h), v = new Float32Array(2 * h), g = 0, y = 0, x = 0, _ = 0, b = 0;
        c("z", "y", "x", -1, -1, n, e, t, a, i, 0), c("z", "y", "x", 1, -1, n, e, -t, a, i, 1), c("x", "z", "y", 1, 1, t, n, e, r, a, 2), c("x", "z", "y", 1, -1, t, n, -e, r, a, 3), c("x", "y", "z", 1, -1, t, e, n, r, i, 4), c("x", "y", "z", -1, -1, t, e, -n, r, i, 5), this.setIndex(new o.BufferAttribute(d, 1)), this.addAttribute("position", new o.BufferAttribute(p, 3)), this.addAttribute("normal", new o.BufferAttribute(m, 3)), this.addAttribute("uv", new o.BufferAttribute(v, 2))
    },o.BoxBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype),o.BoxBufferGeometry.prototype.constructor = o.BoxBufferGeometry,o.CircleGeometry = function (t, e, n, r) {
        o.Geometry.call(this), this.type = "CircleGeometry", this.parameters = {
            radius: t,
            segments: e,
            thetaStart: n,
            thetaLength: r
        }, this.fromBufferGeometry(new o.CircleBufferGeometry(t, e, n, r))
    },o.CircleGeometry.prototype = Object.create(o.Geometry.prototype),o.CircleGeometry.prototype.constructor = o.CircleGeometry,o.CircleBufferGeometry = function (t, e, n, r) {
        o.BufferGeometry.call(this), this.type = "CircleBufferGeometry", this.parameters = {
            radius: t,
            segments: e,
            thetaStart: n,
            thetaLength: r
        }, t = t || 50, e = void 0 !== e ? Math.max(3, e) : 8, n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI;
        var i = e + 2, a = new Float32Array(3 * i), s = new Float32Array(3 * i), l = new Float32Array(2 * i);
        s[2] = 1, l[0] = .5, l[1] = .5;
        for (var c = 0, u = 3, h = 2; c <= e; c++, u += 3, h += 2) {
            var f = n + c / e * r;
            a[u] = t * Math.cos(f), a[u + 1] = t * Math.sin(f), s[u + 2] = 1, l[h] = (a[u] / t + 1) / 2, l[h + 1] = (a[u + 1] / t + 1) / 2
        }
        for (var d = [], u = 1; u <= e; u++)d.push(u, u + 1, 0);
        this.setIndex(new o.BufferAttribute(new Uint16Array(d), 1)), this.addAttribute("position", new o.BufferAttribute(a, 3)), this.addAttribute("normal", new o.BufferAttribute(s, 3)), this.addAttribute("uv", new o.BufferAttribute(l, 2)), this.boundingSphere = new o.Sphere(new o.Vector3, t)
    },o.CircleBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype),o.CircleBufferGeometry.prototype.constructor = o.CircleBufferGeometry,o.CylinderBufferGeometry = function (t, e, n, r, i, a, s, l) {
        function c() {
            var t = (r + 1) * (i + 1);
            return a === !1 && (t += (r + 1) * p + r * p), t
        }

        function u() {
            var t = r * i * 2 * 3;
            return a === !1 && (t += r * p * 3), t
        }

        function h() {
            var a, c, u = new o.Vector3, h = new o.Vector3, f = 0, p = (e - t) / n;
            for (c = 0; c <= i; c++) {
                var m = [], v = c / i, T = v * (e - t) + t;
                for (a = 0; a <= r; a++) {
                    var A = a / r;
                    h.x = T * Math.sin(A * l + s), h.y = -v * n + S, h.z = T * Math.cos(A * l + s), y.setXYZ(b, h.x, h.y, h.z), u.copy(h), (0 === t && 0 === c || 0 === e && c === i) && (u.x = Math.sin(A * l + s), u.z = Math.cos(A * l + s)), u.setY(Math.sqrt(u.x * u.x + u.z * u.z) * p).normalize(), x.setXYZ(b, u.x, u.y, u.z), _.setXY(b, A, 1 - v), m.push(b), b++
                }
                M.push(m)
            }
            for (a = 0; a < r; a++)for (c = 0; c < i; c++) {
                var L = M[c][a], C = M[c + 1][a], P = M[c + 1][a + 1], R = M[c][a + 1];
                g.setX(w, L), w++, g.setX(w, C), w++, g.setX(w, R), w++, g.setX(w, C), w++, g.setX(w, P), w++, g.setX(w, R), w++, f += 6
            }
            d.addGroup(E, f, 0), E += f
        }

        function f(n) {
            var i, a, c, u = new o.Vector2, h = new o.Vector3, f = 0, p = n === !0 ? t : e, m = n === !0 ? 1 : -1;
            for (a = b, i = 1; i <= r; i++)y.setXYZ(b, 0, S * m, 0), x.setXYZ(b, 0, m, 0), u.x = .5, u.y = .5, _.setXY(b, u.x, u.y), b++;
            for (c = b, i = 0; i <= r; i++) {
                var v = i / r, M = v * l + s, T = Math.cos(M), A = Math.sin(M);
                h.x = p * A, h.y = S * m, h.z = p * T, y.setXYZ(b, h.x, h.y, h.z), x.setXYZ(b, 0, m, 0), u.x = .5 * T + .5, u.y = .5 * A * m + .5, _.setXY(b, u.x, u.y), b++
            }
            for (i = 0; i < r; i++) {
                var L = a + i, C = c + i;
                n === !0 ? (g.setX(w, C), w++, g.setX(w, C + 1), w++, g.setX(w, L), w++) : (g.setX(w, C + 1), w++, g.setX(w, C), w++, g.setX(w, L), w++), f += 3
            }
            d.addGroup(E, f, n === !0 ? 1 : 2), E += f
        }

        o.BufferGeometry.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: n,
            radialSegments: r,
            heightSegments: i,
            openEnded: a,
            thetaStart: s,
            thetaLength: l
        };
        var d = this;
        t = void 0 !== t ? t : 20, e = void 0 !== e ? e : 20, n = void 0 !== n ? n : 100, r = Math.floor(r) || 8, i = Math.floor(i) || 1, a = void 0 !== a && a, s = void 0 !== s ? s : 0, l = void 0 !== l ? l : 2 * Math.PI;
        var p = 0;
        a === !1 && (t > 0 && p++, e > 0 && p++);
        var m = c(), v = u(), g = new o.BufferAttribute(new (v > 65535 ? Uint32Array : Uint16Array)(v), 1), y = new o.BufferAttribute(new Float32Array(3 * m), 3), x = new o.BufferAttribute(new Float32Array(3 * m), 3), _ = new o.BufferAttribute(new Float32Array(2 * m), 2), b = 0, w = 0, M = [], S = n / 2, E = 0;
        h(), a === !1 && (t > 0 && f(!0), e > 0 && f(!1)), this.setIndex(g), this.addAttribute("position", y), this.addAttribute("normal", x), this.addAttribute("uv", _)
    },o.CylinderBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype),o.CylinderBufferGeometry.prototype.constructor = o.CylinderBufferGeometry,o.CylinderGeometry = function (t, e, n, r, i, a, s, l) {
        o.Geometry.call(this), this.type = "CylinderGeometry", this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: n,
            radialSegments: r,
            heightSegments: i,
            openEnded: a,
            thetaStart: s,
            thetaLength: l
        }, this.fromBufferGeometry(new o.CylinderBufferGeometry(t, e, n, r, i, a, s, l)), this.mergeVertices()
    },o.CylinderGeometry.prototype = Object.create(o.Geometry.prototype),o.CylinderGeometry.prototype.constructor = o.CylinderGeometry,o.ConeBufferGeometry = function (t, e, n, r, i, a, s) {
        o.CylinderBufferGeometry.call(this, 0, t, e, n, r, i, a, s), this.type = "ConeBufferGeometry", this.parameters = {
            radius: t,
            height: e,
            radialSegments: n,
            heightSegments: r,
            thetaStart: a,
            thetaLength: s
        }
    },o.ConeBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype),o.ConeBufferGeometry.prototype.constructor = o.ConeBufferGeometry,o.ConeGeometry = function (t, e, n, r, i, a, s) {
        o.CylinderGeometry.call(this, 0, t, e, n, r, i, a, s), this.type = "ConeGeometry", this.parameters = {
            radius: t,
            height: e,
            radialSegments: n,
            heightSegments: r,
            openEnded: i,
            thetaStart: a,
            thetaLength: s
        }
    },o.ConeGeometry.prototype = Object.create(o.CylinderGeometry.prototype),o.ConeGeometry.prototype.constructor = o.ConeGeometry,o.EdgesGeometry = function (t, e) {
        function n(t, e) {
            return t - e
        }

        o.BufferGeometry.call(this), e = void 0 !== e ? e : 1;
        var r, i = Math.cos(o.Math.DEG2RAD * e), a = [0, 0], s = {}, l = ["a", "b", "c"];
        t instanceof o.BufferGeometry ? (r = new o.Geometry, r.fromBufferGeometry(t)) : r = t.clone(), r.mergeVertices(), r.computeFaceNormals();
        for (var c = r.vertices, u = r.faces, h = 0, f = u.length; h < f; h++)for (var d = u[h], p = 0; p < 3; p++) {
            a[0] = d[l[p]], a[1] = d[l[(p + 1) % 3]], a.sort(n);
            var m = a.toString();
            void 0 === s[m] ? s[m] = {vert1: a[0], vert2: a[1], face1: h, face2: void 0} : s[m].face2 = h
        }
        var v = [];
        for (var m in s) {
            var g = s[m];
            if (void 0 === g.face2 || u[g.face1].normal.dot(u[g.face2].normal) <= i) {
                var y = c[g.vert1];
                v.push(y.x), v.push(y.y), v.push(y.z), y = c[g.vert2], v.push(y.x), v.push(y.y), v.push(y.z)
            }
        }
        this.addAttribute("position", new o.BufferAttribute(new Float32Array(v), 3))
    },o.EdgesGeometry.prototype = Object.create(o.BufferGeometry.prototype),o.EdgesGeometry.prototype.constructor = o.EdgesGeometry,o.ExtrudeGeometry = function (t, e) {
        return "undefined" == typeof t ? void(t = []) : (o.Geometry.call(this), this.type = "ExtrudeGeometry", t = Array.isArray(t) ? t : [t], this.addShapeList(t, e), void this.computeFaceNormals())
    },o.ExtrudeGeometry.prototype = Object.create(o.Geometry.prototype),o.ExtrudeGeometry.prototype.constructor = o.ExtrudeGeometry,o.ExtrudeGeometry.prototype.addShapeList = function (t, e) {
        for (var n = t.length, r = 0; r < n; r++) {
            var i = t[r];
            this.addShape(i, e)
        }
    },o.ExtrudeGeometry.prototype.addShape = function (t, e) {
        function n(t, e, n) {
            return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t)
        }

        function r(t, e, n) {
            var r, i, a = 1, s = t.x - e.x, l = t.y - e.y, c = n.x - t.x, u = n.y - t.y, h = s * s + l * l, f = s * u - l * c;
            if (Math.abs(f) > Number.EPSILON) {
                var d = Math.sqrt(h), p = Math.sqrt(c * c + u * u), m = e.x - l / d, v = e.y + s / d, g = n.x - u / p, y = n.y + c / p, x = ((g - m) * u - (y - v) * c) / (s * u - l * c);
                r = m + s * x - t.x, i = v + l * x - t.y;
                var _ = r * r + i * i;
                if (_ <= 2)return new o.Vector2(r, i);
                a = Math.sqrt(_ / 2)
            } else {
                var b = !1;
                s > Number.EPSILON ? c > Number.EPSILON && (b = !0) : s < -Number.EPSILON ? c < -Number.EPSILON && (b = !0) : Math.sign(l) === Math.sign(u) && (b = !0), b ? (r = -l, i = s, a = Math.sqrt(h)) : (r = s, i = l, a = Math.sqrt(h / 2))
            }
            return new o.Vector2(r / a, i / a)
        }

        function i() {
            if (_) {
                var t = 0, e = j * t;
                for (X = 0; X < H; X++)k = B[X], c(k[2] + e, k[1] + e, k[0] + e);
                for (t = w + 2 * x, e = j * t, X = 0; X < H; X++)k = B[X], c(k[0] + e, k[1] + e, k[2] + e)
            } else {
                for (X = 0; X < H; X++)k = B[X], c(k[2], k[1], k[0]);
                for (X = 0; X < H; X++)k = B[X], c(k[0] + j * w, k[1] + j * w, k[2] + j * w)
            }
        }

        function a() {
            var t = 0;
            for (s(U, t), t += U.length, A = 0, L = F.length; A < L; A++)T = F[A], s(T, t), t += T.length
        }

        function s(t, e) {
            var n, r;
            for (X = t.length; --X >= 0;) {
                n = X, r = X - 1, r < 0 && (r = t.length - 1);
                var i = 0, o = w + 2 * x;
                for (i = 0; i < o; i++) {
                    var a = j * i, s = j * (i + 1), l = e + n + a, c = e + r + a, h = e + r + s, f = e + n + s;
                    u(l, c, h, f, t, i, o, n, r)
                }
            }
        }

        function l(t, e, n) {
            C.vertices.push(new o.Vector3(t, e, n))
        }

        function c(t, e, n) {
            t += P, e += P, n += P, C.faces.push(new o.Face3(t, e, n, null, null, 0));
            var r = E.generateTopUV(C, t, e, n);
            C.faceVertexUvs[0].push(r)
        }

        function u(t, e, n, r, i, a, s, l, c) {
            t += P, e += P, n += P, r += P, C.faces.push(new o.Face3(t, e, r, null, null, 1)), C.faces.push(new o.Face3(e, n, r, null, null, 1));
            var u = E.generateSideWallUV(C, t, e, n, r);
            C.faceVertexUvs[0].push([u[0], u[1], u[3]]), C.faceVertexUvs[0].push([u[1], u[2], u[3]])
        }

        var h, f, d, p, m, v = void 0 !== e.amount ? e.amount : 100, g = void 0 !== e.bevelThickness ? e.bevelThickness : 6, y = void 0 !== e.bevelSize ? e.bevelSize : g - 2, x = void 0 !== e.bevelSegments ? e.bevelSegments : 3, _ = void 0 === e.bevelEnabled || e.bevelEnabled, b = void 0 !== e.curveSegments ? e.curveSegments : 12, w = void 0 !== e.steps ? e.steps : 1, M = e.extrudePath, S = !1, E = void 0 !== e.UVGenerator ? e.UVGenerator : o.ExtrudeGeometry.WorldUVGenerator;
        M && (h = M.getSpacedPoints(w), S = !0, _ = !1, f = void 0 !== e.frames ? e.frames : new o.TubeGeometry.FrenetFrames(M, w, !1), d = new o.Vector3, p = new o.Vector3, m = new o.Vector3), _ || (x = 0, g = 0, y = 0);
        var T, A, L, C = this, P = this.vertices.length, R = t.extractPoints(b), I = R.shape, F = R.holes, O = !o.ShapeUtils.isClockWise(I);
        if (O) {
            for (I = I.reverse(), A = 0, L = F.length; A < L; A++)T = F[A], o.ShapeUtils.isClockWise(T) && (F[A] = T.reverse());
            O = !1
        }
        var B = o.ShapeUtils.triangulateShape(I, F), U = I;
        for (A = 0, L = F.length; A < L; A++)T = F[A], I = I.concat(T);
        for (var D, N, z, G, V, k, j = I.length, H = B.length, W = [], X = 0, q = U.length, Y = q - 1, Z = X + 1; X < q; X++, Y++, Z++)Y === q && (Y = 0), Z === q && (Z = 0), W[X] = r(U[X], U[Y], U[Z]);
        var K, Q = [], J = W.concat();
        for (A = 0, L = F.length; A < L; A++) {
            for (T = F[A], K = [], X = 0, q = T.length, Y = q - 1, Z = X + 1; X < q; X++, Y++, Z++)Y === q && (Y = 0), Z === q && (Z = 0), K[X] = r(T[X], T[Y], T[Z]);
            Q.push(K), J = J.concat(K)
        }
        for (D = 0; D < x; D++) {
            for (z = D / x, G = g * (1 - z), N = y * Math.sin(z * Math.PI / 2), X = 0, q = U.length; X < q; X++)V = n(U[X], W[X], N), l(V.x, V.y, -G);
            for (A = 0, L = F.length; A < L; A++)for (T = F[A], K = Q[A], X = 0, q = T.length; X < q; X++)V = n(T[X], K[X], N), l(V.x, V.y, -G)
        }
        for (N = y, X = 0; X < j; X++)V = _ ? n(I[X], J[X], N) : I[X], S ? (p.copy(f.normals[0]).multiplyScalar(V.x), d.copy(f.binormals[0]).multiplyScalar(V.y), m.copy(h[0]).add(p).add(d), l(m.x, m.y, m.z)) : l(V.x, V.y, 0);
        var $;
        for ($ = 1; $ <= w; $++)for (X = 0; X < j; X++)V = _ ? n(I[X], J[X], N) : I[X], S ? (p.copy(f.normals[$]).multiplyScalar(V.x), d.copy(f.binormals[$]).multiplyScalar(V.y), m.copy(h[$]).add(p).add(d), l(m.x, m.y, m.z)) : l(V.x, V.y, v / w * $);
        for (D = x - 1; D >= 0; D--) {
            for (z = D / x, G = g * (1 - z), N = y * Math.sin(z * Math.PI / 2), X = 0, q = U.length; X < q; X++)V = n(U[X], W[X], N), l(V.x, V.y, v + G);
            for (A = 0, L = F.length; A < L; A++)for (T = F[A], K = Q[A], X = 0, q = T.length; X < q; X++)V = n(T[X], K[X], N), S ? l(V.x, V.y + h[w - 1].y, h[w - 1].x + G) : l(V.x, V.y, v + G)
        }
        i(), a()
    },o.ExtrudeGeometry.WorldUVGenerator = {
        generateTopUV: function (t, e, n, r) {
            var i = t.vertices, a = i[e], s = i[n], l = i[r];
            return [new o.Vector2(a.x, a.y), new o.Vector2(s.x, s.y), new o.Vector2(l.x, l.y)]
        }, generateSideWallUV: function (t, e, n, r, i) {
            var a = t.vertices, s = a[e], l = a[n], c = a[r], u = a[i];
            return Math.abs(s.y - l.y) < .01 ? [new o.Vector2(s.x, 1 - s.z), new o.Vector2(l.x, 1 - l.z), new o.Vector2(c.x, 1 - c.z), new o.Vector2(u.x, 1 - u.z)] : [new o.Vector2(s.y, 1 - s.z), new o.Vector2(l.y, 1 - l.z), new o.Vector2(c.y, 1 - c.z), new o.Vector2(u.y, 1 - u.z)]
        }
    },o.ShapeGeometry = function (t, e) {
        o.Geometry.call(this), this.type = "ShapeGeometry", Array.isArray(t) === !1 && (t = [t]), this.addShapeList(t, e), this.computeFaceNormals()
    },o.ShapeGeometry.prototype = Object.create(o.Geometry.prototype),o.ShapeGeometry.prototype.constructor = o.ShapeGeometry,o.ShapeGeometry.prototype.addShapeList = function (t, e) {
        for (var n = 0, r = t.length; n < r; n++)this.addShape(t[n], e);
        return this
    },o.ShapeGeometry.prototype.addShape = function (t, e) {
        void 0 === e && (e = {});
        var n, r, i, a = void 0 !== e.curveSegments ? e.curveSegments : 12, s = e.material, l = void 0 === e.UVGenerator ? o.ExtrudeGeometry.WorldUVGenerator : e.UVGenerator, c = this.vertices.length, u = t.extractPoints(a), h = u.shape, f = u.holes, d = !o.ShapeUtils.isClockWise(h);
        if (d) {
            for (h = h.reverse(), n = 0, r = f.length; n < r; n++)i = f[n], o.ShapeUtils.isClockWise(i) && (f[n] = i.reverse());
            d = !1
        }
        var p = o.ShapeUtils.triangulateShape(h, f);
        for (n = 0, r = f.length; n < r; n++)i = f[n], h = h.concat(i);
        var m, v, g = h.length, y = p.length;
        for (n = 0; n < g; n++)m = h[n], this.vertices.push(new o.Vector3(m.x, m.y, 0));
        for (n = 0; n < y; n++) {
            v = p[n];
            var x = v[0] + c, _ = v[1] + c, b = v[2] + c;
            this.faces.push(new o.Face3(x, _, b, null, null, s)), this.faceVertexUvs[0].push(l.generateTopUV(this, x, _, b))
        }
    },o.LatheBufferGeometry = function (t, e, n, r) {
        o.BufferGeometry.call(this), this.type = "LatheBufferGeometry", this.parameters = {
            points: t,
            segments: e,
            phiStart: n,
            phiLength: r
        }, e = Math.floor(e) || 12, n = n || 0, r = r || 2 * Math.PI, r = o.Math.clamp(r, 0, 2 * Math.PI);
        var i, a, s, l = (e + 1) * t.length, c = e * t.length * 2 * 3, u = new o.BufferAttribute(new (c > 65535 ? Uint32Array : Uint16Array)(c), 1), h = new o.BufferAttribute(new Float32Array(3 * l), 3), f = new o.BufferAttribute(new Float32Array(2 * l), 2), d = 0, p = 0, m = (1 / (t.length - 1), 1 / e), v = new o.Vector3, g = new o.Vector2;
        for (a = 0; a <= e; a++) {
            var y = n + a * m * r, x = Math.sin(y), _ = Math.cos(y);
            for (s = 0; s <= t.length - 1; s++)v.x = t[s].x * x, v.y = t[s].y, v.z = t[s].x * _, h.setXYZ(d, v.x, v.y, v.z), g.x = a / e, g.y = s / (t.length - 1), f.setXY(d, g.x, g.y), d++
        }
        for (a = 0; a < e; a++)for (s = 0; s < t.length - 1; s++) {
            i = s + a * t.length;
            var b = i, w = i + t.length, M = i + t.length + 1, S = i + 1;
            u.setX(p, b), p++, u.setX(p, w), p++, u.setX(p, S), p++, u.setX(p, w), p++, u.setX(p, M), p++, u.setX(p, S), p++
        }
        if (this.setIndex(u), this.addAttribute("position", h), this.addAttribute("uv", f), this.computeVertexNormals(), r === 2 * Math.PI) {
            var E = this.attributes.normal.array, T = new o.Vector3, A = new o.Vector3, L = new o.Vector3;
            for (i = e * t.length * 3, a = 0, s = 0; a < t.length; a++, s += 3)T.x = E[s + 0], T.y = E[s + 1], T.z = E[s + 2], A.x = E[i + s + 0], A.y = E[i + s + 1], A.z = E[i + s + 2], L.addVectors(T, A).normalize(), E[s + 0] = E[i + s + 0] = L.x, E[s + 1] = E[i + s + 1] = L.y, E[s + 2] = E[i + s + 2] = L.z
        }
    },o.LatheBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype),o.LatheBufferGeometry.prototype.constructor = o.LatheBufferGeometry,o.LatheGeometry = function (t, e, n, r) {
        o.Geometry.call(this), this.type = "LatheGeometry", this.parameters = {
            points: t,
            segments: e,
            phiStart: n,
            phiLength: r
        }, this.fromBufferGeometry(new o.LatheBufferGeometry(t, e, n, r)), this.mergeVertices()
    },o.LatheGeometry.prototype = Object.create(o.Geometry.prototype);
    o.LatheGeometry.prototype.constructor = o.LatheGeometry;
    o.PlaneGeometry = function (t, e, n, r) {
        o.Geometry.call(this), this.type = "PlaneGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: r
        }, this.fromBufferGeometry(new o.PlaneBufferGeometry(t, e, n, r))
    }, o.PlaneGeometry.prototype = Object.create(o.Geometry.prototype), o.PlaneGeometry.prototype.constructor = o.PlaneGeometry, o.PlaneBufferGeometry = function (t, e, n, r) {
        o.BufferGeometry.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: r
        };
        for (var i = t / 2, a = e / 2, s = Math.floor(n) || 1, l = Math.floor(r) || 1, c = s + 1, u = l + 1, h = t / s, f = e / l, d = new Float32Array(c * u * 3), p = new Float32Array(c * u * 3), m = new Float32Array(c * u * 2), v = 0, g = 0, y = 0; y < u; y++)for (var x = y * f - a, _ = 0; _ < c; _++) {
            var b = _ * h - i;
            d[v] = b, d[v + 1] = -x, p[v + 2] = 1, m[g] = _ / s, m[g + 1] = 1 - y / l, v += 3, g += 2
        }
        v = 0;
        for (var w = new (d.length / 3 > 65535 ? Uint32Array : Uint16Array)(s * l * 6), y = 0; y < l; y++)for (var _ = 0; _ < s; _++) {
            var M = _ + c * y, S = _ + c * (y + 1), E = _ + 1 + c * (y + 1), T = _ + 1 + c * y;
            w[v] = M, w[v + 1] = S, w[v + 2] = T, w[v + 3] = S, w[v + 4] = E, w[v + 5] = T, v += 6
        }
        this.setIndex(new o.BufferAttribute(w, 1)), this.addAttribute("position", new o.BufferAttribute(d, 3)), this.addAttribute("normal", new o.BufferAttribute(p, 3)), this.addAttribute("uv", new o.BufferAttribute(m, 2))
    }, o.PlaneBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.PlaneBufferGeometry.prototype.constructor = o.PlaneBufferGeometry, o.RingBufferGeometry = function (t, e, n, r, i, a) {
        o.BufferGeometry.call(this), this.type = "RingBufferGeometry", this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: n,
            phiSegments: r,
            thetaStart: i,
            thetaLength: a
        }, t = t || 20, e = e || 50, i = void 0 !== i ? i : 0, a = void 0 !== a ? a : 2 * Math.PI, n = void 0 !== n ? Math.max(3, n) : 8, r = void 0 !== r ? Math.max(1, r) : 1;
        var s, l, c, u = (n + 1) * (r + 1), h = n * r * 2 * 3, f = new o.BufferAttribute(new (h > 65535 ? Uint32Array : Uint16Array)(h), 1), d = new o.BufferAttribute(new Float32Array(3 * u), 3), p = new o.BufferAttribute(new Float32Array(3 * u), 3), m = new o.BufferAttribute(new Float32Array(2 * u), 2), v = 0, g = 0, y = t, x = (e - t) / r, _ = new o.Vector3, b = new o.Vector2;
        for (l = 0; l <= r; l++) {
            for (c = 0; c <= n; c++)s = i + c / n * a, _.x = y * Math.cos(s), _.y = y * Math.sin(s), d.setXYZ(v, _.x, _.y, _.z), p.setXYZ(v, 0, 0, 1), b.x = (_.x / e + 1) / 2, b.y = (_.y / e + 1) / 2, m.setXY(v, b.x, b.y), v++;
            y += x
        }
        for (l = 0; l < r; l++) {
            var w = l * (n + 1);
            for (c = 0; c < n; c++) {
                s = c + w;
                var M = s, S = s + n + 1, E = s + n + 2, T = s + 1;
                f.setX(g, M), g++, f.setX(g, S), g++, f.setX(g, E), g++, f.setX(g, M), g++, f.setX(g, E), g++, f.setX(g, T), g++
            }
        }
        this.setIndex(f), this.addAttribute("position", d), this.addAttribute("normal", p), this.addAttribute("uv", m)
    }, o.RingBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.RingBufferGeometry.prototype.constructor = o.RingBufferGeometry, o.RingGeometry = function (t, e, n, r, i, a) {
        o.Geometry.call(this), this.type = "RingGeometry", this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: n,
            phiSegments: r,
            thetaStart: i,
            thetaLength: a
        }, this.fromBufferGeometry(new o.RingBufferGeometry(t, e, n, r, i, a))
    }, o.RingGeometry.prototype = Object.create(o.Geometry.prototype), o.RingGeometry.prototype.constructor = o.RingGeometry, o.SphereGeometry = function (t, e, n, r, i, a, s) {
        o.Geometry.call(this), this.type = "SphereGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: r,
            phiLength: i,
            thetaStart: a,
            thetaLength: s
        }, this.fromBufferGeometry(new o.SphereBufferGeometry(t, e, n, r, i, a, s))
    }, o.SphereGeometry.prototype = Object.create(o.Geometry.prototype), o.SphereGeometry.prototype.constructor = o.SphereGeometry, o.SphereBufferGeometry = function (t, e, n, r, i, a, s) {
        o.BufferGeometry.call(this), this.type = "SphereBufferGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: r,
            phiLength: i,
            thetaStart: a,
            thetaLength: s
        }, t = t || 50, e = Math.max(3, Math.floor(e) || 8), n = Math.max(2, Math.floor(n) || 6), r = void 0 !== r ? r : 0, i = void 0 !== i ? i : 2 * Math.PI, a = void 0 !== a ? a : 0, s = void 0 !== s ? s : Math.PI;
        for (var l = a + s, c = (e + 1) * (n + 1), u = new o.BufferAttribute(new Float32Array(3 * c), 3), h = new o.BufferAttribute(new Float32Array(3 * c), 3), f = new o.BufferAttribute(new Float32Array(2 * c), 2), d = 0, p = [], m = new o.Vector3, v = 0; v <= n; v++) {
            for (var g = [], y = v / n, x = 0; x <= e; x++) {
                var _ = x / e, b = -t * Math.cos(r + _ * i) * Math.sin(a + y * s), w = t * Math.cos(a + y * s), M = t * Math.sin(r + _ * i) * Math.sin(a + y * s);
                m.set(b, w, M).normalize(), u.setXYZ(d, b, w, M), h.setXYZ(d, m.x, m.y, m.z), f.setXY(d, _, 1 - y), g.push(d), d++
            }
            p.push(g)
        }
        for (var S = [], v = 0; v < n; v++)for (var x = 0; x < e; x++) {
            var E = p[v][x + 1], T = p[v][x], A = p[v + 1][x], L = p[v + 1][x + 1];
            (0 !== v || a > 0) && S.push(E, T, L), (v !== n - 1 || l < Math.PI) && S.push(T, A, L)
        }
        this.setIndex(new (u.count > 65535 ? o.Uint32Attribute : o.Uint16Attribute)(S, 1)), this.addAttribute("position", u), this.addAttribute("normal", h), this.addAttribute("uv", f), this.boundingSphere = new o.Sphere(new o.Vector3, t)
    }, o.SphereBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.SphereBufferGeometry.prototype.constructor = o.SphereBufferGeometry, o.TextGeometry = function (t, e) {
        e = e || {};
        var n = e.font;
        if (n instanceof o.Font == !1)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new o.Geometry;
        var r = n.generateShapes(t, e.size, e.curveSegments);
        e.amount = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), o.ExtrudeGeometry.call(this, r, e), this.type = "TextGeometry"
    }, o.TextGeometry.prototype = Object.create(o.ExtrudeGeometry.prototype), o.TextGeometry.prototype.constructor = o.TextGeometry, o.TorusBufferGeometry = function (t, e, n, r, i) {
        o.BufferGeometry.call(this), this.type = "TorusBufferGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: n,
            tubularSegments: r,
            arc: i
        }, t = t || 100, e = e || 40, n = Math.floor(n) || 8, r = Math.floor(r) || 6, i = i || 2 * Math.PI;
        var a, s, l = (n + 1) * (r + 1), c = n * r * 2 * 3, u = new (c > 65535 ? Uint32Array : Uint16Array)(c), h = new Float32Array(3 * l), f = new Float32Array(3 * l), d = new Float32Array(2 * l), p = 0, m = 0, v = 0, g = new o.Vector3, y = new o.Vector3, x = new o.Vector3;
        for (a = 0; a <= n; a++)for (s = 0; s <= r; s++) {
            var _ = s / r * i, b = a / n * Math.PI * 2;
            y.x = (t + e * Math.cos(b)) * Math.cos(_), y.y = (t + e * Math.cos(b)) * Math.sin(_), y.z = e * Math.sin(b), h[p] = y.x, h[p + 1] = y.y, h[p + 2] = y.z, g.x = t * Math.cos(_), g.y = t * Math.sin(_), x.subVectors(y, g).normalize(), f[p] = x.x, f[p + 1] = x.y, f[p + 2] = x.z, d[m] = s / r, d[m + 1] = a / n, p += 3, m += 2
        }
        for (a = 1; a <= n; a++)for (s = 1; s <= r; s++) {
            var w = (r + 1) * a + s - 1, M = (r + 1) * (a - 1) + s - 1, S = (r + 1) * (a - 1) + s, E = (r + 1) * a + s;
            u[v] = w, u[v + 1] = M, u[v + 2] = E, u[v + 3] = M, u[v + 4] = S, u[v + 5] = E, v += 6
        }
        this.setIndex(new o.BufferAttribute(u, 1)), this.addAttribute("position", new o.BufferAttribute(h, 3)), this.addAttribute("normal", new o.BufferAttribute(f, 3)), this.addAttribute("uv", new o.BufferAttribute(d, 2))
    }, o.TorusBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.TorusBufferGeometry.prototype.constructor = o.TorusBufferGeometry, o.TorusGeometry = function (t, e, n, r, i) {
        o.Geometry.call(this), this.type = "TorusGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: n,
            tubularSegments: r,
            arc: i
        }, this.fromBufferGeometry(new o.TorusBufferGeometry(t, e, n, r, i))
    }, o.TorusGeometry.prototype = Object.create(o.Geometry.prototype), o.TorusGeometry.prototype.constructor = o.TorusGeometry, o.TorusKnotBufferGeometry = function (t, e, n, r, i, a) {
        function s(t, e, n, r, i) {
            var o = Math.cos(t), a = Math.sin(t), s = n / e * t, l = Math.cos(s);
            i.x = r * (2 + l) * .5 * o, i.y = r * (2 + l) * a * .5, i.z = r * Math.sin(s) * .5
        }

        o.BufferGeometry.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: n,
            radialSegments: r,
            p: i,
            q: a
        }, t = t || 100, e = e || 40, n = Math.floor(n) || 64, r = Math.floor(r) || 8, i = i || 2, a = a || 3;
        var l, c, u = (r + 1) * (n + 1), h = r * n * 2 * 3, f = new o.BufferAttribute(new (h > 65535 ? Uint32Array : Uint16Array)(h), 1), d = new o.BufferAttribute(new Float32Array(3 * u), 3), p = new o.BufferAttribute(new Float32Array(3 * u), 3), m = new o.BufferAttribute(new Float32Array(2 * u), 2), v = 0, g = 0, y = new o.Vector3, x = new o.Vector3, _ = new o.Vector2, b = new o.Vector3, w = new o.Vector3, M = new o.Vector3, S = new o.Vector3, E = new o.Vector3;
        for (l = 0; l <= n; ++l) {
            var T = l / n * i * Math.PI * 2;
            for (s(T, i, a, t, b), s(T + .01, i, a, t, w), S.subVectors(w, b), E.addVectors(w, b), M.crossVectors(S, E), E.crossVectors(M, S), M.normalize(), E.normalize(), c = 0; c <= r; ++c) {
                var A = c / r * Math.PI * 2, L = -e * Math.cos(A), C = e * Math.sin(A);
                y.x = b.x + (L * E.x + C * M.x), y.y = b.y + (L * E.y + C * M.y), y.z = b.z + (L * E.z + C * M.z), d.setXYZ(v, y.x, y.y, y.z), x.subVectors(y, b).normalize(), p.setXYZ(v, x.x, x.y, x.z), _.x = l / n, _.y = c / r, m.setXY(v, _.x, _.y), v++
            }
        }
        for (c = 1; c <= n; c++)for (l = 1; l <= r; l++) {
            var P = (r + 1) * (c - 1) + (l - 1), R = (r + 1) * c + (l - 1), I = (r + 1) * c + l, F = (r + 1) * (c - 1) + l;
            f.setX(g, P), g++, f.setX(g, R), g++, f.setX(g, F), g++, f.setX(g, R), g++, f.setX(g, I), g++, f.setX(g, F), g++
        }
        this.setIndex(f), this.addAttribute("position", d), this.addAttribute("normal", p), this.addAttribute("uv", m)
    }, o.TorusKnotBufferGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.TorusKnotBufferGeometry.prototype.constructor = o.TorusKnotBufferGeometry, o.TorusKnotGeometry = function (t, e, n, r, i, a, s) {
        o.Geometry.call(this), this.type = "TorusKnotGeometry", this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: n,
            radialSegments: r,
            p: i,
            q: a
        }, void 0 !== s && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new o.TorusKnotBufferGeometry(t, e, n, r, i, a)), this.mergeVertices()
    }, o.TorusKnotGeometry.prototype = Object.create(o.Geometry.prototype), o.TorusKnotGeometry.prototype.constructor = o.TorusKnotGeometry, o.TubeGeometry = function (t, e, n, r, i, a) {
        function s(t, e, n) {
            return P.vertices.push(new o.Vector3(t, e, n)) - 1
        }

        o.Geometry.call(this), this.type = "TubeGeometry", this.parameters = {
            path: t,
            segments: e,
            radius: n,
            radialSegments: r,
            closed: i,
            taper: a
        }, e = e || 64, n = n || 1, r = r || 8, i = i || !1, a = a || o.TubeGeometry.NoTaper;
        var l, c, u, h, f, d, p, m, v, g, y, x, _, b, w, M, S, E, T, A, L, C = [], P = this, R = e + 1, I = new o.Vector3, F = new o.TubeGeometry.FrenetFrames(t, e, i), O = F.tangents, B = F.normals, U = F.binormals;
        for (this.tangents = O, this.normals = B, this.binormals = U, g = 0; g < R; g++)for (C[g] = [], h = g / (R - 1), v = t.getPointAt(h), l = O[g], c = B[g], u = U[g], d = n * a(h), y = 0; y < r; y++)f = y / r * 2 * Math.PI, p = -d * Math.cos(f), m = d * Math.sin(f), I.copy(v), I.x += p * c.x + m * u.x, I.y += p * c.y + m * u.y, I.z += p * c.z + m * u.z, C[g][y] = s(I.x, I.y, I.z);
        for (g = 0; g < e; g++)for (y = 0; y < r; y++)x = i ? (g + 1) % e : g + 1, _ = (y + 1) % r, b = C[g][y], w = C[x][y], M = C[x][_], S = C[g][_], E = new o.Vector2(g / e, y / r), T = new o.Vector2((g + 1) / e, y / r), A = new o.Vector2((g + 1) / e, (y + 1) / r), L = new o.Vector2(g / e, (y + 1) / r), this.faces.push(new o.Face3(b, w, S)), this.faceVertexUvs[0].push([E, T, L]), this.faces.push(new o.Face3(w, M, S)), this.faceVertexUvs[0].push([T.clone(), A, L.clone()]);
        this.computeFaceNormals(), this.computeVertexNormals()
    }, o.TubeGeometry.prototype = Object.create(o.Geometry.prototype), o.TubeGeometry.prototype.constructor = o.TubeGeometry, o.TubeGeometry.NoTaper = function (t) {
        return 1
    }, o.TubeGeometry.SinusoidalTaper = function (t) {
        return Math.sin(Math.PI * t)
    }, o.TubeGeometry.FrenetFrames = function (t, e, n) {
        function r() {
            p[0] = new o.Vector3, m[0] = new o.Vector3, a = Number.MAX_VALUE, s = Math.abs(d[0].x), l = Math.abs(d[0].y), c = Math.abs(d[0].z), s <= a && (a = s, f.set(1, 0, 0)), l <= a && (a = l, f.set(0, 1, 0)), c <= a && f.set(0, 0, 1), v.crossVectors(d[0], f).normalize(), p[0].crossVectors(d[0], v), m[0].crossVectors(d[0], p[0])
        }

        var i, a, s, l, c, u, h, f = new o.Vector3, d = [], p = [], m = [], v = new o.Vector3, g = new o.Matrix4, y = e + 1;
        for (this.tangents = d, this.normals = p, this.binormals = m, u = 0; u < y; u++)h = u / (y - 1), d[u] = t.getTangentAt(h), d[u].normalize();
        for (r(), u = 1; u < y; u++)p[u] = p[u - 1].clone(), m[u] = m[u - 1].clone(), v.crossVectors(d[u - 1], d[u]), v.length() > Number.EPSILON && (v.normalize(), i = Math.acos(o.Math.clamp(d[u - 1].dot(d[u]), -1, 1)), p[u].applyMatrix4(g.makeRotationAxis(v, i))), m[u].crossVectors(d[u], p[u]);
        if (n)for (i = Math.acos(o.Math.clamp(p[0].dot(p[y - 1]), -1, 1)), i /= y - 1, d[0].dot(v.crossVectors(p[0], p[y - 1])) > 0 && (i = -i), u = 1; u < y; u++)p[u].applyMatrix4(g.makeRotationAxis(d[u], i * u)), m[u].crossVectors(d[u], p[u])
    }, o.PolyhedronGeometry = function (t, e, n, r) {
        function i(t) {
            var e = t.normalize().clone();
            e.index = h.vertices.push(e) - 1;
            var n = l(t) / 2 / Math.PI + .5, r = c(t) / Math.PI + .5;
            return e.uv = new o.Vector2(n, 1 - r), e
        }

        function a(t, e, n) {
            var r = new o.Face3(t.index, e.index, n.index, [t.clone(), e.clone(), n.clone()]);
            h.faces.push(r), _.copy(t).add(e).add(n).divideScalar(3);
            var i = l(_);
            h.faceVertexUvs[0].push([u(t.uv, t, i), u(e.uv, e, i), u(n.uv, n, i)])
        }

        function s(t, e) {
            for (var n = Math.pow(2, e), r = i(h.vertices[t.a]), o = i(h.vertices[t.b]), s = i(h.vertices[t.c]), l = [], c = 0; c <= n; c++) {
                l[c] = [];
                for (var u = i(r.clone().lerp(s, c / n)), f = i(o.clone().lerp(s, c / n)), d = n - c, p = 0; p <= d; p++)0 === p && c === n ? l[c][p] = u : l[c][p] = i(u.clone().lerp(f, p / d))
            }
            for (var c = 0; c < n; c++)for (var p = 0; p < 2 * (n - c) - 1; p++) {
                var m = Math.floor(p / 2);
                p % 2 === 0 ? a(l[c][m + 1], l[c + 1][m], l[c][m]) : a(l[c][m + 1], l[c + 1][m + 1], l[c + 1][m])
            }
        }

        function l(t) {
            return Math.atan2(t.z, -t.x)
        }

        function c(t) {
            return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z))
        }

        function u(t, e, n) {
            return n < 0 && 1 === t.x && (t = new o.Vector2(t.x - 1, t.y)), 0 === e.x && 0 === e.z && (t = new o.Vector2(n / 2 / Math.PI + .5, t.y)), t.clone()
        }

        o.Geometry.call(this), this.type = "PolyhedronGeometry", this.parameters = {
            vertices: t,
            indices: e,
            radius: n,
            detail: r
        }, n = n || 1, r = r || 0;
        for (var h = this, f = 0, d = t.length; f < d; f += 3)i(new o.Vector3(t[f], t[f + 1], t[f + 2]));
        for (var p = this.vertices, m = [], f = 0, v = 0, d = e.length; f < d; f += 3, v++) {
            var g = p[e[f]], y = p[e[f + 1]], x = p[e[f + 2]];
            m[v] = new o.Face3(g.index, y.index, x.index, [g.clone(), y.clone(), x.clone()])
        }
        for (var _ = new o.Vector3, f = 0, d = m.length; f < d; f++)s(m[f], r);
        for (var f = 0, d = this.faceVertexUvs[0].length; f < d; f++) {
            var b = this.faceVertexUvs[0][f], w = b[0].x, M = b[1].x, S = b[2].x, E = Math.max(w, M, S), T = Math.min(w, M, S);
            E > .9 && T < .1 && (w < .2 && (b[0].x += 1), M < .2 && (b[1].x += 1), S < .2 && (b[2].x += 1))
        }
        for (var f = 0, d = this.vertices.length; f < d; f++)this.vertices[f].multiplyScalar(n);
        this.mergeVertices(), this.computeFaceNormals(), this.boundingSphere = new o.Sphere(new o.Vector3, n)
    }, o.PolyhedronGeometry.prototype = Object.create(o.Geometry.prototype), o.PolyhedronGeometry.prototype.constructor = o.PolyhedronGeometry, o.DodecahedronGeometry = function (t, e) {
        var n = (1 + Math.sqrt(5)) / 2, r = 1 / n, i = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, 0, -n, 0, -r, n, 0, -r, -n, 0, r, n, 0, r], a = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
        o.PolyhedronGeometry.call(this, i, a, t, e), this.type = "DodecahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }, o.DodecahedronGeometry.prototype = Object.create(o.PolyhedronGeometry.prototype), o.DodecahedronGeometry.prototype.constructor = o.DodecahedronGeometry, o.IcosahedronGeometry = function (t, e) {
        var n = (1 + Math.sqrt(5)) / 2, r = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], i = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
        o.PolyhedronGeometry.call(this, r, i, t, e), this.type = "IcosahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }, o.IcosahedronGeometry.prototype = Object.create(o.PolyhedronGeometry.prototype), o.IcosahedronGeometry.prototype.constructor = o.IcosahedronGeometry, o.OctahedronGeometry = function (t, e) {
        var n = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], r = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
        o.PolyhedronGeometry.call(this, n, r, t, e), this.type = "OctahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }, o.OctahedronGeometry.prototype = Object.create(o.PolyhedronGeometry.prototype), o.OctahedronGeometry.prototype.constructor = o.OctahedronGeometry, o.TetrahedronGeometry = function (t, e) {
        var n = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], r = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
        o.PolyhedronGeometry.call(this, n, r, t, e), this.type = "TetrahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }, o.TetrahedronGeometry.prototype = Object.create(o.PolyhedronGeometry.prototype), o.TetrahedronGeometry.prototype.constructor = o.TetrahedronGeometry, o.ParametricGeometry = function (t, e, n) {
        o.Geometry.call(this), this.type = "ParametricGeometry", this.parameters = {func: t, slices: e, stacks: n};
        var r, i, a, s, l, c = this.vertices, u = this.faces, h = this.faceVertexUvs[0], f = e + 1;
        for (r = 0; r <= n; r++)for (l = r / n, i = 0; i <= e; i++)s = i / e, a = t(s, l), c.push(a);
        var d, p, m, v, g, y, x, _;
        for (r = 0; r < n; r++)for (i = 0; i < e; i++)d = r * f + i, p = r * f + i + 1, m = (r + 1) * f + i + 1, v = (r + 1) * f + i, g = new o.Vector2(i / e, r / n), y = new o.Vector2((i + 1) / e, r / n), x = new o.Vector2((i + 1) / e, (r + 1) / n), _ = new o.Vector2(i / e, (r + 1) / n), u.push(new o.Face3(d, p, v)), h.push([g, y, _]), u.push(new o.Face3(p, m, v)), h.push([y.clone(), x, _.clone()]);
        this.computeFaceNormals(), this.computeVertexNormals()
    }, o.ParametricGeometry.prototype = Object.create(o.Geometry.prototype), o.ParametricGeometry.prototype.constructor = o.ParametricGeometry, o.WireframeGeometry = function (t) {
        function e(t, e) {
            return t - e
        }

        o.BufferGeometry.call(this);
        var n = [0, 0], r = {}, i = ["a", "b", "c"];
        if (t instanceof o.Geometry) {
            for (var a = t.vertices, s = t.faces, l = 0, c = new Uint32Array(6 * s.length), u = 0, h = s.length; u < h; u++)for (var f = s[u], d = 0; d < 3; d++) {
                n[0] = f[i[d]], n[1] = f[i[(d + 1) % 3]], n.sort(e);
                var p = n.toString();
                void 0 === r[p] && (c[2 * l] = n[0], c[2 * l + 1] = n[1], r[p] = !0, l++)
            }
            for (var m = new Float32Array(2 * l * 3), u = 0, h = l; u < h; u++)for (var d = 0; d < 2; d++) {
                var v = a[c[2 * u + d]], g = 6 * u + 3 * d;
                m[g + 0] = v.x, m[g + 1] = v.y, m[g + 2] = v.z
            }
            this.addAttribute("position", new o.BufferAttribute(m, 3))
        } else if (t instanceof o.BufferGeometry)if (null !== t.index) {
            var y = t.index.array, a = t.attributes.position, x = t.groups, l = 0;
            0 === x.length && t.addGroup(0, y.length);
            for (var c = new Uint32Array(2 * y.length), _ = 0, b = x.length; _ < b; ++_)for (var w = x[_], M = w.start, S = w.count, u = M, E = M + S; u < E; u += 3)for (var d = 0; d < 3; d++) {
                n[0] = y[u + d], n[1] = y[u + (d + 1) % 3], n.sort(e);
                var p = n.toString();
                void 0 === r[p] && (c[2 * l] = n[0], c[2 * l + 1] = n[1], r[p] = !0, l++)
            }
            for (var m = new Float32Array(2 * l * 3), u = 0, h = l; u < h; u++)for (var d = 0; d < 2; d++) {
                var g = 6 * u + 3 * d, T = c[2 * u + d];
                m[g + 0] = a.getX(T), m[g + 1] = a.getY(T), m[g + 2] = a.getZ(T)
            }
            this.addAttribute("position", new o.BufferAttribute(m, 3))
        } else {
            for (var a = t.attributes.position.array, l = a.length / 3, A = l / 3, m = new Float32Array(2 * l * 3), u = 0, h = A; u < h; u++)for (var d = 0; d < 3; d++) {
                var g = 18 * u + 6 * d, L = 9 * u + 3 * d;
                m[g + 0] = a[L], m[g + 1] = a[L + 1], m[g + 2] = a[L + 2];
                var T = 9 * u + 3 * ((d + 1) % 3);
                m[g + 3] = a[T], m[g + 4] = a[T + 1], m[g + 5] = a[T + 2]
            }
            this.addAttribute("position", new o.BufferAttribute(m, 3))
        }
    }, o.WireframeGeometry.prototype = Object.create(o.BufferGeometry.prototype), o.WireframeGeometry.prototype.constructor = o.WireframeGeometry, o.AxisHelper = function (t) {
        t = t || 1;
        var e = new Float32Array([0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t]), n = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]), r = new o.BufferGeometry;
        r.addAttribute("position", new o.BufferAttribute(e, 3)), r.addAttribute("color", new o.BufferAttribute(n, 3));
        var i = new o.LineBasicMaterial({vertexColors: o.VertexColors});
        o.LineSegments.call(this, r, i)
    }, o.AxisHelper.prototype = Object.create(o.LineSegments.prototype), o.AxisHelper.prototype.constructor = o.AxisHelper, o.ArrowHelper = function () {
        var t = new o.BufferGeometry;
        t.addAttribute("position", new o.Float32Attribute([0, 0, 0, 0, 1, 0], 3));
        var e = new o.CylinderBufferGeometry(0, .5, 1, 5, 1);
        return e.translate(0, -.5, 0), function (n, r, i, a, s, l) {
            o.Object3D.call(this), void 0 === a && (a = 16776960), void 0 === i && (i = 1), void 0 === s && (s = .2 * i), void 0 === l && (l = .2 * s), this.position.copy(r), this.line = new o.Line(t, new o.LineBasicMaterial({color: a})), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new o.Mesh(e, new o.MeshBasicMaterial({color: a})), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(n), this.setLength(i, s, l)
        }
    }(), o.ArrowHelper.prototype = Object.create(o.Object3D.prototype), o.ArrowHelper.prototype.constructor = o.ArrowHelper, o.ArrowHelper.prototype.setDirection = function () {
        var t, e = new o.Vector3;
        return function (n) {
            n.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : n.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (e.set(n.z, 0, -n.x).normalize(), t = Math.acos(n.y), this.quaternion.setFromAxisAngle(e, t))
        }
    }(), o.ArrowHelper.prototype.setLength = function (t, e, n) {
        void 0 === e && (e = .2 * t), void 0 === n && (n = .2 * e), this.line.scale.set(1, Math.max(0, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix()
    }, o.ArrowHelper.prototype.setColor = function (t) {
        this.line.material.color.copy(t), this.cone.material.color.copy(t)
    }, o.BoxHelper = function (t, e) {
        void 0 === e && (e = 16776960);
        var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), r = new Float32Array(24), i = new o.BufferGeometry;
        i.setIndex(new o.BufferAttribute(n, 1)), i.addAttribute("position", new o.BufferAttribute(r, 3)), o.LineSegments.call(this, i, new o.LineBasicMaterial({color: e})), void 0 !== t && this.update(t)
    }, o.BoxHelper.prototype = Object.create(o.LineSegments.prototype), o.BoxHelper.prototype.constructor = o.BoxHelper, o.BoxHelper.prototype.update = function () {
        var t = new o.Box3;
        return function (e) {
            if (e instanceof o.Box3 ? t.copy(e) : t.setFromObject(e), !t.isEmpty()) {
                var n = t.min, r = t.max, i = this.geometry.attributes.position, a = i.array;
                a[0] = r.x, a[1] = r.y, a[2] = r.z, a[3] = n.x, a[4] = r.y, a[5] = r.z, a[6] = n.x, a[7] = n.y, a[8] = r.z, a[9] = r.x, a[10] = n.y, a[11] = r.z, a[12] = r.x, a[13] = r.y, a[14] = n.z, a[15] = n.x, a[16] = r.y, a[17] = n.z, a[18] = n.x, a[19] = n.y, a[20] = n.z, a[21] = r.x, a[22] = n.y, a[23] = n.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere()
            }
        }
    }(), o.BoundingBoxHelper = function (t, e) {
        var n = void 0 !== e ? e : 8947848;
        this.object = t, this.box = new o.Box3, o.Mesh.call(this, new o.BoxGeometry(1, 1, 1), new o.MeshBasicMaterial({
            color: n,
            wireframe: !0
        }))
    }, o.BoundingBoxHelper.prototype = Object.create(o.Mesh.prototype), o.BoundingBoxHelper.prototype.constructor = o.BoundingBoxHelper, o.BoundingBoxHelper.prototype.update = function () {
        this.box.setFromObject(this.object), this.box.size(this.scale), this.box.center(this.position)
    }, o.CameraHelper = function (t) {
        function e(t, e, r) {
            n(t, r), n(e, r)
        }

        function n(t, e) {
            r.vertices.push(new o.Vector3), r.colors.push(new o.Color(e)), void 0 === a[t] && (a[t] = []), a[t].push(r.vertices.length - 1)
        }

        var r = new o.Geometry, i = new o.LineBasicMaterial({
            color: 16777215,
            vertexColors: o.FaceColors
        }), a = {}, s = 16755200, l = 16711680, c = 43775, u = 16777215, h = 3355443;
        e("n1", "n2", s), e("n2", "n4", s), e("n4", "n3", s), e("n3", "n1", s), e("f1", "f2", s), e("f2", "f4", s), e("f4", "f3", s), e("f3", "f1", s), e("n1", "f1", s), e("n2", "f2", s), e("n3", "f3", s), e("n4", "f4", s), e("p", "n1", l), e("p", "n2", l), e("p", "n3", l), e("p", "n4", l), e("u1", "u2", c), e("u2", "u3", c), e("u3", "u1", c), e("c", "t", u), e("p", "c", h), e("cn1", "cn2", h), e("cn3", "cn4", h), e("cf1", "cf2", h), e("cf3", "cf4", h), o.LineSegments.call(this, r, i), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
    }, o.CameraHelper.prototype = Object.create(o.LineSegments.prototype), o.CameraHelper.prototype.constructor = o.CameraHelper, o.CameraHelper.prototype.update = function () {
        function t(t, o, a, s) {
            r.set(o, a, s).unproject(i);
            var l = n[t];
            if (void 0 !== l)for (var c = 0, u = l.length; c < u; c++)e.vertices[l[c]].copy(r)
        }

        var e, n, r = new o.Vector3, i = new o.Camera;
        return function () {
            e = this.geometry, n = this.pointMap;
            var r = 1, o = 1;
            i.projectionMatrix.copy(this.camera.projectionMatrix), t("c", 0, 0, -1), t("t", 0, 0, 1), t("n1", -r, -o, -1), t("n2", r, -o, -1), t("n3", -r, o, -1), t("n4", r, o, -1), t("f1", -r, -o, 1), t("f2", r, -o, 1), t("f3", -r, o, 1), t("f4", r, o, 1), t("u1", .7 * r, 1.1 * o, -1), t("u2", .7 * -r, 1.1 * o, -1), t("u3", 0, 2 * o, -1), t("cf1", -r, 0, 1), t("cf2", r, 0, 1), t("cf3", 0, -o, 1), t("cf4", 0, o, 1), t("cn1", -r, 0, -1), t("cn2", r, 0, -1), t("cn3", 0, -o, -1), t("cn4", 0, o, -1), e.verticesNeedUpdate = !0
        }
    }(), o.DirectionalLightHelper = function (t, e) {
        o.Object3D.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, void 0 === e && (e = 1);
        var n = new o.BufferGeometry;
        n.addAttribute("position", new o.Float32Attribute([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
        var r = new o.LineBasicMaterial({fog: !1});
        this.add(new o.Line(n, r)), n = new o.BufferGeometry, n.addAttribute("position", new o.Float32Attribute([0, 0, 0, 0, 0, 1], 3)), this.add(new o.Line(n, r)), this.update()
    }, o.DirectionalLightHelper.prototype = Object.create(o.Object3D.prototype), o.DirectionalLightHelper.prototype.constructor = o.DirectionalLightHelper, o.DirectionalLightHelper.prototype.dispose = function () {
        var t = this.children[0], e = this.children[1];
        t.geometry.dispose(), t.material.dispose(), e.geometry.dispose(), e.material.dispose()
    }, o.DirectionalLightHelper.prototype.update = function () {
        var t = new o.Vector3, e = new o.Vector3, n = new o.Vector3;
        return function () {
            t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), n.subVectors(e, t);
            var r = this.children[0], i = this.children[1];
            r.lookAt(n), r.material.color.copy(this.light.color).multiplyScalar(this.light.intensity), i.lookAt(n), i.scale.z = n.length()
        }
    }(), o.EdgesHelper = function (t, e, n) {
        var r = void 0 !== e ? e : 16777215;
        o.LineSegments.call(this, new o.EdgesGeometry(t.geometry, n), new o.LineBasicMaterial({color: r})), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
    }, o.EdgesHelper.prototype = Object.create(o.LineSegments.prototype), o.EdgesHelper.prototype.constructor = o.EdgesHelper, o.FaceNormalsHelper = function (t, e, n, r) {
        this.object = t, this.size = void 0 !== e ? e : 1;
        var i = void 0 !== n ? n : 16776960, a = void 0 !== r ? r : 1, s = 0, l = this.object.geometry;
        l instanceof o.Geometry ? s = l.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
        var c = new o.BufferGeometry, u = new o.Float32Attribute(2 * s * 3, 3);
        c.addAttribute("position", u), o.LineSegments.call(this, c, new o.LineBasicMaterial({
            color: i,
            linewidth: a
        })), this.matrixAutoUpdate = !1, this.update()
    }, o.FaceNormalsHelper.prototype = Object.create(o.LineSegments.prototype), o.FaceNormalsHelper.prototype.constructor = o.FaceNormalsHelper, o.FaceNormalsHelper.prototype.update = function () {
        var t = new o.Vector3, e = new o.Vector3, n = new o.Matrix3;
        return function () {
            this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
            for (var r = this.object.matrixWorld, i = this.geometry.attributes.position, o = this.object.geometry, a = o.vertices, s = o.faces, l = 0, c = 0, u = s.length; c < u; c++) {
                var h = s[c], f = h.normal;
                t.copy(a[h.a]).add(a[h.b]).add(a[h.c]).divideScalar(3).applyMatrix4(r), e.copy(f).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), i.setXYZ(l, t.x, t.y, t.z), l += 1, i.setXYZ(l, e.x, e.y, e.z), l += 1
            }
            return i.needsUpdate = !0, this
        }
    }(), o.GridHelper = function (t, e, n, r) {
        n = new o.Color(void 0 !== n ? n : 4473924), r = new o.Color(void 0 !== r ? r : 8947848);
        for (var i = [], a = [], s = -t, l = 0; s <= t; s += e) {
            i.push(-t, 0, s, t, 0, s), i.push(s, 0, -t, s, 0, t);
            var c = 0 === s ? n : r;
            c.toArray(a, l), l += 3, c.toArray(a, l), l += 3, c.toArray(a, l), l += 3, c.toArray(a, l), l += 3
        }
        var u = new o.BufferGeometry;
        u.addAttribute("position", new o.Float32Attribute(i, 3)), u.addAttribute("color", new o.Float32Attribute(a, 3));
        var h = new o.LineBasicMaterial({vertexColors: o.VertexColors});
        o.LineSegments.call(this, u, h)
    }, o.GridHelper.prototype = Object.create(o.LineSegments.prototype), o.GridHelper.prototype.constructor = o.GridHelper, o.GridHelper.prototype.setColors = function () {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }, o.HemisphereLightHelper = function (t, e) {
        o.Object3D.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.colors = [new o.Color, new o.Color];
        var n = new o.SphereGeometry(e, 4, 2);
        n.rotateX(-Math.PI / 2);
        for (var r = 0, i = 8; r < i; r++)n.faces[r].color = this.colors[r < 4 ? 0 : 1];
        var a = new o.MeshBasicMaterial({vertexColors: o.FaceColors, wireframe: !0});
        this.lightSphere = new o.Mesh(n, a), this.add(this.lightSphere), this.update()
    }, o.HemisphereLightHelper.prototype = Object.create(o.Object3D.prototype), o.HemisphereLightHelper.prototype.constructor = o.HemisphereLightHelper, o.HemisphereLightHelper.prototype.dispose = function () {
        this.lightSphere.geometry.dispose(), this.lightSphere.material.dispose()
    },o.HemisphereLightHelper.prototype.update = function () {
        var t = new o.Vector3;
        return function () {
            this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity), this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity), this.lightSphere.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate()), this.lightSphere.geometry.colorsNeedUpdate = !0
        }
    }(),o.PointLightHelper = function (t, e) {
        this.light = t, this.light.updateMatrixWorld();
        var n = new o.SphereBufferGeometry(e, 4, 2), r = new o.MeshBasicMaterial({wireframe: !0, fog: !1});
        r.color.copy(this.light.color).multiplyScalar(this.light.intensity), o.Mesh.call(this, n, r), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1
    },o.PointLightHelper.prototype = Object.create(o.Mesh.prototype),o.PointLightHelper.prototype.constructor = o.PointLightHelper,o.PointLightHelper.prototype.dispose = function () {
        this.geometry.dispose(), this.material.dispose()
    },o.PointLightHelper.prototype.update = function () {
        this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    },o.SkeletonHelper = function (t) {
        this.bones = this.getBoneList(t);
        for (var e = new o.Geometry, n = 0; n < this.bones.length; n++) {
            var r = this.bones[n];
            r.parent instanceof o.Bone && (e.vertices.push(new o.Vector3), e.vertices.push(new o.Vector3), e.colors.push(new o.Color(0, 0, 1)), e.colors.push(new o.Color(0, 1, 0)))
        }
        e.dynamic = !0;
        var i = new o.LineBasicMaterial({vertexColors: o.VertexColors, depthTest: !1, depthWrite: !1, transparent: !0});
        o.LineSegments.call(this, e, i), this.root = t, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.update()
    },o.SkeletonHelper.prototype = Object.create(o.LineSegments.prototype),o.SkeletonHelper.prototype.constructor = o.SkeletonHelper,o.SkeletonHelper.prototype.getBoneList = function (t) {
        var e = [];
        t instanceof o.Bone && e.push(t);
        for (var n = 0; n < t.children.length; n++)e.push.apply(e, this.getBoneList(t.children[n]));
        return e
    },o.SkeletonHelper.prototype.update = function () {
        for (var t = this.geometry, e = (new o.Matrix4).getInverse(this.root.matrixWorld), n = new o.Matrix4, r = 0, i = 0; i < this.bones.length; i++) {
            var a = this.bones[i];
            a.parent instanceof o.Bone && (n.multiplyMatrices(e, a.matrixWorld), t.vertices[r].setFromMatrixPosition(n), n.multiplyMatrices(e, a.parent.matrixWorld), t.vertices[r + 1].setFromMatrixPosition(n), r += 2)
        }
        t.verticesNeedUpdate = !0, t.computeBoundingSphere()
    },o.SpotLightHelper = function (t) {
        o.Object3D.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1;
        for (var e = new o.BufferGeometry, n = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], r = 0, i = 1, a = 32; r < a; r++, i++) {
            var s = r / a * Math.PI * 2, l = i / a * Math.PI * 2;
            n.push(Math.cos(s), Math.sin(s), 1, Math.cos(l), Math.sin(l), 1)
        }
        e.addAttribute("position", new o.Float32Attribute(n, 3));
        var c = new o.LineBasicMaterial({fog: !1});
        this.cone = new o.LineSegments(e, c), this.add(this.cone), this.update()
    },o.SpotLightHelper.prototype = Object.create(o.Object3D.prototype),o.SpotLightHelper.prototype.constructor = o.SpotLightHelper,o.SpotLightHelper.prototype.dispose = function () {
        this.cone.geometry.dispose(), this.cone.material.dispose()
    },o.SpotLightHelper.prototype.update = function () {
        var t = new o.Vector3, e = new o.Vector3;
        return function () {
            var n = this.light.distance ? this.light.distance : 1e3, r = n * Math.tan(this.light.angle);
            this.cone.scale.set(r, r, n), t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(e.sub(t)), this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
        }
    }(),o.VertexNormalsHelper = function (t, e, n, r) {
        this.object = t, this.size = void 0 !== e ? e : 1;
        var i = void 0 !== n ? n : 16711680, a = void 0 !== r ? r : 1, s = 0, l = this.object.geometry;
        l instanceof o.Geometry ? s = 3 * l.faces.length : l instanceof o.BufferGeometry && (s = l.attributes.normal.count);
        var c = new o.BufferGeometry, u = new o.Float32Attribute(2 * s * 3, 3);
        c.addAttribute("position", u), o.LineSegments.call(this, c, new o.LineBasicMaterial({
            color: i,
            linewidth: a
        })), this.matrixAutoUpdate = !1, this.update()
    },o.VertexNormalsHelper.prototype = Object.create(o.LineSegments.prototype),o.VertexNormalsHelper.prototype.constructor = o.VertexNormalsHelper,o.VertexNormalsHelper.prototype.update = function () {
        var t = new o.Vector3, e = new o.Vector3, n = new o.Matrix3;
        return function () {
            var r = ["a", "b", "c"];
            this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
            var i = this.object.matrixWorld, a = this.geometry.attributes.position, s = this.object.geometry;
            if (s instanceof o.Geometry)for (var l = s.vertices, c = s.faces, u = 0, h = 0, f = c.length; h < f; h++)for (var d = c[h], p = 0, m = d.vertexNormals.length; p < m; p++) {
                var v = l[d[r[p]]], g = d.vertexNormals[p];
                t.copy(v).applyMatrix4(i), e.copy(g).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), a.setXYZ(u, t.x, t.y, t.z), u += 1, a.setXYZ(u, e.x, e.y, e.z), u += 1
            } else if (s instanceof o.BufferGeometry)for (var y = s.attributes.position, x = s.attributes.normal, u = 0, p = 0, m = y.count; p < m; p++)t.set(y.getX(p), y.getY(p), y.getZ(p)).applyMatrix4(i), e.set(x.getX(p), x.getY(p), x.getZ(p)), e.applyMatrix3(n).normalize().multiplyScalar(this.size).add(t), a.setXYZ(u, t.x, t.y, t.z), u += 1, a.setXYZ(u, e.x, e.y, e.z), u += 1;
            return a.needsUpdate = !0, this
        }
    }(),o.WireframeHelper = function (t, e) {
        var n = void 0 !== e ? e : 16777215;
        o.LineSegments.call(this, new o.WireframeGeometry(t.geometry), new o.LineBasicMaterial({color: n})), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
    },o.WireframeHelper.prototype = Object.create(o.LineSegments.prototype),o.WireframeHelper.prototype.constructor = o.WireframeHelper,o.ImmediateRenderObject = function (t) {
        o.Object3D.call(this), this.material = t, this.render = function (t) {
        }
    },o.ImmediateRenderObject.prototype = Object.create(o.Object3D.prototype),o.ImmediateRenderObject.prototype.constructor = o.ImmediateRenderObject,o.MorphBlendMesh = function (t, e) {
        o.Mesh.call(this, t, e), this.animationsMap = {}, this.animationsList = [];
        var n = this.geometry.morphTargets.length, r = "__default", i = 0, a = n - 1, s = n / 1;
        this.createAnimation(r, i, a, s), this.setAnimationWeight(r, 1)
    },o.MorphBlendMesh.prototype = Object.create(o.Mesh.prototype),o.MorphBlendMesh.prototype.constructor = o.MorphBlendMesh,o.MorphBlendMesh.prototype.createAnimation = function (t, e, n, r) {
        var i = {
            start: e,
            end: n,
            length: n - e + 1,
            fps: r,
            duration: (n - e) / r,
            lastFrame: 0,
            currentFrame: 0,
            active: !1,
            time: 0,
            direction: 1,
            weight: 1,
            directionBackwards: !1,
            mirroredLoop: !1
        };
        this.animationsMap[t] = i, this.animationsList.push(i)
    },o.MorphBlendMesh.prototype.autoCreateAnimations = function (t) {
        for (var e, n = /([a-z]+)_?(\d+)/i, r = {}, i = this.geometry, o = 0, a = i.morphTargets.length; o < a; o++) {
            var s = i.morphTargets[o], l = s.name.match(n);
            if (l && l.length > 1) {
                var c = l[1];
                r[c] || (r[c] = {start: 1 / 0, end: -(1 / 0)});
                var u = r[c];
                o < u.start && (u.start = o), o > u.end && (u.end = o), e || (e = c)
            }
        }
        for (var c in r) {
            var u = r[c];
            this.createAnimation(c, u.start, u.end, t)
        }
        this.firstAnimation = e
    },o.MorphBlendMesh.prototype.setAnimationDirectionForward = function (t) {
        var e = this.animationsMap[t];
        e && (e.direction = 1, e.directionBackwards = !1)
    },o.MorphBlendMesh.prototype.setAnimationDirectionBackward = function (t) {
        var e = this.animationsMap[t];
        e && (e.direction = -1, e.directionBackwards = !0)
    },o.MorphBlendMesh.prototype.setAnimationFPS = function (t, e) {
        var n = this.animationsMap[t];
        n && (n.fps = e, n.duration = (n.end - n.start) / n.fps)
    },o.MorphBlendMesh.prototype.setAnimationDuration = function (t, e) {
        var n = this.animationsMap[t];
        n && (n.duration = e, n.fps = (n.end - n.start) / n.duration)
    },o.MorphBlendMesh.prototype.setAnimationWeight = function (t, e) {
        var n = this.animationsMap[t];
        n && (n.weight = e)
    },o.MorphBlendMesh.prototype.setAnimationTime = function (t, e) {
        var n = this.animationsMap[t];
        n && (n.time = e)
    },o.MorphBlendMesh.prototype.getAnimationTime = function (t) {
        var e = 0, n = this.animationsMap[t];
        return n && (e = n.time), e
    },o.MorphBlendMesh.prototype.getAnimationDuration = function (t) {
        var e = -1, n = this.animationsMap[t];
        return n && (e = n.duration), e
    },o.MorphBlendMesh.prototype.playAnimation = function (t) {
        var e = this.animationsMap[t];
        e ? (e.time = 0, e.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + t + "] undefined in .playAnimation()")
    },o.MorphBlendMesh.prototype.stopAnimation = function (t) {
        var e = this.animationsMap[t];
        e && (e.active = !1)
    },o.MorphBlendMesh.prototype.update = function (t) {
        for (var e = 0, n = this.animationsList.length; e < n; e++) {
            var r = this.animationsList[e];
            if (r.active) {
                var i = r.duration / r.length;
                r.time += r.direction * t, r.mirroredLoop ? (r.time > r.duration || r.time < 0) && (r.direction *= -1, r.time > r.duration && (r.time = r.duration, r.directionBackwards = !0), r.time < 0 && (r.time = 0, r.directionBackwards = !1)) : (r.time = r.time % r.duration, r.time < 0 && (r.time += r.duration));
                var a = r.start + o.Math.clamp(Math.floor(r.time / i), 0, r.length - 1), s = r.weight;
                a !== r.currentFrame && (this.morphTargetInfluences[r.lastFrame] = 0, this.morphTargetInfluences[r.currentFrame] = 1 * s, this.morphTargetInfluences[a] = 0, r.lastFrame = r.currentFrame, r.currentFrame = a);
                var l = r.time % i / i;
                r.directionBackwards && (l = 1 - l), r.currentFrame !== r.lastFrame ? (this.morphTargetInfluences[r.currentFrame] = l * s, this.morphTargetInfluences[r.lastFrame] = (1 - l) * s) : this.morphTargetInfluences[r.currentFrame] = s
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(302), o = (r(i), n(304)), a = r(o), s = function (t, e, n, r, i) {
        a.default.call(this), this.scene = t, this.camera = e, this.overrideMaterial = n, this.clearColor = r, this.clearAlpha = void 0 !== i ? i : 0, this.clear = !0, this.needsSwap = !1
    };
    s.prototype = Object.assign(Object.create(a.default.prototype), {
        constructor: s, render: function (t, e, n, r, i) {
            this.scene.overrideMaterial = this.overrideMaterial;
            var o, a;
            this.clearColor && (o = t.getClearColor().getHex(), a = t.getClearAlpha(), t.setClearColor(this.clearColor, this.clearAlpha)), t.render(this.scene, this.camera, this.renderToScreen ? null : n, this.clear), this.clearColor && t.setClearColor(o, a), this.scene.overrideMaterial = null
        }
    }), e.default = s
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var n = function () {
        this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1
    };
    Object.assign(n.prototype, {
        setSize: function (t, e) {
        }, render: function (t, e, n, r, i) {
            console.error("THREE.Pass: .render() must be implemented in derived pass.")
        }
    }), e.default = n
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(306), o = r(i), a = n(307), s = r(a), l = n(308), c = r(l), u = n(309), h = r(u), f = n(302), d = r(f), p = function (t, e) {
        if (this.renderer = t, void 0 === e) {
            var n = {
                minFilter: d.default.LinearFilter,
                magFilter: d.default.LinearFilter,
                format: d.default.RGBAFormat,
                stencilBuffer: !1
            }, r = t.getSize();
            e = new d.default.WebGLRenderTarget(r.width, r.height, n)
        }
        this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.passes = [], this.copyPass = new s.default(o.default)
    };
    Object.assign(p.prototype, {
        swapBuffers: function () {
            var t = this.readBuffer;
            this.readBuffer = this.writeBuffer, this.writeBuffer = t
        }, addPass: function (t) {
            this.passes.push(t);
            var e = this.renderer.getSize();
            t.setSize(e.width, e.height)
        }, bypass: function (t) {
            this.passes.slice(-1)[0].renderToScreen = !t, this.passes[0].renderToScreen = !!t
        }, insertPass: function (t, e) {
            this.passes.splice(e, 0, t)
        }, render: function (t) {
            var e, n, r = !1, i = this.passes.length;
            for (n = 0; n < i; n++)if (e = this.passes[n], e.enabled !== !1) {
                if (e.render(this.renderer, this.writeBuffer, this.readBuffer, t, r), e.needsSwap) {
                    if (r) {
                        var o = this.renderer.context;
                        o.stencilFunc(o.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, t), o.stencilFunc(o.EQUAL, 1, 4294967295)
                    }
                    this.swapBuffers()
                }
                e instanceof c.default ? r = !0 : e instanceof h.default && (r = !1)
            }
        }, reset: function (t) {
            if (void 0 === t) {
                var e = this.renderer.getSize();
                t = this.renderTarget1.clone(), t.setSize(e.width, e.height)
            }
            this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2
        }, setSize: function (t, e) {
            this.renderTarget1.setSize(t, e), this.renderTarget2.setSize(t, e);
            for (var n = 0; n < this.passes.length; n++)this.passes[n].setSize(t, e)
        }
    }), e.default = p
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var n = {
        uniforms: {tDiffuse: {value: null}, opacity: {value: 1}},
        vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join("\n")
    };
    e.default = n
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(302), o = r(i), a = n(304), s = r(a), l = function (t, e) {
        s.default.call(this), this.textureID = void 0 !== e ? e : "tDiffuse", t instanceof o.default.ShaderMaterial ? (this.uniforms = t.uniforms, this.material = t) : t && (this.uniforms = o.default.UniformsUtils.clone(t.uniforms), this.material = new o.default.ShaderMaterial({
              defines: t.defines || {},
              uniforms: this.uniforms,
              vertexShader: t.vertexShader,
              fragmentShader: t.fragmentShader
          })), this.camera = new o.default.OrthographicCamera(-1, 1, 1, -1, 0, 1), this.scene = new o.default.Scene, this.quad = new o.default.Mesh(new o.default.PlaneBufferGeometry(2, 2), null), this.scene.add(this.quad)
    };
    l.prototype = Object.assign(Object.create(s.default.prototype), {
        constructor: l, render: function (t, e, n, r, i) {
            this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.quad.material = this.material, this.renderToScreen ? t.render(this.scene, this.camera) : t.render(this.scene, this.camera, e, this.clear)
        }
    }), e.default = l
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(302), o = (r(i), n(304)), a = r(o), s = function (t, e) {
        a.default.call(this), this.scene = t, this.camera = e, this.clear = !0, this.needsSwap = !1, this.inverse = !1
    };
    s.prototype = Object.assign(Object.create(a.default.prototype), {
        constructor: s, render: function (t, e, n, r, i) {
            var o = t.context, a = t.state;
            a.buffers.color.setMask(!1), a.buffers.depth.setMask(!1), a.buffers.color.setLocked(!0), a.buffers.depth.setLocked(!0);
            var s, l;
            this.inverse ? (s = 0, l = 1) : (s = 1, l = 0), a.buffers.stencil.setTest(!0), a.buffers.stencil.setOp(o.REPLACE, o.REPLACE, o.REPLACE), a.buffers.stencil.setFunc(o.ALWAYS, s, 4294967295), a.buffers.stencil.setClear(l), t.render(this.scene, this.camera, n, this.clear), t.render(this.scene, this.camera, e, this.clear), a.buffers.color.setLocked(!1), a.buffers.depth.setLocked(!1), a.buffers.stencil.setFunc(o.EQUAL, 1, 4294967295), a.buffers.stencil.setOp(o.KEEP, o.KEEP, o.KEEP)
        }
    }), e.default = s
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(304), o = r(i), a = function () {
        o.default.call(this), this.needsSwap = !1
    };
    a.prototype = Object.create(o.default.prototype), Object.assign(a.prototype, {
        render: function (t, e, n, r, i) {
            t.state.buffers.stencil.setTest(!1)
        }
    }), e.default = a
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function i(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), a = n(302), s = r(a), l = function () {
        function t(e) {
            i(this, t), this.target_date = new Date(e.date), this.cursor = e.cursor || {}, this.cursor.text = this.cursor.text || "|", this.mesh = new s.default.Object3D, this.size = e.size, this.make_text = function (t, n) {
                return new s.default.TextGeometry(t, {
                    font: new s.default.Font(e.font),
                    size: n,
                    height: e.height,
                    curveSegments: e.curveSegments,
                    material: 0,
                    extrudeMaterial: 1
                })
            }, this.material = new s.default.MultiMaterial([new s.default.MeshBasicMaterial({
                color: e.color.font,
                shading: s.default.FlatShading
            }), new s.default.MeshBasicMaterial({
                color: e.color.font_side || e.color.font,
                shading: s.default.SmoothShading
            })]), this.geometry = this.make_text("", 10), this.text_mesh = new s.default.Mesh(this.geometry, this.material), this.update_time(), this.final_geometry = this.geometry, this.mesh.add(this.text_mesh)
        }

        return o(t, [{
            key: "update_time", value: function () {
                var t = Math.abs(new Date - this.target_date);
                if (Math.floor(this.old_diff / 1e3) != Math.floor(t / 1e3)) {
                    this.mesh.remove(this.text_mesh), this.text_mesh.geometry.dispose();
                    var e = ("00" + Math.floor(t / 1e3) % 60).slice(-2), n = ("00" + Math.floor(t / 1e3 / 60) % 60).slice(-2), r = Math.floor(t / 1e3 / 60 / 60) % 24, i = Math.floor(t / 1e3 / 60 / 60 / 24);
                    this.geometry = this.make_text(i + " days " + r + ":" + n + ":" + e, this.size * window.innerWidth / window.innerHeight), this.text_mesh = new s.default.Mesh(this.geometry, this.material), this.geometry.computeBoundingBox();
                    var o = this.geometry.boundingBox, a = -.5 * (o.max.x - o.min.x);
                    this.text_mesh.position.x = a, this.mesh.add(this.text_mesh), this.old_diff = t
                }
            }
        }, {
            key: "update", value: function (t) {
                this.update_time()
            }
        }]), t
    }();
    e.default = l
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function i(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), a = n(302), s = r(a), l = function () {
        function t(e) {
            var n = this;
            i(this, t), this.text = e.text, this.mesh = new s.default.Object3D, this.size = e.size, this.make_text = function (t, n) {
                return new s.default.TextGeometry(t, {
                    font: new s.default.Font(e.font),
                    size: n,
                    height: e.height,
                    curveSegments: e.curveSegments,
                    material: 0,
                    extrudeMaterial: 1
                })
            }, this.material = new s.default.MultiMaterial([new s.default.MeshBasicMaterial({
                color: e.color.font,
                shading: s.default.FlatShading
            }), new s.default.MeshBasicMaterial({
                color: e.color.font_side || e.color.font,
                shading: s.default.SmoothShading
            })]), this.needs_update = !0, this.update(), this.needs_update = !1, window.addEventListener("resize", function () {
                n.needs_update = !0
            }, !1)
        }

        return o(t, [{
            key: "update", value: function (t) {
                if (this.needs_update) {
                    void 0 !== this.text_mesh && (this.mesh.remove(this.text_mesh), this.text_mesh.geometry.dispose()), this.geometry = this.make_text(this.text, this.size * window.innerWidth / window.innerHeight), this.text_mesh = new s.default.Mesh(this.geometry, this.material), this.geometry.computeBoundingBox();
                    var e = this.geometry.boundingBox, n = -.5 * (e.max.x - e.min.x);
                    this.text_mesh.position.x = n, this.mesh.add(this.text_mesh)
                }
            }
        }]), t
    }();
    e.default = l
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var i = n(302), o = r(i), a = n(304), s = r(a), l = n(313), c = r(l), u = function (t) {
        s.default.call(this);
        var e = c.default;
        this.uniforms = o.default.UniformsUtils.clone(e.uniforms), void 0 == t && (t = 64), this.uniforms.tDisp.value = this.generateHeightmap(t), this.material = new o.default.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: e.vertexShader,
            fragmentShader: e.fragmentShader
        }), this.camera = new o.default.OrthographicCamera(-1, 1, 1, -1, 0, 1), this.scene = new o.default.Scene, this.quad = new o.default.Mesh(new o.default.PlaneBufferGeometry(2, 2), null), this.scene.add(this.quad), this.goWild = !1, this.curF = 0, this.generateTrigger()
    };
    u.prototype = Object.assign(Object.create(s.default.prototype), {
        constructor: u, render: function (t, e, n, r, i) {
            this.uniforms.tDiffuse.value = n.texture, this.uniforms.seed.value = Math.random(), this.uniforms.byp.value = 0, this.curF % this.randX == 0 || 1 == this.goWild ? (this.uniforms.amount.value = Math.random() / 30, this.uniforms.angle.value = o.default.Math.randFloat(-Math.PI, Math.PI), this.uniforms.seed_x.value = o.default.Math.randFloat(-1, 1), this.uniforms.seed_y.value = o.default.Math.randFloat(-1, 1), this.uniforms.distortion_x.value = o.default.Math.randFloat(0, 1), this.uniforms.distortion_y.value = o.default.Math.randFloat(0, 1), this.curF = 0, this.generateTrigger()) : this.curF % this.randX < this.randX / 5 ? (this.uniforms.amount.value = Math.random() / 90, this.uniforms.angle.value = o.default.Math.randFloat(-Math.PI, Math.PI), this.uniforms.distortion_x.value = o.default.Math.randFloat(0, 1), this.uniforms.distortion_y.value = o.default.Math.randFloat(0, 1), this.uniforms.seed_x.value = o.default.Math.randFloat(-.3, .3), this.uniforms.seed_y.value = o.default.Math.randFloat(-.3, .3)) : 0 == this.goWild && (this.uniforms.byp.value = 1), this.curF++, this.quad.material = this.material, this.renderToScreen ? t.render(this.scene, this.camera) : t.render(this.scene, this.camera, e, this.clear)
        }, generateTrigger: function () {
            this.randX = o.default.Math.randInt(120, 240)
        }, generateHeightmap: function (t) {
            for (var e = new Float32Array(t * t * 3), n = t * t, r = 0; r < n; r++) {
                var i = o.default.Math.randFloat(0, 1);
                e[3 * r + 0] = i, e[3 * r + 1] = i, e[3 * r + 2] = i
            }
            var a = new o.default.DataTexture(e, t, t, o.default.RGBFormat, o.default.FloatType);
            return a.needsUpdate = !0, a
        }
    }), e.default = u
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var n = {
        uniforms: {
            tDiffuse: {value: null},
            tDisp: {value: null},
            byp: {value: 0},
            amount: {value: .08},
            angle: {value: .02},
            seed: {value: .02},
            seed_x: {value: .02},
            seed_y: {value: .02},
            distortion_x: {value: .5},
            distortion_y: {value: .6},
            col_s: {value: .05}
        },
        vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
        fragmentShader: ["uniform int byp;", "uniform sampler2D tDiffuse;", "uniform sampler2D tDisp;", "uniform float amount;", "uniform float angle;", "uniform float seed;", "uniform float seed_x;", "uniform float seed_y;", "uniform float distortion_x;", "uniform float distortion_y;", "uniform float col_s;", "varying vec2 vUv;", "float rand(vec2 co){", "return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);", "}", "void main() {", "if(byp<1) {", "vec2 p = vUv;", "float xs = floor(gl_FragCoord.x / 0.5);", "float ys = floor(gl_FragCoord.y / 0.5);", "vec4 normal = texture2D (tDisp, p*seed*seed);", "if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {", "if(seed_x>0.){", "p.y = 1. - (p.y + distortion_y);", "}", "else {", "p.y = distortion_y;", "}", "}", "if(p.x<distortion_y+col_s && p.x>distortion_y-col_s*seed) {", "if(seed_y>0.){", "p.x=distortion_x;", "}", "else {", "p.x = 1. - (p.x + distortion_x);", "}", "}", "p.x+=normal.x*seed_x*(seed/5.);", "p.y+=normal.y*seed_y*(seed/5.);", "vec2 offset = amount * vec2( cos(angle), sin(angle));", "vec4 cr = texture2D(tDiffuse, p + offset);", "vec4 cga = texture2D(tDiffuse, p);", "vec4 cb = texture2D(tDiffuse, p - offset);", "gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);", "vec4 snow = 200.*amount*vec4(rand(vec2(xs * seed,ys * seed*50.))*0.2);", "gl_FragColor = gl_FragColor+ snow;", "}", "else {", "gl_FragColor=texture2D (tDiffuse, vUv);", "}", "}"].join("\n")
    };
    e.default = n
}, function (t, e) {
    t.exports = {
        glyphs: {
            0: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 694 l 174 694 l 174 174 l 521 174 m 0 0 l 0 868 l 694 868 l 694 0 l 0 0 z "
            },
            1: {ha: 528, x_min: 0, x_max: 347, o: "m 174 0 l 174 694 l 0 694 l 0 868 l 347 868 l 347 0 l 174 0 z "},
            2: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 521 l 521 521 l 521 694 l 0 694 l 0 868 l 694 868 l 694 347 l 174 347 l 174 174 l 694 174 l 694 0 l 0 0 z "
            },
            3: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 174 l 521 174 l 521 347 l 0 347 l 0 521 l 521 521 l 521 694 l 0 694 l 0 868 l 694 868 l 694 0 l 0 0 z "
            },
            4: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 0 l 521 347 l 0 347 l 0 868 l 174 868 l 174 521 l 521 521 l 521 868 l 694 868 l 694 0 l 521 0 z "
            },
            5: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 174 l 521 174 l 521 347 l 0 347 l 0 868 l 694 868 l 694 694 l 174 694 l 174 521 l 694 521 l 694 0 l 0 0 z "
            },
            6: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 347 l 174 347 l 174 174 l 521 174 m 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 521 l 694 521 l 694 0 l 0 0 z "
            },
            7: {ha: 875, x_min: 0, x_max: 694, o: "m 521 0 l 521 694 l 0 694 l 0 868 l 694 868 l 694 0 l 521 0 z "},
            8: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 347 l 174 347 l 174 174 l 521 174 m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 0 l 0 0 z "
            },
            9: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 174 l 521 174 l 521 347 l 0 347 l 0 868 l 694 868 l 694 0 l 0 0 z "
            },
            " ": {ha: 347, x_min: 0, x_max: 0, o: ""},
            "!": {
                ha: 354,
                x_min: 0,
                x_max: 174,
                o: "m 0 0 l 0 174 l 174 174 l 174 0 l 0 0 m 0 347 l 0 868 l 174 868 l 174 347 l 0 347 z "
            },
            '"': {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 0 521 l 0 868 l 174 868 l 174 521 l 0 521 m 347 521 l 347 868 l 521 868 l 521 521 l 347 521 z "
            },
            "#": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 521 347 l 521 521 l 347 521 l 347 347 l 521 347 m 174 0 l 174 174 l 0 174 l 0 347 l 174 347 l 174 521 l 0 521 l 0 694 l 174 694 l 174 868 l 347 868 l 347 694 l 521 694 l 521 868 l 694 868 l 694 694 l 868 694 l 868 521 l 694 521 l 694 347 l 868 347 l 868 174 l 694 174 l 694 0 l 521 0 l 521 174 l 347 174 l 347 0 l 174 0 z "
            },
            $: {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 694 174 l 694 347 l 521 347 l 521 174 l 694 174 m 347 521 l 347 694 l 174 694 l 174 521 l 347 521 m 0 0 l 0 174 l 347 174 l 347 347 l 0 347 l 0 868 l 868 868 l 868 694 l 521 694 l 521 521 l 868 521 l 868 0 l 0 0 z "
            },
            "%": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 347 0 l 347 174 l 521 174 l 521 0 l 347 0 m 0 694 l 0 868 l 174 868 l 174 694 l 0 694 m 0 0 l 0 521 l 347 521 l 347 868 l 521 868 l 521 347 l 174 347 l 174 0 l 0 0 z "
            },
            "&": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 521 174 l 521 347 l 174 347 l 174 174 l 521 174 m 521 521 l 521 694 l 347 694 l 347 521 l 521 521 m 0 0 l 0 521 l 174 521 l 174 868 l 694 868 l 694 521 l 693 521 l 608 434 l 694 347 l 694 174 l 868 174 l 868 0 l 0 0 z "
            },
            "'": {ha: 354, x_min: 0, x_max: 174, o: "m 0 521 l 0 868 l 174 868 l 174 521 l 0 521 z "},
            "(": {
                ha: 528,
                x_min: 0,
                x_max: 347,
                o: "m 0 0 l 0 868 l 347 868 l 347 694 l 174 694 l 174 174 l 347 174 l 347 0 l 0 0 z "
            },
            ")": {
                ha: 528,
                x_min: 0,
                x_max: 347,
                o: "m 0 0 l 0 174 l 174 174 l 174 694 l 0 694 l 0 868 l 347 868 l 347 0 l 0 0 z "
            },
            "*": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 174 347 l 174 521 l 0 521 l 0 694 l 174 694 l 174 868 l 347 868 l 347 694 l 521 694 l 521 521 l 347 521 l 347 347 l 174 347 z "
            },
            "+": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 347 0 l 347 347 l 0 347 l 0 521 l 347 521 l 347 868 l 521 868 l 521 521 l 868 521 l 868 347 l 521 347 l 521 0 l 347 0 z "
            },
            ",": {ha: 354, x_min: 0, x_max: 174, o: "m 0 -174 l 0 174 l 174 174 l 174 -174 l 0 -174 z "},
            "-": {ha: 875, x_min: 0, x_max: 694, o: "m 0 347 l 0 521 l 694 521 l 694 347 l 0 347 z "},
            ".": {ha: 354, x_min: 0, x_max: 174, o: "m 0 0 l 0 174 l 174 174 l 174 0 l 0 0 z "},
            "/": {
                ha: 528,
                x_min: 0,
                x_max: 347,
                o: "m 0 0 l 0 521 l 174 521 l 174 868 l 347 868 l 347 347 l 174 347 l 174 0 l 0 0 z "
            },
            ":": {
                ha: 354,
                x_min: 0,
                x_max: 174,
                o: "m 0 0 l 0 174 l 174 174 l 174 0 l 0 0 m 0 694 l 0 868 l 174 868 l 174 694 l 0 694 z "
            },
            ";": {
                ha: 354,
                x_min: 0,
                x_max: 174,
                o: "m 0 -174 l 0 174 l 174 174 l 174 -174 l 0 -174 m 0 694 l 0 868 l 174 868 l 174 694 l 0 694 z "
            },
            "<": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 0 174 l 0 694 l 521 694 l 521 521 l 174 521 l 174 347 l 521 347 l 521 174 l 0 174 z "
            },
            "=": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 174 l 0 347 l 694 347 l 694 174 l 0 174 m 0 521 l 0 694 l 694 694 l 694 521 l 0 521 z "
            },
            ">": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 0 174 l 0 347 l 347 347 l 347 521 l 0 521 l 0 694 l 521 694 l 521 174 l 0 174 z "
            },
            "?": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 174 0 l 174 174 l 347 174 l 347 0 l 174 0 m 174 347 l 174 521 l 521 521 l 521 694 l 0 694 l 0 868 l 694 868 l 694 347 l 174 347 z "
            },
            "@": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 0 0 l 0 868 l 868 868 l 868 0 l 347 0 l 347 521 l 521 521 l 521 174 l 694 174 l 694 694 l 174 694 l 174 0 l 0 0 z "
            },
            A: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 z "
            },
            B: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 347 l 174 347 l 174 174 l 521 174 m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 521 l 693 521 l 608 434 l 694 347 l 694 0 l 0 0 z "
            },
            C: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 174 l 694 174 l 694 0 l 0 0 z "
            },
            D: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 694 l 174 694 l 174 174 l 521 174 m 0 0 l 0 868 l 521 868 l 694 694 l 694 174 l 521 0 l 0 0 z "
            },
            E: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 521 l 694 521 l 694 347 l 174 347 l 174 174 l 694 174 l 694 0 l 0 0 z "
            },
            F: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 521 l 694 521 l 694 347 l 174 347 l 174 0 l 0 0 z "
            },
            G: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 174 l 521 174 l 521 347 l 347 347 l 347 521 l 694 521 l 694 0 l 0 0 z "
            },
            H: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 174 868 l 174 521 l 521 521 l 521 868 l 694 868 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 z "
            },
            I: {ha: 354, x_min: 0, x_max: 174, o: "m 0 0 l 0 868 l 174 868 l 174 0 l 0 0 z "},
            J: {ha: 701, x_min: 0, x_max: 521, o: "m 0 0 l 0 174 l 347 174 l 347 868 l 521 868 l 521 0 l 0 0 z "},
            K: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 174 868 l 174 521 l 521 521 l 521 868 l 694 868 l 694 521 l 693 521 l 608 434 l 694 347 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 z "
            },
            L: {ha: 875, x_min: 0, x_max: 694, o: "m 0 0 l 0 868 l 174 868 l 174 174 l 694 174 l 694 0 l 0 0 z "},
            M: {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 0 0 l 0 868 l 868 868 l 868 0 l 694 0 l 694 694 l 521 694 l 521 0 l 347 0 l 347 694 l 174 694 l 174 0 l 0 0 z "
            },
            N: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 694 l 174 694 l 174 0 l 0 0 z "
            },
            O: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 694 l 174 694 l 174 174 l 521 174 m 0 0 l 0 868 l 694 868 l 694 0 l 0 0 z "
            },
            P: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 347 l 174 347 l 174 0 l 0 0 z "
            },
            Q: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 347 174 l 347 347 l 521 347 l 521 694 l 174 694 l 174 174 l 347 174 m 0 0 l 0 868 l 694 868 l 694 174 l 521 174 l 521 0 l 0 0 z "
            },
            R: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 521 l 693 521 l 608 434 l 694 347 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 z "
            },
            S: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 174 l 521 174 l 521 347 l 0 347 l 0 868 l 694 868 l 694 694 l 174 694 l 174 521 l 694 521 l 694 0 l 0 0 z "
            },
            T: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 260 0 l 260 694 l 0 694 l 0 868 l 694 868 l 694 694 l 434 694 l 434 0 l 260 0 z "
            },
            U: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 174 868 l 174 174 l 521 174 l 521 868 l 694 868 l 694 0 l 0 0 z "
            },
            V: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 174 0 l 0 174 l 0 868 l 174 868 l 174 174 l 521 174 l 521 868 l 694 868 l 694 174 l 521 0 l 174 0 z "
            },
            W: {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 0 0 l 0 868 l 174 868 l 174 174 l 347 174 l 347 868 l 521 868 l 521 174 l 694 174 l 694 868 l 868 868 l 868 0 l 0 0 z "
            },
            X: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 347 l 0 347 l 87 434 l 0 521 l 0 868 l 174 868 l 174 521 l 521 521 l 521 868 l 694 868 l 694 521 l 693 521 l 608 434 l 694 347 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 z "
            },
            Y: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 260 0 l 260 347 l 0 347 l 0 868 l 174 868 l 174 521 l 521 521 l 521 868 l 694 868 l 694 347 l 434 347 l 434 0 l 260 0 z "
            },
            Z: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 521 l 521 521 l 521 694 l 0 694 l 0 868 l 694 868 l 694 347 l 174 347 l 174 174 l 694 174 l 694 0 l 0 0 z "
            },
            "[": {
                ha: 528,
                x_min: 0,
                x_max: 347,
                o: "m 0 0 l 0 868 l 347 868 l 347 694 l 174 694 l 174 174 l 347 174 l 347 0 l 0 0 z "
            },
            "\\": {
                ha: 528,
                x_min: 0,
                x_max: 347,
                o: "m 174 0 l 174 347 l 0 347 l 0 868 l 174 868 l 174 521 l 347 521 l 347 0 l 174 0 z "
            },
            "]": {
                ha: 528,
                x_min: 0,
                x_max: 347,
                o: "m 0 0 l 0 174 l 174 174 l 174 694 l 0 694 l 0 868 l 347 868 l 347 0 l 0 0 z "
            },
            "^": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 0 521 l 0 868 l 521 868 l 521 521 l 347 521 l 347 694 l 174 694 l 174 521 l 0 521 z "
            },
            _: {ha: 1048, x_min: 0, x_max: 868, o: "m 0 0 l 0 174 l 868 174 l 868 0 l 0 0 z "},
            "`": {ha: 354, x_min: 0, x_max: 174, o: "m 0 521 l 0 868 l 174 868 l 174 521 l 0 521 z "},
            a: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 z "
            },
            b: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 347 l 174 347 l 174 174 l 521 174 m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 521 l 693 521 l 608 434 l 694 347 l 694 0 l 0 0 z "
            },
            c: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 174 l 694 174 l 694 0 l 0 0 z "
            },
            d: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 694 l 174 694 l 174 174 l 521 174 m 0 0 l 0 868 l 521 868 l 694 694 l 694 174 l 521 0 l 0 0 z "
            },
            e: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 521 l 694 521 l 694 347 l 174 347 l 174 174 l 694 174 l 694 0 l 0 0 z "
            },
            f: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 521 l 694 521 l 694 347 l 174 347 l 174 0 l 0 0 z "
            },
            g: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 174 l 521 174 l 521 347 l 347 347 l 347 521 l 694 521 l 694 0 l 0 0 z "
            },
            h: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 174 868 l 174 521 l 521 521 l 521 868 l 694 868 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 z "
            },
            i: {ha: 354, x_min: 0, x_max: 174, o: "m 0 0 l 0 868 l 174 868 l 174 0 l 0 0 z "},
            j: {ha: 701, x_min: 0, x_max: 521, o: "m 0 0 l 0 174 l 347 174 l 347 868 l 521 868 l 521 0 l 0 0 z "},
            k: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 174 868 l 174 521 l 521 521 l 521 868 l 694 868 l 694 521 l 693 521 l 608 434 l 694 347 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 z "
            },
            l: {ha: 875, x_min: 0, x_max: 694, o: "m 0 0 l 0 868 l 174 868 l 174 174 l 694 174 l 694 0 l 0 0 z "},
            m: {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 0 0 l 0 868 l 868 868 l 868 0 l 694 0 l 694 694 l 521 694 l 521 0 l 347 0 l 347 694 l 174 694 l 174 0 l 0 0 z "
            },
            n: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 694 l 174 694 l 174 0 l 0 0 z "
            },
            o: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 694 l 174 694 l 174 174 l 521 174 m 0 0 l 0 868 l 694 868 l 694 0 l 0 0 z "
            },
            p: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 347 l 174 347 l 174 0 l 0 0 z "
            },
            q: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 347 174 l 347 347 l 521 347 l 521 694 l 174 694 l 174 174 l 347 174 m 0 0 l 0 868 l 694 868 l 694 174 l 521 174 l 521 0 l 0 0 z "
            },
            r: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 521 l 693 521 l 608 434 l 694 347 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 z "
            },
            s: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 174 l 521 174 l 521 347 l 0 347 l 0 868 l 694 868 l 694 694 l 174 694 l 174 521 l 694 521 l 694 0 l 0 0 z "
            },
            t: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 260 0 l 260 694 l 0 694 l 0 868 l 694 868 l 694 694 l 434 694 l 434 0 l 260 0 z "
            },
            u: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 174 868 l 174 174 l 521 174 l 521 868 l 694 868 l 694 0 l 0 0 z "
            },
            v: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 174 0 l 0 174 l 0 868 l 174 868 l 174 174 l 521 174 l 521 868 l 694 868 l 694 174 l 521 0 l 174 0 z "
            },
            w: {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 0 0 l 0 868 l 174 868 l 174 174 l 347 174 l 347 868 l 521 868 l 521 174 l 694 174 l 694 868 l 868 868 l 868 0 l 0 0 z "
            },
            x: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 347 l 0 347 l 87 434 l 0 521 l 0 868 l 174 868 l 174 521 l 521 521 l 521 868 l 694 868 l 694 521 l 693 521 l 608 434 l 694 347 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 z "
            },
            y: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 260 0 l 260 347 l 0 347 l 0 868 l 174 868 l 174 521 l 521 521 l 521 868 l 694 868 l 694 347 l 434 347 l 434 0 l 260 0 z "
            },
            z: {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 521 l 521 521 l 521 694 l 0 694 l 0 868 l 694 868 l 694 347 l 174 347 l 174 174 l 694 174 l 694 0 l 0 0 z "
            },
            "{": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 174 0 l 174 347 l 0 347 l 0 521 l 174 521 l 174 868 l 521 868 l 521 694 l 347 694 l 347 174 l 521 174 l 521 0 l 174 0 z "
            },
            "|": {ha: 354, x_min: 0, x_max: 174, o: "m 0 0 l 0 868 l 174 868 l 174 0 l 0 0 z "},
            "}": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 0 0 l 0 174 l 174 174 l 174 694 l 0 694 l 0 868 l 347 868 l 347 521 l 521 521 l 521 347 l 347 347 l 347 0 l 0 0 z "
            },
            "~": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 0 347 l 0 694 l 521 694 l 521 521 l 694 521 l 694 694 l 868 694 l 868 347 l 347 347 l 347 521 l 174 521 l 174 347 l 0 347 z "
            },
            "¡": {
                ha: 354,
                x_min: 0,
                x_max: 174,
                o: "m 0 0 l 0 521 l 174 521 l 174 0 l 0 0 m 0 694 l 0 868 l 174 868 l 174 694 l 0 694 z "
            },
            "¢": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 174 0 l 174 174 l 0 174 l 0 694 l 174 694 l 174 868 l 347 868 l 347 694 l 521 694 l 521 521 l 174 521 l 174 347 l 521 347 l 521 174 l 347 174 l 347 0 l 174 0 z "
            },
            "£": {
                ha: 875,
                x_min: -174,
                x_max: 694,
                o: "m 0 0 l 0 347 l -174 347 l -174 521 l 0 521 l 0 868 l 521 868 l 521 694 l 174 694 l 174 521 l 347 521 l 347 347 l 174 347 l 174 174 l 694 174 l 694 0 l 0 0 z "
            },
            "¤": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 0 0 l 0 174 l 174 174 l 174 0 l 0 0 m 694 0 l 694 174 l 868 174 l 868 0 l 694 0 m 521 347 l 521 521 l 347 521 l 347 347 l 521 347 m 174 174 l 174 694 l 694 694 l 694 174 l 174 174 m 0 694 l 0 868 l 174 868 l 174 694 l 0 694 m 694 694 l 694 868 l 868 868 l 868 694 l 694 694 z "
            },
            "¥": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 260 0 l 260 87 l 87 87 l 87 260 l 260 260 l 260 347 l 0 347 l 0 868 l 174 868 l 174 521 l 521 521 l 521 868 l 694 868 l 694 347 l 434 347 l 434 260 l 608 260 l 608 87 l 434 87 l 434 0 l 260 0 z "
            },
            "¦": {
                ha: 354,
                x_min: 0,
                x_max: 174,
                o: "m 0 0 l 0 347 l 174 347 l 174 0 l 0 0 m 0 521 l 0 868 l 174 868 l 174 521 l 0 521 z "
            },
            "§": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 174 l 521 174 l 521 347 l 347 347 l 347 521 l 694 521 l 694 0 l 0 0 m 0 347 l 0 868 l 694 868 l 694 694 l 174 694 l 174 347 l 0 347 z "
            },
            "¨": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 694 l 0 868 l 174 868 l 174 694 l 0 694 m 521 694 l 521 868 l 694 868 l 694 694 l 521 694 z "
            },
            "©": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 347 347 l 347 521 l 521 521 l 521 347 l 347 347 m 694 174 l 694 694 l 174 694 l 174 174 l 694 174 m 0 0 l 0 868 l 868 868 l 868 0 l 0 0 z "
            },
            "ª": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 347 521 l 347 694 l 174 694 l 174 521 l 347 521 m 0 347 l 0 868 l 521 868 l 521 347 l 0 347 z "
            },
            "«": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 0 174 l 0 694 l 347 694 l 347 521 l 174 521 l 174 347 l 347 347 l 347 174 l 0 174 m 521 174 l 521 694 l 868 694 l 868 521 l 694 521 l 694 347 l 868 347 l 868 174 l 521 174 z "
            },
            "¬": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 347 l 0 347 l 0 521 l 694 521 l 694 174 l 521 174 z "
            },
            "®": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 347 347 l 347 521 l 521 521 l 521 347 l 347 347 m 694 174 l 694 694 l 174 694 l 174 174 l 694 174 m 0 0 l 0 868 l 868 868 l 868 0 l 0 0 z "
            },
            "¯": {ha: 875, x_min: 0, x_max: 694, o: "m 0 694 l 0 868 l 694 868 l 694 694 l 0 694 z "},
            "°": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 347 521 l 347 694 l 174 694 l 174 521 l 347 521 m 0 347 l 0 868 l 521 868 l 521 347 l 0 347 z "
            },
            "±": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 0 0 l 0 174 l 521 174 l 521 0 l 0 0 m 174 347 l 174 521 l 0 521 l 0 694 l 174 694 l 174 868 l 347 868 l 347 694 l 521 694 l 521 521 l 347 521 l 347 347 l 174 347 z "
            },
            "²": {ha: 528, x_min: 0, x_max: 347, o: "m 0 347 l 0 868 l 347 868 l 347 347 l 0 347 z "},
            "³": {ha: 528, x_min: 0, x_max: 347, o: "m 0 347 l 0 868 l 347 868 l 347 347 l 0 347 z "},
            "´": {ha: 528, x_min: 0, x_max: 347, o: "m 0 694 l 0 868 l 347 868 l 347 694 l 0 694 z "},
            "µ": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 174 868 l 174 521 l 521 521 l 521 868 l 694 868 l 694 347 l 174 347 l 174 0 l 0 0 z "
            },
            "¶": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 174 0 l 174 347 l 0 347 l 0 868 l 694 868 l 694 0 l 521 0 l 521 694 l 347 694 l 347 0 l 174 0 z "
            },
            "·": {ha: 354, x_min: 0, x_max: 174, o: "m 0 347 l 0 521 l 174 521 l 174 347 l 0 347 z "},
            "¸": {
                ha: 528,
                x_min: 0,
                x_max: 347,
                o: "m 174 -347 l 174 -174 l 0 -174 l 0 174 l 174 174 l 174 0 l 347 0 l 347 -347 l 174 -347 z "
            },
            "¹": {ha: 354, x_min: 0, x_max: 174, o: "m 0 521 l 0 868 l 174 868 l 174 521 l 0 521 z "},
            "º": {ha: 354, x_min: 0, x_max: 174, o: "m 0 694 l 0 868 l 174 868 l 174 694 l 0 694 z "},
            "»": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 0 174 l 0 347 l 174 347 l 174 521 l 0 521 l 0 694 l 347 694 l 347 174 l 0 174 m 521 174 l 521 347 l 694 347 l 694 521 l 521 521 l 521 694 l 868 694 l 868 174 l 521 174 z "
            },
            "¼": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 174 l 694 174 l 694 0 l 0 0 m 0 347 l 0 521 l 694 521 l 694 347 l 0 347 m 0 694 l 0 868 l 174 868 l 174 694 l 0 694 z "
            },
            "½": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 347 0 l 347 174 l 694 174 l 694 0 l 347 0 m 0 347 l 0 521 l 694 521 l 694 347 l 0 347 m 0 694 l 0 868 l 174 868 l 174 694 l 0 694 z "
            },
            "¾": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 174 l 694 174 l 694 0 l 0 0 m 0 347 l 0 521 l 694 521 l 694 347 l 0 347 m 0 694 l 0 868 l 521 868 l 521 694 l 0 694 z "
            },
            "¿": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 521 l 347 521 l 347 347 l 174 347 l 174 174 l 521 174 l 521 347 l 694 347 l 694 0 l 0 0 m 174 694 l 174 868 l 347 868 l 347 694 l 174 694 z "
            },
            "À": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 m 0 1042 l 0 1215 l 347 1215 l 347 1042 l 0 1042 z "
            },
            "Á": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 m 347 1042 l 347 1215 l 694 1215 l 694 1042 l 347 1042 z "
            },
            "Â": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 m 0 1042 l 0 1215 l 694 1215 l 694 1042 l 0 1042 z "
            },
            "Ã": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 m 0 1042 l 0 1215 l 694 1215 l 694 1042 l 0 1042 z "
            },
            "Ä": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 m 0 1042 l 0 1215 l 174 1215 l 174 1042 l 0 1042 m 521 1042 l 521 1215 l 694 1215 l 694 1042 l 521 1042 z "
            },
            "Å": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 m 174 1042 l 174 1215 l 347 1215 l 347 1042 l 174 1042 z "
            },
            "Æ": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 347 521 l 347 694 l 174 694 l 174 521 l 347 521 m 0 0 l 0 868 l 868 868 l 868 694 l 521 694 l 521 521 l 868 521 l 868 347 l 521 347 l 521 174 l 868 174 l 868 0 l 347 0 l 347 347 l 174 347 l 174 0 l 0 0 z "
            },
            "Ç": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 174 -174 l 174 0 l 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 174 l 694 174 l 694 0 l 347 0 l 347 -174 l 174 -174 z "
            },
            "È": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 521 l 694 521 l 694 347 l 174 347 l 174 174 l 694 174 l 694 0 l 0 0 m 0 1042 l 0 1215 l 347 1215 l 347 1042 l 0 1042 z "
            },
            "É": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 521 l 694 521 l 694 347 l 174 347 l 174 174 l 694 174 l 694 0 l 0 0 m 347 1042 l 347 1215 l 694 1215 l 694 1042 l 347 1042 z "
            },
            "Ê": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 521 l 694 521 l 694 347 l 174 347 l 174 174 l 694 174 l 694 0 l 0 0 m 0 1042 l 0 1215 l 694 1215 l 694 1042 l 0 1042 z "
            },
            "Ë": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 521 l 694 521 l 694 347 l 174 347 l 174 174 l 694 174 l 694 0 l 0 0 m 0 1042 l 0 1215 l 174 1215 l 174 1042 l 0 1042 m 521 1042 l 521 1215 l 694 1215 l 694 1042 l 521 1042 z "
            },
            "Ì": {
                ha: 528,
                x_min: 0,
                x_max: 347,
                o: "m 0 0 l 0 868 l 174 868 l 174 0 l 0 0 m 0 1042 l 0 1215 l 347 1215 l 347 1042 l 0 1042 z "
            },
            "Í": {
                ha: 528,
                x_min: 0,
                x_max: 347,
                o: "m 0 0 l 0 868 l 174 868 l 174 0 l 0 0 m 0 1042 l 0 1215 l 347 1215 l 347 1042 l 0 1042 z "
            },
            "Î": {
                ha: 354,
                x_min: 0,
                x_max: 174,
                o: "m 0 0 l 0 868 l 174 868 l 174 0 l 0 0 m 0 1042 l 0 1215 l 174 1215 l 174 1042 l 0 1042 z "
            },
            "Ï": {
                ha: 528,
                x_min: -174,
                x_max: 347,
                o: "m 0 0 l 0 868 l 174 868 l 174 0 l 0 0 m -174 1042 l -174 1215 l 0 1215 l 0 1042 l -174 1042 m 174 1042 l 174 1215 l 347 1215 l 347 1042 l 174 1042 z "
            },
            "Ð": {
                ha: 875,
                x_min: -174,
                x_max: 694,
                o: "m 521 174 l 521 694 l 174 694 l 174 521 l 347 521 l 347 347 l 174 347 l 174 174 l 521 174 m 0 0 l 0 347 l -174 347 l -174 521 l 0 521 l 0 868 l 521 868 l 694 694 l 694 174 l 521 0 l 0 0 z "
            },
            "Ñ": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 694 l 174 694 l 174 0 l 0 0 m 0 1042 l 0 1215 l 694 1215 l 694 1042 l 0 1042 z "
            },
            "Ò": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 694 l 174 694 l 174 174 l 521 174 m 0 0 l 0 868 l 694 868 l 694 0 l 0 0 m 0 1042 l 0 1215 l 347 1215 l 347 1042 l 0 1042 z "
            },
            "Ó": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 694 l 174 694 l 174 174 l 521 174 m 0 0 l 0 868 l 694 868 l 694 0 l 0 0 m 347 1042 l 347 1215 l 694 1215 l 694 1042 l 347 1042 z "
            },
            "Ô": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 694 l 174 694 l 174 174 l 521 174 m 0 0 l 0 868 l 694 868 l 694 0 l 0 0 m 0 1042 l 0 1215 l 694 1215 l 694 1042 l 0 1042 z "
            },
            "Õ": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 694 l 174 694 l 174 174 l 521 174 m 0 0 l 0 868 l 694 868 l 694 0 l 0 0 m 0 1042 l 0 1215 l 694 1215 l 694 1042 l 0 1042 z "
            },
            "Ö": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 694 l 174 694 l 174 174 l 521 174 m 0 0 l 0 868 l 694 868 l 694 0 l 0 0 m 0 1042 l 0 1215 l 174 1215 l 174 1042 l 0 1042 m 521 1042 l 521 1215 l 694 1215 l 694 1042 l 521 1042 z "
            },
            "×": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 0 174 l 0 347 l 0 347 l 87 434 l 0 521 l 0 694 l 174 694 l 174 521 l 347 521 l 347 694 l 521 694 l 521 521 l 519 521 l 434 434 l 521 347 l 521 174 l 347 174 l 347 347 l 174 347 l 174 174 l 0 174 z "
            },
            "Ø": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 521 l 347 521 l 347 694 l 174 694 l 174 347 l 347 347 l 347 174 l 521 174 m 0 0 l 0 868 l 694 868 l 694 0 l 0 0 z "
            },
            "Ù": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 174 868 l 174 174 l 521 174 l 521 868 l 694 868 l 694 0 l 0 0 m 0 1042 l 0 1215 l 347 1215 l 347 1042 l 0 1042 z "
            },
            "Ú": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 174 868 l 174 174 l 521 174 l 521 868 l 694 868 l 694 0 l 0 0 m 347 1042 l 347 1215 l 694 1215 l 694 1042 l 347 1042 z "
            },
            "Û": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 174 868 l 174 174 l 521 174 l 521 868 l 694 868 l 694 0 l 0 0 m 0 1042 l 0 1215 l 694 1215 l 694 1042 l 0 1042 z "
            },
            "Ü": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 174 868 l 174 174 l 521 174 l 521 868 l 694 868 l 694 0 l 0 0 m 0 1042 l 0 1215 l 174 1215 l 174 1042 l 0 1042 m 521 1042 l 521 1215 l 694 1215 l 694 1042 l 521 1042 z "
            },
            "Ý": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 174 0 l 174 347 l 0 347 l 0 868 l 174 868 l 174 521 l 347 521 l 347 868 l 174 868 l 174 1042 l 521 1042 l 521 347 l 347 347 l 347 0 l 174 0 z "
            },
            "Þ": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 347 347 l 347 521 l 174 521 l 174 347 l 347 347 m 0 0 l 0 868 l 174 868 l 174 694 l 521 694 l 521 174 l 174 174 l 174 0 l 0 0 z "
            },
            "ß": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 347 521 l 347 694 l 174 694 l 174 521 l 347 521 m 0 0 l 0 868 l 521 868 l 521 521 l 694 521 l 694 0 l 347 0 l 347 174 l 521 174 l 521 347 l 174 347 l 174 0 l 0 0 z "
            },
            "à": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 m 0 1042 l 0 1215 l 347 1215 l 347 1042 l 0 1042 z "
            },
            "á": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 m 347 1042 l 347 1215 l 694 1215 l 694 1042 l 347 1042 z "
            },
            "â": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 m 0 1042 l 0 1215 l 694 1215 l 694 1042 l 0 1042 z "
            },
            "ã": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 m 0 1042 l 0 1215 l 694 1215 l 694 1042 l 0 1042 z "
            },
            "ä": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 m 0 1042 l 0 1215 l 174 1215 l 174 1042 l 0 1042 m 521 1042 l 521 1215 l 694 1215 l 694 1042 l 521 1042 z "
            },
            "å": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 521 l 521 694 l 174 694 l 174 521 l 521 521 m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 m 174 1042 l 174 1215 l 347 1215 l 347 1042 l 174 1042 z "
            },
            "æ": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 347 521 l 347 694 l 174 694 l 174 521 l 347 521 m 0 0 l 0 868 l 868 868 l 868 694 l 521 694 l 521 521 l 868 521 l 868 347 l 521 347 l 521 174 l 868 174 l 868 0 l 347 0 l 347 347 l 174 347 l 174 0 l 0 0 z "
            },
            "ç": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 174 -174 l 174 0 l 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 174 l 694 174 l 694 0 l 347 0 l 347 -174 l 174 -174 z "
            },
            "è": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 521 l 694 521 l 694 347 l 174 347 l 174 174 l 694 174 l 694 0 l 0 0 m 0 1042 l 0 1215 l 347 1215 l 347 1042 l 0 1042 z "
            },
            "é": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 521 l 694 521 l 694 347 l 174 347 l 174 174 l 694 174 l 694 0 l 0 0 m 347 1042 l 347 1215 l 694 1215 l 694 1042 l 347 1042 z "
            },
            "ê": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 521 l 694 521 l 694 347 l 174 347 l 174 174 l 694 174 l 694 0 l 0 0 m 0 1042 l 0 1215 l 694 1215 l 694 1042 l 0 1042 z "
            },
            "ë": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 694 l 174 694 l 174 521 l 694 521 l 694 347 l 174 347 l 174 174 l 694 174 l 694 0 l 0 0 m 0 1042 l 0 1215 l 174 1215 l 174 1042 l 0 1042 m 521 1042 l 521 1215 l 694 1215 l 694 1042 l 521 1042 z "
            },
            "ì": {
                ha: 528,
                x_min: 0,
                x_max: 347,
                o: "m 0 0 l 0 868 l 174 868 l 174 0 l 0 0 m 0 1042 l 0 1215 l 347 1215 l 347 1042 l 0 1042 z "
            },
            "í": {
                ha: 528,
                x_min: 0,
                x_max: 347,
                o: "m 0 0 l 0 868 l 174 868 l 174 0 l 0 0 m 0 1042 l 0 1215 l 347 1215 l 347 1042 l 0 1042 z "
            },
            "î": {
                ha: 354,
                x_min: 0,
                x_max: 174,
                o: "m 0 0 l 0 868 l 174 868 l 174 0 l 0 0 m 0 1042 l 0 1215 l 174 1215 l 174 1042 l 0 1042 z "
            },
            "ï": {
                ha: 528,
                x_min: -174,
                x_max: 347,
                o: "m 0 0 l 0 868 l 174 868 l 174 0 l 0 0 m -174 1042 l -174 1215 l 0 1215 l 0 1042 l -174 1042 m 174 1042 l 174 1215 l 347 1215 l 347 1042 l 174 1042 z "
            },
            "ð": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 694 174 l 694 347 l 174 347 l 174 174 l 694 174 m 694 521 l 694 694 l 521 694 l 521 521 l 694 521 m 0 0 l 0 521 l 347 521 l 347 694 l 174 694 l 174 868 l 347 868 l 347 1042 l 521 1042 l 521 868 l 868 868 l 868 0 l 0 0 z "
            },
            "ñ": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 694 868 l 694 0 l 521 0 l 521 694 l 174 694 l 174 0 l 0 0 m 0 1042 l 0 1215 l 694 1215 l 694 1042 l 0 1042 z "
            },
            "ò": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 694 l 174 694 l 174 174 l 521 174 m 0 0 l 0 868 l 694 868 l 694 0 l 0 0 m 0 1042 l 0 1215 l 347 1215 l 347 1042 l 0 1042 z "
            },
            "ó": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 694 l 174 694 l 174 174 l 521 174 m 0 0 l 0 868 l 694 868 l 694 0 l 0 0 m 347 1042 l 347 1215 l 694 1215 l 694 1042 l 347 1042 z "
            },
            "ô": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 694 l 174 694 l 174 174 l 521 174 m 0 0 l 0 868 l 694 868 l 694 0 l 0 0 m 0 1042 l 0 1215 l 694 1215 l 694 1042 l 0 1042 z "
            },
            "õ": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 694 l 174 694 l 174 174 l 521 174 m 0 0 l 0 868 l 694 868 l 694 0 l 0 0 m 0 1042 l 0 1215 l 694 1215 l 694 1042 l 0 1042 z "
            },
            "ö": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 694 l 174 694 l 174 174 l 521 174 m 0 0 l 0 868 l 694 868 l 694 0 l 0 0 m 0 1042 l 0 1215 l 174 1215 l 174 1042 l 0 1042 m 521 1042 l 521 1215 l 694 1215 l 694 1042 l 521 1042 z "
            },
            "÷": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 347 0 l 347 174 l 521 174 l 521 0 l 347 0 m 0 347 l 0 521 l 868 521 l 868 347 l 0 347 m 347 694 l 347 868 l 521 868 l 521 694 l 347 694 z "
            },
            "ø": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 521 174 l 521 521 l 347 521 l 347 694 l 174 694 l 174 347 l 347 347 l 347 174 l 521 174 m 0 0 l 0 868 l 694 868 l 694 0 l 0 0 z "
            },
            "ù": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 174 868 l 174 174 l 521 174 l 521 868 l 694 868 l 694 0 l 0 0 m 0 1042 l 0 1215 l 347 1215 l 347 1042 l 0 1042 z "
            },
            "ú": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 174 868 l 174 174 l 521 174 l 521 868 l 694 868 l 694 0 l 0 0 m 347 1042 l 347 1215 l 694 1215 l 694 1042 l 347 1042 z "
            },
            "û": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 174 868 l 174 174 l 521 174 l 521 868 l 694 868 l 694 0 l 0 0 m 0 1042 l 0 1215 l 694 1215 l 694 1042 l 0 1042 z "
            },
            "ü": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 174 868 l 174 174 l 521 174 l 521 868 l 694 868 l 694 0 l 0 0 m 0 1042 l 0 1215 l 174 1215 l 174 1042 l 0 1042 m 521 1042 l 521 1215 l 694 1215 l 694 1042 l 521 1042 z "
            },
            "ý": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 174 0 l 174 347 l 0 347 l 0 868 l 174 868 l 174 521 l 347 521 l 347 868 l 174 868 l 174 1042 l 521 1042 l 521 347 l 347 347 l 347 0 l 174 0 z "
            },
            "þ": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 347 347 l 347 521 l 174 521 l 174 347 l 347 347 m 0 0 l 0 868 l 174 868 l 174 694 l 521 694 l 521 174 l 174 174 l 174 0 l 0 0 z "
            },
            "ÿ": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 174 0 l 174 347 l 0 347 l 0 868 l 174 868 l 174 521 l 347 521 l 347 868 l 521 868 l 521 347 l 347 347 l 347 0 l 174 0 z "
            },
            "Ů": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 174 0 q 50 50 100 0 q 0 174 0 102 l 0 868 l 174 868 l 174 174 l 694 174 l 694 868 l 868 868 l 868 0 l 174 0 z "
            },
            "ů": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 174 0 q 50 50 100 0 q 0 174 0 102 l 0 868 l 174 868 l 174 174 l 694 174 l 694 868 l 868 868 l 868 0 l 174 0 z "
            },
            "Ÿ": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 174 0 l 174 347 l 0 347 l 0 694 l 174 694 l 174 521 l 347 521 l 347 694 l 521 694 l 521 347 l 347 347 l 347 0 l 174 0 m 0 868 l 0 1042 l 174 1042 l 174 868 l 0 868 m 347 868 l 347 1042 l 521 1042 l 521 868 l 347 868 z "
            },
            "ẞ": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 347 521 l 347 694 l 174 694 l 174 521 l 347 521 m 0 0 l 0 868 l 521 868 l 521 521 l 694 521 l 694 0 l 347 0 l 347 174 l 521 174 l 521 347 l 174 347 l 174 0 l 0 0 z "
            },
            "—": {ha: 1048, x_min: 0, x_max: 868, o: "m 0 347 l 0 521 l 868 521 l 868 347 l 0 347 z "},
            "‘": {ha: 354, x_min: 0, x_max: 174, o: "m 0 521 l 0 868 l 174 868 l 174 521 l 0 521 z "},
            "’": {ha: 354, x_min: 0, x_max: 174, o: "m 0 521 l 0 868 l 174 868 l 174 521 l 0 521 z "},
            "‚": {ha: 354, x_min: 0, x_max: 174, o: "m 0 -174 l 0 174 l 174 174 l 174 -174 l 0 -174 z "},
            "‛": {ha: 354, x_min: 0, x_max: 174, o: "m 0 521 l 0 868 l 174 868 l 174 521 l 0 521 z "},
            "“": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 0 521 l 0 868 l 174 868 l 174 521 l 0 521 m 347 521 l 347 868 l 521 868 l 521 521 l 347 521 z "
            },
            "”": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 0 521 l 0 868 l 174 868 l 174 521 l 0 521 m 347 521 l 347 868 l 521 868 l 521 521 l 347 521 z "
            },
            "„": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 0 -174 l 0 174 l 174 174 l 174 -174 l 0 -174 m 347 -174 l 347 174 l 521 174 l 521 -174 l 347 -174 z "
            },
            "†": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 174 0 l 174 521 l 0 521 l 0 694 l 174 694 l 174 1042 l 347 1042 l 347 694 l 521 694 l 521 521 l 347 521 l 347 0 l 174 0 z "
            },
            "•": {ha: 354, x_min: 0, x_max: 174, o: "m 0 347 l 0 521 l 174 521 l 174 347 l 0 347 z "},
            "…": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 0 0 l 0 174 l 174 174 l 174 0 l 0 0 m 347 0 l 347 174 l 521 174 l 521 0 l 347 0 m 694 0 l 694 174 l 868 174 l 868 0 l 694 0 z "
            },
            "‹": {
                ha: 528,
                x_min: 0,
                x_max: 347,
                o: "m 0 0 l 0 521 l 347 521 l 347 347 l 174 347 l 174 174 l 347 174 l 347 0 l 0 0 z "
            },
            "›": {
                ha: 528,
                x_min: 0,
                x_max: 347,
                o: "m 0 0 l 0 174 l 174 174 l 174 347 l 0 347 l 0 521 l 347 521 l 347 0 l 0 0 z "
            },
            "€": {
                ha: 875,
                x_min: -174,
                x_max: 694,
                o: "m 0 0 l 0 347 l -174 347 l -174 521 l 0 521 l 0 868 l 694 868 l 694 694 l 174 694 l 174 521 l 521 521 l 521 347 l 174 347 l 174 174 l 694 174 l 694 0 l 0 0 z "
            },
            "™": {
                ha: 701,
                x_min: 0,
                x_max: 521,
                o: "m 174 347 l 174 521 l 0 521 l 0 694 l 521 694 l 521 347 l 174 347 z "
            },
            "ﬀ": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 0 0 l 0 868 l 347 868 l 347 694 l 174 694 l 174 521 l 521 521 l 521 868 l 868 868 l 868 694 l 694 694 l 694 521 l 868 521 l 868 347 l 694 347 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 z "
            },
            "ﬁ": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 347 868 l 347 694 l 174 694 l 174 521 l 694 521 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 m 608 694 q 545 719 571 694 q 521 781 521 745 q 545 842 521 817 q 608 868 571 868 q 669 842 643 868 q 694 781 694 817 q 669 719 694 745 q 608 694 643 694 l 608 694 z "
            },
            "ﬂ": {
                ha: 875,
                x_min: 0,
                x_max: 694,
                o: "m 0 0 l 0 868 l 347 868 l 347 694 l 174 694 l 174 521 l 521 521 l 521 868 l 694 868 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 z "
            },
            "ﬃ": {
                ha: 1396,
                x_min: 0,
                x_max: 1215,
                o: "m 0 0 l 0 868 l 347 868 l 347 694 l 174 694 l 174 521 l 521 521 l 521 868 l 868 868 l 868 694 l 694 694 l 694 521 l 1215 521 l 1215 0 l 1042 0 l 1042 347 l 694 347 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 m 1042 694 l 1042 868 l 1215 868 l 1215 694 l 1042 694 z "
            },
            "ﬄ": {
                ha: 1396,
                x_min: 0,
                x_max: 1215,
                o: "m 0 0 l 0 868 l 347 868 l 347 694 l 174 694 l 174 521 l 521 521 l 521 868 l 868 868 l 868 694 l 694 694 l 694 521 l 1042 521 l 1042 868 l 1215 868 l 1215 0 l 1042 0 l 1042 347 l 694 347 l 694 0 l 521 0 l 521 347 l 174 347 l 174 0 l 0 0 z "
            },
            "ﬆ": {
                ha: 1048,
                x_min: 0,
                x_max: 868,
                o: "m 0 0 l 0 521 l 868 521 l 868 347 l 694 347 l 694 0 l 521 0 l 521 347 l 347 347 l 347 0 l 0 0 z "
            }
        },
        familyName: "Kenney Future Square",
        ascender: 1215,
        descender: -347,
        underlinePosition: 102,
        underlineThickness: 51,
        boundingBox: {yMin: -256, xMin: -128, yMax: 896, xMax: 896},
        resolution: 1e3,
        original_font_information: {
            format: 0,
            copyright: "Copyright Kenney 2013",
            fontFamily: "Kenney Future Square",
            fontSubfamily: "Regular",
            uniqueID: "FontStruct Kenney Future Square",
            fullName: "Kenney Future Square Regular",
            version: "Version 1.0",
            postScriptName: "Kenney-Future-Square",
            trademark: "FontStruct is a trademark of FSI FontShop International GmbH",
            manufacturer: "http://fontstruct.com",
            designer: "Kenney",
            description: "‚ÄúKenney Future Square‚Äù was built with FontStruct\n",
            manufacturerURL: "http://www.fontshop.com",
            designerURL: "http://fontstruct.com/fontstructions/show/904617",
            licence: "Creative Commons Attribution Share Alike",
            licenceURL: "http://creativecommons.org/licenses/by-sa/3.0/",
            sampleText: "Five big quacking zephyrs jolt my wax bed",
            unknown1: "CwkMc1hj"
        },
        cssFontWeight: "normal",
        cssFontStyle: "normal"
    }
}, function (t, e, n) {
    !function (e, n) {
        t.exports = n()
    }(this, function () {
        "use strict";
        var t = function (t, e, n, r) {
            return t /= r / 2, t < 1 ? n / 2 * t * t + e : (t--, -n / 2 * (t * (t - 2) - 1) + e)
        }, e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
              return typeof t
          } : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, n = function () {
            function n() {
                return window.scrollY || window.pageYOffset
            }

            function r(t) {
                return t.getBoundingClientRect().top + l
            }

            function i(t) {
                m || (m = t), v = t - m, g = h(v, l, d, p), window.scrollTo(0, g), v < p ? window.requestAnimationFrame(i) : o()
            }

            function o() {
                window.scrollTo(0, l + d), s && f && (s.setAttribute("tabindex", "-1"), s.focus()), "function" == typeof y && y(), m = !1
            }

            function a(o) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                switch (p = a.duration || 1e3, u = a.offset || 0, y = a.callback, h = a.easing || t, f = a.a11y || !1, l = n(), "undefined" == typeof o ? "undefined" : e(o)) {
                    case"number":
                        s = void 0, f = !1, c = l + o;
                        break;
                    case"object":
                        s = o, c = r(s);
                        break;
                    case"string":
                        s = document.querySelector(o), c = r(s)
                }
                switch (d = c - l + u, e(a.duration)) {
                    case"number":
                        p = a.duration;
                        break;
                    case"function":
                        p = a.duration(d)
                }
                window.requestAnimationFrame(i)
            }

            var s = void 0, l = void 0, c = void 0, u = void 0, h = void 0, f = void 0, d = void 0, p = void 0, m = void 0, v = void 0, g = void 0, y = void 0;
            return a
        }, r = n();
        return r
    })
}]);