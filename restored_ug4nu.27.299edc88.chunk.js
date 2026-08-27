!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c384d28e-74a3-5d41-8ad0-24e3105a282f");
  } catch (e) {}
}();
export const id = 27;
export const ids = [27];
export const modules = {
  21350: (HH, IH, EH) => {
    EH.r(IH), EH.d(IH, {
      BloxdFirebaseSdk: () => eH
    });
    var RH = EH(1007),
      hH = EH(107),
      TH = EH(93),
      sH = EH(2064);
    class eH {
      constructor() {}
      static async setup() {
        try {
          return await eH.setupInternal();
        } catch (HH) {
          return console.error("Failed to setup Firebase SDK:", HH), null;
        }
      }
      static async setupInternal() {
        const HH = await Promise.all([EH.e(62), EH.e(61)]).then(EH.bind(EH, 24028)),
          IH = await Promise.all([EH.e(62), EH.e(63)]).then(EH.bind(EH, 24056)),
          AH = await Promise.all([EH.e(62), EH.e(64)]).then(EH.bind(EH, 24060)),
          VH = HH.initializeApp(GH);
        window.dataLayer = window.dataLayer || [], window.gtag = window.gtag || function () {
          window.dataLayer.push(arguments);
        }, window.gtag("js", new Date()), window.gtag("config", GH.measurementId), window.gtag("config", "AW-16469618203");
        const YH = IH.getAnalytics(VH),
          QH = {
            portal: hH.b.getSearchParam("portal") || "root",
            loggedIn: !1
          };
        IH.setUserProperties(YH, QH);
        const JH = AH.getAuth();
        AH.useDeviceLanguage(JH);
        const OH = new AH.GoogleAuthProvider(),
          rH = new AH.OAuthProvider("apple.com"),
          FH = new AH.OAuthProvider("microsoft.com");
        FH.setCustomParameters({
          prompt: "select_account",
          tenant: "consumers"
        });
        const MH = {
          [RH.b.GOOGLE]: {
            provider: OH,
            RNSignInMessage: "googleSignInWithPopup",
            RNCurrentUserMessage: "googleGetCurrentUser",
            RNSignOutMessage: "googleSignOut"
          },
          [RH.b.APPLE]: {
            provider: rH,
            RNSignInMessage: "appleSignInWithPopup",
            RNCurrentUserMessage: "appleGetCurrentUser",
            RNSignOutMessage: "appleSignOut"
          },
          [RH.b.MICROSOFT]: {
            provider: FH,
            RNSignInMessage: "microsoftSignInWithPopup",
            RNCurrentUserMessage: "microsoftGetCurrentUser",
            RNSignOutMessage: "microsoftSignOut"
          }
        };
        window.gtag("set", {
          cookie_flags: "SameSite=None;Secure"
        }), await new Promise(HH => {
          const IH = AH.onIdTokenChanged(JH, EH => {
            IH(), HH();
          });
        });
        class NH extends eH {
          setUserProperties(HH) {
            IH.setUserProperties(YH, HH);
          }
          onIdTokenChanged(HH) {
            AH.onIdTokenChanged(JH, HH);
          }
          async signInWithPopup(HH) {
            var IH;
            const EH = await AH.signInWithPopup(JH, MH[HH].provider);
            return null !== (IH = null === EH || void 0 === EH ? void 0 : EH.user) && void 0 !== IH ? IH : null;
          }
          async getCurrentUser(HH) {
            const IH = JH.currentUser;
            if (!IH) return null;
            const {
              signInProvider: EH
            } = await IH.getIdTokenResult(!1);
            return EH === MH[HH].provider.providerId ? IH : null;
          }
          async signOut(HH) {
            null !== (await this.getCurrentUser(HH)) && AH.signOut(JH);
          }
        }
        class iI extends eH {
          setUserProperties(HH) {
            IH.setUserProperties(YH, HH);
          }
          onIdTokenChanged(HH) {
            AH.onIdTokenChanged(JH, HH);
          }
          async signInWithPopup(HH) {
            return await (0, sH.f)(MH[HH].RNSignInMessage, {
              firebaseUserContextType: HH
            }).then(async IH => {
              var EH;
              let hH;
              switch (HH) {
                case RH.b.GOOGLE:
                  hH = AH.GoogleAuthProvider.credential(IH.googleIdToken);
                  break;
                case RH.b.APPLE:
                  hH = rH.credential({
                    idToken: IH.appleIdToken
                  });
                  break;
                case RH.b.MICROSOFT:
                  hH = FH.credential({
                    idToken: IH.microsoftIdToken
                  });
                  break;
                default:
                  return null;
              }
              const TH = await AH.signInWithCredential(JH, hH);
              return null !== (EH = null === TH || void 0 === TH ? void 0 : TH.user) && void 0 !== EH ? EH : null;
            }).catch(IH => (console.error("Failed to sign in with ".concat(HH, " popup:"), IH), null));
          }
          async getCurrentUser(HH) {
            const IH = JH.currentUser;
            if (IH) {
              const {
                signInProvider: EH
              } = await IH.getIdTokenResult(!1);
              if (EH === MH[HH].provider.providerId) return IH;
            }
            return await (0, sH.f)(MH[HH].RNCurrentUserMessage, {}).then(async IH => {
              var EH;
              let hH;
              switch (HH) {
                case RH.b.GOOGLE:
                  hH = AH.GoogleAuthProvider.credential(IH.googleIdToken);
                  break;
                case RH.b.APPLE:
                  hH = rH.credential({
                    idToken: IH.appleIdToken
                  });
                  break;
                case RH.b.MICROSOFT:
                  hH = FH.credential({
                    idToken: IH.microsoftIdToken
                  });
                  break;
                default:
                  return null;
              }
              const TH = await AH.signInWithCredential(JH, hH);
              return null !== (EH = null === TH || void 0 === TH ? void 0 : TH.user) && void 0 !== EH ? EH : null;
            }).catch(IH => (console.error("Failed to get current ".concat(HH, " user from React Native wrapper"), IH), null));
          }
          async signOut(HH) {
            (0, sH.h)(MH[HH].RNSignOutMessage, {});
            const IH = JH.currentUser;
            if (IH) {
              const {
                signInProvider: EH
              } = await IH.getIdTokenResult(!1);
              EH === MH[HH].provider.providerId && AH.signOut(JH);
            }
          }
        }
        return (0, TH.J)() ? new iI() : new NH();
      }
    }
    const GH = {
      apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
      authDomain: "bloxd-ee1aa.firebaseapp.com",
      projectId: "bloxd-ee1aa",
      storageBucket: "bloxd-ee1aa.appspot.com",
      messagingSenderId: "758847442742",
      appId: "1:758847442742:web:7bb74eb261641e30f02d97",
      measurementId: "G-DXF16YBENG"
    };
  }
};
//# sourceMappingURL=ug4nu.27.299edc88.chunk.js.map
//# debugId=c384d28e-74a3-5d41-8ad0-24e3105a282f