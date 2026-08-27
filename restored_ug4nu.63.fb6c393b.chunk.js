/*! For license information please see ug4nu.63.fb6c393b.chunk.js.LICENSE.txt */

!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "930e7b9a-9d3e-5a6b-8d4e-9e8d10808f95");
  } catch (e) {}
}();
export const id = 63;
export const ids = [63];
export const modules = {
  24056: (HH, IH, EH) => {
    EH.r(IH), EH.d(IH, {
      getAnalytics: () => tI,
      getGoogleAnalyticsClientId: () => SI,
      initializeAnalytics: () => jE,
      isSupported: () => vI,
      logEvent: () => RE,
      setAnalyticsCollectionEnabled: () => IE,
      setConsent: () => hE,
      setCurrentScreen: () => bI,
      setDefaultEventParameters: () => EE,
      setUserId: () => xI,
      setUserProperties: () => HE,
      settings: () => wI
    });
    var RH = EH(24032),
      hH = EH(24054),
      TH = EH(24049),
      sH = EH(24040),
      eH = EH(17);
    let GH, AH;
    const VH = new WeakMap(),
      YH = new WeakMap(),
      QH = new WeakMap(),
      JH = new WeakMap(),
      OH = new WeakMap();
    let rH = {
      get(HH, IH, EH) {
        if (HH instanceof IDBTransaction) {
          if ("done" === IH) return YH.get(HH);
          if ("objectStoreNames" === IH) return HH.objectStoreNames || QH.get(HH);
          if ("store" === IH) return EH.objectStoreNames[1] ? void 0 : EH.objectStore(EH.objectStoreNames[0]);
        }
        return NH(HH[IH]);
      },
      set: (HH, IH, EH) => (HH[IH] = EH, !0),
      has: (HH, IH) => HH instanceof IDBTransaction && ("done" === IH || "store" === IH) || IH in HH
    };
    function FH(HH) {
      return HH !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (AH || (AH = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(HH) ? function () {
        for (var IH = arguments.length, EH = new Array(IH), RH = 0; RH < IH; RH++) EH[RH] = arguments[RH];
        return HH.apply(iI(this), EH), NH(VH.get(this));
      } : function () {
        for (var IH = arguments.length, EH = new Array(IH), RH = 0; RH < IH; RH++) EH[RH] = arguments[RH];
        return NH(HH.apply(iI(this), EH));
      } : function (IH) {
        for (var EH = arguments.length, RH = new Array(EH > 1 ? EH - 1 : 0), hH = 1; hH < EH; hH++) RH[hH - 1] = arguments[hH];
        const TH = HH.call(iI(this), IH, ...RH);
        return QH.set(TH, IH.sort ? IH.sort() : [IH]), NH(TH);
      };
    }
    function MH(HH) {
      return "function" === typeof HH ? FH(HH) : (HH instanceof IDBTransaction && function (HH) {
        if (YH.has(HH)) return;
        const IH = new Promise((IH, EH) => {
          const RH = () => {
              HH.removeEventListener("complete", hH), HH.removeEventListener("error", TH), HH.removeEventListener("abort", TH);
            },
            hH = () => {
              IH(), RH();
            },
            TH = () => {
              EH(HH.error || new DOMException("AbortError", "AbortError")), RH();
            };
          HH.addEventListener("complete", hH), HH.addEventListener("error", TH), HH.addEventListener("abort", TH);
        });
        YH.set(HH, IH);
      }(HH), IH = HH, (GH || (GH = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some(HH => IH instanceof HH) ? new Proxy(HH, rH) : HH);
      var IH;
    }
    function NH(HH) {
      if (HH instanceof IDBRequest) return function (HH) {
        const IH = new Promise((IH, EH) => {
          const RH = () => {
              HH.removeEventListener("success", hH), HH.removeEventListener("error", TH);
            },
            hH = () => {
              IH(NH(HH.result)), RH();
            },
            TH = () => {
              EH(HH.error), RH();
            };
          HH.addEventListener("success", hH), HH.addEventListener("error", TH);
        });
        return IH.then(IH => {
          IH instanceof IDBCursor && VH.set(IH, HH);
        }).catch(() => {}), OH.set(IH, HH), IH;
      }(HH);
      if (JH.has(HH)) return JH.get(HH);
      const IH = MH(HH);
      return IH !== HH && (JH.set(HH, IH), OH.set(IH, HH)), IH;
    }
    const iI = HH => OH.get(HH);
    const DH = ["get", "getKey", "getAll", "getAllKeys", "count"],
      PH = ["put", "add", "delete", "clear"],
      XH = new Map();
    function mI(HH, IH) {
      if (!(HH instanceof IDBDatabase) || IH in HH || "string" !== typeof IH) return;
      if (XH.get(IH)) return XH.get(IH);
      const EH = IH.replace(/FromIndex$/, ""),
        RH = IH !== EH,
        hH = PH.includes(EH);
      if (!(EH in (RH ? IDBIndex : IDBObjectStore).prototype) || !hH && !DH.includes(EH)) return;
      const TH = async function (HH) {
        const IH = this.transaction(HH, hH ? "readwrite" : "readonly");
        let TH = IH.store;
        for (var sH = arguments.length, eH = new Array(sH > 1 ? sH - 1 : 0), GH = 1; GH < sH; GH++) eH[GH - 1] = arguments[GH];
        return RH && (TH = TH.index(eH.shift())), (await Promise.all([TH[EH](...eH), hH && IH.done]))[0];
      };
      return XH.set(IH, TH), TH;
    }
    rH = (HH => (0, eH.b)((0, eH.b)({}, HH), {}, {
      get: (IH, EH, RH) => mI(IH, EH) || HH.get(IH, EH, RH),
      has: (IH, EH) => !!mI(IH, EH) || HH.has(IH, EH)
    }))(rH);
    const ZH = "@firebase/installations",
      qH = "0.6.4",
      LH = 1e4,
      gH = "w:".concat(qH),
      yH = "FIS_v2",
      oH = 36e5,
      kI = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      CH = new TH.f("installations", "Installations", kI);
    function cH(HH) {
      return HH instanceof TH.h && HH.code.includes("request-failed");
    }
    function UH(HH) {
      let {
        projectId: IH
      } = HH;
      return "".concat("https://firebaseinstallations.googleapis.com/v1", "/projects/").concat(IH, "/installations");
    }
    function WH(HH) {
      return {
        token: HH.token,
        requestStatus: 2,
        expiresIn: (IH = HH.expiresIn, Number(IH.replace("s", "000"))),
        creationTime: Date.now()
      };
      var IH;
    }
    async function BH(HH, IH) {
      const EH = (await IH.json()).error;
      return CH.create("request-failed", {
        requestName: HH,
        serverCode: EH.code,
        serverMessage: EH.message,
        serverStatus: EH.status
      });
    }
    function fH(HH) {
      let {
        apiKey: IH
      } = HH;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": IH
      });
    }
    function aH(HH, IH) {
      let {
        refreshToken: EH
      } = IH;
      const RH = fH(HH);
      return RH.append("Authorization", function (HH) {
        return "".concat(yH, " ").concat(HH);
      }(EH)), RH;
    }
    async function nH(HH) {
      const IH = await HH();
      return IH.status >= 500 && IH.status < 600 ? HH() : IH;
    }
    function pH(HH) {
      return new Promise(IH => {
        setTimeout(IH, HH);
      });
    }
    const dH = /^[cdef][\w-]{21}$/;
    function uH() {
      try {
        const HH = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(HH), HH[0] = 112 + HH[0] % 16;
        const IH = function (HH) {
          const IH = (EH = HH, btoa(String.fromCharCode(...EH)).replace(/\+/g, "-").replace(/\//g, "_"));
          var EH;
          return IH.substr(0, 22);
        }(HH);
        return dH.test(IH) ? IH : "";
      } catch (HH) {
        return "";
      }
    }
    function lH(HH) {
      return "".concat(HH.appName, "!").concat(HH.appId);
    }
    const KH = new Map();
    function wH(HH, IH) {
      const EH = lH(HH);
      zH(EH, IH), function (HH, IH) {
        const EH = jI();
        EH && EH.postMessage({
          key: HH,
          fid: IH
        });
        vH();
      }(EH, IH);
    }
    function zH(HH, IH) {
      const EH = KH.get(HH);
      if (EH) for (const RH of EH) RH(IH);
    }
    let tH = null;
    function jI() {
      return !tH && "BroadcastChannel" in self && (tH = new BroadcastChannel("[Firebase] FID Change"), tH.onmessage = HH => {
        zH(HH.data.key, HH.data.fid);
      }), tH;
    }
    function vH() {
      0 === KH.size && tH && (tH.close(), tH = null);
    }
    const bH = "firebase-installations-store";
    let SH = null;
    function xH() {
      return SH || (SH = function (HH, IH) {
        let {
          blocked: EH,
          upgrade: RH,
          blocking: hH,
          terminated: TH
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const sH = indexedDB.open(HH, IH),
          eH = NH(sH);
        return RH && sH.addEventListener("upgradeneeded", HH => {
          RH(NH(sH.result), HH.oldVersion, HH.newVersion, NH(sH.transaction));
        }), EH && sH.addEventListener("blocked", () => EH()), eH.then(HH => {
          TH && HH.addEventListener("close", () => TH()), hH && HH.addEventListener("versionchange", () => hH());
        }).catch(() => {}), eH;
      }("firebase-installations-database", 1, {
        upgrade: (HH, IH) => {
          if (0 === IH) HH.createObjectStore(bH);
        }
      })), SH;
    }
    async function HI(HH, IH) {
      const EH = lH(HH),
        RH = (await xH()).transaction(bH, "readwrite"),
        hH = RH.objectStore(bH),
        TH = await hH.get(EH);
      return await hH.put(IH, EH), await RH.done, TH && TH.fid === IH.fid || wH(HH, IH.fid), IH;
    }
    async function II(HH) {
      const IH = lH(HH),
        EH = (await xH()).transaction(bH, "readwrite");
      await EH.objectStore(bH).delete(IH), await EH.done;
    }
    async function EI(HH, IH) {
      const EH = lH(HH),
        RH = (await xH()).transaction(bH, "readwrite"),
        hH = RH.objectStore(bH),
        TH = await hH.get(EH),
        sH = IH(TH);
      return void 0 === sH ? await hH.delete(EH) : await hH.put(sH, EH), await RH.done, !sH || TH && TH.fid === sH.fid || wH(HH, sH.fid), sH;
    }
    async function RI(HH) {
      let IH;
      const EH = await EI(HH.appConfig, EH => {
        const RH = function (HH) {
            const IH = HH || {
              fid: uH(),
              registrationStatus: 0
            };
            return sI(IH);
          }(EH),
          hH = function (HH, IH) {
            if (0 === IH.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: IH,
                  registrationPromise: Promise.reject(CH.create("app-offline"))
                };
              }
              const EH = {
                  fid: IH.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                RH = async function (HH, IH) {
                  try {
                    const EH = await async function (HH, IH) {
                      let {
                          appConfig: EH,
                          heartbeatServiceProvider: RH
                        } = HH,
                        {
                          fid: hH
                        } = IH;
                      const TH = UH(EH),
                        sH = fH(EH),
                        eH = RH.getImmediate({
                          optional: !0
                        });
                      if (eH) {
                        const HH = await eH.getHeartbeatsHeader();
                        HH && sH.append("x-firebase-client", HH);
                      }
                      const GH = {
                          fid: hH,
                          authVersion: yH,
                          appId: EH.appId,
                          sdkVersion: gH
                        },
                        AH = {
                          method: "POST",
                          headers: sH,
                          body: JSON.stringify(GH)
                        },
                        VH = await nH(() => fetch(TH, AH));
                      if (VH.ok) {
                        const HH = await VH.json();
                        return {
                          fid: HH.fid || hH,
                          registrationStatus: 2,
                          refreshToken: HH.refreshToken,
                          authToken: WH(HH.authToken)
                        };
                      }
                      throw await BH("Create Installation", VH);
                    }(HH, IH);
                    return HI(HH.appConfig, EH);
                  } catch (EH) {
                    throw cH(EH) && 409 === EH.customData.serverCode ? await II(HH.appConfig) : await HI(HH.appConfig, {
                      fid: IH.fid,
                      registrationStatus: 0
                    }), EH;
                  }
                }(HH, EH);
              return {
                installationEntry: EH,
                registrationPromise: RH
              };
            }
            return 1 === IH.registrationStatus ? {
              installationEntry: IH,
              registrationPromise: hI(HH)
            } : {
              installationEntry: IH
            };
          }(HH, RH);
        return IH = hH.registrationPromise, hH.installationEntry;
      });
      return "" === EH.fid ? {
        installationEntry: await IH
      } : {
        installationEntry: EH,
        registrationPromise: IH
      };
    }
    async function hI(HH) {
      let IH = await TI(HH.appConfig);
      for (; 1 === IH.registrationStatus;) await pH(100), IH = await TI(HH.appConfig);
      if (0 === IH.registrationStatus) {
        const {
          installationEntry: IH,
          registrationPromise: EH
        } = await RI(HH);
        return EH || IH;
      }
      return IH;
    }
    function TI(HH) {
      return EI(HH, HH => {
        if (!HH) throw CH.create("installation-not-found");
        return sI(HH);
      });
    }
    function sI(HH) {
      return 1 === (IH = HH).registrationStatus && IH.registrationTime + LH < Date.now() ? {
        fid: HH.fid,
        registrationStatus: 0
      } : HH;
      var IH;
    }
    async function eI(HH, IH) {
      let {
        appConfig: EH,
        heartbeatServiceProvider: RH
      } = HH;
      const hH = function (HH, IH) {
          let {
            fid: EH
          } = IH;
          return "".concat(UH(HH), "/").concat(EH, "/authTokens:generate");
        }(EH, IH),
        TH = aH(EH, IH),
        sH = RH.getImmediate({
          optional: !0
        });
      if (sH) {
        const HH = await sH.getHeartbeatsHeader();
        HH && TH.append("x-firebase-client", HH);
      }
      const eH = {
          installation: {
            sdkVersion: gH,
            appId: EH.appId
          }
        },
        GH = {
          method: "POST",
          headers: TH,
          body: JSON.stringify(eH)
        },
        AH = await nH(() => fetch(hH, GH));
      if (AH.ok) {
        return WH(await AH.json());
      }
      throw await BH("Generate Auth Token", AH);
    }
    async function GI(HH) {
      let IH,
        EH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const RH = await EI(HH.appConfig, RH => {
        if (!VI(RH)) throw CH.create("not-registered");
        const hH = RH.authToken;
        if (!EH && function (HH) {
          return 2 === HH.requestStatus && !function (HH) {
            const IH = Date.now();
            return IH < HH.creationTime || HH.creationTime + HH.expiresIn < IH + oH;
          }(HH);
        }(hH)) return RH;
        if (1 === hH.requestStatus) return IH = async function (HH, IH) {
          let EH = await AI(HH.appConfig);
          for (; 1 === EH.authToken.requestStatus;) await pH(100), EH = await AI(HH.appConfig);
          const RH = EH.authToken;
          return 0 === RH.requestStatus ? GI(HH, IH) : RH;
        }(HH, EH), RH;
        {
          if (!navigator.onLine) throw CH.create("app-offline");
          const EH = function (HH) {
            const IH = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, HH), {
              authToken: IH
            });
          }(RH);
          return IH = async function (HH, IH) {
            try {
              const EH = await eI(HH, IH),
                RH = Object.assign(Object.assign({}, IH), {
                  authToken: EH
                });
              return await HI(HH.appConfig, RH), EH;
            } catch (EH) {
              if (!cH(EH) || 401 !== EH.customData.serverCode && 404 !== EH.customData.serverCode) {
                const EH = Object.assign(Object.assign({}, IH), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await HI(HH.appConfig, EH);
              } else await II(HH.appConfig);
              throw EH;
            }
          }(HH, EH), EH;
        }
      });
      return IH ? await IH : RH.authToken;
    }
    function AI(HH) {
      return EI(HH, HH => {
        if (!VI(HH)) throw CH.create("not-registered");
        const IH = HH.authToken;
        return 1 === (EH = IH).requestStatus && EH.requestTime + LH < Date.now() ? Object.assign(Object.assign({}, HH), {
          authToken: {
            requestStatus: 0
          }
        }) : HH;
        var EH;
      });
    }
    function VI(HH) {
      return void 0 !== HH && 2 === HH.registrationStatus;
    }
    async function YI(HH) {
      let IH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const EH = HH;
      await async function (HH) {
        const {
          registrationPromise: IH
        } = await RI(HH);
        IH && (await IH);
      }(EH);
      return (await GI(EH, IH)).token;
    }
    function QI(HH) {
      return CH.create("missing-app-config-values", {
        valueName: HH
      });
    }
    const JI = "installations",
      OI = HH => {
        const IH = HH.getProvider("app").getImmediate(),
          EH = function (HH) {
            if (!HH || !HH.options) throw QI("App Configuration");
            if (!HH.name) throw QI("App Name");
            const IH = ["projectId", "apiKey", "appId"];
            for (const EH of IH) if (!HH.options[EH]) throw QI(EH);
            return {
              appName: HH.name,
              projectId: HH.options.projectId,
              apiKey: HH.options.apiKey,
              appId: HH.options.appId
            };
          }(IH);
        return {
          app: IH,
          appConfig: EH,
          heartbeatServiceProvider: (0, RH.F)(IH, "heartbeat"),
          _delete: () => Promise.resolve()
        };
      },
      rI = HH => {
        const IH = HH.getProvider("app").getImmediate(),
          EH = (0, RH.F)(IH, JI).getImmediate();
        return {
          getId: () => async function (HH) {
            const IH = HH,
              {
                installationEntry: EH,
                registrationPromise: RH
              } = await RI(IH);
            return RH ? RH.catch(console.error) : GI(IH).catch(console.error), EH.fid;
          }(EH),
          getToken: HH => YI(EH, HH)
        };
      };
    (0, RH.J)(new sH.i(JI, OI, "PUBLIC")), (0, RH.J)(new sH.i("installations-internal", rI, "PRIVATE")), (0, RH._)(ZH, qH), (0, RH._)(ZH, qH, "esm2017");
    const FI = "analytics",
      MI = "https://www.googletagmanager.com/gtag/js",
      NI = new hH.d("@firebase/analytics"),
      iE = {
        "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
        "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",
        "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
        "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
        "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
        "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
        "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
        "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
        "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
        "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
        "no-client-id": 'The "client_id" field is empty.',
        "invalid-gtag-resource": "Trusted Types detected an invalid gtag resource: {$gtagURL}."
      },
      DI = new TH.f("analytics", "Analytics", iE);
    function PI(HH) {
      if (!HH.startsWith(MI)) {
        const IH = DI.create("invalid-gtag-resource", {
          gtagURL: HH
        });
        return NI.warn(IH.message), "";
      }
      return HH;
    }
    function XI(HH) {
      return Promise.all(HH.map(HH => HH.catch(HH => HH)));
    }
    function mE(HH, IH) {
      const EH = function (HH, IH) {
          let EH;
          return window.trustedTypes && (EH = window.trustedTypes.createPolicy(HH, IH)), EH;
        }("firebase-js-sdk-policy", {
          createScriptURL: PI
        }),
        RH = document.createElement("script"),
        hH = "".concat(MI, "?l=").concat(HH, "&id=").concat(IH);
      RH.src = EH ? null === EH || void 0 === EH ? void 0 : EH.createScriptURL(hH) : hH, RH.async = !0, document.head.appendChild(RH);
    }
    function ZI(HH, IH, EH, RH) {
      return async function (hH) {
        try {
          for (var TH = arguments.length, sH = new Array(TH > 1 ? TH - 1 : 0), eH = 1; eH < TH; eH++) sH[eH - 1] = arguments[eH];
          if ("event" === hH) {
            const [RH, hH] = sH;
            await async function (HH, IH, EH, RH, hH) {
              try {
                let TH = [];
                if (hH && hH.send_to) {
                  let HH = hH.send_to;
                  Array.isArray(HH) || (HH = [HH]);
                  const RH = await XI(EH);
                  for (const EH of HH) {
                    const HH = RH.find(HH => HH.measurementId === EH),
                      hH = HH && IH[HH.appId];
                    if (!hH) {
                      TH = [];
                      break;
                    }
                    TH.push(hH);
                  }
                }
                0 === TH.length && (TH = Object.values(IH)), await Promise.all(TH), HH("event", RH, hH || {});
              } catch (TH) {
                NI.error(TH);
              }
            }(HH, IH, EH, RH, hH);
          } else if ("config" === hH) {
            const [hH, TH] = sH;
            await async function (HH, IH, EH, RH, hH, TH) {
              const sH = RH[hH];
              try {
                if (sH) await IH[sH];else {
                  const HH = (await XI(EH)).find(HH => HH.measurementId === hH);
                  HH && (await IH[HH.appId]);
                }
              } catch (eH) {
                NI.error(eH);
              }
              HH("config", hH, TH);
            }(HH, IH, EH, RH, hH, TH);
          } else if ("consent" === hH) {
            const [IH] = sH;
            HH("consent", "update", IH);
          } else if ("get" === hH) {
            const [IH, EH, RH] = sH;
            HH("get", IH, EH, RH);
          } else if ("set" === hH) {
            const [IH] = sH;
            HH("set", IH);
          } else HH(hH, ...sH);
        } catch (GH) {
          NI.error(GH);
        }
      };
    }
    const qI = new class {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = HH, this.intervalMillis = IH;
      }
      getThrottleMetadata(HH) {
        return this.throttleMetadata[HH];
      }
      setThrottleMetadata(HH, IH) {
        this.throttleMetadata[HH] = IH;
      }
      deleteThrottleMetadata(HH) {
        delete this.throttleMetadata[HH];
      }
    }();
    function LI(HH) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": HH
      });
    }
    async function gI(HH) {
      let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qI,
        EH = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: RH,
        apiKey: hH,
        measurementId: TH
      } = HH.options;
      if (!RH) throw DI.create("no-app-id");
      if (!hH) {
        if (TH) return {
          measurementId: TH,
          appId: RH
        };
        throw DI.create("no-api-key");
      }
      const sH = IH.getThrottleMetadata(RH) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        eH = new oI();
      return setTimeout(async () => {
        eH.abort();
      }, void 0 !== EH ? EH : 6e4), yI({
        appId: RH,
        apiKey: hH,
        measurementId: TH
      }, sH, eH, IH);
    }
    async function yI(HH, IH, EH) {
      let {
          throttleEndTimeMillis: RH,
          backoffCount: hH
        } = IH,
        sH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qI;
      var eH;
      const {
        appId: GH,
        measurementId: AH
      } = HH;
      try {
        await function (HH, IH) {
          return new Promise((EH, RH) => {
            const hH = Math.max(IH - Date.now(), 0),
              TH = setTimeout(EH, hH);
            HH.addEventListener(() => {
              clearTimeout(TH), RH(DI.create("fetch-throttle", {
                throttleEndTimeMillis: IH
              }));
            });
          });
        }(EH, RH);
      } catch (VH) {
        if (AH) return NI.warn("Timed out fetching this Firebase app's measurement ID from the server." + " Falling back to the measurement ID ".concat(AH) + ' provided in the "measurementId" field in the local Firebase config. ['.concat(null === VH || void 0 === VH ? void 0 : VH.message, "]")), {
          appId: GH,
          measurementId: AH
        };
        throw VH;
      }
      try {
        const IH = await async function (HH) {
          var IH;
          const {
              appId: EH,
              apiKey: RH
            } = HH,
            hH = {
              method: "GET",
              headers: LI(RH)
            },
            TH = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", EH),
            sH = await fetch(TH, hH);
          if (200 !== sH.status && 304 !== sH.status) {
            let HH = "";
            try {
              const EH = await sH.json();
              (null === (IH = EH.error) || void 0 === IH ? void 0 : IH.message) && (HH = EH.error.message);
            } catch (eH) {}
            throw DI.create("config-fetch-failed", {
              httpStatus: sH.status,
              responseMessage: HH
            });
          }
          return sH.json();
        }(HH);
        return sH.deleteThrottleMetadata(GH), IH;
      } catch (VH) {
        const IH = VH;
        if (!function (HH) {
          if (!(HH instanceof TH.h) || !HH.customData) return !1;
          const IH = Number(HH.customData.httpStatus);
          return 429 === IH || 500 === IH || 503 === IH || 504 === IH;
        }(IH)) {
          if (sH.deleteThrottleMetadata(GH), AH) return NI.warn("Failed to fetch this Firebase app's measurement ID from the server." + " Falling back to the measurement ID ".concat(AH) + ' provided in the "measurementId" field in the local Firebase config. ['.concat(null === IH || void 0 === IH ? void 0 : IH.message, "]")), {
            appId: GH,
            measurementId: AH
          };
          throw VH;
        }
        const RH = 503 === Number(null === (eH = null === IH || void 0 === IH ? void 0 : IH.customData) || void 0 === eH ? void 0 : eH.httpStatus) ? (0, TH.p)(hH, sH.intervalMillis, 30) : (0, TH.p)(hH, sH.intervalMillis),
          YH = {
            throttleEndTimeMillis: Date.now() + RH,
            backoffCount: hH + 1
          };
        return sH.setThrottleMetadata(GH, YH), NI.debug("Calling attemptFetch again in ".concat(RH, " millis")), yI(HH, YH, EH, sH);
      }
    }
    class oI {
      constructor() {
        this.listeners = [];
      }
      addEventListener(HH) {
        this.listeners.push(HH);
      }
      abort() {
        this.listeners.forEach(HH => HH());
      }
    }
    let kE, CI;
    function cI(HH) {
      CI = HH;
    }
    function UI(HH) {
      kE = HH;
    }
    async function WI(HH, IH, EH, RH, hH, sH, eH) {
      var GH;
      const AH = gI(HH);
      AH.then(IH => {
        EH[IH.measurementId] = IH.appId, HH.options.measurementId && IH.measurementId !== HH.options.measurementId && NI.warn("The measurement ID in the local Firebase config (".concat(HH.options.measurementId, ")") + " does not match the measurement ID fetched from the server (".concat(IH.measurementId, ").") + " To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.");
      }).catch(HH => NI.error(HH)), IH.push(AH);
      const VH = async function () {
          if (!(0, TH.V)()) return NI.warn(DI.create("indexeddb-unavailable", {
            errorInfo: "IndexedDB is not available in this environment."
          }).message), !1;
          try {
            await (0, TH.bb)();
          } catch (HH) {
            return NI.warn(DI.create("indexeddb-unavailable", {
              errorInfo: null === HH || void 0 === HH ? void 0 : HH.toString()
            }).message), !1;
          }
          return !0;
        }().then(HH => HH ? RH.getId() : void 0),
        [YH, QH] = await Promise.all([AH, VH]);
      (function (HH) {
        const IH = window.document.getElementsByTagName("script");
        for (const EH of Object.values(IH)) if (EH.src && EH.src.includes(MI) && EH.src.includes(HH)) return EH;
        return null;
      })(sH) || mE(sH, YH.measurementId), CI && (hH("consent", "default", CI), cI(void 0)), hH("js", new Date());
      const JH = null !== (GH = null === eH || void 0 === eH ? void 0 : eH.config) && void 0 !== GH ? GH : {};
      return JH.origin = "firebase", JH.update = !0, null != QH && (JH.firebase_id = QH), hH("config", YH.measurementId, JH), kE && (hH("set", kE), UI(void 0)), YH.measurementId;
    }
    class BI {
      constructor(HH) {
        this.app = HH;
      }
      _delete() {
        return delete fI[this.app.options.appId], Promise.resolve();
      }
    }
    let fI = {},
      aI = [];
    const nI = {};
    let pI,
      dI,
      uI = "dataLayer",
      lI = "gtag",
      KI = !1;
    function wI(HH) {
      if (KI) throw DI.create("already-initialized");
      HH.dataLayerName && (uI = HH.dataLayerName), HH.gtagName && (lI = HH.gtagName);
    }
    function zI(HH, IH, EH) {
      !function () {
        const HH = [];
        if ((0, TH.M)() && HH.push("This is a browser extension environment."), (0, TH.j)() || HH.push("Cookies are not available."), HH.length > 0) {
          const IH = HH.map((HH, IH) => "(".concat(IH + 1, ") ").concat(HH)).join(" "),
            EH = DI.create("invalid-analytics-context", {
              errorInfo: IH
            });
          NI.warn(EH.message);
        }
      }();
      const RH = HH.options.appId;
      if (!RH) throw DI.create("no-app-id");
      if (!HH.options.apiKey) {
        if (!HH.options.measurementId) throw DI.create("no-api-key");
        NI.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest' + " measurement ID for this Firebase app. Falling back to the measurement ID ".concat(HH.options.measurementId) + ' provided in the "measurementId" field in the local Firebase config.');
      }
      if (null != fI[RH]) throw DI.create("already-exists", {
        id: RH
      });
      if (!KI) {
        !function (HH) {
          let IH = [];
          Array.isArray(window[HH]) ? IH = window[HH] : window[HH] = IH;
        }(uI);
        const {
          wrappedGtag: HH,
          gtagCore: IH
        } = function (HH, IH, EH, RH, hH) {
          let TH = function () {
            for (var HH = arguments.length, IH = new Array(HH), EH = 0; EH < HH; EH++) IH[EH] = arguments[EH];
            window[RH].push(arguments);
          };
          return window[hH] && "function" === typeof window[hH] && (TH = window[hH]), window[hH] = ZI(TH, HH, IH, EH), {
            gtagCore: TH,
            wrappedGtag: window[hH]
          };
        }(fI, aI, nI, uI, lI);
        dI = HH, pI = IH, KI = !0;
      }
      fI[RH] = WI(HH, aI, nI, IH, pI, uI, EH);
      return new BI(HH);
    }
    function tI() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, RH.U)();
      HH = (0, TH.G)(HH);
      const IH = (0, RH.F)(HH, FI);
      return IH.isInitialized() ? IH.getImmediate() : jE(HH);
    }
    function jE(HH) {
      let IH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const EH = (0, RH.F)(HH, FI);
      if (EH.isInitialized()) {
        const HH = EH.getImmediate();
        if ((0, TH.t)(IH, EH.getOptions())) return HH;
        throw DI.create("already-initialized");
      }
      return EH.initialize({
        options: IH
      });
    }
    async function vI() {
      if ((0, TH.M)()) return !1;
      if (!(0, TH.j)()) return !1;
      if (!(0, TH.V)()) return !1;
      try {
        return await (0, TH.bb)();
      } catch (HH) {
        return !1;
      }
    }
    function bI(HH, IH, EH) {
      HH = (0, TH.G)(HH), async function (HH, IH, EH, RH) {
        if (RH && RH.global) return HH("set", {
          screen_name: EH
        }), Promise.resolve();
        HH("config", await IH, {
          update: !0,
          screen_name: EH
        });
      }(dI, fI[HH.app.options.appId], IH, EH).catch(HH => NI.error(HH));
    }
    async function SI(HH) {
      return HH = (0, TH.G)(HH), async function (HH, IH) {
        const EH = await IH;
        return new Promise((IH, RH) => {
          HH("get", EH, "client_id", HH => {
            HH || RH(DI.create("no-client-id")), IH(HH);
          });
        });
      }(dI, fI[HH.app.options.appId]);
    }
    function xI(HH, IH, EH) {
      HH = (0, TH.G)(HH), async function (HH, IH, EH, RH) {
        if (RH && RH.global) return HH("set", {
          user_id: EH
        }), Promise.resolve();
        HH("config", await IH, {
          update: !0,
          user_id: EH
        });
      }(dI, fI[HH.app.options.appId], IH, EH).catch(HH => NI.error(HH));
    }
    function HE(HH, IH, EH) {
      HH = (0, TH.G)(HH), async function (HH, IH, EH, RH) {
        if (RH && RH.global) {
          const IH = {};
          for (const HH of Object.keys(EH)) IH["user_properties.".concat(HH)] = EH[HH];
          return HH("set", IH), Promise.resolve();
        }
        HH("config", await IH, {
          update: !0,
          user_properties: EH
        });
      }(dI, fI[HH.app.options.appId], IH, EH).catch(HH => NI.error(HH));
    }
    function IE(HH, IH) {
      HH = (0, TH.G)(HH), async function (HH, IH) {
        const EH = await HH;
        window["ga-disable-".concat(EH)] = !IH;
      }(fI[HH.app.options.appId], IH).catch(HH => NI.error(HH));
    }
    function EE(HH) {
      dI ? dI("set", HH) : UI(HH);
    }
    function RE(HH, IH, EH, RH) {
      HH = (0, TH.G)(HH), async function (HH, IH, EH, RH, hH) {
        if (hH && hH.global) HH("event", EH, RH);else {
          const hH = await IH;
          HH("event", EH, Object.assign(Object.assign({}, RH), {
            send_to: hH
          }));
        }
      }(dI, fI[HH.app.options.appId], IH, EH, RH).catch(HH => NI.error(HH));
    }
    function hE(HH) {
      dI ? dI("consent", "update", HH) : cI(HH);
    }
    const TE = "@firebase/analytics",
      sE = "0.10.0";
    (0, RH.J)(new sH.i(FI, (HH, IH) => {
      let {
        options: EH
      } = IH;
      return zI(HH.getProvider("app").getImmediate(), HH.getProvider("installations-internal").getImmediate(), EH);
    }, "PUBLIC")), (0, RH.J)(new sH.i("analytics-internal", function (HH) {
      try {
        const IH = HH.getProvider(FI).getImmediate();
        return {
          logEvent: (HH, EH, RH) => RE(IH, HH, EH, RH)
        };
      } catch (IH) {
        throw DI.create("interop-component-reg-failed", {
          reason: IH
        });
      }
    }, "PRIVATE")), (0, RH._)(TE, sE), (0, RH._)(TE, sE, "esm2017");
  }
};
//# sourceMappingURL=ug4nu.63.fb6c393b.chunk.js.map
//# debugId=930e7b9a-9d3e-5a6b-8d4e-9e8d10808f95