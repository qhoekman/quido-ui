import React from "react";
import styled, { css } from "styled-components";
import { Drawer as ActionSheetPrimitive } from "vaul";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const ActionSheet = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof ActionSheetPrimitive.Root>) => (
  <ActionSheetPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
ActionSheet.displayName = "ActionSheet";

const ActionSheetTrigger = ActionSheetPrimitive.Trigger;

const ActionSheetPortal = ActionSheetPrimitive.Portal;

const ActionSheetClose = ActionSheetPrimitive.Close;

const actionSheetOverlayStyles = css`
  position: fixed;
  inset: 0;
  z-index: var(--z-index-50);
  background-color: hsl(from var(--color-black) h s l / 80%);
`;

const StyledActionSheetOverlay = styled(ActionSheetPrimitive.Overlay)`
  ${actionSheetOverlayStyles}
`;

const ActionSheetOverlay = React.forwardRef<
  React.ElementRef<typeof ActionSheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof ActionSheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <StyledActionSheetOverlay
    ref={ref}
    data-testid="action-sheet__overlay"
    className={cx("q-action-sheet-overlay", className)}
    {...props}
  />
));
ActionSheetOverlay.displayName = ActionSheetPrimitive.Overlay.displayName;

const actionSheetHandleStyles = css`
  margin-left: auto;
  margin-right: auto;
  margin-top: var(--spacing-4);
  height: var(--spacing-2);
  width: 100px;
  border-radius: var(--border-radius-full);
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
`;

const StyledActionSheetHandle = styled.div`
  ${actionSheetHandleStyles}
`;

const actionSheetContentStyles = css`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: var(--z-index-50);
  margin-top: var(--spacing-24);
  display: flex;
  height: auto;
  flex-direction: column;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-background);
`;

const StyledActionSheetContent = styled(ActionSheetPrimitive.Content)`
  ${actionSheetContentStyles}
`;

const ActionSheetContent = React.forwardRef<
  React.ElementRef<typeof ActionSheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ActionSheetPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ActionSheetPortal>
    <ActionSheetOverlay />
    <StyledActionSheetContent
      ref={ref}
      data-testid="action-sheet__content"
      className={cx("q-action-sheet-content", className)}
      {...props}
    >
      <StyledActionSheetHandle
        data-testid="action-sheet__handle"
        className="q-action-sheet-handle"
      />
      {children}
    </StyledActionSheetContent>
  </ActionSheetPortal>
));
ActionSheetContent.displayName = "ActionSheetContent";

const actionSheetHeaderStyles = css`
  display: grid;
  gap: var(--spacing-1-5);
  padding: var(--spacing-4);
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;

const StyledActionSheetHeader = styled.div`
  ${actionSheetHeaderStyles}
`;

const ActionSheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledActionSheetHeader
    data-testid="action-sheet__header"
    className={cx("q-action-sheet-header", className)}
    {...props}
  />
);
ActionSheetHeader.displayName = "ActionSheetHeader";

const actionSheetFooterStyles = css`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  padding: var(--spacing-4);
`;

const StyledActionSheetFooter = styled.div`
  ${actionSheetFooterStyles}
`;

const ActionSheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledActionSheetFooter
    data-testid="action-sheet__footer"
    className={cx("q-action-sheet-footer", className)}
    {...props}
  />
);
ActionSheetFooter.displayName = "ActionSheetFooter";

const actionSheetTitleStyles = css`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-none);
  letter-spacing: var(--letter-spacing-tight);
`;

const StyledActionSheetTitle = styled(ActionSheetPrimitive.Title)`
  ${actionSheetTitleStyles}
`;

const ActionSheetTitle = React.forwardRef<
  React.ElementRef<typeof ActionSheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ActionSheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <StyledActionSheetTitle
    ref={ref}
    data-testid="action-sheet__title"
    className={cx("q-action-sheet-title", className)}
    {...props}
  />
));
ActionSheetTitle.displayName = ActionSheetPrimitive.Title.displayName;

const actionSheetDescriptionStyles = css`
  font-size: var(--font-size-sm);
  color: var(--color-background-fg);
`;

const StyledActionSheetDescription = styled(ActionSheetPrimitive.Description)`
  ${actionSheetDescriptionStyles}
`;

const ActionSheetDescription = React.forwardRef<
  React.ElementRef<typeof ActionSheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ActionSheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <StyledActionSheetDescription
    ref={ref}
    data-testid="action-sheet__description"
    className={cx("q-action-sheet-description", className)}
    {...props}
  />
));
ActionSheetDescription.displayName =
  ActionSheetPrimitive.Description.displayName;

export {
  ActionSheet,
  ActionSheetClose,
  ActionSheetContent,
  ActionSheetDescription,
  ActionSheetFooter,
  ActionSheetHeader,
  ActionSheetOverlay,
  ActionSheetPortal,
  ActionSheetTitle,
  ActionSheetTrigger,
};
