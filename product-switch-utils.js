const {seaProducts: s, airQualityProducts: e} = W.rootScope;
var c = ["ecmwf", "gfs", "icon", "camsEu", "cams", "ecmwfWaves", "bomAccess", "bomAccessAd", "bomAccessBn", "bomAccessDn", "bomAccessNq", "bomAccessPh", "bomAccessSy", "bomAccessVt", "hrrrAlaska", "hrrrConus", "canHrdps", "canRdwpsWaves", "czeAladin", "namConus", "namHawaii", "namAlaska", "gfsWaves", "iconD2", "iconEu", "iconEuWaves", "nems", "arome", "aromeAntilles", "aromeFrance", "aromeReunion", "ukv", "jmaMsm", "jmaCwmWaves"],
    a = (a, n, r, o) => {
        var m = s.includes(a),
            i = e.includes(a),
            u = o && r,
            l = c.filter((c => {
                var a = s.includes(c),
                    r = e.includes(c);
                return n.includes(c) && m === a && i === r
            })).filter((s => !u || r.includes(s))),
            t = l.length;
        if (u) {
            var d = l.slice(0, 3);
            return d.includes(a) || (d.unshift(a), d.pop()), {
                products: d,
                length: t
            }
        }
        return {
            length: t,
            products: l
        }
    };
export { a as g };

