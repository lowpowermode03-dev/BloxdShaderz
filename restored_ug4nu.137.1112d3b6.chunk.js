!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e8a4fce1-7971-5981-9317-d7b6927f5a6c");
  } catch (e) {}
}();
export const id = 137;
export const ids = [137];
export const modules = {
  25285: (HH, IH, EH) => {
    EH.r(IH), EH.d(IH, {
      postprocessVertexShader: () => sH
    });
    var RH = EH(22015);
    const hH = "postprocessVertexShader",
      TH = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    RH.d.ShadersStore[hH] || (RH.d.ShadersStore[hH] = TH);
    const sH = {
      name: hH,
      shader: TH
    };
  }
};
//# sourceMappingURL=ug4nu.137.1112d3b6.chunk.js.map
//# debugId=e8a4fce1-7971-5981-9317-d7b6927f5a6c