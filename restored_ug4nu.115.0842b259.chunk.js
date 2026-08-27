!function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b2bcb68f-3026-567e-bb8d-13fd8040b2c5");
  } catch (e) {}
}();
export const id = 115;
export const ids = [115];
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
  24864: (HH, IH, EH) => {
    EH.r(IH), EH.d(IH, {
      particlesVertexShader: () => JH
    });
    var RH = EH(22015),
      hH = EH(24541),
      TH = EH(24547),
      sH = EH(24577),
      eH = EH(24634),
      GH = EH(24643),
      AH = EH(24656);
    const VH = "particlesVertexShader",
      YH = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef RAMPGRADIENT\nattribute vec4 remapData;\n#endif\nattribute vec2 offset;uniform mat4 view;uniform mat4 projection;uniform vec2 translationPivot;\n#ifdef ANIMATESHEET\nuniform vec3 particlesInfos; \n#endif\nvarying vec2 vUV;varying vec4 vColor;\n#ifdef POSITIONW_AS_VARYING\nvarying vec3 vPositionW;\n#endif\n#ifdef RAMPGRADIENT\nvarying vec4 remapRanges;\n#endif\n#if defined(BILLBOARD) && !defined(BILLBOARDY) && !defined(BILLBOARDSTRETCHED)\nuniform mat4 invView;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<logDepthDeclaration>\n#ifdef BILLBOARD\nuniform vec3 eyePosition;\n#endif\nvec3 rotate(vec3 yaxis,vec3 rotatedCorner) {vec3 xaxis=normalize(cross(vec3(0.,1.0,0.),yaxis));vec3 zaxis=normalize(cross(yaxis,xaxis));vec3 row0=vec3(xaxis.x,xaxis.y,xaxis.z);vec3 row1=vec3(yaxis.x,yaxis.y,yaxis.z);vec3 row2=vec3(zaxis.x,zaxis.y,zaxis.z);mat3 rotMatrix= mat3(row0,row1,row2);vec3 alignedCorner=rotMatrix*rotatedCorner;return position+alignedCorner;}\n#ifdef BILLBOARDSTRETCHED\nvec3 rotateAlign(vec3 toCamera,vec3 rotatedCorner) {vec3 normalizedToCamera=normalize(toCamera);vec3 normalizedCrossDirToCamera=normalize(cross(normalize(direction),normalizedToCamera));vec3 row0=vec3(normalizedCrossDirToCamera.x,normalizedCrossDirToCamera.y,normalizedCrossDirToCamera.z);vec3 row2=vec3(normalizedToCamera.x,normalizedToCamera.y,normalizedToCamera.z);\n#ifdef BILLBOARDSTRETCHED_LOCAL\nvec3 row1=normalize(direction);\n#else\nvec3 crossProduct=normalize(cross(normalizedToCamera,normalizedCrossDirToCamera));vec3 row1=vec3(crossProduct.x,crossProduct.y,crossProduct.z);\n#endif\nmat3 rotMatrix= mat3(row0,row1,row2);vec3 alignedCorner=rotMatrix*rotatedCorner;return position+alignedCorner;}\n#endif\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvec2 cornerPos;\n#ifndef POSITIONW_AS_VARYING\nvec3 vPositionW;\n#endif\ncornerPos=(vec2(offset.x-0.5,offset.y -0.5)-translationPivot)*size;\n#ifdef BILLBOARD\nvec3 rotatedCorner;\n#ifdef BILLBOARDY\nrotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.z=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.y=0.;rotatedCorner.xz+=translationPivot;vec3 yaxis=position-eyePosition;yaxis.y=0.;vPositionW=rotate(normalize(yaxis),rotatedCorner);vec3 viewPos=(view*vec4(vPositionW,1.0)).xyz;\n#elif defined(BILLBOARDSTRETCHED)\nrotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;rotatedCorner.xy+=translationPivot;vec3 toCamera=position-eyePosition;vPositionW=rotateAlign(toCamera,rotatedCorner);vec3 viewPos=(view*vec4(vPositionW,1.0)).xyz;\n#else\nrotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;rotatedCorner.xy+=translationPivot;vec3 viewPos=(view*vec4(position,1.0)).xyz+rotatedCorner;vPositionW=(invView*vec4(viewPos,1)).xyz;\n#endif\n#ifdef RAMPGRADIENT\nremapRanges=remapData;\n#endif\ngl_Position=projection*vec4(viewPos,1.0);\n#else\nvec3 rotatedCorner;rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.z=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.y=0.;rotatedCorner.xz+=translationPivot;vec3 yaxis=normalize(direction);vPositionW=rotate(yaxis,rotatedCorner);gl_Position=projection*view*vec4(vPositionW,1.0);\n#endif\nvColor=color;\n#ifdef ANIMATESHEET\nfloat rowOffset=floor(cellIndex*particlesInfos.z);float columnOffset=cellIndex-rowOffset/particlesInfos.z;vec2 uvScale=particlesInfos.xy;vec2 uvOffset=vec2(offset.x ,1.0-offset.y);vUV=(uvOffset+vec2(columnOffset,rowOffset))*uvScale;\n#else\nvUV=offset;\n#endif\n#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6) || defined(FOG)\nvec4 worldPos=vec4(vPositionW,1.0);\n#endif\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<logDepthVertex>\n#define CUSTOM_VERTEX_MAIN_END\n}";
    RH.d.ShadersStore[VH] || (RH.d.ShadersStore[VH] = YH);
    const QH = [hH.b, TH.d, sH.d, eH.b, GH.d, AH.b];
    for (const OH of QH) RH.d.IncludesShadersStore[OH.name] || (RH.d.IncludesShadersStore[OH.name] = OH.shader);
    const JH = {
      name: VH,
      shader: YH
    };
  }
};
//# sourceMappingURL=ug4nu.115.0842b259.chunk.js.map
//# debugId=b2bcb68f-3026-567e-bb8d-13fd8040b2c5