import { cn } from "@/lib/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import React from "react";

type TieredGalleryProps = TabsPrimitive.TabsProps;

export const TieredGallery = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TieredGalleryProps
>(({ className, children, ...props }, ref) => {
  return (
    <TabsPrimitive.Root
      ref={ref}
      className={cn("flex flex-col-reverse", className)}
      {...props}
    >
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabsPrimitive.List className="flex justify-center space-x-4">
          {React.Children.map(children, (child, i) => {
            return (
              <TabsPrimitive.Trigger
                key={`tab-${i}`}
                value={`${i}`}
                className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
              >
                {child}
              </TabsPrimitive.Trigger>
            );
          })}
        </TabsPrimitive.List>
      </div>
      <div className="aspect-square w-full">
        {React.Children.map(children, (child, i) => {
          return (
            <TabsPrimitive.Content
              key={`tabcontent-${i}`}
              value={`${i}`}
              className="mt-2"
            >
              {child}
            </TabsPrimitive.Content>
          );
        })}
      </div>
    </TabsPrimitive.Root>
  );
});

TieredGallery.displayName = "TieredGallery";

export const TieredGalleryImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => {
  return (
    <img
      ref={ref}
      className={cn("h-full w-full object-cover object-center", className)}
      {...props}
    />
  );
});

TieredGalleryImage.displayName = "TieredGalleryImage";
