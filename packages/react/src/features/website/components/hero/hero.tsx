import { cn } from "@/lib/utils";
import React from "react";

const Hero = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 items-center gap-14  lg:grid-cols-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
Hero.displayName = "Hero";

const HeroTagline = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ children, className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn("text-lg font-medium text-neutral-800", className)}
      {...props}
    >
      {children}
    </span>
  );
});
HeroTagline.displayName = "HeroTagline";

const HeroTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>(({ children, className, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn(
        "text-4xl font-bold leading-tight tracking-wide text-neutral-900 xl:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
});
HeroTitle.displayName = "HeroTitle";

const HeroBody = React.forwardRef<
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
HeroBody.displayName = "HeroBody";

const HeroActions = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex space-x-8", className)} {...props}>
      {children}
    </div>
  );
});
HeroActions.displayName = "HeroActions";

const HeroSection = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("mx-auto max-w-2xl", className)} {...props}>
      {children}
    </div>
  );
});
HeroSection.displayName = "HeroSection";

const HeroBackdrop = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative h-full w-full", className)}
      {...props}
    />
  );
});
HeroBackdrop.displayName = "HeroBackdrop";

const HeroBackdropImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>(({ className, ...props }, ref) => {
  return (
    <img
      ref={ref}
      className={cn(
        "absolute -z-10 h-full max-h-[90vh] w-full object-cover brightness-[.25]",
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
});
HeroBackdropImage.displayName = "HeroBackdropImage";

const HeroCoverImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<"img">
>(({ className, ...props }, ref) => {
  return (
    <img
      ref={ref}
      className={cn("h-full max-h-[30vh] w-full object-cover", className)}
      loading="lazy"
      aria-hidden="true"
      {...props}
    />
  );
});
HeroCoverImage.displayName = "HeroCoverImage";

const HeroDiagonalShape = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithoutRef<"svg">
>(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      className={cn(
        "absolute inset-y-0 -left-10 hidden h-full w-44 transform fill-white lg:block",
        className
      )}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      {...props}
    >
      <polygon points="0,0 90,0 50,100 0,100" />
    </svg>
  );
});
HeroDiagonalShape.displayName = "HeroDiagonalShape";

export {
  Hero,
  HeroActions,
  HeroBackdrop,
  HeroBackdropImage,
  HeroBody,
  HeroCoverImage,
  HeroDiagonalShape,
  HeroSection,
  HeroTagline,
  HeroTitle,
};
