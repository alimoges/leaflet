import { n as r, a8 as e, U as n, s as a, z as t } from "./component.js";
var s = [];
function o(e) {
    var n,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
        o = new Set;
    function i(r) {
        if (a(e, r) && (e = r, n)) {
            var t = !s.length;
            for (var i of o)
                i[1](),
                s.push(i, e);
            if (t) {
                for (var u = 0; u < s.length; u += 2)
                    s[u][0](s[u + 1]);
                s.length = 0
            }
        }
    }
    function u(r) {
        i(r(e))
    }
    return {
        set: i,
        update: u,
        subscribe: function(a) {
            var s = [a, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r];
            return o.add(s), 1 === o.size && (n = t(i, u) || r), a(e), () => {
                o.delete(s),
                0 === o.size && n && (n(), n = null)
            }
        }
    }
}
function i(a, s, i) {
    var u = !Array.isArray(a),
        f = u ? [a] : a;
    if (!f.every(Boolean))
        throw new Error("derived() expects stores as input, got a falsy value");
    var v,
        l = s.length < 2;
    return v = (a, o) => {
        var i = !1,
            v = [],
            c = 0,
            d = r,
            h = () => {
                if (!c) {
                    d();
                    var e = s(u ? v[0] : v, a, o);
                    l ? a(e) : d = t(e) ? e : r
                }
            },
            p = f.map(((r, n) => e(r, (r => {
                v[n] = r,
                c &= ~(1 << n),
                i && h()
            }), (() => {
                c |= 1 << n
            }))));
        return i = !0, h(), function() {
            n(p),
            d(),
            i = !1
        }
    }, {
        subscribe: o(i, v).subscribe
    }
}
export { i as d, o as w };

