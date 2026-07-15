import React from "react";

import { getCanvasStyle } from "./background-effect-utils";
import type { BackgroundEffectProps } from "./types";

export function BackgroundEffectShell({
  fixed = false,
  style,
  className,
  containerRef,
  mergedCanvasRef,
  ...canvasProps
}: BackgroundEffectProps & {
  containerRef: React.RefObject<HTMLDivElement>;
  mergedCanvasRef: React.RefCallback<HTMLCanvasElement>;
}) {
  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={mergedCanvasRef}
        className={className}
        style={getCanvasStyle(fixed, style)}
        {...canvasProps}
      />
    </div>
  );
}
