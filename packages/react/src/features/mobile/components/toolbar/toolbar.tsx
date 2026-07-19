import React from "react";
import styled, { css } from "styled-components";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const toolbarStyles = css`
  width: 100%;
  padding-bottom: env(safe-area-inset-bottom);
  left: 0;
  bottom: 0;
  position: fixed;
`;

const StyledToolbar = styled.div`
  ${toolbarStyles}
`;

const toolbarInnerStyles = css`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-top: var(--border-width-2) solid var(--color-border);
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
`;

const StyledToolbarInner = styled.div`
  ${toolbarInnerStyles}
`;

const toolbarContentStyles = css`
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

const StyledToolbarContent = styled.div`
  ${toolbarContentStyles}
`;

const toolbarLinkStyles = css`
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

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }
`;

const StyledToolbarLink = styled.a`
  ${toolbarLinkStyles}
`;

export const Toolbar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledToolbar
      ref={ref}
      data-testid="toolbar"
      className={cx("q-toolbar", className)}
      {...props}
    >
      <StyledToolbarInner className="q-toolbar-inner"></StyledToolbarInner>
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
    <StyledToolbarContent
      ref={ref}
      data-testid="toolbar__content"
      className={cx("q-toolbar-content", className)}
      {...props}
    >
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
    <StyledToolbarLink
      ref={ref}
      href={href}
      data-testid="toolbar__link"
      className={cx("q-toolbar-link", className)}
      {...props}
    >
      {children}
    </StyledToolbarLink>
  );
});
ToolbarLink.displayName = "ToolbarLink";
