import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Check } from "lucide-react";
import * as React from "react";
import styled from "styled-components";

const StyledRadioGroup = styled(RadioGroupPrimitive.Root)`
  display: grid;
  gap: var(--spacing-2);
`;

const StyledRadioGroupItem = styled(RadioGroupPrimitive.Item)`
  aspect-ratio: 1 / 1;
  height: var(--spacing-4);
  width: var(--spacing-4);
  border-radius: var(--border-radius-full);
  border: var(--border-width-default) solid var(--color-primary);
  color: var(--color-primary);
  box-shadow: var(--box-shadow-sm);

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 1px var(--color-ring);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const StyledRadioGroupItemIndicator = styled(RadioGroupPrimitive.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCheck = styled(Check)`
  height: var(--spacing-3-5);
  width: var(--spacing-3-5);
`;

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <StyledRadioGroup
      className={className}
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
      ref={ref}
      className={className}
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
    className={className}
    {...props}
  >
    {children ?? <StyledCheck />}
  </StyledRadioGroupItemIndicator>
));

export { RadioGroup, RadioGroupItem, RadioGroupItemIndicator };
