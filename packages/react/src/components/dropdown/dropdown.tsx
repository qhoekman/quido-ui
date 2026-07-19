import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import * as React from "react";
import styled, { css } from "styled-components";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const subTriggerStyles = css`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  border-radius: var(--border-radius-sm);
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  font-size: var(--font-size-sm);
  outline: none;
  cursor: default;
  user-select: none;

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

const StyledSubTrigger = styled(DropdownMenuPrimitive.SubTrigger)`
  ${subTriggerStyles}
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
    className={cx("q-dropdown-sub-trigger", inset ? "inset" : undefined, className)}
    {...props}
  >
    {children}
    <StyledSubTriggerIcon className="q-dropdown-sub-trigger-icon" />
  </StyledSubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const popoverSurfaceStyles = css`
  z-index: var(--z-index-50);
  min-width: 8rem;
  overflow: hidden;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-popover);
  color: var(--color-popover-fg);
  padding: var(--spacing-1);
`;

const subContentStyles = css`
  ${popoverSurfaceStyles}
  box-shadow: var(--box-shadow-lg);
`;

const StyledSubContent = styled(DropdownMenuPrimitive.SubContent)`
  ${subContentStyles}
`;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <StyledSubContent
    ref={ref}
    className={cx("q-dropdown-sub-content", className)}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const contentStyles = css`
  ${popoverSurfaceStyles}
  box-shadow: var(--box-shadow-md);
`;

const StyledContent = styled(DropdownMenuPrimitive.Content)`
  ${contentStyles}
`;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <StyledContent
      data-testid="dropdown__content"
      ref={ref}
      sideOffset={sideOffset}
      className={cx("q-dropdown-content", className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const itemStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  border-radius: var(--border-radius-sm);
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  font-size: var(--font-size-sm);
  outline: none;
  cursor: default;
  user-select: none;
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

const StyledItem = styled(DropdownMenuPrimitive.Item)`
  ${itemStyles}
`;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <StyledItem
    data-testid="dropdown__item"
    ref={ref}
    className={cx("q-dropdown-item", inset ? "inset" : undefined, className)}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const indicatorItemStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius-sm);
  padding-top: var(--spacing-1-5);
  padding-bottom: var(--spacing-1-5);
  padding-left: var(--spacing-8);
  padding-right: var(--spacing-2);
  font-size: var(--font-size-sm);
  outline: none;
  cursor: default;
  user-select: none;
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

const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem)`
  ${indicatorItemStyles}
`;

const indicatorStyles = css`
  position: absolute;
  left: var(--spacing-2);
  display: flex;
  height: var(--spacing-3-5);
  width: var(--spacing-3-5);
  align-items: center;
  justify-content: center;
`;

const StyledCheckboxIndicator = styled.span`
  ${indicatorStyles}
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
    className={cx("q-dropdown-checkbox-item", className)}
    checked={checked}
    {...props}
  >
    <StyledCheckboxIndicator className="q-dropdown-checkbox-indicator">
      <DropdownMenuPrimitive.ItemIndicator>
        <StyledCheckIcon className="q-dropdown-checkbox-icon" />
      </DropdownMenuPrimitive.ItemIndicator>
    </StyledCheckboxIndicator>
    {children}
  </StyledCheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem)`
  ${indicatorItemStyles}
`;

const StyledRadioIndicator = styled.span`
  ${indicatorStyles}
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
  <StyledRadioItem
    ref={ref}
    className={cx("q-dropdown-radio-item", className)}
    {...props}
  >
    <StyledRadioIndicator className="q-dropdown-radio-indicator">
      <DropdownMenuPrimitive.ItemIndicator>
        <StyledRadioIcon className="q-dropdown-radio-icon" />
      </DropdownMenuPrimitive.ItemIndicator>
    </StyledRadioIndicator>
    {children}
  </StyledRadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const labelStyles = css`
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

const StyledLabel = styled(DropdownMenuPrimitive.Label)`
  ${labelStyles}
`;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <StyledLabel
    ref={ref}
    className={cx("q-dropdown-label", inset ? "inset" : undefined, className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const separatorStyles = css`
  margin-left: calc(var(--spacing-1) * -1);
  margin-right: calc(var(--spacing-1) * -1);
  margin-top: var(--spacing-1);
  margin-bottom: var(--spacing-1);
  height: 1px;
  background-color: var(--color-muted);
`;

const StyledSeparator = styled(DropdownMenuPrimitive.Separator)`
  ${separatorStyles}
`;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <StyledSeparator
    ref={ref}
    className={cx("q-dropdown-separator", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const shortcutStyles = css`
  margin-left: auto;
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-widest);
  opacity: 0.6;
`;

const StyledShortcut = styled.span`
  ${shortcutStyles}
`;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <StyledShortcut className={cx("q-dropdown-shortcut", className)} {...props} />
  );
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
