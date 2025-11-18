import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: flex;
  height: var(--spacing-10);
  width: 100%;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-input);
  color: var(--color-input-fg);
  padding-left: var(--spacing-3);
  padding-right: var(--spacing-3);
  padding-top: var(--spacing-2);
  padding-bottom: var(--spacing-2);
  font-size: var(--font-size-sm);
  box-shadow: 0 0 0 0 var(--color-background);

  &::file-selector-button {
    border: 0;
    background-color: transparent;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
  }

  &::placeholder {
    color: var(--color-muted-fg);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <StyledInput type={type} className={className} ref={ref} {...props} />
    );
  }
);
Input.displayName = "Input";
