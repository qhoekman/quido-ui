import React from "react";
import styled, { css } from "styled-components";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva("q-button", {
  variants: {
    variant: {
      primary: "variant--primary",
      secondary: "variant--secondary",
      destructive: "variant--destructive",
      outline: "variant--outline",
      ghost: "variant--ghost",
      link: "variant--link",
    },
    size: {
      md: "size--md",
      sm: "size--sm",
      lg: "size--lg",
      icon: "size--icon",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 0 none;
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: colors 0.3s;
  outline: none;
  box-shadow: 0 0 0 0 var(--color-background);
  text-decoration: none;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &.variant--primary {
    background-color: var(--color-primary);
    color: var(--color-primary-fg);

    &:hover {
      background-color: hsl(from var(--color-primary) h s l / 90%);
    }
  }

  &.variant--secondary {
    background-color: var(--color-secondary);
    color: var(--color-secondary-fg);

    &:hover {
      background-color: hsl(from var(--color-secondary) h s l / 90%);
    }
  }

  &.variant--destructive {
    background-color: var(--color-danger);
    color: var(--color-danger-fg);

    &:hover {
      background-color: hsl(from var(--color-danger) h s l / 90%);
    }
  }

  &.variant--outline {
    border: var(--border-width-default) solid var(--color-neutral-200);
    background-color: transparent;

    &:hover {
      background-color: var(--color-neutral-100);
      color: var(--color-background-fg);
    }
  }

  &.variant--ghost {
    &:hover {
      background-color: var(--color-neutral-100);
      color: hsl(from var(--color-background-fg) h s l / 90%);
    }
  }

  &.variant--link {
    color: var(--color-primary);
    text-underline-offset: var(--spacing-4);

    &:hover {
      text-decoration: underline;
    }
  }

  &.size--md {
    height: var(--spacing-10);
    padding-left: var(--spacing-4);
    padding-right: var(--spacing-4);
    padding-top: var(--spacing-2);
    padding-bottom: var(--spacing-2);
  }

  &.size--sm {
    height: var(--spacing-9);
    border-radius: var(--border-radius-md);
    padding-left: var(--spacing-3);
    padding-right: var(--spacing-3);
  }

  &.size--lg {
    height: var(--spacing-11);
    border-radius: var(--border-radius-md);
    padding-left: var(--spacing-8);
    padding-right: var(--spacing-8);
  }

  &.size--icon {
    height: var(--spacing-10);
    width: var(--spacing-10);
    padding: 0;
  }
`;

const StyledButton = styled.button`
  ${buttonStyles}
`;
const StyledSlot = styled(Slot)`
  ${buttonStyles}
`;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const classes = buttonVariants({ variant, size, className });
    const Comp = (asChild ? StyledSlot : StyledButton) as React.ElementType;

    return <Comp className={classes} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
