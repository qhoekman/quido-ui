import React from "react";
import styled, { css } from "styled-components";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const listButtonStyles = css`
  position: relative;
  border-bottom: var(--border-width-default) solid var(--color-muted-fg);
  border-top: none;
  border-left: none;
  border-right: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  gap: var(--spacing-1);
  width: 100%;
  transition-duration: 300ms;
  outline: none;
  overflow: hidden;
  user-select: none;
  height: var(--spacing-11);
  color: var(--color-primary);

  &:active:not(:disabled) {
    border: none;
    transition-duration: 0ms;
    background-color: hsl(from var(--color-primary) h s l / 15%);
    color: var(--color-primary-fg);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledListButton = styled.button`
  ${listButtonStyles}
`;

export const ListButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledListButton
      ref={ref}
      data-testid="list-button"
      className={cx("q-list-button", className)}
      {...props}
    >
      {children}
    </StyledListButton>
  );
});
ListButton.displayName = "ListButton";
