import { Button } from "@/components/button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown/dropdown";
import { cn } from "@/lib/utils";

import { ChevronDown } from "lucide-react";
import React from "react";

const Navbar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"nav">
>(({ children, className, "aria-label": ariaLabel, ...props }, ref) => {
  return (
    <header
      className={cn(
        "absolute inset-x-0 top-0 z-50 border-b border-neutral-300 p-6",
        className
      )}
    >
      <nav
        ref={ref}
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </nav>
    </header>
  );
});

const NavbarItems = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("hidden lg:flex lg:items-center lg:gap-x-6", className)}
      {...props}
    >
      {children}
    </div>
  );
});

const NavbarLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href, children, ...props }, ref) => {
  return (
    <Button variant="ghost" asChild>
      <a
        ref={ref}
        href={href}
        className={cn(
          "text-sm font-semibold leading-6 text-neutral-900",
          className
        )}
        {...props}
      >
        {children}
      </a>
    </Button>
  );
});

const NavbarDropdown = React.forwardRef<
  React.ElementRef<typeof DropdownMenu>,
  React.ComponentPropsWithoutRef<typeof DropdownMenu>
>(({ children, ...props }) => {
  return <DropdownMenu {...props}>{children}</DropdownMenu>;
});

const NavbarDropdownTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuTrigger>
>(({ children, className, ...props }, ref) => {
  return (
    <DropdownMenuTrigger
      ref={ref}
      className={cn(
        "flex items-center text-sm font-semibold leading-6 text-neutral-900 ",
        className
      )}
      asChild
      {...props}
    >
      <Button variant={"ghost"}>
        {children}
        <ChevronDown className="ml-2 h-5 w-5 stroke-neutral-700" />
      </Button>
    </DropdownMenuTrigger>
  );
});

const NavbarDropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuContent>
>(({ children, ...props }, ref) => {
  return (
    <DropdownMenuContent
      ref={ref}
      className="py-1 px-0 bg-white shadow-lg rounded-lg w-64 mt-2"
      {...props}
    >
      {children}
    </DropdownMenuContent>
  );
});

const NavbarDropdownLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href = "#", children, ...props }) => {
  const isActive = false;

  return (
    <DropdownMenuItem key={href} className="px-0">
      <a
        href={href}
        className={cn(
          `${
            isActive && "bg-neutral-100 "
          } block px-4 py-2 hover:bg-neutral-100 w-full`,
          className
        )}
        {...props}
      >
        {children}
      </a>
    </DropdownMenuItem>
  );
});

const NavbarActions = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

const NavbarBrand = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex lg:flex-1", className)} {...props}>
      {children}
    </div>
  );
});

const NavbarLogo = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ children, "aria-label": title, href, className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      className={cn("-m-1.5 p-1.5", className)}
      {...props}
    >
      <span className="sr-only">{title}</span>
      {children}
    </a>
  );
});

export {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarDropdown,
  NavbarDropdownContent,
  NavbarDropdownLink,
  NavbarDropdownTrigger,
  NavbarItems,
  NavbarLink,
  NavbarLogo,
};
