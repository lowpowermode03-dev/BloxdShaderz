!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "cea4a832-85b6-5bc2-b385-969b0a899e16");
  } catch (e) {}
}();
export const id = 48;
export const ids = [48];
export const modules = {
  21896: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => ZH,
      d: () => XH,
      g: () => mI,
      e: () => CH,
      j: () => cH
    });
    class RH {
      constructor() {
        this.children = [];
      }
      isValid(HH) {
        return !0;
      }
      process(HH, IH, EH) {
        let RH = "";
        if (this.line) {
          let EH = this.line;
          const YH = IH.processor;
          if (YH) {
            var hH, TH, sH, eH, GH, AH, VH;
            YH.lineProcessor && (EH = YH.lineProcessor(EH, IH.isFragment, IH.processingContext));
            const RH = null !== (hH = null === (TH = IH.processor) || void 0 === TH ? void 0 : TH.attributeKeywordName) && void 0 !== hH ? hH : "attribute",
              QH = IH.isFragment && null !== (sH = IH.processor) && void 0 !== sH && sH.varyingFragmentKeywordName ? null === (eH = IH.processor) || void 0 === eH ? void 0 : eH.varyingFragmentKeywordName : !IH.isFragment && null !== (GH = IH.processor) && void 0 !== GH && GH.varyingVertexKeywordName ? null === (AH = IH.processor) || void 0 === AH ? void 0 : AH.varyingVertexKeywordName : "varying";
            if (!IH.isFragment && YH.attributeProcessor && this.line.startsWith(RH)) EH = YH.attributeProcessor(this.line, HH, IH.processingContext);else if (YH.varyingProcessor && (null !== (VH = YH.varyingCheck) && void 0 !== VH && VH.call(YH, this.line, IH.isFragment) || !YH.varyingCheck && this.line.startsWith(QH))) EH = YH.varyingProcessor(this.line, IH.isFragment, HH, IH.processingContext);else if (YH.uniformProcessor && YH.uniformRegexp && YH.uniformRegexp.test(this.line)) IH.lookForClosingBracketForUniformBuffer || (EH = YH.uniformProcessor(this.line, IH.isFragment, HH, IH.processingContext));else if (YH.uniformBufferProcessor && YH.uniformBufferRegexp && YH.uniformBufferRegexp.test(this.line)) IH.lookForClosingBracketForUniformBuffer || (EH = YH.uniformBufferProcessor(this.line, IH.isFragment, IH.processingContext), IH.lookForClosingBracketForUniformBuffer = !0);else if (YH.textureProcessor && YH.textureRegexp && YH.textureRegexp.test(this.line)) EH = YH.textureProcessor(this.line, IH.isFragment, HH, IH.processingContext);else if ((YH.uniformProcessor || YH.uniformBufferProcessor) && this.line.startsWith("uniform") && !IH.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? YH.uniformProcessor && (EH = YH.uniformProcessor(this.line, IH.isFragment, HH, IH.processingContext)) : YH.uniformBufferProcessor && (EH = YH.uniformBufferProcessor(this.line, IH.isFragment, IH.processingContext), IH.lookForClosingBracketForUniformBuffer = !0);
            }
            IH.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (IH.lookForClosingBracketForUniformBuffer = !1, YH.endOfUniformBufferProcessor && (EH = YH.endOfUniformBufferProcessor(this.line, IH.isFragment, IH.processingContext)));
          }
          RH += EH + "\n";
        }
        for (const YH of this.children) RH += YH.process(HH, IH, EH);
        return this.additionalDefineKey && (HH[this.additionalDefineKey] = this.additionalDefineValue || "true", EH[this.additionalDefineKey] = HH[this.additionalDefineKey]), RH;
      }
    }
    class hH {
      constructor() {
        this._lines = [];
      }
      get currentLine() {
        return this._lines[this.lineIndex];
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1;
      }
      set lines(HH) {
        this._lines.length = 0;
        for (const IH of HH) {
          if (!IH || "\r" === IH) continue;
          if ("#" === IH[0]) {
            this._lines.push(IH);
            continue;
          }
          const HH = IH.trim();
          if (!HH) continue;
          if (HH.startsWith("//")) {
            this._lines.push(IH);
            continue;
          }
          const EH = HH.indexOf(";");
          if (-1 === EH) this._lines.push(HH);else if (EH === HH.length - 1) HH.length > 1 && this._lines.push(HH);else {
            const HH = IH.split(";");
            for (let IH = 0; IH < HH.length; IH++) {
              let EH = HH[IH];
              EH && (EH = EH.trim(), EH && this._lines.push(EH + (IH !== HH.length - 1 ? ";" : "")));
            }
          }
        }
      }
    }
    class TH extends RH {
      process(HH, IH, EH) {
        for (let RH = 0; RH < this.children.length; RH++) {
          const hH = this.children[RH];
          if (hH.isValid(HH)) return hH.process(HH, IH, EH);
        }
        return "";
      }
    }
    class sH extends RH {
      isValid(HH) {
        return this.testExpression.isTrue(HH);
      }
    }
    class eH {
      isTrue(HH) {
        return !0;
      }
      static postfixToInfix(HH) {
        const IH = [];
        for (const EH of HH) if (void 0 === eH._OperatorPriority[EH]) IH.push(EH);else {
          const HH = IH[IH.length - 1],
            RH = IH[IH.length - 2];
          IH.length -= 2, IH.push("(".concat(RH).concat(EH).concat(HH, ")"));
        }
        return IH[IH.length - 1];
      }
      static infixToPostfix(HH) {
        const IH = eH._InfixToPostfixCache.get(HH);
        if (IH) return IH.accessTime = Date.now(), IH.result;
        if (!HH.includes("&&") && !HH.includes("||") && !HH.includes(")") && !HH.includes("(")) return [HH];
        const EH = [];
        let RH = -1;
        const hH = () => {
            VH = VH.trim(), "" !== VH && (EH.push(VH), VH = "");
          },
          TH = HH => {
            RH < eH._Stack.length - 1 && (eH._Stack[++RH] = HH);
          },
          sH = () => eH._Stack[RH],
          GH = () => -1 === RH ? "!!INVALID EXPRESSION!!" : eH._Stack[RH--];
        let AH = 0,
          VH = "";
        for (; AH < HH.length;) {
          const IH = HH.charAt(AH),
            YH = AH < HH.length - 1 ? HH.substring(AH, 2 + AH) : "";
          if ("(" === IH) VH = "", TH(IH);else if (")" === IH) {
            for (hH(); -1 !== RH && "(" !== sH();) EH.push(GH());
            GH();
          } else if (eH._OperatorPriority[YH] > 1) {
            for (hH(); -1 !== RH && eH._OperatorPriority[sH()] >= eH._OperatorPriority[YH];) EH.push(GH());
            TH(YH), AH++;
          } else VH += IH;
          AH++;
        }
        for (hH(); -1 !== RH;) "(" === sH() ? GH() : EH.push(GH());
        return eH._InfixToPostfixCache.size >= eH.InfixToPostfixCacheLimitSize && eH.ClearCache(), eH._InfixToPostfixCache.set(HH, {
          result: EH,
          accessTime: Date.now()
        }), EH;
      }
      static ClearCache() {
        const HH = Array.from(eH._InfixToPostfixCache.entries()).sort((HH, IH) => HH[1].accessTime - IH[1].accessTime);
        for (let IH = 0; IH < eH.InfixToPostfixCacheCleanupSize; IH++) eH._InfixToPostfixCache.delete(HH[IH][0]);
      }
    }
    eH.InfixToPostfixCacheLimitSize = 5e4, eH.InfixToPostfixCacheCleanupSize = 25e3, eH._InfixToPostfixCache = new Map(), eH._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, eH._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class GH extends eH {
      constructor(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = HH, this.not = IH;
      }
      isTrue(HH) {
        let IH = void 0 !== HH[this.define];
        return this.not && (IH = !IH), IH;
      }
    }
    class AH extends eH {
      isTrue(HH) {
        return this.leftOperand.isTrue(HH) || this.rightOperand.isTrue(HH);
      }
    }
    class VH extends eH {
      isTrue(HH) {
        return this.leftOperand.isTrue(HH) && this.rightOperand.isTrue(HH);
      }
    }
    class YH extends eH {
      constructor(HH, IH, EH) {
        super(), this.define = HH, this.operand = IH, this.testValue = EH;
      }
      toString() {
        return "".concat(this.define, " ").concat(this.operand, " ").concat(this.testValue);
      }
      isTrue(HH) {
        let IH = !1;
        const EH = parseInt(void 0 != HH[this.define] ? HH[this.define] : this.define),
          RH = parseInt(void 0 != HH[this.testValue] ? HH[this.testValue] : this.testValue);
        if (isNaN(EH) || isNaN(RH)) return !1;
        switch (this.operand) {
          case ">":
            IH = EH > RH;
            break;
          case "<":
            IH = EH < RH;
            break;
          case "<=":
            IH = EH <= RH;
            break;
          case ">=":
            IH = EH >= RH;
            break;
          case "==":
            IH = EH === RH;
            break;
          case "!=":
            IH = EH !== RH;
        }
        return IH;
      }
    }
    var QH = EH(21856),
      JH = EH(21889);
    const OH = /defined\s*?\((.+?)\)/g,
      rH = /defined\s*?\[(.+?)\]/g,
      FH = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      MH = /__decl__/,
      NH = /light\{X\}.(\w*)/g,
      iI = /\{X\}/g,
      DH = [],
      PH = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
    function XH(HH) {
      HH.processor && HH.processor.initializeShaders && HH.processor.initializeShaders(HH.processingContext);
    }
    function mI(HH, IH, EH, RH) {
      var hH;
      null !== (hH = IH.processor) && void 0 !== hH && hH.preProcessShaderCode && (HH = IH.processor.preProcessShaderCode(HH, IH.isFragment)), CH(HH, IH, HH => {
        IH.processCodeAfterIncludes && (HH = IH.processCodeAfterIncludes(IH.isFragment ? "fragment" : "vertex", HH, IH.defines));
        const hH = function (HH, IH, EH) {
          let RH = function (HH, IH) {
            var EH;
            if (null !== (EH = IH.processor) && void 0 !== EH && EH.noPrecision) return HH;
            const RH = IH.shouldUseHighPrecisionShader;
            -1 === HH.indexOf("precision highp float") ? HH = RH ? "precision highp float;\n" + HH : "precision mediump float;\n" + HH : RH || (HH = HH.replace("precision highp float", "precision mediump float"));
            return HH;
          }(HH, IH);
          if (!IH.processor) return RH;
          if (0 === IH.processor.shaderLanguage && -1 !== RH.indexOf("#version 3") && (RH = RH.replace("#version 300 es", ""), !IH.processor.parseGLES3)) return RH;
          const hH = IH.defines,
            TH = kI(IH, EH);
          IH.processor.preProcessor && (RH = IH.processor.preProcessor(RH, hH, TH, IH.isFragment, IH.processingContext));
          const sH = {};
          RH = oH(RH, TH, IH, sH), IH.processor.postProcessor && (RH = IH.processor.postProcessor(RH, hH, IH.isFragment, IH.processingContext, EH ? {
            drawBuffersExtensionDisabled: !EH.getCaps().drawBuffersExtension
          } : {}, TH, sH));
          null !== EH && void 0 !== EH && EH._features.needShaderCodeInlining && (RH = EH.inlineShaderCode(RH));
          return RH;
        }(HH, IH, RH);
        EH(hH, HH);
      });
    }
    function ZH(HH, IH, EH) {
      return EH.processor && EH.processor.finalizeShaders ? EH.processor.finalizeShaders(HH, IH, EH.processingContext) : {
        vertexCode: HH,
        fragmentCode: IH
      };
    }
    function qH(HH) {
      const IH = /defined\((.+)\)/.exec(HH);
      if (IH && IH.length) return new GH(IH[1].trim(), "!" === HH[0]);
      const EH = ["==", "!=", ">=", "<=", "<", ">"];
      let RH = "",
        hH = 0;
      for (RH of EH) if (hH = HH.indexOf(RH), hH > -1) break;
      if (-1 === hH) return new GH(HH);
      const TH = HH.substring(0, hH).trim(),
        sH = HH.substring(hH + RH.length).trim();
      return new YH(TH, RH, sH);
    }
    function LH(HH, IH) {
      const EH = new sH(),
        RH = HH.substring(0, IH);
      let hH = HH.substring(IH);
      return hH = hH.substring(0, (hH.indexOf("//") + 1 || hH.length + 1) - 1).trim(), EH.testExpression = "#ifdef" === RH ? new GH(hH) : "#ifndef" === RH ? new GH(hH, !0) : function (HH) {
        HH = HH.replace(OH, "defined[$1]");
        const IH = eH.infixToPostfix(HH),
          EH = [];
        for (const hH of IH) if ("||" !== hH && "&&" !== hH) EH.push(hH);else if (EH.length >= 2) {
          let HH = EH[EH.length - 1],
            IH = EH[EH.length - 2];
          EH.length -= 2;
          const RH = "&&" == hH ? new VH() : new AH();
          "string" === typeof HH && (HH = HH.replace(rH, "defined($1)")), "string" === typeof IH && (IH = IH.replace(rH, "defined($1)")), RH.leftOperand = "string" === typeof IH ? qH(IH) : IH, RH.rightOperand = "string" === typeof HH ? qH(HH) : HH, EH.push(RH);
        }
        let RH = EH[EH.length - 1];
        return "string" === typeof RH && (RH = RH.replace(rH, "defined($1)")), "string" === typeof RH ? qH(RH) : RH;
      }(hH), EH;
    }
    function gH(HH, IH, EH, hH) {
      let TH;
      for (; yH(HH, EH, hH);) {
        TH = HH.currentLine;
        const sH = TH.substring(0, 5).toLowerCase();
        if ("#else" === sH) {
          const EH = new RH();
          return IH.children.push(EH), void yH(HH, EH, hH);
        }
        if ("#elif" === sH) {
          const HH = LH(TH, 5);
          IH.children.push(HH), EH = HH;
        }
      }
    }
    function yH(HH, IH, EH) {
      for (; HH.canRead;) {
        HH.lineIndex++;
        const hH = HH.currentLine;
        if (hH.indexOf("#") >= 0) {
          const RH = PH.exec(hH);
          if (RH && RH.length) {
            switch (RH[0]) {
              case "#ifdef":
                {
                  const RH = new TH();
                  IH.children.push(RH);
                  const sH = LH(hH, 6);
                  RH.children.push(sH), gH(HH, RH, sH, EH);
                  break;
                }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef":
                {
                  const RH = new TH();
                  IH.children.push(RH);
                  const sH = LH(hH, 7);
                  RH.children.push(sH), gH(HH, RH, sH, EH);
                  break;
                }
              case "#if":
                {
                  const RH = new TH(),
                    sH = LH(hH, 3);
                  IH.children.push(RH), RH.children.push(sH), gH(HH, RH, sH, EH);
                  break;
                }
            }
            continue;
          }
        }
        const sH = new RH();
        if (sH.line = hH, IH.children.push(sH), "#" === hH[0] && "d" === hH[1]) {
          const HH = hH.replace(";", "").split(" ");
          sH.additionalDefineKey = HH[1], 3 === HH.length && (sH.additionalDefineValue = HH[2]);
        }
      }
      return !1;
    }
    function oH(HH, IH, EH, TH) {
      const sH = new RH(),
        eH = new hH();
      return eH.lineIndex = -1, eH.lines = HH.split("\n"), yH(eH, sH, TH), sH.process(IH, EH, TH);
    }
    function kI(HH, IH) {
      var EH;
      const RH = HH.defines,
        hH = {};
      for (const TH of RH) {
        const HH = TH.replace("#define", "").replace(";", "").trim().split(" ");
        hH[HH[0]] = HH.length > 1 ? HH[1] : "";
      }
      return 0 === (null === (EH = HH.processor) || void 0 === EH ? void 0 : EH.shaderLanguage) && (hH.GL_ES = "true"), hH.__VERSION__ = HH.version, hH[HH.platformName] = "true", (0, JH.d)(hH, null === IH || void 0 === IH ? void 0 : IH.isNDCHalfZRange, null === IH || void 0 === IH ? void 0 : IH.xO, null === IH || void 0 === IH ? void 0 : IH.useExactSrgbConversions), hH;
    }
    function CH(HH, IH, EH) {
      let RH;
      for (DH.length = 0; null !== (RH = FH.exec(HH));) DH.push(RH);
      let hH = [HH],
        TH = !1;
      for (const eH of DH) {
        let HH = eH[1];
        if (-1 !== HH.indexOf("__decl__") && (HH = HH.replace(MH, ""), IH.supportsUniformBuffers && (HH = HH.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), HH += "Declaration"), !IH.includesShadersStore[HH]) {
          const RH = IH.shadersRepository + "ShadersInclude/" + HH + ".fx";
          return void cH.loadFile(RH, RH => {
            IH.includesShadersStore[HH] = RH, CH(hH.join(""), IH, EH);
          });
        }
        {
          let EH = IH.includesShadersStore[HH];
          if (eH[2]) {
            const HH = eH[3].split(",");
            for (let IH = 0; IH < HH.length; IH += 2) {
              const RH = new RegExp(HH[IH], "g"),
                hH = HH[IH + 1];
              EH = EH.replace(RH, hH);
            }
          }
          if (eH[4]) {
            const HH = eH[5];
            if (-1 !== HH.indexOf("..")) {
              const RH = HH.split(".."),
                hH = parseInt(RH[0]);
              let TH = parseInt(RH[1]),
                sH = EH.slice(0);
              EH = "", isNaN(TH) && (TH = IH.indexParameters[RH[1]]);
              for (let HH = hH; HH < TH; HH++) IH.supportsUniformBuffers || (sH = sH.replace(NH, (HH, IH) => IH + "{X}")), EH += sH.replace(iI, HH.toString()) + "\n";
            } else IH.supportsUniformBuffers || (EH = EH.replace(NH, (HH, IH) => IH + "{X}")), EH = EH.replace(iI, HH);
          }
          const RH = [];
          for (const HH of hH) {
            const IH = HH.split(eH[0]);
            for (let HH = 0; HH < IH.length - 1; HH++) RH.push(IH[HH]), RH.push(EH);
            RH.push(IH[IH.length - 1]);
          }
          hH = RH, TH = TH || EH.indexOf("#include<") >= 0 || EH.indexOf("#include <") >= 0;
        }
      }
      DH.length = 0;
      const sH = hH.join("");
      TH ? CH(sH.toString(), IH, EH) : EH(sH);
    }
    const cH = {
      loadFile: (HH, IH, EH, RH, hH, TH) => {
        throw (0, QH.n)("FileTools");
      }
    };
  },
  21889: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => hH,
      c: () => TH,
      d: () => eH,
      e: () => sH,
      g: () => GH
    });
    var RH = EH(21856);
    const hH = {};
    function TH(HH, IH) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (IH ? IH + "\n" : "") + HH;
    }
    function sH(HH, IH, EH, TH, sH, eH, GH) {
      const AH = GH || hH.loadFile;
      if (!AH) throw (0, RH.n)("FileTools");
      return AH(HH, IH, EH, TH, sH, eH);
    }
    function eH(HH, IH, EH, RH) {
      if (HH) return IH ? HH.IS_NDC_HALF_ZRANGE = "" : delete HH.IS_NDC_HALF_ZRANGE, EH ? HH.USE_REVERSE_DEPTHBUFFER = "" : delete HH.USE_REVERSE_DEPTHBUFFER, void (RH ? HH.USE_EXACT_SRGB_CONVERSIONS = "" : delete HH.USE_EXACT_SRGB_CONVERSIONS);
      {
        let HH = "";
        return IH && (HH += "#define IS_NDC_HALF_ZRANGE"), EH && (HH && (HH += "\n"), HH += "#define USE_REVERSE_DEPTHBUFFER"), RH && (HH && (HH += "\n"), HH += "#define USE_EXACT_SRGB_CONVERSIONS"), HH;
      }
    }
    function GH(HH, IH) {
      let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        RH = arguments.length > 3 ? arguments[3] : void 0;
      switch (HH) {
        case 3:
          {
            const HH = new Int8Array(IH);
            return RH && HH.set(new Int8Array(RH)), HH;
          }
        case 0:
          {
            const HH = new Uint8Array(IH);
            return RH && HH.set(new Uint8Array(RH)), HH;
          }
        case 4:
          {
            const HH = "number" !== typeof IH ? new Int16Array(IH) : new Int16Array(EH ? IH / 2 : IH);
            return RH && HH.set(new Int16Array(RH)), HH;
          }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2:
          {
            const HH = "number" !== typeof IH ? new Uint16Array(IH) : new Uint16Array(EH ? IH / 2 : IH);
            return RH && HH.set(new Uint16Array(RH)), HH;
          }
        case 6:
          {
            const HH = "number" !== typeof IH ? new Int32Array(IH) : new Int32Array(EH ? IH / 4 : IH);
            return RH && HH.set(new Int32Array(RH)), HH;
          }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
          {
            const HH = "number" !== typeof IH ? new Uint32Array(IH) : new Uint32Array(EH ? IH / 4 : IH);
            return RH && HH.set(new Uint32Array(RH)), HH;
          }
        case 1:
          {
            const HH = "number" !== typeof IH ? new Float32Array(IH) : new Float32Array(EH ? IH / 4 : IH);
            return RH && HH.set(new Float32Array(RH)), HH;
          }
      }
      const hH = new Uint8Array(IH);
      return RH && hH.set(new Uint8Array(RH)), hH;
    }
  },
  21856: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => AH,
      f: () => VH,
      j: () => GH,
      n: () => hH
    });
    const RH = {};
    function hH(HH) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !RH[HH]) return RH[HH] = !0, "".concat(HH, " needs to be imported before as it contains a side-effect required by your code.");
    }
    const TH = {};
    let sH = !1,
      eH = 0;
    function GH(HH, IH) {
      let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const RH = function () {
        if ((EH || sH) && 0 === eH) {
          const EH = "".concat(HH, ".").concat(IH);
          TH[EH] || (TH[EH] = !0, console.warn("[Babylon.js] ".concat(EH, "() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking")));
        }
      };
      return RH.__isSideEffectStub = !0, RH;
    }
    function AH(HH) {
      return !!HH && !HH.__isSideEffectStub;
    }
    function VH(HH, IH) {
      return {
        get() {},
        set(HH) {
          Object.defineProperty(this, IH, {
            value: HH,
            writable: !0,
            configurable: !0,
            enumerable: !0
          });
        },
        configurable: !0,
        enumerable: !0
      };
    }
  },
  21828: (HH, IH, EH) => {
    function RH() {
      return "undefined" !== typeof window;
    }
    function hH() {
      return "undefined" !== typeof navigator;
    }
    function TH() {
      return "undefined" !== typeof document;
    }
    function sH(HH) {
      let IH = "",
        EH = HH.firstChild;
      for (; EH;) 3 === EH.nodeType && (IH += EH.textContent), EH = EH.nextSibling;
      return IH;
    }
    EH.d(IH, {
      d: () => sH,
      e: () => TH,
      i: () => hH,
      m: () => RH
    });
  },
  21832: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => RH
    });
    class RH {
      static _CheckLimit(HH, IH) {
        let EH = RH._LogLimitOutputs[HH];
        return EH ? EH.current++ : (EH = {
          limit: IH,
          current: 1
        }, RH._LogLimitOutputs[HH] = EH), EH.current <= EH.limit;
      }
      static _GenerateLimitMessage(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const EH = RH._LogLimitOutputs[HH];
        if (!EH || !RH.MessageLimitReached) return;
        const hH = this._Levels[IH];
        var TH;
        EH.current === EH.limit && RH[hH.name](RH.MessageLimitReached.replace(/%LIMIT%/g, "" + EH.limit).replace(/%TYPE%/g, null !== (TH = hH.name) && void 0 !== TH ? TH : ""));
      }
      static _AddLogEntry(HH) {
        RH._LogCache = HH + RH._LogCache, RH.OnNewCacheEntry && RH.OnNewCacheEntry(HH);
      }
      static _FormatMessage(HH) {
        const IH = HH => HH < 10 ? "0" + HH : "" + HH,
          EH = new Date();
        return "[" + IH(EH.getHours()) + ":" + IH(EH.getMinutes()) + ":" + IH(EH.getSeconds()) + "]: " + HH;
      }
      static _LogDisabled(HH, IH) {}
      static _LogEnabled() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          IH = arguments.length > 1 ? arguments[1] : void 0,
          EH = arguments.length > 2 ? arguments[2] : void 0;
        const hH = Array.isArray(IH) ? IH[0] : IH;
        if (void 0 !== EH && !RH._CheckLimit(hH, EH)) return;
        const TH = RH._FormatMessage(hH),
          sH = this._Levels[HH],
          eH = Array.isArray(IH) ? IH.slice(1) : [];
        sH.logFunc && sH.logFunc("BJS - " + TH, ...eH);
        const GH = "<div style='color:".concat(sH.color, "'>").concat(TH, "</div><br>");
        RH._AddLogEntry(GH), RH._GenerateLimitMessage(hH, HH);
      }
      static get LogCache() {
        return RH._LogCache;
      }
      static ClearLogCache() {
        RH._LogCache = "", RH._LogLimitOutputs = {}, RH.errorsCount = 0;
      }
      static set LogLevels(HH) {
        RH.Log = RH._LogDisabled, RH.Warn = RH._LogDisabled, RH.Error = RH._LogDisabled;
        const IH = [RH.MessageLogLevel, RH.WarningLogLevel, RH.ErrorLogLevel];
        for (const EH of IH) if ((HH & EH) === EH) {
          const HH = this._Levels[EH];
          RH[HH.name] = RH._LogEnabled.bind(RH, EH);
        }
      }
    }
    RH.NoneLogLevel = 0, RH.MessageLogLevel = 1, RH.WarningLogLevel = 2, RH.ErrorLogLevel = 4, RH.AllLogLevel = 7, RH.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", RH._LogCache = "", RH._LogLimitOutputs = {}, RH._Levels = [{}, {
      color: "white",
      logFunc: console.log,
      name: "Log"
    }, {
      color: "orange",
      logFunc: console.warn,
      name: "Warn"
    }, {}, {
      color: "red",
      logFunc: console.error,
      name: "Error"
    }], RH.errorsCount = 0, RH.Log = RH._LogEnabled.bind(RH, RH.MessageLogLevel), RH.Warn = RH._LogEnabled.bind(RH, RH.WarningLogLevel), RH.Error = RH._LogEnabled.bind(RH, RH.ErrorLogLevel);
  },
  21786: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => sH
    });
    const RH = "undefined" !== typeof WeakRef;
    class hH {
      constructor(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          EH = arguments.length > 2 ? arguments[2] : void 0,
          RH = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(HH, IH, EH, RH);
      }
      initialize(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          EH = arguments.length > 2 ? arguments[2] : void 0,
          RH = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = HH, this.skipNextObservers = IH, this.target = EH, this.currentTarget = RH, this;
      }
    }
    class TH {
      constructor(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = HH, this.mask = IH, this.scope = EH, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null;
      }
      remove() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(HH);
      }
    }
    class sH {
      static FromPromise(HH, IH) {
        const EH = new sH();
        return HH.then(HH => {
          EH.notifyObservers(HH);
        }).catch(HH => {
          if (!IH) throw HH;
          IH.notifyObservers(HH);
        }), EH;
      }
      get observers() {
        return this._observers;
      }
      constructor(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = IH, this._observers = new Array(), this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new hH(0), HH && (this._onObserverAdded = HH);
      }
      add(HH) {
        let IH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          EH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!HH) return null;
        const hH = new TH(HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        hH.unregisterOnNextCall = EH, IH ? this._observers.unshift(hH) : this._observers.push(hH), this._onObserverAdded && this._onObserverAdded(hH), this._hasNotified && this.notifyIfTriggered && void 0 !== this._lastNotifiedValue && this.notifyObserver(hH, this._lastNotifiedValue);
        const sH = RH ? new WeakRef(this) : {
          deref: () => this
        };
        return hH._remove = function () {
          let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const IH = sH.deref();
          IH && (HH ? IH.remove(hH) : IH._remove(hH));
        }, hH;
      }
      addOnce(HH) {
        return this.add(HH, void 0, void 0, void 0, !0);
      }
      remove(HH) {
        if (!HH) return !1;
        HH._remove = null;
        return -1 !== this._observers.indexOf(HH) && (this._deferUnregister(HH), !0);
      }
      removeCallback(HH, IH) {
        for (let EH = 0; EH < this._observers.length; EH++) {
          const RH = this._observers[EH];
          if (!RH._willBeUnregistered && RH.callback === HH && (!IH || IH === RH.scope)) return this._deferUnregister(RH), !0;
        }
        return !1;
      }
      _deferUnregister(HH) {
        HH._willBeUnregistered || (this._numObserversMarkedAsDeleted++, HH.unregisterOnNextCall = !1, HH._willBeUnregistered = !0, setTimeout(() => {
          this._remove(HH);
        }, 0));
      }
      _remove(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!HH) return !1;
        const EH = this._observers.indexOf(HH);
        return -1 !== EH && (IH && this._numObserversMarkedAsDeleted--, this._observers.splice(EH, 1), !0);
      }
      makeObserverTopPriority(HH) {
        this._remove(HH, !1), this._observers.unshift(HH);
      }
      makeObserverBottomPriority(HH) {
        this._remove(HH, !1), this._observers.push(HH);
      }
      notifyObservers(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          EH = arguments.length > 2 ? arguments[2] : void 0,
          RH = arguments.length > 3 ? arguments[3] : void 0,
          hH = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = HH), !this._observers.length) return !0;
        const TH = this._eventState;
        TH.mask = IH, TH.target = EH, TH.currentTarget = RH, TH.skipNextObservers = !1, TH.lastReturnValue = HH, TH.userInfo = hH;
        for (const sH of this._observers) if (!sH._willBeUnregistered && (sH.mask & IH && (sH.unregisterOnNextCall && this._deferUnregister(sH), sH.scope ? TH.lastReturnValue = sH.callback.apply(sH.scope, [HH, TH]) : TH.lastReturnValue = sH.callback(HH, TH)), TH.skipNextObservers)) return !1;
        return !0;
      }
      notifyObserver(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = IH), HH._willBeUnregistered) return;
        const RH = this._eventState;
        RH.mask = EH, RH.skipNextObservers = !1, HH.unregisterOnNextCall && this._deferUnregister(HH), HH.callback(IH, RH);
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0;
      }
      clear() {
        for (; this._observers.length;) {
          const HH = this._observers.pop();
          HH && (HH._remove = null);
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState();
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0;
      }
      clone() {
        const HH = new sH();
        return HH._observers = this._observers.slice(0), HH;
      }
      hasSpecificMask() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const IH of this._observers) if (IH.mask & HH || IH.mask === HH) return !0;
        return !1;
      }
    }
  },
  21900: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => hH,
      f: () => sH
    });
    let RH = [];
    class hH {
      static SetImmediate(HH) {
        0 === RH.length && setTimeout(() => {
          const HH = RH;
          RH = [];
          for (const IH of HH) IH();
        }, 1), RH.push(HH);
      }
    }
    function TH(HH, IH, EH) {
      try {
        if (HH()) return IH(), !0;
      } catch (RH) {
        return null === EH || void 0 === EH || EH(RH), !0;
      }
      return !1;
    }
    const sH = function (HH, IH, EH) {
      let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        sH = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && TH(HH, IH, EH)) return null;
      const eH = setInterval(() => {
        TH(HH, IH, EH) ? clearInterval(eH) : (hH -= RH, hH < 0 && (clearInterval(eH), null === EH || void 0 === EH || EH(new Error("Operation timed out after maximum retries. " + (sH || "")), !0)));
      }, RH);
      return () => clearInterval(eH);
    };
  }
};
//# sourceMappingURL=ug4nu.48.c3474724.chunk.js.map
//# debugId=cea4a832-85b6-5bc2-b385-969b0a899e16