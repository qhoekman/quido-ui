import React from "react";
import styled, { css } from "styled-components";
import { cva, type VariantProps } from "class-variance-authority";

const vstackVariants = cva("q-vstack", {
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

const vstackStyles = css`
  display: flex;
  flex-direction: column;

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

const StyledVStack = styled.div`
  ${vstackStyles}
`;

export type VStackProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof vstackVariants>;

export const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
  ({ children, className, gap, ...props }, ref) => {
    return (
      <StyledVStack
        data-testid="vstack"
        ref={ref}
        className={vstackVariants({ gap, className })}
        {...props}
      >
        {children}
      </StyledVStack>
    );
  }
);
VStack.displayName = "VStack";
