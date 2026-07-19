import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Check } from "lucide-react";
import * as React from "react";
import styled, { css } from "styled-components";
import { cva, type VariantProps } from "class-variance-authority";

const radioGroupVariants = cva("q-radio-group", {
  variants: {
    orientation: {
      horizontal: "orientation--horizontal",
      vertical: "orientation--vertical",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

const radioGroupStyles = css`
  display: grid;
  gap: var(--spacing-2);

  &.orientation--horizontal {
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  }

  &.orientation--vertical {
    grid-template-columns: 1fr;
  }
`;

const StyledRadioGroup = styled(RadioGroupPrimitive.Root)`
  ${radioGroupStyles}
`;

const radioGroupItemStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  height: var(--spacing-4);
  width: var(--spacing-4);
  padding: 0;
  border-radius: var(--border-radius-full);
  border: var(--border-width-default) solid var(--color-primary);
  background-color: transparent;
  color: var(--color-primary);
  box-shadow: var(--box-shadow-sm);
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 1px var(--color-ring);
  }

  &[data-state="checked"] {
    background-color: var(--color-primary);
    color: var(--color-primary-fg);
  }

  &:disabled,
  &[data-disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const StyledRadioGroupItem = styled(RadioGroupPrimitive.Item)`
  ${radioGroupItemStyles}
`;

const radioGroupItemIndicatorStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
`;

const StyledRadioGroupItemIndicator = styled(RadioGroupPrimitive.Indicator)`
  ${radioGroupItemIndicatorStyles}
`;

const StyledCheck = styled(Check)`
  height: var(--spacing-3-5);
  width: var(--spacing-3-5);
`;

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

export type RadioGroupProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
> &
  VariantProps<typeof radioGroupVariants>;

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, orientation, ...props }, ref) => {
  return (
    <StyledRadioGroup
      data-testid="radio-group"
      className={radioGroupVariants({ orientation, className })}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <StyledRadioGroupItem
      data-testid={props.value ? `radio-group__item-${props.value}` : undefined}
      ref={ref}
      className={cx("q-radio-group-item", className)}
      {...props}
    >
      {children ?? <RadioGroupItemIndicator />}
    </StyledRadioGroupItem>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

const RadioGroupItemIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator>
>(({ className, children, ...props }, ref) => (
  <StyledRadioGroupItemIndicator
    ref={ref}
    className={cx("q-radio-group-item-indicator", className)}
    {...props}
  >
    {children ?? <StyledCheck />}
  </StyledRadioGroupItemIndicator>
));

export { RadioGroup, RadioGroupItem, RadioGroupItemIndicator };
