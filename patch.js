// Patch version: 2025-05-07T04-19-23-303Z
const {t: e} = W.trans,
    t = W.userFavs,
    {$: n, template: o, isValidLang: a} = W.utils,
    {Window: r} = W.Window,
    i = W.rootScope,
    l = W.store;
var d = e => {
    var t = e => {
        var [t, n, o] = e.split(".").map(Number);
        return 1e3 * t + 100 * n + o
    };
    return t(e) <= t(i.version)
};
function s(e, t, n, o, a, r, i) {
    try {
        var l = e[r](i),
            d = l.value
    } catch (e) {
        return void n(e)
    }
    l.done ? t(d) : Promise.resolve(d).then(o, a)
}
var c = {
        id: "alertsMigration",
        end: "2025-05-16T00:00:00.000Z",
        counter: 1e4,
        delay: 0,
        filter: () => d("44.0.0"),
        run() {
            return (n = function* () {
                if ((yield t.getAll()).some((e => "alert" === e.type))) {
                    var n = new Date(2025, 4, 15);
                    new r({
                        ident: "alerts-migration",
                        className: "top-message bg-orange",
                        html: "<div>".concat(o(e.PATCH_FAVS_MIGRATION_WARNING, {
                            date: n.toLocaleDateString()
                        }), "</div>")
                    }).open()
                }
            }, function() {
                var e = this,
                    t = arguments;
                return new Promise((function(o, a) {
                    var r = n.apply(e, t);
                    function i(e) {
                        s(r, o, a, i, l, "next", e)
                    }
                    function l(e) {
                        s(r, o, a, i, l, "throw", e)
                    }
                    i(void 0)
                }))
            })();
            var n
        }
    },
    u = Date.prototype.toLocaleDateString,
    p = {
        construct(e, t) {
            var n;
            a(t[0]) || (t[0] = null !== (n = l.get("usedLang")) && void 0 !== n ? n : "en-US");
            return new e(...t)
        }
    };
var m = "2025-05-07T04-19-23-303Z",
    v = "#promo-obsolete-app{color:white;text-shadow:0px 0px 2px black;display:block;line-height:1.4;text-align:center;overflow:hidden;letter-spacing:.05em;padding:.5em 1em}",
    g = [{
        id: "obsoleteApp24",
        end: "2025-12-31T20:00:00.000Z",
        counter: 1e4,
        delay: 0,
        filter: () => "mobile" === i.target && !d("43.0.0"),
        run() {
            var t = ["#d49500", "#d40000", "#d4009b", "#8400d4", "#2200d4", "#0d869a", "#177900", "#ad7100"],
                o = t[Math.round(Math.random() * (t.length - 1))];
            (e => {
                if (l.get("startupWeatherShown")) {
                    var t = n('[data-ref="exclusivePromo"]');
                    if (!t)
                        throw new Error("Element for patch not found!");
                    t.classList.add("weather-box"),
                    e instanceof HTMLElement ? (t.innerHTML = "", t.appendChild(e)) : t.innerHTML = e,
                    setTimeout((() => t.classList.add("show")), 300),
                    l.once("startupWeatherShown", (e => {
                        e || (t.className = "animation", t.innerHTML = "")
                    }))
                }
            })('<div id="promo-obsolete-app" style="background: '.concat(o, '">').concat(e.OBSOLETE_APP, "</div>"))
        }
    }, c],
    h = [];
Intl.DateTimeFormat = new Proxy(Intl.DateTimeFormat, p),
Intl.Locale = new Proxy(Intl.Locale, p),
Date.prototype.toLocaleDateString = function(e, t) {
    var n;
    return e && a("string" == typeof e ? e : e[0]) || (e = null !== (n = l.get("usedLang")) && void 0 !== n ? n : "en-US"), u.call(this, e, t)
},
function() {
    if (d("44.0.0")) {
        var e = document.querySelector("[data-plugin=bottom-below-controls-mobile]");
        e && (e.style.pointerEvents = "auto")
    }
}();
export { v as __css, m as __version, g as exclusivePromos, h as otherPromos };
//# sourceMappingURL=patch.js.map

