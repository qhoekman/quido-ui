import { cn } from "@/lib/utils";
import React from "react";

const ViewportLayout = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div className="w-full h-full relative min-h-screen">
      <div
        ref={ref}
        className={cn(
          "h-full w-full left-0 top-0 overflow-auto absolute bg-neutral-200",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
});

export { ViewportLayout };
