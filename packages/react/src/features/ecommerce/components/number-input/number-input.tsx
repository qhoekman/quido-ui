import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { cva } from "class-variance-authority";
import { Input } from "@/components/input/input";
import { MinusIcon, PlusIcon } from "lucide-react";

const buttonVariants = cva("q-number-input-button", {
  variants: {
    direction: {
      increment: "direction--increment",
      decrement: "direction--decrement",
    },
  },
});

const buttonStyles = css`
  padding: var(--spacing-3);
  height: var(--spacing-10);
  border: var(--border-width-default) solid var(--color-neutral-200);
  background-color: transparent;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: var(--color-neutral-100);
    color: var(--color-foreground);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &.direction--increment {
    border-top-right-radius: var(--border-radius-lg);
    border-bottom-right-radius: var(--border-radius-lg);
  }

  &.direction--decrement {
    border-top-left-radius: var(--border-radius-lg);
    border-bottom-left-radius: var(--border-radius-lg);
  }
`;

const StyledRoot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: var(--spacing-32);
`;

const StyledButton = styled.button`
  ${buttonStyles}
`;

const StyledInput = styled(Input)`
  border-radius: 0;
  text-align: center;
  border-color: var(--color-neutral-200);

  &::-webkit-outer-spin-button {
    margin: 0;
    appearance: none;
  }

  &::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: var(--spacing-3);
    height: var(--spacing-3);
  }
`;

export type NumberInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  classes?: {
    root?: string;
    input?: string;
    button?: string;
  };
};

export const NumberInput: React.FC<NumberInputProps> = ({
  className,
  disabled,
  classes = {},
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIncrement = () => {
    if (inputRef.current) {
      inputRef.current.stepUp();
    }
  };

  const handleDecrement = () => {
    if (inputRef.current) {
      inputRef.current.stepDown();
    }
  };

  const decrementButtonClasses = [
    buttonVariants({ direction: "decrement" }),
    classes?.button,
  ]
    .filter(Boolean)
    .join(" ");

  const incrementButtonClasses = [
    buttonVariants({ direction: "increment" }),
    classes?.button,
  ]
    .filter(Boolean)
    .join(" ");

  const inputClasses = [classes?.input, className].filter(Boolean).join(" ");

  return (
    <StyledRoot className={classes.root}>
      <StyledButton
        type="button"
        id="decrement-button"
        aria-label="Decrement"
        onClick={handleDecrement}
        disabled={disabled}
        className={decrementButtonClasses}
      >
        <StyledIcon>
          <MinusIcon />
        </StyledIcon>
      </StyledButton>
      <StyledInput
        type="number"
        ref={inputRef}
        className={inputClasses}
        placeholder="0"
        required
        disabled={disabled}
        {...props}
      />
      <StyledButton
        type="button"
        aria-label="Increment"
        onClick={handleIncrement}
        disabled={disabled}
        className={incrementButtonClasses}
      >
        <StyledIcon>
          <PlusIcon />
        </StyledIcon>
      </StyledButton>
    </StyledRoot>
  );
};
