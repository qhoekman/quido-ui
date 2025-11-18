import { Button } from "@/components/button/button";
import { NavbarLink } from "@/features/website/components/navbar/navbar";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import React from "react";
import styled from "styled-components";
import { create } from "zustand";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;

const StyledNavbarMobileWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledNavbarMobileTriggerWrapper = styled.div`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledXIcon = styled(XIcon)`
  height: var(--spacing-6);
  width: var(--spacing-6);
  stroke: var(--color-background-fg);
`;

const StyledNavbarMobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNavbarMobileActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  padding-top: var(--spacing-6);
  padding-bottom: var(--spacing-6);
`;

const StyledNavbarMobileContent = styled(DialogPrimitive.Content)`
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

const StyledNavbarMobileGroupWrapper = styled.div`
  margin-top: var(--spacing-6);
  display: flow-root;
`;

const StyledNavbarMobileGroup = styled.div`
  margin-top: calc(var(--spacing-6) * -1);
  margin-bottom: calc(var(--spacing-6) * -1);

  > * + * {
    border-top: var(--border-width-default) solid
      hsl(from var(--color-border) h s l / 30%);
  }
`;

const StyledNavbarMobileItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  padding-top: var(--spacing-6);
  padding-bottom: var(--spacing-6);
`;

const StyledNavbarMobileLink = styled.a`
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
`;

const StyledNavbarMobileDropdownLabel = styled.span`
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

const StyledNavbarMobileDropdownGroup = styled.div`
  margin-left: var(--spacing-4);
  margin-top: var(--spacing-1);
`;

const StyledNavbarMobileDropdownLink = styled.a`
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
      <StyledNavbarMobileWrapper>{children}</StyledNavbarMobileWrapper>
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
      <StyledNavbarMobileTriggerWrapper>
        <DialogTrigger ref={ref} asChild {...props}>
          <Button type="button" variant="ghost" size="sm" className={className}>
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
        className={className}
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
    <StyledNavbarMobileHeader ref={ref} className={className} {...props}>
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
    <StyledNavbarMobileActions ref={ref} className={className} {...props}>
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
    <StyledNavbarMobileContent ref={ref} className={className} {...props}>
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
    <StyledNavbarMobileGroupWrapper>
      <StyledNavbarMobileGroup ref={ref} className={className} {...props}>
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
    <StyledNavbarMobileItems ref={ref} className={className} {...props}>
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
      href={href}
      className={className}
      {...props}
    >
      {children}
    </StyledNavbarMobileLink>
  );
});
NavbarMobileLink.displayName = "NavbarMobileLink";

const StyledNavbarMobileLogoWrapper = styled.div`
  margin: calc(var(--spacing-1-5) * -1);
  padding: var(--spacing-1-5);
`;

const NavbarMobileLogo = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a">
>(({ children, "aria-label": title, href, className, ...props }, ref) => {
  return (
    <StyledNavbarMobileLogoWrapper>
      <NavbarLink ref={ref} href={href} className={className} {...props}>
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
    <StyledNavbarMobileDropdownLabel ref={ref} className={className} {...props}>
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
    <StyledNavbarMobileDropdownGroup ref={ref} className={className} {...props}>
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
      href={href}
      className={className}
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
