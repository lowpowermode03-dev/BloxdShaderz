!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b55e3c8c-ccb7-5295-b498-7199ffa2153b");
  } catch (e) {}
}();
export const id = 49;
export const ids = [49];
export const modules = {
  21903: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => JH,
      f: () => QH,
      g: () => AH,
      h: () => OH,
      j: () => VH,
      n: () => eH,
      r: () => GH,
      u: () => YH
    });
    var RH = EH(21832),
      hH = EH(21909);
    function TH(HH, IH, EH, RH) {
      switch (IH) {
        case 5120:
          {
            let IH = HH.getInt8(EH);
            return RH && (IH = Math.max(IH / 127, -1)), IH;
          }
        case 5121:
          {
            let IH = HH.getUint8(EH);
            return RH && (IH /= 255), IH;
          }
        case 5122:
          {
            let IH = HH.getInt16(EH, !0);
            return RH && (IH = Math.max(IH / 32767, -1)), IH;
          }
        case 5123:
          {
            let IH = HH.getUint16(EH, !0);
            return RH && (IH /= 65535), IH;
          }
        case 5131:
          return (0, hH.b)(HH.getUint16(EH, !0));
        case 5124:
          return HH.getInt32(EH, !0);
        case 5125:
          return HH.getUint32(EH, !0);
        case 5126:
          return HH.getFloat32(EH, !0);
        default:
          throw new Error("Invalid component type ".concat(IH));
      }
    }
    function sH(HH, IH, EH, RH, TH) {
      switch (IH) {
        case 5120:
          RH && (TH = Math.round(127 * TH)), HH.setInt8(EH, TH);
          break;
        case 5121:
          RH && (TH = Math.round(255 * TH)), HH.setUint8(EH, TH);
          break;
        case 5122:
          RH && (TH = Math.round(32767 * TH)), HH.setInt16(EH, TH, !0);
          break;
        case 5123:
          RH && (TH = Math.round(65535 * TH)), HH.setUint16(EH, TH, !0);
          break;
        case 5131:
          HH.setUint16(EH, (0, hH.i)(TH), !0);
          break;
        case 5124:
          HH.setInt32(EH, TH, !0);
          break;
        case 5125:
          HH.setUint32(EH, TH, !0);
          break;
        case 5126:
          HH.setFloat32(EH, TH, !0);
          break;
        default:
          throw new Error("Invalid component type ".concat(IH));
      }
    }
    function eH(HH) {
      switch (HH) {
        case 5120:
        case 5121:
          return 1;
        case 5122:
        case 5123:
        case 5131:
          return 2;
        case 5124:
        case 5125:
        case 5126:
          return 4;
        default:
          throw new Error("Invalid type '".concat(HH, "'"));
      }
    }
    function GH(HH) {
      switch (HH) {
        case 5120:
          return Int8Array;
        case 5121:
          return Uint8Array;
        case 5122:
          return Int16Array;
        case 5123:
        case 5131:
          return Uint16Array;
        case 5124:
          return Int32Array;
        case 5125:
          return Uint32Array;
        case 5126:
          return Float32Array;
        default:
          throw new Error("Invalid component type '".concat(HH, "'"));
      }
    }
    function AH(HH, IH, EH, RH, hH, GH, AH, VH) {
      const YH = new Array(RH),
        QH = new Array(RH);
      if (HH instanceof Array) {
        let hH = IH / 4;
        const TH = EH / 4;
        for (let IH = 0; IH < GH; IH += RH) {
          for (let IH = 0; IH < RH; IH++) YH[IH] = QH[IH] = HH[hH + IH];
          VH(QH, IH);
          for (let IH = 0; IH < RH; IH++) YH[IH] !== QH[IH] && (HH[hH + IH] = QH[IH]);
          hH += TH;
        }
      } else {
        const JH = ArrayBuffer.isView(HH) ? new DataView(HH.buffer, HH.byteOffset, HH.byteLength) : new DataView(HH),
          OH = eH(hH);
        for (let HH = 0; HH < GH; HH += RH) {
          for (let HH = 0, EH = IH; HH < RH; HH++, EH += OH) YH[HH] = QH[HH] = TH(JH, hH, EH, AH);
          VH(QH, HH);
          for (let HH = 0, EH = IH; HH < RH; HH++, EH += OH) YH[HH] !== QH[HH] && sH(JH, hH, EH, AH, QH[HH]);
          IH += EH;
        }
      }
    }
    function VH(HH, IH, EH, hH, TH, sH, GH, VH) {
      const YH = IH * eH(EH),
        QH = GH * IH;
      if (5126 !== EH || TH !== YH) {
        const RH = new Float32Array(QH);
        return AH(HH, hH, TH, IH, EH, QH, sH, (HH, EH) => {
          for (let hH = 0; hH < IH; hH++) RH[EH + hH] = HH[hH];
        }), RH;
      }
      if (!(HH instanceof Array || HH instanceof Float32Array) || 0 !== hH || HH.length !== QH) {
        if (HH instanceof Array) {
          const IH = hH / 4;
          return HH.slice(IH, IH + QH);
        }
        if (ArrayBuffer.isView(HH)) {
          const IH = HH.byteOffset + hH;
          return 0 !== (3 & IH) && (RH.e.Warn("Float array must be aligned to 4-bytes border"), VH = !0), VH ? new Float32Array(HH.buffer.slice(IH, IH + QH * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(HH.buffer, IH, QH);
        }
        return new Float32Array(HH, hH, QH);
      }
      return VH ? HH.slice() : HH;
    }
    function YH(HH, IH, EH, hH, TH, sH, VH) {
      const YH = eH(EH),
        QH = GH(EH),
        JH = sH * IH;
      if (Array.isArray(HH)) {
        if (0 !== (3 & hH) || 0 !== (3 & TH)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const RH = hH / 4,
          eH = TH / 4;
        if (RH + (sH - 1) * eH + IH > HH.length) throw new Error("Last accessed index is out of bounds.");
        if (eH < IH) throw new Error("Data stride cannot be smaller than the component size.");
        if (eH !== IH) {
          const RH = new QH(JH);
          return AH(HH, hH, TH, IH, EH, JH, !1, (HH, EH) => {
            for (let hH = 0; hH < IH; hH++) RH[EH + hH] = HH[hH];
          }), RH;
        }
        return new QH(HH.slice(RH, RH + JH));
      }
      let OH,
        rH = hH;
      ArrayBuffer.isView(HH) ? (OH = HH.buffer, rH += HH.byteOffset) : OH = HH;
      if (rH + (sH - 1) * TH + IH * YH > OH.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const FH = IH * YH;
      if (TH < FH) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (TH !== FH) {
        const HH = new QH(JH),
          EH = new Uint8Array(OH, rH),
          RH = new Uint8Array(HH.buffer),
          hH = IH * YH;
        for (let IH = 0, eH = 0, GH = 0; IH < sH; IH++, eH += TH, GH += hH) RH.set(EH.subarray(eH, eH + hH), GH);
        return HH;
      }
      return 1 !== YH && 0 !== (rH & YH - 1) && (RH.e.Warn("Array must be aligned to border of element size. Data will be copied."), VH = !0), VH ? new QH(OH.slice(rH, rH + JH * YH)) : new QH(OH, rH, JH);
    }
    function QH(HH, IH, EH, hH, TH, sH, GH, VH) {
      const YH = IH * eH(EH),
        QH = GH * IH;
      if (VH.length !== QH) throw new Error("Output length is not valid");
      if (5126 === EH && TH === YH) {
        if (HH instanceof Array) {
          const IH = hH / 4;
          VH.set(HH, IH);
        } else if (ArrayBuffer.isView(HH)) {
          const IH = HH.byteOffset + hH;
          if (0 !== (3 & IH)) return RH.e.Warn("Float array must be aligned to 4-bytes border"), void VH.set(new Float32Array(HH.buffer.slice(IH, IH + QH * Float32Array.BYTES_PER_ELEMENT)));
          const EH = new Float32Array(HH.buffer, IH, QH);
          VH.set(EH);
        } else {
          const IH = new Float32Array(HH, hH, QH);
          VH.set(IH);
        }
      } else AH(HH, hH, TH, IH, EH, QH, sH, (HH, EH) => {
        for (let RH = 0; RH < IH; RH++) VH[EH + RH] = HH[RH];
      });
    }
    function JH(HH, IH) {
      let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(HH)) {
        for (let hH = 0; hH < IH; hH++) if (HH[EH + hH] - RH > 65535) return !0;
        return !1;
      }
      return 4 === HH.BYTES_PER_ELEMENT;
    }
    function OH(HH) {
      const IH = HH.buffer;
      if (IH instanceof ArrayBuffer) return HH;
      const EH = new ArrayBuffer(HH.byteLength);
      return new Uint8Array(EH).set(new Uint8Array(IH, HH.byteOffset, HH.byteLength)), EH;
    }
  },
  21841: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => sH
    });
    var RH = EH(17),
      hH = EH(21832);
    const TH = (HH, IH, EH) => HH ? HH.getClassName && "Mesh" === HH.getClassName() ? null : !HH.getClassName || "SubMesh" !== HH.getClassName() && "PhysicsBody" !== HH.getClassName() ? HH.clone ? HH.clone() : Array.isArray(HH) ? HH.slice() : EH && "object" === typeof HH ? (0, RH.b)({}, HH) : null : HH.clone(IH) : null;
    class sH {
      static DeepCopy(HH, IH, EH, RH) {
        let sH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const eH = function (HH) {
          const IH = [];
          do {
            const EH = Object.getOwnPropertyNames(HH);
            for (const HH of EH) -1 === IH.indexOf(HH) && IH.push(HH);
          } while (HH = Object.getPrototypeOf(HH));
          return IH;
        }(HH);
        for (const AH of eH) {
          if ("_" === AH[0] && (!RH || -1 === RH.indexOf(AH))) continue;
          if (AH.endsWith("Observable")) continue;
          if (EH && -1 !== EH.indexOf(AH)) continue;
          const eH = HH[AH],
            VH = typeof eH;
          if ("function" !== VH) try {
            if ("object" === VH) {
              if (eH instanceof Uint8Array) IH[AH] = Uint8Array.from(eH);else if (eH instanceof Array) {
                if (IH[AH] = [], eH.length > 0) if ("object" == typeof eH[0]) for (let HH = 0; HH < eH.length; HH++) {
                  const EH = TH(eH[HH], IH, sH);
                  -1 === IH[AH].indexOf(EH) && IH[AH].push(EH);
                } else IH[AH] = eH.slice(0);
              } else IH[AH] = TH(eH, IH, sH);
            } else IH[AH] = eH;
          } catch (GH) {
            hH.e.Warn(GH.message);
          }
        }
      }
    }
  },
  21876: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => RH,
      g: () => hH,
      i: () => TH
    });
    class RH extends Error {}
    RH._setPrototypeOf = Object.setPrototypeOf || ((HH, IH) => (HH.__proto__ = IH, HH));
    const hH = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class TH extends RH {
      constructor(HH, IH, EH) {
        super(HH), this.errorCode = IH, this.innerError = EH, this.name = "RuntimeError", RH._setPrototypeOf(this, TH.prototype);
      }
    }
  },
  21867: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => CH,
      f: () => DH,
      i: () => gH,
      m: () => oH,
      s: () => qH,
      q: () => MH,
      t: () => mI,
      w: () => ZH,
      y: () => fH,
      A: () => LH,
      B: () => PH
    });
    var RH = EH(17),
      hH = EH(21863),
      TH = EH(21828),
      sH = EH(21786);
    class eH {}
    eH.FilesToLoad = {};
    var GH = EH(21876),
      AH = EH(21882),
      VH = EH(21782),
      YH = EH(21889),
      QH = EH(21896),
      JH = EH(21832),
      OH = EH(21900),
      rH = EH(21903);
    const FH = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class MH extends GH.i {
      constructor(HH, IH) {
        super(HH, GH.g.LoadFileError), this.name = "LoadFileError", GH.c._setPrototypeOf(this, MH.prototype), IH instanceof hH.c ? this.request = IH : this.file = IH;
      }
    }
    class NH extends GH.i {
      constructor(HH, IH) {
        super(HH, GH.g.RequestFileError), this.request = IH, this.name = "RequestFileError", GH.c._setPrototypeOf(this, NH.prototype);
      }
    }
    class iI extends GH.i {
      constructor(HH, IH) {
        super(HH, GH.g.ReadFileError), this.file = IH, this.name = "ReadFileError", GH.c._setPrototypeOf(this, iI.prototype);
      }
    }
    const DH = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (EH, RH, hH) => 0 !== RH.status || hH >= HH || -1 !== EH.indexOf("file:") ? -1 : Math.pow(2, hH) * IH;
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: HH => HH,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: HH => HH,
        CleanUrl: HH => HH = HH.replace(/#/gm, "%23")
      },
      PH = (HH, IH) => {
        if ((!HH || 0 !== HH.indexOf("data:")) && DH.CorsBehavior) if ("string" === typeof DH.CorsBehavior || DH.CorsBehavior instanceof String) IH.crossOrigin = DH.CorsBehavior;else {
          const EH = DH.CorsBehavior(HH);
          EH && (IH.crossOrigin = EH);
        }
      },
      XH = {
        getRequiredSize: null
      },
      mI = function (HH, IH, EH, TH) {
        let sH,
          GH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          YH = arguments.length > 5 ? arguments[5] : void 0,
          QH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : VH.e.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && (null === QH || void 0 === QH || !QH._features.forceBitmapOverHTMLImageElement)) return EH("LoadImage is only supported in web or BabylonNative environments."), null;
        let JH = !1;
        if (HH instanceof ArrayBuffer || ArrayBuffer.isView(HH)) {
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let IH;
            IH = HH instanceof ArrayBuffer ? HH : (0, rH.h)(HH), sH = URL.createObjectURL(new Blob([IH], {
              type: GH
            })), JH = !0;
          } else sH = "data:".concat(GH, ";base64,") + (0, AH.m)(HH);
        } else HH instanceof Blob ? (sH = URL.createObjectURL(HH), JH = !0) : (sH = DH.CleanUrl(HH), sH = DH.PreprocessUrl(sH));
        const OH = IH => {
          if (EH) {
            const RH = sH || HH.toString();
            EH("Error while trying to load image: ".concat(0 === RH.indexOf("http") || RH.length <= 128 ? RH : RH.slice(0, 128) + "..."), IH);
          }
        };
        if (null !== QH && void 0 !== QH && QH._features.forceBitmapOverHTMLImageElement) return qH(sH, hH => {
          QH.createImageBitmap(new Blob([hH], {
            type: GH
          }), (0, RH.b)({
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }, YH)).then(HH => {
            IH(HH), JH && URL.revokeObjectURL(sH);
          }).catch(IH => {
            EH && EH("Error while trying to load image: " + HH, IH);
          });
        }, void 0, TH || void 0, !0, (HH, IH) => {
          OH(IH);
        }), null;
        const FH = new Image();
        if (XH.getRequiredSize) {
          const IH = XH.getRequiredSize(HH);
          IH.width && (FH.width = IH.width), IH.height && (FH.height = IH.height);
        }
        PH(sH, FH);
        const MH = [],
          NH = () => {
            for (const HH of MH) HH.target.removeEventListener(HH.name, HH.handler);
            MH.length = 0;
          };
        MH.push({
          target: FH,
          name: "load",
          handler: () => {
            NH(), IH(FH), JH && FH.src && URL.revokeObjectURL(FH.src);
          }
        }), MH.push({
          target: FH,
          name: "error",
          handler: HH => {
            NH(), OH(HH), JH && FH.src && URL.revokeObjectURL(FH.src);
          }
        }), MH.push({
          target: document,
          name: "securitypolicyviolation",
          handler: HH => {
            if (HH.blockedURI !== FH.src || "JN" === HH.disposition) return;
            NH();
            const IH = new Error("CSP violation of policy ".concat(HH.effectiveDirective, " ").concat(HH.blockedURI, ". Current policy is ").concat(HH.originalPolicy));
            VH.e.UseFallbackTexture = !1, OH(IH), JH && FH.src && URL.revokeObjectURL(FH.src), FH.src = "";
          }
        }), (() => {
          for (const HH of MH) HH.target.addEventListener(HH.name, HH.handler);
        })();
        const iI = "blob:" === sH.substring(0, 5),
          mI = "data:" === sH.substring(0, 5),
          ZH = () => {
            iI || mI || !hH.c.IsCustomRequestAvailable ? FH.src = sH : qH(sH, (HH, IH, EH) => {
              const RH = new Blob([HH], {
                  type: !GH && EH ? EH : GH
                }),
                hH = URL.createObjectURL(RH);
              JH = !0, FH.src = hH;
            }, void 0, TH || void 0, !0, (HH, IH) => {
              OH(IH);
            });
          },
          LH = () => {
            TH && TH.loadImage(sH, FH);
          };
        if (!iI && !mI && TH && TH.enableTexturesOffline) TH.open(LH, ZH);else {
          if (-1 !== sH.indexOf("file:")) {
            const HH = decodeURIComponent(sH.substring(5).toLowerCase());
            if (eH.FilesToLoad[HH] && "undefined" !== typeof URL) {
              try {
                let IH;
                try {
                  IH = URL.createObjectURL(eH.FilesToLoad[HH]);
                } catch (gH) {
                  IH = URL.createObjectURL(eH.FilesToLoad[HH]);
                }
                FH.src = IH, JH = !0;
              } catch (yH) {
                FH.src = "";
              }
              return FH;
            }
          }
          ZH();
        }
        return FH;
      },
      ZH = (HH, IH, EH, RH, hH) => {
        const TH = new FileReader(),
          eH = {
            onCompleteObservable: new sH.e(),
            abort: () => TH.abort()
          };
        return TH.onloadend = () => eH.onCompleteObservable.notifyObservers(eH), hH && (TH.onerror = () => {
          hH(new iI("Unable to read ".concat(HH.name), HH));
        }), TH.onload = HH => {
          IH(HH.target.result);
        }, EH && (TH.onprogress = EH), RH ? TH.readAsArrayBuffer(HH) : TH.readAsText(HH), eH;
      },
      qH = (HH, IH, EH, RH, hH, TH, AH) => {
        if (HH.name) return ZH(HH, IH, EH, hH, TH ? HH => {
          TH(void 0, HH);
        } : void 0);
        const VH = HH;
        if (-1 !== VH.indexOf("file:")) {
          let HH = decodeURIComponent(VH.substring(5).toLowerCase());
          0 === HH.indexOf("./") && (HH = HH.substring(2));
          const RH = eH.FilesToLoad[HH];
          if (RH) return ZH(RH, IH, EH, hH, TH ? HH => TH(void 0, new MH(HH.message, HH.file)) : void 0);
        }
        const {
          match: YH,
          type: QH
        } = kI(VH);
        if (YH) {
          const HH = {
            onCompleteObservable: new sH.e(),
            abort: () => () => {}
          };
          try {
            const HH = hH ? CH(VH) : cH(VH);
            IH(HH, void 0, QH);
          } catch (GH) {
            TH ? TH(void 0, GH) : JH.e.Error(GH.message || "Failed to parse the Data URL");
          }
          return OH.e.SetImmediate(() => {
            HH.onCompleteObservable.notifyObservers(HH);
          }), HH;
        }
        return LH(VH, (HH, EH) => {
          IH(HH, null === EH || void 0 === EH ? void 0 : EH.responseURL, null === EH || void 0 === EH ? void 0 : EH.getResponseHeader("content-type"));
        }, EH, RH, hH, TH ? HH => {
          TH(HH.request, new MH(HH.message, HH.request));
        } : void 0, AH);
      },
      LH = (HH, IH, EH, RH, eH, GH, AH) => {
        var YH, QH;
        null !== RH && (null !== (YH = RH) && void 0 !== YH || (RH = null === (QH = VH.e.LastCreatedScene) || void 0 === QH ? void 0 : QH.offlineProvider));
        HH = DH.CleanUrl(HH), HH = DH.PreprocessUrl(HH);
        const OH = DH.BaseUrl + HH;
        let rH = !1;
        const FH = {
            onCompleteObservable: new sH.e(),
            abort: () => rH = !0
          },
          MH = () => {
            let HH,
              RH = new hH.c(),
              sH = null;
            const VH = () => {
              RH && (EH && RH.removeEventListener("progress", EH), HH && RH.removeEventListener("readystatechange", HH), RH.removeEventListener("loadend", YH));
            };
            let YH = () => {
              VH(), FH.onCompleteObservable.notifyObservers(FH), FH.onCompleteObservable.clear(), EH = void 0, HH = null, YH = null, GH = void 0, AH = void 0, IH = void 0;
            };
            FH.abort = () => {
              rH = !0, YH && YH(), RH && RH.readyState !== (XMLHttpRequest.DONE || 4) && RH.abort(), null !== sH && (clearTimeout(sH), sH = null), RH = null;
            };
            const QH = HH => {
                const IH = HH.message || "Unknown error";
                GH && RH ? GH(new NH(IH, RH)) : JH.e.Error(IH);
              },
              MH = JH => {
                if (RH) {
                  if (RH.open("GET", OH), AH) try {
                    AH(RH);
                  } catch (FH) {
                    return void QH(FH);
                  }
                  eH && (RH.responseType = "arraybuffer"), EH && RH.addEventListener("progress", EH), YH && RH.addEventListener("loadend", YH), HH = () => {
                    if (!rH && RH && RH.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (HH && RH.removeEventListener("readystatechange", HH), RH.status >= 200 && RH.status < 300 || 0 === RH.status && (!(0, TH.m)() || yH())) {
                        const HH = eH ? RH.response : RH.responseText;
                        if (null !== HH) {
                          try {
                            IH && IH(HH, RH);
                          } catch (FH) {
                            QH(FH);
                          }
                          return;
                        }
                      }
                      const EH = DH.DefaultRetryStrategy;
                      if (EH) {
                        const HH = EH(OH, RH, JH);
                        if (-1 !== HH) return VH(), RH = new hH.c(), void (sH = setTimeout(() => MH(JH + 1), HH));
                      }
                      const AH = new NH("Error status: " + RH.status + " " + RH.statusText + " - Unable to load " + OH, RH);
                      GH && GH(AH);
                    }
                  }, RH.addEventListener("readystatechange", HH), RH.send();
                }
              };
            MH(0);
          };
        if (RH && RH.enableSceneOffline && !HH.startsWith("blob:")) {
          const hH = HH => {
              HH && HH.status > 400 ? GH && GH(HH) : MH();
            },
            TH = () => {
              RH && RH.loadFile(DH.BaseUrl + HH, HH => {
                !rH && IH && IH(HH), FH.onCompleteObservable.notifyObservers(FH);
              }, EH ? HH => {
                !rH && EH && EH(HH);
              } : void 0, hH, eH);
            };
          RH.open(TH, hH);
        } else MH();
        return FH;
      },
      gH = HH => {
        const {
          match: IH,
          type: EH
        } = kI(HH);
        if (IH) return EH || void 0;
        const RH = HH.lastIndexOf(".");
        switch (HH.substring(RH + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "vJ":
            return "model/gltf+json";
          case "jpg":
          case "jpeg":
            return "image/jpeg";
          case "png":
            return "image/png";
          case "webp":
            return "image/webp";
          case "ktx":
            return "image/ktx";
          case "ktx2":
            return "image/ktx2";
          case "avif":
            return "image/avif";
          default:
            return;
        }
      },
      yH = () => "undefined" !== typeof location && "file:" === location.protocol,
      oH = HH => FH.test(HH),
      kI = HH => {
        const IH = FH.exec(HH);
        if (null === IH || 0 === IH.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: IH[0].replace("data:", "").replace(";base64,", "")
        };
      };
    function CH(HH) {
      return (0, AH.e)(HH.split(",")[1]);
    }
    const cH = HH => (0, AH.f)(HH.split(",")[1]);
    let UH;
    const WH = (HH, IH, EH, RH, hH, TH, sH, eH, GH, AH) => {
      UH = {
        DecodeBase64UrlToBinary: HH,
        DecodeBase64UrlToString: IH,
        DefaultRetryStrategy: EH.DefaultRetryStrategy,
        BaseUrl: EH.BaseUrl,
        CorsBehavior: EH.CorsBehavior,
        PreprocessUrl: EH.PreprocessUrl,
        IsBase64DataUrl: RH,
        IsFileURL: hH,
        LoadFile: TH,
        LoadImage: sH,
        ReadFile: eH,
        RequestFile: GH,
        SetCorsBehavior: AH
      }, Object.defineProperty(UH, "DefaultRetryStrategy", {
        get: function () {
          return EH.DefaultRetryStrategy;
        },
        set: function (HH) {
          EH.DefaultRetryStrategy = HH;
        }
      }), Object.defineProperty(UH, "BaseUrl", {
        get: function () {
          return EH.BaseUrl;
        },
        set: function (HH) {
          EH.BaseUrl = HH;
        }
      }), Object.defineProperty(UH, "PreprocessUrl", {
        get: function () {
          return EH.PreprocessUrl;
        },
        set: function (HH) {
          EH.PreprocessUrl = HH;
        }
      }), Object.defineProperty(UH, "CorsBehavior", {
        get: function () {
          return EH.CorsBehavior;
        },
        set: function (HH) {
          EH.CorsBehavior = HH;
        }
      });
    };
    let BH = !1;
    function fH() {
      BH || (BH = !0, WH(CH, cH, DH, oH, yH, qH, mI, ZH, LH, PH), YH.b.loadFile = qH, YH.b.loadImage = mI, QH.j.loadFile = qH);
    }
  },
  21925: (HH, IH, EH) => {
    function RH() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, HH => {
        const IH = 16 * Math.random() | 0;
        return ("x" === HH ? IH : 3 & IH | 8).toString(16);
      });
    }
    EH.d(IH, {
      d: () => RH
    });
  },
  21909: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => eH,
      f: () => TH,
      i: () => sH
    });
    let RH = null;
    function hH() {
      if (RH) return RH;
      const HH = new ArrayBuffer(4),
        IH = new Float32Array(HH),
        EH = new Uint32Array(HH),
        hH = new Uint32Array(512),
        TH = new Uint32Array(512);
      for (let RH = 0; RH < 256; ++RH) {
        const HH = RH - 127;
        HH < -24 ? (hH[RH] = 0, hH[256 | RH] = 32768, TH[RH] = 24, TH[256 | RH] = 24) : HH < -14 ? (hH[RH] = 1024 >> -HH - 14, hH[256 | RH] = 1024 >> -HH - 14 | 32768, TH[RH] = -HH - 1, TH[256 | RH] = -HH - 1) : HH <= 15 ? (hH[RH] = HH + 15 << 10, hH[256 | RH] = HH + 15 << 10 | 32768, TH[RH] = 13, TH[256 | RH] = 13) : HH < 128 ? (hH[RH] = 31744, hH[256 | RH] = 64512, TH[RH] = 24, TH[256 | RH] = 24) : (hH[RH] = 31744, hH[256 | RH] = 64512, TH[RH] = 13, TH[256 | RH] = 13);
      }
      const sH = new Uint32Array(2048),
        eH = new Uint32Array(64),
        GH = new Uint32Array(64);
      for (let RH = 1; RH < 1024; ++RH) {
        let HH = RH << 13,
          IH = 0;
        for (; 0 === (8388608 & HH);) HH <<= 1, IH -= 8388608;
        HH &= -8388609, IH += 947912704, sH[RH] = HH | IH;
      }
      for (let RH = 1024; RH < 2048; ++RH) sH[RH] = 939524096 + (RH - 1024 << 13);
      for (let RH = 1; RH < 31; ++RH) eH[RH] = RH << 23;
      eH[31] = 1199570944, eH[32] = 2147483648;
      for (let RH = 33; RH < 63; ++RH) eH[RH] = 2147483648 + (RH - 32 << 23);
      eH[63] = 3347054592;
      for (let RH = 1; RH < 64; ++RH) 32 !== RH && (GH[RH] = 1024);
      return RH = {
        floatView: IH,
        uint32View: EH,
        baseTable: hH,
        shiftTable: TH,
        mantissaTable: sH,
        exponentTable: eH,
        offsetTable: GH
      }, RH;
    }
    const TH = 65504;
    function sH(HH) {
      const IH = hH();
      IH.floatView[0] = HH;
      const EH = IH.uint32View[0],
        RH = EH >> 23 & 511;
      return IH.baseTable[RH] + ((8388607 & EH) >> IH.shiftTable[RH]);
    }
    function eH(HH) {
      const IH = hH();
      return IH.uint32View[0] = IH.mantissaTable[IH.offsetTable[HH >> 10] + (1023 & HH)] + IH.exponentTable[HH >> 10], IH.floatView[0];
    }
  },
  21916: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => TH
    });
    var RH = EH(21832),
      hH = EH(21808);
    class TH {
      static Instantiate(HH) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[HH]) return this.RegisteredExternalClasses[HH];
        const IH = (0, hH.c)(HH);
        if (IH) return IH;
        RH.e.Warn(HH + " not found, you may have missed an import.");
        const EH = HH.split(".");
        let TH = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let RH = 0, hH = EH.length; RH < hH; RH++) TH = TH[EH[RH]];
        return "function" !== typeof TH ? null : TH;
      }
    }
    TH.RegisteredExternalClasses = {};
  },
  21850: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => hH
    });
    var RH = EH(21828);
    class hH {
      static get Now() {
        return (0, RH.m)() && window.performance && window.performance.now ? window.performance.now() : Date.now();
      }
    }
  },
  21882: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => sH,
      f: () => TH,
      j: () => RH,
      m: () => hH
    });
    const RH = HH => {
      if ("undefined" !== typeof TextDecoder) return new TextDecoder().decode(HH);
      let IH = "";
      for (let EH = 0; EH < HH.byteLength; EH++) IH += String.fromCharCode(HH[EH]);
      return IH;
    };
    const hH = HH => {
        const IH = ArrayBuffer.isView(HH) ? new Uint8Array(HH.buffer, HH.byteOffset, HH.byteLength) : new Uint8Array(HH);
        return "function" === typeof IH.toBase64 ? IH.toBase64() : function (HH) {
          const IH = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let EH,
            RH,
            hH,
            TH,
            sH,
            eH,
            GH,
            AH = "",
            VH = 0;
          for (; VH < HH.length;) EH = HH[VH++], RH = VH < HH.length ? HH[VH++] : Number.NaN, hH = VH < HH.length ? HH[VH++] : Number.NaN, TH = EH >> 2, sH = (3 & EH) << 4 | RH >> 4, eH = (15 & RH) << 2 | hH >> 6, GH = 63 & hH, isNaN(RH) ? eH = GH = 64 : isNaN(hH) && (GH = 64), AH += IH.charAt(TH) + IH.charAt(sH) + IH.charAt(eH) + IH.charAt(GH);
          return AH;
        }(IH);
      },
      TH = HH => atob(HH),
      sH = HH => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(HH).buffer : function (HH) {
        const IH = TH(HH),
          EH = IH.length,
          RH = new Uint8Array(new ArrayBuffer(EH));
        for (let hH = 0; hH < EH; hH++) RH[hH] = IH.charCodeAt(hH);
        return RH.buffer;
      }(HH);
  },
  21930: (HH, IH, EH) => {
    function RH(HH) {
      let IH = 1;
      do {
        IH *= 2;
      } while (IH < HH);
      return IH === HH;
    }
    function hH(HH, IH, EH) {
      return HH * (1 - EH) + IH * EH;
    }
    function TH(HH) {
      const IH = sH(HH),
        EH = eH(HH);
      return IH - HH > HH - EH ? EH : IH;
    }
    function sH(HH) {
      return HH--, HH |= HH >> 1, HH |= HH >> 2, HH |= HH >> 4, HH |= HH >> 8, HH |= HH >> 16, ++HH;
    }
    function eH(HH) {
      return HH |= HH >> 1, HH |= HH >> 2, HH |= HH >> 4, HH |= HH >> 8, (HH |= HH >> 16) - (HH >> 1);
    }
    function GH(HH, IH) {
      let EH;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          EH = eH(HH);
          break;
        case 2:
          EH = TH(HH);
          break;
        default:
          EH = sH(HH);
      }
      return Math.min(EH, IH);
    }
    EH.d(IH, {
      e: () => eH,
      i: () => GH,
      j: () => RH,
      l: () => hH,
      p: () => TH
    });
  },
  21819: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => iI,
      g: () => PH,
      i: () => MH,
      l: () => NH
    });
    var RH,
      hH = EH(21786),
      TH = EH(21828),
      sH = EH(21832),
      eH = EH(21841),
      GH = EH(21850),
      AH = EH(21856),
      VH = EH(21863),
      YH = EH(21782),
      QH = EH(21867),
      JH = EH(21900),
      OH = EH(21916),
      rH = EH(21925),
      FH = EH(21930);
    class MH {
      static get BaseUrl() {
        return QH.f.BaseUrl;
      }
      static set BaseUrl(HH) {
        QH.f.BaseUrl = HH;
      }
      static get CleanUrl() {
        return QH.f.CleanUrl;
      }
      static set CleanUrl(HH) {
        QH.f.CleanUrl = HH;
      }
      static IsAbsoluteUrl(HH) {
        return 0 === HH.indexOf("//") || -1 !== HH.indexOf("://") && -1 !== HH.indexOf(".") && -1 !== HH.indexOf("/") && !(HH.indexOf(":") > HH.indexOf("/")) && (HH.indexOf("://") < HH.indexOf(".") || 0 === HH.indexOf("data:") || 0 === HH.indexOf("blob:"));
      }
      static set ScriptBaseUrl(HH) {
        QH.f.ScriptBaseUrl = HH;
      }
      static get ScriptBaseUrl() {
        return QH.f.ScriptBaseUrl;
      }
      static set CDNBaseUrl(HH) {
        RH.ScriptBaseUrl = HH, RH.AssetBaseUrl = HH;
      }
      static set ScriptPreprocessUrl(HH) {
        QH.f.ScriptPreprocessUrl = HH;
      }
      static get ScriptPreprocessUrl() {
        return QH.f.ScriptPreprocessUrl;
      }
      static get DefaultRetryStrategy() {
        return QH.f.DefaultRetryStrategy;
      }
      static set DefaultRetryStrategy(HH) {
        QH.f.DefaultRetryStrategy = HH;
      }
      static get CorsBehavior() {
        return QH.f.CorsBehavior;
      }
      static set CorsBehavior(HH) {
        QH.f.CorsBehavior = HH;
      }
      static get UseFallbackTexture() {
        return YH.e.UseFallbackTexture;
      }
      static set UseFallbackTexture(HH) {
        YH.e.UseFallbackTexture = HH;
      }
      static get RegisteredExternalClasses() {
        return OH.b.RegisteredExternalClasses;
      }
      static set RegisteredExternalClasses(HH) {
        OH.b.RegisteredExternalClasses = HH;
      }
      static get fallbackTexture() {
        return YH.e.FallbackTexture;
      }
      static set fallbackTexture(HH) {
        YH.e.FallbackTexture = HH;
      }
      static FetchToRef(HH, IH, EH, RH, hH, TH) {
        const sH = 4 * ((Math.abs(HH) * EH % EH | 0) + (Math.abs(IH) * RH % RH | 0) * EH);
        TH.r = hH[sH] / 255, TH.g = hH[sH + 1] / 255, TH.b = hH[sH + 2] / 255, TH.a = hH[sH + 3] / 255;
      }
      static Mix(HH, IH, EH) {
        return 0;
      }
      static Instantiate(HH) {
        return OH.b.Instantiate(HH);
      }
      static SetImmediate(HH) {
        JH.e.SetImmediate(HH);
      }
      static IsExponentOfTwo(HH) {
        return !0;
      }
      static FloatRound(HH) {
        return Math.fround(HH);
      }
      static GetFilename(HH) {
        const IH = HH.lastIndexOf("/");
        return IH < 0 ? HH : HH.substring(IH + 1);
      }
      static GetFolderPath(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const EH = HH.lastIndexOf("/");
        return EH < 0 ? IH ? HH : "" : HH.substring(0, EH + 1);
      }
      static ToDegrees(HH) {
        return 180 * HH / Math.PI;
      }
      static ToRadians(HH) {
        return HH * Math.PI / 180;
      }
      static SmoothAngleChange(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const RH = this.ToRadians(HH),
          hH = this.ToRadians(IH);
        return this.ToDegrees(Math.atan2((1 - EH) * Math.sin(hH) + EH * Math.sin(RH), (1 - EH) * Math.cos(hH) + EH * Math.cos(RH)));
      }
      static MakeArray(HH, IH) {
        return !0 === IH || void 0 !== HH && null != HH ? Array.isArray(HH) ? HH : [HH] : null;
      }
      static GetPointerPrefix(HH) {
        return (0, TH.m)() && !window.PointerEvent ? "mouse" : "pointer";
      }
      static SetCorsBehavior(HH, IH) {
        (0, QH.B)(HH, IH);
      }
      static SetReferrerPolicyBehavior(HH, IH) {
        IH.referrerPolicy = HH;
      }
      static get PreprocessUrl() {
        return QH.f.PreprocessUrl;
      }
      static set PreprocessUrl(HH) {
        QH.f.PreprocessUrl = HH;
      }
      static LoadImage(HH, IH, EH, RH, hH, TH) {
        return (0, QH.t)(HH, IH, EH, RH, hH, TH);
      }
      static LoadFile(HH, IH, EH, RH, hH, TH) {
        return (0, QH.s)(HH, IH, EH, RH, hH, TH);
      }
      static async LoadFileAsync(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise((EH, RH) => {
          (0, QH.s)(HH, HH => {
            EH(HH);
          }, void 0, void 0, IH, (HH, IH) => {
            RH(IH);
          });
        });
      }
      static GetAssetUrl(HH) {
        if (!HH) return "";
        if (RH.AssetBaseUrl && HH.startsWith(RH._DefaultAssetsUrl)) {
          const IH = RH.AssetBaseUrl.endsWith("/") ? RH.AssetBaseUrl.slice(0, -1) : RH.AssetBaseUrl;
          return HH.replace(RH._DefaultAssetsUrl, IH);
        }
        return HH;
      }
      static GetBabylonScriptURL(HH, IH) {
        if (!HH) return "";
        if (HH.startsWith(RH._DefaultCdnUrl)) if (RH.ScriptBaseUrl) {
          const IH = RH.ScriptBaseUrl.endsWith("/") ? RH.ScriptBaseUrl.slice(0, -1) : RH.ScriptBaseUrl;
          HH = HH.replace(RH._DefaultCdnUrl, IH);
        } else if (RH._CdnVersion) {
          const IH = "".concat(RH._DefaultCdnUrl, "/v").concat(RH._CdnVersion);
          HH.startsWith(IH) || (HH = HH.replace(RH._DefaultCdnUrl, IH));
        }
        return HH = RH.ScriptPreprocessUrl(HH), IH && !RH.IsAbsoluteUrl(HH) && (HH = RH.GetAbsoluteUrl(HH)), HH;
      }
      static LoadBabylonScript(HH, IH, EH, hH) {
        HH = RH.GetBabylonScriptURL(HH), RH.LoadScript(HH, IH, EH);
      }
      static async LoadBabylonScriptAsync(HH) {
        return HH = RH.GetBabylonScriptURL(HH), await RH.LoadScriptAsync(HH);
      }
      static _LoadScriptNative(HH, IH, EH) {
        _native && RH.LoadFile(HH, HH => {
          try {
            Function(HH).apply(null), IH && IH();
          } catch (RH) {
            EH && EH("LoadScript Error", RH);
          }
        }, void 0, void 0, !1, (HH, IH) => {
          EH && EH("LoadScript Error", IH);
        });
      }
      static _LoadScriptWeb(HH, IH, EH, RH) {
        let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(HH), IH && IH();
          } catch (GH) {
            null === EH || void 0 === EH || EH("Unable to load script '".concat(HH, "' in worker"), GH);
          }
          return;
        }
        if (!(0, TH.m)()) return void (null === EH || void 0 === EH || EH("Cannot load script '".concat(HH, "' outside of a window or a worker")));
        const sH = document.getElementsByTagName("head")[0],
          eH = document.createElement("script");
        hH ? (eH.setAttribute("type", "module"), eH.innerText = HH) : (eH.setAttribute("type", "text/javascript"), eH.setAttribute("src", HH)), RH && (eH.id = RH), eH.onload = () => {
          IH && IH();
        }, eH.onerror = IH => {
          EH && EH("Unable to load script '".concat(HH, "'"), IH);
        }, sH.appendChild(eH);
      }
      static async LoadScriptAsync(HH, IH) {
        return await new Promise((EH, RH) => {
          this.LoadScript(HH, () => {
            EH();
          }, (HH, IH) => {
            RH(IH || new Error(HH));
          }, IH);
        });
      }
      static ReadFileAsDataURL(HH, IH, EH) {
        const RH = new FileReader(),
          TH = {
            onCompleteObservable: new hH.e(),
            abort: () => RH.abort()
          };
        return RH.onloadend = () => {
          TH.onCompleteObservable.notifyObservers(TH);
        }, RH.onload = HH => {
          IH(HH.target.result);
        }, RH.onprogress = EH, RH.readAsDataURL(HH), TH;
      }
      static ReadFile(HH, IH, EH, RH, hH) {
        return (0, QH.w)(HH, IH, EH, RH, hH);
      }
      static FileAsURL(HH) {
        const IH = new Blob([HH]);
        return window.URL.createObjectURL(IH);
      }
      static Format(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return HH.toFixed(IH);
      }
      static DeepCopy(HH, IH, EH, RH) {
        eH.d.DeepCopy(HH, IH, EH, RH);
      }
      static IsEmpty(HH) {
        for (const IH in HH) if (Object.prototype.hasOwnProperty.call(HH, IH)) return !1;
        return !0;
      }
      static RegisterTopRootEvents(HH, IH) {
        for (let RH = 0; RH < IH.length; RH++) {
          const hH = IH[RH];
          HH.addEventListener(hH.name, hH.handler, !1);
          try {
            window.parent && window.parent.addEventListener(hH.name, hH.handler, !1);
          } catch (EH) {}
        }
      }
      static UnregisterTopRootEvents(HH, IH) {
        for (let RH = 0; RH < IH.length; RH++) {
          const hH = IH[RH];
          HH.removeEventListener(hH.name, hH.handler);
          try {
            HH.parent && HH.parent.removeEventListener(hH.name, hH.handler);
          } catch (EH) {}
        }
      }
      static async DumpFramebuffer(HH, IH, EH, RH) {
        throw (0, AH.n)("DumpTools");
      }
      static DumpData(HH, IH, EH, RH) {
        throw (0, AH.n)("DumpTools");
      }
      static async DumpDataAsync(HH, IH, EH) {
        throw (0, AH.n)("DumpTools");
      }
      static _IsOffScreenCanvas(HH) {
        return void 0 !== HH.convertToBlob;
      }
      static ToBlob(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          hH = arguments.length > 3 ? arguments[3] : void 0;
        RH._IsOffScreenCanvas(HH) || HH.toBlob || (HH.toBlob = function (HH, IH, EH) {
          setTimeout(() => {
            const RH = atob(this.toDataURL(IH, EH).split(",")[1]),
              hH = RH.length,
              TH = new Uint8Array(hH);
            for (let HH = 0; HH < hH; HH++) TH[HH] = RH.charCodeAt(HH);
            HH(new Blob([TH]));
          });
        }), RH._IsOffScreenCanvas(HH) ? HH.convertToBlob({
          type: EH,
          quality: hH
        }).then(HH => IH(HH)) : HH.toBlob(function (HH) {
          IH(HH);
        }, EH, hH);
      }
      static DownloadBlob(HH, IH) {
        if ("download" in document.createElement("a")) {
          if (!IH) {
            const HH = new Date();
            IH = "screenshot_" + ((HH.getFullYear() + "-" + (HH.getMonth() + 1)).slice(2) + "-" + HH.getDate() + "_" + HH.getHours() + "-" + ("0" + HH.getMinutes()).slice(-2)) + ".png";
          }
          RH.Download(HH, IH);
        } else if (HH && "undefined" !== typeof URL) {
          const IH = URL.createObjectURL(HH),
            EH = window.open("");
          if (!EH) return;
          const RH = EH.document.createElement("img");
          RH.onload = function () {
            URL.revokeObjectURL(IH);
          }, RH.src = IH, EH.document.body.appendChild(RH);
        }
      }
      static EncodeScreenshotCanvasData(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          hH = arguments.length > 3 ? arguments[3] : void 0,
          TH = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof hH && IH) {
          if (IH) {
            if (RH._IsOffScreenCanvas(HH)) return void HH.convertToBlob({
              type: EH,
              quality: TH
            }).then(HH => {
              const EH = new FileReader();
              EH.readAsDataURL(HH), EH.onloadend = () => {
                const HH = EH.result;
                IH(HH);
              };
            });
            const hH = HH.toDataURL(EH, TH);
            IH(hH);
          }
        } else this.ToBlob(HH, function (HH) {
          HH && RH.DownloadBlob(HH, hH), IH && IH("");
        }, EH, TH);
      }
      static Download(HH, IH) {
        if ("undefined" === typeof URL) return;
        const EH = window.URL.createObjectURL(HH),
          RH = document.createElement("a");
        document.body.appendChild(RH), RH.style.display = "none", RH.href = EH, RH.download = IH, RH.addEventListener("click", () => {
          RH.parentElement && RH.parentElement.removeChild(RH);
        }), RH.click(), window.URL.revokeObjectURL(EH);
      }
      static BackCompatCameraNoPreventDefault(HH) {
        return "boolean" === typeof HH[0] ? HH[0] : "boolean" === typeof HH[1] && HH[1];
      }
      static CreateScreenshot(HH, IH, EH, RH) {
        throw (0, AH.n)("ScreenshotTools");
      }
      static async CreateScreenshotAsync(HH, IH, EH) {
        throw (0, AH.n)("ScreenshotTools");
      }
      static CreateScreenshotUsingRenderTarget(HH, IH, EH, RH) {
        throw (0, AH.n)("ScreenshotTools");
      }
      static async CreateScreenshotUsingRenderTargetAsync(HH, IH, EH) {
        throw (0, AH.n)("ScreenshotTools");
      }
      static RandomId() {
        return (0, rH.d)();
      }
      static IsBase64(HH) {
        return (0, QH.m)(HH);
      }
      static DecodeBase64(HH) {
        return (0, QH.d)(HH);
      }
      static get errorsCount() {
        return sH.e.errorsCount;
      }
      static Log(HH) {
        sH.e.Log(HH);
      }
      static Warn(HH) {
        sH.e.Warn(HH);
      }
      static Error(HH) {
        sH.e.Error(HH);
      }
      static get LogCache() {
        return sH.e.LogCache;
      }
      static ClearLogCache() {
        sH.e.ClearLogCache();
      }
      static set LogLevels(HH) {
        sH.e.LogLevels = HH;
      }
      static set PerformanceLogLevel(HH) {
        var IH, EH, hH, TH;
        (HH & RH.PerformanceUserMarkLogLevel) !== RH.PerformanceUserMarkLogLevel ? (HH & RH.PerformanceConsoleLogLevel) !== RH.PerformanceConsoleLogLevel ? (RH.StartPerformanceCounter = RH._StartPerformanceCounterDisabled, RH.EndPerformanceCounter = RH._EndPerformanceCounterDisabled, null === (IH = _native) || void 0 === IH || null === (EH = IH.disablePerformanceLogging) || void 0 === EH || EH.call(IH)) : null !== (hH = _native) && void 0 !== hH && hH.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), RH.StartPerformanceCounter = RH._StartMarkNative, RH.EndPerformanceCounter = RH._EndMarkNative) : (RH.StartPerformanceCounter = RH._StartPerformanceConsole, RH.EndPerformanceCounter = RH._EndPerformanceConsole) : null !== (TH = _native) && void 0 !== TH && TH.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), RH.StartPerformanceCounter = RH._StartMarkNative, RH.EndPerformanceCounter = RH._EndMarkNative) : (RH.StartPerformanceCounter = RH._StartUserMark, RH.EndPerformanceCounter = RH._EndUserMark);
      }
      static _StartPerformanceCounterDisabled(HH, IH) {}
      static _EndPerformanceCounterDisabled(HH, IH) {}
      static _StartUserMark(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!RH._Performance) {
          if (!(0, TH.m)()) return;
          RH._Performance = window.performance;
        }
        IH && RH._Performance.mark && RH._Performance.mark(HH + "-Begin");
      }
      static _EndUserMark(HH) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && RH._Performance.mark && (RH._Performance.mark(HH + "-End"), RH._Performance.measure(HH, HH + "-Begin", HH + "-End"));
      }
      static _StartPerformanceConsole(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        IH && (RH._StartUserMark(HH, IH), console.time && console.time(HH));
      }
      static _EndPerformanceConsole(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        IH && (RH._EndUserMark(HH, IH), console.timeEnd(HH));
      }
      static _StartMarkNative(HH) {
        var IH;
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && null !== (IH = _native) && void 0 !== IH && IH.startPerformanceCounter) if (RH._NativePerformanceCounterHandles.has(HH)) RH.Warn("Performance counter with name ".concat(HH, " is already started."));else {
          const IH = _native.startPerformanceCounter(HH);
          RH._NativePerformanceCounterHandles.set(HH, IH);
        }
      }
      static _EndMarkNative(HH) {
        var IH;
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && null !== (IH = _native) && void 0 !== IH && IH.endPerformanceCounter) {
          const IH = RH._NativePerformanceCounterHandles.get(HH);
          IH ? (_native.endPerformanceCounter(IH), RH._NativePerformanceCounterHandles.delete(HH)) : RH.Warn("Performance counter with name ".concat(HH, " was not started."));
        }
      }
      static get Now() {
        return GH.d.Now;
      }
      static GetClassName(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          EH = null;
        if (!IH && HH.getClassName) EH = HH.getClassName();else {
          if (HH instanceof Object) {
            EH = (IH ? HH : Object.getPrototypeOf(HH)).constructor.__bjsclassName__;
          }
          EH || (EH = typeof HH);
        }
        return EH;
      }
      static First(HH, IH) {
        for (const EH of HH) if (IH(EH)) return EH;
        return null;
      }
      static getFullClassName(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          EH = null,
          RH = null;
        if (!IH && HH.getClassName) EH = HH.getClassName();else {
          if (HH instanceof Object) {
            const hH = IH ? HH : Object.getPrototypeOf(HH);
            EH = hH.constructor.__bjsclassName__, RH = hH.constructor.__bjsmoduleName__;
          }
          EH || (EH = typeof HH);
        }
        return EH ? (null != RH ? RH + "." : "") + EH : null;
      }
      static async DelayAsync(HH) {
        await new Promise(IH => {
          setTimeout(() => {
            IH();
          }, HH);
        });
      }
      static IsSafari() {
        return !!(0, TH.i)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      }
    }
    function NH(HH, IH) {
      return EH => {
        EH.__bjsclassName__ = HH, EH.__bjsmoduleName__ = null != IH ? IH : null;
      };
    }
    RH = MH, MH.AssetBaseUrl = "", MH.UseCustomRequestHeaders = !1, MH.CustomRequestHeaders = VH.c.CustomRequestHeaders, MH.GetDOMTextContent = TH.d, MH._DefaultCdnUrl = "https://cdn.babylonjs.com", MH._CdnVersion = "9.19.0", MH._DefaultAssetsUrl = "https://assets.babylonjs.com/core", MH.LoadScript = "undefined" === typeof _native ? RH._LoadScriptWeb : RH._LoadScriptNative, MH.GetAbsoluteUrl = "object" === typeof document ? HH => {
      const IH = document.createElement("a");
      return IH.href = HH, IH.href;
    } : "function" === typeof URL && "object" === typeof location ? HH => new URL(HH, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.");
    }, MH.NoneLogLevel = sH.e.NoneLogLevel, MH.MessageLogLevel = sH.e.MessageLogLevel, MH.WarningLogLevel = sH.e.WarningLogLevel, MH.ErrorLogLevel = sH.e.ErrorLogLevel, MH.AllLogLevel = sH.e.AllLogLevel, MH.IsWindowObjectExist = TH.m, MH.PerformanceNoneLogLevel = 0, MH.PerformanceUserMarkLogLevel = 1, MH.PerformanceConsoleLogLevel = 2, MH._NativePerformanceCounterHandles = new Map(), MH.StartPerformanceCounter = RH._StartPerformanceCounterDisabled, MH.EndPerformanceCounter = RH._EndPerformanceCounterDisabled;
    class iI {
      constructor(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = HH, this.index = RH - 1, this._done = !1, this._fn = IH, this._successCallback = EH;
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop());
      }
      breakLoop() {
        this._done = !0, this._successCallback();
      }
      static Run(HH, IH, EH) {
        const RH = new iI(HH, IH, EH, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return RH.executeNext(), RH;
      }
      static SyncAsyncForLoop(HH, IH, EH, RH, hH) {
        let TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return iI.Run(Math.ceil(HH / IH), RH => {
          hH && hH() ? RH.breakLoop() : setTimeout(() => {
            for (let TH = 0; TH < IH; ++TH) {
              const sH = RH.index * IH + TH;
              if (sH >= HH) break;
              if (EH(sH), hH && hH()) {
                RH.breakLoop();
                break;
              }
            }
            RH.executeNext();
          }, TH);
        }, RH);
      }
    }
    let DH = !1;
    function PH() {
      DH || (DH = !0, MH.Mix = FH.l, MH.IsExponentOfTwo = FH.j, YH.e.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z");
    }
  },
  21863: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => hH
    });
    var RH = EH(17);
    class hH {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest() : new XMLHttpRequest(), this._requestURL = "";
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(hH.CustomRequestHeaders).length > 0 || hH.CustomRequestModifiers.length > 0;
      }
      static _CleanUrl(HH) {
        return HH = (HH = HH.replace("file:http:", "http:")).replace("file:https:", "https:");
      }
      static _ShouldSkipRequestModifications(HH) {
        return hH.SkipRequestModificationForBabylonCDN && (HH.includes("preview.babylonjs.com") || HH.includes("cdn.babylonjs.com"));
      }
      static _CollectCustomizations(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const EH = (0, RH.b)({}, IH);
        if (hH._ShouldSkipRequestModifications(HH)) return {
          url: HH,
          headers: EH
        };
        for (const RH in hH.CustomRequestHeaders) {
          const HH = hH.CustomRequestHeaders[RH];
          HH && (EH[RH] = HH);
        }
        const TH = {
          setRequestHeader: (HH, IH) => {
            EH[HH] = IH;
          }
        };
        for (const RH of hH.CustomRequestModifiers) {
          if (hH._ShouldSkipRequestModifications(HH)) break;
          const IH = RH(TH, HH);
          "string" === typeof IH && (HH = IH);
        }
        return {
          url: HH,
          headers: EH
        };
      }
      static async FetchAsync(HH) {
        var IH;
        let EH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const RH = null !== (IH = EH.method) && void 0 !== IH ? IH : "GET";
        if ("undefined" !== typeof fetch) {
          var TH, sH;
          const {
            url: IH,
            headers: eH
          } = hH._CollectCustomizations(hH._CleanUrl(HH), null !== (TH = EH.headers) && void 0 !== TH ? TH : {});
          return await fetch(IH, {
            method: RH,
            headers: eH,
            body: null !== (sH = EH.body) && void 0 !== sH ? sH : void 0
          });
        }
        return await new Promise((IH, TH) => {
          var sH;
          const eH = new hH();
          eH.responseType = "arraybuffer", eH.addEventListener("readystatechange", () => {
            if (4 === eH.readyState) if (eH.status >= 200 && eH.status < 300) {
              const HH = "undefined" !== typeof Headers ? new Headers() : void 0,
                EH = eH.getResponseHeader("Content-Type");
              EH && HH && HH.set("Content-Type", EH), "undefined" !== typeof Response ? IH(new Response(eH.response, {
                status: eH.status,
                statusText: eH.statusText,
                headers: HH
              })) : IH({
                ok: !0,
                status: eH.status,
                statusText: eH.statusText,
                headers: {
                  get: HH => eH.getResponseHeader(HH)
                },
                arrayBuffer: async () => await Promise.resolve(eH.response)
              });
            } else TH(new Error("HTTP ".concat(eH.status, " loading '").concat(eH.requestURL, "': ").concat(eH.statusText)));
          }), eH.open(RH, HH, EH.headers), eH.send(null !== (sH = EH.body) && void 0 !== sH ? sH : null);
        });
      }
      get requestURL() {
        return this._requestURL;
      }
      get onprogress() {
        return this._xhr.onprogress;
      }
      set onprogress(HH) {
        this._xhr.onprogress = HH;
      }
      get readyState() {
        return this._xhr.readyState;
      }
      get status() {
        return this._xhr.status;
      }
      get statusText() {
        return this._xhr.statusText;
      }
      get response() {
        return this._xhr.response;
      }
      get responseURL() {
        return this._xhr.responseURL;
      }
      get responseText() {
        return this._xhr.responseText;
      }
      get responseType() {
        return this._xhr.responseType;
      }
      set responseType(HH) {
        this._xhr.responseType = HH;
      }
      get timeout() {
        return this._xhr.timeout;
      }
      set timeout(HH) {
        this._xhr.timeout = HH;
      }
      addEventListener(HH, IH, EH) {
        this._xhr.addEventListener(HH, IH, EH);
      }
      removeEventListener(HH, IH, EH) {
        this._xhr.removeEventListener(HH, IH, EH);
      }
      abort() {
        this._xhr.abort();
      }
      send(HH) {
        this._xhr.send(HH);
      }
      open(HH, IH, EH) {
        const {
          url: RH,
          headers: TH
        } = hH._CollectCustomizations(IH, EH);
        this._requestURL = hH._CleanUrl(RH), this._xhr.open(HH, this._requestURL, !0);
        for (const hH in TH) this._xhr.setRequestHeader(hH, TH[hH]);
      }
      setRequestHeader(HH, IH) {
        this._xhr.setRequestHeader(HH, IH);
      }
      getResponseHeader(HH) {
        return this._xhr.getResponseHeader(HH);
      }
    }
    hH.CustomRequestHeaders = {}, hH.CustomRequestModifiers = new Array(), hH.SkipRequestModificationForBabylonCDN = !0;
  }
};
//# sourceMappingURL=ug4nu.49.ced7f5ce.chunk.js.map
//# debugId=b55e3c8c-ccb7-5295-b498-7199ffa2153b