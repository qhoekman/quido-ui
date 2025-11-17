import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import * as React from "react";
import styled from "styled-components";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const StyledSubTrigger = styled(DropdownMenuPrimitive.SubTrigger)`
  display: flex;
  cursor: default;
  user-select: none;
  align-items: center;
  border-radius: var(--border-radius-sm);
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  font-size: var(--font-size-sm);
  outline: none;

  &:focus {
    background-color: var(--color-muted);
  }

  &[data-state="open"] {
    background-color: var(--color-muted);
  }

  &.inset {
    padding-left: var(--spacing-8);
  }
`;

const StyledSubTriggerIcon = styled(ChevronRight)`
  margin-left: auto;
  height: var(--spacing-4);
  width: var(--spacing-4);
`;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <StyledSubTrigger
    ref={ref}
    className={[inset ? "inset" : "", className].filter(Boolean).join(" ") || undefined}
    {...props}
  >
    {children}
    <StyledSubTriggerIcon />
  </StyledSubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const StyledSubContent = styled(DropdownMenuPrimitive.SubContent)`
  z-index: var(--z-index-50);
  min-width: 8rem;
  overflow: hidden;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-popover);
  color: var(--color-popover-fg);
  padding: var(--spacing-1);
  box-shadow: var(--box-shadow-lg);
`;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <StyledSubContent ref={ref} className={className} {...props} />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const StyledContent = styled(DropdownMenuPrimitive.Content)`
  z-index: var(--z-index-50);
  min-width: 8rem;
  overflow: hidden;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-popover);
  color: var(--color-popover-fg);
  padding: var(--spacing-1);
  box-shadow: var(--box-shadow-md);
`;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <StyledContent
      ref={ref}
      sideOffset={sideOffset}
      className={className}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const StyledItem = styled(DropdownMenuPrimitive.Item)`
  position: relative;
  display: flex;
  cursor: default;
  user-select: none;
  align-items: center;
  border-radius: var(--border-radius-sm);
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  font-size: var(--font-size-sm);
  outline: none;
  transition: colors 0.3s;

  &:focus {
    background-color: var(--color-muted);
    color: var(--color-muted-fg);
  }

  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  &.inset {
    padding-left: var(--spacing-8);
  }
`;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <StyledItem
    ref={ref}
    className={[inset ? "inset" : "", className].filter(Boolean).join(" ") || undefined}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem)`
  position: relative;
  display: flex;
  cursor: default;
  user-select: none;
  align-items: center;
  border-radius: var(--border-radius-sm);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  padding-left: var(--spacing-8);
  padding-right: var(--spacing-2);
  font-size: var(--font-size-sm);
  outline: none;
  transition: colors 0.3s;

  &:focus {
    background-color: var(--color-muted);
    color: var(--color-muted-fg);
  }

  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

const StyledCheckboxIndicator = styled.span`
  position: absolute;
  left: var(--spacing-2);
  display: flex;
  height: var(--spacing-3-5);
  width: var(--spacing-3-5);
  align-items: center;
  justify-content: center;
`;

const StyledCheckIcon = styled(Check)`
  height: var(--spacing-4);
  width: var(--spacing-4);
`;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <StyledCheckboxItem
    ref={ref}
    className={className}
    checked={checked}
    {...props}
  >
    <StyledCheckboxIndicator>
      <DropdownMenuPrimitive.ItemIndicator>
        <StyledCheckIcon />
      </DropdownMenuPrimitive.ItemIndicator>
    </StyledCheckboxIndicator>
    {children}
  </StyledCheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem)`
  position: relative;
  display: flex;
  cursor: default;
  user-select: none;
  align-items: center;
  border-radius: var(--border-radius-sm);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  padding-left: var(--spacing-8);
  padding-right: var(--spacing-2);
  font-size: var(--font-size-sm);
  outline: none;
  transition: colors 0.3s;

  &:focus {
    background-color: var(--color-muted);
    color: var(--color-muted-fg);
  }

  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

const StyledRadioIndicator = styled.span`
  position: absolute;
  left: var(--spacing-2);
  display: flex;
  height: var(--spacing-3-5);
  width: var(--spacing-3-5);
  align-items: center;
  justify-content: center;
`;

const StyledRadioIcon = styled(Circle)`
  height: var(--spacing-2);
  width: var(--spacing-2);
  fill: currentColor;
`;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <StyledRadioItem ref={ref} className={className} {...props}>
    <StyledRadioIndicator>
      <DropdownMenuPrimitive.ItemIndicator>
        <StyledRadioIcon />
      </DropdownMenuPrimitive.ItemIndicator>
    </StyledRadioIndicator>
    {children}
  </StyledRadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const StyledLabel = styled(DropdownMenuPrimitive.Label)`
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);

  &.inset {
    padding-left: var(--spacing-8);
  }
`;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <StyledLabel
    ref={ref}
    className={[inset ? "inset" : "", className].filter(Boolean).join(" ") || undefined}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const StyledSeparator = styled(DropdownMenuPrimitive.Separator)`
  margin-left: calc(var(--spacing-1) * -1);
  margin-right: calc(var(--spacing-1) * -1);
  margin-top: var(--spacing-1);
  margin-bottom: var(--spacing-1);
  height: 1px;
  background-color: var(--color-muted);
`;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <StyledSeparator ref={ref} className={className} {...props} />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const StyledShortcut = styled.span`
  margin-left: auto;
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-widest);
  opacity: 0.6;
`;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return <StyledShortcut className={className} {...props} />;
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};
