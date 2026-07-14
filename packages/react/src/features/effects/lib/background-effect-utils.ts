import React, { useCallback, useRef } from "react";

export function getCanvasStyle(
  fixed: boolean,
  style?: React.CSSProperties
): React.CSSProperties {
  return {
    position: fixed ? "fixed" : "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    ...style,
  };
}

export function useBackgroundEffectRefs(
  forwardedRef: React.ForwardedRef<HTMLCanvasElement>
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mergedCanvasRef = useCallback(
    (value: HTMLCanvasElement | null) => {
      canvasRef.current = value;
      if (typeof forwardedRef === "function") {
        forwardedRef(value);
      } else if (forwardedRef) {
        forwardedRef.current = value;
      }
    },
    [forwardedRef]
  );

  return { containerRef, canvasRef, mergedCanvasRef };
}
