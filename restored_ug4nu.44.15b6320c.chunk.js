!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f00be74a-a50c-5ac1-9efc-f6a25e8d2ddb");
  } catch (e) {}
}();
export const id = 44;
export const ids = [44];
export const modules = {
  21782: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => hH
    });
    var RH = EH(21786);
    class hH {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1];
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene;
      }
    }
    hH.Instances = [], hH.OnEnginesDisposedObservable = new RH.e(), hH._LastCreatedScene = null, hH.UseFallbackTexture = !0, hH.FallbackTexture = "";
  },
  21780: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => RH
    });
    class RH {
      static SetMatrixPrecision(HH) {
        if (RH.MatrixTrackPrecisionChange = !1, HH && !RH.MatrixUse64Bits && RH.MatrixTrackedMatrices) for (let IH = 0; IH < RH.MatrixTrackedMatrices.length; ++IH) {
          const HH = RH.MatrixTrackedMatrices[IH],
            EH = HH.nN;
          HH.nN = new Array(16);
          for (let IH = 0; IH < 16; ++IH) HH.nN[IH] = EH[IH];
        }
        RH.MatrixUse64Bits = HH, RH.MatrixCurrentType = RH.MatrixUse64Bits ? Array : Float32Array, RH.MatrixTrackedMatrices = null;
      }
    }
    RH.MatrixUse64Bits = !1, RH.MatrixTrackPrecisionChange = !0, RH.MatrixCurrentType = Float32Array, RH.MatrixTrackedMatrices = [];
  },
  21799: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => eH,
      h: () => AH,
      k: () => GH,
      n: () => RH,
      r: () => TH,
      s: () => sH
    });
    class RH {}
    function hH(HH) {
      HH.updateFlag = RH._UpdateFlagSeed++;
    }
    function TH(HH, IH, EH) {
      let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const hH = HH.GM(),
        TH = IH.GM(),
        sH = hH[0],
        eH = hH[1],
        GH = hH[2],
        AH = hH[3],
        VH = hH[4],
        YH = hH[5],
        QH = hH[6],
        JH = hH[7],
        OH = hH[8],
        rH = hH[9],
        FH = hH[10],
        MH = hH[11],
        NH = hH[12],
        iI = hH[13],
        DH = hH[14],
        PH = hH[15],
        XH = TH[0],
        mI = TH[1],
        ZH = TH[2],
        qH = TH[3],
        LH = TH[4],
        gH = TH[5],
        yH = TH[6],
        oH = TH[7],
        kI = TH[8],
        CH = TH[9],
        cH = TH[10],
        UH = TH[11],
        WH = TH[12],
        BH = TH[13],
        fH = TH[14],
        aH = TH[15];
      EH[RH] = sH * XH + eH * LH + GH * kI + AH * WH, EH[RH + 1] = sH * mI + eH * gH + GH * CH + AH * BH, EH[RH + 2] = sH * ZH + eH * yH + GH * cH + AH * fH, EH[RH + 3] = sH * qH + eH * oH + GH * UH + AH * aH, EH[RH + 4] = VH * XH + YH * LH + QH * kI + JH * WH, EH[RH + 5] = VH * mI + YH * gH + QH * CH + JH * BH, EH[RH + 6] = VH * ZH + YH * yH + QH * cH + JH * fH, EH[RH + 7] = VH * qH + YH * oH + QH * UH + JH * aH, EH[RH + 8] = OH * XH + rH * LH + FH * kI + MH * WH, EH[RH + 9] = OH * mI + rH * gH + FH * CH + MH * BH, EH[RH + 10] = OH * ZH + rH * yH + FH * cH + MH * fH, EH[RH + 11] = OH * qH + rH * oH + FH * UH + MH * aH, EH[RH + 12] = NH * XH + iI * LH + DH * kI + PH * WH, EH[RH + 13] = NH * mI + iI * gH + DH * CH + PH * BH, EH[RH + 14] = NH * ZH + iI * yH + DH * cH + PH * fH, EH[RH + 15] = NH * qH + iI * oH + DH * UH + PH * aH;
    }
    function sH(HH, IH, EH) {
      let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      TH(HH, IH, EH.GM(), RH), hH(EH);
    }
    function eH(HH, IH) {
      let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const RH = HH.GM();
      IH[EH] = RH[0], IH[EH + 1] = RH[1], IH[EH + 2] = RH[2], IH[EH + 3] = RH[3], IH[EH + 4] = RH[4], IH[EH + 5] = RH[5], IH[EH + 6] = RH[6], IH[EH + 7] = RH[7], IH[EH + 8] = RH[8], IH[EH + 9] = RH[9], IH[EH + 10] = RH[10], IH[EH + 11] = RH[11], IH[EH + 12] = RH[12], IH[EH + 13] = RH[13], IH[EH + 14] = RH[14], IH[EH + 15] = RH[15];
    }
    function GH(HH, IH) {
      const EH = AH(HH, IH.GM());
      return EH && hH(IH), EH;
    }
    function AH(HH, IH) {
      const EH = HH.GM(),
        RH = EH[0],
        hH = EH[1],
        TH = EH[2],
        sH = EH[3],
        eH = EH[4],
        GH = EH[5],
        AH = EH[6],
        VH = EH[7],
        YH = EH[8],
        QH = EH[9],
        JH = EH[10],
        OH = EH[11],
        rH = EH[12],
        FH = EH[13],
        MH = EH[14],
        NH = EH[15],
        iI = JH * NH - MH * OH,
        DH = QH * NH - FH * OH,
        PH = QH * MH - FH * JH,
        XH = YH * NH - rH * OH,
        mI = YH * MH - JH * rH,
        ZH = YH * FH - rH * QH,
        qH = +(GH * iI - AH * DH + VH * PH),
        LH = -(eH * iI - AH * XH + VH * mI),
        gH = +(eH * DH - GH * XH + VH * ZH),
        yH = -(eH * PH - GH * mI + AH * ZH),
        oH = RH * qH + hH * LH + TH * gH + sH * yH;
      if (0 === oH) return !1;
      const kI = 1 / oH,
        CH = AH * NH - MH * VH,
        cH = GH * NH - FH * VH,
        UH = GH * MH - FH * AH,
        WH = eH * NH - rH * VH,
        BH = eH * MH - rH * AH,
        fH = eH * FH - rH * GH,
        aH = AH * OH - JH * VH,
        nH = GH * OH - QH * VH,
        pH = GH * JH - QH * AH,
        dH = eH * OH - YH * VH,
        uH = eH * JH - YH * AH,
        lH = eH * QH - YH * GH,
        KH = -(hH * iI - TH * DH + sH * PH),
        wH = +(RH * iI - TH * XH + sH * mI),
        zH = -(RH * DH - hH * XH + sH * ZH),
        tH = +(RH * PH - hH * mI + TH * ZH),
        jI = +(hH * CH - TH * cH + sH * UH),
        vH = -(RH * CH - TH * WH + sH * BH),
        bH = +(RH * cH - hH * WH + sH * fH),
        SH = -(RH * UH - hH * BH + TH * fH),
        xH = -(hH * aH - TH * nH + sH * pH),
        HI = +(RH * aH - TH * dH + sH * uH),
        II = -(RH * nH - hH * dH + sH * lH),
        EI = +(RH * pH - hH * uH + TH * lH);
      return IH[0] = qH * kI, IH[1] = KH * kI, IH[2] = jI * kI, IH[3] = xH * kI, IH[4] = LH * kI, IH[5] = wH * kI, IH[6] = vH * kI, IH[7] = HI * kI, IH[8] = gH * kI, IH[9] = zH * kI, IH[10] = bH * kI, IH[11] = II * kI, IH[12] = yH * kI, IH[13] = tH * kI, IH[14] = SH * kI, IH[15] = EI * kI, !0;
    }
    RH._UpdateFlagSeed = 0;
  },
  21764: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => rH,
      h: () => OH,
      l: () => DH,
      p: () => MH,
      t: () => YH,
      x: () => QH,
      y: () => JH
    });
    var RH = EH(21771),
      hH = EH(21776),
      TH = EH(21780),
      sH = EH(21782),
      eH = EH(21791),
      GH = EH(21799),
      AH = EH(21808);
    const VH = HH => parseInt(HH.toString().replace(/\W/g, ""));
    class YH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = HH, this.y = IH;
      }
      toString() {
        return "{X: ".concat(this.x, " Y: ").concat(this.y, "}");
      }
      getClassName() {
        return "Vector2";
      }
      getHashCode() {
        let HH = VH(this.x);
        return HH = 397 * HH ^ VH(this.y), HH;
      }
      toArray(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return HH[IH] = this.x, HH[IH + 1] = this.y, this;
      }
      HO(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return YH.FromArrayToRef(HH, IH, this), this;
      }
      GM() {
        return [this.x, this.y];
      }
      RH(HH) {
        return this.x = HH.x, this.y = HH.y, this;
      }
      nY(HH, IH) {
        return this.x = HH, this.y = IH, this;
      }
      set(HH, IH) {
        return this.nY(HH, IH);
      }
      nO(HH) {
        return this.nY(HH, HH);
      }
      add(HH) {
        return new YH(this.x + HH.x, this.y + HH.y);
      }
      addToRef(HH, IH) {
        return IH.x = this.x + HH.x, IH.y = this.y + HH.y, IH;
      }
      addInPlace(HH) {
        return this.x += HH.x, this.y += HH.y, this;
      }
      addInPlaceFromFloats(HH, IH) {
        return this.x += HH, this.y += IH, this;
      }
      addVector3(HH) {
        return new YH(this.x + HH.x, this.y + HH.y);
      }
      subtract(HH) {
        return new YH(this.x - HH.x, this.y - HH.y);
      }
      subtractToRef(HH, IH) {
        return IH.x = this.x - HH.x, IH.y = this.y - HH.y, IH;
      }
      wr(HH) {
        return this.x -= HH.x, this.y -= HH.y, this;
      }
      multiplyInPlace(HH) {
        return this.x *= HH.x, this.y *= HH.y, this;
      }
      multiply(HH) {
        return new YH(this.x * HH.x, this.y * HH.y);
      }
      multiplyToRef(HH, IH) {
        return IH.x = this.x * HH.x, IH.y = this.y * HH.y, IH;
      }
      multiplyByFloats(HH, IH) {
        return new YH(this.x * HH, this.y * IH);
      }
      divide(HH) {
        return new YH(this.x / HH.x, this.y / HH.y);
      }
      divideToRef(HH, IH) {
        return IH.x = this.x / HH.x, IH.y = this.y / HH.y, IH;
      }
      divideInPlace(HH) {
        return this.x = this.x / HH.x, this.y = this.y / HH.y, this;
      }
      minimizeInPlace(HH) {
        return this.minimizeInPlaceFromFloats(HH.x, HH.y);
      }
      maximizeInPlace(HH) {
        return this.maximizeInPlaceFromFloats(HH.x, HH.y);
      }
      minimizeInPlaceFromFloats(HH, IH) {
        return this.x = Math.min(HH, this.x), this.y = Math.min(IH, this.y), this;
      }
      maximizeInPlaceFromFloats(HH, IH) {
        return this.x = Math.max(HH, this.x), this.y = Math.max(IH, this.y), this;
      }
      subtractFromFloats(HH, IH) {
        return new YH(this.x - HH, this.y - IH);
      }
      subtractFromFloatsToRef(HH, IH, EH) {
        return EH.x = this.x - HH, EH.y = this.y - IH, EH;
      }
      negate() {
        return new YH(-this.x, -this.y);
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this;
      }
      negateToRef(HH) {
        return HH.x = -this.x, HH.y = -this.y, HH;
      }
      scaleInPlace(HH) {
        return this.x *= HH, this.y *= HH, this;
      }
      scale(HH) {
        return new YH(this.x * HH, this.y * HH);
      }
      scaleToRef(HH, IH) {
        return IH.x = this.x * HH, IH.y = this.y * HH, IH;
      }
      scaleAndAddToRef(HH, IH) {
        return IH.x += this.x * HH, IH.y += this.y * HH, IH;
      }
      equals(HH) {
        return HH && this.x === HH.x && this.y === HH.y;
      }
      equalsWithEpsilon(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RH.b;
        return HH && (0, eH.WithinEpsilon)(this.x, HH.x, IH) && (0, eH.WithinEpsilon)(this.y, HH.y, IH);
      }
      equalsToFloats(HH, IH) {
        return this.x === HH && this.y === IH;
      }
      floor() {
        return new YH(Math.floor(this.x), Math.floor(this.y));
      }
      floorToRef(HH) {
        return HH.x = Math.floor(this.x), HH.y = Math.floor(this.y), HH;
      }
      fract() {
        return new YH(this.x - Math.floor(this.x), this.y - Math.floor(this.y));
      }
      fractToRef(HH) {
        return HH.x = this.x - Math.floor(this.x), HH.y = this.y - Math.floor(this.y), HH;
      }
      rotate(HH) {
        return this.rotateToRef(HH, new YH());
      }
      rotateToRef(HH, IH) {
        const EH = Math.cos(HH),
          RH = Math.sin(HH);
        return IH.x = EH * this.x - RH * this.y, IH.y = RH * this.x + EH * this.y, IH;
      }
      length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
      lengthSquared() {
        return this.x * this.x + this.y * this.y;
      }
      normalize() {
        return this.normalizeFromLength(this.length());
      }
      normalizeFromLength(HH) {
        return 0 === HH || 1 === HH ? this : this.scaleInPlace(1 / HH);
      }
      normalizeToNew() {
        const HH = new YH();
        return this.normalizeToRef(HH), HH;
      }
      normalizeToRef(HH) {
        const IH = this.length();
        return 0 === IH && (HH.x = this.x, HH.y = this.y), this.scaleToRef(1 / IH, HH);
      }
      clone() {
        return new YH(this.x, this.y);
      }
      dot(HH) {
        return this.x * HH.x + this.y * HH.y;
      }
      static Zero() {
        return new YH(0, 0);
      }
      static One() {
        return new YH(1, 1);
      }
      static Random() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new YH((0, eH.RandomRange)(HH, IH), (0, eH.RandomRange)(HH, IH));
      }
      static RandomToRef() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).nY((0, eH.RandomRange)(HH, IH), (0, eH.RandomRange)(HH, IH));
      }
      static get ZeroReadOnly() {
        return YH._ZeroReadOnly;
      }
      static Qh(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new YH(HH[IH], HH[IH + 1]);
      }
      static FromArrayToRef(HH, IH, EH) {
        return EH.x = HH[IH], EH.y = HH[IH + 1], EH;
      }
      static FromFloatsToRef(HH, IH, EH) {
        return EH.nY(HH, IH), EH;
      }
      static CatmullRom(HH, IH, EH, RH, hH) {
        const TH = hH * hH,
          sH = hH * TH,
          eH = .5 * (2 * IH.x + (-HH.x + EH.x) * hH + (2 * HH.x - 5 * IH.x + 4 * EH.x - RH.x) * TH + (-HH.x + 3 * IH.x - 3 * EH.x + RH.x) * sH),
          GH = .5 * (2 * IH.y + (-HH.y + EH.y) * hH + (2 * HH.y - 5 * IH.y + 4 * EH.y - RH.y) * TH + (-HH.y + 3 * IH.y - 3 * EH.y + RH.y) * sH);
        return new YH(eH, GH);
      }
      static ClampToRef(HH, IH, EH, RH) {
        return RH.x = (0, eH.Clamp)(HH.x, IH.x, EH.x), RH.y = (0, eH.Clamp)(HH.y, IH.y, EH.y), RH;
      }
      static Clamp(HH, IH, EH) {
        const RH = (0, eH.Clamp)(HH.x, IH.x, EH.x),
          hH = (0, eH.Clamp)(HH.y, IH.y, EH.y);
        return new YH(RH, hH);
      }
      static Hermite(HH, IH, EH, RH, hH) {
        const TH = hH * hH,
          sH = hH * TH,
          eH = 2 * sH - 3 * TH + 1,
          GH = -2 * sH + 3 * TH,
          AH = sH - 2 * TH + hH,
          VH = sH - TH,
          QH = HH.x * eH + EH.x * GH + IH.x * AH + RH.x * VH,
          JH = HH.y * eH + EH.y * GH + IH.y * AH + RH.y * VH;
        return new YH(QH, JH);
      }
      static Hermite1stDerivative(HH, IH, EH, RH, hH) {
        return this.Hermite1stDerivativeToRef(HH, IH, EH, RH, hH, new YH());
      }
      static Hermite1stDerivativeToRef(HH, IH, EH, RH, hH, TH) {
        const sH = hH * hH;
        return TH.x = 6 * (sH - hH) * HH.x + (3 * sH - 4 * hH + 1) * IH.x + 6 * (-sH + hH) * EH.x + (3 * sH - 2 * hH) * RH.x, TH.y = 6 * (sH - hH) * HH.y + (3 * sH - 4 * hH + 1) * IH.y + 6 * (-sH + hH) * EH.y + (3 * sH - 2 * hH) * RH.y, TH;
      }
      static Lerp(HH, IH, EH) {
        return YH.LerpToRef(HH, IH, EH, new YH());
      }
      static LerpToRef(HH, IH, EH, RH) {
        return RH.x = HH.x + (IH.x - HH.x) * EH, RH.y = HH.y + (IH.y - HH.y) * EH, RH;
      }
      static Dot(HH, IH) {
        return HH.x * IH.x + HH.y * IH.y;
      }
      static Normalize(HH) {
        return YH.NormalizeToRef(HH, new YH());
      }
      static NormalizeToRef(HH, IH) {
        return HH.normalizeToRef(IH), IH;
      }
      static Minimize(HH, IH) {
        const EH = HH.x < IH.x ? HH.x : IH.x,
          RH = HH.y < IH.y ? HH.y : IH.y;
        return new YH(EH, RH);
      }
      static Maximize(HH, IH) {
        const EH = HH.x > IH.x ? HH.x : IH.x,
          RH = HH.y > IH.y ? HH.y : IH.y;
        return new YH(EH, RH);
      }
      static Transform(HH, IH) {
        return YH.TransformToRef(HH, IH, new YH());
      }
      static TransformToRef(HH, IH, EH) {
        const RH = IH.m,
          hH = HH.x * RH[0] + HH.y * RH[4] + RH[12],
          TH = HH.x * RH[1] + HH.y * RH[5] + RH[13];
        return EH.x = hH, EH.y = TH, EH;
      }
      static PointInTriangle(HH, IH, EH, RH) {
        const hH = .5 * (-EH.y * RH.x + IH.y * (-EH.x + RH.x) + IH.x * (EH.y - RH.y) + EH.x * RH.y),
          TH = hH < 0 ? -1 : 1,
          sH = (IH.y * RH.x - IH.x * RH.y + (RH.y - IH.y) * HH.x + (IH.x - RH.x) * HH.y) * TH,
          eH = (IH.x * EH.y - IH.y * EH.x + (IH.y - EH.y) * HH.x + (EH.x - IH.x) * HH.y) * TH;
        return sH > 0 && eH > 0 && sH + eH < 2 * hH * TH;
      }
      static Distance(HH, IH) {
        return Math.sqrt(YH.DistanceSquared(HH, IH));
      }
      static DistanceSquared(HH, IH) {
        const EH = HH.x - IH.x,
          RH = HH.y - IH.y;
        return EH * EH + RH * RH;
      }
      static Center(HH, IH) {
        return YH.CenterToRef(HH, IH, new YH());
      }
      static CenterToRef(HH, IH, EH) {
        return EH.nY((HH.x + IH.x) / 2, (HH.y + IH.y) / 2);
      }
      static DistanceOfPointFromSegment(HH, IH, EH) {
        const RH = YH.DistanceSquared(IH, EH);
        if (0 === RH) return YH.Distance(HH, IH);
        const hH = EH.subtract(IH),
          TH = Math.max(0, Math.min(1, YH.Dot(HH.subtract(IH), hH) / RH)),
          sH = IH.add(hH.multiplyByFloats(TH, TH));
        return YH.Distance(HH, sH);
      }
    }
    YH._V8PerformanceHack = new YH(.5, .5), YH._ZeroReadOnly = YH.Zero();
    class QH {
      get x() {
        return this._x;
      }
      set x(HH) {
        this._x = HH, this._isDirty = !0;
      }
      get y() {
        return this._y;
      }
      set y(HH) {
        this._y = HH, this._isDirty = !0;
      }
      get z() {
        return this._z;
      }
      set z(HH) {
        this._z = HH, this._isDirty = !0;
      }
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = HH, this._y = IH, this._z = EH;
      }
      toString() {
        return "{X: ".concat(this._x, " Y: ").concat(this._y, " Z: ").concat(this._z, "}");
      }
      getClassName() {
        return "Rh";
      }
      getHashCode() {
        let HH = VH(this._x);
        return HH = 397 * HH ^ VH(this._y), HH = 397 * HH ^ VH(this._z), HH;
      }
      GM() {
        return [this._x, this._y, this._z];
      }
      toArray(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return HH[IH] = this._x, HH[IH + 1] = this._y, HH[IH + 2] = this._z, this;
      }
      HO(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return QH.FromArrayToRef(HH, IH, this), this;
      }
      toQuaternion() {
        return OH.RotationYawPitchRoll(this._y, this._x, this._z);
      }
      addInPlace(HH) {
        return this._x += HH._x, this._y += HH._y, this._z += HH._z, this._isDirty = !0, this;
      }
      addInPlaceFromFloats(HH, IH, EH) {
        return this._x += HH, this._y += IH, this._z += EH, this._isDirty = !0, this;
      }
      add(HH) {
        return new QH(this._x + HH._x, this._y + HH._y, this._z + HH._z);
      }
      addToRef(HH, IH) {
        return IH._x = this._x + HH._x, IH._y = this._y + HH._y, IH._z = this._z + HH._z, IH._isDirty = !0, IH;
      }
      wr(HH) {
        return this._x -= HH._x, this._y -= HH._y, this._z -= HH._z, this._isDirty = !0, this;
      }
      subtract(HH) {
        return new QH(this._x - HH._x, this._y - HH._y, this._z - HH._z);
      }
      subtractToRef(HH, IH) {
        return this.subtractFromFloatsToRef(HH._x, HH._y, HH._z, IH);
      }
      subtractFromFloats(HH, IH, EH) {
        return new QH(this._x - HH, this._y - IH, this._z - EH);
      }
      subtractFromFloatsToRef(HH, IH, EH, RH) {
        return RH._x = this._x - HH, RH._y = this._y - IH, RH._z = this._z - EH, RH._isDirty = !0, RH;
      }
      negate() {
        return new QH(-this._x, -this._y, -this._z);
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this;
      }
      negateToRef(HH) {
        return HH._x = -1 * this._x, HH._y = -1 * this._y, HH._z = -1 * this._z, HH._isDirty = !0, HH;
      }
      scaleInPlace(HH) {
        return this._x *= HH, this._y *= HH, this._z *= HH, this._isDirty = !0, this;
      }
      scale(HH) {
        return new QH(this._x * HH, this._y * HH, this._z * HH);
      }
      scaleToRef(HH, IH) {
        return IH._x = this._x * HH, IH._y = this._y * HH, IH._z = this._z * HH, IH._isDirty = !0, IH;
      }
      getNormalToRef(HH) {
        const IH = this.length();
        let EH = Math.acos(this._y / IH);
        const RH = Math.atan2(this._z, this._x);
        EH > Math.PI / 2 ? EH -= Math.PI / 2 : EH += Math.PI / 2;
        const hH = IH * Math.sin(EH) * Math.cos(RH),
          TH = IH * Math.cos(EH),
          sH = IH * Math.sin(EH) * Math.sin(RH);
        return HH.set(hH, TH, sH), HH;
      }
      applyRotationQuaternionToRef(HH, IH) {
        const EH = this._x,
          RH = this._y,
          hH = this._z,
          TH = HH._x,
          sH = HH._y,
          eH = HH._z,
          GH = HH._w,
          AH = 2 * (sH * hH - eH * RH),
          VH = 2 * (eH * EH - TH * hH),
          YH = 2 * (TH * RH - sH * EH);
        return IH._x = EH + GH * AH + sH * YH - eH * VH, IH._y = RH + GH * VH + eH * AH - TH * YH, IH._z = hH + GH * YH + TH * VH - sH * AH, IH._isDirty = !0, IH;
      }
      applyRotationQuaternionInPlace(HH) {
        return this.applyRotationQuaternionToRef(HH, this);
      }
      applyRotationQuaternion(HH) {
        return this.applyRotationQuaternionToRef(HH, new QH());
      }
      scaleAndAddToRef(HH, IH) {
        return IH._x += this._x * HH, IH._y += this._y * HH, IH._z += this._z * HH, IH._isDirty = !0, IH;
      }
      projectOnPlane(HH, IH) {
        return this.projectOnPlaneToRef(HH, IH, new QH());
      }
      projectOnPlaneToRef(HH, IH, EH) {
        const RH = HH.normal,
          hH = HH.d,
          TH = FH.Rh[0];
        this.subtractToRef(IH, TH), TH.normalize();
        const sH = QH.Dot(TH, RH);
        if (Math.abs(sH) < 1e-10) EH.nO(1 / 0);else {
          const HH = -(QH.Dot(IH, RH) + hH) / sH,
            eH = TH.scaleInPlace(HH);
          IH.addToRef(eH, EH);
        }
        return EH;
      }
      equals(HH) {
        return HH && this._x === HH._x && this._y === HH._y && this._z === HH._z;
      }
      equalsWithEpsilon(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RH.b;
        return HH && (0, eH.WithinEpsilon)(this._x, HH._x, IH) && (0, eH.WithinEpsilon)(this._y, HH._y, IH) && (0, eH.WithinEpsilon)(this._z, HH._z, IH);
      }
      equalsToFloats(HH, IH, EH) {
        return this._x === HH && this._y === IH && this._z === EH;
      }
      multiplyInPlace(HH) {
        return this._x *= HH._x, this._y *= HH._y, this._z *= HH._z, this._isDirty = !0, this;
      }
      multiply(HH) {
        return this.multiplyByFloats(HH._x, HH._y, HH._z);
      }
      multiplyToRef(HH, IH) {
        return IH._x = this._x * HH._x, IH._y = this._y * HH._y, IH._z = this._z * HH._z, IH._isDirty = !0, IH;
      }
      multiplyByFloats(HH, IH, EH) {
        return new QH(this._x * HH, this._y * IH, this._z * EH);
      }
      divide(HH) {
        return new QH(this._x / HH._x, this._y / HH._y, this._z / HH._z);
      }
      divideToRef(HH, IH) {
        return IH._x = this._x / HH._x, IH._y = this._y / HH._y, IH._z = this._z / HH._z, IH._isDirty = !0, IH;
      }
      divideInPlace(HH) {
        return this._x = this._x / HH._x, this._y = this._y / HH._y, this._z = this._z / HH._z, this._isDirty = !0, this;
      }
      minimizeInPlace(HH) {
        return this.minimizeInPlaceFromFloats(HH._x, HH._y, HH._z);
      }
      maximizeInPlace(HH) {
        return this.maximizeInPlaceFromFloats(HH._x, HH._y, HH._z);
      }
      minimizeInPlaceFromFloats(HH, IH, EH) {
        return HH < this._x && (this.x = HH), IH < this._y && (this.y = IH), EH < this._z && (this.z = EH), this;
      }
      maximizeInPlaceFromFloats(HH, IH, EH) {
        return HH > this._x && (this.x = HH), IH > this._y && (this.y = IH), EH > this._z && (this.z = EH), this;
      }
      isNonUniformWithinEpsilon(HH) {
        const IH = Math.abs(this._x),
          EH = Math.abs(this._y);
        if (!(0, eH.WithinEpsilon)(IH, EH, HH)) return !0;
        const RH = Math.abs(this._z);
        return !(0, eH.WithinEpsilon)(IH, RH, HH) || !(0, eH.WithinEpsilon)(EH, RH, HH);
      }
      get isNonUniform() {
        const HH = Math.abs(this._x);
        if (HH !== Math.abs(this._y)) return !0;
        return HH !== Math.abs(this._z);
      }
      floorToRef(HH) {
        return HH._x = Math.floor(this._x), HH._y = Math.floor(this._y), HH._z = Math.floor(this._z), HH._isDirty = !0, HH;
      }
      floor() {
        return new QH(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z));
      }
      fractToRef(HH) {
        return HH._x = this._x - Math.floor(this._x), HH._y = this._y - Math.floor(this._y), HH._z = this._z - Math.floor(this._z), HH._isDirty = !0, HH;
      }
      fract() {
        return new QH(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z));
      }
      length() {
        return Math.sqrt(this.lengthSquared());
      }
      lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z;
      }
      get hasAZeroComponent() {
        return this._x * this._y * this._z === 0;
      }
      normalize() {
        return this.normalizeFromLength(this.length());
      }
      reorderInPlace(HH) {
        if ("xyz" === (HH = HH.toLowerCase())) return this;
        const IH = FH.Rh[0].RH(this);
        return this.x = IH[HH[0]], this.y = IH[HH[1]], this.z = IH[HH[2]], this;
      }
      rotateByQuaternionToRef(HH, IH) {
        return HH.toRotationMatrix(FH.Matrix[0]), QH.TransformCoordinatesToRef(this, FH.Matrix[0], IH), IH;
      }
      rotateByQuaternionAroundPointToRef(HH, IH, EH) {
        return this.subtractToRef(IH, FH.Rh[0]), FH.Rh[0].rotateByQuaternionToRef(HH, FH.Rh[0]), IH.addToRef(FH.Rh[0], EH), EH;
      }
      cross(HH) {
        return QH.CrossToRef(this, HH, new QH());
      }
      normalizeFromLength(HH) {
        return 0 === HH || 1 === HH ? this : this.scaleInPlace(1 / HH);
      }
      normalizeToNew() {
        return this.normalizeToRef(new QH());
      }
      normalizeToRef(HH) {
        const IH = this.length();
        return 0 === IH || 1 === IH ? (HH._x = this._x, HH._y = this._y, HH._z = this._z, HH._isDirty = !0, HH) : this.scaleToRef(1 / IH, HH);
      }
      clone() {
        return new QH(this._x, this._y, this._z);
      }
      RH(HH) {
        return this.nY(HH._x, HH._y, HH._z);
      }
      nY(HH, IH, EH) {
        return this._x = HH, this._y = IH, this._z = EH, this._isDirty = !0, this;
      }
      set(HH, IH, EH) {
        return this.nY(HH, IH, EH);
      }
      nO(HH) {
        return this._x = this._y = this._z = HH, this._isDirty = !0, this;
      }
      static GetClipFactor(HH, IH, EH, RH) {
        const hH = QH.Dot(HH, EH);
        return (hH - RH) / (hH - QH.Dot(IH, EH));
      }
      static GetAngleBetweenVectors(HH, IH, EH) {
        const RH = HH.normalizeToRef(FH.Rh[1]),
          hH = IH.normalizeToRef(FH.Rh[2]);
        let TH = QH.Dot(RH, hH);
        TH = (0, eH.Clamp)(TH, -1, 1);
        const sH = Math.acos(TH),
          GH = FH.Rh[3];
        return QH.CrossToRef(RH, hH, GH), QH.Dot(GH, EH) > 0 ? isNaN(sH) ? 0 : sH : isNaN(sH) ? -Math.PI : -Math.acos(TH);
      }
      static GetAngleBetweenVectorsOnPlane(HH, IH, EH) {
        FH.Rh[0].RH(HH);
        const RH = FH.Rh[0];
        FH.Rh[1].RH(IH);
        const hH = FH.Rh[1];
        FH.Rh[2].RH(EH);
        const TH = FH.Rh[2],
          sH = FH.Rh[3],
          GH = FH.Rh[4];
        RH.normalize(), hH.normalize(), TH.normalize(), QH.CrossToRef(TH, RH, sH), QH.CrossToRef(sH, TH, GH);
        const AH = Math.atan2(QH.Dot(hH, sH), QH.Dot(hH, GH));
        return (0, eH.NormalizeRadians)(AH);
      }
      static PitchYawRollToMoveBetweenPointsToRef(HH, IH, EH) {
        const RH = MH.Rh[0];
        return IH.subtractToRef(HH, RH), EH._y = Math.atan2(RH.x, RH.z) || 0, EH._x = Math.atan2(Math.sqrt(RH.x ** 2 + RH.z ** 2), RH.y) || 0, EH._z = 0, EH._isDirty = !0, EH;
      }
      static PitchYawRollToMoveBetweenPoints(HH, IH) {
        const EH = QH.Zero();
        return QH.PitchYawRollToMoveBetweenPointsToRef(HH, IH, EH);
      }
      static SlerpToRef(HH, IH, EH, hH) {
        EH = (0, eH.Clamp)(EH, 0, 1);
        const TH = FH.Rh[0],
          sH = FH.Rh[1];
        TH.RH(HH);
        const GH = TH.length();
        TH.normalizeFromLength(GH), sH.RH(IH);
        const AH = sH.length();
        sH.normalizeFromLength(AH);
        const VH = QH.Dot(TH, sH);
        let YH, JH;
        if (VH < 1 - RH.b) {
          const HH = Math.acos(VH),
            IH = 1 / Math.sin(HH);
          YH = Math.sin((1 - EH) * HH) * IH, JH = Math.sin(EH * HH) * IH;
        } else YH = 1 - EH, JH = EH;
        return TH.scaleInPlace(YH), sH.scaleInPlace(JH), hH.RH(TH).addInPlace(sH), hH.scaleInPlace((0, eH.Lerp)(GH, AH, EH)), hH;
      }
      static SmoothToRef(HH, IH, EH, RH, hH) {
        return QH.SlerpToRef(HH, IH, 0 === RH ? 1 : EH / RH, hH), hH;
      }
      static Qh(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new QH(HH[IH], HH[IH + 1], HH[IH + 2]);
      }
      static FromFloatArray(HH, IH) {
        return QH.Qh(HH, IH);
      }
      static FromArrayToRef(HH, IH, EH) {
        return EH._x = HH[IH], EH._y = HH[IH + 1], EH._z = HH[IH + 2], EH._isDirty = !0, EH;
      }
      static FromFloatArrayToRef(HH, IH, EH) {
        return QH.FromArrayToRef(HH, IH, EH);
      }
      static FromFloatsToRef(HH, IH, EH, RH) {
        return RH.nY(HH, IH, EH), RH;
      }
      static Zero() {
        return new QH(0, 0, 0);
      }
      static One() {
        return new QH(1, 1, 1);
      }
      static Up() {
        return new QH(0, 1, 0);
      }
      static get UpReadOnly() {
        return QH._UpReadOnly;
      }
      static get DownReadOnly() {
        return QH._DownReadOnly;
      }
      static get RightReadOnly() {
        return QH._RightReadOnly;
      }
      static get LeftReadOnly() {
        return QH._LeftReadOnly;
      }
      static get LeftHandedForwardReadOnly() {
        return QH._LeftHandedForwardReadOnly;
      }
      static get RightHandedForwardReadOnly() {
        return QH._RightHandedForwardReadOnly;
      }
      static get LeftHandedBackwardReadOnly() {
        return QH._LeftHandedBackwardReadOnly;
      }
      static get RightHandedBackwardReadOnly() {
        return QH._RightHandedBackwardReadOnly;
      }
      static get ZeroReadOnly() {
        return QH._ZeroReadOnly;
      }
      static get OneReadOnly() {
        return QH._OneReadOnly;
      }
      static Down() {
        return new QH(0, -1, 0);
      }
      static Forward() {
        return new QH(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1);
      }
      static Backward() {
        return new QH(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1);
      }
      static Right() {
        return new QH(1, 0, 0);
      }
      static Left() {
        return new QH(-1, 0, 0);
      }
      static Random() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new QH((0, eH.RandomRange)(HH, IH), (0, eH.RandomRange)(HH, IH), (0, eH.RandomRange)(HH, IH));
      }
      static RandomToRef() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).nY((0, eH.RandomRange)(HH, IH), (0, eH.RandomRange)(HH, IH), (0, eH.RandomRange)(HH, IH));
      }
      static TransformCoordinates(HH, IH) {
        const EH = QH.Zero();
        return QH.TransformCoordinatesToRef(HH, IH, EH), EH;
      }
      static TransformCoordinatesToRef(HH, IH, EH) {
        return QH.TransformCoordinatesFromFloatsToRef(HH._x, HH._y, HH._z, IH, EH), EH;
      }
      static TransformCoordinatesFromFloatsToRef(HH, IH, EH, RH, hH) {
        const TH = RH.m,
          sH = HH * TH[0] + IH * TH[4] + EH * TH[8] + TH[12],
          eH = HH * TH[1] + IH * TH[5] + EH * TH[9] + TH[13],
          GH = HH * TH[2] + IH * TH[6] + EH * TH[10] + TH[14],
          AH = 1 / (HH * TH[3] + IH * TH[7] + EH * TH[11] + TH[15]);
        return hH._x = sH * AH, hH._y = eH * AH, hH._z = GH * AH, hH._isDirty = !0, hH;
      }
      static TransformNormal(HH, IH) {
        const EH = QH.Zero();
        return QH.TransformNormalToRef(HH, IH, EH), EH;
      }
      static TransformNormalToRef(HH, IH, EH) {
        return this.TransformNormalFromFloatsToRef(HH._x, HH._y, HH._z, IH, EH), EH;
      }
      static TransformNormalFromFloatsToRef(HH, IH, EH, RH, hH) {
        const TH = RH.m;
        return hH._x = HH * TH[0] + IH * TH[4] + EH * TH[8], hH._y = HH * TH[1] + IH * TH[5] + EH * TH[9], hH._z = HH * TH[2] + IH * TH[6] + EH * TH[10], hH._isDirty = !0, hH;
      }
      static CatmullRom(HH, IH, EH, RH, hH) {
        const TH = hH * hH,
          sH = hH * TH,
          eH = .5 * (2 * IH._x + (-HH._x + EH._x) * hH + (2 * HH._x - 5 * IH._x + 4 * EH._x - RH._x) * TH + (-HH._x + 3 * IH._x - 3 * EH._x + RH._x) * sH),
          GH = .5 * (2 * IH._y + (-HH._y + EH._y) * hH + (2 * HH._y - 5 * IH._y + 4 * EH._y - RH._y) * TH + (-HH._y + 3 * IH._y - 3 * EH._y + RH._y) * sH),
          AH = .5 * (2 * IH._z + (-HH._z + EH._z) * hH + (2 * HH._z - 5 * IH._z + 4 * EH._z - RH._z) * TH + (-HH._z + 3 * IH._z - 3 * EH._z + RH._z) * sH);
        return new QH(eH, GH, AH);
      }
      static Clamp(HH, IH, EH) {
        const RH = new QH();
        return QH.ClampToRef(HH, IH, EH, RH), RH;
      }
      static ClampToRef(HH, IH, EH, RH) {
        let hH = HH._x;
        hH = hH > EH._x ? EH._x : hH, hH = hH < IH._x ? IH._x : hH;
        let TH = HH._y;
        TH = TH > EH._y ? EH._y : TH, TH = TH < IH._y ? IH._y : TH;
        let sH = HH._z;
        return sH = sH > EH._z ? EH._z : sH, sH = sH < IH._z ? IH._z : sH, RH.nY(hH, TH, sH), RH;
      }
      static CheckExtends(HH, IH, EH) {
        IH.minimizeInPlace(HH), EH.maximizeInPlace(HH);
      }
      static Hermite(HH, IH, EH, RH, hH) {
        const TH = hH * hH,
          sH = hH * TH,
          eH = 2 * sH - 3 * TH + 1,
          GH = -2 * sH + 3 * TH,
          AH = sH - 2 * TH + hH,
          VH = sH - TH,
          YH = HH._x * eH + EH._x * GH + IH._x * AH + RH._x * VH,
          JH = HH._y * eH + EH._y * GH + IH._y * AH + RH._y * VH,
          OH = HH._z * eH + EH._z * GH + IH._z * AH + RH._z * VH;
        return new QH(YH, JH, OH);
      }
      static Hermite1stDerivative(HH, IH, EH, RH, hH) {
        const TH = new QH();
        return this.Hermite1stDerivativeToRef(HH, IH, EH, RH, hH, TH), TH;
      }
      static Hermite1stDerivativeToRef(HH, IH, EH, RH, hH, TH) {
        const sH = hH * hH;
        return TH._x = 6 * (sH - hH) * HH._x + (3 * sH - 4 * hH + 1) * IH._x + 6 * (-sH + hH) * EH._x + (3 * sH - 2 * hH) * RH._x, TH._y = 6 * (sH - hH) * HH._y + (3 * sH - 4 * hH + 1) * IH._y + 6 * (-sH + hH) * EH._y + (3 * sH - 2 * hH) * RH._y, TH._z = 6 * (sH - hH) * HH._z + (3 * sH - 4 * hH + 1) * IH._z + 6 * (-sH + hH) * EH._z + (3 * sH - 2 * hH) * RH._z, TH._isDirty = !0, TH;
      }
      static Lerp(HH, IH, EH) {
        const RH = new QH(0, 0, 0);
        return QH.LerpToRef(HH, IH, EH, RH), RH;
      }
      static LerpToRef(HH, IH, EH, RH) {
        return RH._x = HH._x + (IH._x - HH._x) * EH, RH._y = HH._y + (IH._y - HH._y) * EH, RH._z = HH._z + (IH._z - HH._z) * EH, RH._isDirty = !0, RH;
      }
      static Dot(HH, IH) {
        return HH._x * IH._x + HH._y * IH._y + HH._z * IH._z;
      }
      dot(HH) {
        return this._x * HH._x + this._y * HH._y + this._z * HH._z;
      }
      static Cross(HH, IH) {
        const EH = new QH();
        return QH.CrossToRef(HH, IH, EH), EH;
      }
      static CrossToRef(HH, IH, EH) {
        const RH = HH._y * IH._z - HH._z * IH._y,
          hH = HH._z * IH._x - HH._x * IH._z,
          TH = HH._x * IH._y - HH._y * IH._x;
        return EH.nY(RH, hH, TH), EH;
      }
      static Normalize(HH) {
        const IH = QH.Zero();
        return QH.NormalizeToRef(HH, IH), IH;
      }
      static NormalizeToRef(HH, IH) {
        return HH.normalizeToRef(IH), IH;
      }
      static Project(HH, IH, EH, RH) {
        const hH = new QH();
        return QH.ProjectToRef(HH, IH, EH, RH, hH), hH;
      }
      static ProjectToRef(HH, IH, EH, RH, hH) {
        var TH;
        const eH = RH.width,
          GH = RH.height,
          AH = RH.x,
          VH = RH.y,
          YH = FH.Matrix[1],
          JH = null === (TH = sH.e.LastCreatedEngine) || void 0 === TH ? void 0 : TH.isNDCHalfZRange,
          OH = JH ? 1 : .5,
          MH = JH ? 0 : .5;
        rH.FromValuesToRef(eH / 2, 0, 0, 0, 0, -GH / 2, 0, 0, 0, 0, OH, 0, AH + eH / 2, GH / 2 + VH, MH, 1, YH);
        const NH = FH.Matrix[0];
        return IH.multiplyToRef(EH, NH), NH.multiplyToRef(YH, NH), QH.TransformCoordinatesToRef(HH, NH, hH), hH;
      }
      static Reflect(HH, IH) {
        return this.ReflectToRef(HH, IH, new QH());
      }
      static ReflectToRef(HH, IH, EH) {
        const RH = MH.Rh[0];
        return RH.RH(IH).scaleInPlace(2 * QH.Dot(HH, IH)), EH.RH(HH).wr(RH);
      }
      static UnprojectFromTransform(HH, IH, EH, RH, hH) {
        return this.Unproject(HH, IH, EH, RH, hH, rH.IdentityReadOnly);
      }
      static Unproject(HH, IH, EH, RH, hH, TH) {
        const sH = new QH();
        return QH.UnprojectToRef(HH, IH, EH, RH, hH, TH, sH), sH;
      }
      static UnprojectToRef(HH, IH, EH, RH, hH, TH, sH) {
        return QH.UnprojectFloatsToRef(HH._x, HH._y, HH._z, IH, EH, RH, hH, TH, sH), sH;
      }
      static UnprojectFloatsToRef(HH, IH, EH, RH, hH, TH, eH, GH, AH) {
        var VH;
        const YH = FH.Matrix[0];
        TH.multiplyToRef(eH, YH), YH.multiplyToRef(GH, YH), YH.invert();
        const JH = FH.Rh[0];
        return JH.x = HH / RH * 2 - 1, JH.y = -(IH / hH * 2 - 1), null !== (VH = sH.e.LastCreatedEngine) && void 0 !== VH && VH.isNDCHalfZRange ? JH.z = EH : JH.z = 2 * EH - 1, QH.TransformCoordinatesToRef(JH, YH, AH), AH;
      }
      static Minimize(HH, IH) {
        const EH = new QH();
        return EH.RH(HH), EH.minimizeInPlace(IH), EH;
      }
      static Maximize(HH, IH) {
        const EH = new QH();
        return EH.RH(HH), EH.maximizeInPlace(IH), EH;
      }
      static Distance(HH, IH) {
        return Math.sqrt(QH.DistanceSquared(HH, IH));
      }
      static DistanceSquared(HH, IH) {
        const EH = HH._x - IH._x,
          RH = HH._y - IH._y,
          hH = HH._z - IH._z;
        return EH * EH + RH * RH + hH * hH;
      }
      static ProjectOnTriangleToRef(HH, IH, EH, hH, TH) {
        const sH = FH.Rh[0],
          GH = FH.Rh[1],
          AH = FH.Rh[2],
          VH = FH.Rh[3],
          YH = FH.Rh[4];
        EH.subtractToRef(IH, sH), hH.subtractToRef(IH, GH), hH.subtractToRef(EH, AH);
        const JH = sH.length(),
          OH = GH.length(),
          rH = AH.length();
        if (JH < RH.b || OH < RH.b || rH < RH.b) return TH.RH(IH), QH.Distance(HH, IH);
        HH.subtractToRef(IH, YH), QH.CrossToRef(sH, GH, VH);
        const MH = VH.length();
        if (MH < RH.b) return TH.RH(IH), QH.Distance(HH, IH);
        VH.normalizeFromLength(MH);
        let NH = YH.length();
        if (NH < RH.b) return TH.RH(IH), 0;
        YH.normalizeFromLength(NH);
        const iI = QH.Dot(VH, YH),
          DH = FH.Rh[5],
          PH = FH.Rh[6];
        DH.RH(VH).scaleInPlace(-NH * iI), PH.RH(HH).addInPlace(DH);
        const XH = FH.Rh[4],
          mI = FH.Rh[5],
          ZH = FH.Rh[7],
          qH = FH.Rh[8];
        XH.RH(sH).scaleInPlace(1 / JH), qH.RH(GH).scaleInPlace(1 / OH), XH.addInPlace(qH).scaleInPlace(-1), mI.RH(sH).scaleInPlace(-1 / JH), qH.RH(AH).scaleInPlace(1 / rH), mI.addInPlace(qH).scaleInPlace(-1), ZH.RH(AH).scaleInPlace(-1 / rH), qH.RH(GH).scaleInPlace(-1 / OH), ZH.addInPlace(qH).scaleInPlace(-1);
        const LH = FH.Rh[9];
        let gH;
        LH.RH(PH).wr(IH), QH.CrossToRef(XH, LH, qH), gH = QH.Dot(qH, VH);
        const yH = gH;
        LH.RH(PH).wr(EH), QH.CrossToRef(mI, LH, qH), gH = QH.Dot(qH, VH);
        const oH = gH;
        LH.RH(PH).wr(hH), QH.CrossToRef(ZH, LH, qH), gH = QH.Dot(qH, VH);
        const kI = gH,
          CH = FH.Rh[10];
        let cH, UH;
        yH > 0 && oH < 0 ? (CH.RH(sH), cH = IH, UH = EH) : oH > 0 && kI < 0 ? (CH.RH(AH), cH = EH, UH = hH) : (CH.RH(GH).scaleInPlace(-1), cH = hH, UH = IH);
        const WH = FH.Rh[9],
          BH = FH.Rh[4];
        cH.subtractToRef(PH, qH), UH.subtractToRef(PH, WH), QH.CrossToRef(qH, WH, BH);
        if (!(QH.Dot(BH, VH) < 0)) return TH.RH(PH), Math.abs(NH * iI);
        const fH = FH.Rh[5];
        QH.CrossToRef(CH, BH, fH), fH.normalize();
        const aH = FH.Rh[9];
        aH.RH(cH).wr(PH);
        const nH = aH.length();
        if (nH < RH.b) return TH.RH(cH), QH.Distance(HH, cH);
        aH.normalizeFromLength(nH);
        const pH = QH.Dot(fH, aH),
          dH = FH.Rh[7];
        dH.RH(PH).addInPlace(fH.scaleInPlace(nH * pH)), qH.RH(dH).wr(cH), NH = CH.length(), CH.normalizeFromLength(NH);
        let uH = QH.Dot(qH, CH) / Math.max(NH, RH.b);
        return uH = (0, eH.Clamp)(uH, 0, 1), dH.RH(cH).addInPlace(CH.scaleInPlace(uH * NH)), TH.RH(dH), QH.Distance(HH, dH);
      }
      static Center(HH, IH) {
        return QH.CenterToRef(HH, IH, QH.Zero());
      }
      static CenterToRef(HH, IH, EH) {
        return EH.nY((HH._x + IH._x) / 2, (HH._y + IH._y) / 2, (HH._z + IH._z) / 2);
      }
      static RotationFromAxis(HH, IH, EH) {
        const RH = new QH();
        return QH.RotationFromAxisToRef(HH, IH, EH, RH), RH;
      }
      static RotationFromAxisToRef(HH, IH, EH, RH) {
        const hH = FH.Quaternion[0];
        return OH.RotationQuaternionFromAxisToRef(HH, IH, EH, hH), hH.toEulerAnglesToRef(RH), RH;
      }
    }
    QH._V8PerformanceHack = new QH(.5, .5, .5), QH._UpReadOnly = QH.Up(), QH._DownReadOnly = QH.Down(), QH._LeftHandedForwardReadOnly = QH.Forward(!1), QH._RightHandedForwardReadOnly = QH.Forward(!0), QH._LeftHandedBackwardReadOnly = QH.Backward(!1), QH._RightHandedBackwardReadOnly = QH.Backward(!0), QH._RightReadOnly = QH.Right(), QH._LeftReadOnly = QH.Left(), QH._ZeroReadOnly = QH.Zero(), QH._OneReadOnly = QH.One();
    class JH {
      get x() {
        return this._x;
      }
      set x(HH) {
        this._x = HH, this._isDirty = !0;
      }
      get y() {
        return this._y;
      }
      set y(HH) {
        this._y = HH, this._isDirty = !0;
      }
      get z() {
        return this._z;
      }
      set z(HH) {
        this._z = HH, this._isDirty = !0;
      }
      get w() {
        return this._w;
      }
      set w(HH) {
        this._w = HH, this._isDirty = !0;
      }
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = HH, this._y = IH, this._z = EH, this._w = RH;
      }
      toString() {
        return "{X: ".concat(this._x, " Y: ").concat(this._y, " Z: ").concat(this._z, " W: ").concat(this._w, "}");
      }
      getClassName() {
        return "Vector4";
      }
      getHashCode() {
        let HH = VH(this._x);
        return HH = 397 * HH ^ VH(this._y), HH = 397 * HH ^ VH(this._z), HH = 397 * HH ^ VH(this._w), HH;
      }
      GM() {
        return [this._x, this._y, this._z, this._w];
      }
      toArray(HH, IH) {
        return void 0 === IH && (IH = 0), HH[IH] = this._x, HH[IH + 1] = this._y, HH[IH + 2] = this._z, HH[IH + 3] = this._w, this;
      }
      HO(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return JH.FromArrayToRef(HH, IH, this), this;
      }
      addInPlace(HH) {
        return this.x += HH._x, this.y += HH._y, this.z += HH._z, this.w += HH._w, this;
      }
      addInPlaceFromFloats(HH, IH, EH, RH) {
        return this.x += HH, this.y += IH, this.z += EH, this.w += RH, this;
      }
      add(HH) {
        return new JH(this._x + HH.x, this._y + HH.y, this._z + HH.z, this._w + HH.w);
      }
      addToRef(HH, IH) {
        return IH.x = this._x + HH.x, IH.y = this._y + HH.y, IH.z = this._z + HH.z, IH.w = this._w + HH.w, IH;
      }
      wr(HH) {
        return this.x -= HH.x, this.y -= HH.y, this.z -= HH.z, this.w -= HH.w, this;
      }
      subtract(HH) {
        return new JH(this._x - HH.x, this._y - HH.y, this._z - HH.z, this._w - HH.w);
      }
      subtractToRef(HH, IH) {
        return IH.x = this._x - HH.x, IH.y = this._y - HH.y, IH.z = this._z - HH.z, IH.w = this._w - HH.w, IH;
      }
      subtractFromFloats(HH, IH, EH, RH) {
        return new JH(this._x - HH, this._y - IH, this._z - EH, this._w - RH);
      }
      subtractFromFloatsToRef(HH, IH, EH, RH, hH) {
        return hH.x = this._x - HH, hH.y = this._y - IH, hH.z = this._z - EH, hH.w = this._w - RH, hH;
      }
      negate() {
        return new JH(-this._x, -this._y, -this._z, -this._w);
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this;
      }
      negateToRef(HH) {
        return HH.x = -this._x, HH.y = -this._y, HH.z = -this._z, HH.w = -this._w, HH;
      }
      scaleInPlace(HH) {
        return this.x *= HH, this.y *= HH, this.z *= HH, this.w *= HH, this;
      }
      scale(HH) {
        return new JH(this._x * HH, this._y * HH, this._z * HH, this._w * HH);
      }
      scaleToRef(HH, IH) {
        return IH.x = this._x * HH, IH.y = this._y * HH, IH.z = this._z * HH, IH.w = this._w * HH, IH;
      }
      scaleAndAddToRef(HH, IH) {
        return IH.x += this._x * HH, IH.y += this._y * HH, IH.z += this._z * HH, IH.w += this._w * HH, IH;
      }
      equals(HH) {
        return HH && this._x === HH.x && this._y === HH.y && this._z === HH.z && this._w === HH.w;
      }
      equalsWithEpsilon(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RH.b;
        return HH && (0, eH.WithinEpsilon)(this._x, HH.x, IH) && (0, eH.WithinEpsilon)(this._y, HH.y, IH) && (0, eH.WithinEpsilon)(this._z, HH.z, IH) && (0, eH.WithinEpsilon)(this._w, HH.w, IH);
      }
      equalsToFloats(HH, IH, EH, RH) {
        return this._x === HH && this._y === IH && this._z === EH && this._w === RH;
      }
      multiplyInPlace(HH) {
        return this.x *= HH.x, this.y *= HH.y, this.z *= HH.z, this.w *= HH.w, this;
      }
      multiply(HH) {
        return new JH(this._x * HH.x, this._y * HH.y, this._z * HH.z, this._w * HH.w);
      }
      multiplyToRef(HH, IH) {
        return IH.x = this._x * HH.x, IH.y = this._y * HH.y, IH.z = this._z * HH.z, IH.w = this._w * HH.w, IH;
      }
      multiplyByFloats(HH, IH, EH, RH) {
        return new JH(this._x * HH, this._y * IH, this._z * EH, this._w * RH);
      }
      divide(HH) {
        return new JH(this._x / HH.x, this._y / HH.y, this._z / HH.z, this._w / HH.w);
      }
      divideToRef(HH, IH) {
        return IH.x = this._x / HH.x, IH.y = this._y / HH.y, IH.z = this._z / HH.z, IH.w = this._w / HH.w, IH;
      }
      divideInPlace(HH) {
        return this.divideToRef(HH, this);
      }
      minimizeInPlace(HH) {
        return HH.x < this._x && (this.x = HH.x), HH.y < this._y && (this.y = HH.y), HH.z < this._z && (this.z = HH.z), HH.w < this._w && (this.w = HH.w), this;
      }
      maximizeInPlace(HH) {
        return HH.x > this._x && (this.x = HH.x), HH.y > this._y && (this.y = HH.y), HH.z > this._z && (this.z = HH.z), HH.w > this._w && (this.w = HH.w), this;
      }
      minimizeInPlaceFromFloats(HH, IH, EH, RH) {
        return this.x = Math.min(HH, this._x), this.y = Math.min(IH, this._y), this.z = Math.min(EH, this._z), this.w = Math.min(RH, this._w), this;
      }
      maximizeInPlaceFromFloats(HH, IH, EH, RH) {
        return this.x = Math.max(HH, this._x), this.y = Math.max(IH, this._y), this.z = Math.max(EH, this._z), this.w = Math.max(RH, this._w), this;
      }
      floorToRef(HH) {
        return HH.x = Math.floor(this._x), HH.y = Math.floor(this._y), HH.z = Math.floor(this._z), HH.w = Math.floor(this._w), HH;
      }
      floor() {
        return new JH(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w));
      }
      fractToRef(HH) {
        return HH.x = this._x - Math.floor(this._x), HH.y = this._y - Math.floor(this._y), HH.z = this._z - Math.floor(this._z), HH.w = this._w - Math.floor(this._w), HH;
      }
      fract() {
        return new JH(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w));
      }
      length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
      }
      lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
      }
      normalize() {
        return this.normalizeFromLength(this.length());
      }
      normalizeFromLength(HH) {
        return 0 === HH || 1 === HH ? this : this.scaleInPlace(1 / HH);
      }
      normalizeToNew() {
        return this.normalizeToRef(new JH());
      }
      normalizeToRef(HH) {
        const IH = this.length();
        return 0 === IH || 1 === IH ? (HH.x = this._x, HH.y = this._y, HH.z = this._z, HH.w = this._w, HH) : this.scaleToRef(1 / IH, HH);
      }
      toVector3() {
        return new QH(this._x, this._y, this._z);
      }
      clone() {
        return new JH(this._x, this._y, this._z, this._w);
      }
      RH(HH) {
        return this.x = HH.x, this.y = HH.y, this.z = HH.z, this.w = HH.w, this;
      }
      nY(HH, IH, EH, RH) {
        return this.x = HH, this.y = IH, this.z = EH, this.w = RH, this;
      }
      set(HH, IH, EH, RH) {
        return this.nY(HH, IH, EH, RH);
      }
      nO(HH) {
        return this.x = this.y = this.z = this.w = HH, this;
      }
      dot(HH) {
        return this._x * HH.x + this._y * HH.y + this._z * HH.z + this._w * HH.w;
      }
      static Qh(HH, IH) {
        return IH || (IH = 0), new JH(HH[IH], HH[IH + 1], HH[IH + 2], HH[IH + 3]);
      }
      static FromArrayToRef(HH, IH, EH) {
        return EH.x = HH[IH], EH.y = HH[IH + 1], EH.z = HH[IH + 2], EH.w = HH[IH + 3], EH;
      }
      static FromFloatArrayToRef(HH, IH, EH) {
        return JH.FromArrayToRef(HH, IH, EH), EH;
      }
      static FromFloatsToRef(HH, IH, EH, RH, hH) {
        return hH.x = HH, hH.y = IH, hH.z = EH, hH.w = RH, hH;
      }
      static Zero() {
        return new JH(0, 0, 0, 0);
      }
      static One() {
        return new JH(1, 1, 1, 1);
      }
      static Random() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new JH((0, eH.RandomRange)(HH, IH), (0, eH.RandomRange)(HH, IH), (0, eH.RandomRange)(HH, IH), (0, eH.RandomRange)(HH, IH));
      }
      static RandomToRef() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          EH = arguments.length > 2 ? arguments[2] : void 0;
        return EH.x = (0, eH.RandomRange)(HH, IH), EH.y = (0, eH.RandomRange)(HH, IH), EH.z = (0, eH.RandomRange)(HH, IH), EH.w = (0, eH.RandomRange)(HH, IH), EH;
      }
      static Clamp(HH, IH, EH) {
        return JH.ClampToRef(HH, IH, EH, new JH());
      }
      static ClampToRef(HH, IH, EH, RH) {
        return RH.x = (0, eH.Clamp)(HH.x, IH.x, EH.x), RH.y = (0, eH.Clamp)(HH.y, IH.y, EH.y), RH.z = (0, eH.Clamp)(HH.z, IH.z, EH.z), RH.w = (0, eH.Clamp)(HH.w, IH.w, EH.w), RH;
      }
      static CheckExtends(HH, IH, EH) {
        IH.minimizeInPlace(HH), EH.maximizeInPlace(HH);
      }
      static get ZeroReadOnly() {
        return JH._ZeroReadOnly;
      }
      static Normalize(HH) {
        return JH.NormalizeToRef(HH, new JH());
      }
      static NormalizeToRef(HH, IH) {
        return HH.normalizeToRef(IH), IH;
      }
      static Minimize(HH, IH) {
        const EH = new JH();
        return EH.RH(HH), EH.minimizeInPlace(IH), EH;
      }
      static Maximize(HH, IH) {
        const EH = new JH();
        return EH.RH(HH), EH.maximizeInPlace(IH), EH;
      }
      static Distance(HH, IH) {
        return Math.sqrt(JH.DistanceSquared(HH, IH));
      }
      static DistanceSquared(HH, IH) {
        const EH = HH.x - IH.x,
          RH = HH.y - IH.y,
          hH = HH.z - IH.z,
          TH = HH.w - IH.w;
        return EH * EH + RH * RH + hH * hH + TH * TH;
      }
      static Center(HH, IH) {
        return JH.CenterToRef(HH, IH, new JH());
      }
      static CenterToRef(HH, IH, EH) {
        return EH.x = (HH.x + IH.x) / 2, EH.y = (HH.y + IH.y) / 2, EH.z = (HH.z + IH.z) / 2, EH.w = (HH.w + IH.w) / 2, EH;
      }
      static TransformCoordinates(HH, IH) {
        return JH.TransformCoordinatesToRef(HH, IH, new JH());
      }
      static TransformCoordinatesToRef(HH, IH, EH) {
        return JH.TransformCoordinatesFromFloatsToRef(HH._x, HH._y, HH._z, IH, EH), EH;
      }
      static TransformCoordinatesFromFloatsToRef(HH, IH, EH, RH, hH) {
        const TH = RH.m,
          sH = HH * TH[0] + IH * TH[4] + EH * TH[8] + TH[12],
          eH = HH * TH[1] + IH * TH[5] + EH * TH[9] + TH[13],
          GH = HH * TH[2] + IH * TH[6] + EH * TH[10] + TH[14],
          AH = HH * TH[3] + IH * TH[7] + EH * TH[11] + TH[15];
        return hH.x = sH, hH.y = eH, hH.z = GH, hH.w = AH, hH;
      }
      static TransformNormal(HH, IH) {
        return JH.TransformNormalToRef(HH, IH, new JH());
      }
      static TransformNormalToRef(HH, IH, EH) {
        const RH = IH.m,
          hH = HH.x * RH[0] + HH.y * RH[4] + HH.z * RH[8],
          TH = HH.x * RH[1] + HH.y * RH[5] + HH.z * RH[9],
          sH = HH.x * RH[2] + HH.y * RH[6] + HH.z * RH[10];
        return EH.x = hH, EH.y = TH, EH.z = sH, EH.w = HH.w, EH;
      }
      static TransformNormalFromFloatsToRef(HH, IH, EH, RH, hH, TH) {
        const sH = hH.m;
        return TH.x = HH * sH[0] + IH * sH[4] + EH * sH[8], TH.y = HH * sH[1] + IH * sH[5] + EH * sH[9], TH.z = HH * sH[2] + IH * sH[6] + EH * sH[10], TH.w = RH, TH;
      }
      static FromVector3(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new JH(HH._x, HH._y, HH._z, IH);
      }
      static Dot(HH, IH) {
        return HH.x * IH.x + HH.y * IH.y + HH.z * IH.z + HH.w * IH.w;
      }
    }
    JH._V8PerformanceHack = new JH(.5, .5, .5, .5), JH._ZeroReadOnly = JH.Zero();
    class OH {
      get x() {
        return this._x;
      }
      set x(HH) {
        this._x = HH, this._isDirty = !0;
      }
      get y() {
        return this._y;
      }
      set y(HH) {
        this._y = HH, this._isDirty = !0;
      }
      get z() {
        return this._z;
      }
      set z(HH) {
        this._z = HH, this._isDirty = !0;
      }
      get w() {
        return this._w;
      }
      set w(HH) {
        this._w = HH, this._isDirty = !0;
      }
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = HH, this._y = IH, this._z = EH, this._w = RH;
      }
      toString() {
        return "{X: ".concat(this._x, " Y: ").concat(this._y, " Z: ").concat(this._z, " W: ").concat(this._w, "}");
      }
      getClassName() {
        return "Quaternion";
      }
      getHashCode() {
        let HH = VH(this._x);
        return HH = 397 * HH ^ VH(this._y), HH = 397 * HH ^ VH(this._z), HH = 397 * HH ^ VH(this._w), HH;
      }
      GM() {
        return [this._x, this._y, this._z, this._w];
      }
      toArray(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return HH[IH] = this._x, HH[IH + 1] = this._y, HH[IH + 2] = this._z, HH[IH + 3] = this._w, this;
      }
      HO(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return OH.FromArrayToRef(HH, IH, this);
      }
      equals(HH) {
        return HH && this._x === HH._x && this._y === HH._y && this._z === HH._z && this._w === HH._w;
      }
      equalsWithEpsilon(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RH.b;
        return HH && (0, eH.WithinEpsilon)(this._x, HH._x, IH) && (0, eH.WithinEpsilon)(this._y, HH._y, IH) && (0, eH.WithinEpsilon)(this._z, HH._z, IH) && (0, eH.WithinEpsilon)(this._w, HH._w, IH);
      }
      isApprox(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RH.b;
        return HH && ((0, eH.WithinEpsilon)(this._x, HH._x, IH) && (0, eH.WithinEpsilon)(this._y, HH._y, IH) && (0, eH.WithinEpsilon)(this._z, HH._z, IH) && (0, eH.WithinEpsilon)(this._w, HH._w, IH) || (0, eH.WithinEpsilon)(this._x, -HH._x, IH) && (0, eH.WithinEpsilon)(this._y, -HH._y, IH) && (0, eH.WithinEpsilon)(this._z, -HH._z, IH) && (0, eH.WithinEpsilon)(this._w, -HH._w, IH));
      }
      clone() {
        return new OH(this._x, this._y, this._z, this._w);
      }
      RH(HH) {
        return this._x = HH._x, this._y = HH._y, this._z = HH._z, this._w = HH._w, this._isDirty = !0, this;
      }
      nY(HH, IH, EH, RH) {
        return this._x = HH, this._y = IH, this._z = EH, this._w = RH, this._isDirty = !0, this;
      }
      set(HH, IH, EH, RH) {
        return this.nY(HH, IH, EH, RH);
      }
      nO(HH) {
        return this.nY(HH, HH, HH, HH);
      }
      add(HH) {
        return new OH(this._x + HH._x, this._y + HH._y, this._z + HH._z, this._w + HH._w);
      }
      addInPlace(HH) {
        return this._x += HH._x, this._y += HH._y, this._z += HH._z, this._w += HH._w, this._isDirty = !0, this;
      }
      addToRef(HH, IH) {
        return IH._x = this._x + HH._x, IH._y = this._y + HH._y, IH._z = this._z + HH._z, IH._w = this._w + HH._w, IH._isDirty = !0, IH;
      }
      addInPlaceFromFloats(HH, IH, EH, RH) {
        return this._x += HH, this._y += IH, this._z += EH, this._w += RH, this._isDirty = !0, this;
      }
      subtractToRef(HH, IH) {
        return IH._x = this._x - HH._x, IH._y = this._y - HH._y, IH._z = this._z - HH._z, IH._w = this._w - HH._w, IH._isDirty = !0, IH;
      }
      subtractFromFloats(HH, IH, EH, RH) {
        return this.subtractFromFloatsToRef(HH, IH, EH, RH, new OH());
      }
      subtractFromFloatsToRef(HH, IH, EH, RH, hH) {
        return hH._x = this._x - HH, hH._y = this._y - IH, hH._z = this._z - EH, hH._w = this._w - RH, hH._isDirty = !0, hH;
      }
      subtract(HH) {
        return new OH(this._x - HH._x, this._y - HH._y, this._z - HH._z, this._w - HH._w);
      }
      wr(HH) {
        return this._x -= HH._x, this._y -= HH._y, this._z -= HH._z, this._w -= HH._w, this._isDirty = !0, this;
      }
      scale(HH) {
        return new OH(this._x * HH, this._y * HH, this._z * HH, this._w * HH);
      }
      scaleToRef(HH, IH) {
        return IH._x = this._x * HH, IH._y = this._y * HH, IH._z = this._z * HH, IH._w = this._w * HH, IH._isDirty = !0, IH;
      }
      scaleInPlace(HH) {
        return this._x *= HH, this._y *= HH, this._z *= HH, this._w *= HH, this._isDirty = !0, this;
      }
      scaleAndAddToRef(HH, IH) {
        return IH._x += this._x * HH, IH._y += this._y * HH, IH._z += this._z * HH, IH._w += this._w * HH, IH._isDirty = !0, IH;
      }
      multiply(HH) {
        const IH = new OH(0, 0, 0, 1);
        return this.multiplyToRef(HH, IH), IH;
      }
      multiplyToRef(HH, IH) {
        const EH = this._x * HH._w + this._y * HH._z - this._z * HH._y + this._w * HH._x,
          RH = -this._x * HH._z + this._y * HH._w + this._z * HH._x + this._w * HH._y,
          hH = this._x * HH._y - this._y * HH._x + this._z * HH._w + this._w * HH._z,
          TH = -this._x * HH._x - this._y * HH._y - this._z * HH._z + this._w * HH._w;
        return IH.nY(EH, RH, hH, TH), IH;
      }
      multiplyInPlace(HH) {
        return this.multiplyToRef(HH, this);
      }
      multiplyByFloats(HH, IH, EH, RH) {
        return this._x *= HH, this._y *= IH, this._z *= EH, this._w *= RH, this._isDirty = !0, this;
      }
      divide(HH) {
        throw new ReferenceError("Can not divide a quaternion");
      }
      divideToRef(HH, IH) {
        throw new ReferenceError("Can not divide a quaternion");
      }
      divideInPlace(HH) {
        throw new ReferenceError("Can not divide a quaternion");
      }
      minimizeInPlace() {
        throw new ReferenceError("Can not minimize a quaternion");
      }
      minimizeInPlaceFromFloats() {
        throw new ReferenceError("Can not minimize a quaternion");
      }
      maximizeInPlace() {
        throw new ReferenceError("Can not maximize a quaternion");
      }
      maximizeInPlaceFromFloats() {
        throw new ReferenceError("Can not maximize a quaternion");
      }
      negate() {
        return this.negateToRef(new OH());
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this;
      }
      negateToRef(HH) {
        return HH._x = -this._x, HH._y = -this._y, HH._z = -this._z, HH._w = -this._w, HH._isDirty = !0, HH;
      }
      equalsToFloats(HH, IH, EH, RH) {
        return this._x === HH && this._y === IH && this._z === EH && this._w === RH;
      }
      floorToRef(HH) {
        throw new ReferenceError("Can not floor a quaternion");
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion");
      }
      fractToRef(HH) {
        throw new ReferenceError("Can not fract a quaternion");
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion");
      }
      conjugateToRef(HH) {
        return HH.nY(-this._x, -this._y, -this._z, this._w), HH;
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this;
      }
      conjugate() {
        return new OH(-this._x, -this._y, -this._z, this._w);
      }
      invert() {
        const HH = this.conjugate(),
          IH = this.lengthSquared();
        return 0 == IH || 1 == IH || HH.scaleInPlace(1 / IH), HH;
      }
      invertInPlace() {
        this.conjugateInPlace();
        const HH = this.lengthSquared();
        return 0 == HH || 1 == HH || this.scaleInPlace(1 / HH), this;
      }
      lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
      }
      length() {
        return Math.sqrt(this.lengthSquared());
      }
      normalize() {
        return this.normalizeFromLength(this.length());
      }
      normalizeFromLength(HH) {
        return 0 === HH || 1 === HH ? this : this.scaleInPlace(1 / HH);
      }
      normalizeToNew() {
        const HH = new OH(0, 0, 0, 1);
        return this.normalizeToRef(HH), HH;
      }
      normalizeToRef(HH) {
        const IH = this.length();
        return 0 === IH || 1 === IH ? HH.nY(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / IH, HH);
      }
      toEulerAngles() {
        const HH = QH.Zero();
        return this.toEulerAnglesToRef(HH), HH;
      }
      toEulerAnglesToRef(HH) {
        const IH = this._z,
          EH = this._x,
          RH = this._y,
          hH = this._w,
          TH = RH * IH - EH * hH,
          sH = .4999999;
        if (TH < -sH) HH._y = 2 * Math.atan2(RH, hH), HH._x = Math.PI / 2, HH._z = 0, HH._isDirty = !0;else if (TH > sH) HH._y = 2 * Math.atan2(RH, hH), HH._x = -Math.PI / 2, HH._z = 0, HH._isDirty = !0;else {
          const sH = hH * hH,
            eH = IH * IH,
            GH = EH * EH,
            AH = RH * RH;
          HH._z = Math.atan2(2 * (EH * RH + IH * hH), -eH - GH + AH + sH), HH._x = Math.asin(-2 * TH), HH._y = Math.atan2(2 * (IH * EH + RH * hH), eH - GH - AH + sH), HH._isDirty = !0;
        }
        return HH;
      }
      toAlphaBetaGammaToRef(HH) {
        const IH = this._z,
          EH = this._x,
          RH = this._y,
          hH = this._w,
          TH = Math.sqrt(EH * EH + RH * RH),
          sH = Math.sqrt(IH * IH + hH * hH),
          eH = 2 * Math.atan2(TH, sH),
          GH = 2 * Math.atan2(IH, hH),
          AH = 2 * Math.atan2(RH, EH),
          VH = (GH + AH) / 2,
          YH = (GH - AH) / 2;
        return HH.set(YH, eH, VH), HH;
      }
      toRotationMatrix(HH) {
        return rH.FromQuaternionToRef(this, HH), HH;
      }
      fromRotationMatrix(HH) {
        return OH.FromRotationMatrixToRef(HH, this), this;
      }
      dot(HH) {
        return this._x * HH._x + this._y * HH._y + this._z * HH._z + this._w * HH._w;
      }
      toAxisAngle() {
        const HH = QH.Zero();
        return {
          axis: HH,
          angle: this.toAxisAngleToRef(HH)
        };
      }
      toAxisAngleToRef(HH) {
        let IH;
        const EH = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          RH = this._w;
        return EH > 0 ? (IH = 2 * Math.atan2(EH, RH), HH.set(this._x / EH, this._y / EH, this._z / EH)) : (IH = 0, HH.set(1, 0, 0)), IH;
      }
      static FromRotationMatrix(HH) {
        const IH = new OH();
        return OH.FromRotationMatrixToRef(HH, IH), IH;
      }
      static FromRotationMatrixToRef(HH, IH) {
        const EH = HH.m,
          RH = EH[0],
          hH = EH[4],
          TH = EH[8],
          sH = EH[1],
          eH = EH[5],
          GH = EH[9],
          AH = EH[2],
          VH = EH[6],
          YH = EH[10],
          QH = RH + eH + YH;
        let JH;
        return QH > 0 ? (JH = .5 / Math.sqrt(QH + 1), IH._w = .25 / JH, IH._x = (VH - GH) * JH, IH._y = (TH - AH) * JH, IH._z = (sH - hH) * JH, IH._isDirty = !0) : RH > eH && RH > YH ? (JH = 2 * Math.sqrt(1 + RH - eH - YH), IH._w = (VH - GH) / JH, IH._x = .25 * JH, IH._y = (hH + sH) / JH, IH._z = (TH + AH) / JH, IH._isDirty = !0) : eH > YH ? (JH = 2 * Math.sqrt(1 + eH - RH - YH), IH._w = (TH - AH) / JH, IH._x = (hH + sH) / JH, IH._y = .25 * JH, IH._z = (GH + VH) / JH, IH._isDirty = !0) : (JH = 2 * Math.sqrt(1 + YH - RH - eH), IH._w = (sH - hH) / JH, IH._x = (TH + AH) / JH, IH._y = (GH + VH) / JH, IH._z = .25 * JH, IH._isDirty = !0), IH;
      }
      static Dot(HH, IH) {
        return HH._x * IH._x + HH._y * IH._y + HH._z * IH._z + HH._w * IH._w;
      }
      static AreClose(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const RH = OH.Dot(HH, IH);
        return 1 - RH * RH <= EH;
      }
      static SmoothToRef(HH, IH, EH, RH, hH) {
        let TH = 0 === RH ? 1 : EH / RH;
        return TH = (0, eH.Clamp)(TH, 0, 1), OH.SlerpToRef(HH, IH, TH, hH), hH;
      }
      static Zero() {
        return new OH(0, 0, 0, 0);
      }
      static Inverse(HH) {
        return new OH(-HH._x, -HH._y, -HH._z, HH._w);
      }
      static InverseToRef(HH, IH) {
        return IH.set(-HH._x, -HH._y, -HH._z, HH._w), IH;
      }
      static Identity() {
        return new OH(0, 0, 0, 1);
      }
      static IsIdentity(HH) {
        return HH && 0 === HH._x && 0 === HH._y && 0 === HH._z && 1 === HH._w;
      }
      static RotationAxis(HH, IH) {
        return OH.RotationAxisToRef(HH, IH, new OH());
      }
      static RotationAxisToRef(HH, IH, EH) {
        EH._w = Math.cos(IH / 2);
        const RH = Math.sin(IH / 2) / HH.length();
        return EH._x = HH._x * RH, EH._y = HH._y * RH, EH._z = HH._z * RH, EH._isDirty = !0, EH;
      }
      static Qh(HH, IH) {
        return IH || (IH = 0), new OH(HH[IH], HH[IH + 1], HH[IH + 2], HH[IH + 3]);
      }
      static FromArrayToRef(HH, IH, EH) {
        return EH._x = HH[IH], EH._y = HH[IH + 1], EH._z = HH[IH + 2], EH._w = HH[IH + 3], EH._isDirty = !0, EH;
      }
      static FromFloatsToRef(HH, IH, EH, RH, hH) {
        return hH.nY(HH, IH, EH, RH), hH;
      }
      static FromEulerAngles(HH, IH, EH) {
        const RH = new OH();
        return OH.RotationYawPitchRollToRef(IH, HH, EH, RH), RH;
      }
      static FromEulerAnglesToRef(HH, IH, EH, RH) {
        return OH.RotationYawPitchRollToRef(IH, HH, EH, RH), RH;
      }
      static FromEulerVector(HH) {
        const IH = new OH();
        return OH.RotationYawPitchRollToRef(HH._y, HH._x, HH._z, IH), IH;
      }
      static FromEulerVectorToRef(HH, IH) {
        return OH.RotationYawPitchRollToRef(HH._y, HH._x, HH._z, IH), IH;
      }
      static FromUnitVectorsToRef(HH, IH, EH) {
        let hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RH.b;
        const TH = QH.Dot(HH, IH) + 1;
        return TH < hH ? Math.abs(HH.x) > Math.abs(HH.z) ? EH.set(-HH.y, HH.x, 0, 0) : EH.set(0, -HH.z, HH.y, 0) : (QH.CrossToRef(HH, IH, MH.Rh[0]), EH.set(MH.Rh[0].x, MH.Rh[0].y, MH.Rh[0].z, TH)), EH.normalize();
      }
      static RotationYawPitchRoll(HH, IH, EH) {
        const RH = new OH();
        return OH.RotationYawPitchRollToRef(HH, IH, EH, RH), RH;
      }
      static RotationYawPitchRollToRef(HH, IH, EH, RH) {
        const hH = .5 * EH,
          TH = .5 * IH,
          sH = .5 * HH,
          eH = Math.sin(hH),
          GH = Math.cos(hH),
          AH = Math.sin(TH),
          VH = Math.cos(TH),
          YH = Math.sin(sH),
          QH = Math.cos(sH);
        return RH._x = QH * AH * GH + YH * VH * eH, RH._y = YH * VH * GH - QH * AH * eH, RH._z = QH * VH * eH - YH * AH * GH, RH._w = QH * VH * GH + YH * AH * eH, RH._isDirty = !0, RH;
      }
      static RotationAlphaBetaGamma(HH, IH, EH) {
        const RH = new OH();
        return OH.RotationAlphaBetaGammaToRef(HH, IH, EH, RH), RH;
      }
      static RotationAlphaBetaGammaToRef(HH, IH, EH, RH) {
        const hH = .5 * (EH + HH),
          TH = .5 * (EH - HH),
          sH = .5 * IH;
        return RH._x = Math.cos(TH) * Math.sin(sH), RH._y = Math.sin(TH) * Math.sin(sH), RH._z = Math.sin(hH) * Math.cos(sH), RH._w = Math.cos(hH) * Math.cos(sH), RH._isDirty = !0, RH;
      }
      static RotationQuaternionFromAxis(HH, IH, EH) {
        const RH = new OH(0, 0, 0, 0);
        return OH.RotationQuaternionFromAxisToRef(HH, IH, EH, RH), RH;
      }
      static RotationQuaternionFromAxisToRef(HH, IH, EH, RH) {
        const hH = FH.Matrix[0];
        return HH = HH.normalizeToRef(FH.Rh[0]), IH = IH.normalizeToRef(FH.Rh[1]), EH = EH.normalizeToRef(FH.Rh[2]), rH.FromXYZAxesToRef(HH, IH, EH, hH), OH.FromRotationMatrixToRef(hH, RH), RH;
      }
      static FromLookDirectionLH(HH, IH) {
        const EH = new OH();
        return OH.FromLookDirectionLHToRef(HH, IH, EH), EH;
      }
      static FromLookDirectionLHToRef(HH, IH, EH) {
        const RH = FH.Matrix[0];
        return rH.LookDirectionLHToRef(HH, IH, RH), OH.FromRotationMatrixToRef(RH, EH), EH;
      }
      static FromLookDirectionRH(HH, IH) {
        const EH = new OH();
        return OH.FromLookDirectionRHToRef(HH, IH, EH), EH;
      }
      static FromLookDirectionRHToRef(HH, IH, EH) {
        const RH = FH.Matrix[0];
        return rH.LookDirectionRHToRef(HH, IH, RH), OH.FromRotationMatrixToRef(RH, EH);
      }
      static Slerp(HH, IH, EH) {
        const RH = OH.Identity();
        return OH.SlerpToRef(HH, IH, EH, RH), RH;
      }
      static SlerpToRef(HH, IH, EH, RH) {
        let hH,
          TH,
          sH = HH._x * IH._x + HH._y * IH._y + HH._z * IH._z + HH._w * IH._w,
          eH = !1;
        if (sH < 0 && (eH = !0, sH = -sH), sH > .999999) TH = 1 - EH, hH = eH ? -EH : EH;else {
          const HH = Math.acos(sH),
            IH = 1 / Math.sin(HH);
          TH = Math.sin((1 - EH) * HH) * IH, hH = eH ? -Math.sin(EH * HH) * IH : Math.sin(EH * HH) * IH;
        }
        return RH._x = TH * HH._x + hH * IH._x, RH._y = TH * HH._y + hH * IH._y, RH._z = TH * HH._z + hH * IH._z, RH._w = TH * HH._w + hH * IH._w, RH._isDirty = !0, RH;
      }
      static Hermite(HH, IH, EH, RH, hH) {
        const TH = hH * hH,
          sH = hH * TH,
          eH = 2 * sH - 3 * TH + 1,
          GH = -2 * sH + 3 * TH,
          AH = sH - 2 * TH + hH,
          VH = sH - TH,
          YH = HH._x * eH + EH._x * GH + IH._x * AH + RH._x * VH,
          QH = HH._y * eH + EH._y * GH + IH._y * AH + RH._y * VH,
          JH = HH._z * eH + EH._z * GH + IH._z * AH + RH._z * VH,
          rH = HH._w * eH + EH._w * GH + IH._w * AH + RH._w * VH;
        return new OH(YH, QH, JH, rH);
      }
      static Hermite1stDerivative(HH, IH, EH, RH, hH) {
        const TH = new OH();
        return this.Hermite1stDerivativeToRef(HH, IH, EH, RH, hH, TH), TH;
      }
      static Hermite1stDerivativeToRef(HH, IH, EH, RH, hH, TH) {
        const sH = hH * hH;
        return TH._x = 6 * (sH - hH) * HH._x + (3 * sH - 4 * hH + 1) * IH._x + 6 * (-sH + hH) * EH._x + (3 * sH - 2 * hH) * RH._x, TH._y = 6 * (sH - hH) * HH._y + (3 * sH - 4 * hH + 1) * IH._y + 6 * (-sH + hH) * EH._y + (3 * sH - 2 * hH) * RH._y, TH._z = 6 * (sH - hH) * HH._z + (3 * sH - 4 * hH + 1) * IH._z + 6 * (-sH + hH) * EH._z + (3 * sH - 2 * hH) * RH._z, TH._w = 6 * (sH - hH) * HH._w + (3 * sH - 4 * hH + 1) * IH._w + 6 * (-sH + hH) * EH._w + (3 * sH - 2 * hH) * RH._w, TH._isDirty = !0, TH;
      }
      static Normalize(HH) {
        const IH = OH.Zero();
        return OH.NormalizeToRef(HH, IH), IH;
      }
      static NormalizeToRef(HH, IH) {
        return HH.normalizeToRef(IH), IH;
      }
      static Clamp(HH, IH, EH) {
        const RH = new OH();
        return OH.ClampToRef(HH, IH, EH, RH), RH;
      }
      static ClampToRef(HH, IH, EH, RH) {
        return RH.nY((0, eH.Clamp)(HH.x, IH.x, EH.x), (0, eH.Clamp)(HH.y, IH.y, EH.y), (0, eH.Clamp)(HH.z, IH.z, EH.z), (0, eH.Clamp)(HH.w, IH.w, EH.w));
      }
      static Random() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new OH((0, eH.RandomRange)(HH, IH), (0, eH.RandomRange)(HH, IH), (0, eH.RandomRange)(HH, IH), (0, eH.RandomRange)(HH, IH));
      }
      static RandomToRef() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).nY((0, eH.RandomRange)(HH, IH), (0, eH.RandomRange)(HH, IH), (0, eH.RandomRange)(HH, IH), (0, eH.RandomRange)(HH, IH));
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense");
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense");
      }
      static Distance(HH, IH) {
        return Math.sqrt(OH.DistanceSquared(HH, IH));
      }
      static DistanceSquared(HH, IH) {
        const EH = HH.x - IH.x,
          RH = HH.y - IH.y,
          hH = HH.z - IH.z,
          TH = HH.w - IH.w;
        return EH * EH + RH * RH + hH * hH + TH * TH;
      }
      static Center(HH, IH) {
        return OH.CenterToRef(HH, IH, OH.Zero());
      }
      static CenterToRef(HH, IH, EH) {
        return EH.nY((HH.x + IH.x) / 2, (HH.y + IH.y) / 2, (HH.z + IH.z) / 2, (HH.w + IH.w) / 2);
      }
    }
    OH._V8PerformanceHack = new OH(.5, .5, .5, .5);
    class rH {
      static get Use64Bits() {
        return TH.d.MatrixUse64Bits;
      }
      get m() {
        return this.nN;
      }
      markAsUpdated() {
        this.updateFlag = GH.n._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0;
      }
      _updateIdentityStatus(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          RH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = HH, this._isIdentity3x2 = HH || EH, this._isIdentityDirty = !this._isIdentity && IH, this._isIdentity3x2Dirty = !this._isIdentity3x2 && RH;
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, TH.d.MatrixTrackPrecisionChange && TH.d.MatrixTrackedMatrices.push(this), this.nN = new TH.d.MatrixCurrentType(16), this.markAsUpdated();
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const HH = this.nN;
          this._isIdentity = 1 === HH[0] && 0 === HH[1] && 0 === HH[2] && 0 === HH[3] && 0 === HH[4] && 1 === HH[5] && 0 === HH[6] && 0 === HH[7] && 0 === HH[8] && 0 === HH[9] && 1 === HH[10] && 0 === HH[11] && 0 === HH[12] && 0 === HH[13] && 0 === HH[14] && 1 === HH[15];
        }
        return this._isIdentity;
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this.nN[0] || 1 !== this.nN[5] || 1 !== this.nN[15] || 0 !== this.nN[1] || 0 !== this.nN[2] || 0 !== this.nN[3] || 0 !== this.nN[4] || 0 !== this.nN[6] || 0 !== this.nN[7] || 0 !== this.nN[8] || 0 !== this.nN[9] || 0 !== this.nN[10] || 0 !== this.nN[11] || 0 !== this.nN[12] || 0 !== this.nN[13] || 0 !== this.nN[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2;
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const HH = this.nN,
          IH = HH[0],
          EH = HH[1],
          RH = HH[2],
          hH = HH[3],
          TH = HH[4],
          sH = HH[5],
          eH = HH[6],
          GH = HH[7],
          AH = HH[8],
          VH = HH[9],
          YH = HH[10],
          QH = HH[11],
          JH = HH[12],
          OH = HH[13],
          rH = HH[14],
          FH = HH[15],
          MH = YH * FH - rH * QH,
          NH = VH * FH - OH * QH,
          iI = VH * rH - OH * YH,
          DH = AH * FH - JH * QH,
          PH = AH * rH - YH * JH,
          XH = AH * OH - JH * VH;
        return IH * +(sH * MH - eH * NH + GH * iI) + EH * -(TH * MH - eH * DH + GH * PH) + RH * +(TH * NH - sH * DH + GH * XH) + hH * -(TH * iI - sH * PH + eH * XH);
      }
      toString() {
        return "{".concat(this.m[0], ", ").concat(this.m[1], ", ").concat(this.m[2], ", ").concat(this.m[3], "\n").concat(this.m[4], ", ").concat(this.m[5], ", ").concat(this.m[6], ", ").concat(this.m[7], "\n").concat(this.m[8], ", ").concat(this.m[9], ", ").concat(this.m[10], ", ").concat(this.m[11], "\n").concat(this.m[12], ", ").concat(this.m[13], ", ").concat(this.m[14], ", ").concat(this.m[15], "}");
      }
      toArray() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!HH) return this.nN;
        const EH = this.nN;
        for (let RH = 0; RH < 16; RH++) HH[IH + RH] = EH[RH];
        return this;
      }
      GM() {
        return this.nN;
      }
      HO(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return rH.FromArrayToRef(HH, IH, this);
      }
      nY() {
        for (var HH = arguments.length, IH = new Array(HH), EH = 0; EH < HH; EH++) IH[EH] = arguments[EH];
        return rH.FromArrayToRef(IH, 0, this);
      }
      set() {
        const HH = this.nN;
        for (let IH = 0; IH < 16; IH++) HH[IH] = IH < 0 || arguments.length <= IH ? void 0 : arguments[IH];
        return this.markAsUpdated(), this;
      }
      nO(HH) {
        const IH = this.nN;
        for (let EH = 0; EH < 16; EH++) IH[EH] = HH;
        return this.markAsUpdated(), this;
      }
      invert() {
        return this.invertToRef(this), this;
      }
      reset() {
        return rH.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this;
      }
      add(HH) {
        const IH = new rH();
        return this.addToRef(HH, IH), IH;
      }
      addToRef(HH, IH) {
        const EH = this.nN,
          RH = IH.nN,
          hH = HH.m;
        for (let TH = 0; TH < 16; TH++) RH[TH] = EH[TH] + hH[TH];
        return IH.markAsUpdated(), IH;
      }
      addToSelf(HH) {
        const IH = this.nN,
          EH = HH.m;
        return IH[0] += EH[0], IH[1] += EH[1], IH[2] += EH[2], IH[3] += EH[3], IH[4] += EH[4], IH[5] += EH[5], IH[6] += EH[6], IH[7] += EH[7], IH[8] += EH[8], IH[9] += EH[9], IH[10] += EH[10], IH[11] += EH[11], IH[12] += EH[12], IH[13] += EH[13], IH[14] += EH[14], IH[15] += EH[15], this.markAsUpdated(), this;
      }
      addInPlace(HH) {
        const IH = this.nN,
          EH = HH.m;
        for (let RH = 0; RH < 16; RH++) IH[RH] += EH[RH];
        return this.markAsUpdated(), this;
      }
      addInPlaceFromFloats() {
        const HH = this.nN;
        for (let IH = 0; IH < 16; IH++) HH[IH] += IH < 0 || arguments.length <= IH ? void 0 : arguments[IH];
        return this.markAsUpdated(), this;
      }
      subtract(HH) {
        const IH = this.nN,
          EH = HH.m;
        for (let RH = 0; RH < 16; RH++) IH[RH] -= EH[RH];
        return this.markAsUpdated(), this;
      }
      subtractToRef(HH, IH) {
        const EH = this.nN,
          RH = HH.m,
          hH = IH.nN;
        for (let TH = 0; TH < 16; TH++) hH[TH] = EH[TH] - RH[TH];
        return IH.markAsUpdated(), IH;
      }
      wr(HH) {
        const IH = this.nN,
          EH = HH.m;
        for (let RH = 0; RH < 16; RH++) IH[RH] -= EH[RH];
        return this.markAsUpdated(), this;
      }
      subtractFromFloats() {
        for (var HH = arguments.length, IH = new Array(HH), EH = 0; EH < HH; EH++) IH[EH] = arguments[EH];
        return this.subtractFromFloatsToRef(...IH, new rH());
      }
      subtractFromFloatsToRef() {
        for (var HH = arguments.length, IH = new Array(HH), EH = 0; EH < HH; EH++) IH[EH] = arguments[EH];
        const RH = IH.pop(),
          hH = this.nN,
          TH = RH.nN,
          sH = IH;
        for (let eH = 0; eH < 16; eH++) TH[eH] = hH[eH] - sH[eH];
        return RH.markAsUpdated(), RH;
      }
      invertToRef(HH) {
        return !0 === this._isIdentity ? (rH.IdentityToRef(HH), HH) : ((0, GH.h)(this, HH.GM()) ? HH.markAsUpdated() : HH.RH(this), HH);
      }
      addAtIndex(HH, IH) {
        return this.nN[HH] += IH, this.markAsUpdated(), this;
      }
      multiplyAtIndex(HH, IH) {
        return this.nN[HH] *= IH, this.markAsUpdated(), this;
      }
      setTranslationFromFloats(HH, IH, EH) {
        return this.nN[12] = HH, this.nN[13] = IH, this.nN[14] = EH, this.markAsUpdated(), this;
      }
      addTranslationFromFloats(HH, IH, EH) {
        return this.nN[12] += HH, this.nN[13] += IH, this.nN[14] += EH, this.markAsUpdated(), this;
      }
      setTranslation(HH) {
        return this.setTranslationFromFloats(HH._x, HH._y, HH._z);
      }
      getTranslation() {
        return new QH(this.nN[12], this.nN[13], this.nN[14]);
      }
      getTranslationToRef(HH) {
        return HH.x = this.nN[12], HH.y = this.nN[13], HH.z = this.nN[14], HH;
      }
      removeRotationAndScaling() {
        const HH = this.m;
        return rH.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, HH[12], HH[13], HH[14], HH[15], this), this._updateIdentityStatus(0 === HH[12] && 0 === HH[13] && 0 === HH[14] && 1 === HH[15]), this;
      }
      RH(HH) {
        HH.copyToArray(this.nN);
        const IH = HH;
        return this.updateFlag = IH.updateFlag, this._updateIdentityStatus(IH._isIdentity, IH._isIdentityDirty, IH._isIdentity3x2, IH._isIdentity3x2Dirty), this;
      }
      copyToArray(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, GH.d)(this, HH, IH), this;
      }
      multiply(HH) {
        const IH = new rH();
        return this.multiplyToRef(HH, IH), IH;
      }
      multiplyInPlace(HH) {
        const IH = this.nN,
          EH = HH.m;
        for (let RH = 0; RH < 16; RH++) IH[RH] *= EH[RH];
        return this.markAsUpdated(), this;
      }
      multiplyByFloats() {
        const HH = this.nN;
        for (let IH = 0; IH < 16; IH++) HH[IH] *= IH < 0 || arguments.length <= IH ? void 0 : arguments[IH];
        return this.markAsUpdated(), this;
      }
      multiplyByFloatsToRef() {
        for (var HH = arguments.length, IH = new Array(HH), EH = 0; EH < HH; EH++) IH[EH] = arguments[EH];
        const RH = IH.pop(),
          hH = this.nN,
          TH = RH.nN,
          sH = IH;
        for (let eH = 0; eH < 16; eH++) TH[eH] = hH[eH] * sH[eH];
        return RH.markAsUpdated(), RH;
      }
      multiplyToRef(HH, IH) {
        return this._isIdentity ? (IH.RH(HH), IH) : HH._isIdentity ? (IH.RH(this), IH) : (this.multiplyToArray(HH, IH.nN, 0), IH.markAsUpdated(), IH);
      }
      multiplyToArray(HH, IH, EH) {
        return (0, GH.r)(this, HH, IH, EH), this;
      }
      divide(HH) {
        return this.divideToRef(HH, new rH());
      }
      divideToRef(HH, IH) {
        const EH = this.nN,
          RH = HH.m,
          hH = IH.nN;
        for (let TH = 0; TH < 16; TH++) hH[TH] = EH[TH] / RH[TH];
        return IH.markAsUpdated(), IH;
      }
      divideInPlace(HH) {
        const IH = this.nN,
          EH = HH.m;
        for (let RH = 0; RH < 16; RH++) IH[RH] /= EH[RH];
        return this.markAsUpdated(), this;
      }
      minimizeInPlace(HH) {
        const IH = this.nN,
          EH = HH.m;
        for (let RH = 0; RH < 16; RH++) IH[RH] = Math.min(IH[RH], EH[RH]);
        return this.markAsUpdated(), this;
      }
      minimizeInPlaceFromFloats() {
        const HH = this.nN;
        for (let IH = 0; IH < 16; IH++) HH[IH] = Math.min(HH[IH], IH < 0 || arguments.length <= IH ? void 0 : arguments[IH]);
        return this.markAsUpdated(), this;
      }
      maximizeInPlace(HH) {
        const IH = this.nN,
          EH = HH.m;
        for (let RH = 0; RH < 16; RH++) IH[RH] = Math.min(IH[RH], EH[RH]);
        return this.markAsUpdated(), this;
      }
      maximizeInPlaceFromFloats() {
        const HH = this.nN;
        for (let IH = 0; IH < 16; IH++) HH[IH] = Math.min(HH[IH], IH < 0 || arguments.length <= IH ? void 0 : arguments[IH]);
        return this.markAsUpdated(), this;
      }
      negate() {
        return this.negateToRef(new rH());
      }
      negateInPlace() {
        const HH = this.nN;
        for (let IH = 0; IH < 16; IH++) HH[IH] = -HH[IH];
        return this.markAsUpdated(), this;
      }
      negateToRef(HH) {
        const IH = this.nN,
          EH = HH.nN;
        for (let RH = 0; RH < 16; RH++) EH[RH] = -IH[RH];
        return HH.markAsUpdated(), HH;
      }
      equals(HH) {
        const IH = HH;
        if (!IH) return !1;
        if ((this._isIdentity || IH._isIdentity) && !this._isIdentityDirty && !IH._isIdentityDirty) return this._isIdentity && IH._isIdentity;
        const EH = this.m,
          RH = IH.m;
        return EH[0] === RH[0] && EH[1] === RH[1] && EH[2] === RH[2] && EH[3] === RH[3] && EH[4] === RH[4] && EH[5] === RH[5] && EH[6] === RH[6] && EH[7] === RH[7] && EH[8] === RH[8] && EH[9] === RH[9] && EH[10] === RH[10] && EH[11] === RH[11] && EH[12] === RH[12] && EH[13] === RH[13] && EH[14] === RH[14] && EH[15] === RH[15];
      }
      equalsWithEpsilon(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const EH = this.nN,
          RH = HH.m;
        for (let hH = 0; hH < 16; hH++) if (!(0, eH.WithinEpsilon)(EH[hH], RH[hH], IH)) return !1;
        return !0;
      }
      equalsToFloats() {
        const HH = this.nN;
        for (let IH = 0; IH < 16; IH++) if (HH[IH] != (IH < 0 || arguments.length <= IH ? void 0 : arguments[IH])) return !1;
        return !0;
      }
      floor() {
        return this.floorToRef(new rH());
      }
      floorToRef(HH) {
        const IH = this.nN,
          EH = HH.nN;
        for (let RH = 0; RH < 16; RH++) EH[RH] = Math.floor(IH[RH]);
        return HH.markAsUpdated(), HH;
      }
      fract() {
        return this.fractToRef(new rH());
      }
      fractToRef(HH) {
        const IH = this.nN,
          EH = HH.nN;
        for (let RH = 0; RH < 16; RH++) EH[RH] = IH[RH] - Math.floor(IH[RH]);
        return HH.markAsUpdated(), HH;
      }
      clone() {
        const HH = new rH();
        return HH.RH(this), HH;
      }
      getClassName() {
        return "Matrix";
      }
      getHashCode() {
        let HH = VH(this.nN[0]);
        for (let IH = 1; IH < 16; IH++) HH = 397 * HH ^ VH(this.nN[IH]);
        return HH;
      }
      decomposeToTransformNode(HH) {
        return HH.rotationQuaternion = HH.rotationQuaternion || new OH(), this.decompose(HH.WJ, HH.rotationQuaternion, HH.position);
      }
      decompose(HH, IH, EH, RH) {
        let hH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return EH && EH.nO(0), HH && HH.nO(1), IH && IH.nY(0, 0, 0, 1), !0;
        const TH = this.nN;
        if (EH && EH.nY(TH[12], TH[13], TH[14]), (HH = HH || FH.Rh[0]).x = Math.sqrt(TH[0] * TH[0] + TH[1] * TH[1] + TH[2] * TH[2]), HH.y = Math.sqrt(TH[4] * TH[4] + TH[5] * TH[5] + TH[6] * TH[6]), HH.z = Math.sqrt(TH[8] * TH[8] + TH[9] * TH[9] + TH[10] * TH[10]), RH) {
          const IH = (hH ? RH.absoluteScaling.x : RH.WJ.x) < 0 ? -1 : 1,
            EH = (hH ? RH.absoluteScaling.y : RH.WJ.y) < 0 ? -1 : 1,
            TH = (hH ? RH.absoluteScaling.z : RH.WJ.z) < 0 ? -1 : 1;
          HH.x *= IH, HH.y *= EH, HH.z *= TH;
        } else this.determinant() <= 0 && (HH.y *= -1);
        if (0 === HH._x || 0 === HH._y || 0 === HH._z) return IH && IH.nY(0, 0, 0, 1), !1;
        if (IH) {
          const EH = 1 / HH._x,
            RH = 1 / HH._y,
            hH = 1 / HH._z;
          rH.FromValuesToRef(TH[0] * EH, TH[1] * EH, TH[2] * EH, 0, TH[4] * RH, TH[5] * RH, TH[6] * RH, 0, TH[8] * hH, TH[9] * hH, TH[10] * hH, 0, 0, 0, 0, 1, FH.Matrix[0]), OH.FromRotationMatrixToRef(FH.Matrix[0], IH);
        }
        return !0;
      }
      getRow(HH) {
        if (HH < 0 || HH > 3) return null;
        const IH = 4 * HH;
        return new JH(this.nN[IH + 0], this.nN[IH + 1], this.nN[IH + 2], this.nN[IH + 3]);
      }
      getRowToRef(HH, IH) {
        if (HH >= 0 && HH <= 3) {
          const EH = 4 * HH;
          IH.x = this.nN[EH + 0], IH.y = this.nN[EH + 1], IH.z = this.nN[EH + 2], IH.w = this.nN[EH + 3];
        }
        return IH;
      }
      setRow(HH, IH) {
        return this.setRowFromFloats(HH, IH.x, IH.y, IH.z, IH.w);
      }
      transpose() {
        const HH = new rH();
        return rH.TransposeToRef(this, HH), HH;
      }
      transposeToRef(HH) {
        return rH.TransposeToRef(this, HH), HH;
      }
      setRowFromFloats(HH, IH, EH, RH, hH) {
        if (HH < 0 || HH > 3) return this;
        const TH = 4 * HH;
        return this.nN[TH + 0] = IH, this.nN[TH + 1] = EH, this.nN[TH + 2] = RH, this.nN[TH + 3] = hH, this.markAsUpdated(), this;
      }
      scale(HH) {
        const IH = new rH();
        return this.scaleToRef(HH, IH), IH;
      }
      scaleToRef(HH, IH) {
        for (let EH = 0; EH < 16; EH++) IH.nN[EH] = this.nN[EH] * HH;
        return IH.markAsUpdated(), IH;
      }
      scaleAndAddToRef(HH, IH) {
        for (let EH = 0; EH < 16; EH++) IH.nN[EH] += this.nN[EH] * HH;
        return IH.markAsUpdated(), IH;
      }
      scaleInPlace(HH) {
        const IH = this.nN;
        for (let EH = 0; EH < 16; EH++) IH[EH] *= HH;
        return this.markAsUpdated(), this;
      }
      toNormalMatrix(HH) {
        const IH = FH.Matrix[0];
        this.invertToRef(IH), IH.transposeToRef(HH);
        const EH = HH.nN;
        return rH.FromValuesToRef(EH[0], EH[1], EH[2], 0, EH[4], EH[5], EH[6], 0, EH[8], EH[9], EH[10], 0, 0, 0, 0, 1, HH), HH;
      }
      getRotationMatrix() {
        const HH = new rH();
        return this.getRotationMatrixToRef(HH), HH;
      }
      getRotationMatrixToRef(HH) {
        const IH = FH.Rh[0];
        if (!this.decompose(IH)) return rH.IdentityToRef(HH), HH;
        const EH = this.nN,
          RH = 1 / IH._x,
          hH = 1 / IH._y,
          TH = 1 / IH._z;
        return rH.FromValuesToRef(EH[0] * RH, EH[1] * RH, EH[2] * RH, 0, EH[4] * hH, EH[5] * hH, EH[6] * hH, 0, EH[8] * TH, EH[9] * TH, EH[10] * TH, 0, 0, 0, 0, 1, HH), HH;
      }
      toggleModelMatrixHandInPlace() {
        const HH = this.nN;
        return HH[2] *= -1, HH[6] *= -1, HH[8] *= -1, HH[9] *= -1, HH[14] *= -1, this.markAsUpdated(), this;
      }
      toggleProjectionMatrixHandInPlace() {
        const HH = this.nN;
        return HH[8] *= -1, HH[9] *= -1, HH[10] *= -1, HH[11] *= -1, this.markAsUpdated(), this;
      }
      static Qh(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const EH = new rH();
        return rH.FromArrayToRef(HH, IH, EH), EH;
      }
      static FromArrayToRef(HH, IH, EH) {
        for (let RH = 0; RH < 16; RH++) EH.nN[RH] = HH[RH + IH];
        return EH.markAsUpdated(), EH;
      }
      static FromFloat32ArrayToRefScaled(HH, IH, EH, RH) {
        return RH.nN[0] = HH[0 + IH] * EH, RH.nN[1] = HH[1 + IH] * EH, RH.nN[2] = HH[2 + IH] * EH, RH.nN[3] = HH[3 + IH] * EH, RH.nN[4] = HH[4 + IH] * EH, RH.nN[5] = HH[5 + IH] * EH, RH.nN[6] = HH[6 + IH] * EH, RH.nN[7] = HH[7 + IH] * EH, RH.nN[8] = HH[8 + IH] * EH, RH.nN[9] = HH[9 + IH] * EH, RH.nN[10] = HH[10 + IH] * EH, RH.nN[11] = HH[11 + IH] * EH, RH.nN[12] = HH[12 + IH] * EH, RH.nN[13] = HH[13 + IH] * EH, RH.nN[14] = HH[14 + IH] * EH, RH.nN[15] = HH[15 + IH] * EH, RH.markAsUpdated(), RH;
      }
      static get IdentityReadOnly() {
        return rH._IdentityReadOnly;
      }
      static FromValuesToRef(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH, VH, YH, QH, JH, OH, rH, FH) {
        const MH = FH.nN;
        MH[0] = HH, MH[1] = IH, MH[2] = EH, MH[3] = RH, MH[4] = hH, MH[5] = TH, MH[6] = sH, MH[7] = eH, MH[8] = GH, MH[9] = AH, MH[10] = VH, MH[11] = YH, MH[12] = QH, MH[13] = JH, MH[14] = OH, MH[15] = rH, FH.markAsUpdated();
      }
      static FromValues(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH, VH, YH, QH, JH, OH, FH) {
        const MH = new rH(),
          NH = MH.nN;
        return NH[0] = HH, NH[1] = IH, NH[2] = EH, NH[3] = RH, NH[4] = hH, NH[5] = TH, NH[6] = sH, NH[7] = eH, NH[8] = GH, NH[9] = AH, NH[10] = VH, NH[11] = YH, NH[12] = QH, NH[13] = JH, NH[14] = OH, NH[15] = FH, MH.markAsUpdated(), MH;
      }
      static Compose(HH, IH, EH) {
        const RH = new rH();
        return rH.ComposeToRef(HH, IH, EH, RH), RH;
      }
      static ComposeToRef(HH, IH, EH, RH) {
        const hH = RH.nN,
          TH = IH._x,
          sH = IH._y,
          eH = IH._z,
          GH = IH._w,
          AH = TH + TH,
          VH = sH + sH,
          YH = eH + eH,
          QH = TH * AH,
          JH = TH * VH,
          OH = TH * YH,
          rH = sH * VH,
          FH = sH * YH,
          MH = eH * YH,
          NH = GH * AH,
          iI = GH * VH,
          DH = GH * YH,
          PH = HH._x,
          XH = HH._y,
          mI = HH._z;
        return hH[0] = (1 - (rH + MH)) * PH, hH[1] = (JH + DH) * PH, hH[2] = (OH - iI) * PH, hH[3] = 0, hH[4] = (JH - DH) * XH, hH[5] = (1 - (QH + MH)) * XH, hH[6] = (FH + NH) * XH, hH[7] = 0, hH[8] = (OH + iI) * mI, hH[9] = (FH - NH) * mI, hH[10] = (1 - (QH + rH)) * mI, hH[11] = 0, hH[12] = EH._x, hH[13] = EH._y, hH[14] = EH._z, hH[15] = 1, RH.markAsUpdated(), RH;
      }
      static Identity() {
        const HH = rH.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return HH._updateIdentityStatus(!0), HH;
      }
      static IdentityToRef(HH) {
        return rH.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, HH), HH._updateIdentityStatus(!0), HH;
      }
      static Zero() {
        const HH = rH.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return HH._updateIdentityStatus(!1), HH;
      }
      static RotationX(HH) {
        const IH = new rH();
        return rH.RotationXToRef(HH, IH), IH;
      }
      static Invert(HH) {
        const IH = new rH();
        return HH.invertToRef(IH), IH;
      }
      static RotationXToRef(HH, IH) {
        const EH = Math.sin(HH),
          RH = Math.cos(HH);
        return rH.FromValuesToRef(1, 0, 0, 0, 0, RH, EH, 0, 0, -EH, RH, 0, 0, 0, 0, 1, IH), IH._updateIdentityStatus(1 === RH && 0 === EH), IH;
      }
      static RotationY(HH) {
        const IH = new rH();
        return rH.RotationYToRef(HH, IH), IH;
      }
      static RotationYToRef(HH, IH) {
        const EH = Math.sin(HH),
          RH = Math.cos(HH);
        return rH.FromValuesToRef(RH, 0, -EH, 0, 0, 1, 0, 0, EH, 0, RH, 0, 0, 0, 0, 1, IH), IH._updateIdentityStatus(1 === RH && 0 === EH), IH;
      }
      static RotationZ(HH) {
        const IH = new rH();
        return rH.RotationZToRef(HH, IH), IH;
      }
      static RotationZToRef(HH, IH) {
        const EH = Math.sin(HH),
          RH = Math.cos(HH);
        return rH.FromValuesToRef(RH, EH, 0, 0, -EH, RH, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, IH), IH._updateIdentityStatus(1 === RH && 0 === EH), IH;
      }
      static RotationAxis(HH, IH) {
        const EH = new rH();
        return rH.RotationAxisToRef(HH, IH, EH), EH;
      }
      static RotationAxisToRef(HH, IH, EH) {
        const RH = Math.sin(-IH),
          hH = Math.cos(-IH),
          TH = 1 - hH;
        HH = HH.normalizeToRef(FH.Rh[0]);
        const sH = EH.nN;
        return sH[0] = HH._x * HH._x * TH + hH, sH[1] = HH._x * HH._y * TH - HH._z * RH, sH[2] = HH._x * HH._z * TH + HH._y * RH, sH[3] = 0, sH[4] = HH._y * HH._x * TH + HH._z * RH, sH[5] = HH._y * HH._y * TH + hH, sH[6] = HH._y * HH._z * TH - HH._x * RH, sH[7] = 0, sH[8] = HH._z * HH._x * TH - HH._y * RH, sH[9] = HH._z * HH._y * TH + HH._x * RH, sH[10] = HH._z * HH._z * TH + hH, sH[11] = 0, sH[12] = 0, sH[13] = 0, sH[14] = 0, sH[15] = 1, EH.markAsUpdated(), EH;
      }
      static RotationAlignToRef(HH, IH, EH) {
        let hH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const TH = QH.Dot(IH, HH),
          sH = EH.nN;
        if (TH < -1 + RH.b) sH[0] = -1, sH[1] = 0, sH[2] = 0, sH[3] = 0, sH[4] = 0, sH[5] = hH ? 1 : -1, sH[6] = 0, sH[7] = 0, sH[8] = 0, sH[9] = 0, sH[10] = hH ? -1 : 1, sH[11] = 0;else {
          const EH = QH.Cross(IH, HH),
            RH = 1 / (1 + TH);
          sH[0] = EH._x * EH._x * RH + TH, sH[1] = EH._y * EH._x * RH - EH._z, sH[2] = EH._z * EH._x * RH + EH._y, sH[3] = 0, sH[4] = EH._x * EH._y * RH + EH._z, sH[5] = EH._y * EH._y * RH + TH, sH[6] = EH._z * EH._y * RH - EH._x, sH[7] = 0, sH[8] = EH._x * EH._z * RH - EH._y, sH[9] = EH._y * EH._z * RH + EH._x, sH[10] = EH._z * EH._z * RH + TH, sH[11] = 0;
        }
        return sH[12] = 0, sH[13] = 0, sH[14] = 0, sH[15] = 1, EH.markAsUpdated(), EH;
      }
      static RotationYawPitchRoll(HH, IH, EH) {
        const RH = new rH();
        return rH.RotationYawPitchRollToRef(HH, IH, EH, RH), RH;
      }
      static RotationYawPitchRollToRef(HH, IH, EH, RH) {
        return OH.RotationYawPitchRollToRef(HH, IH, EH, FH.Quaternion[0]), FH.Quaternion[0].toRotationMatrix(RH), RH;
      }
      static Scaling(HH, IH, EH) {
        const RH = new rH();
        return rH.ScalingToRef(HH, IH, EH, RH), RH;
      }
      static ScalingToRef(HH, IH, EH, RH) {
        return rH.FromValuesToRef(HH, 0, 0, 0, 0, IH, 0, 0, 0, 0, EH, 0, 0, 0, 0, 1, RH), RH._updateIdentityStatus(1 === HH && 1 === IH && 1 === EH), RH;
      }
      static Translation(HH, IH, EH) {
        const RH = new rH();
        return rH.TranslationToRef(HH, IH, EH, RH), RH;
      }
      static TranslationToRef(HH, IH, EH, RH) {
        return rH.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, HH, IH, EH, 1, RH), RH._updateIdentityStatus(0 === HH && 0 === IH && 0 === EH), RH;
      }
      static Lerp(HH, IH, EH) {
        const RH = new rH();
        return rH.LerpToRef(HH, IH, EH, RH), RH;
      }
      static LerpToRef(HH, IH, EH, RH) {
        const hH = RH.nN,
          TH = HH.m,
          sH = IH.m;
        for (let eH = 0; eH < 16; eH++) hH[eH] = TH[eH] * (1 - EH) + sH[eH] * EH;
        return RH.markAsUpdated(), RH;
      }
      static DecomposeLerp(HH, IH, EH) {
        const RH = new rH();
        return rH.DecomposeLerpToRef(HH, IH, EH, RH), RH;
      }
      static DecomposeLerpToRef(HH, IH, EH, RH) {
        const hH = FH.Rh[0],
          TH = FH.Quaternion[0],
          sH = FH.Rh[1];
        HH.decompose(hH, TH, sH);
        const eH = FH.Rh[2],
          GH = FH.Quaternion[1],
          AH = FH.Rh[3];
        IH.decompose(eH, GH, AH);
        const VH = FH.Rh[4];
        QH.LerpToRef(hH, eH, EH, VH);
        const YH = FH.Quaternion[2];
        OH.SlerpToRef(TH, GH, EH, YH);
        const JH = FH.Rh[5];
        return QH.LerpToRef(sH, AH, EH, JH), rH.ComposeToRef(VH, YH, JH, RH), RH;
      }
      static LookAtLH(HH, IH, EH) {
        const RH = new rH();
        return rH.LookAtLHToRef(HH, IH, EH, RH), RH;
      }
      static LookAtLHToRef(HH, IH, EH, RH) {
        const hH = FH.Rh[0],
          TH = FH.Rh[1],
          sH = FH.Rh[2];
        IH.subtractToRef(HH, sH), sH.normalize(), QH.CrossToRef(EH, sH, hH);
        const eH = hH.lengthSquared();
        0 === eH ? hH.x = 1 : hH.normalizeFromLength(Math.sqrt(eH)), QH.CrossToRef(sH, hH, TH), TH.normalize();
        const GH = -QH.Dot(hH, HH),
          AH = -QH.Dot(TH, HH),
          VH = -QH.Dot(sH, HH);
        return rH.FromValuesToRef(hH._x, TH._x, sH._x, 0, hH._y, TH._y, sH._y, 0, hH._z, TH._z, sH._z, 0, GH, AH, VH, 1, RH), RH;
      }
      static LookAtRH(HH, IH, EH) {
        const RH = new rH();
        return rH.LookAtRHToRef(HH, IH, EH, RH), RH;
      }
      static LookAtRHToRef(HH, IH, EH, RH) {
        const hH = FH.Rh[0],
          TH = FH.Rh[1],
          sH = FH.Rh[2];
        HH.subtractToRef(IH, sH), sH.normalize(), QH.CrossToRef(EH, sH, hH);
        const eH = hH.lengthSquared();
        0 === eH ? hH.x = 1 : hH.normalizeFromLength(Math.sqrt(eH)), QH.CrossToRef(sH, hH, TH), TH.normalize();
        const GH = -QH.Dot(hH, HH),
          AH = -QH.Dot(TH, HH),
          VH = -QH.Dot(sH, HH);
        return rH.FromValuesToRef(hH._x, TH._x, sH._x, 0, hH._y, TH._y, sH._y, 0, hH._z, TH._z, sH._z, 0, GH, AH, VH, 1, RH), RH;
      }
      static LookDirectionLH(HH, IH) {
        const EH = new rH();
        return rH.LookDirectionLHToRef(HH, IH, EH), EH;
      }
      static LookDirectionLHToRef(HH, IH, EH) {
        const RH = FH.Rh[0];
        RH.RH(HH), RH.scaleInPlace(-1);
        const hH = FH.Rh[1];
        return QH.CrossToRef(IH, RH, hH), rH.FromValuesToRef(hH._x, hH._y, hH._z, 0, IH._x, IH._y, IH._z, 0, RH._x, RH._y, RH._z, 0, 0, 0, 0, 1, EH), EH;
      }
      static LookDirectionRH(HH, IH) {
        const EH = new rH();
        return rH.LookDirectionRHToRef(HH, IH, EH), EH;
      }
      static LookDirectionRHToRef(HH, IH, EH) {
        const RH = FH.Rh[2];
        return QH.CrossToRef(IH, HH, RH), rH.FromValuesToRef(RH._x, RH._y, RH._z, 0, IH._x, IH._y, IH._z, 0, HH._x, HH._y, HH._z, 0, 0, 0, 0, 1, EH), EH;
      }
      static OrthoLH(HH, IH, EH, RH, hH) {
        const TH = new rH();
        return rH.OrthoLHToRef(HH, IH, EH, RH, TH, hH), TH;
      }
      static OrthoLHToRef(HH, IH, EH, RH, hH, TH) {
        const sH = 2 / HH,
          eH = 2 / IH,
          GH = 2 / (RH - EH),
          AH = -(RH + EH) / (RH - EH);
        return rH.FromValuesToRef(sH, 0, 0, 0, 0, eH, 0, 0, 0, 0, GH, 0, 0, 0, AH, 1, hH), TH && hH.multiplyToRef(NH, hH), hH._updateIdentityStatus(1 === sH && 1 === eH && 1 === GH && 0 === AH), hH;
      }
      static OrthoOffCenterLH(HH, IH, EH, RH, hH, TH, sH) {
        const eH = new rH();
        return rH.OrthoOffCenterLHToRef(HH, IH, EH, RH, hH, TH, eH, sH), eH;
      }
      static OrthoOffCenterLHToRef(HH, IH, EH, RH, hH, TH, sH, eH) {
        const GH = 2 / (IH - HH),
          AH = 2 / (RH - EH),
          VH = 2 / (TH - hH),
          YH = -(TH + hH) / (TH - hH),
          QH = (HH + IH) / (HH - IH),
          JH = (RH + EH) / (EH - RH);
        return rH.FromValuesToRef(GH, 0, 0, 0, 0, AH, 0, 0, 0, 0, VH, 0, QH, JH, YH, 1, sH), eH && sH.multiplyToRef(NH, sH), sH.markAsUpdated(), sH;
      }
      static ObliqueOffCenterLHToRef(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH, VH) {
        const YH = -sH * Math.cos(eH),
          QH = -sH * Math.sin(eH);
        return rH.TranslationToRef(0, 0, -GH, FH.Matrix[1]), rH.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, YH, QH, 1, 0, 0, 0, 0, 1, FH.Matrix[0]), FH.Matrix[1].multiplyToRef(FH.Matrix[0], FH.Matrix[0]), rH.TranslationToRef(0, 0, GH, FH.Matrix[1]), FH.Matrix[0].multiplyToRef(FH.Matrix[1], FH.Matrix[0]), rH.OrthoOffCenterLHToRef(HH, IH, EH, RH, hH, TH, AH, VH), FH.Matrix[0].multiplyToRef(AH, AH), AH;
      }
      static OrthoOffCenterRH(HH, IH, EH, RH, hH, TH, sH) {
        const eH = new rH();
        return rH.OrthoOffCenterRHToRef(HH, IH, EH, RH, hH, TH, eH, sH), eH;
      }
      static OrthoOffCenterRHToRef(HH, IH, EH, RH, hH, TH, sH, eH) {
        return rH.OrthoOffCenterLHToRef(HH, IH, EH, RH, hH, TH, sH, eH), sH.nN[10] *= -1, sH;
      }
      static ObliqueOffCenterRHToRef(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH, VH) {
        const YH = sH * Math.cos(eH),
          QH = sH * Math.sin(eH);
        return rH.TranslationToRef(0, 0, GH, FH.Matrix[1]), rH.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, YH, QH, 1, 0, 0, 0, 0, 1, FH.Matrix[0]), FH.Matrix[1].multiplyToRef(FH.Matrix[0], FH.Matrix[0]), rH.TranslationToRef(0, 0, -GH, FH.Matrix[1]), FH.Matrix[0].multiplyToRef(FH.Matrix[1], FH.Matrix[0]), rH.OrthoOffCenterRHToRef(HH, IH, EH, RH, hH, TH, AH, VH), FH.Matrix[0].multiplyToRef(AH, AH), AH;
      }
      static PerspectiveLH(HH, IH, EH, RH, hH) {
        let TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const sH = new rH(),
          eH = 2 * EH / HH,
          GH = 2 * EH / IH,
          AH = (RH + EH) / (RH - EH),
          VH = -2 * RH * EH / (RH - EH),
          YH = Math.tan(TH);
        return rH.FromValuesToRef(eH, 0, 0, 0, 0, GH, 0, YH, 0, 0, AH, 1, 0, 0, VH, 0, sH), hH && sH.multiplyToRef(NH, sH), sH._updateIdentityStatus(!1), sH;
      }
      static PerspectiveFovLH(HH, IH, EH, RH, hH) {
        let TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          sH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const eH = new rH();
        return rH.PerspectiveFovLHToRef(HH, IH, EH, RH, eH, !0, hH, TH, sH), eH;
      }
      static PerspectiveFovLHToRef(HH, IH, EH, RH, hH) {
        let TH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          sH = arguments.length > 6 ? arguments[6] : void 0,
          eH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          GH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const AH = EH,
          VH = RH,
          YH = 1 / Math.tan(.5 * HH),
          QH = TH ? YH / IH : YH,
          JH = TH ? YH : YH * IH,
          OH = GH && 0 === AH ? -1 : 0 !== VH ? (VH + AH) / (VH - AH) : 1,
          FH = GH && 0 === AH ? 2 * VH : 0 !== VH ? -2 * VH * AH / (VH - AH) : -2 * AH,
          MH = Math.tan(eH);
        return rH.FromValuesToRef(QH, 0, 0, 0, 0, JH, 0, MH, 0, 0, OH, 1, 0, 0, FH, 0, hH), sH && hH.multiplyToRef(NH, hH), hH._updateIdentityStatus(!1), hH;
      }
      static PerspectiveFovReverseLHToRef(HH, IH, EH, RH, hH) {
        let TH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          sH = arguments.length > 6 ? arguments[6] : void 0,
          eH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const GH = 1 / Math.tan(.5 * HH),
          AH = TH ? GH / IH : GH,
          VH = TH ? GH : GH * IH,
          YH = Math.tan(eH);
        return rH.FromValuesToRef(AH, 0, 0, 0, 0, VH, 0, YH, 0, 0, -EH, 1, 0, 0, 1, 0, hH), sH && hH.multiplyToRef(NH, hH), hH._updateIdentityStatus(!1), hH;
      }
      static PerspectiveFovRH(HH, IH, EH, RH, hH) {
        let TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          sH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const eH = new rH();
        return rH.PerspectiveFovRHToRef(HH, IH, EH, RH, eH, !0, hH, TH, sH), eH;
      }
      static PerspectiveFovRHToRef(HH, IH, EH, RH, hH) {
        let TH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          sH = arguments.length > 6 ? arguments[6] : void 0,
          eH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          GH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const AH = EH,
          VH = RH,
          YH = 1 / Math.tan(.5 * HH),
          QH = TH ? YH / IH : YH,
          JH = TH ? YH : YH * IH,
          OH = GH && 0 === AH ? 1 : 0 !== VH ? -(VH + AH) / (VH - AH) : -1,
          FH = GH && 0 === AH ? 2 * VH : 0 !== VH ? -2 * VH * AH / (VH - AH) : -2 * AH,
          MH = Math.tan(eH);
        return rH.FromValuesToRef(QH, 0, 0, 0, 0, JH, 0, MH, 0, 0, OH, -1, 0, 0, FH, 0, hH), sH && hH.multiplyToRef(NH, hH), hH._updateIdentityStatus(!1), hH;
      }
      static PerspectiveFovReverseRHToRef(HH, IH, EH, RH, hH) {
        let TH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          sH = arguments.length > 6 ? arguments[6] : void 0,
          eH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const GH = 1 / Math.tan(.5 * HH),
          AH = TH ? GH / IH : GH,
          VH = TH ? GH : GH * IH,
          YH = Math.tan(eH);
        return rH.FromValuesToRef(AH, 0, 0, 0, 0, VH, 0, YH, 0, 0, -EH, -1, 0, 0, -1, 0, hH), sH && hH.multiplyToRef(NH, hH), hH._updateIdentityStatus(!1), hH;
      }
      static GetFinalMatrix(HH, IH, EH, RH, hH, TH) {
        const sH = HH.width,
          eH = HH.height,
          GH = HH.x,
          AH = HH.y,
          VH = rH.FromValues(sH / 2, 0, 0, 0, 0, -eH / 2, 0, 0, 0, 0, TH - hH, 0, GH + sH / 2, eH / 2 + AH, hH, 1),
          YH = new rH();
        return IH.multiplyToRef(EH, YH), YH.multiplyToRef(RH, YH), YH.multiplyToRef(VH, YH);
      }
      static GetAsMatrix2x2(HH) {
        const IH = HH.m,
          EH = [IH[0], IH[1], IH[4], IH[5]];
        return TH.d.MatrixUse64Bits ? EH : new Float32Array(EH);
      }
      static GetAsMatrix3x3(HH) {
        const IH = HH.m,
          EH = [IH[0], IH[1], IH[2], IH[4], IH[5], IH[6], IH[8], IH[9], IH[10]];
        return TH.d.MatrixUse64Bits ? EH : new Float32Array(EH);
      }
      static Transpose(HH) {
        const IH = new rH();
        return rH.TransposeToRef(HH, IH), IH;
      }
      static TransposeToRef(HH, IH) {
        const EH = HH.m,
          RH = EH[0],
          hH = EH[4],
          TH = EH[8],
          sH = EH[12],
          eH = EH[1],
          GH = EH[5],
          AH = EH[9],
          VH = EH[13],
          YH = EH[2],
          QH = EH[6],
          JH = EH[10],
          OH = EH[14],
          rH = EH[3],
          FH = EH[7],
          MH = EH[11],
          NH = EH[15],
          iI = IH.nN;
        return iI[0] = RH, iI[1] = hH, iI[2] = TH, iI[3] = sH, iI[4] = eH, iI[5] = GH, iI[6] = AH, iI[7] = VH, iI[8] = YH, iI[9] = QH, iI[10] = JH, iI[11] = OH, iI[12] = rH, iI[13] = FH, iI[14] = MH, iI[15] = NH, IH.markAsUpdated(), IH._updateIdentityStatus(HH._isIdentity, HH._isIdentityDirty), IH;
      }
      static Reflection(HH) {
        const IH = new rH();
        return rH.ReflectionToRef(HH, IH), IH;
      }
      static ReflectionToRef(HH, IH) {
        HH.normalize();
        const EH = HH.normal.x,
          RH = HH.normal.y,
          hH = HH.normal.z,
          TH = -2 * EH,
          sH = -2 * RH,
          eH = -2 * hH;
        return rH.FromValuesToRef(TH * EH + 1, sH * EH, eH * EH, 0, TH * RH, sH * RH + 1, eH * RH, 0, TH * hH, sH * hH, eH * hH + 1, 0, TH * HH.d, sH * HH.d, eH * HH.d, 1, IH), IH;
      }
      static FromXYZAxesToRef(HH, IH, EH, RH) {
        return rH.FromValuesToRef(HH._x, HH._y, HH._z, 0, IH._x, IH._y, IH._z, 0, EH._x, EH._y, EH._z, 0, 0, 0, 0, 1, RH), RH;
      }
      static FromQuaternionToRef(HH, IH) {
        const EH = HH._x * HH._x,
          RH = HH._y * HH._y,
          hH = HH._z * HH._z,
          TH = HH._x * HH._y,
          sH = HH._z * HH._w,
          eH = HH._z * HH._x,
          GH = HH._y * HH._w,
          AH = HH._y * HH._z,
          VH = HH._x * HH._w;
        return IH.nN[0] = 1 - 2 * (RH + hH), IH.nN[1] = 2 * (TH + sH), IH.nN[2] = 2 * (eH - GH), IH.nN[3] = 0, IH.nN[4] = 2 * (TH - sH), IH.nN[5] = 1 - 2 * (hH + EH), IH.nN[6] = 2 * (AH + VH), IH.nN[7] = 0, IH.nN[8] = 2 * (eH + GH), IH.nN[9] = 2 * (AH - VH), IH.nN[10] = 1 - 2 * (RH + EH), IH.nN[11] = 0, IH.nN[12] = 0, IH.nN[13] = 0, IH.nN[14] = 0, IH.nN[15] = 1, IH.markAsUpdated(), IH;
      }
    }
    rH._IdentityReadOnly = rH.Identity();
    class FH {}
    FH.Rh = (0, hH.d)(11, QH.Zero), FH.Matrix = (0, hH.d)(2, rH.Identity), FH.Quaternion = (0, hH.d)(3, OH.Zero);
    class MH {}
    MH.Vector2 = (0, hH.d)(3, YH.Zero), MH.Rh = (0, hH.d)(13, QH.Zero), MH.Vector4 = (0, hH.d)(3, JH.Zero), MH.Quaternion = (0, hH.d)(3, OH.Zero), MH.Matrix = (0, hH.d)(8, rH.Identity);
    const NH = rH.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let iI = !1;
    function DH() {
      iI || (iI = !0, Object.defineProperties(YH.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(QH.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(JH.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(OH.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(rH.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, AH.d)("BABYLON.Vector2", YH), (0, AH.d)("BABYLON.Vector3", QH), (0, AH.d)("BABYLON.Vector4", JH), (0, AH.d)("BABYLON.Matrix", rH));
    }
  }
};
//# sourceMappingURL=ug4nu.44.15b6320c.chunk.js.map
//# debugId=f00be74a-a50c-5ac1-9efc-f6a25e8d2ddb