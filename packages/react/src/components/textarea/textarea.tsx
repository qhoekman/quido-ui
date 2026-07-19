import React from "react";
import styled, { css } from "styled-components";
import { cva, type VariantProps } from "class-variance-authority";

const textareaVariants = cva("q-textarea", {
  variants: {
    size: {
      sm: "size--sm",
      md: "size--md",
      lg: "size--lg",
    },
  },
});

const textareaStyles = css`
  display: flex;
  min-height: 80px;
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
  line-height: var(--line-height-sm);
  box-shadow: 0 0 0 0 var(--color-background);
  resize: vertical;

  &::placeholder {
    color: var(--color-muted-fg);
  }

  &:focus-visible {
    outline: none;
    border-color: var(--color-ring);
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &.size--sm {
    font-size: var(--font-size-xs);
    padding: var(--spacing-2) var(--spacing-3);
  }

  &.size--md {
    font-size: var(--font-size-sm);
    padding: var(--spacing-3) var(--spacing-2);
  }

  &.size--lg {
    font-size: var(--font-size-base);
    padding: var(--spacing-4) var(--spacing-3);
  }
`;

const StyledTextarea = styled.textarea`
  ${textareaStyles}
`;

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textareaVariants>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <StyledTextarea
        data-testid="textarea"
        className={textareaVariants({ size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
