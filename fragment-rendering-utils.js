const {scaleLinear: a, canvasRatio: e, tsDay: t} = W.utils;
import { g as r, a as i, w as o, t as n } from "./image-renderers.js";
var s = (a, e) => {
        var {summary: t, data: r} = a,
            i = Object.keys(t),
            {ts: o} = r;
        t[i[1]].timestamp < Date.now() && i.shift();
        var n = e && i.length > e ? i.slice(0, e) : i,
            s = t[n[n.length - 1]],
            l = t[n[0]].index,
            g = s.index + s.segments;
        return {
            usedDays: n,
            minIndex: l,
            maxIndex: g,
            lastDay: s,
            minTs: o[l],
            maxTs: o[g > o.length - 1 ? o.length - 1 : g]
        }
    },
    l = "rgba(255,255,255,1)",
    g = "rgba(255,255,255,0)",
    m = (t, s, m, d, f, h, v) => {
        var p = Math.max(...d),
            u = Math.min(...d) - 1,
            x = f * e,
            y = h * e;
        t.width = x,
        t.height = y;
        for (var C = a({
                domain: [u, p],
                range: [h, 0]
            }), S = m.map(((a, t) => [s.get(a) * e, C.get(d[t]) * e])), [T, b] = S[S.length - 1], c = 1; c < 5; c++)
            S.push([T + 3 * c * e, b]);
        if (v === m[0])
            for (var [D, w] = S[0], j = 1; j < 5; j++)
                S.unshift([D - 3 * j * e, w]);
        for (var I = S.length - 4, L = 0; L < I; ++L)
            S[L + 2][1] = .6 * S[L + 2][1] + .15 * (S[L + 1][1] + S[L + 3][1]) + .05 * (S[L][1] + S[L + 4][1]);
        var M = t.getContext("2d");
        M.resetTransform(),
        M.beginPath(),
        M.moveTo(S[1][0], y),
        M.lineTo(S[1][0], S[1][1]);
        for (var O = 0; O < I + 1; ++O) {
            var k = r(S[O], S[O + 1], S[O + 2]),
                z = r(S[O + 3], S[O + 2], S[O + 1]);
            M.bezierCurveTo(k[0], k[1], z[0], z[1], S[O + 2][0], S[O + 2][1])
        }
        M.lineTo(S[I + 2][0], y),
        M.fillStyle = i(M, C, n),
        M.fill(),
        M.globalCompositeOperation = "destination-out",
        M.fillStyle = o(M, y, 0, 1),
        M.fill();
        var G = 10 * e / x,
            P = M.createLinearGradient(0, 0, x, 0);
        return P.addColorStop(0, l), P.addColorStop(G, g), P.addColorStop(1 - G, g), P.addColorStop(1, l), M.fillStyle = P, M.fill(), C
    },
    d = (a, e, r, i, o, n) => {
        var {timestamp: s} = r[e[n]];
        return 0 === n ? a.get(r[e[n + 1]].timestamp) - a.get(i) : a.get(s + t) - a.get(s)
    };
export { d as a, s as g, m as r };

