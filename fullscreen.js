var e = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
    n = () => document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null,
    l = () => !!n(),
    t = function(n) {
        var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body;
        e.forEach((e => {
            l.addEventListener(e, n)
        }))
    },
    r = function(n) {
        var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body;
        e.forEach((e => {
            l.removeEventListener(e, n)
        }))
    },
    u = function(e) {
        var t,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        if (void 0 === r && (r = !l()), e === n() && r === l())
            return Promise.resolve();
        if (r)
            if (e.requestFullscreen)
                t = e.requestFullscreen();
            else if (e.webkitRequestFullscreen)
                t = e.webkitRequestFullscreen();
            else if (e.mozRequestFullScreen)
                t = e.mozRequestFullScreen();
            else {
                if (!e.msRequestFullscreen)
                    throw new Error("Could not enter fullscreen mode.");
                t = e.msRequestFullscreen()
            }
        else if (document.exitFullscreen)
            t = document.exitFullscreen();
        else if (document.webkitExitFullscreen)
            t = document.webkitExitFullscreen();
        else if (document.mozCancelFullScreen)
            t = document.mozCancelFullScreen();
        else {
            if (!document.msExitFullscreen)
                throw new Error("Could not exit fullscreen mode.");
            t = document.msExitFullscreen()
        }
        return t || Promise.resolve()
    },
    o = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
        return u(document.body, e)
    };
export { t as a, o as b, n as g, r, u as t };

