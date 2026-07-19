import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";
import styled, { css } from "styled-components";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

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
  border: none;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: var(--color-muted);
    color: var(--color-muted-fg);
  }

  &:focus:not(:disabled) {
    background-color: var(--color-muted);
    color: var(--color-muted-fg);
    outline: none;
  }

  &:focus-visible:not(:disabled) {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
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

const megaMenuStyles = css`
  position: relative;
  z-index: var(--z-index-10);
  display: flex;
  max-width: max-content;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledMegaMenuRoot = styled(NavigationMenuPrimitive.Root)`
  ${megaMenuStyles}
`;

const megaMenuListStyles = css`
  display: flex;
  flex: 1;
  list-style: none;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-1);
  margin: 0;
  padding: 0;
`;

const StyledMegaMenuList = styled(NavigationMenuPrimitive.List)`
  ${megaMenuListStyles}
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

const megaMenuListItemStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--spacing-1);
  width: 100%;
  text-align: left;
  user-select: none;
  border-radius: var(--border-radius-md);
  padding: var(--spacing-3);
  line-height: var(--line-height-none);
  text-decoration: none;
  outline: none;
  color: inherit;
  transition: colors 0.3s;

  &:hover {
    background-color: var(--color-muted);
    color: var(--color-muted-fg);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }
`;

const StyledMegaMenuListItem = styled.a`
  ${megaMenuListItemStyles}
`;

const listItemTitleStyles = css`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-none);
  text-align: left;
`;

const StyledListItemTitle = styled.div`
  ${listItemTitleStyles}
`;

const listItemDescriptionStyles = css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: var(--font-size-sm);
  line-height: var(--line-height-snug);
  color: var(--color-muted-fg);
  margin: 0;
  text-align: left;
`;

const StyledListItemDescription = styled.p`
  ${listItemDescriptionStyles}
`;

const listItemWrapStyles = css`
  list-style: none;
`;

const StyledListItemWrap = styled.li`
  ${listItemWrapStyles}
`;

const MegaMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <StyledMegaMenuRoot
    ref={ref}
    data-testid="mega-menu"
    className={cx("q-mega-menu", className)}
    {...props}
  >
    {children}
    <MegaMenuViewport />
  </StyledMegaMenuRoot>
));
MegaMenu.displayName = "MegaMenu";

const MegaMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <StyledMegaMenuList
    ref={ref}
    data-testid="mega-menu__list"
    className={cx("q-mega-menu-list", className)}
    {...props}
  />
));
MegaMenuList.displayName = "MegaMenuList";

const MegaMenuItem = NavigationMenuPrimitive.Item;

const MegaMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <StyledMegaMenuTriggerWithState
    ref={ref}
    data-testid="mega-menu__trigger"
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
    data-testid="mega-menu__content"
    className={cx("q-mega-menu-content", className)}
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
  <StyledViewportWrapper className="q-mega-menu-viewport-wrapper">
    <StyledMegaMenuViewport
      data-testid="mega-menu__viewport"
      className={cx("q-mega-menu-viewport", className)}
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
  <StyledMegaMenuIndicator
    ref={ref}
    data-testid="mega-menu__indicator"
    className={cx("q-mega-menu-indicator", className)}
    {...props}
  >
    <StyledIndicatorInner />
  </StyledMegaMenuIndicator>
));
MegaMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

const MegaMenuListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <StyledListItemWrap className="q-mega-menu-list-item-wrap">
      <MegaMenuLink asChild>
        <StyledMegaMenuListItem
          ref={ref}
          data-testid="mega-menu__list-item"
          className={cx("q-mega-menu-list-item", className)}
          {...props}
        >
          <StyledListItemTitle className="q-mega-menu-list-item-title">
            {title}
          </StyledListItemTitle>
          <StyledListItemDescription className="q-mega-menu-list-item-description">
            {children}
          </StyledListItemDescription>
        </StyledMegaMenuListItem>
      </MegaMenuLink>
    </StyledListItemWrap>
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
