import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: var(--border-radius-lg);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-card);
  color: var(--color-card-fg);
  box-shadow: var(--box-shadow-sm);
`;

const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1-5);
  padding: var(--spacing-6);
`;

const StyledCardTitle = styled.h3`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-none);
  letter-spacing: var(--letter-spacing-tight);
`;

const StyledCardDescription = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-muted-fg);
`;

const StyledCardContent = styled.div`
  padding: var(--spacing-6);
  padding-top: var(--spacing-0);
`;

const StyledCardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-6);
  padding-top: var(--spacing-0);
`;

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <StyledCard ref={ref} className={className} {...props} />
));
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <StyledCardHeader ref={ref} className={className} {...props} />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <StyledCardTitle ref={ref} className={className} {...props} />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <StyledCardDescription ref={ref} className={className} {...props} />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <StyledCardContent ref={ref} className={className} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <StyledCardFooter ref={ref} className={className} {...props} />
));
CardFooter.displayName = "CardFooter";
