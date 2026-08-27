!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "70c6ba48-2da9-5b3b-8bbe-b7725ad88839");
  } catch (e) {}
}();
export const id = 50;
export const ids = [50, 56];
export const modules = {
  22112: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => DH,
      c: () => gH,
      f: () => iI,
      h: () => cH,
      i: () => FH,
      j: () => MH,
      l: () => QH,
      n: () => rH,
      r: () => OH,
      t: () => JH
    });
    var RH = EH(21764),
      hH = EH(21817),
      TH = EH(21791),
      sH = EH(22115),
      eH = EH(21970),
      GH = EH(22098),
      AH = EH(21863),
      VH = EH(21972),
      YH = EH(21808);
    const QH = Object.freeze(new RH.h(0, 0, 0, 0)),
      JH = Object.freeze(RH.x.Zero()),
      OH = Object.freeze(RH.t.Zero()),
      rH = Object.freeze(GH.d.Zero()),
      FH = Object.freeze(hH.b.Black()),
      MH = Object.freeze(new hH.d(0, 0, 0, 0)),
      NH = {
        key: 0,
        repeatCount: 0,
        KG: 2
      };
    class iI {
      static _PrepareAnimation(HH, IH, EH, TH, sH, eH, AH, VH) {
        let YH;
        if (!isNaN(parseFloat(sH)) && isFinite(sH) ? YH = iI.ANIMATIONTYPE_FLOAT : sH instanceof RH.h ? YH = iI.ANIMATIONTYPE_QUATERNION : sH instanceof RH.x ? YH = iI.ANIMATIONTYPE_VECTOR3 : sH instanceof RH.t ? YH = iI.ANIMATIONTYPE_VECTOR2 : sH instanceof hH.b ? YH = iI.ANIMATIONTYPE_COLOR3 : sH instanceof hH.d ? YH = iI.ANIMATIONTYPE_COLOR4 : sH instanceof GH.d && (YH = iI.ANIMATIONTYPE_SIZE), void 0 == YH) return null;
        const QH = new iI(HH, IH, EH, YH, AH),
          JH = [{
            frame: 0,
            value: sH
          }, {
            frame: TH,
            value: eH
          }];
        return QH.setKeys(JH), void 0 !== VH && QH.setEasingFunction(VH), QH;
      }
      get runtimeAnimations() {
        return this._runtimeAnimations;
      }
      get hasRunningRuntimeAnimations() {
        for (const HH of this._runtimeAnimations) if (!HH.isStopped()) return !0;
        return !1;
      }
      constructor(HH, IH, EH, RH, hH, TH) {
        this.name = HH, this.targetProperty = IH, this.framePerSecond = EH, this.dataType = RH, this.KG = hH, this.enableBlending = TH, this._easingFunction = null, this._runtimeAnimations = new Array(), this._events = new Array(), this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = IH.split("."), this.dataType = RH, this.KG = void 0 === hH ? iI.ANIMATIONLOOPMODE_CYCLE : hH, this.uniqueId = iI._UniqueIdGenerator++;
      }
      toString(HH) {
        let IH = "Name: " + this.name + ", property: " + this.targetProperty;
        if (IH += ", datatype: " + ["Float", "Rh", "Quaternion", "Matrix", "Ah", "Vector2"][this.dataType], IH += ", nKeys: " + (this._keys ? this._keys.length : "none"), IH += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), HH) {
          IH += ", Ranges: {";
          let HH = !0;
          for (const EH in this._ranges) HH || (IH += ", "), HH = !1, IH += EH;
          IH += "}";
        }
        return IH;
      }
      addEvent(HH) {
        this._events.push(HH), this._events.sort((HH, IH) => HH.frame - IH.frame);
      }
      removeEvents(HH) {
        for (let IH = 0; IH < this._events.length; IH++) this._events[IH].frame === HH && (this._events.splice(IH, 1), IH--);
      }
      getEvents() {
        return this._events;
      }
      createRange(HH, IH, EH) {
        this._ranges[HH] || (this._ranges[HH] = new sH.c(HH, IH, EH));
      }
      deleteRange(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const EH = this._ranges[HH];
        if (EH) {
          if (IH) {
            const HH = EH.from,
              IH = EH.to;
            for (let EH = this._keys.length - 1; EH >= 0; EH--) this._keys[EH].frame >= HH && this._keys[EH].frame <= IH && this._keys.splice(EH, 1);
          }
          this._ranges[HH] = null;
        }
      }
      getRange(HH) {
        return this._ranges[HH];
      }
      getKeys() {
        return this._keys;
      }
      getHighestFrame() {
        let HH = 0;
        for (let IH = 0, EH = this._keys.length; IH < EH; IH++) HH < this._keys[IH].frame && (HH = this._keys[IH].frame);
        return HH;
      }
      getEasingFunction() {
        return this._easingFunction;
      }
      setEasingFunction(HH) {
        this._easingFunction = HH;
      }
      floatInterpolateFunction(HH, IH, EH) {
        return (0, TH.Lerp)(HH, IH, EH);
      }
      floatInterpolateFunctionWithTangents(HH, IH, EH, RH, hH) {
        return (0, TH.Hermite)(HH, IH, EH, RH, hH);
      }
      quaternionInterpolateFunction(HH, IH, EH) {
        return RH.h.Slerp(HH, IH, EH);
      }
      quaternionInterpolateFunctionWithTangents(HH, IH, EH, hH, TH) {
        return RH.h.Hermite(HH, IH, EH, hH, TH).normalize();
      }
      vector3InterpolateFunction(HH, IH, EH) {
        return RH.x.Lerp(HH, IH, EH);
      }
      vector3InterpolateFunctionWithTangents(HH, IH, EH, hH, TH) {
        return RH.x.Hermite(HH, IH, EH, hH, TH);
      }
      vector2InterpolateFunction(HH, IH, EH) {
        return RH.t.Lerp(HH, IH, EH);
      }
      vector2InterpolateFunctionWithTangents(HH, IH, EH, hH, TH) {
        return RH.t.Hermite(HH, IH, EH, hH, TH);
      }
      sizeInterpolateFunction(HH, IH, EH) {
        return GH.d.Lerp(HH, IH, EH);
      }
      color3InterpolateFunction(HH, IH, EH) {
        return hH.b.Lerp(HH, IH, EH);
      }
      color3InterpolateFunctionWithTangents(HH, IH, EH, RH, TH) {
        return hH.b.Hermite(HH, IH, EH, RH, TH);
      }
      color4InterpolateFunction(HH, IH, EH) {
        return hH.d.Lerp(HH, IH, EH);
      }
      color4InterpolateFunctionWithTangents(HH, IH, EH, RH, TH) {
        return hH.d.Hermite(HH, IH, EH, RH, TH);
      }
      _getKeyValue(HH) {
        return "function" === typeof HH ? HH() : HH;
      }
      evaluate(HH) {
        return NH.key = 0, this._interpolate(HH, NH);
      }
      _interpolate(HH, IH) {
        var EH;
        let RH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (IH.KG === iI.ANIMATIONLOOPMODE_CONSTANT && IH.repeatCount > 0) return IH.highLimitValue.clone ? IH.highLimitValue.clone() : IH.highLimitValue;
        const hH = this._keys;
        let TH;
        if (this._coreAnimation) TH = this._coreAnimation._key;else {
          const EH = hH.length;
          for (TH = IH.key; TH >= 0 && HH < hH[TH].frame;) --TH;
          for (; TH + 1 <= EH - 1 && HH >= hH[TH + 1].frame;) ++TH;
          if (IH.key = TH, TH < 0) return RH ? void 0 : this._getKeyValue(hH[0].value);
          if (TH + 1 > EH - 1) return RH ? void 0 : this._getKeyValue(hH[EH - 1].value);
          this._key = TH;
        }
        const sH = hH[TH],
          eH = hH[TH + 1];
        if (RH && (HH === sH.frame || HH === eH.frame)) return;
        const GH = this._getKeyValue(sH.value),
          AH = this._getKeyValue(eH.value);
        if (1 === sH.interpolation) return eH.frame > HH ? GH : AH;
        const VH = void 0 !== sH.outTangent && void 0 !== eH.inTangent,
          YH = eH.frame - sH.frame;
        let NH = (HH - sH.frame) / YH;
        const DH = sH.easingFunction || this.getEasingFunction();
        switch (DH && (NH = DH.ease(NH)), this.dataType) {
          case iI.ANIMATIONTYPE_FLOAT:
            {
              const HH = VH ? this.floatInterpolateFunctionWithTangents(GH, sH.outTangent * YH, AH, eH.inTangent * YH, NH) : this.floatInterpolateFunction(GH, AH, NH);
              switch (IH.KG) {
                case iI.ANIMATIONLOOPMODE_CYCLE:
                case iI.ANIMATIONLOOPMODE_CONSTANT:
                case iI.ANIMATIONLOOPMODE_YOYO:
                  return HH;
                case iI.ANIMATIONLOOPMODE_RELATIVE:
                case iI.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                  return (null !== (EH = IH.offsetValue) && void 0 !== EH ? EH : 0) * IH.repeatCount + HH;
              }
              break;
            }
          case iI.ANIMATIONTYPE_QUATERNION:
            {
              const HH = VH ? this.quaternionInterpolateFunctionWithTangents(GH, sH.outTangent.scale(YH), AH, eH.inTangent.scale(YH), NH) : this.quaternionInterpolateFunction(GH, AH, NH);
              switch (IH.KG) {
                case iI.ANIMATIONLOOPMODE_CYCLE:
                case iI.ANIMATIONLOOPMODE_CONSTANT:
                case iI.ANIMATIONLOOPMODE_YOYO:
                  return HH;
                case iI.ANIMATIONLOOPMODE_RELATIVE:
                case iI.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                  return HH.addInPlace((IH.offsetValue || QH).scale(IH.repeatCount));
              }
              return HH;
            }
          case iI.ANIMATIONTYPE_VECTOR3:
            {
              const HH = VH ? this.vector3InterpolateFunctionWithTangents(GH, sH.outTangent.scale(YH), AH, eH.inTangent.scale(YH), NH) : this.vector3InterpolateFunction(GH, AH, NH);
              switch (IH.KG) {
                case iI.ANIMATIONLOOPMODE_CYCLE:
                case iI.ANIMATIONLOOPMODE_CONSTANT:
                case iI.ANIMATIONLOOPMODE_YOYO:
                  return HH;
                case iI.ANIMATIONLOOPMODE_RELATIVE:
                case iI.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                  return HH.add((IH.offsetValue || JH).scale(IH.repeatCount));
              }
              break;
            }
          case iI.ANIMATIONTYPE_VECTOR2:
            {
              const HH = VH ? this.vector2InterpolateFunctionWithTangents(GH, sH.outTangent.scale(YH), AH, eH.inTangent.scale(YH), NH) : this.vector2InterpolateFunction(GH, AH, NH);
              switch (IH.KG) {
                case iI.ANIMATIONLOOPMODE_CYCLE:
                case iI.ANIMATIONLOOPMODE_CONSTANT:
                case iI.ANIMATIONLOOPMODE_YOYO:
                  return HH;
                case iI.ANIMATIONLOOPMODE_RELATIVE:
                case iI.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                  return HH.add((IH.offsetValue || OH).scale(IH.repeatCount));
              }
              break;
            }
          case iI.ANIMATIONTYPE_SIZE:
            switch (IH.KG) {
              case iI.ANIMATIONLOOPMODE_CYCLE:
              case iI.ANIMATIONLOOPMODE_CONSTANT:
              case iI.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(GH, AH, NH);
              case iI.ANIMATIONLOOPMODE_RELATIVE:
              case iI.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(GH, AH, NH).add((IH.offsetValue || rH).scale(IH.repeatCount));
            }
            break;
          case iI.ANIMATIONTYPE_COLOR3:
            {
              const HH = VH ? this.color3InterpolateFunctionWithTangents(GH, sH.outTangent.scale(YH), AH, eH.inTangent.scale(YH), NH) : this.color3InterpolateFunction(GH, AH, NH);
              switch (IH.KG) {
                case iI.ANIMATIONLOOPMODE_CYCLE:
                case iI.ANIMATIONLOOPMODE_CONSTANT:
                case iI.ANIMATIONLOOPMODE_YOYO:
                  return HH;
                case iI.ANIMATIONLOOPMODE_RELATIVE:
                case iI.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                  return HH.add((IH.offsetValue || FH).scale(IH.repeatCount));
              }
              break;
            }
          case iI.ANIMATIONTYPE_COLOR4:
            {
              const HH = VH ? this.color4InterpolateFunctionWithTangents(GH, sH.outTangent.scale(YH), AH, eH.inTangent.scale(YH), NH) : this.color4InterpolateFunction(GH, AH, NH);
              switch (IH.KG) {
                case iI.ANIMATIONLOOPMODE_CYCLE:
                case iI.ANIMATIONLOOPMODE_CONSTANT:
                case iI.ANIMATIONLOOPMODE_YOYO:
                  return HH;
                case iI.ANIMATIONLOOPMODE_RELATIVE:
                case iI.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                  return HH.add((IH.offsetValue || MH).scale(IH.repeatCount));
              }
              break;
            }
          case iI.ANIMATIONTYPE_MATRIX:
            switch (IH.KG) {
              case iI.ANIMATIONLOOPMODE_CYCLE:
              case iI.ANIMATIONLOOPMODE_CONSTANT:
              case iI.ANIMATIONLOOPMODE_YOYO:
                return iI.AllowMatricesInterpolation ? this.matrixInterpolateFunction(GH, AH, NH, IH.workValue) : GH;
              case iI.ANIMATIONLOOPMODE_RELATIVE:
              case iI.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return GH;
            }
        }
        return 0;
      }
      matrixInterpolateFunction(HH, IH, EH, hH) {
        return iI.AllowMatrixDecomposeForInterpolation ? hH ? (RH.d.DecomposeLerpToRef(HH, IH, EH, hH), hH) : RH.d.DecomposeLerp(HH, IH, EH) : hH ? (RH.d.LerpToRef(HH, IH, EH, hH), hH) : RH.d.Lerp(HH, IH, EH);
      }
      clone() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IH = new iI(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.KG);
        if (IH.enableBlending = this.enableBlending, IH.blendingSpeed = this.blendingSpeed, this._keys && IH.setKeys(this._keys, !1, HH), this._ranges) {
          IH._ranges = {};
          for (const HH in this._ranges) {
            const EH = this._ranges[HH];
            EH && (IH._ranges[HH] = EH.clone());
          }
        }
        return IH;
      }
      setKeys(HH) {
        let IH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = HH;else if (this._keys = HH.slice(0), IH) for (let EH = 0; EH < this._keys.length; EH++) {
          const HH = this._keys[EH];
          this._keys[EH] = {
            frame: HH.frame,
            value: HH.value.clone ? HH.value.clone() : HH.value,
            inTangent: HH.inTangent && HH.inTangent.clone ? HH.inTangent.clone() : HH.inTangent,
            outTangent: HH.outTangent && HH.outTangent.clone ? HH.outTangent.clone() : HH.outTangent,
            interpolation: HH.interpolation,
            lockedTangent: HH.lockedTangent,
            easingFunction: HH.easingFunction
          };
        }
      }
      createKeyForFrame(HH) {
        NH.key = 0;
        const IH = this._interpolate(HH, NH, !0);
        if (!IH) return this._keys[NH.key].frame === HH ? NH.key : NH.key + 1;
        const EH = {
          frame: HH,
          value: IH.clone ? IH.clone() : IH
        };
        return this._keys.splice(NH.key + 1, 0, EH), NH.key + 1;
      }
      serialize() {
        const HH = {};
        HH.name = this.name, HH.property = this.targetProperty, HH.framePerSecond = this.framePerSecond, HH.dataType = this.dataType, HH.loopBehavior = this.KG, HH.enableBlending = this.enableBlending, HH.blendingSpeed = this.blendingSpeed;
        const IH = this.dataType;
        HH.keys = [];
        const EH = this.getKeys();
        for (let RH = 0; RH < EH.length; RH++) {
          const hH = EH[RH],
            TH = {};
          switch (TH.frame = hH.frame, IH) {
            case iI.ANIMATIONTYPE_FLOAT:
              TH.values = [hH.value], void 0 !== hH.inTangent && TH.values.push(hH.inTangent), void 0 !== hH.outTangent && (void 0 === hH.inTangent && TH.values.push(void 0), TH.values.push(hH.outTangent)), void 0 !== hH.interpolation && (void 0 === hH.inTangent && TH.values.push(void 0), void 0 === hH.outTangent && TH.values.push(void 0), TH.values.push(hH.interpolation));
              break;
            case iI.ANIMATIONTYPE_QUATERNION:
            case iI.ANIMATIONTYPE_MATRIX:
            case iI.ANIMATIONTYPE_VECTOR3:
            case iI.ANIMATIONTYPE_COLOR3:
            case iI.ANIMATIONTYPE_COLOR4:
              TH.values = hH.value.GM(), void 0 != hH.inTangent && TH.values.push(hH.inTangent.GM()), void 0 != hH.outTangent && (void 0 === hH.inTangent && TH.values.push(void 0), TH.values.push(hH.outTangent.GM())), void 0 !== hH.interpolation && (void 0 === hH.inTangent && TH.values.push(void 0), void 0 === hH.outTangent && TH.values.push(void 0), TH.values.push(hH.interpolation));
          }
          HH.keys.push(TH);
        }
        HH.ranges = [];
        for (const RH in this._ranges) {
          const IH = this._ranges[RH];
          if (!IH) continue;
          const EH = {};
          EH.name = RH, EH.from = IH.from, EH.to = IH.to, HH.ranges.push(EH);
        }
        return HH;
      }
      static _UniversalLerp(HH, IH, EH) {
        const RH = HH.constructor;
        return RH.Lerp ? RH.Lerp(HH, IH, EH) : RH.Slerp ? RH.Slerp(HH, IH, EH) : HH.toFixed ? HH * (1 - EH) + EH * IH : IH;
      }
    }
    function DH(HH, IH, EH) {
      let hH;
      hH = "object" === typeof IH ? IH : {
        referenceFrame: null !== IH && void 0 !== IH ? IH : 0,
        range: EH,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let TH = HH;
      hH.cloneOriginalAnimation && (TH = HH.clone(), TH.name = hH.clonedAnimationName || TH.name);
      const sH = TH.getKeys();
      if (!sH.length) return TH;
      const eH = hH.referenceFrame && hH.referenceFrame >= 0 ? hH.referenceFrame : 0;
      let GH = 0;
      const AH = sH[0];
      let VH = sH.length - 1;
      const YH = sH[VH],
        QH = {
          referenceValue: AH.value,
          referencePosition: RH.p.Rh[0],
          referenceQuaternion: RH.p.Quaternion[0],
          referenceScaling: RH.p.Rh[1],
          keyPosition: RH.p.Rh[2],
          keyQuaternion: RH.p.Quaternion[1],
          keyScaling: RH.p.Rh[3]
        };
      let JH = AH.frame,
        OH = YH.frame;
      if (hH.range) {
        const HH = TH.getRange(hH.range);
        HH && (JH = HH.from, OH = HH.to);
      } else {
        var rH, FH;
        JH = null !== (rH = hH.fromFrame) && void 0 !== rH ? rH : JH, OH = null !== (FH = hH.toFrame) && void 0 !== FH ? FH : OH;
      }
      JH !== AH.frame && (GH = TH.createKeyForFrame(JH)), OH !== YH.frame && (VH = TH.createKeyForFrame(OH));
      const MH = TH.getKeys();
      if (1 === MH.length) {
        const HH = TH._getKeyValue(MH[0]);
        QH.referenceValue = HH.clone ? HH.clone() : HH;
      } else if (eH <= AH.frame) {
        const HH = TH._getKeyValue(AH.value);
        QH.referenceValue = HH.clone ? HH.clone() : HH;
      } else if (eH >= YH.frame) {
        const HH = TH._getKeyValue(YH.value);
        QH.referenceValue = HH.clone ? HH.clone() : HH;
      } else {
        NH.key = 0;
        const HH = TH._interpolate(eH, NH);
        QH.referenceValue = HH.clone ? HH.clone() : HH;
      }
      TH.dataType === iI.ANIMATIONTYPE_QUATERNION ? QH.referenceValue.normalize().conjugateInPlace() : TH.dataType === iI.ANIMATIONTYPE_MATRIX && (QH.referenceValue.decompose(QH.referenceScaling, QH.referenceQuaternion, QH.referencePosition), QH.referenceQuaternion.normalize().conjugateInPlace());
      let DH = Number.MAX_VALUE;
      const PH = hH.clipKeys ? [] : null;
      for (let NH = GH; NH <= VH; NH++) {
        let HH = MH[NH];
        if ((PH || hH.cloneOriginalAnimation) && (HH = {
          frame: HH.frame,
          value: HH.value.clone ? HH.value.clone() : HH.value,
          inTangent: HH.inTangent,
          outTangent: HH.outTangent,
          interpolation: HH.interpolation,
          lockedTangent: HH.lockedTangent,
          easingFunction: HH.easingFunction
        }, PH && (DH === Number.MAX_VALUE && (DH = HH.frame), HH.frame -= DH, PH.push(HH))), !NH || TH.dataType === iI.ANIMATIONTYPE_FLOAT || HH.value !== AH.value) switch (TH.dataType) {
          case iI.ANIMATIONTYPE_MATRIX:
            HH.value.decompose(QH.keyScaling, QH.keyQuaternion, QH.keyPosition), QH.keyPosition.wr(QH.referencePosition), QH.keyScaling.divideInPlace(QH.referenceScaling), QH.referenceQuaternion.multiplyToRef(QH.keyQuaternion, QH.keyQuaternion), RH.d.ComposeToRef(QH.keyScaling, QH.keyQuaternion, QH.keyPosition, HH.value);
            break;
          case iI.ANIMATIONTYPE_QUATERNION:
            QH.referenceValue.multiplyToRef(HH.value, HH.value);
            break;
          case iI.ANIMATIONTYPE_VECTOR2:
          case iI.ANIMATIONTYPE_VECTOR3:
          case iI.ANIMATIONTYPE_COLOR3:
          case iI.ANIMATIONTYPE_COLOR4:
            HH.value.subtractToRef(QH.referenceValue, HH.value);
            break;
          case iI.ANIMATIONTYPE_SIZE:
            HH.value.width -= QH.referenceValue.width, HH.value.height -= QH.referenceValue.height;
            break;
          default:
            HH.value -= QH.referenceValue;
        }
      }
      return PH && TH.setKeys(PH, !0), TH;
    }
    function PH(HH, IH, EH, RH) {
      const hH = new iI(HH + "Animation", HH, EH, IH, iI.ANIMATIONLOOPMODE_CONSTANT);
      return hH.setEasingFunction(RH), hH;
    }
    function XH(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH, VH) {
      const YH = iI._PrepareAnimation(HH, EH, RH, hH, TH, sH, eH, GH);
      return YH ? (IH.kh && (VH = IH.kh()), VH ? VH.beginDirectAnimation(IH, [YH], 0, hH, YH.KG !== iI.ANIMATIONLOOPMODE_CONSTANT, 1, AH) : null) : null;
    }
    function mI(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH, VH) {
      const YH = iI._PrepareAnimation(HH, RH, hH, TH, sH, eH, GH, AH);
      if (!YH) return null;
      return IH.kh().beginDirectHierarchyAnimation(IH, EH, [YH], 0, TH, 1 === YH.KG, 1, VH);
    }
    function ZH(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH) {
      const VH = iI._PrepareAnimation(HH, EH, RH, hH, TH, sH, eH, GH);
      return VH ? (IH.animations.push(VH), IH.kh().beginAnimation(IH, 0, hH, 1 === VH.KG, 1, AH)) : null;
    }
    function qH(HH, IH, EH, RH, hH, TH, sH) {
      let eH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        GH = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        AH = arguments.length > 9 ? arguments[9] : void 0;
      if (sH <= 0) return EH[HH] = IH, eH && eH(), null;
      const VH = hH * (sH / 1e3);
      TH.setKeys(null !== AH && void 0 !== AH ? AH : [{
        frame: 0,
        value: EH[HH].clone ? EH[HH].clone() : EH[HH]
      }, {
        frame: VH,
        value: IH
      }]), EH.animations || (EH.animations = []), EH.animations.push(TH);
      return RH.beginAnimation(EH, 0, VH, !1, 1, null !== eH && void 0 !== eH ? eH : void 0, void 0, GH);
    }
    function LH(HH, IH) {
      VH.c.AppendSerializedAnimations(HH, IH);
    }
    function gH(HH) {
      const IH = new iI(HH.name, HH.property, HH.framePerSecond, HH.dataType, HH.loopBehavior),
        EH = HH.dataType,
        TH = [];
      let sH, eH;
      for (HH.enableBlending && (IH.enableBlending = HH.enableBlending), HH.blendingSpeed && (IH.blendingSpeed = HH.blendingSpeed), eH = 0; eH < HH.keys.length; eH++) {
        const IH = HH.keys[eH];
        let GH, AH, VH;
        switch (EH) {
          case iI.ANIMATIONTYPE_FLOAT:
            sH = IH.values[0], IH.values.length >= 2 && (GH = IH.values[1]), IH.values.length >= 3 && (AH = IH.values[2]), IH.values.length >= 4 && (VH = IH.values[3]);
            break;
          case iI.ANIMATIONTYPE_QUATERNION:
            if (sH = RH.h.Qh(IH.values), IH.values.length >= 8) {
              const HH = RH.h.Qh(IH.values.slice(4, 8));
              HH.equals(RH.h.Zero()) || (GH = HH);
            }
            if (IH.values.length >= 12) {
              const HH = RH.h.Qh(IH.values.slice(8, 12));
              HH.equals(RH.h.Zero()) || (AH = HH);
            }
            IH.values.length >= 13 && (VH = IH.values[12]);
            break;
          case iI.ANIMATIONTYPE_MATRIX:
            sH = RH.d.Qh(IH.values), IH.values.length >= 17 && (VH = IH.values[16]);
            break;
          case iI.ANIMATIONTYPE_COLOR3:
            sH = hH.b.Qh(IH.values), IH.values[3] && (GH = hH.b.Qh(IH.values[3])), IH.values[4] && (AH = hH.b.Qh(IH.values[4])), IH.values[5] && (VH = IH.values[5]);
            break;
          case iI.ANIMATIONTYPE_COLOR4:
            sH = hH.d.Qh(IH.values), IH.values[4] && (GH = hH.d.Qh(IH.values[4])), IH.values[5] && (AH = hH.d.Qh(IH.values[5])), IH.values[6] && (VH = hH.d.Qh(IH.values[6]));
            break;
          case iI.ANIMATIONTYPE_VECTOR3:
          default:
            sH = RH.x.Qh(IH.values), IH.values[3] && (GH = RH.x.Qh(IH.values[3])), IH.values[4] && (AH = RH.x.Qh(IH.values[4])), IH.values[5] && (VH = IH.values[5]);
        }
        const YH = {};
        YH.frame = IH.frame, YH.value = sH, void 0 != GH && (YH.inTangent = GH), void 0 != AH && (YH.outTangent = AH), void 0 != VH && (YH.interpolation = VH), TH.push(YH);
      }
      if (IH.setKeys(TH), HH.ranges) for (eH = 0; eH < HH.ranges.length; eH++) sH = HH.ranges[eH], IH.createRange(sH.name, sH.from, sH.to);
      return IH;
    }
    async function yH(HH, IH) {
      return await new Promise((EH, RH) => {
        const hH = new AH.c();
        hH.addEventListener("readystatechange", () => {
          if (4 == hH.readyState) if (200 == hH.status) {
            let IH = JSON.parse(hH.responseText);
            if (IH.animations && (IH = IH.animations), IH.length) {
              const HH = [];
              for (const EH of IH) HH.push(gH(EH));
              EH(HH);
            } else {
              const RH = gH(IH);
              HH && (RH.name = HH), EH(RH);
            }
          } else RH("Unable to load the animation");
        }), hH.open("GET", IH), hH.send();
      });
    }
    async function oH(HH) {
      var IH;
      const EH = null !== (IH = null === this || void 0 === this ? void 0 : this.SnippetUrl) && void 0 !== IH ? IH : iI.SnippetUrl;
      return await new Promise((IH, RH) => {
        const hH = new AH.c();
        hH.addEventListener("readystatechange", () => {
          if (4 == hH.readyState) if (200 == hH.status) {
            const EH = JSON.parse(JSON.parse(hH.responseText).jsonPayload);
            if (EH.animations) {
              const RH = JSON.parse(EH.animations),
                hH = [];
              for (const IH of RH.animations) {
                const EH = gH(IH);
                EH.snippetId = HH, hH.push(EH);
              }
              IH(hH);
            } else {
              const RH = gH(JSON.parse(EH.animation));
              RH.snippetId = HH, IH(RH);
            }
          } else RH("Unable to load the snippet " + HH);
        }), hH.open("GET", EH + "/" + HH.replace(/#/g, "/")), hH.send();
      });
    }
    iI._UniqueIdGenerator = 0, iI.AllowMatricesInterpolation = !1, iI.AllowMatrixDecomposeForInterpolation = !0, iI.InheritOriginalValueFromActiveAnimations = !1, iI.SnippetUrl = "https://snippet.babylonjs.com", iI.ANIMATIONTYPE_FLOAT = 0, iI.ANIMATIONTYPE_VECTOR3 = 1, iI.ANIMATIONTYPE_QUATERNION = 2, iI.ANIMATIONTYPE_MATRIX = 3, iI.ANIMATIONTYPE_COLOR3 = 4, iI.ANIMATIONTYPE_COLOR4 = 7, iI.ANIMATIONTYPE_VECTOR2 = 5, iI.ANIMATIONTYPE_SIZE = 6, iI.ANIMATIONLOOPMODE_RELATIVE = 0, iI.ANIMATIONLOOPMODE_CYCLE = 1, iI.ANIMATIONLOOPMODE_CONSTANT = 2, iI.ANIMATIONLOOPMODE_YOYO = 4, iI.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const kI = oH;
    let CH = !1;
    function cH() {
      CH || (CH = !0, iI.Parse = gH, iI.ParseFromFileAsync = yH, iI.ParseFromSnippetAsync = oH, iI.CreateFromSnippetAsync = kI, iI.CreateAnimation = PH, iI.CreateAndStartAnimation = XH, iI.CreateAndStartHierarchyAnimation = mI, iI.CreateMergeAndStartAnimation = ZH, iI.MakeAnimationAdditive = DH, iI.TransitionTo = qH, iI.AppendSerializedAnimations = LH, (0, YH.d)("BABYLON.Animation", iI), eH.d._AnimationRangeFactory = (HH, IH, EH) => new sH.c(HH, IH, EH));
    }
  },
  22115: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => RH
    });
    class RH {
      constructor(HH, IH, EH) {
        this.name = HH, this.from = IH, this.to = EH;
      }
      clone() {
        return new RH(this.name, this.from, this.to);
      }
    }
  },
  22661: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => RH.t
    });
    var RH = EH(22128);
    (0, RH.f)();
  },
  21939: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => FH,
      f: () => iI
    });
    var RH = EH(21947),
      hH = EH(21956),
      TH = EH(21968),
      sH = EH(21786),
      eH = EH(21764),
      GH = EH(21970),
      AH = EH(21832),
      VH = EH(21808),
      YH = EH(21856),
      QH = EH(21978),
      JH = EH(21984),
      OH = EH(21997),
      rH = EH(21972);
    let FH = (() => {
      var HH;
      let IH,
        EH,
        VH,
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
        CH = GH.d,
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
      return HH = class extends CH {
        get position() {
          return this._position;
        }
        set position(HH) {
          this._position = HH;
        }
        set upVector(HH) {
          this._upVector = HH;
        }
        get upVector() {
          return this._upVector;
        }
        get screenArea() {
          let IH, EH;
          if (this.mode === HH.PERSPECTIVE_CAMERA) this.fovMode === HH.FOVMODE_VERTICAL_FIXED ? (EH = 2 * this.zF * Math.tan(this.fov / 2), IH = this.getEngine().getAspectRatio(this) * EH) : (IH = 2 * this.zF * Math.tan(this.fov / 2), EH = IH / this.getEngine().getAspectRatio(this));else {
            var RH, hH, TH, sH;
            const HH = this.getEngine().getRenderWidth() / 2,
              eH = this.getEngine().getRenderHeight() / 2;
            IH = (null !== (RH = this.orthoRight) && void 0 !== RH ? RH : HH) - (null !== (hH = this.orthoLeft) && void 0 !== hH ? hH : -HH), EH = (null !== (TH = this.orthoTop) && void 0 !== TH ? TH : eH) - (null !== (sH = this.orthoBottom) && void 0 !== sH ? sH : -eH);
          }
          return IH * EH;
        }
        set orthoLeft(HH) {
          this._orthoLeft = HH;
          for (const IH of this._rigCameras) IH.orthoLeft = HH;
        }
        get orthoLeft() {
          return this._orthoLeft;
        }
        set orthoRight(HH) {
          this._orthoRight = HH;
          for (const IH of this._rigCameras) IH.orthoRight = HH;
        }
        get orthoRight() {
          return this._orthoRight;
        }
        set orthoBottom(HH) {
          this._orthoBottom = HH;
          for (const IH of this._rigCameras) IH.orthoBottom = HH;
        }
        get orthoBottom() {
          return this._orthoBottom;
        }
        set orthoTop(HH) {
          this._orthoTop = HH;
          for (const IH of this._rigCameras) IH.orthoTop = HH;
        }
        get orthoTop() {
          return this._orthoTop;
        }
        setFocalLength(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(IH / (2 * HH));
        }
        get inertia() {
          return this._baseInertia;
        }
        set inertia(HH) {
          this._baseInertia = HH;
        }
        set mode(HH) {
          this._mode = HH;
          for (const IH of this._rigCameras) IH.mode = HH;
        }
        get mode() {
          return this._mode;
        }
        get hasMoved() {
          return this._hasMoved;
        }
        constructor(IH, EH, hH) {
          let GH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, OH.b)(), super(IH, hH, !1), this.inputs = (0, RH.j)(this, cH), this._position = (0, RH.j)(this, UH, eH.x.Zero()), this._upVector = ((0, RH.j)(this, WH), (0, RH.j)(this, BH, eH.x.Up())), this.oblique = ((0, RH.j)(this, fH), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, RH.j)(this, aH, .8), this.projectionPlaneTilt = ((0, RH.j)(this, nH), (0, RH.j)(this, pH, 0)), this.zF = ((0, RH.j)(this, dH), (0, RH.j)(this, uH, 1)), this.IM = ((0, RH.j)(this, lH), (0, RH.j)(this, KH, 1e4)), this._baseInertia = ((0, RH.j)(this, wH), .9), this._mode = HH.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new QH.d(0, 0, 1, 1), this.layerMask = (0, RH.j)(this, zH, 268435455), this.fovMode = ((0, RH.j)(this, tH), (0, RH.j)(this, jI, HH.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, RH.j)(this, vH), (0, RH.j)(this, bH, HH.RIG_MODE_NONE)), this.interaxialDistance = ((0, RH.j)(this, SH), (0, RH.j)(this, xH, void 0)), this.isStereoscopicSideBySide = ((0, RH.j)(this, HI), (0, RH.j)(this, II, void 0)), this.ignoreCameraMaxZ = ((0, RH.j)(this, EI), (0, RH.j)(this, RI, !1)), this.customRenderTargets = ((0, RH.j)(this, hI), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new sH.e(), this.onProjectionMatrixChangedObservable = new sH.e(), this.onAfterCheckInputsObservable = new sH.e(), this.onRestoreStateObservable = new sH.e(), this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array(), this._skipRendering = !1, this._projectionMatrix = new eH.d(), this._postProcesses = new Array(), this._activeMeshes = new TH.e(256), this._globalPosition = eH.x.Zero(), this._computedViewMatrix = eH.d.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = eH.d.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = eH.h.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.kh().defaultCameraLayerMask, this.kh().addCamera(this), GH && !this.kh().activeCamera && (this.kh().activeCamera = this), this.position = EH, this.renderPassId = this.kh().getEngine().createRenderPassId("Camera ".concat(IH));
        }
        storeState() {
          return this._stateStored = !0, this._storedFov = this.fov, this;
        }
        hasStateStored() {
          return !!this._stateStored;
        }
        _restoreStateValues() {
          return !!this._stateStored && (this.fov = this._storedFov, !0);
        }
        restoreState() {
          return !!this._restoreStateValues() && (this.onRestoreStateObservable.notifyObservers(this), !0);
        }
        getClassName() {
          return "Hr";
        }
        toString(HH) {
          let IH = "Name: " + this.name;
          if (IH += ", type: " + this.getClassName(), this.animations) for (let EH = 0; EH < this.animations.length; EH++) IH += ", animation[0]: " + this.animations[EH].toString(HH);
          return IH;
        }
        applyVerticalCorrection() {
          const HH = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -HH.x : HH.x;
        }
        get globalPosition() {
          return this._globalPosition;
        }
        getActiveMeshes() {
          return this._activeMeshes;
        }
        isActiveMesh(HH) {
          return -1 !== this._activeMeshes.indexOf(HH);
        }
        isReady() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (HH) for (const IH of this._postProcesses) if (IH && !IH.isReady()) return !1;
          return super.isReady(HH);
        }
        _initCache() {
          super._initCache(), this._cache.position = new eH.x(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new eH.x(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.zF = void 0, this._cache.IM = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0;
        }
        _updateCache(HH) {
          HH || super._updateCache(), this._cache.position.RH(this.position), this._cache.upVector.RH(this.upVector);
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix();
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent();
        }
        _isSynchronizedProjectionMatrix() {
          const IH = this.ignoreCameraMaxZ ? 0 : this.IM;
          let EH = this._cache.mode === this.mode && this._cache.zF === this.zF && this._cache.IM === IH;
          if (!EH) return !1;
          const RH = this.getEngine();
          return this.mode === HH.PERSPECTIVE_CAMERA ? EH = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === RH.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (EH = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === RH.getRenderWidth() && this._cache.renderHeight === RH.getRenderHeight(), this.oblique && (EH = EH && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), EH;
        }
        attachControl(HH, IH) {}
        aF(HH) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== HH.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix();
        }
        _checkInputs() {
          this.onAfterCheckInputsObservable.notifyObservers(this);
        }
        get rigCameras() {
          return this._rigCameras;
        }
        get rigPostProcess() {
          return this._rigPostProcess;
        }
        _getFirstPostProcess() {
          for (let HH = 0; HH < this._postProcesses.length; HH++) if (null !== this._postProcesses[HH]) return this._postProcesses[HH];
          return null;
        }
        _cascadePostProcessesToRigCams() {
          const HH = this._getFirstPostProcess();
          HH && HH.markTextureDirty();
          for (let IH = 0, EH = this._rigCameras.length; IH < EH; IH++) {
            const HH = this._rigCameras[IH],
              EH = HH._rigPostProcess;
            if (EH) {
              "pass" === EH.getEffectName() && (HH.isIntermediate = 0 === this._postProcesses.length), HH._postProcesses = this._postProcesses.slice(0).concat(EH), EH.markTextureDirty();
            } else HH._postProcesses = this._postProcesses.slice(0);
          }
        }
        attachPostProcess(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !HH.isReusable() && this._postProcesses.indexOf(HH) > -1 ? (AH.e.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == IH || IH < 0 ? this._postProcesses.push(HH) : null === this._postProcesses[IH] ? this._postProcesses[IH] = HH : this._postProcesses.splice(IH, 0, HH), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.JO(), this._postProcesses.indexOf(HH));
        }
        detachPostProcess(HH) {
          const IH = this._postProcesses.indexOf(HH);
          -1 !== IH && (this._postProcesses[IH] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.JO(), this._cascadePostProcessesToRigCams();
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix;
        }
        _getViewMatrix() {
          return eH.d.Identity();
        }
        getViewMatrix(HH) {
          return !HH && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.kh().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix;
        }
        freezeProjectionMatrix(HH) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== HH && (this._projectionMatrix = HH);
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1;
        }
        getProjectionMatrix(IH) {
          if (this._doNotComputeProjectionMatrix || !IH && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const EH = this.ignoreCameraMaxZ ? 0 : this.IM;
          this._cache.mode = this.mode, this._cache.zF = this.zF, this._cache.IM = EH, this._refreshFrustumPlanes = !0;
          const RH = this.getEngine(),
            hH = this.kh(),
            TH = RH.xO;
          if (this.mode === HH.PERSPECTIVE_CAMERA) {
            let IH;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = RH.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.zF <= 0 && (this.zF = .1), IH = hH.useRightHandedSystem ? eH.d.PerspectiveFovRHToRef : eH.d.PerspectiveFovLHToRef, IH(this.fov, RH.getAspectRatio(this), TH ? EH : this.zF, TH ? this.zF : EH, this._projectionMatrix, this.fovMode === HH.FOVMODE_VERTICAL_FIXED, RH.isNDCHalfZRange, this.projectionPlaneTilt, TH);
          } else {
            var sH, GH, AH;
            const HH = RH.getRenderWidth() / 2,
              IH = RH.getRenderHeight() / 2;
            var VH, YH, QH, JH, OH, rH, FH, MH, NH, iI, DH, PH, XH, mI, ZH, qH;
            if (hH.useRightHandedSystem) {
              if (this.oblique) eH.d.ObliqueOffCenterRHToRef(null !== (VH = this.orthoLeft) && void 0 !== VH ? VH : -HH, null !== (YH = this.orthoRight) && void 0 !== YH ? YH : HH, null !== (QH = this.orthoBottom) && void 0 !== QH ? QH : -IH, null !== (JH = this.orthoTop) && void 0 !== JH ? JH : IH, TH ? EH : this.zF, TH ? this.zF : EH, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, RH.isNDCHalfZRange);else eH.d.OrthoOffCenterRHToRef(null !== (OH = this.orthoLeft) && void 0 !== OH ? OH : -HH, null !== (rH = this.orthoRight) && void 0 !== rH ? rH : HH, null !== (FH = this.orthoBottom) && void 0 !== FH ? FH : -IH, null !== (MH = this.orthoTop) && void 0 !== MH ? MH : IH, TH ? EH : this.zF, TH ? this.zF : EH, this._projectionMatrix, RH.isNDCHalfZRange);
            } else if (this.oblique) eH.d.ObliqueOffCenterLHToRef(null !== (NH = this.orthoLeft) && void 0 !== NH ? NH : -HH, null !== (iI = this.orthoRight) && void 0 !== iI ? iI : HH, null !== (DH = this.orthoBottom) && void 0 !== DH ? DH : -IH, null !== (PH = this.orthoTop) && void 0 !== PH ? PH : IH, TH ? EH : this.zF, TH ? this.zF : EH, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, RH.isNDCHalfZRange);else eH.d.OrthoOffCenterLHToRef(null !== (XH = this.orthoLeft) && void 0 !== XH ? XH : -HH, null !== (mI = this.orthoRight) && void 0 !== mI ? mI : HH, null !== (ZH = this.orthoBottom) && void 0 !== ZH ? ZH : -IH, null !== (qH = this.orthoTop) && void 0 !== qH ? qH : IH, TH ? EH : this.zF, TH ? this.zF : EH, this._projectionMatrix, RH.isNDCHalfZRange);
            this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = null === (sH = this.oblique) || void 0 === sH ? void 0 : sH.angle, this._cache.obliqueLength = null === (GH = this.oblique) || void 0 === GH ? void 0 : GH.length, this._cache.obliqueOffset = null === (AH = this.oblique) || void 0 === AH ? void 0 : AH.offset, this._cache.renderWidth = RH.getRenderWidth(), this._cache.renderHeight = RH.getRenderHeight();
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix;
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix;
        }
        _computeObliqueDistance(HH) {
          return (this.QI || (this.target ? eH.x.Distance(this.position, this.target) : this.position.length())) + HH;
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? JH.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = JH.d.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1);
        }
        isInFrustum(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), IH && this.rigCameras.length > 0) {
            let IH = !1;
            for (const EH of this.rigCameras) EH._updateFrustumPlanes(), IH = IH || HH.isInFrustum(EH._frustumPlanes);
            return IH;
          }
          return HH.isInFrustum(this._frustumPlanes);
        }
        isCompletelyInFrustum(HH) {
          return this._updateFrustumPlanes(), HH.isCompletelyInFrustum(this._frustumPlanes);
        }
        getForwardRay() {
          throw (0, YH.n)("Ray");
        }
        getForwardRayToRef(HH) {
          throw (0, YH.n)("Ray");
        }
        dispose(IH) {
          let EH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.kh().stopAnimation(this), this.kh().removeCamera(this); this._rigCameras.length > 0;) {
            const HH = this._rigCameras.pop();
            HH && HH.dispose();
          }
          if (this._parentContainer) {
            const HH = this._parentContainer.cameras.indexOf(this);
            HH > -1 && this._parentContainer.cameras.splice(HH, 1), this._parentContainer = null;
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;else if (this.cameraRigMode !== HH.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;else {
            let HH = this._postProcesses.length;
            for (; --HH >= 0;) {
              const IH = this._postProcesses[HH];
              IH && IH.dispose(this);
            }
          }
          let RH = this.customRenderTargets.length;
          for (; --RH >= 0;) this.customRenderTargets[RH].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.kh().getEngine().releaseRenderPassId(this.renderPassId), super.dispose(IH, EH);
        }
        get isLeftCamera() {
          return this._isLeftCamera;
        }
        get isRightCamera() {
          return this._isRightCamera;
        }
        get leftCamera() {
          return this._rigCameras.length < 1 ? null : this._rigCameras[0];
        }
        get rightCamera() {
          return this._rigCameras.length < 2 ? null : this._rigCameras[1];
        }
        getLeftTarget() {
          return this._rigCameras.length < 1 ? null : this._rigCameras[0].getTarget();
        }
        getRightTarget() {
          return this._rigCameras.length < 2 ? null : this._rigCameras[1].getTarget();
        }
        setCameraRigMode(IH, EH) {
          if (this.cameraRigMode !== IH) {
            for (; this._rigCameras.length > 0;) {
              const HH = this._rigCameras.pop();
              HH && HH.dispose();
            }
            if (this.cameraRigMode = IH, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = EH.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== HH.RIG_MODE_NONE) {
              const HH = this.createRigCamera(this.name + "_L", 0);
              HH && (HH._isLeftCamera = !0);
              const IH = this.createRigCamera(this.name + "_R", 1);
              IH && (IH._isRightCamera = !0), HH && IH && (this._rigCameras.push(HH), this._rigCameras.push(IH));
            }
            this._setRigMode(EH), this._cascadePostProcessesToRigCams(), this.update();
          }
        }
        _setRigMode(HH) {}
        _getVRProjectionMatrix() {
          return eH.d.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.zF, this.ignoreCameraMaxZ ? 0 : this.IM, this._cameraRigParams.vrWorkMatrix, !0, this.getEngine().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix;
        }
        setCameraRigParameter(HH, IH) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[HH] = IH, "interaxialDistance" === HH && (this._cameraRigParams.stereoHalfAngle = IH / .0637 * (Math.PI / 180));
        }
        createRigCamera(HH, IH) {
          return null;
        }
        _updateRigCameras() {
          for (let HH = 0; HH < this._rigCameras.length; HH++) this._rigCameras[HH].zF = this.zF, this._rigCameras[HH].IM = this.ignoreCameraMaxZ ? 0 : this.IM, this._rigCameras[HH].fov = this.fov, this._rigCameras[HH].upVector.RH(this.upVector);
          this.cameraRigMode === HH.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport);
        }
        _setupInputs() {}
        serialize() {
          const HH = rH.c.Serialize(this);
          return HH.uniqueId = this.uniqueId, HH.type = this.getClassName(), this.parent && this.parent._serializeAsParent(HH), this.inputs && this.inputs.serialize(HH), rH.c.AppendSerializedAnimations(this, HH), HH.ranges = this.serializeAnimationRanges(), HH.isEnabled = this.isEnabled(), HH;
        }
        clone(IH) {
          let EH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const RH = rH.c.Clone(HH.GetConstructorFromName(this.getClassName(), IH, this.kh(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return RH.name = IH, RH.parent = EH, this.onClonedObservable.notifyObservers(RH), RH;
        }
        CQ(HH) {
          const IH = eH.x.Zero();
          return this.getDirectionToRef(HH, IH), IH;
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation;
        }
        getDirectionToRef(HH, IH) {
          eH.x.TransformNormalToRef(HH, this.getWorldMatrix(), IH);
        }
        static GetConstructorFromName(IH, EH, RH) {
          let hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            TH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const sH = GH.d.Construct(IH, EH, RH, {
            interaxial_distance: hH,
            isStereoscopicSideBySide: TH
          });
          return sH || (() => HH._CreateDefaultParsedCamera(EH, RH));
        }
        aJ() {
          return this.getWorldMatrix();
        }
        _calculateHandednessMultiplier() {
          let HH = this.kh().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (HH *= -1), HH;
        }
      }, (TH => {
        const sH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (TH = CH[Symbol.metadata]) && void 0 !== TH ? TH : null) : void 0;
        IH = [(0, hH.I)("position")], EH = [(0, hH.I)("upVector")], VH = [(0, hH.K)()], FH = [(0, hH.K)()], MH = [(0, hH.K)()], NH = [(0, hH.K)()], iI = [(0, hH.K)()], DH = [(0, hH.K)()], PH = [(0, hH.K)()], XH = [(0, hH.K)()], mI = [(0, hH.K)()], ZH = [(0, hH.K)()], qH = [(0, hH.K)()], LH = [(0, hH.K)()], gH = [(0, hH.K)()], yH = [(0, hH.K)()], oH = [(0, hH.K)()], kI = [(0, hH.K)()], (0, RH.i)(HH, null, VH, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: HH => "orthoLeft" in HH,
            get: HH => HH.orthoLeft
          },
          metadata: sH
        }, null, cH), (0, RH.i)(HH, null, FH, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: HH => "orthoRight" in HH,
            get: HH => HH.orthoRight
          },
          metadata: sH
        }, null, cH), (0, RH.i)(HH, null, MH, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: HH => "orthoBottom" in HH,
            get: HH => HH.orthoBottom
          },
          metadata: sH
        }, null, cH), (0, RH.i)(HH, null, NH, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: HH => "orthoTop" in HH,
            get: HH => HH.orthoTop
          },
          metadata: sH
        }, null, cH), (0, RH.i)(HH, null, mI, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: HH => "inertia" in HH,
            get: HH => HH.inertia
          },
          metadata: sH
        }, null, cH), (0, RH.i)(HH, null, ZH, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: HH => "mode" in HH,
            get: HH => HH.mode
          },
          metadata: sH
        }, null, cH), (0, RH.i)(null, null, IH, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: HH => "_position" in HH,
            get: HH => HH._position,
            set: (HH, IH) => {
              HH._position = IH;
            }
          },
          metadata: sH
        }, UH, WH), (0, RH.i)(null, null, EH, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: HH => "_upVector" in HH,
            get: HH => HH._upVector,
            set: (HH, IH) => {
              HH._upVector = IH;
            }
          },
          metadata: sH
        }, BH, fH), (0, RH.i)(null, null, iI, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: HH => "fov" in HH,
            get: HH => HH.fov,
            set: (HH, IH) => {
              HH.fov = IH;
            }
          },
          metadata: sH
        }, aH, nH), (0, RH.i)(null, null, DH, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: HH => "projectionPlaneTilt" in HH,
            get: HH => HH.projectionPlaneTilt,
            set: (HH, IH) => {
              HH.projectionPlaneTilt = IH;
            }
          },
          metadata: sH
        }, pH, dH), (0, RH.i)(null, null, PH, {
          kind: "field",
          name: "zF",
          static: !1,
          private: !1,
          access: {
            has: HH => "zF" in HH,
            get: HH => HH.zF,
            set: (HH, IH) => {
              HH.zF = IH;
            }
          },
          metadata: sH
        }, uH, lH), (0, RH.i)(null, null, XH, {
          kind: "field",
          name: "IM",
          static: !1,
          private: !1,
          access: {
            has: HH => "IM" in HH,
            get: HH => HH.IM,
            set: (HH, IH) => {
              HH.IM = IH;
            }
          },
          metadata: sH
        }, KH, wH), (0, RH.i)(null, null, qH, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: HH => "layerMask" in HH,
            get: HH => HH.layerMask,
            set: (HH, IH) => {
              HH.layerMask = IH;
            }
          },
          metadata: sH
        }, zH, tH), (0, RH.i)(null, null, LH, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "fovMode" in HH,
            get: HH => HH.fovMode,
            set: (HH, IH) => {
              HH.fovMode = IH;
            }
          },
          metadata: sH
        }, jI, vH), (0, RH.i)(null, null, gH, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "cameraRigMode" in HH,
            get: HH => HH.cameraRigMode,
            set: (HH, IH) => {
              HH.cameraRigMode = IH;
            }
          },
          metadata: sH
        }, bH, SH), (0, RH.i)(null, null, yH, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: HH => "interaxialDistance" in HH,
            get: HH => HH.interaxialDistance,
            set: (HH, IH) => {
              HH.interaxialDistance = IH;
            }
          },
          metadata: sH
        }, xH, HI), (0, RH.i)(null, null, oH, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: HH => "isStereoscopicSideBySide" in HH,
            get: HH => HH.isStereoscopicSideBySide,
            set: (HH, IH) => {
              HH.isStereoscopicSideBySide = IH;
            }
          },
          metadata: sH
        }, II, EI), (0, RH.i)(null, null, kI, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: HH => "ignoreCameraMaxZ" in HH,
            get: HH => HH.ignoreCameraMaxZ,
            set: (HH, IH) => {
              HH.ignoreCameraMaxZ = IH;
            }
          },
          metadata: sH
        }, RI, hI), sH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: sH
        });
      })(), HH._CreateDefaultParsedCamera = (HH, IH) => {
        throw (0, YH.n)("UniversalCamera");
      }, HH.PERSPECTIVE_CAMERA = 0, HH.ORTHOGRAPHIC_CAMERA = 1, HH.FOVMODE_VERTICAL_FIXED = 0, HH.FOVMODE_HORIZONTAL_FIXED = 1, HH.RIG_MODE_NONE = 0, HH.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, HH.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, HH.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, HH.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, HH.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, HH.RIG_MODE_VR = 20, HH.RIG_MODE_CUSTOM = 22, HH.ForceAttachControlToAlwaysPreventDefault = !1, HH;
    })();
    function MH(HH, IH) {
      const EH = HH.type,
        RH = FH.GetConstructorFromName(EH, HH.name, IH, HH.interaxial_distance, HH.isStereoscopicSideBySide),
        hH = rH.c.Parse(RH, HH, IH);
      if (void 0 !== HH.parentId && (hH._waitingParentId = HH.parentId), void 0 !== HH.parentInstanceIndex && (hH._waitingParentInstanceIndex = HH.parentInstanceIndex), hH.inputs && (hH.inputs.parse(HH), hH._setupInputs()), HH.upVector && (hH.upVector = eH.x.Qh(HH.upVector)), hH.setPosition && (hH.position.nY(0, 0, 0), hH.setPosition(eH.x.Qh(HH.position))), HH.target && hH.setTarget && hH.setTarget(eH.x.Qh(HH.target)), HH.cameraRigMode) {
        const IH = HH.interaxial_distance ? {
          interaxialDistance: HH.interaxial_distance
        } : {};
        hH.setCameraRigMode(HH.cameraRigMode, IH);
      }
      if (HH.animations) {
        for (let IH = 0; IH < HH.animations.length; IH++) {
          const EH = HH.animations[IH],
            RH = (0, VH.c)("BABYLON.Animation");
          RH && hH.animations.push(RH.Parse(EH));
        }
        GH.d.ParseAnimationRanges(hH, HH, IH);
      }
      return HH.autoAnimate && IH.beginAnimation(hH, HH.autoAnimateFrom, HH.autoAnimateTo, HH.autoAnimateLoop, HH.autoAnimateSpeed || 1), void 0 !== HH.isEnabled && hH.hY(HH.isEnabled), hH;
    }
    let NH = !1;
    function iI() {
      NH || (NH = !0, FH.Parse = MH);
    }
  },
  22057: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => hH
    });
    var RH = EH(21764);
    class hH {
      constructor(HH, IH, EH) {
        this._cameraPosition = IH, this._behavior = EH, this.activeInput = !1, this.speed = 1, this.hD = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new RH.x(), this.rotationAccumulatedPixels = new RH.x(), this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = RH.x.Zero(), this.rotationDeltaCurrentFrame = RH.x.Zero(), this._zoomVelocity = 0, this._panVelocity = new RH.x(), this.referenceFrameRate = 60, this._rotationVelocity = new RH.x(), this._prevFrameTimeMs = 0, this._scene = HH;
      }
      computeCurrentFrameDeltas() {
        var HH;
        const IH = this._scene.getEngine().getDeltaTime(),
          EH = this._getEffectiveDeltaMs(IH);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.nO(0), this.rotationDeltaCurrentFrame.nO(0), this.zoomDeltaCurrentFrame = 0, void (IH > 0 && (this._prevFrameTimeMs = IH));
        this.panDeltaCurrentFrame.nO(0), this.rotationDeltaCurrentFrame.nO(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && null !== (HH = this._behavior) && void 0 !== HH && HH.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.nY(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * EH, this.panDeltaCurrentFrame), this._rotationVelocity.nY(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.nY(this._rotationVelocity.x * this.speed * this.rotationXSpeed * EH, this._rotationVelocity.y * this.speed * this.rotationYSpeed * EH, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.hD * this._zoomSpeedMultiplier) * EH, IH > 0 && (this._prevFrameTimeMs = IH), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.nO(0), this.rotationAccumulatedPixels.nO(0), this.activeInput = !1;
      }
      resetRotationVelocity() {
        this._rotationVelocity.nO(0), this.rotationAccumulatedPixels.nO(0);
      }
      resetPanVelocity() {
        this._panVelocity.nO(0), this.panAccumulatedPixels.nO(0);
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0;
      }
      get isInterpolating() {
        var HH;
        return !(null === (HH = this._behavior) || void 0 === HH || !HH.isInterpolating);
      }
      getFrameIndependentDecay(HH) {
        const IH = this._scene.getEngine().getDeltaTime(),
          EH = this._getEffectiveDeltaMs(IH),
          RH = 1e3 / this.referenceFrameRate;
        return Math.pow(HH, EH / RH);
      }
      getFrameIndependentInputScale(HH) {
        const IH = 1 - HH;
        if (IH <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(HH)) / IH;
      }
      _getEffectiveDeltaMs(HH) {
        return HH > 0 ? HH : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate;
      }
      _calculateCurrentVelocity(HH, IH, EH) {
        let RH = HH;
        const hH = this._scene.getEngine().getDeltaTime(),
          TH = this._getEffectiveDeltaMs(hH);
        if (0 === TH) return RH;
        const sH = this.getFrameIndependentDecay(EH);
        if (RH *= sH, 0 !== IH || this.activeInput) {
          const HH = 1 - EH;
          RH += IH / TH * (HH > 0 ? (1 - sH) / HH : 1);
        } else Math.abs(RH) < 1e-6 && (RH = 0);
        return RH;
      }
    }
  },
  22064: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => hH
    });
    var RH = EH(17);
    class hH {
      constructor(HH, IH) {
        this.inputMap = [], this.handlers = HH, this._createDefaultEntries = IH, this.resetInputMap();
      }
      resolveInteraction(HH, IH) {
        for (const EH of this.inputMap) if (EH.source === HH && this._entryMatches(EH, IH)) return EH;
        return null;
      }
      resetInputMap() {
        var HH, IH;
        this.inputMap = null !== (HH = null === (IH = this._createDefaultEntries) || void 0 === IH ? void 0 : IH.call(this)) && void 0 !== HH ? HH : [];
      }
      getEntry(HH, IH, EH) {
        const RH = this.inputMap;
        for (let hH = 0; hH < RH.length; hH++) {
          const TH = RH[hH];
          if (TH.source === HH && TH.interaction === IH && this._entryConditionsMatch(TH, EH)) return TH;
        }
      }
      getEntries(HH, IH, EH) {
        const RH = [],
          hH = this.inputMap;
        for (let TH = 0; TH < hH.length; TH++) {
          const sH = hH[TH];
          sH.source === HH && sH.interaction === IH && this._entryConditionsMatch(sH, EH) && RH.push(sH);
        }
        return RH;
      }
      addEntry(HH) {
        const IH = this._entrySpecificity(HH);
        let EH = this.inputMap.length;
        for (let RH = 0; RH < this.inputMap.length; RH++) if (this._entrySpecificity(this.inputMap[RH]) < IH) {
          EH = RH;
          break;
        }
        this.inputMap.splice(EH, 0, HH);
      }
      setInteraction(HH, IH, EH) {
        const hH = this.resolveInteraction(HH, IH);
        return hH && this._entryCoversAllConditionsOf(hH, IH) ? (hH.interaction = EH, !0) : (this.addEntry((0, RH.b)((0, RH.b)({
          source: HH
        }, null !== IH && void 0 !== IH ? IH : {}), {}, {
          interaction: EH
        })), !0);
      }
      _entryCoversAllConditionsOf(HH, IH) {
        if (!IH) return !0;
        const EH = HH;
        for (const hH of Object.keys(IH)) {
          const HH = IH[hH];
          if (void 0 !== HH) if ("modifiers" === hH) {
            var RH;
            const IH = null !== (RH = EH.modifiers) && void 0 !== RH ? RH : {};
            for (const EH of Object.keys(HH)) if (void 0 !== HH[EH] && void 0 === IH[EH]) return !1;
          } else if (void 0 === EH[hH]) return !1;
        }
        return !0;
      }
      setInteractions(HH, IH, EH) {
        let RH = 0;
        const hH = this.inputMap;
        for (let TH = 0; TH < hH.length; TH++) {
          const sH = hH[TH];
          sH.source === HH && this._entryMatches(sH, IH) && (sH.interaction = EH, RH++);
        }
        return RH;
      }
      _entryMatches(HH, IH) {
        switch (HH.source) {
          case "pointer":
            return (void 0 === HH.button || HH.button === (null === IH || void 0 === IH ? void 0 : IH.button)) && this._matchModifiers(HH.modifiers, null === IH || void 0 === IH ? void 0 : IH.modifiers);
          case "wheel":
            return this._matchModifiers(HH.modifiers, null === IH || void 0 === IH ? void 0 : IH.modifiers);
          case "touch":
            return void 0 === HH.touchCount || HH.touchCount === (null === IH || void 0 === IH ? void 0 : IH.touchCount);
          case "keyboard":
            var EH;
            if (void 0 !== HH.key) if (Array.isArray(HH.key) ? -1 === HH.key.indexOf(null !== (EH = null === IH || void 0 === IH ? void 0 : IH.key) && void 0 !== EH ? EH : -1) : HH.key !== (null === IH || void 0 === IH ? void 0 : IH.key)) return !1;
            return this._matchModifiers(HH.modifiers, null === IH || void 0 === IH ? void 0 : IH.modifiers);
        }
      }
      _entryConditionsMatch(HH, IH) {
        if (!IH) return !0;
        switch (HH.source) {
          case "pointer":
            return (!("button" in IH) || HH.button === IH.button) && (!("modifiers" in IH) || this._entryModifiersMatch(HH.modifiers, IH.modifiers));
          case "wheel":
            return !("modifiers" in IH) || this._entryModifiersMatch(HH.modifiers, IH.modifiers);
          case "touch":
            return !("touchCount" in IH) || HH.touchCount === IH.touchCount;
          case "keyboard":
            if ("key" in IH) {
              if (void 0 === HH.key) return void 0 === IH.key;
              if (void 0 === IH.key || (Array.isArray(HH.key) ? -1 === HH.key.indexOf(IH.key) : HH.key !== IH.key)) return !1;
            }
            return !("modifiers" in IH) || this._entryModifiersMatch(HH.modifiers, IH.modifiers);
        }
      }
      _entrySpecificity(HH) {
        let IH = 0;
        return "button" in HH && void 0 !== HH.button && IH++, "key" in HH && void 0 !== HH.key && IH++, "touchCount" in HH && void 0 !== HH.touchCount && IH++, "modifiers" in HH && HH.modifiers && IH++, IH;
      }
      _matchModifiers(HH, IH) {
        var EH, RH, hH;
        return !HH || (void 0 === HH.ctrl || HH.ctrl === (null !== (EH = null === IH || void 0 === IH ? void 0 : IH.ctrl) && void 0 !== EH && EH)) && (void 0 === HH.shift || HH.shift === (null !== (RH = null === IH || void 0 === IH ? void 0 : IH.shift) && void 0 !== RH && RH)) && (void 0 === HH.alt || HH.alt === (null !== (hH = null === IH || void 0 === IH ? void 0 : IH.alt) && void 0 !== hH && hH));
      }
      _entryModifiersMatch(HH, IH) {
        if (!IH) return !HH;
        return void 0 !== IH.ctrl || void 0 !== IH.shift || void 0 !== IH.alt ? (void 0 === IH.ctrl || (null === HH || void 0 === HH ? void 0 : HH.ctrl) === IH.ctrl) && (void 0 === IH.shift || (null === HH || void 0 === HH ? void 0 : HH.shift) === IH.shift) && (void 0 === IH.alt || (null === HH || void 0 === HH ? void 0 : HH.alt) === IH.alt) : !HH || void 0 === HH.ctrl && void 0 === HH.shift && void 0 === HH.alt;
      }
    }
  },
  22048: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => MH,
      g: () => rH
    });
    var RH = EH(21947),
      hH = EH(21956),
      TH = EH(21939),
      sH = EH(21764),
      eH = EH(21771),
      GH = EH(22052),
      AH = EH(21970),
      VH = EH(22057),
      YH = EH(22064);
    class QH extends VH.b {
      constructor(HH, IH, EH) {
        super(HH, IH, EH), this.input = new YH.d({
          translate: (HH, IH, EH) => {
            this.panAccumulatedPixels.x += HH, this.panAccumulatedPixels.y += IH, this.panAccumulatedPixels.z += EH;
          },
          rotate: (HH, IH) => {
            this.rotationAccumulatedPixels.x += HH, this.rotationAccumulatedPixels.y += IH;
          }
        }, () => this._createDefaultInputMap());
      }
      _createDefaultInputMap() {
        return [{
          source: "pointer",
          interaction: "rotate"
        }, {
          source: "keyboard",
          interaction: "translate"
        }, {
          source: "keyboard",
          interaction: "rotate"
        }, {
          source: "touch",
          interaction: "rotate"
        }, {
          source: "touch",
          interaction: "translate"
        }];
      }
    }
    const JH = sH.d.Zero(),
      OH = sH.h.Identity();
    let rH = (() => {
        var HH;
        let IH,
          EH,
          AH,
          VH,
          YH = TH.e,
          rH = [],
          FH = [],
          MH = [],
          NH = [],
          iI = [],
          DH = [],
          PH = [],
          XH = [];
        return HH = class extends YH {
          get inertia() {
            return this._targetInertia;
          }
          set inertia(HH) {
            this._targetInertia = HH, this.movement && (this.movement.panInertia = HH, this.movement.rotationInertia = HH);
          }
          constructor(HH, IH, EH) {
            super(HH, IH, EH, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new sH.x(0, 0, 0), this.cameraRotation = new sH.t(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, RH.j)(this, rH, !1), this.rotation = ((0, RH.j)(this, FH), (0, RH.j)(this, MH, void 0)), this.rotationQuaternion = (0, RH.j)(this, NH), this.speed = (0, RH.j)(this, iI, 2), this.noRotationConstraint = ((0, RH.j)(this, DH), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = eH.b, this._rotationEpsilon = eH.b, this.lockedTarget = (0, RH.j)(this, PH, null), this._currentTarget = ((0, RH.j)(this, XH), sH.x.Zero()), this._initialFocalDistance = 1, this._viewMatrix = sH.d.Zero(), this._cameraTransformMatrix = sH.d.Zero(), this._cameraRotationMatrix = sH.d.Zero(), this._transformedReferencePoint = sH.x.Zero(), this._deferredPositionUpdate = new sH.x(), this._deferredRotationQuaternionUpdate = new sH.h(), this._deferredRotationUpdate = new sH.x(), this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = sH.x.Forward(this.kh().useRightHandedSystem), this.rotation = new sH.x(0, this.kh().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new QH(this.kh(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia;
          }
          getFrontPosition(HH) {
            this.getWorldMatrix();
            const IH = sH.p.Rh[0],
              EH = sH.p.Rh[1];
            return EH.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(EH, IH), IH.scaleInPlace(HH), this.globalPosition.add(IH);
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const HH = this.lockedTarget;
              HH.aJ().getTranslationToRef(HH.absolutePosition);
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget;
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState();
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.nY(0, 0, 0), this.cameraRotation.nY(0, 0), !0);
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new sH.x(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new sH.x(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new sH.h(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          }
          _updateCache(HH) {
            HH || super._updateCache();
            const IH = this._getLockedTargetPosition();
            IH ? this._cache.lockedTarget ? this._cache.lockedTarget.RH(IH) : this._cache.lockedTarget = IH.clone() : this._cache.lockedTarget = null, this._cache.rotation.RH(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.RH(this.rotationQuaternion);
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const HH = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(HH) : !HH) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation));
          }
          _computeLocalCameraSpeed() {
            const HH = this.getEngine();
            return this.speed * Math.sqrt(HH.getDeltaTime() / (100 * HH.getFps()));
          }
          setTarget(HH) {
            this.upVector.normalize(), this._initialFocalDistance = HH.subtract(this.position).length(), this.position.z === HH.z && (this.position.z += eH.b), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.kh().useRightHandedSystem ? sH.d.LookAtRHToRef(this.position, HH, sH.x.UpReadOnly, JH) : sH.d.LookAtLHToRef(this.position, HH, sH.x.UpReadOnly, JH), JH.invert();
            const IH = this.rotationQuaternion || OH;
            sH.h.FromRotationMatrixToRef(JH, IH), IH.toEulerAnglesToRef(this.rotation), this.rotation.z = 0;
          }
          get target() {
            return this.getTarget();
          }
          set target(HH) {
            this.setTarget(HH);
          }
          getTarget() {
            return this._currentTarget;
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0;
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(sH.p.Matrix[0]), sH.x.TransformNormalToRef(this.cameraDirection, sH.p.Matrix[0], sH.p.Rh[0]), this._deferredPositionUpdate.addInPlace(sH.p.Rh[0]), void (this._deferOnly ? this._deferredUpdated = !0 : this.position.RH(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.RH(this._deferredPositionUpdate);
          }
          _checkInputs() {
            const HH = this.movement,
              IH = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            HH.panAccumulatedPixels.addInPlace(this.cameraDirection), HH.rotationAccumulatedPixels.x += this.cameraRotation.x, HH.rotationAccumulatedPixels.y += this.cameraRotation.y, HH.computeCurrentFrameDeltas(), this.cameraDirection.RH(HH.panDeltaCurrentFrame), this.cameraRotation.set(HH.rotationDeltaCurrentFrame.x, HH.rotationDeltaCurrentFrame.y);
            const EH = this.speed * this._panningEpsilon;
            !IH && Math.abs(this.cameraDirection.x) < EH && Math.abs(this.cameraDirection.y) < EH && Math.abs(this.cameraDirection.z) < EH && (this.cameraDirection.nO(0), HH.resetPanVelocity());
            const RH = this.invertRotation ? -this.inverseRotationSpeed : 1,
              hH = this._decideIfNeedsToMove(),
              TH = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.RH(this.rotation), this._deferredPositionUpdate.RH(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.RH(this.rotationQuaternion), hH && this._updatePosition(), TH) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * RH, this._deferredRotationUpdate.y += this.cameraRotation.y * RH, !this.noRotationConstraint) {
                const HH = 1.570796;
                this._deferredRotationUpdate.x > HH && (this._deferredRotationUpdate.x = HH), this._deferredRotationUpdate.x < -HH && (this._deferredRotationUpdate.x = -HH);
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.RH(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (sH.h.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.RH(this._deferredRotationQuaternionUpdate));
              }
            }
            this.cameraDirection.nO(0), this.cameraRotation.set(0, 0), super._checkInputs();
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : sH.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix);
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return sH.x.TransformNormalToRef(sH.x.UpReadOnly, this._cameraRotationMatrix, this.upVector), this;
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), sH.x.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? GH.e.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (sH.h.FromEulerVectorToRef(this.rotation, OH), GH.e.Y.rotateByQuaternionToRef(OH, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix;
          }
          _computeViewMatrix(HH, IH, EH) {
            if (this.kh().useRightHandedSystem ? sH.d.LookAtRHToRef(HH, IH, EH, this._viewMatrix) : sH.d.LookAtLHToRef(HH, IH, EH, this._viewMatrix), this.parent) {
              const HH = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(HH, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent();
            }
          }
          createRigCamera(IH, EH) {
            if (this.cameraRigMode !== TH.e.RIG_MODE_NONE) {
              const EH = new HH(IH, this.position.clone(), this.kh());
              return EH.isRigCamera = !0, EH.rigParent = this, this.cameraRigMode === TH.e.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new sH.h()), EH._cameraRigParams = {}, EH.rotationQuaternion = new sH.h()), EH.mode = this.mode, EH.orthoLeft = this.orthoLeft, EH.orthoRight = this.orthoRight, EH.orthoTop = this.orthoTop, EH.orthoBottom = this.orthoBottom, EH;
            }
            return null;
          }
          _updateRigCameras() {
            const HH = this._rigCameras[0],
              IH = this._rigCameras[1];
            switch (this.aJ(), this.cameraRigMode) {
              case TH.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case TH.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case TH.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case TH.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case TH.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
                {
                  const EH = this.cameraRigMode === TH.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                    RH = this.cameraRigMode === TH.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                  this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * EH, HH), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * RH, IH);
                  break;
                }
              case TH.e.RIG_MODE_VR:
                HH.rotationQuaternion && IH.rotationQuaternion && this.rotationQuaternion ? (HH.rotationQuaternion.RH(this.rotationQuaternion), IH.rotationQuaternion.RH(this.rotationQuaternion)) : (HH.rotation.RH(this.rotation), IH.rotation.RH(this.rotation)), HH.position.RH(this.position), IH.position.RH(this.position);
            }
            super._updateRigCameras();
          }
          _getRigCamPositionAndTarget(IH, EH) {
            this.getTarget().subtractToRef(this.position, HH._TargetFocalPoint), HH._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const RH = HH._TargetFocalPoint.addInPlace(this.position);
            sH.d.TranslationToRef(-RH.x, -RH.y, -RH.z, HH._TargetTransformMatrix), HH._TargetTransformMatrix.multiplyToRef(sH.d.RotationAxis(EH.upVector, IH), HH._RigCamTransformMatrix), sH.d.TranslationToRef(RH.x, RH.y, RH.z, HH._TargetTransformMatrix), HH._RigCamTransformMatrix.multiplyToRef(HH._TargetTransformMatrix, HH._RigCamTransformMatrix), sH.x.TransformCoordinatesToRef(this.position, HH._RigCamTransformMatrix, EH.position), EH.setTarget(RH);
          }
          getClassName() {
            return "TargetCamera";
          }
        }, (TH => {
          const sH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (TH = YH[Symbol.metadata]) && void 0 !== TH ? TH : null) : void 0;
          IH = [(0, hH.K)()], EH = [(0, hH.I)()], AH = [(0, hH.K)()], VH = [(0, hH.x)("lockedTargetId")], (0, RH.i)(null, null, IH, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: HH => "updateUpVectorFromRotation" in HH,
              get: HH => HH.updateUpVectorFromRotation,
              set: (HH, IH) => {
                HH.updateUpVectorFromRotation = IH;
              }
            },
            metadata: sH
          }, rH, FH), (0, RH.i)(null, null, EH, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: HH => "rotation" in HH,
              get: HH => HH.rotation,
              set: (HH, IH) => {
                HH.rotation = IH;
              }
            },
            metadata: sH
          }, MH, NH), (0, RH.i)(null, null, AH, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: HH => "speed" in HH,
              get: HH => HH.speed,
              set: (HH, IH) => {
                HH.speed = IH;
              }
            },
            metadata: sH
          }, iI, DH), (0, RH.i)(null, null, VH, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: HH => "lockedTarget" in HH,
              get: HH => HH.lockedTarget,
              set: (HH, IH) => {
                HH.lockedTarget = IH;
              }
            },
            metadata: sH
          }, PH, XH), sH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sH
          });
        })(), HH._RigCamTransformMatrix = new sH.d(), HH._TargetTransformMatrix = new sH.d(), HH._TargetFocalPoint = new sH.x(), HH;
      })(),
      FH = !1;
    function MH() {
      FH || (FH = !0, AH.d.AddNodeConstructor("TargetCamera", (HH, IH) => () => new rH(HH, sH.x.Zero(), IH)));
    }
  },
  22752: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => TH
    });
    var RH = EH(22004);
    let hH = !1;
    function TH() {
      hH || (hH = !0, RH.c.prototype.getInputElement = function () {
        return this._renderingCanvas;
      }, RH.c.prototype.getRenderingCanvasClientRect = function () {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null;
      }, RH.c.prototype.getInputElementClientRect = function () {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null;
      }, RH.c.prototype.getAspectRatio = function (HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const EH = HH.viewport;
        return this.getRenderWidth(IH) * EH.width / (this.getRenderHeight(IH) * EH.height);
      }, RH.c.prototype.getScreenAspectRatio = function () {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0);
      }, RH.c.prototype._verifyPointerLock = function () {
        var HH;
        null === (HH = this._onPointerLockChange) || void 0 === HH || HH.call(this);
      });
    }
  },
  22784: (HH, IH, EH) => {
    var RH = EH(22004),
      hH = EH(21867);
    let TH = !1;
    TH || (TH = !0, (0, hH.y)(), RH.c.prototype._loadFileAsync = async function (HH, IH, EH) {
      return await new Promise((RH, hH) => {
        this._loadFile(HH, HH => {
          RH(HH);
        }, void 0, IH, EH, (HH, IH) => {
          hH(IH);
        });
      });
    });
  },
  22779: (HH, IH, EH) => {
    (0, EH(21997).b)();
  },
  21997: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => TH
    });
    var RH = EH(22004);
    let hH = !1;
    function TH() {
      hH || (hH = !0, RH.c.prototype.getRenderPassNames = function () {
        return this._renderPassNames;
      }, RH.c.prototype.getCurrentRenderPassName = function () {
        return this._renderPassNames[this.currentRenderPassId];
      }, RH.c.prototype.createRenderPassId = function (HH) {
        const IH = ++RH.c._RenderPassIdCounter;
        return this._renderPassNames[IH] = null !== HH && void 0 !== HH ? HH : "NONAME", IH;
      }, RH.c.prototype.releaseRenderPassId = function (HH) {
        this._renderPassNames[HH] = void 0;
        for (let IH = 0; IH < this.scenes.length; ++IH) {
          const EH = this.scenes[IH];
          for (let IH = 0; IH < EH.meshes.length; ++IH) {
            const RH = EH.meshes[IH];
            if (RH._releaseRenderPassId(HH), RH.BJ) for (let IH = 0; IH < RH.BJ.length; ++IH) {
              RH.BJ[IH]._removeDrawWrapper(HH);
            }
          }
        }
      });
    }
  },
  22787: (HH, IH, EH) => {
    var RH = EH(22790);
    EH(22004).c.GetCompatibleTextureLoader = RH.c;
  },
  22755: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => TH
    });
    var RH = EH(22143);
    let hH = !1;
    function TH() {
      hH || (hH = !0, RH.e.prototype.setAlphaMode = function (HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[EH] === HH) {
          if (!IH) {
            const IH = 0 === HH;
            this.depthCullingState.depthMask !== IH && (this.depthCullingState.depthMask = IH);
          }
          return;
        }
        const RH = 0 === HH;
        this._alphaState.setAlphaBlend(!RH, EH), this._alphaState.setAlphaMode(HH, EH), IH || (this.depthCullingState.depthMask = RH), this._alphaMode[EH] = HH;
      });
    }
  },
  22764: (HH, IH, EH) => {
    var RH = EH(17),
      hH = EH(22034),
      TH = EH(21832),
      sH = EH(22143),
      eH = EH(22770),
      GH = EH(22162);
    class AH extends eH.c {
      setDepthStencilTexture(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(HH, IH), !HH) return;
        const EH = this._engine,
          RH = this._context,
          hH = HH._hardwareTexture;
        if (hH && HH._autoMSAAManagement && this._MSAAFramebuffer) {
          const IH = EH._currentFramebuffer;
          EH._bindUnboundFramebuffer(this._MSAAFramebuffer), RH.framebufferRenderbuffer(RH.FRAMEBUFFER, (0, GH.b)(HH.format) ? RH.DEPTH_STENCIL_ATTACHMENT : RH.DEPTH_ATTACHMENT, RH.RENDERBUFFER, hH.getMSAARenderBuffer()), EH._bindUnboundFramebuffer(IH);
        }
      }
      constructor(HH, IH, EH, RH, hH) {
        super(HH, IH, EH, RH), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = hH;
      }
      _cloneRenderTargetWrapper() {
        let HH;
        return this._colorTextureArray && this._depthStencilTextureArray ? (HH = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), HH.texture.isReady = !0) : HH = super._cloneRenderTargetWrapper(), HH;
      }
      _swapRenderTargetWrapper(HH) {
        super._swapRenderTargetWrapper(HH), HH._framebuffer = this._framebuffer, HH._depthStencilBuffer = this._depthStencilBuffer, HH._MSAAFramebuffer = this._MSAAFramebuffer, HH._colorTextureArray = this._colorTextureArray, HH._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null;
      }
      createDepthStencilTexture() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          TH = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const HH = this._engine,
            IH = HH._currentFramebuffer,
            EH = this._context;
          HH._bindUnboundFramebuffer(this._framebuffer), EH.framebufferRenderbuffer(EH.FRAMEBUFFER, EH.DEPTH_STENCIL_ATTACHMENT, EH.RENDERBUFFER, null), EH.framebufferRenderbuffer(EH.FRAMEBUFFER, EH.DEPTH_ATTACHMENT, EH.RENDERBUFFER, null), EH.framebufferRenderbuffer(EH.FRAMEBUFFER, EH.STENCIL_ATTACHMENT, EH.RENDERBUFFER, null), HH._bindUnboundFramebuffer(IH), EH.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null;
        }
        return super.createDepthStencilTexture(HH, IH, EH, RH, hH, TH);
      }
      shareDepth(HH) {
        super.shareDepth(HH);
        const IH = this._context,
          EH = this._depthStencilBuffer,
          RH = HH._MSAAFramebuffer || HH._framebuffer,
          hH = this._engine;
        HH._depthStencilBuffer && HH._depthStencilBuffer !== EH && IH.deleteRenderbuffer(HH._depthStencilBuffer), HH._depthStencilBuffer = EH;
        const TH = HH._generateStencilBuffer ? IH.DEPTH_STENCIL_ATTACHMENT : IH.DEPTH_ATTACHMENT;
        hH._bindUnboundFramebuffer(RH), IH.framebufferRenderbuffer(IH.FRAMEBUFFER, TH, IH.RENDERBUFFER, EH), hH._bindUnboundFramebuffer(null);
      }
      _bindTextureRenderTarget(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          EH = arguments.length > 2 ? arguments[2] : void 0,
          RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const hH = HH._hardwareTexture;
        if (!hH) return;
        const TH = this._framebuffer,
          sH = this._engine,
          eH = sH._currentFramebuffer;
        let GH;
        if (sH._bindUnboundFramebuffer(TH), sH.webGLVersion > 1) {
          const TH = this._context;
          var AH, VH, YH;
          if (GH = TH["COLOR_ATTACHMENT" + IH], HH.is2DArray || HH.is3D) EH = null !== (AH = null !== (VH = EH) && void 0 !== VH ? VH : null === (YH = this.layerIndices) || void 0 === YH ? void 0 : YH[IH]) && void 0 !== AH ? AH : 0, TH.framebufferTextureLayer(TH.FRAMEBUFFER, GH, hH.underlyingResource, RH, EH);else if (HH.isCube) {
            var QH, JH, OH;
            EH = null !== (QH = null !== (JH = EH) && void 0 !== JH ? JH : null === (OH = this.faceIndices) || void 0 === OH ? void 0 : OH[IH]) && void 0 !== QH ? QH : 0, TH.framebufferTexture2D(TH.FRAMEBUFFER, GH, TH.TEXTURE_CUBE_MAP_POSITIVE_X + EH, hH.underlyingResource, RH);
          } else TH.framebufferTexture2D(TH.FRAMEBUFFER, GH, TH.TEXTURE_2D, hH.underlyingResource, RH);
        } else {
          const HH = this._context;
          GH = HH["COLOR_ATTACHMENT" + IH + "_WEBGL"];
          const TH = void 0 !== EH ? HH.TEXTURE_CUBE_MAP_POSITIVE_X + EH : HH.TEXTURE_2D;
          HH.framebufferTexture2D(HH.FRAMEBUFFER, GH, TH, hH.underlyingResource, RH);
        }
        if (HH._autoMSAAManagement && this._MSAAFramebuffer) {
          const HH = this._context;
          sH._bindUnboundFramebuffer(this._MSAAFramebuffer), HH.framebufferRenderbuffer(HH.FRAMEBUFFER, GH, HH.RENDERBUFFER, hH.getMSAARenderBuffer());
        }
        sH._bindUnboundFramebuffer(eH);
      }
      setTexture(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          EH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(HH, IH, EH), this._bindTextureRenderTarget(HH, IH);
      }
      setLayerAndFaceIndices(HH, IH) {
        var EH, RH;
        if (super.setLayerAndFaceIndices(HH, IH), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const hH = null !== (EH = null === (RH = this._attachments) || void 0 === RH ? void 0 : RH.length) && void 0 !== EH ? EH : this.textures.length;
        for (let TH = 0; TH < hH; TH++) {
          const HH = this.textures[TH];
          HH && (HH.is2DArray || HH.is3D ? this._bindTextureRenderTarget(HH, TH, this.layerIndices[TH]) : HH.isCube ? this._bindTextureRenderTarget(HH, TH, this.faceIndices[TH]) : this._bindTextureRenderTarget(HH, TH));
        }
      }
      setLayerAndFaceIndex() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 ? arguments[1] : void 0,
          EH = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(HH, IH, EH), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const RH = this.textures[HH];
        RH.is2DArray || RH.is3D ? this._bindTextureRenderTarget(this.textures[HH], HH, this.layerIndices[HH]) : RH.isCube && this._bindTextureRenderTarget(this.textures[HH], HH, this.faceIndices[HH]);
      }
      resolveMSAATextures() {
        const HH = this._engine,
          IH = HH._currentFramebuffer;
        HH._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), HH._bindUnboundFramebuffer(IH);
      }
      dispose() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const IH = this._context;
        HH || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (IH.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (IH.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (IH.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(HH);
      }
    }
    let VH = !1;
    VH || (VH = !0, sH.e.prototype._createHardwareRenderTargetWrapper = function (HH, IH, EH) {
      const RH = new AH(HH, IH, EH, this, this._gl);
      return this._renderTargetWrapperCache.push(RH), RH;
    }, sH.e.prototype.createRenderTargetTexture = function (HH, IH) {
      var EH;
      const RH = this._createHardwareRenderTargetWrapper(!1, !1, HH);
      let hH,
        TH,
        sH = !0,
        eH = !1,
        GH = !1,
        AH = 1;
      var VH, YH;
      void 0 !== IH && "object" === typeof IH && (sH = null === (VH = IH.generateDepthBuffer) || void 0 === VH || VH, eH = !!IH.generateStencilBuffer, GH = !!IH.noColorAttachment, hH = IH.colorAttachment, AH = null !== (YH = IH.samples) && void 0 !== YH ? YH : 1, TH = IH.label);
      const QH = hH || (GH ? null : this._createInternalTexture(HH, IH, !0, 5)),
        JH = HH.width || HH,
        OH = HH.height || HH,
        rH = this._currentFramebuffer,
        FH = this._gl,
        MH = FH.createFramebuffer();
      if (this._bindUnboundFramebuffer(MH), RH._depthStencilBuffer = this._setupFramebufferDepthAttachments(eH, sH, JH, OH), !QH || QH.is2DArray || QH.is3D || FH.framebufferTexture2D(FH.FRAMEBUFFER, FH.COLOR_ATTACHMENT0, FH.TEXTURE_2D, QH._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(rH), RH.label = null !== (EH = TH) && void 0 !== EH ? EH : "RenderTargetWrapper", RH._framebuffer = MH, RH._generateDepthBuffer = sH, RH._generateStencilBuffer = eH, RH.setTextures(QH), hH) {
        if (RH._samples = hH.samples, hH.samples > 1) {
          const HH = hH._hardwareTexture.getMSAARenderBuffer(0);
          RH._MSAAFramebuffer = FH.createFramebuffer(), this._bindUnboundFramebuffer(RH._MSAAFramebuffer), FH.framebufferRenderbuffer(FH.FRAMEBUFFER, FH.COLOR_ATTACHMENT0, FH.RENDERBUFFER, HH), this._bindUnboundFramebuffer(null);
        }
      } else this.updateRenderTargetTextureSampleCount(RH, AH);
      return RH;
    }, sH.e.prototype._createDepthStencilTexture = function (HH, IH, EH) {
      var sH;
      const eH = this._gl,
        AH = HH.fI || 0,
        VH = HH.depth || 0;
      let YH = eH.TEXTURE_2D;
      0 !== AH ? YH = eH.TEXTURE_2D_ARRAY : 0 !== VH && (YH = eH.TEXTURE_3D);
      const QH = new hH.b(this, 12);
      if (QH.label = IH.label, !this._caps.depthTextureExtension) return TH.e.Error("Depth texture is not supported by your browser or hardware."), QH;
      const JH = (0, RH.b)({
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1
      }, IH);
      if (this._bindTextureDirectly(YH, QH, !0), this._setupDepthStencilTexture(QH, HH, 0 !== JH.comparisonFunction && JH.bilinearFiltering, JH.comparisonFunction, JH.samples), void 0 !== JH.depthTextureFormat) {
        if (15 !== JH.depthTextureFormat && 16 !== JH.depthTextureFormat && 17 !== JH.depthTextureFormat && 13 !== JH.depthTextureFormat && 14 !== JH.depthTextureFormat && 18 !== JH.depthTextureFormat) return TH.e.Error("Depth texture ".concat(JH.depthTextureFormat, " format is not supported.")), QH;
        QH.format = JH.depthTextureFormat;
      } else QH.format = JH.generateStencil ? 13 : 16;
      const OH = (0, GH.b)(QH.format),
        rH = this._getWebGLTextureTypeFromDepthTextureFormat(QH.format),
        FH = OH ? eH.DEPTH_STENCIL : eH.DEPTH_COMPONENT,
        MH = this._getInternalFormatFromDepthTextureFormat(QH.format, !0, OH);
      return QH.is2DArray ? eH.texImage3D(YH, 0, MH, QH.width, QH.height, AH, 0, FH, rH, null) : QH.is3D ? eH.texImage3D(YH, 0, MH, QH.width, QH.height, VH, 0, FH, rH, null) : eH.texImage2D(YH, 0, MH, QH.width, QH.height, 0, FH, rH, null), this._bindTextureDirectly(YH, null), this._internalTexturesCache.push(QH), EH._depthStencilBuffer && (eH.deleteRenderbuffer(EH._depthStencilBuffer), EH._depthStencilBuffer = null), this._bindUnboundFramebuffer(null !== (sH = EH._MSAAFramebuffer) && void 0 !== sH ? sH : EH._framebuffer), EH._generateStencilBuffer = OH, EH._depthStencilTextureWithStencil = OH, EH._depthStencilBuffer = this._setupFramebufferDepthAttachments(EH._generateStencilBuffer, EH._generateDepthBuffer, EH.width, EH.height, EH.samples, QH.format), this._bindUnboundFramebuffer(null), QH;
    }, sH.e.prototype.updateRenderTargetTextureSampleCount = function (HH, IH) {
      var EH, RH;
      if (this.webGLVersion < 2 || !HH) return 1;
      if (HH.samples === IH) return IH;
      const hH = this._gl;
      IH = Math.min(IH, this.getCaps().maxMSAASamples), HH._depthStencilBuffer && (hH.deleteRenderbuffer(HH._depthStencilBuffer), HH._depthStencilBuffer = null), HH._MSAAFramebuffer && (hH.deleteFramebuffer(HH._MSAAFramebuffer), HH._MSAAFramebuffer = null);
      const TH = null === (EH = HH.texture) || void 0 === EH ? void 0 : EH._hardwareTexture;
      if (null === TH || void 0 === TH || TH.releaseMSAARenderBuffers(), HH.texture && IH > 1 && "function" === typeof hH.renderbufferStorageMultisample) {
        const EH = hH.createFramebuffer();
        if (!EH) throw new Error("Unable to create multi sampled framebuffer");
        HH._MSAAFramebuffer = EH, this._bindUnboundFramebuffer(HH._MSAAFramebuffer);
        const RH = this._createRenderBuffer(HH.texture.width, HH.texture.height, IH, -1, this._getRGBABufferInternalSizedFormat(HH.texture.type, HH.texture.format, HH.texture._useSRGBBuffer), hH.COLOR_ATTACHMENT0, !1);
        if (!RH) throw new Error("Unable to create multi sampled framebuffer");
        null === TH || void 0 === TH || TH.addMSAARenderBuffer(RH);
      }
      this._bindUnboundFramebuffer(null !== (RH = HH._MSAAFramebuffer) && void 0 !== RH ? RH : HH._framebuffer), HH.texture && (HH.texture.samples = IH), HH._samples = IH;
      const sH = HH._depthStencilTexture ? HH._depthStencilTexture.format : void 0;
      return HH._depthStencilBuffer = this._setupFramebufferDepthAttachments(HH._generateStencilBuffer, HH._generateDepthBuffer, HH.width, HH.height, IH, sH), this._bindUnboundFramebuffer(null), IH;
    }, sH.e.prototype._setupDepthStencilTexture = function (HH, IH, EH, RH) {
      var hH, TH;
      let sH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const eH = null !== (hH = IH.width) && void 0 !== hH ? hH : IH,
        GH = null !== (TH = IH.height) && void 0 !== TH ? TH : IH,
        AH = IH.fI || 0,
        VH = IH.depth || 0;
      HH.baseWidth = eH, HH.baseHeight = GH, HH.width = eH, HH.height = GH, HH.is2DArray = AH > 0, HH.depth = AH || VH, HH.isReady = !0, HH.samples = sH, HH.generateMipMaps = !1, HH.samplingMode = EH ? 2 : 1, HH.type = 0, HH._comparisonFunction = RH;
      const YH = this._gl,
        QH = this._getTextureTarget(HH),
        JH = this._getSamplingParameters(HH.samplingMode, !1);
      YH.texParameteri(QH, YH.TEXTURE_MAG_FILTER, JH.mag), YH.texParameteri(QH, YH.TEXTURE_MIN_FILTER, JH.min), YH.texParameteri(QH, YH.TEXTURE_WRAP_S, YH.CLAMP_TO_EDGE), YH.texParameteri(QH, YH.TEXTURE_WRAP_T, YH.CLAMP_TO_EDGE), this.webGLVersion > 1 && (0 === RH ? (YH.texParameteri(QH, YH.TEXTURE_COMPARE_FUNC, 515), YH.texParameteri(QH, YH.TEXTURE_COMPARE_MODE, YH.NONE)) : (YH.texParameteri(QH, YH.TEXTURE_COMPARE_FUNC, RH), YH.texParameteri(QH, YH.TEXTURE_COMPARE_MODE, YH.COMPARE_REF_TO_TEXTURE)));
    });
  },
  22392: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => RH
    });
    class RH {}
    RH.AUTOSAMPLERSUFFIX = "Sampler", RH.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", RH.ALPHA_DISABLE = 0, RH.ALPHA_ADD = 1, RH.ALPHA_COMBINE = 2, RH.ALPHA_SUBTRACT = 3, RH.ALPHA_MULTIPLY = 4, RH.ALPHA_MAXIMIZED = 5, RH.ALPHA_ONEONE = 6, RH.ALPHA_PREMULTIPLIED = 7, RH.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, RH.ALPHA_INTERPOLATE = 9, RH.ALPHA_SCREENMODE = 10, RH.ALPHA_ONEONE_ONEONE = 11, RH.ALPHA_ALPHATOCOLOR = 12, RH.ALPHA_REVERSEONEMINUS = 13, RH.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, RH.ALPHA_ONEONE_ONEZERO = 15, RH.ALPHA_EXCLUSION = 16, RH.ALPHA_LAYER_ACCUMULATE = 17, RH.ALPHA_MIN = 18, RH.ALPHA_MAX = 19, RH.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, RH.ALPHA_REPLACE_COLOR = 21, RH.ALPHA_EQUATION_ADD = 0, RH.ALPHA_EQUATION_SUBSTRACT = 1, RH.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, RH.ALPHA_EQUATION_MAX = 3, RH.ALPHA_EQUATION_MIN = 4, RH.ALPHA_EQUATION_DARKEN = 5, RH.DELAYLOADSTATE_NONE = 0, RH.DELAYLOADSTATE_LOADED = 1, RH.DELAYLOADSTATE_LOADING = 2, RH.DELAYLOADSTATE_NOTLOADED = 4, RH.NEVER = 512, RH.ALWAYS = 519, RH.LESS = 513, RH.EQUAL = 514, RH.LEQUAL = 515, RH.GREATER = 516, RH.GEQUAL = 518, RH.NOTEQUAL = 517, RH.KEEP = 7680, RH.ZERO = 0, RH.REPLACE = 7681, RH.INCR = 7682, RH.DECR = 7683, RH.INVERT = 5386, RH.INCR_WRAP = 34055, RH.DECR_WRAP = 34056, RH.TEXTURE_CLAMP_ADDRESSMODE = 0, RH.TEXTURE_WRAP_ADDRESSMODE = 1, RH.TEXTURE_MIRROR_ADDRESSMODE = 2, RH.TEXTURE_REPETITION_NONE = 0, RH.TEXTURE_REPETITION_NOISE_BLEND = 1, RH.TEXTURE_REPETITION_HEX_TILING = 2, RH.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, RH.TEXTURE_REPETITION_VORONOI_BOMBING = 4, RH.TEXTURE_CREATIONFLAG_STORAGE = 1, RH.TEXTUREFORMAT_ALPHA = 0, RH.TEXTUREFORMAT_LUMINANCE = 1, RH.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, RH.TEXTUREFORMAT_RGB = 4, RH.TEXTUREFORMAT_RGBA = 5, RH.TEXTUREFORMAT_RED = 6, RH.TEXTUREFORMAT_R = 6, RH.TEXTUREFORMAT_R16_UNORM = 33322, RH.TEXTUREFORMAT_RG16_UNORM = 33324, RH.TEXTUREFORMAT_RGB16_UNORM = 32852, RH.TEXTUREFORMAT_RGBA16_UNORM = 32859, RH.TEXTUREFORMAT_R16_SNORM = 36760, RH.TEXTUREFORMAT_RG16_SNORM = 36761, RH.TEXTUREFORMAT_RGB16_SNORM = 36762, RH.TEXTUREFORMAT_RGBA16_SNORM = 36763, RH.TEXTUREFORMAT_RG = 7, RH.TEXTUREFORMAT_RED_INTEGER = 8, RH.TEXTUREFORMAT_R_INTEGER = 8, RH.TEXTUREFORMAT_RG_INTEGER = 9, RH.TEXTUREFORMAT_RGB_INTEGER = 10, RH.TEXTUREFORMAT_RGBA_INTEGER = 11, RH.TEXTUREFORMAT_BGRA = 12, RH.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, RH.TEXTUREFORMAT_DEPTH32_FLOAT = 14, RH.TEXTUREFORMAT_DEPTH16 = 15, RH.TEXTUREFORMAT_DEPTH24 = 16, RH.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, RH.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, RH.TEXTUREFORMAT_STENCIL8 = 19, RH.TEXTUREFORMAT_UNDEFINED = 4294967295, RH.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, RH.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, RH.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, RH.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, RH.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, RH.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, RH.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, RH.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, RH.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, RH.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, RH.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, RH.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, RH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, RH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, RH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, RH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, RH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, RH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, RH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, RH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, RH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, RH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, RH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, RH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, RH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, RH.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, RH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, RH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, RH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, RH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, RH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, RH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, RH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, RH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, RH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, RH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, RH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, RH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, RH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, RH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, RH.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, RH.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, RH.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, RH.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, RH.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, RH.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, RH.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, RH.TEXTURETYPE_UNSIGNED_BYTE = 0, RH.TEXTURETYPE_UNSIGNED_INT = 0, RH.TEXTURETYPE_FLOAT = 1, RH.TEXTURETYPE_HALF_FLOAT = 2, RH.TEXTURETYPE_BYTE = 3, RH.TEXTURETYPE_SHORT = 4, RH.TEXTURETYPE_UNSIGNED_SHORT = 5, RH.TEXTURETYPE_INT = 6, RH.TEXTURETYPE_UNSIGNED_INTEGER = 7, RH.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, RH.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, RH.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, RH.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, RH.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, RH.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, RH.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, RH.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, RH.TEXTURETYPE_UNDEFINED = 16, RH.TEXTURE_2D = 3553, RH.TEXTURE_2D_ARRAY = 35866, RH.TEXTURE_CUBE_MAP = 34067, RH.TEXTURE_CUBE_MAP_ARRAY = 3735928559, RH.TEXTURE_3D = 32879, RH.TEXTURE_NEAREST_SAMPLINGMODE = 1, RH.TEXTURE_NEAREST_NEAREST = 1, RH.TEXTURE_BILINEAR_SAMPLINGMODE = 2, RH.TEXTURE_LINEAR_LINEAR = 2, RH.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, RH.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, RH.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, RH.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, RH.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, RH.TEXTURE_NEAREST_LINEAR = 7, RH.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, RH.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, RH.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, RH.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, RH.TEXTURE_LINEAR_NEAREST = 12, RH.TEXTURE_EXPLICIT_MODE = 0, RH.TEXTURE_SPHERICAL_MODE = 1, RH.TEXTURE_PLANAR_MODE = 2, RH.TEXTURE_CUBIC_MODE = 3, RH.TEXTURE_PROJECTION_MODE = 4, RH.TEXTURE_SKYBOX_MODE = 5, RH.TEXTURE_INVCUBIC_MODE = 6, RH.TEXTURE_EQUIRECTANGULAR_MODE = 7, RH.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, RH.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, RH.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, RH.TEXTURE_FILTERING_QUALITY_HIGH = 64, RH.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, RH.TEXTURE_FILTERING_QUALITY_LOW = 8, RH.SCALEMODE_FLOOR = 1, RH.SCALEMODE_NEAREST = 2, RH.SCALEMODE_CEILING = 3, RH.MATERIAL_TextureDirtyFlag = 1, RH.MATERIAL_LightDirtyFlag = 2, RH.MATERIAL_FresnelDirtyFlag = 4, RH.MATERIAL_AttributesDirtyFlag = 8, RH.MATERIAL_MiscDirtyFlag = 16, RH.MATERIAL_PrePassDirtyFlag = 32, RH.MATERIAL_ImageProcessingDirtyFlag = 64, RH.MATERIAL_AllDirtyFlag = 127, RH.MATERIAL_TriangleFillMode = 0, RH.MATERIAL_WireFrameFillMode = 1, RH.MATERIAL_PointFillMode = 2, RH.MATERIAL_PointListDrawMode = 3, RH.MATERIAL_LineListDrawMode = 4, RH.MATERIAL_LineLoopDrawMode = 5, RH.MATERIAL_LineStripDrawMode = 6, RH.MATERIAL_TriangleStripDrawMode = 7, RH.MATERIAL_TriangleFanDrawMode = 8, RH.MATERIAL_ClockWiseSideOrientation = 0, RH.MATERIAL_CounterClockWiseSideOrientation = 1, RH.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, RH.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, RH.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, RH.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, RH.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, RH.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, RH.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, RH.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, RH.ACTION_NothingTrigger = 0, RH.ACTION_OnPickTrigger = 1, RH.ACTION_OnLeftPickTrigger = 2, RH.ACTION_OnRightPickTrigger = 3, RH.ACTION_OnCenterPickTrigger = 4, RH.ACTION_OnPickDownTrigger = 5, RH.ACTION_OnDoublePickTrigger = 6, RH.ACTION_OnPickUpTrigger = 7, RH.ACTION_OnPickOutTrigger = 16, RH.ACTION_OnLongPressTrigger = 8, RH.ACTION_OnPointerOverTrigger = 9, RH.ACTION_OnPointerOutTrigger = 10, RH.ACTION_OnEveryFrameTrigger = 11, RH.ACTION_OnIntersectionEnterTrigger = 12, RH.ACTION_OnIntersectionExitTrigger = 13, RH.ACTION_OnKeyDownTrigger = 14, RH.ACTION_OnKeyUpTrigger = 15, RH.PARTICLES_BILLBOARDMODE_Y = 2, RH.PARTICLES_BILLBOARDMODE_ALL = 7, RH.PARTICLES_BILLBOARDMODE_STRETCHED = 8, RH.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, RH.MESHES_CULLINGSTRATEGY_STANDARD = 0, RH.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, RH.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, RH.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, RH.SCENELOADER_NO_LOGGING = 0, RH.SCENELOADER_MINIMAL_LOGGING = 1, RH.SCENELOADER_SUMMARY_LOGGING = 2, RH.SCENELOADER_DETAILED_LOGGING = 3, RH.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, RH.PREPASS_POSITION_TEXTURE_TYPE = 1, RH.PREPASS_VELOCITY_TEXTURE_TYPE = 2, RH.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, RH.PREPASS_COLOR_TEXTURE_TYPE = 4, RH.PREPASS_DEPTH_TEXTURE_TYPE = 5, RH.PREPASS_NORMAL_TEXTURE_TYPE = 6, RH.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, RH.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, RH.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, RH.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, RH.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, RH.PREPASS_ALBEDO_TEXTURE_TYPE = 12, RH.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, RH.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, RH.BUFFER_CREATIONFLAG_READ = 1, RH.BUFFER_CREATIONFLAG_WRITE = 2, RH.BUFFER_CREATIONFLAG_READWRITE = 3, RH.BUFFER_CREATIONFLAG_UNIFORM = 4, RH.BUFFER_CREATIONFLAG_VERTEX = 8, RH.BUFFER_CREATIONFLAG_INDEX = 16, RH.BUFFER_CREATIONFLAG_STORAGE = 32, RH.BUFFER_CREATIONFLAG_INDIRECT = 64, RH.RENDERPASS_MAIN = 0, RH.INPUT_ALT_KEY = 18, RH.INPUT_CTRL_KEY = 17, RH.INPUT_META_KEY1 = 91, RH.INPUT_META_KEY2 = 92, RH.INPUT_META_KEY3 = 93, RH.INPUT_SHIFT_KEY = 16, RH.SNAPSHOTRENDERING_STANDARD = 0, RH.SNAPSHOTRENDERING_FAST = 1, RH.PERSPECTIVE_CAMERA = 0, RH.ORTHOGRAPHIC_CAMERA = 1, RH.FOVMODE_VERTICAL_FIXED = 0, RH.FOVMODE_HORIZONTAL_FIXED = 1, RH.RIG_MODE_NONE = 0, RH.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, RH.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, RH.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, RH.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, RH.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, RH.RIG_MODE_VR = 20, RH.RIG_MODE_CUSTOM = 22, RH.MAX_SUPPORTED_UV_SETS = 6, RH.GL_ALPHA_EQUATION_ADD = 32774, RH.GL_ALPHA_EQUATION_MIN = 32775, RH.GL_ALPHA_EQUATION_MAX = 32776, RH.GL_ALPHA_EQUATION_SUBTRACT = 32778, RH.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, RH.GL_ALPHA_FUNCTION_SRC = 768, RH.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, RH.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, RH.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, RH.GL_ALPHA_FUNCTION_DST_ALPHA = 772, RH.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, RH.GL_ALPHA_FUNCTION_DST_COLOR = 774, RH.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, RH.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, RH.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, RH.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, RH.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, RH.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, RH.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, RH.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, RH.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, RH.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, RH.SnippetUrl = "https://snippet.babylonjs.com", RH.FOGMODE_NONE = 0, RH.FOGMODE_EXP = 1, RH.FOGMODE_EXP2 = 2, RH.FOGMODE_LINEAR = 3, RH.BYTE = 5120, RH.UNSIGNED_BYTE = 5121, RH.SHORT = 5122, RH.UNSIGNED_SHORT = 5123, RH.INT = 5124, RH.UNSIGNED_INT = 5125, RH.FLOAT = 5126, RH.HALF_FLOAT = 5131, RH.PositionKind = "position", RH.NormalKind = "normal", RH.TangentKind = "tangent", RH.UVKind = "uv", RH.UV2Kind = "uv2", RH.UV3Kind = "uv3", RH.UV4Kind = "uv4", RH.UV5Kind = "uv5", RH.UV6Kind = "uv6", RH.ColorKind = "color", RH.ColorInstanceKind = "instanceColor", RH.MatricesIndicesKind = "matricesIndices", RH.MatricesWeightsKind = "matricesWeights", RH.MatricesIndicesExtraKind = "matricesIndicesExtra", RH.MatricesWeightsExtraKind = "matricesWeightsExtra", RH.ANIMATIONTYPE_FLOAT = 0, RH.ANIMATIONTYPE_VECTOR3 = 1, RH.ANIMATIONTYPE_QUATERNION = 2, RH.ANIMATIONTYPE_MATRIX = 3, RH.ANIMATIONTYPE_COLOR3 = 4, RH.ANIMATIONTYPE_COLOR4 = 7, RH.ANIMATIONTYPE_VECTOR2 = 5, RH.ANIMATIONTYPE_SIZE = 6, RH.ShadowMinZ = 0, RH.ShadowMaxZ = 1e4, RH.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, RH.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1;
  },
  22743: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => RH.d
    });
    var RH = EH(22745);
    (0, EH(22755).e)();
    var hH = EH(22143);
    let TH = !1;
    !function () {
      if (TH) return;
      TH = !0;
      const HH = new WeakMap(),
        IH = new WeakMap(),
        EH = new WeakMap(),
        RH = new WeakMap();
      hH.e.prototype.getAlphaToCoverage = function () {
        var IH;
        return null !== (IH = HH.get(this)) && void 0 !== IH && IH;
      }, hH.e.prototype.setAlphaToCoverage = function (EH) {
        (HH.get(this) !== EH || this._gl && IH.get(this) !== this._gl) && (HH.set(this, EH), this._gl && (EH ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), IH.set(this, this._gl)));
      }, Object.defineProperty(hH.e.prototype, "currentSampleCount", {
        get: function () {
          if (this._currentRenderTarget) return this._currentRenderTarget.samples;
          if (!this._gl) return 1;
          var HH;
          RH.get(this) !== this._gl && (EH.set(this, null !== (HH = this._gl.getContextAttributes()) && void 0 !== HH && HH.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), RH.set(this, this._gl));
          return EH.get(this);
        },
        enumerable: !1,
        configurable: !0
      });
    }();
    var sH = EH(22034),
      eH = EH(21832),
      GH = EH(21930);
    let AH = !1;
    !function () {
      function HH(HH, IH, EH, RH) {
        let hH,
          TH = 1;
        1 === RH ? hH = new Float32Array(IH * EH * 4) : 2 === RH ? (hH = new Uint16Array(IH * EH * 4), TH = 15360) : hH = 7 === RH ? new Uint32Array(IH * EH * 4) : new Uint8Array(IH * EH * 4);
        for (let sH = 0; sH < IH; sH++) for (let RH = 0; RH < EH; RH++) {
          const EH = 3 * (RH * IH + sH),
            eH = 4 * (RH * IH + sH);
          hH[eH + 0] = HH[EH + 0], hH[eH + 1] = HH[EH + 1], hH[eH + 2] = HH[EH + 2], hH[eH + 3] = TH;
        }
        return hH;
      }
      function IH(HH) {
        return function (IH, EH, RH, hH, TH, eH, GH, AH) {
          let VH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            YH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const QH = HH ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            JH = HH ? 10 : 11,
            OH = new sH.b(this, JH);
          OH.baseWidth = EH, OH.baseHeight = RH, OH.baseDepth = hH, OH.width = EH, OH.height = RH, OH.depth = hH, OH.format = TH, OH.type = YH, OH.generateMipMaps = eH, OH.samplingMode = AH, HH ? OH.is3D = !0 : OH.is2DArray = !0, this._doNotHandleContextLost || (OH._bufferView = IH), HH ? this.updateRawTexture3D(OH, IH, TH, GH, VH, YH) : this.updateRawTexture2DArray(OH, IH, TH, GH, VH, YH), this._bindTextureDirectly(QH, OH, !0);
          const rH = this._getSamplingParameters(AH, eH);
          return this._gl.texParameteri(QH, this._gl.TEXTURE_MAG_FILTER, rH.mag), this._gl.texParameteri(QH, this._gl.TEXTURE_MIN_FILTER, rH.min), eH && this._gl.generateMipmap(QH), this._bindTextureDirectly(QH, null), this._internalTexturesCache.push(OH), OH;
        };
      }
      function EH(HH) {
        return function (IH, EH, RH, hH) {
          let TH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            sH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const eH = HH ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            GH = this._getWebGLTextureType(sH),
            AH = this._getInternalFormat(RH),
            VH = this._getRGBABufferInternalSizedFormat(sH, RH);
          this._bindTextureDirectly(eH, IH, !0), this._unpackFlipY(void 0 === hH || !!hH), this._doNotHandleContextLost || (IH._bufferView = EH, IH.format = RH, IH.invertY = hH, IH._compression = TH), IH.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), TH && EH ? this._gl.compressedTexImage3D(eH, 0, this.getCaps().s3tc[TH], IH.width, IH.height, IH.depth, 0, EH) : this._gl.texImage3D(eH, 0, VH, IH.width, IH.height, IH.depth, 0, AH, GH, EH), IH.generateMipMaps && this._gl.generateMipmap(eH), this._bindTextureDirectly(eH, null), IH.isReady = !0;
        };
      }
      AH || (AH = !0, hH.e.prototype.updateRawTexture = function (HH, IH, EH, RH) {
        let hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          sH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!HH) return;
        const eH = this._getRGBABufferInternalSizedFormat(TH, EH, sH),
          GH = this._getInternalFormat(EH),
          AH = this._getWebGLTextureType(TH);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, HH, !0), this._unpackFlipY(void 0 === RH || !!RH), this._doNotHandleContextLost || (HH._bufferView = IH, HH.format = EH, HH.type = TH, HH.invertY = RH, HH._compression = hH), HH.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), hH && IH ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[hH], HH.width, HH.height, 0, IH) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, eH, HH.width, HH.height, 0, GH, AH, IH), HH.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), HH.isReady = !0;
      }, hH.e.prototype.createRawTexture = function (HH, IH, EH, RH, hH, TH, eH) {
        let GH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          AH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          VH = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const YH = new sH.b(this, 3);
        YH.baseWidth = IH, YH.baseHeight = EH, YH.width = IH, YH.height = EH, YH.format = RH, YH.generateMipMaps = hH, YH.samplingMode = eH, YH.invertY = TH, YH._compression = GH, YH.type = AH, YH._useSRGBBuffer = this._getUseSRGBBuffer(VH, !hH), this._doNotHandleContextLost || (YH._bufferView = HH), this.updateRawTexture(YH, HH, RH, TH, GH, AH, YH._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, YH, !0);
        const QH = this._getSamplingParameters(eH, hH);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, QH.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, QH.min), hH && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(YH), YH;
      }, hH.e.prototype.createRawCubeTexture = function (HH, IH, EH, RH, hH, TH, AH) {
        let VH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const YH = this._gl,
          QH = new sH.b(this, 8);
        QH.isCube = !0, QH.format = EH, QH.type = RH, this._doNotHandleContextLost || (QH._bufferViewArray = HH);
        const JH = this._getWebGLTextureType(RH);
        let OH = this._getInternalFormat(EH);
        OH === YH.RGB && (OH = YH.RGBA), JH !== YH.FLOAT || this._caps.textureFloatLinearFiltering ? JH !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? JH !== YH.FLOAT || this._caps.textureFloatRender ? JH !== YH.HALF_FLOAT || this._caps.colorBufferFloat || (hH = !1, eH.e.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (hH = !1, eH.e.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (hH = !1, AH = 1, eH.e.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (hH = !1, AH = 1, eH.e.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const rH = IH,
          FH = rH;
        QH.width = rH, QH.height = FH, QH.invertY = TH, QH._compression = VH;
        if (!this.needPOTTextures || (0, GH.j)(QH.width) && (0, GH.j)(QH.height) || (hH = !1), HH) this.updateRawCubeTexture(QH, HH, EH, RH, TH, VH);else {
          const HH = this._getRGBABufferInternalSizedFormat(RH),
            IH = 0;
          this._bindTextureDirectly(YH.TEXTURE_CUBE_MAP, QH, !0);
          for (let EH = 0; EH < 6; EH++) VH ? YH.compressedTexImage2D(YH.TEXTURE_CUBE_MAP_POSITIVE_X + EH, IH, this.getCaps().s3tc[VH], QH.width, QH.height, 0, void 0) : YH.texImage2D(YH.TEXTURE_CUBE_MAP_POSITIVE_X + EH, IH, HH, QH.width, QH.height, 0, OH, JH, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null);
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, QH, !0), HH && hH && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const MH = this._getSamplingParameters(AH, hH);
        return YH.texParameteri(YH.TEXTURE_CUBE_MAP, YH.TEXTURE_MAG_FILTER, MH.mag), YH.texParameteri(YH.TEXTURE_CUBE_MAP, YH.TEXTURE_MIN_FILTER, MH.min), YH.texParameteri(YH.TEXTURE_CUBE_MAP, YH.TEXTURE_WRAP_S, YH.CLAMP_TO_EDGE), YH.texParameteri(YH.TEXTURE_CUBE_MAP, YH.TEXTURE_WRAP_T, YH.CLAMP_TO_EDGE), this._bindTextureDirectly(YH.TEXTURE_CUBE_MAP, null), QH.generateMipMaps = hH, QH.samplingMode = AH, QH.isReady = !0, QH;
      }, hH.e.prototype.updateRawCubeTexture = function (IH, EH, RH, hH, TH) {
        let sH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          eH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        IH._bufferViewArray = EH, IH.format = RH, IH.type = hH, IH.invertY = TH, IH._compression = sH;
        const AH = this._gl,
          VH = this._getWebGLTextureType(hH);
        let YH = this._getInternalFormat(RH);
        const QH = this._getRGBABufferInternalSizedFormat(hH);
        let JH = !1;
        YH === AH.RGB && (YH = AH.RGBA, JH = !0), this._bindTextureDirectly(AH.TEXTURE_CUBE_MAP, IH, !0), this._unpackFlipY(void 0 === TH || !!TH), IH.width % 4 !== 0 && AH.pixelStorei(AH.UNPACK_ALIGNMENT, 1);
        for (let GH = 0; GH < 6; GH++) {
          let RH = EH[GH];
          sH ? AH.compressedTexImage2D(AH.TEXTURE_CUBE_MAP_POSITIVE_X + GH, eH, this.getCaps().s3tc[sH], IH.width, IH.height, 0, RH) : (JH && (RH = HH(RH, IH.width, IH.height, hH)), AH.texImage2D(AH.TEXTURE_CUBE_MAP_POSITIVE_X + GH, eH, QH, IH.width, IH.height, 0, YH, VH, RH));
        }
        (!this.needPOTTextures || (0, GH.j)(IH.width) && (0, GH.j)(IH.height)) && IH.generateMipMaps && 0 === eH && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), IH.isReady = !0;
      }, hH.e.prototype.createRawCubeTextureFromUrl = function (IH, EH, RH, hH, TH, sH, eH, GH) {
        let AH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          VH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          YH = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          QH = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const JH = this._gl,
          OH = this.createRawCubeTexture(null, RH, hH, TH, !sH, QH, YH, null);
        null === EH || void 0 === EH || EH.addPendingData(OH), OH.url = IH, OH.isReady = !1, this._internalTexturesCache.push(OH);
        const rH = (HH, IH) => {
            null === EH || void 0 === EH || EH.removePendingData(OH), VH && VH(HH ? HH.status + " " + HH.statusText : "Failed to parse texture data", IH);
          },
          FH = async IH => {
            if (!OH._hardwareTexture) return;
            const RH = eH(IH);
            if (!RH) return;
            const sH = RH instanceof Promise ? await RH : RH,
              VH = OH.width;
            if (GH) {
              const IH = this._getWebGLTextureType(TH);
              let EH = this._getInternalFormat(hH);
              const RH = this._getRGBABufferInternalSizedFormat(TH);
              let eH = !1;
              EH === JH.RGB && (EH = JH.RGBA, eH = !0), this._bindTextureDirectly(JH.TEXTURE_CUBE_MAP, OH, !0), this._unpackFlipY(!1);
              const AH = GH(sH);
              for (let hH = 0; hH < AH.length; hH++) {
                const sH = VH >> hH;
                for (let GH = 0; GH < 6; GH++) {
                  let VH = AH[hH][GH];
                  eH && (VH = HH(VH, sH, sH, TH)), JH.texImage2D(GH, hH, RH, sH, sH, 0, EH, IH, VH);
                }
              }
              this._bindTextureDirectly(JH.TEXTURE_CUBE_MAP, null);
            } else this.updateRawCubeTexture(OH, sH, hH, TH, QH);
            OH.isReady = !0, null === EH || void 0 === EH || EH.removePendingData(OH), OH.onLoadedObservable.notifyObservers(OH), OH.onLoadedObservable.clear(), AH && AH();
          };
        return this._loadFile(IH, HH => {
          FH(HH).catch(HH => {
            rH(void 0, HH);
          });
        }, void 0, null === EH || void 0 === EH ? void 0 : EH.offlineProvider, !0, rH), OH;
      }, hH.e.prototype.createRawTexture2DArray = IH(!1), hH.e.prototype.createRawTexture3D = IH(!0), hH.e.prototype.updateRawTexture2DArray = EH(!1), hH.e.prototype.updateRawTexture3D = EH(!0));
    }();
    var VH = EH(21889);
    let YH = !1;
    YH || (YH = !0, hH.e.prototype._readTexturePixelsSync = function (HH, IH, EH) {
      let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        sH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        eH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        GH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        AH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const YH = this._gl;
      if (!YH) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const HH = YH.createFramebuffer();
        if (!HH) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = HH;
      }
      var QH;
      if (YH.bindFramebuffer(YH.FRAMEBUFFER, this._dummyFramebuffer), RH > -1 && (HH.is2DArray || HH.is3D)) YH.framebufferTextureLayer(YH.FRAMEBUFFER, YH.COLOR_ATTACHMENT0, null === (QH = HH._hardwareTexture) || void 0 === QH ? void 0 : QH.underlyingResource, hH, RH);else if (RH > -1) {
        var JH;
        YH.framebufferTexture2D(YH.FRAMEBUFFER, YH.COLOR_ATTACHMENT0, YH.TEXTURE_CUBE_MAP_POSITIVE_X + RH, null === (JH = HH._hardwareTexture) || void 0 === JH ? void 0 : JH.underlyingResource, hH);
      } else {
        var OH;
        YH.framebufferTexture2D(YH.FRAMEBUFFER, YH.COLOR_ATTACHMENT0, YH.TEXTURE_2D, null === (OH = HH._hardwareTexture) || void 0 === OH ? void 0 : OH.underlyingResource, hH);
      }
      let rH = void 0 !== HH.type ? this._getWebGLTextureType(HH.type) : YH.UNSIGNED_BYTE;
      return eH ? TH || (TH = (0, VH.g)(HH.type, 4 * IH * EH)) : rH === YH.UNSIGNED_BYTE ? (TH || (TH = new Uint8Array(4 * IH * EH)), rH = YH.UNSIGNED_BYTE) : (TH || (TH = new Float32Array(4 * IH * EH)), rH = YH.FLOAT), sH && this.flushFramebuffer(), YH.readPixels(GH, AH, IH, EH, YH.RGBA, rH, TH), YH.bindFramebuffer(YH.FRAMEBUFFER, this._currentFramebuffer), TH;
    }, hH.e.prototype._readTexturePixels = function (HH, IH, EH) {
      let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        sH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        eH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        GH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        AH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH));
    }), (0, EH(22135).b)();
    var QH = EH(17);
    let JH = !1;
    JH || (JH = !0, hH.e.prototype._createDepthStencilCubeTexture = function (HH, IH) {
      const EH = new sH.b(this, 12);
      if (EH.isCube = !0, 1 === this.webGLVersion) return eH.e.Error("Depth cube texture is not supported by WebGL 1."), EH;
      const RH = (0, QH.b)({
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1
        }, IH),
        hH = this._gl;
      this._bindTextureDirectly(hH.TEXTURE_CUBE_MAP, EH, !0), this._setupDepthStencilTexture(EH, HH, RH.bilinearFiltering, RH.comparisonFunction);
      for (let TH = 0; TH < 6; TH++) RH.generateStencil ? hH.texImage2D(hH.TEXTURE_CUBE_MAP_POSITIVE_X + TH, 0, hH.DEPTH24_STENCIL8, HH, HH, 0, hH.DEPTH_STENCIL, hH.UNSIGNED_INT_24_8, null) : hH.texImage2D(hH.TEXTURE_CUBE_MAP_POSITIVE_X + TH, 0, hH.DEPTH_COMPONENT24, HH, HH, 0, hH.DEPTH_COMPONENT, hH.UNSIGNED_INT, null);
      return this._bindTextureDirectly(hH.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(EH), EH;
    }, hH.e.prototype._setCubeMapTextureParams = function (HH, IH, EH) {
      const RH = this._gl;
      RH.texParameteri(RH.TEXTURE_CUBE_MAP, RH.TEXTURE_MAG_FILTER, RH.LINEAR), RH.texParameteri(RH.TEXTURE_CUBE_MAP, RH.TEXTURE_MIN_FILTER, IH ? RH.LINEAR_MIPMAP_LINEAR : RH.LINEAR), RH.texParameteri(RH.TEXTURE_CUBE_MAP, RH.TEXTURE_WRAP_S, RH.CLAMP_TO_EDGE), RH.texParameteri(RH.TEXTURE_CUBE_MAP, RH.TEXTURE_WRAP_T, RH.CLAMP_TO_EDGE), HH.samplingMode = IH ? 3 : 2, IH && this.getCaps().textureMaxLevel && void 0 !== EH && EH > 0 && (RH.texParameteri(RH.TEXTURE_CUBE_MAP, RH.TEXTURE_MAX_LEVEL, EH), HH._maxLodLevel = EH), this._bindTextureDirectly(RH.TEXTURE_CUBE_MAP, null);
    }, hH.e.prototype.createCubeTexture = function (HH, IH, EH, RH) {
      let hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        sH = arguments.length > 6 ? arguments[6] : void 0,
        AH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        VH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        YH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        QH = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        JH = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        OH = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        rH = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const FH = this._gl;
      return this.createCubeTextureBase(HH, IH, EH, !!RH, hH, TH, sH, AH, VH, YH, QH, JH, HH => this._bindTextureDirectly(FH.TEXTURE_CUBE_MAP, HH, !0), (HH, IH) => {
        const EH = this.needPOTTextures ? (0, GH.i)(IH[0].width, this._caps.maxCubemapTextureSize) : IH[0].width,
          TH = EH,
          AH = [FH.TEXTURE_CUBE_MAP_POSITIVE_X, FH.TEXTURE_CUBE_MAP_POSITIVE_Y, FH.TEXTURE_CUBE_MAP_POSITIVE_Z, FH.TEXTURE_CUBE_MAP_NEGATIVE_X, FH.TEXTURE_CUBE_MAP_NEGATIVE_Y, FH.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(FH.TEXTURE_CUBE_MAP, HH, !0), this._unpackFlipY(!1);
        const VH = sH ? this._getInternalFormat(sH, HH._useSRGBBuffer) : HH._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : FH.RGBA;
        let YH = sH ? this._getInternalFormat(sH) : FH.RGBA;
        HH._useSRGBBuffer && 1 === this.webGLVersion && (YH = VH);
        for (let RH = 0; RH < AH.length; RH++) if (IH[RH].width !== EH || IH[RH].height !== TH) {
          if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void eH.e.Warn("Cannot create canvas to resize texture.");
          this._workingCanvas.width = EH, this._workingCanvas.height = TH, this._workingContext.drawImage(IH[RH], 0, 0, IH[RH].width, IH[RH].height, 0, 0, EH, TH), FH.texImage2D(AH[RH], 0, VH, YH, FH.UNSIGNED_BYTE, this._workingCanvas);
        } else FH.texImage2D(AH[RH], 0, VH, YH, FH.UNSIGNED_BYTE, IH[RH]);
        RH || FH.generateMipmap(FH.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(HH, !RH), HH.width = EH, HH.height = TH, HH.isReady = !0, sH && (HH.format = sH), HH.onLoadedObservable.notifyObservers(HH), HH.onLoadedObservable.clear(), hH && hH();
      }, !!OH, rH);
    }, hH.e.prototype.generateMipMapsForCubemap = function (HH) {
      let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (HH.generateMipMaps) {
        const EH = this._gl;
        this._bindTextureDirectly(EH.TEXTURE_CUBE_MAP, HH, !0), EH.generateMipmap(EH.TEXTURE_CUBE_MAP), IH && this._bindTextureDirectly(EH.TEXTURE_CUBE_MAP, null);
      }
    });
    EH(22764);
    let OH = !1;
    OH || (OH = !0, hH.e.prototype.setDepthStencilTexture = function (HH, IH, EH, RH) {
      void 0 !== HH && (IH && (this._boundUniforms[HH] = IH), EH && EH.depthStencilTexture ? this._setTexture(HH, EH, !1, !0, RH) : this._setTexture(HH, null, void 0, void 0, RH));
    });
    let rH = !1;
    rH || (rH = !0, hH.e.prototype.createRenderTargetCubeTexture = function (HH, IH) {
      const EH = this._createHardwareRenderTargetWrapper(!1, !0, HH),
        RH = (0, QH.b)({
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5
        }, IH);
      RH.generateStencilBuffer = RH.generateDepthBuffer && RH.generateStencilBuffer, (1 !== RH.type || this._caps.textureFloatLinearFiltering) && (2 !== RH.type || this._caps.textureHalfFloatLinearFiltering) || (RH.samplingMode = 1);
      const hH = this._gl,
        TH = new sH.b(this, 5);
      this._bindTextureDirectly(hH.TEXTURE_CUBE_MAP, TH, !0);
      const GH = this._getSamplingParameters(RH.samplingMode, RH.generateMipMaps);
      1 !== RH.type || this._caps.textureFloat || (RH.type = 0, eH.e.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), hH.texParameteri(hH.TEXTURE_CUBE_MAP, hH.TEXTURE_MAG_FILTER, GH.mag), hH.texParameteri(hH.TEXTURE_CUBE_MAP, hH.TEXTURE_MIN_FILTER, GH.min), hH.texParameteri(hH.TEXTURE_CUBE_MAP, hH.TEXTURE_WRAP_S, hH.CLAMP_TO_EDGE), hH.texParameteri(hH.TEXTURE_CUBE_MAP, hH.TEXTURE_WRAP_T, hH.CLAMP_TO_EDGE);
      for (let sH = 0; sH < 6; sH++) hH.texImage2D(hH.TEXTURE_CUBE_MAP_POSITIVE_X + sH, 0, this._getRGBABufferInternalSizedFormat(RH.type, RH.format), HH, HH, 0, this._getInternalFormat(RH.format), this._getWebGLTextureType(RH.type), null);
      const AH = hH.createFramebuffer();
      return this._bindUnboundFramebuffer(AH), EH._depthStencilBuffer = this._setupFramebufferDepthAttachments(RH.generateStencilBuffer, RH.generateDepthBuffer, HH, HH), RH.generateMipMaps && hH.generateMipmap(hH.TEXTURE_CUBE_MAP), this._bindTextureDirectly(hH.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), EH._framebuffer = AH, EH._generateDepthBuffer = RH.generateDepthBuffer, EH._generateStencilBuffer = RH.generateStencilBuffer, TH.width = HH, TH.height = HH, TH.isReady = !0, TH.isCube = !0, TH.samples = 1, TH.generateMipMaps = RH.generateMipMaps, TH.samplingMode = RH.samplingMode, TH.type = RH.type, TH.format = RH.format, this._internalTexturesCache.push(TH), EH.setTextures(TH), EH;
    });
    var FH = EH(22773),
      MH = EH(22094);
    let NH = !1;
    NH || (NH = !0, hH.e.prototype.createPrefilteredCubeTexture = function (HH, IH, RH, hH) {
      let TH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        GH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        AH = arguments.length > 6 ? arguments[6] : void 0,
        VH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        YH = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
      return this.createCubeTexture(HH, IH, null, !1, async HH => {
        if (!HH) return void (TH && TH(null));
        const GH = HH.texture;
        var AH;
        if (YH ? HH.info.sphericalPolynomial && (GH._sphericalPolynomial = HH.info.sphericalPolynomial) : GH._sphericalPolynomial = null !== (AH = GH._sphericalPolynomial) && void 0 !== AH ? AH : new FH.f(), GH._source = 9, this.getCaps().textureLOD) return void (TH && TH(GH));
        const VH = this._gl,
          QH = HH.width;
        if (!QH) return;
        const {
            DDSTools: JH
          } = await Promise.all([EH.e(120), EH.e(60)]).then(EH.bind(EH, 24801)),
          OH = [];
        for (let EH = 0; EH < 3; EH++) {
          const TH = 1 - EH / 2,
            AH = hH,
            YH = Math.log2(QH) * RH + hH,
            rH = AH + (YH - AH) * TH,
            FH = Math.round(Math.min(Math.max(rH, 0), YH)),
            NH = new sH.b(this, 2);
          if (NH.type = GH.type, NH.format = GH.format, NH.width = Math.pow(2, Math.max(Math.log2(QH) - FH, 0)), NH.height = NH.width, NH.isCube = !0, NH._cachedWrapU = 0, NH._cachedWrapV = 0, this._bindTextureDirectly(VH.TEXTURE_CUBE_MAP, NH, !0), NH.samplingMode = 2, VH.texParameteri(VH.TEXTURE_CUBE_MAP, VH.TEXTURE_MAG_FILTER, VH.LINEAR), VH.texParameteri(VH.TEXTURE_CUBE_MAP, VH.TEXTURE_MIN_FILTER, VH.LINEAR), VH.texParameteri(VH.TEXTURE_CUBE_MAP, VH.TEXTURE_WRAP_S, VH.CLAMP_TO_EDGE), VH.texParameteri(VH.TEXTURE_CUBE_MAP, VH.TEXTURE_WRAP_T, VH.CLAMP_TO_EDGE), HH.isDDS) {
            const IH = HH.info,
              EH = HH.data;
            this._unpackFlipY(IH.isCompressed), JH.UploadDDSLevels(this, NH, EH, IH, !0, 6, FH);
          } else eH.e.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(VH.TEXTURE_CUBE_MAP, null);
          const iI = new MH.b(IH);
          iI._isCube = !0, iI._texture = NH, NH.isReady = !0, OH.push(iI);
        }
        GH._lodTextureHigh = OH[2], GH._lodTextureMid = OH[1], GH._lodTextureLow = OH[0], TH && TH(GH);
      }, GH, AH, VH, YH, RH, hH);
    });
    var iI = EH(22153);
    let DH = !1;
    DH || (DH = !0, hH.e.prototype.createUniformBuffer = function (HH, IH) {
      const EH = this._gl.createBuffer();
      if (!EH) throw new Error("Unable to create uniform buffer");
      const RH = new iI.c(EH);
      return this.bindUniformBuffer(RH), HH instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, HH, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(HH), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), RH.references = 1, RH;
    }, hH.e.prototype.createDynamicUniformBuffer = function (HH, IH) {
      const EH = this._gl.createBuffer();
      if (!EH) throw new Error("Unable to create dynamic uniform buffer");
      const RH = new iI.c(EH);
      return this.bindUniformBuffer(RH), HH instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, HH, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(HH), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), RH.references = 1, RH;
    }, hH.e.prototype.updateUniformBuffer = function (HH, IH, EH, RH) {
      this.bindUniformBuffer(HH), void 0 === EH && (EH = 0), void 0 === RH ? IH instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, EH, IH) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, EH, new Float32Array(IH)) : IH instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, IH.subarray(EH, EH + RH)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(IH).subarray(EH, EH + RH)), this.bindUniformBuffer(null);
    }, hH.e.prototype.bindUniformBuffer = function (HH) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, HH ? HH.underlyingResource : null);
    }, hH.e.prototype.bindUniformBufferBase = function (HH, IH, EH) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, IH, HH ? HH.underlyingResource : null);
    }, hH.e.prototype.bindUniformBlock = function (HH, IH, EH) {
      const RH = HH.program,
        hH = this._gl.getUniformBlockIndex(RH, IH);
      4294967295 !== hH && this._gl.uniformBlockBinding(RH, hH, EH);
    });
    var PH = EH(21828),
      XH = EH(22004);
    let mI = !1;
    mI || (mI = !0, XH.c.prototype.displayLoadingUI = function () {
      if (!(0, PH.m)()) return;
      const HH = this.loadingScreen;
      HH && HH.displayLoadingUI();
    }, XH.c.prototype.hideLoadingUI = function () {
      if (!(0, PH.m)()) return;
      const HH = this._loadingScreen;
      HH && HH.hideLoadingUI();
    }, Object.defineProperty(XH.c.prototype, "loadingScreen", {
      get: function () {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = XH.c.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen;
      },
      set: function (HH) {
        this._loadingScreen = HH;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(XH.c.prototype, "loadingUIText", {
      set: function (HH) {
        this.loadingScreen.loadingUIText = HH;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(XH.c.prototype, "loadingUIBackgroundColor", {
      set: function (HH) {
        this.loadingScreen.loadingUIBackgroundColor = HH;
      },
      enumerable: !0,
      configurable: !0
    })), (0, EH(22752).c)();
    let ZH = !1;
    ZH || (ZH = !0, XH.c.prototype.getInputElement = function () {
      return this._renderingCanvas;
    }, XH.c.prototype.getDepthFunction = function () {
      return this._depthCullingState.depthFunc;
    }, XH.c.prototype.setDepthFunction = function (HH) {
      this._depthCullingState.depthFunc = HH;
    }, XH.c.prototype.setDepthFunctionToGreater = function () {
      this.setDepthFunction(516);
    }, XH.c.prototype.setDepthFunctionToGreaterOrEqual = function () {
      this.setDepthFunction(518);
    }, XH.c.prototype.setDepthFunctionToLess = function () {
      this.setDepthFunction(513);
    }, XH.c.prototype.setDepthFunctionToLessOrEqual = function () {
      this.setDepthFunction(515);
    }, XH.c.prototype.getDepthWrite = function () {
      return this._depthCullingState.depthMask;
    }, XH.c.prototype.setDepthWrite = function (HH) {
      this._depthCullingState.depthMask = HH;
    }, XH.c.prototype.setAlphaConstants = function (HH, IH, EH, RH) {
      this._alphaState.setAlphaBlendConstants(HH, IH, EH, RH);
    }, XH.c.prototype.getAlphaMode = function () {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[HH];
    }, XH.c.prototype.getAlphaEquation = function () {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[HH];
    });
    let qH = !1;
    qH || (qH = !0, XH.c.prototype.getStencilBuffer = function () {
      return this._stencilState.stencilTest;
    }, XH.c.prototype.setStencilBuffer = function (HH) {
      this._stencilState.stencilTest = HH;
    }, XH.c.prototype.getStencilMask = function () {
      return this._stencilState.stencilMask;
    }, XH.c.prototype.setStencilMask = function (HH) {
      this._stencilState.stencilMask = HH;
    }, XH.c.prototype.getStencilFunction = function () {
      return this._stencilState.stencilFunc;
    }, XH.c.prototype.getStencilBackFunction = function () {
      return this._stencilState.stencilBackFunc;
    }, XH.c.prototype.getStencilFunctionReference = function () {
      return this._stencilState.stencilFuncRef;
    }, XH.c.prototype.getStencilFunctionMask = function () {
      return this._stencilState.stencilFuncMask;
    }, XH.c.prototype.setStencilFunction = function (HH) {
      this._stencilState.stencilFunc = HH;
    }, XH.c.prototype.setStencilBackFunction = function (HH) {
      this._stencilState.stencilBackFunc = HH;
    }, XH.c.prototype.setStencilFunctionReference = function (HH) {
      this._stencilState.stencilFuncRef = HH;
    }, XH.c.prototype.setStencilFunctionMask = function (HH) {
      this._stencilState.stencilFuncMask = HH;
    }, XH.c.prototype.getStencilOperationFail = function () {
      return this._stencilState.stencilOpStencilFail;
    }, XH.c.prototype.getStencilBackOperationFail = function () {
      return this._stencilState.stencilBackOpStencilFail;
    }, XH.c.prototype.getStencilOperationDepthFail = function () {
      return this._stencilState.stencilOpDepthFail;
    }, XH.c.prototype.getStencilBackOperationDepthFail = function () {
      return this._stencilState.stencilBackOpDepthFail;
    }, XH.c.prototype.getStencilOperationPass = function () {
      return this._stencilState.stencilOpStencilDepthPass;
    }, XH.c.prototype.getStencilBackOperationPass = function () {
      return this._stencilState.stencilBackOpStencilDepthPass;
    }, XH.c.prototype.setStencilOperationFail = function (HH) {
      this._stencilState.stencilOpStencilFail = HH;
    }, XH.c.prototype.setStencilBackOperationFail = function (HH) {
      this._stencilState.stencilBackOpStencilFail = HH;
    }, XH.c.prototype.setStencilOperationDepthFail = function (HH) {
      this._stencilState.stencilOpDepthFail = HH;
    }, XH.c.prototype.setStencilBackOperationDepthFail = function (HH) {
      this._stencilState.stencilBackOpDepthFail = HH;
    }, XH.c.prototype.setStencilOperationPass = function (HH) {
      this._stencilState.stencilOpStencilDepthPass = HH;
    }, XH.c.prototype.setStencilBackOperationPass = function (HH) {
      this._stencilState.stencilBackOpStencilDepthPass = HH;
    }, XH.c.prototype.cacheStencilState = function () {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference();
    }, XH.c.prototype.restoreStencilState = function () {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference);
    });
    EH(22779);
    let LH = !1;
    LH || (LH = !0, XH.c.prototype.createDepthStencilTexture = function (HH, IH, EH) {
      if (IH.isCube) {
        const EH = HH.width || HH;
        return this._createDepthStencilCubeTexture(EH, IH);
      }
      return this._createDepthStencilTexture(HH, IH, EH);
    });
    EH(22784), EH(22787);
    let gH = !1;
    gH || (gH = !0, hH.e.prototype.enableScissor = function (HH, IH, EH, RH) {
      const hH = this._gl;
      hH.enable(hH.SCISSOR_TEST), hH.scissor(HH, IH, EH, RH);
    }, hH.e.prototype.disableScissor = function () {
      const HH = this._gl;
      HH.disable(HH.SCISSOR_TEST);
    });
  },
  22745: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => PH
    });
    var RH = EH(22034),
      hH = EH(21782),
      TH = EH(22143),
      sH = EH(21850);
    class eH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new GH(HH);
      }
      sampleFrame() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sH.d.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const IH = HH - this._lastFrameTimeMs;
            this._rollingFrameTime.add(IH);
          }
          this._lastFrameTimeMs = HH;
        }
      }
      get averageFrameTime() {
        return this._rollingFrameTime.average;
      }
      get averageFrameTimeVariance() {
        return this._rollingFrameTime.variance;
      }
      get instantaneousFrameTime() {
        return this._rollingFrameTime.history(0);
      }
      get averageFPS() {
        return 1e3 / this._rollingFrameTime.average;
      }
      get instantaneousFPS() {
        const HH = this._rollingFrameTime.history(0);
        return 0 === HH ? 0 : 1e3 / HH;
      }
      get isSaturated() {
        return this._rollingFrameTime.isSaturated();
      }
      enable() {
        this._enabled = !0;
      }
      disable() {
        this._enabled = !1, this._lastFrameTimeMs = null;
      }
      get isEnabled() {
        return this._enabled;
      }
      reset() {
        this._lastFrameTimeMs = null, this._rollingFrameTime.reset();
      }
    }
    class GH {
      constructor(HH) {
        this._samples = new Array(HH), this.reset();
      }
      add(HH) {
        let IH;
        if (this.isSaturated()) {
          const HH = this._samples[this._pos];
          IH = HH - this.average, this.average -= IH / (this._sampleCount - 1), this._m2 -= IH * (HH - this.average);
        } else this._sampleCount++;
        IH = HH - this.average, this.average += IH / this._sampleCount, this._m2 += IH * (HH - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = HH, this._pos++, this._pos %= this._samples.length;
      }
      history(HH) {
        if (HH >= this._sampleCount || HH >= this._samples.length) return 0;
        const IH = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(IH - HH)];
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length;
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0;
      }
      _wrapPosition(HH) {
        const IH = this._samples.length;
        return (HH % IH + IH) % IH;
      }
    }
    var AH = EH(22153),
      VH = EH(21832),
      YH = EH(22156),
      QH = EH(22004),
      JH = EH(21828);
    function OH(HH) {
      const IH = function (HH) {
        if (!(0, JH.e)() || !document.body) return null;
        const IH = document.createElement("span");
        IH.textContent = "Hg", IH.style.font = HH;
        const EH = document.createElement("div");
        EH.style.display = "inline-block", EH.style.width = "1px", EH.style.height = "0px", EH.style.verticalAlign = "bottom";
        const RH = document.createElement("div");
        let hH, TH;
        RH.style.whiteSpace = "nowrap", RH.appendChild(IH), RH.appendChild(EH), document.body.appendChild(RH);
        try {
          TH = EH.getBoundingClientRect().top - IH.getBoundingClientRect().top, EH.style.verticalAlign = "baseline", hH = EH.getBoundingClientRect().top - IH.getBoundingClientRect().top;
        } finally {
          document.body.removeChild(RH);
        }
        const sH = {
          ascent: hH,
          height: TH,
          descent: TH - hH
        };
        return rH(sH) ? sH : null;
      }(HH);
      if (IH) return IH;
      const EH = function (HH) {
        let IH = null;
        try {
          var EH, RH, hH;
          "undefined" !== typeof OffscreenCanvas ? IH = new OffscreenCanvas(64, 64) : (0, JH.e)() && "function" === typeof document.createElement && (IH = document.createElement("canvas"), IH.width = 64, IH.height = 64);
          const TH = null === (EH = IH) || void 0 === EH ? void 0 : EH.getContext("2d");
          if (!TH) return null;
          TH.font = HH;
          const sH = TH.measureText("Hg"),
            eH = Number(null !== (RH = sH.actualBoundingBoxAscent) && void 0 !== RH ? RH : sH.fontBoundingBoxAscent),
            GH = Number(null !== (hH = sH.actualBoundingBoxDescent) && void 0 !== hH ? hH : sH.fontBoundingBoxDescent),
            AH = {
              ascent: eH,
              height: eH + GH,
              descent: GH
            };
          return rH(AH) ? AH : null;
        } catch (TH) {
          return null;
        } finally {
          const HH = IH;
          "function" === typeof (null === HH || void 0 === HH ? void 0 : HH.dispose) && HH.dispose();
        }
      }(HH);
      return EH || function (HH) {
        const IH = Math.max(1, function (HH) {
            const IH = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(HH || ""));
            return IH ? Number(IH[1]) : 16;
          }(HH)),
          EH = .8 * IH,
          RH = .2 * IH;
        return {
          ascent: EH,
          height: EH + RH,
          descent: RH
        };
      }(HH);
    }
    function rH(HH) {
      return Number.isFinite(HH.ascent) && Number.isFinite(HH.height) && Number.isFinite(HH.descent) && HH.height > 0;
    }
    function FH(HH) {
      if (HH.requestPointerLock) {
        const IH = HH.requestPointerLock();
        IH instanceof Promise ? IH.then(() => {
          HH.focus();
        }).catch(() => {}) : HH.focus();
      }
    }
    var MH = EH(22346),
      NH = EH(21900),
      iI = EH(22752),
      DH = EH(21997);
    class PH extends TH.e {
      static get NpmPackage() {
        return QH.c.NpmPackage;
      }
      static get Version() {
        return QH.c.Version;
      }
      static get Instances() {
        return hH.e.Instances;
      }
      static get LastCreatedEngine() {
        return hH.e.LastCreatedEngine;
      }
      static get LastCreatedScene() {
        return hH.e.LastCreatedScene;
      }
      static DefaultLoadingScreenFactory(HH) {
        return QH.c.DefaultLoadingScreenFactory(HH);
      }
      get _supportsHardwareTextureRescaling() {
        return !!PH._RescalePostProcessFactory;
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0;
      }
      get performanceMonitor() {
        return this._performanceMonitor;
      }
      constructor(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, iI.c)(), (0, DH.b)(), super(HH, IH, EH, RH), this._performanceMonitor = new eH(), this._drawCalls = new MH.d(), HH && (this._features.supportRenderPasses = !0);
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null;
      }
      _sharedInit(HH) {
        super._sharedInit(HH), function (HH, IH, EH) {
          HH._onCanvasFocus = () => {
            HH.onCanvasFocusObservable.notifyObservers(HH);
          }, HH._onCanvasBlur = () => {
            HH.onCanvasBlurObservable.notifyObservers(HH);
          }, HH._onCanvasContextMenu = IH => {
            HH.disableContextMenu && IH.preventDefault();
          }, IH.addEventListener("focus", HH._onCanvasFocus), IH.addEventListener("blur", HH._onCanvasBlur), IH.addEventListener("contextmenu", HH._onCanvasContextMenu), HH._onBlur = () => {
            HH.disablePerformanceMonitorInBackground && HH.performanceMonitor.disable(), HH._windowIsBackground = !0;
          }, HH._onFocus = () => {
            HH.disablePerformanceMonitorInBackground && HH.performanceMonitor.enable(), HH._windowIsBackground = !1;
          }, HH._onCanvasPointerOut = EH => {
            document.elementFromPoint(EH.clientX, EH.clientY) !== IH && HH.onCanvasPointerOutObservable.notifyObservers(EH);
          };
          const RH = HH.getHostWindow();
          RH && "function" === typeof RH.addEventListener && (RH.addEventListener("blur", HH._onBlur), RH.addEventListener("focus", HH._onFocus)), IH.addEventListener("pointerout", HH._onCanvasPointerOut), EH.doNotHandleTouchAction || function (HH) {
            HH && HH.setAttribute && (HH.setAttribute("touch-action", "none"), HH.style.touchAction = "none", HH.style.webkitTapHighlightColor = "transparent");
          }(IH), !QH.c.audioEngine && EH.audioEngine && QH.c.AudioEngineFactory && (QH.c.audioEngine = QH.c.AudioEngineFactory(HH.getRenderingCanvas(), HH.getAudioContext(), HH.getAudioDestination())), (0, JH.e)() && (HH._onFullscreenChange = () => {
            HH.isFullscreen = !!document.fullscreenElement, HH.isFullscreen && HH._pointerLockRequested && IH && FH(IH);
          }, document.addEventListener("fullscreenchange", HH._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", HH._onFullscreenChange, !1), HH._onPointerLockChange = () => {
            HH.isPointerLock = document.pointerLockElement === IH;
          }, document.addEventListener("pointerlockchange", HH._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", HH._onPointerLockChange, !1)), HH.enableOfflineSupport = void 0 !== QH.c.OfflineProviderFactory, HH._deterministicLockstep = !!EH.deterministicLockstep, HH._lockstepMaxSteps = EH.lockstepMaxSteps || 0, HH._timeStep = EH.timeStep || 1 / 60;
        }(this, HH, this._creationOptions);
      }
      resizeImageBitmap(HH, IH, EH) {
        return function (HH, IH, EH, RH) {
          const hH = HH.createCanvas(EH, RH).getContext("2d");
          if (!hH) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return hH.drawImage(IH, 0, 0), hH.getImageData(0, 0, EH, RH).data;
        }(this, HH, IH, EH);
      }
      async _createImageBitmapFromSource(HH, IH) {
        return await async function (HH, IH, EH) {
          return await new Promise((RH, hH) => {
            const TH = new Image();
            TH.onload = () => {
              TH.decode().then(() => {
                HH.createImageBitmap(TH, EH).then(HH => {
                  RH(HH);
                });
              });
            }, TH.onerror = () => {
              hH("Error loading image ".concat(TH.src));
            }, TH.src = IH;
          });
        }(this, HH, IH);
      }
      switchFullscreen(HH) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(HH);
      }
      enterFullscreen(HH) {
        this.isFullscreen || (this._pointerLockRequested = HH, this._renderingCanvas && function (HH) {
          const IH = HH.requestFullscreen || HH.webkitRequestFullscreen;
          IH && IH.call(HH);
        }(this._renderingCanvas));
      }
      exitFullscreen() {
        this.isFullscreen && function () {
          const HH = document;
          document.exitFullscreen ? document.exitFullscreen() : HH.webkitCancelFullScreen && HH.webkitCancelFullScreen();
        }();
      }
      setDitheringState(HH) {
        HH ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER);
      }
      setRasterizerState(HH) {
        HH ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD);
      }
      setDirectViewport(HH, IH, EH, RH) {
        const hH = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(HH, IH, EH, RH), hH;
      }
      scissorClear(HH, IH, EH, RH, hH) {
        this.enableScissor(HH, IH, EH, RH), this.clear(hH, !0, !0, !0), this.disableScissor();
      }
      getVertexShaderSource(HH) {
        const IH = this._gl.getAttachedShaders(HH);
        return IH ? this._gl.getShaderSource(IH[0]) : null;
      }
      getFragmentShaderSource(HH) {
        const IH = this._gl.getAttachedShaders(HH);
        return IH ? this._gl.getShaderSource(IH[1]) : null;
      }
      set framebufferDimensionsObject(HH) {
        this._framebufferDimensionsObject = HH, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this);
      }
      _rebuildBuffers() {
        for (const HH of this.scenes) HH.resetCachedMaterial(), HH._rebuildGeometries();
        for (const HH of this._virtualScenes) HH.resetCachedMaterial(), HH._rebuildGeometries();
        super._rebuildBuffers();
      }
      getFontOffset(HH) {
        return OH(HH);
      }
      enterPointerlock() {
        this._renderingCanvas && FH(this._renderingCanvas);
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock();
      }
      hM() {
        this._measureFps(), super.hM();
      }
      _deletePipelineContext(HH) {
        const IH = HH;
        IH && IH.program && IH.transformFeedback && (this.deleteTransformFeedback(IH.transformFeedback), IH.transformFeedback = null), super._deletePipelineContext(HH);
      }
      createShaderProgram(HH, IH, EH, RH, hH) {
        let TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        hH = hH || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const sH = super.createShaderProgram(HH, IH, EH, RH, hH, TH);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), sH;
      }
      _createShaderProgram(HH, IH, EH, RH) {
        let hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const TH = RH.createProgram();
        if (HH.program = TH, !TH) throw new Error("Unable to create program");
        if (RH.attachShader(TH, IH), RH.attachShader(TH, EH), this.webGLVersion > 1 && hH) {
          const IH = this.createTransformFeedback();
          this.bindTransformFeedback(IH), this.setTranformFeedbackVaryings(TH, hH), HH.transformFeedback = IH;
        }
        return RH.linkProgram(TH), this.webGLVersion > 1 && hH && this.bindTransformFeedback(null), HH.context = RH, HH.vertexShader = IH, HH.fragmentShader = EH, HH.isParallelCompiled || this._finalizePipelineContext(HH), TH;
      }
      _releaseTexture(HH) {
        super._releaseTexture(HH);
      }
      _releaseRenderTargetWrapper(HH) {
        super._releaseRenderTargetWrapper(HH);
        for (const IH of this.scenes) {
          for (const EH of IH.postProcesses) EH._outputTexture === HH && (EH._outputTexture = null);
          for (const EH of IH.cameras) for (const IH of EH._postProcesses) IH && IH._outputTexture === HH && (IH._outputTexture = null);
        }
      }
      _rescaleTexture(HH, IH, EH, RH, hH) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const TH = this.createRenderTargetTexture({
          width: IH.width,
          height: IH.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && PH._RescalePostProcessFactory && (this._rescalePostProcess = PH._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const sH = () => {
              this._rescalePostProcess.onApply = function (IH) {
                IH._bindTexture("textureSampler", HH);
              };
              let sH = EH;
              sH || (sH = this.scenes[this.scenes.length - 1]), sH.postProcessManager.directRender([this._rescalePostProcess], TH, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, IH, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, RH, 0, 0, IH.width, IH.height, 0), this.unBindFramebuffer(TH), TH.dispose(), hH && hH();
            },
            eH = this._rescalePostProcess.getEffect();
          eH ? eH.executeWhenCompiled(sH) : this._rescalePostProcess.onEffectCreatedObservable.addOnce(HH => {
            HH.executeWhenCompiled(sH);
          });
        }
      }
      wrapWebGLTexture(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          TH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const sH = new YH.d(HH, this._gl),
          eH = new RH.b(this, 15, !0);
        return eH._hardwareTexture = sH, eH.baseWidth = hH, eH.baseHeight = TH, eH.width = hH, eH.height = TH, eH.isReady = !0, eH.useMipMaps = IH, this.updateTextureSamplingMode(EH, eH), eH;
      }
      updateWrappedWebGLTexture(HH, IH) {
        if (15 !== HH.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const hH of this._renderTargetWrapperCache) {
          var EH;
          if (null !== (EH = hH.textures) && void 0 !== EH && EH.includes(HH)) {
            if (hH.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (hH._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.");
          }
        }
        HH._hardwareTexture = new YH.d(IH, this._gl), HH.isReady = !0, HH._cachedCoordinatesMode = null, HH._cachedWrapU = null, HH._cachedWrapV = null, HH._cachedWrapR = null, HH._cachedAnisotropicFilteringLevel = null;
        for (const hH in this._boundTexturesCache) this._boundTexturesCache[hH] === HH && (this._boundTexturesCache[hH] = null);
        this.updateTextureSamplingMode(HH.samplingMode, HH);
        const RH = this._gl;
        for (const hH of this._renderTargetWrapperCache) {
          if (hH.texture !== HH) continue;
          const EH = hH,
            TH = hH.samples,
            sH = TH > 1;
          EH._framebuffer && RH.deleteFramebuffer(EH._framebuffer), !sH && EH._depthStencilBuffer && (RH.deleteRenderbuffer(EH._depthStencilBuffer), EH._depthStencilBuffer = null);
          const eH = this._currentFramebuffer,
            GH = RH.createFramebuffer();
          this._bindUnboundFramebuffer(GH), RH.framebufferTexture2D(RH.FRAMEBUFFER, RH.COLOR_ATTACHMENT0, RH.TEXTURE_2D, IH, 0), sH || (EH._depthStencilBuffer = this._setupFramebufferDepthAttachments(hH._generateStencilBuffer, hH._generateDepthBuffer, hH.width, hH.height)), this._bindUnboundFramebuffer(eH), EH._framebuffer = GH, sH && (hH._samples = 1, this.updateRenderTargetTextureSampleCount(EH, TH));
        }
      }
      _uploadImageToTexture(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const hH = this._gl,
          TH = this._getWebGLTextureType(HH.type),
          sH = this._getInternalFormat(HH.format),
          eH = this._getRGBABufferInternalSizedFormat(HH.type, sH),
          GH = HH.isCube ? hH.TEXTURE_CUBE_MAP : hH.TEXTURE_2D;
        this._bindTextureDirectly(GH, HH, !0), this._unpackFlipY(HH.invertY);
        let AH = hH.TEXTURE_2D;
        HH.isCube && (AH = hH.TEXTURE_CUBE_MAP_POSITIVE_X + EH), hH.texImage2D(AH, RH, eH, sH, TH, IH), this._bindTextureDirectly(GH, null, !0);
      }
      updateTextureComparisonFunction(HH, IH) {
        if (1 === this.webGLVersion) return void VH.e.Error("WebGL 1 does not support texture comparison.");
        const EH = this._gl;
        HH.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, HH, !0), 0 === IH ? (EH.texParameteri(EH.TEXTURE_CUBE_MAP, EH.TEXTURE_COMPARE_FUNC, 515), EH.texParameteri(EH.TEXTURE_CUBE_MAP, EH.TEXTURE_COMPARE_MODE, EH.NONE)) : (EH.texParameteri(EH.TEXTURE_CUBE_MAP, EH.TEXTURE_COMPARE_FUNC, IH), EH.texParameteri(EH.TEXTURE_CUBE_MAP, EH.TEXTURE_COMPARE_MODE, EH.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, HH, !0), 0 === IH ? (EH.texParameteri(EH.TEXTURE_2D, EH.TEXTURE_COMPARE_FUNC, 515), EH.texParameteri(EH.TEXTURE_2D, EH.TEXTURE_COMPARE_MODE, EH.NONE)) : (EH.texParameteri(EH.TEXTURE_2D, EH.TEXTURE_COMPARE_FUNC, IH), EH.texParameteri(EH.TEXTURE_2D, EH.TEXTURE_COMPARE_MODE, EH.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), HH._comparisonFunction = IH;
      }
      createInstancesBuffer(HH) {
        const IH = this._gl.createBuffer();
        if (!IH) throw new Error("Unable to create instance buffer");
        const EH = new AH.c(IH);
        return EH.uI = HH, this.bindArrayBuffer(EH), this._gl.bufferData(this._gl.ARRAY_BUFFER, HH, this._gl.DYNAMIC_DRAW), EH.references = 1, EH;
      }
      deleteInstancesBuffer(HH) {
        this._gl.deleteBuffer(HH);
      }
      async _clientWaitAsync(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const RH = this._gl;
        return await new Promise((hH, TH) => {
          (0, NH.f)(() => {
            const EH = RH.clientWaitSync(HH, IH, 0);
            if (EH == RH.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return EH != RH.TIMEOUT_EXPIRED;
          }, hH, TH, EH);
        });
      }
      _readPixelsAsync(HH, IH, EH, RH, hH, TH, sH) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const eH = this._gl,
          GH = eH.createBuffer();
        eH.bindBuffer(eH.PIXEL_PACK_BUFFER, GH), eH.bufferData(eH.PIXEL_PACK_BUFFER, sH.byteLength, eH.STREAM_READ), eH.readPixels(HH, IH, EH, RH, hH, TH, 0), eH.bindBuffer(eH.PIXEL_PACK_BUFFER, null);
        const AH = eH.fenceSync(eH.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return AH ? (eH.flush(), this._clientWaitAsync(AH, 0, 10).then(() => (eH.deleteSync(AH), eH.bindBuffer(eH.PIXEL_PACK_BUFFER, GH), eH.getBufferSubData(eH.PIXEL_PACK_BUFFER, 0, sH), eH.bindBuffer(eH.PIXEL_PACK_BUFFER, null), eH.deleteBuffer(GH), sH))) : null;
      }
      dispose() {
        var HH;
        null === (HH = this.hideLoadingUI) || void 0 === HH || HH.call(this), this._rescalePostProcess && this._rescalePostProcess.dispose(), function (HH, IH) {
          1 === hH.e.Instances.length && QH.c.audioEngine && (QH.c.audioEngine.dispose(), QH.c.audioEngine = null);
          const EH = HH.getHostWindow();
          EH && "function" === typeof EH.removeEventListener && (EH.removeEventListener("blur", HH._onBlur), EH.removeEventListener("focus", HH._onFocus)), IH && (IH.removeEventListener("focus", HH._onCanvasFocus), IH.removeEventListener("blur", HH._onCanvasBlur), IH.removeEventListener("pointerout", HH._onCanvasPointerOut), IH.removeEventListener("contextmenu", HH._onCanvasContextMenu)), (0, JH.e)() && (document.removeEventListener("fullscreenchange", HH._onFullscreenChange), document.removeEventListener("mozfullscreenchange", HH._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", HH._onFullscreenChange), document.removeEventListener("msfullscreenchange", HH._onFullscreenChange), document.removeEventListener("pointerlockchange", HH._onPointerLockChange), document.removeEventListener("mspointerlockchange", HH._onPointerLockChange), document.removeEventListener("mozpointerlockchange", HH._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", HH._onPointerLockChange));
        }(this, this._renderingCanvas), super.dispose();
      }
    }
    PH.ALPHA_DISABLE = 0, PH.ALPHA_ADD = 1, PH.ALPHA_COMBINE = 2, PH.ALPHA_SUBTRACT = 3, PH.ALPHA_MULTIPLY = 4, PH.ALPHA_MAXIMIZED = 5, PH.ALPHA_ONEONE = 6, PH.ALPHA_PREMULTIPLIED = 7, PH.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, PH.ALPHA_INTERPOLATE = 9, PH.ALPHA_SCREENMODE = 10, PH.DELAYLOADSTATE_NONE = 0, PH.DELAYLOADSTATE_LOADED = 1, PH.DELAYLOADSTATE_LOADING = 2, PH.DELAYLOADSTATE_NOTLOADED = 4, PH.NEVER = 512, PH.ALWAYS = 519, PH.LESS = 513, PH.EQUAL = 514, PH.LEQUAL = 515, PH.GREATER = 516, PH.GEQUAL = 518, PH.NOTEQUAL = 517, PH.KEEP = 7680, PH.REPLACE = 7681, PH.INCR = 7682, PH.DECR = 7683, PH.INVERT = 5386, PH.INCR_WRAP = 34055, PH.DECR_WRAP = 34056, PH.TEXTURE_CLAMP_ADDRESSMODE = 0, PH.TEXTURE_WRAP_ADDRESSMODE = 1, PH.TEXTURE_MIRROR_ADDRESSMODE = 2, PH.TEXTUREFORMAT_ALPHA = 0, PH.TEXTUREFORMAT_LUMINANCE = 1, PH.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, PH.TEXTUREFORMAT_RGB = 4, PH.TEXTUREFORMAT_RGBA = 5, PH.TEXTUREFORMAT_RED = 6, PH.TEXTUREFORMAT_R = 6, PH.TEXTUREFORMAT_R16_UNORM = 33322, PH.TEXTUREFORMAT_RG16_UNORM = 33324, PH.TEXTUREFORMAT_RGB16_UNORM = 32852, PH.TEXTUREFORMAT_RGBA16_UNORM = 32859, PH.TEXTUREFORMAT_R16_SNORM = 36760, PH.TEXTUREFORMAT_RG16_SNORM = 36761, PH.TEXTUREFORMAT_RGB16_SNORM = 36762, PH.TEXTUREFORMAT_RGBA16_SNORM = 36763, PH.TEXTUREFORMAT_RG = 7, PH.TEXTUREFORMAT_RED_INTEGER = 8, PH.TEXTUREFORMAT_R_INTEGER = 8, PH.TEXTUREFORMAT_RG_INTEGER = 9, PH.TEXTUREFORMAT_RGB_INTEGER = 10, PH.TEXTUREFORMAT_RGBA_INTEGER = 11, PH.TEXTURETYPE_UNSIGNED_BYTE = 0, PH.TEXTURETYPE_UNSIGNED_INT = 0, PH.TEXTURETYPE_FLOAT = 1, PH.TEXTURETYPE_HALF_FLOAT = 2, PH.TEXTURETYPE_BYTE = 3, PH.TEXTURETYPE_SHORT = 4, PH.TEXTURETYPE_UNSIGNED_SHORT = 5, PH.TEXTURETYPE_INT = 6, PH.TEXTURETYPE_UNSIGNED_INTEGER = 7, PH.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, PH.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, PH.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, PH.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, PH.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, PH.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, PH.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, PH.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, PH.TEXTURE_NEAREST_SAMPLINGMODE = 1, PH.TEXTURE_BILINEAR_SAMPLINGMODE = 2, PH.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, PH.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, PH.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, PH.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, PH.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, PH.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, PH.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, PH.TEXTURE_NEAREST_LINEAR = 7, PH.TEXTURE_NEAREST_NEAREST = 1, PH.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, PH.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, PH.TEXTURE_LINEAR_LINEAR = 2, PH.TEXTURE_LINEAR_NEAREST = 12, PH.TEXTURE_EXPLICIT_MODE = 0, PH.TEXTURE_SPHERICAL_MODE = 1, PH.TEXTURE_PLANAR_MODE = 2, PH.TEXTURE_CUBIC_MODE = 3, PH.TEXTURE_PROJECTION_MODE = 4, PH.TEXTURE_SKYBOX_MODE = 5, PH.TEXTURE_INVCUBIC_MODE = 6, PH.TEXTURE_EQUIRECTANGULAR_MODE = 7, PH.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, PH.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, PH.SCALEMODE_FLOOR = 1, PH.SCALEMODE_NEAREST = 2, PH.SCALEMODE_CEILING = 3;
  },
  22770: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => hH
    });
    var RH = EH(22162);
    class hH {
      get depthStencilTexture() {
        return this._depthStencilTexture;
      }
      setDepthStencilTexture(HH) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = HH, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, HH && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, RH.b)(HH.format));
      }
      get depthStencilTextureWithStencil() {
        return this._depthStencilTextureWithStencil;
      }
      get isCube() {
        return this._isCube;
      }
      get isMulti() {
        return this._isMulti;
      }
      get is2DArray() {
        return this.fI > 0;
      }
      get is3D() {
        return this.depth > 0;
      }
      get size() {
        return this.width;
      }
      get width() {
        var HH;
        return null !== (HH = this._size.width) && void 0 !== HH ? HH : this._size;
      }
      get height() {
        var HH;
        return null !== (HH = this._size.height) && void 0 !== HH ? HH : this._size;
      }
      get fI() {
        return this._size.fI || 0;
      }
      get depth() {
        return this._size.depth || 0;
      }
      get texture() {
        var HH, IH;
        return null !== (HH = null === (IH = this._textures) || void 0 === IH ? void 0 : IH[0]) && void 0 !== HH ? HH : null;
      }
      get textures() {
        return this._textures;
      }
      get faceIndices() {
        return this._faceIndices;
      }
      get layerIndices() {
        return this._layerIndices;
      }
      getBaseArrayLayer(HH) {
        var IH, EH, RH, hH;
        if (!this._textures) return -1;
        const TH = this._textures[HH],
          sH = null !== (IH = null === (EH = this._layerIndices) || void 0 === EH ? void 0 : EH[HH]) && void 0 !== IH ? IH : 0,
          eH = null !== (RH = null === (hH = this._faceIndices) || void 0 === hH ? void 0 : hH[HH]) && void 0 !== RH ? RH : 0;
        return TH.isCube ? 6 * sH + eH : TH.is3D ? 0 : sH;
      }
      get samples() {
        return this._samples;
      }
      setSamples(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === HH && !EH) return HH;
        const RH = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, HH, IH) : this._engine.updateRenderTargetTextureSampleCount(this, HH);
        return this._samples = HH, RH;
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this);
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this);
      }
      constructor(HH, IH, EH, RH, hH) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = HH, this._isCube = IH, this._size = EH, this._engine = RH, this._depthStencilTexture = null, this.label = hH;
      }
      setTextures(HH) {
        Array.isArray(HH) ? this._textures = HH : this._textures = HH ? [HH] : null;
      }
      setTexture(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          EH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[IH] !== HH && (this._textures[IH] && EH && this._textures[IH].dispose(), this._textures[IH] = HH);
      }
      setLayerAndFaceIndices(HH, IH) {
        this._layerIndices = HH, this._faceIndices = IH;
      }
      setLayerAndFaceIndex() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 ? arguments[1] : void 0,
          EH = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== IH && IH >= 0 && (this._layerIndices[HH] = IH), void 0 !== EH && EH >= 0 && (this._faceIndices[HH] = EH);
      }
      createDepthStencilTexture() {
        var HH;
        let IH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          EH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          RH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          TH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          sH = arguments.length > 5 ? arguments[5] : void 0;
        return null === (HH = this._depthStencilTexture) || void 0 === HH || HH.dispose(), this._depthStencilTextureWithStencil = RH, this._depthStencilTextureLabel = sH, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: EH,
          comparisonFunction: IH,
          generateStencil: RH,
          isCube: this._isCube,
          samples: hH,
          depthTextureFormat: TH,
          label: sH
        }, this), this._depthStencilTexture;
      }
      _shareDepth(HH) {
        this.shareDepth(HH);
      }
      shareDepth(HH) {
        this._depthStencilTexture && (HH._depthStencilTexture && HH._depthStencilTexture.dispose(), HH._depthStencilTexture = this._depthStencilTexture, HH._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences());
      }
      _swapAndDie(HH) {
        this.texture && this.texture._swapAndDie(HH), this._textures = null, this.dispose(!0);
      }
      _cloneRenderTargetWrapper() {
        let HH = null;
        if (this._isMulti) {
          const RH = this.textures;
          if (RH && RH.length > 0) {
            let hH = !1,
              TH = RH.length,
              sH = -1;
            const eH = RH[RH.length - 1]._source;
            14 !== eH && 12 !== eH || (hH = !0, sH = RH[RH.length - 1].format, TH--);
            const GH = [],
              AH = [],
              VH = [],
              YH = [],
              QH = [],
              JH = [],
              OH = [],
              rH = {};
            for (let HH = 0; HH < TH; ++HH) {
              const hH = RH[HH];
              GH.push(hH.samplingMode), AH.push(hH.type), VH.push(hH.format);
              var IH, EH;
              if (void 0 !== rH[hH.uniqueId] ? (YH.push(-1), OH.push(0)) : (rH[hH.uniqueId] = HH, hH.is2DArray ? (YH.push(35866), OH.push(hH.depth)) : hH.isCube ? (YH.push(34067), OH.push(0)) : hH.is3D ? (YH.push(32879), OH.push(hH.depth)) : (YH.push(3553), OH.push(0))), this._faceIndices) QH.push(null !== (IH = this._faceIndices[HH]) && void 0 !== IH ? IH : 0);
              if (this._layerIndices) JH.push(null !== (EH = this._layerIndices[HH]) && void 0 !== EH ? EH : 0);
            }
            const FH = {
                samplingModes: GH,
                generateMipMaps: RH[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: hH,
                depthTextureFormat: sH,
                types: AH,
                formats: VH,
                WF: TH,
                targetTypes: YH,
                faceIndex: QH,
                layerIndex: JH,
                layerCounts: OH,
                label: this.label
              },
              MH = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            HH = this._engine.createMultipleRenderTarget(MH, FH);
            for (let IH = 0; IH < TH; ++IH) {
              if (-1 !== YH[IH]) continue;
              const EH = rH[RH[IH].uniqueId];
              HH.setTexture(HH.textures[EH], IH);
            }
          }
        } else {
          var RH, hH, TH, sH, eH;
          const IH = {};
          if (IH.generateDepthBuffer = this._generateDepthBuffer, IH.generateMipMaps = null !== (RH = null === (hH = this.texture) || void 0 === hH ? void 0 : hH.generateMipMaps) && void 0 !== RH && RH, IH.generateStencilBuffer = this._generateStencilBuffer, IH.samplingMode = null === (TH = this.texture) || void 0 === TH ? void 0 : TH.samplingMode, IH.type = null === (sH = this.texture) || void 0 === sH ? void 0 : sH.type, IH.format = null === (eH = this.texture) || void 0 === eH ? void 0 : eH.format, IH.noColorAttachment = !this._textures, IH.label = this.label, this.isCube) HH = this._engine.createRenderTargetCubeTexture(this.width, IH);else {
            var GH;
            const EH = {
              width: this.width,
              height: this.height,
              fI: this.is2DArray || this.is3D ? null === (GH = this.texture) || void 0 === GH ? void 0 : GH.depth : void 0
            };
            HH = this._engine.createRenderTargetTexture(EH, IH);
          }
          HH.texture && (HH.texture.isReady = !0);
        }
        return HH;
      }
      _swapRenderTargetWrapper(HH) {
        if (this._textures && HH._textures) for (let IH = 0; IH < this._textures.length; ++IH) this._textures[IH]._swapAndDie(HH._textures[IH], !1), HH._textures[IH].isReady = !0;
        this._depthStencilTexture && HH._depthStencilTexture && (this._depthStencilTexture._swapAndDie(HH._depthStencilTexture), HH._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null;
      }
      _rebuild() {
        const HH = this._cloneRenderTargetWrapper();
        if (HH) {
          if (this._depthStencilTexture) {
            const IH = this._depthStencilTexture.samplingMode,
              EH = this._depthStencilTexture.format,
              RH = 2 === IH || 3 === IH || 11 === IH;
            HH.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, RH, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, EH, this._depthStencilTextureLabel);
          }
          this.samples > 1 && HH.setSamples(this.samples), HH._swapRenderTargetWrapper(this), HH.dispose();
        }
      }
      releaseTextures() {
        if (this._textures) for (let HH = 0; HH < this._textures.length; ++HH) this._textures[HH].dispose();
        this._textures = null;
      }
      dispose() {
        var HH;
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (null === (HH = this._depthStencilTexture) || void 0 === HH || HH.dispose(), this._depthStencilTexture = null, this.releaseTextures());
        this._engine._releaseRenderTargetWrapper(this);
      }
    }
  },
  22396: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => GH
    });
    var RH = EH(21947),
      hH = EH(21956),
      TH = EH(21764),
      sH = EH(22373),
      eH = EH(22052);
    let GH = (() => {
      var HH;
      let IH,
        EH,
        GH,
        AH,
        VH = sH.d,
        YH = [];
      return HH = class extends VH {
        constructor() {
          super(...arguments), this._position = (0, RH.j)(this, YH), this._needProjectionMatrixCompute = !0, this._viewMatrix = TH.d.Identity(), this._projectionMatrix = TH.d.Identity();
        }
        _setPosition(HH) {
          this._position = HH;
        }
        get position() {
          return this._position;
        }
        set position(HH) {
          this._setPosition(HH);
        }
        _setDirection(HH) {
          this._direction = HH;
        }
        get direction() {
          return this._direction;
        }
        set direction(HH) {
          this._setDirection(HH);
        }
        get shadowMinZ() {
          return this._shadowMinZ;
        }
        set shadowMinZ(HH) {
          this._shadowMinZ = HH, this.forceProjectionMatrixCompute();
        }
        get shadowMaxZ() {
          return this._shadowMaxZ;
        }
        set shadowMaxZ(HH) {
          this._shadowMaxZ = HH, this.forceProjectionMatrixCompute();
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = TH.x.Zero()), TH.x.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = TH.x.Zero()), TH.x.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0);
        }
        getDepthScale() {
          return 50;
        }
        getShadowDirection(HH) {
          return this.transformedDirection ? this.transformedDirection : this.direction;
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position;
        }
        setDirectionToTarget(HH) {
          return this.direction = TH.x.Normalize(HH.subtract(this.position)), this.direction;
        }
        getRotation() {
          this.direction.normalize();
          const HH = TH.x.Cross(this.direction, eH.e.Y),
            IH = TH.x.Cross(HH, this.direction);
          return TH.x.RotationFromAxis(HH, IH, this.direction);
        }
        needCube() {
          return !1;
        }
        needProjectionMatrixCompute() {
          return this._needProjectionMatrixCompute;
        }
        forceProjectionMatrixCompute() {
          this._needProjectionMatrixCompute = !0;
        }
        _initCache() {
          super._initCache(), this._cache.position = TH.x.Zero();
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position);
        }
        aJ(HH) {
          return !HH && this.isSynchronized() ? (this._currentRenderId = this.kh().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.RH(this.position), this._worldMatrix || (this._worldMatrix = TH.d.Identity()), TH.d.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix);
        }
        getDepthMinZ(HH) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : (null === HH || void 0 === HH ? void 0 : HH.zF) || 0;
        }
        getDepthMaxZ(HH) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : (null === HH || void 0 === HH ? void 0 : HH.IM) || 1e4;
        }
        setShadowProjectionMatrix(HH, IH, EH) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(IH, EH, HH) : this._setDefaultShadowProjectionMatrix(HH, IH, EH), this;
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null);
        }
        getViewMatrix(HH) {
          const IH = TH.p.Rh[0];
          let EH = this.position;
          this.computeTransformedInformation() && (EH = this.transformedPosition), TH.x.NormalizeToRef(this.getShadowDirection(HH), IH), 1 === Math.abs(TH.x.Dot(IH, TH.x.Up())) && (IH.z = 1e-13);
          const RH = TH.p.Rh[1];
          return EH.addToRef(IH, RH), TH.d.LookAtLHToRef(EH, RH, TH.x.Up(), this._viewMatrix), this._viewMatrix;
        }
        getProjectionMatrix(HH, IH) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, null !== HH && void 0 !== HH ? HH : this._viewMatrix, null !== IH && void 0 !== IH ? IH : []), this._projectionMatrix;
        }
      }, (TH => {
        const sH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (TH = VH[Symbol.metadata]) && void 0 !== TH ? TH : null) : void 0;
        IH = [(0, hH.I)()], EH = [(0, hH.I)()], GH = [(0, hH.K)()], AH = [(0, hH.K)()], (0, RH.i)(HH, null, IH, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: HH => "position" in HH,
            get: HH => HH.position
          },
          metadata: sH
        }, null, YH), (0, RH.i)(HH, null, EH, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: HH => "direction" in HH,
            get: HH => HH.direction
          },
          metadata: sH
        }, null, YH), (0, RH.i)(HH, null, GH, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: HH => "shadowMinZ" in HH,
            get: HH => HH.shadowMinZ
          },
          metadata: sH
        }, null, YH), (0, RH.i)(HH, null, AH, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: HH => "shadowMaxZ" in HH,
            get: HH => HH.shadowMaxZ
          },
          metadata: sH
        }, null, YH), sH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: sH
        });
      })(), HH;
    })();
  },
  22297: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => kI,
      h: () => BH,
      k: () => oH
    });
    var RH,
      hH = EH(21819),
      TH = EH(21786),
      sH = EH(22302),
      eH = EH(21782),
      GH = EH(21832),
      AH = EH(22221),
      VH = EH(21867),
      YH = EH(21876),
      QH = EH(21925),
      JH = EH(22004),
      OH = EH(21863);
    !function (HH) {
      HH[HH.Clean = 0] = "Clean", HH[HH.Stop = 1] = "Stop", HH[HH.Sync = 2] = "Sync", HH[HH.NoSync = 3] = "NoSync";
    }(RH || (RH = {}));
    const rH = new TH.e(),
      FH = {};
    let MH = !1;
    function NH() {
      return FH[".babylon"];
    }
    function iI(HH, IH) {
      const EH = FH[HH];
      return EH || (GH.e.Warn("Unable to find a plugin to load " + HH + " files. Trying to use .babylon default plugin. To load from a specific filetype (eg. gltf) see: https://doc.babylonjs.com/features/featuresDeepDive/importers/loadingFileTypes"), IH ? NH() : void 0);
    }
    function DH(HH, IH, EH) {
      const RH = function (HH, IH, EH) {
        let RH = "Unable to load from " + (HH.rawData ? "binary data" : HH.url);
        return IH ? RH += ": ".concat(IH) : EH && (RH += ": ".concat(EH)), RH;
      }(HH, IH, EH);
      return new YH.i(RH, YH.g.SceneLoaderError, EH);
    }
    function PH(HH) {
      return HH instanceof Error ? HH.message : String(HH);
    }
    function XH(HH, IH) {
      return IH instanceof YH.i && IH.errorCode === YH.g.SceneLoaderError ? IH : DH(HH, PH(IH), IH);
    }
    const mI = "LoadAssetContainer is not supported by this plugin. Plugin did not provide a loadAssetContainer or loadAssetContainerAsync method.";
    function ZH(HH, IH) {
      if (!function (HH) {
        const IH = HH;
        return !!IH.importMesh || !!IH.load || !!IH.loadAssetContainer;
      }(HH)) return HH;
      const EH = HH => {
        let EH;
        const RH = HH((HH, IH) => {
          EH = {
            message: HH,
            exception: IH
          };
        });
        var hH, TH;
        if (!RH) throw DH(IH, null === (hH = EH) || void 0 === hH ? void 0 : hH.message, null === (TH = EH) || void 0 === TH ? void 0 : TH.exception);
        return RH;
      };
      return {
        name: HH.name,
        extensions: HH.extensions,
        importMeshAsync: async (IH, RH, hH, TH) => {
          const sH = [],
            eH = [],
            GH = [];
          return EH(EH => HH.importMesh(IH, RH, hH, TH, sH, eH, GH, EH)), {
            meshes: sH,
            fF: eH,
            skeletons: GH,
            animationGroups: [],
            transformNodes: [],
            geometries: [],
            lights: [],
            spriteManagers: []
          };
        },
        loadAsync: async (IH, RH, hH) => {
          EH(EH => HH.load(IH, RH, hH, EH));
        },
        loadAssetContainerAsync: async (IH, RH, hH) => EH(EH => HH.loadAssetContainer(IH, RH, hH, EH))
      };
    }
    function qH(HH, IH, EH) {
      const RH = PH(EH);
      HH && IH ? HH(IH, RH, EH) : GH.e.Error(RH);
    }
    function LH(HH) {
      if (HH) return IH => {
        try {
          HH(IH);
        } catch (EH) {
          GH.e.Warn("Error in onProgress callback: " + PH(EH));
        }
      };
    }
    async function gH(HH, IH, EH, RH, hH, TH) {
      var sH;
      const eH = "data:" === (GH = HH.url).substring(0, 5) ? GH.substring(5) : null;
      var GH;
      if (HH.rawData && !RH) throw new Error("When using ArrayBufferView to load data the file extension must be provided.");
      const AH = eH || RH ? "" : function (HH) {
        const IH = HH.indexOf("?");
        -1 !== IH && (HH = HH.substring(0, IH));
        const EH = HH.lastIndexOf(".");
        return HH.substring(EH, HH.length).toLowerCase();
      }(HH.url);
      let YH,
        QH = RH ? iI(RH, !0) : eH ? function (HH) {
          for (const IH in FH) {
            const EH = FH[IH].plugin;
            if (EH.canDirectLoad && EH.canDirectLoad(HH)) return FH[IH];
          }
          return NH();
        }(HH.url) : iI(AH, !1);
      if (!QH && AH) {
        if (HH.url && !HH.url.startsWith("blob:")) {
          const IH = await async function (HH, IH) {
              const EH = IH.method || "GET";
              return await new Promise((RH, hH) => {
                const TH = new OH.c();
                TH.addEventListener("readystatechange", () => {
                  if (4 == TH.readyState) if (200 == TH.status) {
                    const HH = {};
                    if (IH.responseHeaders) for (const EH of IH.responseHeaders) HH[EH] = TH.getResponseHeader(EH) || "";
                    RH({
                      response: TH.response,
                      headerValues: HH
                    });
                  } else hH("Unable to fetch data from ".concat(HH, ". Error code: ").concat(TH.status));
                }), TH.open(EH, HH), TH.send();
              });
            }(HH.url, {
              method: "HEAD",
              responseHeaders: ["Content-Type"]
            }),
            EH = IH.headerValues ? IH.headerValues["Content-Type"] : "";
          EH && (QH = function (HH) {
            for (const IH in FH) {
              const EH = FH[IH];
              if (EH.mimeType === HH) return EH;
            }
          }(EH));
        }
        QH || (QH = NH());
      }
      if (!QH) throw new Error("No plugin or fallback for ".concat(null !== RH && void 0 !== RH ? RH : HH.url));
      if (!1 === (null === TH || void 0 === TH || null === (sH = TH[QH.plugin.name]) || void 0 === sH ? void 0 : sH.enabled)) throw new Error("The '".concat(QH.plugin.name, "' plugin is disabled via the loader options passed to the loading operation."));
      if (HH.rawData && !QH.isBinary) throw new Error("Loading from ArrayBufferView can not be used with plugins that don't support binary loading.");
      if (QH.plugin.createPlugin) {
        const IH = QH.plugin;
        try {
          const HH = IH.createPlugin(null !== TH && void 0 !== TH ? TH : {});
          YH = HH instanceof Promise ? await HH : HH;
        } catch (PH) {
          throw DH(HH, "Error instantiating plugin.", PH);
        }
      } else YH = QH.plugin;
      if (!YH) throw new Error("The loader plugin corresponding to the '".concat(RH, "' file type has not been found. If using es6, please import the plugin you wish to use before."));
      if (rH.notifyObservers(YH), eH && (YH.canDirectLoad && YH.canDirectLoad(HH.url) || !(0, VH.m)(HH.url))) {
        if (YH.directLoad) {
          let EH;
          try {
            EH = await YH.directLoad(IH, eH);
          } catch (PH) {
            throw DH(HH, "Error in directLoad of _loadData: " + PH, PH);
          }
          return {
            plugin: YH,
            data: EH
          };
        }
        return {
          plugin: YH,
          data: eH
        };
      }
      const MH = QH.isBinary;
      return await new Promise((RH, TH) => {
        var sH;
        let eH = null,
          GH = !1;
        const AH = null === (sH = YH.AM) || void 0 === sH ? void 0 : sH.add(() => {
            GH = !0, eH && (eH.abort(), eH = null), QH(DH(HH, "Loading was aborted because the plugin was disposed."));
          }),
          VH = () => {
            var HH;
            AH && (null === (HH = YH.AM) || void 0 === HH || HH.remove(AH));
          },
          QH = HH => {
            VH(), TH(HH);
          },
          OH = (EH, hH) => {
            var TH;
            IH.sH ? QH(DH(HH, "Scene has been disposed")) : (TH = {
              plugin: YH,
              data: EH,
              responseURL: hH
            }, VH(), RH(TH));
          },
          rH = () => {
            if (GH) return;
            const RH = (IH, EH) => {
              QH(DH(HH, null === IH || void 0 === IH ? void 0 : IH.statusText, EH));
            };
            if (YH.loadFile || !HH.rawData) try {
              eH = YH.loadFile ? YH.loadFile(IH, HH.rawData || HH.file || HH.url, HH.rootUrl, OH, EH, MH, RH, hH) : IH._loadFile(HH.file || HH.url, OH, EH, !0, MH, RH);
            } catch (PH) {
              QH(DH(HH, void 0, PH));
            } else QH(DH(HH, "Plugin does not support loading ArrayBufferView."));
          },
          FH = IH.getEngine();
        let NH = !HH.file && !HH.rawData && FH.enableOfflineSupport;
        if (NH) {
          let EH = !1;
          for (const RH of IH.disableOfflineSupportExceptionRules) if (RH.test(HH.url)) {
            EH = !0;
            break;
          }
          NH = !EH;
        }
        if (NH && JH.c.OfflineProviderFactory) try {
          IH.offlineProvider = JH.c.OfflineProviderFactory(HH.url, rH, FH.disableManifestCheck);
        } catch (PH) {
          QH(DH(HH, void 0, PH));
        } else rH();
      });
    }
    function yH(HH, IH) {
      let EH,
        RH,
        TH = null,
        sH = null;
      if (IH) {
        if (IH.name) EH = "file:".concat(IH.name), RH = IH.name, TH = IH;else if (ArrayBuffer.isView(IH)) EH = "", RH = (0, QH.d)(), sH = IH;else if (IH.startsWith("data:")) EH = IH, RH = "";else if (HH) {
          const TH = IH;
          if ("/" === TH.substring(0, 1)) return hH.i.Error("Wrong sceneFilename parameter"), null;
          EH = HH + TH, RH = TH;
        } else EH = IH, RH = hH.i.GetFilename(IH), HH = hH.i.GetFolderPath(IH);
      } else EH = HH, RH = hH.i.GetFilename(HH), HH = hH.i.GetFolderPath(HH);
      return {
        url: EH,
        rootUrl: HH,
        name: RH,
        file: TH,
        rawData: sH
      };
    }
    function oH(HH) {
      if ("string" === typeof HH.extensions) {
        const IH = HH.extensions;
        FH[IH.toLowerCase()] = {
          plugin: HH,
          isBinary: !1
        };
      } else {
        const IH = HH.extensions,
          EH = Object.keys(IH);
        for (const RH of EH) FH[RH.toLowerCase()] = {
          plugin: HH,
          isBinary: IH[RH].isBinary,
          mimeType: IH[RH].mimeType
        };
      }
    }
    async function kI(HH, IH, EH) {
      const {
        meshNames: RH,
        rootUrl: hH = "",
        onProgress: TH,
        pluginExtension: sH,
        name: eH,
        pluginOptions: GH
      } = null !== EH && void 0 !== EH ? EH : {};
      return await CH(RH, hH, HH, IH, TH, sH, eH, GH);
    }
    async function CH(HH, IH) {
      let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eH.e.LastCreatedScene,
        hH = arguments.length > 4 ? arguments[4] : void 0,
        TH = arguments.length > 5 ? arguments[5] : void 0,
        sH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "",
        GH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {};
      if (!RH) throw new Error("No scene available to import mesh to");
      const AH = yH(IH, EH);
      if (!AH) throw new Error("Cannot load file: a valid scene filename or root url was not provided.");
      const VH = {};
      RH.addPendingData(VH);
      const YH = LH(hH);
      try {
        const {
          plugin: IH,
          data: EH,
          responseURL: hH
        } = await gH(AH, RH, YH, null !== TH && void 0 !== TH ? TH : null, sH, GH);
        let eH;
        IH.rewriteRootURL && (AH.rootUrl = IH.rewriteRootURL(AH.rootUrl, hH));
        try {
          eH = await ZH(IH, AH).importMeshAsync(HH, RH, EH, AH.rootUrl, YH, AH.name);
        } catch (QH) {
          throw XH(AH, QH);
        }
        return RH.loadingPluginName = IH.name, RH.importedMeshesFiles.push(AH.url), eH;
      } finally {
        RH.removePendingData(VH);
      }
    }
    async function cH(HH) {
      let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eH.e.LastCreatedEngine,
        RH = arguments.length > 3 ? arguments[3] : void 0,
        hH = arguments.length > 4 ? arguments[4] : void 0,
        TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
        GH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {};
      if (!EH) throw new Error("No engine available");
      const AH = new sH.c(EH);
      try {
        await UH(HH, IH, AH, RH, hH, TH, GH);
      } catch (VH) {
        throw AH.dispose(), VH;
      }
      return AH;
    }
    async function UH(HH) {
      let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eH.e.LastCreatedScene,
        RH = arguments.length > 3 ? arguments[3] : void 0,
        hH = arguments.length > 4 ? arguments[4] : void 0,
        TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
        sH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {};
      if (!EH) throw new Error("No scene available to append to");
      const GH = yH(HH, IH);
      if (!GH) throw new Error("Cannot load file: a valid scene filename or root url was not provided.");
      const VH = {};
      EH.addPendingData(VH), AH.b.ShowLoadingScreen && !MH && (MH = !0, EH.getEngine().displayLoadingUI(), EH.executeWhenReady(() => {
        EH.getEngine().hideLoadingUI(), MH = !1;
      }));
      const YH = LH(RH);
      try {
        const {
          plugin: HH,
          data: IH
        } = await gH(GH, EH, YH, null !== hH && void 0 !== hH ? hH : null, TH, sH);
        try {
          await ZH(HH, GH).loadAsync(EH, IH, GH.rootUrl, YH, GH.name);
        } catch (QH) {
          throw XH(GH, QH);
        }
        return EH.loadingPluginName = HH.name, EH;
      } finally {
        EH.removePendingData(VH);
      }
    }
    async function WH(HH) {
      let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eH.e.LastCreatedScene,
        RH = arguments.length > 3 ? arguments[3] : void 0,
        hH = arguments.length > 4 ? arguments[4] : void 0,
        TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
        sH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {};
      if (!EH) throw new Error("No scene available to load asset container to");
      const GH = yH(HH, IH);
      if (!GH) throw new Error("Cannot load file: a valid scene filename or root url was not provided.");
      const AH = {};
      EH.addPendingData(AH);
      const VH = LH(RH);
      try {
        const {
            plugin: HH,
            data: IH
          } = await gH(GH, EH, VH, null !== hH && void 0 !== hH ? hH : null, TH, sH),
          RH = ZH(HH, GH);
        if (!RH.loadAssetContainerAsync) throw DH(GH, mI);
        let eH;
        try {
          eH = await RH.loadAssetContainerAsync(EH, IH, GH.rootUrl, VH, GH.name);
        } catch (YH) {
          throw XH(GH, YH);
        }
        return eH.populateRootNodes(), EH.loadingPluginName = HH.name, eH;
      } finally {
        EH.removePendingData(AH);
      }
    }
    async function BH(HH, IH, EH) {
      const {
        rootUrl: RH = "",
        onProgress: hH,
        pluginExtension: TH,
        name: sH,
        pluginOptions: eH
      } = null !== EH && void 0 !== EH ? EH : {};
      return await WH(RH, HH, IH, hH, TH, sH, eH);
    }
    async function fH(HH) {
      let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eH.e.LastCreatedScene,
        RH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        sH = arguments.length > 6 ? arguments[6] : void 0,
        GH = arguments.length > 7 ? arguments[7] : void 0,
        AH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : "",
        VH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : {};
      if (!EH) throw new Error("No scene available to load animations to");
      if (RH) {
        for (const RH of EH.animatables) RH.reset();
        EH.stopAllAnimations();
        const HH = EH.animationGroups.slice();
        for (const EH of HH) EH.dispose();
        const IH = EH.getNodes();
        for (const EH of IH) EH.animations && (EH.animations = []);
      } else switch (hH) {
        case 0:
          const HH = EH.animationGroups.slice();
          for (const IH of HH) IH.dispose();
          break;
        case 1:
          for (const IH of EH.animationGroups) IH.stop();
          break;
        case 2:
          for (const IH of EH.animationGroups) IH.reset(), IH.restart();
          break;
        case 3:
          break;
        default:
          throw new Error("Unknown animation group loading mode value '" + hH + "'");
      }
      const YH = EH.animatables.length,
        QH = await WH(HH, IH, EH, sH, GH, AH, VH);
      QH.mergeAnimationsTo(EH, EH.animatables.slice(YH), TH), QH.dispose(), EH.onAnimationFileImportedObservable.notifyObservers(EH);
    }
    class aH {
      static get ForceFullSceneLoadingForIncremental() {
        return AH.b.ForceFullSceneLoadingForIncremental;
      }
      static set ForceFullSceneLoadingForIncremental(HH) {
        AH.b.ForceFullSceneLoadingForIncremental = HH;
      }
      static get ShowLoadingScreen() {
        return AH.b.ShowLoadingScreen;
      }
      static set ShowLoadingScreen(HH) {
        AH.b.ShowLoadingScreen = HH;
      }
      static get loggingLevel() {
        return AH.b.loggingLevel;
      }
      static set loggingLevel(HH) {
        AH.b.loggingLevel = HH;
      }
      static get CleanBoneMatrixWeights() {
        return AH.b.CleanBoneMatrixWeights;
      }
      static set CleanBoneMatrixWeights(HH) {
        AH.b.CleanBoneMatrixWeights = HH;
      }
      static GetDefaultPlugin() {
        return NH();
      }
      static GetPluginForExtension(HH) {
        var IH;
        return null === (IH = iI(HH, !0)) || void 0 === IH ? void 0 : IH.plugin;
      }
      static IsPluginForExtensionAvailable(HH) {
        return function (HH) {
          return !!FH[HH];
        }(HH);
      }
      static RegisterPlugin(HH) {
        oH(HH);
      }
      static ImportMesh(HH, IH, EH, RH, hH, TH, sH, GH, AH, VH) {
        const YH = null !== RH && void 0 !== RH ? RH : eH.e.LastCreatedScene;
        (async () => {
          try {
            const sH = await CH(HH, IH, EH, RH, TH, GH, AH, VH);
            null === hH || void 0 === hH || hH(sH.meshes, sH.fF, sH.skeletons, sH.animationGroups, sH.transformNodes, sH.geometries, sH.lights, sH.spriteManagers);
          } catch (eH) {
            qH(sH, YH, eH);
          }
        })();
      }
      static async ImportMeshAsync(HH, IH, EH, RH, hH, TH, sH) {
        return await CH(HH, IH, EH, RH, hH, TH, sH);
      }
      static Load(HH, IH, EH, RH, hH, TH, sH, GH) {
        (async () => {
          try {
            const TH = await cH(HH, IH, EH, hH, sH, GH);
            null === RH || void 0 === RH || RH(TH);
          } catch (AH) {
            qH(TH, eH.e.LastCreatedScene, AH);
          }
        })();
      }
      static async LoadAsync(HH, IH, EH, RH, hH, TH) {
        return await cH(HH, IH, EH, RH, hH, TH);
      }
      static Append(HH, IH, EH, RH, hH, TH, sH, GH) {
        const AH = null !== EH && void 0 !== EH ? EH : eH.e.LastCreatedScene;
        (async () => {
          try {
            const TH = await UH(HH, IH, EH, hH, sH, GH);
            null === RH || void 0 === RH || RH(TH);
          } catch (eH) {
            qH(TH, AH, eH);
          }
        })();
      }
      static async AppendAsync(HH, IH, EH, RH, hH, TH) {
        return await UH(HH, IH, EH, RH, hH, TH);
      }
      static LoadAssetContainer(HH, IH, EH, RH, hH, TH, sH, GH) {
        const AH = null !== EH && void 0 !== EH ? EH : eH.e.LastCreatedScene;
        (async () => {
          try {
            const TH = await WH(HH, IH, EH, hH, sH, GH);
            null === RH || void 0 === RH || RH(TH);
          } catch (eH) {
            qH(TH, AH, eH);
          }
        })();
      }
      static async LoadAssetContainerAsync(HH, IH, EH, RH, hH, TH) {
        return await WH(HH, IH, EH, RH, hH, TH);
      }
      static ImportAnimations(HH, IH, EH, RH, hH, TH, sH, GH, AH, VH, YH) {
        const QH = null !== EH && void 0 !== EH ? EH : eH.e.LastCreatedScene;
        (async () => {
          try {
            await fH(HH, IH, EH, RH, hH, TH, GH, VH, YH), null === sH || void 0 === sH || sH(QH);
          } catch (eH) {
            qH(AH, QH, eH);
          }
        })();
      }
      static async ImportAnimationsAsync(HH, IH, EH, RH, hH, TH, sH, GH, AH, VH, YH) {
        const QH = null !== EH && void 0 !== EH ? EH : eH.e.LastCreatedScene;
        return await fH(HH, IH, QH, RH, hH, TH, GH, VH, YH), QH;
      }
    }
    aH.NO_LOGGING = 0, aH.MINIMAL_LOGGING = 1, aH.SUMMARY_LOGGING = 2, aH.DETAILED_LOGGING = 3, aH.OnPluginActivatedObservable = rH;
  },
  22221: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => RH
    });
    class RH {
      static get ForceFullSceneLoadingForIncremental() {
        return RH._ForceFullSceneLoadingForIncremental;
      }
      static set ForceFullSceneLoadingForIncremental(HH) {
        RH._ForceFullSceneLoadingForIncremental = HH;
      }
      static get ShowLoadingScreen() {
        return RH._ShowLoadingScreen;
      }
      static set ShowLoadingScreen(HH) {
        RH._ShowLoadingScreen = HH;
      }
      static get loggingLevel() {
        return RH._LoggingLevel;
      }
      static set loggingLevel(HH) {
        RH._LoggingLevel = HH;
      }
      static get CleanBoneMatrixWeights() {
        return RH._CleanBoneMatrixWeights;
      }
      static set CleanBoneMatrixWeights(HH) {
        RH._CleanBoneMatrixWeights = HH;
      }
    }
    RH._ForceFullSceneLoadingForIncremental = !1, RH._ShowLoadingScreen = !0, RH._CleanBoneMatrixWeights = !1, RH._LoggingLevel = 0;
  },
  23970: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => RH.d
    });
    var RH = EH(23976);
    (0, EH(24012).c)();
  },
  23976: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => jI
    });
    var RH = EH(17),
      hH = EH(21947),
      TH = EH(21956),
      sH = EH(21832),
      eH = EH(21968),
      GH = EH(23982),
      AH = EH(22302),
      VH = EH(21764),
      YH = EH(22128),
      QH = EH(22488),
      JH = EH(22506);
    class OH extends QH.b {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0;
      }
    }
    let rH = (() => {
      var HH, IH, EH, RH, sH, eH, GH, AH, VH, YH;
      let QH,
        rH,
        FH,
        MH,
        NH,
        iI,
        DH,
        PH,
        XH,
        mI = JH.b,
        ZH = [],
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
        uH = [];
      return HH = class extends mI {
        get useEnergyConservation() {
          return (0, hH.d)(this, IH, "f");
        }
        set useEnergyConservation(HH) {
          (0, hH.g)(this, IH, HH, "f");
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, hH.d)(this, EH, "f");
        }
        set useSmithVisibilityHeightCorrelated(HH) {
          (0, hH.g)(this, EH, HH, "f");
        }
        get useSphericalHarmonics() {
          return (0, hH.d)(this, RH, "f");
        }
        set useSphericalHarmonics(HH) {
          (0, hH.g)(this, RH, HH, "f");
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, hH.d)(this, sH, "f");
        }
        set useSpecularGlossinessInputEnergyConservation(HH) {
          (0, hH.g)(this, sH, HH, "f");
        }
        get mixIblRadianceWithIrradiance() {
          return (0, hH.d)(this, eH, "f");
        }
        set mixIblRadianceWithIrradiance(HH) {
          (0, hH.g)(this, eH, HH, "f");
        }
        get useLegacySpecularEnergyConservation() {
          return (0, hH.d)(this, GH, "f");
        }
        set useLegacySpecularEnergyConservation(HH) {
          (0, hH.g)(this, GH, HH, "f");
        }
        get baseDiffuseModel() {
          return (0, hH.d)(this, AH, "f");
        }
        set baseDiffuseModel(HH) {
          (0, hH.g)(this, AH, HH, "f");
        }
        get dielectricSpecularModel() {
          return (0, hH.d)(this, VH, "f");
        }
        set dielectricSpecularModel(HH) {
          (0, hH.g)(this, VH, HH, "f");
        }
        get conductorSpecularModel() {
          return (0, hH.d)(this, YH, "f");
        }
        set conductorSpecularModel(HH) {
          (0, hH.g)(this, YH, HH, "f");
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty();
        }
        isCompatible() {
          return !0;
        }
        constructor(TH) {
          let QH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(TH, "PBRBRDF", 90, new OH(), QH), this._useEnergyConservation = HH.DEFAULT_USE_ENERGY_CONSERVATION, IH.set(this, (0, hH.j)(this, ZH, HH.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, hH.j)(this, qH), HH.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), EH.set(this, (0, hH.j)(this, LH, HH.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, hH.j)(this, gH), HH.DEFAULT_USE_SPHERICAL_HARMONICS), RH.set(this, (0, hH.j)(this, yH, HH.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, hH.j)(this, oH), HH.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), sH.set(this, (0, hH.j)(this, kI, HH.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, hH.j)(this, CH), HH.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), eH.set(this, (0, hH.j)(this, cH, HH.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, hH.j)(this, UH), HH.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), GH.set(this, (0, hH.j)(this, WH, HH.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, hH.j)(this, BH), HH.DEFAULT_DIFFUSE_MODEL), AH.set(this, (0, hH.j)(this, fH, HH.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, hH.j)(this, aH), HH.DEFAULT_DIELECTRIC_SPECULAR_MODEL), VH.set(this, (0, hH.j)(this, nH, HH.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, hH.j)(this, pH), HH.DEFAULT_CONDUCTOR_SPECULAR_MODEL), YH.set(this, (0, hH.j)(this, dH, HH.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, hH.j)(this, uH), this._internalMarkAllSubMeshesAsMiscDirty = TH._dirtyCallbacks[16], this._enable(!0);
        }
        prepareDefines(HH) {
          HH.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, HH.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, HH.SPHERICAL_HARMONICS = this._useSphericalHarmonics, HH.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, HH.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, HH.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, HH.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, HH.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, HH.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel;
        }
        getClassName() {
          return "PBRBRDFConfiguration";
        }
      }, IH = new WeakMap(), EH = new WeakMap(), RH = new WeakMap(), sH = new WeakMap(), eH = new WeakMap(), GH = new WeakMap(), AH = new WeakMap(), VH = new WeakMap(), YH = new WeakMap(), (IH => {
        const EH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (IH = mI[Symbol.metadata]) && void 0 !== IH ? IH : null) : void 0;
        QH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsMiscDirty")], rH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsMiscDirty")], FH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsMiscDirty")], MH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsMiscDirty")], NH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsMiscDirty")], iI = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsMiscDirty")], DH = [(0, TH.K)("baseDiffuseModel"), (0, TH.d)("_markAllSubMeshesAsMiscDirty")], PH = [(0, TH.K)("dielectricSpecularModel"), (0, TH.d)("_markAllSubMeshesAsMiscDirty")], XH = [(0, TH.K)("conductorSpecularModel"), (0, TH.d)("_markAllSubMeshesAsMiscDirty")], (0, hH.i)(HH, null, QH, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: HH => "useEnergyConservation" in HH,
            get: HH => HH.useEnergyConservation,
            set: (HH, IH) => {
              HH.useEnergyConservation = IH;
            }
          },
          metadata: EH
        }, ZH, qH), (0, hH.i)(HH, null, rH, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: HH => "useSmithVisibilityHeightCorrelated" in HH,
            get: HH => HH.useSmithVisibilityHeightCorrelated,
            set: (HH, IH) => {
              HH.useSmithVisibilityHeightCorrelated = IH;
            }
          },
          metadata: EH
        }, LH, gH), (0, hH.i)(HH, null, FH, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: HH => "useSphericalHarmonics" in HH,
            get: HH => HH.useSphericalHarmonics,
            set: (HH, IH) => {
              HH.useSphericalHarmonics = IH;
            }
          },
          metadata: EH
        }, yH, oH), (0, hH.i)(HH, null, MH, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: HH => "useSpecularGlossinessInputEnergyConservation" in HH,
            get: HH => HH.useSpecularGlossinessInputEnergyConservation,
            set: (HH, IH) => {
              HH.useSpecularGlossinessInputEnergyConservation = IH;
            }
          },
          metadata: EH
        }, kI, CH), (0, hH.i)(HH, null, NH, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: HH => "mixIblRadianceWithIrradiance" in HH,
            get: HH => HH.mixIblRadianceWithIrradiance,
            set: (HH, IH) => {
              HH.mixIblRadianceWithIrradiance = IH;
            }
          },
          metadata: EH
        }, cH, UH), (0, hH.i)(HH, null, iI, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: HH => "useLegacySpecularEnergyConservation" in HH,
            get: HH => HH.useLegacySpecularEnergyConservation,
            set: (HH, IH) => {
              HH.useLegacySpecularEnergyConservation = IH;
            }
          },
          metadata: EH
        }, WH, BH), (0, hH.i)(HH, null, DH, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: HH => "baseDiffuseModel" in HH,
            get: HH => HH.baseDiffuseModel,
            set: (HH, IH) => {
              HH.baseDiffuseModel = IH;
            }
          },
          metadata: EH
        }, fH, aH), (0, hH.i)(HH, null, PH, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: HH => "dielectricSpecularModel" in HH,
            get: HH => HH.dielectricSpecularModel,
            set: (HH, IH) => {
              HH.dielectricSpecularModel = IH;
            }
          },
          metadata: EH
        }, nH, pH), (0, hH.i)(HH, null, XH, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: HH => "conductorSpecularModel" in HH,
            get: HH => HH.conductorSpecularModel,
            set: (HH, IH) => {
              HH.conductorSpecularModel = IH;
            }
          },
          metadata: EH
        }, dH, uH), EH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EH
        });
      })(), HH.DEFAULT_USE_ENERGY_CONSERVATION = !0, HH.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, HH.DEFAULT_USE_SPHERICAL_HARMONICS = !0, HH.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, HH.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, HH.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, HH.DEFAULT_DIFFUSE_MODEL = 0, HH.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, HH.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, HH;
    })();
    var FH = EH(22483),
      MH = EH(21817),
      NH = EH(22485),
      iI = EH(22304),
      DH = EH(22248),
      PH = EH(22495),
      XH = EH(22276),
      mI = EH(22501),
      ZH = EH(22250);
    class qH extends QH.b {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1;
      }
    }
    let LH = (() => {
      var HH, IH, EH, RH, sH, eH, GH, AH, VH, YH;
      let QH,
        OH,
        rH,
        FH,
        NH,
        iI,
        DH,
        PH,
        mI,
        LH,
        gH,
        yH,
        oH,
        kI,
        CH = JH.b,
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
        hI = [],
        TI = [],
        sI = [],
        eI = [];
      return HH = class extends CH {
        get isEnabled() {
          return (0, hH.d)(this, IH, "f");
        }
        set isEnabled(HH) {
          (0, hH.g)(this, IH, HH, "f");
        }
        get indexOfRefraction() {
          return (0, hH.d)(this, EH, "f");
        }
        set indexOfRefraction(HH) {
          (0, hH.g)(this, EH, HH, "f");
        }
        get texture() {
          return (0, hH.d)(this, RH, "f");
        }
        set texture(HH) {
          (0, hH.g)(this, RH, HH, "f");
        }
        get useRoughnessFromMainTexture() {
          return (0, hH.d)(this, sH, "f");
        }
        set useRoughnessFromMainTexture(HH) {
          (0, hH.g)(this, sH, HH, "f");
        }
        get textureRoughness() {
          return (0, hH.d)(this, eH, "f");
        }
        set textureRoughness(HH) {
          (0, hH.g)(this, eH, HH, "f");
        }
        get remapF0OnInterfaceChange() {
          return (0, hH.d)(this, GH, "f");
        }
        set remapF0OnInterfaceChange(HH) {
          (0, hH.g)(this, GH, HH, "f");
        }
        get bumpTexture() {
          return (0, hH.d)(this, AH, "f");
        }
        set bumpTexture(HH) {
          (0, hH.g)(this, AH, HH, "f");
        }
        get isTintEnabled() {
          return (0, hH.d)(this, VH, "f");
        }
        set isTintEnabled(HH) {
          (0, hH.g)(this, VH, HH, "f");
        }
        get tintTexture() {
          return (0, hH.d)(this, YH, "f");
        }
        set tintTexture(HH) {
          (0, hH.g)(this, YH, HH, "f");
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty();
        }
        isCompatible() {
          return !0;
        }
        constructor(TH) {
          let QH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(TH, "PBRClearCoat", 100, new qH(), QH), this._isEnabled = !1, IH.set(this, (0, hH.j)(this, cH, !1)), this.xF = ((0, hH.j)(this, UH), (0, hH.j)(this, WH, 1)), this.roughness = ((0, hH.j)(this, BH), (0, hH.j)(this, fH, 0)), this._indexOfRefraction = ((0, hH.j)(this, aH), HH._DefaultIndexOfRefraction), EH.set(this, (0, hH.j)(this, nH, HH._DefaultIndexOfRefraction)), this._texture = ((0, hH.j)(this, pH), null), RH.set(this, (0, hH.j)(this, dH, null)), this._useRoughnessFromMainTexture = ((0, hH.j)(this, uH), !0), sH.set(this, (0, hH.j)(this, lH, !0)), this._textureRoughness = ((0, hH.j)(this, KH), null), eH.set(this, (0, hH.j)(this, wH, null)), this._remapF0OnInterfaceChange = ((0, hH.j)(this, zH), !0), GH.set(this, (0, hH.j)(this, tH, !0)), this._bumpTexture = ((0, hH.j)(this, jI), null), AH.set(this, (0, hH.j)(this, vH, null)), this._isTintEnabled = ((0, hH.j)(this, bH), !1), VH.set(this, (0, hH.j)(this, SH, !1)), this.tintColor = ((0, hH.j)(this, xH), (0, hH.j)(this, HI, MH.b.White())), this.tintColorAtDistance = ((0, hH.j)(this, II), (0, hH.j)(this, EI, 1)), this.tintThickness = ((0, hH.j)(this, RI), (0, hH.j)(this, hI, 1)), this._tintTexture = ((0, hH.j)(this, TI), null), YH.set(this, (0, hH.j)(this, sI, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, hH.j)(this, eI), this._internalMarkAllSubMeshesAsTexturesDirty = TH._dirtyCallbacks[1];
        }
        isReadyForSubMesh(HH, IH, EH) {
          if (!this._isEnabled) return !0;
          const RH = this._material._disableBumpMap;
          if (HH._areTexturesDirty && IH.texturesEnabled) {
            if (this._texture && XH.b.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && XH.b.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (EH.getCaps().standardDerivatives && this._bumpTexture && XH.b.ClearCoatBumpTextureEnabled && !RH && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && XH.b.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1;
          }
          return !0;
        }
        prepareDefinesBeforeAttributes(IH, EH) {
          this._isEnabled ? (IH.CLEARCOAT = !0, IH.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, IH.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, IH._areTexturesDirty && EH.texturesEnabled && (this._texture && XH.b.ClearCoatTextureEnabled ? (0, ZH.X)(this._texture, IH, "CLEARCOAT_TEXTURE") : IH.CLEARCOAT_TEXTURE = !1, this._textureRoughness && XH.b.ClearCoatTextureEnabled ? (0, ZH.X)(this._textureRoughness, IH, "CLEARCOAT_TEXTURE_ROUGHNESS") : IH.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && XH.b.ClearCoatBumpTextureEnabled ? (0, ZH.X)(this._bumpTexture, IH, "CLEARCOAT_BUMP") : IH.CLEARCOAT_BUMP = !1, IH.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === HH._DefaultIndexOfRefraction, this._isTintEnabled ? (IH.CLEARCOAT_TINT = !0, this._tintTexture && XH.b.ClearCoatTintTextureEnabled ? ((0, ZH.X)(this._tintTexture, IH, "CLEARCOAT_TINT_TEXTURE"), IH.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : IH.CLEARCOAT_TINT_TEXTURE = !1) : (IH.CLEARCOAT_TINT = !1, IH.CLEARCOAT_TINT_TEXTURE = !1))) : (IH.CLEARCOAT = !1, IH.CLEARCOAT_TEXTURE = !1, IH.CLEARCOAT_TEXTURE_ROUGHNESS = !1, IH.CLEARCOAT_BUMP = !1, IH.CLEARCOAT_TINT = !1, IH.CLEARCOAT_TINT_TEXTURE = !1, IH.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, IH.CLEARCOAT_DEFAULTIOR = !1, IH.CLEARCOAT_TEXTUREDIRECTUV = 0, IH.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, IH.CLEARCOAT_BUMPDIRECTUV = 0, IH.CLEARCOAT_REMAP_F0 = !1, IH.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, IH.CLEARCOAT_TINT_GAMMATEXTURE = !1);
        }
        bindForSubMesh(HH, IH, EH, RH) {
          if (!this._isEnabled) return;
          const hH = RH.materialDefines,
            TH = this._material.isFrozen,
            sH = this._material._disableBumpMap,
            eH = this._material._invertNormalMapX,
            GH = this._material._invertNormalMapY;
          if (!HH.useUbo || !TH || !HH.isSync) {
            var AH, VH, YH, QH, JH, OH, rH, FH;
            if ((this._texture || this._textureRoughness) && XH.b.ClearCoatTextureEnabled) HH.updateFloat4("vClearCoatInfos", null !== (AH = null === (VH = this._texture) || void 0 === VH ? void 0 : VH.coordinatesIndex) && void 0 !== AH ? AH : 0, null !== (YH = null === (QH = this._texture) || void 0 === QH ? void 0 : QH.level) && void 0 !== YH ? YH : 0, null !== (JH = null === (OH = this._textureRoughness) || void 0 === OH ? void 0 : OH.coordinatesIndex) && void 0 !== JH ? JH : 0, null !== (rH = null === (FH = this._textureRoughness) || void 0 === FH ? void 0 : FH.level) && void 0 !== rH ? rH : 0), this._texture && (0, ZH.z)(this._texture, HH, "clearCoat"), this._textureRoughness && !hH.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, ZH.z)(this._textureRoughness, HH, "clearCoatRoughness");
            this._bumpTexture && EH.getCaps().standardDerivatives && XH.b.ClearCoatTextureEnabled && !sH && (HH.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, ZH.z)(this._bumpTexture, HH, "clearCoatBump"), IH._mirroredCameraPosition ? HH.updateFloat2("vClearCoatTangentSpaceParams", eH ? 1 : -1, GH ? 1 : -1) : HH.updateFloat2("vClearCoatTangentSpaceParams", eH ? -1 : 1, GH ? -1 : 1)), this._tintTexture && XH.b.ClearCoatTintTextureEnabled && (HH.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, ZH.z)(this._tintTexture, HH, "clearCoatTint")), HH.updateFloat2("vClearCoatParams", this.xF, this.roughness);
            const RH = 1 - this._indexOfRefraction,
              TH = 1 + this._indexOfRefraction,
              MH = Math.pow(-RH / TH, 2),
              NH = 1 / this._indexOfRefraction;
            HH.updateFloat4("vClearCoatRefractionParams", MH, NH, RH, TH), this._isTintEnabled && (HH.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), HH.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)));
          }
          IH.texturesEnabled && (this._texture && XH.b.ClearCoatTextureEnabled && HH.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !hH.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && XH.b.ClearCoatTextureEnabled && HH.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && EH.getCaps().standardDerivatives && XH.b.ClearCoatBumpTextureEnabled && !sH && HH.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && XH.b.ClearCoatTintTextureEnabled && HH.setTexture("clearCoatTintSampler", this._tintTexture));
        }
        hasTexture(HH) {
          return this._texture === HH || this._textureRoughness === HH || this._bumpTexture === HH || this._tintTexture === HH;
        }
        getActiveTextures(HH) {
          this._texture && HH.push(this._texture), this._textureRoughness && HH.push(this._textureRoughness), this._bumpTexture && HH.push(this._bumpTexture), this._tintTexture && HH.push(this._tintTexture);
        }
        getAnimatables(HH) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && HH.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && HH.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && HH.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && HH.push(this._tintTexture);
        }
        dispose(HH) {
          var IH, EH, RH, hH;
          HH && (null === (IH = this._texture) || void 0 === IH || IH.dispose(), null === (EH = this._textureRoughness) || void 0 === EH || EH.dispose(), null === (RH = this._bumpTexture) || void 0 === RH || RH.dispose(), null === (hH = this._tintTexture) || void 0 === hH || hH.dispose());
        }
        getClassName() {
          return "PBRClearCoatConfiguration";
        }
        addFallbacks(HH, IH, EH) {
          return HH.CLEARCOAT_BUMP && IH.addFallback(EH++, "CLEARCOAT_BUMP"), HH.CLEARCOAT_TINT && IH.addFallback(EH++, "CLEARCOAT_TINT"), HH.CLEARCOAT && IH.addFallback(EH++, "CLEARCOAT"), EH;
        }
        getSamplers(HH) {
          HH.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler");
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vClearCoatParams",
              size: 2,
              type: "vec2"
            }, {
              name: "vClearCoatRefractionParams",
              size: 4,
              type: "vec4"
            }, {
              name: "vClearCoatInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "clearCoatMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "clearCoatRoughnessMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vClearCoatBumpInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "vClearCoatTangentSpaceParams",
              size: 2,
              type: "vec2"
            }, {
              name: "clearCoatBumpMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vClearCoatTintParams",
              size: 4,
              type: "vec4"
            }, {
              name: "clearCoatColorAtDistance",
              size: 1,
              type: "float"
            }, {
              name: "vClearCoatTintInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "clearCoatTintMatrix",
              size: 16,
              type: "mat4"
            }]
          };
        }
      }, IH = new WeakMap(), EH = new WeakMap(), RH = new WeakMap(), sH = new WeakMap(), eH = new WeakMap(), GH = new WeakMap(), AH = new WeakMap(), VH = new WeakMap(), YH = new WeakMap(), (IH => {
        const EH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (IH = CH[Symbol.metadata]) && void 0 !== IH ? IH : null) : void 0;
        QH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], OH = [(0, TH.K)()], rH = [(0, TH.K)()], FH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], NH = [(0, TH.F)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], iI = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], DH = [(0, TH.F)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], PH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], mI = [(0, TH.F)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], LH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], gH = [(0, TH.m)()], yH = [(0, TH.K)()], oH = [(0, TH.K)()], kI = [(0, TH.F)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], (0, hH.i)(HH, null, QH, {
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
        }, cH, UH), (0, hH.i)(HH, null, FH, {
          kind: "accessor",
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
        }, nH, pH), (0, hH.i)(HH, null, NH, {
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
        }, dH, uH), (0, hH.i)(HH, null, iI, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "useRoughnessFromMainTexture" in HH,
            get: HH => HH.useRoughnessFromMainTexture,
            set: (HH, IH) => {
              HH.useRoughnessFromMainTexture = IH;
            }
          },
          metadata: EH
        }, lH, KH), (0, hH.i)(HH, null, DH, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: HH => "textureRoughness" in HH,
            get: HH => HH.textureRoughness,
            set: (HH, IH) => {
              HH.textureRoughness = IH;
            }
          },
          metadata: EH
        }, wH, zH), (0, hH.i)(HH, null, PH, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: HH => "remapF0OnInterfaceChange" in HH,
            get: HH => HH.remapF0OnInterfaceChange,
            set: (HH, IH) => {
              HH.remapF0OnInterfaceChange = IH;
            }
          },
          metadata: EH
        }, tH, jI), (0, hH.i)(HH, null, mI, {
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
        }, vH, bH), (0, hH.i)(HH, null, LH, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "isTintEnabled" in HH,
            get: HH => HH.isTintEnabled,
            set: (HH, IH) => {
              HH.isTintEnabled = IH;
            }
          },
          metadata: EH
        }, SH, xH), (0, hH.i)(HH, null, kI, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "tintTexture" in HH,
            get: HH => HH.tintTexture,
            set: (HH, IH) => {
              HH.tintTexture = IH;
            }
          },
          metadata: EH
        }, sI, eI), (0, hH.i)(null, null, OH, {
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
          metadata: EH
        }, WH, BH), (0, hH.i)(null, null, rH, {
          kind: "field",
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
        }, fH, aH), (0, hH.i)(null, null, gH, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: HH => "tintColor" in HH,
            get: HH => HH.tintColor,
            set: (HH, IH) => {
              HH.tintColor = IH;
            }
          },
          metadata: EH
        }, HI, II), (0, hH.i)(null, null, yH, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: HH => "tintColorAtDistance" in HH,
            get: HH => HH.tintColorAtDistance,
            set: (HH, IH) => {
              HH.tintColorAtDistance = IH;
            }
          },
          metadata: EH
        }, EI, RI), (0, hH.i)(null, null, oH, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: HH => "tintThickness" in HH,
            get: HH => HH.tintThickness,
            set: (HH, IH) => {
              HH.tintThickness = IH;
            }
          },
          metadata: EH
        }, hI, TI), EH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EH
        });
      })(), HH._DefaultIndexOfRefraction = 1.5, HH;
    })();
    class gH extends QH.b {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0;
      }
    }
    let yH = (() => {
      var HH, IH, EH, RH;
      let sH,
        eH,
        GH,
        AH,
        VH,
        YH,
        QH,
        OH = JH.b,
        rH = [],
        FH = [],
        MH = [],
        NH = [],
        iI = [],
        DH = [],
        PH = [],
        mI = [],
        qH = [],
        LH = [],
        yH = [],
        oH = [],
        kI = [],
        CH = [];
      return HH = class extends OH {
        get isEnabled() {
          return (0, hH.d)(this, IH, "f");
        }
        set isEnabled(HH) {
          (0, hH.g)(this, IH, HH, "f");
        }
        get texture() {
          return (0, hH.d)(this, EH, "f");
        }
        set texture(HH) {
          (0, hH.g)(this, EH, HH, "f");
        }
        get thicknessTexture() {
          return (0, hH.d)(this, RH, "f");
        }
        set thicknessTexture(HH) {
          (0, hH.g)(this, RH, HH, "f");
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty();
        }
        isCompatible() {
          return !0;
        }
        constructor(TH) {
          let sH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(TH, "PBRIridescence", 110, new gH(), sH), this._isEnabled = !1, IH.set(this, (0, hH.j)(this, rH, !1)), this.xF = ((0, hH.j)(this, FH), (0, hH.j)(this, MH, 1)), this.minimumThickness = ((0, hH.j)(this, NH), (0, hH.j)(this, iI, HH._DefaultMinimumThickness)), this.maximumThickness = ((0, hH.j)(this, DH), (0, hH.j)(this, PH, HH._DefaultMaximumThickness)), this.indexOfRefraction = ((0, hH.j)(this, mI), (0, hH.j)(this, qH, HH._DefaultIndexOfRefraction)), this._texture = ((0, hH.j)(this, LH), null), EH.set(this, (0, hH.j)(this, yH, null)), this._thicknessTexture = ((0, hH.j)(this, oH), null), RH.set(this, (0, hH.j)(this, kI, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, hH.j)(this, CH), this._internalMarkAllSubMeshesAsTexturesDirty = TH._dirtyCallbacks[1];
        }
        isReadyForSubMesh(HH, IH) {
          if (!this._isEnabled) return !0;
          if (HH._areTexturesDirty && IH.texturesEnabled) {
            if (this._texture && XH.b.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && XH.b.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
          }
          return !0;
        }
        prepareDefinesBeforeAttributes(HH, IH) {
          this._isEnabled ? (HH.IRIDESCENCE = !0, HH._areTexturesDirty && IH.texturesEnabled && (this._texture && XH.b.IridescenceTextureEnabled ? (0, ZH.X)(this._texture, HH, "IRIDESCENCE_TEXTURE") : HH.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && XH.b.IridescenceTextureEnabled ? (0, ZH.X)(this._thicknessTexture, HH, "IRIDESCENCE_THICKNESS_TEXTURE") : HH.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (HH.IRIDESCENCE = !1, HH.IRIDESCENCE_TEXTURE = !1, HH.IRIDESCENCE_THICKNESS_TEXTURE = !1, HH.IRIDESCENCE_TEXTUREDIRECTUV = 0, HH.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0);
        }
        bindForSubMesh(HH, IH) {
          if (!this._isEnabled) return;
          const EH = this._material.isFrozen;
          if (!HH.useUbo || !EH || !HH.isSync) {
            var RH, hH, TH, sH, eH, GH, AH, VH;
            if ((this._texture || this._thicknessTexture) && XH.b.IridescenceTextureEnabled) HH.updateFloat4("vIridescenceInfos", null !== (RH = null === (hH = this._texture) || void 0 === hH ? void 0 : hH.coordinatesIndex) && void 0 !== RH ? RH : 0, null !== (TH = null === (sH = this._texture) || void 0 === sH ? void 0 : sH.level) && void 0 !== TH ? TH : 0, null !== (eH = null === (GH = this._thicknessTexture) || void 0 === GH ? void 0 : GH.coordinatesIndex) && void 0 !== eH ? eH : 0, null !== (AH = null === (VH = this._thicknessTexture) || void 0 === VH ? void 0 : VH.level) && void 0 !== AH ? AH : 0), this._texture && (0, ZH.z)(this._texture, HH, "iridescence"), this._thicknessTexture && (0, ZH.z)(this._thicknessTexture, HH, "iridescenceThickness");
            HH.updateFloat4("vIridescenceParams", this.xF, this.indexOfRefraction, this.minimumThickness, this.maximumThickness);
          }
          IH.texturesEnabled && (this._texture && XH.b.IridescenceTextureEnabled && HH.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && XH.b.IridescenceTextureEnabled && HH.setTexture("iridescenceThicknessSampler", this._thicknessTexture));
        }
        hasTexture(HH) {
          return this._texture === HH || this._thicknessTexture === HH;
        }
        getActiveTextures(HH) {
          this._texture && HH.push(this._texture), this._thicknessTexture && HH.push(this._thicknessTexture);
        }
        getAnimatables(HH) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && HH.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && HH.push(this._thicknessTexture);
        }
        dispose(HH) {
          var IH, EH;
          HH && (null === (IH = this._texture) || void 0 === IH || IH.dispose(), null === (EH = this._thicknessTexture) || void 0 === EH || EH.dispose());
        }
        getClassName() {
          return "PBRIridescenceConfiguration";
        }
        addFallbacks(HH, IH, EH) {
          return HH.IRIDESCENCE && IH.addFallback(EH++, "IRIDESCENCE"), EH;
        }
        getSamplers(HH) {
          HH.push("iridescenceSampler", "iridescenceThicknessSampler");
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vIridescenceParams",
              size: 4,
              type: "vec4"
            }, {
              name: "vIridescenceInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "iridescenceMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "iridescenceThicknessMatrix",
              size: 16,
              type: "mat4"
            }]
          };
        }
      }, IH = new WeakMap(), EH = new WeakMap(), RH = new WeakMap(), (IH => {
        const EH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (IH = OH[Symbol.metadata]) && void 0 !== IH ? IH : null) : void 0;
        sH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], eH = [(0, TH.K)()], GH = [(0, TH.K)()], AH = [(0, TH.K)()], VH = [(0, TH.K)()], YH = [(0, TH.F)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], QH = [(0, TH.F)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], (0, hH.i)(HH, null, sH, {
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
        }, rH, FH), (0, hH.i)(HH, null, YH, {
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
        }, yH, oH), (0, hH.i)(HH, null, QH, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "thicknessTexture" in HH,
            get: HH => HH.thicknessTexture,
            set: (HH, IH) => {
              HH.thicknessTexture = IH;
            }
          },
          metadata: EH
        }, kI, CH), (0, hH.i)(null, null, eH, {
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
          metadata: EH
        }, MH, NH), (0, hH.i)(null, null, GH, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: HH => "minimumThickness" in HH,
            get: HH => HH.minimumThickness,
            set: (HH, IH) => {
              HH.minimumThickness = IH;
            }
          },
          metadata: EH
        }, iI, DH), (0, hH.i)(null, null, AH, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: HH => "maximumThickness" in HH,
            get: HH => HH.maximumThickness,
            set: (HH, IH) => {
              HH.maximumThickness = IH;
            }
          },
          metadata: EH
        }, PH, mI), (0, hH.i)(null, null, VH, {
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
        }, qH, LH), EH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EH
        });
      })(), HH._DefaultMinimumThickness = 100, HH._DefaultMaximumThickness = 400, HH._DefaultIndexOfRefraction = 1.3, HH;
    })();
    class oH extends QH.b {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1;
      }
    }
    let kI = (() => {
      var HH, IH, EH, RH;
      let sH,
        eH,
        GH,
        AH,
        QH,
        OH = JH.b,
        rH = [],
        FH = [],
        MH = [],
        NH = [],
        iI = [],
        DH = [],
        PH = [],
        mI = [],
        qH = [],
        LH = [];
      return HH = class extends OH {
        get isEnabled() {
          return (0, hH.d)(this, IH, "f");
        }
        set isEnabled(HH) {
          (0, hH.g)(this, IH, HH, "f");
        }
        set angle(HH) {
          this.direction.x = Math.cos(HH), this.direction.y = Math.sin(HH);
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x);
        }
        get texture() {
          return (0, hH.d)(this, EH, "f");
        }
        set texture(HH) {
          (0, hH.g)(this, EH, HH, "f");
        }
        get legacy() {
          return (0, hH.d)(this, RH, "f");
        }
        set legacy(HH) {
          (0, hH.g)(this, RH, HH, "f");
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty();
        }
        _markAllSubMeshesAsMiscDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsMiscDirty();
        }
        isCompatible() {
          return !0;
        }
        constructor(HH) {
          let TH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(HH, "PBRAnisotropic", 110, new oH(), TH), this._isEnabled = !1, IH.set(this, (0, hH.j)(this, rH, !1)), this.xF = ((0, hH.j)(this, FH), (0, hH.j)(this, MH, 1)), this.direction = ((0, hH.j)(this, NH), (0, hH.j)(this, iI, new VH.t(1, 0))), this._texture = ((0, hH.j)(this, DH), null), EH.set(this, (0, hH.j)(this, PH, null)), this._legacy = ((0, hH.j)(this, mI), !1), RH.set(this, (0, hH.j)(this, qH, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, hH.j)(this, LH), this._internalMarkAllSubMeshesAsTexturesDirty = HH._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = HH._dirtyCallbacks[16];
        }
        isReadyForSubMesh(HH, IH) {
          return !this._isEnabled || !(HH._areTexturesDirty && IH.texturesEnabled && this._texture && XH.b.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking());
        }
        prepareDefinesBeforeAttributes(HH, IH, EH) {
          this._isEnabled ? (HH.ANISOTROPIC = this._isEnabled, this._isEnabled && !EH.isVerticesDataPresent(YH.t.TangentKind) && (HH._needUVs = !0, HH.MAINUV1 = !0), HH._areTexturesDirty && IH.texturesEnabled && (this._texture && XH.b.AnisotropicTextureEnabled ? (0, ZH.X)(this._texture, HH, "ANISOTROPIC_TEXTURE") : HH.ANISOTROPIC_TEXTURE = !1), HH._areMiscDirty && (HH.ANISOTROPIC_LEGACY = this._legacy)) : (HH.ANISOTROPIC = !1, HH.ANISOTROPIC_TEXTURE = !1, HH.ANISOTROPIC_TEXTUREDIRECTUV = 0, HH.ANISOTROPIC_LEGACY = !1);
        }
        bindForSubMesh(HH, IH) {
          if (!this._isEnabled) return;
          const EH = this._material.isFrozen;
          HH.useUbo && EH && HH.isSync || (this._texture && XH.b.AnisotropicTextureEnabled && (HH.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, ZH.z)(this._texture, HH, "anisotropy")), HH.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.xF)), IH.texturesEnabled && this._texture && XH.b.AnisotropicTextureEnabled && HH.setTexture("anisotropySampler", this._texture);
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
          HH && this._texture && this._texture.dispose();
        }
        getClassName() {
          return "PBRAnisotropicConfiguration";
        }
        addFallbacks(HH, IH, EH) {
          return HH.ANISOTROPIC && IH.addFallback(EH++, "ANISOTROPIC"), EH;
        }
        getSamplers(HH) {
          HH.push("anisotropySampler");
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vAnisotropy",
              size: 3,
              type: "vec3"
            }, {
              name: "vAnisotropyInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "anisotropyMatrix",
              size: 16,
              type: "mat4"
            }]
          };
        }
        parse(HH, IH, EH) {
          super.parse(HH, IH, EH), void 0 === HH.legacy && (this.legacy = !0);
        }
      }, IH = new WeakMap(), EH = new WeakMap(), RH = new WeakMap(), (IH => {
        const EH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (IH = OH[Symbol.metadata]) && void 0 !== IH ? IH : null) : void 0;
        sH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], eH = [(0, TH.K)()], GH = [(0, TH.G)()], AH = [(0, TH.F)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], QH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsMiscDirty")], (0, hH.i)(HH, null, sH, {
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
        }, rH, FH), (0, hH.i)(HH, null, AH, {
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
        }, PH, mI), (0, hH.i)(HH, null, QH, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: HH => "legacy" in HH,
            get: HH => HH.legacy,
            set: (HH, IH) => {
              HH.legacy = IH;
            }
          },
          metadata: EH
        }, qH, LH), (0, hH.i)(null, null, eH, {
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
          metadata: EH
        }, MH, NH), (0, hH.i)(null, null, GH, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: HH => "direction" in HH,
            get: HH => HH.direction,
            set: (HH, IH) => {
              HH.direction = IH;
            }
          },
          metadata: EH
        }, iI, DH), EH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EH
        });
      })(), HH;
    })();
    class CH extends QH.b {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1;
      }
    }
    let cH = (() => {
      var HH, IH, EH, RH, sH, eH, GH, AH;
      let VH,
        YH,
        QH,
        OH,
        rH,
        FH,
        NH,
        iI,
        DH,
        PH = JH.b,
        mI = [],
        qH = [],
        LH = [],
        gH = [],
        yH = [],
        oH = [],
        kI = [],
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
        lH = [];
      return HH = class extends PH {
        get isEnabled() {
          return (0, hH.d)(this, IH, "f");
        }
        set isEnabled(HH) {
          (0, hH.g)(this, IH, HH, "f");
        }
        get linkSheenWithAlbedo() {
          return (0, hH.d)(this, EH, "f");
        }
        set linkSheenWithAlbedo(HH) {
          (0, hH.g)(this, EH, HH, "f");
        }
        get texture() {
          return (0, hH.d)(this, RH, "f");
        }
        set texture(HH) {
          (0, hH.g)(this, RH, HH, "f");
        }
        get useRoughnessFromMainTexture() {
          return (0, hH.d)(this, sH, "f");
        }
        set useRoughnessFromMainTexture(HH) {
          (0, hH.g)(this, sH, HH, "f");
        }
        get roughness() {
          return (0, hH.d)(this, eH, "f");
        }
        set roughness(HH) {
          (0, hH.g)(this, eH, HH, "f");
        }
        get textureRoughness() {
          return (0, hH.d)(this, GH, "f");
        }
        set textureRoughness(HH) {
          (0, hH.g)(this, GH, HH, "f");
        }
        get albedoScaling() {
          return (0, hH.d)(this, AH, "f");
        }
        set albedoScaling(HH) {
          (0, hH.g)(this, AH, HH, "f");
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty();
        }
        isCompatible() {
          return !0;
        }
        constructor(HH) {
          let TH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(HH, "Sheen", 120, new CH(), TH), this._isEnabled = !1, IH.set(this, (0, hH.j)(this, mI, !1)), this._linkSheenWithAlbedo = ((0, hH.j)(this, qH), !1), EH.set(this, (0, hH.j)(this, LH, !1)), this.xF = ((0, hH.j)(this, gH), (0, hH.j)(this, yH, 1)), this.color = ((0, hH.j)(this, oH), (0, hH.j)(this, kI, MH.b.White())), this._texture = ((0, hH.j)(this, cH), null), RH.set(this, (0, hH.j)(this, UH, null)), this._useRoughnessFromMainTexture = ((0, hH.j)(this, WH), !0), sH.set(this, (0, hH.j)(this, BH, !0)), this._roughness = ((0, hH.j)(this, fH), null), eH.set(this, (0, hH.j)(this, aH, null)), this._textureRoughness = ((0, hH.j)(this, nH), null), GH.set(this, (0, hH.j)(this, pH, null)), this._albedoScaling = ((0, hH.j)(this, dH), !1), AH.set(this, (0, hH.j)(this, uH, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, hH.j)(this, lH), this._internalMarkAllSubMeshesAsTexturesDirty = HH._dirtyCallbacks[1];
        }
        isReadyForSubMesh(HH, IH) {
          if (!this._isEnabled) return !0;
          if (HH._areTexturesDirty && IH.texturesEnabled) {
            if (this._texture && XH.b.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && XH.b.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
          }
          return !0;
        }
        prepareDefinesBeforeAttributes(HH, IH) {
          this._isEnabled ? (HH.SHEEN = !0, HH.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, HH.SHEEN_ROUGHNESS = null !== this._roughness, HH.SHEEN_ALBEDOSCALING = this._albedoScaling, HH.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, HH._areTexturesDirty && IH.texturesEnabled && (this._texture && XH.b.SheenTextureEnabled ? ((0, ZH.X)(this._texture, HH, "SHEEN_TEXTURE"), HH.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : HH.SHEEN_TEXTURE = !1, this._textureRoughness && XH.b.SheenTextureEnabled ? (0, ZH.X)(this._textureRoughness, HH, "SHEEN_TEXTURE_ROUGHNESS") : HH.SHEEN_TEXTURE_ROUGHNESS = !1)) : (HH.SHEEN = !1, HH.SHEEN_TEXTURE = !1, HH.SHEEN_TEXTURE_ROUGHNESS = !1, HH.SHEEN_LINKWITHALBEDO = !1, HH.SHEEN_ROUGHNESS = !1, HH.SHEEN_ALBEDOSCALING = !1, HH.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, HH.SHEEN_GAMMATEXTURE = !1, HH.SHEEN_TEXTUREDIRECTUV = 0, HH.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0);
        }
        bindForSubMesh(HH, IH, EH, RH) {
          if (!this._isEnabled) return;
          const hH = RH.materialDefines,
            TH = this._material.isFrozen;
          if (!HH.useUbo || !TH || !HH.isSync) {
            var sH, eH, GH, AH, VH, YH, QH, JH;
            if ((this._texture || this._textureRoughness) && XH.b.SheenTextureEnabled) HH.updateFloat4("vSheenInfos", null !== (sH = null === (eH = this._texture) || void 0 === eH ? void 0 : eH.coordinatesIndex) && void 0 !== sH ? sH : 0, null !== (GH = null === (AH = this._texture) || void 0 === AH ? void 0 : AH.level) && void 0 !== GH ? GH : 0, null !== (VH = null === (YH = this._textureRoughness) || void 0 === YH ? void 0 : YH.coordinatesIndex) && void 0 !== VH ? VH : 0, null !== (QH = null === (JH = this._textureRoughness) || void 0 === JH ? void 0 : JH.level) && void 0 !== QH ? QH : 0), this._texture && (0, ZH.z)(this._texture, HH, "sheen"), this._textureRoughness && !hH.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, ZH.z)(this._textureRoughness, HH, "sheenRoughness");
            HH.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.xF), null !== this._roughness && HH.updateFloat("vSheenRoughness", this._roughness);
          }
          IH.texturesEnabled && (this._texture && XH.b.SheenTextureEnabled && HH.setTexture("sheenSampler", this._texture), this._textureRoughness && !hH.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && XH.b.SheenTextureEnabled && HH.setTexture("sheenRoughnessSampler", this._textureRoughness));
        }
        hasTexture(HH) {
          return this._texture === HH || this._textureRoughness === HH;
        }
        getActiveTextures(HH) {
          this._texture && HH.push(this._texture), this._textureRoughness && HH.push(this._textureRoughness);
        }
        getAnimatables(HH) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && HH.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && HH.push(this._textureRoughness);
        }
        dispose(HH) {
          var IH, EH;
          HH && (null === (IH = this._texture) || void 0 === IH || IH.dispose(), null === (EH = this._textureRoughness) || void 0 === EH || EH.dispose());
        }
        getClassName() {
          return "PBRSheenConfiguration";
        }
        addFallbacks(HH, IH, EH) {
          return HH.SHEEN && IH.addFallback(EH++, "SHEEN"), EH;
        }
        getSamplers(HH) {
          HH.push("sheenSampler", "sheenRoughnessSampler");
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vSheenColor",
              size: 4,
              type: "vec4"
            }, {
              name: "vSheenRoughness",
              size: 1,
              type: "float"
            }, {
              name: "vSheenInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "sheenMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "sheenRoughnessMatrix",
              size: 16,
              type: "mat4"
            }]
          };
        }
      }, IH = new WeakMap(), EH = new WeakMap(), RH = new WeakMap(), sH = new WeakMap(), eH = new WeakMap(), GH = new WeakMap(), AH = new WeakMap(), (IH => {
        const EH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (IH = PH[Symbol.metadata]) && void 0 !== IH ? IH : null) : void 0;
        VH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], YH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], QH = [(0, TH.K)()], OH = [(0, TH.m)()], rH = [(0, TH.F)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], FH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], NH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], iI = [(0, TH.F)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], DH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], (0, hH.i)(HH, null, VH, {
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
        }, mI, qH), (0, hH.i)(HH, null, YH, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: HH => "linkSheenWithAlbedo" in HH,
            get: HH => HH.linkSheenWithAlbedo,
            set: (HH, IH) => {
              HH.linkSheenWithAlbedo = IH;
            }
          },
          metadata: EH
        }, LH, gH), (0, hH.i)(HH, null, rH, {
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
        }, UH, WH), (0, hH.i)(HH, null, FH, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "useRoughnessFromMainTexture" in HH,
            get: HH => HH.useRoughnessFromMainTexture,
            set: (HH, IH) => {
              HH.useRoughnessFromMainTexture = IH;
            }
          },
          metadata: EH
        }, BH, fH), (0, hH.i)(HH, null, NH, {
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
        }, aH, nH), (0, hH.i)(HH, null, iI, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: HH => "textureRoughness" in HH,
            get: HH => HH.textureRoughness,
            set: (HH, IH) => {
              HH.textureRoughness = IH;
            }
          },
          metadata: EH
        }, pH, dH), (0, hH.i)(HH, null, DH, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: HH => "albedoScaling" in HH,
            get: HH => HH.albedoScaling,
            set: (HH, IH) => {
              HH.albedoScaling = IH;
            }
          },
          metadata: EH
        }, uH, lH), (0, hH.i)(null, null, QH, {
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
          metadata: EH
        }, yH, oH), (0, hH.i)(null, null, OH, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: HH => "color" in HH,
            get: HH => HH.color,
            set: (HH, IH) => {
              HH.color = IH;
            }
          },
          metadata: EH
        }, kI, cH), EH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EH
        });
      })(), HH;
    })();
    class UH extends QH.b {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1;
      }
    }
    let WH = (() => {
      var HH, IH, EH, RH, sH, eH, GH, AH, YH, QH, OH, rH, FH, NH, iI, DH, PH;
      let mI,
        qH,
        LH,
        gH,
        yH,
        oH,
        kI,
        CH,
        cH,
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
        zH,
        tH,
        jI,
        vH,
        bH,
        SH,
        xH,
        HI,
        II,
        EI,
        RI = JH.b,
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
        KI = [],
        wI = [],
        zI = [],
        tI = [],
        jE = [],
        vI = [],
        bI = [],
        SI = [],
        xI = [],
        HE = [],
        IE = [],
        EE = [],
        RE = [],
        hE = [],
        TE = [],
        sE = [],
        eE = [],
        GE = [],
        AE = [],
        VE = [],
        YE = [];
      return HH = class extends RI {
        get isRefractionEnabled() {
          return (0, hH.d)(this, IH, "f");
        }
        set isRefractionEnabled(HH) {
          (0, hH.g)(this, IH, HH, "f");
        }
        get isTranslucencyEnabled() {
          return (0, hH.d)(this, EH, "f");
        }
        set isTranslucencyEnabled(HH) {
          (0, hH.g)(this, EH, HH, "f");
        }
        get isDispersionEnabled() {
          return (0, hH.d)(this, RH, "f");
        }
        set isDispersionEnabled(HH) {
          (0, hH.g)(this, RH, HH, "f");
        }
        get isScatteringEnabled() {
          return (0, hH.d)(this, sH, "f");
        }
        set isScatteringEnabled(HH) {
          (0, hH.g)(this, sH, HH, "f");
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null;
        }
        set scatteringDiffusionProfile(HH) {
          this._scene.enableSubSurfaceForPrePass() && HH && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(HH));
        }
        get useAlbedoToTintRefraction() {
          return (0, hH.d)(this, eH, "f");
        }
        set useAlbedoToTintRefraction(HH) {
          (0, hH.g)(this, eH, HH, "f");
        }
        get useAlbedoToTintTranslucency() {
          return (0, hH.d)(this, GH, "f");
        }
        set useAlbedoToTintTranslucency(HH) {
          (0, hH.g)(this, GH, HH, "f");
        }
        get thicknessTexture() {
          return (0, hH.d)(this, AH, "f");
        }
        set thicknessTexture(HH) {
          (0, hH.g)(this, AH, HH, "f");
        }
        get refractionTexture() {
          return (0, hH.d)(this, YH, "f");
        }
        set refractionTexture(HH) {
          (0, hH.g)(this, YH, HH, "f");
        }
        get indexOfRefraction() {
          return (0, hH.d)(this, QH, "f");
        }
        set indexOfRefraction(HH) {
          (0, hH.g)(this, QH, HH, "f");
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction;
        }
        set volumeIndexOfRefraction(HH) {
          const IH = HH >= 1 ? HH : -1;
          this._volumeIndexOfRefraction !== IH && (this._volumeIndexOfRefraction = IH, this._markAllSubMeshesAsTexturesDirty());
        }
        get invertRefractionY() {
          return (0, hH.d)(this, OH, "f");
        }
        set invertRefractionY(HH) {
          (0, hH.g)(this, OH, HH, "f");
        }
        get linkRefractionWithTransparency() {
          return (0, hH.d)(this, rH, "f");
        }
        set linkRefractionWithTransparency(HH) {
          (0, hH.g)(this, rH, HH, "f");
        }
        get useMaskFromThicknessTexture() {
          return (0, hH.d)(this, FH, "f");
        }
        set useMaskFromThicknessTexture(HH) {
          (0, hH.g)(this, FH, HH, "f");
        }
        get refractionIntensityTexture() {
          return (0, hH.d)(this, NH, "f");
        }
        set refractionIntensityTexture(HH) {
          (0, hH.g)(this, NH, HH, "f");
        }
        get translucencyIntensityTexture() {
          return (0, hH.d)(this, iI, "f");
        }
        set translucencyIntensityTexture(HH) {
          (0, hH.g)(this, iI, HH, "f");
        }
        get translucencyColorTexture() {
          return (0, hH.d)(this, DH, "f");
        }
        set translucencyColorTexture(HH) {
          (0, hH.g)(this, DH, HH, "f");
        }
        get useGltfStyleTextures() {
          return (0, hH.d)(this, PH, "f");
        }
        set useGltfStyleTextures(HH) {
          (0, hH.g)(this, PH, HH, "f");
        }
        get legacyTransluceny() {
          return this.legacyTranslucency;
        }
        set legacyTransluceny(HH) {
          this.legacyTranslucency = HH;
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled), this._internalMarkAllSubMeshesAsTexturesDirty();
        }
        _markScenePrePassDirty() {
          this._enable(this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled), this._internalMarkAllSubMeshesAsTexturesDirty(), this._internalMarkScenePrePassDirty();
        }
        isCompatible() {
          return !0;
        }
        constructor(TH) {
          let VH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(TH, "PBRSubSurface", 130, new UH(), VH), this._isRefractionEnabled = !1, IH.set(this, (0, hH.j)(this, hI, !1)), this._isTranslucencyEnabled = ((0, hH.j)(this, TI), !1), EH.set(this, (0, hH.j)(this, sI, !1)), this._isDispersionEnabled = ((0, hH.j)(this, eI), !1), RH.set(this, (0, hH.j)(this, GI, !1)), this._isScatteringEnabled = ((0, hH.j)(this, AI), !1), sH.set(this, (0, hH.j)(this, VI, !1)), this._scatteringDiffusionProfileIndex = ((0, hH.j)(this, YI), (0, hH.j)(this, QI, 0)), this.refractionIntensity = ((0, hH.j)(this, JI), (0, hH.j)(this, OI, 1)), this.translucencyIntensity = ((0, hH.j)(this, rI), (0, hH.j)(this, FI, 1)), this._useAlbedoToTintRefraction = ((0, hH.j)(this, MI), !1), eH.set(this, (0, hH.j)(this, NI, !1)), this._useAlbedoToTintTranslucency = ((0, hH.j)(this, iE), !1), GH.set(this, (0, hH.j)(this, DI, !1)), this._thicknessTexture = ((0, hH.j)(this, PI), null), AH.set(this, (0, hH.j)(this, XI, null)), this._refractionTexture = ((0, hH.j)(this, mE), null), YH.set(this, (0, hH.j)(this, ZI, null)), this._indexOfRefraction = ((0, hH.j)(this, qI), 1.5), QH.set(this, (0, hH.j)(this, LI, 1.5)), this._volumeIndexOfRefraction = ((0, hH.j)(this, gI), (0, hH.j)(this, yI, -1)), this._invertRefractionY = ((0, hH.j)(this, oI), !1), OH.set(this, (0, hH.j)(this, kE, !1)), this._linkRefractionWithTransparency = ((0, hH.j)(this, CI), !1), rH.set(this, (0, hH.j)(this, cI, !1)), this.minimumThickness = ((0, hH.j)(this, UI), (0, hH.j)(this, WI, 0)), this.maximumThickness = ((0, hH.j)(this, BI), (0, hH.j)(this, fI, 1)), this.useThicknessAsDepth = ((0, hH.j)(this, aI), (0, hH.j)(this, nI, !1)), this.tintColor = ((0, hH.j)(this, pI), (0, hH.j)(this, dI, MH.b.White())), this.tintColorAtDistance = ((0, hH.j)(this, uI), (0, hH.j)(this, lI, 1)), this.dispersion = ((0, hH.j)(this, KI), (0, hH.j)(this, wI, 0)), this.diffusionDistance = ((0, hH.j)(this, zI), (0, hH.j)(this, tI, MH.b.White())), this._useMaskFromThicknessTexture = ((0, hH.j)(this, jE), !1), FH.set(this, (0, hH.j)(this, vI, !1)), this._refractionIntensityTexture = ((0, hH.j)(this, bI), null), NH.set(this, (0, hH.j)(this, SI, null)), this._translucencyIntensityTexture = ((0, hH.j)(this, xI), null), iI.set(this, (0, hH.j)(this, HE, null)), this.translucencyColor = ((0, hH.j)(this, IE), (0, hH.j)(this, EE, null)), this._translucencyColorTexture = ((0, hH.j)(this, RE), null), DH.set(this, (0, hH.j)(this, hE, null)), this._useGltfStyleTextures = ((0, hH.j)(this, TE), !0), PH.set(this, (0, hH.j)(this, sE, !0)), this.applyAlbedoAfterSubSurface = ((0, hH.j)(this, eE), (0, hH.j)(this, GE, HH.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, hH.j)(this, AE), (0, hH.j)(this, VE, HH.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, hH.j)(this, YE), this._scene = TH.kh(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = TH._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = TH._dirtyCallbacks[32];
        }
        isReadyForSubMesh(HH, IH) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (HH._areTexturesDirty && IH.texturesEnabled) {
            if (this._thicknessTexture && XH.b.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && XH.b.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && XH.b.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && XH.b.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const HH = this._getRefractionTexture(IH);
            if (HH && XH.b.RefractionTextureEnabled && !HH.isReadyOrNotBlocking()) return !1;
          }
          return !0;
        }
        prepareDefinesBeforeAttributes(HH, IH) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return HH.SUBSURFACE = !1, HH.SS_DISPERSION = !1, HH.SS_TRANSLUCENCY = !1, HH.SS_SCATTERING = !1, HH.SS_REFRACTION = !1, HH.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, HH.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, HH.SS_THICKNESSANDMASK_TEXTURE = !1, HH.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, HH.SS_HAS_THICKNESS = !1, HH.SS_REFRACTIONINTENSITY_TEXTURE = !1, HH.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, HH.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, HH.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, HH.SS_REFRACTIONMAP_3D = !1, HH.SS_REFRACTIONMAP_OPPOSITEZ = !1, HH.SS_LODINREFRACTIONALPHA = !1, HH.SS_GAMMAREFRACTION = !1, HH.SS_RGBDREFRACTION = !1, HH.SS_LINEARSPECULARREFRACTION = !1, HH.SS_LINKREFRACTIONTOTRANSPARENCY = !1, HH.SS_ALBEDOFORREFRACTIONTINT = !1, HH.SS_ALBEDOFORTRANSLUCENCYTINT = !1, HH.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, HH.SS_USE_THICKNESS_AS_DEPTH = !1, HH.SS_USE_GLTF_TEXTURES = !1, HH.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, HH.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, HH.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void (HH.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (HH._areTexturesDirty) {
            if (HH.SUBSURFACE = !0, HH.SS_DISPERSION = this._isDispersionEnabled, HH.SS_TRANSLUCENCY = this._isTranslucencyEnabled, HH.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, HH.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, HH.SS_SCATTERING = this._isScatteringEnabled, HH.SS_THICKNESSANDMASK_TEXTURE = !1, HH.SS_REFRACTIONINTENSITY_TEXTURE = !1, HH.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, HH.SS_HAS_THICKNESS = !1, HH.SS_USE_GLTF_TEXTURES = !1, HH.SS_REFRACTION = !1, HH.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, HH.SS_REFRACTIONMAP_3D = !1, HH.SS_GAMMAREFRACTION = !1, HH.SS_RGBDREFRACTION = !1, HH.SS_LINEARSPECULARREFRACTION = !1, HH.SS_REFRACTIONMAP_OPPOSITEZ = !1, HH.SS_LODINREFRACTIONALPHA = !1, HH.SS_LINKREFRACTIONTOTRANSPARENCY = !1, HH.SS_ALBEDOFORREFRACTIONTINT = !1, HH.SS_ALBEDOFORTRANSLUCENCYTINT = !1, HH.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, HH.SS_USE_THICKNESS_AS_DEPTH = !1, HH.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, HH.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, HH._areTexturesDirty && IH.texturesEnabled && (this._thicknessTexture && XH.b.ThicknessTextureEnabled && (0, ZH.X)(this._thicknessTexture, HH, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && XH.b.RefractionIntensityTextureEnabled && (0, ZH.X)(this._refractionIntensityTexture, HH, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && XH.b.TranslucencyIntensityTextureEnabled && (0, ZH.X)(this._translucencyIntensityTexture, HH, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && XH.b.TranslucencyColorTextureEnabled && ((0, ZH.X)(this._translucencyColorTexture, HH, "SS_TRANSLUCENCYCOLOR_TEXTURE"), HH.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), HH.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, HH.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, HH.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, HH.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && IH.texturesEnabled) {
              const EH = this._getRefractionTexture(IH);
              EH && XH.b.RefractionTextureEnabled && (HH.SS_REFRACTION = !0, HH.SS_REFRACTIONMAP_3D = EH.isCube, HH.SS_GAMMAREFRACTION = EH.gammaSpace, HH.SS_RGBDREFRACTION = EH.isRGBD, HH.SS_LINEARSPECULARREFRACTION = EH.linearSpecularLOD, HH.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && EH.isCube ? !EH.invertZ : EH.invertZ, HH.SS_LODINREFRACTIONALPHA = EH.lodLevelInAlpha, HH.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, HH.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, HH.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = EH.isCube && EH.boundingBoxSize, HH.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth);
            }
            this._isTranslucencyEnabled && (HH.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency);
          }
        }
        hardBindForSubMesh(HH, IH, EH, RH) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled) if (0 === this.maximumThickness && 0 === this.minimumThickness) HH.updateFloat2("vThicknessParam", 0, 0);else {
            RH.getRenderingMesh().getWorldMatrix().decompose(VH.p.Rh[0]);
            const IH = Math.max(Math.abs(VH.p.Rh[0].x), Math.abs(VH.p.Rh[0].y), Math.abs(VH.p.Rh[0].z));
            HH.updateFloat2("vThicknessParam", this.minimumThickness * IH, (this.maximumThickness - this.minimumThickness) * IH);
          }
        }
        bindForSubMesh(HH, IH, EH, RH) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const hH = RH.materialDefines,
            TH = this._material.isFrozen,
            sH = this._material.realTimeFiltering,
            eH = hH.LODBASEDMICROSFURACE,
            GH = this._getRefractionTexture(IH);
          if (!HH.useUbo || !TH || !HH.isSync) {
            var AH;
            if (this._thicknessTexture && XH.b.ThicknessTextureEnabled && (HH.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, ZH.z)(this._thicknessTexture, HH, "thickness")), this._refractionIntensityTexture && XH.b.RefractionIntensityTextureEnabled && hH.SS_REFRACTIONINTENSITY_TEXTURE && (HH.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, ZH.z)(this._refractionIntensityTexture, HH, "refractionIntensity")), this._translucencyColorTexture && XH.b.TranslucencyColorTextureEnabled && hH.SS_TRANSLUCENCYCOLOR_TEXTURE && (HH.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, ZH.z)(this._translucencyColorTexture, HH, "translucencyColor")), this._translucencyIntensityTexture && XH.b.TranslucencyIntensityTextureEnabled && hH.SS_TRANSLUCENCYINTENSITY_TEXTURE && (HH.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, ZH.z)(this._translucencyIntensityTexture, HH, "translucencyIntensity")), GH && XH.b.RefractionTextureEnabled) {
              HH.uN("refractionMatrix", GH.getRefractionTextureMatrix());
              let IH = 1;
              GH.isCube || GH.depth && (IH = GH.depth);
              const EH = GH.getSize().width,
                RH = this.volumeIndexOfRefraction;
              if (HH.updateFloat4("vRefractionInfos", GH.level, 1 / RH, IH, this._invertRefractionY ? -1 : 1), HH.updateFloat4("vRefractionMicrosurfaceInfos", EH, GH.lodGenerationScale, GH.lodGenerationOffset, 1 / this.indexOfRefraction), sH && HH.updateFloat2("vRefractionFilteringInfo", EH, Math.log2(EH)), GH.boundingBoxSize) {
                const IH = GH;
                HH.updateVector3("vRefractionPosition", IH.boundingBoxPosition), HH.updateVector3("vRefractionSize", IH.boundingBoxSize);
              }
            }
            this._isScatteringEnabled && HH.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), HH.updateColor3("vDiffusionDistance", this.diffusionDistance), HH.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), HH.updateColor4("vTranslucencyColor", null !== (AH = this.translucencyColor) && void 0 !== AH ? AH : this.tintColor, 0), HH.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), HH.updateFloat("dispersion", this.dispersion);
          }
          IH.texturesEnabled && (this._thicknessTexture && XH.b.ThicknessTextureEnabled && HH.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && XH.b.RefractionIntensityTextureEnabled && hH.SS_REFRACTIONINTENSITY_TEXTURE && HH.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && XH.b.TranslucencyIntensityTextureEnabled && hH.SS_TRANSLUCENCYINTENSITY_TEXTURE && HH.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && XH.b.TranslucencyColorTextureEnabled && hH.SS_TRANSLUCENCYCOLOR_TEXTURE && HH.setTexture("translucencyColorSampler", this._translucencyColorTexture), GH && XH.b.RefractionTextureEnabled && (eH ? HH.setTexture("refractionSampler", GH) : (HH.setTexture("refractionSampler", GH._lodTextureMid || GH), HH.setTexture("refractionSamplerLow", GH._lodTextureLow || GH), HH.setTexture("refractionSamplerHigh", GH._lodTextureHigh || GH))));
        }
        _getRefractionTexture(HH) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? HH.environmentTexture : null;
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency;
        }
        fillRenderTargetTextures(HH) {
          XH.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && HH.push(this._refractionTexture);
        }
        hasTexture(HH) {
          return this._thicknessTexture === HH || this._refractionTexture === HH || this._refractionIntensityTexture === HH || this._translucencyIntensityTexture === HH || this._translucencyColorTexture === HH;
        }
        hasRenderTargetTextures() {
          return !!(XH.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget);
        }
        getActiveTextures(HH) {
          this._thicknessTexture && HH.push(this._thicknessTexture), this._refractionTexture && HH.push(this._refractionTexture), this._refractionIntensityTexture && HH.push(this._refractionIntensityTexture), this._translucencyColorTexture && HH.push(this._translucencyColorTexture), this._translucencyIntensityTexture && HH.push(this._translucencyIntensityTexture);
        }
        getAnimatables(HH) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && HH.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && HH.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && HH.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && HH.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && HH.push(this._translucencyIntensityTexture);
        }
        dispose(HH) {
          HH && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose());
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration";
        }
        addFallbacks(HH, IH, EH) {
          return HH.SS_SCATTERING && IH.addFallback(EH++, "SS_SCATTERING"), HH.SS_TRANSLUCENCY && IH.addFallback(EH++, "SS_TRANSLUCENCY"), EH;
        }
        getSamplers(HH) {
          HH.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler");
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vRefractionMicrosurfaceInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "vRefractionFilteringInfo",
              size: 2,
              type: "vec2"
            }, {
              name: "vTranslucencyIntensityInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "vRefractionInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "refractionMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vThicknessInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "vRefractionIntensityInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "thicknessMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "refractionIntensityMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "translucencyIntensityMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vThicknessParam",
              size: 2,
              type: "vec2"
            }, {
              name: "vDiffusionDistance",
              size: 3,
              type: "vec3"
            }, {
              name: "vTintColor",
              size: 4,
              type: "vec4"
            }, {
              name: "vSubSurfaceIntensity",
              size: 3,
              type: "vec3"
            }, {
              name: "vRefractionPosition",
              size: 3,
              type: "vec3"
            }, {
              name: "vRefractionSize",
              size: 3,
              type: "vec3"
            }, {
              name: "scatteringDiffusionProfile",
              size: 1,
              type: "float"
            }, {
              name: "dispersion",
              size: 1,
              type: "float"
            }, {
              name: "vTranslucencyColor",
              size: 4,
              type: "vec4"
            }, {
              name: "vTranslucencyColorInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "translucencyColorMatrix",
              size: 16,
              type: "mat4"
            }]
          };
        }
      }, IH = new WeakMap(), EH = new WeakMap(), RH = new WeakMap(), sH = new WeakMap(), eH = new WeakMap(), GH = new WeakMap(), AH = new WeakMap(), YH = new WeakMap(), QH = new WeakMap(), OH = new WeakMap(), rH = new WeakMap(), FH = new WeakMap(), NH = new WeakMap(), iI = new WeakMap(), DH = new WeakMap(), PH = new WeakMap(), (IH => {
        const EH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (IH = RI[Symbol.metadata]) && void 0 !== IH ? IH : null) : void 0;
        mI = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], qH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], LH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], gH = [(0, TH.K)(), (0, TH.d)("_markScenePrePassDirty")], yH = [(0, TH.K)()], oH = [(0, TH.K)()], kI = [(0, TH.K)()], CH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], cH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], WH = [(0, TH.F)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], BH = [(0, TH.F)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], fH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], aH = [(0, TH.K)()], nH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], pH = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], dH = [(0, TH.K)()], uH = [(0, TH.K)()], lH = [(0, TH.K)()], KH = [(0, TH.m)()], wH = [(0, TH.K)()], zH = [(0, TH.K)()], tH = [(0, TH.m)()], jI = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], vH = [(0, TH.F)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], bH = [(0, TH.F)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], SH = [(0, TH.m)()], xH = [(0, TH.F)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], HI = [(0, TH.K)(), (0, TH.d)("_markAllSubMeshesAsTexturesDirty")], II = [(0, TH.K)()], EI = [(0, TH.K)()], (0, hH.i)(HH, null, mI, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "isRefractionEnabled" in HH,
            get: HH => HH.isRefractionEnabled,
            set: (HH, IH) => {
              HH.isRefractionEnabled = IH;
            }
          },
          metadata: EH
        }, hI, TI), (0, hH.i)(HH, null, qH, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "isTranslucencyEnabled" in HH,
            get: HH => HH.isTranslucencyEnabled,
            set: (HH, IH) => {
              HH.isTranslucencyEnabled = IH;
            }
          },
          metadata: EH
        }, sI, eI), (0, hH.i)(HH, null, LH, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "isDispersionEnabled" in HH,
            get: HH => HH.isDispersionEnabled,
            set: (HH, IH) => {
              HH.isDispersionEnabled = IH;
            }
          },
          metadata: EH
        }, GI, AI), (0, hH.i)(HH, null, gH, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "isScatteringEnabled" in HH,
            get: HH => HH.isScatteringEnabled,
            set: (HH, IH) => {
              HH.isScatteringEnabled = IH;
            }
          },
          metadata: EH
        }, VI, YI), (0, hH.i)(HH, null, CH, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: HH => "useAlbedoToTintRefraction" in HH,
            get: HH => HH.useAlbedoToTintRefraction,
            set: (HH, IH) => {
              HH.useAlbedoToTintRefraction = IH;
            }
          },
          metadata: EH
        }, NI, iE), (0, hH.i)(HH, null, cH, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: HH => "useAlbedoToTintTranslucency" in HH,
            get: HH => HH.useAlbedoToTintTranslucency,
            set: (HH, IH) => {
              HH.useAlbedoToTintTranslucency = IH;
            }
          },
          metadata: EH
        }, DI, PI), (0, hH.i)(HH, null, WH, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "thicknessTexture" in HH,
            get: HH => HH.thicknessTexture,
            set: (HH, IH) => {
              HH.thicknessTexture = IH;
            }
          },
          metadata: EH
        }, XI, mE), (0, hH.i)(HH, null, BH, {
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
        }, ZI, qI), (0, hH.i)(HH, null, fH, {
          kind: "accessor",
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
        }, LI, gI), (0, hH.i)(HH, null, nH, {
          kind: "accessor",
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
        }, kE, CI), (0, hH.i)(HH, null, pH, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: HH => "linkRefractionWithTransparency" in HH,
            get: HH => HH.linkRefractionWithTransparency,
            set: (HH, IH) => {
              HH.linkRefractionWithTransparency = IH;
            }
          },
          metadata: EH
        }, cI, UI), (0, hH.i)(HH, null, jI, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "useMaskFromThicknessTexture" in HH,
            get: HH => HH.useMaskFromThicknessTexture,
            set: (HH, IH) => {
              HH.useMaskFromThicknessTexture = IH;
            }
          },
          metadata: EH
        }, vI, bI), (0, hH.i)(HH, null, vH, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "refractionIntensityTexture" in HH,
            get: HH => HH.refractionIntensityTexture,
            set: (HH, IH) => {
              HH.refractionIntensityTexture = IH;
            }
          },
          metadata: EH
        }, SI, xI), (0, hH.i)(HH, null, bH, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "translucencyIntensityTexture" in HH,
            get: HH => HH.translucencyIntensityTexture,
            set: (HH, IH) => {
              HH.translucencyIntensityTexture = IH;
            }
          },
          metadata: EH
        }, HE, IE), (0, hH.i)(HH, null, xH, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: HH => "translucencyColorTexture" in HH,
            get: HH => HH.translucencyColorTexture,
            set: (HH, IH) => {
              HH.translucencyColorTexture = IH;
            }
          },
          metadata: EH
        }, hE, TE), (0, hH.i)(HH, null, HI, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: HH => "useGltfStyleTextures" in HH,
            get: HH => HH.useGltfStyleTextures,
            set: (HH, IH) => {
              HH.useGltfStyleTextures = IH;
            }
          },
          metadata: EH
        }, sE, eE), (0, hH.i)(null, null, yH, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: HH => "_scatteringDiffusionProfileIndex" in HH,
            get: HH => HH._scatteringDiffusionProfileIndex,
            set: (HH, IH) => {
              HH._scatteringDiffusionProfileIndex = IH;
            }
          },
          metadata: EH
        }, QI, JI), (0, hH.i)(null, null, oH, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "refractionIntensity" in HH,
            get: HH => HH.refractionIntensity,
            set: (HH, IH) => {
              HH.refractionIntensity = IH;
            }
          },
          metadata: EH
        }, OI, rI), (0, hH.i)(null, null, kI, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "translucencyIntensity" in HH,
            get: HH => HH.translucencyIntensity,
            set: (HH, IH) => {
              HH.translucencyIntensity = IH;
            }
          },
          metadata: EH
        }, FI, MI), (0, hH.i)(null, null, aH, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: HH => "_volumeIndexOfRefraction" in HH,
            get: HH => HH._volumeIndexOfRefraction,
            set: (HH, IH) => {
              HH._volumeIndexOfRefraction = IH;
            }
          },
          metadata: EH
        }, yI, oI), (0, hH.i)(null, null, dH, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: HH => "minimumThickness" in HH,
            get: HH => HH.minimumThickness,
            set: (HH, IH) => {
              HH.minimumThickness = IH;
            }
          },
          metadata: EH
        }, WI, BI), (0, hH.i)(null, null, uH, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: HH => "maximumThickness" in HH,
            get: HH => HH.maximumThickness,
            set: (HH, IH) => {
              HH.maximumThickness = IH;
            }
          },
          metadata: EH
        }, fI, aI), (0, hH.i)(null, null, lH, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: HH => "useThicknessAsDepth" in HH,
            get: HH => HH.useThicknessAsDepth,
            set: (HH, IH) => {
              HH.useThicknessAsDepth = IH;
            }
          },
          metadata: EH
        }, nI, pI), (0, hH.i)(null, null, KH, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: HH => "tintColor" in HH,
            get: HH => HH.tintColor,
            set: (HH, IH) => {
              HH.tintColor = IH;
            }
          },
          metadata: EH
        }, dI, uI), (0, hH.i)(null, null, wH, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: HH => "tintColorAtDistance" in HH,
            get: HH => HH.tintColorAtDistance,
            set: (HH, IH) => {
              HH.tintColorAtDistance = IH;
            }
          },
          metadata: EH
        }, lI, KI), (0, hH.i)(null, null, zH, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: HH => "dispersion" in HH,
            get: HH => HH.dispersion,
            set: (HH, IH) => {
              HH.dispersion = IH;
            }
          },
          metadata: EH
        }, wI, zI), (0, hH.i)(null, null, tH, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: HH => "diffusionDistance" in HH,
            get: HH => HH.diffusionDistance,
            set: (HH, IH) => {
              HH.diffusionDistance = IH;
            }
          },
          metadata: EH
        }, tI, jE), (0, hH.i)(null, null, SH, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: HH => "translucencyColor" in HH,
            get: HH => HH.translucencyColor,
            set: (HH, IH) => {
              HH.translucencyColor = IH;
            }
          },
          metadata: EH
        }, EE, RE), (0, hH.i)(null, null, II, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: HH => "applyAlbedoAfterSubSurface" in HH,
            get: HH => HH.applyAlbedoAfterSubSurface,
            set: (HH, IH) => {
              HH.applyAlbedoAfterSubSurface = IH;
            }
          },
          metadata: EH
        }, GE, AE), (0, hH.i)(null, null, EI, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: HH => "legacyTranslucency" in HH,
            get: HH => HH.legacyTranslucency,
            set: (HH, IH) => {
              HH.legacyTranslucency = IH;
            }
          },
          metadata: EH
        }, VE, YE), EH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EH
        });
      })(), HH.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, HH.DEFAULT_LEGACY_TRANSLUCENCY = !1, HH;
    })();
    var BH = EH(22503),
      fH = EH(22259),
      aH = EH(22515),
      nH = EH(22523),
      pH = EH(22532),
      dH = EH(22541),
      uH = EH(22546),
      lH = EH(21856);
    const KH = {
      effect: null,
      subMesh: null
    };
    class wH extends (0, dH.d)((0, pH.d)(QH.b)) {}
    class zH extends (0, NH.g)(wH) {
      constructor(HH) {
        super(HH), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild();
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0;
      }
    }
    class tH extends (0, uH.c)(PH.e) {}
    let jI = (() => {
      var HH, IH;
      let QH,
        JH = tH,
        OH = [],
        NH = [];
      return HH = class extends JH {
        get realTimeFiltering() {
          return this._realTimeFiltering;
        }
        set realTimeFiltering(HH) {
          this._realTimeFiltering = HH, this.JO(1);
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality;
        }
        set realTimeFilteringQuality(HH) {
          this._realTimeFilteringQuality = HH, this.JO(1);
        }
        get canRenderToMRT() {
          return !0;
        }
        get debugMode() {
          return (0, hH.d)(this, IH, "f");
        }
        set debugMode(HH) {
          (0, hH.g)(this, IH, HH, "f");
        }
        constructor(EH, RH) {
          super(EH, RH, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || HH.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new VH.y(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = HH.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = MH.b.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new MH.b(0, 0, 0), this._albedoColor = new MH.b(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new MH.b(1, 1, 1), this._reflectionColor = new MH.b(1, 1, 1), this._emissiveColor = new MH.b(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = HH.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new eH.e(16), this._globalAmbientColor = new MH.b(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._shadersLoaded = !1, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, IH.set(this, (0, hH.j)(this, OH, 0)), this.debugLimit = ((0, hH.j)(this, NH), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new rH(this), this.clearCoat = new LH(this), this.iridescence = new yH(this), this.anisotropy = new kI(this), this.sheen = new cH(this), this.subSurface = new WH(this), this.detailMap = new BH.c(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), XH.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = (0, GH.b)(this.kh()), this.prePassConfiguration = new FH.b();
        }
        get hasRenderTargetTextures() {
          return !!(XH.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures;
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite;
        }
        getClassName() {
          return "PBRBaseMaterial";
        }
        get _disableAlphaBlending() {
          var IH;
          return this._transparencyMode === HH.PBRMATERIAL_OPAQUE || this._transparencyMode === HH.PBRMATERIAL_ALPHATEST || (null === (IH = this.subSurface) || void 0 === IH ? void 0 : IH.disableAlphaBlending);
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture());
        }
        needAlphaTesting() {
          var IH;
          return this._hasTransparencyMode ? this._transparencyModeIsTest : (null === (IH = this.subSurface) || void 0 === IH || !IH.disableAlphaBlending) && this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === HH.PBRMATERIAL_ALPHATEST);
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.xY && this._useAlphaFromAlbedoTexture && this._transparencyMode !== HH.PBRMATERIAL_OPAQUE;
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.xY || null != this._opacityTexture;
        }
        getAlphaTestTexture() {
          return this._albedoTexture;
        }
        isReadyForSubMesh(HH, IH, EH) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const RH = IH._drawWrapper;
          if (RH.effect && this.isFrozen && RH._wasPreviouslyReady && RH._wasPreviouslyUsingInstances === EH) return !0;
          IH.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), IH.materialDefines = new zH(this._eventInfo.defineNames));
          const hH = IH.materialDefines;
          if (this._isReadyForSubMesh(IH)) return !0;
          const TH = this.kh(),
            eH = TH.getEngine();
          if (hH._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, TH.texturesEnabled)) {
            if (this._albedoTexture && XH.b.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && XH.b.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && XH.b.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && XH.b.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && XH.b.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const HH = this._getReflectionTexture();
            if (HH && XH.b.ReflectionTextureEnabled) {
              if (!HH.isReadyOrNotBlocking()) return !1;
              var GH;
              if (HH.irradianceTexture) {
                if (!HH.irradianceTexture.isReadyOrNotBlocking()) return !1;
              } else if (!HH.sphericalPolynomial && null !== (GH = HH.getInternalTexture()) && void 0 !== GH && GH._sphericalPolynomialPromise) return !1;
            }
            if (this._lightmapTexture && XH.b.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && XH.b.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (XH.b.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1;
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1;
            }
            if (eH.getCaps().standardDerivatives && this._bumpTexture && XH.b.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && XH.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = hH, this._eventInfo.subMesh = IH, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (hH._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (hH.AREALIGHTUSED || hH.CLUSTLIGHT_BATCH) for (let sH = 0; sH < HH.lightSources.length; sH++) if (!HH.lightSources[sH]._isReady()) return !1;
          if (eH.getCaps().standardDerivatives || HH.isVerticesDataPresent(YH.t.NormalKind) || (HH.createNormals(!0), sH.e.Warn("PBRMaterial: Normals have been created for the mesh: " + HH.name)), !(0, ZH.b)(TH, HH, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const AH = IH.effect,
            VH = hH._areLightsDisposed,
            QH = this._prepareEffect(HH, IH.getRenderingMesh(), hH, this.onCompiled, this.onError, EH, null);
          let JH = !1;
          if (QH) if (this._onEffectCreatedObservable && (KH.effect = QH, KH.subMesh = IH, this._onEffectCreatedObservable.notifyObservers(KH)), this.allowShaderHotSwapping && AH && !QH.isReady()) {
            if (hH.markAsUnprocessed(), JH = this.isFrozen, VH) return hH._areLightsDisposed = !0, !1;
          } else TH.resetCachedMaterial(), IH.setEffect(QH, hH, this._materialContext);
          return !(!IH.effect || !IH.effect.isReady()) && (hH._renderId = TH.getRenderId(), RH._wasPreviouslyReady = !JH, RH._wasPreviouslyUsingInstances = !!EH, this._checkScenePerformancePriority(), !0);
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture);
        }
        _prepareEffect(HH, IH, RH) {
          let hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            TH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            sH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            eH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(HH, IH, RH, sH, eH), !RH.isDirty) return null;
          RH.markAsProcessed();
          const GH = this.kh().getEngine(),
            AH = new mI.d();
          let VH = 0;
          RH.USESPHERICALINVERTEX && AH.addFallback(VH++, "USESPHERICALINVERTEX"), RH.FOG && AH.addFallback(VH, "FOG"), RH.SPECULARAA && AH.addFallback(VH, "SPECULARAA"), RH.POINTSIZE && AH.addFallback(VH, "POINTSIZE"), RH.LOGARITHMICDEPTH && AH.addFallback(VH, "LOGARITHMICDEPTH"), RH.PARALLAX && AH.addFallback(VH, "PARALLAX"), RH.PARALLAX_RHS && AH.addFallback(VH, "PARALLAX_RHS"), RH.PARALLAXOCCLUSION && AH.addFallback(VH++, "PARALLAXOCCLUSION"), RH.ENVIRONMENTBRDF && AH.addFallback(VH++, "ENVIRONMENTBRDF"), RH.TANGENT && AH.addFallback(VH++, "TANGENT"), RH.BUMP && AH.addFallback(VH++, "BUMP"), VH = (0, ZH.D)(RH, AH, this._maxSimultaneousLights, VH), RH.SPECULARTERM && AH.addFallback(VH++, "SPECULARTERM"), RH.USESPHERICALFROMREFLECTIONMAP && AH.addFallback(VH++, "USESPHERICALFROMREFLECTIONMAP"), RH.USEIRRADIANCEMAP && AH.addFallback(VH++, "USEIRRADIANCEMAP"), RH.LIGHTMAP && AH.addFallback(VH++, "LIGHTMAP"), RH.NORMAL && AH.addFallback(VH++, "NORMAL"), RH.AMBIENT && AH.addFallback(VH++, "AMBIENT"), RH.EMISSIVE && AH.addFallback(VH++, "EMISSIVE"), RH.VERTEXCOLOR && AH.addFallback(VH++, "VERTEXCOLOR"), RH.MORPHTARGETS && AH.addFallback(VH++, "MORPHTARGETS"), RH.MULTIVIEW && AH.addFallback(0, "MULTIVIEW");
          const QH = [YH.t.PositionKind];
          RH.NORMAL && QH.push(YH.t.NormalKind), RH.TANGENT && QH.push(YH.t.TangentKind);
          for (let EH = 1; EH <= 6; ++EH) RH["UV" + EH] && QH.push("uv".concat(1 === EH ? "" : EH));
          RH.VERTEXCOLOR && QH.push(YH.t.ColorKind), (0, ZH.I)(QH, HH, RH, AH), (0, ZH.J)(QH, RH), (0, ZH.L)(QH, HH, RH), (0, ZH.E)(QH, HH, RH);
          let JH = "pbr";
          const OH = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            rH = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, ZH.lb)(OH, rH, !0);
          const MH = ["Material", "Scene", "Mesh"],
            NH = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: RH.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = AH, this._eventInfo.fallbackRank = VH, this._eventInfo.defines = RH, this._eventInfo.uniforms = OH, this._eventInfo.attributes = QH, this._eventInfo.samplers = rH, this._eventInfo.uniformBuffersNames = MH, this._eventInfo.customCode = void 0, this._eventInfo.mesh = HH, this._eventInfo.indexParameters = NH, this._callbackPluginEventGeneric(128, this._eventInfo), nH.c.AddUniformsAndSamplers(OH, rH), FH.b.AddUniforms(OH), FH.b.AddSamplers(rH), (0, fH.d)(OH), this._useVertexPulling) {
            const HH = null === IH || void 0 === IH ? void 0 : IH.KN;
            HH && (this._vertexPullingMetadata = (0, aH.e)(HH), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach((HH, IH) => {
              OH.push("vp_".concat(IH, "_info"));
            }));
          } else this._vertexPullingMetadata = null;
          iI.b && (iI.b.PrepareUniforms(OH, RH), iI.b.PrepareSamplers(rH, RH)), (0, ZH.pb)({
            uniformsNames: OH,
            uniformBuffersNames: MH,
            samplers: rH,
            defines: RH,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const DH = {};
          this.customShaderNameResolve && (JH = this.customShaderNameResolve(JH, OH, MH, rH, RH, QH, DH));
          const PH = RH.toString(),
            XH = GH.createEffect(JH, {
              attributes: QH,
              uniformsNames: OH,
              uniformBuffersNames: MH,
              samplers: rH,
              defines: PH,
              fallbacks: AH,
              onCompiled: hH,
              onError: TH,
              indexParameters: NH,
              processFinalCode: DH.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: RH.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: this._shadersLoaded ? void 0 : async () => {
                1 === this.shaderLanguage ? await Promise.all([Promise.all([EH.e(84), EH.e(86), EH.e(93)]).then(EH.bind(EH, 25047)), Promise.all([EH.e(84), EH.e(87), EH.e(131), EH.e(98), EH.e(130)]).then(EH.bind(EH, 25069))]) : await Promise.all([Promise.all([EH.e(101), EH.e(114)]).then(EH.bind(EH, 25146)), Promise.all([EH.e(102), EH.e(134), EH.e(118), EH.e(133)]).then(EH.bind(EH, 25169))]), this._shadersLoaded = !0;
              }
            }, GH);
          return this._eventInfo.customCode = void 0, XH;
        }
        _prepareDefines(IH, EH, RH) {
          let hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            TH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const sH = EH.hasThinInstances,
            eH = this.kh(),
            GH = eH.getEngine();
          (0, ZH.W)(eH, IH, RH, !0, this._maxSimultaneousLights, this._disableLighting), RH._needNormals = !0, (0, ZH.bb)(eH, RH);
          const AH = this.needAlphaBlendingForMesh(IH) && this.kh().useOrderIndependentTransparency;
          if ((0, ZH.gb)(eH, RH, this.canRenderToMRT && !AH), (0, ZH.fb)(eH, RH, AH), nH.c.PrepareDefines(GH.currentRenderPassId, IH, RH), RH.METALLICWORKFLOW = this.isMetallicWorkflow(), RH._areTexturesDirty) {
            RH._needUVs = !1;
            for (let HH = 1; HH <= 6; ++HH) RH["MAINUV" + HH] = !1;
            if (eH.texturesEnabled) {
              RH.ALBEDODIRECTUV = 0, RH.BASE_WEIGHTDIRECTUV = 0, RH.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, RH.AMBIENTDIRECTUV = 0, RH.OPACITYDIRECTUV = 0, RH.EMISSIVEDIRECTUV = 0, RH.REFLECTIVITYDIRECTUV = 0, RH.MICROSURFACEMAPDIRECTUV = 0, RH.METALLIC_REFLECTANCEDIRECTUV = 0, RH.REFLECTANCEDIRECTUV = 0, RH.BUMPDIRECTUV = 0, RH.LIGHTMAPDIRECTUV = 0, GH.getCaps().textureLOD && (RH.LODBASEDMICROSFURACE = !0), this._albedoTexture && XH.b.DiffuseTextureEnabled ? ((0, ZH.X)(this._albedoTexture, RH, "ALBEDO"), RH.GAMMAALBEDO = this._albedoTexture.gammaSpace) : RH.ALBEDO = !1, this._baseWeightTexture && XH.b.BaseWeightTextureEnabled ? (0, ZH.X)(this._baseWeightTexture, RH, "BASE_WEIGHT") : RH.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && XH.b.BaseDiffuseRoughnessTextureEnabled ? (0, ZH.X)(this._baseDiffuseRoughnessTexture, RH, "BASE_DIFFUSE_ROUGHNESS") : RH.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && XH.b.AmbientTextureEnabled ? ((0, ZH.X)(this._ambientTexture, RH, "AMBIENT"), RH.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : RH.AMBIENT = !1, this._opacityTexture && XH.b.OpacityTextureEnabled ? ((0, ZH.X)(this._opacityTexture, RH, "OPACITY"), RH.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : RH.OPACITY = !1;
              const HH = this._getReflectionTexture(),
                IH = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || GH.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, ZH.U)(eH, HH, RH, this.realTimeFiltering, this.realTimeFilteringQuality, !IH), this._lightmapTexture && XH.b.LightmapTextureEnabled ? ((0, ZH.X)(this._lightmapTexture, RH, "LIGHTMAP"), RH.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, RH.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, RH.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : RH.LIGHTMAP = !1, this._emissiveTexture && XH.b.EmissiveTextureEnabled ? ((0, ZH.X)(this._emissiveTexture, RH, "EMISSIVE"), RH.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : RH.EMISSIVE = !1, XH.b.SpecularTextureEnabled ? (this._metallicTexture ? ((0, ZH.X)(this._metallicTexture, RH, "REFLECTIVITY"), RH.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, RH.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, RH.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, RH.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, RH.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, ZH.X)(this._reflectivityTexture, RH, "REFLECTIVITY"), RH.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, RH.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, RH.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : RH.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (RH.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, ZH.X)(this._metallicReflectanceTexture, RH, "METALLIC_REFLECTANCE"), RH.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : RH.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, ZH.X)(this._reflectanceTexture, RH, "REFLECTANCE"), RH.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : RH.REFLECTANCE = !1) : (RH.METALLIC_REFLECTANCE = !1, RH.REFLECTANCE = !1), this._microSurfaceTexture ? (0, ZH.X)(this._microSurfaceTexture, RH, "MICROSURFACEMAP") : RH.MICROSURFACEMAP = !1) : (RH.REFLECTIVITY = !1, RH.MICROSURFACEMAP = !1), GH.getCaps().standardDerivatives && this._bumpTexture && XH.b.BumpTextureEnabled && !this._disableBumpMap ? ((0, ZH.X)(this._bumpTexture, RH, "BUMP"), this._useParallax && this._albedoTexture && XH.b.DiffuseTextureEnabled ? (RH.PARALLAX = !0, RH.PARALLAX_RHS = eH.useRightHandedSystem, RH.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : RH.PARALLAX = !1, RH.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (RH.BUMP = !1, RH.PARALLAX = !1, RH.PARALLAX_RHS = !1, RH.PARALLAXOCCLUSION = !1, RH.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && XH.b.ReflectionTextureEnabled ? (RH.ENVIRONMENTBRDF = !0, RH.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (RH.ENVIRONMENTBRDF = !1, RH.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? RH.ALPHAFROMALBEDO = !0 : RH.ALPHAFROMALBEDO = !1;
            }
            RH.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === HH.LIGHTFALLOFF_STANDARD ? (RH.USEPHYSICALLIGHTFALLOFF = !1, RH.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === HH.LIGHTFALLOFF_GLTF ? (RH.USEPHYSICALLIGHTFALLOFF = !1, RH.USEGLTFLIGHTFALLOFF = !0) : (RH.USEPHYSICALLIGHTFALLOFF = !0, RH.USEGLTFLIGHTFALLOFF = !1), RH.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? RH.TWOSIDEDLIGHTING = !0 : RH.TWOSIDEDLIGHTING = !1, RH.MIRRORED = !!eH._mirroredCameraPosition, RH.SPECULARAA = GH.getCaps().standardDerivatives && this._enableSpecularAntiAliasing;
          }
          (RH._areTexturesDirty || RH._areMiscDirty) && (RH.ALPHATESTVALUE = "".concat(this._alphaCutOff).concat(this._alphaCutOff % 1 === 0 ? "." : ""), RH.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, RH.ALPHABLEND = this.needAlphaBlendingForMesh(IH), RH.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, RH.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), RH._areTexturesDirty && (RH.TEXTURE_REPETITION_MODE = GH.version > 1 || GH.isWebGPU ? this.textureRepetitionMode : 0), RH._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(RH), RH.FORCENORMALFORWARD = this._forceNormalForward, RH.RADIANCEOCCLUSION = this._useRadianceOcclusion, RH.HORIZONOCCLUSION = this._useHorizonOcclusion, RH._areMiscDirty && ((0, ZH.$)(IH, eH, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(IH), RH, this._applyDecalMapAfterDetailMap, this._useVertexPulling, EH, this._isVertexOutputInvariant), RH.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !IH.isVerticesDataPresent(YH.t.NormalKind), RH.DEBUGMODE = this._debugMode), (0, ZH.R)(eH, GH, this, RH, !!hH, TH, sH), this._eventInfo.defines = RH, this._eventInfo.mesh = IH, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, ZH.Q)(IH, RH, !0, !0, !0, this._transparencyMode !== HH.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo);
        }
        forceCompilation(HH, IH, EH) {
          const hH = (0, RH.b)({
            clipPlane: !1,
            useInstances: !1
          }, EH);
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const EH = new zH(this._eventInfo.defineNames),
              RH = this._prepareEffect(HH, HH, EH, void 0, void 0, hH.useInstances, hH.clipPlane);
            this._onEffectCreatedObservable && (KH.effect = RH, KH.subMesh = null, this._onEffectCreatedObservable.notifyObservers(KH)), RH.isReady() ? IH && IH(this) : RH.onCompileObservable.add(() => {
              IH && IH(this);
            });
          })();
        }
        buildUniformLayout() {
          const HH = this._uniformBuffer;
          HH.addUniform("vAlbedoInfos", 2), HH.addUniform("vBaseWeightInfos", 2), HH.addUniform("vBaseDiffuseRoughnessInfos", 2), HH.addUniform("vAmbientInfos", 4), HH.addUniform("vOpacityInfos", 2), HH.addUniform("vEmissiveInfos", 2), HH.addUniform("vLightmapInfos", 2), HH.addUniform("vReflectivityInfos", 3), HH.addUniform("vMicroSurfaceSamplerInfos", 2), HH.addUniform("vBumpInfos", 3), HH.addUniform("albedoMatrix", 16), HH.addUniform("baseWeightMatrix", 16), HH.addUniform("baseDiffuseRoughnessMatrix", 16), HH.addUniform("ambientMatrix", 16), HH.addUniform("opacityMatrix", 16), HH.addUniform("emissiveMatrix", 16), HH.addUniform("lightmapMatrix", 16), HH.addUniform("reflectivityMatrix", 16), HH.addUniform("microSurfaceSamplerMatrix", 16), HH.addUniform("bumpMatrix", 16), HH.addUniform("vTangentSpaceParams", 2), HH.addUniform("vAlbedoColor", 4), HH.addUniform("baseWeight", 1), HH.addUniform("baseDiffuseRoughness", 1), HH.addUniform("vLightingIntensity", 4), HH.addUniform("pointSize", 1), HH.addUniform("vReflectivityColor", 4), HH.addUniform("vEmissiveColor", 3), HH.addUniform("vAmbientColor", 3), HH.addUniform("vDebugMode", 2), HH.addUniform("vMetallicReflectanceFactors", 4), HH.addUniform("vMetallicReflectanceInfos", 2), HH.addUniform("metallicReflectanceMatrix", 16), HH.addUniform("vReflectanceInfos", 2), HH.addUniform("reflectanceMatrix", 16), HH.addUniform("cameraInfo", 4), HH.addUniform("vTextureRepetitionHexTilingParams", 4), (0, ZH.hb)(HH, !0, !0, !0, !0, !0), super.buildUniformLayout();
        }
        bindForSubMesh(HH, IH, EH) {
          const RH = this.kh(),
            hH = EH.materialDefines;
          if (!hH) return;
          const TH = EH.effect;
          if (!TH) return;
          this._activeEffect = TH, IH.getMeshUniformBuffer().bindToEffect(TH, "Mesh"), IH.transferToEffect(HH);
          const sH = RH.getEngine();
          this._uniformBuffer.bindToEffect(TH, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, RH, IH, HH, this.isFrozen), nH.c.Bind(sH.currentRenderPassId, this._activeEffect, IH, HH, this);
          const eH = RH.activeCamera;
          eH ? this._uniformBuffer.updateFloat4("cameraInfo", eH.zF, eH.IM, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const GH = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", GH[0], GH[1], GH[2], GH[3]), this._eventInfo.subMesh = EH, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), hH.OBJECTSPACE_NORMALMAP && (HH.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const VH = this._mustRebind(RH, TH, EH, IH.visibility),
            YH = sH._features.needToAlwaysBindUniformBuffers;
          (0, ZH.f)(IH, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, aH.c)(this._activeEffect, this._vertexPullingMetadata);
          let QH = null;
          const JH = this._uniformBuffer;
          if (VH) {
            if (this.bindViewProjection(TH), QH = this._getReflectionTexture(), !JH.useUbo || !this.isFrozen || !JH.isSync || EH._drawWrapper._forceRebindOnNextCall) {
              var OH;
              if (RH.texturesEnabled && (this._albedoTexture && XH.b.DiffuseTextureEnabled && (JH.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, ZH.z)(this._albedoTexture, JH, "albedo")), this._baseWeightTexture && XH.b.BaseWeightTextureEnabled && (JH.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, ZH.z)(this._baseWeightTexture, JH, "baseWeight")), this._baseDiffuseRoughnessTexture && XH.b.BaseDiffuseRoughnessTextureEnabled && (JH.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, ZH.z)(this._baseDiffuseRoughnessTexture, JH, "baseDiffuseRoughness")), this._ambientTexture && XH.b.AmbientTextureEnabled && (JH.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, ZH.z)(this._ambientTexture, JH, "ambient")), this._opacityTexture && XH.b.OpacityTextureEnabled && (JH.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, ZH.z)(this._opacityTexture, JH, "opacity")), this._emissiveTexture && XH.b.EmissiveTextureEnabled && (JH.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, ZH.z)(this._emissiveTexture, JH, "emissive")), this._lightmapTexture && XH.b.LightmapTextureEnabled && (JH.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, ZH.z)(this._lightmapTexture, JH, "lightmap")), XH.b.SpecularTextureEnabled && (this._metallicTexture ? (JH.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, ZH.z)(this._metallicTexture, JH, "reflectivity")) : this._reflectivityTexture && (JH.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, ZH.z)(this._reflectivityTexture, JH, "reflectivity")), this._metallicReflectanceTexture && (JH.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, ZH.z)(this._metallicReflectanceTexture, JH, "metallicReflectance")), this._reflectanceTexture && hH.REFLECTANCE && (JH.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, ZH.z)(this._reflectanceTexture, JH, "reflectance")), this._microSurfaceTexture && (JH.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, ZH.z)(this._microSurfaceTexture, JH, "microSurfaceSampler"))), this._bumpTexture && sH.getCaps().standardDerivatives && XH.b.BumpTextureEnabled && !this._disableBumpMap && (JH.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, ZH.z)(this._bumpTexture, JH, "bump"), RH._mirroredCameraPosition ? JH.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : JH.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, ZH.k)(RH, hH, JH, this._reflectionColor, QH, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && JH.updateFloat("pointSize", this.pointSize), hH.METALLICWORKFLOW) {
                var rH, FH;
                MH.i.rJ[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, MH.i.rJ[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const HH = null !== (rH = null === (FH = this.subSurface) || void 0 === FH ? void 0 : FH._indexOfRefraction) && void 0 !== rH ? rH : 1.5,
                  IH = 1;
                MH.i.rJ[0].b = HH;
                const EH = Math.pow((HH - IH) / (HH + IH), 2);
                MH.i.rJ[0].a = EH, JH.updateDirectColor4("vReflectivityColor", MH.i.rJ[0]), JH.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor);
              } else JH.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              JH.updateColor3("vEmissiveColor", XH.b.EmissiveTextureEnabled ? this._emissiveColor : MH.b.BlackReadOnly), !hH.SS_REFRACTION && null !== (OH = this.subSurface) && void 0 !== OH && OH._linkRefractionWithTransparency ? JH.updateColor4("vAlbedoColor", this._albedoColor, 1) : JH.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), JH.updateFloat("baseWeight", this._baseWeight), JH.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * RH.environmentIntensity, this._lightingInfos.w = this._specularIntensity, JH.updateVector4("vLightingIntensity", this._lightingInfos), RH.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), JH.updateColor3("vAmbientColor", this._globalAmbientColor), JH.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor);
            }
            RH.texturesEnabled && (this._albedoTexture && XH.b.DiffuseTextureEnabled && JH.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && XH.b.BaseWeightTextureEnabled && JH.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && XH.b.BaseDiffuseRoughnessTextureEnabled && JH.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && XH.b.AmbientTextureEnabled && JH.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && XH.b.OpacityTextureEnabled && JH.setTexture("opacitySampler", this._opacityTexture), (0, ZH.l)(RH, hH, JH, QH, this.realTimeFiltering), hH.ENVIRONMENTBRDF && JH.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && XH.b.EmissiveTextureEnabled && JH.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && XH.b.LightmapTextureEnabled && JH.setTexture("lightmapSampler", this._lightmapTexture), XH.b.SpecularTextureEnabled && (this._metallicTexture ? JH.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && JH.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && JH.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && hH.REFLECTANCE && JH.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && JH.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && sH.getCaps().standardDerivatives && XH.b.BumpTextureEnabled && !this._disableBumpMap && JH.setTexture("bumpSampler", this._bumpTexture)), this.kh().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(IH) && this.kh().depthPeelingRenderer.bind(TH), this._eventInfo.subMesh = EH, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, fH.g)(this._activeEffect, this, RH), this.bindEyePosition(TH);
          } else YH && (this._needToBindSceneUbo = !0);
          if (!VH && this.isFrozen && !YH || !RH.lightsEnabled || this._disableLighting || (0, ZH.p)(RH, IH, this._activeEffect, hH, this._maxSimultaneousLights), VH || !this.isFrozen) {
            var NH;
            if ((RH.fogEnabled && IH.applyFog && RH.fogMode !== AH.c.FOGMODE_NONE || QH || this.subSurface.refractionTexture || IH.receiveShadows || hH.PREPASS || hH.CLUSTLIGHT_BATCH) && this.bindView(TH), (0, ZH.i)(RH, IH, this._activeEffect, !0), hH.NUM_MORPH_INFLUENCERS && (0, ZH.v)(IH, this._activeEffect), hH.BAKED_VERTEX_ANIMATION_TEXTURE) null === (NH = IH.bakedVertexAnimationManager) || void 0 === NH || NH.bind(TH, hH.INSTANCES);
            this._imageProcessingConfiguration.bind(this._activeEffect), (0, ZH.t)(hH, this._activeEffect, RH);
          }
          this._afterBind(IH, this._activeEffect, EH), JH.update();
        }
        getAnimatables() {
          const HH = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && HH.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && HH.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && HH.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && HH.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && HH.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && HH.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && HH.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? HH.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && HH.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && HH.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && HH.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && HH.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && HH.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && HH.push(this._microSurfaceTexture), HH;
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.kh().environmentTexture;
        }
        getActiveTextures() {
          const HH = super.getActiveTextures();
          return this._albedoTexture && HH.push(this._albedoTexture), this._baseWeightTexture && HH.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && HH.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && HH.push(this._ambientTexture), this._opacityTexture && HH.push(this._opacityTexture), this._reflectionTexture && HH.push(this._reflectionTexture), this._emissiveTexture && HH.push(this._emissiveTexture), this._reflectivityTexture && HH.push(this._reflectivityTexture), this._metallicTexture && HH.push(this._metallicTexture), this._metallicReflectanceTexture && HH.push(this._metallicReflectanceTexture), this._reflectanceTexture && HH.push(this._reflectanceTexture), this._microSurfaceTexture && HH.push(this._microSurfaceTexture), this._bumpTexture && HH.push(this._bumpTexture), this._lightmapTexture && HH.push(this._lightmapTexture), HH;
        }
        hasTexture(HH) {
          return !!super.hasTexture(HH) || this._albedoTexture === HH || this._baseWeightTexture === HH || this._baseDiffuseRoughnessTexture === HH || this._ambientTexture === HH || this._opacityTexture === HH || this._reflectionTexture === HH || this._emissiveTexture === HH || this._reflectivityTexture === HH || this._metallicTexture === HH || this._metallicReflectanceTexture === HH || this._reflectanceTexture === HH || this._microSurfaceTexture === HH || this._bumpTexture === HH || this._lightmapTexture === HH;
        }
        setPrePassRenderer() {
          var HH;
          if (null === (HH = this.subSurface) || void 0 === HH || !HH.isScatteringEnabled) return !1;
          const IH = this.kh().enableSubSurfaceForPrePass();
          return IH && (IH.enabled = !0), !0;
        }
        dispose(HH, IH) {
          var EH, RH, hH, TH, sH, eH, GH, AH, VH, YH, QH, JH, OH, rH;
          (this._breakShaderLoadedCheck = !0, IH) && (this._environmentBRDFTexture && this.kh().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), null === (EH = this._albedoTexture) || void 0 === EH || EH.dispose(), null === (RH = this._baseWeightTexture) || void 0 === RH || RH.dispose(), null === (hH = this._baseDiffuseRoughnessTexture) || void 0 === hH || hH.dispose(), null === (TH = this._ambientTexture) || void 0 === TH || TH.dispose(), null === (sH = this._opacityTexture) || void 0 === sH || sH.dispose(), null === (eH = this._reflectionTexture) || void 0 === eH || eH.dispose(), null === (GH = this._emissiveTexture) || void 0 === GH || GH.dispose(), null === (AH = this._metallicTexture) || void 0 === AH || AH.dispose(), null === (VH = this._reflectivityTexture) || void 0 === VH || VH.dispose(), null === (YH = this._bumpTexture) || void 0 === YH || YH.dispose(), null === (QH = this._lightmapTexture) || void 0 === QH || QH.dispose(), null === (JH = this._metallicReflectanceTexture) || void 0 === JH || JH.dispose(), null === (OH = this._reflectanceTexture) || void 0 === OH || OH.dispose(), null === (rH = this._microSurfaceTexture) || void 0 === rH || rH.dispose());
          this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(HH, IH);
        }
      }, IH = new WeakMap(), (IH => {
        const EH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (IH = JH[Symbol.metadata]) && void 0 !== IH ? IH : null) : void 0;
        QH = [(0, TH.d)("_markAllSubMeshesAsMiscDirty")], (0, hH.i)(HH, null, QH, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "debugMode" in HH,
            get: HH => HH.debugMode,
            set: (HH, IH) => {
              HH.debugMode = IH;
            }
          },
          metadata: EH
        }, OH, NH), EH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EH
        });
      })(), HH.PBRMATERIAL_OPAQUE = DH.b.MATERIAL_OPAQUE, HH.PBRMATERIAL_ALPHATEST = DH.b.MATERIAL_ALPHATEST, HH.PBRMATERIAL_ALPHABLEND = DH.b.MATERIAL_ALPHABLEND, HH.PBRMATERIAL_ALPHATESTANDBLEND = DH.b.MATERIAL_ALPHATESTANDBLEND, HH.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, HH.LIGHTFALLOFF_PHYSICAL = 0, HH.LIGHTFALLOFF_GLTF = 1, HH.LIGHTFALLOFF_STANDARD = 2, HH.ForceGLSL = !1, HH;
    })();
    Object.getOwnPropertyDescriptor(jI.prototype, "decalMap") || Object.defineProperty(jI.prototype, "decalMap", (0, lH.f)("PBRBaseMaterial", "decalMap"));
  },
  22790: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => sH
    });
    var RH = EH(21832);
    const hH = new Map();
    function TH(HH, IH) {
      (function (HH) {
        return hH.delete(HH);
      })(HH) && RH.e.Warn("Extension with the name '".concat(HH, "' already exists")), hH.set(HH, IH);
    }
    function sH(HH, IH) {
      "image/ktx" !== IH && "image/ktx2" !== IH || (HH = ".ktx"), hH.has(HH) || (HH.endsWith(".ies") && TH(".ies", async () => await EH.e(121).then(EH.bind(EH, 24813)).then(HH => new HH._IESTextureLoader())), HH.endsWith(".dds") && TH(".dds", async () => await Promise.all([EH.e(120), EH.e(122)]).then(EH.bind(EH, 24815)).then(HH => new HH._DDSTextureLoader())), HH.endsWith(".basis") && TH(".basis", async () => await EH.e(123).then(EH.bind(EH, 24821)).then(HH => new HH._BasisTextureLoader())), HH.endsWith(".env") && TH(".env", async () => await EH.e(68).then(EH.bind(EH, 24823)).then(HH => new HH._ENVTextureLoader())), HH.endsWith(".hdr") && TH(".hdr", async () => await EH.e(124).then(EH.bind(EH, 24832)).then(HH => new HH._HDRTextureLoader())), (HH.endsWith(".ktx") || HH.endsWith(".ktx2")) && (TH(".ktx", async () => await EH.e(125).then(EH.bind(EH, 24837)).then(HH => new HH._KTXTextureLoader())), TH(".ktx2", async () => await EH.e(125).then(EH.bind(EH, 24837)).then(HH => new HH._KTXTextureLoader()))), HH.endsWith(".tga") && TH(".tga", async () => await EH.e(126).then(EH.bind(EH, 24839)).then(HH => new HH._TGATextureLoader())), HH.endsWith(".exr") && TH(".exr", async () => await EH.e(127).then(EH.bind(EH, 24846)).then(HH => new HH._ExrTextureLoader())));
      const RH = hH.get(HH);
      return RH ? Promise.resolve(RH(IH)) : null;
    }
  },
  24012: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => sH
    });
    var RH = EH(24014),
      hH = EH(22094);
    let TH = !1;
    function sH() {
      TH || (TH = !0, hH.b.prototype._sphericalPolynomialTargetSize = 0, hH.b.prototype.forceSphericalPolynomialsRecompute = function () {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1);
      }, Object.defineProperty(hH.b.prototype, "sphericalPolynomial", {
        get: function () {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = RH.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then(HH => {
              this._texture._sphericalPolynomial = HH, this._texture._sphericalPolynomialComputed = !0;
            })), null;
          }
          return null;
        },
        set: function (HH) {
          this._texture && (this._texture._sphericalPolynomial = HH);
        },
        enumerable: !0,
        configurable: !0
      }));
    }
  },
  22083: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => hH
    });
    var RH = EH(22090);
    class hH extends RH.f {
      constructor(HH, IH, EH, hH, TH) {
        let sH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          eH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          GH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          AH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          VH = arguments.length > 9 ? arguments[9] : void 0,
          YH = arguments.length > 10 ? arguments[10] : void 0,
          QH = arguments.length > 11 ? arguments[11] : void 0,
          JH = arguments.length > 12 ? arguments[12] : void 0;
        super(null, TH, !sH, eH, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, VH), this.format = hH, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== AH || (GH = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== AH || (GH = 1), this._texture = this._engine.createRawTexture(HH, IH, EH, hH, sH, eH, GH, null, AH, null !== VH && void 0 !== VH ? VH : 0, null !== YH && void 0 !== YH && YH, JH), this.wrapU = RH.f.CLAMP_ADDRESSMODE, this.wrapV = RH.f.CLAMP_ADDRESSMODE, this._waitingForData = !!QH && !HH);
      }
      update(HH) {
        this.updateMipLevel(HH, 0);
      }
      updateMipLevel(HH, IH) {
        this._getEngine().updateRawTexture(this._texture, HH, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, IH), this._waitingForData = !1;
      }
      clone() {
        if (!this._texture) return super.clone();
        const HH = new hH(null, this.getSize().width, this.getSize().height, this.format, this.kh(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return HH._texture = this._texture, this._texture.incrementReferences(), HH;
      }
      isReady() {
        return super.isReady() && !this._waitingForData;
      }
      static CreateLuminanceTexture(HH, IH, EH, RH) {
        return new hH(HH, IH, EH, 1, RH, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3);
      }
      static CreateLuminanceAlphaTexture(HH, IH, EH, RH) {
        return new hH(HH, IH, EH, 2, RH, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3);
      }
      static CreateAlphaTexture(HH, IH, EH, RH) {
        return new hH(HH, IH, EH, 0, RH, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3);
      }
      static CreateRGBTexture(HH, IH, EH, RH) {
        return new hH(HH, IH, EH, 4, RH, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9]);
      }
      static CreateRGBATexture(HH, IH, EH, RH) {
        return new hH(HH, IH, EH, 5, RH, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10]);
      }
      static CreateRGBAStorageTexture(HH, IH, EH, RH) {
        return new hH(HH, IH, EH, 5, RH, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8]);
      }
      static CreateRTexture(HH, IH, EH, TH) {
        let sH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          eH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          GH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : RH.f.TRILINEAR_SAMPLINGMODE;
        return new hH(HH, IH, EH, 6, TH, sH, eH, GH, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1);
      }
      static CreateRStorageTexture(HH, IH, EH, TH) {
        let sH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          eH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          GH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : RH.f.TRILINEAR_SAMPLINGMODE;
        return new hH(HH, IH, EH, 6, TH, sH, eH, GH, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1);
      }
    }
  },
  22549: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => RH.f
    });
    var RH = EH(22090);
    (0, RH.e)();
  },
  22278: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => sH,
      e: () => AH
    });
    var RH = EH(22248),
      hH = EH(21974),
      TH = EH(21808);
    class sH extends RH.b {
      get mO() {
        return this._subMaterials;
      }
      set mO(HH) {
        this._subMaterials = HH, this._hookArray(HH);
      }
      getChildren() {
        return this.mO;
      }
      constructor(HH, IH) {
        super(HH, IH, !0), this._waitingSubMaterialsUniqueIds = [], this.kh().addMultiMaterial(this), this.mO = [], this._storeEffectOnSubMeshes = !0;
      }
      _hookArray(HH) {
        var IH = this;
        const EH = HH.push;
        HH.push = function () {
          for (var RH = arguments.length, hH = new Array(RH), TH = 0; TH < RH; TH++) hH[TH] = arguments[TH];
          const sH = EH.apply(HH, hH);
          return IH._markAllSubMeshesAsTexturesDirty(), sH;
        };
        const RH = HH.splice;
        HH.splice = (IH, EH) => {
          const hH = RH.call(HH, IH, null !== EH && void 0 !== EH ? EH : HH.length);
          return this._markAllSubMeshesAsTexturesDirty(), hH;
        };
      }
      getSubMaterial(HH) {
        return HH < 0 || HH >= this.mO.length ? this.kh().defaultMaterial : this.mO[HH];
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.mO.map(HH => HH ? HH.getActiveTextures() : []));
      }
      hasTexture(HH) {
        if (super.hasTexture(HH)) return !0;
        for (let EH = 0; EH < this.mO.length; EH++) {
          var IH;
          if (null !== (IH = this.mO[EH]) && void 0 !== IH && IH.hasTexture(HH)) return !0;
        }
        return !1;
      }
      getClassName() {
        return "MultiMaterial";
      }
      isReadyForSubMesh(HH, IH, EH) {
        for (let RH = 0; RH < this.mO.length; RH++) {
          const hH = this.mO[RH];
          if (hH) {
            if (hH._storeEffectOnSubMeshes) {
              if (!hH.isReadyForSubMesh(HH, IH, EH)) return !1;
              continue;
            }
            if (!hH.isReady(HH)) return !1;
          }
        }
        return !0;
      }
      clone(HH, IH) {
        const EH = new sH(HH, this.kh());
        for (let RH = 0; RH < this.mO.length; RH++) {
          let hH;
          const TH = this.mO[RH];
          hH = IH && TH ? TH.clone(HH + "-" + TH.name) : this.mO[RH], EH.mO.push(hH);
        }
        return EH;
      }
      serialize() {
        const HH = {};
        HH.name = this.name, HH.id = this.id, HH.uniqueId = this.uniqueId, hH.c && (HH.tags = hH.c.GetTags(this)), HH.materialsUniqueIds = [], HH.materials = [];
        for (let IH = 0; IH < this.mO.length; IH++) {
          const EH = this.mO[IH];
          EH ? (HH.materialsUniqueIds.push(EH.uniqueId), HH.materials.push(EH.id)) : (HH.materialsUniqueIds.push(null), HH.materials.push(null));
        }
        return HH;
      }
      dispose(HH, IH, EH) {
        const RH = this.kh();
        if (!RH) return;
        if (EH) for (let TH = 0; TH < this.mO.length; TH++) {
          const EH = this.mO[TH];
          EH && EH.dispose(HH, IH);
        }
        const hH = RH.multiMaterials.indexOf(this);
        hH >= 0 && RH.multiMaterials.splice(hH, 1), super.dispose(HH, IH);
      }
    }
    let eH = !1;
    function GH(HH, IH) {
      const EH = new sH(HH.name, IH);
      if (EH.id = HH.id, EH._loadedUniqueId = HH.uniqueId, hH.c && hH.c.AddTagsTo(EH, HH.tags), HH.materialsUniqueIds) EH._waitingSubMaterialsUniqueIds = HH.materialsUniqueIds;else for (const RH of HH.materials) EH.mO.push(IH.getLastMaterialById(RH));
      return EH;
    }
    function AH() {
      eH || (eH = !0, sH.ParseMultiMaterial = GH, (0, TH.d)("BABYLON.MultiMaterial", sH));
    }
  },
  22052: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => sH
    });
    var RH,
      hH,
      TH = EH(21764);
    !function (HH) {
      HH[HH.LOCAL = 0] = "LOCAL", HH[HH.WORLD = 1] = "WORLD", HH[HH.BONE = 2] = "BONE";
    }(RH || (RH = {}));
    class sH {}
    sH.X = new TH.x(1, 0, 0), sH.Y = new TH.x(0, 1, 0), sH.Z = new TH.x(0, 0, 1), function (HH) {
      HH[HH.X = 0] = "X", HH[HH.Y = 1] = "Y", HH[HH.Z = 2] = "Z";
    }(hH || (hH = {}));
  },
  22466: (HH, IH, EH) => {
    EH.r(IH), EH.d(IH, {
      Ah: () => RH.b,
      rJ: () => RH.d,
      RegisterMathColor: () => RH.h,
      TmpColors: () => RH.i
    });
    var RH = EH(21817);
    (0, RH.h)();
  },
  22939: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => eH,
      f: () => QH,
      h: () => VH,
      i: () => YH
    });
    var RH,
      hH = EH(21791),
      TH = EH(21764),
      sH = EH(21771);
    !function (HH) {
      HH[HH.CW = 0] = "CW", HH[HH.CCW = 1] = "CCW";
    }(RH || (RH = {}));
    class eH {
      static Interpolate(HH, IH, EH, RH, hH) {
        if (0 === HH) return 0;
        const TH = 1 - 3 * RH + 3 * IH,
          sH = 3 * RH - 6 * IH,
          eH = 3 * IH;
        let GH = HH;
        for (let AH = 0; AH < 5; AH++) {
          const IH = GH * GH;
          GH -= (TH * (IH * GH) + sH * IH + eH * GH - HH) * (1 / (3 * TH * IH + 2 * sH * GH + eH)), GH = Math.min(1, Math.max(0, GH));
        }
        return 3 * Math.pow(1 - GH, 2) * GH * EH + 3 * (1 - GH) * Math.pow(GH, 2) * hH + Math.pow(GH, 3);
      }
    }
    class GH {
      constructor(HH) {
        this._radians = HH, this._radians < 0 && (this._radians += 2 * Math.PI);
      }
      degrees() {
        return 180 * this._radians / Math.PI;
      }
      radians() {
        return this._radians;
      }
      static BetweenTwoPoints(HH, IH) {
        const EH = IH.subtract(HH),
          RH = Math.atan2(EH.y, EH.x);
        return new GH(RH);
      }
      static BetweenTwoVectors(HH, IH) {
        let EH = HH.lengthSquared() * IH.lengthSquared();
        if (0 === EH) return new GH(Math.PI / 2);
        EH = Math.sqrt(EH);
        let RH = HH.dot(IH) / EH;
        RH = (0, hH.Clamp)(RH, -1, 1);
        const TH = Math.acos(RH);
        return new GH(TH);
      }
      static FromRadians(HH) {
        return new GH(HH);
      }
      static FromDegrees(HH) {
        return new GH(HH * Math.PI / 180);
      }
    }
    class AH {
      constructor(HH, IH, EH) {
        this.startPoint = HH, this.midPoint = IH, this.endPoint = EH;
        const RH = Math.pow(IH.x, 2) + Math.pow(IH.y, 2),
          hH = (Math.pow(HH.x, 2) + Math.pow(HH.y, 2) - RH) / 2,
          sH = (RH - Math.pow(EH.x, 2) - Math.pow(EH.y, 2)) / 2,
          eH = (HH.x - IH.x) * (IH.y - EH.y) - (IH.x - EH.x) * (HH.y - IH.y);
        this.centerPoint = new TH.t((hH * (IH.y - EH.y) - sH * (HH.y - IH.y)) / eH, ((HH.x - IH.x) * sH - (IH.x - EH.x) * hH) / eH), this.QI = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = GH.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const AH = this.startAngle.degrees();
        let VH = GH.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          YH = GH.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        VH - AH > 180 && (VH -= 360), VH - AH < -180 && (VH += 360), YH - VH > 180 && (YH -= 360), YH - VH < -180 && (YH += 360), this.orientation = VH - AH < 0 ? 0 : 1, this.angle = GH.FromDegrees(0 === this.orientation ? AH - YH : YH - AH);
      }
    }
    class VH {
      constructor(HH, IH) {
        this._points = new Array(), this._length = 0, this.closed = !1, this._points.push(new TH.t(HH, IH));
      }
      addLineTo(HH, IH) {
        if (this.closed) return this;
        const EH = new TH.t(HH, IH),
          RH = this._points[this._points.length - 1];
        return this._points.push(EH), this._length += EH.subtract(RH).length(), this;
      }
      addArcTo(HH, IH, EH, RH) {
        let hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const sH = this._points[this._points.length - 1],
          eH = new TH.t(HH, IH),
          GH = new TH.t(EH, RH),
          VH = new AH(sH, eH, GH);
        let YH = VH.angle.radians() / hH;
        0 === VH.orientation && (YH *= -1);
        let QH = VH.startAngle.radians() + YH;
        for (let TH = 0; TH < hH; TH++) {
          const HH = Math.cos(QH) * VH.QI + VH.centerPoint.x,
            IH = Math.sin(QH) * VH.QI + VH.centerPoint.y;
          this.addLineTo(HH, IH), QH += YH;
        }
        return this;
      }
      addQuadraticCurveTo(HH, IH, EH, RH) {
        let hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const TH = (HH, IH, EH, RH) => (1 - HH) * (1 - HH) * IH + 2 * HH * (1 - HH) * EH + HH * HH * RH,
          sH = this._points[this._points.length - 1];
        for (let eH = 0; eH <= hH; eH++) {
          const GH = eH / hH,
            AH = TH(GH, sH.x, HH, EH),
            VH = TH(GH, sH.y, IH, RH);
          this.addLineTo(AH, VH);
        }
        return this;
      }
      addBezierCurveTo(HH, IH, EH, RH, hH, TH) {
        let sH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const eH = (HH, IH, EH, RH, hH) => (1 - HH) * (1 - HH) * (1 - HH) * IH + 3 * HH * (1 - HH) * (1 - HH) * EH + 3 * HH * HH * (1 - HH) * RH + HH * HH * HH * hH,
          GH = this._points[this._points.length - 1];
        for (let AH = 0; AH <= sH; AH++) {
          const VH = AH / sH,
            YH = eH(VH, GH.x, HH, EH, hH),
            QH = eH(VH, GH.y, IH, RH, TH);
          this.addLineTo(YH, QH);
        }
        return this;
      }
      isPointInside(HH) {
        let IH = !1;
        const EH = this._points.length;
        for (let RH = EH - 1, hH = 0; hH < EH; RH = hH++) {
          let EH = this._points[RH],
            TH = this._points[hH],
            sH = TH.x - EH.x,
            eH = TH.y - EH.y;
          if (Math.abs(eH) > Number.EPSILON) {
            if (eH < 0 && (EH = this._points[hH], sH = -sH, TH = this._points[RH], eH = -eH), HH.y < EH.y || HH.y > TH.y) continue;
            if (HH.y === EH.y && HH.x === EH.x) return !0;
            {
              const RH = eH * (HH.x - EH.x) - sH * (HH.y - EH.y);
              if (0 === RH) return !0;
              if (RH < 0) continue;
              IH = !IH;
            }
          } else {
            if (HH.y !== EH.y) continue;
            if (TH.x <= HH.x && HH.x <= EH.x || EH.x <= HH.x && HH.x <= TH.x) return !0;
          }
        }
        return IH;
      }
      close() {
        return this.closed = !0, this;
      }
      length() {
        let HH = this._length;
        if (this.closed) {
          const IH = this._points[this._points.length - 1];
          HH += this._points[0].subtract(IH).length();
        }
        return HH;
      }
      area() {
        const HH = this._points.length;
        let IH = 0;
        for (let EH = HH - 1, RH = 0; RH < HH; EH = RH++) IH += this._points[EH].x * this._points[RH].y - this._points[RH].x * this._points[EH].y;
        return .5 * IH;
      }
      getPoints() {
        return this._points;
      }
      getPointAtLengthPosition(HH) {
        if (HH < 0 || HH > 1) return TH.t.Zero();
        const IH = HH * this.length();
        let EH = 0;
        for (let RH = 0; RH < this._points.length; RH++) {
          const HH = (RH + 1) % this._points.length,
            hH = this._points[RH],
            sH = this._points[HH].subtract(hH),
            eH = sH.length() + EH;
          if (IH >= EH && IH <= eH) {
            const HH = sH.normalize(),
              RH = IH - EH;
            return new TH.t(hH.x + HH.x * RH, hH.y + HH.y * RH);
          }
          EH = eH;
        }
        return TH.t.Zero();
      }
      static StartingAt(HH, IH) {
        return new VH(HH, IH);
      }
    }
    class YH {
      constructor(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = arguments.length > 2 ? arguments[2] : void 0,
          RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.path = HH, this._curve = new Array(), this._distances = new Array(), this._tangents = new Array(), this._normals = new Array(), this._binormals = new Array(), this._pointAtData = {
          id: 0,
          point: TH.x.Zero(),
          previousPointArrayIndex: 0,
          position: 0,
          subPosition: 0,
          interpolateReady: !1,
          interpolationMatrix: TH.d.Identity()
        };
        for (let hH = 0; hH < HH.length; hH++) this._curve[hH] = HH[hH].clone();
        this._raw = EH || !1, this._alignTangentsWithPath = RH, this._compute(IH, RH);
      }
      getCurve() {
        return this._curve;
      }
      getPoints() {
        return this._curve;
      }
      length() {
        return this._distances[this._distances.length - 1];
      }
      getTangents() {
        return this._tangents;
      }
      getNormals() {
        return this._normals;
      }
      getBinormals() {
        return this._binormals;
      }
      getDistances() {
        return this._distances;
      }
      getPointAt(HH) {
        return this._updatePointAtData(HH).point;
      }
      getTangentAt(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._updatePointAtData(HH, IH), IH ? TH.x.TransformCoordinates(TH.x.Forward(), this._pointAtData.interpolationMatrix) : this._tangents[this._pointAtData.previousPointArrayIndex];
      }
      getNormalAt(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._updatePointAtData(HH, IH), IH ? TH.x.TransformCoordinates(TH.x.Right(), this._pointAtData.interpolationMatrix) : this._normals[this._pointAtData.previousPointArrayIndex];
      }
      getBinormalAt(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._updatePointAtData(HH, IH), IH ? TH.x.TransformCoordinates(TH.x.UpReadOnly, this._pointAtData.interpolationMatrix) : this._binormals[this._pointAtData.previousPointArrayIndex];
      }
      getDistanceAt(HH) {
        return this.length() * HH;
      }
      getPreviousPointIndexAt(HH) {
        return this._updatePointAtData(HH), this._pointAtData.previousPointArrayIndex;
      }
      getSubPositionAt(HH) {
        return this._updatePointAtData(HH), this._pointAtData.subPosition;
      }
      getClosestPositionTo(HH) {
        let IH = Number.MAX_VALUE,
          EH = 0;
        for (let RH = 0; RH < this._curve.length - 1; RH++) {
          const hH = this._curve[RH + 0],
            sH = this._curve[RH + 1].subtract(hH).normalize(),
            eH = this._distances[RH + 1] - this._distances[RH + 0],
            GH = Math.min(Math.max(TH.x.Dot(sH, HH.subtract(hH).normalize()), 0) * TH.x.Distance(hH, HH) / eH, 1),
            AH = TH.x.Distance(hH.add(sH.scale(GH * eH)), HH);
          AH < IH && (IH = AH, EH = (this._distances[RH + 0] + eH * GH) / this.length());
        }
        return EH;
      }
      slice() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (HH < 0 && (HH = 1 - -1 * HH % 1), IH < 0 && (IH = 1 - -1 * IH % 1), HH > IH) {
          const EH = HH;
          HH = IH, IH = EH;
        }
        const EH = this.getCurve(),
          RH = this.getPointAt(HH);
        let hH = this.getPreviousPointIndexAt(HH);
        const TH = this.getPointAt(IH),
          sH = this.getPreviousPointIndexAt(IH) + 1,
          eH = [];
        return 0 !== HH && (hH++, eH.push(RH)), eH.push(...EH.slice(hH, sH)), 1 === IH && 1 !== HH || eH.push(TH), new YH(eH, this.getNormalAt(HH), this._raw, this._alignTangentsWithPath);
      }
      update(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        for (let RH = 0; RH < HH.length; RH++) this._curve[RH].x = HH[RH].x, this._curve[RH].y = HH[RH].y, this._curve[RH].z = HH[RH].z;
        return this._compute(IH, EH), this;
      }
      _compute(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const EH = this._curve.length;
        if (EH < 2) return;
        this._tangents[0] = this._getFirstNonNullVector(0), this._raw || this._tangents[0].normalize(), this._tangents[EH - 1] = this._curve[EH - 1].subtract(this._curve[EH - 2]), this._raw || this._tangents[EH - 1].normalize();
        const RH = this._tangents[0],
          hH = this._normalVector(RH, HH);
        let sH, eH, GH, AH, VH;
        this._normals[0] = hH, this._raw || this._normals[0].normalize(), this._binormals[0] = TH.x.Cross(RH, this._normals[0]), this._raw || this._binormals[0].normalize(), this._distances[0] = 0;
        for (let YH = 1; YH < EH; YH++) sH = this._getLastNonNullVector(YH), YH < EH - 1 && (eH = this._getFirstNonNullVector(YH), this._tangents[YH] = IH ? eH : sH.add(eH), this._tangents[YH].normalize()), this._distances[YH] = this._distances[YH - 1] + this._curve[YH].subtract(this._curve[YH - 1]).length(), GH = this._tangents[YH], VH = this._binormals[YH - 1], this._normals[YH] = TH.x.Cross(VH, GH), this._raw || (0 === this._normals[YH].length() ? (AH = this._normals[YH - 1], this._normals[YH] = AH.clone()) : this._normals[YH].normalize()), this._binormals[YH] = TH.x.Cross(GH, this._normals[YH]), this._raw || this._binormals[YH].normalize();
        this._pointAtData.id = NaN;
      }
      _getFirstNonNullVector(HH) {
        let IH = 1,
          EH = this._curve[HH + IH].subtract(this._curve[HH]);
        for (; 0 === EH.length() && HH + IH + 1 < this._curve.length;) IH++, EH = this._curve[HH + IH].subtract(this._curve[HH]);
        return EH;
      }
      _getLastNonNullVector(HH) {
        let IH = 1,
          EH = this._curve[HH].subtract(this._curve[HH - IH]);
        for (; 0 === EH.length() && HH > IH + 1;) IH++, EH = this._curve[HH].subtract(this._curve[HH - IH]);
        return EH;
      }
      _normalVector(HH, IH) {
        let EH,
          RH = HH.length();
        if (0 === RH && (RH = 1), void 0 === IH || null === IH) {
          let IH;
          IH = (0, hH.WithinEpsilon)(Math.abs(HH.y) / RH, 1, sH.b) ? (0, hH.WithinEpsilon)(Math.abs(HH.x) / RH, 1, sH.b) ? (0, hH.WithinEpsilon)(Math.abs(HH.z) / RH, 1, sH.b) ? TH.x.Zero() : new TH.x(0, 0, 1) : new TH.x(1, 0, 0) : new TH.x(0, -1, 0), EH = TH.x.Cross(HH, IH);
        } else EH = TH.x.Cross(HH, IH), TH.x.CrossToRef(EH, HH, EH);
        return EH.normalize(), EH;
      }
      _updatePointAtData(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._pointAtData.id === HH) return this._pointAtData.interpolateReady || this._updateInterpolationMatrix(), this._pointAtData;
        this._pointAtData.id = HH;
        const EH = this.getPoints();
        if (HH <= 0) return this._setPointAtData(0, 0, EH[0], 0, IH);
        if (HH >= 1) return this._setPointAtData(1, 1, EH[EH.length - 1], EH.length - 1, IH);
        let RH,
          hH = EH[0],
          sH = 0;
        const eH = HH * this.length();
        for (let GH = 1; GH < EH.length; GH++) {
          RH = EH[GH];
          const AH = TH.x.Distance(hH, RH);
          if (sH += AH, sH === eH) return this._setPointAtData(HH, 1, RH, GH, IH);
          if (sH > eH) {
            const EH = (sH - eH) / AH,
              TH = hH.subtract(RH),
              VH = RH.add(TH.scaleInPlace(EH));
            return this._setPointAtData(HH, 1 - EH, VH, GH - 1, IH);
          }
          hH = RH;
        }
        return this._pointAtData;
      }
      _setPointAtData(HH, IH, EH, RH, hH) {
        return this._pointAtData.point = EH, this._pointAtData.position = HH, this._pointAtData.subPosition = IH, this._pointAtData.previousPointArrayIndex = RH, this._pointAtData.interpolateReady = hH, hH && this._updateInterpolationMatrix(), this._pointAtData;
      }
      _updateInterpolationMatrix() {
        this._pointAtData.interpolationMatrix = TH.d.Identity();
        const HH = this._pointAtData.previousPointArrayIndex;
        if (HH !== this._tangents.length - 1) {
          const IH = HH + 1,
            EH = this._tangents[HH].clone(),
            RH = this._normals[HH].clone(),
            hH = this._binormals[HH].clone(),
            sH = this._tangents[IH].clone(),
            eH = this._normals[IH].clone(),
            GH = this._binormals[IH].clone(),
            AH = TH.h.RotationQuaternionFromAxis(RH, hH, EH),
            VH = TH.h.RotationQuaternionFromAxis(eH, GH, sH);
          TH.h.Slerp(AH, VH, this._pointAtData.subPosition).toRotationMatrix(this._pointAtData.interpolationMatrix);
        }
      }
    }
    class QH {
      static CreateQuadraticBezier(HH, IH, EH, RH) {
        RH = RH > 2 ? RH : 3;
        const hH = [],
          sH = (HH, IH, EH, RH) => (1 - HH) * (1 - HH) * IH + 2 * HH * (1 - HH) * EH + HH * HH * RH;
        for (let eH = 0; eH <= RH; eH++) hH.push(new TH.x(sH(eH / RH, HH.x, IH.x, EH.x), sH(eH / RH, HH.y, IH.y, EH.y), sH(eH / RH, HH.z, IH.z, EH.z)));
        return new QH(hH);
      }
      static CreateCubicBezier(HH, IH, EH, RH, hH) {
        hH = hH > 3 ? hH : 4;
        const sH = [],
          eH = (HH, IH, EH, RH, hH) => (1 - HH) * (1 - HH) * (1 - HH) * IH + 3 * HH * (1 - HH) * (1 - HH) * EH + 3 * HH * HH * (1 - HH) * RH + HH * HH * HH * hH;
        for (let GH = 0; GH <= hH; GH++) sH.push(new TH.x(eH(GH / hH, HH.x, IH.x, EH.x, RH.x), eH(GH / hH, HH.y, IH.y, EH.y, RH.y), eH(GH / hH, HH.z, IH.z, EH.z, RH.z)));
        return new QH(sH);
      }
      static CreateHermiteSpline(HH, IH, EH, RH, hH) {
        const sH = [],
          eH = 1 / hH;
        for (let GH = 0; GH <= hH; GH++) sH.push(TH.x.Hermite(HH, IH, EH, RH, GH * eH));
        return new QH(sH);
      }
      static CreateCatmullRomSpline(HH, IH, EH) {
        const RH = [],
          hH = 1 / IH;
        let sH = 0;
        if (EH) {
          const EH = HH.length;
          for (let eH = 0; eH < EH; eH++) {
            sH = 0;
            for (let GH = 0; GH < IH; GH++) RH.push(TH.x.CatmullRom(HH[eH % EH], HH[(eH + 1) % EH], HH[(eH + 2) % EH], HH[(eH + 3) % EH], sH)), sH += hH;
          }
          RH.push(RH[0]);
        } else {
          const EH = [];
          EH.push(HH[0].clone()), EH.push(...HH), EH.push(HH[HH.length - 1].clone());
          let eH = 0;
          for (; eH < EH.length - 3; eH++) {
            sH = 0;
            for (let HH = 0; HH < IH; HH++) RH.push(TH.x.CatmullRom(EH[eH], EH[eH + 1], EH[eH + 2], EH[eH + 3], sH)), sH += hH;
          }
          eH--, RH.push(TH.x.CatmullRom(EH[eH], EH[eH + 1], EH[eH + 2], EH[eH + 3], sH));
        }
        return new QH(RH);
      }
      static ArcThru3Points(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          sH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const eH = [],
          GH = IH.subtract(HH),
          AH = EH.subtract(IH),
          VH = HH.subtract(EH),
          YH = TH.x.Cross(GH, AH),
          JH = YH.length();
        if (JH < Math.pow(10, -8)) return new QH(eH);
        const OH = GH.lengthSquared(),
          rH = AH.lengthSquared(),
          FH = VH.lengthSquared(),
          MH = YH.lengthSquared(),
          NH = .5 * GH.length() * AH.length() * VH.length() / JH,
          iI = -.5 * rH * TH.x.Dot(GH, VH) / MH,
          DH = -.5 * FH * TH.x.Dot(GH, AH) / MH,
          PH = -.5 * OH * TH.x.Dot(AH, VH) / MH,
          XH = HH.scale(iI).add(IH.scale(DH)).add(EH.scale(PH)),
          mI = HH.subtract(XH).normalize(),
          ZH = TH.x.Cross(YH, mI).normalize();
        if (sH) {
          const IH = 2 * Math.PI / RH;
          for (let HH = 0; HH <= 2 * Math.PI; HH += IH) eH.push(XH.add(mI.scale(NH * Math.cos(HH)).add(ZH.scale(NH * Math.sin(HH)))));
          eH.push(HH);
        } else {
          const IH = 1 / RH;
          let TH,
            sH = 0;
          do {
            TH = XH.add(mI.scale(NH * Math.cos(sH)).add(ZH.scale(NH * Math.sin(sH)))), eH.push(TH), sH += IH;
          } while (!TH.equalsWithEpsilon(EH, NH * IH * 1.1));
          eH.push(EH), hH && eH.push(HH);
        }
        return new QH(eH);
      }
      constructor(HH) {
        this._length = 0, this._points = HH, this._length = this._computeLength(HH);
      }
      getPoints() {
        return this._points;
      }
      length() {
        return this._length;
      }
      continue(HH) {
        const IH = this._points[this._points.length - 1],
          EH = this._points.slice(),
          RH = HH.getPoints();
        for (let hH = 1; hH < RH.length; hH++) EH.push(RH[hH].subtract(RH[0]).add(IH));
        return new QH(EH);
      }
      _computeLength(HH) {
        let IH = 0;
        for (let EH = 1; EH < HH.length; EH++) IH += HH[EH].subtract(HH[EH - 1]).length();
        return IH;
      }
    }
  },
  22557: (HH, IH, EH) => {
    EH.r(IH), EH.d(IH, {
      Matrix: () => RH.d,
      Quaternion: () => RH.h,
      RegisterMathVector: () => RH.l,
      TmpVectors: () => RH.p,
      Vector2: () => RH.t,
      Rh: () => RH.x,
      Vector4: () => RH.y
    });
    var RH = EH(21764);
    (0, RH.l)();
  },
  22773: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => GH,
      f: () => AH
    });
    var RH = EH(21764);
    const hH = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      TH = [() => 1, HH => HH.y, HH => HH.z, HH => HH.x, HH => HH.x * HH.y, HH => HH.y * HH.z, HH => 3 * HH.z * HH.z - 1, HH => HH.x * HH.z, HH => HH.x * HH.x - HH.y * HH.y],
      sH = (HH, IH) => hH[HH] * TH[HH](IH),
      eH = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class GH {
      constructor() {
        this.preScaled = !1, this.l00 = RH.x.Zero(), this.l1_1 = RH.x.Zero(), this.l10 = RH.x.Zero(), this.l11 = RH.x.Zero(), this.l2_2 = RH.x.Zero(), this.l2_1 = RH.x.Zero(), this.l20 = RH.x.Zero(), this.l21 = RH.x.Zero(), this.l22 = RH.x.Zero();
      }
      addLight(HH, IH, EH) {
        RH.p.Rh[0].set(IH.r, IH.g, IH.b);
        const hH = RH.p.Rh[0],
          TH = RH.p.Rh[1];
        hH.scaleToRef(EH, TH), TH.scaleToRef(sH(0, HH), RH.p.Rh[2]), this.l00.addInPlace(RH.p.Rh[2]), TH.scaleToRef(sH(1, HH), RH.p.Rh[2]), this.l1_1.addInPlace(RH.p.Rh[2]), TH.scaleToRef(sH(2, HH), RH.p.Rh[2]), this.l10.addInPlace(RH.p.Rh[2]), TH.scaleToRef(sH(3, HH), RH.p.Rh[2]), this.l11.addInPlace(RH.p.Rh[2]), TH.scaleToRef(sH(4, HH), RH.p.Rh[2]), this.l2_2.addInPlace(RH.p.Rh[2]), TH.scaleToRef(sH(5, HH), RH.p.Rh[2]), this.l2_1.addInPlace(RH.p.Rh[2]), TH.scaleToRef(sH(6, HH), RH.p.Rh[2]), this.l20.addInPlace(RH.p.Rh[2]), TH.scaleToRef(sH(7, HH), RH.p.Rh[2]), this.l21.addInPlace(RH.p.Rh[2]), TH.scaleToRef(sH(8, HH), RH.p.Rh[2]), this.l22.addInPlace(RH.p.Rh[2]);
      }
      scaleInPlace(HH) {
        this.l00.scaleInPlace(HH), this.l1_1.scaleInPlace(HH), this.l10.scaleInPlace(HH), this.l11.scaleInPlace(HH), this.l2_2.scaleInPlace(HH), this.l2_1.scaleInPlace(HH), this.l20.scaleInPlace(HH), this.l21.scaleInPlace(HH), this.l22.scaleInPlace(HH);
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(eH[0]), this.l1_1.scaleInPlace(eH[1]), this.l10.scaleInPlace(eH[2]), this.l11.scaleInPlace(eH[3]), this.l2_2.scaleInPlace(eH[4]), this.l2_1.scaleInPlace(eH[5]), this.l20.scaleInPlace(eH[6]), this.l21.scaleInPlace(eH[7]), this.l22.scaleInPlace(eH[8]);
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI);
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(hH[0]), this.l1_1.scaleInPlace(hH[1]), this.l10.scaleInPlace(hH[2]), this.l11.scaleInPlace(hH[3]), this.l2_2.scaleInPlace(hH[4]), this.l2_1.scaleInPlace(hH[5]), this.l20.scaleInPlace(hH[6]), this.l21.scaleInPlace(hH[7]), this.l22.scaleInPlace(hH[8]);
      }
      updateFromArray(HH) {
        return RH.x.FromArrayToRef(HH[0], 0, this.l00), RH.x.FromArrayToRef(HH[1], 0, this.l1_1), RH.x.FromArrayToRef(HH[2], 0, this.l10), RH.x.FromArrayToRef(HH[3], 0, this.l11), RH.x.FromArrayToRef(HH[4], 0, this.l2_2), RH.x.FromArrayToRef(HH[5], 0, this.l2_1), RH.x.FromArrayToRef(HH[6], 0, this.l20), RH.x.FromArrayToRef(HH[7], 0, this.l21), RH.x.FromArrayToRef(HH[8], 0, this.l22), this;
      }
      updateFromFloatsArray(HH) {
        return RH.x.FromFloatsToRef(HH[0], HH[1], HH[2], this.l00), RH.x.FromFloatsToRef(HH[3], HH[4], HH[5], this.l1_1), RH.x.FromFloatsToRef(HH[6], HH[7], HH[8], this.l10), RH.x.FromFloatsToRef(HH[9], HH[10], HH[11], this.l11), RH.x.FromFloatsToRef(HH[12], HH[13], HH[14], this.l2_2), RH.x.FromFloatsToRef(HH[15], HH[16], HH[17], this.l2_1), RH.x.FromFloatsToRef(HH[18], HH[19], HH[20], this.l20), RH.x.FromFloatsToRef(HH[21], HH[22], HH[23], this.l21), RH.x.FromFloatsToRef(HH[24], HH[25], HH[26], this.l22), this;
      }
      static Qh(HH) {
        return new GH().updateFromArray(HH);
      }
      static FromPolynomial(HH) {
        const IH = new GH();
        return IH.l00 = HH.xx.scale(.376127).add(HH.yy.scale(.376127)).add(HH.zz.scale(.376126)), IH.l1_1 = HH.y.scale(.977204), IH.l10 = HH.z.scale(.977204), IH.l11 = HH.x.scale(.977204), IH.l2_2 = HH.xy.scale(1.16538), IH.l2_1 = HH.yz.scale(1.16538), IH.l20 = HH.zz.scale(1.34567).subtract(HH.xx.scale(.672834)).subtract(HH.yy.scale(.672834)), IH.l21 = HH.zx.scale(1.16538), IH.l22 = HH.xx.scale(1.16538).subtract(HH.yy.scale(1.16538)), IH.l1_1.scaleInPlace(-1), IH.l11.scaleInPlace(-1), IH.l2_1.scaleInPlace(-1), IH.l21.scaleInPlace(-1), IH.scaleInPlace(Math.PI), IH;
      }
    }
    class AH {
      constructor() {
        this.x = RH.x.Zero(), this.y = RH.x.Zero(), this.z = RH.x.Zero(), this.xx = RH.x.Zero(), this.yy = RH.x.Zero(), this.zz = RH.x.Zero(), this.xy = RH.x.Zero(), this.yz = RH.x.Zero(), this.zx = RH.x.Zero();
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = GH.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics;
      }
      addAmbient(HH) {
        RH.p.Rh[0].nY(HH.r, HH.g, HH.b);
        const IH = RH.p.Rh[0];
        this.xx.addInPlace(IH), this.yy.addInPlace(IH), this.zz.addInPlace(IH);
      }
      scaleInPlace(HH) {
        this.x.scaleInPlace(HH), this.y.scaleInPlace(HH), this.z.scaleInPlace(HH), this.xx.scaleInPlace(HH), this.yy.scaleInPlace(HH), this.zz.scaleInPlace(HH), this.yz.scaleInPlace(HH), this.zx.scaleInPlace(HH), this.xy.scaleInPlace(HH);
      }
      updateFromHarmonics(HH) {
        return this._harmonics = HH, this.x.RH(HH.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.RH(HH.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.RH(HH.l10), this.z.scaleInPlace(1.02333), this.xx.RH(HH.l00), RH.p.Rh[0].RH(HH.l20).scaleInPlace(.247708), RH.p.Rh[1].RH(HH.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).wr(RH.p.Rh[0]).addInPlace(RH.p.Rh[1]), this.yy.RH(HH.l00), this.yy.scaleInPlace(.886277).wr(RH.p.Rh[0]).wr(RH.p.Rh[1]), this.zz.RH(HH.l00), RH.p.Rh[0].RH(HH.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(RH.p.Rh[0]), this.yz.RH(HH.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.RH(HH.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.RH(HH.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this;
      }
      static FromHarmonics(HH) {
        return new AH().updateFromHarmonics(HH);
      }
      static Qh(HH) {
        const IH = new AH();
        return RH.x.FromArrayToRef(HH[0], 0, IH.x), RH.x.FromArrayToRef(HH[1], 0, IH.y), RH.x.FromArrayToRef(HH[2], 0, IH.z), RH.x.FromArrayToRef(HH[3], 0, IH.xx), RH.x.FromArrayToRef(HH[4], 0, IH.yy), RH.x.FromArrayToRef(HH[5], 0, IH.zz), RH.x.FromArrayToRef(HH[6], 0, IH.yz), RH.x.FromArrayToRef(HH[7], 0, IH.zx), RH.x.FromArrayToRef(HH[8], 0, IH.xy), IH;
      }
    }
  },
  22935: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => MH,
      f: () => NH,
      j: () => DH
    });
    var RH = EH(21764),
      hH = EH(21817),
      TH = EH(22243),
      sH = EH(22173),
      eH = EH(21832),
      GH = EH(22128),
      AH = EH(22939),
      VH = EH(21771),
      YH = EH(21782);
    class QH extends RH.t {
      constructor(HH, IH) {
        super(HH.x, HH.y), this.index = IH;
      }
    }
    class JH {
      constructor() {
        this.elements = [];
      }
      add(HH) {
        const IH = [];
        for (const EH of HH) {
          const HH = new QH(EH, this.elements.length);
          IH.push(HH), this.elements.push(HH);
        }
        return IH;
      }
      computeBounds() {
        const HH = new RH.t(this.elements[0].x, this.elements[0].y),
          IH = new RH.t(this.elements[0].x, this.elements[0].y);
        for (const EH of this.elements) EH.x < HH.x ? HH.x = EH.x : EH.x > IH.x && (IH.x = EH.x), EH.y < HH.y ? HH.y = EH.y : EH.y > IH.y && (IH.y = EH.y);
        return {
          min: HH,
          max: IH,
          width: IH.x - HH.x,
          height: IH.y - HH.y
        };
      }
    }
    class OH {
      _addToepoint(HH) {
        for (const IH of HH) this._epoints.push(IH.x, IH.y);
      }
      constructor(HH, IH, EH) {
        let RH,
          hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : earcut;
        this._points = new JH(), this._outlinepoints = new JH(), this._holes = new Array(), this._epoints = new Array(), this._eholes = new Array(), this.bjsEarcut = hH, this._name = HH, this._scene = EH || YH.e.LastCreatedScene, RH = IH instanceof AH.h ? IH.getPoints() : IH, this._addToepoint(RH), this._points.add(RH), this._outlinepoints.add(RH), "undefined" === typeof this.bjsEarcut && eH.e.Warn("Earcut was not found, the polygon will not be built.");
      }
      addHole(HH) {
        this._points.add(HH);
        const IH = new JH();
        return IH.add(HH), this._holes.push(IH), this._eholes.push(this._epoints.length / 2), this._addToepoint(HH), this;
      }
      build() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        const RH = new TH.b(this._name, this._scene),
          hH = this.buildVertexData(IH, EH);
        return RH.setVerticesData(GH.t.PositionKind, hH.positions, HH), RH.setVerticesData(GH.t.NormalKind, hH.normals, HH), RH.setVerticesData(GH.t.UVKind, hH.uvs, HH), RH.setIndices(hH.indices), RH;
      }
      buildVertexData() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        const EH = new sH.c(),
          RH = [],
          hH = [],
          TH = [],
          eH = this._points.computeBounds();
        for (const sH of this._points.elements) RH.push(0, 1, 0), hH.push(sH.x, 0, sH.y), TH.push((sH.x - eH.min.x) / eH.width, (sH.y - eH.min.y) / eH.height);
        const GH = [],
          AH = this.bjsEarcut(this._epoints, this._eholes, 2);
        for (let sH = 0; sH < AH.length; sH++) GH.push(AH[sH]);
        if (HH > 0) {
          const EH = hH.length / 3;
          for (const IH of this._points.elements) RH.push(0, -1, 0), hH.push(IH.x, -HH, IH.y), TH.push(1 - (IH.x - eH.min.x) / eH.width, 1 - (IH.y - eH.min.y) / eH.height);
          const sH = GH.length;
          for (let HH = 0; HH < sH; HH += 3) {
            const IH = GH[HH + 0],
              RH = GH[HH + 1],
              hH = GH[HH + 2];
            GH.push(hH + EH), GH.push(RH + EH), GH.push(IH + EH);
          }
          this._addSide(hH, RH, TH, GH, eH, this._outlinepoints, HH, !1, IH);
          for (const AH of this._holes) this._addSide(hH, RH, TH, GH, eH, AH, HH, !0, IH);
        }
        return EH.indices = GH, EH.positions = hH, EH.normals = RH, EH.uvs = TH, EH;
      }
      _addSide(HH, IH, EH, hH, TH, sH, eH, GH, AH) {
        let YH = HH.length / 3,
          QH = 0;
        for (let JH = 0; JH < sH.elements.length; JH++) {
          const OH = sH.elements[JH],
            rH = sH.elements[(JH + 1) % sH.elements.length];
          HH.push(OH.x, 0, OH.y), HH.push(OH.x, -eH, OH.y), HH.push(rH.x, 0, rH.y), HH.push(rH.x, -eH, rH.y);
          const FH = sH.elements[(JH + sH.elements.length - 1) % sH.elements.length],
            MH = sH.elements[(JH + 2) % sH.elements.length];
          let NH = new RH.x(-(rH.y - OH.y), 0, rH.x - OH.x),
            iI = new RH.x(-(OH.y - FH.y), 0, OH.x - FH.x),
            DH = new RH.x(-(MH.y - rH.y), 0, MH.x - rH.x);
          GH || (NH = NH.scale(-1), iI = iI.scale(-1), DH = DH.scale(-1));
          const PH = NH.normalizeToNew();
          let XH,
            mI = iI.normalizeToNew();
          const ZH = RH.x.Dot(mI, PH);
          mI = ZH > AH ? ZH < VH.b - 1 ? new RH.x(OH.x, 0, OH.y).subtract(new RH.x(rH.x, 0, rH.y)).normalize() : iI.add(NH).normalize() : PH;
          const qH = RH.x.Dot(DH, NH);
          XH = qH > AH ? qH < VH.b - 1 ? new RH.x(rH.x, 0, rH.y).subtract(new RH.x(OH.x, 0, OH.y)).normalize() : DH.add(NH).normalize() : PH, EH.push(QH / TH.width, 0), EH.push(QH / TH.width, 1), QH += NH.length(), EH.push(QH / TH.width, 0), EH.push(QH / TH.width, 1), IH.push(mI.x, mI.y, mI.z), IH.push(mI.x, mI.y, mI.z), IH.push(XH.x, XH.y, XH.z), IH.push(XH.x, XH.y, XH.z), GH ? (hH.push(YH), hH.push(YH + 2), hH.push(YH + 1), hH.push(YH + 1), hH.push(YH + 2), hH.push(YH + 3)) : (hH.push(YH), hH.push(YH + 1), hH.push(YH + 2), hH.push(YH + 1), hH.push(YH + 3), hH.push(YH + 2)), YH += 4;
        }
      }
    }
    var rH = EH(22103);
    function FH(HH, IH, EH, TH, eH, AH, VH) {
      const YH = EH || new Array(3),
        QH = TH,
        JH = [],
        OH = VH || !1;
      for (let sH = 0; sH < 3; sH++) void 0 === YH[sH] && (YH[sH] = new RH.y(0, 0, 1, 1)), QH && void 0 === QH[sH] && (QH[sH] = new hH.d(1, 1, 1, 1));
      const FH = HH.getVerticesData(GH.t.PositionKind),
        MH = HH.getVerticesData(GH.t.NormalKind),
        NH = HH.getVerticesData(GH.t.UVKind),
        iI = HH.uO(),
        DH = FH.length / 9;
      let PH,
        XH,
        mI,
        ZH,
        qH = 0;
      const LH = [0];
      if (OH) for (let RH = DH; RH < FH.length / 3; RH += 4) XH = FH[3 * (RH + 2)] - FH[3 * RH], mI = FH[3 * (RH + 2) + 2] - FH[3 * RH + 2], ZH = Math.sqrt(XH * XH + mI * mI), qH += ZH, LH.push(qH);
      let gH,
        yH = 0;
      for (let RH = 0; RH < MH.length; RH += 3) Math.abs(MH[RH + 1]) < .001 && (yH = 1), Math.abs(MH[RH + 1] - 1) < .001 && (yH = 0), Math.abs(MH[RH + 1] + 1) < .001 && (yH = 2), gH = RH / 3, 1 === yH ? (PH = gH - DH, NH[2 * gH] = PH % 4 < 1.5 ? OH ? YH[yH].x + (YH[yH].z - YH[yH].x) * LH[Math.floor(PH / 4)] / qH : YH[yH].x : OH ? YH[yH].x + (YH[yH].z - YH[yH].x) * LH[Math.floor(PH / 4) + 1] / qH : YH[yH].z, NH[2 * gH + 1] = PH % 2 === 0 ? rH.c ? 1 - YH[yH].w : YH[yH].w : rH.c ? 1 - YH[yH].y : YH[yH].y) : (NH[2 * gH] = (1 - NH[2 * gH]) * YH[yH].x + NH[2 * gH] * YH[yH].z, NH[2 * gH + 1] = (1 - NH[2 * gH + 1]) * YH[yH].y + NH[2 * gH + 1] * YH[yH].w, rH.c && (NH[2 * gH + 1] = 1 - NH[2 * gH + 1])), QH && JH.push(QH[yH].r, QH[yH].g, QH[yH].b, QH[yH].a);
      sH.c._ComputeSides(IH, FH, iI, MH, NH, eH, AH);
      const oH = new sH.c();
      if (oH.indices = iI, oH.positions = FH, oH.normals = MH, oH.uvs = NH, QH) {
        const HH = IH === sH.c.DOUBLESIDE ? JH.concat(JH) : JH;
        oH.colors = HH;
      }
      return oH;
    }
    function MH(HH, IH) {
      let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : earcut;
      IH.sideOrientation = TH.b._GetDefaultSideOrientation(IH.sideOrientation);
      const sH = IH.shape,
        eH = IH.holes || [],
        GH = IH.depth || 0,
        AH = IH.smoothingThreshold || 2,
        VH = [];
      let QH;
      for (let TH = 0; TH < sH.length; TH++) VH[TH] = new RH.t(sH[TH].x, sH[TH].z);
      VH[0].equalsWithEpsilon(VH[VH.length - 1], 1e-8) && VH.pop();
      const JH = new OH(HH, VH, EH || YH.e.LastCreatedScene, hH);
      for (let TH = 0; TH < eH.length; TH++) {
        QH = [];
        for (let HH = 0; HH < eH[TH].length; HH++) QH.push(new RH.t(eH[TH][HH].x, eH[TH][HH].z));
        JH.addHole(QH);
      }
      const rH = JH.build(!1, GH, AH);
      rH._originalBuilderSideOrientation = IH.sideOrientation;
      return FH(rH, IH.sideOrientation, IH.faceUV, IH.faceColors, IH.frontUVs, IH.backUVs, IH.wrap).applyToMesh(rH, IH.updatable), rH;
    }
    function NH(HH, IH) {
      return MH(HH, IH, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : earcut);
    }
    let iI = !1;
    function DH() {
      iI || (iI = !0, sH.c.CreatePolygon = FH, TH.b.CreatePolygon = function (HH, IH, EH, RH, hH, TH) {
        return MH(HH, {
          shape: IH,
          holes: RH,
          updatable: hH,
          sideOrientation: TH
        }, EH, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : earcut);
      }, TH.b.ExtrudePolygon = function (HH, IH, EH, RH, hH, TH, sH) {
        return NH(HH, {
          shape: IH,
          holes: hH,
          depth: EH,
          updatable: TH,
          sideOrientation: sH
        }, RH, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : earcut);
      });
    }
  },
  22946: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => VH,
      i: () => YH
    });
    var RH = EH(22939),
      hH = EH(21764),
      TH = EH(22243),
      sH = EH(22126),
      eH = EH(22935);
    class GH {
      constructor(HH) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = HH;
      }
      moveTo(HH, IH) {
        this._currentPath = new RH.h(HH, IH), this._tempPaths.push(this._currentPath);
      }
      lineTo(HH, IH) {
        this._currentPath.addLineTo(HH, IH);
      }
      quadraticCurveTo(HH, IH, EH, RH) {
        this._currentPath.addQuadraticCurveTo(HH, IH, EH, RH, this._resolution);
      }
      bezierCurveTo(HH, IH, EH, RH, hH, TH) {
        this._currentPath.addBezierCurveTo(HH, IH, EH, RH, hH, TH, this._resolution);
      }
      extractHoles() {
        for (const HH of this._tempPaths) HH.area() > 0 ? this._holes.push(HH) : this._paths.push(HH);
        if (!this._paths.length && this._holes.length) {
          const HH = this._holes;
          this._holes = this._paths, this._paths = HH;
        }
        this._tempPaths.length = 0;
      }
      get paths() {
        return this._paths;
      }
      get holes() {
        return this._holes;
      }
    }
    function AH(HH, IH, EH, RH, hH, TH) {
      const sH = TH.glyphs[HH] || TH.glyphs["?"];
      if (!sH) return null;
      const eH = new GH(hH);
      if (sH.o) {
        const HH = sH.o.split(" ");
        for (let hH = 0, TH = HH.length; hH < TH;) {
          switch (HH[hH++]) {
            case "m":
              {
                const TH = parseInt(HH[hH++]) * IH + EH,
                  sH = parseInt(HH[hH++]) * IH + RH;
                eH.moveTo(TH, sH);
                break;
              }
            case "l":
              {
                const TH = parseInt(HH[hH++]) * IH + EH,
                  sH = parseInt(HH[hH++]) * IH + RH;
                eH.lineTo(TH, sH);
                break;
              }
            case "q":
              {
                const TH = parseInt(HH[hH++]) * IH + EH,
                  sH = parseInt(HH[hH++]) * IH + RH,
                  GH = parseInt(HH[hH++]) * IH + EH,
                  AH = parseInt(HH[hH++]) * IH + RH;
                eH.quadraticCurveTo(GH, AH, TH, sH);
                break;
              }
            case "b":
              {
                const TH = parseInt(HH[hH++]) * IH + EH,
                  sH = parseInt(HH[hH++]) * IH + RH,
                  GH = parseInt(HH[hH++]) * IH + EH,
                  AH = parseInt(HH[hH++]) * IH + RH,
                  VH = parseInt(HH[hH++]) * IH + EH,
                  YH = parseInt(HH[hH++]) * IH + RH;
                eH.bezierCurveTo(GH, AH, VH, YH, TH, sH);
                break;
              }
          }
        }
      }
      return eH.extractHoles(), {
        offsetX: sH.ha * IH,
        shapePath: eH
      };
    }
    function VH(HH, IH, EH, RH) {
      const hH = Array.from(HH),
        TH = IH / RH.resolution,
        sH = (RH.boundingBox.yMax - RH.boundingBox.yMin + RH.underlineThickness) * TH,
        eH = [];
      let GH = 0,
        VH = 0;
      for (let YH = 0; YH < hH.length; YH++) {
        const HH = hH[YH];
        if ("\n" === HH) GH = 0, VH -= sH;else {
          const IH = AH(HH, TH, GH, VH, EH, RH);
          IH && (GH += IH.offsetX, eH.push(IH.shapePath));
        }
      }
      return eH;
    }
    function YH(HH, IH, EH) {
      let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
          size: 50,
          resolution: 8,
          depth: 1
        },
        GH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        AH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : earcut;
      const YH = VH(IH, RH.size || 50, RH.resolution || 8, EH),
        QH = [];
      let JH = 0;
      for (const sH of YH) {
        if (!sH.paths.length) continue;
        const IH = sH.holes.slice();
        for (const EH of sH.paths) {
          var OH, rH;
          const sH = [],
            VH = [],
            YH = EH.getPoints();
          for (const HH of YH) VH.push(new hH.x(HH.x, 0, HH.y));
          const FH = IH.slice();
          for (const HH of FH) {
            const RH = HH.getPoints();
            let TH = !1;
            for (const HH of RH) if (EH.isPointInside(HH)) {
              TH = !0;
              break;
            }
            if (!TH) continue;
            const eH = [];
            for (const HH of RH) eH.push(new hH.x(HH.x, 0, HH.y));
            sH.push(eH), IH.splice(IH.indexOf(HH), 1);
          }
          if (!sH.length && IH.length) for (const HH of IH) {
            const IH = HH.getPoints(),
              EH = [];
            for (const HH of IH) EH.push(new hH.x(HH.x, 0, HH.y));
            sH.push(EH);
          }
          const MH = (0, eH.f)(HH, {
            shape: VH,
            holes: sH.length ? sH : void 0,
            depth: RH.depth || 1,
            faceUV: RH.faceUV || (null === (OH = RH.perLetterFaceUV) || void 0 === OH ? void 0 : OH.call(RH, JH)),
            faceColors: RH.faceColors || (null === (rH = RH.perLetterFaceColors) || void 0 === rH ? void 0 : rH.call(RH, JH)),
            sideOrientation: TH.b._GetDefaultSideOrientation(RH.sideOrientation || TH.b.DOUBLESIDE)
          }, GH, AH);
          QH.push(MH), JH++;
        }
      }
      const FH = TH.b.MergeMeshes(QH, !0, !0);
      if (FH) {
        const IH = FH.getBoundingInfo().boundingBox;
        FH.position.x += -(IH.minimumWorld.x + IH.maximumWorld.x) / 2, FH.position.y += -(IH.minimumWorld.y + IH.maximumWorld.y) / 2, FH.position.z += -(IH.minimumWorld.z + IH.maximumWorld.z) / 2 + IH.extendSize.z, FH.name = HH;
        const EH = new sH.f("pivot", GH);
        EH.rotation.x = -Math.PI / 2, FH.parent = EH, FH.bakeCurrentTransformIntoVertices(), FH.parent = null, EH.dispose();
      }
      return FH;
    }
  },
  22427: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => GH,
      g: () => sH,
      i: () => eH
    });
    var RH = EH(21819),
      hH = EH(22432),
      TH = EH(22440);
    function sH() {
      return "object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1;
    }
    function eH(HH) {
      return !!(HH.wasmUrl && (HH.wasmBinary || HH.wasmBinaryUrl) && "object" === typeof WebAssembly || HH.fallbackUrl);
    }
    class GH {
      constructor(HH) {
        var IH;
        if (HH.workerPool) return void (this._workerPoolPromise = Promise.resolve(HH.workerPool));
        const EH = HH.wasmBinary,
          eH = null !== (IH = HH.numWorkers) && void 0 !== IH ? IH : sH(),
          GH = eH && "function" === typeof Worker && "function" === typeof URL,
          AH = GH || !HH.jsModule,
          VH = HH.wasmUrl && HH.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: AH ? RH.i.GetBabylonScriptURL(HH.wasmUrl, !0) : "",
            wasmBinaryPromise: EH ? Promise.resolve(EH) : RH.i.LoadFileAsync(RH.i.GetBabylonScriptURL(HH.wasmBinaryUrl, !0))
          } : {
            url: AH ? RH.i.GetBabylonScriptURL(HH.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        GH ? this._workerPoolPromise = VH.wasmBinaryPromise.then(HH => {
          const IH = this._getWorkerContent(),
            EH = URL.createObjectURL(new Blob([IH], {
              type: "application/javascript"
            }));
          return new hH.c(eH, () => {
            const IH = new Worker(EH);
            return (0, TH.k)(IH, HH, VH.url);
          });
        }) : this._modulePromise = VH.wasmBinaryPromise.then(async IH => {
          if (!this._isModuleAvailable() && !HH.jsModule) {
            if (!VH.url) throw new Error("Draco codec module is not available");
            await RH.i.LoadBabylonScriptAsync(VH.url);
          }
          return await this._createModuleAsync(IH, HH.jsModule);
        });
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && (await this._modulePromise);
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then(HH => {
          HH.dispose();
        }), delete this._workerPoolPromise, delete this._modulePromise;
      }
    }
  },
  22440: (HH, IH, EH) => {
    function RH(HH, IH, EH, RH) {
      const hH = HH;
      let TH = null,
        sH = null,
        eH = null,
        GH = null;
      const AH = {},
        VH = IH.find(HH => "POSITION" === HH.dracoName);
      if (!VH) throw new Error("Draco: Missing position attribute for encoding.");
      if (!EH) {
        const HH = VH.data.length / VH.size;
        EH = new (HH > 65535 ? Uint32Array : Uint16Array)(HH);
        for (let IH = 0; IH < HH; IH++) EH[IH] = IH;
      }
      try {
        TH = new hH.Encoder(), sH = new hH.MeshBuilder(), eH = new hH.Mesh(), sH.AddFacesToMesh(eH, EH.length / 3, EH);
        const HH = new Map([[Float32Array, (HH, IH, EH, RH, hH, TH) => HH.AddFloatAttribute(IH, EH, RH, hH, TH)], [Uint32Array, (HH, IH, EH, RH, hH, TH) => HH.AddUInt32Attribute(IH, EH, RH, hH, TH)], [Uint16Array, (HH, IH, EH, RH, hH, TH) => HH.AddUInt16Attribute(IH, EH, RH, hH, TH)], [Uint8Array, (HH, IH, EH, RH, hH, TH) => HH.AddUInt8Attribute(IH, EH, RH, hH, TH)], [Int32Array, (HH, IH, EH, RH, hH, TH) => HH.AddInt32Attribute(IH, EH, RH, hH, TH)], [Int16Array, (HH, IH, EH, RH, hH, TH) => HH.AddInt16Attribute(IH, EH, RH, hH, TH)], [Int8Array, (HH, IH, EH, RH, hH, TH) => HH.AddInt8Attribute(IH, EH, RH, hH, TH)]]);
        for (const EH of IH) {
          EH.data instanceof Uint8ClampedArray && (EH.data = new Uint8Array(EH.data));
          const IH = HH.get(EH.data.constructor),
            GH = EH.data.length / EH.size;
          AH[EH.kind] = IH(sH, eH, hH[EH.dracoName], GH, EH.size, EH.data), RH.quantizationBits && RH.quantizationBits[EH.dracoName] && TH.SetAttributeQuantization(hH[EH.dracoName], RH.quantizationBits[EH.dracoName]);
        }
        RH.method && TH.SetEncodingMethod(hH[RH.method]), void 0 !== RH.encodeSpeed && void 0 !== RH.decodeSpeed && TH.SetSpeedOptions(RH.encodeSpeed, RH.decodeSpeed), GH = new hH.DracoInt8Array();
        const VH = TH.EncodeMeshToDracoBuffer(eH, GH);
        if (VH <= 0) throw new Error("Draco: Failed to encode.");
        const YH = new Int8Array(VH);
        for (let IH = 0; IH < VH; IH++) YH[IH] = GH.GetValue(IH);
        return {
          data: YH,
          attributeIds: AH
        };
      } finally {
        eH && hH.destroy(eH), sH && hH.destroy(sH), TH && hH.destroy(TH), GH && hH.destroy(GH);
      }
    }
    function hH() {
      let HH;
      onmessage = IH => {
        const EH = IH.data;
        switch (EH.id) {
          case "init":
            {
              EH.url && importScripts(EH.url);
              const IH = EH.wasmBinary ? {
                wasmBinary: EH.wasmBinary
              } : {};
              HH = DracoEncoderModule(IH), postMessage({
                id: "initDone"
              });
              break;
            }
          case "encodeMesh":
            if (!HH) throw new Error("Draco: Encoder module is not available.");
            HH.then(HH => {
              const IH = RH(HH, EH.attributes, EH.indices, EH.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: IH
              }, IH ? [IH.data.buffer] : void 0);
            }).catch(HH => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: HH.message
              });
            });
        }
      };
    }
    function TH(HH, IH, EH, RH, hH) {
      const TH = HH;
      let sH = null,
        eH = null,
        GH = null;
      try {
        let HH;
        sH = new TH.Decoder(), eH = new TH.DecoderBuffer(), eH.Init(IH, IH.byteLength);
        const AH = sH.GetEncodedGeometryType(eH);
        switch (AH) {
          case TH.TRIANGULAR_MESH:
            {
              const IH = new TH.Mesh();
              if (HH = sH.DecodeBufferToMesh(eH, IH), !HH.ok() || 0 === IH.ptr) throw new Error(HH.error_msg());
              const EH = 3 * IH.num_faces(),
                hH = 4 * EH,
                AH = TH._malloc(hH);
              try {
                sH.GetTrianglesUInt32Array(IH, hH, AH);
                const HH = new Uint32Array(EH);
                HH.set(new Uint32Array(TH.HEAPF32.buffer, AH, EH)), RH(HH);
              } finally {
                TH._free(AH);
              }
              GH = IH;
              break;
            }
          case TH.POINT_CLOUD:
            {
              const IH = new TH.PointCloud();
              if (HH = sH.DecodeBufferToPointCloud(eH, IH), !HH.ok() || !IH.ptr) throw new Error(HH.error_msg());
              GH = IH;
              break;
            }
          default:
            throw new Error("Draco: Cannot decode invalid geometry type ".concat(AH));
        }
        const VH = GH.num_points(),
          YH = (HH, IH, EH, RH) => {
            const sH = RH.data_type(),
              eH = RH.num_components(),
              GH = RH.normalized(),
              AH = RH.byte_stride(),
              YH = RH.byte_offset(),
              QH = {
                [TH.DT_FLOAT32]: {
                  typedArrayConstructor: Float32Array,
                  heap: TH.HEAPF32
                },
                [TH.DT_INT8]: {
                  typedArrayConstructor: Int8Array,
                  heap: TH.HEAP8
                },
                [TH.DT_INT16]: {
                  typedArrayConstructor: Int16Array,
                  heap: TH.HEAP16
                },
                [TH.DT_INT32]: {
                  typedArrayConstructor: Int32Array,
                  heap: TH.HEAP32
                },
                [TH.DT_UINT8]: {
                  typedArrayConstructor: Uint8Array,
                  heap: TH.HEAPU8
                },
                [TH.DT_UINT16]: {
                  typedArrayConstructor: Uint16Array,
                  heap: TH.HEAPU16
                },
                [TH.DT_UINT32]: {
                  typedArrayConstructor: Uint32Array,
                  heap: TH.HEAPU32
                }
              }[sH];
            if (!QH) throw new Error("Draco: Cannot decode invalid data type ".concat(sH));
            const JH = VH * eH,
              OH = JH * QH.typedArrayConstructor.BYTES_PER_ELEMENT,
              rH = TH._malloc(OH);
            try {
              HH.GetAttributeDataArrayForAllPoints(IH, RH, sH, OH, rH);
              const TH = new QH.typedArrayConstructor(QH.heap.buffer, rH, JH);
              hH(EH, TH.slice(), eH, YH, AH, GH);
            } finally {
              TH._free(rH);
            }
          };
        if (EH) for (const IH in EH) {
          const HH = EH[IH],
            RH = sH.GetAttributeByUniqueId(GH, HH);
          YH(sH, GH, IH, RH);
        } else {
          const HH = {
            position: TH.POSITION,
            normal: TH.NORMAL,
            color: TH.COLOR,
            uv: TH.TEX_COORD
          };
          for (const IH in HH) {
            const EH = sH.GetAttributeId(GH, HH[IH]);
            if (-1 !== EH) {
              const HH = sH.GetAttribute(GH, EH);
              YH(sH, GH, IH, HH);
            }
          }
        }
        return VH;
      } finally {
        GH && TH.destroy(GH), eH && TH.destroy(eH), sH && TH.destroy(sH);
      }
    }
    function sH() {
      let HH;
      onmessage = IH => {
        const EH = IH.data;
        switch (EH.id) {
          case "init":
            {
              EH.url && importScripts(EH.url);
              const IH = EH.wasmBinary ? {
                wasmBinary: EH.wasmBinary
              } : {};
              HH = DracoDecoderModule(IH), postMessage({
                id: "initDone"
              });
              break;
            }
          case "decodeMesh":
            if (!HH) throw new Error("Draco: Decoder module is not available");
            HH.then(HH => {
              const IH = TH(HH, EH.dataView, EH.attributes, HH => {
                postMessage({
                  id: "indices",
                  data: HH
                }, [HH.buffer]);
              }, (HH, IH, EH, RH, hH, TH) => {
                postMessage({
                  id: "attribute",
                  kind: HH,
                  data: IH,
                  size: EH,
                  byteOffset: RH,
                  byteStride: hH,
                  normalized: TH
                }, [IH.buffer]);
              });
              postMessage({
                id: "decodeMeshDone",
                totalVertices: IH
              });
            });
        }
      };
    }
    async function eH(HH, IH, EH) {
      return await new Promise((RH, hH) => {
        const TH = IH => {
            HH.removeEventListener("error", TH), HH.removeEventListener("message", sH), hH(IH);
          },
          sH = IH => {
            "initDone" === IH.data.id && (HH.removeEventListener("error", TH), HH.removeEventListener("message", sH), RH(HH));
          };
        if (HH.addEventListener("error", TH), HH.addEventListener("message", sH), IH) {
          const RH = IH.slice(0);
          HH.postMessage({
            id: "init",
            url: EH,
            wasmBinary: RH
          }, [RH]);
        } else HH.postMessage({
          id: "init",
          url: EH
        });
      });
    }
    EH.d(IH, {
      b: () => TH,
      f: () => sH,
      h: () => RH,
      j: () => hH,
      k: () => eH
    });
  },
  23650: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => RH.d
    });
    var RH = EH(22229);
    (0, RH.h)();
  },
  22229: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => WH,
      h: () => fH
    });
    var RH = EH(21947),
      hH = EH(21786),
      TH = EH(21764),
      sH = EH(22128),
      eH = EH(22173),
      GH = EH(22126),
      AH = EH(22231),
      VH = EH(22195),
      YH = EH(22235);
    class QH {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new TH.x(0, 0, 0), this._diffPositionForCollisions = new TH.x(0, 0, 0), this._collisionResponse = !0;
      }
    }
    var JH,
      OH,
      rH,
      FH,
      MH,
      NH,
      iI = EH(21856),
      DH = EH(21909),
      PH = EH(22208),
      XH = EH(21817),
      mI = EH(21771),
      ZH = EH(22052),
      qH = EH(21832),
      LH = EH(21956),
      gH = EH(22004),
      yH = EH(21808);
    function oH(HH, IH) {
      return HH - Math.floor(HH / IH) * IH;
    }
    function kI(HH, IH, EH) {
      HH instanceof Float32Array ? TH.d.FromArrayToRef(HH, IH, EH) : EH.nY((0, DH.b)(HH[IH]), (0, DH.b)(HH[IH + 1]), (0, DH.b)(HH[IH + 2]), (0, DH.b)(HH[IH + 3]), (0, DH.b)(HH[IH + 4]), (0, DH.b)(HH[IH + 5]), (0, DH.b)(HH[IH + 6]), (0, DH.b)(HH[IH + 7]), (0, DH.b)(HH[IH + 8]), (0, DH.b)(HH[IH + 9]), (0, DH.b)(HH[IH + 10]), (0, DH.b)(HH[IH + 11]), (0, DH.b)(HH[IH + 12]), (0, DH.b)(HH[IH + 13]), (0, DH.b)(HH[IH + 14]), (0, DH.b)(HH[IH + 15]));
    }
    function CH(HH, IH, EH, RH, hH, eH, GH, AH, VH) {
      const YH = EH.texture,
        QH = null === YH || void 0 === YH ? void 0 : YH.getInternalTexture(),
        JH = null === QH || void 0 === QH ? void 0 : QH._bufferView;
      if (!(JH instanceof Float32Array) && !(JH instanceof Uint16Array)) return qH.e.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const OH = YH.getSize(),
        rH = function (HH, IH) {
          const EH = HH.y - HH.x + 1,
            RH = IH * HH.w / EH,
            hH = RH < 1 ? 0 : 1,
            TH = EH - hH;
          let sH = oH(RH - Math.floor(RH), 1) * TH;
          return sH = oH(sH + HH.z, TH), Math.floor(sH) + HH.x + hH;
        }(RH, EH.time);
      if (!isFinite(rH) || rH < 0 || rH >= OH.height) return qH.e.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const FH = TH.p.Rh[0],
        MH = TH.p.Matrix[0],
        NH = TH.p.Matrix[1],
        iI = rH * OH.width * 4,
        DH = IH === sH.t.NormalKind ? TH.x.TransformNormalFromFloatsToRef : TH.x.TransformCoordinatesFromFloatsToRef;
      for (let TH = 0, sH = 0; TH < HH.length; TH += 3, sH += 4) {
        let IH, EH;
        for (MH.reset(), IH = 0; IH < 4 && IH < VH; IH++) EH = eH[sH + IH], EH > 0 && (kI(JH, iI + 16 * Math.floor(hH[sH + IH]), NH), NH.scaleAndAddToRef(EH, MH));
        if (GH && AH) for (IH = 0; IH < 4 && IH + 4 < VH; IH++) EH = AH[sH + IH], EH > 0 && (kI(JH, iI + 16 * Math.floor(GH[sH + IH]), NH), NH.scaleAndAddToRef(EH, MH));
        DH(HH[TH], HH[TH + 1], HH[TH + 2], MH, FH), FH.toArray(HH, TH);
      }
      return !0;
    }
    class cH {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = TH.x.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1;
      }
    }
    class UH {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new cH(), this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map(), this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new QH(), this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1;
      }
    }
    let WH = (() => {
        var HH;
        let IH,
          QH = GH.f,
          JH = [];
        return HH = class extends QH {
          static get BILLBOARDMODE_NONE() {
            return GH.f.BILLBOARDMODE_NONE;
          }
          static get BILLBOARDMODE_X() {
            return GH.f.BILLBOARDMODE_X;
          }
          static get BILLBOARDMODE_Y() {
            return GH.f.BILLBOARDMODE_Y;
          }
          static get BILLBOARDMODE_Z() {
            return GH.f.BILLBOARDMODE_Z;
          }
          static get BILLBOARDMODE_ALL() {
            return GH.f.BILLBOARDMODE_ALL;
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return GH.f.BILLBOARDMODE_USE_POSITION;
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb;
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions;
          }
          set partitioningSubdivisions(HH) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = HH;
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio;
          }
          set partitioningBBoxRatio(HH) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = HH;
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort;
          }
          set mustDepthSortFacets(HH) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = HH;
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom;
          }
          set facetDepthSortFrom(HH) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = HH;
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount;
          }
          set collisionRetryCount(HH) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = HH;
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled;
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager;
          }
          set morphTargetManager(HH) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== HH && (this._internalAbstractMeshDataInfo._morphTargetManager = HH, this._syncGeometryWithMorphTargetManager());
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager;
          }
          set bakedVertexAnimationManager(HH) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== HH && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = HH, this._markSubMeshesAsAttributesDirty());
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(HH) {
            return !!super._updateNonUniformScalingState(HH) && (this._markSubMeshesAsMiscDirty(), !0);
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo;
          }
          set rawBoundingInfo(HH) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = HH;
          }
          set MN(HH) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(HH);
          }
          set onCollisionPositionChange(HH) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(HH);
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility;
          }
          set visibility(HH) {
            if (this._internalAbstractMeshDataInfo._visibility === HH) return;
            const IH = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = HH, (1 === IH && 1 !== HH || 1 !== IH && 1 === HH) && this._markSubMeshesAsDirty(HH => {
              HH.markAsMiscDirty(), HH.markAsPrePassDirty();
            });
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting;
          }
          set pointerOverDisableMeshTesting(HH) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = HH;
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId;
          }
          set renderingGroupId(HH) {
            this._internalAbstractMeshDataInfo._renderingGroupId = HH;
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material;
          }
          set material(HH) {
            this._setMaterial(HH);
          }
          _setMaterial(HH) {
            this._internalAbstractMeshDataInfo._material !== HH && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = HH, HH && HH.meshMap && (HH.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.BJ && (this.resetDrawCache(void 0, null == HH), this._unBindEffect()));
          }
          getMaterialForRenderPass(HH) {
            var IH;
            return null === (IH = this._internalAbstractMeshDataInfo._materialForRenderPass) || void 0 === IH ? void 0 : IH[HH];
          }
          setMaterialForRenderPass(HH, IH) {
            var EH;
            this.resetDrawCache(HH), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const RH = this._internalAbstractMeshDataInfo._materialForRenderPass[HH];
            null !== RH && void 0 !== RH && null !== (EH = RH.meshMap) && void 0 !== EH && EH[this.uniqueId] && (RH.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[HH] = IH, IH && IH.meshMap && (IH.meshMap[this.uniqueId] = this);
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows;
          }
          set receiveShadows(HH) {
            this._internalAbstractMeshDataInfo._receiveShadows !== HH && (this._internalAbstractMeshDataInfo._receiveShadows = HH, this._markSubMeshesAsLightDirty());
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha;
          }
          set hasVertexAlpha(HH) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== HH && (this._internalAbstractMeshDataInfo._hasVertexAlpha = HH, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty());
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors;
          }
          set useVertexColors(HH) {
            this._internalAbstractMeshDataInfo._useVertexColors !== HH && (this._internalAbstractMeshDataInfo._useVertexColors = HH, this._markSubMeshesAsAttributesDirty());
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders;
          }
          set computeBonesUsingShaders(HH) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== HH && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = HH, this._markSubMeshesAsAttributesDirty());
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers;
          }
          set numBoneInfluencers(HH) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== HH && (this._internalAbstractMeshDataInfo._numBoneInfluencers = HH, this._markSubMeshesAsAttributesDirty());
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog;
          }
          set applyFog(HH) {
            this._internalAbstractMeshDataInfo._applyFog !== HH && (this._internalAbstractMeshDataInfo._applyFog = HH, this._markSubMeshesAsMiscDirty());
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking;
          }
          set enableDistantPicking(HH) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = HH;
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask;
          }
          set layerMask(HH) {
            HH !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = HH, this._resyncLightSources());
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask;
          }
          set collisionMask(HH) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(HH) ? -1 : HH;
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse;
          }
          set collisionResponse(HH) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = HH;
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup;
          }
          set collisionGroup(HH) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(HH) ? -1 : HH;
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes;
          }
          set surroundingMeshes(HH) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = HH;
          }
          get lightSources() {
            return this._lightSources;
          }
          set skeleton(HH) {
            const IH = this._internalAbstractMeshDataInfo._skeleton;
            IH && IH.needInitialSkinMatrix && IH._unregisterMeshWithPoseMatrix(this), HH && HH.needInitialSkinMatrix && HH._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = HH, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty();
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton;
          }
          constructor(IH) {
            var EH;
            let RH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(IH, RH, !1), EH = this, this._internalAbstractMeshDataInfo = new UH(), this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = HH.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new hH.e(), this.onCollisionPositionChangeObservable = new hH.e(), this.onMaterialChangedObservable = new hH.e(), this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.aQ = HH.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = XH.b.Red(), this.outlineWidth = .02, this.overlayColor = XH.b.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.CJ = !1, this.hI = !1, this.actionManager = null, this.ellipsoid = new TH.x(.5, 1, .5), this.ellipsoidOffset = new TH.x(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new XH.d(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array(), this._unIndexed = !1, this._lightSources = new Array(), this._waitingData = {
              lods: null,
              actions: null,
              IT: null
            }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new hH.e(), this._onCollisionPositionChange = function (HH, IH) {
              let RH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              IH.subtractToRef(EH._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, EH._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), EH._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > gH.c.CollisionsEpsilon && EH.position.addInPlace(EH._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), RH && EH.onCollideObservable.notifyObservers(RH), EH.onCollisionPositionChangeObservable.notifyObservers(EH.position);
            }, RH = this.kh(), this.layerMask = RH.defaultRenderableLayerMask, RH.aO(this), this._resyncLightSources(), this._uniformBuffer = new YH.e(this.kh().getEngine(), void 0, void 0, IH, !this.kh().getEngine().isWebGPU), this._buildUniformLayout(), RH.performancePriority) {
              case 2:
                this.hI = !0;
              case 1:
                this.CJ = !0, this.aQ = !1;
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create();
          }
          transferToEffect(HH) {
            const IH = this._uniformBuffer;
            IH.uN("world", HH), IH.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), IH.update();
          }
          getMeshUniformBuffer() {
            return this._uniformBuffer;
          }
          getClassName() {
            return "AbstractMesh";
          }
          toString(HH) {
            let IH = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            IH += ", # of submeshes: " + (this.BJ ? this.BJ.length : 0);
            const EH = this._internalAbstractMeshDataInfo._skeleton;
            return EH && (IH += ", skeleton: " + EH.name), HH && (IH += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], IH += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.IT ? "YES" : "NO")), IH;
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== GH.f.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent();
          }
          _getActionManagerForTrigger(HH) {
            let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (IH || this.actionManager.isRecursive)) {
              if (!HH) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(HH)) return this.actionManager;
            }
            return this.parent ? this.parent._getActionManagerForTrigger(HH, !1) : null;
          }
          _releaseRenderPassId(HH) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.BJ) {
              for (const HH of this.BJ) HH._rebuild();
              this.resetDrawCache();
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const HH of this.kh().lights) HH.isEnabled() && HH.canAffectMesh(this) && this._lightSources.push(HH);
            this._markSubMeshesAsLightDirty();
          }
          _resyncLightSource(HH) {
            const IH = HH.isEnabled() && HH.canAffectMesh(this),
              EH = this._lightSources.indexOf(HH);
            let RH = !1;
            if (-1 === EH) {
              if (!IH) return;
              this._lightSources.push(HH);
            } else {
              if (IH) return;
              RH = !0, this._lightSources.splice(EH, 1);
            }
            this._markSubMeshesAsLightDirty(RH);
          }
          _unBindEffect() {
            for (const HH of this.BJ) HH.setEffect(null);
          }
          _removeLightSource(HH, IH) {
            const EH = this._lightSources.indexOf(HH);
            -1 !== EH && (this._lightSources.splice(EH, 1), this._markSubMeshesAsLightDirty(IH));
          }
          _markSubMeshesAsDirty(HH) {
            if (this.BJ) for (const IH of this.BJ) for (let EH = 0; EH < IH._drawWrappers.length; ++EH) {
              const RH = IH._drawWrappers[EH];
              RH && RH.defines && RH.defines.markAllAsDirty && HH(RH.defines);
            }
          }
          _markSubMeshesAsLightDirty() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty(IH => IH.markAsLightDirty(HH));
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty(HH => HH.markAsAttributesDirty());
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty(HH => HH.markAsMiscDirty());
          }
          JO(HH) {
            return this._currentRenderId = Number.MAX_VALUE, super.JO(HH), this._isDirty = !0, this;
          }
          resetDrawCache(HH) {
            let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.BJ) for (const EH of this.BJ) EH.resetDrawCache(HH, IH);
          }
          get isBlocked() {
            return !1;
          }
          getLOD(HH) {
            return this;
          }
          getTotalVertices() {
            return 0;
          }
          getTotalIndices() {
            return 0;
          }
          uO() {
            return null;
          }
          getVerticesData(HH) {
            return null;
          }
          setVerticesData(HH, IH, EH, RH) {
            return this;
          }
          updateVerticesData(HH, IH, EH, RH) {
            return this;
          }
          setIndices(HH, IH) {
            return this;
          }
          isVerticesDataPresent(HH) {
            return !1;
          }
          getBoundingInfo() {
            return this._masterMesh ? this._masterMesh.getBoundingInfo() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo);
          }
          getRawBoundingInfo() {
            var HH;
            return null !== (HH = this.rawBoundingInfo) && void 0 !== HH ? HH : this.getBoundingInfo();
          }
          setBoundingInfo(HH) {
            return this._boundingInfo = HH, this;
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo;
          }
          buildBoundingInfo(HH, IH, EH) {
            return this._boundingInfo = new VH.e(HH, IH, EH), this._boundingInfo;
          }
          normalizeToUnitCube() {
            let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              EH = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(HH, IH, EH);
          }
          get useBones() {
            return this.skeleton && this.kh().skeletonsEnabled && this.isVerticesDataPresent(sH.t.MatricesIndicesKind) && this.isVerticesDataPresent(sH.t.MatricesWeightsKind);
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(HH) {}
          _activate(HH, IH) {
            return this._renderId = HH, !0;
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === GH.f.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix();
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant();
          }
          get isAnInstance() {
            return !1;
          }
          get hasInstances() {
            return !1;
          }
          get hasThinInstances() {
            return !1;
          }
          movePOV(HH, IH, EH) {
            return this.position.addInPlace(this.calcMovePOV(HH, IH, EH)), this;
          }
          calcMovePOV(HH, IH, EH) {
            const RH = new TH.d();
            (this.rotationQuaternion ? this.rotationQuaternion : TH.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(RH);
            const hH = TH.x.Zero(),
              sH = this.definedFacingForward ? -1 : 1;
            return TH.x.TransformCoordinatesFromFloatsToRef(HH * sH, IH, EH * sH, RH, hH), hH;
          }
          rotatePOV(HH, IH, EH) {
            return this.rotation.addInPlace(this.calcRotatePOV(HH, IH, EH)), this;
          }
          calcRotatePOV(HH, IH, EH) {
            const RH = this.definedFacingForward ? 1 : -1;
            return new TH.x(HH * RH, IH, EH * RH);
          }
          _refreshBoundingInfo(HH, IH) {
            if (HH) {
              const EH = (0, PH.h)(HH, 0, this.getTotalVertices(), IH);
              this._boundingInfo ? this._boundingInfo.reConstruct(EH.minimum, EH.maximum) : this._boundingInfo = new VH.e(EH.minimum, EH.maximum);
            }
            if (this.BJ) for (let EH = 0; EH < this.BJ.length; EH++) this.BJ[EH].refreshBoundingInfo(HH);
            this._updateBoundingInfo();
          }
          _refreshBoundingInfoDirect(HH) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(HH.minimum, HH.maximum) : this._boundingInfo = new VH.e(HH.minimum, HH.maximum), this.BJ) for (let IH = 0; IH < this.BJ.length; IH++) this.BJ[IH].refreshBoundingInfo(null);
            this._updateBoundingInfo();
          }
          static _ApplySkeleton(HH, IH, EH, RH, hH, eH, GH) {
            !function (HH, IH, EH, RH, hH, eH, GH) {
              const AH = TH.p.Rh[0],
                VH = TH.p.Matrix[0],
                YH = TH.p.Matrix[1],
                QH = IH === sH.t.NormalKind ? TH.x.TransformNormalFromFloatsToRef : TH.x.TransformCoordinatesFromFloatsToRef;
              for (let sH = 0, JH = 0; sH < HH.length; sH += 3, JH += 4) {
                let IH, OH;
                for (VH.reset(), IH = 0; IH < 4; IH++) OH = hH[JH + IH], OH > 0 && (TH.d.FromFloat32ArrayToRefScaled(EH, Math.floor(16 * RH[JH + IH]), OH, YH), VH.addToSelf(YH));
                if (eH && GH) for (IH = 0; IH < 4; IH++) OH = GH[JH + IH], OH > 0 && (TH.d.FromFloat32ArrayToRefScaled(EH, Math.floor(16 * eH[JH + IH]), OH, YH), VH.addToSelf(YH));
                QH(HH[sH], HH[sH + 1], HH[sH + 2], VH, AH), AH.toArray(HH, sH);
              }
            }(HH, IH, EH, RH, hH, eH, GH);
          }
          _getData(IH, EH) {
            var RH;
            let hH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sH.t.PositionKind;
            const eH = IH.cache,
              GH = HH => {
                if (eH) {
                  const IH = eH._vertexData || (eH._vertexData = {});
                  return IH[HH] || this.copyVerticesData(HH, IH), IH[HH];
                }
                return this.getVerticesData(HH);
              };
            if (EH || (EH = GH(hH)), !EH) return null;
            eH ? (eH._outputData ? eH._outputData.set(EH) : eH._outputData = new Float32Array(EH), EH = eH._outputData) : (IH.applyMorph && this.morphTargetManager || IH.applySkeleton && this.skeleton || IH.applyBakedVertexAnimation && null !== (RH = this.bakedVertexAnimationManager) && void 0 !== RH && RH.isEnabled) && (EH = EH.slice()), IH.applyMorph && this.morphTargetManager && function (HH, IH, EH) {
              let RH;
              switch (IH) {
                case sH.t.PositionKind:
                  RH = HH => HH.getPositions();
                  break;
                case sH.t.NormalKind:
                  RH = HH => HH.getNormals();
                  break;
                case sH.t.TangentKind:
                  RH = HH => HH.getTangents();
                  break;
                case sH.t.UVKind:
                  RH = HH => HH.getUVs();
                  break;
                case sH.t.UV2Kind:
                  RH = HH => HH.getUV2s();
                  break;
                case sH.t.ColorKind:
                  RH = HH => HH.getColors();
                  break;
                default:
                  return;
              }
              for (let hH = 0; hH < HH.length; hH++) {
                let IH = HH[hH];
                for (let TH = 0; TH < EH.numTargets; TH++) {
                  const sH = EH.getTarget(TH),
                    eH = sH.influence;
                  if (0 !== eH) {
                    const EH = RH(sH);
                    EH && (IH += (EH[hH] - HH[hH]) * eH);
                  }
                }
                HH[hH] = IH;
              }
            }(EH, hH, this.morphTargetManager);
            const AH = this.bakedVertexAnimationManager;
            let VH = !1;
            if (IH.applyBakedVertexAnimation && null !== AH && void 0 !== AH && AH.isEnabled) {
              const HH = GH(sH.t.MatricesIndicesKind),
                RH = GH(sH.t.MatricesWeightsKind);
              if (RH && HH) {
                var YH;
                const TH = this.numBoneInfluencers > 4,
                  eH = TH ? GH(sH.t.MatricesIndicesExtraKind) : null,
                  QH = TH ? GH(sH.t.MatricesWeightsExtraKind) : null;
                VH = CH(EH, hH, AH, null !== (YH = IH.bakedVertexAnimationSettings) && void 0 !== YH ? YH : AH.animationParameters, HH, RH, eH, QH, this.numBoneInfluencers);
              }
            }
            if (!VH && IH.applySkeleton && this.skeleton) {
              const IH = GH(sH.t.MatricesIndicesKind),
                RH = GH(sH.t.MatricesWeightsKind);
              if (RH && IH) {
                const TH = this.numBoneInfluencers > 4,
                  eH = TH ? GH(sH.t.MatricesIndicesExtraKind) : null,
                  AH = TH ? GH(sH.t.MatricesWeightsExtraKind) : null,
                  VH = this.skeleton.getTransformMatrices(this);
                HH._ApplySkeleton(EH, hH, VH, IH, RH, eH, AH);
              }
            }
            if (!1 !== IH.updatePositionsArray && hH === sH.t.PositionKind) {
              const HH = this._internalAbstractMeshDataInfo._positions || [],
                IH = HH.length;
              if (HH.length = EH.length / 3, IH < HH.length) for (let EH = IH; EH < HH.length; EH++) HH[EH] = new TH.x();
              for (let RH = 0, hH = 0; RH < HH.length; RH++, hH += 3) HH[RH].nY(EH[hH], EH[hH + 1], EH[hH + 2]);
              this._internalAbstractMeshDataInfo._positions = HH;
            }
            return EH;
          }
          getNormalsData() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: HH,
              applyMorph: IH,
              updatePositionsArray: !1
            }, null, sH.t.NormalKind);
          }
          BG() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: HH,
              applyMorph: IH,
              updatePositionsArray: !1
            }, EH, sH.t.PositionKind);
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new VH.e(TH.x.Zero(), TH.x.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this;
          }
          _updateSubMeshesBoundingInfo(HH) {
            if (!this.BJ) return this;
            const IH = this.BJ.length;
            for (let EH = 0; EH < IH; EH++) {
              const RH = this.BJ[EH];
              (IH > 1 || !RH.IsGlobal) && RH.updateBoundingInfo(HH);
            }
            return this;
          }
          _afterComputeWorldMatrix() {
            this.hI || (this._boundingInfoIsDirty = !0);
          }
          isInFrustum(HH) {
            return this.getBoundingInfo().isInFrustum(HH, this.cullingStrategy);
          }
          isCompletelyInFrustum(HH) {
            return this.getBoundingInfo().isCompletelyInFrustum(HH);
          }
          intersectsMesh(HH) {
            let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              EH = arguments.length > 2 ? arguments[2] : void 0;
            const RH = this.getBoundingInfo(),
              hH = HH.getBoundingInfo();
            if (RH.intersects(hH, IH)) return !0;
            if (EH) for (const TH of this.UY()) if (TH.intersectsMesh(HH, IH, !0)) return !0;
            return !1;
          }
          intersectsPoint(HH) {
            return this.getBoundingInfo().intersectsPoint(HH);
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions;
          }
          set checkCollisions(HH) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = HH;
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider;
          }
          moveWithCollisions(HH) {
            let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const EH = this.kh().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = EH.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, EH.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, HH, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, IH), this;
          }
          _collideForSubMesh(HH, IH, EH) {
            var RH;
            if (this._generatePointsArray(), !this._positions) return this;
            if (!HH._lastColliderWorldVertices || !HH._lastColliderTransformMatrix.equals(IH)) {
              HH._lastColliderTransformMatrix = IH.clone(), HH._lastColliderWorldVertices = [], HH._trianglePlanes = [];
              const EH = HH.verticesStart,
                RH = HH.verticesStart + HH.verticesCount;
              for (let hH = EH; hH < RH; hH++) HH._lastColliderWorldVertices.push(TH.x.TransformCoordinates(this._positions[hH], IH));
            }
            return EH._collide(HH._trianglePlanes, HH._lastColliderWorldVertices, this.uO(), HH.indexStart, HH.indexStart + HH.indexCount, HH.verticesStart, !!HH.sI(), this, this._shouldConvertRHS(), 7 === (null === (RH = HH.sI()) || void 0 === RH ? void 0 : RH.fillMode)), this;
          }
          _processCollisionsForSubMeshes(HH, IH) {
            const EH = this._scene.getCollidingSubMeshCandidates(this, HH),
              RH = EH.length;
            for (let hH = 0; hH < RH; hH++) {
              const TH = EH.data[hH];
              RH > 1 && !TH._checkCollision(HH) || this._collideForSubMesh(TH, IH, HH);
            }
            return this;
          }
          _shouldConvertRHS() {
            return !1;
          }
          _checkCollision(HH) {
            if (!this.getBoundingInfo()._checkCollision(HH)) return this;
            const IH = TH.p.Matrix[0],
              EH = TH.p.Matrix[1];
            return TH.d.ScalingToRef(1 / HH._radius.x, 1 / HH._radius.y, 1 / HH._radius.z, IH), this.worldMatrixFromCache.multiplyToRef(IH, EH), this._processCollisionsForSubMeshes(HH, EH), this;
          }
          _generatePointsArray() {
            return !1;
          }
          intersects(HH, IH, EH) {
            let RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              hH = arguments.length > 4 ? arguments[4] : void 0,
              sH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const eH = new AH.d(),
              GH = this.getClassName(),
              VH = "InstancedLinesMesh" === GH || "LinesMesh" === GH || "GreasedLineMesh" === GH ? this.intersectionThreshold : 0,
              YH = this.getBoundingInfo();
            if (!this.BJ) return eH;
            if (!sH && (!HH.intersectsSphere(YH.boundingSphere, VH) || !HH.intersectsBox(YH.boundingBox, VH))) return eH;
            if (RH) return eH.hit = !sH, eH.pickedMesh = sH ? null : this, eH.distance = sH ? 0 : TH.x.Distance(HH.origin, YH.boundingSphere.center), eH.subMeshId = 0, eH;
            if (!this._generatePointsArray()) return eH;
            let QH = null;
            const JH = this._scene.getIntersectingSubMeshCandidates(this, HH),
              OH = JH.length;
            let rH = !1;
            for (let TH = 0; TH < OH; TH++) {
              const HH = JH.data[TH].sI();
              if (HH && (7 == HH.fillMode || 0 == HH.fillMode || 1 == HH.fillMode || 2 == HH.fillMode || 4 == HH.fillMode)) {
                rH = !0;
                break;
              }
            }
            if (!rH) return eH.hit = !0, eH.pickedMesh = this, eH.distance = TH.x.Distance(HH.origin, YH.boundingSphere.center), eH.subMeshId = -1, eH;
            for (let TH = 0; TH < OH; TH++) {
              const RH = JH.data[TH];
              if (OH > 1 && !sH && !RH.canIntersects(HH)) continue;
              const hH = RH.intersects(HH, this._positions, this.uO(), IH, EH);
              if (hH && (IH || !QH || hH.distance < QH.distance) && (QH = hH, QH.subMeshId = RH._id, QH._internalSubMeshId = TH, IH)) break;
            }
            if (QH) {
              const IH = null !== hH && void 0 !== hH ? hH : this.getWorldMatrix(),
                EH = TH.p.Rh[0],
                RH = TH.p.Rh[1];
              TH.x.TransformCoordinatesToRef(HH.origin, IH, EH), HH.direction.scaleToRef(QH.distance, RH);
              const sH = TH.x.TransformNormal(RH, IH).addInPlace(EH);
              return eH.hit = !0, eH.distance = TH.x.Distance(EH, sH), eH.pickedPoint = sH, eH.pickedMesh = this, eH.bu = QH.bu || 0, eH.bv = QH.bv || 0, eH.subMeshFaceId = QH.faceId, eH.faceId = QH.faceId + JH.data[QH._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), eH.subMeshId = QH.subMeshId, eH;
            }
            return eH;
          }
          clone(HH, IH, EH) {
            return null;
          }
          releaseSubMeshes() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.BJ) for (; this.BJ.length;) this.BJ[0].dispose(HH);else this.BJ = [];
            return this;
          }
          dispose(HH) {
            let IH,
              EH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const RH = this.kh();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), RH.freeActiveMeshes(), RH.freeRenderingGroups(), RH.renderingManager.maintainStateBetweenFrames && RH.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some(HH => HH !== this && HH.actionManager === this.actionManager) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), IH = 0; IH < this._intersectionsInProgress.length; IH++) {
              const HH = this._intersectionsInProgress[IH],
                EH = HH._intersectionsInProgress.indexOf(this);
              HH._intersectionsInProgress.splice(EH, 1);
            }
            this._intersectionsInProgress.length = 0;
            const hH = RH.lights;
            for (const sH of hH) {
              let HH = sH.includedOnlyMeshes.indexOf(this);
              -1 !== HH && sH.includedOnlyMeshes.splice(HH, 1), HH = sH.excludedMeshes.indexOf(this), -1 !== HH && sH.excludedMeshes.splice(HH, 1);
              const IH = sH.getShadowGenerators();
              if (IH) {
                const EH = IH.values();
                for (let IH = EH.next(); !0 !== IH.done; IH = EH.next()) {
                  const EH = IH.value.getShadowMap();
                  EH && EH.renderList && (HH = EH.renderList.indexOf(this), -1 !== HH && EH.renderList.splice(HH, 1));
                }
              }
            }
            "InstancedMesh" === this.getClassName() && "InstancedLinesMesh" === this.getClassName() || this.releaseSubMeshes(!0);
            const TH = RH.getEngine();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, TH.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), TH.wipeCaches(), RH.yO(this), this._parentContainer) {
              const HH = this._parentContainer.meshes.indexOf(this);
              HH > -1 && this._parentContainer.meshes.splice(HH, 1), this._parentContainer = null;
            }
            if (EH && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !HH) for (IH = 0; IH < RH.fF.length; IH++) RH.fF[IH].dI === this && (RH.fF[IH].dispose(), IH--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(HH, EH);
          }
          _initFacetData() {
            const HH = this._internalAbstractMeshDataInfo._facetData;
            HH.facetNormals || (HH.facetNormals = []), HH.facetPositions || (HH.facetPositions = []), HH.facetPartitioning || (HH.facetPartitioning = new Array()), HH.facetNb = this.uO().length / 3 | 0, HH.partitioningSubdivisions = HH.partitioningSubdivisions ? HH.partitioningSubdivisions : 10, HH.partitioningBBoxRatio = HH.partitioningBBoxRatio ? HH.partitioningBBoxRatio : 1.01;
            for (let IH = 0; IH < HH.facetNb; IH++) HH.facetNormals[IH] = TH.x.Zero(), HH.facetPositions[IH] = TH.x.Zero();
            return HH.facetDataEnabled = !0, this;
          }
          updateFacetData() {
            var HH;
            const IH = this._internalAbstractMeshDataInfo._facetData;
            IH.facetDataEnabled || this._initFacetData();
            const EH = this.getVerticesData(sH.t.PositionKind),
              RH = this.uO(),
              hH = null === (HH = this.getVerticesData(sH.t.NormalKind)) || void 0 === HH ? void 0 : HH.slice(),
              GH = this.getBoundingInfo();
            if (IH.facetDepthSort && !IH.facetDepthSortEnabled) {
              if (IH.facetDepthSortEnabled = !0, RH instanceof Uint16Array) IH.depthSortedIndices = new Uint16Array(RH);else if (RH instanceof Uint32Array) IH.depthSortedIndices = new Uint32Array(RH);else {
                let HH = !1;
                for (let IH = 0; IH < RH.length; IH++) if (RH[IH] > 65535) {
                  HH = !0;
                  break;
                }
                IH.depthSortedIndices = HH ? new Uint32Array(RH) : new Uint16Array(RH);
              }
              if (IH.facetDepthSortFunction = function (HH, IH) {
                return IH.sqDistance - HH.sqDistance;
              }, !IH.facetDepthSortFrom) {
                const HH = this.kh().activeCamera;
                IH.facetDepthSortFrom = HH ? HH.position : TH.x.Zero();
              }
              IH.depthSortedFacets = [];
              for (let HH = 0; HH < IH.facetNb; HH++) {
                const EH = {
                  ind: 3 * HH,
                  sqDistance: 0
                };
                IH.depthSortedFacets.push(EH);
              }
              IH.invertedMatrix = TH.d.Identity(), IH.facetDepthSortOrigin = TH.x.Zero();
            }
            IH.bbSize.x = GH.maximum.x - GH.minimum.x > mI.b ? GH.maximum.x - GH.minimum.x : mI.b, IH.bbSize.y = GH.maximum.y - GH.minimum.y > mI.b ? GH.maximum.y - GH.minimum.y : mI.b, IH.bbSize.z = GH.maximum.z - GH.minimum.z > mI.b ? GH.maximum.z - GH.minimum.z : mI.b;
            let AH = IH.bbSize.x > IH.bbSize.y ? IH.bbSize.x : IH.bbSize.y;
            if (AH = AH > IH.bbSize.z ? AH : IH.bbSize.z, IH.subDiv.max = IH.partitioningSubdivisions, IH.subDiv.X = Math.floor(IH.subDiv.max * IH.bbSize.x / AH), IH.subDiv.Y = Math.floor(IH.subDiv.max * IH.bbSize.y / AH), IH.subDiv.Z = Math.floor(IH.subDiv.max * IH.bbSize.z / AH), IH.subDiv.X = IH.subDiv.X < 1 ? 1 : IH.subDiv.X, IH.subDiv.Y = IH.subDiv.Y < 1 ? 1 : IH.subDiv.Y, IH.subDiv.Z = IH.subDiv.Z < 1 ? 1 : IH.subDiv.Z, IH.facetParameters.facetNormals = this.getFacetLocalNormals(), IH.facetParameters.facetPositions = this.getFacetLocalPositions(), IH.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), IH.facetParameters.bInfo = GH, IH.facetParameters.bbSize = IH.bbSize, IH.facetParameters.subDiv = IH.subDiv, IH.facetParameters.ratio = this.partitioningBBoxRatio, IH.facetParameters.depthSort = IH.facetDepthSort, IH.facetDepthSort && IH.facetDepthSortEnabled && (this.aJ(!0), this._worldMatrix.invertToRef(IH.invertedMatrix), TH.x.TransformCoordinatesToRef(IH.facetDepthSortFrom, IH.invertedMatrix, IH.facetDepthSortOrigin), IH.facetParameters.distanceTo = IH.facetDepthSortOrigin), IH.facetParameters.depthSortedFacets = IH.depthSortedFacets, hH && eH.c.ComputeNormals(EH, RH, hH, IH.facetParameters), IH.facetDepthSort && IH.facetDepthSortEnabled) {
              IH.depthSortedFacets.sort(IH.facetDepthSortFunction);
              const HH = IH.depthSortedIndices.length / 3 | 0;
              for (let EH = 0; EH < HH; EH++) {
                const HH = IH.depthSortedFacets[EH].ind;
                IH.depthSortedIndices[3 * EH] = RH[HH], IH.depthSortedIndices[3 * EH + 1] = RH[HH + 1], IH.depthSortedIndices[3 * EH + 2] = RH[HH + 2];
              }
              this.updateIndices(IH.depthSortedIndices, void 0, !0);
            }
            return this;
          }
          getFacetLocalNormals() {
            const HH = this._internalAbstractMeshDataInfo._facetData;
            return HH.facetNormals || this.updateFacetData(), HH.facetNormals;
          }
          getFacetLocalPositions() {
            const HH = this._internalAbstractMeshDataInfo._facetData;
            return HH.facetPositions || this.updateFacetData(), HH.facetPositions;
          }
          getFacetLocalPartitioning() {
            const HH = this._internalAbstractMeshDataInfo._facetData;
            return HH.facetPartitioning || this.updateFacetData(), HH.facetPartitioning;
          }
          getFacetPosition(HH) {
            const IH = TH.x.Zero();
            return this.getFacetPositionToRef(HH, IH), IH;
          }
          getFacetPositionToRef(HH, IH) {
            const EH = this.getFacetLocalPositions()[HH],
              RH = this.getWorldMatrix();
            return TH.x.TransformCoordinatesToRef(EH, RH, IH), this;
          }
          getFacetNormal(HH) {
            const IH = TH.x.Zero();
            return this.getFacetNormalToRef(HH, IH), IH;
          }
          getFacetNormalToRef(HH, IH) {
            const EH = this.getFacetLocalNormals()[HH];
            return TH.x.TransformNormalToRef(EH, this.getWorldMatrix(), IH), this;
          }
          getFacetsAtLocalCoordinates(HH, IH, EH) {
            const RH = this.getBoundingInfo(),
              hH = this._internalAbstractMeshDataInfo._facetData,
              TH = Math.floor((HH - RH.minimum.x * hH.partitioningBBoxRatio) * hH.subDiv.X * hH.partitioningBBoxRatio / hH.bbSize.x),
              sH = Math.floor((IH - RH.minimum.y * hH.partitioningBBoxRatio) * hH.subDiv.Y * hH.partitioningBBoxRatio / hH.bbSize.y),
              eH = Math.floor((EH - RH.minimum.z * hH.partitioningBBoxRatio) * hH.subDiv.Z * hH.partitioningBBoxRatio / hH.bbSize.z);
            return TH < 0 || TH > hH.subDiv.max || sH < 0 || sH > hH.subDiv.max || eH < 0 || eH > hH.subDiv.max ? null : hH.facetPartitioning[TH + hH.subDiv.max * sH + hH.subDiv.max * hH.subDiv.max * eH];
          }
          getClosestFacetAtCoordinates(HH, IH, EH, RH) {
            let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              sH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const eH = this.getWorldMatrix(),
              GH = TH.p.Matrix[5];
            eH.invertToRef(GH);
            const AH = TH.p.Rh[8];
            TH.x.TransformCoordinatesFromFloatsToRef(HH, IH, EH, GH, AH);
            const VH = this.getClosestFacetAtLocalCoordinates(AH.x, AH.y, AH.z, RH, hH, sH);
            return RH && TH.x.TransformCoordinatesFromFloatsToRef(RH.x, RH.y, RH.z, eH, RH), VH;
          }
          getClosestFacetAtLocalCoordinates(HH, IH, EH, RH) {
            let hH,
              TH,
              sH,
              eH,
              GH,
              AH,
              VH,
              YH,
              QH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              JH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              OH = null;
            const rH = this.getFacetLocalPositions(),
              FH = this.getFacetLocalNormals(),
              MH = this.getFacetsAtLocalCoordinates(HH, IH, EH);
            if (!MH) return null;
            let NH,
              iI,
              DH,
              PH,
              XH = Number.MAX_VALUE;
            for (let mI = 0; mI < MH.length; mI++) iI = MH[mI], DH = FH[iI], PH = rH[iI], eH = (HH - PH.x) * DH.x + (IH - PH.y) * DH.y + (EH - PH.z) * DH.z, (!QH || QH && JH && eH >= 0 || QH && !JH && eH <= 0) && (eH = DH.x * PH.x + DH.y * PH.y + DH.z * PH.z, GH = -(DH.x * HH + DH.y * IH + DH.z * EH - eH) / (DH.x * DH.x + DH.y * DH.y + DH.z * DH.z), AH = HH + DH.x * GH, VH = IH + DH.y * GH, YH = EH + DH.z * GH, hH = AH - HH, TH = VH - IH, sH = YH - EH, NH = hH * hH + TH * TH + sH * sH, NH < XH && (XH = NH, OH = iI, RH && (RH.x = AH, RH.y = VH, RH.z = YH)));
            return OH;
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters;
          }
          disableFacetData() {
            const HH = this._internalAbstractMeshDataInfo._facetData;
            return HH.facetDataEnabled && (HH.facetDataEnabled = !1, HH.facetPositions = [], HH.facetNormals = [], HH.facetPartitioning = new Array(), HH.facetParameters = {}, HH.depthSortedIndices = new Uint32Array(0)), this;
          }
          updateIndices(HH, IH) {
            return this;
          }
          createNormals(HH) {
            const IH = this.getVerticesData(sH.t.PositionKind),
              EH = this.uO();
            let RH;
            return RH = this.isVerticesDataPresent(sH.t.NormalKind) ? this.getVerticesData(sH.t.NormalKind) : [], eH.c.ComputeNormals(IH, EH, RH, {
              useRightHandedSystem: this.kh().useRightHandedSystem
            }), this.setVerticesData(sH.t.NormalKind, RH, HH), this;
          }
          async optimizeIndicesAsync() {
            const HH = this.uO();
            if (!HH) return this;
            const {
              OptimizeIndices: IH
            } = await EH.e(78).then(EH.bind(EH, 24148));
            return IH(HH), this.setIndices(HH, this.getTotalVertices()), this;
          }
          alignWithNormal(HH, IH) {
            IH || (IH = ZH.e.Y);
            const EH = TH.p.Rh[0],
              RH = TH.p.Rh[1];
            return TH.x.CrossToRef(IH, HH, RH), TH.x.CrossToRef(HH, RH, EH), this.rotationQuaternion ? TH.h.RotationQuaternionFromAxisToRef(EH, HH, RH, this.rotationQuaternion) : TH.x.RotationFromAxisToRef(EH, HH, RH, this.rotation), this;
          }
          _checkOcclusionQuery() {
            return !1;
          }
          disableEdgesRendering() {
            throw (0, iI.n)("EdgesRenderer");
          }
          enableEdgesRendering(HH, IH, EH) {
            throw (0, iI.n)("EdgesRenderer");
          }
          FM() {
            return this._scene.fF.filter(HH => HH.dI === this);
          }
        }, (EH => {
          const hH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (EH = QH[Symbol.metadata]) && void 0 !== EH ? EH : null) : void 0;
          IH = [LH.g.filter(function () {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6]);
          })], (0, RH.i)(HH, null, IH, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: HH => "_ApplySkeleton" in HH,
              get: HH => HH._ApplySkeleton
            },
            metadata: hH
          }, null, JH), hH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hH
          });
        })(), HH.OCCLUSION_TYPE_NONE = ((0, RH.j)(HH, JH), 0), HH.OCCLUSION_TYPE_OPTIMISTIC = 1, HH.OCCLUSION_TYPE_STRICT = 2, HH.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, HH.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, HH.CULLINGSTRATEGY_STANDARD = 0, HH.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, HH.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, HH.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, HH.DefaultIsPickable = !0, HH;
      })(),
      BH = !1;
    function fH() {
      BH || (BH = !0, (0, yH.d)("BABYLON.AbstractMesh", WH));
    }
    null !== (JH = (FH = WH.prototype).createOrUpdateSubmeshesOctree) && void 0 !== JH || (FH.createOrUpdateSubmeshesOctree = (0, iI.j)("AbstractMesh", "createOrUpdateSubmeshesOctree")), null !== (OH = (MH = WH.prototype).getPhysicsImpostor) && void 0 !== OH || (MH.getPhysicsImpostor = (0, iI.j)("AbstractMesh", "getPhysicsImpostor")), null !== (rH = (NH = WH.prototype).setPhysicsLinkWith) && void 0 !== rH || (NH.setPhysicsLinkWith = (0, iI.j)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(WH.prototype, "occlusionRetryCount") || Object.defineProperty(WH.prototype, "occlusionRetryCount", (0, iI.f)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(WH.prototype, "occlusionType") || Object.defineProperty(WH.prototype, "occlusionType", (0, iI.f)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(WH.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(WH.prototype, "occlusionQueryAlgorithmType", (0, iI.f)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(WH.prototype, "isOccluded") || Object.defineProperty(WH.prototype, "isOccluded", (0, iI.f)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(WH.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(WH.prototype, "isOcclusionQueryInProgress", (0, iI.f)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(WH.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(WH.prototype, "forceRenderingWhenOccluded", (0, iI.f)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(WH.prototype, "occlusionForRenderPassId") || Object.defineProperty(WH.prototype, "occlusionForRenderPassId", (0, iI.f)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(WH.prototype, "decalMap") || Object.defineProperty(WH.prototype, "decalMap", (0, iI.f)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(WH.prototype, "BY") || Object.defineProperty(WH.prototype, "BY", (0, iI.f)("AbstractMesh", "BY")), Object.getOwnPropertyDescriptor(WH.prototype, "physicsImpostor") || Object.defineProperty(WH.prototype, "physicsImpostor", (0, iI.f)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(WH.prototype, "showBoundingBox") || Object.defineProperty(WH.prototype, "showBoundingBox", (0, iI.f)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(WH.prototype, "edgesRenderer") || Object.defineProperty(WH.prototype, "edgesRenderer", (0, iI.f)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(WH.prototype, "renderOutline") || Object.defineProperty(WH.prototype, "renderOutline", (0, iI.f)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(WH.prototype, "renderOverlay") || Object.defineProperty(WH.prototype, "renderOverlay", (0, iI.f)("AbstractMesh", "renderOverlay"));
  },
  22170: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => MH
    });
    var RH = EH(21764),
      hH = EH(21817),
      TH = EH(22173),
      sH = EH(22128),
      eH = EH(22187),
      GH = EH(22221),
      AH = EH(22195),
      VH = EH(21819),
      YH = EH(21832),
      QH = EH(21974),
      JH = EH(22208),
      OH = EH(21782),
      rH = EH(22103),
      FH = EH(21903);
    class MH {
      get boundingBias() {
        return this._boundingBias;
      }
      set boundingBias(HH) {
        this._boundingBias ? this._boundingBias.RH(HH) : this._boundingBias = HH.clone(), this._updateBoundingInfo(!0, null);
      }
      static CreateGeometryForMesh(HH) {
        const IH = new MH(MH.RandomId(), HH.kh());
        return IH.applyToMesh(HH), IH;
      }
      get meshes() {
        return this._meshes;
      }
      constructor(HH, IH, EH) {
        let hH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          TH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          sH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new RH.x(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new RH.x(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = IH || OH.e.LastCreatedScene, this._scene && (this.id = HH, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.getEngine(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = hH, null !== sH && (this._totalVertices = sH), EH ? this.setAllVerticesData(EH, hH) : null === sH && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), TH && (this.applyToMesh(TH), TH.aJ(!0)));
      }
      get extend() {
        return this._extend;
      }
      kh() {
        return this._scene;
      }
      getEngine() {
        return this._engine;
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState;
      }
      get doNotSerialize() {
        for (let HH = 0; HH < this._meshes.length; HH++) if (!this._meshes[HH].doNotSerialize) return !1;
        return !0;
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const HH = new Set();
        for (const IH in this._vertexBuffers) HH.add(this._vertexBuffers[IH].getWrapperBuffer());
        HH.forEach(HH => {
          HH._rebuild();
        });
      }
      setAllVerticesData(HH, IH) {
        HH.applyToGeometry(this, IH), this._notifyUpdate();
      }
      setVerticesData(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          RH = arguments.length > 3 ? arguments[3] : void 0;
        EH && Array.isArray(IH) && (IH = new Float32Array(IH));
        const hH = new sH.t(this._engine, IH, HH, {
          updatable: EH,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: RH,
          label: "Geometry_" + this.id + "_" + HH
        });
        this.setVerticesBuffer(hH);
      }
      removeVerticesData(HH) {
        this._vertexBuffers[HH] && (this._vertexBuffers[HH].dispose(), delete this._vertexBuffers[HH]), this._vertexArrayObjects && this._disposeVertexArrayObjects();
      }
      setVerticesBuffer(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const hH = HH.getKind();
        this._vertexBuffers[hH] && EH && this._vertexBuffers[hH].dispose(), HH._buffer && HH._ownsBuffer && HH._buffer._increaseReferences(), this._vertexBuffers[hH] = HH;
        const TH = this._meshes,
          eH = TH.length;
        if (hH === sH.t.PositionKind) {
          this._totalVertices = null !== IH && void 0 !== IH ? IH : HH._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : HH.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const EH = this._extend && this._extend.minimum || new RH.x(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            hH = this._extend && this._extend.maximum || new RH.x(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let HH = 0; HH < eH; HH++) {
            const IH = TH[HH];
            IH.buildBoundingInfo(EH, hH), IH._createGlobalSubMesh(IH.isUnIndexed), IH.aJ(!0), IH.synchronizeInstances();
          }
        }
        this._notifyUpdate(hH);
      }
      updateVerticesDataDirectly(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const hH = this.getVertexBuffer(HH);
        hH && (hH.updateDirectly(IH, EH, RH), this._notifyUpdate(HH));
      }
      updateVerticesData(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const RH = this.getVertexBuffer(HH);
        RH && (RH.update(IH), HH === sH.t.PositionKind && this._updateBoundingInfo(EH, IH), this._notifyUpdate(HH));
      }
      _updateBoundingInfo(HH, IH) {
        if (HH && this._updateExtend(IH), this._resetPointsArrayCache(), HH) {
          const HH = this._meshes;
          for (const IH of HH) {
            IH.hasBoundingInfo ? IH.getBoundingInfo().reConstruct(this._extend.minimum, this._extend.maximum) : IH.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const HH = IH.BJ;
            for (const IH of HH) IH.refreshBoundingInfo();
          }
        }
      }
      _bind(HH, IH, EH, RH) {
        if (!HH) return;
        void 0 === IH && (IH = this._indexBuffer);
        const hH = this.getVertexBuffers();
        if (!hH) return;
        if (IH != this._indexBuffer || !this._vertexArrayObjects && !RH) return void this._engine.bindBuffers(hH, IH, HH, EH);
        const TH = RH || this._vertexArrayObjects,
          sH = this._engine;
        TH[HH.key] || (TH[HH.key] = sH.recordVertexArrayObject(hH, IH, HH, EH)), sH.bindVertexArrayObject(TH[HH.key], IH);
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0;
      }
      getVerticesData(HH, IH, EH) {
        const RH = this.getVertexBuffer(HH);
        return RH ? RH.getFloatData(this._totalVertices, EH || IH && 1 !== this._meshes.length) : null;
      }
      copyVerticesData(HH, IH) {
        const EH = this.getVertexBuffer(HH);
        if (!EH) return;
        IH[HH] || (IH[HH] = new Float32Array(this._totalVertices * EH.getSize()));
        const RH = EH.getData();
        RH && (0, FH.f)(RH, EH.getSize(), EH.type, EH.byteOffset, EH.byteStride, EH.normalized, this._totalVertices, IH[HH]);
      }
      isVertexBufferUpdatable(HH) {
        const IH = this._vertexBuffers[HH];
        return !!IH && IH.isUpdatable();
      }
      getVertexBuffer(HH) {
        return this.isReady() ? this._vertexBuffers[HH] : null;
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null;
      }
      isVerticesDataPresent(HH) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[HH] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(HH);
      }
      getVerticesDataKinds() {
        const HH = [];
        let IH;
        if (!this._vertexBuffers && this._delayInfo) for (IH in this._delayInfo) HH.push(IH);else for (IH in this._vertexBuffers) HH.push(IH);
        return HH;
      }
      updateIndices(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer) if (this._indexBufferIsUpdatable) {
          const RH = HH.length !== this._indices.length;
          if (EH || (this._indices = HH.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, HH, IH), RH) for (const HH of this._meshes) HH._createGlobalSubMesh(!0);
        } else this.setIndices(HH, null, !0);
      }
      setIndexBuffer(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = HH, this._totalVertices = IH, this._totalIndices = EH, HH.is32Bits = null === RH ? IH > 65535 : RH;
        for (const hH of this._meshes) hH._createGlobalSubMesh(!0), hH.synchronizeInstances();
        this._notifyUpdate();
      }
      setIndices(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = HH, this._indexBufferIsUpdatable = EH, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, EH, "Geometry_" + this.id + "_IndexBuffer")), void 0 != IH && (this._totalVertices = IH);
        for (const hH of this._meshes) hH._createGlobalSubMesh(!RH), hH.synchronizeInstances();
        this._notifyUpdate();
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0;
      }
      uO(HH, IH) {
        if (!this.isReady()) return null;
        const EH = this._indices;
        return IH || HH && 1 !== this._meshes.length ? EH.slice() : EH;
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null;
      }
      _releaseVertexArrayObject() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        HH && this._vertexArrayObjects && this._vertexArrayObjects[HH.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[HH.key]), delete this._vertexArrayObjects[HH.key]);
      }
      releaseForMesh(HH, IH) {
        const EH = this._meshes,
          RH = EH.indexOf(HH);
        -1 !== RH && (EH.splice(RH, 1), this._vertexArrayObjects && HH._invalidateInstanceVertexArrayObject(), HH._geometry = null, 0 === EH.length && IH && this.dispose());
      }
      applyToMesh(HH) {
        if (HH._geometry === this) return;
        const IH = HH._geometry;
        IH && IH.releaseForMesh(HH), this._vertexArrayObjects && HH._invalidateInstanceVertexArrayObject();
        const EH = this._meshes;
        HH._geometry = this, HH._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), EH.push(HH), this.isReady() ? this._applyToMesh(HH) : this._boundingInfo && HH.setBoundingInfo(this._boundingInfo);
      }
      _updateExtend() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };else {
          if (!HH && (HH = this.getVerticesData(sH.t.PositionKind), !HH)) return;
          this._extend = (0, JH.h)(HH, 0, this._totalVertices, this.boundingBias, 3);
        }
      }
      _applyToMesh(HH) {
        for (const IH in this._vertexBuffers) {
          const EH = this._vertexBuffers[IH];
          EH._buffer.getBuffer() || EH.create(), IH === sH.t.PositionKind && (this._extend || this._updateExtend(), HH.buildBoundingInfo(this._extend.minimum, this._extend.maximum), HH._createGlobalSubMesh(HH.isUnIndexed), HH._updateBoundingInfo());
        }
        !this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), HH._syncGeometryWithMorphTargetManager(), HH.synchronizeInstances();
      }
      _notifyUpdate(HH) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, HH), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const IH of this._meshes) IH._markSubMeshesAsAttributesDirty();
      }
      load(HH, IH) {
        2 !== this.delayLoadState && (this.isReady() ? IH && IH() : (this.delayLoadState = 2, this._queueLoad(HH, IH)));
      }
      _queueLoad(HH, IH) {
        this.delayLoadingFile && (HH.addPendingData(this), (async () => {
          try {
            const EH = await HH._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void HH.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(EH), this), this.delayLoadState = 1, this._delayInfo = [], HH.removePendingData(this);
            const RH = this._meshes,
              hH = RH.length;
            for (let HH = 0; HH < hH; HH++) this._applyToMesh(RH[HH]);
            IH && IH();
          } catch (EH) {
            HH.removePendingData(this), HH.sH || YH.e.Error('Unable to delay load geometry "'.concat(this.id, '" from "').concat(this.delayLoadingFile, '": ').concat(EH));
          }
        })());
      }
      toLeftHanded() {
        const HH = this.uO(!1);
        if (null != HH && HH.length > 0) {
          for (let IH = 0; IH < HH.length; IH += 3) {
            const EH = HH[IH + 0];
            HH[IH + 0] = HH[IH + 2], HH[IH + 2] = EH;
          }
          this.setIndices(HH);
        }
        const IH = this.getVerticesData(sH.t.PositionKind, !1);
        if (null != IH && IH.length > 0) {
          for (let HH = 0; HH < IH.length; HH += 3) IH[HH + 2] = -IH[HH + 2];
          this.setVerticesData(sH.t.PositionKind, IH, !1);
        }
        const EH = this.getVerticesData(sH.t.NormalKind, !1);
        if (null != EH && EH.length > 0) {
          for (let HH = 0; HH < EH.length; HH += 3) EH[HH + 2] = -EH[HH + 2];
          this.setVerticesData(sH.t.NormalKind, EH, !1);
        }
      }
      _resetPointsArrayCache() {
        this._positions = null;
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const HH = this.getVerticesData(sH.t.PositionKind);
        if (!HH || 0 === HH.length) return !1;
        for (let IH = 3 * this._positionsCache.length, EH = this._positionsCache.length; IH < HH.length; IH += 3, ++EH) this._positionsCache[EH] = RH.x.Qh(HH, IH);
        for (let IH = 0, EH = 0; IH < HH.length; IH += 3, ++EH) this._positionsCache[EH].set(HH[0 + IH], HH[1 + IH], HH[2 + IH]);
        return this._positionsCache.length = HH.length / 3, this._positions = this._positionsCache, !0;
      }
      sH() {
        return this._isDisposed;
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const EH in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[EH]);
          this._vertexArrayObjects = {};
          const HH = this._meshes,
            IH = HH.length;
          for (let EH = 0; EH < IH; EH++) HH[EH]._invalidateInstanceVertexArrayObject();
        }
      }
      dispose() {
        const HH = this._meshes,
          IH = HH.length;
        let EH;
        for (EH = 0; EH < IH; EH++) this.releaseForMesh(HH[EH]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const RH in this._vertexBuffers) this._vertexBuffers[RH].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const HH = this._parentContainer.geometries.indexOf(this);
          HH > -1 && this._parentContainer.geometries.splice(HH, 1), this._parentContainer = null;
        }
        this._isDisposed = !0;
      }
      copy(HH) {
        const IH = new MH(HH, this._scene),
          EH = this.uO(void 0, !0);
        EH && IH.setIndices(EH);
        let RH,
          hH = !1;
        for (RH in this._vertexBuffers) {
          const HH = this.getVertexBuffer(RH),
            EH = HH.getData();
          if (!EH) continue;
          const TH = HH.isUpdatable(),
            eH = HH.getSize(),
            {
              type: GH,
              byteOffset: AH,
              byteStride: VH,
              normalized: YH
            } = HH;
          hH = hH || TH;
          let QH = this._totalVertices;
          if (HH.getIsInstanced()) {
            let HH;
            HH = EH instanceof Array ? 4 * EH.length : EH.byteLength, QH = HH / VH;
          }
          const JH = (0, FH.u)(EH, eH, GH, AH, VH, QH, !0),
            OH = new sH.t(this._engine, JH, RH, {
              updatable: TH,
              useBytes: !1,
              stride: eH,
              size: eH,
              offset: 0,
              type: GH,
              normalized: YH,
              takeBufferOwnership: !0,
              instanced: HH.getIsInstanced()
            });
          IH.setVerticesBuffer(OH, QH);
        }
        for (RH in IH._updatable = hH, IH.delayLoadState = this.delayLoadState, IH.delayLoadingFile = this.delayLoadingFile, IH._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) IH._delayInfo = IH._delayInfo || [], IH._delayInfo.push(RH);
        return IH._boundingInfo = new AH.e(this._extend.minimum, this._extend.maximum), IH;
      }
      serialize() {
        const HH = {};
        return HH.id = this.id, HH.uniqueId = this.uniqueId, HH.updatable = this._updatable, QH.c && QH.c.HasTags(this) && (HH.tags = QH.c.GetTags(this)), HH;
      }
      _toNumberArray(HH) {
        return Array.isArray(HH) ? HH : Array.prototype.slice.call(HH);
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const HH in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, HH) && (this._vertexBuffers[HH]._buffer._data = null);
      }
      serializeVerticeData() {
        const HH = this.serialize();
        return this.isVerticesDataPresent(sH.t.PositionKind) && (HH.positions = this._toNumberArray(this.getVerticesData(sH.t.PositionKind)), this.isVertexBufferUpdatable(sH.t.PositionKind) && (HH.positionsUpdatable = !0)), this.isVerticesDataPresent(sH.t.NormalKind) && (HH.normals = this._toNumberArray(this.getVerticesData(sH.t.NormalKind)), this.isVertexBufferUpdatable(sH.t.NormalKind) && (HH.normalsUpdatable = !0)), this.isVerticesDataPresent(sH.t.TangentKind) && (HH.tangents = this._toNumberArray(this.getVerticesData(sH.t.TangentKind)), this.isVertexBufferUpdatable(sH.t.TangentKind) && (HH.tangentsUpdatable = !0)), this.isVerticesDataPresent(sH.t.UVKind) && (HH.uvs = this._toNumberArray(this.getVerticesData(sH.t.UVKind)), this.isVertexBufferUpdatable(sH.t.UVKind) && (HH.uvsUpdatable = !0)), this.isVerticesDataPresent(sH.t.UV2Kind) && (HH.uvs2 = this._toNumberArray(this.getVerticesData(sH.t.UV2Kind)), this.isVertexBufferUpdatable(sH.t.UV2Kind) && (HH.uvs2Updatable = !0)), this.isVerticesDataPresent(sH.t.UV3Kind) && (HH.uvs3 = this._toNumberArray(this.getVerticesData(sH.t.UV3Kind)), this.isVertexBufferUpdatable(sH.t.UV3Kind) && (HH.uvs3Updatable = !0)), this.isVerticesDataPresent(sH.t.UV4Kind) && (HH.uvs4 = this._toNumberArray(this.getVerticesData(sH.t.UV4Kind)), this.isVertexBufferUpdatable(sH.t.UV4Kind) && (HH.uvs4Updatable = !0)), this.isVerticesDataPresent(sH.t.UV5Kind) && (HH.uvs5 = this._toNumberArray(this.getVerticesData(sH.t.UV5Kind)), this.isVertexBufferUpdatable(sH.t.UV5Kind) && (HH.uvs5Updatable = !0)), this.isVerticesDataPresent(sH.t.UV6Kind) && (HH.uvs6 = this._toNumberArray(this.getVerticesData(sH.t.UV6Kind)), this.isVertexBufferUpdatable(sH.t.UV6Kind) && (HH.uvs6Updatable = !0)), this.isVerticesDataPresent(sH.t.ColorKind) && (HH.colors = this._toNumberArray(this.getVerticesData(sH.t.ColorKind)), this.isVertexBufferUpdatable(sH.t.ColorKind) && (HH.colorsUpdatable = !0)), this.isVerticesDataPresent(sH.t.MatricesIndicesKind) && (HH.matricesIndices = this._toNumberArray(this.getVerticesData(sH.t.MatricesIndicesKind)), HH.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(sH.t.MatricesIndicesKind) && (HH.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(sH.t.MatricesWeightsKind) && (HH.matricesWeights = this._toNumberArray(this.getVerticesData(sH.t.MatricesWeightsKind)), this.isVertexBufferUpdatable(sH.t.MatricesWeightsKind) && (HH.matricesWeightsUpdatable = !0)), HH.indices = this._toNumberArray(this.uO()), HH;
      }
      static ExtractFromMesh(HH, IH) {
        const EH = HH._geometry;
        return EH ? EH.copy(IH) : null;
      }
      static RandomId() {
        return VH.i.RandomId();
      }
      static _GetGeometryByLoadedUniqueId(HH, IH) {
        for (let EH = 0; EH < IH.geometries.length; EH++) if (IH.geometries[EH]._loadedUniqueId === HH) return IH.geometries[EH];
        return null;
      }
      static _ImportGeometry(HH, IH) {
        const EH = IH.kh(),
          RH = HH.geometryUniqueId,
          TH = HH.geometryId;
        if (RH || TH) {
          const HH = RH ? this._GetGeometryByLoadedUniqueId(RH, EH) : EH.getGeometryById(TH);
          HH && HH.applyToMesh(IH);
        } else if (HH instanceof ArrayBuffer) {
          const EH = IH._binaryInfo;
          if (EH.positionsAttrDesc && EH.positionsAttrDesc.count > 0) {
            const RH = new Float32Array(HH, EH.positionsAttrDesc.offset, EH.positionsAttrDesc.count);
            IH.setVerticesData(sH.t.PositionKind, RH, !1);
          }
          if (EH.normalsAttrDesc && EH.normalsAttrDesc.count > 0) {
            const RH = new Float32Array(HH, EH.normalsAttrDesc.offset, EH.normalsAttrDesc.count);
            IH.setVerticesData(sH.t.NormalKind, RH, !1);
          }
          if (EH.tangetsAttrDesc && EH.tangetsAttrDesc.count > 0) {
            const RH = new Float32Array(HH, EH.tangetsAttrDesc.offset, EH.tangetsAttrDesc.count);
            IH.setVerticesData(sH.t.TangentKind, RH, !1);
          }
          if (EH.uvsAttrDesc && EH.uvsAttrDesc.count > 0) {
            const RH = new Float32Array(HH, EH.uvsAttrDesc.offset, EH.uvsAttrDesc.count);
            if (rH.c) for (let HH = 1; HH < RH.length; HH += 2) RH[HH] = 1 - RH[HH];
            IH.setVerticesData(sH.t.UVKind, RH, !1);
          }
          if (EH.uvs2AttrDesc && EH.uvs2AttrDesc.count > 0) {
            const RH = new Float32Array(HH, EH.uvs2AttrDesc.offset, EH.uvs2AttrDesc.count);
            if (rH.c) for (let HH = 1; HH < RH.length; HH += 2) RH[HH] = 1 - RH[HH];
            IH.setVerticesData(sH.t.UV2Kind, RH, !1);
          }
          if (EH.uvs3AttrDesc && EH.uvs3AttrDesc.count > 0) {
            const RH = new Float32Array(HH, EH.uvs3AttrDesc.offset, EH.uvs3AttrDesc.count);
            if (rH.c) for (let HH = 1; HH < RH.length; HH += 2) RH[HH] = 1 - RH[HH];
            IH.setVerticesData(sH.t.UV3Kind, RH, !1);
          }
          if (EH.uvs4AttrDesc && EH.uvs4AttrDesc.count > 0) {
            const RH = new Float32Array(HH, EH.uvs4AttrDesc.offset, EH.uvs4AttrDesc.count);
            if (rH.c) for (let HH = 1; HH < RH.length; HH += 2) RH[HH] = 1 - RH[HH];
            IH.setVerticesData(sH.t.UV4Kind, RH, !1);
          }
          if (EH.uvs5AttrDesc && EH.uvs5AttrDesc.count > 0) {
            const RH = new Float32Array(HH, EH.uvs5AttrDesc.offset, EH.uvs5AttrDesc.count);
            if (rH.c) for (let HH = 1; HH < RH.length; HH += 2) RH[HH] = 1 - RH[HH];
            IH.setVerticesData(sH.t.UV5Kind, RH, !1);
          }
          if (EH.uvs6AttrDesc && EH.uvs6AttrDesc.count > 0) {
            const RH = new Float32Array(HH, EH.uvs6AttrDesc.offset, EH.uvs6AttrDesc.count);
            if (rH.c) for (let HH = 1; HH < RH.length; HH += 2) RH[HH] = 1 - RH[HH];
            IH.setVerticesData(sH.t.UV6Kind, RH, !1);
          }
          if (EH.colorsAttrDesc && EH.colorsAttrDesc.count > 0) {
            const RH = new Float32Array(HH, EH.colorsAttrDesc.offset, EH.colorsAttrDesc.count);
            IH.setVerticesData(sH.t.ColorKind, RH, !1, EH.colorsAttrDesc.stride);
          }
          if (EH.matricesIndicesAttrDesc && EH.matricesIndicesAttrDesc.count > 0) {
            const RH = new Int32Array(HH, EH.matricesIndicesAttrDesc.offset, EH.matricesIndicesAttrDesc.count),
              hH = [];
            for (let HH = 0; HH < RH.length; HH++) {
              const IH = RH[HH];
              hH.push(255 & IH), hH.push((65280 & IH) >> 8), hH.push((16711680 & IH) >> 16), hH.push(IH >> 24 & 255);
            }
            IH.setVerticesData(sH.t.MatricesIndicesKind, hH, !1);
          }
          if (EH.matricesIndicesExtraAttrDesc && EH.matricesIndicesExtraAttrDesc.count > 0) {
            const RH = new Int32Array(HH, EH.matricesIndicesExtraAttrDesc.offset, EH.matricesIndicesExtraAttrDesc.count),
              hH = [];
            for (let HH = 0; HH < RH.length; HH++) {
              const IH = RH[HH];
              hH.push(255 & IH), hH.push((65280 & IH) >> 8), hH.push((16711680 & IH) >> 16), hH.push(IH >> 24 & 255);
            }
            IH.setVerticesData(sH.t.MatricesIndicesExtraKind, hH, !1);
          }
          if (EH.matricesWeightsAttrDesc && EH.matricesWeightsAttrDesc.count > 0) {
            const RH = new Float32Array(HH, EH.matricesWeightsAttrDesc.offset, EH.matricesWeightsAttrDesc.count);
            IH.setVerticesData(sH.t.MatricesWeightsKind, RH, !1);
          }
          if (EH.indicesAttrDesc && EH.indicesAttrDesc.count > 0) {
            const RH = new Int32Array(HH, EH.indicesAttrDesc.offset, EH.indicesAttrDesc.count);
            IH.setIndices(RH, null);
          }
          if (EH.subMeshesAttrDesc && EH.subMeshesAttrDesc.count > 0) {
            const RH = new Int32Array(HH, EH.subMeshesAttrDesc.offset, 5 * EH.subMeshesAttrDesc.count);
            IH.BJ = [];
            for (let HH = 0; HH < EH.subMeshesAttrDesc.count; HH++) {
              const EH = RH[5 * HH + 0],
                hH = RH[5 * HH + 1],
                TH = RH[5 * HH + 2],
                sH = RH[5 * HH + 3],
                GH = RH[5 * HH + 4];
              eH.c.AddToMesh(EH, hH, TH, sH, GH, IH);
            }
          }
        } else if (HH.positions && HH.normals && HH.indices) {
          if (IH.setVerticesData(sH.t.PositionKind, HH.positions, HH.positions._updatable || HH.positionsUpdatable), IH.setVerticesData(sH.t.NormalKind, HH.normals, HH.normals._updatable || HH.normalsUpdatable), HH.tangents && IH.setVerticesData(sH.t.TangentKind, HH.tangents, HH.tangents._updatable || HH.tangentsUpdatable), HH.uvs && IH.setVerticesData(sH.t.UVKind, HH.uvs, HH.uvs._updatable || HH.uvsUpdatable), HH.uvs2 && IH.setVerticesData(sH.t.UV2Kind, HH.uvs2, HH.uvs2._updatable || HH.uvs2Updatable), HH.uvs3 && IH.setVerticesData(sH.t.UV3Kind, HH.uvs3, HH.uvs3._updatable || HH.uvs3Updatable), HH.uvs4 && IH.setVerticesData(sH.t.UV4Kind, HH.uvs4, HH.uvs4._updatable || HH.uvs4Updatable), HH.uvs5 && IH.setVerticesData(sH.t.UV5Kind, HH.uvs5, HH.uvs5._updatable || HH.uvs5Updatable), HH.uvs6 && IH.setVerticesData(sH.t.UV6Kind, HH.uvs6, HH.uvs6._updatable || HH.uvs6Updatable), HH.colors && IH.setVerticesData(sH.t.ColorKind, hH.d.CheckColors4(HH.colors, HH.positions.length / 3), HH.colors._updatable), HH.matricesIndices) if (HH.matricesIndices._isExpanded || HH.matricesIndicesExpanded) delete HH.matricesIndices._isExpanded, delete HH.matricesIndicesExpanded, IH.setVerticesData(sH.t.MatricesIndicesKind, HH.matricesIndices, HH.matricesIndices._updatable || HH.matricesIndicesUpdatable);else {
            const EH = [];
            for (let IH = 0; IH < HH.matricesIndices.length; IH++) {
              const RH = HH.matricesIndices[IH];
              EH.push(255 & RH), EH.push((65280 & RH) >> 8), EH.push((16711680 & RH) >> 16), EH.push(RH >> 24 & 255);
            }
            IH.setVerticesData(sH.t.MatricesIndicesKind, EH, HH.matricesIndices._updatable || HH.matricesIndicesUpdatable);
          }
          if (HH.matricesIndicesExtra) if (HH.matricesIndicesExtraExpanded || HH.matricesIndicesExtra._isExpanded) delete HH.matricesIndices._isExpanded, delete HH.matricesIndicesExtraExpanded, IH.setVerticesData(sH.t.MatricesIndicesExtraKind, HH.matricesIndicesExtra, HH.matricesIndicesExtra._updatable || HH.matricesIndicesExtraUpdatable);else {
            const EH = [];
            for (let IH = 0; IH < HH.matricesIndicesExtra.length; IH++) {
              const RH = HH.matricesIndicesExtra[IH];
              EH.push(255 & RH), EH.push((65280 & RH) >> 8), EH.push((16711680 & RH) >> 16), EH.push(RH >> 24 & 255);
            }
            IH.setVerticesData(sH.t.MatricesIndicesExtraKind, EH, HH.matricesIndicesExtra._updatable || HH.matricesIndicesExtraUpdatable);
          }
          HH.matricesWeights && (MH._CleanMatricesWeights(HH, IH), IH.setVerticesData(sH.t.MatricesWeightsKind, HH.matricesWeights, HH.matricesWeights._updatable)), HH.matricesWeightsExtra && IH.setVerticesData(sH.t.MatricesWeightsExtraKind, HH.matricesWeightsExtra, HH.matricesWeights._updatable), IH.setIndices(HH.indices, null);
        }
        if (HH.BJ) {
          IH.BJ = [];
          for (let EH = 0; EH < HH.BJ.length; EH++) {
            const RH = HH.BJ[EH];
            eH.c.AddToMesh(RH.materialIndex, RH.verticesStart, RH.verticesCount, RH.indexStart, RH.indexCount, IH);
          }
        }
        IH._shouldGenerateFlatShading && (IH.convertToFlatShadedMesh(), IH._shouldGenerateFlatShading = !1), IH.aJ(!0), EH.onMeshImportedObservable.notifyObservers(IH);
      }
      static _CleanMatricesWeights(HH, IH) {
        const EH = .001;
        if (!GH.b.CleanBoneMatrixWeights) return;
        let RH;
        if (!(HH.skeletonId > -1)) return;
        {
          const EH = IH.kh().getLastSkeletonById(HH.skeletonId);
          if (!EH) return;
          RH = EH.bones.length;
        }
        const hH = IH.getVerticesData(sH.t.MatricesIndicesKind),
          TH = IH.getVerticesData(sH.t.MatricesIndicesExtraKind),
          eH = HH.matricesWeights,
          AH = HH.matricesWeightsExtra,
          VH = HH.numBoneInfluencer,
          YH = eH.length;
        for (let sH = 0; sH < YH; sH += 4) {
          let HH = 0,
            IH = -1;
          for (let RH = 0; RH < 4; RH++) {
            const hH = eH[sH + RH];
            HH += hH, hH < EH && IH < 0 && (IH = RH);
          }
          if (AH) for (let RH = 0; RH < 4; RH++) {
            const hH = AH[sH + RH];
            HH += hH, hH < EH && IH < 0 && (IH = RH + 4);
          }
          if ((IH < 0 || IH > VH - 1) && (IH = VH - 1), HH > EH) {
            const IH = 1 / HH;
            for (let HH = 0; HH < 4; HH++) eH[sH + HH] *= IH;
            if (AH) for (let HH = 0; HH < 4; HH++) AH[sH + HH] *= IH;
          } else IH >= 4 ? (AH[sH + IH - 4] = 1 - HH, TH[sH + IH - 4] = RH) : (eH[sH + IH] = 1 - HH, hH[sH + IH] = RH);
        }
        IH.setVerticesData(sH.t.MatricesIndicesKind, hH), HH.matricesWeightsExtra && IH.setVerticesData(sH.t.MatricesIndicesExtraKind, TH);
      }
      static Parse(HH, IH, EH) {
        const hH = new MH(HH.id, IH, void 0, HH.updatable);
        return hH._loadedUniqueId = HH.uniqueId, QH.c && QH.c.AddTagsTo(hH, HH.tags), HH.delayLoadingFile ? (hH.delayLoadState = 4, hH.delayLoadingFile = EH + HH.delayLoadingFile, hH._boundingInfo = new AH.e(RH.x.Qh(HH.boundingBoxMinimum), RH.x.Qh(HH.boundingBoxMaximum)), hH._delayInfo = [], HH.hasUVs && hH._delayInfo.push(sH.t.UVKind), HH.hasUVs2 && hH._delayInfo.push(sH.t.UV2Kind), HH.hasUVs3 && hH._delayInfo.push(sH.t.UV3Kind), HH.hasUVs4 && hH._delayInfo.push(sH.t.UV4Kind), HH.hasUVs5 && hH._delayInfo.push(sH.t.UV5Kind), HH.hasUVs6 && hH._delayInfo.push(sH.t.UV6Kind), HH.hasColors && hH._delayInfo.push(sH.t.ColorKind), HH.hasMatricesIndices && hH._delayInfo.push(sH.t.MatricesIndicesKind), HH.hasMatricesWeights && hH._delayInfo.push(sH.t.MatricesWeightsKind), hH._delayLoadingFunction = TH.c.ImportVertexData) : TH.c.ImportVertexData(HH, hH), IH.pushGeometry(hH, !0), hH;
      }
    }
  },
  22410: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => RH.b
    });
    var RH = EH(22364);
    (0, RH.e)();
  },
  22364: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => YH,
      e: () => JH
    });
    var RH = EH(21764),
      hH = EH(21832),
      TH = EH(22229),
      sH = EH(22243),
      eH = EH(21841),
      GH = EH(22126),
      AH = EH(22128),
      VH = EH(21808);
    class YH extends TH.d {
      constructor(HH, IH) {
        super(HH, IH.kh()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, IH.aN(this), this._sourceMesh = IH, this._unIndexed = IH._unIndexed, this.position.RH(IH.position), this.rotation.RH(IH.rotation), this.WJ.RH(IH.WJ), IH.rotationQuaternion && (this.rotationQuaternion = IH.rotationQuaternion.clone()), this.animations = IH.animations.slice();
        for (const EH of IH.getAnimationRanges()) null != EH && this.createAnimationRange(EH.name, EH.from, EH.to);
        if (this.infiniteDistance = IH.infiniteDistance, this.setPivotMatrix(IH.getPivotMatrix()), IH.skeleton || IH.morphTargetManager || !IH.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);else {
          const HH = IH.getBoundingInfo();
          this.buildBoundingInfo(HH.minimum, HH.maximum);
        }
        this._syncSubMeshes();
      }
      getClassName() {
        return "InstancedMesh";
      }
      get lightSources() {
        return this._sourceMesh._lightSources;
      }
      _resyncLightSources() {}
      _resyncLightSource() {}
      _removeLightSource() {}
      get receiveShadows() {
        return this._sourceMesh.receiveShadows;
      }
      set receiveShadows(HH) {
        var IH;
        (null === (IH = this._sourceMesh) || void 0 === IH ? void 0 : IH.receiveShadows) !== HH && hH.e.Warn("Setting receiveShadows on an instanced mesh has no effect");
      }
      get material() {
        return this._sourceMesh.material;
      }
      set material(HH) {
        var IH;
        (null === (IH = this._sourceMesh) || void 0 === IH ? void 0 : IH.material) !== HH && hH.e.Warn("Setting material on an instanced mesh has no effect");
      }
      get visibility() {
        return this._sourceMesh.visibility;
      }
      set visibility(HH) {
        var IH;
        (null === (IH = this._sourceMesh) || void 0 === IH ? void 0 : IH.visibility) !== HH && hH.e.Warn("Setting visibility on an instanced mesh has no effect");
      }
      get skeleton() {
        return this._sourceMesh.skeleton;
      }
      set skeleton(HH) {
        var IH;
        (null === (IH = this._sourceMesh) || void 0 === IH ? void 0 : IH.skeleton) !== HH && hH.e.Warn("Setting skeleton on an instanced mesh has no effect");
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId;
      }
      set renderingGroupId(HH) {
        this._sourceMesh && HH !== this._sourceMesh.renderingGroupId && hH.e.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene");
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0;
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices();
      }
      get pO() {
        return this._sourceMesh;
      }
      get KN() {
        return this._sourceMesh._geometry;
      }
      createInstance(HH) {
        return this._sourceMesh.createInstance(HH);
      }
      isReady() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(HH, !0);
      }
      getVerticesData(HH, IH, EH) {
        return this._sourceMesh.getVerticesData(HH, IH, EH);
      }
      copyVerticesData(HH, IH) {
        this._sourceMesh.copyVerticesData(HH, IH);
      }
      getVertexBuffer(HH, IH) {
        return this._sourceMesh.getVertexBuffer(HH, IH);
      }
      setVerticesData(HH, IH, EH, RH) {
        return this.pO && this.pO.setVerticesData(HH, IH, EH, RH), this.pO;
      }
      updateVerticesData(HH, IH, EH, RH) {
        return this.pO && this.pO.updateVerticesData(HH, IH, EH, RH), this.pO;
      }
      setIndices(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.pO && this.pO.setIndices(HH, IH), this.pO;
      }
      isVerticesDataPresent(HH) {
        return this._sourceMesh.isVerticesDataPresent(HH);
      }
      uO() {
        return this._sourceMesh.uO();
      }
      get _positions() {
        return this._sourceMesh._positions;
      }
      refreshBoundingInfo() {
        let HH,
          IH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          EH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.getBoundingInfo().isLocked) return this;
        HH = "object" === typeof IH ? IH : {
          applySkeleton: IH,
          applyMorph: EH
        };
        const RH = this._sourceMesh.KN ? this._sourceMesh.KN.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(HH, null, AH.t.PositionKind), RH), this;
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this;
      }
      _activate(HH, IH) {
        if (super._activate(HH, IH), this._sourceMesh.BJ || hH.e.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, HH), IH) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0;
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0;
        }
        return !1;
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer);
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== GH.f.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new RH.d());
          const HH = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, RH.p.Rh[7].RH(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.RH(this._currentLOD.aJ(!0)), this._currentLOD.position.RH(RH.p.Rh[7]), this._currentLOD._masterMesh = HH, this._billboardWorldMatrix;
        }
        return super.getWorldMatrix();
      }
      get isAnInstance() {
        return !0;
      }
      getLOD(HH) {
        if (!HH) return this;
        const IH = this.pO.getLODLevels();
        if (IH && 0 !== IH.length) {
          const IH = this.getBoundingInfo();
          this._currentLOD = this.pO.getLOD(HH, IH.boundingSphere);
        } else this._currentLOD = this.pO;
        return this._currentLOD;
      }
      _preActivateForIntermediateRendering(HH) {
        return this.pO._preActivateForIntermediateRendering(HH);
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.BJ) for (let HH = 0; HH < this._sourceMesh.BJ.length; HH++) this._sourceMesh.BJ[HH].clone(this, this._sourceMesh);
        return this;
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray();
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.getBoundingInfo().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this;
      }
      clone(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = arguments.length > 2 ? arguments[2] : void 0;
        const RH = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(HH);
        if (eH.d.DeepCopy(this, RH, ["name", "BJ", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "pO", "isAnInstance", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "hasInstances", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "rM", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "KN"], []), IH && (RH.parent = IH), !EH) for (let hH = 0; hH < this.kh().meshes.length; hH++) {
          const HH = this.kh().meshes[hH];
          HH.parent === this && HH.clone(HH.name, RH);
        }
        return RH.aJ(!0), this.onClonedObservable.notifyObservers(RH), RH;
      }
      dispose(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.dN(this), super.dispose(HH, IH);
      }
      _serializeAsParent(HH) {
        super._serializeAsParent(HH), HH.parentId = this._sourceMesh.uniqueId, HH.parentInstanceIndex = this._indexInSourceMeshInstanceArray;
      }
      instantiateHierarchy() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          IH = arguments.length > 1 ? arguments[1] : void 0,
          EH = arguments.length > 2 ? arguments[2] : void 0;
        const RH = this.clone("Clone of " + (this.name || this.id), HH || this.parent, !0, IH && IH.newSourcedMesh);
        RH && EH && EH(this, RH);
        for (const hH of this.getChildTransformNodes(!0)) hH.instantiateHierarchy(RH, IH, EH);
        return RH;
      }
    }
    let QH = !1;
    function JH() {
      QH || (QH = !0, sH.b._instancedMeshFactory = (HH, IH) => {
        const EH = new YH(HH, IH);
        if (IH.BY) {
          EH.BY = {};
          for (const HH in IH.BY) EH.BY[HH] = IH.BY[HH];
        }
        return EH;
      }, sH.b.prototype.XJ = function (HH, IH) {
        var EH, RH, hH;
        if (null === (EH = this._userInstancedBuffersStorage) || void 0 === EH || null === (RH = EH.vertexBuffers[HH]) || void 0 === RH || RH.dispose(), null !== (hH = this._userInstancedBuffersStorage) && void 0 !== hH && hH.renderPasses) for (const sH in this._userInstancedBuffersStorage.renderPasses) {
          var TH;
          const IH = this._userInstancedBuffersStorage.renderPasses[sH];
          null === (TH = IH[HH]) || void 0 === TH || TH.dispose(), delete IH[HH];
        }
        if (!this.BY) {
          this.BY = {};
          for (const HH of this.instances) HH.BY = {};
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.getEngine().getCaps().vertexArrayObject ? {} : void 0
        }), this.BY[HH] = null, this._userInstancedBuffersStorage.strides[HH] = IH, this._userInstancedBuffersStorage.sizes[HH] = 32 * IH, this._userInstancedBuffersStorage.data[HH] = new Float32Array(this._userInstancedBuffersStorage.sizes[HH]), this._userInstancedBuffersStorage.vertexBuffers[HH] = this._instanceDataStorage.useMonoDataStorageRenderPass ? new AH.t(this.getEngine(), this._userInstancedBuffersStorage.data[HH], HH, !0, !1, IH, !0) : null;
        for (const sH of this.instances) sH.BY[HH] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty();
      }, sH.b.prototype._processInstancedBuffers = function (HH, IH) {
        const EH = HH ? HH.length : 0,
          RH = !this._instanceDataStorage.useMonoDataStorageRenderPass;
        let hH;
        if (RH) {
          const HH = this._instanceDataStorage.YY.currentRenderPassId;
          this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {}), this._userInstancedBuffersStorage.renderPasses[HH] || (this._userInstancedBuffersStorage.renderPasses[HH] = {}), hH = this._userInstancedBuffersStorage.renderPasses[HH];
        }
        for (const eH in this.BY) {
          let GH = this._userInstancedBuffersStorage.sizes[eH];
          const VH = this._userInstancedBuffersStorage.strides[eH],
            YH = (EH + 1) * VH;
          for (; GH < YH;) GH *= 2;
          this._userInstancedBuffersStorage.data[eH].length != GH && (this._userInstancedBuffersStorage.data[eH] = new Float32Array(GH), this._userInstancedBuffersStorage.sizes[eH] = GH, RH ? hH[eH] && (hH[eH].dispose(), hH[eH] = null) : this._userInstancedBuffersStorage.vertexBuffers[eH] && (this._userInstancedBuffersStorage.vertexBuffers[eH].dispose(), this._userInstancedBuffersStorage.vertexBuffers[eH] = null));
          const QH = this._userInstancedBuffersStorage.data[eH];
          let JH = 0;
          if (IH) {
            var TH;
            const HH = null !== (TH = this.BY[eH]) && void 0 !== TH ? TH : 0;
            HH.toArray ? HH.toArray(QH, JH) : HH.copyToArray ? HH.copyToArray(QH, JH) : QH[JH] = HH, JH += VH;
          }
          for (let IH = 0; IH < EH; IH++) {
            var sH;
            const EH = null !== (sH = HH[IH].BY[eH]) && void 0 !== sH ? sH : 0;
            EH.toArray ? EH.toArray(QH, JH) : EH.copyToArray ? EH.copyToArray(QH, JH) : QH[JH] = EH, JH += VH;
          }
          RH ? hH[eH] ? hH[eH].updateDirectly(QH, 0) : (hH[eH] = new AH.t(this.getEngine(), this._userInstancedBuffersStorage.data[eH], eH, !0, !1, VH, !0), this._invalidateInstanceVertexArrayObject()) : this._userInstancedBuffersStorage.vertexBuffers[eH] ? this._userInstancedBuffersStorage.vertexBuffers[eH].updateDirectly(QH, 0) : (this._userInstancedBuffersStorage.vertexBuffers[eH] = new AH.t(this.getEngine(), this._userInstancedBuffersStorage.data[eH], eH, !0, !1, VH, !0), this._invalidateInstanceVertexArrayObject());
        }
      }, sH.b.prototype._invalidateInstanceVertexArrayObject = function () {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const HH in this._userInstancedBuffersStorage.vertexArrayObjects) this.getEngine().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[HH]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {};
        }
      }, sH.b.prototype._disposeInstanceSpecificData = function () {
        var HH, IH;
        for (const RH in this._instanceDataStorage.renderPasses) {
          var EH;
          null === (EH = this._instanceDataStorage.renderPasses[RH].instancesBuffer) || void 0 === EH || EH.dispose();
        }
        for (this._instanceDataStorage.renderPasses = {}, null === (HH = this._instanceDataStorage.dataStorageRenderPass) || void 0 === HH || null === (IH = HH.instancesBuffer) || void 0 === IH || IH.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const RH in this.BY) this._userInstancedBuffersStorage.vertexBuffers[RH] && this._userInstancedBuffersStorage.vertexBuffers[RH].dispose();
        this._invalidateInstanceVertexArrayObject(), this.BY = {};
      }, (0, VH.d)("BABYLON.InstancedMesh", YH));
    }
  },
  22925: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => OH,
      h: () => MH
    });
    var RH,
      hH,
      TH,
      sH,
      eH = EH(21817),
      GH = EH(22128),
      AH = EH(22243),
      VH = EH(22364),
      YH = EH(22248),
      QH = EH(22933),
      JH = EH(21856);
    class OH extends AH.b {
      _isShaderMaterial(HH) {
        return !!HH && "ShaderMaterial" === HH.getClassName();
      }
      constructor(HH) {
        let IH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          RH = arguments.length > 5 ? arguments[5] : void 0,
          hH = arguments.length > 6 ? arguments[6] : void 0,
          TH = arguments.length > 7 ? arguments[7] : void 0;
        super(HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, IH, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = RH, this.useVertexAlpha = hH, this.color = new eH.b(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, IH && (this.color = IH.color.clone(), this.alpha = IH.alpha, this.useVertexColor = IH.useVertexColor, this.useVertexAlpha = IH.useVertexAlpha), this.intersectionThreshold = .1;
        const sH = {
          attributes: [GH.t.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? sH.defines.push("#define VERTEXALPHA") : sH.needAlphaBlending = !1, this.useVertexColor ? (sH.defines.push("#define VERTEXCOLOR"), sH.attributes.push(GH.t.ColorKind)) : (sH.uniforms.push("color"), this._color4 = new eH.d()), TH) this.material = TH;else {
          this.kh().getEngine().isWebGPU && !OH.ForceGLSL && (this._shaderLanguage = 1), sH.shaderLanguage = this._shaderLanguage, sH.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([EH.e(92).then(EH.bind(EH, 24868)), EH.e(99).then(EH.bind(EH, 24870))]) : await Promise.all([EH.e(112).then(EH.bind(EH, 24876)), EH.e(119).then(EH.bind(EH, 24882))]);
          };
          const HH = new QH.t("colorShader", this.kh(), "color", sH, !1);
          HH.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(HH);
        }
      }
      getClassName() {
        return "LinesMesh";
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material;
      }
      set material(HH) {
        const IH = this.material;
        if (IH === HH) return;
        const EH = IH && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(HH), EH && (null === IH || void 0 === IH || IH.dispose());
      }
      _setInternalMaterial(HH) {
        this._setMaterial(HH), this.material && (this.material.fillMode = YH.b.LineListDrawMode, this.material.disableLighting = !0);
      }
      get checkCollisions() {
        return !1;
      }
      set checkCollisions(HH) {}
      _bind(HH, IH) {
        if (!this._geometry) return this;
        const EH = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(IH, EH) : this._geometry._bind(IH, EH, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: HH,
            g: IH,
            b: EH
          } = this.color;
          this._color4.set(HH, IH, EH, this.alpha), this.material.setColor4("color", this._color4);
        }
        return this;
      }
      _draw(HH, IH, EH) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const RH = this.kh().getEngine();
        return this._unIndexed ? RH.drawArraysType(YH.b.LineListDrawMode, HH.verticesStart, HH.verticesCount, EH) : RH.drawElementsType(YH.b.LineListDrawMode, HH.indexStart, HH.indexCount, EH), this;
      }
      dispose(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var EH;
        if (!(arguments.length > 2 ? arguments[2] : void 0)) if (this._ownsMaterial) null === (EH = this.material) || void 0 === EH || EH.dispose(!1, !1, !0);else if (IH) {
          var RH;
          null === (RH = this.material) || void 0 === RH || RH.dispose(!1, !1, !0);
        }
        super.dispose(HH);
      }
      clone(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = arguments.length > 2 ? arguments[2] : void 0;
        if (IH && void 0 === IH._addToSceneRootNodes) {
          const EH = IH;
          return EH.source = this, new OH(HH, this.kh(), EH.parent, EH.source, EH.doNotCloneChildren);
        }
        return new OH(HH, this.kh(), IH, this, EH);
      }
      createInstance(HH) {
        const IH = new rH(HH, this);
        if (this.BY) {
          IH.BY = {};
          for (const HH in this.BY) IH.BY[HH] = this.BY[HH];
        }
        return IH;
      }
      serialize(HH) {
        super.serialize(HH), HH.color = this.color.GM(), HH.alpha = this.alpha;
      }
      static Parse(HH, IH) {
        const EH = new OH(HH.name, IH);
        return EH.color = eH.b.Qh(HH.color), EH.alpha = HH.alpha, EH;
      }
    }
    OH.ForceGLSL = !1;
    class rH extends VH.b {
      constructor(HH, IH) {
        super(HH, IH), this.intersectionThreshold = IH.intersectionThreshold;
      }
      getClassName() {
        return "InstancedLinesMesh";
      }
    }
    let FH = !1;
    function MH() {
      FH || (FH = !0, AH.b._LinesMeshParser = (HH, IH) => OH.Parse(HH, IH));
    }
    null !== (RH = (TH = OH.prototype).enableEdgesRendering) && void 0 !== RH || (TH.enableEdgesRendering = (0, JH.j)("LinesMesh", "enableEdgesRendering")), null !== (hH = (sH = rH.prototype).enableEdgesRendering) && void 0 !== hH || (sH.enableEdgesRendering = (0, JH.j)("InstancedLinesMesh", "enableEdgesRendering"));
  },
  22812: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => RH.b
    });
    var RH = EH(22243);
    (0, RH.e)();
  },
  22243: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => VI,
      e: () => QI,
      f: () => RI
    });
    var RH,
      hH,
      TH,
      sH,
      eH,
      GH,
      AH,
      VH,
      YH,
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
      ZH,
      qH,
      LH,
      gH,
      yH,
      oH,
      kI,
      CH = EH(21786),
      cH = EH(21819),
      UH = EH(21867),
      WH = EH(21841),
      BH = EH(21974),
      fH = EH(22182),
      aH = EH(21939),
      nH = EH(21764),
      pH = EH(21817),
      dH = EH(21970),
      uH = EH(22128),
      lH = EH(22173),
      KH = EH(22170),
      wH = EH(22229),
      zH = EH(22187),
      tH = EH(22248),
      jI = EH(22278),
      vH = EH(22221),
      bH = EH(21972),
      SH = EH(21832),
      xH = EH(21808),
      HI = EH(21856),
      II = EH(22281);
    class EI {
      constructor(HH, IH) {
        this.distanceOrScreenCoverage = HH, this.mesh = IH;
      }
    }
    class RI {}
    class hI {
      constructor() {
        this.batchCache = new sI(this), this.batchCacheReplacementModeInFrozenMode = new sI(this), this.instancesBufferSize = 2048;
      }
    }
    class TI {
      constructor() {
        this.renderPasses = {};
      }
    }
    class sI {
      constructor(HH) {
        this.parent = HH, this.mustReturn = !1, this.visibleInstances = new Array(), this.renderSelf = [], this.hardwareInstancedRendering = [];
      }
    }
    class eI {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null;
      }
    }
    class GI {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array(), this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null;
      }
    }
    const AI = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class VI extends wH.d {
      static _GetDefaultSideOrientation(HH) {
        return HH || VI.FRONTSIDE;
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage;
      }
      set useLODScreenCoverage(HH) {
        this._internalMeshDataInfo._useLODScreenCoverage = HH, this._sortLODLevels();
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders;
      }
      set computeBonesUsingShaders(HH) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== HH && (HH && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(uH.t.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(uH.t.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = HH, this._markSubMeshesAsAttributesDirty());
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new CH.e()), this._internalMeshDataInfo._onBeforeRenderObservable;
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new CH.e()), this._internalMeshDataInfo._onBeforeBindObservable;
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new CH.e()), this._internalMeshDataInfo._onAfterRenderObservable;
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new CH.e()), this._internalMeshDataInfo._onBetweenPassObservable;
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new CH.e()), this._internalMeshDataInfo._onBeforeDrawObservable;
      }
      set onBeforeDraw(HH) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(HH);
      }
      get hasInstances() {
        return this.instances.length > 0;
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0;
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount;
      }
      set forcedInstanceCount(HH) {
        this._internalMeshDataInfo._forcedInstanceCount = HH;
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation;
      }
      set sideOrientation(HH) {
        this._internalMeshDataInfo._sideOrientation = HH, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === HH || !this._scene.useRightHandedSystem && 0 === HH;
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation;
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation;
      }
      set overrideMaterialSideOrientation(HH) {
        this.sideOrientation = HH, this.material && (this.material.sideOrientation = null);
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode;
      }
      set overrideRenderingFillMode(HH) {
        this._internalMeshDataInfo._overrideRenderingFillMode = HH;
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material;
      }
      set material(HH) {
        HH && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (HH.sideOrientation = null), this._setMaterial(HH);
      }
      get source() {
        return this._internalMeshDataInfo._source;
      }
      get cloneMeshMap() {
        return this._internalMeshDataInfo.meshMap;
      }
      get isUnIndexed() {
        return this._unIndexed;
      }
      set isUnIndexed(HH) {
        this._unIndexed !== HH && (this._unIndexed = HH, this._markSubMeshesAsAttributesDirty());
      }
      get worldMatrixInstancedBuffer() {
        const HH = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.YY.currentRenderPassId];
        return HH ? HH.instancesData : void 0;
      }
      get previousWorldMatrixInstancedBuffer() {
        const HH = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.YY.currentRenderPassId];
        return HH ? HH.instancesPreviousData : void 0;
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate;
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(HH) {
        this._instanceDataStorage.manualUpdate = HH;
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate;
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(HH) {
        this._instanceDataStorage.previousManualUpdate = HH;
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates;
      }
      set forceWorldMatrixInstancedBufferUpdate(HH) {
        this._instanceDataStorage.forceMatrixUpdates = HH;
      }
      _copySource(HH, IH) {
        let EH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const hH = this.kh();
        if (HH._geometry && HH._geometry.applyToMesh(this), WH.d.DeepCopy(HH, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "hasInstances", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "KN", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "isAnInstance", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "rM", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = HH, hH.useClonedMeshMap && (HH._internalMeshDataInfo.meshMap || (HH._internalMeshDataInfo.meshMap = {}), HH._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = HH._originalBuilderSideOrientation, this._creationDataStorage = HH._creationDataStorage, HH._ranges) {
          const IH = HH._ranges;
          for (const HH in IH) Object.prototype.hasOwnProperty.call(IH, HH) && IH[HH] && this.createAnimationRange(HH, IH[HH].from, IH[HH].to);
        }
        if (HH.metadata && HH.metadata.clone ? this.metadata = HH.metadata.clone() : this.metadata = HH.metadata, this._internalMetadata = HH._internalMetadata, BH.c && BH.c.HasTags(HH) && BH.c.AddTagsTo(this, BH.c.GetTags(HH, !0)), this.hY(HH.isEnabled(!1)), this.parent = HH.parent, this.setPivotMatrix(HH.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + HH.id, this.material = HH.material, !IH) {
          const hH = HH.getDescendants(!0);
          for (let HH = 0; HH < hH.length; HH++) {
            const TH = hH[HH];
            TH._isMesh ? (AI.parent = this, AI.doNotCloneChildren = IH, AI.clonePhysicsImpostor = EH, AI.cloneThinInstances = RH, TH.clone(this.name + "." + TH.name, AI)) : TH.clone && TH.clone(this.name + "." + TH.name, this);
          }
        }
        if (HH.morphTargetManager && (this.morphTargetManager = HH.morphTargetManager), (0, HI.d)(hH.getPhysicsEngine)) {
          const IH = hH.getPhysicsEngine();
          if (EH && IH) if (1 === IH.getPluginVersion()) {
            const EH = IH.getImpostorForPhysicsObject(HH);
            EH && (this.physicsImpostor = EH.clone(this));
          } else 2 === IH.getPluginVersion() && HH.physicsBody && HH.physicsBody.clone(this);
        }
        for (let eH = 0; eH < hH.fF.length; eH++) {
          const IH = hH.fF[eH];
          IH.dI === HH && IH.clone(IH.name, this);
        }
        if (this.skeleton = HH.skeleton, RH && (HH._thinInstanceDataStorage.matrixData ? (this.AF("matrix", new Float32Array(HH._thinInstanceDataStorage.matrixData), 16, !HH._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = HH._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = HH._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = HH._thinInstanceDataStorage.matrixBufferSize, HH._userThinInstanceBuffersStorage)) {
          const IH = HH._userThinInstanceBuffersStorage;
          for (const HH in IH.data) {
            var TH, sH;
            this.AF(HH, new Float32Array(IH.data[HH]), IH.strides[HH], !(null !== (TH = IH.vertexBuffers) && void 0 !== TH && null !== (sH = TH[HH]) && void 0 !== sH && sH.isUpdatable())), this._userThinInstanceBuffersStorage.sizes[HH] = IH.sizes[HH];
          }
        }
        this.refreshBoundingInfo(!0, !0), this.aJ(!0);
      }
      constructor(HH) {
        let IH,
          EH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          RH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          TH = arguments.length > 4 ? arguments[4] : void 0,
          sH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(HH, EH), this._internalMeshDataInfo = new GI(), this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new eI(), this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = VI.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, EH = this.kh(), this._instanceDataStorage = new TI(), this._instanceDataStorage.YY = EH.getEngine(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.YY.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new hI()), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (HH, IH, EH) => {
          HH && EH && (this._uniformBuffer ? this.transferToEffect(IH) : EH.bindOnlyWorldMatrix(IH));
        };
        let eH = !1;
        if (RH && void 0 === RH._addToSceneRootNodes) {
          var GH, AH, VH, YH, QH;
          const HH = RH;
          IH = null !== (GH = HH.parent) && void 0 !== GH ? GH : null, hH = null !== (AH = HH.source) && void 0 !== AH ? AH : null, TH = null !== (VH = HH.doNotCloneChildren) && void 0 !== VH && VH, sH = null === (YH = HH.clonePhysicsImpostor) || void 0 === YH || YH, eH = null !== (QH = HH.cloneThinInstances) && void 0 !== QH && QH;
        } else IH = RH;
        hH && this._copySource(hH, TH, sH, eH), null !== IH && (this.parent = IH), this._instanceDataStorage.hardwareInstancedRendering = this.getEngine().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = HH => {
          HH.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add(() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this));
          }));
        }, this.onMeshReadyObservable = new CH.e(this._internalMeshDataInfo._onMeshReadyObserverAdded), hH && hH.onClonedObservable.notifyObservers(this);
      }
      instantiateHierarchy() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          IH = arguments.length > 1 ? arguments[1] : void 0,
          EH = arguments.length > 2 ? arguments[2] : void 0;
        const RH = 0 === this.getTotalVertices() || IH && IH.doNotInstantiate && (!0 === IH.doNotInstantiate || IH.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), HH || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        RH.parent = HH || this.parent, RH.position = this.position.clone(), RH.WJ = this.WJ.clone(), this.rotationQuaternion ? RH.rotationQuaternion = this.rotationQuaternion.clone() : RH.rotation = this.rotation.clone(), EH && EH(this, RH);
        for (const hH of this.getChildTransformNodes(!0)) "InstancedMesh" === hH.getClassName() && "Mesh" === RH.getClassName() && hH.pO === this ? hH.instantiateHierarchy(RH, {
          doNotInstantiate: IH && IH.doNotInstantiate || !1,
          newSourcedMesh: RH
        }, EH) : hH.instantiateHierarchy(RH, IH, EH);
        return RH;
      }
      getClassName() {
        return "Mesh";
      }
      get _isMesh() {
        return !0;
      }
      toString(HH) {
        let IH = super.toString(HH);
        if (IH += ", n vertices: " + this.getTotalVertices(), IH += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations) for (let EH = 0; EH < this.animations.length; EH++) IH += ", animation[0]: " + this.animations[EH].toString(HH);
        if (HH) if (this._geometry) {
          const HH = this.uO(),
            EH = this.getVerticesData(uH.t.PositionKind);
          EH && HH && (IH += ", flat shading: " + (EH.length / 3 === HH.length ? "YES" : "NO"));
        } else IH += ", flat shading: UNKNOWN";
        return IH;
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const HH of this.instances) HH._unBindEffect();
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0;
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels;
      }
      _sortLODLevels() {
        const HH = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort((IH, EH) => IH.distanceOrScreenCoverage < EH.distanceOrScreenCoverage ? HH : IH.distanceOrScreenCoverage > EH.distanceOrScreenCoverage ? -HH : 0);
      }
      addLODLevel(HH, IH) {
        if (IH && IH._masterMesh) return SH.e.Warn("You cannot use a mesh as LOD level twice"), this;
        const EH = new EI(HH, IH);
        return this._internalMeshDataInfo._LODLevels.push(EH), IH && (IH._masterMesh = this), this._sortLODLevels(), this;
      }
      getLODLevelAtDistance(HH) {
        const IH = this._internalMeshDataInfo;
        for (let EH = 0; EH < IH._LODLevels.length; EH++) {
          const RH = IH._LODLevels[EH];
          if (RH.distanceOrScreenCoverage === HH) return RH.mesh;
        }
        return null;
      }
      removeLODLevel(HH) {
        const IH = this._internalMeshDataInfo;
        for (let EH = 0; EH < IH._LODLevels.length; EH++) IH._LODLevels[EH].mesh === HH && (IH._LODLevels.splice(EH, 1), HH && (HH._masterMesh = null));
        return this._sortLODLevels(), this;
      }
      getLOD(HH, IH) {
        const EH = this._internalMeshDataInfo;
        if (!EH._LODLevels || 0 === EH._LODLevels.length) return this;
        const RH = IH || this.getBoundingInfo().boundingSphere,
          hH = HH.mode === aH.e.ORTHOGRAPHIC_CAMERA ? HH.zF : RH.centerWorld.subtract(HH.globalPosition).length();
        let TH = hH,
          sH = 1;
        if (EH._useLODScreenCoverage) {
          const IH = HH.screenArea;
          let EH = RH.radiusWorld * HH.zF / hH;
          EH = EH * EH * Math.PI, TH = EH / IH, sH = -1;
        }
        if (sH * EH._LODLevels[EH._LODLevels.length - 1].distanceOrScreenCoverage > sH * TH) return this.onLODLevelSelection && this.onLODLevelSelection(TH, this, this), this;
        for (let eH = 0; eH < EH._LODLevels.length; eH++) {
          const HH = EH._LODLevels[eH];
          if (sH * HH.distanceOrScreenCoverage < sH * TH) {
            if (HH.mesh) {
              if (4 === HH.mesh.delayLoadState) return HH.mesh._checkDelayState(), this;
              if (2 === HH.mesh.delayLoadState) return this;
              HH.mesh._preActivate(), HH.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache);
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(TH, this, HH.mesh), HH.mesh;
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(TH, this, this), this;
      }
      get KN() {
        return this._geometry;
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices();
      }
      getVerticesData(HH, IH, EH, RH) {
        var hH, TH;
        if (!this._geometry) return null;
        let sH = RH || null === (hH = this._userInstancedBuffersStorage) || void 0 === hH || null === (TH = hH.vertexBuffers[HH]) || void 0 === TH ? void 0 : TH.getFloatData(this.instances.length + 1, EH || IH && 1 !== this._geometry.meshes.length);
        return sH || (sH = this._geometry.getVerticesData(HH, IH, EH)), sH;
      }
      copyVerticesData(HH, IH) {
        this._geometry && this._geometry.copyVerticesData(HH, IH);
      }
      getVertexBuffer(HH, IH) {
        var EH, RH;
        return this._geometry ? null !== (EH = IH || null === (RH = this._userInstancedBuffersStorage) || void 0 === RH ? void 0 : RH.vertexBuffers[HH]) && void 0 !== EH ? EH : this._geometry.getVertexBuffer(HH) : null;
      }
      isVerticesDataPresent(HH, IH) {
        var EH;
        return this._geometry ? !IH && void 0 !== (null === (EH = this._userInstancedBuffersStorage) || void 0 === EH ? void 0 : EH.vertexBuffers[HH]) || this._geometry.isVerticesDataPresent(HH) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(HH);
      }
      isVertexBufferUpdatable(HH, IH) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(HH);
        if (!IH) {
          var EH;
          const IH = null === (EH = this._userInstancedBuffersStorage) || void 0 === EH ? void 0 : EH.vertexBuffers[HH];
          if (IH) return IH.isUpdatable();
        }
        return this._geometry.isVertexBufferUpdatable(HH);
      }
      getVerticesDataKinds(HH) {
        if (!this._geometry) {
          const HH = [];
          if (this._delayInfo) for (const IH of this._delayInfo) HH.push(IH);
          return HH;
        }
        const IH = this._geometry.getVerticesDataKinds();
        if (!HH && this._userInstancedBuffersStorage) for (const EH in this._userInstancedBuffersStorage.vertexBuffers) -1 === IH.indexOf(EH) && IH.push(EH);
        return IH;
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0;
      }
      uO(HH, IH) {
        return this._geometry ? this._geometry.uO(HH, IH) : [];
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh;
      }
      isReady() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(HH)) return !1;
        if (!this.BJ || 0 === this.BJ.length) return !0;
        if (!HH) return !0;
        const EH = this.getEngine(),
          RH = this.kh(),
          hH = IH || EH.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.aJ();
        const TH = this.material || RH.defaultMaterial;
        if (TH) if (TH._storeEffectOnSubMeshes) for (const OH of this.BJ) {
          const HH = OH.sI();
          if (HH) if (HH._storeEffectOnSubMeshes) {
            if (!HH.isReadyForSubMesh(this, OH, hH)) return !1;
          } else if (!HH.isReady(this, hH)) return !1;
        } else if (!TH.isReady(this, hH)) return !1;
        const sH = EH.currentRenderPassId;
        for (const OH of this.lightSources) {
          const HH = OH.getShadowGenerators();
          if (!HH) continue;
          const IH = HH.values();
          for (let RH = IH.next(); !0 !== RH.done; RH = IH.next()) {
            var eH, GH, AH, VH;
            const HH = RH.value;
            if (HH && (null === (eH = HH.getShadowMap()) || void 0 === eH || !eH.renderList || null !== (GH = HH.getShadowMap()) && void 0 !== GH && GH.renderList && -1 !== (null === (AH = HH.getShadowMap()) || void 0 === AH || null === (VH = AH.renderList) || void 0 === VH ? void 0 : VH.indexOf(this)))) {
              var YH;
              const IH = null !== (YH = HH.getShadowMap().renderPassIds) && void 0 !== YH ? YH : [EH.currentRenderPassId];
              for (let RH = 0; RH < IH.length; ++RH) {
                EH.currentRenderPassId = IH[RH];
                for (const IH of this.BJ) {
                  var QH, JH;
                  if (!HH.isReady(IH, hH, null !== (QH = null === (JH = IH.sI()) || void 0 === JH ? void 0 : JH.needAlphaBlendingForMesh(this)) && void 0 !== QH && QH)) return EH.currentRenderPassId = sH, !1;
                }
              }
              EH.currentRenderPassId = sH;
            }
          }
        }
        for (const OH of this._internalMeshDataInfo._LODLevels) if (OH.mesh && !OH.mesh.isReady(hH)) return !1;
        return !0;
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen;
      }
      TI() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this;
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this;
      }
      set overridenInstanceCount(HH) {
        this._instanceDataStorage.overridenInstanceCount = HH;
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const HH = this._instanceDataStorage.YY.currentRenderPassId;
        let IH = this._instanceDataStorage.renderPasses[HH];
        return IH || (IH = new hI(), this._instanceDataStorage.renderPasses[HH] = IH), IH;
      }
      _preActivate() {
        const HH = this._internalMeshDataInfo,
          IH = this.kh().getRenderId();
        return HH._preActivateId === IH || (HH._preActivateId = IH, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this;
      }
      _preActivateForIntermediateRendering(HH) {
        const IH = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return IH.visibleInstances && (IH.visibleInstances.intermediateDefaultRenderId = HH), this;
      }
      _registerInstanceForRenderId(HH, IH) {
        const EH = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return EH.visibleInstances || (EH.visibleInstances = {
          defaultRenderId: IH,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), EH.visibleInstances[IH] || (void 0 === EH.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete EH.visibleInstances[EH.previousRenderId], EH.previousRenderId = IH, EH.visibleInstances[IH] = new Array()), EH.visibleInstances[IH].push(HH), this;
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.hI || this.thinInstanceRefreshBoundingInfo(!1));
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()));
      }
      refreshBoundingInfo() {
        let HH,
          IH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          EH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.getBoundingInfo().isLocked) return this;
        HH = "object" === typeof IH ? IH : {
          applySkeleton: IH,
          applyMorph: EH
        };
        const RH = this.KN ? this.KN.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(HH, null, uH.t.PositionKind), RH), this;
      }
      _createGlobalSubMesh(HH) {
        const IH = this.getTotalVertices();
        if (!IH || !this.uO()) return null;
        if (this.BJ && this.BJ.length > 0) {
          const EH = this.uO();
          if (!EH) return null;
          const RH = EH.length;
          let hH = !1;
          if (HH) hH = !0;else for (const HH of this.BJ) {
            if (HH.indexStart + HH.indexCount > RH) {
              hH = !0;
              break;
            }
            if (HH.verticesStart + HH.verticesCount > IH) {
              hH = !0;
              break;
            }
          }
          if (!hH) return this.BJ[0];
        }
        return this.releaseSubMeshes(), new zH.c(0, 0, IH, 0, this.getTotalIndices() || (this.isUnIndexed ? IH : 0), this);
      }
      subdivide(HH) {
        if (HH < 1) return;
        const IH = this.getTotalIndices();
        let EH = IH / HH | 0,
          RH = 0;
        for (; EH % 3 !== 0;) EH++;
        this.releaseSubMeshes();
        for (let hH = 0; hH < HH && !(RH >= IH); hH++) zH.c.CreateFromIndices(0, RH, RH + EH >= IH ? IH - RH : EH, this, void 0, !1), RH += EH;
        this.refreshBoundingInfo(), this.synchronizeInstances();
      }
      setVerticesData(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          RH = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(HH, IH, EH, RH);else {
          const RH = new lH.c();
          RH.set(IH, HH);
          const hH = this.kh();
          new KH.c(KH.c.RandomId(), hH, RH, EH, this);
        }
        return this;
      }
      removeVerticesData(HH) {
        this._geometry && this._geometry.removeVerticesData(HH);
      }
      markVerticesDataAsUpdatable(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const EH = this.getVertexBuffer(HH);
        EH && EH.isUpdatable() !== IH && this.setVerticesData(HH, this.getVerticesData(HH), IH);
      }
      setVerticesBuffer(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = KH.c.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(HH, EH, IH), this;
      }
      updateVerticesData(HH, IH, EH, RH) {
        return this._geometry ? (RH ? (this.makeGeometryUnique(), this.updateVerticesData(HH, IH, EH, !1)) : this._geometry.updateVerticesData(HH, IH, EH), this) : this;
      }
      updateMeshPositions(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const EH = this.getVerticesData(uH.t.PositionKind);
        if (!EH) return this;
        if (HH(EH), this.updateVerticesData(uH.t.PositionKind, EH, !1, !1), IH) {
          const HH = this.uO(),
            IH = this.getVerticesData(uH.t.NormalKind);
          if (!IH) return this;
          lH.c.ComputeNormals(EH, HH, IH), this.updateVerticesData(uH.t.NormalKind, IH, !1, !1);
        }
        return this;
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const HH = this._geometry,
          IH = this._geometry.copy(KH.c.RandomId());
        return HH.releaseForMesh(this, !0), IH.applyToMesh(this), this;
      }
      setIndexBuffer(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          hH = this._geometry;
        hH || (hH = new KH.c(KH.c.RandomId(), this.kh(), void 0, void 0, this)), hH.setIndexBuffer(HH, IH, EH, RH);
      }
      setIndices(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(HH, IH, EH, RH);else {
          const RH = new lH.c();
          RH.indices = HH;
          const hH = this.kh();
          new KH.c(KH.c.RandomId(), hH, RH, EH, this, IH);
        }
        return this;
      }
      updateIndices(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(HH, IH, EH), this) : this;
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this;
      }
      _bind(HH, IH, EH) {
        let RH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const hH = this.kh().getEngine();
        let TH;
        if (this._unIndexed) {
          if (this._getRenderingFillMode(EH) === tH.b.WireFrameFillMode) TH = HH._getLinesIndexBuffer(this.uO(), hH);else TH = null;
        } else switch (this._getRenderingFillMode(EH)) {
          case tH.b.PointFillMode:
            TH = null;
            break;
          case tH.b.WireFrameFillMode:
            TH = HH._getLinesIndexBuffer(this.uO(), hH);
            break;
          default:
          case tH.b.TriangleFillMode:
            TH = this._geometry.getIndexBuffer();
        }
        return this._bindDirect(IH, TH, RH);
      }
      _bindDirect(HH, IH) {
        let EH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(HH), EH && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.YY.currentRenderPassId]) {
            const HH = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.YY.currentRenderPassId];
            for (const IH in HH) this._userInstancedBuffersStorage.vertexBuffers[IH] = HH[IH];
          }
          this._geometry._bind(HH, IH, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects);
        } else this._geometry._bind(HH, IH);
        return this;
      }
      _draw(HH, IH, EH) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const RH = this.kh().getEngine(),
          hH = RH._currentMaterialContext,
          TH = hH && hH.useVertexPulling;
        return this._unIndexed && IH !== tH.b.WireFrameFillMode || IH == tH.b.PointFillMode ? RH.drawArraysType(IH, HH.verticesStart, HH.verticesCount, this.forcedInstanceCount || EH) : IH == tH.b.WireFrameFillMode ? RH.drawElementsType(IH, 0, HH._linesIndexCount, this.forcedInstanceCount || EH) : TH ? RH.drawArraysType(IH, HH.indexStart, HH.indexCount, this.forcedInstanceCount || EH) : RH.drawElementsType(IH, HH.indexStart, HH.indexCount, this.forcedInstanceCount || EH), this;
      }
      registerBeforeRender(HH) {
        return this.onBeforeRenderObservable.add(HH), this;
      }
      unregisterBeforeRender(HH) {
        return this.onBeforeRenderObservable.removeCallback(HH), this;
      }
      registerAfterRender(HH) {
        return this.onAfterRenderObservable.add(HH), this;
      }
      unregisterAfterRender(HH) {
        return this.onAfterRenderObservable.removeCallback(HH), this;
      }
      _getInstancesRenderList(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const EH = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (IH) return EH.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[HH] = !1, EH.batchCacheReplacementModeInFrozenMode.renderSelf[HH] = !0, EH.batchCacheReplacementModeInFrozenMode;
          if (EH.previousBatch) return EH.previousBatch;
        }
        const RH = this.kh(),
          hH = RH._isInIntermediateRendering(),
          TH = hH ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          sH = EH.batchCache;
        if (sH.mustReturn = !1, sH.renderSelf[HH] = IH || !TH && this.isEnabled() && this.isVisible, sH.visibleInstances[HH] = null, EH.visibleInstances && !IH) {
          const IH = EH.visibleInstances,
            TH = RH.getRenderId(),
            eH = hH ? IH.intermediateDefaultRenderId : IH.defaultRenderId;
          sH.visibleInstances[HH] = IH[TH], !sH.visibleInstances[HH] && eH && (sH.visibleInstances[HH] = IH[eH]);
        }
        return sH.hardwareInstancedRendering[HH] = !IH && this._instanceDataStorage.hardwareInstancedRendering && null !== sH.visibleInstances[HH] && void 0 !== sH.visibleInstances[HH], EH.previousBatch = sH, sH;
      }
      _updateInstancedBuffers(HH, IH, EH, RH, hH, TH) {
        const sH = IH.visibleInstances[HH._id],
          eH = sH ? sH.length : 0,
          GH = IH.parent,
          AH = this._instanceDataStorage;
        let VH = GH.instancesBuffer,
          YH = GH.instancesPreviousBuffer,
          QH = 0,
          JH = 0;
        const OH = IH.renderSelf[HH._id],
          rH = this._scene.floatingOriginOffset,
          FH = !VH || EH !== GH.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !GH.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || AH.isFrozen && !FH) JH = (OH ? 1 : 0) + eH;else {
          const IH = this.getWorldMatrix();
          if (OH) {
            this._scene.needsPreviousWorldMatrices && (AH.masterMeshPreviousWorldMatrix ? (AH.masterMeshPreviousWorldMatrix.copyToArray(GH.instancesPreviousData, QH), AH.masterMeshPreviousWorldMatrix.RH(IH)) : (AH.masterMeshPreviousWorldMatrix = IH.clone(), AH.masterMeshPreviousWorldMatrix.copyToArray(GH.instancesPreviousData, QH))), IH.copyToArray(GH.instancesData, QH);
            const HH = IH.GM();
            GH.instancesData[QH + 12] = HH[12] - rH.x, GH.instancesData[QH + 13] = HH[13] - rH.y, GH.instancesData[QH + 14] = HH[14] - rH.z, QH += 16, JH++;
          }
          if (sH) {
            var MH;
            if (VI.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && null !== (MH = HH.sI()) && void 0 !== MH && MH.needAlphaBlendingForMesh(HH.getRenderingMesh())) {
              const HH = this._scene.activeCamera.globalPosition;
              for (let IH = 0; IH < sH.length; IH++) {
                const EH = sH[IH];
                EH._distanceToCamera = nH.x.Distance(EH.getBoundingInfo().boundingSphere.centerWorld, HH);
              }
              sH.sort((HH, IH) => HH._distanceToCamera > IH._distanceToCamera ? -1 : HH._distanceToCamera < IH._distanceToCamera ? 1 : 0);
            }
            for (let HH = 0; HH < sH.length; HH++) {
              const IH = sH[HH],
                EH = IH.getWorldMatrix();
              EH.copyToArray(GH.instancesData, QH), this._scene.needsPreviousWorldMatrices && (IH._previousWorldMatrix ? (IH._previousWorldMatrix.copyToArray(GH.instancesPreviousData, QH), IH._previousWorldMatrix.RH(EH)) : (IH._previousWorldMatrix = EH.clone(), IH._previousWorldMatrix.copyToArray(GH.instancesPreviousData, QH)));
              const RH = EH.GM();
              GH.instancesData[QH + 12] = RH[12] - rH.x, GH.instancesData[QH + 13] = RH[13] - rH.y, GH.instancesData[QH + 14] = RH[14] - rH.z, QH += 16, JH++;
            }
          }
        }
        if (FH) {
          let HH;
          if (VH && VH.dispose(), YH && YH.dispose(), VH = new uH.b(RH, GH.instancesData, !0, 16, !1, !0), GH.instancesBuffer = VH, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
            data: {},
            vertexBuffers: {},
            strides: {},
            sizes: {},
            vertexArrayObjects: this.getEngine().getCaps().vertexArrayObject ? {} : void 0
          }), this._instanceDataStorage.useMonoDataStorageRenderPass) HH = this._userInstancedBuffersStorage.vertexBuffers;else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const IH = this._instanceDataStorage.YY.currentRenderPassId;
            HH = this._userInstancedBuffersStorage.renderPasses[IH], HH || (this._userInstancedBuffersStorage.renderPasses[IH] = HH = {});
          }
          HH.world0 = VH.createVertexBuffer("world0", 0, 4), HH.world1 = VH.createVertexBuffer("world1", 4, 4), HH.world2 = VH.createVertexBuffer("world2", 8, 4), HH.world3 = VH.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (YH = new uH.b(RH, GH.instancesPreviousData, !0, 16, !1, !0), GH.instancesPreviousBuffer = YH, HH.previousWorld0 = YH.createVertexBuffer("previousWorld0", 0, 4), HH.previousWorld1 = YH.createVertexBuffer("previousWorld1", 4, 4), HH.previousWorld2 = YH.createVertexBuffer("previousWorld2", 8, 4), HH.previousWorld3 = YH.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject();
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (VH.updateDirectly(GH.instancesData, 0, JH), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || YH.updateDirectly(GH.instancesPreviousData, 0, JH));
        this._processInstancedBuffers(sH, OH), TH && void 0 !== hH && (this.kh()._activeIndices.addCount(HH.indexCount * JH, !1), RH._currentDrawContext && (RH._currentDrawContext.useInstancing = !0), this._bind(HH, TH, hH), this._draw(HH, hH, JH)), !this._scene.needsPreviousWorldMatrices || FH || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || YH.updateDirectly(GH.instancesData, 0, JH);
      }
      _renderWithInstances(HH, IH, EH, RH, hH) {
        const TH = EH.visibleInstances[HH._id],
          sH = TH ? TH.length : 0,
          eH = EH.parent,
          GH = eH.instancesBufferSize,
          AH = 16 * (sH + 1) * 4;
        for (; eH.instancesBufferSize < AH;) eH.instancesBufferSize *= 2;
        return eH.instancesData && GH == eH.instancesBufferSize || (eH.instancesData = new Float32Array(eH.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !eH.instancesPreviousData || GH != eH.instancesBufferSize) && (eH.instancesPreviousData = new Float32Array(eH.instancesBufferSize / 4)), this._updateInstancedBuffers(HH, EH, GH, hH, IH, RH), hH.unbindInstanceAttributes(), this;
      }
      _renderWithThinInstances(HH, IH, EH, RH) {
        var hH, TH;
        const sH = null !== (hH = null === (TH = this._thinInstanceDataStorage) || void 0 === TH ? void 0 : TH.instancesCount) && void 0 !== hH ? hH : 0;
        this.kh()._activeIndices.addCount(HH.indexCount * sH, !1), RH._currentDrawContext && (RH._currentDrawContext.useInstancing = !0), this._bind(HH, EH, IH), this._draw(HH, IH, sH), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, sH) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), RH.unbindInstanceAttributes();
      }
      _processInstancedBuffers(HH, IH) {}
      _processRendering(HH, IH, EH, RH, hH, TH, sH, eH) {
        const GH = this.kh(),
          AH = GH.getEngine();
        if (RH = this._getRenderingFillMode(RH), TH && IH.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(IH, RH, EH, AH), this;
        if (TH) this._renderWithInstances(IH, RH, hH, EH, AH);else {
          AH._currentDrawContext && (AH._currentDrawContext.useInstancing = !1);
          let EH = 0;
          hH.renderSelf[IH._id] && (sH && sH(!1, HH.getWorldMatrix(), eH), EH++, this._draw(IH, RH, this._instanceDataStorage.overridenInstanceCount));
          const TH = hH.visibleInstances[IH._id];
          if (TH) {
            const HH = TH.length;
            EH += HH;
            for (let EH = 0; EH < HH; EH++) {
              const HH = TH[EH].getWorldMatrix();
              sH && sH(!0, HH, eH), this._draw(IH, RH);
            }
          }
          GH._activeIndices.addCount(IH.indexCount * EH, !1);
        }
        return this;
      }
      _disposeInstanceDataStorageRenderPass(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null !== HH && void 0 !== HH && HH.instancesBuffer && (IH && HH.instancesBuffer.dispose(), HH.instancesBuffer = null), null !== HH && void 0 !== HH && HH.instancesPreviousBuffer && (IH && HH.instancesPreviousBuffer.dispose(), HH.instancesPreviousBuffer = null);
      }
      _rebuild() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const IH in this._instanceDataStorage.renderPasses) {
          const EH = this._instanceDataStorage.renderPasses[IH];
          this._disposeInstanceDataStorageRenderPass(EH, HH);
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, HH), this._userInstancedBuffersStorage) {
          for (const IH in this._userInstancedBuffersStorage.vertexBuffers) {
            const EH = this._userInstancedBuffersStorage.vertexBuffers[IH];
            EH && (HH && EH.dispose(), this._userInstancedBuffersStorage.vertexBuffers[IH] = null);
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {});
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(HH);
      }
      _releaseRenderPassId(HH) {
        var IH;
        const EH = this._instanceDataStorage.renderPasses[HH];
        if (EH && (this._disposeInstanceDataStorageRenderPass(EH, !0), delete this._instanceDataStorage.renderPasses[HH]), null !== (IH = this._userInstancedBuffersStorage) && void 0 !== IH && IH.renderPasses) {
          const IH = this._userInstancedBuffersStorage.renderPasses[HH];
          if (IH) for (const HH in IH) {
            var RH;
            null === (RH = IH[HH]) || void 0 === RH || RH.dispose();
          }
          delete this._userInstancedBuffersStorage.renderPasses[HH];
        }
      }
      _freeze() {
        if (this.BJ) {
          for (let HH = 0; HH < this.BJ.length; HH++) this._getInstancesRenderList(HH);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0;
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const HH in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[HH].previousBatch = null;
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null);
      }
      renderWithRenderPassId(HH, IH, EH, RH) {
        let hH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const TH = this._scene.getEngine(),
          sH = TH.currentRenderPassId;
        if (void 0 !== HH && (TH.currentRenderPassId = HH), RH) (!hH || hH && RH.isInFrustum(this._scene._frustumPlanes)) && this.render(RH, !!IH, EH);else for (let eH = 0; eH < this.BJ.length; eH++) {
          const HH = this.BJ[eH];
          (!hH || hH && HH.isInFrustum(this._scene._frustumPlanes)) && this.render(HH, !!IH, EH);
        }
        return void 0 !== HH && (TH.currentRenderPassId = sH), this;
      }
      directRender() {
        if (!this.BJ) return this;
        for (const HH of this.BJ) this.render(HH, !1);
        return this;
      }
      render(HH, IH, EH) {
        var RH, hH, TH, sH, eH;
        const GH = this.kh(),
          AH = GH.getEngine();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const VH = null !== (RH = null === (hH = GH.activeCameras) || void 0 === hH ? void 0 : hH.length) && void 0 !== RH ? RH : 0,
          YH = VH > 1 && GH.activeCamera === GH.activeCameras[0] || VH <= 1,
          QH = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== AH.currentRenderPassId;
        if (YH && this._checkOcclusionQuery(QH) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const JH = this._getInstancesRenderList(HH._id, !!EH);
        if (JH.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let OH = 0,
          rH = null;
        this.ignoreCameraMaxZ && GH.activeCamera && !GH._isInIntermediateRendering() && (OH = GH.activeCamera.IM, rH = GH.activeCamera, GH.activeCamera.IM = 0, GH.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const FH = HH.getRenderingMesh(),
          MH = JH.hardwareInstancedRendering[HH._id] || FH.hasThinInstances || !!this._userInstancedBuffersStorage && !HH.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          NH = this._instanceDataStorage,
          iI = HH.sI();
        if (!iI) return rH && (rH.IM = OH, GH.updateTransformMatrix(!0)), this;
        if (NH.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === iI) {
          if (iI._storeEffectOnSubMeshes && (null === (TH = HH._drawWrapper) || void 0 === TH || !TH._wasPreviouslyReady) || !iI._storeEffectOnSubMeshes && !iI._getDrawWrapper()._wasPreviouslyReady) return rH && (rH.IM = OH, GH.updateTransformMatrix(!0)), this;
        } else {
          if (iI._storeEffectOnSubMeshes) {
            if (!iI.isReadyForSubMesh(this, HH, MH)) return rH && (rH.IM = OH, GH.updateTransformMatrix(!0)), this;
          } else if (!iI.isReady(this, MH)) return rH && (rH.IM = OH, GH.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = iI;
        }
        if (IH) {
          const HH = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === HH.alphaModes.length) AH.setAlphaMode(HH.alphaMode);else for (let IH = 0; IH < HH.alphaModes.length; IH++) {
            const EH = HH.alphaModes[IH];
            AH.setAlphaMode(void 0 !== EH ? EH : 2, !1, IH);
          }
        }
        let DH;
        DH = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? HH._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const PH = null !== (sH = null === (eH = DH) || void 0 === eH ? void 0 : eH.effect) && void 0 !== sH ? sH : null;
        for (const yH of GH._beforeRenderingMeshStage) yH.action(this, HH, JH, PH);
        if (!DH || !PH) return rH && (rH.IM = OH, GH.updateTransformMatrix(!0)), this;
        const XH = EH || this;
        let mI;
        if (!NH.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const HH = XH._getWorldMatrixDeterminant();
          mI = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), HH < 0 && (mI = mI === tH.b.ClockWiseSideOrientation ? tH.b.CounterClockWiseSideOrientation : tH.b.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = mI;
        }
        const ZH = this._internalMeshDataInfo._effectiveMaterial._preBind(DH, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && AH.setDepthWrite(!0);
        const qH = this._internalMeshDataInfo._effectiveMaterial,
          LH = qH.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), MH || this._bind(HH, PH, LH, !1);
        const gH = XH.getWorldMatrix();
        qH._storeEffectOnSubMeshes ? qH.bindForSubMesh(gH, this, HH) : qH.bind(gH, this), !qH.backFaceCulling && qH.separateCullingPass && (AH.setState(!0, qH.zOffset, !1, !ZH, qH.cullBackFaces, qH.LF, qH.zOffsetUnits), this._processRendering(this, HH, PH, LH, JH, MH, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), AH.setState(!0, qH.zOffset, !1, ZH, qH.cullBackFaces, qH.LF, qH.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(HH)), this._processRendering(this, HH, PH, LH, JH, MH, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (const yH of GH._afterRenderingMeshStage) yH.action(this, HH, JH, PH);
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), rH && (rH.IM = OH, GH.updateTransformMatrix(!0)), 2 !== GH.performancePriority || NH.isFrozen || this._freeze(), this;
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(uH.t.MatricesWeightsKind) && (this.isVerticesDataPresent(uH.t.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights());
      }
      _normalizeSkinFourWeights() {
        const HH = this.getVerticesData(uH.t.MatricesWeightsKind),
          IH = HH.length;
        for (let EH = 0; EH < IH; EH += 4) {
          const IH = HH[EH] + HH[EH + 1] + HH[EH + 2] + HH[EH + 3];
          if (0 === IH) HH[EH] = 1;else {
            const RH = 1 / IH;
            HH[EH] *= RH, HH[EH + 1] *= RH, HH[EH + 2] *= RH, HH[EH + 3] *= RH;
          }
        }
        this.setVerticesData(uH.t.MatricesWeightsKind, HH);
      }
      _normalizeSkinWeightsAndExtra() {
        const HH = this.getVerticesData(uH.t.MatricesWeightsExtraKind),
          IH = this.getVerticesData(uH.t.MatricesWeightsKind),
          EH = IH.length;
        for (let RH = 0; RH < EH; RH += 4) {
          let EH = IH[RH] + IH[RH + 1] + IH[RH + 2] + IH[RH + 3];
          if (EH += HH[RH] + HH[RH + 1] + HH[RH + 2] + HH[RH + 3], 0 === EH) IH[RH] = 1;else {
            const hH = 1 / EH;
            IH[RH] *= hH, IH[RH + 1] *= hH, IH[RH + 2] *= hH, IH[RH + 3] *= hH, HH[RH] *= hH, HH[RH + 1] *= hH, HH[RH + 2] *= hH, HH[RH + 3] *= hH;
          }
        }
        this.setVerticesData(uH.t.MatricesWeightsKind, IH), this.setVerticesData(uH.t.MatricesWeightsKind, HH);
      }
      validateSkinning() {
        const HH = this.getVerticesData(uH.t.MatricesWeightsExtraKind),
          IH = this.getVerticesData(uH.t.MatricesWeightsKind);
        if (null === IH || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          JN: "not skinned"
        };
        const EH = IH.length;
        let RH = 0,
          hH = 0,
          TH = 0,
          sH = 0;
        const eH = null === HH ? 4 : 8,
          GH = [];
        for (let JH = 0; JH <= eH; JH++) GH[JH] = 0;
        for (let JH = 0; JH < EH; JH += 4) {
          let EH = IH[JH],
            AH = EH,
            VH = 0 === AH ? 0 : 1;
          for (let hH = 1; hH < eH; hH++) {
            const TH = hH < 4 ? IH[JH + hH] : HH[JH + hH - 4];
            TH > EH && RH++, 0 !== TH && VH++, AH += TH, EH = TH;
          }
          if (GH[VH]++, VH > TH && (TH = VH), 0 === AH) hH++;else {
            const EH = 1 / AH;
            let RH = 0;
            for (let hH = 0; hH < eH; hH++) RH += hH < 4 ? Math.abs(IH[JH + hH] - IH[JH + hH] * EH) : Math.abs(HH[JH + hH - 4] - HH[JH + hH - 4] * EH);
            RH > .001 && sH++;
          }
        }
        const AH = this.skeleton.bones.length,
          VH = this.getVerticesData(uH.t.MatricesIndicesKind),
          YH = this.getVerticesData(uH.t.MatricesIndicesExtraKind);
        let QH = 0;
        for (let JH = 0; JH < EH; JH += 4) for (let HH = 0; HH < eH; HH++) {
          const IH = HH < 4 ? VH[JH + HH] : YH[JH + HH - 4];
          (IH >= AH || IH < 0) && QH++;
        }
        return {
          skinned: !0,
          valid: 0 === hH && 0 === sH && 0 === QH,
          JN: "Number of Weights = " + EH / 4 + "\nMaximum influences = " + TH + "\nMissing Weights = " + hH + "\nNot Sorted = " + RH + "\nNot Normalized = " + sH + "\nWeightCounts = [" + GH + "]\nNumber of bones = " + AH + "\nBad Bone Indices = " + QH
        };
      }
      _checkDelayState() {
        const HH = this.kh();
        return this._geometry ? this._geometry.load(HH) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(HH)), this;
      }
      _queueLoad(HH) {
        HH.addPendingData(this);
        const IH = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const EH = await HH._loadDelayedFileAsync(this.delayLoadingFile, IH, !0);
            EH instanceof ArrayBuffer ? this._delayLoadingFunction(EH, this) : this._delayLoadingFunction(JSON.parse(EH), this);
            for (const HH of this.instances) HH.refreshBoundingInfo(), HH._syncSubMeshes();
            this.delayLoadState = 1, HH.removePendingData(this);
          } catch (EH) {
            HH.removePendingData(this), HH.sH || SH.e.Error('Unable to delay load geometry data for mesh "'.concat(this.name, '" from "').concat(this.delayLoadingFile, '": ').concat(EH));
          }
        })(), this;
      }
      isInFrustum(HH) {
        return 2 !== this.delayLoadState && !!super.isInFrustum(HH) && (this._checkDelayState(), !0);
      }
      setMaterialById(HH) {
        const IH = this.kh().materials;
        let EH;
        for (EH = IH.length - 1; EH > -1; EH--) if (IH[EH].id === HH) return this.material = IH[EH], this;
        const RH = this.kh().multiMaterials;
        for (EH = RH.length - 1; EH > -1; EH--) if (RH[EH].id === HH) return this.material = RH[EH], this;
        return this;
      }
      getAnimatables() {
        const HH = [];
        return this.material && HH.push(this.material), this.skeleton && HH.push(this.skeleton), HH;
      }
      bakeTransformIntoVertices(HH) {
        if (!this.isVerticesDataPresent(uH.t.PositionKind)) return this;
        const IH = this.BJ.splice(0);
        this._resetPointsArrayCache();
        let EH = this.getVerticesData(uH.t.PositionKind);
        const RH = nH.x.Zero();
        let hH;
        for (hH = 0; hH < EH.length; hH += 3) nH.x.TransformCoordinatesFromFloatsToRef(EH[hH], EH[hH + 1], EH[hH + 2], HH, RH).toArray(EH, hH);
        if (this.setVerticesData(uH.t.PositionKind, EH, this.getVertexBuffer(uH.t.PositionKind).isUpdatable()), this.isVerticesDataPresent(uH.t.NormalKind)) {
          for (EH = this.getVerticesData(uH.t.NormalKind), hH = 0; hH < EH.length; hH += 3) nH.x.TransformNormalFromFloatsToRef(EH[hH], EH[hH + 1], EH[hH + 2], HH, RH).normalize().toArray(EH, hH);
          this.setVerticesData(uH.t.NormalKind, EH, this.getVertexBuffer(uH.t.NormalKind).isUpdatable());
        }
        if (this.isVerticesDataPresent(uH.t.TangentKind)) {
          for (EH = this.getVerticesData(uH.t.TangentKind), hH = 0; hH < EH.length; hH += 4) nH.x.TransformNormalFromFloatsToRef(EH[hH], EH[hH + 1], EH[hH + 2], HH, RH).normalize().toArray(EH, hH);
          this.setVerticesData(uH.t.TangentKind, EH, this.getVertexBuffer(uH.t.TangentKind).isUpdatable());
        }
        return HH.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.BJ = IH, this;
      }
      bakeCurrentTransformIntoVertices() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.aJ(!0)), this.resetLocalMatrix(HH), this;
      }
      get _positions() {
        return this._internalAbstractMeshDataInfo._positions || this._geometry && this._geometry._positions || null;
      }
      _resetPointsArrayCache() {
        return this._geometry && this._geometry._resetPointsArrayCache(), this;
      }
      _generatePointsArray() {
        return !!this._geometry && this._geometry._generatePointsArray();
      }
      clone() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = arguments.length > 2 ? arguments[2] : void 0,
          RH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (IH && void 0 === IH._addToSceneRootNodes) {
          const EH = IH;
          return AI.source = this, AI.doNotCloneChildren = EH.doNotCloneChildren, AI.clonePhysicsImpostor = EH.clonePhysicsImpostor, AI.cloneThinInstances = EH.cloneThinInstances, new VI(HH, this.kh(), AI);
        }
        return new VI(HH, this.kh(), IH, this, EH, RH);
      }
      dispose(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const EH = this._internalMeshDataInfo;
        if (EH._onBeforeDrawObservable && EH._onBeforeDrawObservable.clear(), EH._onBeforeBindObservable && EH._onBeforeBindObservable.clear(), EH._onBeforeRenderObservable && EH._onBeforeRenderObservable.clear(), EH._onAfterRenderObservable && EH._onAfterRenderObservable.clear(), EH._onBetweenPassObservable && EH._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (EH.meshMap) for (const HH in EH.meshMap) {
            const IH = EH.meshMap[HH];
            IH && (IH._internalMeshDataInfo._source = null, EH.meshMap[HH] = void 0);
          }
          EH._source && EH._source._internalMeshDataInfo.meshMap && (EH._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0);
        } else {
          const HH = this.kh().meshes;
          for (const IH of HH) {
            const HH = IH;
            HH._internalMeshDataInfo && HH._internalMeshDataInfo._source && HH._internalMeshDataInfo._source === this && (HH._internalMeshDataInfo._source = null);
          }
        }
        EH._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(HH, IH);
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(HH, IH, EH, RH, hH, TH) {
        let sH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          eH = arguments.length > 7 ? arguments[7] : void 0;
        const GH = this.kh();
        return (0, UH.t)(HH, HH => {
          const eH = HH.width,
            GH = HH.height,
            AH = this.getEngine().createCanvas(eH, GH).getContext("2d");
          AH.drawImage(HH, 0, 0);
          const VH = AH.getImageData(0, 0, eH, GH).data;
          this.applyDisplacementMapFromBuffer(VH, eH, GH, IH, EH, hH, TH, sH), RH && RH(this);
        }, eH || (() => {}), GH.offlineProvider), this;
      }
      applyDisplacementMapFromBuffer(HH, IH, EH, RH, hH, TH, sH) {
        let eH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(uH.t.PositionKind) || !this.isVerticesDataPresent(uH.t.NormalKind) || !this.isVerticesDataPresent(uH.t.UVKind)) return SH.e.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const GH = this.getVerticesData(uH.t.PositionKind, !0, !0),
          AH = this.getVerticesData(uH.t.NormalKind),
          VH = this.getVerticesData(uH.t.UVKind);
        let YH = nH.x.Zero();
        const QH = nH.x.Zero(),
          JH = nH.t.Zero();
        TH = TH || nH.t.Zero(), sH = sH || new nH.t(1, 1);
        for (let OH = 0; OH < GH.length; OH += 3) {
          nH.x.FromArrayToRef(GH, OH, YH), nH.x.FromArrayToRef(AH, OH, QH), nH.t.FromArrayToRef(VH, OH / 3 * 2, JH);
          const eH = 4 * ((Math.abs(JH.x * sH.x + TH.x % 1) * (IH - 1) % IH | 0) + (Math.abs(JH.y * sH.y + TH.y % 1) * (EH - 1) % EH | 0) * IH),
            rH = .3 * (HH[eH] / 255) + .59 * (HH[eH + 1] / 255) + .11 * (HH[eH + 2] / 255);
          QH.normalize(), QH.scaleInPlace(RH + (hH - RH) * rH), YH = YH.add(QH), YH.toArray(GH, OH);
        }
        return lH.c.ComputeNormals(GH, this.uO(), AH), eH ? (this.setVerticesData(uH.t.PositionKind, GH), this.setVerticesData(uH.t.NormalKind, AH), this.setVerticesData(uH.t.UVKind, VH)) : (this.updateVerticesData(uH.t.PositionKind, GH), this.updateVerticesData(uH.t.NormalKind, AH)), this;
      }
      _getFlattenedNormals(HH, IH) {
        const EH = new Float32Array(3 * HH.length);
        let RH = 0;
        const hH = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let TH = 0; TH < HH.length; TH += 3) {
          const sH = nH.x.Qh(IH, 3 * HH[TH]),
            eH = nH.x.Qh(IH, 3 * HH[TH + 1]),
            GH = nH.x.Qh(IH, 3 * HH[TH + 2]),
            AH = sH.subtract(eH),
            VH = GH.subtract(eH),
            YH = nH.x.Normalize(nH.x.Cross(AH, VH));
          hH && YH.scaleInPlace(-1);
          for (let HH = 0; HH < 3; HH++) EH[RH++] = YH.x, EH[RH++] = YH.y, EH[RH++] = YH.z;
        }
        return EH;
      }
      _convertToUnIndexedMesh() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IH = this.getVerticesDataKinds().filter(HH => {
            var IH;
            return !(null !== (IH = this.getVertexBuffer(HH)) && void 0 !== IH && IH.getIsInstanced());
          }),
          EH = this.uO(!1, !0),
          RH = {},
          hH = (HH, IH) => {
            const RH = new Float32Array(EH.length * IH);
            let hH = 0;
            for (let TH = 0; TH < EH.length; TH++) for (let sH = 0; sH < IH; sH++) RH[hH++] = HH[EH[TH] * IH + sH];
            return RH;
          },
          TH = this.getBoundingInfo(),
          sH = this.KN ? this.BJ.slice(0) : [];
        for (const eH of IH) RH[eH] = this.getVerticesData(eH);
        for (const eH of IH) {
          const IH = this.getVertexBuffer(eH),
            TH = IH.getSize();
          if (HH && eH === uH.t.NormalKind) {
            const HH = this._getFlattenedNormals(EH, RH[uH.t.PositionKind]);
            this.setVerticesData(uH.t.NormalKind, HH, IH.isUpdatable(), TH);
          } else this.setVerticesData(eH, hH(RH[eH], TH), IH.isUpdatable(), TH);
        }
        if (this.morphTargetManager) {
          for (let IH = 0; IH < this.morphTargetManager.numTargets; IH++) {
            const RH = this.morphTargetManager.getTarget(IH),
              TH = RH.getPositions();
            RH.setPositions(hH(TH, 3));
            const sH = RH.getNormals();
            sH && RH.setNormals(HH ? this._getFlattenedNormals(EH, TH) : hH(sH, 3));
            const eH = RH.getTangents();
            eH && RH.setTangents(hH(eH, 3));
            const GH = RH.getUVs();
            GH && RH.setUVs(hH(GH, 2));
            const AH = RH.getColors();
            AH && RH.setColors(hH(AH, 4));
          }
          this.morphTargetManager.synchronize();
        }
        for (let eH = 0; eH < EH.length; eH++) EH[eH] = eH;
        this.setIndices(EH), this._unIndexed = !0, this.releaseSubMeshes();
        for (const eH of sH) {
          const HH = eH.getBoundingInfo();
          zH.c.AddToMesh(eH.materialIndex, eH.indexStart, eH.indexCount, eH.indexStart, eH.indexCount, this).setBoundingInfo(HH);
        }
        return this.setBoundingInfo(TH), this.synchronizeInstances(), this;
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0);
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh();
      }
      flipFaces() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IH = lH.c.ExtractFromMesh(this);
        let EH;
        if (HH && this.isVerticesDataPresent(uH.t.NormalKind) && IH.normals) {
          for (EH = 0; EH < IH.normals.length; EH++) IH.normals[EH] *= -1;
          this.setVerticesData(uH.t.NormalKind, IH.normals, this.isVertexBufferUpdatable(uH.t.NormalKind));
        }
        if (IH.indices) {
          let HH;
          for (EH = 0; EH < IH.indices.length; EH += 3) HH = IH.indices[EH + 1], IH.indices[EH + 1] = IH.indices[EH + 2], IH.indices[EH + 2] = HH;
          this.setIndices(IH.indices, null, this.isVertexBufferUpdatable(uH.t.PositionKind), !0);
        }
        return this;
      }
      increaseVertices() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const IH = lH.c.ExtractFromMesh(this),
          EH = IH.indices && !Array.isArray(IH.indices) && Array.from ? Array.from(IH.indices) : IH.indices,
          RH = IH.positions && !Array.isArray(IH.positions) && Array.from ? Array.from(IH.positions) : IH.positions,
          hH = IH.uvs && !Array.isArray(IH.uvs) && Array.from ? Array.from(IH.uvs) : IH.uvs,
          TH = IH.normals && !Array.isArray(IH.normals) && Array.from ? Array.from(IH.normals) : IH.normals;
        if (EH && RH) {
          IH.indices = EH, IH.positions = RH, hH && (IH.uvs = hH), TH && (IH.normals = TH);
          const sH = HH + 1,
            eH = [];
          for (let HH = 0; HH < sH + 1; HH++) eH[HH] = [];
          let GH, AH;
          const VH = new nH.x(0, 0, 0),
            YH = new nH.x(0, 0, 0),
            QH = new nH.t(0, 0),
            JH = [],
            OH = [],
            rH = [];
          let FH,
            MH,
            NH,
            iI = RH.length;
          hH && (MH = hH.length), TH && (NH = TH.length);
          for (let HH = 0; HH < EH.length; HH += 3) {
            OH[0] = EH[HH], OH[1] = EH[HH + 1], OH[2] = EH[HH + 2];
            for (let HH = 0; HH < 3; HH++) if (GH = OH[HH], AH = OH[(HH + 1) % 3], void 0 === rH[GH] && void 0 === rH[AH] ? (rH[GH] = [], rH[AH] = []) : (void 0 === rH[GH] && (rH[GH] = []), void 0 === rH[AH] && (rH[AH] = [])), void 0 === rH[GH][AH] && void 0 === rH[AH][GH]) {
              rH[GH][AH] = [], VH.x = (RH[3 * AH] - RH[3 * GH]) / sH, VH.y = (RH[3 * AH + 1] - RH[3 * GH + 1]) / sH, VH.z = (RH[3 * AH + 2] - RH[3 * GH + 2]) / sH, TH && (YH.x = (TH[3 * AH] - TH[3 * GH]) / sH, YH.y = (TH[3 * AH + 1] - TH[3 * GH + 1]) / sH, YH.z = (TH[3 * AH + 2] - TH[3 * GH + 2]) / sH), hH && (QH.x = (hH[2 * AH] - hH[2 * GH]) / sH, QH.y = (hH[2 * AH + 1] - hH[2 * GH + 1]) / sH), rH[GH][AH].push(GH);
              for (let HH = 1; HH < sH; HH++) rH[GH][AH].push(RH.length / 3), RH[iI++] = RH[3 * GH] + HH * VH.x, RH[iI++] = RH[3 * GH + 1] + HH * VH.y, RH[iI++] = RH[3 * GH + 2] + HH * VH.z, TH && (TH[NH++] = TH[3 * GH] + HH * YH.x, TH[NH++] = TH[3 * GH + 1] + HH * YH.y, TH[NH++] = TH[3 * GH + 2] + HH * YH.z), hH && (hH[MH++] = hH[2 * GH] + HH * QH.x, hH[MH++] = hH[2 * GH + 1] + HH * QH.y);
              rH[GH][AH].push(AH), rH[AH][GH] = [], FH = rH[GH][AH].length;
              for (let HH = 0; HH < FH; HH++) rH[AH][GH][HH] = rH[GH][AH][FH - 1 - HH];
            }
            eH[0][0] = EH[HH], eH[1][0] = rH[EH[HH]][EH[HH + 1]][1], eH[1][1] = rH[EH[HH]][EH[HH + 2]][1];
            for (let IH = 2; IH < sH; IH++) {
              eH[IH][0] = rH[EH[HH]][EH[HH + 1]][IH], eH[IH][IH] = rH[EH[HH]][EH[HH + 2]][IH], VH.x = (RH[3 * eH[IH][IH]] - RH[3 * eH[IH][0]]) / IH, VH.y = (RH[3 * eH[IH][IH] + 1] - RH[3 * eH[IH][0] + 1]) / IH, VH.z = (RH[3 * eH[IH][IH] + 2] - RH[3 * eH[IH][0] + 2]) / IH, TH && (YH.x = (TH[3 * eH[IH][IH]] - TH[3 * eH[IH][0]]) / IH, YH.y = (TH[3 * eH[IH][IH] + 1] - TH[3 * eH[IH][0] + 1]) / IH, YH.z = (TH[3 * eH[IH][IH] + 2] - TH[3 * eH[IH][0] + 2]) / IH), hH && (QH.x = (hH[2 * eH[IH][IH]] - hH[2 * eH[IH][0]]) / IH, QH.y = (hH[2 * eH[IH][IH] + 1] - hH[2 * eH[IH][0] + 1]) / IH);
              for (let HH = 1; HH < IH; HH++) eH[IH][HH] = RH.length / 3, RH[iI++] = RH[3 * eH[IH][0]] + HH * VH.x, RH[iI++] = RH[3 * eH[IH][0] + 1] + HH * VH.y, RH[iI++] = RH[3 * eH[IH][0] + 2] + HH * VH.z, TH && (TH[NH++] = TH[3 * eH[IH][0]] + HH * YH.x, TH[NH++] = TH[3 * eH[IH][0] + 1] + HH * YH.y, TH[NH++] = TH[3 * eH[IH][0] + 2] + HH * YH.z), hH && (hH[MH++] = hH[2 * eH[IH][0]] + HH * QH.x, hH[MH++] = hH[2 * eH[IH][0] + 1] + HH * QH.y);
            }
            eH[sH] = rH[EH[HH + 1]][EH[HH + 2]], JH.push(eH[0][0], eH[1][0], eH[1][1]);
            for (let HH = 1; HH < sH; HH++) {
              let IH;
              for (IH = 0; IH < HH; IH++) JH.push(eH[HH][IH], eH[HH + 1][IH], eH[HH + 1][IH + 1]), JH.push(eH[HH][IH], eH[HH + 1][IH + 1], eH[HH][IH + 1]);
              JH.push(eH[HH][IH], eH[HH + 1][IH], eH[HH + 1][IH + 1]);
            }
          }
          IH.indices = JH, IH.applyToMesh(this, this.isVertexBufferUpdatable(uH.t.PositionKind));
        } else SH.e.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions");
      }
      forceSharedVertices() {
        const HH = lH.c.ExtractFromMesh(this),
          IH = HH.uvs,
          EH = HH.indices,
          RH = HH.positions,
          hH = HH.colors,
          TH = HH.matricesIndices,
          sH = HH.matricesWeights,
          eH = HH.matricesIndicesExtra,
          GH = HH.matricesWeightsExtra;
        if (void 0 === EH || void 0 === RH || null === EH || null === RH) SH.e.Warn("VertexData contains empty entries");else {
          const AH = [],
            VH = [],
            YH = [],
            QH = [],
            JH = [],
            OH = [],
            rH = [],
            FH = [];
          let MH,
            NH = 0;
          const iI = {};
          let DH, PH;
          for (let HH = 0; HH < EH.length; HH += 3) {
            PH = [EH[HH], EH[HH + 1], EH[HH + 2]], MH = [];
            for (let HH = 0; HH < 3; HH++) {
              MH[HH] = "";
              for (let IH = 0; IH < 3; IH++) Math.abs(RH[3 * PH[HH] + IH]) < 1e-8 && (RH[3 * PH[HH] + IH] = 0), MH[HH] += RH[3 * PH[HH] + IH] + "|";
            }
            if (MH[0] != MH[1] && MH[0] != MH[2] && MH[1] != MH[2]) for (let HH = 0; HH < 3; HH++) {
              if (DH = iI[MH[HH]], void 0 === DH) {
                iI[MH[HH]] = NH, DH = NH++;
                for (let IH = 0; IH < 3; IH++) AH.push(RH[3 * PH[HH] + IH]);
                if (null !== hH && void 0 !== hH) for (let IH = 0; IH < 4; IH++) QH.push(hH[4 * PH[HH] + IH]);
                if (null !== IH && void 0 !== IH) for (let EH = 0; EH < 2; EH++) YH.push(IH[2 * PH[HH] + EH]);
                if (null !== TH && void 0 !== TH) for (let IH = 0; IH < 4; IH++) JH.push(TH[4 * PH[HH] + IH]);
                if (null !== sH && void 0 !== sH) for (let IH = 0; IH < 4; IH++) OH.push(sH[4 * PH[HH] + IH]);
                if (null !== eH && void 0 !== eH) for (let IH = 0; IH < 4; IH++) rH.push(eH[4 * PH[HH] + IH]);
                if (null !== GH && void 0 !== GH) for (let IH = 0; IH < 4; IH++) FH.push(GH[4 * PH[HH] + IH]);
              }
              VH.push(DH);
            }
          }
          const XH = [];
          lH.c.ComputeNormals(AH, VH, XH), HH.positions = AH, HH.indices = VH, HH.normals = XH, null !== IH && void 0 !== IH && (HH.uvs = YH), null !== hH && void 0 !== hH && (HH.colors = QH), null !== TH && void 0 !== TH && (HH.matricesIndices = JH), null !== sH && void 0 !== sH && (HH.matricesWeights = OH), null !== eH && void 0 !== eH && (HH.matricesIndicesExtra = rH), null !== sH && void 0 !== sH && (HH.matricesWeightsExtra = FH), HH.applyToMesh(this, this.isVertexBufferUpdatable(uH.t.PositionKind));
        }
      }
      static _instancedMeshFactory(HH, IH) {
        throw (0, HI.n)("InstancedMesh");
      }
      static _PhysicsImpostorParser(HH, IH, EH) {
        throw (0, HI.n)("PhysicsImpostor");
      }
      createInstance(HH) {
        const IH = VI._instancedMeshFactory(HH, this);
        return IH.parent = this.parent, IH;
      }
      synchronizeInstances() {
        for (let HH = 0; HH < this.instances.length; HH++) {
          this.instances[HH]._syncSubMeshes();
        }
        return this;
      }
      optimizeIndices(HH) {
        const IH = this.uO(),
          EH = this.getVerticesData(uH.t.PositionKind);
        if (!EH || !IH) return this;
        const RH = [];
        for (let TH = 0; TH < EH.length; TH += 3) RH.push(nH.x.Qh(EH, TH));
        const hH = [];
        return cH.e.SyncAsyncForLoop(RH.length, 40, HH => {
          const IH = RH.length - 1 - HH,
            EH = RH[IH];
          for (let TH = 0; TH < IH; ++TH) {
            const HH = RH[TH];
            if (EH.equals(HH)) {
              hH[IH] = TH;
              break;
            }
          }
        }, () => {
          for (let HH = 0; HH < IH.length; ++HH) IH[HH] = hH[IH[HH]] || IH[HH];
          const EH = this.BJ.slice(0);
          this.setIndices(IH), this.BJ = EH, HH && HH(this);
        }), this;
      }
      serialize() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        HH.name = this.name, HH.id = this.id, HH.uniqueId = this.uniqueId, HH.type = this.getClassName(), BH.c && BH.c.HasTags(this) && (HH.tags = BH.c.GetTags(this)), HH.position = this.position.GM(), this.rotationQuaternion ? HH.rotationQuaternion = this.rotationQuaternion.GM() : this.rotation && (HH.rotation = this.rotation.GM()), HH.WJ = this.WJ.GM(), this._postMultiplyPivotMatrix ? HH.pivotMatrix = this.getPivotMatrix().GM() : HH.localMatrix = this.getPivotMatrix().GM(), HH.isEnabled = this.isEnabled(!1), HH.isVisible = this.isVisible, HH.infiniteDistance = this.infiniteDistance, HH.pickable = this.aQ, HH.receiveShadows = this.receiveShadows, HH.billboardMode = this.billboardMode, HH.visibility = this.visibility, HH.CJ = this.CJ, HH.checkCollisions = this.checkCollisions, HH.ellipsoid = this.ellipsoid.GM(), HH.ellipsoidOffset = this.ellipsoidOffset.GM(), HH.hI = this.hI, HH.isBlocker = this.isBlocker, HH.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (HH.IT = !0), this.parent && this.parent._serializeAsParent(HH), HH.isUnIndexed = this.isUnIndexed;
        const IH = this._geometry;
        if (IH && this.BJ) {
          HH.geometryUniqueId = IH.uniqueId, HH.geometryId = IH.id, HH.BJ = [];
          for (let IH = 0; IH < this.BJ.length; IH++) {
            const EH = this.BJ[IH];
            HH.BJ.push({
              materialIndex: EH.materialIndex,
              verticesStart: EH.verticesStart,
              verticesCount: EH.verticesCount,
              indexStart: EH.indexStart,
              indexCount: EH.indexCount
            });
          }
        }
        if (this.material ? this.material.doNotSerialize || (HH.materialUniqueId = this.material.uniqueId, HH.materialId = this.material.id) : (this.material = null, HH.materialUniqueId = this._scene.defaultMaterial.uniqueId, HH.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (HH.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (HH.skeletonId = this.skeleton.id, HH.skeletonUniqueId = this.skeleton.uniqueId, HH.numBoneInfluencers = this.numBoneInfluencers), this.kh()._getComponent(II.b.NAME_PHYSICSENGINE)) {
          var EH;
          const IH = null === (EH = this.getPhysicsImpostor) || void 0 === EH ? void 0 : EH.call(this);
          IH && (HH.physicsMass = IH.getParam("CT"), HH.physicsFriction = IH.getParam("friction"), HH.physicsRestitution = IH.getParam("CT"), HH.physicsImpostor = IH.type);
        }
        this.metadata && (HH.metadata = this.metadata), HH.instances = [];
        for (let hH = 0; hH < this.instances.length; hH++) {
          const IH = this.instances[hH];
          if (IH.doNotSerialize) continue;
          const EH = {
            name: IH.name,
            id: IH.id,
            isEnabled: IH.isEnabled(!1),
            isVisible: IH.isVisible,
            aQ: IH.aQ,
            checkCollisions: IH.checkCollisions,
            position: IH.position.GM(),
            WJ: IH.WJ.GM()
          };
          if (IH.parent && IH.parent._serializeAsParent(EH), IH.rotationQuaternion ? EH.rotationQuaternion = IH.rotationQuaternion.GM() : IH.rotation && (EH.rotation = IH.rotation.GM()), this.kh()._getComponent(II.b.NAME_PHYSICSENGINE)) {
            var RH;
            const HH = null === (RH = IH.getPhysicsImpostor) || void 0 === RH ? void 0 : RH.call(IH);
            HH && (EH.physicsMass = HH.getParam("CT"), EH.physicsFriction = HH.getParam("friction"), EH.physicsRestitution = HH.getParam("CT"), EH.physicsImpostor = HH.type);
          }
          IH.metadata && (EH.metadata = IH.metadata), IH.actionManager && (EH.actions = IH.actionManager.serialize(IH.name)), HH.instances.push(EH), bH.c.AppendSerializedAnimations(IH, EH), EH.ranges = IH.serializeAnimationRanges();
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (HH.thinInstances = {
          instancesCount: this._thinInstanceDataStorage.instancesCount,
          matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
          matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
          enablePicking: this.UJ
        }, this._userThinInstanceBuffersStorage)) {
          const IH = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const HH in this._userThinInstanceBuffersStorage.data) IH.data[HH] = Array.from(this._userThinInstanceBuffersStorage.data[HH]), IH.sizes[HH] = this._userThinInstanceBuffersStorage.sizes[HH], IH.strides[HH] = this._userThinInstanceBuffersStorage.strides[HH];
          HH.thinInstances.userThinInstance = IH;
        }
        return bH.c.AppendSerializedAnimations(this, HH), HH.ranges = this.serializeAnimationRanges(), HH.layerMask = this.layerMask, HH.alphaIndex = this.alphaIndex, HH.hasVertexAlpha = this.hasVertexAlpha, HH.overlayAlpha = this.overlayAlpha, HH.overlayColor = this.overlayColor.GM(), HH.renderOverlay = this.renderOverlay, HH.applyFog = this.applyFog, this.actionManager && (HH.actions = this.actionManager.serialize(this.name)), HH;
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.KN) return;
        this._markSubMeshesAsAttributesDirty();
        const HH = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (HH && HH.vertexCount) {
          if (HH.vertexCount !== this.getTotalVertices()) return SH.e.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void (this.morphTargetManager = null);
          if (HH.isUsingTextureForTargets) return;
          for (let IH = 0; IH < HH.numInfluencers; IH++) {
            const EH = HH.getActiveTarget(IH),
              RH = EH.getPositions();
            if (!RH) return void SH.e.Error("Invalid morph target. Target must have positions.");
            this.KN.setVerticesData(uH.t.PositionKind + IH, RH, !1, 3);
            const hH = EH.getNormals();
            hH && this.KN.setVerticesData(uH.t.NormalKind + IH, hH, !1, 3);
            const TH = EH.getTangents();
            TH && this.KN.setVerticesData(uH.t.TangentKind + IH, TH, !1, 3);
            const sH = EH.getUVs();
            sH && this.KN.setVerticesData(uH.t.UVKind + "_" + IH, sH, !1, 2);
            const eH = EH.getUV2s();
            eH && this.KN.setVerticesData(uH.t.UV2Kind + "_" + IH, eH, !1, 2);
            const GH = EH.getColors();
            GH && this.KN.setVerticesData(uH.t.ColorKind + IH, GH, !1, 4);
          }
        } else {
          let HH = 0;
          for (; this.KN.isVerticesDataPresent(uH.t.PositionKind + HH);) this.KN.removeVerticesData(uH.t.PositionKind + HH), this.KN.isVerticesDataPresent(uH.t.NormalKind + HH) && this.KN.removeVerticesData(uH.t.NormalKind + HH), this.KN.isVerticesDataPresent(uH.t.TangentKind + HH) && this.KN.removeVerticesData(uH.t.TangentKind + HH), this.KN.isVerticesDataPresent(uH.t.UVKind + HH) && this.KN.removeVerticesData(uH.t.UVKind + "_" + HH), this.KN.isVerticesDataPresent(uH.t.UV2Kind + HH) && this.KN.removeVerticesData(uH.t.UV2Kind + "_" + HH), this.KN.isVerticesDataPresent(uH.t.ColorKind + HH) && this.KN.removeVerticesData(uH.t.ColorKind + HH), HH++;
        }
      }
      static Parse(HH, IH, EH) {
        let RH,
          hH = !1;
        if (HH.type && "LinesMesh" === HH.type ? RH = VI._LinesMeshParser(HH, IH) : HH.type && "GroundMesh" === HH.type ? RH = VI._GroundMeshParser(HH, IH) : HH.type && "GoldbergMesh" === HH.type ? RH = VI._GoldbergMeshParser(HH, IH) : HH.type && "GreasedLineMesh" === HH.type ? RH = VI._GreasedLineMeshParser(HH, IH) : HH.type && "TrailMesh" === HH.type ? RH = VI._TrailMeshParser(HH, IH) : HH.type && "GaussianSplattingMesh" === HH.type ? (RH = HH._isCompound ? VI._GaussianSplattingCompoundMeshParser(HH, IH) : VI._GaussianSplattingMeshParser(HH, IH), hH = !0) : HH.type && "GaussianSplattingPartProxyMesh" === HH.type ? (RH = VI._GaussianSplattingPartProxyMeshParser(HH, IH), hH = !0) : RH = new VI(HH.name, IH), RH.id = HH.id, RH._waitingParsedUniqueId = HH.uniqueId, BH.c && BH.c.AddTagsTo(RH, HH.tags), RH.position = nH.x.Qh(HH.position), void 0 !== HH.metadata && (RH.metadata = HH.metadata), HH.rotationQuaternion ? RH.rotationQuaternion = nH.h.Qh(HH.rotationQuaternion) : HH.rotation && (RH.rotation = nH.x.Qh(HH.rotation)), RH.WJ = nH.x.Qh(HH.WJ), HH.localMatrix ? RH.setPreTransformMatrix(nH.d.Qh(HH.localMatrix)) : HH.pivotMatrix && RH.setPivotMatrix(nH.d.Qh(HH.pivotMatrix)), RH.hY(HH.isEnabled), RH.isVisible = HH.isVisible, RH.infiniteDistance = HH.infiniteDistance, RH.CJ = !!HH.CJ, RH.showBoundingBox = HH.showBoundingBox, RH.showSubMeshesBoundingBox = HH.showSubMeshesBoundingBox, void 0 !== HH.applyFog && (RH.applyFog = HH.applyFog), void 0 !== HH.pickable && (RH.aQ = HH.pickable), void 0 !== HH.alphaIndex && (RH.alphaIndex = HH.alphaIndex), RH.receiveShadows = HH.receiveShadows, void 0 !== HH.billboardMode && (RH.billboardMode = HH.billboardMode), void 0 !== HH.visibility && (RH.visibility = HH.visibility), RH.checkCollisions = HH.checkCollisions, RH.hI = !!HH.hI, HH.ellipsoid && (RH.ellipsoid = nH.x.Qh(HH.ellipsoid)), HH.ellipsoidOffset && (RH.ellipsoidOffset = nH.x.Qh(HH.ellipsoidOffset)), null != HH.overrideMaterialSideOrientation && (RH.sideOrientation = HH.overrideMaterialSideOrientation), void 0 !== HH.sideOrientation && (RH.sideOrientation = HH.sideOrientation), void 0 !== HH.isBlocker && (RH.isBlocker = HH.isBlocker), RH._shouldGenerateFlatShading = HH.useFlatShading, HH.IT && (RH._waitingData.IT = HH.IT), void 0 !== HH.parentId && (RH._waitingParentId = HH.parentId), void 0 !== HH.parentInstanceIndex && (RH._waitingParentInstanceIndex = HH.parentInstanceIndex), void 0 !== HH.actions && (RH._waitingData.actions = HH.actions), void 0 !== HH.overlayAlpha && (RH.overlayAlpha = HH.overlayAlpha), void 0 !== HH.overlayColor && (RH.overlayColor = pH.b.Qh(HH.overlayColor)), void 0 !== HH.renderOverlay && (RH.renderOverlay = HH.renderOverlay), RH.isUnIndexed = !!HH.isUnIndexed, RH.hasVertexAlpha = HH.hasVertexAlpha, HH.delayLoadingFile ? (RH.delayLoadState = 4, RH.delayLoadingFile = EH + HH.delayLoadingFile, RH.buildBoundingInfo(nH.x.Qh(HH.boundingBoxMinimum), nH.x.Qh(HH.boundingBoxMaximum)), HH._binaryInfo && (RH._binaryInfo = HH._binaryInfo), RH._delayInfo = [], HH.hasUVs && RH._delayInfo.push(uH.t.UVKind), HH.hasUVs2 && RH._delayInfo.push(uH.t.UV2Kind), HH.hasUVs3 && RH._delayInfo.push(uH.t.UV3Kind), HH.hasUVs4 && RH._delayInfo.push(uH.t.UV4Kind), HH.hasUVs5 && RH._delayInfo.push(uH.t.UV5Kind), HH.hasUVs6 && RH._delayInfo.push(uH.t.UV6Kind), HH.hasColors && RH._delayInfo.push(uH.t.ColorKind), HH.hasMatricesIndices && RH._delayInfo.push(uH.t.MatricesIndicesKind), HH.hasMatricesWeights && RH._delayInfo.push(uH.t.MatricesWeightsKind), RH._delayLoadingFunction = KH.c._ImportGeometry, vH.b.ForceFullSceneLoadingForIncremental && RH._checkDelayState()) : hH || KH.c._ImportGeometry(HH, RH), HH.materialUniqueId ? RH._waitingMaterialId = HH.materialUniqueId : HH.materialId && (RH._waitingMaterialId = HH.materialId), HH.morphTargetManagerId > -1 && (RH._waitingMorphTargetManagerId = HH.morphTargetManagerId), void 0 !== HH.skeletonId && null !== HH.skeletonId && (RH.skeleton = IH.getLastSkeletonById(HH.skeletonId), RH._waitingSkeletonId = HH.skeletonId, HH.numBoneInfluencers && (RH.numBoneInfluencers = HH.numBoneInfluencers)), void 0 !== HH.skeletonUniqueId && null !== HH.skeletonUniqueId && (RH._waitingSkeletonUniqueId = HH.skeletonUniqueId), HH.animations) {
          for (let IH = 0; IH < HH.animations.length; IH++) {
            const EH = HH.animations[IH],
              hH = (0, xH.c)("BABYLON.Animation");
            hH && RH.animations.push(hH.Parse(EH));
          }
          dH.d.ParseAnimationRanges(RH, HH, IH);
        }
        if (HH.autoAnimate && IH.beginAnimation(RH, HH.autoAnimateFrom, HH.autoAnimateTo, HH.autoAnimateLoop, HH.autoAnimateSpeed || 1), HH.layerMask && !isNaN(HH.layerMask) ? RH.layerMask = Math.abs(parseInt(HH.layerMask)) : RH.layerMask = 268435455, HH.physicsImpostor && (RH.physicsImpostor = VI._PhysicsImpostorParser(IH, RH, HH)), HH.lodMeshIds && (RH._waitingData.lods = {
          ids: HH.lodMeshIds,
          distances: HH.lodDistances ? HH.lodDistances : null,
          coverages: HH.lodCoverages ? HH.lodCoverages : null
        }), HH.instances) for (let TH = 0; TH < HH.instances.length; TH++) {
          const EH = HH.instances[TH],
            hH = RH.createInstance(EH.name);
          if (EH.id && (hH.id = EH.id), BH.c && (EH.tags ? BH.c.AddTagsTo(hH, EH.tags) : BH.c.AddTagsTo(hH, HH.tags)), hH.position = nH.x.Qh(EH.position), void 0 !== EH.metadata && (hH.metadata = EH.metadata), void 0 !== EH.parentId && (hH._waitingParentId = EH.parentId), void 0 !== EH.parentInstanceIndex && (hH._waitingParentInstanceIndex = EH.parentInstanceIndex), void 0 !== EH.isEnabled && null !== EH.isEnabled && hH.hY(EH.isEnabled), void 0 !== EH.isVisible && null !== EH.isVisible && (hH.isVisible = EH.isVisible), void 0 !== EH.aQ && null !== EH.aQ && (hH.aQ = EH.aQ), EH.rotationQuaternion ? hH.rotationQuaternion = nH.h.Qh(EH.rotationQuaternion) : EH.rotation && (hH.rotation = nH.x.Qh(EH.rotation)), hH.WJ = nH.x.Qh(EH.WJ), void 0 != EH.checkCollisions && null != EH.checkCollisions && (hH.checkCollisions = EH.checkCollisions), void 0 != EH.pickable && null != EH.pickable && (hH.aQ = EH.pickable), void 0 != EH.showBoundingBox && null != EH.showBoundingBox && (hH.showBoundingBox = EH.showBoundingBox), void 0 != EH.showSubMeshesBoundingBox && null != EH.showSubMeshesBoundingBox && (hH.showSubMeshesBoundingBox = EH.showSubMeshesBoundingBox), void 0 != EH.alphaIndex && null != EH.showSubMeshesBoundingBox && (hH.alphaIndex = EH.alphaIndex), EH.physicsImpostor && (hH.physicsImpostor = VI._PhysicsImpostorParser(IH, hH, EH)), void 0 !== EH.actions && (hH._waitingData.actions = EH.actions), EH.animations) {
            for (let HH = 0; HH < EH.animations.length; HH++) {
              const IH = EH.animations[HH],
                RH = (0, xH.c)("BABYLON.Animation");
              RH && hH.animations.push(RH.Parse(IH));
            }
            dH.d.ParseAnimationRanges(hH, EH, IH), EH.autoAnimate && IH.beginAnimation(hH, EH.autoAnimateFrom, EH.autoAnimateTo, EH.autoAnimateLoop, EH.autoAnimateSpeed || 1);
          }
        }
        if (HH.thinInstances) {
          const IH = HH.thinInstances;
          if (RH.UJ = !!IH.enablePicking, IH.matrixData ? (RH.AF("matrix", new Float32Array(IH.matrixData), 16, !1), RH._thinInstanceDataStorage.matrixBufferSize = IH.matrixBufferSize, RH._thinInstanceDataStorage.instancesCount = IH.instancesCount) : RH._thinInstanceDataStorage.matrixBufferSize = IH.matrixBufferSize, HH.thinInstances.userThinInstance) {
            const IH = HH.thinInstances.userThinInstance;
            for (const HH in IH.data) RH.AF(HH, new Float32Array(IH.data[HH]), IH.strides[HH], !1), RH._userThinInstanceBuffersStorage.sizes[HH] = IH.sizes[HH];
          }
        }
        return RH;
      }
      setPositionsForCPUSkinning() {
        const HH = this._internalMeshDataInfo;
        if (!HH._sourcePositions) {
          const IH = this.getVerticesData(uH.t.PositionKind);
          if (!IH) return HH._sourcePositions;
          HH._sourcePositions = new Float32Array(IH), this.isVertexBufferUpdatable(uH.t.PositionKind) || this.setVerticesData(uH.t.PositionKind, IH, !0);
        }
        return HH._sourcePositions;
      }
      setNormalsForCPUSkinning() {
        const HH = this._internalMeshDataInfo;
        if (!HH._sourceNormals) {
          const IH = this.getVerticesData(uH.t.NormalKind);
          if (!IH) return HH._sourceNormals;
          HH._sourceNormals = new Float32Array(IH), this.isVertexBufferUpdatable(uH.t.NormalKind) || this.setVerticesData(uH.t.NormalKind, IH, !0);
        }
        return HH._sourceNormals;
      }
      applySkeleton(HH) {
        if (!this.KN) return this;
        if (this.KN._softwareSkinningFrameId == this.kh().getFrameId()) return this;
        if (this.KN._softwareSkinningFrameId = this.kh().getFrameId(), !this.isVerticesDataPresent(uH.t.PositionKind)) return this;
        if (!this.isVerticesDataPresent(uH.t.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(uH.t.MatricesWeightsKind)) return this;
        const IH = this.isVerticesDataPresent(uH.t.NormalKind),
          EH = this._internalMeshDataInfo;
        if (!EH._sourcePositions) {
          const HH = this.BJ.slice();
          this.setPositionsForCPUSkinning(), this.BJ = HH;
        }
        IH && !EH._sourceNormals && this.setNormalsForCPUSkinning();
        let RH = this.getVerticesData(uH.t.PositionKind);
        if (!RH) return this;
        RH instanceof Float32Array || (RH = new Float32Array(RH));
        let hH = this.getVerticesData(uH.t.NormalKind);
        if (IH) {
          if (!hH) return this;
          hH instanceof Float32Array || (hH = new Float32Array(hH));
        }
        const TH = this.getVerticesData(uH.t.MatricesIndicesKind),
          sH = this.getVerticesData(uH.t.MatricesWeightsKind);
        if (!sH || !TH) return this;
        const eH = this.numBoneInfluencers > 4,
          GH = eH ? this.getVerticesData(uH.t.MatricesIndicesExtraKind) : null,
          AH = eH ? this.getVerticesData(uH.t.MatricesWeightsExtraKind) : null,
          VH = HH.getTransformMatrices(this),
          YH = nH.x.Zero(),
          QH = new nH.d(),
          JH = new nH.d();
        let OH,
          rH = 0;
        for (let FH = 0; FH < RH.length; FH += 3, rH += 4) {
          let HH;
          for (OH = 0; OH < 4; OH++) HH = sH[rH + OH], HH > 0 && (nH.d.FromFloat32ArrayToRefScaled(VH, Math.floor(16 * TH[rH + OH]), HH, JH), QH.addToSelf(JH));
          if (eH) for (OH = 0; OH < 4; OH++) HH = AH[rH + OH], HH > 0 && (nH.d.FromFloat32ArrayToRefScaled(VH, Math.floor(16 * GH[rH + OH]), HH, JH), QH.addToSelf(JH));
          nH.x.TransformCoordinatesFromFloatsToRef(EH._sourcePositions[FH], EH._sourcePositions[FH + 1], EH._sourcePositions[FH + 2], QH, YH), YH.toArray(RH, FH), IH && (nH.x.TransformNormalFromFloatsToRef(EH._sourceNormals[FH], EH._sourceNormals[FH + 1], EH._sourceNormals[FH + 2], QH, YH), YH.toArray(hH, FH)), QH.reset();
        }
        return this.updateVerticesData(uH.t.PositionKind, RH), IH && this.updateVerticesData(uH.t.NormalKind, hH), this;
      }
      static MinMax(HH) {
        let IH = null,
          EH = null;
        for (const RH of HH) {
          const HH = RH.getBoundingInfo().boundingBox;
          IH && EH ? (IH.minimizeInPlace(HH.minimumWorld), EH.maximizeInPlace(HH.maximumWorld)) : (IH = HH.minimumWorld.clone(), EH = HH.maximumWorld.clone());
        }
        return IH && EH ? {
          min: IH,
          max: EH
        } : {
          min: nH.x.Zero(),
          max: nH.x.Zero()
        };
      }
      static Center(HH) {
        const IH = HH instanceof Array ? VI.MinMax(HH) : HH;
        return nH.x.Center(IH.min, IH.max);
      }
      static MergeMeshes(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          EH = arguments.length > 2 ? arguments[2] : void 0,
          RH = arguments.length > 3 ? arguments[3] : void 0,
          hH = arguments.length > 4 ? arguments[4] : void 0,
          TH = arguments.length > 5 ? arguments[5] : void 0;
        return (0, fH.i)(VI._MergeMeshesCoroutine(HH, IH, EH, RH, hH, TH, !1));
      }
      static async MergeMeshesAsync(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          EH = arguments.length > 2 ? arguments[2] : void 0,
          RH = arguments.length > 3 ? arguments[3] : void 0,
          hH = arguments.length > 4 ? arguments[4] : void 0,
          TH = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, fH.h)(VI._MergeMeshesCoroutine(HH, IH, EH, RH, hH, TH, !0), (0, fH.b)());
      }
      static *_MergeMeshesCoroutine(HH) {
        let IH,
          EH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          RH = arguments.length > 2 ? arguments[2] : void 0,
          hH = arguments.length > 3 ? arguments[3] : void 0,
          TH = arguments.length > 4 ? arguments[4] : void 0,
          sH = arguments.length > 5 ? arguments[5] : void 0,
          eH = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (HH = HH.filter(Boolean)).length) return null;
        if (!RH) {
          let EH = 0;
          for (IH = 0; IH < HH.length; IH++) if (EH += HH[IH].getTotalVertices(), EH >= 65536) return SH.e.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null;
        }
        const GH = HH[0];
        sH && (TH = !1, HH.sort((HH, IH) => {
          var EH, RH, hH, TH;
          return (null !== (EH = null === (RH = HH.material) || void 0 === RH ? void 0 : RH.uniqueId) && void 0 !== EH ? EH : -1) - (null !== (hH = null === (TH = IH.material) || void 0 === TH ? void 0 : TH.uniqueId) && void 0 !== hH ? hH : -1);
        }));
        const AH = new Array(),
          VH = new Array(),
          YH = new Array(),
          QH = HH[0].sideOrientation;
        for (IH = 0; IH < HH.length; IH++) {
          const EH = HH[IH];
          if (EH.isAnInstance) return SH.e.Warn("Cannot merge instance meshes."), null;
          if (QH !== EH.sideOrientation) return SH.e.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (TH || sH) {
            const HH = YH.reduce((HH, IH) => Math.max(HH, IH.start + IH.count), 0);
            if (sH) {
              if (EH.material) {
                const IH = EH.material;
                if (IH instanceof jI.d) {
                  for (let HH = 0; HH < IH.mO.length; HH++) AH.indexOf(IH.mO[HH]) < 0 && AH.push(IH.mO[HH]);
                  for (let RH = 0; RH < EH.BJ.length; RH++) VH.push(AH.indexOf(IH.mO[EH.BJ[RH].materialIndex])), YH.push({
                    start: HH + EH.BJ[RH].indexStart,
                    count: EH.BJ[RH].indexCount
                  });
                } else {
                  AH.indexOf(IH) < 0 && AH.push(IH);
                  for (let RH = 0; RH < EH.BJ.length; RH++) VH.push(AH.indexOf(IH)), YH.push({
                    start: HH + EH.BJ[RH].indexStart,
                    count: EH.BJ[RH].indexCount
                  });
                }
              } else for (let IH = 0; IH < EH.BJ.length; IH++) VH.push(0), YH.push({
                start: HH + EH.BJ[IH].indexStart,
                count: EH.BJ[IH].indexCount
              });
            } else YH.push({
              start: HH,
              count: EH.getTotalIndices()
            });
          }
        }
        if (sH && YH.length > 1) {
          let HH = 0;
          for (let IH = 1; IH < YH.length; IH++) {
            const EH = YH[HH],
              RH = YH[IH];
            VH[IH] === VH[HH] && EH.start + EH.count === RH.start ? EH.count += RH.count : (HH++, YH[HH] = RH, VH[HH] = VH[IH]);
          }
          YH.length = HH + 1, VH.length = HH + 1;
        }
        const JH = HH => {
            const IH = HH.aJ(!0);
            return {
              vertexData: lH.c.ExtractFromMesh(HH, !1, !1),
              transform: IH
            };
          },
          {
            vertexData: OH,
            transform: rH
          } = JH(HH[0]);
        eH && (yield);
        const FH = new Array(HH.length - 1);
        for (let XH = 1; XH < HH.length; XH++) FH[XH - 1] = JH(HH[XH]), eH && (yield);
        const MH = OH._mergeCoroutine(rH, FH, RH, eH, !EH);
        let NH = MH.next();
        for (; !NH.done;) eH && (yield), NH = MH.next();
        const iI = NH.value;
        hH || (hH = new VI(GH.name + "_merged", GH.kh()));
        const DH = iI._applyToCoroutine(hH, void 0, eH);
        let PH = DH.next();
        for (; !PH.done;) eH && (yield), PH = DH.next();
        if (hH.checkCollisions = GH.checkCollisions, hH.sideOrientation = GH.sideOrientation, EH) for (IH = 0; IH < HH.length; IH++) HH[IH].dispose();
        if (TH || sH) {
          for (hH.releaseSubMeshes(), IH = 0; IH < YH.length;) zH.c.CreateFromIndices(0, YH[IH].start, YH[IH].count, hH, void 0, !1), IH++;
          for (const HH of hH.BJ) HH.refreshBoundingInfo();
          hH.aJ(!0);
        }
        if (sH) {
          const HH = new jI.d(GH.name + "_merged", GH.kh());
          HH.mO = AH;
          for (let IH = 0; IH < hH.BJ.length; IH++) hH.BJ[IH].materialIndex = VH[IH];
          hH.material = HH;
        } else hH.material = GH.material;
        return hH;
      }
      aN(HH) {
        HH._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(HH);
      }
      dN(HH) {
        const IH = HH._indexInSourceMeshInstanceArray;
        if (-1 != IH) {
          if (IH !== this.instances.length - 1) {
            const HH = this.instances[this.instances.length - 1];
            this.instances[IH] = HH, HH._indexInSourceMeshInstanceArray = IH;
          }
          HH._indexInSourceMeshInstanceArray = -1, this.instances.pop();
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === tH.b.CounterClockWiseSideOrientation;
      }
      _getRenderingFillMode(HH) {
        var IH;
        const EH = this.kh();
        return EH.forcePointsCloud ? tH.b.PointFillMode : EH.forceWireframe ? tH.b.WireFrameFillMode : null !== (IH = this.overrideRenderingFillMode) && void 0 !== IH ? IH : HH;
      }
      setMaterialByID(HH) {
        return this.setMaterialById(HH);
      }
      static CreateRibbon(HH, IH, EH, RH, hH, TH, sH, eH, GH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreateDisc(HH, IH, EH, RH, hH, TH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreateBox(HH, IH, EH, RH, hH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreateSphere(HH, IH, EH, RH, hH, TH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreateHemisphere(HH, IH, EH, RH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreateCylinder(HH, IH, EH, RH, hH, TH, sH, eH, GH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreateTorus(HH, IH, EH, RH, hH, TH, sH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreateTorusKnot(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static kO(HH, IH, EH, RH, hH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreateDashedLines(HH, IH, EH, RH, hH, TH, sH, eH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreatePolygon(HH, IH, EH, RH, hH, TH, sH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static ExtrudePolygon(HH, IH, EH, RH, hH, TH, sH, eH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static ExtrudeShape(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static ExtrudeShapeCustom(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH, VH, YH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreateLathe(HH, IH, EH, RH, hH, TH, sH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static nJ(HH, IH, EH, RH, hH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreateGround(HH, IH, EH, RH, hH, TH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreateTiledGround(HH, IH, EH, RH, hH, TH, sH, eH, GH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreateGroundFromHeightMap(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH, VH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreateTube(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreatePolyhedron(HH, IH, EH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreateIcoSphere(HH, IH, EH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreateDecal(HH, IH, EH, RH, hH, TH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static CreateCapsule(HH, IH, EH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
      static ExtendToGoldberg(HH) {
        throw new Error("Import MeshBuilder to populate this function");
      }
    }
    VI.FRONTSIDE = lH.c.FRONTSIDE, VI.BACKSIDE = lH.c.BACKSIDE, VI.DOUBLESIDE = lH.c.DOUBLESIDE, VI.DEFAULTSIDE = lH.c.DEFAULTSIDE, VI.NO_CAP = 0, VI.CAP_START = 1, VI.CAP_END = 2, VI.CAP_ALL = 3, VI.NO_FLIP = 0, VI.FLIP_TILE = 1, VI.ROTATE_TILE = 2, VI.FLIP_ROW = 3, VI.ROTATE_ROW = 4, VI.FLIP_N_ROTATE_TILE = 5, VI.FLIP_N_ROTATE_ROW = 6, VI.CENTER = 0, VI.LEFT = 1, VI.RIGHT = 2, VI.TOP = 3, VI.BOTTOM = 4, VI.INSTANCEDMESH_SORT_TRANSPARENT = !1, VI._GroundMeshParser = (HH, IH) => {
      throw (0, HI.n)("GroundMesh");
    }, VI._GoldbergMeshParser = (HH, IH) => {
      throw (0, HI.n)("GoldbergMesh");
    }, VI._LinesMeshParser = (HH, IH) => {
      throw (0, HI.n)("LinesMesh");
    }, VI._GreasedLineMeshParser = (HH, IH) => {
      throw (0, HI.n)("GreasedLineMesh");
    }, VI._GreasedLineRibbonMeshParser = (HH, IH) => {
      throw (0, HI.n)("GreasedLineRibbonMesh");
    }, VI._TrailMeshParser = (HH, IH) => {
      throw (0, HI.n)("TrailMesh");
    }, VI._GaussianSplattingMeshParser = (HH, IH) => {
      throw (0, HI.n)("GaussianSplattingMesh");
    }, VI._GaussianSplattingPartProxyMeshParser = (HH, IH) => {
      throw (0, HI.n)("GaussianSplattingPartProxyMesh");
    }, VI._GaussianSplattingCompoundMeshParser = (HH, IH) => {
      throw (0, HI.n)("GaussianSplattingCompoundMesh");
    };
    let YI = !1;
    function QI() {
      YI || (YI = !0, (0, xH.d)("BABYLON.Mesh", VI));
    }
    null !== (RH = (MH = VI.prototype).XJ) && void 0 !== RH || (MH.XJ = (0, HI.j)("Mesh", "XJ")), null !== (hH = (NH = VI.prototype).simplify) && void 0 !== hH || (NH.simplify = (0, HI.j)("Mesh", "simplify")), null !== (TH = (iI = VI.prototype).thinInstanceAdd) && void 0 !== TH || (iI.thinInstanceAdd = (0, HI.j)("Mesh", "thinInstanceAdd")), null !== (sH = (DH = VI.prototype).thinInstanceAddSelf) && void 0 !== sH || (DH.thinInstanceAddSelf = (0, HI.j)("Mesh", "thinInstanceAddSelf")), null !== (eH = (PH = VI.prototype).thinInstanceRegisterAttribute) && void 0 !== eH || (PH.thinInstanceRegisterAttribute = (0, HI.j)("Mesh", "thinInstanceRegisterAttribute")), null !== (GH = (XH = VI.prototype).thinInstanceSetMatrixAt) && void 0 !== GH || (XH.thinInstanceSetMatrixAt = (0, HI.j)("Mesh", "thinInstanceSetMatrixAt")), null !== (AH = (mI = VI.prototype).thinInstanceSetAttributeAt) && void 0 !== AH || (mI.thinInstanceSetAttributeAt = (0, HI.j)("Mesh", "thinInstanceSetAttributeAt")), null !== (VH = (ZH = VI.prototype).AF) && void 0 !== VH || (ZH.AF = (0, HI.j)("Mesh", "AF")), null !== (YH = (qH = VI.prototype).thinInstanceGetWorldMatrices) && void 0 !== YH || (qH.thinInstanceGetWorldMatrices = (0, HI.j)("Mesh", "thinInstanceGetWorldMatrices")), null !== (QH = (LH = VI.prototype).VF) && void 0 !== QH || (LH.VF = (0, HI.j)("Mesh", "VF")), null !== (JH = (gH = VI.prototype).thinInstancePartialBufferUpdate) && void 0 !== JH || (gH.thinInstancePartialBufferUpdate = (0, HI.j)("Mesh", "thinInstancePartialBufferUpdate")), null !== (OH = (yH = VI.prototype).thinInstanceRefreshBoundingInfo) && void 0 !== OH || (yH.thinInstanceRefreshBoundingInfo = (0, HI.j)("Mesh", "thinInstanceRefreshBoundingInfo")), null !== (rH = (oH = VI.prototype).getEmittedParticleSystems) && void 0 !== rH || (oH.getEmittedParticleSystems = (0, HI.j)("Mesh", "getEmittedParticleSystems")), null !== (FH = (kI = VI.prototype).getHierarchyEmittedParticleSystems) && void 0 !== FH || (kI.getHierarchyEmittedParticleSystems = (0, HI.j)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(VI.prototype, "edgesShareWithInstances") || Object.defineProperty(VI.prototype, "edgesShareWithInstances", (0, HI.f)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(VI.prototype, "UJ") || Object.defineProperty(VI.prototype, "UJ", (0, HI.f)("Mesh", "UJ")), Object.getOwnPropertyDescriptor(VI.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(VI.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, HI.f)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(VI.prototype, "cJ") || Object.defineProperty(VI.prototype, "cJ", (0, HI.f)("Mesh", "cJ"));
  },
  22173: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => OH
    });
    var RH = EH(21947),
      hH = EH(21764),
      TH = EH(22128),
      sH = EH(21856),
      eH = EH(21817),
      GH = EH(21832),
      AH = EH(21956),
      VH = EH(22182),
      YH = EH(21876),
      QH = EH(22187);
    class JH {}
    let OH = (() => {
      var HH;
      let IH,
        EH,
        OH,
        rH,
        FH = [];
      return HH = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, VH.f)(this._applyToCoroutine.bind(this)), this.uniqueId = HH._UniqueIdGenerator, HH._UniqueIdGenerator++;
        }
        set(HH, IH) {
          switch (HH.length || GH.e.Warn("Setting vertex data kind '".concat(IH, "' with an empty array")), IH) {
            case TH.t.PositionKind:
              this.positions = HH;
              break;
            case TH.t.NormalKind:
              this.normals = HH;
              break;
            case TH.t.TangentKind:
              this.tangents = HH;
              break;
            case TH.t.UVKind:
              this.uvs = HH;
              break;
            case TH.t.UV2Kind:
              this.uvs2 = HH;
              break;
            case TH.t.UV3Kind:
              this.uvs3 = HH;
              break;
            case TH.t.UV4Kind:
              this.uvs4 = HH;
              break;
            case TH.t.UV5Kind:
              this.uvs5 = HH;
              break;
            case TH.t.UV6Kind:
              this.uvs6 = HH;
              break;
            case TH.t.ColorKind:
              this.colors = HH;
              break;
            case TH.t.MatricesIndicesKind:
              this.matricesIndices = HH;
              break;
            case TH.t.MatricesWeightsKind:
              this.matricesWeights = HH;
              break;
            case TH.t.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = HH;
              break;
            case TH.t.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = HH;
          }
        }
        applyToMesh(HH, IH) {
          return this._applyTo(HH, IH, !1), this;
        }
        applyToGeometry(HH, IH) {
          return this._applyTo(HH, IH, !1), this;
        }
        updateMesh(HH) {
          return this._update(HH), this;
        }
        updateGeometry(HH) {
          return this._update(HH), this;
        }
        *_applyToCoroutine(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            EH = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (HH.setVerticesData(TH.t.PositionKind, this.positions, IH), EH && (yield)), this.normals && (HH.setVerticesData(TH.t.NormalKind, this.normals, IH), EH && (yield)), this.tangents && (HH.setVerticesData(TH.t.TangentKind, this.tangents, IH), EH && (yield)), this.uvs && (HH.setVerticesData(TH.t.UVKind, this.uvs, IH), EH && (yield)), this.uvs2 && (HH.setVerticesData(TH.t.UV2Kind, this.uvs2, IH), EH && (yield)), this.uvs3 && (HH.setVerticesData(TH.t.UV3Kind, this.uvs3, IH), EH && (yield)), this.uvs4 && (HH.setVerticesData(TH.t.UV4Kind, this.uvs4, IH), EH && (yield)), this.uvs5 && (HH.setVerticesData(TH.t.UV5Kind, this.uvs5, IH), EH && (yield)), this.uvs6 && (HH.setVerticesData(TH.t.UV6Kind, this.uvs6, IH), EH && (yield)), this.colors) {
            const RH = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            HH.setVerticesData(TH.t.ColorKind, this.colors, IH, RH), this.hasVertexAlpha && void 0 !== HH.hasVertexAlpha && (HH.hasVertexAlpha = !0), EH && (yield);
          }
          if (this.matricesIndices && (HH.setVerticesData(TH.t.MatricesIndicesKind, this.matricesIndices, IH), EH && (yield)), this.matricesWeights && (HH.setVerticesData(TH.t.MatricesWeightsKind, this.matricesWeights, IH), EH && (yield)), this.matricesIndicesExtra && (HH.setVerticesData(TH.t.MatricesIndicesExtraKind, this.matricesIndicesExtra, IH), EH && (yield)), this.matricesWeightsExtra && (HH.setVerticesData(TH.t.MatricesWeightsExtraKind, this.matricesWeightsExtra, IH), EH && (yield)), this.indices ? (HH.setIndices(this.indices, null, IH), EH && (yield)) : HH.setIndices([], null), HH.BJ && this.materialInfos && this.materialInfos.length > 1) {
            const IH = HH;
            IH.BJ = [];
            for (const HH of this.materialInfos) new QH.c(HH.materialIndex, HH.verticesStart, HH.verticesCount, HH.indexStart, HH.indexCount, IH);
          }
          return this;
        }
        _update(HH, IH, EH) {
          return this.positions && HH.updateVerticesData(TH.t.PositionKind, this.positions, IH, EH), this.normals && HH.updateVerticesData(TH.t.NormalKind, this.normals, IH, EH), this.tangents && HH.updateVerticesData(TH.t.TangentKind, this.tangents, IH, EH), this.uvs && HH.updateVerticesData(TH.t.UVKind, this.uvs, IH, EH), this.uvs2 && HH.updateVerticesData(TH.t.UV2Kind, this.uvs2, IH, EH), this.uvs3 && HH.updateVerticesData(TH.t.UV3Kind, this.uvs3, IH, EH), this.uvs4 && HH.updateVerticesData(TH.t.UV4Kind, this.uvs4, IH, EH), this.uvs5 && HH.updateVerticesData(TH.t.UV5Kind, this.uvs5, IH, EH), this.uvs6 && HH.updateVerticesData(TH.t.UV6Kind, this.uvs6, IH, EH), this.colors && HH.updateVerticesData(TH.t.ColorKind, this.colors, IH, EH), this.matricesIndices && HH.updateVerticesData(TH.t.MatricesIndicesKind, this.matricesIndices, IH, EH), this.matricesWeights && HH.updateVerticesData(TH.t.MatricesWeightsKind, this.matricesWeights, IH, EH), this.matricesIndicesExtra && HH.updateVerticesData(TH.t.MatricesIndicesExtraKind, this.matricesIndicesExtra, IH, EH), this.matricesWeightsExtra && HH.updateVerticesData(TH.t.MatricesWeightsExtraKind, this.matricesWeightsExtra, IH, EH), this.indices && HH.setIndices(this.indices, null), this;
        }
        static _TransformVector3Coordinates(HH, IH) {
          let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HH.length;
          const TH = hH.p.Rh[0],
            sH = hH.p.Rh[1];
          for (let eH = EH; eH < EH + RH; eH += 3) hH.x.FromArrayToRef(HH, eH, TH), hH.x.TransformCoordinatesToRef(TH, IH, sH), HH[eH] = sH.x, HH[eH + 1] = sH.y, HH[eH + 2] = sH.z;
        }
        static _TransformVector3Normals(HH, IH) {
          let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HH.length;
          const TH = hH.p.Rh[0],
            sH = hH.p.Rh[1];
          for (let eH = EH; eH < EH + RH; eH += 3) hH.x.FromArrayToRef(HH, eH, TH), hH.x.TransformNormalToRef(TH, IH, sH), HH[eH] = sH.x, HH[eH + 1] = sH.y, HH[eH + 2] = sH.z;
        }
        static _TransformVector4Normals(HH, IH) {
          let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HH.length;
          const TH = hH.p.Vector4[0],
            sH = hH.p.Vector4[1];
          for (let eH = EH; eH < EH + RH; eH += 4) hH.y.FromArrayToRef(HH, eH, TH), hH.y.TransformNormalToRef(TH, IH, sH), HH[eH] = sH.x, HH[eH + 1] = sH.y, HH[eH + 2] = sH.z, HH[eH + 3] = sH.w;
        }
        static _FlipFaces(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HH.length;
          for (let RH = IH; RH < IH + EH; RH += 3) {
            const IH = HH[RH + 1];
            HH[RH + 1] = HH[RH + 2], HH[RH + 2] = IH;
          }
        }
        transform(IH) {
          const EH = IH.determinant() < 0;
          return this.positions && HH._TransformVector3Coordinates(this.positions, IH), this.normals && HH._TransformVector3Normals(this.normals, IH), this.tangents && HH._TransformVector4Normals(this.tangents, IH), EH && this.indices && HH._FlipFaces(this.indices), this;
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const IH = [];
          for (const EH of this.materialInfos) {
            const RH = new HH();
            if (this.positions && (RH.positions = this.positions.slice(3 * EH.verticesStart, 3 * (EH.verticesCount + EH.verticesStart))), this.normals && (RH.normals = this.normals.slice(3 * EH.verticesStart, 3 * (EH.verticesCount + EH.verticesStart))), this.tangents && (RH.tangents = this.tangents.slice(4 * EH.verticesStart, 4 * (EH.verticesCount + EH.verticesStart))), this.colors && (RH.colors = this.colors.slice(4 * EH.verticesStart, 4 * (EH.verticesCount + EH.verticesStart))), this.uvs && (RH.uvs = this.uvs.slice(2 * EH.verticesStart, 2 * (EH.verticesCount + EH.verticesStart))), this.uvs2 && (RH.uvs2 = this.uvs2.slice(2 * EH.verticesStart, 2 * (EH.verticesCount + EH.verticesStart))), this.uvs3 && (RH.uvs3 = this.uvs3.slice(2 * EH.verticesStart, 2 * (EH.verticesCount + EH.verticesStart))), this.uvs4 && (RH.uvs4 = this.uvs4.slice(2 * EH.verticesStart, 2 * (EH.verticesCount + EH.verticesStart))), this.uvs5 && (RH.uvs5 = this.uvs5.slice(2 * EH.verticesStart, 2 * (EH.verticesCount + EH.verticesStart))), this.uvs6 && (RH.uvs6 = this.uvs6.slice(2 * EH.verticesStart, 2 * (EH.verticesCount + EH.verticesStart))), this.matricesIndices && (RH.matricesIndices = this.matricesIndices.slice(4 * EH.verticesStart, 4 * (EH.verticesCount + EH.verticesStart))), this.matricesIndicesExtra && (RH.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * EH.verticesStart, 4 * (EH.verticesCount + EH.verticesStart))), this.matricesWeights && (RH.matricesWeights = this.matricesWeights.slice(4 * EH.verticesStart, 4 * (EH.verticesCount + EH.verticesStart))), this.matricesWeightsExtra && (RH.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * EH.verticesStart, 4 * (EH.verticesCount + EH.verticesStart))), this.indices) {
              RH.indices = [];
              for (let HH = EH.indexStart; HH < EH.indexStart + EH.indexCount; HH++) RH.indices.push(this.indices[HH] - EH.verticesStart);
            }
            const hH = new JH();
            hH.indexStart = 0, hH.indexCount = RH.indices ? RH.indices.length : 0, hH.materialIndex = EH.materialIndex, hH.verticesStart = 0, hH.verticesCount = (RH.positions ? RH.positions.length : 0) / 3, RH.materialInfos = [hH], IH.push(RH);
          }
          return IH;
        }
        merge(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const TH = Array.isArray(HH) ? HH.map(HH => ({
            vertexData: HH
          })) : [{
            vertexData: HH
          }];
          return (0, VH.i)(this._mergeCoroutine(void 0, TH, IH, !1, EH, RH, hH));
        }
        *_mergeCoroutine(IH, EH) {
          var RH, hH, sH;
          let eH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            GH = arguments.length > 3 ? arguments[3] : void 0,
            AH = arguments.length > 4 ? arguments[4] : void 0,
            VH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            YH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let QH = EH.map(HH => HH.vertexData),
            OH = this;
          if (YH) for (const HH of QH) HH && (HH._validate(), !this.normals && HH.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && HH.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && HH.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && HH.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && HH.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && HH.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && HH.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && HH.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && HH.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && HH.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && HH.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && HH.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && HH.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const HH of QH) if (HH) if (YH) this.normals && !HH.normals && (HH.normals = new Float32Array(HH.positions.length)), this.tangents && !HH.tangents && (HH.tangents = new Float32Array(HH.positions.length / 3 * 4)), this.uvs && !HH.uvs && (HH.uvs = new Float32Array(HH.positions.length / 3 * 2)), this.uvs2 && !HH.uvs2 && (HH.uvs2 = new Float32Array(HH.positions.length / 3 * 2)), this.uvs3 && !HH.uvs3 && (HH.uvs3 = new Float32Array(HH.positions.length / 3 * 2)), this.uvs4 && !HH.uvs4 && (HH.uvs4 = new Float32Array(HH.positions.length / 3 * 2)), this.uvs5 && !HH.uvs5 && (HH.uvs5 = new Float32Array(HH.positions.length / 3 * 2)), this.uvs6 && !HH.uvs6 && (HH.uvs6 = new Float32Array(HH.positions.length / 3 * 2)), this.colors && !HH.colors && (HH.colors = new Float32Array(HH.positions.length / 3 * 4), HH.colors.fill(1)), this.matricesIndices && !HH.matricesIndices && (HH.matricesIndices = new Float32Array(HH.positions.length / 3 * 4)), this.matricesWeights && !HH.matricesWeights && (HH.matricesWeights = new Float32Array(HH.positions.length / 3 * 4)), this.matricesIndicesExtra && !HH.matricesIndicesExtra && (HH.matricesIndicesExtra = new Float32Array(HH.positions.length / 3 * 4)), this.matricesWeightsExtra && !HH.matricesWeightsExtra && (HH.matricesWeightsExtra = new Float32Array(HH.positions.length / 3 * 4));else if (HH._validate(), !this.normals !== !HH.normals || !this.tangents !== !HH.tangents || !this.uvs !== !HH.uvs || !this.uvs2 !== !HH.uvs2 || !this.uvs3 !== !HH.uvs3 || !this.uvs4 !== !HH.uvs4 || !this.uvs5 !== !HH.uvs5 || !this.uvs6 !== !HH.uvs6 || !this.colors !== !HH.colors || !this.matricesIndices !== !HH.matricesIndices || !this.matricesWeights !== !HH.matricesWeights || !this.matricesIndicesExtra !== !HH.matricesIndicesExtra || !this.matricesWeightsExtra !== !HH.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (VH) {
            let HH,
              RH = 0,
              hH = 0;
            const TH = [];
            let sH = null;
            const eH = [];
            for (const EH of this.splitBasedOnMaterialID()) eH.push({
              vertexData: EH,
              transform: IH
            });
            for (const IH of EH) if (IH.vertexData) for (const HH of IH.vertexData.splitBasedOnMaterialID()) eH.push({
              vertexData: HH,
              transform: IH.transform
            });
            eH.sort((HH, IH) => {
              const EH = HH.vertexData.materialInfos ? HH.vertexData.materialInfos[0].materialIndex : 0,
                RH = IH.vertexData.materialInfos ? IH.vertexData.materialInfos[0].materialIndex : 0;
              return EH > RH ? 1 : EH === RH ? 0 : -1;
            });
            for (const IH of eH) {
              const EH = IH.vertexData;
              if (HH = EH.materialInfos ? EH.materialInfos[0].materialIndex : 0, sH && sH.materialIndex === HH) sH.indexCount += EH.indices.length, sH.verticesCount += EH.positions.length / 3;else {
                const IH = new JH();
                IH.materialIndex = HH, IH.indexStart = RH, IH.indexCount = EH.indices.length, IH.verticesStart = hH, IH.verticesCount = EH.positions.length / 3, TH.push(IH), sH = IH;
              }
              RH += EH.indices.length, hH += EH.positions.length / 3;
            }
            const GH = eH.splice(0, 1)[0];
            OH = GH.vertexData, IH = GH.transform, QH = eH.map(HH => HH.vertexData), EH = eH, this.materialInfos = TH;
          }
          const rH = QH.reduce((HH, IH) => {
            var EH, RH;
            return HH + (null !== (EH = null === (RH = IH.indices) || void 0 === RH ? void 0 : RH.length) && void 0 !== EH ? EH : 0);
          }, null !== (RH = null === (hH = OH.indices) || void 0 === hH ? void 0 : hH.length) && void 0 !== RH ? RH : 0);
          let FH = AH || QH.some(HH => HH.indices === OH.indices) ? null === (sH = OH.indices) || void 0 === sH ? void 0 : sH.slice() : OH.indices;
          if (rH > 0) {
            var MH, NH;
            let RH = null !== (MH = null === (NH = FH) || void 0 === NH ? void 0 : NH.length) && void 0 !== MH ? MH : 0;
            if (FH || (FH = new Array(rH)), FH.length !== rH) {
              if (Array.isArray(FH)) FH.length = rH;else {
                const HH = eH || FH instanceof Uint32Array ? new Uint32Array(rH) : new Uint16Array(rH);
                HH.set(FH), FH = HH;
              }
              IH && IH.determinant() < 0 && HH._FlipFaces(FH, 0, RH);
            }
            let hH = OH.positions ? OH.positions.length / 3 : 0;
            for (const {
              vertexData: IH,
              transform: TH
            } of EH) if (IH.indices) {
              for (let HH = 0; HH < IH.indices.length; HH++) FH[RH + HH] = IH.indices[HH] + hH;
              TH && TH.determinant() < 0 && HH._FlipFaces(FH, RH, IH.indices.length), hH += IH.positions.length / 3, RH += IH.indices.length, GH && (yield);
            }
          }
          return this.indices = FH, this.positions = HH._MergeElement(TH.t.PositionKind, OH.positions, IH, EH.map(HH => [HH.vertexData.positions, HH.transform])), GH && (yield), OH.normals && (this.normals = HH._MergeElement(TH.t.NormalKind, OH.normals, IH, EH.map(HH => [HH.vertexData.normals, HH.transform])), GH && (yield)), OH.tangents && (this.tangents = HH._MergeElement(TH.t.TangentKind, OH.tangents, IH, EH.map(HH => [HH.vertexData.tangents, HH.transform])), GH && (yield)), OH.uvs && (this.uvs = HH._MergeElement(TH.t.UVKind, OH.uvs, IH, EH.map(HH => [HH.vertexData.uvs, HH.transform])), GH && (yield)), OH.uvs2 && (this.uvs2 = HH._MergeElement(TH.t.UV2Kind, OH.uvs2, IH, EH.map(HH => [HH.vertexData.uvs2, HH.transform])), GH && (yield)), OH.uvs3 && (this.uvs3 = HH._MergeElement(TH.t.UV3Kind, OH.uvs3, IH, EH.map(HH => [HH.vertexData.uvs3, HH.transform])), GH && (yield)), OH.uvs4 && (this.uvs4 = HH._MergeElement(TH.t.UV4Kind, OH.uvs4, IH, EH.map(HH => [HH.vertexData.uvs4, HH.transform])), GH && (yield)), OH.uvs5 && (this.uvs5 = HH._MergeElement(TH.t.UV5Kind, OH.uvs5, IH, EH.map(HH => [HH.vertexData.uvs5, HH.transform])), GH && (yield)), OH.uvs6 && (this.uvs6 = HH._MergeElement(TH.t.UV6Kind, OH.uvs6, IH, EH.map(HH => [HH.vertexData.uvs6, HH.transform])), GH && (yield)), OH.colors && (this.colors = HH._MergeElement(TH.t.ColorKind, OH.colors, IH, EH.map(HH => [HH.vertexData.colors, HH.transform])), (void 0 !== OH.hasVertexAlpha || EH.some(HH => void 0 !== HH.vertexData.hasVertexAlpha)) && (this.hasVertexAlpha = OH.hasVertexAlpha || EH.some(HH => HH.vertexData.hasVertexAlpha)), GH && (yield)), OH.matricesIndices && (this.matricesIndices = HH._MergeElement(TH.t.MatricesIndicesKind, OH.matricesIndices, IH, EH.map(HH => [HH.vertexData.matricesIndices, HH.transform])), GH && (yield)), OH.matricesWeights && (this.matricesWeights = HH._MergeElement(TH.t.MatricesWeightsKind, OH.matricesWeights, IH, EH.map(HH => [HH.vertexData.matricesWeights, HH.transform])), GH && (yield)), OH.matricesIndicesExtra && (this.matricesIndicesExtra = HH._MergeElement(TH.t.MatricesIndicesExtraKind, OH.matricesIndicesExtra, IH, EH.map(HH => [HH.vertexData.matricesIndicesExtra, HH.transform])), GH && (yield)), OH.matricesWeightsExtra && (this.matricesWeightsExtra = HH._MergeElement(TH.t.MatricesWeightsExtraKind, OH.matricesWeightsExtra, IH, EH.map(HH => [HH.vertexData.matricesWeightsExtra, HH.transform]))), this;
        }
        static _MergeElement(IH, EH, RH, hH) {
          const sH = hH.filter(HH => null !== HH[0] && void 0 !== HH[0]);
          if (!EH && 0 == sH.length) return EH;
          if (!EH) return this._MergeElement(IH, sH[0][0], sH[0][1], sH.slice(1));
          const eH = sH.reduce((HH, IH) => HH + IH[0].length, EH.length),
            GH = IH === TH.t.PositionKind ? HH._TransformVector3Coordinates : IH === TH.t.NormalKind ? HH._TransformVector3Normals : IH === TH.t.TangentKind ? HH._TransformVector4Normals : () => {};
          if (EH instanceof Float32Array) {
            const HH = new Float32Array(eH);
            HH.set(EH), RH && GH(HH, RH, 0, EH.length);
            let IH = EH.length;
            for (const [EH, RH] of sH) HH.set(EH, IH), RH && GH(HH, RH, IH, EH.length), IH += EH.length;
            return HH;
          }
          {
            const HH = new Array(eH);
            for (let RH = 0; RH < EH.length; RH++) HH[RH] = EH[RH];
            RH && GH(HH, RH, 0, EH.length);
            let IH = EH.length;
            for (const [EH, RH] of sH) {
              for (let RH = 0; RH < EH.length; RH++) HH[IH + RH] = EH[RH];
              RH && GH(HH, RH, IH, EH.length), IH += EH.length;
            }
            return HH;
          }
        }
        _validate() {
          if (!this.positions) throw new YH.i("Positions are required", YH.g.MeshInvalidPositionsError);
          const HH = (HH, IH) => {
              const EH = (0, TH.i)(HH);
              if (IH.length % EH !== 0) throw new Error("The " + HH + "s array count must be a multiple of " + EH);
              return IH.length / EH;
            },
            IH = HH(TH.t.PositionKind, this.positions),
            EH = (EH, RH) => {
              const hH = HH(EH, RH);
              if (hH !== IH) throw new Error("The " + EH + "s element count (" + hH + ") does not match the positions count (" + IH + ")");
            };
          this.normals && EH(TH.t.NormalKind, this.normals), this.tangents && EH(TH.t.TangentKind, this.tangents), this.uvs && EH(TH.t.UVKind, this.uvs), this.uvs2 && EH(TH.t.UV2Kind, this.uvs2), this.uvs3 && EH(TH.t.UV3Kind, this.uvs3), this.uvs4 && EH(TH.t.UV4Kind, this.uvs4), this.uvs5 && EH(TH.t.UV5Kind, this.uvs5), this.uvs6 && EH(TH.t.UV6Kind, this.uvs6), this.colors && EH(TH.t.ColorKind, this.colors), this.matricesIndices && EH(TH.t.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && EH(TH.t.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && EH(TH.t.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && EH(TH.t.MatricesWeightsExtraKind, this.matricesWeightsExtra);
        }
        clone() {
          const IH = this.serialize();
          return HH.Parse(IH);
        }
        serialize() {
          const HH = {};
          if (this.positions && (HH.positions = Array.from(this.positions)), this.normals && (HH.normals = Array.from(this.normals)), this.tangents && (HH.tangents = Array.from(this.tangents)), this.uvs && (HH.uvs = Array.from(this.uvs)), this.uvs2 && (HH.uvs2 = Array.from(this.uvs2)), this.uvs3 && (HH.uvs3 = Array.from(this.uvs3)), this.uvs4 && (HH.uvs4 = Array.from(this.uvs4)), this.uvs5 && (HH.uvs5 = Array.from(this.uvs5)), this.uvs6 && (HH.uvs6 = Array.from(this.uvs6)), this.colors && (HH.colors = Array.from(this.colors), HH.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (HH.matricesIndices = Array.from(this.matricesIndices), HH.matricesIndicesExpanded = !0), this.matricesWeights && (HH.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (HH.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), HH.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (HH.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), HH.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            HH.materialInfos = [];
            for (const IH of this.materialInfos) {
              const EH = {
                indexStart: IH.indexStart,
                indexCount: IH.indexCount,
                materialIndex: IH.materialIndex,
                verticesStart: IH.verticesStart,
                verticesCount: IH.verticesCount
              };
              HH.materialInfos.push(EH);
            }
          }
          return HH;
        }
        static ExtractFromMesh(IH, EH, RH) {
          return HH._ExtractFrom(IH, EH, RH);
        }
        static ExtractFromGeometry(IH, EH, RH) {
          return HH._ExtractFrom(IH, EH, RH);
        }
        static _ExtractFrom(IH, EH, RH) {
          const hH = new HH();
          if (IH.isVerticesDataPresent(TH.t.PositionKind) && (hH.positions = IH.getVerticesData(TH.t.PositionKind, EH, RH)), IH.isVerticesDataPresent(TH.t.NormalKind) && (hH.normals = IH.getVerticesData(TH.t.NormalKind, EH, RH)), IH.isVerticesDataPresent(TH.t.TangentKind) && (hH.tangents = IH.getVerticesData(TH.t.TangentKind, EH, RH)), IH.isVerticesDataPresent(TH.t.UVKind) && (hH.uvs = IH.getVerticesData(TH.t.UVKind, EH, RH)), IH.isVerticesDataPresent(TH.t.UV2Kind) && (hH.uvs2 = IH.getVerticesData(TH.t.UV2Kind, EH, RH)), IH.isVerticesDataPresent(TH.t.UV3Kind) && (hH.uvs3 = IH.getVerticesData(TH.t.UV3Kind, EH, RH)), IH.isVerticesDataPresent(TH.t.UV4Kind) && (hH.uvs4 = IH.getVerticesData(TH.t.UV4Kind, EH, RH)), IH.isVerticesDataPresent(TH.t.UV5Kind) && (hH.uvs5 = IH.getVerticesData(TH.t.UV5Kind, EH, RH)), IH.isVerticesDataPresent(TH.t.UV6Kind) && (hH.uvs6 = IH.getVerticesData(TH.t.UV6Kind, EH, RH)), IH.isVerticesDataPresent(TH.t.ColorKind)) {
            const HH = IH.KN || IH,
              sH = HH.getVertexBuffer(TH.t.ColorKind),
              eH = HH.getVerticesData(TH.t.ColorKind, EH, RH);
            if (3 === sH.getSize()) {
              const HH = new Float32Array(4 * eH.length / 3);
              for (let IH = 0, EH = 0; IH < eH.length; IH += 3, EH += 4) HH[EH] = eH[IH], HH[EH + 1] = eH[IH + 1], HH[EH + 2] = eH[IH + 2], HH[EH + 3] = 1;
              hH.colors = HH;
            } else {
              if (4 !== sH.getSize()) throw new Error("Unexpected number of color components: ".concat(sH.getSize()));
              hH.colors = eH;
            }
          }
          return IH.isVerticesDataPresent(TH.t.MatricesIndicesKind) && (hH.matricesIndices = IH.getVerticesData(TH.t.MatricesIndicesKind, EH, RH)), IH.isVerticesDataPresent(TH.t.MatricesWeightsKind) && (hH.matricesWeights = IH.getVerticesData(TH.t.MatricesWeightsKind, EH, RH)), IH.isVerticesDataPresent(TH.t.MatricesIndicesExtraKind) && (hH.matricesIndicesExtra = IH.getVerticesData(TH.t.MatricesIndicesExtraKind, EH, RH)), IH.isVerticesDataPresent(TH.t.MatricesWeightsExtraKind) && (hH.matricesWeightsExtra = IH.getVerticesData(TH.t.MatricesWeightsExtraKind, EH, RH)), hH.indices = IH.uO(EH, RH), hH;
        }
        static CreateRibbon(HH) {
          throw (0, sH.n)("ribbonBuilder");
        }
        static CreateBox(HH) {
          throw (0, sH.n)("boxBuilder");
        }
        static CreateTiledBox(HH) {
          throw (0, sH.n)("tiledBoxBuilder");
        }
        static CreateTiledPlane(HH) {
          throw (0, sH.n)("tiledPlaneBuilder");
        }
        static CreateSphere(HH) {
          throw (0, sH.n)("sphereBuilder");
        }
        static CreateCylinder(HH) {
          throw (0, sH.n)("cylinderBuilder");
        }
        static CreateTorus(HH) {
          throw (0, sH.n)("torusBuilder");
        }
        static CreateLineSystem(HH) {
          throw (0, sH.n)("linesBuilder");
        }
        static CreateDashedLines(HH) {
          throw (0, sH.n)("linesBuilder");
        }
        static CreateGround(HH) {
          throw (0, sH.n)("groundBuilder");
        }
        static CreateTiledGround(HH) {
          throw (0, sH.n)("groundBuilder");
        }
        static CreateGroundFromHeightMap(HH) {
          throw (0, sH.n)("groundBuilder");
        }
        static nJ(HH) {
          throw (0, sH.n)("planeBuilder");
        }
        static CreateDisc(HH) {
          throw (0, sH.n)("discBuilder");
        }
        static CreatePolygon(HH, IH, EH, RH, hH, TH, eH) {
          throw (0, sH.n)("polygonBuilder");
        }
        static CreateIcoSphere(HH) {
          throw (0, sH.n)("icoSphereBuilder");
        }
        static CreatePolyhedron(HH) {
          throw (0, sH.n)("polyhedronBuilder");
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || hH.x.Up();
          throw (0, sH.n)("capsuleBuilder");
        }
        static CreateTorusKnot(HH) {
          throw (0, sH.n)("torusKnotBuilder");
        }
        static ComputeNormals(HH, IH, EH, RH) {
          let TH,
            sH,
            eH,
            GH,
            AH,
            VH,
            YH,
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
            ZH,
            qH = !1,
            LH = !1,
            gH = !1,
            yH = !1,
            oH = 1,
            kI = 0,
            CH = null;
          RH && (qH = !!RH.facetNormals, LH = !!RH.facetPositions, gH = !!RH.facetPartitioning, oH = !0 === RH.useRightHandedSystem ? -1 : 1, kI = RH.ratio || 0, yH = !!RH.depthSort, CH = RH.distanceTo, yH && void 0 === CH && (CH = hH.x.Zero()));
          let cH = 0,
            UH = 0,
            WH = 0,
            BH = 0;
          for (gH && RH && RH.bbSize && (cH = RH.subDiv.X * kI / RH.bbSize.x, UH = RH.subDiv.Y * kI / RH.bbSize.y, WH = RH.subDiv.Z * kI / RH.bbSize.z, BH = RH.subDiv.max * RH.subDiv.max, RH.facetPartitioning.length = 0), TH = 0; TH < HH.length; TH++) EH[TH] = 0;
          const fH = IH.length / 3 | 0;
          for (TH = 0; TH < fH; TH++) {
            if (FH = 3 * IH[3 * TH], MH = FH + 1, NH = FH + 2, iI = 3 * IH[3 * TH + 1], DH = iI + 1, PH = iI + 2, XH = 3 * IH[3 * TH + 2], mI = XH + 1, ZH = XH + 2, sH = HH[FH] - HH[iI], eH = HH[MH] - HH[DH], GH = HH[NH] - HH[PH], AH = HH[XH] - HH[iI], VH = HH[mI] - HH[DH], YH = HH[ZH] - HH[PH], QH = oH * (eH * YH - GH * VH), JH = oH * (GH * AH - sH * YH), OH = oH * (sH * VH - eH * AH), rH = Math.sqrt(QH * QH + JH * JH + OH * OH), rH = 0 === rH ? 1 : rH, QH /= rH, JH /= rH, OH /= rH, qH && RH && (RH.facetNormals[TH].x = QH, RH.facetNormals[TH].y = JH, RH.facetNormals[TH].z = OH), LH && RH && (RH.facetPositions[TH].x = (HH[FH] + HH[iI] + HH[XH]) / 3, RH.facetPositions[TH].y = (HH[MH] + HH[DH] + HH[mI]) / 3, RH.facetPositions[TH].z = (HH[NH] + HH[PH] + HH[ZH]) / 3), gH && RH) {
              const IH = Math.floor((RH.facetPositions[TH].x - RH.bInfo.minimum.x * kI) * cH),
                EH = Math.floor((RH.facetPositions[TH].y - RH.bInfo.minimum.y * kI) * UH),
                hH = Math.floor((RH.facetPositions[TH].z - RH.bInfo.minimum.z * kI) * WH),
                sH = Math.floor((HH[FH] - RH.bInfo.minimum.x * kI) * cH),
                eH = Math.floor((HH[MH] - RH.bInfo.minimum.y * kI) * UH),
                GH = Math.floor((HH[NH] - RH.bInfo.minimum.z * kI) * WH),
                AH = Math.floor((HH[iI] - RH.bInfo.minimum.x * kI) * cH),
                VH = Math.floor((HH[DH] - RH.bInfo.minimum.y * kI) * UH),
                YH = Math.floor((HH[PH] - RH.bInfo.minimum.z * kI) * WH),
                QH = Math.floor((HH[XH] - RH.bInfo.minimum.x * kI) * cH),
                JH = Math.floor((HH[mI] - RH.bInfo.minimum.y * kI) * UH),
                OH = Math.floor((HH[ZH] - RH.bInfo.minimum.z * kI) * WH),
                rH = sH + RH.subDiv.max * eH + BH * GH,
                qH = AH + RH.subDiv.max * VH + BH * YH,
                LH = QH + RH.subDiv.max * JH + BH * OH,
                gH = IH + RH.subDiv.max * EH + BH * hH;
              RH.facetPartitioning[gH] = RH.facetPartitioning[gH] ? RH.facetPartitioning[gH] : [], RH.facetPartitioning[rH] = RH.facetPartitioning[rH] ? RH.facetPartitioning[rH] : [], RH.facetPartitioning[qH] = RH.facetPartitioning[qH] ? RH.facetPartitioning[qH] : [], RH.facetPartitioning[LH] = RH.facetPartitioning[LH] ? RH.facetPartitioning[LH] : [], RH.facetPartitioning[rH].push(TH), qH != rH && RH.facetPartitioning[qH].push(TH), LH != qH && LH != rH && RH.facetPartitioning[LH].push(TH), gH != rH && gH != qH && gH != LH && RH.facetPartitioning[gH].push(TH);
            }
            if (yH && RH && RH.facetPositions) {
              const HH = RH.depthSortedFacets[TH];
              HH.ind = 3 * TH, HH.sqDistance = hH.x.DistanceSquared(RH.facetPositions[TH], CH);
            }
            EH[FH] += QH, EH[MH] += JH, EH[NH] += OH, EH[iI] += QH, EH[DH] += JH, EH[PH] += OH, EH[XH] += QH, EH[mI] += JH, EH[ZH] += OH;
          }
          for (TH = 0; TH < EH.length / 3; TH++) QH = EH[3 * TH], JH = EH[3 * TH + 1], OH = EH[3 * TH + 2], rH = Math.sqrt(QH * QH + JH * JH + OH * OH), rH = 0 === rH ? 1 : rH, QH /= rH, JH /= rH, OH /= rH, EH[3 * TH] = QH, EH[3 * TH + 1] = JH, EH[3 * TH + 2] = OH;
        }
        static _ComputeSides(IH, EH, RH, TH, sH, eH, GH) {
          const AH = RH.length,
            VH = TH.length;
          let YH, QH;
          switch (IH = IH || HH.DEFAULTSIDE) {
            case HH.FRONTSIDE:
              break;
            case HH.BACKSIDE:
              for (YH = 0; YH < AH; YH += 3) {
                const HH = RH[YH];
                RH[YH] = RH[YH + 2], RH[YH + 2] = HH;
              }
              for (QH = 0; QH < VH; QH++) TH[QH] = -TH[QH];
              break;
            case HH.DOUBLESIDE:
              {
                const HH = EH.length,
                  IH = HH / 3;
                for (let RH = 0; RH < HH; RH++) EH[HH + RH] = EH[RH];
                for (YH = 0; YH < AH; YH += 3) RH[YH + AH] = RH[YH + 2] + IH, RH[YH + 1 + AH] = RH[YH + 1] + IH, RH[YH + 2 + AH] = RH[YH] + IH;
                for (QH = 0; QH < VH; QH++) TH[VH + QH] = -TH[QH];
                const JH = sH.length;
                let OH;
                for (OH = 0; OH < JH; OH++) sH[OH + JH] = sH[OH];
                for (eH = eH || new hH.y(0, 0, 1, 1), GH = GH || new hH.y(0, 0, 1, 1), OH = 0, YH = 0; YH < JH / 2; YH++) sH[OH] = eH.x + (eH.z - eH.x) * sH[OH], sH[OH + 1] = eH.y + (eH.w - eH.y) * sH[OH + 1], sH[OH + JH] = GH.x + (GH.z - GH.x) * sH[OH + JH], sH[OH + JH + 1] = GH.y + (GH.w - GH.y) * sH[OH + JH + 1], OH += 2;
                break;
              }
          }
        }
        static Parse(IH) {
          const EH = new HH(),
            RH = IH.positions;
          RH && EH.set(RH, TH.t.PositionKind);
          const hH = IH.normals;
          hH && EH.set(hH, TH.t.NormalKind);
          const sH = IH.tangents;
          sH && EH.set(sH, TH.t.TangentKind);
          const GH = IH.uvs;
          GH && EH.set(GH, TH.t.UVKind);
          const AH = IH.uvs2;
          AH && EH.set(AH, TH.t.UV2Kind);
          const VH = IH.uvs3;
          VH && EH.set(VH, TH.t.UV3Kind);
          const YH = IH.uvs4;
          YH && EH.set(YH, TH.t.UV4Kind);
          const QH = IH.uvs5;
          QH && EH.set(QH, TH.t.UV5Kind);
          const OH = IH.uvs6;
          OH && EH.set(OH, TH.t.UV6Kind);
          const rH = IH.colors;
          rH && (EH.set(eH.d.CheckColors4(rH, RH.length / 3), TH.t.ColorKind), void 0 !== IH.hasVertexAlpha && (EH.hasVertexAlpha = IH.hasVertexAlpha));
          const FH = IH.matricesIndices;
          FH && EH.set(FH, TH.t.MatricesIndicesKind);
          const MH = IH.matricesWeights;
          MH && EH.set(MH, TH.t.MatricesWeightsKind);
          const NH = IH.indices;
          NH && (EH.indices = NH);
          const iI = IH.materialInfos;
          if (iI) {
            EH.materialInfos = [];
            for (const HH of iI) {
              const IH = new JH();
              IH.indexCount = HH.indexCount, IH.indexStart = HH.indexStart, IH.verticesCount = HH.verticesCount, IH.verticesStart = HH.verticesStart, IH.materialIndex = HH.materialIndex, EH.materialInfos.push(IH);
            }
          }
          return EH;
        }
        static ImportVertexData(IH, EH) {
          const RH = HH.Parse(IH);
          EH.setAllVerticesData(RH, IH.updatable);
        }
      }, (() => {
        const hH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IH = [AH.g.filter(function () {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]);
        })], EH = [AH.g.filter(function () {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]);
        })], OH = [AH.g.filter(function () {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]);
        })], rH = [AH.g.filter(function () {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]);
        })], (0, RH.i)(HH, null, IH, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: HH => "_TransformVector3Coordinates" in HH,
            get: HH => HH._TransformVector3Coordinates
          },
          metadata: hH
        }, null, FH), (0, RH.i)(HH, null, EH, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: HH => "_TransformVector3Normals" in HH,
            get: HH => HH._TransformVector3Normals
          },
          metadata: hH
        }, null, FH), (0, RH.i)(HH, null, OH, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: HH => "_TransformVector4Normals" in HH,
            get: HH => HH._TransformVector4Normals
          },
          metadata: hH
        }, null, FH), (0, RH.i)(HH, null, rH, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: HH => "_FlipFaces" in HH,
            get: HH => HH._FlipFaces
          },
          metadata: hH
        }, null, FH), hH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: hH
        });
      })(), HH.FRONTSIDE = ((0, RH.j)(HH, FH), 0), HH.BACKSIDE = 1, HH.DOUBLESIDE = 2, HH.DEFAULTSIDE = 0, HH._UniqueIdGenerator = 0, HH;
    })();
  },
  23308: (HH, IH, EH) => {
    var RH = EH(21764),
      hH = EH(21832),
      TH = EH(22195),
      sH = EH(22243),
      eH = EH(22128);
    const GH = "bakedVertexAnimationSettingsInstanced";
    function AH(HH) {
      var IH, EH, RH;
      const hH = null === (IH = HH.bakedVertexAnimationManager) || void 0 === IH || null === (EH = IH.texture) || void 0 === EH || null === (RH = EH.getInternalTexture()) || void 0 === RH ? void 0 : RH._bufferView;
      return hH instanceof Float32Array || hH instanceof Uint16Array;
    }
    function VH(HH, IH, EH, RH) {
      EH.nO(Number.POSITIVE_INFINITY), RH.nO(Number.NEGATIVE_INFINITY);
      for (let hH = 0; hH < 3 * IH; hH += 3) {
        const IH = HH[hH],
          TH = HH[hH + 1],
          sH = HH[hH + 2];
        IH < EH.x && (EH.x = IH), TH < EH.y && (EH.y = TH), sH < EH.z && (EH.z = sH), IH > RH.x && (RH.x = IH), TH > RH.y && (RH.y = TH), sH > RH.z && (RH.z = sH);
      }
    }
    function YH(HH, IH, EH) {
      EH && (HH.x -= HH.x * EH.x + EH.y, HH.y -= HH.y * EH.x + EH.y, HH.z -= HH.z * EH.x + EH.y, IH.x += IH.x * EH.x + EH.y, IH.y += IH.y * EH.x + EH.y, IH.z += IH.z * EH.x + EH.y);
    }
    function QH(HH, IH, EH, hH, TH) {
      const sH = RH.p.Rh[7],
        eH = RH.p.Rh[8];
      for (let GH = 0; GH < 2; ++GH) for (let AH = 0; AH < 2; ++AH) for (let VH = 0; VH < 2; ++VH) sH.set(GH ? IH.x : HH.x, AH ? IH.y : HH.y, VH ? IH.z : HH.z), RH.x.TransformCoordinatesToRef(sH, EH, eH), hH.minimizeInPlace(eH), TH.maximizeInPlace(eH);
    }
    function JH(HH, IH, EH, hH, TH) {
      const sH = RH.p.Rh[7];
      for (let eH = 0; eH < 3 * IH; eH += 3) RH.x.TransformCoordinatesFromFloatsToRef(HH[eH], HH[eH + 1], HH[eH + 2], EH, sH), hH.minimizeInPlace(sH), TH.maximizeInPlace(sH);
    }
    let OH = !1;
    OH || (OH = !0, sH.b.prototype.thinInstanceAdd = function (HH) {
      let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.kh().getEngine().getCaps().instancedArrays) return hH.e.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(HH) ? HH.length : 1);
      const EH = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(HH)) for (let RH = 0; RH < HH.length; ++RH) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, HH[RH], RH === HH.length - 1 && IH);else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, HH, IH);
      return EH;
    }, sH.b.prototype.thinInstanceAddSelf = function () {
      let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(RH.d.IdentityReadOnly, HH);
    }, sH.b.prototype.thinInstanceRegisterAttribute = function (HH, IH) {
      HH === eH.t.ColorKind && (HH = eH.t.ColorInstanceKind), this.removeVerticesData(HH), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[HH] = IH, this._userThinInstanceBuffersStorage.sizes[HH] = IH * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[HH] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[HH]), this._userThinInstanceBuffersStorage.vertexBuffers[HH] = new eH.t(this.getEngine(), this._userThinInstanceBuffersStorage.data[HH], HH, !0, !1, IH, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[HH]);
    }, sH.b.prototype.thinInstanceSetMatrixAt = function (HH, IH) {
      let EH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || HH >= this._thinInstanceDataStorage.instancesCount) return !1;
      const RH = this._thinInstanceDataStorage.matrixData;
      return IH.copyToArray(RH, 16 * HH), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[HH] = IH), EH && (this.VF("matrix"), this.hI || this.thinInstanceRefreshBoundingInfo(!1)), !0;
    }, sH.b.prototype.thinInstanceSetAttributeAt = function (HH, IH, EH) {
      let RH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return HH === eH.t.ColorKind && (HH = eH.t.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[HH] || IH >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(HH, 0), this._userThinInstanceBuffersStorage.data[HH].set(EH, IH * this._userThinInstanceBuffersStorage.strides[HH]), RH && this.VF(HH), !0);
    }, Object.defineProperty(sH.b.prototype, "cJ", {
      get: function () {
        return this._thinInstanceDataStorage.instancesCount;
      },
      set: function (HH) {
        var IH, EH;
        const RH = null !== (IH = this._thinInstanceDataStorage.matrixData) && void 0 !== IH ? IH : null === (EH = this.source) || void 0 === EH ? void 0 : EH._thinInstanceDataStorage.matrixData;
        HH <= (RH ? RH.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = HH);
      },
      enumerable: !0,
      configurable: !0
    }), sH.b.prototype._thinInstanceCreateMatrixBuffer = function (HH, IH) {
      let EH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const RH = new eH.b(this.getEngine(), IH, !EH, 16, !1, !0);
      for (let hH = 0; hH < 4; hH++) this.setVerticesBuffer(RH.createVertexBuffer(HH + hH, 4 * hH, 4));
      return RH;
    }, sH.b.prototype.AF = function (HH, IH) {
      let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        RH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      var hH;
      if (EH = EH || 16, "matrix" === HH) null === (hH = this._thinInstanceDataStorage.matrixBuffer) || void 0 === hH || hH.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = IH ? IH.length : 32 * EH, this._thinInstanceDataStorage.matrixData = IH, this._thinInstanceDataStorage.worldMatrices = null, null !== IH ? (this._thinInstanceDataStorage.instancesCount = IH.length / EH, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", IH, RH), this.hI || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.hI || this.refreshBoundingInfo());else if ("previousMatrix" === HH) {
        var TH;
        null === (TH = this._thinInstanceDataStorage.previousMatrixBuffer) || void 0 === TH || TH.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = IH, null !== IH && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", IH, RH));
      } else if ("splatIndex" === HH && IH) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = IH.length / EH, this._userThinInstanceBuffersStorage.data[HH] = IH, this._userThinInstanceBuffersStorage.strides[HH] = EH, this._userThinInstanceBuffersStorage.sizes[HH] = IH.length;
        const RH = new eH.b(this.getEngine(), IH, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = RH;
        for (let IH = 0; IH < 4; IH++) this.setVerticesBuffer(RH.createVertexBuffer(HH + IH, 4 * IH, 4));
      } else {
        var sH;
        HH === eH.t.ColorKind && (HH = eH.t.ColorInstanceKind), null === IH ? null !== (sH = this._userThinInstanceBuffersStorage) && void 0 !== sH && sH.data[HH] && (this.removeVerticesData(HH), delete this._userThinInstanceBuffersStorage.data[HH], delete this._userThinInstanceBuffersStorage.strides[HH], delete this._userThinInstanceBuffersStorage.sizes[HH], delete this._userThinInstanceBuffersStorage.vertexBuffers[HH]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[HH] = IH, this._userThinInstanceBuffersStorage.strides[HH] = EH, this._userThinInstanceBuffersStorage.sizes[HH] = IH.length, this._userThinInstanceBuffersStorage.vertexBuffers[HH] = new eH.t(this.getEngine(), IH, HH, !RH, !1, EH, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[HH]));
      }
    }, sH.b.prototype.VF = function (HH) {
      var IH;
      if ("matrix" === HH) this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(HH), null === (IH = this._thinInstanceDataStorage.matrixBuffer) || void 0 === IH || IH.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount);else if ("previousMatrix" === HH) {
        var EH;
        this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(HH), null === (EH = this._thinInstanceDataStorage.previousMatrixBuffer) || void 0 === EH || EH.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount);
      } else if ("splatIndex" === HH) {
        var RH;
        null === (RH = this._thinInstanceDataStorage.matrixBuffer) || void 0 === RH || RH.updateDirectly(this._userThinInstanceBuffersStorage.data[HH], 0, this._thinInstanceDataStorage.instancesCount);
      } else {
        var hH;
        HH === eH.t.ColorKind && (HH = eH.t.ColorInstanceKind), null !== (hH = this._userThinInstanceBuffersStorage) && void 0 !== hH && hH.vertexBuffers[HH] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[HH].isUpdatable() && this._thinInstanceRecreateBuffer(HH), this._userThinInstanceBuffersStorage.vertexBuffers[HH].updateDirectly(this._userThinInstanceBuffersStorage.data[HH], 0));
      }
    }, sH.b.prototype.thinInstancePartialBufferUpdate = function (HH, IH, EH) {
      var RH;
      if ("matrix" === HH) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof IH ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * EH * Float32Array.BYTES_PER_ELEMENT, 16 * IH), 16 * EH) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(IH, EH));else if (HH === eH.t.ColorKind && (HH = eH.t.ColorInstanceKind), null !== (RH = this._userThinInstanceBuffersStorage) && void 0 !== RH && RH.vertexBuffers[HH]) {
        const RH = this._userThinInstanceBuffersStorage.vertexBuffers[HH];
        if ("number" === typeof IH) {
          const RH = new Float32Array(this._userThinInstanceBuffersStorage.data[HH].buffer, this._userThinInstanceBuffersStorage.data[HH].byteOffset + EH * this._userThinInstanceBuffersStorage.strides[HH] * Float32Array.BYTES_PER_ELEMENT, IH * this._userThinInstanceBuffersStorage.strides[HH]);
          this._userThinInstanceBuffersStorage.vertexBuffers[HH].updateDirectly(RH, EH * this._userThinInstanceBuffersStorage.strides[HH]);
        } else RH.updateDirectly(IH, EH);
      }
    }, sH.b.prototype.thinInstanceGetWorldMatrices = function () {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const HH = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let IH = 0; IH < this._thinInstanceDataStorage.instancesCount; ++IH) this._thinInstanceDataStorage.worldMatrices[IH] = RH.d.Qh(HH, 16 * IH);
      }
      return this._thinInstanceDataStorage.worldMatrices;
    }, sH.b.prototype.thinInstanceRefreshBoundingInfo = function () {
      let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        hH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const sH = this._thinInstanceDataStorage.boundingVectors;
      if (HH || !this.rawBoundingInfo) {
        var OH;
        if (sH.length = 0, hH && function (HH, IH, EH) {
          const hH = HH._userThinInstanceBuffersStorage,
            sH = null === hH || void 0 === hH ? void 0 : hH.data[GH],
            OH = null === hH || void 0 === hH ? void 0 : hH.strides[GH];
          if (!sH || !OH || OH < 4 || !AH(HH)) return !1;
          const rH = HH._thinInstanceDataStorage.matrixData;
          if (!rH) return !1;
          const FH = {},
            MH = RH.p.Vector4[0],
            NH = RH.p.Rh[1],
            iI = RH.p.Rh[2],
            DH = RH.p.Rh[3],
            PH = RH.p.Rh[4],
            XH = RH.p.Rh[5],
            mI = RH.p.Rh[6],
            ZH = RH.p.Matrix[2],
            qH = HH.KN ? HH.KN.boundingBias : null,
            LH = HH.getTotalVertices();
          NH.nO(Number.POSITIVE_INFINITY), iI.nO(Number.NEGATIVE_INFINITY), DH.nO(Number.POSITIVE_INFINITY), PH.nO(Number.NEGATIVE_INFINITY);
          for (let TH = 0; TH < HH._thinInstanceDataStorage.instancesCount; ++TH) {
            const IH = TH * OH;
            MH.set(sH[IH], sH[IH + 1], sH[IH + 2], sH[IH + 3]);
            const hH = HH._getData({
              applyMorph: EH,
              applyBakedVertexAnimation: !0,
              bakedVertexAnimationSettings: MH,
              updatePositionsArray: !1,
              cache: FH
            }, null, eH.t.PositionKind);
            if (!hH) return !1;
            VH(hH, LH, XH, mI), YH(XH, mI, qH), NH.minimizeInPlace(XH), iI.maximizeInPlace(mI), RH.d.FromArrayToRef(rH, 16 * TH, ZH), qH ? QH(XH, mI, ZH, DH, PH) : JH(hH, LH, ZH, DH, PH);
          }
          return !(!isFinite(NH.x) || !isFinite(DH.x)) && (HH.getBoundingInfo().reConstruct(DH, PH), HH.rawBoundingInfo = new TH.e(NH, iI), function (HH, IH) {
            HH.length = 0;
            for (let EH = 0; EH < IH.boundingBox.vectors.length; ++EH) HH.push(IH.boundingBox.vectors[EH].clone());
          }(IH, HH.rawBoundingInfo), HH._updateBoundingInfo(), !0);
        }(this, sH, EH)) return;
        hH && (null === (OH = this.bakedVertexAnimationManager) || void 0 === OH ? void 0 : OH.isEnabled) && AH(this) ? this.refreshBoundingInfo({
          applySkeleton: IH,
          applyMorph: EH,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(IH, EH);
        const HH = this.getBoundingInfo();
        this.rawBoundingInfo = new TH.e(HH.minimum, HH.maximum);
      }
      const rH = this.getBoundingInfo(),
        FH = this._thinInstanceDataStorage.matrixData;
      if (0 === sH.length) for (let RH = 0; RH < rH.boundingBox.vectors.length; ++RH) sH.push(rH.boundingBox.vectors[RH].clone());
      RH.p.Rh[0].nO(Number.POSITIVE_INFINITY), RH.p.Rh[1].nO(Number.NEGATIVE_INFINITY);
      for (let TH = 0; TH < this._thinInstanceDataStorage.instancesCount; ++TH) {
        RH.d.FromArrayToRef(FH, 16 * TH, RH.p.Matrix[0]);
        for (let HH = 0; HH < sH.length; ++HH) RH.x.TransformCoordinatesToRef(sH[HH], RH.p.Matrix[0], RH.p.Rh[2]), RH.p.Rh[0].minimizeInPlace(RH.p.Rh[2]), RH.p.Rh[1].maximizeInPlace(RH.p.Rh[2]);
      }
      rH.reConstruct(RH.p.Rh[0], RH.p.Rh[1]), this._updateBoundingInfo();
    }, sH.b.prototype._thinInstanceRecreateBuffer = function (HH) {
      let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      var EH;
      if ("matrix" === HH) null === (EH = this._thinInstanceDataStorage.matrixBuffer) || void 0 === EH || EH.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, IH);else if ("previousMatrix" === HH) {
        var RH, hH;
        this._scene.needsPreviousWorldMatrices && (null === (RH = this._thinInstanceDataStorage.previousMatrixBuffer) || void 0 === RH || RH.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", null !== (hH = this._thinInstanceDataStorage.previousMatrixData) && void 0 !== hH ? hH : this._thinInstanceDataStorage.matrixData, IH));
      } else {
        var TH;
        HH === eH.t.ColorKind && (HH = eH.t.ColorInstanceKind), null === (TH = this._userThinInstanceBuffersStorage.vertexBuffers[HH]) || void 0 === TH || TH.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[HH] = new eH.t(this.getEngine(), this._userThinInstanceBuffersStorage.data[HH], HH, !IH, !1, this._userThinInstanceBuffersStorage.strides[HH], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[HH]);
      }
    }, sH.b.prototype._thinInstanceUpdateBufferSize = function (HH) {
      let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      HH === eH.t.ColorKind && (HH = eH.t.ColorInstanceKind);
      const EH = "matrix" === HH;
      if (!EH && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[HH])) return;
      const RH = EH ? 16 : this._userThinInstanceBuffersStorage.strides[HH],
        hH = EH ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[HH];
      let TH = EH ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[HH];
      const sH = (this._thinInstanceDataStorage.instancesCount + IH) * RH;
      let GH = hH;
      for (; GH < sH;) GH *= 2;
      if (!TH || hH != GH) {
        if (TH) {
          const HH = new Float32Array(GH);
          HH.set(TH, 0), TH = HH;
        } else TH = new Float32Array(GH);
        var AH, VH, YH;
        EH ? (null === (AH = this._thinInstanceDataStorage.matrixBuffer) || void 0 === AH || AH.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", TH, !1), this._thinInstanceDataStorage.matrixData = TH, this._thinInstanceDataStorage.matrixBufferSize = GH, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (null === (VH = this._thinInstanceDataStorage.previousMatrixBuffer) || void 0 === VH || VH.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", TH, !1))) : (null === (YH = this._userThinInstanceBuffersStorage.vertexBuffers[HH]) || void 0 === YH || YH.dispose(), this._userThinInstanceBuffersStorage.data[HH] = TH, this._userThinInstanceBuffersStorage.sizes[HH] = GH, this._userThinInstanceBuffersStorage.vertexBuffers[HH] = new eH.t(this.getEngine(), TH, HH, !0, !1, RH, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[HH]));
      }
    }, sH.b.prototype._thinInstanceInitializeUserStorage = function () {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      });
    }, sH.b.prototype._disposeThinInstanceSpecificData = function () {
      var HH, IH;
      null !== (HH = this._thinInstanceDataStorage) && void 0 !== HH && HH.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), null !== (IH = this._thinInstanceDataStorage) && void 0 !== IH && IH.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null);
    });
  },
  22806: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => RH.f
    });
    var RH = EH(22126);
    (0, RH.d)();
  },
  22126: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => XH,
      f: () => iI
    });
    var RH,
      hH,
      TH,
      sH,
      eH,
      GH,
      AH,
      VH,
      YH = EH(21947),
      QH = EH(21956),
      JH = EH(21972),
      OH = EH(21786),
      rH = EH(21764),
      FH = EH(21970),
      MH = EH(21808),
      NH = EH(21856);
    let iI = (() => {
      var HH;
      let IH,
        EH,
        RH,
        hH,
        TH,
        sH,
        eH,
        GH,
        AH,
        VH = FH.d,
        MH = [],
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
        oH = [],
        kI = [],
        CH = [],
        cH = [],
        UH = [],
        WH = [];
      return HH = class extends VH {
        get billboardMode() {
          return this._billboardMode;
        }
        set billboardMode(IH) {
          this._billboardMode !== IH && (this._billboardMode = IH, this._cache.useBillboardPosition = 0 !== (this._billboardMode & HH.BILLBOARDMODE_USE_POSITION));
        }
        get infiniteDistance() {
          return this._infiniteDistance;
        }
        set infiniteDistance(HH) {
          this._infiniteDistance !== HH && (this._infiniteDistance = HH);
        }
        constructor(IH) {
          let EH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(IH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new rH.x(0, 0, 1), this._up = new rH.x(0, 1, 0), this._right = new rH.x(1, 0, 0), this._position = (0, YH.j)(this, MH, rH.x.Zero()), this._rotation = ((0, YH.j)(this, NH), (0, YH.j)(this, iI, rH.x.Zero())), this._rotationQuaternion = ((0, YH.j)(this, DH), (0, YH.j)(this, PH, null)), this._scaling = ((0, YH.j)(this, XH), (0, YH.j)(this, mI, rH.x.One())), this._transformToBoneReferal = ((0, YH.j)(this, ZH), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, YH.j)(this, qH, HH.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, YH.j)(this, LH), (0, YH.j)(this, gH, 1)), this._infiniteDistance = ((0, YH.j)(this, yH), (0, YH.j)(this, oH, !1)), this.ignoreNonUniformScaling = ((0, YH.j)(this, kI), (0, YH.j)(this, CH, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, YH.j)(this, cH), (0, YH.j)(this, UH, !1)), this._poseMatrix = ((0, YH.j)(this, WH), null), this.pN = rH.d.Zero(), this._usePivotMatrix = !1, this._absolutePosition = rH.x.Zero(), this._absoluteScaling = rH.x.Zero(), this._absoluteRotationQuaternion = rH.h.Identity(), this._pivotMatrix = rH.d.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new OH.e(), this._nonUniformScaling = !1, EH && this.kh().addTransformNode(this);
        }
        getClassName() {
          return "YF";
        }
        get position() {
          return this._position;
        }
        set position(HH) {
          this._position = HH, this._markAsDirtyInternal();
        }
        isUsingPivotMatrix() {
          return this._usePivotMatrix;
        }
        isUsingPostMultiplyPivotMatrix() {
          return this._postMultiplyPivotMatrix;
        }
        get rotation() {
          return this._rotation;
        }
        set rotation(HH) {
          this._rotation = HH, this._rotationQuaternion = null, this._markAsDirtyInternal();
        }
        get WJ() {
          return this._scaling;
        }
        set WJ(HH) {
          this._scaling = HH, this._markAsDirtyInternal();
        }
        get rotationQuaternion() {
          return this._rotationQuaternion;
        }
        set rotationQuaternion(HH) {
          this._rotationQuaternion = HH, HH && this._rotation.nO(0), this._markAsDirtyInternal();
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty());
        }
        get forward() {
          return rH.x.TransformNormalFromFloatsToRef(0, 0, this.kh().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize();
        }
        get up() {
          return rH.x.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize();
        }
        get right() {
          return rH.x.TransformNormalFromFloatsToRef(this.kh().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize();
        }
        updatePoseMatrix(HH) {
          return this._poseMatrix ? (this._poseMatrix.RH(HH), this) : (this._poseMatrix = HH.clone(), this);
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = rH.d.Identity()), this._poseMatrix;
        }
        _isSynchronized() {
          const IH = this._cache;
          return this._billboardMode === IH.billboardMode && this._billboardMode === HH.BILLBOARDMODE_NONE && !IH.pivotMatrixUpdated && !this._infiniteDistance && !this._position._isDirty && !this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty);
        }
        _initCache() {
          super._initCache();
          const HH = this._cache;
          HH.localMatrixUpdated = !1, HH.billboardMode = -1, HH.infiniteDistance = !1, HH.useBillboardPosition = !1;
        }
        get absolutePosition() {
          return this.getAbsolutePosition();
        }
        get absoluteScaling() {
          return this._syncAbsoluteScalingAndRotation(), this._absoluteScaling;
        }
        get absoluteRotationQuaternion() {
          return this._syncAbsoluteScalingAndRotation(), this._absoluteRotationQuaternion;
        }
        setPreTransformMatrix(HH) {
          return this.setPivotMatrix(HH, !1);
        }
        setPivotMatrix(HH) {
          let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.RH(HH), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = IH, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = rH.d.Invert(this._pivotMatrix)), this;
        }
        getPivotMatrix() {
          return this._pivotMatrix;
        }
        instantiateHierarchy() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            IH = arguments.length > 1 ? arguments[1] : void 0,
            EH = arguments.length > 2 ? arguments[2] : void 0;
          const RH = this.clone("Clone of " + (this.name || this.id), HH || this.parent, !0);
          RH && EH && EH(this, RH);
          for (const hH of this.getChildTransformNodes(!0)) hH.instantiateHierarchy(RH, IH, EH);
          return RH;
        }
        IT() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return HH ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.nO(0), this._rotationQuaternion = this._rotationQuaternion || rH.h.Identity(), HH.decompose(this._scaling, this._rotationQuaternion, this._position), this.aJ(!0)) : (this._worldMatrix = HH, this._absolutePosition.nY(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.aJ(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this;
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.aJ(!0), this;
        }
        get rM() {
          return this._isWorldMatrixFrozen;
        }
        getAbsolutePosition() {
          return this.aJ(), this._absolutePosition;
        }
        setAbsolutePosition(HH) {
          if (!HH) return this;
          let IH, EH, RH;
          if (void 0 === HH.x) {
            if (arguments.length < 3) return this;
            IH = arguments[0], EH = arguments[1], RH = arguments[2];
          } else IH = HH.x, EH = HH.y, RH = HH.z;
          if (this.parent) {
            const HH = rH.p.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(HH), rH.x.TransformCoordinatesFromFloatsToRef(IH, EH, RH, HH, this.position);
          } else this.position.x = IH, this.position.y = EH, this.position.z = RH;
          return this._absolutePosition.RH(HH), this;
        }
        setPositionWithLocalVector(HH) {
          return this.aJ(), this.position = rH.x.TransformNormal(HH, this.pN), this;
        }
        getPositionExpressedInLocalSpace() {
          this.aJ();
          const HH = rH.p.Matrix[0];
          return this.pN.invertToRef(HH), rH.x.TransformNormal(this.position, HH);
        }
        locallyTranslate(HH) {
          return this.aJ(!0), this.position = rH.x.TransformCoordinates(HH, this.pN), this;
        }
        lookAt(IH) {
          let EH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            RH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            TH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const sH = HH._LookAtVectorCache,
            eH = 0 === TH ? this.position : this.getAbsolutePosition();
          if (IH.subtractToRef(eH, sH), this.setDirection(sH, EH, RH, hH), 1 === TH && this.parent) if (this.rotationQuaternion) {
            const HH = rH.p.Matrix[0];
            this.rotationQuaternion.toRotationMatrix(HH);
            const IH = rH.p.Matrix[1];
            this.parent.getWorldMatrix().getRotationMatrixToRef(IH), IH.invert(), HH.multiplyToRef(IH, HH), this.rotationQuaternion.fromRotationMatrix(HH);
          } else {
            const HH = rH.p.Quaternion[0];
            rH.h.FromEulerVectorToRef(this.rotation, HH);
            const IH = rH.p.Matrix[0];
            HH.toRotationMatrix(IH);
            const EH = rH.p.Matrix[1];
            this.parent.getWorldMatrix().getRotationMatrixToRef(EH), EH.invert(), IH.multiplyToRef(EH, IH), HH.fromRotationMatrix(IH), HH.toEulerAnglesToRef(this.rotation);
          }
          return this;
        }
        CQ(HH) {
          const IH = rH.x.Zero();
          return this.getDirectionToRef(HH, IH), IH;
        }
        getDirectionToRef(HH, IH) {
          return rH.x.TransformNormalToRef(HH, this.getWorldMatrix(), IH), this;
        }
        setDirection(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const hH = -Math.atan2(HH.z, HH.x) + Math.PI / 2,
            TH = Math.sqrt(HH.x * HH.x + HH.z * HH.z),
            sH = -Math.atan2(HH.y, TH);
          return this.rotationQuaternion ? rH.h.RotationYawPitchRollToRef(hH + IH, sH + EH, RH, this.rotationQuaternion) : (this.rotation.x = sH + EH, this.rotation.y = hH + IH, this.rotation.z = RH), this;
        }
        setPivotPoint(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.kh().getRenderId() && this.aJ(!0);
          const EH = this.getWorldMatrix();
          if (1 == IH) {
            const IH = rH.p.Matrix[0];
            EH.invertToRef(IH), HH = rH.x.TransformCoordinates(HH, IH);
          }
          return this.setPivotMatrix(rH.d.Translation(-HH.x, -HH.y, -HH.z), !0);
        }
        getPivotPoint() {
          const HH = rH.x.Zero();
          return this.getPivotPointToRef(HH), HH;
        }
        getPivotPointToRef(HH) {
          return HH.x = -this._pivotMatrix.m[12], HH.y = -this._pivotMatrix.m[13], HH.z = -this._pivotMatrix.m[14], this;
        }
        getAbsolutePivotPoint() {
          const HH = rH.x.Zero();
          return this.getAbsolutePivotPointToRef(HH), HH;
        }
        getAbsolutePivotPointToRef(HH) {
          return this.getPivotPointToRef(HH), rH.x.TransformCoordinatesToRef(HH, this.getWorldMatrix(), HH), this;
        }
        JO(HH) {
          if (this._isDirty) return this;
          if (this._children) for (const IH of this._children) IH.JO(HH);
          return super.JO(HH);
        }
        setParent(IH) {
          let EH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            RH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!IH && !this.parent) return this;
          const hH = rH.p.Quaternion[0],
            TH = rH.p.Rh[0],
            sH = rH.p.Rh[1],
            eH = rH.p.Matrix[1];
          rH.d.IdentityToRef(eH);
          const GH = rH.p.Matrix[0];
          this.aJ(!0);
          let AH = this.rotationQuaternion;
          return AH || (AH = HH._TmpRotation, rH.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, AH)), rH.d.ComposeToRef(this.WJ, AH, this.position, GH), this.parent && GH.multiplyToRef(this.parent.aJ(!0), GH), IH && (IH.aJ(!0).invertToRef(eH), GH.multiplyToRef(eH, GH)), GH.decompose(sH, hH, TH, EH ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.RH(hH) : hH.toEulerAnglesToRef(this.rotation), this.WJ.RH(sH), this.position.RH(TH), this.parent = IH, RH && this.setPivotMatrix(rH.d.Identity()), this;
        }
        addChild(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return HH.setParent(this, IH), this;
        }
        removeChild(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return HH.parent !== this || HH.setParent(null, IH), this;
        }
        get nonUniformScaling() {
          return this._nonUniformScaling;
        }
        _updateNonUniformScalingState(HH) {
          return this._nonUniformScaling !== HH && (this._nonUniformScaling = HH, !0);
        }
        attachToBone(HH, IH) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = IH, this.parent = HH, HH.getSkeleton().prepare(!0), HH.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this;
        }
        detachFromBone() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = HH ? this._currentParentWhenAttachingToBone : null, this) : (HH && (this.parent = this._currentParentWhenAttachingToBone), this);
        }
        rotate(IH, EH, RH) {
          let hH;
          if (IH.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.nO(0)), RH && 0 !== RH) {
            if (this.parent) {
              const HH = this.parent.getWorldMatrix(),
                RH = rH.p.Matrix[0];
              HH.invertToRef(RH), IH = rH.x.TransformNormal(IH, RH), HH.determinant() < 0 && (EH *= -1);
            }
            hH = rH.h.RotationAxisToRef(IH, EH, HH._RotationAxisCache), hH.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion);
          } else hH = rH.h.RotationAxisToRef(IH, EH, HH._RotationAxisCache), this.rotationQuaternion.multiplyToRef(hH, this.rotationQuaternion);
          return this;
        }
        rotateAround(HH, IH, EH) {
          IH.normalize(), this.rotationQuaternion || (this.rotationQuaternion = rH.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.nO(0));
          const RH = rH.p.Rh[0],
            hH = rH.p.Rh[1],
            TH = rH.p.Rh[2],
            sH = rH.p.Quaternion[0],
            eH = rH.p.Matrix[0],
            GH = rH.p.Matrix[1],
            AH = rH.p.Matrix[2],
            VH = rH.p.Matrix[3];
          return HH.subtractToRef(this.position, RH), rH.d.TranslationToRef(RH.x, RH.y, RH.z, eH), rH.d.TranslationToRef(-RH.x, -RH.y, -RH.z, GH), rH.d.RotationAxisToRef(IH, EH, AH), GH.multiplyToRef(AH, VH), VH.multiplyToRef(eH, VH), VH.decompose(hH, sH, TH), this.position.addInPlace(TH), sH.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this;
        }
        translate(HH, IH, EH) {
          const RH = HH.scale(IH);
          if (EH && 0 !== EH) this.setAbsolutePosition(this.getAbsolutePosition().add(RH));else {
            const HH = this.getPositionExpressedInLocalSpace().add(RH);
            this.setPositionWithLocalVector(HH);
          }
          return this;
        }
        addRotation(HH, IH, EH) {
          let RH;
          this.rotationQuaternion ? RH = this.rotationQuaternion : (RH = rH.p.Quaternion[1], rH.h.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, RH));
          const hH = rH.p.Quaternion[0];
          return rH.h.RotationYawPitchRollToRef(IH, HH, EH, hH), RH.multiplyInPlace(hH), this.rotationQuaternion || RH.toEulerAnglesToRef(this.rotation), this;
        }
        _getEffectiveParent() {
          return this.parent;
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== HH.BILLBOARDMODE_NONE;
        }
        aJ() {
          let IH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            EH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const RH = this.kh().getRenderId();
          if (!this._isDirty && !IH && (this._currentRenderId === RH || this.isSynchronized())) return this._currentRenderId = RH, this._worldMatrix;
          EH = EH || this.kh().activeCamera, this._updateCache();
          const hH = this._cache;
          hH.pivotMatrixUpdated = !1, hH.billboardMode = this.billboardMode, hH.infiniteDistance = this.infiniteDistance, hH.parent = this._parentNode, this._currentRenderId = RH, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const TH = this._getEffectiveParent(),
            sH = HH._TmpScaling;
          let eH,
            GH = this._position;
          if (this._infiniteDistance && !this.parent && EH) {
            const IH = EH.getWorldMatrix().m;
            GH = HH._TmpTranslation, GH.nY(this._position.x + IH[12], this._position.y + IH[13], this._position.z + IH[14]);
          }
          if (sH.nY(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, eH = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(rH.h.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.nY(0, 0, 0));
            }
          } else eH = HH._TmpRotation, rH.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, eH);
          if (this._usePivotMatrix) {
            const HH = rH.p.Matrix[1];
            rH.d.ScalingToRef(sH.x, sH.y, sH.z, HH);
            const IH = rH.p.Matrix[0];
            eH.toRotationMatrix(IH), this._pivotMatrix.multiplyToRef(HH, rH.p.Matrix[4]), rH.p.Matrix[4].multiplyToRef(IH, this.pN), this._postMultiplyPivotMatrix && this.pN.multiplyToRef(this._pivotMatrixInverse, this.pN), this.pN.addTranslationFromFloats(GH.x, GH.y, GH.z);
          } else rH.d.ComposeToRef(sH, eH, GH, this.pN);
          if (TH && TH.getWorldMatrix) {
            if (IH && TH.aJ(IH), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const HH = this.parent;
                HH.getSkeleton().prepare(), HH.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), rH.p.Matrix[7]);
              } else rH.p.Matrix[7].RH(TH.getWorldMatrix());
              const IH = rH.p.Rh[5],
                EH = rH.p.Rh[6],
                RH = rH.p.Quaternion[0];
              rH.p.Matrix[7].decompose(EH, RH, IH), rH.d.ScalingToRef(EH.x, EH.y, EH.z, rH.p.Matrix[7]), rH.p.Matrix[7].setTranslation(IH), HH.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(RH, IH), this.pN.setTranslation(IH)), this.pN.multiplyToRef(rH.p.Matrix[7], this._worldMatrix);
            } else if (this._transformToBoneReferal) {
              const HH = this.parent;
              HH.getSkeleton().prepare(), this.pN.multiplyToRef(HH.getFinalMatrix(), rH.p.Matrix[6]), rH.p.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix);
            } else this.pN.multiplyToRef(TH.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent();
          } else this._worldMatrix.RH(this.pN);
          if (EH && this.billboardMode) if (hH.useBillboardPosition) {
            const IH = rH.p.Rh[0];
            this._worldMatrix.getTranslationToRef(IH);
            const RH = EH.globalPosition;
            this._worldMatrix.invertToRef(rH.p.Matrix[1]);
            const hH = rH.p.Rh[1];
            rH.x.TransformCoordinatesToRef(RH, rH.p.Matrix[1], hH), hH.normalize();
            const TH = -Math.atan2(hH.z, hH.x) + Math.PI / 2,
              sH = Math.sqrt(hH.x * hH.x + hH.z * hH.z),
              eH = -Math.atan2(hH.y, sH);
            if (rH.h.RotationYawPitchRollToRef(TH, eH, 0, rH.p.Quaternion[0]), (this.billboardMode & HH.BILLBOARDMODE_ALL) !== HH.BILLBOARDMODE_ALL) {
              const IH = rH.p.Rh[1];
              rH.p.Quaternion[0].toEulerAnglesToRef(IH), (this.billboardMode & HH.BILLBOARDMODE_X) !== HH.BILLBOARDMODE_X && (IH.x = 0), (this.billboardMode & HH.BILLBOARDMODE_Y) !== HH.BILLBOARDMODE_Y && (IH.y = 0), (this.billboardMode & HH.BILLBOARDMODE_Z) !== HH.BILLBOARDMODE_Z && (IH.z = 0), rH.d.RotationYawPitchRollToRef(IH.y, IH.x, IH.z, rH.p.Matrix[0]);
            } else rH.d.FromQuaternionToRef(rH.p.Quaternion[0], rH.p.Matrix[0]);
            this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(rH.p.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(rH.p.Rh[0]);
          } else {
            const IH = rH.p.Rh[0];
            this._worldMatrix.getTranslationToRef(IH), rH.p.Matrix[1].RH(EH.getViewMatrix());
            const RH = this.kh().useRightHandedSystem;
            if (RH && rH.p.Matrix[1].multiplyToRef(HH._TmpRHRestore, rH.p.Matrix[1]), rH.p.Matrix[1].setTranslationFromFloats(0, 0, 0), rH.p.Matrix[1].invertToRef(rH.p.Matrix[0]), (this.billboardMode & HH.BILLBOARDMODE_ALL) !== HH.BILLBOARDMODE_ALL) {
              rH.p.Matrix[0].decompose(void 0, rH.p.Quaternion[0], void 0);
              const IH = rH.p.Rh[1];
              rH.p.Quaternion[0].toEulerAnglesToRef(IH), (this.billboardMode & HH.BILLBOARDMODE_X) !== HH.BILLBOARDMODE_X && (IH.x = 0), (this.billboardMode & HH.BILLBOARDMODE_Y) !== HH.BILLBOARDMODE_Y && (IH.y = 0), (this.billboardMode & HH.BILLBOARDMODE_Z) !== HH.BILLBOARDMODE_Z && (IH.z = 0), RH && (IH.y += Math.PI), rH.d.RotationYawPitchRollToRef(IH.y, IH.x, IH.z, rH.p.Matrix[0]);
            }
            this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(rH.p.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(rH.p.Rh[0]);
          }
          return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : TH && TH._nonUniformScaling ? this._updateNonUniformScalingState(TH._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.nY(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = rH.d.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix;
        }
        resetLocalMatrix() {
          let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.aJ(), HH) {
            const HH = this.getChildren();
            for (let IH = 0; IH < HH.length; ++IH) {
              const EH = HH[IH];
              if (EH) {
                EH.aJ();
                const HH = rH.p.Matrix[0];
                EH.pN.multiplyToRef(this.pN, HH);
                const IH = rH.p.Quaternion[0];
                HH.decompose(EH.WJ, IH, EH.position), EH.rotationQuaternion ? EH.rotationQuaternion.RH(IH) : IH.toEulerAnglesToRef(EH.rotation);
              }
            }
          }
          this.WJ.nY(1, 1, 1), this.position.nY(0, 0, 0), this.rotation.nY(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = rH.h.Identity()), this._worldMatrix = rH.d.Identity();
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(HH) {
          return this.onAfterWorldMatrixUpdateObservable.add(HH), this;
        }
        unregisterAfterWorldMatrixUpdate(HH) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(HH), this;
        }
        getPositionInCameraSpace() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return HH || (HH = this.kh().activeCamera), rH.x.TransformCoordinates(this.getAbsolutePosition(), HH.getViewMatrix());
        }
        getDistanceToCamera() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return HH || (HH = this.kh().activeCamera), this.getAbsolutePosition().subtract(HH.globalPosition).length();
        }
        clone(IH, EH, RH) {
          const hH = JH.c.Clone(() => new HH(IH, this.kh()), this);
          if (hH.name = IH, hH.id = IH, EH && (hH.parent = EH), !RH) {
            const HH = this.getDescendants(!0);
            for (let EH = 0; EH < HH.length; EH++) {
              const RH = HH[EH];
              RH.clone && RH.clone(IH + "." + RH.name, hH);
            }
          }
          return hH;
        }
        serialize(HH) {
          const IH = JH.c.Serialize(this, HH);
          return IH.type = this.getClassName(), IH.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(IH), IH.localMatrix = this.getPivotMatrix().GM(), IH.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (IH.IT = !0), JH.c.AppendSerializedAnimations(this, IH), IH.ranges = this.serializeAnimationRanges(), IH;
        }
        getChildTransformNodes(IH, EH) {
          const RH = [];
          return this._getDescendants(RH, IH, IH => (!EH || EH(IH)) && IH instanceof HH), RH;
        }
        dispose(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.kh().stopAnimation(this), this.kh().removeTransformNode(this), this._parentContainer) {
            const HH = this._parentContainer.transformNodes.indexOf(this);
            HH > -1 && this._parentContainer.transformNodes.splice(HH, 1), this._parentContainer = null;
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), HH) {
            const HH = this.getChildTransformNodes(!0);
            for (const IH of HH) IH.parent = null, IH.aJ(!0);
          }
          super.dispose(HH, IH);
        }
        normalizeToUnitCube() {
          let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            EH = arguments.length > 2 ? arguments[2] : void 0,
            RH = null,
            hH = null;
          IH && (this.rotationQuaternion ? (hH = this.rotationQuaternion.clone(), this.rotationQuaternion.nY(0, 0, 0, 1)) : this.rotation && (RH = this.rotation.clone(), this.rotation.nY(0, 0, 0)));
          const TH = this.getHierarchyBoundingVectors(HH, EH),
            sH = TH.max.subtract(TH.min),
            eH = Math.max(sH.x, sH.y, sH.z);
          if (0 === eH) return this;
          const GH = 1 / eH;
          return this.WJ.scaleInPlace(GH), IH && (this.rotationQuaternion && hH ? this.rotationQuaternion.RH(hH) : this.rotation && RH && this.rotation.RH(RH)), this;
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0);
        }
      }, (JH => {
        const OH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null !== (JH = VH[Symbol.metadata]) && void 0 !== JH ? JH : null) : void 0;
        IH = [(0, QH.I)("position")], EH = [(0, QH.I)("rotation")], RH = [(0, QH.B)("rotationQuaternion")], hH = [(0, QH.I)("WJ")], TH = [(0, QH.K)("billboardMode")], sH = [(0, QH.K)()], eH = [(0, QH.K)("infiniteDistance")], GH = [(0, QH.K)()], AH = [(0, QH.K)()], (0, YH.i)(null, null, IH, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: HH => "_position" in HH,
            get: HH => HH._position,
            set: (HH, IH) => {
              HH._position = IH;
            }
          },
          metadata: OH
        }, MH, NH), (0, YH.i)(null, null, EH, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: HH => "_rotation" in HH,
            get: HH => HH._rotation,
            set: (HH, IH) => {
              HH._rotation = IH;
            }
          },
          metadata: OH
        }, iI, DH), (0, YH.i)(null, null, RH, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: HH => "_rotationQuaternion" in HH,
            get: HH => HH._rotationQuaternion,
            set: (HH, IH) => {
              HH._rotationQuaternion = IH;
            }
          },
          metadata: OH
        }, PH, XH), (0, YH.i)(null, null, hH, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: HH => "_scaling" in HH,
            get: HH => HH._scaling,
            set: (HH, IH) => {
              HH._scaling = IH;
            }
          },
          metadata: OH
        }, mI, ZH), (0, YH.i)(null, null, TH, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "_billboardMode" in HH,
            get: HH => HH._billboardMode,
            set: (HH, IH) => {
              HH._billboardMode = IH;
            }
          },
          metadata: OH
        }, qH, LH), (0, YH.i)(null, null, sH, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: HH => "scalingDeterminant" in HH,
            get: HH => HH.scalingDeterminant,
            set: (HH, IH) => {
              HH.scalingDeterminant = IH;
            }
          },
          metadata: OH
        }, gH, yH), (0, YH.i)(null, null, eH, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: HH => "_infiniteDistance" in HH,
            get: HH => HH._infiniteDistance,
            set: (HH, IH) => {
              HH._infiniteDistance = IH;
            }
          },
          metadata: OH
        }, oH, kI), (0, YH.i)(null, null, GH, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: HH => "ignoreNonUniformScaling" in HH,
            get: HH => HH.ignoreNonUniformScaling,
            set: (HH, IH) => {
              HH.ignoreNonUniformScaling = IH;
            }
          },
          metadata: OH
        }, CH, cH), (0, YH.i)(null, null, AH, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: HH => "reIntegrateRotationIntoRotationQuaternion" in HH,
            get: HH => HH.reIntegrateRotationIntoRotationQuaternion,
            set: (HH, IH) => {
              HH.reIntegrateRotationIntoRotationQuaternion = IH;
            }
          },
          metadata: OH
        }, UH, WH), OH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OH
        });
      })(), HH.BILLBOARDMODE_NONE = 0, HH.BILLBOARDMODE_X = 1, HH.BILLBOARDMODE_Y = 2, HH.BILLBOARDMODE_Z = 4, HH.BILLBOARDMODE_ALL = 7, HH.BILLBOARDMODE_USE_POSITION = 128, HH.BillboardUseParentOrientation = !1, HH._TmpRotation = rH.h.Zero(), HH._TmpScaling = rH.x.Zero(), HH._TmpTranslation = rH.x.Zero(), HH._TmpRHRestore = rH.d.Scaling(1, 1, -1), HH._LookAtVectorCache = new rH.x(0, 0, 0), HH._RotationAxisCache = new rH.h(), HH;
    })();
    function DH(HH, IH, EH) {
      const RH = JH.c.Parse(() => new iI(HH.name, IH), HH, IH, EH);
      if (HH.localMatrix ? RH.setPreTransformMatrix(rH.d.Qh(HH.localMatrix)) : HH.pivotMatrix && RH.setPivotMatrix(rH.d.Qh(HH.pivotMatrix)), RH.hY(HH.isEnabled), RH._waitingParsedUniqueId = HH.uniqueId, void 0 !== HH.parentId && (RH._waitingParentId = HH.parentId), void 0 !== HH.parentInstanceIndex && (RH._waitingParentInstanceIndex = HH.parentInstanceIndex), HH.IT && (RH._waitingFreezeWorldMatrix = HH.IT), HH.animations) {
        for (let IH = 0; IH < HH.animations.length; IH++) {
          const EH = HH.animations[IH],
            hH = (0, MH.c)("BABYLON.Animation");
          hH && RH.animations.push(hH.Parse(EH));
        }
        FH.d.ParseAnimationRanges(RH, HH, IH);
      }
      return HH.autoAnimate && IH.beginAnimation(RH, HH.autoAnimateFrom, HH.autoAnimateTo, HH.autoAnimateLoop, HH.autoAnimateSpeed || 1), RH;
    }
    let PH = !1;
    function XH() {
      PH || (PH = !0, iI.Parse = DH);
    }
    null !== (RH = (eH = iI.prototype).JQ) && void 0 !== RH || (eH.JQ = (0, NH.j)("YF", "JQ")), null !== (hH = (GH = iI.prototype).applyImpulse) && void 0 !== hH || (GH.applyImpulse = (0, NH.j)("YF", "applyImpulse")), null !== (TH = (AH = iI.prototype).applyAngularImpulse) && void 0 !== TH || (AH.applyAngularImpulse = (0, NH.j)("YF", "applyAngularImpulse")), null !== (sH = (VH = iI.prototype).applyTorque) && void 0 !== sH || (VH.applyTorque = (0, NH.j)("YF", "applyTorque")), Object.getOwnPropertyDescriptor(iI.prototype, "physicsBody") || Object.defineProperty(iI.prototype, "physicsBody", (0, NH.f)("YF", "physicsBody"));
  },
  24014: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => VH
    });
    var RH = EH(17),
      hH = EH(21764),
      TH = EH(21791),
      sH = EH(22773),
      eH = EH(21771),
      GH = EH(21817);
    class AH {
      constructor(HH, IH, EH, RH) {
        this.name = HH, this.worldAxisForNormal = IH, this.worldAxisForFileX = EH, this.worldAxisForFileY = RH;
      }
    }
    class VH {
      static _NearestPow2Floor(HH) {
        return HH <= 1 ? 1 : 1 << Math.floor(Math.log2(HH));
      }
      static ConvertCubeMapTextureToSphericalPolynomial(HH) {
        var IH, EH;
        if (!HH.isCube) return null;
        null === (IH = HH.kh()) || void 0 === IH || IH.getEngine().flushFramebuffer();
        const RH = HH.getSize().width,
          hH = HH._sphericalPolynomialTargetSize,
          TH = hH > 0 ? this._NearestPow2Floor(hH) : 0,
          sH = !HH.noMipmap && !0 === (null === (EH = HH._texture) || void 0 === EH ? void 0 : EH.generateMipMaps),
          eH = TH > 0 && TH < RH && sH,
          GH = eH ? Math.max(0, Math.round(Math.log2(RH / TH))) : 0,
          AH = eH ? Math.max(1, Math.floor(RH / Math.pow(2, GH))) : RH,
          VH = HH.readPixels(0, GH, void 0, !1),
          YH = HH.readPixels(1, GH, void 0, !1);
        let QH, JH;
        HH.isRenderTarget ? (QH = HH.readPixels(3, GH, void 0, !1), JH = HH.readPixels(2, GH, void 0, !1)) : (QH = HH.readPixels(2, GH, void 0, !1), JH = HH.readPixels(3, GH, void 0, !1));
        const OH = HH.readPixels(4, GH, void 0, !1),
          rH = HH.readPixels(5, GH, void 0, !1),
          FH = HH.gammaSpace,
          MH = TH > 0 && TH < RH && !eH;
        return new Promise(HH => {
          Promise.all([YH, VH, QH, JH, OH, rH]).then(IH => {
            let [EH, hH, sH, eH, GH, VH] = IH,
              YH = AH;
            if (MH) {
              const HH = 4;
              EH = this._DownsampleFace(EH, RH, TH, HH), hH = this._DownsampleFace(hH, RH, TH, HH), sH = this._DownsampleFace(sH, RH, TH, HH), eH = this._DownsampleFace(eH, RH, TH, HH), GH = this._DownsampleFace(GH, RH, TH, HH), VH = this._DownsampleFace(VH, RH, TH, HH), YH = TH;
            }
            const QH = {
              size: YH,
              right: hH,
              left: EH,
              up: sH,
              down: eH,
              front: GH,
              back: VH,
              format: 5,
              type: EH instanceof Float32Array ? 1 : 0,
              gammaSpace: FH
            };
            HH(this.ConvertCubeMapToSphericalPolynomial(QH));
          });
        });
      }
      static _AreaElement(HH, IH) {
        return Math.atan2(HH * IH, Math.sqrt(HH * HH + IH * IH + 1));
      }
      static _DownsampleFace(HH, IH, EH, RH) {
        const hH = HH instanceof Float32Array ? HH : Float32Array.from(HH),
          TH = EH * EH * RH,
          sH = new Float32Array(TH),
          eH = IH / EH,
          GH = 1 / (eH * eH);
        for (let VH = 0; VH < EH; VH++) {
          const HH = Math.floor(VH * eH),
            TH = Math.floor((VH + 1) * eH);
          for (let AH = 0; AH < EH; AH++) {
            const YH = Math.floor(AH * eH),
              QH = Math.floor((AH + 1) * eH),
              JH = (VH * EH + AH) * RH;
            for (let EH = 0; EH < RH; EH++) {
              let eH = 0;
              for (let sH = HH; sH < TH; sH++) for (let HH = YH; HH < QH; HH++) eH += hH[(sH * IH + HH) * RH + EH];
              sH[JH + EH] = eH * GH;
            }
          }
        }
        if (HH instanceof Float32Array) return sH;
        const AH = new (0, HH.constructor)(TH);
        for (let VH = 0; VH < TH; VH++) AH[VH] = sH[VH] + .5 | 0;
        return AH;
      }
      static ConvertCubeMapToSphericalPolynomial(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const EH = IH > 0 ? this._NearestPow2Floor(IH) : 0;
        if (EH > 0 && HH.size > EH) {
          const IH = 5 === HH.format ? 4 : 3,
            hH = ["right", "left", "up", "down", "front", "back"],
            TH = {};
          for (const RH of hH) TH[RH] = this._DownsampleFace(HH[RH], HH.size, EH, IH);
          HH = (0, RH.b)((0, RH.b)((0, RH.b)({}, HH), TH), {}, {
            size: EH
          });
        }
        const hH = new sH.c();
        let AH = 0;
        const VH = 2 / HH.size,
          YH = VH,
          QH = .5 * VH,
          JH = QH - 1;
        for (let RH = 0; RH < 6; RH++) {
          const IH = this._FileFaces[RH],
            EH = HH[IH.name];
          let sH = JH;
          const OH = 5 === HH.format ? 4 : 3;
          for (let RH = 0; RH < HH.size; RH++) {
            let rH = JH;
            for (let YH = 0; YH < HH.size; YH++) {
              const JH = IH.worldAxisForFileX.scale(rH).add(IH.worldAxisForFileY.scale(sH)).add(IH.worldAxisForNormal);
              JH.normalize();
              const FH = this._AreaElement(rH - QH, sH - QH) - this._AreaElement(rH - QH, sH + QH) - this._AreaElement(rH + QH, sH - QH) + this._AreaElement(rH + QH, sH + QH);
              let MH = EH[RH * HH.size * OH + YH * OH + 0],
                NH = EH[RH * HH.size * OH + YH * OH + 1],
                iI = EH[RH * HH.size * OH + YH * OH + 2];
              isNaN(MH) && (MH = 0), isNaN(NH) && (NH = 0), isNaN(iI) && (iI = 0), 0 === HH.type && (MH /= 255, NH /= 255, iI /= 255), HH.gammaSpace && (MH = Math.pow((0, TH.Clamp)(MH), eH.k), NH = Math.pow((0, TH.Clamp)(NH), eH.k), iI = Math.pow((0, TH.Clamp)(iI), eH.k));
              const DH = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const HH = Math.max(MH, NH, iI);
                if (HH > DH) {
                  const IH = DH / HH;
                  MH *= IH, NH *= IH, iI *= IH;
                }
              } else MH = (0, TH.Clamp)(MH, 0, DH), NH = (0, TH.Clamp)(NH, 0, DH), iI = (0, TH.Clamp)(iI, 0, DH);
              const PH = new GH.b(MH, NH, iI);
              hH.addLight(JH, PH, FH), AH += FH, rH += VH;
            }
            sH += YH;
          }
        }
        const OH = 6 * (4 * Math.PI) / 6 / AH;
        return hH.scaleInPlace(OH), hH.convertIncidentRadianceToIrradiance(), hH.convertIrradianceToLambertianRadiance(), sH.f.FromHarmonics(hH);
      }
    }
    VH._FileFaces = [new AH("right", new hH.x(1, 0, 0), new hH.x(0, 0, -1), new hH.x(0, -1, 0)), new AH("left", new hH.x(-1, 0, 0), new hH.x(0, 0, 1), new hH.x(0, -1, 0)), new AH("up", new hH.x(0, 1, 0), new hH.x(1, 0, 0), new hH.x(0, 0, 1)), new AH("down", new hH.x(0, -1, 0), new hH.x(1, 0, 0), new hH.x(0, 0, -1)), new AH("front", new hH.x(0, 0, 1), new hH.x(1, 0, 0), new hH.x(0, -1, 0)), new AH("back", new hH.x(0, 0, -1), new hH.x(-1, 0, 0), new hH.x(0, -1, 0))], VH.MAX_HDRI_VALUE = 4096, VH.PRESERVE_CLAMPED_COLORS = !1;
  },
  23982: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => eH,
      d: () => GH,
      h: () => AH
    });
    var RH = EH(22090),
      hH = EH(23989);
    let TH = 0;
    const sH = (HH, IH, EH, sH) => {
        if (!HH[EH]) {
          const eH = HH.useDelayedTextureLoading;
          HH.useDelayedTextureLoading = !1;
          const GH = HH._blockEntityCollection;
          HH._blockEntityCollection = !1;
          const AH = RH.f.CreateFromBase64String(IH, sH + TH++, HH, !0, !1, RH.f.BILINEAR_SAMPLINGMODE);
          HH._blockEntityCollection = GH;
          const VH = HH.getEngine().getLoadedTexturesCache(),
            YH = VH.indexOf(AH.getInternalTexture());
          -1 !== YH && VH.splice(YH, 1), AH.isRGBD = !0, AH.wrapU = RH.f.CLAMP_ADDRESSMODE, AH.wrapV = RH.f.CLAMP_ADDRESSMODE, HH[EH] = AH, HH.useDelayedTextureLoading = eH, hH.b.ExpandRGBDTexture(AH);
          const QH = HH.getEngine().onContextRestoredObservable.add(() => {
            AH.isRGBD = !0;
            const IH = HH.onBeforeRenderObservable.add(() => {
              AH.isReady() && (HH.onBeforeRenderObservable.remove(IH), hH.b.ExpandRGBDTexture(AH));
            });
          });
          HH.AM.add(() => {
            HH.getEngine().onContextRestoredObservable.remove(QH);
          });
        }
        return HH[EH];
      },
      eH = HH => sH(HH, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      GH = HH => sH(HH, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      AH = HH => sH(HH, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAABGSklEQVR42u3cx4tb6brvcf0DmmpUoxrUoAY1KCgwFAZjME1jjGmMTWNs2tjY2MY2DjjinHPOOeec3dXOOeecU2VlaSksSc/9aq1X0pJKqmD3Dn3upvnCSe197v38nlfS2fscW1x+kbCMloAsFY/skEY5KbVySb7JXfkoT+WtvJGX8ol/67s8lDr+o065KW65Jl7+q/zyF3/nWTpJx+gQ/7H94pPd/Oe38yduEZds4E9dK/Wykj95GX/OYvkq8/kz58h7mcmfP41/hMnyTCbIIxkn9/nv5raMlOsyTK7IELkgg6RKBshp6ScnpI8ckd5yQHrJHvmd/3578I/QjX+E32SNdOEfobMskV9lAf+vmiOdZIZ0lKnSQSZKe/7kSv7kdjKchkoFf2q59Ke+UsafWCY9pZQ/rZQ/rUS6Umcp5k8q5k8p5k8p4k8p4k8o4u928Hc7+Dsd/F1mpWLn7zArVhWpHOlsRvYC/Yf++t8A/j8fQCxrADvTA/j6vwH8/zGAaOzX/w3g/+cBaJEuEkqMMQbg/t8A2jiA8n/+AHzB7qLFx8K2zBhAA5Q16QE8+98A/q8PwOXvLYHYePEllsO666cGcPR/A/jnDaDRN0C80Ynija8QV2K3GsBlywDe5h3AVYAvAv0X4IUH4P7fAP7bB9DgGyau0BRx6yvFGd8j9YlTUp24LF+g/gDKGwbwAqwnwD1o5QD2/VcPYMT/BmD9q94/Thq0GeKMrpbG2B6pi5+S78kBJAoNoDFrAFU/PICP/+UD6PL/xwDqAlOlNjBH6sMQ6XulJnZavsWvyGcG8D7BABJvsgZwxxiAK2sAZ9ID8P/gAF78QwbQ/v/eAGqDc6Tav1BqtA1SE90v1fpp+Rq7Ip/id+UdA3jNAJ4nPsnjRGYAN0C9whe8C+kB+BmAP2sAu/jPNx1AjRrAlzwDeNqKARz/3wD+7r+qtSXy1QdLcJN8Dx+Qb9Ez8kW/Ih9id+Vt/Jm8sgzgfqL5ARwxBuBjAN70ADbznSE5gDWMJzWARekBvGsygLFy738D+Hf+9T20Sj77VsuXwFb5oh2SL5Gz8lG/Ku8ZwJvYM3kZfyPP4h/lUeIbA6iV24lGuZ5IDcALjQ8aP4+zOYCD/Pt70wNwqQE0WAbwLWcAr/MM4FbOAP78Bw+g6L97AN/CG+Sjb6N89O+Qj9oR+Rg+J++jV+Wtfk9eMYAXsTfyhAE8jH+TuwzgVqLBGMDlhFvOJ7zyZyI5AB8D8EHjyxrAtjYN4EnWAEYYA7j8XzCAXwoMoOJvHsB/aARfwtvkvS/ZHnkfOCbvtCp5G74mb6L35KX+TJ4xgMexj/IgOYB4rdyMN8i1hFMuGQPwyDlGcJoRHE+YAzgA/l7jn1VwqwE0WgZQLUuNAXxmAB+MAcyQVxClBvCQAdxtxQD25x1A1x8ewB9tGEAljO3+7wzgU2SPvPPvlje+A/LGf0LeBP+S16Fr8jJyT55Hn8kT/Y080j/K/dhXuROvYQD1cjWeHIBL/lIDOEXH6TAdoD0JcwBbGcAmBrCeL4Br+AWQO4DZ/MQ0B/C8mQGczxnA4YIDaM0LUNmqAfz2LxmA/b9xAB8iB+VN4IC88h2Rl/5T8jJwXl5o1+V56L48jTyTx9HX8kD/IHf1r3IrViPXY/VyJd4oF+IuqYq75SzYJ0E/ZgzAI/tpD6/DDgaylZdiE9efHMBqYwDfGcBXBvBJ5uUMYJIxgAeWAVyzDODcv2gAA35oAEV5BpAZwT9sAO+iR+VV4Ii88B2X576z8tx/QZ4Fb8gT7b48Dj+Vh5HXcj/6Qe7oX+SmXi3XYnVyOdbAAJwMwCVnGMHJuEeOAn/IGICbAbiMAWzhC+NGvjOs49fD6kSNrFADWGgM4L0awEs1gMeWAdxUA7jUxgGs+Le8AP+nBvAmelJeBE/IM99peeqrkif+S/I4cFMeMYAHoadyP/xK7kTey63oF7muf5creq1c4hU4H2uUczGXnGYEJxjBETpE+4DfbQzAqQZQzwBqZVWiWlbwS2JJ4ossTHxUA3ijBvDMGMB4YwB3ZFTeAZz6FwzA+gL0+jcN4L/sl8BL/Yw8004Df04e+87LI98Veei/JQ+CD+Se9lTuhF7JrfB7uRH5JNei3+SyXiMX9Hqp0hvkbMwppxjBcTrCEA7SXtrF67Ad/C1c/wauf60awHJjAJ8ZwAeZm3gnsxJvZHrihUxNpAZwvxUDOKQGsJsBbP+bB/A7df/JAfzD/mcBz3WuXvtTHvmr5IHvotz3XZN7DOBu4IHcCT6VW9oruRF6J9fCn+RK5KtcjFbL+Wid/MkITuuNcpIRHKPDjGA/8HtoJ98RtvFrYTNfGDeAv5bnf2XiOwP4KosTn2SBMYC3DOCVMYApiacyKfFIxifuy5hEcgA3YLrKAC7KYPlLBjKA/nKSARzLM4DNagCr/4UD6PRvGsB/YARPda5eOy8PAhfknu+y3PVdlzu+O3LL/0BuBp7Kde2lXNPeyZXQR7kU/irnI9+lKlojZxnBKV6B44zgCB3iI2E/7aEd4G8Ff1O8Tjbw03FNvFpW8jNyGc//Yp7/BYn3lgE8ZwBPZKIxgHsM4LaMSlyXEYkrMjTBABJVDOCsMYC+lgH0VAPo/hMDqGhxAJ1bOYCyf+4AHuuX+Ky/yMVfAv6q3PLdlJsM4Ib/oVxnANeCL+WK9lYuaR/kQuiLVIW/yblItZyO1spJRnCMl+AwQzhAe2kXXxB38B1hC18WN4K/HvzV8e8M4KssjX+WRfGPMp/nfw7P/8zES5mWHsADGZe4ywBuGQMYbgzggjmAxBnpn2AAiaPSJ5EcwD4GsAuubWoA6/83gB/964F+Re6Grsjt4FW56b8uN3y35LrvrlzzPZQr/qdyOfBSLgbfyHntvVRpn+Rc6KucCX+Xk5EaOR6plSOM4FC0XvYzhD20U6+TbeBvidXKBn42rot9l1Vc/4r4FwbwiQF8kHnxtzI7/lpmxl8wgGcyOfE4awAjE9cYwGXLAE4zgBMM4AgDOCi9E3ulZ4IBJBhAYpN0S6QGsByyxX/bAEqyBtDxJwbwX/xL4J5+TW6Hr8nN4HW57r8B/G254rsnl32P5BIDuOB/IecDb6Qq+F7OaR/ljPZFToW+yXFGcJQRHGYEB3gN9tJufiHsoK18UdzET8YN4K+JfZOVsa+yPPZJlsQ+yML4OwbwhgG8khnx5zI1/lQmxx/JhPh9BnBHRiduqgFcYgDnGcCfWQP4Iz2AndkDSKySLgkGkGAAifnyS2K2GsCUv2UAxQUH8A//HwbdiV2Xm2HwtRtyNXAL/DtyyXdfLjCA876n8hcDqAq8lnOBd3Im+EFO8QqcYATHGMFhRnAwXC37GcIe2sl3g+18SdwC/kZ+Mq7Xv8lq/SsD+CzLYh9lcey9LIi9lbmx1zIr/lKmx58xgCcyKf6QAdyTsfHbMjp+Q0bGrxoDGMIABiXOqQEcVwM4wAD2qAFsVQNYl38ACQaQYAAJBpBgAIm2DKDrDwzg7/gp+G8ewc3YTbkevilXtZs897flov8u+PfBfyRVDOCc74Wc9b+S04G3cpJX4ETwoxzTPssR7ascYgT7+U6whyHs4svhDtoa/S6b+Lm4Afi1+hdZpX+WFfpHWap/kEWxdzI/9kbmxF7JzNgLmR57KlPijxnAAxkfv8sAbjEAvgDGr8iw+EUZEv9LBsX5CZjgJ6AxgMMMgF8AxgB2SA9jABuNAXRt7QASDCDBABIMIMEAEgwgwQAShQbQ+n9VUNP/WcA/4HvA9RhXH7nFl7xbciFwR84zgCrfA/mTAZzzPZEzvudy2v9STvrfyHFegaO8AkcYwSFGsJ+XYC/fCXbTDoawLfJNtvBTcSOtj36RNdFPshL85eAv0d/JQv2tzNNfyWzwZ8aeybTYE5kceyQTY/dlfOyOjInflFHxawzgMgO4wACqGMBZGRDnJ2D8mPSNH8oZwBY1gLUMYCUDWMYAFlkGML1tA0gwgAQDSDCARKEBFP7nA/6RA7jCAC5FbssFDfwg+P57wD8A/pGcZgAnGcAJ30s57n8tR/1v5XDgvRxiBPsZwV4+DvYwhJ38OthOW8JfZBNtiHyWtZFPsir6UVZEP8jS6DtZBP4C/bXM1V/KLP25zNCfylT9MQN4IBNid2Vc7LaMid2QUTGe/xif/3E+/+N/MoDTagD8AkgOIM4A4rulZ5wBxJMD2JBnAPPyDGAs+KPyDKBf4QEkGECCASQYQIIBJP5d/7OAf+MILvH/8Rcid+Sv0B35kwGcC9zn4h/IKQZwkgEc9z2TY3wMHPG9kkO8AgcZwX5GsJcR7GEEO/liuJ0hbAl9ks20IfxR1tHqyAdZGXkvyyPvZEn0rSyMvpZ50ZcyR+f69WcyHfwp+kOZpN+XCfodGcsQR/N9ZGTsCgO4KENjf8ngGJ//DKB//DgD4BdAnC+A8X0MgF8A8e3mAOIb5Lf4GukaTw5gqWUAsywDmNDGAXQrPIAEA0gwgAQDSDCABANIMIBEqZE9UaIqVhVZcqSzJf5LBnCep7cqeoefd3flrHaPz/r7PPcPuPpH4D+RowzgMK/AIV6BA3wX2M8I9vJ9YDcfBzv5TrCdIWzVPshm2hj6IOtpTei9rAy/kxW0NPJWFkVeywLw50ZfyOzoM5kRfSLT9EcyWX8gE/W7Ml6/LWP1GzKaXyQjYjz/sQsMoIoBnJWBsZPSP8bnf+wwA+ALYHwvA+ALYHwbA9icPYA4A4gvlF/jc+WXeGoAk/+GAfzSigGUtXEAagS5/bsHUMUAzkXv8tv+Lt/w78lJBnCcARxlAEd8j4F/KgcZwH5egX2MYA8j2M0IdjCC7bQ1+E4200btnayntbQq9FZW0rLwG1kSfiULIy9lXuSFzIk8k1ngT48+lqnRBzI5es+4/nH6TRmjX5dR+hUZoV+SYfp5GRLj+Y/x/BsD4PM/xvMf2y+9Y3z+x3YwgK0MgF8AcX4CxlczgBUMYEn2AOLTpGOcAcStAxje4gBK/5MDSGfL9K/86xwDOM0ATjGAEwzgePC+HAk8kMP+R+A/lgO8Avt5BfYygj2MYBcj2MEItvOdYEvgjWymjcE3sp7Wam9kNa2k5aFXsoQWhV/K/PBzmRt+JrMjT2RG5LFMizyUKdH7Mol/3PHRWzI2al7/SP2yDNe5fr1KhujnZJDOAHSe/9gRywB2mwOI8fzH+AIY4ydgfBUDWK4GsEANYGb2AOIMIM4A4gwgzgDihb4E9rAMoMvfMIDiHxxAzghy+7v+Os0ATgJxnAEcYwBHGMAhBnDQ/xD4R1z9Y+CfyG5GsJMR7GAE22gLvww2M4SNgVeyntYGX8lqWqm9kuXaS1lKi7UXsiD0XOaFnsmc8BOZGX4s08MPZWrkvkyO3JWJfPkcF+X6o9dkVJTrj15kAOcZwJ8yWD8jA/WT5gB0nn/9gPyh8/zHdjGA7WoAfAGMrZXfYiula4wBxBYbA/glPqd1A4gzgDgDiDOAOAOIM4A4A4gzgDgDiDOAeGoAnZoZQL7vAcXNvgI/PYC21NxfJ+N35Difw0cZwJHQPb7h35cDDGA/HwN7eQX2MIBdDGAHbWcEW2kLQ9jECDb4X8h6Wht4IatpZfCFLKelwefgP5eF2jOZrz2VOaHHMiv0SGaEHsi08H2Zwj/WJPAnRG7KuMh1GRO5ygAuMYALMizK9UfN6x+on5D++lHpqx9iAFy/vkd66Tulp87nf2yzGsAaYwBdYvwCiPEFMMZPwNgc6RSbwQCmMoBJDGA8AxhjGcCQtg0gzgDiDCDOAOK5A/iZL4L/xhEU6hgDOMIADnORB/kiuF+7L/sYwR5GsJtXYCevwA5GsI22MILNfCfYxAg20Hpa638uq2ll4LksDzyTpbQ4+EwWBp+A/0Tmao9ltvZIZoI/PQQ+/xiTwuCHwQ9fl7Hgj45clpGRCzI8wvVHuf7oGRkU5fqjxxkAz79+kOvfxwB2MwCef53Pf32TdNfXSzedz39jAEvVAPgFEJttDKBjjAHEGECMAcSSAxj59wwgzgDiDCBeYfZPHsARBnCIL2IHGcB+cPbyMbCHAeziy+AOXoHtvgdc/SPwH4H/WDbSBoawjtbQKlrpfyLLaWngiSymhYHHMj/4WOYGH4H/QGYyqun8uVO1uzI5dFsmhm7K+BD44WsyOnxFRoUvygjwh0W4/shZGRzh+qMnGMBR6Rfl+qP7jee/t87zr/P861sYAJ//Op//Op//Ol8AdT7/db4A6skB8AUwxi+AGD8BYxNpnDmA2EhpFxtGDCDGAGL9pTzGAGIMINaaAXTMGUBqBAwgXqZiAPF/0AAOxW/LAQawL3JH9jCA3SDtDN7jW/592ea/L1sZwRZGsMn3EPhHXP0jWUtrGMIqWknLaan/sSzmI2MhzQ88lLm8ILMZ0kyaEbwr07Q7MkW7JZO0mzJBuy7jQtdkTAj80CUZGT4vw8NVMjR8jgGclkERrj/C9Ue4/uhBcwBRnv/oDukZ3coAeP51nn+dz3+dz3+dz3+dz3+dL4A6XwB1BqAzAJ0B6AxAZwD6aKnUrQMY2HQAMQYQYwCx/AMoNgaQ7xXIMwCjYktFmbIG4PjPDmA/A9jH7/A9DGBX+I7sAGo7I9gWuMu3/Ht80bvP1d8H/z5X/wD8B7KaVjKIFbSMlvLvL6aFjGU+zeXvmc3fO4s/Y0bwjkwL3pYpwQz+eO2qjNWuyOgkfuiCjAhVybAQ+OEzMjh8UgaGjzOAI9Ivckj6RsCPcP2RXQyA649y/dGN0j3K8x9drQawjAEsYgDzGQBfAHW+AOp8AdT5AqjzBTA9gBHSTmcA+mCp0AeC38wAYgwgxgBi/BSMtXUApc0PIO5IZzOym/0nRrAnfkv26LdkV/S27OCzeXvojmxlBFuA2wTgBv9dvujdBf8eV3+fq78vK733ZQUt499eQotoIc3nv2Yu/7WzaZb/jswI3JZpgVsyJXBTJgevy8TgNRkfTOJfljHaRRmlga/9JcNDf8rQ0BkZEjolg0I8/eGj0j98WPqFuf7wPgawhwFw/ZFt8ntkMwPYwADWMgCe/yjPf5TP/yjPf5TnPzqb+AKo8/mvT1IDGEujmg5AZwA6A9AZgJ4aQPecAfxqDiDGAGIMIMYAYgwg1poBlLRtAAWzFe5nB7ArflN2MoAd/B7fFr4lW/iM3qzd5rf9HdkQuAP+Hb7o3eHq73L1Zsu9d2UpLaFF/PsLaL7vjsyl2b7b4N+SGTTNfxP8GzI5AH4giX9FxgUvyZhgEv+8jNSqZLj2pwzTzsoQ7bQMDnH9oWMyIMT1h7j+8H4GAH6Y6w9vZwBbGABf/iJcf4Rv/xGuP8LzH+H5j/L8R3n+ozz/0enEAKIMIDo+ZwBDCw9AZwA6A9AZgN6KAcQYQIwBxMpVDCBWavT3DqCFEfzMQHYwgO36TdnK7/EtDGBT6JZs4LN6A0/2Oq53DVe8yn8b+Ns8+be5+js8+Xdksfe2LKQFNM93C/xb4N+Smb6bMoOm+a/LFJrsvyYT/VdkQuCyjAuAH7ggo4PgB6tkRPCcgT80ia+dlEEaT792RPqD3y8Efmiv/BHazQC4/jCf/WGuP8z1h9dJtzDPf2QFA1jKAHj+Izz/EZ7/yExjAB2jU2iiOYAoXwCjDCA63DIAfgHo/ahP4QHoDEBnADoD0Ns4gFiJqlhVZCl3AI5/3QBaalv8hmzRb8jm6A3ZyO/yDXxDX89n9VpaHbwpq3i+V3LNy2kZwEtoMS303pT5NI/m0GzvDfCvy3Sa5rsmU2iy74qJ778k4/wXZWwSPwB+APzAORkePCNDg6dlSNDEH5jE18DXDkhfbZ/00bj+0E7pFeL6Q1x/aKP0CK1nAFx/mOsPc/3hJbRQOofnMQCe/wjPf4TP/wif/5EJDIDP/yif/9GR5gCifAGM8gsgah1A79YNQGcAOgPQGYDOAHQGoLd2AHlGoLIZ2bP7dw1gS/y6bNKvy4YoRa7LOn6br9FuyGpaGbwhK3jCl/tv8C3/BvA3ePJv8OTfAP+6zKU5NItmeq/JdJrmuwr+FfAvy0TfJZnguwj+BRnrPy+j/VUyyv+niR8AP3BKhgROyOAg+MEjMiB4iAFk8P/QdklvbYf00rh+jevXuP4Q1x/i+kMMIMSXvxDPf5jnP8zzH55FPP9hnv/IJHMAEZ7/CAOIjGAAw7IHEGUAUQYQZQDRnj8+AL1cxQD0UiO7/pMDyJvN7O8cwMb4NdmgX5P10WuyNnJN1vDbfBW/0VfybX0FX9yW8fm9hBbznC/kqhfQPJpLswGf5b0qM7xXwL8iU2mK95JMoonAj/ddkHG+8zLW95eM9iXxz8kI/1kZ7j8tw/wnTfzAMRkUAD8AfvCg9Avul75B8IMZ/J4a169x/RrXr62RbtpK+U1bzgC4/hDXH+L6Qzz/YZ7/8DTi+Q/z/Id5/iNjaJQxgHYRBhBhABF+Akb6Nx1AlAFEGUCUAUQZQJQBRFszgArLAMoyAzAqtlRklncAjtYPoFA/MoAN8auyLnZV1uhXZXXkqqwMX5UVoauynJ9qS/nGvoQWBa7yE+8qP/Gugn9F5tBsmgn4DO9lmQb4VJrivQj+BZlI473nZZz3L/CrwP9TRvnA952R4T6F7z8ug/3g+4/IwCR+4ID0C4Af2CN9ArsYAPjBbdIzCH4Q/CDXr/HNX1sFPp/9Gp/9Gtevcf2hucTzH+L5D3H9ockMgOsP8/yH+fwP8/yHef7DfP5HBmcGEOlLfP5HGECEAUR6GAMoif6WPYAoA4gygCgDiLZ1ACVNB2DkSGfT/6YBtKXUANbGr8ia2BVZpV+RlZErsiJ8RZaFrshSfqcvpkV8c18QuAL+ZX7iXQb/ksyimTQd9GmgTwV8Mk0CfQKN91aBXyVjvH/KaO85GeU9A/5p8E/KMN8JGeoD33fUxPcfkgF+8P3g+8H3gx/YIb0D26RXYIv0DGyS3wMbGMBa6R5cLd2CyetfxgC4fo3r17h+jevXZhLPf4jrD/H8h8YTz39otGUAQ4jnP8zzH2YAYQYQTg6gV2YAEQYQYQARBhApMIAoA4gygCgDiFaYNRlAaQsDyDMC3d60f+UIkq2OX5KVMdIvyfLoJVkaviRLQpdkkXZJFtJ8frbN49v7XJrNF7lZPO0zeNqn0zTQpwA+mSZy7RNAHw/6ONDH0GjgR3lPywjvKRnuBd97HPxj4B+RQb7DMtAHvu+A9Pftk74+he8H3w++H3y/wg+sk+4B8APgB3n6g1x/kG/+wQUMgOvXuH6N69f48qdx/RrPv8bzr/H8h3j+Q3z+h3j+Qzz/IQYQSg6A5z/M858cQJgBhHn+wwwg3M0ygM5SHGEAEQYQYQARBhApMIAoA4iWqcCP/k0DaJItu58dwMr4RVkRuyjL9IuyNHpRFkcuyqLQRVmgXZD5NDd4Qebw7X02zeSL3Ayaxuf6VD7Xp4A+CfSJNAH48aCP9Z4F/wz4p2Uk8COAH+49YeJ7j8pgL/jeQzLQe1AGePcb+P3A7+sD3we+D3wf+D7w/eD7wfevMfEDK2ipdA0sli4B8INcf5DrD3L9Qa5f4/o1rl/j+dd4/rXRxPVrXL/G86/x/Id4/kNcf4gBhBhAiOc/xC8A6wDCDCDchRhAOM8AIgwgwgAiDCDSzACiJapiS3/zAFpboQEsj1+QZbELskS/IIujF2Rh5IIsCJ+XeaHzMlc7L7P5zT6LZgb+kun+v/h9XwV+Fd/y/5RJNBH0JPw44MeCPoZGeU7JSM9JGeE5IcM9x2WY55gM8RwB/7DCP2Die/dKPy/43l3Sx7tD/vBuk97eLQxgEwPYIL/71ksP3xoGsEq6+cH38/T7efoDPP2B+TRHfg3wzT/A9QenEtcf5PqDPP9Bnn+N69e4fo3r14aYA9AYgMYANJ7/0B9qADz/IQYQ4gtgiAGEcgYQZgBhBhBmAOE8AzBiAJEyVakaQYEBpHOks/07RpCvpfHzsjh2Xhbp52VB9LzMj/wl88J/yZzQXzJbq5KZNCNYJdP57T6Vn3BT+CY/mS90k2iC7yz4Z8A/beCP5tpHAT8S+BHADwd+GPBDPIdlsOeQDPIclIGe/TLAs0/6e/ZIP89u6evZKX08Fnwv+F7wvQrfB76P6/cpfP8iAt/P0++fbeD/EuCbf4DrD0wirj/I9Qd5/oMMIMgAguYAKjSef43nX+tnDkBjABrPv8YAtB6WAfD8hxhAiAGEGEAoZwBhBhBmAGEGEC4wALJHSlTFZs0NIJ29af/KASyOV8nCWJUs0KtkXrRK5kaqZE64SmaF/gT/T5mhnZNpwXMyld/uUwJnZZL/DD/xzoB/mp95SfhTXP1J8E+Afxz84+Cb8EMN/EPgHwT/gMLfq/B3gb8D/O3yh2er9PaA7wHfo/C94HvB9ybxl9MS6eoD38fT75tn4P/q5+n38/T7uX4/1+/n+gPjCPwA+AGe/wDPf5DnP8j1B7n+INcfTA6A51/rrQbwuzkAjQFoXL/GALScAYQ6SVGIAYQYQChnAEYMIFymKjAAoyJLjjwjsLciW3Y/M4CF8T9lfuxPmaefkznRczI7ck5mhc/JjNA5ma6dlWk0JXhGJgdOyySayG/48f5T/L4/yU+8k+CfAP84X/aOAX+Uqz+i8A8p/AMyyL1fBrr3yQD3Hunv3i393Dulrxt8N/hu8N0WfM866eEB32Pid/OC7+Vz3wu+18Tv7OPp9/H0+7h+H9fvM/E7+nn6/Tz9fj77/Ul8rj/A9Qd4/gNcf2CAGgDXH2QAQQYQtA6A67cOQGMAGvga15/GVwMIMYAQAwhVmOUOgOzhElWxWZMBqBGobEb27FozgNZUaADz4udkbuyszNHPyqzoWZkZOSMzwmdkeui0TNVOyxSaHDwlEwOnZELgJPgnZZz/BPjHZYzPhB/Jl7sRfLkbzlM/DHQT/4AMBn4Q8AOBN/F3gb9D4W8Dfwv4m6WXe6P0dIPvBt9t4nf3gO8B3wO+hy99ngUMAHwv+F7wveB7k/g8/T6efh9Pv4/r93H9fq7fD76f6/dz/X6uPzDQGEB5gOsPMIDAH2oAPP9BBhDk+oMMIJgaQBL/18wANAagga+1V+UMIMQAQmWqUqMmAzAqyslhlh5AnhHkzWYW/cnmxk/L7NhpmaWflpnR0zI9clqmhU/J1NAp8E/KJJoYPCkTgidkfOA4+MD7j8lofseP4ufcSOBH8OVuOOjDeOqHAj+Ep34w8IPcexX+bvB3Sj8X+K7t0se1Vf5wge/aJL1cG8BfD/5aA7+HG3w3+G7w3SZ+V89CBsDnvofPfQ9Pv4en38vT7+Xp93L9Xp5+L9fv4/p9XL+P6/cNJ67fz/X7uX4/A/Bz/f4kPtcfAD/A9QcYQKCHZQDgB7n+IAMIMoBgMwPQGIBWoWIAWs4AQiWqYksFBkC2dPbsmhtAS7U0gNnxUzIzdkpm6KdkevSkTIuclCnhkzI5dEIm0UTtuIwPAh88JmMDx8A/KqP9R0x8fseP4Fv9MK8F3pMfvh/wfV3bwN8C/mbwN5r4LvBd4LtW00rp7loB/jLw+cx3g+8G3w2+ey4pfM90At8DvoenP4nvHUtcv5fr944w8X1cv4/r94Hv4/n39zMH4Of6/QzA35N+NwcQYAABrj/AAAI5AwgygCADCDKAYAq/wACMSo3sWolZ1giKcnKks4UKDCBvNrPITzYzflJmxIDXT8jU6AmZEjkuk8PHZSJNCB2T8doxGacdlbHBIzImALz/sIz0Aw/+cN9B8A/w+34/+PvA38uXvT3g7wZ/F/g71NVvM67exN9kwV8H/ppsfBf4riW0SLq6ePZdFnw3+G7w3eC7JzMAnn4PT7+Hp98DvmcUA+D6vVy/F3wv1+8dpAbA9fsYgK8PMQBfL2MApckB+MH3c/1+BuBXAwgwgAADCDCAAAMIWAYQrFQxgGCFWXMDMCpWFWWXOwAje/7yDaClWhrA9PhxmRY7LlN14PVjMil6TCZGjsqE8FEZHzoiYzXgtcMyOnhIRgUOgX9QRvgPgL9fhtFQ7z4Zwu/5wcAP4mfdQOAHAG/ibwN/a/rq/wC+N/C9uPqeXL2Jv0rhL8+DP4/Ad4Hvmkngu5L4Uwh89wQC383T7+Hp94Dv4fo9XL8HfA/X7wXfy/V7wfdy/d4kfm9zAD7wfVy/jwH4UgMA3w++H3w/+H4T3xhAgAEEGEAA/EA7I3MA5aoyVamRPZhvALkjcKSzpbMXHkE6W3bhH2xq/JhMiR0F/6hM0o/IxOgRGR85IuPCh2Vs6BD4h2Q0jQoelJGBA+Dvl+H+JP4+GerbA/4eGezdDf4ufubtUPjbwd8K/hbwN6ur36Dw10lPJ/hOrt650qi7M4m/FPjFOfhzmuK7wHeB7wLfNd7A7+AG3831u8F3D6OhBn47D9fvAd/D9XuS+H3MAXjB9/L8exmAt4eBX+oD38f1+xiAjwH4LAPwg+/voMoZQIABBMpVZWbWAaQrttSKARSquRE0V6EBTIkfkUkx4MGfoB+W8dFDMi5ySMaGwQ8dBP+AjNT2y4gg8IF9Msy/V4b6gQd/sA94r4I38LeDv5Vv+lsU/qb01fd2rpdewPd0rgF/lcJfAf4y6eYE3wm+c6F0dYLvBN8JvhN8Zwb/l1x8F/gunn4X+C7wXcNNfDfX7wbfzfW7+zOAfuYAPOB7uH4PA/AofC/X7+X6vQzAywC8DMCrBuBjAD4G4GMAPvB97c0B+BmAH3wjBuAvN0sNIFBqZA+UWMoZQDpHOluwFQPIyta0UBubFD8kE2OHwD8k42ls9KCMiRyQ0eH9Miq038TX9snw4F4ZFthj4vt3g79TBvl2yEBvEh94zzYD3sTfDP5G8JNXn4RfR2vAXw3+SoW/XOHz5DsXKfz5FvxZJr4TfCf4TvCd4Dsn5sEfaeK7ePpd4Lu4flcSf4AxgHI3+G6u380A3En8nuYAPAzAwwA84HvA9yh8L/he8L2dVJYB+CpV4PsqzFID8JepwDcqMUsNIF2RJUfTERjZm9aaAbQm6wAmxA/K+NhBGacfkLH6fhkT3S+jI+CH98nI0F7w98hwGhbcLUMDu8DfKYP9OxT+dhng3QY+8NSX3/R9+U3fB3gTf526+tW0SuGbV9+dq+/WyNU3gt+4QLo2gt84l8BvBL9xBmXjd0riO8F3gu8E3wm+cyQDMPErXUMVPtfvAt/F9bu4fhf4riR+b3MAbvDd4LvBd3P9bssAPAzAwwA8DMCj8I0YgJcBeCtVDMCrBuArV5WpwPdZBmBUbKnILDUAS7Z0drNgc9my+5ExjI/vl3Gx/Sa+vk9GR/fKqAjwYeBDwGvAa8AHd8qQwA4T379dBvq2gb9F+nuT+En4TdLHvUHhrwd/bfrqewL/u+XquzcuUfgLFf48hT87G78R/EbwG8FvBL9xPPGlr3EMAxht4jt5+p3gO8F3gu9M4g+04PdVAwDfBb6L63cxABcDcCUHAL4bfDf47s5GxW4G4FYD8IDv6aBiAB7wPe0yAzAqV5Wp1AB8Jari7FIDMHJkZUuVGkCz2ZqOoLnyDWBcfJ+Mie2V0Trw+h4ZGd0jIyK7ZXh4twwL7QIfeA34IPAB4P1bZYB/iwzwJfE3Sz/vJunr2Wjg/+FeD/468NfwZS9z9b9z9T0M+KUKf5HCn6/w5yj8mQp/msKfrPAnZOM3gt8IfiP4jeA3JvGHGPjtnOA7uX4n+E7wneA7uX5nHnwX1+9iAC4G4GIALvBdCt/dScUA3OC726vMATiMwPeUq8pUpeYAjEpUxZl8RTk5skoPwG8vnHUALdXSKMbE98jo2B4TX98tI6K7ZHhkpwwL75ChoR3gb5fB2jYZFNwqAwNbDPz+/s3S37cJ/I3gc/Ue4N3rjKvvDXwvftr1VPC/c/U9LFffTV29ic/VN4DfMEs6N4DfMJ3AbwC/AfwG8BvAbwC/gWe/AfwGK/5wE78R/EauvxH8RvAbuf5G8BtT+L3NATgZgJMBOMF38s3facW3DMDFAFzguzoaFbkYgEvhG4HvrlCVqywDILtRicoyAG9RTg6z1ADS2ZuWdxC2pgXa0Oj4bhkV2wX+Lhmh75Th0R0yLAJ+eLsMCW0Df6sM0rbIwCD4AeD9wPuA922Qvt714K+TPzzAu9cY8L34Td/Tlbn6Hs7k1S82rr6b5eq7NiTxZyv8GRb8KQp/Yn78BvAbwG8Av2Eogd8AfgP4DeA3JPG5fmMAfxD4jeA3gt8IfiPX32gOoCQ5ACcDcILvBN8JvvMXMzWANL5RpYoBuCpU5WbJARiVGtndJZmSA0hXlJMjMwKypbNn8jWXLZO/DaUGMDK+U0bEdshwHXgaGgU+Anx4qwwObTHxtc0yILhJ+gc2Sj//BgO/j2+d9PGuBX8N+Fy9e6XC5+pdyw34HnzD7+40r76b5eq7GlefxJ9pwZ+ajV8Pfj349eDXg18Pfj349SMYQC7+oAx+A/gN4Ddw/Q3gN4DfAH6DBb+R628EvxH8RvAbOxsVN6YGAL6zo1GRkwE426vAd7bLPwBXmarUyO6yDMBdbKkou+QALNnS2c28LWXLHkFL5Q5hRBz82Hbwt8lQGhIFPgJ8GPjQZvA3yQBto/QPbpB+AfD9wPuA966h1dLbs8rAT8L3BP531zKFvxj8RQp/PvjzFL559Sa+efW/1oNfD349T359Cn+cBX9UBr8e/Hrw68GvB7+ez/168OvBrwe/Hvx68Ot5+uutAwDfiAE0cP0NDKCBATQwgAaF3/iLigE0gt/YQQV+Y6UZA3AYge8sV5VlDcCeGkC6YktFZukROLKypbNnRtBcyQG0pkKDGB7fJsNiW8HfIkNocBT8CPBh4EPAaxtM/OB66RtYK338wPtWg78KfK6eerqXg78MfOBdSwz47vyu7+Y0r/63JDxf9LpannwDvz6Jn4SfbMEf3zJ+Hfh14Ncl8Qem8Sss+OVJ/Hrw68Gv5/rrwa8Hv57rrwe/Hvx6E98YQAMDaAC/AfyGjkZFDeA3tDczBtDOyNFYoSo3Sw7AqNTIblSSKd8A0jmysqVKDqCljBHYWq65YQyLb5GhsST+ZhlMg6KbZGBkowwIAx8CXlsP/joTPwC8H3jfSuntTeKvMPB/dy8Ffwn4XL0rib8AfPPqM/iz0k++iT/Vgm9evYFfB34d+HWjCfw68OvAr+Pbfl0Ofh34deDXgV8Hfh34deDXgV8Hfh34deDXgV8Hfp0VXw2gHvx68Ot/UTGAevDrO5gZA6hUtTNyNFSo1AAay1SlRnajkkzOYktFORUYgMvefOkh2JqvpXEMjW+WIbFN4G+SQfpGGRjdIAMi4IeBDwGvrZW+wTXgrwIfeOrlWyG9vFy9Z5nCXww+8K6FGXznXPCB5+ediW/Cd1ZP/q/qyU/j14034DvWjcnBH94Uvxb8WvBrwa8Fvxb8WvBrwa8FvzaDX2bFp5I6BlAHfh34dVx/HfhG4NeBX9fRqKguOYD2qkoV+PUVqnJzAA1llkqN7A0lmRqLcyrKLjkAS7Z09kzNjsFWOHcrGhLfKINjG8HfIANpQHS99I+sk35h4EPAa6ulTxD8QBIfeN9yWiY9vcB7uHp3Eh94F/Cu+eDPU/jANwLPb/sMvgn/q3ryDfy6JP64PPhcfS34teDXgl8Lfm0r8WvBrwW/FnwjBlDLAGrBrwW/FvzazkbFteDXgl/bySyFbwR+XaWqnZGjzjIAozJVqZHdqMTMGEFxTkXZNTrS2bKyZ3I2l83M9YMNjm+QQbEk/noZoK+T/tG14K8BH3htFa2UP4LgB8D3A+9bCv4S8IH3LGIAKfx5BLxzDqXwZ4BvXn02/kQyrz4bf5R0qOXqa5viV6bwa/jCVwN+Dfg14NeAXwN+TW8Cv6aniqe/Bvwa8GvArwG/BvyaLioGUAN+zS9mxgA6GhXVgl/bXlWpAr9WDcCoXFWmKjWyG5WYGUMotlTUtAZHOltW9kyNzWUzc7ay3AEMiq+XgbF14K+V/voa6RdZLX3DwIeAT+JrK6R3kKsPgO8H37dYfvcC71kI/gLw51vwgXfOAn9mDr4J/6u6+mz8McTV1xbArwG/Bvyaga3A79UCftcc/NQAOqnAr+mgAr+mUtXOyFFboSpXlVkqNbIblWRGUFdsqahp9Y50tqzsmRqay2bW2MpyBzEwvlYGxNaAv1r6RVdJ38hK6RMGPrQC/OXSW1smvYLAB5YwAPB94HsXMID50t1twndzcfUuhe8EvnE6mVffFN+E76SuvmNtHvyaYWn4yppB2fjV4Ff3JfCrwa/ubVRWDX41+NU8/dXgV4NfDX71b0Yl1eBXg1/d2ai4Gvxq8Ks7qbj+auCN2qsqzZL4RhWqclWZqtTIblRilhxBbXFORU2rc6SzZWXPVN9ctkwNrcw6iAHx1dI/tkr66SulbxT8CPDh5QxgGfhLpZcGfHAxA1gkv/u5eh9X7wXfA77bhP/NlYSfmQcf+IZJ4JtX3zy+Cd++ZmhT/Grwq1vA/w7+d/C/g/8d/O/dVOB/B/87+N87q8D//osK/O8djYq+d1BZ8KvbGTmqK1TllspUpUZ2o5LMCGqKcyrKCfjaTLas7NnVFcqWXX0rS42hfxz8GPgMoE8U/AhXHwY/lMH/PbAQfK7eB7x3HvhzTXy3wnfNAB945zTwgW/k6hX+L03wzSe/o4LvYLn6LPxq8KtN/HZW/O/gfwf/e2+jsu/N4H8D/xv437qowP8G/rdfVJ1UOfhGlSrwjSpU5aoyS6VG9u8lZtWpii0V5clhjkBlS2dvWm2hbE2ra2XJIfSLgx9bIX10rj4KfGQpA1givUJcvcbVB8EPgO8H3we+d4508wDvngX+TBPfZeJ3dqbwufoG4BsUfL159Xnxa3Lwq/Pgfwf/ewH8b+B/A/8b+N/A/9ZNVQj/1yb4xd+AN2qvqlS1M3J8q1CVWypTlRrZjUrMjCEU51SUJ4c5ApUtnT1/+YZRY8tfbSvrG18ufWLL5A8d+OgSBrBYeoUXSc8Q8NoCBjBfegSA989lAOB7wfeA755pwHd1cfVJeOcU8Ln6xjz49T+I/z0P/jfwvyXh8+HTV/C/gv+1qwr8r+B/Bd4I/K+dVB2Nir52UIH/tVLVzsjxtcJSuarMUqmR3agkM4JvxTkV5clhxhBsWdmbL2sYtsLVtKI+cfBj4OvgR8GPgB8GPwS+Bn4Q/MAcBjBbuvmA985kAFy9W+G7FL5T4Tcq/AYFX6/g+YnXUcF3sDz57S3wlQY8fc/B/wb+tzz4X8H/Cv7X7ioTvzSF/wX8L51V4H/5RQX+l45GRV86qNqrKlXtjBxfKlTllspUpUZ2oxJzAOmKcyrKyZGV7Zs1e8ulB2FrueZG8kcc+NhiBrBIekUXSs8I8OH5DGCe9NC4+iD4AfD9VnwTvosLeNdk8E34XxuT8OPz49e1Al/Bp/G/5cH/miwP/hfwv4D/JQnfEr4awGfgjdqrKlXtjByfKyyVq8oslRrZjUrMERgV51SUJ0dWtmRfU9lb3zdb68s3jj/i4MfA18GPgh8BP6zwNfCDs8AH3jeDAXD1HvDdOfhOhd+Yg1//I/hJ+Bz8r+Cn4RX+F/C/dFdZ8D8nA/9zZxX4n4H/lKyTqqNR0SfwP7VXVaraGTmMKlTlqjJLpUZ2o5KcinMqyu5zMkdWNmtf7G3IZva1jaVG0Tu+UHrFFkhPHfjoPAYwV3qEgddmE/gB8P3g+8D3gu8B353En0TAOycQ8I3jwAe+YQz4wNeb8B3rTPgOtcNaid83g/81g1+ewv9i4pel8D+D/xn8JPynZOB/6qwC36gA/sdk7VWVqnZGjo8VqnJLZZZKjexGJZaK81TUtE+OrGzp7K3rcypb0760oV5x8GPzGQD4UfAj4IcUfhD8wHQGME26+oD3TgGfq3crfJcFv7EAfp3CrzXh2xs/8fLgW66+Cf6XJHwO/meF/wn8T3nwPwJvBP7HTqqORia8Bf9DpaqdkeNDhaVyVZmlUiO7UUlOxTkV5cmR6SPoWdnbGIiffrDkWHrGwY+Br4MfBT4yiwHMlG4aVx8EPwC+H3wf+J48+E4LfoPCr28O34QviG/A5+L/bvYZ/CT8p2Q5+B+7qEz8kjS+GsCHjirgjdqrcvDfJ6tQlVsqs1RqZDcqyak4p6I8ObKypfqQzN7GbE372IZ6xufK77E50kMHPwp+GPwQ+Br4QfAD4PvB94LvmcgAgHeNJ+CdY8EHvnE0+MA3jGwVfuonXrP4Xyz4nxX+pxz8j0n4HPwPvxoVf/hFlYP/Pll7VaWldkZp/HfllsoslRrZjUpyKs6pqECOrGxZ2TO9b022lvvQTL/HwY/NZgDgR8EPgx8CXwM/OIUBTOb6uXov+B7w3QrfBb5T4Tem8EcQ8HXDaKiJX6vwa3Lx++XB750f/1MKv5vZxxz8D8ny4L/vpAL/fQ7+u2SVqnZGjncVlhT+2zJLpensRiWWivNUlCdHVrYm2Qv3Ll+2Hys1jh5x8GPg6+BHpzOAaQxgqnTVwA+C7wffB743D77Tgt+Qiw987eBm8NWXva8W/C8WfAM+B/9jBr/0Q1cFb8F/D/77X1QW/Hd87r/roLLgv03WzsjxtsJSuSXg36QqNbIbleRUnFNRgRxZ2bKy/0A2s7c/WI/4TOkemyHddPAj4IfBD4GvgR8A3w++D3wP+G6F77LgN1rw63PxB6XxK1vE75WD3yOD/9GC/yEH/31nAz4L/10nVUcV8G+TtVdl4xe9YQBvKlTllpriO16Db1Riqbhpr4oK5MjKlpW9cK8LZWu5N83UPT6DAYCvgx8BPwx+CHxtEgMA3w++F3wP8O4x4APvGsUARmbwGyz4dQq/NolvwjfF75Mf/3MO/kcL/gcL/vsuKgv+u19UCv9tR5UF/02ySlW7dAb861TlZq/Kcio1shuV5FSc3ctkRXlyZGVrkr2N2bJ79QN1j4MfA1+fygDADyv8IPgB4P3jGAD4HvDdFnwn8I3DwR9m4tfnwa9J4vc3/gkdA/975vO+IufLnoH/KQ/+Bwv++xz8d78apfHfdlJZ8N90UPAK/3WqdkaOVxWWyi0p+JfJSo3sRiU5FWf3IllRgRxZ2bKy/0C2H8s6mm5x8GPg6+BHwA+Dr02QzsHxDAB8H/heC77Lgt8IfMPQDH5dK/C/tYD/sRX473Lw31rw33RUWfBftzfRX6VqZ5SGf5ms3FKZJfBfmNmNSnIqzu55sqI8OZpky8r+A9l+vm5x8GPg65MZAPgh8DXwg+AHxjIA8L2jGYCJ38kFvtOKD3z94Ax+rcKvSeL3y4Pfuxn87k3x31vw31nw3/6q4BX+mxz81x1M+FftLfD0sp2RiW7Bf5GqzJIF/3mykpyKm/asqECOrGxNsv9Atp/vtzj4MfCjE6VLBPwQ+Br4QfD94PvA94DvVvgu8J3gN4LfkMIfZNQEv7pvC/i/N8VPX70FPw3f2YA3U/hvLPivkwH/qoOCV72sVJn4RS8YwIsKlQX/eVlOpUYG/rOSPBVn97SoQKA/yc6Wlf0Hs/18v8XB17n86AQGAH4IfA38IPh+8L3ge8B358FvAL/egl+bB//7D+C/z4P/Ngf/jQU/Cf8qmQX/ZSqF/6JdujT+82TllkB/lqo0nf2ZGsBTa4A/ya0of48dWdmaZG97j5LZfr6u8UkMAPwo+JFxDAB8DfwA+H7wveB7FL4LfCf4jUMYgMKvB77Ogl+Twu+Tg9+rbfjvCuC/seC/7qTgTfzilx0s8PSiUqXwn7dT6Kpn5ZYs+E9L09mfJCvJSYE/tlaUv0eOJtmaZM/fw+aytb0Heeoa5+nXwY+CHwE/NIYBgB8A3w++F3y3wneB7wS/EfyGHPxaC361Bf/bT+C/teC/seAb8Bb8lxb8F6kU/vN26Uz0VBb8p2VmT5KVpjPwH5fkSaE/slaUv4eOrGzJHlizt637qWx/T13iE9QAwA+DHwJfG8UAwPeNYADgu4cxgBz8BuDrga+z4NdY8L9b8L/+BP4bC/7rXxS8wn9pwX9hwX9eqVL4z9pZ4OlpudmTcoVu6XFpOvtjNYBH1izoD1MVmT3IzdEk2/3c7M13r1C27O7+YF3i4OtcfxT8MPgh8IPgB8D3ge8B3w2+C3wn+I0mfvsUfh34tRb86gx+hRX/S/Zv/Dbhv87Bf2nBf5HEVwN4bsF/VmnAmyXR6UmFQrfgP7YG/CMzu5FCf5gK7Ae5WcDv5+bI7h7gWQF5t43dSWX7e+oSB1/n+o0BgK+BHwTfD74PfI/Cd4HvBL8R/IYB6vot+DU5+N9y8D9n45dZ8d8p/LcK/00O/qs8+C8s+M8t+M8s+E+TpeAV/mNrCv5RWRrewH9YaoI/yA3w+7lZwO9Zuutoks3aHYcFs4Vu58tmdusn6xwHXwc/yvUbAwA/CL4ffC/4HhO/gwt8J/iNwBsD6M8AwK818c3rB/+7Bf+riV+ehd8tD34XKW0J/6XCf2HBf67wn7XPwD+tNOGfJFPwj1Mp+EflCl0FuNED4I0U+H1rFvR7qZLQBQI4N1uq26ksoLda2c1kth/vRk6d4+Dr4EfBD3P9xgDA9w9lAOC7W8Cv7aOu34L/LQ/+pzz47wvgv6ZXzeA/z4P/VPWkXboMfIVCt+A/VD0oM+CN7oNvZIG/V2Ji381XEjpfgN+2dAvsJllBW9ENawrv+k90TfVrfDQDAD8Kfhh8jetXA+igBtBeDaDSGAD49eDX5eBXg/89B//LT+K/VPgv8uA/U/hpeAv+Ywv+Iwv+w3ILuup+aToD/55Cv5vKAn7HmsK+rbplzZHpJth5y0Wl663omj2D15quttCvcfD1kQwA/PBwBgB+AHwf+F7w3eC7uH4n+I3gN4BfD35dH2MAFTU5+N/A/6rwP1vwP7YevyQf/nMTv/hZDv4TC/5jhf+oItNDBf+g3IKeSuHfA/5uqQWd7qSyoN9W3Spq2s1UjuxugJ3qeqpCsM10NZUF70obulwgcwDgR8APga/x9AfA9/H0exS+C3yniV+ZD7+6lxpAHvxP/wL8p+0t8JVp+KJHyVLwFRb48hz4MgPdcdcsjX8npzR4blZw1Y0iA9voeiabtWupCuGqrjRXHsRLbehiTr/ER6YH0DEEvgZ+AHwf+B4LfiP4DX0t1w9+TR78rz3Mf+Wugd89g/8h81Ov9F0L+C8U/vOOaXgD/2kO/uNKC7zCT8I/qMjA3y+3oKvuZvAdd0ot4KpbJdngN61Zwem6NQV/LVMa/WqqFoAvW7qUr2YwL7Sh86pf4uDrXH9kmGUAgxgA+J4BDAB8Zz9jAO2MAYBfB34t+DW9jAGUfwf/2++W6+9uefpbif8yH37HbPwn7S3wOfhp+AoLvMpAT2Wip7LfLrWgW/Bv5nSjOA84XUtlgb9qZruSpxaBVRctXbDWDGZz/ZWnKmMA4OvgR8APgR/k+v1cv5cBuLl+NYB2jbn4vbPxv6Wuv7vl6c/+Z/XMp/9n8Ntn8NPw9MCCnwVfboEvy4J3JOFvlWbQb1pLgdP1VLngqqsqcHOzXVZdStVaZEvnrbWAWtWK/sypkzEA8CNDGAD4QfD94HvBd4Pv4vqd4DeAXw9+XW/L9YP/PQf/cw7+hxz8t23Af9rBAq/wHxXAv1+RA2/Bv6O6bcI7blnwrfA3SnLQ6VqqXHBrgF9WXTKzWbuYqjXIlv6yVGVvPeq5FjprqVN8WHoAHYwBgO/n6feC7wbfBX4j+A1/WAYAfg346QGA/7W7un6F/zEXv0vr8J+1At+AV/j3LaXhyzPoBnyZgZ7KfrM0B52ul+RBVzUBp8uqS47sLlrAL1hrBXRVgf5M1QbYZGdyOp2nTnHwda4/An6I61cDqPRYrl8NoKI+P37m+rsZA8jCf9/F8rmf/YWvJI3fqQl+cSvwi9LwFRl4K74Bb8G/aZaGv24pC1x1pbgp+iVrJrjRhUwG+HlrhS66APS5fP0AbqpTOZ20ZA4A/Ahf/DTwg1y/D3yPun4n+I3J6we/rpcxgHJjAOB/72G5/m6W6++qBtCl6Ze+tuI/UvgPKxU83W9n4hvwFvw75TnwZVnwjhvgJ8uCT2VFV13Og35RdaEoC91+3iyN/pelghddAPus6oyl1uCebKYTOR1XdYwPSQ+gfXIAAfB94HvAd4HvBL+ht3n9xgDAr8mDb1x/U/yCn/vN4T9uI/4dVRZ8WRa843oSvjQHna6WZMNfVl0qLoBuwT9v6S8zW1VOzWGfzYN9Ok+tQc6Hm69jOXWMg69z/WHwtQF5B1BhDAD8OoWvrr/sW3fL9Vs+9z90UQNoBf7zVuLfV6XhKzLwufg3y7Lg0/i58FdKsuEvWcqHfj5VNrq9yswEV51L1VZs1UlrbUC24h7N6UiesgcAfgB8H/hu8F1cfyP4DeDX98xcfzXX/727GkDy+n+zXH8e/Dd5vvQ1we/QFP9BK/Bv061yC3xZFryBf63Ucu0p+JKca0/BFxdAp79UVY7sssBVZx0/iK06oTpubz3ykQIdtnQop45x8HXwwwMyA/BmBlCRGkDy+mvBr+lhuX7wv/xmDCD99BsDsPwrePN97reE/7AZ/DsVGfi8+GUZ/GtmTeFLsuEvpuCLm0FPZYIbncuURj+j+mHsnFoL3RxyqoOWDqg6pAfQnwGAH+jLAMB3c/1O8BvN6y+v+90cQPr6u6UHkPzf0W96/Zl/Tj/7S19T/OKW8IEvysW/pcqCL8uCd1wtbQp/qSTn2i2dL86Gr7L0Z1ETdPtZswy6pULgzWKrjqqO2NsOnQ852f4CdYgPZAADjAFUJgfg5/q94LvAd4Lf2DMzgOT1V4OfGoBx/V3VALpYrj/zr+BN47/M81v/ieVzPx/+vVbgp+HLMvAp/CbwqrzwxXmuXcGfS5VBtwNuP52LrmoNeF7snA7b2wZdCHmfpb2W9qgBtI9y/WHwNa7f3yd7AA3g1yevv4cxgLLq1PX/Zrn+LvmffuP6O2U//Xnx27eMf7vCAt8MPvCOK0n80jzwJU3RDfjiZtDpbFEWujUTPKd86C2BH1YdspaD3dJFF0LO125Vh/gAYwCVagDt/OB7wHeB7+T6G35Xz39yAMnr75YeQPL/KldmAJ0LX39z3/gftbd84au04LdrHf61six4A/9yDr4BX1IAvrh5+DNFTeFBt2eBq447mqK3CZwOqg7YC2Pnu+jmkJPtsrTTUodYcgDgh7n+YJ/sAfD8lxsDAL+2u3n9xgCS19/V+L/MVfDpV9ef/fRn8ItbgV+UDz/r6pviO5L4TeBLCsAXq8/23GtX8KeLmqCnykZXNXflrQKn/al+EDsf9I4Cbaf2sf7mAEJqAL7eDAB8F9ffCH59D3MAyeuvBv/7b5br75K+fuN/T/+d+b+2ZV5/HvxnzXzps+LfycG/mcIvz8a/WpYF77hU2hTeip8Fr2py7Sl4OlXUBN7eBF111NE69ILgqn2qtmDvbAF7u6Vtqq2qzADAD/5hDKDCbQ6gPDWA5PXXdDMHkLz+r10tA8jz9L9Ofe7n/LN7hb70tQX/Whvwz6vywhdnw5/OgT9ZlIVuP54pG52OOLLRm7vyguCqPfafu+xcaCv2ljy1j4Ef7WsZAPhurt8JfmOP7AEkr/+bwv+s8Ft7/blP/8NWPPst4St4Az8vfEkB+OIW4IvywtuboKsKoee78rzglnbb8193a7C3toC9WbXJUmYA4Ae5fusAGpLPP/i13SzPf3IAXTLX/yEH/3Whpz/P5376d34ufkUG/3oO/pV8+KUt46fhi5uHP1GUDX9M1QRddcjxc+i7VbtUhcCbe8Zbi71RtcFS+xj4Ua4/OYAAA/AmBwC+s0fOANT1pwfQ2RhA9vV3Utdv+RdzNvnWn/Ol767l6W8rPvCOC6V54EsKwNPp4mbg6XhRBv6o6ohZNrqqNeh7WkKnHal+4Lpbi51qvaXKrAGA7+X6XakBgF8Hfs1vlgF0ST//qf/TbCXvLNf/Kv/T3+LnfnP4V/9m/ILwRRn4I5aaoKvaim4Fz0JXWdHbct2twV5naa1qjU3+HwuefjlXE4+yAAAAAElFTkSuQmCC", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
  },
  22182: (HH, IH, EH) => {
    function RH(HH, IH, EH) {
      try {
        const RH = HH.next();
        RH.done ? IH(RH) : RH.value ? RH.value.then(() => {
          RH.value = void 0, IH(RH);
        }, EH) : IH(RH);
      } catch (RH) {
        EH(RH);
      }
    }
    function hH() {
      let HH,
        IH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (EH, hH, TH) => {
        const sH = performance.now();
        void 0 === HH || sH - HH > IH ? (HH = sH, setTimeout(() => {
          RH(EH, hH, TH);
        }, 0)) : RH(EH, hH, TH);
      };
    }
    function TH(HH, IH, EH, RH, hH) {
      const TH = () => {
        let sH;
        const eH = HH => {
          HH.done ? EH(HH.value) : void 0 === sH ? sH = !0 : TH();
        };
        do {
          sH = void 0, hH && hH.aborted ? RH(new Error("Aborted")) : IH(HH, eH, RH), void 0 === sH && (sH = !1);
        } while (sH);
      };
      TH();
    }
    function sH(HH, IH) {
      let EH;
      return TH(HH, RH, HH => EH = HH, HH => {
        throw HH;
      }, IH), EH;
    }
    async function eH(HH, IH, EH) {
      return await new Promise((RH, hH) => {
        TH(HH, IH, RH, hH, EH);
      });
    }
    function GH(HH, IH) {
      return function () {
        return sH(HH(...arguments), IH);
      };
    }
    EH.d(IH, {
      b: () => hH,
      f: () => GH,
      h: () => eH,
      i: () => sH
    });
  },
  22405: (HH, IH, EH) => {
    function RH() {
      const HH = HH => !!HH && "object" === typeof HH;
      for (var IH = arguments.length, EH = new Array(IH), hH = 0; hH < IH; hH++) EH[hH] = arguments[hH];
      return EH.reduce((IH, EH) => {
        const hH = Object.keys(EH);
        for (const TH of hH) {
          const hH = IH[TH],
            sH = EH[TH];
          Array.isArray(hH) && Array.isArray(sH) ? IH[TH] = hH.concat(...sH) : HH(hH) && HH(sH) ? IH[TH] = RH(hH, sH) : IH[TH] = sH;
        }
        return IH;
      }, {});
    }
    EH.d(IH, {
      e: () => RH
    });
  },
  23851: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => RH.i,
      c: () => RH.t
    });
    var RH = EH(21867);
    (0, RH.y)();
  },
  23989: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => TH
    });
    var RH = EH(23991),
      hH = EH(24e3);
    class TH {
      static ExpandRGBDTexture(HH) {
        const IH = HH._texture;
        if (!IH || !HH.isRGBD) return;
        const hH = IH.getEngine(),
          TH = hH.getCaps(),
          sH = IH.isReady;
        let eH = !1;
        TH.textureHalfFloatRender && TH.textureHalfFloatLinearFiltering ? (eH = !0, IH.type = 2) : TH.textureFloatRender && TH.textureFloatLinearFiltering && (eH = !0, IH.type = 1), eH && (IH.isReady = !1, IH._isRGBD = !1, IH.invertY = !1);
        const GH = async () => {
          const TH = hH.isWebGPU,
            sH = TH ? 1 : 0;
          IH.isReady = !1, TH ? await EH.e(90).then(EH.bind(EH, 25262)) : await EH.e(110).then(EH.bind(EH, 25266));
          const eH = new RH.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, hH, !1, void 0, IH.type, void 0, null, !1, void 0, sH);
          eH.externalTextureSamplerBinding = !0;
          const GH = hH.createRenderTargetTexture(IH.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: IH.samplingMode,
            type: IH.type,
            format: 5
          });
          eH.onEffectCreatedObservable.addOnce(EH => {
            EH.executeWhenCompiled(() => {
              var EH;
              eH.onApply = HH => {
                HH._bindTexture("textureSampler", IH), HH.setFloat2("scale", 1, 1);
              }, null === (EH = HH.kh()) || void 0 === EH || EH.postProcessManager.directRender([eH], GH, !0), hH.restoreDefaultFramebuffer(), hH._releaseTexture(IH), eH && eH.dispose(), GH._swapAndDie(IH), IH.isReady = !0;
            });
          });
        };
        eH && (sH ? GH() : HH.onLoadObservable.addOnce(GH));
      }
      static async EncodeTextureToRGBD(HH, IH) {
        let RH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return IH.getEngine().isWebGPU ? await EH.e(91).then(EH.bind(EH, 25273)) : await EH.e(111).then(EH.bind(EH, 25271)), await (0, hH.d)("rgbdEncode", HH, IH, RH, 1, 5);
      }
    }
  },
  22432: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => hH
    });
    class RH {
      constructor(HH) {
        this._pendingActions = new Array(), this._workerInfos = HH.map(HH => ({
          workerPromise: Promise.resolve(HH),
          idle: !0
        }));
      }
      dispose() {
        for (const HH of this._workerInfos) HH.workerPromise.then(HH => {
          HH.terminate();
        });
        this._workerInfos.length = 0, this._pendingActions.length = 0;
      }
      push(HH) {
        this._executeOnIdleWorker(HH) || this._pendingActions.push(HH);
      }
      _executeOnIdleWorker(HH) {
        for (const IH of this._workerInfos) if (IH.idle) return this._execute(IH, HH), !0;
        return !1;
      }
      _execute(HH, IH) {
        HH.idle = !1, HH.workerPromise.then(EH => {
          IH(EH, () => {
            const IH = this._pendingActions.shift();
            IH ? this._execute(HH, IH) : HH.idle = !0;
          });
        });
      }
    }
    class hH extends RH {
      constructor(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hH.DefaultOptions;
        super([]), this._maxWorkers = HH, this._createWorkerAsync = IH, this._options = EH;
      }
      push(HH) {
        if (!this._executeOnIdleWorker(HH)) if (this._workerInfos.length < this._maxWorkers) {
          const IH = {
            workerPromise: this._createWorkerAsync(),
            idle: !1
          };
          this._workerInfos.push(IH), this._execute(IH, HH);
        } else this._pendingActions.push(HH);
      }
      _execute(HH, IH) {
        HH.timeoutId && (clearTimeout(HH.timeoutId), delete HH.timeoutId), super._execute(HH, (EH, RH) => {
          IH(EH, () => {
            RH(), HH.idle && (HH.timeoutId = setTimeout(() => {
              HH.workerPromise.then(HH => {
                HH.terminate();
              });
              const IH = this._workerInfos.indexOf(HH);
              -1 !== IH && this._workerInfos.splice(IH, 1);
            }, this._options.idleTimeElapsedBeforeRelease));
          });
        });
      }
    }
    hH.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    };
  },
  22284: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => VH
    });
    var RH = EH(21947),
      hH = EH(21786),
      TH = EH(21782),
      sH = EH(22128),
      eH = EH(21956),
      GH = EH(21972),
      AH = EH(21808);
    let VH = (() => {
      var HH;
      let IH,
        EH,
        VH = [],
        YH = [],
        QH = [],
        JH = [];
      return HH = class {
        get influence() {
          return this._influence;
        }
        set influence(HH) {
          if (this._influence === HH) return;
          const IH = this._influence;
          this._influence = HH, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === IH || 0 === HH);
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride;
        }
        set animationPropertiesOverride(HH) {
          this._animationPropertiesOverride = HH;
        }
        constructor(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            sH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = HH, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new hH.e(), this._onDataLayoutChanged = new hH.e(), this.id = (0, RH.j)(this, VH, void 0), this.morphTargetManager = ((0, RH.j)(this, YH), (0, RH.j)(this, QH, null)), this._animationPropertiesOverride = ((0, RH.j)(this, JH), null), this.id = HH, this.morphTargetManager = sH, this._scene = EH || TH.e.LastCreatedScene, this.influence = IH, this._scene && (this._uniqueId = this._scene.getUniqueId());
        }
        get uniqueId() {
          return this._uniqueId;
        }
        get hasPositions() {
          return !!this._positions;
        }
        get hasNormals() {
          return !!this._normals;
        }
        get hasTangents() {
          return !!this._tangents;
        }
        get hasUVs() {
          return !!this._uvs;
        }
        get hasUV2s() {
          return !!this._uv2s;
        }
        get hasColors() {
          return !!this._colors;
        }
        get vertexCount() {
          return this._positions ? this._positions.length / 3 : this._normals ? this._normals.length / 3 : this._tangents ? this._tangents.length / 3 : this._uvs ? this._uvs.length / 2 : this._uv2s ? this._uv2s.length / 2 : this._colors ? this._colors.length / 4 : 0;
        }
        setPositions(HH) {
          const IH = this.hasPositions;
          this._positions = HH, IH !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0);
        }
        getPositions() {
          return this._positions;
        }
        setNormals(HH) {
          const IH = this.hasNormals;
          this._normals = HH, IH !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0);
        }
        getNormals() {
          return this._normals;
        }
        setTangents(HH) {
          const IH = this.hasTangents;
          this._tangents = HH, IH !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0);
        }
        getTangents() {
          return this._tangents;
        }
        setUVs(HH) {
          const IH = this.hasUVs;
          this._uvs = HH, IH !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0);
        }
        getUVs() {
          return this._uvs;
        }
        setUV2s(HH) {
          const IH = this.hasUV2s;
          this._uv2s = HH, IH !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0);
        }
        getUV2s() {
          return this._uv2s;
        }
        setColors(HH) {
          const IH = this.hasColors;
          this._colors = HH, IH !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0);
        }
        getColors() {
          return this._colors;
        }
        clone() {
          const IH = GH.c.Clone(() => new HH(this.name, this.influence, this._scene, this.morphTargetManager), this);
          return IH._positions = this._positions, IH._normals = this._normals, IH._tangents = this._tangents, IH._uvs = this._uvs, IH._uv2s = this._uv2s, IH._colors = this._colors, IH;
        }
        serialize() {
          const HH = {};
          return HH.name = this.name, HH.influence = this.influence, null != this.id && (HH.id = this.id), HH.uniqueId = this.uniqueId, HH.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (HH.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (HH.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (HH.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (HH.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (HH.colors = Array.prototype.slice.call(this.getColors())), GH.c.AppendSerializedAnimations(this, HH), HH;
        }
        getClassName() {
          return "MorphTarget";
        }
        static Parse(IH, EH) {
          let RH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const hH = new HH(IH.name, IH.influence, EH, RH);
          if (hH.setPositions(IH.positions), null != IH.id && (hH.id = IH.id), IH.normals && hH.setNormals(IH.normals), IH.tangents && hH.setTangents(IH.tangents), IH.uvs && hH.setUVs(IH.uvs), IH.uv2s && hH.setUV2s(IH.uv2s), IH.colors && hH.setColors(IH.colors), IH.animations) {
            for (let HH = 0; HH < IH.animations.length; HH++) {
              const EH = IH.animations[HH],
                RH = (0, AH.c)("BABYLON.Animation");
              RH && hH.animations.push(RH.Parse(EH));
            }
            IH.autoAnimate && EH && EH.beginAnimation(hH, IH.autoAnimateFrom, IH.autoAnimateTo, IH.autoAnimateLoop, IH.autoAnimateSpeed || 1);
          }
          return hH;
        }
        static FromMesh(IH, EH, RH) {
          EH || (EH = IH.name);
          const hH = new HH(EH, RH, IH.kh(), IH.morphTargetManager);
          return hH.setPositions(IH.getVerticesData(sH.t.PositionKind)), IH.isVerticesDataPresent(sH.t.NormalKind) && hH.setNormals(IH.getVerticesData(sH.t.NormalKind)), IH.isVerticesDataPresent(sH.t.TangentKind) && hH.setTangents(IH.getVerticesData(sH.t.TangentKind)), IH.isVerticesDataPresent(sH.t.UVKind) && hH.setUVs(IH.getVerticesData(sH.t.UVKind)), IH.isVerticesDataPresent(sH.t.UV2Kind) && hH.setUV2s(IH.getVerticesData(sH.t.UV2Kind)), IH.isVerticesDataPresent(sH.t.ColorKind) && hH.setColors(IH.getVerticesData(sH.t.ColorKind)), hH;
        }
      }, (() => {
        const hH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IH = [(0, eH.K)()], EH = [(0, eH.K)()], (0, RH.i)(null, null, IH, {
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
        }, VH, YH), (0, RH.i)(null, null, EH, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: HH => "morphTargetManager" in HH,
            get: HH => HH.morphTargetManager,
            set: (HH, IH) => {
              HH.morphTargetManager = IH;
            }
          },
          metadata: hH
        }, QH, JH), hH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: hH
        });
      })(), HH;
    })();
  }
};
//# sourceMappingURL=ug4nu.50.5b8f0534.chunk.js.map
//# debugId=70c6ba48-2da9-5b3b-8bbe-b7725ad88839