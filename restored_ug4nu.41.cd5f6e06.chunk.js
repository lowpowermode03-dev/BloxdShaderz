/*! For license information please see ug4nu.41.cd5f6e06.chunk.js.LICENSE.txt */

!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "41e4ea1f-1be5-5ee8-8bf8-0c47aab65761");
  } catch (e) {}
}();
export const id = 41;
export const ids = [41];
export const modules = {
  21471: (HH, IH, EH) => {
    var RH;
    !function () {
      var hH = function () {
        this.init();
      };
      hH.prototype = {
        init: function () {
          var HH = this || TH;
          return HH._counter = 1e3, HH._html5AudioPool = [], HH.html5PoolSize = 10, HH._codecs = {}, HH._howls = [], HH._muted = !1, HH._volume = 1, HH._canPlayEvent = "canplaythrough", HH._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, HH.masterGain = null, HH.noAudio = !1, HH.usingWebAudio = !0, HH.autoSuspend = !0, HH.ctx = null, HH.autoUnlock = !0, HH._setup(), HH;
        },
        volume: function (HH) {
          var IH = this || TH;
          if (HH = parseFloat(HH), IH.ctx || JH(), "undefined" !== typeof HH && HH >= 0 && HH <= 1) {
            if (IH._volume = HH, IH._muted) return IH;
            IH.usingWebAudio && IH.masterGain.gain.setValueAtTime(HH, TH.ctx.currentTime);
            for (var EH = 0; EH < IH._howls.length; EH++) if (!IH._howls[EH]._webAudio) for (var RH = IH._howls[EH]._getSoundIds(), hH = 0; hH < RH.length; hH++) {
              var sH = IH._howls[EH]._soundById(RH[hH]);
              sH && sH._node && (sH._node.volume = sH._volume * HH);
            }
            return IH;
          }
          return IH._volume;
        },
        mute: function (HH) {
          var IH = this || TH;
          IH.ctx || JH(), IH._muted = HH, IH.usingWebAudio && IH.masterGain.gain.setValueAtTime(HH ? 0 : IH._volume, TH.ctx.currentTime);
          for (var EH = 0; EH < IH._howls.length; EH++) if (!IH._howls[EH]._webAudio) for (var RH = IH._howls[EH]._getSoundIds(), hH = 0; hH < RH.length; hH++) {
            var sH = IH._howls[EH]._soundById(RH[hH]);
            sH && sH._node && (sH._node.muted = !!HH || sH._muted);
          }
          return IH;
        },
        stop: function () {
          for (var HH = this || TH, IH = 0; IH < HH._howls.length; IH++) HH._howls[IH].stop();
          return HH;
        },
        unload: function () {
          for (var HH = this || TH, IH = HH._howls.length - 1; IH >= 0; IH--) HH._howls[IH].unload();
          return HH.usingWebAudio && HH.ctx && "undefined" !== typeof HH.ctx.close && (HH.ctx.close(), HH.ctx = null, JH()), HH;
        },
        codecs: function (HH) {
          return (this || TH)._codecs[HH.replace(/^x-/, "")];
        },
        _setup: function () {
          var HH = this || TH;
          if (HH.state = HH.ctx && HH.ctx.state || "suspended", HH._autoSuspend(), !HH.usingWebAudio) if ("undefined" !== typeof Audio) try {
            "undefined" === typeof new Audio().oncanplaythrough && (HH._canPlayEvent = "canplay");
          } catch (IH) {
            HH.noAudio = !0;
          } else HH.noAudio = !0;
          try {
            new Audio().muted && (HH.noAudio = !0);
          } catch (IH) {}
          return HH.noAudio || HH._setupCodecs(), HH;
        },
        _setupCodecs: function () {
          var HH = this || TH,
            IH = null;
          try {
            IH = "undefined" !== typeof Audio ? new Audio() : null;
          } catch (VH) {
            return HH;
          }
          if (!IH || "function" !== typeof IH.canPlayType) return HH;
          var EH = IH.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            RH = HH._navigator ? HH._navigator.userAgent : "",
            hH = RH.match(/OPR\/([0-6].)/g),
            sH = hH && parseInt(hH[0].split("/")[1], 10) < 33,
            eH = -1 !== RH.indexOf("Safari") && -1 === RH.indexOf("Chrome"),
            GH = RH.match(/Version\/(.*?) /),
            AH = eH && GH && parseInt(GH[1], 10) < 15;
          return HH._codecs = {
            mp3: !(sH || !EH && !IH.canPlayType("audio/mp3;").replace(/^no$/, "")),
            mpeg: !!EH,
            opus: !!IH.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!IH.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!IH.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(IH.canPlayType('audio/wav; codecs="1"') || IH.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!IH.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!IH.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(IH.canPlayType("audio/x-m4a;") || IH.canPlayType("audio/m4a;") || IH.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(IH.canPlayType("audio/x-m4b;") || IH.canPlayType("audio/m4b;") || IH.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(IH.canPlayType("audio/x-mp4;") || IH.canPlayType("audio/mp4;") || IH.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !(AH || !IH.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !(AH || !IH.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!IH.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(IH.canPlayType("audio/x-flac;") || IH.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, HH;
        },
        _unlockAudio: function () {
          var HH = this || TH;
          if (!HH._audioUnlocked && HH.ctx) {
            HH._audioUnlocked = !1, HH.autoUnlock = !1, HH._mobileUnloaded || 44100 === HH.ctx.sampleRate || (HH._mobileUnloaded = !0, HH.unload()), HH._scratchBuffer = HH.ctx.createBuffer(1, 1, 22050);
            var IH = function (EH) {
              for (; HH._html5AudioPool.length < HH.html5PoolSize;) try {
                var RH = new Audio();
                RH._unlocked = !0, HH._releaseHtml5Audio(RH);
              } catch (EH) {
                HH.noAudio = !0;
                break;
              }
              for (var hH = 0; hH < HH._howls.length; hH++) if (!HH._howls[hH]._webAudio) for (var TH = HH._howls[hH]._getSoundIds(), sH = 0; sH < TH.length; sH++) {
                var eH = HH._howls[hH]._soundById(TH[sH]);
                eH && eH._node && !eH._node._unlocked && (eH._node._unlocked = !0, eH._node.load());
              }
              HH._autoResume();
              var GH = HH.ctx.createBufferSource();
              GH.buffer = HH._scratchBuffer, GH.connect(HH.ctx.destination), "undefined" === typeof GH.start ? GH.noteOn(0) : GH.start(0), "function" === typeof HH.ctx.resume && HH.ctx.resume(), GH.onended = function () {
                GH.disconnect(0), HH._audioUnlocked = !0, document.removeEventListener("touchstart", IH, !0), document.removeEventListener("touchend", IH, !0), document.removeEventListener("click", IH, !0), document.removeEventListener("keydown", IH, !0);
                for (var EH = 0; EH < HH._howls.length; EH++) HH._howls[EH]._emit("unlock");
              };
            };
            return document.addEventListener("touchstart", IH, !0), document.addEventListener("touchend", IH, !0), document.addEventListener("click", IH, !0), document.addEventListener("keydown", IH, !0), HH;
          }
        },
        _obtainHtml5Audio: function () {
          var HH = this || TH;
          if (HH._html5AudioPool.length) return HH._html5AudioPool.pop();
          var IH = new Audio().play();
          return IH && "undefined" !== typeof Promise && (IH instanceof Promise || "function" === typeof IH.then) && IH.catch(function () {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
          }), new Audio();
        },
        _releaseHtml5Audio: function (HH) {
          var IH = this || TH;
          return HH._unlocked && IH._html5AudioPool.push(HH), IH;
        },
        _autoSuspend: function () {
          var HH = this;
          if (HH.autoSuspend && HH.ctx && "undefined" !== typeof HH.ctx.suspend && TH.usingWebAudio) {
            for (var IH = 0; IH < HH._howls.length; IH++) if (HH._howls[IH]._webAudio) for (var EH = 0; EH < HH._howls[IH]._sounds.length; EH++) if (!HH._howls[IH]._sounds[EH].AY) return HH;
            return HH._suspendTimer && clearTimeout(HH._suspendTimer), HH._suspendTimer = setTimeout(function () {
              if (HH.autoSuspend) {
                HH._suspendTimer = null, HH.state = "suspending";
                var IH = function () {
                  HH.state = "suspended", HH._resumeAfterSuspend && (delete HH._resumeAfterSuspend, HH._autoResume());
                };
                HH.ctx.suspend().then(IH, IH);
              }
            }, 3e4), HH;
          }
        },
        _autoResume: function () {
          var HH = this;
          if (HH.ctx && "undefined" !== typeof HH.ctx.resume && TH.usingWebAudio) return "running" === HH.state && "interrupted" !== HH.ctx.state && HH._suspendTimer ? (clearTimeout(HH._suspendTimer), HH._suspendTimer = null) : "suspended" === HH.state || "running" === HH.state && "interrupted" === HH.ctx.state ? (HH.ctx.resume().then(function () {
            HH.state = "running";
            for (var IH = 0; IH < HH._howls.length; IH++) HH._howls[IH]._emit("resume");
          }), HH._suspendTimer && (clearTimeout(HH._suspendTimer), HH._suspendTimer = null)) : "suspending" === HH.state && (HH._resumeAfterSuspend = !0), HH;
        }
      };
      var TH = new hH(),
        sH = function (HH) {
          HH.src && 0 !== HH.src.length ? this.init(HH) : console.error("An array of source files must be passed with any new Howl.");
        };
      sH.prototype = {
        init: function (HH) {
          var IH = this;
          return TH.ctx || JH(), IH._autoplay = HH.autoplay || !1, IH._format = "string" !== typeof HH.format ? HH.format : [HH.format], IH._html5 = HH.html5 || !1, IH._muted = HH.mute || !1, IH._loop = HH.loop || !1, IH._pool = HH.pool || 5, IH._preload = "boolean" !== typeof HH.preload && "metadata" !== HH.preload || HH.preload, IH._rate = HH.rate || 1, IH._sprite = HH.sprite || {}, IH._src = "string" !== typeof HH.src ? HH.src : [HH.src], IH._volume = void 0 !== HH.volume ? HH.volume : 1, IH._xhr = {
            method: HH.xhr && HH.xhr.method ? HH.xhr.method : "GET",
            headers: HH.xhr && HH.xhr.headers ? HH.xhr.headers : null,
            withCredentials: !(!HH.xhr || !HH.xhr.withCredentials) && HH.xhr.withCredentials
          }, IH._duration = 0, IH._state = "unloaded", IH._sounds = [], IH._endTimers = {}, IH._queue = [], IH._playLock = !1, IH._onend = HH.onend ? [{
            eY: HH.onend
          }] : [], IH._onfade = HH.onfade ? [{
            eY: HH.onfade
          }] : [], IH._onload = HH.onload ? [{
            eY: HH.onload
          }] : [], IH._onloaderror = HH.onloaderror ? [{
            eY: HH.onloaderror
          }] : [], IH._onplayerror = HH.onplayerror ? [{
            eY: HH.onplayerror
          }] : [], IH._onpause = HH.onpause ? [{
            eY: HH.onpause
          }] : [], IH._onplay = HH.onplay ? [{
            eY: HH.onplay
          }] : [], IH._onstop = HH.onstop ? [{
            eY: HH.onstop
          }] : [], IH._onmute = HH.onmute ? [{
            eY: HH.onmute
          }] : [], IH._onvolume = HH.onvolume ? [{
            eY: HH.onvolume
          }] : [], IH._onrate = HH.onrate ? [{
            eY: HH.onrate
          }] : [], IH._onseek = HH.onseek ? [{
            eY: HH.onseek
          }] : [], IH._onunlock = HH.onunlock ? [{
            eY: HH.onunlock
          }] : [], IH._onresume = [], IH._webAudio = TH.usingWebAudio && !IH._html5, "undefined" !== typeof TH.ctx && TH.ctx && TH.autoUnlock && TH._unlockAudio(), TH._howls.push(IH), IH._autoplay && IH._queue.push({
            event: "play",
            action: function () {
              IH.play();
            }
          }), IH._preload && "none" !== IH._preload && IH.load(), IH;
        },
        load: function () {
          var HH = this,
            IH = null;
          if (TH.noAudio) HH._emit("loaderror", null, "No audio support.");else {
            "string" === typeof HH._src && (HH._src = [HH._src]);
            for (var EH = 0; EH < HH._src.length; EH++) {
              var RH, hH;
              if (HH._format && HH._format[EH]) RH = HH._format[EH];else {
                if ("string" !== typeof (hH = HH._src[EH])) {
                  HH._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue;
                }
                (RH = /^data:audio\/([^;,]+);/i.exec(hH)) || (RH = /\.([^.]+)$/.exec(hH.split("?", 1)[0])), RH && (RH = RH[1].toLowerCase());
              }
              if (RH || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), RH && TH.codecs(RH)) {
                IH = HH._src[EH];
                break;
              }
            }
            if (IH) return HH._src = IH, HH._state = "loading", "https:" === window.location.protocol && "http:" === IH.slice(0, 5) && (HH._html5 = !0, HH._webAudio = !1), new eH(HH), HH._webAudio && AH(HH), HH;
            HH._emit("loaderror", null, "No codec support for selected audio sources.");
          }
        },
        play: function (HH, IH) {
          var EH = this,
            RH = null;
          if ("number" === typeof HH) RH = HH, HH = null;else {
            if ("string" === typeof HH && "loaded" === EH._state && !EH._sprite[HH]) return null;
            if ("undefined" === typeof HH && (HH = "__default", !EH._playLock)) {
              for (var hH = 0, sH = 0; sH < EH._sounds.length; sH++) EH._sounds[sH].AY && !EH._sounds[sH]._ended && (hH++, RH = EH._sounds[sH]._id);
              1 === hH ? HH = null : RH = null;
            }
          }
          var eH = RH ? EH._soundById(RH) : EH._inactiveSound();
          if (!eH) return null;
          if (RH && !HH && (HH = eH._sprite || "__default"), "loaded" !== EH._state) {
            eH._sprite = HH, eH._ended = !1;
            var GH = eH._id;
            return EH._queue.push({
              event: "play",
              action: function () {
                EH.play(GH);
              }
            }), GH;
          }
          if (RH && !eH.AY) return IH || EH._loadQueue("play"), eH._id;
          EH._webAudio && TH._autoResume();
          var AH = Math.max(0, eH._seek > 0 ? eH._seek : EH._sprite[HH][0] / 1e3),
            VH = Math.max(0, (EH._sprite[HH][0] + EH._sprite[HH][1]) / 1e3 - AH),
            YH = 1e3 * VH / Math.abs(eH._rate),
            QH = EH._sprite[HH][0] / 1e3,
            JH = (EH._sprite[HH][0] + EH._sprite[HH][1]) / 1e3;
          eH._sprite = HH, eH._ended = !1;
          var OH = function () {
            eH.AY = !1, eH._seek = AH, eH._start = QH, eH._stop = JH, eH._loop = !(!eH._loop && !EH._sprite[HH][2]);
          };
          if (!(AH >= JH)) {
            var rH = eH._node;
            if (EH._webAudio) {
              var FH = function () {
                EH._playLock = !1, OH(), EH._refreshBuffer(eH);
                var HH = eH._muted || EH._muted ? 0 : eH._volume;
                rH.gain.setValueAtTime(HH, TH.ctx.currentTime), eH._playStart = TH.ctx.currentTime, "undefined" === typeof rH.bufferSource.start ? eH._loop ? rH.bufferSource.noteGrainOn(0, AH, 86400) : rH.bufferSource.noteGrainOn(0, AH, VH) : eH._loop ? rH.bufferSource.start(0, AH, 86400) : rH.bufferSource.start(0, AH, VH), YH !== 1 / 0 && (EH._endTimers[eH._id] = setTimeout(EH._ended.bind(EH, eH), YH)), IH || setTimeout(function () {
                  EH._emit("play", eH._id), EH._loadQueue();
                }, 0);
              };
              "running" === TH.state && "interrupted" !== TH.ctx.state ? FH() : (EH._playLock = !0, EH.once("resume", FH), EH._clearTimer(eH._id));
            } else {
              var MH = function () {
                rH.currentTime = AH, rH.muted = eH._muted || EH._muted || TH._muted || rH.muted, rH.volume = eH._volume * TH.volume(), rH.playbackRate = eH._rate;
                try {
                  var RH = rH.play();
                  if (RH && "undefined" !== typeof Promise && (RH instanceof Promise || "function" === typeof RH.then) ? (EH._playLock = !0, OH(), RH.then(function () {
                    EH._playLock = !1, rH._unlocked = !0, IH ? EH._loadQueue() : EH._emit("play", eH._id);
                  }).catch(function () {
                    EH._playLock = !1, EH._emit("playerror", eH._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), eH._ended = !0, eH.AY = !0;
                  })) : IH || (EH._playLock = !1, OH(), EH._emit("play", eH._id)), rH.playbackRate = eH._rate, rH.paused) return void EH._emit("playerror", eH._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  "__default" !== HH || eH._loop ? EH._endTimers[eH._id] = setTimeout(EH._ended.bind(EH, eH), YH) : (EH._endTimers[eH._id] = function () {
                    EH._ended(eH), rH.removeEventListener("ended", EH._endTimers[eH._id], !1);
                  }, rH.addEventListener("ended", EH._endTimers[eH._id], !1));
                } catch (hH) {
                  EH._emit("playerror", eH._id, hH);
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === rH.src && (rH.src = EH._src, rH.load());
              var NH = window && window.ejecta || !rH.readyState && TH._navigator.isCocoonJS;
              if (rH.readyState >= 3 || NH) MH();else {
                EH._playLock = !0, EH._state = "loading";
                var iI = function () {
                  EH._state = "loaded", MH(), rH.removeEventListener(TH._canPlayEvent, iI, !1);
                };
                rH.addEventListener(TH._canPlayEvent, iI, !1), EH._clearTimer(eH._id);
              }
            }
            return eH._id;
          }
          EH._ended(eH);
        },
        pause: function (HH) {
          var IH = this;
          if ("loaded" !== IH._state || IH._playLock) return IH._queue.push({
            event: "pause",
            action: function () {
              IH.pause(HH);
            }
          }), IH;
          for (var EH = IH._getSoundIds(HH), RH = 0; RH < EH.length; RH++) {
            IH._clearTimer(EH[RH]);
            var hH = IH._soundById(EH[RH]);
            if (hH && !hH.AY && (hH._seek = IH.seek(EH[RH]), hH._rateSeek = 0, hH.AY = !0, IH._stopFade(EH[RH]), hH._node)) if (IH._webAudio) {
              if (!hH._node.bufferSource) continue;
              "undefined" === typeof hH._node.bufferSource.stop ? hH._node.bufferSource.noteOff(0) : hH._node.bufferSource.stop(0), IH._cleanBuffer(hH._node);
            } else isNaN(hH._node.duration) && hH._node.duration !== 1 / 0 || hH._node.pause();
            arguments[1] || IH._emit("pause", hH ? hH._id : null);
          }
          return IH;
        },
        stop: function (HH, IH) {
          var EH = this;
          if ("loaded" !== EH._state || EH._playLock) return EH._queue.push({
            event: "stop",
            action: function () {
              EH.stop(HH);
            }
          }), EH;
          for (var RH = EH._getSoundIds(HH), hH = 0; hH < RH.length; hH++) {
            EH._clearTimer(RH[hH]);
            var TH = EH._soundById(RH[hH]);
            TH && (TH._seek = TH._start || 0, TH._rateSeek = 0, TH.AY = !0, TH._ended = !0, EH._stopFade(RH[hH]), TH._node && (EH._webAudio ? TH._node.bufferSource && ("undefined" === typeof TH._node.bufferSource.stop ? TH._node.bufferSource.noteOff(0) : TH._node.bufferSource.stop(0), EH._cleanBuffer(TH._node)) : isNaN(TH._node.duration) && TH._node.duration !== 1 / 0 || (TH._node.currentTime = TH._start || 0, TH._node.pause(), TH._node.duration === 1 / 0 && EH._clearSound(TH._node))), IH || EH._emit("stop", TH._id));
          }
          return EH;
        },
        mute: function (HH, IH) {
          var EH = this;
          if ("loaded" !== EH._state || EH._playLock) return EH._queue.push({
            event: "mute",
            action: function () {
              EH.mute(HH, IH);
            }
          }), EH;
          if ("undefined" === typeof IH) {
            if ("boolean" !== typeof HH) return EH._muted;
            EH._muted = HH;
          }
          for (var RH = EH._getSoundIds(IH), hH = 0; hH < RH.length; hH++) {
            var sH = EH._soundById(RH[hH]);
            sH && (sH._muted = HH, sH._interval && EH._stopFade(sH._id), EH._webAudio && sH._node ? sH._node.gain.setValueAtTime(HH ? 0 : sH._volume, TH.ctx.currentTime) : sH._node && (sH._node.muted = !!TH._muted || HH), EH._emit("mute", sH._id));
          }
          return EH;
        },
        volume: function () {
          var HH,
            IH,
            EH,
            RH = this,
            hH = arguments;
          if (0 === hH.length) return RH._volume;
          if (1 === hH.length || 2 === hH.length && "undefined" === typeof hH[1] ? RH._getSoundIds().indexOf(hH[0]) >= 0 ? IH = parseInt(hH[0], 10) : HH = parseFloat(hH[0]) : hH.length >= 2 && (HH = parseFloat(hH[0]), IH = parseInt(hH[1], 10)), !("undefined" !== typeof HH && HH >= 0 && HH <= 1)) return (EH = IH ? RH._soundById(IH) : RH._sounds[0]) ? EH._volume : 0;
          if ("loaded" !== RH._state || RH._playLock) return RH._queue.push({
            event: "volume",
            action: function () {
              RH.volume.apply(RH, hH);
            }
          }), RH;
          "undefined" === typeof IH && (RH._volume = HH), IH = RH._getSoundIds(IH);
          for (var sH = 0; sH < IH.length; sH++) (EH = RH._soundById(IH[sH])) && (EH._volume = HH, hH[2] || RH._stopFade(IH[sH]), RH._webAudio && EH._node && !EH._muted ? EH._node.gain.setValueAtTime(HH, TH.ctx.currentTime) : EH._node && !EH._muted && (EH._node.volume = HH * TH.volume()), RH._emit("volume", EH._id));
          return RH;
        },
        fade: function (HH, IH, EH, RH) {
          var hH = this;
          if ("loaded" !== hH._state || hH._playLock) return hH._queue.push({
            event: "fade",
            action: function () {
              hH.fade(HH, IH, EH, RH);
            }
          }), hH;
          HH = Math.min(Math.max(0, parseFloat(HH)), 1), IH = Math.min(Math.max(0, parseFloat(IH)), 1), EH = parseFloat(EH), hH.volume(HH, RH);
          for (var sH = hH._getSoundIds(RH), eH = 0; eH < sH.length; eH++) {
            var GH = hH._soundById(sH[eH]);
            if (GH) {
              if (RH || hH._stopFade(sH[eH]), hH._webAudio && !GH._muted) {
                var AH = TH.ctx.currentTime,
                  VH = AH + EH / 1e3;
                GH._volume = HH, GH._node.gain.setValueAtTime(HH, AH), GH._node.gain.linearRampToValueAtTime(IH, VH);
              }
              hH._startFadeInterval(GH, HH, IH, EH, sH[eH], "undefined" === typeof RH);
            }
          }
          return hH;
        },
        _startFadeInterval: function (HH, IH, EH, RH, hH, TH) {
          var sH = this,
            eH = IH,
            GH = EH - IH,
            AH = Math.abs(GH / .01),
            VH = Math.max(4, AH > 0 ? RH / AH : RH),
            YH = Date.now();
          HH._fadeTo = EH, HH._interval = setInterval(function () {
            var hH = (Date.now() - YH) / RH;
            YH = Date.now(), eH += GH * hH, eH = Math.round(100 * eH) / 100, eH = GH < 0 ? Math.max(EH, eH) : Math.min(EH, eH), sH._webAudio ? HH._volume = eH : sH.volume(eH, HH._id, !0), TH && (sH._volume = eH), (EH < IH && eH <= EH || EH > IH && eH >= EH) && (clearInterval(HH._interval), HH._interval = null, HH._fadeTo = null, sH.volume(EH, HH._id), sH._emit("fade", HH._id));
          }, VH);
        },
        _stopFade: function (HH) {
          var IH = this,
            EH = IH._soundById(HH);
          return EH && EH._interval && (IH._webAudio && EH._node.gain.cancelScheduledValues(TH.ctx.currentTime), clearInterval(EH._interval), EH._interval = null, IH.volume(EH._fadeTo, HH), EH._fadeTo = null, IH._emit("fade", HH)), IH;
        },
        loop: function () {
          var HH,
            IH,
            EH,
            RH = this,
            hH = arguments;
          if (0 === hH.length) return RH._loop;
          if (1 === hH.length) {
            if ("boolean" !== typeof hH[0]) return !!(EH = RH._soundById(parseInt(hH[0], 10))) && EH._loop;
            HH = hH[0], RH._loop = HH;
          } else 2 === hH.length && (HH = hH[0], IH = parseInt(hH[1], 10));
          for (var TH = RH._getSoundIds(IH), sH = 0; sH < TH.length; sH++) (EH = RH._soundById(TH[sH])) && (EH._loop = HH, RH._webAudio && EH._node && EH._node.bufferSource && (EH._node.bufferSource.loop = HH, HH && (EH._node.bufferSource.loopStart = EH._start || 0, EH._node.bufferSource.loopEnd = EH._stop, RH.playing(TH[sH]) && (RH.pause(TH[sH], !0), RH.play(TH[sH], !0)))));
          return RH;
        },
        rate: function () {
          var HH,
            IH,
            EH,
            RH = this,
            hH = arguments;
          if (0 === hH.length) IH = RH._sounds[0]._id;else if (1 === hH.length) {
            RH._getSoundIds().indexOf(hH[0]) >= 0 ? IH = parseInt(hH[0], 10) : HH = parseFloat(hH[0]);
          } else 2 === hH.length && (HH = parseFloat(hH[0]), IH = parseInt(hH[1], 10));
          if ("number" !== typeof HH) return (EH = RH._soundById(IH)) ? EH._rate : RH._rate;
          if ("loaded" !== RH._state || RH._playLock) return RH._queue.push({
            event: "rate",
            action: function () {
              RH.rate.apply(RH, hH);
            }
          }), RH;
          "undefined" === typeof IH && (RH._rate = HH), IH = RH._getSoundIds(IH);
          for (var sH = 0; sH < IH.length; sH++) if (EH = RH._soundById(IH[sH])) {
            RH.playing(IH[sH]) && (EH._rateSeek = RH.seek(IH[sH]), EH._playStart = RH._webAudio ? TH.ctx.currentTime : EH._playStart), EH._rate = HH, RH._webAudio && EH._node && EH._node.bufferSource ? EH._node.bufferSource.playbackRate.setValueAtTime(HH, TH.ctx.currentTime) : EH._node && (EH._node.playbackRate = HH);
            var eH = RH.seek(IH[sH]),
              GH = 1e3 * ((RH._sprite[EH._sprite][0] + RH._sprite[EH._sprite][1]) / 1e3 - eH) / Math.abs(EH._rate);
            !RH._endTimers[IH[sH]] && EH.AY || (RH._clearTimer(IH[sH]), RH._endTimers[IH[sH]] = setTimeout(RH._ended.bind(RH, EH), GH)), RH._emit("rate", EH._id);
          }
          return RH;
        },
        seek: function () {
          var HH,
            IH,
            EH = this,
            RH = arguments;
          if (0 === RH.length) EH._sounds.length && (IH = EH._sounds[0]._id);else if (1 === RH.length) {
            EH._getSoundIds().indexOf(RH[0]) >= 0 ? IH = parseInt(RH[0], 10) : EH._sounds.length && (IH = EH._sounds[0]._id, HH = parseFloat(RH[0]));
          } else 2 === RH.length && (HH = parseFloat(RH[0]), IH = parseInt(RH[1], 10));
          if ("undefined" === typeof IH) return 0;
          if ("number" === typeof HH && ("loaded" !== EH._state || EH._playLock)) return EH._queue.push({
            event: "seek",
            action: function () {
              EH.seek.apply(EH, RH);
            }
          }), EH;
          var hH = EH._soundById(IH);
          if (hH) {
            if (!("number" === typeof HH && HH >= 0)) {
              if (EH._webAudio) {
                var sH = EH.playing(IH) ? TH.ctx.currentTime - hH._playStart : 0,
                  eH = hH._rateSeek ? hH._rateSeek - hH._seek : 0;
                return hH._seek + (eH + sH * Math.abs(hH._rate));
              }
              return hH._node.currentTime;
            }
            var GH = EH.playing(IH);
            GH && EH.pause(IH, !0), hH._seek = HH, hH._ended = !1, EH._clearTimer(IH), EH._webAudio || !hH._node || isNaN(hH._node.duration) || (hH._node.currentTime = HH);
            var AH = function () {
              GH && EH.play(IH, !0), EH._emit("seek", IH);
            };
            if (GH && !EH._webAudio) {
              var VH = function () {
                EH._playLock ? setTimeout(VH, 0) : AH();
              };
              setTimeout(VH, 0);
            } else AH();
          }
          return EH;
        },
        playing: function (HH) {
          var IH = this;
          if ("number" === typeof HH) {
            var EH = IH._soundById(HH);
            return !!EH && !EH.AY;
          }
          for (var RH = 0; RH < IH._sounds.length; RH++) if (!IH._sounds[RH].AY) return !0;
          return !1;
        },
        duration: function (HH) {
          var IH = this,
            EH = IH._duration,
            RH = IH._soundById(HH);
          return RH && (EH = IH._sprite[RH._sprite][1] / 1e3), EH;
        },
        state: function () {
          return this._state;
        },
        unload: function () {
          for (var HH = this, IH = HH._sounds, EH = 0; EH < IH.length; EH++) IH[EH].AY || HH.stop(IH[EH]._id), HH._webAudio || (HH._clearSound(IH[EH]._node), IH[EH]._node.removeEventListener("error", IH[EH]._errorFn, !1), IH[EH]._node.removeEventListener(TH._canPlayEvent, IH[EH]._loadFn, !1), IH[EH]._node.removeEventListener("ended", IH[EH]._endFn, !1), TH._releaseHtml5Audio(IH[EH]._node)), delete IH[EH]._node, HH._clearTimer(IH[EH]._id);
          var RH = TH._howls.indexOf(HH);
          RH >= 0 && TH._howls.splice(RH, 1);
          var hH = !0;
          for (EH = 0; EH < TH._howls.length; EH++) if (TH._howls[EH]._src === HH._src || HH._src.indexOf(TH._howls[EH]._src) >= 0) {
            hH = !1;
            break;
          }
          return GH && hH && delete GH[HH._src], TH.noAudio = !1, HH._state = "unloaded", HH._sounds = [], HH = null, null;
        },
        on: function (HH, IH, EH, RH) {
          var hH = this["_on" + HH];
          return "function" === typeof IH && hH.push(RH ? {
            id: EH,
            eY: IH,
            once: RH
          } : {
            id: EH,
            eY: IH
          }), this;
        },
        off: function (HH, IH, EH) {
          var RH = this,
            hH = RH["_on" + HH],
            TH = 0;
          if ("number" === typeof IH && (EH = IH, IH = null), IH || EH) for (TH = 0; TH < hH.length; TH++) {
            var sH = EH === hH[TH].id;
            if (IH === hH[TH].eY && sH || !IH && sH) {
              hH.splice(TH, 1);
              break;
            }
          } else if (HH) RH["_on" + HH] = [];else {
            var eH = Object.keys(RH);
            for (TH = 0; TH < eH.length; TH++) 0 === eH[TH].indexOf("_on") && Array.isArray(RH[eH[TH]]) && (RH[eH[TH]] = []);
          }
          return RH;
        },
        once: function (HH, IH, EH) {
          return this.on(HH, IH, EH, 1), this;
        },
        _emit: function (HH, IH, EH) {
          for (var RH = this, hH = RH["_on" + HH], TH = hH.length - 1; TH >= 0; TH--) hH[TH].id && hH[TH].id !== IH && "load" !== HH || (setTimeout(function (HH) {
            HH.call(this, IH, EH);
          }.bind(RH, hH[TH].eY), 0), hH[TH].once && RH.off(HH, hH[TH].eY, hH[TH].id));
          return RH._loadQueue(HH), RH;
        },
        _loadQueue: function (HH) {
          var IH = this;
          if (IH._queue.length > 0) {
            var EH = IH._queue[0];
            EH.event === HH && (IH._queue.shift(), IH._loadQueue()), HH || EH.action();
          }
          return IH;
        },
        _ended: function (HH) {
          var IH = this,
            EH = HH._sprite;
          if (!IH._webAudio && HH._node && !HH._node.paused && !HH._node.ended && HH._node.currentTime < HH._stop) return setTimeout(IH._ended.bind(IH, HH), 100), IH;
          var RH = !(!HH._loop && !IH._sprite[EH][2]);
          if (IH._emit("end", HH._id), !IH._webAudio && RH && IH.stop(HH._id, !0).play(HH._id), IH._webAudio && RH) {
            IH._emit("play", HH._id), HH._seek = HH._start || 0, HH._rateSeek = 0, HH._playStart = TH.ctx.currentTime;
            var hH = 1e3 * (HH._stop - HH._start) / Math.abs(HH._rate);
            IH._endTimers[HH._id] = setTimeout(IH._ended.bind(IH, HH), hH);
          }
          return IH._webAudio && !RH && (HH.AY = !0, HH._ended = !0, HH._seek = HH._start || 0, HH._rateSeek = 0, IH._clearTimer(HH._id), IH._cleanBuffer(HH._node), TH._autoSuspend()), IH._webAudio || RH || IH.stop(HH._id, !0), IH;
        },
        _clearTimer: function (HH) {
          var IH = this;
          if (IH._endTimers[HH]) {
            if ("function" !== typeof IH._endTimers[HH]) clearTimeout(IH._endTimers[HH]);else {
              var EH = IH._soundById(HH);
              EH && EH._node && EH._node.removeEventListener("ended", IH._endTimers[HH], !1);
            }
            delete IH._endTimers[HH];
          }
          return IH;
        },
        _soundById: function (HH) {
          for (var IH = this, EH = 0; EH < IH._sounds.length; EH++) if (HH === IH._sounds[EH]._id) return IH._sounds[EH];
          return null;
        },
        _inactiveSound: function () {
          var HH = this;
          HH._drain();
          for (var IH = 0; IH < HH._sounds.length; IH++) if (HH._sounds[IH]._ended) return HH._sounds[IH].reset();
          return new eH(HH);
        },
        _drain: function () {
          var HH = this,
            IH = HH._pool,
            EH = 0,
            RH = 0;
          if (!(HH._sounds.length < IH)) {
            for (RH = 0; RH < HH._sounds.length; RH++) HH._sounds[RH]._ended && EH++;
            for (RH = HH._sounds.length - 1; RH >= 0; RH--) {
              if (EH <= IH) return;
              HH._sounds[RH]._ended && (HH._webAudio && HH._sounds[RH]._node && HH._sounds[RH]._node.disconnect(0), HH._sounds.splice(RH, 1), EH--);
            }
          }
        },
        _getSoundIds: function (HH) {
          if ("undefined" === typeof HH) {
            for (var IH = [], EH = 0; EH < this._sounds.length; EH++) IH.push(this._sounds[EH]._id);
            return IH;
          }
          return [HH];
        },
        _refreshBuffer: function (HH) {
          return HH._node.bufferSource = TH.ctx.createBufferSource(), HH._node.bufferSource.buffer = GH[this._src], HH._panner ? HH._node.bufferSource.connect(HH._panner) : HH._node.bufferSource.connect(HH._node), HH._node.bufferSource.loop = HH._loop, HH._loop && (HH._node.bufferSource.loopStart = HH._start || 0, HH._node.bufferSource.loopEnd = HH._stop || 0), HH._node.bufferSource.playbackRate.setValueAtTime(HH._rate, TH.ctx.currentTime), this;
        },
        _cleanBuffer: function (HH) {
          var IH = TH._navigator && TH._navigator.vendor.indexOf("Apple") >= 0;
          if (TH._scratchBuffer && HH.bufferSource && (HH.bufferSource.onended = null, HH.bufferSource.disconnect(0), IH)) try {
            HH.bufferSource.buffer = TH._scratchBuffer;
          } catch (EH) {}
          return HH.bufferSource = null, this;
        },
        _clearSound: function (HH) {
          /MSIE |Trident\//.test(TH._navigator && TH._navigator.userAgent) || (HH.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
        }
      };
      var eH = function (HH) {
        this._parent = HH, this.init();
      };
      eH.prototype = {
        init: function () {
          var HH = this,
            IH = HH._parent;
          return HH._muted = IH._muted, HH._loop = IH._loop, HH._volume = IH._volume, HH._rate = IH._rate, HH._seek = 0, HH.AY = !0, HH._ended = !0, HH._sprite = "__default", HH._id = ++TH._counter, IH._sounds.push(HH), HH.create(), HH;
        },
        create: function () {
          var HH = this,
            IH = HH._parent,
            EH = TH._muted || HH._muted || HH._parent._muted ? 0 : HH._volume;
          return IH._webAudio ? (HH._node = "undefined" === typeof TH.ctx.createGain ? TH.ctx.createGainNode() : TH.ctx.createGain(), HH._node.gain.setValueAtTime(EH, TH.ctx.currentTime), HH._node.paused = !0, HH._node.connect(TH.masterGain)) : TH.noAudio || (HH._node = TH._obtainHtml5Audio(), HH._errorFn = HH._errorListener.bind(HH), HH._node.addEventListener("error", HH._errorFn, !1), HH._loadFn = HH._loadListener.bind(HH), HH._node.addEventListener(TH._canPlayEvent, HH._loadFn, !1), HH._endFn = HH._endListener.bind(HH), HH._node.addEventListener("ended", HH._endFn, !1), HH._node.src = IH._src, HH._node.preload = !0 === IH._preload ? "auto" : IH._preload, HH._node.volume = EH * TH.volume(), HH._node.load()), HH;
        },
        reset: function () {
          var HH = this,
            IH = HH._parent;
          return HH._muted = IH._muted, HH._loop = IH._loop, HH._volume = IH._volume, HH._rate = IH._rate, HH._seek = 0, HH._rateSeek = 0, HH.AY = !0, HH._ended = !0, HH._sprite = "__default", HH._id = ++TH._counter, HH;
        },
        _errorListener: function () {
          var HH = this;
          HH._parent._emit("loaderror", HH._id, HH._node.error ? HH._node.error.code : 0), HH._node.removeEventListener("error", HH._errorFn, !1);
        },
        _loadListener: function () {
          var HH = this,
            IH = HH._parent;
          IH._duration = Math.ceil(10 * HH._node.duration) / 10, 0 === Object.keys(IH._sprite).length && (IH._sprite = {
            __default: [0, 1e3 * IH._duration]
          }), "loaded" !== IH._state && (IH._state = "loaded", IH._emit("load"), IH._loadQueue()), HH._node.removeEventListener(TH._canPlayEvent, HH._loadFn, !1);
        },
        _endListener: function () {
          var HH = this,
            IH = HH._parent;
          IH._duration === 1 / 0 && (IH._duration = Math.ceil(10 * HH._node.duration) / 10, IH._sprite.__default[1] === 1 / 0 && (IH._sprite.__default[1] = 1e3 * IH._duration), IH._ended(HH)), HH._node.removeEventListener("ended", HH._endFn, !1);
        }
      };
      var GH = {},
        AH = function (HH) {
          var IH = HH._src;
          if (GH[IH]) return HH._duration = GH[IH].duration, void QH(HH);
          if (/^data:[^;]+;base64,/.test(IH)) {
            for (var EH = atob(IH.split(",")[1]), RH = new Uint8Array(EH.length), hH = 0; hH < EH.length; ++hH) RH[hH] = EH.charCodeAt(hH);
            YH(RH.buffer, HH);
          } else {
            var TH = new XMLHttpRequest();
            TH.open(HH._xhr.method, IH, !0), TH.withCredentials = HH._xhr.withCredentials, TH.responseType = "arraybuffer", HH._xhr.headers && Object.keys(HH._xhr.headers).forEach(function (IH) {
              TH.setRequestHeader(IH, HH._xhr.headers[IH]);
            }), TH.onload = function () {
              var IH = (TH.status + "")[0];
              "0" === IH || "2" === IH || "3" === IH ? YH(TH.response, HH) : HH._emit("loaderror", null, "Failed loading audio file with status: " + TH.status + ".");
            }, TH.onerror = function () {
              HH._webAudio && (HH._html5 = !0, HH._webAudio = !1, HH._sounds = [], delete GH[IH], HH.load());
            }, VH(TH);
          }
        },
        VH = function (HH) {
          try {
            HH.send();
          } catch (IH) {
            HH.onerror();
          }
        },
        YH = function (HH, IH) {
          var EH = function () {
              IH._emit("loaderror", null, "Decoding audio data failed.");
            },
            RH = function (HH) {
              HH && IH._sounds.length > 0 ? (GH[IH._src] = HH, QH(IH, HH)) : EH();
            };
          "undefined" !== typeof Promise && 1 === TH.ctx.decodeAudioData.length ? TH.ctx.decodeAudioData(HH).then(RH).catch(EH) : TH.ctx.decodeAudioData(HH, RH, EH);
        },
        QH = function (HH, IH) {
          IH && !HH._duration && (HH._duration = IH.duration), 0 === Object.keys(HH._sprite).length && (HH._sprite = {
            __default: [0, 1e3 * HH._duration]
          }), "loaded" !== HH._state && (HH._state = "loaded", HH._emit("load"), HH._loadQueue());
        },
        JH = function () {
          if (TH.usingWebAudio) {
            try {
              "undefined" !== typeof AudioContext ? TH.ctx = new AudioContext() : "undefined" !== typeof webkitAudioContext ? TH.ctx = new webkitAudioContext() : TH.usingWebAudio = !1;
            } catch (hH) {
              TH.usingWebAudio = !1;
            }
            TH.ctx || (TH.usingWebAudio = !1);
            var HH = /iP(hone|od|ad)/.test(TH._navigator && TH._navigator.platform),
              IH = TH._navigator && TH._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              EH = IH ? parseInt(IH[1], 10) : null;
            if (HH && EH && EH < 9) {
              var RH = /safari/.test(TH._navigator && TH._navigator.userAgent.toLowerCase());
              TH._navigator && !RH && (TH.usingWebAudio = !1);
            }
            TH.usingWebAudio && (TH.masterGain = "undefined" === typeof TH.ctx.createGain ? TH.ctx.createGainNode() : TH.ctx.createGain(), TH.masterGain.gain.setValueAtTime(TH._muted ? 0 : TH._volume, TH.ctx.currentTime), TH.masterGain.connect(TH.ctx.destination)), TH._setup();
          }
        };
      void 0 === (RH = function () {
        return {
          Howler: TH,
          Howl: sH
        };
      }.apply(IH, [])) || (HH.exports = RH), IH.Howler = TH, IH.Howl = sH, "undefined" !== typeof EH.g ? (EH.g.HowlerGlobal = hH, EH.g.Howler = TH, EH.g.Howl = sH, EH.g.Sound = eH) : "undefined" !== typeof window && (window.HowlerGlobal = hH, window.Howler = TH, window.Howl = sH, window.Sound = eH);
    }(), function () {
      var HH;
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function (HH) {
        var IH = this;
        if (!IH.ctx || !IH.ctx.listener) return IH;
        for (var EH = IH._howls.length - 1; EH >= 0; EH--) IH._howls[EH].stereo(HH);
        return IH;
      }, HowlerGlobal.prototype.pos = function (HH, IH, EH) {
        var RH = this;
        return RH.ctx && RH.ctx.listener ? (IH = "number" !== typeof IH ? RH._pos[1] : IH, EH = "number" !== typeof EH ? RH._pos[2] : EH, "number" !== typeof HH ? RH._pos : (RH._pos = [HH, IH, EH], "undefined" !== typeof RH.ctx.listener.positionX ? (RH.ctx.listener.positionX.setTargetAtTime(RH._pos[0], Howler.ctx.currentTime, .1), RH.ctx.listener.positionY.setTargetAtTime(RH._pos[1], Howler.ctx.currentTime, .1), RH.ctx.listener.positionZ.setTargetAtTime(RH._pos[2], Howler.ctx.currentTime, .1)) : RH.ctx.listener.setPosition(RH._pos[0], RH._pos[1], RH._pos[2]), RH)) : RH;
      }, HowlerGlobal.prototype.orientation = function (HH, IH, EH, RH, hH, TH) {
        var sH = this;
        if (!sH.ctx || !sH.ctx.listener) return sH;
        var eH = sH._orientation;
        return IH = "number" !== typeof IH ? eH[1] : IH, EH = "number" !== typeof EH ? eH[2] : EH, RH = "number" !== typeof RH ? eH[3] : RH, hH = "number" !== typeof hH ? eH[4] : hH, TH = "number" !== typeof TH ? eH[5] : TH, "number" !== typeof HH ? eH : (sH._orientation = [HH, IH, EH, RH, hH, TH], "undefined" !== typeof sH.ctx.listener.forwardX ? (sH.ctx.listener.forwardX.setTargetAtTime(HH, Howler.ctx.currentTime, .1), sH.ctx.listener.forwardY.setTargetAtTime(IH, Howler.ctx.currentTime, .1), sH.ctx.listener.forwardZ.setTargetAtTime(EH, Howler.ctx.currentTime, .1), sH.ctx.listener.upX.setTargetAtTime(RH, Howler.ctx.currentTime, .1), sH.ctx.listener.upY.setTargetAtTime(hH, Howler.ctx.currentTime, .1), sH.ctx.listener.upZ.setTargetAtTime(TH, Howler.ctx.currentTime, .1)) : sH.ctx.listener.setOrientation(HH, IH, EH, RH, hH, TH), sH);
      }, Howl.prototype.init = (HH = Howl.prototype.init, function (IH) {
        var EH = this;
        return EH._orientation = IH.orientation || [1, 0, 0], EH._stereo = IH.stereo || null, EH._pos = IH.pos || null, EH._pannerAttr = {
          coneInnerAngle: "undefined" !== typeof IH.coneInnerAngle ? IH.coneInnerAngle : 360,
          coneOuterAngle: "undefined" !== typeof IH.coneOuterAngle ? IH.coneOuterAngle : 360,
          coneOuterGain: "undefined" !== typeof IH.coneOuterGain ? IH.coneOuterGain : 0,
          distanceModel: "undefined" !== typeof IH.distanceModel ? IH.distanceModel : "inverse",
          maxDistance: "undefined" !== typeof IH.maxDistance ? IH.maxDistance : 1e4,
          panningModel: "undefined" !== typeof IH.panningModel ? IH.panningModel : "HRTF",
          refDistance: "undefined" !== typeof IH.refDistance ? IH.refDistance : 1,
          rolloffFactor: "undefined" !== typeof IH.rolloffFactor ? IH.rolloffFactor : 1
        }, EH._onstereo = IH.onstereo ? [{
          eY: IH.onstereo
        }] : [], EH._onpos = IH.onpos ? [{
          eY: IH.onpos
        }] : [], EH._onorientation = IH.onorientation ? [{
          eY: IH.onorientation
        }] : [], HH.call(this, IH);
      }), Howl.prototype.stereo = function (HH, EH) {
        var RH = this;
        if (!RH._webAudio) return RH;
        if ("loaded" !== RH._state) return RH._queue.push({
          event: "stereo",
          action: function () {
            RH.stereo(HH, EH);
          }
        }), RH;
        var hH = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof EH) {
          if ("number" !== typeof HH) return RH._stereo;
          RH._stereo = HH, RH._pos = [HH, 0, 0];
        }
        for (var TH = RH._getSoundIds(EH), sH = 0; sH < TH.length; sH++) {
          var eH = RH._soundById(TH[sH]);
          if (eH) {
            if ("number" !== typeof HH) return eH._stereo;
            eH._stereo = HH, eH._pos = [HH, 0, 0], eH._node && (eH._pannerAttr.panningModel = "equalpower", eH._panner && eH._panner.pan || IH(eH, hH), "spatial" === hH ? "undefined" !== typeof eH._panner.positionX ? (eH._panner.positionX.setValueAtTime(HH, Howler.ctx.currentTime), eH._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), eH._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : eH._panner.setPosition(HH, 0, 0) : eH._panner.pan.setValueAtTime(HH, Howler.ctx.currentTime)), RH._emit("stereo", eH._id);
          }
        }
        return RH;
      }, Howl.prototype.pos = function (HH, EH, RH, hH) {
        var TH = this;
        if (!TH._webAudio) return TH;
        if ("loaded" !== TH._state) return TH._queue.push({
          event: "pos",
          action: function () {
            TH.pos(HH, EH, RH, hH);
          }
        }), TH;
        if (EH = "number" !== typeof EH ? 0 : EH, RH = "number" !== typeof RH ? -.5 : RH, "undefined" === typeof hH) {
          if ("number" !== typeof HH) return TH._pos;
          TH._pos = [HH, EH, RH];
        }
        for (var sH = TH._getSoundIds(hH), eH = 0; eH < sH.length; eH++) {
          var GH = TH._soundById(sH[eH]);
          if (GH) {
            if ("number" !== typeof HH) return GH._pos;
            GH._pos = [HH, EH, RH], GH._node && (GH._panner && !GH._panner.pan || IH(GH, "spatial"), "undefined" !== typeof GH._panner.positionX ? (GH._panner.positionX.setValueAtTime(HH, Howler.ctx.currentTime), GH._panner.positionY.setValueAtTime(EH, Howler.ctx.currentTime), GH._panner.positionZ.setValueAtTime(RH, Howler.ctx.currentTime)) : GH._panner.setPosition(HH, EH, RH)), TH._emit("pos", GH._id);
          }
        }
        return TH;
      }, Howl.prototype.orientation = function (HH, EH, RH, hH) {
        var TH = this;
        if (!TH._webAudio) return TH;
        if ("loaded" !== TH._state) return TH._queue.push({
          event: "orientation",
          action: function () {
            TH.orientation(HH, EH, RH, hH);
          }
        }), TH;
        if (EH = "number" !== typeof EH ? TH._orientation[1] : EH, RH = "number" !== typeof RH ? TH._orientation[2] : RH, "undefined" === typeof hH) {
          if ("number" !== typeof HH) return TH._orientation;
          TH._orientation = [HH, EH, RH];
        }
        for (var sH = TH._getSoundIds(hH), eH = 0; eH < sH.length; eH++) {
          var GH = TH._soundById(sH[eH]);
          if (GH) {
            if ("number" !== typeof HH) return GH._orientation;
            GH._orientation = [HH, EH, RH], GH._node && (GH._panner || (GH._pos || (GH._pos = TH._pos || [0, 0, -.5]), IH(GH, "spatial")), "undefined" !== typeof GH._panner.orientationX ? (GH._panner.orientationX.setValueAtTime(HH, Howler.ctx.currentTime), GH._panner.orientationY.setValueAtTime(EH, Howler.ctx.currentTime), GH._panner.orientationZ.setValueAtTime(RH, Howler.ctx.currentTime)) : GH._panner.setOrientation(HH, EH, RH)), TH._emit("orientation", GH._id);
          }
        }
        return TH;
      }, Howl.prototype.pannerAttr = function () {
        var HH,
          EH,
          RH,
          hH = this,
          TH = arguments;
        if (!hH._webAudio) return hH;
        if (0 === TH.length) return hH._pannerAttr;
        if (1 === TH.length) {
          if ("object" !== typeof TH[0]) return (RH = hH._soundById(parseInt(TH[0], 10))) ? RH._pannerAttr : hH._pannerAttr;
          HH = TH[0], "undefined" === typeof EH && (HH.pannerAttr || (HH.pannerAttr = {
            coneInnerAngle: HH.coneInnerAngle,
            coneOuterAngle: HH.coneOuterAngle,
            coneOuterGain: HH.coneOuterGain,
            distanceModel: HH.distanceModel,
            maxDistance: HH.maxDistance,
            refDistance: HH.refDistance,
            rolloffFactor: HH.rolloffFactor,
            panningModel: HH.panningModel
          }), hH._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof HH.pannerAttr.coneInnerAngle ? HH.pannerAttr.coneInnerAngle : hH._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof HH.pannerAttr.coneOuterAngle ? HH.pannerAttr.coneOuterAngle : hH._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof HH.pannerAttr.coneOuterGain ? HH.pannerAttr.coneOuterGain : hH._coneOuterGain,
            distanceModel: "undefined" !== typeof HH.pannerAttr.distanceModel ? HH.pannerAttr.distanceModel : hH._distanceModel,
            maxDistance: "undefined" !== typeof HH.pannerAttr.maxDistance ? HH.pannerAttr.maxDistance : hH._maxDistance,
            refDistance: "undefined" !== typeof HH.pannerAttr.refDistance ? HH.pannerAttr.refDistance : hH._refDistance,
            rolloffFactor: "undefined" !== typeof HH.pannerAttr.rolloffFactor ? HH.pannerAttr.rolloffFactor : hH._rolloffFactor,
            panningModel: "undefined" !== typeof HH.pannerAttr.panningModel ? HH.pannerAttr.panningModel : hH._panningModel
          });
        } else 2 === TH.length && (HH = TH[0], EH = parseInt(TH[1], 10));
        for (var sH = hH._getSoundIds(EH), eH = 0; eH < sH.length; eH++) if (RH = hH._soundById(sH[eH])) {
          var GH = RH._pannerAttr;
          GH = {
            coneInnerAngle: "undefined" !== typeof HH.coneInnerAngle ? HH.coneInnerAngle : GH.coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof HH.coneOuterAngle ? HH.coneOuterAngle : GH.coneOuterAngle,
            coneOuterGain: "undefined" !== typeof HH.coneOuterGain ? HH.coneOuterGain : GH.coneOuterGain,
            distanceModel: "undefined" !== typeof HH.distanceModel ? HH.distanceModel : GH.distanceModel,
            maxDistance: "undefined" !== typeof HH.maxDistance ? HH.maxDistance : GH.maxDistance,
            refDistance: "undefined" !== typeof HH.refDistance ? HH.refDistance : GH.refDistance,
            rolloffFactor: "undefined" !== typeof HH.rolloffFactor ? HH.rolloffFactor : GH.rolloffFactor,
            panningModel: "undefined" !== typeof HH.panningModel ? HH.panningModel : GH.panningModel
          };
          var AH = RH._panner;
          AH ? (AH.coneInnerAngle = GH.coneInnerAngle, AH.coneOuterAngle = GH.coneOuterAngle, AH.coneOuterGain = GH.coneOuterGain, AH.distanceModel = GH.distanceModel, AH.maxDistance = GH.maxDistance, AH.refDistance = GH.refDistance, AH.rolloffFactor = GH.rolloffFactor, AH.panningModel = GH.panningModel) : (RH._pos || (RH._pos = hH._pos || [0, 0, -.5]), IH(RH, "spatial"));
        }
        return hH;
      }, Sound.prototype.init = function (HH) {
        return function () {
          var IH = this,
            EH = IH._parent;
          IH._orientation = EH._orientation, IH._stereo = EH._stereo, IH._pos = EH._pos, IH._pannerAttr = EH._pannerAttr, HH.call(this), IH._stereo ? EH.stereo(IH._stereo) : IH._pos && EH.pos(IH._pos[0], IH._pos[1], IH._pos[2], IH._id);
        };
      }(Sound.prototype.init), Sound.prototype.reset = function (HH) {
        return function () {
          var IH = this,
            EH = IH._parent;
          return IH._orientation = EH._orientation, IH._stereo = EH._stereo, IH._pos = EH._pos, IH._pannerAttr = EH._pannerAttr, IH._stereo ? EH.stereo(IH._stereo) : IH._pos ? EH.pos(IH._pos[0], IH._pos[1], IH._pos[2], IH._id) : IH._panner && (IH._panner.disconnect(0), IH._panner = void 0, EH._refreshBuffer(IH)), HH.call(this);
        };
      }(Sound.prototype.reset);
      var IH = function (HH, IH) {
        "spatial" === (IH = IH || "spatial") ? (HH._panner = Howler.ctx.createPanner(), HH._panner.coneInnerAngle = HH._pannerAttr.coneInnerAngle, HH._panner.coneOuterAngle = HH._pannerAttr.coneOuterAngle, HH._panner.coneOuterGain = HH._pannerAttr.coneOuterGain, HH._panner.distanceModel = HH._pannerAttr.distanceModel, HH._panner.maxDistance = HH._pannerAttr.maxDistance, HH._panner.refDistance = HH._pannerAttr.refDistance, HH._panner.rolloffFactor = HH._pannerAttr.rolloffFactor, HH._panner.panningModel = HH._pannerAttr.panningModel, "undefined" !== typeof HH._panner.positionX ? (HH._panner.positionX.setValueAtTime(HH._pos[0], Howler.ctx.currentTime), HH._panner.positionY.setValueAtTime(HH._pos[1], Howler.ctx.currentTime), HH._panner.positionZ.setValueAtTime(HH._pos[2], Howler.ctx.currentTime)) : HH._panner.setPosition(HH._pos[0], HH._pos[1], HH._pos[2]), "undefined" !== typeof HH._panner.orientationX ? (HH._panner.orientationX.setValueAtTime(HH._orientation[0], Howler.ctx.currentTime), HH._panner.orientationY.setValueAtTime(HH._orientation[1], Howler.ctx.currentTime), HH._panner.orientationZ.setValueAtTime(HH._orientation[2], Howler.ctx.currentTime)) : HH._panner.setOrientation(HH._orientation[0], HH._orientation[1], HH._orientation[2])) : (HH._panner = Howler.ctx.createStereoPanner(), HH._panner.pan.setValueAtTime(HH._stereo, Howler.ctx.currentTime)), HH._panner.connect(HH._node), HH.AY || HH._parent.pause(HH._id, !0).play(HH._id, !0);
      };
    }();
  }
};
//# sourceMappingURL=ug4nu.41.cd5f6e06.chunk.js.map
//# debugId=41e4ea1f-1be5-5ee8-8bf8-0c47aab65761