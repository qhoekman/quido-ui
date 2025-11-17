import React from "react";
import styled from "styled-components";
import { Drawer as ActionSheetPrimitive } from "vaul";

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

const StyledActionSheetOverlay = styled(ActionSheetPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  z-index: var(--z-index-50);
  background-color: hsl(from var(--color-black) h s l / 80%);
`;

const ActionSheetOverlay = React.forwardRef<
  React.ElementRef<typeof ActionSheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof ActionSheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <StyledActionSheetOverlay ref={ref} className={className} {...props} />
));
ActionSheetOverlay.displayName = ActionSheetPrimitive.Overlay.displayName;

const StyledActionSheetHandle = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: var(--spacing-4);
  height: var(--spacing-2);
  width: 100px;
  border-radius: var(--border-radius-full);
  background-color: var(--color-neutral-100);
`;

const StyledActionSheetContent = styled(ActionSheetPrimitive.Content)`
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

const ActionSheetContent = React.forwardRef<
  React.ElementRef<typeof ActionSheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ActionSheetPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ActionSheetPortal>
    <ActionSheetOverlay />
    <StyledActionSheetContent ref={ref} className={className} {...props}>
      <StyledActionSheetHandle />
      {children}
    </StyledActionSheetContent>
  </ActionSheetPortal>
));
ActionSheetContent.displayName = "ActionSheetContent";

const StyledActionSheetHeader = styled.div`
  display: grid;
  gap: var(--spacing-1-5);
  padding: var(--spacing-4);
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;

const ActionSheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledActionSheetHeader className={className} {...props} />
);
ActionSheetHeader.displayName = "ActionSheetHeader";

const StyledActionSheetFooter = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  padding: var(--spacing-4);
`;

const ActionSheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledActionSheetFooter className={className} {...props} />
);
ActionSheetFooter.displayName = "ActionSheetFooter";

const StyledActionSheetTitle = styled(ActionSheetPrimitive.Title)`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-none);
  letter-spacing: var(--letter-spacing-tight);
`;

const ActionSheetTitle = React.forwardRef<
  React.ElementRef<typeof ActionSheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ActionSheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <StyledActionSheetTitle ref={ref} className={className} {...props} />
));
ActionSheetTitle.displayName = ActionSheetPrimitive.Title.displayName;

const StyledActionSheetDescription = styled(ActionSheetPrimitive.Description)`
  font-size: var(--font-size-sm);
  color: var(--color-background-fg);
`;

const ActionSheetDescription = React.forwardRef<
  React.ElementRef<typeof ActionSheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ActionSheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <StyledActionSheetDescription ref={ref} className={className} {...props} />
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
