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
uniform float uSeed;

float hash(float n) {
  return fract(sin(n + uSeed) * 43758.5453123);
}

float rectShadow(vec2 uv, vec2 center, vec2 size, float angle, float blur) {
  vec2 d = uv - center;
  float c = cos(angle), s = sin(angle);
  d = vec2(d.x * c - d.y * s, d.x * s + d.y * c);
  vec2 q = smoothstep(size + blur, size, abs(d));
  return q.x * q.y;
}

vec3 rect(vec3 base, vec2 uv, vec2 center, vec2 size, float angle, vec3 color) {
  vec2 d = uv - center;
  float c = cos(angle), s = sin(angle);
  d = vec2(d.x * c - d.y * s, d.x * s + d.y * c);
  vec2 q = step(abs(d), size);
  float mask = q.x * q.y;
  return mix(base, color, mask);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float aspect = uResolution.x / uResolution.y;
  uv.x *= aspect;

  float t = uTime * 0.06;

  vec3 col = vec3(0.72, 0.18, 0.10);

  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    float s1 = hash(fi * 7.3 + 1.0);
    float s2 = hash(fi * 13.7 + 2.0);
    float s3 = hash(fi * 23.1 + 3.0);
    float s4 = hash(fi * 31.9 + 4.0);
    float s5 = hash(fi * 41.3 + 5.0);
    float s6 = hash(fi * 53.7 + 6.0);

    float fx1 = 0.07 + s1 * 0.12;
    float fy1 = 0.05 + s2 * 0.10;
    float fx2 = 0.31 + s3 * 0.25;
    float fy2 = 0.29 + s4 * 0.20;

    vec2 center = vec2(
      (0.5 + 0.6 * sin(fx1 * t + s1 * 30.0) + 0.2 * sin(fx2 * t + s2 * 20.0)) * aspect,
       0.5 + 0.6 * cos(fy1 * t + s3 * 25.0) + 0.2 * cos(fy2 * t + s4 * 15.0)
    );

    float angle = (s5 - 0.5) * 3.14159 + 0.4 * sin((0.05 + s6 * 0.08) * t + s5 * 10.0);

    vec2 size = vec2(0.47 + s1 * 0.33, 0.47 + s2 * 0.33);

    float elevation = (fi + 1.0) / 5.0;

    vec2 shadowOffset = vec2(0.02, -0.03) * elevation;
    float shadowBlur = 0.03 + elevation * 0.06;
    float shadow = rectShadow(uv, center + shadowOffset, size, angle, shadowBlur);
    col = mix(col, col * 0.4, shadow * 0.5 * elevation);

    float idx = fi / 5.0;
    float r = 0.65 + idx * 0.35;
    float g = 0.10 + idx * 0.12;
    float b = 0.05 + idx * 0.08;
    vec3 color = vec3(r, g, b);

    col = rect(col, uv, center, size, angle, color);
  }

  gl_FragColor = vec4(col, 1.0);
}
`;

export const AbstractRectanglesBackground = React.forwardRef<
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
      const uSeed = gl.getUniformLocation(program, "uSeed")!;
      gl.uniform1f(uSeed, Math.random() * 1000.0);

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
AbstractRectanglesBackground.displayName = "AbstractRectanglesBackground";
