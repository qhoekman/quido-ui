import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

type BreadcrumbProps = React.HTMLAttributes<HTMLDivElement>;
export const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn("flex items-center text-sm", className)}
        aria-label="Breadcrumb"
        {...props}
      >
        {props.children}
      </nav>
    );
  }
);

type BreadcrumbItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
export const BreadcrumbItem = React.forwardRef<
  HTMLAnchorElement,
  BreadcrumbItemProps
>(({ className, ...props }, ref) => {
  return (
    <a ref={ref} className={cn("flex items-center", className)} {...props}>
      {props.children}
    </a>
  );
});

type BreadcrumbSeparatorProps = React.HTMLAttributes<HTMLDivElement>;
export const BreadcrumbSeparator = React.forwardRef<
  HTMLDivElement,
  BreadcrumbSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("mx-1", className)} {...props}>
      {props.children || <ChevronRightIcon size={16} />}
    </div>
  );
});
