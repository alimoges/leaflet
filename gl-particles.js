const {map: t} = W.map,
    e = W.store,
    i = W.utils,
    {logError: a, canvasRatio: r} = W.utils,
    s = W.plugins,
    l = W.renderUtils,
    n = W.GlObj,
    h = W.lruCache,
    {DataTiler: o} = W.DataTiler,
    u = W.particleRenderers,
    c = W.broadcast;
var m,
    d = null,
    f = !1,
    v = "off" === e.get("particlesAnim"),
    p = !1;
function g() {
    d = requestAnimationFrame(g),
    m.updateFrame()
}
function P() {
    cancelAnimationFrame(d)
}
function x() {
    m._canvas.style.opacity = "0",
    m.animationStopped = !0,
    m.needClear = !0,
    m.updateFrame()
}
function T() {
    m._canvas.style.opacity = "1",
    m.animationStopped = !1,
    m.needClear = !0
}
function S() {
    cancelAnimationFrame(d),
    v || (T(), p || g())
}
var b = {
    init: function(t) {
        m = t
    },
    suspend: function() {
        f = !0,
        P(),
        x()
    },
    enable: function() {
        f = !1,
        S()
    },
    run: S,
    stop: P,
    pause: function() {
        p = !0,
        P()
    },
    resume: function() {
        p = !1,
        S()
    },
    toggle: function(t) {
        "off" === t ? (P(), x(), v = !0) : v && (T(), v = !1, f || S())
    }
};
var w = new class  extends o{
        constructor(t)
        {
            super(),
            Object.assign(this, t)
        }
        cancelTasks()
        {
            this.syncCounter++
        }
        tilesReady(t, e, i)
        {
            var a = Object.assign(e, i, {
                    partObj: u[i.particlesIdent]
                }),
                r = {
                    width: this.width,
                    height: this.height,
                    offsetX: this.offsetX,
                    offsetY: this.offsetY,
                    trans: this.trans
                };
            this.processTiles(t, a, r)
        }
        redrawVectors()
        {
            this.mapMoved = !0,
            this.latestParams && this.getTiles(this.latestParams)
        }
        init(t, e)
        {
            this.glCanvas = t,
            this.latestParams = i.clone(e),
            this.redrawVectors()
        }
        paramsChanged(t)
        {
            this.latestParams && this.latestParams.fullPath === t.fullPath && this.latestParams.overlay === t.overlay ? l.emitter.emit("rendered", "particles") : (this.latestParams = i.clone(t), this.getTiles(this.latestParams))
        }
        getTexture(t, e)
        {
            var {partObj: i} = e,
                a = this.tileSize * this.tileSize * 2,
                r = new Uint8ClampedArray(a),
                s = t.data,
                l = i.level2reduce[e.level] / i.glMaxSpeedParam,
                n = l * i.glMinSpeedParam,
                h = n * n,
                o = e.JPGtransparency,
                u = 8224,
                c = 1e-6,
                m = 256,
                d = 128,
                f = 0,
                v = .5 * i.glSpeedCurvePowParam;
            if (o)
                for (var p = 0; p < m; p++) {
                    for (var g = 0; g < m; g++) {
                        if (s[u + 2] > d)
                            r[f++] = d,
                            r[f++] = d;
                        else {
                            var P = t.decodeR(s[u]) * l,
                                x = t.decodeG(s[u + 1]) * l,
                                T = P * P + x * x;
                            if (T > h) {
                                var S = d * Math.pow(T, v) / Math.sqrt(T);
                                P *= S,
                                x *= S
                            } else if (T > c) {
                                var b = d * n / Math.sqrt(T);
                                P *= b,
                                x *= b
                            } else
                                P = 0,
                                x = 0;
                            r[f++] = d + Math.round(P),
                            r[f++] = d + Math.round(x)
                        }
                        u += 4
                    }
                    u += 4
                }
            else
                for (var w = 0; w < m; w++) {
                    for (var A = 0; A < m; A++) {
                        if (s[u + 3] < d)
                            r[f++] = d,
                            r[f++] = d;
                        else {
                            var C = t.decodeR(s[u]) * l,
                                D = t.decodeG(s[u + 1]) * l,
                                y = C * C + D * D;
                            if (y > h) {
                                var R = d * Math.pow(y, v) / Math.sqrt(y);
                                C *= R,
                                D *= R
                            } else if (y > c) {
                                var F = d * n / Math.sqrt(y);
                                C *= F,
                                D *= F
                            } else
                                C = 0,
                                D = 0;
                            r[f++] = d + Math.round(C),
                            r[f++] = d + Math.round(D)
                        }
                        u += 4
                    }
                    u += 4
                }
            return {
                url: t.url,
                tileSize: this.tileSize,
                data: new Uint8Array(r)
            }
        }
        processTiles(t, e, i)
        {
            var a = t.length,
                r = a ? t[0].length : 0;
            if (0 !== a && 0 !== a) {
                for (var {partObj: s} = e, h = s.zoom2speed[e.zoom], o = [], u = [], c = 0; c < a; c++)
                    for (var m = 0; m < r; m++) {
                        var d = t[c][m];
                        if (d) {
                            var f = this.tileCache.get(d.url);
                            f || (f = this.getTexture(d, e), this.tileCache.put(d.url, f)),
                            o.push(f),
                            u.push({
                                x: m * this.tileSize,
                                y: c * this.tileSize
                            })
                        }
                    }
                if (1 === o.length) {
                    var v = o[0],
                        p = u[0];
                    o.push({
                        url: v.url,
                        tileSize: v.tileSize,
                        data: v.data
                    }),
                    u.push({
                        x: p.x + v.tileSize,
                        y: p.y
                    }),
                    r++
                }
                var g = n.getNextPowerOf2Size(r * this.tileSize),
                    P = n.getNextPowerOf2Size(a * this.tileSize);
                i.tilesDX = r * this.tileSize,
                i.tilesDY = a * this.tileSize,
                i.relativeDX = r * this.tileSize / g,
                i.relativeDY = a * this.tileSize / P,
                i.zoomWindFactor = h,
                this.glCanvas && this.glCanvas.isOk() && (this.glCanvas.setNewWindData({
                    sizeX: g,
                    sizeY: P,
                    textureTiles: o,
                    textureTilesPos: u,
                    transformParams: i,
                    mapParams: e
                }), b.run(), l.emitter.emit("rendered", "particles"))
            }
        }
    }
    ({
        glCanvas: null,
        latestParams: null,
        enabled: !0,
        tileSize: 256,
        tileCache: new h(16)
    }),
    A = "precision mediump float;\n#define GLSLIFY 1\nattribute vec4 aVecA;uniform sampler2D sState0;uniform sampler2D sState1;uniform vec4 uVPars0;uniform vec4 uVPars1;uniform vec4 uVPars2;uniform vec4 uVPars3;varying vec4 vTc0;varying float vDiscard;void main(){vec2 tc=aVecA.xy*uVPars0.xy+uVPars0.zw;vec4 tex0=texture2D(sState0,tc);vDiscard=step(0.025,tex0.r+tex0.g+tex0.b+tex0.a);vec4 tex1=texture2D(sState1,tc);vec2 posA=fract(tex0.ba+tex0.rg/255.5+uVPars3.xy)*2.0-1.0;vec2 posB=fract(tex1.ba+tex1.rg/255.5+uVPars3.xy)*2.0-1.0;vec2 dirF=posA-posB;vec2 dirFN=normalize(dirF);float d=length(dirF);vec2 dirRN=vec2(dirFN.y,-dirFN.x);vec2 pos=mix(posB,posA,aVecA.w*0.003921569);pos+=dirRN*(aVecA.zz*uVPars1.xy+uVPars1.zw);\n#ifdef WAVES\npos+=dirFN*(aVecA.ww*uVPars2.xy+uVPars2.zw);if(d>0.5||d<0.00005){pos.x+=10.0;}\n#else\nif(d>0.5){pos.x+=10.0;}\n#endif\ngl_Position=vec4(pos.xy,0,1);vTc0.x=uVPars3.z*aVecA.z+uVPars3.w;}",
    C = "precision mediump float;\n#define GLSLIFY 1\nuniform vec4 uPars0;uniform vec4 uPars1;varying vec4 vTc0;varying float vDiscard;void main(void){if(vDiscard<=0.0){discard;}float aa=clamp(uPars1.x-abs(vTc0.r),0.0,1.0);gl_FragColor=uPars0*vec4(aa);}",
    D = "#define GLSLIFY 1\nattribute vec2 aPos;uniform vec4 uVPars0;uniform vec4 uVPars1;varying vec4 vTc0;void main(void){gl_Position=vec4(aPos*uVPars0.xy+uVPars0.zw,0.0,1.0);vec2 tc0=aPos.xy*0.5+0.5;vTc0=vec4(tc0*uVPars1.xy+uVPars1.zw,aPos.xy);}",
    y = window.WebGLRenderingContext,
    R = new (L.CanvasLayer.extend({
        _canvas: null,
        glo: new n,
        failed: !1,
        ratioScale: 1,
        needUpdateParams: !1,
        alpha: 0,
        needClear: !0,
        bcastRedrawLayersId: -1,
        isOk() {
            return 0 === this.errorCount && null !== this.glo.gl()
        },
        reinitParticleType(t) {
            "wind" === t ? this.prepareAlphaLUT(.2, .9, .3, .8) : "waves" === t ? this.prepareAlphaLUT(.7, 1.2, .3, 1.4) : "currents" === t && this.prepareAlphaLUT(.2, 1.2, .3, 1.4),
            this.particlesIdentLast = t
        },
        createGlStuff(t) {
            this.resetGlStuff(),
            this.errorCount = 0;
            this.glo.create(t, {
                antialias: !1,
                stencil: !1,
                alpha: !0,
                premultipliedAlpha: !0,
                preserveDrawingBuffer: !1
            }, "GlParticlesContext") ? this.initParamsAndShaders() : ++this.errorCount
        },
        resetGlStuff() {
            this.vertexBuffer = null,
            this.indexBuffer = null,
            this.lastClientWidth = 0,
            this.lastClientHeight = 0,
            this.backTexture = null,
            this.backTextureWidth = 0,
            this.backTextureHeight = 0,
            this.textureState0 = null,
            this.textureState1 = null,
            this.stateRandBlocks = null
        },
        initParamsAndShaders() {
            var t = this.glo;
            this.stateBlocksCount = 16,
            this.blockTimeSegmentSize = 8,
            this.totalTimeFrames = this.stateBlocksCount * this.blockTimeSegmentSize,
            this.stateResX = 256,
            this.stateResY = 256,
            this.lastTimeS = 0,
            this.frames60timer = 0,
            this.frames60 = 0,
            this.frameCounter = 0,
            this.frameCounter60 = 0,
            this.blockTimeSegment = 0,
            this.framebuffer = t.createFramebuffer(),
            this.shWindParticleDraw = this.compileShader(A, C, [], "WindParticleDraw"),
            this.shWaveParticleDraw = this.compileShader(A, C, ["WAVES"], "WaveParticleDraw"),
            this.shScreen = this.compileShader(D, "precision mediump float;\n#define GLSLIFY 1\nuniform vec4 uPars0;varying vec4 vTc0;void main(void){gl_FragColor=uPars0;}", [], "Screen"),
            this.shCopy = this.compileShader(D, "precision mediump float;\n#define GLSLIFY 1\nuniform vec4 uPars0;uniform vec4 uPars1;uniform sampler2D sTex0;varying vec4 vTc0;void main(void){gl_FragColor=texture2D(sTex0,vTc0.xy)*uPars0+uPars1;}", [], "Copy"),
            this.shParticleUpdate = this.compileShader(D, "precision mediump float;\n#define GLSLIFY 1\nuniform vec4 uPars0;uniform vec4 uPars1;uniform sampler2D sState;uniform sampler2D sWind;varying vec4 vTc0;const float treshold=0.025;const float prec=1000.0;bool particleValid(vec2 deltaPos){float rCheck=step(treshold,abs(deltaPos.r*prec));float gCheck=step(treshold,abs(deltaPos.g*prec));return(rCheck+gCheck)>0.0;}void main(void){vec4 tex0=texture2D(sState,vTc0.xy);vec2 pos=tex0.ba+tex0.rg/255.5;vec2 tc=fract(pos)*uPars0.xy+uPars0.zw;vec2 dpos=texture2D(sWind,tc).ra*uPars1.xy+uPars1.zw;if(!particleValid(dpos)){gl_FragColor=vec4(0.0);return;}pos=fract(pos+dpos);gl_FragColor.rg=fract(pos*255.0+0.25/255.0);gl_FragColor.ba=pos-gl_FragColor.rg/255.0;}", [], "ParticleUpdate"),
            this.vertexBufferRect = t.createBuffer(new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1])),
            this.initParticleDataStructures(this.stateResX, this.stateResY),
            this.windTexture = null
        },
        compileShader(t, e, i, r) {
            var s;
            try {
                s = this.glo.createProgramObj(t, e, i, r)
            } catch (t) {
                0,
                a("GlParticles", "Unable to create programObj", t),
                ++this.errorCount,
                s = null
            }
            return s
        },
        checkSizesAndReinit() {
            var t = this.glo;
            if (t && !t.isInvalid()) {
                var e = t.gl(),
                    i = t.getCanvas();
                if (this.lastClientWidth !== i.width || this.lastClientHeight !== i.height) {
                    this.lastClientWidth = i.width,
                    this.lastClientHeight = i.height;
                    var a = Math.min(e.getParameter(y.MAX_TEXTURE_SIZE), 2048),
                        r = this.ratioScale > 1.5 ? .8 : 1,
                        s = Math.min(n.getNextPowerOf2Size(r * this.lastClientWidth), a),
                        l = Math.min(n.getNextPowerOf2Size(r * this.lastClientHeight), a);
                    if (this.backTextureWidth !== s || this.backTextureHeight !== l) {
                        this.backTextureWidth = s,
                        this.backTextureHeight = l;
                        var h = new Uint8Array(this.backTextureWidth * this.backTextureHeight * 4);
                        this.backTexture = t.createTexture2D(y.LINEAR, y.LINEAR, y.REPEAT, h, this.backTextureWidth, this.backTextureHeight)
                    }
                }
            }
        },
        prepareAlphaLUT(t, e, i, a) {
            this.alphaLut = new Float32Array(this.totalTimeFrames);
            var r,
                s,
                l = Math.round(t * this.totalTimeFrames),
                n = Math.round(i * this.totalTimeFrames);
            for (r = 0; r < this.totalTimeFrames; r++)
                s = 1,
                r < l ? s = Math.pow(1 * r / l, e) : r >= this.totalTimeFrames - n && (s = Math.pow(1 * (this.totalTimeFrames - r) / n, a)),
                this.alphaLut[r] = s
        },
        initParticleDataStructures(t, e) {
            var i,
                a,
                r,
                s,
                l,
                n = this.glo;
            this.particlesCount = t * e,
            this.vertsPerParticle = 4,
            this.vertexStride = 4,
            this.stateBlock = 0,
            this.stateBlockDY = e / this.stateBlocksCount;
            var h = new Uint8Array(4 * this.particlesCount);
            for (i = 0; i < h.length; i++)
                h[i] = Math.floor(256 * Math.random());
            this.textureState0 = n.createTexture2D(y.NEAREST, y.NEAREST, y.REPEAT, h, t, e),
            this.textureState1 = n.createTexture2D(y.NEAREST, y.NEAREST, y.REPEAT, h, t, e);
            var o = t * this.stateBlockDY * this.vertsPerParticle * this.vertexStride,
                u = new Uint8Array(o),
                c = [0, 0, 255, 0, 255, 255, 0, 255];
            for (l = 0, i = 0; i < t; i++)
                for (a = 0; a < this.stateBlockDY; a++)
                    for (r = 0; r < this.vertsPerParticle; r++)
                        u[l++] = i,
                        u[l++] = a,
                        u[l++] = c[2 * r],
                        u[l++] = c[2 * r + 1];
            this.vertexBuffer = n.createBuffer(u);
            var m = [0, 1, 2, 0, 2, 3];
            this.indsPerParticle = m.length,
            this.particlesPerBlock = t * this.stateBlockDY,
            this.indexCount = this.particlesPerBlock * this.indsPerParticle;
            var d = new Uint16Array(this.indexCount);
            for (a = 0, s = 0, i = 0; i < this.indexCount; i++)
                d[i] = s + m[a],
                ++a >= m.length && (a = 0, s += this.vertsPerParticle);
            this.indexBuffer = n.createIndexBuffer(d)
        },
        reinitStateBlock(t) {
            for (var e = this.glo, i = e.gl(), a = this.stateBlockDY * t, r = this.stateResX * this.stateBlockDY * 4, s = new Uint8Array(r), l = 0; l < r; l++)
                s[l] = Math.floor(256 * Math.random());
            e.bindTexture2D(this.textureState0),
            i.texSubImage2D(y.TEXTURE_2D, 0, 0, a, this.stateResX, this.stateBlockDY, y.RGBA, y.UNSIGNED_BYTE, s),
            e.bindTexture2D(this.textureState1),
            i.texSubImage2D(y.TEXTURE_2D, 0, 0, a, this.stateResX, this.stateBlockDY, y.RGBA, y.UNSIGNED_BYTE, s)
        },
        setGlobalAlpha(t) {
            this.alpha = t
        },
        fadeOut() {
            var t = this.glo,
                e = t.get(),
                i = this.shScreen;
            e.useProgram(i.program),
            t.bindAttribute(this.vertexBufferRect, i.aPos, 2, y.FLOAT, !1, 8, 0),
            e.uniform4f(i.uVPars0, 1, 1, 0, 0),
            e.enable(y.BLEND);
            var a = this.fadeScale;
            e.blendColor(a, a, a, a),
            e.blendEquation(y.FUNC_ADD),
            e.blendFunc(y.ZERO, y.CONSTANT_ALPHA),
            e.drawArrays(y.TRIANGLE_FAN, 0, 4),
            e.disable(y.BLEND)
        },
        drawParticles() {
            var t = this.glo,
                e = t.get(),
                i = this.mapParams.partObj,
                a = "waves" === this.mapParams.particlesIdent ? this.shWaveParticleDraw : this.shWindParticleDraw;
            e.useProgram(a.program),
            t.bindAttribute(this.vertexBuffer, a.aVecA, 4, y.UNSIGNED_BYTE, !1, this.vertexStride, 0),
            t.bindTexture2D(this.textureState0, 0, a.sState0),
            t.bindTexture2D(this.textureState1, 1, a.sState1);
            var r = this.transformParams.widthFactor + 1,
                s = r / this.lastClientWidth,
                l = r / this.lastClientHeight,
                n = i.glParticleLengthEx / this.lastClientWidth,
                h = i.glParticleLengthEx / this.lastClientHeight;
            e.uniform4f(a.uVPars1, 2 * s / 255, 2 * l / 255, -s, -l),
            e.uniform4f(a.uVPars2, 2 * n / 255, 2 * h / 255, -n, -h);
            var o = Math.max(1, .8 * this.transformParams.widthFactor);
            e.uniform4f(a.uVPars3, 0, 0, 2 * o / 255, -o),
            e.uniform4f(a.uPars1, o, 0, 0, 0),
            e.bindBuffer(y.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
            e.enable(y.BLEND),
            e.blendEquation(y.FUNC_ADD),
            e.blendFunc(y.ONE_MINUS_DST_ALPHA, y.ONE);
            for (var u = Math.max(1, Math.min(Math.round(this.transformParams.relativeAmount * this.particlesPerBlock), this.particlesPerBlock)) * this.indsPerParticle, c = 1 / this.stateBlocksCount, m = this.timeFrame0, d = 0; d < this.stateBlocksCount; d++) {
                e.uniform4f(a.uVPars0, 1 / this.stateResX, 1 / this.stateResY, 0, d * c);
                var f = this.alphaLut[m];
                e.uniform4f(a.uPars0, f, f, f, f),
                e.drawElements(y.TRIANGLES, u, y.UNSIGNED_SHORT, 0),
                (m -= this.blockTimeSegmentSize) < 0 && (m += this.totalTimeFrames)
            }
            e.disable(y.BLEND)
        },
        copyToCanvas() {
            var t = this.glo,
                e = t.get();
            t.bindFramebuffer(null),
            e.viewport(0, 0, t.getCanvas().width, t.getCanvas().height),
            e.enable(y.BLEND),
            e.blendEquation(y.FUNC_ADD),
            e.blendFunc(y.ONE, y.ONE);
            var i,
                a = this.shCopy;
            if (e.useProgram(a.program), t.bindAttribute(this.vertexBufferRect, a.aPos, 2, y.FLOAT, !1, 8, 0), t.bindTexture2D(this.backTexture, 0, a.sTex0), e.uniform4f(a.uVPars0, 1, 1, 0, 0), e.uniform4f(a.uVPars1, 1, 1, 0, 0), this.mapParams.zoom >= 12)
                i = [.5, 0, .4, this.transformParams.mulAZoomed];
            else {
                var r = .4 * this.transformParams.mulRGB;
                i = [r, r, r, .4 * this.transformParams.mulA]
            }
            for (var s = 0; s < 4; s++)
                i[s] *= this.alpha;
            e.uniform4fv(a.uPars0, i);
            var l = -.1;
            e.uniform4fv(a.uPars1, [l, l, l, l]),
            e.drawArrays(y.TRIANGLE_FAN, 0, 4),
            e.disable(y.BLEND)
        },
        updateParticles(t) {
            var e = this.glo,
                i = e.get();
            e.bindFramebuffer(this.framebuffer, this.textureState1),
            i.viewport(0, 0, this.stateResX, this.stateResY);
            var a = this.shParticleUpdate;
            i.useProgram(a.program),
            e.bindAttribute(this.vertexBufferRect, a.aPos, 2, y.FLOAT, !1, 8, 0),
            e.bindTexture2D(this.textureState0, 0, a.sState),
            e.bindTexture2D(this.windTexture, 3, a.sWind);
            var r = Math.min(Math.floor(256 * this.transformParams.relativeAmount + 1), 256) / 256;
            i.uniform4f(a.uVPars0, r, 1, r - 1, 0),
            i.uniform4f(a.uVPars1, r, 1, 0, 0),
            i.uniform4f(a.uPars0, this.windTextureMulX, -this.windTextureMulY, this.windTextureAddX, this.windTextureMulY + this.windTextureAddY);
            var s = this.frameTime * this.transformParams.timeScale,
                l = s / this.lastClientWidth,
                n = s / this.lastClientHeight;
            i.uniform4f(a.uPars1, 2 * l, 2 * n, -l, -n),
            i.drawArrays(y.TRIANGLE_FAN, 0, 4),
            e.bindFramebuffer(null),
            t >= 0 && this.reinitStateBlock(t);
            var h = this.textureState0;
            this.textureState0 = this.textureState1,
            this.textureState1 = h
        },
        updateFrame() {
            if (this.frameCounter60++, this.frameCounter60 % 2 == 0) {
                var t = this.glo,
                    e = t.get(),
                    i = .001 * Date.now();
                if (this.frameTime = Math.min(i - this.lastTimeS, .1), this.lastTimeS = i, this.frames60timer += this.frameTime, this.frames60 = Math.max(1, Math.round(60 * this.frames60timer)), this.frames60timer -= .0166667 * this.frames60, this.windTexture && this.transformParams) {
                    var a = -1;
                    this.timeFrame0 = this.stateBlock * this.blockTimeSegmentSize,
                    this.blockTimeSegment += this.frames60,
                    this.blockTimeSegment >= this.blockTimeSegmentSize && (this.blockTimeSegment -= this.blockTimeSegmentSize, a = this.stateBlock, ++this.stateBlock >= this.stateBlocksCount && (this.stateBlock = 0)),
                    this.timeFrame0 = (this.stateBlock - 1) * this.blockTimeSegmentSize,
                    this.timeFrame0 += this.blockTimeSegment,
                    this.timeFrame0 < 0 && (this.timeFrame0 += this.totalTimeFrames),
                    this.needUpdateParams && (this.updateParamsFromConfig(), this.needUpdateParams = !1),
                    this.relParticleShiftX = this.shiftX / this.lastClientWidth,
                    this.relParticleShiftY = this.shiftY / this.lastClientHeight,
                    t.bindFramebuffer(this.framebuffer, this.backTexture),
                    e.viewport(0, 0, this.backTextureWidth, this.backTextureHeight),
                    this.needClear && (e.clearColor(0, 0, 0, 0), e.clear(y.COLOR_BUFFER_BIT), this.needClear = !1, this.animationStopped && this.copyToCanvas()),
                    this.animationStopped || (this.drawParticles(), this.fadeOut(), this.copyToCanvas(), this.updateParticles(a), this.alpha < 1 && (this.alpha += 1.8 * this.frameTime, this.alpha > 1 && (this.alpha = 1)), this.frameCounter++, this.showCanvas(!0))
                }
            }
        },
        setNewWindData(t) {
            this.reset(),
            this.transformParams = t.transformParams,
            this.mapParams = t.mapParams;
            var e = this.glo,
                i = e.get(),
                a = y.LUMINANCE_ALPHA;
            if (this.windTextureResX = t.sizeX, this.windTextureResY = t.sizeY, this.windTexture ? (e.bindTexture2D(this.windTexture), i.texImage2D(y.TEXTURE_2D, 0, a, this.windTextureResX, this.windTextureResY, 0, a, y.UNSIGNED_BYTE, null)) : this.windTexture = e.createTexture2D(y.LINEAR, y.LINEAR, y.CLAMP_TO_EDGE, null, this.windTextureResX, this.windTextureResY, a), t.textureTiles) {
                var r = t.textureTiles,
                    s = t.textureTilesPos,
                    l = r.length;
                e.bindTexture2D(this.windTexture);
                for (var n = 0; n < l; n++) {
                    var h = r[n],
                        o = s[n];
                    i.texSubImage2D(y.TEXTURE_2D, 0, o.x, o.y, h.tileSize, h.tileSize, a, y.UNSIGNED_BYTE, h.data)
                }
            }
            this.newWindData = null;
            var u = this.transformParams;
            this.windTextureMulX = 1 * u.relativeDX * u.width / (u.tilesDX * u.trans),
            this.windTextureMulY = 1 * u.relativeDY * u.height / (u.tilesDY * u.trans),
            this.windTextureAddX = u.offsetX / (this.windTextureResX * u.trans) + .48 / this.windTextureResX,
            this.windTextureAddY = u.offsetY / (this.windTextureResY * u.trans) + .48 / this.windTextureResY,
            this.needUpdateParams = !0
        },
        updateParamsFromConfig() {
            var t = this.transformParams,
                i = this.mapParams,
                a = e.get("particles");
            if (t && i) {
                var r,
                    s,
                    l,
                    n = i.partObj;
                i.particlesIdent !== this.particlesIdentLast && this.reinitParticleType(i.particlesIdent),
                n.configurable ? (r = a.velocity || 1, s = a.opacity || 1, l = a.blending || 1) : (r = n.glVelocity, s = n.glOpacity, l = n.glBlending);
                var h = n.getAmount.call(n, i),
                    o = n.getAmountMultiplier.call(n);
                t.relativeAmount = h / 65536,
                o < 1 && (t.relativeAmount *= 1 + 7 * (1 - o)),
                t.relativeAmount *= n.glCountMul,
                t.widthFactor = Math.max(1, n.getLineWidth.call(n, i) * n.glParticleWidth * this.ratioScale),
                t.timeScale = r * n.glSpeedPx * t.zoomWindFactor * this.ratioScale,
                t.mulRGB = .7 * s + .4,
                t.mulA = s,
                t.mulAZoomed = .44 * s + .3,
                t.mulA > 1 && (t.mulA = 2 - t.mulA),
                t.mulA += .1;
                var u = l - .92;
                this.fadeScale = Math.min(.9 + .5 * u, .98)
            }
        },
        onInit() {
            this.errorCount = 0
        },
        onCreateCanvas(t) {
            this.bcastRedrawLayersId = c.on("redrawLayers", function() {
                this.needUpdateParams = !0
            }.bind(this));
            try {
                this.createGlStuff(this.getCanvas()),
                this.checkSizesAndReinit()
            } catch (t) {
                0,
                a("GlParticles", "unspecified error in createGlStuff", t),
                ++this.errorCount
            }
            return this.isOk()
        },
        onCanvasFailed() {
            this.glo.release(),
            l.emitter.emit("glParticlesFailed")
        },
        onRemoveCanvas() {
            this.glo.release(),
            this.resetGlStuff(),
            -1 !== this.bcastRedrawLayersId && (c.off(this.bcastRedrawLayersId), this.bcastRedrawLayersId = -1)
        },
        onResizeCanvas(t, e) {
            var i = r,
                a = this.getCanvas();
            (t > 1200 || e > 1200) && (i = Math.min(i, 1.5)),
            this.ratioScale = i,
            a.width = t * i,
            a.height = e * i,
            a.style.width = t + "px",
            a.style.height = e + "px",
            this.checkSizesAndReinit()
        },
        onReset() {
            this.alpha = 0,
            this.needClear = !0,
            this.showCanvas(!1)
        }
    }))({
        disableAutoReset: !0
    });
