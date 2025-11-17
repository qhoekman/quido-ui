import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import styled from "styled-components";

const labelVariants = cva("q-label");

const StyledLabel = styled(LabelPrimitive.Root)`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-none);

  .peer:disabled ~ & {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export type LabelProps = LabelPrimitive.LabelProps &
  VariantProps<typeof labelVariants>;

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...props }, ref) => (
  <StyledLabel ref={ref} className={labelVariants({ className })} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;
