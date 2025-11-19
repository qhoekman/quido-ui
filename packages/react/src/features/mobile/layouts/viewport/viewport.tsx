import React from "react";
import styled from "styled-components";

const StyledViewportWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 100vh;
`;

const StyledViewport = styled.div`
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: auto;
  position: absolute;
  background-color: var(--color-background);
  color: var(--color-background-fg);
`;

export const ViewportLayout = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledViewportWrapper>
      <StyledViewport ref={ref} className={className} {...props}>
        {children}
      </StyledViewport>
    </StyledViewportWrapper>
  );
});
ViewportLayout.displayName = "ViewportLayout";
