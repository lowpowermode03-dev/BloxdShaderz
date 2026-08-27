!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3ecddc03-8fed-55ef-9bb9-d2b1de699b03");
  } catch (e) {}
}();
export const id = 58;
export const ids = [58];
export const modules = {
  22933: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => ZH,
      h: () => XH,
      l: () => DH,
      o: () => PH,
      p: () => iI,
      t: () => NH
    });
    var RH = EH(17),
      hH = EH(21972),
      TH = EH(22302),
      sH = EH(21764),
      eH = EH(22128),
      GH = EH(22090),
      AH = EH(22501),
      VH = EH(21863),
      YH = EH(22495),
      QH = EH(21782),
      JH = EH(22259),
      OH = EH(22250),
      rH = EH(22515),
      FH = EH(21808);
    const MH = {
      effect: null,
      subMesh: null
    };
    class NH extends YH.e {
      constructor(HH, IH, EH) {
        let hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(HH, IH, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new sH.d(), this._cachedWorldViewProjectionMatrix = new sH.d(), this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = EH, this._options = (0, RH.b)({
          needAlphaBlending: !1,
          needAlphaTesting: !1,
          attributes: ["position", "normal", "uv"],
          uniforms: ["worldViewProjection"],
          uniformBuffers: [],
          samplers: [],
          externalTextures: [],
          samplerObjects: [],
          storageBuffers: [],
          defines: [],
          useClipPlane: !1
        }, hH);
      }
      get shaderPath() {
        return this._shaderPath;
      }
      set shaderPath(HH) {
        this._shaderPath = HH;
      }
      get options() {
        return this._options;
      }
      get isMultiview() {
        return this._multiview;
      }
      getClassName() {
        return "ShaderMaterial";
      }
      needAlphaBlending() {
        return this.alpha < 1 || this._options.needAlphaBlending;
      }
      needAlphaTesting() {
        return this._options.needAlphaTesting;
      }
      _checkUniform(HH) {
        -1 === this._options.uniforms.indexOf(HH) && this._options.uniforms.push(HH);
      }
      setTexture(HH, IH) {
        return -1 === this._options.samplers.indexOf(HH) && this._options.samplers.push(HH), this._textures[HH] = IH, this;
      }
      setInternalTexture(HH, IH) {
        return -1 === this._options.samplers.indexOf(HH) && this._options.samplers.push(HH), this._internalTextures[HH] = IH, this;
      }
      removeTexture(HH) {
        delete this._textures[HH];
      }
      setTextureArray(HH, IH) {
        return -1 === this._options.samplers.indexOf(HH) && this._options.samplers.push(HH), this._checkUniform(HH), this._textureArrays[HH] = IH, this;
      }
      setExternalTexture(HH, IH) {
        return -1 === this._options.externalTextures.indexOf(HH) && this._options.externalTextures.push(HH), this._externalTextures[HH] = IH, this;
      }
      setFloat(HH, IH) {
        return this._checkUniform(HH), this._floats[HH] = IH, this;
      }
      setInt(HH, IH) {
        return this._checkUniform(HH), this._ints[HH] = IH, this;
      }
      setUInt(HH, IH) {
        return this._checkUniform(HH), this._uints[HH] = IH, this;
      }
      setFloats(HH, IH) {
        return this._checkUniform(HH), this._floatsArrays[HH] = IH, this;
      }
      setColor3(HH, IH) {
        return this._checkUniform(HH), this._colors3[HH] = IH, this;
      }
      setColor3Array(HH, IH) {
        return this._checkUniform(HH), this._colors3Arrays[HH] = IH.reduce((HH, IH) => (HH.push(IH.r, IH.g, IH.b), HH), []), this;
      }
      setColor4(HH, IH) {
        return this._checkUniform(HH), this._colors4[HH] = IH, this;
      }
      setColor4Array(HH, IH) {
        return this._checkUniform(HH), this._colors4Arrays[HH] = IH.reduce((HH, IH) => (HH.push(IH.r, IH.g, IH.b, IH.a), HH), []), this;
      }
      setVector2(HH, IH) {
        return this._checkUniform(HH), this._vectors2[HH] = IH, this;
      }
      setVector3(HH, IH) {
        return this._checkUniform(HH), this._vectors3[HH] = IH, this;
      }
      setVector4(HH, IH) {
        return this._checkUniform(HH), this._vectors4[HH] = IH, this;
      }
      setQuaternion(HH, IH) {
        return this._checkUniform(HH), this._quaternions[HH] = IH, this;
      }
      setQuaternionArray(HH, IH) {
        return this._checkUniform(HH), this._quaternionsArrays[HH] = IH.reduce((HH, IH) => (IH.toArray(HH, HH.length), HH), []), this;
      }
      setMatrix(HH, IH) {
        return this._checkUniform(HH), this._matrices[HH] = IH, this;
      }
      setMatrices(HH, IH) {
        this._checkUniform(HH);
        const EH = new Float32Array(16 * IH.length);
        for (let RH = 0; RH < IH.length; RH++) {
          IH[RH].copyToArray(EH, 16 * RH);
        }
        return this._matrixArrays[HH] = EH, this;
      }
      setMatrix3x3(HH, IH) {
        return this._checkUniform(HH), this._matrices3x3[HH] = IH, this;
      }
      setMatrix2x2(HH, IH) {
        return this._checkUniform(HH), this._matrices2x2[HH] = IH, this;
      }
      setArray2(HH, IH) {
        return this._checkUniform(HH), this._vectors2Arrays[HH] = IH, this;
      }
      setArray3(HH, IH) {
        return this._checkUniform(HH), this._vectors3Arrays[HH] = IH, this;
      }
      setArray4(HH, IH) {
        return this._checkUniform(HH), this._vectors4Arrays[HH] = IH, this;
      }
      setUniformBuffer(HH, IH) {
        return -1 === this._options.uniformBuffers.indexOf(HH) && this._options.uniformBuffers.push(HH), this._uniformBuffers[HH] = IH, this;
      }
      setTextureSampler(HH, IH) {
        return -1 === this._options.samplerObjects.indexOf(HH) && this._options.samplerObjects.push(HH), this._textureSamplers[HH] = IH, this;
      }
      setStorageBuffer(HH, IH) {
        return -1 === this._options.storageBuffers.indexOf(HH) && this._options.storageBuffers.push(HH), this._storageBuffers[HH] = IH, this;
      }
      setDefine(HH, IH) {
        const EH = HH.trimEnd() + " ",
          RH = this.options.defines.findIndex(IH => IH === HH || IH.startsWith(EH));
        return RH >= 0 && this.options.defines.splice(RH, 1), ("boolean" !== typeof IH || IH) && this.options.defines.push(EH + IH), this;
      }
      isReadyForSubMesh(HH, IH, EH) {
        return this.isReady(HH, EH, IH);
      }
      isReady(HH, IH, EH) {
        var RH, hH, sH;
        const GH = EH && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const HH = GH ? EH._drawWrapper : this._drawWrapper;
          if (HH.effect && HH._wasPreviouslyReady && HH._wasPreviouslyUsingInstances === IH) return !0;
        }
        const VH = this.kh(),
          YH = VH.getEngine(),
          QH = [],
          FH = [];
        let NH = null,
          iI = this._shaderPath,
          DH = this._options.uniforms,
          PH = this._options.uniformBuffers,
          XH = this._options.samplers;
        YH.getCaps().multiview && VH.activeCamera && VH.activeCamera.outputRenderTarget && VH.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, QH.push("#define MULTIVIEW"), -1 !== DH.indexOf("viewProjection") && -1 === DH.indexOf("viewProjectionR") && DH.push("viewProjectionR"));
        for (let TH = 0; TH < this._options.defines.length; TH++) {
          const HH = 0 === this._options.defines[TH].indexOf("#define") ? this._options.defines[TH] : "#define ".concat(this._options.defines[TH]);
          QH.push(HH);
        }
        for (let TH = 0; TH < this._options.attributes.length; TH++) FH.push(this._options.attributes[TH]);
        if (HH && HH.isVerticesDataPresent(eH.t.ColorKind) && (-1 === FH.indexOf(eH.t.ColorKind) && FH.push(eH.t.ColorKind), QH.push("#define VERTEXCOLOR")), IH && (QH.push("#define INSTANCES"), (0, OH.sb)(FH, this._materialHelperNeedsPreviousMatrices), null !== HH && void 0 !== HH && HH.hasThinInstances && (QH.push("#define THIN_INSTANCES"), HH && HH.isVerticesDataPresent(eH.t.ColorInstanceKind) && (FH.push(eH.t.ColorInstanceKind), QH.push("#define INSTANCESCOLOR")))), HH && HH.useBones && HH.computeBonesUsingShaders && HH.skeleton) {
          FH.push(eH.t.MatricesIndicesKind), FH.push(eH.t.MatricesWeightsKind), HH.numBoneInfluencers > 4 && (FH.push(eH.t.MatricesIndicesExtraKind), FH.push(eH.t.MatricesWeightsExtraKind));
          const IH = HH.skeleton;
          QH.push("#define NUM_BONE_INFLUENCERS " + HH.numBoneInfluencers), NH = new AH.d(), NH.addCPUSkinningFallback(0, HH), IH.isUsingTextureForMatrices ? (QH.push("#define BONETEXTURE"), -1 === DH.indexOf("boneTextureInfo") && DH.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (QH.push("#define BonesPerMesh " + (IH.bones.length + 1)), -1 === DH.indexOf("mBones") && DH.push("mBones"));
        } else QH.push("#define NUM_BONE_INFLUENCERS 0");
        let mI = 0;
        const ZH = HH ? HH.morphTargetManager : null;
        if (ZH) {
          const IH = -1 !== QH.indexOf("#define UV1"),
            EH = -1 !== QH.indexOf("#define UV2"),
            RH = -1 !== QH.indexOf("#define TANGENT"),
            hH = -1 !== QH.indexOf("#define NORMAL"),
            TH = -1 !== QH.indexOf("#define VERTEXCOLOR");
          mI = (0, OH.P)(ZH, QH, FH, HH, !0, hH, RH, IH, EH, TH), ZH.isUsingTextureForTargets && (-1 === DH.indexOf("morphTargetTextureIndices") && DH.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), mI > 0 && (DH = DH.slice(), DH.push("morphTargetInfluences"), DH.push("morphTargetCount"), DH.push("morphTargetTextureInfo"), DH.push("morphTargetTextureIndices"));
        } else QH.push("#define NUM_MORPH_INFLUENCERS 0");
        if (HH) {
          const EH = HH.bakedVertexAnimationManager;
          EH && EH.isEnabled && (QH.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === DH.indexOf("bakedVertexAnimationSettings") && DH.push("bakedVertexAnimationSettings"), -1 === DH.indexOf("bakedVertexAnimationTextureSizeInverted") && DH.push("bakedVertexAnimationTextureSizeInverted"), -1 === DH.indexOf("bakedVertexAnimationTime") && DH.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), IH && FH.push("bakedVertexAnimationSettingsInstanced"));
        }
        for (const TH in this._textures) if (!this._textures[TH].isReady()) return !1;
        for (const TH in this._internalTextures) if (!this._internalTextures[TH].isReady) return !1;
        HH && this.needAlphaTestingForMesh(HH) && QH.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, JH.d)(DH), (0, JH.l)(this, VH, QH)), VH.fogEnabled && null !== HH && void 0 !== HH && HH.applyFog && VH.fogMode !== TH.c.FOGMODE_NONE && (QH.push("#define FOG"), -1 === DH.indexOf("view") && DH.push("view"), -1 === DH.indexOf("vFogInfos") && DH.push("vFogInfos"), -1 === DH.indexOf("vFogColor") && DH.push("vFogColor")), this._useLogarithmicDepth && (QH.push("#define LOGARITHMICDEPTH"), -1 === DH.indexOf("logarithmicDepthConstant") && DH.push("logarithmicDepthConstant"));
        const qH = EH ? EH.getRenderingMesh() : HH;
        if (qH && this.useVertexPulling) {
          var LH;
          const HH = qH.KN;
          HH && (this._vertexPullingMetadata = (0, rH.e)(HH), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach((HH, IH) => {
            DH.push("vp_".concat(IH, "_info"));
          })), QH.push("#define USE_VERTEX_PULLING");
          const IH = null === (LH = qH.KN) || void 0 === LH ? void 0 : LH.getIndexBuffer();
          IH && !qH.isUnIndexed && (QH.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), IH.is32Bits && QH.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"));
        }
        this.customShaderNameResolve && (DH = DH.slice(), PH = PH.slice(), XH = XH.slice(), iI = this.customShaderNameResolve(this.name, DH, PH, XH, QH, FH));
        const gH = GH ? EH._getDrawWrapper(void 0, !0) : this._drawWrapper,
          yH = null !== (RH = null === gH || void 0 === gH ? void 0 : gH.effect) && void 0 !== RH ? RH : null,
          oH = null !== (hH = null === gH || void 0 === gH ? void 0 : gH.defines) && void 0 !== hH ? hH : null,
          kI = QH.join("\n");
        let CH = yH;
        var cH;
        oH !== kI && (CH = YH.createEffect(iI, {
          attributes: FH,
          uniformsNames: DH,
          uniformBuffersNames: PH,
          samplers: XH,
          defines: kI,
          fallbacks: NH,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: mI
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, YH), GH ? EH.setEffect(CH, kI, this._materialContext) : gH && gH.setEffect(CH, kI), this._onEffectCreatedObservable && (MH.effect = CH, MH.subMesh = null !== (cH = null !== EH && void 0 !== EH ? EH : null === HH || void 0 === HH ? void 0 : HH.BJ[0]) && void 0 !== cH ? cH : null, this._onEffectCreatedObservable.notifyObservers(MH)));
        return gH._wasPreviouslyUsingInstances = !!IH, !(null === (sH = CH) || void 0 === sH || !sH.isReady()) && (yH !== CH && VH.resetCachedMaterial(), gH._wasPreviouslyReady = !0, !0);
      }
      bindOnlyWorldMatrix(HH, IH) {
        const EH = null !== IH && void 0 !== IH ? IH : this.getEffect();
        if (!EH) return;
        const RH = this._options.uniforms;
        -1 !== RH.indexOf("world") && EH.setMatrix("world", HH);
        const hH = this.kh();
        -1 !== RH.indexOf("worldView") && (HH.multiplyToRef(hH.getViewMatrix(), this._cachedWorldViewMatrix), EH.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== RH.indexOf("worldViewProjection") && (HH.multiplyToRef(hH.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), EH.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== RH.indexOf("view") && EH.setMatrix("view", hH.getViewMatrix());
      }
      bindForSubMesh(HH, IH, EH) {
        var RH;
        this.bind(HH, IH, null === (RH = EH._drawWrapperOverride) || void 0 === RH ? void 0 : RH.effect, EH);
      }
      bind(HH, IH, EH, RH) {
        const hH = RH && this._storeEffectOnSubMeshes,
          TH = null !== EH && void 0 !== EH ? EH : hH ? RH.effect : this.getEffect();
        if (!TH) return;
        const sH = this.kh();
        this._activeEffect = TH, this.bindOnlyWorldMatrix(HH, EH);
        const eH = this._options.uniformBuffers;
        let GH = !1;
        if (TH && eH && eH.length > 0 && sH.getEngine().supportsUniformBuffers) for (let YH = 0; YH < eH.length; ++YH) {
          switch (eH[YH]) {
            case "Mesh":
              IH && (IH.getMeshUniformBuffer().bindToEffect(TH, "Mesh"), IH.transferToEffect(HH));
              break;
            case "Scene":
              (0, OH.w)(TH, sH.getSceneUniformBuffer()), sH.finalizeSceneUbo(), GH = !0;
          }
        }
        const AH = IH && hH ? this._mustRebind(sH, TH, RH, IH.visibility) : sH.getCachedMaterial() !== this;
        if (TH && AH) {
          let HH;
          for (HH in GH || -1 === this._options.uniforms.indexOf("view") || TH.setMatrix("view", sH.getViewMatrix()), GH || -1 === this._options.uniforms.indexOf("projection") || TH.setMatrix("projection", sH.getProjectionMatrix()), GH || -1 === this._options.uniforms.indexOf("viewProjection") || (TH.setMatrix("viewProjection", sH.getTransformMatrix()), this._multiview && TH.setMatrix("viewProjectionR", sH._transformMatrixR)), sH.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && TH.setVector3("cameraPosition", sH.activeCamera.globalPosition), (0, OH.f)(IH, TH), (0, JH.g)(TH, this, sH), this._vertexPullingMetadata && (0, rH.c)(TH, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, OH.t)(hH ? RH.materialDefines : TH.defines, TH, sH), IH && (0, OH.i)(sH, IH, TH), this._textures) TH.setTexture(HH, this._textures[HH]);
          for (HH in this._internalTextures) TH._bindTexture(HH, this._internalTextures[HH]);
          for (HH in this._textureArrays) TH.setTextureArray(HH, this._textureArrays[HH]);
          for (HH in this._ints) TH.setInt(HH, this._ints[HH]);
          for (HH in this._uints) TH.setUInt(HH, this._uints[HH]);
          for (HH in this._floats) TH.setFloat(HH, this._floats[HH]);
          for (HH in this._floatsArrays) TH.setArray(HH, this._floatsArrays[HH]);
          for (HH in this._colors3) TH.setColor3(HH, this._colors3[HH]);
          for (HH in this._colors3Arrays) TH.setArray3(HH, this._colors3Arrays[HH]);
          for (HH in this._colors4) {
            const IH = this._colors4[HH];
            TH.setFloat4(HH, IH.r, IH.g, IH.b, IH.a);
          }
          for (HH in this._colors4Arrays) TH.setArray4(HH, this._colors4Arrays[HH]);
          for (HH in this._vectors2) TH.setVector2(HH, this._vectors2[HH]);
          for (HH in this._vectors3) TH.setVector3(HH, this._vectors3[HH]);
          for (HH in this._vectors4) TH.setVector4(HH, this._vectors4[HH]);
          for (HH in this._quaternions) TH.setQuaternion(HH, this._quaternions[HH]);
          for (HH in this._matrices) TH.setMatrix(HH, this._matrices[HH]);
          for (HH in this._matrixArrays) TH.setMatrices(HH, this._matrixArrays[HH]);
          for (HH in this._matrices3x3) TH.setMatrix3x3(HH, this._matrices3x3[HH]);
          for (HH in this._matrices2x2) TH.setMatrix2x2(HH, this._matrices2x2[HH]);
          for (HH in this._vectors2Arrays) TH.setArray2(HH, this._vectors2Arrays[HH]);
          for (HH in this._vectors3Arrays) TH.setArray3(HH, this._vectors3Arrays[HH]);
          for (HH in this._vectors4Arrays) TH.setArray4(HH, this._vectors4Arrays[HH]);
          for (HH in this._quaternionsArrays) TH.setArray4(HH, this._quaternionsArrays[HH]);
          for (HH in this._uniformBuffers) {
            const IH = this._uniformBuffers[HH].getBuffer();
            IH && TH.bindUniformBuffer(IH, HH);
          }
          const EH = sH.getEngine(),
            eH = EH.setExternalTexture;
          if (eH) for (HH in this._externalTextures) eH.call(EH, HH, this._externalTextures[HH]);
          const AH = EH.setTextureSampler;
          if (AH) for (HH in this._textureSamplers) AH.call(EH, HH, this._textureSamplers[HH]);
          const VH = EH.setStorageBuffer;
          if (VH) for (HH in this._storageBuffers) VH.call(EH, HH, this._storageBuffers[HH]);
        }
        if (TH && IH && (AH || !this.isFrozen)) {
          (0, OH.v)(IH, TH), IH.morphTargetManager && IH.morphTargetManager.isUsingTextureForTargets && IH.morphTargetManager._bind(TH);
          const HH = IH.bakedVertexAnimationManager;
          if (HH && HH.isEnabled) {
            var VH;
            const HH = hH ? RH._drawWrapper : this._drawWrapper;
            null === (VH = IH.bakedVertexAnimationManager) || void 0 === VH || VH.bind(TH, !!HH._wasPreviouslyUsingInstances);
          }
        }
        this._afterBind(IH, TH, RH);
      }
      getActiveTextures() {
        const HH = super.getActiveTextures();
        for (const IH in this._textures) HH.push(this._textures[IH]);
        for (const IH in this._textureArrays) {
          const EH = this._textureArrays[IH];
          for (let IH = 0; IH < EH.length; IH++) HH.push(EH[IH]);
        }
        return HH;
      }
      hasTexture(HH) {
        if (super.hasTexture(HH)) return !0;
        for (const EH in this._textures) if (this._textures[EH] === HH) return !0;
        const IH = HH.getInternalTexture();
        for (const EH in this._internalTextures) if (this._internalTextures[EH] === IH) return !0;
        for (const EH in this._textureArrays) {
          const IH = this._textureArrays[EH];
          for (let EH = 0; EH < IH.length; EH++) if (IH[EH] === HH) return !0;
        }
        return !1;
      }
      clone(HH) {
        const IH = hH.c.Clone(() => new NH(HH, this.kh(), this._shaderPath, this._options, this._storeEffectOnSubMeshes), this);
        IH.name = HH, IH.id = HH, "object" === typeof IH._shaderPath && (IH._shaderPath = (0, RH.b)({}, IH._shaderPath)), this._options = (0, RH.b)({}, this._options);
        const EH = Object.keys(this._options);
        for (const RH of EH) {
          const HH = this._options[RH];
          Array.isArray(HH) && (this._options[RH] = HH.slice(0));
        }
        this.LF.copyTo(IH.LF);
        for (const RH in this._textures) IH.setTexture(RH, this._textures[RH]);
        for (const RH in this._internalTextures) IH.setInternalTexture(RH, this._internalTextures[RH]);
        for (const RH in this._textureArrays) IH.setTextureArray(RH, this._textureArrays[RH]);
        for (const RH in this._externalTextures) IH.setExternalTexture(RH, this._externalTextures[RH]);
        for (const RH in this._ints) IH.setInt(RH, this._ints[RH]);
        for (const RH in this._uints) IH.setUInt(RH, this._uints[RH]);
        for (const RH in this._floats) IH.setFloat(RH, this._floats[RH]);
        for (const RH in this._floatsArrays) IH.setFloats(RH, this._floatsArrays[RH]);
        for (const RH in this._colors3) IH.setColor3(RH, this._colors3[RH]);
        for (const RH in this._colors3Arrays) IH._colors3Arrays[RH] = this._colors3Arrays[RH];
        for (const RH in this._colors4) IH.setColor4(RH, this._colors4[RH]);
        for (const RH in this._colors4Arrays) IH._colors4Arrays[RH] = this._colors4Arrays[RH];
        for (const RH in this._vectors2) IH.setVector2(RH, this._vectors2[RH]);
        for (const RH in this._vectors3) IH.setVector3(RH, this._vectors3[RH]);
        for (const RH in this._vectors4) IH.setVector4(RH, this._vectors4[RH]);
        for (const RH in this._quaternions) IH.setQuaternion(RH, this._quaternions[RH]);
        for (const RH in this._quaternionsArrays) IH._quaternionsArrays[RH] = this._quaternionsArrays[RH];
        for (const RH in this._matrices) IH.setMatrix(RH, this._matrices[RH]);
        for (const RH in this._matrixArrays) IH._matrixArrays[RH] = this._matrixArrays[RH].slice();
        for (const RH in this._matrices3x3) IH.setMatrix3x3(RH, this._matrices3x3[RH]);
        for (const RH in this._matrices2x2) IH.setMatrix2x2(RH, this._matrices2x2[RH]);
        for (const RH in this._vectors2Arrays) IH.setArray2(RH, this._vectors2Arrays[RH]);
        for (const RH in this._vectors3Arrays) IH.setArray3(RH, this._vectors3Arrays[RH]);
        for (const RH in this._vectors4Arrays) IH.setArray4(RH, this._vectors4Arrays[RH]);
        for (const RH in this._uniformBuffers) IH.setUniformBuffer(RH, this._uniformBuffers[RH]);
        for (const RH in this._textureSamplers) IH.setTextureSampler(RH, this._textureSamplers[RH]);
        for (const RH in this._storageBuffers) IH.setStorageBuffer(RH, this._storageBuffers[RH]);
        return IH;
      }
      dispose(HH, IH, EH) {
        if (IH) {
          let HH;
          for (HH in this._textures) this._textures[HH].dispose();
          for (HH in this._internalTextures) this._internalTextures[HH].dispose();
          for (HH in this._textureArrays) {
            const IH = this._textureArrays[HH];
            for (let HH = 0; HH < IH.length; HH++) IH[HH].dispose();
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(HH, IH, EH);
      }
      serialize() {
        const HH = hH.c.Serialize(this);
        let IH;
        for (IH in HH.customType = "BABYLON.ShaderMaterial", HH.uniqueId = this.uniqueId, HH.options = this._options, HH.shaderPath = this._shaderPath, HH.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, HH.LF = this.LF.serialize(), HH.textures = {}, this._textures) HH.textures[IH] = this._textures[IH].serialize();
        for (IH in HH.textureArrays = {}, this._textureArrays) {
          HH.textureArrays[IH] = [];
          const EH = this._textureArrays[IH];
          for (let RH = 0; RH < EH.length; RH++) HH.textureArrays[IH].push(EH[RH].serialize());
        }
        for (IH in HH.ints = {}, this._ints) HH.ints[IH] = this._ints[IH];
        for (IH in HH.uints = {}, this._uints) HH.uints[IH] = this._uints[IH];
        for (IH in HH.floats = {}, this._floats) HH.floats[IH] = this._floats[IH];
        for (IH in HH.floatsArrays = {}, this._floatsArrays) HH.floatsArrays[IH] = this._floatsArrays[IH];
        for (IH in HH.colors3 = {}, this._colors3) {
          const EH = this._colors3[IH];
          HH.colors3[IH] = [EH.r, EH.g, EH.b];
        }
        for (IH in HH.colors3Arrays = {}, this._colors3Arrays) HH.colors3Arrays[IH] = this._colors3Arrays[IH];
        for (IH in HH.colors4 = {}, this._colors4) {
          const EH = this._colors4[IH];
          HH.colors4[IH] = [EH.r, EH.g, EH.b, EH.a];
        }
        for (IH in HH.colors4Arrays = {}, this._colors4Arrays) HH.colors4Arrays[IH] = this._colors4Arrays[IH];
        for (IH in HH.vectors2 = {}, this._vectors2) {
          const EH = this._vectors2[IH];
          HH.vectors2[IH] = [EH.x, EH.y];
        }
        for (IH in HH.vectors3 = {}, this._vectors3) {
          const EH = this._vectors3[IH];
          HH.vectors3[IH] = [EH.x, EH.y, EH.z];
        }
        for (IH in HH.vectors4 = {}, this._vectors4) {
          const EH = this._vectors4[IH];
          HH.vectors4[IH] = [EH.x, EH.y, EH.z, EH.w];
        }
        for (IH in HH.quaternions = {}, this._quaternions) HH.quaternions[IH] = this._quaternions[IH].GM();
        for (IH in HH.matrices = {}, this._matrices) HH.matrices[IH] = this._matrices[IH].GM();
        for (IH in HH.matrixArray = {}, this._matrixArrays) HH.matrixArray[IH] = this._matrixArrays[IH];
        for (IH in HH.matrices3x3 = {}, this._matrices3x3) HH.matrices3x3[IH] = this._matrices3x3[IH];
        for (IH in HH.matrices2x2 = {}, this._matrices2x2) HH.matrices2x2[IH] = this._matrices2x2[IH];
        for (IH in HH.vectors2Arrays = {}, this._vectors2Arrays) HH.vectors2Arrays[IH] = this._vectors2Arrays[IH];
        for (IH in HH.vectors3Arrays = {}, this._vectors3Arrays) HH.vectors3Arrays[IH] = this._vectors3Arrays[IH];
        for (IH in HH.vectors4Arrays = {}, this._vectors4Arrays) HH.vectors4Arrays[IH] = this._vectors4Arrays[IH];
        for (IH in HH.quaternionsArrays = {}, this._quaternionsArrays) HH.quaternionsArrays[IH] = this._quaternionsArrays[IH];
        return HH;
      }
    }
    function iI(HH, IH, EH) {
      const RH = hH.c.Parse(() => new NH(HH.name, IH, HH.shaderPath, HH.options, HH.storeEffectOnSubMeshes), HH, IH, EH);
      let TH;
      for (TH in HH.LF && RH.LF.parse(HH.LF, IH, EH), HH.textures) RH.setTexture(TH, GH.f.Parse(HH.textures[TH], IH, EH));
      for (TH in HH.textureArrays) {
        const hH = HH.textureArrays[TH],
          sH = [];
        for (let HH = 0; HH < hH.length; HH++) sH.push(GH.f.Parse(hH[HH], IH, EH));
        RH.setTextureArray(TH, sH);
      }
      for (TH in HH.ints) RH.setInt(TH, HH.ints[TH]);
      for (TH in HH.uints) RH.setUInt(TH, HH.uints[TH]);
      for (TH in HH.floats) RH.setFloat(TH, HH.floats[TH]);
      for (TH in HH.floatsArrays) RH.setFloats(TH, HH.floatsArrays[TH]);
      for (TH in HH.colors3) {
        const IH = HH.colors3[TH];
        RH.setColor3(TH, {
          r: IH[0],
          g: IH[1],
          b: IH[2]
        });
      }
      for (TH in HH.colors3Arrays) {
        const IH = HH.colors3Arrays[TH].reduce((HH, IH, EH) => (EH % 3 === 0 ? HH.push([IH]) : HH[HH.length - 1].push(IH), HH), []).map(HH => ({
          r: HH[0],
          g: HH[1],
          b: HH[2]
        }));
        RH.setColor3Array(TH, IH);
      }
      for (TH in HH.colors4) {
        const IH = HH.colors4[TH];
        RH.setColor4(TH, {
          r: IH[0],
          g: IH[1],
          b: IH[2],
          a: IH[3]
        });
      }
      for (TH in HH.colors4Arrays) {
        const IH = HH.colors4Arrays[TH].reduce((HH, IH, EH) => (EH % 4 === 0 ? HH.push([IH]) : HH[HH.length - 1].push(IH), HH), []).map(HH => ({
          r: HH[0],
          g: HH[1],
          b: HH[2],
          a: HH[3]
        }));
        RH.setColor4Array(TH, IH);
      }
      for (TH in HH.vectors2) {
        const IH = HH.vectors2[TH];
        RH.setVector2(TH, {
          x: IH[0],
          y: IH[1]
        });
      }
      for (TH in HH.vectors3) {
        const IH = HH.vectors3[TH];
        RH.setVector3(TH, {
          x: IH[0],
          y: IH[1],
          z: IH[2]
        });
      }
      for (TH in HH.vectors4) {
        const IH = HH.vectors4[TH];
        RH.setVector4(TH, {
          x: IH[0],
          y: IH[1],
          z: IH[2],
          w: IH[3]
        });
      }
      for (TH in HH.quaternions) RH.setQuaternion(TH, sH.h.Qh(HH.quaternions[TH]));
      for (TH in HH.matrices) RH.setMatrix(TH, sH.d.Qh(HH.matrices[TH]));
      const eH = RH;
      for (TH in HH.matrixArray) eH._matrixArrays[TH] = new Float32Array(HH.matrixArray[TH]);
      for (TH in HH.matrices3x3) RH.setMatrix3x3(TH, HH.matrices3x3[TH]);
      for (TH in HH.matrices2x2) RH.setMatrix2x2(TH, HH.matrices2x2[TH]);
      for (TH in HH.vectors2Arrays) RH.setArray2(TH, HH.vectors2Arrays[TH]);
      for (TH in HH.vectors3Arrays) RH.setArray3(TH, HH.vectors3Arrays[TH]);
      for (TH in HH.vectors4Arrays) RH.setArray4(TH, HH.vectors4Arrays[TH]);
      for (TH in HH.quaternionsArrays) RH.setArray4(TH, HH.quaternionsArrays[TH]);
      return RH;
    }
    async function DH(HH, IH, EH) {
      let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise((hH, TH) => {
        const sH = new VH.c();
        sH.addEventListener("readystatechange", () => {
          if (4 == sH.readyState) if (200 == sH.status) {
            const IH = iI(JSON.parse(sH.responseText), EH || QH.e.LastCreatedScene, RH);
            HH && (IH.name = HH), hH(IH);
          } else TH("Unable to load the ShaderMaterial");
        }), sH.open("GET", IH), sH.send();
      });
    }
    async function PH(HH, IH) {
      var EH;
      let RH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const hH = null !== (EH = null === this || void 0 === this ? void 0 : this.SnippetUrl) && void 0 !== EH ? EH : NH.SnippetUrl;
      return await new Promise((EH, TH) => {
        const sH = new VH.c();
        sH.addEventListener("readystatechange", () => {
          if (4 == sH.readyState) if (200 == sH.status) {
            const hH = JSON.parse(JSON.parse(sH.responseText).jsonPayload),
              TH = iI(JSON.parse(hH.shaderMaterial), IH || QH.e.LastCreatedScene, RH);
            TH.snippetId = HH, EH(TH);
          } else TH("Unable to load the snippet " + HH);
        }), sH.open("GET", hH + "/" + HH.replace(/#/g, "/")), sH.send();
      });
    }
    NH.SnippetUrl = "https://snippet.babylonjs.com";
    const XH = PH;
    let mI = !1;
    function ZH() {
      mI || (mI = !0, NH.Parse = iI, NH.ParseFromFileAsync = DH, NH.ParseFromSnippetAsync = PH, NH.CreateFromSnippetAsync = XH, (0, FH.d)("BABYLON.ShaderMaterial", NH));
    }
  }
};
//# sourceMappingURL=ug4nu.58.7e85f20c.chunk.js.map
//# debugId=3ecddc03-8fed-55ef-9bb9-d2b1de699b03