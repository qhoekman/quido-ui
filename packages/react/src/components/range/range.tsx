import * as RangePrimitive from "@radix-ui/react-slider";
import React from "react";
import styled from "styled-components";

const StyledRoot = styled(RangePrimitive.Root)`
  position: relative;
  display: flex;
  width: 100%;
  touch-action: none;
  user-select: none;
  align-items: center;
`;

const StyledTrack = styled(RangePrimitive.Track)`
  position: relative;
  height: var(--spacing-1-5);
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  border-radius: var(--border-radius-full);
  background-color: var(--color-muted);
`;

const StyledRange = styled(RangePrimitive.Range)`
  position: absolute;
  height: 100%;
  background-color: var(--color-primary);
`;

const StyledThumb = styled(RangePrimitive.Thumb)`
  display: block;
  height: var(--spacing-4);
  width: var(--spacing-4);
  border-radius: var(--border-radius-full);
  border: var(--border-width-default) solid var(--color-primary);
  background-color: var(--color-background);
  box-shadow: var(--box-shadow-default);
  transition: colors 0.3s;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 1px var(--color-ring);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export type RangeProps = React.ComponentPropsWithoutRef<
  typeof RangePrimitive.Root
>;

export const Range = React.forwardRef<
  React.ElementRef<typeof RangePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RangePrimitive.Root>
>(({ className, ...props }, ref) => (
  <StyledRoot ref={ref} className={className} {...props}>
    <StyledTrack>
      <StyledRange />
    </StyledTrack>
    <StyledThumb />
    <StyledThumb />
  </StyledRoot>
));
Range.displayName = "Range";
