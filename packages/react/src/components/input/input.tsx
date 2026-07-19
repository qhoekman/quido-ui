import React from "react";
import styled, { css } from "styled-components";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva("q-input", {
  variants: {
    size: {
      sm: "size--sm",
      md: "size--md",
      lg: "size--lg",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

const inputStyles = css`
  display: inline-flex;
  flex: 1 1 auto;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-input);
  color: var(--color-input-fg);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  box-shadow: 0 0 0 0 var(--color-background);

  &[type="file"] {
    border: 0;
    background-color: transparent;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
  }

  &[type="file"]::file-selector-button {
    background-color: hsl(from var(--color-background-fg) h s l / 5%);
    color: var(--color-background-fg);
    border: 0;
    border-radius: var(--border-radius-md);
    padding: var(--spacing-2) var(--spacing-3);
    margin-right: var(--spacing-2);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-sm);
    cursor: pointer;
  }

  &[type="file"]::file-selector-button:hover {
    background-color: hsl(from var(--color-background-fg) h s l / 10%);
  }

  &[type="number"] {
    appearance: textfield;
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  &[type="date"],
  &[type="datetime-local"],
  &[type="month"],
  &[type="time"] {
    appearance: textfield;
  }

  &[type="date"]::-webkit-calendar-picker-indicator,
  &[type="datetime-local"]::-webkit-calendar-picker-indicator,
  &[type="month"]::-webkit-calendar-picker-indicator,
  &[type="time"]::-webkit-calendar-picker-indicator {
    display: none;
  }

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
    height: var(--spacing-6);
    padding: var(--spacing-2) var(--spacing-2);
  }

  &.size--md {
    height: var(--spacing-8);
    padding: var(--spacing-3) var(--spacing-2);
  }

  &.size--lg {
    height: var(--spacing-10);
    padding: var(--spacing-3) var(--spacing-3);
  }
`;

const StyledInput = styled.input`
  ${inputStyles}
`;

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, ...props }, ref) => {
    return (
      <StyledInput
        data-testid="input"
        type={type}
        className={inputVariants({ size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
