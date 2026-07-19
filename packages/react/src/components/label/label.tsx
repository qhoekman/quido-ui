import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import styled, { css } from "styled-components";

const labelVariants = cva("q-label", {
  variants: {
    size: {
      sm: "size--sm",
      md: "size--md",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const labelStyles = css`
  display: inline-block;
  color: var(--color-background-fg);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-none);

  &.size--sm {
    font-size: var(--font-size-sm);
  }

  &.size--md {
    font-size: var(--font-size-base);
  }

  .peer:disabled ~ & {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:has(input:disabled),
  &:has(textarea:disabled),
  &:has(+ input:disabled),
  &:has(+ textarea:disabled) {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const StyledLabel = styled(LabelPrimitive.Root)`
  ${labelStyles}
`;

export type LabelProps = LabelPrimitive.LabelProps &
  VariantProps<typeof labelVariants>;

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, size, ...props }, ref) => (
  <StyledLabel
    data-testid="label"
    ref={ref}
    className={labelVariants({ size, className })}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;
