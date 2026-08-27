!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "37a7c7a6-0809-51cd-b17e-38db4777cb88");
  } catch (e) {}
}();
export const id = 51;
export const ids = [51];
export const modules = {
  22128: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => eH,
      f: () => rH,
      i: () => AH,
      k: () => QH,
      l: () => VH,
      o: () => JH,
      s: () => YH,
      t: () => GH
    });
    var RH = EH(22132),
      hH = EH(21832),
      TH = EH(21903),
      sH = EH(22135);
    class eH {
      get sH() {
        return this._isDisposed;
      }
      constructor(HH, IH, EH) {
        let hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          TH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          eH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          GH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          AH = arguments.length > 7 ? arguments[7] : void 0,
          VH = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, sH.b)(), HH && HH.kh ? this._engine = HH.kh().getEngine() : this._engine = HH, this._updatable = EH, this._instanced = eH, this._divisor = AH || 1, this._label = VH, IH instanceof RH.b ? (this._data = null, this._buffer = IH) : (this._data = IH, this._buffer = null), this.byteStride = GH ? hH : hH * Float32Array.BYTES_PER_ELEMENT, TH || this.create();
      }
      createVertexBuffer(HH, IH, EH, RH, hH) {
        let TH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          sH = arguments.length > 6 ? arguments[6] : void 0;
        const eH = TH ? IH : IH * Float32Array.BYTES_PER_ELEMENT,
          AH = RH ? TH ? RH : RH * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new GH(this._engine, this, HH, this._updatable, !0, AH, void 0 === hH ? this._instanced : hH, eH, EH, void 0, void 0, !0, this._divisor || sH);
      }
      isUpdatable() {
        return this._updatable;
      }
      getData() {
        return this._data;
      }
      getBuffer() {
        return this._buffer;
      }
      getStrideSize() {
        return this.byteStride / Float32Array.BYTES_PER_ELEMENT;
      }
      create() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !HH && this._buffer || (HH = HH || this._data, HH && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, HH), this._data = HH) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(HH, this._label), this._data = HH) : this._buffer = this._engine.createVertexBuffer(HH, void 0, this._label)));
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);else {
          if (!this._buffer) return;
          if (this._buffer.uI > 0) return void (this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.uI, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.uI, void 0, this._label));
          hH.e.Warn('Missing data for buffer "'.concat(this._label, '" ').concat(this._buffer ? "(uniqueId: " + this._buffer.uniqueId + ")" : "", ". Buffer reconstruction failed.")), this._buffer = null;
        }
      }
      update(HH) {
        this.create(HH);
      }
      updateDirectly(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, HH, RH ? IH : IH * Float32Array.BYTES_PER_ELEMENT, EH ? EH * this.byteStride : void 0), this._data = 0 === IH && void 0 === EH ? HH : null);
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0);
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null);
      }
    }
    class GH {
      get sH() {
        return this._isDisposed;
      }
      get instanceDivisor() {
        return this._instanceDivisor;
      }
      set instanceDivisor(HH) {
        const IH = 0 != HH;
        this._instanceDivisor = HH, IH !== this._instanced && (this._instanced = IH, this._computeHashCode());
      }
      get _maxVerticesCount() {
        const HH = this.getData();
        return HH ? Array.isArray(HH) ? HH.length / (this.byteStride / 4) - this.byteOffset / 4 : (HH.byteLength - this.byteOffset) / this.byteStride : 0;
      }
      constructor(HH, IH, EH, RH, hH, sH, YH, QH, JH, OH) {
        let rH,
          FH = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          MH = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          NH = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          iI = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        var DH, PH, XH, mI, ZH;
        (this._isDisposed = !1, this.YY = HH, "object" === typeof RH && null !== RH) ? (rH = null !== (DH = RH.updatable) && void 0 !== DH && DH, hH = RH.postponeInternalCreation, sH = RH.stride, YH = RH.instanced, QH = RH.offset, JH = RH.size, OH = RH.type, FH = null !== (PH = RH.normalized) && void 0 !== PH && PH, MH = null !== (XH = RH.useBytes) && void 0 !== XH && XH, NH = null !== (mI = RH.divisor) && void 0 !== mI ? mI : 1, iI = null !== (ZH = RH.takeBufferOwnership) && void 0 !== ZH && ZH, this._label = RH.label) : rH = !!RH;
        if (IH instanceof eH ? (this._buffer = IH, this._ownsBuffer = iI) : (this._buffer = new eH(HH, IH, rH, sH, hH, YH, MH, NH, this._label), this._ownsBuffer = !0), this.uniqueId = GH._Counter++, this._kind = EH, void 0 === OH) {
          const HH = this.getData();
          this.type = HH ? VH(HH) : GH.FLOAT;
        } else this.type = OH;
        const qH = (0, TH.n)(this.type);
        MH ? (this._size = JH || (sH ? sH / qH : AH(EH)), this.byteStride = sH || this._buffer.byteStride || this._size * qH, this.byteOffset = QH || 0) : (this._size = JH || sH || AH(EH), this.byteStride = sH ? sH * qH : this._buffer.byteStride || this._size * qH, this.byteOffset = (QH || 0) * qH), this.normalized = FH, this._instanced = void 0 !== YH && YH, this._instanceDivisor = YH ? NH : 0, this._alignBuffer(), this._computeHashCode();
      }
      static _GetTypeHashIndex(HH) {
        switch (HH) {
          case GH.BYTE:
            return 0;
          case GH.UNSIGNED_BYTE:
            return 1;
          case GH.SHORT:
            return 2;
          case GH.UNSIGNED_SHORT:
            return 3;
          case GH.INT:
            return 4;
          case GH.UNSIGNED_INT:
            return 5;
          case GH.FLOAT:
            return 6;
          case GH.HALF_FLOAT:
            return 7;
          default:
            throw new Error("Invalid vertex buffer type '".concat(HH, "'"));
        }
      }
      _computeHashCode() {
        this.hashCode = (GH._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12);
      }
      _rebuild() {
        var HH;
        null === (HH = this._buffer) || void 0 === HH || HH._rebuild();
      }
      getKind() {
        return this._kind;
      }
      isUpdatable() {
        return this._buffer.isUpdatable();
      }
      getData() {
        return this._buffer.getData();
      }
      getFloatData(HH, IH) {
        const EH = this.getData();
        return EH ? (0, TH.j)(EH, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, HH, IH) : null;
      }
      getBuffer() {
        return this._buffer.getBuffer();
      }
      getWrapperBuffer() {
        return this._buffer;
      }
      getStrideSize() {
        return this.byteStride / (0, TH.n)(this.type);
      }
      getOffset() {
        return this.byteOffset / (0, TH.n)(this.type);
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, TH.n)(this.type) : this._size;
      }
      getIsInstanced() {
        return this._instanced;
      }
      getInstanceDivisor() {
        return this._instanceDivisor;
      }
      create(HH) {
        this._buffer.create(HH), this._alignBuffer();
      }
      update(HH) {
        this._buffer.update(HH), this._alignBuffer();
      }
      updateDirectly(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(HH, IH, void 0, EH), this._alignBuffer();
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0;
      }
      forEach(HH, IH) {
        (0, TH.g)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, HH, this.normalized, (HH, EH) => {
          for (let RH = 0; RH < this._size; RH++) IH(HH[RH], EH + RH);
        });
      }
      _alignBuffer() {}
    }
    function AH(HH) {
      switch (HH) {
        case GH.UVKind:
        case GH.UV2Kind:
        case GH.UV3Kind:
        case GH.UV4Kind:
        case GH.UV5Kind:
        case GH.UV6Kind:
          return 2;
        case GH.NormalKind:
        case GH.PositionKind:
          return 3;
        case GH.ColorKind:
        case GH.ColorInstanceKind:
        case GH.MatricesIndicesKind:
        case GH.MatricesIndicesExtraKind:
        case GH.MatricesWeightsKind:
        case GH.MatricesWeightsExtraKind:
        case GH.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + HH + "'");
      }
    }
    function VH(HH) {
      return HH instanceof Int8Array ? GH.BYTE : HH instanceof Uint8Array ? GH.UNSIGNED_BYTE : HH instanceof Int16Array ? GH.SHORT : HH instanceof Uint16Array ? GH.UNSIGNED_SHORT : HH instanceof Int32Array ? GH.INT : HH instanceof Uint32Array ? GH.UNSIGNED_INT : GH.FLOAT;
    }
    function YH(HH) {
      return (0, TH.n)(HH);
    }
    function QH(HH, IH, EH, RH, hH, sH, eH, GH) {
      (0, TH.g)(HH, IH, EH, RH, hH, sH, eH, (HH, IH) => {
        for (let EH = 0; EH < RH; EH++) GH(HH[EH], IH + EH);
      });
    }
    function JH(HH, IH, EH, RH, hH, sH, eH, GH) {
      return (0, TH.j)(HH, IH, EH, RH, hH, sH, eH, GH);
    }
    GH._Counter = 0, GH.BYTE = 5120, GH.UNSIGNED_BYTE = 5121, GH.SHORT = 5122, GH.UNSIGNED_SHORT = 5123, GH.INT = 5124, GH.UNSIGNED_INT = 5125, GH.FLOAT = 5126, GH.HALF_FLOAT = 5131, GH.PositionKind = "position", GH.NormalKind = "normal", GH.TangentKind = "tangent", GH.UVKind = "uv", GH.UV2Kind = "uv2", GH.UV3Kind = "uv3", GH.UV4Kind = "uv4", GH.UV5Kind = "uv5", GH.UV6Kind = "uv6", GH.ColorKind = "color", GH.ColorInstanceKind = "instanceColor", GH.MatricesIndicesKind = "matricesIndices", GH.MatricesWeightsKind = "matricesWeights", GH.MatricesIndicesExtraKind = "matricesIndicesExtra", GH.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let OH = !1;
    function rH() {
      OH || (OH = !0, GH.DeduceStride = AH, GH.GetDataType = VH, GH.GetTypeByteLength = YH, GH.ForEach = QH, GH.GetFloatData = JH);
    }
  },
  22132: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => RH
    });
    class RH {
      get underlyingResource() {
        return null;
      }
      constructor() {
        this.references = 0, this.uI = 0, this.is32Bits = !1, this.uniqueId = RH._Counter++;
      }
    }
    RH._Counter = 0;
  },
  22231: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => TH
    });
    var RH = EH(21764),
      hH = EH(22128);
    class TH {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null;
      }
      getNormal() {
        var HH;
        let IH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          EH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || EH && !this.pickedMesh.isVerticesDataPresent(hH.t.NormalKind)) return null;
        let TH,
          sH = this.pickedMesh.uO();
        0 === (null === (HH = sH) || void 0 === HH ? void 0 : HH.length) && (sH = null);
        const eH = RH.p.Rh[0],
          GH = RH.p.Rh[1],
          AH = RH.p.Rh[2];
        if (EH) {
          const HH = this.pickedMesh.getVerticesData(hH.t.NormalKind);
          let IH = sH ? RH.x.FromArrayToRef(HH, 3 * sH[3 * this.faceId], eH) : eH.nY(HH[3 * this.faceId * 3], HH[3 * this.faceId * 3 + 1], HH[3 * this.faceId * 3 + 2]),
            EH = sH ? RH.x.FromArrayToRef(HH, 3 * sH[3 * this.faceId + 1], GH) : GH.nY(HH[3 * (3 * this.faceId + 1)], HH[3 * (3 * this.faceId + 1) + 1], HH[3 * (3 * this.faceId + 1) + 2]),
            VH = sH ? RH.x.FromArrayToRef(HH, 3 * sH[3 * this.faceId + 2], AH) : AH.nY(HH[3 * (3 * this.faceId + 2)], HH[3 * (3 * this.faceId + 2) + 1], HH[3 * (3 * this.faceId + 2) + 2]);
          IH = IH.scale(this.bu), EH = EH.scale(this.bv), VH = VH.scale(1 - this.bu - this.bv), TH = new RH.x(IH.x + EH.x + VH.x, IH.y + EH.y + VH.y, IH.z + EH.z + VH.z);
        } else {
          const HH = this.pickedMesh.getVerticesData(hH.t.PositionKind),
            IH = sH ? RH.x.FromArrayToRef(HH, 3 * sH[3 * this.faceId], eH) : eH.nY(HH[3 * this.faceId * 3], HH[3 * this.faceId * 3 + 1], HH[3 * this.faceId * 3 + 2]),
            EH = sH ? RH.x.FromArrayToRef(HH, 3 * sH[3 * this.faceId + 1], GH) : GH.nY(HH[3 * (3 * this.faceId + 1)], HH[3 * (3 * this.faceId + 1) + 1], HH[3 * (3 * this.faceId + 1) + 2]),
            VH = sH ? RH.x.FromArrayToRef(HH, 3 * sH[3 * this.faceId + 2], AH) : AH.nY(HH[3 * (3 * this.faceId + 2)], HH[3 * (3 * this.faceId + 2) + 1], HH[3 * (3 * this.faceId + 2) + 2]),
            YH = IH.subtract(EH),
            QH = VH.subtract(EH);
          TH = RH.x.Cross(YH, QH);
        }
        const VH = (HH, IH) => {
          if (-1 !== this.thinInstanceIndex) {
            const EH = HH._thinInstanceDataStorage.matrixData,
              hH = this.thinInstanceIndex << 4;
            if (EH && EH.length > hH) {
              const HH = RH.p.Matrix[0];
              RH.d.FromArrayToRef(EH, hH, HH), RH.x.TransformNormalToRef(IH, HH, IH);
            }
          }
          let EH = HH.getWorldMatrix();
          HH.nonUniformScaling && (RH.p.Matrix[0].RH(EH), EH = RH.p.Matrix[0], EH.setTranslationFromFloats(0, 0, 0), EH.invert(), EH.transposeToRef(RH.p.Matrix[1]), EH = RH.p.Matrix[1]), RH.x.TransformNormalToRef(IH, EH, IH);
        };
        if (IH && VH(this.pickedMesh, TH), this.ray) {
          const HH = RH.p.Rh[0].RH(TH);
          IH || VH(this.pickedMesh, HH), RH.x.Dot(HH, this.ray.direction) > 0 && TH.negateInPlace();
        }
        return TH.normalize(), TH;
      }
      getTextureCoordinates() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.t.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(HH)) return null;
        const IH = this.pickedMesh.uO();
        if (!IH) return null;
        const EH = this.pickedMesh.getVerticesData(HH);
        if (!EH) return null;
        let TH = RH.t.Qh(EH, 2 * IH[3 * this.faceId]),
          sH = RH.t.Qh(EH, 2 * IH[3 * this.faceId + 1]),
          eH = RH.t.Qh(EH, 2 * IH[3 * this.faceId + 2]);
        return TH = TH.scale(this.bu), sH = sH.scale(this.bv), eH = eH.scale(1 - this.bu - this.bv), new RH.t(TH.x + sH.x + eH.x, TH.y + sH.y + eH.y);
      }
    }
  },
  22135: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => TH
    });
    var RH = EH(22143);
    let hH = !1;
    function TH() {
      hH || (hH = !0, RH.e.prototype.updateDynamicIndexBuffer = function (HH, IH) {
        let EH;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(HH), EH = HH.is32Bits ? IH instanceof Uint32Array ? IH : new Uint32Array(IH) : IH instanceof Uint16Array ? IH : new Uint16Array(IH), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, EH, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding();
      }, RH.e.prototype.updateDynamicVertexBuffer = function (HH, IH, EH, RH) {
        this.bindArrayBuffer(HH), void 0 === EH && (EH = 0);
        const hH = IH.byteLength || IH.length;
        void 0 === RH || RH >= hH && 0 === EH ? IH instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, EH, new Float32Array(IH)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, EH, IH) : IH instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, EH, new Float32Array(IH).subarray(0, RH / 4)) : (IH = ArrayBuffer.isView(IH) ? new Uint8Array(IH.buffer, IH.byteOffset, RH) : new Uint8Array(IH, 0, RH), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, EH, IH)), this._resetVertexBufferBinding();
      });
    }
  },
  22156: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => RH
    });
    class RH {
      get underlyingResource() {
        return this._webGLTexture;
      }
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          IH = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = IH, !HH && (HH = IH.createTexture(), !HH)) throw new Error("Unable to create webGL texture");
        this.set(HH);
      }
      setUsage() {}
      set(HH) {
        this._webGLTexture = HH;
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null;
      }
      addMSAARenderBuffer(HH) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(HH);
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const HH of this._MSAARenderBuffers) this._context.deleteRenderbuffer(HH);
          this._MSAARenderBuffers = null;
        }
      }
      getMSAARenderBuffer() {
        var HH, IH;
        let EH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return null !== (HH = null === (IH = this._MSAARenderBuffers) || void 0 === IH ? void 0 : IH[EH]) && void 0 !== HH ? HH : null;
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset();
      }
    }
  },
  22004: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => NH
    });
    var RH = EH(21786),
      hH = EH(22010),
      TH = EH(21782),
      sH = EH(21832),
      eH = EH(21780),
      GH = EH(21850);
    class AH {
      constructor() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, HH && this.reset();
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty;
      }
      get zOffset() {
        return this._zOffset;
      }
      set zOffset(HH) {
        this._zOffset !== HH && (this._zOffset = HH, this._isZOffsetDirty = !0);
      }
      get zOffsetUnits() {
        return this._zOffsetUnits;
      }
      set zOffsetUnits(HH) {
        this._zOffsetUnits !== HH && (this._zOffsetUnits = HH, this._isZOffsetDirty = !0);
      }
      get cullFace() {
        return this._cullFace;
      }
      set cullFace(HH) {
        this._cullFace !== HH && (this._cullFace = HH, this._isCullFaceDirty = !0);
      }
      get cull() {
        return this._cull;
      }
      set cull(HH) {
        this._cull !== HH && (this._cull = HH, this._isCullDirty = !0);
      }
      get depthFunc() {
        return this._depthFunc;
      }
      set depthFunc(HH) {
        this._depthFunc !== HH && (this._depthFunc = HH, this._isDepthFuncDirty = !0);
      }
      get depthMask() {
        return this._depthMask;
      }
      set depthMask(HH) {
        this._depthMask !== HH && (this._depthMask = HH, this._isDepthMaskDirty = !0);
      }
      get depthTest() {
        return this._depthTest;
      }
      set depthTest(HH) {
        this._depthTest !== HH && (this._depthTest = HH, this._isDepthTestDirty = !0);
      }
      get frontFace() {
        return this._frontFace;
      }
      set frontFace(HH) {
        this._frontFace !== HH && (this._frontFace = HH, this._isFrontFaceDirty = !0);
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1;
      }
      apply(HH) {
        this.isDirty && (this._isCullDirty && (this.cull ? HH.enable(HH.CULL_FACE) : HH.disable(HH.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (HH.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (HH.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? HH.enable(HH.DEPTH_TEST) : HH.disable(HH.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (HH.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (HH.enable(HH.POLYGON_OFFSET_FILL), HH.polygonOffset(this.zOffset, this.zOffsetUnits)) : HH.disable(HH.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (HH.frontFace(this.frontFace), this._isFrontFaceDirty = !1));
      }
    }
    class VH {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty;
      }
      get func() {
        return this._func;
      }
      set func(HH) {
        this._func !== HH && (this._func = HH, this._isStencilFuncDirty = !0);
      }
      get backFunc() {
        return this._func;
      }
      set backFunc(HH) {
        this._backFunc !== HH && (this._backFunc = HH, this._isStencilFuncDirty = !0);
      }
      get funcRef() {
        return this._funcRef;
      }
      set funcRef(HH) {
        this._funcRef !== HH && (this._funcRef = HH, this._isStencilFuncDirty = !0);
      }
      get funcMask() {
        return this._funcMask;
      }
      set funcMask(HH) {
        this._funcMask !== HH && (this._funcMask = HH, this._isStencilFuncDirty = !0);
      }
      get opStencilFail() {
        return this._opStencilFail;
      }
      set opStencilFail(HH) {
        this._opStencilFail !== HH && (this._opStencilFail = HH, this._isStencilOpDirty = !0);
      }
      get opDepthFail() {
        return this._opDepthFail;
      }
      set opDepthFail(HH) {
        this._opDepthFail !== HH && (this._opDepthFail = HH, this._isStencilOpDirty = !0);
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass;
      }
      set opStencilDepthPass(HH) {
        this._opStencilDepthPass !== HH && (this._opStencilDepthPass = HH, this._isStencilOpDirty = !0);
      }
      get backOpStencilFail() {
        return this._backOpStencilFail;
      }
      set backOpStencilFail(HH) {
        this._backOpStencilFail !== HH && (this._backOpStencilFail = HH, this._isStencilOpDirty = !0);
      }
      get backOpDepthFail() {
        return this._backOpDepthFail;
      }
      set backOpDepthFail(HH) {
        this._backOpDepthFail !== HH && (this._backOpDepthFail = HH, this._isStencilOpDirty = !0);
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass;
      }
      set backOpStencilDepthPass(HH) {
        this._backOpStencilDepthPass !== HH && (this._backOpStencilDepthPass = HH, this._isStencilOpDirty = !0);
      }
      get mask() {
        return this._mask;
      }
      set mask(HH) {
        this._mask !== HH && (this._mask = HH, this._isStencilMaskDirty = !0);
      }
      get enabled() {
        return this._enabled;
      }
      set enabled(HH) {
        this._enabled !== HH && (this._enabled = HH, this._isStencilTestDirty = !0);
      }
      constructor() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, HH && this.reset();
      }
      reset() {
        var HH;
        this.stencilMaterial = void 0, null === (HH = this.stencilGlobal) || void 0 === HH || HH.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0;
      }
      apply(HH) {
        var IH;
        if (!HH) return;
        const EH = !this.useStencilGlobalOnly && !(null === (IH = this.stencilMaterial) || void 0 === IH || !IH.enabled);
        this.enabled = EH ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = EH ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = EH ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = EH ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = EH ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = EH ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = EH ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = EH ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = EH ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = EH ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = EH ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = EH ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? HH.enable(HH.STENCIL_TEST) : HH.disable(HH.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (HH.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (HH.stencilFuncSeparate(HH.FRONT, this.func, this.funcRef, this.funcMask), HH.stencilFuncSeparate(HH.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (HH.stencilOpSeparate(HH.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), HH.stencilOpSeparate(HH.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1));
      }
    }
    class YH {
      constructor() {
        this.reset();
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = YH.ALWAYS, this.opStencilFail = YH.KEEP, this.opDepthFail = YH.KEEP, this.opStencilDepthPass = YH.REPLACE, this.backFunc = YH.ALWAYS, this.backOpStencilFail = YH.KEEP, this.backOpDepthFail = YH.KEEP, this.backOpStencilDepthPass = YH.REPLACE;
      }
      get stencilFunc() {
        return this.func;
      }
      set stencilFunc(HH) {
        this.func = HH;
      }
      get stencilBackFunc() {
        return this.backFunc;
      }
      set stencilBackFunc(HH) {
        this.backFunc = HH;
      }
      get stencilFuncRef() {
        return this.funcRef;
      }
      set stencilFuncRef(HH) {
        this.funcRef = HH;
      }
      get stencilFuncMask() {
        return this.funcMask;
      }
      set stencilFuncMask(HH) {
        this.funcMask = HH;
      }
      get stencilOpStencilFail() {
        return this.opStencilFail;
      }
      set stencilOpStencilFail(HH) {
        this.opStencilFail = HH;
      }
      get stencilOpDepthFail() {
        return this.opDepthFail;
      }
      set stencilOpDepthFail(HH) {
        this.opDepthFail = HH;
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass;
      }
      set stencilOpStencilDepthPass(HH) {
        this.opStencilDepthPass = HH;
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail;
      }
      set stencilBackOpStencilFail(HH) {
        this.backOpStencilFail = HH;
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail;
      }
      set stencilBackOpDepthFail(HH) {
        this.backOpDepthFail = HH;
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass;
      }
      set stencilBackOpStencilDepthPass(HH) {
        this.backOpStencilDepthPass = HH;
      }
      get stencilMask() {
        return this.mask;
      }
      set stencilMask(HH) {
        this.mask = HH;
      }
      get stencilTest() {
        return this.enabled;
      }
      set stencilTest(HH) {
        this.enabled = HH;
      }
    }
    YH.ALWAYS = 519, YH.KEEP = 7680, YH.REPLACE = 7681;
    var QH = EH(22026),
      JH = EH(21856),
      OH = EH(22034),
      rH = EH(21828),
      FH = EH(21889);
    function MH(HH, IH) {
      if (IH) {
        const {
          requestAnimationFrame: EH
        } = IH;
        if ("function" === typeof EH) return EH(HH);
      }
      if ((0, rH.m)()) {
        const {
          requestAnimationFrame: EH
        } = IH || window;
        if ("function" === typeof EH) return EH(HH);
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(HH);
      return setTimeout(HH, 16);
    }
    class NH {
      get frameId() {
        return this._frameId;
      }
      get isWebGPU() {
        return this._isWebGPU;
      }
      _getShaderProcessor(HH) {
        return this._shaderProcessor;
      }
      _resetAlphaMode() {
        this._alphaMode.fill(-1), this._alphaEquation.fill(-1);
      }
      get shaderPlatformName() {
        return this._shaderPlatformName;
      }
      _clearEmptyResources() {
        this._emptyTexture = null, this._emptyCubeTexture = null, this._emptyTexture3D = null, this._emptyTexture2DArray = null;
      }
      get xO() {
        return this._useReverseDepthBuffer;
      }
      set xO(HH) {
        HH !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = HH, this._depthCullingState.depthFunc = HH ? 518 : 515);
      }
      setColorWrite(HH) {
        HH !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = HH);
      }
      getColorWrite() {
        return this._colorWrite;
      }
      get depthCullingState() {
        return this._depthCullingState;
      }
      get alphaState() {
        return this._alphaState;
      }
      get stencilState() {
        return this._stencilState;
      }
      get stencilStateComposer() {
        return this._stencilStateComposer;
      }
      _getGlobalDefines(HH) {
        if (HH) return this.isNDCHalfZRange ? HH.IS_NDC_HALF_ZRANGE = "" : delete HH.IS_NDC_HALF_ZRANGE, this.xO ? HH.USE_REVERSE_DEPTHBUFFER = "" : delete HH.USE_REVERSE_DEPTHBUFFER, void (this.useExactSrgbConversions ? HH.USE_EXACT_SRGB_CONVERSIONS = "" : delete HH.USE_EXACT_SRGB_CONVERSIONS);
        {
          let HH = "";
          return this.isNDCHalfZRange && (HH += "#define IS_NDC_HALF_ZRANGE"), this.xO && (HH && (HH += "\n"), HH += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (HH && (HH += "\n"), HH += "#define USE_EXACT_SRGB_CONVERSIONS"), HH;
        }
      }
      _rebuildInternalTextures() {
        const HH = this._internalTexturesCache.slice();
        for (const IH of HH) IH._rebuild();
      }
      _rebuildRenderTargetWrappers() {
        const HH = this._renderTargetWrapperCache.slice();
        for (const EH of HH) {
          var IH;
          null !== (IH = EH.textures) && void 0 !== IH && IH.some(HH => 15 === HH.source) || EH._rebuild();
        }
      }
      _rebuildEffects() {
        for (const HH in this._compiledEffects) {
          const IH = this._compiledEffects[HH];
          IH._pipelineContext = null, IH._prepareEffect();
        }
        hH.c.ResetCache();
      }
      _rebuildGraphicsResources() {
        var HH;
        this.wipeCaches(!0), this._rebuildEffects(), null === (HH = this._rebuildComputeEffects) || void 0 === HH || HH.call(this), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0);
      }
      _flagContextRestored() {
        sH.e.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1;
      }
      _restoreEngineAfterContextLost(HH) {
        setTimeout(() => {
          this._clearEmptyResources();
          const IH = this._depthCullingState.depthTest,
            EH = this._depthCullingState.depthFunc,
            RH = this._depthCullingState.depthMask,
            hH = this._stencilState.stencilTest;
          HH(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = IH, this._depthCullingState.depthFunc = EH, this._depthCullingState.depthMask = RH, this._stencilState.stencilTest = hH, this._flagContextRestored();
        }, 0);
      }
      get sH() {
        return this._isDisposed;
      }
      get snapshotRendering() {
        return !1;
      }
      set snapshotRendering(HH) {}
      get snapshotRenderingMode() {
        return 0;
      }
      set snapshotRenderingMode(HH) {}
      getClassName() {
        return "AbstractEngine";
      }
      get emptyTexture() {
        return this._emptyTexture || (this._emptyTexture = this.createRawTexture(new Uint8Array(4), 1, 1, 5, !1, !1, 1)), this._emptyTexture;
      }
      get emptyTexture3D() {
        return this._emptyTexture3D || (this._emptyTexture3D = this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture3D;
      }
      get emptyTexture2DArray() {
        return this._emptyTexture2DArray || (this._emptyTexture2DArray = this.createRawTexture2DArray(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture2DArray;
      }
      get emptyCubeTexture() {
        if (!this._emptyCubeTexture) {
          const HH = new Uint8Array(4),
            IH = [HH, HH, HH, HH, HH, HH];
          this._emptyCubeTexture = this.createRawCubeTexture(IH, 1, 5, 0, !1, !1, 1);
        }
        return this._emptyCubeTexture;
      }
      set framebufferDimensionsObject(HH) {
        this._framebufferDimensionsObject = HH;
      }
      get activeRenderLoops() {
        return this._activeRenderLoops;
      }
      stopRenderLoop(HH) {
        if (!HH) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const IH = this._activeRenderLoops.indexOf(HH);
        IH >= 0 && (this._activeRenderLoops.splice(IH, 1), 0 == this._activeRenderLoops.length && this._cancelFrame());
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: HH
            } = this.customAnimationFrameRequester;
            HH && HH(this.customAnimationFrameRequester.eH), delete this.customAnimationFrameRequester.eH;
          }
        } else if (0 !== this._frameHandler) {
          const HH = this._frameHandler;
          if (this._frameHandler = 0, (0, rH.m)()) {
            const {
              cancelAnimationFrame: IH
            } = this.getHostWindow() || window;
            if ("function" === typeof IH) return IH(HH);
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(HH);
          return clearTimeout(HH);
        }
      }
      hM() {
        this.onBeginFrameObservable.notifyObservers(this);
      }
      TM() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this);
      }
      get maxFPS() {
        return this._maxFPS;
      }
      set maxFPS(HH) {
        this._maxFPS = HH, void 0 !== HH && (this._minFrameTime = HH <= 0 ? Number.MAX_VALUE : 1e3 / HH);
      }
      _isOverFrameTime(HH) {
        if (!HH || void 0 === this._maxFPS) return !1;
        const IH = HH - this._lastFrameTime;
        return this._lastFrameTime = HH, this._renderAccumulator += IH, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1);
      }
      _processFrame(HH) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(HH)) {
          let HH = !0;
          (this.sH || !this.renderEvenInBackground && this._windowIsBackground) && (HH = !1), HH && (this.hM(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.TM());
        }
      }
      _renderLoop(HH) {
        this._processFrame(HH), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop();
      }
      _renderFrame() {
        for (let HH = 0; HH < this._activeRenderLoops.length; HH++) {
          (0, this._activeRenderLoops[HH])();
        }
      }
      _renderViews() {
        return !1;
      }
      _queueNewFrame(HH, IH) {
        return MH(HH, IH);
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.eH = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.eH) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow());
      }
      runRenderLoop(HH) {
        -1 === this._activeRenderLoops.indexOf(HH) && (this._activeRenderLoops.push(HH), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop());
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest;
      }
      setDepthBuffer(HH) {
        this._depthCullingState.depthTest = HH;
      }
      setZOffset(HH) {
        this._depthCullingState.zOffset = this.xO ? -HH : HH;
      }
      getZOffset() {
        const HH = this._depthCullingState.zOffset;
        return this.xO ? -HH : HH;
      }
      setZOffsetUnits(HH) {
        this._depthCullingState.zOffsetUnits = this.xO ? -HH : HH;
      }
      getZOffsetUnits() {
        const HH = this._depthCullingState.zOffsetUnits;
        return this.xO ? -HH : HH;
      }
      getHostWindow() {
        return (0, rH.m)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null;
      }
      get compatibilityMode() {
        return this._compatibilityMode;
      }
      set compatibilityMode(HH) {
        this._compatibilityMode = !0;
      }
      _rebuildTextures() {
        for (const HH of this.scenes) HH._rebuildTextures();
        for (const HH of this._virtualScenes) HH._rebuildTextures();
      }
      _releaseRenderTargetWrapper(HH) {
        const IH = this._renderTargetWrapperCache.indexOf(HH);
        -1 !== IH && this._renderTargetWrapperCache.splice(IH, 1);
      }
      get currentViewport() {
        return this._cachedViewport;
      }
      setViewport(HH, IH, EH) {
        const RH = IH || this.getRenderWidth(),
          hH = EH || this.getRenderHeight(),
          TH = HH.x || 0,
          sH = HH.y || 0;
        this._cachedViewport = HH, this._viewport(TH * RH, sH * hH, RH * HH.width, hH * HH.height);
      }
      createCanvasImage() {
        return document.createElement("img");
      }
      createCanvasPath2D(HH) {
        return new Path2D(HH);
      }
      get description() {
        let HH = this.name + this.version;
        return this._caps.parallelShaderCompile && (HH += " - Parallel shader compilation"), HH;
      }
      _createTextureBase(HH, IH, EH, RH) {
        let hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          eH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          GH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          AH = arguments.length > 7 ? arguments[7] : void 0,
          VH = arguments.length > 8 ? arguments[8] : void 0,
          YH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          QH = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          JH = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          rH = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          FH = arguments.length > 13 ? arguments[13] : void 0,
          MH = arguments.length > 14 ? arguments[14] : void 0,
          iI = arguments.length > 15 ? arguments[15] : void 0;
        const DH = "data:" === (HH = HH || "").substring(0, 5),
          PH = "blob:" === HH.substring(0, 5),
          XH = DH && -1 !== HH.indexOf(";base64,"),
          mI = QH || new OH.b(this, 1);
        mI !== QH && (mI.label = HH.substring(0, 60));
        const ZH = HH;
        !this._transformTextureUrl || XH || QH || YH || (HH = this._transformTextureUrl(HH)), ZH !== HH && (mI._originalUrl = ZH);
        const qH = HH.lastIndexOf(".");
        let LH = rH || (qH > -1 ? HH.substring(qH).toLowerCase() : "");
        LH.indexOf("?") > -1 && (LH = LH.split("?")[0]);
        const gH = NH.GetCompatibleTextureLoader(LH, FH);
        RH && RH.addPendingData(mI), mI.url = HH, mI.generateMipMaps = !IH, mI.samplingMode = hH, mI.invertY = EH, mI._useSRGBBuffer = this._getUseSRGBBuffer(!!iI, IH), this._doNotHandleContextLost || (mI._buffer = YH);
        let yH = null;
        eH && !QH && (yH = mI.onLoadedObservable.add(eH)), QH || this._internalTexturesCache.push(mI);
        const oH = (EH, QH) => {
          RH && RH.removePendingData(mI), HH === ZH ? (yH && mI.onLoadedObservable.remove(yH), TH.e.UseFallbackTexture && HH !== TH.e.FallbackTexture && this._createTextureBase(TH.e.FallbackTexture, IH, mI.invertY, RH, hH, null, GH, AH, VH, YH, mI), EH = (EH || "Unknown error") + (TH.e.UseFallbackTexture ? " - Fallback texture was used" : ""), mI.onErrorObservable.notifyObservers({
            message: EH,
            exception: QH
          }), GH && GH(EH, QH)) : (sH.e.Warn("Failed to load ".concat(HH, ", falling back to ").concat(ZH)), this._createTextureBase(ZH, IH, mI.invertY, RH, hH, eH, GH, AH, VH, YH, mI, JH, rH, FH, MH, iI));
        };
        if (gH) {
          const IH = async HH => {
            (await gH).loadData(HH, mI, (HH, IH, EH, TH, sH, eH) => {
              eH ? oH("TextureLoader failed to load data") : AH(mI, LH, RH, {
                width: HH,
                height: IH
              }, mI.invertY, !EH, TH, () => (sH(), !1), hH);
            }, MH);
          };
          if (YH) {
            const HH = async HH => {
              try {
                await IH(HH);
              } catch (EH) {
                oH("Failed to parse texture data", EH);
              }
            };
            YH instanceof ArrayBuffer ? HH(new Uint8Array(YH)) : ArrayBuffer.isView(YH) ? HH(YH) : GH && GH("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null);
          } else this._loadFile(HH, async HH => {
            try {
              await IH(new Uint8Array(HH));
            } catch (EH) {
              oH("Failed to parse texture data", EH);
            }
          }, void 0, RH ? RH.offlineProvider : void 0, !0, (HH, IH) => {
            oH("Unable to load " + (HH && HH.responseURL, IH));
          });
        } else {
          const EH = HH => {
            PH && !this._doNotHandleContextLost && (mI._buffer = HH), AH(mI, LH, RH, HH, mI.invertY, IH, !1, VH, hH);
          };
          !DH || XH ? YH && ("string" === typeof YH.decoding || YH.close) ? EH(YH) : NH._FileToolsLoadImage(HH || "", EH, oH, RH ? RH.offlineProvider : null, FH, mI.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof YH || YH instanceof ArrayBuffer || ArrayBuffer.isView(YH) || YH instanceof Blob ? NH._FileToolsLoadImage(YH, EH, oH, RH ? RH.offlineProvider : null, FH, mI.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : YH && EH(YH);
        }
        return mI;
      }
      _rebuildBuffers() {
        for (const HH of this._uniformBuffers) HH._rebuildAfterContextLost();
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed);
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, rH.e)() ? document : null;
      }
      getLoadedTexturesCache() {
        return this._internalTexturesCache;
      }
      clearInternalTexturesCache() {
        this._internalTexturesCache.length = 0;
      }
      getCaps() {
        return this._caps;
      }
      resetTextureCache() {
        for (const HH in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, HH) && (this._boundTexturesCache[HH] = null);
        this._currentTextureChannel = -1;
      }
      get name() {
        return this._name;
      }
      set name(HH) {
        this._name = HH;
      }
      static get NpmPackage() {
        return "babylonjs@9.19.0";
      }
      static get Version() {
        return "9.19.0";
      }
      getRenderingCanvas() {
        return this._renderingCanvas;
      }
      getAudioContext() {
        return this._audioContext;
      }
      getAudioDestination() {
        return this._audioDestination;
      }
      setHardwareScalingLevel(HH) {
        this._hardwareScalingLevel = HH, this.resize();
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel;
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost;
      }
      set doNotHandleContextLost(HH) {
        this._doNotHandleContextLost = HH;
      }
      get isStencilEnable() {
        return this._isStencilEnable;
      }
      getCreationOptions() {
        return this._creationOptions;
      }
      constructor(HH, IH, EH) {
        var hH, sH, JH, OH, FH, MH, NH, iI, DH, PH, XH;
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new AH(), this._stencilStateComposer = new VH(), this._stencilState = new YH(), this._alphaState = new QH.e(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array(), this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new RH.e(), this.onCanvasFocusObservable = new RH.e(), this.onNewSceneAddedObservable = new RH.e(), this.onResizeObservable = new RH.e(), this.onCanvasPointerOutObservable = new RH.e(), this.onEffectErrorObservable = new RH.e(), this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array(), this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array(), this.onBeforeTextureInitObservable = new RH.e(), this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array(), this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = HH => this._renderLoop(HH), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new RH.e(), this.onAfterShaderCompilationObservable = new RH.e(), this.onBeginFrameObservable = new RH.e(), this.onEndFrameObservable = new RH.e(), this._transformTextureUrl = null, this._uniformBuffers = new Array(), this._storageBuffers = new Array(), this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new RH.e(), this.onContextRestoredObservable = new RH.e(), this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.AM = new RH.e(), this.onReleaseEffectsObservable = new RH.e(), TH.e.Instances.push(this), this.startTime = GH.d.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, eH.d.SetMatrixPrecision(!!IH.useLargeWorldRendering || !!IH.useHighPrecisionMatrix), (0, rH.i)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), IH.antialias = null !== HH && void 0 !== HH ? HH : IH.antialias, IH.deterministicLockstep = null !== (hH = IH.deterministicLockstep) && void 0 !== hH && hH, IH.lockstepMaxSteps = null !== (sH = IH.lockstepMaxSteps) && void 0 !== sH ? sH : 4, IH.timeStep = null !== (JH = IH.timeStep) && void 0 !== JH ? JH : 1 / 60, IH.LF = null === (OH = IH.LF) || void 0 === OH || OH, this._audioContext = null !== (FH = null === (MH = IH.audioEngineOptions) || void 0 === MH ? void 0 : MH.audioContext) && void 0 !== FH ? FH : null, this._audioDestination = null !== (NH = null === (iI = IH.audioEngineOptions) || void 0 === iI ? void 0 : iI.audioDestination) && void 0 !== NH ? NH : null, this.premultipliedAlpha = null === (DH = IH.premultipliedAlpha) || void 0 === DH || DH, this._doNotHandleContextLost = !!IH.doNotHandleContextLost, this._isStencilEnable = !!IH.LF, this.useExactSrgbConversions = null !== (PH = IH.useExactSrgbConversions) && void 0 !== PH && PH, this.canvasTabIndex = null !== (XH = IH.canvasTabIndex) && void 0 !== XH ? XH : this.canvasTabIndex;
        const mI = (0, rH.m)() && window.devicePixelRatio || 1,
          ZH = IH.limitDeviceRatio || mI;
        EH = EH || IH.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = EH, this._hardwareScalingLevel = EH ? 1 / Math.min(ZH, mI) : 1, this._lastDevicePixelRatio = mI, this._creationOptions = IH;
      }
      resize() {
        let HH,
          IH,
          EH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const HH = (0, rH.m)() && window.devicePixelRatio || 1,
            IH = this._lastDevicePixelRatio / HH;
          this._lastDevicePixelRatio = HH, this._hardwareScalingLevel *= IH;
        }
        if ((0, rH.m)() && (0, rH.e)()) {
          if (this._renderingCanvas) {
            var RH, hH;
            const EH = null === (RH = (hH = this._renderingCanvas).getBoundingClientRect) || void 0 === RH ? void 0 : RH.call(hH);
            HH = this._renderingCanvas.clientWidth || (null === EH || void 0 === EH ? void 0 : EH.width) || this._renderingCanvas.width * this._hardwareScalingLevel || 100, IH = this._renderingCanvas.clientHeight || (null === EH || void 0 === EH ? void 0 : EH.height) || this._renderingCanvas.height * this._hardwareScalingLevel || 100;
          } else HH = window.innerWidth, IH = window.innerHeight;
        } else HH = this._renderingCanvas ? this._renderingCanvas.width : 100, IH = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(HH / this._hardwareScalingLevel, IH / this._hardwareScalingLevel, EH);
      }
      setSize(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (HH |= 0, IH |= 0, !EH && this._renderingCanvas.width === HH && this._renderingCanvas.height === IH) return !1;
        if (this._renderingCanvas.width = HH, this._renderingCanvas.height = IH, this.scenes) {
          for (let HH = 0; HH < this.scenes.length; HH++) {
            const IH = this.scenes[HH];
            for (let HH = 0; HH < IH.cameras.length; HH++) {
              IH.cameras[HH]._currentRenderId = 0;
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this);
        }
        return !0;
      }
      createRawTexture(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH, VH, YH) {
        throw (0, JH.n)("engine.rawTexture");
      }
      createRawCubeTexture(HH, IH, EH, RH, hH, TH, sH, eH) {
        throw (0, JH.n)("engine.rawTexture");
      }
      createRawTexture3D(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH, VH) {
        throw (0, JH.n)("engine.rawTexture");
      }
      createRawTexture2DArray(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH, VH, YH) {
        throw (0, JH.n)("engine.rawTexture");
      }
      _sharedInit(HH) {
        this._renderingCanvas = HH;
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const HH = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== HH.indexOf("Mobile") || -1 !== HH.indexOf("Mac") && (0, rH.e)() && "ontouchend" in document;
        }, this._checkForMobile(), (0, rH.m)() && window.addEventListener("resize", this._checkForMobile));
      }
      createVideoElement(HH) {
        return document.createElement("video");
      }
      _reportDrawCall() {
        var HH;
        let IH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        null === (HH = this._drawCalls) || void 0 === HH || HH.addCount(IH, !1);
      }
      getFps() {
        return this._fps;
      }
      getDeltaTime() {
        return this._deltaTime;
      }
      isDeterministicLockStep() {
        return this._deterministicLockstep;
      }
      getLockstepMaxSteps() {
        return this._lockstepMaxSteps;
      }
      getTimeStep() {
        return 1e3 * this._timeStep;
      }
      _createImageBitmapFromSource(HH, IH) {
        throw new Error("createImageBitmapFromSource is not implemented");
      }
      createImageBitmap(HH, IH) {
        return createImageBitmap(HH, IH);
      }
      resizeImageBitmap(HH, IH, EH) {
        throw new Error("resizeImageBitmap is not implemented");
      }
      getFontOffset(HH) {
        throw new Error("getFontOffset is not implemented");
      }
      static _CreateCanvas(HH, IH) {
        if ("undefined" === typeof document) return new OffscreenCanvas(HH, IH);
        const EH = document.createElement("canvas");
        return EH.width = HH, EH.height = IH, EH;
      }
      createCanvas(HH, IH) {
        return NH._CreateCanvas(HH, IH);
      }
      static _FileToolsLoadImage(HH, IH, EH, RH, hH, TH, sH) {
        if (!FH.b.loadImage) throw (0, JH.n)("FileTools");
        return FH.b.loadImage(HH, IH, EH, RH, hH, TH, sH);
      }
      _loadFile(HH, IH, EH, RH, hH, TH) {
        const sH = (0, FH.e)(HH, IH, EH, RH, hH, TH);
        return this._activeRequests.push(sH), sH.onCompleteObservable.add(() => {
          const HH = this._activeRequests.indexOf(sH);
          -1 !== HH && this._activeRequests.splice(HH, 1);
        }), sH;
      }
      static _FileToolsLoadFile(HH, IH, EH, RH, hH, TH) {
        if (FH.b.loadFile) return FH.b.loadFile(HH, IH, EH, RH, hH, TH);
        throw (0, JH.n)("FileTools");
      }
      dispose() {
        var HH;
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        null === (HH = this.releaseComputeEffects) || void 0 === HH || HH.call(this), hH.c.ResetCache();
        for (const EH of this._activeRequests) EH.abort();
        this._boundRenderFunction = null, this.AM.notifyObservers(this), this.AM.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, rH.m)() && window.removeEventListener("resize", this._checkForMobile);
        const IH = TH.e.Instances.indexOf(this);
        IH >= 0 && TH.e.Instances.splice(IH, 1), TH.e.Instances.length || (TH.e.OnEnginesDisposedObservable.notifyObservers(this), TH.e.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear();
      }
      static DefaultLoadingScreenFactory(HH) {
        throw (0, JH.n)("LoadingScreen");
      }
      static MarkAllMaterialsAsDirty(HH, IH) {
        for (let EH = 0; EH < TH.e.Instances.length; EH++) {
          const RH = TH.e.Instances[EH];
          for (let EH = 0; EH < RH.scenes.length; EH++) RH.scenes[EH].markAllMaterialsAsDirty(HH, IH);
        }
      }
      static GetCompatibleTextureLoader(HH, IH) {
        return null;
      }
    }
    NH._RenderPassIdCounter = 0, NH._RescalePostProcessFactory = null, NH.CollisionsEpsilon = .001, NH.QueueNewFrame = MH;
  },
  22143: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => PH
    });
    var RH = EH(22010),
      hH = EH(22023),
      TH = EH(22004),
      sH = EH(22147),
      eH = EH(21832),
      GH = EH(21828);
    class AH {
      constructor() {
        this.shaderLanguage = 0;
      }
      postProcessor(HH, IH, EH, RH, hH) {
        if (hH.drawBuffersExtensionDisabled) {
          const IH = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          HH = HH.replace(IH, "");
        }
        return HH;
      }
    }
    const VH = /(flat\s)?\s*varying\s*.*/;
    class YH {
      constructor() {
        this.shaderLanguage = 0;
      }
      attributeProcessor(HH) {
        return HH.replace("attribute", "in");
      }
      varyingCheck(HH, IH) {
        return VH.test(HH);
      }
      varyingProcessor(HH, IH) {
        return HH.replace("varying", IH ? "in" : "out");
      }
      postProcessor(HH, IH, EH) {
        const RH = -1 !== HH.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (HH = (HH = HH.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), EH) {
          const EH = -1 !== HH.search(/layout *\(location *= *0\) *out/g),
            hH = -1 !== IH.indexOf("#define DUAL_SOURCE_BLENDING"),
            TH = hH ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          hH && (HH = "#extension GL_EXT_blend_func_extended : require\n" + HH), HH = (HH = (HH = (HH = (HH = (HH = (HH = HH.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (RH || EH ? "" : TH) + "void main(");
        } else {
          IH.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (HH = "invariant gl_Position;\n" + HH);
          if (-1 !== IH.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + HH;
        }
        return HH;
      }
    }
    var QH = EH(22153),
      JH = EH(21930),
      OH = EH(22156),
      rH = EH(22034),
      FH = EH(21889),
      MH = EH(22019),
      NH = EH(22162),
      iI = EH(22026);
    class DH {}
    class PH extends TH.c {
      get name() {
        return this._name;
      }
      set name(HH) {
        this._name = HH;
      }
      get version() {
        return this._webGLVersion;
      }
      static get ShadersRepository() {
        return RH.c.ShadersRepository;
      }
      static set ShadersRepository(HH) {
        RH.c.ShadersRepository = HH;
      }
      get supportsUniformBuffers() {
        return this.webGLVersion > 1 && !this.disableUniformBuffers;
      }
      get needPOTTextures() {
        return this._webGLVersion < 2 || this.forcePOTTextures;
      }
      get _supportsHardwareTextureRescaling() {
        return !1;
      }
      snapshotRenderingReset() {
        this.snapshotRendering = !1;
      }
      constructor(HH, IH, EH, RH) {
        if (EH = EH || {}, super(null !== IH && void 0 !== IH ? IH : EH.antialias, EH, RH), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array(), this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array(), this._currentInstanceLocations = new Array(), this._currentInstanceBuffers = new Array(), this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array(), this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !HH) return;
        let TH;
        if (HH.getContext) {
          if (TH = HH, void 0 === EH.mh && (EH.mh = !1), void 0 === EH.xrCompatible && (EH.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const HH = navigator.userAgent;
            for (const IH of PH.ExceptionList) {
              const RH = IH.key,
                hH = IH.targets;
              if (new RegExp(RH).test(HH)) {
                if (IH.capture && IH.captureConstraint) {
                  const EH = IH.capture,
                    RH = IH.captureConstraint,
                    hH = new RegExp(EH).exec(HH);
                  if (hH && hH.length > 0) {
                    if (parseInt(hH[hH.length - 1]) >= RH) continue;
                  }
                }
                for (const HH of hH) switch (HH) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    EH.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1;
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
            (0, hH.t)(this._gl);
          } : (this._onContextLost = HH => {
            HH.preventDefault(), this._contextWasLost = !0, (0, hH.t)(this._gl), eH.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this);
          }, this._onContextRestored = () => {
            this._restoreEngineAfterContextLost(() => this._initGLContext());
          }, TH.addEventListener("webglcontextrestored", this._onContextRestored, !1), EH.powerPreference = EH.powerPreference || "high-performance"), TH.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (EH.xrCompatible = !1), !EH.disableWebGL2Support) try {
            this._gl = TH.getContext("webgl2", EH) || TH.getContext("experimental-webgl2", EH), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"));
          } catch (VH) {}
          if (!this._gl) {
            if (!TH) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = TH.getContext("webgl", EH) || TH.getContext("experimental-webgl", EH);
            } catch (VH) {
              throw new Error("WebGL not supported", {
                cause: VH
              });
            }
          }
          if (!this._gl) throw new Error("WebGL not supported");
        } else {
          this._gl = HH, TH = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const IH = this._gl.getContextAttributes();
          IH && (EH.LF = IH.LF);
        }
        this._sharedInit(TH), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== EH.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = EH.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let hH = 0; hH < this._caps.maxVertexAttribs; hH++) this._currentBufferPointers[hH] = new DH();
        this._shaderProcessor = this.webGLVersion > 1 ? new YH() : new AH();
        const sH = "Babylon.js v".concat(PH.Version);
        eH.e.Log(sH + " - ".concat(this.description)), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", sH);
        const GH = (0, hH.u)(this._gl);
        GH.validateShaderPrograms = this.validateShaderPrograms, GH.parallelShaderCompile = this._caps.parallelShaderCompile;
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources();
      }
      _getShaderProcessingContext(HH) {
        return null;
      }
      areAllEffectsReady() {
        for (const HH in this._compiledEffects) {
          if (!this._compiledEffects[HH].isReady()) return !1;
        }
        return !0;
      }
      _initGLContext() {
        this._caps = {
          maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
          maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
          maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
          maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
          maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
          maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
          maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
          maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
          maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
          maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
          maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
          shaderFloatPrecision: 0,
          parallelShaderCompile: this._gl.getExtension("KHR_parallel_shader_compile") || void 0,
          standardDerivatives: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_standard_derivatives"),
          maxAnisotropy: 1,
          astc: this._gl.getExtension("WEBGL_compressed_texture_astc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_astc"),
          bptc: this._gl.getExtension("EXT_texture_compression_bptc") || this._gl.getExtension("WEBKIT_EXT_texture_compression_bptc"),
          s3tc: this._gl.getExtension("WEBGL_compressed_texture_s3tc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),
          s3tc_srgb: this._gl.getExtension("WEBGL_compressed_texture_s3tc_srgb") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc_srgb"),
          pvrtc: this._gl.getExtension("WEBGL_compressed_texture_pvrtc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
          etc1: this._gl.getExtension("WEBGL_compressed_texture_etc1") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"),
          etc2: this._gl.getExtension("WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBGL_compressed_texture_es3_0"),
          textureAnisotropicFilterExtension: this._gl.getExtension("EXT_texture_filter_anisotropic") || this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic"),
          uintIndices: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_element_index_uint"),
          fragmentDepthSupported: this._webGLVersion > 1 || null !== this._gl.getExtension("EXT_frag_depth"),
          highPrecisionShaderSupported: !1,
          timerQuery: this._gl.getExtension("EXT_disjoint_timer_query_webgl2") || this._gl.getExtension("EXT_disjoint_timer_query"),
          supportOcclusionQuery: this._webGLVersion > 1,
          canUseTimestampForTimerQuery: !1,
          drawBuffersExtension: !1,
          maxMSAASamples: 1,
          colorBufferFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_float")),
          blendFloat: null !== this._gl.getExtension("EXT_float_blend"),
          supportFloatTexturesResolve: !1,
          rg11b10ufColorRenderable: !1,
          colorBufferHalfFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_half_float")),
          textureFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_float")),
          textureHalfFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_half_float")),
          textureHalfFloatRender: !1,
          textureFloatLinearFiltering: !1,
          textureFloatRender: !1,
          textureHalfFloatLinearFiltering: !1,
          vertexArrayObject: !1,
          instancedArrays: !1,
          textureLOD: !!(this._webGLVersion > 1 || this._gl.getExtension("EXT_shader_texture_lod")),
          texelFetch: 1 !== this._webGLVersion,
          blendMinMax: !1,
          multiview: this._gl.getExtension("OVR_multiview2"),
          oculusMultiview: this._gl.getExtension("OCULUS_multiview"),
          depthTextureExtension: !1,
          canUseGLInstanceID: this._webGLVersion > 1,
          canUseGLVertexID: this._webGLVersion > 1,
          supportComputeShaders: !1,
          supportSRGBBuffers: !1,
          supportTransformFeedbacks: this._webGLVersion > 1,
          textureMaxLevel: this._webGLVersion > 1,
          texture2DArrayMaxLayerCount: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_ARRAY_TEXTURE_LAYERS) : 128,
          disableMorphTargetTexture: !1,
          textureNorm16: !!this._gl.getExtension("EXT_texture_norm16"),
          blendParametersPerTarget: !1,
          dualSourceBlending: !1,
          supportReadWriteStorageTextures: !1
        }, this._caps.supportFloatTexturesResolve = this._caps.colorBufferFloat, this._caps.rg11b10ufColorRenderable = this._caps.colorBufferFloat, this._glVersion = this._gl.getParameter(this._gl.VERSION);
        const HH = this._gl.getExtension("WEBGL_debug_renderer_info");
        var IH;
        (null != HH && (this._glRenderer = this._gl.getParameter(HH.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(HH.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery) && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (null !== (IH = this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT)) && void 0 !== IH ? IH : 0) > 0);
        this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const EH = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!EH, this._alphaState = new iI.e(this._caps.blendParametersPerTarget), EH && (this._gl.blendEquationSeparateIndexed = EH.blendEquationSeparateiOES.bind(EH), this._gl.blendEquationIndexed = EH.blendEquationiOES.bind(EH), this._gl.blendFuncSeparateIndexed = EH.blendFuncSeparateiOES.bind(EH), this._gl.blendFuncIndexed = EH.blendFunciOES.bind(EH), this._gl.colorMaskIndexed = EH.colorMaskiOES.bind(EH), this._gl.disableIndexed = EH.disableiOES.bind(EH), this._gl.enableIndexed = EH.enableiOES.bind(EH)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);else {
          const HH = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== HH) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = HH.drawBuffersWEBGL.bind(HH), this._caps.maxDrawBuffers = this._gl.getParameter(HH.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let IH = 0; IH < 16; IH++) this._gl["COLOR_ATTACHMENT" + IH + "_WEBGL"] = HH["COLOR_ATTACHMENT" + IH + "_WEBGL"];
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;else {
          const HH = this._gl.getExtension("WEBGL_depth_texture");
          null != HH && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = HH.UNSIGNED_INT_24_8_WEBGL);
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;else {
          const HH = this._gl.getExtension("OES_vertex_array_object");
          null != HH && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = HH.createVertexArrayOES.bind(HH), this._gl.bindVertexArray = HH.bindVertexArrayOES.bind(HH), this._gl.deleteVertexArray = HH.deleteVertexArrayOES.bind(HH));
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;else {
          const HH = this._gl.getExtension("ANGLE_instanced_arrays");
          null != HH ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = HH.drawArraysInstancedANGLE.bind(HH), this._gl.drawElementsInstanced = HH.drawElementsInstancedANGLE.bind(HH), this._gl.vertexAttribDivisor = HH.vertexAttribDivisorANGLE.bind(HH)) : this._caps.instancedArrays = !1;
        }
        if (this._gl.getShaderPrecisionFormat) {
          const HH = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            IH = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (HH && IH && (this._caps.highPrecisionShaderSupported = 0 !== HH.precision && 0 !== IH.precision, this._caps.shaderFloatPrecision = Math.min(HH.precision, IH.precision)), !this._shouldUseHighPrecisionShader) {
            const HH = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              IH = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            HH && IH && (this._caps.shaderFloatPrecision = Math.min(HH.precision, IH.precision));
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10);
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;else {
          const HH = this._gl.getExtension("EXT_blend_minmax");
          null != HH && (this._caps.blendMinMax = !0, this._gl.MAX = HH.MAX_EXT, this._gl.MIN = HH.MIN_EXT);
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };else {
            const HH = this._gl.getExtension("EXT_sRGB");
            null != HH && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: HH.SRGB_EXT,
              SRGB8: HH.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: HH.SRGB_ALPHA_EXT
            });
          }
          if (this._creationOptions) {
            const HH = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== HH && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && HH);
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let RH = 0; RH < this._maxSimultaneousTextures; RH++) this._nextFreeTextureSlots.push(RH);
        "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0);
      }
      _initFeatures() {
        this._features = {
          forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
          supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
          supportDepthStencilTexture: 1 !== this._webGLVersion,
          supportShadowSamplers: 1 !== this._webGLVersion,
          uniformBufferHardCheckMatrix: !1,
          allowTexturePrefiltering: 1 !== this._webGLVersion,
          trackUbosInFrame: !1,
          checkUbosContentBeforeUpload: !1,
          supportCSM: 1 !== this._webGLVersion,
          basisNeedsPOT: 1 === this._webGLVersion,
          support3DTextures: 1 !== this._webGLVersion,
          needTypeSuffixInShaderConstants: 1 !== this._webGLVersion,
          supportMSAA: 1 !== this._webGLVersion,
          supportSSAO2: 1 !== this._webGLVersion,
          supportIBLShadows: 1 !== this._webGLVersion,
          supportExtendedTextureFormats: 1 !== this._webGLVersion,
          supportSwitchCaseInShader: 1 !== this._webGLVersion,
          supportSyncTextureRead: !0,
          needsInvertingBitmap: !0,
          useUBOBindingCache: !0,
          needShaderCodeInlining: !1,
          needToAlwaysBindUniformBuffers: !1,
          supportRenderPasses: !1,
          supportSpriteInstancing: !0,
          forceVertexBufferStrideAndOffsetMultiple4Bytes: !1,
          _checkNonFloatVertexBuffersDontRecreatePipelineContext: !1
        };
      }
      get webGLVersion() {
        return this._webGLVersion;
      }
      getClassName() {
        return "ThinEngine";
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const HH = this._workingCanvas.getContext("2d");
        HH && (this._workingContext = HH);
      }
      getInfo() {
        return this.getGlInfo();
      }
      getGlInfo() {
        return {
          vendor: this._glVendor,
          BE: this._glRenderer,
          version: this._glVersion
        };
      }
      extractDriverInfo() {
        const HH = this.getGlInfo();
        return HH && HH.BE ? HH.BE : "";
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth;
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight;
      }
      clear(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const TH = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = TH;
        let sH = 0;
        if (IH && HH) {
          let IH = !0;
          if (this._currentRenderTarget) {
            var eH;
            const EH = null === (eH = this._currentRenderTarget.texture) || void 0 === eH ? void 0 : eH.format;
            if (8 === EH || 9 === EH || 10 === EH || 11 === EH) {
              var GH;
              const EH = null === (GH = this._currentRenderTarget.texture) || void 0 === GH ? void 0 : GH.type;
              7 === EH || 5 === EH ? (PH._TempClearColorUint32[0] = 255 * HH.r, PH._TempClearColorUint32[1] = 255 * HH.g, PH._TempClearColorUint32[2] = 255 * HH.b, PH._TempClearColorUint32[3] = 255 * HH.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, PH._TempClearColorUint32), IH = !1) : (PH._TempClearColorInt32[0] = 255 * HH.r, PH._TempClearColorInt32[1] = 255 * HH.g, PH._TempClearColorInt32[2] = 255 * HH.b, PH._TempClearColorInt32[3] = 255 * HH.a, this._gl.clearBufferiv(this._gl.COLOR, 0, PH._TempClearColorInt32), IH = !1);
            }
          }
          IH && (this._gl.clearColor(HH.r, HH.g, HH.b, void 0 !== HH.a ? HH.a : 1), sH |= this._gl.COLOR_BUFFER_BIT);
        }
        EH && (this.xO ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), sH |= this._gl.DEPTH_BUFFER_BIT), RH && (this._gl.clearStencil(hH), sH |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(sH);
      }
      _viewport(HH, IH, EH, RH) {
        HH === this._viewportCached.x && IH === this._viewportCached.y && EH === this._viewportCached.z && RH === this._viewportCached.w || (this._viewportCached.x = HH, this._viewportCached.y = IH, this._viewportCached.z = EH, this._viewportCached.w = RH, this._gl.viewport(HH, IH, EH, RH));
      }
      TM() {
        super.TM(), this._badOS && this.flushFramebuffer();
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine");
      }
      bindFramebuffer(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          EH = arguments.length > 2 ? arguments[2] : void 0,
          RH = arguments.length > 3 ? arguments[3] : void 0,
          hH = arguments.length > 4 ? arguments[4] : void 0,
          TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          sH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const GH = HH;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = HH, this._bindUnboundFramebuffer(GH._framebuffer);
        const AH = this._gl;
        var VH;
        if (!HH.isMulti) if (HH.is2DArray || HH.is3D) AH.framebufferTextureLayer(AH.FRAMEBUFFER, AH.COLOR_ATTACHMENT0, null === (VH = HH.texture._hardwareTexture) || void 0 === VH ? void 0 : VH.underlyingResource, TH, sH), GH._currentLOD = TH;else if (HH.isCube) {
          var YH;
          AH.framebufferTexture2D(AH.FRAMEBUFFER, AH.COLOR_ATTACHMENT0, AH.TEXTURE_CUBE_MAP_POSITIVE_X + IH, null === (YH = HH.texture._hardwareTexture) || void 0 === YH ? void 0 : YH.underlyingResource, TH);
        } else if (GH._currentLOD !== TH) {
          var QH;
          AH.framebufferTexture2D(AH.FRAMEBUFFER, AH.COLOR_ATTACHMENT0, AH.TEXTURE_2D, null === (QH = HH.texture._hardwareTexture) || void 0 === QH ? void 0 : QH.underlyingResource, TH), GH._currentLOD = TH;
        }
        const JH = HH._depthStencilTexture;
        if (JH) {
          HH.is3D && (HH.texture.width === JH.width && HH.texture.height === JH.height && HH.texture.depth === JH.depth || eH.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const EH = HH._depthStencilTextureWithStencil ? AH.DEPTH_STENCIL_ATTACHMENT : AH.DEPTH_ATTACHMENT;
          var OH;
          if (HH.is2DArray || HH.is3D) AH.framebufferTextureLayer(AH.FRAMEBUFFER, EH, null === (OH = JH._hardwareTexture) || void 0 === OH ? void 0 : OH.underlyingResource, TH, sH);else if (HH.isCube) {
            var rH;
            AH.framebufferTexture2D(AH.FRAMEBUFFER, EH, AH.TEXTURE_CUBE_MAP_POSITIVE_X + IH, null === (rH = JH._hardwareTexture) || void 0 === rH ? void 0 : rH.underlyingResource, TH);
          } else {
            var FH;
            AH.framebufferTexture2D(AH.FRAMEBUFFER, EH, AH.TEXTURE_2D, null === (FH = JH._hardwareTexture) || void 0 === FH ? void 0 : FH.underlyingResource, TH);
          }
        }
        GH._MSAAFramebuffer && this._bindUnboundFramebuffer(GH._MSAAFramebuffer), this._cachedViewport && !hH ? this.setViewport(this._cachedViewport, EH, RH) : (EH || (EH = HH.width, TH && (EH /= Math.pow(2, TH))), RH || (RH = HH.height, TH && (RH /= Math.pow(2, TH))), this._viewport(0, 0, EH, RH)), this.wipeCaches();
      }
      setStateCullFaceType(HH, IH) {
        var EH, RH;
        const hH = null === (EH = null !== (RH = this.cullBackFaces) && void 0 !== RH ? RH : HH) || void 0 === EH || EH ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== hH || IH) && (this._depthCullingState.cullFace = hH);
      }
      setState(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          EH = arguments.length > 2 ? arguments[2] : void 0,
          RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          hH = arguments.length > 4 ? arguments[4] : void 0,
          TH = arguments.length > 5 ? arguments[5] : void 0,
          sH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== HH || EH) && (this._depthCullingState.cull = HH), this.setStateCullFaceType(hH, EH), this.setZOffset(IH), this.setZOffsetUnits(sH);
        const eH = RH ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== eH || EH) && (this._depthCullingState.frontFace = eH), this._stencilStateComposer.stencilMaterial = TH;
      }
      _resolveAndGenerateMipMapsFramebuffer(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        HH.disableAutomaticMSAAResolve || (HH.isMulti ? this.resolveMultiFramebuffer(HH) : this.resolveFramebuffer(HH)), IH || (HH.isMulti ? this.generateMipMapsMultiFramebuffer(HH) : this.generateMipMapsFramebuffer(HH));
      }
      _bindUnboundFramebuffer(HH) {
        this._currentFramebuffer !== HH && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, HH), this._currentFramebuffer = HH);
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer;
      }
      generateMipmaps(HH) {
        const IH = this._getTextureTarget(HH);
        this._bindTextureDirectly(IH, HH, !0), this._gl.generateMipmap(IH), this._bindTextureDirectly(IH, null);
      }
      unBindFramebuffer(HH, IH, EH) {
        const RH = HH;
        this._currentRenderTarget = null, this._resolveAndGenerateMipMapsFramebuffer(HH, IH), EH && (RH._MSAAFramebuffer && this._bindUnboundFramebuffer(RH._framebuffer), EH()), this._bindUnboundFramebuffer(null);
      }
      generateMipMapsFramebuffer(HH) {
        var IH;
        HH.isMulti || null === (IH = HH.texture) || void 0 === IH || !IH.generateMipMaps || HH.isCube || this.generateMipmaps(HH.texture);
      }
      resolveFramebuffer(HH) {
        const IH = HH,
          EH = this._gl;
        if (!IH._MSAAFramebuffer || IH.isMulti) return;
        let RH = IH.resolveMSAAColors ? EH.COLOR_BUFFER_BIT : 0;
        RH |= IH._generateDepthBuffer && IH.resolveMSAADepth ? EH.DEPTH_BUFFER_BIT : 0, RH |= IH._generateStencilBuffer && IH.resolveMSAAStencil ? EH.STENCIL_BUFFER_BIT : 0, EH.bindFramebuffer(EH.READ_FRAMEBUFFER, IH._MSAAFramebuffer), EH.bindFramebuffer(EH.DRAW_FRAMEBUFFER, IH._framebuffer), EH.blitFramebuffer(0, 0, HH.width, HH.height, 0, 0, HH.width, HH.height, RH, EH.NEAREST);
      }
      flushFramebuffer() {
        this._gl.flush();
      }
      restoreDefaultFramebuffer() {
        this._currentRenderTarget ? this.unBindFramebuffer(this._currentRenderTarget) : this._bindUnboundFramebuffer(null), this._cachedViewport && this.setViewport(this._cachedViewport), this.wipeCaches();
      }
      _resetVertexBufferBinding() {
        this.bindArrayBuffer(null), this._cachedVertexBuffers = null;
      }
      createVertexBuffer(HH, IH, EH) {
        return this._createVertexBuffer(HH, this._gl.STATIC_DRAW);
      }
      _createVertexBuffer(HH, IH) {
        const EH = this._gl.createBuffer();
        if (!EH) throw new Error("Unable to create vertex buffer");
        const RH = new QH.c(EH);
        return this.bindArrayBuffer(RH), "number" !== typeof HH ? HH instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(HH), IH), RH.uI = 4 * HH.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, HH, IH), RH.uI = HH.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(HH), IH), RH.uI = HH), this._resetVertexBufferBinding(), RH.references = 1, RH;
      }
      createDynamicVertexBuffer(HH, IH) {
        return this._createVertexBuffer(HH, this._gl.DYNAMIC_DRAW);
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null;
      }
      createIndexBuffer(HH, IH, EH) {
        const RH = this._gl.createBuffer(),
          hH = new QH.c(RH);
        if (!RH) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(hH);
        const TH = this._normalizeIndexData(HH);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, TH, IH ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), hH.references = 1, hH.is32Bits = 4 === TH.BYTES_PER_ELEMENT, hH;
      }
      _normalizeIndexData(HH) {
        if (2 === HH.BYTES_PER_ELEMENT) return HH;
        if (this._caps.uintIndices) {
          if (HH instanceof Uint32Array) return HH;
          for (let IH = 0; IH < HH.length; IH++) if (HH[IH] >= 65535) return new Uint32Array(HH);
          return new Uint16Array(HH);
        }
        return new Uint16Array(HH);
      }
      bindArrayBuffer(HH) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(HH, this._gl.ARRAY_BUFFER);
      }
      bindUniformBlock(HH, IH, EH) {
        const RH = HH.program,
          hH = this._gl.getUniformBlockIndex(RH, IH);
        this._gl.uniformBlockBinding(RH, hH, EH);
      }
      bindIndexBuffer(HH) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(HH, this._gl.ELEMENT_ARRAY_BUFFER);
      }
      _bindBuffer(HH, IH) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[IH] !== HH) && (this._gl.bindBuffer(IH, HH ? HH.underlyingResource : null), this._currentBoundBuffer[IH] = HH);
      }
      updateArrayBuffer(HH) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, HH);
      }
      _vertexAttribPointer(HH, IH, EH, RH, hH, TH, sH) {
        const eH = this._currentBufferPointers[IH];
        if (!eH) return;
        let GH = !1;
        eH.active ? (eH.buffer !== HH && (eH.buffer = HH, GH = !0), eH.size !== EH && (eH.size = EH, GH = !0), eH.type !== RH && (eH.type = RH, GH = !0), eH.normalized !== hH && (eH.normalized = hH, GH = !0), eH.stride !== TH && (eH.stride = TH, GH = !0), eH.offset !== sH && (eH.offset = sH, GH = !0)) : (GH = !0, eH.active = !0, eH.index = IH, eH.size = EH, eH.type = RH, eH.normalized = hH, eH.stride = TH, eH.offset = sH, eH.buffer = HH), (GH || this._vaoRecordInProgress) && (this.bindArrayBuffer(HH), RH === this._gl.UNSIGNED_INT || RH === this._gl.INT ? this._gl.vertexAttribIPointer(IH, EH, RH, TH, sH) : this._gl.vertexAttribPointer(IH, EH, RH, hH, TH, sH));
      }
      _bindIndexBufferWithCache(HH) {
        null != HH && this._cachedIndexBuffer !== HH && (this._cachedIndexBuffer = HH, this.bindIndexBuffer(HH), this._uintIndicesCurrentlySet = HH.is32Bits);
      }
      _bindVertexBuffersAttributes(HH, IH, EH) {
        const RH = IH.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let hH = 0; hH < RH.length; hH++) {
          const TH = IH.getAttributeLocation(hH);
          if (TH >= 0) {
            const IH = RH[hH];
            let sH = null;
            if (EH && (sH = EH[IH]), sH || (sH = HH[IH]), !sH) continue;
            this._gl.enableVertexAttribArray(TH), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[TH] = !0);
            const eH = sH.getBuffer();
            eH && (this._vertexAttribPointer(eH, TH, sH.getSize(), sH.type, sH.normalized, sH.byteStride, sH.byteOffset), sH.getIsInstanced() && (this._gl.vertexAttribDivisor(TH, sH.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(TH), this._currentInstanceBuffers.push(eH))));
          }
        }
      }
      recordVertexArrayObject(HH, IH, EH, RH) {
        const hH = this._gl.createVertexArray();
        if (!hH) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(hH), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(HH, EH, RH), this.bindIndexBuffer(IH), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), hH;
      }
      bindVertexArrayObject(HH, IH) {
        this._cachedVertexArrayObject !== HH && (this._cachedVertexArrayObject = HH, this._gl.bindVertexArray(HH), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != IH && IH.is32Bits, this._mustWipeVertexAttributes = !0);
      }
      bindBuffersDirectly(HH, IH, EH, RH, hH) {
        if (this._cachedVertexBuffers !== HH || this._cachedEffectForVertexBuffers !== hH) {
          this._cachedVertexBuffers = HH, this._cachedEffectForVertexBuffers = hH;
          const IH = hH.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let TH = 0;
          for (let sH = 0; sH < IH; sH++) if (sH < EH.length) {
            const IH = hH.getAttributeLocation(sH);
            IH >= 0 && (this._gl.enableVertexAttribArray(IH), this._vertexAttribArraysEnabled[IH] = !0, this._vertexAttribPointer(HH, IH, EH[sH], this._gl.FLOAT, !1, RH, TH)), TH += 4 * EH[sH];
          }
        }
        this._bindIndexBufferWithCache(IH);
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null));
      }
      bindBuffers(HH, IH, EH, RH) {
        this._cachedVertexBuffers === HH && this._cachedEffectForVertexBuffers === EH || (this._cachedVertexBuffers = HH, this._cachedEffectForVertexBuffers = EH, this._bindVertexBuffersAttributes(HH, EH, RH)), this._bindIndexBufferWithCache(IH);
      }
      unbindInstanceAttributes() {
        let HH;
        for (let IH = 0, EH = this._currentInstanceLocations.length; IH < EH; IH++) {
          const EH = this._currentInstanceBuffers[IH];
          HH != EH && EH.references && (HH = EH, this.bindArrayBuffer(EH));
          const RH = this._currentInstanceLocations[IH];
          this._gl.vertexAttribDivisor(RH, 0);
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0;
      }
      releaseVertexArrayObject(HH) {
        this._gl.deleteVertexArray(HH);
      }
      _releaseBuffer(HH) {
        return HH.references--, 0 === HH.references && (this._deleteBuffer(HH), !0);
      }
      _deleteBuffer(HH) {
        this._gl.deleteBuffer(HH.underlyingResource);
      }
      updateAndBindInstancesBuffer(HH, IH, EH) {
        if (this.bindArrayBuffer(HH), IH && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, IH), void 0 !== EH[0].index) this.bindInstancesBuffer(HH, EH, !0);else for (let RH = 0; RH < 4; RH++) {
          const IH = EH[RH];
          this._vertexAttribArraysEnabled[IH] || (this._gl.enableVertexAttribArray(IH), this._vertexAttribArraysEnabled[IH] = !0), this._vertexAttribPointer(HH, IH, 4, this._gl.FLOAT, !1, 64, 16 * RH), this._gl.vertexAttribDivisor(IH, 1), this._currentInstanceLocations.push(IH), this._currentInstanceBuffers.push(HH);
        }
      }
      bindInstancesBuffer(HH, IH) {
        let EH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(HH);
        let RH = 0;
        if (EH) for (let hH = 0; hH < IH.length; hH++) {
          RH += 4 * IH[hH].attributeSize;
        }
        for (let hH = 0; hH < IH.length; hH++) {
          const EH = IH[hH];
          void 0 === EH.index && (EH.index = this._currentEffect.getAttributeLocationByName(EH.attributeName)), EH.index < 0 || (this._vertexAttribArraysEnabled[EH.index] || (this._gl.enableVertexAttribArray(EH.index), this._vertexAttribArraysEnabled[EH.index] = !0), this._vertexAttribPointer(HH, EH.index, EH.attributeSize, EH.attributeType || this._gl.FLOAT, EH.normalized || !1, RH, EH.offset), this._gl.vertexAttribDivisor(EH.index, void 0 === EH.divisor ? 1 : EH.divisor), this._currentInstanceLocations.push(EH.index), this._currentInstanceBuffers.push(HH));
        }
      }
      disableInstanceAttributeByName(HH) {
        if (!this._currentEffect) return;
        const IH = this._currentEffect.getAttributeLocationByName(HH);
        this.disableInstanceAttribute(IH);
      }
      disableInstanceAttribute(HH) {
        let IH,
          EH = !1;
        for (; -1 !== (IH = this._currentInstanceLocations.indexOf(HH));) this._currentInstanceLocations.splice(IH, 1), this._currentInstanceBuffers.splice(IH, 1), EH = !0;
        EH && (this._gl.vertexAttribDivisor(HH, 0), this.disableAttributeByIndex(HH));
      }
      disableAttributeByIndex(HH) {
        this._gl.disableVertexAttribArray(HH), this._vertexAttribArraysEnabled[HH] = !1, this._currentBufferPointers[HH].active = !1;
      }
      draw(HH, IH, EH, RH) {
        this.drawElementsType(HH ? 0 : 1, IH, EH, RH);
      }
      drawPointClouds(HH, IH, EH) {
        this.drawArraysType(2, HH, IH, EH);
      }
      drawUnIndexed(HH, IH, EH, RH) {
        this.drawArraysType(HH ? 0 : 1, IH, EH, RH);
      }
      drawElementsType(HH, IH, EH, RH) {
        this.applyStates(), this._reportDrawCall();
        const hH = this._drawMode(HH),
          TH = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          sH = this._uintIndicesCurrentlySet ? 4 : 2;
        RH ? this._gl.drawElementsInstanced(hH, EH, TH, IH * sH, RH) : this._gl.drawElements(hH, EH, TH, IH * sH);
      }
      drawArraysType(HH, IH, EH, RH) {
        this.applyStates(), this._reportDrawCall();
        const hH = this._drawMode(HH);
        RH ? this._gl.drawArraysInstanced(hH, IH, EH, RH) : this._gl.drawArrays(hH, IH, EH);
      }
      _drawMode(HH) {
        switch (HH) {
          case 0:
          default:
            return this._gl.TRIANGLES;
          case 2:
          case 3:
            return this._gl.POINTS;
          case 1:
          case 4:
            return this._gl.LINES;
          case 5:
            return this._gl.LINE_LOOP;
          case 6:
            return this._gl.LINE_STRIP;
          case 7:
            return this._gl.TRIANGLE_STRIP;
          case 8:
            return this._gl.TRIANGLE_FAN;
        }
      }
      _releaseEffect(HH) {
        this._compiledEffects[HH._key] && delete this._compiledEffects[HH._key];
        const IH = HH.getPipelineContext();
        IH && this._deletePipelineContext(IH);
      }
      _deletePipelineContext(HH) {
        const IH = HH;
        IH && IH.program && (IH.program.__SPECTOR_rebuildProgram = null, (0, MH.j)(IH), this._gl && (this._currentProgram === IH.program && this._setProgram(null), this._gl.deleteProgram(IH.program)));
      }
      _getGlobalDefines(HH) {
        return (0, FH.d)(HH, this.isNDCHalfZRange, this.xO, this.useExactSrgbConversions);
      }
      createEffect(HH, IH, EH, TH, sH, eH, GH, AH, VH) {
        var YH, QH, JH;
        let OH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          rH = arguments.length > 10 ? arguments[10] : void 0;
        const FH = "string" === typeof HH ? HH : HH.vertexToken || HH.vertexSource || HH.vertexElement || HH.vertex,
          MH = "string" === typeof HH ? HH : HH.fragmentToken || HH.fragmentSource || HH.fragmentElement || HH.fragment,
          NH = this._getGlobalDefines(),
          iI = void 0 !== IH.attributes;
        let DH = null !== (YH = null !== sH && void 0 !== sH ? sH : IH.defines) && void 0 !== YH ? YH : "";
        NH && (DH += NH);
        const PH = FH + "+" + MH + "@" + DH;
        if (this._compiledEffects[PH]) {
          const HH = this._compiledEffects[PH];
          return GH && HH.isReady() && GH(HH), HH._refCount++, HH;
        }
        this._gl && (0, hH.u)(this._gl);
        const XH = new RH.c(HH, IH, iI ? this : EH, TH, this, sH, eH, GH, AH, VH, PH, null !== (QH = IH.shaderLanguage) && void 0 !== QH ? QH : OH, null !== (JH = IH.extraInitializationsAsync) && void 0 !== JH ? JH : rH);
        return this._compiledEffects[PH] = XH, XH;
      }
      _getShaderSource(HH) {
        return this._gl.getShaderSource(HH);
      }
      createRawShaderProgram(HH, IH, EH, RH) {
        let TH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const sH = (0, hH.u)(this._gl);
        return sH._contextWasLost = this._contextWasLost, sH.validateShaderPrograms = this.validateShaderPrograms, (0, hH.r)(HH, IH, EH, RH || this._gl, TH);
      }
      createShaderProgram(HH, IH, EH, RH, TH) {
        let sH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const eH = (0, hH.u)(this._gl);
        return eH._contextWasLost = this._contextWasLost, eH.validateShaderPrograms = this.validateShaderPrograms, (0, hH.s)(HH, IH, EH, RH, TH || this._gl, sH);
      }
      inlineShaderCode(HH) {
        return HH;
      }
      createPipelineContext(HH) {
        if (this._gl) {
          (0, hH.u)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile;
        }
        const IH = (0, hH.q)(this._gl, HH);
        return IH.YY = this, IH;
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(HH) {
        return (0, hH.i)(HH, this._gl, this.validateShaderPrograms);
      }
      _preparePipelineContextAsync(HH, IH, EH, RH, TH, sH, eH, GH, AH, VH, YH) {
        const QH = (0, hH.u)(this._gl);
        return QH._contextWasLost = this._contextWasLost, QH.validateShaderPrograms = this.validateShaderPrograms, QH._createShaderProgramInjection = this._createShaderProgram.bind(this), QH.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), QH.createShaderProgramInjection = this.createShaderProgram.bind(this), QH.loadFileInjection = this._loadFile.bind(this), (0, hH.n)(HH, IH, EH, RH, TH, sH, eH, GH, AH, VH, YH);
      }
      _createShaderProgram(HH, IH, EH, RH) {
        let TH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, hH.d)(HH, IH, EH, RH, TH);
      }
      _isRenderingStateCompiled(HH) {
        return !this._isDisposed && (0, hH.k)(HH, this._gl, this.validateShaderPrograms);
      }
      _executeWhenRenderingStateIsCompiled(HH, IH) {
        (0, hH.g)(HH, IH);
      }
      getUniforms(HH, IH) {
        const EH = new Array(),
          RH = HH;
        for (let hH = 0; hH < IH.length; hH++) EH.push(this._gl.getUniformLocation(RH.program, IH[hH]));
        return EH;
      }
      getAttributes(HH, IH) {
        const EH = [],
          RH = HH;
        for (let TH = 0; TH < IH.length; TH++) try {
          EH.push(this._gl.getAttribLocation(RH.program, IH[TH]));
        } catch (hH) {
          EH.push(-1);
        }
        return EH;
      }
      enableEffect(HH) {
        (HH = null !== HH && (0, sH.b)(HH) ? HH.effect : HH) && HH !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(HH), this._currentEffect = HH, HH.onBind && HH.onBind(HH), HH._onBindObservable && HH._onBindObservable.notifyObservers(HH));
      }
      setInt(HH, IH) {
        return !!HH && (this._gl.uniform1i(HH, IH), !0);
      }
      setInt2(HH, IH, EH) {
        return !!HH && (this._gl.uniform2i(HH, IH, EH), !0);
      }
      setInt3(HH, IH, EH, RH) {
        return !!HH && (this._gl.uniform3i(HH, IH, EH, RH), !0);
      }
      setInt4(HH, IH, EH, RH, hH) {
        return !!HH && (this._gl.uniform4i(HH, IH, EH, RH, hH), !0);
      }
      setIntArray(HH, IH) {
        return !!HH && (this._gl.uniform1iv(HH, IH), !0);
      }
      setIntArray2(HH, IH) {
        return !(!HH || IH.length % 2 !== 0) && (this._gl.uniform2iv(HH, IH), !0);
      }
      setIntArray3(HH, IH) {
        return !(!HH || IH.length % 3 !== 0) && (this._gl.uniform3iv(HH, IH), !0);
      }
      setIntArray4(HH, IH) {
        return !(!HH || IH.length % 4 !== 0) && (this._gl.uniform4iv(HH, IH), !0);
      }
      setUInt(HH, IH) {
        return !!HH && (this._gl.uniform1ui(HH, IH), !0);
      }
      setUInt2(HH, IH, EH) {
        return !!HH && (this._gl.uniform2ui(HH, IH, EH), !0);
      }
      setUInt3(HH, IH, EH, RH) {
        return !!HH && (this._gl.uniform3ui(HH, IH, EH, RH), !0);
      }
      setUInt4(HH, IH, EH, RH, hH) {
        return !!HH && (this._gl.uniform4ui(HH, IH, EH, RH, hH), !0);
      }
      setUIntArray(HH, IH) {
        return !!HH && (this._gl.uniform1uiv(HH, IH), !0);
      }
      setUIntArray2(HH, IH) {
        return !(!HH || IH.length % 2 !== 0) && (this._gl.uniform2uiv(HH, IH), !0);
      }
      setUIntArray3(HH, IH) {
        return !(!HH || IH.length % 3 !== 0) && (this._gl.uniform3uiv(HH, IH), !0);
      }
      setUIntArray4(HH, IH) {
        return !(!HH || IH.length % 4 !== 0) && (this._gl.uniform4uiv(HH, IH), !0);
      }
      setArray(HH, IH) {
        return !!HH && !(IH.length < 1) && (this._gl.uniform1fv(HH, IH), !0);
      }
      setArray2(HH, IH) {
        return !(!HH || IH.length % 2 !== 0) && (this._gl.uniform2fv(HH, IH), !0);
      }
      setArray3(HH, IH) {
        return !(!HH || IH.length % 3 !== 0) && (this._gl.uniform3fv(HH, IH), !0);
      }
      setArray4(HH, IH) {
        return !(!HH || IH.length % 4 !== 0) && (this._gl.uniform4fv(HH, IH), !0);
      }
      setMatrices(HH, IH) {
        return !!HH && (this._gl.uniformMatrix4fv(HH, !1, IH), !0);
      }
      setMatrix3x3(HH, IH) {
        return !!HH && (this._gl.uniformMatrix3fv(HH, !1, IH), !0);
      }
      setMatrix2x2(HH, IH) {
        return !!HH && (this._gl.uniformMatrix2fv(HH, !1, IH), !0);
      }
      setFloat(HH, IH) {
        return !!HH && (this._gl.uniform1f(HH, IH), !0);
      }
      setFloat2(HH, IH, EH) {
        return !!HH && (this._gl.uniform2f(HH, IH, EH), !0);
      }
      setFloat3(HH, IH, EH, RH) {
        return !!HH && (this._gl.uniform3f(HH, IH, EH, RH), !0);
      }
      setFloat4(HH, IH, EH, RH, hH) {
        return !!HH && (this._gl.uniform4f(HH, IH, EH, RH, hH), !0);
      }
      applyStates() {
        if (this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1), this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const HH = this._colorWrite;
          this._gl.colorMask(HH, HH, HH, HH);
        }
      }
      wipeCaches(HH) {
        this.preventCacheWipeBetweenFrames && !HH || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), HH && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null));
      }
      _getSamplingParameters(HH, IH) {
        const EH = this._gl;
        let RH = EH.NEAREST,
          hH = EH.NEAREST,
          TH = !1;
        switch (HH) {
          case 11:
            RH = EH.LINEAR, hH = IH ? EH.LINEAR_MIPMAP_NEAREST : EH.LINEAR;
            break;
          case 3:
            RH = EH.LINEAR, TH = !0, hH = IH ? EH.LINEAR_MIPMAP_LINEAR : EH.LINEAR;
            break;
          case 8:
            TH = !0, RH = EH.NEAREST, hH = IH ? EH.NEAREST_MIPMAP_LINEAR : EH.NEAREST;
            break;
          case 4:
            RH = EH.NEAREST, hH = IH ? EH.NEAREST_MIPMAP_NEAREST : EH.NEAREST;
            break;
          case 5:
            RH = EH.NEAREST, hH = IH ? EH.LINEAR_MIPMAP_NEAREST : EH.LINEAR;
            break;
          case 6:
            TH = !0, RH = EH.NEAREST, hH = IH ? EH.LINEAR_MIPMAP_LINEAR : EH.LINEAR;
            break;
          case 7:
            RH = EH.NEAREST, hH = EH.LINEAR;
            break;
          case 1:
            RH = EH.NEAREST, hH = EH.NEAREST;
            break;
          case 9:
            RH = EH.LINEAR, hH = IH ? EH.NEAREST_MIPMAP_NEAREST : EH.NEAREST;
            break;
          case 10:
            TH = !0, RH = EH.LINEAR, hH = IH ? EH.NEAREST_MIPMAP_LINEAR : EH.NEAREST;
            break;
          case 2:
            RH = EH.LINEAR, hH = EH.LINEAR;
            break;
          case 12:
            RH = EH.LINEAR, hH = EH.NEAREST;
        }
        return {
          min: hH,
          mag: RH,
          hasMipMaps: TH
        };
      }
      _createTexture() {
        const HH = this._gl.createTexture();
        if (!HH) throw new Error("Unable to create texture");
        return HH;
      }
      _createHardwareTexture() {
        return new OH.d(this._createTexture(), this._gl);
      }
      _createInternalTexture(HH, IH) {
        let EH,
          RH,
          hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          TH = !1,
          sH = 0,
          GH = 3,
          AH = 5,
          VH = !1,
          YH = 1,
          QH = !1,
          JH = 0,
          OH = !1;
        var FH;
        void 0 !== IH && "object" === typeof IH ? (EH = !!IH.generateMipMaps, TH = !!IH.createMipMaps, sH = void 0 === IH.type ? 0 : IH.type, GH = void 0 === IH.samplingMode ? 3 : IH.samplingMode, AH = void 0 === IH.format ? 5 : IH.format, VH = void 0 !== IH.useSRGBBuffer && IH.useSRGBBuffer, YH = null !== (FH = IH.samples) && void 0 !== FH ? FH : 1, RH = IH.label, QH = !!IH.createMSAATexture, JH = IH.comparisonFunction || 0, OH = !!IH.isCube) : EH = !!IH;
        VH && (VH = this._caps.supportSRGBBuffers && (this.webGLVersion > 1 || this.isWebGPU)), (1 !== sH || this._caps.textureFloatLinearFiltering) && (2 !== sH || this._caps.textureHalfFloatLinearFiltering) || (GH = 1), 1 !== sH || this._caps.textureFloat || (sH = 0, eH.e.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const MH = (0, NH.d)(AH),
          iI = (0, NH.b)(AH),
          DH = this._gl,
          PH = new rH.b(this, hH),
          XH = HH.width || HH,
          mI = HH.height || HH,
          ZH = HH.depth || 0,
          qH = HH.fI || 0,
          LH = this._getSamplingParameters(GH, (EH || TH) && !MH),
          gH = 0 !== qH ? DH.TEXTURE_2D_ARRAY : 0 !== ZH ? DH.TEXTURE_3D : OH ? DH.TEXTURE_CUBE_MAP : DH.TEXTURE_2D,
          yH = MH ? this._getInternalFormatFromDepthTextureFormat(AH, !0, iI) : this._getRGBABufferInternalSizedFormat(sH, AH, VH),
          oH = MH ? iI ? DH.DEPTH_STENCIL : DH.DEPTH_COMPONENT : this._getInternalFormat(AH),
          kI = MH ? this._getWebGLTextureTypeFromDepthTextureFormat(AH) : this._getWebGLTextureType(sH);
        if (this._bindTextureDirectly(gH, PH), 0 !== qH) PH.is2DArray = !0, DH.texImage3D(gH, 0, yH, XH, mI, qH, 0, oH, kI, null);else if (0 !== ZH) PH.is3D = !0, DH.texImage3D(gH, 0, yH, XH, mI, ZH, 0, oH, kI, null);else if (OH) {
          PH.isCube = !0;
          for (let HH = 0; HH < 6; HH++) DH.texImage2D(DH.TEXTURE_CUBE_MAP_POSITIVE_X + HH, 0, yH, XH, mI, 0, oH, kI, null);
        } else DH.texImage2D(gH, 0, yH, XH, mI, 0, oH, kI, null);
        if (DH.texParameteri(gH, DH.TEXTURE_MAG_FILTER, LH.mag), DH.texParameteri(gH, DH.TEXTURE_MIN_FILTER, LH.min), DH.texParameteri(gH, DH.TEXTURE_WRAP_S, DH.CLAMP_TO_EDGE), DH.texParameteri(gH, DH.TEXTURE_WRAP_T, DH.CLAMP_TO_EDGE), MH && this.webGLVersion > 1 && (0 === JH ? (DH.texParameteri(gH, DH.TEXTURE_COMPARE_FUNC, 515), DH.texParameteri(gH, DH.TEXTURE_COMPARE_MODE, DH.NONE)) : (DH.texParameteri(gH, DH.TEXTURE_COMPARE_FUNC, JH), DH.texParameteri(gH, DH.TEXTURE_COMPARE_MODE, DH.COMPARE_REF_TO_TEXTURE))), (EH || TH) && this._gl.generateMipmap(gH), this._bindTextureDirectly(gH, null), PH._useSRGBBuffer = VH, PH.baseWidth = XH, PH.baseHeight = mI, PH.width = XH, PH.height = mI, PH.depth = qH || ZH, PH.isReady = !0, PH.samples = YH, PH.generateMipMaps = EH, PH.samplingMode = GH, PH.type = sH, PH.format = AH, PH.label = RH, PH.comparisonFunction = JH, this._internalTexturesCache.push(PH), QH) {
          let HH;
          if (HH = (0, NH.d)(PH.format) ? this._setupFramebufferDepthAttachments((0, NH.b)(PH.format), 19 !== PH.format, PH.width, PH.height, YH, PH.format, !0) : this._createRenderBuffer(PH.width, PH.height, YH, -1, this._getRGBABufferInternalSizedFormat(PH.type, PH.format, PH._useSRGBBuffer), -1), !HH) throw new Error("Unable to create render buffer");
          PH._autoMSAAManagement = !0;
          let IH = PH._hardwareTexture;
          IH || (IH = PH._hardwareTexture = this._createHardwareTexture()), IH.addMSAARenderBuffer(HH);
        }
        return PH;
      }
      _getUseSRGBBuffer(HH, IH) {
        return HH && this._caps.supportSRGBBuffers && (this.webGLVersion > 1 || IH);
      }
      createTexture(HH, IH, EH, RH) {
        var hH = this;
        let TH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          sH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          eH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          GH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          AH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          VH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          YH = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          QH = arguments.length > 11 ? arguments[11] : void 0,
          JH = arguments.length > 12 ? arguments[12] : void 0,
          OH = arguments.length > 13 ? arguments[13] : void 0,
          FH = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(HH, IH, EH, RH, TH, sH, eH, function () {
          for (var HH = arguments.length, IH = new Array(HH), EH = 0; EH < HH; EH++) IH[EH] = arguments[EH];
          return hH._prepareWebGLTexture(...IH, VH);
        }, (HH, IH, EH, hH, TH, sH) => {
          const eH = this._gl,
            GH = EH.width === HH && EH.height === IH;
          TH._creationFlags = null !== OH && void 0 !== OH ? OH : 0;
          const AH = this._getTexImageParametersForCreateTexture(TH.format, TH._useSRGBBuffer);
          if (GH) return eH.texImage2D(eH.TEXTURE_2D, 0, AH.internalFormat, AH.format, AH.type, EH), !1;
          const VH = this._caps.maxTextureSize;
          if (EH.width > VH || EH.height > VH || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = HH, this._workingCanvas.height = IH, this._workingContext.drawImage(EH, 0, 0, EH.width, EH.height, 0, 0, HH, IH), eH.texImage2D(eH.TEXTURE_2D, 0, AH.internalFormat, AH.format, AH.type, this._workingCanvas), TH.width = HH, TH.height = IH, !1);
          {
            const HH = new rH.b(this, 2);
            this._bindTextureDirectly(eH.TEXTURE_2D, HH, !0), eH.texImage2D(eH.TEXTURE_2D, 0, AH.internalFormat, AH.format, AH.type, EH), this._rescaleTexture(HH, TH, RH, AH.format, () => {
              this._releaseTexture(HH), this._bindTextureDirectly(eH.TEXTURE_2D, TH, !0), sH();
            });
          }
          return !0;
        }, GH, AH, VH, YH, QH, JH, FH);
      }
      _getTexImageParametersForCreateTexture(HH, IH) {
        let EH, RH;
        return 1 === this.webGLVersion ? (EH = this._getInternalFormat(HH, IH), RH = EH) : (EH = this._getInternalFormat(HH, !1), RH = this._getRGBABufferInternalSizedFormat(0, HH, IH)), {
          internalFormat: RH,
          format: EH,
          type: this._gl.UNSIGNED_BYTE
        };
      }
      _rescaleTexture(HH, IH, EH, RH, hH) {}
      _unpackFlipY(HH) {
        this._unpackFlipYCached !== HH && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, HH ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = HH));
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT);
      }
      _getTextureTarget(HH) {
        return HH.isCube ? this._gl.TEXTURE_CUBE_MAP : HH.is3D ? this._gl.TEXTURE_3D : HH.is2DArray || HH.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D;
      }
      updateTextureSamplingMode(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const RH = this._getTextureTarget(IH),
          hH = this._getSamplingParameters(HH, IH.useMipMaps || EH);
        this._setTextureParameterInteger(RH, this._gl.TEXTURE_MAG_FILTER, hH.mag, IH), this._setTextureParameterInteger(RH, this._gl.TEXTURE_MIN_FILTER, hH.min), EH && hH.hasMipMaps && (IH.generateMipMaps = !0, this._gl.generateMipmap(RH)), this._bindTextureDirectly(RH, null), IH.samplingMode = HH;
      }
      updateTextureDimensions(HH, IH, EH) {}
      updateTextureWrappingMode(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const hH = this._getTextureTarget(HH);
        null !== IH && (this._setTextureParameterInteger(hH, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(IH), HH), HH._cachedWrapU = IH), null !== EH && (this._setTextureParameterInteger(hH, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(EH), HH), HH._cachedWrapV = EH), (HH.is2DArray || HH.is3D) && null !== RH && (this._setTextureParameterInteger(hH, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(RH), HH), HH._cachedWrapR = RH), this._bindTextureDirectly(hH, null);
      }
      _uploadCompressedDataToTextureDirectly(HH, IH, EH, RH, hH) {
        let TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          sH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const eH = this._gl;
        let GH = eH.TEXTURE_2D;
        if (HH.isCube && (GH = eH.TEXTURE_CUBE_MAP_POSITIVE_X + TH), HH._useSRGBBuffer) switch (IH) {
          case 37492:
          case 36196:
            this._caps.etc2 ? IH = eH.COMPRESSED_SRGB8_ETC2 : HH._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? IH = eH.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : HH._useSRGBBuffer = !1;
            break;
          case 36492:
            IH = eH.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            IH = eH.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            IH = eH.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            IH = eH.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            IH = eH.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            IH = eH.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            IH = eH.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            IH = eH.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            IH = eH.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            IH = eH.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            IH = eH.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            IH = eH.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            IH = eH.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            IH = eH.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            IH = eH.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? IH = eH.COMPRESSED_SRGB_S3TC_DXT1_EXT : HH._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? IH = eH.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : HH._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? IH = eH.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : HH._useSRGBBuffer = !1;
            break;
          default:
            HH._useSRGBBuffer = !1;
        }
        if (HH.generateMipMaps) {
          const TH = HH._hardwareTexture;
          TH.memoryAllocated || (eH.texStorage2D(HH.isCube ? eH.TEXTURE_CUBE_MAP : eH.TEXTURE_2D, Math.floor(Math.log2(Math.max(EH, RH))) + 1, IH, HH.width, HH.height), TH.memoryAllocated = !0), this._gl.compressedTexSubImage2D(GH, sH, 0, 0, EH, RH, IH, hH);
        } else this._gl.compressedTexImage2D(GH, sH, IH, EH, RH, 0, hH);
      }
      _uploadDataToTextureDirectly(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          hH = arguments.length > 4 ? arguments[4] : void 0,
          TH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const sH = this._gl,
          eH = this._getWebGLTextureType(HH.type),
          GH = this._getInternalFormat(HH.format),
          AH = void 0 === hH ? this._getRGBABufferInternalSizedFormat(HH.type, HH.format, HH._useSRGBBuffer) : this._getInternalFormat(hH, HH._useSRGBBuffer);
        this._unpackFlipY(HH.invertY);
        let VH = sH.TEXTURE_2D;
        HH.isCube && (VH = sH.TEXTURE_CUBE_MAP_POSITIVE_X + EH);
        const YH = Math.round(Math.log(HH.width) * Math.LOG2E),
          QH = Math.round(Math.log(HH.height) * Math.LOG2E),
          JH = TH ? HH.width : Math.pow(2, Math.max(YH - RH, 0)),
          OH = TH ? HH.height : Math.pow(2, Math.max(QH - RH, 0));
        sH.texImage2D(VH, RH, AH, JH, OH, 0, GH, eH, IH);
      }
      updateTextureData(HH, IH, EH, RH, hH, TH) {
        let sH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          eH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          GH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const AH = this._gl,
          VH = this._getWebGLTextureType(HH.type),
          YH = this._getInternalFormat(HH.format);
        this._unpackFlipY(HH.invertY);
        let QH = AH.TEXTURE_2D,
          JH = AH.TEXTURE_2D;
        HH.isCube && (JH = AH.TEXTURE_CUBE_MAP_POSITIVE_X + sH, QH = AH.TEXTURE_CUBE_MAP), this._bindTextureDirectly(QH, HH, !0), AH.texSubImage2D(JH, eH, EH, RH, hH, TH, YH, VH, IH), GH && this._gl.generateMipmap(JH), this._bindTextureDirectly(QH, null);
      }
      _uploadArrayBufferViewToTexture(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const hH = this._gl,
          TH = HH.isCube ? hH.TEXTURE_CUBE_MAP : hH.TEXTURE_2D;
        this._bindTextureDirectly(TH, HH, !0), this._uploadDataToTextureDirectly(HH, IH, EH, RH), this._bindTextureDirectly(TH, null, !0);
      }
      _prepareWebGLTextureContinuation(HH, IH, EH, RH, hH) {
        const TH = this._gl;
        if (!TH) return;
        const sH = this._getSamplingParameters(hH, !EH);
        TH.texParameteri(TH.TEXTURE_2D, TH.TEXTURE_MAG_FILTER, sH.mag), TH.texParameteri(TH.TEXTURE_2D, TH.TEXTURE_MIN_FILTER, sH.min), EH || RH || TH.generateMipmap(TH.TEXTURE_2D), this._bindTextureDirectly(TH.TEXTURE_2D, null), IH && IH.removePendingData(HH), HH.onLoadedObservable.notifyObservers(HH), HH.onLoadedObservable.clear();
      }
      _prepareWebGLTexture(HH, IH, EH, RH, hH, TH, sH, eH, GH, AH) {
        const VH = this.getCaps().maxTextureSize,
          YH = Math.min(VH, this.needPOTTextures ? (0, JH.i)(RH.width, VH) : RH.width),
          QH = Math.min(VH, this.needPOTTextures ? (0, JH.i)(RH.height, VH) : RH.height),
          OH = this._gl;
        OH && (HH._hardwareTexture ? (this._bindTextureDirectly(OH.TEXTURE_2D, HH, !0), this._unpackFlipY(void 0 === hH || !!hH), HH.baseWidth = RH.width, HH.baseHeight = RH.height, HH.width = YH, HH.height = QH, HH.isReady = !0, HH.type = -1 !== HH.type ? HH.type : 0, HH.format = -1 !== HH.format ? HH.format : null !== AH && void 0 !== AH ? AH : ".jpg" !== IH || HH._useSRGBBuffer ? 5 : 4, eH(YH, QH, RH, IH, HH, () => {
          this._prepareWebGLTextureContinuation(HH, EH, TH, sH, GH);
        }) || this._prepareWebGLTextureContinuation(HH, EH, TH, sH, GH)) : EH && EH.removePendingData(HH));
      }
      _getInternalFormatFromDepthTextureFormat(HH, IH, EH) {
        const RH = this._gl;
        if (!IH) return RH.STENCIL_INDEX8;
        let hH = EH ? RH.DEPTH_STENCIL : RH.DEPTH_COMPONENT;
        return this.webGLVersion > 1 ? 15 === HH ? hH = RH.DEPTH_COMPONENT16 : 16 === HH ? hH = RH.DEPTH_COMPONENT24 : 17 === HH || 13 === HH ? hH = EH ? RH.DEPTH24_STENCIL8 : RH.DEPTH_COMPONENT24 : 14 === HH ? hH = RH.DEPTH_COMPONENT32F : 18 === HH && (hH = EH ? RH.DEPTH32F_STENCIL8 : RH.DEPTH_COMPONENT32F) : hH = RH.DEPTH_COMPONENT16, hH;
      }
      _getWebGLTextureTypeFromDepthTextureFormat(HH) {
        const IH = this._gl;
        let EH = IH.UNSIGNED_INT;
        return 15 === HH ? EH = IH.UNSIGNED_SHORT : 17 === HH || 13 === HH ? EH = IH.UNSIGNED_INT_24_8 : 14 === HH ? EH = IH.FLOAT : 18 === HH ? EH = IH.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === HH && (EH = IH.UNSIGNED_BYTE), EH;
      }
      _setupFramebufferDepthAttachments(HH, IH, EH, RH) {
        var hH;
        let TH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          sH = arguments.length > 5 ? arguments[5] : void 0,
          eH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const GH = this._gl;
        sH = null !== (hH = sH) && void 0 !== hH ? hH : HH ? 13 : 14;
        const AH = this._getInternalFormatFromDepthTextureFormat(sH, IH, HH);
        return HH && IH ? this._createRenderBuffer(EH, RH, TH, GH.DEPTH_STENCIL, AH, eH ? -1 : GH.DEPTH_STENCIL_ATTACHMENT) : IH ? this._createRenderBuffer(EH, RH, TH, AH, AH, eH ? -1 : GH.DEPTH_ATTACHMENT) : HH ? this._createRenderBuffer(EH, RH, TH, AH, AH, eH ? -1 : GH.STENCIL_ATTACHMENT) : null;
      }
      _createRenderBuffer(HH, IH, EH, RH, hH, TH) {
        let sH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const eH = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(eH, HH, IH, EH, RH, hH, TH, sH);
      }
      _updateRenderBuffer(HH, IH, EH, RH, hH, TH, sH) {
        let eH = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const GH = this._gl;
        return GH.bindRenderbuffer(GH.RENDERBUFFER, HH), RH > 1 && GH.renderbufferStorageMultisample ? GH.renderbufferStorageMultisample(GH.RENDERBUFFER, RH, TH, IH, EH) : GH.renderbufferStorage(GH.RENDERBUFFER, hH, IH, EH), -1 !== sH && GH.framebufferRenderbuffer(GH.FRAMEBUFFER, sH, GH.RENDERBUFFER, HH), eH && GH.bindRenderbuffer(GH.RENDERBUFFER, null), HH;
      }
      _releaseTexture(HH) {
        this._deleteTexture(HH._hardwareTexture), this.unbindAllTextures();
        const IH = this._internalTexturesCache.indexOf(HH);
        -1 !== IH && this._internalTexturesCache.splice(IH, 1), HH._lodTextureHigh && HH._lodTextureHigh.dispose(), HH._lodTextureMid && HH._lodTextureMid.dispose(), HH._lodTextureLow && HH._lodTextureLow.dispose(), HH._irradianceTexture && HH._irradianceTexture.dispose();
      }
      _deleteTexture(HH) {
        null === HH || void 0 === HH || HH.release();
      }
      _setProgram(HH) {
        this._currentProgram !== HH && ((0, hH.p)(HH, this._gl), this._currentProgram = HH);
      }
      bindSamplers(HH) {
        const IH = HH.getPipelineContext();
        this._setProgram(IH.program);
        const EH = HH.getSamplers();
        for (let RH = 0; RH < EH.length; RH++) {
          const IH = HH.getUniform(EH[RH]);
          IH && (this._boundUniforms[RH] = IH);
        }
        this._currentEffect = null;
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel);
      }
      _bindTextureDirectly(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          hH = !1;
        const TH = IH && IH._associatedChannel > -1;
        EH && TH && (this._activeChannel = IH._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== IH || RH) {
          if (this._activateCurrentTexture(), IH && IH.isMultiview) throw eH.e.Error(["_bindTextureDirectly called with a multiview texture!", HH, IH]), "_bindTextureDirectly called with a multiview texture!";
          var sH, GH;
          this._gl.bindTexture(HH, null !== (sH = null === IH || void 0 === IH || null === (GH = IH._hardwareTexture) || void 0 === GH ? void 0 : GH.underlyingResource) && void 0 !== sH ? sH : null), this._boundTexturesCache[this._activeChannel] = IH, IH && (IH._associatedChannel = this._activeChannel);
        } else EH && (hH = !0, this._activateCurrentTexture());
        return TH && !EH && this._bindSamplerUniformToChannel(IH._associatedChannel, this._activeChannel), hH;
      }
      _bindTexture(HH, IH, EH) {
        if (void 0 === HH) return;
        IH && (IH._associatedChannel = HH), this._activeChannel = HH;
        const RH = IH ? this._getTextureTarget(IH) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(RH, IH);
      }
      unbindAllTextures() {
        for (let HH = 0; HH < this._maxSimultaneousTextures; HH++) this._activeChannel = HH, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.webGLVersion > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null));
      }
      setTexture(HH, IH, EH, RH) {
        void 0 !== HH && (IH && (this._boundUniforms[HH] = IH), this._setTexture(HH, EH));
      }
      _bindSamplerUniformToChannel(HH, IH) {
        const EH = this._boundUniforms[HH];
        EH && EH._currentState !== IH && (this._gl.uniform1i(EH, IH), EH._currentState = IH);
      }
      _getTextureWrapMode(HH) {
        switch (HH) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT;
        }
        return this._gl.REPEAT;
      }
      _setTexture(HH, IH) {
        let EH,
          RH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!IH) return null != this._boundTexturesCache[HH] && (this._activeChannel = HH, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.webGLVersion > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (IH.video) {
          this._activeChannel = HH;
          const EH = IH.getInternalTexture();
          EH && (EH._associatedChannel = HH), IH.update();
        } else if (4 === IH.delayLoadState) return IH.delayLoad(), !1;
        EH = hH ? IH.depthStencilTexture : IH.isReady() ? IH.getInternalTexture() : IH.isCube ? this.emptyCubeTexture : IH.is3D ? this.emptyTexture3D : IH.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !RH && EH && (EH._associatedChannel = HH);
        let TH = !0;
        this._boundTexturesCache[HH] === EH && (RH || this._bindSamplerUniformToChannel(EH._associatedChannel, HH), TH = !1), this._activeChannel = HH;
        const sH = this._getTextureTarget(EH);
        if (TH && this._bindTextureDirectly(sH, EH, RH), EH && !EH.isMultiview) {
          if (EH.isCube && EH._cachedCoordinatesMode !== IH.coordinatesMode) {
            EH._cachedCoordinatesMode = IH.coordinatesMode;
            const HH = 3 !== IH.coordinatesMode && 5 !== IH.coordinatesMode ? 1 : 0;
            IH.wrapU = HH, IH.wrapV = HH;
          }
          EH._cachedWrapU !== IH.wrapU && (EH._cachedWrapU = IH.wrapU, this._setTextureParameterInteger(sH, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(IH.wrapU), EH)), EH._cachedWrapV !== IH.wrapV && (EH._cachedWrapV = IH.wrapV, this._setTextureParameterInteger(sH, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(IH.wrapV), EH)), EH.is3D && EH._cachedWrapR !== IH.wrapR && (EH._cachedWrapR = IH.wrapR, this._setTextureParameterInteger(sH, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(IH.wrapR), EH)), this._setAnisotropicLevel(sH, EH, IH.anisotropicFilteringLevel);
        }
        return !0;
      }
      setTextureArray(HH, IH, EH, RH) {
        if (void 0 !== HH && IH) {
          this._textureUnits && this._textureUnits.length === EH.length || (this._textureUnits = new Int32Array(EH.length));
          for (let IH = 0; IH < EH.length; IH++) {
            const RH = EH[IH].getInternalTexture();
            RH ? (this._textureUnits[IH] = HH + IH, RH._associatedChannel = HH + IH) : this._textureUnits[IH] = -1;
          }
          this._gl.uniform1iv(IH, this._textureUnits);
          for (let HH = 0; HH < EH.length; HH++) this._setTexture(this._textureUnits[HH], EH[HH], !0);
        }
      }
      _setAnisotropicLevel(HH, IH, EH) {
        const RH = this._caps.textureAnisotropicFilterExtension;
        11 !== IH.samplingMode && 3 !== IH.samplingMode && 2 !== IH.samplingMode && (EH = 1), RH && IH._cachedAnisotropicFilteringLevel !== EH && (this._setTextureParameterFloat(HH, RH.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(EH, this._caps.maxAnisotropy), IH), IH._cachedAnisotropicFilteringLevel = EH);
      }
      _setTextureParameterFloat(HH, IH, EH, RH) {
        this._bindTextureDirectly(HH, RH, !0, !0), this._gl.texParameterf(HH, IH, EH);
      }
      _setTextureParameterInteger(HH, IH, EH, RH) {
        RH && this._bindTextureDirectly(HH, RH, !0, !0), this._gl.texParameteri(HH, IH, EH);
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let HH = 0; HH < this._caps.maxVertexAttribs; HH++) this.disableAttributeByIndex(HH);
        } else for (let HH = 0, IH = this._vertexAttribArraysEnabled.length; HH < IH; HH++) HH >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[HH] || this.disableAttributeByIndex(HH);
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this);
      }
      dispose() {
        var HH;
        ((0, GH.m)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose) && (null === (HH = this._gl.getExtension("WEBGL_lose_context")) || void 0 === HH || HH.loseContext());
        (0, hH.t)(this._gl);
      }
      attachContextLostEvent(HH) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", HH, !1);
      }
      attachContextRestoredEvent(HH) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", HH, !1);
      }
      getError() {
        return this._gl.getError();
      }
      _canRenderToFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(1);
      }
      _canRenderToHalfFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(2);
      }
      _canRenderToFramebuffer(HH) {
        const IH = this._gl;
        for (; IH.getError() !== IH.NO_ERROR;);
        let EH = !0;
        const RH = IH.createTexture();
        IH.bindTexture(IH.TEXTURE_2D, RH), IH.texImage2D(IH.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(HH), 1, 1, 0, IH.RGBA, this._getWebGLTextureType(HH), null), IH.texParameteri(IH.TEXTURE_2D, IH.TEXTURE_MIN_FILTER, IH.NEAREST), IH.texParameteri(IH.TEXTURE_2D, IH.TEXTURE_MAG_FILTER, IH.NEAREST);
        const hH = IH.createFramebuffer();
        IH.bindFramebuffer(IH.FRAMEBUFFER, hH), IH.framebufferTexture2D(IH.FRAMEBUFFER, IH.COLOR_ATTACHMENT0, IH.TEXTURE_2D, RH, 0);
        const TH = IH.checkFramebufferStatus(IH.FRAMEBUFFER);
        if (EH = EH && TH === IH.FRAMEBUFFER_COMPLETE, EH = EH && IH.getError() === IH.NO_ERROR, EH && (IH.clear(IH.COLOR_BUFFER_BIT), EH = EH && IH.getError() === IH.NO_ERROR), EH) {
          IH.bindFramebuffer(IH.FRAMEBUFFER, null);
          const HH = IH.RGBA,
            RH = IH.UNSIGNED_BYTE,
            hH = new Uint8Array(4);
          IH.readPixels(0, 0, 1, 1, HH, RH, hH), EH = EH && IH.getError() === IH.NO_ERROR;
        }
        for (IH.deleteTexture(RH), IH.deleteFramebuffer(hH), IH.bindFramebuffer(IH.FRAMEBUFFER, null); !EH && IH.getError() !== IH.NO_ERROR;);
        return EH;
      }
      _getWebGLTextureType(HH) {
        if (1 === this._webGLVersion) {
          switch (HH) {
            case 1:
              return this._gl.FLOAT;
            case 2:
              return this._gl.HALF_FLOAT_OES;
            case 0:
              return this._gl.UNSIGNED_BYTE;
            case 8:
              return this._gl.UNSIGNED_SHORT_4_4_4_4;
            case 9:
              return this._gl.UNSIGNED_SHORT_5_5_5_1;
            case 10:
              return this._gl.UNSIGNED_SHORT_5_6_5;
          }
          return this._gl.UNSIGNED_BYTE;
        }
        switch (HH) {
          case 3:
            return this._gl.BYTE;
          case 0:
            return this._gl.UNSIGNED_BYTE;
          case 4:
            return this._gl.SHORT;
          case 5:
            return this._gl.UNSIGNED_SHORT;
          case 6:
            return this._gl.INT;
          case 7:
            return this._gl.UNSIGNED_INT;
          case 1:
            return this._gl.FLOAT;
          case 2:
            return this._gl.HALF_FLOAT;
          case 8:
            return this._gl.UNSIGNED_SHORT_4_4_4_4;
          case 9:
            return this._gl.UNSIGNED_SHORT_5_5_5_1;
          case 10:
            return this._gl.UNSIGNED_SHORT_5_6_5;
          case 11:
            return this._gl.UNSIGNED_INT_2_10_10_10_REV;
          case 12:
            return this._gl.UNSIGNED_INT_24_8;
          case 13:
            return this._gl.UNSIGNED_INT_10F_11F_11F_REV;
          case 14:
            return this._gl.UNSIGNED_INT_5_9_9_9_REV;
          case 15:
            return this._gl.FLOAT_32_UNSIGNED_INT_24_8_REV;
        }
        return this._gl.UNSIGNED_BYTE;
      }
      _getInternalFormat(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          EH = IH ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (HH) {
          case 0:
            EH = this._gl.ALPHA;
            break;
          case 1:
            EH = this._gl.LUMINANCE;
            break;
          case 2:
            EH = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            EH = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            EH = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            EH = IH ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            EH = IH ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        }
        if (this._webGLVersion > 1) switch (HH) {
          case 8:
            EH = this._gl.RED_INTEGER;
            break;
          case 9:
            EH = this._gl.RG_INTEGER;
            break;
          case 10:
            EH = this._gl.RGB_INTEGER;
            break;
          case 11:
            EH = this._gl.RGBA_INTEGER;
        }
        return EH;
      }
      _getRGBABufferInternalSizedFormat(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== IH) switch (IH) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return EH ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
          }
          return this._gl.RGBA;
        }
        switch (HH) {
          case 3:
            switch (IH) {
              case 6:
                return this._gl.R8_SNORM;
              case 7:
                return this._gl.RG8_SNORM;
              case 4:
                return this._gl.RGB8_SNORM;
              case 8:
                return this._gl.R8I;
              case 9:
                return this._gl.RG8I;
              case 10:
                return this._gl.RGB8I;
              case 11:
                return this._gl.RGBA8I;
              default:
                return this._gl.RGBA8_SNORM;
            }
          case 0:
            switch (IH) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return EH ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return EH ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
              case 8:
                return this._gl.R8UI;
              case 9:
                return this._gl.RG8UI;
              case 10:
                return this._gl.RGB8UI;
              case 11:
                return this._gl.RGBA8UI;
              case 0:
                return this._gl.ALPHA;
              case 1:
                return this._gl.LUMINANCE;
              case 2:
                return this._gl.LUMINANCE_ALPHA;
              default:
                return this._gl.RGBA8;
            }
          case 4:
            switch (IH) {
              case 8:
                return this._gl.R16I;
              case 36760:
                return this._gl.R16_SNORM_EXT;
              case 36761:
                return this._gl.RG16_SNORM_EXT;
              case 36762:
                return this._gl.RGB16_SNORM_EXT;
              case 36763:
                return this._gl.RGBA16_SNORM_EXT;
              case 9:
                return this._gl.RG16I;
              case 10:
                return this._gl.RGB16I;
              default:
                return this._gl.RGBA16I;
            }
          case 5:
            switch (IH) {
              case 8:
                return this._gl.R16UI;
              case 33322:
                return this._gl.R16_EXT;
              case 33324:
                return this._gl.RG16_EXT;
              case 32852:
                return this._gl.RGB16_EXT;
              case 32859:
                return this._gl.RGBA16_EXT;
              case 9:
                return this._gl.RG16UI;
              case 10:
                return this._gl.RGB16UI;
              default:
                return this._gl.RGBA16UI;
            }
          case 6:
            switch (IH) {
              case 8:
                return this._gl.R32I;
              case 9:
                return this._gl.RG32I;
              case 10:
                return this._gl.RGB32I;
              default:
                return this._gl.RGBA32I;
            }
          case 7:
            switch (IH) {
              case 8:
                return this._gl.R32UI;
              case 9:
                return this._gl.RG32UI;
              case 10:
                return this._gl.RGB32UI;
              default:
                return this._gl.RGBA32UI;
            }
          case 1:
            switch (IH) {
              case 6:
                return this._gl.R32F;
              case 7:
                return this._gl.RG32F;
              case 4:
                return this._gl.RGB32F;
              default:
                return this._gl.RGBA32F;
            }
          case 2:
            switch (IH) {
              case 6:
                return this._gl.R16F;
              case 7:
                return this._gl.RG16F;
              case 4:
                return this._gl.RGB16F;
              default:
                return this._gl.RGBA16F;
            }
          case 10:
            return this._gl.RGB565;
          case 13:
            return this._gl.R11F_G11F_B10F;
          case 14:
            return this._gl.RGB9_E5;
          case 8:
            return this._gl.RGBA4;
          case 9:
            return this._gl.RGB5_A1;
          case 11:
            switch (IH) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI;
            }
        }
        return EH ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
      }
      readPixels(HH, IH, EH, RH) {
        let hH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          TH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          sH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const GH = hH ? 4 : 3,
          AH = hH ? this._gl.RGBA : this._gl.RGB,
          VH = EH * RH * GH;
        if (sH) {
          if (sH.length < VH) return eH.e.Error("Data buffer is too small to store the read pixels (".concat(sH.length, " should be more than ").concat(VH, ")")), Promise.resolve(sH);
        } else sH = new Uint8Array(VH);
        return TH && this.flushFramebuffer(), this._gl.readPixels(HH, IH, EH, RH, AH, this._gl.UNSIGNED_BYTE, sH), Promise.resolve(sH);
      }
      static get IsSupportedAsync() {
        return Promise.resolve(this.isSupported());
      }
      static get IsSupported() {
        return this.isSupported();
      }
      static isSupported() {
        if (null !== this._HasMajorPerformanceCaveat) return !this._HasMajorPerformanceCaveat;
        if (null === this._IsSupported) try {
          const HH = TH.c._CreateCanvas(1, 1),
            IH = HH.getContext("webgl") || HH.getContext("experimental-webgl");
          this._IsSupported = null != IH && !!globalThis.WebGLRenderingContext;
        } catch (HH) {
          this._IsSupported = !1;
        }
        return this._IsSupported;
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const HH = TH.c._CreateCanvas(1, 1),
            IH = HH.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || HH.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !IH;
        } catch (HH) {
          this._HasMajorPerformanceCaveat = !1;
        }
        return this._HasMajorPerformanceCaveat;
      }
    }
    PH._TempClearColorUint32 = new Uint32Array(4), PH._TempClearColorInt32 = new Int32Array(4), PH.ExceptionList = [{
      key: "Chrome/63.0",
      capture: "63\\.0\\.3239\\.(\\d+)",
      captureConstraint: 108,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/58",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/59",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/72.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/73.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/74.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/71",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/72",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/12\\d\\..+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: ".*AppleWebKit.*(15.4).*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }, {
      key: ".*(15.4).*AppleWebKit.*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }], PH._ConcatenateShader = FH.c, PH._IsSupported = null, PH._HasMajorPerformanceCaveat = null;
  },
  22081: (HH, IH, EH) => {
    var RH;
    EH.d(IH, {
      c: () => hH
    }), function (HH) {
      HH[HH.PointerMove = 0] = "PointerMove", HH[HH.PointerDown = 1] = "PointerDown", HH[HH.PointerUp = 2] = "PointerUp";
    }(RH || (RH = {}));
    class hH {}
    hH.DOM_DELTA_PIXEL = 0, hH.DOM_DELTA_LINE = 1, hH.DOM_DELTA_PAGE = 2;
  },
  22076: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => RH,
      h: () => TH,
      j: () => hH
    });
    class RH {}
    RH.KEYDOWN = 1, RH.KEYUP = 2;
    class hH {
      constructor(HH, IH) {
        this.type = HH, this.event = IH;
      }
    }
    class TH extends hH {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable;
      }
      set skipOnPointerObservable(HH) {
        this.skipOnKeyboardObservable = HH;
      }
      constructor(HH, IH) {
        super(HH, IH), this.type = HH, this.event = IH, this.skipOnKeyboardObservable = !1;
      }
    }
  },
  22078: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => hH,
      e: () => sH,
      h: () => eH
    });
    var RH = EH(21764);
    class hH {}
    hH.POINTERDOWN = 1, hH.POINTERUP = 2, hH.POINTERMOVE = 4, hH.POINTERWHEEL = 8, hH.POINTERPICK = 16, hH.POINTERTAP = 32, hH.POINTERDOUBLETAP = 64;
    class TH {
      constructor(HH, IH) {
        this.type = HH, this.event = IH;
      }
    }
    class sH extends TH {
      constructor(HH, IH, EH, hH) {
        super(HH, IH), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new RH.t(EH, hH);
      }
    }
    class eH extends TH {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo;
      }
      constructor(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(HH, IH), this._pickInfo = EH, this._inputManager = RH;
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null);
      }
    }
  },
  22253: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => RH
    });
    class RH {
      static CompareLightsPriority(HH, IH) {
        return HH.shadowEnabled !== IH.shadowEnabled ? (IH.shadowEnabled ? 1 : 0) - (HH.shadowEnabled ? 1 : 0) : IH.renderPriority - HH.renderPriority;
      }
    }
    RH.FALLOFF_DEFAULT = 0, RH.FALLOFF_PHYSICAL = 1, RH.FALLOFF_GLTF = 2, RH.FALLOFF_STANDARD = 3, RH.LIGHTMAP_DEFAULT = 0, RH.LIGHTMAP_SPECULAR = 1, RH.LIGHTMAP_SHADOWSONLY = 2, RH.INTENSITYMODE_AUTOMATIC = 0, RH.INTENSITYMODE_LUMINOUSPOWER = 1, RH.INTENSITYMODE_LUMINOUSINTENSITY = 2, RH.INTENSITYMODE_ILLUMINANCE = 3, RH.INTENSITYMODE_LUMINANCE = 4, RH.LIGHTTYPEID_POINTLIGHT = 0, RH.LIGHTTYPEID_DIRECTIONALLIGHT = 1, RH.LIGHTTYPEID_SPOTLIGHT = 2, RH.LIGHTTYPEID_HEMISPHERICLIGHT = 3, RH.LIGHTTYPEID_RECT_AREALIGHT = 4, RH.LIGHTTYPEID_CLUSTERED_CONTAINER = 5;
  },
  22034: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => sH
    });
    var RH,
      hH = EH(21786),
      TH = EH(22037);
    !function (HH) {
      HH[HH.Unknown = 0] = "Unknown", HH[HH.Url = 1] = "Url", HH[HH.Temp = 2] = "Temp", HH[HH.Raw = 3] = "Raw", HH[HH.Dynamic = 4] = "Dynamic", HH[HH.RenderTarget = 5] = "RenderTarget", HH[HH.MultiRenderTarget = 6] = "MultiRenderTarget", HH[HH.Cube = 7] = "Cube", HH[HH.CubeRaw = 8] = "CubeRaw", HH[HH.CubePrefiltered = 9] = "CubePrefiltered", HH[HH.Raw3D = 10] = "Raw3D", HH[HH.Raw2DArray = 11] = "Raw2DArray", HH[HH.DepthStencil = 12] = "DepthStencil", HH[HH.CubeRawRGBD = 13] = "CubeRawRGBD", HH[HH.Depth = 14] = "Depth", HH[HH.External = 15] = "External";
    }(RH || (RH = {}));
    class sH extends TH.c {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps;
      }
      set useMipMaps(HH) {
        this._useMipMaps = HH;
      }
      get uniqueId() {
        return this._uniqueId;
      }
      _setUniqueId(HH) {
        this._uniqueId = HH;
      }
      getEngine() {
        return this._engine;
      }
      get source() {
        return this._source;
      }
      constructor(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new hH.e(), this.onErrorObservable = new hH.e(), this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = HH, this._source = IH, this._uniqueId = sH._Counter++, EH || (this._hardwareTexture = HH._createHardwareTexture());
      }
      incrementReferences() {
        this._references++;
      }
      updateSize(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, HH, IH, EH), this.width = HH, this.height = IH, this.depth = EH, this.baseWidth = HH, this.baseHeight = IH, this.baseDepth = EH, this._size = HH * IH * EH;
      }
      _rebuild() {
        var HH, IH;
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const HH = this.onRebuildCallback(this),
            IH = IH => {
              IH._swapAndDie(this, !1), this.isReady = HH.isReady;
            };
          return void (HH.isAsync ? HH.proxy.then(IH) : IH(HH.proxy));
        }
        let EH;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void (EH = this._engine.createTexture(null !== (HH = this._originalUrl) && void 0 !== HH ? HH : this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, HH => {
              HH._swapAndDie(this, !1), this.isReady = !0;
            }, null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (EH = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), EH._swapAndDie(this, !1), this._bufferViewArray) for (let HH = 0; HH < this._bufferViewArray.length; HH++) {
              const IH = this._bufferViewArray[HH];
              IH && this._engine.updateRawTexture(this, IH, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, HH);
            }
            this.isReady = !0;
            break;
          case 10:
            EH = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), EH._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (EH = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), EH._swapAndDie(this, !1), this._bufferViewArray) for (let HH = 0; HH < this._bufferViewArray.length; HH++) {
              const IH = this._bufferViewArray[HH];
              IH && this._engine.updateRawTexture2DArray(this, IH, this.format, this.invertY, this._compression, this.type, HH);
            }
            this.isReady = !0;
            break;
          case 4:
            EH = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), EH._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void (EH = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, () => {
              EH._swapAndDie(this, !1), this.isReady = !0;
            }, null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            EH = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, null !== (IH = this._originalFormat) && void 0 !== IH ? IH : this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), EH._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return EH = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, HH => {
              HH && HH._swapAndDie(this, !1), this.isReady = !0;
            }, null, this.format, this._extension), void (EH._sphericalPolynomial = this._sphericalPolynomial);
        }
      }
      _swapAndDie(HH) {
        var IH;
        let EH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        null === (IH = this._hardwareTexture) || void 0 === IH || IH.setUsage(HH._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), HH._hardwareTexture = this._hardwareTexture, HH._setUniqueId(sH._Counter++), EH && (HH._isRGBD = this._isRGBD), this._lodTextureHigh && (HH._lodTextureHigh && HH._lodTextureHigh.dispose(), HH._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (HH._lodTextureMid && HH._lodTextureMid.dispose(), HH._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (HH._lodTextureLow && HH._lodTextureLow.dispose(), HH._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (HH._irradianceTexture && HH._irradianceTexture.dispose(), HH._irradianceTexture = this._irradianceTexture);
        const RH = this._engine.getLoadedTexturesCache();
        let hH = RH.indexOf(this);
        -1 !== hH && RH.splice(hH, 1), hH = RH.indexOf(HH), -1 === hH && RH.push(HH);
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null);
      }
    }
    sH._Counter = 0;
  },
  22162: (HH, IH, EH) => {
    function RH(HH) {
      return 13 === HH || 14 === HH || 15 === HH || 16 === HH || 17 === HH || 18 === HH || 19 === HH;
    }
    function hH(HH) {
      return 13 === HH || 17 === HH || 18 === HH || 19 === HH;
    }
    EH.d(IH, {
      b: () => hH,
      d: () => RH
    });
  },
  22037: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => RH
    });
    class RH {
      get wrapU() {
        return this._cachedWrapU;
      }
      set wrapU(HH) {
        this._cachedWrapU = HH;
      }
      get wrapV() {
        return this._cachedWrapV;
      }
      set wrapV(HH) {
        this._cachedWrapV = HH;
      }
      get wrapR() {
        return this._cachedWrapR;
      }
      set wrapR(HH) {
        this._cachedWrapR = HH;
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel;
      }
      set anisotropicFilteringLevel(HH) {
        this._cachedAnisotropicFilteringLevel = HH;
      }
      get comparisonFunction() {
        return this._comparisonFunction;
      }
      set comparisonFunction(HH) {
        this._comparisonFunction = HH;
      }
      get useMipMaps() {
        return this._useMipMaps;
      }
      set useMipMaps(HH) {
        this._useMipMaps = HH;
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0;
      }
      setParameters() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = HH, this._cachedWrapV = IH, this._cachedWrapR = EH, this._cachedAnisotropicFilteringLevel = RH, this.samplingMode = hH, this._comparisonFunction = TH, this;
      }
      compareSampler(HH) {
        return this._cachedWrapU === HH._cachedWrapU && this._cachedWrapV === HH._cachedWrapV && this._cachedWrapR === HH._cachedWrapR && this._cachedAnisotropicFilteringLevel === HH._cachedAnisotropicFilteringLevel && this.samplingMode === HH.samplingMode && this._comparisonFunction === HH._comparisonFunction && this._useMipMaps === HH._useMipMaps;
      }
    }
  },
  22308: (HH, IH, EH) => {
    function RH(HH) {
      HH.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative");
    }
    EH.d(IH, {
      c: () => RH
    });
  },
  22147: (HH, IH, EH) => {
    function RH(HH) {
      return void 0 === HH.getPipelineContext;
    }
    EH.d(IH, {
      b: () => RH
    });
  },
  22215: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => hH
    });
    var RH = EH(21900);
    class hH {
      static GetEffect(HH) {
        return void 0 === HH.getPipelineContext ? HH.effect : HH;
      }
      constructor(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = HH.createDrawContext(), IH && (this.materialContext = HH.createMaterialContext());
      }
      setEffect(HH, IH) {
        let EH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var RH;
        (this.effect = HH, void 0 !== IH && (this.defines = IH), EH) && (null === (RH = this.drawContext) || void 0 === RH || RH.reset());
      }
      dispose() {
        var HH;
        let IH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const HH = this.effect;
          IH ? HH.dispose() : RH.e.SetImmediate(() => {
            HH.getEngine().onEndFrameObservable.addOnce(() => {
              HH.dispose();
            });
          }), this.effect = null;
        }
        null === (HH = this.drawContext) || void 0 === HH || HH.dispose();
      }
    }
  },
  22267: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => VH,
      f: () => mI,
      h: () => XH
    });
    var RH = EH(22010),
      hH = EH(21764),
      TH = EH(21799),
      sH = EH(22235);
    const eH = new hH.d(),
      GH = new hH.d(),
      AH = new hH.d(),
      VH = {
        kh: () => {},
        eyeAtCamera: !0
      };
    function YH(HH, IH, EH) {
      const RH = EH.GM(),
        hH = IH.GM();
      for (let TH = 0; TH < 16; TH++) RH[TH] = hH[TH];
      return RH[12] -= HH.x, RH[13] -= HH.y, RH[14] -= HH.z, EH.markAsUpdated(), EH;
    }
    function QH(HH, IH, EH) {
      return (0, TH.k)(IH, GH), YH(HH, GH, AH), (0, TH.k)(AH, EH), EH;
    }
    function JH(HH, IH, EH) {
      if (!VH.eyeAtCamera) return QH(HH, IH, EH);
      const RH = EH.GM(),
        hH = IH.GM();
      for (let TH = 0; TH < 16; TH++) RH[TH] = hH[TH];
      return RH[12] = 0, RH[13] = 0, RH[14] = 0, EH.markAsUpdated(), EH;
    }
    function OH(HH, IH, EH, RH) {
      return (0, TH.s)(JH(HH, IH, RH), EH, RH), RH;
    }
    function rH(HH, IH, EH, RH) {
      return (0, TH.k)(EH, GH), (0, TH.s)(IH, GH, AH), YH(HH, AH, GH), JH(HH, EH, AH), (0, TH.s)(GH, AH, RH), RH;
    }
    function FH(HH, IH, EH, RH, hH, sH) {
      return (0, TH.k)(EH, GH), (0, TH.s)(IH, GH, AH), YH(HH, AH, GH), OH(HH, RH, hH, AH), (0, TH.s)(GH, AH, sH), sH;
    }
    function MH(HH, IH) {
      const EH = VH.kh();
      if (!EH || eH === IH) return IH;
      eH.updateFlag = IH.updateFlag;
      const RH = EH.floatingOriginOffset;
      switch (HH) {
        case "world":
          return YH(RH, IH, eH);
        case "view":
          return JH(RH, IH, eH);
        case "worldView":
          return rH(RH, IH, EH.getViewMatrix(), eH);
        case "viewProjection":
          return OH(RH, EH.getViewMatrix(), EH.getProjectionMatrix(), eH);
        case "worldViewProjection":
          return FH(RH, IH, EH.getTransformMatrix(), EH.getViewMatrix(), EH.getProjectionMatrix(), eH);
        default:
          if (HH.startsWith("u_")) {
            const hH = HH.toLowerCase();
            if (hH.startsWith("u_worldviewprojection")) return FH(RH, IH, EH.getTransformMatrix(), EH.getViewMatrix(), EH.getProjectionMatrix(), eH);
            if (hH.startsWith("u_viewprojection")) return OH(RH, EH.getViewMatrix(), EH.getProjectionMatrix(), eH);
            if (hH.startsWith("u_worldview")) return rH(RH, IH, EH.getViewMatrix(), eH);
            if (hH.startsWith("u_world")) return YH(RH, IH, eH);
            if (hH.startsWith("u_view")) return JH(RH, IH, eH);
          }
          return IH;
      }
    }
    const NH = sH.e,
      iI = RH.c,
      DH = NH.prototype._updateMatrixForUniform,
      PH = RH.c.prototype.setMatrix;
    function XH() {
      RH.c.prototype.setMatrix = PH, iI._setMatrixOverride = void 0, NH.prototype._updateMatrixForUniform = DH, NH.prototype._updateMatrixForUniformOverride = void 0;
    }
    function mI() {
      iI.prototype._setMatrixOverride = PH, iI.prototype.setMatrix = function (HH, IH) {
        return this._setMatrixOverride(HH, MH(HH, IH)), this;
      }, NH.prototype._updateMatrixForUniformOverride = DH, NH.prototype._updateMatrixForUniform = function (HH, IH) {
        this._updateMatrixForUniformOverride(HH, MH(HH, IH));
      };
    }
  },
  22315: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => TH,
      g: () => hH
    });
    var RH = EH(22308);
    function hH(HH, IH) {
      IH.EXPOSURE && HH.push("exposureLinear"), IH.CONTRAST && HH.push("contrast"), IH.COLORGRADING && HH.push("colorTransformSettings"), (IH.VIGNETTE || IH.DITHER) && HH.push("vInverseScreenSize"), IH.VIGNETTE && (HH.push("vignetteSettings1"), HH.push("vignetteSettings2")), IH.COLORCURVES && (0, RH.c)(HH), IH.DITHER && HH.push("ditherIntensity");
    }
    function TH(HH, IH) {
      IH.COLORGRADING && HH.push("txColorTransform");
    }
  },
  22304: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => OH,
      d: () => MH
    });
    var RH = EH(21947),
      hH = EH(21956),
      TH = EH(21786),
      sH = EH(21817),
      eH = EH(21972),
      GH = EH(22308);
    let AH = (() => {
      var HH;
      let IH,
        EH,
        TH,
        AH,
        VH,
        YH,
        QH,
        JH,
        OH,
        rH,
        FH,
        MH,
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
        WH = [],
        BH = [],
        fH = [],
        aH = [],
        nH = [],
        pH = [],
        dH = [],
        uH = [];
      return HH = class {
        constructor() {
          this._dirty = !0, this._tempColor = new sH.d(0, 0, 0, 0), this._globalCurve = new sH.d(0, 0, 0, 0), this._highlightsCurve = new sH.d(0, 0, 0, 0), this._midtonesCurve = new sH.d(0, 0, 0, 0), this._shadowsCurve = new sH.d(0, 0, 0, 0), this._positiveCurve = new sH.d(0, 0, 0, 0), this._negativeCurve = new sH.d(0, 0, 0, 0), this._globalHue = (0, RH.j)(this, NH, 30), this._globalDensity = ((0, RH.j)(this, iI), (0, RH.j)(this, DH, 0)), this._globalSaturation = ((0, RH.j)(this, PH), (0, RH.j)(this, XH, 0)), this._globalExposure = ((0, RH.j)(this, mI), (0, RH.j)(this, ZH, 0)), this._highlightsHue = ((0, RH.j)(this, qH), (0, RH.j)(this, LH, 30)), this._highlightsDensity = ((0, RH.j)(this, gH), (0, RH.j)(this, yH, 0)), this._highlightsSaturation = ((0, RH.j)(this, oH), (0, RH.j)(this, kI, 0)), this._highlightsExposure = ((0, RH.j)(this, CH), (0, RH.j)(this, cH, 0)), this._midtonesHue = ((0, RH.j)(this, UH), (0, RH.j)(this, WH, 30)), this._midtonesDensity = ((0, RH.j)(this, BH), (0, RH.j)(this, fH, 0)), this._midtonesSaturation = ((0, RH.j)(this, aH), (0, RH.j)(this, nH, 0)), this._midtonesExposure = ((0, RH.j)(this, pH), (0, RH.j)(this, dH, 0)), this._shadowsHue = ((0, RH.j)(this, uH), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0;
        }
        get globalHue() {
          return this._globalHue;
        }
        set globalHue(HH) {
          this._globalHue = HH, this._dirty = !0;
        }
        get globalDensity() {
          return this._globalDensity;
        }
        set globalDensity(HH) {
          this._globalDensity = HH, this._dirty = !0;
        }
        get globalSaturation() {
          return this._globalSaturation;
        }
        set globalSaturation(HH) {
          this._globalSaturation = HH, this._dirty = !0;
        }
        get globalExposure() {
          return this._globalExposure;
        }
        set globalExposure(HH) {
          this._globalExposure = HH, this._dirty = !0;
        }
        get highlightsHue() {
          return this._highlightsHue;
        }
        set highlightsHue(HH) {
          this._highlightsHue = HH, this._dirty = !0;
        }
        get highlightsDensity() {
          return this._highlightsDensity;
        }
        set highlightsDensity(HH) {
          this._highlightsDensity = HH, this._dirty = !0;
        }
        get highlightsSaturation() {
          return this._highlightsSaturation;
        }
        set highlightsSaturation(HH) {
          this._highlightsSaturation = HH, this._dirty = !0;
        }
        get highlightsExposure() {
          return this._highlightsExposure;
        }
        set highlightsExposure(HH) {
          this._highlightsExposure = HH, this._dirty = !0;
        }
        get midtonesHue() {
          return this._midtonesHue;
        }
        set midtonesHue(HH) {
          this._midtonesHue = HH, this._dirty = !0;
        }
        get midtonesDensity() {
          return this._midtonesDensity;
        }
        set midtonesDensity(HH) {
          this._midtonesDensity = HH, this._dirty = !0;
        }
        get midtonesSaturation() {
          return this._midtonesSaturation;
        }
        set midtonesSaturation(HH) {
          this._midtonesSaturation = HH, this._dirty = !0;
        }
        get midtonesExposure() {
          return this._midtonesExposure;
        }
        set midtonesExposure(HH) {
          this._midtonesExposure = HH, this._dirty = !0;
        }
        get shadowsHue() {
          return this._shadowsHue;
        }
        set shadowsHue(HH) {
          this._shadowsHue = HH, this._dirty = !0;
        }
        get shadowsDensity() {
          return this._shadowsDensity;
        }
        set shadowsDensity(HH) {
          this._shadowsDensity = HH, this._dirty = !0;
        }
        get shadowsSaturation() {
          return this._shadowsSaturation;
        }
        set shadowsSaturation(HH) {
          this._shadowsSaturation = HH, this._dirty = !0;
        }
        get shadowsExposure() {
          return this._shadowsExposure;
        }
        set shadowsExposure(HH) {
          this._shadowsExposure = HH, this._dirty = !0;
        }
        getClassName() {
          return "ColorCurves";
        }
        _getColorGradingDataToRef(IH, EH, RH, hH, TH) {
          null != IH && (IH = HH._Clamp(IH, 0, 360), EH = HH._Clamp(EH, -100, 100), RH = HH._Clamp(RH, -100, 100), hH = HH._Clamp(hH, -100, 100), EH = HH._ApplyColorGradingSliderNonlinear(EH), EH *= .5, hH = HH._ApplyColorGradingSliderNonlinear(hH), EH < 0 && (EH *= -1, IH = (IH + 180) % 360), HH._FromHSBToRef(IH, EH, 50 + .25 * hH, TH), TH.scaleToRef(2, TH), TH.a = 1 + .01 * RH);
        }
        static _ApplyColorGradingSliderNonlinear(HH) {
          HH /= 100;
          let IH = Math.abs(HH);
          return IH = Math.pow(IH, 2), HH < 0 && (IH *= -1), IH *= 100, IH;
        }
        static _FromHSBToRef(IH, EH, RH, hH) {
          let TH = HH._Clamp(IH, 0, 360);
          const sH = HH._Clamp(EH / 100, 0, 1),
            eH = HH._Clamp(RH / 100, 0, 1);
          if (0 === sH) hH.r = eH, hH.g = eH, hH.b = eH;else {
            TH /= 60;
            const HH = Math.floor(TH),
              IH = TH - HH,
              EH = eH * (1 - sH),
              RH = eH * (1 - sH * IH),
              GH = eH * (1 - sH * (1 - IH));
            switch (HH) {
              case 0:
                hH.r = eH, hH.g = GH, hH.b = EH;
                break;
              case 1:
                hH.r = RH, hH.g = eH, hH.b = EH;
                break;
              case 2:
                hH.r = EH, hH.g = eH, hH.b = GH;
                break;
              case 3:
                hH.r = EH, hH.g = RH, hH.b = eH;
                break;
              case 4:
                hH.r = GH, hH.g = EH, hH.b = eH;
                break;
              default:
                hH.r = eH, hH.g = EH, hH.b = RH;
            }
          }
          hH.a = 1;
        }
        static _Clamp(HH, IH, EH) {
          return Math.min(Math.max(HH, IH), EH);
        }
        clone() {
          return eH.c.Clone(() => new HH(), this);
        }
        serialize() {
          return eH.c.Serialize(this);
        }
        _bind(HH) {
          let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), HH && (HH.setFloat4(IH, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), HH.setFloat4(EH, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), HH.setFloat4(RH, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a));
        }
      }, (() => {
        const sH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IH = [(0, hH.K)()], EH = [(0, hH.K)()], TH = [(0, hH.K)()], AH = [(0, hH.K)()], VH = [(0, hH.K)()], YH = [(0, hH.K)()], QH = [(0, hH.K)()], JH = [(0, hH.K)()], OH = [(0, hH.K)()], rH = [(0, hH.K)()], FH = [(0, hH.K)()], MH = [(0, hH.K)()], (0, RH.i)(null, null, IH, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: HH => "_globalHue" in HH,
            get: HH => HH._globalHue,
            set: (HH, IH) => {
              HH._globalHue = IH;
            }
          },
          metadata: sH
        }, NH, iI), (0, RH.i)(null, null, EH, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "_globalDensity" in HH,
            get: HH => HH._globalDensity,
            set: (HH, IH) => {
              HH._globalDensity = IH;
            }
          },
          metadata: sH
        }, DH, PH), (0, RH.i)(null, null, TH, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: HH => "_globalSaturation" in HH,
            get: HH => HH._globalSaturation,
            set: (HH, IH) => {
              HH._globalSaturation = IH;
            }
          },
          metadata: sH
        }, XH, mI), (0, RH.i)(null, null, AH, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: HH => "_globalExposure" in HH,
            get: HH => HH._globalExposure,
            set: (HH, IH) => {
              HH._globalExposure = IH;
            }
          },
          metadata: sH
        }, ZH, qH), (0, RH.i)(null, null, VH, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: HH => "_highlightsHue" in HH,
            get: HH => HH._highlightsHue,
            set: (HH, IH) => {
              HH._highlightsHue = IH;
            }
          },
          metadata: sH
        }, LH, gH), (0, RH.i)(null, null, YH, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "_highlightsDensity" in HH,
            get: HH => HH._highlightsDensity,
            set: (HH, IH) => {
              HH._highlightsDensity = IH;
            }
          },
          metadata: sH
        }, yH, oH), (0, RH.i)(null, null, QH, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: HH => "_highlightsSaturation" in HH,
            get: HH => HH._highlightsSaturation,
            set: (HH, IH) => {
              HH._highlightsSaturation = IH;
            }
          },
          metadata: sH
        }, kI, CH), (0, RH.i)(null, null, JH, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: HH => "_highlightsExposure" in HH,
            get: HH => HH._highlightsExposure,
            set: (HH, IH) => {
              HH._highlightsExposure = IH;
            }
          },
          metadata: sH
        }, cH, UH), (0, RH.i)(null, null, OH, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: HH => "_midtonesHue" in HH,
            get: HH => HH._midtonesHue,
            set: (HH, IH) => {
              HH._midtonesHue = IH;
            }
          },
          metadata: sH
        }, WH, BH), (0, RH.i)(null, null, rH, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "_midtonesDensity" in HH,
            get: HH => HH._midtonesDensity,
            set: (HH, IH) => {
              HH._midtonesDensity = IH;
            }
          },
          metadata: sH
        }, fH, aH), (0, RH.i)(null, null, FH, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: HH => "_midtonesSaturation" in HH,
            get: HH => HH._midtonesSaturation,
            set: (HH, IH) => {
              HH._midtonesSaturation = IH;
            }
          },
          metadata: sH
        }, nH, pH), (0, RH.i)(null, null, MH, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: HH => "_midtonesExposure" in HH,
            get: HH => HH._midtonesExposure,
            set: (HH, IH) => {
              HH._midtonesExposure = IH;
            }
          },
          metadata: sH
        }, dH, uH), sH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: sH
        });
      })(), HH.PrepareUniforms = GH.c, HH;
    })();
    function VH(HH, IH) {
      let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      HH._bind(IH, EH, RH, hH);
    }
    var YH = EH(21930),
      QH = EH(22315),
      JH = EH(21808);
    let OH = (() => {
        var HH;
        let IH,
          EH,
          GH,
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
          CH,
          cH,
          UH,
          WH,
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
          cI = [];
        return HH = class {
          constructor() {
            this.colorCurves = (0, RH.j)(this, BH, new AH()), this._colorCurvesEnabled = ((0, RH.j)(this, fH), (0, RH.j)(this, aH, !1)), this._colorGradingTexture = ((0, RH.j)(this, nH), (0, RH.j)(this, pH, void 0)), this._colorGradingEnabled = ((0, RH.j)(this, dH), (0, RH.j)(this, uH, !1)), this._colorGradingWithGreenDepth = ((0, RH.j)(this, lH), (0, RH.j)(this, KH, !0)), this._colorGradingBGR = ((0, RH.j)(this, wH), (0, RH.j)(this, zH, !0)), this._exposure = ((0, RH.j)(this, tH), (0, RH.j)(this, jI, 1)), this._toneMappingEnabled = ((0, RH.j)(this, vH), (0, RH.j)(this, bH, !1)), this._toneMappingType = ((0, RH.j)(this, SH), (0, RH.j)(this, xH, HH.TONEMAPPING_STANDARD)), this._contrast = ((0, RH.j)(this, HI), (0, RH.j)(this, II, 1)), this.vignetteStretch = ((0, RH.j)(this, EI), (0, RH.j)(this, RI, 0)), this.vignetteCenterX = ((0, RH.j)(this, hI), (0, RH.j)(this, TI, 0)), this.vignetteCenterY = ((0, RH.j)(this, sI), (0, RH.j)(this, eI, 0)), this.vignetteWeight = ((0, RH.j)(this, GI), (0, RH.j)(this, AI, 1.5)), this.vignetteColor = ((0, RH.j)(this, VI), (0, RH.j)(this, YI, new sH.d(0, 0, 0, 0))), this.vignetteCameraFov = ((0, RH.j)(this, QI), (0, RH.j)(this, JI, .5)), this._vignetteBlendMode = ((0, RH.j)(this, OI), (0, RH.j)(this, rI, HH.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, RH.j)(this, FI), (0, RH.j)(this, MI, !1)), this._ditheringEnabled = ((0, RH.j)(this, NI), (0, RH.j)(this, iE, !1)), this._ditheringIntensity = ((0, RH.j)(this, DI), (0, RH.j)(this, PI, 1 / 255)), this._skipFinalColorClamp = ((0, RH.j)(this, XI), (0, RH.j)(this, mE, !1)), this._applyByPostProcess = ((0, RH.j)(this, ZI), (0, RH.j)(this, qI, !1)), this._isEnabled = ((0, RH.j)(this, LI), (0, RH.j)(this, gI, !0)), this.outputTextureWidth = ((0, RH.j)(this, yI), (0, RH.j)(this, oI, 0)), this.outputTextureHeight = ((0, RH.j)(this, kE), (0, RH.j)(this, CI, 0)), this.onUpdateParameters = ((0, RH.j)(this, cI), new TH.e());
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled;
          }
          set colorCurvesEnabled(HH) {
            this._colorCurvesEnabled !== HH && (this._colorCurvesEnabled = HH, this._updateParameters());
          }
          get colorGradingTexture() {
            return this._colorGradingTexture;
          }
          set colorGradingTexture(HH) {
            this._colorGradingTexture !== HH && (this._colorGradingTexture = HH, this._updateParameters());
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled;
          }
          set colorGradingEnabled(HH) {
            this._colorGradingEnabled !== HH && (this._colorGradingEnabled = HH, this._updateParameters());
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth;
          }
          set colorGradingWithGreenDepth(HH) {
            this._colorGradingWithGreenDepth !== HH && (this._colorGradingWithGreenDepth = HH, this._updateParameters());
          }
          get colorGradingBGR() {
            return this._colorGradingBGR;
          }
          set colorGradingBGR(HH) {
            this._colorGradingBGR !== HH && (this._colorGradingBGR = HH, this._updateParameters());
          }
          get exposure() {
            return this._exposure;
          }
          set exposure(HH) {
            this._exposure !== HH && (this._exposure = HH, this._updateParameters());
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled;
          }
          set toneMappingEnabled(HH) {
            this._toneMappingEnabled !== HH && (this._toneMappingEnabled = HH, this._updateParameters());
          }
          get toneMappingType() {
            return this._toneMappingType;
          }
          set toneMappingType(HH) {
            this._toneMappingType !== HH && (this._toneMappingType = HH, this._updateParameters());
          }
          get contrast() {
            return this._contrast;
          }
          set contrast(HH) {
            this._contrast !== HH && (this._contrast = HH, this._updateParameters());
          }
          get vignetteCentreY() {
            return this.vignetteCenterY;
          }
          set vignetteCentreY(HH) {
            this.vignetteCenterY = HH;
          }
          get vignetteCentreX() {
            return this.vignetteCenterX;
          }
          set vignetteCentreX(HH) {
            this.vignetteCenterX = HH;
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode;
          }
          set vignetteBlendMode(HH) {
            this._vignetteBlendMode !== HH && (this._vignetteBlendMode = HH, this._updateParameters());
          }
          get vignetteEnabled() {
            return this._vignetteEnabled;
          }
          set vignetteEnabled(HH) {
            this._vignetteEnabled !== HH && (this._vignetteEnabled = HH, this._updateParameters());
          }
          get ditheringEnabled() {
            return this._ditheringEnabled;
          }
          set ditheringEnabled(HH) {
            this._ditheringEnabled !== HH && (this._ditheringEnabled = HH, this._updateParameters());
          }
          get ditheringIntensity() {
            return this._ditheringIntensity;
          }
          set ditheringIntensity(HH) {
            this._ditheringIntensity !== HH && (this._ditheringIntensity = HH, this._updateParameters());
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp;
          }
          set skipFinalColorClamp(HH) {
            this._skipFinalColorClamp !== HH && (this._skipFinalColorClamp = HH, this._updateParameters());
          }
          get applyByPostProcess() {
            return this._applyByPostProcess;
          }
          set applyByPostProcess(HH) {
            this._applyByPostProcess !== HH && (this._applyByPostProcess = HH, this._updateParameters());
          }
          get isEnabled() {
            return this._isEnabled;
          }
          set isEnabled(HH) {
            this._isEnabled !== HH && (this._isEnabled = HH, this._updateParameters());
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this);
          }
          getClassName() {
            return "ImageProcessingConfiguration";
          }
          prepareDefines(IH) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return IH.VIGNETTE = !1, IH.TONEMAPPING = 0, IH.CONTRAST = !1, IH.EXPOSURE = !1, IH.COLORCURVES = !1, IH.COLORGRADING = !1, IH.COLORGRADING3D = !1, IH.DITHER = !1, IH.IMAGEPROCESSING = !1, IH.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void (IH.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (IH.VIGNETTE = this.vignetteEnabled, IH.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === HH._VIGNETTEMODE_MULTIPLY, IH.VIGNETTEBLENDMODEOPAQUE = !IH.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case HH.TONEMAPPING_KHR_PBR_NEUTRAL:
                IH.TONEMAPPING = 3;
                break;
              case HH.TONEMAPPING_ACES:
                IH.TONEMAPPING = 2;
                break;
              default:
                IH.TONEMAPPING = 1;
            } else IH.TONEMAPPING = 0;
            IH.CONTRAST = 1 !== this.contrast, IH.EXPOSURE = 1 !== this.exposure, IH.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, IH.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, IH.COLORGRADING ? IH.COLORGRADING3D = this.colorGradingTexture.is3D : IH.COLORGRADING3D = !1, IH.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, IH.SAMPLER3DBGRMAP = this.colorGradingBGR, IH.DITHER = this._ditheringEnabled, IH.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, IH.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, IH.IMAGEPROCESSING = IH.VIGNETTE || !!IH.TONEMAPPING || IH.CONTRAST || IH.EXPOSURE || IH.COLORCURVES || IH.COLORGRADING || IH.DITHER;
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady();
          }
          bind(HH, IH) {
            if (this._colorCurvesEnabled && this.colorCurves && VH(this.colorCurves, HH), this._vignetteEnabled || this._ditheringEnabled) {
              const EH = 1 / (this.outputTextureWidth || HH.getEngine().getRenderWidth()),
                RH = 1 / (this.outputTextureHeight || HH.getEngine().getRenderHeight());
              if (HH.setFloat2("vInverseScreenSize", EH, RH), this._ditheringEnabled && HH.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const hH = null != IH ? IH : RH / EH;
                let TH = Math.tan(.5 * this.vignetteCameraFov),
                  sH = TH * hH;
                const eH = Math.sqrt(sH * TH);
                sH = (0, YH.l)(sH, eH, this.vignetteStretch), TH = (0, YH.l)(TH, eH, this.vignetteStretch), HH.setFloat4("vignetteSettings1", sH, TH, -sH * this.vignetteCenterX, -TH * this.vignetteCenterY);
                const GH = -2 * this.vignetteWeight;
                HH.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, GH);
              }
            }
            if (HH.setFloat("exposureLinear", this.exposure), HH.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              HH.setTexture("txColorTransform", this.colorGradingTexture);
              const IH = this.colorGradingTexture.getSize().height;
              HH.setFloat4("colorTransformSettings", (IH - 1) / IH, .5 / IH, IH, this.colorGradingTexture.level);
            }
          }
          clone() {
            return eH.c.Clone(() => new HH(), this);
          }
          serialize() {
            return eH.c.Serialize(this);
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY;
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE;
          }
        }, (() => {
          const TH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IH = [(0, hH.i)()], EH = [(0, hH.K)()], GH = [(0, hH.F)("colorGradingTexture")], JH = [(0, hH.K)()], OH = [(0, hH.K)()], rH = [(0, hH.K)()], FH = [(0, hH.K)()], MH = [(0, hH.K)()], NH = [(0, hH.K)()], iI = [(0, hH.K)()], DH = [(0, hH.K)()], PH = [(0, hH.K)()], XH = [(0, hH.K)()], mI = [(0, hH.K)()], ZH = [(0, hH.p)()], qH = [(0, hH.K)()], LH = [(0, hH.K)()], gH = [(0, hH.K)()], yH = [(0, hH.K)()], oH = [(0, hH.K)()], kI = [(0, hH.K)()], CH = [(0, hH.K)()], cH = [(0, hH.K)()], UH = [(0, hH.K)()], WH = [(0, hH.K)()], (0, RH.i)(null, null, IH, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: HH => "colorCurves" in HH,
              get: HH => HH.colorCurves,
              set: (HH, IH) => {
                HH.colorCurves = IH;
              }
            },
            metadata: TH
          }, BH, fH), (0, RH.i)(null, null, EH, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: HH => "_colorCurvesEnabled" in HH,
              get: HH => HH._colorCurvesEnabled,
              set: (HH, IH) => {
                HH._colorCurvesEnabled = IH;
              }
            },
            metadata: TH
          }, aH, nH), (0, RH.i)(null, null, GH, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_colorGradingTexture" in HH,
              get: HH => HH._colorGradingTexture,
              set: (HH, IH) => {
                HH._colorGradingTexture = IH;
              }
            },
            metadata: TH
          }, pH, dH), (0, RH.i)(null, null, JH, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: HH => "_colorGradingEnabled" in HH,
              get: HH => HH._colorGradingEnabled,
              set: (HH, IH) => {
                HH._colorGradingEnabled = IH;
              }
            },
            metadata: TH
          }, uH, lH), (0, RH.i)(null, null, OH, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: HH => "_colorGradingWithGreenDepth" in HH,
              get: HH => HH._colorGradingWithGreenDepth,
              set: (HH, IH) => {
                HH._colorGradingWithGreenDepth = IH;
              }
            },
            metadata: TH
          }, KH, wH), (0, RH.i)(null, null, rH, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: HH => "_colorGradingBGR" in HH,
              get: HH => HH._colorGradingBGR,
              set: (HH, IH) => {
                HH._colorGradingBGR = IH;
              }
            },
            metadata: TH
          }, zH, tH), (0, RH.i)(null, null, FH, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: HH => "_exposure" in HH,
              get: HH => HH._exposure,
              set: (HH, IH) => {
                HH._exposure = IH;
              }
            },
            metadata: TH
          }, jI, vH), (0, RH.i)(null, null, MH, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: HH => "_toneMappingEnabled" in HH,
              get: HH => HH._toneMappingEnabled,
              set: (HH, IH) => {
                HH._toneMappingEnabled = IH;
              }
            },
            metadata: TH
          }, bH, SH), (0, RH.i)(null, null, NH, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: HH => "_toneMappingType" in HH,
              get: HH => HH._toneMappingType,
              set: (HH, IH) => {
                HH._toneMappingType = IH;
              }
            },
            metadata: TH
          }, xH, HI), (0, RH.i)(null, null, iI, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: HH => "_contrast" in HH,
              get: HH => HH._contrast,
              set: (HH, IH) => {
                HH._contrast = IH;
              }
            },
            metadata: TH
          }, II, EI), (0, RH.i)(null, null, DH, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: HH => "vignetteStretch" in HH,
              get: HH => HH.vignetteStretch,
              set: (HH, IH) => {
                HH.vignetteStretch = IH;
              }
            },
            metadata: TH
          }, RI, hI), (0, RH.i)(null, null, PH, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: HH => "vignetteCenterX" in HH,
              get: HH => HH.vignetteCenterX,
              set: (HH, IH) => {
                HH.vignetteCenterX = IH;
              }
            },
            metadata: TH
          }, TI, sI), (0, RH.i)(null, null, XH, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: HH => "vignetteCenterY" in HH,
              get: HH => HH.vignetteCenterY,
              set: (HH, IH) => {
                HH.vignetteCenterY = IH;
              }
            },
            metadata: TH
          }, eI, GI), (0, RH.i)(null, null, mI, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: HH => "vignetteWeight" in HH,
              get: HH => HH.vignetteWeight,
              set: (HH, IH) => {
                HH.vignetteWeight = IH;
              }
            },
            metadata: TH
          }, AI, VI), (0, RH.i)(null, null, ZH, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "vignetteColor" in HH,
              get: HH => HH.vignetteColor,
              set: (HH, IH) => {
                HH.vignetteColor = IH;
              }
            },
            metadata: TH
          }, YI, QI), (0, RH.i)(null, null, qH, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: HH => "vignetteCameraFov" in HH,
              get: HH => HH.vignetteCameraFov,
              set: (HH, IH) => {
                HH.vignetteCameraFov = IH;
              }
            },
            metadata: TH
          }, JI, OI), (0, RH.i)(null, null, LH, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: HH => "_vignetteBlendMode" in HH,
              get: HH => HH._vignetteBlendMode,
              set: (HH, IH) => {
                HH._vignetteBlendMode = IH;
              }
            },
            metadata: TH
          }, rI, FI), (0, RH.i)(null, null, gH, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: HH => "_vignetteEnabled" in HH,
              get: HH => HH._vignetteEnabled,
              set: (HH, IH) => {
                HH._vignetteEnabled = IH;
              }
            },
            metadata: TH
          }, MI, NI), (0, RH.i)(null, null, yH, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: HH => "_ditheringEnabled" in HH,
              get: HH => HH._ditheringEnabled,
              set: (HH, IH) => {
                HH._ditheringEnabled = IH;
              }
            },
            metadata: TH
          }, iE, DI), (0, RH.i)(null, null, oH, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: HH => "_ditheringIntensity" in HH,
              get: HH => HH._ditheringIntensity,
              set: (HH, IH) => {
                HH._ditheringIntensity = IH;
              }
            },
            metadata: TH
          }, PI, XI), (0, RH.i)(null, null, kI, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: HH => "_skipFinalColorClamp" in HH,
              get: HH => HH._skipFinalColorClamp,
              set: (HH, IH) => {
                HH._skipFinalColorClamp = IH;
              }
            },
            metadata: TH
          }, mE, ZI), (0, RH.i)(null, null, CH, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: HH => "_applyByPostProcess" in HH,
              get: HH => HH._applyByPostProcess,
              set: (HH, IH) => {
                HH._applyByPostProcess = IH;
              }
            },
            metadata: TH
          }, qI, LI), (0, RH.i)(null, null, cH, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: HH => "_isEnabled" in HH,
              get: HH => HH._isEnabled,
              set: (HH, IH) => {
                HH._isEnabled = IH;
              }
            },
            metadata: TH
          }, gI, yI), (0, RH.i)(null, null, UH, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: HH => "outputTextureWidth" in HH,
              get: HH => HH.outputTextureWidth,
              set: (HH, IH) => {
                HH.outputTextureWidth = IH;
              }
            },
            metadata: TH
          }, oI, kE), (0, RH.i)(null, null, WH, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: HH => "outputTextureHeight" in HH,
              get: HH => HH.outputTextureHeight,
              set: (HH, IH) => {
                HH.outputTextureHeight = IH;
              }
            },
            metadata: TH
          }, CI, cI), TH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TH
          });
        })(), HH.TONEMAPPING_STANDARD = 0, HH.TONEMAPPING_ACES = 1, HH.TONEMAPPING_KHR_PBR_NEUTRAL = 2, HH.PrepareUniforms = QH.g, HH.PrepareSamplers = QH.e, HH._VIGNETTEMODE_MULTIPLY = 0, HH._VIGNETTEMODE_OPAQUE = 1, HH;
      })(),
      rH = !1;
    function FH(HH) {
      const IH = eH.c.Parse(() => new OH(), HH, null, null);
      return void 0 !== HH.vignetteCentreX && (IH.vignetteCenterX = HH.vignetteCentreX), void 0 !== HH.vignetteCentreY && (IH.vignetteCenterY = HH.vignetteCentreY), IH;
    }
    function MH() {
      rH || (rH = !0, OH.Parse = FH, eH.c._ImageProcessingConfigurationParser = FH, (0, JH.d)("BABYLON.ImageProcessingConfiguration", OH));
    }
  },
  22235: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => TH
    });
    var RH = EH(21832),
      hH = EH(21819);
    class TH {
      constructor(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          RH = arguments.length > 3 ? arguments[3] : void 0,
          hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          TH = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = HH, this._noUBO = !HH.supportsUniformBuffers || hH, this._dynamic = EH, this._name = null !== RH && void 0 !== RH ? RH : "no-name", this._data = IH || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._trackUBOsInFrame = !1, (void 0 === TH && this._engine._features.trackUbosInFrame || !0 === TH) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.uN = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.uN = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform);
      }
      get useUbo() {
        return !this._noUBO;
      }
      get isSync() {
        return !this._needSync;
      }
      isDynamic() {
        return this._dynamic;
      }
      getData() {
        return this._bufferData;
      }
      getBuffer() {
        return this._buffer;
      }
      getUniformNames() {
        return this._uniformNames;
      }
      _fillAlignment(HH) {
        let IH;
        if (IH = HH <= 2 ? HH : 4, this._uniformLocationPointer % IH !== 0) {
          const HH = this._uniformLocationPointer;
          this._uniformLocationPointer += IH - this._uniformLocationPointer % IH;
          const EH = this._uniformLocationPointer - HH;
          for (let IH = 0; IH < EH; IH++) this._data.push(0);
        }
      }
      addUniform(HH, IH) {
        let EH,
          RH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (RH > 0 && "number" === typeof IH && (this._uniformArraySizes[HH] = {
          strideSize: IH,
          arraySize: RH
        }), void 0 === this._uniformLocations[HH] && (this._uniformNames.push(HH), !this._noUBO)) {
          if (RH > 0) {
            if (IH instanceof Array) throw "addUniform should not be use with Array in UBO: " + HH;
            if (this._fillAlignment(4), 16 == IH) IH *= RH;else {
              IH = IH * RH + (4 - IH) * RH;
            }
            EH = [];
            for (let HH = 0; HH < IH; HH++) EH.push(0);
          } else {
            if (IH instanceof Array) EH = IH, IH = EH.length;else {
              EH = [];
              for (let HH = 0; HH < IH; HH++) EH.push(0);
            }
            this._fillAlignment(IH);
          }
          this._uniformSizes[HH] = IH, this._uniformLocations[HH] = this._uniformLocationPointer, this._uniformLocationPointer += IH;
          for (let HH = 0; HH < IH; HH++) this._data.push(EH[HH]);
          this._needSync = !0;
        }
      }
      addMatrix(HH, IH) {
        this.addUniform(HH, Array.prototype.slice.call(IH.GM()));
      }
      addFloat2(HH, IH, EH) {
        const RH = [IH, EH];
        this.addUniform(HH, RH);
      }
      addFloat3(HH, IH, EH, RH) {
        const hH = [IH, EH, RH];
        this.addUniform(HH, hH);
      }
      addColor3(HH, IH) {
        const EH = [IH.r, IH.g, IH.b];
        this.addUniform(HH, EH);
      }
      addColor4(HH, IH, EH) {
        const RH = [IH.r, IH.g, IH.b, EH];
        this.addUniform(HH, RH);
      }
      addVector3(HH, IH) {
        const EH = [IH.x, IH.y, IH.z];
        this.addUniform(HH, EH);
      }
      addMatrix3x3(HH) {
        this.addUniform(HH, 12);
      }
      addMatrix2x2(HH) {
        this.addUniform(HH, 8);
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._rebuild(), this._needSync = !0);
      }
      _getNamesDebug() {
        const HH = [];
        let IH = 0;
        for (const EH in this._uniformLocations) if (HH.push(EH), 10 === ++IH) break;
        return HH.join(",");
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1));
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0), this._rebuild();
      }
      get _numBuffers() {
        return this._buffers.length;
      }
      get _indexBuffer() {
        return this._bufferIndex;
      }
      get name() {
        return this._name;
      }
      set name(HH) {
        this._name = HH;
      }
      get currentEffect() {
        return this._currentEffect;
      }
      _buffersEqual(HH, IH) {
        for (let EH = 0; EH < HH.length; ++EH) if (HH[EH] !== IH[EH]) return !1;
        return !0;
      }
      _copyBuffer(HH, IH) {
        for (let EH = 0; EH < HH.length; ++EH) IH[EH] = HH[EH];
      }
      update() {
        if (!this._noUBO) if (this.bindUniformBuffer(), this._buffer) {
          if (this._dynamic || this._needSync) {
            if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
              if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) return this._needSync = !1, void (this._createBufferOnWrite = this._trackUBOsInFrame);
              this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1]);
            }
            this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData), this._needSync = !1, this._createBufferOnWrite = this._trackUBOsInFrame;
          } else this._createBufferOnWrite = this._trackUBOsInFrame;
        } else this.create();
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild();
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1);
      }
      updateUniform(HH, IH, EH) {
        this._checkNewFrame();
        let hH = this._uniformLocations[HH];
        if (void 0 === hH) {
          if (this._buffer) return void RH.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + HH);
          this.addUniform(HH, EH), hH = this._uniformLocations[HH];
        }
        if (this._buffer || this.create(), this._dynamic) for (let RH = 0; RH < EH; RH++) this._bufferData[hH + RH] = IH[RH];else {
          let HH = !1;
          for (let RH = 0; RH < EH; RH++) (16 === EH && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[hH + RH] !== Math.fround(IH[RH])) && (HH = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[hH + RH] = IH[RH]);
          this._needSync = this._needSync || HH;
        }
      }
      updateUniformArray(HH, IH, EH) {
        this._checkNewFrame();
        const TH = this._uniformLocations[HH];
        if (void 0 === TH) return void RH.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const sH = this._uniformArraySizes[HH];
        if (this._dynamic) for (let RH = 0; RH < EH; RH++) this._bufferData[TH + RH] = IH[RH];else {
          let HH = !1,
            RH = 0,
            eH = 0;
          for (let GH = 0; GH < EH; GH++) if (this._bufferData[TH + 4 * eH + RH] !== hH.i.FloatRound(IH[GH]) && (HH = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[TH + 4 * eH + RH] = IH[GH]), RH++, RH === sH.strideSize) {
            for (; RH < 4; RH++) this._bufferData[TH + 4 * eH + RH] = 0;
            RH = 0, eH++;
          }
          this._needSync = this._needSync || HH;
        }
      }
      _cacheMatrix(HH, IH) {
        this._checkNewFrame();
        const EH = this._valueCache[HH],
          RH = IH.updateFlag;
        return (void 0 === EH || EH !== RH) && (this._valueCache[HH] = RH, !0);
      }
      _updateMatrix3x3ForUniform(HH, IH) {
        for (let EH = 0; EH < 3; EH++) TH._TempBuffer[4 * EH] = IH[3 * EH], TH._TempBuffer[4 * EH + 1] = IH[3 * EH + 1], TH._TempBuffer[4 * EH + 2] = IH[3 * EH + 2], TH._TempBuffer[4 * EH + 3] = 0;
        this.updateUniform(HH, TH._TempBuffer, 12);
      }
      _updateMatrix3x3ForEffect(HH, IH) {
        this._currentEffect.setMatrix3x3(HH, IH);
      }
      _updateMatrix2x2ForEffect(HH, IH) {
        this._currentEffect.setMatrix2x2(HH, IH);
      }
      _updateMatrix2x2ForUniform(HH, IH) {
        for (let EH = 0; EH < 2; EH++) TH._TempBuffer[4 * EH] = IH[2 * EH], TH._TempBuffer[4 * EH + 1] = IH[2 * EH + 1], TH._TempBuffer[4 * EH + 2] = 0, TH._TempBuffer[4 * EH + 3] = 0;
        this.updateUniform(HH, TH._TempBuffer, 8);
      }
      _updateFloatForEffect(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(HH + EH, IH);
      }
      _updateFloatForUniform(HH, IH) {
        TH._TempBuffer[0] = IH, this.updateUniform(HH, TH._TempBuffer, 1);
      }
      _updateFloat2ForEffect(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(HH + RH, IH, EH);
      }
      _updateFloat2ForUniform(HH, IH, EH) {
        TH._TempBuffer[0] = IH, TH._TempBuffer[1] = EH, this.updateUniform(HH, TH._TempBuffer, 2);
      }
      _updateFloat3ForEffect(HH, IH, EH, RH) {
        let hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(HH + hH, IH, EH, RH);
      }
      _updateFloat3ForUniform(HH, IH, EH, RH) {
        TH._TempBuffer[0] = IH, TH._TempBuffer[1] = EH, TH._TempBuffer[2] = RH, this.updateUniform(HH, TH._TempBuffer, 3);
      }
      _updateFloat4ForEffect(HH, IH, EH, RH, hH) {
        let TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(HH + TH, IH, EH, RH, hH);
      }
      _updateFloat4ForUniform(HH, IH, EH, RH, hH) {
        TH._TempBuffer[0] = IH, TH._TempBuffer[1] = EH, TH._TempBuffer[2] = RH, TH._TempBuffer[3] = hH, this.updateUniform(HH, TH._TempBuffer, 4);
      }
      _updateFloatArrayForEffect(HH, IH) {
        var EH;
        let RH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (null === (EH = this._uniformArraySizes[HH]) || void 0 === EH ? void 0 : EH.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(HH + RH, IH);
            break;
          case 3:
            this._currentEffect.setFloatArray3(HH + RH, IH);
            break;
          case 4:
            this._currentEffect.setFloatArray4(HH + RH, IH);
            break;
          default:
            this._currentEffect.setFloatArray(HH + RH, IH);
        }
      }
      _updateFloatArrayForUniform(HH, IH) {
        this.updateUniformArray(HH, IH, IH.length);
      }
      _updateArrayForEffect(HH, IH) {
        this._currentEffect.setArray(HH, IH);
      }
      _updateArrayForUniform(HH, IH) {
        this.updateUniformArray(HH, IH, IH.length);
      }
      _updateIntArrayForEffect(HH, IH) {
        this._currentEffect.setIntArray(HH, IH);
      }
      _updateIntArrayForUniform(HH, IH) {
        TH._TempBufferInt32View.set(IH), this.updateUniformArray(HH, TH._TempBuffer, IH.length);
      }
      _updateUIntArrayForEffect(HH, IH) {
        this._currentEffect.setUIntArray(HH, IH);
      }
      _updateUIntArrayForUniform(HH, IH) {
        TH._TempBufferUInt32View.set(IH), this.updateUniformArray(HH, TH._TempBuffer, IH.length);
      }
      _updateMatrixForEffect(HH, IH) {
        this._currentEffect.setMatrix(HH, IH);
      }
      _updateMatrixForUniform(HH, IH) {
        this._cacheMatrix(HH, IH) && this.updateUniform(HH, IH.GM(), 16);
      }
      _updateMatricesForEffect(HH, IH) {
        this._currentEffect.setMatrices(HH, IH);
      }
      _updateMatricesForUniform(HH, IH) {
        this.updateUniform(HH, IH, IH.length);
      }
      _updateVector3ForEffect(HH, IH) {
        this._currentEffect.setVector3(HH, IH);
      }
      _updateVector3ForUniform(HH, IH) {
        TH._TempBuffer[0] = IH.x, TH._TempBuffer[1] = IH.y, TH._TempBuffer[2] = IH.z, this.updateUniform(HH, TH._TempBuffer, 3);
      }
      _updateVector4ForEffect(HH, IH) {
        this._currentEffect.setVector4(HH, IH);
      }
      _updateVector4ForUniform(HH, IH) {
        TH._TempBuffer[0] = IH.x, TH._TempBuffer[1] = IH.y, TH._TempBuffer[2] = IH.z, TH._TempBuffer[3] = IH.w, this.updateUniform(HH, TH._TempBuffer, 4);
      }
      _updateColor3ForEffect(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(HH + EH, IH);
      }
      _updateColor3ForUniform(HH, IH) {
        TH._TempBuffer[0] = IH.r, TH._TempBuffer[1] = IH.g, TH._TempBuffer[2] = IH.b, this.updateUniform(HH, TH._TempBuffer, 3);
      }
      _updateColor4ForEffect(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(HH + RH, IH, EH);
      }
      _updateDirectColor4ForEffect(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(HH + EH, IH);
      }
      _updateColor4ForUniform(HH, IH, EH) {
        TH._TempBuffer[0] = IH.r, TH._TempBuffer[1] = IH.g, TH._TempBuffer[2] = IH.b, TH._TempBuffer[3] = EH, this.updateUniform(HH, TH._TempBuffer, 4);
      }
      _updateDirectColor4ForUniform(HH, IH) {
        TH._TempBuffer[0] = IH.r, TH._TempBuffer[1] = IH.g, TH._TempBuffer[2] = IH.b, TH._TempBuffer[3] = IH.a, this.updateUniform(HH, TH._TempBuffer, 4);
      }
      _updateIntForEffect(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(HH + EH, IH);
      }
      _updateIntForUniform(HH, IH) {
        TH._TempBufferInt32View[0] = IH, this.updateUniform(HH, TH._TempBuffer, 1);
      }
      _updateInt2ForEffect(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(HH + RH, IH, EH);
      }
      _updateInt2ForUniform(HH, IH, EH) {
        TH._TempBufferInt32View[0] = IH, TH._TempBufferInt32View[1] = EH, this.updateUniform(HH, TH._TempBuffer, 2);
      }
      _updateInt3ForEffect(HH, IH, EH, RH) {
        let hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(HH + hH, IH, EH, RH);
      }
      _updateInt3ForUniform(HH, IH, EH, RH) {
        TH._TempBufferInt32View[0] = IH, TH._TempBufferInt32View[1] = EH, TH._TempBufferInt32View[2] = RH, this.updateUniform(HH, TH._TempBuffer, 3);
      }
      _updateInt4ForEffect(HH, IH, EH, RH, hH) {
        let TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(HH + TH, IH, EH, RH, hH);
      }
      _updateInt4ForUniform(HH, IH, EH, RH, hH) {
        TH._TempBufferInt32View[0] = IH, TH._TempBufferInt32View[1] = EH, TH._TempBufferInt32View[2] = RH, TH._TempBufferInt32View[3] = hH, this.updateUniform(HH, TH._TempBuffer, 4);
      }
      _updateUIntForEffect(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(HH + EH, IH);
      }
      _updateUIntForUniform(HH, IH) {
        TH._TempBufferUInt32View[0] = IH, this.updateUniform(HH, TH._TempBuffer, 1);
      }
      _updateUInt2ForEffect(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(HH + RH, IH, EH);
      }
      _updateUInt2ForUniform(HH, IH, EH) {
        TH._TempBufferUInt32View[0] = IH, TH._TempBufferUInt32View[1] = EH, this.updateUniform(HH, TH._TempBuffer, 2);
      }
      _updateUInt3ForEffect(HH, IH, EH, RH) {
        let hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(HH + hH, IH, EH, RH);
      }
      _updateUInt3ForUniform(HH, IH, EH, RH) {
        TH._TempBufferUInt32View[0] = IH, TH._TempBufferUInt32View[1] = EH, TH._TempBufferUInt32View[2] = RH, this.updateUniform(HH, TH._TempBuffer, 3);
      }
      _updateUInt4ForEffect(HH, IH, EH, RH, hH) {
        let TH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(HH + TH, IH, EH, RH, hH);
      }
      _updateUInt4ForUniform(HH, IH, EH, RH, hH) {
        TH._TempBufferUInt32View[0] = IH, TH._TempBufferUInt32View[1] = EH, TH._TempBufferUInt32View[2] = RH, TH._TempBufferUInt32View[3] = hH, this.updateUniform(HH, TH._TempBuffer, 4);
      }
      setTexture(HH, IH) {
        this._currentEffect.setTexture(HH, IH);
      }
      setTextureArray(HH, IH) {
        this._currentEffect.setTextureArray(HH, IH);
      }
      bindTexture(HH, IH) {
        this._currentEffect._bindTexture(HH, IH);
      }
      updateUniformDirectly(HH, IH) {
        this.updateUniform(HH, IH, IH.length), this.update();
      }
      bindToEffect(HH, IH) {
        this._currentEffect = HH, this._currentEffectName = IH;
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName);
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0;
      }
      setDataBuffer(HH) {
        if (!this._buffers) return this._buffer === HH;
        for (let IH = 0; IH < this._buffers.length; ++IH) {
          if (this._buffers[IH][0] === HH) return this._bufferIndex = IH, this._buffer = HH, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[IH][1] && this._bufferData.set(this._buffers[IH][1]), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0;
        }
        return !1;
      }
      has(HH) {
        return void 0 !== this._uniformLocations[HH];
      }
      dispose() {
        if (this._noUBO) return;
        const HH = this._engine._uniformBuffers,
          IH = HH.indexOf(this);
        if (-1 !== IH && (HH[IH] = HH[HH.length - 1], HH.pop()), this._trackUBOsInFrame && this._buffers) for (let EH = 0; EH < this._buffers.length; ++EH) {
          const HH = this._buffers[EH][0];
          this._engine._releaseBuffer(HH);
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null);
      }
    }
    TH._MAX_UNIFORM_SIZE = 256, TH._TempBuffer = new Float32Array(TH._MAX_UNIFORM_SIZE), TH._TempBufferInt32View = new Int32Array(TH._TempBuffer.buffer), TH._TempBufferUInt32View = new Uint32Array(TH._TempBuffer.buffer);
  },
  21984: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => hH
    });
    var RH = EH(21990);
    class hH {
      static GetPlanes(HH) {
        const IH = [];
        for (let EH = 0; EH < 6; EH++) IH.push(new RH.e(0, 0, 0, 0));
        return hH.GetPlanesToRef(HH, IH), IH;
      }
      static GetNearPlaneToRef(HH, IH) {
        const EH = HH.m;
        IH.normal.x = EH[3] + EH[2], IH.normal.y = EH[7] + EH[6], IH.normal.z = EH[11] + EH[10], IH.d = EH[15] + EH[14], IH.normalize();
      }
      static GetFarPlaneToRef(HH, IH) {
        const EH = HH.m;
        IH.normal.x = EH[3] - EH[2], IH.normal.y = EH[7] - EH[6], IH.normal.z = EH[11] - EH[10], IH.d = EH[15] - EH[14], IH.normalize();
      }
      static GetLeftPlaneToRef(HH, IH) {
        const EH = HH.m;
        IH.normal.x = EH[3] + EH[0], IH.normal.y = EH[7] + EH[4], IH.normal.z = EH[11] + EH[8], IH.d = EH[15] + EH[12], IH.normalize();
      }
      static GetRightPlaneToRef(HH, IH) {
        const EH = HH.m;
        IH.normal.x = EH[3] - EH[0], IH.normal.y = EH[7] - EH[4], IH.normal.z = EH[11] - EH[8], IH.d = EH[15] - EH[12], IH.normalize();
      }
      static GetTopPlaneToRef(HH, IH) {
        const EH = HH.m;
        IH.normal.x = EH[3] - EH[1], IH.normal.y = EH[7] - EH[5], IH.normal.z = EH[11] - EH[9], IH.d = EH[15] - EH[13], IH.normalize();
      }
      static GetBottomPlaneToRef(HH, IH) {
        const EH = HH.m;
        IH.normal.x = EH[3] + EH[1], IH.normal.y = EH[7] + EH[5], IH.normal.z = EH[11] + EH[9], IH.d = EH[15] + EH[13], IH.normalize();
      }
      static GetPlanesToRef(HH, IH) {
        hH.GetNearPlaneToRef(HH, IH[0]), hH.GetFarPlaneToRef(HH, IH[1]), hH.GetLeftPlaneToRef(HH, IH[2]), hH.GetRightPlaneToRef(HH, IH[3]), hH.GetTopPlaneToRef(HH, IH[4]), hH.GetBottomPlaneToRef(HH, IH[5]);
      }
      static IsPointInFrustum(HH, IH) {
        for (let EH = 0; EH < 6; EH++) if (IH[EH].dotCoordinate(HH) < 0) return !1;
        return !0;
      }
    }
  },
  21990: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => hH
    });
    var RH = EH(21764);
    class hH {
      constructor(HH, IH, EH, hH) {
        this.normal = new RH.x(HH, IH, EH), this.d = hH;
      }
      GM() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d];
      }
      clone() {
        return new hH(this.normal.x, this.normal.y, this.normal.z, this.d);
      }
      getClassName() {
        return "Plane";
      }
      getHashCode() {
        let HH = this.normal.getHashCode();
        return HH = 397 * HH ^ this.d, HH;
      }
      normalize() {
        const HH = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let IH = 0;
        return 0 !== HH && (IH = 1 / HH), this.normal.x *= IH, this.normal.y *= IH, this.normal.z *= IH, this.d *= IH, this;
      }
      transform(HH) {
        const IH = hH._TmpMatrix;
        HH.invertToRef(IH);
        const EH = IH.m,
          RH = this.normal.x,
          TH = this.normal.y,
          sH = this.normal.z,
          eH = this.d,
          GH = RH * EH[0] + TH * EH[1] + sH * EH[2] + eH * EH[3],
          AH = RH * EH[4] + TH * EH[5] + sH * EH[6] + eH * EH[7],
          VH = RH * EH[8] + TH * EH[9] + sH * EH[10] + eH * EH[11],
          YH = RH * EH[12] + TH * EH[13] + sH * EH[14] + eH * EH[15];
        return new hH(GH, AH, VH, YH);
      }
      dotCoordinate(HH) {
        return this.normal.x * HH.x + this.normal.y * HH.y + this.normal.z * HH.z + this.d;
      }
      copyFromPoints(HH, IH, EH) {
        const RH = IH.x - HH.x,
          hH = IH.y - HH.y,
          TH = IH.z - HH.z,
          sH = EH.x - HH.x,
          eH = EH.y - HH.y,
          GH = EH.z - HH.z,
          AH = hH * GH - TH * eH,
          VH = TH * sH - RH * GH,
          YH = RH * eH - hH * sH,
          QH = Math.sqrt(AH * AH + VH * VH + YH * YH);
        let JH;
        return JH = 0 !== QH ? 1 / QH : 0, this.normal.x = AH * JH, this.normal.y = VH * JH, this.normal.z = YH * JH, this.d = -(this.normal.x * HH.x + this.normal.y * HH.y + this.normal.z * HH.z), this;
      }
      isFrontFacingTo(HH, IH) {
        return RH.x.Dot(this.normal, HH) <= IH;
      }
      signedDistanceTo(HH) {
        return RH.x.Dot(HH, this.normal) + this.d;
      }
      static Qh(HH) {
        return new hH(HH[0], HH[1], HH[2], HH[3]);
      }
      static FromPoints(HH, IH, EH) {
        const RH = new hH(0, 0, 0, 0);
        return RH.copyFromPoints(HH, IH, EH), RH;
      }
      static FromPositionAndNormal(HH, IH) {
        const EH = new hH(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(HH, IH, EH);
      }
      static FromPositionAndNormalToRef(HH, IH, EH) {
        return EH.normal.RH(IH), EH.normal.normalize(), EH.d = -HH.dot(EH.normal), EH;
      }
      static SignedDistanceToPlaneFromPositionAndNormal(HH, IH, EH) {
        const hH = -(IH.x * HH.x + IH.y * HH.y + IH.z * HH.z);
        return RH.x.Dot(EH, IH) + hH;
      }
    }
    hH._TmpMatrix = RH.d.Identity();
  },
  22153: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => hH
    });
    var RH = EH(22132);
    class hH extends RH.b {
      constructor(HH) {
        super(), this._buffer = HH;
      }
      get underlyingResource() {
        return this._buffer;
      }
    }
  },
  21959: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => GH,
      c: () => AH
    });
    const RH = "__bjs_serializable__",
      hH = new WeakMap();
    function TH(HH, IH) {
      return Object.prototype.hasOwnProperty.call(HH, IH);
    }
    const sH = function () {
      let HH = Symbol.metadata;
      return HH || (HH = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: HH
      })), HH;
    }();
    function eH(HH) {
      return "function" === typeof HH ? HH : null === HH || void 0 === HH ? void 0 : HH.constructor;
    }
    function GH(HH) {
      if (!HH) throw new Error("Decorator metadata is unavailable; the Symbol.metadata (".concat(String(sH), ") polyfill must run before decorated classes are evaluated."));
      return TH(HH, RH) || (HH[RH] = {}), HH[RH];
    }
    function AH(HH) {
      const IH = eH(HH),
        EH = IH ? IH[sH] : void 0;
      if (!EH) return {};
      const GH = hH.get(EH);
      if (GH) return GH;
      const AH = {},
        VH = [];
      let YH = EH;
      for (; YH;) VH.push(YH), YH = Object.getPrototypeOf(YH);
      for (const hH of VH) if (TH(hH, RH)) {
        const HH = hH[RH];
        for (const IH in HH) AH[IH] = HH[IH];
      }
      return hH.set(EH, AH), AH;
    }
  },
  21956: (HH, IH, EH) => {
    EH.d(IH, {
      B: () => rH,
      F: () => eH,
      G: () => VH,
      I: () => YH,
      K: () => sH,
      b: () => iI,
      d: () => TH,
      g: () => NH,
      i: () => JH,
      m: () => GH,
      p: () => OH,
      t: () => AH,
      u: () => FH,
      x: () => QH
    });
    var RH = EH(21959);
    function hH(HH, IH) {
      return (EH, hH) => {
        if (!hH.metadata) return;
        const TH = String(hH.name),
          sH = (0, RH.b)(hH.metadata);
        sH[TH] || (sH[TH] = {
          type: HH,
          sourceName: IH
        });
      };
    }
    function TH(HH) {
      return function (HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (EH, RH) => {
          const hH = IH || "_" + String(RH.name);
          return {
            init(HH) {
              return void 0 === HH && hH in this || (this[hH] = HH), HH;
            },
            get() {
              return this[hH];
            },
            set(IH) {
              var EH;
              "function" === typeof (null === (EH = this[hH]) || void 0 === EH ? void 0 : EH.equals) && this[hH].equals(IH) || this[hH] !== IH && (this[hH] = IH, this[HH]());
            }
          };
        };
      }(HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null);
    }
    function sH(HH) {
      return hH(0, HH);
    }
    function eH(HH) {
      return hH(1, HH);
    }
    function GH(HH) {
      return hH(2, HH);
    }
    function AH(HH) {
      return hH(3, HH);
    }
    function VH(HH) {
      return hH(4, HH);
    }
    function YH(HH) {
      return hH(5, HH);
    }
    function QH(HH) {
      return hH(6, HH);
    }
    function JH(HH) {
      return hH(7, HH);
    }
    function OH(HH) {
      return hH(8, HH);
    }
    function rH(HH) {
      return hH(10, HH);
    }
    function FH(HH) {
      return hH(12, HH);
    }
    function MH(HH, IH, EH) {
      const RH = String(IH.name);
      let hH = null;
      const TH = function () {
        if (null === hH) {
          hH = HH, "undefined" !== typeof _native && _native[RH] && (hH = EH(_native[RH], HH));
          const sH = this && (IH.static ? this : Object.getPrototypeOf(this));
          (null === sH || void 0 === sH ? void 0 : sH[RH]) === TH && (sH[RH] = hH);
        }
        for (var sH = arguments.length, eH = new Array(sH), GH = 0; GH < sH; GH++) eH[GH] = arguments[GH];
        return hH.apply(this, eH);
      };
      return TH;
    }
    function NH(HH, IH) {
      return MH(HH, IH, HH => HH);
    }
    function iI(HH) {
      let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (EH, RH) => {
        const hH = IH || "_" + String(RH.name);
        return {
          get() {
            var HH;
            return null === (HH = this[hH]) || void 0 === HH ? void 0 : HH.value;
          },
          set(IH) {
            var EH, RH;
            "function" === typeof (null === (EH = this[hH]) || void 0 === EH || null === (RH = EH.value) || void 0 === RH ? void 0 : RH.equals) && this[hH].value.equals(IH) || this[hH].value !== IH && (this[hH].value = IH, this[HH]());
          }
        };
      };
    }
    NH.filter = function (HH) {
      return (IH, EH) => MH(IH, EH, (IH, EH) => function () {
        for (var RH = arguments.length, hH = new Array(RH), TH = 0; TH < RH; TH++) hH[TH] = arguments[TH];
        return HH(...hH) ? IH(...hH) : EH.apply(this, hH);
      });
    };
  },
  21972: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => AH
    });
    var RH = EH(21856),
      hH = EH(21974),
      TH = EH(21817),
      sH = EH(21764),
      eH = EH(21959);
    const GH = function (HH, IH, EH) {
      let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const TH = HH();
      hH.c && hH.c.HasTags(IH) && hH.c.AddTagsTo(TH, hH.c.GetTags(IH, !0));
      const sH = (0, eH.c)(TH),
        GH = {};
      for (const hH in sH) {
        const HH = sH[hH],
          eH = IH[hH],
          VH = HH.type;
        if (void 0 !== eH && null !== eH && ("uniqueId" !== hH || AH.AllowLoadingUniqueId)) switch (VH) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof eH.slice ? TH[hH] = eH.slice() : TH[hH] = eH;
            break;
          case 1:
            RH.cloneTexturesOnlyOnce && GH[eH.uniqueId] ? TH[hH] = GH[eH.uniqueId] : (TH[hH] = EH || eH.isRenderTarget ? eH : eH.clone(), GH[eH.uniqueId] = TH[hH]);
            break;
          case 2:
          case 3:
          case 4:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
          case 13:
            TH[hH] = EH ? eH : eH.clone();
        }
      }
      return TH;
    };
    class AH {
      static AppendSerializedAnimations(HH, IH) {
        if (HH.animations) {
          IH.animations = [];
          for (let EH = 0; EH < HH.animations.length; EH++) {
            const RH = HH.animations[EH];
            IH.animations.push(RH.serialize());
          }
        }
      }
      static Serialize(HH, IH) {
        IH || (IH = {}), hH.c && (IH.tags = hH.c.GetTags(HH));
        const EH = (0, eH.c)(HH);
        for (const RH in EH) {
          const hH = EH[RH],
            TH = hH.sourceName || RH,
            sH = hH.type,
            eH = HH[RH];
          if (void 0 !== eH && null !== eH && ("uniqueId" !== RH || AH.AllowLoadingUniqueId)) switch (sH) {
            case 0:
              Array.isArray(eH) ? IH[TH] = eH.slice() : IH[TH] = eH;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              IH[TH] = eH.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              IH[TH] = eH.GM();
              break;
            case 6:
            case 11:
              IH[TH] = eH.id;
          }
        }
        return IH;
      }
      static ParseProperties(HH, IH, EH, RH) {
        RH || (RH = "");
        const hH = (0, eH.c)(IH);
        for (const eH in hH) {
          const GH = hH[eH],
            VH = HH[GH.sourceName || eH],
            YH = GH.type;
          if (void 0 !== VH && null !== VH && ("uniqueId" !== eH || AH.AllowLoadingUniqueId)) {
            const HH = IH;
            switch (YH) {
              case 0:
                HH[eH] = VH;
                break;
              case 1:
                EH && (HH[eH] = AH._TextureParser(VH, EH, RH));
                break;
              case 2:
                HH[eH] = TH.b.Qh(VH);
                break;
              case 3:
                HH[eH] = AH._FresnelParametersParser(VH);
                break;
              case 4:
                HH[eH] = sH.t.Qh(VH);
                break;
              case 5:
                HH[eH] = sH.x.Qh(VH);
                break;
              case 6:
                EH && (HH[eH] = EH.getLastMeshById(VH));
                break;
              case 7:
                HH[eH] = AH._ColorCurvesParser(VH);
                break;
              case 8:
                HH[eH] = TH.d.Qh(VH);
                break;
              case 9:
                HH[eH] = AH._ImageProcessingConfigurationParser(VH);
                break;
              case 10:
                HH[eH] = sH.h.Qh(VH);
                break;
              case 11:
                EH && (HH[eH] = EH.getCameraById(VH));
                break;
              case 12:
                HH[eH] = sH.d.Qh(VH);
                break;
              case 13:
                HH[eH] = sH.y.Qh(VH);
            }
          }
        }
      }
      static Parse(HH, IH, EH) {
        let RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const TH = HH();
        return hH.c && hH.c.AddTagsTo(TH, IH.tags), AH.ParseProperties(IH, TH, EH, RH), TH;
      }
      static Clone(HH, IH) {
        return GH(HH, IH, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
      }
      static Instanciate(HH, IH) {
        return GH(HH, IH, !0);
      }
    }
    AH.AllowLoadingUniqueId = !1, AH._ImageProcessingConfigurationParser = HH => {
      throw (0, RH.n)("ImageProcessingConfiguration");
    }, AH._FresnelParametersParser = HH => {
      throw (0, RH.n)("FresnelParameters");
    }, AH._ColorCurvesParser = HH => {
      throw (0, RH.n)("ColorCurves");
    }, AH._TextureParser = (HH, IH, EH) => {
      throw (0, RH.n)("Texture");
    };
  },
  22346: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => hH
    });
    var RH = EH(21850);
    class hH {
      get min() {
        return this._min;
      }
      get max() {
        return this._max;
      }
      get average() {
        return this._average;
      }
      get lastSecAverage() {
        return this._lastSecAverage;
      }
      get current() {
        return this._current;
      }
      get total() {
        return this._totalAccumulated;
      }
      get count() {
        return this._totalValueCount;
      }
      constructor() {
        this._startMonitoringTime = 0, this._min = 0, this._max = 0, this._hasResult = !1, this._hasCurrentValue = !1, this._average = 0, this._lastSecAverage = 0, this._current = 0, this._totalValueCount = 0, this._totalAccumulated = 0, this._lastSecAccumulated = 0, this._lastSecTime = 0, this._lastSecValueCount = 0;
      }
      fetchNewFrame() {
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = hH.sY, this._lastSecValueCount++;
      }
      addCount(HH, IH) {
        hH.sY && (this._current += HH, this._hasCurrentValue = !0, IH && this._fetchResult());
      }
      beginMonitoring() {
        hH.sY && (this._startMonitoringTime = RH.d.Now);
      }
      endMonitoring() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!hH.sY) return;
        HH && this.fetchNewFrame();
        const IH = RH.d.Now;
        this._current = IH - this._startMonitoringTime, this._hasCurrentValue = !0, HH && this._fetchResult();
      }
      TM() {
        this._fetchResult();
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const HH = RH.d.Now;
        HH - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = HH, this._lastSecAccumulated = 0, this._lastSecValueCount = 0);
      }
    }
    hH.sY = !0;
  },
  21968: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => hH,
      e: () => RH
    });
    class RH {
      constructor(HH) {
        this.length = 0, this.data = new Array(HH), this._id = RH._GlobalId++;
      }
      push(HH) {
        this.data[this.length++] = HH, this.length > this.data.length && (this.data.length *= 2);
      }
      forEach(HH) {
        for (let IH = 0; IH < this.length; IH++) HH(this.data[IH]);
      }
      sort(HH) {
        this.data.sort(HH);
      }
      reset() {
        this.length = 0;
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0);
      }
      concat(HH) {
        if (0 !== HH.length) {
          this.length + HH.length > this.data.length && (this.data.length = 2 * (this.length + HH.length));
          for (let IH = 0; IH < HH.length; IH++) this.data[this.length++] = (HH.data || HH)[IH];
        }
      }
      indexOf(HH) {
        const IH = this.data.indexOf(HH);
        return IH >= this.length ? -1 : IH;
      }
      contains(HH) {
        return -1 !== this.indexOf(HH);
      }
    }
    RH._GlobalId = 0;
    class hH extends RH {
      constructor() {
        super(...arguments), this._duplicateId = 0;
      }
      push(HH) {
        super.push(HH), HH.__smartArrayFlags || (HH.__smartArrayFlags = {}), HH.__smartArrayFlags[this._id] = this._duplicateId;
      }
      pushNoDuplicate(HH) {
        return (!HH.__smartArrayFlags || HH.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(HH), !0);
      }
      reset() {
        super.reset(), this._duplicateId++;
      }
      concatWithNoDuplicate(HH) {
        if (0 !== HH.length) {
          this.length + HH.length > this.data.length && (this.data.length = 2 * (this.length + HH.length));
          for (let IH = 0; IH < HH.length; IH++) {
            const EH = (HH.data || HH)[IH];
            this.pushNoDuplicate(EH);
          }
        }
      }
    }
  },
  21974: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => hH
    });
    class RH {
      static Eval(HH, IH) {
        return "true" === (HH = HH.match(/\([^()]*\)/g) ? HH.replace(/\([^()]*\)/g, HH => (HH = HH.slice(1, HH.length - 1), RH._HandleParenthesisContent(HH, IH))) : RH._HandleParenthesisContent(HH, IH)) || "false" !== HH && RH.Eval(HH, IH);
      }
      static _HandleParenthesisContent(HH, IH) {
        let EH;
        IH = IH || (HH => "true" === HH);
        const hH = HH.split("||");
        for (const TH in hH) if (Object.prototype.hasOwnProperty.call(hH, TH)) {
          let HH = RH._SimplifyNegation(hH[TH].trim());
          const sH = HH.split("&&");
          if (sH.length > 1) for (let hH = 0; hH < sH.length; ++hH) {
            const TH = RH._SimplifyNegation(sH[hH].trim());
            if (EH = "true" !== TH && "false" !== TH ? "!" === TH[0] ? !IH(TH.substring(1)) : IH(TH) : "true" === TH, !EH) {
              HH = "false";
              break;
            }
          }
          if (EH || "true" === HH) {
            EH = !0;
            break;
          }
          EH = "true" !== HH && "false" !== HH ? "!" === HH[0] ? !IH(HH.substring(1)) : IH(HH) : "true" === HH;
        }
        return EH ? "true" : "false";
      }
      static _SimplifyNegation(HH) {
        return "!true" === (HH = (HH = HH.replace(/^[\s!]+/, HH => (HH = HH.replace(/[\s]/g, () => "")).length % 2 ? "!" : "")).trim()) ? HH = "false" : "!false" === HH && (HH = "true"), HH;
      }
    }
    class hH {
      static EnableFor(HH) {
        HH._tags = HH._tags || {}, HH.hasTags = () => hH.HasTags(HH), HH.addTags = IH => hH.AddTagsTo(HH, IH), HH.removeTags = IH => hH.RemoveTagsFrom(HH, IH), HH.matchesTagsQuery = IH => hH.MatchesQuery(HH, IH);
      }
      static DisableFor(HH) {
        delete HH._tags, delete HH.hasTags, delete HH.addTags, delete HH.removeTags, delete HH.matchesTagsQuery;
      }
      static HasTags(HH) {
        if (!HH._tags) return !1;
        const IH = HH._tags;
        for (const EH in IH) if (Object.prototype.hasOwnProperty.call(IH, EH)) return !0;
        return !1;
      }
      static GetTags(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!HH._tags) return null;
        if (IH) {
          const IH = [];
          for (const EH in HH._tags) Object.prototype.hasOwnProperty.call(HH._tags, EH) && !0 === HH._tags[EH] && IH.push(EH);
          return IH.join(" ");
        }
        return HH._tags;
      }
      static AddTagsTo(HH, IH) {
        if (!IH) return;
        if ("string" !== typeof IH) return;
        const EH = IH.split(" ");
        for (const RH of EH) hH._AddTagTo(HH, RH);
      }
      static _AddTagTo(HH, IH) {
        "" !== (IH = IH.trim()) && "true" !== IH && "false" !== IH && (IH.match(/[\s]/) || IH.match(/^([!]|([|]|[&]){2})/) || (hH.EnableFor(HH), HH._tags[IH] = !0));
      }
      static RemoveTagsFrom(HH, IH) {
        if (!hH.HasTags(HH)) return;
        const EH = IH.split(" ");
        for (const RH in EH) hH._RemoveTagFrom(HH, EH[RH]);
      }
      static _RemoveTagFrom(HH, IH) {
        delete HH._tags[IH];
      }
      static MatchesQuery(HH, IH) {
        return void 0 === IH || ("" === IH ? hH.HasTags(HH) : RH.Eval(IH, IH => hH.HasTags(HH) && HH._tags[IH]));
      }
    }
  },
  22355: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => RH
    });
    class RH {
      static get UniqueId() {
        const HH = this._UniqueIdCounter;
        return this._UniqueIdCounter++, HH;
      }
    }
    RH._UniqueIdCounter = 1;
  },
  22323: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => TH
    });
    var RH = EH(22128),
      hH = EH(21786);
    class TH {
      constructor(HH) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new hH.e(), this._scene = HH;
      }
      _prepareBuffers() {
        if (this._vertexBuffers[RH.t.PositionKind]) return;
        const HH = [];
        HH.push(1, 1), HH.push(-1, 1), HH.push(-1, -1), HH.push(1, -1), this._vertexBuffers[RH.t.PositionKind] = new RH.t(this._scene.getEngine(), HH, RH.t.PositionKind, !1, !1, 2), this._buildIndexBuffer();
      }
      _buildIndexBuffer() {
        const HH = [];
        HH.push(0), HH.push(1), HH.push(2), HH.push(0), HH.push(2), HH.push(3), this._indexBuffer = this._scene.getEngine().createIndexBuffer(HH);
      }
      _getActivePostProcesses(HH) {
        const IH = this._activePostProcesses;
        IH.length = 0;
        for (let EH = 0; EH < HH.length; EH++) {
          const RH = HH[EH];
          RH && IH.push(RH);
        }
        return IH;
      }
      _rebuild() {
        const HH = this._vertexBuffers[RH.t.PositionKind];
        HH && (HH._rebuild(), this._buildIndexBuffer());
      }
      _prepareFrame() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const EH = this._scene.activeCamera;
        return !!EH && (IH = IH || this._getActivePostProcesses(EH._postProcesses), !(!IH || 0 === IH.length || !this._scene.postProcessesEnabled) && (IH[0].activate(EH, HH, null !== IH && void 0 !== IH), !0));
      }
      directRender(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          hH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          TH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          sH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : HH.length;
        const eH = this._scene.getEngine();
        for (let AH = 0; AH < sH; AH++) {
          var GH;
          if (AH < HH.length - 1) HH[AH + 1].activate(this._scene.activeCamera || this._scene, null === IH || void 0 === IH ? void 0 : IH.texture);else IH ? eH.bindFramebuffer(IH, RH, void 0, void 0, EH, hH) : TH || eH.restoreDefaultFramebuffer(), null === (GH = eH._debugInsertMarker) || void 0 === GH || GH.call(eH, "post process ".concat(HH[AH].name, " output"));
          const sH = HH[AH],
            VH = sH.apply();
          VH && (sH.onBeforeRenderObservable.notifyObservers(VH), this._prepareBuffers(), eH.bindBuffers(this._vertexBuffers, this._indexBuffer, VH), eH.drawElementsType(0, 0, 6), sH.onAfterRenderObservable.notifyObservers(VH));
        }
        eH.setDepthBuffer(!0), eH.setDepthWrite(!0);
      }
      _finalizeFrame(HH, IH, EH, RH) {
        let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const TH = this._scene.activeCamera;
        if (!TH) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (RH = RH || this._getActivePostProcesses(TH._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const sH = this._scene.getEngine();
        for (let GH = 0, AH = RH.length; GH < AH; GH++) {
          const VH = RH[GH];
          var eH;
          if (GH < AH - 1) VH._outputTexture = RH[GH + 1].activate(TH, null === IH || void 0 === IH ? void 0 : IH.texture);else IH ? (sH.bindFramebuffer(IH, EH, void 0, void 0, hH), VH._outputTexture = IH) : (sH.restoreDefaultFramebuffer(), VH._outputTexture = null), null === (eH = sH._debugInsertMarker) || void 0 === eH || eH.call(sH, "post process ".concat(RH[GH].name, " output"));
          if (HH) break;
          const YH = VH.apply();
          YH && (VH.onBeforeRenderObservable.notifyObservers(YH), this._prepareBuffers(), sH.bindBuffers(this._vertexBuffers, this._indexBuffer, YH), sH.drawElementsType(0, 0, 6), VH.onAfterRenderObservable.notifyObservers(YH));
        }
        sH.setDepthBuffer(!0), sH.setDepthWrite(!0), sH.setAlphaMode(0);
      }
      dispose() {
        const HH = this._vertexBuffers[RH.t.PositionKind];
        HH && (HH.dispose(), this._vertexBuffers[RH.t.PositionKind] = null), this._indexBuffer && (this._scene.getEngine()._releaseBuffer(this._indexBuffer), this._indexBuffer = null);
      }
    }
  },
  22334: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => TH
    });
    var RH = EH(21968),
      hH = EH(21764);
    class TH {
      set opaqueSortCompareFn(HH) {
        this._opaqueSortCompareFn = HH || TH.uF, this._renderOpaque = this._renderOpaqueSorted;
      }
      set alphaTestSortCompareFn(HH) {
        this._alphaTestSortCompareFn = HH || TH.uF, this._renderAlphaTest = this._renderAlphaTestSorted;
      }
      set transparentSortCompareFn(HH) {
        this._transparentSortCompareFn = HH || TH.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted;
      }
      constructor(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          TH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = HH, this._opaqueSubMeshes = new RH.e(256), this._transparentSubMeshes = new RH.e(256), this._alphaTestSubMeshes = new RH.e(256), this._depthOnlySubMeshes = new RH.e(256), this._particleSystems = new RH.e(256), this._spriteManagers = new RH.e(256), this._empty = !0, this._edgesRenderers = new RH.c(16), this.disableDepthPrePass = !1, this._scene = IH, this.opaqueSortCompareFn = EH, this.alphaTestSortCompareFn = hH, this.transparentSortCompareFn = TH;
      }
      render(HH, IH, EH, RH) {
        let hH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          TH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          sH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          eH = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          GH = arguments.length > 8 ? arguments[8] : void 0;
        if (HH) return void HH(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const AH = this._scene.getEngine();
        hH && 0 !== this._depthOnlySubMeshes.length && (AH.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), AH.setColorWrite(!0)), TH && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), sH && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const VH = AH.getStencilBuffer();
        if (AH.setStencilBuffer(!1), IH && this._renderSprites(), EH && this._renderParticles(RH), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), eH && (GH || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (AH.setStencilBuffer(VH), GH) GH(this._transparentSubMeshes, this);else if (this._scene.useOrderIndependentTransparency) {
            const HH = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            HH.length && this._renderTransparent(HH);
          } else this._renderTransparent(this._transparentSubMeshes);
          AH.setAlphaMode(0);
        }
        if (AH.setStencilBuffer(!1), TH && this._edgesRenderers.length) {
          for (let HH = 0; HH < this._edgesRenderers.length; HH++) this._edgesRenderers.data[HH].render();
          AH.setAlphaMode(0);
        }
        AH.setStencilBuffer(VH);
      }
      _renderOpaqueSorted(HH) {
        TH._RenderSorted(HH, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass);
      }
      _renderAlphaTestSorted(HH) {
        TH._RenderSorted(HH, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass);
      }
      _renderTransparentSorted(HH) {
        TH._RenderSorted(HH, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass);
      }
      static _RenderSorted(HH, IH, EH, RH, sH) {
        let eH,
          GH = 0;
        const AH = EH ? EH.globalPosition : TH._ZeroVector;
        if (RH) for (; GH < HH.length; GH++) eH = HH.data[GH], eH._alphaIndex = eH.getMesh().alphaIndex, eH._distanceToCamera = hH.x.Distance(eH.getBoundingInfo().boundingSphere.centerWorld, AH);
        const VH = HH.length === HH.data.length ? HH.data : HH.data.slice(0, HH.length);
        IH && VH.sort(IH);
        const YH = VH[0].getMesh().kh();
        for (GH = 0; GH < VH.length; GH++) if (eH = VH[GH], !YH._activeMeshesFrozenButKeepClipping || eH.isInFrustum(YH._frustumPlanes)) {
          if (RH) {
            const HH = eH.sI();
            if (HH && HH.needDepthPrePass && !sH) {
              const IH = HH.kh().getEngine();
              IH.setColorWrite(!1), IH.setAlphaMode(0), eH.render(!1), IH.setColorWrite(!0);
            }
          }
          eH.render(RH);
        }
      }
      static defaultTransparentSortCompare(HH, IH) {
        return HH._alphaIndex > IH._alphaIndex ? 1 : HH._alphaIndex < IH._alphaIndex ? -1 : TH.backToFrontSortCompare(HH, IH);
      }
      static backToFrontSortCompare(HH, IH) {
        return HH._distanceToCamera < IH._distanceToCamera ? 1 : HH._distanceToCamera > IH._distanceToCamera ? -1 : 0;
      }
      static frontToBackSortCompare(HH, IH) {
        return HH._distanceToCamera < IH._distanceToCamera ? -1 : HH._distanceToCamera > IH._distanceToCamera ? 1 : 0;
      }
      static uF(HH, IH) {
        const EH = HH.getMesh(),
          RH = IH.getMesh();
        return EH.material && RH.material ? EH.material.uniqueId - RH.material.uniqueId : EH.uniqueId - RH.uniqueId;
      }
      prepare() {
        this._opaqueSubMeshes.reset(), this._transparentSubMeshes.reset(), this._alphaTestSubMeshes.reset(), this._depthOnlySubMeshes.reset(), this._particleSystems.reset(), this.prepareSprites(), this._edgesRenderers.reset(), this._empty = !0;
      }
      prepareSprites() {
        this._spriteManagers.reset();
      }
      dispose() {
        this._opaqueSubMeshes.dispose(), this._transparentSubMeshes.dispose(), this._alphaTestSubMeshes.dispose(), this._depthOnlySubMeshes.dispose(), this._particleSystems.dispose(), this._spriteManagers.dispose(), this._edgesRenderers.dispose();
      }
      dispatch(HH, IH, EH) {
        void 0 === IH && (IH = HH.getMesh()), void 0 === EH && (EH = HH.sI()), null !== EH && void 0 !== EH && (EH.needAlphaBlendingForMesh(IH) ? this._transparentSubMeshes.push(HH) : EH.needAlphaTestingForMesh(IH) ? (EH.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(HH), this._alphaTestSubMeshes.push(HH)) : (EH.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(HH), this._opaqueSubMeshes.push(HH)), IH._renderingGroup = this, IH._edgesRenderer && IH.isEnabled() && IH.isVisible && IH._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(IH._edgesRenderer), this._empty = !1);
      }
      dispatchSprites(HH) {
        this._spriteManagers.push(HH), this._empty = !1;
      }
      dispatchParticles(HH) {
        this._particleSystems.push(HH), this._empty = !1;
      }
      _renderParticles(HH) {
        if (0 === this._particleSystems.length) return;
        const IH = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let EH = 0; EH < this._particleSystems.length; EH++) {
          const RH = this._particleSystems.data[EH];
          if (0 === (IH && IH.layerMask & RH.layerMask)) continue;
          const hH = RH.dI;
          hH.position && HH && -1 === HH.indexOf(hH) || this._scene._activeParticles.addCount(RH.render(), !1);
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene);
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const HH = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let IH = 0; IH < this._spriteManagers.length; IH++) {
          const EH = this._spriteManagers.data[IH];
          0 !== (HH && HH.layerMask & EH.layerMask) && EH.render();
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene);
      }
    }
    TH._ZeroVector = hH.x.Zero();
  },
  22326: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => TH
    });
    var RH = EH(22334);
    class hH {}
    class TH {
      get disableDepthPrePass() {
        return this._disableDepthPrePass;
      }
      set disableDepthPrePass(HH) {
        this._disableDepthPrePass = HH;
        for (const IH of this._renderingGroups) IH.disableDepthPrePass = HH;
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames;
      }
      set maintainStateBetweenFrames(HH) {
        HH !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = HH, this._maintainStateBetweenFrames || this.restoreDispachedFlags());
      }
      restoreDispachedFlags() {
        for (const HH of this._scene.meshes) if (HH.BJ) for (const IH of HH.BJ) IH._wasDispatched = !1;
        if (this._scene.spriteManagers) for (const HH of this._scene.spriteManagers) HH._wasDispatched = !1;
        for (const HH of this._scene.fF) HH._wasDispatched = !1;
      }
      constructor(HH) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array(), this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new hH(), this._maintainStateBetweenFrames = !1, this._scene = HH;
        for (let IH = TH.pF; IH < TH.MAX_RENDERINGGROUPS; IH++) this._autoClearDepthStencil[IH] = {
          nF: !0,
          depth: !0,
          LF: !0
        };
      }
      get renderingGroups() {
        return this._renderingGroups;
      }
      getRenderingGroup(HH) {
        const IH = HH || 0;
        return this._prepareRenderingGroup(IH), this._renderingGroups[IH];
      }
      _clearDepthStencilBuffer() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.getEngine().clear(null, !1, HH, IH), this._depthStencilBufferAlreadyCleaned = !0);
      }
      render(HH, IH, EH, RH) {
        let hH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          sH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          eH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          GH = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          AH = arguments.length > 8 ? arguments[8] : void 0;
        const VH = this._renderingGroupInfo;
        if (VH.Th = this._scene, VH.camera = this._scene.activeCamera, VH.renderingManager = this, this._scene.spriteManagers && RH) for (let TH = 0; TH < this._scene.spriteManagers.length; TH++) {
          const HH = this._scene.spriteManagers[TH];
          this.dispatchSprites(HH);
        }
        for (let YH = TH.pF; YH < TH.MAX_RENDERINGGROUPS; YH++) {
          this._depthStencilBufferAlreadyCleaned = YH === TH.pF;
          const QH = this._renderingGroups[YH];
          if (!QH || QH._empty) continue;
          const JH = 1 << YH;
          if (VH.renderingGroupId = YH, this._scene.onBeforeRenderingGroupObservable.notifyObservers(VH, JH), TH.AUTOCLEAR) {
            const HH = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(YH) : this._autoClearDepthStencil[YH];
            HH && HH.nF && this._clearDepthStencilBuffer(HH.depth, HH.LF);
          }
          for (const HH of this._scene._beforeRenderingGroupDrawStage) HH.action(YH);
          QH.render(HH, RH, EH, IH, hH, sH, eH, GH, AH);
          for (const HH of this._scene._afterRenderingGroupDrawStage) HH.action(YH);
          this._scene.onAfterRenderingGroupObservable.notifyObservers(VH, JH);
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames) for (let HH = TH.pF; HH < TH.MAX_RENDERINGGROUPS; HH++) {
          const IH = this._renderingGroups[HH];
          IH && IH.prepare();
        }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames) for (let HH = TH.pF; HH < TH.MAX_RENDERINGGROUPS; HH++) {
          const IH = this._renderingGroups[HH];
          IH && IH.prepareSprites();
        }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null;
      }
      freeRenderingGroups() {
        for (let HH = TH.pF; HH < TH.MAX_RENDERINGGROUPS; HH++) {
          const IH = this._renderingGroups[HH];
          IH && IH.dispose();
        }
      }
      _prepareRenderingGroup(HH) {
        void 0 === this._renderingGroups[HH] && (this._renderingGroups[HH] = new RH.e(HH, this._scene, this._customOpaqueSortCompareFn[HH], this._customAlphaTestSortCompareFn[HH], this._customTransparentSortCompareFn[HH]), this._renderingGroups[HH].disableDepthPrePass = this._disableDepthPrePass);
      }
      dispatchSprites(HH) {
        this.maintainStateBetweenFrames && HH._wasDispatched || (HH._wasDispatched = !0, this.getRenderingGroup(HH.renderingGroupId).dispatchSprites(HH));
      }
      dispatchParticles(HH) {
        this.maintainStateBetweenFrames && HH._wasDispatched || (HH._wasDispatched = !0, this.getRenderingGroup(HH.renderingGroupId).dispatchParticles(HH));
      }
      dispatch(HH, IH, EH) {
        void 0 === IH && (IH = HH.getMesh()), this.maintainStateBetweenFrames && HH._wasDispatched || (HH._wasDispatched = !0, this.getRenderingGroup(IH.renderingGroupId).dispatch(HH, IH, EH));
      }
      dF(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[HH] = IH, this._customAlphaTestSortCompareFn[HH] = EH, this._customTransparentSortCompareFn[HH] = RH, this._renderingGroups[HH]) {
          const IH = this._renderingGroups[HH];
          IH.opaqueSortCompareFn = this._customOpaqueSortCompareFn[HH], IH.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[HH], IH.transparentSortCompareFn = this._customTransparentSortCompareFn[HH];
        }
      }
      lF(HH, IH) {
        let EH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          RH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[HH] = {
          nF: IH,
          depth: EH,
          LF: RH
        };
      }
      getAutoClearDepthStencilSetup(HH) {
        return this._autoClearDepthStencil[HH];
      }
    }
    TH.MAX_RENDERINGGROUPS = 4, TH.pF = 0, TH.AUTOCLEAR = !0;
  },
  22026: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => RH
    });
    class RH {
      constructor(HH) {
        this._supportBlendParametersPerTarget = HH, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this.reset();
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty;
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0;
      }
      set alphaBlend(HH) {
        this.setAlphaBlend(HH);
      }
      setAlphaBlend(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[IH] !== HH && (HH ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[IH] = HH, this._isAlphaBlendDirty = !0);
      }
      setAlphaBlendConstants(HH, IH, EH, RH) {
        this._blendConstants[0] === HH && this._blendConstants[1] === IH && this._blendConstants[2] === EH && this._blendConstants[3] === RH || (this._blendConstants[0] = HH, this._blendConstants[1] = IH, this._blendConstants[2] = EH, this._blendConstants[3] = RH, this._isBlendConstantsDirty = !0);
      }
      setAlphaBlendFunctionParameters(HH, IH, EH, RH) {
        const hH = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[hH + 0] === HH && this._blendFunctionParameters[hH + 1] === IH && this._blendFunctionParameters[hH + 2] === EH && this._blendFunctionParameters[hH + 3] === RH || (this._blendFunctionParameters[hH + 0] = HH, this._blendFunctionParameters[hH + 1] = IH, this._blendFunctionParameters[hH + 2] = EH, this._blendFunctionParameters[hH + 3] = RH, this._isBlendFunctionParametersDirty = !0);
      }
      setAlphaEquationParameters(HH, IH) {
        const EH = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[EH + 0] === HH && this._blendEquationParameters[EH + 1] === IH || (this._blendEquationParameters[EH + 0] = HH, this._blendEquationParameters[EH + 1] = IH, this._isBlendEquationParametersDirty = !0);
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1;
      }
      apply(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (!this.isDirty) return;
        if (this._isBlendConstantsDirty && (HH.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === IH || !this._supportBlendParametersPerTarget) return this._isAlphaBlendDirty && (this._alphaBlend[0] ? HH.enable(HH.BLEND) : HH.disable(HH.BLEND), this._isAlphaBlendDirty = !1), this._isBlendFunctionParametersDirty && (HH.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void (this._isBlendEquationParametersDirty && (HH.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1));
        const EH = HH;
        if (this._isAlphaBlendDirty) {
          for (let RH = 0; RH < IH; RH++) {
            const IH = RH < this._numTargetEnabled ? RH : 0;
            this._alphaBlend[IH] ? EH.enableIndexed(HH.BLEND, RH) : EH.disableIndexed(HH.BLEND, RH);
          }
          this._isAlphaBlendDirty = !1;
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let HH = 0; HH < IH; HH++) {
            const IH = HH < this._numTargetEnabled ? 4 * HH : 0;
            EH.blendFuncSeparateIndexed(HH, this._blendFunctionParameters[IH + 0], this._blendFunctionParameters[IH + 1], this._blendFunctionParameters[IH + 2], this._blendFunctionParameters[IH + 3]);
          }
          this._isBlendFunctionParametersDirty = !1;
        }
        if (this._isBlendEquationParametersDirty) {
          for (let HH = 0; HH < IH; HH++) {
            const IH = HH < this._numTargetEnabled ? 2 * HH : 0;
            EH.blendEquationSeparateIndexed(HH, this._blendEquationParameters[IH + 0], this._blendEquationParameters[IH + 1]);
          }
          this._isBlendEquationParametersDirty = !1;
        }
      }
      setAlphaMode(HH, IH) {
        let EH = 32774;
        switch (HH) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, IH);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, IH);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, IH);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, IH);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, IH);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, IH);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, IH);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, IH);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, IH);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, IH);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, IH);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, IH);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, IH);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, IH);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, IH);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, IH);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, IH), EH = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, IH), EH = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, IH);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, IH);
        }
        this.setAlphaEquationParameters(EH, EH, IH);
      }
    }
  },
  22339: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => RH
    });
    class RH {}
    RH._IsPickingAvailable = !1;
  },
  22302: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => AR,
      c: () => eR
    });
    var RH = EH(17),
      hH = EH(21819),
      TH = EH(21900),
      sH = EH(21850),
      eH = EH(21786),
      GH = EH(21968);
    class AH {
      constructor() {
        this._count = 0, this._data = {};
      }
      RH(HH) {
        this.clear(), HH.forEach((HH, IH) => this.add(HH, IH));
      }
      get(HH) {
        const IH = this._data[HH];
        if (void 0 !== IH) return IH;
      }
      getOrAddWithFactory(HH, IH) {
        let EH = this.get(HH);
        return void 0 !== EH || (EH = IH(HH), EH && this.add(HH, EH)), EH;
      }
      getOrAdd(HH, IH) {
        const EH = this.get(HH);
        return void 0 !== EH ? EH : (this.add(HH, IH), IH);
      }
      contains(HH) {
        return void 0 !== this._data[HH];
      }
      add(HH, IH) {
        return void 0 === this._data[HH] && (this._data[HH] = IH, ++this._count, !0);
      }
      set(HH, IH) {
        return void 0 !== this._data[HH] && (this._data[HH] = IH, !0);
      }
      getAndRemove(HH) {
        const IH = this.get(HH);
        return void 0 !== IH ? (delete this._data[HH], --this._count, IH) : null;
      }
      remove(HH) {
        return !!this.contains(HH) && (delete this._data[HH], --this._count, !0);
      }
      clear() {
        this._data = {}, this._count = 0;
      }
      get count() {
        return this._count;
      }
      forEach(HH) {
        for (const IH in this._data) {
          HH(IH, this._data[IH]);
        }
      }
      first(HH) {
        for (const IH in this._data) {
          const EH = HH(IH, this._data[IH]);
          if (EH) return EH;
        }
        return null;
      }
    }
    var VH = EH(21974),
      YH = EH(21764),
      QH = EH(22304),
      JH = EH(22235),
      OH = EH(22231);
    class rH {
      constructor(HH, IH, EH, RH, hH, TH) {
        this.source = HH, this.pointerX = IH, this.pointerY = EH, this.meshUnderPointer = RH, this.sourceEvent = hH, this.additionalData = TH;
      }
      static CreateNew(HH, IH, EH) {
        const RH = HH.kh();
        return new rH(HH, RH.pointerX, RH.pointerY, RH.meshUnderPointer || HH, IH, EH);
      }
      static CreateNewFromSprite(HH, IH, EH, RH) {
        return new rH(HH, IH.pointerX, IH.pointerY, IH.meshUnderPointer, EH, RH);
      }
      static CreateNewFromScene(HH, IH) {
        return new rH(null, HH.pointerX, HH.pointerY, HH.meshUnderPointer, IH);
      }
      static CreateNewFromPrimitive(HH, IH, EH, RH) {
        return new rH(HH, IH.x, IH.y, null, EH, RH);
      }
    }
    var FH = EH(22323),
      MH = EH(22267),
      NH = EH(22326),
      iI = EH(22281),
      DH = EH(21828),
      PH = EH(21782),
      XH = EH(21856),
      mI = EH(22078);
    class ZH {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0;
      }
      static get HasTriggers() {
        for (const HH in ZH.Triggers) if (Object.prototype.hasOwnProperty.call(ZH.Triggers, HH)) return !0;
        return !1;
      }
      static get HasPickTriggers() {
        for (const HH in ZH.Triggers) if (Object.prototype.hasOwnProperty.call(ZH.Triggers, HH)) {
          const IH = parseInt(HH);
          if (IH >= 1 && IH <= 7) return !0;
        }
        return !1;
      }
      static HasSpecificTrigger(HH) {
        for (const IH in ZH.Triggers) if (Object.prototype.hasOwnProperty.call(ZH.Triggers, IH)) {
          if (parseInt(IH) === HH) return !0;
        }
        return !1;
      }
    }
    ZH.Triggers = {};
    var qH,
      LH,
      gH,
      yH,
      oH,
      kI,
      CH,
      cH = EH(22076);
    !function (HH) {
      HH[HH.Generic = 0] = "Generic", HH[HH.Keyboard = 1] = "Keyboard", HH[HH.Mouse = 2] = "Mouse", HH[HH.Touch = 3] = "Touch", HH[HH.DualShock = 4] = "DualShock", HH[HH.Xbox = 5] = "Xbox", HH[HH.Switch = 6] = "Switch", HH[HH.DualSense = 7] = "DualSense";
    }(qH || (qH = {})), function (HH) {
      HH[HH.Horizontal = 0] = "Horizontal", HH[HH.Vertical = 1] = "Vertical", HH[HH.LeftClick = 2] = "LeftClick", HH[HH.MiddleClick = 3] = "MiddleClick", HH[HH.RightClick = 4] = "RightClick", HH[HH.BrowserBack = 5] = "BrowserBack", HH[HH.BrowserForward = 6] = "BrowserForward", HH[HH.MouseWheelX = 7] = "MouseWheelX", HH[HH.MouseWheelY = 8] = "MouseWheelY", HH[HH.MouseWheelZ = 9] = "MouseWheelZ", HH[HH.Move = 12] = "Move";
    }(LH || (LH = {})), function (HH) {
      HH[HH.Horizontal = 0] = "Horizontal", HH[HH.Vertical = 1] = "Vertical", HH[HH.LeftClick = 2] = "LeftClick", HH[HH.MiddleClick = 3] = "MiddleClick", HH[HH.RightClick = 4] = "RightClick", HH[HH.BrowserBack = 5] = "BrowserBack", HH[HH.BrowserForward = 6] = "BrowserForward", HH[HH.MouseWheelX = 7] = "MouseWheelX", HH[HH.MouseWheelY = 8] = "MouseWheelY", HH[HH.MouseWheelZ = 9] = "MouseWheelZ", HH[HH.DeltaHorizontal = 10] = "DeltaHorizontal", HH[HH.DeltaVertical = 11] = "DeltaVertical";
    }(gH || (gH = {})), function (HH) {
      HH[HH.Cross = 0] = "Cross", HH[HH.Circle = 1] = "Circle", HH[HH.Square = 2] = "Square", HH[HH.Triangle = 3] = "Triangle", HH[HH.L1 = 4] = "L1", HH[HH.R1 = 5] = "R1", HH[HH.L2 = 6] = "L2", HH[HH.R2 = 7] = "R2", HH[HH.Share = 8] = "Share", HH[HH.Options = 9] = "Options", HH[HH.L3 = 10] = "L3", HH[HH.R3 = 11] = "R3", HH[HH.DPadUp = 12] = "DPadUp", HH[HH.DPadDown = 13] = "DPadDown", HH[HH.DPadLeft = 14] = "DPadLeft", HH[HH.DPadRight = 15] = "DPadRight", HH[HH.Home = 16] = "Home", HH[HH.TouchPad = 17] = "TouchPad", HH[HH.LStickXAxis = 18] = "LStickXAxis", HH[HH.LStickYAxis = 19] = "LStickYAxis", HH[HH.RStickXAxis = 20] = "RStickXAxis", HH[HH.RStickYAxis = 21] = "RStickYAxis";
    }(yH || (yH = {})), function (HH) {
      HH[HH.Cross = 0] = "Cross", HH[HH.Circle = 1] = "Circle", HH[HH.Square = 2] = "Square", HH[HH.Triangle = 3] = "Triangle", HH[HH.L1 = 4] = "L1", HH[HH.R1 = 5] = "R1", HH[HH.L2 = 6] = "L2", HH[HH.R2 = 7] = "R2", HH[HH.Create = 8] = "Create", HH[HH.Options = 9] = "Options", HH[HH.L3 = 10] = "L3", HH[HH.R3 = 11] = "R3", HH[HH.DPadUp = 12] = "DPadUp", HH[HH.DPadDown = 13] = "DPadDown", HH[HH.DPadLeft = 14] = "DPadLeft", HH[HH.DPadRight = 15] = "DPadRight", HH[HH.Home = 16] = "Home", HH[HH.TouchPad = 17] = "TouchPad", HH[HH.LStickXAxis = 18] = "LStickXAxis", HH[HH.LStickYAxis = 19] = "LStickYAxis", HH[HH.RStickXAxis = 20] = "RStickXAxis", HH[HH.RStickYAxis = 21] = "RStickYAxis";
    }(oH || (oH = {})), function (HH) {
      HH[HH.A = 0] = "A", HH[HH.B = 1] = "B", HH[HH.X = 2] = "X", HH[HH.Y = 3] = "Y", HH[HH.LB = 4] = "LB", HH[HH.RB = 5] = "RB", HH[HH.LT = 6] = "LT", HH[HH.RT = 7] = "RT", HH[HH.Back = 8] = "Back", HH[HH.Start = 9] = "Start", HH[HH.LS = 10] = "LS", HH[HH.RS = 11] = "RS", HH[HH.DPadUp = 12] = "DPadUp", HH[HH.DPadDown = 13] = "DPadDown", HH[HH.DPadLeft = 14] = "DPadLeft", HH[HH.DPadRight = 15] = "DPadRight", HH[HH.Home = 16] = "Home", HH[HH.LStickXAxis = 17] = "LStickXAxis", HH[HH.LStickYAxis = 18] = "LStickYAxis", HH[HH.RStickXAxis = 19] = "RStickXAxis", HH[HH.RStickYAxis = 20] = "RStickYAxis";
    }(kI || (kI = {})), function (HH) {
      HH[HH.B = 0] = "B", HH[HH.A = 1] = "A", HH[HH.Y = 2] = "Y", HH[HH.X = 3] = "X", HH[HH.L = 4] = "L", HH[HH.R = 5] = "R", HH[HH.ZL = 6] = "ZL", HH[HH.ZR = 7] = "ZR", HH[HH.Minus = 8] = "Minus", HH[HH.Plus = 9] = "Plus", HH[HH.LS = 10] = "LS", HH[HH.RS = 11] = "RS", HH[HH.DPadUp = 12] = "DPadUp", HH[HH.DPadDown = 13] = "DPadDown", HH[HH.DPadLeft = 14] = "DPadLeft", HH[HH.DPadRight = 15] = "DPadRight", HH[HH.Home = 16] = "Home", HH[HH.Capture = 17] = "Capture", HH[HH.LStickXAxis = 18] = "LStickXAxis", HH[HH.LStickYAxis = 19] = "LStickYAxis", HH[HH.RStickXAxis = 20] = "RStickXAxis", HH[HH.RStickYAxis = 21] = "RStickYAxis";
    }(CH || (CH = {}));
    var UH = EH(22081);
    class WH {
      static CreateDeviceEvent(HH, IH, EH, RH, hH, TH, sH) {
        switch (HH) {
          case qH.Keyboard:
            return this._CreateKeyboardEvent(EH, RH, hH, TH);
          case qH.Mouse:
            if (EH === LH.MouseWheelX || EH === LH.MouseWheelY || EH === LH.MouseWheelZ) return this._CreateWheelEvent(HH, IH, EH, RH, hH, TH);
          case qH.Touch:
            return this._CreatePointerEvent(HH, IH, EH, RH, hH, TH, sH);
          default:
            throw "Unable to generate event for device ".concat(qH[HH]);
        }
      }
      static _CreatePointerEvent(HH, IH, EH, RH, hH, TH, sH) {
        const eH = this._CreateMouseEvent(HH, IH, EH, RH, hH, TH);
        HH === qH.Mouse ? (eH.deviceType = qH.Mouse, eH.pointerId = 1, eH.pointerType = "mouse") : (eH.deviceType = qH.Touch, eH.pointerId = null !== sH && void 0 !== sH ? sH : IH, eH.pointerType = "touch");
        let GH = 0;
        return GH += hH.pollInput(HH, IH, LH.LeftClick), GH += 2 * hH.pollInput(HH, IH, LH.RightClick), GH += 4 * hH.pollInput(HH, IH, LH.MiddleClick), eH.buttons = GH, EH === LH.Move ? eH.type = "pointermove" : EH >= LH.LeftClick && EH <= LH.RightClick && (eH.type = 1 === RH ? "pointerdown" : "pointerup", eH.button = EH - 2), eH;
      }
      static _CreateWheelEvent(HH, IH, EH, RH, hH, TH) {
        const sH = this._CreateMouseEvent(HH, IH, EH, RH, hH, TH);
        switch (sH.pointerId = 1, sH.type = "wheel", sH.deltaMode = UH.c.DOM_DELTA_PIXEL, sH.deltaX = 0, sH.deltaY = 0, sH.deltaZ = 0, EH) {
          case LH.MouseWheelX:
            sH.deltaX = RH;
            break;
          case LH.MouseWheelY:
            sH.deltaY = RH;
            break;
          case LH.MouseWheelZ:
            sH.deltaZ = RH;
        }
        return sH;
      }
      static _CreateMouseEvent(HH, IH, EH, RH, hH, TH) {
        const sH = this._CreateEvent(TH),
          eH = hH.pollInput(HH, IH, LH.Horizontal),
          GH = hH.pollInput(HH, IH, LH.Vertical);
        return TH ? (sH.movementX = 0, sH.movementY = 0, sH.offsetX = sH.movementX - TH.getBoundingClientRect().x, sH.offsetY = sH.movementY - TH.getBoundingClientRect().y) : (sH.movementX = hH.pollInput(HH, IH, 10), sH.movementY = hH.pollInput(HH, IH, 11), sH.offsetX = 0, sH.offsetY = 0), this._CheckNonCharacterKeys(sH, hH), sH.clientX = eH, sH.clientY = GH, sH.x = eH, sH.y = GH, sH.deviceType = HH, sH.deviceSlot = IH, sH.inputIndex = EH, sH;
      }
      static _CreateKeyboardEvent(HH, IH, EH, RH) {
        const hH = this._CreateEvent(RH);
        return this._CheckNonCharacterKeys(hH, EH), hH.deviceType = qH.Keyboard, hH.deviceSlot = 0, hH.inputIndex = HH, hH.type = 1 === IH ? "keydown" : "keyup", hH.key = String.fromCharCode(HH), hH.keyCode = HH, hH;
      }
      static _CheckNonCharacterKeys(HH, IH) {
        const EH = IH.isDeviceAvailable(qH.Keyboard),
          RH = EH && 1 === IH.pollInput(qH.Keyboard, 0, 18),
          hH = EH && 1 === IH.pollInput(qH.Keyboard, 0, 17),
          TH = EH && (1 === IH.pollInput(qH.Keyboard, 0, 91) || 1 === IH.pollInput(qH.Keyboard, 0, 92) || 1 === IH.pollInput(qH.Keyboard, 0, 93)),
          sH = EH && 1 === IH.pollInput(qH.Keyboard, 0, 16);
        HH.altKey = RH, HH.ctrlKey = hH, HH.metaKey = TH, HH.shiftKey = sH;
      }
      static _CreateEvent(HH) {
        const IH = {
          preventDefault: () => {}
        };
        return IH.target = HH, IH;
      }
    }
    class BH {
      constructor(HH, IH, EH) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(HH, IH, (HH, IH, RH, hH) => {
          const TH = WH.CreateDeviceEvent(HH, IH, RH, hH, this);
          EH(HH, IH, TH);
        }) : this._createDummyNativeInput();
      }
      pollInput(HH, IH, EH) {
        return this._nativeInput.pollInput(HH, IH, EH);
      }
      isDeviceAvailable(HH) {
        return HH === qH.Mouse || HH === qH.Touch;
      }
      dispose() {
        this._nativeInput.dispose();
      }
      _createDummyNativeInput() {
        return {
          pollInput: () => 0,
          isDeviceAvailable: () => !1,
          dispose: () => {}
        };
      }
    }
    const fH = Object.keys(LH).length / 2;
    class aH {
      constructor(HH, IH, EH, RH) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = hH.i.IsSafari(), this._usingMacOs = (0, DH.i)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = HH => {}, this._keyboardUpEvent = HH => {}, this._keyboardBlurEvent = HH => {}, this._pointerMoveEvent = HH => {}, this._pointerDownEvent = HH => {}, this._pointerUpEvent = HH => {}, this._pointerCancelEvent = HH => {}, this._pointerCancelTouch = HH => {}, this._pointerLeaveEvent = HH => {}, this._pointerWheelEvent = HH => {}, this._pointerBlurEvent = HH => {}, this._pointerMacOsChromeOutEvent = HH => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, DH.i)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, DH.i)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = HH => {}, this._gamepadDisconnectedEvent = HH => {}, this._eventPrefix = hH.i.GetPointerPrefix(HH), this._engine = HH, this._onDeviceConnected = IH, this._onDeviceDisconnected = EH, this._onInputChanged = RH, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents();
        });
      }
      pollInput(HH, IH, EH) {
        const RH = this._inputs[HH][IH];
        if (!RH) throw "Unable to find device ".concat(qH[HH]);
        HH >= qH.DualShock && HH <= qH.DualSense && this._updateDevice(HH, IH, EH);
        const TH = RH[EH];
        if (void 0 === TH) throw "Unable to find input ".concat(EH, " for device ").concat(qH[HH], " in slot ").concat(IH);
        return EH === LH.Move && hH.i.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), TH;
      }
      isDeviceAvailable(HH) {
        return void 0 !== this._inputs[HH];
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents();
      }
      _enableEvents() {
        const HH = null === this || void 0 === this ? void 0 : this._engine.getInputElement();
        if (HH && (!this._eventsAttached || this._elementToAttachTo !== HH)) {
          if (this._disableEvents(), this._inputs) for (const HH of this._inputs) if (HH) for (const IH in HH) {
            const EH = HH[+IH];
            if (EH) for (let HH = 0; HH < EH.length; HH++) EH[HH] = 0;
          }
          this._elementToAttachTo = HH, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices();
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1;
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const HH = navigator.getGamepads();
          for (const IH of HH) IH && this._addGamePad(IH);
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(qH.Mouse, 0, 0, 0);
      }
      _addGamePad(HH) {
        const IH = this._getGamepadDeviceType(HH.id),
          EH = HH.index;
        this._gamepads = this._gamepads || new Array(HH.index + 1), this._registerDevice(IH, EH, HH.buttons.length + HH.axes.length), this._gamepads[EH] = IH;
      }
      _addPointerDevice(HH, IH, EH, RH) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(HH, IH, fH);
        const hH = this._inputs[HH][IH];
        hH[0] = EH, hH[1] = RH;
      }
      _registerDevice(HH, IH, EH) {
        if (void 0 === IH) throw "Unable to register device ".concat(qH[HH], " to undefined slot.");
        if (this._inputs[HH] || (this._inputs[HH] = {}), !this._inputs[HH][IH]) {
          const RH = new Array(EH);
          RH.fill(0), this._inputs[HH][IH] = RH, this._onDeviceConnected(HH, IH);
        }
      }
      _unregisterDevice(HH, IH) {
        this._inputs[HH][IH] && (delete this._inputs[HH][IH], this._onDeviceDisconnected(HH, IH));
      }
      _handleKeyActions() {
        this._keyboardDownEvent = HH => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(qH.Keyboard, 0, 255));
          const IH = this._inputs[qH.Keyboard][0];
          if (IH) {
            IH[HH.keyCode] = 1;
            const EH = HH;
            EH.inputIndex = HH.keyCode, this._usingMacOs && HH.metaKey && "Meta" !== HH.key && (this._metaKeys.includes(HH.keyCode) || this._metaKeys.push(HH.keyCode)), this._onInputChanged(qH.Keyboard, 0, EH);
          }
        }, this._keyboardUpEvent = HH => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(qH.Keyboard, 0, 255));
          const IH = this._inputs[qH.Keyboard][0];
          if (IH) {
            IH[HH.keyCode] = 0;
            const EH = HH;
            if (EH.inputIndex = HH.keyCode, this._usingMacOs && "Meta" === HH.key && this._metaKeys.length > 0) {
              for (const HH of this._metaKeys) {
                const EH = WH.CreateDeviceEvent(qH.Keyboard, 0, HH, 0, this, this._elementToAttachTo);
                IH[HH] = 0, this._onInputChanged(qH.Keyboard, 0, EH);
              }
              this._metaKeys.splice(0, this._metaKeys.length);
            }
            this._onInputChanged(qH.Keyboard, 0, EH);
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const HH = this._inputs[qH.Keyboard][0];
            for (let IH = 0; IH < HH.length; IH++) if (0 !== HH[IH]) {
              HH[IH] = 0;
              const EH = WH.CreateDeviceEvent(qH.Keyboard, 0, IH, 0, this, this._elementToAttachTo);
              this._onInputChanged(qH.Keyboard, 0, EH);
            }
            this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length);
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent);
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, DH.i)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let RH = 0; RH < this._maxTouchPoints; RH++) this._activeTouchIds[RH] = -1;
        this._pointerMoveEvent = HH => {
          const IH = this._getPointerType(HH);
          let EH = IH === qH.Mouse ? 0 : this._activeTouchIds.indexOf(HH.pointerId);
          if (IH === qH.Touch && -1 === EH) {
            const RH = this._activeTouchIds.indexOf(-1);
            if (!(RH >= 0)) return void hH.i.Warn("Max number of touches exceeded.  Ignoring touches in excess of ".concat(this._maxTouchPoints));
            EH = RH, this._activeTouchIds[RH] = HH.pointerId, this._onDeviceConnected(IH, EH);
          }
          this._inputs[IH] || (this._inputs[IH] = {}), this._inputs[IH][EH] || this._addPointerDevice(IH, EH, HH.clientX, HH.clientY);
          const RH = this._inputs[IH][EH];
          if (RH) {
            const hH = HH;
            hH.inputIndex = LH.Move, RH[LH.Horizontal] = HH.clientX, RH[LH.Vertical] = HH.clientY, IH === qH.Touch && 0 === RH[LH.LeftClick] && (RH[LH.LeftClick] = 1), void 0 === HH.pointerId && (HH.pointerId = this._mouseId), this._onInputChanged(IH, EH, hH), this._usingSafari || -1 === HH.button || (hH.inputIndex = HH.button + 2, RH[HH.button + 2] = RH[HH.button + 2] ? 0 : 1, this._onInputChanged(IH, EH, hH));
          }
        }, this._pointerDownEvent = HH => {
          const IH = this._getPointerType(HH);
          let EH = IH === qH.Mouse ? 0 : HH.pointerId;
          if (IH === qH.Touch) {
            let IH = this._activeTouchIds.indexOf(HH.pointerId);
            if (-1 === IH && (IH = this._activeTouchIds.indexOf(-1)), !(IH >= 0)) return void hH.i.Warn("Max number of touches exceeded.  Ignoring touches in excess of ".concat(this._maxTouchPoints));
            EH = IH, this._activeTouchIds[IH] = HH.pointerId;
          }
          this._inputs[IH] || (this._inputs[IH] = {}), this._inputs[IH][EH] ? IH === qH.Touch && this._onDeviceConnected(IH, EH) : this._addPointerDevice(IH, EH, HH.clientX, HH.clientY);
          const RH = this._inputs[IH][EH];
          if (RH) {
            const hH = RH[LH.Horizontal],
              sH = RH[LH.Vertical];
            if (IH === qH.Mouse) {
              if (void 0 === HH.pointerId && (HH.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId);
              } catch (TH) {}
            } else if (HH.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(HH.pointerId);
            } catch (TH) {}
            RH[LH.Horizontal] = HH.clientX, RH[LH.Vertical] = HH.clientY, RH[HH.button + 2] = 1;
            const eH = HH;
            eH.inputIndex = HH.button + 2, this._onInputChanged(IH, EH, eH), hH === HH.clientX && sH === HH.clientY || (eH.inputIndex = LH.Move, this._onInputChanged(IH, EH, eH));
          }
        }, this._pointerUpEvent = HH => {
          var IH;
          const EH = this._getPointerType(HH),
            RH = EH === qH.Mouse ? 0 : this._activeTouchIds.indexOf(HH.pointerId);
          if (EH === qH.Touch) {
            if (-1 === RH) return;
            this._activeTouchIds[RH] = -1;
          }
          const hH = null === (IH = this._inputs[EH]) || void 0 === IH ? void 0 : IH[RH];
          let TH = HH.button,
            sH = hH && 0 !== hH[TH + 2];
          if (!sH && this._isUsingFirefox && this._usingMacOs && hH && (TH = 2 === TH ? 0 : 2, sH = 0 !== hH[TH + 2]), sH) {
            var eH, GH, AH, VH;
            const IH = hH[LH.Horizontal],
              sH = hH[LH.Vertical];
            hH[LH.Horizontal] = HH.clientX, hH[LH.Vertical] = HH.clientY, hH[TH + 2] = 0;
            const YH = HH;
            void 0 === HH.pointerId && (HH.pointerId = this._mouseId), IH === HH.clientX && sH === HH.clientY || (YH.inputIndex = LH.Move, this._onInputChanged(EH, RH, YH)), YH.inputIndex = TH + 2, EH === qH.Mouse && this._mouseId >= 0 && null !== (eH = (GH = this._elementToAttachTo).hasPointerCapture) && void 0 !== eH && eH.call(GH, this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : HH.pointerId && null !== (AH = (VH = this._elementToAttachTo).hasPointerCapture) && void 0 !== AH && AH.call(VH, HH.pointerId) && this._elementToAttachTo.releasePointerCapture(HH.pointerId), this._onInputChanged(EH, RH, YH), EH === qH.Touch && this._onDeviceDisconnected(EH, RH);
          }
        }, this._pointerCancelTouch = HH => {
          var IH, EH;
          const RH = this._activeTouchIds.indexOf(HH);
          if (-1 === RH) return;
          null !== (IH = (EH = this._elementToAttachTo).hasPointerCapture) && void 0 !== IH && IH.call(EH, HH) && this._elementToAttachTo.releasePointerCapture(HH), this._inputs[qH.Touch][RH][LH.LeftClick] = 0;
          const hH = WH.CreateDeviceEvent(qH.Touch, RH, LH.LeftClick, 0, this, this._elementToAttachTo, HH);
          this._onInputChanged(qH.Touch, RH, hH), this._activeTouchIds[RH] = -1, this._onDeviceDisconnected(qH.Touch, RH);
        }, this._pointerCancelEvent = HH => {
          if ("mouse" === HH.pointerType) {
            var IH, EH;
            const HH = this._inputs[qH.Mouse][0];
            this._mouseId >= 0 && null !== (IH = (EH = this._elementToAttachTo).hasPointerCapture) && void 0 !== IH && IH.call(EH, this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let IH = LH.LeftClick; IH <= LH.BrowserForward; IH++) if (1 === HH[IH]) {
              HH[IH] = 0;
              const EH = WH.CreateDeviceEvent(qH.Mouse, 0, IH, 0, this, this._elementToAttachTo);
              this._onInputChanged(qH.Mouse, 0, EH);
            }
          } else this._pointerCancelTouch(HH.pointerId);
        }, this._pointerLeaveEvent = HH => {
          "pen" === HH.pointerType && this._pointerCancelTouch(HH.pointerId);
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let HH = !1;
        const IH = function () {};
        try {
          const EH = Object.defineProperty({}, "passive", {
            get: function () {
              HH = !0;
            }
          });
          this._elementToAttachTo.addEventListener("test", IH, EH), this._elementToAttachTo.removeEventListener("test", IH, EH);
        } catch (EH) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(qH.Mouse)) {
            var HH, IH;
            const EH = this._inputs[qH.Mouse][0];
            this._mouseId >= 0 && null !== (HH = (IH = this._elementToAttachTo).hasPointerCapture) && void 0 !== HH && HH.call(IH, this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let HH = LH.LeftClick; HH <= LH.BrowserForward; HH++) if (1 === EH[HH]) {
              EH[HH] = 0;
              const IH = WH.CreateDeviceEvent(qH.Mouse, 0, HH, 0, this, this._elementToAttachTo);
              this._onInputChanged(qH.Mouse, 0, IH);
            }
          }
          if (this.isDeviceAvailable(qH.Touch)) {
            const HH = this._inputs[qH.Touch];
            for (let IH = 0; IH < this._activeTouchIds.length; IH++) {
              var EH, RH, hH;
              const TH = this._activeTouchIds[IH];
              if (null !== (EH = (RH = this._elementToAttachTo).hasPointerCapture) && void 0 !== EH && EH.call(RH, TH) && this._elementToAttachTo.releasePointerCapture(TH), -1 !== TH && 1 === (null === (hH = HH[IH]) || void 0 === hH ? void 0 : hH[LH.LeftClick])) {
                HH[IH][LH.LeftClick] = 0;
                const EH = WH.CreateDeviceEvent(qH.Touch, IH, LH.LeftClick, 0, this, this._elementToAttachTo, TH);
                this._onInputChanged(qH.Touch, IH, EH), this._activeTouchIds[IH] = -1, this._onDeviceDisconnected(qH.Touch, IH);
              }
            }
          }
        }, this._pointerWheelEvent = HH => {
          const IH = qH.Mouse;
          this._inputs[IH] || (this._inputs[IH] = []), this._inputs[IH][0] || (this._pointerActive = !0, this._registerDevice(IH, 0, fH));
          const EH = this._inputs[IH][0];
          if (EH) {
            EH[LH.MouseWheelX] = HH.deltaX || 0, EH[LH.MouseWheelY] = HH.deltaY || HH.wheelDelta || 0, EH[LH.MouseWheelZ] = HH.deltaZ || 0;
            const RH = HH;
            void 0 === HH.pointerId && (HH.pointerId = this._mouseId), 0 !== EH[LH.MouseWheelX] && (RH.inputIndex = LH.MouseWheelX, this._onInputChanged(IH, 0, RH)), 0 !== EH[LH.MouseWheelY] && (RH.inputIndex = LH.MouseWheelY, this._onInputChanged(IH, 0, RH)), 0 !== EH[LH.MouseWheelZ] && (RH.inputIndex = LH.MouseWheelZ, this._onInputChanged(IH, 0, RH));
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = HH => {
          HH.buttons > 1 && this._pointerCancelEvent(HH);
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!HH && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add(() => {
          if (this.isDeviceAvailable(qH.Mouse)) {
            const HH = this._inputs[qH.Mouse][0];
            HH[LH.MouseWheelX] = 0, HH[LH.MouseWheelY] = 0, HH[LH.MouseWheelZ] = 0;
          }
        });
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = HH => {
          this._addGamePad(HH.gamepad);
        }, this._gamepadDisconnectedEvent = HH => {
          if (this._gamepads) {
            const IH = this._getGamepadDeviceType(HH.gamepad.id),
              EH = HH.gamepad.index;
            this._unregisterDevice(IH, EH), delete this._gamepads[EH];
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent);
      }
      _updateDevice(HH, IH, EH) {
        const RH = navigator.getGamepads()[IH];
        if (RH && HH === this._gamepads[IH]) {
          const hH = this._inputs[HH][IH];
          EH >= RH.buttons.length ? hH[EH] = RH.axes[EH - RH.buttons.length].valueOf() : hH[EH] = RH.buttons[EH].value;
        }
      }
      _getGamepadDeviceType(HH) {
        return -1 !== HH.indexOf("054c") ? -1 !== HH.indexOf("0ce6") ? qH.DualSense : qH.DualShock : -1 !== HH.indexOf("Xbox One") || -1 !== HH.search("Xbox 360") || -1 !== HH.search("xinput") || -1 !== HH.indexOf("045e") && -1 === HH.indexOf("Surface Dock") ? qH.Xbox : -1 !== HH.indexOf("057e") ? qH.Switch : qH.Generic;
      }
      _getPointerType(HH) {
        let IH = qH.Mouse;
        return ("touch" === HH.pointerType || "pen" === HH.pointerType || HH.touches) && (IH = qH.Touch), IH;
      }
    }
    class nH {
      constructor(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = IH, this.deviceSlot = EH, this.onInputChangedObservable = new eH.e(), this._deviceInputSystem = HH;
      }
      getInput(HH) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, HH);
      }
    }
    class pH {
      constructor(HH) {
        this._registeredManagers = new Array(), this._refCount = 0, this.registerManager = HH => {
          for (let IH = 0; IH < this._devices.length; IH++) {
            const EH = this._devices[IH];
            for (const RH in EH) {
              const EH = +RH;
              HH._addDevice(new nH(this._deviceInputSystem, IH, EH));
            }
          }
          this._registeredManagers.push(HH);
        }, this.unregisterManager = HH => {
          const IH = this._registeredManagers.indexOf(HH);
          IH > -1 && this._registeredManagers.splice(IH, 1);
        };
        const IH = Object.keys(qH).length / 2;
        this._devices = new Array(IH);
        const EH = (HH, IH) => {
            this._devices[HH] || (this._devices[HH] = new Array()), this._devices[HH][IH] || (this._devices[HH][IH] = IH);
            for (const EH of this._registeredManagers) {
              const RH = new nH(this._deviceInputSystem, HH, IH);
              EH._addDevice(RH);
            }
          },
          RH = (HH, IH) => {
            var EH;
            null !== (EH = this._devices[HH]) && void 0 !== EH && EH[IH] && delete this._devices[HH][IH];
            for (const RH of this._registeredManagers) RH._removeDevice(HH, IH);
          },
          hH = (HH, IH, EH) => {
            if (EH) for (const RH of this._registeredManagers) RH._onInputChanged(HH, IH, EH);
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new BH(EH, RH, hH) : this._deviceInputSystem = new aH(HH, EH, RH, hH);
      }
      dispose() {
        this._deviceInputSystem.dispose();
      }
    }
    class dH {
      getDeviceSource(HH, IH) {
        if (void 0 === IH) {
          if (void 0 === this._firstDevice[HH]) return null;
          IH = this._firstDevice[HH];
        }
        return this._devices[HH] && void 0 !== this._devices[HH][IH] ? this._devices[HH][IH] : null;
      }
      getDeviceSources(HH) {
        return this._devices[HH] ? this._devices[HH].filter(HH => !!HH) : [];
      }
      constructor(HH) {
        const IH = Object.keys(qH).length / 2;
        this._devices = new Array(IH), this._firstDevice = new Array(IH), this._engine = HH, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new pH(HH)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new eH.e(HH => {
          for (const IH of this._devices) if (IH) for (const EH of IH) EH && this.onDeviceConnectedObservable.notifyObserver(HH, EH);
        }), this.onDeviceDisconnectedObservable = new eH.e(), this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = HH.AM.add(() => {
          this.dispose();
        });
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.AM.remove(this._onDisposeObserver);
      }
      _addDevice(HH) {
        this._devices[HH.deviceType] || (this._devices[HH.deviceType] = []), this._devices[HH.deviceType][HH.deviceSlot] || (this._devices[HH.deviceType][HH.deviceSlot] = HH, this._updateFirstDevices(HH.deviceType)), this.onDeviceConnectedObservable.notifyObservers(HH);
      }
      _removeDevice(HH, IH) {
        var EH, RH;
        const hH = null === (EH = this._devices[HH]) || void 0 === EH ? void 0 : EH[IH];
        this.onDeviceDisconnectedObservable.notifyObservers(hH), null !== (RH = this._devices[HH]) && void 0 !== RH && RH[IH] && delete this._devices[HH][IH], this._updateFirstDevices(HH);
      }
      _onInputChanged(HH, IH, EH) {
        var RH, hH;
        null === (RH = this._devices[HH]) || void 0 === RH || null === (hH = RH[IH]) || void 0 === hH || hH.onInputChangedObservable.notifyObservers(EH);
      }
      _updateFirstDevices(HH) {
        switch (HH) {
          case qH.Keyboard:
          case qH.Mouse:
            this._firstDevice[HH] = 0;
            break;
          case qH.Touch:
          case qH.DualSense:
          case qH.DualShock:
          case qH.Xbox:
          case qH.Switch:
          case qH.Generic:
            {
              delete this._firstDevice[HH];
              const IH = this._devices[HH];
              if (IH) for (let EH = 0; EH < IH.length; EH++) if (IH[EH]) {
                this._firstDevice[HH] = EH;
                break;
              }
              break;
            }
        }
      }
    }
    var uH = EH(22339);
    class lH {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1;
      }
      get singleClick() {
        return this._singleClick;
      }
      get FT() {
        return this._doubleClick;
      }
      get hasSwiped() {
        return this._hasSwiped;
      }
      get ignore() {
        return this._ignore;
      }
      set singleClick(HH) {
        this._singleClick = HH;
      }
      set FT(HH) {
        this._doubleClick = HH;
      }
      set hasSwiped(HH) {
        this._hasSwiped = HH;
      }
      set ignore(HH) {
        this._ignore = HH;
      }
    }
    class KH {
      constructor(HH) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array(), this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new YH.t(0, 0), this._previousStartingPointerPosition = new YH.t(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = HH || PH.e.LastCreatedScene, this._scene;
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh;
      }
      getMeshUnderPointerByPointerId(HH) {
        return this._meshUnderPointerId[HH] || null;
      }
      get unTranslatedPointer() {
        return new YH.t(this._unTranslatedPointerX, this._unTranslatedPointerY);
      }
      get pointerX() {
        return this._pointerX;
      }
      set pointerX(HH) {
        this._pointerX = HH;
      }
      get pointerY() {
        return this._pointerY;
      }
      set pointerY(HH) {
        this._pointerY = HH;
      }
      _updatePointerPosition(HH) {
        const IH = this._scene.getEngine().getInputElementClientRect();
        IH && (this._pointerX = HH.clientX - IH.left, this._pointerY = HH.clientY - IH.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY);
      }
      _processPointerMove(HH, IH) {
        const EH = this._scene,
          RH = EH.getEngine(),
          hH = RH.getInputElement();
        hH && (hH.tabIndex = RH.canvasTabIndex, EH.doNotHandleCursors || (hH.style.cursor = EH.defaultCursor)), this._setCursorAndPointerOverMesh(HH, IH, EH);
        for (const GH of EH._pointerMoveStage) {
          var TH;
          const EH = !(null === (TH = HH = HH || this._pickMove(IH)) || void 0 === TH || !TH.pickedMesh);
          HH = GH.action(this._unTranslatedPointerX, this._unTranslatedPointerY, HH, EH, hH);
        }
        const sH = IH.inputIndex >= LH.MouseWheelX && IH.inputIndex <= LH.MouseWheelZ ? mI.b.POINTERWHEEL : mI.b.POINTERMOVE;
        let eH;
        EH.onPointerMove && (HH = HH || this._pickMove(IH), EH.onPointerMove(IH, HH, sH)), HH ? (eH = new mI.h(sH, IH, HH), this._setRayOnPointerInfo(HH, IH)) : (eH = new mI.h(sH, IH, null, this), this._movePointerInfo = eH), EH.onPointerObservable.hasObservers() && EH.onPointerObservable.notifyObservers(eH, sH);
      }
      _setRayOnPointerInfo(HH, IH) {
        const EH = this._scene;
        HH && uH.e._IsPickingAvailable && (HH.ray || (HH.ray = EH.createPickingRay(IH.offsetX, IH.offsetY, YH.d.Identity(), EH.activeCamera)));
      }
      _addCameraPointerObserver(HH, IH) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(HH, IH);
      }
      _removeCameraPointerObserver(HH) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(HH);
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick);
      }
      _checkPrePointerObservable(HH, IH, EH) {
        const RH = this._scene,
          hH = new mI.e(EH, IH, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return HH && (hH.originalPickingInfo = HH, hH.ray = HH.ray, "xr-near" === IH.pointerType && HH.originMesh && (hH.nearInteractionPickingInfo = HH)), RH.onPrePointerObservable.notifyObservers(hH, EH), !!hH.skipOnPointerObservable;
      }
      _pickMove(HH) {
        const IH = this._scene,
          EH = IH.oJ(this._unTranslatedPointerX, this._unTranslatedPointerY, IH.pointerMovePredicate, IH.pointerMoveFastCheck, IH.cameraToUseForPointers, IH.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(EH, HH, IH), EH;
      }
      _setCursorAndPointerOverMesh(HH, IH, EH) {
        const RH = EH.getEngine().getInputElement();
        if (null !== HH && void 0 !== HH && HH.pickedMesh) {
          if (this.setPointerOverMesh(HH.pickedMesh, IH.pointerId, HH, IH), !EH.doNotHandleCursors && RH && this._pointerOverMesh) {
            const HH = this._pointerOverMesh._getActionManagerForTrigger();
            HH && HH.hasPointerTriggers && (RH.style.cursor = HH.hoverCursor || EH.hoverCursor);
          }
        } else this.setPointerOverMesh(null, IH.pointerId, HH, IH);
      }
      simulatePointerMove(HH, IH) {
        const EH = new PointerEvent("pointermove", IH);
        EH.inputIndex = LH.Move, this._checkPrePointerObservable(HH, EH, mI.b.POINTERMOVE) || this._processPointerMove(HH, EH);
      }
      simulatePointerDown(HH, IH) {
        const EH = new PointerEvent("pointerdown", IH);
        EH.inputIndex = EH.button + 2, this._checkPrePointerObservable(HH, EH, mI.b.POINTERDOWN) || this._processPointerDown(HH, EH);
      }
      _processPointerDown(HH, IH) {
        var EH;
        const RH = this._scene;
        if (null !== (EH = HH) && void 0 !== EH && EH.pickedMesh) {
          this._pickedDownMesh = HH.pickedMesh;
          const EH = HH.pickedMesh._getActionManagerForTrigger();
          if (EH) {
            if (EH.hasPickTriggers) switch (EH.processTrigger(5, new rH(HH.pickedMesh, RH.pointerX, RH.pointerY, HH.pickedMesh, IH, HH)), IH.button) {
              case 0:
                EH.processTrigger(2, new rH(HH.pickedMesh, RH.pointerX, RH.pointerY, HH.pickedMesh, IH, HH));
                break;
              case 1:
                EH.processTrigger(4, new rH(HH.pickedMesh, RH.pointerX, RH.pointerY, HH.pickedMesh, IH, HH));
                break;
              case 2:
                EH.processTrigger(3, new rH(HH.pickedMesh, RH.pointerX, RH.pointerY, HH.pickedMesh, IH, HH));
            }
            EH.hasSpecificTrigger(8) && window.setTimeout(() => {
              const HH = RH.oJ(this._unTranslatedPointerX, this._unTranslatedPointerY, HH => HH.aQ && HH.isVisible && HH.isReady() && HH.actionManager && HH.actionManager.hasSpecificTrigger(8) && HH === this._pickedDownMesh, !1, RH.cameraToUseForPointers);
              null !== HH && void 0 !== HH && HH.pickedMesh && EH && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > KH.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, EH.processTrigger(8, rH.CreateNew(HH.pickedMesh, IH)));
            }, KH.LongPressDelay);
          }
        } else for (const sH of RH._pointerDownStage) HH = sH.action(this._unTranslatedPointerX, this._unTranslatedPointerY, HH, IH, !1);
        let hH;
        const TH = mI.b.POINTERDOWN;
        HH ? (RH.onPointerDown && RH.onPointerDown(IH, HH, TH), hH = new mI.h(TH, IH, HH), this._setRayOnPointerInfo(HH, IH)) : hH = new mI.h(TH, IH, null, this), RH.onPointerObservable.hasObservers() && RH.onPointerObservable.notifyObservers(hH, TH);
      }
      _isPointerSwiping() {
        return this._isSwiping;
      }
      simulatePointerUp(HH, IH, EH) {
        const RH = new PointerEvent("pointerup", IH);
        RH.inputIndex = LH.Move;
        const hH = new lH();
        EH ? hH.FT = !0 : hH.singleClick = !0, this._checkPrePointerObservable(HH, RH, mI.b.POINTERUP) || this._processPointerUp(HH, RH, hH);
      }
      _processPointerUp(HH, IH, EH) {
        var RH;
        const hH = this._scene;
        if (null !== (RH = HH) && void 0 !== RH && RH.pickedMesh) {
          if (this._pickedUpMesh = HH.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (hH.onPointerPick && hH.onPointerPick(IH, HH), EH.singleClick && !EH.ignore && hH.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const EH = mI.b.POINTERPICK,
              RH = new mI.h(EH, IH, HH);
            this._setRayOnPointerInfo(HH, IH), hH.onPointerObservable.notifyObservers(RH, EH);
          }
          const RH = HH.pickedMesh._getActionManagerForTrigger();
          if (RH && !EH.ignore) {
            RH.processTrigger(7, rH.CreateNew(HH.pickedMesh, IH, HH)), !EH.hasSwiped && EH.singleClick && RH.processTrigger(1, rH.CreateNew(HH.pickedMesh, IH, HH));
            const hH = HH.pickedMesh._getActionManagerForTrigger(6);
            EH.FT && hH && hH.processTrigger(6, rH.CreateNew(HH.pickedMesh, IH, HH));
          }
        } else if (!EH.ignore) for (const TH of hH._pointerUpStage) HH = TH.action(this._unTranslatedPointerX, this._unTranslatedPointerY, HH, IH, EH.FT);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const HH = this._pickedDownMesh._getActionManagerForTrigger(16);
          HH && HH.processTrigger(16, rH.CreateNew(this._pickedDownMesh, IH));
        }
        if (!EH.ignore) {
          const RH = new mI.h(mI.b.POINTERUP, IH, HH);
          if (this._setRayOnPointerInfo(HH, IH), hH.onPointerObservable.notifyObservers(RH, mI.b.POINTERUP), hH.onPointerUp && hH.onPointerUp(IH, HH, mI.b.POINTERUP), !EH.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let RH = 0;
            if (EH.singleClick ? RH = mI.b.POINTERTAP : EH.FT && (RH = mI.b.POINTERDOUBLETAP), RH) {
              const EH = new mI.h(RH, IH, HH);
              hH.onPointerObservable.hasObservers() && hH.onPointerObservable.hasSpecificMask(RH) && hH.onPointerObservable.notifyObservers(EH, RH);
            }
          }
        }
      }
      isPointerCaptured() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[HH];
      }
      attachControl() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          EH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const hH = this._scene,
          TH = hH.getEngine();
        RH || (RH = TH.getInputElement()), this._alreadyAttached && this.aF(), RH && (this._alreadyAttachedTo = RH), this._deviceSourceManager = new dH(TH), this._initActionManager = HH => {
          if (!this._meshPickProceed) {
            const IH = hH.skipPointerUpPicking || 0 === hH._registeredActions && !this._checkForPicking() && !hH.onPointerUp ? null : hH.oJ(this._unTranslatedPointerX, this._unTranslatedPointerY, hH.pointerUpPredicate, hH.pointerUpFastCheck, hH.cameraToUseForPointers, hH.pointerUpTrianglePredicate);
            this._currentPickResult = IH, IH && (HH = IH.hit && IH.pickedMesh ? IH.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0;
          }
          return HH;
        }, this._delayedSimpleClick = (HH, IH, EH) => {
          if ((Date.now() - this._previousStartingPointerTime > KH.DoubleClickDelay && !this._doubleClickOccured || HH !== this._previousButtonPressed) && (this._doubleClickOccured = !1, IH.singleClick = !0, IH.ignore = !1, this._delayedClicks[HH])) {
            const IH = this._delayedClicks[HH].evt,
              EH = mI.b.POINTERTAP,
              RH = new mI.h(EH, IH, this._currentPickResult);
            hH.onPointerObservable.hasObservers() && hH.onPointerObservable.hasSpecificMask(EH) && hH.onPointerObservable.notifyObservers(RH, EH), this._delayedClicks[HH] = null;
          }
        }, this._initClickEvent = (HH, IH, EH, RH) => {
          const hH = new lH();
          this._currentPickResult = null;
          let TH = null,
            sH = HH.hasSpecificMask(mI.b.POINTERPICK) || IH.hasSpecificMask(mI.b.POINTERPICK) || HH.hasSpecificMask(mI.b.POINTERTAP) || IH.hasSpecificMask(mI.b.POINTERTAP) || HH.hasSpecificMask(mI.b.POINTERDOUBLETAP) || IH.hasSpecificMask(mI.b.POINTERDOUBLETAP);
          !sH && ZH && (TH = this._initActionManager(TH, hH), TH && (sH = TH.hasPickTriggers));
          let eH = !1;
          if (sH = sH && !this._isMultiTouchGesture, sH) {
            const sH = EH.button;
            if (hH.hasSwiped = this._isPointerSwiping(), !hH.hasSwiped) {
              let VH = !KH.ExclusiveDoubleClickMode;
              if (VH || (VH = !HH.hasSpecificMask(mI.b.POINTERDOUBLETAP) && !IH.hasSpecificMask(mI.b.POINTERDOUBLETAP), VH && !ZH.HasSpecificTrigger(6) && (TH = this._initActionManager(TH, hH), TH && (VH = !TH.hasSpecificTrigger(6)))), VH) (Date.now() - this._previousStartingPointerTime > KH.DoubleClickDelay || sH !== this._previousButtonPressed) && (hH.singleClick = !0, RH(hH, this._currentPickResult), eH = !0);else {
                const HH = {
                  evt: EH,
                  clickInfo: hH,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, sH, hH, RH), KH.DoubleClickDelay)
                };
                this._delayedClicks[sH] = HH;
              }
              let YH = HH.hasSpecificMask(mI.b.POINTERDOUBLETAP) || IH.hasSpecificMask(mI.b.POINTERDOUBLETAP);
              if (!YH && ZH.HasSpecificTrigger(6) && (TH = this._initActionManager(TH, hH), TH && (YH = TH.hasSpecificTrigger(6))), YH) if (sH === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < KH.DoubleClickDelay && !this._doubleClickOccured) {
                if (hH.hasSwiped || this._isPointerSwiping()) {
                  if (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = sH, KH.ExclusiveDoubleClickMode) {
                    var GH;
                    if (this._delayedClicks[sH]) clearTimeout(null === (GH = this._delayedClicks[sH]) || void 0 === GH ? void 0 : GH.timeoutId), this._delayedClicks[sH] = null;
                    RH(hH, this._previousPickResult);
                  } else RH(hH, this._currentPickResult);
                } else {
                  var AH;
                  if (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, hH.FT = !0, hH.ignore = !1, KH.ExclusiveDoubleClickMode && this._delayedClicks[sH]) clearTimeout(null === (AH = this._delayedClicks[sH]) || void 0 === AH ? void 0 : AH.timeoutId), this._delayedClicks[sH] = null;
                  RH(hH, this._currentPickResult);
                }
                eH = !0;
              } else this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = sH;
            }
          }
          eH || RH(hH, this._currentPickResult);
        }, this._onPointerMove = HH => {
          if (this._updatePointerPosition(HH), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > KH.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > KH.DragMovementThreshold), TH.isPointerLock && TH._verifyPointerLock(), this._checkPrePointerObservable(null, HH, HH.inputIndex >= LH.MouseWheelX && HH.inputIndex <= LH.MouseWheelZ ? mI.b.POINTERWHEEL : mI.b.POINTERMOVE)) return;
          if (!hH.cameraToUseForPointers && !hH.activeCamera) return;
          if (hH.HM) return void this._processPointerMove(new OH.d(), HH);
          hH.pointerMovePredicate || (hH.pointerMovePredicate = HH => HH.aQ && HH.isVisible && HH.isReady() && HH.isEnabled() && (HH.enablePointerMoveEvents || hH.constantlyUpdateMeshUnderPointer || null !== HH._getActionManagerForTrigger()) && (!hH.cameraToUseForPointers || 0 !== (hH.cameraToUseForPointers.layerMask & HH.layerMask)));
          const IH = hH._registeredActions > 0 || hH.constantlyUpdateMeshUnderPointer ? this._pickMove(HH) : null;
          this._processPointerMove(IH, HH);
        }, this._onPointerDown = HH => {
          const IH = this._activePointerIds.indexOf(-1);
          if (-1 === IH ? this._activePointerIds.push(HH.pointerId) : this._activePointerIds[IH] = HH.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, KH.ExclusiveDoubleClickMode) for (let RH = 0; RH < this._delayedClicks.length; RH++) if (this._delayedClicks[RH]) if (HH.button === RH) {
            var EH;
            clearTimeout(null === (EH = this._delayedClicks[RH]) || void 0 === EH ? void 0 : EH.timeoutId);
          } else {
            const HH = this._delayedClicks[RH].clickInfo;
            this._doubleClickOccured = !1, HH.singleClick = !0, HH.ignore = !1;
            const IH = this._delayedClicks[RH].evt,
              EH = mI.b.POINTERTAP,
              TH = new mI.h(EH, IH, this._currentPickResult);
            hH.onPointerObservable.hasObservers() && hH.onPointerObservable.hasSpecificMask(EH) && hH.onPointerObservable.notifyObservers(TH, EH), this._delayedClicks[RH] = null;
          }
          if (this._updatePointerPosition(HH), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = HH.button), hH.preventDefaultOnPointerDown && RH && (HH.preventDefault(), RH.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, HH, mI.b.POINTERDOWN)) return;
          if (!hH.cameraToUseForPointers && !hH.activeCamera) return;
          let TH;
          this._pointerCaptures[HH.pointerId] = !0, hH.pointerDownPredicate || (hH.pointerDownPredicate = HH => HH.aQ && HH.isVisible && HH.isReady() && HH.isEnabled() && (!hH.cameraToUseForPointers || 0 !== (hH.cameraToUseForPointers.layerMask & HH.layerMask))), this._pickedDownMesh = null, TH = hH.skipPointerDownPicking || 0 === hH._registeredActions && !this._checkForPicking() && !hH.onPointerDown ? new OH.d() : hH.oJ(this._unTranslatedPointerX, this._unTranslatedPointerY, hH.pointerDownPredicate, hH.pointerDownFastCheck, hH.cameraToUseForPointers, hH.pointerDownTrianglePredicate), this._processPointerDown(TH, HH);
        }, this._onPointerUp = HH => {
          const IH = this._activePointerIds.indexOf(HH.pointerId);
          -1 !== IH && (this._activePointerIds[IH] = -1, this._activePointerIdsCount--, this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(HH), hH.preventDefaultOnPointerUp && RH && (HH.preventDefault(), RH.focus()), this._initClickEvent(hH.onPrePointerObservable, hH.onPointerObservable, HH, (IH, EH) => {
            if (hH.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !IH.ignore)) {
              if (this._checkPrePointerObservable(null, HH, mI.b.POINTERUP)) return this._swipeButtonPressed === HH.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void (0 === HH.buttons && (this._pointerCaptures[HH.pointerId] = !1));
              IH.hasSwiped || (IH.singleClick && hH.onPrePointerObservable.hasSpecificMask(mI.b.POINTERTAP) && this._checkPrePointerObservable(null, HH, mI.b.POINTERTAP) && (this._skipPointerTap = !0), IH.FT && hH.onPrePointerObservable.hasSpecificMask(mI.b.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, HH, mI.b.POINTERDOUBLETAP) && (this._skipPointerTap = !0));
            }
            this._pointerCaptures[HH.pointerId] ? (0 === HH.buttons && (this._pointerCaptures[HH.pointerId] = !1), (hH.cameraToUseForPointers || hH.activeCamera) && (hH.pointerUpPredicate || (hH.pointerUpPredicate = HH => HH.aQ && HH.isVisible && HH.isReady() && HH.isEnabled() && (!hH.cameraToUseForPointers || 0 !== (hH.cameraToUseForPointers.layerMask & HH.layerMask))), !this._meshPickProceed && (ZH && ZH.HasTriggers || this._checkForPicking() || hH.onPointerUp) && this._initActionManager(null, IH), EH || (EH = this._currentPickResult), this._processPointerUp(EH, HH, IH), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === HH.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === HH.button && (this._isSwiping = !1, this._swipeButtonPressed = -1);
          }));
        }, this._onKeyDown = HH => {
          const IH = cH.e.KEYDOWN;
          if (hH.onPreKeyboardObservable.hasObservers()) {
            const EH = new cH.h(IH, HH);
            if (hH.onPreKeyboardObservable.notifyObservers(EH, IH), EH.skipOnKeyboardObservable) return;
          }
          if (hH.onKeyboardObservable.hasObservers()) {
            const EH = new cH.j(IH, HH);
            hH.onKeyboardObservable.notifyObservers(EH, IH);
          }
          hH.actionManager && hH.actionManager.processTrigger(14, rH.CreateNewFromScene(hH, HH));
        }, this._onKeyUp = HH => {
          const IH = cH.e.KEYUP;
          if (hH.onPreKeyboardObservable.hasObservers()) {
            const EH = new cH.h(IH, HH);
            if (hH.onPreKeyboardObservable.notifyObservers(EH, IH), EH.skipOnKeyboardObservable) return;
          }
          if (hH.onKeyboardObservable.hasObservers()) {
            const EH = new cH.j(IH, HH);
            hH.onKeyboardObservable.notifyObservers(EH, IH);
          }
          hH.actionManager && hH.actionManager.processTrigger(15, rH.CreateNewFromScene(hH, HH));
        }, this._deviceSourceManager.onDeviceConnectedObservable.add(RH => {
          RH.deviceType === qH.Mouse ? RH.onInputChangedObservable.add(hH => {
            this._originMouseEvent = hH, hH.inputIndex === LH.LeftClick || hH.inputIndex === LH.MiddleClick || hH.inputIndex === LH.RightClick || hH.inputIndex === LH.BrowserBack || hH.inputIndex === LH.BrowserForward ? IH && 1 === RH.getInput(hH.inputIndex) ? this._onPointerDown(hH) : HH && 0 === RH.getInput(hH.inputIndex) && this._onPointerUp(hH) : EH && (hH.inputIndex === LH.Move ? this._onPointerMove(hH) : hH.inputIndex !== LH.MouseWheelX && hH.inputIndex !== LH.MouseWheelY && hH.inputIndex !== LH.MouseWheelZ || this._onPointerMove(hH));
          }) : RH.deviceType === qH.Touch ? RH.onInputChangedObservable.add(hH => {
            hH.inputIndex === LH.LeftClick && (IH && 1 === RH.getInput(hH.inputIndex) ? (this._onPointerDown(hH), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : HH && 0 === RH.getInput(hH.inputIndex) && (this._onPointerUp(hH), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), EH && hH.inputIndex === LH.Move && this._onPointerMove(hH);
          }) : RH.deviceType === qH.Keyboard && RH.onInputChangedObservable.add(HH => {
            "keydown" === HH.type ? this._onKeyDown(HH) : "keyup" === HH.type && this._onKeyUp(HH);
          });
        }), this._alreadyAttached = !0;
      }
      aF() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null);
      }
      setPointerOverMesh(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          EH = arguments.length > 2 ? arguments[2] : void 0,
          RH = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[IH] === HH && (!HH || !HH._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const hH = this._meshUnderPointerId[IH];
        let TH;
        hH && (TH = hH._getActionManagerForTrigger(10), TH && TH.processTrigger(10, new rH(hH, this._pointerX, this._pointerY, HH, RH, {
          pointerId: IH
        }))), HH ? (this._meshUnderPointerId[IH] = HH, this._pointerOverMesh = HH, TH = HH._getActionManagerForTrigger(9), TH && TH.processTrigger(9, new rH(HH, this._pointerX, this._pointerY, HH, RH, {
          pointerId: IH,
          pickResult: EH
        }))) : (delete this._meshUnderPointerId[IH], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: HH,
          pointerId: IH
        });
      }
      getPointerOverMesh() {
        return this.meshUnderPointer;
      }
      _invalidateMesh(HH) {
        this._pointerOverMesh === HH && (this._pointerOverMesh = null), this._pickedDownMesh === HH && (this._pickedDownMesh = null), this._pickedUpMesh === HH && (this._pickedUpMesh = null);
        for (const IH in this._meshUnderPointerId) this._meshUnderPointerId[IH] === HH && delete this._meshUnderPointerId[IH];
      }
    }
    KH.DragMovementThreshold = 10, KH.LongPressDelay = 500, KH.DoubleClickDelay = 300, KH.ExclusiveDoubleClickMode = !1;
    var wH = EH(22346),
      zH = EH(21817),
      tH = EH(21984),
      jI = EH(22355),
      vH = EH(21867),
      bH = EH(22253),
      SH = EH(21776);
    class xH {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.HM = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1;
      }
    }
    var HI,
      II,
      EI,
      RI,
      hI,
      TI,
      sI,
      eI,
      GI,
      AI,
      VI,
      YI,
      QI,
      JI,
      OI,
      rI,
      FI,
      MI,
      NI,
      iE,
      DI,
      PI,
      XI,
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
      nE,
      pE,
      dE,
      uE,
      lE,
      KE,
      wE,
      zE,
      tE,
      jR,
      vE,
      bE,
      SE,
      xE,
      HR,
      IR,
      ER = EH(21832),
      RR = EH(21808);
    const hR = new YH.y(),
      TR = new YH.y();
    var sR;
    !function (HH) {
      HH[HH.BackwardCompatible = 0] = "BackwardCompatible", HH[HH.Intermediate = 1] = "Intermediate", HH[HH.Aggressive = 2] = "Aggressive";
    }(sR || (sR = {}));
    class eR {
      static DefaultMaterialFactory(HH) {
        throw (0, XH.n)("Gh");
      }
      static CollisionCoordinatorFactory() {
        throw (0, XH.n)("DefaultCollisionCoordinator");
      }
      get clearColor() {
        return this._clearColor;
      }
      set clearColor(HH) {
        HH !== this._clearColor && (this._clearColor = HH, this.onClearColorChangedObservable.notifyObservers(this._clearColor));
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration;
      }
      get performancePriority() {
        return this._performancePriority;
      }
      set performancePriority(HH) {
        if (HH !== this._performancePriority) {
          switch (this._performancePriority = HH, HH) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.HM = !1, this.nF = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.HM = !0, this.nF = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.HM = !0, this.nF = !1;
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(HH);
        }
      }
      set forceWireframe(HH) {
        this._forceWireframe !== HH && (this._forceWireframe = HH, this.markAllMaterialsAsDirty(16));
      }
      get forceWireframe() {
        return this._forceWireframe;
      }
      set skipFrustumClipping(HH) {
        this._skipFrustumClipping !== HH && (this._skipFrustumClipping = HH);
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping;
      }
      set forcePointsCloud(HH) {
        this._forcePointsCloud !== HH && (this._forcePointsCloud = HH, this.markAllMaterialsAsDirty(16));
      }
      get forcePointsCloud() {
        return this._forcePointsCloud;
      }
      get environmentTexture() {
        return this._environmentTexture;
      }
      set environmentTexture(HH) {
        this._environmentTexture !== HH && (this._environmentTexture = HH, this.onEnvironmentTextureChangedObservable.notifyObservers(HH), this.markAllMaterialsAsDirty(1));
      }
      getNodes() {
        let HH = [];
        HH = HH.concat(this.meshes), HH = HH.concat(this.lights), HH = HH.concat(this.cameras), HH = HH.concat(this.transformNodes);
        for (const IH of this.skeletons) HH = HH.concat(IH.bones);
        return HH;
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride;
      }
      set animationPropertiesOverride(HH) {
        this._animationPropertiesOverride = HH;
      }
      set onDispose(HH) {
        this._onDisposeObserver && this.AM.remove(this._onDisposeObserver), this._onDisposeObserver = this.AM.add(HH);
      }
      set beforeRender(HH) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), HH && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(HH));
      }
      set afterRender(HH) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), HH && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(HH));
      }
      set beforeCameraRender(HH) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(HH);
      }
      set afterCameraRender(HH) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(HH);
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate;
      }
      set pointerDownPredicate(HH) {
        this._pointerPickingConfiguration.pointerDownPredicate = HH;
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate;
      }
      set pointerUpPredicate(HH) {
        this._pointerPickingConfiguration.pointerUpPredicate = HH;
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate;
      }
      set pointerMovePredicate(HH) {
        this._pointerPickingConfiguration.pointerMovePredicate = HH;
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck;
      }
      set pointerDownFastCheck(HH) {
        this._pointerPickingConfiguration.pointerDownFastCheck = HH;
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck;
      }
      set pointerUpFastCheck(HH) {
        this._pointerPickingConfiguration.pointerUpFastCheck = HH;
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck;
      }
      set pointerMoveFastCheck(HH) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = HH;
      }
      get HM() {
        return this._pointerPickingConfiguration.HM;
      }
      set HM(HH) {
        this._pointerPickingConfiguration.HM = HH;
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking;
      }
      set skipPointerDownPicking(HH) {
        this._pointerPickingConfiguration.skipPointerDownPicking = HH;
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking;
      }
      set skipPointerUpPicking(HH) {
        this._pointerPickingConfiguration.skipPointerUpPicking = HH;
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer;
      }
      static get DragMovementThreshold() {
        return KH.DragMovementThreshold;
      }
      static set DragMovementThreshold(HH) {
        KH.DragMovementThreshold = HH;
      }
      static get LongPressDelay() {
        return KH.LongPressDelay;
      }
      static set LongPressDelay(HH) {
        KH.LongPressDelay = HH;
      }
      static get DoubleClickDelay() {
        return KH.DoubleClickDelay;
      }
      static set DoubleClickDelay(HH) {
        KH.DoubleClickDelay = HH;
      }
      static get ExclusiveDoubleClickMode() {
        return KH.ExclusiveDoubleClickMode;
      }
      static set ExclusiveDoubleClickMode(HH) {
        KH.ExclusiveDoubleClickMode = HH;
      }
      get _eyePosition() {
        var HH, IH, EH;
        return null !== (HH = null !== (IH = this._forcedViewPosition) && void 0 !== IH ? IH : null === (EH = this.activeCamera) || void 0 === EH ? void 0 : EH.globalPosition) && void 0 !== HH ? HH : YH.x.ZeroReadOnly;
      }
      bindEyePosition(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const RH = this._eyePosition,
          hH = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          TH = this.floatingOriginOffset,
          sH = hR.set(RH.x, RH.y, RH.z, hH ? -1 : 1),
          eH = sH.subtractFromFloatsToRef(TH.x, TH.y, TH.z, 0, TR);
        return HH && (EH ? HH.setFloat3(IH, eH.x, eH.y, eH.z) : HH.setVector4(IH, eH)), sH;
      }
      finalizeSceneUbo() {
        const HH = this.getSceneUniformBuffer(),
          IH = this.bindEyePosition(null),
          EH = this.floatingOriginOffset;
        return HH.updateFloat4("vEyePosition", IH.x - EH.x, IH.y - EH.y, IH.z - EH.z, IH.w), HH.update(), HH;
      }
      set useRightHandedSystem(HH) {
        this._useRightHandedSystem !== HH && (this._useRightHandedSystem = HH, this.markAllMaterialsAsDirty(16));
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem;
      }
      setStepId(HH) {
        this._currentStepId = HH;
      }
      getStepId() {
        return this._currentStepId;
      }
      getInternalStep() {
        return this._currentInternalStep;
      }
      set fogEnabled(HH) {
        this._fogEnabled !== HH && (this._fogEnabled = HH, this.markAllMaterialsAsDirty(16));
      }
      get fogEnabled() {
        return this._fogEnabled;
      }
      set fogMode(HH) {
        this._fogMode !== HH && (this._fogMode = HH, this.markAllMaterialsAsDirty(16));
      }
      get fogMode() {
        return this._fogMode;
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled;
      }
      set shadowsEnabled(HH) {
        this._shadowsEnabled !== HH && (this._shadowsEnabled = HH, this.markAllMaterialsAsDirty(2));
      }
      get shadowsEnabled() {
        return this._shadowsEnabled;
      }
      set lightsEnabled(HH) {
        this._lightsEnabled !== HH && (this._lightsEnabled = HH, this.markAllMaterialsAsDirty(2));
      }
      get lightsEnabled() {
        return this._lightsEnabled;
      }
      get activeCameras() {
        return this._activeCameras;
      }
      set activeCameras(HH) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), HH && (this._unObserveActiveCameras = (0, SH.e)(HH, () => {
          this.onActiveCamerasChanged.notifyObservers(this);
        })), this._activeCameras = HH;
      }
      get activeCamera() {
        return this._activeCamera;
      }
      set activeCamera(HH) {
        HH !== this._activeCamera && (this._activeCamera = HH, this.onActiveCameraChanged.notifyObservers(this));
      }
      get _hasDefaultMaterial() {
        return eR.DefaultMaterialFactory !== eR._OriginalDefaultMaterialFactory;
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = eR.DefaultMaterialFactory(this)), this._defaultMaterial;
      }
      set defaultMaterial(HH) {
        this._defaultMaterial = HH;
      }
      set texturesEnabled(HH) {
        this._texturesEnabled !== HH && (this._texturesEnabled = HH, this.markAllMaterialsAsDirty(1));
      }
      get texturesEnabled() {
        return this._texturesEnabled;
      }
      get frameGraph() {
        return this._frameGraph;
      }
      set frameGraph(HH) {
        if (this._frameGraph) return this._frameGraph = HH, void (HH || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = HH, HH && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null);
      }
      set skeletonsEnabled(HH) {
        this._skeletonsEnabled !== HH && (this._skeletonsEnabled = HH, this.markAllMaterialsAsDirty(8));
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled;
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = eR.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator;
      }
      get renderingManager() {
        return this._renderingManager;
      }
      get nr() {
        return this._frustumPlanes;
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const HH of this._transientComponents) HH.register();
          this._transientComponents.length = 0;
        }
      }
      Wr(HH) {
        this._components.push(HH), this._transientComponents.push(HH);
        const IH = HH;
        IH.addFromContainer && IH.serialize && this._serializableComponents.push(IH);
      }
      _getComponent(HH) {
        for (const IH of this._components) if (IH.name === HH) return IH;
        return null;
      }
      get uniqueId() {
        return this._uniqueId;
      }
      constructor(HH, IH) {
        this._inputManager = new KH(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.nF = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new zH.d(.2, .2, .3, 1), this.onClearColorChangedObservable = new eH.e(), this.ambientColor = new zH.b(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new eH.e(), this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.fF = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.Ri = null, this.fI = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.AM = new eH.e(), this._onDisposeObserver = null, this.onBeforeRenderObservable = new eH.e(), this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new eH.e(), this.onAfterRenderCameraObservable = new eH.e(), this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new eH.e(), this.onAfterAnimationsObservable = new eH.e(), this.onBeforeDrawPhaseObservable = new eH.e(), this.onAfterDrawPhaseObservable = new eH.e(), this.onReadyObservable = new eH.e(), this.onBeforeCameraRenderObservable = new eH.e(), this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new eH.e(), this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new eH.e(), this.onAfterActiveMeshesEvaluationObservable = new eH.e(), this.onBeforeParticlesRenderingObservable = new eH.e(), this.onAfterParticlesRenderingObservable = new eH.e(), this.onDataLoadedObservable = new eH.e(), this.onNewCameraAddedObservable = new eH.e(), this.onCameraRemovedObservable = new eH.e(), this.onNewLightAddedObservable = new eH.e(), this.onLightRemovedObservable = new eH.e(), this.onNewGeometryAddedObservable = new eH.e(), this.onGeometryRemovedObservable = new eH.e(), this.onNewTransformNodeAddedObservable = new eH.e(), this.onTransformNodeRemovedObservable = new eH.e(), this.onNewMeshAddedObservable = new eH.e(), this.onMeshRemovedObservable = new eH.e(), this.onNewSkeletonAddedObservable = new eH.e(), this.onSkeletonRemovedObservable = new eH.e(), this.onNewParticleSystemAddedObservable = new eH.e(), this.onParticleSystemRemovedObservable = new eH.e(), this.onNewAnimationGroupAddedObservable = new eH.e(), this.onAnimationGroupRemovedObservable = new eH.e(), this.onNewMaterialAddedObservable = new eH.e(), this.onNewMultiMaterialAddedObservable = new eH.e(), this.onMaterialRemovedObservable = new eH.e(), this.onMultiMaterialRemovedObservable = new eH.e(), this.onNewTextureAddedObservable = new eH.e(), this.onTextureRemovedObservable = new eH.e(), this.onNewFrameGraphAddedObservable = new eH.e(), this.onFrameGraphRemovedObservable = new eH.e(), this.onNewObjectRendererAddedObservable = new eH.e(), this.onObjectRendererRemovedObservable = new eH.e(), this.onNewPostProcessAddedObservable = new eH.e(), this.onPostProcessRemovedObservable = new eH.e(), this.onNewEffectLayerAddedObservable = new eH.e(), this.onEffectLayerRemovedObservable = new eH.e(), this.onBeforeRenderTargetsRenderObservable = new eH.e(), this.onAfterRenderTargetsRenderObservable = new eH.e(), this.onBeforeStepObservable = new eH.e(), this.onAfterStepObservable = new eH.e(), this.onActiveCameraChanged = new eH.e(), this.onActiveCamerasChanged = new eH.e(), this.onBeforeRenderingGroupObservable = new eH.e(), this.onAfterRenderingGroupObservable = new eH.e(), this.onMeshImportedObservable = new eH.e(), this.onAnimationFileImportedObservable = new eH.e(), this.onEnvironmentTextureChangedObservable = new eH.e(), this.onMeshUnderPointerUpdatedObservable = new eH.e(), this._registeredForLateAnimationBindings = new GH.c(256), this._pointerPickingConfiguration = new xH(), this.onPrePointerObservable = new eH.e(), this.onPointerObservable = new eH.e(), this.onPreKeyboardObservable = new eH.e(), this.onKeyboardObservable = new eH.e(), this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = eR.FOGMODE_NONE, this.fogColor = new zH.b(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.physicsEnabled = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new YH.x(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new GH.c(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new wH.d(), this._activeIndices = new wH.d(), this._activeParticles = new wH.d(), this._activeBones = new wH.d(), this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array(), this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new GH.e(256), this._processedMaterials = new GH.e(256), this._renderTargets = new GH.c(256), this._materialsRenderTargets = new GH.c(256), this._activeParticleSystems = new GH.e(256), this._activeSkeletons = new GH.c(32), this._softwareSkinnedMeshes = new GH.c(32), this._activeAnimatables = new Array(), this._transformMatrix = YH.d.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = iI.f.Create(), this._beforeClearStage = iI.f.Create(), this._beforeRenderTargetClearStage = iI.f.Create(), this._gatherRenderTargetsStage = iI.f.Create(), this._gatherActiveCameraRenderTargetsStage = iI.f.Create(), this._isReadyForMeshStage = iI.f.Create(), this._beforeEvaluateActiveMeshStage = iI.f.Create(), this._evaluateSubMeshStage = iI.f.Create(), this._preActiveMeshStage = iI.f.Create(), this._cameraDrawRenderTargetStage = iI.f.Create(), this._beforeCameraDrawStage = iI.f.Create(), this._beforeRenderTargetDrawStage = iI.f.Create(), this._beforeRenderingGroupDrawStage = iI.f.Create(), this._beforeRenderingMeshStage = iI.f.Create(), this._afterRenderingMeshStage = iI.f.Create(), this._afterRenderingGroupDrawStage = iI.f.Create(), this._afterCameraDrawStage = iI.f.Create(), this._afterCameraPostProcessStage = iI.f.Create(), this._afterRenderTargetDrawStage = iI.f.Create(), this._afterRenderTargetPostProcessStage = iI.f.Create(), this._afterRenderStage = iI.f.Create(), this._pointerMoveStage = iI.f.Create(), this._pointerDownStage = iI.f.Create(), this._pointerUpStage = iI.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new eH.e(), this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const EH = (0, RH.b)({
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455
        }, IH);
        this.defaultCameraLayerMask = EH.defaultCameraLayerMask, this.defaultRenderableLayerMask = EH.defaultRenderableLayerMask, HH = this._engine = HH || PH.e.LastCreatedEngine, EH.virtual ? HH._virtualScenes.push(this) : (PH.e._LastCreatedScene = this, HH.scenes.push(this)), (HH.getCreationOptions().useLargeWorldRendering || null !== IH && void 0 !== IH && IH.useFloatingOrigin) && ((0, MH.f)(), this._floatingOriginScene = this, MH.e.kh = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new NH.e(this), FH.d && (this.postProcessManager = new FH.d(this)), (0, DH.m)() && this.attachControl(), this._createUbo(), QH.b && (this._imageProcessingConfiguration = new QH.b()), this.setDefaultCandidateProviders(), EH.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = EH.useMaterialMeshMap, this.useClonedMeshMap = EH.useClonedMeshMap, IH && IH.virtual || HH.onNewSceneAddedObservable.notifyObservers(this);
      }
      getClassName() {
        return "Scene";
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates;
      }
      _getDefaultSubMeshCandidates(HH) {
        return this._defaultSubMeshCandidates.data = HH.BJ, this._defaultSubMeshCandidates.length = HH.BJ.length, this._defaultSubMeshCandidates;
      }
      setDefaultCandidateProviders() {
        this.ar = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = HH => this._getDefaultSubMeshCandidates(HH), this.getIntersectingSubMeshCandidates = (HH, IH) => this._getDefaultSubMeshCandidates(HH), this.getCollidingSubMeshCandidates = (HH, IH) => this._getDefaultSubMeshCandidates(HH);
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer;
      }
      get pointerX() {
        return this._inputManager.pointerX;
      }
      set pointerX(HH) {
        this._inputManager.pointerX = HH;
      }
      get pointerY() {
        return this._inputManager.pointerY;
      }
      set pointerY(HH) {
        this._inputManager.pointerY = HH;
      }
      getCachedMaterial() {
        return this._cachedMaterial;
      }
      getCachedEffect() {
        return this._cachedEffect;
      }
      getCachedVisibility() {
        return this._cachedVisibility;
      }
      isCachedMaterialInvalid(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== IH || this._cachedMaterial !== HH || this._cachedVisibility !== EH;
      }
      getEngine() {
        return this._engine;
      }
      getTotalVertices() {
        return this._totalVertices.current;
      }
      get totalVerticesPerfCounter() {
        return this._totalVertices;
      }
      getActiveIndices() {
        return this._activeIndices.current;
      }
      get totalActiveIndicesPerfCounter() {
        return this._activeIndices;
      }
      getActiveParticles() {
        return this._activeParticles.current;
      }
      get activeParticlesPerfCounter() {
        return this._activeParticles;
      }
      getActiveBones() {
        return this._activeBones.current;
      }
      get activeBonesPerfCounter() {
        return this._activeBones;
      }
      getActiveMeshes() {
        return this._activeMeshes;
      }
      getAnimationRatio() {
        return void 0 !== this._animationRatio ? this._animationRatio : 1;
      }
      getRenderId() {
        return this._renderId;
      }
      getFrameId() {
        return this._frameId;
      }
      incrementRenderId() {
        this._renderId++;
      }
      _createUbo() {
        this.setSceneUniformBuffer(this.createSceneUniformBuffer());
      }
      simulatePointerMove(HH, IH) {
        return this._inputManager.simulatePointerMove(HH, IH), this;
      }
      simulatePointerDown(HH, IH) {
        return this._inputManager.simulatePointerDown(HH, IH), this;
      }
      simulatePointerUp(HH, IH, EH) {
        return this._inputManager.simulatePointerUp(HH, IH, EH), this;
      }
      isPointerCaptured() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(HH);
      }
      attachControl() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          EH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(HH, IH, EH);
      }
      aF() {
        this._inputManager.aF();
      }
      isReady() {
        var HH, IH, EH;
        let RH,
          hH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const TH = this.getEngine(),
          sH = TH.currentRenderPassId;
        TH.currentRenderPassId = null !== (HH = null === (IH = this.activeCamera) || void 0 === IH ? void 0 : IH.renderPassId) && void 0 !== HH ? HH : sH;
        let eH = !0;
        for (this._pendingData.length > 0 && (eH = !1), null === (EH = this.prePassRenderer) || void 0 === EH || EH.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && eH && (eH = this.depthPeelingRenderer.isReady()), hH && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), RH = 0; RH < this.meshes.length; RH++) {
          const HH = this.meshes[RH];
          if (!HH.BJ || 0 === HH.BJ.length) continue;
          if (!HH.isReady(!0)) {
            eH = !1;
            continue;
          }
          const IH = HH.hasThinInstances || "InstancedMesh" === HH.getClassName() || "InstancedLinesMesh" === HH.getClassName() || TH.getCaps().instancedArrays && HH.instances.length > 0;
          for (const RH of this._isReadyForMeshStage) RH.action(HH, IH) || (eH = !1);
          if (!hH) continue;
          const EH = HH.material || this.defaultMaterial;
          if (EH) if (EH._storeEffectOnSubMeshes) for (const RH of HH.BJ) {
            const HH = RH.sI();
            HH && HH.hasRenderTargetTextures && null != HH.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(HH) && (this._processedMaterials.push(HH), this._materialsRenderTargets.concatWithNoDuplicate(HH.getRenderTargetTextures()));
          } else EH.hasRenderTargetTextures && null != EH.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(EH) && (this._processedMaterials.push(EH), this._materialsRenderTargets.concatWithNoDuplicate(EH.getRenderTargetTextures()));
        }
        if (hH) {
          for (RH = 0; RH < this._materialsRenderTargets.length; ++RH) {
            this._materialsRenderTargets.data[RH].isReadyForRendering() || (eH = !1);
          }
          for (RH = 0; RH < this.customRenderTargets.length; ++RH) {
            this.customRenderTargets[RH].isReadyForRendering() || (eH = !1);
          }
        }
        for (RH = 0; RH < this.geometries.length; RH++) {
          2 === this.geometries[RH].delayLoadState && (eH = !1);
        }
        if (this.activeCameras && this.activeCameras.length > 0) for (const GH of this.activeCameras) GH.isReady(!0) || (eH = !1);else this.activeCamera && (this.activeCamera.isReady(!0) || (eH = !1));
        for (const GH of this.fF) GH.isReady() || (eH = !1);
        if (this.proceduralTexturesEnabled) for (const GH of this.proceduralTextures) GH.isReady() || (eH = !1);
        if (this.fI) for (const GH of this.fI) GH.isReady() || (eH = !1);
        if (this.effectLayers) for (const GH of this.effectLayers) GH.isLayerReady() || (eH = !1);
        for (const GH of this._isReadyChecks) GH.isReady() || (eH = !1);
        return TH.areAllEffectsReady() || (eH = !1), TH.currentRenderPassId = sH, eH;
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null;
      }
      registerBeforeRender(HH) {
        this.onBeforeRenderObservable.add(HH);
      }
      unregisterBeforeRender(HH) {
        this.onBeforeRenderObservable.removeCallback(HH);
      }
      registerAfterRender(HH) {
        this.onAfterRenderObservable.add(HH);
      }
      unregisterAfterRender(HH) {
        this.onAfterRenderObservable.removeCallback(HH);
      }
      _executeOnceBeforeRender(HH) {
        const IH = () => {
          HH(), setTimeout(() => {
            this.unregisterBeforeRender(IH);
          });
        };
        this.registerBeforeRender(IH);
      }
      executeOnceBeforeRender(HH, IH) {
        void 0 !== IH ? setTimeout(() => {
          this._executeOnceBeforeRender(HH);
        }, IH) : this._executeOnceBeforeRender(HH);
      }
      addPendingData(HH) {
        this._pendingData.push(HH);
      }
      removePendingData(HH) {
        const IH = this.isLoading,
          EH = this._pendingData.indexOf(HH);
        -1 !== EH && this._pendingData.splice(EH, 1), IH && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this);
      }
      getWaitingItemsCount() {
        return this._pendingData.length;
      }
      get isLoading() {
        return this._pendingData.length > 0;
      }
      addIsReadyCheck(HH) {
        -1 === this._isReadyChecks.indexOf(HH) && this._isReadyChecks.push(HH);
      }
      removeIsReadyCheck(HH) {
        const IH = this._isReadyChecks.indexOf(HH);
        -1 !== IH && this._isReadyChecks.splice(IH, 1);
      }
      executeWhenReady(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(HH), null === this._executeWhenReadyTimeoutId && this._checkIsReady(IH);
      }
      async whenReadyAsync() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise(IH => {
          this.executeWhenReady(() => {
            IH();
          }, HH);
        });
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null;
      }
      _checkIsReady() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = sH.d.Now;else if (this.onReadyTimeoutDuration > 0 && sH.d.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(HH)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout(() => {
          this.incrementRenderId(), this._checkIsReady(HH);
        }, 100);
      }
      get animatables() {
        return this._activeAnimatables;
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = sH.d.Now;
      }
      getViewMatrix() {
        return this._viewMatrix;
      }
      getProjectionMatrix() {
        return this._projectionMatrix;
      }
      getInverseProjectionMatrix() {
        return this._inverseProjectionMatrix;
      }
      getTransformMatrix() {
        return this._transformMatrix;
      }
      setTransformMatrix(HH, IH, EH, RH) {
        this._multiviewSceneUboIsActive = !!(EH && RH && this._multiviewSceneUbo), this._viewUpdateFlag === HH.updateFlag && this._projectionUpdateFlag === IH.updateFlag || (this._viewUpdateFlag = HH.updateFlag, this._projectionUpdateFlag = IH.updateFlag, this._viewMatrix = HH, this._projectionMatrix = IH, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new YH.d()), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? tH.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = tH.d.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(EH, RH) : this._sceneUbo.useUbo && (this._sceneUbo.uN("viewProjection", this._transformMatrix), this._sceneUbo.uN("view", this._viewMatrix), this._sceneUbo.uN("projection", this._projectionMatrix), this._sceneUbo.uN("inverseProjection", this._inverseProjectionMatrix)));
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo;
      }
      createSceneUniformBuffer(HH, IH) {
        const EH = "boolean" === typeof IH ? IH : null === IH || void 0 === IH ? void 0 : IH.trackUBOsInFrame,
          RH = new JH.e(this._engine, void 0, !1, null !== HH && void 0 !== HH ? HH : "Th", void 0, EH);
        return RH.addUniform("viewProjection", 16), RH.addUniform("view", 16), RH.addUniform("projection", 16), RH.addUniform("vEyePosition", 4), RH.addUniform("inverseProjection", 16), RH;
      }
      setSceneUniformBuffer(HH) {
        this._sceneUbo = HH, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1;
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene;
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : YH.x.ZeroReadOnly;
      }
      getUniqueId() {
        return jI.b.UniqueId;
      }
      aO(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(HH), HH._resyncLightSources(), HH.parent || HH._addToSceneRootNodes(), TH.e.SetImmediate(() => {
          this.onNewMeshAddedObservable.notifyObservers(HH);
        }), IH)) {
          const IH = HH.UY();
          for (const HH of IH) this.aO(HH);
        }
      }
      yO(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const EH = this.meshes.indexOf(HH);
        if (-1 !== EH && (this.meshes.splice(EH, 1), HH.parent || HH._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(HH), this.onMeshRemovedObservable.notifyObservers(HH), IH) {
          const IH = HH.UY();
          for (const HH of IH) this.yO(HH);
        }
        return EH;
      }
      addTransformNode(HH) {
        this._blockEntityCollection || HH.kh() === this && -1 !== HH._indexInSceneTransformNodesArray || (HH._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(HH), HH.parent || HH._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(HH));
      }
      removeTransformNode(HH) {
        const IH = HH._indexInSceneTransformNodesArray;
        if (-1 !== IH) {
          if (IH !== this.transformNodes.length - 1) {
            const HH = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[IH] = HH, HH._indexInSceneTransformNodesArray = IH;
          }
          HH._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), HH.parent || HH._removeFromSceneRootNodes();
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(HH), IH;
      }
      removeSkeleton(HH) {
        const IH = this.skeletons.indexOf(HH);
        return -1 !== IH && (this.skeletons.splice(IH, 1), this.onSkeletonRemovedObservable.notifyObservers(HH), this._executeActiveContainerCleanup(this._activeSkeletons)), IH;
      }
      removeMorphTargetManager(HH) {
        const IH = this.morphTargetManagers.indexOf(HH);
        return -1 !== IH && this.morphTargetManagers.splice(IH, 1), IH;
      }
      removeLight(HH) {
        const IH = this.lights.indexOf(HH);
        if (-1 !== IH) {
          for (const IH of this.meshes) IH._removeLightSource(HH, !1);
          this.lights.splice(IH, 1), this.sortLightsByPriority(), HH.parent || HH._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(HH);
        }
        return IH;
      }
      removeCamera(HH) {
        const IH = this.cameras.indexOf(HH);
        if (-1 !== IH && (this.cameras.splice(IH, 1), HH.parent || HH._removeFromSceneRootNodes()), this.activeCameras) {
          const IH = this.activeCameras.indexOf(HH);
          -1 !== IH && this.activeCameras.splice(IH, 1);
        }
        return this.activeCamera === HH && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(HH), IH;
      }
      removeParticleSystem(HH) {
        const IH = this.fF.indexOf(HH);
        return -1 !== IH && (this.fF.splice(IH, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(HH), IH;
      }
      removeAnimation(HH) {
        const IH = this.animations.indexOf(HH);
        return -1 !== IH && this.animations.splice(IH, 1), IH;
      }
      stopAnimation(HH, IH, EH) {}
      removeAnimationGroup(HH) {
        const IH = this.animationGroups.indexOf(HH);
        return -1 !== IH && this.animationGroups.splice(IH, 1), this.onAnimationGroupRemovedObservable.notifyObservers(HH), IH;
      }
      removeMultiMaterial(HH) {
        const IH = this.multiMaterials.indexOf(HH);
        return -1 !== IH && this.multiMaterials.splice(IH, 1), this.onMultiMaterialRemovedObservable.notifyObservers(HH), IH;
      }
      removeMaterial(HH) {
        const IH = HH._indexInSceneMaterialArray;
        if (-1 !== IH && IH < this.materials.length) {
          if (IH !== this.materials.length - 1) {
            const HH = this.materials[this.materials.length - 1];
            this.materials[IH] = HH, HH._indexInSceneMaterialArray = IH;
          }
          HH._indexInSceneMaterialArray = -1, this.materials.pop();
        }
        return this.onMaterialRemovedObservable.notifyObservers(HH), IH;
      }
      removeActionManager(HH) {
        const IH = this.actionManagers.indexOf(HH);
        return -1 !== IH && this.actionManagers.splice(IH, 1), IH;
      }
      removeTexture(HH) {
        const IH = this.textures.indexOf(HH);
        return -1 !== IH && this.textures.splice(IH, 1), this.onTextureRemovedObservable.notifyObservers(HH), IH;
      }
      removeFrameGraph(HH) {
        const IH = this.frameGraphs.indexOf(HH);
        return -1 !== IH && this.frameGraphs.splice(IH, 1), this.onFrameGraphRemovedObservable.notifyObservers(HH), IH;
      }
      removeObjectRenderer(HH) {
        const IH = this.objectRenderers.indexOf(HH);
        return -1 !== IH && this.objectRenderers.splice(IH, 1), this.onObjectRendererRemovedObservable.notifyObservers(HH), IH;
      }
      removePostProcess(HH) {
        const IH = this.postProcesses.indexOf(HH);
        return -1 !== IH && this.postProcesses.splice(IH, 1), this.onPostProcessRemovedObservable.notifyObservers(HH), IH;
      }
      removeEffectLayer(HH) {
        const IH = this.effectLayers.indexOf(HH);
        return -1 !== IH && this.effectLayers.splice(IH, 1), this.onEffectLayerRemovedObservable.notifyObservers(HH), IH;
      }
      addLight(HH) {
        if (!this._blockEntityCollection) {
          this.lights.push(HH), this.sortLightsByPriority(), HH.parent || HH._addToSceneRootNodes();
          for (const IH of this.meshes) -1 === IH.lightSources.indexOf(HH) && (IH.lightSources.push(HH), IH._resyncLightSources());
          TH.e.SetImmediate(() => {
            this.onNewLightAddedObservable.notifyObservers(HH);
          });
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(bH.b.CompareLightsPriority);
      }
      addCamera(HH) {
        this._blockEntityCollection || (this.cameras.push(HH), TH.e.SetImmediate(() => {
          this.onNewCameraAddedObservable.notifyObservers(HH);
        }), HH.parent || HH._addToSceneRootNodes());
      }
      addSkeleton(HH) {
        this._blockEntityCollection || (this.skeletons.push(HH), TH.e.SetImmediate(() => {
          this.onNewSkeletonAddedObservable.notifyObservers(HH);
        }));
      }
      addParticleSystem(HH) {
        this._blockEntityCollection || (this.fF.push(HH), TH.e.SetImmediate(() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(HH);
        }));
      }
      addAnimation(HH) {
        this._blockEntityCollection || this.animations.push(HH);
      }
      addAnimationGroup(HH) {
        this._blockEntityCollection || (this.animationGroups.push(HH), TH.e.SetImmediate(() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(HH);
        }));
      }
      addMultiMaterial(HH) {
        this._blockEntityCollection || (this.multiMaterials.push(HH), TH.e.SetImmediate(() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(HH);
        }));
      }
      addMaterial(HH) {
        this._blockEntityCollection || HH.kh() === this && -1 !== HH._indexInSceneMaterialArray || (HH._indexInSceneMaterialArray = this.materials.length, this.materials.push(HH), TH.e.SetImmediate(() => {
          this.onNewMaterialAddedObservable.notifyObservers(HH);
        }));
      }
      addMorphTargetManager(HH) {
        this._blockEntityCollection || this.morphTargetManagers.push(HH);
      }
      addGeometry(HH) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[HH.uniqueId] = this.geometries.length), this.geometries.push(HH));
      }
      addActionManager(HH) {
        this.actionManagers.push(HH);
      }
      addTexture(HH) {
        this._blockEntityCollection || (this.textures.push(HH), this.onNewTextureAddedObservable.notifyObservers(HH));
      }
      addFrameGraph(HH) {
        this.frameGraphs.push(HH), TH.e.SetImmediate(() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(HH);
        });
      }
      addObjectRenderer(HH) {
        this.objectRenderers.push(HH), TH.e.SetImmediate(() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(HH);
        });
      }
      addPostProcess(HH) {
        this._blockEntityCollection || (this.postProcesses.push(HH), TH.e.SetImmediate(() => {
          this.onNewPostProcessAddedObservable.notifyObservers(HH);
        }));
      }
      addEffectLayer(HH) {
        this._blockEntityCollection || (this.effectLayers.push(HH), TH.e.SetImmediate(() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(HH);
        }));
      }
      switchActiveCamera(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.aF(), this.activeCamera = HH, IH && HH.attachControl());
      }
      setActiveCameraById(HH) {
        const IH = this.getCameraById(HH);
        return IH ? (this.activeCamera = IH, IH) : null;
      }
      setActiveCameraByName(HH) {
        const IH = this.getCameraByName(HH);
        return IH ? (this.activeCamera = IH, IH) : null;
      }
      getAnimationGroupByName(HH) {
        for (let IH = 0; IH < this.animationGroups.length; IH++) if (this.animationGroups[IH].name === HH) return this.animationGroups[IH];
        return null;
      }
      _getMaterial(HH, IH) {
        for (let EH = 0; EH < this.materials.length; EH++) {
          const HH = this.materials[EH];
          if (IH(HH)) return HH;
        }
        if (HH) for (let EH = 0; EH < this.multiMaterials.length; EH++) {
          const HH = this.multiMaterials[EH];
          if (IH(HH)) return HH;
        }
        return null;
      }
      getMaterialByUniqueID(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(HH, IH);
      }
      getMaterialByUniqueId(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(IH, IH => IH.uniqueId === HH);
      }
      getMaterialById(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(IH, IH => IH.id === HH);
      }
      getMaterialByName(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(IH, IH => IH.name === HH);
      }
      getLastMaterialById(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let EH = this.materials.length - 1; EH >= 0; EH--) if (this.materials[EH].id === HH) return this.materials[EH];
        if (IH) for (let EH = this.multiMaterials.length - 1; EH >= 0; EH--) if (this.multiMaterials[EH].id === HH) return this.multiMaterials[EH];
        return null;
      }
      getTextureByUniqueId(HH) {
        for (let IH = 0; IH < this.textures.length; IH++) if (this.textures[IH].uniqueId === HH) return this.textures[IH];
        return null;
      }
      getTextureByName(HH) {
        for (let IH = 0; IH < this.textures.length; IH++) if (this.textures[IH].name === HH) return this.textures[IH];
        return null;
      }
      getCameraById(HH) {
        for (let IH = 0; IH < this.cameras.length; IH++) if (this.cameras[IH].id === HH) return this.cameras[IH];
        return null;
      }
      getCameraByUniqueId(HH) {
        for (let IH = 0; IH < this.cameras.length; IH++) if (this.cameras[IH].uniqueId === HH) return this.cameras[IH];
        return null;
      }
      getCameraByName(HH) {
        for (let IH = 0; IH < this.cameras.length; IH++) if (this.cameras[IH].name === HH) return this.cameras[IH];
        return null;
      }
      getBoneById(HH) {
        for (let IH = 0; IH < this.skeletons.length; IH++) {
          const EH = this.skeletons[IH];
          for (let IH = 0; IH < EH.bones.length; IH++) if (EH.bones[IH].id === HH) return EH.bones[IH];
        }
        return null;
      }
      getBoneByName(HH) {
        for (let IH = 0; IH < this.skeletons.length; IH++) {
          const EH = this.skeletons[IH];
          for (let IH = 0; IH < EH.bones.length; IH++) if (EH.bones[IH].name === HH) return EH.bones[IH];
        }
        return null;
      }
      getLightByName(HH) {
        for (let IH = 0; IH < this.lights.length; IH++) if (this.lights[IH].name === HH) return this.lights[IH];
        return null;
      }
      getLightById(HH) {
        for (let IH = 0; IH < this.lights.length; IH++) if (this.lights[IH].id === HH) return this.lights[IH];
        return null;
      }
      getLightByUniqueId(HH) {
        for (let IH = 0; IH < this.lights.length; IH++) if (this.lights[IH].uniqueId === HH) return this.lights[IH];
        return null;
      }
      getParticleSystemById(HH) {
        for (let IH = 0; IH < this.fF.length; IH++) if (this.fF[IH].id === HH) return this.fF[IH];
        return null;
      }
      getGeometryById(HH) {
        for (let IH = 0; IH < this.geometries.length; IH++) if (this.geometries[IH].id === HH) return this.geometries[IH];
        return null;
      }
      _getGeometryByUniqueId(HH) {
        if (this._geometriesByUniqueId) {
          const IH = this._geometriesByUniqueId[HH];
          if (void 0 !== IH) return this.geometries[IH];
        } else for (let IH = 0; IH < this.geometries.length; IH++) if (this.geometries[IH].uniqueId === HH) return this.geometries[IH];
        return null;
      }
      getFrameGraphByName(HH) {
        for (let IH = 0; IH < this.frameGraphs.length; IH++) if (this.frameGraphs[IH].name === HH) return this.frameGraphs[IH];
        return null;
      }
      pushGeometry(HH, IH) {
        return !(!IH && this._getGeometryByUniqueId(HH.uniqueId)) && (this.addGeometry(HH), TH.e.SetImmediate(() => {
          this.onNewGeometryAddedObservable.notifyObservers(HH);
        }), !0);
      }
      removeGeometry(HH) {
        let IH;
        if (this._geometriesByUniqueId) {
          if (IH = this._geometriesByUniqueId[HH.uniqueId], void 0 === IH) return !1;
        } else if (IH = this.geometries.indexOf(HH), IH < 0) return !1;
        if (IH !== this.geometries.length - 1) {
          const HH = this.geometries[this.geometries.length - 1];
          HH && (this.geometries[IH] = HH, this._geometriesByUniqueId && (this._geometriesByUniqueId[HH.uniqueId] = IH));
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[HH.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(HH), !0;
      }
      getGeometries() {
        return this.geometries;
      }
      getMeshById(HH) {
        for (let IH = 0; IH < this.meshes.length; IH++) if (this.meshes[IH].id === HH) return this.meshes[IH];
        return null;
      }
      getMeshesById(HH) {
        return this.meshes.filter(function (IH) {
          return IH.id === HH;
        });
      }
      getTransformNodeById(HH) {
        for (let IH = 0; IH < this.transformNodes.length; IH++) if (this.transformNodes[IH].id === HH) return this.transformNodes[IH];
        return null;
      }
      getTransformNodeByUniqueId(HH) {
        for (let IH = 0; IH < this.transformNodes.length; IH++) if (this.transformNodes[IH].uniqueId === HH) return this.transformNodes[IH];
        return null;
      }
      getTransformNodesById(HH) {
        return this.transformNodes.filter(function (IH) {
          return IH.id === HH;
        });
      }
      getMeshByUniqueId(HH) {
        for (let IH = 0; IH < this.meshes.length; IH++) if (this.meshes[IH].uniqueId === HH) return this.meshes[IH];
        return null;
      }
      getLastMeshById(HH) {
        for (let IH = this.meshes.length - 1; IH >= 0; IH--) if (this.meshes[IH].id === HH) return this.meshes[IH];
        return null;
      }
      getLastTransformNodeById(HH) {
        for (let IH = this.transformNodes.length - 1; IH >= 0; IH--) if (this.transformNodes[IH].id === HH) return this.transformNodes[IH];
        return null;
      }
      getLastEntryById(HH) {
        let IH;
        for (IH = this.meshes.length - 1; IH >= 0; IH--) if (this.meshes[IH].id === HH) return this.meshes[IH];
        for (IH = this.transformNodes.length - 1; IH >= 0; IH--) if (this.transformNodes[IH].id === HH) return this.transformNodes[IH];
        for (IH = this.cameras.length - 1; IH >= 0; IH--) if (this.cameras[IH].id === HH) return this.cameras[IH];
        for (IH = this.lights.length - 1; IH >= 0; IH--) if (this.lights[IH].id === HH) return this.lights[IH];
        for (IH = this.skeletons.length - 1; IH >= 0; IH--) {
          const EH = this.skeletons[IH];
          for (let IH = EH.bones.length - 1; IH >= 0; IH--) if (EH.bones[IH].id === HH) return EH.bones[IH];
        }
        return null;
      }
      getNodeById(HH) {
        const IH = this.getMeshById(HH);
        if (IH) return IH;
        const EH = this.getTransformNodeById(HH);
        if (EH) return EH;
        const RH = this.getLightById(HH);
        if (RH) return RH;
        const hH = this.getCameraById(HH);
        if (hH) return hH;
        const TH = this.getBoneById(HH);
        return TH || null;
      }
      getNodeByName(HH) {
        const IH = this.getMeshByName(HH);
        if (IH) return IH;
        const EH = this.getTransformNodeByName(HH);
        if (EH) return EH;
        const RH = this.getLightByName(HH);
        if (RH) return RH;
        const hH = this.getCameraByName(HH);
        if (hH) return hH;
        const TH = this.getBoneByName(HH);
        return TH || null;
      }
      getMeshByName(HH) {
        for (let IH = 0; IH < this.meshes.length; IH++) if (this.meshes[IH].name === HH) return this.meshes[IH];
        return null;
      }
      getTransformNodeByName(HH) {
        for (let IH = 0; IH < this.transformNodes.length; IH++) if (this.transformNodes[IH].name === HH) return this.transformNodes[IH];
        return null;
      }
      getLastSkeletonById(HH) {
        for (let IH = this.skeletons.length - 1; IH >= 0; IH--) if (this.skeletons[IH].id === HH) return this.skeletons[IH];
        return null;
      }
      getSkeletonByUniqueId(HH) {
        for (let IH = 0; IH < this.skeletons.length; IH++) if (this.skeletons[IH].uniqueId === HH) return this.skeletons[IH];
        return null;
      }
      getSkeletonById(HH) {
        for (let IH = 0; IH < this.skeletons.length; IH++) if (this.skeletons[IH].id === HH) return this.skeletons[IH];
        return null;
      }
      getSkeletonByName(HH) {
        for (let IH = 0; IH < this.skeletons.length; IH++) if (this.skeletons[IH].name === HH) return this.skeletons[IH];
        return null;
      }
      getMorphTargetManagerById(HH) {
        for (let IH = 0; IH < this.morphTargetManagers.length; IH++) if (this.morphTargetManagers[IH].uniqueId === HH) return this.morphTargetManagers[IH];
        return null;
      }
      getMorphTargetById(HH) {
        for (let IH = 0; IH < this.morphTargetManagers.length; ++IH) {
          const EH = this.morphTargetManagers[IH];
          for (let IH = 0; IH < EH.numTargets; ++IH) {
            const RH = EH.getTarget(IH);
            if (RH.id === HH) return RH;
          }
        }
        return null;
      }
      getMorphTargetByName(HH) {
        for (let IH = 0; IH < this.morphTargetManagers.length; ++IH) {
          const EH = this.morphTargetManagers[IH];
          for (let IH = 0; IH < EH.numTargets; ++IH) {
            const RH = EH.getTarget(IH);
            if (RH.name === HH) return RH;
          }
        }
        return null;
      }
      getPostProcessByName(HH) {
        for (let IH = 0; IH < this.postProcesses.length; ++IH) {
          const EH = this.postProcesses[IH];
          if (EH.name === HH) return EH;
        }
        return null;
      }
      isActiveMesh(HH) {
        return -1 !== this._activeMeshes.indexOf(HH);
      }
      get uid() {
        return this._uid || (this._uid = hH.i.RandomId()), this._uid;
      }
      addExternalData(HH, IH) {
        return this._externalData || (this._externalData = new AH()), this._externalData.add(HH, IH);
      }
      getExternalData(HH) {
        return this._externalData ? this._externalData.get(HH) : null;
      }
      getOrAddExternalDataWithFactory(HH, IH) {
        return this._externalData || (this._externalData = new AH()), this._externalData.getOrAddWithFactory(HH, IH);
      }
      removeExternalData(HH) {
        return this._externalData.remove(HH);
      }
      _evaluateSubMesh(HH, IH, EH, RH) {
        if (RH || HH.isInFrustum(this._frustumPlanes)) {
          for (const RH of this._evaluateSubMeshStage) RH.action(IH, HH);
          const EH = HH.sI();
          null !== EH && void 0 !== EH && (EH.hasRenderTargetTextures && null != EH.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(EH) && (this._processedMaterials.push(EH), this._materialsRenderTargets.concatWithNoDuplicate(EH.getRenderTargetTextures())), this._renderingManager.dispatch(HH, IH, EH));
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose();
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups;
      }
      set blockfreeActiveMeshesAndRenderingGroups(HH) {
        this._preventFreeActiveMeshesAndRenderingGroups !== HH && (HH && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = HH);
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras)) for (let HH = 0; HH < this.activeCameras.length; HH++) {
          const IH = this.activeCameras[HH];
          IH && IH._activeMeshes && IH._activeMeshes.dispose();
        }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures)) for (let HH = 0; HH < this.textures.length; HH++) {
          const IH = this.textures[HH];
          IH && IH.renderList && IH.freeRenderingGroups();
        }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering;
      }
      freezeActiveMeshes() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IH = arguments.length > 1 ? arguments[1] : void 0,
          EH = arguments.length > 2 ? arguments[2] : void 0,
          RH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const sH = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const HH of sH) HH.objectRenderer._freezeActiveMeshes(RH);
          return this._freezeActiveMeshesCancel = (0, TH.f)(() => {
            let HH = !0,
              IH = !0;
            for (const EH of sH) HH && (HH = EH.objectRenderer._isFrozen), IH && (IH = null !== EH.objectRenderer._freezeActiveMeshesCancel);
            if (HH) return !0;
            if (!IH) throw new Error("Freezing active meshes was cancelled");
            return !1;
          }, () => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = hH, this._skipEvaluateActiveMeshesCompletely = HH, null === IH || void 0 === IH || IH();
          }, (HH, IH) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), IH) {
              const IH = "Scene: Timeout while waiting for meshes to be frozen.";
              EH ? EH(IH) : (ER.e.Error(IH), HH && ER.e.Error(HH));
            } else {
              const IH = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              EH ? EH(IH) : (ER.e.Error(IH), HH && (ER.e.Error(HH), HH.stack && ER.e.Error(HH.stack)));
            }
          }), this;
        }
        return this.executeWhenReady(() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = hH, this._skipEvaluateActiveMeshesCompletely = HH, RH) for (let HH = 0; HH < this._activeMeshes.length; HH++) this._activeMeshes.data[HH]._freeze();
            IH && IH();
          } else EH && EH("No active camera found");
        }), this;
      }
      unfreezeActiveMeshes() {
        var HH;
        for (let IH = 0; IH < this.meshes.length; IH++) {
          const HH = this.meshes[IH];
          HH._internalAbstractMeshDataInfo && (HH._internalAbstractMeshDataInfo._isActive = !1);
        }
        if (null === (HH = this._freezeActiveMeshesCancel) || void 0 === HH || HH.call(this), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const HH = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const IH of HH) IH.objectRenderer._unfreezeActiveMeshes();
        } else for (let IH = 0; IH < this._activeMeshes.length; IH++) this._activeMeshes.data[IH]._unFreeze();
        return this._activeMeshesFrozen = !1, this;
      }
      _executeActiveContainerCleanup(HH) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce(() => HH.dispose());
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) {
          var HH;
          if (this._activeMeshes.length > 0) null === (HH = this.activeCamera) || void 0 === HH || HH._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
          return;
        }
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const HH = this._activeMeshes.length;
            for (let IH = 0; IH < HH; IH++) {
              this._activeMeshes.data[IH].aJ();
            }
          }
          if (this._activeParticleSystems) {
            const HH = this._activeParticleSystems.length;
            for (let IH = 0; IH < HH; IH++) this._activeParticleSystems.data[IH].animate();
          }
          return void this._renderingManager.resetSprites();
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (const TH of this._beforeEvaluateActiveMeshStage) TH.action();
        const IH = this.ar(),
          EH = IH.length,
          RH = wH.d.sY,
          hH = this.customLODSelector;
        for (let TH = 0; TH < EH; TH++) {
          const HH = IH.data[TH],
            EH = !hH && !HH.isAnInstance && !HH.hasLODLevels;
          let sH, eH;
          if ((EH || (sH = HH._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), sH ? sH[1] = -1 : (sH = [HH, -1], HH._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, sH))), !HH.isBlocked) && (RH && this._totalVertices.addCount(HH.getTotalVertices(), !1), HH.isReady() && HH.isEnabled() && !HH.WJ.hasAZeroComponent)) {
            if (HH.aJ(), HH.actionManager && HH.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(HH), EH) eH = HH;else if (eH = hH ? hH(HH, this.activeCamera) : HH.getLOD(this.activeCamera), sH[0] = eH, sH[1] = this._frameId, void 0 === eH || null === eH) continue;
            if (eH !== HH && 0 !== eH.billboardMode && eH.aJ(), HH._preActivate(), HH.isVisible && HH.visibility > 0 && 0 !== (HH.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || HH.CJ || HH.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(HH), this.activeCamera._activeMeshes.push(HH), eH !== HH && eH._activate(this._renderId, !1);
              for (const IH of this._preActiveMeshStage) IH.action(HH);
              HH._activate(this._renderId, !1) && (HH.isAnInstance ? HH._internalAbstractMeshDataInfo._actAsRegularMesh && (eH = HH) : eH._internalAbstractMeshDataInfo._onlyForInstances = !1, eH._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(HH, eH)), HH._postActivate();
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let HH = 0; HH < this.fF.length; HH++) {
            const IH = this.fF[HH];
            if (!IH.isStarted() || !IH.dI) continue;
            const EH = IH.dI;
            EH.position && !EH.isEnabled() || (this._activeParticleSystems.push(IH), IH.animate(), this._renderingManager.dispatchParticles(IH));
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this);
        }
      }
      _prepareSkeleton(HH) {
        this._skeletonsEnabled && HH.skeleton && (this._activeSkeletons.pushNoDuplicate(HH.skeleton) && (HH.skeleton.prepare(), this._activeBones.addCount(HH.skeleton.bones.length, !1)), HH.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(HH) && this.frameGraph && HH.applySkeleton(HH.skeleton));
      }
      _activeMesh(HH, IH) {
        this._prepareSkeleton(IH);
        let EH = HH.hasInstances || HH.isAnInstance || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || IH.CJ;
        if (IH && IH.BJ && IH.BJ.length > 0) {
          const RH = this.getActiveSubMeshCandidates(IH),
            hH = RH.length;
          EH = EH || 1 === hH;
          for (let TH = 0; TH < hH; TH++) {
            const hH = RH.data[TH];
            this._evaluateSubMesh(hH, IH, HH, EH);
          }
        }
      }
      updateTransformMatrix(HH) {
        const IH = this.activeCamera;
        if (IH) if (IH._renderingMultiview) {
          const EH = IH._rigCameras[0],
            RH = IH._rigCameras[1];
          this.setTransformMatrix(EH.getViewMatrix(), EH.getProjectionMatrix(HH), RH.getViewMatrix(), RH.getProjectionMatrix(HH));
        } else this.setTransformMatrix(IH.getViewMatrix(), IH.getProjectionMatrix(HH));
      }
      _bindFrameBuffer(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (HH && HH._multiviewTexture ? HH._multiviewTexture._bindFrameBuffer() : HH && HH.outputRenderTarget ? HH.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), IH && this._clearFrameBuffer(HH);
      }
      _clearFrameBuffer(HH) {
        if (HH && HH._multiviewTexture) ;else if (HH && HH.outputRenderTarget && !HH._renderingMultiview) {
          const IH = HH.outputRenderTarget;
          IH.onClearObservable.hasObservers() ? IH.onClearObservable.notifyObservers(this._engine) : IH.skipInitialClear || HH.isRightCamera || (this.nF && this._engine.clear(IH.clearColor || this._clearColor, !IH._cleared, !0, !0), IH._cleared = !0);
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear());
      }
      _renderForCamera(HH, IH) {
        var EH, RH, TH;
        let sH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (HH && HH._skipRendering) return;
        const eH = this._engine;
        if (this._activeCamera = HH, !this.activeCamera) throw new Error("Active camera not set");
        if (eH.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && sH) {
          let IH = !0;
          HH._renderingMultiview && HH.outputRenderTarget && (IH = HH.outputRenderTarget.skipInitialClear, this.nF && (this._defaultFrameBufferCleared = !1, HH.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), HH._renderingMultiview && HH.outputRenderTarget && (HH.outputRenderTarget.skipInitialClear = IH);
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = null !== (EH = null !== (RH = null === (TH = HH.outputRenderTarget) || void 0 === TH ? void 0 : TH.renderPassId) && void 0 !== RH ? RH : HH.renderPassId) && void 0 !== EH ? EH : 0, this._evaluateActiveMeshes();
        for (let hH = 0; hH < this._softwareSkinnedMeshes.length; hH++) {
          const HH = this._softwareSkinnedMeshes.data[hH];
          HH.applySkeleton(HH.skeleton);
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), HH.customRenderTargets && HH.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(HH.customRenderTargets), IH && IH.customRenderTargets && IH.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(IH.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (const hH of this._gatherActiveCameraRenderTargetsStage) hH.action(this._renderTargets);
        let GH = !1;
        if (this.renderTargetsEnabled) {
          let HH;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            var AH;
            hH.i.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const IH = null === (AH = this.getBoundingBoxRenderer) || void 0 === AH ? void 0 : AH.call(this);
            for (let EH = 0; EH < this._renderTargets.length; EH++) {
              const RH = this._renderTargets.data[EH];
              if (RH._shouldRender()) {
                this._renderId++;
                const EH = RH.activeCamera && RH.activeCamera !== this.activeCamera;
                IH && !HH && (HH = IH.renderList.length > 0 ? IH.renderList.data.slice() : [], HH.length = IH.renderList.length), RH.render(EH, this.dumpNextRenderTargets), GH = !0;
              }
            }
            IH && HH && (IH.renderList.data = HH, IH.renderList.length = HH.length), hH.i.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++;
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            var VH;
            const IH = null === (VH = this.getBoundingBoxRenderer) || void 0 === VH ? void 0 : VH.call(this);
            IH && !HH && (HH = IH.renderList.length > 0 ? IH.renderList.data.slice() : [], HH.length = IH.renderList.length);
            for (const HH of this._cameraDrawRenderTargetStage) GH = HH.action(this.activeCamera) || GH;
            IH && HH && (IH.renderList.data = HH, IH.renderList.length = HH.length);
          }
          this._intermediateRendering = !1;
        }
        GH && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || HH._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (const hH of this._beforeCameraDrawStage) hH.action(this.activeCamera);
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const YH = eH.snapshotRendering && 1 === eH.snapshotRenderingMode;
        YH && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !YH), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (const hH of this._afterCameraDrawStage) hH.action(this.activeCamera);
        if (this.postProcessManager && !HH._multiviewTexture) {
          const IH = HH.outputRenderTarget ? HH.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(HH.isIntermediate, IH);
        }
        for (const hH of this._afterCameraPostProcessStage) hH.action(this.activeCamera);
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera);
      }
      _processSubCameras(HH) {
        let IH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === HH.cameraRigMode || HH._renderingMultiview) return HH._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(HH, void 0, IH), void this.onAfterRenderCameraObservable.notifyObservers(HH);
        if (HH._useMultiviewToSingleView) this._renderMultiviewToSingleView(HH);else {
          this.onBeforeCameraRenderObservable.notifyObservers(HH);
          for (let IH = 0; IH < HH._rigCameras.length; IH++) this._renderForCamera(HH._rigCameras[IH], HH);
        }
        this._activeCamera = HH, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(HH);
      }
      _checkIntersections() {
        for (let HH = 0; HH < this._meshesForIntersections.length; HH++) {
          const IH = this._meshesForIntersections.data[HH];
          if (IH.actionManager) for (let HH = 0; IH.actionManager && HH < IH.actionManager.actions.length; HH++) {
            const EH = IH.actionManager.actions[HH];
            if (12 === EH.trigger || 13 === EH.trigger) {
              const HH = EH.getTriggerParameter(),
                RH = HH.mesh ? HH.mesh : HH,
                hH = RH.intersectsMesh(IH, HH.usePreciseIntersection),
                TH = IH._intersectionsInProgress.indexOf(RH);
              hH && -1 === TH ? 12 === EH.trigger ? (EH._executeCurrent(rH.CreateNew(IH, void 0, RH)), IH._intersectionsInProgress.push(RH)) : 13 === EH.trigger && IH._intersectionsInProgress.push(RH) : !hH && TH > -1 && (13 === EH.trigger && EH._executeCurrent(rH.CreateNew(IH, void 0, RH)), IH.actionManager.hasSpecificTrigger(13, HH => {
                const IH = HH.mesh ? HH.mesh : HH;
                return RH === IH;
              }) && 13 !== EH.trigger || IH._intersectionsInProgress.splice(TH, 1));
            }
          }
        }
      }
      _advancePhysicsEngineStep(HH) {}
      _animate(HH) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let HH = Math.max(eR.MinDeltaTime, Math.min(this._engine.getDeltaTime(), eR.MaxDeltaTime)) + this._timeAccumulator;
          const IH = this._engine.getTimeStep(),
            EH = 1e3 / IH / 1e3;
          let RH = 0;
          const hH = this._engine.getLockstepMaxSteps();
          let TH = Math.floor(HH / IH);
          for (TH = Math.min(TH, hH); HH > 0 && RH < TH;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = IH * EH, this._animate(IH), this.onAfterAnimationsObservable.notifyObservers(this), this.physicsEnabled && this._advancePhysicsEngineStep(IH), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, RH++, HH -= IH;
          this._timeAccumulator = HH < 0 ? 0 : HH;
        } else {
          const HH = this.useConstantAnimationDeltaTime ? 16 : Math.max(eR.MinDeltaTime, Math.min(this._engine.getDeltaTime(), eR.MaxDeltaTime));
          this._animationRatio = .06 * HH, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.physicsEnabled && this._advancePhysicsEngineStep(HH);
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.nF) && this._engine.clear(this._clearColor, this.nF || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil);
      }
      _checkCameraRenderTarget(HH) {
        var IH;
        if (null === HH || void 0 === HH || !HH.outputRenderTarget || null !== HH && void 0 !== HH && HH.isRigCamera || (HH.outputRenderTarget._cleared = !1), null !== HH && void 0 !== HH && null !== (IH = HH.rigCameras) && void 0 !== IH && IH.length) for (let EH = 0; EH < HH.rigCameras.length; ++EH) {
          const IH = HH.rigCameras[EH].outputRenderTarget;
          IH && (IH._cleared = !1);
        }
      }
      resetDrawCache(HH) {
        if (this.meshes) for (const IH of this.meshes) IH.resetDrawCache(HH);
      }
      _renderWithFrameGraph() {
        var HH, IH, EH;
        let RH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          TH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, RH) for (const hH of this.cameras) if (hH.update(), 0 !== hH.cameraRigMode) for (let HH = 0; HH < hH._rigCameras.length; HH++) hH._rigCameras[HH].update();
        this.onBeforeRenderObservable.notifyObservers(this), this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const sH = null !== (HH = null === (IH = this._frameGraph) || void 0 === IH ? void 0 : IH.findMainCamera()) && void 0 !== HH ? HH : null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), hH.i.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let HH = 0; HH < this._renderTargets.length; HH++) {
            const IH = this._renderTargets.data[HH],
              EH = IH.activeCamera || sH;
            this._renderRenderTarget(IH, EH, !0, this.dumpNextRenderTargets);
          }
          hH.i.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++;
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (const hH of this._beforeClearStage) hH.action();
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();else {
          const HH = this.ar(),
            IH = HH.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely) for (let EH = 0; EH < IH; EH++) {
              const IH = HH.data[EH];
              IH._internalAbstractMeshDataInfo._wasActiveLastFrame && IH.aJ();
            }
            if (this.particlesEnabled) {
              const HH = this._activeParticleSystems.length;
              for (let IH = 0; IH < HH; IH++) this._activeParticleSystems.data[IH].animate();
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let EH = 0; EH < IH; EH++) {
              const IH = HH.data[EH];
              IH._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, IH.isBlocked || (this._totalVertices.addCount(IH.getTotalVertices(), !1), IH.isReady() && IH.isEnabled() && !IH.WJ.hasAZeroComponent && (IH.aJ(TH), IH.actionManager && IH.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(IH)));
            }
            if (this.particlesEnabled) for (let HH = 0; HH < this.fF.length; HH++) {
              const IH = this.fF[HH];
              if (!IH.isStarted() || !IH.dI) continue;
              const EH = IH.dI;
              EH.position && !EH.isEnabled() || (this._activeParticleSystems.push(IH), IH.animate());
            }
          }
        }
        null === (EH = this.frameGraph) || void 0 === EH || EH.execute();
      }
      _renderRenderTarget(HH, IH) {
        let EH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          RH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, HH._shouldRender()) {
          if (this._renderId++, this.activeCamera = IH, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), HH.render(EH, RH);
        }
        this._intermediateRendering = !1;
      }
      render() {
        var HH;
        let IH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          EH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.sH) {
          if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), MH.e.kh = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), null !== (HH = this.activeCameras) && void 0 !== HH && HH.length) for (const HH of this.activeCameras) this._checkCameraRenderTarget(HH);
          this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), EH || this.animate();
          for (const HH of this._beforeCameraUpdateStage) HH.action();
          if (IH) if (this.activeCameras && this.activeCameras.length > 0) for (let HH = 0; HH < this.activeCameras.length; HH++) {
            const IH = this.activeCameras[HH];
            if (IH.update(), 0 !== IH.cameraRigMode) for (let HH = 0; HH < IH._rigCameras.length; HH++) IH._rigCameras[HH].update();
          } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode)) for (let HH = 0; HH < this.activeCamera._rigCameras.length; HH++) this.activeCamera._rigCameras[HH].update();
          if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this.customRenderFunction(IH, EH);else {
            var RH, TH;
            this.onBeforeRenderObservable.notifyObservers(this), this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
            const HH = null !== (RH = this.activeCameras) && void 0 !== RH && RH.length ? this.activeCameras[0] : this.activeCamera;
            if (this.renderTargetsEnabled) {
              hH.i.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
              for (let IH = 0; IH < this.customRenderTargets.length; IH++) {
                const EH = this.customRenderTargets[IH],
                  RH = EH.activeCamera || this.activeCamera;
                this._renderRenderTarget(EH, RH, HH !== RH, this.dumpNextRenderTargets);
              }
              hH.i.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++;
            }
            this._engine.currentRenderPassId = null !== (TH = null === HH || void 0 === HH ? void 0 : HH.renderPassId) && void 0 !== TH ? TH : 0, this.activeCamera = HH, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
            for (const IH of this._beforeClearStage) IH.action();
            this._clearFrameBuffer(this.activeCamera);
            for (const IH of this._gatherRenderTargetsStage) IH.action(this._renderTargets);
            if (this.activeCameras && this.activeCameras.length > 0) for (let IH = 0; IH < this.activeCameras.length; IH++) this._processSubCameras(this.activeCameras[IH], IH > 0);else {
              if (!this.activeCamera) throw new Error("No camera defined");
              this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget);
            }
          }
          this._checkIntersections();
          for (const HH of this._afterRenderStage) HH.action();
          if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
            for (let HH = 0; HH < this._toBeDisposed.length; HH++) {
              const IH = this._toBeDisposed[HH];
              IH && IH.dispose();
            }
            this._toBeDisposed.length = 0;
          }
          this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer();
        }
      }
      freezeMaterials() {
        for (let HH = 0; HH < this.materials.length; HH++) this.materials[HH].freeze();
      }
      unfreezeMaterials() {
        for (let HH = 0; HH < this.materials.length; HH++) this.materials[HH].HR();
      }
      dispose() {
        var HH, IH;
        if (this.sH) return;
        if (this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, XH.d)(this.stopAllAnimations)) {
          for (const HH of this._activeAnimatables) HH.onAnimationEndObservable.clear(), HH.onAnimationEnd = null;
          this.stopAllAnimations();
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const EH = this._activeRequests.slice();
        for (const sH of EH) sH.abort();
        this._activeRequests.length = 0;
        try {
          this.AM.notifyObservers(this);
        } catch (TH) {
          ER.e.Error("An error occurred while calling onDisposeObservable!", TH);
        }
        this.aF();
        if (null === (HH = (IH = this._engine).getInputElement) || void 0 === HH ? void 0 : HH.call(IH)) for (let sH = 0; sH < this.cameras.length; sH++) this.cameras[sH].aF();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, HH => HH.dispose(!0)), this._disposeList(this.transformNodes, HH => HH.dispose(!0));
        const RH = this.cameras;
        this._disposeList(RH), this._disposeList(this.fF), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let hH = this._engine.scenes.indexOf(this);
        if (hH > -1 && this._engine.scenes.splice(hH, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, MH.h)(), PH.e._LastCreatedScene === this) {
          PH.e._LastCreatedScene = null;
          let HH = PH.e.Instances.length - 1;
          for (; HH >= 0;) {
            const IH = PH.e.Instances[HH];
            if (IH.scenes.length > 0) {
              PH.e._LastCreatedScene = IH.scenes[this._engine.scenes.length - 1];
              break;
            }
            HH--;
          }
        }
        hH = this._engine._virtualScenes.indexOf(this), hH > -1 && this._engine._virtualScenes.splice(hH, 1), this._engine.wipeCaches(!0), this.AM.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0;
      }
      _disposeList(HH, IH) {
        var EH;
        const RH = HH.slice(0);
        IH = null !== (EH = IH) && void 0 !== EH ? EH : HH => HH.dispose();
        for (const hH of RH) IH(hH);
        HH.length = 0;
      }
      get sH() {
        return this._isDisposed;
      }
      clearCachedVertexData() {
        for (let HH = 0; HH < this.meshes.length; HH++) {
          const IH = this.meshes[HH].KN;
          IH && IH.clearCachedData();
        }
      }
      cleanCachedTextureBuffer() {
        for (const HH of this.textures) {
          HH._buffer && (HH._buffer = null);
        }
      }
      getWorldExtends(HH) {
        const IH = new YH.x(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          EH = new YH.x(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        HH = HH || (() => !0);
        const RH = this.meshes.filter(HH);
        for (const hH of RH) {
          if (hH.aJ(!0), !hH.BJ || 0 === hH.BJ.length || hH.infiniteDistance) continue;
          const HH = hH.getBoundingInfo(),
            RH = HH.boundingBox.minimumWorld,
            TH = HH.boundingBox.maximumWorld;
          YH.x.CheckExtends(RH, IH, EH), YH.x.CheckExtends(TH, IH, EH);
        }
        return IH.x === Number.MAX_VALUE ? {
          min: YH.x.Zero(),
          max: YH.x.Zero()
        } : {
          min: IH,
          max: EH
        };
      }
      createPickingRay(HH, IH, EH, RH) {
        throw (0, XH.n)("Ray");
      }
      createPickingRayToRef(HH, IH, EH, RH, hH) {
        throw (0, XH.n)("Ray");
      }
      createPickingRayInCameraSpace(HH, IH, EH) {
        throw (0, XH.n)("Ray");
      }
      createPickingRayInCameraSpaceToRef(HH, IH, EH, RH) {
        throw (0, XH.n)("Ray");
      }
      oJ(HH, IH, EH, RH, hH, TH) {
        const sH = (0, XH.n)("Ray", !0);
        return sH && ER.e.Warn(sH), new OH.d();
      }
      pickWithBoundingInfo(HH, IH, EH, RH, hH) {
        const TH = (0, XH.n)("Ray", !0);
        return TH && ER.e.Warn(TH), new OH.d();
      }
      pickWithRay(HH, IH, EH, RH) {
        throw (0, XH.n)("Ray");
      }
      multiPick(HH, IH, EH, RH, hH) {
        throw (0, XH.n)("Ray");
      }
      multiPickWithRay(HH, IH, EH) {
        throw (0, XH.n)("Ray");
      }
      setPointerOverMesh(HH, IH, EH) {
        this._inputManager.setPointerOverMesh(HH, IH, EH);
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh();
      }
      _rebuildGeometries() {
        for (const HH of this.geometries) HH._rebuild();
        for (const HH of this.meshes) HH._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const HH of this._components) HH.rebuild();
        for (const HH of this.fF) HH.rebuild();
        if (this.spriteManagers) for (const HH of this.spriteManagers) HH.rebuild();
      }
      _rebuildTextures() {
        for (const HH of this.textures) HH._rebuild(!0);
        this.markAllMaterialsAsDirty(1);
      }
      _getByTags(HH, IH, EH) {
        if (void 0 === IH) return HH;
        const RH = [];
        for (const hH in HH) {
          const TH = HH[hH];
          VH.c && VH.c.MatchesQuery(TH, IH) && (!EH || EH(TH)) && RH.push(TH);
        }
        return RH;
      }
      getMeshesByTags(HH, IH) {
        return this._getByTags(this.meshes, HH, IH);
      }
      getCamerasByTags(HH, IH) {
        return this._getByTags(this.cameras, HH, IH);
      }
      getLightsByTags(HH, IH) {
        return this._getByTags(this.lights, HH, IH);
      }
      getMaterialByTags(HH, IH) {
        return this._getByTags(this.materials, HH, IH).concat(this._getByTags(this.multiMaterials, HH, IH));
      }
      getTransformNodesByTags(HH, IH) {
        return this._getByTags(this.transformNodes, HH, IH);
      }
      dF(HH) {
        let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          EH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          RH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.dF(HH, IH, EH, RH);
      }
      lF(HH, IH) {
        let EH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          RH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.lF(HH, IH, EH, RH);
      }
      getAutoClearDepthStencilSetup(HH) {
        return this._renderingManager.getAutoClearDepthStencilSetup(HH);
      }
      _forceBlockMaterialDirtyMechanism(HH) {
        this._blockMaterialDirtyMechanism = HH;
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism;
      }
      set blockMaterialDirtyMechanism(HH) {
        this._blockMaterialDirtyMechanism !== HH && (this._blockMaterialDirtyMechanism = HH, HH || this.markAllMaterialsAsDirty(127));
      }
      markAllMaterialsAsDirty(HH, IH) {
        if (!this._blockMaterialDirtyMechanism) for (const EH of this.materials) IH && !IH(EH) || EH.JO(HH);
      }
      _loadFile(HH, IH, EH, RH, hH, TH, sH) {
        const eH = (0, vH.s)(HH, IH, EH, RH ? this.offlineProvider : void 0, hH, TH, sH);
        return this._activeRequests.push(eH), eH.onCompleteObservable.add(HH => {
          this._activeRequests.splice(this._activeRequests.indexOf(HH), 1);
        }), eH;
      }
      async _loadFileAsync(HH, IH, EH, RH, hH) {
        return await new Promise((TH, sH) => {
          this._loadFile(HH, HH => {
            TH(HH);
          }, IH, EH, RH, (HH, IH) => {
            sH(IH);
          }, hH);
        });
      }
      async _loadDelayedFileAsync(HH, IH, EH) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map());
        const RH = "".concat(HH, "|").concat(IH ? "binary" : "string");
        let hH = this._delayedFileRequests.get(RH);
        if (!hH) {
          hH = IH ? this._loadFileAsync(HH, void 0, EH, !0) : this._loadFileAsync(HH, void 0, EH, !1);
          const TH = hH;
          (async HH => {
            try {
              await TH;
            } catch (IH) {}
            null === (HH = this._delayedFileRequests) || void 0 === HH || HH.delete(RH);
          })(), this._delayedFileRequests.set(RH, hH);
        }
        return await hH;
      }
      _requestFile(HH, IH, EH, RH, hH, TH, sH) {
        const eH = (0, vH.A)(HH, IH, EH, RH ? this.offlineProvider : void 0, hH, TH, sH);
        return this._activeRequests.push(eH), eH.onCompleteObservable.add(HH => {
          this._activeRequests.splice(this._activeRequests.indexOf(HH), 1);
        }), eH;
      }
      async _requestFileAsync(HH, IH, EH, RH, hH) {
        return await new Promise((TH, sH) => {
          this._requestFile(HH, HH => {
            TH(HH);
          }, IH, EH, RH, HH => {
            sH(HH);
          }, hH);
        });
      }
      _readFile(HH, IH, EH, RH, hH) {
        const TH = (0, vH.w)(HH, IH, EH, RH, hH);
        return this._activeRequests.push(TH), TH.onCompleteObservable.add(HH => {
          this._activeRequests.splice(this._activeRequests.indexOf(HH), 1);
        }), TH;
      }
      async _readFileAsync(HH, IH, EH) {
        return await new Promise((RH, hH) => {
          this._readFile(HH, HH => {
            RH(HH);
          }, IH, EH, HH => {
            hH(HH);
          });
        });
      }
      getPerfCollector() {
        throw (0, XH.n)("performanceViewerSceneExtension");
      }
      setActiveCameraByID(HH) {
        return this.setActiveCameraById(HH);
      }
      getMaterialByID(HH) {
        return this.getMaterialById(HH);
      }
      getLastMaterialByID(HH) {
        return this.getLastMaterialById(HH);
      }
      getTextureByUniqueID(HH) {
        return this.getTextureByUniqueId(HH);
      }
      getCameraByID(HH) {
        return this.getCameraById(HH);
      }
      getCameraByUniqueID(HH) {
        return this.getCameraByUniqueId(HH);
      }
      getBoneByID(HH) {
        return this.getBoneById(HH);
      }
      getLightByID(HH) {
        return this.getLightById(HH);
      }
      getLightByUniqueID(HH) {
        return this.getLightByUniqueId(HH);
      }
      getParticleSystemByID(HH) {
        return this.getParticleSystemById(HH);
      }
      getGeometryByID(HH) {
        return this.getGeometryById(HH);
      }
      getMeshByID(HH) {
        return this.getMeshById(HH);
      }
      getMeshByUniqueID(HH) {
        return this.getMeshByUniqueId(HH);
      }
      getLastMeshByID(HH) {
        return this.getLastMeshById(HH);
      }
      getMeshesByID(HH) {
        return this.getMeshesById(HH);
      }
      getTransformNodeByID(HH) {
        return this.getTransformNodeById(HH);
      }
      getTransformNodeByUniqueID(HH) {
        return this.getTransformNodeByUniqueId(HH);
      }
      getTransformNodesByID(HH) {
        return this.getTransformNodesById(HH);
      }
      getNodeByID(HH) {
        return this.getNodeById(HH);
      }
      getLastEntryByID(HH) {
        return this.getLastEntryById(HH);
      }
      getLastSkeletonByID(HH) {
        return this.getLastSkeletonById(HH);
      }
    }
    eR.FOGMODE_NONE = 0, eR.FOGMODE_EXP = 1, eR.FOGMODE_EXP2 = 2, eR.FOGMODE_LINEAR = 3, eR.MinDeltaTime = 1, eR.MaxDeltaTime = 1e3, eR._OriginalDefaultMaterialFactory = eR.DefaultMaterialFactory;
    let GR = !1;
    function AR() {
      GR || (GR = !0, (0, RR.d)("BABYLON.Scene", eR));
    }
    null !== (HI = (IE = eR.prototype).sortActiveAnimatables) && void 0 !== HI || (IE.sortActiveAnimatables = (0, XH.j)("Scene", "sortActiveAnimatables")), null !== (II = (EE = eR.prototype).beginWeightedAnimation) && void 0 !== II || (EE.beginWeightedAnimation = (0, XH.j)("Scene", "beginWeightedAnimation")), null !== (EI = (RE = eR.prototype).beginAnimation) && void 0 !== EI || (RE.beginAnimation = (0, XH.j)("Scene", "beginAnimation")), null !== (RI = (hE = eR.prototype).beginHierarchyAnimation) && void 0 !== RI || (hE.beginHierarchyAnimation = (0, XH.j)("Scene", "beginHierarchyAnimation")), null !== (hI = (TE = eR.prototype).beginDirectAnimation) && void 0 !== hI || (TE.beginDirectAnimation = (0, XH.j)("Scene", "beginDirectAnimation")), null !== (TI = (sE = eR.prototype).beginDirectHierarchyAnimation) && void 0 !== TI || (sE.beginDirectHierarchyAnimation = (0, XH.j)("Scene", "beginDirectHierarchyAnimation")), null !== (sI = (eE = eR.prototype).getAnimatableByTarget) && void 0 !== sI || (eE.getAnimatableByTarget = (0, XH.j)("Scene", "getAnimatableByTarget")), null !== (eI = (GE = eR.prototype).getAllAnimatablesByTarget) && void 0 !== eI || (GE.getAllAnimatablesByTarget = (0, XH.j)("Scene", "getAllAnimatablesByTarget")), null !== (GI = (AE = eR.prototype).stopAllAnimations) && void 0 !== GI || (AE.stopAllAnimations = (0, XH.j)("Scene", "stopAllAnimations")), null !== (AI = (VE = eR.prototype).getSoundByName) && void 0 !== AI || (VE.getSoundByName = (0, XH.j)("Scene", "getSoundByName")), null !== (VI = (YE = eR.prototype).createOrUpdateSelectionOctree) && void 0 !== VI || (YE.createOrUpdateSelectionOctree = (0, XH.j)("Scene", "createOrUpdateSelectionOctree")), null !== (YI = (QE = eR.prototype).createDefaultLight) && void 0 !== YI || (QE.createDefaultLight = (0, XH.j)("Scene", "createDefaultLight")), null !== (QI = (JE = eR.prototype).createDefaultCamera) && void 0 !== QI || (JE.createDefaultCamera = (0, XH.j)("Scene", "createDefaultCamera")), null !== (JI = (OE = eR.prototype).createDefaultCameraOrLight) && void 0 !== JI || (OE.createDefaultCameraOrLight = (0, XH.j)("Scene", "createDefaultCameraOrLight")), null !== (OI = (rE = eR.prototype).createDefaultSkybox) && void 0 !== OI || (rE.createDefaultSkybox = (0, XH.j)("Scene", "createDefaultSkybox")), null !== (rI = (FE = eR.prototype).createDefaultEnvironment) && void 0 !== rI || (FE.createDefaultEnvironment = (0, XH.j)("Scene", "createDefaultEnvironment")), null !== (FI = (ME = eR.prototype).createDefaultVRExperience) && void 0 !== FI || (ME.createDefaultVRExperience = (0, XH.j)("Scene", "createDefaultVRExperience")), null !== (MI = (NE = eR.prototype).createDefaultXRExperienceAsync) && void 0 !== MI || (NE.createDefaultXRExperienceAsync = (0, XH.j)("Scene", "createDefaultXRExperienceAsync")), null !== (NI = (iR = eR.prototype).getGlowLayerByName) && void 0 !== NI || (iR.getGlowLayerByName = (0, XH.j)("Scene", "getGlowLayerByName")), null !== (iE = (DE = eR.prototype).getHighlightLayerByName) && void 0 !== iE || (DE.getHighlightLayerByName = (0, XH.j)("Scene", "getHighlightLayerByName")), null !== (DI = (PE = eR.prototype).getSelectionOutlineLayerByName) && void 0 !== DI || (PE.getSelectionOutlineLayerByName = (0, XH.j)("Scene", "getSelectionOutlineLayerByName")), null !== (PI = (XE = eR.prototype).removeLensFlareSystem) && void 0 !== PI || (XE.removeLensFlareSystem = (0, XH.j)("Scene", "removeLensFlareSystem")), null !== (XI = (mR = eR.prototype).addLensFlareSystem) && void 0 !== XI || (mR.addLensFlareSystem = (0, XH.j)("Scene", "addLensFlareSystem")), null !== (mE = (ZE = eR.prototype).getLensFlareSystemByName) && void 0 !== mE || (ZE.getLensFlareSystemByName = (0, XH.j)("Scene", "getLensFlareSystemByName")), null !== (ZI = (qE = eR.prototype).getLensFlareSystemByID) && void 0 !== ZI || (qE.getLensFlareSystemByID = (0, XH.j)("Scene", "getLensFlareSystemByID")), null !== (qI = (LE = eR.prototype).getLensFlareSystemById) && void 0 !== qI || (LE.getLensFlareSystemById = (0, XH.j)("Scene", "getLensFlareSystemById")), null !== (LI = (gE = eR.prototype).getPhysicsEngine) && void 0 !== LI || (gE.getPhysicsEngine = (0, XH.j)("Scene", "getPhysicsEngine")), null !== (gI = (yE = eR.prototype).enablePhysics) && void 0 !== gI || (yE.enablePhysics = (0, XH.j)("Scene", "enablePhysics")), null !== (yI = (oE = eR.prototype).disablePhysicsEngine) && void 0 !== yI || (oE.disablePhysicsEngine = (0, XH.j)("Scene", "disablePhysicsEngine")), null !== (oI = (kR = eR.prototype).isPhysicsEnabled) && void 0 !== oI || (kR.isPhysicsEnabled = (0, XH.j)("Scene", "isPhysicsEnabled")), null !== (kE = (CE = eR.prototype).deleteCompoundImpostor) && void 0 !== kE || (CE.deleteCompoundImpostor = (0, XH.j)("Scene", "deleteCompoundImpostor")), null !== (CI = (cE = eR.prototype).removeReflectionProbe) && void 0 !== CI || (cE.removeReflectionProbe = (0, XH.j)("Scene", "removeReflectionProbe")), null !== (cI = (UE = eR.prototype).addReflectionProbe) && void 0 !== cI || (UE.addReflectionProbe = (0, XH.j)("Scene", "addReflectionProbe")), null !== (UI = (WE = eR.prototype).getBoundingBoxRenderer) && void 0 !== UI || (WE.getBoundingBoxRenderer = (0, XH.j)("Scene", "getBoundingBoxRenderer")), null !== (WI = (BE = eR.prototype).enableDepthRenderer) && void 0 !== WI || (BE.enableDepthRenderer = (0, XH.j)("Scene", "enableDepthRenderer")), null !== (BI = (fE = eR.prototype).disableDepthRenderer) && void 0 !== BI || (fE.disableDepthRenderer = (0, XH.j)("Scene", "disableDepthRenderer")), null !== (fI = (aE = eR.prototype).enableFluidRenderer) && void 0 !== fI || (aE.enableFluidRenderer = (0, XH.j)("Scene", "enableFluidRenderer")), null !== (aI = (nE = eR.prototype).disableFluidRenderer) && void 0 !== aI || (nE.disableFluidRenderer = (0, XH.j)("Scene", "disableFluidRenderer")), null !== (nI = (pE = eR.prototype).enableGeometryBufferRenderer) && void 0 !== nI || (pE.enableGeometryBufferRenderer = (0, XH.j)("Scene", "enableGeometryBufferRenderer")), null !== (pI = (dE = eR.prototype).disableGeometryBufferRenderer) && void 0 !== pI || (dE.disableGeometryBufferRenderer = (0, XH.j)("Scene", "disableGeometryBufferRenderer")), null !== (dI = (uE = eR.prototype).enableIblCdfGenerator) && void 0 !== dI || (uE.enableIblCdfGenerator = (0, XH.j)("Scene", "enableIblCdfGenerator")), null !== (uI = (lE = eR.prototype).disableIblCdfGenerator) && void 0 !== uI || (lE.disableIblCdfGenerator = (0, XH.j)("Scene", "disableIblCdfGenerator")), null !== (lI = (KE = eR.prototype).getOutlineRenderer) && void 0 !== lI || (KE.getOutlineRenderer = (0, XH.j)("Scene", "getOutlineRenderer")), null !== (KI = (wE = eR.prototype).enablePrePassRenderer) && void 0 !== KI || (wE.enablePrePassRenderer = (0, XH.j)("Scene", "enablePrePassRenderer")), null !== (wI = (zE = eR.prototype).disablePrePassRenderer) && void 0 !== wI || (zE.disablePrePassRenderer = (0, XH.j)("Scene", "disablePrePassRenderer")), null !== (zI = (tE = eR.prototype).enableSubSurfaceForPrePass) && void 0 !== zI || (tE.enableSubSurfaceForPrePass = (0, XH.j)("Scene", "enableSubSurfaceForPrePass")), null !== (tI = (jR = eR.prototype).disableSubSurfaceForPrePass) && void 0 !== tI || (jR.disableSubSurfaceForPrePass = (0, XH.j)("Scene", "disableSubSurfaceForPrePass")), null !== (jE = (vE = eR.prototype).pickSprite) && void 0 !== jE || (vE.pickSprite = (0, XH.j)("Scene", "pickSprite")), null !== (vI = (bE = eR.prototype).pickSpriteWithRay) && void 0 !== vI || (bE.pickSpriteWithRay = (0, XH.j)("Scene", "pickSpriteWithRay")), null !== (bI = (SE = eR.prototype).multiPickSprite) && void 0 !== bI || (SE.multiPickSprite = (0, XH.j)("Scene", "multiPickSprite")), null !== (SI = (xE = eR.prototype).multiPickSpriteWithRay) && void 0 !== SI || (xE.multiPickSpriteWithRay = (0, XH.j)("Scene", "multiPickSpriteWithRay")), null !== (xI = (HR = eR.prototype).setPointerOverSprite) && void 0 !== xI || (HR.setPointerOverSprite = (0, XH.j)("Scene", "setPointerOverSprite")), null !== (HE = (IR = eR.prototype).getPointerOverSprite) && void 0 !== HE || (IR.getPointerOverSprite = (0, XH.j)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(eR.prototype, "mainSoundTrack") || Object.defineProperty(eR.prototype, "mainSoundTrack", (0, XH.f)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(eR.prototype, "soundTracks") || Object.defineProperty(eR.prototype, "soundTracks", (0, XH.f)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(eR.prototype, "audioEnabled") || Object.defineProperty(eR.prototype, "audioEnabled", (0, XH.f)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(eR.prototype, "headphone") || Object.defineProperty(eR.prototype, "headphone", (0, XH.f)("Scene", "headphone")), Object.getOwnPropertyDescriptor(eR.prototype, "audioListenerPositionProvider") || Object.defineProperty(eR.prototype, "audioListenerPositionProvider", (0, XH.f)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(eR.prototype, "audioListenerRotationProvider") || Object.defineProperty(eR.prototype, "audioListenerRotationProvider", (0, XH.f)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(eR.prototype, "audioPositioningRefreshRate") || Object.defineProperty(eR.prototype, "audioPositioningRefreshRate", (0, XH.f)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(eR.prototype, "selectionOctree") || Object.defineProperty(eR.prototype, "selectionOctree", (0, XH.f)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(eR.prototype, "debugLayer") || Object.defineProperty(eR.prototype, "debugLayer", (0, XH.f)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(eR.prototype, "gamepadManager") || Object.defineProperty(eR.prototype, "gamepadManager", (0, XH.f)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(eR.prototype, "simplificationQueue") || Object.defineProperty(eR.prototype, "simplificationQueue", (0, XH.f)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(eR.prototype, "onBeforePhysicsObservable") || Object.defineProperty(eR.prototype, "onBeforePhysicsObservable", (0, XH.f)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(eR.prototype, "onAfterPhysicsObservable") || Object.defineProperty(eR.prototype, "onAfterPhysicsObservable", (0, XH.f)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(eR.prototype, "reflectionProbes") || Object.defineProperty(eR.prototype, "reflectionProbes", (0, XH.f)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(eR.prototype, "forceShowBoundingBoxes") || Object.defineProperty(eR.prototype, "forceShowBoundingBoxes", (0, XH.f)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(eR.prototype, "depthPeelingRenderer") || Object.defineProperty(eR.prototype, "depthPeelingRenderer", (0, XH.f)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(eR.prototype, "useOrderIndependentTransparency") || Object.defineProperty(eR.prototype, "useOrderIndependentTransparency", (0, XH.f)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(eR.prototype, "fluidRenderer") || Object.defineProperty(eR.prototype, "fluidRenderer", (0, XH.f)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(eR.prototype, "geometryBufferRenderer") || Object.defineProperty(eR.prototype, "geometryBufferRenderer", (0, XH.f)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(eR.prototype, "iblCdfGenerator") || Object.defineProperty(eR.prototype, "iblCdfGenerator", (0, XH.f)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(eR.prototype, "prePassRenderer") || Object.defineProperty(eR.prototype, "prePassRenderer", (0, XH.f)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(eR.prototype, "subSurfaceConfiguration") || Object.defineProperty(eR.prototype, "subSurfaceConfiguration", (0, XH.f)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(eR.prototype, "spriteManagers") || Object.defineProperty(eR.prototype, "spriteManagers", (0, XH.f)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(eR.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(eR.prototype, "onBeforeSpritesRenderingObservable", (0, XH.f)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(eR.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(eR.prototype, "onAfterSpritesRenderingObservable", (0, XH.f)("Scene", "onAfterSpritesRenderingObservable"));
  },
  22281: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => RH,
      f: () => hH
    });
    class RH {}
    RH.NAME_EFFECTLAYER = "EffectLayer", RH.NAME_LAYER = "Layer", RH.NAME_LENSFLARESYSTEM = "LensFlareSystem", RH.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", RH.NAME_PARTICLESYSTEM = "ParticleSystem", RH.NAME_GAMEPAD = "Gamepad", RH.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", RH.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", RH.NAME_PREPASSRENDERER = "PrePassRenderer", RH.NAME_DEPTHRENDERER = "DepthRenderer", RH.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", RH.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", RH.NAME_SPRITE = "Sprite", RH.NAME_SUBSURFACE = "SubSurface", RH.NAME_OUTLINERENDERER = "Outline", RH.NAME_PROCEDURALTEXTURE = "ProceduralTexture", RH.NAME_SHADOWGENERATOR = "ShadowGenerator", RH.NAME_OCTREE = "Fh", RH.NAME_PHYSICSENGINE = "PhysicsEngine", RH.NAME_AUDIO = "Audio", RH.NAME_FLUIDRENDERER = "FluidRenderer", RH.NAME_IBLCDFGENERATOR = "iblCDFGenerator", RH.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", RH.STEP_ISREADYFORMESH_EFFECTLAYER = 0, RH.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, RH.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, RH.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, RH.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, RH.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, RH.STEP_BEFORECAMERADRAW_PREPASS = 0, RH.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, RH.STEP_BEFORECAMERADRAW_LAYER = 2, RH.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, RH.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, RH.STEP_BEFORERENDERINGMESH_PREPASS = 0, RH.STEP_BEFORERENDERINGMESH_OUTLINE = 1, RH.STEP_AFTERRENDERINGMESH_PREPASS = 0, RH.STEP_AFTERRENDERINGMESH_OUTLINE = 1, RH.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, RH.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, RH.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, RH.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, RH.STEP_BEFORECLEAR_PREPASS = 1, RH.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, RH.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, RH.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, RH.STEP_AFTERCAMERADRAW_PREPASS = 0, RH.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, RH.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, RH.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, RH.STEP_AFTERCAMERADRAW_LAYER = 4, RH.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, RH.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, RH.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, RH.STEP_AFTERRENDER_AUDIO = 0, RH.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, RH.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, RH.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, RH.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, RH.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, RH.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, RH.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, RH.STEP_POINTERMOVE_SPRITE = 0, RH.STEP_POINTERDOWN_SPRITE = 0, RH.STEP_POINTERUP_SPRITE = 0;
    class hH extends Array {
      constructor(HH) {
        super(...HH);
      }
      static Create() {
        return Object.create(hH.prototype);
      }
      registerStep(HH, IH, EH) {
        let RH,
          hH = 0;
        for (; hH < this.length; hH++) {
          if (RH = this[hH].index, HH < RH) break;
        }
        this.splice(hH, 0, {
          index: HH,
          component: IH,
          action: EH.bind(IH)
        });
      }
      clear() {
        this.length = 0;
      }
    }
  },
  21947: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => sH,
      g: () => eH,
      i: () => RH,
      j: () => hH,
      m: () => TH
    });
    function RH(HH, IH, EH, RH, hH, TH) {
      function sH(HH) {
        if (void 0 !== HH && "function" !== typeof HH) throw new TypeError("Function expected");
        return HH;
      }
      for (var eH, GH = RH.kind, AH = "getter" === GH ? "get" : "setter" === GH ? "set" : "value", VH = !IH && HH ? RH.static ? HH : HH.prototype : null, YH = IH || (VH ? Object.getOwnPropertyDescriptor(VH, RH.name) : {}), QH = !1, JH = EH.length - 1; JH >= 0; JH--) {
        var OH = {};
        for (var rH in RH) OH[rH] = "access" === rH ? {} : RH[rH];
        for (var rH in RH.access) OH.access[rH] = RH.access[rH];
        OH.addInitializer = function (HH) {
          if (QH) throw new TypeError("Cannot add initializers after decoration has completed");
          TH.push(sH(HH || null));
        };
        var FH = (0, EH[JH])("accessor" === GH ? {
          get: YH.get,
          set: YH.set
        } : YH[AH], OH);
        if ("accessor" === GH) {
          if (void 0 === FH) continue;
          if (null === FH || "object" !== typeof FH) throw new TypeError("Object expected");
          (eH = sH(FH.get)) && (YH.get = eH), (eH = sH(FH.set)) && (YH.set = eH), (eH = sH(FH.init)) && hH.unshift(eH);
        } else (eH = sH(FH)) && ("field" === GH ? hH.unshift(eH) : YH[AH] = eH);
      }
      VH && Object.defineProperty(VH, RH.name, YH), QH = !0;
    }
    function hH(HH, IH, EH) {
      for (var RH = arguments.length > 2, hH = 0; hH < IH.length; hH++) EH = RH ? IH[hH].call(HH, EH) : IH[hH].call(HH);
      return RH ? EH : void 0;
    }
    function TH(HH, IH, EH) {
      return "symbol" === typeof IH && (IH = IH.description ? "[".concat(IH.description, "]") : ""), Object.defineProperty(HH, "name", {
        configurable: !0,
        value: EH ? "".concat(EH, " ", IH) : IH
      });
    }
    Object.create;
    Object.create;
    function sH(HH, IH, EH, RH) {
      if ("a" === EH && !RH) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof IH ? HH !== IH || !RH : !IH.has(HH)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === EH ? RH : "a" === EH ? RH.call(HH) : RH ? RH.value : IH.get(HH);
    }
    function eH(HH, IH, EH, RH, hH) {
      if ("m" === RH) throw new TypeError("Private method is not writable");
      if ("a" === RH && !hH) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof IH ? HH !== IH || !hH : !IH.has(HH)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === RH ? hH.call(HH, EH) : hH ? hH.value = EH : IH.set(HH, EH), EH;
    }
    "function" === typeof SuppressedError && SuppressedError;
  }
};
//# sourceMappingURL=ug4nu.51.4e9e6b02.chunk.js.map
//# debugId=37a7c7a6-0809-51cd-b17e-38db4777cb88