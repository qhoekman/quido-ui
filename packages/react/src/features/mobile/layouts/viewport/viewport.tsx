import React from "react";
import styled, { css } from "styled-components";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const viewportWrapperStyles = css`
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 100vh;
`;

const StyledViewportWrapper = styled.div`
  ${viewportWrapperStyles}
`;

const viewportStyles = css`
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: auto;
  position: absolute;
  background-color: var(--color-background);
  color: var(--color-background-fg);
`;

const StyledViewport = styled.div`
  ${viewportStyles}
`;

export const ViewportLayout = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledViewportWrapper className="q-viewport-wrapper">
      <StyledViewport
        ref={ref}
        data-testid="viewport"
        className={cx("q-viewport", className)}
        {...props}
      >
        {children}
      </StyledViewport>
    </StyledViewportWrapper>
  );
});
ViewportLayout.displayName = "ViewportLayout";
