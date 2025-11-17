import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import * as React from "react";
import styled, { keyframes } from "styled-components";

const Accordion = AccordionPrimitive.Root;

const accordionDown = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`;

const accordionUp = keyframes`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`;

const StyledAccordionItem = styled(AccordionPrimitive.Item)`
  border-bottom: var(--border-width-default) solid var(--color-border);
`;

const StyledAccordionHeader = styled(AccordionPrimitive.Header)`
  display: flex;
`;

const StyledAccordionTrigger = styled(AccordionPrimitive.Trigger)`
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--spacing-4);
  padding-bottom: var(--spacing-4);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: all 0.3s;

  &:hover {
    text-decoration: underline;
  }

  &[data-state="open"] > svg {
    transform: rotate(180deg);
  }
`;

const StyledChevronDown = styled(ChevronDown)`
  color: var(--color-muted-fg);
  height: var(--spacing-4);
  width: var(--spacing-4);
  flex-shrink: 0;
  transition: transform 0.2s;
`;

const StyledAccordionContent = styled(AccordionPrimitive.Content)`
  overflow: hidden;
  font-size: var(--font-size-sm);

  &[data-state="closed"] {
    animation: ${accordionUp} 0.2s ease-out;
  }

  &[data-state="open"] {
    animation: ${accordionDown} 0.2s ease-out;
  }
`;

const StyledAccordionContentInner = styled.div`
  padding-top: 0;
  padding-bottom: var(--spacing-4);
`;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <StyledAccordionItem ref={ref} className={className} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <StyledAccordionHeader>
    <StyledAccordionTrigger ref={ref} className={className} {...props}>
      {children}
      <StyledChevronDown />
    </StyledAccordionTrigger>
  </StyledAccordionHeader>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <StyledAccordionContent ref={ref} {...props}>
    <StyledAccordionContentInner className={className}>
      {children}
    </StyledAccordionContentInner>
  </StyledAccordionContent>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
