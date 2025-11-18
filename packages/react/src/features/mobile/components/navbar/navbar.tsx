import { ArrowLeft } from "lucide-react";
import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.div`
  width: 100%;
  z-index: var(--z-index-20);
  top: 0;
  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  font-size: var(--font-size-sm);
  color: var(--color-black);
  position: sticky;
`;

const StyledNavbarBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-bottom: var(--border-width-2) solid var(--color-border);
  background-color: var(--color-muted);
`;

const StyledNavbarContent = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  overflow: hidden;
  padding-left: max(var(--spacing-2), env(safe-area-inset-left));
  padding-right: max(var(--spacing-2), env(safe-area-inset-right));
  height: var(--spacing-11);
  justify-content: space-between;
`;

const StyledNavbarTitle = styled.h1`
  white-space: nowrap;
  display: block;
  line-height: var(--line-height-tight);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-background-fg);
`;

const StyledNavbarSubtitle = styled.span`
  font-weight: var(--font-weight-normal);
  color: var(--color-muted-fg);
  display: block;
  line-height: var(--line-height-none);
  font-size: 0.625rem;
  opacity: 0.5;
`;

const StyledNavbarLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-inline-end: var(--spacing-2);
`;

const StyledNavbarLink = styled.a`
  color: var(--color-primary);
  display: inline-flex;
  gap: var(--spacing-1);
  justify-content: center;
  align-items: center;
  user-select: none;
  height: 100%;
  max-height: var(--spacing-12);
  cursor: pointer;
  transition-duration: 300ms;

  &:dir(rtl) {
    flex-direction: row-reverse;
  }

  &:active {
    opacity: 0.3;
    transition-duration: 0ms;
  }
`;

const Navbar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledNavbar ref={ref} className={className} {...props}>
      <StyledNavbarBackground />
      {children}
    </StyledNavbar>
  );
});
Navbar.displayName = "Navbar";

const NavbarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledNavbarContent ref={ref} className={className} {...props}>
      {children}
    </StyledNavbarContent>
  );
});
NavbarContent.displayName = "NavbarContent";

const NavbarTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledNavbarTitle ref={ref} className={className} {...props}>
      {children}
    </StyledNavbarTitle>
  );
});
NavbarTitle.displayName = "NavbarTitle";

const NavbarSubtitle = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledNavbarSubtitle ref={ref} className={className} {...props}>
      {children}
    </StyledNavbarSubtitle>
  );
});
NavbarSubtitle.displayName = "NavbarSubtitle";

const NavbarLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ children, className, href = "#", ...props }, ref) => {
  return (
    <StyledNavbarLinkWrapper>
      <StyledNavbarLink ref={ref} href={href} className={className} {...props}>
        {children}
      </StyledNavbarLink>
    </StyledNavbarLinkWrapper>
  );
});
NavbarLink.displayName = "NavbarLink";

const NavbarBack = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, children, href = "#", ...props }, ref) => {
  return (
    <NavbarLink ref={ref} href={href} className={className} {...props}>
      {!children && (
        <>
          <ArrowLeft />
          Back
        </>
      )}
      {children}
    </NavbarLink>
  );
});
NavbarBack.displayName = "NavbarBack";

export {
  Navbar,
  NavbarBack,
  NavbarContent,
  NavbarLink,
  NavbarSubtitle,
  NavbarTitle,
};
