import { cn } from "@/lib/utils";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

export interface AvatarProps {
  variant?: VariantProps<typeof avatarVariants>["variant"];
  size?: VariantProps<typeof avatarVariants>["size"];
  className?: string;
  children: React.ReactNode;
}

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        default: "h-10 w-10",
        sm: "h-9 w-9",
        lg: "h-11 w-11",
      },
    },
  }
);

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & AvatarProps
>(({ className, variant = "default", size = "default", ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      avatarVariants({
        variant,
        size,
      }),
      className
    )}
    {...props}
  />
));

Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full bg-black", className)}
    {...props}
  />
));

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };
