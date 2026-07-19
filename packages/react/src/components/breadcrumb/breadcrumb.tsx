import React from "react";
import styled, { css } from "styled-components";
import { ChevronRightIcon } from "lucide-react";

const breadcrumbStyles = css`
  display: flex;
  align-items: center;
  gap: var(--spacing-1-5);
  font-size: var(--font-size-sm);
  color: var(--color-muted-fg);

  @media (width >= 640px) {
    gap: var(--spacing-2-5);
  }
`;

const StyledBreadcrumb = styled.nav`
  ${breadcrumbStyles}
`;

const breadcrumbItemStyles = css`
  display: flex;
  align-items: center;
  color: inherit;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  text-decoration: none;
  padding-bottom: var(--spacing-1);
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--color-background-fg);
  }
`;

const StyledBreadcrumbItem = styled.a`
  ${breadcrumbItemStyles}
`;

const breadcrumbSeparatorStyles = css`
  display: flex;
  align-items: center;
  margin-left: var(--spacing-1);
  margin-right: var(--spacing-1);

  svg {
    width: var(--spacing-3-5);
    height: var(--spacing-3-5);
  }
`;

const StyledBreadcrumbSeparator = styled.div`
  ${breadcrumbSeparatorStyles}
`;

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

export type BreadcrumbProps = React.HTMLAttributes<HTMLDivElement>;

export const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ className, ...props }, ref) => {
    return (
      <StyledBreadcrumb
        data-testid="breadcrumb"
        ref={ref}
        className={cx("q-breadcrumb", className)}
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
    <StyledBreadcrumbItem
      data-testid="breadcrumb__item"
      ref={ref}
      className={cx("q-breadcrumb-item", className)}
      {...props}
    >
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
    <StyledBreadcrumbSeparator
      data-testid="breadcrumb__separator"
      ref={ref}
      className={cx("q-breadcrumb-separator", className)}
      role="presentation"
      aria-hidden="true"
      {...props}
    >
      {props.children || <ChevronRightIcon />}
    </StyledBreadcrumbSeparator>
  );
});
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
