!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9f6a4e0c-c05b-52c4-853a-f50b022d4b47");
  } catch (e) {}
}();
export const id = 7;
export const ids = [7];
export const modules = {
  2082: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => TH,
      f: () => sH,
      i: () => RH
    });
    class RH {
      constructor(HH) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = HH;
      }
      setMultiplierType(HH, IH) {
        var EH;
        this.multipliers[HH] = IH, null === (EH = this._onUpdate) || void 0 === EH || EH.call(this);
      }
      removeMultiplier(HH) {
        var IH;
        delete this.multipliers[HH], null === (IH = this._onUpdate) || void 0 === IH || IH.call(this);
      }
      getMultiplierType(HH) {
        return this.multipliers[HH];
      }
      getTotalMultipliedVal() {
        let HH = 1;
        for (const IH in this.multipliers) HH *= this.multipliers[IH];
        return HH;
      }
    }
    class hH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = HH;
      }
      setBooleanType(HH, IH) {
        const EH = this._getTotalBooleanVal();
        this.booleans[HH] = IH;
        const RH = this.getTotalBooleanVal();
        var hH;
        RH !== EH && (null === (hH = this._onUpdate) || void 0 === hH || hH.call(this, RH, this.booleans));
        return RH;
      }
      removeBoolean(HH) {
        const IH = this._getTotalBooleanVal();
        delete this.booleans[HH];
        const EH = this._getTotalBooleanVal();
        var RH;
        null !== EH && EH !== IH && (null === (RH = this._onUpdate) || void 0 === RH || RH.call(this, EH, this.booleans));
        return null !== EH && void 0 !== EH && EH;
      }
      getBooleanType(HH) {
        return this.booleans[HH];
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator");
      }
      forceUpdate() {
        var HH;
        null === (HH = this._onUpdate) || void 0 === HH || HH.call(this, this.getTotalBooleanVal(), this.booleans);
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator");
      }
    }
    class TH extends hH {
      getTotalBooleanVal() {
        const HH = this._getTotalBooleanVal();
        if (null === HH) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return HH;
      }
      _getTotalBooleanVal() {
        let HH = !1,
          IH = !0;
        for (const EH in this.booleans) HH = !0, IH && (IH = this.booleans[EH]);
        return HH ? IH : null;
      }
    }
    class sH extends hH {
      getTotalBooleanVal() {
        const HH = this._getTotalBooleanVal();
        if (null === HH) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return HH;
      }
      _getTotalBooleanVal() {
        let HH = !1,
          IH = !1;
        for (const EH in this.booleans) HH = !0, IH || (IH = this.booleans[EH]);
        return HH ? IH : null;
      }
    }
  },
  2073: (HH, IH, EH) => {
    EH.r(IH), EH.d(IH, {
      default: () => dH
    });
    var RH = EH(1027),
      hH = EH(14),
      TH = EH(2067),
      sH = EH(57),
      eH = EH(789),
      GH = EH(1021),
      AH = EH(946),
      VH = EH(797),
      YH = EH(1929),
      QH = EH(115),
      JH = EH(829),
      OH = EH(45),
      rH = EH(660),
      FH = EH(2076),
      MH = EH(998),
      NH = EH(926),
      iI = EH(1664),
      DH = EH(578),
      PH = EH(1883),
      XH = EH(1069),
      mI = EH(71),
      ZH = EH(475),
      qH = EH(494),
      LH = EH(649),
      gH = EH(505),
      yH = EH(1056),
      oH = EH(647),
      kI = EH(607),
      CH = EH(948),
      cH = EH(938),
      UH = EH(1016),
      WH = EH(625),
      BH = EH(557);
    function fH(HH) {
      let {
        gameNameWithVariation: IH,
        onClose: EH
      } = HH;
      const RH = (0, gH.k)(IH),
        [hH, TH] = (0, sH.HY)("prompt"),
        [eH, GH] = (0, sH.HY)(null),
        {
          t: AH
        } = (0, VH.q)(),
        YH = (0, DH.L)();
      function QH() {
        EH();
      }
      return "prompt" === hH ? (0, BH.jsx)(CH.g, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, BH.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [AH("customTexturePack:downloadPrompt"), (0, BH.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: AH("customTexturePack:authorWarning")
          }), (0, BH.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: AH("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "customTexturePack:applyAndReload",
          onClick: function () {
            TH("downloading"), (0, UH.c)("".concat(WH.e.s3Url, "/texturePacks/").concat(RH, ".json")).then(HH => YH.current ? (kI.c.setFromJson(HH), kI.c.saveTexturePack(!0)) : Promise.resolve(!0)).then(() => {
              YH.current && (0, MH.G)();
            }).catch(HH => {
              GH(HH.message), TH("error");
            });
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: QH
        }
      }) : "downloading" === hH ? (0, BH.jsx)(CH.g, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, BH.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, BH.jsx)(cH.d, {
            showFace: !0
          })
        })
      }) : "error" === hH ? (0, BH.jsx)(CH.g, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: eH,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload();
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: QH
        }
      }) : null;
    }
    var aH = EH(2090);
    let nH = !1;
    async function pH(HH, IH, EH) {
      var RH;
      return null !== (RH = qH.b[IH]) && void 0 !== RH && RH.playAdBeforeMatchmaking ? await new Promise(HH => {
        (0, NH.S)(() => {
          HH(!0);
        }, "video_start");
      }) : (0, NH.S)(() => {}, "video_start"), async function (HH, IH, EH) {
        if (nH) return null;
        null === hH.e.get("gameEntrySource") && (0, hH.i)("directPlayUrl"), hH.e.set({
          gameState: "findingLobby"
        }), OH.g.TY("loadingScreenState", "loadingPage:findingLobby");
        const RH = await JH.s.getCurrentUserContext();
        eH.singletons.modeAttemptedPlay = IH, eH.singletons.discordContextAttemptedPlay = HH instanceof LH.g ? HH : null, nH = !0;
        const sH = await async function (HH, IH, EH, RH) {
          try {
            await TH.reqLibsLoadedPromise;
          } catch (hH) {
            return rH.b.errorWithCode(hH.toString(), QH.e.LOAD_REQUIRED_LIBS, {
              error: hH,
              severity: "medium"
            });
          }
          return OH.g.TY("matchmakeAndPlayStepCompleted", {
            step: QH.e.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, TH.matchmakeAndPlayMaybeUnloaded)(HH, IH, EH, RH);
        }(HH, IH, EH, RH);
        if (nH = !1, sH.isError()) {
          const HH = sH.asError().message;
          return console.log("Failed to join lobby:", HH), sH;
        }
        const {
            gameNameWithVariation: GH,
            lobbyName: AH,
            addLobbyToRecentlyPlayed: VH
          } = sH.getValue(),
          YH = hH.e.get("isTouchScreen") ? hH.e.get("clientEscMenuOptions").touchscreenSensitivity : hH.e.get("clientEscMenuOptions").mouseSensitivity;
        let MH;
        return FH.b.setMultiplierType("baseSensitivity", YH), document.getElementById("noa-container").style.display = "block", MH = (0, gH.i)(GH) ? {
          type: "custom",
          name: "",
          schematicId: (0, gH.k)(GH),
          recentLobbies: []
        } : "classic" !== GH || (0, oH.I)(AH) ? {
          type: "bloxd",
          gameNameWithVariation: GH,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, yH.b.addRecentlyPlayedGame(RH, MH, VH ? AH : void 0).then(HH => {
          RH.setRecentlyPlayedGames(HH);
        }).catch(HH => {
          console.error("Failed to record recently played game", HH);
        }), (0, NH.D)(), sH;
      }(HH, IH, EH);
    }
    function dH() {
      const {
          t: HH
        } = (0, VH.q)(),
        IH = (0, GH.s)(),
        EH = (0, RH.l)(),
        OH = (0, RH.r)(),
        rH = (0, aH.d)(OH, EH.search),
        {
          gameState: qH,
          clientEscMenuOptions: LH
        } = (0, hH.j)(["gameState", "clientEscMenuOptions"]),
        CH = (0, sH.useRef)(null),
        cH = (0, sH.useRef)(null);
      return (0, sH.IY)(() => {
        var RH;
        if (OH.lobbyName && !new URLSearchParams(EH.search).has("lobby")) return void IH((0, XH.c)(rH.gameNameWithVariation, rH.lobbyName), {
          replace: !0
        });
        let TH = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === EH.pathname) {
          const HH = hH.e.get("discordContext");
          if (!HH) return void IH("/");
          TH = YH.e.setupDiscordLobby(HH, "classic").then(() => ({
            shouldMatchmake: !0,
            discordContext: HH
          })).catch(IH => (console.error("Failed to setup discord lobby", IH), {
            shouldMatchmake: !1,
            discordContext: HH
          }));
        } else if (!rH.gameNameWithVariation || !(0, oH.G)(rH.gameNameWithVariation)) return console.error("Valid game name with variation is required. Received ".concat(rH.gameNameWithVariation)), void IH(-1);
        if (rH.gameNameWithVariation !== CH.current || rH.lobbyName !== cH.current) {
          if ((0, NH.y)(), hH.e.set({
            gameState: "loadingScreen"
          }), rH.gameNameWithVariation && (0, gH.i)(rH.gameNameWithVariation) && (TH = async function (HH) {
            if (await kI.c.indexedDbValuesAreLoaded(), kI.c.isUsingTemporaryTexturePack()) return;
            const IH = await JH.s.getCurrentUserContext();
            let EH;
            try {
              EH = await yH.b.getGame(IH, (0, gH.k)(HH));
            } catch (hH) {
              return void console.error("Failed to get game", hH);
            }
            if (!EH.hasCustomTexturePack) return;
            const RH = AH.d.showCustomPopup({
              body: IH => (0, BH.jsx)(fH, {
                gameNameWithVariation: HH,
                onClose: IH
              })
            });
            await RH.getResult();
          }(rH.gameNameWithVariation).then(() => ({
            shouldMatchmake: !0
          })).catch(HH => (console.error("Failed to check for custom texture pack", HH), {
            shouldMatchmake: !0
          }))), "releaseCountdown" === (null === (RH = (0, PH.e)(rH.gameNameWithVariation)) || void 0 === RH ? void 0 : RH.type)) return console.error("Game hasn't been released yet: ".concat(rH.gameNameWithVariation)), void IH(-1);
          if (eH.singletons.connectedWebsocketUrl) {
            if ((0, mI.p)((0, eH.getBloxd)())) throw new Error("Cannot read properties of null (reading 'client'), connectedWebsocketUrl: ".concat(eH.singletons.connectedWebsocketUrl, ", params: ").concat(JSON.stringify(OH), ", gameState: ").concat(qH));
            (0, eH.getBloxd)().client.leaveGame();
          }
          TH.then(EH => {
            let {
              shouldMatchmake: RH,
              discordContext: TH
            } = EH;
            RH ? pH(null !== TH && void 0 !== TH ? TH : rH.lobbyName, TH ? "classic" : rH.gameNameWithVariation, rH.directJoinVmUrl).then(EH => {
              if (null !== EH) if (EH.isError()) {
                var RH;
                const TH = EH.asError(),
                  sH = null !== (RH = TH.debugResult.severity) && void 0 !== RH ? RH : "high",
                  GH = hH.e.get("gameEntrySource");
                let VH;
                switch (sH) {
                  case "low":
                    VH = "face-diagonal-mouth";
                    break;
                  case "medium":
                    VH = "face-worried";
                    break;
                  case "high":
                    VH = "face-dizzy";
                }
                AH.d.showPromptPopup({
                  icon: VH,
                  title: QH.g[TH.code],
                  subtitle: (0, BH.jsxs)(BH.Fragment, {
                    children: [TH.message, TH.debugResult.error instanceof Error && (0, BH.jsx)("div", {
                      style: {
                        fontSize: "0.9rem",
                        paddingTop: "1rem"
                      },
                      children: (0, BH.jsx)(DH.g, {
                        errorString: TH.debugResult.error.stack
                      })
                    })]
                  }),
                  confirmText: HH("general:tryAgain"),
                  cancelText: HH("general:cancel")
                }).getResult().then(HH => {
                  if (!0 === HH) {
                    (0, hH.i)(GH);
                    const HH = (0, XH.c)(rH.gameNameWithVariation, rH.lobbyName);
                    "low" === sH ? IH(HH) : (0, MH.G)(HH);
                  }
                }), (0, eH.getBloxd)() && (0, eH.getBloxd)().client ? (0, eH.getBloxd)().client.leaveGame() : (eH.singletons.connectedWebsocketUrl = null, (0, eH.RY)() && (0, eH.RY)().SI(!0), (0, NH.E)()), IH(-1);
              } else {
                CH.current = EH.getValue().gameNameWithVariation, cH.current = EH.getValue().lobbyName;
                const HH = (0, XH.c)(CH.current, EH.getValue().lobbyName);
                IH(HH);
              }
            }).catch(EH => {
              (0, ZH.b)(EH);
              AH.d.showPromptPopup({
                icon: "face-dizzy",
                title: "Unexpected Error",
                subtitle: (0, BH.jsxs)(BH.Fragment, {
                  children: [HH("homePage:pleaseCopyError"), (0, BH.jsx)("div", {
                    style: {
                      fontSize: "0.9rem",
                      paddingTop: "1rem"
                    },
                    children: (0, BH.jsx)(DH.g, {
                      errorString: EH.stack
                    })
                  })]
                }),
                confirmText: HH("general:tryAgain"),
                cancelText: HH("general:cancel")
              }).getResult().then(HH => {
                !0 === HH && (0, MH.G)((0, XH.c)(rH.gameNameWithVariation, rH.lobbyName));
              }), IH(-1);
            }) : IH(-1);
          });
        }
      }, [OH, EH.search]), (0, sH.IY)(() => {
        if (LH.disableFullscreen && (0, iI.b)() ? (0, iI.g)() : !LH.disableFullscreen && (0, iI.d)() && (0, iI.k)(), "inGame" === qH) {
          const HH = hH.e.get("isTouchScreen") ? hH.e.get("clientEscMenuOptions").touchscreenSensitivity : hH.e.get("clientEscMenuOptions").mouseSensitivity;
          FH.b.setMultiplierType("baseSensitivity", HH);
        }
      }, [qH, LH]), (0, sH.IY)(() => {
        "inGame" !== qH && hH.e.set({
          openInGameMenuName: null
        });
      }, [qH]), (0, BH.jsxs)(BH.Fragment, {
        children: [(0, BH.jsx)(DH.w, {
          gameNameWithVariation: rH.gameNameWithVariation
        }), "inGame" === qH && (0, BH.jsx)(TH.InGameUi, {})]
      });
    }
  },
  2090: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => GH
    });
    var RH = EH(17),
      hH = EH(647);
    const TH = ["arcadeMode", "backrooms", "bedwars", "bingo", "bridge", "bridgeBattle", "classic", "clutch", "containmentBreach", "cooking", "coreDefenders", "doodle", "dressUp", "duels", "eatToGrow", "eviltower", "extraction", "fishing", "frontline", "goalRush", "greenville", "heroesvbrainrots", "hideseek", "infection", "knockout", "lastStand", "luckyBattlegrounds", "luckyTowers", "murderMystery", "naturalDisaster", "ninetyNineNights", "oneBlock", "paintball", "parkour", "pirates", "plots", "pvpCiv", "rocketParkour", "rocketSpleef", "schematicTester", "shooting", "simonSays", "skyIslands", "skywars", "testGym", "tsunami"];
    var sH = EH(494),
      eH = EH(71);
    function GH(HH) {
      return HH = function (HH, IH) {
        var EH;
        const hH = new URLSearchParams(IH),
          TH = hH.get("lobby"),
          sH = hH.get("vm"),
          eH = null !== (EH = TH) && void 0 !== EH ? EH : HH.lobbyName,
          GH = null !== sH && void 0 !== sH ? sH : HH.directJoinVmUrl;
        if (eH === HH.lobbyName && GH === HH.directJoinVmUrl) return HH;
        return (0, RH.b)((0, RH.b)({}, HH), {}, {
          lobbyName: eH,
          directJoinVmUrl: GH
        });
      }(HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), HH = function (HH) {
        if ((0, eH.p)(HH.directJoinVmUrl)) return HH;
        const IH = (0, hH.Z)(HH.directJoinVmUrl);
        null === IH && (HH.directJoinVmUrl = void 0);
        return HH;
      }(HH = function (HH) {
        if ((0, eH.p)(HH.gameNameWithVariation) || (0, hH.G)(HH.gameNameWithVariation)) return HH;
        for (const IH of TH) {
          if (IH.toLowerCase() === HH.gameNameWithVariation.toLowerCase()) {
            HH.gameNameWithVariation = IH;
            break;
          }
          if (sH.b[IH].urlGameNameWithoutVariation === HH.gameNameWithVariation) {
            HH.gameNameWithVariation = IH;
            break;
          }
          if (sH.b[IH].urlGameNameWithoutVariation && HH.gameNameWithVariation.startsWith("".concat(sH.b[IH].urlGameNameWithoutVariation, "_"))) {
            const EH = HH.gameNameWithVariation.slice(sH.b[IH].urlGameNameWithoutVariation.length),
              RH = "".concat(IH).concat(EH);
            if ((0, hH.G)(RH)) {
              HH.gameNameWithVariation = RH;
              break;
            }
          }
        }
        return HH;
      }(HH));
    }
  },
  2076: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => sH
    });
    var RH = EH(2082),
      hH = EH(789);
    const TH = new RH.i(function () {
        const HH = TH.getTotalMultipliedVal(),
          IH = (0, hH.RY)().camera;
        IH.IE = HH, IH.EE = HH;
      }),
      sH = TH;
  }
};
//# sourceMappingURL=ug4nu.7.3cee4a82.chunk.js.map
//# debugId=9f6a4e0c-c05b-52c4-853a-f50b022d4b47