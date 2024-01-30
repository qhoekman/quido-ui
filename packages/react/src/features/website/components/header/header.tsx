import { cn } from "@/lib/utils";
import React from "react";

const Header = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "mx-auto mt-24 max-w-7xl px-4 sm:mt-32 sm:px-6 lg:mt-40 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
Header.displayName = "Header";

const HeaderTagline = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h3">
>(({ children, className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn(
        "text-lg font-medium uppercase tracking-wide text-neutral-800",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
});
HeaderTagline.displayName = "HeaderTagline";

const HeaderTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h2">
>(({ children, className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn(
        "text-4xl font-bold leading-tight tracking-wide text-neutral-900 xl:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
});
HeaderTitle.displayName = "HeaderTitle";

const HeaderBody = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ children, className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-lg text-neutral-600", className)}
      {...props}
    >
      {children}
    </p>
  );
});
HeaderBody.displayName = "HeaderBody";

const HeaderContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("mx-auto flex max-w-4xl flex-col space-y-7", className)}
      {...props}
    >
      {children}
    </div>
  );
});
HeaderContent.displayName = "HeaderContent";

const HeaderActions = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("mr-auto flex space-x-8", className)}
      {...props}
    >
      {children}
    </div>
  );
});
HeaderActions.displayName = "HeaderActions";

const HeaderBackdrop = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative h-full w-full", className)}
      {...props}
    >
      {children}
    </div>
  );
});
HeaderBackdrop.displayName = "HeaderBackdrop";

const HeaderBackdropImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>(({ className, ...props }, ref) => {
  return (
    <img
      ref={ref}
      loading="lazy"
      src="https://dummyimage.com/1920x1200/d4d4d4/171717"
      alt="hero image"
      aria-hidden="true"
      className={cn(
        "absolute -z-10 h-full w-full object-cover brightness-[.25]",
        className
      )}
      {...props}
    />
  );
});
HeaderBackdropImage.displayName = "HeaderBackdropImage";

export {
  Header,
  HeaderActions,
  HeaderBackdrop,
  HeaderBackdropImage,
  HeaderBody,
  HeaderContent,
  HeaderTagline,
  HeaderTitle,
};
