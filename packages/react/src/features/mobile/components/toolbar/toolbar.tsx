import { cn } from "@/lib/utils";
import React from "react";

const Toolbar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className="w-full pb-safe left-0 bottom-0 fixed" {...props}>
      <div
        className={cn(
          "absolute w-full h-full left-0 top-0 border-t-2 border-slate-200 bg-neutral-50",
          className
        )}
      ></div>
      {children}
    </div>
  );
});
Toolbar.displayName = "Toolbar";

const ToolbarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex relative justify-between items-center w-full overflow-hidden px-6 h-11",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
ToolbarContent.displayName = "ToolbarContent";

const ToolbarLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href = "#", children, ...props }, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      className={cn(
        "text-primary inline-flex space-x-1 rtl:!space-x-reverse justify-center items-center cursor-pointer select-none active:opacity-30 duration-300 active:duration-0 h-full max-h-12",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
});
ToolbarLink.displayName = "ToolbarLink";

export { Toolbar, ToolbarContent, ToolbarLink };
