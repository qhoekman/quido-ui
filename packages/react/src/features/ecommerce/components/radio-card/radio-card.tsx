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
import styled from "styled-components";

const StyledRadioCard = styled(RadioGroup)`
  gap: var(--spacing-3);
`;

const StyledRadioCardItem = styled(RadioGroupItem)`
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: var(--color-muted);
    color: var(--color-muted-fg);
  }
`;

const StyledRadioCardItemIndicator = styled(RadioGroupItemIndicator)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: var(--spacing-4);
  border: var(--border-width-2) solid var(--color-primary);
`;

const StyledRadioCardItemLabel = styled(Label)`
  font-size: var(--font-size-sm);
`;

const StyledRadioCardItemDescription = styled.p`
  margin-top: var(--spacing-1);
  font-size: var(--font-size-sm);
  text-align: left;
`;

type RadioCardProps = RadioGroupProps;

export const RadioCard = React.forwardRef<
  React.ElementRef<typeof RadioGroup>,
  RadioCardProps
>(({ className, children, ...props }, ref) => {
  return (
    <StyledRadioCard className={className} {...props} ref={ref}>
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
    <StyledRadioCardItem className={className} {...props} ref={ref}>
      {children}
      <StyledRadioCardItemIndicator>
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
    <StyledRadioCardItemLabel ref={ref} className={className} {...props} />
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
      className={className}
      {...props}
    />
  );
});

RadioCardItemDescription.displayName = "RadioCardItemDescription";
