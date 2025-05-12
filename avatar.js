const e = W.broadcast,
    a = W.user,
    s = W.subscription,
    t = W.plugins,
    r = W.store;
import { w as i } from "./svelte-store-adapter.js";
import { S as o, i as n, s as p, f as l, a as c, e as g, b as d, c as m, V as u, E as v, g as h, h as b, F as w, n as z, k as f, l as x, t as j, j as y } from "./component.js";
function $(e) {
    c(e, "svelte-n9jegg", ".avatar-wrapper.svelte-n9jegg{position:relative;white-space:nowrap;width:-moz-fit-content;width:fit-content;line-height:normal;display:inline-block}.avatar-wrapper__badge.svelte-n9jegg{position:absolute;right:-0.3em;top:-0.3em}.avatar-wrapper__premium-logo.svelte-n9jegg{pointer-events:none;position:absolute;background-image:url('/img/premium/badge.svg');background-position:center;background-size:contain;background-repeat:no-repeat;width:110%;height:40%;left:-5%;bottom:-20%;z-index:1}")
}
function S(e) {
    var a,
        s;
    return {
        c() {
            a = g("div"),
            s = j(e[3]),
            m(a, "class", "avatar-wrapper__badge badge badge--rounded size-s fg-white bg-red svelte-n9jegg")
        },
        m(e, t) {
            h(e, a, t),
            b(a, s)
        },
        p(e, a) {
            8 & a && y(s, e[3])
        },
        d(e) {
            e && f(a)
        }
    }
}
function _(e) {
    var a;
    return {
        c() {
            a = g("div"),
            m(a, "class", "avatar-wrapper__premium-logo svelte-n9jegg")
        },
        m(e, s) {
            h(e, a, s)
        },
        d(e) {
            e && f(a)
        }
    }
}
function k(e) {
    var s,
        t,
        r,
        i,
        o,
        n,
        p,
        l = e[3] && S(e),
        c = e[2] && _();
    return {
        c() {
            s = g("div"),
            t = g("img"),
            i = d(),
            l && l.c(),
            o = d(),
            c && c.c(),
            m(t, "class", "avatar"),
            u(t.src, r = a.getAvatar()) || m(t, "src", r),
            m(t, "alt", a.getUsername()),
            v(t, "boxshadow", e[1]),
            m(s, "class", "avatar-wrapper svelte-n9jegg"),
            v(s, "size-s", "s" === e[0]),
            v(s, "size-m", "m" === e[0]),
            v(s, "size-l", "l" === e[0])
        },
        m(a, r) {
            h(a, s, r),
            b(s, t),
            b(s, i),
            l && l.m(s, null),
            b(s, o),
            c && c.m(s, null),
            n || (p = w(s, "click", e[5]), n = !0)
        },
        p(e, a) {
            var [r] = a;
            2 & r && v(t, "boxshadow", e[1]),
            e[3] ? l ? l.p(e, r) : ((l = S(e)).c(), l.m(s, o)) : l && (l.d(1), l = null),
            e[2] ? c || ((c = _()).c(), c.m(s, null)) : c && (c.d(1), c = null),
            1 & r && v(s, "size-s", "s" === e[0]),
            1 & r && v(s, "size-m", "m" === e[0]),
            1 & r && v(s, "size-l", "l" === e[0])
        },
        i: z,
        o: z,
        d(e) {
            e && f(s),
            l && l.d(),
            c && c.d(),
            n = !1,
            p()
        }
    }
}
function B(a, o, n) {
    var p,
        l = i("badgeNumber");
    x(a, l, (e => n(3, p = e)));
    var c = s.hasAny();
    r.on("subscription", (() => {
        n(2, c = s.hasAny())
    }));
    var {size: g="m"} = o,
        {applyBoxShadow: d=!1} = o;
    return a.$$set = e => {
        "size" in e && n(0, g = e.size),
        "applyBoxShadow" in e && n(1, d = e.applyBoxShadow)
    }, [g, d, c, p, l, () => {
        var {isOpen: a} = t.favs;
        a ? e.emit("rqstClose", "favs") : e.emit("rqstOpen", "favs")
    }]
}
class A extends o {
    constructor(e)
    {
        super(),
        n(this, e, B, k, p, {
            size: 0,
            applyBoxShadow: 1
        }, $)
    }
    get size()
    {
        return this.$$.ctx[0]
    }
    set size(e)
    {
        this.$$set({
            size: e
        }),
        l()
    }
    get applyBoxShadow()
    {
        return this.$$.ctx[1]
    }
    set applyBoxShadow(e)
    {
        this.$$set({
            applyBoxShadow: e
        }),
        l()
    }
}
export { A };

