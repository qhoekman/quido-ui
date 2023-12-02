import { cn } from "@/lib/utils";
import React from "react";

type CTAProps = {
  children: React.ReactNode;
};

const CTA: React.FC<CTAProps> = ({ children }) => {
  return (
    <div className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-6 lg:mt-40 lg:px-8">
      <div className="flex flex-col space-y-7 rounded-xl bg-neutral-100 px-4 py-14 text-center shadow-sm sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

const CTATitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h2">
>(({ className, children, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn(
        "text-3xl font-bold leading-tight tracking-wide text-neutral-900 md:text-4xl xl:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
});

CTATitle.displayName = "CTATitle";

const CTASubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "mx-auto max-w-2xl text-base text-neutral-600  md:text-lg",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
});

CTASubtitle.displayName = "CTASubtitle";

const CTAActions = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col justify-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 max-w-md sm:mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

CTAActions.displayName = "CTAActions";

export { CTA, CTAActions, CTASubtitle, CTATitle };
