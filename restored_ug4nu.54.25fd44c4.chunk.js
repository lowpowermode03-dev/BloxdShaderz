!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "43d0e12b-7c0b-5012-86f8-d22b1f2d6bd1");
  } catch (e) {}
}();
export const id = 54;
export const ids = [54];
export const modules = {
  22103: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => RH
    });
    let RH = !1;
  },
  22094: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => rH
    });
    var RH = EH(21947),
      hH = EH(21956),
      TH = EH(21786),
      sH = EH(21764),
      eH = EH(21782),
      GH = EH(21925),
      AH = EH(22098);
    class VH {
      get wrapU() {
        return this._wrapU;
      }
      set wrapU(HH) {
        this._wrapU = HH;
      }
      get wrapV() {
        return this._wrapV;
      }
      set wrapV(HH) {
        this._wrapV = HH;
      }
      get coordinatesMode() {
        return 0;
      }
      get isCube() {
        return !!this._texture && this._texture.isCube;
      }
      set isCube(HH) {
        this._texture && (this._texture.isCube = HH);
      }
      get is3D() {
        return !!this._texture && this._texture.is3D;
      }
      set is3D(HH) {
        this._texture && (this._texture.is3D = HH);
      }
      get is2DArray() {
        return !!this._texture && this._texture.is2DArray;
      }
      set is2DArray(HH) {
        this._texture && (this._texture.is2DArray = HH);
      }
      getClassName() {
        return "ThinTexture";
      }
      static _IsRenderTargetWrapper(HH) {
        return void 0 !== (null === HH || void 0 === HH ? void 0 : HH.shareDepth);
      }
      constructor(HH) {
        var IH, EH, RH;
        (this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = AH.d.Zero(), this._cachedBaseSize = AH.d.Zero(), this._initialSamplingMode = 2, this._texture = VH._IsRenderTargetWrapper(HH) ? HH.texture : HH, this._texture) && (this._engine = this._texture.getEngine(), this.wrapU = null !== (IH = this._texture._cachedWrapU) && void 0 !== IH ? IH : this.wrapU, this.wrapV = null !== (EH = this._texture._cachedWrapV) && void 0 !== EH ? EH : this.wrapV, this.wrapR = null !== (RH = this._texture._cachedWrapR) && void 0 !== RH ? RH : this.wrapR);
      }
      isReady() {
        return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady;
      }
      delayLoad() {}
      getInternalTexture() {
        return this._texture;
      }
      getSize() {
        if (this._texture) {
          if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
          if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize;
        }
        return this._cachedSize;
      }
      getBaseSize() {
        return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height = this._texture.baseHeight, this._cachedBaseSize) : (this._cachedBaseSize.width = 0, this._cachedBaseSize.height = 0, this._cachedBaseSize);
      }
      get samplingMode() {
        return this._texture ? this._texture.samplingMode : this._initialSamplingMode;
      }
      updateSamplingMode(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._texture && this._engine && this._engine.updateTextureSamplingMode(HH, this._texture, this._texture.generateMipMaps && IH);
      }
      releaseInternalTexture() {
        this._texture && (this._texture.dispose(), this._texture = null);
      }
      dispose() {
        this._texture && (this.releaseInternalTexture(), this._engine = null);
      }
    }
    var YH,
      QH,
      JH = EH(21972),
      OH = EH(21856);
    let rH = (() => {
      var HH;
      let IH,
        EH,
        AH,
        YH,
        QH,
        OH,
        rH,
        FH,
        MH,
        NH,
        iI,
        DH,
        PH,
        XH,
        mI,
        ZH,
        qH,
        LH,
        gH,
        yH,
        oH,
        kI,
        CH,
        cH,
        UH,
        WH = VH,
        BH = [],
        fH = [],
        aH = [],
        nH = [],
        pH = [],
        dH = [],
        uH = [],
        lH = [],
        KH = [],
        wH = [],
        zH = [],
        tH = [],
        jI = [],
        vH = [],
        bH = [],
        SH = [],
        xH = [],
        HI = [],
        II = [],
        EI = [],
        RI = [],
        hI = [],
        TI = [],
        sI = [],
        eI = [],
        GI = [],
        AI = [],
        VI = [],
        YI = [],
        QI = [],
        JI = [];
      return HH = class extends WH {
        set xY(HH) {
          this._hasAlpha = HH;
        }
        get xY() {
          return this._hasAlpha;
        }
        set getAlphaFromRGB(HH) {
          this._getAlphaFromRGB !== HH && (this._getAlphaFromRGB = HH, this._scene && this._scene.markAllMaterialsAsDirty(1, HH => HH.hasTexture(this)));
        }
        get getAlphaFromRGB() {
          return this._getAlphaFromRGB;
        }
        set coordinatesIndex(HH) {
          this._coordinatesIndex !== HH && (this._coordinatesIndex = HH, this._scene && this._scene.markAllMaterialsAsDirty(1, HH => HH.hasTexture(this)));
        }
        get coordinatesIndex() {
          return this._coordinatesIndex;
        }
        set coordinatesMode(HH) {
          this._coordinatesMode !== HH && (this._coordinatesMode = HH, this._scene && this._scene.markAllMaterialsAsDirty(1, HH => HH.hasTexture(this)));
        }
        get coordinatesMode() {
          return this._coordinatesMode;
        }
        get wrapU() {
          return this._wrapU;
        }
        set wrapU(HH) {
          this._wrapU = HH;
        }
        get wrapV() {
          return this._wrapV;
        }
        set wrapV(HH) {
          this._wrapV = HH;
        }
        get isCube() {
          return this._texture ? this._texture.isCube : this._isCube;
        }
        set isCube(HH) {
          this._texture ? this._texture.isCube = HH : this._isCube = HH;
        }
        get is3D() {
          return !!this._texture && this._texture.is3D;
        }
        set is3D(HH) {
          this._texture && (this._texture.is3D = HH);
        }
        get is2DArray() {
          return !!this._texture && this._texture.is2DArray;
        }
        set is2DArray(HH) {
          this._texture && (this._texture.is2DArray = HH);
        }
        get gammaSpace() {
          return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace;
        }
        set gammaSpace(HH) {
          var IH;
          if (this._texture) {
            if (this._texture._gammaSpace === HH) return;
            this._texture._gammaSpace = HH;
          } else {
            if (this._gammaSpace === HH) return;
            this._gammaSpace = HH;
          }
          null === (IH = this.kh()) || void 0 === IH || IH.markAllMaterialsAsDirty(1, HH => HH.hasTexture(this));
        }
        get isRGBD() {
          return null != this._texture && this._texture._isRGBD;
        }
        set isRGBD(HH) {
          var IH;
          HH !== this.isRGBD && (this._texture && (this._texture._isRGBD = HH), null === (IH = this.kh()) || void 0 === IH || IH.markAllMaterialsAsDirty(1, HH => HH.hasTexture(this)));
        }
        get noMipmap() {
          return !1;
        }
        get lodGenerationOffset() {
          return this._texture ? this._texture._lodGenerationOffset : 0;
        }
        set lodGenerationOffset(HH) {
          this._texture && (this._texture._lodGenerationOffset = HH);
        }
        get lodGenerationScale() {
          return this._texture ? this._texture._lodGenerationScale : 0;
        }
        set lodGenerationScale(HH) {
          this._texture && (this._texture._lodGenerationScale = HH);
        }
        get linearSpecularLOD() {
          return !!this._texture && this._texture._linearSpecularLOD;
        }
        set linearSpecularLOD(HH) {
          this._texture && (this._texture._linearSpecularLOD = HH);
        }
        get irradianceTexture() {
          return this._texture ? this._texture._irradianceTexture : null;
        }
        set irradianceTexture(HH) {
          this._texture && (this._texture._irradianceTexture = HH);
        }
        get uid() {
          return this._uid || (this._uid = (0, GH.d)()), this._uid;
        }
        toString() {
          return this.name;
        }
        getClassName() {
          return "BaseTexture";
        }
        set onDispose(HH) {
          this._onDisposeObserver && this.AM.remove(this._onDisposeObserver), this._onDisposeObserver = this.AM.add(HH);
        }
        get isBlocking() {
          return !0;
        }
        get loadingError() {
          return this._loadingError;
        }
        get errorObject() {
          return this._errorObject;
        }
        constructor(IH) {
          let EH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          super(null), this.uniqueId = ((0, RH.j)(this, BH), (0, RH.j)(this, fH, void 0)), this.name = ((0, RH.j)(this, aH), (0, RH.j)(this, nH, void 0)), this.displayName = ((0, RH.j)(this, pH), (0, RH.j)(this, dH, void 0)), this.metadata = ((0, RH.j)(this, uH), (0, RH.j)(this, lH, null)), this._internalMetadata = (0, RH.j)(this, KH), this.reservedDataStore = null, this._hasAlpha = (0, RH.j)(this, wH, !1), this._getAlphaFromRGB = ((0, RH.j)(this, zH), (0, RH.j)(this, tH, !1)), this.level = ((0, RH.j)(this, jI), (0, RH.j)(this, vH, 1)), this._coordinatesIndex = ((0, RH.j)(this, bH), (0, RH.j)(this, SH, 0)), this.optimizeUVAllocation = ((0, RH.j)(this, xH), (0, RH.j)(this, HI, !0)), this._coordinatesMode = ((0, RH.j)(this, II), (0, RH.j)(this, EI, 0)), this.wrapR = ((0, RH.j)(this, RI), (0, RH.j)(this, hI, 1)), this.anisotropicFilteringLevel = ((0, RH.j)(this, TI), (0, RH.j)(this, sI, HH.DEFAULT_ANISOTROPIC_FILTERING_LEVEL)), this._isCube = ((0, RH.j)(this, eI), !1), this._gammaSpace = !0, this.invertZ = (0, RH.j)(this, GI, !1), this.lodLevelInAlpha = ((0, RH.j)(this, AI), (0, RH.j)(this, VI, !1)), this._dominantDirection = ((0, RH.j)(this, YI), null), this.isRenderTarget = (0, RH.j)(this, QI, !1), this._prefiltered = ((0, RH.j)(this, JI), !1), this._forceSerialize = !1, this.animations = [], this.AM = new TH.e(), this._onDisposeObserver = null, this._scene = null, this._uid = null, this._parentContainer = null, this._loadingError = !1, IH ? HH._IsScene(IH) ? this._scene = IH : this._engine = IH : this._scene = eH.e.LastCreatedScene, this._scene && (this.uniqueId = this._scene.getUniqueId(), this._scene.addTexture(this), this._engine = this._scene.getEngine()), this._texture = EH, this._uid = null;
        }
        kh() {
          return this._scene;
        }
        _getEngine() {
          return this._engine;
        }
        getTextureMatrix() {
          return sH.d.IdentityReadOnly;
        }
        getReflectionTextureMatrix() {
          return sH.d.IdentityReadOnly;
        }
        getRefractionTextureMatrix() {
          return this.getReflectionTextureMatrix();
        }
        isReadyOrNotBlocking() {
          return !this.isBlocking || this.isReady() || this.loadingError;
        }
        scale(HH) {}
        get canRescale() {
          return !1;
        }
        _getFromCache(HH, IH, EH, RH, hH, TH) {
          const sH = this._getEngine();
          if (!sH) return null;
          const eH = sH._getUseSRGBBuffer(!!hH, IH),
            GH = sH.getLoadedTexturesCache();
          for (let AH = 0; AH < GH.length; AH++) {
            const sH = GH[AH];
            if ((void 0 === hH || eH === sH._useSRGBBuffer) && (void 0 === RH || RH === sH.invertY) && sH.url === HH && sH.generateMipMaps === !IH && (!EH || EH === sH.samplingMode) && (void 0 === TH || TH === sH.isCube)) return sH.incrementReferences(), sH;
          }
          return null;
        }
        _rebuild() {}
        clone() {
          return null;
        }
        get textureType() {
          return this._texture && void 0 !== this._texture.type ? this._texture.type : 0;
        }
        get textureFormat() {
          return this._texture && void 0 !== this._texture.format ? this._texture.format : 5;
        }
        _markAllSubMeshesAsTexturesDirty() {
          const HH = this.kh();
          HH && HH.markAllMaterialsAsDirty(1);
        }
        readPixels() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            RH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
            sH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            eH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
            GH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
          if (!this._texture) return null;
          const AH = this._getEngine();
          if (!AH) return null;
          const VH = this.getSize();
          let YH = VH.width,
            QH = VH.height;
          0 !== IH && (YH /= Math.pow(2, IH), QH /= Math.pow(2, IH), YH = Math.round(YH), QH = Math.round(QH)), eH = Math.min(YH, eH), GH = Math.min(QH, GH);
          try {
            return this._texture.isCube || this._texture.is2DArray ? AH._readTexturePixels(this._texture, eH, GH, HH, IH, EH, RH, hH, TH, sH) : AH._readTexturePixels(this._texture, eH, GH, -1, IH, EH, RH, hH, TH, sH);
          } catch (JH) {
            return null;
          }
        }
        _readPixelsSync() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            RH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (!this._texture) return null;
          const TH = this.getSize();
          let sH = TH.width,
            eH = TH.height;
          const GH = this._getEngine();
          if (!GH) return null;
          0 != IH && (sH /= Math.pow(2, IH), eH /= Math.pow(2, IH), sH = Math.round(sH), eH = Math.round(eH));
          try {
            return this._texture.isCube ? GH._readTexturePixelsSync(this._texture, sH, eH, HH, IH, EH, RH, hH) : GH._readTexturePixelsSync(this._texture, sH, eH, -1, IH, EH, RH, hH);
          } catch (AH) {
            return null;
          }
        }
        get _lodTextureHigh() {
          return this._texture ? this._texture._lodTextureHigh : null;
        }
        get _lodTextureMid() {
          return this._texture ? this._texture._lodTextureMid : null;
        }
        get _lodTextureLow() {
          return this._texture ? this._texture._lodTextureLow : null;
        }
        dispose() {
          if (this._scene) {
            this._scene.stopAnimation && this._scene.stopAnimation(this), this._scene.removePendingData(this);
            const HH = this._scene.textures.indexOf(this);
            if (HH >= 0 && this._scene.textures.splice(HH, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
              const HH = this._parentContainer.textures.indexOf(this);
              HH > -1 && this._parentContainer.textures.splice(HH, 1), this._parentContainer = null;
            }
          }
          this.AM.notifyObservers(this), this.AM.clear(), this.metadata = null, super.dispose();
        }
        serialize() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.name && !HH) return null;
          const IH = JH.c.Serialize(this);
          return JH.c.AppendSerializedAnimations(this, IH), IH;
        }
        static WhenAllReady(HH, IH) {
          let EH = HH.length;
          if (0 !== EH) for (let RH = 0; RH < HH.length; RH++) {
            const hH = HH[RH];
            if (hH.isReady()) 0 === --EH && IH();else {
              const HH = hH.onLoadObservable;
              HH ? HH.addOnce(() => {
                0 === --EH && IH();
              }) : 0 === --EH && IH();
            }
          } else IH();
        }
        static _IsScene(HH) {
          return "Scene" === HH.getClassName();
        }
      }, (TH => {
        const sH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (TH = WH[Symbol.metadata]) && void 0 !== TH ? TH : null) : void 0;
        IH = [(0, hH.K)()], EH = [(0, hH.K)()], AH = [(0, hH.K)()], YH = [(0, hH.K)()], QH = [(0, hH.K)("xY")], OH = [(0, hH.K)("getAlphaFromRGB")], rH = [(0, hH.K)()], FH = [(0, hH.K)("coordinatesIndex")], MH = [(0, hH.K)()], NH = [(0, hH.K)("coordinatesMode")], iI = [(0, hH.K)()], DH = [(0, hH.K)()], PH = [(0, hH.K)()], XH = [(0, hH.K)()], mI = [(0, hH.K)()], ZH = [(0, hH.K)()], qH = [(0, hH.K)()], LH = [(0, hH.K)()], gH = [(0, hH.K)()], yH = [(0, hH.K)()], oH = [(0, hH.K)()], kI = [(0, hH.K)()], CH = [(0, hH.K)()], cH = [(0, hH.F)()], UH = [(0, hH.K)()], (0, RH.i)(HH, null, iI, {
          kind: "getter",
          name: "wrapU",
          static: !1,
          private: !1,
          access: {
            has: HH => "wrapU" in HH,
            get: HH => HH.wrapU
          },
          metadata: sH
        }, null, BH), (0, RH.i)(HH, null, DH, {
          kind: "getter",
          name: "wrapV",
          static: !1,
          private: !1,
          access: {
            has: HH => "wrapV" in HH,
            get: HH => HH.wrapV
          },
          metadata: sH
        }, null, BH), (0, RH.i)(HH, null, mI, {
          kind: "getter",
          name: "isCube",
          static: !1,
          private: !1,
          access: {
            has: HH => "isCube" in HH,
            get: HH => HH.isCube
          },
          metadata: sH
        }, null, BH), (0, RH.i)(HH, null, ZH, {
          kind: "getter",
          name: "is3D",
          static: !1,
          private: !1,
          access: {
            has: HH => "is3D" in HH,
            get: HH => HH.is3D
          },
          metadata: sH
        }, null, BH), (0, RH.i)(HH, null, qH, {
          kind: "getter",
          name: "is2DArray",
          static: !1,
          private: !1,
          access: {
            has: HH => "is2DArray" in HH,
            get: HH => HH.is2DArray
          },
          metadata: sH
        }, null, BH), (0, RH.i)(HH, null, LH, {
          kind: "getter",
          name: "gammaSpace",
          static: !1,
          private: !1,
          access: {
            has: HH => "gammaSpace" in HH,
            get: HH => HH.gammaSpace
          },
          metadata: sH
        }, null, BH), (0, RH.i)(HH, null, oH, {
          kind: "getter",
          name: "lodGenerationOffset",
          static: !1,
          private: !1,
          access: {
            has: HH => "lodGenerationOffset" in HH,
            get: HH => HH.lodGenerationOffset
          },
          metadata: sH
        }, null, BH), (0, RH.i)(HH, null, kI, {
          kind: "getter",
          name: "lodGenerationScale",
          static: !1,
          private: !1,
          access: {
            has: HH => "lodGenerationScale" in HH,
            get: HH => HH.lodGenerationScale
          },
          metadata: sH
        }, null, BH), (0, RH.i)(HH, null, CH, {
          kind: "getter",
          name: "linearSpecularLOD",
          static: !1,
          private: !1,
          access: {
            has: HH => "linearSpecularLOD" in HH,
            get: HH => HH.linearSpecularLOD
          },
          metadata: sH
        }, null, BH), (0, RH.i)(HH, null, cH, {
          kind: "getter",
          name: "irradianceTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "irradianceTexture" in HH,
            get: HH => HH.irradianceTexture
          },
          metadata: sH
        }, null, BH), (0, RH.i)(null, null, IH, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: HH => "uniqueId" in HH,
            get: HH => HH.uniqueId,
            set: (HH, IH) => {
              HH.uniqueId = IH;
            }
          },
          metadata: sH
        }, fH, aH), (0, RH.i)(null, null, EH, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: HH => "name" in HH,
            get: HH => HH.name,
            set: (HH, IH) => {
              HH.name = IH;
            }
          },
          metadata: sH
        }, nH, pH), (0, RH.i)(null, null, AH, {
          kind: "field",
          name: "displayName",
          static: !1,
          private: !1,
          access: {
            has: HH => "displayName" in HH,
            get: HH => HH.displayName,
            set: (HH, IH) => {
              HH.displayName = IH;
            }
          },
          metadata: sH
        }, dH, uH), (0, RH.i)(null, null, YH, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: HH => "metadata" in HH,
            get: HH => HH.metadata,
            set: (HH, IH) => {
              HH.metadata = IH;
            }
          },
          metadata: sH
        }, lH, KH), (0, RH.i)(null, null, QH, {
          kind: "field",
          name: "_hasAlpha",
          static: !1,
          private: !1,
          access: {
            has: HH => "_hasAlpha" in HH,
            get: HH => HH._hasAlpha,
            set: (HH, IH) => {
              HH._hasAlpha = IH;
            }
          },
          metadata: sH
        }, wH, zH), (0, RH.i)(null, null, OH, {
          kind: "field",
          name: "_getAlphaFromRGB",
          static: !1,
          private: !1,
          access: {
            has: HH => "_getAlphaFromRGB" in HH,
            get: HH => HH._getAlphaFromRGB,
            set: (HH, IH) => {
              HH._getAlphaFromRGB = IH;
            }
          },
          metadata: sH
        }, tH, jI), (0, RH.i)(null, null, rH, {
          kind: "field",
          name: "level",
          static: !1,
          private: !1,
          access: {
            has: HH => "level" in HH,
            get: HH => HH.level,
            set: (HH, IH) => {
              HH.level = IH;
            }
          },
          metadata: sH
        }, vH, bH), (0, RH.i)(null, null, FH, {
          kind: "field",
          name: "_coordinatesIndex",
          static: !1,
          private: !1,
          access: {
            has: HH => "_coordinatesIndex" in HH,
            get: HH => HH._coordinatesIndex,
            set: (HH, IH) => {
              HH._coordinatesIndex = IH;
            }
          },
          metadata: sH
        }, SH, xH), (0, RH.i)(null, null, MH, {
          kind: "field",
          name: "optimizeUVAllocation",
          static: !1,
          private: !1,
          access: {
            has: HH => "optimizeUVAllocation" in HH,
            get: HH => HH.optimizeUVAllocation,
            set: (HH, IH) => {
              HH.optimizeUVAllocation = IH;
            }
          },
          metadata: sH
        }, HI, II), (0, RH.i)(null, null, NH, {
          kind: "field",
          name: "_coordinatesMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "_coordinatesMode" in HH,
            get: HH => HH._coordinatesMode,
            set: (HH, IH) => {
              HH._coordinatesMode = IH;
            }
          },
          metadata: sH
        }, EI, RI), (0, RH.i)(null, null, PH, {
          kind: "field",
          name: "wrapR",
          static: !1,
          private: !1,
          access: {
            has: HH => "wrapR" in HH,
            get: HH => HH.wrapR,
            set: (HH, IH) => {
              HH.wrapR = IH;
            }
          },
          metadata: sH
        }, hI, TI), (0, RH.i)(null, null, XH, {
          kind: "field",
          name: "anisotropicFilteringLevel",
          static: !1,
          private: !1,
          access: {
            has: HH => "anisotropicFilteringLevel" in HH,
            get: HH => HH.anisotropicFilteringLevel,
            set: (HH, IH) => {
              HH.anisotropicFilteringLevel = IH;
            }
          },
          metadata: sH
        }, sI, eI), (0, RH.i)(null, null, gH, {
          kind: "field",
          name: "invertZ",
          static: !1,
          private: !1,
          access: {
            has: HH => "invertZ" in HH,
            get: HH => HH.invertZ,
            set: (HH, IH) => {
              HH.invertZ = IH;
            }
          },
          metadata: sH
        }, GI, AI), (0, RH.i)(null, null, yH, {
          kind: "field",
          name: "lodLevelInAlpha",
          static: !1,
          private: !1,
          access: {
            has: HH => "lodLevelInAlpha" in HH,
            get: HH => HH.lodLevelInAlpha,
            set: (HH, IH) => {
              HH.lodLevelInAlpha = IH;
            }
          },
          metadata: sH
        }, VI, YI), (0, RH.i)(null, null, UH, {
          kind: "field",
          name: "isRenderTarget",
          static: !1,
          private: !1,
          access: {
            has: HH => "isRenderTarget" in HH,
            get: HH => HH.isRenderTarget,
            set: (HH, IH) => {
              HH.isRenderTarget = IH;
            }
          },
          metadata: sH
        }, QI, JI), sH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: sH
        });
      })(), HH.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, HH;
    })();
    null !== (YH = (QH = rH.prototype).forceSphericalPolynomialsRecompute) && void 0 !== YH || (QH.forceSphericalPolynomialsRecompute = (0, OH.j)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(rH.prototype, "sphericalPolynomial") || Object.defineProperty(rH.prototype, "sphericalPolynomial", (0, OH.f)("BaseTexture", "sphericalPolynomial"));
  },
  22090: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => PH,
      f: () => iI
    });
    var RH = EH(21947),
      hH = EH(21956),
      TH = EH(21786),
      sH = EH(21764),
      eH = EH(22094),
      GH = EH(21808),
      AH = EH(21856),
      VH = EH(21900),
      YH = EH(21916),
      QH = EH(21990),
      JH = EH(21882);
    function OH(HH, IH) {
      let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const RH = IH.width,
        hH = IH.height;
      if (HH instanceof Float32Array) {
        let IH = HH.byteLength / HH.BYTES_PER_ELEMENT;
        const EH = new Uint8Array(IH);
        for (; --IH >= 0;) {
          let RH = HH[IH];
          RH < 0 ? RH = 0 : RH > 1 && (RH = 1), EH[IH] = 255 * RH;
        }
        HH = EH;
      }
      const TH = document.createElement("canvas");
      TH.width = RH, TH.height = hH;
      const sH = TH.getContext("2d");
      if (!sH) return null;
      const eH = sH.createImageData(RH, hH);
      if (eH.data.set(HH), sH.putImageData(eH, 0, 0), EH) {
        const HH = document.createElement("canvas");
        HH.width = RH, HH.height = hH;
        const IH = HH.getContext("2d");
        return IH ? (IH.translate(0, hH), IH.scale(1, -1), IH.drawImage(TH, 0, 0), HH.toDataURL("image/png")) : null;
      }
      return TH.toDataURL("image/png");
    }
    function rH(HH) {
      let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const RH = HH.getInternalTexture();
      if (!RH) return null;
      const hH = HH._readPixelsSync(IH, EH);
      return hH ? OH(hH, HH.getSize(), RH.invertY) : null;
    }
    async function FH(HH) {
      let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const RH = HH.getInternalTexture();
      if (!RH) return null;
      const hH = await HH.readPixels(IH, EH);
      return hH ? OH(hH, HH.getSize(), RH.invertY) : null;
    }
    var MH = EH(22103),
      NH = EH(21972);
    let iI = (() => {
        var HH;
        let IH,
          EH,
          OH,
          iI,
          DH,
          PH,
          XH,
          mI,
          ZH,
          qH,
          LH,
          gH,
          yH,
          oH = eH.b,
          kI = [],
          CH = [],
          cH = [],
          UH = [],
          WH = [],
          BH = [],
          fH = [],
          aH = [],
          nH = [],
          pH = [],
          dH = [],
          uH = [],
          lH = [],
          KH = [],
          wH = [],
          zH = [],
          tH = [],
          jI = [],
          vH = [],
          bH = [],
          SH = [],
          xH = [],
          HI = [],
          II = [],
          EI = [];
        return HH = class extends oH {
          static _CreateVideoTexture(IH, EH, RH) {
            arguments.length > 5 && void 0 !== arguments[5] || HH.TRILINEAR_SAMPLINGMODE;
            throw (0, AH.n)("VideoTexture");
          }
          get noMipmap() {
            return this._noMipmap;
          }
          get mimeType() {
            return this._mimeType;
          }
          set isBlocking(HH) {
            this._isBlocking = HH;
          }
          get isBlocking() {
            return this._isBlocking;
          }
          get invertY() {
            return this._invertY;
          }
          constructor(IH, EH, hH, sH) {
            var eH;
            let GH,
              AH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : HH.TRILINEAR_SAMPLINGMODE,
              YH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              QH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
              JH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              OH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              rH = arguments.length > 9 ? arguments[9] : void 0,
              FH = arguments.length > 10 ? arguments[10] : void 0,
              NH = arguments.length > 11 ? arguments[11] : void 0,
              iI = arguments.length > 12 ? arguments[12] : void 0,
              DH = arguments.length > 13 ? arguments[13] : void 0;
            super(EH), this.url = ((0, RH.j)(this, kI), (0, RH.j)(this, CH, null)), this.uOffset = ((0, RH.j)(this, cH), (0, RH.j)(this, UH, 0)), this.vOffset = ((0, RH.j)(this, WH), (0, RH.j)(this, BH, 0)), this.uScale = ((0, RH.j)(this, fH), (0, RH.j)(this, aH, 1)), this.vScale = ((0, RH.j)(this, nH), (0, RH.j)(this, pH, 1)), this.uAng = ((0, RH.j)(this, dH), (0, RH.j)(this, uH, 0)), this.vAng = ((0, RH.j)(this, lH), (0, RH.j)(this, KH, 0)), this.wAng = ((0, RH.j)(this, wH), (0, RH.j)(this, zH, 0)), this.uRotationCenter = ((0, RH.j)(this, tH), (0, RH.j)(this, jI, .5)), this.vRotationCenter = ((0, RH.j)(this, vH), (0, RH.j)(this, bH, .5)), this.wRotationCenter = ((0, RH.j)(this, SH), (0, RH.j)(this, xH, .5)), this.homogeneousRotationInUVTransform = ((0, RH.j)(this, HI), (0, RH.j)(this, II, !1)), this.inspectableCustomProperties = ((0, RH.j)(this, EI), null), this._noMipmap = !1, this._invertY = !1, this._rowGenerationMatrix = null, this._cachedTextureMatrix = null, this._projectionModeMatrix = null, this._t0 = null, this._t1 = null, this._t2 = null, this._cachedUOffset = -1, this._cachedVOffset = -1, this._cachedUScale = 0, this._cachedVScale = 0, this._cachedUAng = -1, this._cachedVAng = -1, this._cachedWAng = -1, this._cachedReflectionProjectionMatrixId = -1, this._cachedURotationCenter = -1, this._cachedVRotationCenter = -1, this._cachedWRotationCenter = -1, this._cachedHomogeneousRotationInUVTransform = !1, this._cachedIdentity3x2 = !0, this._cachedReflectionTextureMatrix = null, this._cachedReflectionUOffset = -1, this._cachedReflectionVOffset = -1, this._cachedReflectionUScale = 0, this._cachedReflectionVScale = 0, this._cachedReflectionCoordinatesMode = -1, this._buffer = null, this._deleteBuffer = !1, this._format = null, this._delayedOnLoad = null, this._delayedOnError = null, this.onLoadObservable = new TH.e(), this._isBlocking = !0, this.name = IH || "", this.url = IH;
            let PH = !1,
              XH = null,
              mI = !0;
            var ZH, qH, LH, gH, yH, oH, RI, hI, TI, sI, eI;
            "object" === typeof hH && null !== hH ? (GH = null !== (ZH = hH.noMipmap) && void 0 !== ZH && ZH, sH = null !== (qH = hH.invertY) && void 0 !== qH ? qH : !MH.c, AH = null !== (LH = hH.samplingMode) && void 0 !== LH ? LH : HH.TRILINEAR_SAMPLINGMODE, YH = null !== (gH = hH.fH) && void 0 !== gH ? gH : null, QH = null !== (yH = hH.onError) && void 0 !== yH ? yH : null, JH = null !== (oH = hH.buffer) && void 0 !== oH ? oH : null, OH = null !== (RI = hH.deleteBuffer) && void 0 !== RI && RI, rH = hH.format, FH = hH.mimeType, NH = hH.loaderOptions, iI = hH.creationFlags, PH = null !== (hI = hH.useSRGBBuffer) && void 0 !== hI && hI, XH = null !== (TI = hH.internalTexture) && void 0 !== TI ? TI : null, mI = null !== (sI = hH.gammaSpace) && void 0 !== sI ? sI : mI, DH = null !== (eI = hH.forcedExtension) && void 0 !== eI ? eI : DH) : GH = !!hH;
            this._gammaSpace = mI, this._noMipmap = GH, this._invertY = void 0 === sH ? !MH.c : sH, this._initialSamplingMode = AH, this._buffer = JH, this._deleteBuffer = OH, this._mimeType = FH, this._loaderOptions = NH, this._creationFlags = iI, this._useSRGBBuffer = PH, this._forcedExtension = DH, void 0 !== rH && (this._format = rH);
            const GI = this.kh(),
              AI = this._getEngine();
            if (!AI) return;
            AI.onBeforeTextureInitObservable.notifyObservers(this);
            const VI = () => {
                this._texture && (this._texture._invertVScale && (this.vScale *= -1, this.vOffset += 1), null !== this._texture._cachedWrapU && (this.wrapU = this._texture._cachedWrapU, this._texture._cachedWrapU = null), null !== this._texture._cachedWrapV && (this.wrapV = this._texture._cachedWrapV, this._texture._cachedWrapV = null), null !== this._texture._cachedWrapR && (this.wrapR = this._texture._cachedWrapR, this._texture._cachedWrapR = null)), this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), YH && YH(), !this.isBlocking && GI && GI.resetCachedMaterial();
              },
              YI = (IH, EH) => {
                this._loadingError = !0, this._errorObject = {
                  message: IH,
                  exception: EH
                }, QH && QH(IH, EH), HH.OnTextureLoadErrorObservable.notifyObservers(this);
              };
            if (!this.url && !XH) return this._delayedOnLoad = VI, void (this._delayedOnError = YI);
            if (this._texture = null !== (eH = XH) && void 0 !== eH ? eH : this._getFromCache(this.url, GH, AH, this._invertY, PH, this.isCube), this._texture) {
              if (this._texture.isReady) VH.e.SetImmediate(() => VI());else {
                const HH = this._texture.onLoadedObservable.add(VI);
                this._texture.onErrorObservable.add(IH => {
                  var EH;
                  YI(IH.message, IH.exception), null === (EH = this._texture) || void 0 === EH || EH.onLoadedObservable.remove(HH);
                });
              }
            } else if (GI && GI.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = VI, this._delayedOnError = YI;else {
              try {
                this._texture = AI.createTexture(this.url, GH, this._invertY, GI, AH, VI, YI, this._buffer, void 0, this._format, this._forcedExtension, FH, NH, iI, PH);
              } catch (QI) {
                throw YI("error loading", QI), QI;
              }
              OH && (this._buffer = null);
            }
          }
          updateURL(HH) {
            let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              EH = arguments.length > 2 ? arguments[2] : void 0,
              RH = arguments.length > 3 ? arguments[3] : void 0;
            this.url && (this.releaseInternalTexture(), this.kh().markAllMaterialsAsDirty(1, HH => HH.hasTexture(this))), this.name && !this.name.startsWith("data:") || (this.name = HH), this.url = HH, this._buffer = IH, this._forcedExtension = RH, this.delayLoadState = 4;
            const hH = this._delayedOnLoad;
            this._delayedOnLoad = () => {
              hH ? hH() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), EH && EH();
            }, this.delayLoad();
          }
          delayLoad() {
            if (4 !== this.delayLoadState) return;
            const HH = this.kh();
            if (!HH) return;
            let IH = this.url;
            !IH && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (IH = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(IH, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delayedOnLoad && (this._texture.isReady ? VH.e.SetImmediate(this._delayedOnLoad) : this._texture.onLoadedObservable.add(this._delayedOnLoad)) : (this._texture = HH.getEngine().createTexture(IH, this._noMipmap, this._invertY, HH, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer), this._deleteBuffer && (this._buffer = null)), this._delayedOnLoad = null, this._delayedOnError = null;
          }
          _prepareRowForTextureGeneration(HH, IH, EH, RH) {
            HH *= this._cachedUScale, IH *= this._cachedVScale, HH -= this.uRotationCenter * this._cachedUScale, IH -= this.vRotationCenter * this._cachedVScale, EH -= this.wRotationCenter, sH.x.TransformCoordinatesFromFloatsToRef(HH, IH, EH, this._rowGenerationMatrix, RH), RH.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset, RH.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset, RH.z += this.wRotationCenter;
          }
          getTextureMatrix() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * HH === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) return this._cachedTextureMatrix;
            this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * HH, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = this.uRotationCenter, this._cachedVRotationCenter = this.vRotationCenter, this._cachedWRotationCenter = this.wRotationCenter, this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform, this._cachedTextureMatrix && this._rowGenerationMatrix || (this._cachedTextureMatrix = sH.d.Zero(), this._rowGenerationMatrix = new sH.d(), this._t0 = sH.x.Zero(), this._t1 = sH.x.Zero(), this._t2 = sH.x.Zero()), sH.d.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix), this.homogeneousRotationInUVTransform ? (sH.d.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, sH.p.Matrix[0]), sH.d.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, sH.p.Matrix[1]), sH.d.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, sH.p.Matrix[2]), sH.d.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, sH.p.Matrix[3]), sH.p.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(sH.p.Matrix[1], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(sH.p.Matrix[2], this._cachedTextureMatrix), this._cachedTextureMatrix.multiplyToRef(sH.p.Matrix[3], this._cachedTextureMatrix), this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1)) : (this._prepareRowForTextureGeneration(0, 0, 0, this._t0), this._prepareRowForTextureGeneration(1, 0, 0, this._t1), this._prepareRowForTextureGeneration(0, 1, 0, this._t2), this._t1.wr(this._t0), this._t2.wr(this._t0), sH.d.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0, this._t2.x, this._t2.y, this._t2.z, 0, this._t0.x, this._t0.y, this._t0.z, 0, 0, 0, 0, 1, this._cachedTextureMatrix));
            const IH = this.kh();
            if (!IH) return this._cachedTextureMatrix;
            const EH = this._cachedIdentity3x2;
            return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && EH !== this._cachedIdentity3x2 && IH.markAllMaterialsAsDirty(1, HH => HH.hasTexture(this)), this._cachedTextureMatrix;
          }
          getReflectionTextureMatrix() {
            const IH = this.kh();
            if (!IH) return this._cachedReflectionTextureMatrix;
            if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
              if (this.coordinatesMode !== HH.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
              if (this._cachedReflectionProjectionMatrixId === IH.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix;
            }
            this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = sH.d.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = sH.d.Zero());
            const EH = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
            switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMode) {
              case HH.PLANAR_MODE:
                sH.d.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
              case HH.PROJECTION_MODE:
                {
                  sH.d.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
                  const HH = IH.getProjectionMatrix();
                  this._cachedReflectionProjectionMatrixId = HH.updateFlag, HH.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                  break;
                }
              default:
                sH.d.IdentityToRef(this._cachedReflectionTextureMatrix);
            }
            return EH && IH.markAllMaterialsAsDirty(1, HH => HH.hasTexture(this)), this._cachedReflectionTextureMatrix;
          }
          clone() {
            const IH = {
              noMipmap: this._noMipmap,
              invertY: this._invertY,
              samplingMode: this.samplingMode,
              fH: void 0,
              onError: void 0,
              buffer: this._texture ? this._texture._buffer : void 0,
              deleteBuffer: this._deleteBuffer,
              format: this.textureFormat,
              mimeType: this.mimeType,
              loaderOptions: this._loaderOptions,
              creationFlags: this._creationFlags,
              useSRGBBuffer: this._useSRGBBuffer
            };
            return NH.c.Clone(() => new HH(this._texture ? this._texture.url : null, this.kh(), IH), this);
          }
          serialize() {
            var IH;
            const EH = this.name;
            HH.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
            const RH = super.serialize(HH._SerializeInternalTextureUniqueId);
            if (!RH) return null;
            if (HH.SerializeBuffers || HH.ForceSerializeBuffers) if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) RH.base64String = this._buffer, RH.name = RH.name.replace("data:", "");else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
              const HH = this.mimeType || "image/png";
              RH.base64String = "data:".concat(HH, ";base64,").concat((0, JH.m)(this._buffer));
            } else (HH.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (RH.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? rH(this) : FH(this));
            var hH;
            (RH.invertY = this._invertY, RH.samplingMode = this.samplingMode, RH._creationFlags = this._creationFlags, RH._useSRGBBuffer = this._useSRGBBuffer, HH._SerializeInternalTextureUniqueId) && (RH.internalTextureUniqueId = null === (hH = this._texture) || void 0 === hH ? void 0 : hH.uniqueId);
            return RH.internalTextureLabel = null === (IH = this._texture) || void 0 === IH ? void 0 : IH.label, RH.noMipmap = this._noMipmap, this.name = EH, RH;
          }
          getClassName() {
            return "Texture";
          }
          dispose() {
            super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null;
          }
          static Parse(IH, EH, RH) {
            if (IH.customType) {
              const HH = YH.b.Instantiate(IH.customType).Parse(IH, EH, RH);
              return IH.samplingMode && HH.updateSamplingMode && HH._samplingMode && HH._samplingMode !== IH.samplingMode && HH.updateSamplingMode(IH.samplingMode), HH;
            }
            if (IH.isCube && !IH.isRenderTarget) return HH._CubeTextureParser(IH, EH, RH);
            const hH = void 0 !== IH.internalTextureUniqueId;
            if (!IH.name && !IH.isRenderTarget && !hH) return null;
            let TH;
            if (hH) {
              const HH = EH.getEngine().getLoadedTexturesCache();
              for (const EH of HH) if (EH.uniqueId === IH.internalTextureUniqueId) {
                TH = EH;
                break;
              }
            }
            const sH = HH => {
              if (HH && HH._texture && (HH._texture._cachedWrapU = null, HH._texture._cachedWrapV = null, HH._texture._cachedWrapR = null), IH.samplingMode) {
                const EH = IH.samplingMode;
                HH && HH.samplingMode !== EH && HH.updateSamplingMode(EH);
              }
              if (HH && IH.animations) for (let EH = 0; EH < IH.animations.length; EH++) {
                const RH = IH.animations[EH],
                  hH = (0, GH.c)("BABYLON.Animation");
                hH && HH.animations.push(hH.Parse(RH));
              }
              HH && HH._texture && (hH && !TH && HH._texture._setUniqueId(IH.internalTextureUniqueId), HH._texture.label = IH.internalTextureLabel);
            };
            return NH.c.Parse(() => {
              let hH = !0;
              if (IH.noMipmap && (hH = !1), IH.mirrorPlane) {
                const RH = HH._CreateMirror(IH.name, IH.renderTargetSize, EH, hH);
                return RH._waitingRenderList = IH.renderList, RH.mirrorPlane = QH.e.Qh(IH.mirrorPlane), sH(RH), RH;
              }
              if (IH.isRenderTarget && !IH.base64String) {
                let RH = null;
                var eH;
                if (IH.isCube) {
                  if (EH.reflectionProbes) for (let HH = 0; HH < EH.reflectionProbes.length; HH++) {
                    const RH = EH.reflectionProbes[HH];
                    if (RH.name === IH.name) return RH.cubeTexture;
                  }
                } else RH = HH._CreateRenderTargetTexture(IH.name, IH.renderTargetSize, EH, hH, null !== (eH = IH._creationFlags) && void 0 !== eH ? eH : 0), RH._waitingRenderList = IH.renderList;
                return sH(RH), RH;
              }
              if (IH.isVideo) {
                const TH = HH._CreateVideoTexture(RH + (IH.url || IH.name), RH + (IH.src || IH.url), EH, hH, IH.invertY, IH.samplingMode, IH.settings || {});
                return sH(TH), TH;
              }
              {
                let eH;
                if ("string" === typeof IH.base64String && IH.base64String && !TH) {
                  var GH, AH;
                  const RH = {
                      buffer: IH.base64String,
                      noMipmap: !hH,
                      invertY: IH.invertY,
                      samplingMode: IH.samplingMode,
                      useSRGBBuffer: null !== (GH = IH._useSRGBBuffer) && void 0 !== GH && GH,
                      creationFlags: null !== (AH = IH._creationFlags) && void 0 !== AH ? AH : 0,
                      fH: () => {
                        sH(eH);
                      }
                    },
                    TH = IH.base64String,
                    VH = TH.startsWith("data:") ? TH.substring(5) : TH;
                  eH = HH.CreateFromBase64String("", VH, EH, RH), eH.name = IH.name;
                } else {
                  var VH, YH;
                  let GH;
                  GH = IH.name && (IH.name.indexOf("://") > 0 || IH.name.startsWith("data:")) ? IH.name : RH + IH.name, IH.url && (IH.url.startsWith("data:") || HH.UseSerializedUrlIfAny) && (GH = IH.url);
                  const AH = {
                    noMipmap: !hH,
                    invertY: IH.invertY,
                    samplingMode: IH.samplingMode,
                    useSRGBBuffer: null !== (VH = IH._useSRGBBuffer) && void 0 !== VH && VH,
                    creationFlags: null !== (YH = IH._creationFlags) && void 0 !== YH ? YH : 0,
                    fH: () => {
                      sH(eH);
                    },
                    internalTexture: TH
                  };
                  eH = new HH(GH, EH, AH);
                }
                return eH;
              }
            }, IH, EH);
          }
          static CreateFromBase64String(IH, EH, RH, hH, TH) {
            let sH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : HH.TRILINEAR_SAMPLINGMODE;
            return new HH("data:" + EH, RH, hH, TH, sH, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, IH, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0, void 0, arguments.length > 9 ? arguments[9] : void 0, arguments.length > 10 ? arguments[10] : void 0);
          }
          static LoadFromDataString(IH, EH, RH) {
            let hH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              TH = arguments.length > 4 ? arguments[4] : void 0,
              sH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              eH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : HH.TRILINEAR_SAMPLINGMODE,
              GH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              AH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
              VH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
              YH = arguments.length > 10 ? arguments[10] : void 0,
              QH = arguments.length > 11 ? arguments[11] : void 0;
            return "data:" !== IH.substring(0, 5) && (IH = "data:" + IH), new HH(IH, RH, TH, sH, eH, GH, AH, EH, hH, VH, void 0, void 0, YH, QH);
          }
        }, (TH => {
          const sH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (TH = oH[Symbol.metadata]) && void 0 !== TH ? TH : null) : void 0;
          IH = [(0, hH.K)()], EH = [(0, hH.K)()], OH = [(0, hH.K)()], iI = [(0, hH.K)()], DH = [(0, hH.K)()], PH = [(0, hH.K)()], XH = [(0, hH.K)()], mI = [(0, hH.K)()], ZH = [(0, hH.K)()], qH = [(0, hH.K)()], LH = [(0, hH.K)()], gH = [(0, hH.K)()], yH = [(0, hH.K)()], (0, RH.i)(HH, null, yH, {
            kind: "getter",
            name: "isBlocking",
            static: !1,
            private: !1,
            access: {
              has: HH => "isBlocking" in HH,
              get: HH => HH.isBlocking
            },
            metadata: sH
          }, null, kI), (0, RH.i)(null, null, IH, {
            kind: "field",
            name: "url",
            static: !1,
            private: !1,
            access: {
              has: HH => "url" in HH,
              get: HH => HH.url,
              set: (HH, IH) => {
                HH.url = IH;
              }
            },
            metadata: sH
          }, CH, cH), (0, RH.i)(null, null, EH, {
            kind: "field",
            name: "uOffset",
            static: !1,
            private: !1,
            access: {
              has: HH => "uOffset" in HH,
              get: HH => HH.uOffset,
              set: (HH, IH) => {
                HH.uOffset = IH;
              }
            },
            metadata: sH
          }, UH, WH), (0, RH.i)(null, null, OH, {
            kind: "field",
            name: "vOffset",
            static: !1,
            private: !1,
            access: {
              has: HH => "vOffset" in HH,
              get: HH => HH.vOffset,
              set: (HH, IH) => {
                HH.vOffset = IH;
              }
            },
            metadata: sH
          }, BH, fH), (0, RH.i)(null, null, iI, {
            kind: "field",
            name: "uScale",
            static: !1,
            private: !1,
            access: {
              has: HH => "uScale" in HH,
              get: HH => HH.uScale,
              set: (HH, IH) => {
                HH.uScale = IH;
              }
            },
            metadata: sH
          }, aH, nH), (0, RH.i)(null, null, DH, {
            kind: "field",
            name: "vScale",
            static: !1,
            private: !1,
            access: {
              has: HH => "vScale" in HH,
              get: HH => HH.vScale,
              set: (HH, IH) => {
                HH.vScale = IH;
              }
            },
            metadata: sH
          }, pH, dH), (0, RH.i)(null, null, PH, {
            kind: "field",
            name: "uAng",
            static: !1,
            private: !1,
            access: {
              has: HH => "uAng" in HH,
              get: HH => HH.uAng,
              set: (HH, IH) => {
                HH.uAng = IH;
              }
            },
            metadata: sH
          }, uH, lH), (0, RH.i)(null, null, XH, {
            kind: "field",
            name: "vAng",
            static: !1,
            private: !1,
            access: {
              has: HH => "vAng" in HH,
              get: HH => HH.vAng,
              set: (HH, IH) => {
                HH.vAng = IH;
              }
            },
            metadata: sH
          }, KH, wH), (0, RH.i)(null, null, mI, {
            kind: "field",
            name: "wAng",
            static: !1,
            private: !1,
            access: {
              has: HH => "wAng" in HH,
              get: HH => HH.wAng,
              set: (HH, IH) => {
                HH.wAng = IH;
              }
            },
            metadata: sH
          }, zH, tH), (0, RH.i)(null, null, ZH, {
            kind: "field",
            name: "uRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: HH => "uRotationCenter" in HH,
              get: HH => HH.uRotationCenter,
              set: (HH, IH) => {
                HH.uRotationCenter = IH;
              }
            },
            metadata: sH
          }, jI, vH), (0, RH.i)(null, null, qH, {
            kind: "field",
            name: "vRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: HH => "vRotationCenter" in HH,
              get: HH => HH.vRotationCenter,
              set: (HH, IH) => {
                HH.vRotationCenter = IH;
              }
            },
            metadata: sH
          }, bH, SH), (0, RH.i)(null, null, LH, {
            kind: "field",
            name: "wRotationCenter",
            static: !1,
            private: !1,
            access: {
              has: HH => "wRotationCenter" in HH,
              get: HH => HH.wRotationCenter,
              set: (HH, IH) => {
                HH.wRotationCenter = IH;
              }
            },
            metadata: sH
          }, xH, HI), (0, RH.i)(null, null, gH, {
            kind: "field",
            name: "homogeneousRotationInUVTransform",
            static: !1,
            private: !1,
            access: {
              has: HH => "homogeneousRotationInUVTransform" in HH,
              get: HH => HH.homogeneousRotationInUVTransform,
              set: (HH, IH) => {
                HH.homogeneousRotationInUVTransform = IH;
              }
            },
            metadata: sH
          }, II, EI), sH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sH
          });
        })(), HH.SerializeBuffers = !0, HH.ForceSerializeBuffers = !1, HH.OnTextureLoadErrorObservable = new TH.e(), HH._SerializeInternalTextureUniqueId = !1, HH._CubeTextureParser = (HH, IH, EH) => {
          throw (0, AH.n)("CubeTexture");
        }, HH._CreateMirror = (HH, IH, EH, RH) => {
          throw (0, AH.n)("MirrorTexture");
        }, HH._CreateRenderTargetTexture = (HH, IH, EH, RH, hH) => {
          throw (0, AH.n)("RenderTargetTexture");
        }, HH.NEAREST_SAMPLINGMODE = 1, HH.NEAREST_NEAREST_MIPLINEAR = 8, HH.BILINEAR_SAMPLINGMODE = 2, HH.LINEAR_LINEAR_MIPNEAREST = 11, HH.TRILINEAR_SAMPLINGMODE = 3, HH.LINEAR_LINEAR_MIPLINEAR = 3, HH.NEAREST_NEAREST_MIPNEAREST = 4, HH.NEAREST_LINEAR_MIPNEAREST = 5, HH.NEAREST_LINEAR_MIPLINEAR = 6, HH.NEAREST_LINEAR = 7, HH.NEAREST_NEAREST = 1, HH.LINEAR_NEAREST_MIPNEAREST = 9, HH.LINEAR_NEAREST_MIPLINEAR = 10, HH.LINEAR_LINEAR = 2, HH.LINEAR_NEAREST = 12, HH.EXPLICIT_MODE = 0, HH.SPHERICAL_MODE = 1, HH.PLANAR_MODE = 2, HH.CUBIC_MODE = 3, HH.PROJECTION_MODE = 4, HH.SKYBOX_MODE = 5, HH.INVCUBIC_MODE = 6, HH.EQUIRECTANGULAR_MODE = 7, HH.FIXED_EQUIRECTANGULAR_MODE = 8, HH.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, HH.CLAMP_ADDRESSMODE = 0, HH.WRAP_ADDRESSMODE = 1, HH.MIRROR_ADDRESSMODE = 2, HH.UseSerializedUrlIfAny = !1, HH;
      })(),
      DH = !1;
    function PH() {
      DH || (DH = !0, (0, GH.d)("BABYLON.Texture", iI), NH.c._TextureParser = iI.Parse);
    }
  },
  22098: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => RH
    });
    class RH {
      constructor(HH, IH) {
        this.width = HH, this.height = IH;
      }
      toString() {
        return "{W: ".concat(this.width, ", H: ").concat(this.height, "}");
      }
      getClassName() {
        return "Size";
      }
      getHashCode() {
        let HH = 0 | this.width;
        return HH = 397 * HH ^ this.height, HH;
      }
      RH(HH) {
        this.width = HH.width, this.height = HH.height;
      }
      nY(HH, IH) {
        return this.width = HH, this.height = IH, this;
      }
      set(HH, IH) {
        return this.nY(HH, IH);
      }
      multiplyByFloats(HH, IH) {
        return new RH(this.width * HH, this.height * IH);
      }
      clone() {
        return new RH(this.width, this.height);
      }
      equals(HH) {
        return !!HH && this.width === HH.width && this.height === HH.height;
      }
      get surface() {
        return this.width * this.height;
      }
      static Zero() {
        return new RH(0, 0);
      }
      add(HH) {
        return new RH(this.width + HH.width, this.height + HH.height);
      }
      subtract(HH) {
        return new RH(this.width - HH.width, this.height - HH.height);
      }
      scale(HH) {
        return new RH(this.width * HH, this.height * HH);
      }
      static Lerp(HH, IH, EH) {
        const hH = HH.width + (IH.width - HH.width) * EH,
          TH = HH.height + (IH.height - HH.height) * EH;
        return new RH(hH, TH);
      }
    }
  }
};
//# sourceMappingURL=ug4nu.54.25fd44c4.chunk.js.map
//# debugId=43d0e12b-7c0b-5012-86f8-d22b1f2d6bd1