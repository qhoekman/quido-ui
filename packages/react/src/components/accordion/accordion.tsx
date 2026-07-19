import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import * as React from "react";
import styled, { css, keyframes } from "styled-components";

const accordionStyles = css`
  display: flex;
  flex-direction: column;
`;

const StyledAccordion = styled(AccordionPrimitive.Root)`
  ${accordionStyles}
`;

const accordionItemStyles = css`
  border-bottom: var(--border-width-default) solid var(--color-border);
`;

const StyledAccordionItem = styled(AccordionPrimitive.Item)`
  ${accordionItemStyles}
`;

const accordionHeaderStyles = css`
  display: flex;
`;

const StyledAccordionHeader = styled(AccordionPrimitive.Header)`
  ${accordionHeaderStyles}
`;

const accordionTriggerStyles = css`
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--spacing-4);
  padding-bottom: var(--spacing-4);
  border: 0 none;
  background: transparent;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-background-fg);
  outline: none;
  transition: all 0.3s;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:hover:not(:disabled) {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &[data-state="open"] > svg {
    transform: rotate(180deg);
  }
`;

const StyledAccordionTrigger = styled(AccordionPrimitive.Trigger)`
  ${accordionTriggerStyles}
`;

const accordionTriggerIconStyles = css`
  color: var(--color-muted-fg);
  height: var(--spacing-4);
  width: var(--spacing-4);
  flex-shrink: 0;
  transition: transform 0.2s;
`;

const StyledChevronDown = styled(ChevronDown)`
  ${accordionTriggerIconStyles}
`;

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

const accordionContentStyles = css`
  overflow: hidden;
  font-size: var(--font-size-sm);

  &[data-state="closed"] {
    animation: ${accordionUp} 0.2s ease-out;
  }

  &[data-state="open"] {
    animation: ${accordionDown} 0.2s ease-out;
  }
`;

const StyledAccordionContent = styled(AccordionPrimitive.Content)`
  ${accordionContentStyles}
`;

const accordionContentInnerStyles = css`
  padding-top: 0;
  padding-bottom: var(--spacing-4);
`;

const StyledAccordionContentInner = styled.div`
  ${accordionContentInnerStyles}
`;

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
  <StyledAccordion
    data-testid="accordion"
    ref={ref}
    className={cx("q-accordion", className)}
    {...props}
  />
));
Accordion.displayName = AccordionPrimitive.Root.displayName;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <StyledAccordionItem
    data-testid={props.value ? `accordion__item-${props.value}` : undefined}
    ref={ref}
    className={cx("q-accordion-item", className)}
    {...props}
  />
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <StyledAccordionHeader className="q-accordion-header">
    <StyledAccordionTrigger
      data-testid="accordion__trigger"
      ref={ref}
      className={cx("q-accordion-trigger", className)}
      {...props}
    >
      {children}
      <StyledChevronDown className="q-accordion-trigger-icon" aria-hidden="true" />
    </StyledAccordionTrigger>
  </StyledAccordionHeader>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <StyledAccordionContent
    data-testid="accordion__content"
    ref={ref}
    className="q-accordion-content"
    {...props}
  >
    <StyledAccordionContentInner
      className={cx("q-accordion-content-inner", className)}
    >
      {children}
    </StyledAccordionContentInner>
  </StyledAccordionContent>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
