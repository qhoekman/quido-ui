import { cn } from "@/lib/utils";
import React from "react";

const Footer = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"footer">
>(({ children, className, ...props }, ref) => {
  return (
    <footer ref={ref} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div
        className={cn(
          "mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </footer>
  );
});

const FooterContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col justify-between gap-10 md:gap-14 xl:flex-row",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

const FooterColumns = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("sm:grid sm:grid-cols-4 sm:gap-10 xl:gap-20", className)}
      {...props}
    >
      {children}
    </div>
  );
});

const FooterColumn = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("mt-10 sm:mt-0", className)} {...props}>
      {children}
    </div>
  );
});

const FooterColumnHeading = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h3">
>(({ children, className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn(
        "text-sm font-semibold leading-6 text-neutral-900",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
});

const FooterColumnList = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<"ul">
>(({ children, className, ...props }, ref) => {
  return (
    <ul
      ref={ref}
      role="list"
      className={cn("mt-2 space-y-4 lg:mt-6", className)}
      {...props}
    >
      {children}
    </ul>
  );
});

const FooterColumnListItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ children, className, ...props }, ref) => {
  return (
    <li
      ref={ref}
      className={cn(
        "text-sm leading-6 text-neutral-600 hover:text-neutral-900",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
});

const FooterSection = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex max-w-xs flex-col gap-4 sm:max-w-lg", className)}
      {...props}
    >
      {children}
    </div>
  );
});

const FooterBanner = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "mt-12 flex flex-col justify-between space-y-6 border-t border-neutral-900/10 pt-4 dark:border-white/20 sm:mt-20 md:flex-row md:items-end lg:mt-16",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

const FooterCopyright = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ children, className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-xs leading-5 text-neutral-500 ", className)}
      {...props}
    >
      {children}
    </p>
  );
});

const FooterLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ children, className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "text-xs leading-5 text-neutral-500 underline hover:text-neutral-600",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
});

export {
  Footer,
  FooterBanner,
  FooterColumn,
  FooterColumnHeading,
  FooterColumnList,
  FooterColumnListItem,
  FooterColumns,
  FooterContent,
  FooterCopyright,
  FooterLink,
  FooterSection,
};
