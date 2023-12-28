import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const blockVariants = cva(
  "text-sm z-10 relative px-4 my-8 py-4 bg-neutral-50",
  {
    variants: {
      inset: {
        true: "mx-4",
      },
      outline: {
        true: "border border-neutral-300",
      },
    },
  }
);

const Block = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & VariantProps<typeof blockVariants>
>(({ children, className, inset, outline, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        blockVariants({
          inset,
          outline,
        }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
Block.displayName = "Block";

const BlockTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h2">
>(({ children, className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn(
        "px-4 mt-8 flex justify-between items-center -mb-6 font-semibold  text-md",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
});
BlockTitle.displayName = "BlockTitle";

export { Block, BlockTitle };
