import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import React from "react";
import styled, { css } from "styled-components";
import { clsx } from "clsx";

import { ButtonProps, buttonVariants } from "@/components/button/button";

const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 0 none;
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: colors 0.3s;
  outline: none;
  box-shadow: 0 0 0 0 var(--color-background);
  text-decoration: none;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &.variant--primary {
    background-color: var(--color-primary);
    color: var(--color-primary-fg);

    &:hover {
      background-color: hsl(from var(--color-primary) h s l / 90%);
    }
  }

  &.variant--secondary {
    background-color: var(--color-secondary);
    color: var(--color-secondary-fg);

    &:hover {
      background-color: hsl(from var(--color-secondary) h s l / 90%);
    }
  }

  &.variant--destructive {
    background-color: var(--color-danger);
    color: var(--color-danger-fg);

    &:hover {
      background-color: hsl(from var(--color-danger) h s l / 90%);
    }
  }

  &.variant--outline {
    border: var(--border-width-default) solid var(--color-neutral-200);
    background-color: transparent;

    &:hover {
      background-color: var(--color-neutral-100);
      color: var(--color-background-fg);
    }
  }

  &.variant--ghost {
    &:hover {
      background-color: var(--color-neutral-100);
      color: hsl(from var(--color-background-fg) h s l / 90%);
    }
  }

  &.variant--link {
    color: var(--color-primary);
    text-underline-offset: var(--spacing-4);

    &:hover {
      text-decoration: underline;
    }
  }

  &.size--md {
    height: var(--spacing-10);
    padding-left: var(--spacing-4);
    padding-right: var(--spacing-4);
    padding-top: var(--spacing-2);
    padding-bottom: var(--spacing-2);
  }

  &.size--sm {
    height: var(--spacing-9);
    border-radius: var(--border-radius-md);
    padding-left: var(--spacing-3);
    padding-right: var(--spacing-3);
  }

  &.size--lg {
    height: var(--spacing-11);
    border-radius: var(--border-radius-md);
    padding-left: var(--spacing-8);
    padding-right: var(--spacing-8);
  }

  &.size--icon {
    height: var(--spacing-10);
    width: var(--spacing-10);
    padding: 0;
  }
`;

const StyledPagination = styled.nav`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const StyledPaginationContent = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-1);
`;

const StyledPaginationItem = styled.li``;

const StyledPaginationLink = styled.a`
  ${buttonStyles}

  &.gap-1 {
    gap: var(--spacing-1);
  }

  &.pl-2-5 {
    padding-left: var(--spacing-2-5);
  }

  &.pr-2-5 {
    padding-right: var(--spacing-2-5);
  }
`;

const StyledPaginationEllipsis = styled.span`
  display: flex;
  height: var(--spacing-9);
  width: var(--spacing-9);
  align-items: center;
  justify-content: center;
`;

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <StyledPagination
    role="navigation"
    aria-label="pagination"
    className={className}
    {...props}
  />
);

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <StyledPaginationContent ref={ref} className={className} {...props} />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <StyledPaginationItem ref={ref} className={className} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => {
  const classes = buttonVariants({
    variant: isActive ? "outline" : "ghost",
    size: size === "default" ? "md" : size,
    className,
  });

  return (
    <StyledPaginationLink
      aria-current={isActive ? "page" : undefined}
      className={classes}
      {...props}
    />
  );
};
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="md"
      className={clsx("gap-1 pl-2-5", className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span>Previous</span>
    </PaginationLink>
  );
};
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="md"
      className={clsx("gap-1 pr-2-5", className)}
      {...props}
    >
      <span>Next</span>
      <ChevronRight className="h-4 w-4" />
    </PaginationLink>
  );
};
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <StyledPaginationEllipsis aria-hidden className={className} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </StyledPaginationEllipsis>
);

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
