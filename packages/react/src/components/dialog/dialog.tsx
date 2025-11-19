import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import * as React from "react";
import styled from "styled-components";

const Dialog = DialogPrimitive.Root;
Dialog.displayName = "Dialog";

const DialogTrigger = DialogPrimitive.Trigger;
DialogTrigger.displayName = "DialogTrigger";

const DialogPortal = DialogPrimitive.Portal;
DialogPortal.displayName = "DialogPortal";

const DialogClose = DialogPrimitive.Close;
DialogClose.displayName = "DialogClose";

const StyledDialogOverlay = styled(DialogPrimitive.Overlay)`
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

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <StyledDialogOverlay ref={ref} className={className} {...props} />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const StyledDialogClose = styled(DialogPrimitive.Close)`
  position: absolute;
  right: var(--spacing-4);
  top: var(--spacing-4);
  border-radius: var(--border-radius-sm);
  opacity: 0.7;
  transition: opacity 0.3s;
  outline: none;
  box-shadow: 0 0 0 0 var(--color-background);
  color: var(--color-background-fg);
  fill: currentColor;

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

const StyledDialogContent = styled(DialogPrimitive.Content)`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: var(--z-index-50);
  display: grid;
  width: 100%;
  max-width: var(--columns-lg);
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
`;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <StyledDialogContent ref={ref} className={className} {...props}>
      {children}
      <StyledDialogClose>
        <X style={{ width: "var(--spacing-4)", height: "var(--spacing-4)" }} />
        <span className="sr-only">Close</span>
      </StyledDialogClose>
    </StyledDialogContent>
  </DialogPortal>
));
DialogContent.displayName = "DialogContent";

const StyledDialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1-5);
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledDialogHeader className={className} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const StyledDialogFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: var(--spacing-2);

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledDialogFooter className={className} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const StyledDialogTitle = styled(DialogPrimitive.Title)`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-none);
  letter-spacing: var(--letter-spacing-tight);
`;

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <StyledDialogTitle ref={ref} className={className} {...props} />
));
DialogTitle.displayName = "DialogTitle";

const StyledDialogDescription = styled(DialogPrimitive.Description)`
  font-size: var(--font-size-sm);
  color: var(--color-muted-fg);
`;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <StyledDialogDescription ref={ref} className={className} {...props} />
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
