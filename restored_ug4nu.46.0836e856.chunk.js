!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "86e89f10-8275-5e2c-a1ac-86cb4a2dfad1");
  } catch (e) {}
}();
export const id = 46;
export const ids = [46];
export const modules = {
  21817: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => YH,
      d: () => QH,
      h: () => rH,
      i: () => JH
    });
    var RH = EH(21776),
      hH = EH(21771),
      TH = EH(21791),
      sH = EH(21808);
    function eH(HH) {
      return Math.pow(HH, hH.k);
    }
    function GH(HH) {
      return HH <= .04045 ? .0773993808 * HH : Math.pow(.947867299 * (HH + .055), 2.4);
    }
    function AH(HH) {
      return Math.pow(HH, hH.j);
    }
    function VH(HH) {
      return HH <= .0031308 ? 12.92 * HH : 1.055 * Math.pow(HH, .41666) - .055;
    }
    class YH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = HH, this.g = IH, this.b = EH;
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}";
      }
      getClassName() {
        return "Ah";
      }
      getHashCode() {
        let HH = 255 * this.r | 0;
        return HH = 397 * HH ^ 255 * this.g, HH = 397 * HH ^ 255 * this.b, HH;
      }
      toArray(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return HH[IH] = this.r, HH[IH + 1] = this.g, HH[IH + 2] = this.b, this;
      }
      HO(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return YH.FromArrayToRef(HH, IH, this), this;
      }
      toColor4() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new QH(this.r, this.g, this.b, HH);
      }
      GM() {
        return [this.r, this.g, this.b];
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b;
      }
      multiply(HH) {
        return new YH(this.r * HH.r, this.g * HH.g, this.b * HH.b);
      }
      multiplyToRef(HH, IH) {
        return IH.r = this.r * HH.r, IH.g = this.g * HH.g, IH.b = this.b * HH.b, IH;
      }
      multiplyInPlace(HH) {
        return this.r *= HH.r, this.g *= HH.g, this.b *= HH.b, this;
      }
      multiplyByFloats(HH, IH, EH) {
        return new YH(this.r * HH, this.g * IH, this.b * EH);
      }
      divide(HH) {
        throw new ReferenceError("Can not divide a color");
      }
      divideToRef(HH, IH) {
        throw new ReferenceError("Can not divide a color");
      }
      divideInPlace(HH) {
        throw new ReferenceError("Can not divide a color");
      }
      minimizeInPlace(HH) {
        return this.minimizeInPlaceFromFloats(HH.r, HH.g, HH.b);
      }
      maximizeInPlace(HH) {
        return this.maximizeInPlaceFromFloats(HH.r, HH.g, HH.b);
      }
      minimizeInPlaceFromFloats(HH, IH, EH) {
        return this.r = Math.min(HH, this.r), this.g = Math.min(IH, this.g), this.b = Math.min(EH, this.b), this;
      }
      maximizeInPlaceFromFloats(HH, IH, EH) {
        return this.r = Math.max(HH, this.r), this.g = Math.max(IH, this.g), this.b = Math.max(EH, this.b), this;
      }
      floorToRef(HH) {
        throw new ReferenceError("Can not floor a color");
      }
      floor() {
        throw new ReferenceError("Can not floor a color");
      }
      fractToRef(HH) {
        throw new ReferenceError("Can not fract a color");
      }
      fract() {
        throw new ReferenceError("Can not fract a color");
      }
      equals(HH) {
        return HH && this.r === HH.r && this.g === HH.g && this.b === HH.b;
      }
      equalsFloats(HH, IH, EH) {
        return this.equalsToFloats(HH, IH, EH);
      }
      equalsToFloats(HH, IH, EH) {
        return this.r === HH && this.g === IH && this.b === EH;
      }
      equalsWithEpsilon(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hH.b;
        return (0, TH.WithinEpsilon)(this.r, HH.r, IH) && (0, TH.WithinEpsilon)(this.g, HH.g, IH) && (0, TH.WithinEpsilon)(this.b, HH.b, IH);
      }
      negate() {
        throw new ReferenceError("Can not negate a color");
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color");
      }
      negateToRef(HH) {
        throw new ReferenceError("Can not negate a color");
      }
      scale(HH) {
        return new YH(this.r * HH, this.g * HH, this.b * HH);
      }
      scaleInPlace(HH) {
        return this.r *= HH, this.g *= HH, this.b *= HH, this;
      }
      scaleToRef(HH, IH) {
        return IH.r = this.r * HH, IH.g = this.g * HH, IH.b = this.b * HH, IH;
      }
      scaleAndAddToRef(HH, IH) {
        return IH.r += this.r * HH, IH.g += this.g * HH, IH.b += this.b * HH, IH;
      }
      clampToRef() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          EH = arguments.length > 2 ? arguments[2] : void 0;
        return EH.r = (0, TH.Clamp)(this.r, HH, IH), EH.g = (0, TH.Clamp)(this.g, HH, IH), EH.b = (0, TH.Clamp)(this.b, HH, IH), EH;
      }
      add(HH) {
        return new YH(this.r + HH.r, this.g + HH.g, this.b + HH.b);
      }
      addInPlace(HH) {
        return this.r += HH.r, this.g += HH.g, this.b += HH.b, this;
      }
      addInPlaceFromFloats(HH, IH, EH) {
        return this.r += HH, this.g += IH, this.b += EH, this;
      }
      addToRef(HH, IH) {
        return IH.r = this.r + HH.r, IH.g = this.g + HH.g, IH.b = this.b + HH.b, IH;
      }
      subtract(HH) {
        return new YH(this.r - HH.r, this.g - HH.g, this.b - HH.b);
      }
      subtractToRef(HH, IH) {
        return IH.r = this.r - HH.r, IH.g = this.g - HH.g, IH.b = this.b - HH.b, IH;
      }
      wr(HH) {
        return this.r -= HH.r, this.g -= HH.g, this.b -= HH.b, this;
      }
      subtractFromFloats(HH, IH, EH) {
        return new YH(this.r - HH, this.g - IH, this.b - EH);
      }
      subtractFromFloatsToRef(HH, IH, EH, RH) {
        return RH.r = this.r - HH, RH.g = this.g - IH, RH.b = this.b - EH, RH;
      }
      clone() {
        return new YH(this.r, this.g, this.b);
      }
      RH(HH) {
        return this.r = HH.r, this.g = HH.g, this.b = HH.b, this;
      }
      nY(HH, IH, EH) {
        return this.r = HH, this.g = IH, this.b = EH, this;
      }
      set(HH, IH, EH) {
        return this.nY(HH, IH, EH);
      }
      nO(HH) {
        return this.r = this.g = this.b = HH, this;
      }
      toHexString() {
        const HH = Math.round(255 * this.r),
          IH = Math.round(255 * this.g),
          EH = Math.round(255 * this.b);
        return "#" + (0, TH.ToHex)(HH) + (0, TH.ToHex)(IH) + (0, TH.ToHex)(EH);
      }
      fromHexString(HH) {
        return "#" !== HH.substring(0, 1) || 7 !== HH.length || (this.r = parseInt(HH.substring(1, 3), 16) / 255, this.g = parseInt(HH.substring(3, 5), 16) / 255, this.b = parseInt(HH.substring(5, 7), 16) / 255), this;
      }
      toHSV() {
        return this.toHSVToRef(new YH());
      }
      toHSVToRef(HH) {
        const IH = this.r,
          EH = this.g,
          RH = this.b,
          hH = Math.max(IH, EH, RH),
          TH = Math.min(IH, EH, RH);
        let sH = 0,
          eH = 0;
        const GH = hH,
          AH = hH - TH;
        return 0 !== hH && (eH = AH / hH), hH != TH && (hH == IH ? (sH = (EH - RH) / AH, EH < RH && (sH += 6)) : hH == EH ? sH = (RH - IH) / AH + 2 : hH == RH && (sH = (IH - EH) / AH + 4), sH *= 60), HH.r = sH, HH.g = eH, HH.b = GH, HH;
      }
      toLinearSpace() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IH = new YH();
        return this.toLinearSpaceToRef(IH, HH), IH;
      }
      toLinearSpaceToRef(HH) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (HH.r = GH(this.r), HH.g = GH(this.g), HH.b = GH(this.b)) : (HH.r = eH(this.r), HH.g = eH(this.g), HH.b = eH(this.b)), this;
      }
      toGammaSpace() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IH = new YH();
        return this.toGammaSpaceToRef(IH, HH), IH;
      }
      toGammaSpaceToRef(HH) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (HH.r = VH(this.r), HH.g = VH(this.g), HH.b = VH(this.b)) : (HH.r = AH(this.r), HH.g = AH(this.g), HH.b = AH(this.b)), this;
      }
      static HSVtoRGBToRef(HH, IH, EH, RH) {
        const hH = EH * IH,
          TH = HH / 60,
          sH = hH * (1 - Math.abs(TH % 2 - 1));
        let eH = 0,
          GH = 0,
          AH = 0;
        TH >= 0 && TH <= 1 ? (eH = hH, GH = sH) : TH >= 1 && TH <= 2 ? (eH = sH, GH = hH) : TH >= 2 && TH <= 3 ? (GH = hH, AH = sH) : TH >= 3 && TH <= 4 ? (GH = sH, AH = hH) : TH >= 4 && TH <= 5 ? (eH = sH, AH = hH) : TH >= 5 && TH <= 6 && (eH = hH, AH = sH);
        const VH = EH - hH;
        return RH.r = eH + VH, RH.g = GH + VH, RH.b = AH + VH, RH;
      }
      static FromHSV(HH, IH, EH) {
        const RH = new YH(0, 0, 0);
        return YH.HSVtoRGBToRef(HH, IH, EH, RH), RH;
      }
      static FromHexString(HH) {
        return new YH(0, 0, 0).fromHexString(HH);
      }
      static Qh(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new YH(HH[IH], HH[IH + 1], HH[IH + 2]);
      }
      static FromArrayToRef(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          EH = arguments.length > 2 ? arguments[2] : void 0;
        EH.r = HH[IH], EH.g = HH[IH + 1], EH.b = HH[IH + 2];
      }
      static FromInts(HH, IH, EH) {
        return new YH(HH / 255, IH / 255, EH / 255);
      }
      static Lerp(HH, IH, EH) {
        const RH = new YH(0, 0, 0);
        return YH.LerpToRef(HH, IH, EH, RH), RH;
      }
      static LerpToRef(HH, IH, EH, RH) {
        RH.r = HH.r + (IH.r - HH.r) * EH, RH.g = HH.g + (IH.g - HH.g) * EH, RH.b = HH.b + (IH.b - HH.b) * EH;
      }
      static Hermite(HH, IH, EH, RH, hH) {
        const TH = hH * hH,
          sH = hH * TH,
          eH = 2 * sH - 3 * TH + 1,
          GH = -2 * sH + 3 * TH,
          AH = sH - 2 * TH + hH,
          VH = sH - TH,
          QH = HH.r * eH + EH.r * GH + IH.r * AH + RH.r * VH,
          JH = HH.g * eH + EH.g * GH + IH.g * AH + RH.g * VH,
          OH = HH.b * eH + EH.b * GH + IH.b * AH + RH.b * VH;
        return new YH(QH, JH, OH);
      }
      static Hermite1stDerivative(HH, IH, EH, RH, hH) {
        const TH = YH.Black();
        return this.Hermite1stDerivativeToRef(HH, IH, EH, RH, hH, TH), TH;
      }
      static Hermite1stDerivativeToRef(HH, IH, EH, RH, hH, TH) {
        const sH = hH * hH;
        TH.r = 6 * (sH - hH) * HH.r + (3 * sH - 4 * hH + 1) * IH.r + 6 * (-sH + hH) * EH.r + (3 * sH - 2 * hH) * RH.r, TH.g = 6 * (sH - hH) * HH.g + (3 * sH - 4 * hH + 1) * IH.g + 6 * (-sH + hH) * EH.g + (3 * sH - 2 * hH) * RH.g, TH.b = 6 * (sH - hH) * HH.b + (3 * sH - 4 * hH + 1) * IH.b + 6 * (-sH + hH) * EH.b + (3 * sH - 2 * hH) * RH.b;
      }
      static Red() {
        return new YH(1, 0, 0);
      }
      static Green() {
        return new YH(0, 1, 0);
      }
      static Blue() {
        return new YH(0, 0, 1);
      }
      static Black() {
        return new YH(0, 0, 0);
      }
      static get BlackReadOnly() {
        return YH._BlackReadOnly;
      }
      static White() {
        return new YH(1, 1, 1);
      }
      static Purple() {
        return new YH(.5, 0, .5);
      }
      static Magenta() {
        return new YH(1, 0, 1);
      }
      static Yellow() {
        return new YH(1, 1, 0);
      }
      static Gray() {
        return new YH(.5, .5, .5);
      }
      static Teal() {
        return new YH(0, 1, 1);
      }
      static Random() {
        return new YH(Math.random(), Math.random(), Math.random());
      }
    }
    YH._V8PerformanceHack = new YH(.5, .5, .5), YH._BlackReadOnly = YH.Black();
    class QH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = HH, this.g = IH, this.b = EH, this.a = RH;
      }
      GM() {
        return [this.r, this.g, this.b, this.a];
      }
      toArray(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return HH[IH] = this.r, HH[IH + 1] = this.g, HH[IH + 2] = this.b, HH[IH + 3] = this.a, this;
      }
      HO(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = HH[IH], this.g = HH[IH + 1], this.b = HH[IH + 2], this.a = HH[IH + 3], this;
      }
      equals(HH) {
        return HH && this.r === HH.r && this.g === HH.g && this.b === HH.b && this.a === HH.a;
      }
      add(HH) {
        return new QH(this.r + HH.r, this.g + HH.g, this.b + HH.b, this.a + HH.a);
      }
      addToRef(HH, IH) {
        return IH.r = this.r + HH.r, IH.g = this.g + HH.g, IH.b = this.b + HH.b, IH.a = this.a + HH.a, IH;
      }
      addInPlace(HH) {
        return this.r += HH.r, this.g += HH.g, this.b += HH.b, this.a += HH.a, this;
      }
      addInPlaceFromFloats(HH, IH, EH, RH) {
        return this.r += HH, this.g += IH, this.b += EH, this.a += RH, this;
      }
      subtract(HH) {
        return new QH(this.r - HH.r, this.g - HH.g, this.b - HH.b, this.a - HH.a);
      }
      subtractToRef(HH, IH) {
        return IH.r = this.r - HH.r, IH.g = this.g - HH.g, IH.b = this.b - HH.b, IH.a = this.a - HH.a, IH;
      }
      wr(HH) {
        return this.r -= HH.r, this.g -= HH.g, this.b -= HH.b, this.a -= HH.a, this;
      }
      subtractFromFloats(HH, IH, EH, RH) {
        return new QH(this.r - HH, this.g - IH, this.b - EH, this.a - RH);
      }
      subtractFromFloatsToRef(HH, IH, EH, RH, hH) {
        return hH.r = this.r - HH, hH.g = this.g - IH, hH.b = this.b - EH, hH.a = this.a - RH, hH;
      }
      scale(HH) {
        return new QH(this.r * HH, this.g * HH, this.b * HH, this.a * HH);
      }
      scaleInPlace(HH) {
        return this.r *= HH, this.g *= HH, this.b *= HH, this.a *= HH, this;
      }
      scaleToRef(HH, IH) {
        return IH.r = this.r * HH, IH.g = this.g * HH, IH.b = this.b * HH, IH.a = this.a * HH, IH;
      }
      scaleAndAddToRef(HH, IH) {
        return IH.r += this.r * HH, IH.g += this.g * HH, IH.b += this.b * HH, IH.a += this.a * HH, IH;
      }
      clampToRef() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          EH = arguments.length > 2 ? arguments[2] : void 0;
        return EH.r = (0, TH.Clamp)(this.r, HH, IH), EH.g = (0, TH.Clamp)(this.g, HH, IH), EH.b = (0, TH.Clamp)(this.b, HH, IH), EH.a = (0, TH.Clamp)(this.a, HH, IH), EH;
      }
      multiply(HH) {
        return new QH(this.r * HH.r, this.g * HH.g, this.b * HH.b, this.a * HH.a);
      }
      multiplyToRef(HH, IH) {
        return IH.r = this.r * HH.r, IH.g = this.g * HH.g, IH.b = this.b * HH.b, IH.a = this.a * HH.a, IH;
      }
      multiplyInPlace(HH) {
        return this.r *= HH.r, this.g *= HH.g, this.b *= HH.b, this.a *= HH.a, this;
      }
      multiplyByFloats(HH, IH, EH, RH) {
        return new QH(this.r * HH, this.g * IH, this.b * EH, this.a * RH);
      }
      divide(HH) {
        throw new ReferenceError("Can not divide a color");
      }
      divideToRef(HH, IH) {
        throw new ReferenceError("Can not divide a color");
      }
      divideInPlace(HH) {
        throw new ReferenceError("Can not divide a color");
      }
      minimizeInPlace(HH) {
        return this.r = Math.min(this.r, HH.r), this.g = Math.min(this.g, HH.g), this.b = Math.min(this.b, HH.b), this.a = Math.min(this.a, HH.a), this;
      }
      maximizeInPlace(HH) {
        return this.r = Math.max(this.r, HH.r), this.g = Math.max(this.g, HH.g), this.b = Math.max(this.b, HH.b), this.a = Math.max(this.a, HH.a), this;
      }
      minimizeInPlaceFromFloats(HH, IH, EH, RH) {
        return this.r = Math.min(HH, this.r), this.g = Math.min(IH, this.g), this.b = Math.min(EH, this.b), this.a = Math.min(RH, this.a), this;
      }
      maximizeInPlaceFromFloats(HH, IH, EH, RH) {
        return this.r = Math.max(HH, this.r), this.g = Math.max(IH, this.g), this.b = Math.max(EH, this.b), this.a = Math.max(RH, this.a), this;
      }
      floorToRef(HH) {
        throw new ReferenceError("Can not floor a color");
      }
      floor() {
        throw new ReferenceError("Can not floor a color");
      }
      fractToRef(HH) {
        throw new ReferenceError("Can not fract a color");
      }
      fract() {
        throw new ReferenceError("Can not fract a color");
      }
      negate() {
        throw new ReferenceError("Can not negate a color");
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color");
      }
      negateToRef(HH) {
        throw new ReferenceError("Can not negate a color");
      }
      equalsWithEpsilon(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hH.b;
        return (0, TH.WithinEpsilon)(this.r, HH.r, IH) && (0, TH.WithinEpsilon)(this.g, HH.g, IH) && (0, TH.WithinEpsilon)(this.b, HH.b, IH) && (0, TH.WithinEpsilon)(this.a, HH.a, IH);
      }
      equalsToFloats(HH, IH, EH, RH) {
        return this.r === HH && this.g === IH && this.b === EH && this.a === RH;
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}";
      }
      getClassName() {
        return "rJ";
      }
      getHashCode() {
        let HH = 255 * this.r | 0;
        return HH = 397 * HH ^ 255 * this.g, HH = 397 * HH ^ 255 * this.b, HH = 397 * HH ^ 255 * this.a, HH;
      }
      clone() {
        return new QH().RH(this);
      }
      RH(HH) {
        return this.r = HH.r, this.g = HH.g, this.b = HH.b, this.a = HH.a, this;
      }
      nY(HH, IH, EH, RH) {
        return this.r = HH, this.g = IH, this.b = EH, this.a = RH, this;
      }
      set(HH, IH, EH, RH) {
        return this.nY(HH, IH, EH, RH);
      }
      nO(HH) {
        return this.r = this.g = this.b = this.a = HH, this;
      }
      toHexString() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IH = Math.round(255 * this.r),
          EH = Math.round(255 * this.g),
          RH = Math.round(255 * this.b);
        if (HH) return "#" + (0, TH.ToHex)(IH) + (0, TH.ToHex)(EH) + (0, TH.ToHex)(RH);
        const hH = Math.round(255 * this.a);
        return "#" + (0, TH.ToHex)(IH) + (0, TH.ToHex)(EH) + (0, TH.ToHex)(RH) + (0, TH.ToHex)(hH);
      }
      fromHexString(HH) {
        return "#" !== HH.substring(0, 1) || 9 !== HH.length && 7 !== HH.length || (this.r = parseInt(HH.substring(1, 3), 16) / 255, this.g = parseInt(HH.substring(3, 5), 16) / 255, this.b = parseInt(HH.substring(5, 7), 16) / 255, 9 === HH.length && (this.a = parseInt(HH.substring(7, 9), 16) / 255)), this;
      }
      toLinearSpace() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IH = new QH();
        return this.toLinearSpaceToRef(IH, HH), IH;
      }
      toLinearSpaceToRef(HH) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (HH.r = GH(this.r), HH.g = GH(this.g), HH.b = GH(this.b)) : (HH.r = eH(this.r), HH.g = eH(this.g), HH.b = eH(this.b)), HH.a = this.a, this;
      }
      toGammaSpace() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IH = new QH();
        return this.toGammaSpaceToRef(IH, HH), IH;
      }
      toGammaSpaceToRef(HH) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (HH.r = VH(this.r), HH.g = VH(this.g), HH.b = VH(this.b)) : (HH.r = AH(this.r), HH.g = AH(this.g), HH.b = AH(this.b)), HH.a = this.a, this;
      }
      static FromHexString(HH) {
        return "#" !== HH.substring(0, 1) || 9 !== HH.length && 7 !== HH.length ? new QH(0, 0, 0, 0) : new QH(0, 0, 0, 1).fromHexString(HH);
      }
      static Lerp(HH, IH, EH) {
        return QH.LerpToRef(HH, IH, EH, new QH());
      }
      static LerpToRef(HH, IH, EH, RH) {
        return RH.r = HH.r + (IH.r - HH.r) * EH, RH.g = HH.g + (IH.g - HH.g) * EH, RH.b = HH.b + (IH.b - HH.b) * EH, RH.a = HH.a + (IH.a - HH.a) * EH, RH;
      }
      static Hermite(HH, IH, EH, RH, hH) {
        const TH = hH * hH,
          sH = hH * TH,
          eH = 2 * sH - 3 * TH + 1,
          GH = -2 * sH + 3 * TH,
          AH = sH - 2 * TH + hH,
          VH = sH - TH,
          YH = HH.r * eH + EH.r * GH + IH.r * AH + RH.r * VH,
          JH = HH.g * eH + EH.g * GH + IH.g * AH + RH.g * VH,
          OH = HH.b * eH + EH.b * GH + IH.b * AH + RH.b * VH,
          rH = HH.a * eH + EH.a * GH + IH.a * AH + RH.a * VH;
        return new QH(YH, JH, OH, rH);
      }
      static Hermite1stDerivative(HH, IH, EH, RH, hH) {
        const TH = new QH();
        return this.Hermite1stDerivativeToRef(HH, IH, EH, RH, hH, TH), TH;
      }
      static Hermite1stDerivativeToRef(HH, IH, EH, RH, hH, TH) {
        const sH = hH * hH;
        TH.r = 6 * (sH - hH) * HH.r + (3 * sH - 4 * hH + 1) * IH.r + 6 * (-sH + hH) * EH.r + (3 * sH - 2 * hH) * RH.r, TH.g = 6 * (sH - hH) * HH.g + (3 * sH - 4 * hH + 1) * IH.g + 6 * (-sH + hH) * EH.g + (3 * sH - 2 * hH) * RH.g, TH.b = 6 * (sH - hH) * HH.b + (3 * sH - 4 * hH + 1) * IH.b + 6 * (-sH + hH) * EH.b + (3 * sH - 2 * hH) * RH.b, TH.a = 6 * (sH - hH) * HH.a + (3 * sH - 4 * hH + 1) * IH.a + 6 * (-sH + hH) * EH.a + (3 * sH - 2 * hH) * RH.a;
      }
      static FromColor3(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new QH(HH.r, HH.g, HH.b, IH);
      }
      static Qh(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new QH(HH[IH], HH[IH + 1], HH[IH + 2], HH[IH + 3]);
      }
      static FromArrayToRef(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          EH = arguments.length > 2 ? arguments[2] : void 0;
        EH.r = HH[IH], EH.g = HH[IH + 1], EH.b = HH[IH + 2], EH.a = HH[IH + 3];
      }
      static FromInts(HH, IH, EH, RH) {
        return new QH(HH / 255, IH / 255, EH / 255, RH / 255);
      }
      static CheckColors4(HH, IH) {
        if (HH.length === 3 * IH) {
          const IH = [];
          for (let EH = 0; EH < HH.length; EH += 3) {
            const RH = EH / 3 * 4;
            IH[RH] = HH[EH], IH[RH + 1] = HH[EH + 1], IH[RH + 2] = HH[EH + 2], IH[RH + 3] = 1;
          }
          return IH;
        }
        return HH;
      }
    }
    QH._V8PerformanceHack = new QH(.5, .5, .5, .5);
    class JH {}
    JH.Ah = (0, RH.b)(3, YH.Black), JH.rJ = (0, RH.b)(3, () => new QH(0, 0, 0, 0));
    let OH = !1;
    function rH() {
      OH || (OH = !0, Object.defineProperties(YH.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(QH.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, sH.d)("BABYLON.Color3", YH), (0, sH.d)("BABYLON.Color4", QH));
    }
  },
  21771: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => sH,
      f: () => TH,
      j: () => RH,
      k: () => hH
    });
    const RH = 1 / 2.2,
      hH = 2.2,
      TH = (1 + Math.sqrt(5)) / 2;
    let sH = .001;
  },
  21791: (HH, IH, EH) => {
    function RH(HH) {
      return parseInt(HH.toString().replace(/\W/g, ""));
    }
    function hH(HH, IH) {
      let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(HH - IH) <= EH;
    }
    function TH(HH, IH, EH) {
      let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return HH < IH - RH || HH > EH + RH;
    }
    function sH(HH, IH) {
      return HH === IH ? HH : Math.random() * (IH - HH) + HH;
    }
    function eH(HH, IH, EH) {
      return HH + (IH - HH) * EH;
    }
    function GH(HH, IH, EH) {
      let RH = FH(IH - HH, 360);
      return RH > 180 && (RH -= 360), HH + RH * QH(EH);
    }
    function AH(HH, IH, EH) {
      let RH;
      return RH = HH != IH ? QH((EH - HH) / (IH - HH)) : 0, RH;
    }
    function VH(HH, IH, EH, RH, hH) {
      const TH = hH * hH,
        sH = hH * TH;
      return HH * (2 * sH - 3 * TH + 1) + EH * (-2 * sH + 3 * TH) + IH * (sH - 2 * TH + hH) + RH * (sH - TH);
    }
    function YH(HH, IH, EH, RH, hH) {
      const TH = hH * hH;
      return 6 * (TH - hH) * HH + (3 * TH - 4 * hH + 1) * IH + 6 * (-TH + hH) * EH + (3 * TH - 2 * hH) * RH;
    }
    function QH(HH) {
      let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(EH, Math.max(IH, HH));
    }
    function JH(HH) {
      return HH -= 2 * Math.PI * Math.floor((HH + Math.PI) / (2 * Math.PI));
    }
    function OH(HH) {
      const IH = HH.toString(16);
      return HH <= 15 ? ("0" + IH).toUpperCase() : IH.toUpperCase();
    }
    function rH(HH) {
      if (Math.log2) return Math.floor(Math.log2(HH));
      if (HH < 0) return NaN;
      if (0 === HH) return -1 / 0;
      let IH = 0;
      if (HH < 1) {
        for (; HH < 1;) IH++, HH *= 2;
        IH = -IH;
      } else if (HH > 1) for (; HH > 1;) IH++, HH = Math.floor(HH / 2);
      return IH;
    }
    function FH(HH, IH) {
      return HH - Math.floor(HH / IH) * IH;
    }
    function MH(HH, IH, EH) {
      return (HH - IH) / (EH - IH);
    }
    function NH(HH, IH, EH) {
      return HH * (EH - IH) + IH;
    }
    function iI(HH, IH) {
      let EH = FH(IH - HH, 360);
      return EH > 180 && (EH -= 360), EH;
    }
    function DH(HH, IH) {
      const EH = FH(HH, 2 * IH);
      return IH - Math.abs(EH - IH);
    }
    function PH(HH, IH, EH) {
      let RH = QH(EH);
      return RH = -2 * RH * RH * RH + 3 * RH * RH, IH * RH + HH * (1 - RH);
    }
    function XH(HH, IH, EH) {
      let RH;
      return RH = Math.abs(IH - HH) <= EH ? IH : HH + Math.sign(IH - HH) * EH, RH;
    }
    function mI(HH, IH, EH) {
      const RH = iI(HH, IH);
      let hH;
      return hH = -EH < RH && RH < EH ? IH : XH(HH, IH = HH + RH, EH), hH;
    }
    function ZH(HH, IH, EH) {
      return (HH - IH) / (EH - IH);
    }
    function qH(HH, IH, EH) {
      return (EH - IH) * HH + IH;
    }
    function LH(HH, IH) {
      const EH = HH % IH;
      return 0 === EH ? IH : LH(IH, EH);
    }
    EH.r(IH), EH.d(IH, {
      Clamp: () => QH,
      DeltaAngle: () => iI,
      Denormalize: () => NH,
      ExtractAsInt: () => RH,
      Hermite: () => VH,
      Hermite1stDerivative: () => YH,
      HighestCommonFactor: () => LH,
      ILog2: () => rH,
      InverseLerp: () => AH,
      Lerp: () => eH,
      LerpAngle: () => GH,
      MoveTowards: () => XH,
      MoveTowardsAngle: () => mI,
      Normalize: () => MH,
      NormalizeRadians: () => JH,
      OutsideRange: () => TH,
      PercentToRange: () => qH,
      PingPong: () => DH,
      RandomRange: () => sH,
      RangeToPercent: () => ZH,
      Repeat: () => FH,
      SmoothStep: () => PH,
      ToHex: () => OH,
      WithinEpsilon: () => hH
    });
  },
  21776: (HH, IH, EH) => {
    function RH(HH, IH) {
      const EH = [];
      for (let RH = 0; RH < HH; ++RH) EH.push(IH());
      return EH;
    }
    function hH(HH, IH) {
      return RH(HH, IH);
    }
    EH.d(IH, {
      b: () => RH,
      d: () => hH,
      e: () => sH
    });
    const TH = ["push", "splice", "pop", "shift", "unshift"];
    function sH(HH, IH) {
      const EH = TH.map(EH => function (HH, IH, EH) {
        const RH = HH[IH];
        if ("function" !== typeof RH) return null;
        const hH = function () {
          const RH = HH.length,
            TH = hH.previous.apply(HH, arguments);
          return EH(IH, RH), TH;
        };
        return RH.next = hH, hH.previous = RH, HH[IH] = hH, () => {
          const EH = hH.previous;
          if (!EH) return;
          const RH = hH.next;
          RH ? (EH.next = RH, RH.previous = EH) : (EH.next = void 0, HH[IH] = EH), hH.next = void 0, hH.previous = void 0;
        };
      }(HH, EH, IH));
      return () => {
        for (const HH of EH) null === HH || void 0 === HH || HH();
      };
    }
  },
  21808: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => TH,
      d: () => hH
    });
    const RH = {};
    function hH(HH, IH) {
      RH[HH] = IH;
    }
    function TH(HH) {
      return RH[HH];
    }
  }
};
//# sourceMappingURL=ug4nu.46.0836e856.chunk.js.map
//# debugId=86e89f10-8275-5e2c-a1ac-86cb4a2dfad1