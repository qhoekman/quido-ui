import * as RangePrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "@/lib/utils";

export type RangeProps = React.ComponentPropsWithoutRef<
  typeof RangePrimitive.Root
>;

const Range = React.forwardRef<
  React.ElementRef<typeof RangePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RangePrimitive.Root>
>(({ className, ...props }, ref) => (
  <RangePrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <RangePrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-muted">
      <RangePrimitive.Range className="absolute h-full bg-primary" />
    </RangePrimitive.Track>
    <RangePrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
    <RangePrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </RangePrimitive.Root>
));
Range.displayName = "Range";

export { Range };
