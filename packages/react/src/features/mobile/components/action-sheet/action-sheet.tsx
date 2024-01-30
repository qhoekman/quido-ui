import * as React from "react";
import { Drawer as ActionSheetPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const ActionSheet = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof ActionSheetPrimitive.Root>) => (
  <ActionSheetPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
ActionSheet.displayName = "ActionSheet";

const ActionSheetTrigger = ActionSheetPrimitive.Trigger;

const ActionSheetPortal = ActionSheetPrimitive.Portal;

const ActionSheetClose = ActionSheetPrimitive.Close;

const ActionSheetOverlay = React.forwardRef<
  React.ElementRef<typeof ActionSheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof ActionSheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <ActionSheetPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
ActionSheetOverlay.displayName = ActionSheetPrimitive.Overlay.displayName;

const ActionSheetContent = React.forwardRef<
  React.ElementRef<typeof ActionSheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ActionSheetPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ActionSheetPortal>
    <ActionSheetOverlay />
    <ActionSheetPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-neutral-100" />
      {children}
    </ActionSheetPrimitive.Content>
  </ActionSheetPortal>
));
ActionSheetContent.displayName = "ActionSheetContent";

const ActionSheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
);
ActionSheetHeader.displayName = "ActionSheetHeader";

const ActionSheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
);
ActionSheetFooter.displayName = "ActionSheetFooter";

const ActionSheetTitle = React.forwardRef<
  React.ElementRef<typeof ActionSheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ActionSheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ActionSheetPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
ActionSheetTitle.displayName = ActionSheetPrimitive.Title.displayName;

const ActionSheetDescription = React.forwardRef<
  React.ElementRef<typeof ActionSheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ActionSheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ActionSheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-foreground", className)}
    {...props}
  />
));
ActionSheetDescription.displayName =
  ActionSheetPrimitive.Description.displayName;

export {
  ActionSheet,
  ActionSheetClose,
  ActionSheetContent,
  ActionSheetDescription,
  ActionSheetFooter,
  ActionSheetHeader,
  ActionSheetOverlay,
  ActionSheetPortal,
  ActionSheetTitle,
  ActionSheetTrigger,
};
