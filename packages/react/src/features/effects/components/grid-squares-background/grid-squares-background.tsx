import React, { useCallback } from "react";
import * as THREE from "three";

import { useCanvasBackground } from "@/features/effects/hooks/useCanvasBackground";
import { BackgroundEffectShell } from "@/features/effects/lib/background-effect-shell";
import { useBackgroundEffectRefs } from "@/features/effects/lib/background-effect-utils";
import {
  VignetteShaderRadial,
  createBasicComposer,
  createGradientTexture,
} from "@/features/effects/lib/three-postprocessing";
import type { BackgroundEffectProps } from "@/features/effects/lib/types";

const SquareGridShader = {
  vertexShader: `
    varying vec3 vWorldPos;
    void main() {
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPos = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: `
    uniform vec2 uOffset;
    uniform float uCellSize;
    uniform float uOpacity;
    uniform vec3 uColor;
    varying vec3 vWorldPos;

    void main() {
      vec2 grid = vWorldPos.xy / uCellSize + uOffset;
      vec2 wrapped = abs(fract(grid) - 0.5);
      vec2 lineWidth = fwidth(grid) * 1.2;
      vec2 lines = smoothstep(lineWidth, vec2(0.0), wrapped);
      float line = max(lines.x, lines.y);
      if (line < 0.001) discard;
      gl_FragColor = vec4(uColor * line, line * uOpacity);
    }
  `,
};

const CELL_SIZE = 1;
const DRIFT_X = 0.04;
const DRIFT_Y = 0.025;

const LAYERS = [
  { z: 0, opacity: 0.75 },
  { z: -0.3, opacity: 0.45 },
];

export const GridSquaresBackground = React.forwardRef<
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
      { offset: 0.5, color: "#060814" },
      { offset: 1, color: "#0a0e1c" },
    ]);
    scene.background = bgTexture;

    const size = helpers.getSize();
    const camera = new THREE.PerspectiveCamera(50, size.aspect, 0.1, 100);
    camera.position.set(0, 0, 12);
    camera.lookAt(0, 0, 0);

    const geos: THREE.PlaneGeometry[] = [];
    const mats: THREE.ShaderMaterial[] = [];

    for (const layer of LAYERS) {
      const geo = new THREE.PlaneGeometry(60, 60);
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          uOffset: { value: new THREE.Vector2(0, 0) },
          uCellSize: { value: CELL_SIZE },
          uOpacity: { value: layer.opacity },
          uColor: { value: new THREE.Color(0xffffff) },
        },
        vertexShader: SquareGridShader.vertexShader,
        fragmentShader: SquareGridShader.fragmentShader,
        transparent: true,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.z = layer.z;
      scene.add(mesh);
      geos.push(geo);
      mats.push(mat);
    }

    const composer = createBasicComposer(
      renderer,
      scene,
      camera,
      VignetteShaderRadial
    );

    helpers.setResizeHandler((nextSize) => {
      renderer.setSize(nextSize.width, nextSize.height);
      composer.setSize(nextSize.width, nextSize.height);
      camera.aspect = nextSize.aspect;
      camera.updateProjectionMatrix();
    });

    helpers.setRenderHandler((timestamp) => {
      const t = timestamp * 0.001;
      const driftX = t * DRIFT_X;
      const driftY = t * DRIFT_Y;
      for (const mat of mats) {
        (mat.uniforms.uOffset.value as THREE.Vector2).set(driftX, driftY);
      }
      composer.render();
    });

    return () => {
      composer.dispose();
      renderer.dispose();
      bgTexture.dispose();
      geos.forEach((geo) => geo.dispose());
      mats.forEach((mat) => mat.dispose());
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
GridSquaresBackground.displayName = "GridSquaresBackground";
