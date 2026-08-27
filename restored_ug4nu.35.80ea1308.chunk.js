!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "13e6d655-b5c2-5dda-b07f-8c703e2a1a7f");
  } catch (e) {}
}();
export const id = 35;
export const ids = [35];
export const modules = {
  21401: (HH, IH, EH) => {
    EH.r(IH), EH.d(IH, {
      AdinPlaySdkAdaptor: () => TH
    });
    var RH = EH(932),
      hH = EH(919);
    class TH extends RH.c {
      constructor() {
        super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable";
      }
      static async setup() {
        return await (0, hH.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new TH();
      }
      playRewarded(HH, IH) {
        if ("undefined" !== typeof window.aiptag.adplayer) {
          console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
          const EH = "video_reward";
          window.aiptag.cmd.player.push(function () {
            window.aiptag.adplayer.startPreRoll({
              alias: EH
            });
          }), window.adStartSoPause(HH, {
            onFailCb: IH
          });
        } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), IH();
      }
      playVideoAd(HH, IH) {
        "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad".concat(IH ? " (alias: ".concat(IH, ")") : "")), window.aiptag.cmd.player.push(function () {
          window.aiptag.adplayer.startPreRoll({
            alias: IH
          });
        }), window.adStartSoPause(HH)) : (HH(), console.error("AIP ad lib not loaded, no ad playing"));
      }
      renderBanner(HH) {
        if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
        const {
          divId: IH,
          alias: EH
        } = HH;
        window.aiptag.cmd.display.push(function () {
          window.aipDisplayTag.display({
            adUnitName: IH,
            alias: EH
          });
        }), console.log("AD: Requested aip banner", document.getElementById(HH.divId), EH ? "(alias: ".concat(EH, ")") : "");
      }
      clearBanner(HH) {
        "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push(function () {
          window.aipDisplayTag.destroy(HH.divId);
        }), console.log("AD: Clearing aip banner ad ".concat(HH.divId))) : console.log("AD: User has adblock, not requesting new banners");
      }
      setBannerAutoRefreshEnabled(HH, IH) {
        window.aiptag.cmd.display.push(function () {
          window.aipDisplayTag.setAutoRefresh(HH.divId, IH);
        });
      }
      newPageSession() {
        console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push(function () {
          window.__VM.push(function (HH, IH) {
            IH.Instances.pageManager.newPageSession(!1);
          });
        });
      }
    }
  }
};
//# sourceMappingURL=ug4nu.35.80ea1308.chunk.js.map
//# debugId=13e6d655-b5c2-5dda-b07f-8c703e2a1a7f