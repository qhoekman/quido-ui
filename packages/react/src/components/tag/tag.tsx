import React from "react";
import styled, { css } from "styled-components";
import { cva, type VariantProps } from "class-variance-authority";

const tagVariants = cva("q-tag", {
  variants: {
    variant: {
      primary: "variant--primary",
      destructive: "variant--destructive",
      outline: "variant--outline",
      secondary: "variant--secondary",
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

const tagStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-full);
  text-align: center;
  font-size: var(--font-size-xs);

  &.variant--primary {
    background-color: var(--color-primary);
    color: var(--color-primary-fg);
  }

  &.variant--destructive {
    background-color: var(--color-danger);
    color: var(--color-danger-fg);
  }

  &.variant--outline {
    border: var(--border-width-default) solid var(--color-input);

    &:hover {
      background-color: var(--color-muted);
    }
  }

  &.variant--secondary {
    background-color: var(--color-secondary);
    color: var(--color-secondary-fg);
  }

  &.size--sm {
    width: var(--spacing-3);
    height: var(--spacing-3);
  }

  &.size--md {
    width: var(--spacing-4);
    height: var(--spacing-4);
  }

  &.size--lg {
    width: var(--spacing-5);
    height: var(--spacing-5);
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
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  return (
    <StyledTag
      data-testid="tag"
      className={tagVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </StyledTag>
  );
};
