import useEmblaCarousel, {
  type EmblaCarouselType as CarouselApi,
  type EmblaOptionsType as CarouselOptions,
  type EmblaPluginType as CarouselPlugin,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import * as React from "react";
import styled from "styled-components";

import { Button } from "@/components/button/button";

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin[];
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const StyledCarousel = styled.div`
  position: relative;
`;

const StyledCarouselContentWrapper = styled.div`
  overflow: hidden;
`;

const StyledCarouselContent = styled.div<{ $orientation: "horizontal" | "vertical" }>`
  display: flex;
  ${(props) =>
    props.$orientation === "horizontal"
      ? `
    margin-left: calc(var(--spacing-4) * -1);
  `
      : `
    margin-top: calc(var(--spacing-4) * -1);
    flex-direction: column;
  `}
`;

const StyledCarouselItem = styled.div<{ $orientation: "horizontal" | "vertical" }>`
  min-width: 0;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 100%;
  ${(props) =>
    props.$orientation === "horizontal"
      ? `
    padding-left: var(--spacing-4);
  `
      : `
    padding-top: var(--spacing-4);
  `}
`;

const StyledCarouselButton = styled(Button)<{
  $orientation: "horizontal" | "vertical";
  $direction: "prev" | "next";
}>`
  position: absolute;
  height: var(--spacing-8);
  width: var(--spacing-8);
  border-radius: var(--border-radius-full);

  ${(props) => {
    if (props.$orientation === "horizontal") {
      return props.$direction === "prev"
        ? `
          left: calc(var(--spacing-12) * -1);
          top: 50%;
          transform: translateY(-50%);
        `
        : `
          right: calc(var(--spacing-12) * -1);
          top: 50%;
          transform: translateY(-50%);
        `;
    } else {
      return props.$direction === "prev"
        ? `
          top: calc(var(--spacing-12) * -1);
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        `
        : `
          bottom: calc(var(--spacing-12) * -1);
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        `;
    }
  }}
`;

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    const currentOrientation =
      orientation || (opts?.axis === "y" ? "vertical" : "horizontal");

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: currentOrientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <StyledCarousel
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={className}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </StyledCarousel>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <StyledCarouselContentWrapper ref={carouselRef}>
      <StyledCarouselContent
        ref={ref}
        $orientation={orientation}
        className={className}
        {...props}
      />
    </StyledCarouselContentWrapper>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <StyledCarouselItem
      ref={ref}
      role="group"
      aria-roledescription="slide"
      $orientation={orientation}
      className={className}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <StyledCarouselButton
      ref={ref}
      variant={variant}
      size={size}
      $orientation={orientation}
      $direction="prev"
      className={className}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </StyledCarouselButton>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <StyledCarouselButton
      ref={ref}
      variant={variant}
      size={size}
      $orientation={orientation}
      $direction="next"
      className={className}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </StyledCarouselButton>
  );
});
CarouselNext.displayName = "CarouselNext";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
};
