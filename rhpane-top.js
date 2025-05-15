const {t: e} = W.trans,
    t = W.broadcast,
    r = W.plugins,
    {bound: a, $: i, debounce: n, logError: s} = W.utils,
    l = W.overlays,
    {levelsData: o} = W.rootScope;
import { w as m } from "./_shared/svelte-store-adapter.js";
import { S as d, i as v, s as c, f as h, a as p, e as _, b as u, c as g, E as f, g as x, h as b, F as y, n as k, k as w, l as z, o as j, p as $, q as O, t as S, j as C, d as M, Y as D, U as T, w as A, y as E, v as L, x as U, r as q, A as R, B as I, C as B } from "./_shared/component.js";
import { i as N, d as P } from "./_shared/overlay-list.js";
import { e as F, u as G, o as H } from "./_shared/each.js";
import { A as Y } from "./_shared/avatar.js";
function J(e) {
    p(e, "svelte-1r0a9mk", ".rhitem__levels.svelte-1r0a9mk.svelte-1r0a9mk{margin-top:1.3em}.rhitem__levels.disabled.svelte-1r0a9mk.svelte-1r0a9mk{pointer-events:none}.rhitem__levels.svelte-1r0a9mk .rhitem__name.svelte-1r0a9mk{max-width:unset;display:flex;flex-direction:row;align-items:center}.rhitem__levels.svelte-1r0a9mk .rhitem__name .rhitem__level-desc--multiline.svelte-1r0a9mk{font-size:0.9em;padding-left:0.7em}.rhitem__levels.svelte-1r0a9mk .rhitem__name .rhitem__level-desc--multiline small.svelte-1r0a9mk{display:block}.rhitem__levels.svelte-1r0a9mk .rhitem__level-selector.svelte-1r0a9mk{font-size:20px;width:0;height:0;opacity:0;margin:0;transition:opacity 0.25s, width 0.25s;display:none}.rhitem__levels.svelte-1r0a9mk .rhitem__level-selector--unfolded.svelte-1r0a9mk{display:block}.rhitem__levels.svelte-1r0a9mk .rhitem__icon.svelte-1r0a9mk{background-color:var(--color-orange)}.rhitem__levels.svelte-1r0a9mk .rhitem__icon.svelte-1r0a9mk::before{font-size:2.2em;top:0.22em;position:relative}.rhitem__levels--unfolded.svelte-1r0a9mk.svelte-1r0a9mk{font-size:11px;z-index:10}.rhitem__levels--unfolded.svelte-1r0a9mk .rhitem__name.svelte-1r0a9mk{background-color:var(--color-gray-dark);font-size:1.3em;height:33px}.rhitem__levels--unfolded.svelte-1r0a9mk .rhitem__level-selector.svelte-1r0a9mk{width:130px;opacity:1;pointer-events:auto;margin-right:15px}")
}
function Q(e) {
    var t,
        r,
        a,
        i,
        n,
        s;
    function l(e, t) {
        return "surface" !== e[4] || e[5] ? "surface" === e[4] && e[5] ? X : e[5] ? K : V : Z
    }
    var o = l(e),
        m = o(e);
    return {
        c() {
            t = _("div"),
            m.c(),
            r = u(),
            a = _("input"),
            g(a, "type", "range"),
            g(a, "class", "rhitem__level-selector noselect notap svelte-1r0a9mk"),
            g(a, "min", "0"),
            g(a, "max", i = e[3].length - 1),
            g(a, "step", "1"),
            a.value = e[1],
            f(a, "rhitem__level-selector--unfolded", e[5]),
            g(t, "class", "rhitem__name svelte-1r0a9mk")
        },
        m(i, l) {
            x(i, t, l),
            m.m(t, null),
            b(t, r),
            b(t, a),
            e[13](a),
            n || (s = y(a, "input", e[10]), n = !0)
        },
        p(e, n) {
            o === (o = l(e)) && m ? m.p(e, n) : (m.d(1), (m = o(e)) && (m.c(), m.m(t, r))),
            8 & n && i !== (i = e[3].length - 1) && g(a, "max", i),
            2 & n && (a.value = e[1]),
            32 & n && f(a, "rhitem__level-selector--unfolded", e[5])
        },
        d(r) {
            r && w(t),
            m.d(),
            e[13](null),
            n = !1,
            s()
        }
    }
}
function K(e) {
    var t,
        r,
        a,
        i,
        n,
        s = o[e[4]][0] + "",
        l = o[e[4]][1] + "";
    return {
        c() {
            t = _("div"),
            r = S(s),
            a = u(),
            i = _("small"),
            n = S(l),
            g(i, "class", "svelte-1r0a9mk"),
            g(t, "class", "rhitem__level-desc rhitem__level-desc--multiline mr-20 svelte-1r0a9mk")
        },
        m(e, s) {
            x(e, t, s),
            b(t, r),
            b(t, a),
            b(t, i),
            b(i, n)
        },
        p(e, t) {
            16 & t && s !== (s = o[e[4]][0] + "") && C(r, s),
            16 & t && l !== (l = o[e[4]][1] + "") && C(n, l)
        },
        d(e) {
            e && w(t)
        }
    }
}
function V(e) {
    var t,
        r,
        a,
        i,
        n,
        s = o[e[4]][0] + "",
        l = e[0] > 4 && ee(e);
    return {
        c() {
            t = _("div"),
            r = S(s),
            a = u(),
            l && l.c(),
            g(t, "class", "rhitem__level-desc svelte-1r0a9mk"),
            f(t, "rhitem__level-desc--multiline", e[0] > 4)
        },
        m(s, o) {
            x(s, t, o),
            b(t, r),
            b(t, a),
            l && l.m(t, null),
            i || (n = y(t, "click", e[11]), i = !0)
        },
        p(e, a) {
            16 & a && s !== (s = o[e[4]][0] + "") && C(r, s),
            e[0] > 4 ? l ? l.p(e, a) : ((l = ee(e)).c(), l.m(t, null)) : l && (l.d(1), l = null),
            1 & a && f(t, "rhitem__level-desc--multiline", e[0] > 4)
        },
        d(e) {
            e && w(t),
            l && l.d(),
            i = !1,
            n()
        }
    }
}
function X(t) {
    var r;
    return {
        c() {
            (r = _("div")).textContent = "".concat(e.SFC),
            g(r, "class", "rhitem__level-desc mr-20")
        },
        m(e, t) {
            x(e, r, t)
        },
        p: k,
        d(e) {
            e && w(r)
        }
    }
}
function Z(t) {
    var r,
        a,
        i;
    return {
        c() {
            (r = _("div")).textContent = "".concat(e.ALTITUDE),
            g(r, "class", "rhitem__level-desc")
        },
        m(e, n) {
            x(e, r, n),
            a || (i = y(r, "click", t[11]), a = !0)
        },
        p: k,
        d(e) {
            e && w(r),
            a = !1,
            i()
        }
    }
}
function ee(e) {
    var t,
        r,
        a = o[e[4]][1] + "";
    return {
        c() {
            t = _("small"),
            r = S(a),
            g(t, "class", "svelte-1r0a9mk")
        },
        m(e, a) {
            x(e, t, a),
            b(t, r)
        },
        p(e, t) {
            16 & t && a !== (a = o[e[4]][1] + "") && C(r, a)
        },
        d(e) {
            e && w(t)
        }
    }
}
function te(e) {
    var t,
        r,
        a,
        i,
        n,
        s = e[2] && Q(e);
    return {
        c() {
            t = _("a"),
            s && s.c(),
            r = u(),
            a = _("div"),
            g(a, "class", "rhitem__icon svelte-1r0a9mk"),
            g(a, "data-icon", "Q"),
            g(t, "class", "rhitem rhitem__levels svelte-1r0a9mk"),
            f(t, "disabled", !e[2]),
            f(t, "rhitem__levels--unfolded", e[5])
        },
        m(l, o) {
            x(l, t, o),
            s && s.m(t, null),
            b(t, r),
            b(t, a),
            i || (n = y(a, "click", e[11]), i = !0)
        },
        p(e, a) {
            var [i] = a;
            e[2] ? s ? s.p(e, i) : ((s = Q(e)).c(), s.m(t, r)) : s && (s.d(1), s = null),
            4 & i && f(t, "disabled", !e[2]),
            32 & i && f(t, "rhitem__levels--unfolded", e[5])
        },
        i: k,
        o: k,
        d(e) {
            e && w(t),
            s && s.d(),
            i = !1,
            n()
        }
    }
}
function re(e, t, r) {
    var i,
        n,
        s,
        o = m("level");
    z(e, o, (e => r(4, n = e)));
    var d = m("overlay");
    z(e, d, (e => r(12, s = e)));
    var v = m("availLevels");
    z(e, v, (e => r(3, i = e)));
    var c,
        h,
        p,
        {iconSize: _} = t,
        u = !1,
        g = 0,
        f = () => {
            clearTimeout(c),
            c = setTimeout((() => {
                r(5, u = !1)
            }), 7e3)
        };
    function x(e) {
        var {key: t} = e;
        if (("PageUp" === t || "PageDown" === t) && p) {
            var r = a(g + ("PageUp" === t ? 1 : -1), 0, i.length - 1);
            $(o, n = i[r], n),
            e.preventDefault()
        }
    }
    return j((() => {
        document.body.addEventListener("keydown", x, !1)
    })), e.$$set = e => {
        "iconSize" in e && r(0, _ = e.iconSize)
    }, e.$$.update = () => {
        if (4100 & e.$$.dirty && (r(2, ({hasMoreLevels: p} = l[s]), p), p || r(5, u = !1)), 26 & e.$$.dirty && n !== i[g]) {
            var t = i.indexOf(n);
            t > -1 && r(1, g = t)
        }
    }, [_, g, p, i, n, u, h, o, d, v, () => {
        if (u) {
            var e = parseInt(h.value, 10);
            $(o, n = i[e] || "surface", n),
            f()
        }
    }, () => {
        u ? r(5, u = !1) : (r(5, u = !0), f())
    }, s, function(e) {
        O[e ? "unshift" : "push"]((() => {
            r(6, h = e)
        }))
    }]
}
class ae extends d {
    constructor(e)
    {
        super(),
        v(this, e, re, te, c, {
            iconSize: 0
        }, J)
    }
    get iconSize()
    {
        return this.$$.ctx[0]
    }
    set iconSize(e)
    {
        this.$$set({
            iconSize: e
        }),
        h()
    }
}
function ie(e) {
    p(e, "svelte-6e6xwb", ".rhitem.shaky.svelte-6e6xwb.svelte-6e6xwb:nth-child(3n + 1){animation-direction:reverse;animation-delay:-0.2s}.rhitem.shaky.svelte-6e6xwb.svelte-6e6xwb:nth-child(3n + 2){animation-direction:alternate;animation-delay:-0.4s}.rhitem[draggable='true'].svelte-6e6xwb.svelte-6e6xwb{cursor:move}.rhitem[draggable='true'].svelte-6e6xwb .rhitem__name.svelte-6e6xwb{cursor:move}.rhitem__trash-can.svelte-6e6xwb.svelte-6e6xwb{cursor:pointer;font-size:7px;display:inline-flex;align-items:center;justify-content:center}.rhitem__trash-can.svelte-6e6xwb.svelte-6e6xwb::before{font-size:2.1em}.rhitem--being-over.svelte-6e6xwb.svelte-6e6xwb{margin-top:0;border-top:solid transparent 15px}.rhitem--being-over.svelte-6e6xwb.svelte-6e6xwb::before{position:absolute;right:0;top:-12px;content:'';border-radius:5px;width:100%;height:3px;border:2px dashed var(--color-orange-light)}")
}
function ne(e) {
    var t,
        r,
        a;
    return {
        c() {
            t = _("div"),
            g(t, "class", "rhitem__trash-can avatar bg-red ml-5 svelte-6e6xwb"),
            g(t, "data-icon", "_")
        },
        m(i, n) {
            x(i, t, n),
            r || (a = y(t, "click", e[9]), r = !0)
        },
        p: k,
        d(e) {
            e && w(t),
            r = !1,
            a()
        }
    }
}
function se(e) {
    var t,
        r,
        a,
        i,
        n,
        s,
        l,
        o,
        m,
        d = e[0].name + "",
        v = e[3] && ne(e);
    return {
        c() {
            t = _("a"),
            r = _("div"),
            a = S(d),
            i = u(),
            n = _("div"),
            s = u(),
            v && v.c(),
            g(r, "class", "rhitem__name svelte-6e6xwb"),
            g(n, "class", "rhitem__icon"),
            M(n, "background-image", "url(".concat(e[0].thumbnail, ")")),
            g(t, "class", "rhitem svelte-6e6xwb"),
            g(t, "draggable", e[3]),
            g(t, "data-ident", l = e[0].ident),
            f(t, "selected", e[2] === e[0].ident),
            f(t, "shaky", e[3]),
            f(t, "rhitem--being-over", e[1])
        },
        m(l, d) {
            x(l, t, d),
            b(t, r),
            b(r, a),
            b(t, i),
            b(t, n),
            b(t, s),
            v && v.m(t, null),
            o || (m = [y(t, "dragover", D(e[7])), y(t, "drop", D(e[8])), y(t, "click", e[10]), y(t, "dragstart", e[11])], o = !0)
        },
        p(e, r) {
            var [i] = r;
            1 & i && d !== (d = e[0].name + "") && C(a, d),
            1 & i && M(n, "background-image", "url(".concat(e[0].thumbnail, ")")),
            e[3] ? v ? v.p(e, i) : ((v = ne(e)).c(), v.m(t, null)) : v && (v.d(1), v = null),
            8 & i && g(t, "draggable", e[3]),
            1 & i && l !== (l = e[0].ident) && g(t, "data-ident", l),
            5 & i && f(t, "selected", e[2] === e[0].ident),
            8 & i && f(t, "shaky", e[3]),
            2 & i && f(t, "rhitem--being-over", e[1])
        },
        i: k,
        o: k,
        d(e) {
            e && w(t),
            v && v.d(),
            o = !1,
            T(m)
        }
    }
}
function le(e, t, r) {
    var a,
        i,
        n,
        s,
        {item: l} = t,
        o = !1,
        d = m("overlay");
    z(e, d, (e => r(2, i = e)));
    var v = m("favOverlaysDesktop");
    z(e, v, (e => r(13, a = e)));
    var c = m("rhMenuArrangeMode");
    z(e, c, (e => r(3, n = e)));
    return e.$$set = e => {
        "item" in e && r(0, l = e.item)
    }, [l, o, i, n, d, v, c, () => {
        r(1, o = !0),
        clearTimeout(s),
        s = setTimeout((() => {
            r(1, o = !1)
        }), 100)
    }, e => {
        var t,
            r = null === (t = e.dataTransfer) || void 0 === t ? void 0 : t.getData("text");
        if (r) {
            var i = [...a],
                n = i.indexOf(r),
                s = i.indexOf(l.ident);
            -1 !== n && -1 !== s ? (i.splice(n, 1), i.splice(s, 0, r)) : -1 !== s && i.splice(s, 0, r),
            $(v, a = [...i], a)
        }
    }, () => {
        var e = [...a];
        e.includes(l.ident) && a.length > 0 && (e.splice(e.indexOf(l.ident), 1), $(v, a = [...e], a))
    }, () => {
        n || l.onClick()
    }, e => {
        var t;
        null === (t = e.dataTransfer) || void 0 === t || t.setData("text", l.ident)
    }]
}
class oe extends d {
    constructor(e)
    {
        super(),
        v(this, e, le, se, c, {
            item: 0
        }, ie)
    }
    get item()
    {
        return this.$$.ctx[0]
    }
    set item(e)
    {
        this.$$set({
            item: e
        }),
        h()
    }
}
function me(e) {
    p(e, "svelte-b6y77d", ".rhpane__overlays-levels--arranging.svelte-b6y77d.svelte-b6y77d{--trash-icon-width:21px}.rhpane__overlays-levels{display:flex;flex-direction:column;align-items:flex-end;position:absolute;top:100%;right:0;font-size:11px;margin-right:4px}.rhpane__overlays-levels[data-iconsize='7']{font-size:10px;margin-right:5.5px}.rhpane__overlays-levels[data-iconsize='6']{font-size:9px;margin-right:6.5px}.rhpane__overlays-levels[data-iconsize='5']{font-size:8px;margin-right:9px}.rhpane__overlays-levels[data-iconsize='5'] .rhitem__name{font-size:1.4em}.rhpane__overlays-levels[data-iconsize='4']{font-size:6px;margin-right:11.5px}.rhpane__overlays-levels[data-iconsize='4'] .rhitem__name{font-size:1.9em}.rhpane__overlays-levels[data-iconsize='2'],.rhpane__overlays-levels[data-iconsize='3']{margin-right:11px;display:grid;justify-items:end;align-items:start;grid-template-columns:repeat(2, minmax(calc(110px + var(--trash-icon-width, 0px)), 1fr));font-size:6px}.rhpane__overlays-levels[data-iconsize='2'] .rhitem .rhitem__name,.rhpane__overlays-levels[data-iconsize='3'] .rhitem .rhitem__name{max-width:95px}.rhpane__overlays-levels[data-iconsize='2'] .rhitem__levels,.rhpane__overlays-levels[data-iconsize='3'] .rhitem__levels{grid-column:2}.rhpane__overlays-levels[data-iconsize='2'] .rhitem__name,.rhpane__overlays-levels[data-iconsize='3'] .rhitem__name{font-size:1.9em}.rhpane__overlays-levels[data-iconsize='1']{margin-right:11px;display:grid;justify-items:end;align-items:start;grid-template-columns:repeat(3, minmax(calc(110px + var(--trash-icon-width, 0px)), 1fr));font-size:6px}.rhpane__overlays-levels[data-iconsize='1'] .rhitem .rhitem__name{max-width:95px}.rhpane__overlays-levels[data-iconsize='1'] .rhitem__levels{grid-column:3}.rhpane__overlays-levels[data-iconsize='1'] .rhitem__name{font-size:1.9em}.rhpane__overlays-levels[data-iconsize='0']{margin-right:11px;display:grid;justify-items:end;align-items:start;grid-template-columns:repeat(6, minmax(calc(110px + var(--trash-icon-width, 0px)), 1fr));font-size:6px}.rhpane__overlays-levels[data-iconsize='0'] .rhitem .rhitem__name{max-width:95px}.rhpane__overlays-levels[data-iconsize='0'] .rhitem__levels{grid-column:6}.rhpane__overlays-levels[data-iconsize='0'] .rhitem__name{font-size:1.9em}.rhitem__more-layers.svelte-b6y77d.svelte-b6y77d{margin-top:0.7em}.rhitem__more-layers.svelte-b6y77d .rhitem__name.svelte-b6y77d{font-size:1em;border-radius:2em;margin-right:0;padding-right:0.7em}")
}
function de(e, t, r) {
    var a = e.slice();
    return a[12] = t[r], a
}
function ve(e, t) {
    var r,
        a,
        i;
    return a = new oe({
        props: {
            item: t[12]
        }
    }), {
        key: e,
        first: null,
        c() {
            r = q(),
            R(a.$$.fragment),
            this.first = r
        },
        m(e, t) {
            x(e, r, t),
            I(a, e, t),
            i = !0
        },
        p(e, r) {
            t = e;
            var i = {};
            1 & r && (i.item = t[12]),
            a.$set(i)
        },
        i(e) {
            i || (L(a.$$.fragment, e), i = !0)
        },
        o(e) {
            U(a.$$.fragment, e),
            i = !1
        },
        d(e) {
            e && w(r),
            B(a, e)
        }
    }
}
function ce(e) {
    var t,
        r,
        a,
        i = e[1] > 7 && he(e);
    return r = new ae({
        props: {
            iconSize: e[1]
        }
    }), {
        c() {
            i && i.c(),
            t = u(),
            R(r.$$.fragment)
        },
        m(e, n) {
            i && i.m(e, n),
            x(e, t, n),
            I(r, e, n),
            a = !0
        },
        p(e, a) {
            e[1] > 7 ? i || ((i = he(e)).c(), i.m(t.parentNode, t)) : i && (i.d(1), i = null);
            var n = {};
            2 & a && (n.iconSize = e[1]),
            r.$set(n)
        },
        i(e) {
            a || (L(r.$$.fragment, e), a = !0)
        },
        o(e) {
            U(r.$$.fragment, e),
            a = !1
        },
        d(e) {
            e && w(t),
            i && i.d(e),
            B(r, e)
        }
    }
}
function he(t) {
    var r,
        a,
        i,
        n;
    return {
        c() {
            r = _("a"),
            (a = _("div")).textContent = "".concat(e.MORE_LAYERS),
            g(a, "class", "rhitem__name svelte-b6y77d"),
            g(r, "class", "rhitem rhitem__more-layers svelte-b6y77d")
        },
        m(e, s) {
            x(e, r, s),
            b(r, a),
            i || (n = y(r, "click", t[7]), i = !0)
        },
        d(e) {
            e && w(r),
            i = !1,
            n()
        }
    }
}
function pe(e) {
    for (var t, r, a, i = [], n = new Map, s = F(e[0]), l = e => e[12].ident, o = 0; o < s.length; o += 1) {
        var m = de(e, s, o),
            d = l(m);
        n.set(d, i[o] = ve(d, m))
    }
    var v = !e[2] && ce(e);
    return {
        c() {
            t = _("section");
            for (var a = 0; a < i.length; a += 1)
                i[a].c();
            r = u(),
            v && v.c(),
            g(t, "class", "rhpane__overlays-levels svelte-b6y77d"),
            g(t, "data-iconsize", e[1]),
            f(t, "rhpane__overlays-levels--arranging", e[2])
        },
        m(e, n) {
            x(e, t, n);
            for (var s = 0; s < i.length; s += 1)
                i[s] && i[s].m(t, null);
            b(t, r),
            v && v.m(t, null),
            a = !0
        },
        p(e, o) {
            var [m] = o;
            1 & m && (s = F(e[0]), A(), i = G(i, m, l, 1, e, s, n, t, H, ve, r, de), E()),
            e[2] ? v && (A(), U(v, 1, 1, (() => {
                v = null
            })), E()) : v ? (v.p(e, m), 4 & m && L(v, 1)) : ((v = ce(e)).c(), L(v, 1), v.m(t, null)),
            (!a || 2 & m) && g(t, "data-iconsize", e[1]),
            (!a || 4 & m) && f(t, "rhpane__overlays-levels--arranging", e[2])
        },
        i(e) {
            if (!a) {
                for (var t = 0; t < s.length; t += 1)
                    L(i[t]);
                L(v),
                a = !0
            }
        },
        o(e) {
            for (var t = 0; t < i.length; t += 1)
                U(i[t]);
            U(v),
            a = !1
        },
        d(e) {
            e && w(t);
            for (var r = 0; r < i.length; r += 1)
                i[r].d();
            v && v.d()
        }
    }
}
function _e(e, r, a) {
    var l,
        o,
        d,
        v = i("#plugin-rhpane-top"),
        c = [],
        h = 15,
        p = m("overlay");
    z(e, p, (e => a(8, o = e)));
    var _ = m("favOverlaysDesktop");
    z(e, _, (e => a(6, l = e)));
    var u = m("rhMenuArrangeMode");
    z(e, u, (e => a(2, d = e)));
    var g = () => {
            var e = (v.clientHeight - 150) / c.length;
            a(1, h = Math.floor(Math.max(0, e / 5)))
        },
        f = e => {
            var {key: t} = e;
            if ("ArrowUp" === t || "ArrowDown" === t) {
                var r = o,
                    a = c.findIndex((e => {
                        var {ident: t} = e;
                        return t === r
                    }));
                if (-1 === a)
                    return;
                var i = c[a + ("ArrowUp" === t ? -1 : 1)].ident;
                i && ($(p, o = i, o), e.preventDefault())
            }
        };
    j((() => {
        if (ResizeObserver && v) {
            var e = n(g, 50);
            new ResizeObserver(e).observe(v)
        } else
            s("OverlaysLevels", "ResizeObserver not supported or unable to find resizable element");
        document.body.addEventListener("keydown", f, !1)
    }));
    return e.$$.update = () => {
        64 & e.$$.dirty && (a(0, c = l.length ? N(l) : N(P)), g())
    }, [c, h, d, p, _, u, l, () => t.emit("rqstOpen", "menu")]
}
class ue extends d {
    constructor(e)
    {
        super(),
        v(this, e, _e, pe, c, {}, me)
    }
}
function ge(e) {
    p(e, "svelte-wida1", ".rhpane__top-icons.svelte-wida1{pointer-events:auto}.rhpane__top-icons__login.svelte-wida1{color:var(--color-yellow);background-color:var(--color-gray-dark);display:block;border-color:var(--color-gray-dark)}.rhpane__top-icons__login.svelte-wida1::before{content:'p';left:0.9em;margin-top:0}")
}
function fe(t) {
    var r,
        a,
        i;
    return {
        c() {
            (r = _("div")).textContent = "".concat(e.SUB_GO),
            g(r, "id", "desktop-premium-icon"),
            g(r, "class", "premium-button size-s"),
            M(r, "margin-right", !t[0] && t[1] ? "15px" : "6px")
        },
        m(e, n) {
            x(e, r, n),
            a || (i = y(r, "click", t[4]), a = !0)
        },
        p(e, t) {
            3 & t && M(r, "margin-right", !e[0] && e[1] ? "15px" : "6px")
        },
        d(e) {
            e && w(r),
            a = !1,
            i()
        }
    }
}
function xe(t) {
    var r,
        a,
        i;
    return {
        c() {
            (r = _("div")).textContent = "".concat(e.JUST_LOGIN),
            g(r, "class", "premium-button rhpane__top-icons__login size-s svelte-wida1")
        },
        m(e, n) {
            x(e, r, n),
            a || (i = y(r, "click", t[5]), a = !0)
        },
        i: k,
        o: k,
        d(e) {
            e && w(r),
            a = !1,
            i()
        }
    }
}
function be(e) {
    var t,
        r;
    return t = new Y({
        props: {
            size: "m",
            applyBoxShadow: !0
        }
    }), {
        c() {
            R(t.$$.fragment)
        },
        m(e, a) {
            I(t, e, a),
            r = !0
        },
        i(e) {
            r || (L(t.$$.fragment, e), r = !0)
        },
        o(e) {
            U(t.$$.fragment, e),
            r = !1
        },
        d(e) {
            B(t, e)
        }
    }
}
function ye(e) {
    var t,
        r,
        a,
        i,
        n,
        s = !e[0] && fe(e),
        l = [be, xe],
        o = [];
    function m(e, t) {
        return e[1] ? 0 : 1
    }
    return a = m(e), i = o[a] = l[a](e), {
        c() {
            t = _("div"),
            s && s.c(),
            r = u(),
            i.c(),
            g(t, "class", "rhpane__top-icons flex-row svelte-wida1"),
            f(t, "mb-5", e[0])
        },
        m(e, i) {
            x(e, t, i),
            s && s.m(t, null),
            b(t, r),
            o[a].m(t, null),
            n = !0
        },
        p(e, d) {
            var [v] = d;
            e[0] ? s && (s.d(1), s = null) : s ? s.p(e, v) : ((s = fe(e)).c(), s.m(t, r));
            var c = a;
            (a = m(e)) !== c && (A(), U(o[c], 1, 1, (() => {
                o[c] = null
            })), E(), (i = o[a]) || (i = o[a] = l[a](e)).c(), L(i, 1), i.m(t, null)),
            (!n || 1 & v) && f(t, "mb-5", e[0])
        },
        i(e) {
            n || (L(i), n = !0)
        },
        o(e) {
            U(i),
            n = !1
        },
        d(e) {
            e && w(t),
            s && s.d(),
            o[a].d()
        }
    }
}
function ke(e, r, a) {
    var i,
        n,
        s = m("user");
    z(e, s, (e => a(1, n = e)));
    var l = m("subscription");
    z(e, l, (e => a(0, i = e)));
    return [i, n, s, l, () => t.emit("rqstOpen", "subscription"), () => t.emit("rqstOpen", "login")]
}
class we extends d {
    constructor(e)
    {
        super(),
        v(this, e, ke, ye, c, {}, ge)
    }
}
function ze(e) {
    p(e, "svelte-d89jm1", ".rhpane-top__menu-wrapper.svelte-d89jm1.svelte-d89jm1.svelte-d89jm1{position:relative}.rhitem--main-menu.svelte-d89jm1.svelte-d89jm1.svelte-d89jm1{margin-bottom:10px;font-size:14px;margin-top:12.5px;margin-right:0}.rhitem--main-menu.svelte-d89jm1 .rhitem__icon.svelte-d89jm1.svelte-d89jm1{background-color:var(--color-red)}.rhitem--main-menu.svelte-d89jm1 .rhitem__name.svelte-d89jm1.svelte-d89jm1{font-size:1.4em}.rhitem--main-menu.svelte-d89jm1 .rhitem__hamburger.svelte-d89jm1.svelte-d89jm1{position:absolute;top:10px;left:7px;width:27px;height:27px}.rhitem--main-menu.svelte-d89jm1 .rhitem__hamburger.svelte-d89jm1>span.svelte-d89jm1{background-color:var(--color-white);font-size:7px;display:block;position:absolute;height:0.55em;width:100%;left:0;border-radius:0.55em;transition:all 0.3s ease-in-out;transition-delay:0.5s}.rhitem--main-menu.svelte-d89jm1 .rhitem__hamburger.svelte-d89jm1>span.svelte-d89jm1:nth-child(1){top:0}.rhitem--main-menu.svelte-d89jm1 .rhitem__hamburger.svelte-d89jm1>span.svelte-d89jm1:nth-child(2),.rhitem--main-menu.svelte-d89jm1 .rhitem__hamburger.svelte-d89jm1>span.svelte-d89jm1:nth-child(3){top:1.2857em}.rhitem--main-menu.svelte-d89jm1 .rhitem__hamburger.svelte-d89jm1>span.svelte-d89jm1:nth-child(4){top:2.5714em}.rhitem--main-menu--closed.svelte-d89jm1 .rhitem__name.svelte-d89jm1.svelte-d89jm1{opacity:0;pointer-events:none}.rhitem--main-menu--closed.svelte-d89jm1 .rhitem__hamburger.svelte-d89jm1>span.svelte-d89jm1:nth-child(1){top:1.2857em;width:0;left:50%}.rhitem--main-menu--closed.svelte-d89jm1 .rhitem__hamburger.svelte-d89jm1>span.svelte-d89jm1:nth-child(2){transform:rotate(45deg)}.rhitem--main-menu--closed.svelte-d89jm1 .rhitem__hamburger.svelte-d89jm1>span.svelte-d89jm1:nth-child(3){transform:rotate(-45deg)}.rhitem--main-menu--closed.svelte-d89jm1 .rhitem__hamburger.svelte-d89jm1>span.svelte-d89jm1:nth-child(4){top:1.2857em;width:0;left:50%}")
}
function je(t) {
    var r,
        a,
        i,
        n,
        s,
        l,
        o,
        m,
        d,
        v,
        c,
        h;
    return r = new we({}), d = new ue({}), {
        c() {
            R(r.$$.fragment),
            a = u(),
            i = _("section"),
            n = _("a"),
            (s = _("div")).textContent = "".concat(e.MENU),
            l = u(),
            (o = _("div")).innerHTML = '<div class="rhitem__hamburger svelte-d89jm1"><span class="svelte-d89jm1"></span> <span class="svelte-d89jm1"></span> <span class="svelte-d89jm1"></span> <span class="svelte-d89jm1"></span></div>',
            m = u(),
            R(d.$$.fragment),
            g(s, "class", "rhitem__name svelte-d89jm1"),
            g(o, "class", "rhitem__icon svelte-d89jm1"),
            g(n, "class", "rhitem rhitem--main-menu svelte-d89jm1"),
            f(n, "rhitem--main-menu--closed", t[0]),
            g(i, "class", "rhpane-top__menu-wrapper svelte-d89jm1")
        },
        m(e, p) {
            I(r, e, p),
            x(e, a, p),
            x(e, i, p),
            b(i, n),
            b(n, s),
            b(n, l),
            b(n, o),
            b(i, m),
            I(d, i, null),
            v = !0,
            c || (h = y(n, "click", t[1]), c = !0)
        },
        p(e, t) {
            var [r] = t;
            (!v || 1 & r) && f(n, "rhitem--main-menu--closed", e[0])
        },
        i(e) {
            v || (L(r.$$.fragment, e), L(d.$$.fragment, e), v = !0)
        },
        o(e) {
            U(r.$$.fragment, e),
            U(d.$$.fragment, e),
            v = !1
        },
        d(e) {
            e && (w(a), w(i)),
            B(r, e),
            B(d),
            c = !1,
            h()
        }
    }
}
function $e(e, a, i) {
    var n = !1,
        s = () => Object.keys(r).map((e => r[e])).filter((e => e && "rhpane" === e.pane)).some((e => e && e.isOpen)),
        l = () => i(0, n = s());
    return j((() => {
        t.on("pluginOpened", l),
        t.on("pluginClosed", l)
    })), [n, () => {
        s() ? Object.keys(r).map((e => r[e])).filter((e => e && "rhpane" === e.pane && e.isOpen)).forEach((e => t.emit("rqstClose", e.ident))) : t.emit("rqstOpen", "menu")
    }]
}
class Oe extends d {
    constructor(e)
    {
        super(),
        v(this, e, $e, je, c, {}, ze)
    }
}
const Se = "#plugin-rhpane-top {  display: flex;  flex-direction: column;  align-items: flex-end;  position: relative;  pointer-events: none;  margin-top: 10px;  margin-bottom: 20px;  margin-right: 10px;  height: calc(100% - 30px);}.rhitem {  display: flex;  align-items: center;  justify-content: flex-end;  width: -moz-fit-content;  width: fit-content;  margin: 0.3em 0 0.3em 0.4em;  pointer-events: auto;  position: relative;}.rhitem__name {  background-color: var(--color-gray-dark);  color: var(--color-yellow);  text-shadow: 0px 0px 4px black;  overflow: hidden;  text-overflow: ellipsis;  white-space: nowrap;  background-color: rgba(0, 0, 0, 0.18);  max-width: 10em;  padding: 0.2em 1.4em 0.2em 0.7em;  font-size: 1.3em;  border-top-left-radius: 1.4em;  border-bottom-left-radius: 1.4em;  margin-right: -1em;  transition: background-color 0.25s, opacity 0.5s;}.rhitem__icon {  cursor: pointer;  -webkit-tap-highlight-color: initial;  width: 3em;  height: 3em;  border-radius: 3em;  box-shadow: 0 0 4px 0 black;  background-color: var(--color-gray-dark);  cursor: unset;  background-size: 65px;  background-position: -20px -20px;  z-index: 1;  text-align: center;  position: relative;}.rhitem:hover .rhitem__name {  background-color: var(--color-gray-dark);}.rhitem.selected .rhitem__name {  background-color: var(--color-gray-dark);}.rhitem.selected .rhitem__icon {  outline: solid 1px var(--color-orange-light);}";
export { Se as __css, Oe as default };

