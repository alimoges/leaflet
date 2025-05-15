import { U as e, x as t, v as a } from "./component.js";
function n(e) {
    return void 0 !== (null == e ? void 0 : e.length) ? e : Array.from(e)
}
function r(e, t) {
    e.d(1),
    t.delete(e.key)
}
function o(e, a) {
    t(e, 1, 1, (() => {
        a.delete(e.key)
    }))
}
function s(t, n, r, o, s, f, i, u, d, h, v, c) {
    for (var y = t.length, k = f.length, l = y, p = {}; l--;)
        p[t[l].key] = l;
    var g = [],
        m = new Map,
        w = new Map,
        M = [];
    l = k;
    for (var x = function() {
        var e = c(s, f, l),
            t = r(e),
            a = i.get(t);
        a ? o && M.push((() => a.p(e, n))) : (a = h(t, e)).c(),
        m.set(t, g[l] = a),
        t in p && w.set(t, Math.abs(l - p[t]))
    }; l--;)
        x();
    var S = new Set,
        b = new Set;
    function j(e) {
        a(e, 1),
        e.m(u, v),
        i.set(e.key, e),
        v = e.first,
        k--
    }
    for (; y && k;) {
        var A = g[k - 1],
            U = t[y - 1],
            q = A.key,
            z = U.key;
        A === U ? (v = A.first, y--, k--) : m.has(z) ? !i.has(q) || S.has(q) ? j(A) : b.has(z) ? y-- : w.get(q) > w.get(z) ? (b.add(q), j(A)) : (S.add(z), y--) : (d(U, i), y--)
    }
    for (; y--;) {
        var B = t[y];
        m.has(B.key) || d(B, i)
    }
    for (; k;)
        j(g[k - 1]);
    return e(M), g
}
export { r as d, n as e, o, s as u };

