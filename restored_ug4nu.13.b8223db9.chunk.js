!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6467d6f7-d6c3-5af7-adef-49f9deb50f94");
  } catch (e) {}
}();
export const id = 13;
export const ids = [13];
export const modules = {
  21418: (HH, IH, EH) => {
    EH.r(IH), EH.d(IH, {
      EverythingMenu: () => vI
    });
    var RH = EH(17),
      hH = EH(57),
      TH = EH(578),
      sH = EH(21421),
      eH = EH(583),
      GH = EH(968),
      AH = EH(979),
      VH = EH(954),
      YH = EH(534),
      QH = EH(93),
      JH = EH(797),
      OH = EH(789),
      rH = EH(1616),
      FH = EH(1621),
      MH = EH(938),
      NH = EH(2004),
      iI = EH(14),
      DH = EH(998),
      PH = EH(557);
    function XH(HH) {
      let {
        setApplySettingsCallback: IH
      } = HH;
      const {
          clientEscMenuOptions: RH
        } = (0, iI.j)(["clientEscMenuOptions"]),
        [TH, sH] = (0, hH.HY)(!1),
        [eH, VH] = (0, hH.HY)(!1),
        [YH, QH] = (0, hH.HY)(6400),
        [JH, rH] = (0, hH.HY)(3600),
        [FH, XH] = (0, hH.HY)(!1),
        [mI, ZH] = (0, hH.HY)(!1);
      function qH(HH) {
        try {
          const IH = (0, OH.RY)(),
            RH = IH.jI.YY,
            hH = IH.jI.kh(),
            TH = YH,
            eH = JH;
          Promise.all([Promise.all([EH.e(48), EH.e(49), EH.e(47)]).then(EH.bind(EH, 24067)), Promise.all([EH.e(46), EH.e(48), EH.e(44), EH.e(49), EH.e(53), EH.e(51), EH.e(54), EH.e(52), EH.e(59)]).then(EH.bind(EH, 24069)), Promise.all([EH.e(46), EH.e(48), EH.e(44), EH.e(49), EH.e(53), EH.e(51), EH.e(55), EH.e(54), EH.e(58), EH.e(69)]).then(EH.bind(EH, 24083)), Promise.all([EH.e(48), EH.e(53), EH.e(70)]).then(EH.bind(EH, 24086)), Promise.all([EH.e(44), EH.e(45)]).then(EH.bind(EH, 22557))]).then(IH => {
            const {
                Tools: GH
              } = IH[0],
              {
                ShaderMaterial: AH
              } = IH[2],
              {
                Effect: YH
              } = IH[3],
              {
                Rh: QH
              } = IH[4],
              JH = new Map(),
              OH = hH.meshes.filter(HH => HH.material);
            function rH() {
              OH.forEach(HH => {
                const IH = JH.get(HH);
                IH && (HH.material = IH);
              });
            }
            if (FH) {
              const HH = [],
                IH = [];
              OH.forEach(EH => {
                const RH = EH.name.toLowerCase(),
                  TH = EH.getBoundingInfo().boundingBox.center,
                  sH = hH.activeCamera.position.subtract(TH).length();
                RH.includes("sky") || RH.includes("background") || RH.includes("environment") || sH > 1e3 ? IH.push(EH) : HH.push(EH);
              });
              const EH = "\n\t\t\t\t\t\t\tattribute vec3 position;\n\t\t\t\t\t\t\tattribute vec3 normal;\n\t\t\t\t\t\t\tuniform mat4 worldViewProjection;\n\t\t\t\t\t\t\tuniform mat4 world;\n\t\t\t\t\t\t\tvarying mediump vec3 vNormal;\n\n\t\t\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t\t\tgl_Position = worldViewProjection * vec4(position, 1.0);\n\t\t\t\t\t\t\t\tvNormal = normalize((world * vec4(normal, 0.0)).xyz);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t",
                RH = "\n\t\t\t\t\t\t\tvarying mediump vec3 vNormal;\n\n\t\t\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t\t\t// Convert normal to color (absolute values mapped to 0-1 range)\n\t\t\t\t\t\t\t\tvec3 normalColor = abs(vNormal);\n\t\t\t\t\t\t\t\tgl_FragColor = vec4(normalColor, 1.0);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t";
              YH.ShadersStore.devtoolsNormalVertexShader = EH, YH.ShadersStore.devtoolsNormalFragmentShader = RH;
              const TH = new AH("normalMaterial", hH, "devtoolsNormal", {
                  attributes: ["position", "normal"],
                  uniforms: ["worldViewProjection", "world"]
                }),
                sH = "\n\t\t\t\t\t\t\tattribute vec3 position;\n\t\t\t\t\t\t\tuniform mat4 worldViewProjection;\n\n\t\t\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t\t\tgl_Position = worldViewProjection * vec4(position, 1.0);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t",
                eH = "\n\t\t\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t\t\tgl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); // Pure white\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t";
              YH.ShadersStore.devtoolsWhiteVertexShader = sH, YH.ShadersStore.devtoolsWhiteFragmentShader = eH;
              const GH = new AH("whiteMaterial", hH, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"]
              });
              HH.forEach(HH => {
                JH.set(HH, HH.material), HH.material = TH;
              }), IH.forEach(HH => {
                JH.set(HH, HH.material), HH.material = GH;
              });
            } else if (mI) {
              const HH = "\n\t\t\t\t\t\t\tattribute vec3 position;\n\t\t\t\t\t\t\tuniform mat4 worldViewProjection;\n\t\t\t\t\t\t\tuniform mat4 world;\n\t\t\t\t\t\t\tuniform vec3 cameraPosition;\n\t\t\t\t\t\t\tvarying mediump float vDepth;\n\n\t\t\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t\t\tgl_Position = worldViewProjection * vec4(position, 1.0);\n\t\t\t\t\t\t\t\tvec3 worldPosition = (world * vec4(position, 1.0)).xyz;\n\t\t\t\t\t\t\t\tvDepth = distance(worldPosition, cameraPosition);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t",
                IH = "\n\t\t\t\t\t\t\tvarying mediump float vDepth;\n\t\t\t\t\t\t\tuniform float maxDepth;\n\t\t\t\t\t\t\tuniform float minDepth;\n\n\t\t\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t\t\t// Normalize depth to 0-1 range using min-max normalization\n\t\t\t\t\t\t\t\tfloat normalizedDepth = clamp((vDepth - minDepth) / (maxDepth - minDepth), 0.0, 1.0);\n\t\t\t\t\t\t\t\tfloat gray = 1.0 - normalizedDepth; // white=near, black=far\n\t\t\t\t\t\t\t\tgl_FragColor = vec4(gray, gray, gray, 1.0);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t";
              YH.ShadersStore.devtoolsDepthVertexShader = HH, YH.ShadersStore.devtoolsDepthFragmentShader = IH;
              const EH = hH.activeCamera.position;
              let RH = 0,
                TH = 1 / 0;
              OH.forEach(HH => {
                const IH = HH.name.toLowerCase();
                if (IH.includes("sky") || IH.includes("background") || IH.includes("environment")) return;
                const hH = HH.getBoundingInfo().boundingBox.center,
                  sH = QH.TransformCoordinates(hH, HH.getWorldMatrix()),
                  eH = EH.subtract(sH).length();
                eH > 1e3 || (RH = Math.max(RH, eH), TH = Math.min(TH, eH));
              });
              const sH = RH - TH;
              RH += .1 * sH, TH = Math.max(0, TH - .1 * sH), console.log("Depth range: min=".concat(TH.toFixed(2), ", max=").concat(RH.toFixed(2), ", range=").concat(sH.toFixed(2))), sH < 1 && (RH = TH + 10);
              const eH = new AH("depthMaterial", hH, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"]
              });
              eH.setVector3("cameraPosition", EH), eH.setFloat("maxDepth", RH), eH.setFloat("minDepth", TH), OH.forEach(HH => {
                JH.set(HH, HH.material), HH.material = eH;
              });
            }
            if ("screenshot" === HH) {
              VH(!0);
              let HH = "bloxd-screenshot-".concat(TH, "x").concat(eH, "-").concat(Date.now(), ".png");
              FH ? HH = "bloxd-screenshot-normals-".concat(TH, "x").concat(eH, "-").concat(Date.now(), ".png") : mI && (HH = "bloxd-screenshot-depth-".concat(TH, "x").concat(eH, "-").concat(Date.now(), ".png")), GH.CreateScreenshotUsingRenderTarget(RH, hH.activeCamera, {
                width: TH,
                height: eH
              }, function (IH) {
                rH(), fetch(IH).then(function (HH) {
                  return HH.blob();
                }).then(function (IH) {
                  (0, DH.c)(IH, HH), VH(!1);
                }).catch(function (HH) {
                  console.error("Error processing screenshot:", HH), VH(!1);
                });
              }, "image/png");
            } else {
              sH(!0);
              let HH = "Th";
              FH ? HH = "scene-normals" : mI && (HH = "scene-depth"), FH || mI ? setTimeout(() => {
                (async function () {
                  const {
                      Gh: HH
                    } = await Promise.all([EH.e(46), EH.e(48), EH.e(44), EH.e(49), EH.e(53), EH.e(51), EH.e(55), EH.e(57)]).then(EH.bind(EH, 22472)),
                    {
                      Ah: IH
                    } = await Promise.all([EH.e(46), EH.e(56)]).then(EH.bind(EH, 22466)),
                    RH = [],
                    TH = [];
                  if (OH.forEach(HH => {
                    const IH = HH.name.toLowerCase(),
                      EH = HH.getBoundingInfo().boundingBox.center,
                      sH = hH.activeCamera.position.subtract(EH).length();
                    IH.includes("sky") || IH.includes("background") || IH.includes("environment") || sH > 1e3 ? TH.push(HH) : RH.push(HH);
                  }), FH) RH.forEach((EH, RH) => {
                    const TH = EH.getVerticesData("normal");
                    if (TH) {
                      const sH = [];
                      for (let HH = 0; HH < TH.length; HH += 3) {
                        const IH = Math.abs(TH[HH]),
                          EH = Math.abs(TH[HH + 1]),
                          RH = Math.abs(TH[HH + 2]);
                        sH.push(IH, EH, RH, 1);
                      }
                      EH.setVerticesData("color", sH);
                      const eH = new HH("vertexColorMat_".concat(RH), hH);
                      eH.disableLighting = !0, eH.emissiveColor = new IH(1, 1, 1), eH.specularColor = new IH(0, 0, 0), EH.material = eH;
                    }
                  }), TH.forEach((EH, RH) => {
                    const TH = EH.getVerticesData("position");
                    if (TH) {
                      const sH = [],
                        eH = TH.length / 3;
                      for (let HH = 0; HH < eH; HH++) sH.push(1, 1, 1, 1);
                      EH.setVerticesData("color", sH);
                      const GH = new HH("whiteMat_".concat(RH), hH);
                      GH.disableLighting = !0, GH.emissiveColor = new IH(1, 1, 1), GH.specularColor = new IH(0, 0, 0), EH.material = GH;
                    }
                  });else if (mI) {
                    const EH = hH.activeCamera.position;
                    let TH = 0,
                      sH = 1 / 0;
                    RH.forEach(HH => {
                      const IH = HH.getBoundingInfo().boundingBox.center,
                        RH = QH.TransformCoordinates(IH, HH.getWorldMatrix()),
                        hH = EH.subtract(RH).length();
                      TH = Math.max(TH, hH), sH = Math.min(sH, hH);
                    });
                    const eH = TH - sH;
                    TH += .1 * eH, sH = Math.max(0, sH - .1 * eH), eH < 1 && (TH = sH + 10), OH.forEach((RH, eH) => {
                      const GH = RH.name.toLowerCase(),
                        AH = RH.getBoundingInfo().boundingBox.center,
                        VH = QH.TransformCoordinates(AH, RH.getWorldMatrix()),
                        YH = EH.subtract(VH).length();
                      if (!(GH.includes("sky") || GH.includes("background") || GH.includes("environment") || YH > 1e3)) {
                        const EH = 1 - Math.min(Math.max((YH - sH) / (TH - sH), 0), 1),
                          GH = new HH("depthMat_".concat(eH), hH);
                        GH.diffuseColor = new IH(EH, EH, EH), GH.specularColor = new IH(0, 0, 0), RH.material = GH;
                      }
                    });
                  }
                })().then(() => Promise.all([EH.e(46), EH.e(48), EH.e(44), EH.e(49), EH.e(53), EH.e(51), EH.e(55), EH.e(54), EH.e(52), EH.e(57), EH.e(58), EH.e(50), EH.e(71), EH.e(73), EH.e(72), EH.e(66)]).then(EH.bind(EH, 24090))).then(IH => IH.GLTF2Export.GLBAsync(hH, HH)).then(HH => {
                  rH(), HH.downloadFiles(), sH(!1);
                }).catch(HH => {
                  console.error("Error exporting GLB:", HH), rH(), sH(!1);
                });
              }, 100) : Promise.all([EH.e(46), EH.e(48), EH.e(44), EH.e(49), EH.e(53), EH.e(51), EH.e(55), EH.e(54), EH.e(52), EH.e(57), EH.e(58), EH.e(50), EH.e(71), EH.e(73), EH.e(72), EH.e(66)]).then(EH.bind(EH, 24090)).then(IH => {
                IH.GLTF2Export.GLBAsync(hH, HH).then(HH => {
                  HH.downloadFiles(), sH(!1);
                }).catch(HH => {
                  console.error("Error exporting GLB:", HH), sH(!1);
                });
              }).catch(HH => {
                console.error("Error importing serializers:", HH), sH(!1);
              });
            }
          });
        } catch (IH) {
          console.error("Error taking screenshot:", IH), VH(!1);
        }
      }
      return (0, PH.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, PH.jsx)(NH.c, {
          label: "Disable Ambient Occlusion",
          checked: RH.disableAmbientOcclusion,
          onClick: HH => {
            iI.e.setClientEscMenuOptions({
              disableAmbientOcclusion: HH
            }), IH(() => NH.g);
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), (0, PH.jsx)(NH.f, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: RH.ambientLightIntensity,
          onChange: HH => {
            Promise.all([EH.e(46), EH.e(56)]).then(EH.bind(EH, 22466)).then(IH => {
              let {
                Ah: EH
              } = IH;
              (0, OH.RY)().jI.kh().ambientColor = EH.Qh([HH, HH, HH]), iI.e.setClientEscMenuOptions({
                ambientLightIntensity: HH
              });
            });
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), (0, PH.jsx)(NH.c, {
          label: "Show Weapon Raycasts",
          checked: RH.showWeaponRaycasts,
          onClick: HH => {
            iI.e.setClientEscMenuOptions({
              showWeaponRaycasts: HH
            });
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), (0, PH.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, PH.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, PH.jsx)(NH.c, {
              label: "Apply normal-based coloring",
              checked: FH,
              onClick: HH => {
                XH(HH), HH && ZH(!1);
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, PH.jsx)(NH.c, {
              label: "Apply depth-based coloring",
              checked: mI,
              onClick: HH => {
                ZH(HH), HH && XH(!1);
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, PH.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, PH.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, PH.jsx)(AH.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (HH, IH) => {
                  const EH = parseInt(HH) || 6400;
                  QH(EH);
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: YH.toString()
              }), (0, PH.jsx)("span", {
                children: "X"
              }), (0, PH.jsx)(AH.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (HH, IH) => {
                  const EH = parseInt(HH) || 3600;
                  rH(EH);
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: JH.toString()
              })]
            }), (0, PH.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, PH.jsxs)(GH.e, {
                onClick: () => {
                  qH("screenshot");
                },
                disabled: eH,
                children: [eH && (0, PH.jsx)(MH.d, {}), "Download Screenshot"]
              }), (0, PH.jsxs)(GH.e, {
                onClick: () => {
                  qH("glb");
                },
                disabled: TH,
                children: [TH && (0, PH.jsx)(MH.d, {}), "Download GLB"]
              })]
            })]
          }), (0, PH.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      });
    }
    var mI = EH(660),
      ZH = EH(946),
      qH = EH(111),
      LH = EH(829),
      gH = EH(625),
      yH = EH(926),
      oH = EH(1007),
      kI = EH(1636),
      CH = EH(809),
      cH = EH(1634),
      UH = EH(1056),
      WH = EH(204),
      BH = EH(1625),
      fH = EH(546),
      aH = EH.n(fH),
      nH = EH(639),
      pH = EH(2139);
    const dH = (0, hH.memo)(function (HH) {
      var IH, EH;
      let {
        showing: RH,
        inGame: sH
      } = HH;
      const {
          t: eH
        } = (0, JH.q)(),
        {
          reactNativeFeatureFlags: OH,
          hideSocialLocationFrom: rH
        } = (0, iI.j)(["reactNativeFeatureFlags", "hideSocialLocationFrom"]),
        FH = (0, TH.H)(),
        {
          userContext: DH,
          isUserContextUpdating: XH
        } = (0, TH.cb)(),
        [mI, yH] = (0, hH.HY)(null !== (IH = DH.getPlayerName()) && void 0 !== IH ? IH : ""),
        [oH, fH] = (0, hH.HY)(null),
        {
          xsollaItem: dH,
          xsollaWidgetInControl: lH,
          buySuperRank: KH
        } = (0, kI.h)(),
        [wH, zH] = (0, hH.HY)(!1),
        [tH, jI] = (0, hH.HY)(!1),
        vH = (0, hH.useRef)(null),
        bH = (0, hH.useRef)(null),
        [SH, xH] = (0, hH.HY)([]),
        [HI, II] = (0, hH.HY)(!0),
        [EI, RI] = (0, hH.HY)([]),
        [hI, TI] = (0, hH.HY)(!1),
        sI = DH.playerHasRank("youtuber"),
        eI = (0, hH.useCallback)(() => UH.b.getPlayerProfile(DH, DH.getPlayerName()).then(HH => {
          RI(HH.socialLinks);
        }).catch(HH => {
          console.error("Failed to refresh social links", HH);
        }), [DH]);
      (0, hH.IY)(() => (!0 === RH ? (clearInterval(bH.current), bH.current = setInterval(FH, 1e3)) : clearInterval(bH.current), () => {
        clearInterval(bH.current);
      }), [RH]), (0, hH.IY)(() => {
        var HH;
        yH(null !== (HH = DH.getPlayerName()) && void 0 !== HH ? HH : "");
      }, [DH]);
      const GI = (0, hH.useRef)({});
      function AI(HH) {
        HH !== mI && ((0, CH.j)(HH) ? (HH = (0, CH.m)(HH), fH("Only letters, numbers, and _")) : fH(null), vH.current && (vH.current.value = HH), yH(HH));
      }
      return (0, hH.IY)(() => {
        var HH;
        GI.current = JSON.parse((null === (HH = DH.superRankInfo) || void 0 === HH ? void 0 : HH.superRankHistory) || "{}");
      }, [null === (EH = DH.superRankInfo) || void 0 === EH ? void 0 : EH.superRankHistory]), (0, hH.IY)(() => {
        let HH = !1;
        return II(!0), (0, cH.e)(!0, DH).then(IH => {
          HH || xH(IH);
        }).catch(IH => {
          console.error("Failed to load login buttons:", IH), HH || xH([]);
        }).finally(() => {
          HH || II(!1);
        }), () => {
          HH = !0;
        };
      }, [DH]), (0, hH.IY)(() => {
        if (!RH || !sI || XH) return;
        let HH = !1;
        return TI(!0), RI([]), UH.b.getPlayerProfile(DH, DH.getPlayerName()).then(IH => {
          HH || RI(IH.socialLinks);
        }).catch(HH => {
          console.error("Failed to load social links", HH);
        }).finally(() => {
          HH || TI(!1);
        }), () => {
          HH = !0;
        };
      }, [RH, sI, XH, DH]), (0, PH.jsxs)("div", {
        className: aH()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: sH
        }),
        children: [sH && (0, PH.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: eH("settingsMenu:accountSettingsInGameWarning")
        }), (0, PH.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, PH.jsx)("div", {
            className: "AccountSettingsLabel",
            children: eH("homePage:discordNamePopupTitle")
          }), (0, PH.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            children: [QH.f.canChangeName && (0, PH.jsx)(AH.d, {
              className: "EnterName",
              placeholderText: eH("homePage:enterName"),
              maxLength: CH.h,
              defaultValue: mI,
              onValueChange: HH => {
                AI(HH);
              },
              forcedText: wH || !QH.f.canChangeName ? mI : null,
              blurOnEnter: !0,
              domRef: vH
            }), (0, PH.jsx)(GH.e, {
              className: "ChooseRandomNameButton",
              onClick: () => {
                AI((0, CH.d)());
              },
              children: (0, PH.jsx)(YH.e, {
                name: "dice",
                className: "ChooseRandomNameIcon"
              })
            }), !QH.f.canChangeName && (0, PH.jsx)("div", {
              className: "EnterName NoInput",
              children: (0, CH.b)(mI, !QH.f.canSeeRealPlayerNames)
            }), (0, PH.jsx)(GH.e, {
              className: "ChooseNameButton",
              disabled: wH || mI === DH.getPlayerName(),
              onClick: () => {
                mI.length < CH.i ? fH(eH("homePage:changeNameMinLengthError", {
                  length: CH.i
                })) : mI.length > CH.h ? fH(eH("homePage:changeNameMaxLengthError", {
                  length: CH.h
                })) : (zH(!0), fH(null), async function (HH, IH, EH, RH) {
                  const hH = await (0, LH.q)("".concat(gH.e.indexUrl, "/index/name/update"), {
                    name: HH
                  }, {
                    retries: 3
                  }, IH.getMetricsCookies()).catch(HH => (console.error("Bad response from the server when trying to update name:", HH), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  }));
                  hH.err ? (console.error("Error when trying to get with new name from DB", hH.err), RH(hH.err)) : !0 === hH.nameExists ? RH("Name is already taken") : EH(HH);
                }(mI, DH, HH => {
                  DH.setPlayerName(HH), zH(!1);
                }, HH => {
                  fH(HH), zH(!1);
                }));
              },
              children: eH("general:choose")
            })]
          }), oH && (0, PH.jsx)("div", {
            className: "ChooseAccNameError",
            children: oH
          })]
        }), (0, PH.jsx)(NH.c, {
          label: (() => {
            if ((0, nH.i)(rH)) {
              const {
                amt: HH,
                unit: IH
              } = (0, WH.X)(Date.now(), rH + nH.e);
              return "".concat(eH("settingsMenu:hideSocialLocation"), " (").concat(eH("general:timeLeft", {
                time: "".concat(HH, " ").concat(IH)
              }), ")");
            }
            return eH("settingsMenu:hideSocialLocation");
          })(),
          onClick: () => {
            const HH = !(0, nH.i)(rH);
            jI(!0), UH.b.setHideSocialLocation(DH, HH).then(() => {
              iI.e.set({
                hideSocialLocationFrom: HH ? Date.now() : null
              });
            }).finally(() => {
              jI(!1);
            });
          },
          checked: (0, nH.i)(rH),
          disabled: tH
        }), sI && (0, PH.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, PH.jsx)("div", {
            className: "AccountSettingsLabel",
            children: eH("settingsMenu:socialLinks")
          }), hI && (0, PH.jsx)(MH.d, {}), !hI && (0, PH.jsx)(pH.e, {
            socialLinks: EI,
            editable: !0,
            userContext: DH,
            onLinksUpdated: eI
          })]
        }), (0, PH.jsxs)("div", {
          className: "SettingBox",
          children: [(0, PH.jsx)("div", {
            className: "AccountSettingsLabel",
            children: eH("auth:login")
          }), HI && (0, PH.jsx)(MH.d, {}), !HI && 0 === SH.length && (0, PH.jsx)("div", {
            className: "NoLoginOptions",
            children: eH("auth:noLoginOptions")
          }), !HI && SH.length > 0 && "crazygames" !== qH.q && (0, PH.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: SH
          }), !HI && SH.length > 0 && "crazygames" === qH.q && (0, PH.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [SH[0], SH.length > 1 && (0, PH.jsxs)(PH.Fragment, {
              children: [(0, PH.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, PH.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: eH("auth:legacyLoginOptions")
                }), (0, PH.jsx)(VH.b, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: eH("auth:legacyLoginOptionsInfo")
                })]
              }), (0, PH.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: SH.slice(1)
              })]
            })]
          }), QH.f.useLogin && OH.useLogin && (null !== DH.loggedInInfo || DH.isLoggedIn()) && (0, PH.jsxs)(PH.Fragment, {
            children: [(0, PH.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, PH.jsx)(GH.D, {
              onClick: () => {
                (0, LH.k)();
              },
              className: "AccountSettingsSignedInButton",
              children: eH("auth:signOut")
            })]
          })]
        }), DH.playerHasRank("super") && (0, PH.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, PH.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, PH.jsx)(YH.e, {
              name: "bolt"
            }), eH("homePage:superRank"), (0, PH.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", eH("general:timeLeft", {
                time: (0, WH.Rb)(DH.superRankInfo)
              }), ")"]
            })]
          }), (0, PH.jsx)("ul", {
            className: "SuperRankHistory",
            children: Object.entries(GI.current).slice(0).reverse().map(HH => {
              var IH;
              let [EH, RH] = HH;
              const {
                  giftedBy: hH,
                  giftedTo: TH
                } = "object" === typeof RH ? RH : {},
                sH = null !== (IH = RH.days) && void 0 !== IH ? IH : RH;
              if (TH) return null;
              const {
                  unit: GH,
                  amt: AH
                } = (0, WH.X)(Number(EH), Date.now()),
                VH = eH("settingsMenu:".concat(GH, "Ago"), {
                  [GH]: AH
                });
              return (0, PH.jsxs)("li", {
                className: "SuperRankHistoryEntry",
                children: [VH, " you ", hH ? "received ".concat(sH, " days from ").concat(hH) : "purchased ".concat(sH, " days")]
              }, EH);
            })
          }), (0, PH.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, PH.jsxs)(GH.o, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                KH();
              },
              children: [lH && (0, PH.jsx)("div", {
                className: "AccountSettingsSuperRankProlongLoading",
                children: (0, PH.jsx)(MH.d, {})
              }), !dH && (0, PH.jsx)(MH.d, {}), dH && (0, PH.jsxs)(PH.Fragment, {
                children: [(0, PH.jsx)(YH.e, {
                  name: "bolt"
                }), eH("settingsMenu:getSuperRankAdditionalDays", {
                  days: dH.custom_attributes.super_days,
                  price: dH.price.amount,
                  currency: dH.price.currency
                })]
              })]
            }), (0, PH.jsxs)(GH.o, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                ZH.d.showCustomPopup({
                  body: (0, PH.jsx)(BH.f, {
                    gift: !0
                  }),
                  middleScreenPopupContainerClassName: "SuperRankPitchPopup"
                });
              },
              children: [(0, PH.jsx)(YH.e, {
                name: "bolt"
              }), eH("homePage:giftSuperRank")]
            })]
          })]
        }), DH.isLoggedIn() && (0, PH.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, PH.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, PH.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: eH("auth:deleteAccountButtonTitle")
            }), (0, qH.b)() && (0, PH.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: eH("auth:discordActivityKickWarning")
            }), (0, PH.jsx)(uH, {})]
          }), (0, PH.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: eH("auth:deleteAccountWarning")
          })]
        })]
      });
    });
    function uH() {
      const {
          userContext: HH,
          isUserContextUpdating: IH
        } = (0, TH.cb)(),
        {
          t: EH
        } = (0, JH.q)(),
        [RH, sH] = (0, hH.HY)(!1),
        [eH, AH] = (0, hH.HY)(null),
        VH = IH || RH;
      return (0, PH.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, PH.jsxs)(GH.D, {
          onClick: async function () {
            if (!RH) {
              sH(!0);
              try {
                const IH = await async function () {
                    if (!(await ZH.d.showPromptPopup({
                      title: "auth:deleteAccountPopupTitle",
                      subtitle: (0, qH.b)() ? "auth:discordActivityDeleteAccountWarning" : "auth:deleteAccountWarning",
                      confirmText: "auth:deleteAccount",
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult())) return mI.b.ok();
                    const IH = await (0, LH.q)("".concat(gH.e.indexUrl, "/index/metrics/revoke-cookies"), {}, {
                      retries: 3
                    }, HH.getMetricsCookies());
                    if (IH.error) return mI.b.error(IH.error);
                    (0, qH.b)() && (await yH.h.discordActivity()).exit("User deleted their account");
                    return (0, LH.k)(!0), LH.s.getCurrentUserContext().then(EH => {
                      EH.type === oH.b.ANONYMOUS && EH.whamm === HH.whamm && EH.setPlayerName(IH.name);
                    }), mI.b.ok();
                  }(),
                  EH = IH.isError() ? IH.asError().message : null;
                AH(EH);
              } catch (IH) {
                console.error("Failed to delete account:", IH), AH(EH("auth:genericDeleteAccountError"));
              }
              sH(!1);
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: VH,
          children: [VH && (0, PH.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, PH.jsx)(MH.d, {})
          }), EH("auth:deleteAccount")]
        }), eH && (0, PH.jsx)("div", {
          className: "DeleteAccountError",
          children: eH
        })]
      });
    }
    var lH = EH(21428),
      KH = EH(1840),
      wH = EH(803),
      zH = EH(1664);
    const tH = (0, hH.memo)(function (HH) {
        let {
          inGame: IH
        } = HH;
        const {
            t: EH,
            selectedLanguage: RH
          } = (0, JH.q)(),
          {
            clientEscMenuOptions: hH,
            showDebugOverlay: TH
          } = (0, iI.j)(["clientEscMenuOptions", "showDebugOverlay"]),
          eH = (0, sH.d)("hideCoordinates");
        let GH = "settingsMenu:showCoordinates",
          AH = "settingsMenu:showChunkCoordinates";
        function VH(HH) {
          const IH = new Intl.DisplayNames([HH], {
            type: "language"
          }).of(HH);
          return IH.charAt(0).toUpperCase() + IH.slice(1);
        }
        return eH && (GH = "settingsMenu:showCoordinatesHidden", AH = "settingsMenu:showChunkCoordinatesHidden"), (0, PH.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [IH && QH.f.canUseInviteLinks && (0, PH.jsxs)("div", {
            className: "SettingBox",
            children: [(0, PH.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: EH("settingsMenu:inviteLink")
            }), (0, PH.jsx)(lH.h, {})]
          }), (0, PH.jsxs)("div", {
            className: "SettingBox",
            children: [(0, PH.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: EH("settingsMenu:language")
            }), (0, PH.jsx)(KH.b, {
              options: Object.entries(JH.d).map(HH => {
                let [IH, EH] = HH;
                return {
                  label: (0, PH.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, PH.jsx)("img", {
                      src: EH.flagImg,
                      alt: "flag"
                    }), (0, PH.jsxs)("span", {
                      children: [VH(IH), " ", (0, PH.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", IH, ")"]
                      })]
                    })]
                  }),
                  value: IH
                };
              }),
              value: RH.code,
              onChange: HH => {
                wH.g.get().setCurrentLanguage(HH.value);
              }
            })]
          }), !(0, QH.K)() && (0, zH.d)() && QH.f.useForceRotateForceFullscreenOverlay && (0, PH.jsx)(NH.c, {
            label: EH("settingsMenu:disableFullscreenMode"),
            checked: hH.disableFullscreen,
            onClick: HH => {
              iI.e.setClientEscMenuOptions({
                disableFullscreen: HH
              });
            }
          }), (0, PH.jsx)(NH.c, {
            label: EH(GH),
            checked: hH.showCoordinates,
            onClick: HH => {
              iI.e.setClientEscMenuOptions({
                showCoordinates: HH
              });
            },
            disabled: eH
          }), (0, PH.jsx)(NH.c, {
            label: EH(AH),
            checked: hH.showChunkCoordinates,
            onClick: HH => {
              iI.e.setClientEscMenuOptions({
                showChunkCoordinates: HH
              });
            },
            disabled: eH
          }), (0, PH.jsx)(NH.c, {
            label: EH("settingsMenu:showFps"),
            checked: hH.showFPS,
            onClick: HH => {
              iI.e.setClientEscMenuOptions({
                showFPS: HH
              });
            }
          }), (0, PH.jsx)(NH.c, {
            label: EH("settingsMenu:disableBunnyHopping"),
            checked: hH.disableBunnyHopping,
            onClick: HH => {
              iI.e.setClientEscMenuOptions({
                disableBunnyHopping: HH
              });
            }
          }), (0, yH.s)() && (0, PH.jsx)(NH.c, {
            label: EH("settingsMenu:showChat"),
            checked: hH.showChat,
            onClick: HH => {
              iI.e.setClientEscMenuOptions({
                showChat: HH
              });
            }
          }), (0, PH.jsx)(NH.c, {
            label: EH("settingsMenu:showDebugOverlay"),
            checked: TH,
            onClick: HH => {
              iI.e.set({
                showDebugOverlay: HH
              });
            }
          })]
        });
      }),
      jI = (0, hH.memo)(function () {
        const {
            t: HH
          } = (0, JH.q)(),
          {
            soundVolume: IH,
            musicVolume: EH
          } = (0, iI.j)(["soundVolume", "musicVolume"]);
        return (0, PH.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, PH.jsx)(NH.f, {
            name: HH("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: EH,
            onChange: HH => {
              iI.e.set({
                musicVolume: Math.round(100 * HH) / 100
              });
            },
            format: HH => HH.toFixed(2)
          }), (0, PH.jsx)(NH.f, {
            name: HH("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: IH,
            onChange: HH => {
              iI.e.set({
                soundVolume: Math.round(100 * HH) / 100
              });
            },
            format: HH => HH.toFixed(2)
          })]
        });
      });
    var vH = EH(21430),
      bH = EH(822),
      SH = EH(824);
    function xH() {
      const {
          t: HH
        } = (0, JH.q)(),
        {
          isTouchScreen: IH,
          clientEscMenuOptions: EH
        } = (0, iI.j)(["isTouchScreen", "clientEscMenuOptions"]),
        [, RH] = (0, hH.useReducer)(HH => HH + 1, 0);
      return (0, PH.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, QH.O)() && !(0, QH.K)() ? (0, PH.jsx)(PH.Fragment, {
          children: (0, PH.jsx)(NH.c, {
            label: HH("settingsMenu:useTouchControls"),
            checked: IH,
            onClick: HH => {
              iI.e.set({
                isTouchScreen: HH
              });
            }
          })
        }) : null, (0, PH.jsx)(NH.c, {
          label: HH("settingsMenu:crouchToggle"),
          checked: EH.crouchIsToggle,
          onClick: HH => {
            iI.e.setClientEscMenuOptions({
              crouchIsToggle: HH
            });
          },
          circleInfoText: HH("settingsMenu:crouchToggleInfo")
        }), (0, PH.jsx)(NH.c, {
          label: HH("settingsMenu:hideUiToggle"),
          checked: EH.hideUiIsToggle,
          onClick: HH => {
            iI.e.setClientEscMenuOptions({
              hideUiIsToggle: HH
            });
          },
          circleInfoText: HH("settingsMenu:hideUiToggleInfo")
        }), "mouseOnly" !== (0, QH.x)() && (0, PH.jsx)(NH.f, {
          name: HH("settingsMenu:touchscreenSensitivity"),
          min: 1,
          max: 300,
          step: 1,
          initValue: EH.touchscreenSensitivity,
          onChange: HH => {
            iI.e.setClientEscMenuOptions({
              touchscreenSensitivity: HH
            });
          }
        }), !(0, QH.K)() && (0, PH.jsx)(NH.f, {
          name: HH("settingsMenu:mouseSensitivity"),
          min: 1,
          max: 200,
          step: 1,
          initValue: EH.mouseSensitivity,
          onChange: HH => {
            iI.e.setClientEscMenuOptions({
              mouseSensitivity: HH
            });
          }
        }), !(0, QH.K)() && (0, PH.jsxs)("div", {
          className: "ControlsContainer",
          children: [(0, PH.jsx)("div", {
            className: "SliderText",
            children: HH("settingsMenu:keyBindings")
          }), bH.g.map(IH => (0, PH.jsx)(HI, {
            title: HH(IH.name.translationKey, IH.name.params),
            defaultOpen: bH.k.has(IH.id),
            children: IH.actions.map(HH => (0, PH.jsx)(II, {
              noaAction: HH,
              forceUpdate: RH,
              clashesWith: IH.clashesWith
            }, HH))
          }, IH.name.translationKey)), (0, PH.jsx)(GH.D, {
            className: "ResetBindingsButton",
            onClick: () => {
              (0, bH.F)(), RH();
            },
            children: HH("controls:resetBindings")
          })]
        })]
      });
    }
    function HI(HH) {
      let {
        title: IH,
        defaultOpen: EH,
        children: RH
      } = HH;
      const [TH, sH] = (0, hH.HY)(EH);
      return (0, PH.jsxs)("div", {
        className: aH()("ControlsSection", {
          Collapsed: !TH
        }),
        children: [(0, PH.jsxs)("div", {
          className: "ControlsSectionHeader",
          onClick: () => {
            sH(!TH);
          },
          children: [(0, PH.jsx)("div", {
            className: "ControlsSectionTitle",
            children: IH
          }), (0, PH.jsx)("div", {
            className: "ControlsSectionChevron",
            children: "\u25be"
          })]
        }), TH && (0, PH.jsx)("div", {
          className: "ControlsSectionRows",
          children: RH
        })]
      });
    }
    function II(HH) {
      let {
        noaAction: IH,
        forceUpdate: EH,
        clashesWith: RH
      } = HH;
      const {
          t: TH
        } = (0, JH.q)(),
        [sH, eH] = (0, hH.HY)(!1),
        [AH, VH] = (0, hH.HY)("controls:clickToEnterNewBinding"),
        [YH, QH] = (0, hH.HY)(null),
        [OH, rH] = (0, hH.HY)(null),
        FH = (0, hH.useRef)(null);
      (0, hH.IY)(() => {
        sH && FH.current && FH.current.focus();
      }, [sH]);
      const MH = bH.t[IH].filter(HH => SH.d[HH]);
      let NH = null;
      const iI = [],
        DH = RH.flatMap(HH => {
          var IH, EH;
          return null !== (IH = null === (EH = bH.g.find(IH => IH.id === HH)) || void 0 === EH ? void 0 : EH.actions) && void 0 !== IH ? IH : [];
        });
      for (const hH of DH) {
        if (hH === IH) continue;
        const HH = bH.t[hH];
        for (const IH of HH) MH.includes(IH) && iI.push(TH(bH.x[hH].translationKey, bH.x[hH].params));
      }
      iI.length > 0 && (NH = TH("controls:sharedBindingsWarning") + " ", NH += iI.join(", "));
      const XH = () => {
          eH(!1), QH(null), VH("controls:clickToEnterNewBinding"), rH(null);
        },
        mI = () => "BindingInput_" + IH;
      return (0, PH.jsxs)("div", {
        className: aH()("ControlRow", {
          WarningBorder: null !== NH
        }),
        children: [(0, PH.jsxs)("div", {
          className: "ControlRowInner",
          children: [(0, PH.jsx)("div", {
            className: "ControlName",
            children: TH(bH.x[IH].translationKey, bH.x[IH].params)
          }), (0, PH.jsxs)("div", {
            className: "ControlBindingsContainer",
            children: [(0, PH.jsxs)("div", {
              className: "ControlBindingsList",
              children: [MH.map(HH => (0, PH.jsxs)("div", {
                className: "ControlBinding",
                children: [(0, PH.jsx)("div", {
                  children: (0, bH.q)(HH)
                }), (0, PH.jsx)("div", {
                  className: "ControlBindingRemoveIcon",
                  onClick: () => {
                    const RH = (0, bH.z)(IH, HH);
                    RH.isError() ? rH(RH.asError().message) : rH(null), EH();
                  },
                  children: "\xd7"
                })]
              }, HH)), !sH && (0, PH.jsx)("div", {
                className: "ControlBinding ControlBindingAdd",
                onClick: () => {
                  eH(!0), rH(null);
                },
                children: (0, PH.jsx)("div", {
                  className: "ControlBindingAddIcon",
                  children: "+"
                })
              })]
            }), sH && (0, PH.jsxs)("div", {
              className: "ControlBindingAddInput",
              children: [(0, PH.jsxs)("div", {
                className: "InputContainer",
                children: [(0, PH.jsx)("div", {
                  className: "InputOverlay",
                  children: YH ? (0, bH.q)(YH) : (0, PH.jsx)("div", {
                    className: "InputOverlayPlaceholder",
                    children: TH(AH)
                  })
                }), (0, PH.jsx)("input", {
                  ref: FH,
                  id: mI(),
                  defaultValue: "",
                  onKeyDown: HH => {
                    if ("Escape" === HH.code) return XH(), HH.preventDefault(), void HH.stopPropagation();
                    const IH = HH.code;
                    SH.b.includes(IH) ? (rH(null), QH(IH)) : (rH("controls:keyIsReserved"), QH(null)), HH.preventDefault(), HH.stopPropagation();
                  },
                  onMouseDown: HH => {
                    const IH = "Mouse" + (HH.button + 1);
                    document.activeElement && document.activeElement.id === mI() ? SH.b.includes(IH) ? (rH(null), QH(IH)) : (rH("controls:keyIsReserved"), QH(null)) : VH("controls:enterNewBinding"), HH.stopPropagation();
                  },
                  onBlur: () => {
                    VH("controls:clickToEnterNewBinding");
                  }
                })]
              }), (0, PH.jsx)(GH.e, {
                onPointerDown: HH => {
                  HH.preventDefault();
                },
                onClick: () => {
                  (0, bH.d)(IH, YH), EH(), XH();
                },
                className: "ControlBindingAddButton",
                disabled: null === YH,
                children: TH("general:add")
              }), (0, PH.jsx)("div", {
                className: "ControlBindingAddCancel",
                onClick: () => {
                  XH();
                },
                children: "\xd7"
              })]
            }), OH && (0, PH.jsx)("div", {
              className: "ControlBindingError",
              children: TH(OH)
            })]
          })]
        }), NH && (0, PH.jsx)("div", {
          className: "ControlRowWarning",
          children: NH
        })]
      });
    }
    var EI = EH(1995),
      RI = EH(21439),
      hI = EH(45),
      TI = EH(21443),
      sI = EH(818),
      eI = EH(195);
    const GI = (0, hH.memo)(function () {
      var HH, IH, EH;
      const {
          clientEscMenuOptions: RH
        } = (0, iI.j)(["clientEscMenuOptions"]),
        [TH, sH] = (0, hH.HY)(() => {
          var HH, IH, EH;
          return null !== (HH = null === (IH = (0, OH.getBloxd)().client) || void 0 === IH || null === (EH = IH.gameRecorder) || void 0 === EH ? void 0 : EH.getIsRecording()) && void 0 !== HH && HH;
        }),
        [eH, AH] = (0, hH.HY)(() => {
          var HH, IH, EH;
          return null !== (HH = null === (IH = (0, OH.getBloxd)().client) || void 0 === IH || null === (EH = IH.gameRecorder) || void 0 === EH ? void 0 : EH.getIsClipping()) && void 0 !== HH && HH;
        }),
        [VH, YH] = (0, hH.HY)(() => {
          var HH, IH, EH;
          return null !== (HH = null === (IH = (0, OH.getBloxd)().client) || void 0 === IH || null === (EH = IH.gameRecorder) || void 0 === EH ? void 0 : EH.getHasClipBuffer()) && void 0 !== HH && HH;
        }),
        [QH, JH] = (0, hH.HY)(TI.g);
      function rH() {
        var HH, IH, EH;
        YH(null !== (HH = null === (IH = (0, OH.getBloxd)().client) || void 0 === IH || null === (EH = IH.gameRecorder) || void 0 === EH ? void 0 : EH.getHasClipBuffer()) && void 0 !== HH && HH);
      }
      (0, hI.j)("gameRecorder|setRecording", HH => {
        sH(HH), rH();
      }), (0, hI.j)("gameRecorder|setClipping", HH => {
        AH(HH), rH();
      }), (0, hI.j)("gameRecorder|clipSettingsChanged", () => {
        rH();
      }), (0, hI.j)("replayViewer|stateChanged", () => {
        JH((0, TI.g)());
      }), (0, hH.IY)(() => {
        var HH;
        const IH = null === (HH = (0, OH.getBloxd)().client) || void 0 === HH ? void 0 : HH.gameRecorder;
        IH && (IH.setClipDurationSeconds(RH.clipDurationSeconds), IH.setClippingEnabled(RH.enableClipping));
      }, [RH.enableClipping, RH.clipDurationSeconds]);
      const FH = null !== (HH = null === (IH = (0, OH.getBloxd)().client) || void 0 === IH || null === (EH = IH.gameReplayer) || void 0 === EH ? void 0 : EH.isReplayMode()) && void 0 !== HH && HH,
        MH = !QH && !FH,
        DH = MH,
        XH = DH && eH && !TH;
      function mI() {
        var HH, IH;
        MH && (null === (HH = (0, OH.getBloxd)().client) || void 0 === HH || null === (IH = HH.gameRecorder) || void 0 === IH || IH.toggleRecording());
      }
      return (0, PH.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, PH.jsxs)("div", {
          className: "SettingBox",
          children: [(0, PH.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: TH ? (0, PH.jsxs)(PH.Fragment, {
              children: [(0, PH.jsxs)(GH.D, {
                className: "ReplayViewerCategoryButton",
                onClick: mI,
                disabled: !MH,
                children: [(0, PH.jsx)("span", {
                  children: "Stop Recording"
                }), (0, PH.jsx)(sI.b, {
                  noaAction: "recordGame"
                })]
              }), (0, PH.jsx)(RI.b, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, PH.jsxs)(GH.o, {
              className: "ReplayViewerCategoryButton",
              onClick: mI,
              disabled: !MH,
              children: [(0, PH.jsx)("span", {
                children: "Start Recording"
              }), (0, PH.jsx)(sI.b, {
                noaAction: "recordGame"
              })]
            })
          }), !MH && (0, PH.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is unavailable while Replay Mode is open."
          })]
        }), (0, PH.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, PH.jsx)(NH.c, {
            label: "Enable clipping",
            checked: RH.enableClipping,
            disabled: !DH,
            onClick: function (HH) {
              DH && iI.e.setClientEscMenuOptions({
                enableClipping: HH
              });
            },
            className: aH()({
              SettingBoxDisabled: !DH
            })
          }), (0, PH.jsx)(NH.f, {
            name: "Clip duration (seconds)",
            min: eI.n,
            max: eI.k,
            step: eI.c,
            initValue: RH.clipDurationSeconds,
            onChange: function (HH) {
              iI.e.setClientEscMenuOptions({
                clipDurationSeconds: HH
              });
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            className: aH()({
              SettingBoxDisabled: !DH || !RH.enableClipping
            })
          })]
        }), (0, PH.jsxs)("div", {
          className: "SettingBox",
          children: [(0, PH.jsxs)(GH.o, {
            className: "ReplayViewerCategoryButton",
            onClick: function () {
              var HH, IH;
              XH && (null === (HH = (0, OH.getBloxd)().client) || void 0 === HH || null === (IH = HH.gameRecorder) || void 0 === IH || IH.saveClip());
            },
            disabled: !XH,
            children: [(0, PH.jsx)("span", {
              children: "Record clip"
            }), (0, PH.jsx)(sI.b, {
              noaAction: "recordClip"
            })]
          }), RH.enableClipping && !VH && DH && !TH && (0, PH.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), TH && (0, PH.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, PH.jsxs)("div", {
          className: "SettingBox",
          children: [(0, PH.jsxs)(GH.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function () {
              (0, TI.k)(!0), iI.e.set({
                openEverythingMenuName: null
              });
            },
            disabled: QH,
            children: [(0, PH.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, PH.jsx)(sI.b, {
              noaAction: "replayViewerOpen"
            })]
          }), QH && (0, PH.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        })]
      });
    });
    var AI = EH(77),
      VI = EH(472),
      YI = EH(71),
      QI = EH(642);
    const JI = {
        account: {
          icon: "fa-solid fa-user",
          displayName: "homePage:account"
        },
        general: {
          icon: "fa-solid fa-gear",
          displayName: "settingsMenu:general"
        },
        audio: {
          icon: "fa-solid fa-volume",
          displayName: "settingsMenu:audio"
        },
        graphics: {
          icon: "fa-solid fa-cube",
          displayName: "settingsMenu:graphics"
        },
        controls: {
          icon: "fa-solid fa-joystick",
          displayName: "settingsMenu:controls"
        },
        texturePack: {
          icon: "fa-solid fa-folder-image",
          displayName: "settingsMenu:texturePack"
        },
        updateLog: {
          icon: "fa-solid fa-clock-rotate-left",
          displayName: "homePage:updateLog"
        },
        information: {
          icon: "fa-solid fa-circle-info",
          displayName: "homePage:info"
        },
        alternativeDomains: {
          icon: "fa-solid fa-globe",
          displayName: "settingsMenu:unblockedDomains"
        },
        replayViewer: {
          icon: "fa-solid fa-video",
          displayName: "Replay Mode"
        },
        developerTools: {
          icon: "fa-solid fa-terminal",
          displayName: "Developer Tools"
        }
      },
      OI = (0, hH.lazy)(() => EH.e(65).then(EH.bind(EH, 24064)).then(HH => ({
        default: HH.BloxdInformation
      })));
    function rI(HH) {
      return HH ? "general" : "account";
    }
    const FI = {
        chunkHorizAddDist: HH => {
          const IH = (0, OH.RY)().zH.Jh[1];
          (0, OH.RY)().zH.rh([HH, IH], [HH + 1, IH + 1]);
        },
        chunkVertAddDist: HH => {
          const IH = (0, OH.RY)().zH.Jh[0];
          (0, OH.RY)().zH.rh([IH, HH], [IH + 1, HH + 1]);
        }
      },
      MI = {
        chunkHorizAddDist: () => (0, OH.RY)().zH.Jh[0],
        chunkVertAddDist: () => (0, OH.RY)().zH.Jh[1]
      },
      NI = (0, hH.memo)(function (HH) {
        let {
          show: IH,
          setBeforeResumeCallback: EH
        } = HH;
        (0, eH.d)();
        const {
            gameState: RH,
            openSettingsCategory: AH
          } = (0, iI.j)(["gameState", "openSettingsCategory"]),
          {
            userContext: VH
          } = (0, TH.cb)(),
          {
            t: MH
          } = (0, JH.q)(),
          NH = (0, TH.H)(),
          DH = (0, sH.d)("minChunkAddDist"),
          mI = "inGame" === RH,
          [ZH, LH] = (0, hH.HY)(rI(mI)),
          [gH, yH] = (0, hH.HY)(null),
          [oH, kI] = (0, hH.HY)([]),
          CH = (0, hH.useRef)(function () {
            const HH = new Date(),
              IH = 6 * (HH.getMonth() + HH.getDate()) % VI.C.length;
            return [...VI.C, ...VI.C].slice(IH, IH + 6);
          }()),
          cH = Object.keys(JI).filter(HH => {
            switch (HH) {
              case "replayViewer":
                return mI;
              case "developerTools":
                return VH.playerHasRank("developer") || !1;
              case "texturePack":
                return QH.f.settings.canChangeTexturePack;
              case "alternativeDomains":
                return "crazygames" !== qH.q;
              default:
                return !0;
            }
          });
        async function UH() {
          gH && (await gH(), yH(null));
        }
        function WH() {
          iI.e.set({
            openEverythingMenuName: null
          });
        }
        function BH(HH) {
          return (0, YI.p)(iI.e.get("clientEscMenuOptions")[HH]) ? (0, YI.p)((0, OH.RY)()) || (0, YI.p)(MI[HH]) ? AI.j.getItem(HH) : MI[HH]() : iI.e.get("clientEscMenuOptions")[HH];
        }
        function fH(HH, IH) {
          if ("useTouchControls" !== HH) {
            var EH;
            if (HH in iI.e.get("clientEscMenuOptions") && iI.e.setClientEscMenuOptions({
              [HH]: IH
            }), !(0, YI.p)((0, OH.RY)())) null === (EH = FI[HH]) || void 0 === EH || EH.call(FI, IH);
            AI.j.setItem(HH, IH);
          } else iI.e.set({
            isTouchScreen: IH
          });
        }
        return (0, hI.j)("toggleFullCoordinateOverlay", () => {
          const HH = BH("showCoordinates") && BH("showChunkCoordinates") && BH("showFPS");
          fH("showCoordinates", !HH), fH("showChunkCoordinates", !HH), fH("showFPS", !HH), NH();
        }), (0, hI.j)("updatedChunkLoadDist", () => {
          NH();
        }), (0, hH.IY)(() => {
          yH(null), null === iI.e.get("openSettingsCategory") && LH(rI(mI));
        }, [IH]), (0, hH.IY)(() => {
          null !== AH && (LH(AH), iI.e.set({
            openSettingsCategory: null
          }));
        }, [AH]), (0, hH.IY)(() => {
          "updateLog" === ZH && (0, FH.b)().then(kI);
        }, [ZH]), (0, hH.IY)(() => {
          if ((0, YI.p)(DH)) return;
          const [HH, IH] = (0, vH.j)(),
            EH = (0, QI.g)(DH[0], HH, (0, vH.f)(DH[0])),
            RH = (0, QI.g)(DH[1], IH, (0, vH.h)(DH[1]));
          (0, OH.RY)().zH.rh([EH, RH], [EH + 1, RH + 1]);
        }, [DH]), (0, hH.IY)(() => {
          EH(() => UH);
        }, [gH]), (0, PH.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: IH ? {} : {
            display: "none"
          },
          children: [(0, PH.jsx)("div", {
            className: "MenuSideBar",
            children: (0, PH.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, PH.jsx)(TH.A, {
                items: cH.map(HH => ({
                  id: HH,
                  faIcon: JI[HH].icon,
                  title: MH(JI[HH].displayName),
                  redDot: !1
                })),
                selectedItemId: ZH,
                onClick: HH => {
                  !async function (HH) {
                    await UH(), LH(HH);
                  }(HH);
                }
              })
            })
          }), (0, PH.jsxs)("div", {
            className: "MenuBody SettingsMenuRight",
            children: ["account" === ZH && (0, PH.jsx)(dH, {
              showing: IH,
              inGame: mI
            }), "general" === ZH && (0, PH.jsx)(tH, {
              inGame: mI
            }), "audio" === ZH && (0, PH.jsx)(jI, {}), "graphics" === ZH && (0, PH.jsx)(vH.b, {
              minChunkAddDist: null !== DH && void 0 !== DH ? DH : [2, 2],
              getValue: BH,
              onChange: fH,
              setApplySettingsCallback: yH
            }), "controls" === ZH && (0, PH.jsx)(xH, {}), QH.f.settings.canChangeTexturePack && "texturePack" === ZH && (0, PH.jsx)(EI.e, {
              setApplySettingsCallback: yH
            }), "updateLog" === ZH && (0, PH.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, PH.jsx)("div", {
                className: "UpdateLogsContainer",
                children: oH.map((HH, IH) => (0, PH.jsx)(rH.e, {
                  updateLog: HH,
                  index: IH,
                  close: WH
                }, IH))
              })
            }), "information" === ZH && (0, PH.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, PH.jsx)(hH.Suspense, {
                fallback: null,
                children: (0, PH.jsx)(OI, {})
              })
            }), "alternativeDomains" === ZH && (0, PH.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, PH.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: MH("settingsMenu:unblockedDomainsDescription")
              }), (0, PH.jsx)("div", {
                className: "AlternativeDomainsList",
                children: CH.current.map(HH => (0, PH.jsxs)(GH.K, {
                  onClick: () => {
                    window.open("https://".concat(HH));
                  },
                  children: [(0, PH.jsx)(YH.e, {
                    name: "arrow-up-right-from-square"
                  }), " ", HH]
                }, HH))
              })]
            }), "replayViewer" === ZH && (0, PH.jsx)(GI, {}), "developerTools" === ZH && (0, PH.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, PH.jsx)(XH, {
                setApplySettingsCallback: yH
              })
            }), null !== gH && (0, PH.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, PH.jsx)(GH.e, {
                className: "SettingsMenuRightFooterButton",
                onClick: UH,
                children: MH("general:apply")
              })
            })]
          })]
        });
      });
    const iE = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      DI = (0, hH.lazy)(() => Promise.resolve().then(EH.bind(EH, 2067)).then(HH => HH.ensureGameSetup().then(() => ({
        default: HH.CharacterCustomisationUI
      }))));
    function PI(HH) {
      let {
        show: IH
      } = HH;
      const {
          userContext: EH
        } = (0, TH.cb)(),
        [RH, sH] = (0, hH.HY)("characters");
      if (!IH) return null;
      const eH = iE.filter(HH => "cape" !== HH && "nameColour" !== HH || EH.getPlayerRanks().includes("super") || (0, DH.N)()).map(HH => ({
        id: HH,
        faIcon: VI.M[HH],
        title: VI.O[HH],
        redDot: !1
      }));
      return (0, PH.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, PH.jsx)("div", {
          className: "MenuSideBar",
          children: (0, PH.jsx)(TH.A, {
            items: eH,
            selectedItemId: RH,
            onClick: HH => {
              sH(HH);
            }
          })
        }), (0, PH.jsx)("div", {
          className: "MenuBody",
          children: (0, PH.jsx)(hH.Suspense, {
            fallback: (0, PH.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, PH.jsx)(MH.d, {})
            }),
            children: (0, PH.jsx)(DI, {
              selectedTab: RH
            })
          })
        })]
      });
    }
    var XI = EH(1021),
      mE = EH(995),
      ZI = EH(21460),
      qI = EH(21456),
      LI = EH(1084),
      gI = EH(21445),
      yI = EH(21452),
      oI = EH(595),
      kE = EH(586),
      CI = EH(1956),
      cI = EH(1098),
      UI = EH(647);
    class WI {
      constructor(HH) {
        this.info = HH;
      }
      static fromShopInfo(HH) {
        const IH = {};
        for (const EH in HH) {
          const RH = !0 === HH[EH].redDot && !0 !== HH[EH].forceRemoveRedDot;
          IH[EH] = {
            redDot: RH,
            items: {}
          };
          for (const hH in HH[EH].items) {
            const RH = HH[EH].items[hH],
              TH = !0 === RH.redDot && !0 !== RH.forceRemoveRedDot;
            IH[EH].items[hH] = {
              redDot: TH
            };
          }
        }
        return new WI(IH);
      }
      anyCategoryHasRedDots() {
        for (const HH in this.info) if (this.categoryHasRedDot(HH)) return !0;
        return !1;
      }
      doesCategoryExist(HH) {
        return !(0, YI.p)(this.info[HH]);
      }
      categoryHasRedDot(HH) {
        return !0 === this.info[HH].redDot;
      }
      updateCategoryRedDot(HH, IH) {
        this.info[HH].redDot = IH;
      }
      doesItemExist(HH, IH) {
        return this.doesCategoryExist(HH) && !(0, YI.p)(this.info[HH].items[IH]);
      }
      itemHasRedDot(HH, IH) {
        return !0 === this.info[HH].items[IH].redDot;
      }
      updateItemRedDot(HH, IH, EH) {
        this.info[HH].items[IH].redDot = EH;
      }
      shallowCopy() {
        return new WI(this.info);
      }
    }
    function BI(HH, IH) {
      return "".concat(HH, "\x1f").concat(IH);
    }
    function fI(HH) {
      return HH ? Object.keys(HH).sort((IH, EH) => {
        var RH, hH, TH, sH;
        const eH = (null !== (RH = null === (hH = HH[EH]) || void 0 === hH ? void 0 : hH.sortPriority) && void 0 !== RH ? RH : 0) - (null !== (TH = null === (sH = HH[IH]) || void 0 === sH ? void 0 : sH.sortPriority) && void 0 !== TH ? TH : 0);
        return 0 !== eH ? eH : IH.localeCompare(EH);
      }) : [];
    }
    function aI(HH, IH) {
      return !(0, YI.p)(IH) && !(0, YI.p)(HH) && IH in HH;
    }
    const nI = (0, hH.memo)(function (HH) {
      var IH, EH;
      let {
        show: sH
      } = HH;
      const [eH, AH] = (0, hH.HY)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: WI.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null
        }),
        VH = (0, hH.useRef)(""),
        YH = (0, hH.useRef)(null),
        QH = (0, hH.useRef)(0),
        JH = (0, hH.useRef)(eH),
        rH = eH.redDotInfo.anyCategoryHasRedDots(),
        [FH, MH] = (0, hH.HY)(null),
        NH = (0, hH.useRef)(!1);
      let DH = !1,
        XH = 0,
        mI = 0;
      if (eH.currencyAmounts) {
        for (const HH in eH.currencyAmounts) {
          var ZH;
          const IH = eH.currencyAmounts[HH];
          IH.hidden || (XH++, (null === (ZH = IH.subtext) || void 0 === ZH ? void 0 : ZH.length) > 0 && mI++);
        }
        DH = XH + mI > 4;
      }
      (0, hH.IY)(() => {
        hI.g.TY("showShopIconRedDot", rH, !0);
      }, [rH]), (0, hH.IY)(() => {
        (0, LI.sendColyMessage)(cI.Ei, sH);
      }, [sH]), (0, hH.IY)(() => () => {
        (0, LI.sendColyMessage)(cI.Ei, !1);
      }, []), (0, hH.IY)(() => {
        JH.current = eH;
      }, [eH]), (0, hH.IY)(() => {
        if (null === FH) return;
        const HH = HH => {
          const IH = HH.target;
          null !== IH && void 0 !== IH && IH.closest(".ShopItem") || MH(null);
        };
        return document.addEventListener("pointerdown", HH), () => {
          document.removeEventListener("pointerdown", HH);
        };
      }, [FH]);
      const LH = HH => {
          AH(IH => (0, RH.b)((0, RH.b)({}, IH), HH));
        },
        gH = HH => {
          var IH;
          clearTimeout(null === (IH = eH.onBoughtInfo) || void 0 === IH ? void 0 : IH.timeout);
          const EH = setTimeout(() => {
            LH({
              onBoughtInfo: null
            });
          }, 3e3);
          VH.current = HH, LH({
            onBoughtInfo: {
              text: HH,
              timeout: EH
            }
          });
        },
        oH = HH => {
          const {
              shopInfo: IH,
              userInputsPerItem: EH,
              redDotInfo: hH,
              autoSelectCategory: TH
            } = function (HH, IH, EH, hH) {
              if ((0, YI.p)(HH) || 0 === Object.keys(HH).length) return {
                shopInfo: {},
                userInputsPerItem: {},
                redDotInfo: WI.fromShopInfo({}),
                autoSelectCategory: null
              };
              const TH = qH.m[qH.q].adConfig.showRewardedAds,
                sH = {};
              let eH = null;
              for (const OH in HH) {
                const IH = HH[OH],
                  EH = {};
                let hH = !1;
                for (const HH in IH.items) {
                  const RH = IH.items[HH];
                  (0, qI.f)(RH, TH) && (EH[HH] = RH, hH = !0);
                }
                hH && (sH[OH] = (0, RH.b)((0, RH.b)({}, IH), {}, {
                  items: EH
                }), !0 === IH.autoSelectCategory && (eH = OH));
              }
              const GH = {},
                AH = (HH, IH, RH, hH) => {
                  var TH, sH;
                  const eH = BI(HH, IH),
                    AH = null !== (TH = EH[eH]) && void 0 !== TH ? TH : EH[IH];
                  if (null !== (sH = hH.userInput) && void 0 !== sH && sH.type) switch (hH.userInput.type) {
                    case "dropdown":
                      {
                        var VH;
                        const HH = !AH || !hH.userInput.dropdownOptions.some(HH => (0, qI.d)(HH) === AH),
                          IH = hH.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === RH || void 0 === RH || null === (VH = RH.userInput) || void 0 === VH ? void 0 : VH.type) || JSON.stringify(RH.userInput.dropdownOptions) !== JSON.stringify(hH.userInput.dropdownOptions)),
                          EH = hH.userInput,
                          TH = !(0, YI.p)(EH.initialValue) && EH.dropdownOptions.some(HH => (0, qI.d)(HH) === EH.initialValue);
                        var YH;
                        return void (HH || IH ? TH ? GH[eH] = null !== (YH = hH.userInput.initialValue) && void 0 !== YH ? YH : null : hH.userInput.dropdownOptions.length > 0 ? GH[eH] = (0, qI.d)(hH.userInput.dropdownOptions[0]) : GH[eH] = null : GH[eH] = AH);
                      }
                    case "text":
                      var QH, JH;
                      return void (GH[eH] = null !== (QH = null !== (JH = hH.userInput.initialValue) && void 0 !== JH ? JH : AH) && void 0 !== QH ? QH : "");
                    case "number":
                      var rH, FH;
                      return void (GH[eH] = null !== (rH = null !== (FH = hH.userInput.initialValue) && void 0 !== FH ? FH : AH) && void 0 !== rH ? rH : "");
                    case "player":
                      {
                        const HH = (0, OH.getBloxd)().getPlayersAvailableForShopInput((0, OH.RY)().EY, hH);
                        return void (AH && HH.includes(AH) ? GH[eH] = AH : GH[eH] = HH.length > 0 ? HH[0] : null);
                      }
                    case "color":
                      var MH, NH;
                      return void (GH[eH] = null !== (MH = null !== (NH = hH.userInput.initialValue) && void 0 !== NH ? NH : AH) && void 0 !== MH ? MH : "#000000");
                  }
                };
              for (const RH in sH) for (const HH in sH[RH].items) {
                var VH;
                const EH = sH[RH].items[HH];
                AH(RH, HH, null === (VH = IH[RH]) || void 0 === VH ? void 0 : VH.items[HH], EH);
              }
              const YH = WI.fromShopInfo(sH);
              for (const RH in sH) {
                var QH;
                if (hH.doesCategoryExist(RH)) {
                  (null === (QH = IH[RH]) || void 0 === QH ? void 0 : QH.redDot) === sH[RH].redDot && YH.updateCategoryRedDot(RH, hH.categoryHasRedDot(RH));
                  for (const HH in sH[RH].items) {
                    var JH, rH;
                    hH.doesItemExist(RH, HH) && (null === (JH = IH[RH]) || void 0 === JH || null === (rH = JH.items[HH]) || void 0 === rH ? void 0 : rH.redDot) === sH[RH].items[HH].redDot && YH.updateItemRedDot(RH, HH, hH.itemHasRedDot(RH, HH));
                  }
                }
              }
              return {
                shopInfo: sH,
                userInputsPerItem: GH,
                redDotInfo: YH,
                autoSelectCategory: eH
              };
            }(HH, eH.shopInfo, eH.userInputsPerItem, eH.redDotInfo),
            GH = {
              shopInfo: IH,
              userInputsPerItem: EH,
              redDotInfo: hH
            };
          if (null === TH || sH) {
            if (IH[eH.selectedCategoryKey]) GH.selectedCategoryKey = eH.selectedCategoryKey;else {
              const HH = fI(IH);
              GH.selectedCategoryKey = HH.length > 0 ? HH[0] : null;
            }
          } else GH.selectedCategoryKey = TH;
          return 0 === Object.keys(IH).length && sH && iI.e.set({
            openEverythingMenuName: null
          }), GH;
        },
        kI = HH => {
          let IH = eH.redDotInfo;
          IH.categoryHasRedDot(HH) && (IH.updateCategoryRedDot(HH, !1), IH = IH.shallowCopy()), LH({
            selectedCategoryKey: HH,
            redDotInfo: IH
          });
        };
      (0, hI.j)("showShopFromServer", HH => {
        let {
          toggle: IH,
          Ms: EH
        } = HH;
        EH && eH.shopInfo[EH] && kI(EH), 0 === Object.keys(eH.shopInfo).length || IH && sH ? iI.e.set({
          openEverythingMenuName: null
        }) : iI.e.set({
          openEverythingMenuName: VI.s.SHOP
        });
      }), (0, hI.j)("closeShopOnDamaged", () => {
        sH && iI.e.set({
          openEverythingMenuName: null
        });
      }), (0, hI.j)("overShopInfo", HH => {
        gH(HH);
      }), (0, hI.j)("serverOption|currencyAmounts", HH => {
        LH({
          currencyAmounts: HH
        });
      }), (0, hI.j)("serverOption|shopInfo", HH => {
        LH(oH(HH));
      }), (0, hI.j)("playerNamesUpdated", () => {
        AH(HH => {
          const IH = oH(HH.shopInfo);
          return (0, RH.b)((0, RH.b)({}, HH), IH);
        });
      });
      const CH = eH.selectedCategoryKey,
        cH = (HH, IH) => {
          var EH, RH;
          return (isNaN(IH) || (0, YI.p)(HH.currency) || aI(eH.currencyAmounts, HH.currency) && IH <= eH.currencyAmounts[HH.currency].amount) && (null === (EH = HH.canBuy) || void 0 === EH || EH) && !(null !== (RH = HH.hidden) && void 0 !== RH && RH);
        },
        UH = (HH, IH) => {
          var EH, hH;
          const sH = BI(CH, HH),
            AH = eH.shopInfo[CH].items[HH],
            VH = eH.userInputsPerItem[sH],
            YH = (0, qI.b)(AH, VH),
            rH = cH(AH, YH),
            iI = AH.enchant,
            DH = iI ? (0, WH.db)(null !== (EH = AH.customTitle) && void 0 !== EH ? EH : HH, {
              colour: WH.cb[iI.tier]
            }) : null !== (hH = AH.customTitle) && void 0 !== hH ? hH : HH,
            XH = IH => {
              const EH = null !== IH && void 0 !== IH ? IH : VH,
                hH = void 0 !== IH ? (0, qI.b)(AH, IH) : YH;
              cH(AH, hH) && null !== EH && ((HH, IH, EH) => {
                const hH = eH.selectedCategoryKey,
                  TH = BI(hH, HH),
                  sH = null !== EH && void 0 !== EH ? EH : eH.userInputsPerItem[TH],
                  GH = {
                    categoryKey: hH,
                    itemKey: HH,
                    shopVersion: (0, OH.RY)().aY._shopVersion,
                    userInput: sH
                  };
                if (IH.isRewardedAd) {
                  if (Date.now() - QH.current < 5e3) return;
                  (0, yH.P)(() => {
                    var EH, RH, hH;
                    console.log("bought rewarded ad");
                    const sH = GH.categoryKey ? null === (EH = JH.current.shopInfo[GH.categoryKey]) || void 0 === EH ? void 0 : EH.items[HH] : null;
                    sH && sH.isRewardedAd ? (null === (RH = IH.userInput) || void 0 === RH ? void 0 : RH.type) === (null === sH || void 0 === sH || null === (hH = sH.userInput) || void 0 === hH ? void 0 : hH.type) ? (GH.userInput = JH.current.userInputsPerItem[TH], GH.shopVersion = (0, OH.RY)().aY._shopVersion, (0, LI.sendColyMessage)(cI.Rg, GH), IH.onBoughtMessage && gH(IH.onBoughtMessage)) : console.warn("Shop item input type changed, early out") : console.warn("Shop item no longer valid or a rewarded ad, early out");
                  }), QH.current = Date.now();
                } else {
                  (0, LI.sendColyMessage)(cI.Rg, GH);
                  const HH = (0, qI.b)(IH, sH);
                  if (!isNaN(HH) && aI(eH.currencyAmounts, IH.currency)) {
                    const EH = (0, RH.b)({}, eH.currencyAmounts);
                    EH[IH.currency].amount -= HH, LH({
                      currencyAmounts: EH
                    });
                  }
                  IH.onBoughtMessage && gH(IH.onBoughtMessage);
                }
              })(HH, AH, IH);
              let TH = eH.redDotInfo;
              TH.itemHasRedDot(CH, HH) && (TH.updateItemRedDot(CH, HH, !1), TH = TH.shallowCopy()), LH({
                redDotInfo: TH
              });
            };
          return (0, PH.jsxs)("div", {
            className: aH()("ShopItem", {
              ShopItemNoInput: !AH.userInput,
              ShopItemNoInputCanBuy: !AH.userInput && rH,
              ShopItemNoInputSelected: AH.isSelected,
              ShopItemEnchant: !!iI
            }),
            onClick: () => {
              if (iI && NH.current) {
                if (FH !== sH) return void MH(sH);
                MH(null);
              }
              AH.userInput || XH();
            },
            onPointerDown: HH => {
              iI && (NH.current = (0, yI.n)(HH));
            },
            onPointerEnter: HH => {
              iI && !(0, yI.n)(HH) && MH(sH);
            },
            onPointerLeave: HH => {
              iI && !(0, yI.n)(HH) && MH(HH => HH === sH ? null : HH);
            },
            style: {
              zIndex: Object.keys(eH.shopInfo[CH].items).length - IH
            },
            children: [eH.redDotInfo.itemHasRedDot(CH, HH) && (0, PH.jsx)(TH.B, {
              top: "-6px",
              right: "-6px"
            }), AH.badge && (0, PH.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, PH.jsx)("div", {
                className: aH()("ShopBadgeMain", AH.badge.type),
                children: (0, PH.jsx)(kE.d, {
                  text: AH.badge.text
                })
              })
            }), (0, PH.jsx)("div", {
              className: "ShopItemLeft",
              children: AH.image && (0, PH.jsx)(pI, {
                item: AH,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, PH.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, PH.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, PH.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, PH.jsx)(kE.d, {
                    text: DH
                  })
                }), (0, PH.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, PH.jsx)(kE.d, {
                    text: AH.description
                  })
                })]
              }), AH.userInput && (0, PH.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: HH => {
                  HH.stopPropagation();
                },
                children: [(0, PH.jsx)(uI, {
                  item: AH,
                  currInput: VH,
                  updateInput: IH => {
                    ((HH, IH, EH) => {
                      const hH = BI(HH, IH),
                        TH = (0, RH.b)({}, eH.userInputsPerItem);
                      TH[hH] = EH, LH({
                        userInputsPerItem: TH
                      });
                    })(CH, HH, IH);
                  },
                  onSubmit: HH => {
                    XH(HH);
                  }
                }), ("dropdown" !== AH.userInput.type || !AH.userInput.autoSubmit) && (0, PH.jsx)(GH.e, {
                  className: "ItemCostButton",
                  disabled: !rH && null !== VH,
                  onClick: () => {
                    XH();
                  },
                  children: (0, PH.jsx)(dI, {
                    item: AH,
                    cost: YH,
                    currencyAmounts: eH.currencyAmounts
                  })
                })]
              })]
            }), !AH.userInput && (0, PH.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, PH.jsx)(dI, {
                item: AH,
                cost: YH,
                currencyAmounts: eH.currencyAmounts
              })
            }), iI && FH === sH && (0, PH.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, PH.jsx)(kE.d, {
                text: DH
              }), (0, PH.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, PH.jsx)(kE.d, {
                  text: (0, gI.b)("", iI.enchantments, iI.enchantmentData)
                })
              })]
            })]
          }, sH);
        };
      return (0, PH.jsx)("div", {
        className: "Menu ShopBody",
        style: (0, RH.b)({}, (0, yH.x)(sH)),
        children: 0 !== Object.keys(eH.shopInfo).length && (0, PH.jsxs)(PH.Fragment, {
          children: [(0, PH.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, PH.jsx)(TH.A, {
              items: fI(eH.shopInfo).map(HH => {
                var IH;
                return {
                  id: HH,
                  title: null !== (IH = eH.shopInfo[HH].customTitle) && void 0 !== IH ? IH : HH,
                  redDot: eH.redDotInfo.categoryHasRedDot(HH)
                };
              }),
              selectedItemId: CH,
              onClick: kI
            }), (0, PH.jsx)("div", {
              className: "MenuSideBarFooter",
              children: eH.currencyAmounts && Object.keys(eH.currencyAmounts).map(HH => {
                var IH;
                const EH = eH.currencyAmounts[HH];
                return EH.hidden ? null : (0, PH.jsxs)("div", {
                  className: "ShopCurrencyDiv ".concat(DH ? "SmallText" : ""),
                  children: [(0, PH.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, PH.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: EH.iconColour
                      },
                      children: (0, PH.jsx)(lI, {
                        iconName: EH.icon
                      })
                    }), "\xa0", (0, ZI.e)(EH.amount, 6)]
                  }), (null === (IH = EH.subtext) || void 0 === IH ? void 0 : IH.length) > 0 && (0, PH.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, PH.jsx)(kE.d, {
                      text: EH.subtext
                    })
                  })]
                }, HH);
              })
            })]
          }), (0, PH.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [(0, PH.jsx)("div", {
              className: aH()("ShopOnBoughtInfo", {
                ShopOnBoughtInfoShow: null !== eH.onBoughtInfo
              }),
              children: (0, PH.jsx)(kE.d, {
                text: VH.current
              })
            }), (0, PH.jsxs)("div", {
              className: "ShopItemsWrapper",
              children: [(null === (IH = eH.shopInfo[CH]) || void 0 === IH ? void 0 : IH.description) && (0, PH.jsx)("div", {
                className: "ShopCategoryDescription",
                children: (0, PH.jsx)(kE.d, {
                  text: eH.shopInfo[CH].description
                })
              }), sH && (0, PH.jsx)("div", {
                className: "ShopItems",
                ref: YH,
                children: fI(null === (EH = eH.shopInfo[CH]) || void 0 === EH ? void 0 : EH.items).map((HH, IH) => UH(HH, IH))
              })]
            })]
          })]
        })
      });
    });
    function pI(HH) {
      let {
        item: IH,
        minWidth: EH,
        minHeight: RH
      } = HH;
      const {
        image: hH,
        schematicId: TH,
        imageColour: sH
      } = IH;
      if (TH) return (0, PH.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: "".concat(EH, "rem"),
          height: "".concat(RH, "rem")
        },
        children: (0, PH.jsx)(CI.c, {
          schematicId: TH,
          customThumbnailId: null
        })
      });
      var eH, GH;
      if ((0, oI.k)(hH)) return (0, PH.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: "".concat(EH, "rem"),
          height: "0",
          minHeight: "".concat(RH, "rem")
        },
        children: (0, PH.jsx)(oI.d, {
          itemName: hH,
          amount: null !== (eH = IH.amount) && void 0 !== eH ? eH : 0,
          amountFontSize: "".concat(RH / 4, "rem"),
          enchantmentTier: null === (GH = IH.enchant) || void 0 === GH ? void 0 : GH.tier
        })
      });
      const AH = hH.slice(-4);
      if (".jpg" === AH || ".png" === AH) {
        const HH = ".jpg" === AH ? 1.6 * EH : EH;
        return (0, PH.jsx)("img", {
          className: aH()({
            ShopPixelImage: ".png" === AH
          }),
          style: {
            width: "".concat(HH, "rem"),
            height: "auto",
            fontSize: "1.25rem"
          },
          src: "/textures/games/".concat((0, WH.Eb)(OH.singletons.connectedGameNameWithVariation), "/").concat(hH),
          alt: hH,
          draggable: !1
        });
      }
      return (0, PH.jsx)(YH.e, {
        name: hH,
        className: "SelectedItemImage",
        style: {
          color: sH
        }
      });
    }
    function dI(HH) {
      let {
        item: IH,
        cost: EH,
        currencyAmounts: RH
      } = HH;
      const hH = !isNaN(EH) && 0 !== EH && aI(RH, IH.currency);
      let TH = null;
      return IH.buyButtonText ? TH = IH.buyButtonText : hH ? (TH = EH, IH.sell && (TH = -1 * EH), TH = TH.toString()) : 0 === EH ? TH = "Free" : IH.isRewardedAd && (TH = "Watch ad"), (0, YI.p)(TH) || " " === TH ? null : (0, PH.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [hH && (0, PH.jsx)("div", {
          style: {
            color: RH[IH.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, PH.jsx)(lI, {
            iconName: RH[IH.currency].icon
          })
        }), (0, PH.jsx)("div", {
          className: "BuyItemCost",
          children: (0, PH.jsx)(kE.d, {
            text: TH
          })
        })]
      });
    }
    function uI(HH) {
      let {
        item: IH,
        currInput: EH,
        updateInput: RH,
        onSubmit: TH
      } = HH;
      const {
          t: sH
        } = (0, JH.q)(),
        eH = (0, hH.useRef)(null);
      if (!IH.userInput) return null;
      let GH = IH.userInput;
      if (QH.f.sanitizeShopInput && "text" === IH.userInput.type && (GH = {
        type: "number",
        placeholderText: "Numbers Only"
      }), "text" === GH.type || "number" === GH.type) {
        var VH, YH;
        console.assert(void 0 !== EH, "Rendered ItemUserInput but currInput is undefined. Item: ".concat(JSON.stringify(IH)));
        const HH = "text" === GH.type && GH.wordCharsOnly;
        return (0, PH.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, PH.jsx)(AH.d, {
            className: "ShopItemUserInputText",
            placeholderText: sH(GH.placeholderText),
            defaultValue: EH,
            domRef: eH,
            onValueChange: (IH, EH) => {
              !0 === HH && (IH = (0, UI.db)(IH)), eH.current.value = IH, RH(IH);
            },
            onEnter: TH,
            type: GH.type
          }, (null !== (VH = GH.initialValue) && void 0 !== VH ? VH : "") + (null !== (YH = GH.placeholderText) && void 0 !== YH ? YH : ""))
        });
      }
      if ("dropdown" === GH.type) {
        console.assert(void 0 !== EH, "Rendered ItemUserInput but currInput is undefined. Item: ".concat(JSON.stringify(IH)));
        const HH = GH.autoSubmit;
        return (0, PH.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, PH.jsx)(KH.b, {
            options: GH.dropdownOptions.map(HH => (0, qI.d)(HH)),
            value: EH,
            onChange: IH => {
              let {
                value: EH
              } = IH;
              RH(EH), HH && TH(EH);
            }
          })
        });
      }
      if ("player" === GH.type) {
        const HH = (0, OH.getBloxd)().getPlayersAvailableForShopInput((0, OH.RY)().EY, IH);
        return (0, PH.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, PH.jsx)(KH.b, {
            options: HH.map(HH => ({
              value: HH,
              label: (0, OH.getBloxd)().getEntityName(HH, !QH.f.canSeeRealPlayerNames)
            })),
            value: EH,
            onChange: HH => {
              let {
                value: IH
              } = HH;
              RH(IH);
            }
          })
        });
      }
      return "color" === GH.type ? (0, PH.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, PH.jsx)("input", {
          type: "color",
          value: EH,
          onChange: HH => {
            RH(HH.target.value);
          }
        })
      }) : null;
    }
    function lI(HH) {
      let {
        iconName: IH
      } = HH;
      return IH in OH.singletons.itemsClient ? (0, PH.jsx)(oI.d, {
        itemName: IH,
        amount: 1
      }) : (0, PH.jsx)(YH.e, {
        name: IH,
        className: "2x"
      });
    }
    const KI = (0, hH.lazy)(() => Promise.resolve().then(EH.bind(EH, 2067)).then(HH => ({
      default: HH.Lobbyleaderboard
    })));
    function wI(HH) {
      let {
        show: IH
      } = HH;
      return IH ? (0, PH.jsx)(hH.Suspense, {
        fallback: (0, PH.jsx)("div", {
          className: "CharacterCustomisationLoading",
          children: (0, PH.jsx)(MH.d, {})
        }),
        children: (0, PH.jsx)(KI, {})
      }) : null;
    }
    var zI = EH(1803),
      tI = EH(4080),
      jE = EH(1770);
    const vI = (0, hH.memo)(function () {
      const {
          t: HH
        } = (0, JH.q)(),
        {
          gameState: IH,
          openEverythingMenuName: EH,
          isTouchScreen: sH,
          initSdkSelectorFinished: eH
        } = (0, iI.j)(["gameState", "openEverythingMenuName", "isTouchScreen", "initSdkSelectorFinished"]),
        {
          userContext: AH
        } = (0, TH.cb)(),
        VH = (0, DH.N)(),
        YH = HH => sH ? null : (0, PH.jsx)(sI.b, {
          className: "EverythingMenuTabKey",
          noaAction: HH
        }),
        [rH, FH] = (0, hH.HY)(null),
        MH = (0, hH.useRef)(null),
        NH = null !== EH,
        XH = EH !== VI.s.COSMETIC_SHOP;
      async function mI() {
        await async function () {
          if (!rH) return;
          await rH(), FH(null);
        }(), iI.e.set({
          openEverythingMenuName: null
        });
      }
      const ZH = (0, hH.useMemo)(() => "inGame" === IH ? {
        text: HH("settingsMenu:exitGame"),
        onClick: () => {
          (0, OH.getBloxd)().client.leaveGame(), (0, XI.p)();
        }
      } : (0, qH.b)() ? {
        text: HH("settingsMenu:exitGame"),
        onClick: () => {
          yH.h.discordActivity().then(HH => {
            HH.exit("User exited the game");
          });
        }
      } : null, [IH, HH]);
      return (0, PH.jsx)(TH.o, {
        showing: NH,
        globallyUniqueKey: "EverythingMenu",
        alwaysMountChildren: !0,
        doGameplayStartStopOnShow: "inGame" === IH,
        children: (0, PH.jsx)("div", {
          className: "EverythingMenuContainer",
          style: (0, yH.x)(NH),
          children: (0, PH.jsx)(TH.s, {
            close: () => {
              mI();
            },
            togglePointerLock: !1,
            children: (0, PH.jsxs)("div", {
              className: "EverythingMenu",
              children: [EH !== VI.s.SHOP && (0, PH.jsxs)("div", {
                className: "EverythingMenuTabList",
                children: [(0, PH.jsx)("div", {
                  className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                  children: ZH && (0, PH.jsx)(GH.d, {
                    className: "EverythingMenuBackButton",
                    onClick: () => {
                      ZH.onClick();
                    },
                    children: ZH.text
                  })
                }), (0, PH.jsxs)("div", {
                  className: "EverythingMenuTabListInner",
                  children: [(0, PH.jsxs)("div", {
                    className: aH()("EverythingMenuTab", {
                      EverythingMenuTabActive: EH === VI.s.SETTINGS
                    }),
                    onClick: () => {
                      iI.e.set({
                        openEverythingMenuName: VI.s.SETTINGS
                      });
                    },
                    children: [HH("general:settings"), YH("OpenSettings")]
                  }), (0, PH.jsxs)("div", {
                    className: aH()("EverythingMenuTab", {
                      EverythingMenuTabActive: EH === VI.s.CUSTOMISATION
                    }),
                    onClick: () => {
                      iI.e.set({
                        openEverythingMenuName: VI.s.CUSTOMISATION
                      });
                    },
                    children: [HH("general:player"), YH("OpenCharacterCustomization")]
                  }), VH && (0, PH.jsx)("div", {
                    className: aH()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                      EverythingMenuTabActive: EH === VI.s.COSMETIC_SHOP
                    }),
                    onClick: () => {
                      iI.e.set({
                        openEverythingMenuName: VI.s.COSMETIC_SHOP
                      });
                    },
                    children: (0, PH.jsx)("span", {
                      className: "EverythingMenuTabCosmeticShopText",
                      children: HH("general:cosmeticShop")
                    })
                  }), "inGame" === IH && (0, PH.jsxs)("div", {
                    className: aH()("EverythingMenuTab", {
                      EverythingMenuTabActive: EH === VI.s.LOBBY_LEADERBOARD
                    }),
                    onClick: () => {
                      iI.e.set({
                        openEverythingMenuName: VI.s.LOBBY_LEADERBOARD
                      });
                    },
                    children: [HH("general:lobby"), YH("OpenLobbyLeaderboard")]
                  })]
                }), (0, PH.jsx)("div", {
                  className: "EverythingMenuTabListButtonContainer"
                })]
              }), (0, PH.jsx)("div", {
                className: "EverythingMenuCloseButtonClickZone",
                onClick: () => {
                  mI();
                },
                children: (0, PH.jsx)(GH.k, {
                  className: "EverythingMenuCloseButton"
                })
              }), (0, PH.jsxs)("div", {
                className: "EverythingMenuBody",
                style: {
                  "--everythingMenuBodyBackgroundOpacity": "inGame" === IH ? "0.85" : "0.4",
                  backgroundImage: "inGame" === IH ? "" : "url(".concat(tI, ")")
                },
                children: [(0, PH.jsx)(NI, {
                  show: EH === VI.s.SETTINGS,
                  setBeforeResumeCallback: FH
                }), (0, PH.jsx)(PI, {
                  show: EH === VI.s.CUSTOMISATION
                }), (0, PH.jsx)(nI, {
                  show: EH === VI.s.SHOP
                }), (0, PH.jsx)(wI, {
                  show: EH === VI.s.LOBBY_LEADERBOARD
                }), (0, PH.jsx)(zI.g, {
                  show: EH === VI.s.COSMETIC_SHOP
                })]
              }), !(0, QH.J)() && (0, mE.g)(AH.getPlayerRanks()) && (0, PH.jsx)("div", {
                ref: MH,
                className: "EverythingMenuBannerDiv",
                style: (0, RH.b)({}, (0, yH.x)(XH)),
                children: (0, PH.jsx)(jE.d, {
                  info: {
                    adId: 2,
                    adType: "leaderboard",
                    adAlias: "banner_shop"
                  },
                  sizeInfo: {
                    parentRef: MH
                  },
                  showing: NH && XH,
                  verticalAlign: "center",
                  horizontalAlign: "center",
                  noFillShowBloxdAdProbability: 1
                })
              })]
            })
          })
        })
      });
    });
  },
  2139: (HH, IH, EH) => {
    EH.d(IH, {
      e: () => JH
    });
    var RH = EH(17),
      hH = EH(2058),
      TH = EH(797),
      sH = EH(534),
      eH = EH(968),
      GH = EH(1056),
      AH = EH(946),
      VH = EH(557);
    const YH = {
      youtube: {
        icon: "youtube",
        color: "#FF0000",
        name: "YouTube"
      },
      tiktok: {
        icon: "tiktok",
        color: "#0F0F0F",
        name: "TikTok"
      },
      instagram: {
        icon: "instagram",
        color: "#E1306C",
        name: "Instagram"
      },
      twitter: {
        icon: "x-twitter",
        color: "#0F0F0F",
        name: "X"
      },
      twitch: {
        icon: "twitch",
        color: "#9146FF",
        name: "Twitch"
      }
    };
    function QH(HH) {
      let {
        platform: IH,
        link: EH,
        editable: QH,
        userContext: JH,
        onLinksUpdated: OH
      } = HH;
      const {
          t: rH
        } = (0, TH.q)(),
        FH = YH[IH];
      if (!EH && !QH) return null;
      function MH() {
        var HH;
        if (!JH || !OH) return;
        AH.d.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: FH.name
            }
          },
          prefixText: hH.B[IH],
          placeholderText: "playBloxd",
          initialValue: null !== (HH = null === EH || void 0 === EH ? void 0 : EH.handle) && void 0 !== HH ? HH : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: EH ? "general:clear" : void 0
        }).getResult().then(async HH => {
          if ("notificationTornDown" !== HH && null !== HH) try {
            "submit" === HH.type ? await GH.b.setSocialLink(JH, IH, HH.value) : await GH.b.clearSocialLink(JH, IH), OH();
          } catch (EH) {
            console.error("Failed to update social link", EH), AH.d.showAlertPopup({
              title: EH.errorMessageForUser,
              confirmText: "general:ok"
            });
          }
        });
      }
      if (EH) {
        const HH = "@".concat(EH.handle);
        return (0, VH.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: FH.color
          },
          href: EH.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, VH.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, VH.jsx)("span", {
              className: "PlayerProfileSocialLinkIcon",
              children: (0, VH.jsx)(sH.e, {
                name: FH.icon,
                kit: "brands"
              })
            }), (0, VH.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, VH.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: HH
              })
            })]
          }), QH && (0, VH.jsx)("button", (0, RH.b)((0, RH.b)({
            type: "button",
            className: "PlayerProfileSocialLinkEditButton"
          }, (0, eH.Q)({
            stopPropagation: !0
          })), {}, {
            onClick: HH => {
              HH.stopPropagation(), HH.preventDefault(), MH();
            },
            children: (0, VH.jsx)(sH.e, {
              name: "pen-to-square"
            })
          })), !QH && (0, VH.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, VH.jsx)(sH.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        });
      }
      return (0, VH.jsxs)("button", (0, RH.b)((0, RH.b)({
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: FH.color
        }
      }, (0, eH.Q)()), {}, {
        onClick: () => {
          MH();
        },
        children: [(0, VH.jsx)("span", {
          className: "PlayerProfileSocialLinkIcon",
          children: (0, VH.jsx)(sH.e, {
            name: FH.icon,
            kit: "brands"
          })
        }), (0, VH.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, VH.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: FH.name
          }), (0, VH.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: rH("homePage:profileSocialLinkAdd")
          })]
        }), (0, VH.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, VH.jsx)(sH.e, {
            name: "pen-to-square"
          })
        })]
      }));
    }
    function JH(HH) {
      let {
        socialLinks: IH,
        editable: EH = !1,
        userContext: RH,
        onLinksUpdated: TH
      } = HH;
      if (!EH && 0 === IH.length) return null;
      const sH = new Map(IH.map(HH => [HH.platform, HH])),
        eH = EH ? hH.z : IH.map(HH => HH.platform);
      return (0, VH.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, VH.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: eH.map(HH => (0, VH.jsx)(QH, {
            platform: HH,
            link: sH.get(HH),
            editable: EH,
            userContext: RH,
            onLinksUpdated: TH
          }, HH))
        })
      });
    }
  },
  4080: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nExOwQqAIBQzfYEYdi36tK7+fOAtIQTRWi2ihw7m9jYlhHWeltqaUsporZ4ppYq1jk/QKLd6AgUXnASjTYfzCintwJwPasyQwXlavB9j3NiHAOl7QyM4vKglFXB+hsjtW8D6l/vvuwAAAP//LYr45gAAAAZJREFUAwB2ITdhawtJAwAAAABJRU5ErkJggg==";
  }
};
//# sourceMappingURL=ug4nu.13.b8223db9.chunk.js.map
//# debugId=6467d6f7-d6c3-5af7-adef-49f9deb50f94