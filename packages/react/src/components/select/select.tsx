import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import styled, { css } from "styled-components";
import { cva, type VariantProps } from "class-variance-authority";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const selectTriggerVariants = cva("q-select-trigger", {
  variants: {
    size: {
      sm: "size--sm",
      md: "size--md",
      lg: "size--lg",
    },
  },
});

const selectTriggerStyles = css`
  display: flex;
  height: var(--spacing-9);
  width: 100%;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-input);
  background-color: transparent;
  color: var(--color-background-fg);
  padding: var(--spacing-2) var(--spacing-3);
  font-size: var(--font-size-sm);
  box-shadow: var(--box-shadow-sm);
  outline: none;
  cursor: pointer;

  &::placeholder {
    color: var(--color-muted-fg);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px var(--color-ring);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  & > span {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &.size--sm {
    height: var(--spacing-9);
    padding: var(--spacing-2) var(--spacing-2);
  }

  &.size--md {
    height: var(--spacing-10);
    padding: var(--spacing-2) var(--spacing-3);
  }

  &.size--lg {
    height: var(--spacing-11);
    padding: var(--spacing-3) var(--spacing-4);
  }
`;

const StyledSelectTrigger = styled(SelectPrimitive.Trigger)`
  ${selectTriggerStyles}
`;

const StyledSelectIcon = styled(ChevronsUpDown)`
  height: var(--spacing-4);
  width: var(--spacing-4);
  flex-shrink: 0;
  opacity: 0.5;
`;

