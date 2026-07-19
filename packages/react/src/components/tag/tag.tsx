import React from "react";
import styled, { css } from "styled-components";
import { cva, type VariantProps } from "class-variance-authority";

const tagVariants = cva("q-tag", {
  variants: {
    variant: {
      primary: "variant--primary",
      secondary: "variant--secondary",
      destructive: "variant--destructive",
      outline: "variant--outline",
    },
    size: {
      xs: "size--xs",
      sm: "size--sm",
      md: "size--md",
      lg: "size--lg",
    },
    shape: {
      pill: "shape--pill",
      plate: "shape--plate",
    },
  },
  defaultVariants: {
    variant: "primary",
    shape: "plate",
  },
});

const tagStyles = css`
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

  &.size--xs {
    padding: var(--spacing-0-5);
    gap: var(--spacing-1);
  }

  &.size--sm {
    padding: var(--spacing-0-5) var(--spacing-1);
    gap: var(--spacing-1);
  }

  &.size--md {
    padding: var(--spacing-1) var(--spacing-2);
    gap: var(--spacing-2);
  }

  &.size--lg {
    font-size: var(--font-size-sm);
    padding: var(--spacing-2) var(--spacing-3);
    gap: var(--spacing-2);
  }

  &.shape--pill {
    border-radius: var(--border-radius-full);
  }

  &.shape--plate {
    border-radius: var(--border-radius-md);
  }
`;

const StyledTag = styled.div`
  ${tagStyles}
`;

export type TagProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof tagVariants> & {
    children: React.ReactNode;
  };

export const Tag: React.FC<TagProps> = ({
  variant,
  size,
  shape,
  className,
  children,
  ...props
}) => {
  return (
    <StyledTag
      data-testid="tag"
      className={tagVariants({ variant, size, shape, className })}
      {...props}
    >
      {children}
    </StyledTag>
  );
};
