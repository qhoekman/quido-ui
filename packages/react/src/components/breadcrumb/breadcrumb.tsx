import React from "react";
import styled from "styled-components";
import { ChevronRightIcon } from "lucide-react";

const StyledBreadcrumb = styled.nav`
  display: flex;
  align-items: center;
  font-size: var(--font-size-sm);
`;

const StyledBreadcrumbItem = styled.a`
  display: flex;
  align-items: center;
`;

const StyledBreadcrumbSeparator = styled.div`
  margin-left: var(--spacing-1);
  margin-right: var(--spacing-1);
`;

export type BreadcrumbProps = React.HTMLAttributes<HTMLDivElement>;

export const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ className, ...props }, ref) => {
    return (
      <StyledBreadcrumb
        ref={ref}
        className={className}
        aria-label="Breadcrumb"
        {...props}
      >
        {props.children}
      </StyledBreadcrumb>
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";

export type BreadcrumbItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const BreadcrumbItem = React.forwardRef<
  HTMLAnchorElement,
  BreadcrumbItemProps
>(({ className, ...props }, ref) => {
  return (
    <StyledBreadcrumbItem ref={ref} className={className} {...props}>
      {props.children}
    </StyledBreadcrumbItem>
  );
});
BreadcrumbItem.displayName = "BreadcrumbItem";

export type BreadcrumbSeparatorProps = React.HTMLAttributes<HTMLDivElement>;

export const BreadcrumbSeparator = React.forwardRef<
  HTMLDivElement,
  BreadcrumbSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <StyledBreadcrumbSeparator ref={ref} className={className} {...props}>
      {props.children || <ChevronRightIcon size={16} />}
    </StyledBreadcrumbSeparator>
  );
});
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