export type SelectTriggerProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Trigger
> &
  VariantProps<typeof selectTriggerVariants>;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, size, children, ...props }, ref) => (
  <StyledSelectTrigger
    data-testid="select__trigger"
    ref={ref}
    className={selectTriggerVariants({ size, className })}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <StyledSelectIcon className="q-select-trigger-icon" />
    </SelectPrimitive.Icon>
  </StyledSelectTrigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const selectScrollButtonStyles = css`
  display: flex;
  cursor: default;
  align-items: center;
  justify-content: center;
  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
`;

const StyledSelectScrollUpButton = styled(SelectPrimitive.ScrollUpButton)`
  ${selectScrollButtonStyles}
`;

const StyledChevronUp = styled(ChevronUp)`
  height: var(--spacing-4);
  width: var(--spacing-4);
`;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <StyledSelectScrollUpButton
    ref={ref}
    className={cx("q-select-scroll-button", className)}
    {...props}
  >
    <StyledChevronUp />
  </StyledSelectScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const StyledSelectScrollDownButton = styled(SelectPrimitive.ScrollDownButton)`
  ${selectScrollButtonStyles}
`;

const StyledChevronDown = styled(ChevronDown)`
  height: var(--spacing-4);
  width: var(--spacing-4);
`;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <StyledSelectScrollDownButton
    ref={ref}
    className={cx("q-select-scroll-button", className)}
    {...props}
  >
    <StyledChevronDown />
  </StyledSelectScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const selectContentStyles = css`
  color: var(--color-popover-fg);
  z-index: var(--z-index-100);
  position: relative;
  max-height: 24rem;
  min-width: 8rem;
  overflow: hidden;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-popover);
  box-shadow: var(--box-shadow-md);

  &[data-state="open"] {
    animation: fadeIn 0.15s ease-out, zoomIn 0.15s ease-out;
  }

  &[data-state="closed"] {
    animation: fadeOut 0.15s ease-in, zoomOut 0.15s ease-in;
  }

  &[data-side="bottom"] {
    animation: slideInFromTop 0.15s ease-out;
  }

  &[data-side="left"] {
    animation: slideInFromRight 0.15s ease-out;
  }

  &[data-side="right"] {
    animation: slideInFromLeft 0.15s ease-out;
  }

  &[data-side="top"] {
    animation: slideInFromBottom 0.15s ease-out;
  }

  &[data-position="popper"][data-side="bottom"] {
    transform: translateY(var(--spacing-1));
  }

  &[data-position="popper"][data-side="left"] {
    transform: translateX(calc(-1 * var(--spacing-1)));
  }

  &[data-position="popper"][data-side="right"] {
    transform: translateX(var(--spacing-1));
  }

  &[data-position="popper"][data-side="top"] {
    transform: translateY(calc(-1 * var(--spacing-1)));
  }

  &[data-position="popper"] .q-select-viewport {
    height: var(--radix-select-trigger-height);
    width: 100%;
    min-width: var(--radix-select-trigger-width);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes zoomOut {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.95);
    }
  }

  @keyframes slideInFromTop {
    from {
      transform: translateY(calc(-1 * var(--spacing-2)));
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideInFromRight {
    from {
      transform: translateX(var(--spacing-2));
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideInFromLeft {
    from {
      transform: translateX(calc(-1 * var(--spacing-2)));
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideInFromBottom {
    from {
      transform: translateY(var(--spacing-2));
    }
    to {
      transform: translateY(0);
    }
  }
`;

const StyledSelectContent = styled(SelectPrimitive.Content)`
  ${selectContentStyles}
`;

const selectViewportStyles = css`
  padding: var(--spacing-1);
`;

const StyledSelectViewport = styled(SelectPrimitive.Viewport)`
  ${selectViewportStyles}
`;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <StyledSelectContent
      data-testid="select__content"
      ref={ref}
      className={cx("q-select-content", className)}
      data-position={position}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <StyledSelectViewport className="q-select-viewport">
        {children}
      </StyledSelectViewport>
      <SelectScrollDownButton />
    </StyledSelectContent>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const selectLabelStyles = css`
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
`;

const StyledSelectLabel = styled(SelectPrimitive.Label)`
  ${selectLabelStyles}
`;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <StyledSelectLabel
    ref={ref}
    className={cx("q-select-label", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const selectItemIndicatorStyles = css`
  position: absolute;
  right: var(--spacing-2);
  display: flex;
  height: var(--spacing-3-5);
  width: var(--spacing-3-5);
  align-items: center;
  justify-content: center;
`;

const StyledSelectItemIndicatorWrapper = styled.span`
  ${selectItemIndicatorStyles}
`;

const StyledCheckIcon = styled(Check)`
  height: var(--spacing-4);
  width: var(--spacing-4);
`;

const selectItemStyles = css`
  position: relative;
  display: flex;
  width: 100%;
  cursor: default;
  user-select: none;
  align-items: center;
  border-radius: var(--border-radius-sm);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-8);
  font-size: var(--font-size-sm);
  outline: none;

  &:focus {
    color: var(--color-background-fg);
    background-color: var(--color-muted);
  }

  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

const StyledSelectItem = styled(SelectPrimitive.Item)`
  ${selectItemStyles}
`;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <StyledSelectItem
    data-testid={props.value ? `select__item-${props.value}` : undefined}
    ref={ref}
    className={cx("q-select-item", className)}
    {...props}
  >
    <StyledSelectItemIndicatorWrapper className="q-select-item-indicator">
      <SelectPrimitive.ItemIndicator>
        <StyledCheckIcon className="q-select-item-check" />
      </SelectPrimitive.ItemIndicator>
    </StyledSelectItemIndicatorWrapper>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </StyledSelectItem>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const selectSeparatorStyles = css`
  margin-left: calc(-1 * var(--spacing-1));
  margin-right: calc(-1 * var(--spacing-1));
  margin-top: var(--spacing-1);
  margin-bottom: var(--spacing-1);
  height: 1px;
  background-color: var(--color-muted);
`;

const StyledSelectSeparator = styled(SelectPrimitive.Separator)`
  ${selectSeparatorStyles}
`;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <StyledSelectSeparator
    ref={ref}
    className={cx("q-select-separator", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
