!function() {
    "use strict";
    (e => {
        const t = "single-file-lazy-load",
            n = "single-file-load-image",
            i = "single-file-image-loaded",
            r = "single-file-request-get-adopted-stylesheets",
            o = "single-file-unregister-request-get-adopted-stylesheets",
            l = "single-file-response-get-adopted-stylesheets",
            s = {
                family: "font-family",
                style: "font-style",
                weight: "font-weight",
                stretch: "font-stretch",
                unicodeRange: "unicode-range",
                variant: "font-variant",
                featureSettings: "font-feature-settings"
            },
            d = e.CustomEvent,
            a = e.document,
            c = e.screen,
            g = e.Element,
            f = e.UIEvent,
            _ = e.Event,
            m = e.FileReader,
            u = e.Blob,
            h = e.JSON,
            y = e.MutationObserver,
            p = new Map,
            E = new Map;
        let v;
        function w() {
            a.addEventListener("single-file-load-deferred-images-start", (() => F())),
            a.addEventListener("single-file-load-deferred-images-keep-zoom-level-start", (() => F(!0))),
            a.addEventListener("single-file-load-deferred-images-end", (() => b())),
            a.addEventListener("single-file-load-deferred-images-keep-zoom-level-end", (() => b(!0))),
            a.addEventListener("single-file-load-deferred-images-reset", P),
            a.addEventListener("single-file-load-deferred-images-keep-zoom-level-reset", (() => {
                const e = a.documentElement.style.getPropertyValue("-sf-transform"),
                    t = a.documentElement.style.getPropertyPriority("-sf-transform"),
                    n = a.documentElement.style.getPropertyValue("-sf-transform-origin"),
                    i = a.documentElement.style.getPropertyPriority("-sf-transform-origin"),
                    r = a.documentElement.style.getPropertyValue("-sf-min-height"),
                    o = a.documentElement.style.getPropertyPriority("-sf-min-height");
                a.documentElement.style.setProperty("transform", e, t),
                a.documentElement.style.setProperty("transform-origin", n, i),
                a.documentElement.style.setProperty("min-height", r, o),
                a.documentElement.style.removeProperty("-sf-transform"),
                a.documentElement.style.removeProperty("-sf-transform-origin"),
                a.documentElement.style.removeProperty("-sf-min-height"),
                P()
            })),
            a.addEventListener("single-file-dispatch-scroll-event-start", (() => {
                v = !0
            })),
            a.addEventListener("single-file-dispatch-scroll-event-end", (() => {
                v = !1
            })),
            a.addEventListener("single-file-block-cookies-start", (() => {
                try {
                    a.__defineGetter__("cookie", (() => {
                        throw new Error("document.cookie temporary blocked by SingleFile")
                    }))
                } catch (e) {}
            })),
            a.addEventListener("single-file-block-cookies-end", (() => {
                delete a.cookie
            })),
            a.addEventListener("single-file-block-storage-start", (() => {
                e._singleFile_localStorage || (e._singleFile_localStorage = e.localStorage, e.__defineGetter__("localStorage", (() => {
                    throw new Error("localStorage temporary blocked by SingleFile")
                }))),
                e._singleFile_indexedDB || (e._singleFile_indexedDB = e.indexedDB, e.__defineGetter__("indexedDB", (() => {
                    throw new Error("indexedDB temporary blocked by SingleFile")
                })))
            })),
            a.addEventListener("single-file-block-storage-end", (() => {
                e._singleFile_localStorage && (delete e.localStorage, e.localStorage = e._singleFile_localStorage, delete e._singleFile_localStorage),
                e._singleFile_indexedDB || (delete e.indexedDB, e.indexedDB = e._singleFile_indexedDB, delete e._singleFile_indexedDB)
            })),
            a.addEventListener("single-file-request-fetch", (async t => {
                a.dispatchEvent(new d("single-file-ack-fetch"));
                const {url: n, options: i} = h.parse(t.detail);
                let r;
                try {
                    const t = await ((t, n) => e.fetch(t, n))(n, i);
                    r = {
                        url: n,
                        response: await t.arrayBuffer(),
                        headers: [...t.headers],
                        status: t.status
                    }
                } catch (e) {
                    r = {
                        url: n,
                        error: e && e.toString()
                    }
                }
                a.dispatchEvent(new d("single-file-response-fetch", {
                    detail: r
                }))
            })),
            a.addEventListener(r, S)
        }
        function F(r) {
            const o = a.scrollingElement || a.documentElement,
                l = o.clientHeight,
                s = o.clientWidth,
                f = Math.max(o.scrollHeight - l, l),
                m = Math.max(o.scrollWidth - s, s);
            if (a.querySelectorAll("[loading=lazy]").forEach((e => {
                e.loading = "eager",
                e.setAttribute(t, "")
            })), o.__defineGetter__("clientHeight", (() => f)), o.__defineGetter__("clientWidth", (() => m)), c.__defineGetter__("height", (() => f)), c.__defineGetter__("width", (() => m)), e._singleFile_innerHeight = e.innerHeight, e._singleFile_innerWidth = e.innerWidth, e.__defineGetter__("innerHeight", (() => f)), e.__defineGetter__("innerWidth", (() => m)), r || e._singleFile_getBoundingClientRect || (e._singleFile_getBoundingClientRect = g.prototype.getBoundingClientRect, g.prototype.getBoundingClientRect = function() {
                const t = e._singleFile_getBoundingClientRect.call(this);
                return this == o && (t.__defineGetter__("height", (() => f)), t.__defineGetter__("bottom", (() => f + t.top)), t.__defineGetter__("width", (() => m)), t.__defineGetter__("right", (() => m + t.left))), t
            }), !e._singleFileImage) {
                const t = e.Image;
                e._singleFileImage = e.Image,
                e.__defineGetter__("Image", (function() {
                    return function() {
                        const e = new t(...arguments),
                            r = new t(...arguments);
                        return r.__defineSetter__("src", (t => {
                            e.src = t,
                            a.dispatchEvent(new d(n, {
                                detail: e.src
                            }))
                        })), r.__defineGetter__("src", (() => e.src)), r.__defineSetter__("srcset", (t => {
                            a.dispatchEvent(new d(n)),
                            e.srcset = t
                        })), r.__defineGetter__("srcset", (() => e.srcset)), r.__defineGetter__("height", (() => e.height)), r.__defineGetter__("width", (() => e.width)), r.__defineGetter__("naturalHeight", (() => e.naturalHeight)), r.__defineGetter__("naturalWidth", (() => e.naturalWidth)), e.decode && r.__defineGetter__("decode", (() => () => e.decode())), e.onload = e.onloadend = e.onerror = t => {
                            a.dispatchEvent(new d(i, {
                                detail: e.src
                            })),
                            r.dispatchEvent(new _(t.type, t))
                        }, r
                    }
                }))
            }
            let u,
                h;
            r ? (u = l / f, h = s / m) : (u = (l + e.scrollY) / f, h = (s + e.scrollX) / m);
            const y = Math.min(u, h);
            if (y < 1) {
                const e = a.documentElement.style.getPropertyValue("transform"),
                    t = a.documentElement.style.getPropertyPriority("transform"),
                    n = a.documentElement.style.getPropertyValue("transform-origin"),
                    i = a.documentElement.style.getPropertyPriority("transform-origin"),
                    o = a.documentElement.style.getPropertyValue("min-height"),
                    l = a.documentElement.style.getPropertyPriority("min-height");
                a.documentElement.style.setProperty("transform-origin", (u < 1 ? "50%" : "0") + " " + (h < 1 ? "50%" : "0") + " 0", "important"),
                a.documentElement.style.setProperty("transform", "scale3d(" + y + ", " + y + ", 1)", "important"),
                a.documentElement.style.setProperty("min-height", 100 / y + "vh", "important"),
                G(),
                r ? (a.documentElement.style.setProperty("-sf-transform", e, t), a.documentElement.style.setProperty("-sf-transform-origin", n, i), a.documentElement.style.setProperty("-sf-min-height", o, l)) : (a.documentElement.style.setProperty("transform", e, t), a.documentElement.style.setProperty("transform-origin", n, i), a.documentElement.style.setProperty("min-height", o, l))
            }
            if (!r) {
                G();
                const e = o.getBoundingClientRect();
                window == window.top && [...p].forEach((([t, n]) => {
                    const i = n.options && n.options.root && n.options.root.getBoundingClientRect,
                        r = i && n.options.root.getBoundingClientRect(),
                        o = E.get(t);
                    if (o) {
                        const l = o.map((t => {
                            const n = t.getBoundingClientRect();
                            return {
                                target: t,
                                intersectionRatio: 1,
                                boundingClientRect: n,
                                intersectionRect: n,
                                isIntersecting: !0,
                                rootBounds: i ? r : e,
                                time: 0
                            }
                        }));
                        n.callback.call(t, l, t)
                    }
                }))
            }
        }
        function b(n) {
            a.querySelectorAll("[" + t + "]").forEach((e => {
                e.loading = "lazy",
                e.removeAttribute(t)
            })),
            n || e._singleFile_getBoundingClientRect && (g.prototype.getBoundingClientRect = e._singleFile_getBoundingClientRect, delete e._singleFile_getBoundingClientRect),
            e._singleFileImage && (delete e.Image, e.Image = e._singleFileImage, delete e._singleFileImage),
            n || G()
        }
        function P() {
            const t = a.scrollingElement || a.documentElement;
            null != e._singleFile_innerHeight && (delete e.innerHeight, e.innerHeight = e._singleFile_innerHeight, delete e._singleFile_innerHeight),
            null != e._singleFile_innerWidth && (delete e.innerWidth, e.innerWidth = e._singleFile_innerWidth, delete e._singleFile_innerWidth),
            delete t.clientHeight,
            delete t.clientWidth,
            delete c.height,
            delete c.width
        }
        if (w(), new y(w).observe(a, {
            childList: !0
        }), e.FontFace) {
            const t = e.FontFace;
            e.FontFace = function() {
                return B(...arguments).then((e => a.dispatchEvent(new d("single-file-new-font-face", {
                    detail: e
                })))), new t(...arguments)
            },
            e.FontFace.prototype = t.prototype,
            e.FontFace.toString = function() {
                return "function FontFace() { [native code] }"
            };
            const n = a.fonts.delete;
            a.fonts.delete = function(e) {
                return B(e.family).then((e => a.dispatchEvent(new d("single-file-delete-font", {
                    detail: e
                })))), n.call(a.fonts, e)
            },
            a.fonts.delete.toString = function() {
                return "function delete() { [native code] }"
            };
            const i = a.fonts.clear;
            a.fonts.clear = function() {
                return a.dispatchEvent(new d("single-file-clear-fonts")), i.call(a.fonts)
            },
            a.fonts.clear.toString = function() {
                return "function clear() { [native code] }"
            }
        }
        if (e.IntersectionObserver) {
            const t = e.IntersectionObserver;
            e.IntersectionObserver = function() {
                const e = new t(...arguments),
                    n = t.prototype.observe || e.observe,
                    i = t.prototype.unobserve || e.unobserve,
                    r = arguments[0],
                    o = arguments[1];
                return n && (e.observe = function(t) {
                    let i = E.get(e);
                    return i || (i = [], E.set(e, i)), i.push(t), n.call(e, t)
                }), i && (e.unobserve = function(t) {
                    let n = E.get(e);
                    return n && (n = n.filter((e => e != t)), n.length ? E.set(e, n) : (E.delete(e), p.delete(e))), i.call(e, t)
                }), p.set(e, {
                    callback: r,
                    options: o
                }), e
            },
            e.IntersectionObserver.prototype = t.prototype,
            e.IntersectionObserver.toString = function() {
                return "function IntersectionObserver() { [native code] }"
            }
        }
        function S(e) {
            const t = e.target.shadowRoot;
            if (e.stopPropagation(), t) {
                t.addEventListener(r, S, {
                    capture: !0
                }),
                t.addEventListener(o, (() => t.removeEventListener(r, S)), {
                    once: !0
                });
                const e = Array.from(t.adoptedStyleSheets).map((e => Array.from(e.cssRules).map((e => e.cssText)).join("\n")));
                e.length && t.dispatchEvent(new d(l, {
                    detail: {
                        adoptedStyleSheets: e
                    }
                }))
            }
        }
        async function B(e, t, n) {
            const i = {};
            return i["font-family"] = e, i.src = t, n && Object.keys(n).forEach((e => {
                s[e] && (i[s[e]] = n[e])
            })), new Promise((e => {
                if (i.src instanceof ArrayBuffer) {
                    const t = new m;
                    t.readAsDataURL(new u([i.src])),
                    t.addEventListener("load", (() => {
                        i.src = "url(" + t.result + ")",
                        e(i)
                    }))
                } else
                    e(i)
            }))
        }
        function G() {
            try {
                e.dispatchEvent(new f("resize")),
                v && e.dispatchEvent(new f("scroll"))
            } catch (e) {}
        }
    })("object" == typeof globalThis ? globalThis : window)
}();

