import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import * as React from "react";
import styled, { css } from "styled-components";
import { cva, type VariantProps } from "class-variance-authority";

const cx = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const Dialog = DialogPrimitive.Root;
Dialog.displayName = "Dialog";

const DialogTrigger = DialogPrimitive.Trigger;
DialogTrigger.displayName = "DialogTrigger";

const DialogPortal = DialogPrimitive.Portal;
DialogPortal.displayName = "DialogPortal";

const DialogClose = DialogPrimitive.Close;
DialogClose.displayName = "DialogClose";

const dialogOverlayStyles = css`
  position: fixed;
  inset: 0;
  z-index: var(--z-index-50);
  background-color: hsl(from var(--color-background) h s l / 80%);
  backdrop-filter: blur(var(--blur-sm));

  &[data-state="open"] {
    animation: fade-in 0.2s ease-in-out;
  }

  &[data-state="closed"] {
    animation: fade-out 0.2s ease-in-out;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const StyledDialogOverlay = styled(DialogPrimitive.Overlay)`
  ${dialogOverlayStyles}
`;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <StyledDialogOverlay
    ref={ref}
    className={cx("q-dialog-overlay", className)}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const dialogCloseStyles = css`
  position: absolute;
  right: var(--spacing-4);
  top: var(--spacing-4);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0 none;
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-2);
  background: transparent;
  opacity: 0.7;
  transition: opacity 0.3s;
  outline: none;
  box-shadow: 0 0 0 0 var(--color-background);
  color: var(--color-background-fg);
  fill: currentColor;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
  }

  &:disabled {
    pointer-events: none;
  }

  &[data-state="open"] {
    background-color: var(--color-accent);
    color: var(--color-muted-fg);
  }
`;

const StyledDialogClose = styled(DialogPrimitive.Close)`
  ${dialogCloseStyles}
`;

const StyledCloseIcon = styled(X)`
  width: var(--spacing-4);
  height: var(--spacing-4);
`;

const dialogContentVariants = cva("q-dialog-content", {
  variants: {
    size: {
      sm: "size--sm",
      md: "size--md",
      lg: "size--lg",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

const dialogContentStyles = css`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: var(--z-index-50);
  display: grid;
  width: 100%;
  transform: translate(-50%, -50%);
  gap: var(--spacing-4);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-background);
  padding: var(--spacing-6);
  box-shadow: var(--box-shadow-lg);
  transition-duration: 200ms;

  &[data-state="open"] {
    animation: fade-in 0.2s ease-in-out;
  }

  &[data-state="closed"] {
    animation: fade-out 0.2s ease-in-out;
  }

  @media (min-width: 640px) {
    border-radius: var(--border-radius-lg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  &.size--sm {
    max-width: var(--columns-sm);
  }

  &.size--md {
    max-width: var(--columns-md);
  }

  &.size--lg {
    max-width: var(--columns-lg);
  }
`;

const StyledDialogContent = styled(DialogPrimitive.Content)`
  ${dialogContentStyles}
`;

export type DialogContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> &
  VariantProps<typeof dialogContentVariants>;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, size, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <StyledDialogContent
      data-testid="dialog__content"
      ref={ref}
      className={dialogContentVariants({ size, className })}
      {...props}
    >
      {children}
      <StyledDialogClose data-testid="dialog__close" className="q-dialog-close">
        <StyledCloseIcon />
        <span className="sr-only">Close</span>
      </StyledDialogClose>
    </StyledDialogContent>
  </DialogPortal>
));
DialogContent.displayName = "DialogContent";

const dialogHeaderStyles = css`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1-5);
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;

const StyledDialogHeader = styled.div`
  ${dialogHeaderStyles}
`;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledDialogHeader className={cx("q-dialog-header", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const dialogFooterStyles = css`
  display: flex;
  flex-direction: column-reverse;
  gap: var(--spacing-2);

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const StyledDialogFooter = styled.div`
  ${dialogFooterStyles}
`;

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledDialogFooter className={cx("q-dialog-footer", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const dialogTitleStyles = css`
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-none);
  letter-spacing: var(--letter-spacing-tight);
`;

const StyledDialogTitle = styled(DialogPrimitive.Title)`
  ${dialogTitleStyles}
`;

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <StyledDialogTitle
    data-testid="dialog__title"
    ref={ref}
    className={cx("q-dialog-title", className)}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

const dialogDescriptionStyles = css`
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-muted-fg);
`;

const StyledDialogDescription = styled(DialogPrimitive.Description)`
  ${dialogDescriptionStyles}
`;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <StyledDialogDescription
    data-testid="dialog__description"
    ref={ref}
    className={cx("q-dialog-description", className)}
    {...props}
  />
));
DialogDescription.displayName = "DialogDescription";

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
