import { cn } from "@/lib/utils";
import React from "react";

type CTAProps = {
  children: React.ReactNode;
};

const CTA: React.FC<CTAProps> = ({ children }) => {
  return (
    <div className="mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-6 lg:mt-40 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-7 rounded-xl bg-neutral-100 px-6 py-14 shadow-sm  sm:px-10 lg:px-14 xl:flex-row">
        {children}
      </div>
    </div>
  );
};

const CTASection = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "mx-auto max-w-2xl text-center xl:mx-0 xl:text-left",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

CTASection.displayName = "CTASection";

const CTATitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h2">
>(({ className, children, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn(
        "text-3xl font-bold leading-tight tracking-wide text-neutral-900 lg:text-4xl",
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
      className={cn("mt-6 text-base text-neutral-600 ", className)}
      {...props}
    >
      {children}
    </p>
  );
});

CTASubtitle.displayName = "CTASubtitle";

export { CTA, CTASection, CTASubtitle, CTATitle };
