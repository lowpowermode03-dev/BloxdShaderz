!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "25534441-2e38-5273-9b71-5a1a3eed590a");
  } catch (e) {}
}();
export const id = 73;
export const ids = [73];
export const modules = {
  24116: (HH, IH, EH) => {
    EH.r(IH), EH.d(IH, {
      PBRMaterial: () => QH,
      RegisterPBRMaterial: () => rH,
      RegisterPbrMaterial: () => OH
    });
    var RH = EH(21947),
      hH = EH(21956),
      TH = EH(23982),
      sH = EH(21817),
      eH = EH(23976),
      GH = EH(22304),
      AH = EH(22248),
      VH = EH(21972),
      YH = EH(21808);
    let QH = (() => {
        var HH, IH, EH, GH, YH, QH, JH, OH, rH, FH, MH, NH, iI, DH, PH, XH, mI, ZH, qH, LH, gH, yH, oH, kI, CH, cH, UH, WH, BH, fH, aH, nH, pH, dH, uH, lH, KH, wH, zH, tH, jI, vH, bH, SH, xH, HI, II, EI, RI, hI, TI, sI, eI, GI, AI, VI, YI, QI, JI, OI, rI, FI, MI, NI, iE, DI, PI;
        let XI,
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
          mR,
          ZE,
          qE,
          LE,
          gE,
          yE,
          oE,
          kR,
          CE,
          cE,
          UE,
          WE,
          BE,
          fE,
          aE,
          nE = eH.d,
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
          JT = [],
          OT = [],
          rT = [];
        return HH = class extends nE {
          get directIntensity() {
            return (0, RH.d)(this, IH, "f");
          }
          set directIntensity(HH) {
            (0, RH.g)(this, IH, HH, "f");
          }
          get emissiveIntensity() {
            return (0, RH.d)(this, EH, "f");
          }
          set emissiveIntensity(HH) {
            (0, RH.g)(this, EH, HH, "f");
          }
          get environmentIntensity() {
            return (0, RH.d)(this, GH, "f");
          }
          set environmentIntensity(HH) {
            (0, RH.g)(this, GH, HH, "f");
          }
          get specularIntensity() {
            return (0, RH.d)(this, YH, "f");
          }
          set specularIntensity(HH) {
            (0, RH.g)(this, YH, HH, "f");
          }
          get disableBumpMap() {
            return (0, RH.d)(this, QH, "f");
          }
          set disableBumpMap(HH) {
            (0, RH.g)(this, QH, HH, "f");
          }
          get albedoTexture() {
            return (0, RH.d)(this, JH, "f");
          }
          set albedoTexture(HH) {
            (0, RH.g)(this, JH, HH, "f");
          }
          get baseWeightTexture() {
            return (0, RH.d)(this, OH, "f");
          }
          set baseWeightTexture(HH) {
            (0, RH.g)(this, OH, HH, "f");
          }
          get baseDiffuseRoughnessTexture() {
            return (0, RH.d)(this, rH, "f");
          }
          set baseDiffuseRoughnessTexture(HH) {
            (0, RH.g)(this, rH, HH, "f");
          }
          get ambientTexture() {
            return (0, RH.d)(this, FH, "f");
          }
          set ambientTexture(HH) {
            (0, RH.g)(this, FH, HH, "f");
          }
          get ambientTextureStrength() {
            return (0, RH.d)(this, MH, "f");
          }
          set ambientTextureStrength(HH) {
            (0, RH.g)(this, MH, HH, "f");
          }
          get ambientTextureImpactOnAnalyticalLights() {
            return (0, RH.d)(this, NH, "f");
          }
          set ambientTextureImpactOnAnalyticalLights(HH) {
            (0, RH.g)(this, NH, HH, "f");
          }
          get opacityTexture() {
            return (0, RH.d)(this, iI, "f");
          }
          set opacityTexture(HH) {
            (0, RH.g)(this, iI, HH, "f");
          }
          get reflectionTexture() {
            return (0, RH.d)(this, DH, "f");
          }
          set reflectionTexture(HH) {
            (0, RH.g)(this, DH, HH, "f");
          }
          get emissiveTexture() {
            return (0, RH.d)(this, PH, "f");
          }
          set emissiveTexture(HH) {
            (0, RH.g)(this, PH, HH, "f");
          }
          get reflectivityTexture() {
            return (0, RH.d)(this, XH, "f");
          }
          set reflectivityTexture(HH) {
            (0, RH.g)(this, XH, HH, "f");
          }
          get metallicTexture() {
            return (0, RH.d)(this, mI, "f");
          }
          set metallicTexture(HH) {
            (0, RH.g)(this, mI, HH, "f");
          }
          get metallic() {
            return (0, RH.d)(this, ZH, "f");
          }
          set metallic(HH) {
            (0, RH.g)(this, ZH, HH, "f");
          }
          get roughness() {
            return (0, RH.d)(this, qH, "f");
          }
          set roughness(HH) {
            (0, RH.g)(this, qH, HH, "f");
          }
          get metallicF0Factor() {
            return (0, RH.d)(this, LH, "f");
          }
          set metallicF0Factor(HH) {
            (0, RH.g)(this, LH, HH, "f");
          }
          get metallicReflectanceColor() {
            return (0, RH.d)(this, gH, "f");
          }
          set metallicReflectanceColor(HH) {
            (0, RH.g)(this, gH, HH, "f");
          }
          get useOnlyMetallicFromMetallicReflectanceTexture() {
            return (0, RH.d)(this, yH, "f");
          }
          set useOnlyMetallicFromMetallicReflectanceTexture(HH) {
            (0, RH.g)(this, yH, HH, "f");
          }
          get metallicReflectanceTexture() {
            return (0, RH.d)(this, oH, "f");
          }
          set metallicReflectanceTexture(HH) {
            (0, RH.g)(this, oH, HH, "f");
          }
          get reflectanceTexture() {
            return (0, RH.d)(this, kI, "f");
          }
          set reflectanceTexture(HH) {
            (0, RH.g)(this, kI, HH, "f");
          }
          get microSurfaceTexture() {
            return (0, RH.d)(this, CH, "f");
          }
          set microSurfaceTexture(HH) {
            (0, RH.g)(this, CH, HH, "f");
          }
          get bumpTexture() {
            return (0, RH.d)(this, cH, "f");
          }
          set bumpTexture(HH) {
            (0, RH.g)(this, cH, HH, "f");
          }
          get lightmapTexture() {
            return (0, RH.d)(this, UH, "f");
          }
          set lightmapTexture(HH) {
            (0, RH.g)(this, UH, HH, "f");
          }
          get refractionTexture() {
            return this.subSurface.refractionTexture;
          }
          set refractionTexture(HH) {
            this.subSurface.refractionTexture = HH, HH ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1);
          }
          get ambientColor() {
            return (0, RH.d)(this, WH, "f");
          }
          set ambientColor(HH) {
            (0, RH.g)(this, WH, HH, "f");
          }
          get albedoColor() {
            return (0, RH.d)(this, BH, "f");
          }
          set albedoColor(HH) {
            (0, RH.g)(this, BH, HH, "f");
          }
          get baseWeight() {
            return (0, RH.d)(this, fH, "f");
          }
          set baseWeight(HH) {
            (0, RH.g)(this, fH, HH, "f");
          }
          get baseDiffuseRoughness() {
            return (0, RH.d)(this, aH, "f");
          }
          set baseDiffuseRoughness(HH) {
            (0, RH.g)(this, aH, HH, "f");
          }
          get reflectivityColor() {
            return (0, RH.d)(this, nH, "f");
          }
          set reflectivityColor(HH) {
            (0, RH.g)(this, nH, HH, "f");
          }
          get reflectionColor() {
            return (0, RH.d)(this, pH, "f");
          }
          set reflectionColor(HH) {
            (0, RH.g)(this, pH, HH, "f");
          }
          get emissiveColor() {
            return (0, RH.d)(this, dH, "f");
          }
          set emissiveColor(HH) {
            (0, RH.g)(this, dH, HH, "f");
          }
          get microSurface() {
            return (0, RH.d)(this, uH, "f");
          }
          set microSurface(HH) {
            (0, RH.g)(this, uH, HH, "f");
          }
          get indexOfRefraction() {
            return this.subSurface.indexOfRefraction;
          }
          set indexOfRefraction(HH) {
            this.subSurface.indexOfRefraction = HH;
          }
          get invertRefractionY() {
            return this.subSurface.invertRefractionY;
          }
          set invertRefractionY(HH) {
            this.subSurface.invertRefractionY = HH;
          }
          get linkRefractionWithTransparency() {
            return this.subSurface.linkRefractionWithTransparency;
          }
          set linkRefractionWithTransparency(HH) {
            this.subSurface.linkRefractionWithTransparency = HH, HH && (this.subSurface.isRefractionEnabled = !0);
          }
          get useLightmapAsShadowmap() {
            return (0, RH.d)(this, lH, "f");
          }
          set useLightmapAsShadowmap(HH) {
            (0, RH.g)(this, lH, HH, "f");
          }
          get useAlphaFromAlbedoTexture() {
            return (0, RH.d)(this, KH, "f");
          }
          set useAlphaFromAlbedoTexture(HH) {
            (0, RH.g)(this, KH, HH, "f");
          }
          get forceAlphaTest() {
            return (0, RH.d)(this, wH, "f");
          }
          set forceAlphaTest(HH) {
            (0, RH.g)(this, wH, HH, "f");
          }
          get alphaCutOff() {
            return (0, RH.d)(this, zH, "f");
          }
          set alphaCutOff(HH) {
            (0, RH.g)(this, zH, HH, "f");
          }
          get useSpecularOverAlpha() {
            return (0, RH.d)(this, tH, "f");
          }
          set useSpecularOverAlpha(HH) {
            (0, RH.g)(this, tH, HH, "f");
          }
          get useMicroSurfaceFromReflectivityMapAlpha() {
            return (0, RH.d)(this, jI, "f");
          }
          set useMicroSurfaceFromReflectivityMapAlpha(HH) {
            (0, RH.g)(this, jI, HH, "f");
          }
          get useRoughnessFromMetallicTextureAlpha() {
            return (0, RH.d)(this, vH, "f");
          }
          set useRoughnessFromMetallicTextureAlpha(HH) {
            (0, RH.g)(this, vH, HH, "f");
          }
          get useRoughnessFromMetallicTextureGreen() {
            return (0, RH.d)(this, bH, "f");
          }
          set useRoughnessFromMetallicTextureGreen(HH) {
            (0, RH.g)(this, bH, HH, "f");
          }
          get useMetallnessFromMetallicTextureBlue() {
            return (0, RH.d)(this, SH, "f");
          }
          set useMetallnessFromMetallicTextureBlue(HH) {
            (0, RH.g)(this, SH, HH, "f");
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, RH.d)(this, xH, "f");
          }
          set useAmbientOcclusionFromMetallicTextureRed(HH) {
            (0, RH.g)(this, xH, HH, "f");
          }
          get useAmbientInGrayScale() {
            return (0, RH.d)(this, HI, "f");
          }
          set useAmbientInGrayScale(HH) {
            (0, RH.g)(this, HI, HH, "f");
          }
          get useAutoMicroSurfaceFromReflectivityMap() {
            return (0, RH.d)(this, II, "f");
          }
          set useAutoMicroSurfaceFromReflectivityMap(HH) {
            (0, RH.g)(this, II, HH, "f");
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === eH.d.LIGHTFALLOFF_PHYSICAL;
          }
          set usePhysicalLightFalloff(HH) {
            HH !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = HH ? eH.d.LIGHTFALLOFF_PHYSICAL : eH.d.LIGHTFALLOFF_STANDARD);
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === eH.d.LIGHTFALLOFF_GLTF;
          }
          set useGLTFLightFalloff(HH) {
            HH !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = HH ? eH.d.LIGHTFALLOFF_GLTF : eH.d.LIGHTFALLOFF_STANDARD);
          }
          get useRadianceOverAlpha() {
            return (0, RH.d)(this, EI, "f");
          }
          set useRadianceOverAlpha(HH) {
            (0, RH.g)(this, EI, HH, "f");
          }
          get useObjectSpaceNormalMap() {
            return (0, RH.d)(this, RI, "f");
          }
          set useObjectSpaceNormalMap(HH) {
            (0, RH.g)(this, RI, HH, "f");
          }
          get useParallax() {
            return (0, RH.d)(this, hI, "f");
          }
          set useParallax(HH) {
            (0, RH.g)(this, hI, HH, "f");
          }
          get useParallaxOcclusion() {
            return (0, RH.d)(this, TI, "f");
          }
          set useParallaxOcclusion(HH) {
            (0, RH.g)(this, TI, HH, "f");
          }
          get parallaxScaleBias() {
            return (0, RH.d)(this, sI, "f");
          }
          set parallaxScaleBias(HH) {
            (0, RH.g)(this, sI, HH, "f");
          }
          get disableLighting() {
            return (0, RH.d)(this, eI, "f");
          }
          set disableLighting(HH) {
            (0, RH.g)(this, eI, HH, "f");
          }
          get forceIrradianceInFragment() {
            return (0, RH.d)(this, GI, "f");
          }
          set forceIrradianceInFragment(HH) {
            (0, RH.g)(this, GI, HH, "f");
          }
          get maxSimultaneousLights() {
            return (0, RH.d)(this, AI, "f");
          }
          set maxSimultaneousLights(HH) {
            (0, RH.g)(this, AI, HH, "f");
          }
          get invertNormalMapX() {
            return (0, RH.d)(this, VI, "f");
          }
          set invertNormalMapX(HH) {
            (0, RH.g)(this, VI, HH, "f");
          }
          get invertNormalMapY() {
            return (0, RH.d)(this, YI, "f");
          }
          set invertNormalMapY(HH) {
            (0, RH.g)(this, YI, HH, "f");
          }
          get twoSidedLighting() {
            return (0, RH.d)(this, QI, "f");
          }
          set twoSidedLighting(HH) {
            (0, RH.g)(this, QI, HH, "f");
          }
          get useAlphaFresnel() {
            return (0, RH.d)(this, JI, "f");
          }
          set useAlphaFresnel(HH) {
            (0, RH.g)(this, JI, HH, "f");
          }
          get useLinearAlphaFresnel() {
            return (0, RH.d)(this, OI, "f");
          }
          set useLinearAlphaFresnel(HH) {
            (0, RH.g)(this, OI, HH, "f");
          }
          get environmentBRDFTexture() {
            return (0, RH.d)(this, rI, "f");
          }
          set environmentBRDFTexture(HH) {
            (0, RH.g)(this, rI, HH, "f");
          }
          get forceNormalForward() {
            return (0, RH.d)(this, FI, "f");
          }
          set forceNormalForward(HH) {
            (0, RH.g)(this, FI, HH, "f");
          }
          get enableSpecularAntiAliasing() {
            return (0, RH.d)(this, MI, "f");
          }
          set enableSpecularAntiAliasing(HH) {
            (0, RH.g)(this, MI, HH, "f");
          }
          get useHorizonOcclusion() {
            return (0, RH.d)(this, NI, "f");
          }
          set useHorizonOcclusion(HH) {
            (0, RH.g)(this, NI, HH, "f");
          }
          get useRadianceOcclusion() {
            return (0, RH.d)(this, iE, "f");
          }
          set useRadianceOcclusion(HH) {
            (0, RH.g)(this, iE, HH, "f");
          }
          get unlit() {
            return (0, RH.d)(this, DI, "f");
          }
          set unlit(HH) {
            (0, RH.g)(this, DI, HH, "f");
          }
          get applyDecalMapAfterDetailMap() {
            return (0, RH.d)(this, PI, "f");
          }
          set applyDecalMapAfterDetailMap(HH) {
            (0, RH.g)(this, PI, HH, "f");
          }
          constructor(hH, eH) {
            super(hH, eH, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), IH.set(this, ((0, RH.j)(this, pE), (0, RH.j)(this, dE, 1))), EH.set(this, ((0, RH.j)(this, uE), (0, RH.j)(this, lE, 1))), GH.set(this, ((0, RH.j)(this, KE), (0, RH.j)(this, wE, 1))), YH.set(this, ((0, RH.j)(this, zE), (0, RH.j)(this, tE, 1))), QH.set(this, ((0, RH.j)(this, jR), (0, RH.j)(this, vE, !1))), JH.set(this, ((0, RH.j)(this, bE), (0, RH.j)(this, SE, void 0))), OH.set(this, ((0, RH.j)(this, xE), (0, RH.j)(this, HR, void 0))), rH.set(this, ((0, RH.j)(this, IR), (0, RH.j)(this, ER, void 0))), FH.set(this, ((0, RH.j)(this, RR), (0, RH.j)(this, hR, void 0))), MH.set(this, ((0, RH.j)(this, TR), (0, RH.j)(this, sR, 1))), NH.set(this, ((0, RH.j)(this, eR), (0, RH.j)(this, GR, HH.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), iI.set(this, ((0, RH.j)(this, AR), (0, RH.j)(this, VR, void 0))), DH.set(this, ((0, RH.j)(this, YR), (0, RH.j)(this, QR, void 0))), PH.set(this, ((0, RH.j)(this, JR), (0, RH.j)(this, OR, void 0))), XH.set(this, ((0, RH.j)(this, rR), (0, RH.j)(this, FR, void 0))), mI.set(this, ((0, RH.j)(this, MR), (0, RH.j)(this, NR, void 0))), ZH.set(this, ((0, RH.j)(this, ih), (0, RH.j)(this, DR, void 0))), qH.set(this, ((0, RH.j)(this, PR), (0, RH.j)(this, XR, void 0))), LH.set(this, ((0, RH.j)(this, mh), (0, RH.j)(this, ZR, 1))), gH.set(this, ((0, RH.j)(this, qR), (0, RH.j)(this, LR, sH.b.White()))), yH.set(this, ((0, RH.j)(this, gR), (0, RH.j)(this, yR, !1))), oH.set(this, ((0, RH.j)(this, oR), (0, RH.j)(this, kh, void 0))), kI.set(this, ((0, RH.j)(this, CR), (0, RH.j)(this, cR, void 0))), CH.set(this, ((0, RH.j)(this, UR), (0, RH.j)(this, WR, void 0))), cH.set(this, ((0, RH.j)(this, BR), (0, RH.j)(this, fR, void 0))), UH.set(this, ((0, RH.j)(this, aR), (0, RH.j)(this, nR, void 0))), WH.set(this, ((0, RH.j)(this, pR), (0, RH.j)(this, dR, new sH.b(0, 0, 0)))), BH.set(this, ((0, RH.j)(this, uR), (0, RH.j)(this, lR, new sH.b(1, 1, 1)))), fH.set(this, ((0, RH.j)(this, KR), (0, RH.j)(this, wR, 1))), aH.set(this, ((0, RH.j)(this, zR), (0, RH.j)(this, tR, void 0))), nH.set(this, ((0, RH.j)(this, jh), (0, RH.j)(this, vR, new sH.b(1, 1, 1)))), pH.set(this, ((0, RH.j)(this, bR), (0, RH.j)(this, SR, new sH.b(1, 1, 1)))), dH.set(this, ((0, RH.j)(this, xR), (0, RH.j)(this, Hh, new sH.b(0, 0, 0)))), uH.set(this, ((0, RH.j)(this, Ih), (0, RH.j)(this, Eh, 1))), lH.set(this, ((0, RH.j)(this, Rh), (0, RH.j)(this, hh, !1))), KH.set(this, ((0, RH.j)(this, Th), (0, RH.j)(this, sh, !1))), wH.set(this, ((0, RH.j)(this, eh), (0, RH.j)(this, Gh, !1))), zH.set(this, ((0, RH.j)(this, Ah), (0, RH.j)(this, Vh, .4))), tH.set(this, ((0, RH.j)(this, Yh), (0, RH.j)(this, Qh, !0))), jI.set(this, ((0, RH.j)(this, Jh), (0, RH.j)(this, Oh, !1))), vH.set(this, ((0, RH.j)(this, rh), (0, RH.j)(this, Fh, !0))), bH.set(this, ((0, RH.j)(this, Mh), (0, RH.j)(this, Nh, !1))), SH.set(this, ((0, RH.j)(this, iT), (0, RH.j)(this, Dh, !1))), xH.set(this, ((0, RH.j)(this, Ph), (0, RH.j)(this, Xh, !1))), HI.set(this, ((0, RH.j)(this, mT), (0, RH.j)(this, Zh, !1))), II.set(this, ((0, RH.j)(this, qh), (0, RH.j)(this, Lh, !1))), EI.set(this, ((0, RH.j)(this, gh), (0, RH.j)(this, yh, !0))), RI.set(this, ((0, RH.j)(this, oh), (0, RH.j)(this, kT, !1))), hI.set(this, ((0, RH.j)(this, Ch), (0, RH.j)(this, ch, !1))), TI.set(this, ((0, RH.j)(this, Uh), (0, RH.j)(this, Wh, !1))), sI.set(this, ((0, RH.j)(this, Bh), (0, RH.j)(this, fh, .05))), eI.set(this, ((0, RH.j)(this, ah), (0, RH.j)(this, nh, !1))), GI.set(this, ((0, RH.j)(this, ph), (0, RH.j)(this, dh, !1))), AI.set(this, ((0, RH.j)(this, uh), (0, RH.j)(this, lh, 4))), VI.set(this, ((0, RH.j)(this, Kh), (0, RH.j)(this, wh, !1))), YI.set(this, ((0, RH.j)(this, zh), (0, RH.j)(this, th, !1))), QI.set(this, ((0, RH.j)(this, jT), (0, RH.j)(this, vh, !1))), JI.set(this, ((0, RH.j)(this, bh), (0, RH.j)(this, Sh, !1))), OI.set(this, ((0, RH.j)(this, xh), (0, RH.j)(this, HT, !1))), rI.set(this, ((0, RH.j)(this, IT), (0, RH.j)(this, ET, null))), FI.set(this, ((0, RH.j)(this, RT), (0, RH.j)(this, hT, !1))), MI.set(this, ((0, RH.j)(this, TT), (0, RH.j)(this, sT, !1))), NI.set(this, ((0, RH.j)(this, eT), (0, RH.j)(this, GT, !0))), iE.set(this, ((0, RH.j)(this, AT), (0, RH.j)(this, VT, !0))), DI.set(this, ((0, RH.j)(this, YT), (0, RH.j)(this, QT, !1))), PI.set(this, ((0, RH.j)(this, JT), (0, RH.j)(this, OT, !1))), (0, RH.j)(this, rT), this._environmentBRDFTexture = (0, TH.b)(this.kh());
          }
          getClassName() {
            return "PBRMaterial";
          }
          clone(IH) {
            let EH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              RH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const hH = VH.c.Clone(() => new HH(IH, this.kh()), this, {
              cloneTexturesOnlyOnce: EH
            });
            return hH.id = IH, hH.name = IH, this.LF.copyTo(hH.LF), this._clonePlugins(hH, RH), hH;
          }
          serialize() {
            const HH = super.serialize();
            return HH.customType = "BABYLON.PBRMaterial", HH;
          }
          static Parse(IH, EH, RH) {
            const hH = VH.c.Parse(() => new HH(IH.name, EH), IH, EH, RH);
            return IH.LF && hH.LF.parse(IH.LF, EH, RH), AH.b._ParsePlugins(IH, hH, EH, RH), IH.clearCoat && hH.clearCoat.parse(IH.clearCoat, EH, RH), IH.anisotropy && hH.anisotropy.parse(IH.anisotropy, EH, RH), IH.brdf && hH.brdf.parse(IH.brdf, EH, RH), IH.sheen && hH.sheen.parse(IH.sheen, EH, RH), IH.subSurface && hH.subSurface.parse(IH.subSurface, EH, RH), IH.iridescence && hH.iridescence.parse(IH.iridescence, EH, RH), hH;
          }
        }, IH = new WeakMap(), EH = new WeakMap(), GH = new WeakMap(), YH = new WeakMap(), QH = new WeakMap(), JH = new WeakMap(), OH = new WeakMap(), rH = new WeakMap(), FH = new WeakMap(), MH = new WeakMap(), NH = new WeakMap(), iI = new WeakMap(), DH = new WeakMap(), PH = new WeakMap(), XH = new WeakMap(), mI = new WeakMap(), ZH = new WeakMap(), qH = new WeakMap(), LH = new WeakMap(), gH = new WeakMap(), yH = new WeakMap(), oH = new WeakMap(), kI = new WeakMap(), CH = new WeakMap(), cH = new WeakMap(), UH = new WeakMap(), WH = new WeakMap(), BH = new WeakMap(), fH = new WeakMap(), aH = new WeakMap(), nH = new WeakMap(), pH = new WeakMap(), dH = new WeakMap(), uH = new WeakMap(), lH = new WeakMap(), KH = new WeakMap(), wH = new WeakMap(), zH = new WeakMap(), tH = new WeakMap(), jI = new WeakMap(), vH = new WeakMap(), bH = new WeakMap(), SH = new WeakMap(), xH = new WeakMap(), HI = new WeakMap(), II = new WeakMap(), EI = new WeakMap(), RI = new WeakMap(), hI = new WeakMap(), TI = new WeakMap(), sI = new WeakMap(), eI = new WeakMap(), GI = new WeakMap(), AI = new WeakMap(), VI = new WeakMap(), YI = new WeakMap(), QI = new WeakMap(), JI = new WeakMap(), OI = new WeakMap(), rI = new WeakMap(), FI = new WeakMap(), MI = new WeakMap(), NI = new WeakMap(), iE = new WeakMap(), DI = new WeakMap(), PI = new WeakMap(), (IH => {
          const EH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (IH = nE[Symbol.metadata]) && void 0 !== IH ? IH : null) : void 0;
          XI = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], mE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], ZI = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], qI = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], LI = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], gI = [(0, hH.F)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], yI = [(0, hH.F)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], oI = [(0, hH.F)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], kE = [(0, hH.F)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], CI = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], cI = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], UI = [(0, hH.F)(), (0, hH.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], WI = [(0, hH.F)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], BI = [(0, hH.F)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], fI = [(0, hH.F)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], aI = [(0, hH.F)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], nI = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], pI = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], dI = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], uI = [(0, hH.m)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], lI = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], KI = [(0, hH.F)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], wI = [(0, hH.F)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], zI = [(0, hH.F)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], tI = [(0, hH.F)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], jE = [(0, hH.F)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty", null)], vI = [(0, hH.m)("ambient"), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], bI = [(0, hH.m)("albedo"), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], SI = [(0, hH.K)("baseWeight"), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], xI = [(0, hH.K)("baseDiffuseRoughness"), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], HE = [(0, hH.m)("reflectivity"), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], IE = [(0, hH.m)("reflection"), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], EE = [(0, hH.m)("emissive"), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], RE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], hE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], TE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], sE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], eE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], GE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], AE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], VE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], YE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], QE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], JE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], OE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], rE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], FE = [(0, hH.K)()], ME = [(0, hH.K)()], NE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], iR = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], DE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], PE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], XE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], mR = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsLightsDirty")], ZE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], qE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsLightsDirty")], LE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], gE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], yE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], oE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], kR = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], CE = [(0, hH.d)("_markAllSubMeshesAsTexturesDirty")], cE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], UE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], WE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], BE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsTexturesDirty")], fE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsMiscDirty")], aE = [(0, hH.K)(), (0, hH.d)("_markAllSubMeshesAsMiscDirty")], (0, RH.i)(HH, null, XI, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: HH => "directIntensity" in HH,
              get: HH => HH.directIntensity,
              set: (HH, IH) => {
                HH.directIntensity = IH;
              }
            },
            metadata: EH
          }, dE, uE), (0, RH.i)(HH, null, mE, {
            kind: "accessor",
            name: "emissiveIntensity",
            static: !1,
            private: !1,
            access: {
              has: HH => "emissiveIntensity" in HH,
              get: HH => HH.emissiveIntensity,
              set: (HH, IH) => {
                HH.emissiveIntensity = IH;
              }
            },
            metadata: EH
          }, lE, KE), (0, RH.i)(HH, null, ZI, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: HH => "environmentIntensity" in HH,
              get: HH => HH.environmentIntensity,
              set: (HH, IH) => {
                HH.environmentIntensity = IH;
              }
            },
            metadata: EH
          }, wE, zE), (0, RH.i)(HH, null, qI, {
            kind: "accessor",
            name: "specularIntensity",
            static: !1,
            private: !1,
            access: {
              has: HH => "specularIntensity" in HH,
              get: HH => HH.specularIntensity,
              set: (HH, IH) => {
                HH.specularIntensity = IH;
              }
            },
            metadata: EH
          }, tE, jR), (0, RH.i)(HH, null, LI, {
            kind: "accessor",
            name: "disableBumpMap",
            static: !1,
            private: !1,
            access: {
              has: HH => "disableBumpMap" in HH,
              get: HH => HH.disableBumpMap,
              set: (HH, IH) => {
                HH.disableBumpMap = IH;
              }
            },
            metadata: EH
          }, vE, bE), (0, RH.i)(HH, null, gI, {
            kind: "accessor",
            name: "albedoTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "albedoTexture" in HH,
              get: HH => HH.albedoTexture,
              set: (HH, IH) => {
                HH.albedoTexture = IH;
              }
            },
            metadata: EH
          }, SE, xE), (0, RH.i)(HH, null, yI, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "baseWeightTexture" in HH,
              get: HH => HH.baseWeightTexture,
              set: (HH, IH) => {
                HH.baseWeightTexture = IH;
              }
            },
            metadata: EH
          }, HR, IR), (0, RH.i)(HH, null, oI, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "baseDiffuseRoughnessTexture" in HH,
              get: HH => HH.baseDiffuseRoughnessTexture,
              set: (HH, IH) => {
                HH.baseDiffuseRoughnessTexture = IH;
              }
            },
            metadata: EH
          }, ER, RR), (0, RH.i)(HH, null, kE, {
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
          }, hR, TR), (0, RH.i)(HH, null, CI, {
            kind: "accessor",
            name: "ambientTextureStrength",
            static: !1,
            private: !1,
            access: {
              has: HH => "ambientTextureStrength" in HH,
              get: HH => HH.ambientTextureStrength,
              set: (HH, IH) => {
                HH.ambientTextureStrength = IH;
              }
            },
            metadata: EH
          }, sR, eR), (0, RH.i)(HH, null, cI, {
            kind: "accessor",
            name: "ambientTextureImpactOnAnalyticalLights",
            static: !1,
            private: !1,
            access: {
              has: HH => "ambientTextureImpactOnAnalyticalLights" in HH,
              get: HH => HH.ambientTextureImpactOnAnalyticalLights,
              set: (HH, IH) => {
                HH.ambientTextureImpactOnAnalyticalLights = IH;
              }
            },
            metadata: EH
          }, GR, AR), (0, RH.i)(HH, null, UI, {
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
          }, VR, YR), (0, RH.i)(HH, null, WI, {
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
          }, QR, JR), (0, RH.i)(HH, null, BI, {
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
          }, OR, rR), (0, RH.i)(HH, null, fI, {
            kind: "accessor",
            name: "reflectivityTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "reflectivityTexture" in HH,
              get: HH => HH.reflectivityTexture,
              set: (HH, IH) => {
                HH.reflectivityTexture = IH;
              }
            },
            metadata: EH
          }, FR, MR), (0, RH.i)(HH, null, aI, {
            kind: "accessor",
            name: "metallicTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "metallicTexture" in HH,
              get: HH => HH.metallicTexture,
              set: (HH, IH) => {
                HH.metallicTexture = IH;
              }
            },
            metadata: EH
          }, NR, ih), (0, RH.i)(HH, null, nI, {
            kind: "accessor",
            name: "metallic",
            static: !1,
            private: !1,
            access: {
              has: HH => "metallic" in HH,
              get: HH => HH.metallic,
              set: (HH, IH) => {
                HH.metallic = IH;
              }
            },
            metadata: EH
          }, DR, PR), (0, RH.i)(HH, null, pI, {
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
          }, XR, mh), (0, RH.i)(HH, null, dI, {
            kind: "accessor",
            name: "metallicF0Factor",
            static: !1,
            private: !1,
            access: {
              has: HH => "metallicF0Factor" in HH,
              get: HH => HH.metallicF0Factor,
              set: (HH, IH) => {
                HH.metallicF0Factor = IH;
              }
            },
            metadata: EH
          }, ZR, qR), (0, RH.i)(HH, null, uI, {
            kind: "accessor",
            name: "metallicReflectanceColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "metallicReflectanceColor" in HH,
              get: HH => HH.metallicReflectanceColor,
              set: (HH, IH) => {
                HH.metallicReflectanceColor = IH;
              }
            },
            metadata: EH
          }, LR, gR), (0, RH.i)(HH, null, lI, {
            kind: "accessor",
            name: "useOnlyMetallicFromMetallicReflectanceTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "useOnlyMetallicFromMetallicReflectanceTexture" in HH,
              get: HH => HH.useOnlyMetallicFromMetallicReflectanceTexture,
              set: (HH, IH) => {
                HH.useOnlyMetallicFromMetallicReflectanceTexture = IH;
              }
            },
            metadata: EH
          }, yR, oR), (0, RH.i)(HH, null, KI, {
            kind: "accessor",
            name: "metallicReflectanceTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "metallicReflectanceTexture" in HH,
              get: HH => HH.metallicReflectanceTexture,
              set: (HH, IH) => {
                HH.metallicReflectanceTexture = IH;
              }
            },
            metadata: EH
          }, kh, CR), (0, RH.i)(HH, null, wI, {
            kind: "accessor",
            name: "reflectanceTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "reflectanceTexture" in HH,
              get: HH => HH.reflectanceTexture,
              set: (HH, IH) => {
                HH.reflectanceTexture = IH;
              }
            },
            metadata: EH
          }, cR, UR), (0, RH.i)(HH, null, zI, {
            kind: "accessor",
            name: "microSurfaceTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "microSurfaceTexture" in HH,
              get: HH => HH.microSurfaceTexture,
              set: (HH, IH) => {
                HH.microSurfaceTexture = IH;
              }
            },
            metadata: EH
          }, WR, BR), (0, RH.i)(HH, null, tI, {
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
          }, fR, aR), (0, RH.i)(HH, null, jE, {
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
          }, nR, pR), (0, RH.i)(HH, null, vI, {
            kind: "accessor",
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
          }, dR, uR), (0, RH.i)(HH, null, bI, {
            kind: "accessor",
            name: "albedoColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "albedoColor" in HH,
              get: HH => HH.albedoColor,
              set: (HH, IH) => {
                HH.albedoColor = IH;
              }
            },
            metadata: EH
          }, lR, KR), (0, RH.i)(HH, null, SI, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: HH => "baseWeight" in HH,
              get: HH => HH.baseWeight,
              set: (HH, IH) => {
                HH.baseWeight = IH;
              }
            },
            metadata: EH
          }, wR, zR), (0, RH.i)(HH, null, xI, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: HH => "baseDiffuseRoughness" in HH,
              get: HH => HH.baseDiffuseRoughness,
              set: (HH, IH) => {
                HH.baseDiffuseRoughness = IH;
              }
            },
            metadata: EH
          }, tR, jh), (0, RH.i)(HH, null, HE, {
            kind: "accessor",
            name: "reflectivityColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "reflectivityColor" in HH,
              get: HH => HH.reflectivityColor,
              set: (HH, IH) => {
                HH.reflectivityColor = IH;
              }
            },
            metadata: EH
          }, vR, bR), (0, RH.i)(HH, null, IE, {
            kind: "accessor",
            name: "reflectionColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "reflectionColor" in HH,
              get: HH => HH.reflectionColor,
              set: (HH, IH) => {
                HH.reflectionColor = IH;
              }
            },
            metadata: EH
          }, SR, xR), (0, RH.i)(HH, null, EE, {
            kind: "accessor",
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
          }, Hh, Ih), (0, RH.i)(HH, null, RE, {
            kind: "accessor",
            name: "microSurface",
            static: !1,
            private: !1,
            access: {
              has: HH => "microSurface" in HH,
              get: HH => HH.microSurface,
              set: (HH, IH) => {
                HH.microSurface = IH;
              }
            },
            metadata: EH
          }, Eh, Rh), (0, RH.i)(HH, null, hE, {
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
          }, hh, Th), (0, RH.i)(HH, null, TE, {
            kind: "accessor",
            name: "useAlphaFromAlbedoTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "useAlphaFromAlbedoTexture" in HH,
              get: HH => HH.useAlphaFromAlbedoTexture,
              set: (HH, IH) => {
                HH.useAlphaFromAlbedoTexture = IH;
              }
            },
            metadata: EH
          }, sh, eh), (0, RH.i)(HH, null, sE, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: HH => "forceAlphaTest" in HH,
              get: HH => HH.forceAlphaTest,
              set: (HH, IH) => {
                HH.forceAlphaTest = IH;
              }
            },
            metadata: EH
          }, Gh, Ah), (0, RH.i)(HH, null, eE, {
            kind: "accessor",
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
          }, Vh, Yh), (0, RH.i)(HH, null, GE, {
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
          }, Qh, Jh), (0, RH.i)(HH, null, AE, {
            kind: "accessor",
            name: "useMicroSurfaceFromReflectivityMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: HH => "useMicroSurfaceFromReflectivityMapAlpha" in HH,
              get: HH => HH.useMicroSurfaceFromReflectivityMapAlpha,
              set: (HH, IH) => {
                HH.useMicroSurfaceFromReflectivityMapAlpha = IH;
              }
            },
            metadata: EH
          }, Oh, rh), (0, RH.i)(HH, null, VE, {
            kind: "accessor",
            name: "useRoughnessFromMetallicTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: HH => "useRoughnessFromMetallicTextureAlpha" in HH,
              get: HH => HH.useRoughnessFromMetallicTextureAlpha,
              set: (HH, IH) => {
                HH.useRoughnessFromMetallicTextureAlpha = IH;
              }
            },
            metadata: EH
          }, Fh, Mh), (0, RH.i)(HH, null, YE, {
            kind: "accessor",
            name: "useRoughnessFromMetallicTextureGreen",
            static: !1,
            private: !1,
            access: {
              has: HH => "useRoughnessFromMetallicTextureGreen" in HH,
              get: HH => HH.useRoughnessFromMetallicTextureGreen,
              set: (HH, IH) => {
                HH.useRoughnessFromMetallicTextureGreen = IH;
              }
            },
            metadata: EH
          }, Nh, iT), (0, RH.i)(HH, null, QE, {
            kind: "accessor",
            name: "useMetallnessFromMetallicTextureBlue",
            static: !1,
            private: !1,
            access: {
              has: HH => "useMetallnessFromMetallicTextureBlue" in HH,
              get: HH => HH.useMetallnessFromMetallicTextureBlue,
              set: (HH, IH) => {
                HH.useMetallnessFromMetallicTextureBlue = IH;
              }
            },
            metadata: EH
          }, Dh, Ph), (0, RH.i)(HH, null, JE, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: HH => "useAmbientOcclusionFromMetallicTextureRed" in HH,
              get: HH => HH.useAmbientOcclusionFromMetallicTextureRed,
              set: (HH, IH) => {
                HH.useAmbientOcclusionFromMetallicTextureRed = IH;
              }
            },
            metadata: EH
          }, Xh, mT), (0, RH.i)(HH, null, OE, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: HH => "useAmbientInGrayScale" in HH,
              get: HH => HH.useAmbientInGrayScale,
              set: (HH, IH) => {
                HH.useAmbientInGrayScale = IH;
              }
            },
            metadata: EH
          }, Zh, qh), (0, RH.i)(HH, null, rE, {
            kind: "accessor",
            name: "useAutoMicroSurfaceFromReflectivityMap",
            static: !1,
            private: !1,
            access: {
              has: HH => "useAutoMicroSurfaceFromReflectivityMap" in HH,
              get: HH => HH.useAutoMicroSurfaceFromReflectivityMap,
              set: (HH, IH) => {
                HH.useAutoMicroSurfaceFromReflectivityMap = IH;
              }
            },
            metadata: EH
          }, Lh, gh), (0, RH.i)(HH, null, FE, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: HH => "usePhysicalLightFalloff" in HH,
              get: HH => HH.usePhysicalLightFalloff
            },
            metadata: EH
          }, null, pE), (0, RH.i)(HH, null, ME, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: HH => "useGLTFLightFalloff" in HH,
              get: HH => HH.useGLTFLightFalloff
            },
            metadata: EH
          }, null, pE), (0, RH.i)(HH, null, NE, {
            kind: "accessor",
            name: "useRadianceOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: HH => "useRadianceOverAlpha" in HH,
              get: HH => HH.useRadianceOverAlpha,
              set: (HH, IH) => {
                HH.useRadianceOverAlpha = IH;
              }
            },
            metadata: EH
          }, yh, oh), (0, RH.i)(HH, null, iR, {
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
          }, kT, Ch), (0, RH.i)(HH, null, DE, {
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
          }, ch, Uh), (0, RH.i)(HH, null, PE, {
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
          }, Wh, Bh), (0, RH.i)(HH, null, XE, {
            kind: "accessor",
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
          }, fh, ah), (0, RH.i)(HH, null, mR, {
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
          }, nh, ph), (0, RH.i)(HH, null, ZE, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: HH => "forceIrradianceInFragment" in HH,
              get: HH => HH.forceIrradianceInFragment,
              set: (HH, IH) => {
                HH.forceIrradianceInFragment = IH;
              }
            },
            metadata: EH
          }, dh, uh), (0, RH.i)(HH, null, qE, {
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
          }, lh, Kh), (0, RH.i)(HH, null, LE, {
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
          }, wh, zh), (0, RH.i)(HH, null, gE, {
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
          }, th, jT), (0, RH.i)(HH, null, yE, {
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
          }, vh, bh), (0, RH.i)(HH, null, oE, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: HH => "useAlphaFresnel" in HH,
              get: HH => HH.useAlphaFresnel,
              set: (HH, IH) => {
                HH.useAlphaFresnel = IH;
              }
            },
            metadata: EH
          }, Sh, xh), (0, RH.i)(HH, null, kR, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: HH => "useLinearAlphaFresnel" in HH,
              get: HH => HH.useLinearAlphaFresnel,
              set: (HH, IH) => {
                HH.useLinearAlphaFresnel = IH;
              }
            },
            metadata: EH
          }, HT, IT), (0, RH.i)(HH, null, CE, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "environmentBRDFTexture" in HH,
              get: HH => HH.environmentBRDFTexture,
              set: (HH, IH) => {
                HH.environmentBRDFTexture = IH;
              }
            },
            metadata: EH
          }, ET, RT), (0, RH.i)(HH, null, cE, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: HH => "forceNormalForward" in HH,
              get: HH => HH.forceNormalForward,
              set: (HH, IH) => {
                HH.forceNormalForward = IH;
              }
            },
            metadata: EH
          }, hT, TT), (0, RH.i)(HH, null, UE, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: HH => "enableSpecularAntiAliasing" in HH,
              get: HH => HH.enableSpecularAntiAliasing,
              set: (HH, IH) => {
                HH.enableSpecularAntiAliasing = IH;
              }
            },
            metadata: EH
          }, sT, eT), (0, RH.i)(HH, null, WE, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: HH => "useHorizonOcclusion" in HH,
              get: HH => HH.useHorizonOcclusion,
              set: (HH, IH) => {
                HH.useHorizonOcclusion = IH;
              }
            },
            metadata: EH
          }, GT, AT), (0, RH.i)(HH, null, BE, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: HH => "useRadianceOcclusion" in HH,
              get: HH => HH.useRadianceOcclusion,
              set: (HH, IH) => {
                HH.useRadianceOcclusion = IH;
              }
            },
            metadata: EH
          }, VT, YT), (0, RH.i)(HH, null, fE, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: HH => "unlit" in HH,
              get: HH => HH.unlit,
              set: (HH, IH) => {
                HH.unlit = IH;
              }
            },
            metadata: EH
          }, QT, JT), (0, RH.i)(HH, null, aE, {
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
          }, OT, rT), EH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EH
          });
        })(), HH.PBRMATERIAL_OPAQUE = eH.d.PBRMATERIAL_OPAQUE, HH.PBRMATERIAL_ALPHATEST = eH.d.PBRMATERIAL_ALPHATEST, HH.PBRMATERIAL_ALPHABLEND = eH.d.PBRMATERIAL_ALPHABLEND, HH.PBRMATERIAL_ALPHATESTANDBLEND = eH.d.PBRMATERIAL_ALPHATESTANDBLEND, HH.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = eH.d.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, HH;
      })(),
      JH = !1;
    function OH() {
      JH || (JH = !0, (0, GH.d)(), (0, YH.d)("BABYLON.PBRMaterial", QH));
    }
    function rH() {
      OH();
    }
  }
};
//# sourceMappingURL=ug4nu.73.dbfaa93b.chunk.js.map
//# debugId=25534441-2e38-5273-9b71-5a1a3eed590a