b.init(R);
var F,
    E = t => t ? w.redrawVectors.call(w) : w.cancelTasks.call(w),
    k = !1,
    B = i => {
        return R.addTo(t), R.failed ? (t.removeLayer(R), a("particles", "initFailed"), r = i, k = !0, F || (console.error("Implement loading of legacy particles"), F = new Promise(((t, e) => {
            s.particles.load().then((i => {
                i ? (s.particles.plugin.onRenderStart(r), F = void 0, t(!0)) : e()
            }))
        }))), !1) : (e.set("glParticlesOn", !0), R.getCanvas().classList.add("particles-layer"), t.on("moveend", w.redrawVectors, w), t.on("movestart", w.cancelTasks, w), t.on("zoomstart", b.pause), t.on("zoomend", b.resume), e.on("particlesAnim", b.toggle), e.on("visibility", E), b.enable(), w.init(R, i), !0);
        var r
    },
    z = () => {
        k ? k = !1 : (b.suspend(), e.off("particlesAnim", b.toggle), e.off("visibility", E), t.off("moveend", w.redrawVectors, w), t.off("movestart", w.cancelTasks, w), t.off("zoomstart", b.pause), t.off("zoomend", b.resume), t.removeLayer(R))
    },
    N = () => {
        k || w.redrawVectors.call(w)
    },
    M = t => {
        k || w.paramsChanged.call(w, t)
    };
export { z as onRenderEnd, B as onRenderStart, M as paramsChanged, N as redraw };

