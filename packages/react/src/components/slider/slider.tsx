import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";
import styled, { css } from "styled-components";

export interface SliderProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    "value" | "onValueChange" | "defaultValue"
  > {
  value?: number;
  onValueChange?: (value: number) => void;
  defaultValue?: number;
}

const sliderStyles = css`
  position: relative;
  display: flex;
  width: 100%;
  touch-action: none;
  user-select: none;
  align-items: center;
`;

const StyledSliderRoot = styled(SliderPrimitive.Root)`
  ${sliderStyles}
`;

const sliderTrackStyles = css`
  position: relative;
  height: var(--spacing-1-5);
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  border-radius: var(--border-radius-full);
  background-color: var(--color-muted);
`;

const StyledSliderTrack = styled(SliderPrimitive.Track)`
  ${sliderTrackStyles}
`;

const sliderRangeStyles = css`
  position: absolute;
  height: 100%;
  background-color: var(--color-primary);
`;

const StyledSliderRange = styled(SliderPrimitive.Range)`
  ${sliderRangeStyles}
`;

const sliderThumbStyles = css`
  display: block;
  height: var(--spacing-4);
  width: var(--spacing-4);
  border-radius: var(--border-radius-full);
  border: var(--border-width-default) solid var(--color-primary);
  background-color: var(--color-background);
  box-shadow: var(--box-shadow-sm);
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

const StyledSliderThumb = styled(SliderPrimitive.Thumb)`
  ${sliderThumbStyles}
`;

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, value, onValueChange, defaultValue, ...props }, ref) => {
  const handleValueChange = React.useCallback(
    (values: number[]) => {
      onValueChange?.(values[0]);
    },
    [onValueChange]
  );

  const sliderValue = value !== undefined ? [value] : undefined;
  const sliderDefaultValue =
    defaultValue !== undefined ? [defaultValue] : undefined;

  return (
    <StyledSliderRoot
      data-testid="slider"
      ref={ref}
      className={cx("q-slider", className)}
      value={sliderValue}
      onValueChange={handleValueChange}
      defaultValue={sliderDefaultValue}
      {...props}
    >
      <StyledSliderTrack data-testid="slider__track" className="q-slider-track">
        <StyledSliderRange data-testid="slider__range" className="q-slider-range" />
      </StyledSliderTrack>
      <StyledSliderThumb data-testid="slider__thumb" className="q-slider-thumb" />
    </StyledSliderRoot>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
