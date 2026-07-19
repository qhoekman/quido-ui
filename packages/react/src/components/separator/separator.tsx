import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";
import styled, { css } from "styled-components";
import { cva, type VariantProps } from "class-variance-authority";

const separatorVariants = cva("q-separator", {
  variants: {
    orientation: {
      horizontal: "variant--horizontal",
      vertical: "variant--vertical",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

const separatorStyles = css`
  display: block;
  flex-shrink: 0;
  background-color: var(--color-border);

  &.variant--horizontal {
    height: 1px;
    width: 100%;
  }

  &.variant--vertical {
    height: 100%;
    width: 1px;
  }
`;

const StyledSeparator = styled(SeparatorPrimitive.Root)`
  ${separatorStyles}
`;

export type SeparatorProps = React.ComponentPropsWithoutRef<
  typeof SeparatorPrimitive.Root
>;

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <StyledSeparator
      data-testid="separator"
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={separatorVariants({ orientation, className })}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
