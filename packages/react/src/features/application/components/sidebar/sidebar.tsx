import { Button } from "@/components/button/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/collapsible/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import React from "react";

type SidebarProps = React.HTMLAttributes<HTMLDivElement>;
export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative space-y-2 min-h-svh h-full", className)}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);

type SidebarBrand = React.HTMLAttributes<HTMLDivElement>;
export const SidebarBrand = React.forwardRef<HTMLDivElement, SidebarBrand>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center h-16 px-4 text-lg font-semibold tracking-tight",
          className
        )}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);

type SidebarGroupHeader = React.HTMLAttributes<HTMLHeadingElement>;
export const SidebarGroupHeader = React.forwardRef<
  HTMLHeadingElement,
  SidebarGroupHeader
>(({ className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn(
        "mb-2 px-4 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    >
      {props.children}
    </h2>
  );
});

type SidebarGroup = React.HTMLAttributes<HTMLDivElement>;
const SidebarGroupContext = React.createContext(false);

export const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarGroup>(
  ({ className, ...props }, ref) => {
    const [open, setOpen] = React.useState(false);

    return (
      <SidebarGroupContext.Provider value={open}>
        <Collapsible
          ref={ref}
          open={open}
          onOpenChange={setOpen}
          className={cn("", className)}
          {...props}
        >
          {props.children}
        </Collapsible>
      </SidebarGroupContext.Provider>
    );
  }
);

type SidebarGroupTrigger = React.ComponentProps<typeof Button>;
export const SidebarGroupTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  SidebarGroupTrigger
>(({ className, ...props }, ref) => {
  return (
    <CollapsibleTrigger asChild>
      <SidebarItem
        ref={ref}
        variant="ghost"
        className={cn("w-full gap-2 justify-start", className)}
        {...props}
      >
        {props.children}
      </SidebarItem>
    </CollapsibleTrigger>
  );
});
type SidebarGroupExpandProps = React.ComponentProps<typeof ChevronDownIcon>;
export const SidebarGroupExpand = React.forwardRef<
  React.ElementRef<typeof ChevronDownIcon>,
  SidebarGroupExpandProps
>(({ className, ...props }, ref) => {
  const open = React.useContext(SidebarGroupContext);
  const Icon = open ? ChevronUpIcon : ChevronDownIcon;

  return (
    <Icon ref={ref} size={16} className={cn("ml-auto", className)} {...props}>
      {props.children}
    </Icon>
  );
});

type SidebarGroupItems = React.HTMLAttributes<HTMLDivElement>;
export const SidebarGroupItems = React.forwardRef<
  HTMLDivElement,
  SidebarGroupItems
>(({ className, ...props }, ref) => {
  return (
    <CollapsibleContent ref={ref} className={cn("py-1", className)} {...props}>
      {props.children}
    </CollapsibleContent>
  );
});

type SidebarSection = React.HTMLAttributes<HTMLDivElement>;
export const SidebarSection = React.forwardRef<HTMLDivElement, SidebarSection>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("py-2", className)} {...props}>
        {props.children}
      </div>
    );
  }
);

type SidebarItemProps = React.ComponentProps<typeof Button>;
export const SidebarItem = React.forwardRef<
  React.ElementRef<typeof Button>,
  SidebarItemProps
>(({ className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="ghost"
      className={cn("w-full gap-2 justify-start", className)}
      {...props}
    >
      {props.children}
    </Button>
  );
});

type SidebarItemBadgeProps = React.HTMLAttributes<HTMLSpanElement>;
export const SidebarItemBadge = React.forwardRef<
  HTMLSpanElement,
  SidebarItemBadgeProps
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "bg-primary ml-auto rounded-full text-white text-xs px-2 py-1",
        className
      )}
      {...props}
    >
      {props.children}
    </span>
  );
});

type SidebarFooter = React.HTMLAttributes<HTMLDivElement>;
export const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooter>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute bottom-0 w-full flex items-center h-16 mt-auto px-4 bg-gray-900/5",
          className
        )}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);
