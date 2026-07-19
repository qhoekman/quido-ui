import { Label, LabelProps } from "@/components/label/label";
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemIndicator,
} from "@/components/radio-group/radio-group";
import {
  RadioGroupItemProps,
  RadioGroupProps,
} from "@radix-ui/react-radio-group";
import React from "react";
import styled, { css } from "styled-components";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const radioCardStyles = css`
  gap: var(--spacing-3);
`;

const StyledRadioCard = styled(RadioGroup)`
  ${radioCardStyles}
`;

const radioCardItemStyles = css`
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-4);
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-lg);
  border: var(--border-width-default) solid var(--color-border);
  box-shadow: var(--box-shadow-sm);

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 1px var(--color-ring);
  }

  &:disabled,
  &[data-disabled] {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: var(--color-muted);
    color: var(--color-muted-fg);
  }
`;

const StyledRadioCardItem = styled(RadioGroupItem)`
  ${radioCardItemStyles}
`;

const radioCardItemIndicatorStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: var(--spacing-4);
  border: var(--border-width-2) solid var(--color-primary);
  border-radius: var(--border-radius-lg);
  pointer-events: none;
`;

const StyledRadioCardItemIndicator = styled(RadioGroupItemIndicator)`
  ${radioCardItemIndicatorStyles}
`;

const radioCardItemLabelStyles = css`
  font-size: var(--font-size-sm);
`;

const StyledRadioCardItemLabel = styled(Label)`
  ${radioCardItemLabelStyles}
`;

const radioCardItemDescriptionStyles = css`
  margin-top: var(--spacing-1);
  font-size: var(--font-size-sm);
  text-align: left;
`;

const StyledRadioCardItemDescription = styled.p`
  ${radioCardItemDescriptionStyles}
`;

type RadioCardProps = RadioGroupProps;

export const RadioCard = React.forwardRef<
  React.ElementRef<typeof RadioGroup>,
  RadioCardProps
>(({ className, children, ...props }, ref) => {
  return (
    <StyledRadioCard
      className={cx("q-radio-card", className)}
      data-testid="radio-card"
      {...props}
      ref={ref}
    >
      {children}
    </StyledRadioCard>
  );
});
RadioCard.displayName = RadioGroup.displayName;

type RadioCardItemProps = RadioGroupItemProps;
export const RadioCardItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupItem>,
  RadioCardItemProps
>(({ children, className, ...props }, ref) => {
  return (
    <StyledRadioCardItem
      className={cx("q-radio-card-item", className)}
      data-testid={props.value ? `radio-card__item-${props.value}` : undefined}
      {...props}
      ref={ref}
    >
      {children}
      <StyledRadioCardItemIndicator
        data-testid={
          props.value ? `radio-card__item-indicator-${props.value}` : undefined
        }
        className="q-radio-card-item-indicator"
      >
        <div />
      </StyledRadioCardItemIndicator>
    </StyledRadioCardItem>
  );
});

RadioCardItem.displayName = RadioGroupItem.displayName;

type RadioCardItemLabelProps = LabelProps;
export const RadioCardItemLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  RadioCardItemLabelProps
>(({ className, ...props }, ref) => {
  return (
    <StyledRadioCardItemLabel
      ref={ref}
      className={cx("q-radio-card-item-label", className)}
      {...props}
    />
  );
});
RadioCardItemLabel.displayName = "RadioCardItemLabel";

type RadioCardItemDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
export const RadioCardItemDescription = React.forwardRef<
  HTMLParagraphElement,
  RadioCardItemDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <StyledRadioCardItemDescription
      ref={ref}
      className={cx("q-radio-card-item-description", className)}
      {...props}
    />
  );
});

RadioCardItemDescription.displayName = "RadioCardItemDescription";
