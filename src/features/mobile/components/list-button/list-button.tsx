import { cn } from "@/lib/utils";
import React from "react";

const ListButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "relative border-b border-neutral-300 active:border-none flex items-center justify-center px-4 space-x-1 w-full duration-300 active:duration-0 focus:outline-none touch-ripple-primary overflow-hidden select-none h-11 text-primary active:bg-primary active:text-primary-fg active:bg-opacity-15",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});
ListButton.displayName = "ListButton";

export { ListButton };
