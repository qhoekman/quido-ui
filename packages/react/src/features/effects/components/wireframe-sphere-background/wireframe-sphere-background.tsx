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

export const WireframeSphereBackground = React.forwardRef<
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
    scene.fog = new THREE.Fog(0x030410, 2, 10);

    const size = helpers.getSize();
    const camera = new THREE.PerspectiveCamera(40, size.aspect, 0.1, 50);
    camera.position.set(0, 0.3, 4.5);
    camera.lookAt(0, 0, 0);

    const icoGeo = new THREE.IcosahedronGeometry(4, 3);

    const group = new THREE.Group();
    group.position.x = -3;
    scene.add(group);

    const wireGeo = new THREE.WireframeGeometry(icoGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0xbfd4e0,
      transparent: true,
      opacity: 0.55,
      fog: true,
    });
    const wire = new THREE.LineSegments(wireGeo, wireMat);
    group.add(wire);

    const pointsMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.08,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.95,
      fog: true,
    });
    const points = new THREE.Points(icoGeo, pointsMat);
    group.add(points);

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
      group.rotation.y = t * 0.08;
      group.rotation.x = Math.sin(t * 0.15) * 0.12;
      composer.render();
    });

    return () => {
      composer.dispose();
      renderer.dispose();
      bgTexture.dispose();
      icoGeo.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      pointsMat.dispose();
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
WireframeSphereBackground.displayName = "WireframeSphereBackground";
