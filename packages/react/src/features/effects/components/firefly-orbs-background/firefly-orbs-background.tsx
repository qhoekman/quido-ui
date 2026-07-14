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

float orb(vec2 uv, vec2 center, float sharpness) {
  vec2 delta = uv - center;
  float dist = length(delta);
  return exp(-dist * dist * sharpness);
}

vec3 firefly(vec2 uv, float aspect, float t, vec2 base, vec2 drift, vec4 phase, vec3 color, float sharp, float presenceRate, float presencePhase) {
  vec2 c = vec2(
    (base.x + drift.x * sin(phase.x * t + phase.z) + drift.x * 0.4 * sin(2.6 * phase.x * t + phase.w)) * aspect,
    base.y + drift.y * cos(phase.y * t + phase.w) + drift.y * 0.4 * cos(2.6 * phase.y * t + phase.z)
  );
  float presence = smoothstep(0.0, 0.6, sin(t * presenceRate + presencePhase));
  float flicker = 0.9 + 0.1 * sin(t * 2.7 + presencePhase * 1.7);
  return color * orb(uv, c, sharp) * presence * flicker;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float aspect = uResolution.x / uResolution.y;
  uv.x *= aspect;

  float t = uTime;

  vec3 col = vec3(0.020, 0.030, 0.080);

  vec3 cMaroon = vec3(0.36, 0.08, 0.12);
  vec3 cAmber  = vec3(0.38, 0.22, 0.08);
  vec3 cRose   = vec3(0.26, 0.10, 0.22);
  vec3 cPeach  = vec3(0.34, 0.18, 0.12);
  vec3 cGold   = vec3(0.34, 0.24, 0.08);

  col += firefly(uv, aspect, t, vec2(0.22, 0.58), vec2(0.08, 0.07), vec4(0.09, 0.07, 0.3, 1.7), cMaroon, 55.0, 0.18, 0.0);
  col += firefly(uv, aspect, t, vec2(0.72, 0.55), vec2(0.09, 0.08), vec4(0.08, 0.06, 2.4, 0.9), cAmber,  40.0, 0.24, 1.8);
  col += firefly(uv, aspect, t, vec2(0.68, 0.28), vec2(0.07, 0.06), vec4(0.11, 0.10, 4.2, 2.6), cRose,   70.0, 0.31, 3.6);
  col += firefly(uv, aspect, t, vec2(0.15, 0.80), vec2(0.06, 0.05), vec4(0.13, 0.09, 1.1, 3.4), cPeach,  80.0, 0.27, 5.4);
  col += firefly(uv, aspect, t, vec2(0.50, 0.72), vec2(0.10, 0.06), vec4(0.07, 0.11, 2.0, 4.5), cGold,   60.0, 0.22, 0.9);
  col += firefly(uv, aspect, t, vec2(0.85, 0.82), vec2(0.05, 0.05), vec4(0.12, 0.08, 0.6, 2.1), cAmber,  90.0, 0.35, 2.7);
  col += firefly(uv, aspect, t, vec2(0.38, 0.20), vec2(0.08, 0.07), vec4(0.10, 0.12, 3.6, 0.2), cMaroon, 65.0, 0.19, 4.5);
  col += firefly(uv, aspect, t, vec2(0.55, 0.42), vec2(0.05, 0.05), vec4(0.14, 0.10, 1.9, 5.0), cRose,  100.0, 0.29, 0.3);
  col += firefly(uv, aspect, t, vec2(0.08, 0.32), vec2(0.06, 0.06), vec4(0.09, 0.13, 4.8, 1.4), cGold,   75.0, 0.25, 2.1);
  col += firefly(uv, aspect, t, vec2(0.92, 0.18), vec2(0.05, 0.04), vec4(0.11, 0.09, 3.0, 3.9), cPeach,  85.0, 0.33, 3.9);

  float edgeX = abs(uv.x / aspect - 0.5) * 2.0;
  float vignette = 1.0 - 0.6 * pow(edgeX, 1.5);
  col *= vignette;

  gl_FragColor = vec4(col, 1.0);
}
`;

export const FireflyOrbsBackground = React.forwardRef<
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
FireflyOrbsBackground.displayName = "FireflyOrbsBackground";
