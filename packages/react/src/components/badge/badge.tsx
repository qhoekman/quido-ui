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
  },
  defaultVariants: {
    variant: "primary",
  },
});

const badgeStyles = css`
  display: inline-flex;
  align-items: center;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  padding-left: var(--spacing-2-5);
  padding-right: var(--spacing-2-5);
  padding-top: var(--spacing-0-5);
  padding-bottom: var(--spacing-0-5);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  transition: colors 0.3s;
  outline: none;
  box-shadow: 0 0 0 0 var(--color-background);

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }

  &.variant--primary {
    border-color: transparent;
    background-color: var(--color-primary);
    color: var(--color-primary-fg);
    box-shadow: var(--box-shadow-sm);

    &:hover {
      background-color: hsl(from var(--color-primary) h s l / 80%);
    }
  }

  &.variant--secondary {
    border-color: transparent;
    background-color: var(--color-secondary);
    color: var(--color-secondary-fg);

    &:hover {
      background-color: hsl(from var(--color-secondary) h s l / 80%);
    }
  }

  &.variant--destructive {
    border-color: transparent;
    background-color: var(--color-danger);
    color: var(--color-danger-fg);
    box-shadow: var(--box-shadow-sm);

    &:hover {
      background-color: hsl(from var(--color-danger) h s l / 80%);
    }
  }

  &.variant--outline {
    color: var(--color-background-fg);
  }
`;

const StyledBadge = styled.div`
  ${badgeStyles}
`;

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants> & {
    children: React.ReactNode;
  };

export const Badge: React.FC<BadgeProps> = ({
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <StyledBadge
      data-testid="badge"
      className={badgeVariants({ variant, className })}
      {...props}
    >
      {children}
    </StyledBadge>
  );
};
