import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import styled, { css } from "styled-components";

const toggleVariants = cva("q-toggle", {
  variants: {
    variant: {
      primary: "variant--primary",
      outline: "variant--outline",
    },
    size: {
      md: "size--md",
      sm: "size--sm",
      lg: "size--lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

const toggleStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-background-fg);
  transition: colors 0.3s;
  outline: none;
  border: 0 none;

  &:hover {
    background-color: var(--color-muted);
    color: var(--color-muted-fg);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 1px var(--color-ring);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &.variant--primary {
    background-color: transparent;
    border: var(--border-width-default) solid var(--color-muted);
  }
  &.variant--primary:not([data-state="on"]) {
    background-color: transparent;
    border: var(--border-width-default) solid var(--color-muted);
  }
  &.variant--primary[data-state="on"] {
    background-color: var(--color-primary);
    color: var(--color-primary-fg);
  }

  &.variant--outline {
    border: var(--border-width-default) solid var(--color-input);
    background-color: transparent;
    box-shadow: var(--box-shadow-sm);

    &:hover {
      background-color: var(--color-muted);
      color: var(--color-muted-fg);
    }
  }

  &.variant--outline:not([data-state="on"]) {
    border: var(--border-width-default) solid var(--color-input);
    background-color: transparent;
    box-shadow: var(--box-shadow-sm);
  }
  &.variant--outline[data-state="on"] {
    border: var(--border-width-default) solid var(--color-primary);
  }

  &.size--md {
    height: var(--spacing-9);
    padding-left: var(--spacing-3);
    padding-right: var(--spacing-3);
  }

  &.size--sm {
    height: var(--spacing-8);
    padding-left: var(--spacing-2);
    padding-right: var(--spacing-2);
  }

  &.size--lg {
    height: var(--spacing-10);
    padding-left: var(--spacing-3);
    padding-right: var(--spacing-3);
  }
`;

const StyledToggle = styled(TogglePrimitive.Root)`
  ${toggleStyles}
`;

export type ToggleProps = React.ComponentPropsWithoutRef<
  typeof TogglePrimitive.Root
> &
  VariantProps<typeof toggleVariants>;

export const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, ...props }, ref) => {
  const classes = toggleVariants({ variant, size, className });

  return <StyledToggle ref={ref} className={classes} {...props} />;
});

Toggle.displayName = TogglePrimitive.Root.displayName;

export { toggleVariants, toggleStyles };
