function e(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))),
        a.push.apply(a, r)
    }
    return a
}
function t(t) {
    for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2 ? e(Object(n), !0).forEach((function(e) {
            a(t, e, n[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }))
    }
    return t
}
function a(e, t, a) {
    return (t = function(e) {
        var t = function(e, t) {
            if ("object" != typeof e || null === e)
                return e;
            var a = e[Symbol.toPrimitive];
            if (void 0 !== a) {
                var r = a.call(e, t || "default");
                if ("object" != typeof r)
                    return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
    }(t)) in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e
}
const r = W.broadcast,
    {getCancelShow: n, hide: s} = W.startupWeather,
    i = W.query,
    l = W.reverseName,
    o = W.rootScope,
    c = W.store,
    {isNear: p} = W.utils,
    m = W.metrics;
import { F as g } from "./_shared/forecast-fragment.js";
const {t: d} = W.trans,
    f = W.format;
import { b as u } from "./_shared/cap-utils.js";
import { S as v, i as h, s as w, f as y, a as b, e as j, c as x, g as $, F as D, n as k, k as O, D as P, t as _, b as A, h as S, j as z, r as L, v as N, x as E, y as q, m as C, V as F, a1 as H, A as V, B as R, C as B, w as M, q as T } from "./_shared/component.js";
import { e as U } from "./_shared/each.js";
import "./_shared/additional-colors.js";
import "./_shared/fragment-rendering-utils.js";
import "./_shared/image-renderers.js";
function G(e) {
    b(e, "svelte-ag4fr3", ".cap-lines.svelte-ag4fr3.svelte-ag4fr3{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:center}.cap-lines.svelte-ag4fr3 .cap-line.svelte-ag4fr3{font-size:14px;white-space:nowrap;line-height:1.6;margin-right:0.7em;padding-right:1em;overflow:hidden;flex-grow:4;flex-basis:0;position:relative;border-radius:28px;margin-top:10px}.cap-lines.svelte-ag4fr3 .cap-line--severity-M.svelte-ag4fr3{background-color:var(--color-warning-moderate)}.cap-lines.svelte-ag4fr3 .cap-line--severity-S.svelte-ag4fr3{background-color:var(--color-warning-severe)}.cap-lines.svelte-ag4fr3 .cap-line--severity-E.svelte-ag4fr3{background-color:var(--color-warning-extreme)}.cap-lines.svelte-ag4fr3 .cap-line.svelte-ag4fr3:last-child{margin-right:0}.cap-lines.svelte-ag4fr3 .cap-line.svelte-ag4fr3::before{font-size:16px;display:block;float:left;font-weight:normal;text-align:center;position:relative;padding:0.2em 0.3em;margin-right:0.3em;line-height:normal;height:100%}.cap-lines.svelte-ag4fr3 .cap-line small.svelte-ag4fr3{display:block;opacity:0.7}.cap-lines.svelte-ag4fr3 .cap-line:not(.cap-line--multiline) small.svelte-ag4fr3{position:absolute;top:2px;right:6px}.cap-lines.svelte-ag4fr3 .cap-line--multiline.svelte-ag4fr3{font-size:12px;line-height:1.4}.cap-lines.svelte-ag4fr3 .cap-line--multiline small.svelte-ag4fr3{font-size:8px;padding-bottom:0.3em}.cap-lines.svelte-ag4fr3 .cap-line--multiline.svelte-ag4fr3::before{padding-top:0.4em;padding-left:0.5em}")
}
function I(e, t, a) {
    var r = e.slice();
    return r[6] = t[a].severity, r[7] = t[a].type, r[8] = t[a].startLocal, r[9] = t[a].endLocal, r[10] = t[a].startDay, r[11] = t[a].endDay, r[12] = t[a].shortenedEvent, r
}
function J(e) {
    var t,
        a = e[11] + "";
    return {
        c() {
            t = _(a)
        },
        m(e, a) {
            $(e, t, a)
        },
        p(e, r) {
            1 & r && a !== (a = e[11] + "") && z(t, a)
        },
        d(e) {
            e && O(t)
        }
    }
}
function K(e) {
    var t,
        a,
        r,
        n,
        s,
        i,
        l,
        o,
        c,
        p,
        m,
        g,
        d = e[12] + "",
        f = e[10] + "",
        v = e[2](+e[8].hour) + "",
        h = e[2](+e[9].hour) + "",
        w = e[8].weekday !== e[9].weekday && J(e);
    return {
        c() {
            t = j("div"),
            a = _(d),
            r = A(),
            n = j("small"),
            s = _(f),
            i = A(),
            l = _(v),
            o = _(" -\n                "),
            w && w.c(),
            c = _(h),
            p = A(),
            x(n, "class", "svelte-ag4fr3"),
            x(t, "class", m = "cap-line cap-line--severity-" + e[6] + " clickable " + (e[1] ? "cap-line--multiline" : "") + " svelte-ag4fr3"),
            x(t, "data-icon", g = u(e[7]))
        },
        m(e, m) {
            $(e, t, m),
            S(t, a),
            S(t, r),
            S(t, n),
            S(n, s),
            S(n, i),
            S(n, l),
            S(n, o),
            w && w.m(n, null),
            S(n, c),
            S(t, p)
        },
        p(e, r) {
            1 & r && d !== (d = e[12] + "") && z(a, d),
            1 & r && f !== (f = e[10] + "") && z(s, f),
            1 & r && v !== (v = e[2](+e[8].hour) + "") && z(l, v),
            e[8].weekday !== e[9].weekday ? w ? w.p(e, r) : ((w = J(e)).c(), w.m(n, c)) : w && (w.d(1), w = null),
            1 & r && h !== (h = e[2](+e[9].hour) + "") && z(c, h),
            3 & r && m !== (m = "cap-line cap-line--severity-" + e[6] + " clickable " + (e[1] ? "cap-line--multiline" : "") + " svelte-ag4fr3") && x(t, "class", m),
            1 & r && g !== (g = u(e[7])) && x(t, "data-icon", g)
        },
        d(e) {
            e && O(t),
            w && w.d()
        }
    }
}
function Q(e) {
    for (var t, a, r, n = U(e[0]), s = [], i = 0; i < n.length; i += 1)
        s[i] = K(I(e, n, i));
    return {
        c() {
            t = j("div");
            for (var e = 0; e < s.length; e += 1)
                s[e].c();
            x(t, "class", "cap-lines svelte-ag4fr3")
        },
        m(n, i) {
            $(n, t, i);
            for (var l = 0; l < s.length; l += 1)
                s[l] && s[l].m(t, null);
            a || (r = D(t, "click", e[3]), a = !0)
        },
        p(e, a) {
            var [r] = a;
            if (7 & r) {
                var i;
                for (n = U(e[0]), i = 0; i < n.length; i += 1) {
                    var l = I(e, n, i);
                    s[i] ? s[i].p(l, r) : (s[i] = K(l), s[i].c(), s[i].m(t, null))
                }
                for (; i < s.length; i += 1)
                    s[i].d(1);
                s.length = n.length
            }
        },
        i: k,
        o: k,
        d(e) {
            e && O(t),
            P(s, e),
            a = !1,
            r()
        }
    }
}
function X(e, a, n) {
    var s,
        {capAlertsData: i} = a,
        {coords: l} = a,
        o = f.getHoursFunction(),
        c = !1;
    return e.$$set = e => {
        "capAlertsData" in e && n(4, i = e.capAlertsData),
        "coords" in e && n(5, l = e.coords)
    }, e.$$.update = () => {
        16 & e.$$.dirty && n(1, c = i.length > 1),
        16 & e.$$.dirty && n(0, s = i.map((e => {
            var {event: a, startLocal: r, endLocal: n} = e,
                s = !1,
                i = a;
            a.length > 24 && (i = a.substring(0, 24) + "...", s = !0);
            var l = r.weekday !== n.weekday,
                o = l && s ? "2" : "",
                c = d["".concat(r.weekday).concat(o)],
                p = l ? d["".concat(n.weekday).concat(o)] : "";
            return t(t({}, e), {}, {
                startDay: c,
                endDay: p,
                shortenedEvent: i
            })
        })))
    }, [s, c, o, () => {
        var {lat: e, lon: t} = l,
            a = l.name || l.title || void 0;
        r.emit("rqstOpen", "cap-alert", {
            lat: e,
            lon: t,
            name: a,
            source: "hp"
        })
    }, i, l]
}
class Y extends v {
    constructor(e)
    {
        super(),
        h(this, e, X, Q, w, {
            capAlertsData: 4,
            coords: 5
        }, G)
    }
    get capAlertsData()
    {
        return this.$$.ctx[4]
    }
    set capAlertsData(e)
    {
        this.$$set({
            capAlertsData: e
        }),
        y()
    }
    get coords()
    {
        return this.$$.ctx[5]
    }
    set coords(e)
    {
        this.$$set({
            coords: e
        }),
        y()
    }
}
function Z(e) {
    b(e, "svelte-152pmjt", ".sw-wrapper.svelte-152pmjt.svelte-152pmjt{width:100%;display:flex;flex-direction:row}.w-now.svelte-152pmjt.svelte-152pmjt{width:100px;text-align:center;line-height:1;margin-top:-5px}.w-now.svelte-152pmjt big.svelte-152pmjt{font-size:67px;font-family:bariolnumbers, Arial, Helvetica, sans-serif;font-weight:normal}.w-now.svelte-152pmjt big sup.svelte-152pmjt{font-size:30px}.w-now.svelte-152pmjt .ws-wind.svelte-152pmjt{font-size:12px;font-size:0.8em;color:#c1c1c1;margin-top:4px;display:flex;flex-direction:row;justify-content:center;align-items:center;margin-left:-1em}.w-now.svelte-152pmjt .ws-wind img.svelte-152pmjt{width:13.5px;margin-right:0.5em}.w-forecast.svelte-152pmjt.svelte-152pmjt{width:calc(100% - 100px)}")
}
function ee(e) {
    var t = e.slice(),
        a = "".concat(t[3].icon).concat(t[4].isDay ? "" : "_night_".concat(t[3].moonPhase));
    t[14] = a;
    var r = t[3];
    return t[15] = r.temp, t[16] = r.wind, t
}
function te(e) {
    var t,
        a,
        r,
        n,
        s,
        i,
        l,
        c,
        p,
        m = e[6](e[15]) + "",
        g = (e[16] ? e[7](e[16], " ") : "") + "";
    return {
        c() {
            t = j("big"),
            a = _(m),
            (r = j("sup")).textContent = "°",
            n = A(),
            s = j("span"),
            i = j("img"),
            p = _(g),
            x(r, "class", "svelte-152pmjt"),
            x(t, "class", "svelte-152pmjt"),
            F(i.src, l = o.iconsDir + "/png_27px/" + e[14] + ".png") || x(i, "src", l),
            H(i, c = o.iconsDir + "/png_27@2x/" + e[14] + ".png 2x") || x(i, "srcset", c),
            x(i, "class", "svelte-152pmjt"),
            x(s, "class", "ws-wind svelte-152pmjt")
        },
        m(e, l) {
            $(e, t, l),
            S(t, a),
            S(t, r),
            $(e, n, l),
            $(e, s, l),
            S(s, i),
            S(s, p)
        },
        p(e, t) {
            8 & t && m !== (m = e[6](e[15]) + "") && z(a, m),
            24 & t && !F(i.src, l = o.iconsDir + "/png_27px/" + e[14] + ".png") && x(i, "src", l),
            24 & t && c !== (c = o.iconsDir + "/png_27@2x/" + e[14] + ".png 2x") && x(i, "srcset", c),
            8 & t && g !== (g = (e[16] ? e[7](e[16], " ") : "") + "") && z(p, g)
        },
        d(e) {
            e && (O(t), O(n), O(s))
        }
    }
}
function ae(e) {
    var t,
        a;
    return t = new g({
        props: {
            dataPayload: e[1],
            days: e[0].offsetWidth < 350 ? 3 : 4,
            tableHeight: 60
        }
    }), {
        c() {
            V(t.$$.fragment)
        },
        m(e, r) {
            R(t, e, r),
            a = !0
        },
        p(e, a) {
            var r = {};
            2 & a && (r.dataPayload = e[1]),
            1 & a && (r.days = e[0].offsetWidth < 350 ? 3 : 4),
            t.$set(r)
        },
        i(e) {
            a || (N(t.$$.fragment, e), a = !0)
        },
        o(e) {
            E(t.$$.fragment, e),
            a = !1
        },
        d(e) {
            B(t, e)
        }
    }
}
function re(e) {
    var t,
        a;
    return t = new Y({
        props: {
            capAlertsData: e[5],
            coords: e[2]
        }
    }), {
        c() {
            V(t.$$.fragment)
        },
        m(e, r) {
            R(t, e, r),
            a = !0
        },
        p(e, a) {
            var r = {};
            32 & a && (r.capAlertsData = e[5]),
            4 & a && (r.coords = e[2]),
            t.$set(r)
        },
        i(e) {
            a || (N(t.$$.fragment, e), a = !0)
        },
        o(e) {
            E(t.$$.fragment, e),
            a = !1
        },
        d(e) {
            B(t, e)
        }
    }
}
function ne(e) {
    var t,
        a,
        r,
        n,
        s,
        i,
        l,
        o,
        c,
        p = e[3] && e[4] && te(ee(e)),
        m = e[1] && ae(e),
        g = e[1] && e[5] && e[5].length > 0 && re(e);
    return {
        c() {
            t = j("div"),
            a = j("div"),
            p && p.c(),
            r = A(),
            n = j("div"),
            m && m.c(),
            s = A(),
            g && g.c(),
            i = L(),
            x(a, "class", "w-now svelte-152pmjt"),
            x(n, "class", "w-forecast svelte-152pmjt"),
            x(t, "class", "sw-wrapper svelte-152pmjt")
        },
        m(d, f) {
            $(d, t, f),
            S(t, a),
            p && p.m(a, null),
            S(t, r),
            S(t, n),
            m && m.m(n, null),
            e[10](t),
            $(d, s, f),
            g && g.m(d, f),
            $(d, i, f),
            l = !0,
            o || (c = D(t, "click", e[8]), o = !0)
        },
        p(e, t) {
            var [r] = t;
            e[3] && e[4] ? p ? p.p(ee(e), r) : ((p = te(ee(e))).c(), p.m(a, null)) : p && (p.d(1), p = null),
            e[1] ? m ? (m.p(e, r), 2 & r && N(m, 1)) : ((m = ae(e)).c(), N(m, 1), m.m(n, null)) : m && (M(), E(m, 1, 1, (() => {
                m = null
            })), q()),
            e[1] && e[5] && e[5].length > 0 ? g ? (g.p(e, r), 34 & r && N(g, 1)) : ((g = re(e)).c(), N(g, 1), g.m(i.parentNode, i)) : g && (M(), E(g, 1, 1, (() => {
                g = null
            })), q())
        },
        i(e) {
            l || (N(m), N(g), l = !0)
        },
        o(e) {
            E(m),
            E(g),
            l = !1
        },
        d(a) {
            a && (O(t), O(s), O(i)),
            p && p.d(),
            m && m.d(),
            e[10](null),
            g && g.d(a),
            o = !1,
            c()
        }
    }
}
function se(e, t, a) {
    var o,
        g,
        d,
        f,
        u,
        v,
        h = m.temp.convertNumber.bind(m.temp),
        w = m.wind.convertValue.bind(m.wind),
        y = e => "title" in e && e.title || "name" in e && e.name || void 0;
    function b(e) {
        var t = y(e);
        if (t && i.set(t), (e => "location" !== c.get("startUp") || "source" in e && "gps" === e.source)(e)) {
            var a = c.get("startupReverseName");
            if (a && "name" in a && "string" == typeof a.name && a.name.length > 0 && p(e, a) && a.lang === c.get("usedLang"))
                i.set(a.name),
                e.name = a.name;
            else {
                var r = "gps" === e.source ? 14 : 6;
                l.get(e, r).then((t => {
                    e.name = t.name,
                    i.set(t.name),
                    t.nameValid && c.set("startupReverseName", t)
                }))
            }
        }
    }
    return C((() => {
        document.body.classList.remove("onweather"),
        c.set("startupWeatherShown", !1),
        a(5, v = void 0)
    })), [o, g, d, f, u, v, h, w, () => {
        var e = {
            lat: d.lat,
            lon: d.lon,
            name: y(d),
            source: "hp"
        };
        r.emit("rqstOpen", "detail", e)
    }, e => {
        var {coords: t, promises: r} = e;
        b(t),
        a(2, d = t),
        r.wx.then((e => {
            var {data: t} = e;
            !n() && t && (document.body.classList.add("onweather"), i.hideLoader(), a(1, g = t), a(3, ({now: f, celestial: u} = t), f, a(4, u)), c.set("startupWeatherShown", !0))
        })).catch((e => {
            console.error(e),
            s()
        })),
        r.capAlerts.then((e => {
            var {data: t} = e;
            return a(5, v = t)
        }))
    }, function(e) {
        T[e ? "unshift" : "push"]((() => {
            a(0, o = e)
        }))
    }]
}
class ie extends v {
    constructor(e)
    {
        super(),
        h(this, e, se, ne, w, {
            onopen: 9
        }, Z)
    }
    get onopen()
    {
        return this.$$.ctx[9]
    }
}
const le = "#plugin-startup-weather {  cursor: pointer;  -webkit-tap-highlight-color: initial;  transition: all 0.5s;  opacity: 0;  margin-top: 10px;  width: 382px;}#plugin-startup-weather.open {  opacity: 1;}.onsearch #plugin-startup-weather {  display: none !important;}#device-mobile #plugin-startup-weather {  width: calc(100vw - 20px);}";
export { le as __css, ie as default };

