import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as React from "react";
import styled from "styled-components";

const StyledScrollAreaRoot = styled(ScrollAreaPrimitive.Root)`
  position: relative;
  overflow: hidden;
`;

const StyledScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport)`
  height: 100%;
  width: 100%;
  border-radius: inherit;
`;

const StyledScrollAreaScrollbar = styled(ScrollAreaPrimitive.ScrollAreaScrollbar)<{
  $orientation?: "vertical" | "horizontal";
}>`
  display: flex;
  touch-action: none;
  user-select: none;
  transition: colors 0.3s;

  ${(props) =>
    props.$orientation === "vertical" &&
    `
    height: 100%;
    width: var(--spacing-2-5);
    border-left: var(--border-width-default) solid transparent;
    padding: 1px;
  `}

  ${(props) =>
    props.$orientation === "horizontal" &&
    `
    height: var(--spacing-2-5);
    flex-direction: column;
    border-top: var(--border-width-default) solid transparent;
    padding: 1px;
  `}
`;

const StyledScrollAreaThumb = styled(ScrollAreaPrimitive.ScrollAreaThumb)`
  position: relative;
  flex: 1 1 0%;
  border-radius: var(--border-radius-full);
  background-color: var(--color-border);
`;

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <StyledScrollAreaRoot ref={ref} className={className} {...props}>
    <StyledScrollAreaViewport>{children}</StyledScrollAreaViewport>
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
    $orientation={orientation}
    className={className}
    {...props}
  >
    <StyledScrollAreaThumb />
  </StyledScrollAreaScrollbar>
));
ScrollBar.displayName = "ScrollBar";

export { ScrollArea, ScrollBar };
