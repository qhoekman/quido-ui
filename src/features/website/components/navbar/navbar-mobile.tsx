import { Button } from "@/components/button/button";
import { NavbarLink } from "@/features/website/components/navbar/navbar";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import React from "react";
import { create } from "zustand";

const Dialog = DialogPrimitive.Root;
const DialogContent = DialogPrimitive.Content;
const DialogTrigger = DialogPrimitive.Trigger;

const useNavbarMobile = create<{
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (open: boolean) => set({ mobileMenuOpen: open }),
}));

const NavbarMobile = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>
>(({ children, ...props }) => {
  const { mobileMenuOpen, setMobileMenuOpen } = useNavbarMobile();

  return (
    <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} {...props}>
      <div className="lg:hidden">{children}</div>
    </Dialog>
  );
});

const NavbarMobileTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(
  (
    { className, children, "aria-label": title = "Open menu", ...props },
    ref
  ) => {
    return (
      <div className="flex lg:hidden">
        <DialogTrigger ref={ref} asChild {...props}>
          <Button type="button" variant="ghost" size="sm" className={className}>
            <span className="sr-only">{title}</span>
            {children}
          </Button>
        </DialogTrigger>
      </div>
    );
  }
);

const NavbarMobileClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Close ref={ref} asChild>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className={className}
        {...props}
      >
        <XIcon className="h-6 w-6 stroke-neutral-800" aria-hidden="true" />
        <span className="sr-only">Close</span>
      </Button>
    </DialogPrimitive.Close>
  );
});

const NavbarMobileHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-between", className)}
      {...props}
    >
      {children}
    </div>
  );
});

const NavbarMobileActions = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-4 py-6", className)}
      {...props}
    >
      {children}
    </div>
  );
});

const NavbarMobileContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, className, ...props }, ref) => {
  return (
    <DialogContent
      ref={ref}
      className={cn(
        "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10",
        className
      )}
      {...props}
    >
      {children}
    </DialogContent>
  );
});

const NavbarMobileGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div className="mt-6 flow-root">
      <div
        ref={ref}
        className={cn("-my-6 divide-y divide-neutral-500/30", className)}
        {...props}
      >
        {children}
      </div>
    </div>
  );
});

const NavbarMobileItems = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("space-y-2 py-6", className)} {...props}>
      {children}
    </div>
  );
});

const NavbarMobileLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href, children, ...props }, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      className={cn(
        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-100 ",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
});

const NavbarMobileLogo = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ children, "aria-label": title, href, className, ...props }, ref) => {
  return (
    <NavbarLink
      ref={ref}
      href={href}
      className={cn("-m-1.5 p-1.5", className)}
      {...props}
    >
      <span className="sr-only">{title}</span>
      {children}
    </NavbarLink>
  );
});

const NavbarMobileDropdownLabel = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});

const NavbarMobileDropdownGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("ml-4 mt-1", className)} {...props}>
      {children}
    </div>
  );
});

const NavbarMobileDropdownLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href, children, ...props }, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      className={cn(
        "-mx-3 block rounded-lg px-3 py-2 text-sm font-medium leading-7 text-neutral-600 hover:bg-neutral-100",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
});

export {
  NavbarMobile,
  NavbarMobileActions,
  NavbarMobileClose,
  NavbarMobileContent,
  NavbarMobileDropdownGroup,
  NavbarMobileDropdownLabel,
  NavbarMobileDropdownLink,
  NavbarMobileGroup,
  NavbarMobileHeader,
  NavbarMobileItems,
  NavbarMobileLink,
  NavbarMobileLogo,
  NavbarMobileTrigger,
};
