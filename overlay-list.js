const e = W.overlays,
    {overlays: r, isMobileOrTablet: s} = W.rootScope,
    a = W.store,
    {t} = W.trans,
    {removeDiacritics: o} = W.utils;
var i,
    n = () => s ? a.get("favOverlaysMobile") : a.get("favOverlaysDesktop"),
    c = {
        wind: ["wind", "gust", "gustAccu", "pressure", "efiWind", "hurricanes"],
        temp: ["temp", "dewpoint", "rh", "deg0", "wetbulbtemp", "solarpower", "uvindex", "efiTemp", "heatmaps"],
        rain: ["radar", "rain", "rainAccu", "snowAccu", "snowcover", "ptype", "thunder", "drought40", "hurricanes"],
        clouds: ["satellite", "clouds", "hclouds", "mclouds", "lclouds", "fog", "cloudtop", "cbase", "visibility", "cape", "ccl", "icing", "turbulence"],
        sea: ["waves", "swell1", "swell2", "swell3", "wwaves", "sst", "currents", "currentsTide"],
        airQ: ["no2", "pm2p5", "aod550", "gtco3", "tcso2", "go3", "cosc", "dustsm"],
        warnings: ["radar", "satellite", "capAlerts", "efiTemp", "efiWind", "efiRain", "hurricanes"],
        drought: ["soilMoisture40", "soilMoisture100", "moistureAnom40", "moistureAnom100", "drought40", "drought100", "fwi", "dfm10h", "topoMap"]
    },
    l = {
        nowcast: ["radar", "satellite", "radarPlus", "hurricanes"],
        wind: ["wind", "gust", "gustAccu", "pressure"],
        temp: ["temp", "dewpoint", "rh", "wetbulbtemp", "solarpower", "uvindex", "heatmaps"],
        rain: ["rain", "rainAccu", "snowAccu", "snowcover", "ptype", "thunder"],
        clouds: ["clouds", "hclouds", "mclouds", "lclouds", "fog", "cloudtop", "cbase", "visibility", "cape", "ccl", "icing", "deg0", "turbulence", "pressure"],
        sea: ["waves", "swell1", "swell2", "swell3", "wwaves", "sst", "currents", "currentsTide"],
        airQ: ["no2", "pm2p5", "aod550", "gtco3", "tcso2", "go3", "cosc", "dustsm"],
        warnings: ["drought40", "fwi", "capAlerts", "efiTemp", "topoMap"]
    },
    u = r => {
        var s = e[r];
        if (!s)
            return null;
        var {icon: a, menuIcon: o, onClick: i, promoBadge: n, promoBadgeColor: c} = s;
        return {
            ident: r,
            icon: o || a,
            name: s.getMenuName(),
            description: r in t ? t[r] : "",
            onClick: i,
            promoBadge: n,
            promoBadgeColor: c,
            thumbnail: s.getMenuImagePath()
        }
    },
    d = r.filter((r => {
        var s = e[r];
        return s && s.icon && s.trans && !s.partOf
    })),
    p = ["radar", "satellite", "radarPlus", "wind", "rain", "temp", "hurricanes", "clouds", "waves", "rainAccu", "thunder", "pm2p5", "snowAccu", "lclouds", "cbase", "swell1", "visibility", "gust", "currents", "ptype", "heatmaps"],
    m = p.slice(0, 10),
    g = d.filter((e => !p.includes(e))),
    w = () => {
        var e = [...n()];
        return s && e.length > 0 && e.sort(((e, r) => {
            var s = [...p, ...g];
            return s.indexOf(e) - s.indexOf(r)
        })), e
    },
    h = () => {
        var e = w();
        return p.forEach((r => !e.includes(r) && e.push(r))), d.forEach((r => !e.includes(r) && e.push(r))), e
    },
    v = e => e.map(u).filter((e => null !== e)),
    f = (i = [...p], d.forEach((e => !i.includes(e) && i.push(e))), v(i)),
    b = e => {
        e = o(e);
        var r = new RegExp("\\b".concat(e), "i"),
            s = new RegExp(e, "i");
        return f.map((a => {
            var {description: t, ident: i} = a,
                n = o(a.name),
                c = 0;
            return r.test(n) ? c += 4 + e.length / n.length : s.test(n) && (c += 3), r.test("".concat(t, " ").concat(i)) && (c += 1), {
                rank: c,
                payload: a
            }
        })).filter((e => e.rank > 0)).sort(((e, r) => e.rank < r.rank ? 1 : -1)).map((e => e.payload))
    };
export { h as a, n as b, c, m as d, l as e, b as f, w as g, u as h, v as i, f as m };

