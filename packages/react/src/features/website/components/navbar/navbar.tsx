import { Button } from "@/components/button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown/dropdown";
import { ChevronDown } from "lucide-react";
import React from "react";
import styled from "styled-components";

const StyledNavbarHeader = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: var(--z-index-50);
  border-bottom: var(--border-width-default) solid var(--color-border);
  padding: var(--spacing-6);
`;

const StyledNavbarNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  max-width: 80rem;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    padding-left: var(--spacing-8);
    padding-right: var(--spacing-8);
  }
`;

const StyledNavbarItems = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: var(--spacing-6);
  }
`;

const StyledNavbarLink = styled.a`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-6);
  color: var(--color-background-fg);
`;

const StyledChevronDown = styled(ChevronDown)`
  margin-left: var(--spacing-2);
  height: var(--spacing-5);
  width: var(--spacing-5);
  stroke: var(--color-muted-fg);
`;

const StyledNavbarDropdownContent = styled(DropdownMenuContent)`
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

const StyledNavbarDropdownLink = styled.a<{ $isActive?: boolean }>`
  display: block;
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  padding-top: var(--spacing-2);
  padding-bottom: var(--spacing-2);
  width: 100%;
  background-color: ${(props) =>
    props.$isActive ? "var(--color-primary)" : "transparent"};

  &:hover {
    background-color: var(--color-muted);
  }
`;

const StyledNavbarActions = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    gap: var(--spacing-4);
  }
`;

const StyledNavbarBrand = styled.div`
  display: flex;

  @media (min-width: 1024px) {
    flex: 1;
  }
`;

const StyledNavbarLogo = styled.a`
  margin: calc(var(--spacing-1-5) * -1);
  padding: var(--spacing-1-5);
`;

const Navbar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"nav">
>(({ children, className, "aria-label": ariaLabel, ...props }, ref) => {
  return (
    <StyledNavbarHeader className={className}>
      <StyledNavbarNav ref={ref} aria-label={ariaLabel} {...props}>
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
    <StyledNavbarItems ref={ref} className={className} {...props}>
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
      <StyledNavbarLink ref={ref} href={href} className={className} {...props}>
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
      <Button variant={"ghost"} className={className}>
        {children}
        <StyledChevronDown />
      </Button>
    </DropdownMenuTrigger>
  );
});
NavbarDropdownTrigger.displayName = "NavbarDropdownTrigger";

const NavbarDropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuContent>
>(({ children, ...props }, ref) => {
  return (
    <StyledNavbarDropdownContent ref={ref} {...props}>
      {children}
    </StyledNavbarDropdownContent>
  );
});
NavbarDropdownContent.displayName = "NavbarDropdownContent";

const NavbarDropdownLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href = "#", children, ...props }, ref) => {
  const isActive = false;

  return (
    <DropdownMenuItem key={href} className="px-0">
      <StyledNavbarDropdownLink
        ref={ref}
        href={href}
        $isActive={isActive}
        className={className}
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
    <StyledNavbarActions ref={ref} className={className} {...props}>
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
    <StyledNavbarBrand ref={ref} className={className} {...props}>
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
    <StyledNavbarLogo ref={ref} href={href} className={className} {...props}>
      <span className="sr-only">{title}</span>
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
