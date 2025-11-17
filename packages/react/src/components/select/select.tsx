import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import styled from "styled-components";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const StyledSelectTrigger = styled(SelectPrimitive.Trigger)`
  display: flex;
  height: var(--spacing-9);
  width: 100%;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-input);
  background-color: transparent;
  padding: var(--spacing-2) var(--spacing-3);
  font-size: var(--font-size-sm);
  box-shadow: var(--box-shadow-sm);
  outline: none;

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
`;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <StyledSelectTrigger ref={ref} className={className} {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronsUpDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </StyledSelectTrigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const StyledSelectScrollUpButton = styled(SelectPrimitive.ScrollUpButton)`
  display: flex;
  cursor: default;
  align-items: center;
  justify-content: center;
  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
`;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <StyledSelectScrollUpButton ref={ref} className={className} {...props}>
    <ChevronUp />
  </StyledSelectScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const StyledSelectScrollDownButton = styled(SelectPrimitive.ScrollDownButton)`
  display: flex;
  cursor: default;
  align-items: center;
  justify-content: center;
  padding-top: var(--spacing-1);
  padding-bottom: var(--spacing-1);
`;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <StyledSelectScrollDownButton ref={ref} className={className} {...props}>
    <ChevronDown />
  </StyledSelectScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const StyledSelectContent = styled(SelectPrimitive.Content)<{
  $position?: "popper" | "item-aligned";
}>`
  color: var(--color-popover-fg);
  z-index: var(--z-index-100);
  position: relative;
  max-height: var(--spacing-96);
  min-width: 8rem;
  overflow: hidden;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-white);
  box-shadow: var(--box-shadow-md);

  &[data-state="open"][data-side="bottom"] {
    animation: fadeInZoomInSlideFromTop 0.15s ease-out;
  }

  &[data-state="open"][data-side="left"] {
    animation: fadeInZoomInSlideFromRight 0.15s ease-out;
  }

  &[data-state="open"][data-side="right"] {
    animation: fadeInZoomInSlideFromLeft 0.15s ease-out;
  }

  &[data-state="open"][data-side="top"] {
    animation: fadeInZoomInSlideFromBottom 0.15s ease-out;
  }

  &[data-state="closed"][data-side="bottom"] {
    animation: fadeOutZoomOutSlideToTop 0.15s ease-in;
  }

  &[data-state="closed"][data-side="left"] {
    animation: fadeOutZoomOutSlideToRight 0.15s ease-in;
  }

  &[data-state="closed"][data-side="right"] {
    animation: fadeOutZoomOutSlideToLeft 0.15s ease-in;
  }

  &[data-state="closed"][data-side="top"] {
    animation: fadeOutZoomOutSlideToBottom 0.15s ease-in;
  }

  ${(props) =>
    props.$position === "popper" &&
    `
    &[data-side="bottom"] {
      transform: translateY(var(--spacing-1));
    }
    &[data-side="left"] {
      transform: translateX(calc(-1 * var(--spacing-1)));
    }
    &[data-side="right"] {
      transform: translateX(var(--spacing-1));
    }
    &[data-side="top"] {
      transform: translateY(calc(-1 * var(--spacing-1)));
    }
  `}

  @keyframes fadeInZoomInSlideFromTop {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(calc(-1 * var(--spacing-2)));
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes fadeInZoomInSlideFromRight {
    from {
      opacity: 0;
      transform: scale(0.95) translateX(var(--spacing-2));
    }
    to {
      opacity: 1;
      transform: scale(1) translateX(0);
    }
  }

  @keyframes fadeInZoomInSlideFromLeft {
    from {
      opacity: 0;
      transform: scale(0.95) translateX(calc(-1 * var(--spacing-2)));
    }
    to {
      opacity: 1;
      transform: scale(1) translateX(0);
    }
  }

  @keyframes fadeInZoomInSlideFromBottom {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(var(--spacing-2));
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes fadeOutZoomOutSlideToTop {
    from {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    to {
      opacity: 0;
      transform: scale(0.95) translateY(calc(-1 * var(--spacing-2)));
    }
  }

  @keyframes fadeOutZoomOutSlideToRight {
    from {
      opacity: 1;
      transform: scale(1) translateX(0);
    }
    to {
      opacity: 0;
      transform: scale(0.95) translateX(var(--spacing-2));
    }
  }

  @keyframes fadeOutZoomOutSlideToLeft {
    from {
      opacity: 1;
      transform: scale(1) translateX(0);
    }
    to {
      opacity: 0;
      transform: scale(0.95) translateX(calc(-1 * var(--spacing-2)));
    }
  }

  @keyframes fadeOutZoomOutSlideToBottom {
    from {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    to {
      opacity: 0;
      transform: scale(0.95) translateY(var(--spacing-2));
    }
  }
`;

const StyledSelectViewport = styled(SelectPrimitive.Viewport)<{
  $position?: "popper" | "item-aligned";
}>`
  padding: var(--spacing-1);

  ${(props) =>
    props.$position === "popper" &&
    `
    height: var(--radix-select-trigger-height);
    width: 100%;
    min-width: var(--radix-select-trigger-width);
  `}
`;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <StyledSelectContent
      ref={ref}
      className={className}
      $position={position}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <StyledSelectViewport $position={position}>
        {children}
      </StyledSelectViewport>
      <SelectScrollDownButton />
    </StyledSelectContent>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const StyledSelectLabel = styled(SelectPrimitive.Label)`
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
`;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <StyledSelectLabel ref={ref} className={className} {...props} />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const StyledSelectItem = styled(SelectPrimitive.Item)`
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
    color: var(--color-accent-fg);
    background-color: var(--color-accent);
  }

  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  & > span {
    position: absolute;
    right: var(--spacing-2);
    display: flex;
    height: var(--spacing-3-5);
    width: var(--spacing-3-5);
    align-items: center;
    justify-content: center;
  }
`;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <StyledSelectItem ref={ref} className={className} {...props}>
    <span>
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </StyledSelectItem>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const StyledSelectSeparator = styled(SelectPrimitive.Separator)`
  margin-left: calc(-1 * var(--spacing-1));
  margin-right: calc(-1 * var(--spacing-1));
  margin-top: var(--spacing-1);
  margin-bottom: var(--spacing-1);
  height: 1px;
  background-color: var(--color-muted);
`;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <StyledSelectSeparator ref={ref} className={className} {...props} />
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
