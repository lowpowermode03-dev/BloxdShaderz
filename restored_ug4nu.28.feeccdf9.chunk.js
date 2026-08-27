!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "86dfb1b4-a2e9-58c8-9598-ecf3f67306f4");
  } catch (e) {}
}();
export const id = 28;
export const ids = [28];
export const modules = {
  21356: (HH, IH, EH) => {
    EH.r(IH), EH.d(IH, {
      BloxdDiscordSDK: () => QH
    });
    var RH = EH(649),
      hH = EH(829),
      TH = EH(847),
      sH = EH.n(TH),
      eH = EH(625),
      GH = EH(77),
      AH = EH(71),
      VH = EH(946),
      YH = EH(634);
    class QH {
      constructor() {
        this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", window.addEventListener("message", HH => {
          var IH;
          if (HH.origin !== window.location.origin || "oauth_authentication_discord" !== (null === (IH = HH.data) || void 0 === IH ? void 0 : IH.type)) return;
          const EH = HH.data.code;
          null !== this.popupWindowPromiseResolve && (this.popupWindowPromiseResolve(EH), this.resetPopupState());
        });
      }
      resetPopupState() {
        null !== this.popupWindowCheckInterval && clearInterval(this.popupWindowCheckInterval), this.popupWindowCheckInterval = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindowPromise = null, this.popupWindow = null;
      }
      openDiscordOAuthWindow() {
        const HH = YH.b.discordClientID,
          IH = RH.j[YH.b.clientEnvironment];
        return window.open("https://discord.com/oauth2/authorize?response_type=code&client_id=".concat(HH, "&scope=identify%20guilds&redirect_uri=").concat(IH, "&integration_type=0"), "oauth_authentication", "popup,width=480,height=720,top=".concat(window.screen.height / 2 - 360, ",left=").concat(window.screen.width / 2 - 240));
      }
      async showDiscordAuthPrompt() {
        return new Promise((HH, IH) => {
          VH.d.showPromptPopup({
            title: "Discord Login Required",
            confirmText: "Continue",
            confirmTooltip: "Open Discord login window",
            cancelText: "Cancel",
            cancelTooltip: "Cancel Discord login"
          }).getResult().then(EH => {
            EH ? HH() : IH();
          }).catch(IH);
        });
      }
      signInWithPopup() {
        return null !== this.popupWindowPromise || (this.popupWindowPromise = new Promise((HH, IH) => {
          GH.e.removeItem(this.bloxdDiscordRefreshTokenKey);
          (async () => {
            try {
              let EH;
              for (const HH of [() => Promise.resolve(), () => this.showDiscordAuthPrompt()]) if (await HH(), EH = this.openDiscordOAuthWindow(), console.log("Discord OAuth window opened:", EH), EH) break;
              if (!EH) return void IH(new Error("Failed to open Discord authentication popup - popup may have been blocked"));
              this.popupWindow = EH, this.popupWindowPromiseResolve = HH, this.popupWindowPromiseReject = IH, this.popupWindowCheckInterval = EH.setInterval(() => {
                this.popupWindow && this.popupWindow.closed && (this.popupWindowPromiseReject(new Error("Discord authentication was cancelled - popup window was closed")), this.resetPopupState());
              }, 200);
            } catch (EH) {
              IH(EH);
            }
          })();
        })), this.popupWindowPromise;
      }
      async exchangeAuthorizationCodeForAccessToken(HH, IH) {
        const {
          accessToken: EH,
          refreshToken: RH
        } = await sH()(async () => await (0, hH.q)("".concat(eH.e.indexUrl, "/index/discord/log-event"), {
          authorizationCode: HH,
          bloxdClientEnvironment: YH.b.clientEnvironment,
          instanceId: null
        }, {
          retries: 0
        }, IH.getMetricsCookies()), {
          retries: 3
        });
        return console.log("Discord access token received:", RH, this.bloxdDiscordRefreshTokenKey), GH.e.setItem(this.bloxdDiscordRefreshTokenKey, RH), EH;
      }
      hasCurrentUser() {
        const HH = GH.e.getItem(this.bloxdDiscordRefreshTokenKey);
        return !(0, AH.p)(HH);
      }
      async getCurrentUser(HH) {
        const IH = GH.e.getItem(this.bloxdDiscordRefreshTokenKey);
        if (!IH) return null;
        let EH;
        try {
          const RH = await sH()(async () => await (0, hH.q)("".concat(eH.e.indexUrl, "/index/discord/collect-event"), {
            refreshToken: IH
          }, {
            retries: 0
          }, HH.getMetricsCookies()), {
            retries: 3
          });
          EH = RH.accessToken, GH.e.setItem(this.bloxdDiscordRefreshTokenKey, RH.refreshToken);
        } catch (RH) {
          return console.error("Failed to refresh Discord access token:", RH), null;
        }
        return {
          accessToken: EH
        };
      }
      signOut() {
        this.resetPopupState(), GH.e.removeItem(this.bloxdDiscordRefreshTokenKey);
      }
    }
  }
};
//# sourceMappingURL=ug4nu.28.feeccdf9.chunk.js.map
//# debugId=86dfb1b4-a2e9-58c8-9598-ecf3f67306f4