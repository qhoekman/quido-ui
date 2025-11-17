import { Button } from "@/components/button/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/collapsible/collapsible";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  min-height: var(--size-svh);
  height: 100%;
`;

const StyledSidebarBrand = styled.div`
  display: flex;
  align-items: center;
  height: var(--spacing-16);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-tight);
`;

const StyledSidebarGroupHeader = styled.h2`
  margin-bottom: var(--spacing-2);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-tight);
`;

const StyledSidebarGroupItems = styled(CollapsibleContent)`
  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
`;

const StyledSidebarSection = styled.div`
  padding-top: var(--spacing-2);
  padding-bottom: var(--spacing-2);
`;

const StyledSidebarItemBadge = styled.span`
  background-color: var(--color-primary);
  margin-left: auto;
  border-radius: var(--border-radius-full);
  color: var(--color-white);
  font-size: var(--font-size-xs);
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
`;

const StyledSidebarFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: var(--spacing-16);
  margin-top: auto;
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  background-color: hsl(from var(--color-gray-900) h s l / 5%);
`;

const StyledSidebarItem = styled(Button)`
  width: 100%;
  gap: var(--spacing-2);
  justify-content: flex-start;
`;

const StyledSidebarGroupExpand = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

type SidebarProps = React.HTMLAttributes<HTMLDivElement>;
export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, ...props }, ref) => {
    return (
      <StyledSidebar ref={ref} className={className} {...props}>
        {props.children}
      </StyledSidebar>
    );
  }
);
Sidebar.displayName = "Sidebar";

type SidebarBrand = React.HTMLAttributes<HTMLDivElement>;
export const SidebarBrand = React.forwardRef<HTMLDivElement, SidebarBrand>(
  ({ className, ...props }, ref) => {
    return (
      <StyledSidebarBrand ref={ref} className={className} {...props}>
        {props.children}
      </StyledSidebarBrand>
    );
  }
);
SidebarBrand.displayName = "SidebarBrand";

type SidebarGroupHeader = React.HTMLAttributes<HTMLHeadingElement>;
export const SidebarGroupHeader = React.forwardRef<
  HTMLHeadingElement,
  SidebarGroupHeader
>(({ className, ...props }, ref) => {
  return (
    <StyledSidebarGroupHeader ref={ref} className={className} {...props}>
      {props.children}
    </StyledSidebarGroupHeader>
  );
});
SidebarGroupHeader.displayName = "SidebarGroupHeader";

type SidebarGroup = React.HTMLAttributes<HTMLDivElement>;
const SidebarGroupContext = React.createContext(false);

export const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarGroup>(
  ({ className, ...props }, ref) => {
    const [open, setOpen] = React.useState(false);

    return (
      <SidebarGroupContext.Provider value={open}>
        <Collapsible
          ref={ref}
          open={open}
          onOpenChange={setOpen}
          className={className}
          {...props}
        >
          {props.children}
        </Collapsible>
      </SidebarGroupContext.Provider>
    );
  }
);
SidebarGroup.displayName = "SidebarGroup";

type SidebarGroupTrigger = React.ComponentProps<typeof Button>;
export const SidebarGroupTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  SidebarGroupTrigger
>(({ className, ...props }, ref) => {
  return (
    <CollapsibleTrigger asChild>
      <SidebarItem
        ref={ref}
        variant="ghost"
        className={className}
        {...props}
      >
        {props.children}
      </SidebarItem>
    </CollapsibleTrigger>
  );
});
SidebarGroupTrigger.displayName = "SidebarGroupTrigger";

type SidebarGroupExpandProps = React.ComponentProps<typeof ChevronDownIcon>;
export const SidebarGroupExpand = React.forwardRef<
  React.ElementRef<typeof ChevronDownIcon>,
  SidebarGroupExpandProps
>(({ className, ...props }, ref) => {
  const open = React.useContext(SidebarGroupContext);
  const Icon = open ? ChevronUpIcon : ChevronDownIcon;

  return (
    <StyledSidebarGroupExpand className={className}>
      <Icon ref={ref} size={16} {...props}>
        {props.children}
      </Icon>
    </StyledSidebarGroupExpand>
  );
});
SidebarGroupExpand.displayName = "SidebarGroupExpand";

type SidebarGroupItems = React.HTMLAttributes<HTMLDivElement>;
export const SidebarGroupItems = React.forwardRef<
  HTMLDivElement,
  SidebarGroupItems
>(({ className, ...props }, ref) => {
  return (
    <StyledSidebarGroupItems ref={ref} className={className} {...props}>
      {props.children}
    </StyledSidebarGroupItems>
  );
});
SidebarGroupItems.displayName = "SidebarGroupItems";

type SidebarSection = React.HTMLAttributes<HTMLDivElement>;
export const SidebarSection = React.forwardRef<HTMLDivElement, SidebarSection>(
  ({ className, ...props }, ref) => {
    return (
      <StyledSidebarSection ref={ref} className={className} {...props}>
        {props.children}
      </StyledSidebarSection>
    );
  }
);
SidebarSection.displayName = "SidebarSection";

type SidebarItemProps = React.ComponentProps<typeof Button>;
export const SidebarItem = React.forwardRef<
  React.ElementRef<typeof Button>,
  SidebarItemProps
>(({ className, ...props }, ref) => {
  return (
    <StyledSidebarItem
      ref={ref}
      variant="ghost"
      className={className}
      {...props}
    >
      {props.children}
    </StyledSidebarItem>
  );
});
SidebarItem.displayName = "SidebarItem";

type SidebarItemBadgeProps = React.HTMLAttributes<HTMLSpanElement>;
export const SidebarItemBadge = React.forwardRef<
  HTMLSpanElement,
  SidebarItemBadgeProps
>(({ className, ...props }, ref) => {
  return (
    <StyledSidebarItemBadge ref={ref} className={className} {...props}>
      {props.children}
    </StyledSidebarItemBadge>
  );
});
SidebarItemBadge.displayName = "SidebarItemBadge";

type SidebarFooter = React.HTMLAttributes<HTMLDivElement>;
export const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooter>(
  ({ className, ...props }, ref) => {
    return (
      <StyledSidebarFooter ref={ref} className={className} {...props}>
        {props.children}
      </StyledSidebarFooter>
    );
  }
);
SidebarFooter.displayName = "SidebarFooter";
