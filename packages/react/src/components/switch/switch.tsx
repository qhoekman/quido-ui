import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";
import styled from "styled-components";

const StyledSwitchRoot = styled(SwitchPrimitives.Root)`
  display: inline-flex;
  height: var(--spacing-5);
  width: var(--spacing-9);
  flex-shrink: 0;
  cursor: pointer;
  align-items: center;
  border-radius: var(--border-radius-full);
  border: var(--border-width-2) solid transparent;
  box-shadow: var(--box-shadow-sm);
  transition: background-color 0.3s;

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
  }

  &[data-state="unchecked"] {
    background-color: var(--color-border);
  }
`;

const StyledSwitchThumb = styled(SwitchPrimitives.Thumb)`
  pointer-events: none;
  display: block;
  height: var(--spacing-4);
  width: var(--spacing-4);
  border-radius: var(--border-radius-full);
  background-color: var(--color-background);
  box-shadow: var(--box-shadow-lg);
  transition: transform 0.3s;

  &[data-state="checked"] {
    transform: translateX(var(--spacing-4));
  }

  &[data-state="unchecked"] {
    transform: translateX(0);
  }
`;

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <StyledSwitchRoot className={className} {...props} ref={ref}>
    <StyledSwitchThumb />
  </StyledSwitchRoot>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
