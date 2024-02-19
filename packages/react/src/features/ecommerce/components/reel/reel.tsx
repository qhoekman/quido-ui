import { useReelButton } from "@/features/ecommerce/components/reel/useReelButton";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

type ReelProps = React.HTMLAttributes<HTMLDivElement>;

export const Reel = React.forwardRef<HTMLDivElement, ReelProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex", className)} {...props}>
        {props.children}
      </div>
    );
  }
);

type ReelItemsProps = React.HTMLAttributes<HTMLDivElement>;

export const ReelItems = React.forwardRef<HTMLDivElement, ReelItemsProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-reel-items
        className={cn(
          "flex h-full overflow-x-auto overflow-y-hidden",
          className
        )}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);

type ReelItemProps = React.HTMLAttributes<HTMLDivElement>;

export const ReelItem = React.forwardRef<HTMLDivElement, ReelItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          " flex-grow-0 flex-shrink-0 flex-auto w-40 h-40",
          className
        )}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);

type ReelButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ReelButton = React.forwardRef<HTMLButtonElement, ReelButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center justify-center w-40 h-40 bg-gray-100 rounded-md",
          className
        )}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);

export const ReelButtonNext: React.FC<ReelButtonProps> = ({
  className,
  children,
  ...props
}) => {
  const { moveReel, canNext, containerRef } = useReelButton();

  const handleClick = () => {
    moveReel("next");
  };

  return (
    <ReelButton
      ref={containerRef}
      className={cn(className)}
      onClick={handleClick}
      disabled={canNext}
      {...props}
    >
      {children ?? <ChevronRight className="w-6 h-6" />}
    </ReelButton>
  );
};

export const ReelButtonPrevious: React.FC<ReelButtonProps> = ({
  className,
  children,
  ...props
}) => {
  const { moveReel, canPrev, containerRef } = useReelButton();

  const handleClick = () => {
    moveReel("prev");
  };

  return (
    <ReelButton
      ref={containerRef}
      className={cn(className)}
      onClick={handleClick}
      disabled={canPrev}
      {...props}
    >
      {children ?? <ChevronLeft className="w-6 h-6" />}
    </ReelButton>
  );
};
