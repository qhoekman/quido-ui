import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React from "react";
import styled, { css } from "styled-components";
import { Label } from "../label/label";

const checkboxStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--spacing-4);
  width: var(--spacing-4);
  flex-shrink: 0;
  padding: 0;
  border-radius: var(--border-radius-sm);
  border: var(--border-width-default) solid var(--color-primary);
  background-color: transparent;
  outline: none;
  box-shadow: 0 0 0 0 var(--color-background);
  cursor: pointer;
  transition: background-color 0.2s;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }

  &:disabled,
  &[data-disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &[data-state="checked"] {
    background-color: var(--color-primary);
    color: var(--color-primary-fg);
  }
`;

const StyledCheckboxRoot = styled(CheckboxPrimitive.Root)`
  ${checkboxStyles}
`;

const checkboxIndicatorStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
`;

const StyledCheckboxIndicator = styled(CheckboxPrimitive.Indicator)`
  ${checkboxIndicatorStyles}
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

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

export type CheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
>;

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <StyledCheckboxRoot
    data-testid="checkbox"
    ref={ref}
    className={cx("q-checkbox", className)}
    {...props}
  >
    <StyledCheckboxIndicator
      data-testid="checkbox__indicator"
      className="q-checkbox-indicator"
    >
      <StyledCheckIcon />
    </StyledCheckboxIndicator>
  </StyledCheckboxRoot>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, CheckboxLabel };
