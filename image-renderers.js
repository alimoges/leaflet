function t(t, i, r) {
    return (i = function(t) {
        var i = function(t, i) {
            if ("object" != typeof t || null === t)
                return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
                var s = r.call(t, i || "default");
                if ("object" != typeof s)
                    return s;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === i ? String : Number)(t)
        }(t, "string");
        return "symbol" == typeof i ? i : String(i)
    }(i)) in t ? Object.defineProperty(t, i, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[i] = r, t
}
const {canvasRatio: i} = W.utils;
class r {
    constructor(t, s, e, a)
    {
        var h = t instanceof r;
        if (this.canvasRatio = i, h)
            this.num = t.num,
            this.canvas = t.canvas,
            this.ctx = t.ctx,
            this.tdWidth = t.tdWidth,
            this.w = t.w,
            this.h = t.h;
        else {
            if (void 0 === s || void 0 === e || void 0 === a)
                throw new Error("Invalid arguments passed to ImageMaker constructor");
            var o = t.getContext("2d");
            if (!o)
                throw new Error("Cannot initialize canvas context!");
            this.num = s,
            this.canvas = t,
            this.tdWidth = e,
            this.h = a,
            this.w = Math.floor(s * e),
            this.ctx = o,
            this.canvas.width = this.getPixelRatioAdjustedSize(this.num * this.tdWidth),
            this.canvas.height = this.getPixelRatioAdjustedSize(this.h),
            this.canvas.style.width = this.w + "px",
            this.canvas.style.height = this.h + "px",
            this.resetCanvas()
        }
    }
    getPixelRatioAdjustedSize(t)
    {
        return Math.round(t * this.canvasRatio)
    }
    setHeight(t)
    {
        return this.h = t, this
    }
    setOffset(t)
    {
        return this.ctx.translate(0, t), this
    }
    resetCanvas()
    {
        return this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.scale(this.canvasRatio, this.canvasRatio), this
    }
    sanitizeData(t)
    {
        for (var i = [], r = t[0] || 0, s = 0; s < t.length; s++) {
            var e = t[s];
            null === e || isNaN(e) || void 0 === e ? i[s] = r : (i[s] = e, r = e)
        }
        return i
    }
}
class s extends r {
    constructor()
    {
        super(...arguments),
        t(this, "bottomWhitten", !0)
    }
    getY(t, i, r, s)
    {
        return s * (r - t) / (r - i)
    }
    createGradient(t, i, r)
    {
        for (var s, e, a = this.fillColors.length, h = this.fillColors[0][0], o = this.fillColors[a - 1][0], n = 1 / (o - h), l = this.h / (t - i), c = l * (o - i), d = l * (h - i), u = this.ctx.createLinearGradient(0, d, 0, c), f = 0; f < a; ++f)
            e = this.fillColors[f][1],
            s = n * (this.fillColors[f][0] - h),
            u.addColorStop(s, "rgba( ".concat(e[0], ", ").concat(e[1], ", ").concat(e[2], ", ").concat(r, " )"));
        return u
    }
    maskEnds(t)
    {
        var i = this.ctx,
            r = i.createLinearGradient(0, 0, t, 0);
        return i.globalCompositeOperation = "destination-out", r.addColorStop(0, "rgba(255,255,255,1)"), r.addColorStop(1, "rgba(255,255,255,0)"), i.fillStyle = r, i.fillRect(0, 0, t, this.h), (r = i.createLinearGradient(this.w - t, 0, this.w, 0)).addColorStop(0, "rgba(255,255,255,0)"), r.addColorStop(1, "rgba(255,255,255,1)"), i.fillStyle = r, i.fillRect(this.w - t, 0, this.w, this.h), this
    }
    setViewport(t, i)
    {
        return this.viewport = [t, i], this
    }
    findMinMax(t)
    {
        return [Math.min(...t), Math.max(...t)]
    }
    whiteBottom(t)
    {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            r = .5 * this.h,
            s = t.createLinearGradient(0, r, 0, this.h);
        i < 1 && (t.globalCompositeOperation = "destination-out"),
        s.addColorStop(0, "rgba(255,255,255,0.0)"),
        s.addColorStop(1, "rgba(255,255,255,1.0)"),
        t.fillStyle = s,
        t.fillRect(0, r, this.w, .5 * this.h)
    }
}
var e = 1e-6;
function a(t, i) {
    return (i[1] - t[1]) / (i[0] - t[0])
}
function h(t) {
    for (var i, r, s, h, o = function(t) {
            for (var i = [], r = t[0], s = t[1], e = i[0] = a(r, s), h = 1, o = t.length - 1; h < o; h++)
                r = s,
                s = t[h + 1],
                i[h] = .5 * (e + (e = a(r, s)));
            return i[h] = e, i
        }(t), n = t.length - 1, l = [], c = 0; c < n; c++)
        s = a(t[c], t[c + 1]),
        Math.abs(s) < e ? o[c] = o[c + 1] = 0 : (h = (i = o[c] / s) * i + (r = o[c + 1] / s) * r) > 9 && (h = 3 * s / Math.sqrt(h), o[c] = h * i, o[c + 1] = h * r);
    for (var d = 0; d <= n; d++)
        h = (t[Math.min(n, d + 1)][0] - t[Math.max(0, d - 1)][0]) / (6 * (1 + o[d] * o[d])),
        l.push([h || 0, o[d] * h || 0]);
    return l
}
function o(t) {
    var i = h(t),
        r = t[1],
        s = t[0],
        e = [],
        a = i[1],
        o = i[0];
    e.push(s, [s[0] + o[0], s[1] + o[1], r[0] - a[0], r[1] - a[1], r[0], r[1]]);
    for (var n = 2, l = i.length; n < l; n++) {
        var c = t[n],
            d = i[n];
        e.push([c[0] - d[0], c[1] - d[1], c[0], c[1]])
    }
    return e
}
var n = function(t, r, s) {
        for (var e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, a = s.length, h = s[0][0], o = s[a - 1][0], n = 1 / (o - h), l = r.get(h) * i, c = r.get(o) * i, d = t.createLinearGradient(0, l, 0, c), u = 0; u < a; ++u) {
            var [f, v] = s[u],
                g = n * (f - h);
            d.addColorStop(g, "rgba( ".concat(v[0], ", ").concat(v[1], ", ").concat(v[2], ", ").concat(e, " )"))
        }
        return d
    },
    l = function(t, i, r) {
        var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .7,
            e = t.createLinearGradient(0, i, 0, r);
        return e.addColorStop(0, "rgba(255,255,255,".concat(s, ")")), e.addColorStop(1, "rgba(255,255,255,0.0)"), e
    },
    c = (t, i, r) => {
        var s = 0;
        return r[1] <= i[1] && t[1] <= i[1] || r[1] >= i[1] && t[1] >= i[1] || (s = r[1] - t[1]), [.2 * (r[0] - t[0]) + i[0], .2 * s + i[1]]
    },
    d = [[203, [255, 209, 233, 255]], [219, [183, 225, 255, 255]], [233, [229, 137, 255, 255]], [243, [153, 170, 255, 255]], [258, [192, 195, 243, 255]], [263, [251, 206, 241, 255]], [268, [195, 251, 253, 255]], [272, [197, 219, 255, 255]], [274, [206, 255, 203, 255]], [278, [171, 245, 166, 255]], [283, [238, 239, 175, 255]], [288, [239, 221, 198, 255]], [293, [241, 205, 205, 255]], [298, [247, 214, 241, 255]], [303, [248, 218, 249, 255]], [308, [222, 213, 253, 255]], [331, [208, 200, 251, 255]]];
