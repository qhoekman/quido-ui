import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React from "react";
import styled from "styled-components";
import { Label } from "../label/label";

const StyledCheckboxRoot = styled(CheckboxPrimitive.Root)`
  height: var(--spacing-4);
  width: var(--spacing-4);
  flex-shrink: 0;
  border-radius: var(--border-radius-sm);
  border: var(--border-width-default) solid var(--color-primary);
  outline: none;
  box-shadow: 0 0 0 0 var(--color-background);

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &[data-state="checked"] {
    background-color: var(--color-primary);
    color: var(--color-primary-fg);
  }
`;

const StyledCheckboxIndicator = styled(CheckboxPrimitive.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
`;

const CheckboxLabel = styled(Label)`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-none);

  /* Peer disabled styles */
  [data-disabled] &,
  .peer:disabled ~ &,
  .peer[data-disabled="true"] ~ & {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const StyledCheckIcon = styled(Check)`
  height: var(--spacing-4);
  width: var(--spacing-4);
`;

export type CheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
>;

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <StyledCheckboxRoot ref={ref} className={className} {...props}>
    <StyledCheckboxIndicator>
      <StyledCheckIcon />
    </StyledCheckboxIndicator>
  </StyledCheckboxRoot>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, CheckboxLabel };
