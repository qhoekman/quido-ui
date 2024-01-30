import { VariantProps, cva } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/utils";

interface TagProps {
  variant?: VariantProps<typeof tagVariants>["variant"];
  size?: VariantProps<typeof tagVariants>["size"];
  className?: string;
  children: React.ReactNode;
}

const tagVariants = cva(
  "inline-flex items-center justify-center rounded-full w-4 h-4 text-center text-xs",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-fg",
        destructive: "bg-destructive text-destructive-fg",
        outline: "border border-input hover:bg-accent",
        secondary: "bg-secondary text-secondary-fg",
      },
      size: {
        sm: "w-3 h-3",
        md: "w-4 h-4",
        lg: "w-5 h-5",
      },
    },
  }
);

export const Tag: React.FC<TagProps> = ({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}) => {
  return (
    <div
      data-testid="tag"
      className={cn(
        tagVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
