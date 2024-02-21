import { Input } from "@/components/input/input";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { MinusIcon, PlusIcon } from "lucide-react";
import React, { useRef } from "react";
type NumberInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  classes?: {
    root?: string;
    input?: string;
    button?: string;
  };
};

const inputVariants = cva(
  "rounded-none text-center border-neutral-200 [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
  {
    variants: {},
  }
);
const buttonVariants = cva(
  "p-3 h-10 border border-neutral-200 bg-transparent hover:bg-neutral-100 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      direction: {
        increment: "rounded-e-lg",
        decrement: "rounded-s-lg",
      },
    },
  }
);

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

  return (
    <div className={cn("relative flex items-center max-w-32", classes.root)}>
      <button
        type="button"
        id="decrement-button"
        aria-label="Decrement"
        onClick={handleDecrement}
        disabled={disabled}
        className={cn(
          buttonVariants({
            direction: "decrement",
          }),
          classes?.button
        )}
      >
        <MinusIcon className="w-3 h-3" />
      </button>
      <Input
        type="number"
        ref={inputRef}
        className={cn(inputVariants({}), classes?.input, className)}
        placeholder="0"
        required
        disabled={disabled}
        {...props}
      />
      <button
        type="button"
        aria-label="Increment"
        onClick={handleIncrement}
        disabled={disabled}
        className={cn(
          buttonVariants({
            direction: "increment",
          }),
          classes?.button
        )}
      >
        <PlusIcon className="w-3 h-3" />
      </button>
    </div>
  );
};
