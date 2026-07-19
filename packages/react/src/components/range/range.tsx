import * as RangePrimitive from "@radix-ui/react-slider";
import React from "react";
import styled, { css } from "styled-components";

const rangeStyles = css`
  position: relative;
  display: flex;
  width: 100%;
  touch-action: none;
  user-select: none;
  align-items: center;
`;

const StyledRoot = styled(RangePrimitive.Root)`
  ${rangeStyles}
`;

const rangeTrackStyles = css`
  position: relative;
  height: var(--spacing-1-5);
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  border-radius: var(--border-radius-full);
  background-color: var(--color-muted);
`;

const StyledTrack = styled(RangePrimitive.Track)`
  ${rangeTrackStyles}
`;

const rangeRangeStyles = css`
  position: absolute;
  height: 100%;
  background-color: var(--color-primary);
`;

const StyledRange = styled(RangePrimitive.Range)`
  ${rangeRangeStyles}
`;

const rangeThumbStyles = css`
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

const StyledThumb = styled(RangePrimitive.Thumb)`
  ${rangeThumbStyles}
`;

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

export type RangeProps = React.ComponentPropsWithoutRef<
  typeof RangePrimitive.Root
>;

export const Range = React.forwardRef<
  React.ElementRef<typeof RangePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RangePrimitive.Root>
>(({ className, ...props }, ref) => (
  <StyledRoot
    data-testid="range"
    ref={ref}
    className={cx("q-range", className)}
    {...props}
  >
    <StyledTrack data-testid="range__track" className="q-range-track">
      <StyledRange data-testid="range__range" className="q-range-range" />
    </StyledTrack>
    <StyledThumb data-testid="range__thumb-0" className="q-range-thumb" />
    <StyledThumb data-testid="range__thumb-1" className="q-range-thumb" />
  </StyledRoot>
));
Range.displayName = "Range";
