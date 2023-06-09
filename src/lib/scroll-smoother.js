!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function (e) {
    "use strict";
    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
        }
    }
    function s() {
        return "undefined" != typeof window
    }
    function t() {
        return N || s() && (N = window.gsap) && N.registerPlugin && N
    }
    var N, B, F, W, I, V, Y, j, q, D, Q, J, K, X, Z, i = "ScrollSmoother",
        r = (
            ScrollSmoother.register = function register(e) {
                return B || (N = e || t(),
                    s() && window.document && (F = window,
                        W = document,
                        I = W.documentElement,
                        V = W.body),
                    N && (Y = N.utils.toArray,
                        j = N.utils.clamp,
                        Q = N.parseEase("expo"),
                        X = N.core.context || function () { }
                        ,
                        Z = N.delayedCall(.2, function () {
                            return q.isRefreshing || D && D.refresh()
                        }).pause(),
                        q = N.core.globals().ScrollTrigger,
                        N.core.globals("ScrollSmoother", ScrollSmoother),
                        V && q && (J = q.core._getVelocityProp,
                            K = q.core._inputObserver,
                            ScrollSmoother.refresh = q.refresh,
                            B = 1))),
                    B
            },
            function _createClass(e, t, r) {
                return t && _defineProperties(e.prototype, t),
                    r && _defineProperties(e, r),
                    e
            }(ScrollSmoother, [{
                key: "progress",
                get: function get() {
                    return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
                }
            }]),
            ScrollSmoother
        );
    function ScrollSmoother(t) {
        var o = this;
        B || ScrollSmoother.register(N) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
            t = this.vars = t || {},
            D && D.kill(),
            X(D = this);
        function Ja() {
            return U.update(-O)
        }
        function La() {
            return n.style.overflow = "visible"
        }
        function Na(e) {
            e.update();
            var t = e.getTween();
            t && (t.pause(),
                t._time = t._dur,
                t._tTime = t._tDur),
                h = !1,
                e.animation.progress(e.progress, !0)
        }
        function Oa(e, t) {
            (e !== O && !u || t) && (x && (e = Math.round(e)),
                _ && (n.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)",
                    n._gsap.y = e + "px"),
                H = e - O,
                O = e,
                q.isUpdating || ScrollSmoother.isRefreshing || q.update())
        }
        function Pa(e) {
            return arguments.length ? (e < 0 && (e = 0),
                L.y = -e,
                h = !0,
                u ? O = -e : Oa(-e),
                q.isRefreshing ? i.update() : k(e / C),
                this) : -O
        }
        function Sa(e) {
            v.scrollTop = 0,
                e.target.contains && e.target.contains(v) || T && !1 === T(o, e) || (q.isInViewport(e.target) || e.target === g || o.scrollTo(e.target, !1, "center center"),
                    g = e.target)
        }
        function Ta(e) {
            var r, n, o, i;
            S.forEach(function (t) {
                r = t.pins,
                    i = t.markers,
                    e.forEach(function (e) {
                        t.trigger && e.trigger && t !== e && (e.trigger === t.trigger || e.pinnedContainer === t.trigger || t.trigger.contains(e.trigger)) && (n = e.start,
                            o = (n - t.start - t.offset) / t.ratio - (n - t.start),
                            r.forEach(function (e) {
                                return o -= e.distance / t.ratio - e.distance
                            }),
                            e.setPositions(n + o, e.end + o),
                            e.markerStart && i.push(N.quickSetter([e.markerStart, e.markerEnd], "y", "px")),
                            e.pin && 0 < e.end && (o = e.end - e.start,
                                r.push({
                                    start: e.start,
                                    end: e.end,
                                    distance: o,
                                    trig: e
                                }),
                                t.setPositions(t.start, t.end + o),
                                t.vars.onRefresh(t)))
                    })
            })
        }
        function Ua() {
            La(),
                requestAnimationFrame(La),
                S && (S.forEach(function (e) {
                    var t = e.start
                        , r = e.auto ? Math.min(q.maxScroll(e.scroller), e.end) : t + (e.end - t) / e.ratio
                        , n = (r - e.end) / 2;
                    t -= n,
                        r -= n,
                        e.offset = n || 1e-4,
                        e.pins.length = 0,
                        e.setPositions(Math.min(t, r), Math.max(t, r)),
                        e.vars.onRefresh(e)
                }),
                    Ta(q.sort())),
                U.reset()
        }
        function Va() {
            return q.addEventListener("refresh", Ua)
        }
        function Wa() {
            return S && S.forEach(function (e) {
                return e.vars.onRefresh(e)
            })
        }
        function Xa() {
            return S && S.forEach(function (e) {
                return e.vars.onRefreshInit(e)
            }),
                Wa
        }
        function Ya(t, r, n, o) {
            return function () {
                var e = "function" == typeof r ? r(n, o) : r;
                return e || 0 === e || (e = o.getAttribute("data-" + R + t) || ("speed" === t ? 1 : 0)),
                    o.setAttribute("data-" + R + t, e),
                    "auto" === e ? e : parseFloat(e)
            }
        }
        function Za(r, e, t, n, o) {
            function Pb() {
                e = f(),
                    t = d(),
                    i = parseFloat(e) || 1,
                    c = (a = "auto" === e) ? 0 : .5,
                    l && l.kill(),
                    l = t && N.to(r, {
                        ease: Q,
                        overwrite: !1,
                        y: "+=0",
                        duration: t
                    }),
                    s && (s.ratio = i,
                        s.autoSpeed = a)
            }
            function Qb() {
                g.y = h + "px",
                    g.renderTransform(1),
                    Pb()
            }
            function Ub(e) {
                if (a) {
                    Qb();
                    var t = function _autoDistance(e, t) {
                        var r, n, o = e.parentNode || I, i = e.getBoundingClientRect(), s = o.getBoundingClientRect(), a = s.top - i.top, l = s.bottom - i.bottom, c = (Math.abs(a) > Math.abs(l) ? a : l) / (1 - t), u = -c * t;
                        return 0 < c && (n = .5 == (r = s.height / (F.innerHeight + s.height)) ? 2 * s.height : 2 * Math.min(s.height, -c * r / (2 * r - 1)) * (t || 1),
                            u += t ? -n * t : -n / 2,
                            c += n),
                        {
                            change: c,
                            offset: u
                        }
                    }(r, j(0, 1, -e.start / (e.end - e.start)));
                    m = t.change,
                        u = t.offset
                } else
                    m = (e.end - e.start) * (1 - i),
                        u = 0;
                p.forEach(function (e) {
                    return m -= e.distance * (1 - i)
                }),
                    e.vars.onUpdate(e),
                    l && l.progress(1)
            }
            o = ("function" == typeof o ? o(n, r) : o) || 0;
            var i, s, a, l, c, u, f = Ya("speed", e, n, r), d = Ya("lag", t, n, r), h = N.getProperty(r, "y"), g = r._gsap, p = [], w = [], m = 0;
            return Pb(),
                (1 !== i || a || l) && (Ub(s = q.create({
                    trigger: a ? r.parentNode : r,
                    start: "top bottom+=" + o,
                    end: "bottom top-=" + o,
                    scroller: v,
                    scrub: !0,
                    refreshPriority: -999,
                    onRefreshInit: Qb,
                    onRefresh: Ub,
                    onKill: function onKill(e) {
                        var t = S.indexOf(e);
                        0 <= t && S.splice(t, 1),
                            Qb()
                    },
                    onUpdate: function onUpdate(e) {
                        var t, r, n, o = h + m * (e.progress - c), i = p.length, s = 0;
                        if (e.offset) {
                            if (i) {
                                for (r = -O,
                                    n = e.end; i--;) {
                                    if ((t = p[i]).trig.isActive || r >= t.start && r <= t.end)
                                        return void (l && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001,
                                            t.trig.update(0, 0, 1),
                                            l.resetTo("y", parseFloat(g.y), -H, !0),
                                            A && l.progress(1)));
                                    r > t.end && (s += t.distance),
                                        n -= t.distance
                                }
                                o = h + s + m * ((N.utils.clamp(e.start, e.end, r) - e.start - s) / (n - e.start) - c)
                            }
                            o = function _round(e) {
                                return Math.round(1e5 * e) / 1e5 || 0
                            }(o + u),
                                w.length && !a && w.forEach(function (e) {
                                    return e(o - s)
                                }),
                                l ? (l.resetTo("y", o, -H, !0),
                                    A && l.progress(1)) : (g.y = o + "px",
                                        g.renderTransform(1))
                        }
                    }
                })),
                    N.core.getCache(s.trigger).stRevert = Xa,
                    s.startY = h,
                    s.pins = p,
                    s.markers = w,
                    s.ratio = i,
                    s.autoSpeed = a,
                    r.style.willChange = "transform"),
                s
        }
        var n, v, e, i, S, s, a, l, c, u, r, f, d, h, g, p = t.smoothTouch, w = t.onUpdate, m = t.onStop, b = t.smooth, T = t.onFocusIn, P = t.normalizeScroll, x = t.wholePixels, E = this, R = t.effectsPrefix || "", k = q.getScrollFunc(F), _ = 1 === q.isTouch ? !0 === p ? .8 : parseFloat(p) || 0 : 0 === b || !1 === b ? 0 : parseFloat(b) || .8, C = _ && +t.speed || 1, O = 0, H = 0, A = 1, U = J(0), L = {
            y: 0
        }, M = "undefined" != typeof ResizeObserver && !1 !== t.autoResize && new ResizeObserver(function () {
            if (!q.isRefreshing) {
                var e = q.maxScroll(v);
                e < -O && Pa(e),
                    Z.restart(!0)
            }
        }
        );
        function refreshHeight() {
            return e = n.clientHeight,
                n.style.overflow = "visible",
                V.style.height = F.innerHeight + (e - F.innerHeight) / C + "px",
                e - F.innerHeight
        }
        Va(),
            q.addEventListener("killAll", Va),
            N.delayedCall(.5, function () {
                return A = 0
            }),
            this.scrollTop = Pa,
            this.scrollTo = function (e, t, r) {
                var n = N.utils.clamp(0, q.maxScroll(F), isNaN(e) ? o.offset(e, r) : +e);
                t ? u ? N.to(o, {
                    duration: _,
                    scrollTop: n,
                    overwrite: "auto",
                    ease: Q
                }) : k(n) : Pa(n)
            }
            ,
            this.offset = function (e, t) {
                var r, n = (e = Y(e)[0]).style.cssText, o = q.create({
                    trigger: e,
                    start: t || "top top"
                });
                return S && Ta([o]),
                    r = o.start / C,
                    o.kill(!1),
                    e.style.cssText = n,
                    N.core.getCache(e).uncache = 1,
                    r
            }
            ,
            this.content = function (e) {
                if (arguments.length) {
                    var t = Y(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || V.children[0];
                    return t !== n && (c = (n = t).getAttribute("style") || "",
                        M && M.observe(n),
                        N.set(n, {
                            overflow: "visible",
                            width: "100%",
                            boxSizing: "border-box",
                            y: "+=0"
                        }),
                        _ || N.set(n, {
                            clearProps: "transform"
                        })),
                        this
                }
                return n
            }
            ,
            this.wrapper = function (e) {
                return arguments.length ? (v = Y(e || "#smooth-wrapper")[0] || function _wrap(e) {
                    var t = W.querySelector(".ScrollSmoother-wrapper");
                    return t || ((t = W.createElement("div")).classList.add("ScrollSmoother-wrapper"),
                        e.parentNode.insertBefore(t, e),
                        t.appendChild(e)),
                        t
                }(n),
                    l = v.getAttribute("style") || "",
                    refreshHeight(),
                    N.set(v, _ ? {
                        overflow: "hidden",
                        position: "fixed",
                        height: "100%",
                        width: "100%",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    } : {
                        overflow: "visible",
                        position: "relative",
                        width: "100%",
                        height: "auto",
                        top: "auto",
                        bottom: "auto",
                        left: "auto",
                        right: "auto"
                    }),
                    this) : v
            }
            ,
            this.effects = function (e, t) {
                if (S = S || [],
                    !e)
                    return S.slice(0);
                (e = Y(e)).forEach(function (e) {
                    for (var t = S.length; t--;)
                        S[t].trigger === e && S[t].kill()
                });
                t = t || {};
                var r, n, o = t.speed, i = t.lag, s = t.effectsPadding, a = [];
                for (r = 0; r < e.length; r++)
                    (n = Za(e[r], o, i, r, s)) && a.push(n);
                return S.push.apply(S, a),
                    a
            }
            ,
            this.sections = function (e, t) {
                if (s = s || [],
                    !e)
                    return s.slice(0);
                var r = Y(e).map(function (t) {
                    return q.create({
                        trigger: t,
                        start: "top 120%",
                        end: "bottom -20%",
                        onToggle: function onToggle(e) {
                            t.style.opacity = e.isActive ? "1" : "0",
                                t.style.pointerEvents = e.isActive ? "all" : "none"
                        }
                    })
                });
                return t && t.add ? s.push.apply(s, r) : s = r.slice(0),
                    r
            }
            ,
            this.content(t.content),
            this.wrapper(t.wrapper),
            this.render = function (e) {
                return Oa(e || 0 === e ? e : O)
            }
            ,
            this.getVelocity = function () {
                return U.getVelocity(-O)
            }
            ,
            q.scrollerProxy(v, {
                scrollTop: Pa,
                scrollHeight: function scrollHeight() {
                    return refreshHeight() && V.scrollHeight
                },
                fixedMarkers: !1 !== t.fixedMarkers && !!_,
                content: n,
                getBoundingClientRect: function getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: F.innerWidth,
                        height: F.innerHeight
                    }
                }
            }),
            q.defaults({
                scroller: v
            });
        var z = q.getAll().filter(function (e) {
            return e.scroller === F || e.scroller === v
        });
        z.forEach(function (e) {
            return e.revert(!0, !0)
        }),
            i = q.create({
                animation: N.fromTo(L, {
                    y: 0
                }, {
                    y: function y() {
                        return -refreshHeight()
                    },
                    immediateRender: !1,
                    ease: "none",
                    data: "ScrollSmoother",
                    duration: 100,
                    onUpdate: function onUpdate() {
                        if (this._dur) {
                            var e = h;
                            e && (Na(i),
                                L.y = O),
                                Oa(L.y, e),
                                Ja(),
                                w && !u && w(E)
                        }
                    }
                }),
                onRefreshInit: function onRefreshInit(e) {
                    if (ScrollSmoother.isRefreshing = !0,
                        S) {
                        var t = q.getAll().filter(function (e) {
                            return !!e.pin
                        });
                        S.forEach(function (r) {
                            r.vars.pinnedContainer || t.forEach(function (e) {
                                if (e.pin.contains(r.trigger)) {
                                    var t = r.vars;
                                    t.pinnedContainer = e.pin,
                                        r.vars = null,
                                        r.init(t, r.animation)
                                }
                            })
                        })
                    }
                    var r = e.getTween();
                    d = r && r._end > r._dp._time,
                        f = O,
                        L.y = 0,
                        _ && (1 === q.isTouch && (v.style.position = "absolute"),
                            v.scrollTop = 0,
                            1 === q.isTouch && (v.style.position = "fixed"))
                },
                onRefresh: function onRefresh(e) {
                    e.animation.invalidate(),
                        e.setPositions(e.start, refreshHeight() / C),
                        d || Na(e),
                        L.y = -k() * C,
                        Oa(L.y),
                        A || e.animation.progress(N.utils.clamp(0, 1, f / C / -e.end)),
                        d && (e.progress -= .001,
                            e.update()),
                        ScrollSmoother.isRefreshing = !1
                },
                id: "ScrollSmoother",
                scroller: F,
                invalidateOnRefresh: !0,
                start: 0,
                refreshPriority: -9999,
                end: function end() {
                    return refreshHeight() / C
                },
                onScrubComplete: function onScrubComplete() {
                    U.reset(),
                        m && m(o)
                },
                scrub: _ || !0
            }),
            this.smooth = function (e) {
                return arguments.length && (C = (_ = e || 0) && +t.speed || 1,
                    i.scrubDuration(e)),
                    i.getTween() ? i.getTween().duration() : 0
            }
            ,
            i.getTween() && (i.getTween().vars.ease = t.ease || Q),
            this.scrollTrigger = i,
            t.effects && this.effects(!0 === t.effects ? "[data-" + R + "speed], [data-" + R + "lag]" : t.effects, {
                effectsPadding: t.effectsPadding
            }),
            t.sections && this.sections(!0 === t.sections ? "[data-section]" : t.sections),
            z.forEach(function (e) {
                e.vars.scroller = v,
                    e.revert(!1, !0),
                    e.init(e.vars, e.animation)
            }),
            this.paused = function (e, t) {
                return arguments.length ? (!!u !== e && (e ? (i.getTween() && i.getTween().pause(),
                    k(-O / C),
                    U.reset(),
                    (r = q.normalizeScroll()) && r.disable(),
                    (u = q.observe({
                        preventDefault: !0,
                        type: "wheel,touch,scroll",
                        debounce: !1,
                        allowClicks: !0,
                        onChangeY: function onChangeY() {
                            return Pa(-O)
                        }
                    })).nested = K(I, "wheel,touch,scroll", !0, !1 !== t)) : (u.nested.kill(),
                        u.kill(),
                        u = 0,
                        r && r.enable(),
                        i.progress = (-O / C - i.start) / (i.end - i.start),
                        Na(i))),
                    this) : !!u
            }
            ,
            this.kill = this.revert = function () {
                o.paused(!1),
                    Na(i),
                    i.kill();
                for (var e = (S || []).concat(s || []), t = e.length; t--;)
                    e[t].kill();
                q.scrollerProxy(v),
                    q.removeEventListener("killAll", Va),
                    q.removeEventListener("refresh", Ua),
                    v.style.cssText = l,
                    n.style.cssText = c;
                var r = q.defaults({});
                r && r.scroller === v && q.defaults({
                    scroller: F
                }),
                    o.normalizer && q.normalizeScroll(!1),
                    clearInterval(a),
                    D = null,
                    M && M.disconnect(),
                    V.style.removeProperty("height"),
                    F.removeEventListener("focusin", Sa)
            }
            ,
            this.refresh = function (e, t) {
                return i.refresh(e, t)
            }
            ,
            P && (this.normalizer = q.normalizeScroll(!0 === P ? {
                debounce: !0,
                content: !_ && n
            } : P)),
            q.config(t),
            "overscrollBehavior" in F.getComputedStyle(V) && N.set([V, I], {
                overscrollBehavior: "none"
            }),
            "scrollBehavior" in F.getComputedStyle(V) && N.set([V, I], {
                scrollBehavior: "auto"
            }),
            F.addEventListener("focusin", Sa),
            a = setInterval(Ja, 250),
            "loading" === W.readyState || requestAnimationFrame(function () {
                return q.refresh()
            })
    }
    r.version = "3.11.5",
        r.create = function (e) {
            return D && e && D.content() === Y(e.content)[0] ? D : new r(e)
        }
        ,
        r.get = function () {
            return D
        }
        ,
        t() && N.registerPlugin(r),
        e.ScrollSmoother = r,
        e.default = r;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
