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

float calcSine(
  vec2 uv,
  float speed,
  float frequency,
  float amplitude,
  float phaseShift,
  float verticalOffset,
  vec3 color,
  float lineWidth,
  float sharpness,
  bool invertFalloff
) {
  float angle = uTime * speed * frequency * -1.0 + (phaseShift + uv.x) * 2.0;
  float waveY = sin(angle) * amplitude + verticalOffset;

  float dist = distance(uv.y, waveY);

  if (invertFalloff) {
    if (uv.y < waveY) {
      dist *= 4.0;
    }
  } else {
    if (uv.y > waveY) {
      dist *= 4.0;
    }
  }

  float smoothVal = smoothstep(lineWidth, 0.0, dist);
  smoothVal = pow(smoothVal, sharpness);

  return smoothVal;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;

  vec3 accumulatedColor = vec3(0.0);

  accumulatedColor += vec3(0.3) * calcSine(uv, 0.2, 0.20, 0.2,  0.0, 0.5, vec3(0.3), 0.1,  15.0, false);
  accumulatedColor += vec3(0.3) * calcSine(uv, 0.4, 0.40, 0.15, 0.0, 0.5, vec3(0.3), 0.1,  17.0, false);
  accumulatedColor += vec3(0.3) * calcSine(uv, 0.3, 0.60, 0.15, 0.0, 0.5, vec3(0.3), 0.05, 23.0, false);

  accumulatedColor += vec3(0.3) * calcSine(uv, 0.1, 0.26, 0.07, 0.0, 0.3, vec3(0.3), 0.1,  17.0, true);
  accumulatedColor += vec3(0.3) * calcSine(uv, 0.3, 0.36, 0.07, 0.0, 0.3, vec3(0.3), 0.1,  17.0, true);
  accumulatedColor += vec3(0.3) * calcSine(uv, 0.5, 0.46, 0.07, 0.0, 0.3, vec3(0.3), 0.05, 23.0, true);
  accumulatedColor += vec3(0.3) * calcSine(uv, 0.2, 0.58, 0.05, 0.0, 0.3, vec3(0.3), 0.2,  15.0, true);

  gl_FragColor = vec4(accumulatedColor, 1.0);
}
`;

export const PspWaveBackground = React.forwardRef<
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
PspWaveBackground.displayName = "PspWaveBackground";
