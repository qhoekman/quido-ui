import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";
import styled, { css } from "styled-components";

const megaMenuTriggerStyle = cva("q-mega-menu-trigger");

const triggerStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--spacing-9);
  width: max-content;
  border-radius: var(--border-radius-md);
  background-color: var(--color-background);
  padding: var(--spacing-2) var(--spacing-4);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: colors 0.3s;
  outline: none;
  text-decoration: none;

  &:hover {
    background-color: var(--color-muted);
    color: var(--color-muted-fg);
  }

  &:focus {
    background-color: var(--color-muted);
    color: var(--color-muted-fg);
    outline: none;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &[data-active] {
    background-color: hsl(from var(--color-muted) h s l / 50%);
  }

  &[data-state="open"] {
    background-color: hsl(from var(--color-muted) h s l / 50%);
  }
`;

const StyledMegaMenuRoot = styled(NavigationMenuPrimitive.Root)`
  position: relative;
  z-index: var(--z-index-10);
  display: flex;
  max-width: max-content;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledMegaMenuList = styled(NavigationMenuPrimitive.List)`
  display: flex;
  flex: 1;
  list-style: none;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-1);
`;

const StyledMegaMenuTrigger = styled(NavigationMenuPrimitive.Trigger)`
  ${triggerStyles}
`;

const StyledMegaMenuTriggerWithState = styled(StyledMegaMenuTrigger)`
  &[data-state="open"] svg {
    transform: rotate(180deg);
  }
`;

const StyledChevronIcon = styled(ChevronDownIcon)`
  position: relative;
  top: 1px;
  margin-left: var(--spacing-1);
  height: var(--spacing-3);
  width: var(--spacing-3);
  transition: transform 300ms;
`;

const StyledMegaMenuContent = styled(NavigationMenuPrimitive.Content)`
  left: 0;
  top: 0;
  width: 100%;

  @media (min-width: 768px) {
    position: absolute;
    width: auto;
  }

  &[data-motion="from-end"] {
    animation: slideInFromRight 0.2s ease-out;
  }

  &[data-motion="from-start"] {
    animation: slideInFromLeft 0.2s ease-out;
  }

  &[data-motion="to-end"] {
    animation: slideOutToRight 0.2s ease-out;
  }

  &[data-motion="to-start"] {
    animation: slideOutToLeft 0.2s ease-out;
  }

  &[data-motion^="from-"]:not([data-motion="from-end"]):not([data-motion="from-start"]) {
    animation: fadeIn 0.2s ease-out;
  }

  &[data-motion^="to-"]:not([data-motion="to-end"]):not([data-motion="to-start"]) {
    animation: fadeOut 0.2s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(13rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-13rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideOutToRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(13rem);
    }
  }

  @keyframes slideOutToLeft {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-13rem);
    }
  }
`;

const StyledViewportWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  display: flex;
  justify-content: center;
`;

const StyledMegaMenuViewport = styled(NavigationMenuPrimitive.Viewport)`
  transform-origin: top center;
  position: relative;
  margin-top: var(--spacing-1-5);
  height: var(--radix-navigation-menu-viewport-height);
  width: 100%;
  overflow: hidden;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-popover);
  color: var(--color-popover-fg);
  box-shadow: var(--box-shadow-default);

  @media (min-width: 768px) {
    width: var(--radix-navigation-menu-viewport-width);
  }

  &[data-state="open"] {
    animation: zoomIn 0.2s ease-out;
  }

  &[data-state="closed"] {
    animation: zoomOut 0.2s ease-out;
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes zoomOut {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.95);
    }
  }
`;

const StyledMegaMenuIndicator = styled(NavigationMenuPrimitive.Indicator)`
  top: 100%;
  z-index: 1;
  display: flex;
  height: var(--spacing-1-5);
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;

  &[data-state="visible"] {
    animation: fadeIn 0.2s ease-out;
  }

  &[data-state="hidden"] {
    animation: fadeOut 0.2s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const StyledIndicatorInner = styled.div`
  position: relative;
  top: 60%;
  height: var(--spacing-2);
  width: var(--spacing-2);
  transform: rotate(45deg);
  border-top-left-radius: var(--border-radius-sm);
  background-color: var(--color-border);
  box-shadow: var(--box-shadow-md);
`;

const StyledMegaMenuListItem = styled.a`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
  user-select: none;
  border-radius: var(--border-radius-md);
  padding: var(--spacing-3);
  line-height: var(--line-height-none);
  text-decoration: none;
  outline: none;
  transition: colors 0.3s;

  &:hover {
    background-color: var(--color-muted);
    color: var(--color-muted-fg);
  }

  &:focus {
    background-color: var(--color-muted);
    color: var(--color-muted-fg);
  }
`;

const StyledListItemTitle = styled.div`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-none);
`;

const StyledListItemDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: var(--font-size-sm);
  line-height: var(--line-height-snug);
  color: var(--color-muted-fg);
`;

const MegaMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <StyledMegaMenuRoot ref={ref} className={className} {...props}>
    {children}
    <MegaMenuViewport />
  </StyledMegaMenuRoot>
));
MegaMenu.displayName = "MegaMenu";

const MegaMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <StyledMegaMenuList ref={ref} className={className} {...props} />
));
MegaMenuList.displayName = "MegaMenuList";

const MegaMenuItem = NavigationMenuPrimitive.Item;

const MegaMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <StyledMegaMenuTriggerWithState
    ref={ref}
    className={megaMenuTriggerStyle({ className })}
    onPointerMove={(event) => event.preventDefault()}
    onPointerLeave={(event) => event.preventDefault()}
    {...props}
  >
    {children}{" "}
    <StyledChevronIcon aria-hidden="true" />
  </StyledMegaMenuTriggerWithState>
));
MegaMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const MegaMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <StyledMegaMenuContent
    ref={ref}
    className={className}
    onPointerLeave={(event) => event.preventDefault()}
    onPointerEnter={(event) => event.preventDefault()}
    {...props}
  />
));
MegaMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const MegaMenuLink = NavigationMenuPrimitive.Link;

const MegaMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <StyledViewportWrapper>
    <StyledMegaMenuViewport
      className={className}
      onPointerEnter={(event) => event.preventDefault()}
      onPointerLeave={(event) => event.preventDefault()}
      ref={ref}
      {...props}
    />
  </StyledViewportWrapper>
));
MegaMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const MegaMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <StyledMegaMenuIndicator ref={ref} className={className} {...props}>
    <StyledIndicatorInner />
  </StyledMegaMenuIndicator>
));
MegaMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

const MegaMenuListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <MegaMenuLink asChild>
        <StyledMegaMenuListItem ref={ref} className={className} {...props}>
          <StyledListItemTitle>{title}</StyledListItemTitle>
          <StyledListItemDescription>{children}</StyledListItemDescription>
        </StyledMegaMenuListItem>
      </MegaMenuLink>
    </li>
  );
});
MegaMenuListItem.displayName = "ListItem";

export {
  MegaMenu,
  MegaMenuContent,
  MegaMenuIndicator,
  MegaMenuItem,
  MegaMenuLink,
  MegaMenuList,
  MegaMenuListItem,
  MegaMenuTrigger,
  MegaMenuViewport,
  megaMenuTriggerStyle as navigationMenuTriggerStyle,
};
