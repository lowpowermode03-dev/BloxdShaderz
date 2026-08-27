!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "29cb04ec-e5d3-5201-a2ff-1eef3f62c3d5");
  } catch (e) {}
}();
export const id = 77;
export const ids = [77];
export const modules = {
  24144: (HH, IH, EH) => {
    EH.r(IH), EH.d(IH, {
      PBRMaterialLoadingAdapter: () => sH
    });
    var RH = EH(21817),
      hH = EH(22392),
      TH = EH(21764);
    class sH {
      constructor(HH) {
        this._specWorkflow = !1, this._material = HH, this._material.enableSpecularAntiAliasing = !0;
      }
      get material() {
        return this._material;
      }
      async finalizeAsync(HH) {}
      get isUnlit() {
        return this._material.unlit;
      }
      set isUnlit(HH) {
        this._material.unlit = HH;
      }
      set backFaceCulling(HH) {
        this._material.backFaceCulling = HH;
      }
      get backFaceCulling() {
        return this._material.backFaceCulling;
      }
      set twoSidedLighting(HH) {
        this._material.twoSidedLighting = HH;
      }
      get twoSidedLighting() {
        return this._material.twoSidedLighting;
      }
      set alphaCutOff(HH) {
        this._material.alphaCutOff = HH;
      }
      get alphaCutOff() {
        return this._material.alphaCutOff;
      }
      set useAlphaFromBaseColorTexture(HH) {
        this._material.useAlphaFromAlbedoTexture = HH;
      }
      get useAlphaFromBaseColorTexture() {
        return this._material.useAlphaFromAlbedoTexture;
      }
      get transparencyAsAlphaCoverage() {
        return this._material.useRadianceOverAlpha || this._material.useSpecularOverAlpha;
      }
      set transparencyAsAlphaCoverage(HH) {
        this._material.useRadianceOverAlpha = !HH, this._material.useSpecularOverAlpha = !HH;
      }
      set baseColor(HH) {
        this._material.albedoColor = HH;
      }
      get baseColor() {
        return this._material.albedoColor;
      }
      set baseColorTexture(HH) {
        this._material.albedoTexture = HH;
      }
      get baseColorTexture() {
        return this._material.albedoTexture;
      }
      set baseDiffuseRoughness(HH) {
        this._material.baseDiffuseRoughness = HH, HH > 0 && (this._material.brdf.baseDiffuseModel = hH.b.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR);
      }
      get baseDiffuseRoughness() {
        var HH;
        return null !== (HH = this._material.baseDiffuseRoughness) && void 0 !== HH ? HH : 0;
      }
      set baseDiffuseRoughnessTexture(HH) {
        this._material.baseDiffuseRoughnessTexture = HH;
      }
      get baseDiffuseRoughnessTexture() {
        return this._material.baseDiffuseRoughnessTexture;
      }
      set baseMetalness(HH) {
        this._material.metallic = HH;
      }
      get baseMetalness() {
        var HH;
        return null !== (HH = this._material.metallic) && void 0 !== HH ? HH : 1;
      }
      set baseMetalnessTexture(HH) {
        this._material.metallicTexture = HH;
      }
      get baseMetalnessTexture() {
        return this._material.metallicTexture;
      }
      set useRoughnessFromMetallicTextureGreen(HH) {
        this._material.useRoughnessFromMetallicTextureGreen = HH, this._material.useRoughnessFromMetallicTextureAlpha = !HH;
      }
      set useMetallicFromMetallicTextureBlue(HH) {
        this._material.useMetallnessFromMetallicTextureBlue = HH;
      }
      enableSpecularEdgeColor() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (this._material.brdf.dielectricSpecularModel = hH.b.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR, this._material.brdf.conductorSpecularModel = hH.b.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR);
      }
      configureSpecularGlossiness() {
        this._specWorkflow = !0, this._material.metallic = null, this._material.roughness = null, this._material.useMicroSurfaceFromReflectivityMapAlpha = !0;
      }
      set specularWeight(HH) {
        this._material.metallicF0Factor = HH;
      }
      get specularWeight() {
        var HH;
        return null !== (HH = this._material.metallicF0Factor) && void 0 !== HH ? HH : 1;
      }
      set specularWeightTexture(HH) {
        HH ? (this._material.metallicReflectanceTexture = HH, this._material.useOnlyMetallicFromMetallicReflectanceTexture = !0) : (this._material.metallicReflectanceTexture = null, this._material.useOnlyMetallicFromMetallicReflectanceTexture = !1);
      }
      get specularWeightTexture() {
        return this._material.metallicReflectanceTexture;
      }
      set specularColor(HH) {
        this._specWorkflow ? this._material.reflectivityColor = HH : this._material.metallicReflectanceColor = HH;
      }
      get specularColor() {
        return this._specWorkflow ? this._material.reflectivityColor : this._material.metallicReflectanceColor;
      }
      set specularColorTexture(HH) {
        this._specWorkflow ? (this._material.reflectivityTexture = HH, this._material.reflectivityTexture && (this._material.reflectivityTexture.xY = !0)) : this._material.reflectanceTexture = HH;
      }
      get specularColorTexture() {
        return this._specWorkflow ? this._material.reflectivityTexture : this._material.reflectanceTexture;
      }
      set specularRoughness(HH) {
        this._material.roughness = HH;
      }
      get specularRoughness() {
        var HH;
        return null !== (HH = this._material.roughness) && void 0 !== HH ? HH : 1;
      }
      set specularRoughnessTexture(HH) {
        this.baseMetalnessTexture || (this._material.metallicTexture = HH);
      }
      get specularRoughnessTexture() {
        return this._material.metallicTexture;
      }
      set specularIor(HH) {
        this._material.indexOfRefraction = HH;
      }
      get specularIor() {
        return this._material.indexOfRefraction;
      }
      get glossiness() {
        var HH;
        return null !== (HH = this._material.microSurface) && void 0 !== HH ? HH : 1;
      }
      set glossiness(HH) {
        this._material.microSurface = HH;
      }
      set emissionColor(HH) {
        this._material.emissiveColor = HH;
      }
      get emissionColor() {
        return this._material.emissiveColor;
      }
      set emissionLuminance(HH) {
        this._material.emissiveIntensity = HH;
      }
      get emissionLuminance() {
        return this._material.emissiveIntensity;
      }
      set emissionColorTexture(HH) {
        this._material.emissiveTexture = HH;
      }
      get emissionColorTexture() {
        return this._material.emissiveTexture;
      }
      set ambientOcclusionTexture(HH) {
        this._material.ambientTexture = HH, HH && (this._material.useAmbientInGrayScale = !0);
      }
      get ambientOcclusionTexture() {
        return this._material.ambientTexture;
      }
      set ambientOcclusionTextureStrength(HH) {
        this._material.ambientTextureStrength = HH;
      }
      get ambientOcclusionTextureStrength() {
        var HH;
        return null !== (HH = this._material.ambientTextureStrength) && void 0 !== HH ? HH : 1;
      }
      configureCoat() {
        this._material.clearCoat.isEnabled = !0, this._material.clearCoat.useRoughnessFromMainTexture = !1, this._material.clearCoat.remapF0OnInterfaceChange = !1;
      }
      set coatWeight(HH) {
        this._material.clearCoat.isEnabled = !0, this._material.clearCoat.xF = HH;
      }
      get coatWeight() {
        return this._material.clearCoat.xF;
      }
      set coatWeightTexture(HH) {
        this._material.clearCoat.isEnabled = !0, this._material.clearCoat.texture = HH;
      }
      get coatWeightTexture() {
        return this._material.clearCoat.texture;
      }
      set coatColor(HH) {
        this._material.clearCoat.isTintEnabled = HH != RH.b.White(), this._material.clearCoat.tintColor = HH;
      }
      set coatColorTexture(HH) {
        this._material.clearCoat.tintTexture = HH;
      }
      set coatRoughness(HH) {
        this._material.clearCoat.isEnabled = !0, this._material.clearCoat.roughness = HH;
      }
      get coatRoughness() {
        var HH;
        return null !== (HH = this._material.clearCoat.roughness) && void 0 !== HH ? HH : 0;
      }
      set coatRoughnessTexture(HH) {
        this._material.clearCoat.isEnabled = !0, this._material.clearCoat.useRoughnessFromMainTexture = !1, this._material.clearCoat.textureRoughness = HH;
      }
      get coatRoughnessTexture() {
        return this._material.clearCoat.textureRoughness;
      }
      set coatIor(HH) {
        this._material.clearCoat.indexOfRefraction = HH;
      }
      set coatDarkening(HH) {}
      set coatDarkeningTexture(HH) {}
      set coatRoughnessAnisotropy(HH) {}
      get coatRoughnessAnisotropy() {
        return 0;
      }
      set geometryCoatTangentAngle(HH) {}
      set geometryCoatTangentTexture(HH) {}
      get geometryCoatTangentTexture() {
        return null;
      }
      set transmissionWeight(HH) {
        this._material.subSurface.isRefractionEnabled = HH > 0, this._material.subSurface.refractionIntensity = HH;
      }
      get transmissionWeight() {
        return this._material.subSurface.isRefractionEnabled ? this._material.subSurface.refractionIntensity : 0;
      }
      set transmissionWeightTexture(HH) {
        this._material.subSurface.isRefractionEnabled = !0, this._material.subSurface.refractionIntensityTexture = HH, this._material.subSurface.useGltfStyleTextures = !0;
      }
      set transmissionDepth(HH) {
        this.transmissionWeight > 0 ? this._material.subSurface.tintColorAtDistance = HH : this.subsurfaceWeight > 0 && this._material.subSurface.diffusionDistance.multiplyInPlace(new RH.b(HH, HH, HH));
      }
      get transmissionDepth() {
        return this.transmissionWeight > 0 ? this._material.subSurface.tintColorAtDistance : 0;
      }
      set transmissionColor(HH) {
        this.transmissionWeight > 0 ? this._material.subSurface.tintColor = HH : this.subsurfaceWeight > 0 && this._material.subSurface.diffusionDistance.multiplyInPlace(HH);
      }
      get transmissionColor() {
        return this.transmissionWeight > 0 ? this._material.subSurface.tintColor : this.subsurfaceWeight > 0 ? this._material.subSurface.diffusionDistance : new RH.b(0, 0, 0);
      }
      set transmissionScatter(HH) {
        this._material.subSurface.diffusionDistance = HH;
      }
      get transmissionScatter() {
        return this._material.subSurface.diffusionDistance;
      }
      set transmissionScatterTexture(HH) {}
      set transmissionScatterAnisotropy(HH) {}
      set transmissionDispersionAbbeNumber(HH) {}
      set transmissionDispersionScale(HH) {
        HH > 0 ? (this._material.subSurface.isDispersionEnabled = !0, this._material.subSurface.dispersion = 20 / HH) : (this._material.subSurface.isDispersionEnabled = !1, this._material.subSurface.dispersion = 0);
      }
      get refractionBackgroundTexture() {
        return this._material.subSurface.refractionTexture;
      }
      set refractionBackgroundTexture(HH) {
        this._material.subSurface.refractionTexture = HH;
      }
      configureTransmission() {
        this._material.subSurface.volumeIndexOfRefraction = 1, this._material.subSurface.useAlbedoToTintRefraction = !0, this._material.subSurface.minimumThickness = 0, this._material.subSurface.maximumThickness = 0;
      }
      configureVolume() {}
      set geometryThinWalled(HH) {}
      get geometryThinWalled() {
        return 0 === this._material.subSurface.maximumThickness;
      }
      set volumeThicknessTexture(HH) {
        this._material.subSurface.thicknessTexture = HH, this._material.subSurface.useGltfStyleTextures = !0;
      }
      set volumeThickness(HH) {
        this._material.subSurface.minimumThickness = 0, this._material.subSurface.maximumThickness = HH, this._material.subSurface.useThicknessAsDepth = !0, HH > 0 && (this._material.subSurface.volumeIndexOfRefraction = this._material.indexOfRefraction);
      }
      configureSubsurface() {
        this._material.subSurface.useGltfStyleTextures = !0, this._material.subSurface.volumeIndexOfRefraction = 1, this._material.subSurface.minimumThickness = 0, this._material.subSurface.maximumThickness = 0, this._material.subSurface.useAlbedoToTintTranslucency = !1;
      }
      set subsurfaceWeight(HH) {
        this._material.subSurface.isTranslucencyEnabled = HH > 0, this._material.subSurface.translucencyIntensity = HH;
      }
      get subsurfaceWeight() {
        return this._material.subSurface.isTranslucencyEnabled ? this._material.subSurface.translucencyIntensity : 0;
      }
      set subsurfaceWeightTexture(HH) {
        this._material.subSurface.translucencyIntensityTexture = HH;
      }
      set subsurfaceColor(HH) {
        const IH = new TH.x(-Math.log(this.transmissionColor.r), -Math.log(this.transmissionColor.g), -Math.log(this.transmissionColor.b));
        IH.scaleInPlace(1 / Math.max(this.transmissionDepth, .001));
        const EH = IH,
          hH = Math.max(EH.x, Math.max(EH.y, EH.z)),
          sH = hH > 0 ? 1 / hH : 1;
        this._material.subSurface.diffusionDistance = new RH.b(Math.exp(-EH.x * sH), Math.exp(-EH.y * sH), Math.exp(-EH.z * sH));
      }
      set subsurfaceColorTexture(HH) {}
      set diffuseTransmissionTint(HH) {
        this._material.subSurface.tintColor = HH;
      }
      get diffuseTransmissionTint() {
        return this._material.subSurface.tintColor;
      }
      set diffuseTransmissionTintTexture(HH) {
        this._material.subSurface.translucencyColorTexture = HH;
      }
      get subsurfaceRadius() {
        return 1;
      }
      set subsurfaceRadius(HH) {}
      get subsurfaceRadiusScale() {
        var HH;
        return null !== (HH = this._material.subSurface.scatteringDiffusionProfile) && void 0 !== HH ? HH : RH.b.White();
      }
      set subsurfaceRadiusScale(HH) {
        this._material.subSurface.scatteringDiffusionProfile = HH;
      }
      set subsurfaceScatterAnisotropy(HH) {}
      isTranslucent() {
        return this.transmissionWeight > 0 || this.subsurfaceWeight > 0;
      }
      configureFuzz() {
        this._material.sheen.isEnabled = !0, this._material.sheen.useRoughnessFromMainTexture = !1, this._material.sheen.albedoScaling = !0;
      }
      set fuzzWeight(HH) {
        this._material.sheen.isEnabled = !0, this._material.sheen.xF = HH;
      }
      set fuzzWeightTexture(HH) {
        this._material.sheen.texture || (this._material.sheen.texture = HH);
      }
      set fuzzColor(HH) {
        this._material.sheen.isEnabled = !0, this._material.sheen.color = HH;
      }
      set fuzzColorTexture(HH) {
        this._material.sheen.texture = HH;
      }
      set fuzzRoughness(HH) {
        this._material.sheen.isEnabled = !0, this._material.sheen.roughness = HH;
      }
      set fuzzRoughnessTexture(HH) {
        this._material.sheen.isEnabled = !0, this._material.sheen.textureRoughness = HH;
      }
      set specularRoughnessAnisotropy(HH) {
        this._material.anisotropy.isEnabled = !0, this._material.anisotropy.xF = HH;
      }
      get specularRoughnessAnisotropy() {
        return this._material.anisotropy.xF;
      }
      set geometryTangentAngle(HH) {
        this._material.anisotropy.isEnabled = !0, this._material.anisotropy.angle = HH;
      }
      set geometryTangentTexture(HH) {
        this._material.anisotropy.isEnabled = !0, this._material.anisotropy.texture = HH;
      }
      get geometryTangentTexture() {
        return this._material.anisotropy.texture;
      }
      configureGltfStyleAnisotropy() {}
      set thinFilmWeight(HH) {
        this._material.iridescence.isEnabled = HH > 0, this._material.iridescence.xF = HH;
      }
      set thinFilmIor(HH) {
        this._material.iridescence.indexOfRefraction = HH;
      }
      set thinFilmThicknessMinimum(HH) {
        this._material.iridescence.minimumThickness = HH;
      }
      set thinFilmThicknessMaximum(HH) {
        this._material.iridescence.maximumThickness = HH;
      }
      set thinFilmWeightTexture(HH) {
        this._material.iridescence.texture = HH;
      }
      set thinFilmThicknessTexture(HH) {
        this._material.iridescence.thicknessTexture = HH;
      }
      set unlit(HH) {
        this._material.unlit = HH;
      }
      set geometryOpacity(HH) {
        this._material.alpha = HH;
      }
      get geometryOpacity() {
        return this._material.alpha;
      }
      set geometryNormalTexture(HH) {
        this._material.bumpTexture = HH, this._material.forceIrradianceInFragment = !0;
      }
      get geometryNormalTexture() {
        return this._material.bumpTexture;
      }
      setNormalMapInversions(HH, IH) {
        this._material.invertNormalMapX = HH, this._material.invertNormalMapY = IH;
      }
      set geometryCoatNormalTexture(HH) {
        this._material.clearCoat.isEnabled = !0, this._material.clearCoat.bumpTexture = HH;
      }
      get geometryCoatNormalTexture() {
        return this._material.clearCoat.bumpTexture;
      }
      set geometryCoatNormalTextureScale(HH) {
        this._material.clearCoat.bumpTexture && (this._material.clearCoat.bumpTexture.level = HH);
      }
    }
  }
};
//# sourceMappingURL=ug4nu.77.53936ded.chunk.js.map
//# debugId=29cb04ec-e5d3-5201-a2ff-1eef3f62c3d5