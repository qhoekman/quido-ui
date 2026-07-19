import { ArrowLeft } from "lucide-react";
import React from "react";
import styled, { css } from "styled-components";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const navbarStyles = css`
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

const StyledNavbar = styled.div`
  ${navbarStyles}
`;

const navbarBackgroundStyles = css`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-bottom: var(--border-width-2) solid var(--color-border);
  background-color: var(--color-muted);
`;

const StyledNavbarBackground = styled.div`
  ${navbarBackgroundStyles}
`;

const navbarContentStyles = css`
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

const StyledNavbarContent = styled.div`
  ${navbarContentStyles}
`;

const navbarTitleStyles = css`
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

const StyledNavbarTitle = styled.h1`
  ${navbarTitleStyles}
`;

const navbarSubtitleStyles = css`
  font-weight: var(--font-weight-normal);
  color: var(--color-muted-fg);
  display: block;
  line-height: var(--line-height-none);
  font-size: 0.625rem;
  opacity: 0.5;
`;

const StyledNavbarSubtitle = styled.span`
  ${navbarSubtitleStyles}
`;

const navbarLinkWrapperStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-inline-end: var(--spacing-2);
`;

const StyledNavbarLinkWrapper = styled.div`
  ${navbarLinkWrapperStyles}
`;

const navbarLinkStyles = css`
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

const StyledNavbarLink = styled.a`
  ${navbarLinkStyles}
`;

const Navbar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledNavbar
      ref={ref}
      data-testid="navbar"
      className={cx("q-navbar", className)}
      {...props}
    >
      <StyledNavbarBackground className="q-navbar-background" />
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
    <StyledNavbarContent
      ref={ref}
      data-testid="navbar__content"
      className={cx("q-navbar-content", className)}
      {...props}
    >
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
    <StyledNavbarTitle
      ref={ref}
      data-testid="navbar__title"
      className={cx("q-navbar-title", className)}
      {...props}
    >
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
    <StyledNavbarSubtitle
      ref={ref}
      data-testid="navbar__subtitle"
      className={cx("q-navbar-subtitle", className)}
      {...props}
    >
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
    <StyledNavbarLinkWrapper className="q-navbar-link-wrapper">
      <StyledNavbarLink
        ref={ref}
        href={href}
        data-testid="navbar__link"
        className={cx("q-navbar-link", className)}
        {...props}
      >
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
    <NavbarLink
      ref={ref}
      href={href}
      data-testid="navbar__back"
      className={cx("q-navbar-back", className)}
      {...props}
    >
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
