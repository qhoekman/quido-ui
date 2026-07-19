import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemIndicator,
} from "@/components/radio-group/radio-group";
import {
  RadioGroupItemProps,
  RadioGroupProps,
} from "@radix-ui/react-radio-group";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import styled, { css } from "styled-components";

const colorSelectorItemVariants = cva("q-color-selector-item", {
  variants: {
    color: {
      blue: "color--blue",
      gray: "color--gray",
      green: "color--green",
      indigo: "color--indigo",
      pink: "color--pink",
      purple: "color--purple",
      red: "color--red",
      yellow: "color--yellow",
    },
  },
});

const colorSelectorItemStyles = css`
  position: relative;
  margin: calc(var(--spacing-0-5) * -1);
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: var(--spacing-6);
  height: var(--spacing-6);
  border-radius: var(--border-radius-full);
  padding: var(--spacing-0-5);
  border: var(--border-width-default) solid var(--color-gray-200);
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &:disabled,
  &[data-disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &.color--blue {
    background-color: var(--color-blue-500);
  }

  &.color--gray {
    background-color: var(--color-gray-500);
  }

  &.color--green {
    background-color: var(--color-green-500);
  }

  &.color--indigo {
    background-color: var(--color-indigo-500);
  }

  &.color--pink {
    background-color: var(--color-pink-500);
  }

  &.color--purple {
    background-color: var(--color-purple-500);
  }

  &.color--red {
    background-color: var(--color-red-500);
  }

  &.color--yellow {
    background-color: var(--color-yellow-500);
  }
`;

const StyledColorSelectorItem = styled(RadioGroupItem)`
  ${colorSelectorItemStyles}
`;

const colorSelectorItemIndicatorStyles = css`
  width: var(--spacing-4);
  height: var(--spacing-4);
  border-radius: var(--border-radius-full);
  box-shadow: 0 0 0 2px transparent,
    0 0 0 var(--border-width-2) var(--color-background-fg);
`;

const StyledIndicator = styled.div`
  ${colorSelectorItemIndicatorStyles}
`;

const colorSelectorItemsStyles = css`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
`;

const StyledColorSelectorItems = styled.div`
  ${colorSelectorItemsStyles}
`;

const colorSelectorStyles = css`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

const StyledColorSelector = styled(RadioGroup)`
  ${colorSelectorStyles}
`;

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

export type ColorSelectorItemProps = RadioGroupItemProps & {
  color: VariantProps<typeof colorSelectorItemVariants>["color"];
  selected?: boolean;
};

export const ColorSelectorItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupItem>,
  ColorSelectorItemProps
>(({ className, color, children, ...props }, ref) => {
  const classes = colorSelectorItemVariants({ color, className });
  return (
    <StyledColorSelectorItem
      ref={ref}
      data-testid={props.value ? `color-selector__item-${props.value}` : undefined}
      className={classes}
      {...props}
    >
      <RadioGroupItemIndicator className="q-color-selector-item-indicator">
        {children ?? <StyledIndicator />}
      </RadioGroupItemIndicator>
    </StyledColorSelectorItem>
  );
});

ColorSelectorItem.displayName = "ColorSelectorItem";

export const ColorSelectorItems = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <StyledColorSelectorItems
      ref={ref}
      data-testid="color-selector__items"
      className={cx("q-color-selector-items", className)}
      {...props}
    >
      {props.children}
    </StyledColorSelectorItems>
  );
});
ColorSelectorItems.displayName = "ColorSelectorItems";

export type ColorSelectorProps = RadioGroupProps;

export const ColorSelector = React.forwardRef<
  React.ElementRef<typeof RadioGroup>,
  ColorSelectorProps
>(({ className, children, ...props }, ref) => {
  const [selectedColor, setSelectedColor] = React.useState("");

  const handleChange = (value: string) => {
    setSelectedColor(value);
  };

  return (
    <StyledColorSelector
      ref={ref}
      defaultValue={selectedColor}
      onValueChange={handleChange}
      data-testid="color-selector"
      className={cx("q-color-selector", className)}
      {...props}
    >
      {children}
    </StyledColorSelector>
  );
});

ColorSelector.displayName = "ColorSelector";
