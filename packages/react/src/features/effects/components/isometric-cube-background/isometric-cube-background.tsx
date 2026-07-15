import React, { useCallback } from "react";
import * as THREE from "three";
import { BokehPass } from "three/examples/jsm/postprocessing/BokehPass.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

import { useCanvasBackground } from "@/features/effects/hooks/useCanvasBackground";
import { BackgroundEffectShell } from "@/features/effects/lib/background-effect-shell";
import { useBackgroundEffectRefs } from "@/features/effects/lib/background-effect-utils";
import type { BackgroundEffectProps } from "@/features/effects/lib/types";

const VignetteShader = {
  uniforms: {
    tDiffuse: { value: null },
    offset: { value: 0.8 },
    darkness: { value: 1.2 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float offset;
    uniform float darkness;
    varying vec2 vUv;
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 uv = (vUv - 0.5) * 2.0;
      float vig = 1.0 - dot(uv, uv) * darkness;
      vig = clamp(vig, 0.0, 1.0);
      vig = mix(1.0 - offset, 1.0, vig);
      gl_FragColor = vec4(texel.rgb * vig, texel.a);
    }
  `,
};

export const IsometricCubeBackground = React.forwardRef<
  HTMLCanvasElement,
  BackgroundEffectProps
>(({ fixed = false, style, className, ...props }, ref) => {
  const { containerRef, canvasRef, mergedCanvasRef } =
    useBackgroundEffectRefs(ref);

  const onMount = useCallback((canvas: HTMLCanvasElement, helpers) => {
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a1628);
    scene.fog = new THREE.Fog(0x0a1628, 6, 20);

    const size = helpers.getSize();
    const camera = new THREE.PerspectiveCamera(30, size.aspect, 0.1, 100);
    camera.position.set(3, 3.5, 5.5);
    camera.lookAt(0, -0.1, 0);

    const geometry = new THREE.BoxGeometry(1.4, 1.4, 1.4);
    const material = new THREE.MeshStandardMaterial({
      color: 0xf0f0f0,
      roughness: 0.7,
      metalness: 0.0,
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.position.y = 0.15;
    scene.add(cube);

    const floorGeo = new THREE.PlaneGeometry(60, 60);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x0c1a30,
      roughness: 0.9,
      metalness: 0.0,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.7;
    floor.receiveShadow = true;
    scene.add(floor);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(-3, 12, 2);
    keyLight.target.position.set(0, 0, 0);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(4096, 4096);
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 25;
    keyLight.shadow.camera.left = -4;
    keyLight.shadow.camera.right = 4;
    keyLight.shadow.camera.top = 4;
    keyLight.shadow.camera.bottom = -4;
    keyLight.shadow.bias = 0;
    keyLight.shadow.normalBias = 0.04;
    keyLight.shadow.radius = 8;
    scene.add(keyLight);
    scene.add(keyLight.target);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
    fillLight.position.set(5, 4, 6);
    scene.add(fillLight);

    scene.add(new THREE.AmbientLight(0x1a2a4a, 0.6));
    scene.add(new THREE.HemisphereLight(0x3a5a7a, 0x0a1420, 0.4));

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bokehPass = new BokehPass(scene, camera, {
      focus: camera.position.length(),
      aperture: 0.0015,
      maxblur: 0.008,
    });
    composer.addPass(bokehPass);
    composer.addPass(new ShaderPass(VignetteShader));
    composer.addPass(new OutputPass());

    helpers.setResizeHandler((nextSize) => {
      renderer.setSize(nextSize.width, nextSize.height);
      composer.setSize(nextSize.width, nextSize.height);
      camera.aspect = nextSize.aspect;
      camera.updateProjectionMatrix();
      composer.render();
    });

    helpers.setRenderHandler(() => {
      composer.render();
    });

    return () => {
      composer.dispose();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      floorGeo.dispose();
      floorMat.dispose();
    };
  }, []);

  useCanvasBackground(containerRef, canvasRef, {
    capDpr: 2,
    animate: false,
    onMount,
  });

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
IsometricCubeBackground.displayName = "IsometricCubeBackground";
