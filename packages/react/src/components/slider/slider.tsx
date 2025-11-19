import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";
import styled from "styled-components";

export interface SliderProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    "value" | "onValueChange" | "defaultValue"
  > {
  value?: number;
  onValueChange?: (value: number) => void;
  defaultValue?: number;
}

const StyledSliderRoot = styled(SliderPrimitive.Root)`
  position: relative;
  display: flex;
  width: 100%;
  touch-action: none;
  user-select: none;
  align-items: center;
`;

const StyledSliderTrack = styled(SliderPrimitive.Track)`
  position: relative;
  height: var(--spacing-1-5);
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  border-radius: var(--border-radius-full);
  background-color: var(--color-muted);
`;

const StyledSliderRange = styled(SliderPrimitive.Range)`
  position: absolute;
  height: 100%;
  background-color: var(--color-primary);
`;

const StyledSliderThumb = styled(SliderPrimitive.Thumb)`
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
      ref={ref}
      className={className}
      value={sliderValue}
      onValueChange={handleValueChange}
      defaultValue={sliderDefaultValue}
      {...props}
    >
      <StyledSliderTrack>
        <StyledSliderRange />
      </StyledSliderTrack>
      <StyledSliderThumb />
    </StyledSliderRoot>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
