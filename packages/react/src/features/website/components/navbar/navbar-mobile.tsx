import { Button } from "@/components/button/button";
import { NavbarLink } from "@/features/website/components/navbar/navbar";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import React from "react";
import styled, { css } from "styled-components";
import { create } from "zustand";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;

const navbarMobileWrapperStyles = css`
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledNavbarMobileWrapper = styled.div`
  ${navbarMobileWrapperStyles}
`;

const navbarMobileTriggerWrapperStyles = css`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledNavbarMobileTriggerWrapper = styled.div`
  ${navbarMobileTriggerWrapperStyles}
`;

const navbarMobileCloseIconStyles = css`
  height: var(--spacing-6);
  width: var(--spacing-6);
  stroke: var(--color-background-fg);
`;

const StyledXIcon = styled(XIcon)`
  ${navbarMobileCloseIconStyles}
`;

const navbarMobileHeaderStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNavbarMobileHeader = styled.div`
  ${navbarMobileHeaderStyles}
`;

const navbarMobileActionsStyles = css`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  padding-top: var(--spacing-6);
  padding-bottom: var(--spacing-6);
`;

const StyledNavbarMobileActions = styled.div`
  ${navbarMobileActionsStyles}
`;

const navbarMobileContentStyles = css`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: var(--z-index-50);
  width: 100%;
  overflow-y: auto;
  background-color: var(--color-white);
  padding-left: var(--spacing-6);
  padding-right: var(--spacing-6);
  padding-top: var(--spacing-6);
  padding-bottom: var(--spacing-6);

  @media (min-width: 640px) {
    max-width: 24rem;
    box-shadow: 0 0 0 1px hsl(from var(--color-background-fg) h s l / 10%);
  }
`;

const StyledNavbarMobileContent = styled(DialogPrimitive.Content)`
  ${navbarMobileContentStyles}
`;

const navbarMobileGroupWrapperStyles = css`
  margin-top: var(--spacing-6);
  display: flow-root;
`;

const StyledNavbarMobileGroupWrapper = styled.div`
  ${navbarMobileGroupWrapperStyles}
`;

const navbarMobileGroupStyles = css`
  margin-top: calc(var(--spacing-6) * -1);
  margin-bottom: calc(var(--spacing-6) * -1);

  > * + * {
    border-top: var(--border-width-default) solid
      hsl(from var(--color-border) h s l / 30%);
  }
`;

const StyledNavbarMobileGroup = styled.div`
  ${navbarMobileGroupStyles}
`;

const navbarMobileItemsStyles = css`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  padding-top: var(--spacing-6);
  padding-bottom: var(--spacing-6);
`;

const StyledNavbarMobileItems = styled.div`
  ${navbarMobileItemsStyles}
`;

const navbarMobileLinkStyles = css`
  margin-left: calc(var(--spacing-3) * -1);
  margin-right: calc(var(--spacing-3) * -1);
  display: block;
  border-radius: var(--border-radius-lg);
  padding-left: var(--spacing-3);
  padding-right: var(--spacing-3);
  padding-top: var(--spacing-2);
  padding-bottom: var(--spacing-2);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-7);
  color: var(--color-background-fg);

  &:hover {
    background-color: var(--color-muted);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }
`;

const StyledNavbarMobileLink = styled.a`
  ${navbarMobileLinkStyles}
`;

const navbarMobileDropdownLabelStyles = css`
  margin-left: calc(var(--spacing-3) * -1);
  margin-right: calc(var(--spacing-3) * -1);
  display: block;
  border-radius: var(--border-radius-lg);
  padding-left: var(--spacing-3);
  padding-right: var(--spacing-3);
  padding-top: var(--spacing-2);
  padding-bottom: var(--spacing-2);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-7);
  color: var(--color-background-fg);
`;

const StyledNavbarMobileDropdownLabel = styled.span`
  ${navbarMobileDropdownLabelStyles}
`;

const navbarMobileDropdownGroupStyles = css`
  margin-left: var(--spacing-4);
  margin-top: var(--spacing-1);
`;

const StyledNavbarMobileDropdownGroup = styled.div`
  ${navbarMobileDropdownGroupStyles}
`;

const navbarMobileDropdownLinkStyles = css`
  margin-left: calc(var(--spacing-3) * -1);
  margin-right: calc(var(--spacing-3) * -1);
  display: block;
  border-radius: var(--border-radius-lg);
  padding-left: var(--spacing-3);
  padding-right: var(--spacing-3);
  padding-top: var(--spacing-2);
  padding-bottom: var(--spacing-2);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-7);
  color: var(--color-muted-fg);

  &:hover {
    background-color: var(--color-muted);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }
`;

const StyledNavbarMobileDropdownLink = styled.a`
  ${navbarMobileDropdownLinkStyles}
`;

const useNavbarMobile = create<{
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (open: boolean) => set({ mobileMenuOpen: open }),
}));

const NavbarMobile: React.FC<
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>
> = ({ children, ...props }) => {
  const { mobileMenuOpen, setMobileMenuOpen } = useNavbarMobile();

  return (
    <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} {...props}>
      <StyledNavbarMobileWrapper
        data-testid="navbar-mobile"
        className="q-navbar-mobile-wrapper"
      >
        {children}
      </StyledNavbarMobileWrapper>
    </Dialog>
  );
};
NavbarMobile.displayName = "NavbarMobile";

const NavbarMobileTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(
  (
    { className, children, "aria-label": title = "Open menu", ...props },
    ref
  ) => {
    return (
      <StyledNavbarMobileTriggerWrapper className="q-navbar-mobile-trigger-wrapper">
        <DialogTrigger ref={ref} asChild {...props}>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            data-testid="navbar-mobile__trigger"
            className={cx("q-navbar-mobile-trigger", className)}
          >
            <span className="sr-only">{title}</span>
            {children}
          </Button>
        </DialogTrigger>
      </StyledNavbarMobileTriggerWrapper>
    );
  }
);
NavbarMobileTrigger.displayName = "NavbarMobileTrigger";

const NavbarMobileClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Close ref={ref} asChild>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        data-testid="navbar-mobile__close"
        className={cx("q-navbar-mobile-close", className)}
        {...props}
      >
        <StyledXIcon aria-hidden="true" />
        <span className="sr-only">Close</span>
      </Button>
    </DialogPrimitive.Close>
  );
});
NavbarMobileClose.displayName = "NavbarMobileClose";

const NavbarMobileHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledNavbarMobileHeader
      ref={ref}
      data-testid="navbar-mobile__header"
      className={cx("q-navbar-mobile-header", className)}
      {...props}
    >
      {children}
    </StyledNavbarMobileHeader>
  );
});
NavbarMobileHeader.displayName = "NavbarMobileHeader";

const NavbarMobileActions = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledNavbarMobileActions
      ref={ref}
      data-testid="navbar-mobile__actions"
      className={cx("q-navbar-mobile-actions", className)}
      {...props}
    >
      {children}
    </StyledNavbarMobileActions>
  );
});
NavbarMobileActions.displayName = "NavbarMobileActions";

const NavbarMobileContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, className, ...props }, ref) => {
  return (
    <StyledNavbarMobileContent
      ref={ref}
      data-testid="navbar-mobile__content"
      className={cx("q-navbar-mobile-content", className)}
      {...props}
    >
      {children}
    </StyledNavbarMobileContent>
  );
});
NavbarMobileContent.displayName = "NavbarMobileContent";

const NavbarMobileGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledNavbarMobileGroupWrapper className="q-navbar-mobile-group-wrapper">
      <StyledNavbarMobileGroup
        ref={ref}
        data-testid="navbar-mobile__group"
        className={cx("q-navbar-mobile-group", className)}
        {...props}
      >
        {children}
      </StyledNavbarMobileGroup>
    </StyledNavbarMobileGroupWrapper>
  );
});
NavbarMobileGroup.displayName = "NavbarMobileGroup";

const NavbarMobileItems = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledNavbarMobileItems
      ref={ref}
      data-testid="navbar-mobile__items"
      className={cx("q-navbar-mobile-items", className)}
      {...props}
    >
      {children}
    </StyledNavbarMobileItems>
  );
});
NavbarMobileItems.displayName = "NavbarMobileItems";

const NavbarMobileLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href, children, ...props }, ref) => {
  return (
    <StyledNavbarMobileLink
      ref={ref}
      data-testid="navbar-mobile__link"
      href={href}
      className={cx("q-navbar-mobile-link", className)}
      {...props}
    >
      {children}
    </StyledNavbarMobileLink>
  );
});
NavbarMobileLink.displayName = "NavbarMobileLink";

const navbarMobileLogoWrapperStyles = css`
  margin: calc(var(--spacing-1-5) * -1);
  padding: var(--spacing-1-5);
`;

const StyledNavbarMobileLogoWrapper = styled.div`
  ${navbarMobileLogoWrapperStyles}
`;

const NavbarMobileLogo = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ children, "aria-label": title, href, className, ...props }, ref) => {
  return (
    <StyledNavbarMobileLogoWrapper className="q-navbar-mobile-logo-wrapper">
      <NavbarLink
        ref={ref}
        data-testid="navbar-mobile__logo"
        href={href}
        className={cx("q-navbar-mobile-logo", className)}
        {...props}
      >
        <span className="sr-only">{title}</span>
        {children}
      </NavbarLink>
    </StyledNavbarMobileLogoWrapper>
  );
});
NavbarMobileLogo.displayName = "NavbarMobileLogo";

const NavbarMobileDropdownLabel = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, children, ...props }, ref) => {
  return (
    <StyledNavbarMobileDropdownLabel
      ref={ref}
      data-testid="navbar-mobile__dropdown-label"
      className={cx("q-navbar-mobile-dropdown-label", className)}
      {...props}
    >
      {children}
    </StyledNavbarMobileDropdownLabel>
  );
});
NavbarMobileDropdownLabel.displayName = "NavbarMobileDropdownLabel";

const NavbarMobileDropdownGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <StyledNavbarMobileDropdownGroup
      ref={ref}
      data-testid="navbar-mobile__dropdown-group"
      className={cx("q-navbar-mobile-dropdown-group", className)}
      {...props}
    >
      {children}
    </StyledNavbarMobileDropdownGroup>
  );
});
NavbarMobileDropdownGroup.displayName = "NavbarMobileDropdownGroup";

const NavbarMobileDropdownLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href, children, ...props }, ref) => {
  return (
    <StyledNavbarMobileDropdownLink
      ref={ref}
      data-testid="navbar-mobile__dropdown-link"
      href={href}
      className={cx("q-navbar-mobile-dropdown-link", className)}
      {...props}
    >
      {children}
    </StyledNavbarMobileDropdownLink>
  );
});
NavbarMobileDropdownLink.displayName = "NavbarMobileDropdownLink";

export {
  NavbarMobile,
  NavbarMobileActions,
  NavbarMobileClose,
  NavbarMobileContent,
  NavbarMobileDropdownGroup,
  NavbarMobileDropdownLabel,
  NavbarMobileDropdownLink,
  NavbarMobileGroup,
  NavbarMobileHeader,
  NavbarMobileItems,
  NavbarMobileLink,
  NavbarMobileLogo,
  NavbarMobileTrigger,
};
