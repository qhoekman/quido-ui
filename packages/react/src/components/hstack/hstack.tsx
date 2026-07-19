import React from "react";
import styled, { css } from "styled-components";
import { cva, type VariantProps } from "class-variance-authority";

const hstackVariants = cva("q-hstack", {
  variants: {
    gap: {
      none: "gap--none",
      sm: "gap--sm",
      md: "gap--md",
      lg: "gap--lg",
      xl: "gap--xl",
      "2xl": "gap--2xl",
    },
  },
  defaultVariants: {
    gap: "md",
  },
});

const hstackStyles = css`
  display: flex;

  &.gap--none {
    gap: 0;
  }

  &.gap--sm {
    gap: var(--spacing-2);
  }

  &.gap--md {
    gap: var(--spacing-4);
  }

  &.gap--lg {
    gap: var(--spacing-6);
  }

  &.gap--xl {
    gap: var(--spacing-8);
  }

  &.gap--2xl {
    gap: var(--spacing-12);
  }
`;

const StyledHStack = styled.div`
  ${hstackStyles}
`;

export type HStackProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof hstackVariants>;

export const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
  ({ children, className, gap, ...props }, ref) => {
    return (
      <StyledHStack
        data-testid="hstack"
        ref={ref}
        className={hstackVariants({ gap, className })}
        {...props}
      >
        {children}
      </StyledHStack>
    );
  }
);
HStack.displayName = "HStack";
