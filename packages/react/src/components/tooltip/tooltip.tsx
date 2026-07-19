import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";
import styled, { css, keyframes } from "styled-components";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipArrow = TooltipPrimitive.Arrow;

const fadeInZoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOutZoomOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
`;

const slideInFromTop = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translateY(calc(-1 * var(--spacing-2)));
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translateX(var(--spacing-2));
  }
  to {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translateX(calc(-1 * var(--spacing-2)));
  }
  to {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
`;

const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translateY(var(--spacing-2));
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const tooltipContentStyles = css`
  z-index: var(--z-index-50);
  overflow: hidden;
  border-radius: var(--border-radius-md);
  background-color: var(--color-tooltip);
  color: var(--color-tooltip-fg);
  padding: var(--spacing-1-5) var(--spacing-3);
  font-size: var(--font-size-xs);
  box-shadow: var(--box-shadow-default);
  animation: ${fadeInZoomIn} 0.15s ease-out;

  &[data-state="closed"] {
    animation: ${fadeOutZoomOut} 0.15s ease-out;
  }

  &[data-side="bottom"] {
    animation: ${slideInFromTop} 0.15s ease-out;
  }

  &[data-side="left"] {
    animation: ${slideInFromRight} 0.15s ease-out;
  }

  &[data-side="right"] {
    animation: ${slideInFromLeft} 0.15s ease-out;
  }

  &[data-side="top"] {
    animation: ${slideInFromBottom} 0.15s ease-out;
  }

  &[data-state="closed"][data-side="bottom"],
  &[data-state="closed"][data-side="left"],
  &[data-state="closed"][data-side="right"],
  &[data-state="closed"][data-side="top"] {
    animation: ${fadeOutZoomOut} 0.15s ease-out;
  }
`;

const StyledTooltipContent = styled(TooltipPrimitive.Content)`
  ${tooltipContentStyles}
`;

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <StyledTooltipContent
      data-testid="tooltip__content"
      ref={ref}
      sideOffset={sideOffset}
      className={cx("q-tooltip-content", className)}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
};
