!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "31a2725e-a78d-5246-8b99-a97a2fc7b0d7");
  } catch (e) {}
}();
export const id = 116;
export const ids = [116];
export const modules = {
  24634: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => sH
    });
    var RH = EH(22015);
    const hH = "clipPlaneVertex",
      TH = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nfClipDistance5=dot(worldPos,vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nfClipDistance6=dot(worldPos,vClipPlane6);\n#endif\n";
    RH.d.IncludesShadersStore[hH] || (RH.d.IncludesShadersStore[hH] = TH);
    const sH = {
      name: hH,
      shader: TH
    };
  },
  24541: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => sH
    });
    var RH = EH(22015);
    const hH = "clipPlaneVertexDeclaration",
      TH = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuniform vec4 vClipPlane4;varying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nuniform vec4 vClipPlane5;varying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nuniform vec4 vClipPlane6;varying float fClipDistance6;\n#endif\n";
    RH.d.IncludesShadersStore[hH] || (RH.d.IncludesShadersStore[hH] = TH);
    const sH = {
      name: hH,
      shader: TH
    };
  },
  24643: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => sH
    });
    var RH = EH(22015);
    const hH = "fogVertex",
      TH = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
    RH.d.IncludesShadersStore[hH] || (RH.d.IncludesShadersStore[hH] = TH);
    const sH = {
      name: hH,
      shader: TH
    };
  },
  24547: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => sH
    });
    var RH = EH(22015);
    const hH = "fogVertexDeclaration",
      TH = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
    RH.d.IncludesShadersStore[hH] || (RH.d.IncludesShadersStore[hH] = TH);
    const sH = {
      name: hH,
      shader: TH
    };
  },
  24577: (HH, IH, EH) => {
    EH.d(IH, {
      d: () => sH
    });
    var RH = EH(22015);
    const hH = "logDepthDeclaration",
      TH = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
    RH.d.IncludesShadersStore[hH] || (RH.d.IncludesShadersStore[hH] = TH);
    const sH = {
      name: hH,
      shader: TH
    };
  },
  24656: (HH, IH, EH) => {
    EH.d(IH, {
      b: () => sH
    });
    var RH = EH(22015);
    const hH = "logDepthVertex",
      TH = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
    RH.d.IncludesShadersStore[hH] || (RH.d.IncludesShadersStore[hH] = TH);
    const sH = {
      name: hH,
      shader: TH
    };
  },
  25036: (HH, IH, EH) => {
    EH.r(IH), EH.d(IH, {
      skyVertexShader: () => JH
    });
    var RH = EH(22015),
      hH = EH(24577),
      TH = EH(24541),
      sH = EH(24547),
      eH = EH(24634),
      GH = EH(24656),
      AH = EH(24643);
    const VH = "skyVertexShader",
      YH = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    RH.d.ShadersStore[VH] || (RH.d.ShadersStore[VH] = YH);
    const QH = [hH.d, TH.b, sH.d, eH.b, GH.b, AH.d];
    for (const OH of QH) RH.d.IncludesShadersStore[OH.name] || (RH.d.IncludesShadersStore[OH.name] = OH.shader);
    const JH = {
      name: VH,
      shader: YH
    };
  }
};
//# sourceMappingURL=ug4nu.116.598efd97.chunk.js.map
//# debugId=31a2725e-a78d-5246-8b99-a97a2fc7b0d7