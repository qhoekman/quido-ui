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

vec3 circle(vec3 base, vec2 uv, vec2 center, float radius, vec3 color, float alpha) {
  float dist = length(uv - center);
  float mask = step(dist, radius);
  return mix(base, color, mask * alpha);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float aspect = uResolution.x / uResolution.y;
  uv.x *= aspect;

  float t = uTime * 0.12;

  vec3 col = vec3(0.08, 0.15, 0.5);

  vec2 c0 = vec2(
    (0.5 + 0.45 * sin(0.23 * t + 0.0) + 0.15 * sin(0.71 * t + 3.1)) * aspect,
    0.5 + 0.4 * cos(0.19 * t + 0.5) + 0.12 * cos(0.67 * t + 1.4)
  );
  float r0 = 0.9 + 0.06 * sin(t * 0.4);
  col = circle(col, uv, c0, r0, vec3(0.1, 0.7, 0.55), 0.75);

  vec2 c1 = vec2(
    (0.5 + 0.5 * sin(0.17 * t + 1.2) + 0.12 * sin(0.83 * t + 5.7)) * aspect,
    0.5 + 0.45 * cos(0.29 * t + 2.0) + 0.1 * cos(0.59 * t + 4.2)
  );
  float r1 = 0.8 + 0.05 * sin(t * 0.5 + 1.0);
  col = circle(col, uv, c1, r1, vec3(0.4, 0.15, 0.7), 0.7);

  vec2 c2 = vec2(
    (0.5 + 0.4 * sin(0.31 * t + 2.5) + 0.18 * sin(0.53 * t + 0.8)) * aspect,
    0.5 + 0.35 * cos(0.21 * t + 1.0) + 0.15 * cos(0.79 * t + 3.6)
  );
  float r2 = 1.0 + 0.08 * sin(t * 0.35 + 2.0);
  col = circle(col, uv, c2, r2, vec3(0.15, 0.55, 0.95), 0.8);

  vec2 c3 = vec2(
    (0.5 + 0.5 * sin(0.13 * t + 3.8) + 0.1 * sin(0.89 * t + 2.3)) * aspect,
    0.5 + 0.4 * cos(0.27 * t + 0.3) + 0.13 * cos(0.61 * t + 5.1)
  );
  float r3 = 0.76 + 0.06 * sin(t * 0.45 + 3.0);
  col = circle(col, uv, c3, r3, vec3(0.1, 0.2, 0.6), 0.7);

  vec2 c4 = vec2(
    (0.5 + 0.45 * sin(0.37 * t + 5.0) + 0.14 * sin(0.47 * t + 1.9)) * aspect,
    0.5 + 0.45 * cos(0.16 * t + 4.0) + 0.1 * cos(0.73 * t + 6.3)
  );
  float r4 = 0.7 + 0.05 * sin(t * 0.55 + 4.0);
  col = circle(col, uv, c4, r4, vec3(0.95, 0.6, 0.1), 0.75);

  vec2 c5 = vec2(
    (0.5 + 0.4 * sin(0.41 * t + 6.2) + 0.16 * sin(0.61 * t + 3.4)) * aspect,
    0.5 + 0.35 * cos(0.33 * t + 5.5) + 0.12 * cos(0.43 * t + 0.7)
  );
  float r5 = 0.6 + 0.04 * sin(t * 0.5 + 5.0);
  col = circle(col, uv, c5, r5, vec3(0.9, 0.25, 0.2), 0.7);

  vec2 c6 = vec2(
    (0.5 + 0.5 * sin(0.19 * t + 7.5) + 0.13 * sin(0.97 * t + 4.8)) * aspect,
    0.5 + 0.4 * cos(0.43 * t + 6.8) + 0.1 * cos(0.31 * t + 2.6)
  );
  float r6 = 0.56 + 0.04 * sin(t * 0.6 + 6.0);
  col = circle(col, uv, c6, r6, vec3(0.95, 0.75, 0.1), 0.65);

  vec2 c7 = vec2(
    (0.5 + 0.45 * sin(0.29 * t + 8.0) + 0.15 * sin(0.67 * t + 5.3)) * aspect,
    0.5 + 0.45 * cos(0.37 * t + 7.0) + 0.11 * cos(0.53 * t + 1.1)
  );
  float r7 = 0.7 + 0.06 * sin(t * 0.3 + 7.0);
  col = circle(col, uv, c7, r7, vec3(0.3, 0.7, 0.95), 0.6);

  gl_FragColor = vec4(col, 1.0);
}
`;

export const AbstractCirclesBackground = React.forwardRef<
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
AbstractCirclesBackground.displayName = "AbstractCirclesBackground";
