import { useEffect, type RefObject } from "react";

export interface CanvasSize {
  width: number;
  height: number;
  pixelWidth: number;
  pixelHeight: number;
  dpr: number;
  aspect: number;
}

export interface CanvasBackgroundHelpers {
  getSize: () => CanvasSize;
  setResizeHandler: (handler: (size: CanvasSize) => void) => void;
  setRenderHandler: (handler: (timestamp: number) => void) => void;
}

export interface UseCanvasBackgroundOptions {
  capDpr?: number;
  animate?: boolean;
  onMount: (
    canvas: HTMLCanvasElement,
    helpers: CanvasBackgroundHelpers
  ) => (() => void) | void;
}

function getCanvasSize(container: HTMLElement, capDpr?: number): CanvasSize {
  const width = container.clientWidth;
  const height = container.clientHeight;
  const dpr = capDpr
    ? Math.min(window.devicePixelRatio || 1, capDpr)
    : window.devicePixelRatio || 1;

  return {
    width,
    height,
    pixelWidth: Math.max(1, Math.floor(width * dpr)),
    pixelHeight: Math.max(1, Math.floor(height * dpr)),
    dpr,
    aspect: width / Math.max(height, 1),
  };
}

export function useCanvasBackground(
  containerRef: RefObject<HTMLElement | null>,
  canvasRef: RefObject<HTMLCanvasElement | null>,
  options: UseCanvasBackgroundOptions
) {
  const { capDpr, animate = true, onMount } = options;

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let resizeHandler: ((size: CanvasSize) => void) | null = null;
    let renderHandler: ((timestamp: number) => void) | null = null;
    let animId = 0;

    const helpers: CanvasBackgroundHelpers = {
      getSize: () => getCanvasSize(container, capDpr),
      setResizeHandler: (handler) => {
        resizeHandler = handler;
      },
      setRenderHandler: (handler) => {
        renderHandler = handler;
      },
    };

    const handleResize = () => {
      const size = getCanvasSize(container, capDpr);
      canvas.style.width = `${size.width}px`;
      canvas.style.height = `${size.height}px`;
      resizeHandler?.(size);
    };

    const cleanupMount = onMount(canvas, helpers);

    handleResize();

    const observer = new ResizeObserver(handleResize);
    observer.observe(container);

    if (animate) {
      const loop = (timestamp: number) => {
        renderHandler?.(timestamp);
        animId = requestAnimationFrame(loop);
      };
      animId = requestAnimationFrame(loop);
    } else {
      renderHandler?.(0);
    }

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      cleanupMount?.();
    };
    // onMount is intentionally stable via useCallback in each component
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, canvasRef, capDpr, animate]);
}
