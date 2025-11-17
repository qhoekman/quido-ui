import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  display: flex;
  min-height: 80px;
  width: 100%;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-white);
  padding-left: var(--spacing-3);
  padding-right: var(--spacing-3);
  padding-top: var(--spacing-2);
  padding-bottom: var(--spacing-2);
  font-size: var(--font-size-sm);
  box-shadow: 0 0 0 0 var(--color-background);

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

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <StyledTextarea
        className={className}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
