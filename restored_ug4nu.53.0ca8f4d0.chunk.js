!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fb6c7d0d-4e10-5c59-bd1b-0e7c1c66119d");
  } catch (e) {}
}();
export const id = 53;
export const ids = [53];
export const modules = {
  22015: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => RH
    });
    class RH {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? RH.ShadersRepository : RH.ShadersRepositoryWGSL;
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? RH.ShadersStore : RH.ShadersStoreWGSL;
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? RH.IncludesShadersStore : RH.IncludesShadersStoreWGSL;
      }
    }
    RH.ShadersRepository = "src/Shaders/", RH.ShadersStore = {}, RH.IncludesShadersStore = {}, RH.ShadersRepositoryWGSL = "src/ShadersWGSL/", RH.ShadersStoreWGSL = {}, RH.IncludesShadersStoreWGSL = {};
  },
  22023: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => QH,
      g: () => iI,
      i: () => OH,
      k: () => JH,
      n: () => rH,
      p: () => NH,
      q: () => YH,
      r: () => AH,
      s: () => VH,
      t: () => GH,
      u: () => eH
    });
    class RH {
      constructor() {
        this._valueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1;
      }
      get isAsync() {
        return this.isParallelCompiled;
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.YY._isRenderingStateCompiled(this));
      }
      _handlesSpectorRebuildCallback(HH) {
        HH && this.program && HH(this.program);
      }
      setEngine(HH) {
        this.YY = HH;
      }
      _fillEffectInformation(HH, IH, EH, RH, hH, TH, sH, eH) {
        const GH = this.YY;
        if (GH.supportsUniformBuffers) for (const VH in IH) HH.bindUniformBlock(VH, IH[VH]);
        let AH;
        for (this.YY.getUniforms(this, EH).forEach((HH, IH) => {
          RH[EH[IH]] = HH;
        }), this._uniforms = RH, AH = 0; AH < hH.length; AH++) {
          null == HH.getUniform(hH[AH]) && (hH.splice(AH, 1), AH--);
        }
        hH.forEach((HH, IH) => {
          TH[HH] = IH;
        });
        for (const VH of GH.getAttributes(this, sH)) eH.push(VH);
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0;
      }
      _cacheMatrix(HH, IH) {
        const EH = this._valueCache[HH],
          RH = IH.updateFlag;
        return (void 0 === EH || EH !== RH) && (this._valueCache[HH] = RH, !0);
      }
      _cacheFloat2(HH, IH, EH) {
        let RH = this._valueCache[HH];
        if (!RH || 2 !== RH.length) return RH = [IH, EH], this._valueCache[HH] = RH, !0;
        let hH = !1;
        return RH[0] !== IH && (RH[0] = IH, hH = !0), RH[1] !== EH && (RH[1] = EH, hH = !0), hH;
      }
      _cacheFloat3(HH, IH, EH, RH) {
        let hH = this._valueCache[HH];
        if (!hH || 3 !== hH.length) return hH = [IH, EH, RH], this._valueCache[HH] = hH, !0;
        let TH = !1;
        return hH[0] !== IH && (hH[0] = IH, TH = !0), hH[1] !== EH && (hH[1] = EH, TH = !0), hH[2] !== RH && (hH[2] = RH, TH = !0), TH;
      }
      _cacheFloat4(HH, IH, EH, RH, hH) {
        let TH = this._valueCache[HH];
        if (!TH || 4 !== TH.length) return TH = [IH, EH, RH, hH], this._valueCache[HH] = TH, !0;
        let sH = !1;
        return TH[0] !== IH && (TH[0] = IH, sH = !0), TH[1] !== EH && (TH[1] = EH, sH = !0), TH[2] !== RH && (TH[2] = RH, sH = !0), TH[3] !== hH && (TH[3] = hH, sH = !0), sH;
      }
      setInt(HH, IH) {
        const EH = this._valueCache[HH];
        void 0 !== EH && EH === IH || this.YY.setInt(this._uniforms[HH], IH) && (this._valueCache[HH] = IH);
      }
      setInt2(HH, IH, EH) {
        this._cacheFloat2(HH, IH, EH) && (this.YY.setInt2(this._uniforms[HH], IH, EH) || (this._valueCache[HH] = null));
      }
      setInt3(HH, IH, EH, RH) {
        this._cacheFloat3(HH, IH, EH, RH) && (this.YY.setInt3(this._uniforms[HH], IH, EH, RH) || (this._valueCache[HH] = null));
      }
      setInt4(HH, IH, EH, RH, hH) {
        this._cacheFloat4(HH, IH, EH, RH, hH) && (this.YY.setInt4(this._uniforms[HH], IH, EH, RH, hH) || (this._valueCache[HH] = null));
      }
      setIntArray(HH, IH) {
        this._valueCache[HH] = null, this.YY.setIntArray(this._uniforms[HH], IH);
      }
      setIntArray2(HH, IH) {
        this._valueCache[HH] = null, this.YY.setIntArray2(this._uniforms[HH], IH);
      }
      setIntArray3(HH, IH) {
        this._valueCache[HH] = null, this.YY.setIntArray3(this._uniforms[HH], IH);
      }
      setIntArray4(HH, IH) {
        this._valueCache[HH] = null, this.YY.setIntArray4(this._uniforms[HH], IH);
      }
      setUInt(HH, IH) {
        const EH = this._valueCache[HH];
        void 0 !== EH && EH === IH || this.YY.setUInt(this._uniforms[HH], IH) && (this._valueCache[HH] = IH);
      }
      setUInt2(HH, IH, EH) {
        this._cacheFloat2(HH, IH, EH) && (this.YY.setUInt2(this._uniforms[HH], IH, EH) || (this._valueCache[HH] = null));
      }
      setUInt3(HH, IH, EH, RH) {
        this._cacheFloat3(HH, IH, EH, RH) && (this.YY.setUInt3(this._uniforms[HH], IH, EH, RH) || (this._valueCache[HH] = null));
      }
      setUInt4(HH, IH, EH, RH, hH) {
        this._cacheFloat4(HH, IH, EH, RH, hH) && (this.YY.setUInt4(this._uniforms[HH], IH, EH, RH, hH) || (this._valueCache[HH] = null));
      }
      setUIntArray(HH, IH) {
        this._valueCache[HH] = null, this.YY.setUIntArray(this._uniforms[HH], IH);
      }
      setUIntArray2(HH, IH) {
        this._valueCache[HH] = null, this.YY.setUIntArray2(this._uniforms[HH], IH);
      }
      setUIntArray3(HH, IH) {
        this._valueCache[HH] = null, this.YY.setUIntArray3(this._uniforms[HH], IH);
      }
      setUIntArray4(HH, IH) {
        this._valueCache[HH] = null, this.YY.setUIntArray4(this._uniforms[HH], IH);
      }
      setArray(HH, IH) {
        this._valueCache[HH] = null, this.YY.setArray(this._uniforms[HH], IH);
      }
      setArray2(HH, IH) {
        this._valueCache[HH] = null, this.YY.setArray2(this._uniforms[HH], IH);
      }
      setArray3(HH, IH) {
        this._valueCache[HH] = null, this.YY.setArray3(this._uniforms[HH], IH);
      }
      setArray4(HH, IH) {
        this._valueCache[HH] = null, this.YY.setArray4(this._uniforms[HH], IH);
      }
      setMatrices(HH, IH) {
        IH && (this._valueCache[HH] = null, this.YY.setMatrices(this._uniforms[HH], IH));
      }
      setMatrix(HH, IH) {
        this._cacheMatrix(HH, IH) && (this.YY.setMatrices(this._uniforms[HH], IH.GM()) || (this._valueCache[HH] = null));
      }
      setMatrix3x3(HH, IH) {
        this._valueCache[HH] = null, this.YY.setMatrix3x3(this._uniforms[HH], IH);
      }
      setMatrix2x2(HH, IH) {
        this._valueCache[HH] = null, this.YY.setMatrix2x2(this._uniforms[HH], IH);
      }
      setFloat(HH, IH) {
        const EH = this._valueCache[HH];
        void 0 !== EH && EH === IH || this.YY.setFloat(this._uniforms[HH], IH) && (this._valueCache[HH] = IH);
      }
      setVector2(HH, IH) {
        this._cacheFloat2(HH, IH.x, IH.y) && (this.YY.setFloat2(this._uniforms[HH], IH.x, IH.y) || (this._valueCache[HH] = null));
      }
      setFloat2(HH, IH, EH) {
        this._cacheFloat2(HH, IH, EH) && (this.YY.setFloat2(this._uniforms[HH], IH, EH) || (this._valueCache[HH] = null));
      }
      setVector3(HH, IH) {
        this._cacheFloat3(HH, IH.x, IH.y, IH.z) && (this.YY.setFloat3(this._uniforms[HH], IH.x, IH.y, IH.z) || (this._valueCache[HH] = null));
      }
      setFloat3(HH, IH, EH, RH) {
        this._cacheFloat3(HH, IH, EH, RH) && (this.YY.setFloat3(this._uniforms[HH], IH, EH, RH) || (this._valueCache[HH] = null));
      }
      setVector4(HH, IH) {
        this._cacheFloat4(HH, IH.x, IH.y, IH.z, IH.w) && (this.YY.setFloat4(this._uniforms[HH], IH.x, IH.y, IH.z, IH.w) || (this._valueCache[HH] = null));
      }
      setQuaternion(HH, IH) {
        this._cacheFloat4(HH, IH.x, IH.y, IH.z, IH.w) && (this.YY.setFloat4(this._uniforms[HH], IH.x, IH.y, IH.z, IH.w) || (this._valueCache[HH] = null));
      }
      setFloat4(HH, IH, EH, RH, hH) {
        this._cacheFloat4(HH, IH, EH, RH, hH) && (this.YY.setFloat4(this._uniforms[HH], IH, EH, RH, hH) || (this._valueCache[HH] = null));
      }
      setColor3(HH, IH) {
        this._cacheFloat3(HH, IH.r, IH.g, IH.b) && (this.YY.setFloat3(this._uniforms[HH], IH.r, IH.g, IH.b) || (this._valueCache[HH] = null));
      }
      setColor4(HH, IH, EH) {
        this._cacheFloat4(HH, IH.r, IH.g, IH.b, EH) && (this.YY.setFloat4(this._uniforms[HH], IH.r, IH.g, IH.b, EH) || (this._valueCache[HH] = null));
      }
      setDirectColor4(HH, IH) {
        this._cacheFloat4(HH, IH.r, IH.g, IH.b, IH.a) && (this.YY.setFloat4(this._uniforms[HH], IH.r, IH.g, IH.b, IH.a) || (this._valueCache[HH] = null));
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.YY._getShaderSource(this.vertexShader) : null;
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.YY._getShaderSource(this.fragmentShader) : null;
      }
    }
    var hH = EH(21889);
    const TH = new WeakMap(),
      sH = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };
    function eH(HH) {
      let IH = TH.get(HH);
      if (!IH) {
        if (!HH) return sH;
        IH = {
          _webGLVersion: HH.TEXTURE_BINDING_3D ? 2 : 1,
          _context: HH,
          parallelShaderCompile: HH.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, TH.set(HH, IH);
      }
      return IH;
    }
    function GH(HH) {
      TH.delete(HH);
    }
    function AH(HH, IH, EH, RH, hH, TH) {
      const sH = eH(RH);
      var GH;
      TH || (TH = null !== (GH = sH._createShaderProgramInjection) && void 0 !== GH ? GH : QH);
      return TH(HH, MH(IH, "vertex", RH, sH._contextWasLost), MH(EH, "fragment", RH, sH._contextWasLost), RH, hH, sH.validateShaderPrograms);
    }
    function VH(HH, IH, EH, RH, hH) {
      let TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        sH = arguments.length > 6 ? arguments[6] : void 0;
      const GH = eH(hH);
      var AH;
      sH || (sH = null !== (AH = GH._createShaderProgramInjection) && void 0 !== AH ? AH : QH);
      const VH = GH._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return sH(HH, FH(IH, "vertex", RH, VH, hH, GH._contextWasLost), FH(EH, "fragment", RH, VH, hH, GH._contextWasLost), hH, TH, GH.validateShaderPrograms);
    }
    function YH(HH, IH) {
      const EH = new RH(),
        hH = eH(HH);
      return hH.parallelShaderCompile && !hH.disableParallelShaderCompile && (EH.isParallelCompiled = !0), EH.context = hH._context, EH;
    }
    function QH(HH, IH, EH, RH) {
      let hH = arguments.length > 5 ? arguments[5] : void 0;
      const TH = RH.createProgram();
      if (HH.program = TH, !TH) throw new Error("Unable to create program");
      return RH.attachShader(TH, IH), RH.attachShader(TH, EH), RH.linkProgram(TH), HH.context = RH, HH.vertexShader = IH, HH.fragmentShader = EH, HH.isParallelCompiled || OH(HH, RH, hH), TH;
    }
    function JH(HH, IH, EH) {
      const RH = HH;
      if (RH._isDisposed) return !1;
      const hH = eH(IH);
      return !!(hH && hH.parallelShaderCompile && hH.parallelShaderCompile.COMPLETION_STATUS_KHR && RH.program && IH.getProgramParameter(RH.program, hH.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (OH(RH, IH, EH), !0);
    }
    function OH(HH, IH, EH) {
      const RH = HH.context,
        hH = HH.vertexShader,
        TH = HH.fragmentShader,
        sH = HH.program;
      if (!RH.getProgramParameter(sH, RH.LINK_STATUS)) {
        if (!IH.getShaderParameter(hH, IH.COMPILE_STATUS)) {
          const EH = IH.getShaderInfoLog(hH);
          if (EH) throw HH.vertexCompilationError = EH, new Error("VERTEX SHADER " + EH);
        }
        if (!IH.getShaderParameter(TH, IH.COMPILE_STATUS)) {
          const EH = IH.getShaderInfoLog(TH);
          if (EH) throw HH.fragmentCompilationError = EH, new Error("FRAGMENT SHADER " + EH);
        }
        const EH = RH.getProgramInfoLog(sH);
        if (EH) throw HH.programLinkError = EH, new Error(EH);
      }
      if (EH) {
        RH.validateProgram(sH);
        if (!RH.getProgramParameter(sH, RH.VALIDATE_STATUS)) {
          const IH = RH.getProgramInfoLog(sH);
          if (IH) throw HH.programValidationError = IH, new Error(IH);
        }
      }
      RH.deleteShader(hH), RH.deleteShader(TH), HH.vertexShader = void 0, HH.fragmentShader = void 0, HH.onCompiled && (HH.onCompiled(), HH.onCompiled = void 0);
    }
    function rH(HH, IH, EH, RH, hH, TH, sH, GH, YH) {
      let QH = arguments.length > 10 ? arguments[10] : void 0,
        JH = arguments.length > 11 ? arguments[11] : void 0,
        OH = arguments.length > 12 ? arguments[12] : void 0;
      const rH = eH(HH.context);
      var FH, MH;
      JH || (JH = null !== (FH = rH.createRawShaderProgramInjection) && void 0 !== FH ? FH : AH);
      OH || (OH = null !== (MH = rH.createShaderProgramInjection) && void 0 !== MH ? MH : VH);
      const NH = HH;
      NH.program = RH ? JH(NH, IH, EH, NH.context, YH) : OH(NH, IH, EH, GH, NH.context, YH), NH.program.__SPECTOR_rebuildProgram = sH, QH();
    }
    function FH(HH, IH, EH, RH, TH, sH) {
      return MH((0, hH.c)(HH, EH, RH), IH, TH, sH);
    }
    function MH(HH, IH, EH, RH) {
      const hH = EH.createShader("vertex" === IH ? EH.VERTEX_SHADER : EH.FRAGMENT_SHADER);
      if (!hH) {
        let HH,
          hH = EH.NO_ERROR;
        for (; (HH = EH.getError()) !== EH.NO_ERROR;) hH = HH;
        throw new Error("Something went wrong while creating a gl ".concat(IH, " shader object. gl error=").concat(hH, ", gl isContextLost=").concat(EH.isContextLost(), ", _contextWasLost=").concat(RH));
      }
      return EH.shaderSource(hH, HH), EH.compileShader(hH), hH;
    }
    function NH(HH, IH) {
      IH.useProgram(HH);
    }
    function iI(HH, IH) {
      const EH = HH;
      if (!EH.isParallelCompiled) return void IH(HH);
      const RH = EH.onCompiled;
      EH.onCompiled = () => {
        null === RH || void 0 === RH || RH(), IH(HH);
      };
    }
  },
  22019: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => YH,
      f: () => JH,
      g: () => AH,
      j: () => VH
    });
    var RH = EH(21828),
      hH = EH(22023),
      TH = EH(22015),
      sH = EH(21832),
      eH = EH(21896),
      GH = EH(21889);
    function AH(HH, IH) {
      return (0, hH.u)(IH).cachedPipelines[HH];
    }
    function VH(HH) {
      const IH = HH._name,
        EH = HH.context;
      if (IH && EH) {
        const HH = (0, hH.u)(EH),
          RH = HH.cachedPipelines[IH];
        null === RH || void 0 === RH || RH.dispose(), delete HH.cachedPipelines[IH];
      }
    }
    function YH(HH, IH, EH, hH, TH, sH, GH) {
      let AH, VH;
      const YH = (0, RH.m)() ? null === sH || void 0 === sH ? void 0 : sH.getHostDocument() : null;
      AH = "string" === typeof IH ? IH : "string" === typeof IH.vertexSource ? "source:" + IH.vertexSource : "string" === typeof IH.vertexElement ? (null === YH || void 0 === YH ? void 0 : YH.getElementById(IH.vertexElement)) || IH.vertexElement : IH.vertex || IH, VH = "string" === typeof IH ? IH : "string" === typeof IH.fragmentSource ? "source:" + IH.fragmentSource : "string" === typeof IH.fragmentElement ? (null === YH || void 0 === YH ? void 0 : YH.getElementById(IH.fragmentElement)) || IH.fragmentElement : IH.fragment || IH;
      const JH = [void 0, void 0],
        OH = () => {
          if (JH[0] && JH[1]) {
            const [RH, AH] = JH;
            (0, eH.d)(HH), (0, eH.g)(RH, HH, (RH, VH) => {
              GH && (GH._vertexSourceCodeBeforeMigration = VH), EH && (RH = EH("vertex", RH)), HH.isFragment = !0, (0, eH.g)(AH, HH, (sH, AH) => {
                GH && (GH._fragmentSourceCodeBeforeMigration = AH), EH && (sH = EH("fragment", sH));
                const VH = (0, eH.b)(RH, sH, HH);
                HH = null;
                const YH = function (HH, IH, EH, RH) {
                  if (EH) {
                    return {
                      vertexSourceCode: (1 === RH ? "//" : "") + "#define SHADER_NAME vertex:" + (EH.vertexElement || EH.vertex || EH.spectorName || EH) + "\n" + HH,
                      fragmentSourceCode: (1 === RH ? "//" : "") + "#define SHADER_NAME fragment:" + (EH.fragmentElement || EH.fragment || EH.spectorName || EH) + "\n" + IH
                    };
                  }
                  return {
                    vertexSourceCode: HH,
                    fragmentSourceCode: IH
                  };
                }(VH.vertexCode, VH.fragmentCode, IH, TH);
                null === hH || void 0 === hH || hH(YH.vertexSourceCode, YH.fragmentSourceCode);
              }, sH);
            }, sH);
          }
        };
      QH(AH, "Vertex", "", HH => {
        GH && (GH._rawVertexSourceCode = HH), JH[0] = HH, OH();
      }, TH), QH(VH, "Fragment", "Pixel", HH => {
        GH && (GH._rawFragmentSourceCode = HH), JH[1] = HH, OH();
      }, TH);
    }
    function QH(HH, IH, EH, hH, sH, eH) {
      if ("undefined" !== typeof HTMLElement && HH instanceof HTMLElement) {
        return void hH((0, RH.d)(HH));
      }
      if ("source:" === HH.substring(0, 7)) return void hH(HH.substring(7));
      if ("base64:" === HH.substring(0, 7)) {
        return void hH(window.atob(HH.substring(7)));
      }
      const AH = TH.d.GetShadersStore(sH);
      if (AH[HH + IH + "Shader"]) return void hH(AH[HH + IH + "Shader"]);
      if (EH && AH[HH + EH + "Shader"]) return void hH(AH[HH + EH + "Shader"]);
      let VH;
      if (VH = "." === HH[0] || "/" === HH[0] || HH.indexOf("http") > -1 ? HH : TH.d.GetShadersRepository(sH) + HH, !(eH = eH || GH.e)) throw new Error("loadFileInjection is not defined");
      eH(VH + "." + IH.toLowerCase() + ".fx", hH);
    }
    const JH = (HH, IH, EH, RH) => {
      try {
        const TH = HH.context ? (0, hH.u)(HH.context) : null;
        TH && (TH.disableParallelShaderCompile = HH.disableParallelCompilation);
        const sH = HH.existingPipelineContext || IH(HH.shaderProcessingContext);
        return sH._name = HH.name, HH.name && TH && (TH.cachedPipelines[HH.name] = sH), EH(sH, HH.vertex, HH.fragment, !!HH.createAsRaw, "", "", HH.rebuildRebind, HH.defines, HH.transformFeedbackVaryings, "", () => {
          RH(sH, () => {
            var IH;
            null === (IH = HH.onRenderingStateCompiled) || void 0 === IH || IH.call(HH, sH);
          });
        }), sH;
      } catch (TH) {
        throw sH.e.Error("Error compiling effect"), TH;
      }
    };
  },
  22010: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => GH
    });
    var RH = EH(21786),
      hH = EH(21832),
      TH = EH(22015),
      sH = EH(22019),
      eH = EH(21900);
    class GH {
      static get ShadersRepository() {
        return TH.d.ShadersRepository;
      }
      static set ShadersRepository(HH) {
        TH.d.ShadersRepository = HH;
      }
      get sH() {
        return this._isDisposed;
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new RH.e()), this._onBindObservable;
      }
      get shaderLanguage() {
        return this._shaderLanguage;
      }
      constructor(HH, IH, EH) {
        let hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          TH = arguments.length > 4 ? arguments[4] : void 0,
          eH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          AH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          VH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          YH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          QH = arguments.length > 9 ? arguments[9] : void 0,
          JH = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          OH = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          rH = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new RH.e(), this.onErrorObservable = new RH.e(), this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = HH, this._key = JH;
        const FH = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let MH;
        if (IH.attributes) {
          var NH, iI, DH;
          const HH = IH;
          if (this._engine = EH, this._attributesNames = HH.attributes, this._uniformsNames = HH.uniformsNames.concat(HH.samplers), this._samplerList = HH.samplers.slice(), this.defines = HH.defines, this.onError = HH.onError, this.onCompiled = HH.onCompiled, this._fallbacks = HH.fallbacks, this._indexParameters = HH.indexParameters, this._transformFeedbackVaryings = HH.transformFeedbackVaryings || null, this._multiTarget = !!HH.multiTarget, this._shaderLanguage = null !== (NH = HH.shaderLanguage) && void 0 !== NH ? NH : 0, this._disableParallelShaderCompilation = !!HH.disableParallelShaderCompilation, HH.uniformBuffersNames) {
            this._uniformBuffersNamesList = HH.uniformBuffersNames.slice();
            for (let IH = 0; IH < HH.uniformBuffersNames.length; IH++) this._uniformBuffersNames[HH.uniformBuffersNames[IH]] = IH;
          }
          this._processFinalCode = null !== (iI = HH.processFinalCode) && void 0 !== iI ? iI : null, this._processCodeAfterIncludes = null !== (DH = HH.processCodeAfterIncludes) && void 0 !== DH ? DH : void 0, rH = HH.extraInitializationsAsync, MH = HH.existingPipelineContext;
        } else this._engine = TH, this.defines = null == eH ? "" : eH, this._uniformsNames = EH.concat(hH), this._samplerList = hH ? hH.slice() : [], this._attributesNames = IH, this._uniformBuffersNamesList = [], this._shaderLanguage = OH, this.onError = YH, this.onCompiled = VH, this._indexParameters = QH, this._fallbacks = AH;
        var PH;
        "WEBGL2" === this._engine.shaderPlatformName && (MH = null !== (PH = (0, sH.g)(FH, this._engine._gl)) && void 0 !== PH ? PH : MH);
        this._attributeLocationByName = {}, this.uniqueId = GH._UniqueIdSeed++, MH ? (this._pipelineContext = MH, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, rH).catch(HH => {
          var IH;
          const EH = null !== (IH = null === HH || void 0 === HH ? void 0 : HH.message) && void 0 !== IH ? IH : String(HH),
            RH = new Error('Effect async shader preparation failed for "'.concat(String(this.name), '": ').concat(EH));
          HH && "string" === typeof HH.stack && (RH.stack = "".concat(RH.message, "\nCaused by: ").concat(HH.stack)), this._processCompilationErrors(RH);
        }), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce(() => {
          this._onReleaseEffectsObserver = null, this.sH || this.dispose(!0);
        });
      }
      async _processShaderCodeAsync() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          RH = arguments.length > 3 ? arguments[3] : void 0;
        RH && (await RH()), this._processingContext = EH || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const hH = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: null !== HH && void 0 !== HH ? HH : this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: TH.d.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: TH.d.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          xO: this._engine.xO,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, sH.b)(hH, this.name, this._processFinalCode, (HH, EH) => {
          this._vertexSourceCode = HH, this._fragmentSourceCode = EH, this._prepareEffect(IH);
        }, this._shaderLanguage, this._engine, this);
      }
      get key() {
        return this._key;
      }
      isReady() {
        try {
          return this._isReadyInternal();
        } catch (HH) {
          return !1;
        }
      }
      _isReadyInternal() {
        return !!this._engine.sH || !!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady;
      }
      getEngine() {
        return this._engine;
      }
      getPipelineContext() {
        return this._pipelineContext;
      }
      getAttributesNames() {
        return this._attributesNames;
      }
      getAttributeLocation(HH) {
        return this._attributes[HH];
      }
      getAttributeLocationByName(HH) {
        return this._attributeLocationByName[HH];
      }
      getAttributesCount() {
        return this._attributes.length;
      }
      getUniformIndex(HH) {
        return this._uniformsNames.indexOf(HH);
      }
      getUniform(HH) {
        return this._uniforms[HH];
      }
      getSamplers() {
        return this._samplerList;
      }
      getUniformNames() {
        return this._uniformsNames;
      }
      getUniformBuffersNames() {
        return this._uniformBuffersNamesList;
      }
      getIndexParameters() {
        return this._indexParameters;
      }
      getCompilationError() {
        return this._compilationError;
      }
      allFallbacksProcessed() {
        return this._allFallbacksProcessed;
      }
      async whenCompiledAsync() {
        return await new Promise(HH => {
          this.executeWhenCompiled(HH);
        });
      }
      executeWhenCompiled(HH) {
        this.isReady() ? HH(this) : (this.onCompileObservable.add(IH => {
          HH(IH);
        }), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null));
      }
      _checkIsReady(HH) {
        (0, eH.f)(() => this._isReadyInternal() || this._isDisposed, () => {}, IH => {
          this._processCompilationErrors(IH, HH);
        }, 16, 12e4, !0, " - Effect: ".concat("string" === typeof this.name ? this.name : this.key));
      }
      get vertexSourceCode() {
        var HH, IH;
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._vertexSourceCodeOverride : null !== (HH = null === (IH = this._pipelineContext) || void 0 === IH ? void 0 : IH._getVertexShaderCode()) && void 0 !== HH ? HH : this._vertexSourceCode;
      }
      get fragmentSourceCode() {
        var HH, IH;
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._fragmentSourceCodeOverride : null !== (HH = null === (IH = this._pipelineContext) || void 0 === IH ? void 0 : IH._getFragmentShaderCode()) && void 0 !== HH ? HH : this._fragmentSourceCode;
      }
      get vertexSourceCodeBeforeMigration() {
        return this._vertexSourceCodeBeforeMigration;
      }
      get fragmentSourceCodeBeforeMigration() {
        return this._fragmentSourceCodeBeforeMigration;
      }
      get rawVertexSourceCode() {
        return this._rawVertexSourceCode;
      }
      get rawFragmentSourceCode() {
        return this._rawFragmentSourceCode;
      }
      getPipelineGenerationOptions() {
        return {
          platformName: this._engine.shaderPlatformName,
          shaderLanguage: this._shaderLanguage,
          shaderNameOrContent: this.name,
          key: this._key,
          defines: this.defines.split("\n"),
          addGlobalDefines: !1,
          extendedProcessingOptions: {
            indexParameters: this._indexParameters,
            isNDCHalfZRange: this._engine.isNDCHalfZRange,
            xO: this._engine.xO,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        };
      }
      _rebuildProgram(HH, IH, EH, RH) {
        this._isReady = !1, this._vertexSourceCodeOverride = HH, this._fragmentSourceCodeOverride = IH, this.onError = (HH, IH) => {
          RH && RH(IH);
        }, this.onCompiled = () => {
          var HH, IH;
          const RH = this.getEngine().scenes;
          if (RH) for (let EH = 0; EH < RH.length; EH++) RH[EH].markAllMaterialsAsDirty(127);
          null === (HH = (IH = this._pipelineContext)._handlesSpectorRebuildCallback) || void 0 === HH || HH.call(IH, EH);
        }, this._fallbacks = null, this._prepareEffect();
      }
      _onRenderingStateCompiled(HH) {
        if (this._pipelineContext = HH, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames) for (let IH = 0; IH < this._attributesNames.length; IH++) {
          const HH = this._attributesNames[IH];
          this._attributeLocationByName[HH] = this._attributes[IH];
        }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), GH.AutomaticallyClearCodeCache && this.clearCodeCache();
      }
      _prepareEffect() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IH = this._pipelineContext;
        this._isReady = !1;
        try {
          const EH = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            RH = EH ? null : this.defines,
            hH = EH ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            TH = EH ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            eH = this._engine;
          this._pipelineContext = (0, sH.f)({
            existingPipelineContext: HH ? IH : null,
            vertex: hH,
            fragment: TH,
            context: "WEBGL2" === eH.shaderPlatformName || "WEBGL1" === eH.shaderPlatformName ? eH._gl : void 0,
            rebuildRebind: (HH, IH, EH, RH) => this._rebuildProgram(HH, IH, EH, RH),
            defines: RH,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: EH,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: EH => {
              IH && !HH && this._engine._deletePipelineContext(IH), EH && this._onRenderingStateCompiled(EH);
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(IH);
        } catch (EH) {
          this._processCompilationErrors(EH, IH);
        }
      }
      _getShaderCodeAndErrorLine(HH, IH, EH) {
        const RH = EH ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let hH = null;
        if (IH && HH) {
          const TH = IH.match(RH);
          if (TH && 2 === TH.length) {
            const IH = parseInt(TH[1]),
              RH = HH.split("\n", -1);
            RH.length >= IH && (hH = "Offending line [".concat(IH, "] in ").concat(EH ? "fragment" : "vertex", " code: ").concat(RH[IH - 1]));
          }
        }
        return [HH, hH];
      }
      _processCompilationErrors(HH) {
        var IH;
        let EH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof (null === HH || void 0 === HH ? void 0 : HH.stack) ? HH.stack : null !== (IH = null === HH || void 0 === HH ? void 0 : HH.message) && void 0 !== IH ? IH : String(HH);
        const RH = this._attributesNames,
          TH = this._fallbacks;
        if (hH.e.Error("Unable to compile effect:"), hH.e.Error("Uniforms: ".concat(this._uniformsNames.join(" "))), hH.e.Error("Attributes: ".concat(RH.join(" "))), hH.e.Error("Defines:\n" + this.defines), GH.LogShaderCodeOnCompilationError) {
          var sH, eH;
          let HH,
            IH = null,
            EH = null;
          var AH;
          if (null !== (sH = this._pipelineContext) && void 0 !== sH && sH._getVertexShaderCode() && ([HH, IH] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), HH && (hH.e.Error("Vertex code:"), hH.e.Error(HH))), null !== (eH = this._pipelineContext) && void 0 !== eH && eH._getFragmentShaderCode()) [HH, EH] = this._getShaderCodeAndErrorLine(null === (AH = this._pipelineContext) || void 0 === AH ? void 0 : AH._getFragmentShaderCode(), this._compilationError, !0), HH && (hH.e.Error("Fragment code:"), hH.e.Error(HH));
          IH && hH.e.Error(IH), EH && hH.e.Error(EH);
        }
        hH.e.Error("Error: " + this._compilationError);
        const VH = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          });
        };
        EH && (this._pipelineContext = EH, this._isReady = !0, VH()), TH ? (this._pipelineContext = null, TH.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, hH.e.Error("Trying next fallback."), this.defines = TH.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, VH(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, EH || VH());
      }
      get isSupported() {
        return "" === this._compilationError;
      }
      _bindTexture(HH, IH) {
        this._engine._bindTexture(this._samplers[HH], IH, HH);
      }
      setTexture(HH, IH) {
        this._engine.setTexture(this._samplers[HH], this._uniforms[HH], IH, HH);
      }
      setTextureArray(HH, IH) {
        const EH = HH + "Ex";
        if (-1 === this._samplerList.indexOf(EH + "0")) {
          const RH = this._samplerList.indexOf(HH);
          for (let HH = 1; HH < IH.length; HH++) {
            const IH = EH + (HH - 1).toString();
            this._samplerList.splice(RH + HH, 0, IH);
          }
          let hH = 0;
          for (const HH of this._samplerList) this._samplers[HH] = hH, hH += 1;
        }
        this._engine.setTextureArray(this._samplers[HH], this._uniforms[HH], IH, HH);
      }
      bindUniformBuffer(HH, IH) {
        const EH = this._uniformBuffersNames[IH];
        void 0 === EH || GH._BaseCache[EH] === HH && this._engine._features.useUBOBindingCache || (GH._BaseCache[EH] = HH, this._engine.bindUniformBufferBase(HH, EH, IH));
      }
      bindUniformBlock(HH, IH) {
        this._engine.bindUniformBlock(this._pipelineContext, HH, IH);
      }
      setInt(HH, IH) {
        return this._pipelineContext.setInt(HH, IH), this;
      }
      setInt2(HH, IH, EH) {
        return this._pipelineContext.setInt2(HH, IH, EH), this;
      }
      setInt3(HH, IH, EH, RH) {
        return this._pipelineContext.setInt3(HH, IH, EH, RH), this;
      }
      setInt4(HH, IH, EH, RH, hH) {
        return this._pipelineContext.setInt4(HH, IH, EH, RH, hH), this;
      }
      setIntArray(HH, IH) {
        return this._pipelineContext.setIntArray(HH, IH), this;
      }
      setIntArray2(HH, IH) {
        return this._pipelineContext.setIntArray2(HH, IH), this;
      }
      setIntArray3(HH, IH) {
        return this._pipelineContext.setIntArray3(HH, IH), this;
      }
      setIntArray4(HH, IH) {
        return this._pipelineContext.setIntArray4(HH, IH), this;
      }
      setUInt(HH, IH) {
        return this._pipelineContext.setUInt(HH, IH), this;
      }
      setUInt2(HH, IH, EH) {
        return this._pipelineContext.setUInt2(HH, IH, EH), this;
      }
      setUInt3(HH, IH, EH, RH) {
        return this._pipelineContext.setUInt3(HH, IH, EH, RH), this;
      }
      setUInt4(HH, IH, EH, RH, hH) {
        return this._pipelineContext.setUInt4(HH, IH, EH, RH, hH), this;
      }
      setUIntArray(HH, IH) {
        return this._pipelineContext.setUIntArray(HH, IH), this;
      }
      setUIntArray2(HH, IH) {
        return this._pipelineContext.setUIntArray2(HH, IH), this;
      }
      setUIntArray3(HH, IH) {
        return this._pipelineContext.setUIntArray3(HH, IH), this;
      }
      setUIntArray4(HH, IH) {
        return this._pipelineContext.setUIntArray4(HH, IH), this;
      }
      setFloatArray(HH, IH) {
        return this._pipelineContext.setArray(HH, IH), this;
      }
      setFloatArray2(HH, IH) {
        return this._pipelineContext.setArray2(HH, IH), this;
      }
      setFloatArray3(HH, IH) {
        return this._pipelineContext.setArray3(HH, IH), this;
      }
      setFloatArray4(HH, IH) {
        return this._pipelineContext.setArray4(HH, IH), this;
      }
      setArray(HH, IH) {
        return this._pipelineContext.setArray(HH, IH), this;
      }
      setArray2(HH, IH) {
        return this._pipelineContext.setArray2(HH, IH), this;
      }
      setArray3(HH, IH) {
        return this._pipelineContext.setArray3(HH, IH), this;
      }
      setArray4(HH, IH) {
        return this._pipelineContext.setArray4(HH, IH), this;
      }
      setMatrices(HH, IH) {
        return this._pipelineContext.setMatrices(HH, IH), this;
      }
      setMatrix(HH, IH) {
        return this._pipelineContext.setMatrix(HH, IH), this;
      }
      setMatrix3x3(HH, IH) {
        return this._pipelineContext.setMatrix3x3(HH, IH), this;
      }
      setMatrix2x2(HH, IH) {
        return this._pipelineContext.setMatrix2x2(HH, IH), this;
      }
      setFloat(HH, IH) {
        return this._pipelineContext.setFloat(HH, IH), this;
      }
      setBool(HH, IH) {
        return this._pipelineContext.setInt(HH, IH ? 1 : 0), this;
      }
      setVector2(HH, IH) {
        return this._pipelineContext.setVector2(HH, IH), this;
      }
      setFloat2(HH, IH, EH) {
        return this._pipelineContext.setFloat2(HH, IH, EH), this;
      }
      setVector3(HH, IH) {
        return this._pipelineContext.setVector3(HH, IH), this;
      }
      setFloat3(HH, IH, EH, RH) {
        return this._pipelineContext.setFloat3(HH, IH, EH, RH), this;
      }
      setVector4(HH, IH) {
        return this._pipelineContext.setVector4(HH, IH), this;
      }
      setQuaternion(HH, IH) {
        return this._pipelineContext.setQuaternion(HH, IH), this;
      }
      setFloat4(HH, IH, EH, RH, hH) {
        return this._pipelineContext.setFloat4(HH, IH, EH, RH, hH), this;
      }
      setColor3(HH, IH) {
        return this._pipelineContext.setColor3(HH, IH), this;
      }
      setColor4(HH, IH, EH) {
        return this._pipelineContext.setColor4(HH, IH, EH), this;
      }
      setDirectColor4(HH, IH) {
        return this._pipelineContext.setDirectColor4(HH, IH), this;
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = "";
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;else {
          if (GH.PersistentMode) return;
          this._refCount--;
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, sH.j)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0);
      }
      static RegisterShader(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        IH && (TH.d.GetShadersStore(RH)["".concat(HH, "PixelShader")] = IH), EH && (TH.d.GetShadersStore(RH)["".concat(HH, "VertexShader")] = EH);
      }
      static ResetCache() {
        GH._BaseCache = {};
      }
    }
    GH.LogShaderCodeOnCompilationError = !0, GH.PersistentMode = !1, GH.AutomaticallyClearCodeCache = !1, GH._UniqueIdSeed = 0, GH._BaseCache = {}, GH.ShadersStore = TH.d.ShadersStore, GH.IncludesShadersStore = TH.d.IncludesShadersStore;
  }
};
//# sourceMappingURL=ug4nu.53.0ca8f4d0.chunk.js.map
//# debugId=fb6c7d0d-4e10-5c59-bd1b-0e7c1c66119d