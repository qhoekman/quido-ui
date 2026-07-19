import React from "react";
import styled, { css } from "styled-components";

const cardStyles = css`
  border-radius: var(--border-radius-lg);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-card);
  color: var(--color-card-fg);
  box-shadow: var(--box-shadow-sm);
`;

const StyledCard = styled.div`
  ${cardStyles}
`;

const cardHeaderStyles = css`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1-5);
  padding: var(--spacing-6);
`;

const StyledCardHeader = styled.div`
  ${cardHeaderStyles}
`;

const cardTitleStyles = css`
  margin: 0;
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-none);
  letter-spacing: var(--letter-spacing-tight);
`;

const StyledCardTitle = styled.h3`
  ${cardTitleStyles}
`;

const cardDescriptionStyles = css`
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-muted-fg);
`;

const StyledCardDescription = styled.p`
  ${cardDescriptionStyles}
`;

const cardContentStyles = css`
  padding: var(--spacing-6);
  padding-top: var(--spacing-0);
`;

const StyledCardContent = styled.div`
  ${cardContentStyles}
`;

const cardFooterStyles = css`
  display: flex;
  align-items: center;
  padding: var(--spacing-6);
  padding-top: var(--spacing-0);
`;

const StyledCardFooter = styled.div`
  ${cardFooterStyles}
`;

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <StyledCard
    data-testid="card"
    ref={ref}
    className={cx("q-card", className)}
    {...props}
  />
));
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <StyledCardHeader
    data-testid="card__header"
    ref={ref}
    className={cx("q-card-header", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <StyledCardTitle
    data-testid="card__title"
    ref={ref}
    className={cx("q-card-title", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <StyledCardDescription
    data-testid="card__description"
    ref={ref}
    className={cx("q-card-description", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <StyledCardContent
    data-testid="card__content"
    ref={ref}
    className={cx("q-card-content", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <StyledCardFooter
    data-testid="card__footer"
    ref={ref}
    className={cx("q-card-footer", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";
