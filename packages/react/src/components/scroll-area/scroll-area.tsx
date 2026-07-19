import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as React from "react";
import styled, { css } from "styled-components";

const scrollAreaStyles = css`
  position: relative;
  overflow: hidden;
`;

const StyledScrollAreaRoot = styled(ScrollAreaPrimitive.Root)`
  ${scrollAreaStyles}
`;

const scrollAreaViewportStyles = css`
  height: 100%;
  width: 100%;
  border-radius: inherit;
`;

const StyledScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport)`
  ${scrollAreaViewportStyles}
`;

const scrollAreaScrollbarStyles = css`
  display: flex;
  touch-action: none;
  user-select: none;
  padding: 1px;
  transition: colors 0.3s;

  &[data-orientation="vertical"] {
    height: 100%;
    width: var(--spacing-2-5);
    border-left: var(--border-width-default) solid transparent;
  }

  &[data-orientation="horizontal"] {
    height: var(--spacing-2-5);
    flex-direction: column;
    border-top: var(--border-width-default) solid transparent;
  }
`;

const StyledScrollAreaScrollbar = styled(
  ScrollAreaPrimitive.ScrollAreaScrollbar
)`
  ${scrollAreaScrollbarStyles}
`;

const scrollAreaThumbStyles = css`
  position: relative;
  flex: 1 1 0%;
  border-radius: var(--border-radius-full);
  background-color: var(--color-border);
`;

const StyledScrollAreaThumb = styled(ScrollAreaPrimitive.ScrollAreaThumb)`
  ${scrollAreaThumbStyles}
`;

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <StyledScrollAreaRoot
    data-testid="scroll-area"
    ref={ref}
    className={cx("q-scroll-area", className)}
    {...props}
  >
    <StyledScrollAreaViewport
      data-testid="scroll-area__viewport"
      className="q-scroll-area-viewport"
    >
      {children}
    </StyledScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </StyledScrollAreaRoot>
));
ScrollArea.displayName = "ScrollArea";

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <StyledScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cx(
      "q-scroll-area-scrollbar",
      `q-scroll-area-scrollbar--${orientation}`,
      className
    )}
    {...props}
  >
    <StyledScrollAreaThumb className="q-scroll-area-thumb" />
  </StyledScrollAreaScrollbar>
));
ScrollBar.displayName = "ScrollBar";

export { ScrollArea, ScrollBar };
