import useEmblaCarousel, {
  type EmblaCarouselType as CarouselApi,
  type EmblaOptionsType as CarouselOptions,
  type EmblaPluginType as CarouselPlugin,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import * as React from "react";
import styled, { css } from "styled-components";

import { Button } from "@/components/button/button";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

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

const carouselStyles = css`
  position: relative;
`;

const StyledCarousel = styled.div`
  ${carouselStyles}
`;

const carouselContentWrapperStyles = css`
  overflow: hidden;
`;

const StyledCarouselContentWrapper = styled.div`
  ${carouselContentWrapperStyles}
`;

const carouselContentStyles = css`
  display: flex;

  &[data-orientation="horizontal"] {
    margin-left: calc(var(--spacing-4) * -1);
  }

  &[data-orientation="vertical"] {
    margin-top: calc(var(--spacing-4) * -1);
    flex-direction: column;
  }
`;

const StyledCarouselContent = styled.div`
  ${carouselContentStyles}
`;

const carouselItemStyles = css`
  min-width: 0;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 100%;

  &[data-orientation="horizontal"] {
    padding-left: var(--spacing-4);
  }

  &[data-orientation="vertical"] {
    padding-top: var(--spacing-4);
  }
`;

const StyledCarouselItem = styled.div`
  ${carouselItemStyles}
`;

const carouselButtonStyles = css`
  position: absolute;
  height: var(--spacing-8);
  width: var(--spacing-8);
  border-radius: var(--border-radius-full);

  svg {
    width: var(--spacing-4);
    height: var(--spacing-4);
  }

  &[data-orientation="horizontal"][data-direction="prev"] {
    left: calc(var(--spacing-12) * -1);
    top: 50%;
    transform: translateY(-50%);
  }

  &[data-orientation="horizontal"][data-direction="next"] {
    right: calc(var(--spacing-12) * -1);
    top: 50%;
    transform: translateY(-50%);
  }

  &[data-orientation="vertical"][data-direction="prev"] {
    top: calc(var(--spacing-12) * -1);
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
  }

  &[data-orientation="vertical"][data-direction="next"] {
    bottom: calc(var(--spacing-12) * -1);
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
  }
`;

const StyledCarouselButton = styled(Button)`
  ${carouselButtonStyles}
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
          className={cx("q-carousel", className)}
          data-orientation={currentOrientation}
          data-testid="carousel"
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
    <StyledCarouselContentWrapper
      ref={carouselRef}
      className="q-carousel-content-wrapper"
    >
      <StyledCarouselContent
        ref={ref}
        data-orientation={orientation}
        data-testid="carousel__content"
        className={cx("q-carousel-content", className)}
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
      data-orientation={orientation}
      data-testid="carousel__item"
      className={cx("q-carousel-item", className)}
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
      data-orientation={orientation}
      data-direction="prev"
      data-testid="carousel__prev"
      className={cx("q-carousel-button", className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
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
      data-orientation={orientation}
      data-direction="next"
      data-testid="carousel__next"
      className={cx("q-carousel-button", className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
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
