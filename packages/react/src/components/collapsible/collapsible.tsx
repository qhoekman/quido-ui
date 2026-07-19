import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import React from "react";
import styled, { css, keyframes } from "styled-components";

const collapsibleStyles = css`
  display: flex;
  flex-direction: column;
`;

const StyledCollapsible = styled(CollapsiblePrimitive.Root)`
  ${collapsibleStyles}
`;

const collapsibleTriggerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-2);
  padding: var(--spacing-1) var(--spacing-3);
  border: 0 none;
  background: transparent;
  color: var(--color-background-fg);
  outline: none;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

const StyledCollapsibleTrigger = styled(
  CollapsiblePrimitive.CollapsibleTrigger
)`
  ${collapsibleTriggerStyles}
`;

const slideDown = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`;

const slideUp = keyframes`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`;

const collapsibleContentStyles = css`
  overflow: hidden;
  padding: var(--spacing-1) var(--spacing-3);

  &[data-state="open"] {
    animation: ${slideDown} 300ms ease-out;
  }

  &[data-state="closed"] {
    animation: ${slideUp} 300ms ease-out;
  }
`;

const StyledCollapsibleContent = styled(
  CollapsiblePrimitive.CollapsibleContent
)`
  ${collapsibleContentStyles}
`;

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

export const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>
>(({ className, ...props }, ref) => (
  <StyledCollapsible
    data-testid="collapsible"
    className={cx("q-collapsible", className)}
    {...props}
    ref={ref}
  />
));
Collapsible.displayName = CollapsiblePrimitive.Root.displayName;

export const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleTrigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger>
>(({ className, ...props }, ref) => (
  <StyledCollapsibleTrigger
    data-testid="collapsible__trigger"
    className={cx("q-collapsible-trigger", className)}
    {...props}
    ref={ref}
  />
));
CollapsibleTrigger.displayName =
  CollapsiblePrimitive.CollapsibleTrigger.displayName;

export const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent>
>(({ className, ...props }, ref) => (
  <StyledCollapsibleContent
    data-testid="collapsible__content"
    className={cx("q-collapsible-content", className)}
    {...props}
    ref={ref}
  />
));
CollapsibleContent.displayName =
  CollapsiblePrimitive.CollapsibleContent.displayName;
