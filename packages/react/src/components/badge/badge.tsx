import React from "react";
import styled, { css } from "styled-components";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva("q-badge", {
  variants: {
    variant: {
      primary: "variant--primary",
      secondary: "variant--secondary",
      destructive: "variant--destructive",
      outline: "variant--outline",
    },
    size: {
      sm: "size--sm",
      md: "size--md",
      lg: "size--lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

const badgeStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-full);
  text-align: center;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  line-height: 1;
  white-space: nowrap;
  position: relative;
  top: calc(var(--spacing-1) * -1);
  margin-left: var(--spacing-1);

  &.variant--primary {
    background-color: var(--color-primary);
    color: var(--color-primary-fg);
  }

  &.variant--secondary {
    background-color: var(--color-secondary);
    color: var(--color-secondary-fg);
  }

  &.variant--destructive {
    background-color: var(--color-danger);
    color: var(--color-danger-fg);
  }

  &.variant--outline {
    border: var(--border-width-default) solid var(--color-input);
    background-color: transparent;
    color: var(--color-background-fg);
  }

  &.size--sm {
    min-width: var(--spacing-3);
    height: var(--spacing-3);
    padding-left: var(--spacing-1);
    padding-right: var(--spacing-1);
    font-size: var(--font-size-2xs);
  }

  &.size--md {
    min-width: var(--spacing-4);
    height: var(--spacing-4);
    padding-left: var(--spacing-1-5);
    padding-right: var(--spacing-1-5);
    font-size: var(--font-size-xs);
  }

  &.size--lg {
    min-width: var(--spacing-5);
    height: var(--spacing-5);
    padding-left: var(--spacing-2);
    padding-right: var(--spacing-2);
    font-size: var(--font-size-sm);
  }
`;

const StyledBadge = styled.span`
  ${badgeStyles}
`;

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants> & {
    children: React.ReactNode;
  };

export const Badge: React.FC<BadgeProps> = ({
  variant,
  size,
  className,
  children,
  ...props
}) => {
  return (
    <StyledBadge
      data-testid="badge"
      className={badgeVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </StyledBadge>
  );
};
