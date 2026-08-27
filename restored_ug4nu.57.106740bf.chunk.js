!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1f7a5440-32f8-5c04-81f9-968ea7723024");
  } catch (e) {}
}();
export const id = 57;
export const ids = [57];
export const modules = {
  22546: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => hH
    });
    var RH = EH(21959);
    function hH(HH) {
      return class extends HH {
        constructor() {
          super(...arguments);
          const HH = new.target;
          if (!HH[Symbol.metadata]) {
            var IH;
            const EH = null === (IH = Object.getPrototypeOf(HH)) || void 0 === IH ? void 0 : IH[Symbol.metadata];
            HH[Symbol.metadata] = EH ? Object.create(EH) : {};
          }
          const EH = (0, RH.b)(HH[Symbol.metadata]);
          EH._imageProcessingConfiguration || (EH._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          });
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration;
        }
        set imageProcessingConfiguration(HH) {
          this._attachImageProcessingConfiguration(HH), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty();
        }
        _attachImageProcessingConfiguration(HH) {
          HH !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !HH && this.kh ? this._imageProcessingConfiguration = this.kh().imageProcessingConfiguration : HH && (this._imageProcessingConfiguration = HH), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add(() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty();
          })));
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled;
        }
        set cameraColorCurvesEnabled(HH) {
          this.imageProcessingConfiguration.colorCurvesEnabled = HH;
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled;
        }
        set cameraColorGradingEnabled(HH) {
          this.imageProcessingConfiguration.colorGradingEnabled = HH;
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled;
        }
        set cameraToneMappingEnabled(HH) {
          this._imageProcessingConfiguration.toneMappingEnabled = HH;
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure;
        }
        set cameraExposure(HH) {
          this._imageProcessingConfiguration.exposure = HH;
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast;
        }
        set cameraContrast(HH) {
          this._imageProcessingConfiguration.contrast = HH;
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture;
        }
        set cameraColorGradingTexture(HH) {
          this._imageProcessingConfiguration.colorGradingTexture = HH;
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves;
        }
        set cameraColorCurves(HH) {
          this._imageProcessingConfiguration.colorCurves = HH;
        }
      };
    }
  },
  22485: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => TH,
      g: () => hH
    });
    var RH = EH(22488);
    function hH(HH) {
      return class extends HH {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1;
        }
      };
    }
    class TH extends RH.b {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild();
      }
    }
  },
  22503: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => YH
    });
    var RH = EH(21947),
      hH = EH(22248),
      TH = EH(21956),
      sH = EH(22276),
      eH = EH(22488),
      GH = EH(22506),
      AH = EH(22250);
    class VH extends eH.b {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0;
      }
    }
    let YH = (() => {
      var HH, IH, EH, eH;
      let YH,
        QH,
        JH,
        OH,
        rH,
        FH,
        MH = GH.b,
        NH = [],
        iI = [],
        DH = [],
        PH = [],
        XH = [],
        mI = [],
        ZH = [],
        qH = [],
        LH = [],
        gH = [],
        yH = [],
        oH = [];
      return HH = class extends MH {
        get texture() {
          return (0, RH.d)(this, IH, "f");
        }
        set texture(HH) {
          (0, RH.g)(this, IH, HH, "f");
        }
        get normalBlendMethod() {
          return (0, RH.d)(this, EH, "f");
        }
        set normalBlendMethod(HH) {
          (0, RH.g)(this, EH, HH, "f");
        }
        get isEnabled() {
          return (0, RH.d)(this, eH, "f");
        }
        set isEnabled(HH) {
          (0, RH.g)(this, eH, HH, "f");
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty();
        }
        isCompatible() {
          return !0;
        }
        constructor(HH) {
          let TH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(HH, "DetailMap", 140, new VH(), TH), this._texture = null, IH.set(this, (0, RH.j)(this, NH, void 0)), this.diffuseBlendLevel = ((0, RH.j)(this, iI), (0, RH.j)(this, DH, 1)), this.roughnessBlendLevel = ((0, RH.j)(this, PH), (0, RH.j)(this, XH, 1)), this.bumpLevel = ((0, RH.j)(this, mI), (0, RH.j)(this, ZH, 1)), this._normalBlendMethod = ((0, RH.j)(this, qH), hH.b.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), EH.set(this, (0, RH.j)(this, LH, void 0)), this._isEnabled = ((0, RH.j)(this, gH), !1), eH.set(this, (0, RH.j)(this, yH, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, RH.j)(this, oH), this._internalMarkAllSubMeshesAsTexturesDirty = HH._dirtyCallbacks[1];
        }
        isReadyForSubMesh(HH, IH, EH) {
          return !this._isEnabled || !(HH._areTexturesDirty && IH.texturesEnabled && EH.getCaps().standardDerivatives && this._texture && sH.b.DetailTextureEnabled && !this._texture.isReady());
        }
        prepareDefines(HH, IH) {
          if (this._isEnabled) {
            HH.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const EH = IH.getEngine();
            HH._areTexturesDirty && (EH.getCaps().standardDerivatives && this._texture && sH.b.DetailTextureEnabled && this._isEnabled ? ((0, AH.X)(this._texture, HH, "DETAIL"), HH.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : HH.DETAIL = !1);
          } else HH.DETAIL = !1;
        }
        bindForSubMesh(HH, IH) {
          if (!this._isEnabled) return;
          const EH = this._material.isFrozen;
          HH.useUbo && EH && HH.isSync || this._texture && sH.b.DetailTextureEnabled && (HH.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, AH.z)(this._texture, HH, "detail")), IH.texturesEnabled && this._texture && sH.b.DetailTextureEnabled && HH.setTexture("detailSampler", this._texture);
        }
        hasTexture(HH) {
          return this._texture === HH;
        }
        getActiveTextures(HH) {
          this._texture && HH.push(this._texture);
        }
        getAnimatables(HH) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && HH.push(this._texture);
        }
        dispose(HH) {
          var IH;
          HH && (null === (IH = this._texture) || void 0 === IH || IH.dispose());
        }
        getClassName() {
          return "DetailMapConfiguration";
        }
        getSamplers(HH) {
          HH.push("detailSampler");
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vDetailInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "detailMatrix",
              size: 16,
              type: "mat4"
            }]
          };
        }
      }, IH = new WeakMap(), EH = new WeakMap(), eH = new WeakMap(), (IH => {
        const EH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (IH = MH[Symbol.metadata]) && void 0 !== IH ? IH : null) : void 0;
        YH = [(0, TH.F)("detailTexture"), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], QH = [(0, TH.K)()], JH = [(0, TH.K)()], OH = [(0, TH.K)()], rH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], FH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], (0, RH.i)(HH, null, YH, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: HH => "texture" in HH,
            get: HH => HH.texture,
            set: (HH, IH) => {
              HH.texture = IH;
            }
          },
          metadata: EH
        }, NH, iI), (0, RH.i)(HH, null, rH, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: HH => "normalBlendMethod" in HH,
            get: HH => HH.normalBlendMethod,
            set: (HH, IH) => {
              HH.normalBlendMethod = IH;
            }
          },
          metadata: EH
        }, LH, gH), (0, RH.i)(HH, null, FH, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "isEnabled" in HH,
            get: HH => HH.isEnabled,
            set: (HH, IH) => {
              HH.isEnabled = IH;
            }
          },
          metadata: EH
        }, yH, oH), (0, RH.i)(null, null, QH, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: HH => "diffuseBlendLevel" in HH,
            get: HH => HH.diffuseBlendLevel,
            set: (HH, IH) => {
              HH.diffuseBlendLevel = IH;
            }
          },
          metadata: EH
        }, DH, PH), (0, RH.i)(null, null, JH, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: HH => "roughnessBlendLevel" in HH,
            get: HH => HH.roughnessBlendLevel,
            set: (HH, IH) => {
              HH.roughnessBlendLevel = IH;
            }
          },
          metadata: EH
        }, XH, mI), (0, RH.i)(null, null, OH, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: HH => "bumpLevel" in HH,
            get: HH => HH.bumpLevel,
            set: (HH, IH) => {
              HH.bumpLevel = IH;
            }
          },
          metadata: EH
        }, ZH, qH), EH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EH
        });
      })(), HH;
    })();
  },
  22488: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => RH
    });
    class RH {
      constructor(HH) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = HH, HH) for (const IH in HH) Object.prototype.hasOwnProperty.call(HH, IH) && this._setDefaultValue(IH);
      }
      get isDirty() {
        return this._isDirty;
      }
      markAsProcessed() {
        this._isDirty = !1, this._areAttributesDirty = !1, this._areTexturesDirty = !1, this._areFresnelDirty = !1, this._areLightsDirty = !1, this._areLightsDisposed = !1, this._areMiscDirty = !1, this._arePrePassDirty = !1, this._areImageProcessingDirty = !1;
      }
      markAsUnprocessed() {
        this._isDirty = !0;
      }
      markAllAsDirty() {
        this._areTexturesDirty = !0, this._areAttributesDirty = !0, this._areLightsDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._isDirty = !0;
      }
      markAsImageProcessingDirty() {
        this._areImageProcessingDirty = !0, this._isDirty = !0;
      }
      markAsLightDirty() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || HH, this._isDirty = !0;
      }
      markAsAttributesDirty() {
        this._areAttributesDirty = !0, this._isDirty = !0;
      }
      markAsTexturesDirty() {
        this._areTexturesDirty = !0, this._isDirty = !0;
      }
      markAsFresnelDirty() {
        this._areFresnelDirty = !0, this._isDirty = !0;
      }
      markAsMiscDirty() {
        this._areMiscDirty = !0, this._isDirty = !0;
      }
      markAsPrePassDirty() {
        this._arePrePassDirty = !0, this._isDirty = !0;
      }
      rebuild() {
        this._keys.length = 0;
        for (const HH of Object.keys(this)) "_" !== HH[0] && this._keys.push(HH);
        if (this._externalProperties) for (const HH in this._externalProperties) -1 === this._keys.indexOf(HH) && this._keys.push(HH);
      }
      isEqual(HH) {
        if (this._keys.length !== HH._keys.length) return !1;
        for (let IH = 0; IH < this._keys.length; IH++) {
          const EH = this._keys[IH];
          if (this[EH] !== HH[EH]) return !1;
        }
        return !0;
      }
      cloneTo(HH) {
        this._keys.length !== HH._keys.length && (HH._keys = this._keys.slice(0));
        for (let IH = 0; IH < this._keys.length; IH++) {
          const EH = this._keys[IH];
          HH[EH] = this[EH];
        }
      }
      reset() {
        for (const HH of this._keys) this._setDefaultValue(HH);
      }
      _setDefaultValue(HH) {
        var IH, EH, RH, hH, TH;
        const sH = null !== (IH = null === (EH = this._externalProperties) || void 0 === EH || null === (RH = EH[HH]) || void 0 === RH ? void 0 : RH.type) && void 0 !== IH ? IH : typeof this[HH],
          eH = null === (hH = this._externalProperties) || void 0 === hH || null === (TH = hH[HH]) || void 0 === TH ? void 0 : TH.default;
        switch (sH) {
          case "number":
            this[HH] = null !== eH && void 0 !== eH ? eH : 0;
            break;
          case "string":
            this[HH] = null !== eH && void 0 !== eH ? eH : "";
            break;
          default:
            this[HH] = null !== eH && void 0 !== eH && eH;
        }
      }
      toString() {
        let HH = "";
        for (let IH = 0; IH < this._keys.length; IH++) {
          const EH = this._keys[IH],
            RH = this[EH];
          switch (typeof RH) {
            case "number":
            case "string":
              HH += "#define " + EH + " " + RH + "\n";
              break;
            default:
              RH && (HH += "#define " + EH + "\n");
          }
        }
        return HH;
      }
    }
  },
  22523: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => TH
    });
    var RH,
      hH = EH(21764);
    !function (HH) {
      HH[HH.Zero = 0] = "Zero", HH[HH.One = 1] = "One", HH[HH.MaxViewZ = 2] = "MaxViewZ", HH[HH.NoClear = 3] = "NoClear";
    }(RH || (RH = {}));
    class TH {
      static CreateConfiguration(HH) {
        return TH._Configurations[HH] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: hH.d.Zero(),
          currentViewProjection: hH.d.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1
        }, TH._Configurations[HH];
      }
      static DeleteConfiguration(HH) {
        delete TH._Configurations[HH];
      }
      static GetConfiguration(HH) {
        return TH._Configurations[HH];
      }
      static AddUniformsAndSamplers(HH, IH) {
        HH.push("previousWorld", "previousViewProjection", "mPreviousBones");
      }
      static MarkAsDirty(HH, IH) {
        for (const EH of IH) if (EH.BJ) for (const IH of EH.BJ) IH._removeDrawWrapper(HH);
      }
      static PrepareDefines(HH, IH, EH) {
        if (!EH._arePrePassDirty) return;
        const RH = TH._Configurations[HH];
        if (!RH) return;
        EH.PREPASS = !0;
        let hH = 0;
        for (let sH = 0; sH < TH.GeometryTextureDescriptions.length; sH++) {
          const HH = TH.GeometryTextureDescriptions[sH],
            IH = HH.define,
            eH = HH.defineIndex,
            GH = RH.defines[eH];
          void 0 !== GH ? (EH[IH] = !0, EH[eH] = GH, hH++) : (EH[IH] = !1, delete EH[eH]);
        }
        EH.SCENE_MRT_COUNT = hH, EH.BONES_VELOCITY_ENABLED = IH.useBones && IH.computeBonesUsingShaders && IH.skeleton && !IH.skeleton.isUsingTextureForMatrices && -1 === RH.excludedSkinnedMesh.indexOf(IH);
      }
      static Bind(HH, IH, EH, RH, hH) {
        const sH = TH._Configurations[HH];
        if (!sH) return;
        const eH = EH.kh(),
          GH = eH.getEngine();
        if (sH.reverseCulling && GH.setStateCullFaceType(eH._mirroredCameraPosition ? hH.cullBackFaces : !hH.cullBackFaces), (void 0 !== sH.defines.PREPASS_VELOCITY_INDEX || void 0 !== sH.defines.PREPASS_VELOCITY_LINEAR_INDEX) && (sH.previousWorldMatrices[EH.uniqueId] || (sH.previousWorldMatrices[EH.uniqueId] = RH.clone()), sH.previousViewProjection || (sH.previousViewProjection = eH.getTransformMatrix().clone(), sH.currentViewProjection = eH.getTransformMatrix().clone()), sH.currentViewProjection.updateFlag !== eH.getTransformMatrix().updateFlag ? (sH.lastUpdateFrameId = GH.frameId, sH.previousViewProjection.RH(sH.currentViewProjection), sH.currentViewProjection.RH(eH.getTransformMatrix())) : sH.lastUpdateFrameId !== GH.frameId && (sH.lastUpdateFrameId = GH.frameId, sH.previousViewProjection.RH(sH.currentViewProjection)), IH.setMatrix("previousWorld", sH.previousWorldMatrices[EH.uniqueId]), IH.setMatrix("previousViewProjection", sH.previousViewProjection), sH.previousWorldMatrices[EH.uniqueId] = RH.clone(), EH.useBones && EH.computeBonesUsingShaders && EH.skeleton)) {
          const HH = EH.skeleton;
          if (!HH.isUsingTextureForMatrices || -1 === IH.getUniformIndex("boneTextureInfo")) {
            const RH = HH.getTransformMatrices(EH);
            RH && (sH.previousBones[EH.uniqueId] || (sH.previousBones[EH.uniqueId] = RH.slice()), IH.setMatrices("mPreviousBones", sH.previousBones[EH.uniqueId]), sH.previousBones[EH.uniqueId].set(RH));
          }
        }
      }
    }
    TH.GeometryTextureDescriptions = [{
      type: 0,
      name: "IrradianceLegacy",
      clearType: 0,
      define: "PREPASS_IRRADIANCE_LEGACY",
      defineIndex: "PREPASS_IRRADIANCE_LEGACY_INDEX"
    }, {
      type: 1,
      name: "WorldPosition",
      clearType: 0,
      define: "PREPASS_POSITION",
      defineIndex: "PREPASS_POSITION_INDEX"
    }, {
      type: 2,
      name: "Velocity",
      clearType: 0,
      define: "PREPASS_VELOCITY",
      defineIndex: "PREPASS_VELOCITY_INDEX"
    }, {
      type: 3,
      name: "Reflectivity",
      clearType: 0,
      define: "PREPASS_REFLECTIVITY",
      defineIndex: "PREPASS_REFLECTIVITY_INDEX"
    }, {
      type: 5,
      name: "ViewDepth",
      clearType: 2,
      define: "PREPASS_DEPTH",
      defineIndex: "PREPASS_DEPTH_INDEX"
    }, {
      type: 6,
      name: "ViewNormal",
      clearType: 0,
      define: "PREPASS_NORMAL",
      defineIndex: "PREPASS_NORMAL_INDEX"
    }, {
      type: 7,
      name: "AlbedoSqrt",
      clearType: 0,
      define: "PREPASS_ALBEDO_SQRT",
      defineIndex: "PREPASS_ALBEDO_SQRT_INDEX"
    }, {
      type: 8,
      name: "WorldNormal",
      clearType: 0,
      define: "PREPASS_WORLD_NORMAL",
      defineIndex: "PREPASS_WORLD_NORMAL_INDEX"
    }, {
      type: 9,
      name: "LocalPosition",
      clearType: 0,
      define: "PREPASS_LOCAL_POSITION",
      defineIndex: "PREPASS_LOCAL_POSITION_INDEX"
    }, {
      type: 10,
      name: "ScreenDepth",
      clearType: 1,
      define: "PREPASS_SCREENSPACE_DEPTH",
      defineIndex: "PREPASS_SCREENSPACE_DEPTH_INDEX"
    }, {
      type: 11,
      name: "LinearVelocity",
      clearType: 0,
      define: "PREPASS_VELOCITY_LINEAR",
      defineIndex: "PREPASS_VELOCITY_LINEAR_INDEX"
    }, {
      type: 12,
      name: "Albedo",
      clearType: 0,
      define: "PREPASS_ALBEDO",
      defineIndex: "PREPASS_ALBEDO_INDEX"
    }, {
      type: 13,
      name: "NormalizedViewDepth",
      clearType: 1,
      define: "PREPASS_NORMALIZED_VIEW_DEPTH",
      defineIndex: "PREPASS_NORMALIZED_VIEW_DEPTH_INDEX"
    }, {
      type: 4,
      name: "Color",
      clearType: 3,
      define: "PREPASS_COLOR",
      defineIndex: "PREPASS_COLOR_INDEX"
    }, {
      type: 14,
      name: "Irradiance",
      clearType: 0,
      define: "PREPASS_IRRADIANCE",
      defineIndex: "PREPASS_IRRADIANCE_INDEX"
    }], TH._Configurations = {};
  },
  22506: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => QH,
      f: () => OH
    });
    var RH = EH(21947),
      hH = EH(21956),
      TH = EH(21896),
      sH = EH(22015);
    const eH = new RegExp("^([gimus]+)!");
    class GH {
      constructor(HH) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = HH, this._scene = HH.kh(), this._engine = this._scene.getEngine();
      }
      _addPlugin(HH) {
        for (let RH = 0; RH < this._plugins.length; ++RH) if (this._plugins[RH].name === HH.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !HH.isCompatible(this._material.shaderLanguage)) throw 'The plugin "'.concat(HH.name, '" can\'t be added to the material "').concat(this._material.name, '" because the plugin is not compatible with the shader language of the material.');
        const IH = HH.getClassName();
        GH._MaterialPluginClassToMainDefine[IH] || (GH._MaterialPluginClassToMainDefine[IH] = "MATERIALPLUGIN_" + ++GH._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (HH, IH) => this._handlePluginEvent(HH, IH), this._plugins.push(HH), this._plugins.sort((HH, IH) => HH.priority - IH.priority), this._codeInjectionPoints = {};
        const EH = {};
        EH[GH._MaterialPluginClassToMainDefine[IH]] = {
          type: "boolean",
          default: !0
        };
        for (const RH of this._plugins) RH.collectDefines(EH), this._collectPointNames("vertex", RH.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", RH.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = EH, !0;
      }
      _activatePlugin(HH) {
        -1 === this._activePlugins.indexOf(HH) && (this._activePlugins.push(HH), this._activePlugins.sort((HH, IH) => HH.priority - IH.priority), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), HH.registerForExtraEvents && (this._activePluginsForExtraEvents.push(HH), this._activePluginsForExtraEvents.sort((HH, IH) => HH.priority - IH.priority), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)));
      }
      getPlugin(HH) {
        for (let IH = 0; IH < this._plugins.length; ++IH) if (this._plugins[IH].name === HH) return this._plugins[IH];
        return null;
      }
      _handlePluginEventIsReadyForSubMesh(HH) {
        let IH = !0;
        for (const EH of this._activePlugins) IH = IH && EH.isReadyForSubMesh(HH.defines, this._scene, this._engine, HH.subMesh);
        HH.isReadyForSubMesh = IH;
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(HH) {
        for (const IH of this._activePlugins) IH.prepareDefinesBeforeAttributes(HH.defines, this._scene, HH.mesh);
      }
      _handlePluginEventPrepareDefines(HH) {
        for (const IH of this._activePlugins) IH.prepareDefines(HH.defines, this._scene, HH.mesh);
      }
      _handlePluginEventHardBindForSubMesh(HH) {
        for (const IH of this._activePluginsForExtraEvents) IH.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, HH.subMesh);
      }
      _handlePluginEventBindForSubMesh(HH) {
        for (const IH of this._activePlugins) IH.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, HH.subMesh);
      }
      _handlePluginEventHasRenderTargetTextures(HH) {
        let IH = !1;
        for (const EH of this._activePluginsForExtraEvents) if (IH = EH.hasRenderTargetTextures(), IH) break;
        HH.hasRenderTargetTextures = IH;
      }
      _handlePluginEventFillRenderTargetTextures(HH) {
        for (const IH of this._activePluginsForExtraEvents) IH.fillRenderTargetTextures(HH.renderTargets);
      }
      _handlePluginEvent(HH, IH) {
        switch (HH) {
          case 512:
            {
              const HH = IH;
              for (const IH of this._activePlugins) IH.getActiveTextures(HH.activeTextures);
              break;
            }
          case 256:
            {
              const HH = IH;
              for (const IH of this._activePlugins) IH.getAnimatables(HH.animatables);
              break;
            }
          case 1024:
            {
              const HH = IH;
              let EH = !1;
              for (const IH of this._activePlugins) if (EH = IH.hasTexture(HH.texture), EH) break;
              HH.hasTexture = EH;
              break;
            }
          case 2:
            {
              const HH = IH;
              for (const IH of this._plugins) IH.dispose(HH.forceDisposeTextures);
              break;
            }
          case 4:
            IH.defineNames = this._defineNamesFromPlugins;
            break;
          case 128:
            {
              const HH = IH;
              for (const IH of this._activePlugins) HH.fallbackRank = IH.addFallbacks(HH.defines, HH.fallbacks, HH.fallbackRank), IH.getAttributes(HH.attributes, this._scene, HH.mesh);
              this._uniformList.length > 0 && HH.uniforms.push(...this._uniformList), this._samplerList.length > 0 && HH.samplers.push(...this._samplerList), this._uboList.length > 0 && HH.uniformBuffersNames.push(...this._uboList), HH.customCode = this._injectCustomCode(HH, HH.customCode);
              break;
            }
          case 8:
            {
              const HH = IH;
              this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
              const RH = 1 === this._material.shaderLanguage;
              for (const IH of this._plugins) {
                const hH = IH.getUniforms(this._material.shaderLanguage);
                if (hH) {
                  if (hH.ubo) for (const IH of hH.ubo) {
                    if (IH.size && IH.type) {
                      var EH;
                      const hH = null !== (EH = IH.arraySize) && void 0 !== EH ? EH : 0;
                      if (HH.ubo.addUniform(IH.name, IH.size, hH), RH) {
                        let HH;
                        switch (IH.type) {
                          case "mat4":
                            HH = "mat4x4f";
                            break;
                          case "float":
                            HH = "f32";
                            break;
                          default:
                            HH = "".concat(IH.type, "f");
                        }
                        this._uboDeclaration += hH > 0 ? "uniform ".concat(IH.name, ": array<").concat(HH, ", ").concat(hH, ">;\n") : "uniform ".concat(IH.name, ": ").concat(HH, ";\n");
                      } else this._uboDeclaration += "".concat(IH.type, " ").concat(IH.name).concat(hH > 0 ? "[".concat(hH, "]") : "", ";\n");
                    }
                    this._uniformList.push(IH.name);
                  }
                  hH.vertex && (this._vertexDeclaration += hH.vertex + "\n"), hH.fragment && (this._fragmentDeclaration += hH.fragment + "\n"), hH.externalUniforms && this._uniformList.push(...hH.externalUniforms);
                }
                IH.getSamplers(this._samplerList), IH.getUniformBuffersNames(this._uboList);
              }
              break;
            }
        }
      }
      _collectPointNames(HH, IH) {
        if (IH) for (const EH in IH) this._codeInjectionPoints[HH] || (this._codeInjectionPoints[HH] = {}), this._codeInjectionPoints[HH][EH] = !0;
      }
      _injectCustomCode(HH, IH) {
        return (EH, RH) => {
          var hH;
          IH && (RH = IH(EH, RH)), this._uboDeclaration && (RH = RH.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (RH = RH.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (RH = RH.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const GH = null === (hH = this._codeInjectionPoints) || void 0 === hH ? void 0 : hH[EH];
          if (!GH) return RH;
          let VH = null;
          for (let IH in GH) {
            let hH = "";
            for (const RH of this._activePlugins) {
              var YH;
              const eH = this._material.shaderLanguage;
              let GH = null === (YH = RH.getCustomCode(EH, eH)) || void 0 === YH ? void 0 : YH[IH];
              GH && (RH.resolveIncludes && (null === VH && (VH = {
                defines: [],
                indexParameters: HH.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: sH.d.GetShadersRepository(eH),
                includesShadersStore: sH.d.GetIncludesShadersStore(eH),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                xO: this._engine.xO,
                processCodeAfterIncludes: void 0
              }), VH.isFragment = "fragment" === EH, (0, TH.e)(GH, VH, HH => GH = HH)), hH += GH + "\n");
            }
            if (hH.length > 0) if ("!" === IH.charAt(0)) {
              IH = IH.substring(1);
              let HH = "g";
              if ("!" === IH.charAt(0)) HH = "", IH = IH.substring(1);else {
                const EH = eH.exec(IH);
                EH && EH.length >= 2 && (HH = EH[1], IH = IH.substring(HH.length + 1));
              }
              HH.indexOf("g") < 0 && (HH += "g");
              const EH = new RegExp(IH, HH);
              let TH = EH.exec(RH);
              for (; null !== TH;) {
                const {
                    index: HH
                  } = TH,
                  IH = AH(hH, TH);
                RH = RH.substring(0, HH) + IH + RH.substring(HH + TH[0].length), EH.lastIndex = HH + IH.length, TH = EH.exec(RH);
              }
            } else {
              const HH = "#define " + IH;
              RH = RH.replace(HH, "\n" + hH + "\n" + HH);
            }
          }
          return RH;
        };
      }
    }
    GH._MaterialPluginClassToMainDefine = {}, GH._MaterialPluginCounter = 0;
    function AH(HH, IH) {
      return HH.replace(/\$(\d+)/g, (HH, EH) => {
        const RH = Number(EH);
        return RH < IH.length ? IH[RH] : "";
      });
    }
    var VH = EH(21972),
      YH = EH(21808);
    let QH = (() => {
        var HH;
        let IH,
          EH,
          TH,
          sH,
          eH = [],
          AH = [],
          YH = [],
          QH = [],
          JH = [],
          OH = [],
          rH = [],
          FH = [];
        return HH = class {
          isCompatible(HH) {
            return 0 === HH;
          }
          _enable(HH) {
            HH && this._pluginManager._activatePlugin(this);
          }
          constructor(HH, IH, EH, hH) {
            let TH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              sH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              VH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, RH.j)(this, eH, void 0), this.priority = ((0, RH.j)(this, AH), (0, RH.j)(this, YH, 500)), this.resolveIncludes = ((0, RH.j)(this, QH), (0, RH.j)(this, JH, !1)), this.registerForExtraEvents = ((0, RH.j)(this, OH), (0, RH.j)(this, rH, !1)), this.doNotSerialize = ((0, RH.j)(this, FH), !1), this._material = HH, this.name = IH, this.priority = EH, this.resolveIncludes = VH, HH.pluginManager || (HH.pluginManager = new GH(HH), HH.AM.add(() => {
              HH.pluginManager = void 0;
            })), this._pluginDefineNames = hH, this._pluginManager = HH.pluginManager, TH && this._pluginManager._addPlugin(this), sH && this._enable(!0), this.markAllDefinesAsDirty = HH._dirtyCallbacks[127];
          }
          getClassName() {
            return "MaterialPluginBase";
          }
          isReadyForSubMesh(HH, IH, EH, RH) {
            return !0;
          }
          hardBindForSubMesh(HH, IH, EH, RH) {}
          bindForSubMesh(HH, IH, EH, RH) {}
          dispose(HH) {}
          getCustomCode(HH) {
            return null;
          }
          collectDefines(HH) {
            if (this._pluginDefineNames) for (const IH of Object.keys(this._pluginDefineNames)) {
              if ("_" === IH[0]) continue;
              const EH = typeof this._pluginDefineNames[IH];
              HH[IH] = {
                type: "number" === EH ? "number" : "string" === EH ? "string" : "boolean" === EH ? "boolean" : "object",
                default: this._pluginDefineNames[IH]
              };
            }
          }
          prepareDefinesBeforeAttributes(HH, IH, EH) {}
          prepareDefines(HH, IH, EH) {}
          hasTexture(HH) {
            return !1;
          }
          hasRenderTargetTextures() {
            return !1;
          }
          fillRenderTargetTextures(HH) {}
          getActiveTextures(HH) {}
          getAnimatables(HH) {}
          addFallbacks(HH, IH, EH) {
            return EH;
          }
          getSamplers(HH) {}
          getAttributes(HH, IH, EH) {}
          getUniformBuffersNames(HH) {}
          getUniforms() {
            return {};
          }
          copyTo(HH) {
            VH.c.Clone(() => HH, this);
          }
          serialize() {
            return VH.c.Serialize(this);
          }
          parse(HH, IH, EH) {
            VH.c.Parse(() => this, HH, IH, EH);
          }
        }, (() => {
          const GH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IH = [(0, hH.K)()], EH = [(0, hH.K)()], TH = [(0, hH.K)()], sH = [(0, hH.K)()], (0, RH.i)(null, null, IH, {
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
            metadata: GH
          }, eH, AH), (0, RH.i)(null, null, EH, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: HH => "priority" in HH,
              get: HH => HH.priority,
              set: (HH, IH) => {
                HH.priority = IH;
              }
            },
            metadata: GH
          }, YH, QH), (0, RH.i)(null, null, TH, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: HH => "resolveIncludes" in HH,
              get: HH => HH.resolveIncludes,
              set: (HH, IH) => {
                HH.resolveIncludes = IH;
              }
            },
            metadata: GH
          }, JH, OH), (0, RH.i)(null, null, sH, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: HH => "registerForExtraEvents" in HH,
              get: HH => HH.registerForExtraEvents,
              set: (HH, IH) => {
                HH.registerForExtraEvents = IH;
              }
            },
            metadata: GH
          }, rH, FH), GH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: GH
          });
        })(), HH;
      })(),
      JH = !1;
    function OH() {
      JH || (JH = !0, (0, YH.d)("BABYLON.MaterialPluginBase", QH));
    }
  },
  22483: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => RH
    });
    class RH {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {};
      }
      static AddUniforms(HH) {
        HH.push("previousWorld", "previousViewProjection", "mPreviousBones");
      }
      static AddSamplers(HH) {}
      bindForSubMesh(HH, IH, EH, RH, hH) {
        if (IH.prePassRenderer && IH.prePassRenderer.enabled && IH.prePassRenderer.currentRTisSceneRT && (-1 !== IH.prePassRenderer.getIndex(2) || -1 !== IH.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[EH.uniqueId] || (this.previousWorldMatrices[EH.uniqueId] = RH.clone()), this.previousViewProjection || (this.previousViewProjection = IH.getTransformMatrix().clone(), this.currentViewProjection = IH.getTransformMatrix().clone());
          const hH = IH.getEngine();
          this.currentViewProjection.updateFlag !== IH.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = hH.frameId, this.previousViewProjection.RH(this.currentViewProjection), this.currentViewProjection.RH(IH.getTransformMatrix())) : this._lastUpdateFrameId !== hH.frameId && (this._lastUpdateFrameId = hH.frameId, this.previousViewProjection.RH(this.currentViewProjection)), HH.setMatrix("previousWorld", this.previousWorldMatrices[EH.uniqueId]), HH.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[EH.uniqueId] = RH.clone();
        }
      }
    }
  },
  22541: (HH, IH, EH) => {
    function RH(HH) {
      return class extends HH {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.SCENE_MRT_COUNT = 0;
        }
      };
    }
    EH.d(IH, {
      d: () => RH
    });
  },
  22472: (HH, IH, EH) => {
    EH.d(IH, {
      Gh: () => RH.e
    });
    var RH = EH(22480);
    (0, RH.b)();
  },
  22480: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => WH,
      e: () => cH
    });
    var RH = EH(21947),
      hH = EH(21956),
      TH = EH(21968),
      sH = EH(22302),
      eH = EH(21817),
      GH = EH(22128),
      AH = EH(22483),
      VH = EH(22485),
      YH = EH(22304),
      QH = EH(22248),
      JH = EH(22488),
      OH = EH(22495),
      rH = EH(22276),
      FH = EH(22501),
      MH = EH(22503),
      NH = EH(22259),
      iI = EH(22515),
      DH = EH(22250),
      PH = EH(21972),
      XH = EH(22523),
      mI = EH(22532),
      ZH = EH(22541),
      qH = EH(22546),
      LH = EH(21808),
      gH = EH(21856);
    const yH = {
      effect: null,
      subMesh: null
    };
    class oH extends (0, ZH.d)((0, mI.d)(JH.b)) {}
    class kI extends (0, VH.g)(oH) {
      constructor(HH) {
        super(HH), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild();
      }
    }
    class CH extends (0, qH.c)(OH.e) {}
    let cH = (() => {
        var HH, IH, VH, JH, OH, mI, ZH, qH, LH, gH, oH, cH, UH, WH, BH, fH, aH, nH, pH, dH, uH, lH, KH, wH, zH, tH, jI, vH, bH, SH, xH, HI, II;
        let EI,
          RI,
          hI,
          TI,
          sI,
          eI,
          GI,
          AI,
          VI,
          YI,
          QI,
          JI,
          OI,
          rI,
          FI,
          MI,
          NI,
          iE,
          DI,
          PI,
          XI,
          mE,
          ZI,
          qI,
          LI,
          gI,
          yI,
          oI,
          kE,
          CI,
          cI,
          UI,
          WI,
          BI,
          fI,
          aI,
          nI,
          pI,
          dI,
          uI,
          lI,
          KI,
          wI,
          zI,
          tI,
          jE,
          vI,
          bI,
          SI,
          xI,
          HE,
          IE,
          EE,
          RE,
          hE,
          TE,
          sE,
          eE,
          GE,
          AE,
          VE,
          YE,
          QE,
          JE,
          OE,
          rE,
          FE,
          ME,
          NE,
          iR,
          DE,
          PE,
          XE,
          mR = CH,
          ZE = [],
          qE = [],
          LE = [],
          gE = [],
          yE = [],
          oE = [],
          kR = [],
          CE = [],
          cE = [],
          UE = [],
          WE = [],
          BE = [],
          fE = [],
          aE = [],
          nE = [],
          pE = [],
          dE = [],
          uE = [],
          lE = [],
          KE = [],
          wE = [],
          zE = [],
          tE = [],
          jR = [],
          vE = [],
          bE = [],
          SE = [],
          xE = [],
          HR = [],
          IR = [],
          ER = [],
          RR = [],
          hR = [],
          TR = [],
          sR = [],
          eR = [],
          GR = [],
          AR = [],
          VR = [],
          YR = [],
          QR = [],
          JR = [],
          OR = [],
          rR = [],
          FR = [],
          MR = [],
          NR = [],
          ih = [],
          DR = [],
          PR = [],
          XR = [],
          mh = [],
          ZR = [],
          qR = [],
          LR = [],
          gR = [],
          yR = [],
          oR = [],
          kh = [],
          CR = [],
          cR = [],
          UR = [],
          WR = [],
          BR = [],
          fR = [],
          aR = [],
          nR = [],
          pR = [],
          dR = [],
          uR = [],
          lR = [],
          KR = [],
          wR = [],
          zR = [],
          tR = [],
          jh = [],
          vR = [],
          bR = [],
          SR = [],
          xR = [],
          Hh = [],
          Ih = [],
          Eh = [],
          Rh = [],
          hh = [],
          Th = [],
          sh = [],
          eh = [],
          Gh = [],
          Ah = [],
          Vh = [],
          Yh = [],
          Qh = [],
          Jh = [],
          Oh = [],
          rh = [],
          Fh = [],
          Mh = [],
          Nh = [],
          iT = [],
          Dh = [],
          Ph = [],
          Xh = [],
          mT = [],
          Zh = [],
          qh = [],
          Lh = [],
          gh = [],
          yh = [],
          oh = [],
          kT = [],
          Ch = [],
          ch = [],
          Uh = [],
          Wh = [],
          Bh = [],
          fh = [],
          ah = [],
          nh = [],
          ph = [],
          dh = [],
          uh = [],
          lh = [],
          Kh = [],
          wh = [],
          zh = [],
          th = [],
          jT = [],
          vh = [],
          bh = [],
          Sh = [],
          xh = [],
          HT = [],
          IT = [],
          ET = [],
          RT = [],
          hT = [],
          TT = [],
          sT = [],
          eT = [],
          GT = [],
          AT = [],
          VT = [],
          YT = [],
          QT = [],
          JT = [];
        return HH = class extends mR {
          get diffuseTexture() {
            return (0, RH.d)(this, IH, "f");
          }
          set diffuseTexture(HH) {
            (0, RH.g)(this, IH, HH, "f");
          }
          get ambientTexture() {
            return (0, RH.d)(this, VH, "f");
          }
          set ambientTexture(HH) {
            (0, RH.g)(this, VH, HH, "f");
          }
          get opacityTexture() {
            return (0, RH.d)(this, JH, "f");
          }
          set opacityTexture(HH) {
            (0, RH.g)(this, JH, HH, "f");
          }
          get reflectionTexture() {
            return (0, RH.d)(this, OH, "f");
          }
          set reflectionTexture(HH) {
            (0, RH.g)(this, OH, HH, "f");
          }
          get emissiveTexture() {
            return (0, RH.d)(this, mI, "f");
          }
          set emissiveTexture(HH) {
            (0, RH.g)(this, mI, HH, "f");
          }
          get specularTexture() {
            return (0, RH.d)(this, ZH, "f");
          }
          set specularTexture(HH) {
            (0, RH.g)(this, ZH, HH, "f");
          }
          get bumpTexture() {
            return (0, RH.d)(this, qH, "f");
          }
          set bumpTexture(HH) {
            (0, RH.g)(this, qH, HH, "f");
          }
          get lightmapTexture() {
            return (0, RH.d)(this, LH, "f");
          }
          set lightmapTexture(HH) {
            (0, RH.g)(this, LH, HH, "f");
          }
          get refractionTexture() {
            return (0, RH.d)(this, gH, "f");
          }
          set refractionTexture(HH) {
            (0, RH.g)(this, gH, HH, "f");
          }
          get useAlphaFromDiffuseTexture() {
            return (0, RH.d)(this, oH, "f");
          }
          set useAlphaFromDiffuseTexture(HH) {
            (0, RH.g)(this, oH, HH, "f");
          }
          get useEmissiveAsIllumination() {
            return (0, RH.d)(this, cH, "f");
          }
          set useEmissiveAsIllumination(HH) {
            (0, RH.g)(this, cH, HH, "f");
          }
          get linkEmissiveWithDiffuse() {
            return (0, RH.d)(this, UH, "f");
          }
          set linkEmissiveWithDiffuse(HH) {
            (0, RH.g)(this, UH, HH, "f");
          }
          get useSpecularOverAlpha() {
            return (0, RH.d)(this, WH, "f");
          }
          set useSpecularOverAlpha(HH) {
            (0, RH.g)(this, WH, HH, "f");
          }
          get useReflectionOverAlpha() {
            return (0, RH.d)(this, BH, "f");
          }
          set useReflectionOverAlpha(HH) {
            (0, RH.g)(this, BH, HH, "f");
          }
          get disableLighting() {
            return (0, RH.d)(this, fH, "f");
          }
          set disableLighting(HH) {
            (0, RH.g)(this, fH, HH, "f");
          }
          get useObjectSpaceNormalMap() {
            return (0, RH.d)(this, aH, "f");
          }
          set useObjectSpaceNormalMap(HH) {
            (0, RH.g)(this, aH, HH, "f");
          }
          get useParallax() {
            return (0, RH.d)(this, nH, "f");
          }
          set useParallax(HH) {
            (0, RH.g)(this, nH, HH, "f");
          }
          get useParallaxOcclusion() {
            return (0, RH.d)(this, pH, "f");
          }
          set useParallaxOcclusion(HH) {
            (0, RH.g)(this, pH, HH, "f");
          }
          get roughness() {
            return (0, RH.d)(this, dH, "f");
          }
          set roughness(HH) {
            (0, RH.g)(this, dH, HH, "f");
          }
          get useLightmapAsShadowmap() {
            return (0, RH.d)(this, uH, "f");
          }
          set useLightmapAsShadowmap(HH) {
            (0, RH.g)(this, uH, HH, "f");
          }
          get diffuseFresnelParameters() {
            return (0, RH.d)(this, lH, "f");
          }
          set diffuseFresnelParameters(HH) {
            (0, RH.g)(this, lH, HH, "f");
          }
          get opacityFresnelParameters() {
            return (0, RH.d)(this, KH, "f");
          }
          set opacityFresnelParameters(HH) {
            (0, RH.g)(this, KH, HH, "f");
          }
          get reflectionFresnelParameters() {
            return (0, RH.d)(this, wH, "f");
          }
          set reflectionFresnelParameters(HH) {
            (0, RH.g)(this, wH, HH, "f");
          }
          get refractionFresnelParameters() {
            return (0, RH.d)(this, zH, "f");
          }
          set refractionFresnelParameters(HH) {
            (0, RH.g)(this, zH, HH, "f");
          }
          get emissiveFresnelParameters() {
            return (0, RH.d)(this, tH, "f");
          }
          set emissiveFresnelParameters(HH) {
            (0, RH.g)(this, tH, HH, "f");
          }
          get useReflectionFresnelFromSpecular() {
            return (0, RH.d)(this, jI, "f");
          }
          set useReflectionFresnelFromSpecular(HH) {
            (0, RH.g)(this, jI, HH, "f");
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, RH.d)(this, vH, "f");
          }
          set useGlossinessFromSpecularMapAlpha(HH) {
            (0, RH.g)(this, vH, HH, "f");
          }
          get maxSimultaneousLights() {
            return (0, RH.d)(this, bH, "f");
          }
          set maxSimultaneousLights(HH) {
            (0, RH.g)(this, bH, HH, "f");
          }
          get invertNormalMapX() {
            return (0, RH.d)(this, SH, "f");
          }
          set invertNormalMapX(HH) {
            (0, RH.g)(this, SH, HH, "f");
          }
          get invertNormalMapY() {
            return (0, RH.d)(this, xH, "f");
          }
          set invertNormalMapY(HH) {
            (0, RH.g)(this, xH, HH, "f");
          }
          get twoSidedLighting() {
            return (0, RH.d)(this, HI, "f");
          }
          set twoSidedLighting(HH) {
            (0, RH.g)(this, HI, HH, "f");
          }
          get applyDecalMapAfterDetailMap() {
            return (0, RH.d)(this, II, "f");
          }
          set applyDecalMapAfterDetailMap(HH) {
            (0, RH.g)(this, II, HH, "f");
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite;
          }
          get canRenderToMRT() {
            return !0;
          }
          constructor(EH, hH) {
            super(EH, hH, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || HH.ForceGLSL), this._diffuseTexture = (0, RH.j)(this, ZE, null), IH.set(this, ((0, RH.j)(this, qE), (0, RH.j)(this, LE, void 0))), this._ambientTexture = ((0, RH.j)(this, gE), (0, RH.j)(this, yE, null)), VH.set(this, ((0, RH.j)(this, oE), (0, RH.j)(this, kR, void 0))), this._opacityTexture = ((0, RH.j)(this, CE), (0, RH.j)(this, cE, null)), JH.set(this, ((0, RH.j)(this, UE), (0, RH.j)(this, WE, void 0))), this._reflectionTexture = ((0, RH.j)(this, BE), (0, RH.j)(this, fE, null)), OH.set(this, ((0, RH.j)(this, aE), (0, RH.j)(this, nE, void 0))), this._emissiveTexture = ((0, RH.j)(this, pE), (0, RH.j)(this, dE, null)), mI.set(this, ((0, RH.j)(this, uE), (0, RH.j)(this, lE, void 0))), this._specularTexture = ((0, RH.j)(this, KE), (0, RH.j)(this, wE, null)), ZH.set(this, ((0, RH.j)(this, zE), (0, RH.j)(this, tE, void 0))), this._bumpTexture = ((0, RH.j)(this, jR), (0, RH.j)(this, vE, null)), qH.set(this, ((0, RH.j)(this, bE), (0, RH.j)(this, SE, void 0))), this._lightmapTexture = ((0, RH.j)(this, xE), (0, RH.j)(this, HR, null)), LH.set(this, ((0, RH.j)(this, IR), (0, RH.j)(this, ER, void 0))), this._refractionTexture = ((0, RH.j)(this, RR), (0, RH.j)(this, hR, null)), gH.set(this, ((0, RH.j)(this, TR), (0, RH.j)(this, sR, void 0))), this.ambientColor = ((0, RH.j)(this, eR), (0, RH.j)(this, GR, new eH.b(0, 0, 0))), this.diffuseColor = ((0, RH.j)(this, AR), (0, RH.j)(this, VR, new eH.b(1, 1, 1))), this.specularColor = ((0, RH.j)(this, YR), (0, RH.j)(this, QR, new eH.b(1, 1, 1))), this.emissiveColor = ((0, RH.j)(this, JR), (0, RH.j)(this, OR, new eH.b(0, 0, 0))), this.specularPower = ((0, RH.j)(this, rR), (0, RH.j)(this, FR, 64)), this._useAlphaFromDiffuseTexture = ((0, RH.j)(this, MR), (0, RH.j)(this, NR, !1)), oH.set(this, ((0, RH.j)(this, ih), (0, RH.j)(this, DR, void 0))), this._useEmissiveAsIllumination = ((0, RH.j)(this, PR), (0, RH.j)(this, XR, !1)), cH.set(this, ((0, RH.j)(this, mh), (0, RH.j)(this, ZR, void 0))), this._linkEmissiveWithDiffuse = ((0, RH.j)(this, qR), (0, RH.j)(this, LR, !1)), UH.set(this, ((0, RH.j)(this, gR), (0, RH.j)(this, yR, void 0))), this._useSpecularOverAlpha = ((0, RH.j)(this, oR), (0, RH.j)(this, kh, !1)), WH.set(this, ((0, RH.j)(this, CR), (0, RH.j)(this, cR, void 0))), this._useReflectionOverAlpha = ((0, RH.j)(this, UR), (0, RH.j)(this, WR, !1)), BH.set(this, ((0, RH.j)(this, BR), (0, RH.j)(this, fR, void 0))), this._disableLighting = ((0, RH.j)(this, aR), (0, RH.j)(this, nR, !1)), fH.set(this, ((0, RH.j)(this, pR), (0, RH.j)(this, dR, void 0))), this._useObjectSpaceNormalMap = ((0, RH.j)(this, uR), (0, RH.j)(this, lR, !1)), aH.set(this, ((0, RH.j)(this, KR), (0, RH.j)(this, wR, void 0))), this._useParallax = ((0, RH.j)(this, zR), (0, RH.j)(this, tR, !1)), nH.set(this, ((0, RH.j)(this, jh), (0, RH.j)(this, vR, void 0))), this._useParallaxOcclusion = ((0, RH.j)(this, bR), (0, RH.j)(this, SR, !1)), pH.set(this, ((0, RH.j)(this, xR), (0, RH.j)(this, Hh, void 0))), this.parallaxScaleBias = ((0, RH.j)(this, Ih), (0, RH.j)(this, Eh, .05)), this._roughness = ((0, RH.j)(this, Rh), (0, RH.j)(this, hh, 0)), dH.set(this, ((0, RH.j)(this, Th), (0, RH.j)(this, sh, void 0))), this.indexOfRefraction = ((0, RH.j)(this, eh), (0, RH.j)(this, Gh, .98)), this.invertRefractionY = ((0, RH.j)(this, Ah), (0, RH.j)(this, Vh, !0)), this.alphaCutOff = ((0, RH.j)(this, Yh), (0, RH.j)(this, Qh, .4)), this._useLightmapAsShadowmap = ((0, RH.j)(this, Jh), (0, RH.j)(this, Oh, !1)), uH.set(this, ((0, RH.j)(this, rh), (0, RH.j)(this, Fh, void 0))), this._diffuseFresnelParameters = ((0, RH.j)(this, Mh), (0, RH.j)(this, Nh, void 0)), lH.set(this, ((0, RH.j)(this, iT), (0, RH.j)(this, Dh, void 0))), this._opacityFresnelParameters = ((0, RH.j)(this, Ph), (0, RH.j)(this, Xh, void 0)), KH.set(this, ((0, RH.j)(this, mT), (0, RH.j)(this, Zh, void 0))), this._reflectionFresnelParameters = ((0, RH.j)(this, qh), (0, RH.j)(this, Lh, void 0)), wH.set(this, ((0, RH.j)(this, gh), (0, RH.j)(this, yh, void 0))), this._refractionFresnelParameters = ((0, RH.j)(this, oh), (0, RH.j)(this, kT, void 0)), zH.set(this, ((0, RH.j)(this, Ch), (0, RH.j)(this, ch, void 0))), this._emissiveFresnelParameters = ((0, RH.j)(this, Uh), (0, RH.j)(this, Wh, void 0)), tH.set(this, ((0, RH.j)(this, Bh), (0, RH.j)(this, fh, void 0))), this._useReflectionFresnelFromSpecular = ((0, RH.j)(this, ah), (0, RH.j)(this, nh, !1)), jI.set(this, ((0, RH.j)(this, ph), (0, RH.j)(this, dh, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, RH.j)(this, uh), (0, RH.j)(this, lh, !1)), vH.set(this, ((0, RH.j)(this, Kh), (0, RH.j)(this, wh, void 0))), this._maxSimultaneousLights = ((0, RH.j)(this, zh), (0, RH.j)(this, th, 4)), bH.set(this, ((0, RH.j)(this, jT), (0, RH.j)(this, vh, void 0))), this._invertNormalMapX = ((0, RH.j)(this, bh), (0, RH.j)(this, Sh, !1)), SH.set(this, ((0, RH.j)(this, xh), (0, RH.j)(this, HT, void 0))), this._invertNormalMapY = ((0, RH.j)(this, IT), (0, RH.j)(this, ET, !1)), xH.set(this, ((0, RH.j)(this, RT), (0, RH.j)(this, hT, void 0))), this._twoSidedLighting = ((0, RH.j)(this, TT), (0, RH.j)(this, sT, !1)), HI.set(this, ((0, RH.j)(this, eT), (0, RH.j)(this, GT, void 0))), this._applyDecalMapAfterDetailMap = ((0, RH.j)(this, AT), (0, RH.j)(this, VT, !1)), II.set(this, ((0, RH.j)(this, YT), (0, RH.j)(this, QT, void 0))), this._shadersLoaded = ((0, RH.j)(this, JT), !1), this._vertexPullingMetadata = null, this._renderTargets = new TH.e(16), this._globalAmbientColor = new eH.b(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new MH.c(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new AH.b(), this.getRenderTargetTextures = () => (this._renderTargets.reset(), HH.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), HH.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets);
          }
          get hasRenderTargetTextures() {
            return !!(HH.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || !!(HH.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures;
          }
          getClassName() {
            return "Gh";
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled);
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === QH.b.MATERIAL_ALPHATEST);
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.xY && this._useAlphaFromDiffuseTexture && this._transparencyMode !== QH.b.MATERIAL_OPAQUE;
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.xY || null != this._opacityTexture;
          }
          getAlphaTestTexture() {
            return this._diffuseTexture;
          }
          isReadyForSubMesh(IH, RH) {
            let hH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const TH = RH._drawWrapper;
            if (TH.effect && this.isFrozen && TH._wasPreviouslyReady && TH._wasPreviouslyUsingInstances === hH) return !0;
            RH.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), RH.materialDefines = new kI(this._eventInfo.defineNames));
            const sH = this.kh(),
              eH = RH.materialDefines;
            if (this._isReadyForSubMesh(RH)) return !0;
            const VH = sH.getEngine();
            if (eH._needNormals = (0, DH.W)(sH, IH, eH, !0, this._maxSimultaneousLights, this._disableLighting), !(0, DH.b)(sH, IH, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, DH.bb)(sH, eH);
            const QH = this.needAlphaBlendingForMesh(IH) && this.kh().useOrderIndependentTransparency;
            if ((0, DH.gb)(sH, eH, this.canRenderToMRT && !QH), (0, DH.fb)(sH, eH, QH), XH.c.PrepareDefines(VH.currentRenderPassId, IH, eH), eH._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, eH._needUVs = !1;
              for (let HH = 1; HH <= 6; ++HH) eH["MAINUV" + HH] = !1;
              if (sH.texturesEnabled) {
                if (eH.DIFFUSEDIRECTUV = 0, eH.BUMPDIRECTUV = 0, eH.AMBIENTDIRECTUV = 0, eH.OPACITYDIRECTUV = 0, eH.EMISSIVEDIRECTUV = 0, eH.SPECULARDIRECTUV = 0, eH.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && HH.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, DH.X)(this._diffuseTexture, eH, "DIFFUSE");
                } else eH.DIFFUSE = !1;
                if (this._ambientTexture && HH.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, DH.X)(this._ambientTexture, eH, "AMBIENT");
                } else eH.AMBIENT = !1;
                if (this._opacityTexture && HH.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, DH.X)(this._opacityTexture, eH, "OPACITY"), eH.OPACITYRGB = this._opacityTexture.getAlphaFromRGB;
                } else eH.OPACITY = !1;
                if (this._reflectionTexture && HH.ReflectionTextureEnabled ? (eH.ROUGHNESS = this._roughness > 0, eH.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (eH.ROUGHNESS = !1, eH.REFLECTIONOVERALPHA = !1), !(0, DH.U)(sH, this._reflectionTexture, eH)) return !1;
                if (this._emissiveTexture && HH.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, DH.X)(this._emissiveTexture, eH, "EMISSIVE");
                } else eH.EMISSIVE = !1;
                if (this._lightmapTexture && HH.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, DH.X)(this._lightmapTexture, eH, "LIGHTMAP"), eH.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, eH.RGBDLIGHTMAP = this._lightmapTexture.isRGBD;
                } else eH.LIGHTMAP = !1;
                if (this._specularTexture && HH.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, DH.X)(this._specularTexture, eH, "SPECULAR"), eH.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha;
                } else eH.SPECULAR = !1;
                if (sH.getEngine().getCaps().standardDerivatives && this._bumpTexture && HH.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, DH.X)(this._bumpTexture, eH, "BUMP"), eH.PARALLAX = this._useParallax, eH.PARALLAX_RHS = sH.useRightHandedSystem, eH.PARALLAXOCCLUSION = this._useParallaxOcclusion, eH.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap;
                } else eH.BUMP = !1, eH.PARALLAX = !1, eH.PARALLAX_RHS = !1, eH.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && HH.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  eH._needUVs = !0, eH.REFRACTION = !0, eH.REFRACTIONMAP_3D = this._refractionTexture.isCube, eH.RGBDREFRACTION = this._refractionTexture.isRGBD, eH.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize;
                } else eH.REFRACTION = !1;
                eH.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting;
              } else eH.DIFFUSE = !1, eH.AMBIENT = !1, eH.OPACITY = !1, eH.REFLECTION = !1, eH.EMISSIVE = !1, eH.LIGHTMAP = !1, eH.BUMP = !1, eH.REFRACTION = !1;
              eH.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), eH.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, eH.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, eH.SPECULAROVERALPHA = this._useSpecularOverAlpha, eH.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, eH.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.SY, eH.ALPHABLEND = null === this.SY || this.needAlphaBlendingForMesh(IH), eH.TEXTURE_REPETITION_MODE = VH.version > 1 || VH.isWebGPU ? this.textureRepetitionMode : 0;
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = eH, this._eventInfo.subMesh = RH, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (eH._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(eH), eH.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, eH.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace;
            }
            if (eH._areFresnelDirty && (HH.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (eH.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, eH.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, eH.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, eH.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, eH.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, eH.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, eH._needNormals = !0, eH.FRESNEL = !0) : eH.FRESNEL = !1), eH.AREALIGHTUSED || eH.CLUSTLIGHT_BATCH) for (let HH = 0; HH < IH.lightSources.length; HH++) if (!IH.lightSources[HH]._isReady()) return !1;
            (0, DH.$)(IH, sH, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(IH), eH, this._applyDecalMapAfterDetailMap, this._useVertexPulling, RH.getRenderingMesh(), this._isVertexOutputInvariant), (0, DH.R)(sH, VH, this, eH, hH, null, RH.getRenderingMesh().hasThinInstances), this._eventInfo.defines = eH, this._eventInfo.mesh = IH, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, DH.Q)(IH, eH, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let JH = !1;
            if (eH.isDirty) {
              const HH = eH._areLightsDisposed;
              eH.markAsProcessed();
              const hH = new FH.d();
              eH.REFLECTION && hH.addFallback(0, "REFLECTION"), eH.SPECULAR && hH.addFallback(0, "SPECULAR"), eH.BUMP && hH.addFallback(0, "BUMP"), eH.PARALLAX && hH.addFallback(1, "PARALLAX"), eH.PARALLAX_RHS && hH.addFallback(1, "PARALLAX_RHS"), eH.PARALLAXOCCLUSION && hH.addFallback(0, "PARALLAXOCCLUSION"), eH.SPECULAROVERALPHA && hH.addFallback(0, "SPECULAROVERALPHA"), eH.FOG && hH.addFallback(1, "FOG"), eH.POINTSIZE && hH.addFallback(0, "POINTSIZE"), eH.LOGARITHMICDEPTH && hH.addFallback(0, "LOGARITHMICDEPTH"), (0, DH.D)(eH, hH, this._maxSimultaneousLights), eH.SPECULARTERM && hH.addFallback(0, "SPECULARTERM"), eH.DIFFUSEFRESNEL && hH.addFallback(1, "DIFFUSEFRESNEL"), eH.OPACITYFRESNEL && hH.addFallback(2, "OPACITYFRESNEL"), eH.REFLECTIONFRESNEL && hH.addFallback(3, "REFLECTIONFRESNEL"), eH.EMISSIVEFRESNEL && hH.addFallback(4, "EMISSIVEFRESNEL"), eH.FRESNEL && hH.addFallback(4, "FRESNEL"), eH.MULTIVIEW && hH.addFallback(0, "MULTIVIEW");
              const TH = [GH.t.PositionKind];
              eH.NORMAL && TH.push(GH.t.NormalKind), eH.TANGENT && TH.push(GH.t.TangentKind);
              for (let IH = 1; IH <= 6; ++IH) eH["UV" + IH] && TH.push("uv".concat(1 === IH ? "" : IH));
              eH.VERTEXCOLOR && TH.push(GH.t.ColorKind), (0, DH.I)(TH, IH, eH, hH), (0, DH.J)(TH, eH), (0, DH.L)(TH, IH, eH), (0, DH.E)(TH, IH, eH);
              let QH = "default";
              const OH = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                rH = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, DH.lb)(OH, rH, !1);
              const MH = ["Material", "Scene", "Mesh"],
                PH = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: eH.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = hH, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = eH, this._eventInfo.uniforms = OH, this._eventInfo.attributes = TH, this._eventInfo.samplers = rH, this._eventInfo.uniformBuffersNames = MH, this._eventInfo.customCode = void 0, this._eventInfo.mesh = IH, this._eventInfo.indexParameters = PH, this._callbackPluginEventGeneric(128, this._eventInfo), XH.c.AddUniformsAndSamplers(OH, rH), AH.b.AddUniforms(OH), AH.b.AddSamplers(rH), YH.b && (YH.b.PrepareUniforms(OH, eH), YH.b.PrepareSamplers(rH, eH)), (0, DH.pb)({
                uniformsNames: OH,
                uniformBuffersNames: MH,
                samplers: rH,
                defines: eH,
                maxSimultaneousLights: this._maxSimultaneousLights,
                shaderLanguage: this._shaderLanguage
              }), (0, NH.d)(OH), this._useVertexPulling) {
                const HH = RH.getRenderingMesh(),
                  IH = null === HH || void 0 === HH ? void 0 : HH.KN;
                IH && (this._vertexPullingMetadata = (0, iI.e)(IH), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach((HH, IH) => {
                  OH.push("vp_".concat(IH, "_info"));
                }));
              } else this._vertexPullingMetadata = null;
              const mI = {};
              this.customShaderNameResolve && (QH = this.customShaderNameResolve(QH, OH, MH, rH, eH, TH, mI));
              const ZH = eH.toString(),
                qH = RH.effect,
                LH = sH.getEngine().createEffect(QH, {
                  attributes: TH,
                  uniformsNames: OH,
                  uniformBuffersNames: MH,
                  samplers: rH,
                  defines: ZH,
                  fallbacks: hH,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: PH,
                  processFinalCode: mI.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: eH.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: this._shadersLoaded ? void 0 : async () => {
                    1 === this._shaderLanguage ? await Promise.all([Promise.all([EH.e(86), EH.e(79)]).then(EH.bind(EH, 24150)), Promise.all([EH.e(87), EH.e(98), EH.e(83)]).then(EH.bind(EH, 24338))]) : await Promise.all([Promise.all([EH.e(101), EH.e(100)]).then(EH.bind(EH, 24459)), Promise.all([EH.e(102), EH.e(118), EH.e(107)]).then(EH.bind(EH, 24665))]), this._shadersLoaded = !0;
                  }
                }, VH);
              if (this._eventInfo.customCode = void 0, LH) if (this._onEffectCreatedObservable && (yH.effect = LH, yH.subMesh = RH, this._onEffectCreatedObservable.notifyObservers(yH)), this.allowShaderHotSwapping && qH && !LH.isReady()) {
                if (eH.markAsUnprocessed(), JH = this.isFrozen, HH) return eH._areLightsDisposed = !0, !1;
              } else sH.resetCachedMaterial(), RH.setEffect(LH, eH, this._materialContext);
            }
            return !(!RH.effect || !RH.effect.isReady()) && (eH._renderId = sH.getRenderId(), TH._wasPreviouslyReady = !JH, TH._wasPreviouslyUsingInstances = hH, this._checkScenePerformancePriority(), !0);
          }
          buildUniformLayout() {
            const HH = this._uniformBuffer;
            HH.addUniform("diffuseLeftColor", 4), HH.addUniform("diffuseRightColor", 4), HH.addUniform("opacityParts", 4), HH.addUniform("reflectionLeftColor", 4), HH.addUniform("reflectionRightColor", 4), HH.addUniform("refractionLeftColor", 4), HH.addUniform("refractionRightColor", 4), HH.addUniform("emissiveLeftColor", 4), HH.addUniform("emissiveRightColor", 4), HH.addUniform("vDiffuseInfos", 2), HH.addUniform("vAmbientInfos", 2), HH.addUniform("vOpacityInfos", 2), HH.addUniform("vEmissiveInfos", 2), HH.addUniform("vLightmapInfos", 2), HH.addUniform("vSpecularInfos", 2), HH.addUniform("vBumpInfos", 3), HH.addUniform("diffuseMatrix", 16), HH.addUniform("ambientMatrix", 16), HH.addUniform("opacityMatrix", 16), HH.addUniform("emissiveMatrix", 16), HH.addUniform("lightmapMatrix", 16), HH.addUniform("specularMatrix", 16), HH.addUniform("bumpMatrix", 16), HH.addUniform("vTangentSpaceParams", 2), HH.addUniform("pointSize", 1), HH.addUniform("alphaCutOff", 1), HH.addUniform("refractionMatrix", 16), HH.addUniform("vRefractionInfos", 4), HH.addUniform("vRefractionPosition", 3), HH.addUniform("vRefractionSize", 3), HH.addUniform("vSpecularColor", 4), HH.addUniform("vEmissiveColor", 3), HH.addUniform("vDiffuseColor", 4), HH.addUniform("vAmbientColor", 3), HH.addUniform("cameraInfo", 4), HH.addUniform("vTextureRepetitionHexTilingParams", 4), (0, DH.hb)(HH, !1, !0), super.buildUniformLayout();
          }
          bindForSubMesh(IH, EH, RH) {
            const hH = this.kh(),
              TH = RH.materialDefines;
            if (!TH) return;
            const GH = RH.effect;
            if (!GH) return;
            this._activeEffect = GH, EH.getMeshUniformBuffer().bindToEffect(GH, "Mesh"), EH.transferToEffect(IH), this._uniformBuffer.bindToEffect(GH, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, hH, EH, IH, this.isFrozen), XH.c.Bind(hH.getEngine().currentRenderPassId, this._activeEffect, EH, IH, this);
            const AH = hH.activeCamera;
            AH ? this._uniformBuffer.updateFloat4("cameraInfo", AH.zF, AH.IM, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const VH = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", VH[0], VH[1], VH[2], VH[3]), this._eventInfo.subMesh = RH, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), TH.OBJECTSPACE_NORMALMAP && (IH.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const YH = this._mustRebind(hH, GH, RH, EH.visibility),
              QH = hH.getEngine()._features.needToAlwaysBindUniformBuffers;
            (0, DH.f)(EH, GH), this._vertexPullingMetadata && (0, iI.c)(GH, this._vertexPullingMetadata);
            const JH = this._uniformBuffer;
            if (YH) {
              if (this.bindViewProjection(GH), !JH.useUbo || !this.isFrozen || !JH.isSync || RH._drawWrapper._forceRebindOnNextCall) {
                if (HH.FresnelEnabled && TH.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (JH.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), JH.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const HH = eH.i.Ah[0];
                    HH.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), JH.updateColor4("opacityParts", HH, this.opacityFresnelParameters.power);
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (JH.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), JH.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (JH.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), JH.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (JH.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), JH.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias));
                }
                if (hH.texturesEnabled && (this._diffuseTexture && HH.DiffuseTextureEnabled && (JH.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, DH.z)(this._diffuseTexture, JH, "diffuse")), this._ambientTexture && HH.AmbientTextureEnabled && (JH.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, DH.z)(this._ambientTexture, JH, "ambient")), this._opacityTexture && HH.OpacityTextureEnabled && (JH.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, DH.z)(this._opacityTexture, JH, "opacity")), this._hasAlphaChannel() && JH.updateFloat("alphaCutOff", this.alphaCutOff), (0, DH.k)(hH, TH, JH, eH.b.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && HH.ReflectionTextureEnabled || JH.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && HH.EmissiveTextureEnabled && (JH.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, DH.z)(this._emissiveTexture, JH, "emissive")), this._lightmapTexture && HH.LightmapTextureEnabled && (JH.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, DH.z)(this._lightmapTexture, JH, "lightmap")), this._specularTexture && HH.SpecularTextureEnabled && (JH.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, DH.z)(this._specularTexture, JH, "specular")), this._bumpTexture && hH.getEngine().getCaps().standardDerivatives && HH.BumpTextureEnabled && (JH.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, DH.z)(this._bumpTexture, JH, "bump"), hH._mirroredCameraPosition ? JH.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : JH.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && HH.RefractionTextureEnabled)) {
                  let HH = 1;
                  if (this._refractionTexture.isCube || (JH.uN("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (HH = this._refractionTexture.depth)), JH.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, HH, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const HH = this._refractionTexture;
                    JH.updateVector3("vRefractionPosition", HH.boundingBoxPosition), JH.updateVector3("vRefractionSize", HH.boundingBoxSize);
                  }
                }
                this.pointsCloud && JH.updateFloat("pointSize", this.pointSize), JH.updateColor4("vSpecularColor", this.specularColor, this.specularPower), JH.updateColor3("vEmissiveColor", HH.EmissiveTextureEnabled ? this.emissiveColor : eH.b.BlackReadOnly), JH.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), hH.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), JH.updateColor3("vAmbientColor", this._globalAmbientColor);
              }
              hH.texturesEnabled && (this._diffuseTexture && HH.DiffuseTextureEnabled && GH.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && HH.AmbientTextureEnabled && GH.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && HH.OpacityTextureEnabled && GH.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && HH.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? GH.setTexture("reflectionCubeSampler", this._reflectionTexture) : GH.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && HH.EmissiveTextureEnabled && GH.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && HH.LightmapTextureEnabled && GH.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && HH.SpecularTextureEnabled && GH.setTexture("specularSampler", this._specularTexture), this._bumpTexture && hH.getEngine().getCaps().standardDerivatives && HH.BumpTextureEnabled && GH.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && HH.RefractionTextureEnabled && (this._refractionTexture.isCube ? GH.setTexture("refractionCubeSampler", this._refractionTexture) : GH.setTexture("refraction2DSampler", this._refractionTexture))), this.kh().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(EH) && this.kh().depthPeelingRenderer.bind(GH), this._eventInfo.subMesh = RH, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, NH.g)(GH, this, hH), this.bindEyePosition(GH);
            } else QH && (this._needToBindSceneUbo = !0);
            if (!YH && this.isFrozen && !QH || !hH.lightsEnabled || this._disableLighting || (0, DH.p)(hH, EH, GH, TH, this._maxSimultaneousLights), YH || !this.isFrozen) {
              var OH;
              if ((hH.fogEnabled && EH.applyFog && hH.fogMode !== sH.c.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || EH.receiveShadows || TH.PREPASS || TH.CLUSTLIGHT_BATCH) && this.bindView(GH), (0, DH.i)(hH, EH, GH), TH.NUM_MORPH_INFLUENCERS && (0, DH.v)(EH, GH), TH.BAKED_VERTEX_ANIMATION_TEXTURE) null === (OH = EH.bakedVertexAnimationManager) || void 0 === OH || OH.bind(GH, TH.INSTANCES);
              this.useLogarithmicDepth && (0, DH.t)(TH, GH, hH), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect);
            }
            this._afterBind(EH, this._activeEffect, RH), JH.update();
          }
          getAnimatables() {
            const HH = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && HH.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && HH.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && HH.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && HH.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && HH.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && HH.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && HH.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && HH.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && HH.push(this._refractionTexture), HH;
          }
          getActiveTextures() {
            const HH = super.getActiveTextures();
            return this._diffuseTexture && HH.push(this._diffuseTexture), this._ambientTexture && HH.push(this._ambientTexture), this._opacityTexture && HH.push(this._opacityTexture), this._reflectionTexture && HH.push(this._reflectionTexture), this._emissiveTexture && HH.push(this._emissiveTexture), this._specularTexture && HH.push(this._specularTexture), this._bumpTexture && HH.push(this._bumpTexture), this._lightmapTexture && HH.push(this._lightmapTexture), this._refractionTexture && HH.push(this._refractionTexture), HH;
          }
          hasTexture(HH) {
            return !!super.hasTexture(HH) || this._diffuseTexture === HH || this._ambientTexture === HH || this._opacityTexture === HH || this._reflectionTexture === HH || this._emissiveTexture === HH || this._specularTexture === HH || this._bumpTexture === HH || this._lightmapTexture === HH || this._refractionTexture === HH;
          }
          dispose(HH, IH) {
            var EH, RH, hH, TH, sH, eH, GH, AH, VH;
            IH && (null === (EH = this._diffuseTexture) || void 0 === EH || EH.dispose(), null === (RH = this._ambientTexture) || void 0 === RH || RH.dispose(), null === (hH = this._opacityTexture) || void 0 === hH || hH.dispose(), null === (TH = this._reflectionTexture) || void 0 === TH || TH.dispose(), null === (sH = this._emissiveTexture) || void 0 === sH || sH.dispose(), null === (eH = this._specularTexture) || void 0 === eH || eH.dispose(), null === (GH = this._bumpTexture) || void 0 === GH || GH.dispose(), null === (AH = this._lightmapTexture) || void 0 === AH || AH.dispose(), null === (VH = this._refractionTexture) || void 0 === VH || VH.dispose());
            this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(HH, IH);
          }
          clone(IH) {
            let EH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              RH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const hH = PH.c.Clone(() => new HH(IH, this.kh()), this, {
              cloneTexturesOnlyOnce: EH
            });
            return hH.name = IH, hH.id = IH, this.LF.copyTo(hH.LF), this._clonePlugins(hH, RH), hH;
          }
          static Parse(IH, EH, RH) {
            const hH = PH.c.Parse(() => new HH(IH.name, EH), IH, EH, RH);
            return IH.LF && hH.LF.parse(IH.LF, EH, RH), QH.b._ParsePlugins(IH, hH, EH, RH), hH;
          }
          static get DiffuseTextureEnabled() {
            return rH.b.DiffuseTextureEnabled;
          }
          static set DiffuseTextureEnabled(HH) {
            rH.b.DiffuseTextureEnabled = HH;
          }
          static get DetailTextureEnabled() {
            return rH.b.DetailTextureEnabled;
          }
          static set DetailTextureEnabled(HH) {
            rH.b.DetailTextureEnabled = HH;
          }
          static get AmbientTextureEnabled() {
            return rH.b.AmbientTextureEnabled;
          }
          static set AmbientTextureEnabled(HH) {
            rH.b.AmbientTextureEnabled = HH;
          }
          static get OpacityTextureEnabled() {
            return rH.b.OpacityTextureEnabled;
          }
          static set OpacityTextureEnabled(HH) {
            rH.b.OpacityTextureEnabled = HH;
          }
          static get ReflectionTextureEnabled() {
            return rH.b.ReflectionTextureEnabled;
          }
          static set ReflectionTextureEnabled(HH) {
            rH.b.ReflectionTextureEnabled = HH;
          }
          static get EmissiveTextureEnabled() {
            return rH.b.EmissiveTextureEnabled;
          }
          static set EmissiveTextureEnabled(HH) {
            rH.b.EmissiveTextureEnabled = HH;
          }
          static get SpecularTextureEnabled() {
            return rH.b.SpecularTextureEnabled;
          }
          static set SpecularTextureEnabled(HH) {
            rH.b.SpecularTextureEnabled = HH;
          }
          static get BumpTextureEnabled() {
            return rH.b.BumpTextureEnabled;
          }
          static set BumpTextureEnabled(HH) {
            rH.b.BumpTextureEnabled = HH;
          }
          static get LightmapTextureEnabled() {
            return rH.b.LightmapTextureEnabled;
          }
          static set LightmapTextureEnabled(HH) {
            rH.b.LightmapTextureEnabled = HH;
          }
          static get RefractionTextureEnabled() {
            return rH.b.RefractionTextureEnabled;
          }
          static set RefractionTextureEnabled(HH) {
            rH.b.RefractionTextureEnabled = HH;
          }
          static get ColorGradingTextureEnabled() {
            return rH.b.ColorGradingTextureEnabled;
          }
          static set ColorGradingTextureEnabled(HH) {
            rH.b.ColorGradingTextureEnabled = HH;
          }
          static get FresnelEnabled() {
            return rH.b.FresnelEnabled;
          }
          static set FresnelEnabled(HH) {
            rH.b.FresnelEnabled = HH;
          }
        }, IH = new WeakMap(), VH = new WeakMap(), JH = new WeakMap(), OH = new WeakMap(), mI = new WeakMap(), ZH = new WeakMap(), qH = new WeakMap(), LH = new WeakMap(), gH = new WeakMap(), oH = new WeakMap(), cH = new WeakMap(), UH = new WeakMap(), WH = new WeakMap(), BH = new WeakMap(), fH = new WeakMap(), aH = new WeakMap(), nH = new WeakMap(), pH = new WeakMap(), dH = new WeakMap(), uH = new WeakMap(), lH = new WeakMap(), KH = new WeakMap(), wH = new WeakMap(), zH = new WeakMap(), tH = new WeakMap(), jI = new WeakMap(), vH = new WeakMap(), bH = new WeakMap(), SH = new WeakMap(), xH = new WeakMap(), HI = new WeakMap(), II = new WeakMap(), (IH => {
          const EH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (IH = mR[Symbol.metadata]) && void 0 !== IH ? IH : null) : void 0;
          EI = [(0, hH.F)("diffuseTexture")], RI = [(0, hH.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], hI = [(0, hH.F)("ambientTexture")], TI = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], sI = [(0, hH.F)("opacityTexture")], eI = [(0, hH.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], GI = [(0, hH.F)("reflectionTexture")], AI = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], VI = [(0, hH.F)("emissiveTexture")], YI = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], QI = [(0, hH.F)("specularTexture")], JI = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], OI = [(0, hH.F)("bumpTexture")], rI = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], FI = [(0, hH.F)("lightmapTexture")], MI = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], NI = [(0, hH.F)("refractionTexture")], iE = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], DI = [(0, hH.m)("ambient")], PI = [(0, hH.m)("diffuse")], XI = [(0, hH.m)("specular")], mE = [(0, hH.m)("emissive")], ZI = [(0, hH.K)()], qI = [(0, hH.K)("useAlphaFromDiffuseTexture")], LI = [() => ({
            init(HH) {
              return void 0 === HH && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = HH), HH;
            },
            get() {
              return this._useAlphaFromDiffuseTexture;
            },
            set(HH) {
              this._useAlphaFromDiffuseTexture = HH;
            }
          })], gI = [(0, hH.K)("useEmissiveAsIllumination")], yI = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], oI = [(0, hH.K)("linkEmissiveWithDiffuse")], kE = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], CI = [(0, hH.K)("useSpecularOverAlpha")], cI = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], UI = [(0, hH.K)("useReflectionOverAlpha")], WI = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], BI = [(0, hH.K)("disableLighting")], fI = [(0, hH.d)("_markAllSubMeshesAsLightsDirty")], aI = [(0, hH.K)("useObjectSpaceNormalMap")], nI = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], pI = [(0, hH.K)("useParallax")], dI = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], uI = [(0, hH.K)("useParallaxOcclusion")], lI = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], KI = [(0, hH.K)()], wI = [(0, hH.K)("roughness")], zI = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], tI = [(0, hH.K)()], jE = [(0, hH.K)()], vI = [(0, hH.K)()], bI = [(0, hH.K)("useLightmapAsShadowmap")], SI = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], xI = [(0, hH.t)("diffuseFresnelParameters")], HE = [(0, hH.d)("_markAllSubMeshesAsFresnelDirty")], IE = [(0, hH.t)("opacityFresnelParameters")], EE = [(0, hH.d)("_markAllSubMeshesAsFresnelAndMiscDirty")], RE = [(0, hH.t)("reflectionFresnelParameters")], hE = [(0, hH.d)("_markAllSubMeshesAsFresnelDirty")], TE = [(0, hH.t)("refractionFresnelParameters")], sE = [(0, hH.d)("_markAllSubMeshesAsFresnelDirty")], eE = [(0, hH.t)("emissiveFresnelParameters")], GE = [(0, hH.d)("_markAllSubMeshesAsFresnelDirty")], AE = [(0, hH.K)("useReflectionFresnelFromSpecular")], VE = [(0, hH.d)("_markAllSubMeshesAsFresnelDirty")], YE = [(0, hH.K)("useGlossinessFromSpecularMapAlpha")], QE = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], JE = [(0, hH.K)("maxSimultaneousLights")], OE = [(0, hH.d)("_markAllSubMeshesAsLightsDirty")], rE = [(0, hH.K)("invertNormalMapX")], FE = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], ME = [(0, hH.K)("invertNormalMapY")], NE = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], iR = [(0, hH.K)("twoSidedLighting")], DE = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], PE = [(0, hH.K)("applyDecalMapAfterDetailMap")], XE = [(0, hH.d)("_markAllSubMeshesAsMiscDirty")], (0, RH.i)(HH, null, RI, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "diffuseTexture" in HH,
              get: HH => HH.diffuseTexture,
              set: (HH, IH) => {
                HH.diffuseTexture = IH;
              }
            },
            metadata: EH
          }, LE, gE), (0, RH.i)(HH, null, TI, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "ambientTexture" in HH,
              get: HH => HH.ambientTexture,
              set: (HH, IH) => {
                HH.ambientTexture = IH;
              }
            },
            metadata: EH
          }, kR, CE), (0, RH.i)(HH, null, eI, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "opacityTexture" in HH,
              get: HH => HH.opacityTexture,
              set: (HH, IH) => {
                HH.opacityTexture = IH;
              }
            },
            metadata: EH
          }, WE, BE), (0, RH.i)(HH, null, AI, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "reflectionTexture" in HH,
              get: HH => HH.reflectionTexture,
              set: (HH, IH) => {
                HH.reflectionTexture = IH;
              }
            },
            metadata: EH
          }, nE, pE), (0, RH.i)(HH, null, YI, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "emissiveTexture" in HH,
              get: HH => HH.emissiveTexture,
              set: (HH, IH) => {
                HH.emissiveTexture = IH;
              }
            },
            metadata: EH
          }, lE, KE), (0, RH.i)(HH, null, JI, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "specularTexture" in HH,
              get: HH => HH.specularTexture,
              set: (HH, IH) => {
                HH.specularTexture = IH;
              }
            },
            metadata: EH
          }, tE, jR), (0, RH.i)(HH, null, rI, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "bumpTexture" in HH,
              get: HH => HH.bumpTexture,
              set: (HH, IH) => {
                HH.bumpTexture = IH;
              }
            },
            metadata: EH
          }, SE, xE), (0, RH.i)(HH, null, MI, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "lightmapTexture" in HH,
              get: HH => HH.lightmapTexture,
              set: (HH, IH) => {
                HH.lightmapTexture = IH;
              }
            },
            metadata: EH
          }, ER, RR), (0, RH.i)(HH, null, iE, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "refractionTexture" in HH,
              get: HH => HH.refractionTexture,
              set: (HH, IH) => {
                HH.refractionTexture = IH;
              }
            },
            metadata: EH
          }, sR, eR), (0, RH.i)(HH, null, LI, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "useAlphaFromDiffuseTexture" in HH,
              get: HH => HH.useAlphaFromDiffuseTexture,
              set: (HH, IH) => {
                HH.useAlphaFromDiffuseTexture = IH;
              }
            },
            metadata: EH
          }, DR, PR), (0, RH.i)(HH, null, yI, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: HH => "useEmissiveAsIllumination" in HH,
              get: HH => HH.useEmissiveAsIllumination,
              set: (HH, IH) => {
                HH.useEmissiveAsIllumination = IH;
              }
            },
            metadata: EH
          }, ZR, qR), (0, RH.i)(HH, null, kE, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: HH => "linkEmissiveWithDiffuse" in HH,
              get: HH => HH.linkEmissiveWithDiffuse,
              set: (HH, IH) => {
                HH.linkEmissiveWithDiffuse = IH;
              }
            },
            metadata: EH
          }, yR, oR), (0, RH.i)(HH, null, cI, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: HH => "useSpecularOverAlpha" in HH,
              get: HH => HH.useSpecularOverAlpha,
              set: (HH, IH) => {
                HH.useSpecularOverAlpha = IH;
              }
            },
            metadata: EH
          }, cR, UR), (0, RH.i)(HH, null, WI, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: HH => "useReflectionOverAlpha" in HH,
              get: HH => HH.useReflectionOverAlpha,
              set: (HH, IH) => {
                HH.useReflectionOverAlpha = IH;
              }
            },
            metadata: EH
          }, fR, aR), (0, RH.i)(HH, null, fI, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: HH => "disableLighting" in HH,
              get: HH => HH.disableLighting,
              set: (HH, IH) => {
                HH.disableLighting = IH;
              }
            },
            metadata: EH
          }, dR, uR), (0, RH.i)(HH, null, nI, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: HH => "useObjectSpaceNormalMap" in HH,
              get: HH => HH.useObjectSpaceNormalMap,
              set: (HH, IH) => {
                HH.useObjectSpaceNormalMap = IH;
              }
            },
            metadata: EH
          }, wR, zR), (0, RH.i)(HH, null, dI, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: HH => "useParallax" in HH,
              get: HH => HH.useParallax,
              set: (HH, IH) => {
                HH.useParallax = IH;
              }
            },
            metadata: EH
          }, vR, bR), (0, RH.i)(HH, null, lI, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: HH => "useParallaxOcclusion" in HH,
              get: HH => HH.useParallaxOcclusion,
              set: (HH, IH) => {
                HH.useParallaxOcclusion = IH;
              }
            },
            metadata: EH
          }, Hh, Ih), (0, RH.i)(HH, null, zI, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: HH => "roughness" in HH,
              get: HH => HH.roughness,
              set: (HH, IH) => {
                HH.roughness = IH;
              }
            },
            metadata: EH
          }, sh, eh), (0, RH.i)(HH, null, SI, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: HH => "useLightmapAsShadowmap" in HH,
              get: HH => HH.useLightmapAsShadowmap,
              set: (HH, IH) => {
                HH.useLightmapAsShadowmap = IH;
              }
            },
            metadata: EH
          }, Fh, Mh), (0, RH.i)(HH, null, HE, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "diffuseFresnelParameters" in HH,
              get: HH => HH.diffuseFresnelParameters,
              set: (HH, IH) => {
                HH.diffuseFresnelParameters = IH;
              }
            },
            metadata: EH
          }, Dh, Ph), (0, RH.i)(HH, null, EE, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "opacityFresnelParameters" in HH,
              get: HH => HH.opacityFresnelParameters,
              set: (HH, IH) => {
                HH.opacityFresnelParameters = IH;
              }
            },
            metadata: EH
          }, Zh, qh), (0, RH.i)(HH, null, hE, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "reflectionFresnelParameters" in HH,
              get: HH => HH.reflectionFresnelParameters,
              set: (HH, IH) => {
                HH.reflectionFresnelParameters = IH;
              }
            },
            metadata: EH
          }, yh, oh), (0, RH.i)(HH, null, sE, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "refractionFresnelParameters" in HH,
              get: HH => HH.refractionFresnelParameters,
              set: (HH, IH) => {
                HH.refractionFresnelParameters = IH;
              }
            },
            metadata: EH
          }, ch, Uh), (0, RH.i)(HH, null, GE, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "emissiveFresnelParameters" in HH,
              get: HH => HH.emissiveFresnelParameters,
              set: (HH, IH) => {
                HH.emissiveFresnelParameters = IH;
              }
            },
            metadata: EH
          }, fh, ah), (0, RH.i)(HH, null, VE, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: HH => "useReflectionFresnelFromSpecular" in HH,
              get: HH => HH.useReflectionFresnelFromSpecular,
              set: (HH, IH) => {
                HH.useReflectionFresnelFromSpecular = IH;
              }
            },
            metadata: EH
          }, dh, uh), (0, RH.i)(HH, null, QE, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: HH => "useGlossinessFromSpecularMapAlpha" in HH,
              get: HH => HH.useGlossinessFromSpecularMapAlpha,
              set: (HH, IH) => {
                HH.useGlossinessFromSpecularMapAlpha = IH;
              }
            },
            metadata: EH
          }, wh, zh), (0, RH.i)(HH, null, OE, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: HH => "maxSimultaneousLights" in HH,
              get: HH => HH.maxSimultaneousLights,
              set: (HH, IH) => {
                HH.maxSimultaneousLights = IH;
              }
            },
            metadata: EH
          }, vh, bh), (0, RH.i)(HH, null, FE, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: HH => "invertNormalMapX" in HH,
              get: HH => HH.invertNormalMapX,
              set: (HH, IH) => {
                HH.invertNormalMapX = IH;
              }
            },
            metadata: EH
          }, HT, IT), (0, RH.i)(HH, null, NE, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: HH => "invertNormalMapY" in HH,
              get: HH => HH.invertNormalMapY,
              set: (HH, IH) => {
                HH.invertNormalMapY = IH;
              }
            },
            metadata: EH
          }, hT, TT), (0, RH.i)(HH, null, DE, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: HH => "twoSidedLighting" in HH,
              get: HH => HH.twoSidedLighting,
              set: (HH, IH) => {
                HH.twoSidedLighting = IH;
              }
            },
            metadata: EH
          }, GT, AT), (0, RH.i)(HH, null, XE, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: HH => "applyDecalMapAfterDetailMap" in HH,
              get: HH => HH.applyDecalMapAfterDetailMap,
              set: (HH, IH) => {
                HH.applyDecalMapAfterDetailMap = IH;
              }
            },
            metadata: EH
          }, QT, JT), (0, RH.i)(null, null, EI, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_diffuseTexture" in HH,
              get: HH => HH._diffuseTexture,
              set: (HH, IH) => {
                HH._diffuseTexture = IH;
              }
            },
            metadata: EH
          }, ZE, qE), (0, RH.i)(null, null, hI, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_ambientTexture" in HH,
              get: HH => HH._ambientTexture,
              set: (HH, IH) => {
                HH._ambientTexture = IH;
              }
            },
            metadata: EH
          }, yE, oE), (0, RH.i)(null, null, sI, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_opacityTexture" in HH,
              get: HH => HH._opacityTexture,
              set: (HH, IH) => {
                HH._opacityTexture = IH;
              }
            },
            metadata: EH
          }, cE, UE), (0, RH.i)(null, null, GI, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_reflectionTexture" in HH,
              get: HH => HH._reflectionTexture,
              set: (HH, IH) => {
                HH._reflectionTexture = IH;
              }
            },
            metadata: EH
          }, fE, aE), (0, RH.i)(null, null, VI, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_emissiveTexture" in HH,
              get: HH => HH._emissiveTexture,
              set: (HH, IH) => {
                HH._emissiveTexture = IH;
              }
            },
            metadata: EH
          }, dE, uE), (0, RH.i)(null, null, QI, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_specularTexture" in HH,
              get: HH => HH._specularTexture,
              set: (HH, IH) => {
                HH._specularTexture = IH;
              }
            },
            metadata: EH
          }, wE, zE), (0, RH.i)(null, null, OI, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_bumpTexture" in HH,
              get: HH => HH._bumpTexture,
              set: (HH, IH) => {
                HH._bumpTexture = IH;
              }
            },
            metadata: EH
          }, vE, bE), (0, RH.i)(null, null, FI, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_lightmapTexture" in HH,
              get: HH => HH._lightmapTexture,
              set: (HH, IH) => {
                HH._lightmapTexture = IH;
              }
            },
            metadata: EH
          }, HR, IR), (0, RH.i)(null, null, NI, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_refractionTexture" in HH,
              get: HH => HH._refractionTexture,
              set: (HH, IH) => {
                HH._refractionTexture = IH;
              }
            },
            metadata: EH
          }, hR, TR), (0, RH.i)(null, null, DI, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "ambientColor" in HH,
              get: HH => HH.ambientColor,
              set: (HH, IH) => {
                HH.ambientColor = IH;
              }
            },
            metadata: EH
          }, GR, AR), (0, RH.i)(null, null, PI, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "diffuseColor" in HH,
              get: HH => HH.diffuseColor,
              set: (HH, IH) => {
                HH.diffuseColor = IH;
              }
            },
            metadata: EH
          }, VR, YR), (0, RH.i)(null, null, XI, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "specularColor" in HH,
              get: HH => HH.specularColor,
              set: (HH, IH) => {
                HH.specularColor = IH;
              }
            },
            metadata: EH
          }, QR, JR), (0, RH.i)(null, null, mE, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "emissiveColor" in HH,
              get: HH => HH.emissiveColor,
              set: (HH, IH) => {
                HH.emissiveColor = IH;
              }
            },
            metadata: EH
          }, OR, rR), (0, RH.i)(null, null, ZI, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: HH => "specularPower" in HH,
              get: HH => HH.specularPower,
              set: (HH, IH) => {
                HH.specularPower = IH;
              }
            },
            metadata: EH
          }, FR, MR), (0, RH.i)(null, null, qI, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useAlphaFromDiffuseTexture" in HH,
              get: HH => HH._useAlphaFromDiffuseTexture,
              set: (HH, IH) => {
                HH._useAlphaFromDiffuseTexture = IH;
              }
            },
            metadata: EH
          }, NR, ih), (0, RH.i)(null, null, gI, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useEmissiveAsIllumination" in HH,
              get: HH => HH._useEmissiveAsIllumination,
              set: (HH, IH) => {
                HH._useEmissiveAsIllumination = IH;
              }
            },
            metadata: EH
          }, XR, mh), (0, RH.i)(null, null, oI, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: HH => "_linkEmissiveWithDiffuse" in HH,
              get: HH => HH._linkEmissiveWithDiffuse,
              set: (HH, IH) => {
                HH._linkEmissiveWithDiffuse = IH;
              }
            },
            metadata: EH
          }, LR, gR), (0, RH.i)(null, null, CI, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useSpecularOverAlpha" in HH,
              get: HH => HH._useSpecularOverAlpha,
              set: (HH, IH) => {
                HH._useSpecularOverAlpha = IH;
              }
            },
            metadata: EH
          }, kh, CR), (0, RH.i)(null, null, UI, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useReflectionOverAlpha" in HH,
              get: HH => HH._useReflectionOverAlpha,
              set: (HH, IH) => {
                HH._useReflectionOverAlpha = IH;
              }
            },
            metadata: EH
          }, WR, BR), (0, RH.i)(null, null, BI, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: HH => "_disableLighting" in HH,
              get: HH => HH._disableLighting,
              set: (HH, IH) => {
                HH._disableLighting = IH;
              }
            },
            metadata: EH
          }, nR, pR), (0, RH.i)(null, null, aI, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useObjectSpaceNormalMap" in HH,
              get: HH => HH._useObjectSpaceNormalMap,
              set: (HH, IH) => {
                HH._useObjectSpaceNormalMap = IH;
              }
            },
            metadata: EH
          }, lR, KR), (0, RH.i)(null, null, pI, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useParallax" in HH,
              get: HH => HH._useParallax,
              set: (HH, IH) => {
                HH._useParallax = IH;
              }
            },
            metadata: EH
          }, tR, jh), (0, RH.i)(null, null, uI, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useParallaxOcclusion" in HH,
              get: HH => HH._useParallaxOcclusion,
              set: (HH, IH) => {
                HH._useParallaxOcclusion = IH;
              }
            },
            metadata: EH
          }, SR, xR), (0, RH.i)(null, null, KI, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: HH => "parallaxScaleBias" in HH,
              get: HH => HH.parallaxScaleBias,
              set: (HH, IH) => {
                HH.parallaxScaleBias = IH;
              }
            },
            metadata: EH
          }, Eh, Rh), (0, RH.i)(null, null, wI, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: HH => "_roughness" in HH,
              get: HH => HH._roughness,
              set: (HH, IH) => {
                HH._roughness = IH;
              }
            },
            metadata: EH
          }, hh, Th), (0, RH.i)(null, null, tI, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: HH => "indexOfRefraction" in HH,
              get: HH => HH.indexOfRefraction,
              set: (HH, IH) => {
                HH.indexOfRefraction = IH;
              }
            },
            metadata: EH
          }, Gh, Ah), (0, RH.i)(null, null, jE, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: HH => "invertRefractionY" in HH,
              get: HH => HH.invertRefractionY,
              set: (HH, IH) => {
                HH.invertRefractionY = IH;
              }
            },
            metadata: EH
          }, Vh, Yh), (0, RH.i)(null, null, vI, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: HH => "alphaCutOff" in HH,
              get: HH => HH.alphaCutOff,
              set: (HH, IH) => {
                HH.alphaCutOff = IH;
              }
            },
            metadata: EH
          }, Qh, Jh), (0, RH.i)(null, null, bI, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useLightmapAsShadowmap" in HH,
              get: HH => HH._useLightmapAsShadowmap,
              set: (HH, IH) => {
                HH._useLightmapAsShadowmap = IH;
              }
            },
            metadata: EH
          }, Oh, rh), (0, RH.i)(null, null, xI, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "_diffuseFresnelParameters" in HH,
              get: HH => HH._diffuseFresnelParameters,
              set: (HH, IH) => {
                HH._diffuseFresnelParameters = IH;
              }
            },
            metadata: EH
          }, Nh, iT), (0, RH.i)(null, null, IE, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "_opacityFresnelParameters" in HH,
              get: HH => HH._opacityFresnelParameters,
              set: (HH, IH) => {
                HH._opacityFresnelParameters = IH;
              }
            },
            metadata: EH
          }, Xh, mT), (0, RH.i)(null, null, RE, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "_reflectionFresnelParameters" in HH,
              get: HH => HH._reflectionFresnelParameters,
              set: (HH, IH) => {
                HH._reflectionFresnelParameters = IH;
              }
            },
            metadata: EH
          }, Lh, gh), (0, RH.i)(null, null, TE, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "_refractionFresnelParameters" in HH,
              get: HH => HH._refractionFresnelParameters,
              set: (HH, IH) => {
                HH._refractionFresnelParameters = IH;
              }
            },
            metadata: EH
          }, kT, Ch), (0, RH.i)(null, null, eE, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "_emissiveFresnelParameters" in HH,
              get: HH => HH._emissiveFresnelParameters,
              set: (HH, IH) => {
                HH._emissiveFresnelParameters = IH;
              }
            },
            metadata: EH
          }, Wh, Bh), (0, RH.i)(null, null, AE, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useReflectionFresnelFromSpecular" in HH,
              get: HH => HH._useReflectionFresnelFromSpecular,
              set: (HH, IH) => {
                HH._useReflectionFresnelFromSpecular = IH;
              }
            },
            metadata: EH
          }, nh, ph), (0, RH.i)(null, null, YE, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useGlossinessFromSpecularMapAlpha" in HH,
              get: HH => HH._useGlossinessFromSpecularMapAlpha,
              set: (HH, IH) => {
                HH._useGlossinessFromSpecularMapAlpha = IH;
              }
            },
            metadata: EH
          }, lh, Kh), (0, RH.i)(null, null, JE, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: HH => "_maxSimultaneousLights" in HH,
              get: HH => HH._maxSimultaneousLights,
              set: (HH, IH) => {
                HH._maxSimultaneousLights = IH;
              }
            },
            metadata: EH
          }, th, jT), (0, RH.i)(null, null, rE, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: HH => "_invertNormalMapX" in HH,
              get: HH => HH._invertNormalMapX,
              set: (HH, IH) => {
                HH._invertNormalMapX = IH;
              }
            },
            metadata: EH
          }, Sh, xh), (0, RH.i)(null, null, ME, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: HH => "_invertNormalMapY" in HH,
              get: HH => HH._invertNormalMapY,
              set: (HH, IH) => {
                HH._invertNormalMapY = IH;
              }
            },
            metadata: EH
          }, ET, RT), (0, RH.i)(null, null, iR, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: HH => "_twoSidedLighting" in HH,
              get: HH => HH._twoSidedLighting,
              set: (HH, IH) => {
                HH._twoSidedLighting = IH;
              }
            },
            metadata: EH
          }, sT, eT), (0, RH.i)(null, null, PE, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: HH => "_applyDecalMapAfterDetailMap" in HH,
              get: HH => HH._applyDecalMapAfterDetailMap,
              set: (HH, IH) => {
                HH._applyDecalMapAfterDetailMap = IH;
              }
            },
            metadata: EH
          }, VT, YT), EH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EH
          });
        })(), HH.ForceGLSL = !1, HH;
      })(),
      UH = !1;
    function WH() {
      UH || (UH = !0, (0, YH.d)(), (0, LH.d)("BABYLON.StandardMaterial", cH), sH.c.DefaultMaterialFactory = HH => new cH("default material", HH));
    }
    Object.getOwnPropertyDescriptor(cH.prototype, "decalMap") || Object.defineProperty(cH.prototype, "decalMap", (0, gH.f)("Gh", "decalMap"));
  },
  22532: (HH, IH, EH) => {
    function RH(HH) {
      return class extends HH {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1;
        }
      };
    }
    EH.d(IH, {
      d: () => RH
    });
  }
};
//# sourceMappingURL=ug4nu.57.106740bf.chunk.js.map
//# debugId=1f7a5440-32f8-5c04-81f9-968ea7723024