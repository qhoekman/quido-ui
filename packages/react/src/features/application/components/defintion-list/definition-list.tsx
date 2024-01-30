import { cn } from "@/lib/utils";
import React from "react";

const DefinitionList = React.forwardRef<
  HTMLDListElement,
  React.ComponentPropsWithoutRef<"dl">
>(({ children, className, ...props }, ref) => {
  return (
    <dl
      ref={ref}
      className={cn("divide-y divide-neutral-100", className)}
      {...props}
    >
      {children}
    </dl>
  );
});
DefinitionList.displayName = "DefinitionList";

const DefintionListItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
DefintionListItem.displayName = "DefintionListItem";

const DefinitionTerm = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"dt">
>(({ children, className, ...props }, ref) => {
  return (
    <dt
      ref={ref}
      className={cn("text-sm font-medium leading-6 text-gray-900", className)}
      {...props}
    >
      {children}
    </dt>
  );
});
DefinitionTerm.displayName = "DefinitionTerm";

const DefinitionDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"dd">
>(({ children, className, ...props }, ref) => {
  return (
    <dd
      ref={ref}
      className={cn(
        "mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0",
        className
      )}
      {...props}
    >
      {children}
    </dd>
  );
});
DefinitionDescription.displayName = "DefinitionDescription";

export {
  DefinitionDescription,
  DefinitionList,
  DefinitionTerm,
  DefintionListItem,
};
