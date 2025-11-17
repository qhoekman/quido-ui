import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { VariantProps } from "class-variance-authority";
import * as React from "react";
import styled from "styled-components";

import { toggleVariants, toggleStyles } from "@/components/toggle/toggle";

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "md",
  variant: "primary",
});

const StyledToggleGroupRoot = styled(ToggleGroupPrimitive.Root)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-1);
`;

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <StyledToggleGroupRoot ref={ref} className={className} {...props}>
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </StyledToggleGroupRoot>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const StyledToggleGroupItem = styled(ToggleGroupPrimitive.Item)`
  ${toggleStyles}
`;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  const classes = toggleVariants({
    variant: context.variant || variant,
    size: context.size || size,
  });

  const combinedClassName = className
    ? `${classes} ${className}`.trim()
    : classes;

  return (
    <StyledToggleGroupItem ref={ref} className={combinedClassName} {...props}>
      {children}
    </StyledToggleGroupItem>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
