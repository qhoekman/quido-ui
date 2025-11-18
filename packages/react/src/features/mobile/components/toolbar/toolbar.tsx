import React from "react";
import styled from "styled-components";

const StyledToolbar = styled.div`
  width: 100%;
  padding-bottom: env(safe-area-inset-bottom);
  left: 0;
  bottom: 0;
  position: fixed;
`;

const StyledToolbarInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-top: var(--border-width-2) solid var(--color-border);
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
`;

const StyledToolbarContent = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow: hidden;
  padding-left: var(--spacing-6);
  padding-right: var(--spacing-6);
  height: var(--spacing-11);
`;

const StyledToolbarLink = styled.a`
  color: var(--color-primary);
  display: inline-flex;
  gap: var(--spacing-1);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition-duration: 300ms;
  height: 100%;
  max-height: var(--spacing-12);

  &:active {
    opacity: 0.3;
    transition-duration: 0ms;
  }
`;

export const Toolbar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledToolbar ref={ref} {...props}>
      <StyledToolbarInner className={className}></StyledToolbarInner>
      {children}
    </StyledToolbar>
  );
});
Toolbar.displayName = "Toolbar";

export const ToolbarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledToolbarContent ref={ref} className={className} {...props}>
      {children}
    </StyledToolbarContent>
  );
});
ToolbarContent.displayName = "ToolbarContent";

export const ToolbarLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href = "#", children, ...props }, ref) => {
  return (
    <StyledToolbarLink ref={ref} href={href} className={className} {...props}>
      {children}
    </StyledToolbarLink>
  );
});
ToolbarLink.displayName = "ToolbarLink";
