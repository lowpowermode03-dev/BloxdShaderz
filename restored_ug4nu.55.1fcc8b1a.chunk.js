!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3860b834-ee07-515d-8abd-2e150e69da0a");
  } catch (e) {}
}();
export const id = 55;
export const ids = [55];
export const modules = {
  22190: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => RH
    });
    class RH {
      constructor(HH, IH, EH) {
        this.bu = HH, this.bv = IH, this.distance = EH, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0;
      }
    }
  },
  22202: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => sH
    });
    var RH = EH(21776),
      hH = EH(21764),
      TH = EH(21771);
    class sH {
      constructor(HH, IH, EH) {
        this.vectors = (0, RH.b)(8, hH.x.Zero), this.center = hH.x.Zero(), this.centerWorld = hH.x.Zero(), this.extendSize = hH.x.Zero(), this.extendSizeWorld = hH.x.Zero(), this.directions = (0, RH.b)(3, hH.x.Zero), this.vectorsWorld = (0, RH.b)(8, hH.x.Zero), this.minimumWorld = hH.x.Zero(), this.maximumWorld = hH.x.Zero(), this.minimum = hH.x.Zero(), this.maximum = hH.x.Zero(), this._drawWrapperFront = null, this._drawWrapperBack = null, this.reConstruct(HH, IH, EH);
      }
      reConstruct(HH, IH, EH) {
        const RH = HH.x,
          TH = HH.y,
          sH = HH.z,
          eH = IH.x,
          GH = IH.y,
          AH = IH.z,
          VH = this.vectors;
        this.minimum.nY(RH, TH, sH), this.maximum.nY(eH, GH, AH), VH[0].nY(RH, TH, sH), VH[1].nY(eH, GH, AH), VH[2].nY(eH, TH, sH), VH[3].nY(RH, GH, sH), VH[4].nY(RH, TH, AH), VH[5].nY(eH, GH, sH), VH[6].nY(RH, GH, AH), VH[7].nY(eH, TH, AH), IH.addToRef(HH, this.center).scaleInPlace(.5), IH.subtractToRef(HH, this.extendSize).scaleInPlace(.5), this._worldMatrix = EH || hH.d.IdentityReadOnly, this._update(this._worldMatrix);
      }
      scale(HH) {
        const IH = sH._TmpVector3,
          EH = this.maximum.subtractToRef(this.minimum, IH[0]),
          RH = EH.length();
        EH.normalizeFromLength(RH);
        const hH = RH * HH,
          TH = EH.scaleInPlace(.5 * hH),
          eH = this.center.subtractToRef(TH, IH[1]),
          GH = this.center.addToRef(TH, IH[2]);
        return this.reConstruct(eH, GH, this._worldMatrix), this;
      }
      getWorldMatrix() {
        return this._worldMatrix;
      }
      _update(HH) {
        const IH = this.minimumWorld,
          EH = this.maximumWorld,
          RH = this.directions,
          TH = this.vectorsWorld,
          sH = this.vectors;
        if (HH.isIdentity()) {
          IH.RH(this.minimum), EH.RH(this.maximum);
          for (let HH = 0; HH < 8; ++HH) TH[HH].RH(sH[HH]);
          this.extendSizeWorld.RH(this.extendSize), this.centerWorld.RH(this.center);
        } else {
          IH.nO(Number.MAX_VALUE), EH.nO(-Number.MAX_VALUE);
          for (let RH = 0; RH < 8; ++RH) {
            const eH = TH[RH];
            hH.x.TransformCoordinatesToRef(sH[RH], HH, eH), IH.minimizeInPlace(eH), EH.maximizeInPlace(eH);
          }
          EH.subtractToRef(IH, this.extendSizeWorld).scaleInPlace(.5), EH.addToRef(IH, this.centerWorld).scaleInPlace(.5);
        }
        hH.x.FromArrayToRef(HH.m, 0, RH[0]), hH.x.FromArrayToRef(HH.m, 4, RH[1]), hH.x.FromArrayToRef(HH.m, 8, RH[2]), this._worldMatrix = HH;
      }
      isInFrustum(HH) {
        return sH.IsInFrustum(this.vectorsWorld, HH);
      }
      isCompletelyInFrustum(HH) {
        return sH.IsCompletelyInFrustum(this.vectorsWorld, HH);
      }
      intersectsPoint(HH) {
        const IH = this.minimumWorld,
          EH = this.maximumWorld,
          RH = IH.x,
          hH = IH.y,
          sH = IH.z,
          eH = EH.x,
          GH = EH.y,
          AH = EH.z,
          VH = HH.x,
          YH = HH.y,
          QH = HH.z,
          JH = -TH.b;
        return !(eH - VH < JH || JH > VH - RH) && !(GH - YH < JH || JH > YH - hH) && !(AH - QH < JH || JH > QH - sH);
      }
      intersectsSphere(HH) {
        return sH.IntersectsSphere(this.minimumWorld, this.maximumWorld, HH.centerWorld, HH.radiusWorld);
      }
      intersectsMinMax(HH, IH) {
        const EH = this.minimumWorld,
          RH = this.maximumWorld,
          hH = EH.x,
          TH = EH.y,
          sH = EH.z,
          eH = RH.x,
          GH = RH.y,
          AH = RH.z,
          VH = HH.x,
          YH = HH.y,
          QH = HH.z,
          JH = IH.x,
          OH = IH.y,
          rH = IH.z;
        return !(eH < VH || hH > JH) && !(GH < YH || TH > OH) && !(AH < QH || sH > rH);
      }
      dispose() {
        var HH, IH;
        null === (HH = this._drawWrapperFront) || void 0 === HH || HH.dispose(), null === (IH = this._drawWrapperBack) || void 0 === IH || IH.dispose();
      }
      static Intersects(HH, IH) {
        return HH.intersectsMinMax(IH.minimumWorld, IH.maximumWorld);
      }
      static IntersectsSphere(HH, IH, EH, RH) {
        const TH = sH._TmpVector3[0];
        hH.x.ClampToRef(EH, HH, IH, TH);
        return hH.x.DistanceSquared(EH, TH) <= RH * RH;
      }
      static IsCompletelyInFrustum(HH, IH) {
        for (let EH = 0; EH < 6; ++EH) {
          const RH = IH[EH];
          for (let IH = 0; IH < 8; ++IH) if (RH.dotCoordinate(HH[IH]) < 0) return !1;
        }
        return !0;
      }
      static IsInFrustum(HH, IH) {
        for (let EH = 0; EH < 6; ++EH) {
          let RH = !0;
          const hH = IH[EH];
          for (let IH = 0; IH < 8; ++IH) if (hH.dotCoordinate(HH[IH]) >= 0) {
            RH = !1;
            break;
          }
          if (RH) return !1;
        }
        return !0;
      }
    }
    sH._TmpVector3 = (0, RH.b)(3, hH.x.Zero);
  },
  22195: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => YH
    });
    var RH = EH(21776),
      hH = EH(21764),
      TH = EH(22202);
    class sH {
      constructor(HH, IH, EH) {
        this.center = hH.x.Zero(), this.centerWorld = hH.x.Zero(), this.minimum = hH.x.Zero(), this.maximum = hH.x.Zero(), this.reConstruct(HH, IH, EH);
      }
      reConstruct(HH, IH, EH) {
        this.minimum.RH(HH), this.maximum.RH(IH);
        const RH = hH.x.Distance(HH, IH);
        IH.addToRef(HH, this.center).scaleInPlace(.5), this.QI = .5 * RH, this._update(EH || hH.d.IdentityReadOnly);
      }
      scale(HH) {
        const IH = this.QI * HH,
          EH = sH._TmpVector3,
          RH = EH[0].nO(IH),
          hH = this.center.subtractToRef(RH, EH[1]),
          TH = this.center.addToRef(RH, EH[2]);
        return this.reConstruct(hH, TH, this._worldMatrix), this;
      }
      getWorldMatrix() {
        return this._worldMatrix;
      }
      _update(HH) {
        if (HH.isIdentity()) this.centerWorld.RH(this.center), this.radiusWorld = this.QI;else {
          hH.x.TransformCoordinatesToRef(this.center, HH, this.centerWorld);
          const IH = sH._TmpVector3[0];
          hH.x.TransformNormalFromFloatsToRef(1, 1, 1, HH, IH), this.radiusWorld = Math.max(Math.abs(IH.x), Math.abs(IH.y), Math.abs(IH.z)) * this.QI;
        }
      }
      isInFrustum(HH) {
        const IH = this.centerWorld,
          EH = this.radiusWorld;
        for (let RH = 0; RH < 6; RH++) if (HH[RH].dotCoordinate(IH) <= -EH) return !1;
        return !0;
      }
      isCenterInFrustum(HH) {
        const IH = this.centerWorld;
        for (let EH = 0; EH < 6; EH++) if (HH[EH].dotCoordinate(IH) < 0) return !1;
        return !0;
      }
      intersectsPoint(HH) {
        const IH = hH.x.DistanceSquared(this.centerWorld, HH);
        return !(this.radiusWorld * this.radiusWorld < IH);
      }
      static Intersects(HH, IH) {
        const EH = hH.x.DistanceSquared(HH.centerWorld, IH.centerWorld),
          RH = HH.radiusWorld + IH.radiusWorld;
        return !(RH * RH < EH);
      }
      static CreateFromCenterAndRadius(HH, IH, EH) {
        this._TmpVector3[0].RH(HH), this._TmpVector3[1].nY(0, 0, IH), this._TmpVector3[2].RH(HH), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].wr(this._TmpVector3[1]);
        const RH = new sH(this._TmpVector3[0], this._TmpVector3[2]);
        return RH._worldMatrix = EH || hH.d.Identity(), RH;
      }
    }
    sH._TmpVector3 = (0, RH.b)(3, hH.x.Zero);
    const eH = {
        min: 0,
        max: 0
      },
      GH = {
        min: 0,
        max: 0
      },
      AH = (HH, IH, EH) => {
        const RH = hH.x.Dot(IH.centerWorld, HH),
          TH = Math.abs(hH.x.Dot(IH.directions[0], HH)) * IH.extendSize.x + Math.abs(hH.x.Dot(IH.directions[1], HH)) * IH.extendSize.y + Math.abs(hH.x.Dot(IH.directions[2], HH)) * IH.extendSize.z;
        EH.min = RH - TH, EH.max = RH + TH;
      },
      VH = (HH, IH, EH) => (AH(HH, IH, eH), AH(HH, EH, GH), !(eH.min > GH.max || GH.min > eH.max));
    class YH {
      constructor(HH, IH, EH) {
        this._isLocked = !1, this.boundingBox = new TH.d(HH, IH, EH), this.boundingSphere = new sH(HH, IH, EH);
      }
      reConstruct(HH, IH, EH) {
        this.boundingBox.reConstruct(HH, IH, EH), this.boundingSphere.reConstruct(HH, IH, EH);
      }
      get minimum() {
        return this.boundingBox.minimum;
      }
      get maximum() {
        return this.boundingBox.maximum;
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(HH) {
        this._isLocked = HH;
      }
      update(HH) {
        this._isLocked || (this.boundingBox._update(HH), this.boundingSphere._update(HH));
      }
      centerOn(HH, IH) {
        const EH = YH._TmpVector3[0].RH(HH).wr(IH),
          RH = YH._TmpVector3[1].RH(HH).addInPlace(IH);
        return this.boundingBox.reConstruct(EH, RH, this.boundingBox.getWorldMatrix()), this.boundingSphere.reConstruct(EH, RH, this.boundingBox.getWorldMatrix()), this;
      }
      encapsulate(HH) {
        const IH = hH.x.Minimize(this.minimum, HH),
          EH = hH.x.Maximize(this.maximum, HH);
        return this.reConstruct(IH, EH, this.boundingBox.getWorldMatrix()), this;
      }
      encapsulateBoundingInfo(HH) {
        const IH = hH.p.Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(IH);
        const EH = hH.p.Rh[0];
        return hH.x.TransformCoordinatesToRef(HH.boundingBox.minimumWorld, IH, EH), this.encapsulate(EH), hH.x.TransformCoordinatesToRef(HH.boundingBox.maximumWorld, IH, EH), this.encapsulate(EH), this;
      }
      scale(HH) {
        return this.boundingBox.scale(HH), this.boundingSphere.scale(HH), this;
      }
      isInFrustum(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if ((2 === IH || 3 === IH) && this.boundingSphere.isCenterInFrustum(HH)) return !0;
        if (!this.boundingSphere.isInFrustum(HH)) return !1;
        return !(1 !== IH && 3 !== IH) || this.boundingBox.isInFrustum(HH);
      }
      get diagonalLength() {
        const HH = this.boundingBox;
        return HH.maximumWorld.subtractToRef(HH.minimumWorld, YH._TmpVector3[0]).length();
      }
      isCompletelyInFrustum(HH) {
        return this.boundingBox.isCompletelyInFrustum(HH);
      }
      _checkCollision(HH) {
        return HH._canDoCollision(this.boundingSphere.centerWorld, this.boundingSphere.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld);
      }
      intersectsPoint(HH) {
        return !!this.boundingSphere.centerWorld && !!this.boundingSphere.intersectsPoint(HH) && !!this.boundingBox.intersectsPoint(HH);
      }
      intersects(HH, IH) {
        if (!sH.Intersects(this.boundingSphere, HH.boundingSphere)) return !1;
        if (!TH.d.Intersects(this.boundingBox, HH.boundingBox)) return !1;
        if (!IH) return !0;
        const EH = this.boundingBox,
          RH = HH.boundingBox;
        return !!VH(EH.directions[0], EH, RH) && !!VH(EH.directions[1], EH, RH) && !!VH(EH.directions[2], EH, RH) && !!VH(RH.directions[0], EH, RH) && !!VH(RH.directions[1], EH, RH) && !!VH(RH.directions[2], EH, RH) && !!VH(hH.x.Cross(EH.directions[0], RH.directions[0]), EH, RH) && !!VH(hH.x.Cross(EH.directions[0], RH.directions[1]), EH, RH) && !!VH(hH.x.Cross(EH.directions[0], RH.directions[2]), EH, RH) && !!VH(hH.x.Cross(EH.directions[1], RH.directions[0]), EH, RH) && !!VH(hH.x.Cross(EH.directions[1], RH.directions[1]), EH, RH) && !!VH(hH.x.Cross(EH.directions[1], RH.directions[2]), EH, RH) && !!VH(hH.x.Cross(EH.directions[2], RH.directions[0]), EH, RH) && !!VH(hH.x.Cross(EH.directions[2], RH.directions[1]), EH, RH) && !!VH(hH.x.Cross(EH.directions[2], RH.directions[2]), EH, RH);
      }
    }
    YH._TmpVector3 = (0, RH.b)(2, hH.x.Zero);
  },
  22259: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => TH,
      g: () => GH,
      i: () => eH,
      l: () => sH
    });
    var RH = EH(22267),
      hH = EH(21764);
    function TH(HH) {
      -1 === HH.indexOf("vClipPlane") && HH.push("vClipPlane"), -1 === HH.indexOf("vClipPlane2") && HH.push("vClipPlane2"), -1 === HH.indexOf("vClipPlane3") && HH.push("vClipPlane3"), -1 === HH.indexOf("vClipPlane4") && HH.push("vClipPlane4"), -1 === HH.indexOf("vClipPlane5") && HH.push("vClipPlane5"), -1 === HH.indexOf("vClipPlane6") && HH.push("vClipPlane6");
    }
    function sH(HH, IH, EH) {
      var RH, hH, TH, sH, eH, GH;
      const AH = !!(null !== (RH = HH.clipPlane) && void 0 !== RH ? RH : IH.clipPlane),
        VH = !!(null !== (hH = HH.clipPlane2) && void 0 !== hH ? hH : IH.clipPlane2),
        YH = !!(null !== (TH = HH.clipPlane3) && void 0 !== TH ? TH : IH.clipPlane3),
        QH = !!(null !== (sH = HH.clipPlane4) && void 0 !== sH ? sH : IH.clipPlane4),
        JH = !!(null !== (eH = HH.clipPlane5) && void 0 !== eH ? eH : IH.clipPlane5),
        OH = !!(null !== (GH = HH.clipPlane6) && void 0 !== GH ? GH : IH.clipPlane6);
      AH && EH.push("#define CLIPPLANE"), VH && EH.push("#define CLIPPLANE2"), YH && EH.push("#define CLIPPLANE3"), QH && EH.push("#define CLIPPLANE4"), JH && EH.push("#define CLIPPLANE5"), OH && EH.push("#define CLIPPLANE6");
    }
    function eH(HH, IH, EH) {
      var RH, hH, TH, sH, eH, GH;
      let AH = !1;
      const VH = !!(null !== (RH = HH.clipPlane) && void 0 !== RH ? RH : IH.clipPlane),
        YH = !!(null !== (hH = HH.clipPlane2) && void 0 !== hH ? hH : IH.clipPlane2),
        QH = !!(null !== (TH = HH.clipPlane3) && void 0 !== TH ? TH : IH.clipPlane3),
        JH = !!(null !== (sH = HH.clipPlane4) && void 0 !== sH ? sH : IH.clipPlane4),
        OH = !!(null !== (eH = HH.clipPlane5) && void 0 !== eH ? eH : IH.clipPlane5),
        rH = !!(null !== (GH = HH.clipPlane6) && void 0 !== GH ? GH : IH.clipPlane6);
      return EH.CLIPPLANE !== VH && (EH.CLIPPLANE = VH, AH = !0), EH.CLIPPLANE2 !== YH && (EH.CLIPPLANE2 = YH, AH = !0), EH.CLIPPLANE3 !== QH && (EH.CLIPPLANE3 = QH, AH = !0), EH.CLIPPLANE4 !== JH && (EH.CLIPPLANE4 = JH, AH = !0), EH.CLIPPLANE5 !== OH && (EH.CLIPPLANE5 = OH, AH = !0), EH.CLIPPLANE6 !== rH && (EH.CLIPPLANE6 = rH, AH = !0), AH;
    }
    function GH(HH, IH, EH) {
      var RH, hH, TH, sH, eH, GH;
      let VH = null !== (RH = IH.clipPlane) && void 0 !== RH ? RH : EH.clipPlane;
      AH(HH, "vClipPlane", VH), VH = null !== (hH = IH.clipPlane2) && void 0 !== hH ? hH : EH.clipPlane2, AH(HH, "vClipPlane2", VH), VH = null !== (TH = IH.clipPlane3) && void 0 !== TH ? TH : EH.clipPlane3, AH(HH, "vClipPlane3", VH), VH = null !== (sH = IH.clipPlane4) && void 0 !== sH ? sH : EH.clipPlane4, AH(HH, "vClipPlane4", VH), VH = null !== (eH = IH.clipPlane5) && void 0 !== eH ? eH : EH.clipPlane5, AH(HH, "vClipPlane5", VH), VH = null !== (GH = IH.clipPlane6) && void 0 !== GH ? GH : EH.clipPlane6, AH(HH, "vClipPlane6", VH);
    }
    function AH(HH, IH, EH) {
      if (EH) {
        var TH;
        const sH = (null === (TH = RH.e.kh()) || void 0 === TH ? void 0 : TH.floatingOriginOffset) || hH.x.ZeroReadOnly;
        HH.setFloat4(IH, EH.normal.x, EH.normal.y, EH.normal.z, EH.d + hH.x.Dot(EH.normal, sH));
      }
    }
  },
  22501: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => RH
    });
    class RH {
      constructor() {
        this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null;
      }
      unBindMesh() {
        this._mesh = null;
      }
      addFallback(HH, IH) {
        this._defines[HH] || (HH < this._currentRank && (this._currentRank = HH), HH > this._maxRank && (this._maxRank = HH), this._defines[HH] = new Array()), this._defines[HH].push(IH);
      }
      addCPUSkinningFallback(HH, IH) {
        this._mesh = IH, HH < this._currentRank && (this._currentRank = HH), HH > this._maxRank && (this._maxRank = HH);
      }
      get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank;
      }
      reduce(HH, IH) {
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
          this._mesh.computeBonesUsingShaders = !1, HH = HH.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), IH._bonesComputationForcedToCPU = !0;
          const EH = this._mesh.kh();
          for (let HH = 0; HH < EH.meshes.length; HH++) {
            const RH = EH.meshes[HH];
            if (RH.material) {
              if (RH.computeBonesUsingShaders && 0 !== RH.numBoneInfluencers) if (RH.material.getEffect() === IH) RH.computeBonesUsingShaders = !1;else if (RH.BJ) for (const HH of RH.BJ) {
                if (HH.effect === IH) {
                  RH.computeBonesUsingShaders = !1;
                  break;
                }
              }
            } else !this._mesh.material && RH.computeBonesUsingShaders && RH.numBoneInfluencers > 0 && (RH.computeBonesUsingShaders = !1);
          }
        } else {
          const IH = this._defines[this._currentRank];
          if (IH) for (let EH = 0; EH < IH.length; EH++) HH = HH.replace("#define " + IH[EH], "");
          this._currentRank++;
        }
        return HH;
      }
    }
  },
  22248: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => iI
    });
    var RH = EH(17),
      hH = EH(21947),
      TH = EH(21956),
      sH = EH(21819),
      eH = EH(21786),
      GH = EH(21782),
      AH = EH(22187),
      VH = EH(22235),
      YH = EH(21832),
      QH = EH(21990),
      JH = EH(22215),
      OH = EH(21972);
    let rH = (() => {
      var HH;
      let IH,
        EH,
        RH,
        sH,
        eH,
        GH,
        AH,
        VH,
        YH,
        QH,
        JH,
        rH,
        FH = [];
      return HH = class {
        constructor() {
          this._func = (0, hH.j)(this, FH), this.reset();
        }
        reset() {
          this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpStencilDepthPass = 7681;
        }
        get func() {
          return this._func;
        }
        set func(HH) {
          this._func = HH;
        }
        get backFunc() {
          return this._backFunc;
        }
        set backFunc(HH) {
          this._backFunc = HH;
        }
        get funcRef() {
          return this._funcRef;
        }
        set funcRef(HH) {
          this._funcRef = HH;
        }
        get funcMask() {
          return this._funcMask;
        }
        set funcMask(HH) {
          this._funcMask = HH;
        }
        get opStencilFail() {
          return this._opStencilFail;
        }
        set opStencilFail(HH) {
          this._opStencilFail = HH;
        }
        get opDepthFail() {
          return this._opDepthFail;
        }
        set opDepthFail(HH) {
          this._opDepthFail = HH;
        }
        get opStencilDepthPass() {
          return this._opStencilDepthPass;
        }
        set opStencilDepthPass(HH) {
          this._opStencilDepthPass = HH;
        }
        get backOpStencilFail() {
          return this._backOpStencilFail;
        }
        set backOpStencilFail(HH) {
          this._backOpStencilFail = HH;
        }
        get backOpDepthFail() {
          return this._backOpDepthFail;
        }
        set backOpDepthFail(HH) {
          this._backOpDepthFail = HH;
        }
        get backOpStencilDepthPass() {
          return this._backOpStencilDepthPass;
        }
        set backOpStencilDepthPass(HH) {
          this._backOpStencilDepthPass = HH;
        }
        get mask() {
          return this._mask;
        }
        set mask(HH) {
          this._mask = HH;
        }
        get enabled() {
          return this._enabled;
        }
        set enabled(HH) {
          this._enabled = HH;
        }
        getClassName() {
          return "MaterialStencilState";
        }
        copyTo(HH) {
          OH.c.Clone(() => HH, this);
        }
        serialize() {
          return OH.c.Serialize(this);
        }
        parse(HH, IH, EH) {
          OH.c.Parse(() => this, HH, IH, EH);
        }
      }, (() => {
        const OH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IH = [(0, TH.K)()], EH = [(0, TH.K)()], RH = [(0, TH.K)()], sH = [(0, TH.K)()], eH = [(0, TH.K)()], GH = [(0, TH.K)()], AH = [(0, TH.K)()], VH = [(0, TH.K)()], YH = [(0, TH.K)()], QH = [(0, TH.K)()], JH = [(0, TH.K)()], rH = [(0, TH.K)()], (0, hH.i)(HH, null, IH, {
          kind: "getter",
          name: "func",
          static: !1,
          private: !1,
          access: {
            has: HH => "func" in HH,
            get: HH => HH.func
          },
          metadata: OH
        }, null, FH), (0, hH.i)(HH, null, EH, {
          kind: "getter",
          name: "backFunc",
          static: !1,
          private: !1,
          access: {
            has: HH => "backFunc" in HH,
            get: HH => HH.backFunc
          },
          metadata: OH
        }, null, FH), (0, hH.i)(HH, null, RH, {
          kind: "getter",
          name: "funcRef",
          static: !1,
          private: !1,
          access: {
            has: HH => "funcRef" in HH,
            get: HH => HH.funcRef
          },
          metadata: OH
        }, null, FH), (0, hH.i)(HH, null, sH, {
          kind: "getter",
          name: "funcMask",
          static: !1,
          private: !1,
          access: {
            has: HH => "funcMask" in HH,
            get: HH => HH.funcMask
          },
          metadata: OH
        }, null, FH), (0, hH.i)(HH, null, eH, {
          kind: "getter",
          name: "opStencilFail",
          static: !1,
          private: !1,
          access: {
            has: HH => "opStencilFail" in HH,
            get: HH => HH.opStencilFail
          },
          metadata: OH
        }, null, FH), (0, hH.i)(HH, null, GH, {
          kind: "getter",
          name: "opDepthFail",
          static: !1,
          private: !1,
          access: {
            has: HH => "opDepthFail" in HH,
            get: HH => HH.opDepthFail
          },
          metadata: OH
        }, null, FH), (0, hH.i)(HH, null, AH, {
          kind: "getter",
          name: "opStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: HH => "opStencilDepthPass" in HH,
            get: HH => HH.opStencilDepthPass
          },
          metadata: OH
        }, null, FH), (0, hH.i)(HH, null, VH, {
          kind: "getter",
          name: "backOpStencilFail",
          static: !1,
          private: !1,
          access: {
            has: HH => "backOpStencilFail" in HH,
            get: HH => HH.backOpStencilFail
          },
          metadata: OH
        }, null, FH), (0, hH.i)(HH, null, YH, {
          kind: "getter",
          name: "backOpDepthFail",
          static: !1,
          private: !1,
          access: {
            has: HH => "backOpDepthFail" in HH,
            get: HH => HH.backOpDepthFail
          },
          metadata: OH
        }, null, FH), (0, hH.i)(HH, null, QH, {
          kind: "getter",
          name: "backOpStencilDepthPass",
          static: !1,
          private: !1,
          access: {
            has: HH => "backOpStencilDepthPass" in HH,
            get: HH => HH.backOpStencilDepthPass
          },
          metadata: OH
        }, null, FH), (0, hH.i)(HH, null, JH, {
          kind: "getter",
          name: "mask",
          static: !1,
          private: !1,
          access: {
            has: HH => "mask" in HH,
            get: HH => HH.mask
          },
          metadata: OH
        }, null, FH), (0, hH.i)(HH, null, rH, {
          kind: "getter",
          name: "enabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "enabled" in HH,
            get: HH => HH.enabled
          },
          metadata: OH
        }, null, FH), OH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OH
        });
      })(), HH;
    })();
    var FH = EH(22250),
      MH = EH(22147),
      NH = EH(21856);
    let iI = (() => {
      var HH;
      let IH,
        EH,
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
        WH,
        BH,
        fH,
        aH,
        nH,
        pH,
        dH,
        uH,
        lH,
        KH,
        wH,
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
        JI = [],
        OI = [],
        rI = [],
        FI = [],
        MI = [],
        NI = [],
        iE = [],
        DI = [],
        PI = [],
        XI = [],
        mE = [],
        ZI = [],
        qI = [],
        LI = [],
        gI = [],
        yI = [],
        oI = [],
        kE = [],
        CI = [],
        cI = [],
        UI = [],
        WI = [],
        BI = [],
        fI = [],
        aI = [],
        nI = [],
        pI = [],
        dI = [],
        uI = [],
        lI = [],
        KI = [];
      return HH = class {
        get useVertexPulling() {
          return this._useVertexPulling;
        }
        set useVertexPulling(IH) {
          this._useVertexPulling !== IH && (this._useVertexPulling = IH, this.JO(HH.MiscDirtyFlag));
        }
        get _supportGlowLayer() {
          return !1;
        }
        set _glowModeEnabled(HH) {}
        get shaderLanguage() {
          return this._shaderLanguage;
        }
        get canRenderToMRT() {
          return !1;
        }
        set alpha(IH) {
          if (this._alpha === IH) return;
          const EH = this._alpha;
          this._alpha = IH, 1 !== EH && 1 !== IH || this.JO(HH.MiscDirtyFlag + HH.PrePassDirtyFlag);
        }
        get alpha() {
          return this._alpha;
        }
        set backFaceCulling(IH) {
          this._backFaceCulling !== IH && (this._backFaceCulling = IH, this.JO(HH.TextureDirtyFlag));
        }
        get backFaceCulling() {
          return this._backFaceCulling;
        }
        set textureRepetitionMode(IH) {
          const EH = Math.max(0, Math.min(0 | IH, 4));
          this._textureRepetitionMode !== EH && (this._textureRepetitionMode = EH, this.JO(HH.TextureDirtyFlag));
        }
        get textureRepetitionMode() {
          return this._textureRepetitionMode;
        }
        set cullBackFaces(IH) {
          this._cullBackFaces !== IH && (this._cullBackFaces = IH, this.JO(HH.TextureDirtyFlag));
        }
        get cullBackFaces() {
          return this._cullBackFaces;
        }
        get blockDirtyMechanism() {
          return this._blockDirtyMechanism;
        }
        set blockDirtyMechanism(HH) {
          this._blockDirtyMechanism !== HH && (this._blockDirtyMechanism = HH, HH || this.wY());
        }
        atomicMaterialsUpdate(HH) {
          this.blockDirtyMechanism = !0;
          try {
            HH(this);
          } finally {
            this.blockDirtyMechanism = !1;
          }
        }
        get hasRenderTargetTextures() {
          return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures;
        }
        set onDispose(HH) {
          this._onDisposeObserver && this.AM.remove(this._onDisposeObserver), this._onDisposeObserver = this.AM.add(HH);
        }
        get onBindObservable() {
          return this._onBindObservable || (this._onBindObservable = new eH.e()), this._onBindObservable;
        }
        set onBind(HH) {
          this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(HH);
        }
        get onUnBindObservable() {
          return this._onUnBindObservable || (this._onUnBindObservable = new eH.e()), this._onUnBindObservable;
        }
        get onEffectCreatedObservable() {
          return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new eH.e()), this._onEffectCreatedObservable;
        }
        set alphaMode(HH) {
          this._alphaMode[0] = HH;
        }
        get alphaMode() {
          return this._alphaMode[0];
        }
        get alphaModes() {
          return this._alphaMode;
        }
        setAlphaMode(IH) {
          let EH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this._alphaMode[EH] !== IH && (this._alphaMode[EH] = IH, this.JO(HH.TextureDirtyFlag));
        }
        set needDepthPrePass(HH) {
          this._needDepthPrePass !== HH && (this._needDepthPrePass = HH, this._needDepthPrePass && (this.checkReadyOnEveryCall = !0));
        }
        get needDepthPrePass() {
          return this._needDepthPrePass;
        }
        get isPrePassCapable() {
          return !1;
        }
        set fogEnabled(IH) {
          this._fogEnabled !== IH && (this._fogEnabled = IH, this.JO(HH.MiscDirtyFlag));
        }
        get fogEnabled() {
          return this._fogEnabled;
        }
        get wireframe() {
          switch (this._fillMode) {
            case HH.WireFrameFillMode:
            case HH.LineListDrawMode:
            case HH.LineLoopDrawMode:
            case HH.LineStripDrawMode:
              return !0;
          }
          return this._scene.forceWireframe;
        }
        set wireframe(IH) {
          this.fillMode = IH ? HH.WireFrameFillMode : HH.TriangleFillMode;
        }
        get pointsCloud() {
          switch (this._fillMode) {
            case HH.PointFillMode:
            case HH.PointListDrawMode:
              return !0;
          }
          return this._scene.forcePointsCloud;
        }
        set pointsCloud(IH) {
          this.fillMode = IH ? HH.PointFillMode : HH.TriangleFillMode;
        }
        get fillMode() {
          return this._fillMode;
        }
        set fillMode(IH) {
          this._fillMode !== IH && (this._fillMode = IH, this.JO(HH.MiscDirtyFlag));
        }
        get useLogarithmicDepth() {
          return this._useLogarithmicDepth;
        }
        set useLogarithmicDepth(HH) {
          const IH = this.kh().getEngine().getCaps().fragmentDepthSupported;
          HH && !IH && YH.e.Warn("Logarithmic depth has been requested for a material on a device that doesn't support it."), this._useLogarithmicDepth = HH && IH, this._markAllSubMeshesAsMiscDirty();
        }
        get isVertexOutputInvariant() {
          return this._isVertexOutputInvariant;
        }
        set isVertexOutputInvariant(HH) {
          this._isVertexOutputInvariant !== HH && (this._isVertexOutputInvariant = HH, this._markAllSubMeshesAsMiscDirty());
        }
        _getDrawWrapper() {
          return this._drawWrapper;
        }
        _setDrawWrapper(HH) {
          this._drawWrapper = HH;
        }
        constructor(IH, EH, RH) {
          let TH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          this.customShaderNameResolve = (0, hH.j)(this, zH), this.shadowDepthWrapper = null, this.allowShaderHotSwapping = !0, this._shaderLanguage = 0, this._forceGLSL = !1, this._useVertexPulling = !1, this.id = (0, hH.j)(this, tH, void 0), this.uniqueId = ((0, hH.j)(this, jI), (0, hH.j)(this, vH, void 0)), this._loadedUniqueId = (0, hH.j)(this, bH), this.name = (0, hH.j)(this, SH, void 0), this.metadata = ((0, hH.j)(this, xH), (0, hH.j)(this, HI, null)), this._internalMetadata = (0, hH.j)(this, II), this.reservedDataStore = null, this.checkReadyOnEveryCall = (0, hH.j)(this, EI, !1), this.checkReadyOnlyOnce = ((0, hH.j)(this, RI), (0, hH.j)(this, hI, !1)), this.state = ((0, hH.j)(this, TI), (0, hH.j)(this, sI, "")), this._alpha = ((0, hH.j)(this, eI), (0, hH.j)(this, GI, 1)), this.inspectableCustomProperties = (0, hH.j)(this, AI), this._backFaceCulling = (0, hH.j)(this, VI, !0), this._textureRepetitionMode = ((0, hH.j)(this, YI), (0, hH.j)(this, QI, 0)), this.textureRepetitionHexTilingParams = ((0, hH.j)(this, JI), (0, hH.j)(this, OI, [1, .6, 7, .5])), this._cullBackFaces = ((0, hH.j)(this, rI), (0, hH.j)(this, FI, !0)), this._blockDirtyMechanism = ((0, hH.j)(this, MI), !1), this.sideOrientation = (0, hH.j)(this, NI, null), this.onCompiled = ((0, hH.j)(this, iE), null), this.onError = null, this.getRenderTargetTextures = null, this.doNotSerialize = !1, this._storeEffectOnSubMeshes = !1, this.animations = null, this.AM = new eH.e(), this._onDisposeObserver = null, this._onUnBindObservable = null, this._onBindObserver = null, this._alphaMode = (0, hH.j)(this, DI, [2]), this._needDepthPrePass = ((0, hH.j)(this, PI), (0, hH.j)(this, XI, !1)), this.disableDepthWrite = ((0, hH.j)(this, mE), (0, hH.j)(this, ZI, !1)), this.disableColorWrite = ((0, hH.j)(this, qI), (0, hH.j)(this, LI, !1)), this.forceDepthWrite = ((0, hH.j)(this, gI), (0, hH.j)(this, yI, !1)), this.depthFunction = ((0, hH.j)(this, oI), (0, hH.j)(this, kE, 0)), this.separateCullingPass = ((0, hH.j)(this, CI), (0, hH.j)(this, cI, !1)), this._fogEnabled = ((0, hH.j)(this, UI), (0, hH.j)(this, WI, !0)), this.pointSize = ((0, hH.j)(this, BI), (0, hH.j)(this, fI, 1)), this.zOffset = ((0, hH.j)(this, aI), (0, hH.j)(this, nI, 0)), this.zOffsetUnits = ((0, hH.j)(this, pI), (0, hH.j)(this, dI, 0)), this.clipPlane = (0, hH.j)(this, uI), this.LF = new rH(), this._isVertexOutputInvariant = (0, hH.j)(this, lI, HH.ForceVertexOutputInvariant), this._materialContext = (0, hH.j)(this, KI), this._useUBO = !1, this._fillMode = HH.TriangleFillMode, this._cachedDepthWriteState = !1, this._cachedColorWriteState = !1, this._cachedDepthFunctionState = 0, this._indexInSceneMaterialArray = -1, this.meshMap = null, this._parentContainer = null, this._uniformBufferLayoutBuilt = !1, this._eventInfo = {}, this._callbackPluginEventGeneric = () => {}, this._callbackPluginEventIsReadyForSubMesh = () => {}, this._callbackPluginEventPrepareDefines = () => {}, this._callbackPluginEventPrepareDefinesBeforeAttributes = () => {}, this._callbackPluginEventHardBindForSubMesh = () => {}, this._callbackPluginEventBindForSubMesh = () => {}, this._callbackPluginEventHasRenderTargetTextures = () => {}, this._callbackPluginEventFillRenderTargetTextures = () => {}, this._transparencyMode = null, this.name = IH;
          const AH = EH || GH.e.LastCreatedScene;
          AH && (this._scene = AH, this._dirtyCallbacks = {}, this._forceGLSL = TH, this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this), this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this), this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this), this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this), this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this), this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this), this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this), this.id = IH || sH.i.RandomId(), this.uniqueId = this._scene.getUniqueId(), this._materialContext = this._scene.getEngine().createMaterialContext(), this._drawWrapper = new JH.d(this._scene.getEngine(), !1), this._drawWrapper.materialContext = this._materialContext, this._uniformBuffer = new VH.e(this._scene.getEngine(), void 0, void 0, IH), this._useUBO = this.kh().getEngine().supportsUniformBuffers, this._createUniformBuffer(), RH || this._scene.addMaterial(this), this._scene.useMaterialMeshMap && (this.meshMap = {}), HH.OnEventObservable.notifyObservers(this, 1));
        }
        _createUniformBuffer() {
          var HH;
          const IH = this.kh().getEngine();
          null === (HH = this._uniformBuffer) || void 0 === HH || HH.dispose(), IH.isWebGPU && !this._forceGLSL ? (this._uniformBuffer = new VH.e(IH, void 0, void 0, this.name, !0), this._shaderLanguage = 1) : this._uniformBuffer = new VH.e(this._scene.getEngine(), void 0, void 0, this.name), this._uniformBufferLayoutBuilt = !1;
        }
        toString(HH) {
          return "Name: " + this.name;
        }
        getClassName() {
          return "Material";
        }
        get _isMaterial() {
          return !0;
        }
        get isFrozen() {
          return this.checkReadyOnlyOnce;
        }
        freeze() {
          this.wY(), this.checkReadyOnlyOnce = !0;
        }
        HR() {
          this.wY(), this.checkReadyOnlyOnce = !1;
        }
        isReady(HH, IH) {
          return !0;
        }
        isReadyForSubMesh(HH, IH, EH) {
          const RH = IH.materialDefines;
          return !!RH && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = RH, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh);
        }
        getEffect() {
          return this._drawWrapper.effect;
        }
        kh() {
          return this._scene;
        }
        _getEffectiveOrientation(HH) {
          return null !== this.sideOrientation ? this.sideOrientation : HH.sideOrientation;
        }
        get SY() {
          return this._transparencyMode;
        }
        set SY(HH) {
          this._transparencyMode = HH;
        }
        get _hasTransparencyMode() {
          return null != this._transparencyMode;
        }
        get _transparencyModeIsBlend() {
          return this._transparencyMode === HH.MATERIAL_ALPHABLEND || this._transparencyMode === HH.MATERIAL_ALPHATESTANDBLEND;
        }
        get _transparencyModeIsTest() {
          return this._transparencyMode === HH.MATERIAL_ALPHATEST || this._transparencyMode === HH.MATERIAL_ALPHATESTANDBLEND;
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === HH.MATERIAL_OPAQUE || this._transparencyMode === HH.MATERIAL_ALPHATEST;
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && this.alpha < 1;
        }
        needAlphaBlendingForMesh(HH) {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : HH.visibility < 1 || !this._disableAlphaBlending && (HH.hasVertexAlpha || this.needAlphaBlending());
        }
        needAlphaTesting() {
          return !!this._hasTransparencyMode && this._transparencyModeIsTest;
        }
        needAlphaTestingForMesh(HH) {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.needAlphaBlendingForMesh(HH) && this.needAlphaTesting();
        }
        getAlphaTestTexture() {
          return null;
        }
        wY() {
          let IH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const EH = this.kh().meshes;
          for (const HH of EH) if (HH.BJ) for (const EH of HH.BJ) if (EH.sI() === this) for (const HH of EH._drawWrappers) HH && this._materialContext === HH.materialContext && (HH._wasPreviouslyReady = !1, HH._wasPreviouslyUsingInstances = null, HH._forceRebindOnNextCall = IH);
          IH && this.JO(HH.AllDirtyFlag);
        }
        _preBind(IH) {
          let EH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const RH = this._scene.getEngine(),
            hH = (null == EH ? this.sideOrientation : EH) === HH.ClockWiseSideOrientation,
            TH = IH || this._getDrawWrapper();
          return (0, MH.b)(TH) && TH.materialContext && (TH.materialContext.useVertexPulling = this.useVertexPulling), RH.enableEffect(TH), RH.setState(this.backFaceCulling, this.zOffset, !1, hH, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.LF, this.zOffsetUnits), hH;
        }
        bind(HH, IH) {}
        buildUniformLayout() {
          const HH = this._uniformBuffer;
          this._eventInfo.ubo = HH, this._callbackPluginEventGeneric(8, this._eventInfo), HH.create(), this._uniformBufferLayoutBuilt = !0;
        }
        bindForSubMesh(HH, IH, EH) {
          const RH = EH._drawWrapper;
          this._eventInfo.subMesh = EH, this._callbackPluginEventBindForSubMesh(this._eventInfo), RH._forceRebindOnNextCall = !1;
        }
        bindOnlyWorldMatrix(HH) {}
        bindView(HH) {
          this._useUBO ? this._needToBindSceneUbo = !0 : HH.setMatrix("view", this.kh().getViewMatrix());
        }
        bindViewProjection(HH) {
          this._useUBO ? this._needToBindSceneUbo = !0 : (HH.setMatrix("viewProjection", this.kh().getTransformMatrix()), HH.setMatrix("projection", this.kh().getProjectionMatrix()), HH.setMatrix("inverseProjection", this.kh().getInverseProjectionMatrix()));
        }
        bindEyePosition(HH, IH) {
          this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(HH, IH);
        }
        _afterBind(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && IH && (this._needToBindSceneUbo = !1, (0, FH.w)(IH, this.kh().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = HH ? HH.visibility : 1, this._onBindObservable && HH && this._onBindObservable.notifyObservers(HH), this.disableDepthWrite) {
            const HH = this._scene.getEngine();
            this._cachedDepthWriteState = HH.getDepthWrite(), HH.setDepthWrite(!1);
          }
          if (this.disableColorWrite) {
            const HH = this._scene.getEngine();
            this._cachedColorWriteState = HH.getColorWrite(), HH.setColorWrite(!1);
          }
          if (0 !== this.depthFunction) {
            const HH = this._scene.getEngine();
            this._cachedDepthFunctionState = HH.getDepthFunction() || 0, HH.setDepthFunction(this.depthFunction);
          }
        }
        unbind() {
          if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
            this._scene.getEngine().setDepthFunction(this._cachedDepthFunctionState);
          }
          if (this.disableDepthWrite) {
            this._scene.getEngine().setDepthWrite(this._cachedDepthWriteState);
          }
          if (this.disableColorWrite) {
            this._scene.getEngine().setColorWrite(this._cachedColorWriteState);
          }
        }
        getAnimatables() {
          return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables;
        }
        getActiveTextures() {
          return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures;
        }
        hasTexture(HH) {
          return this._eventInfo.hasTexture = !1, this._eventInfo.texture = HH, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture;
        }
        clone(HH) {
          return null;
        }
        _clonePlugins(IH, EH) {
          const RH = {};
          if (this._serializePlugins(RH), HH._ParsePlugins(RH, IH, this._scene, EH), this.pluginManager) for (const HH of this.pluginManager._plugins) {
            const EH = IH.pluginManager.getPlugin(HH.name);
            EH && HH.copyTo(EH);
          }
        }
        getBindedMeshes() {
          if (this.meshMap) {
            const HH = [];
            for (const IH in this.meshMap) {
              const EH = this.meshMap[IH];
              EH && HH.push(EH);
            }
            return HH;
          }
          return this._scene.meshes.filter(HH => HH.material === this);
        }
        forceCompilation(HH, IH, EH, hH) {
          const TH = (0, RH.b)({
              clipPlane: !1,
              useInstances: !1
            }, EH),
            sH = this.kh(),
            eH = this.allowShaderHotSwapping;
          this.allowShaderHotSwapping = !1;
          const GH = () => {
            if (!this._scene || !this._scene.getEngine()) return;
            const EH = sH.clipPlane;
            if (TH.clipPlane && (sH.clipPlane = new QH.e(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
              let EH = !0,
                RH = null;
              if (HH.BJ) {
                const IH = new AH.c(0, 0, 0, 0, 0, HH, void 0, !1, !1);
                IH.materialDefines && (IH.materialDefines._renderId = -1), this.isReadyForSubMesh(HH, IH, TH.useInstances) || (IH.effect && IH.effect.getCompilationError() && IH.effect.allFallbacksProcessed() ? RH = IH.effect.getCompilationError() : (EH = !1, setTimeout(GH, 16)));
              }
              EH && (this.allowShaderHotSwapping = eH, RH && hH && hH(RH), IH && IH(this));
            } else this.isReady() ? (this.allowShaderHotSwapping = eH, IH && IH(this)) : setTimeout(GH, 16);
            TH.clipPlane && (sH.clipPlane = EH);
          };
          GH();
        }
        async forceCompilationAsync(HH, IH) {
          return await new Promise((EH, RH) => {
            this.forceCompilation(HH, () => {
              EH();
            }, IH, HH => {
              RH(HH);
            });
          });
        }
        JO(IH) {
          this.kh().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (HH._DirtyCallbackArray.length = 0, IH & HH.ImageProcessingDirtyFlag && HH._DirtyCallbackArray.push(HH._ImageProcessingDirtyCallBack), IH & HH.TextureDirtyFlag && HH._DirtyCallbackArray.push(HH._TextureDirtyCallBack), IH & HH.LightDirtyFlag && HH._DirtyCallbackArray.push(HH._LightsDirtyCallBack), IH & HH.FresnelDirtyFlag && HH._DirtyCallbackArray.push(HH._FresnelDirtyCallBack), IH & HH.AttributesDirtyFlag && HH._DirtyCallbackArray.push(HH._AttributeDirtyCallBack), IH & HH.MiscDirtyFlag && HH._DirtyCallbackArray.push(HH._MiscDirtyCallBack), IH & HH.PrePassDirtyFlag && HH._DirtyCallbackArray.push(HH._PrePassDirtyCallBack), HH._DirtyCallbackArray.length && this._markAllSubMeshesAsDirty(HH._RunDirtyCallBacks), this.kh().resetCachedMaterial());
        }
        resetDrawCache() {
          const HH = this.kh().meshes;
          for (const IH of HH) if (IH.BJ) for (const HH of IH.BJ) HH.sI() === this && HH.resetDrawCache();
        }
        _markAllSubMeshesAsDirty(HH) {
          const IH = this.kh();
          if (IH.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const EH = IH.meshes;
          for (const RH of EH) if (RH.BJ) for (const EH of RH.BJ) {
            if ((EH.sI() || (IH._hasDefaultMaterial ? IH.defaultMaterial : null)) === this) for (const IH of EH._drawWrappers) IH && IH.defines && IH.defines.markAllAsDirty && this._materialContext === IH.materialContext && HH(IH.defines);
          }
        }
        _markScenePrePassDirty() {
          if (this.kh().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
          const HH = this.kh().enablePrePassRenderer();
          HH && HH.JO();
        }
        _markAllSubMeshesAsAllDirty() {
          this._markAllSubMeshesAsDirty(HH._AllDirtyCallBack);
        }
        _markAllSubMeshesAsImageProcessingDirty() {
          this._markAllSubMeshesAsDirty(HH._ImageProcessingDirtyCallBack);
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._markAllSubMeshesAsDirty(HH._TextureDirtyCallBack);
        }
        _markAllSubMeshesAsFresnelDirty() {
          this._markAllSubMeshesAsDirty(HH._FresnelDirtyCallBack);
        }
        _markAllSubMeshesAsFresnelAndMiscDirty() {
          this._markAllSubMeshesAsDirty(HH._FresnelAndMiscDirtyCallBack);
        }
        _markAllSubMeshesAsLightsDirty() {
          this._markAllSubMeshesAsDirty(HH._LightsDirtyCallBack);
        }
        _markAllSubMeshesAsAttributesDirty() {
          this._markAllSubMeshesAsDirty(HH._AttributeDirtyCallBack);
        }
        _markAllSubMeshesAsMiscDirty() {
          this._markAllSubMeshesAsDirty(HH._MiscDirtyCallBack);
        }
        _markAllSubMeshesAsPrePassDirty() {
          this._markAllSubMeshesAsDirty(HH._PrePassDirtyCallBack);
        }
        _markAllSubMeshesAsTexturesAndMiscDirty() {
          this._markAllSubMeshesAsDirty(HH._TextureAndMiscDirtyCallBack);
        }
        _checkScenePerformancePriority() {
          if (0 !== this._scene.performancePriority) {
            this.checkReadyOnlyOnce = !0;
            const HH = this._scene.onScenePerformancePriorityChangedObservable.addOnce(() => {
              this.checkReadyOnlyOnce = !1;
            });
            this.AM.add(() => {
              this._scene.onScenePerformancePriorityChangedObservable.remove(HH);
            });
          }
        }
        setPrePassRenderer(HH) {
          return !1;
        }
        dispose(HH, IH, EH) {
          const RH = this.kh();
          if (RH.stopAnimation(this), RH.freeProcessedMaterials(), RH.removeMaterial(this), this._eventInfo.forceDisposeTextures = IH, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
            const HH = this._parentContainer.materials.indexOf(this);
            HH > -1 && this._parentContainer.materials.splice(HH, 1), this._parentContainer = null;
          }
          if (!0 !== EH) if (this.meshMap) for (const hH in this.meshMap) {
            const HH = this.meshMap[hH];
            this._disposeMeshResources(HH);
          } else {
            const HH = RH.meshes;
            for (const IH of HH) this._disposeMeshResources(IH);
          }
          this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.AM.notifyObservers(this), this.AM.clear(), this._onBindObservable && this._onBindObservable.clear(), this._onUnBindObservable && this._onUnBindObservable.clear(), this._onEffectCreatedObservable && this._onEffectCreatedObservable.clear(), this._eventInfo && (this._eventInfo = {});
        }
        _disposeMeshResources(HH) {
          if (!HH) return;
          const IH = HH.KN,
            EH = HH._internalAbstractMeshDataInfo._materialForRenderPass;
          if (this._storeEffectOnSubMeshes) {
            if (HH.BJ && EH) for (const hH of HH.BJ) {
              const HH = hH._drawWrappers;
              for (let TH = 0; TH < HH.length; TH++) {
                var RH;
                const sH = null === (RH = HH[TH]) || void 0 === RH ? void 0 : RH.effect;
                if (!sH) continue;
                EH[TH] === this && (null === IH || void 0 === IH || IH._releaseVertexArrayObject(sH), hH._removeDrawWrapper(TH, !0, !0));
              }
            }
          } else null === IH || void 0 === IH || IH._releaseVertexArrayObject(this._drawWrapper.effect);
          HH.material !== this || HH.pO || (HH.material = null);
        }
        serialize() {
          const HH = OH.c.Serialize(this);
          return HH.LF = this.LF.serialize(), HH.uniqueId = this.uniqueId, this._serializePlugins(HH), HH;
        }
        _serializePlugins(HH) {
          if (HH.plugins = {}, this.pluginManager) for (const IH of this.pluginManager._plugins) IH.doNotSerialize || (HH.plugins[IH.getClassName()] = IH.serialize());
        }
        static ParseAlphaMode(HH, IH) {
          void 0 !== HH._alphaMode ? IH._alphaMode = Array.isArray(HH._alphaMode) ? HH._alphaMode : [HH._alphaMode] : void 0 !== HH.alphaMode ? IH._alphaMode = Array.isArray(HH.alphaMode) ? HH.alphaMode : [HH.alphaMode] : IH._alphaMode = [2];
        }
        static Parse(IH, EH, RH) {
          if (IH.customType) {
            if ("BABYLON.PBRMaterial" === IH.customType && IH.overloadedAlbedo && (IH.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return YH.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library."), null;
          } else IH.customType = "BABYLON.StandardMaterial";
          const hH = sH.i.Instantiate(IH.customType).Parse(IH, EH, RH);
          return hH._loadedUniqueId = IH.uniqueId, HH.ParseAlphaMode(IH, hH), hH;
        }
        static _ParsePlugins(HH, IH, EH, RH) {
          if (HH.plugins) for (const eH in HH.plugins) {
            var hH, TH;
            const GH = HH.plugins[eH];
            let AH = null === (hH = IH.pluginManager) || void 0 === hH ? void 0 : hH.getPlugin(GH.name);
            if (!AH) {
              const HH = sH.i.Instantiate("BABYLON." + eH);
              HH && (AH = new HH(IH));
            }
            null === (TH = AH) || void 0 === TH || TH.parse(GH, EH, RH);
          }
        }
      }, (() => {
        const RH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IH = [(0, TH.K)()], EH = [(0, TH.K)()], NH = [(0, TH.K)()], iI = [(0, TH.K)()], DH = [(0, TH.K)()], PH = [(0, TH.K)()], XH = [(0, TH.K)()], mI = [(0, TH.K)("alpha")], ZH = [(0, TH.K)("backFaceCulling")], qH = [(0, TH.K)("textureRepetitionMode")], LH = [(0, TH.K)("textureRepetitionHexTilingParams")], gH = [(0, TH.K)("cullBackFaces")], yH = [(0, TH.K)()], oH = [(0, TH.K)()], kI = [(0, TH.K)()], CH = [(0, TH.K)()], cH = [(0, TH.K)()], UH = [(0, TH.K)()], WH = [(0, TH.K)()], BH = [(0, TH.K)()], fH = [(0, TH.K)("fogEnabled")], aH = [(0, TH.K)()], nH = [(0, TH.K)()], pH = [(0, TH.K)()], dH = [(0, TH.K)()], uH = [(0, TH.K)()], lH = [(0, TH.K)()], KH = [(0, TH.K)()], wH = [(0, TH.K)()], (0, hH.i)(HH, null, dH, {
          kind: "getter",
          name: "pointsCloud",
          static: !1,
          private: !1,
          access: {
            has: HH => "pointsCloud" in HH,
            get: HH => HH.pointsCloud
          },
          metadata: RH
        }, null, zH), (0, hH.i)(HH, null, uH, {
          kind: "getter",
          name: "fillMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "fillMode" in HH,
            get: HH => HH.fillMode
          },
          metadata: RH
        }, null, zH), (0, hH.i)(HH, null, lH, {
          kind: "getter",
          name: "useLogarithmicDepth",
          static: !1,
          private: !1,
          access: {
            has: HH => "useLogarithmicDepth" in HH,
            get: HH => HH.useLogarithmicDepth
          },
          metadata: RH
        }, null, zH), (0, hH.i)(HH, null, wH, {
          kind: "getter",
          name: "SY",
          static: !1,
          private: !1,
          access: {
            has: HH => "SY" in HH,
            get: HH => HH.SY
          },
          metadata: RH
        }, null, zH), (0, hH.i)(null, null, IH, {
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
          metadata: RH
        }, tH, jI), (0, hH.i)(null, null, EH, {
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
          metadata: RH
        }, vH, bH), (0, hH.i)(null, null, NH, {
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
          metadata: RH
        }, SH, xH), (0, hH.i)(null, null, iI, {
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
          metadata: RH
        }, HI, II), (0, hH.i)(null, null, DH, {
          kind: "field",
          name: "checkReadyOnEveryCall",
          static: !1,
          private: !1,
          access: {
            has: HH => "checkReadyOnEveryCall" in HH,
            get: HH => HH.checkReadyOnEveryCall,
            set: (HH, IH) => {
              HH.checkReadyOnEveryCall = IH;
            }
          },
          metadata: RH
        }, EI, RI), (0, hH.i)(null, null, PH, {
          kind: "field",
          name: "checkReadyOnlyOnce",
          static: !1,
          private: !1,
          access: {
            has: HH => "checkReadyOnlyOnce" in HH,
            get: HH => HH.checkReadyOnlyOnce,
            set: (HH, IH) => {
              HH.checkReadyOnlyOnce = IH;
            }
          },
          metadata: RH
        }, hI, TI), (0, hH.i)(null, null, XH, {
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
          metadata: RH
        }, sI, eI), (0, hH.i)(null, null, mI, {
          kind: "field",
          name: "_alpha",
          static: !1,
          private: !1,
          access: {
            has: HH => "_alpha" in HH,
            get: HH => HH._alpha,
            set: (HH, IH) => {
              HH._alpha = IH;
            }
          },
          metadata: RH
        }, GI, AI), (0, hH.i)(null, null, ZH, {
          kind: "field",
          name: "_backFaceCulling",
          static: !1,
          private: !1,
          access: {
            has: HH => "_backFaceCulling" in HH,
            get: HH => HH._backFaceCulling,
            set: (HH, IH) => {
              HH._backFaceCulling = IH;
            }
          },
          metadata: RH
        }, VI, YI), (0, hH.i)(null, null, qH, {
          kind: "field",
          name: "_textureRepetitionMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "_textureRepetitionMode" in HH,
            get: HH => HH._textureRepetitionMode,
            set: (HH, IH) => {
              HH._textureRepetitionMode = IH;
            }
          },
          metadata: RH
        }, QI, JI), (0, hH.i)(null, null, LH, {
          kind: "field",
          name: "textureRepetitionHexTilingParams",
          static: !1,
          private: !1,
          access: {
            has: HH => "textureRepetitionHexTilingParams" in HH,
            get: HH => HH.textureRepetitionHexTilingParams,
            set: (HH, IH) => {
              HH.textureRepetitionHexTilingParams = IH;
            }
          },
          metadata: RH
        }, OI, rI), (0, hH.i)(null, null, gH, {
          kind: "field",
          name: "_cullBackFaces",
          static: !1,
          private: !1,
          access: {
            has: HH => "_cullBackFaces" in HH,
            get: HH => HH._cullBackFaces,
            set: (HH, IH) => {
              HH._cullBackFaces = IH;
            }
          },
          metadata: RH
        }, FI, MI), (0, hH.i)(null, null, yH, {
          kind: "field",
          name: "sideOrientation",
          static: !1,
          private: !1,
          access: {
            has: HH => "sideOrientation" in HH,
            get: HH => HH.sideOrientation,
            set: (HH, IH) => {
              HH.sideOrientation = IH;
            }
          },
          metadata: RH
        }, NI, iE), (0, hH.i)(null, null, oH, {
          kind: "field",
          name: "_alphaMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "_alphaMode" in HH,
            get: HH => HH._alphaMode,
            set: (HH, IH) => {
              HH._alphaMode = IH;
            }
          },
          metadata: RH
        }, DI, PI), (0, hH.i)(null, null, kI, {
          kind: "field",
          name: "_needDepthPrePass",
          static: !1,
          private: !1,
          access: {
            has: HH => "_needDepthPrePass" in HH,
            get: HH => HH._needDepthPrePass,
            set: (HH, IH) => {
              HH._needDepthPrePass = IH;
            }
          },
          metadata: RH
        }, XI, mE), (0, hH.i)(null, null, CH, {
          kind: "field",
          name: "disableDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: HH => "disableDepthWrite" in HH,
            get: HH => HH.disableDepthWrite,
            set: (HH, IH) => {
              HH.disableDepthWrite = IH;
            }
          },
          metadata: RH
        }, ZI, qI), (0, hH.i)(null, null, cH, {
          kind: "field",
          name: "disableColorWrite",
          static: !1,
          private: !1,
          access: {
            has: HH => "disableColorWrite" in HH,
            get: HH => HH.disableColorWrite,
            set: (HH, IH) => {
              HH.disableColorWrite = IH;
            }
          },
          metadata: RH
        }, LI, gI), (0, hH.i)(null, null, UH, {
          kind: "field",
          name: "forceDepthWrite",
          static: !1,
          private: !1,
          access: {
            has: HH => "forceDepthWrite" in HH,
            get: HH => HH.forceDepthWrite,
            set: (HH, IH) => {
              HH.forceDepthWrite = IH;
            }
          },
          metadata: RH
        }, yI, oI), (0, hH.i)(null, null, WH, {
          kind: "field",
          name: "depthFunction",
          static: !1,
          private: !1,
          access: {
            has: HH => "depthFunction" in HH,
            get: HH => HH.depthFunction,
            set: (HH, IH) => {
              HH.depthFunction = IH;
            }
          },
          metadata: RH
        }, kE, CI), (0, hH.i)(null, null, BH, {
          kind: "field",
          name: "separateCullingPass",
          static: !1,
          private: !1,
          access: {
            has: HH => "separateCullingPass" in HH,
            get: HH => HH.separateCullingPass,
            set: (HH, IH) => {
              HH.separateCullingPass = IH;
            }
          },
          metadata: RH
        }, cI, UI), (0, hH.i)(null, null, fH, {
          kind: "field",
          name: "_fogEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "_fogEnabled" in HH,
            get: HH => HH._fogEnabled,
            set: (HH, IH) => {
              HH._fogEnabled = IH;
            }
          },
          metadata: RH
        }, WI, BI), (0, hH.i)(null, null, aH, {
          kind: "field",
          name: "pointSize",
          static: !1,
          private: !1,
          access: {
            has: HH => "pointSize" in HH,
            get: HH => HH.pointSize,
            set: (HH, IH) => {
              HH.pointSize = IH;
            }
          },
          metadata: RH
        }, fI, aI), (0, hH.i)(null, null, nH, {
          kind: "field",
          name: "zOffset",
          static: !1,
          private: !1,
          access: {
            has: HH => "zOffset" in HH,
            get: HH => HH.zOffset,
            set: (HH, IH) => {
              HH.zOffset = IH;
            }
          },
          metadata: RH
        }, nI, pI), (0, hH.i)(null, null, pH, {
          kind: "field",
          name: "zOffsetUnits",
          static: !1,
          private: !1,
          access: {
            has: HH => "zOffsetUnits" in HH,
            get: HH => HH.zOffsetUnits,
            set: (HH, IH) => {
              HH.zOffsetUnits = IH;
            }
          },
          metadata: RH
        }, dI, uI), (0, hH.i)(null, null, KH, {
          kind: "field",
          name: "_isVertexOutputInvariant",
          static: !1,
          private: !1,
          access: {
            has: HH => "_isVertexOutputInvariant" in HH,
            get: HH => HH._isVertexOutputInvariant,
            set: (HH, IH) => {
              HH._isVertexOutputInvariant = IH;
            }
          },
          metadata: RH
        }, lI, KI), RH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RH
        });
      })(), HH.TriangleFillMode = 0, HH.WireFrameFillMode = 1, HH.PointFillMode = 2, HH.PointListDrawMode = 3, HH.LineListDrawMode = 4, HH.LineLoopDrawMode = 5, HH.LineStripDrawMode = 6, HH.TriangleStripDrawMode = 7, HH.TriangleFanDrawMode = 8, HH.ClockWiseSideOrientation = 0, HH.CounterClockWiseSideOrientation = 1, HH.ImageProcessingDirtyFlag = 64, HH.TextureDirtyFlag = 1, HH.LightDirtyFlag = 2, HH.FresnelDirtyFlag = 4, HH.AttributesDirtyFlag = 8, HH.MiscDirtyFlag = 16, HH.PrePassDirtyFlag = 32, HH.AllDirtyFlag = 127, HH.MATERIAL_OPAQUE = 0, HH.MATERIAL_ALPHATEST = 1, HH.MATERIAL_ALPHABLEND = 2, HH.MATERIAL_ALPHATESTANDBLEND = 3, HH.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0, HH.MATERIAL_NORMALBLENDMETHOD_RNM = 1, HH.LIGHTFALLOFF_PHYSICAL = 0, HH.LIGHTFALLOFF_GLTF = 1, HH.LIGHTFALLOFF_STANDARD = 2, HH.OnEventObservable = new eH.e(), HH.ForceVertexOutputInvariant = !1, HH._AllDirtyCallBack = HH => HH.markAllAsDirty(), HH._ImageProcessingDirtyCallBack = HH => HH.markAsImageProcessingDirty(), HH._TextureDirtyCallBack = HH => HH.markAsTexturesDirty(), HH._FresnelDirtyCallBack = HH => HH.markAsFresnelDirty(), HH._MiscDirtyCallBack = HH => HH.markAsMiscDirty(), HH._PrePassDirtyCallBack = HH => HH.markAsPrePassDirty(), HH._LightsDirtyCallBack = HH => HH.markAsLightDirty(), HH._AttributeDirtyCallBack = HH => HH.markAsAttributesDirty(), HH._FresnelAndMiscDirtyCallBack = IH => {
        HH._FresnelDirtyCallBack(IH), HH._MiscDirtyCallBack(IH);
      }, HH._TextureAndMiscDirtyCallBack = IH => {
        HH._TextureDirtyCallBack(IH), HH._MiscDirtyCallBack(IH);
      }, HH._DirtyCallbackArray = [], HH._RunDirtyCallBacks = IH => {
        for (const EH of HH._DirtyCallbackArray) EH(IH);
      }, HH;
    })();
    Object.getOwnPropertyDescriptor(iI.prototype, "pluginManager") || Object.defineProperty(iI.prototype, "pluginManager", (0, NH.f)("Material", "pluginManager"));
  },
  22276: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => hH
    });
    var RH = EH(22004);
    class hH {
      static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled;
      }
      static set DiffuseTextureEnabled(HH) {
        this._DiffuseTextureEnabled !== HH && (this._DiffuseTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled;
      }
      static set BaseWeightTextureEnabled(HH) {
        this._BaseWeightTextureEnabled !== HH && (this._BaseWeightTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled;
      }
      static set BaseDiffuseRoughnessTextureEnabled(HH) {
        this._BaseDiffuseRoughnessTextureEnabled !== HH && (this._BaseDiffuseRoughnessTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get DetailTextureEnabled() {
        return this._DetailTextureEnabled;
      }
      static set DetailTextureEnabled(HH) {
        this._DetailTextureEnabled !== HH && (this._DetailTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get DecalMapEnabled() {
        return this._DecalMapEnabled;
      }
      static set DecalMapEnabled(HH) {
        this._DecalMapEnabled !== HH && (this._DecalMapEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled;
      }
      static set AmbientTextureEnabled(HH) {
        this._AmbientTextureEnabled !== HH && (this._AmbientTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled;
      }
      static set OpacityTextureEnabled(HH) {
        this._OpacityTextureEnabled !== HH && (this._OpacityTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled;
      }
      static set ReflectionTextureEnabled(HH) {
        this._ReflectionTextureEnabled !== HH && (this._ReflectionTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled;
      }
      static set EmissiveTextureEnabled(HH) {
        this._EmissiveTextureEnabled !== HH && (this._EmissiveTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled;
      }
      static set SpecularTextureEnabled(HH) {
        this._SpecularTextureEnabled !== HH && (this._SpecularTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get BumpTextureEnabled() {
        return this._BumpTextureEnabled;
      }
      static set BumpTextureEnabled(HH) {
        this._BumpTextureEnabled !== HH && (this._BumpTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled;
      }
      static set LightmapTextureEnabled(HH) {
        this._LightmapTextureEnabled !== HH && (this._LightmapTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled;
      }
      static set RefractionTextureEnabled(HH) {
        this._RefractionTextureEnabled !== HH && (this._RefractionTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled;
      }
      static set ColorGradingTextureEnabled(HH) {
        this._ColorGradingTextureEnabled !== HH && (this._ColorGradingTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get FresnelEnabled() {
        return this._FresnelEnabled;
      }
      static set FresnelEnabled(HH) {
        this._FresnelEnabled !== HH && (this._FresnelEnabled = HH, RH.c.MarkAllMaterialsAsDirty(4));
      }
      static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled;
      }
      static set ClearCoatTextureEnabled(HH) {
        this._ClearCoatTextureEnabled !== HH && (this._ClearCoatTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled;
      }
      static set ClearCoatBumpTextureEnabled(HH) {
        this._ClearCoatBumpTextureEnabled !== HH && (this._ClearCoatBumpTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled;
      }
      static set ClearCoatTintTextureEnabled(HH) {
        this._ClearCoatTintTextureEnabled !== HH && (this._ClearCoatTintTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get SheenTextureEnabled() {
        return this._SheenTextureEnabled;
      }
      static set SheenTextureEnabled(HH) {
        this._SheenTextureEnabled !== HH && (this._SheenTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled;
      }
      static set AnisotropicTextureEnabled(HH) {
        this._AnisotropicTextureEnabled !== HH && (this._AnisotropicTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled;
      }
      static set ThicknessTextureEnabled(HH) {
        this._ThicknessTextureEnabled !== HH && (this._ThicknessTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled;
      }
      static set RefractionIntensityTextureEnabled(HH) {
        this._RefractionIntensityTextureEnabled !== HH && (this._RefractionIntensityTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled;
      }
      static set TranslucencyIntensityTextureEnabled(HH) {
        this._TranslucencyIntensityTextureEnabled !== HH && (this._TranslucencyIntensityTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled;
      }
      static set TranslucencyColorTextureEnabled(HH) {
        this._TranslucencyColorTextureEnabled !== HH && (this._TranslucencyColorTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
      static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled;
      }
      static set IridescenceTextureEnabled(HH) {
        this._IridescenceTextureEnabled !== HH && (this._IridescenceTextureEnabled = HH, RH.c.MarkAllMaterialsAsDirty(1));
      }
    }
    hH._DiffuseTextureEnabled = !0, hH._BaseWeightTextureEnabled = !0, hH._BaseDiffuseRoughnessTextureEnabled = !0, hH._DetailTextureEnabled = !0, hH._DecalMapEnabled = !0, hH._AmbientTextureEnabled = !0, hH._OpacityTextureEnabled = !0, hH._ReflectionTextureEnabled = !0, hH._EmissiveTextureEnabled = !0, hH._SpecularTextureEnabled = !0, hH._BumpTextureEnabled = !0, hH._LightmapTextureEnabled = !0, hH._RefractionTextureEnabled = !0, hH._ColorGradingTextureEnabled = !0, hH._FresnelEnabled = !0, hH._ClearCoatTextureEnabled = !0, hH._ClearCoatBumpTextureEnabled = !0, hH._ClearCoatTintTextureEnabled = !0, hH._SheenTextureEnabled = !0, hH._AnisotropicTextureEnabled = !0, hH._ThicknessTextureEnabled = !0, hH._RefractionIntensityTextureEnabled = !0, hH._TranslucencyIntensityTextureEnabled = !0, hH._TranslucencyColorTextureEnabled = !0, hH._IridescenceTextureEnabled = !0;
  },
  22250: (HH, IH, EH) => {
    EH.d(IH, {
      $: () => yH,
      D: () => gH,
      E: () => PH,
      I: () => qH,
      J: () => LH,
      L: () => JH,
      P: () => QH,
      Q: () => nH,
      R: () => UH,
      U: () => CH,
      W: () => kI,
      X: () => iI,
      b: () => oH,
      bb: () => pH,
      f: () => XH,
      fb: () => dH,
      gb: () => uH,
      hb: () => zH,
      i: () => YH,
      k: () => MH,
      l: () => NH,
      lb: () => KH,
      p: () => ZH,
      pb: () => wH,
      sb: () => OH,
      t: () => GH,
      v: () => rH,
      w: () => FH,
      z: () => DH
    });
    var RH = EH(21832),
      hH = EH(21782),
      TH = EH(22253),
      sH = EH(22259),
      eH = EH(22276);
    function GH(HH, IH, EH) {
      if (!HH || HH.LOGARITHMICDEPTH || HH.indexOf && HH.indexOf("LOGARITHMICDEPTH") >= 0) {
        const HH = EH.activeCamera;
        1 === HH.mode && RH.e.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), IH.setFloat("logarithmicDepthConstant", 2 / (Math.log(HH.IM + 1) / Math.LN2));
      }
    }
    const AH = {
        r: 0,
        g: 0,
        b: 0
      },
      VH = {
        NUM_MORPH_INFLUENCERS: 0,
        NORMAL: !1,
        TANGENT: !1,
        UV: !1,
        UV2: !1,
        COLOR: !1
      };
    function YH(HH, IH, EH) {
      let RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      EH && HH.fogEnabled && (!IH || IH.applyFog) && 0 !== HH.fogMode && (EH.setFloat4("vFogInfos", HH.fogMode, HH.fogStart, HH.fogEnd, HH.fogDensity), RH ? (HH.fogColor.toLinearSpaceToRef(AH, HH.getEngine().useExactSrgbConversions), EH.setColor3("vFogColor", AH)) : EH.setColor3("vFogColor", HH.fogColor));
    }
    function QH(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH) {
      const YH = HH.numMaxInfluencers || HH.numInfluencers;
      return YH <= 0 ? 0 : (IH.push("#define MORPHTARGETS"), HH.hasPositions && IH.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), HH.hasNormals && IH.push("#define MORPHTARGETTEXTURE_HASNORMALS"), HH.hasTangents && IH.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), HH.hasUVs && IH.push("#define MORPHTARGETTEXTURE_HASUVS"), HH.hasUV2s && IH.push("#define MORPHTARGETTEXTURE_HASUV2S"), HH.hasColors && IH.push("#define MORPHTARGETTEXTURE_HASCOLORS"), HH.supportsPositions && hH && IH.push("#define MORPHTARGETS_POSITION"), HH.supportsNormals && TH && IH.push("#define MORPHTARGETS_NORMAL"), HH.supportsTangents && sH && IH.push("#define MORPHTARGETS_TANGENT"), HH.supportsUVs && eH && IH.push("#define MORPHTARGETS_UV"), HH.supportsUV2s && GH && IH.push("#define MORPHTARGETS_UV2"), HH.supportsColors && AH && IH.push("#define MORPHTARGETS_COLOR"), IH.push("#define NUM_MORPH_INFLUENCERS " + YH), HH.isUsingTextureForTargets && IH.push("#define MORPHTARGETS_TEXTURE"), VH.NUM_MORPH_INFLUENCERS = YH, VH.NORMAL = TH, VH.TANGENT = sH, VH.UV = eH, VH.UV2 = GH, VH.COLOR = AH, JH(EH, RH, VH, hH), YH);
    }
    function JH(HH, IH, EH) {
      let TH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const sH = EH.NUM_MORPH_INFLUENCERS;
      if (sH > 0 && hH.e.LastCreatedEngine) {
        const eH = hH.e.LastCreatedEngine.getCaps().maxVertexAttribs,
          GH = IH.morphTargetManager;
        if (null !== GH && void 0 !== GH && GH.isUsingTextureForTargets) return;
        const AH = GH && GH.supportsPositions && TH,
          VH = GH && GH.supportsNormals && EH.NORMAL,
          YH = GH && GH.supportsTangents && EH.TANGENT,
          QH = GH && GH.supportsUVs && EH.UV1,
          JH = GH && GH.supportsUV2s && EH.UV2,
          OH = GH && GH.supportsColors && EH.VERTEXCOLOR;
        for (let EH = 0; EH < sH; EH++) AH && HH.push("position" + EH), VH && HH.push("normal" + EH), YH && HH.push("tangent" + EH), QH && HH.push("uv_" + EH), JH && HH.push("uv2_" + EH), OH && HH.push("color" + EH), HH.length > eH && RH.e.Error("Cannot add more vertex attributes for mesh " + IH.name);
      }
    }
    function OH(HH) {
      let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      HH.push("world0"), HH.push("world1"), HH.push("world2"), HH.push("world3"), IH && (HH.push("previousWorld0"), HH.push("previousWorld1"), HH.push("previousWorld2"), HH.push("previousWorld3"));
    }
    function rH(HH, IH) {
      const EH = HH.morphTargetManager;
      HH && EH && IH.setFloatArray("morphTargetInfluences", EH.influences);
    }
    function FH(HH, IH) {
      IH.bindToEffect(HH, "Scene");
    }
    function MH(HH, IH, EH, RH) {
      let hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        TH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        sH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        GH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        AH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        VH = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        YH = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
        QH = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
      if (HH.texturesEnabled && hH && eH.b.ReflectionTextureEnabled) {
        if (EH.uN("reflectionMatrix", hH.getReflectionTextureMatrix()), EH.updateFloat2("vReflectionInfos", hH.level * HH.iblIntensity, QH), GH && hH.boundingBoxSize) {
          const HH = hH;
          EH.updateVector3("vReflectionPosition", HH.boundingBoxPosition), EH.updateVector3("vReflectionSize", HH.boundingBoxSize);
        }
        if (TH) {
          const HH = hH.getSize().width;
          EH.updateFloat2("vReflectionFilteringInfo", HH, Math.log2(HH));
        }
        if (VH && !IH.USEIRRADIANCEMAP) {
          const HH = hH.sphericalPolynomial;
          if (IH.USESPHERICALFROMREFLECTIONMAP && HH) if (IH.SPHERICAL_HARMONICS) {
            const IH = HH.preScaledHarmonics;
            EH.updateVector3("vSphericalL00", IH.l00), EH.updateVector3("vSphericalL1_1", IH.l1_1), EH.updateVector3("vSphericalL10", IH.l10), EH.updateVector3("vSphericalL11", IH.l11), EH.updateVector3("vSphericalL2_2", IH.l2_2), EH.updateVector3("vSphericalL2_1", IH.l2_1), EH.updateVector3("vSphericalL20", IH.l20), EH.updateVector3("vSphericalL21", IH.l21), EH.updateVector3("vSphericalL22", IH.l22);
          } else EH.updateFloat3("vSphericalX", HH.x.x, HH.x.y, HH.x.z), EH.updateFloat3("vSphericalY", HH.y.x, HH.y.y, HH.y.z), EH.updateFloat3("vSphericalZ", HH.z.x, HH.z.y, HH.z.z), EH.updateFloat3("vSphericalXX_ZZ", HH.xx.x - HH.zz.x, HH.xx.y - HH.zz.y, HH.xx.z - HH.zz.z), EH.updateFloat3("vSphericalYY_ZZ", HH.yy.x - HH.zz.x, HH.yy.y - HH.zz.y, HH.yy.z - HH.zz.z), EH.updateFloat3("vSphericalZZ", HH.zz.x, HH.zz.y, HH.zz.z), EH.updateFloat3("vSphericalXY", HH.xy.x, HH.xy.y, HH.xy.z), EH.updateFloat3("vSphericalYZ", HH.yz.x, HH.yz.y, HH.yz.z), EH.updateFloat3("vSphericalZX", HH.zx.x, HH.zx.y, HH.zx.z);
        } else AH && IH.USEIRRADIANCEMAP && IH.USE_IRRADIANCE_DOMINANT_DIRECTION && hH.irradianceTexture && EH.updateVector3("vReflectionDominantDirection", hH.irradianceTexture._dominantDirection);
        sH && EH.updateFloat3("vReflectionMicrosurfaceInfos", hH.getSize().width, hH.lodGenerationScale, hH.lodGenerationOffset);
      }
      YH && EH.updateColor3("vReflectionColor", RH);
    }
    function NH(HH, IH, EH) {
      let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (RH && eH.b.ReflectionTextureEnabled) {
        IH.LODBASEDMICROSFURACE ? EH.setTexture("reflectionSampler", RH) : (EH.setTexture("reflectionSampler", RH._lodTextureMid || RH), EH.setTexture("reflectionSamplerLow", RH._lodTextureLow || RH), EH.setTexture("reflectionSamplerHigh", RH._lodTextureHigh || RH)), IH.USEIRRADIANCEMAP && EH.setTexture("irradianceSampler", RH.irradianceTexture);
        const TH = HH.iblCdfGenerator;
        hH && TH && EH.setTexture("icdfSampler", TH.getIcdfTexture());
      }
    }
    function iI(HH, IH, EH) {
      IH._needUVs = !0, IH[EH] = !0, HH.optimizeUVAllocation && HH.getTextureMatrix().isIdentityAs3x2() ? (IH[EH + "DIRECTUV"] = HH.coordinatesIndex + 1, IH["MAINUV" + (HH.coordinatesIndex + 1)] = !0) : IH[EH + "DIRECTUV"] = 0;
    }
    function DH(HH, IH, EH) {
      const RH = HH.getTextureMatrix();
      IH.uN(EH + "Matrix", RH);
    }
    function PH(HH, IH, EH) {
      EH.BAKED_VERTEX_ANIMATION_TEXTURE && EH.INSTANCES && HH.push("bakedVertexAnimationSettingsInstanced");
    }
    function XH(HH, IH, EH) {
      var RH;
      if (IH && HH && (HH.computeBonesUsingShaders && IH._bonesComputationForcedToCPU && (HH.computeBonesUsingShaders = !1), HH.useBones && HH.computeBonesUsingShaders && HH.skeleton)) {
        const hH = HH.skeleton;
        if (hH.isUsingTextureForMatrices && IH.getUniformIndex("boneTextureInfo") > -1) {
          const EH = hH.getTransformMatrixTexture(HH);
          IH.setTexture("boneSampler", EH), IH.setFloat2("boneTextureInfo", hH._textureWidth, hH._textureHeight);
        } else {
          const TH = hH.getTransformMatrices(HH);
          TH && (IH.setMatrices("mBones", TH), EH && HH.kh().prePassRenderer && HH.kh().prePassRenderer.getIndex(2) && (EH.previousBones[HH.uniqueId] || (EH.previousBones[HH.uniqueId] = TH.slice()), IH.setMatrices("mPreviousBones", EH.previousBones[HH.uniqueId]), RH = TH, EH.previousBones[HH.uniqueId].set(RH)));
        }
      }
    }
    function mI(HH, IH, EH, RH, hH) {
      let TH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
      HH._bindLight(IH, EH, RH, hH, TH);
    }
    function ZH(HH, IH, EH, RH) {
      let hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
      const TH = Math.min(IH.lightSources.length, hH);
      for (let sH = 0; sH < TH; sH++) {
        mI(IH.lightSources[sH], sH, HH, EH, "boolean" === typeof RH ? RH : RH.SPECULARTERM, IH.receiveShadows);
      }
    }
    function qH(HH, IH, EH, RH) {
      EH.NUM_BONE_INFLUENCERS > 0 && (RH.addCPUSkinningFallback(0, IH), HH.push("matricesIndices"), HH.push("matricesWeights"), EH.NUM_BONE_INFLUENCERS > 4 && (HH.push("matricesIndicesExtra"), HH.push("matricesWeightsExtra")));
    }
    function LH(HH, IH) {
      (IH.INSTANCES || IH.THIN_INSTANCES) && OH(HH, !!IH.PREPASS_VELOCITY), IH.INSTANCESCOLOR && HH.push("instanceColor");
    }
    function gH(HH, IH) {
      let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
        RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        hH = 0;
      for (let TH = 0; TH < EH && HH["LIGHT" + TH]; TH++) TH > 0 && (hH = RH + TH, IH.addFallback(hH, "LIGHT" + TH)), HH.SHADOWS || (HH["SHADOW" + TH] && IH.addFallback(RH, "SHADOW" + TH), HH["SHADOWPCF" + TH] && IH.addFallback(RH, "SHADOWPCF" + TH), HH["SHADOWPCSS" + TH] && IH.addFallback(RH, "SHADOWPCSS" + TH), HH["SHADOWPOISSON" + TH] && IH.addFallback(RH, "SHADOWPOISSON" + TH), HH["SHADOWESM" + TH] && IH.addFallback(RH, "SHADOWESM" + TH), HH["SHADOWCLOSEESM" + TH] && IH.addFallback(RH, "SHADOWCLOSEESM" + TH));
      return hH;
    }
    function yH(HH, IH, EH, RH, hH, TH, sH) {
      let eH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        GH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        AH = arguments.length > 9 ? arguments[9] : void 0,
        VH = arguments.length > 10 ? arguments[10] : void 0;
      if (sH._areMiscDirty) {
        var YH;
        sH.LOGARITHMICDEPTH = EH, sH.POINTSIZE = RH, sH.FOG = hH && function (HH, IH) {
          return IH.fogEnabled && HH.applyFog && 0 !== IH.fogMode;
        }(HH, IH), sH.NONUNIFORMSCALING = HH.nonUniformScaling, sH.ALPHATEST = TH, sH.DECAL_AFTER_DETAIL = eH, sH.USE_VERTEX_PULLING = GH, sH.RIGHT_HANDED = IH.useRightHandedSystem;
        const QH = GH ? null === AH || void 0 === AH || null === (YH = AH.KN) || void 0 === YH ? void 0 : YH.getIndexBuffer() : null,
          JH = !!AH && AH.isUnIndexed;
        sH.VERTEX_PULLING_USE_INDEX_BUFFER = !!QH && !JH, sH.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!QH || JH) && QH.is32Bits, sH.VERTEXOUTPUT_INVARIANT = !!VH;
      }
    }
    function oH(HH, IH, EH) {
      let RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!HH.lightsEnabled || RH) return !0;
      const hH = IH.lightSources,
        TH = Math.min(hH.length, EH);
      for (let sH = 0; sH < TH; sH++) if (!hH[sH].areLightTexturesReady()) return !1;
      return !0;
    }
    function kI(HH, IH, EH, RH) {
      let hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
        TH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!EH._areLightsDirty) return EH._needNormals;
      let sH = 0;
      const eH = {
        needNormals: EH._needNormals,
        needRebuild: !1,
        lightmapMode: !1,
        shadowEnabled: !1,
        specularEnabled: !1
      };
      if (HH.lightsEnabled && !TH) for (const VH of IH.lightSources) if (cH(HH, IH, VH, sH, EH, RH, eH), sH++, sH === hH) break;
      EH.SPECULARTERM = eH.specularEnabled, EH.SHADOWS = eH.shadowEnabled;
      const GH = Math.max(hH, EH.MAXLIGHTCOUNT || 0);
      for (let VH = sH; VH < GH; VH++) void 0 !== EH["LIGHT" + VH] && (EH["LIGHT" + VH] = !1, EH["HEMILIGHT" + VH] = !1, EH["POINTLIGHT" + VH] = !1, EH["DIRLIGHT" + VH] = !1, EH["SPOTLIGHT" + VH] = !1, EH["AREALIGHT" + VH] = !1, EH["CLUSTLIGHT" + VH] = !1, EH["SHADOW" + VH] = !1, EH["SHADOWCSM" + VH] = !1, EH["SHADOWCSMDEBUG" + VH] = !1, EH["SHADOWCSMNUM_CASCADES" + VH] = !1, EH["SHADOWCSMUSESHADOWMAXZ" + VH] = !1, EH["SHADOWCSMNOBLEND" + VH] = !1, EH["SHADOWCSM_RIGHTHANDED" + VH] = !1, EH["SHADOWPCF" + VH] = !1, EH["SHADOWPCSS" + VH] = !1, EH["SHADOWPOISSON" + VH] = !1, EH["SHADOWESM" + VH] = !1, EH["SHADOWCLOSEESM" + VH] = !1, EH["SHADOWCUBE" + VH] = !1, EH["SHADOWLOWQUALITY" + VH] = !1, EH["SHADOWMEDIUMQUALITY" + VH] = !1);
      EH.LIGHTCOUNT = sH, EH.MAXLIGHTCOUNT = hH;
      const AH = HH.getEngine().getCaps();
      return void 0 === EH.SHADOWFLOAT && (eH.needRebuild = !0), EH.SHADOWFLOAT = eH.shadowEnabled && (AH.textureFloatRender && AH.textureFloatLinearFiltering || AH.textureHalfFloatRender && AH.textureHalfFloatLinearFiltering), EH.LIGHTMAPEXCLUDED = eH.lightmapMode, eH.needRebuild && EH.rebuild(), eH.needNormals;
    }
    function CH(HH, IH, EH) {
      let RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
        TH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (IH && eH.b.ReflectionTextureEnabled) {
        if (!IH.isReadyOrNotBlocking()) return !1;
        EH._needNormals = !0, EH.REFLECTION = !0, EH.GAMMAREFLECTION = IH.gammaSpace, EH.RGBDREFLECTION = IH.isRGBD, EH.LODINREFLECTIONALPHA = IH.lodLevelInAlpha, EH.LINEARSPECULARREFLECTION = IH.linearSpecularLOD, EH.USEIRRADIANCEMAP = !1, EH.LODBASEDMICROSFURACE = HH.getEngine().getCaps().textureLOD;
        const sH = HH.getEngine();
        switch (RH && hH > 0 ? (EH.NUM_SAMPLES = "" + hH, sH._features.needTypeSuffixInShaderConstants && (EH.NUM_SAMPLES = EH.NUM_SAMPLES + "u"), EH.REALTIME_FILTERING = !0, HH.iblCdfGenerator && (EH.IBL_CDF_FILTERING = !0)) : EH.REALTIME_FILTERING = !1, EH.INVERTCUBICMAP = 6 === IH.coordinatesMode, EH.REFLECTIONMAP_3D = IH.isCube, EH.REFLECTIONMAP_OPPOSITEZ = EH.REFLECTIONMAP_3D && HH.useRightHandedSystem ? !IH.invertZ : IH.invertZ, EH.REFLECTIONMAP_CUBIC = !1, EH.REFLECTIONMAP_EXPLICIT = !1, EH.REFLECTIONMAP_PLANAR = !1, EH.REFLECTIONMAP_PROJECTION = !1, EH.REFLECTIONMAP_SKYBOX = !1, EH.REFLECTIONMAP_SPHERICAL = !1, EH.REFLECTIONMAP_EQUIRECTANGULAR = !1, EH.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, EH.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, IH.coordinatesMode) {
          case 0:
            EH.REFLECTIONMAP_EXPLICIT = !0;
            break;
          case 2:
            EH.REFLECTIONMAP_PLANAR = !0;
            break;
          case 4:
            EH.REFLECTIONMAP_PROJECTION = !0;
            break;
          case 5:
            EH.REFLECTIONMAP_SKYBOX = !0;
            break;
          case 1:
            EH.REFLECTIONMAP_SPHERICAL = !0;
            break;
          case 7:
            EH.REFLECTIONMAP_EQUIRECTANGULAR = !0;
            break;
          case 8:
            EH.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !0;
            break;
          case 9:
            EH.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !0;
            break;
          default:
            EH.REFLECTIONMAP_CUBIC = !0, EH.USE_LOCAL_REFLECTIONMAP_CUBIC = !!IH.boundingBoxSize;
        }
        5 !== IH.coordinatesMode && (IH.irradianceTexture ? (EH.USEIRRADIANCEMAP = !0, EH.USESPHERICALFROMREFLECTIONMAP = !1, EH.USESPHERICALINVERTEX = !1, IH.irradianceTexture._dominantDirection ? EH.USE_IRRADIANCE_DOMINANT_DIRECTION = !0 : EH.USE_IRRADIANCE_DOMINANT_DIRECTION = !1) : IH.isCube && (EH.USESPHERICALFROMREFLECTIONMAP = !0, EH.USEIRRADIANCEMAP = !1, EH.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, EH.USESPHERICALINVERTEX = TH));
      } else EH.REFLECTION = !1, EH.REFLECTIONMAP_3D = !1, EH.REFLECTIONMAP_SPHERICAL = !1, EH.REFLECTIONMAP_PLANAR = !1, EH.REFLECTIONMAP_CUBIC = !1, EH.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, EH.REFLECTIONMAP_PROJECTION = !1, EH.REFLECTIONMAP_SKYBOX = !1, EH.REFLECTIONMAP_EXPLICIT = !1, EH.REFLECTIONMAP_EQUIRECTANGULAR = !1, EH.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, EH.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, EH.INVERTCUBICMAP = !1, EH.USESPHERICALFROMREFLECTIONMAP = !1, EH.USEIRRADIANCEMAP = !1, EH.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, EH.USESPHERICALINVERTEX = !1, EH.REFLECTIONMAP_OPPOSITEZ = !1, EH.LODINREFLECTIONALPHA = !1, EH.GAMMAREFLECTION = !1, EH.RGBDREFLECTION = !1, EH.LINEARSPECULARREFLECTION = !1;
      return !0;
    }
    function cH(HH, IH, EH, RH, hH, sH, eH) {
      switch (eH.needNormals = !0, void 0 === hH["LIGHT" + RH] && (eH.needRebuild = !0), hH["LIGHT" + RH] = !0, hH["SPOTLIGHT" + RH] = !1, hH["HEMILIGHT" + RH] = !1, hH["POINTLIGHT" + RH] = !1, hH["DIRLIGHT" + RH] = !1, hH["AREALIGHT" + RH] = !1, hH["CLUSTLIGHT" + RH] = !1, EH.prepareLightSpecificDefines(hH, RH), hH["LIGHT_FALLOFF_PHYSICAL" + RH] = !1, hH["LIGHT_FALLOFF_GLTF" + RH] = !1, hH["LIGHT_FALLOFF_STANDARD" + RH] = !1, EH.falloffType) {
        case TH.b.FALLOFF_GLTF:
          hH["LIGHT_FALLOFF_GLTF" + RH] = !0;
          break;
        case TH.b.FALLOFF_PHYSICAL:
          hH["LIGHT_FALLOFF_PHYSICAL" + RH] = !0;
          break;
        case TH.b.FALLOFF_STANDARD:
          hH["LIGHT_FALLOFF_STANDARD" + RH] = !0;
      }
      if (sH && !EH.Er.equalsFloats(0, 0, 0) && (eH.specularEnabled = !0), hH["SHADOW" + RH] = !1, hH["SHADOWCSM" + RH] = !1, hH["SHADOWCSMDEBUG" + RH] = !1, hH["SHADOWCSMNUM_CASCADES" + RH] = !1, hH["SHADOWCSMUSESHADOWMAXZ" + RH] = !1, hH["SHADOWCSMNOBLEND" + RH] = !1, hH["SHADOWCSM_RIGHTHANDED" + RH] = !1, hH["SHADOWPCF" + RH] = !1, hH["SHADOWPCSS" + RH] = !1, hH["SHADOWPOISSON" + RH] = !1, hH["SHADOWESM" + RH] = !1, hH["SHADOWCLOSEESM" + RH] = !1, hH["SHADOWCUBE" + RH] = !1, hH["SHADOWLOWQUALITY" + RH] = !1, hH["SHADOWMEDIUMQUALITY" + RH] = !1, IH && IH.receiveShadows && HH.shadowsEnabled && EH.shadowEnabled) {
        var GH;
        const IH = null !== (GH = EH.getShadowGenerator(HH.activeCamera)) && void 0 !== GH ? GH : EH.getShadowGenerator();
        if (IH) {
          const HH = IH.getShadowMap();
          HH && HH.renderList && HH.renderList.length > 0 && (eH.shadowEnabled = !0, IH.prepareDefines(hH, RH));
        }
      }
      EH.lightmapMode != TH.b.LIGHTMAP_DEFAULT ? (eH.lightmapMode = !0, hH["LIGHTMAPEXCLUDED" + RH] = !0, hH["LIGHTMAPNOSPECULAR" + RH] = EH.lightmapMode == TH.b.LIGHTMAP_SHADOWSONLY) : (hH["LIGHTMAPEXCLUDED" + RH] = !1, hH["LIGHTMAPNOSPECULAR" + RH] = !1);
    }
    function UH(HH, IH, EH, RH, hH) {
      let TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        eH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        GH = function (HH, IH) {
          let EH = !1;
          if (HH.activeCamera) {
            const RH = IH.CAMERA_ORTHOGRAPHIC ? 1 : 0,
              hH = IH.CAMERA_PERSPECTIVE ? 1 : 0,
              TH = 1 === HH.activeCamera.mode ? 1 : 0,
              sH = 0 === HH.activeCamera.mode ? 1 : 0;
            (RH ^ TH || hH ^ sH) && (IH.CAMERA_ORTHOGRAPHIC = 1 === TH, IH.CAMERA_PERSPECTIVE = 1 === sH, EH = !0);
          }
          return EH;
        }(HH, RH);
      !1 !== TH && (GH = (0, sH.i)(EH, HH, RH)), RH.DEPTHPREPASS !== !IH.getColorWrite() && (RH.DEPTHPREPASS = !RH.DEPTHPREPASS, GH = !0), RH.INSTANCES !== hH && (RH.INSTANCES = hH, GH = !0), RH.THIN_INSTANCES !== eH && (RH.THIN_INSTANCES = eH, GH = !0), GH && RH.markAsUnprocessed();
    }
    const WH = 40,
      BH = 64,
      fH = new WeakMap(),
      aH = new WeakSet();
    function nH(HH, IH, EH, hH) {
      let TH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        sH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
        eH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      if (!IH._areAttributesDirty && IH._needNormals === IH._normals && IH._needUVs === IH._uvs) return !1;
      IH._normals = IH._needNormals, IH._uvs = IH._needUVs, IH.NORMAL = IH._needNormals && HH.isVerticesDataPresent("normal"), IH._needNormals && HH.isVerticesDataPresent("tangent") && (IH.TANGENT = !0);
      for (let RH = 1; RH <= 6; ++RH) IH["UV" + RH] = !!IH._needUVs && HH.isVerticesDataPresent("uv".concat(1 === RH ? "" : RH));
      if (EH) {
        const EH = HH.useVertexColors && HH.isVerticesDataPresent("color");
        IH.VERTEXCOLOR = EH, IH.VERTEXALPHA = HH.hasVertexAlpha && EH && sH;
      }
      return HH.isVerticesDataPresent("instanceColor") && (HH.hasInstances || HH.hasThinInstances) && (IH.INSTANCESCOLOR = !0), hH && function (HH, IH) {
        if (HH.useBones && HH.computeBonesUsingShaders && HH.skeleton) {
          IH.NUM_BONE_INFLUENCERS = HH.numBoneInfluencers;
          const EH = void 0 !== IH.BONETEXTURE;
          if (HH.skeleton.isUsingTextureForMatrices && EH) IH.BONETEXTURE = !0;else {
            IH.BonesPerMesh = HH.skeleton.bones.length + 1, IH.BONETEXTURE = !EH && void 0;
            const hH = HH.kh(),
              TH = hH.prePassRenderer;
            if (TH && TH.enabled) {
              const EH = -1 === TH.excludedSkinnedMesh.indexOf(HH);
              IH.BONES_VELOCITY_ENABLED = EH;
            }
            const sH = !0 === IH.MULTIVIEW,
              eH = 2 * IH.BonesPerMesh + (sH ? 1 : 0);
            if (fH.get(HH.skeleton) !== eH) {
              fH.set(HH.skeleton, eH);
              const EH = hH.getEngine().getCaps().maxVertexUniformVectors;
              if (EH && !aH.has(HH.skeleton)) {
                const hH = 4 * IH.BonesPerMesh,
                  TH = sH ? BH : WH,
                  eH = Math.max(EH - TH, 0);
                (hH > eH || sH && 3 * hH > EH) && (aH.add(HH.skeleton), RH.e.Warn('Skeleton "'.concat(HH.skeleton.name, '": ').concat(HH.skeleton.bones.length, " bones stored as vertex uniforms use ") + "".concat(hH, " of ~").concat(eH, " usable uniform vectors").concat(sH ? " (multiview)" : "", " on a ") + "device reporting ".concat(EH, ". This can exceed the GPU vertex-uniform limit and make the ") + "mesh silently fail to render. Set skeleton.useTextureToStoreBoneMatrices = true to store bone matrices in a texture."));
              }
            }
          }
        } else IH.NUM_BONE_INFLUENCERS = 0, IH.BonesPerMesh = 0, void 0 !== IH.BONETEXTURE && (IH.BONETEXTURE = !1);
      }(HH, IH), TH && function (HH, IH) {
        const EH = HH.morphTargetManager;
        EH ? (IH.MORPHTARGETS_UV = EH.supportsUVs && IH.UV1, IH.MORPHTARGETS_UV2 = EH.supportsUV2s && IH.UV2, IH.MORPHTARGETS_TANGENT = EH.supportsTangents && IH.TANGENT, IH.MORPHTARGETS_NORMAL = EH.supportsNormals && IH.NORMAL, IH.MORPHTARGETS_POSITION = EH.supportsPositions, IH.MORPHTARGETS_COLOR = EH.supportsColors, IH.MORPHTARGETTEXTURE_HASUVS = EH.hasUVs, IH.MORPHTARGETTEXTURE_HASUV2S = EH.hasUV2s, IH.MORPHTARGETTEXTURE_HASTANGENTS = EH.hasTangents, IH.MORPHTARGETTEXTURE_HASNORMALS = EH.hasNormals, IH.MORPHTARGETTEXTURE_HASPOSITIONS = EH.hasPositions, IH.MORPHTARGETTEXTURE_HASCOLORS = EH.hasColors, IH.NUM_MORPH_INFLUENCERS = EH.numMaxInfluencers || EH.numInfluencers, IH.MORPHTARGETS = IH.NUM_MORPH_INFLUENCERS > 0, IH.MORPHTARGETS_TEXTURE = EH.isUsingTextureForTargets) : (IH.MORPHTARGETS_UV = !1, IH.MORPHTARGETS_UV2 = !1, IH.MORPHTARGETS_TANGENT = !1, IH.MORPHTARGETS_NORMAL = !1, IH.MORPHTARGETS_POSITION = !1, IH.MORPHTARGETS_COLOR = !1, IH.MORPHTARGETTEXTURE_HASUVS = !1, IH.MORPHTARGETTEXTURE_HASUV2S = !1, IH.MORPHTARGETTEXTURE_HASTANGENTS = !1, IH.MORPHTARGETTEXTURE_HASNORMALS = !1, IH.MORPHTARGETTEXTURE_HASPOSITIONS = !1, IH.MORPHTARGETTEXTURE_HAS_COLORS = !1, IH.MORPHTARGETS = !1, IH.NUM_MORPH_INFLUENCERS = 0);
      }(HH, IH), eH && function (HH, IH) {
        const EH = HH.bakedVertexAnimationManager;
        IH.BAKED_VERTEX_ANIMATION_TEXTURE = !(!EH || !EH.isEnabled);
      }(HH, IH), !0;
    }
    function pH(HH, IH) {
      if (HH.activeCamera) {
        const EH = IH.MULTIVIEW;
        IH.MULTIVIEW = null !== HH.activeCamera.outputRenderTarget && HH.activeCamera.outputRenderTarget.getViewCount() > 1, IH.MULTIVIEW != EH && IH.markAsUnprocessed();
      }
    }
    function dH(HH, IH, EH) {
      const RH = IH.ORDER_INDEPENDENT_TRANSPARENCY,
        hH = IH.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
      IH.ORDER_INDEPENDENT_TRANSPARENCY = HH.useOrderIndependentTransparency && EH, IH.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !HH.getEngine().getCaps().textureFloatLinearFiltering, RH === IH.ORDER_INDEPENDENT_TRANSPARENCY && hH === IH.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || IH.markAsUnprocessed();
    }
    function uH(HH, IH, EH) {
      const RH = IH.PREPASS;
      if (!IH._arePrePassDirty) return;
      const hH = [{
        type: 1,
        define: "PREPASS_POSITION",
        index: "PREPASS_POSITION_INDEX"
      }, {
        type: 9,
        define: "PREPASS_LOCAL_POSITION",
        index: "PREPASS_LOCAL_POSITION_INDEX"
      }, {
        type: 2,
        define: "PREPASS_VELOCITY",
        index: "PREPASS_VELOCITY_INDEX"
      }, {
        type: 11,
        define: "PREPASS_VELOCITY_LINEAR",
        index: "PREPASS_VELOCITY_LINEAR_INDEX"
      }, {
        type: 3,
        define: "PREPASS_REFLECTIVITY",
        index: "PREPASS_REFLECTIVITY_INDEX"
      }, {
        type: 0,
        define: "PREPASS_IRRADIANCE_LEGACY",
        index: "PREPASS_IRRADIANCE_LEGACY_INDEX"
      }, {
        type: 7,
        define: "PREPASS_ALBEDO_SQRT",
        index: "PREPASS_ALBEDO_SQRT_INDEX"
      }, {
        type: 5,
        define: "PREPASS_DEPTH",
        index: "PREPASS_DEPTH_INDEX"
      }, {
        type: 10,
        define: "PREPASS_SCREENSPACE_DEPTH",
        index: "PREPASS_SCREENSPACE_DEPTH_INDEX"
      }, {
        type: 6,
        define: "PREPASS_NORMAL",
        index: "PREPASS_NORMAL_INDEX"
      }, {
        type: 8,
        define: "PREPASS_WORLD_NORMAL",
        index: "PREPASS_WORLD_NORMAL_INDEX"
      }, {
        type: 14,
        define: "PREPASS_IRRADIANCE",
        index: "PREPASS_IRRADIANCE_INDEX"
      }];
      if (HH.prePassRenderer && HH.prePassRenderer.enabled && EH) {
        IH.PREPASS = !0, IH.SCENE_MRT_COUNT = HH.prePassRenderer.mrtCount, IH.PREPASS_NORMAL_WORLDSPACE = HH.prePassRenderer.generateNormalsInWorldSpace, IH.PREPASS_COLOR = !0, IH.PREPASS_COLOR_INDEX = 0;
        for (let EH = 0; EH < hH.length; EH++) {
          const RH = HH.prePassRenderer.getIndex(hH[EH].type);
          -1 !== RH ? (IH[hH[EH].define] = !0, IH[hH[EH].index] = RH) : IH[hH[EH].define] = !1;
        }
      } else {
        IH.PREPASS = !1;
        for (let HH = 0; HH < hH.length; HH++) IH[hH[HH].define] = !1;
      }
      IH.PREPASS != RH && (IH.markAsUnprocessed(), IH.markAsImageProcessingDirty());
    }
    function lH(HH, IH, EH, RH) {
      let hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        TH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        sH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        eH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        GH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        AH = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
      hH && hH.push("Light" + HH), TH || (IH.push("vLightData" + HH, "vLightDiffuse" + HH, "vLightSpecular" + HH, "vLightDirection" + HH, "vLightWidth" + HH, "vLightHeight" + HH, "vLightFalloff" + HH, "vLightGround" + HH, "vSliceData" + HH, "vSliceRanges" + HH, "lightMatrix" + HH, "shadowsInfo" + HH, "depthValues" + HH), EH.push("shadowTexture" + HH), EH.push("depthTexture" + HH), IH.push("viewFrustumZ" + HH, "cascadeBlendFactor" + HH, "lightSizeUVCorrection" + HH, "depthCorrection" + HH, "penumbraDarkness" + HH, "frustumLengths" + HH), RH && (EH.push("projectionLightTexture" + HH), IH.push("textureProjectionMatrix" + HH)), sH && EH.push("iesLightTexture" + HH), GH && EH.push("rectAreaLightEmissionTexture" + HH), eH && (EH.push("lightDataTexture" + HH), AH || EH.push("tileMaskTexture" + HH)));
    }
    function KH(HH, IH, EH) {
      const RH = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
      EH && RH.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22"), HH.push(...RH);
      IH.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler");
    }
    function wH(HH, IH, EH) {
      let RH,
        hH,
        TH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
        sH = null;
      if (HH.uniformsNames) {
        var eH;
        const GH = HH;
        RH = GH.uniformsNames, hH = GH.uniformBuffersNames, IH = GH.samplers, EH = GH.defines, TH = GH.maxSimultaneousLights || 0, sH = null !== (eH = GH.shaderLanguage) && void 0 !== eH ? eH : null;
      } else RH = HH, IH || (IH = []);
      for (let GH = 0; GH < TH && EH["LIGHT" + GH]; GH++) lH(GH, RH, IH, EH["PROJECTEDLIGHTTEXTURE" + GH], hH, !1, EH["IESLIGHTTEXTURE" + GH], EH["CLUSTLIGHT" + GH], EH["RECTAREALIGHTEMISSIONTEXTURE" + GH], 1 === sH);
      EH.NUM_MORPH_INFLUENCERS && (RH.push("morphTargetInfluences"), RH.push("morphTargetCount")), EH.BAKED_VERTEX_ANIMATION_TEXTURE && (RH.push("bakedVertexAnimationSettings"), RH.push("bakedVertexAnimationTextureSizeInverted"), RH.push("bakedVertexAnimationTime"), IH.push("bakedVertexAnimationTexture"));
    }
    function zH(HH) {
      let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        TH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      HH.addUniform("vReflectionInfos", 2), HH.addUniform("reflectionMatrix", 16), IH && HH.addUniform("vReflectionMicrosurfaceInfos", 3), EH && (HH.addUniform("vReflectionPosition", 3), HH.addUniform("vReflectionSize", 3)), RH && (HH.addUniform("vReflectionFilteringInfo", 2), HH.addUniform("vReflectionDominantDirection", 3)), TH && HH.addUniform("vReflectionColor", 3), hH && (HH.addUniform("vSphericalL00", 3), HH.addUniform("vSphericalL1_1", 3), HH.addUniform("vSphericalL10", 3), HH.addUniform("vSphericalL11", 3), HH.addUniform("vSphericalL2_2", 3), HH.addUniform("vSphericalL2_1", 3), HH.addUniform("vSphericalL20", 3), HH.addUniform("vSphericalL21", 3), HH.addUniform("vSphericalL22", 3), HH.addUniform("vSphericalX", 3), HH.addUniform("vSphericalY", 3), HH.addUniform("vSphericalZ", 3), HH.addUniform("vSphericalXX_ZZ", 3), HH.addUniform("vSphericalYY_ZZ", 3), HH.addUniform("vSphericalZZ", 3), HH.addUniform("vSphericalXY", 3), HH.addUniform("vSphericalYZ", 3), HH.addUniform("vSphericalZX", 3));
    }
  },
  22495: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => TH
    });
    var RH = EH(21764),
      hH = EH(22248);
    class TH extends hH.b {
      constructor(HH, IH) {
        let EH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(HH, IH, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new RH.d(), this._storeEffectOnSubMeshes = EH;
      }
      getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect();
      }
      isReady(HH, IH) {
        return !!HH && (!this._storeEffectOnSubMeshes || !HH.BJ || 0 === HH.BJ.length || this.isReadyForSubMesh(HH, HH.BJ[0], IH));
      }
      _isReadyForSubMesh(HH) {
        const IH = HH.materialDefines;
        return !(this.checkReadyOnEveryCall || !HH.effect || !IH || IH._renderId !== this.kh().getRenderId());
      }
      bindOnlyWorldMatrix(HH) {
        this._activeEffect.setMatrix("world", HH);
      }
      bindOnlyNormalMatrix(HH) {
        this._activeEffect.setMatrix("normalMatrix", HH);
      }
      bind(HH, IH) {
        IH && this.bindForSubMesh(HH, IH, IH.BJ[0]);
      }
      _afterBind(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = arguments.length > 2 ? arguments[2] : void 0;
        super._afterBind(HH, IH, EH), this.kh()._cachedEffect = IH, EH ? EH._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1;
      }
      _mustRebind(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return EH._drawWrapper._forceRebindOnNextCall || HH.isCachedMaterialInvalid(this, IH, RH);
      }
      dispose(HH, IH, EH) {
        this._activeEffect = void 0, super.dispose(HH, IH, EH);
      }
    }
  },
  22515: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => TH,
      e: () => hH
    });
    const RH = new WeakMap();
    function hH(HH) {
      const IH = HH.getVertexBuffers();
      if (!IH) return null;
      let EH = RH.get(HH);
      if (EH) {
        let HH = !1;
        for (const RH in IH) if (!EH.has(RH)) {
          HH = !0;
          break;
        }
        if (!HH) return EH;
      } else EH = new Map(), RH.set(HH, EH);
      for (const RH in IH) {
        const HH = IH[RH];
        if (HH) {
          const IH = HH.byteOffset,
            hH = HH.byteStride,
            TH = HH.type,
            sH = HH.normalized;
          EH.set(RH, {
            offset: IH,
            stride: hH,
            type: TH,
            normalized: sH
          });
        }
      }
      return EH;
    }
    function TH(HH, IH) {
      IH.forEach((IH, EH) => {
        const RH = "vp_".concat(EH, "_info");
        HH.setFloat4(RH, IH.offset, IH.stride, IH.type, IH.normalized ? 1 : 0);
      });
    }
  },
  22208: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => eH,
      h: () => GH
    });
    var RH = EH(21947),
      hH = EH(21764),
      TH = EH(21956);
    let sH = (() => {
      var HH;
      let IH,
        EH,
        hH = [];
      return HH = class {
        static extractMinAndMaxIndexed(HH, IH, EH, RH, hH, TH) {
          for (let sH = EH; sH < EH + RH; sH++) {
            const EH = 3 * IH[sH],
              RH = HH[EH],
              eH = HH[EH + 1],
              GH = HH[EH + 2];
            hH.minimizeInPlaceFromFloats(RH, eH, GH), TH.maximizeInPlaceFromFloats(RH, eH, GH);
          }
        }
        static extractMinAndMax(HH, IH, EH, RH, hH, TH) {
          for (let sH = IH, eH = IH * RH; sH < IH + EH; sH++, eH += RH) {
            const IH = HH[eH],
              EH = HH[eH + 1],
              RH = HH[eH + 2];
            hH.minimizeInPlaceFromFloats(IH, EH, RH), TH.maximizeInPlaceFromFloats(IH, EH, RH);
          }
        }
      }, (() => {
        const sH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IH = [TH.g.filter(function () {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1]);
        })], EH = [TH.g.filter(function () {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]);
        })], (0, RH.i)(HH, null, IH, {
          kind: "method",
          name: "extractMinAndMaxIndexed",
          static: !0,
          private: !1,
          access: {
            has: HH => "extractMinAndMaxIndexed" in HH,
            get: HH => HH.extractMinAndMaxIndexed
          },
          metadata: sH
        }, null, hH), (0, RH.i)(HH, null, EH, {
          kind: "method",
          name: "extractMinAndMax",
          static: !0,
          private: !1,
          access: {
            has: HH => "extractMinAndMax" in HH,
            get: HH => HH.extractMinAndMax
          },
          metadata: sH
        }, null, hH), sH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: sH
        }), (0, RH.j)(HH, hH);
      })(), HH;
    })();
    function eH(HH, IH, EH, RH) {
      let TH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const eH = new hH.x(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        GH = new hH.x(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return sH.extractMinAndMaxIndexed(HH, IH, EH, RH, eH, GH), TH && (eH.x -= eH.x * TH.x + TH.y, eH.y -= eH.y * TH.x + TH.y, eH.z -= eH.z * TH.x + TH.y, GH.x += GH.x * TH.x + TH.y, GH.y += GH.y * TH.x + TH.y, GH.z += GH.z * TH.x + TH.y), {
        minimum: eH,
        maximum: GH
      };
    }
    function GH(HH, IH, EH) {
      let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        TH = arguments.length > 4 ? arguments[4] : void 0;
      const eH = new hH.x(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
        GH = new hH.x(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      return TH || (TH = 3), sH.extractMinAndMax(HH, IH, EH, TH, eH, GH), RH && (eH.x -= eH.x * RH.x + RH.y, eH.y -= eH.y * RH.x + RH.y, eH.z -= eH.z * RH.x + RH.y, GH.x += GH.x * RH.x + RH.y, GH.y += GH.y * RH.x + RH.y, GH.z += GH.z * RH.x + RH.y), {
        minimum: eH,
        maximum: GH
      };
    }
  },
  22187: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => YH
    });
    var RH,
      hH,
      TH = EH(22128),
      sH = EH(22190),
      eH = EH(22195),
      GH = EH(22208),
      AH = EH(22215),
      VH = EH(21856);
    class YH {
      get materialDefines() {
        var HH;
        const IH = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : null === (HH = this._getDrawWrapper()) || void 0 === HH ? void 0 : HH.defines;
        return "string" === typeof IH ? null : IH;
      }
      set materialDefines(HH) {
        var IH;
        (null !== (IH = this._mainDrawWrapperOverride) && void 0 !== IH ? IH : this._getDrawWrapper(void 0, !0)).defines = HH;
      }
      _getDrawWrapper(HH) {
        var IH;
        let EH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        HH = null !== (IH = HH) && void 0 !== IH ? IH : this._engine.currentRenderPassId;
        let RH = this._drawWrappers[HH];
        return !RH && EH && (this._drawWrappers[HH] = RH = new AH.d(this._mesh.kh().getEngine())), RH;
      }
      _removeDrawWrapper(HH) {
        let IH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        var EH;
        arguments.length > 1 && void 0 !== arguments[1] && !arguments[1] || null === (EH = this._drawWrappers[HH]) || void 0 === EH || EH.dispose(IH);
        this._drawWrappers[HH] = void 0;
      }
      get effect() {
        var HH, IH;
        return this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.effect : null !== (HH = null === (IH = this._getDrawWrapper()) || void 0 === IH ? void 0 : IH.effect) && void 0 !== HH ? HH : null;
      }
      get _drawWrapper() {
        var HH;
        return null !== (HH = this._mainDrawWrapperOverride) && void 0 !== HH ? HH : this._getDrawWrapper(void 0, !0);
      }
      get _drawWrapperOverride() {
        return this._mainDrawWrapperOverride;
      }
      _setMainDrawWrapperOverride(HH) {
        this._mainDrawWrapperOverride = HH;
      }
      setEffect(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = arguments.length > 2 ? arguments[2] : void 0,
          RH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const hH = this._drawWrapper;
        hH.setEffect(HH, IH, RH), void 0 !== EH && (hH.materialContext = EH), HH || (hH.defines = null, hH.materialContext = void 0);
      }
      resetDrawCache(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._drawWrappers) {
          if (void 0 !== HH) return void this._removeDrawWrapper(HH, !0, IH);
          for (const HH of this._drawWrappers) null === HH || void 0 === HH || HH.dispose(IH);
        }
        this._drawWrappers = [];
      }
      static AddToMesh(HH, IH, EH, RH, hH, TH, sH) {
        return new YH(HH, IH, EH, RH, hH, TH, sH, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7]);
      }
      constructor(HH, IH, EH, RH, hH, TH, sH) {
        let eH = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          GH = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
        this.materialIndex = HH, this.verticesStart = IH, this.verticesCount = EH, this.indexStart = RH, this.indexCount = hH, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastColliderTransformMatrix = null, this._wasDispatched = !1, this._renderId = 0, this._alphaIndex = 0, this._distanceToCamera = 0, this._currentMaterial = null, this._mesh = TH, this._renderingMesh = sH || TH, GH && TH.BJ.push(this), this._engine = this._mesh.kh().getEngine(), this.resetDrawCache(), this._trianglePlanes = [], this._id = TH.BJ.length - 1, eH && (this.refreshBoundingInfo(), TH.aJ(!0));
      }
      get IsGlobal() {
        return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices();
      }
      getBoundingInfo() {
        return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.getBoundingInfo() : this._boundingInfo;
      }
      setBoundingInfo(HH) {
        return this._boundingInfo = HH, this;
      }
      getMesh() {
        return this._mesh;
      }
      getRenderingMesh() {
        return this._renderingMesh;
      }
      getReplacementMesh() {
        return this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
      }
      getEffectiveMesh() {
        const HH = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
        return HH || this._renderingMesh;
      }
      sI() {
        var HH;
        let IH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const EH = null !== (HH = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId)) && void 0 !== HH ? HH : this._renderingMesh.material;
        if (!EH) return IH && this._mesh.kh()._hasDefaultMaterial ? this._mesh.kh().defaultMaterial : null;
        if (this._isMultiMaterial(EH)) {
          const HH = EH.getSubMaterial(this.materialIndex);
          return this._currentMaterial !== HH && (this._currentMaterial = HH, this.resetDrawCache()), HH;
        }
        return EH;
      }
      _isMultiMaterial(HH) {
        return void 0 !== HH.getSubMaterial;
      }
      refreshBoundingInfo() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.KN) return this;
        if (HH || (HH = this._renderingMesh.getVerticesData(TH.t.PositionKind)), !HH) return this._boundingInfo = this._mesh.getBoundingInfo(), this;
        const IH = this._renderingMesh.uO();
        let EH;
        if (0 === this.indexStart && this.indexCount === IH.length) {
          const HH = this._renderingMesh.getBoundingInfo();
          EH = {
            minimum: HH.minimum.clone(),
            maximum: HH.maximum.clone()
          };
        } else EH = (0, GH.e)(HH, IH, this.indexStart, this.indexCount, this._renderingMesh.KN.boundingBias);
        return this._boundingInfo ? this._boundingInfo.reConstruct(EH.minimum, EH.maximum) : this._boundingInfo = new eH.e(EH.minimum, EH.maximum), this;
      }
      _checkCollision(HH) {
        return this.getBoundingInfo()._checkCollision(HH);
      }
      updateBoundingInfo(HH) {
        let IH = this.getBoundingInfo();
        return IH || (this.refreshBoundingInfo(), IH = this.getBoundingInfo()), IH && IH.update(HH), this;
      }
      isInFrustum(HH) {
        const IH = this.getBoundingInfo();
        return !!IH && IH.isInFrustum(HH, this._mesh.cullingStrategy);
      }
      isCompletelyInFrustum(HH) {
        const IH = this.getBoundingInfo();
        return !!IH && IH.isCompletelyInFrustum(HH);
      }
      render(HH) {
        return this._renderingMesh.render(this, HH, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this;
      }
      _getLinesIndexBuffer(HH, IH) {
        if (!this._linesIndexBuffer) {
          const EH = 6 * Math.floor(this.indexCount / 3),
            RH = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(EH) : new Uint16Array(EH);
          let hH = 0;
          if (0 === HH.length) for (let HH = this.indexStart; HH < this.indexStart + this.indexCount; HH += 3) RH[hH++] = HH, RH[hH++] = HH + 1, RH[hH++] = HH + 1, RH[hH++] = HH + 2, RH[hH++] = HH + 2, RH[hH++] = HH;else for (let IH = this.indexStart; IH < this.indexStart + this.indexCount; IH += 3) RH[hH++] = HH[IH], RH[hH++] = HH[IH + 1], RH[hH++] = HH[IH + 1], RH[hH++] = HH[IH + 2], RH[hH++] = HH[IH + 2], RH[hH++] = HH[IH];
          this._linesIndexBuffer = IH.createIndexBuffer(RH), this._linesIndexCount = RH.length;
        }
        return this._linesIndexBuffer;
      }
      canIntersects(HH) {
        const IH = this.getBoundingInfo();
        return !!IH && HH.intersectsBox(IH.boundingBox);
      }
      intersects(HH, IH, EH, RH, hH) {
        const TH = this.sI();
        if (!TH) return null;
        let sH = 3,
          eH = !1;
        switch (TH.fillMode) {
          case 3:
          case 5:
          case 6:
          case 8:
            return null;
          case 7:
            sH = 1, eH = !0;
        }
        return 4 === TH.fillMode ? EH.length ? this._intersectLines(HH, IH, EH, this._mesh.intersectionThreshold, RH) : this._intersectUnIndexedLines(HH, IH, EH, this._mesh.intersectionThreshold, RH) : !EH.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(HH, IH, EH, RH, hH) : this._intersectTriangles(HH, IH, EH, sH, eH, RH, hH);
      }
      _intersectLines(HH, IH, EH, RH, hH) {
        let TH = null;
        for (let eH = this.indexStart; eH < this.indexStart + this.indexCount; eH += 2) {
          const GH = IH[EH[eH]],
            AH = IH[EH[eH + 1]],
            VH = HH.intersectionSegment(GH, AH, RH);
          if (!(VH < 0) && (hH || !TH || VH < TH.distance) && (TH = new sH.e(null, null, VH), TH.faceId = eH / 2, hH)) break;
        }
        return TH;
      }
      _intersectUnIndexedLines(HH, IH, EH, RH, hH) {
        let TH = null;
        for (let eH = this.verticesStart; eH < this.verticesStart + this.verticesCount; eH += 2) {
          const EH = IH[eH],
            GH = IH[eH + 1],
            AH = HH.intersectionSegment(EH, GH, RH);
          if (!(AH < 0) && (hH || !TH || AH < TH.distance) && (TH = new sH.e(null, null, AH), TH.faceId = eH / 2, hH)) break;
        }
        return TH;
      }
      _intersectTriangles(HH, IH, EH, RH, hH, TH, sH) {
        let eH = null,
          GH = -1;
        for (let AH = this.indexStart; AH < this.indexStart + this.indexCount - (3 - RH); AH += RH) {
          GH++;
          const RH = EH[AH],
            VH = EH[AH + 1],
            YH = EH[AH + 2];
          if (hH && 4294967295 === YH) {
            AH += 2;
            continue;
          }
          const QH = IH[RH],
            JH = IH[VH],
            OH = IH[YH];
          if (!QH || !JH || !OH) continue;
          if (sH && !sH(QH, JH, OH, HH, RH, VH, YH)) continue;
          const rH = HH.intersectsTriangle(QH, JH, OH);
          if (rH) {
            if (rH.distance < 0) continue;
            if ((TH || !eH || rH.distance < eH.distance) && (eH = rH, eH.faceId = GH, TH)) break;
          }
        }
        return eH;
      }
      _intersectUnIndexedTriangles(HH, IH, EH, RH, hH) {
        let TH = null;
        for (let sH = this.verticesStart; sH < this.verticesStart + this.verticesCount; sH += 3) {
          const EH = IH[sH],
            eH = IH[sH + 1],
            GH = IH[sH + 2];
          if (hH && !hH(EH, eH, GH, HH, -1, -1, -1)) continue;
          const AH = HH.intersectsTriangle(EH, eH, GH);
          if (AH) {
            if (AH.distance < 0) continue;
            if ((RH || !TH || AH.distance < TH.distance) && (TH = AH, TH.faceId = sH / 3, RH)) break;
          }
        }
        return TH;
      }
      _rebuild() {
        this._linesIndexBuffer && (this._linesIndexBuffer = null);
      }
      clone(HH, IH) {
        const EH = new YH(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, HH, IH, !1);
        if (!this.IsGlobal) {
          const HH = this.getBoundingInfo();
          if (!HH) return EH;
          EH._boundingInfo = new eH.e(HH.minimum, HH.maximum);
        }
        return EH;
      }
      dispose() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._linesIndexBuffer && (this._mesh.kh().getEngine()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
        const IH = this._mesh.BJ.indexOf(this);
        this._mesh.BJ.splice(IH, 1), this.resetDrawCache(void 0, HH);
      }
      getClassName() {
        return "SubMesh";
      }
      static CreateFromIndices(HH, IH, EH, RH, hH) {
        let TH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          sH = Number.MAX_VALUE,
          eH = -Number.MAX_VALUE;
        const GH = (hH || RH).uO();
        for (let AH = IH; AH < IH + EH; AH++) {
          const HH = GH[AH];
          HH < sH && (sH = HH), HH > eH && (eH = HH);
        }
        return new YH(HH, sH, eH - sH + 1, IH, EH, RH, hH, TH);
      }
    }
    null !== (RH = (hH = YH.prototype).projectToRef) && void 0 !== RH || (hH.projectToRef = (0, VH.j)("SubMesh", "projectToRef"));
  }
};
//# sourceMappingURL=ug4nu.55.1fcc8b1a.chunk.js.map
//# debugId=3860b834-ee07-515d-8abd-2e150e69da0a