import React, { useCallback } from "react";

import { useCanvasBackground } from "@/features/effects/hooks/useCanvasBackground";
import { BackgroundEffectShell } from "@/features/effects/lib/background-effect-shell";
import { useBackgroundEffectRefs } from "@/features/effects/lib/background-effect-utils";
import type { BackgroundEffectProps } from "@/features/effects/lib/types";
import {
  FULLSCREEN_VERTEX_SHADER,
  createProgram,
  setupFullscreenQuad,
} from "@/features/effects/lib/webgl";

const FRAGMENT_SHADER = `
precision mediump float;

uniform float uTime;
uniform vec2 uResolution;

vec2 rot(vec2 p, float a) {
  float c = cos(a);
  float s = sin(a);
  return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
}

float causticLayer(vec2 uv, float scale, float speed, float rotation) {
  vec2 stretched = vec2(uv.x, uv.y * 0.25);
  vec2 p = rot(stretched * scale, rotation);
  float t = uTime * speed;
  float v = abs(sin(p.x + t) + sin(p.y + t * 0.7));
  v = pow(v, 3.0);
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float aspect = uResolution.x / uResolution.y;
  uv.x *= aspect;

  vec3 col = vec3(0.003, 0.008, 0.012) + vec3(0.008, 0.03, 0.045) * uv.y * uv.y;

  float depthFade = smoothstep(0.25, 0.95, uv.y);

  float c1 = causticLayer(uv, 4.0, 0.3, 0.4);
  col += vec3(0.6, 0.12, 0.35) * c1 * 0.10 * depthFade;

  float c2 = causticLayer(uv, 6.0, 0.4, 1.8);
  col += vec3(0.35, 0.08, 0.6) * c2 * 0.08 * depthFade;

  float c3 = causticLayer(uv, 9.0, 0.55, 3.2);
  col += vec3(0.12, 0.2, 0.6) * c3 * 0.08 * depthFade;

  float c4 = causticLayer(uv, 7.0, 0.45, 4.0);
  col += vec3(0.5, 0.18, 0.45) * c4 * 0.07 * depthFade;

  float c5 = causticLayer(uv, 13.0, 0.7, 5.0);
  col += vec3(0.55, 0.3, 0.12) * c5 * 0.06 * depthFade;

  vec2 lightPos = vec2(aspect * 0.45, 1.3);
  float lightDist = length(uv - lightPos);
  float light = exp(-lightDist * lightDist * 1.2);
  col += vec3(0.03, 0.08, 0.10) * light * 0.7;

  vec2 center = vec2(aspect * 0.5, 0.5);
  float vig = 1.0 - 0.5 * length(uv - center) / length(center);
  col *= vig;

  gl_FragColor = vec4(col, 1.0);
}
`;

export const OceanLightsBackground = React.forwardRef<
  HTMLCanvasElement,
  BackgroundEffectProps
>(({ fixed = false, style, className, ...props }, ref) => {
  const { containerRef, canvasRef, mergedCanvasRef } =
    useBackgroundEffectRefs(ref);

  const onMount = useCallback(
    (canvas: HTMLCanvasElement, helpers) => {
      const gl = canvas.getContext("webgl");
      if (!gl) return;

      const program = createProgram(
        gl,
        FULLSCREEN_VERTEX_SHADER,
        FRAGMENT_SHADER
      );
      gl.useProgram(program);
      setupFullscreenQuad(gl, program);

      const uTime = gl.getUniformLocation(program, "uTime")!;
      const uResolution = gl.getUniformLocation(program, "uResolution")!;

      helpers.setResizeHandler((size) => {
        canvas.width = size.pixelWidth;
        canvas.height = size.pixelHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      });

      helpers.setRenderHandler((timestamp) => {
        gl.uniform1f(uTime, timestamp * 0.001);
        gl.uniform2f(uResolution, canvas.width, canvas.height);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      });
    },
    []
  );

  useCanvasBackground(containerRef, canvasRef, { onMount });

  return (
    <BackgroundEffectShell
      fixed={fixed}
      style={style}
      className={className}
      containerRef={containerRef}
      mergedCanvasRef={mergedCanvasRef}
      {...props}
    />
  );
});
OceanLightsBackground.displayName = "OceanLightsBackground";
