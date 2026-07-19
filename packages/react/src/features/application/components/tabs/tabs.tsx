import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";
import styled, { css } from "styled-components";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const Tabs = TabsPrimitive.Root;

const tabsListStyles = css`
  display: inline-flex;
  height: var(--spacing-10);
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-md);
  background-color: var(--color-card);
  color: var(--color-card-fg);
  padding: var(--spacing-1);

  & a,
  & button {
    position: relative;
    border-radius: 0;
    margin: 0;
  }

  & a:first-child,
  & button:first-child {
    border-top-left-radius: var(--border-radius-md);
    border-bottom-left-radius: var(--border-radius-md);
  }

  & a:last-child,
  & button:last-child {
    border-top-right-radius: var(--border-radius-md);
    border-bottom-right-radius: var(--border-radius-md);
  }
`;

const StyledTabsList = styled(TabsPrimitive.List)`
  ${tabsListStyles}
`;

const tabsTriggerStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: var(--border-radius-sm);
  padding-left: var(--spacing-3);
  padding-right: var(--spacing-3);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  box-shadow: 0 0 0 0 var(--color-background);
  color: var(--color-muted-fg);
  transition: all 0.3s;
  width: 100%;
  outline: none;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &[data-state="active"] {
    background-color: hsl(from var(--color-background-fg) h s l / 10%);
    color: hsl(from var(--color-background-fg) h s l / 90%);
    box-shadow: var(--box-shadow-sm);
  }
`;

const StyledTabsTrigger = styled(TabsPrimitive.Trigger)`
  ${tabsTriggerStyles}
`;

const tabsContentStyles = css`
  margin-top: var(--spacing-2);
  box-shadow: 0 0 0 0 var(--color-background);
  outline: none;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }
`;

const StyledTabsContent = styled(TabsPrimitive.Content)`
  ${tabsContentStyles}
`;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <StyledTabsList
    ref={ref}
    data-testid="tabs__list"
    className={cx("q-tabs-list", className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <StyledTabsTrigger
    ref={ref}
    data-testid={props.value ? `tabs__trigger-${props.value}` : undefined}
    className={cx("q-tabs-trigger", className)}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <StyledTabsContent
    ref={ref}
    data-testid={props.value ? `tabs__content-${props.value}` : undefined}
    className={cx("q-tabs-content", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
