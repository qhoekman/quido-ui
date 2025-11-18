import { useReelButton } from "@/features/ecommerce/components/reel/useReelButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import styled from "styled-components";

const StyledReel = styled.div`
  display: flex;
`;

const StyledReelItems = styled.div`
  display: flex;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;

const StyledReelItem = styled.div`
  flex: 0 0 auto;
  width: var(--spacing-40);
  min-width: var(--spacing-40);
  height: var(--spacing-40);
`;

const StyledReelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--spacing-4);
  min-width: var(--spacing-4);
  height: var(--spacing-40);
  flex-shrink: 0;
  background-color: var(--color-muted);
  color: var(--color-muted-fg);
  border-radius: var(--border-radius-md);
`;

type ReelProps = React.HTMLAttributes<HTMLDivElement>;

export const Reel = React.forwardRef<HTMLDivElement, ReelProps>(
  ({ className, ...props }, ref) => {
    return (
      <StyledReel ref={ref} className={className} {...props}>
        {props.children}
      </StyledReel>
    );
  }
);
Reel.displayName = "Reel";

type ReelItemsProps = React.HTMLAttributes<HTMLDivElement>;

export const ReelItems = React.forwardRef<HTMLDivElement, ReelItemsProps>(
  ({ className, ...props }, ref) => {
    return (
      <StyledReelItems
        ref={ref}
        data-reel-items
        className={className}
        {...props}
      >
        {props.children}
      </StyledReelItems>
    );
  }
);
ReelItems.displayName = "ReelItems";

type ReelItemProps = React.HTMLAttributes<HTMLDivElement>;

export const ReelItem = React.forwardRef<HTMLDivElement, ReelItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <StyledReelItem ref={ref} className={className} {...props}>
        {props.children}
      </StyledReelItem>
    );
  }
);
ReelItem.displayName = "ReelItem";

type ReelButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ReelButton = React.forwardRef<HTMLButtonElement, ReelButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <StyledReelButton ref={ref} className={className} {...props}>
        {props.children}
      </StyledReelButton>
    );
  }
);
ReelButton.displayName = "ReelButton";

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
      className={className}
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
      className={className}
      onClick={handleClick}
      disabled={canPrev}
      {...props}
    >
      {children ?? <ChevronLeft className="w-6 h-6" />}
    </ReelButton>
  );
};
