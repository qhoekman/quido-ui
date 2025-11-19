import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";
import styled from "styled-components";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const StyledPopoverContent = styled(PopoverPrimitive.Content)`
  color: var(--color-popover-fg);
  z-index: var(--z-index-50);
  width: var(--columns-xs);
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-popover);
  padding: var(--spacing-4);
  box-shadow: var(--box-shadow-md);
  outline: none;

  &[data-state="open"][data-side="bottom"] {
    animation: fadeInZoomInSlideFromTop 0.15s ease-out;
  }

  &[data-state="open"][data-side="left"] {
    animation: fadeInZoomInSlideFromRight 0.15s ease-out;
  }

  &[data-state="open"][data-side="right"] {
    animation: fadeInZoomInSlideFromLeft 0.15s ease-out;
  }

  &[data-state="open"][data-side="top"] {
    animation: fadeInZoomInSlideFromBottom 0.15s ease-out;
  }

  &[data-state="closed"][data-side="bottom"] {
    animation: fadeOutZoomOutSlideToTop 0.15s ease-in;
  }

  &[data-state="closed"][data-side="left"] {
    animation: fadeOutZoomOutSlideToRight 0.15s ease-in;
  }

  &[data-state="closed"][data-side="right"] {
    animation: fadeOutZoomOutSlideToLeft 0.15s ease-in;
  }

  &[data-state="closed"][data-side="top"] {
    animation: fadeOutZoomOutSlideToBottom 0.15s ease-in;
  }

  @keyframes fadeInZoomInSlideFromTop {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(calc(-1 * var(--spacing-2)));
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes fadeInZoomInSlideFromRight {
    from {
      opacity: 0;
      transform: scale(0.95) translateX(var(--spacing-2));
    }
    to {
      opacity: 1;
      transform: scale(1) translateX(0);
    }
  }

  @keyframes fadeInZoomInSlideFromLeft {
    from {
      opacity: 0;
      transform: scale(0.95) translateX(calc(-1 * var(--spacing-2)));
    }
    to {
      opacity: 1;
      transform: scale(1) translateX(0);
    }
  }

  @keyframes fadeInZoomInSlideFromBottom {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(var(--spacing-2));
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes fadeOutZoomOutSlideToTop {
    from {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    to {
      opacity: 0;
      transform: scale(0.95) translateY(calc(-1 * var(--spacing-2)));
    }
  }

  @keyframes fadeOutZoomOutSlideToRight {
    from {
      opacity: 1;
      transform: scale(1) translateX(0);
    }
    to {
      opacity: 0;
      transform: scale(0.95) translateX(var(--spacing-2));
    }
  }

  @keyframes fadeOutZoomOutSlideToLeft {
    from {
      opacity: 1;
      transform: scale(1) translateX(0);
    }
    to {
      opacity: 0;
      transform: scale(0.95) translateX(calc(-1 * var(--spacing-2)));
    }
  }

  @keyframes fadeOutZoomOutSlideToBottom {
    from {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    to {
      opacity: 0;
      transform: scale(0.95) translateY(var(--spacing-2));
    }
  }
`;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <StyledPopoverContent
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={className}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverContent, PopoverTrigger };
