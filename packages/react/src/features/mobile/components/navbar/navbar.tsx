import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import React from "react";

const Navbar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "w-full z-20 top-0 py-1 px-4 text-sm text-black sticky",
        className
      )}
      {...props}
    >
      <div className="absolute w-full h-full left-0 top-0 border-b-2 border-slate-200 bg-neutral-50" />

      {children}
    </div>
  );
});
Navbar.displayName = "Navbar";

const NavbarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex relative items-center w-full overflow-hidden pl-2-safe pr-2-safe h-11 justify-between",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
NavbarContent.displayName = "NavbarContent";

const NavbarTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>(({ children, className, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn(
        "whitespace-nowrap block leading-tight absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 text-center text-sm font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
});
NavbarTitle.displayName = "NavbarTitle";

const NavbarSubtitle = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ children, className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "font-normal block leading-none text-2xs opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});
NavbarSubtitle.displayName = "NavbarSubtitle";

const NavbarLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ children, className, href = "#", ...props }, ref) => {
  return (
    <div className="flex justify-center items-center h-full me-2">
      <a
        ref={ref}
        href={href}
        className={cn(
          "text-primary inline-flex space-x-1 rtl:!space-x-reverse justify-center items-center select-none active:opacity-30 duration-300 active:duration-0 h-full max-h-12 cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </a>
    </div>
  );
});
NavbarLink.displayName = "NavbarLink";

const NavbarBack = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, children, href = "#", ...props }, ref) => {
  return (
    <NavbarLink ref={ref} href={href} className={cn("", className)} {...props}>
      {!children && (
        <>
          <ArrowLeft />
          Back
        </>
      )}
      {children}
    </NavbarLink>
  );
});
NavbarBack.displayName = "NavbarBack";

export {
  Navbar,
  NavbarBack,
  NavbarContent,
  NavbarLink,
  NavbarSubtitle,
  NavbarTitle,
};
