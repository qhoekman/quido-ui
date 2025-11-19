import React from "react";
import styled from "styled-components";

const StyledListButton = styled.button`
  position: relative;
  border-bottom: var(--border-width-default) solid var(--color-muted-fg);
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

  &:active {
    border: none;
    transition-duration: 0ms;
    background-color: hsl(from var(--color-primary) h s l / 15%);
    color: var(--color-primary-fg);
  }

  &:focus {
    outline: none;
  }
`;

export const ListButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledListButton ref={ref} className={className} {...props}>
      {children}
    </StyledListButton>
  );
});
ListButton.displayName = "ListButton";
