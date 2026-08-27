/*! For license information please see ug4nu.42.ba3b4def.chunk.js.LICENSE.txt */

!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "25799364-0e40-521e-93c4-e505bb622943");
  } catch (e) {}
}();
export const id = 42;
export const ids = [42];
export const modules = {
  21475: function (HH, IH) {
    !function (HH) {
      var IH = "dnd-poly-",
        EH = IH + "snapback",
        RH = "dnd-poly-",
        hH = RH + "dragstart-pending",
        TH = RH + "dragstart-cancel",
        sH = ["none", "copy", "copyLink", "copyMove", "link", "linkMove", "move", "all"],
        eH = ["none", "copy", "move", "link"],
        GH = function () {
          var HH = !1;
          try {
            var IH = Object.defineProperty({}, "passive", {
              get: function () {
                HH = !0;
              }
            });
            window.addEventListener("test", null, IH);
          } catch (HH) {}
          return HH;
        }();
      function AH(HH) {
        return HH && HH.tagName;
      }
      function VH(HH, IH, EH) {
        void 0 === EH && (EH = !0), document.addEventListener(HH, IH, !!GH && {
          passive: EH
        });
      }
      function YH(HH, IH) {
        document.removeEventListener(HH, IH);
      }
      function QH(HH, IH, EH, RH) {
        void 0 === RH && (RH = !1);
        var hH = GH ? {
          passive: !0,
          capture: RH
        } : RH;
        return HH.addEventListener(IH, EH, hH), {
          off: function () {
            HH.removeEventListener(IH, EH, hH);
          }
        };
      }
      function JH(HH) {
        return 0 === HH.length ? 0 : HH.reduce(function (HH, IH) {
          return IH + HH;
        }, 0) / HH.length;
      }
      function OH(HH, IH) {
        for (var EH = 0; EH < HH.changedTouches.length; EH++) if (HH.changedTouches[EH].identifier === IH) return !0;
        return !1;
      }
      function rH(HH, IH, EH) {
        for (var RH = [], hH = [], TH = 0; TH < IH.touches.length; TH++) {
          var sH = IH.touches[TH];
          RH.push(sH[HH + "X"]), hH.push(sH[HH + "Y"]);
        }
        EH.x = JH(RH), EH.y = JH(hH);
      }
      var FH = ["", "-webkit-"];
      function MH(HH, IH, EH, RH, hH) {
        void 0 === hH && (hH = !0);
        var TH = IH.x,
          sH = IH.y;
        RH && (TH += RH.x, sH += RH.y), hH && (TH -= parseInt(HH.offsetWidth, 10) / 2, sH -= parseInt(HH.offsetHeight, 10) / 2);
        for (var eH = "translate3d(" + TH + "px," + sH + "px, 0)", GH = 0; GH < FH.length; GH++) {
          var AH = FH[GH] + "transform";
          HH.style[AH] = eH + " " + EH[GH];
        }
      }
      var NH = function () {
        function HH(HH, IH) {
          this.t = HH, this.i = IH, this.s = eH[0];
        }
        return Object.defineProperty(HH.prototype, "dropEffect", {
          get: function () {
            return this.s;
          },
          set: function (HH) {
            0 !== this.t.mode && sH.indexOf(HH) > -1 && (this.s = HH);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(HH.prototype, "types", {
          get: function () {
            if (0 !== this.t.mode) return Object.freeze(this.t.types);
          },
          enumerable: !0,
          configurable: !0
        }), Object.defineProperty(HH.prototype, "effectAllowed", {
          get: function () {
            return this.t.effectAllowed;
          },
          set: function (HH) {
            2 === this.t.mode && sH.indexOf(HH) > -1 && (this.t.effectAllowed = HH);
          },
          enumerable: !0,
          configurable: !0
        }), HH.prototype.setData = function (HH, IH) {
          if (2 === this.t.mode) {
            if (HH.indexOf(" ") > -1) throw new Error("illegal arg: type contains space");
            this.t.data[HH] = IH, -1 === this.t.types.indexOf(HH) && this.t.types.push(HH);
          }
        }, HH.prototype.getData = function (HH) {
          if (1 === this.t.mode || 2 === this.t.mode) return this.t.data[HH] || "";
        }, HH.prototype.clearData = function (HH) {
          if (2 === this.t.mode) {
            if (HH && this.t.data[HH]) {
              delete this.t.data[HH];
              var IH = this.t.types.indexOf(HH);
              return void (IH > -1 && this.t.types.splice(IH, 1));
            }
            this.t.data = {}, this.t.types = [];
          }
        }, HH.prototype.setDragImage = function (HH, IH, EH) {
          2 === this.t.mode && this.i(HH, IH, EH);
        }, HH;
      }();
      function iI(HH, IH) {
        return HH ? HH === sH[0] ? eH[0] : 0 === HH.indexOf(sH[1]) || HH === sH[7] ? eH[1] : 0 === HH.indexOf(sH[4]) ? eH[3] : HH === sH[6] ? eH[2] : eH[1] : 3 === IH.nodeType && "A" === IH.tagName ? eH[3] : eH[1];
      }
      function DH(HH, IH, EH, RH, hH, TH, sH) {
        void 0 === TH && (TH = !0), void 0 === sH && (sH = null);
        var eH = function (HH, IH, EH, RH, hH, TH, sH) {
            void 0 === sH && (sH = null);
            var eH = IH.changedTouches[0],
              GH = new Event(EH, {
                bubbles: !0,
                cancelable: RH
              });
            GH.dataTransfer = TH, GH.relatedTarget = sH, GH.screenX = eH.screenX, GH.screenY = eH.screenY, GH.clientX = eH.clientX, GH.clientY = eH.clientY, GH.pageX = eH.pageX, GH.pageY = eH.pageY;
            var AH = HH.getBoundingClientRect();
            return GH.offsetX = GH.clientX - AH.left, GH.offsetY = GH.clientY - AH.top, GH;
          }(IH, EH, HH, TH, document.defaultView, hH, sH),
          GH = !IH.dispatchEvent(eH);
        return RH.mode = 0, GH;
      }
      function PH(HH, IH) {
        if (!HH || HH === sH[7]) return IH;
        if (IH === eH[1]) {
          if (0 === HH.indexOf(eH[1])) return eH[1];
        } else if (IH === eH[3]) {
          if (0 === HH.indexOf(eH[3]) || HH.indexOf("Link") > -1) return eH[3];
        } else if (IH === eH[2] && (0 === HH.indexOf(eH[2]) || HH.indexOf("Move") > -1)) return eH[2];
        return eH[0];
      }
      var XH,
        mI = function () {
          function HH(HH, IH, EH, RH) {
            this.h = HH, this.o = IH, this.u = EH, this.l = RH, this.v = 0, this.p = null, this.g = null, this.m = HH, this.I = HH.changedTouches[0], this.j = this.C.bind(this), this.S = this.k.bind(this), VH("touchmove", this.j, !1), VH("touchend", this.S, !1), VH("touchcancel", this.S, !1);
          }
          return HH.prototype.A = function () {
            var HH = this;
            this.v = 1, this.O = eH[0], this.D = {
              data: {},
              effectAllowed: void 0,
              mode: 3,
              types: []
            }, this.M = {
              x: null,
              y: null
            }, this.F = {
              x: null,
              y: null
            };
            var IH = this.u;
            if (this.N = new NH(this.D, function (EH, RH, hH) {
              IH = EH, "number" != typeof RH && "number" != typeof hH || (HH.P = {
                x: RH || 0,
                y: hH || 0
              });
            }), this.D.mode = 2, this.N.dropEffect = eH[0], DH("dragstart", this.u, this.m, this.D, this.N)) return this.v = 3, this.T(), !1;
            rH("page", this.m, this.F);
            var EH,
              RH = this.o.dragImageSetup(IH);
            if (this.L = (EH = RH, FH.map(function (HH) {
              var IH = EH.style[HH + "transform"];
              return IH && "none" !== IH ? IH.replace(/translate\(\D*\d+[^,]*,\D*\d+[^,]*\)\s*/g, "") : "";
            })), RH.style.position = "absolute", RH.style.left = "0px", RH.style.top = "0px", RH.style.zIndex = "999999", RH.classList.add("dnd-poly-drag-image"), RH.classList.add("dnd-poly-icon"), this._ = RH, !this.P) if (this.o.dragImageOffset) this.P = {
              x: this.o.dragImageOffset.x,
              y: this.o.dragImageOffset.y
            };else if (this.o.dragImageCenterOnTouch) {
              var hH = getComputedStyle(IH);
              this.P = {
                x: 0 - parseInt(hH.marginLeft, 10),
                y: 0 - parseInt(hH.marginTop, 10)
              };
            } else {
              var TH = IH.getBoundingClientRect();
              hH = getComputedStyle(IH), this.P = {
                x: TH.left - this.I.clientX - parseInt(hH.marginLeft, 10) + TH.width / 2,
                y: TH.top - this.I.clientY - parseInt(hH.marginTop, 10) + TH.height / 2
              };
            }
            return MH(this._, this.F, this.L, this.P, this.o.dragImageCenterOnTouch), document.body.appendChild(this._), this.V = window.setInterval(function () {
              HH.X || (HH.X = !0, HH.Y(), HH.X = !1);
            }, this.o.iterationInterval), !0;
          }, HH.prototype.T = function () {
            this.V && (clearInterval(this.V), this.V = null), YH("touchmove", this.j), YH("touchend", this.S), YH("touchcancel", this.S), this._ && (this._.parentNode.removeChild(this._), this._ = null), this.l(this.o, this.m, this.v);
          }, HH.prototype.C = function (HH) {
            var IH = this;
            if (!1 !== OH(HH, this.I.identifier)) {
              if (this.m = HH, 0 === this.v) {
                var EH = void 0;
                if (this.o.dragStartConditionOverride) try {
                  EH = this.o.dragStartConditionOverride(HH);
                } catch (HH) {
                  EH = !1;
                } else EH = 1 === HH.touches.length;
                return EH ? void (!0 === this.A() && (this.h.preventDefault(), HH.preventDefault())) : void this.T();
              }
              if (HH.preventDefault(), rH("client", HH, this.M), rH("page", HH, this.F), this.o.dragImageTranslateOverride) try {
                var RH = !1;
                if (this.o.dragImageTranslateOverride(HH, {
                  x: this.M.x,
                  y: this.M.y
                }, this.p, function (HH, EH) {
                  IH._ && (RH = !0, IH.M.x += HH, IH.M.y += EH, IH.F.x += HH, IH.F.y += EH, MH(IH._, IH.F, IH.L, IH.P, IH.o.dragImageCenterOnTouch));
                }), RH) return;
              } catch (HH) {}
              MH(this._, this.F, this.L, this.P, this.o.dragImageCenterOnTouch);
            }
          }, HH.prototype.k = function (HH) {
            if (!1 !== OH(HH, this.I.identifier)) {
              if (this.o.dragImageTranslateOverride) try {
                this.o.dragImageTranslateOverride(void 0, void 0, void 0, function () {});
              } catch (HH) {}
              0 !== this.v ? (HH.preventDefault(), this.v = "touchcancel" === HH.type ? 3 : 2) : this.T();
            }
          }, HH.prototype.Y = function () {
            var HH = this,
              RH = this.O;
            this.D.mode = 3, this.N.dropEffect = eH[0];
            var hH = DH("drag", this.u, this.m, this.D, this.N);
            if (hH && (this.O = eH[0]), hH || 2 === this.v || 3 === this.v) return this.q(this.v) ? void function (HH, IH, RH, hH) {
              var TH = getComputedStyle(HH);
              if ("hidden" !== TH.visibility && "none" !== TH.display) {
                IH.classList.add(EH);
                var sH = getComputedStyle(IH),
                  eH = parseFloat(sH.transitionDuration);
                if (isNaN(eH) || 0 === eH) hH();else {
                  var GH = HH.getBoundingClientRect(),
                    AH = {
                      x: GH.left,
                      y: GH.top
                    };
                  AH.x += document.body.scrollLeft || document.documentElement.scrollLeft, AH.y += document.body.scrollTop || document.documentElement.scrollTop, AH.x -= parseInt(TH.marginLeft, 10), AH.y -= parseInt(TH.marginTop, 10);
                  var VH = parseFloat(sH.transitionDelay),
                    YH = Math.round(1e3 * (eH + VH));
                  MH(IH, AH, RH, void 0, !1), setTimeout(hH, YH);
                }
              } else hH();
            }(this.u, this._, this.L, function () {
              HH.B();
            }) : void this.B();
            var TH = this.o.elementFromPoint(this.M.x, this.M.y),
              sH = this.g;
            TH !== this.p && TH !== this.g && (this.p = TH, null !== this.g && (this.D.mode = 3, this.N.dropEffect = eH[0], DH("dragexit", this.g, this.m, this.D, this.N, !1)), null === this.p ? this.g = this.p : (this.D.mode = 3, this.N.dropEffect = iI(this.D.effectAllowed, this.u), DH("dragenter", this.p, this.m, this.D, this.N) ? (this.g = this.p, this.O = PH(this.N.effectAllowed, this.N.dropEffect)) : this.p !== document.body && (this.g = document.body))), sH !== this.g && AH(sH) && (this.D.mode = 3, this.N.dropEffect = eH[0], DH("dragleave", sH, this.m, this.D, this.N, !1, this.g)), AH(this.g) && (this.D.mode = 3, this.N.dropEffect = iI(this.D.effectAllowed, this.u), !1 === DH("dragover", this.g, this.m, this.D, this.N) ? this.O = eH[0] : this.O = PH(this.N.effectAllowed, this.N.dropEffect)), RH !== this.O && this._.classList.remove(IH + RH);
            var GH = IH + this.O;
            this._.classList.add(GH);
          }, HH.prototype.q = function (HH) {
            var IH = this.O === eH[0] || null === this.g || 3 === HH;
            return IH ? AH(this.g) && (this.D.mode = 3, this.N.dropEffect = eH[0], DH("dragleave", this.g, this.m, this.D, this.N, !1)) : AH(this.g) && (this.D.mode = 1, this.N.dropEffect = this.O, !0 === DH("drop", this.g, this.m, this.D, this.N) ? this.O = this.N.dropEffect : this.O = eH[0]), IH;
          }, HH.prototype.B = function () {
            this.D.mode = 3, this.N.dropEffect = this.O, DH("dragend", this.u, this.m, this.D, this.N, !1), this.v = 2, this.T();
          }, HH;
        }(),
        ZH = {
          iterationInterval: 150,
          tryFindDraggableTarget: function (HH) {
            var IH = HH.target;
            do {
              if (!1 !== IH.draggable) {
                if (!0 === IH.draggable) return IH;
                if (IH.getAttribute && "true" === IH.getAttribute("draggable")) return IH;
              }
            } while ((IH = IH.parentNode) && IH !== document.body);
          },
          dragImageSetup: function (HH) {
            var IH = HH.cloneNode(!0);
            return function HH(IH, EH) {
              if (1 === IH.nodeType) {
                for (var RH = getComputedStyle(IH), hH = 0; hH < RH.length; hH++) {
                  var TH = RH[hH];
                  EH.style.setProperty(TH, RH.getPropertyValue(TH), RH.getPropertyPriority(TH));
                }
                if (EH.style.pointerEvents = "none", EH.removeAttribute("id"), EH.removeAttribute("class"), EH.removeAttribute("draggable"), "CANVAS" === EH.nodeName) {
                  var sH = IH,
                    eH = EH,
                    GH = sH.getContext("2d").getImageData(0, 0, sH.width, sH.height);
                  eH.getContext("2d").putImageData(GH, 0, 0);
                }
              }
              if (IH.hasChildNodes()) for (hH = 0; hH < IH.childNodes.length; hH++) HH(IH.childNodes[hH], EH.childNodes[hH]);
            }(HH, IH), IH;
          },
          elementFromPoint: function (HH, IH) {
            return document.elementFromPoint(HH, IH);
          }
        };
      function qH(HH) {
        if (!XH) {
          var IH = ZH.tryFindDraggableTarget(HH);
          if (IH) try {
            XH = new mI(HH, ZH, IH, gH);
          } catch (IH) {
            throw gH(ZH, HH, 3), IH;
          }
        }
      }
      function LH(HH) {
        var IH = HH.target,
          EH = function (HH) {
            sH.off(), eH.off(), GH.off(), AH.off(), IH && IH.dispatchEvent(new CustomEvent(TH, {
              bubbles: !0,
              cancelable: !0
            })), clearTimeout(RH);
          };
        IH && IH.dispatchEvent(new CustomEvent(hH, {
          bubbles: !0,
          cancelable: !0
        }));
        var RH = window.setTimeout(function () {
            sH.off(), eH.off(), GH.off(), AH.off(), qH(HH);
          }, ZH.holdToDrag),
          sH = QH(IH, "touchend", EH),
          eH = QH(IH, "touchcancel", EH),
          GH = QH(IH, "touchmove", EH),
          AH = QH(window, "scroll", EH, !0);
      }
      function gH(HH, IH, EH) {
        if (0 === EH && HH.defaultActionOverride) try {
          HH.defaultActionOverride(IH), IH.defaultPrevented;
        } catch (HH) {}
        XH = null;
      }
      HH.polyfill = function (HH) {
        if (HH && Object.keys(HH).forEach(function (IH) {
          ZH[IH] = HH[IH];
        }), !ZH.forceApply) {
          var IH = (EH = {
            dragEvents: "ondragstart" in document.documentElement,
            draggable: "draggable" in document.documentElement,
            userAgentSupportingNativeDnD: void 0
          }, RH = !!window.chrome || /chrome/i.test(navigator.userAgent), EH.userAgentSupportingNativeDnD = !(/iPad|iPhone|iPod|Android/.test(navigator.userAgent) || RH && "ontouchstart" in document.documentElement), EH);
          if (IH.userAgentSupportingNativeDnD && IH.draggable && IH.dragEvents) return !1;
        }
        var EH, RH;
        return ZH.holdToDrag ? VH("touchstart", LH, !1) : VH("touchstart", qH, !1), !0;
      }, Object.defineProperty(HH, "__esModule", {
        value: !0
      });
    }(IH);
  }
};
//# sourceMappingURL=ug4nu.42.ba3b4def.chunk.js.map
//# debugId=25799364-0e40-521e-93c4-e505bb622943