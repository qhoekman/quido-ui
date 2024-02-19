import { useEffect, useRef, useState } from "react";

export function useReelButton() {
  const containerRef = useRef<HTMLButtonElement>(null);
  const [canNext, setCanNext] = useState(false);
  const [canPrev, setCanPrev] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const { current } = containerRef;
      const container = findItems(current.parentElement);
      if (!container) {
        return;
      }

      const handleScroll = () => {
        if (container.scrollLeft === 0) {
          setCanPrev(true);
        } else {
          setCanPrev(false);
        }

        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth
        ) {
          setCanNext(true);
        } else {
          setCanNext(false);
        }
      };

      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [containerRef]);

  const findItems = (element: HTMLElement | null): HTMLElement | null => {
    if (element) {
      const child = element.querySelector("[data-reel-items]");
      if (child) {
        return child as HTMLElement;
      }
    }
    return null;
  };

  const moveReel = (direction: "prev" | "next") => {
    if (containerRef.current) {
      const { current } = containerRef;
      const container = findItems(current.parentElement);
      if (!container) {
        return;
      }

      const scrollAmount =
        direction === "prev" ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return {
    containerRef,
    canNext,
    canPrev,
    moveReel,
  };
}
