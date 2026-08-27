!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "577dec31-e4f6-57f7-9e51-ba4316c7a9d3");
  } catch (e) {}
}();
export const id = 52;
export const ids = [52];
export const modules = {
  22373: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => QH
    });
    var RH = EH(21947),
      hH = EH(21956),
      TH = EH(21764),
      sH = EH(21817),
      eH = EH(21970),
      GH = EH(22235),
      AH = EH(21808),
      VH = EH(22253),
      YH = EH(21972);
    let QH = (() => {
      var HH, IH;
      let EH,
        QH,
        JH,
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
        ZH = eH.d,
        qH = [],
        LH = [],
        gH = [],
        yH = [],
        oH = [],
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
        zH = [];
      return HH = class extends ZH {
        get range() {
          return this._range;
        }
        set range(HH) {
          this._range = HH, this._inverseSquaredRange = 1 / (this.range * this.range);
        }
        get intensityMode() {
          return this._intensityMode;
        }
        set intensityMode(HH) {
          this._intensityMode = HH, this._computePhotometricScale();
        }
        get QI() {
          return this._radius;
        }
        set QI(HH) {
          this._radius = HH, this._computePhotometricScale();
        }
        get renderPriority() {
          return (0, RH.d)(this, IH, "f");
        }
        set renderPriority(HH) {
          (0, RH.g)(this, IH, HH, "f");
        }
        get shadowEnabled() {
          return this._shadowEnabled;
        }
        set shadowEnabled(HH) {
          this._shadowEnabled !== HH && (this._shadowEnabled = HH, this._markMeshesAsLightDirty());
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes;
        }
        set includedOnlyMeshes(HH) {
          this._includedOnlyMeshes = HH, this._hookArrayForIncludedOnly(HH);
        }
        get excludedMeshes() {
          return this._excludedMeshes;
        }
        set excludedMeshes(HH) {
          this._excludedMeshes = HH, this._hookArrayForExcluded(HH);
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask;
        }
        set excludeWithLayerMask(HH) {
          this._excludeWithLayerMask = HH, this._resyncMeshes();
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask;
        }
        set includeOnlyWithLayerMask(HH) {
          this._includeOnlyWithLayerMask = HH, this._resyncMeshes();
        }
        get lightmapMode() {
          return this._lightmapMode;
        }
        set lightmapMode(HH) {
          this._lightmapMode !== HH && (this._lightmapMode = HH, this._markMeshesAsLightDirty());
        }
        getViewMatrix(HH) {
          return null;
        }
        getProjectionMatrix(HH, IH) {
          return null;
        }
        constructor(EH, hH, TH) {
          super(EH, hH, !1), this.Ir = ((0, RH.j)(this, qH), (0, RH.j)(this, LH, new sH.b(1, 1, 1))), this.Er = ((0, RH.j)(this, gH), (0, RH.j)(this, yH, new sH.b(1, 1, 1))), this.falloffType = ((0, RH.j)(this, oH), (0, RH.j)(this, kI, HH.FALLOFF_DEFAULT)), this.xF = ((0, RH.j)(this, CH), (0, RH.j)(this, cH, 1)), this._range = ((0, RH.j)(this, UH), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = HH.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, RH.j)(this, WH, void 0), IH.set(this, ((0, RH.j)(this, BH), (0, RH.j)(this, fH, 0))), this._shadowEnabled = ((0, RH.j)(this, aH), (0, RH.j)(this, nH, !0)), this._includedOnlyMeshes = (0, RH.j)(this, pH), this._excludeWithLayerMask = (0, RH.j)(this, dH, 0), this._includeOnlyWithLayerMask = ((0, RH.j)(this, uH), (0, RH.j)(this, lH, 0)), this._lightmapMode = ((0, RH.j)(this, KH), (0, RH.j)(this, wH, 0)), this._shadowGenerators = ((0, RH.j)(this, zH), null), this._excludedMeshesIds = new Array(), this._includedOnlyMeshesIds = new Array(), this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, TH || this.kh().addLight(this), this._uniformBuffer = new GH.e(this.kh().getEngine(), void 0, void 0, EH), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], TH || this._resyncMeshes();
        }
        transferTexturesToEffect(HH, IH) {
          return this;
        }
        _bindLight(HH, IH, EH, RH) {
          let hH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const TH = HH.toString();
          let eH = !1;
          if (this._uniformBuffer.bindToEffect(EH, "Light" + TH), this._renderId !== IH.getRenderId() || this._lastUseSpecular !== RH || !this._uniformBuffer.useUbo) {
            this._renderId = IH.getRenderId(), this._lastUseSpecular = RH;
            const HH = this.getScaledIntensity();
            this.transferToEffect(EH, TH), this.Ir.scaleToRef(HH, sH.i.Ah[0]), this._uniformBuffer.updateColor4("vLightDiffuse", sH.i.Ah[0], this.range, TH), RH && (this.Er.scaleToRef(HH, sH.i.Ah[1]), this._uniformBuffer.updateColor4("vLightSpecular", sH.i.Ah[1], this.QI, TH)), eH = !0;
          }
          if (this.transferTexturesToEffect(EH, TH), IH.shadowsEnabled && this.shadowEnabled && hH) {
            var GH;
            const HH = null !== (GH = this.getShadowGenerator(IH.activeCamera)) && void 0 !== GH ? GH : this.getShadowGenerator();
            HH && (HH.bindShadowLight(TH, EH), eH = !0);
          }
          eH ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer();
        }
        getClassName() {
          return "Light";
        }
        toString(HH) {
          let IH = "Name: " + this.name;
          if (IH += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations) for (let EH = 0; EH < this.animations.length; EH++) IH += ", animation[0]: " + this.animations[EH].toString(HH);
          return IH;
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.sH() || this._resyncMeshes();
        }
        hY(HH) {
          super.hY(HH), this._resyncMeshes();
        }
        getShadowGenerator() {
          var HH;
          let IH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : null !== (HH = this._shadowGenerators.get(IH)) && void 0 !== HH ? HH : null;
        }
        getShadowGenerators() {
          return this._shadowGenerators;
        }
        getAbsolutePosition() {
          return TH.x.Zero();
        }
        canAffectMesh(HH) {
          return !HH || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(HH)) && !(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(HH)) && (0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & HH.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & HH.layerMask);
        }
        dispose(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const HH = this._shadowGenerators.values();
            for (let IH = HH.next(); !0 !== IH.done; IH = HH.next()) {
              IH.value.dispose();
            }
            this._shadowGenerators = null;
          }
          if (this.kh().stopAnimation(this), this._parentContainer) {
            const HH = this._parentContainer.lights.indexOf(this);
            HH > -1 && this._parentContainer.lights.splice(HH, 1), this._parentContainer = null;
          }
          for (const EH of this.kh().meshes) EH._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.kh().removeLight(this), super.dispose(HH, IH);
        }
        getTypeID() {
          return 0;
        }
        getScaledIntensity() {
          return this._photometricScale * this.xF;
        }
        clone(IH) {
          let EH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const RH = HH.GetConstructorFromName(this.getTypeID(), IH, this.kh());
          if (!RH) return null;
          const hH = YH.c.Clone(RH, this);
          return IH && (hH.name = IH), EH && (hH.parent = EH), hH.hY(this.isEnabled()), this.onClonedObservable.notifyObservers(hH), hH;
        }
        serialize() {
          const HH = YH.c.Serialize(this);
          if (HH.uniqueId = this.uniqueId, HH.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(HH), this.excludedMeshes.length > 0) {
            HH.excludedMeshesIds = [];
            for (const IH of this.excludedMeshes) HH.excludedMeshesIds.push(IH.id);
          }
          if (this.includedOnlyMeshes.length > 0) {
            HH.includedOnlyMeshesIds = [];
            for (const IH of this.includedOnlyMeshes) HH.includedOnlyMeshesIds.push(IH.id);
          }
          return YH.c.AppendSerializedAnimations(this, HH), HH.ranges = this.serializeAnimationRanges(), HH.isEnabled = this.isEnabled(), HH;
        }
        static GetConstructorFromName(HH, IH, EH) {
          const RH = eH.d.Construct("Light_Type_" + HH, IH, EH);
          return RH || null;
        }
        static Parse(IH, EH) {
          let RH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const hH = HH.GetConstructorFromName(IH.type, IH.name, EH);
          if (!hH) return null;
          const TH = YH.c.Parse(hH, IH, EH, RH);
          if (IH.excludedMeshesIds && (TH._excludedMeshesIds = IH.excludedMeshesIds), IH.includedOnlyMeshesIds && (TH._includedOnlyMeshesIds = IH.includedOnlyMeshesIds), void 0 !== IH.parentId && (TH._waitingParentId = IH.parentId), void 0 !== IH.parentInstanceIndex && (TH._waitingParentInstanceIndex = IH.parentInstanceIndex), void 0 !== IH.falloffType && (TH.falloffType = IH.falloffType), void 0 !== IH.lightmapMode && (TH.lightmapMode = IH.lightmapMode), IH.animations) {
            for (let HH = 0; HH < IH.animations.length; HH++) {
              const EH = IH.animations[HH],
                RH = (0, AH.c)("BABYLON.Animation");
              RH && TH.animations.push(RH.Parse(EH));
            }
            eH.d.ParseAnimationRanges(TH, IH, EH);
          }
          return IH.autoAnimate && EH.beginAnimation(TH, IH.autoAnimateFrom, IH.autoAnimateTo, IH.autoAnimateLoop, IH.autoAnimateSpeed || 1), void 0 !== IH.isEnabled && TH.hY(IH.isEnabled), TH._onParsed(IH, EH, RH), TH;
        }
        _onParsed(HH, IH) {}
        _hookArrayForExcluded(HH) {
          var IH = this;
          const EH = HH.push;
          HH.push = function () {
            for (var RH = arguments.length, hH = new Array(RH), TH = 0; TH < RH; TH++) hH[TH] = arguments[TH];
            const sH = EH.apply(HH, hH);
            if (IH._clusteredContainer) return sH;
            for (const HH of hH) HH._resyncLightSource(IH);
            return sH;
          };
          const RH = HH.splice;
          if (HH.splice = (IH, EH) => {
            const hH = RH.call(HH, IH, null !== EH && void 0 !== EH ? EH : HH.length);
            if (this._clusteredContainer) return hH;
            for (const HH of hH) HH._resyncLightSource(this);
            return hH;
          }, !this._clusteredContainer) for (const hH of HH) hH._resyncLightSource(this);
        }
        _hookArrayForIncludedOnly(HH) {
          var IH = this;
          const EH = HH.push;
          HH.push = function () {
            for (var RH = arguments.length, hH = new Array(RH), TH = 0; TH < RH; TH++) hH[TH] = arguments[TH];
            const sH = EH.apply(HH, hH);
            return IH._resyncMeshes(), sH;
          };
          const RH = HH.splice;
          HH.splice = (IH, EH) => {
            const hH = RH.call(HH, IH, null !== EH && void 0 !== EH ? EH : HH.length);
            return this._resyncMeshes(), hH;
          }, this._resyncMeshes();
        }
        _resyncMeshes() {
          if (!this._clusteredContainer) for (const HH of this.kh().meshes) HH._resyncLightSource(this);
        }
        _markMeshesAsLightDirty() {
          for (const HH of this.kh().meshes) -1 !== HH.lightSources.indexOf(this) && HH._markSubMeshesAsLightDirty();
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.kh().resetCachedMaterial();
        }
        _getPhotometricScale() {
          let IH = 0;
          const EH = this.getTypeID();
          let RH = this.intensityMode;
          switch (RH === HH.INTENSITYMODE_AUTOMATIC && (RH = EH === HH.LIGHTTYPEID_DIRECTIONALLIGHT ? HH.INTENSITYMODE_ILLUMINANCE : HH.INTENSITYMODE_LUMINOUSINTENSITY), EH) {
            case HH.LIGHTTYPEID_POINTLIGHT:
            case HH.LIGHTTYPEID_SPOTLIGHT:
              switch (RH) {
                case HH.INTENSITYMODE_LUMINOUSPOWER:
                  IH = 1 / (4 * Math.PI);
                  break;
                case HH.INTENSITYMODE_LUMINOUSINTENSITY:
                  IH = 1;
                  break;
                case HH.INTENSITYMODE_LUMINANCE:
                  IH = this.QI * this.QI;
              }
              break;
            case HH.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (RH) {
                case HH.INTENSITYMODE_ILLUMINANCE:
                  IH = 1;
                  break;
                case HH.INTENSITYMODE_LUMINANCE:
                  {
                    let HH = this.QI;
                    HH = Math.max(HH, .001);
                    IH = 2 * Math.PI * (1 - Math.cos(HH));
                    break;
                  }
              }
              break;
            case HH.LIGHTTYPEID_HEMISPHERICLIGHT:
            case HH.LIGHTTYPEID_RECT_AREALIGHT:
              IH = 1;
          }
          return IH;
        }
        _reorderLightsInScene() {
          const HH = this.kh();
          0 != this._renderPriority && (HH.requireLightSorting = !0), this.kh().sortLightsByPriority();
        }
        areLightTexturesReady() {
          return !0;
        }
        _isReady() {
          return !0;
        }
      }, IH = new WeakMap(), (IH => {
        const TH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (IH = ZH[Symbol.metadata]) && void 0 !== IH ? IH : null) : void 0;
        EH = [(0, hH.m)()], QH = [(0, hH.m)()], JH = [(0, hH.K)()], OH = [(0, hH.K)()], rH = [(0, hH.K)()], FH = [(0, hH.K)()], MH = [(0, hH.K)()], NH = [(0, hH.K)()], iI = [(0, hH.d)("_reorderLightsInScene")], DH = [(0, hH.K)("shadowEnabled")], PH = [(0, hH.K)("excludeWithLayerMask")], XH = [(0, hH.K)("includeOnlyWithLayerMask")], mI = [(0, hH.K)("lightmapMode")], (0, RH.i)(HH, null, rH, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: HH => "range" in HH,
            get: HH => HH.range
          },
          metadata: TH
        }, null, qH), (0, RH.i)(HH, null, FH, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "intensityMode" in HH,
            get: HH => HH.intensityMode
          },
          metadata: TH
        }, null, qH), (0, RH.i)(HH, null, MH, {
          kind: "getter",
          name: "QI",
          static: !1,
          private: !1,
          access: {
            has: HH => "QI" in HH,
            get: HH => HH.QI
          },
          metadata: TH
        }, null, qH), (0, RH.i)(HH, null, iI, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: HH => "renderPriority" in HH,
            get: HH => HH.renderPriority,
            set: (HH, IH) => {
              HH.renderPriority = IH;
            }
          },
          metadata: TH
        }, fH, aH), (0, RH.i)(null, null, EH, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: HH => "Ir" in HH,
            get: HH => HH.Ir,
            set: (HH, IH) => {
              HH.Ir = IH;
            }
          },
          metadata: TH
        }, LH, gH), (0, RH.i)(null, null, QH, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: HH => "Er" in HH,
            get: HH => HH.Er,
            set: (HH, IH) => {
              HH.Er = IH;
            }
          },
          metadata: TH
        }, yH, oH), (0, RH.i)(null, null, JH, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: HH => "falloffType" in HH,
            get: HH => HH.falloffType,
            set: (HH, IH) => {
              HH.falloffType = IH;
            }
          },
          metadata: TH
        }, kI, CH), (0, RH.i)(null, null, OH, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "xF" in HH,
            get: HH => HH.xF,
            set: (HH, IH) => {
              HH.xF = IH;
            }
          },
          metadata: TH
        }, cH, UH), (0, RH.i)(null, null, NH, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: HH => "_renderPriority" in HH,
            get: HH => HH._renderPriority,
            set: (HH, IH) => {
              HH._renderPriority = IH;
            }
          },
          metadata: TH
        }, WH, BH), (0, RH.i)(null, null, DH, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "_shadowEnabled" in HH,
            get: HH => HH._shadowEnabled,
            set: (HH, IH) => {
              HH._shadowEnabled = IH;
            }
          },
          metadata: TH
        }, nH, pH), (0, RH.i)(null, null, PH, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: HH => "_excludeWithLayerMask" in HH,
            get: HH => HH._excludeWithLayerMask,
            set: (HH, IH) => {
              HH._excludeWithLayerMask = IH;
            }
          },
          metadata: TH
        }, dH, uH), (0, RH.i)(null, null, XH, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: HH => "_includeOnlyWithLayerMask" in HH,
            get: HH => HH._includeOnlyWithLayerMask,
            set: (HH, IH) => {
              HH._includeOnlyWithLayerMask = IH;
            }
          },
          metadata: TH
        }, lH, KH), (0, RH.i)(null, null, mI, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "_lightmapMode" in HH,
            get: HH => HH._lightmapMode,
            set: (HH, IH) => {
              HH._lightmapMode = IH;
            }
          },
          metadata: TH
        }, wH, zH), TH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TH
        });
      })(), HH.FALLOFF_DEFAULT = VH.b.FALLOFF_DEFAULT, HH.FALLOFF_PHYSICAL = VH.b.FALLOFF_PHYSICAL, HH.FALLOFF_GLTF = VH.b.FALLOFF_GLTF, HH.FALLOFF_STANDARD = VH.b.FALLOFF_STANDARD, HH.LIGHTMAP_DEFAULT = VH.b.LIGHTMAP_DEFAULT, HH.LIGHTMAP_SPECULAR = VH.b.LIGHTMAP_SPECULAR, HH.LIGHTMAP_SHADOWSONLY = VH.b.LIGHTMAP_SHADOWSONLY, HH.INTENSITYMODE_AUTOMATIC = VH.b.INTENSITYMODE_AUTOMATIC, HH.INTENSITYMODE_LUMINOUSPOWER = VH.b.INTENSITYMODE_LUMINOUSPOWER, HH.INTENSITYMODE_LUMINOUSINTENSITY = VH.b.INTENSITYMODE_LUMINOUSINTENSITY, HH.INTENSITYMODE_ILLUMINANCE = VH.b.INTENSITYMODE_ILLUMINANCE, HH.INTENSITYMODE_LUMINANCE = VH.b.INTENSITYMODE_LUMINANCE, HH.LIGHTTYPEID_POINTLIGHT = VH.b.LIGHTTYPEID_POINTLIGHT, HH.LIGHTTYPEID_DIRECTIONALLIGHT = VH.b.LIGHTTYPEID_DIRECTIONALLIGHT, HH.LIGHTTYPEID_SPOTLIGHT = VH.b.LIGHTTYPEID_SPOTLIGHT, HH.LIGHTTYPEID_HEMISPHERICLIGHT = VH.b.LIGHTTYPEID_HEMISPHERICLIGHT, HH.LIGHTTYPEID_RECT_AREALIGHT = VH.b.LIGHTTYPEID_RECT_AREALIGHT, HH;
    })();
  },
  24005: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => NH
    });
    var RH = EH(21786),
      hH = EH(21764),
      TH = EH(22090),
      sH = EH(22323),
      eH = EH(21930),
      GH = EH(21832),
      AH = EH(17),
      VH = EH(22235),
      YH = EH(22326),
      QH = EH(21776),
      JH = EH(21900),
      OH = EH(21968),
      rH = EH(22253);
    class FH {
      get renderList() {
        return this._renderList;
      }
      set renderList(HH) {
        this._renderList !== HH && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), HH && (this._unObserveRenderList = (0, QH.e)(HH, this._renderListHasChanged)), this._renderList = HH);
      }
      get disableImageProcessing() {
        return this._disableImageProcessing;
      }
      set disableImageProcessing(HH) {
        HH !== this._disableImageProcessing && (this._disableImageProcessing = HH, this._scene.markAllMaterialsAsDirty(64));
      }
      get disableDepthPrePass() {
        return this._disableDepthPrePass;
      }
      set disableDepthPrePass(HH) {
        this._disableDepthPrePass = HH, this._renderingManager.disableDepthPrePass = HH;
      }
      get name() {
        return this._name;
      }
      set name(HH) {
        if (this._name !== HH) {
          if (this._name = HH, this._sceneUBOs) for (let HH = 0; HH < this._sceneUBOs.length; ++HH) this._sceneUBOs[HH].name = "Scene ubo #".concat(HH, " for ").concat(this.name);
          if (this._scene) for (let HH = 0; HH < this._renderPassIds.length; ++HH) {
            const IH = this._renderPassIds[HH];
            this._engine._renderPassNames[IH] = "".concat(this._name, "#").concat(HH);
          }
        }
      }
      get renderPassIds() {
        return this._renderPassIds;
      }
      get currentRefreshId() {
        return this._currentRefreshId;
      }
      getActiveMeshes() {
        return this._activeMeshes;
      }
      setMaterialForRendering(HH, IH) {
        let EH;
        EH = Array.isArray(HH) ? HH : [HH];
        for (let RH = 0; RH < EH.length; ++RH) for (let HH = 0; HH < this.options.numPasses; ++HH) {
          let hH = EH[RH];
          EH[RH].isAnInstance && (hH = EH[RH].pO), hH.setMaterialForRenderPass(this._renderPassIds[HH], void 0 !== IH ? Array.isArray(IH) ? IH[HH] : IH : void 0);
        }
      }
      _freezeActiveMeshes(HH) {
        this._freezeActiveMeshesCancel = (0, JH.f)(() => this._checkReadiness(), () => {
          if (this._freezeActiveMeshesCancel = null, HH) for (let HH = 0; HH < this._activeMeshes.length; HH++) this._activeMeshes.data[HH]._freeze();
          this._prepareRenderingManager(0, !0), this._isFrozen = !0;
        }, (HH, IH) => {
          this._freezeActiveMeshesCancel = null, IH ? (GH.e.Error("ObjectRenderer: Timeout while waiting for the renderer to be ready."), HH && GH.e.Error(HH)) : (GH.e.Error("ObjectRenderer: An unexpected error occurred while waiting for the renderer to be ready."), HH && (GH.e.Error(HH), HH.stack && GH.e.Error(HH.stack)));
        });
      }
      _unfreezeActiveMeshes() {
        var HH;
        null === (HH = this._freezeActiveMeshesCancel) || void 0 === HH || HH.call(this), this._freezeActiveMeshesCancel = null;
        for (let IH = 0; IH < this._activeMeshes.length; IH++) this._activeMeshes.data[IH]._unFreeze();
        this._isFrozen = !1;
      }
      constructor(HH, IH, EH) {
        this._unObserveRenderList = null, this._renderListHasChanged = (HH, IH) => {
          const EH = this._renderList ? this._renderList.length : 0;
          if (0 === IH && EH > 0 || 0 === EH) for (const RH of this._scene.meshes) RH._markSubMeshesAsLightDirty();
        }, this.particleSystemList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticles = !0, this.renderSprites = !1, this.forceLayerMaskCheck = !1, this.enableBoundingBoxRendering = !1, this.enableOutlineRendering = !0, this._disableImageProcessing = !1, this.dontSetTransformationMatrix = !1, this._disableDepthPrePass = !1, this.onBeforeRenderObservable = new RH.e(), this.onAfterRenderObservable = new RH.e(), this.onBeforeRenderingManagerRenderObservable = new RH.e(), this.onAfterRenderingManagerRenderObservable = new RH.e(), this.onInitRenderingObservable = new RH.e(), this.onFinishRenderingObservable = new RH.e(), this.onFastPathRenderObservable = new RH.e(), this._currentRefreshId = -1, this._refreshRate = 1, this._currentApplyByPostProcessSetting = !1, this._activeMeshes = new OH.e(256), this._activeBoundingBoxes = new OH.e(32), this._currentFrameId = -1, this._currentSceneUBOIndex = 0, this._isFrozen = !1, this._freezeActiveMeshesCancel = null, this._currentSceneCamera = null, this.name = HH, this._scene = IH, this._engine = this._scene.getEngine(), this._useUBO = this._engine.supportsUniformBuffers, this.renderList = [], this._renderPassIds = [], this.options = (0, AH.b)({
          numPasses: 1,
          doNotChangeAspectRatio: !0,
          enableClusteredLights: !1
        }, EH), this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new YH.e(IH), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add(() => {
          for (const HH of this._scene.lights) HH.getTypeID() === rH.b.LIGHTTYPEID_CLUSTERED_CONTAINER && HH.isSupported && HH._updateBatches(this.activeCamera).render();
        }), this._scene.addObjectRenderer(this);
      }
      _releaseRenderPassId() {
        for (let HH = 0; HH < this.options.numPasses; ++HH) this._engine.releaseRenderPassId(this._renderPassIds[HH]);
        this._renderPassIds.length = 0;
      }
      _createRenderPassId() {
        this._releaseRenderPassId();
        for (let HH = 0; HH < this.options.numPasses; ++HH) this._renderPassIds[HH] = this._engine.createRenderPassId("".concat(this.name, "#").concat(HH));
      }
      _createSceneUBO(HH, IH) {
        const EH = this._scene.getEngine(),
          RH = new VH.e(EH, void 0, IH, HH, void 0, !1);
        return RH.addUniform("viewProjection", 16), IH && RH.addUniform("viewProjectionR", 16), RH.addUniform("view", 16), RH.addUniform("projection", 16), RH.addUniform("vEyePosition", 4), RH.addUniform("inverseProjection", 16), RH;
      }
      _getSceneUBO() {
        var HH;
        this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
        const IH = this._engine._currentRenderTarget,
          EH = !(!IH || null === (HH = IH.texture) || void 0 === HH || !HH.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
        if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
          const HH = this._sceneUBOs.length;
          this._sceneUBOs.push(this._createSceneUBO("Scene ubo #".concat(HH, " for ").concat(this.name), EH)), this._sceneUBOIsMultiview.push(EH);
        } else this._sceneUBOIsMultiview[this._currentSceneUBOIndex] !== EH && (this._sceneUBOs[this._currentSceneUBOIndex].dispose(), this._sceneUBOs[this._currentSceneUBOIndex] = this._createSceneUBO("Scene ubo #".concat(this._currentSceneUBOIndex, " for ").concat(this.name), EH), this._sceneUBOIsMultiview[this._currentSceneUBOIndex] = EH);
        const RH = this._sceneUBOs[this._currentSceneUBOIndex++];
        return RH.unbindEffect(), RH;
      }
      resetRefreshCounter() {
        this._currentRefreshId = -1;
      }
      get refreshRate() {
        return this._refreshRate;
      }
      set refreshRate(HH) {
        this._refreshRate = HH, this.resetRefreshCounter();
      }
      shouldRender() {
        return !!this._engine.snapshotRendering || (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, !0) : (this._currentRefreshId++, !1));
      }
      isReadyForRendering(HH, IH) {
        this.prepareRenderList(), this.initRender(HH, IH);
        const EH = this._checkReadiness();
        return this.finishRender(), EH;
      }
      prepareRenderList() {
        const HH = this._scene;
        if (this._waitingRenderList) {
          if (!this.renderListPredicate) {
            this.renderList = [];
            for (let IH = 0; IH < this._waitingRenderList.length; IH++) {
              const EH = this._waitingRenderList[IH],
                RH = HH.getMeshById(EH);
              RH && this.renderList.push(RH);
            }
          }
          this._waitingRenderList = void 0;
        }
        if (this.renderListPredicate) {
          this.renderList ? this.renderList.length = 0 : this.renderList = [];
          const HH = this._scene.meshes;
          for (let IH = 0; IH < HH.length; IH++) {
            const EH = HH[IH];
            this.renderListPredicate(EH) && this.renderList.push(EH);
          }
        }
        this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing);
      }
      initRender(HH, IH) {
        var EH;
        const RH = null !== (EH = this.activeCamera) && void 0 !== EH ? EH : this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers(this), RH && (this.dontSetTransformationMatrix || this._scene.setTransformMatrix(RH.getViewMatrix(), RH.getProjectionMatrix(!0)), this._scene._activeCamera = RH, this._engine.setViewport(RH.rigParent ? RH.rigParent.viewport : RH.viewport, HH, IH)), this._useUBO && this._scene.finalizeSceneUbo(), this._defaultRenderListPrepared = !1;
      }
      finishRender() {
        const HH = this._scene;
        this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (HH.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), HH._activeCamera = this._currentSceneCamera, this._currentSceneCamera && (this.activeCamera && this.activeCamera !== HH.activeCamera && HH.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(!0)), this._engine.setViewport(this._currentSceneCamera.viewport)), HH.resetCachedMaterial(), this.onFinishRenderingObservable.notifyObservers(this);
      }
      render() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const EH = this._engine.currentRenderPassId;
        this._engine.currentRenderPassId = this._renderPassIds[HH], this.onBeforeRenderObservable.notifyObservers(HH);
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(HH);else {
          var RH, hH;
          const IH = this._prepareRenderingManager(HH),
            EH = null === (RH = (hH = this._scene).getOutlineRenderer) || void 0 === RH ? void 0 : RH.call(hH),
            TH = null === EH || void 0 === EH ? void 0 : EH.enabled;
          EH && (EH.enabled = this.enableOutlineRendering), this.onBeforeRenderingManagerRenderObservable.notifyObservers(HH), this._renderingManager.render(this.customRenderFunction, IH, this.renderParticles, this.renderSprites, this.renderDepthOnlyMeshes, this.renderOpaqueMeshes, this.renderAlphaTestMeshes, this.renderTransparentMeshes, this.customRenderTransparentSubMeshes), this.onAfterRenderingManagerRenderObservable.notifyObservers(HH), EH && (EH.enabled = TH);
        }
        IH || this.onAfterRenderObservable.notifyObservers(HH), this._engine.currentRenderPassId = EH;
      }
      _checkReadiness() {
        const HH = this._scene,
          IH = this._engine.currentRenderPassId;
        let EH = !0;
        HH.getViewMatrix() || HH.updateTransformMatrix();
        const RH = this.options.numPasses;
        for (let TH = 0; TH < RH && EH; TH++) {
          const IH = this.renderList ? this.renderList : HH.frameGraph ? HH.meshes : HH.getActiveMeshes().data,
            hH = this.renderList || HH.frameGraph ? IH.length : HH.getActiveMeshes().length;
          this._engine.currentRenderPassId = this._renderPassIds[TH], this.onBeforeRenderObservable.notifyObservers(TH);
          let sH = null,
            eH = hH;
          this.getCustomRenderList && (sH = this.getCustomRenderList(TH, IH, hH), sH && (eH = sH.length)), sH || (sH = IH), this.options.doNotChangeAspectRatio || HH.updateTransformMatrix(!0);
          for (let HH = 0; HH < eH && EH; ++HH) {
            const IH = sH[HH];
            if (IH.isEnabled() && !IH.isBlocked && IH.isVisible && IH.BJ) if (this.customIsReadyFunction) {
              if (!this.customIsReadyFunction(IH, this.refreshRate, !0)) {
                EH = !1;
                continue;
              }
            } else if (!IH.isReady(!0)) {
              EH = !1;
              continue;
            }
          }
          this.onAfterRenderObservable.notifyObservers(TH), RH > 1 && (HH.incrementRenderId(), HH.resetCachedMaterial());
        }
        const hH = this.particleSystemList || HH.fF;
        for (const TH of hH) TH.isReady() || (EH = !1);
        return this._engine.currentRenderPassId = IH, EH;
      }
      _prepareRenderingManager() {
        var HH, IH;
        let EH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const hH = this._scene;
        let TH,
          sH,
          eH = null;
        const GH = this.renderList ? this.renderList : hH.frameGraph ? hH.meshes : hH.getActiveMeshes().data,
          AH = this.renderList || hH.frameGraph ? GH.length : hH.getActiveMeshes().length;
        if (this.getCustomRenderList && (eH = this.getCustomRenderList(EH, GH, AH)), eH) TH = eH.length, sH = this.forceLayerMaskCheck;else {
          if (this._defaultRenderListPrepared && !RH && !this._engine.isWebGPU) return GH;
          this._defaultRenderListPrepared = !0, eH = GH, TH = AH, sH = !this.renderList || this.forceLayerMaskCheck;
        }
        const VH = hH.activeCamera,
          YH = null !== (HH = this.cameraForLOD) && void 0 !== HH ? HH : VH,
          QH = null === (IH = hH.getBoundingBoxRenderer) || void 0 === IH ? void 0 : IH.call(hH);
        if (hH._activeMeshesFrozen && this._isFrozen) {
          if (this._renderingManager.resetSprites(), this.enableBoundingBoxRendering && QH) {
            QH.reset();
            for (let HH = 0; HH < this._activeBoundingBoxes.length; HH++) {
              const IH = this._activeBoundingBoxes.data[HH];
              QH.renderList.push(IH);
            }
          }
          return eH;
        }
        if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), QH && QH.reset(), this.renderMeshes) {
          const HH = hH.getRenderId(),
            IH = hH.getFrameId();
          for (let EH = 0; EH < TH; EH++) {
            const RH = eH[EH];
            if (RH && !RH.isBlocked) {
              if (this.customIsReadyFunction) {
                if (!this.customIsReadyFunction(RH, this.refreshRate, !1)) {
                  this.resetRefreshCounter();
                  continue;
                }
              } else if (!RH.isReady(0 === this.refreshRate)) {
                this.resetRefreshCounter();
                continue;
              }
              let EH, TH;
              if (YH) {
                const HH = RH._internalAbstractMeshDataInfo._currentLOD.get(YH);
                HH && HH[1] === IH ? EH = HH[0] : (EH = hH.customLODSelector ? hH.customLODSelector(RH, YH) : RH.getLOD(YH), HH ? (HH[0] = EH, HH[1] = IH) : RH._internalAbstractMeshDataInfo._currentLOD.set(YH, [EH, IH]));
              } else EH = RH;
              if (!EH) continue;
              if (EH !== RH && 0 !== EH.billboardMode && EH.aJ(), EH._preActivateForIntermediateRendering(HH), TH = !(!sH || !VH) && 0 === (RH.layerMask & VH.layerMask), RH.isEnabled() && RH.isVisible && RH.BJ && !TH) {
                if (this._activeMeshes.push(RH), EH._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, EH !== RH && EH._activate(HH, !0), this.enableBoundingBoxRendering && QH && QH._preActiveMesh(RH), RH._activate(HH, !0) && RH.BJ.length) {
                  RH.isAnInstance ? RH._internalAbstractMeshDataInfo._actAsRegularMesh && (EH = RH) : EH._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, EH._internalAbstractMeshDataInfo._isActiveIntermediate = !0, hH._prepareSkeleton(EH);
                  for (let HH = 0; HH < EH.BJ.length; HH++) {
                    const IH = EH.BJ[HH];
                    this.enableBoundingBoxRendering && QH && QH._evaluateSubMesh(RH, IH), this._renderingManager.dispatch(IH, EH);
                  }
                }
                RH._postActivate();
              }
            }
          }
        }
        if (this.enableBoundingBoxRendering && QH && RH) for (let JH = 0; JH < QH.renderList.length; JH++) {
          const HH = QH.renderList.data[JH];
          this._activeBoundingBoxes.push(HH);
        }
        if (this._scene.particlesEnabled && this.renderParticles) {
          this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
          const HH = this.particleSystemList || hH.fF;
          for (let IH = 0; IH < HH.length; IH++) {
            const EH = HH[IH],
              RH = EH.dI;
            EH.isStarted() && RH && (!RH.position || RH.isEnabled()) && this._renderingManager.dispatchParticles(EH);
          }
          this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene);
        }
        return eH;
      }
      get renderingManager() {
        return this._renderingManager;
      }
      dF(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.dF(HH, IH, EH, RH);
      }
      lF(HH, IH) {
        let EH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          RH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.lF(HH, IH, EH, RH), this._renderingManager._useSceneAutoClearSetup = !1;
      }
      clone() {
        const HH = new FH(this.name, this._scene, this.options);
        return this.renderList && (HH.renderList = this.renderList.slice(0)), HH;
      }
      dispose() {
        const HH = this.renderList ? this.renderList : this._scene.getActiveMeshes().data,
          IH = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let EH = 0; EH < IH; EH++) {
          const IH = HH[EH];
          IH && void 0 !== IH.getMaterialForRenderPass(this.renderPassId) && IH.setMaterialForRenderPass(this.renderPassId, void 0);
        }
        if (this.onInitRenderingObservable.clear(), this.onFinishRenderingObservable.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderingManagerRenderObservable.clear(), this.onAfterRenderingManagerRenderObservable.clear(), this.onFastPathRenderObservable.clear(), this._releaseRenderPassId(), this.renderList = null, this._sceneUBOs) for (const EH of this._sceneUBOs) EH.dispose();
        this._sceneUBOs = void 0, this._scene.removeObjectRenderer(this);
      }
      _rebuild() {
        this.refreshRate === FH.REFRESHRATE_RENDER_ONCE && (this.refreshRate = FH.REFRESHRATE_RENDER_ONCE);
      }
      freeRenderingGroups() {
        this._renderingManager && this._renderingManager.freeRenderingGroups();
      }
    }
    FH.REFRESHRATE_RENDER_ONCE = 0, FH.REFRESHRATE_RENDER_ONEVERYFRAME = 1, FH.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
    var MH = EH(21856);
    class NH extends TH.f {
      get renderListPredicate() {
        return this._objectRenderer.renderListPredicate;
      }
      set renderListPredicate(HH) {
        this._objectRenderer.renderListPredicate = HH;
      }
      get renderList() {
        return this._objectRenderer.renderList;
      }
      set renderList(HH) {
        this._objectRenderer.renderList = HH;
      }
      get particleSystemList() {
        return this._objectRenderer.particleSystemList;
      }
      set particleSystemList(HH) {
        this._objectRenderer.particleSystemList = HH;
      }
      get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList;
      }
      set getCustomRenderList(HH) {
        this._objectRenderer.getCustomRenderList = HH;
      }
      get renderParticles() {
        return this._objectRenderer.renderParticles;
      }
      set renderParticles(HH) {
        this._objectRenderer.renderParticles = HH;
      }
      get renderSprites() {
        return this._objectRenderer.renderSprites;
      }
      set renderSprites(HH) {
        this._objectRenderer.renderSprites = HH;
      }
      get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering;
      }
      set enableBoundingBoxRendering(HH) {
        this._objectRenderer.enableBoundingBoxRendering = HH;
      }
      get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering;
      }
      set enableOutlineRendering(HH) {
        this._objectRenderer.enableOutlineRendering = HH;
      }
      get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck;
      }
      set forceLayerMaskCheck(HH) {
        this._objectRenderer.forceLayerMaskCheck = HH;
      }
      get activeCamera() {
        return this._objectRenderer.activeCamera;
      }
      set activeCamera(HH) {
        this._objectRenderer.activeCamera = HH;
      }
      get cameraForLOD() {
        return this._objectRenderer.cameraForLOD;
      }
      set cameraForLOD(HH) {
        this._objectRenderer.cameraForLOD = HH;
      }
      get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing;
      }
      set disableImageProcessing(HH) {
        this._objectRenderer.disableImageProcessing = HH;
      }
      get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction;
      }
      set customIsReadyFunction(HH) {
        this._objectRenderer.customIsReadyFunction = HH;
      }
      get customRenderFunction() {
        return this._objectRenderer.customRenderFunction;
      }
      set customRenderFunction(HH) {
        this._objectRenderer.customRenderFunction = HH;
      }
      get postProcesses() {
        return this._postProcesses;
      }
      get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled;
      }
      set onAfterUnbind(HH) {
        this._onAfterUnbindObserver && this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver), this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(HH);
      }
      get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable;
      }
      set onBeforeRender(HH) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(HH);
      }
      get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable;
      }
      set onAfterRender(HH) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(HH);
      }
      set onClear(HH) {
        this._onClearObserver && this.onClearObservable.remove(this._onClearObserver), this._onClearObserver = this.onClearObservable.add(HH);
      }
      get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList;
      }
      set _waitingRenderList(HH) {
        this._objectRenderer._waitingRenderList = HH;
      }
      get renderPassId() {
        return this._objectRenderer.renderPassId;
      }
      get renderPassIds() {
        return this._objectRenderer.renderPassIds;
      }
      get currentRefreshId() {
        return this._objectRenderer.currentRefreshId;
      }
      setMaterialForRendering(HH, IH) {
        this._objectRenderer.setMaterialForRendering(HH, IH);
      }
      get isMulti() {
        var HH, IH;
        return null !== (HH = null === (IH = this._renderTarget) || void 0 === IH ? void 0 : IH.isMulti) && void 0 !== HH && HH;
      }
      get renderTargetOptions() {
        return this._renderTargetOptions;
      }
      get renderTarget() {
        return this._renderTarget;
      }
      _onRatioRescale() {
        this._sizeRatio && this.resize(this._initialSizeParameter);
      }
      set boundingBoxSize(HH) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(HH)) return;
        this._boundingBoxSize = HH;
        const IH = this.kh();
        IH && IH.markAllMaterialsAsDirty(1);
      }
      get boundingBoxSize() {
        return this._boundingBoxSize;
      }
      get depthStencilTexture() {
        var HH, IH;
        return null !== (HH = null === (IH = this._renderTarget) || void 0 === IH ? void 0 : IH._depthStencilTexture) && void 0 !== HH ? HH : null;
      }
      constructor(HH, IH, EH) {
        var sH, eH;
        let AH,
          VH,
          YH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          QH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          JH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          OH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          rH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : TH.f.TRILINEAR_SAMPLINGMODE,
          MH = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          NH = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          iI = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          DH = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 5,
          PH = arguments.length > 12 && void 0 !== arguments[12] && arguments[12],
          XH = arguments.length > 13 ? arguments[13] : void 0,
          mI = arguments.length > 14 ? arguments[14] : void 0,
          ZH = arguments.length > 15 && void 0 !== arguments[15] && arguments[15],
          qH = arguments.length > 16 && void 0 !== arguments[16] && arguments[16],
          LH = !0,
          gH = !1;
        if ("object" === typeof YH) {
          var yH, oH, kI, CH, cH, UH;
          const HH = YH;
          YH = !!HH.generateMipMaps, QH = null === (yH = HH.doNotChangeAspectRatio) || void 0 === yH || yH, JH = null !== (oH = HH.type) && void 0 !== oH ? oH : 0, OH = !!HH.isCube, rH = null !== (kI = HH.samplingMode) && void 0 !== kI ? kI : TH.f.TRILINEAR_SAMPLINGMODE, MH = null === (CH = HH.generateDepthBuffer) || void 0 === CH || CH, NH = !!HH.generateStencilBuffer, iI = !!HH.isMulti, DH = null !== (cH = HH.format) && void 0 !== cH ? cH : 5, PH = !!HH.delayAllocation, XH = HH.samples, mI = HH.creationFlags, ZH = !!HH.noColorAttachment, qH = !!HH.useSRGBBuffer, AH = HH.colorAttachment, LH = null !== (UH = HH.gammaSpace) && void 0 !== UH ? UH : LH, VH = HH.existingObjectRenderer, gH = !!HH.enableClusteredLights;
        }
        if (super(null, EH, !YH, void 0, rH, void 0, void 0, void 0, void 0, DH), this.ignoreCameraViewport = !1, this.onBeforeBindObservable = new RH.e(), this.onAfterUnbindObservable = new RH.e(), this.onClearObservable = new RH.e(), this.onResizeObservable = new RH.e(), this._cleared = !1, this.skipInitialClear = !1, this._samples = 1, this._canRescale = !0, this._renderTarget = null, this._dontDisposeObjectRenderer = !1, this.boundingBoxPosition = hH.x.Zero(), this._disableEngineStages = !1, this._dumpToolsLoading = !1, !(EH = this.kh())) return;
        const WH = this.kh().getEngine();
        this._gammaSpace = LH, this._coordinatesMode = TH.f.PROJECTION_MODE, this.name = HH, this.isRenderTarget = !0, this._initialSizeParameter = IH, this._dontDisposeObjectRenderer = !!VH, this._processSizeParameter(IH), this._objectRenderer = null !== (sH = VH) && void 0 !== sH ? sH : new FH(HH, EH, {
          numPasses: OH ? 6 : this.getRenderLayers() || 1,
          doNotChangeAspectRatio: QH,
          enableClusteredLights: gH
        }), this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add(() => {
          const HH = this._scene;
          if (!this._disableEngineStages) for (const EH of HH._beforeRenderTargetClearStage) EH.action(this, this._currentFaceIndex, this._currentLayer);
          if (this.onClearObservable.hasObservers()) this.onClearObservable.notifyObservers(WH);else if (!this.skipInitialClear) {
            var IH;
            WH.clear(null !== (IH = this.clearColor) && void 0 !== IH ? IH : HH.clearColor, !0, !0, !0);
          }
          if (this._doNotChangeAspectRatio || HH.updateTransformMatrix(!0), !this._disableEngineStages) for (const EH of HH._beforeRenderTargetDrawStage) EH.action(this, this._currentFaceIndex, this._currentLayer);
          WH._debugPushGroup && WH._debugPushGroup("Render to ".concat(this.name, " (face #").concat(this._currentFaceIndex, " layer #").concat(this._currentLayer, ")"));
        }), this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add(() => {
          var HH, IH;
          if (WH._debugPopGroup && WH._debugPopGroup(), !this._disableEngineStages) for (const TH of this._scene._afterRenderTargetDrawStage) TH.action(this, this._currentFaceIndex, this._currentLayer);
          const EH = null !== (HH = null === (IH = this._texture) || void 0 === IH ? void 0 : IH.generateMipMaps) && void 0 !== HH && HH;
          var RH;
          if (this._texture && (this._texture.generateMipMaps = !1), this._postProcessManager) this._postProcessManager._finalizeFrame(!1, null !== (RH = this._renderTarget) && void 0 !== RH ? RH : void 0, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport);else if (this._currentUseCameraPostProcess) {
            var hH;
            this._scene.postProcessManager._finalizeFrame(!1, null !== (hH = this._renderTarget) && void 0 !== hH ? hH : void 0, this._currentFaceIndex);
          }
          if (!this._disableEngineStages) for (const TH of this._scene._afterRenderTargetPostProcessStage) TH.action(this, this._currentFaceIndex, this._currentLayer);
          this._texture && (this._texture.generateMipMaps = EH), this._doNotChangeAspectRatio || this._scene.updateTransformMatrix(!0), this._currentDumpForDebug && (this._dumpTools ? this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), WH) : GH.e.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project"));
        }), this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add(() => {
          this.onClearObservable.hasObservers() ? this.onClearObservable.notifyObservers(WH) : this.skipInitialClear || WH.clear(this.clearColor || this._scene.clearColor, !0, !0, !0);
        }), this._resizeObserver = WH.onResizeObservable.add(() => {}), this._generateMipMaps = !!YH, this._doNotChangeAspectRatio = QH, iI || (this._renderTargetOptions = {
          generateMipMaps: YH,
          type: JH,
          format: null !== (eH = this._format) && void 0 !== eH ? eH : void 0,
          samplingMode: this.samplingMode,
          generateDepthBuffer: MH,
          generateStencilBuffer: NH,
          samples: XH,
          creationFlags: mI,
          noColorAttachment: ZH,
          useSRGBBuffer: qH,
          colorAttachment: AH,
          label: this.name
        }, this.samplingMode === TH.f.NEAREST_SAMPLINGMODE && (this.wrapU = TH.f.CLAMP_ADDRESSMODE, this.wrapV = TH.f.CLAMP_ADDRESSMODE), PH || (OH ? (this._renderTarget = EH.getEngine().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions), this.coordinatesMode = TH.f.INVCUBIC_MODE, this._textureMatrix = hH.d.Identity()) : this._renderTarget = EH.getEngine().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== XH && (this.samples = XH)));
      }
      createDepthStencilTexture() {
        var HH;
        let IH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          EH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          RH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          TH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          sH = arguments.length > 5 ? arguments[5] : void 0;
        null === (HH = this._renderTarget) || void 0 === HH || HH.createDepthStencilTexture(IH, EH, RH, hH, TH, sH);
      }
      _processSizeParameter(HH) {
        if (HH.ratio) {
          this._sizeRatio = HH.ratio;
          const IH = this._getEngine();
          this._size = {
            width: this._bestReflectionRenderTargetDimension(IH.getRenderWidth(), this._sizeRatio),
            height: this._bestReflectionRenderTargetDimension(IH.getRenderHeight(), this._sizeRatio)
          };
        } else this._size = HH;
      }
      get samples() {
        var HH, IH;
        return null !== (HH = null === (IH = this._renderTarget) || void 0 === IH ? void 0 : IH.samples) && void 0 !== HH ? HH : this._samples;
      }
      set samples(HH) {
        this._renderTarget && (this._samples = this._renderTarget.setSamples(HH));
      }
      addPostProcess(HH) {
        if (!this._postProcessManager) {
          const HH = this.kh();
          if (!HH) return;
          this._postProcessManager = new sH.d(HH), this._postProcesses = new Array();
        }
        this._postProcesses.push(HH), this._postProcesses[0].nF = !1;
      }
      clearPostProcesses() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._postProcesses) {
          if (HH) for (const HH of this._postProcesses) HH.dispose();
          this._postProcesses = [];
        }
      }
      removePostProcess(HH) {
        if (!this._postProcesses) return;
        const IH = this._postProcesses.indexOf(HH);
        -1 !== IH && (this._postProcesses.splice(IH, 1), this._postProcesses.length > 0 && (this._postProcesses[0].nF = !1));
      }
      resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter();
      }
      get refreshRate() {
        return this._objectRenderer.refreshRate;
      }
      set refreshRate(HH) {
        this._objectRenderer.refreshRate = HH;
      }
      _shouldRender() {
        return this._objectRenderer.shouldRender();
      }
      getRenderSize() {
        return this.getRenderWidth();
      }
      getRenderWidth() {
        return this._size.width ? this._size.width : this._size;
      }
      getRenderHeight() {
        return this._size.width ? this._size.height : this._size;
      }
      getRenderLayers() {
        const HH = this._size.fI;
        if (HH) return HH;
        const IH = this._size.depth;
        return IH || 0;
      }
      disableRescaling() {
        this._canRescale = !1;
      }
      get canRescale() {
        return this._canRescale;
      }
      scale(HH) {
        const IH = Math.max(1, this.getRenderSize() * HH);
        this.resize(IH);
      }
      getReflectionTextureMatrix() {
        return this.isCube ? this._textureMatrix : super.getReflectionTextureMatrix();
      }
      resize(HH) {
        var IH;
        const EH = this.isCube;
        null === (IH = this._renderTarget) || void 0 === IH || IH.dispose(), this._renderTarget = null;
        const RH = this.kh();
        RH && (this._processSizeParameter(HH), this._renderTarget = EH ? RH.getEngine().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions) : RH.getEngine().createRenderTargetTexture(this._size, this._renderTargetOptions), this._texture = this._renderTarget.texture, void 0 !== this._renderTargetOptions.samples && (this.samples = this._renderTargetOptions.samples), this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this));
      }
      render() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._render(HH, IH);
      }
      isReadyForRendering() {
        this._dumpToolsLoading || (this._dumpToolsLoading = !0, EH.e(67).then(EH.bind(EH, 24101)).then(HH => this._dumpTools = HH)), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const HH = this._objectRenderer._checkReadiness();
        return this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), HH;
      }
      _render() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const EH = this.kh();
        if (!EH) return;
        void 0 !== this.useCameraPostProcesses && (HH = this.useCameraPostProcesses);
        const RH = EH.getEngine();
        if (RH._debugPushGroup && RH._debugPushGroup("Render to ".concat(this.name)), this._objectRenderer.prepareRenderList(), this.onBeforeBindObservable.notifyObservers(this), this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight()), !this.is2DArray && !this.is3D || this.isMulti) {
          if (this.isCube && !this.isMulti) for (let hH = 0; hH < 6; hH++) this._renderToTarget(hH, HH, IH), EH.incrementRenderId(), EH.resetCachedMaterial();else this._renderToTarget(0, HH, IH);
        } else for (let hH = 0; hH < this.getRenderLayers(); hH++) this._renderToTarget(0, HH, IH, hH), EH.incrementRenderId(), EH.resetCachedMaterial();
        this.onAfterUnbindObservable.notifyObservers(this), this._objectRenderer.finishRender(), RH._debugPopGroup && RH._debugPopGroup();
      }
      _bestReflectionRenderTargetDimension(HH, IH) {
        const EH = HH * IH,
          RH = (0, eH.p)(EH + 16384 / (128 + EH));
        return Math.min((0, eH.e)(HH), RH);
      }
      _bindFrameBuffer() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const EH = this.kh();
        if (!EH) return;
        const RH = EH.getEngine();
        this._renderTarget && RH.bindFramebuffer(this._renderTarget, this.isCube ? HH : void 0, void 0, void 0, this.ignoreCameraViewport, 0, IH);
      }
      _unbindFrameBuffer(HH, IH) {
        this._renderTarget && HH.unBindFramebuffer(this._renderTarget, this.isCube, () => {
          this.onAfterRenderObservable.notifyObservers(IH);
        });
      }
      _prepareFrame(HH, IH, EH, RH) {
        this._postProcessManager ? this._prePassEnabled || this._postProcessManager._prepareFrame(this._texture, this._postProcesses) || this._bindFrameBuffer(IH, EH) : RH && HH.postProcessManager._prepareFrame(this._texture) || this._bindFrameBuffer(IH, EH);
      }
      _renderToTarget(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const hH = this.kh();
        if (!hH) return;
        const TH = hH.getEngine();
        this._currentFaceIndex = HH, this._currentLayer = RH, this._currentUseCameraPostProcess = IH, this._currentDumpForDebug = EH, this._prepareFrame(hH, HH, RH, IH), this._objectRenderer.render(HH + RH, !0), this._unbindFrameBuffer(TH, HH), this._texture && this.isCube && 5 === HH && TH.generateMipMapsForCubemap(this._texture, !0);
      }
      dF(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._objectRenderer.dF(HH, IH, EH, RH);
      }
      lF(HH, IH) {
        this._objectRenderer.lF(HH, IH);
      }
      clone() {
        const HH = this.getSize(),
          IH = new NH(this.name, HH, this.kh(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, void 0, this._renderTargetOptions.format, void 0, this._renderTargetOptions.samples);
        return IH.xY = this.xY, IH.level = this.level, IH.coordinatesMode = this.coordinatesMode, this.renderList && (IH.renderList = this.renderList.slice(0)), IH;
      }
      serialize() {
        if (!this.name) return null;
        const HH = super.serialize();
        if (HH.renderTargetSize = this.getRenderSize(), HH.renderList = [], this.renderList) for (let IH = 0; IH < this.renderList.length; IH++) HH.renderList.push(this.renderList[IH].id);
        return HH;
      }
      disposeFramebufferObjects() {
        var HH;
        null === (HH = this._renderTarget) || void 0 === HH || HH.dispose(!0);
      }
      releaseInternalTexture() {
        var HH;
        null === (HH = this._renderTarget) || void 0 === HH || HH.releaseTextures(), this._texture = null;
      }
      dispose() {
        var HH;
        this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this._prePassRenderTarget.dispose(), this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver), this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver), this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver), this._dontDisposeObjectRenderer || this._objectRenderer.dispose(), this.clearPostProcesses(!0), this._resizeObserver && (this.kh().getEngine().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null);
        const IH = this.kh();
        if (!IH) return;
        let EH = IH.customRenderTargets.indexOf(this);
        EH >= 0 && IH.customRenderTargets.splice(EH, 1);
        for (const RH of IH.cameras) EH = RH.customRenderTargets.indexOf(this), EH >= 0 && RH.customRenderTargets.splice(EH, 1);
        null === (HH = this._renderTarget) || void 0 === HH || HH.dispose(), this._renderTarget = null, this._texture = null, super.dispose();
      }
      _rebuild() {
        this._objectRenderer._rebuild(), this._postProcessManager && this._postProcessManager._rebuild();
      }
      freeRenderingGroups() {
        this._objectRenderer.freeRenderingGroups();
      }
      getViewCount() {
        return 1;
      }
    }
    NH.REFRESHRATE_RENDER_ONCE = FH.REFRESHRATE_RENDER_ONCE, NH.REFRESHRATE_RENDER_ONEVERYFRAME = FH.REFRESHRATE_RENDER_ONEVERYFRAME, NH.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = FH.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
    Object.getOwnPropertyDescriptor(NH.prototype, "noPrePassRenderer") || Object.defineProperty(NH.prototype, "noPrePassRenderer", (0, MH.f)("RenderTargetTexture", "noPrePassRenderer"));
  },
  23995: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => VH,
      f: () => YH
    });
    var RH = EH(17),
      hH = EH(22128),
      TH = EH(21978),
      sH = EH(21786),
      eH = EH(22010),
      GH = EH(22215);
    const AH = {
      positions: [1, 1, -1, 1, -1, -1, 1, -1],
      indices: [0, 1, 2, 0, 2, 3]
    };
    class VH {
      constructor(HH) {
        var IH, EH;
        let RH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AH;
        this._fullscreenViewport = new TH.d(0, 0, 1, 1);
        const sH = null !== (IH = RH.positions) && void 0 !== IH ? IH : AH.positions,
          eH = null !== (EH = RH.indices) && void 0 !== EH ? EH : AH.indices;
        this.YY = HH, this._vertexBuffers = {
          [hH.t.PositionKind]: new hH.t(HH, sH, hH.t.PositionKind, !1, !1, 2)
        }, this._indexBuffer = HH.createIndexBuffer(eH), this._indexBufferLength = eH.length, this._onContextRestoredObserver = HH.onContextRestoredObservable.add(() => {
          this._indexBuffer = HH.createIndexBuffer(eH);
          for (const HH in this._vertexBuffers) {
            this._vertexBuffers[HH]._rebuild();
          }
        });
      }
      setViewport() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
        this.YY.setViewport(HH);
      }
      bindBuffers(HH) {
        this.YY.bindBuffers(this._vertexBuffers, this._indexBuffer, HH);
      }
      applyEffectWrapper(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.YY.setState(!0), this.YY.depthCullingState.depthTest = IH, this.YY.stencilState.stencilTest = EH, this.YY.enableEffect(HH.drawWrapper), this.bindBuffers(HH.effect), HH.onApplyObservable.notifyObservers({});
      }
      saveStates() {
        this._savedStateDepthTest = this.YY.depthCullingState.depthTest, this._savedStateStencilTest = this.YY.stencilState.stencilTest;
      }
      restoreStates() {
        this.YY.depthCullingState.depthTest = this._savedStateDepthTest, this.YY.stencilState.stencilTest = this._savedStateStencilTest;
      }
      draw() {
        this.YY.drawElementsType(0, 0, this._indexBufferLength);
      }
      _isRenderTargetTexture(HH) {
        return void 0 !== HH.renderTarget;
      }
      render(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!HH.effect.isReady()) return;
        this.saveStates(), this.setViewport();
        const EH = null === IH ? null : this._isRenderTargetTexture(IH) ? IH.renderTarget : IH;
        EH && this.YY.bindFramebuffer(EH), this.applyEffectWrapper(HH), this.draw(), EH && this.YY.unBindFramebuffer(EH), this.restoreStates();
      }
      dispose() {
        const HH = this._vertexBuffers[hH.t.PositionKind];
        HH && (HH.dispose(), delete this._vertexBuffers[hH.t.PositionKind]), this._indexBuffer && this.YY._releaseBuffer(this._indexBuffer), this._onContextRestoredObserver && (this.YY.onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null);
      }
    }
    class YH {
      static RegisterShaderCodeProcessing(HH, IH) {
        IH ? YH._CustomShaderCodeProcessing[null !== HH && void 0 !== HH ? HH : ""] = IH : delete YH._CustomShaderCodeProcessing[null !== HH && void 0 !== HH ? HH : ""];
      }
      static _GetShaderCodeProcessing(HH) {
        var IH;
        return null !== (IH = YH._CustomShaderCodeProcessing[HH]) && void 0 !== IH ? IH : YH._CustomShaderCodeProcessing[""];
      }
      get name() {
        return this.options.name;
      }
      set name(HH) {
        this.options.name = HH;
      }
      isReady() {
        var HH, IH;
        return null !== (HH = null === (IH = this._drawWrapper.effect) || void 0 === IH ? void 0 : IH.isReady()) && void 0 !== HH && HH;
      }
      get drawWrapper() {
        return this._drawWrapper;
      }
      get effect() {
        return this._drawWrapper.effect;
      }
      set effect(HH) {
        this._drawWrapper.effect = HH;
      }
      constructor(HH) {
        var IH, EH;
        this.alphaMode = 0, this.onEffectCreatedObservable = new sH.e(void 0, !0), this.onApplyObservable = new sH.e(), this._shadersLoaded = !1, this._webGPUReady = !1, this._importPromises = [], this.options = (0, RH.b)((0, RH.b)({}, HH), {}, {
          name: HH.name || "effectWrapper",
          YY: HH.YY,
          uniforms: HH.uniforms || HH.uniformNames || [],
          uniformNames: void 0,
          samplers: HH.samplers || HH.samplerNames || [],
          samplerNames: void 0,
          attributeNames: HH.attributeNames || ["position"],
          uniformBuffers: HH.uniformBuffers || [],
          defines: HH.defines || "",
          useShaderStore: HH.useShaderStore || !1,
          vertexUrl: HH.vertexUrl || HH.vertexShader || "postprocess",
          vertexShader: void 0,
          fragmentShader: HH.fragmentShader || "pass",
          indexParameters: HH.indexParameters,
          blockCompilation: HH.blockCompilation || !1,
          shaderLanguage: HH.shaderLanguage || 0,
          onCompiled: HH.onCompiled || void 0,
          extraInitializations: HH.extraInitializations || void 0,
          extraInitializationsAsync: HH.extraInitializationsAsync || void 0,
          useAsPostProcess: null !== (IH = HH.useAsPostProcess) && void 0 !== IH && IH,
          allowEmptySourceTexture: null !== (EH = HH.allowEmptySourceTexture) && void 0 !== EH && EH
        }), this.options.uniformNames = this.options.uniforms, this.options.samplerNames = this.options.samplers, this.options.vertexShader = this.options.vertexUrl, this.options.useAsPostProcess && (this.options.allowEmptySourceTexture || -1 !== this.options.samplers.indexOf("textureSampler") || this.options.samplers.push("textureSampler"), -1 === this.options.uniforms.indexOf("scale") && this.options.uniforms.push("scale")), HH.vertexUrl || HH.vertexShader ? this._shaderPath = {
          vertexSource: this.options.vertexShader
        } : (this.options.useAsPostProcess || (this.options.uniforms.push("scale"), this.onApplyObservable.add(() => {
          this.effect.setFloat2("scale", 1, 1);
        })), this._shaderPath = {
          vertex: this.options.vertexShader
        }), this._shaderPath.fragmentSource = this.options.fragmentShader, this._shaderPath.spectorName = this.options.name, this.options.useShaderStore && (this._shaderPath.fragment = this._shaderPath.fragmentSource, this._shaderPath.vertex || (this._shaderPath.vertex = this._shaderPath.vertexSource), delete this._shaderPath.fragmentSource, delete this._shaderPath.vertexSource), this.onApplyObservable.add(() => {
          this.bind();
        }), this.options.useShaderStore || (this._onContextRestoredObserver = this.options.YY.onContextRestoredObservable.add(() => {
          this.effect._pipelineContext = null, this.effect._prepareEffect();
        })), this._drawWrapper = new GH.d(this.options.YY), this._webGPUReady = 1 === this.options.shaderLanguage;
        const hH = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, hH, this.options.extraInitializations);
      }
      _gatherImports() {}
      _postConstructor(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          RH = arguments.length > 2 ? arguments[2] : void 0,
          hH = arguments.length > 3 ? arguments[3] : void 0;
        this._importPromises.length = 0, hH && this._importPromises.push(...hH);
        const TH = this.options.YY.isWebGPU && !YH.ForceGLSL;
        this._gatherImports(TH, this._importPromises), this.options.useShaderStore && "postprocess" === this._shaderPath.vertex && this._importPromises.push(TH && this._webGPUReady ? EH.e(136).then(EH.bind(EH, 25277)) : EH.e(137).then(EH.bind(EH, 25285))), void 0 !== RH && RH(TH, this._importPromises), TH && this._webGPUReady && (this.options.shaderLanguage = 1), HH || this.updateEffect(IH);
      }
      updateEffect() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          RH = arguments.length > 3 ? arguments[3] : void 0,
          hH = arguments.length > 4 ? arguments[4] : void 0,
          TH = arguments.length > 5 ? arguments[5] : void 0,
          sH = arguments.length > 6 ? arguments[6] : void 0,
          GH = arguments.length > 7 ? arguments[7] : void 0;
        const AH = YH._GetShaderCodeProcessing(this.name);
        if (null !== AH && void 0 !== AH && AH.defineCustomBindings) {
          var VH, QH, JH, OH;
          const RH = null !== (VH = null === (QH = IH) || void 0 === QH ? void 0 : QH.slice()) && void 0 !== VH ? VH : [];
          RH.push(...this.options.uniforms);
          const hH = null !== (JH = null === (OH = EH) || void 0 === OH ? void 0 : OH.slice()) && void 0 !== JH ? JH : [];
          hH.push(...this.options.samplers), HH = AH.defineCustomBindings(this.name, HH, RH, hH), IH = RH, EH = hH;
        }
        this.options.defines = HH || "";
        const rH = this._shadersLoaded || 0 === this._importPromises.length ? void 0 : async () => {
          await Promise.all(this._importPromises), this._shadersLoaded = !0;
        };
        let FH;
        FH = this.options.extraInitializationsAsync ? async () => {
          await (null === rH || void 0 === rH ? void 0 : rH()), await this.options.extraInitializationsAsync();
        } : rH, this.options.useShaderStore ? this._drawWrapper.effect = this.options.YY.createEffect({
          vertex: null !== sH && void 0 !== sH ? sH : this._shaderPath.vertex,
          fragment: null !== GH && void 0 !== GH ? GH : this._shaderPath.fragment
        }, {
          attributes: this.options.attributeNames,
          uniformsNames: IH || this.options.uniforms,
          uniformBuffersNames: this.options.uniformBuffers,
          samplers: EH || this.options.samplers,
          defines: null !== HH ? HH : "",
          fallbacks: null,
          onCompiled: null !== hH && void 0 !== hH ? hH : this.options.onCompiled,
          onError: null !== TH && void 0 !== TH ? TH : null,
          indexParameters: RH || this.options.indexParameters,
          processCodeAfterIncludes: null !== AH && void 0 !== AH && AH.processCodeAfterIncludes ? (HH, IH) => AH.processCodeAfterIncludes(this.name, HH, IH) : null,
          processFinalCode: null !== AH && void 0 !== AH && AH.processFinalCode ? (HH, IH) => AH.processFinalCode(this.name, HH, IH) : null,
          shaderLanguage: this.options.shaderLanguage,
          extraInitializationsAsync: FH
        }, this.options.YY) : this._drawWrapper.effect = new eH.c(this._shaderPath, this.options.attributeNames, IH || this.options.uniforms, EH || this.options.samplerNames, this.options.YY, HH, void 0, hH || this.options.onCompiled, void 0, void 0, void 0, this.options.shaderLanguage, FH), this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect);
      }
      bind() {
        var HH, IH;
        let EH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.options.useAsPostProcess && !EH && (this.options.YY.setAlphaMode(this.alphaMode), this.drawWrapper.effect.setFloat2("scale", 1, 1)), null === (HH = YH._GetShaderCodeProcessing(this.name)) || void 0 === HH || null === (IH = HH.bindCustomBindings) || void 0 === IH || IH.call(HH, this.name, this._drawWrapper.effect);
      }
      dispose() {
        this._onContextRestoredObserver && (this.effect.getEngine().onContextRestoredObservable.remove(this._onContextRestoredObserver), this._onContextRestoredObserver = null), this.onEffectCreatedObservable.clear(), this._drawWrapper.dispose(!0);
      }
    }
    YH.ForceGLSL = !1, YH._CustomShaderCodeProcessing = {};
  },
  21978: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => RH
    });
    class RH {
      constructor(HH, IH, EH, RH) {
        this.x = HH, this.y = IH, this.width = EH, this.height = RH;
      }
      toGlobal(HH, IH) {
        return new RH(this.x * HH, this.y * IH, this.width * HH, this.height * IH);
      }
      toGlobalToRef(HH, IH, EH) {
        return EH.x = this.x * HH, EH.y = this.y * IH, EH.width = this.width * HH, EH.height = this.height * IH, this;
      }
      clone() {
        return new RH(this.x, this.y, this.width, this.height);
      }
    }
  },
  24e3: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => OH,
      f: () => rH,
      g: () => FH
    });
    var RH = EH(22090),
      hH = EH(24005),
      TH = EH(17),
      sH = EH(21947),
      eH = EH(23991),
      GH = EH(21972),
      AH = EH(24007),
      VH = EH(21956);
    class YH extends eH.d {
      getClassName() {
        return "PassPostProcess";
      }
      constructor(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          RH = arguments.length > 3 ? arguments[3] : void 0,
          hH = arguments.length > 4 ? arguments[4] : void 0,
          sH = arguments.length > 5 ? arguments[5] : void 0,
          eH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          GH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const VH = (0, TH.b)({
          size: "number" === typeof IH ? IH : void 0,
          camera: EH,
          samplingMode: RH,
          YY: hH,
          reusable: sH,
          textureType: eH,
          blockCompilation: GH
        }, IH);
        super(HH, AH.h.FragmentUrl, (0, TH.b)({
          effectWrapper: "number" !== typeof IH && IH.effectWrapper ? void 0 : new AH.h(HH, hH, VH)
        }, VH));
      }
      static _Parse(HH, IH, EH, RH) {
        return GH.c.Parse(() => new YH(HH.name, HH.options, IH, HH.renderTargetSamplingMode, HH._engine, HH.reusable), HH, EH, RH);
      }
    }
    (() => {
      var HH;
      let IH,
        EH = eH.d,
        RH = [];
      HH = class extends EH {
        get face() {
          return this._effectWrapper.face;
        }
        set face(HH) {
          this._effectWrapper.face = HH;
        }
        getClassName() {
          return "PassCubePostProcess";
        }
        constructor(HH, IH) {
          let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            hH = arguments.length > 3 ? arguments[3] : void 0,
            eH = arguments.length > 4 ? arguments[4] : void 0,
            GH = arguments.length > 5 ? arguments[5] : void 0,
            VH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
            YH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
          const QH = (0, TH.b)({
            size: "number" === typeof IH ? IH : void 0,
            camera: EH,
            samplingMode: hH,
            YY: eH,
            reusable: GH,
            textureType: VH,
            blockCompilation: YH
          }, IH);
          super(HH, AH.h.FragmentUrl, (0, TH.b)({
            effectWrapper: "number" !== typeof IH && IH.effectWrapper ? void 0 : new AH.d(HH, eH, QH)
          }, QH)), (0, sH.j)(this, RH);
        }
        static _Parse(IH, EH, RH, hH) {
          return GH.c.Parse(() => new HH(IH.name, IH.options, EH, IH.renderTargetSamplingMode, IH._engine, IH.reusable), IH, RH, hH);
        }
      }, (hH => {
        const TH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (hH = EH[Symbol.metadata]) && void 0 !== hH ? hH : null) : void 0;
        IH = [(0, VH.K)()], (0, sH.i)(HH, null, IH, {
          kind: "getter",
          name: "face",
          static: !1,
          private: !1,
          access: {
            has: HH => "face" in HH,
            get: HH => HH.face
          },
          metadata: TH
        }, null, RH), TH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TH
        });
      })();
    })();
    var QH = EH(21791),
      JH = EH(21909);
    function OH(HH, IH, EH, RH, hH, TH, sH, GH) {
      var AH, VH, YH, QH, JH;
      const OH = IH.getEngine();
      return IH.isReady = !1, hH = null !== (AH = hH) && void 0 !== AH ? AH : IH.samplingMode, RH = null !== (VH = RH) && void 0 !== VH ? VH : IH.type, TH = null !== (YH = TH) && void 0 !== YH ? YH : IH.format, sH = null !== (QH = sH) && void 0 !== QH ? QH : IH.width, GH = null !== (JH = GH) && void 0 !== JH ? JH : IH.height, -1 === RH && (RH = 0), new Promise(AH => {
        const VH = new eH.d("postprocess", HH, null, null, 1, null, hH, OH, !1, void 0, RH, void 0, null, !1, TH);
        VH.externalTextureSamplerBinding = !0;
        const YH = OH.createRenderTargetTexture({
          width: sH,
          height: GH
        }, {
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          generateStencilBuffer: !1,
          samplingMode: hH,
          type: RH,
          format: TH
        });
        VH.onEffectCreatedObservable.addOnce(HH => {
          HH.executeWhenCompiled(() => {
            VH.onApply = HH => {
              HH._bindTexture("textureSampler", IH), HH.setFloat2("scale", 1, 1);
            }, EH.postProcessManager.directRender([VH], YH, !0), OH.restoreDefaultFramebuffer(), OH._releaseTexture(IH), VH && VH.dispose(), YH._swapAndDie(IH), IH.type = RH, IH.format = 5, IH.isReady = !0, AH(IH);
          });
        });
      });
    }
    async function rH(HH, IH, TH) {
      let sH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        GH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        AH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        VH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
      await async function (HH) {
        var IH, EH;
        if (HH.isReady()) return;
        if (HH.loadingError) throw new Error((null === (EH = HH.errorObject) || void 0 === EH ? void 0 : EH.message) || "Texture ".concat(HH.name, " errored while loading."));
        const RH = HH.onLoadObservable;
        if (RH) return await new Promise(HH => RH.addOnce(() => HH()));
        const hH = null === (IH = HH._texture) || void 0 === IH ? void 0 : IH.onLoadedObservable;
        if (hH) return await new Promise(HH => hH.addOnce(() => HH()));
        throw new Error("Cannot determine readiness of texture ".concat(HH.name, "."));
      }(HH);
      const YH = HH.getInternalTexture(),
        JH = HH.is3D || !(null === YH || void 0 === YH || !YH.is3D),
        {
          width: OH,
          height: rH
        } = HH.getSize(),
        FH = null !== IH && void 0 !== IH ? IH : OH,
        MH = null !== TH && void 0 !== TH ? TH : rH;
      if (AH || JH || function (HH) {
        switch (HH) {
          case 36492:
          case 36493:
          case 36495:
          case 36494:
          case 33779:
          case 35919:
          case 33778:
          case 35918:
          case 33777:
          case 33776:
          case 35917:
          case 35916:
          case 37808:
          case 37809:
          case 37810:
          case 37811:
          case 37812:
          case 37813:
          case 37814:
          case 37815:
          case 37816:
          case 37817:
          case 37818:
          case 37819:
          case 37820:
          case 37821:
          case 37840:
          case 37841:
          case 37842:
          case 37843:
          case 37844:
          case 37845:
          case 37846:
          case 37847:
          case 37848:
          case 37849:
          case 37850:
          case 37851:
          case 37852:
          case 37853:
          case 36196:
          case 37492:
          case 37493:
          case 37494:
          case 37495:
          case 37496:
          case 37497:
            return !0;
          default:
            return !1;
        }
      }(HH.textureFormat) || FH !== OH || MH !== rH) {
        if (HH.is2DArray) throw new Error("Reading pixels from 2D array textures with ".concat(AH ? "RTT" : "compression", " is not supported."));
        return await async function (HH, IH, TH, sH, GH) {
          let AH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const VH = HH.kh(),
            YH = VH.getEngine(),
            QH = HH.getInternalTexture(),
            JH = HH.is3D || !(null === QH || void 0 === QH || !QH.is3D);
          let OH;
          if (YH.isWebGPU ? JH ? await EH.e(141).then(EH.bind(EH, 25311)) : HH.isCube ? await EH.e(142).then(EH.bind(EH, 25315)) : await EH.e(143).then(EH.bind(EH, 25319)) : JH ? await EH.e(138).then(EH.bind(EH, 25292)) : HH.isCube ? await EH.e(139).then(EH.bind(EH, 25297)) : await EH.e(140).then(EH.bind(EH, 25306)), JH) OH = new eH.d("lod3D", "lod3D", {
            uniforms: ["lod", "gamma", "slice"],
            samplingMode: RH.f.NEAREST_NEAREST_MIPNEAREST,
            YY: YH,
            shaderLanguage: YH.isWebGPU ? 1 : 0
          });else if (HH.isCube) {
            const HH = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
            OH = new eH.d("lodCube", "lodCube", {
              uniforms: ["lod", "gamma"],
              samplingMode: RH.f.NEAREST_NEAREST_MIPNEAREST,
              YY: YH,
              defines: HH[sH],
              shaderLanguage: YH.isWebGPU ? 1 : 0
            });
          } else OH = new eH.d("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: RH.f.NEAREST_NEAREST_MIPNEAREST,
            YY: YH,
            shaderLanguage: YH.isWebGPU ? 1 : 0
          });
          await new Promise(HH => {
            OH.onEffectCreatedObservable.addOnce(IH => {
              IH.executeWhenCompiled(() => {
                HH(0);
              });
            });
          });
          const rH = new hH.e("temp", {
            width: IH,
            height: TH
          }, VH, !1);
          OH.onApply = function (IH) {
            IH.setTexture("textureSampler", HH), IH.setFloat("lod", GH), IH.setInt("gamma", HH.gammaSpace ? 1 : 0), JH && IH.setFloat("slice", AH);
          };
          try {
            if (rH.renderTarget && QH) {
              const EH = QH.samplingMode;
              0 !== GH ? HH.updateSamplingMode(RH.f.NEAREST_NEAREST_MIPNEAREST) : HH.updateSamplingMode(RH.f.NEAREST_NEAREST), VH.postProcessManager.directRender([OH], rH.renderTarget, !0), HH.updateSamplingMode(EH);
              const hH = await YH.readPixels(0, 0, IH, TH),
                sH = new Uint8Array(hH.buffer, hH.byteOffset, hH.byteLength);
              return YH.unBindFramebuffer(rH.renderTarget), sH;
            }
            throw Error("Render to texture failed.");
          } finally {
            rH.dispose(), OH.dispose();
          }
        }(HH, FH, MH, sH, GH, VH);
      }
      let NH = await HH.readPixels(sH, GH);
      if (!NH) throw new Error("Failed to read pixels from texture ".concat(HH.name, "."));
      if (NH instanceof Float32Array) {
        const HH = new Uint8Array(NH.length);
        let IH = NH.length;
        for (; IH--;) {
          const EH = NH[IH];
          HH[IH] = Math.round(255 * (0, QH.Clamp)(EH));
        }
        NH = HH;
      }
      const iI = FH * MH,
        DH = 4 * iI;
      if (NH.length !== DH) {
        const HH = 0 === iI ? 0 : NH.length / iI;
        if (1 === HH || 2 === HH || 3 === HH) {
          const IH = new Uint8Array(DH);
          for (let EH = 0, RH = 0, hH = 0; EH < iI; EH++, hH += 4) {
            const EH = NH[RH++];
            if (1 === HH) {
              IH[hH] = EH, IH[hH + 1] = EH, IH[hH + 2] = EH, IH[hH + 3] = 255;
              continue;
            }
            const TH = NH[RH++];
            2 !== HH ? (IH[hH] = EH, IH[hH + 1] = TH, IH[hH + 2] = NH[RH++], IH[hH + 3] = 255) : (IH[hH] = EH, IH[hH + 1] = TH, IH[hH + 2] = 0, IH[hH + 3] = 255);
          }
          return IH;
        }
      }
      return NH;
    }
    const FH = {
      CreateResizedCopy: function (HH, IH, EH) {
        let TH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const sH = HH.kh(),
          eH = sH.getEngine(),
          GH = new hH.e("resized" + HH.name, {
            width: IH,
            height: EH
          }, sH, !HH.noMipmap, !0, HH._texture.type, !1, HH.samplingMode, !1);
        GH.wrapU = HH.wrapU, GH.wrapV = HH.wrapV, GH.uOffset = HH.uOffset, GH.vOffset = HH.vOffset, GH.uScale = HH.uScale, GH.vScale = HH.vScale, GH.uAng = HH.uAng, GH.vAng = HH.vAng, GH.wAng = HH.wAng, GH.coordinatesIndex = HH.coordinatesIndex, GH.level = HH.level, GH.anisotropicFilteringLevel = HH.anisotropicFilteringLevel, GH._texture.isReady = !1, HH.wrapU = RH.f.CLAMP_ADDRESSMODE, HH.wrapV = RH.f.CLAMP_ADDRESSMODE;
        const AH = new YH("pass", 1, null, TH ? RH.f.BILINEAR_SAMPLINGMODE : RH.f.NEAREST_SAMPLINGMODE, eH, !1, 0);
        return AH.externalTextureSamplerBinding = !0, AH.onEffectCreatedObservable.addOnce(IH => {
          IH.executeWhenCompiled(() => {
            AH.onApply = function (IH) {
              IH.setTexture("textureSampler", HH);
            };
            const IH = GH.renderTarget;
            IH && (sH.postProcessManager.directRender([AH], IH), eH.unBindFramebuffer(IH), GH.disposeFramebufferObjects(), AH.dispose(), GH.getInternalTexture().isReady = !0);
          });
        }), GH;
      },
      ApplyPostProcess: OH,
      ToHalfFloat: JH.i,
      FromHalfFloat: JH.b,
      GetTextureDataAsync: rH
    };
  },
  23991: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => OH
    });
    var RH = EH(21947),
      hH = EH(21968),
      TH = EH(21786),
      sH = EH(21764),
      eH = EH(22010),
      GH = EH(21956),
      AH = EH(21972),
      VH = EH(21808),
      YH = EH(22004),
      QH = EH(21930),
      JH = EH(23995);
    let OH = (() => {
        var HH;
        let IH,
          eH,
          YH,
          OH,
          rH,
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
          yH = [],
          oH = [],
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
          EI = [],
          RI = [],
          hI = [];
        return HH = class {
          static get ForceGLSL() {
            return JH.f.ForceGLSL;
          }
          static set ForceGLSL(HH) {
            JH.f.ForceGLSL = HH;
          }
          static RegisterShaderCodeProcessing(HH, IH) {
            JH.f.RegisterShaderCodeProcessing(HH, IH);
          }
          get name() {
            return this._effectWrapper.name;
          }
          set name(HH) {
            this._effectWrapper.name = HH;
          }
          get alphaMode() {
            return this._effectWrapper.alphaMode;
          }
          set alphaMode(HH) {
            this._effectWrapper.alphaMode = HH;
          }
          get samples() {
            return this._samples;
          }
          set samples(HH) {
            this._samples = Math.min(HH, this._engine.getCaps().maxMSAASamples), this._textures.forEach(HH => {
              HH.setSamples(this._samples);
            });
          }
          get shaderLanguage() {
            return this._shaderLanguage;
          }
          getEffectName() {
            return this._fragmentUrl;
          }
          set onActivate(HH) {
            this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), HH && (this._onActivateObserver = this.onActivateObservable.add(HH));
          }
          set onSizeChanged(HH) {
            this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(HH);
          }
          set onApply(HH) {
            this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(HH);
          }
          set onBeforeRender(HH) {
            this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(HH);
          }
          set onAfterRender(HH) {
            this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), this._onAfterRenderObserver = this.onAfterRenderObservable.add(HH);
          }
          get inputTexture() {
            return this._textures.data[this._currentRenderTextureInd];
          }
          set inputTexture(HH) {
            this._forcedOutputTexture = HH;
          }
          restoreDefaultInputTexture() {
            this._forcedOutputTexture && (this._forcedOutputTexture = null, this.markTextureDirty());
          }
          getCamera() {
            return this._camera;
          }
          get texelSize() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.texelSize : (this._forcedOutputTexture && this._texelSize.nY(1 / this._forcedOutputTexture.width, 1 / this._forcedOutputTexture.height), this._texelSize);
          }
          constructor(IH, EH, eH, GH, AH, VH) {
            var YH, QH;
            let OH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              rH = arguments.length > 7 ? arguments[7] : void 0,
              MH = arguments.length > 8 ? arguments[8] : void 0,
              NH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
              iI = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              DH = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : "postprocess",
              PH = arguments.length > 12 ? arguments[12] : void 0,
              XH = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
              mI = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 5,
              ZH = arguments.length > 15 ? arguments[15] : void 0,
              qH = arguments.length > 16 ? arguments[16] : void 0;
            this._parentContainer = ((0, RH.j)(this, yH), null), this.uniqueId = (0, RH.j)(this, oH, void 0), this.width = ((0, RH.j)(this, kI), (0, RH.j)(this, CH, -1)), this.height = ((0, RH.j)(this, cH), (0, RH.j)(this, UH, -1)), this.nodeMaterialSource = ((0, RH.j)(this, WH), null), this._outputTexture = null, this.renderTargetSamplingMode = (0, RH.j)(this, BH, void 0), this.clearColor = ((0, RH.j)(this, fH), (0, RH.j)(this, aH, void 0)), this.nF = ((0, RH.j)(this, nH), (0, RH.j)(this, pH, !0)), this.forceAutoClearInAlphaMode = ((0, RH.j)(this, dH), (0, RH.j)(this, uH, !1)), this.alphaConstants = ((0, RH.j)(this, lH), (0, RH.j)(this, KH, void 0)), this.animations = ((0, RH.j)(this, wH), []), this.enablePixelPerfectMode = (0, RH.j)(this, zH, !1), this.forceFullscreenViewport = ((0, RH.j)(this, tH), (0, RH.j)(this, jI, !0)), this.inspectableCustomProperties = (0, RH.j)(this, vH), this.scaleMode = (0, RH.j)(this, bH, 1), this.alwaysForcePOT = ((0, RH.j)(this, SH), (0, RH.j)(this, xH, !1)), this._samples = ((0, RH.j)(this, HI), (0, RH.j)(this, II, 1)), this.adaptScaleToCurrentViewport = ((0, RH.j)(this, EI), (0, RH.j)(this, RI, !1)), this.doNotSerialize = ((0, RH.j)(this, hI), !1), this._webGPUReady = !1, this._reusable = !1, this._renderId = 0, this.externalTextureSamplerBinding = !1, this._textures = new hH.e(2), this._textureCache = [], this._currentRenderTextureInd = 0, this._scaleRatio = new sH.t(1, 1), this._texelSize = sH.t.Zero(), this.onActivateObservable = new TH.e(), this.onSizeChangedObservable = new TH.e(), this.onApplyObservable = new TH.e(), this.onBeforeRenderObservable = new TH.e(), this.onAfterRenderObservable = new TH.e(), this.AM = new TH.e(), FH();
            let LH,
              gH = 1,
              TI = null;
            if (eH && !Array.isArray(eH)) {
              var sI, eI, GI, AI, VI, YI, QI, JI, OI, rI, FI, MI;
              const HH = eH;
              eH = null !== (sI = HH.uniforms) && void 0 !== sI ? sI : null, GH = null !== (eI = HH.samplers) && void 0 !== eI ? eI : null, gH = null !== (GI = HH.size) && void 0 !== GI ? GI : 1, VH = null !== (AI = HH.camera) && void 0 !== AI ? AI : null, OH = null !== (VI = HH.samplingMode) && void 0 !== VI ? VI : 1, rH = HH.YY, MH = HH.reusable, NH = Array.isArray(HH.defines) ? HH.defines.join("\n") : null !== (YI = HH.defines) && void 0 !== YI ? YI : null, iI = null !== (QI = HH.textureType) && void 0 !== QI ? QI : 0, DH = null !== (JI = HH.vertexUrl) && void 0 !== JI ? JI : "postprocess", PH = HH.indexParameters, XH = null !== (OI = HH.blockCompilation) && void 0 !== OI && OI, mI = null !== (rI = HH.textureFormat) && void 0 !== rI ? rI : 5, ZH = null !== (FI = HH.shaderLanguage) && void 0 !== FI ? FI : 0, TI = null !== (MI = HH.uniformBuffers) && void 0 !== MI ? MI : null, qH = HH.extraInitializations, LH = HH.effectWrapper;
            } else AH && (gH = "number" === typeof AH ? AH : {
              width: AH.width,
              height: AH.height
            });
            if (this._useExistingThinPostProcess = !!LH, this._effectWrapper = null !== (YH = LH) && void 0 !== YH ? YH : new JH.f({
              name: IH,
              useShaderStore: !0,
              useAsPostProcess: !0,
              fragmentShader: EH,
              YY: rH || (null === (QH = VH) || void 0 === QH ? void 0 : QH.kh().getEngine()),
              uniforms: eH,
              samplers: GH,
              uniformBuffers: TI,
              defines: NH,
              vertexUrl: DH,
              indexParameters: PH,
              blockCompilation: !0,
              shaderLanguage: ZH,
              extraInitializations: void 0
            }), this.name = IH, this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable, null != VH ? (this._camera = VH, this._scene = VH.kh(), VH.attachPostProcess(this), this._engine = this._scene.getEngine(), this._scene.addPostProcess(this), this.uniqueId = this._scene.getUniqueId()) : rH && (this._engine = rH, this._engine.postProcesses.push(this)), this._options = gH, this.renderTargetSamplingMode = OH || 1, this._reusable = MH || !1, this._textureType = iI, this._textureFormat = mI, this._shaderLanguage = ZH || 0, this._samplers = GH || [], -1 === this._samplers.indexOf("textureSampler") && this._samplers.push("textureSampler"), this._fragmentUrl = EH, this._vertexUrl = DH, this._parameters = eH || [], -1 === this._parameters.indexOf("scale") && this._parameters.push("scale"), this._uniformBuffers = TI || [], this._indexParameters = PH, !this._useExistingThinPostProcess) {
              this._webGPUReady = 1 === this._shaderLanguage;
              const IH = [];
              this._gatherImports(this._engine.isWebGPU && !HH.ForceGLSL, IH), this._effectWrapper._webGPUReady = this._webGPUReady, this._effectWrapper._postConstructor(XH, NH, qH, IH);
            }
          }
          _gatherImports() {
            let HH = arguments.length > 1 ? arguments[1] : void 0;
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this._webGPUReady ? HH.push(Promise.all([EH.e(136).then(EH.bind(EH, 25277))])) : HH.push(Promise.all([EH.e(137).then(EH.bind(EH, 25285))]));
          }
          getClassName() {
            return "PostProcess";
          }
          getEngine() {
            return this._engine;
          }
          getEffect() {
            return this._effectWrapper.drawWrapper.effect;
          }
          shareOutputWith(HH) {
            return this._disposeTextures(), this._shareOutputWithPostProcess = HH, this;
          }
          useOwnOutput() {
            0 == this._textures.length && (this._textures = new hH.e(2)), this._shareOutputWithPostProcess = null;
          }
          updateEffect() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              RH = arguments.length > 3 ? arguments[3] : void 0,
              hH = arguments.length > 4 ? arguments[4] : void 0,
              TH = arguments.length > 5 ? arguments[5] : void 0,
              sH = arguments.length > 6 ? arguments[6] : void 0,
              eH = arguments.length > 7 ? arguments[7] : void 0;
            this._effectWrapper.updateEffect(HH, IH, EH, RH, hH, TH, sH, eH), this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines;
          }
          isReusable() {
            return this._reusable;
          }
          markTextureDirty() {
            this.width = -1;
          }
          _createRenderTargetTexture(HH, IH) {
            let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            for (let hH = 0; hH < this._textureCache.length; hH++) if (this._textureCache[hH].texture.width === HH.width && this._textureCache[hH].texture.height === HH.height && this._textureCache[hH].postProcessChannel === EH && this._textureCache[hH].texture._generateDepthBuffer === IH.generateDepthBuffer && this._textureCache[hH].texture.samples === IH.samples) return this._textureCache[hH].texture;
            const RH = this._engine.createRenderTargetTexture(HH, IH);
            return this._textureCache.push({
              texture: RH,
              postProcessChannel: EH,
              lastUsedRenderId: -1
            }), RH;
          }
          _flushTextureCache() {
            const HH = this._renderId;
            for (let IH = this._textureCache.length - 1; IH >= 0; IH--) if (HH - this._textureCache[IH].lastUsedRenderId > 100) {
              let HH = !1;
              for (let EH = 0; EH < this._textures.length; EH++) if (this._textures.data[EH] === this._textureCache[IH].texture) {
                HH = !0;
                break;
              }
              HH || (this._textureCache[IH].texture.dispose(), this._textureCache.splice(IH, 1));
            }
          }
          resize(HH, IH) {
            let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this._textures.length > 0 && this._textures.reset(), this.width = HH, this.height = IH;
            let TH = null;
            if (EH) for (let GH = 0; GH < EH._postProcesses.length; GH++) if (null !== EH._postProcesses[GH]) {
              TH = EH._postProcesses[GH];
              break;
            }
            const sH = {
                width: this.width,
                height: this.height
              },
              eH = {
                generateMipMaps: RH,
                generateDepthBuffer: hH || TH === this,
                generateStencilBuffer: (hH || TH === this) && this._engine.isStencilEnable,
                samplingMode: this.renderTargetSamplingMode,
                type: this._textureType,
                format: this._textureFormat,
                samples: this._samples,
                label: "PostProcessRTT-" + this.name
              };
            this._textures.push(this._createRenderTargetTexture(sH, eH, 0)), this._reusable && this._textures.push(this._createRenderTargetTexture(sH, eH, 1)), this._texelSize.nY(1 / this.width, 1 / this.height), this.onSizeChangedObservable.notifyObservers(this);
          }
          _getTarget() {
            let HH;
            if (this._shareOutputWithPostProcess) HH = this._shareOutputWithPostProcess.inputTexture;else if (this._forcedOutputTexture) HH = this._forcedOutputTexture, this.width = this._forcedOutputTexture.width, this.height = this._forcedOutputTexture.height;else {
              let IH;
              HH = this.inputTexture;
              for (let EH = 0; EH < this._textureCache.length; EH++) if (this._textureCache[EH].texture === HH) {
                IH = this._textureCache[EH];
                break;
              }
              IH && (IH.lastUsedRenderId = this._renderId);
            }
            return HH;
          }
          activate(HH) {
            var IH, EH, RH;
            let hH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              TH = arguments.length > 2 ? arguments[2] : void 0;
            const sH = null === HH || void 0 !== HH.cameraRigMode ? HH || this._camera : null,
              eH = null !== (IH = null === sH || void 0 === sH ? void 0 : sH.kh()) && void 0 !== IH ? IH : HH,
              GH = eH.getEngine(),
              AH = GH.getCaps().maxTextureSize,
              VH = (hH ? hH.width : this._engine.getRenderWidth(!0)) * this._options | 0,
              YH = (hH ? hH.height : this._engine.getRenderHeight(!0)) * this._options | 0;
            let JH = this._options.width || VH,
              OH = this._options.height || YH;
            const rH = 7 !== this.renderTargetSamplingMode && 1 !== this.renderTargetSamplingMode && 2 !== this.renderTargetSamplingMode;
            let FH = null;
            if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
              if (this.adaptScaleToCurrentViewport) {
                const HH = GH.currentViewport;
                HH && (JH *= HH.width, OH *= HH.height);
              }
              (rH || this.alwaysForcePOT) && (this._options.width || (JH = GH.needPOTTextures ? (0, QH.i)(JH, AH, this.scaleMode) : JH), this._options.height || (OH = GH.needPOTTextures ? (0, QH.i)(OH, AH, this.scaleMode) : OH)), this.width === JH && this.height === OH && (FH = this._getTarget()) || this.resize(JH, OH, sH, rH, TH), this._textures.forEach(HH => {
                HH.samples !== this.samples && this._engine.updateRenderTargetTextureSampleCount(HH, this.samples);
              }), this._flushTextureCache(), this._renderId++;
            }
            return FH || (FH = this._getTarget()), this.enablePixelPerfectMode ? (this._scaleRatio.nY(VH / JH, YH / OH), this._engine.bindFramebuffer(FH, 0, VH, YH, this.forceFullscreenViewport)) : (this._scaleRatio.nY(1, 1), this._engine.bindFramebuffer(FH, 0, void 0, void 0, this.forceFullscreenViewport)), null === (EH = (RH = this._engine)._debugInsertMarker) || void 0 === EH || EH.call(RH, "post process ".concat(this.name, " input")), this.onActivateObservable.notifyObservers(sH), this.nF && (0 === this.alphaMode || this.forceAutoClearInAlphaMode) && this._engine.clear(this.clearColor ? this.clearColor : eH.clearColor, eH._allowPostProcessClearColor, !0, !0), this._reusable && (this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2), FH;
          }
          get isSupported() {
            return this._effectWrapper.drawWrapper.effect.isSupported;
          }
          get aspectRatio() {
            return this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.aspectRatio : this._forcedOutputTexture ? this._forcedOutputTexture.width / this._forcedOutputTexture.height : this.width / this.height;
          }
          isReady() {
            return this._effectWrapper.isReady();
          }
          apply() {
            if (!this._effectWrapper.isReady()) return null;
            let HH;
            var IH;
            (this._engine.enableEffect(this._effectWrapper.drawWrapper), this._engine.setState(!1), this._engine.setDepthBuffer(!1), this._engine.setDepthWrite(!1), this.alphaConstants && this.getEngine().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a), this._engine.setAlphaMode(this.alphaMode), HH = this._shareOutputWithPostProcess ? this._shareOutputWithPostProcess.inputTexture : this._forcedOutputTexture ? this._forcedOutputTexture : this.inputTexture, this.externalTextureSamplerBinding) || this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", null === (IH = HH) || void 0 === IH ? void 0 : IH.texture);
            return this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio), this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect), this._effectWrapper.bind(!0), this._effectWrapper.drawWrapper.effect;
          }
          _disposeTextures() {
            this._shareOutputWithPostProcess || this._forcedOutputTexture ? this._disposeTextureCache() : (this._disposeTextureCache(), this._textures.dispose());
          }
          _disposeTextureCache() {
            for (let HH = this._textureCache.length - 1; HH >= 0; HH--) this._textureCache[HH].texture.dispose();
            this._textureCache.length = 0;
          }
          setPrePassRenderer(HH) {
            return !!this._prePassEffectConfiguration && (this._prePassEffectConfiguration = HH.addEffectConfiguration(this._prePassEffectConfiguration), this._prePassEffectConfiguration.enabled = !0, !0);
          }
          dispose(HH) {
            let IH;
            if (HH = HH || this._camera, this._useExistingThinPostProcess || this._effectWrapper.dispose(), this._disposeTextures(), this._scene && this._scene.removePostProcess(this), this._parentContainer && (IH = this._parentContainer.postProcesses.indexOf(this), IH > -1 && this._parentContainer.postProcesses.splice(IH, 1), this._parentContainer = null), IH = this._engine.postProcesses.indexOf(this), -1 !== IH && this._engine.postProcesses.splice(IH, 1), this.AM.notifyObservers(), HH) {
              if (HH.detachPostProcess(this), IH = HH._postProcesses.indexOf(this), 0 === IH && HH._postProcesses.length > 0) {
                const HH = this._camera._getFirstPostProcess();
                HH && HH.markTextureDirty();
              }
              this.onActivateObservable.clear(), this.onAfterRenderObservable.clear(), this.onApplyObservable.clear(), this.onBeforeRenderObservable.clear(), this.onSizeChangedObservable.clear(), this.onEffectCreatedObservable.clear();
            }
          }
          serialize() {
            const HH = AH.c.Serialize(this),
              IH = this.getCamera() || this._scene && this._scene.activeCamera;
            return HH.customType = "BABYLON." + this.getClassName(), HH.cameraId = IH ? IH.id : null, HH.reusable = this._reusable, HH.textureType = this._textureType, HH.fragmentUrl = this._fragmentUrl, HH.parameters = this._parameters, HH.samplers = this._samplers, HH.uniformBuffers = this._uniformBuffers, HH.options = this._options, HH.defines = this._postProcessDefines, HH.textureFormat = this._textureFormat, HH.vertexUrl = this._vertexUrl, HH.indexParameters = this._indexParameters, HH;
          }
          clone() {
            const IH = this.serialize();
            IH._engine = this._engine, IH.cameraId = null;
            const EH = HH.Parse(IH, this._scene, "");
            return EH ? (EH.onActivateObservable = this.onActivateObservable.clone(), EH.onSizeChangedObservable = this.onSizeChangedObservable.clone(), EH.onApplyObservable = this.onApplyObservable.clone(), EH.onBeforeRenderObservable = this.onBeforeRenderObservable.clone(), EH.onAfterRenderObservable = this.onAfterRenderObservable.clone(), EH._prePassEffectConfiguration = this._prePassEffectConfiguration, EH) : null;
          }
          static Parse(HH, IH, EH) {
            const RH = (0, VH.c)(HH.customType);
            if (!RH || !RH._Parse) return null;
            const hH = IH ? IH.getCameraById(HH.cameraId) : null;
            return RH._Parse(HH, hH, IH, EH);
          }
          static _Parse(IH, EH, RH, hH) {
            return AH.c.Parse(() => new HH(IH.name, IH.fragmentUrl, IH.parameters, IH.samplers, IH.options, EH, IH.renderTargetSamplingMode, IH._engine, IH.reusable, IH.defines, IH.textureType, IH.vertexUrl, IH.indexParameters, !1, IH.textureFormat), IH, RH, hH);
          }
        }, (() => {
          const EH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IH = [(0, GH.K)()], eH = [(0, GH.K)()], YH = [(0, GH.K)()], OH = [(0, GH.K)()], rH = [(0, GH.K)()], MH = [(0, GH.p)()], NH = [(0, GH.K)()], iI = [(0, GH.K)()], DH = [(0, GH.K)()], PH = [(0, GH.K)()], XH = [(0, GH.K)()], mI = [(0, GH.K)()], ZH = [(0, GH.K)()], qH = [(0, GH.K)()], LH = [(0, GH.K)("samples")], gH = [(0, GH.K)()], (0, RH.i)(HH, null, eH, {
            kind: "getter",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: HH => "name" in HH,
              get: HH => HH.name
            },
            metadata: EH
          }, null, yH), (0, RH.i)(HH, null, DH, {
            kind: "getter",
            name: "alphaMode",
            static: !1,
            private: !1,
            access: {
              has: HH => "alphaMode" in HH,
              get: HH => HH.alphaMode
            },
            metadata: EH
          }, null, yH), (0, RH.i)(null, null, IH, {
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
            metadata: EH
          }, oH, kI), (0, RH.i)(null, null, YH, {
            kind: "field",
            name: "width",
            static: !1,
            private: !1,
            access: {
              has: HH => "width" in HH,
              get: HH => HH.width,
              set: (HH, IH) => {
                HH.width = IH;
              }
            },
            metadata: EH
          }, CH, cH), (0, RH.i)(null, null, OH, {
            kind: "field",
            name: "height",
            static: !1,
            private: !1,
            access: {
              has: HH => "height" in HH,
              get: HH => HH.height,
              set: (HH, IH) => {
                HH.height = IH;
              }
            },
            metadata: EH
          }, UH, WH), (0, RH.i)(null, null, rH, {
            kind: "field",
            name: "renderTargetSamplingMode",
            static: !1,
            private: !1,
            access: {
              has: HH => "renderTargetSamplingMode" in HH,
              get: HH => HH.renderTargetSamplingMode,
              set: (HH, IH) => {
                HH.renderTargetSamplingMode = IH;
              }
            },
            metadata: EH
          }, BH, fH), (0, RH.i)(null, null, MH, {
            kind: "field",
            name: "clearColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "clearColor" in HH,
              get: HH => HH.clearColor,
              set: (HH, IH) => {
                HH.clearColor = IH;
              }
            },
            metadata: EH
          }, aH, nH), (0, RH.i)(null, null, NH, {
            kind: "field",
            name: "nF",
            static: !1,
            private: !1,
            access: {
              has: HH => "nF" in HH,
              get: HH => HH.nF,
              set: (HH, IH) => {
                HH.nF = IH;
              }
            },
            metadata: EH
          }, pH, dH), (0, RH.i)(null, null, iI, {
            kind: "field",
            name: "forceAutoClearInAlphaMode",
            static: !1,
            private: !1,
            access: {
              has: HH => "forceAutoClearInAlphaMode" in HH,
              get: HH => HH.forceAutoClearInAlphaMode,
              set: (HH, IH) => {
                HH.forceAutoClearInAlphaMode = IH;
              }
            },
            metadata: EH
          }, uH, lH), (0, RH.i)(null, null, PH, {
            kind: "field",
            name: "alphaConstants",
            static: !1,
            private: !1,
            access: {
              has: HH => "alphaConstants" in HH,
              get: HH => HH.alphaConstants,
              set: (HH, IH) => {
                HH.alphaConstants = IH;
              }
            },
            metadata: EH
          }, KH, wH), (0, RH.i)(null, null, XH, {
            kind: "field",
            name: "enablePixelPerfectMode",
            static: !1,
            private: !1,
            access: {
              has: HH => "enablePixelPerfectMode" in HH,
              get: HH => HH.enablePixelPerfectMode,
              set: (HH, IH) => {
                HH.enablePixelPerfectMode = IH;
              }
            },
            metadata: EH
          }, zH, tH), (0, RH.i)(null, null, mI, {
            kind: "field",
            name: "forceFullscreenViewport",
            static: !1,
            private: !1,
            access: {
              has: HH => "forceFullscreenViewport" in HH,
              get: HH => HH.forceFullscreenViewport,
              set: (HH, IH) => {
                HH.forceFullscreenViewport = IH;
              }
            },
            metadata: EH
          }, jI, vH), (0, RH.i)(null, null, ZH, {
            kind: "field",
            name: "scaleMode",
            static: !1,
            private: !1,
            access: {
              has: HH => "scaleMode" in HH,
              get: HH => HH.scaleMode,
              set: (HH, IH) => {
                HH.scaleMode = IH;
              }
            },
            metadata: EH
          }, bH, SH), (0, RH.i)(null, null, qH, {
            kind: "field",
            name: "alwaysForcePOT",
            static: !1,
            private: !1,
            access: {
              has: HH => "alwaysForcePOT" in HH,
              get: HH => HH.alwaysForcePOT,
              set: (HH, IH) => {
                HH.alwaysForcePOT = IH;
              }
            },
            metadata: EH
          }, xH, HI), (0, RH.i)(null, null, LH, {
            kind: "field",
            name: "_samples",
            static: !1,
            private: !1,
            access: {
              has: HH => "_samples" in HH,
              get: HH => HH._samples,
              set: (HH, IH) => {
                HH._samples = IH;
              }
            },
            metadata: EH
          }, II, EI), (0, RH.i)(null, null, gH, {
            kind: "field",
            name: "adaptScaleToCurrentViewport",
            static: !1,
            private: !1,
            access: {
              has: HH => "adaptScaleToCurrentViewport" in HH,
              get: HH => HH.adaptScaleToCurrentViewport,
              set: (HH, IH) => {
                HH.adaptScaleToCurrentViewport = IH;
              }
            },
            metadata: EH
          }, RI, hI), EH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EH
          });
        })(), HH;
      })(),
      rH = !1;
    function FH() {
      rH || (rH = !0, YH.c.prototype.setTextureFromPostProcess = function (HH, IH, EH) {
        var RH, hH;
        let TH = null;
        IH && (IH._forcedOutputTexture ? TH = IH._forcedOutputTexture : IH._textures.data[IH._currentRenderTextureInd] && (TH = IH._textures.data[IH._currentRenderTextureInd])), this._bindTexture(HH, null !== (RH = null === (hH = TH) || void 0 === hH ? void 0 : hH.texture) && void 0 !== RH ? RH : null, EH);
      }, YH.c.prototype.setTextureFromPostProcessOutput = function (HH, IH, EH) {
        var RH, hH;
        this._bindTexture(HH, null !== (RH = null === IH || void 0 === IH || null === (hH = IH._outputTexture) || void 0 === hH ? void 0 : hH.texture) && void 0 !== RH ? RH : null, EH);
      }, eH.c.prototype.setTextureFromPostProcess = function (HH, IH) {
        this._engine.setTextureFromPostProcess(this._samplers[HH], IH, HH);
      }, eH.c.prototype.setTextureFromPostProcessOutput = function (HH, IH) {
        this._engine.setTextureFromPostProcessOutput(this._samplers[HH], IH, HH);
      }, (0, VH.d)("BABYLON.PostProcess", OH));
    }
  },
  24007: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => eH,
      h: () => sH
    });
    var RH = EH(17),
      hH = EH(23995),
      TH = EH(21782);
    class sH extends hH.f {
      _gatherImports(HH, IH) {
        HH ? (this._webGPUReady = !0, IH.push(Promise.all([EH.e(144).then(EH.bind(EH, 25325))]))) : IH.push(Promise.all([EH.e(145).then(EH.bind(EH, 25331))])), super._gatherImports(HH, IH);
      }
      constructor(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = arguments.length > 2 ? arguments[2] : void 0;
        const hH = (0, RH.b)({
          name: HH,
          YY: IH || TH.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: sH.FragmentUrl
        }, EH);
        hH.YY || (hH.YY = TH.e.LastCreatedEngine), super(hH);
      }
    }
    sH.FragmentUrl = "pass";
    class eH extends hH.f {
      _gatherImports(HH, IH) {
        HH ? (this._webGPUReady = !0, IH.push(Promise.all([EH.e(146).then(EH.bind(EH, 25334))]))) : IH.push(Promise.all([EH.e(147).then(EH.bind(EH, 25341))])), super._gatherImports(HH, IH);
      }
      constructor(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = arguments.length > 2 ? arguments[2] : void 0;
        super((0, RH.b)((0, RH.b)({}, EH), {}, {
          name: HH,
          YY: IH || TH.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          fragmentShader: eH.FragmentUrl,
          defines: "#define POSITIVEX"
        })), this._face = 0;
      }
      get face() {
        return this._face;
      }
      set face(HH) {
        if (!(HH < 0 || HH > 5)) switch (this._face = HH, this._face) {
          case 0:
            this.updateEffect("#define POSITIVEX");
            break;
          case 1:
            this.updateEffect("#define NEGATIVEX");
            break;
          case 2:
            this.updateEffect("#define POSITIVEY");
            break;
          case 3:
            this.updateEffect("#define NEGATIVEY");
            break;
          case 4:
            this.updateEffect("#define POSITIVEZ");
            break;
          case 5:
            this.updateEffect("#define NEGATIVEZ");
        }
      }
    }
    eH.FragmentUrl = "passCube";
  },
  21970: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => YH
    });
    var RH = EH(21947),
      hH = EH(21764),
      TH = EH(21956),
      sH = EH(21786),
      eH = EH(21782),
      GH = EH(21856),
      AH = EH(21972);
    class VH {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new sH.e(), this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new sH.e(), this._inheritVisibility = !1, this._isVisible = !0;
      }
    }
    let YH = (() => {
      var HH;
      let IH,
        EH,
        YH,
        QH,
        JH,
        OH = [],
        rH = [],
        FH = [],
        MH = [],
        NH = [],
        iI = [],
        DH = [],
        PH = [],
        XH = [],
        mI = [];
      return HH = class {
        static AddNodeConstructor(HH, IH) {
          this._NodeConstructors[HH] = IH;
        }
        static Construct(HH, IH, EH, RH) {
          const hH = this._NodeConstructors[HH];
          return hH ? hH(IH, EH, RH) : null;
        }
        set accessibilityTag(HH) {
          this._accessibilityTag = HH, this.onAccessibilityTagChangedObservable.notifyObservers(HH);
        }
        get accessibilityTag() {
          return this._accessibilityTag;
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize;
        }
        set doNotSerialize(HH) {
          this._nodeDataStorage._doNotSerialize = HH;
        }
        sH() {
          return this._nodeDataStorage._isDisposed;
        }
        set parent(HH) {
          if (this._parentNode === HH) return;
          const IH = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const IH = this._parentNode._children.indexOf(this);
            -1 !== IH && this._parentNode._children.splice(IH, 1), HH || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes();
          }
          this._parentNode = HH, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array()), this._parentNode._children.push(this), IH || this._removeFromSceneRootNodes()), this._syncParentEnabledState();
        }
        get parent() {
          return this._parentNode;
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility;
        }
        set inheritVisibility(HH) {
          this._nodeDataStorage._inheritVisibility = HH;
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible;
        }
        set isVisible(HH) {
          this._nodeDataStorage._isVisible = HH;
        }
        _serializeAsParent(HH) {
          HH.parentId = this.uniqueId;
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this));
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const HH = this._scene.rootNodes,
              IH = HH.length - 1;
            HH[this._nodeDataStorage._sceneRootNodesIndex] = HH[IH], HH[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1;
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride;
        }
        set animationPropertiesOverride(HH) {
          this._animationPropertiesOverride = HH;
        }
        getClassName() {
          return "Node";
        }
        set onDispose(HH) {
          this._onDisposeObserver && this.AM.remove(this._onDisposeObserver), this._onDisposeObserver = this.AM.add(HH);
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable;
        }
        get onEffectiveEnabledStateChangedObservable() {
          var HH, IH;
          return null !== (HH = (IH = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable) && void 0 !== HH ? HH : IH._onEffectiveEnabledStateChangedObservable = new sH.e();
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable;
        }
        constructor(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            EH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new VH(), this.name = (0, RH.j)(this, OH, void 0), this.id = ((0, RH.j)(this, rH), (0, RH.j)(this, FH, void 0)), this.uniqueId = ((0, RH.j)(this, MH), (0, RH.j)(this, NH, void 0)), this.state = ((0, RH.j)(this, iI), (0, RH.j)(this, DH, "")), this.metadata = ((0, RH.j)(this, PH), (0, RH.j)(this, XH, null)), this._internalMetadata = (0, RH.j)(this, mI), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new sH.e(), this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = hH.d.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.AM = new sH.e(), this._onDisposeObserver = null, this._behaviors = new Array(), this.name = HH, this.id = HH, this._scene = IH || eH.e.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), EH && this._addToSceneRootNodes();
        }
        kh() {
          return this._scene;
        }
        getEngine() {
          return this._scene.getEngine();
        }
        addBehavior(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(HH) || (HH.init(), this._scene.isLoading && !IH ? this._scene.onDataLoadedObservable.addOnce(() => {
            this._behaviors.includes(HH) && HH.attach(this);
          }) : HH.attach(this), this._behaviors.push(HH)), this;
        }
        removeBehavior(HH) {
          const IH = this._behaviors.indexOf(HH);
          return -1 === IH || (this._behaviors.splice(IH, 1), HH.detach()), this;
        }
        get behaviors() {
          return this._behaviors;
        }
        getBehaviorByName(HH) {
          for (const IH of this._behaviors) if (IH.name === HH) return IH;
          return null;
        }
        getWorldMatrix() {
          return this._currentRenderId !== this._scene.getRenderId() && this.aJ(), this._worldMatrix;
        }
        _getWorldMatrixDeterminant() {
          return this._worldMatrixDeterminantIsDirty && (this._worldMatrixDeterminantIsDirty = !1, this._worldMatrixDeterminant = this._worldMatrix.determinant()), this._worldMatrixDeterminant;
        }
        get worldMatrixFromCache() {
          return this._worldMatrix;
        }
        _initCache() {
          this._cache = {};
        }
        updateCache(HH) {
          !HH && this.isSynchronized() || this._updateCache();
        }
        _getActionManagerForTrigger(HH) {
          return this.parent ? this.parent._getActionManagerForTrigger(HH, !1) : null;
        }
        _updateCache(HH) {}
        _isSynchronized() {
          return !0;
        }
        _markSyncedWithParent() {
          this._parentNode && (this._parentUpdateId = this._parentNode._childUpdateId);
        }
        isSynchronizedWithParent() {
          return !this._parentNode || !this._parentNode._isDirty && this._parentUpdateId === this._parentNode._childUpdateId && this._parentNode.isSynchronized();
        }
        isSynchronized() {
          return !(this._parentNode && !this.isSynchronizedWithParent()) && this._isSynchronized();
        }
        isReady() {
          return this._nodeDataStorage._isReady;
        }
        JO(HH) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this;
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled;
        }
        _hasEffectiveEnabledStateObservers() {
          const HH = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!HH && HH.hasObservers();
        }
        _syncParentEnabledState() {
          const HH = this._hasEffectiveEnabledStateObservers(),
            IH = HH ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children) for (const EH of this._children) EH._syncParentEnabledState();
          if (HH) {
            const HH = this.isEnabled();
            HH !== IH && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(HH);
          }
        }
        hY(HH) {
          if (this._nodeDataStorage._isEnabled === HH) return;
          const IH = this._hasEffectiveEnabledStateObservers(),
            EH = IH ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = HH, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(HH), IH) {
            const HH = this.isEnabled();
            HH !== EH && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(HH);
          }
        }
        isDescendantOf(HH) {
          return !!this.parent && (this.parent === HH || this.parent.isDescendantOf(HH));
        }
        _getDescendants(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            EH = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children) for (let RH = 0; RH < this._children.length; RH++) {
            const hH = this._children[RH];
            EH && !EH(hH) || HH.push(hH), IH || hH._getDescendants(HH, !1, EH);
          }
        }
        getDescendants(HH, IH) {
          const EH = [];
          return this._getDescendants(EH, HH, IH), EH;
        }
        UY(HH, IH) {
          const EH = [];
          return this._getDescendants(EH, HH, HH => (!IH || IH(HH)) && void 0 !== HH.cullingStrategy), EH;
        }
        getChildren(HH) {
          let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(IH, HH);
        }
        _setReady(HH) {
          HH !== this._nodeDataStorage._isReady && (HH ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1);
        }
        getAnimationByName(HH) {
          for (let IH = 0; IH < this.animations.length; IH++) {
            const EH = this.animations[IH];
            if (EH.name === HH) return EH;
          }
          return null;
        }
        createAnimationRange(IH, EH, RH) {
          if (!this._ranges[IH]) {
            this._ranges[IH] = HH._AnimationRangeFactory(IH, EH, RH);
            for (let HH = 0, hH = this.animations.length; HH < hH; HH++) this.animations[HH] && this.animations[HH].createRange(IH, EH, RH);
          }
        }
        deleteAnimationRange(HH) {
          let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let EH = 0, RH = this.animations.length; EH < RH; EH++) this.animations[EH] && this.animations[EH].deleteRange(HH, IH);
          this._ranges[HH] = null;
        }
        getAnimationRange(HH) {
          return this._ranges[HH] || null;
        }
        clone(IH, EH, RH) {
          const hH = AH.c.Clone(() => new HH(IH, this.kh()), this);
          if (EH && (hH.parent = EH), !RH) {
            const HH = this.getDescendants(!0);
            for (let EH = 0; EH < HH.length; EH++) {
              const RH = HH[EH];
              RH.clone(IH + "." + RH.name, hH);
            }
          }
          return hH;
        }
        getAnimationRanges() {
          const HH = [];
          let IH;
          for (IH in this._ranges) HH.push(this._ranges[IH]);
          return HH;
        }
        beginAnimation(HH, IH, EH, RH) {
          const hH = this.getAnimationRange(HH);
          return hH ? this._scene.beginAnimation(this, hH.from, hH.to, IH, EH, RH) : null;
        }
        serializeAnimationRanges() {
          const HH = [];
          for (const IH in this._ranges) {
            const EH = this._ranges[IH];
            if (!EH) continue;
            const RH = {};
            RH.name = IH, RH.from = EH.from, RH.to = EH.to, HH.push(RH);
          }
          return HH;
        }
        aJ(HH) {
          return this._worldMatrix || (this._worldMatrix = hH.d.Identity()), this._worldMatrix;
        }
        dispose(HH) {
          var IH;
          let EH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !HH) {
            const IH = this.getDescendants(!0);
            for (const RH of IH) RH.dispose(HH, EH);
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.AM.notifyObservers(this), this.AM.clear(), this.onEnabledStateChangedObservable.clear(), null === (IH = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable) || void 0 === IH || IH.clear(), this.onClonedObservable.clear();
          for (const RH of this._behaviors) RH.detach();
          this._behaviors.length = 0, this.metadata = null;
        }
        static ParseAnimationRanges(HH, IH, EH) {
          if (IH.ranges) for (let RH = 0; RH < IH.ranges.length; RH++) {
            const EH = IH.ranges[RH];
            HH.createAnimationRange(EH.name, EH.from, EH.to);
          }
        }
        getHierarchyBoundingVectors() {
          let HH,
            IH,
            EH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            RH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.kh().incrementRenderId(), this.aJ(!0);
          const TH = this;
          if (TH.getBoundingInfo && TH.BJ) {
            const EH = TH.getBoundingInfo();
            HH = EH.boundingBox.minimumWorld.clone(), IH = EH.boundingBox.maximumWorld.clone();
          } else HH = new hH.x(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), IH = new hH.x(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (EH) {
            const EH = this.getDescendants(!1);
            for (const TH of EH) {
              const EH = TH;
              if (EH.aJ(!0), RH && !RH(EH)) continue;
              if (!EH.getBoundingInfo || 0 === EH.getTotalVertices()) continue;
              const sH = EH.getBoundingInfo().boundingBox,
                eH = sH.minimumWorld,
                GH = sH.maximumWorld;
              hH.x.CheckExtends(eH, HH, IH), hH.x.CheckExtends(GH, HH, IH);
            }
          }
          return {
            min: HH,
            max: IH
          };
        }
      }, (() => {
        const hH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IH = [(0, TH.K)()], EH = [(0, TH.K)()], YH = [(0, TH.K)()], QH = [(0, TH.K)()], JH = [(0, TH.K)()], (0, RH.i)(null, null, IH, {
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
          metadata: hH
        }, OH, rH), (0, RH.i)(null, null, EH, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: HH => "id" in HH,
            get: HH => HH.id,
            set: (HH, IH) => {
              HH.id = IH;
            }
          },
          metadata: hH
        }, FH, MH), (0, RH.i)(null, null, YH, {
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
          metadata: hH
        }, NH, iI), (0, RH.i)(null, null, QH, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: HH => "state" in HH,
            get: HH => HH.state,
            set: (HH, IH) => {
              HH.state = IH;
            }
          },
          metadata: hH
        }, DH, PH), (0, RH.i)(null, null, JH, {
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
          metadata: hH
        }, XH, mI), hH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: hH
        });
      })(), HH._AnimationRangeFactory = (HH, IH, EH) => {
        throw (0, GH.n)("AnimationRange");
      }, HH._NodeConstructors = {}, HH;
    })();
  }
};
//# sourceMappingURL=ug4nu.52.e0a28a00.chunk.js.map
//# debugId=577dec31-e4f6-57f7-9e51-ba4316c7a9d3