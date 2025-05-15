const e = W.store;
import { m as t } from "./component.js";
var r = function(r) {
    var {unbindOnDestroy: n=!0} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o = 0,
        s = new Map,
        a = e.on(r, ((e, t) => {
            s.forEach((t => {
                t(e)
            }))
        }));
    return n && t((() => {
        e.off(a)
    })), {
        subscribe(t) {
            var n = o++;
            return s.set(n, t), t(e.get(r)), () => {
                s.delete(n)
            }
        },
        set(t) {
            e.set(r, t)
        },
        get: () => e.get(r),
        update: t => t(e.get(r))
    }
};
export { r as w };

