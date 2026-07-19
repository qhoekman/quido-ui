import { Button } from "@/components/button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown/dropdown";
import { ChevronDown } from "lucide-react";
import React from "react";
import styled, { css } from "styled-components";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const navbarHeaderStyles = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: var(--z-index-50);
  border-bottom: var(--border-width-default) solid var(--color-border);
  padding: var(--spacing-6);
`;

const StyledNavbarHeader = styled.header`
  ${navbarHeaderStyles}
`;

const navbarNavStyles = css`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  max-width: 80rem;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-8);

  @media (min-width: 1024px) {
    padding-left: var(--spacing-8);
    padding-right: var(--spacing-8);
  }
`;

const StyledNavbarNav = styled.nav`
  ${navbarNavStyles}
`;

const navbarItemsStyles = css`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: var(--spacing-8);
  }
`;

const StyledNavbarItems = styled.div`
  ${navbarItemsStyles}
`;

const navbarLinkStyles = css`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-6);
  color: var(--color-background-fg);
`;

const StyledNavbarLink = styled.a`
  ${navbarLinkStyles}
`;

const navbarDropdownChevronStyles = css`
  margin-left: var(--spacing-2);
  height: var(--spacing-5);
  width: var(--spacing-5);
  stroke: var(--color-muted-fg);
`;

const StyledChevronDown = styled(ChevronDown)`
  ${navbarDropdownChevronStyles}
`;

const navbarDropdownContentStyles = css`
  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
  padding-left: 0;
  padding-right: 0;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow-lg);
  border-radius: var(--border-radius-lg);
  width: 16rem;
  margin-top: var(--spacing-2);
`;

const StyledNavbarDropdownContent = styled(DropdownMenuContent)`
  ${navbarDropdownContentStyles}
`;

const navbarDropdownLinkStyles = css`
  display: block;
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  padding-top: var(--spacing-2);
  padding-bottom: var(--spacing-2);
  width: 100%;
  background-color: transparent;

  &.is-active {
    background-color: var(--color-primary);
  }

  &:hover {
    background-color: var(--color-muted);
  }
`;

const StyledNavbarDropdownLink = styled.a`
  ${navbarDropdownLinkStyles}
`;

const navbarActionsStyles = css`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    gap: var(--spacing-4);
  }
`;

const StyledNavbarActions = styled.div`
  ${navbarActionsStyles}
`;

const navbarBrandStyles = css`
  display: flex;
  margin-right: var(--spacing-8);

  @media (min-width: 1024px) {
    flex: 1;
  }
`;

const StyledNavbarBrand = styled.div`
  ${navbarBrandStyles}
`;

const navbarLogoStyles = css`
  margin: calc(var(--spacing-1-5) * -1);
  padding: var(--spacing-1-5);
`;

const StyledNavbarLogo = styled.a`
  ${navbarLogoStyles}
`;

const Navbar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"nav">
>(({ children, className, "aria-label": ariaLabel, ...props }, ref) => {
  return (
    <StyledNavbarHeader className={cx("q-navbar-header", className)}>
      <StyledNavbarNav
        ref={ref}
        data-testid="navbar"
        className="q-navbar"
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </StyledNavbarNav>
    </StyledNavbarHeader>
  );
});
Navbar.displayName = "Navbar";

const NavbarItems = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledNavbarItems
      ref={ref}
      data-testid="navbar__items"
      className={cx("q-navbar-items", className)}
      {...props}
    >
      {children}
    </StyledNavbarItems>
  );
});
NavbarItems.displayName = "NavbarItems";

const NavbarLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href, children, ...props }, ref) => {
  return (
    <Button variant="ghost" asChild>
      <StyledNavbarLink
        ref={ref}
        data-testid="navbar__link"
        href={href}
        className={cx("q-navbar-link", className)}
        {...props}
      >
        {children}
      </StyledNavbarLink>
    </Button>
  );
});
NavbarLink.displayName = "NavbarLink";

const NavbarDropdown: React.FC<
  React.ComponentPropsWithoutRef<typeof DropdownMenu>
> = ({ children, ...props }) => {
  return <DropdownMenu {...props}>{children}</DropdownMenu>;
};
NavbarDropdown.displayName = "NavbarDropdown";

const NavbarDropdownTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuTrigger>
>(({ children, className, ...props }, ref) => {
  return (
    <DropdownMenuTrigger ref={ref} asChild {...props}>
      <Button
        variant={"ghost"}
        data-testid="navbar__dropdown-trigger"
        className={className}
      >
        {children}
        <StyledChevronDown className="q-navbar-dropdown-chevron" />
      </Button>
    </DropdownMenuTrigger>
  );
});
NavbarDropdownTrigger.displayName = "NavbarDropdownTrigger";

const NavbarDropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuContent>
>(({ children, className, ...props }, ref) => {
  return (
    <StyledNavbarDropdownContent
      ref={ref}
      data-testid="navbar__dropdown-content"
      className={cx("q-navbar-dropdown-content", className)}
      {...props}
    >
      {children}
    </StyledNavbarDropdownContent>
  );
});
NavbarDropdownContent.displayName = "NavbarDropdownContent";

type NavbarDropdownLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  isActive?: boolean;
};

const NavbarDropdownLink = React.forwardRef<
  HTMLAnchorElement,
  NavbarDropdownLinkProps
>(({ className, href = "#", isActive = false, children, ...props }, ref) => {
  return (
    <DropdownMenuItem key={href} style={{ paddingLeft: 0, paddingRight: 0 }}>
      <StyledNavbarDropdownLink
        ref={ref}
        data-testid="navbar__dropdown-link"
        href={href}
        className={cx(
          "q-navbar-dropdown-link",
          isActive ? "is-active" : undefined,
          className
        )}
        {...props}
      >
        {children}
      </StyledNavbarDropdownLink>
    </DropdownMenuItem>
  );
});
NavbarDropdownLink.displayName = "NavbarDropdownLink";

const NavbarActions = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledNavbarActions
      ref={ref}
      data-testid="navbar__actions"
      className={cx("q-navbar-actions", className)}
      {...props}
    >
      {children}
    </StyledNavbarActions>
  );
});
NavbarActions.displayName = "NavbarActions";

const NavbarBrand = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledNavbarBrand
      ref={ref}
      data-testid="navbar__brand"
      className={cx("q-navbar-brand", className)}
      {...props}
    >
      {children}
    </StyledNavbarBrand>
  );
});
NavbarBrand.displayName = "NavbarBrand";

const NavbarLogo = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ children, "aria-label": title, href, className, ...props }, ref) => {
  return (
    <StyledNavbarLogo
      ref={ref}
      data-testid="navbar__logo"
      href={href}
      className={cx("q-navbar-logo", className)}
      {...props}
    >
      {title && <span className="sr-only">{title}</span>}
      {children}
    </StyledNavbarLogo>
  );
});
NavbarLogo.displayName = "NavbarLogo";

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
