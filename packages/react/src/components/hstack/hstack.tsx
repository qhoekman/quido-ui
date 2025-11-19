import React from "react";
import styled from "styled-components";

const StyledHStack = styled.div`
  display: flex;
  gap: var(--spacing-4);
`;

export const HStack = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledHStack ref={ref} className={className} {...props}>
      {children}
    </StyledHStack>
  );
});
HStack.displayName = "HStack";