class u extends s {
    render(t)
    {
        var i,
            r,
            s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            e = this.sanitizeData(t),
            a = this.ctx,
            h = e.length,
            o = this.tdWidth,
            n = o >> 1,
            l = this.h,
            d = [],
            u = -o - n,
            [f, v] = this.viewport || this.findMinMax(e);
        for (r = 0; r < h + 4; ++r)
            i = e[Math.max(0, Math.min(r - 2, h - 1))],
            d.push([u, this.getY(i, f, v, l), i]),
            u += o;
        for (r = 0; r < h; ++r)
            d[r + 2][1] = .6 * d[r + 2][1] + .15 * (d[r + 1][1] + d[r + 3][1]) + .05 * (d[r][1] + d[r + 4][1]);
        for (a.beginPath(), a.moveTo(d[1][0], l), a.lineTo(d[1][0], d[1][1]), r = 0; r < h + 1; ++r) {
            var g = c(d[r], d[r + 1], d[r + 2]),
                x = c(d[r + 3], d[r + 2], d[r + 1]);
            a.bezierCurveTo(g[0], g[1], x[0], x[1], d[r + 2][0], d[r + 2][1])
        }
        return a.lineTo(d[h + 2][0], l), this.fillColors ? (a.fillStyle = this.createGradient(f, v, s), a.fill()) : (a.lineWidth = this.lineWidth, a.strokeStyle = this.strokeStyle, a.stroke()), this.bottomWhitten && this.whiteBottom(a, s), this
    }
}
class f extends u {
    constructor()
    {
        super(...arguments),
        t(this, "fillColors", d)
    }
    findMinMax(t)
    {
        var i = Math.min(...t),
            r = Math.max(...t);
        i -= 1;
        var s = (r = (i -= Math.round(.05 * (r - i))) + Math.round(r - i)) - i;
        return s < 10 && (s = Math.round(.5 * (10 - s)), i -= Math.round(.5 * s), r += Math.round(1.5 * s)), [i, r]
    }
}
class v extends r {
    constructor()
    {
        super(...arguments),
        t(this, "dayColor", "rgb(248, 248, 248, 1)"),
        t(this, "nightColor", "rgba(234,234,245,1)")
    }
    render(t)
    {
        for (var {isDay: i} = t, r = 0; r < i.length; r++) {
            var s = i[r],
                e = r * this.tdWidth,
                a = (r + 1) * this.tdWidth,
                h = e + Math.abs(s) * this.tdWidth;
            this.ctx.fillStyle = this.nightColor,
            1 === s ? (this.ctx.fillStyle = this.dayColor, this.ctx.fillRect(e, 0, a, this.h)) : 0 === s ? (this.ctx.fillStyle = this.nightColor, this.ctx.fillRect(e, 0, a, this.h)) : s < 0 ? (this.ctx.fillStyle = this.dayColor, this.ctx.fillRect(e, 0, h, this.h), this.ctx.fillStyle = this.nightColor, this.ctx.fillRect(h, 0, a, this.h)) : (this.ctx.fillStyle = this.nightColor, this.ctx.fillRect(e, 0, h, this.h), this.ctx.fillStyle = this.dayColor, this.ctx.fillRect(h, 0, a, this.h))
        }
        return this
    }
}
export { v as D, r as I, f as T, n as a, u as b, o as c, s as d, c as g, d as t, l as w };

