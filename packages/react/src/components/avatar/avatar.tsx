import React from "react";
import styled, { css } from "styled-components";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { VariantProps, cva } from "class-variance-authority";

const avatarVariants = cva("q-avatar", {
  variants: {
    variant: {
      primary: "",
    },
    size: {
      md: "size--md",
      sm: "size--sm",
      lg: "size--lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

const avatarStyles = css`
  position: relative;
  display: flex;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: var(--border-radius-full);

  &.size--md {
    height: var(--spacing-10);
    width: var(--spacing-10);
  }

  &.size--sm {
    height: var(--spacing-9);
    width: var(--spacing-9);
  }

  &.size--lg {
    height: var(--spacing-11);
    width: var(--spacing-11);
  }
`;

const StyledAvatarRoot = styled(AvatarPrimitive.Root)`
  ${avatarStyles}
`;

const StyledAvatarImage = styled(AvatarPrimitive.Image)`
  aspect-ratio: 1 / 1;
  height: 100%;
  width: 100%;
  background-color: var(--color-black);
`;

const StyledAvatarFallback = styled(AvatarPrimitive.Fallback)`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-full);
  background-color: var(--color-muted);
`;

export type AvatarProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
> & {
  variant?: VariantProps<typeof avatarVariants>["variant"];
  size?: VariantProps<typeof avatarVariants>["size"];
  className?: string;
  children: React.ReactNode;
};

export const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, variant = "primary", size = "md", ...props }, ref) => {
  const classes = avatarVariants({ variant, size, className });

  return <StyledAvatarRoot ref={ref} className={classes} {...props} />;
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <StyledAvatarImage ref={ref} className={className} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <StyledAvatarFallback ref={ref} className={className} {...props} />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
