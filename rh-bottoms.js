const {t} = W.trans,
    e = W.overlays;
import { w as o } from "./_shared/svelte-store-adapter.js";
import { C as r } from "./_shared/checkbox.js";
import { S as n, i as s, s as i, a as l, e as a, A as c, b as p, c as m, g as d, B as u, h, v as _, x as f, k as v, C as b, l as g, t as w, n as $, E as x, F as k, w as y, y as O, D as R, j as C, p as T, U as z, r as S, o as N, q as E } from "./_shared/component.js";
const M = W.broadcast,
    {poisCheckboxes: P} = W.pois,
    {pois: D, maxFavPoisDesktop: A} = W.rootScope;
import { e as j } from "./_shared/each.js";
const U = W.plugins,
    I = W.geolocation,
    {tsMinute: q} = W.utils,
    {centerMap: F, markers: B, map: G} = W.map;
import { a as K, g as Z, b as H } from "./_shared/fullscreen.js";
const V = W.products,
    {logAppsFlyerProductChange: J} = W.appsFlyer;
import { g as Q } from "./_shared/product-switch-utils.js";
const X = W.store;
function Y(t) {
    l(t, "svelte-9dp666", ".rhbottom__checkboxes.svelte-9dp666{width:100%;position:relative;gap:15px}.rhbottom__checkboxes > .checkbox{text-shadow:0px 0px 4px black;color:var(--color-yellow);font-size:11px;text-transform:lowercase;white-space:nowrap}")
}
function tt(e) {
    var o,
        r = t.PRESS + "";
    return {
        c() {
            o = w(r)
        },
        m(t, e) {
            d(t, o, e)
        },
        p: $,
        d(t) {
            t && v(o)
        }
    }
}
function et(e) {
    var o,
        r = t.PART_ANIMATION + "";
    return {
        c() {
            o = w(r)
        },
        m(t, e) {
            d(t, o, e)
        },
        p: $,
        d(t) {
            t && v(o)
        }
    }
}
function ot(t) {
    var o,
        n,
        s,
        i,
        l;
    return n = new r({
        props: {
            bindStore: "isolinesOn",
            $$slots: {
                default: [tt]
            },
            $$scope: {
                ctx: t
            }
        }
    }), i = new r({
        props: {
            bindStore: "particlesAnim",
            onOffValues: ["on", "off"],
            disabled: e[t[0]].hideParticles,
            $$slots: {
                default: [et]
            },
            $$scope: {
                ctx: t
            }
        }
    }), {
        c() {
            o = a("nav"),
            c(n.$$.fragment),
            s = p(),
            c(i.$$.fragment),
            m(o, "class", "rhbottom__checkboxes mb-10 flex-row ml-5 svelte-9dp666")
        },
        m(t, e) {
            d(t, o, e),
            u(n, o, null),
            h(o, s),
            u(i, o, null),
            l = !0
        },
        p(t, o) {
            var [r] = o,
                s = {};
            4 & r && (s.$$scope = {
                dirty: r,
                ctx: t
            }),
            n.$set(s);
            var l = {};
            1 & r && (l.disabled = e[t[0]].hideParticles),
            4 & r && (l.$$scope = {
                dirty: r,
                ctx: t
            }),
            i.$set(l)
        },
        i(t) {
            l || (_(n.$$.fragment, t), _(i.$$.fragment, t), l = !0)
        },
        o(t) {
            f(n.$$.fragment, t),
            f(i.$$.fragment, t),
            l = !1
        },
        d(t) {
            t && v(o),
            b(n),
            b(i)
        }
    }
}
function rt(t, e, r) {
    var n,
        s = o("overlay");
    return g(t, s, (t => r(0, n = t))), [n, s]
}
class nt extends n {
    constructor(t)
    {
        super(),
        s(this, t, rt, ot, i, {}, Y)
    }
}
function st(t) {
    l(t, "svelte-1fcfmpu", ".rhbottom__pois-controls.svelte-1fcfmpu.svelte-1fcfmpu{position:relative;display:flex;width:100%;flex-direction:column;color:var(--color-yellow)}.rhbottom__pois-controls__switch.svelte-1fcfmpu.svelte-1fcfmpu{padding:0;background-color:transparent;-webkit-backdrop-filter:none;backdrop-filter:none;position:relative;width:calc(100% - 60px)}.rhbottom__pois-controls__switch.svelte-1fcfmpu>.switch__item.svelte-1fcfmpu{padding-left:0.9em;padding-right:0.9em}.rhbottom__pois-controls__extended-checkbox.svelte-1fcfmpu.svelte-1fcfmpu{font-size:11px;display:flex;flex-wrap:wrap;align-self:flex-start;margin:0;padding:0.5em;padding-top:0.25em;padding-left:1em}.rhbottom__pois-controls__extended-checkbox > .checkbox{margin-right:10px}.rhbottom__pois-controls__more-icon.svelte-1fcfmpu.svelte-1fcfmpu{font-size:30px;position:absolute;right:7px;top:-4px;max-height:21px}.onmenu .rhbottom__pois-controls__more-icon{opacity:0.6;pointer-events:none}.rhbottom__pois-controls--extend.svelte-1fcfmpu .rhbottom__pois-controls__switch.svelte-1fcfmpu{padding:0.5em;padding-bottom:0.25em}.rhbottom__pois-controls--extend.svelte-1fcfmpu .rhbottom__pois-controls__more-icon.svelte-1fcfmpu{top:2px}")
}
function it(t, e, o) {
    var r = t.slice();
    return r[11] = e[o].bindStore, r[12] = e[o].checkboxTranslation, r[13] = e[o].checkboxText, r
}
function lt(t, e, o) {
    var r = t.slice();
    return r[16] = e[o], r
}
function at(t) {
    var e,
        o,
        r,
        n,
        s,
        i = D[t[16]][1] + "";
    function l() {
        return t[9](t[16])
    }
    return {
        c() {
            e = a("a"),
            o = w(i),
            m(e, "data-tooltip", r = t[7](t[16])),
            m(e, "class", "switch__item iconfont tooltip--up svelte-1fcfmpu"),
            x(e, "selected", t[16] === t[0])
        },
        m(t, r) {
            d(t, e, r),
            h(e, o),
            n || (s = k(e, "click", l), n = !0)
        },
        p(n, s) {
            t = n,
            2 & s && i !== (i = D[t[16]][1] + "") && C(o, i),
            2 & s && r !== (r = t[7](t[16])) && m(e, "data-tooltip", r),
            3 & s && x(e, "selected", t[16] === t[0])
        },
        d(t) {
            t && v(e),
            n = !1,
            s()
        }
    }
}
function ct(t) {
    for (var e, o, r = j(t[2]), n = [], s = 0; s < r.length; s += 1)
        n[s] = mt(it(t, r, s));
    var i = t => f(n[t], 1, 1, (() => {
        n[t] = null
    }));
    return {
        c() {
            e = a("div");
            for (var t = 0; t < n.length; t += 1)
                n[t].c();
            m(e, "class", "rhbottom__pois-controls__extended-checkbox svelte-1fcfmpu")
        },
        m(t, r) {
            d(t, e, r);
            for (var s = 0; s < n.length; s += 1)
                n[s] && n[s].m(e, null);
            o = !0
        },
        p(t, o) {
            if (4 & o) {
                var s;
                for (r = j(t[2]), s = 0; s < r.length; s += 1) {
                    var l = it(t, r, s);
                    n[s] ? (n[s].p(l, o), _(n[s], 1)) : (n[s] = mt(l), n[s].c(), _(n[s], 1), n[s].m(e, null))
                }
                for (y(), s = r.length; s < n.length; s += 1)
                    i(s);
                O()
            }
        },
        i(t) {
            if (!o) {
                for (var e = 0; e < r.length; e += 1)
                    _(n[e]);
                o = !0
            }
        },
        o(t) {
            n = n.filter(Boolean);
            for (var e = 0; e < n.length; e += 1)
                f(n[e]);
            o = !1
        },
        d(t) {
            t && v(e),
            R(n, t)
        }
    }
}
function pt(e) {
    var o,
        r = (e[12] ? t[e[12]] : e[13]) + "";
    return {
        c() {
            o = w(r)
        },
        m(t, e) {
            d(t, o, e)
        },
        p(e, n) {
            4 & n && r !== (r = (e[12] ? t[e[12]] : e[13]) + "") && C(o, r)
        },
        d(t) {
            t && v(o)
        }
    }
}
function mt(t) {
    var e,
        o;
    return e = new r({
        props: {
            bindStore: t[11],
            $$slots: {
                default: [pt]
            },
            $$scope: {
                ctx: t
            }
        }
    }), {
        c() {
            c(e.$$.fragment)
        },
        m(t, r) {
            u(e, t, r),
            o = !0
        },
        p(t, o) {
            var r = {};
            4 & o && (r.bindStore = t[11]),
            524292 & o && (r.$$scope = {
                dirty: o,
                ctx: t
            }),
            e.$set(r)
        },
        i(t) {
            o || (_(e.$$.fragment, t), o = !0)
        },
        o(t) {
            f(e.$$.fragment, t),
            o = !1
        },
        d(t) {
            b(e, t)
        }
    }
}
function dt(e) {
    for (var o, r, n, s, i, l, c, u, b = j(e[1]), g = [], w = 0; w < b.length; w += 1)
        g[w] = at(lt(e, b, w));
    var $ = e[2].length && ct(e);
    return {
        c() {
            o = a("nav"),
            r = a("div");
            for (var l = 0; l < g.length; l += 1)
                g[l].c();
            n = p(),
            $ && $.c(),
            s = p(),
            (i = a("span")).textContent = "",
            m(r, "class", "rhbottom__pois-controls__switch switch switch--stretch svelte-1fcfmpu"),
            m(i, "class", "rhbottom__pois-controls__more-icon clickable iconfont tooltip--up svelte-1fcfmpu"),
            m(i, "data-tooltip", t.MORE),
            m(o, "class", "rhbottom__pois-controls switch switch--variant-uiswitch size-m mb-10 svelte-1fcfmpu"),
            x(o, "disabled", "globe" === e[3]),
            x(o, "rhbottom__pois-controls--extend", e[2].length)
        },
        m(t, a) {
            d(t, o, a),
            h(o, r);
            for (var p = 0; p < g.length; p += 1)
                g[p] && g[p].m(r, null);
            h(o, n),
            $ && $.m(o, null),
            h(o, s),
            h(o, i),
            l = !0,
            c || (u = k(i, "click", e[10]), c = !0)
        },
        p(t, e) {
            var [n] = e;
            if (131 & n) {
                var i;
                for (b = j(t[1]), i = 0; i < b.length; i += 1) {
                    var a = lt(t, b, i);
                    g[i] ? g[i].p(a, n) : (g[i] = at(a), g[i].c(), g[i].m(r, null))
                }
                for (; i < g.length; i += 1)
                    g[i].d(1);
                g.length = b.length
            }
            t[2].length ? $ ? ($.p(t, n), 4 & n && _($, 1)) : (($ = ct(t)).c(), _($, 1), $.m(o, s)) : $ && (y(), f($, 1, 1, (() => {
                $ = null
            })), O()),
            (!l || 8 & n) && x(o, "disabled", "globe" === t[3]),
            (!l || 4 & n) && x(o, "rhbottom__pois-controls--extend", t[2].length)
        },
        i(t) {
            l || (_($), l = !0)
        },
        o(t) {
            f($),
            l = !1
        },
        d(t) {
            t && v(o),
            R(g, t),
            $ && $.d(),
            c = !1,
            u()
        }
    }
}
function ut(e, r, n) {
    var s,
        i,
        l,
        a = o("favPois");
    g(e, a, (t => n(8, i = t)));
    var c = o("pois");
    g(e, c, (t => n(0, s = t)));
    var p = o("mapLibrary");
    g(e, p, (t => n(3, l = t)));
    var m = [],
        d = [];
    return e.$$.update = () => {
        256 & e.$$.dirty && n(1, m = Object.keys(D).filter((t => i.includes(t))).slice(0, A + 1)),
        1 & e.$$.dirty && n(2, d = P[s])
    }, [s, m, d, l, a, c, p, e => t[D[e][0]], i, t => T(c, s = t, s), () => M.emit("rqstOpen", "menu", {
        scrollTo: "pois"
    })]
}
class ht extends n {
    constructor(t)
    {
        super(),
        s(this, t, ut, dt, i, {}, st)
    }
}
function _t(t) {
    l(t, "svelte-1kspnlr", ".rhbottom__map-tools.svelte-1kspnlr{width:100%;position:relative;height:21px}.oninfo .rhbottom__map-tools__about{opacity:0.6;pointer-events:none}.onhurricanes .rhbottom__map-tools__hurr-tracker{opacity:0.6;pointer-events:none}.zoom3 .rhbottom__map-tools__zoom-minus{opacity:0.6;pointer-events:none}.zoom16 .rhbottom__map-tools__zoom-plus{opacity:0.6;pointer-events:none}")
}
function ft(e) {
    var o,
        r,
        n,
        s,
        i,
        l,
        c,
        u,
        _,
        f,
        b,
        g,
        x,
        y,
        O,
        R,
        T,
        S;
    return {
        c() {
            o = a("nav"),
            (r = a("a")).textContent = "+",
            n = p(),
            (s = a("a")).textContent = "-",
            i = p(),
            l = a("a"),
            c = w(e[1]),
            u = p(),
            (_ = a("a")).textContent = "j",
            f = p(),
            (b = a("a")).textContent = "L",
            g = p(),
            (x = a("a")).textContent = "",
            y = p(),
            O = a("a"),
            R = w(e[2]),
            m(r, "class", "rhbottom__map-tools__zoom-plus switch__item iconfont tooltip--up"),
            m(r, "data-tooltip", t.ZOOM_IN),
            m(s, "class", "rhbottom__map-tools__zoom-minus switch__item iconfont tooltip--up"),
            m(s, "data-tooltip", t.ZOOM_OUT),
            m(l, "class", "rhbottom__map-tools__globe switch__item tooltip--up"),
            m(l, "data-tooltip", t.MODE_2D3D),
            m(_, "class", "rhbottom__map-tools__location switch__item iconfont tooltip--up"),
            m(_, "data-tooltip", t.MENU_LOCATION),
            m(b, "class", "rhbottom__map-tools__about switch__item iconfont tooltip--up"),
            m(b, "data-tooltip", t.ABOUT_DATA),
            m(x, "class", "rhbottom__map-tools__hurr-tracker switch__item iconfont tooltip--up"),
            m(x, "data-tooltip", t.HURR_TRACKER),
            m(O, "class", "rhbottom__map-tools__fullscreen switch__item iconfont tooltip--up"),
            m(O, "data-tooltip", t.MENU_FULLSCREEN),
            m(o, "class", "rhbottom__map-tools switch switch--variant-uiswitch switch--stretch mb-10 svelte-1kspnlr")
        },
        m(t, a) {
            d(t, o, a),
            h(o, r),
            h(o, n),
            h(o, s),
            h(o, i),
            h(o, l),
            h(l, c),
            h(o, u),
            h(o, _),
            h(o, f),
            h(o, b),
            h(o, g),
            h(o, x),
            h(o, y),
            h(o, O),
            h(O, R),
            T || (S = [k(r, "click", e[4]), k(s, "click", e[5]), k(l, "click", e[3]), k(_, "click", e[0]), k(b, "click", e[6]), k(x, "click", e[7]), k(O, "click", e[8])], T = !0)
        },
        p(t, e) {
            var [o] = e;
            2 & o && C(c, t[1]),
            4 & o && C(R, t[2])
        },
        i: $,
        o: $,
        d(t) {
            t && v(o),
            T = !1,
            z(S)
        }
    }
}
function vt(t, e, o) {
    var r,
        n = "3D",
        s = "";
    K((() => {
        o(2, s = Z() ? "" : "")
    }));
    return [() => {
        I.getGPSlocation({
            getMeFallbackGps: !0
        }).then((t => {
            t.zoom = 9,
            F(t, !1),
            setTimeout((() => {
                M.emit("rqstOpen", "picker", t)
            }), 1e3),
            r && G.removeLayer(r),
            r = L.marker([t.lat, t.lon], {
                icon: B.myLocationIcon
            }).addTo(G),
            setTimeout((() => {
                r && G.removeLayer(r)
            }), q)
        }))
    }, n, s, () => {
        var t;
        null !== (t = U.globe) && void 0 !== t && t.isOpen ? (M.emit("globeClose"), o(1, n = "3D")) : (M.emit("rqstOpen", "globe"), o(1, n = "2D"))
    }, () => M.emit("zoomIn"), () => M.emit("zoomOut"), () => M.emit("rqstOpen", "info"), () => M.emit("rqstOpen", "hurricanes"), () => H()]
}
class bt extends n {
    constructor(t)
    {
        super(),
        s(this, t, vt, ft, i, {
            determineLocation: 0
        }, _t)
    }
    get determineLocation()
    {
        return this.$$.ctx[0]
    }
}
function gt(t) {
    l(t, "svelte-16pbkp6", ".rhbottom__product-switch.svelte-16pbkp6.svelte-16pbkp6{width:100%;position:relative}.rhbottom__product-switch.svelte-16pbkp6>.switch__item.svelte-16pbkp6{white-space:nowrap;padding:0.3em 0.7em;display:inline-block;width:100%}.rhbottom__product-switch.svelte-16pbkp6>.switch__item small.svelte-16pbkp6{margin-left:2px;font-size:0.6em;opacity:0.7}.rhbottom__product-switch.unwrapped.svelte-16pbkp6.svelte-16pbkp6{display:block;white-space:unset;padding:0.5em;border-radius:12px}.rhbottom__product-switch.unwrapped.svelte-16pbkp6>.switch__item.svelte-16pbkp6{display:block;float:left;margin-right:4px;margin-bottom:2px;padding:0.3em 1em;width:-moz-fit-content;width:fit-content}.rhbottom__product-switch.unwrapped.svelte-16pbkp6>.switch__item small.svelte-16pbkp6{font-size:0.8em;opacity:0.6}")
}
function wt(t, e, o) {
    var r = t.slice();
    r[15] = e[o];
    var n = V[r[15]];
    r[16] = n;
    var s = r[2].includes(r[15]);
    return r[17] = s, r
}
function $t(e) {
    for (var o, r, n = j(e[4]), s = [], i = 0; i < n.length; i += 1)
        s[i] = Ct(wt(e, n, i));
    var l = e[0] && e[3] > 3 && Tt(e);
    return {
        c() {
            o = a("nav");
            for (var n = 0; n < s.length; n += 1)
                s[n].c();
            r = p(),
            l && l.c(),
            m(o, "class", "rhbottom__product-switch fg-yellow switch switch--variant-uiswitch switch--stretch size-s tooltip--left mb-10 svelte-16pbkp6"),
            m(o, "data-tooltip", t.MODEL),
            x(o, "unwrapped", e[4].length > 3 && e[2].length > 3)
        },
        m(t, e) {
            d(t, o, e);
            for (var n = 0; n < s.length; n += 1)
                s[n] && s[n].m(o, null);
            h(o, r),
            l && l.m(o, null)
        },
        p(t, e) {
            if (535 & e) {
                var i;
                for (n = j(t[4]), i = 0; i < n.length; i += 1) {
                    var a = wt(t, n, i);
                    s[i] ? s[i].p(a, e) : (s[i] = Ct(a), s[i].c(), s[i].m(o, r))
                }
                for (; i < s.length; i += 1)
                    s[i].d(1);
                s.length = n.length
            }
            t[0] && t[3] > 3 ? l ? l.p(t, e) : ((l = Tt(t)).c(), l.m(o, null)) : l && (l.d(1), l = null),
            20 & e && x(o, "unwrapped", t[4].length > 3 && t[2].length > 3)
        },
        d(t) {
            t && v(o),
            R(s, t),
            l && l.d()
        }
    }
}
function xt(t) {
    var e,
        o,
        r,
        n,
        s = t[16].modelName + "",
        i = t[16].modelResolution && yt(t);
    function l() {
        return t[12](t[15])
    }
    return {
        c() {
            e = a("a"),
            o = w(s),
            i && i.c(),
            m(e, "class", "switch__item svelte-16pbkp6"),
            x(e, "disabled", !t[2].includes(t[15])),
            x(e, "selected", t[1] === t[15])
        },
        m(t, s) {
            d(t, e, s),
            h(e, o),
            i && i.m(e, null),
            r || (n = k(e, "click", l), r = !0)
        },
        p(r, n) {
            t = r,
            16 & n && s !== (s = t[16].modelName + "") && C(o, s),
            t[16].modelResolution ? i ? i.p(t, n) : ((i = yt(t)).c(), i.m(e, null)) : i && (i.d(1), i = null),
            20 & n && x(e, "disabled", !t[2].includes(t[15])),
            18 & n && x(e, "selected", t[1] === t[15])
        },
        d(t) {
            t && v(e),
            i && i.d(),
            r = !1,
            n()
        }
    }
}
function kt(t) {
    var e,
        o = t[17] && Ot(t);
    return {
        c() {
            o && o.c(),
            e = S()
        },
        m(t, r) {
            o && o.m(t, r),
            d(t, e, r)
        },
        p(t, r) {
            t[17] ? o ? o.p(t, r) : ((o = Ot(t)).c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null)
        },
        d(t) {
            t && v(e),
            o && o.d(t)
        }
    }
}
function yt(t) {
    var e,
        o,
        r,
        n = t[16].modelResolution + "";
    return {
        c() {
            e = a("small"),
            o = w(n),
            r = w("km"),
            m(e, "class", "svelte-16pbkp6")
        },
        m(t, n) {
            d(t, e, n),
            h(e, o),
            h(e, r)
        },
        p(t, e) {
            16 & e && n !== (n = t[16].modelResolution + "") && C(o, n)
        },
        d(t) {
            t && v(e)
        }
    }
}
function Ot(t) {
    var e,
        o,
        r,
        n,
        s = t[16].modelName + "",
        i = t[16].modelResolution && Rt(t);
    function l() {
        return t[11](t[15])
    }
    return {
        c() {
            e = a("a"),
            o = w(s),
            i && i.c(),
            m(e, "class", "switch__item svelte-16pbkp6"),
            x(e, "selected", t[1] === t[15])
        },
        m(t, s) {
            d(t, e, s),
            h(e, o),
            i && i.m(e, null),
            r || (n = k(e, "click", l), r = !0)
        },
        p(r, n) {
            t = r,
            16 & n && s !== (s = t[16].modelName + "") && C(o, s),
            t[16].modelResolution ? i ? i.p(t, n) : ((i = Rt(t)).c(), i.m(e, null)) : i && (i.d(1), i = null),
            18 & n && x(e, "selected", t[1] === t[15])
        },
        d(t) {
            t && v(e),
            i && i.d(),
            r = !1,
            n()
        }
    }
}
function Rt(t) {
    var e,
        o,
        r,
        n = t[16].modelResolution + "";
    return {
        c() {
            e = a("small"),
            o = w(n),
            r = w("km"),
            m(e, "class", "svelte-16pbkp6")
        },
        m(t, n) {
            d(t, e, n),
            h(e, o),
            h(e, r)
        },
        p(t, e) {
            16 & e && n !== (n = t[16].modelResolution + "") && C(o, n)
        },
        d(t) {
            t && v(e)
        }
    }
}
function Ct(t) {
    var e;
    function o(t, e) {
        return t[0] ? kt : xt
    }
    var r = o(t),
        n = r(t);
    return {
        c() {
            n.c(),
            e = S()
        },
        m(t, o) {
            n.m(t, o),
            d(t, e, o)
        },
        p(t, s) {
            r === (r = o(t)) && n ? n.p(t, s) : (n.d(1), (n = r(t)) && (n.c(), n.m(e.parentNode, e)))
        },
        d(t) {
            t && v(e),
            n.d(t)
        }
    }
}
function Tt(e) {
    var o,
        r,
        n,
        s,
        i,
        l = t.MORE_PRODUCTS.replace("{{count}}", (e[3] - 3).toString()) + "";
    return {
        c() {
            o = a("a"),
            r = w(l),
            n = w("..."),
            m(o, "class", "switch__item svelte-16pbkp6")
        },
        m(t, l) {
            d(t, o, l),
            h(o, r),
            h(o, n),
            s || (i = k(o, "click", e[8]), s = !0)
        },
        p(e, o) {
            8 & o && l !== (l = t.MORE_PRODUCTS.replace("{{count}}", (e[3] - 3).toString()) + "") && C(r, l)
        },
        d(t) {
            t && v(o),
            s = !1,
            i()
        }
    }
}
function zt(t) {
    var e,
        o = !V[t[1]].hideProductSwitch && t[3] > 1 && $t(t);
    return {
        c() {
            o && o.c(),
            e = S()
        },
        m(t, r) {
            o && o.m(t, r),
            d(t, e, r)
        },
        p(t, r) {
            var [n] = r;
            !V[t[1]].hideProductSwitch && t[3] > 1 ? o ? o.p(t, n) : ((o = $t(t)).c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null)
        },
        i: $,
        o: $,
        d(t) {
            t && v(e),
            o && o.d(t)
        }
    }
}
function St(t, e, r) {
    var n,
        s,
        i,
        l = o("availProducts");
    g(t, l, (t => r(2, i = t)));
    var a = o("product");
    g(t, a, (t => r(1, s = t)));
    var c = o("visibleProducts");
    g(t, c, (t => r(10, n = t)));
    var p = !0,
        m = 0,
        d = null,
        u = [],
        h = () => {
            d && clearTimeout(d),
            d = setTimeout((() => {
                r(0, p = !0),
                d = null
            }), 5e3)
        },
        _ = t => {
            T(a, s = t, s),
            J(),
            h()
        };
    return t.$$.update = () => {
        1031 & t.$$.dirty && r(3, ({length: m, products: u} = p ? Q(s, n, i, p) : Q(s, n)), m, (r(4, u), r(0, p), r(1, s), r(10, n), r(2, i)))
    }, [p, s, i, m, u, l, a, c, () => {
        r(0, p = !1),
        h()
    }, _, n, t => _(t), t => _(t)]
}
class Lt extends n {
    constructor(t)
    {
        super(),
        s(this, t, St, zt, i, {}, gt)
    }
}
function Nt(t) {
    l(t, "svelte-18darr1", ".rhbottom__legend.svelte-18darr1{transition:0.2s opacity;margin-bottom:5px;border-radius:20px}.rhbottom__legend.one-metric{pointer-events:none}.rhbottom__legend.animate.svelte-18darr1{opacity:0}.rhbottom__legend.svelte-18darr1 span:first-child{border-top-left-radius:20px;border-bottom-left-radius:20px}.rhbottom__legend.svelte-18darr1 span:last-child{border-top-right-radius:20px;border-bottom-right-radius:20px}")
}
function Et(e) {
    var o,
        r,
        n;
    return {
        c() {
            o = a("div"),
            m(o, "class", "rhbottom__legend clickable metric-legend noselect tooltip--left svelte-18darr1"),
            m(o, "data-tooltip", t.CLICK_ON_LEGEND),
            x(o, "animate", e[1])
        },
        m(t, s) {
            d(t, o, s),
            e[3](o),
            r || (n = k(o, "click", e[2]), r = !0)
        },
        p(t, e) {
            var [r] = e;
            2 & r && x(o, "animate", t[1])
        },
        i: $,
        o: $,
        d(t) {
            t && v(o),
            e[3](null),
            r = !1,
            n()
        }
    }
}
function Mt(t, o, r) {
    var n,
        s = !1,
        i = () => {
            var t = X.get("overlay"),
                o = e[t];
            r(1, s = !0),
            setTimeout((() => {
                o.paintLegend.call(o, n),
                r(1, s = !1)
            }), 200)
        };
    return N((() => {
        X.on("overlay", i),
        X.on("usedLang", i),
        M.on("metricChanged", i),
        i()
    })), [n, s, () => {
        var t = e[X.get("overlay")];
        t.cycleMetric.call(t.m)
    }, function(t) {
        E[t ? "unshift" : "push"]((() => {
            r(0, n = t)
        }))
    }]
}
class Pt extends n {
    constructor(t)
    {
        super(),
        s(this, t, Mt, Et, i, {}, Nt)
    }
}
function Dt(t) {
    var e,
        o,
        r,
        n,
        s,
        i,
        l,
        a,
        m,
        h;
    return e = new nt({}), r = new bt({}), s = new ht({}), l = new Lt({}), m = new Pt({}), {
        c() {
            c(e.$$.fragment),
            o = p(),
            c(r.$$.fragment),
            n = p(),
            c(s.$$.fragment),
            i = p(),
            c(l.$$.fragment),
            a = p(),
            c(m.$$.fragment)
        },
        m(t, c) {
            u(e, t, c),
            d(t, o, c),
            u(r, t, c),
            d(t, n, c),
            u(s, t, c),
            d(t, i, c),
            u(l, t, c),
            d(t, a, c),
            u(m, t, c),
            h = !0
        },
        p: $,
        i(t) {
            h || (_(e.$$.fragment, t), _(r.$$.fragment, t), _(s.$$.fragment, t), _(l.$$.fragment, t), _(m.$$.fragment, t), h = !0)
        },
        o(t) {
            f(e.$$.fragment, t),
            f(r.$$.fragment, t),
            f(s.$$.fragment, t),
            f(l.$$.fragment, t),
            f(m.$$.fragment, t),
            h = !1
        },
        d(t) {
            t && (v(o), v(n), v(i), v(a)),
            b(e, t),
            b(r, t),
            b(s, t),
            b(l, t),
            b(m, t)
        }
    }
}
class Wt extends n {
    constructor(t)
    {
        super(),
        s(this, t, null, Dt, i, {})
    }
}
const At = "#plugin-rhbottom {  display: flex;  flex-direction: column;  width: 320px;  margin: 0 8px 8px auto;  position: relative;  white-space: nowrap;  pointer-events: auto;}";
export { At as __css, Wt as default };

