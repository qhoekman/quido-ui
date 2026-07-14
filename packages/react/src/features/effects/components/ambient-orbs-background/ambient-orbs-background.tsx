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

float orb(vec2 uv, vec2 center, float sharpness, float morph, float lobes, float morphSpeed) {
  vec2 delta = uv - center;
  float dist = length(delta);

  float angle = atan(delta.y, delta.x);
  dist += morph * sin(angle * lobes + uTime * morphSpeed);

  return exp(-dist * dist * sharpness);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float aspect = uResolution.x / uResolution.y;
  uv.x *= aspect;

  float t = uTime * 0.15;

  vec3 col = vec3(0.04, 0.04, 0.08);

  vec2 c0 = vec2(
    (0.25 + 0.2 * sin(0.7 * t)) * aspect,
    0.75 + 0.15 * cos(0.5 * t)
  );
  col += vec3(0.6, 0.12, 0.35) * orb(uv, c0, 5.3, 0.015, 3.0, 0.4);

  vec2 c1 = vec2(
    (0.75 + 0.18 * sin(0.5 * t + 1.5)) * aspect,
    0.25 + 0.2 * cos(0.8 * t + 0.8)
  );
  col += vec3(0.35, 0.08, 0.6) * orb(uv, c1, 6.0, 0.012, 4.0, 0.3);

  vec2 c2 = vec2(
    (0.2 + 0.25 * sin(0.6 * t + 3.0)) * aspect,
    0.35 + 0.2 * cos(0.4 * t + 2.0)
  );
  col += vec3(0.12, 0.2, 0.6) * orb(uv, c2, 4.7, 0.01, 2.0, 0.5);

  vec2 c3 = vec2(
    (0.7 + 0.15 * sin(0.4 * t + 4.5)) * aspect,
    0.7 + 0.18 * cos(0.7 * t + 1.2)
  );
  col += vec3(0.5, 0.18, 0.45) * orb(uv, c3, 6.7, 0.01, 5.0, 0.35);

  vec2 c4 = vec2(
    (0.3 + 0.15 * sin(0.9 * t + 2.0)) * aspect,
    0.2 + 0.12 * cos(0.6 * t + 3.5)
  );
  col += vec3(0.55, 0.3, 0.12) * orb(uv, c4, 8.0, 0.008, 3.0, 0.45);

  vec2 center = vec2(aspect * 0.5, 0.5);
  float vignette = 1.0 - 0.4 * length(uv - center) / length(center);
  col *= vignette;

  gl_FragColor = vec4(col, 1.0);
}
`;

export const AmbientOrbsBackground = React.forwardRef<
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
AmbientOrbsBackground.displayName = "AmbientOrbsBackground";
