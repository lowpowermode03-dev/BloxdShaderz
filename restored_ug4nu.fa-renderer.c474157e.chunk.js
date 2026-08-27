/*! For license information please see ug4nu.fa-renderer.c474157e.chunk.js.LICENSE.txt */

!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "380ec8f7-98dc-500d-9790-ecd3c6a162e4");
  } catch (e) {}
}();
export const id = 0;
export const ids = [0];
export const modules = {
  2229: (HH, IH, EH) => {
    EH.r(IH), EH.d(IH, {
      FontAwesomeIcon: () => ZH
    });
    var RH = EH(2222),
      hH = EH(1981),
      TH = EH.n(hH),
      sH = EH(57);
    function eH(HH, IH) {
      (null == IH || IH > HH.length) && (IH = HH.length);
      for (var EH = 0, RH = Array(IH); EH < IH; EH++) RH[EH] = HH[EH];
      return RH;
    }
    function GH(HH, IH, EH) {
      return (IH = function (HH) {
        var IH = function (HH, IH) {
          if ("object" != typeof HH || !HH) return HH;
          var EH = HH[Symbol.toPrimitive];
          if (void 0 !== EH) {
            var RH = EH.call(HH, IH || "default");
            if ("object" != typeof RH) return RH;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === IH ? String : Number)(HH);
        }(HH, "string");
        return "symbol" == typeof IH ? IH : IH + "";
      }(IH)) in HH ? Object.defineProperty(HH, IH, {
        value: EH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[IH] = EH, HH;
    }
    function AH(HH, IH) {
      var EH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var RH = Object.getOwnPropertySymbols(HH);
        IH && (RH = RH.filter(function (IH) {
          return Object.getOwnPropertyDescriptor(HH, IH).enumerable;
        })), EH.push.apply(EH, RH);
      }
      return EH;
    }
    function VH(HH) {
      for (var IH = 1; IH < arguments.length; IH++) {
        var EH = null != arguments[IH] ? arguments[IH] : {};
        IH % 2 ? AH(Object(EH), !0).forEach(function (IH) {
          GH(HH, IH, EH[IH]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(EH)) : AH(Object(EH)).forEach(function (IH) {
          Object.defineProperty(HH, IH, Object.getOwnPropertyDescriptor(EH, IH));
        });
      }
      return HH;
    }
    function YH(HH, IH) {
      return function (HH) {
        if (Array.isArray(HH)) return HH;
      }(HH) || function (HH, IH) {
        var EH = null == HH ? null : "undefined" != typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
        if (null != EH) {
          var RH,
            hH,
            TH,
            sH,
            eH = [],
            GH = !0,
            AH = !1;
          try {
            if (TH = (EH = EH.call(HH)).next, 0 === IH) {
              if (Object(EH) !== EH) return;
              GH = !1;
            } else for (; !(GH = (RH = TH.call(EH)).done) && (eH.push(RH.value), eH.length !== IH); GH = !0);
          } catch (HH) {
            AH = !0, hH = HH;
          } finally {
            try {
              if (!GH && null != EH.return && (sH = EH.return(), Object(sH) !== sH)) return;
            } finally {
              if (AH) throw hH;
            }
          }
          return eH;
        }
      }(HH, IH) || OH(HH, IH) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function QH(HH) {
      return function (HH) {
        if (Array.isArray(HH)) return eH(HH);
      }(HH) || function (HH) {
        if ("undefined" != typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH);
      }(HH) || OH(HH) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function JH(HH) {
      return JH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (HH) {
        return typeof HH;
      } : function (HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH;
      }, JH(HH);
    }
    function OH(HH, IH) {
      if (HH) {
        if ("string" == typeof HH) return eH(HH, IH);
        var EH = {}.toString.call(HH).slice(8, -1);
        return "Object" === EH && HH.constructor && (EH = HH.constructor.name), "Map" === EH || "Set" === EH ? Array.from(HH) : "Arguments" === EH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(EH) ? eH(HH, IH) : void 0;
      }
    }
    var rH;
    try {
      var FH = EH(2233);
      rH = FH.version;
    } catch (LH) {
      rH = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0";
    }
    function MH(HH) {
      var IH = HH.beat,
        EH = HH.fade,
        RH = HH.beatFade,
        hH = HH.bounce,
        TH = HH.shake,
        sH = HH.flash,
        eH = HH.spin,
        AH = HH.spinPulse,
        VH = HH.spinReverse,
        QH = HH.pulse,
        JH = HH.fixedWidth,
        OH = HH.inverse,
        FH = HH.border,
        MH = HH.listItem,
        NH = HH.flip,
        iI = HH.size,
        DH = HH.rotation,
        PH = HH.pull,
        XH = HH.swapOpacity,
        mI = HH.rotateBy,
        ZH = HH.widthAuto,
        qH = function (HH, IH) {
          for (var EH = YH(HH.split("-"), 2), RH = EH[0], hH = EH[1], TH = YH(IH.split("-"), 2), sH = TH[0], eH = TH[1], GH = RH.split("."), AH = sH.split("."), VH = 0; VH < Math.max(GH.length, AH.length); VH++) {
            var QH = GH[VH] || "0",
              JH = AH[VH] || "0",
              OH = parseInt(QH, 10),
              rH = parseInt(JH, 10);
            if (OH !== rH) return OH > rH;
          }
          for (var FH = 0; FH < Math.max(GH.length, AH.length); FH++) {
            var MH = GH[FH] || "0",
              NH = AH[FH] || "0";
            if (MH !== NH && MH.length !== NH.length) return MH.length < NH.length;
          }
          return !(hH && !eH);
        }(rH, "7.0.0"),
        LH = GH(GH(GH(GH(GH(GH({
          "fa-beat": IH,
          "fa-fade": EH,
          "fa-beat-fade": RH,
          "fa-bounce": hH,
          "fa-shake": TH,
          "fa-flash": sH,
          "fa-spin": eH,
          "fa-spin-reverse": VH,
          "fa-spin-pulse": AH,
          "fa-pulse": QH,
          "fa-fw": JH,
          "fa-inverse": OH,
          "fa-border": FH,
          "fa-li": MH,
          "fa-flip": !0 === NH,
          "fa-flip-horizontal": "horizontal" === NH || "both" === NH,
          "fa-flip-vertical": "vertical" === NH || "both" === NH
        }, "fa-".concat(iI), "undefined" !== typeof iI && null !== iI), "fa-rotate-".concat(DH), "undefined" !== typeof DH && null !== DH && 0 !== DH), "fa-pull-".concat(PH), "undefined" !== typeof PH && null !== PH), "fa-swap-opacity", XH), "fa-rotate-by", qH && mI), "fa-width-auto", qH && ZH);
      return Object.keys(LH).map(function (HH) {
        return LH[HH] ? HH : null;
      }).filter(function (HH) {
        return HH;
      });
    }
    function NH(HH) {
      return IH = HH, (IH -= 0) === IH ? HH : (HH = HH.replace(/[\-_\s]+(.)?/g, function (HH, IH) {
        return IH ? IH.toUpperCase() : "";
      })).substr(0, 1).toLowerCase() + HH.substr(1);
      var IH;
    }
    var iI = ["style"];
    var DH = !1;
    try {
      DH = !0;
    } catch (LH) {}
    function PH(HH) {
      return HH && "object" === JH(HH) && HH.prefix && HH.iconName && HH.icon ? HH : RH.parse.icon ? RH.parse.icon(HH) : null === HH ? null : HH && "object" === JH(HH) && HH.prefix && HH.iconName ? HH : Array.isArray(HH) && 2 === HH.length ? {
        prefix: HH[0],
        iconName: HH[1]
      } : "string" === typeof HH ? {
        prefix: "fas",
        iconName: HH
      } : void 0;
    }
    function XH(HH, IH) {
      return Array.isArray(IH) && IH.length > 0 || !Array.isArray(IH) && IH ? GH({}, HH, IH) : {};
    }
    var mI = {
        border: !1,
        className: "",
        mask: null,
        maskId: null,
        fixedWidth: !1,
        inverse: !1,
        flip: !1,
        icon: null,
        listItem: !1,
        pull: null,
        pulse: !1,
        rotation: null,
        rotateBy: !1,
        size: null,
        spin: !1,
        spinPulse: !1,
        spinReverse: !1,
        beat: !1,
        fade: !1,
        beatFade: !1,
        bounce: !1,
        shake: !1,
        symbol: !1,
        title: "",
        titleId: null,
        transform: null,
        swapOpacity: !1,
        widthAuto: !1
      },
      ZH = sH.forwardRef(function (HH, IH) {
        var EH = VH(VH({}, mI), HH),
          hH = EH.icon,
          TH = EH.mask,
          sH = EH.symbol,
          eH = EH.className,
          GH = EH.title,
          AH = EH.titleId,
          YH = EH.maskId,
          JH = PH(hH),
          OH = XH("classes", [].concat(QH(MH(EH)), QH((eH || "").split(" ")))),
          rH = XH("transform", "string" === typeof EH.transform ? RH.parse.transform(EH.transform) : EH.transform),
          FH = XH("mask", PH(TH)),
          NH = (0, RH.icon)(JH, VH(VH(VH(VH({}, OH), rH), FH), {}, {
            symbol: sH,
            title: GH,
            titleId: AH,
            maskId: YH
          }));
        if (!NH) return function () {
          var HH;
          !DH && console && "function" === typeof console.error && (HH = console).error.apply(HH, arguments);
        }("Could not find icon", JH), null;
        var iI = NH.abstract,
          ZH = {
            ref: IH
          };
        return Object.keys(EH).forEach(function (HH) {
          mI.hasOwnProperty(HH) || (ZH[HH] = EH[HH]);
        }), qH(iI[0], ZH);
      });
    ZH.displayName = "FontAwesomeIcon", ZH.propTypes = {
      beat: TH().bool,
      border: TH().bool,
      beatFade: TH().bool,
      bounce: TH().bool,
      className: TH().string,
      fade: TH().bool,
      flash: TH().bool,
      mask: TH().oneOfType([TH().object, TH().array, TH().string]),
      maskId: TH().string,
      fixedWidth: TH().bool,
      inverse: TH().bool,
      flip: TH().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: TH().oneOfType([TH().object, TH().array, TH().string]),
      listItem: TH().bool,
      pull: TH().oneOf(["right", "left"]),
      pulse: TH().bool,
      rotation: TH().oneOf([0, 90, 180, 270]),
      rotateBy: TH().bool,
      shake: TH().bool,
      size: TH().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: TH().bool,
      spinPulse: TH().bool,
      spinReverse: TH().bool,
      symbol: TH().oneOfType([TH().bool, TH().string]),
      title: TH().string,
      titleId: TH().string,
      transform: TH().oneOfType([TH().string, TH().object]),
      swapOpacity: TH().bool,
      widthAuto: TH().bool
    };
    var qH = function HH(IH, EH) {
      var RH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof EH) return EH;
      var hH = (EH.children || []).map(function (EH) {
          return HH(IH, EH);
        }),
        TH = Object.keys(EH.attributes || {}).reduce(function (HH, IH) {
          var RH = EH.attributes[IH];
          switch (IH) {
            case "class":
              HH.attrs.className = RH, delete EH.attributes.class;
              break;
            case "style":
              HH.attrs.style = RH.split(";").map(function (HH) {
                return HH.trim();
              }).filter(function (HH) {
                return HH;
              }).reduce(function (HH, IH) {
                var EH,
                  RH = IH.indexOf(":"),
                  hH = NH(IH.slice(0, RH)),
                  TH = IH.slice(RH + 1).trim();
                return hH.startsWith("webkit") ? HH[EH = hH, EH.charAt(0).toUpperCase() + EH.slice(1)] = TH : HH[hH] = TH, HH;
              }, {});
              break;
            default:
              0 === IH.indexOf("aria-") || 0 === IH.indexOf("data-") ? HH.attrs[IH.toLowerCase()] = RH : HH.attrs[NH(IH)] = RH;
          }
          return HH;
        }, {
          attrs: {}
        }),
        sH = RH.style,
        eH = void 0 === sH ? {} : sH,
        GH = function (HH, IH) {
          if (null == HH) return {};
          var EH,
            RH,
            hH = function (HH, IH) {
              if (null == HH) return {};
              var EH = {};
              for (var RH in HH) if ({}.hasOwnProperty.call(HH, RH)) {
                if (-1 !== IH.indexOf(RH)) continue;
                EH[RH] = HH[RH];
              }
              return EH;
            }(HH, IH);
          if (Object.getOwnPropertySymbols) {
            var TH = Object.getOwnPropertySymbols(HH);
            for (RH = 0; RH < TH.length; RH++) EH = TH[RH], -1 === IH.indexOf(EH) && {}.propertyIsEnumerable.call(HH, EH) && (hH[EH] = HH[EH]);
          }
          return hH;
        }(RH, iI);
      return TH.attrs.style = VH(VH({}, TH.attrs.style), eH), IH.apply(void 0, [EH.tag, VH(VH({}, TH.attrs), GH)].concat(QH(hH)));
    }.bind(null, sH.createElement);
  },
  2222: (HH, IH, EH) => {
    function RH(HH, IH) {
      (null == IH || IH > HH.length) && (IH = HH.length);
      for (var EH = 0, RH = Array(IH); EH < IH; EH++) RH[EH] = HH[EH];
      return RH;
    }
    function hH(HH, IH) {
      for (var EH = 0; EH < IH.length; EH++) {
        var RH = IH[EH];
        RH.enumerable = RH.enumerable || !1, RH.configurable = !0, "value" in RH && (RH.writable = !0), Object.defineProperty(HH, YH(RH.key), RH);
      }
    }
    function TH(HH, IH) {
      var EH = "undefined" != typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
      if (!EH) {
        if (Array.isArray(HH) || (EH = JH(HH)) || IH && HH && "number" == typeof HH.length) {
          EH && (HH = EH);
          var RH = 0,
            hH = function () {};
          return {
            s: hH,
            n: function () {
              return RH >= HH.length ? {
                done: !0
              } : {
                done: !1,
                value: HH[RH++]
              };
            },
            e: function (HH) {
              throw HH;
            },
            f: hH
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var TH,
        sH = !0,
        eH = !1;
      return {
        s: function () {
          EH = EH.call(HH);
        },
        n: function () {
          var HH = EH.next();
          return sH = HH.done, HH;
        },
        e: function (HH) {
          eH = !0, TH = HH;
        },
        f: function () {
          try {
            sH || null == EH.return || EH.return();
          } finally {
            if (eH) throw TH;
          }
        }
      };
    }
    function sH(HH, IH, EH) {
      return (IH = YH(IH)) in HH ? Object.defineProperty(HH, IH, {
        value: EH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[IH] = EH, HH;
    }
    function eH(HH, IH) {
      var EH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var RH = Object.getOwnPropertySymbols(HH);
        IH && (RH = RH.filter(function (IH) {
          return Object.getOwnPropertyDescriptor(HH, IH).enumerable;
        })), EH.push.apply(EH, RH);
      }
      return EH;
    }
    function GH(HH) {
      for (var IH = 1; IH < arguments.length; IH++) {
        var EH = null != arguments[IH] ? arguments[IH] : {};
        IH % 2 ? eH(Object(EH), !0).forEach(function (IH) {
          sH(HH, IH, EH[IH]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(EH)) : eH(Object(EH)).forEach(function (IH) {
          Object.defineProperty(HH, IH, Object.getOwnPropertyDescriptor(EH, IH));
        });
      }
      return HH;
    }
    function AH(HH, IH) {
      return function (HH) {
        if (Array.isArray(HH)) return HH;
      }(HH) || function (HH, IH) {
        var EH = null == HH ? null : "undefined" != typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
        if (null != EH) {
          var RH,
            hH,
            TH,
            sH,
            eH = [],
            GH = !0,
            AH = !1;
          try {
            if (TH = (EH = EH.call(HH)).next, 0 === IH) {
              if (Object(EH) !== EH) return;
              GH = !1;
            } else for (; !(GH = (RH = TH.call(EH)).done) && (eH.push(RH.value), eH.length !== IH); GH = !0);
          } catch (HH) {
            AH = !0, hH = HH;
          } finally {
            try {
              if (!GH && null != EH.return && (sH = EH.return(), Object(sH) !== sH)) return;
            } finally {
              if (AH) throw hH;
            }
          }
          return eH;
        }
      }(HH, IH) || JH(HH, IH) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function VH(HH) {
      return function (HH) {
        if (Array.isArray(HH)) return RH(HH);
      }(HH) || function (HH) {
        if ("undefined" != typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH);
      }(HH) || JH(HH) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function YH(HH) {
      var IH = function (HH, IH) {
        if ("object" != typeof HH || !HH) return HH;
        var EH = HH[Symbol.toPrimitive];
        if (void 0 !== EH) {
          var RH = EH.call(HH, IH || "default");
          if ("object" != typeof RH) return RH;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === IH ? String : Number)(HH);
      }(HH, "string");
      return "symbol" == typeof IH ? IH : IH + "";
    }
    function QH(HH) {
      return QH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (HH) {
        return typeof HH;
      } : function (HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH;
      }, QH(HH);
    }
    function JH(HH, IH) {
      if (HH) {
        if ("string" == typeof HH) return RH(HH, IH);
        var EH = {}.toString.call(HH).slice(8, -1);
        return "Object" === EH && HH.constructor && (EH = HH.constructor.name), "Map" === EH || "Set" === EH ? Array.from(HH) : "Arguments" === EH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(EH) ? RH(HH, IH) : void 0;
      }
    }
    EH.r(IH), EH.d(IH, {
      api: () => vE,
      config: () => Eh,
      counter: () => Yh,
      dom: () => hh,
      findIconDefinition: () => sh,
      icon: () => Gh,
      layer: () => Ah,
      library: () => Rh,
      noAuto: () => Ih,
      parse: () => Th,
      text: () => Vh,
      toHtml: () => eh
    });
    var OH = function () {},
      rH = {},
      FH = {},
      MH = null,
      NH = {
        mark: OH,
        measure: OH
      };
    try {
      "undefined" !== typeof window && (rH = window), "undefined" !== typeof document && (FH = document), "undefined" !== typeof MutationObserver && (MH = MutationObserver), "undefined" !== typeof performance && (NH = performance);
    } catch (lH) {}
    var iI,
      DH,
      PH = (rH.navigator || {}).userAgent,
      XH = void 0 === PH ? "" : PH,
      mI = rH,
      ZH = FH,
      qH = MH,
      LH = NH,
      gH = (mI.document, !!ZH.documentElement && !!ZH.head && "function" === typeof ZH.addEventListener && "function" === typeof ZH.createElement),
      yH = ~XH.indexOf("MSIE") || ~XH.indexOf("Trident/"),
      oH = {
        classic: {
          fa: "solid",
          fas: "solid",
          "fa-solid": "solid",
          far: "regular",
          "fa-regular": "regular",
          fal: "DE",
          "fa-light": "DE",
          fat: "thin",
          "fa-thin": "thin",
          fab: "brands",
          "fa-brands": "brands"
        },
        duotone: {
          fa: "solid",
          fad: "solid",
          "fa-solid": "solid",
          "fa-duotone": "solid",
          fadr: "regular",
          "fa-regular": "regular",
          fadl: "DE",
          "fa-light": "DE",
          fadt: "thin",
          "fa-thin": "thin"
        },
        sharp: {
          fa: "solid",
          fass: "solid",
          "fa-solid": "solid",
          fasr: "regular",
          "fa-regular": "regular",
          fasl: "DE",
          "fa-light": "DE",
          fast: "thin",
          "fa-thin": "thin"
        },
        "sharp-duotone": {
          fa: "solid",
          fasds: "solid",
          "fa-solid": "solid",
          fasdr: "regular",
          "fa-regular": "regular",
          fasdl: "DE",
          "fa-light": "DE",
          fasdt: "thin",
          "fa-thin": "thin"
        },
        slab: {
          "fa-regular": "regular",
          faslr: "regular"
        },
        "slab-press": {
          "fa-regular": "regular",
          faslpr: "regular"
        },
        thumbprint: {
          "fa-light": "DE",
          fatl: "DE"
        },
        whiteboard: {
          "fa-semibold": "semibold",
          fawsb: "semibold"
        },
        notdog: {
          "fa-solid": "solid",
          fans: "solid"
        },
        "notdog-duo": {
          "fa-solid": "solid",
          fands: "solid"
        },
        etch: {
          "fa-solid": "solid",
          faes: "solid"
        },
        graphite: {
          "fa-thin": "thin",
          fagt: "thin"
        },
        jelly: {
          "fa-regular": "regular",
          fajr: "regular"
        },
        "jelly-fill": {
          "fa-regular": "regular",
          fajfr: "regular"
        },
        "jelly-duo": {
          "fa-regular": "regular",
          fajdr: "regular"
        },
        chisel: {
          "fa-regular": "regular",
          facr: "regular"
        },
        utility: {
          "fa-semibold": "semibold",
          fausb: "semibold"
        },
        "utility-duo": {
          "fa-semibold": "semibold",
          faudsb: "semibold"
        },
        "utility-fill": {
          "fa-semibold": "semibold",
          faufsb: "semibold"
        }
      },
      kI = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      CH = "classic",
      cH = "duotone",
      UH = "sharp",
      WH = "sharp-duotone",
      BH = "chisel",
      fH = "etch",
      aH = "graphite",
      nH = "jelly",
      pH = "jelly-duo",
      dH = "jelly-fill",
      uH = "notdog",
      lH = "notdog-duo",
      KH = "slab",
      wH = "slab-press",
      zH = "thumbprint",
      tH = "utility",
      jI = "utility-duo",
      vH = "utility-fill",
      bH = "whiteboard",
      SH = [CH, cH, UH, WH, BH, fH, aH, nH, pH, dH, uH, lH, KH, wH, zH, tH, jI, vH, bH],
      xH = (sH(sH(sH(sH(sH(sH(sH(sH(sH(sH(iI = {}, CH, "Classic"), cH, "Duotone"), UH, "Sharp"), WH, "Sharp Duotone"), BH, "Chisel"), fH, "Etch"), aH, "Graphite"), nH, "Jelly"), pH, "Jelly Duo"), dH, "Jelly Fill"), sH(sH(sH(sH(sH(sH(sH(sH(sH(iI, uH, "Notdog"), lH, "Notdog Duo"), KH, "Slab"), wH, "Slab Press"), zH, "Thumbprint"), tH, "Utility"), jI, "Utility Duo"), vH, "Utility Fill"), bH, "Whiteboard"), new Map([["classic", {
        defaultShortPrefixId: "fas",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "DE", "thin", "brands"],
        futureStyleIds: [],
        defaultFontWeight: 900
      }], ["duotone", {
        defaultShortPrefixId: "fad",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "DE", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900
      }], ["sharp", {
        defaultShortPrefixId: "fass",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "DE", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900
      }], ["sharp-duotone", {
        defaultShortPrefixId: "fasds",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "DE", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900
      }], ["chisel", {
        defaultShortPrefixId: "facr",
        defaultStyleId: "regular",
        styleIds: ["regular"],
        futureStyleIds: [],
        defaultFontWeight: 400
      }], ["etch", {
        defaultShortPrefixId: "faes",
        defaultStyleId: "solid",
        styleIds: ["solid"],
        futureStyleIds: [],
        defaultFontWeight: 900
      }], ["graphite", {
        defaultShortPrefixId: "fagt",
        defaultStyleId: "thin",
        styleIds: ["thin"],
        futureStyleIds: [],
        defaultFontWeight: 100
      }], ["jelly", {
        defaultShortPrefixId: "fajr",
        defaultStyleId: "regular",
        styleIds: ["regular"],
        futureStyleIds: [],
        defaultFontWeight: 400
      }], ["jelly-duo", {
        defaultShortPrefixId: "fajdr",
        defaultStyleId: "regular",
        styleIds: ["regular"],
        futureStyleIds: [],
        defaultFontWeight: 400
      }], ["jelly-fill", {
        defaultShortPrefixId: "fajfr",
        defaultStyleId: "regular",
        styleIds: ["regular"],
        futureStyleIds: [],
        defaultFontWeight: 400
      }], ["notdog", {
        defaultShortPrefixId: "fans",
        defaultStyleId: "solid",
        styleIds: ["solid"],
        futureStyleIds: [],
        defaultFontWeight: 900
      }], ["notdog-duo", {
        defaultShortPrefixId: "fands",
        defaultStyleId: "solid",
        styleIds: ["solid"],
        futureStyleIds: [],
        defaultFontWeight: 900
      }], ["slab", {
        defaultShortPrefixId: "faslr",
        defaultStyleId: "regular",
        styleIds: ["regular"],
        futureStyleIds: [],
        defaultFontWeight: 400
      }], ["slab-press", {
        defaultShortPrefixId: "faslpr",
        defaultStyleId: "regular",
        styleIds: ["regular"],
        futureStyleIds: [],
        defaultFontWeight: 400
      }], ["thumbprint", {
        defaultShortPrefixId: "fatl",
        defaultStyleId: "DE",
        styleIds: ["DE"],
        futureStyleIds: [],
        defaultFontWeight: 300
      }], ["utility", {
        defaultShortPrefixId: "fausb",
        defaultStyleId: "semibold",
        styleIds: ["semibold"],
        futureStyleIds: [],
        defaultFontWeight: 600
      }], ["utility-duo", {
        defaultShortPrefixId: "faudsb",
        defaultStyleId: "semibold",
        styleIds: ["semibold"],
        futureStyleIds: [],
        defaultFontWeight: 600
      }], ["utility-fill", {
        defaultShortPrefixId: "faufsb",
        defaultStyleId: "semibold",
        styleIds: ["semibold"],
        futureStyleIds: [],
        defaultFontWeight: 600
      }], ["whiteboard", {
        defaultShortPrefixId: "fawsb",
        defaultStyleId: "semibold",
        styleIds: ["semibold"],
        futureStyleIds: [],
        defaultFontWeight: 600
      }]])),
      HI = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      II = {
        fak: "kit",
        "fa-kit": "kit"
      },
      EI = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      RI = (sH(sH({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      hI = {
        "kit-duotone": "fakd"
      },
      TI = "duotone-group",
      sI = "swap-opacity",
      eI = "primary",
      GI = "secondary",
      AI = (sH(sH(sH(sH(sH(sH(sH(sH(sH(sH(DH = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), sH(sH(sH(sH(sH(sH(sH(sH(sH(DH, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), sH(sH({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        classic: {
          fab: "fa-brands",
          fad: "fa-duotone",
          fal: "fa-light",
          far: "fa-regular",
          fas: "fa-solid",
          fat: "fa-thin"
        },
        duotone: {
          fadr: "fa-regular",
          fadl: "fa-light",
          fadt: "fa-thin"
        },
        sharp: {
          fass: "fa-solid",
          fasr: "fa-regular",
          fasl: "fa-light",
          fast: "fa-thin"
        },
        "sharp-duotone": {
          fasds: "fa-solid",
          fasdr: "fa-regular",
          fasdl: "fa-light",
          fasdt: "fa-thin"
        },
        slab: {
          faslr: "fa-regular"
        },
        "slab-press": {
          faslpr: "fa-regular"
        },
        whiteboard: {
          fawsb: "fa-semibold"
        },
        thumbprint: {
          fatl: "fa-light"
        },
        notdog: {
          fans: "fa-solid"
        },
        "notdog-duo": {
          fands: "fa-solid"
        },
        etch: {
          faes: "fa-solid"
        },
        graphite: {
          fagt: "fa-thin"
        },
        jelly: {
          fajr: "fa-regular"
        },
        "jelly-fill": {
          fajfr: "fa-regular"
        },
        "jelly-duo": {
          fajdr: "fa-regular"
        },
        chisel: {
          facr: "fa-regular"
        },
        utility: {
          fausb: "fa-semibold"
        },
        "utility-duo": {
          faudsb: "fa-semibold"
        },
        "utility-fill": {
          faufsb: "fa-semibold"
        }
      }),
      VI = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      YI = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      QI = YI.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      JI = [].concat(VH(Object.keys({
        classic: ["fas", "far", "fal", "fat", "fad"],
        duotone: ["fadr", "fadl", "fadt"],
        sharp: ["fass", "fasr", "fasl", "fast"],
        "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
        slab: ["faslr"],
        "slab-press": ["faslpr"],
        whiteboard: ["fawsb"],
        thumbprint: ["fatl"],
        notdog: ["fans"],
        "notdog-duo": ["fands"],
        etch: ["faes"],
        graphite: ["fagt"],
        jelly: ["fajr"],
        "jelly-fill": ["fajfr"],
        "jelly-duo": ["fajdr"],
        chisel: ["facr"],
        utility: ["fausb"],
        "utility-duo": ["faudsb"],
        "utility-fill": ["faufsb"]
      })), ["solid", "regular", "DE", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "fI", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", TI, sI, eI, GI]).concat(YI.map(function (HH) {
        return "".concat(HH, "x");
      })).concat(QI.map(function (HH) {
        return "w-".concat(HH);
      })),
      OI = "___FONT_AWESOME___",
      rI = "svg-inline--fa",
      FI = "data-fa-i2svg",
      MI = "data-fa-pseudo-element",
      NI = "data-prefix",
      iE = "data-icon",
      DI = "fontawesome-i2svg",
      PI = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      XI = ["::before", "::after", ":before", ":after"],
      mE = function () {
        try {
          return !0;
        } catch (HH) {
          return !1;
        }
      }();
    function ZI(HH) {
      return new Proxy(HH, {
        get: function (HH, IH) {
          return IH in HH ? HH[IH] : HH[CH];
        }
      });
    }
    var qI = GH({}, oH);
    qI[CH] = GH(GH(GH(GH({}, {
      "fa-duotone": "duotone"
    }), oH[CH]), II), EI);
    var LI = ZI(qI),
      gI = GH({}, {
        chisel: {
          regular: "facr"
        },
        classic: {
          brands: "fab",
          DE: "fal",
          regular: "far",
          solid: "fas",
          thin: "fat"
        },
        duotone: {
          DE: "fadl",
          regular: "fadr",
          solid: "fad",
          thin: "fadt"
        },
        etch: {
          solid: "faes"
        },
        graphite: {
          thin: "fagt"
        },
        jelly: {
          regular: "fajr"
        },
        "jelly-duo": {
          regular: "fajdr"
        },
        "jelly-fill": {
          regular: "fajfr"
        },
        notdog: {
          solid: "fans"
        },
        "notdog-duo": {
          solid: "fands"
        },
        sharp: {
          DE: "fasl",
          regular: "fasr",
          solid: "fass",
          thin: "fast"
        },
        "sharp-duotone": {
          DE: "fasdl",
          regular: "fasdr",
          solid: "fasds",
          thin: "fasdt"
        },
        slab: {
          regular: "faslr"
        },
        "slab-press": {
          regular: "faslpr"
        },
        thumbprint: {
          DE: "fatl"
        },
        utility: {
          semibold: "fausb"
        },
        "utility-duo": {
          semibold: "faudsb"
        },
        "utility-fill": {
          semibold: "faufsb"
        },
        whiteboard: {
          semibold: "fawsb"
        }
      });
    gI[CH] = GH(GH(GH(GH({}, {
      duotone: "fad"
    }), gI[CH]), RI), hI);
    var yI = ZI(gI),
      oI = GH({}, AI);
    oI[CH] = GH(GH({}, oI[CH]), {
      fak: "fa-kit"
    });
    var kE = ZI(oI),
      CI = GH({}, {
        classic: {
          "fa-brands": "fab",
          "fa-duotone": "fad",
          "fa-light": "fal",
          "fa-regular": "far",
          "fa-solid": "fas",
          "fa-thin": "fat"
        },
        duotone: {
          "fa-regular": "fadr",
          "fa-light": "fadl",
          "fa-thin": "fadt"
        },
        sharp: {
          "fa-solid": "fass",
          "fa-regular": "fasr",
          "fa-light": "fasl",
          "fa-thin": "fast"
        },
        "sharp-duotone": {
          "fa-solid": "fasds",
          "fa-regular": "fasdr",
          "fa-light": "fasdl",
          "fa-thin": "fasdt"
        },
        slab: {
          "fa-regular": "faslr"
        },
        "slab-press": {
          "fa-regular": "faslpr"
        },
        whiteboard: {
          "fa-semibold": "fawsb"
        },
        thumbprint: {
          "fa-light": "fatl"
        },
        notdog: {
          "fa-solid": "fans"
        },
        "notdog-duo": {
          "fa-solid": "fands"
        },
        etch: {
          "fa-solid": "faes"
        },
        graphite: {
          "fa-thin": "fagt"
        },
        jelly: {
          "fa-regular": "fajr"
        },
        "jelly-fill": {
          "fa-regular": "fajfr"
        },
        "jelly-duo": {
          "fa-regular": "fajdr"
        },
        chisel: {
          "fa-regular": "facr"
        },
        utility: {
          "fa-semibold": "fausb"
        },
        "utility-duo": {
          "fa-semibold": "faudsb"
        },
        "utility-fill": {
          "fa-semibold": "faufsb"
        }
      });
    CI[CH] = GH(GH({}, CI[CH]), {
      "fa-kit": "fak"
    });
    ZI(CI);
    var cI = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      UI = "fa-layers-text",
      WI = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      BI = (ZI(GH({}, {
        classic: {
          900: "fas",
          400: "far",
          normal: "far",
          300: "fal",
          100: "fat"
        },
        duotone: {
          900: "fad",
          400: "fadr",
          300: "fadl",
          100: "fadt"
        },
        sharp: {
          900: "fass",
          400: "fasr",
          300: "fasl",
          100: "fast"
        },
        "sharp-duotone": {
          900: "fasds",
          400: "fasdr",
          300: "fasdl",
          100: "fasdt"
        },
        slab: {
          400: "faslr"
        },
        "slab-press": {
          400: "faslpr"
        },
        whiteboard: {
          600: "fawsb"
        },
        thumbprint: {
          300: "fatl"
        },
        notdog: {
          900: "fans"
        },
        "notdog-duo": {
          900: "fands"
        },
        etch: {
          900: "faes"
        },
        graphite: {
          100: "fagt"
        },
        chisel: {
          400: "facr"
        },
        jelly: {
          400: "fajr"
        },
        "jelly-fill": {
          400: "fajfr"
        },
        "jelly-duo": {
          400: "fajdr"
        },
        utility: {
          600: "fausb"
        },
        "utility-duo": {
          600: "faudsb"
        },
        "utility-fill": {
          600: "faufsb"
        }
      })), ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"]),
      fI = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      aI = [].concat(VH(["kit"]), VH(JI)),
      nI = mI.FontAwesomeConfig || {};
    if (ZH && "function" === typeof ZH.querySelector) {
      [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings"], ["data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach(function (HH) {
        var IH = AH(HH, 2),
          EH = IH[0],
          RH = IH[1],
          hH = function (HH) {
            return "" === HH || "false" !== HH && ("true" === HH || HH);
          }(function (HH) {
            var IH = ZH.querySelector("script[" + HH + "]");
            if (IH) return IH.getAttribute(HH);
          }(EH));
        void 0 !== hH && null !== hH && (nI[RH] = hH);
      });
    }
    var pI = {
      styleDefault: "solid",
      familyDefault: CH,
      cssPrefix: "fa",
      replacementClass: rI,
      autoReplaceSvg: !0,
      autoAddCss: !0,
      searchPseudoElements: !1,
      searchPseudoElementsWarnings: !0,
      searchPseudoElementsFullScan: !1,
      observeMutations: !0,
      mutateApproach: "async",
      keepOriginalSource: !0,
      measurePerformance: !1,
      showMissingIcons: !0
    };
    nI.familyPrefix && (nI.cssPrefix = nI.familyPrefix);
    var dI = GH(GH({}, pI), nI);
    dI.autoReplaceSvg || (dI.observeMutations = !1);
    var uI = {};
    Object.keys(pI).forEach(function (HH) {
      Object.defineProperty(uI, HH, {
        enumerable: !0,
        set: function (IH) {
          dI[HH] = IH, lI.forEach(function (HH) {
            return HH(uI);
          });
        },
        get: function () {
          return dI[HH];
        }
      });
    }), Object.defineProperty(uI, "familyPrefix", {
      enumerable: !0,
      set: function (HH) {
        dI.cssPrefix = HH, lI.forEach(function (HH) {
          return HH(uI);
        });
      },
      get: function () {
        return dI.cssPrefix;
      }
    }), mI.FontAwesomeConfig = uI;
    var lI = [];
    var KI = 16,
      wI = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };
    function zI() {
      for (var HH = 12, IH = ""; HH-- > 0;) IH += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62 * Math.random() | 0];
      return IH;
    }
    function tI(HH) {
      for (var IH = [], EH = (HH || []).length >>> 0; EH--;) IH[EH] = HH[EH];
      return IH;
    }
    function jE(HH) {
      return HH.classList ? tI(HH.classList) : (HH.getAttribute("class") || "").split(" ").filter(function (HH) {
        return HH;
      });
    }
    function vI(HH) {
      return "".concat(HH).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function bI(HH) {
      return Object.keys(HH || {}).reduce(function (IH, EH) {
        return IH + "".concat(EH, ": ").concat(HH[EH].trim(), ";");
      }, "");
    }
    function SI(HH) {
      return HH.size !== wI.size || HH.x !== wI.x || HH.y !== wI.y || HH.rotate !== wI.rotate || HH.flipX || HH.flipY;
    }
    function xI() {
      var HH = "fa",
        IH = rI,
        EH = uI.cssPrefix,
        RH = uI.replacementClass,
        hH = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (EH !== HH || RH !== IH) {
        var TH = new RegExp("\\.".concat(HH, "\\-"), "g"),
          sH = new RegExp("\\--".concat(HH, "\\-"), "g"),
          eH = new RegExp("\\.".concat(IH), "g");
        hH = hH.replace(TH, ".".concat(EH, "-")).replace(sH, "--".concat(EH, "-")).replace(eH, ".".concat(RH));
      }
      return hH;
    }
    var HE = !1;
    function IE() {
      uI.autoAddCss && !HE && (!function (HH) {
        if (HH && gH) {
          var IH = ZH.createElement("style");
          IH.setAttribute("type", "text/css"), IH.innerHTML = HH;
          for (var EH = ZH.head.childNodes, RH = null, hH = EH.length - 1; hH > -1; hH--) {
            var TH = EH[hH],
              sH = (TH.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(sH) > -1 && (RH = TH);
          }
          ZH.head.insertBefore(IH, RH);
        }
      }(xI()), HE = !0);
    }
    var EE = {
        mixout: function () {
          return {
            dom: {
              css: xI,
              insertCss: IE
            }
          };
        },
        hooks: function () {
          return {
            beforeDOMElementCreation: function () {
              IE();
            },
            beforeI2svg: function () {
              IE();
            }
          };
        }
      },
      RE = mI || {};
    RE[OI] || (RE[OI] = {}), RE[OI].styles || (RE[OI].styles = {}), RE[OI].hooks || (RE[OI].hooks = {}), RE[OI].shims || (RE[OI].shims = []);
    var hE = RE[OI],
      TE = [],
      sE = function () {
        ZH.removeEventListener("DOMContentLoaded", sE), eE = 1, TE.map(function (HH) {
          return HH();
        });
      },
      eE = !1;
    function GE(HH) {
      var IH = HH.tag,
        EH = HH.attributes,
        RH = void 0 === EH ? {} : EH,
        hH = HH.children,
        TH = void 0 === hH ? [] : hH;
      return "string" === typeof HH ? vI(HH) : "<".concat(IH, " ").concat(function (HH) {
        return Object.keys(HH || {}).reduce(function (IH, EH) {
          return IH + "".concat(EH, '="').concat(vI(HH[EH]), '" ');
        }, "").trim();
      }(RH), ">").concat(TH.map(GE).join(""), "</").concat(IH, ">");
    }
    function AE(HH, IH, EH) {
      if (HH && HH[IH] && HH[IH][EH]) return {
        prefix: IH,
        iconName: EH,
        icon: HH[IH][EH]
      };
    }
    gH && ((eE = (ZH.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ZH.readyState)) || ZH.addEventListener("DOMContentLoaded", sE));
    var VE = function (HH, IH, EH, RH) {
      var hH,
        TH,
        sH,
        eH = Object.keys(HH),
        GH = eH.length,
        AH = void 0 !== RH ? function (HH, IH) {
          return function (EH, RH, hH, TH) {
            return HH.call(IH, EH, RH, hH, TH);
          };
        }(IH, RH) : IH;
      for (void 0 === EH ? (hH = 1, sH = HH[eH[0]]) : (hH = 0, sH = EH); hH < GH; hH++) sH = AH(sH, HH[TH = eH[hH]], TH, HH);
      return sH;
    };
    function YE(HH) {
      return 1 !== VH(HH).length ? null : HH.codePointAt(0).toString(16);
    }
    function QE(HH) {
      return Object.keys(HH).reduce(function (IH, EH) {
        var RH = HH[EH];
        return !!RH.icon ? IH[RH.iconName] = RH.icon : IH[EH] = RH, IH;
      }, {});
    }
    function JE(HH, IH) {
      var EH = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        RH = void 0 !== EH && EH,
        hH = QE(IH);
      "function" !== typeof hE.hooks.addPack || RH ? hE.styles[HH] = GH(GH({}, hE.styles[HH] || {}), hH) : hE.hooks.addPack(HH, QE(IH)), "fas" === HH && JE("fa", IH);
    }
    var OE = hE.styles,
      rE = hE.shims,
      FE = Object.keys(kE),
      ME = FE.reduce(function (HH, IH) {
        return HH[IH] = Object.keys(kE[IH]), HH;
      }, {}),
      NE = null,
      iR = {},
      DE = {},
      PE = {},
      XE = {},
      mR = {};
    function ZE(HH, IH) {
      var EH,
        RH = IH.split("-"),
        hH = RH[0],
        TH = RH.slice(1).join("-");
      return hH !== HH || "" === TH || (EH = TH, ~aI.indexOf(EH)) ? null : TH;
    }
    var qE,
      LE = function () {
        var HH = function (HH) {
          return VE(OE, function (IH, EH, RH) {
            return IH[RH] = VE(EH, HH, {}), IH;
          }, {});
        };
        iR = HH(function (HH, IH, EH) {
          (IH[3] && (HH[IH[3]] = EH), IH[2]) && IH[2].filter(function (HH) {
            return "number" === typeof HH;
          }).forEach(function (IH) {
            HH[IH.toString(16)] = EH;
          });
          return HH;
        }), DE = HH(function (HH, IH, EH) {
          (HH[EH] = EH, IH[2]) && IH[2].filter(function (HH) {
            return "string" === typeof HH;
          }).forEach(function (IH) {
            HH[IH] = EH;
          });
          return HH;
        }), mR = HH(function (HH, IH, EH) {
          var RH = IH[2];
          return HH[EH] = EH, RH.forEach(function (IH) {
            HH[IH] = EH;
          }), HH;
        });
        var IH = "far" in OE || uI.autoFetchSvg,
          EH = VE(rE, function (HH, EH) {
            var RH = EH[0],
              hH = EH[1],
              TH = EH[2];
            return "far" !== hH || IH || (hH = "fas"), "string" === typeof RH && (HH.names[RH] = {
              prefix: hH,
              iconName: TH
            }), "number" === typeof RH && (HH.unicodes[RH.toString(16)] = {
              prefix: hH,
              iconName: TH
            }), HH;
          }, {
            names: {},
            unicodes: {}
          });
        PE = EH.names, XE = EH.unicodes, NE = CE(uI.styleDefault, {
          family: uI.familyDefault
        });
      };
    function gE(HH, IH) {
      return (iR[HH] || {})[IH];
    }
    function yE(HH, IH) {
      return (mR[HH] || {})[IH];
    }
    function oE(HH) {
      return PE[HH] || {
        prefix: null,
        iconName: null
      };
    }
    function kR() {
      return NE;
    }
    qE = function (HH) {
      NE = CE(HH.styleDefault, {
        family: uI.familyDefault
      });
    }, lI.push(qE), LE();
    function CE(HH) {
      var IH = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        EH = void 0 === IH ? CH : IH,
        RH = LI[EH][HH];
      if (EH === cH && !HH) return "fad";
      var hH = yI[EH][HH] || yI[EH][RH],
        TH = HH in hE.styles ? HH : null;
      return hH || TH || null;
    }
    function cE(HH) {
      return HH.sort().filter(function (HH, IH, EH) {
        return EH.indexOf(HH) === IH;
      });
    }
    var UE = VI.concat(HI);
    function WE(HH) {
      var IH = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        EH = void 0 !== IH && IH,
        RH = null,
        hH = cE(HH.filter(function (HH) {
          return UE.includes(HH);
        })),
        TH = cE(HH.filter(function (HH) {
          return !UE.includes(HH);
        })),
        sH = AH(hH.filter(function (HH) {
          return RH = HH, !kI.includes(HH);
        }), 1)[0],
        eH = void 0 === sH ? null : sH,
        VH = function (HH) {
          var IH = CH,
            EH = FE.reduce(function (HH, IH) {
              return HH[IH] = "".concat(uI.cssPrefix, "-").concat(IH), HH;
            }, {});
          return SH.forEach(function (RH) {
            (HH.includes(EH[RH]) || HH.some(function (HH) {
              return ME[RH].includes(HH);
            })) && (IH = RH);
          }), IH;
        }(hH),
        YH = GH(GH({}, function (HH) {
          var IH = [],
            EH = null;
          return HH.forEach(function (HH) {
            var RH = ZE(uI.cssPrefix, HH);
            RH ? EH = RH : HH && IH.push(HH);
          }), {
            iconName: EH,
            rest: IH
          };
        }(TH)), {}, {
          prefix: CE(eH, {
            family: VH
          })
        });
      return GH(GH(GH({}, YH), function (HH) {
        var IH = HH.values,
          EH = HH.family,
          RH = HH.canonical,
          hH = HH.givenPrefix,
          TH = void 0 === hH ? "" : hH,
          sH = HH.styles,
          eH = void 0 === sH ? {} : sH,
          GH = HH.config,
          AH = void 0 === GH ? {} : GH,
          VH = EH === cH,
          YH = IH.includes("fa-duotone") || IH.includes("fad"),
          QH = "duotone" === AH.familyDefault,
          JH = "fad" === RH.prefix || "fa-duotone" === RH.prefix;
        !VH && (YH || QH || JH) && (RH.prefix = "fad");
        (IH.includes("fa-brands") || IH.includes("fab")) && (RH.prefix = "fab");
        if (!RH.prefix && BE.includes(EH)) {
          if (Object.keys(eH).find(function (HH) {
            return fE.includes(HH);
          }) || AH.autoFetchSvg) {
            var OH = xH.get(EH).defaultShortPrefixId;
            RH.prefix = OH, RH.iconName = yE(RH.prefix, RH.iconName) || RH.iconName;
          }
        }
        "fa" !== RH.prefix && "fa" !== TH || (RH.prefix = kR() || "fas");
        return RH;
      }({
        values: HH,
        family: VH,
        styles: OE,
        config: uI,
        canonical: YH,
        givenPrefix: RH
      })), function (HH, IH, EH) {
        var RH = EH.prefix,
          hH = EH.iconName;
        if (HH || !RH || !hH) return {
          prefix: RH,
          iconName: hH
        };
        var TH = "fa" === IH ? oE(hH) : {},
          sH = yE(RH, hH);
        hH = TH.iconName || sH || hH, "far" !== (RH = TH.prefix || RH) || OE.far || !OE.fas || uI.autoFetchSvg || (RH = "fas");
        return {
          prefix: RH,
          iconName: hH
        };
      }(EH, RH, YH));
    }
    var BE = SH.filter(function (HH) {
        return HH !== CH || HH !== cH;
      }),
      fE = Object.keys(AI).filter(function (HH) {
        return HH !== CH;
      }).map(function (HH) {
        return Object.keys(AI[HH]);
      }).flat();
    var aE = function () {
        return function (HH, IH, EH) {
          return IH && hH(HH.prototype, IH), EH && hH(HH, EH), Object.defineProperty(HH, "prototype", {
            writable: !1
          }), HH;
        }(function HH() {
          !function (HH, IH) {
            if (!(HH instanceof IH)) throw new TypeError("Cannot call a class as a function");
          }(this, HH), this.definitions = {};
        }, [{
          key: "add",
          value: function () {
            for (var HH = this, IH = arguments.length, EH = new Array(IH), RH = 0; RH < IH; RH++) EH[RH] = arguments[RH];
            var hH = EH.reduce(this._pullDefinitions, {});
            Object.keys(hH).forEach(function (IH) {
              HH.definitions[IH] = GH(GH({}, HH.definitions[IH] || {}), hH[IH]), JE(IH, hH[IH]);
              var EH = kE[CH][IH];
              EH && JE(EH, hH[IH]), LE();
            });
          }
        }, {
          key: "reset",
          value: function () {
            this.definitions = {};
          }
        }, {
          key: "_pullDefinitions",
          value: function (HH, IH) {
            var EH = IH.prefix && IH.iconName && IH.icon ? {
              0: IH
            } : IH;
            return Object.keys(EH).map(function (IH) {
              var RH = EH[IH],
                hH = RH.prefix,
                TH = RH.iconName,
                sH = RH.icon,
                eH = sH[2];
              HH[hH] || (HH[hH] = {}), eH.length > 0 && eH.forEach(function (IH) {
                "string" === typeof IH && (HH[hH][IH] = sH);
              }), HH[hH][TH] = sH;
            }), HH;
          }
        }]);
      }(),
      nE = [],
      pE = {},
      dE = {},
      uE = Object.keys(dE);
    function lE(HH, IH) {
      for (var EH = arguments.length, RH = new Array(EH > 2 ? EH - 2 : 0), hH = 2; hH < EH; hH++) RH[hH - 2] = arguments[hH];
      return (pE[HH] || []).forEach(function (HH) {
        IH = HH.apply(null, [IH].concat(RH));
      }), IH;
    }
    function KE(HH) {
      for (var IH = arguments.length, EH = new Array(IH > 1 ? IH - 1 : 0), RH = 1; RH < IH; RH++) EH[RH - 1] = arguments[RH];
      (pE[HH] || []).forEach(function (HH) {
        HH.apply(null, EH);
      });
    }
    function wE() {
      var HH = arguments[0],
        IH = Array.prototype.slice.call(arguments, 1);
      return dE[HH] ? dE[HH].apply(null, IH) : void 0;
    }
    function zE(HH) {
      "fa" === HH.prefix && (HH.prefix = "fas");
      var IH = HH.iconName,
        EH = HH.prefix || kR();
      if (IH) return IH = yE(EH, IH) || IH, AE(tE.definitions, EH, IH) || AE(hE.styles, EH, IH);
    }
    var tE = new aE(),
      jR = {
        i2svg: function () {
          var HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return gH ? (KE("beforeI2svg", HH), wE("pseudoElements2svg", HH), wE("i2svg", HH)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
        },
        watch: function () {
          var HH,
            IH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            EH = IH.autoReplaceSvgRoot;
          !1 === uI.autoReplaceSvg && (uI.autoReplaceSvg = !0), uI.observeMutations = !0, HH = function () {
            bE({
              autoReplaceSvgRoot: EH
            }), KE("watch", IH);
          }, gH && (eE ? setTimeout(HH, 0) : TE.push(HH));
        }
      },
      vE = {
        noAuto: function () {
          uI.autoReplaceSvg = !1, uI.observeMutations = !1, KE("noAuto");
        },
        config: uI,
        dom: jR,
        parse: {
          icon: function (HH) {
            if (null === HH) return null;
            if ("object" === QH(HH) && HH.prefix && HH.iconName) return {
              prefix: HH.prefix,
              iconName: yE(HH.prefix, HH.iconName) || HH.iconName
            };
            if (Array.isArray(HH) && 2 === HH.length) {
              var IH = 0 === HH[1].indexOf("fa-") ? HH[1].slice(3) : HH[1],
                EH = CE(HH[0]);
              return {
                prefix: EH,
                iconName: yE(EH, IH) || IH
              };
            }
            if ("string" === typeof HH && (HH.indexOf("".concat(uI.cssPrefix, "-")) > -1 || HH.match(cI))) {
              var RH = WE(HH.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: RH.prefix || kR(),
                iconName: yE(RH.prefix, RH.iconName) || RH.iconName
              };
            }
            if ("string" === typeof HH) {
              var hH = kR();
              return {
                prefix: hH,
                iconName: yE(hH, HH) || HH
              };
            }
          }
        },
        library: tE,
        findIconDefinition: zE,
        toHtml: GE
      },
      bE = function () {
        var HH = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          IH = void 0 === HH ? ZH : HH;
        (Object.keys(hE.styles).length > 0 || uI.autoFetchSvg) && gH && uI.autoReplaceSvg && vE.dom.i2svg({
          node: IH
        });
      };
    function SE(HH, IH) {
      return Object.defineProperty(HH, "abstract", {
        get: IH
      }), Object.defineProperty(HH, "html", {
        get: function () {
          return HH.abstract.map(function (HH) {
            return GE(HH);
          });
        }
      }), Object.defineProperty(HH, "node", {
        get: function () {
          if (gH) {
            var IH = ZH.createElement("div");
            return IH.innerHTML = HH.html, IH.children;
          }
        }
      }), HH;
    }
    function xE(HH) {
      var IH = HH.icons,
        EH = IH.main,
        RH = IH.mask,
        hH = HH.prefix,
        TH = HH.iconName,
        sH = HH.transform,
        eH = HH.symbol,
        AH = HH.maskId,
        VH = HH.extra,
        YH = HH.watchable,
        QH = void 0 !== YH && YH,
        JH = RH.found ? RH : EH,
        OH = JH.width,
        rH = JH.height,
        FH = [uI.replacementClass, TH ? "".concat(uI.cssPrefix, "-").concat(TH) : ""].filter(function (HH) {
          return -1 === VH.classes.indexOf(HH);
        }).filter(function (HH) {
          return "" !== HH || !!HH;
        }).concat(VH.classes).join(" "),
        MH = {
          children: [],
          attributes: GH(GH({}, VH.attributes), {}, {
            "data-prefix": hH,
            "data-icon": TH,
            class: FH,
            role: VH.attributes.role || "img",
            viewBox: "0 0 ".concat(OH, " ").concat(rH)
          })
        };
      (function (HH) {
        return ["aria-label", "aria-labelledby", "title", "role"].some(function (IH) {
          return IH in HH;
        });
      })(VH.attributes) || VH.attributes["aria-hidden"] || (MH.attributes["aria-hidden"] = "true"), QH && (MH.attributes[FI] = "");
      var NH = GH(GH({}, MH), {}, {
          prefix: hH,
          iconName: TH,
          main: EH,
          mask: RH,
          maskId: AH,
          transform: sH,
          symbol: eH,
          styles: GH({}, VH.styles)
        }),
        iI = RH.found && EH.found ? wE("generateAbstractMask", NH) || {
          children: [],
          attributes: {}
        } : wE("generateAbstractIcon", NH) || {
          children: [],
          attributes: {}
        },
        DH = iI.children,
        PH = iI.attributes;
      return NH.children = DH, NH.attributes = PH, eH ? function (HH) {
        var IH = HH.prefix,
          EH = HH.iconName,
          RH = HH.children,
          hH = HH.attributes,
          TH = HH.symbol,
          sH = !0 === TH ? "".concat(IH, "-").concat(uI.cssPrefix, "-").concat(EH) : TH;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: GH(GH({}, hH), {}, {
              id: sH
            }),
            children: RH
          }]
        }];
      }(NH) : function (HH) {
        var IH = HH.children,
          EH = HH.main,
          RH = HH.mask,
          hH = HH.attributes,
          TH = HH.styles,
          sH = HH.transform;
        if (SI(sH) && EH.found && !RH.found) {
          var eH = {
            x: EH.width / EH.height / 2,
            y: .5
          };
          hH.style = bI(GH(GH({}, TH), {}, {
            "transform-origin": "".concat(eH.x + sH.x / 16, "em ").concat(eH.y + sH.y / 16, "em")
          }));
        }
        return [{
          tag: "svg",
          attributes: hH,
          children: IH
        }];
      }(NH);
    }
    function HR(HH) {
      var IH = HH.content,
        EH = HH.width,
        RH = HH.height,
        hH = HH.transform,
        TH = HH.extra,
        sH = HH.watchable,
        eH = void 0 !== sH && sH,
        AH = GH(GH({}, TH.attributes), {}, {
          class: TH.classes.join(" ")
        });
      eH && (AH[FI] = "");
      var VH = GH({}, TH.styles);
      SI(hH) && (VH.transform = function (HH) {
        var IH = HH.transform,
          EH = HH.width,
          RH = void 0 === EH ? 16 : EH,
          hH = HH.height,
          TH = void 0 === hH ? 16 : hH,
          sH = HH.startCentered,
          eH = void 0 !== sH && sH,
          GH = "";
        return GH += eH && yH ? "translate(".concat(IH.x / KI - RH / 2, "em, ").concat(IH.y / KI - TH / 2, "em) ") : eH ? "translate(calc(-50% + ".concat(IH.x / KI, "em), calc(-50% + ").concat(IH.y / KI, "em)) ") : "translate(".concat(IH.x / KI, "em, ").concat(IH.y / KI, "em) "), GH += "scale(".concat(IH.size / KI * (IH.flipX ? -1 : 1), ", ").concat(IH.size / KI * (IH.flipY ? -1 : 1), ") "), GH + "rotate(".concat(IH.rotate, "deg) ");
      }({
        transform: hH,
        startCentered: !0,
        width: EH,
        height: RH
      }), VH["-webkit-transform"] = VH.transform);
      var YH = bI(VH);
      YH.length > 0 && (AH.style = YH);
      var QH = [];
      return QH.push({
        tag: "span",
        attributes: AH,
        children: [IH]
      }), QH;
    }
    var IR = hE.styles;
    function ER(HH) {
      var IH = HH[0],
        EH = HH[1],
        RH = AH(HH.slice(4), 1)[0];
      return {
        found: !0,
        width: IH,
        height: EH,
        icon: Array.isArray(RH) ? {
          tag: "g",
          attributes: {
            class: "".concat(uI.cssPrefix, "-").concat(fI.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(uI.cssPrefix, "-").concat(fI.SECONDARY),
              fill: "currentColor",
              d: RH[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(uI.cssPrefix, "-").concat(fI.PRIMARY),
              fill: "currentColor",
              d: RH[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: RH
          }
        }
      };
    }
    var RR = {
      found: !1,
      width: 512,
      height: 512
    };
    function hR(HH, IH) {
      var EH = IH;
      return "fa" === IH && null !== uI.styleDefault && (IH = kR()), new Promise(function (RH, hH) {
        if ("fa" === EH) {
          var TH = oE(HH) || {};
          HH = TH.iconName || HH, IH = TH.prefix || IH;
        }
        if (HH && IH && IR[IH] && IR[IH][HH]) return RH(ER(IR[IH][HH]));
        !function (HH, IH) {
          mE || uI.showMissingIcons || !HH || console.error('Icon with name "'.concat(HH, '" and prefix "').concat(IH, '" is missing.'));
        }(HH, IH), RH(GH(GH({}, RR), {}, {
          icon: uI.showMissingIcons && HH && wE("missingIconAbstract") || {}
        }));
      });
    }
    var TR = function () {},
      sR = uI.measurePerformance && LH && LH.mark && LH.measure ? LH : {
        mark: TR,
        measure: TR
      },
      eR = 'FA "7.2.0"',
      GR = function (HH) {
        sR.mark("".concat(eR, " ").concat(HH, " ends")), sR.measure("".concat(eR, " ").concat(HH), "".concat(eR, " ").concat(HH, " begins"), "".concat(eR, " ").concat(HH, " ends"));
      },
      AR = function (HH) {
        return sR.mark("".concat(eR, " ").concat(HH, " begins")), function () {
          return GR(HH);
        };
      },
      VR = function () {};
    function YR(HH) {
      return "string" === typeof (HH.getAttribute ? HH.getAttribute(FI) : null);
    }
    function QR(HH) {
      return ZH.createElementNS("http://www.w3.org/2000/svg", HH);
    }
    function JR(HH) {
      return ZH.createElement(HH);
    }
    function OR(HH) {
      var IH = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        EH = void 0 === IH ? "svg" === HH.tag ? QR : JR : IH;
      if ("string" === typeof HH) return ZH.createTextNode(HH);
      var RH = EH(HH.tag);
      return Object.keys(HH.attributes || []).forEach(function (IH) {
        RH.setAttribute(IH, HH.attributes[IH]);
      }), (HH.children || []).forEach(function (HH) {
        RH.appendChild(OR(HH, {
          ceFn: EH
        }));
      }), RH;
    }
    var rR = {
      replace: function (HH) {
        var IH = HH[0];
        if (IH.parentNode) if (HH[1].forEach(function (HH) {
          IH.parentNode.insertBefore(OR(HH), IH);
        }), null === IH.getAttribute(FI) && uI.keepOriginalSource) {
          var EH = ZH.createComment(function (HH) {
            var IH = " ".concat(HH.outerHTML, " ");
            return "".concat(IH, "Font Awesome fontawesome.com ");
          }(IH));
          IH.parentNode.replaceChild(EH, IH);
        } else IH.remove();
      },
      nest: function (HH) {
        var IH = HH[0],
          EH = HH[1];
        if (~jE(IH).indexOf(uI.replacementClass)) return rR.replace(HH);
        var RH = new RegExp("".concat(uI.cssPrefix, "-.*"));
        if (delete EH[0].attributes.id, EH[0].attributes.class) {
          var hH = EH[0].attributes.class.split(" ").reduce(function (HH, IH) {
            return IH === uI.replacementClass || IH.match(RH) ? HH.toSvg.push(IH) : HH.toNode.push(IH), HH;
          }, {
            toNode: [],
            toSvg: []
          });
          EH[0].attributes.class = hH.toSvg.join(" "), 0 === hH.toNode.length ? IH.removeAttribute("class") : IH.setAttribute("class", hH.toNode.join(" "));
        }
        var TH = EH.map(function (HH) {
          return GE(HH);
        }).join("\n");
        IH.setAttribute(FI, ""), IH.innerHTML = TH;
      }
    };
    function FR(HH) {
      HH();
    }
    function MR(HH, IH) {
      var EH = "function" === typeof IH ? IH : VR;
      if (0 === HH.length) EH();else {
        var RH = FR;
        "async" === uI.mutateApproach && (RH = mI.requestAnimationFrame || FR), RH(function () {
          var IH = !0 === uI.autoReplaceSvg ? rR.replace : rR[uI.autoReplaceSvg] || rR.replace,
            RH = AR("mutate");
          HH.map(IH), RH(), EH();
        });
      }
    }
    var NR = !1;
    function ih() {
      NR = !0;
    }
    function DR() {
      NR = !1;
    }
    var PR = null;
    function XR(HH) {
      if (qH && uI.observeMutations) {
        var IH = HH.treeCallback,
          EH = void 0 === IH ? VR : IH,
          RH = HH.nodeCallback,
          hH = void 0 === RH ? VR : RH,
          TH = HH.pseudoElementsCallback,
          sH = void 0 === TH ? VR : TH,
          eH = HH.observeMutationsRoot,
          GH = void 0 === eH ? ZH : eH;
        PR = new qH(function (HH) {
          if (!NR) {
            var IH = kR();
            tI(HH).forEach(function (HH) {
              if ("childList" === HH.type && HH.addedNodes.length > 0 && !YR(HH.addedNodes[0]) && (uI.searchPseudoElements && sH(HH.target), EH(HH.target)), "attributes" === HH.type && HH.target.parentNode && uI.searchPseudoElements && sH([HH.target], !0), "attributes" === HH.type && YR(HH.target) && ~BI.indexOf(HH.attributeName)) if ("class" === HH.attributeName && function (HH) {
                var IH = HH.getAttribute ? HH.getAttribute(NI) : null,
                  EH = HH.getAttribute ? HH.getAttribute(iE) : null;
                return IH && EH;
              }(HH.target)) {
                var RH = WE(jE(HH.target)),
                  TH = RH.prefix,
                  eH = RH.iconName;
                HH.target.setAttribute(NI, TH || IH), eH && HH.target.setAttribute(iE, eH);
              } else (GH = HH.target) && GH.classList && GH.classList.contains && GH.classList.contains(uI.replacementClass) && hH(HH.target);
              var GH;
            });
          }
        }), gH && PR.observe(GH, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        });
      }
    }
    function mh(HH) {
      var IH,
        EH,
        RH = HH.getAttribute("data-prefix"),
        hH = HH.getAttribute("data-icon"),
        TH = void 0 !== HH.innerText ? HH.innerText.trim() : "",
        sH = WE(jE(HH));
      return sH.prefix || (sH.prefix = kR()), RH && hH && (sH.prefix = RH, sH.iconName = hH), sH.iconName && sH.prefix || (sH.prefix && TH.length > 0 && (sH.iconName = (IH = sH.prefix, EH = HH.innerText, (DE[IH] || {})[EH] || gE(sH.prefix, YE(HH.innerText)))), !sH.iconName && uI.autoFetchSvg && HH.firstChild && HH.firstChild.nodeType === Node.TEXT_NODE && (sH.iconName = HH.firstChild.data)), sH;
    }
    function ZR(HH) {
      var IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        EH = mh(HH),
        RH = EH.iconName,
        hH = EH.prefix,
        TH = EH.rest,
        sH = function (HH) {
          return tI(HH.attributes).reduce(function (HH, IH) {
            return "class" !== HH.name && "style" !== HH.name && (HH[IH.name] = IH.value), HH;
          }, {});
        }(HH),
        eH = lE("parseNodeAttributes", {}, HH),
        AH = IH.styleParser ? function (HH) {
          var IH = HH.getAttribute("style"),
            EH = [];
          return IH && (EH = IH.split(";").reduce(function (HH, IH) {
            var EH = IH.split(":"),
              RH = EH[0],
              hH = EH.slice(1);
            return RH && hH.length > 0 && (HH[RH] = hH.join(":").trim()), HH;
          }, {})), EH;
        }(HH) : [];
      return GH({
        iconName: RH,
        prefix: hH,
        transform: wI,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: TH,
          styles: AH,
          attributes: sH
        }
      }, eH);
    }
    var qR = hE.styles;
    function LR(HH) {
      var IH = "nest" === uI.autoReplaceSvg ? ZR(HH, {
        styleParser: !1
      }) : ZR(HH);
      return ~IH.extra.classes.indexOf(UI) ? wE("generateLayersText", HH, IH) : wE("generateSvgReplacementMutation", HH, IH);
    }
    function gR(HH) {
      var IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!gH) return Promise.resolve();
      var EH = ZH.documentElement.classList,
        RH = function (HH) {
          return EH.add("".concat(DI, "-").concat(HH));
        },
        hH = function (HH) {
          return EH.remove("".concat(DI, "-").concat(HH));
        },
        TH = uI.autoFetchSvg ? [].concat(VH(HI), VH(VI)) : kI.concat(Object.keys(qR));
      TH.includes("fa") || TH.push("fa");
      var sH = [".".concat(UI, ":not([").concat(FI, "])")].concat(TH.map(function (HH) {
        return ".".concat(HH, ":not([").concat(FI, "])");
      })).join(", ");
      if (0 === sH.length) return Promise.resolve();
      var eH = [];
      try {
        eH = tI(HH.querySelectorAll(sH));
      } catch (YH) {}
      if (!(eH.length > 0)) return Promise.resolve();
      RH("pending"), hH("complete");
      var GH = AR("onTree"),
        AH = eH.reduce(function (HH, IH) {
          try {
            var EH = LR(IH);
            EH && HH.push(EH);
          } catch (YH) {
            mE || "MissingIcon" === YH.name && console.error(YH);
          }
          return HH;
        }, []);
      return new Promise(function (HH, EH) {
        Promise.all(AH).then(function (EH) {
          MR(EH, function () {
            RH("active"), RH("complete"), hH("pending"), "function" === typeof IH && IH(), GH(), HH();
          });
        }).catch(function (HH) {
          GH(), EH(HH);
        });
      });
    }
    function yR(HH) {
      var IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      LR(HH).then(function (HH) {
        HH && MR([HH], IH);
      });
    }
    var oR = function (HH) {
        var IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          EH = IH.transform,
          RH = void 0 === EH ? wI : EH,
          hH = IH.symbol,
          TH = void 0 !== hH && hH,
          sH = IH.mask,
          eH = void 0 === sH ? null : sH,
          AH = IH.maskId,
          VH = void 0 === AH ? null : AH,
          YH = IH.classes,
          QH = void 0 === YH ? [] : YH,
          JH = IH.attributes,
          OH = void 0 === JH ? {} : JH,
          rH = IH.styles,
          FH = void 0 === rH ? {} : rH;
        if (HH) {
          var MH = HH.prefix,
            NH = HH.iconName,
            iI = HH.icon;
          return SE(GH({
            type: "icon"
          }, HH), function () {
            return KE("beforeDOMElementCreation", {
              iconDefinition: HH,
              params: IH
            }), xE({
              icons: {
                main: ER(iI),
                mask: eH ? ER(eH.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: MH,
              iconName: NH,
              transform: GH(GH({}, wI), RH),
              symbol: TH,
              maskId: VH,
              extra: {
                attributes: OH,
                styles: FH,
                classes: QH
              }
            });
          });
        }
      },
      kh = {
        mixout: function () {
          return {
            icon: (HH = oR, function (IH) {
              var EH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                RH = (IH || {}).icon ? IH : zE(IH || {}),
                hH = EH.mask;
              return hH && (hH = (hH || {}).icon ? hH : zE(hH || {})), HH(RH, GH(GH({}, EH), {}, {
                mask: hH
              }));
            })
          };
          var HH;
        },
        hooks: function () {
          return {
            mutationObserverCallbacks: function (HH) {
              return HH.treeCallback = gR, HH.nodeCallback = yR, HH;
            }
          };
        },
        provides: function (HH) {
          HH.i2svg = function (HH) {
            var IH = HH.node,
              EH = void 0 === IH ? ZH : IH,
              RH = HH.callback;
            return gR(EH, void 0 === RH ? function () {} : RH);
          }, HH.generateSvgReplacementMutation = function (HH, IH) {
            var EH = IH.iconName,
              RH = IH.prefix,
              hH = IH.transform,
              TH = IH.symbol,
              sH = IH.mask,
              eH = IH.maskId,
              GH = IH.extra;
            return new Promise(function (IH, VH) {
              Promise.all([hR(EH, RH), sH.iconName ? hR(sH.iconName, sH.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then(function (sH) {
                var VH = AH(sH, 2),
                  YH = VH[0],
                  QH = VH[1];
                IH([HH, xE({
                  icons: {
                    main: YH,
                    mask: QH
                  },
                  prefix: RH,
                  iconName: EH,
                  transform: hH,
                  symbol: TH,
                  maskId: eH,
                  extra: GH,
                  watchable: !0
                })]);
              }).catch(VH);
            });
          }, HH.generateAbstractIcon = function (HH) {
            var IH,
              EH = HH.children,
              RH = HH.attributes,
              hH = HH.main,
              TH = HH.transform,
              sH = bI(HH.styles);
            return sH.length > 0 && (RH.style = sH), SI(TH) && (IH = wE("generateAbstractTransformGrouping", {
              main: hH,
              transform: TH,
              containerWidth: hH.width,
              iconWidth: hH.width
            })), EH.push(IH || hH.icon), {
              children: EH,
              attributes: RH
            };
          };
        }
      },
      CR = {
        mixout: function () {
          return {
            layer: function (HH) {
              var IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                EH = IH.classes,
                RH = void 0 === EH ? [] : EH;
              return SE({
                type: "layer"
              }, function () {
                KE("beforeDOMElementCreation", {
                  assembler: HH,
                  params: IH
                });
                var EH = [];
                return HH(function (HH) {
                  Array.isArray(HH) ? HH.map(function (HH) {
                    EH = EH.concat(HH.abstract);
                  }) : EH = EH.concat(HH.abstract);
                }), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(uI.cssPrefix, "-layers")].concat(VH(RH)).join(" ")
                  },
                  children: EH
                }];
              });
            }
          };
        }
      },
      cR = {
        mixout: function () {
          return {
            counter: function (HH) {
              var IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                EH = IH.title,
                RH = void 0 === EH ? null : EH,
                hH = IH.classes,
                TH = void 0 === hH ? [] : hH,
                sH = IH.attributes,
                eH = void 0 === sH ? {} : sH,
                AH = IH.styles,
                YH = void 0 === AH ? {} : AH;
              return SE({
                type: "counter",
                content: HH
              }, function () {
                return KE("beforeDOMElementCreation", {
                  content: HH,
                  params: IH
                }), function (HH) {
                  var IH = HH.content,
                    EH = HH.extra,
                    RH = GH(GH({}, EH.attributes), {}, {
                      class: EH.classes.join(" ")
                    }),
                    hH = bI(EH.styles);
                  hH.length > 0 && (RH.style = hH);
                  var TH = [];
                  return TH.push({
                    tag: "span",
                    attributes: RH,
                    children: [IH]
                  }), TH;
                }({
                  content: HH.toString(),
                  title: RH,
                  extra: {
                    attributes: eH,
                    styles: YH,
                    classes: ["".concat(uI.cssPrefix, "-layers-counter")].concat(VH(TH))
                  }
                });
              });
            }
          };
        }
      },
      UR = {
        mixout: function () {
          return {
            text: function (HH) {
              var IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                EH = IH.transform,
                RH = void 0 === EH ? wI : EH,
                hH = IH.classes,
                TH = void 0 === hH ? [] : hH,
                sH = IH.attributes,
                eH = void 0 === sH ? {} : sH,
                AH = IH.styles,
                YH = void 0 === AH ? {} : AH;
              return SE({
                type: "text",
                content: HH
              }, function () {
                return KE("beforeDOMElementCreation", {
                  content: HH,
                  params: IH
                }), HR({
                  content: HH,
                  transform: GH(GH({}, wI), RH),
                  extra: {
                    attributes: eH,
                    styles: YH,
                    classes: ["".concat(uI.cssPrefix, "-layers-text")].concat(VH(TH))
                  }
                });
              });
            }
          };
        },
        provides: function (HH) {
          HH.generateLayersText = function (HH, IH) {
            var EH = IH.transform,
              RH = IH.extra,
              hH = null,
              TH = null;
            if (yH) {
              var sH = parseInt(getComputedStyle(HH).fontSize, 10),
                eH = HH.getBoundingClientRect();
              hH = eH.width / sH, TH = eH.height / sH;
            }
            return Promise.resolve([HH, HR({
              content: HH.innerHTML,
              width: hH,
              height: TH,
              transform: EH,
              extra: RH,
              watchable: !0
            })]);
          };
        }
      },
      WR = new RegExp('"', "ug"),
      BR = [1105920, 1112319],
      fR = GH(GH(GH(GH({}, {
        FontAwesome: {
          normal: "fas",
          400: "fas"
        }
      }), {
        "Font Awesome 7 Free": {
          900: "fas",
          400: "far"
        },
        "Font Awesome 7 Pro": {
          900: "fas",
          400: "far",
          normal: "far",
          300: "fal",
          100: "fat"
        },
        "Font Awesome 7 Brands": {
          400: "fab",
          normal: "fab"
        },
        "Font Awesome 7 Duotone": {
          900: "fad",
          400: "fadr",
          normal: "fadr",
          300: "fadl",
          100: "fadt"
        },
        "Font Awesome 7 Sharp": {
          900: "fass",
          400: "fasr",
          normal: "fasr",
          300: "fasl",
          100: "fast"
        },
        "Font Awesome 7 Sharp Duotone": {
          900: "fasds",
          400: "fasdr",
          normal: "fasdr",
          300: "fasdl",
          100: "fasdt"
        },
        "Font Awesome 7 Jelly": {
          400: "fajr",
          normal: "fajr"
        },
        "Font Awesome 7 Jelly Fill": {
          400: "fajfr",
          normal: "fajfr"
        },
        "Font Awesome 7 Jelly Duo": {
          400: "fajdr",
          normal: "fajdr"
        },
        "Font Awesome 7 Slab": {
          400: "faslr",
          normal: "faslr"
        },
        "Font Awesome 7 Slab Press": {
          400: "faslpr",
          normal: "faslpr"
        },
        "Font Awesome 7 Thumbprint": {
          300: "fatl",
          normal: "fatl"
        },
        "Font Awesome 7 Notdog": {
          900: "fans",
          normal: "fans"
        },
        "Font Awesome 7 Notdog Duo": {
          900: "fands",
          normal: "fands"
        },
        "Font Awesome 7 Etch": {
          900: "faes",
          normal: "faes"
        },
        "Font Awesome 7 Graphite": {
          100: "fagt",
          normal: "fagt"
        },
        "Font Awesome 7 Chisel": {
          400: "facr",
          normal: "facr"
        },
        "Font Awesome 7 Whiteboard": {
          600: "fawsb",
          normal: "fawsb"
        },
        "Font Awesome 7 Utility": {
          600: "fausb",
          normal: "fausb"
        },
        "Font Awesome 7 Utility Duo": {
          600: "faudsb",
          normal: "faudsb"
        },
        "Font Awesome 7 Utility Fill": {
          600: "faufsb",
          normal: "faufsb"
        }
      }), {
        "Font Awesome 5 Free": {
          900: "fas",
          400: "far"
        },
        "Font Awesome 5 Pro": {
          900: "fas",
          400: "far",
          normal: "far",
          300: "fal"
        },
        "Font Awesome 5 Brands": {
          400: "fab",
          normal: "fab"
        },
        "Font Awesome 5 Duotone": {
          900: "fad"
        }
      }), {
        "Font Awesome Kit": {
          400: "fak",
          normal: "fak"
        },
        "Font Awesome Kit Duotone": {
          400: "fakd",
          normal: "fakd"
        }
      }),
      aR = Object.keys(fR).reduce(function (HH, IH) {
        return HH[IH.toLowerCase()] = fR[IH], HH;
      }, {}),
      nR = Object.keys(aR).reduce(function (HH, IH) {
        var EH = aR[IH];
        return HH[IH] = EH[900] || VH(Object.entries(EH))[0][1], HH;
      }, {});
    function pR(HH, IH) {
      var EH = "".concat("data-fa-pseudo-element-pending").concat(IH.replace(":", "-"));
      return new Promise(function (RH, hH) {
        if (null !== HH.getAttribute(EH)) return RH();
        var TH = tI(HH.children).filter(function (HH) {
            return HH.getAttribute(MI) === IH;
          })[0],
          sH = mI.getComputedStyle(HH, IH),
          eH = sH.getPropertyValue("font-family"),
          AH = eH.match(WI),
          YH = sH.getPropertyValue("font-weight"),
          QH = sH.getPropertyValue("content");
        if (TH && !AH) return HH.removeChild(TH), RH();
        if (AH && "none" !== QH && "" !== QH) {
          var JH = sH.getPropertyValue("content"),
            OH = function (HH, IH) {
              var EH = HH.replace(/^['"]|['"]$/g, "").toLowerCase(),
                RH = parseInt(IH),
                hH = isNaN(RH) ? "normal" : RH;
              return (aR[EH] || {})[hH] || nR[EH];
            }(eH, YH),
            rH = function (HH) {
              return YE(VH(HH.replace(WR, ""))[0] || "");
            }(JH),
            FH = AH[0].startsWith("FontAwesome"),
            MH = function (HH) {
              var IH = HH.getPropertyValue("font-feature-settings").includes("ss01"),
                EH = HH.getPropertyValue("content").replace(WR, ""),
                RH = EH.codePointAt(0),
                hH = RH >= BR[0] && RH <= BR[1],
                TH = 2 === EH.length && EH[0] === EH[1];
              return hH || TH || IH;
            }(sH),
            NH = gE(OH, rH),
            iI = NH;
          if (FH) {
            var DH = function (HH) {
              var IH = XE[HH],
                EH = gE("fas", HH);
              return IH || (EH ? {
                prefix: "fas",
                iconName: EH
              } : null) || {
                prefix: null,
                iconName: null
              };
            }(rH);
            DH.iconName && DH.prefix && (NH = DH.iconName, OH = DH.prefix);
          }
          if (!NH || MH || TH && TH.getAttribute(NI) === OH && TH.getAttribute(iE) === iI) RH();else {
            HH.setAttribute(EH, iI), TH && HH.removeChild(TH);
            var PH = {
                iconName: null,
                prefix: null,
                transform: wI,
                symbol: !1,
                mask: {
                  iconName: null,
                  prefix: null,
                  rest: []
                },
                maskId: null,
                extra: {
                  classes: [],
                  styles: {},
                  attributes: {}
                }
              },
              XH = PH.extra;
            XH.attributes[MI] = IH, hR(NH, OH).then(function (hH) {
              var TH = xE(GH(GH({}, PH), {}, {
                  icons: {
                    main: hH,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: OH,
                  iconName: iI,
                  extra: XH,
                  watchable: !0
                })),
                sH = ZH.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === IH ? HH.insertBefore(sH, HH.firstChild) : HH.appendChild(sH), sH.outerHTML = TH.map(function (HH) {
                return GE(HH);
              }).join("\n"), HH.removeAttribute(EH), RH();
            }).catch(hH);
          }
        } else RH();
      });
    }
    function dR(HH) {
      return Promise.all([pR(HH, "::before"), pR(HH, "::after")]);
    }
    function uR(HH) {
      return HH.parentNode !== document.head && !~PI.indexOf(HH.tagName.toUpperCase()) && !HH.getAttribute(MI) && (!HH.parentNode || "svg" !== HH.parentNode.tagName);
    }
    var lR = function (HH) {
        return !!HH && XI.some(function (IH) {
          return HH.includes(IH);
        });
      },
      KR = function (HH) {
        if (!HH) return [];
        var IH = new Set(),
          EH = HH.split(/,(?![^()]*\))/).map(function (HH) {
            return HH.trim();
          });
        EH = EH.flatMap(function (HH) {
          return HH.includes("(") ? HH : HH.split(",").map(function (HH) {
            return HH.trim();
          });
        });
        var RH,
          hH = TH(EH);
        try {
          for (hH.s(); !(RH = hH.n()).done;) {
            var sH = RH.value;
            if (lR(sH)) {
              var eH = XI.reduce(function (HH, IH) {
                return HH.replace(IH, "");
              }, sH);
              "" !== eH && "*" !== eH && IH.add(eH);
            }
          }
        } catch (GH) {
          hH.e(GH);
        } finally {
          hH.f();
        }
        return IH;
      };
    function wR(HH) {
      if (gH) {
        var IH;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) IH = HH;else if (uI.searchPseudoElementsFullScan) IH = HH.querySelectorAll("*");else {
          var EH,
            RH = new Set(),
            hH = TH(document.styleSheets);
          try {
            for (hH.s(); !(EH = hH.n()).done;) {
              var sH = EH.value;
              try {
                var eH,
                  GH = TH(sH.cssRules);
                try {
                  for (GH.s(); !(eH = GH.n()).done;) {
                    var AH,
                      VH = eH.value,
                      YH = TH(KR(VH.selectorText));
                    try {
                      for (YH.s(); !(AH = YH.n()).done;) {
                        var QH = AH.value;
                        RH.add(QH);
                      }
                    } catch (OH) {
                      YH.e(OH);
                    } finally {
                      YH.f();
                    }
                  }
                } catch (OH) {
                  GH.e(OH);
                } finally {
                  GH.f();
                }
              } catch (rH) {
                uI.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(sH.href, " (").concat(rH.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'));
              }
            }
          } catch (OH) {
            hH.e(OH);
          } finally {
            hH.f();
          }
          if (!RH.size) return;
          var JH = Array.from(RH).join(", ");
          try {
            IH = HH.querySelectorAll(JH);
          } catch (FH) {}
        }
        return new Promise(function (HH, EH) {
          var RH = tI(IH).filter(uR).map(dR),
            hH = AR("searchPseudoElements");
          ih(), Promise.all(RH).then(function () {
            hH(), DR(), HH();
          }).catch(function () {
            hH(), DR(), EH();
          });
        });
      }
    }
    var zR = {
        hooks: function () {
          return {
            mutationObserverCallbacks: function (HH) {
              return HH.pseudoElementsCallback = wR, HH;
            }
          };
        },
        provides: function (HH) {
          HH.pseudoElements2svg = function (HH) {
            var IH = HH.node,
              EH = void 0 === IH ? ZH : IH;
            uI.searchPseudoElements && wR(EH);
          };
        }
      },
      tR = !1,
      jh = function (HH) {
        return HH.toLowerCase().split(" ").reduce(function (HH, IH) {
          var EH = IH.toLowerCase().split("-"),
            RH = EH[0],
            hH = EH.slice(1).join("-");
          if (RH && "h" === hH) return HH.flipX = !0, HH;
          if (RH && "v" === hH) return HH.flipY = !0, HH;
          if (hH = parseFloat(hH), isNaN(hH)) return HH;
          switch (RH) {
            case "grow":
              HH.size = HH.size + hH;
              break;
            case "shrink":
              HH.size = HH.size - hH;
              break;
            case "left":
              HH.x = HH.x - hH;
              break;
            case "right":
              HH.x = HH.x + hH;
              break;
            case "up":
              HH.y = HH.y - hH;
              break;
            case "down":
              HH.y = HH.y + hH;
              break;
            case "rotate":
              HH.rotate = HH.rotate + hH;
          }
          return HH;
        }, {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        });
      },
      vR = {
        mixout: function () {
          return {
            parse: {
              transform: function (HH) {
                return jh(HH);
              }
            }
          };
        },
        hooks: function () {
          return {
            parseNodeAttributes: function (HH, IH) {
              var EH = IH.getAttribute("data-fa-transform");
              return EH && (HH.transform = jh(EH)), HH;
            }
          };
        },
        provides: function (HH) {
          HH.generateAbstractTransformGrouping = function (HH) {
            var IH = HH.main,
              EH = HH.transform,
              RH = HH.containerWidth,
              hH = HH.iconWidth,
              TH = {
                transform: "translate(".concat(RH / 2, " 256)")
              },
              sH = "translate(".concat(32 * EH.x, ", ").concat(32 * EH.y, ") "),
              eH = "scale(".concat(EH.size / 16 * (EH.flipX ? -1 : 1), ", ").concat(EH.size / 16 * (EH.flipY ? -1 : 1), ") "),
              AH = "rotate(".concat(EH.rotate, " 0 0)"),
              VH = {
                outer: TH,
                inner: {
                  transform: "".concat(sH, " ").concat(eH, " ").concat(AH)
                },
                path: {
                  transform: "translate(".concat(hH / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: GH({}, VH.outer),
              children: [{
                tag: "g",
                attributes: GH({}, VH.inner),
                children: [{
                  tag: IH.icon.tag,
                  children: IH.icon.children,
                  attributes: GH(GH({}, IH.icon.attributes), VH.path)
                }]
              }]
            };
          };
        }
      },
      bR = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };
    function SR(HH) {
      var IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return HH.attributes && (HH.attributes.fill || IH) && (HH.attributes.fill = "black"), HH;
    }
    var xR = {
        hooks: function () {
          return {
            parseNodeAttributes: function (HH, IH) {
              var EH = IH.getAttribute("data-fa-mask"),
                RH = EH ? WE(EH.split(" ").map(function (HH) {
                  return HH.trim();
                })) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return RH.prefix || (RH.prefix = kR()), HH.mask = RH, HH.maskId = IH.getAttribute("data-fa-mask-id"), HH;
            }
          };
        },
        provides: function (HH) {
          HH.generateAbstractMask = function (HH) {
            var IH,
              EH = HH.children,
              RH = HH.attributes,
              hH = HH.main,
              TH = HH.mask,
              sH = HH.maskId,
              eH = HH.transform,
              AH = hH.width,
              VH = hH.icon,
              YH = TH.width,
              QH = TH.icon,
              JH = function (HH) {
                var IH = HH.transform,
                  EH = HH.containerWidth,
                  RH = HH.iconWidth,
                  hH = {
                    transform: "translate(".concat(EH / 2, " 256)")
                  },
                  TH = "translate(".concat(32 * IH.x, ", ").concat(32 * IH.y, ") "),
                  sH = "scale(".concat(IH.size / 16 * (IH.flipX ? -1 : 1), ", ").concat(IH.size / 16 * (IH.flipY ? -1 : 1), ") "),
                  eH = "rotate(".concat(IH.rotate, " 0 0)");
                return {
                  outer: hH,
                  inner: {
                    transform: "".concat(TH, " ").concat(sH, " ").concat(eH)
                  },
                  path: {
                    transform: "translate(".concat(RH / 2 * -1, " -256)")
                  }
                };
              }({
                transform: eH,
                containerWidth: YH,
                iconWidth: AH
              }),
              OH = {
                tag: "rect",
                attributes: GH(GH({}, bR), {}, {
                  fill: "white"
                })
              },
              rH = VH.children ? {
                children: VH.children.map(SR)
              } : {},
              FH = {
                tag: "g",
                attributes: GH({}, JH.inner),
                children: [SR(GH({
                  tag: VH.tag,
                  attributes: GH(GH({}, VH.attributes), JH.path)
                }, rH))]
              },
              MH = {
                tag: "g",
                attributes: GH({}, JH.outer),
                children: [FH]
              },
              NH = "mask-".concat(sH || zI()),
              iI = "clip-".concat(sH || zI()),
              DH = {
                tag: "mask",
                attributes: GH(GH({}, bR), {}, {
                  id: NH,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [OH, MH]
              },
              PH = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: iI
                  },
                  children: (IH = QH, "g" === IH.tag ? IH.children : [IH])
                }, DH]
              };
            return EH.push(PH, {
              tag: "rect",
              attributes: GH({
                fill: "currentColor",
                "clip-path": "url(#".concat(iI, ")"),
                mask: "url(#".concat(NH, ")")
              }, bR)
            }), {
              children: EH,
              attributes: RH
            };
          };
        }
      },
      Hh = {
        provides: function (HH) {
          var IH = !1;
          mI.matchMedia && (IH = mI.matchMedia("(prefers-reduced-motion: reduce)").matches), HH.missingIconAbstract = function () {
            var HH = [],
              EH = {
                fill: "currentColor"
              },
              RH = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            HH.push({
              tag: "path",
              attributes: GH(GH({}, EH), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var hH = GH(GH({}, RH), {}, {
                attributeName: "opacity"
              }),
              TH = {
                tag: "circle",
                attributes: GH(GH({}, EH), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return IH || TH.children.push({
              tag: "animate",
              attributes: GH(GH({}, RH), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: GH(GH({}, hH), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), HH.push(TH), HH.push({
              tag: "path",
              attributes: GH(GH({}, EH), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: IH ? [] : [{
                tag: "animate",
                attributes: GH(GH({}, hH), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), IH || HH.push({
              tag: "path",
              attributes: GH(GH({}, EH), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: GH(GH({}, hH), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: HH
            };
          };
        }
      };
    !function (HH, IH) {
      var EH = IH.mixoutsTo;
      nE = HH, pE = {}, Object.keys(dE).forEach(function (HH) {
        -1 === uE.indexOf(HH) && delete dE[HH];
      }), nE.forEach(function (HH) {
        var IH = HH.mixout ? HH.mixout() : {};
        if (Object.keys(IH).forEach(function (HH) {
          "function" === typeof IH[HH] && (EH[HH] = IH[HH]), "object" === QH(IH[HH]) && Object.keys(IH[HH]).forEach(function (RH) {
            EH[HH] || (EH[HH] = {}), EH[HH][RH] = IH[HH][RH];
          });
        }), HH.hooks) {
          var RH = HH.hooks();
          Object.keys(RH).forEach(function (HH) {
            pE[HH] || (pE[HH] = []), pE[HH].push(RH[HH]);
          });
        }
        HH.provides && HH.provides(dE);
      });
    }([EE, kh, CR, cR, UR, zR, {
      mixout: function () {
        return {
          dom: {
            unwatch: function () {
              ih(), tR = !0;
            }
          }
        };
      },
      hooks: function () {
        return {
          bootstrap: function () {
            XR(lE("mutationObserverCallbacks", {}));
          },
          noAuto: function () {
            PR && PR.disconnect();
          },
          watch: function (HH) {
            var IH = HH.observeMutationsRoot;
            tR ? DR() : XR(lE("mutationObserverCallbacks", {
              observeMutationsRoot: IH
            }));
          }
        };
      }
    }, vR, xR, Hh, {
      hooks: function () {
        return {
          parseNodeAttributes: function (HH, IH) {
            var EH = IH.getAttribute("data-fa-symbol"),
              RH = null !== EH && ("" === EH || EH);
            return HH.symbol = RH, HH;
          }
        };
      }
    }], {
      mixoutsTo: vE
    });
    var Ih = vE.noAuto,
      Eh = vE.config,
      Rh = vE.library,
      hh = vE.dom,
      Th = vE.parse,
      sh = vE.findIconDefinition,
      eh = vE.toHtml,
      Gh = vE.icon,
      Ah = vE.layer,
      Vh = vE.text,
      Yh = vE.counter;
  },
  2233: HH => {
    HH.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}');
  }
};
//# sourceMappingURL=ug4nu.fa-renderer.c474157e.chunk.js.map
//# debugId=380ec8f7-98dc-500d-9790-ecd3c6a162e4