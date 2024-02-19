import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/radio-group/radio-group";
import { cn } from "@/lib/utils";
import {
  RadioGroupItemProps,
  RadioGroupProps,
} from "@radix-ui/react-radio-group";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const colorSelectorItemVariants = cva(
  "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 border-gray-200 border-1 focus:outline-none",
  {
    variants: {
      color: {
        blue: "bg-blue-500",
        gray: "bg-gray-500",
        green: "bg-green-500",
        indigo: "bg-indigo-500",
        pink: "bg-pink-500",
        purple: "bg-purple-500",
        red: "bg-red-500",
        yellow: "bg-yellow-500",
      },
    },
  }
);

type ColorSelectorItemProps = RadioGroupItemProps & {
  color: VariantProps<typeof colorSelectorItemVariants>["color"];
  selected?: boolean;
};

export const ColorSelectorItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupItem>,
  ColorSelectorItemProps
>(({ className, color, children, ...props }, ref) => {
  console.warn(props, ref);
  return (
    <RadioGroupItem
      ref={ref}
      className={cn(
        colorSelectorItemVariants({
          color,
        }),
        className
      )}
      {...props}
    >
      {children ?? (
        <div
          className={"w-4 h-4 rounded-full ring-1 ring-offset-1 ring-black"}
        />
      )}
    </RadioGroupItem>
  );
});

ColorSelectorItem.displayName = "ColorSelectorItem";

export const ColorSelectorItems = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center space-x-3", className)}
      {...props}
    >
      {props.children}
    </div>
  );
});
ColorSelectorItems.displayName = "ColorSelectorItems";

type ColorSelectorProps = RadioGroupProps;

export const ColorSelector = React.forwardRef<
  React.ElementRef<typeof RadioGroup>,
  ColorSelectorProps
>(({ className, children, ...props }, ref) => {
  const [selectedColor, setSelectedColor] = React.useState("");

  const handleChange = (value: string) => {
    setSelectedColor(value);
  };

  return (
    <RadioGroup
      ref={ref}
      defaultValue={selectedColor}
      onValueChange={handleChange}
      className={cn(className)}
      {...props}
    >
      {children}
    </RadioGroup>
  );
});

ColorSelector.displayName = "ColorSelector";
