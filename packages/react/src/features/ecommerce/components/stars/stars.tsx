import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React, { SVGProps } from "react";

type StarsProps = React.HTMLAttributes<HTMLDivElement> & {
  total?: number;
  rating: number;
};

export const Stars = React.forwardRef<HTMLDivElement, StarsProps>(
  ({ className, total = 5, rating, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center space-x-1", className)}
        {...props}
      >
        {Array.from({ length: total }).map((_, index) => (
          <Star
            key={index}
            className={cn(starVariants({ filled: index < rating }))}
          />
        ))}
      </div>
    );
  }
);

Stars.displayName = "Stars";

const starVariants = cva("w-4 h-4 fill-gray-300", {
  variants: {
    filled: {
      true: "fill-yellow-500",
    },
  },
});

const Star: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
