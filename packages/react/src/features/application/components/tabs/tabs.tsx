import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";
import styled from "styled-components";

const Tabs = TabsPrimitive.Root;

const StyledTabsList = styled(TabsPrimitive.List)`
  display: inline-flex;
  height: var(--spacing-10);
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-md);
  background-color: var(--color-card);
  color: var(--color-card-fg);
  padding: var(--spacing-1);
`;

const StyledTabsTrigger = styled(TabsPrimitive.Trigger)`
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

const StyledTabsContent = styled(TabsPrimitive.Content)`
  margin-top: var(--spacing-2);
  box-shadow: 0 0 0 0 var(--color-background);

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }
`;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <StyledTabsList ref={ref} className={className} {...props} />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <StyledTabsTrigger ref={ref} className={className} {...props} />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <StyledTabsContent ref={ref} className={className} {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
