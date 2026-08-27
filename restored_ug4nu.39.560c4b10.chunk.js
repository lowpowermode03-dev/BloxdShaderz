!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5b4bca40-56fc-5298-b994-bd8aa2ad656c");
  } catch (e) {}
}();
export const id = 39;
export const ids = [39];
export const modules = {
  21460: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => hH
    });
    const RH = [{
      threshold: 10n ** 180n,
      suffix: "NoQig"
    }, {
      threshold: 10n ** 177n,
      suffix: "OcQig"
    }, {
      threshold: 10n ** 174n,
      suffix: "SpQig"
    }, {
      threshold: 10n ** 171n,
      suffix: "SQig"
    }, {
      threshold: 10n ** 168n,
      suffix: "QiQig"
    }, {
      threshold: 10n ** 165n,
      suffix: "QaQig"
    }, {
      threshold: 10n ** 162n,
      suffix: "TQig"
    }, {
      threshold: 10n ** 159n,
      suffix: "DQig"
    }, {
      threshold: 10n ** 156n,
      suffix: "UQig"
    }, {
      threshold: 10n ** 153n,
      suffix: "Qig"
    }, {
      threshold: 10n ** 150n,
      suffix: "NoQag"
    }, {
      threshold: 10n ** 147n,
      suffix: "OcQag"
    }, {
      threshold: 10n ** 144n,
      suffix: "SpQag"
    }, {
      threshold: 10n ** 141n,
      suffix: "SQag"
    }, {
      threshold: 10n ** 138n,
      suffix: "QiQag"
    }, {
      threshold: 10n ** 135n,
      suffix: "QaQag"
    }, {
      threshold: 10n ** 132n,
      suffix: "TQag"
    }, {
      threshold: 10n ** 129n,
      suffix: "DQag"
    }, {
      threshold: 10n ** 126n,
      suffix: "UQag"
    }, {
      threshold: 10n ** 123n,
      suffix: "Qag"
    }, {
      threshold: 10n ** 120n,
      suffix: "NoTg"
    }, {
      threshold: 10n ** 117n,
      suffix: "OcTg"
    }, {
      threshold: 10n ** 114n,
      suffix: "SpTg"
    }, {
      threshold: 10n ** 111n,
      suffix: "STg"
    }, {
      threshold: 10n ** 108n,
      suffix: "QiTg"
    }, {
      threshold: 10n ** 105n,
      suffix: "QaTg"
    }, {
      threshold: 10n ** 102n,
      suffix: "TTg"
    }, {
      threshold: 10n ** 99n,
      suffix: "DTg"
    }, {
      threshold: 10n ** 96n,
      suffix: "UTg"
    }, {
      threshold: 10n ** 93n,
      suffix: "Tg"
    }, {
      threshold: 10n ** 90n,
      suffix: "NoVg"
    }, {
      threshold: 10n ** 87n,
      suffix: "OcVg"
    }, {
      threshold: 10n ** 84n,
      suffix: "SpVg"
    }, {
      threshold: 10n ** 81n,
      suffix: "SVg"
    }, {
      threshold: 10n ** 78n,
      suffix: "QiVg"
    }, {
      threshold: 10n ** 75n,
      suffix: "QaVg"
    }, {
      threshold: 10n ** 72n,
      suffix: "TVg"
    }, {
      threshold: 10n ** 69n,
      suffix: "DVg"
    }, {
      threshold: 10n ** 66n,
      suffix: "UVg"
    }, {
      threshold: 10n ** 63n,
      suffix: "Vg"
    }, {
      threshold: 10n ** 60n,
      suffix: "NoD"
    }, {
      threshold: 10n ** 57n,
      suffix: "OcD"
    }, {
      threshold: 10n ** 54n,
      suffix: "SpD"
    }, {
      threshold: 10n ** 51n,
      suffix: "SD"
    }, {
      threshold: 10n ** 48n,
      suffix: "QiD"
    }, {
      threshold: 10n ** 45n,
      suffix: "QaD"
    }, {
      threshold: 10n ** 42n,
      suffix: "TD"
    }, {
      threshold: 10n ** 39n,
      suffix: "DD"
    }, {
      threshold: 10n ** 36n,
      suffix: "UD"
    }, {
      threshold: 10n ** 33n,
      suffix: "D"
    }, {
      threshold: 10n ** 30n,
      suffix: "No"
    }, {
      threshold: 10n ** 27n,
      suffix: "Oc"
    }, {
      threshold: 10n ** 24n,
      suffix: "Sep"
    }, {
      threshold: 10n ** 21n,
      suffix: "S"
    }, {
      threshold: 10n ** 18n,
      suffix: "Qi"
    }, {
      threshold: 10n ** 15n,
      suffix: "Qa"
    }, {
      threshold: 10n ** 12n,
      suffix: "T"
    }, {
      threshold: 10n ** 9n,
      suffix: "B"
    }, {
      threshold: 10n ** 6n,
      suffix: "M"
    }, {
      threshold: 1000n,
      suffix: "K"
    }];
    function hH(HH) {
      let IH,
        EH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof HH) {
        if (!Number.isFinite(HH)) return "0";
        if (Math.abs(HH) < 100) {
          const IH = HH < 0 ? "-" : "",
            EH = Math.abs(HH);
          return EH >= 10 ? "".concat(IH).concat(EH.toFixed(1).replace(/\.0$/, "")) : "".concat(IH).concat(EH.toFixed(2).replace(/\.?0+$/, ""));
        }
        IH = BigInt(Math.floor(HH));
      } else IH = HH;
      const hH = IH < 0n ? -IH : IH,
        TH = IH < 0n ? "-" : "",
        sH = hH.toString();
      if (sH.length <= EH) return "".concat(TH).concat(sH);
      const eH = 3 * Math.floor((sH.length - 1) / 3);
      if (eH < 3) return "".concat(TH).concat(sH);
      if (eH > 3 * RH.length) {
        const HH = sH[0],
          IH = sH.slice(1, 3).replace(/0+$/, "");
        return "".concat(TH).concat(IH ? "".concat(HH, ".").concat(IH) : HH, "e").concat(sH.length - 1);
      }
      const {
          threshold: GH,
          suffix: AH
        } = RH[RH.length - eH / 3],
        VH = hH / GH,
        YH = Number(1000n * (hH % GH) / GH),
        QH = Number(VH) + YH / 1e3;
      let JH;
      return JH = QH >= 100 ? Math.floor(QH).toString() : QH >= 10 ? QH.toFixed(1).replace(/\.0$/, "") : QH.toFixed(2).replace(/\.?0+$/, ""), "".concat(TH).concat(JH).concat(AH);
    }
    RH.map(HH => {
      let {
        threshold: IH,
        suffix: EH
      } = HH;
      return {
        threshold: Number(IH),
        suffix: EH
      };
    }).filter(HH => {
      let {
        threshold: IH
      } = HH;
      return Number.isFinite(IH);
    });
  },
  21456: (HH, IH, EH) => {
    function RH(HH, IH) {
      return !HH.hidden && (IH || !HH.isRewardedAd);
    }
    function hH(HH) {
      return "object" === typeof HH ? HH.option : HH;
    }
    function TH(HH, IH) {
      var EH;
      if ("dropdown" === (null === (EH = HH.userInput) || void 0 === EH ? void 0 : EH.type) && "object" === typeof HH.userInput.dropdownOptions[0]) {
        for (const EH of HH.userInput.dropdownOptions) if (hH(EH) === IH) return "object" === typeof EH ? EH.cost : HH.cost;
        console.error("Didn't find matching option for dropdown item. Item:", HH, "input:", IH);
      }
      return HH.cost;
    }
    EH.d(IH, {
      b: () => TH,
      d: () => hH,
      f: () => RH
    });
  },
  21445: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => TH
    });
    var RH = EH(204),
      hH = EH(789);
    function TH(HH, IH, EH) {
      const TH = Object.entries(IH).sort((HH, IH) => IH[1] - HH[1]),
        sH = (0, RH.db)(HH);
      sH.push(HH ? "\n\n" : "\n");
      for (const [hH, OH] of TH) {
        var eH, GH, AH;
        const HH = null !== (eH = null === EH || void 0 === EH || null === (GH = EH[hH]) || void 0 === GH ? void 0 : GH.icon) && void 0 !== eH ? eH : "".concat(hH, " Enchantment");
        sH.push({
          icon: HH,
          style: {
            fontSize: "1.5rem"
          }
        }), sH.push({
          str: "".concat(hH, " ").concat(null !== (AH = (0, RH.Q)(OH)) && void 0 !== AH ? AH : OH, "\n")
        });
      }
      sH.push({
        str: "\n"
      });
      for (const [RH, OH] of TH) {
        var VH, YH, QH, JH;
        const HH = null !== (VH = null === EH || void 0 === EH || null === (YH = EH[RH]) || void 0 === YH ? void 0 : YH.icon) && void 0 !== VH ? VH : "".concat(RH, " Enchantment"),
          IH = null !== (QH = null === EH || void 0 === EH || null === (JH = EH[RH]) || void 0 === JH ? void 0 : JH.description) && void 0 !== QH ? QH : (0, hH.getBloxd)().enchantingManager.getDescription(RH);
        sH.push({
          icon: HH,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), sH.push({
          str: IH,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), sH.push({
          str: "\n"
        });
      }
      return sH;
    }
  },
  21452: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => OH,
      e: () => QH,
      g: () => YH,
      i: () => JH,
      l: () => GH,
      n: () => VH,
      q: () => AH,
      u: () => rH
    });
    var RH = EH(71),
      hH = EH(789),
      TH = EH(204),
      sH = EH(1590),
      eH = EH(21445);
    function GH(HH) {
      return 0 === HH.button || void 0 === HH.button;
    }
    function AH(HH) {
      return !!HH.shiftKey;
    }
    function VH(HH) {
      return "touches" in HH || "touch" === HH.pointerType || "pen" === HH.pointerType;
    }
    function YH(HH) {
      var IH, EH, GH, AH, VH, YH, QH, JH, OH;
      const rH = (0, hH.RY)(),
        FH = HH.attributes,
        MH = (0, hH.getBloxd)().getMetaInfo(HH.name).rootName,
        NH = null !== (IH = null !== (EH = FH.customDisplayName) && void 0 !== EH ? EH : (0, hH.getBloxd)().getItemStat(rH.ie, HH.name, "displayName")) && void 0 !== IH ? IH : (0, hH.getBloxd)().getItemStat(rH.ie, MH, "displayName");
      let iI = NH;
      const DH = null === (GH = FH.customAttributes) || void 0 === GH ? void 0 : GH.enchantmentTier;
      DH && (iI = (0, TH.db)(NH, {
        colour: TH.cb[DH]
      }));
      const PH = null !== (AH = null !== (VH = null !== (YH = FH.customDescription) && void 0 !== YH ? YH : (0, hH.getBloxd)().getItemStat(rH.ie, HH.name, "description")) && void 0 !== VH ? VH : (0, hH.getBloxd)().getItemStat(rH.ie, MH, "description")) && void 0 !== AH ? AH : "";
      let XH = PH;
      if (null !== (QH = FH.customAttributes) && void 0 !== QH && QH.enchantments) XH = (0, eH.b)(PH, FH.customAttributes.enchantments, FH.customAttributes.enchantmentData);else if ((0, hH.getBloxd)().enchantingManager.getPossibleEnchantments((0, hH.RY)().ie, MH).length > 0) XH = (0, TH.db)(PH), XH.push({
        str: "\n"
      }), XH.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });else if (null !== (JH = FH.customAttributes) && void 0 !== JH && JH.mobSettings) {
        var mI, ZH;
        const HH = FH.customAttributes.mobSettings;
        var qH, LH;
        if (XH = [], (0, RH.p)(FH.customAttributes.health) || (XH.push({
          str: "\n"
        }), XH.push({
          icon: "Health",
          style: {
            fontSize: "1.5em"
          }
        }), XH.push({
          str: " "
        }), XH.push({
          str: FH.customAttributes.health.toString()
        }), (0, RH.p)(HH.maxHealth) || (XH.push({
          str: "/"
        }), XH.push({
          str: HH.maxHealth.toString()
        }))), !(0, RH.p)(HH.attackDamage) && HH.attackDamage > 0 && (XH.push({
          str: "\n"
        }), XH.push({
          icon: "Iron Sword",
          style: {
            fontSize: "1.5em"
          }
        }), XH.push({
          str: " "
        }), XH.push({
          str: HH.attackDamage.toString()
        })), !(0, RH.p)(HH.secondaryAttackDamage) && HH.secondaryAttackDamage > 0 && (XH.push({
          str: "\n"
        }), XH.push({
          icon: "Stone Crossbow",
          style: {
            fontSize: "1.5em"
          }
        }), XH.push({
          str: " "
        }), XH.push({
          str: HH.secondaryAttackDamage.toString()
        })), (0, RH.p)(HH.baseRunningSpeed) || (XH.push({
          str: "\n"
        }), XH.push({
          icon: "Speed",
          style: {
            fontSize: "1.5em"
          }
        }), XH.push({
          str: " "
        }), XH.push({
          str: HH.baseRunningSpeed.toFixed(2)
        })), "Saddled" === HH.metaInfo) XH.push({
          str: "\n"
        }), XH.push({
          str: {
            translationKey: "general:has"
          }
        }), XH.push({
          str: " "
        }), XH.push({
          icon: null !== (qH = null === (LH = HH.tameInfo) || void 0 === LH ? void 0 : LH.saddleItemName) && void 0 !== qH ? qH : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (XH.push({
          str: "\n"
        }), XH.push({
          str: "\n"
        }), HH.petInfo && null !== (mI = HH.tameInfo) && void 0 !== mI && mI.supportsFriendship) {
          const IH = sH.b.getIconsFromFriendshipPoints(HH.petInfo.friendshipPoints);
          for (const HH of IH) XH.push({
            icon: HH,
            style: {
              fontSize: "1.5em"
            }
          });
          XH.push({
            str: "\n"
          });
          const EH = sH.b.getMobHungerLevel(HH.petInfo.lastFedAt);
          for (const HH of sH.b.hungerLevelIcons[EH]) XH.push({
            icon: HH,
            style: {
              fontSize: "1.5em"
            }
          });
          XH.push({
            str: " "
          }), XH.push({
            str: sH.b.hungerLevelTranslations[EH],
            style: {
              fontWeight: "bolder"
            }
          });
        }
        if (HH.tameInfo && null !== (ZH = HH.tameInfo) && void 0 !== ZH && ZH.supportsFriendship) {
          var gH, yH;
          let IH = null !== (gH = HH.tameInfo.likedFoods) && void 0 !== gH ? gH : [];
          XH.push({
            str: "\n"
          }), XH.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: sH.b.feedTextColours[sH.b.MobFoodType.Superliked]
            }
          }), XH.push({
            str: " "
          }), null !== (yH = HH.petInfo) && void 0 !== yH && yH.superlikedFoodKnown ? (XH.push({
            icon: HH.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), IH = IH.filter(IH => IH !== HH.petInfo.superlikedFood)) : XH.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), XH.push({
            str: "\n"
          }), XH.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: sH.b.feedTextColours[sH.b.MobFoodType.Liked]
            }
          }), XH.push({
            str: " "
          });
          for (const HH of IH) XH.push({
            icon: HH,
            style: {
              fontSize: "1.5em"
            }
          });
          XH.push({
            str: "\n"
          }), XH.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: sH.b.feedTextColours[sH.b.MobFoodType.Neutral]
            }
          }), XH.push({
            str: " "
          });
          for (const EH of null !== (oH = HH.tameInfo.neutralFoods) && void 0 !== oH ? oH : []) {
            var oH;
            XH.push({
              icon: EH,
              style: {
                fontSize: "1.5em"
              }
            });
          }
          XH.push({
            str: "\n"
          }), XH.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: sH.b.feedTextColours[sH.b.MobFoodType.Disliked]
            }
          }), XH.push({
            str: " "
          });
          for (const EH of null !== (kI = HH.tameInfo.dislikedFoods) && void 0 !== kI ? kI : []) {
            var kI;
            XH.push({
              icon: EH,
              style: {
                fontSize: "1.5em"
              }
            });
          }
        }
        XH.length > 0 ? (XH.shift(), XH.unshift(...(0, TH.db)(PH))) : XH = (0, TH.db)(PH);
      }
      return {
        name: iI,
        desc: XH,
        fontStyle: null !== (OH = FH.customAttributes) && void 0 !== OH && OH.author ? "italic" : "normal"
      };
    }
    function QH(HH, IH) {
      const EH = (0, hH.RY)(),
        RH = (0, hH.getBloxd)(),
        sH = RH.getItemStat(EH.ie, HH, "displayName");
      let eH = RH.getItemStat(EH.ie, HH, "description");
      if ("recipeItem" === IH) {
        const IH = RH.craftingManager.getRecipesForPlayer(EH.ie)[HH];
        if (IH) {
          const HH = IH[0];
          if (HH) {
            eH ? (eH = (0, TH.db)(eH), eH.push({
              str: "\n"
            })) : eH = [], eH.push({
              str: "\n"
            }), eH.push({
              str: "Can be crafted from:\n"
            });
            for (const IH of HH.requires) {
              var GH;
              eH.push({
                icon: IH.items[0],
                style: {
                  fontSize: "1.5em"
                }
              }), eH.push({
                str: " "
              }), eH.push(...(0, TH.db)(null !== (GH = RH.getItemStat(EH.ie, IH.items[0], "displayName")) && void 0 !== GH ? GH : "")), eH.push({
                str: "\n"
              });
            }
          }
        }
      }
      return {
        name: sH,
        desc: eH,
        fontStyle: "normal"
      };
    }
    function JH(HH, IH, EH) {
      const RH = HH.getItemAtIdx(IH),
        TH = HH.getItemAtIdx(EH);
      if (!RH) return !1;
      const sH = hH.singletons.itemsClient[RH.name],
        eH = hH.singletons.itemsClient[TH.name],
        GH = sH.armourReduction,
        AH = eH.armourReduction;
      if (AH === GH) {
        var VH, YH, QH, JH;
        const HH = null !== (VH = null === (YH = RH.attributes.customAttributes) || void 0 === YH ? void 0 : YH.enchantmentTier) && void 0 !== VH ? VH : "Tier 0",
          IH = null !== (QH = null === (JH = TH.attributes.customAttributes) || void 0 === JH ? void 0 : JH.enchantmentTier) && void 0 !== QH ? QH : "Tier 0";
        return parseInt(HH.replace("Tier ", "")) >= parseInt(IH.replace("Tier ", ""));
      }
      return GH > AH;
    }
    function OH(HH) {
      let IH;
      if ("number" === typeof HH) {
        const EH = document.querySelector('[data-inven-idx="'.concat(HH, '"]'));
        if (!EH) return null;
        IH = EH.getBoundingClientRect();
      } else IH = HH.getBoundingClientRect();
      return {
        x: IH.left + IH.width / 2,
        y: IH.top + IH.height / 2
      };
    }
    function rH(HH) {
      return HH.aY.useInventory && HH.aY.useFullInventory && HH.PT.sQ(HH.ie);
    }
  },
  21428: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => JH,
      h: () => OH,
      j: () => QH
    });
    var RH = EH(968),
      hH = EH(57),
      TH = EH(926),
      sH = EH(578),
      eH = EH(797),
      GH = EH(789),
      AH = EH(93),
      VH = EH(938),
      YH = EH(557);
    function QH() {
      const HH = GH.singletons.discordContextAttemptedPlay;
      return null !== HH && GH.singletons.connectedLobbyName === HH.getLobbyName() ? HH.getLobbyPlayingString() : GH.singletons.connectedLobbyName;
    }
    function JH(HH) {
      let {
        show: IH,
        onClose: EH
      } = HH;
      const {
          t: RH
        } = (0, eH.q)(),
        [TH, JH] = (0, hH.HY)(null);
      return (0, hH.IY)(() => {
        (0, sH.G)(RH, GH.singletons.modeAttemptedPlay, GH.singletons.connectedLobbyName).then(HH => {
          JH(HH);
        });
      }, []), AH.f.canUseInviteLinks && (0, YH.jsx)(sH.s, {
        show: IH,
        close: EH,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, YH.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, YH.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, YH.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, YH.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === TH ? (0, YH.jsx)(VH.d, {}) : TH, (0, YH.jsx)("br", {}), "Lobby Name: ", QH(), (0, YH.jsx)("br", {}), (0, YH.jsx)("br", {}), (0, YH.jsx)("br", {}), (0, YH.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, YH.jsx)(OH, {})]
        })
      });
    }
    function OH() {
      const {
          t: HH
        } = (0, eH.q)(),
        [IH, EH] = (0, hH.HY)("Loading Link..."),
        [sH, GH] = (0, hH.HY)(0),
        [VH, QH] = (0, hH.useReducer)(HH => HH + 1, 0);
      return (0, hH.IY)(() => {
        let HH = !0;
        return (0, TH.v)().then(IH => {
          HH && EH(IH);
        }), () => {
          HH = !1;
        };
      }, []), (0, hH.IY)(() => {
        const HH = setTimeout(() => {
          QH();
        }, 1100);
        return () => {
          clearTimeout(HH);
        };
      }, [sH]), AH.f.canUseInviteLinks && (0, YH.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, YH.jsx)("div", {
          className: "InviteLinkInner",
          children: IH
        }), (0, YH.jsx)(RH.e, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(IH), GH(Date.now());
          },
          disabled: Date.now() - sH < 1e3,
          children: Date.now() - sH < 1e3 ? HH("general:copied") : HH("general:copy")
        })]
      });
    }
  },
  21439: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => VH
    });
    var RH = EH(57),
      hH = EH(546),
      TH = EH.n(hH),
      sH = EH(789),
      eH = EH(45),
      GH = EH(557);
    function AH(HH) {
      const IH = Math.floor(HH / 3600),
        EH = Math.floor(HH % 3600 / 60),
        RH = Math.floor(HH % 60),
        hH = "".concat(EH.toString().padStart(2, "0"), ":").concat(RH.toString().padStart(2, "0"));
      return IH > 0 ? "".concat(IH, ":").concat(hH) : hH;
    }
    const VH = (0, RH.memo)(function (HH) {
      var IH;
      let {
        className: EH
      } = HH;
      const hH = null === (IH = (0, sH.getBloxd)().client) || void 0 === IH ? void 0 : IH.gameRecorder,
        [VH, YH] = (0, RH.HY)(() => {
          var HH;
          return null !== (HH = null === hH || void 0 === hH ? void 0 : hH.getIsRecording()) && void 0 !== HH && HH;
        }),
        [QH, JH] = (0, RH.HY)(() => {
          var HH;
          return null !== (HH = null === hH || void 0 === hH ? void 0 : hH.getRecordingDurationSeconds()) && void 0 !== HH ? HH : 0;
        });
      return (0, eH.j)("gameRecorder|setRecording", HH => {
        YH(HH);
      }), (0, RH.IY)(() => {
        if (!VH) return;
        const HH = setInterval(() => {
          var HH;
          const IH = null === (HH = (0, sH.getBloxd)().client) || void 0 === HH ? void 0 : HH.gameRecorder;
          IH && JH(IH.getRecordingDurationSeconds());
        }, 250);
        return () => clearInterval(HH);
      }, [VH]), VH ? (0, GH.jsxs)("div", {
        className: TH()("RecordingIndicator", EH),
        children: [(0, GH.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, GH.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, GH.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: AH(QH)
        })]
      }) : null;
    });
  },
  21430: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => FH,
      f: () => iI,
      h: () => DH,
      j: () => PH
    });
    var RH = EH(546),
      hH = EH.n(RH),
      TH = EH(134),
      sH = EH(57),
      eH = EH(14),
      GH = EH(77),
      AH = EH(642),
      VH = EH(71),
      YH = EH(45),
      QH = EH(2004),
      JH = EH(21421),
      OH = EH(797),
      rH = EH(557);
    function FH(HH) {
      var IH, EH, RH, TH, GH;
      let {
        minChunkAddDist: AH,
        getValue: FH,
        onChange: NH,
        setApplySettingsCallback: PH
      } = HH;
      const {
          t: XH
        } = (0, OH.q)(),
        {
          clientEscMenuOptions: mI
        } = (0, eH.j)(["clientEscMenuOptions"]),
        ZH = (0, sH.useRef)(FH("showFog")),
        qH = (0, sH.useRef)(mI.antiAliasing),
        LH = (0, JH.d)("lightingOverride"),
        gH = !(0, VH.p)(LH);
      let yH = "settingsMenu:enableLighting";
      gH && (yH = LH ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const oH = (0, JH.d)("fogChunkDistanceOverride"),
        kI = !(0, VH.p)(oH),
        CH = kI ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog";
      return (0, rH.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, rH.jsx)(QH.f, {
          name: XH("settingsMenu:horizontalChunkLoadDistance"),
          min: AH[0],
          max: iI(AH[0]),
          step: 1,
          initValue: null !== (IH = FH("chunkHorizAddDist")) && void 0 !== IH ? IH : AH[0],
          onChange: HH => {
            !0 === FH("showFog") && HH < FH("fogChunkDistance") && NH("fogChunkDistance", HH), NH("chunkHorizAddDist", HH), YH.g.TY("updatedChunkLoadDist");
          },
          circleInfoText: XH("settingsMenu:chunkLoadDistanceInfo")
        }), (0, rH.jsx)(QH.f, {
          name: XH("settingsMenu:verticalChunkLoadDistance"),
          min: AH[1],
          max: DH(AH[1]),
          step: 1,
          initValue: null !== (EH = FH("chunkVertAddDist")) && void 0 !== EH ? EH : AH[1],
          onChange: HH => {
            NH("chunkVertAddDist", HH), YH.g.TY("updatedChunkLoadDist");
          },
          circleInfoText: XH("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, rH.jsx)(QH.c, {
          label: XH("settingsMenu:chunkFadeIn"),
          checked: mI.chunkFadeIn,
          onClick: HH => {
            eH.e.setClientEscMenuOptions({
              chunkFadeIn: HH
            });
          },
          circleInfoText: XH("settingsMenu:chunkFadeInInfo")
        }), (0, rH.jsx)(QH.c, {
          label: XH("settingsMenu:showChunkBorders"),
          checked: mI.showChunkBorders,
          onClick: HH => {
            eH.e.setClientEscMenuOptions({
              showChunkBorders: HH
            });
          },
          circleInfoText: XH("settingsMenu:showChunkBordersInfo")
        }), (0, rH.jsx)(QH.c, {
          label: XH(yH),
          checked: mI.enableLighting,
          onClick: HH => {
            eH.e.setClientEscMenuOptions({
              enableLighting: HH
            });
          },
          disabled: gH
        }), (0, rH.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, rH.jsx)(QH.c, {
            label: XH(CH),
            checked: mI.showFog,
            onClick: HH => {
              HH !== ZH.current ? PH(() => QH.g) : PH(null), eH.e.setClientEscMenuOptions({
                showFog: HH
              });
            },
            disabled: kI,
            className: hH()({
              SettingBoxWarning: !kI && !0 === mI.showFog && mI.fogChunkDistance > FH("chunkHorizAddDist")
            })
          }), (0, rH.jsx)(QH.f, {
            name: XH("settingsMenu:fogChunkDistance"),
            min: AH[0],
            max: MH,
            step: 1,
            initValue: null !== (RH = mI.fogChunkDistance) && void 0 !== RH ? RH : AH[0],
            onChange: HH => {
              eH.e.setClientEscMenuOptions({
                fogChunkDistance: HH
              }), YH.g.TY("fogChunkDistanceChanged", HH);
            },
            circleInfoText: XH("settingsMenu:fogChunkDistanceInfo"),
            className: hH()({
              SettingBoxDisabled: kI || !1 === FH("showFog"),
              SettingBoxWarning: !kI && !0 === FH("showFog") && FH("fogChunkDistance") > FH("chunkHorizAddDist")
            })
          }), !kI && !0 === FH("showFog") && FH("fogChunkDistance") > FH("chunkHorizAddDist") && (0, rH.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: XH("settingsMenu:fogChunkDistanceInfo")
          })]
        }), (0, rH.jsx)(QH.c, {
          label: XH("settingsMenu:disableBlockTextureAtlas"),
          checked: mI.disableTexAtlas,
          onClick: HH => {
            eH.e.setClientEscMenuOptions({
              disableTexAtlas: HH
            });
          },
          circleInfoText: XH("settingsMenu:disableBlockTextureAtlasInfo")
        }), (0, rH.jsx)(QH.f, {
          name: XH("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: null !== (TH = mI.cameraFOV) && void 0 !== TH ? TH : 120,
          onChange: HH => {
            eH.e.setClientEscMenuOptions({
              cameraFOV: HH
            });
          }
        }), (0, rH.jsx)(QH.c, {
          label: XH("settingsMenu:disableViewBobbing"),
          checked: mI.disableBobbing,
          onClick: HH => {
            eH.e.setClientEscMenuOptions({
              disableBobbing: HH
            });
          },
          circleInfoText: XH("settingsMenu:disableViewBobbingInfo")
        }), (0, rH.jsx)(QH.c, {
          label: XH("settingsMenu:antiAliasing"),
          checked: mI.antiAliasing,
          onClick: HH => {
            HH !== qH.current ? PH(() => QH.g) : PH(null), eH.e.setClientEscMenuOptions({
              antiAliasing: HH
            });
          },
          circleInfoText: XH("settingsMenu:antiAliasingInfo")
        }), (0, rH.jsx)(QH.f, {
          name: XH("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (GH = mI.pixelScale) && void 0 !== GH ? GH : 1,
          onChange: HH => {
            eH.e.setClientEscMenuOptions({
              pixelScale: HH
            });
          },
          circleInfoText: XH("settingsMenu:pixelScaleInfo"),
          format: HH => "".concat(HH, "x")
        }), (0, rH.jsx)(QH.c, {
          label: XH("settingsMenu:pixelSmoothing"),
          checked: mI.pixelSmoothing,
          onClick: HH => {
            eH.e.setClientEscMenuOptions({
              pixelSmoothing: HH
            });
          },
          circleInfoText: XH("settingsMenu:pixelSmoothingInfo")
        })]
      });
    }
    const MH = 10,
      NH = 3;
    function iI(HH) {
      return Math.max(MH, HH);
    }
    function DH(HH) {
      return Math.max(NH, HH);
    }
    function PH() {
      var HH, IH;
      let EH = null !== (HH = GH.j.getItem("chunkHorizAddDist")) && void 0 !== HH ? HH : TH.e.defaultChunkHorizAddDistance,
        RH = null !== (IH = GH.j.getItem("chunkVertAddDist")) && void 0 !== IH ? IH : TH.e.defaultChunkVertAddDistance;
      return EH = (0, AH.g)(EH, 2, MH), RH = (0, AH.g)(RH, 2, NH), [EH, RH];
    }
  },
  21421: (HH, IH, EH) => {
    EH.d(IH, {
      c: () => VH,
      d: () => eH,
      f: () => GH
    });
    var RH = EH(204),
      hH = EH(45),
      TH = EH(789),
      sH = EH(14);
    function eH(HH) {
      var IH, EH, RH;
      const {
          gameState: eH
        } = (0, sH.j)(["gameState"]),
        GH = (0, hH.k)("serverOption|".concat(HH), null !== (IH = null === (EH = (0, TH.RY)()) || void 0 === EH || null === (RH = EH.aY) || void 0 === RH ? void 0 : RH[HH]) && void 0 !== IH ? IH : null);
      return "inGame" === eH ? GH : null;
    }
    function GH(HH) {
      const {
        content: IH,
        showBackground: EH
      } = (0, RH.Gc)(eH(HH));
      return {
        content: IH,
        showBackground: EH,
        hasText: !(0, RH.Zb)(IH)
      };
    }
    const AH = [];
    function VH() {
      const HH = eH("headerChips");
      return HH && 0 !== HH.length ? HH.map(HH => {
        const {
          content: IH,
          showBackground: EH
        } = (0, RH.Gc)(HH);
        return {
          content: IH,
          showBackground: EH,
          hasText: !(0, RH.Zb)(IH)
        };
      }) : AH;
    }
  },
  21443: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => QH,
      g: () => GH,
      k: () => YH,
      o: () => AH
    });
    var RH = EH(57),
      hH = EH(45),
      TH = EH(789);
    let sH = !1;
    function eH() {
      hH.g.TY("replayViewer|stateChanged");
    }
    function GH() {
      return sH;
    }
    function AH() {
      const [HH, IH] = (0, RH.HY)(GH());
      return (0, hH.j)("replayViewer|stateChanged", () => {
        IH(GH());
      }), HH;
    }
    function VH() {
      var HH;
      const IH = (0, TH.getBloxd)().client;
      if (!IH || null !== (HH = IH.gameReplayer) && void 0 !== HH && HH.isReplayMode()) return;
      const EH = IH.gameRecorder;
      EH.getClippingWanted() && EH.setClippingEnabled(!0);
    }
    function YH(HH) {
      sH !== HH && (sH = HH, HH ? function () {
        var HH, IH;
        null === (HH = (0, TH.getBloxd)().client) || void 0 === HH || null === (IH = HH.gameRecorder) || void 0 === IH || IH.stopClippingBuffer();
      }() : VH(), eH());
    }
    function QH() {
      sH && (sH = !1, VH(), eH());
    }
  }
};
//# sourceMappingURL=ug4nu.39.560c4b10.chunk.js.map
//# debugId=5b4bca40-56fc-5298-b994-bd8aa2ad656c