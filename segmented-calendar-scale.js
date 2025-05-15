function e(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))),
        r.push.apply(r, a)
    }
    return r
}
function t(t) {
    for (var a = 1; a < arguments.length; a++) {
        var n = null != arguments[a] ? arguments[a] : {};
        a % 2 ? e(Object(n), !0).forEach((function(e) {
            r(t, e, n[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }))
    }
    return t
}
function r(e, t, r) {
    return (t = function(e) {
        var t = function(e, t) {
            if ("object" != typeof e || null === e)
                return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var a = r.call(e, t || "default");
                if ("object" != typeof a)
                    return a;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
    }(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
const {Color: a} = W.Color,
    n = W.format,
    i = W.http,
    s = W.location,
    o = W.metrics,
    c = W.overlays,
    d = W.products,
    l = W.store,
    {t: p} = W.trans,
    u = W.utils,
    {tsDay: v, tsHour: m, scaleLinear: f} = W.utils;
import { w as h, d as b } from "./index.js";
const {isMobileOrTablet: g} = W.rootScope;
import { w } from "./svelte-store-adapter.js";
const y = W.broadcast;
import { a4 as x, S as $, i as O, s as P, f as D, a as j, e as N, c as _, E as S, d as C, g as E, n as q, k as I, l as k, r as M, D as T, b as F, h as A, F as R, p as z, t as L, j as G } from "./component.js";
import { e as U } from "./each.js";
var H = (e, t) => {
        var r,
            [a, n] = t;
        n = null !== (r = n) && void 0 !== r ? r : "width",
        a("width" === n ? e.clientWidth : e.clientHeight);
        var i = new ResizeObserver((e => {
            a(e[0].contentRect[n])
        }));
        return i.observe(e), {
            destroy: () => {
                i.disconnect()
            }
        }
    },
    B = e => {
        var {subscribe: t} = h(o[e].metric, (t => {
            var r = (r, a) => {
                r === e && t(a)
            };
            return y.on("metricChanged", r), () => y.off("metricChanged", r)
        }));
        return {
            subscribe: t
        }
    };
l.insert("rplannerDir", {
    def: "north",
    allowed: ["horizontal", "vertical", "north"],
    save: !0
}),
l.insert("rplannerMotionSpeed", {
    def: {
        elevation: 0,
        car: 22.2222,
        boat: 6.17333,
        vfr: 56.5889,
        ifr: 144.044,
        airgram: 22.2222
    },
    allowed: e => void 0 !== e && "object" == typeof e,
    save: !0
});
var V,
    X = h({
        points: [],
        totalDistance: 0
    }),
    Y = h(!1),
    J = h(void 0),
    K = h(void 0),
    Q = t(t({}, V = h("elevation")), {}, {
        set: e => {
            x(V) !== e && (K.set(void 0), J.set(void 0)),
            V.set(e)
        }
    }),
    Z = (() => {
        var {set: e, subscribe: r, update: a} = h(l.get("rplannerMotionSpeed"));
        return {
            set: e,
            subscribe: r,
            update: a,
            setInverse: (e, r) => {
                var n = 1 / o.speed.convertNumber.bind(o.speed)(e) * e * e;
                a((e => {
                    var a = t(t({}, e), {}, {
                        [r]: n
                    });
                    return l.set("rplannerMotionSpeed", a), a
                }))
            }
        }
    })(),
    ee = (() => {
        var {set: e, update: t, subscribe: r} = h(l.get("timestamp")),
            a = u.debounce((e => {
                l.set("timestamp", e)
            }), 200);
        return {
            update: t,
            subscribe: r,
            get: () => l.get("timestamp"),
            set: t => {
                t < l.get("calendar").end && (e(t), a(t))
            }
        }
    })(),
    te = b([Y, Z, X, Q], (e => {
        var [t, r, a, n] = e,
            i = r[n];
        return t && i > 0 ? Math.round(a.totalDistance / i * 1e3) : 0
    })),
    re = b([ee, te], (e => {
        var [t, r] = e;
        return t + r
    })),
    ae = B("speed"),
    ne = (() => {
        var {subscribe: e} = b([Z, ae, Q], (e => {
            var [t, , r] = e;
            return o.speed.convertNumber(t[r])
        }));
        return {
            subscribe: e,
            set: e => {
                Z.setInverse(e, x(Q))
            }
        }
    })(),
    ie = h(!1),
    se = h(null),
    oe = h(null),
    ce = (() => {
        var e = w("rplannerDir", {
                unbindOnDestroy: !1
            }),
            {subscribe: t} = b(e, (e => "horizontal" === e ? 90 : "vertical" === e ? 0 : null));
        return {
            subscribe: t
        }
    })(),
    de = h(0),
    le = h(g);
function pe(e, t, r) {
    var a = Math.floor(t.length / 2),
        n = (e, t) => (e < t[0] && (e = 0), e > t[1] && (e = t[1]), e);
    return e.map(((i, s) => {
        if (r)
            for (var o = 0; o < r.length; o++)
                if (Math.abs(r[o].position - s) <= a)
                    return i;
        for (var c = 0, d = 0; d < t.length; d++) {
            var l = n(s + (d - a), [0, e.length - 1]);
            c += t[d] * e[l]
        }
        return c
    }))
}
var ue = (e, t, r) => {
    var a = [],
        n = [];
    return e.forEach((e => {
        !a.length || e.position > a[a.length - 1].center + t ? a.push({
            center: e.position,
            data: [e]
        }) : (a[a.length - 1].data.push(e), a[a.length - 1].center = (e => {
            for (var t = 0, r = 0; r < e.length; r++)
                t += e[r].position;
            return t / e.length
        })(a[a.length - 1].data))
    })), a.forEach((e => {
        var t = {
            value: r ? -1 / 0 : 1 / 0,
            position: Number.NaN
        };
        e.data.forEach((e => {
            (r && e.value > t.value || !r && e.value < t.value) && (t = e)
        })),
        n.push(t)
    })), n
};
function ve(e) {
    var t = (e => {
        for (var t = 0, r = 0; r < e.length; r++)
            t += e[r];
        return t
    })(e) / 1;
    return e.map((e => e / t))
}
var me = {
        distance: {
            metric: o.distance,
            name: p.DISTANCE
        },
        temp: {
            metric: o.temp,
            name: p.TEMP,
            icon: c.temp.icon
        },
        wind: {
            metric: o.wind,
            name: p.WIND,
            icon: c.wind.icon
        },
        windDir: {
            name: p.WIND_DIR
        },
        windGust: {
            metric: o.wind,
            name: p.GUST,
            icon: c.gust.icon
        },
        rain: {
            metric: o.rain,
            name: p.RAIN,
            icon: c.rain.icon
        },
        elevation: {
            metric: o.elevation,
            name: p.ELEVATION
        },
        waves: {
            metric: o.waves,
            name: p.WAVES
        },
        cbase: {
            metric: o.altitude,
            name: p.CLOUD_ALT
        },
        ctop: {
            metric: o.altitude,
            name: p.CTOP
        },
        vis: {
            metric: o.visibilityNoRules,
            name: p.SURFACE_VISIBILITY
        },
        precip: {
            metric: o.rain,
            name: p.CLOUDS
        },
        warnings: {
            name: p.WX_WARNINGS
        },
        dewpoint: {
            metric: o.temp,
            name: p.DEW_POINT_SPREAD
        },
        isa: {
            metric: o.temp,
            name: p.ISA_DIFFERENCE
        }
    },
    fe = e => e.map((e => "".concat(e.point.lat.toFixed(4), ",").concat(e.point.lng.toFixed(4)))).join(";"),
    he = e => i.get("/rplanner/v1/elevation/".concat(fe(e))),
    be = e => {
        var t,
            r = l.get("calendar");
        return -1 === (t = e > r.end ? new Date(e).toISOString().replace(/(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):.*/, "$1/$2/$3/$4") : r.ts2path(e)).indexOf("/") ? t.substring(0, 4) + "/" + t.substring(4, 6) + "/" + t.substring(6, 8) + "/" + t.substring(8, 10) : t
    },
    ge = (e, t) => {
        var r = fe(e),
            a = {
                dst: be(x(ee))
            };
        if (x(Y)) {
            var n = be(x(re)),
                s = new Date(d.ecmwf.minifest.ref).getTime(),
                o = d.ecmwf.minifest.dst.map((e => e.join(","))).join(";"),
                c = "".concat(s, ";").concat(d.ecmwf.calendar.premiumStart, ";").concat(o);
            a.dst2 = n,
            a.minifest = c
        }
        return i.get("/rplanner/v1/forecast/".concat(t, "/").concat(r), {
            qs: a
        })
    },
    we = new a({
        ident: "direction",
        steps: 512,
        default: [[0, [241, 5, 21, 255]], [20, [232, 133, 58, 255]], [40, [207, 119, 84, 255]], [120, [98, 98, 98, 255]], [140, [60, 154, 129, 255]], [180, [4, 164, 114, 255]], [220, [60, 154, 129, 255]], [240, [98, 98, 98, 255]], [320, [207, 119, 84, 255]], [340, [232, 133, 58, 255]], [360, [241, 5, 21, 255]]]
    }),
    ye = we.getColor.call(we),
    xe = (e, t) => {
        var r = (e + (t || 0) + 360) % 360,
            [a, n, i] = ye.RGBA.call(ye, r);
        return "rgba(".concat(a, ",").concat(n, ",").concat(i, ",1)")
    },
    We = e => {
        var t = Math.floor(e / v),
            r = Math.floor(e / m) % 24,
            a = 0 === t && r < 5 ? Math.floor(e / 6e4 % 60) : 0,
            n = t > 0 ? "".concat(t, "d ") : "",
            i = "".concat(r, "h"),
            s = a > 0 ? " ".concat(a, "m") : "";
        return "".concat(n).concat(i).concat(s)
    },
    $e = (e, t) => {
        if (t > e)
            return "Far future";
        var r = new Date(t).getHours();
        return n.getHoursFunction()(r)
    },
    Oe = (e, t, r) => {
        if (t > e.end)
            return "Far future";
        var a = Math.floor((t - e.start) / v),
            n = e.days[a],
            i = n ? "".concat(p[n.display]).concat(n.day && " " + n.day, " - ") : "",
            s = $e(e.end, t);
        return "".concat(i).concat(s)
    },
    Pe = (e, t, r) => {
        if (r && r.length) {
            var a = {
                coords: fe(r),
                view: "elevation" !== t ? t : void 0,
                id: e ? "id:".concat(e) : void 0
            };
            s.setUrl("rplanner", a)
        }
    },
    De = e => {
        var r = e.max,
            a = Math.min(0, e.min),
            n = ve([.1, .15, .5, .15, .1]),
            i = ((e, t, r, a) => {
                for (var n = [], i = [], s = 1 / 0, o = -1 / 0, c = Number.NaN, d = Number.NaN, l = !0, p = 0; p < e.length; p++) {
                    var u = e[p];
                    u > o && (o = u, d = p),
                    u < s && (s = u, c = p),
                    l ? u < o - t && (n.push({
                        position: d,
                        value: o,
                        max: !0
                    }), s = u, c = p, l = !1) : u > s + t && (i.push({
                        position: c,
                        value: s,
                        max: !1
                    }), o = u, d = p, l = !0)
                }
                return n = ue(n, r, !0), i = ue(i, a, !1), n.concat(i)
            })(e.elevations, .15 * (r - a), .05 * e.elevations.length, .2 * e.elevations.length);
        return t({
            extremes: i,
            elevationsGraph: pe(e.elevations, n, i)
        }, e)
    },
    je = e => {
        for (var t = 0; t < e.distances.length; t++)
            e.data.cbase && null === e.data.cbase[t] && (e.data.cbase[t] = 1e5),
            e.data.ctop && null === e.data.ctop[t] && (e.data.ctop[t] = 1e5),
            e.data.ctop && e.data.cbase && e.data.cbase[t] < 1e5 && e.data.ctop[t] < e.data.cbase[t] && (e.data.ctop[t] = e.data.cbase[t]);
        return e
    };
function Ne(e) {
    j(e, "svelte-dsp6fq", ".pb-calendar.svelte-dsp6fq.svelte-dsp6fq{width:100%;height:26px;white-space:nowrap;overflow:hidden}.pb-calendar__day.svelte-dsp6fq.svelte-dsp6fq{font-size:12px;display:inline-block;box-sizing:border-box;text-align:center;padding-top:8px;line-height:1;height:26px;white-space:nowrap;overflow:hidden}.pb-calendar__day--with-border.svelte-dsp6fq.svelte-dsp6fq{border-left:1px solid rgba(239, 239, 239, 0.3)}.pb-calendar__day-premium-wrapper.svelte-dsp6fq.svelte-dsp6fq{position:relative;width:-moz-fit-content;width:fit-content;margin:auto}.pb-calendar__day-premium-wrapper.svelte-dsp6fq .premium-flag.svelte-dsp6fq{top:-3px;right:-7px;font-size:9px}")
}
function _e(e, t, r) {
    var a = e.slice();
    return a[13] = t[r].day, a[14] = t[r].display, a[15] = t[r].premium, a[16] = t[r].middayTs, a[17] = t[r].displayLong, a[18] = t[r].dayWidthPercent, a[19] = t[r].dayWidthPixel, a[21] = r, a
}
function Se(e) {
    for (var t, r = U(e[4]), a = [], n = 0; n < r.length; n += 1)
        a[n] = ke(_e(e, r, n));
    return {
        c() {
            for (var e = 0; e < a.length; e += 1)
                a[e].c();
            t = M()
        },
        m(e, r) {
            for (var n = 0; n < a.length; n += 1)
                a[n] && a[n].m(e, r);
            E(e, t, r)
        },
        p(e, n) {
            if (598 & n) {
                var i;
                for (r = U(e[4]), i = 0; i < r.length; i += 1) {
                    var s = _e(e, r, i);
                    a[i] ? a[i].p(s, n) : (a[i] = ke(s), a[i].c(), a[i].m(t.parentNode, t))
                }
                for (; i < a.length; i += 1)
                    a[i].d(1);
                a.length = r.length
            }
        },
        d(e) {
            e && I(t),
            T(a, e)
        }
    }
}
function Ce(e) {
    var t,
        r,
        a,
        n,
        i,
        s = e[13] + "";
    function o(e, t) {
        return e[19] > 140 ? qe : e[19] > 60 ? Ee : void 0
    }
    var c = o(e),
        d = c && c(e),
        l = e[15] && e[2] && Ie();
    return {
        c() {
            t = N("div"),
            d && d.c(),
            r = F(),
            a = N("span"),
            n = L(s),
            i = F(),
            l && l.c(),
            _(t, "class", "pb-calendar__day-premium-wrapper svelte-dsp6fq")
        },
        m(e, s) {
            E(e, t, s),
            d && d.m(t, null),
            A(t, r),
            A(t, a),
            A(a, n),
            A(t, i),
            l && l.m(t, null)
        },
        p(e, a) {
            c === (c = o(e)) && d ? d.p(e, a) : (d && d.d(1), (d = c && c(e)) && (d.c(), d.m(t, r))),
            16 & a && s !== (s = e[13] + "") && G(n, s),
            e[15] && e[2] ? l || ((l = Ie()).c(), l.m(t, null)) : l && (l.d(1), l = null)
        },
        d(e) {
            e && I(t),
            d && d.d(),
            l && l.d()
        }
    }
}
function Ee(e) {
    var t,
        r = p[e[14]] + "";
    return {
        c() {
            t = L(r)
        },
        m(e, r) {
            E(e, t, r)
        },
        p(e, a) {
            16 & a && r !== (r = p[e[14]] + "") && G(t, r)
        },
        d(e) {
            e && I(t)
        }
    }
}
function qe(e) {
    var t,
        r = p[e[17]] + "";
    return {
        c() {
            t = L(r)
        },
        m(e, r) {
            E(e, t, r)
        },
        p(e, a) {
            16 & a && r !== (r = p[e[17]] + "") && G(t, r)
        },
        d(e) {
            e && I(t)
        }
    }
}
function Ie(e) {
    var t;
    return {
        c() {
            t = N("div"),
            _(t, "class", "premium-flag svelte-dsp6fq")
        },
        m(e, r) {
            E(e, t, r)
        },
        d(e) {
            e && I(t)
        }
    }
}
function ke(e) {
    var t,
        r,
        a,
        n,
        i = (e[6] || e[21] % 2 == 0) && Ce(e);
    function s() {
        return e[11](e[16])
    }
    return {
        c() {
            t = N("div"),
            i && i.c(),
            r = F(),
            _(t, "class", "pb-calendar__day uiyellow svelte-dsp6fq"),
            S(t, "pb-calendar__day--with-border", e[21] > 0 && e[6]),
            C(t, "width", "".concat(e[18], "%"))
        },
        m(e, o) {
            E(e, t, o),
            i && i.m(t, null),
            A(t, r),
            a || (n = R(t, "click", s), a = !0)
        },
        p(a, n) {
            (e = a)[6] || e[21] % 2 == 0 ? i ? i.p(e, n) : ((i = Ce(e)).c(), i.m(t, r)) : i && (i.d(1), i = null),
            64 & n && S(t, "pb-calendar__day--with-border", e[21] > 0 && e[6]),
            16 & n && C(t, "width", "".concat(e[18], "%"))
        },
        d(e) {
            e && I(t),
            i && i.d(),
            a = !1,
            n()
        }
    }
}
function Me(e) {
    var t,
        r = e[5] && Se(e);
    return {
        c() {
            t = N("section"),
            r && r.c(),
            _(t, "class", "pb-calendar bg-gray-dark svelte-dsp6fq"),
            S(t, "clickable", e[1]),
            S(t, "disabled", e[3]),
            C(t, "width", "".concat(e[0], "px"))
        },
        m(e, a) {
            E(e, t, a),
            r && r.m(t, null)
        },
        p(e, a) {
            var [n] = a;
            e[5] ? r ? r.p(e, n) : ((r = Se(e)).c(), r.m(t, null)) : r && (r.d(1), r = null),
            2 & n && S(t, "clickable", e[1]),
            8 & n && S(t, "disabled", e[3]),
            1 & n && C(t, "width", "".concat(e[0], "px"))
        },
        i: q,
        o: q,
        d(e) {
            e && I(t),
            r && r.d()
        }
    }
}
function Te(e, r, a) {
    var n,
        i,
        s,
        {progressWidth: o} = r,
        {x: c} = r,
        {isClickable: d=!1} = r,
        {showPremium: l=!0} = r,
        {disabled: p=!1} = r,
        u = w("calendar");
    k(e, u, (e => a(5, s = e)));
    var v,
        m = w("timestamp");
    k(e, m, (e => a(12, i = e)));
    var f = e => {
        s && e > s.start && e < s.end && z(m, i = e, i)
    };
    return e.$$set = e => {
        "progressWidth" in e && a(0, o = e.progressWidth),
        "x" in e && a(10, c = e.x),
        "isClickable" in e && a(1, d = e.isClickable),
        "showPremium" in e && a(2, l = e.showPremium),
        "disabled" in e && a(3, p = e.disabled)
    }, e.$$.update = () => {
        1057 & e.$$.dirty && a(4, v = s ? s.days.filter((e => e.hasForecast)).map((e => {
            var r = c.get(e.end) - c.get(e.start),
                a = o * r / 100;
            return t(t({}, e), {}, {
                dayWidthPercent: r,
                dayWidthPixel: a
            })
        })) : []),
        16 & e.$$.dirty && a(6, n = !v.some((e => e.dayWidthPixel <= 20)))
    }, [o, d, l, p, v, s, n, u, m, f, c, e => d && f(e)]
}
class Fe extends $ {
    constructor(e)
    {
        super(),
        O(this, e, Te, Me, P, {
            progressWidth: 0,
            x: 10,
            isClickable: 1,
            showPremium: 2,
            disabled: 3
        }, Ne)
    }
    get progressWidth()
    {
        return this.$$.ctx[0]
    }
    set progressWidth(e)
    {
        this.$$set({
            progressWidth: e
        }),
        D()
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
        D()
    }
    get isClickable()
    {
        return this.$$.ctx[1]
    }
    set isClickable(e)
    {
        this.$$set({
            isClickable: e
        }),
        D()
    }
    get showPremium()
    {
        return this.$$.ctx[2]
    }
    set showPremium(e)
    {
        this.$$set({
            showPremium: e
        }),
        D()
    }
    get disabled()
    {
        return this.$$.ctx[3]
    }
    set disabled(e)
    {
        this.$$set({
            disabled: e
        }),
        D()
    }
}
var Ae = function(e) {
    var {start: t, days: r} = e,
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = r.filter((e => e.hasForecast)),
        {length: i} = n,
        {end: s} = n[i - 1];
    if (i < 6)
        return f({
            domain: [t, s],
            range: [0, 100],
            clip: a
        });
    if (i < 10) {
        var o = Math.round(.3 * i),
            {end: c} = n[o - 1],
            d = f({
                domain: [t, c],
                range: [0, 40],
                clip: a
            }),
            l = f({
                domain: [c, s],
                range: [40, 100],
                clip: a
            });
        return {
            get: e => e > c ? l.get(e) : d.get(e),
            invert: e => e > 40 ? l.invert(e) : d.invert(e)
        }
    }
    var {end: p} = n[1],
        {end: u} = n[4],
        v = f({
            domain: [t, p],
            range: [0, 20],
            clip: a
        }),
        m = f({
            domain: [p, u],
            range: [20, 40],
            clip: a
        }),
        h = f({
            domain: [u, s],
            range: [40, 100],
            clip: a
        });
    return {
        get: e => e > u ? h.get(e) : e > p ? m.get(e) : v.get(e),
        invert: e => e > 40 ? h.invert(e) : e > 20 ? m.invert(e) : v.invert(e)
    }
};
export { te as A, ge as B, Fe as C, je as D, he as E, De as F, We as a, $e as b, X as c, Q as d, se as e, Oe as f, Pe as g, Y as h, ne as i, de as j, oe as k, re as l, ee as m, J as n, H as o, fe as p, B as q, ie as r, Ae as s, me as t, K as u, ve as v, pe as w, ce as x, xe as y, le as z };

