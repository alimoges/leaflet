import { w as e } from "./svelte-store-adapter.js";
import { S as t, i as s, s as a, f as i, H as r, e as n, c, E as d, g as o, F as h, I as $, J as l, K as f, v as b, x as u, k as x, $ as k, o as v, n as g, a8 as p, p as R } from "./component.js";
function C(e) {
    var t,
        s,
        a,
        i,
        k = e[11].default,
        v = r(k, e, e[10], null);
    return {
        c() {
            t = n("div"),
            v && v.c(),
            c(t, "class", "checkbox noselect"),
            d(t, "checkbox--after", e[1]),
            d(t, "checkbox--variant-red-light", e[2]),
            d(t, "checkbox--variant-red", e[3]),
            d(t, "checkbox--off", !e[0]),
            d(t, "disabled", e[4])
        },
        m(r, n) {
            o(r, t, n),
            v && v.m(t, null),
            s = !0,
            a || (i = h(t, "click", e[6]), a = !0)
        },
        p(e, a) {
            var [i] = a;
            v && v.p && (!s || 1024 & i) && $(v, k, e, e[10], s ? f(k, e[10], i, null) : l(e[10]), null),
            (!s || 2 & i) && d(t, "checkbox--after", e[1]),
            (!s || 4 & i) && d(t, "checkbox--variant-red-light", e[2]),
            (!s || 8 & i) && d(t, "checkbox--variant-red", e[3]),
            (!s || 1 & i) && d(t, "checkbox--off", !e[0]),
            (!s || 16 & i) && d(t, "disabled", e[4])
        },
        i(e) {
            s || (b(v, e), s = !0)
        },
        o(e) {
            u(v, e),
            s = !1
        },
        d(e) {
            e && x(t),
            v && v.d(e),
            a = !1,
            i()
        }
    }
}
function S(t, s, a) {
    var i,
        r,
        n = g;
    t.$$.on_destroy.push((() => n()));
    var {$$slots: c={}, $$scope: d} = s,
        {bindStore: o} = s,
        {checkboxAfter: h=!1} = s,
        {variantRedLight: $=!1} = s,
        {variantRed: l=!1} = s,
        {isChecked: f=!1} = s,
        {disabled: b=!1} = s,
        {onOffValues: u} = s,
        x = k();
    return v((() => {
        o && !u ? a(0, f = Boolean(r)) : o && u && a(0, f = r === u[0])
    })), t.$$set = e => {
        "bindStore" in e && a(7, o = e.bindStore),
        "checkboxAfter" in e && a(1, h = e.checkboxAfter),
        "variantRedLight" in e && a(2, $ = e.variantRedLight),
        "variantRed" in e && a(3, l = e.variantRed),
        "isChecked" in e && a(0, f = e.isChecked),
        "disabled" in e && a(4, b = e.disabled),
        "onOffValues" in e && a(8, u = e.onOffValues),
        "$$scope" in e && a(10, d = e.$$scope)
    }, t.$$.update = () => {
        128 & t.$$.dirty && (a(5, i = o && e(o)), n(), n = p(i, (e => a(9, r = e)))),
        800 & t.$$.dirty && i && a(0, f = u ? r === u[0] : Boolean(r))
    }, [f, h, $, l, b, i, () => {
        o && !u ? (R(i, r = !r, r), a(0, f = r)) : o && u ? (R(i, r = r === u[0] ? u[1] : u[0], r), a(0, f = r === u[0])) : a(0, f = !f),
        x("change", f)
    }, o, u, r, d, c]
}
class m extends t {
    constructor(e)
    {
        super(),
        s(this, e, S, C, a, {
            bindStore: 7,
            checkboxAfter: 1,
            variantRedLight: 2,
            variantRed: 3,
            isChecked: 0,
            disabled: 4,
            onOffValues: 8
        })
    }
    get bindStore()
    {
        return this.$$.ctx[7]
    }
    set bindStore(e)
    {
        this.$$set({
            bindStore: e
        }),
        i()
    }
    get checkboxAfter()
    {
        return this.$$.ctx[1]
    }
    set checkboxAfter(e)
    {
        this.$$set({
            checkboxAfter: e
        }),
        i()
    }
    get variantRedLight()
    {
        return this.$$.ctx[2]
    }
    set variantRedLight(e)
    {
        this.$$set({
            variantRedLight: e
        }),
        i()
    }
    get variantRed()
    {
        return this.$$.ctx[3]
    }
    set variantRed(e)
    {
        this.$$set({
            variantRed: e
        }),
        i()
    }
    get isChecked()
    {
        return this.$$.ctx[0]
    }
    set isChecked(e)
    {
        this.$$set({
            isChecked: e
        }),
        i()
    }
    get disabled()
    {
        return this.$$.ctx[4]
    }
    set disabled(e)
    {
        this.$$set({
            disabled: e
        }),
        i()
    }
    get onOffValues()
    {
        return this.$$.ctx[8]
    }
    set onOffValues(e)
    {
        this.$$set({
            onOffValues: e
        }),
        i()
    }
}
export { m as C };

