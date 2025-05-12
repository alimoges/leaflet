const {t: e} = W.trans,
    {bound: t, scaleLinear: r, tsMinute: s} = W.utils;
import { f as a, o, C as i, s as n, b as l } from "./_shared/segmented-calendar-scale.js";
import { w as p } from "./_shared/svelte-store-adapter.js";
const {Drag: c} = W.Drag,
    d = W.format;
import { w as u } from "./_shared/index.js";
import { S as g, i as v, s as m, f as x, a as b, e as f, t as h, b as $, c as w, d as y, g as X, h as k, u as z, j as T, n as _, k as j, l as C, p as D, E as B, F, v as L, x as I, y as M, z as R, U, o as q, A, B as E, C as S, w as G, q as H } from "./_shared/component.js";
import "./_shared/each.js";
var J = u(!1);
function K(e) {
    b(e, "svelte-1pbieg5", ".timecode.svelte-1pbieg5.svelte-1pbieg5{font-size:13px}.timecode.svelte-1pbieg5 .box-text[data-zulu].svelte-1pbieg5::after{display:inline;content:attr(data-zulu);font-size:0.8em;opacity:0.7;margin-left:5px}")
}
function N(e) {
    var t,
        r,
        s,
        a,
        o,
        i,
        n,
        l,
        p;
    return {
        c() {
            t = f("div"),
            r = f("div"),
            s = f("div"),
            a = f("span"),
            o = h(e[0]),
            i = $(),
            n = f("div"),
            w(a, "class", "box-text svelte-1pbieg5"),
            w(a, "data-zulu", e[1]),
            w(s, "class", "box"),
            w(n, "class", "loading loading--variant-gray size-l loader-path"),
            w(r, "class", "box-wrapper"),
            w(t, "class", "timecode desktop-timecode tooltip--right svelte-1pbieg5"),
            w(t, "data-tooltip", e[3]),
            y(t, "margin-left", "".concat(e[8], "px")),
            y(t, "left", "".concat(e[2], "%"))
        },
        m(c, d) {
            X(c, t, d),
            k(t, r),
            k(r, s),
            k(s, a),
            k(a, o),
            k(r, i),
            k(r, n),
            l || (p = z(e[9].call(null, t)), l = !0)
        },
        p(e, r) {
            var [s] = r;
            1 & s && T(o, e[0]),
            2 & s && w(a, "data-zulu", e[1]),
            8 & s && w(t, "data-tooltip", e[3]),
            4 & s && y(t, "left", "".concat(e[2], "%"))
        },
        i: _,
        o: _,
        d(e) {
            e && j(t),
            l = !1,
            p()
        }
    }
}
function O(r, s, o) {
    var i,
        n,
        l,
        u,
        g;
    C(r, J, (e => o(18, i = e)));
    var {x: v} = s,
        {pxX: m} = s,
        x = p("calendar");
    C(r, x, (e => o(13, l = e)));
    var b = p("zuluMode");
    C(r, b, (e => o(14, u = e)));
    var f = p("timestamp");
    C(r, f, (e => o(12, n = e)));
    var h = p("hourFormat");
    C(r, h, (e => o(15, g = e)));
    var $,
        w,
        y,
        X,
        k,
        z = e.D_LT2,
        T = e => {
            if (l) {
                var r = m.get(e - -25),
                    s = t(v.invert(r), l.start, l.end);
                s < k && s >= X && (D(f, n = s, n), o(2, y = r))
            }
        },
        _ = () => {
            D(J, i = !0, i),
            z && setTimeout((() => o(3, z = null)), 2e3)
        },
        j = () => {
            D(J, i = !1, i),
            o(3, z = e.D_LT2)
        };
    return r.$$set = e => {
        "x" in e && o(10, v = e.x),
        "pxX" in e && o(11, m = e.pxX)
    }, r.$$.update = () => {
        45056 & r.$$.dirty && l && o(0, $ = a(l, n)),
        20480 & r.$$.dirty && o(1, w = u ? d.hourUTC(n) : void 0),
        5120 & r.$$.dirty && o(2, y = v.get(n)),
        8192 & r.$$.dirty && l && ({refTimeTs: X, end: k} = l)
    }, [$, w, y, z, x, b, f, h, -25, e => {
        new c({
            el: e,
            ondrag: T,
            ondragend: j,
            ondragstart: _
        })
    }, v, m, n, l, u, g]
}
class P extends g {
    constructor(e)
    {
        super(),
        v(this, e, O, N, m, {
            x: 10,
            pxX: 11
        }, K)
    }
    get x()
    {
        return this.$$.ctx[10]
    }
    set x(e)
    {
        this.$$set({
            x: e
        }),
        x()
    }
    get pxX()
    {
        return this.$$.ctx[11]
    }
    set pxX(e)
    {
        this.$$set({
            pxX: e
        }),
        x()
    }
}
function Q(e) {
    b(e, "svelte-e541tu", ".progress-bar-wrapper.svelte-e541tu.svelte-e541tu{position:relative;width:100%;padding:0 30px;margin:0 auto;align-items:flex-end}.progress-bar-wrapper.svelte-e541tu .progress-bar-right.svelte-e541tu{width:100%}.progress-bar-wrapper.svelte-e541tu .progress-bar-right .progress-bar .progress-line.svelte-e541tu{cursor:pointer;-webkit-tap-highlight-color:initial;top:0;border:0;pointer-events:auto}.progress-bar-wrapper.svelte-e541tu .progress-bar-right .progress-bar .progress-line .played.svelte-e541tu,.progress-bar-wrapper.svelte-e541tu .progress-bar-right .progress-bar .progress-line .avbl.svelte-e541tu{border-radius:0;border-top-left-radius:6px;border-top-right-radius:6px}.progress-bar-wrapper.svelte-e541tu .progress-bar-right .progress-bar .progress-line .played.svelte-e541tu{background-color:var(--color-white);position:absolute;border-top-right-radius:0}.progress-bar-wrapper.svelte-e541tu .progress-bar-right .progress-bar .progress-line.svelte-e541tu:after{content:'';position:absolute;top:-10px;bottom:-10px;left:-10px;right:-10px;z-index:1}")
}
function V(e) {
    var t,
        r,
        s,
        a,
        o,
        i,
        n,
        l,
        p,
        c,
        d,
        u,
        g,
        v,
        m;
    return u = new P({
        props: {
            x: e[1],
            pxX: e[3]
        }
    }), {
        c() {
            t = f("div"),
            r = f("div"),
            s = $(),
            a = f("div"),
            o = $(),
            i = f("i"),
            n = $(),
            l = f("div"),
            p = f("div"),
            c = h(e[8]),
            d = $(),
            A(u.$$.fragment),
            w(r, "class", "avbl svelte-e541tu"),
            w(a, "class", "played svelte-e541tu"),
            y(a, "width", "".concat(e[1].get(e[2]), "%")),
            y(i, "left", "".concat(e[9], "%")),
            w(t, "class", "progress-line svelte-e541tu"),
            w(p, "class", "box"),
            w(l, "class", "timecode ghost-timecode"),
            y(l, "opacity", e[6]),
            y(l, "left", "".concat(e[7], "px"))
        },
        m(x, b) {
            X(x, t, b),
            k(t, r),
            k(t, s),
            k(t, a),
            k(t, o),
            k(t, i),
            e[20](t),
            X(x, n, b),
            X(x, l, b),
            k(l, p),
            k(p, c),
            X(x, d, b),
            E(u, x, b),
            g = !0,
            v || (m = [F(t, "mouseenter", e[14]), F(t, "mouseleave", e[15]), F(t, "mousemove", e[16]), F(t, "click", e[17])], v = !0)
        },
        p(e, t) {
            6 & t && y(a, "width", "".concat(e[1].get(e[2]), "%")),
            512 & t && y(i, "left", "".concat(e[9], "%")),
            (!g || 256 & t) && T(c, e[8]),
            64 & t && y(l, "opacity", e[6]),
            128 & t && y(l, "left", "".concat(e[7], "px"));
            var r = {};
            2 & t && (r.x = e[1]),
            8 & t && (r.pxX = e[3]),
            u.$set(r)
        },
        i(e) {
            g || (L(u.$$.fragment, e), g = !0)
        },
        o(e) {
            I(u.$$.fragment, e),
            g = !1
        },
        d(r) {
            r && (j(t), j(n), j(l), j(d)),
            e[20](null),
            S(u, r),
            v = !1,
            U(m)
        }
    }
}
function Y(e) {
    var t,
        r;
    return t = new i({
        props: {
            isClickable: !0,
            progressWidth: e[0],
            x: e[1]
        }
    }), {
        c() {
            A(t.$$.fragment)
        },
        m(e, s) {
            E(t, e, s),
            r = !0
        },
        p(e, r) {
            var s = {};
            1 & r && (s.progressWidth = e[0]),
            2 & r && (s.x = e[1]),
            t.$set(s)
        },
        i(e) {
            r || (L(t.$$.fragment, e), r = !0)
        },
        o(e) {
            I(t.$$.fragment, e),
            r = !1
        },
        d(e) {
            S(t, e)
        }
    }
}
function Z(e) {
    var t,
        r,
        s,
        a,
        i,
        n,
        l,
        p,
        c,
        d,
        u = e[1] && V(e),
        g = e[1] && e[0] && Y(e);
    return {
        c() {
            t = f("section"),
            r = f("div"),
            s = $(),
            a = f("section"),
            i = f("section"),
            u && u.c(),
            n = $(),
            g && g.c(),
            w(r, "class", "play-pause mr-15 mb-8"),
            B(r, "checkbox--off", !e[10]),
            w(i, "class", "progress-bar noselect"),
            w(a, "class", "progress-bar-right noselect svelte-e541tu"),
            w(t, "class", "progress-bar-wrapper flex-row svelte-e541tu"),
            y(t, "max-width", "".concat(e[4], "px"))
        },
        m(v, m) {
            X(v, t, m),
            k(t, r),
            k(t, s),
            k(t, a),
            k(a, i),
            u && u.m(i, null),
            k(a, n),
            g && g.m(a, null),
            p = !0,
            c || (d = [F(r, "click", e[19]), z(l = o.call(null, a, [e[21]]))], c = !0)
        },
        p(e, s) {
            var [o] = s;
            (!p || 1024 & o) && B(r, "checkbox--off", !e[10]),
            e[1] ? u ? (u.p(e, o), 2 & o && L(u, 1)) : ((u = V(e)).c(), L(u, 1), u.m(i, null)) : u && (G(), I(u, 1, 1, (() => {
                u = null
            })), M()),
            e[1] && e[0] ? g ? (g.p(e, o), 3 & o && L(g, 1)) : ((g = Y(e)).c(), L(g, 1), g.m(a, null)) : g && (G(), I(g, 1, 1, (() => {
                g = null
            })), M()),
            l && R(l.update) && 1 & o && l.update.call(null, [e[21]]),
            16 & o && y(t, "max-width", "".concat(e[4], "px"))
        },
        i(e) {
            p || (L(u), L(g), p = !0)
        },
        o(e) {
            I(u),
            I(g),
            p = !1
        },
        d(e) {
            e && j(t),
            u && u.d(),
            g && g.d(),
            c = !1,
            U(d)
        }
    }
}
function ee(e, a, o) {
    var i,
        c,
        d,
        u;
    C(e, J, (e => o(23, d = e)));
    var g = p("animation");
    C(e, g, (e => o(10, u = e)));
    var v = p("calendar");
    C(e, v, (e => o(18, i = e)));
    var m,
        x,
        b,
        f,
        h,
        $ = p("timestamp");
    C(e, $, (e => o(2, c = e)));
    var w = 0,
        y = 0,
        X = 0,
        k = "",
        z = 0,
        T = () => {
            x && o(9, z = x.get(Date.now()))
        };
    q((() => {
        var e = setInterval(T, s);
        return () => {
            clearInterval(e)
        }
    }));
    return e.$$.update = () => {
        if (1 & e.$$.dirty && o(3, b = r({
            domain: [0, m],
            range: [0, 100],
            clip: !0
        })), 262148 & e.$$.dirty && i && D($, c = t(c, i.refTimeTs, i.end), c), 262144 & e.$$.dirty && i) {
            o(1, x = n(i, !0));
            var {length: s} = i.days.filter((e => e.hasForecast));
            o(4, f = s < 3 ? 500 : s < 5 ? 800 : s < 10 ? 1100 : 1800)
        }
        2 & e.$$.dirty && x && T()
    }, [m, x, c, b, f, h, y, X, k, z, u, g, v, $, () => {
        d || (o(6, y = 1), ({x: w} = h.getBoundingClientRect()))
    }, () => {
        o(6, y = 0)
    }, e => {
        var {clientX: t} = e;
        if (x && i) {
            o(7, X = t - w);
            var r = b.get(X),
                s = x.invert(r);
            o(8, k = l(i.end, s))
        }
    }, e => {
        var {clientX: r} = e;
        if (x && i) {
            ({x: w} = h.getBoundingClientRect()),
            o(7, X = r - w);
            var s = b.get(X),
                a = x.invert(s);
            D($, c = t(a, i.refTimeTs, i.end), c)
        }
    }, i, () => D(g, u = !u, u), function(e) {
        H[e ? "unshift" : "push"]((() => {
            o(5, h = e)
        }))
    }, e => o(0, m = e)]
}
class te extends g {
    constructor(e)
    {
        super(),
        v(this, e, ee, Z, m, {}, Q)
    }
}
const re = "#device-desktop #plugin-progress-bar {  pointer-events: auto;  margin: 0;}";
export { re as __css, te as default };

