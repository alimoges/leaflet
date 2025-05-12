const t = W.utils,
    a = W.http,
    {Calendar: n} = W.Calendar;
var e = n.getMidnight().getTime(),
    r = 24 * t.tsHour,
    o = {
        start: Date.now(),
        end: e + r
    };
function c(n, e, r) {
    return a.get("/capalerts/".concat(t.normalizeLatLon(n), "/").concat(t.normalizeLatLon(e), "?detailed=true").concat(r ? "&lang=".concat(r) : ""))
}
function s(t) {
    return !(t.start > o.end || t.end < o.start)
}
function d(t) {
    return {
        A: "Advisory",
        M: "Moderate",
        S: "Severe",
        E: "Extreme"
    }[t]
}
function i(t) {
    return {
        map: {
            A: "gray",
            M: "#b3b300",
            S: "#c17d00",
            E: "#a50000"
        }[t] || "#97b4b9",
        detail: {
            A: "gray",
            M: "#c7c709",
            S: "orange",
            E: "red"
        }[t] || "#97b4b9"
    }
}
function u(t) {
    return {
            R: "/",
            T: "",
            N: "",
            F: "",
            I: "",
            H: "",
            L: "",
            W: "|",
            G: "",
            C: "",
            S: "",
            Q: "",
            A: "P",
            "-": ""
        }[t] || ""
}
export { i as a, u as b, r as c, o as d, s as f, d as g, c as l, e as m };

