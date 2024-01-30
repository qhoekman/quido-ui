import { cn } from "@/lib/utils";
import React from "react";

const HStack = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex gap-4", className)} {...props}>
      {children}
    </div>
  );
});
HStack.displayName = "HStack";

export { HStack };
