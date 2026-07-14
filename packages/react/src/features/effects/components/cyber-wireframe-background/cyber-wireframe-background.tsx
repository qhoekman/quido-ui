import React, { useCallback } from "react";
import * as THREE from "three";

import { useCanvasBackground } from "@/features/effects/hooks/useCanvasBackground";
import { BackgroundEffectShell } from "@/features/effects/lib/background-effect-shell";
import { useBackgroundEffectRefs } from "@/features/effects/lib/background-effect-utils";
import {
  createBasicComposer,
  createGradientTexture,
} from "@/features/effects/lib/three-postprocessing";
import type { BackgroundEffectProps } from "@/features/effects/lib/types";

const GridShader = {
  uniforms: {
    uOffset: { value: 0.0 },
    uColor2: { value: new THREE.Color(0xbfd4e0) },
    uFogColor: { value: new THREE.Color(0x030410) },
  },
  vertexShader: `
    varying vec3 vWorldPos;
    void main() {
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPos = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: `
    uniform float uOffset;
    uniform vec3 uColor2;
    uniform vec3 uFogColor;
    varying vec3 vWorldPos;

    void main() {
      vec2 grid = vWorldPos.xz;
      grid.y += uOffset;

      vec2 wrapped = abs(fract(grid) - 0.5);
      vec2 lineWidth = fwidth(grid) * 1.5;
      vec2 lines = smoothstep(lineWidth, vec2(0.0), wrapped);
      float line = max(lines.x, lines.y);

      vec3 col = uColor2 * line;

      float dist = length(vWorldPos.xz);
      float fog = exp(-dist * 0.05);
      col = mix(uFogColor, col, fog);

      float alpha = line > 0.001 ? 1.0 : 0.0;
      gl_FragColor = vec4(col, alpha * fog);
    }
  `,
};

export const CyberWireframeBackground = React.forwardRef<
  HTMLCanvasElement,
  BackgroundEffectProps
>(({ fixed = false, style, className, ...props }, ref) => {
  const { containerRef, canvasRef, mergedCanvasRef } =
    useBackgroundEffectRefs(ref);

  const onMount = useCallback((canvas: HTMLCanvasElement, helpers) => {
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const bgTexture = createGradientTexture([
      { offset: 0, color: "#030410" },
      { offset: 0.5, color: "#050c20" },
      { offset: 1, color: "#061828" },
    ]);
    scene.background = bgTexture;

    const size = helpers.getSize();
    const camera = new THREE.PerspectiveCamera(60, size.aspect, 0.1, 200);
    camera.position.set(0, 2.5, 8);
    camera.lookAt(0, 0, -10);

    const gridGeo = new THREE.PlaneGeometry(200, 200);
    gridGeo.rotateX(-Math.PI / 2);
    const gridMat = new THREE.ShaderMaterial({
      uniforms: GridShader.uniforms,
      vertexShader: GridShader.vertexShader,
      fragmentShader: GridShader.fragmentShader,
      transparent: true,
      depthWrite: false,
    });
    const gridMesh = new THREE.Mesh(gridGeo, gridMat);
    scene.add(gridMesh);

    const composer = createBasicComposer(renderer, scene, camera);

    helpers.setResizeHandler((nextSize) => {
      renderer.setSize(nextSize.width, nextSize.height);
      composer.setSize(nextSize.width, nextSize.height);
      camera.aspect = nextSize.aspect;
      camera.updateProjectionMatrix();
    });

    helpers.setRenderHandler((timestamp) => {
      gridMat.uniforms.uOffset.value = timestamp * 0.001 * 1.5;
      composer.render();
    });

    return () => {
      composer.dispose();
      renderer.dispose();
      bgTexture.dispose();
      gridGeo.dispose();
      gridMat.dispose();
    };
  }, []);

  useCanvasBackground(containerRef, canvasRef, { capDpr: 2, onMount });

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
CyberWireframeBackground.displayName = "CyberWireframeBackground";
