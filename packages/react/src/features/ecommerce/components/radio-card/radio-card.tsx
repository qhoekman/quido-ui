import { Label, LabelProps } from "@/components/label/label";
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemIndicator,
} from "@/components/radio-group/radio-group";
import { cn } from "@/lib/utils";
import {
  RadioGroupItemProps,
  RadioGroupProps,
} from "@radix-ui/react-radio-group";
import React from "react";

type RadioCardProps = RadioGroupProps;

export const RadioCard = React.forwardRef<
  React.ElementRef<typeof RadioGroup>,
  RadioCardProps
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroup className={cn("grid gap-3 ", className)} {...props} ref={ref}>
      {children}
    </RadioGroup>
  );
});
RadioCard.displayName = RadioGroup.displayName;

type RadioCardItemProps = RadioGroupItemProps;
export const RadioCardItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupItem>,
  RadioCardItemProps
>(({ children, className, ...props }, ref) => {
  return (
    <RadioGroupItem
      className={cn(
        "aspect-square flex flex-col p-4 items-center justify-center relative w-full h-full rounded-lg border border-gray-200 shadow-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-200 disabled:text-gray-800",
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
      <RadioGroupItemIndicator className="absolute top-0 left-0 w-full h-full p-4 border-2 border-primary">
        <div />
      </RadioGroupItemIndicator>
    </RadioGroupItem>
  );
});

RadioCardItem.displayName = RadioGroupItem.displayName;

type RadioCardItemLabelProps = LabelProps;
export const RadioCardItemLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  RadioCardItemLabelProps
>(({ className, ...props }, ref) => {
  return <Label ref={ref} className={cn("text-sm", className)} {...props} />;
});
RadioCardItemLabel.displayName = "RadioCardItemLabel";

type RadioCardItemDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
export const RadioCardItemDescription = React.forwardRef<
  HTMLParagraphElement,
  RadioCardItemDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("mt-1 text-sm text-left ", className)}
      {...props}
    />
  );
});

RadioCardItemDescription.displayName = "RadioCardItemDescription";
