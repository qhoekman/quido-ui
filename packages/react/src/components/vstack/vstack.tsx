import React from "react";
import styled from "styled-components";

const StyledVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`;

export const VStack = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledVStack ref={ref} className={className} {...props}>
      {children}
    </StyledVStack>
  );
});
VStack.displayName = "VStack";
