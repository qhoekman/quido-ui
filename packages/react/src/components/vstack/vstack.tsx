import { cn } from "@/lib/utils";
import React from "react";

const VStack = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props}>
      {children}
    </div>
  );
});
VStack.displayName = "VStack";

export { VStack };
