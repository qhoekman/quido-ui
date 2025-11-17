import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import React from "react";
import styled from "styled-components";

const StyledCollapsible = styled(CollapsiblePrimitive.Root)``;

const StyledCollapsibleTrigger = styled(CollapsiblePrimitive.CollapsibleTrigger)``;

const StyledCollapsibleContent = styled(CollapsiblePrimitive.CollapsibleContent)``;

export const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>
>(({ className, ...props }, ref) => (
  <StyledCollapsible className={className} {...props} ref={ref} />
));
Collapsible.displayName = CollapsiblePrimitive.Root.displayName;

export const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleTrigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleTrigger>
>(({ className, ...props }, ref) => (
  <StyledCollapsibleTrigger className={className} {...props} ref={ref} />
));
CollapsibleTrigger.displayName =
  CollapsiblePrimitive.CollapsibleTrigger.displayName;

export const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent>
>(({ className, ...props }, ref) => (
  <StyledCollapsibleContent className={className} {...props} ref={ref} />
));
CollapsibleContent.displayName =
  CollapsiblePrimitive.CollapsibleContent.displayName;
